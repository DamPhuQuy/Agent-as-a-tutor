# Agent as a Tutor: High-Performance Cognitive Mastery Engine

An evidence-based **Technical Tutor & Teachable Agent** skill for AI Coding Assistants (Google Antigravity, Cursor, Windsurf, Claude Code).

Grounded in **Cognitive Science** (Cognitive Load Theory, Desirable Difficulties, The Protégé Effect, and FSRS-5 Spaced Repetition), this skill transforms your AI from a passive answer generator into a rigorous cognitive personal tutor and teachable peer.

```
███████╗██╗  ██╗██╗██╗     ██╗     ███████╗
██╔════╝██║ ██╔╝██║██║     ██║     ██╔════╝
███████╗█████╔╝ ██║██║     ██║     ███████╗
╚════██║██╔═██╗ ██║██║     ██║     ╚════██║
███████║██║  ██╗██║███████╗███████╗███████║
╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝

The open agent skills ecosystem • strict-tutor v3.0
```

---

## Quick Start: Installation via `npx`

### Method 1: Using the Standalone CLI (Zero Dependencies)

Install the skill directly into your current project's `.agents/skills/strict-tutor/`:

```bash
# Install to current project root:
npx agent-as-a-tutor .

# Install into a specific monorepo package or subfolder:
npx agent-as-a-tutor ./packages/backend

# Direct from GitHub (without needing npm registry):
npx github:DamPhuQuy/agent-as-a-tutor .
```

### Method 2: Using the Official `skills` CLI (`skills.sh`)

Because this repository strictly conforms to the open agent skills specification:

```bash
# Install via the open skills ecosystem:
npx skills add DamPhuQuy/agent-as-a-tutor
```

---

## How to Use: 5 Cognitive Simulator Modes

Instead of an unstructured single-prompt tutor that drifts or leaks answers, `strict-tutor v3.0` provides **5 bounded Cognitive Simulators** tailored to different phases of understanding:

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
   │  (Primitives)   │   │  (Genie Budget) │        │  (Anti-Oracle)  │   │  (Alex / LBT)   │
   └─────────────────┘   └─────────────────┘        └─────────────────┘   └─────────────────┘
                                                                                   │
                                                                                   ▼
                                                                          ┌─────────────────┐
                                                                          │  --cards        │
                                                                          │  FSRS-5 Cards   │
                                                                          └─────────────────┘
