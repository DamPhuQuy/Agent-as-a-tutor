#!/usr/bin/env node

/**
 * agent-as-a-tutor CLI
 * Installs the Strict Socratic Tutor skill and framework into project or folder scope.
 * Features the signature SKILLS ASCII banner and Clack-style UI.
 * Zero external dependencies: pure Node.js built-ins.
 */

const fs = require('node:fs');
const path = require('node:path');
const process = require('node:process');

const PKG_ROOT = path.resolve(__dirname, '..');
const args = process.argv.slice(2);

// ANSI Color Palette matching the 'skills' CLI
const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';
const DIM = '\x1b[38;5;102m';
const TEXT = '\x1b[38;5;145m';
const CYAN = '\x1b[36m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const RED = '\x1b[31m';

const LOGO_LINES = [
  '███████╗██╗  ██╗██╗██╗     ██╗     ███████╗',
  '██╔════╝██║ ██╔╝██║██║     ██║     ██╔════╝',
  '███████╗█████╔╝ ██║██║     ██║     ███████╗',
  '╚════██║██╔═██╗ ██║██║     ██║     ╚════██║',
  '███████║██║  ██╗██║███████╗███████╗███████║',
  '╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝'
];

const GRAYS = [
  '\x1b[38;5;250m',
  '\x1b[38;5;248m',
  '\x1b[38;5;245m',
  '\x1b[38;5;243m',
  '\x1b[38;5;240m',
  '\x1b[38;5;238m'
];

function showLogo() {
  console.log();
  LOGO_LINES.forEach((line, i) => {
    console.log(`${GRAYS[i]}${line}${RESET}`);
  });
}

function showBanner() {
  showLogo();
  console.log();
  console.log(`${DIM}The open agent skills ecosystem${RESET} • ${CYAN}strict-tutor${RESET}`);
  console.log();
}

// Help documentation
if (args.includes('-h') || args.includes('--help')) {
  showBanner();
  console.log(`${BOLD}Usage:${RESET} npx agent-as-a-tutor [target_directory] [options]`);
  console.log();
  console.log(`${BOLD}Manage Skill:${RESET}`);
  console.log(`  ${DIM}$${RESET} ${TEXT}npx agent-as-a-tutor .${RESET}                  ${DIM}Install into current project scope${RESET}`);
  console.log(`  ${DIM}$${RESET} ${TEXT}npx agent-as-a-tutor <dir>${RESET}              ${DIM}Install into project or subfolder scope${RESET}`);
  console.log(`  ${DIM}$${RESET} ${TEXT}npx agent-as-a-tutor . --force${RESET}          ${DIM}Force overwrite existing files${RESET}`);
  console.log();
  console.log(`${BOLD}Ecosystem Compatibility:${RESET}`);
  console.log(`  ${DIM}$${RESET} ${TEXT}npx skills add DamPhuQuy/agent-as-a-tutor${RESET}`);
  console.log();
  console.log(`${BOLD}Options:${RESET}`);
  console.log(`  -f, --force    Overwrite existing files`);
  console.log(`  -h, --help     Show this help message`);
  console.log(`  -v, --version  Show version number`);
  console.log();
  console.log(`Discover more skills at ${TEXT}https://skills.sh/${RESET}`);
  console.log();
  process.exit(0);
}

// Version flag
if (args.includes('-v') || args.includes('--version')) {
  try {
    const pkg = JSON.parse(fs.readFileSync(path.join(PKG_ROOT, 'package.json'), 'utf8'));
    console.log(pkg.version);
  } catch {
    console.log('1.0.0');
  }
  process.exit(0);
}

const isForce = args.includes('-f') || args.includes('--force');
const targetArg = args.find(a => !a.startsWith('-')) || '.';
const targetDir = path.resolve(process.cwd(), targetArg);

// Print the signature SKILLS banner
showBanner();

console.log(`${CYAN}│${RESET}`);
console.log(`${CYAN}◇${RESET}  ${BOLD}Skill:${RESET} ${CYAN}strict-tutor${RESET}`);
console.log(`${CYAN}│${RESET}  ${DIM}Strict Socratic tutor enforcing the 5-Step Understanding Framework,${RESET}`);
console.log(`${CYAN}│${RESET}  ${DIM}Anti-Rote & Anti-Cargo-Culting rules, and Evidence-First Quality Gates.${RESET}`);
console.log(`${CYAN}│${RESET}`);

const relTarget = path.relative(process.cwd(), targetDir) || '.';
console.log(`${CYAN}◇${RESET}  ${BOLD}Installation Scope:${RESET} ${BOLD}${relTarget === '.' ? 'Current Project Root' : relTarget}${RESET} ${DIM}(${targetDir})${RESET}`);
console.log(`${CYAN}│${RESET}`);

// 1. Verify source exists
const sourceSkillDir = path.join(PKG_ROOT, 'skills', 'strict-tutor');
if (!fs.existsSync(sourceSkillDir)) {
  console.log(`${RED}└  Error: Cannot find source skill directory at ${sourceSkillDir}${RESET}`);
  process.exit(1);
}

// Helper to copy recursively
function copyDirRecursive(src, dest, overwrite, onFile) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath, overwrite, onFile);
    } else {
      if (!fs.existsSync(destPath) || overwrite) {
        fs.copyFileSync(srcPath, destPath);
        if (onFile) onFile(destPath);
      }
    }
  }
}

