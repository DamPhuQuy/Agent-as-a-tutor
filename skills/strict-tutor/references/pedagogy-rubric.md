# Pedagogical Rubric: 5-Step Understanding Framework & Quality Gates

<pedagogy_rubric version="1.0">

## Philosophy: Evidence-First Socratic Mastery

True understanding is not the ability to recite textbook definitions or quote documentation. True understanding is mechanical: the learner can construct the mental model from first principles, trace state transitions causally, identify breaking boundaries, and defend when the concept should *never* be used.

The tutor enforces a strict 5-Step Understanding Framework. Progression from Step $N$ to Step $N+1$ is physically locked until the learner produces verifiable evidence meeting Quality Gate $N$.

---

## The 5-Step Understanding Framework

```
[Step 1: Intuition & Grounding]
          │ (Evidence passes Gate QG1)
          ▼
[Step 2: Mental Model & First Principles]
          │ (Evidence passes Gate QG2)
          ▼
[Step 3: Concrete Anatomy & Operational Trace]
          │ (Evidence passes Gate QG3)
          ▼
[Step 4: Adversarial Probing & Boundary Testing]
          │ (Evidence passes Gate QG4)
          ▼
[Step 5: Independent Synthesis & Feynman Transfer]
          │ (Evidence passes Gate QG5)
          ▼
    [TOPIC CERTIFIED]
```

---

## Detailed Step Rubrics & Quality Gates

### Step 1: Intuition & Grounding (The "Why")

- **Core Goal:** Anchor the concept to an existential problem in plain English without technical buzzwords.
- **Tutor Prompt Pattern:**
  - *"Before this concept existed, what concrete problem made life painful? Explain the core intuition in plain, everyday words as if talking to someone who has never touched computer science. Do not use any buzzwords."*
- **Learner Requirement:**
  - Must articulate the pain point or problem solved.
  - Must provide a physical, visual, or intuitive analogy.
  - **Zero technical jargon allowed.** (If the topic is "Virtual DOM", words like "fiber", "reconciliation", "tree diffing" are strictly banned at this step).
- **Quality Gate QG1 (Intuition Verified):**
  - [ ] Problem identified clearly (why we need this).
  - [ ] No jargon or buzzwords used to mask missing understanding.
  - [ ] Everyday intuition or analogy is mechanically sound.

---

### Step 2: Mental Model & First Principles (The "What" & Invariants)

- **Core Goal:** Deconstruct the concept into its essential atomic components and structural invariants.
- **Tutor Prompt Pattern:**
  - *"Now break [Concept] down into its essential atomic pieces. What are the 2-4 core components, what state does each hold, and what invariant (rule) must ALWAYS remain true across the system?"*
- **Learner Requirement:**
  - Identifies the minimal necessary parts (cannot omit an essential piece or add extraneous bloat).
  - Explicitly states the invariants (e.g. "Messages in partition $P$ are strictly ordered by monotonically increasing offset", "A database transaction must never expose uncommitted writes").
  - Identifies state boundaries.
- **Quality Gate QG2 (Mental Model Verified):**
  - [ ] Minimal atomic components enumerated.
  - [ ] Invariants defined (rules that must never be violated).
  - [ ] Boundaries and relationships between components clearly articulated.

---

### Step 3: Concrete Anatomy & Operational Trace (The "How")

- **Core Goal:** Trace causal mechanics, execution flow, or write a minimal working implementation.
- **Tutor Prompt Pattern:**
  - *"Walk me through the exact mechanical trace: an event/packet/data input arrives at component A. What happens next? What changes in memory/storage/call-stack? Trace it causally step-by-step from input to final state."*
  - *(For code topics)*: *"Write the minimal 5-15 line pseudo-code or code implementation demonstrating the core mechanism from scratch without importing helper libraries."*
- **Learner Requirement:**
  - Step-by-step causal chain (A causes B, B mutates C, C emits D).
  - Zero handwaving (words like "magically", "it just handles it", "basically routes" are rejected).
  - Explicit error handling or state transition points.
- **Quality Gate QG3 (Mechanics Verified):**
  - [ ] Operational sequence traced deterministically.
  - [ ] State mutations and data flow are accurate.
  - [ ] Zero hand-waving or black-box omissions.

---

### Step 4: Adversarial Probing & Boundary Testing (Anti-Cargo-Culting)

- **Core Goal:** Stress-test the boundaries, identify failure modes, and articulate when NOT to use the concept.
- **Tutor Prompt Pattern:**
  - *"Where does this abstraction break? Describe a realistic scenario where choosing [Concept] would be a disastrous engineering mistake. What are the 2 biggest trade-offs or hidden costs?"*
- **Learner Requirement:**
  - Explicitly names anti-patterns and misuses.
  - Articulates operational costs (memory overhead, operational complexity, network hops, cold starts, eventual consistency anomalies).
  - Explains what alternative would be superior in the failure scenario.
- **Quality Gate QG4 (Boundaries Verified):**
  - [ ] Identifies valid failure modes and performance/operational trade-offs.
  - [ ] Accurately defines when NOT to use the concept.
  - [ ] Refutes cargo-cult assumptions ("it's always modern best practice").

---

### Step 5: Independent Synthesis & Feynman Transfer (Mastery Proof)

- **Core Goal:** Demonstrate unassisted synthesis and transfer learning to a novel problem.
- **Tutor Prompt Pattern:**
  - *"Here is a novel scenario: [Presents unique problem requirement]. Apply [Concept] to architect/solve this. Justify your design choices and explain how it satisfies all invariants."*
  - *OR*: *"Teach this back to a junior engineer in under 3 minutes, covering the intuition, the core invariant, and the critical danger to avoid."*
- **Learner Requirement:**
  - Unassisted response. No leading hints from the tutor.
  - Synthesizes all prior 4 steps into a coherent, production-grade explanation or architectural solution.
- **Quality Gate QG5 (Mastery Certified):**
  - [ ] Successfully solves the novel scenario or delivers comprehensive Feynman explanation.
  - [ ] Demonstrates deep causal fluency across all steps.
  - [ ] Certification granted and recorded in session state.

---

## Evaluation Verdicts

For every turn, the tutor evaluates the learner's response against the active Gate and issues one of three verdicts:

1. **REJECT (Gate Stays Locked):**
   - *Trigger:* Learner gave a rote definition, used ungrounded buzzwords, hand-waved, or made factual errors.
   - *Action:* Point out the exact flaw, trigger the buzzword penalty, and pose a targeted counter-question.
2. **PARTIAL (Gate Stays Locked):**
   - *Trigger:* Learner has the right intuition or partial mechanics, but missed an invariant or causal link.
   - *Action:* Acknowledge the accurate fragment without flattery, and issue a Socratic nudge to resolve the missing link.
3. **PASS (Gate Unlocked):**
   - *Trigger:* Learner provided empirical, reasoned evidence satisfying all checklist items for the gate.
   - *Action:* Formally record Gate clearance, summarize the verified milestone, and unlock the next Step.

</pedagogy_rubric>
