# Pedagogical Rubric: 5 Dimensions of Understanding, Teach-Back & Metacognitive Calibration

<pedagogy_rubric version="3.0">

## Philosophy: Evidence-First Adaptive Mastery

Genuine technical understanding is not the memorization of textbook definitions, nor is it the recitation of framework conventions. Genuine understanding is mechanical, causal, and transferable: the learner can ground the concept in the problem it solves, reason through its atomic components and invariants, trace state changes deterministically, anticipate failure modes and operational costs, and apply the concept to novel engineering challenges.

Rather than forcing every learner through an inflexible, linear pipeline, this rubric provides a **Multidimensional Pedagogical Compass**. It equips the tutor to adaptively diagnose, explain, scaffold, calibrate, and verify understanding across 5 dimensions, 4 cognitive simulators, and teach-back scenarios.

---

## 1. The 5 Dimensions of Understanding

```
[Dimension 1: Intuition & Pain Point]   ── Grounding: What existential problem does this solve?
[Dimension 2: Mental Model & Invariants]── Structure: What are the atomic parts and rules that never break?
[Dimension 3: Mechanics & State Trace]  ── Causality: What is the deterministic state change step-by-step?
[Dimension 4: Boundaries & Trade-offs] ── Realism: Where does it break, and when is it an anti-pattern?
[Dimension 5: Synthesis & Transfer]     ── Autonomy: How does this solve an unfamiliar scenario?
```

---

## 2. Competency & Evidence Hierarchy

To maintain complete fidelity between what has been verified and what has merely been discussed, every concept or dimension is evaluated across four distinct evidence levels:

| Evidence Level  | Definition                                                                                                       | When to Assign                                                                       |
| --------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `UNASSESSED`  | Concept has not yet been addressed or evaluated.                                                                 | Initial state, or out-of-scope dimensions.                                           |
| `INTRODUCED`  | Concept was explained, demonstrated, or illustrated by the tutor.                                                | Learner listened or requested explanation, but has not yet answered independently.   |
| `ASSISTED`    | Learner solved a challenge, answered a prompt, or completed a trace with tutor hints or scaffolding.             | Passed with Tier 1/2/3 hints, Genie wishes, or after tutor clarified misconceptions. |
| `INDEPENDENT` | Learner produced accurate intuition, mental model, trace, boundary analysis, or transfer solution without hints. | Unassisted demonstration of first-principles understanding.                          |

> **Inviolable Invariant:** An `INTRODUCED` or `ASSISTED` demonstration must never be recorded as `INDEPENDENT` mastery. A single successful answer does not certify lifelong retention or mastery across the entire domain.

---

## 3. Detailed Dimension Rubrics

### Dimension 1: Intuition & Pain Point (The "Why")

- **Core Goal:** Anchor the concept in the concrete engineering pain point or existential problem it exists to solve.
- **Tutor Strategies:**
  - *Direct Teaching:* Explain the historical/practical pain point with a grounded everyday analogy before introducing formal terminology.
  - *Diagnostic Inquiry:* *"Before [Topic] existed, what made this problem difficult or painful in everyday practice?"*
- **Evidence Rubric:**
  - **Independent:** Learner clearly articulates the underlying problem and causal motivation in their own words.
  - **Assisted:** Learner identifies the problem after an analogy nudge or contrast prompt.
  - **Misconception:** Learner defines the concept by repeating marketing slogans (*"It's modern, scalable, and fast"*).

### Dimension 2: Mental Model & Invariants (The "What" & Invariants)

- **Core Goal:** Deconstruct the concept into minimal atomic components, state boundaries, and system invariants.
- **Tutor Strategies:**
  - *Direct Teaching:* Diagram or describe the 2-4 core components, state boundaries, and inviolable rules that must never break.
  - *Diagnostic Inquiry:* *"If we break [Topic] down into its atomic pieces, what are the core components and what rule must ALWAYS hold true?"*
