/**
 * tests/tutor-contract.test.cjs
 *
 * Contract tests for strict-tutor bundle integrity, mirror parity, seed synchronization,
 * web prompt generator deterministic checks, mutation fixtures, and installer smoke testing.
 * Uses pure Node.js built-ins (node:test, node:assert, node:fs, node:child_process).
 */

const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { execFileSync } = require('node:child_process');

const REPO_ROOT = path.resolve(__dirname, '..');
const CANONICAL_DIR = path.join(REPO_ROOT, 'skills', 'strict-tutor');
const AGENT_DIR = path.join(REPO_ROOT, '.agents', 'skills', 'strict-tutor');
const SEED_FILE = path.join(REPO_ROOT, 'process', '_seeds', 'learning-session.md.seed');

test('Parity: Canonical and Agent Mirror trees are byte-for-byte identical', () => {
  const filesToVerify = [
    'SKILL.md',
    path.join('references', 'anti-cargo-cult-rules.md'),
    path.join('references', 'pedagogy-rubric.md'),
    path.join('references', 'session-template.md'),
    'web-prompt.md'
  ];

  for (const rel of filesToVerify) {
    const canonicalPath = path.join(CANONICAL_DIR, rel);
    const agentPath = path.join(AGENT_DIR, rel);

    assert.ok(fs.existsSync(canonicalPath), `Canonical missing: ${rel}`);
    assert.ok(fs.existsSync(agentPath), `Agent mirror missing: ${rel}`);

    const canonicalContent = fs.readFileSync(canonicalPath, 'utf8');
    const agentContent = fs.readFileSync(agentPath, 'utf8');

    assert.strictEqual(
      canonicalContent,
      agentContent,
      `Mirror mismatch detected for ${rel}`
    );
  }
});

test('Parity: Session template matches process learning session seed', () => {
  const templatePath = path.join(CANONICAL_DIR, 'references', 'session-template.md');
  assert.ok(fs.existsSync(templatePath), 'session-template.md must exist');
  assert.ok(fs.existsSync(SEED_FILE), 'learning-session.md.seed must exist');

  const templateContent = fs.readFileSync(templatePath, 'utf8');
  const seedContent = fs.readFileSync(SEED_FILE, 'utf8');

  assert.strictEqual(
    templateContent,
    seedContent,
    'learning-session.md.seed must match session-template.md exactly'
  );
});

test('Web Prompt: Deterministic build and check mode', () => {
  const scriptPath = path.join(REPO_ROOT, 'scripts', 'build-tutor-web.cjs');
  const checkResult = execFileSync(process.execPath, [scriptPath, '--check'], {
    encoding: 'utf8'
  });
  assert.match(checkResult, /CHECK PASSED/);
});

test('Web Prompt: Content integrity and no unresolved local references', () => {
  const webPromptPath = path.join(CANONICAL_DIR, 'web-prompt.md');
  const content = fs.readFileSync(webPromptPath, 'utf8');

  // Verify no raw relative reference file links remain
  assert.ok(
    !content.includes('./references/'),
    'web-prompt.md must not contain unresolved ./references/ links'
  );

  // Key policy anchors must be present
  const requiredAnchors = [
    'EXPLORE',
    'UNDERSTAND',
    'PRACTICE',
    'ASSESS',
    'UNASSESSED',
    'INTRODUCED',
    'ASSISTED',
    'INDEPENDENT',
    'Instant Persona Exit',
    'Platform & Environment Note',
    'Appendix A: Anti-Rote, Anti-Cargo-Culting & Recovery Heuristics',
    'Appendix B: Pedagogical Rubrics & Evidence Guidelines',
    'Appendix C: Tutor Session State Schema Template',
    'TOPDOWN_ROADMAP',
    'Next-Hop Compass',
    'Avoiding the "Bottom-Up Internals Rabbit Hole"',
    'SATELLITE_RADAR',
    '--radar',
    'Satellite Radar Output Format',
    'Anti-Monolithic Chat Wall & Web-Grade Cognitive Ergonomics',
    'Satellite Radar & Web Grounding Rubric'
  ];

  for (const anchor of requiredAnchors) {
    assert.ok(
      content.includes(anchor),
      `web-prompt.md missing key required policy anchor: ${anchor}`
    );
  }
});

test('Web Prompt: Stale/Mutation detection exits non-zero in check mode', () => {
  const scriptPath = path.join(REPO_ROOT, 'scripts', 'build-tutor-web.cjs');
  const targetFile = path.join(AGENT_DIR, 'web-prompt.md');
  const originalContent = fs.readFileSync(targetFile, 'utf8');

  try {
    // Mutate file to simulate stale build
    fs.writeFileSync(targetFile, originalContent + '\n<!-- MUTATION -->', 'utf8');

    let threw = false;
    try {
      execFileSync(process.execPath, [scriptPath, '--check'], {
        encoding: 'utf8',
        stdio: 'pipe'
      });
    } catch (err) {
      threw = true;
      assert.strictEqual(err.status, 1, 'Check should exit with code 1 on mismatch');
    }
    assert.ok(threw, 'Expected build-tutor-web.cjs --check to fail on mutated file');
  } finally {
    // Restore original content
    fs.writeFileSync(targetFile, originalContent, 'utf8');
  }
});

