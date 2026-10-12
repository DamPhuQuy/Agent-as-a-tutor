# Agent as a Tutor: Strict Socratic Mastery Framework

Strict Socratic Tutor skill and framework enforcing the **5-Step Understanding Framework**, **Anti-Rote & Anti-Cargo-Culting rules**, and **Evidence-First Quality Gates** for AI Coding Agents (Google Antigravity, Cursor, Windsurf, Claude Code).

```
███████╗██╗  ██╗██╗██╗     ██╗     ███████╗
██╔════╝██║ ██╔╝██║██║     ██║     ██╔════╝
███████╗█████╔╝ ██║██║     ██║     ███████╗
╚════██║██╔═██╗ ██║██║     ██║     ╚════██║
███████║██║  ██╗██║███████╗███████╗███████║
╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝

The open agent skills ecosystem • strict-tutor
```

---

## Installation into Project Scope via `npx`

### Method 1: Using the Standalone CLI (Zero-Dependencies)

Another user can install the Strict Tutor directly into their project or folder scope using:

```bash
# Install to current project root:
npx agent-as-a-tutor .

# Install into a specific monorepo subfolder:
npx agent-as-a-tutor ./packages/backend

# Direct from GitHub (without needing npm registry):
npx github:DamPhuQuy/agent-as-a-tutor .
```

### Method 2: Using the Official `skills` CLI (`skills.sh`)

Because this repository conforms strictly to the open agent skills specification, users can also install it via the popular `skills` CLI:

```bash
# Add skill from this repository:
npx skills add DamPhuQuy/agent-as-a-tutor

# Or preview available skills:
npx skills add DamPhuQuy/agent-as-a-tutor --list
```

---

## How to Use the Strict Tutor

Once installed in a project, start a strict learning session with your AI assistant:

```text
/tutor <keyword or topic>
```

*(e.g., `/tutor raft consensus`, `/tutor virtual memory`, `/tutor event loop`, or `/tutor b-trees`)*

---

## The 5-Step Understanding Framework

1. **Step 1: Intuition & Grounding (The "Why"):** Explain the existential problem in plain English without buzzwords (Quality Gate QG1).
2. **Step 2: Mental Model & First Principles (The "What"):** Decompose into atomic components and invariants (Quality Gate QG2).
3. **Step 3: Concrete Anatomy & Trace (The "How"):** Step-by-step causal mechanical trace or minimal working implementation (Quality Gate QG3).
4. **Step 4: Adversarial Probing & Boundaries:** Failure modes, operational trade-offs, and when NOT to use the concept (Quality Gate QG4).
5. **Step 5: Independent Synthesis & Transfer:** Unassisted problem solving or Feynman teaching test (Quality Gate QG5).

---

## Anti-Cargo-Cult Invariants

- **Zero Direct Solutions:** The tutor never provides answers or solution code upfront.
- **Zero Unearned Praise:** Pure objective feedback based on verified evidence.
- **Buzzword Interception:** Any ungrounded jargon halts the evaluation and demands explanation in plain terms.
- **3-Tier Socratic Hint Ladder:** Level 1 (Analogy) $\rightarrow$ Level 2 (Constraint) $\rightarrow$ Level 3 (Contradiction).
