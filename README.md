# Agent as a Tutor: Professional Technical Tutor & Pedagogical Companion

An evidence-calibrated **Technical Tutor & Pedagogical Companion** skill for AI Coding Assistants (Google Antigravity, Cursor, Windsurf, Claude Code) and web chat platforms (ChatGPT, Claude, Gemini).

Grounded in **Cognitive Science** principles (Cognitive Load Theory, Desirable Difficulties, Active Retrieval, and the Protégé Effect), this skill transforms your AI assistant into an adaptive personal tutor that fosters genuine, first-principles understanding while respecting your energy, time, and autonomy.

```
███████╗██╗  ██╗██╗██╗     ██╗     ███████╗
██╔════╝██║ ██╔╝██║██║     ██║     ██╔════╝
███████╗█████╔╝ ██║██║     ██║     ███████╗
╚════██║██╔═██╗ ██║██║     ██║     ╚════██║
███████║██║  ██╗██║███████╗███████╗███████║
╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝

The open agent skills ecosystem • strict-tutor v3.1
```

---

## Quick Start & Installation

### Option 1: AI Coding Assistants via `npx` (Zero Dependencies)

Install directly into your workspace's `.agents/skills/strict-tutor/`:

```bash
# Install to current project root:
npx agent-as-a-tutor .

# Install into a specific subfolder or monorepo package:
npx agent-as-a-tutor ./packages/backend

# Or install via the open agent skills registry:
npx skills add DamPhuQuy/agent-as-a-tutor
```

### Option 2: AI Web Chat Platforms (ChatGPT, Claude, Gemini, LibreChat)

For web interfaces without local CLI or filesystem access, use the single self-contained prompt bundle:
- Open [`skills/strict-tutor/web-prompt.md`](./skills/strict-tutor/web-prompt.md).
- Copy its contents and paste into your Custom Instructions, System Prompt, or the initial turn of a chat session.

---

## Core Philosophy: Learning by Intent, Not Forced Interrogation

Unlike rigid tutors that trap you in endless Socratic quizzes or refuse to explain basic concepts, `strict-tutor v3.1` follows a **Learner-Intent Hierarchy**:

| Intent | When You Say | How Tutor Responds |
|---|---|---|
| **EXPLORE** | *"What is X?", "Cho mình biết khái niệm X"* | Delivers a direct, high-signal explanation and concise worked example. No prerequisite gatekeeping. |
| **UNDERSTAND** | *"Explain under the hood", "Giải thích sâu cơ chế"* | Provides detailed deterministic traces (memory, runtime, threads, storage) with high technical depth. If you request no questions, it honors that request. |
| **PRACTICE** | *"Quiz me", "Luyện tập bài tập này", `--practice`* | Offers calibrated micro-challenges and tiered hints (analogy $\to$ search space narrowing $\to$ worked micro-step). |
| **ASSESS** | *"Test my transfer", "Kiểm tra mức hiểu"* | Evaluates unassisted reasoning and novel transfer scenarios against explicit criteria. |

---

## Pedagogical Tactics & Compatibility Flags

Flags and simulator modes are **adaptive tactics**, never inescapable traps:

```
                                  ┌──────────────────────────┐
                                  │   /tutor <topic>         │
                                  │   (Adaptive Mode)        │
                                  └────────────┬─────────────┘
                                               │
             ┌─────────────────────┬────────────┴─────────────┬─────────────────────┐
             ▼                     ▼                          ▼                     ▼
    ┌─────────────────┐   ┌─────────────────┐        ┌─────────────────┐   ┌─────────────────┐
    │  --anchor       │   │  --practice     │        │  --socratic     │   │  --teach-back   │
    │  Domain Anchor  │   │  Schema Coach   │        │  Socratic Mentor│   │  Novice Protégé │
    │  (Primitives)   │   │  (Scaffolding)  │        │  (Boundaries)   │   │  (Alex / LBT)   │
    └─────────────────┘   └─────────────────┘        └─────────────────┘   └─────────────────┘
                                                                                    │
                                                                                    ▼
                                                                           ┌─────────────────┐
                                                                           │  --cards        │
                                                                           │  Flashcard TSV  │
                                                                           └─────────────────┘
```