test('Eval Dataset: tutor-cases.json schema, unique IDs, and 19-pair coverage', () => {
  const casesPath = path.join(REPO_ROOT, 'tests', 'evals', 'tutor-cases.json');
  assert.ok(fs.existsSync(casesPath), 'tutor-cases.json must exist');

  const cases = JSON.parse(fs.readFileSync(casesPath, 'utf8'));
  assert.strictEqual(cases.length, 38, 'Expected exactly 38 test cases (19 base + 19 variants)');

  const ids = new Set();
  const baseIds = new Set();

  for (const c of cases) {
    assert.ok(c.id, 'Case must have id');
    assert.ok(!ids.has(c.id), `Duplicate case id: ${c.id}`);
    ids.add(c.id);

    assert.ok(c.base_case_id, `Case ${c.id} must have base_case_id`);
    baseIds.add(c.base_case_id);

    assert.ok(['critical', 'quality'].includes(c.severity), `Invalid severity in ${c.id}`);
    assert.ok(['en', 'vi'].includes(c.language), `Invalid language in ${c.id}`);
    assert.ok(Array.isArray(c.history), `History must be array in ${c.id}`);
    assert.ok(typeof c.user_input === 'string' && c.user_input.length > 0, `user_input required in ${c.id}`);
    assert.ok(typeof c.expected_behavior === 'string' && c.expected_behavior.length > 0, `expected_behavior required in ${c.id}`);
    assert.ok(typeof c.forbidden_behavior === 'string' && c.forbidden_behavior.length > 0, `forbidden_behavior required in ${c.id}`);
    assert.ok(typeof c.observation_rubric === 'string' && c.observation_rubric.length > 0, `observation_rubric required in ${c.id}`);
  }

  const expectedBases = [
    'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10', 'E11', 'E12',
    'LX1', 'LX2', 'LX3', 'LX4', 'LX5', 'LX6', 'LX7'
  ];

  for (const b of expectedBases) {
    assert.ok(baseIds.has(b), `Missing coverage for base case ${b}`);
    assert.ok(ids.has(`${b}-base`), `Missing ${b}-base`);
    assert.ok(ids.has(`${b}-var`), `Missing ${b}-var`);
  }
});

test('Installer Smoke: bin/cli.js --help and --version', () => {
  const cliPath = path.join(REPO_ROOT, 'bin', 'cli.js');

  const helpOut = execFileSync(process.execPath, [cliPath, '--help'], { encoding: 'utf8' });
  const cleanHelp = helpOut.replace(/\x1b\[[0-9;]*m/g, '');
  assert.match(cleanHelp, /Usage:\s+npx agent-as-a-tutor/);

  const versionOut = execFileSync(process.execPath, [cliPath, '--version'], { encoding: 'utf8' });
  assert.match(versionOut, /\d+\.\d+\.\d+/);
});

test('Installer Smoke: fresh directory installation in isolated tempdir', () => {
  const cliPath = path.join(REPO_ROOT, 'bin', 'cli.js');
  const tmpBase = fs.mkdtempSync(path.join(os.tmpdir(), 'tutor-install-test-'));

  try {
    const installOut = execFileSync(process.execPath, [cliPath, tmpBase], { encoding: 'utf8' });
    assert.match(installOut, /Installation Scope:/);

    // Verify files copied to target .agents/skills/strict-tutor
    const installedDir = path.join(tmpBase, '.agents', 'skills', 'strict-tutor');
    assert.ok(fs.existsSync(path.join(installedDir, 'SKILL.md')), 'SKILL.md must be installed');
    assert.ok(fs.existsSync(path.join(installedDir, 'references', 'pedagogy-rubric.md')), 'pedagogy-rubric.md must be installed');
    assert.ok(fs.existsSync(path.join(installedDir, 'references', 'anti-cargo-cult-rules.md')), 'anti-cargo-cult-rules.md must be installed');
    assert.ok(fs.existsSync(path.join(installedDir, 'references', 'session-template.md')), 'session-template.md must be installed');
    assert.ok(fs.existsSync(path.join(installedDir, 'web-prompt.md')), 'web-prompt.md must be installed');

    // Content parity check between canonical and newly installed
    const canonicalSkill = fs.readFileSync(path.join(CANONICAL_DIR, 'SKILL.md'), 'utf8');
    const installedSkill = fs.readFileSync(path.join(installedDir, 'SKILL.md'), 'utf8');
    assert.strictEqual(installedSkill, canonicalSkill, 'Installed SKILL.md must match canonical source');
  } finally {
    fs.rmSync(tmpBase, { recursive: true, force: true });
  }
});
