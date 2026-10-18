# Tutor Session State Schema Template

<tutor_session topic="[TOPIC]" started_at="[TIMESTAMP_OR_UNKNOWN]" version="3.1">

## 1. Session Control
- **Topic:** [Topic / Concept Name]
- **Active Intent:** [EXPLORE | UNDERSTAND | PRACTICE | ASSESS]
- **Current Tactic:** [ADAPTIVE (Default) | DOMAIN_ANCHOR | SCHEMA_COACH | SOCRATIC_MENTOR | NOVICE_PROTÉGÉ (Alex)]
- **Status:** [IN_PROGRESS | COMPLETED | PAUSED]
- **Resume Point:** [Specific concept or problem to resume next, or None]

---

## 2. Concept Competency Ledger

Record observed evidence honestly without overwriting historical attempts. If timestamp or source is unknown, mark as `unknown`:

| Concept / Task | Learner Intent | Evidence Level | Assistance Received | Observed Misconceptions | Source / Timestamp |
|---|:---:|:---:|---|---|:---:|
| [Example: Closures in JS] | UNDERSTAND | `INTRODUCED` | Direct explanation with code trace | None | unknown |
| [Example: Cycle Detection in Linked List] | PRACTICE | `ASSISTED` | 2 hints (speed difference, two pointers) | Confused O(N) memory with O(1) pointer race | unknown |
| [Example: WAL Durability Proof] | ASSESS | `INDEPENDENT` | Unassisted | None | unknown |

*Evidence Level Hierarchy:*
- `UNASSESSED`: Not yet evaluated.
- `INTRODUCED`: Explained or demonstrated by the tutor.
- `ASSISTED`: Solved with hints, scaffolding, or after seeing a worked solution.
- `INDEPENDENT`: Solved unassisted on an unfamiliar problem.

---

## 3. Teach-Back Observations (If `--teach-back` active)
- **Role:** Learner tutoring Alex (Curious Novice Peer)
- **Causal Completeness:** [Strong / Developing / Novice - Notes on step-by-step causality]
- **Grounded Clarity:** [Strong / Developing / Novice - Notes on explaining jargon through runtime mechanics]
- **Invariant Clarity:** [Strong / Developing / Novice - Notes on system rules and safety boundaries]
- **Misconception Handling:** [Strong / Developing / Novice - Notes on handling Alex's novice confusion]
- **Summary Feedback:** [Qualitative summary of strengths and areas for further review]

---

## 4. Spaced Retrieval Flashcards (Active Retrieval Export)

*Flashcards formatted with standard fields for straightforward import into Anki, Markdown, or other spaced repetition software.*

```tsv
# Card ID	Card Type	Front (Prompt)	Back (Target Explanation / Trace)	Tags
CARD-01	Concept	What core problem does [Concept] solve, and what is its primary invariant?	[Clear explanation of the problem and the inviolable invariant]	[topic],invariants
CARD-02	Mechanics	Trace what happens step-by-step when [Input / Action occurs] in [System].	[Deterministic sequence of state changes in memory/network/storage]	[topic],mechanics
CARD-03	Boundary	Under what scenario or operational constraint should you NOT use [Concept]?	[Concrete failure mode, performance cost, or architectural anti-pattern]	[topic],boundaries
```

*Note: Spaced repetition scheduling requires import into dedicated software (e.g. Anki). The tutor does not operate a background repetition scheduler or automate reminders.*

---

## 5. Session Interaction Log

### Turn [N]: [Concept / Focus]
- **Intent:** [EXPLORE | UNDERSTAND | PRACTICE | ASSESS]
- **Tactic / Simulator:** [Adaptive | Anchor | Coach | Socratic | Protégé]
- **Tutor Action:** [Explanation | Worked example | Challenge | Hint | Direct recovery]
- **Learner Input:** [Learner response, trace, or question]
- **Observed Evidence:** [INTRODUCED / ASSISTED / INDEPENDENT with objective observations]

---

## 6. Recovery & Scaffolding Notes
- [Record any direct bridge instruction, hint progression, or learner-requested recovery provided during the session]

</tutor_session>