console.log(`${CYAN}◇${RESET}  ${BOLD}Installing to agent directories...${RESET}`);

// Target directories: Primary .agents/skills (Agent customization root) + skills (compatibility)
const targetAgentSkillsDir = path.join(targetDir, '.agents', 'skills', 'strict-tutor');
const targetLegacySkillsDir = path.join(targetDir, 'skills', 'strict-tutor');

// Track installed files for pretty reporting
const installedFiles = new Set();

// 1. Install into .agents/skills/strict-tutor (Primary agent customization root)
copyDirRecursive(sourceSkillDir, targetAgentSkillsDir, isForce, (f) => {
  installedFiles.add(path.relative(targetDir, f));
});

// 2. Mirror into skills/strict-tutor for backward compatibility
copyDirRecursive(sourceSkillDir, targetLegacySkillsDir, isForce, (f) => {
  installedFiles.add(path.relative(targetDir, f));
});

// Seed installation
const sourceSeed = path.join(PKG_ROOT, 'process', '_seeds', 'learning-session.md.seed');
if (fs.existsSync(sourceSeed)) {
  const targetSeedsDir = path.join(targetDir, 'process', '_seeds');
  if (fs.existsSync(path.join(targetDir, 'process')) || fs.existsSync(targetSeedsDir)) {
    fs.mkdirSync(targetSeedsDir, { recursive: true });
    const targetSeedPath = path.join(targetSeedsDir, 'learning-session.md.seed');
    if (!fs.existsSync(targetSeedPath) || isForce) {
      fs.copyFileSync(sourceSeed, targetSeedPath);
      installedFiles.add(path.relative(targetDir, targetSeedPath));
    }
  }
}

// Update AGENTS.md if present
let agentsMdUpdated = false;
const targetAgentsMd = path.join(targetDir, 'AGENTS.md');
if (fs.existsSync(targetAgentsMd)) {
  let content = fs.readFileSync(targetAgentsMd, 'utf8');
  const tutorCommand = `      - Command \`/tutor <topic>\`: activates the Strict Socratic Tutor skill (\`.agents/skills/strict-tutor/SKILL.md\`) enforcing the 5-Step Understanding Framework, Anti-Rote & Anti-Cargo-Culting rules, and Evidence-First Quality Gates.\n`;
  if (!content.includes('/tutor')) {
    if (content.includes('Prompt & Slash Command Initialization')) {
      content = content.replace(/(Prompt & Slash Command Initialization:[^\n]*\n)/, `$1${tutorCommand}`);
      fs.writeFileSync(targetAgentsMd, content, 'utf8');
      agentsMdUpdated = true;
    }
  } else if (content.includes('skills/strict-tutor/SKILL.md') && !content.includes('.agents/skills/strict-tutor/SKILL.md')) {
    content = content.replace(/skills\/strict-tutor\/SKILL\.md/g, '.agents/skills/strict-tutor/SKILL.md');
    fs.writeFileSync(targetAgentsMd, content, 'utf8');
    agentsMdUpdated = true;
  }
}

// Print installed file list with clack bullets
const fileList = Array.from(installedFiles);
const previewFiles = [
  '.agents/skills/strict-tutor/SKILL.md',
  '.agents/skills/strict-tutor/references/pedagogy-rubric.md',
  '.agents/skills/strict-tutor/references/anti-cargo-cult-rules.md',
  '.agents/skills/strict-tutor/references/session-template.md'
];

previewFiles.forEach(pf => {
  console.log(`${CYAN}│${RESET}  ${GREEN}✔${RESET} ${DIM}${pf}${RESET}`);
});
if (agentsMdUpdated) {
  console.log(`${CYAN}│${RESET}  ${GREEN}✔${RESET} ${DIM}AGENTS.md (registered /tutor command in .agents/skills)${RESET}`);
}

console.log(`${CYAN}│${RESET}`);
console.log(`${GREEN}└  Installation complete!${RESET}`);
console.log();
console.log(`Start a strict learning session in your AI assistant with:`);
console.log(`  ${BOLD}${CYAN}/tutor <keyword or topic>${RESET}`);
console.log();