1. **Adaptive Mode (Default):** Balanced explanations and calibrated challenges matching your pacing (`/tutor raft consensus`).
2. **Satellite Radar (`--satellite` / `--radar`):** High-density conceptual constellation. Projects a 360° satellite matrix (Architecture, Failure Modes, Alternatives, Tooling) with actionable Golden Web Search Queries to combine AI's mapping power with fast, non-linear web exploration.
3. **Top-Down Roadmap (`--topdown` / `--roadmap`):** Pragmatic system-level roadmap prioritizing backend & AI application engineering contracts over premature microscopic internals.
4. **Domain Anchor (`--anchor`):** Grounding in primary codebase files, core primitives, and system invariants.
5. **Schema Coach (`--practice`):** Deliberate practice with scaffolded hints. If you get stuck or exhausted, you can ask for the answer directly and it will be provided with full causal reasoning.
6. **Socratic Mentor (`--socratic` / `--strict`):** Stress-tests mental models with counterfactual probes and architectural boundary trade-offs.
7. **Novice Protégé / Teach-Back (`--teach-back`):** Reverses roles using the Protégé Effect. You teach **Alex**, a curious peer.
   - **Instant Persona Exit:** Say *"stop roleplaying"*, *"dừng đóng vai"*, or ask for an explanation, and Alex drops persona immediately on the very next turn.

---

## Honest Evidence Tracking

Competency is tracked transparently across 4 distinct evidence levels:
- `UNASSESSED`: Concept not yet addressed.
- `INTRODUCED`: Explained or demonstrated by the tutor; no independent solution yet.
- `ASSISTED`: Solved with hints, scaffolding, or after seeing solution elements.
- `INDEPENDENT`: Solved autonomously in an unassisted, novel problem context.

**Epistemic Boundary:** Receiving hints or viewing the solution always records the attempt as `ASSISTED`. Independent mastery is never certified on a problem that was solved with assistance.

---

## Flashcard Export (`--cards`)

At session wrap-up or whenever requested, the tutor compiles active retrieval flashcards in clean TSV format ready for import into **Anki**:

```tsv
# Card ID	Card Type	Front (Prompt)	Back (Target Explanation / Trace)	Tags
CARD-01	Concept	What core problem does Raft consensus solve, and what is its election invariant?	Split-brain prevention; at most one leader can be elected in any given term.	raft,consensus
CARD-02	Boundary	When is Raft linearizable lease read invalid?	During clock drift or an undetected network partition where a split-brain leader continues serving reads without quorum re-check.	raft,boundaries
```

*Note: The tutor generates import-ready card content. Automated spaced repetition scheduling requires dedicated software such as Anki.*

---

## Verification & Contract Tests

This repository maintains zero-dependency test coverage using Node.js built-ins:

```bash
# Verify web prompt bundle is synchronized and up-to-date:
node scripts/build-tutor-web.cjs --check

# Rebuild web prompt bundle if canonical source files were edited:
node scripts/build-tutor-web.cjs

# Run contract tests (mirror parity, seeds, bundle integrity, CLI smoke):
node --test tests/tutor-contract.test.cjs
```

---

## Repository Structure

```
skills/strict-tutor/
├── SKILL.md                          # Canonical skill manifest & intent routing
├── web-prompt.md                     # Generated self-contained web chat prompt
└── references/
    ├── pedagogy-rubric.md            # Evidence hierarchy, 5 dimensions, teach-back rubric
    ├── anti-cargo-cult-rules.md      # Scaffolding ladder, recovery heuristics, exit rules
    └── session-template.md           # Session ledger schema & flashcard TSV template
.agents/skills/strict-tutor/          # Identical mirror for agent environments
scripts/
└── build-tutor-web.cjs               # Deterministic bundle builder (--check support)
tests/
├── tutor-contract.test.cjs           # Deterministic contract & smoke test suite
└── evals/
    ├── tutor-cases.json              # 38 evaluation cases (19 base E/LX + 19 variants)
    └── README.md                     # Replay protocol, severity criteria, and limitations
bin/
└── cli.js                            # Standalone zero-dependency installer
```

---

## Pedagogical Foundations & Citations

- **Dunlosky et al. (2013):** *Improving Students' Learning With Effective Learning Techniques* (Highlighting active retrieval practice and distributed learning).
- **Bjork & Bjork (2011):** *Making Things Hard on Yourself, But in a Good Way: Creating Desirable Difficulties to Enhance Learning*.
- **Sweller (1988):** *Cognitive Load Theory* (Managing intrinsic and extraneous cognitive load to optimize germane learning).
- **Bargh & Schul (1980):** *The Protégé Effect / Learning by Teaching* (Enhanced cognitive consolidation when explaining concepts to an inquisitive peer).
- **Risko & Gilbert (2016):** *Cognitive Offloading* (Balancing computational assistance with active internal struggle).

---

## License

MIT © Phu Quy Dam