```

### 1. Adaptive Mode (Default)
Balanced first-principles exploration. Provides intuitive analogies, mental models, execution traces, and calibrated micro-challenges at your own pace.

```text
/tutor raft consensus
/tutor virtual memory
/tutor event loop
```

### 2. Domain Anchor Mode (`--anchor`)
**Best for:** Brand new topics with dense documentation or source code.
**Mechanism:** Implements a **Zero-Explanation Policy**. The AI refuses to spoon-feed summaries; instead, it anchors directly in primary docs or codebase files and guides you to extract the atomic components and trace the causal relations ($A \to B$) yourself.

```text
/tutor raft consensus --anchor
/tutor kubernetes reconciler --anchor
```

### 3. Schema Coach Mode (`--practice`)
**Best for:** Deliberate practice and discrimination training.
**Mechanism:** Enforces **Practice-Only Mode**. The AI will never output full solution code. It generates realistic "near-miss" problem scenarios and applies the **Genie-in-a-Bottle** hint budget (3 hints maximum, requiring you to submit a draft attempt first).

```text
/tutor database deadlock --practice
/tutor css grid vs flexbox --practice
```

### 4. Socratic Mentor Mode (`--socratic` or `--strict`)
**Best for:** Intermediate to advanced concepts where you want your mental model stress-tested.
**Mechanism:** Operates under the **Anti-Oracle Rule**. The tutor never validates you with empty praise (*"That's right!"*). Instead, it interrogates your assumptions, poses adversarial counterfactuals (*"What if the network partitions right between step 2 and 3?"*), and demands architectural trade-off justification.

```text
/tutor microservices vs modular monolith --socratic
/tutor optimistic concurrency control --strict
```

### 5. Novice Protégé / Teach-Back Mode (`--teach-back`)
**Best for:** Deepest cognitive mastery and preparation for engineering interviews or system design reviews.
**Mechanism:** Reverses pedagogical roles using the **Protégé Effect (Learning by Teaching)**. The AI adopts the persona of **Alex**, an inquisitive, intelligent novice peer with deliberate knowledge gaps. You teach Alex from scratch. Alex will challenge hand-waving (*"Wait, why does the thread pause there?"*) and test if you can explain causal state changes without jargon.

```text
/tutor oauth2 authorization code flow --teach-back
/tutor b-trees vs lsm-trees --teach-back
```
*At the end of the session, Alex exits persona to provide an objective **Teach-Back Mastery Grade (A/B/C)** covering Causal Completeness, Jargon Translation, Invariant Clarity, and Trap Handling.*

---

## Long-Term Retention: FSRS-5 Flashcard Generation (`--cards`)

Research shows that ~74% of newly learned technical details are forgotten within 24 hours unless consolidated through active retrieval.

When wrapping up any tutoring session, ask for flashcards or pass `--cards`:

```text
/tutor raft consensus --cards
/tutor wrap
```

The tutor compiles an **Anki-ready TSV block** powered by the **FSRS-5 (Free Spaced Repetition Scheduler)** DSR model ($D$ = Difficulty, $S$ = Stability in days, $R$ = Retrievability):
- **Core System Invariants:** Tagged for **$R=90\%$** desired retention (stricter review intervals).
- **Broader Trade-offs & Patterns:** Tagged for **$R=85\%$** desired retention (optimal study efficiency).

Example Flashcard Output:
```tsv
# Card ID	Type	Prompt (Front)	Target Retrieval (Back)	D (1-10)	S (Days)	Target R	Tags
CARD-01	Mechanic Trace	What happens when a Raft Follower's election timer expires?	It increments its currentTerm, transitions to Candidate, votes for itself, and broadcasts RequestVote RPCs to all peers.	4.0	1.0	90%	raft,consensus,invariants
CARD-02	Boundary	When is Raft linearizable read lease invalid?	During clock drift or an undetected network partition where a split-brain leader continues serving stale reads without quorum re-verification.	5.5	1.0	90%	raft,consensus,boundaries
```

---

## Anti-Cargo-Cult & Anti-Offloading Guardrails

To protect against **Cognitive Atrophy** and **Vibe Coding** (where learners rely entirely on AI to write code, suffering a 20%–40% performance collapse on unassisted tests):

1. **The "Genie in a Bottle" Hint Protocol:**
   - Maximum **3 scaffolded hints** per practice problem.
   - **Draft-First Invariant:** The tutor will never give a hint unless you provide an initial attempt, hypothesis, or draft snippet.
   - If hints run out, the tutor triggers **Tier 4 Bridge Instruction** (explains the missing invariant with a worked example, then gives a fresh challenge).
2. **Buzzword Interception:**
   - Dropping terms like *"virtual DOM"* or *"idempotent"* without explaining the state transition prompts an immediate causal probe: *"What actually happens to the memory / thread / network at that step?"*
3. **Metacognitive Calibration Index:**
   - Compares your Perceived Competence ($P_C$) against your Verified Competence ($V_C$). If a "Fluency Illusion" gap is detected ($\Delta \ge +1.5$), the tutor presents an unassisted near-miss challenge to calibrate your intuition.
4. **Knowledge Compass Navigation:**
   - Every topic conclusion calculates your **Outer Fringe** ($F_O(K)$) with 3 distinct next trajectories:
     - 🔍 **Deep-Dive:** Internal mechanics & kernel/runtime state.
     - 🌐 **Broaden:** Lateral architecture trade-offs.
     - 🛠️ **Apply:** Hands-on production implementation or debugging.
     - ⚓ **Remediate (`0`):** Review foundational prerequisite if stuck.

---

## Repository & Skill Structure

```
skills/strict-tutor/
├── SKILL.md                          # Core Agent Skill & 5-Simulator Routing Manifest
└── references/
    ├── pedagogy-rubric.md            # 5 Dimensions, Teach-Back Rubric & Metacognitive Calibration
    ├── anti-cargo-cult-rules.md      # Anti-Offloading, Genie Protocol & 4-Tier Scaffolding
    └── session-template.md           # Session State Schema & FSRS-5 Flashcard Ledger
bin/
└── cli.js                            # Standalone Zero-Dependency Node.js Installer
```

---

## Pedagogical Grounding & Research Citations

- **Dunlosky et al. (2013):** *Improving Student's Learning With Effective Learning Techniques* (Practice Testing & Distributed Practice as top-tier utility).
- **Bjork & Bjork (2011):** *Desirable Difficulties in Theory and Practice* (Storage Strength vs Retrieval Strength).
- **Sweller (1988):** *Cognitive Load Theory* (Intrinsic, Extraneous, and Germane cognitive load).
- **Bargh & Schul (1980) / Kucharavy (ACL BEA 2025):** *The Protégé Effect & LLMs Protégés* (+8.8% to +15% performance gain when teaching an AI novice).
- **Risko & Gilbert (2016) / CEUR-WS (2025):** *Cognitive Offloading & Genie-in-a-Bottle Constrained Feedback* (Preventing cognitive atrophy).
- **Jarrett Ye (2022–2025):** *FSRS-5 Free Spaced Repetition Scheduler* (DSR mathematical memory model).

---

## License

MIT © Phu Quy Dam
