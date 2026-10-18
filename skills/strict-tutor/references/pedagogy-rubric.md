# Pedagogical Rubrics & Evidence Guidelines

<pedagogy_rubric version="3.1">

## 1. Philosophy: Evidence-First Technical Tutoring

Genuine technical understanding is neither the memorization of textbook definitions nor the recitation of framework conventions. Genuine understanding is mechanical, causal, and transferable:
- The learner can ground the concept in the real-world problem it solves.
- The learner can reason through its core components and system invariants.
- The learner can deterministically trace state changes through memory, network, or storage.
- The learner recognizes operational costs, failure modes, and architectural trade-offs.
- The learner can transfer these principles to novel, unassisted scenarios.

This rubric provides a flexible multidimensional framework to diagnose understanding, guide explanations, and evaluate evidence honestly without imposing rigid, exhaustive exams when the learner only wants a focused answer.

---

## 2. Competency & Evidence Hierarchy

To maintain complete epistemic honesty between what has been observed and what remains unverified, evaluate concepts across four distinct evidence levels:

| Evidence Level | Definition | When to Assign |
|---|---|---|
| `UNASSESSED` | Concept has not yet been addressed or evaluated. | Initial state, or topics outside the current focus. |
| `INTRODUCED` | Concept was explained, demonstrated, or illustrated by the tutor. | Learner read, explored, or requested explanation, but has not yet solved a challenge independently. |
| `ASSISTED` | Learner solved a challenge, answered a prompt, or completed a trace with tutor hints, scaffolding, or after seeing solution elements. | Passed with Tier 1/2/3 hints, worked steps, or after tutor corrected foundational misconceptions. |
| `INDEPENDENT` | Learner produced accurate intuition, mental model, trace, boundary analysis, or transfer solution without hints or assistance in a fresh context. | Unassisted demonstration of first-principles understanding on an unfamiliar problem. |

### Invariant Evidence Rules:
- **No False Independence:** An `INTRODUCED` or `ASSISTED` interaction must never be recorded as `INDEPENDENT`.
- **No Blanket Domain Mastery:** A single successful answer on one problem verifies competence for that specific problem instance; it does not guarantee lifelong retention or universal mastery across an entire topic domain.
- **Separate Fluency from Transfer:** An articulate verbal explanation demonstrates conceptual clarity, but unassisted problem solving on edge cases remains unverified until actively tested.

---

## 3. The 5 Dimensions of Understanding (Flexible Evaluation)

These dimensions serve as diagnostic perspectives. Apply them adaptively based on the learner's goal rather than forcing all 5 on every question:

### Dimension 1: Intuition & Pain Point (The "Why")
- **Core Goal:** Anchor the concept in the concrete engineering problem it exists to solve.
- **Independent:** Learner articulates the underlying problem and causal motivation in their own words.
- **Assisted:** Learner identifies the problem after an analogy or contrast prompt.
- **Misconception:** Learner defines the concept purely through marketing slogans (*"it's fast, modern, and scalable"*).

### Dimension 2: Mental Model & Invariants (The "What" & Rules)
- **Core Goal:** Deconstruct into core components, state boundaries, and system invariants that must never be violated.
- **Independent:** Learner identifies the core components and articulates at least one invariant that preserves system integrity.
- **Assisted:** Learner identifies invariants after a guided hint or scenario contrast.
- **Misconception:** Learner lists superficial syntax without identifying invariants or state boundaries.

### Dimension 3: Mechanics & Operational Trace (The "How")
- **Core Goal:** Deterministically trace state transitions or examine minimal working implementations.
- **Independent:** Learner traces state transitions causally step-by-step through memory, call stack, or storage without hand-waving.
- **Assisted:** Learner completes the trace after a prompt pointing out an unaccounted intermediate state.
- **Misconception:** Learner jumps directly from input to output without accounting for intermediate mutations.

### Dimension 4: Boundaries & Trade-offs (The "When NOT to Use")
- **Core Goal:** Identify failure modes, operational costs, and scenarios where using the concept is an anti-pattern.
- **Independent:** Learner identifies specific failure modes, performance bottlenecks, and legitimate alternative designs.
- **Assisted:** Learner recognizes boundaries after an adversarial counter-example is posed.
- **Misconception:** Learner believes the concept is universally superior with zero trade-offs.

### Dimension 5: Synthesis & Transfer (The "Application Test")
- **Core Goal:** Apply the concept to an unassisted novel engineering challenge.
- **Independent:** Learner designs a valid solution satisfying invariants on an unfamiliar problem without assistance.
- **Assisted:** Learner completes the design after scaffolding or hint guidance.
- **Misconception:** Learner copies boilerplate code that violates problem constraints.

---

## 4. Teach-Back Rubric (Evaluating the Learner-as-Teacher)

When the learner teaches **Alex** (the curious novice peer via `--teach-back`), assess the explanation qualitatively upon session wrap-up:

| Dimension | Description | Qualitative Evaluation Criteria |
|---|---|---|
| **Causal Completeness** | Explains the step-by-step causal chain without skipping state transitions. | **Strong:** Deterministic trace without logical leaps.<br>**Developing:** Missed intermediate state mutation.<br>**Novice:** Black-box assertion (*"it just works"*). |
| **Grounded Clarity** | Translates high-level terms into grounded runtime/memory concepts when Alex expresses confusion. | **Strong:** Explains with concrete memory, thread, or storage examples.<br>**Developing:** Replaces one technical term with another.<br>**Novice:** Repeats textbook definitions without clarifying. |
| **Invariant Clarity** | Clearly articulates what rules must never break to maintain system safety. | **Strong:** Highlights clear invariant boundaries.<br>**Developing:** Mentions constraints vaguely.<br>**Novice:** Omits invariants entirely. |
| **Misconception Handling** | Responds constructively when Alex introduces plausible novice confusion. | **Strong:** Catches and dismantles the confusion gently.<br>**Developing:** Partially clarifies.<br>**Novice:** Adopts the misconception or ignores it. |

*Note: Qualitative feedback should highlight specific strengths and gaps. Avoid issuing artificial percentage grades or claiming that a good explanation certifies the learner as an expert peer mentor.*

---

## 5. Metacognitive Calibration & Fluency Awareness

A primary hazard in technical learning is the **Fluency Illusion**: mistaking the ease of reading an AI's clear explanation for one's own ability to solve problems unassisted.

### Calibrating Awareness:
- **Check Understanding vs Recognition:** Prompt the learner to trace a specific edge case rather than asking *"Does that make sense?"*.
- **Validate Real Progress:** When a learner solves a tough problem independently, validate their unassisted reasoning with specific evidence.
- **Acknowledge Assisted Support:** When a learner solves a problem with hints, positively acknowledge their success while gently clarifying that the attempt was supported, inviting them to try an unassisted challenge when ready.

---

## 6. Trajectory Recommendations (Next Steps)

Upon concluding a concept or when requested, offer 2–3 concise, goal-aligned suggestions for further exploration:
1. 🔍 **Deep-Dive:** Internal runtime mechanics, memory layouts, or lower-level system invariants.
2. 🌐 **Broaden:** Adjacent architectural patterns, lateral system designs, or technology comparisons.
3. 🛠️ **Apply:** Practical implementation challenges, debugging production scenarios, or hands-on code.

*Trajectory suggestions are always optional invitations. The learner is always free to choose their own direction, ask a new question, or wrap up the session.*

</pedagogy_rubric>