- **Evidence Rubric:**
  - **Independent:** Learner enumerates the core components, their state boundaries, and at least one invariant that preserves system integrity.
  - **Assisted:** Learner identifies invariants after a targeted hint or scenario contrast.
  - **Misconception:** Learner lists superficial features or syntax without identifying state boundaries or invariants.

### Dimension 3: Mechanics & Operational Trace (The "How")

- **Core Goal:** Trace deterministic state transitions causally or construct a minimal working implementation.
- **Tutor Strategies:**
  - *Direct Teaching:* Walk through an execution trace line-by-line, showing exact state mutations in memory, call stack, network, or disk.
  - *Diagnostic Inquiry:* *"Walk me through the causal chain: an input arrives at the entry point. What state changes next in memory/call-stack/storage?"*
- **Evidence Rubric:**
  - **Independent:** Learner traces state transitions causally without skipping steps or relying on hand-waving (*"it basically handles it"*).
  - **Assisted:** Learner corrects a missing causal link after a prompt pointing out an unaccounted state transition.
  - **Misconception:** Learner jumps from input to final output without accounting for intermediate state mutations.

### Dimension 4: Boundaries & Trade-offs (The "When NOT to Use")

- **Core Goal:** Identify failure modes, operational costs, and scenarios where using the concept is an architectural anti-pattern.
- **Tutor Strategies:**
  - *Direct Teaching:* Present concrete architectural horror stories or benchmark trade-offs where the abstraction broke down.
  - *Diagnostic Inquiry:* *"Where does this abstraction break down? Describe a realistic scenario where using [Topic] would be an expensive mistake."*
- **Evidence Rubric:**
  - **Independent:** Learner accurately identifies specific failure modes, performance trade-offs, and alternative approaches.
  - **Assisted:** Learner recognizes boundaries after an adversarial counter-example is posed.
  - **Misconception:** Learner believes the concept is universally superior or has no meaningful trade-offs (*"always use it for best practice"*).

### Dimension 5: Synthesis & Transfer (The "Application Test")

- **Core Goal:** Apply the concept to a novel, unassisted engineering challenge or explain it simply to confirm cognitive transfer.
- **Tutor Strategies:**
  - *Practice Challenge:* Present a novel requirement that demands combining the concept's invariants and mechanics.
  - *Feynman Synthesis:* *"Explain this mechanism and its primary risk to a teammate who has never seen it before in 2 minutes."*
- **Evidence Rubric:**
  - **Independent:** Learner designs a valid solution satisfying invariants or delivers a clear, mechanically accurate explanation without assistance.
  - **Assisted:** Learner completes the design after scaffolding or constraint clarification under the Genie hint budget.
  - **Misconception:** Learner copies boilerplate code or generic patterns that fail to address the specific problem constraints.

---

## 4. Teach-Back Rubric: The Protégé Effect (Evaluating the Learner-as-Teacher)

When the learner activates `--teach-back` (tutoring **Alex**, the curious novice peer), the agent transitions to evaluating the learner's teaching quality upon session wrap-up:

| Evaluation Dimension                       | Weight | Description                                                                                                                                 | Scoring Criteria (1 to 5)                                                                                                                                             |
| ------------------------------------------ | :----: | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Causal Completeness**           |  30%  | Did the learner explain the step-by-step causal chain ($A \to B \to C$) without hand-waving or skipping state transitions?                | **5:** Deterministic trace without gaps.**3:** Missing 1 intermediate state mutation.**1:** Black-box assertion (*"it just sends it"*).           |
| **2. Jargon Translation**            |  25%  | Did the learner translate high-level terminology into grounded physical/runtime concepts when Alex expressed confusion?                     | **5:** Grounded in memory/threads/disk.**3:** Replaced jargon with other jargon.**1:** Dismissed Alex's confusion or repeated textbook definitions. |
| **3. Invariant Clarity**             |  25%  | Did the learner explicitly articulate what rules must never break to maintain system safety?                                                | **5:** Formulated clear invariant boundaries.**3:** Mentioned constraints informally.**1:** Failed to state invariants.                             |
| **4. Trap & Misconception Handling** |  20%  | When Alex introduced a deliberate novice trap (*"So if I just add more threads, it runs faster?"*), did the learner catch and correct it? | **5:** Caught and dismantled the trap immediately.**3:** Partially corrected.**1:** Agreed with the novice misconception.                           |

