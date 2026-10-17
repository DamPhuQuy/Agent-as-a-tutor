# Tutor Session State Template

<tutor_session topic="[TOPIC]" started_at="[TIMESTAMP]" version="3.0">

## Session Control
- **Topic:** [Topic / Keyword Name]
- **Domain Breadcrumb:** [Parent Domain] > [Sub-domain] > [Topic]
- **Mode:** [ADAPTIVE (Default) | ANCHOR | COACH | SOCRATIC | PROTÉGÉ (Teach-Back)]
- **Active Simulator:** [Domain Anchor | Schema Coach | Socratic Mentor | Novice Protégé (Alex)]
- **Genie Hints Remaining:** [3/3 | 2/3 | 1/3 | 0/3 (Exhausted)]
- **Metacognitive Calibration:** $P_C=$ [1-5] | $V_C=$ [1-5] | $\Delta=$ [Overconfident / Calibrated / Underconfident]
- **Status:** [IN_PROGRESS | COMPLETED | PAUSED]

---

## Concept Competency Ledger

| Concept / Dimension | Status | Evidence Level | Verified Evidence Summary |
|---|:---:|:---:|---|
| **Dimension 1: Intuition & Pain Point** | `UNASSESSED` | - | [Learner's intuition or pain point in plain words] |
| **Dimension 2: Mental Model & Invariants** | `UNASSESSED` | - | [Core components and inviolable rules identified] |
| **Dimension 3: Mechanics & State Trace** | `UNASSESSED` | - | [Deterministic execution trace or code implementation] |
| **Dimension 4: Boundaries & Trade-offs** | `UNASSESSED` | - | [Failure modes, costs, and anti-patterns recognized] |
| **Dimension 5: Synthesis & Transfer** | `UNASSESSED` | - | [Independent application to novel scenario or Feynman explanation] |

*Evidence Levels: `UNASSESSED` (Not evaluated) | `INTRODUCED` (Explained by tutor) | `ASSISTED` (Solved with hints) | `INDEPENDENT` (Solved without assistance)*

### Teach-Back Assessment (If `--teach-back` active)
- **Role:** Learner tutoring Alex (Curious Novice Peer)
- **Causal Completeness (30%):** [Score 1-5]
- **Jargon Translation (25%):** [Score 1-5]
- **Invariant Clarity (25%):** [Score 1-5]
- **Trap Handling (20%):** [Score 1-5]
- **Overall Mastery Grade:** [Grade A / Grade B / Grade C]

---

## Knowledge Compass & Trajectory History

| Milestone / Concept | Trajectory Chosen | Target Concept | Outer Fringe Candidates Available |
|---|---|---|---|
| [Initial Topic] | [Deep-Dive / Broaden / Apply / Custom] | [Next Target] | 1. [Deep-dive], 2. [Broaden], 3. [Apply] |

---

## FSRS-5 Spaced Retention Flashcards (DSR Model)

*Active retrieval flashcards ready for Anki / spaced repetition tools. Tags indicate Desired Retention: $R=90\%$ for core system invariants, $R=85\%$ for broader patterns.*

```tsv
# Card ID	Type	Prompt (Front)	Target Retrieval (Back)	D (1-10)	S (Days)	Target R	Tags
CARD-01	Mechanic	[Target retrieval question testing causal mechanism]	[Accurate causal explanation grounded in state changes]	4.5	1.0	90%	[topic],invariants
CARD-02	Boundary	[Under what scenario would using this approach be an anti-pattern?]	[Specific breaking conditions, performance cost, or failure mode]	5.5	1.0	85%	[topic],boundaries
```

---

## Interaction Summary Log

### Turn 1: [Concept / Topic]
- **Simulator Mode:** [Anchor | Coach | Socratic | Protégé]
- **Learner Intent:** [Explanation requested / Practice / Teach-back / Specific question]
- **Tutor / Alex Action:** [Grounded explanation / Worked example / Calibrated challenge / Alex inquiry]
- **Learner Response:** [Learner's explanation, trace, or solution]
- **Evaluation & Evidence:** [Evidence level assigned with objective notes]

---

## Scaffolding & Recovery Notes
- [Record any Tier 4 bridge instruction, Genie hint usage, or conceptual adjustments provided]

</tutor_session>