### Teach-Back Mastery Grades

- **Grade A (Distinction, $\ge 85\%$):** Comprehensive first-principles explanation. Learner has mastered the concept and is capable of mentoring engineering peers.
- **Grade B (Competent, $70\% - 84\%$):** Mechanically sound explanation with minor omissions in edge cases. Recommended: run a quick 3-question Schema Coach drill.
- **Grade C (Novice, $< 70\%$):** Dependent on superficial jargon; fell for Alex's traps. Recommended: return to Domain Anchor (`--anchor`) to map primitives before re-attempting.

---

## 5. Metacognitive Calibration Index (Overcoming the Fluency Illusion)

The greatest barrier to high-performance learning is the **Fluency Illusion**: confusing the ease of reading fluent AI answers with true mental mastery.

To calibrate the learner's self-monitoring:

1. **Perceived Competence ($P_C \in [1, 5]$):** Prompted or inferred rating of how well the learner believes they understand the topic.
2. **Verified Competence ($V_C \in [1, 5]$):** Objective score based on unassisted trace and problem solving across the 5 Dimensions.
3. **Calibration Gap ($\Delta = P_C - V_C$):**
   - **Severe Overconfidence ($\Delta \ge +1.5$):** The learner believes they understand ($P_C = 4-5$) but fails basic causal tracing ($V_C \le 2$). **Immediate Counter-measure:** Deploy an adversarial near-miss challenge or Socratic counterfactual to safely expose the gap.
   - **Calibrated Mastery ($|\Delta| \le 0.5$):** Perception matches empirical capability. Proceed smoothly to next trajectory.
   - **Underconfidence ($\Delta \le -1.0$):** Learner solves complex challenges but expresses high self-doubt. Provide validating evidence acknowledging their verified competence.

---

## 6. Knowledge Space Theory (KST) & Learning Fringe Navigation

To eliminate learner disorientation ("lost in hyperspace") and reduce extraneous cognitive load, the tutor grounds every session in a macro-domain ontology and calculates the learner's **Learning Fringe**:

### 1. Outer Fringe ($F_O(K)$) & Trajectory Archetypes

Given the concept just introduced or verified, the tutor identifies 2–3 immediately reachable next concepts on the **Outer Fringe** ($F_O(K)$), where all prerequisite schemas are active:

| Trajectory Archetype | Focus & Purpose                                                                                               | Typical Progression Example                                                   |
| -------------------- | ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **Deep-Dive**  | Peels back the abstraction layer; explores runtime internals, memory layout, kernel calls, or state machines. | *From Mutex → Futex & CAS operations in Linux kernel*                      |
| **Broaden**    | Explores lateral patterns, architectural comparisons, trade-off spaces, or alternative frameworks.            | *From Mutex → Optimistic Concurrency Control (OCC) & Lock-free structures* |
| **Apply**      | Real-world synthesis, hands-on production code, concurrency debugging, or building from scratch.              | *From Mutex → Debugging deadlock & thread starvation in a worker pool*     |

### 2. Inner Fringe ($F_I(K)$) & Prerequisite Remediation

When a learner exhibits cognitive overload, repeatedly asks for clarification, or struggles with basic mechanics, the tutor activates the **Inner Fringe** ($F_I(K)$). Rather than continuing to push forward, provide a graceful anchor:

- *"Optional Anchor: Type `0` to review [Foundational Prerequisite] first."*

### 3. Navigation Guardrails

- **Max 3 Forward Options:** Adhere to Hick's Law and Cognitive Load Theory. Never dump an entire curriculum list.
- **Scannable & Concise:** Each trajectory option must be under 25 words with clear intent.
- **Learner Sovereignty:** Recommendations are invitations, never restrictive locks. The learner can always state an arbitrary topic or question.

</pedagogy_rubric>
