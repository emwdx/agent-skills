const DOCS = [
  {
    id: 'overview',
    title: 'Overview',
    content: `# Changemakers Skills Library

A reusable context library for AI-assisted planning and materials development in the Changemakers course at Nido de Aguilas.

Modeled on the agent-skills framework (github.com/addyosmani/agent-skills). Each skill is a Markdown file that encodes process, context, or conventions — not just knowledge. Load the relevant skills at the start of any session to skip the re-explaining and get straight to the work.

---

## Skills

| Skill | Load when... |
|---|---|
| \`course-context\` | Generating any Changemakers material. Load this first. |
| \`proficiency-scales\` | Designing assessments, rubrics, or anything referencing student levels. |
| \`rubric-style\` | Writing rubrics or assessment documents specifically. |
| \`materials-style\` | Writing any course material that is not a slide deck. |

The slides style guide (daily slides conventions) lives separately and covers slide-specific formatting.

---

## How to use

At the start of a session, tell the AI which skills to load and what you are working on. Example:

> Load course-context, proficiency-scales, and rubric-style. I need an L3 individual assessment for the empathy phase of the changemaker project, Communication competency, assessed through a written stakeholder summary.

The skills do the background work. You describe the task.

---

## Skill load order

When loading multiple skills, load in this order:

1. \`course-context\` — always first
2. \`proficiency-scales\` — when assessment is involved
3. \`rubric-style\` — when writing rubrics specifically
4. \`materials-style\` — for any non-slide document

---

## Adding new skills

When a pattern comes up repeatedly in planning sessions — a recurring activity type, a facilitation structure, a decision framework your team keeps reinventing — write it as a skill. The format is always the same:

\`\`\`
---
name: skill-name
description: One or two sentences. When to load this skill.
---

[Body: process, context, conventions, anti-patterns, checklist]
\`\`\`

Good candidates for future skills: empathy-phase-design, scope-narrowing-facilitation, project-brief-template, unit-planning-session.

---

## What this is not

This is not a curriculum document or an official school resource. It is a working tool for planning and generation. If the course structure changes, update the skills to match.`
  },

  // ── Skills ─────────────────────────────────────────────────────────
  {
    id: 'skills',
    title: 'Skills',
    type: 'folder',
    children: [
      {
        id: 'course-context',
        title: 'Course Context',
        content: `---
name: changemakers-course-context
description: Load this skill whenever generating any material for the Changemakers course — lessons, assessments, rubrics, activities, planning documents, or facilitator guides. It provides the foundational context that makes all other Changemakers skills work correctly. Load this first, before any other Changemakers skill.
---

Changemakers is a Grade 10, design-thinking-influenced course at an international school in Santiago, Chile (Nido de Aguilas). Students learn how to make meaningful change in a community. The course centers empathy, research, iteration, communication, collaboration, creativity, critical thinking, and advocacy.

The course is co-taught. All materials use "we" and "your teachers" rather than a single teacher's voice.

## What the course is not

Changemakers is not an abstract entrepreneurship class, a service-hours program, or a generic leadership course. It is not a shallow version of design thinking where students sprint to a polished idea. Responsible action requires listening, research, iteration, and stakeholder awareness. Materials should reflect this.

## Course structure

The course has two broad arcs.

In the first semester, students build competency in the core standards through structured projects and checkpoints. They practice empathy, research, communication, collaboration, creativity, critical thinking, and advocacy using a defined process with shared vocabulary.

In the second semester, students with sufficient demonstrated competency pursue more open-ended changemaker projects with greater autonomy.

This means materials need both structure and release. Early materials build common habits and vocabulary. Later materials support student direction without the course dissolving into vagueness.

## Core design philosophy

Real change work is messy. Materials should help students act inside ambiguity, not hide it.

Students rush to solutions. One of the most persistent problems in the course is that students skip empathy, do weak research, or assume they already understand the problem. Materials should actively counter this by slowing students down around empathy, stakeholder perspective, evidence, and problem framing.

Deliberate structure matters. The course values student agency but is not built on total freedom. The best version gives students room to make decisions inside a defined path. A useful phrase: defined hybrid path. There is a clear minimum essential route through the work, with room for autonomy around topic, format, and some process decisions.

Process matters, but evidence still matters. Effort alone should not be rewarded. Materials should make evidence of collaboration, revision, communication, research, and action visible.

Feedback should drive better work. Formative checkpoints are for redirecting student decisions before final products are due, not for sorting students after the fact.

## Student population

Grade 10 students in an international school context. Students are capable and social, often comfortable generating ideas. Many are less comfortable sustaining inquiry, researching deeply, listening carefully to stakeholders, or refining work through multiple rounds.

A recurring pattern: students can sound persuasive before they have really understood the issue. They produce attractive slides, slogans, or solution concepts that are not yet grounded in research. Materials need forcing functions that make depth unavoidable.

## Common student failure modes

When generating materials, design against these:

- Jumping from a broad concern to a favorite solution without understanding the problem
- Treating one conversation or one assumption as sufficient empathy work
- Confusing being busy with making progress
- Contributing unevenly in groups, then describing the group as collaborative
- Creating polished artifacts that hide weak thinking
- Defining unrealistic scope
- Avoiding hard decisions and keeping too many possibilities open
- Treating advocacy as vague awareness-raising rather than a specific action aimed at a specific audience

## Instructional rhythm

Class blocks are approximately 80 minutes. The course runs through daily slides and structured activities. A typical class moves between brief direct instruction, individual thinking, group work, visible planning, critique, and whole-class sharing. Students should usually know what they are making, deciding, or clarifying in a given block.

## Design thinking influence

The course draws from design thinking. Common phases: empathy, define, ideate, prototype, test, reflect. These are not rigid boxes. The spirit is iterative — students may return to empathy after prototyping, revise the problem statement after stakeholder feedback, or scale back an idea once constraints become visible.

The empathy phase is especially important and often underdeveloped. Materials should over-support this phase.

## Assessment philosophy

Assessment should not rely only on a single polished final product. Students need repeated checkpoints where the quality of their process and thinking becomes visible.

Rubrics should be student-friendly and actionable. They should not read like abstract institutional language. Exemplars matter — students often need to see what good stakeholder research, useful feedback logs, or realistic advocacy planning looks like.

L2 checkpoints are formative and concrete — they check whether essential process moves happened.

L3 and L4 tasks are more summative and ask students to demonstrate higher-quality thinking, communication, and action.

## Group work philosophy

Collaboration should not be assumed just because students worked in teams. Materials should help teachers collect evidence of contribution, decision-making, revision, and follow-through. A useful default: students may share a baseline group outcome, but that outcome is adjustable based on actual contribution and evidence.

## Constraints that matter

Time is limited. Projects need realistic scope. Students often imagine solutions that are too large, too vague, or too dependent on permissions and resources they do not have.

Authenticity matters. Whenever possible, students should engage real audiences, real stakeholders, real feedback, and real tradeoffs.

Teachers need visibility into process. Materials should make student thinking and contribution visible throughout.

Students need support making decisions. Without structures for narrowing options, students drift. Materials should include moments where students must choose a direction, justify it, and move.

## Default assumptions

Unless a prompt specifies otherwise, assume:

- Grade 10 students
- International school context, Santiago, Chile
- 80-minute class blocks
- Co-taught course (use "we" / "your teachers")
- Students often need support with scope, research depth, and meaningful collaboration
- Assessment is competency-based and prioritizes evidence over polish

## What good materials do

- Help students slow down and understand people and problems before solving
- Make the process visible through concrete artifacts
- Support agency without abandoning structure
- Create checkpoints that reveal misunderstanding early
- Push students toward realistic scope
- Treat collaboration as evidence-based, not assumed
- Encourage revision and iteration
- Connect communication choices to audience and purpose
- Keep advocacy concrete
- Preserve room for teacher judgment and conversation-based feedback

## What to avoid

- Generic project-based learning language that could apply to any course
- Treating empathy as a quick warm-up
- Over-scripted materials that leave no room for student direction
- Rubrics filled with abstract buzzwords and vague descriptors
- Assessments that can be passed through polish alone
- Activities that produce motion but little evidence of thought
- Assuming all group members contributed equally
- Giant final products with too few intermediate checkpoints`
      },
      {
        id: 'proficiency-scales',
        title: 'Proficiency Scales',
        content: `---
name: changemakers-proficiency-scales
description: Load this skill when designing assessments, rubrics, activity instructions, or any material that references student proficiency levels in the Changemakers course. Contains the complete proficiency scales for all five competencies and instructions for how to use them correctly. Load alongside changemakers-course-context.
---

The Changemakers course assesses five competencies on a 2.0 to 4.0 scale. These scales are the backbone of all assessment in the course. When designing rubrics, activities, or checkpoints, anchor everything to these scales rather than inventing new criteria.

Reference scales by shorthand in slide and activity text (e.g., "L3 Communication," "L4 Creativity"). Spell out the full criteria only on rubric slides and assessment documents.

## How to use these scales

When designing an assessment, identify which competency or competencies are being assessed and at which level.

L2 is the baseline. It describes what a student can do with guided support or within teacher-directed structures. L2 assessments are often formative completion checks.

L3 is independent proficiency. It describes what a student can do on their own, with quality and evidence. L3 assessments are the primary summative standard.

L4 is synthesis and sophistication. It describes work that integrates complexity, stakeholder awareness, or metacognitive depth. L4 is a stretch and should not be the default expectation.

Assessments are tagged as Group (all team members receive the same grade) or Individual. Always make this distinction clear on rubric documents.

When a rubric includes L1.0 or L1.5, these are typically used as "not yet meeting L2" indicators — useful for communicating what is missing rather than treating them as standalone performance levels.

---

## Creativity

Focus areas: Novelty and usefulness, brainstorming and experimentation, iteration, selecting and elaborating.

**L4** — Demonstrates in-depth synthesis and application of ideas with complexity or integration.
- Produces a product that is novel, useful, and exceptionally original yet practical.
- Shows evidence of multiple design cycles that explore possibilities and integrate stakeholder feedback.
- Synthesizes and combines multiple perspectives to show a deep understanding of the problem or objectives.

**L3** — Independently generates and iterates on ideas to produce a novel and useful product.
- Creates a product that is both novel and useful for the problem or objectives.
- Explores a range of ideas with varied tools and protocols during the design process.
- Explains how the developed product demonstrates a detailed understanding of the problem or objectives.

**L2** — Produces a useful idea with guided brainstorming and iteration.
- Creates a product that is useful for the problem or objectives.
- Generates and iterates on ideas using teacher-directed tools and protocols.
- Selects from teacher-provided options and explains how the choice addresses the problem or objectives.

Shorthand: L2 = useful with guidance. L3 = novel and useful independently. L4 = original, integrated, multi-cycle.

---

## Collaboration

Focus areas: Team strategy, self-awareness and contribution, conflict resolution and feedback.

**L4** — Articulates and applies collaborative practices tailored to team context and dynamics.
- Designs and implements strategies to improve team efficiency based on member strengths and weaknesses.
- Evaluates strengths and weaknesses of personal contributions to the team and project.
- Uses self-awareness to decide when to support the team and when to lead.

**L3** — Communicates clearly, participates actively, and fulfills responsibilities within the team.
- Leverages team members' knowledge, skills, and experiences to advance the project.
- Gives, reflects on, and acts on constructive feedback.
- Resolves conflicts effectively and meets deadlines and responsibilities.

**L2** — Participates with basic collaboration skills and awareness.
- Paraphrases and listens to teammates.
- Identifies when problems arise and describes conflict resolution strategies.
- Identifies next steps, timelines, personal collaboration goals, team agreements, and can give feedback to group members.

Shorthand: L2 = basic participation. L3 = active contribution and feedback. L4 = strategic team leadership.

---

## Adaptive Thinking

Focus areas: Anticipating and adapting, systems thinking, evidence use and sensemaking.

**L4** — Anticipates challenges and adapts thinking proactively using evidence across systems and perspectives.
- Synthesizes insights across systems, perspectives, or models to uncover interrelationships, inconsistencies, or counterexamples.
- Uses adaptive reasoning to question assumptions, integrate new insights, and refine solutions in changing or conflicting contexts.
- Draws evidence-based inferences from diverse sources, weighing claims, counterclaims, and limitations.

**L3** — Applies systems thinking and evidence to analyze complex problems from multiple perspectives.
- Articulates multiple perspectives and arguments related to a complex problem.
- Selects and applies relevant evidence from varied sources to make and defend claims.
- Uses systems thinking tools (e.g., root cause analysis, iceberg model, pre-mortems) to identify patterns and contributing factors.
- Recognizes when information may be incomplete, conflicting, or irrelevant.

**L2** — Identifies a single perspective and summarizes key ideas with basic source evaluation.
- Describes one perspective related to a complex problem.
- Summarizes key ideas from multiple sources.
- Identifies strengths and limitations of sources using basic criteria (e.g., CRAAP Test).
- Uses academic structure (claim, evidence, source/viewpoint, credibility, cause and effect) with proper citation.

Shorthand: L2 = single perspective with basic sources. L3 = multiple perspectives with evidence. L4 = synthesizes across systems, questions assumptions.

---

## Communication

Focus areas: Audience awareness, organization and clarity, craftsmanship and conventions.

**L4** — Adapts tools and strategies to diverse audiences while applying sophisticated craftsmanship.
- Extends depth and quality by following, adapting, or intentionally breaking conventions of a medium or style.
- Selects communication tools and strategies to meet audience needs.

**L3** — Communicates information in an organized, engaging way with strong content-specific language.
- Uses precise, descriptive, and content-specific knowledge to enhance the message.
- Applies craftsmanship by following conventions of a medium or style.

**L2** — Plans communication with awareness of audience, organization, and conventions.
- Identifies strategies to engage an audience.
- Plans organization of the message.
- Shows awareness of medium conventions and elements of craftsmanship.

Shorthand: L2 = aware of audience and conventions. L3 = organized and engaging with content-specific language. L4 = adapts or intentionally breaks conventions for impact.

---

## Action & Advocacy

Focus areas: Stakeholder engagement, implementation, impact and sustainability.

**L4** — Completes meaningful change with sustained community impact or plans for ongoing impact.
- Maintains consistent stakeholder involvement.
- Shows noticeable improvements and lasting sustainability in implementation.

**L3** — Implements solutions with stakeholder feedback and analyzes impact.
- Builds ongoing connections with communities and individuals connected to the project.
- Implements a solution based on multiple perspectives and feedback.
- Analyzes impact, including successes and failures in implementation.

**L2** — Prepares for action with empathy work and a proposed change.
- Plans and prepares for empathy chats.
- Captures stakeholder perspectives reflecting issue complexity.
- Proposes a change, service opportunity, or action plan based on stakeholder needs.

Shorthand: L2 = empathy work and proposed change. L3 = implements with feedback and analyzes impact. L4 = sustained community impact.

---

## Assessment structure summary

- **L1.5 assessment**: Quick completion check.
- **L2 assessment**: Foundational knowledge demonstration. Requires more teacher time to assess.
- **L3 assessment**: Longer, in-depth proficiency demonstration.
- **L4**: Demonstrated through depth, sophistication, or integration beyond L3 criteria.

---

## Anti-patterns when using these scales

Do not water down L3 criteria. If a rubric's L3 description could describe L2 work, rewrite it.

Do not treat L4 as simply "more of L3." L4 involves a qualitative shift — synthesis, stakeholder integration, metacognition, or intentional rule-breaking. It is not just doing more tasks.

Do not write rubrics with abstract descriptors. "Demonstrates strong creativity" is not a criterion. Point to observable behavior and evidence.

Do not invent new competency labels. If the work involves communication, use the Communication scale. Do not create a "Presentation" competency that duplicates or contradicts the existing framework.

Do not omit the Group vs. Individual tag on any assessment document. This distinction matters for how grades are applied.`
      },
      {
        id: 'rubric-style',
        title: 'Rubric Style',
        content: `---
name: changemakers-rubric-style
description: Load this skill when generating any rubric, assessment document, exit ticket, or proficiency-level description for the Changemakers course. It encodes the stylistic conventions already established in the course so that generated rubrics match what teachers and students are already using. Load alongside changemakers-proficiency-scales.
---

Changemakers rubrics have a distinctive style that has been developed through real classroom use. Generated rubrics should match this style closely enough that a student or teacher would not be able to tell whether it was written by the course team or generated by an AI.

## Core principles

Write for students, not for institutions. A student should be able to read a criterion and know exactly what to do or what to show. If it sounds like a policy document, rewrite it.

Anchor every criterion to the proficiency scales. Do not invent new language for what good work looks like. Use the scale language as the starting point and adapt it for the specific task.

Make the observable behavior specific. "Shows evidence of collaboration" is not a criterion. "Logs at least two rounds of peer feedback with your team's responses to that feedback" is a criterion.

Distinguish Group from Individual clearly. Every rubric must state whether the grade applies to the whole team or to the individual student. Use these labels explicitly.

Match format to assessment type. Not every rubric is a table. Exit tickets, quick checks, and completion marks look different from summative rubrics. See format options below.

---

## Voice conventions

Student-facing rubrics use first-person "I" for individual assessments and "we" for group assessments. This is consistent across the course.

Examples:
- Individual: "I can state a clear before-and-after statement that shows a change in audience belief or action."
- Group: "Our film communicates a clear message that matches our articulated intended message."

Avoid third-person constructions like "The student demonstrates..." These feel institutional and create distance.

Avoid abstract nouns used as verbs: "evidences," "leverages," "operationalizes." Write what students actually do.

Contractions are fine. The tone is direct and clear, not formal.

---

## Format options

Choose the format based on the assessment type, not habit. The three main formats used in the course are below.

### Format 1: Table rubric (formative / L2 checks)

Use for quick formative assessments where the distinctions between levels are behavioral and easy to describe in parallel.

Structure: Two or three columns (1.0 / 1.5 / 2.0, or similar). Each cell contains 2-4 short behavioral descriptions. Each row covers one dimension of the work.

Example column headers: 1.0 | 1.5 | 2.0

Keep cell text tight. Two to four sentences per cell. No bullet points inside cells — run the descriptions together with a period between them. Each column should describe what is present at that level, not what is missing.

When to use: L2 exit tickets, completion checks, quick peer-review scaffolds.

### Format 2: Two-column competency table (summative / L3-L4)

Use for summative assessments where the distinction between levels involves depth and judgment, not just task completion.

Structure: Two columns — "Competency" (left) and "Description" (right). Each row is a level (Level 4, Level 3, Level 2, Level 1). Descriptions are written as first-person "I" or "we" statements. Each level gets 2-5 criteria, written as a coherent block of short sentences rather than a bulleted list.

Label the assessment clearly at the top: competency name, whether it is Group or Individual, and how it will be assessed (in the film, in the presentation, in the written reflection, etc.).

When to use: L3 and L4 summative assessments, final product rubrics, multi-day project culminating tasks.

### Format 3: Checklist / narrative prompt (exit tickets, reflection prompts)

Use for formative checkpoints that are more about process visibility than scoring.

Structure: A short task description followed by 2-4 fill-in prompts or open questions. Include the relevant proficiency scale level as a reference, but the primary purpose is to surface student thinking, not assign a grade.

When to use: Mid-project reflection, empathy phase check-ins, day-end quick writes.

---

## Content patterns

### 1. Name the observable artifact or action

Every criterion should point to something the teacher can actually see or read. Criteria that describe internal states ("understands the importance of empathy") are not useful. Criteria that describe products or behaviors ("conducts at least two empathy chats and records what surprised you") are.

### 2. Write criteria at L3 first

The L3 description is the anchor. It describes what independent, quality work looks like. Write L3 first, then calibrate L2 down (what does partial or guided success look like?) and L4 up (what does synthesis, integration, or sophistication look like beyond L3?).

### 3. L4 is not more tasks

L4 criteria describe a qualitative difference — student-initiated complexity, unprompted stakeholder integration, intentional craft decisions, metacognitive reflection on the process. L4 is not "did everything in L3 plus one extra thing."

### 4. Keep L1.0 and L1.5 honest

These levels should describe what is actually missing or incomplete, not shame the student. A 1.0 means the essential thing did not happen. A 1.5 means it happened partially or inconsistently. Write these as descriptions of where the work is, not judgments about the student.

### 5. Match language to what students will actually produce

If students are making a documentary, the Communication rubric should reference the film, the presentation, or both — not "a text." Be specific about the product being assessed so students can self-assess before submitting.

---

## What to avoid

Do not use abstract buzzwords as criteria. "Demonstrates sophisticated understanding" means nothing without a behavioral anchor.

Do not write parallel criteria that say the same thing at different levels of intensity. Each level should describe a meaningfully different type of work, not just "good / better / best."

Do not let L3 slide into L2 territory. If an L3 criterion could describe work done with teacher direction, it belongs at L2.

Do not add criteria that are not anchored in the five competencies. If something matters enough to assess, find the right competency or make an explicit case for adding a new one.

Do not write rubrics that reward polish over substance. A student should not be able to score at L3 through presentation quality alone.

Do not omit the Group / Individual tag. Teachers need this to apply grades correctly.

---

## Checklist before finalizing any rubric

- [ ] Every criterion describes observable behavior or an artifact, not an internal state
- [ ] L3 was written first and is the clear anchor
- [ ] L4 describes a qualitative shift, not more tasks
- [ ] Voice is "I" (individual) or "we" (group), not "the student"
- [ ] Group vs. Individual label is present
- [ ] Assessment method is named (in the film, in the presentation, in the written reflection, etc.)
- [ ] A student could read this and know exactly what to show
- [ ] No criterion could be passed through polish alone`
      },
      {
        id: 'materials-style',
        title: 'Materials Style',
        content: `---
name: changemakers-materials-style
description: Load this skill when generating any written material for the Changemakers course — activity sheets, planning documents, facilitation guides, reflection prompts, unit overviews, project briefs, or any other course material that is not a slide deck. The slides style guide (changemakers-slides-style) covers slide-specific conventions. This guide covers everything else, for both student-facing and teacher-facing documents.
---

This guide describes the voice, structure, and formatting conventions for Changemakers course materials. It exists because generic AI-generated educational content sounds like it was written by a committee. Materials for this course should sound like they were written by teachers who respect their students and know what they are doing.

The test for any piece of writing: read it out loud. If it sounds like a policy document, a textbook, or a corporate training module, rewrite it.

---

## Two audiences, two registers

Materials are either student-facing or teacher-facing. The register shifts between them, but both should be human.

### Student-facing materials

Activities, project briefs, rubrics, reflection prompts, exit tickets, student guides, reference sheets.

Voice: Direct and warm. Address students as capable people doing real work. Use "you" and "your team." Use "we" when referring to the teaching team collectively ("We want to see evidence of your thinking, not just your final answer.").

Tone: Clear, a little energetic, honest about what the work requires. Not cheerleader-ish. Not condescending. Think: a teacher talking directly to a student they respect.

Contractions are fine. Short sentences work better than long ones. If a sentence needs a semicolon to hold together, split it into two sentences.

Plain language over jargon. Use course-specific vocabulary students already know (empathy chat, stakeholder, design thinking, L3, prototype) but avoid edu-jargon that means nothing to a 15-year-old ("leveraging competencies," "metacognitive scaffolding").

Instructions should start with verbs. Not "Students will identify..." but "Identify..." or "With your team, choose..."

### Teacher-facing materials

Unit overviews, facilitation guides, planning documents, teacher notes, decision frameworks, coaching prep.

Voice: Collegial and direct. Write as if you are leaving notes for a smart colleague who knows the course but needs to understand the intent behind a particular move. No need to over-explain, but do explain the why when it matters.

Tone: Practical and honest. Name the real constraints, the likely failure modes, and the judgment calls the teacher will need to make. Do not write facilitation notes that assume everything will go smoothly.

Use "students" in third person. Use "you" to address the teacher directly when giving a specific instruction or recommendation.

---

## Document structure

### Student-facing documents

Lead with the task, not the context. Students do not need a paragraph explaining why they are doing something before they understand what they are doing. State the task first, then give context if it is actually necessary.

Keep sections short. If a section is longer than four or five short paragraphs, it probably needs to be split or simplified.

Use headers to make documents scannable. Students will not read a dense block of text. Headers should be task-oriented ("What you're making," "How you'll be assessed," "What good looks like") rather than generic ("Overview," "Background," "Conclusion").

Avoid numbered lists for things that are not actually sequential. If the order does not matter, use bullet points or just write in prose. If the order matters, use numbered steps.

Use a must / should / could structure for project scope when students have choices. This helps them distinguish required work from optional extensions without the course collapsing into vagueness.

### Teacher-facing documents

Start with the purpose and the decision the document is meant to support. A facilitation guide that does not say what the teacher is trying to accomplish in the first two sentences is not useful.

Distinguish logistics from pedagogy. Group scheduling information, room assignments, and submission details separately from the reasoning behind instructional choices.

Include explicit failure modes. Where are students likely to get stuck, avoid, or misunderstand? Name these and give the teacher a move.

Use headers generously. Teacher documents are often referenced mid-class. They need to be navigable under pressure.

---

## Formatting conventions

### Both audiences

Periods and commas only for punctuation in body text. No em dashes, semicolons in flowing prose, or ellipses for stylistic effect.

Bold for key terms students or teachers need to act on. Not for decoration. Not for every important idea.

Italics for course-specific proper nouns when introduced for the first time, and for role names when they appear inline.

No nested bullet points beyond one level. If you need sub-bullets, the structure is probably too complicated and should be rewritten as prose or a table.

Avoid the word "leverage" as a verb. Avoid "utilize" when "use" works. Avoid "facilitate" when "run," "lead," or "guide" is more accurate. Avoid "share out" as a verb. Avoid "unpack."

### Student-facing only

Use "I" for individual tasks and "we" for group tasks in instructions and rubric language. This small shift has a real effect on how students read and own the work.

Avoid the passive voice. "The research should be included in your presentation" is weaker than "Include your research in your presentation."

When giving multi-step instructions, keep each step to one action. Do not bundle two or three things into a single numbered step.

When writing reflection prompts, ask students to point to specific decisions, tradeoffs, feedback moments, or changes they made. Avoid generic self-assessment prompts ("What did you learn?" "What would you do differently?"). These produce generic answers.

### Teacher-facing only

Use conditional language honestly. "Students often..." is more useful than "Students will..." because the former acknowledges variability. Write recommendations as recommendations, not as guaranteed outcomes.

When naming a facilitation move, say what you are trying to accomplish and why that move achieves it. "Ask each group to share one thing they are stuck on before the work block starts. This surfaces misunderstandings early and prevents groups from working in the wrong direction for 30 minutes."

---

## What to avoid in all materials

Generic project-based learning language. Phrases like "students will explore their passion for change" or "this unit empowers learners to..." could be dropped into any course at any school. Do not use them. Write specifically about what Changemakers students are actually doing.

Vague quality descriptors. "Strong," "clear," "effective," and "appropriate" are not criteria. They are placeholders. Replace them with behavioral descriptions.

Inflation in rubric language. If the L3 description sounds like praise rather than a standard, it is too soft. L3 should describe solid, independent, evidence-based work. It should not feel like a gold star.

Performative encouragement. "You've got this!" "Amazing work!" These undermine the course's honest, direct tone and imply that effort alone is what matters. The course believes students can do hard things. Materials should communicate that belief through clear expectations, not cheerleading.

Overly scaffolded templates that leave no room for thinking. A template that fills in most of the answer before the student touches it is not scaffolding. It is doing the thinking for them. Scaffolding should reduce confusion about process, not reduce the cognitive demand of the task itself.

Passive voice for instructions. Convert to active.

Buried lede. The most important information should appear first.

---

## Checklist before finalizing any material

- [ ] Read it out loud. Does it sound like a person or a policy?
- [ ] Is the audience clear — student-facing or teacher-facing?
- [ ] Does it lead with the task or decision, not the context?
- [ ] Are instructions in active voice, starting with verbs?
- [ ] Are quality descriptors replaced with observable behaviors?
- [ ] Does it avoid generic PBL language?
- [ ] Is it scannable? Would a student or teacher find what they need under pressure?
- [ ] For student-facing: does it use "I" or "we" appropriately?
- [ ] For teacher-facing: does it name failure modes and give moves?
- [ ] Is it free of edu-jargon that serves no one?`
      }
    ]
  },

  // ── Project: Staff Story Podcast ───────────────────────────────────
  {
    id: 'project-podcast',
    title: 'Staff Story Podcast',
    type: 'folder',
    children: [
      {
        id: 'project-brief',
        title: 'Project Brief',
        content: `# Project Brief: The Staff Story Podcast

## What you're making

Your team will interview one or two people who work at this school, then produce an 8-minute audio podcast in the style of NPR's *StoryCorps* or *The Daily*. The podcast must tell a real story — not a summary of someone's job, but a moment, challenge, or change that shaped how they see their work.

## Who you're interviewing

You'll interview school staff: teachers, administrators, coaches, counselors, maintenance staff, librarians, kitchen staff. Anyone who works here has a story. Your job is to find the one worth telling.

## What your podcast must include

**Must:**
- At least two interviews with school staff
- A clear story arc: hook, challenge, resolution
- At least three direct quotes from your interviewees woven into the narration
- Clean audio with minimal background noise, balanced levels, and smooth transitions
- A final cut of approximately 8 minutes

**Should:**
- Use music or ambient sound to support the emotional tone of the story
- Reflect in the closing on what this person's experience means for the school community
- Show evidence that you revised based on feedback from your peers or teachers

**Could:**
- Include a moment where you briefly explain what drew you to this story
- Propose one specific action the school community could take based on what you heard

## Timeline

Ten 80-minute class blocks. Your teachers will share the day-by-day activity sheets. The final podcast is due at the end of Day 10.

## How you'll be assessed

Your work is assessed using the Changemakers proficiency scales. The checkpoints below are formative — their purpose is to give you feedback before the final product, not to penalize early mistakes.

| Checkpoint | Day | Competency | Level |
|---|---|---|---|
| Interview guide | 2 | Communication | L2 |
| Listening practice | 3 | Communication | L2 |
| Interview transcription | 5–6 | Communication, Adaptive Thinking | L3 |
| Script draft | 7 | Communication, Creativity | L3 |
| First audio edit | 8 | Communication, Collaboration | L3 |
| Final podcast | 10 | Communication, Collaboration, Action & Advocacy | L3–L4 |

L3 is the standard. L4 is possible if your work shows synthesis, originality, and real connection to the school community beyond what the L3 criteria require. Not every team will reach L4, and that is fine.

## A note on this project

Good interviews come from genuine curiosity, not from running through a list of prepared questions. The most compelling podcast moments usually happen when the interviewer stops thinking about what to ask next and actually listens to what the person just said.

Start by listening. Save the clever questions for later.`
      },
      {
        id: 'unit-overview',
        title: 'Unit Overview',
        content: `# Unit Overview: The Staff Story Podcast

## What you're doing

In teams, you'll interview people who work at this school, find the story in what they tell you, and produce an 8-minute audio podcast in the style of NPR's *StoryCorps* or *The Daily*. The final podcast will be shared with the class and the school community.

This project spans the empathy, define, and communicate phases of the design thinking process. You'll gather real perspectives from real people, decide what matters most in what you heard, and make deliberate choices about how to share it with an audience.

## Why this project is harder than it looks

Most students can ask questions. Fewer can actually listen. The difference between an interview that produces a boring summary and one that produces a compelling story is almost always the same thing: the interviewer heard something unexpected and followed it, instead of moving on to the next question on their guide.

Don't rush this phase. Your whole podcast depends on what happens in the interview.

## Learning objectives

1. **Empathic inquiry:** Ask open-ended questions, listen actively, and follow what you hear rather than what you planned.
2. **Research and storytelling:** Structure an interview around a clear story arc — hook, challenge, resolution.
3. **Media production:** Plan, record, edit, and refine audio using basic editing tools.
4. **Reflection and critique:** Evaluate your own work against the rubric and revise based on specific feedback.

## Assessment summary

- **Formative checkpoints (L2):** Interview guide (Day 2), listening practice (Day 3). These are completion and process checks. Feedback from these should change how you work before you conduct your real interview.
- **Formative checkpoints (L3):** Transcription (Days 5–6), script draft (Day 7), first edit (Day 8). These are quality checks. L3 is the standard — independent, evidence-based work.
- **Final podcast (L3–L4, Group):** Evaluated at the end of Day 10 using the Final Podcast Rubric. L3 is the expected standard. L4 is a stretch that requires synthesis, sustained stakeholder engagement, and communication that goes beyond the conventions of the format.

## Timeline

Ten 80-minute class blocks. See the lesson plan for day-by-day details and the activity sheets in the activities folder for what to do each day.`
      },
      {
        id: 'lesson-plan',
        title: 'Lesson Plan',
        content: `# Lesson Plan: The Staff Story Podcast

**Grade:** 10
**Blocks:** Ten 80-minute class periods
**Co-taught:** Use "we" and "your teachers" in all student-facing communication

## Overview

In ten blocks, teams will conduct empathetic interviews with school staff, craft a narrative script, record and edit an audio podcast, and reflect on the process. The final product is shared with the class and the school community.

The central instructional challenge in this unit is keeping students in the inquiry and listening phase long enough to produce an interview worth making into a podcast. Students will want to move to production — recording, editing, designing cover art — before they have found a story. Your job is to slow that down.

## Key failure modes to watch for

**Rushing to production.** Students often feel ready to record after one interview. Push them to ask: *Do we actually know what story we're telling?* If they can't answer that in one sentence, they're not ready.

**Surface-level interviews.** Students will ask their prepared questions in order, get polite answers, and call it done. The best interviews happen when someone says something surprising and the interviewer follows it. Build this habit before Day 5.

**Treating collaboration as presence.** Some students will sit in the room while one or two teammates do the work. Require evidence of contribution at each checkpoint.

**Choosing easy interviewees.** Students gravitate toward staff they already know well or who are easy to reach. Easy access does not mean a better story. Encourage them to pursue someone whose experience they don't already understand.

**Summary instead of story.** Script drafts often summarize what the interviewee does rather than what they experienced. "Mrs. Vega is the librarian. She cares about books." is not a story. Push for tension, change, or stakes.

---

## Day 1 – Introduction and Goal Setting

**Purpose:** Get students oriented to the project, curious about their interviewees, and accountable to a personal learning goal.

- **0–10 min:** Play a short NPR-style clip that illustrates a powerful interview story. Ask students: *What did you notice about tone and structure? What made you want to keep listening?* Two or three responses, then move on — don't let this become a full discussion.
- **10–25 min:** Distribute the project brief. Read through it together. Clarify what "a real story" means versus a summary. The NPR clip is your anchor.
- **25–40 min:** Form teams of four or five. Each team writes one personal goal they want to achieve during this unit. The goal must be specific — not "do our best" but something they can actually practice.
- **40–55 min:** Goals share-out. Each group reads their goal. Record common themes on the board. Push any goal that's too vague: *How will you know if you achieved that?*
- **55–65 min:** Introduce the assessment overview. Show students what L3 looks like for the final podcast. Say clearly: L3 is the standard. L4 is possible but not expected.
- **65–80 min:** Each team states one concrete step they'll take before tomorrow. Teacher records these.

**Teacher move:** The personal goal reflection (Rubric: Reflection Rubric – Day 1) is due at the end of class. If students write vague goals ("try harder," "work together"), return them immediately and ask for something more specific. The goal they write today is what you'll reference when teams say they're "doing fine."

---

## Day 2 – Interview Planning

**Purpose:** Draft an interview guide that asks real questions, not safe ones.

- **0–10 min:** Active listening warm-up. Teacher demonstrates bad listening (looking at phone, interrupting, asking a closed question) then good listening. Students name what changed.
- **10–30 min:** Teams brainstorm staff roles they want to interview and draft three core questions for each. Teacher circulates and asks: *Would you be surprised if this question got an interesting answer?* Push teams toward questions that could produce unexpected responses.
- **30–45 min:** Draft interview guides using the template in the resources folder.
- **45–60 min:** Peer review. Groups swap guides and give one strength and one suggestion using the Interview Guide Rubric.
- **60–70 min:** Revise based on feedback.
- **70–80 min:** Teams choose staff to interview, confirm two names, and write a proposed schedule in the shared folder.

**Teacher move:** The most common failure here is questions that are too broad ("What do you like about working here?") or too leading ("Don't you think it's hard to...?"). When you see these, don't fix them — ask: *If you asked this question, what kind of answer would you get?* Let students recognize the problem.

**Assessment:** Interview Guide Rubric, L2, Group.

---

## Day 3 – Practicing Listening

**Purpose:** Build listening habits before students go into a real interview.

- **0–10 min:** Warm-up. Each student shares one thing they noticed about the NPR clip from Day 1 that they'd want to replicate in their own interview.
- **10–35 min:** Role-play. One student interviews using their guide while the other answers as if they were the staff member. A third student observes and takes notes on listening habits (eye contact, paraphrasing, follow-up questions, recovery from silence).
- **35–50 min:** Groups rotate so each pair reports one listening habit that helped and one that hurt.
- **50–65 min:** Teacher consolidates common patterns on the board. Name the most important ones: following an unexpected answer, handling silence, paraphrasing to confirm understanding.
- **65–80 min:** Students write their reflection using the Listening Practice Rubric and the reflection prompts in the resources folder.

**Teacher move:** Students often treat the role-play as a performance — they ask the questions "correctly" rather than actually listening. Tell the student playing the staff member to go off-script partway through and say something unexpected. See if the interviewer follows it. If they don't, that's the teaching moment.

**Assessment:** Listening Practice Rubric, L2, Individual.

---

## Day 4 – Fieldwork Preparation

**Purpose:** Make sure teams are logistically and mentally ready to conduct real interviews.

- **0–15 min:** Logistics. Explain how to book interview times, what equipment is available, what permissions are needed to record a staff member.
- **15–35 min:** Equipment setup. Each team tests a recording device (phone or school recorder) in the room. Record a 30-second sample, play it back, check levels and background noise.
- **35–55 min:** Fieldwork plan. Teams finalize who they're interviewing, when, where, and who on the team has which role. Draft a field checklist.
- **55–70 min:** Peer review of checklists. One strength, one gap. Teacher circulates and checks that every team has a backup plan if an interviewee cancels.
- **70–80 min:** Teams finalize plans and save in the shared folder.

**Teacher move:** Push teams to think about the physical interview environment — background noise, interruptions, recording distance. Students often underestimate how much a loud hallway degrades audio. If possible, have teams conduct a test recording in the space they plan to use before Day 5.

---

## Day 5 – Conducting Interviews (Round 1)

**Purpose:** First round of real interviews.

- **0–10 min:** Review field checklists and interview guides. Each team states which staff member they're interviewing today and where.
- **10–50 min:** Teams conduct first-round interviews. Teacher circulates to observe where possible, or covers the room for teams not yet in interviews.
- **50–70 min:** Debrief. Each group shares one thing they heard that surprised them. Teacher notes common themes.
- **70–80 min:** Teams label and back up audio files immediately. Begin transcription sprint using the transcription rubric as a guide.

**Teacher move:** Students often come back from interviews saying "it went great" without being able to name anything specific that surprised them. Ask: *What did they say that you didn't expect?* If they can't answer, probe further. Students who say they're "done" with one interview are usually not ready to write a script — they just don't know it yet.

**Assessment:** Transcription Rubric (L3, Group) applies to work completed Days 5–6.

---

## Day 6 – Conducting Interviews (Round 2) and Transcription

**Purpose:** Complete remaining interviews and organize material for script drafting.

- **0–10 min:** Review Day 5 insights. Teams decide which moments from the first interview to prioritize in transcription.
- **10–45 min:** Teams complete remaining interviews. Teams who finished both interviews on Day 5 focus on transcription.
- **45–60 min:** Transcription sprint. Each group transcribes the most compelling 2–3 minutes of each interview, using brief notes on tone and emphasis where relevant.
- **60–70 min:** Group share. Each team highlights one quote that captures emotion or a turning point.
- **70–80 min:** Teacher gives quick feedback on transcription quality and note organization. Teams save all files in the shared folder.

**Teacher move:** If teams transcribe in order rather than selecting the most compelling moments, that's a signal they haven't yet identified what their story is about. Ask: *If you had to cut this interview to 90 seconds, what would you keep and why?* That question often surfaces the story faster than the transcription itself.

**Assessment:** Transcription Rubric (L3, Group) due at end of Day 6.

---

## Day 7 – Story Mapping and Script Drafting

**Purpose:** Turn raw interview material into a story worth telling.

- **0–15 min:** Introduce the story arc: hook, challenge, resolution. Show a simple template. Use the NPR clip from Day 1 as a reference — ask students to map it onto the arc.
- **15–35 min:** Teams map their interview transcripts onto the arc, labeling which quote or moment belongs in each section.
- **35–55 min:** Draft scripts using the script template. Teacher circulates and asks: *Where is the tension in this story? Who changed, or what changed?*
- **55–70 min:** Peer review. Groups swap scripts and give feedback using the Script Draft Rubric.
- **70–80 min:** Revise based on feedback. Save as *TeamName_ScriptDraft_v1*.

**Teacher move:** The most common failure is a script that summarizes what the interviewee said rather than building a story around a moment of tension or change. "She talked about how she manages the library" is a summary. "She used to throw away books students didn't return. Then one student came back to return a book from three years ago, and she changed her policy completely." is the beginning of a story. Push for the latter.

**Assessment:** Script Draft Rubric (L3, Group).

---

## Day 8 – Audio Recording and Editing

**Purpose:** Produce a rough cut that proves the script works as audio.

- **0–10 min:** Demonstrate basic editing techniques: cut, fade, crossfade, volume adjustment. Show students the editing guide in the resources folder.
- **10–35 min:** Teams record narration segments in a quiet space. Assign roles: reader, audio monitor, script tracker.
- **35–55 min:** Build rough cut. Teams import narration and interview audio, arrange in sequence, cut long silences, add basic fades.
- **55–70 min:** Listen in groups. Each person notes one moment that works and one that needs a fix.
- **70–80 min:** Teams agree on three edits to make before Day 9. Save as *TeamName_RoughCut_v1*.

**Teacher move:** Resist the temptation to fix audio problems for teams. Ask: *Can a listener follow this without seeing the script?* That question surfaces most of the real issues — pacing, unclear transitions, narration that assumes too much.

**Assessment:** Editing Rubric (L3, Group).

---

## Day 9 – Final Edit and Peer Review

**Purpose:** Finalize the podcast and give and receive specific feedback.

- **0–20 min:** Teams apply their planned edits from Day 8 and run through the final checklist in the editing guide.
- **20–40 min:** Peer listening. Each team listens to two other teams' podcasts using the Final Podcast Rubric.
- **40–55 min:** Teams read their feedback and decide whether to make one more edit. Export final version.
- **55–80 min:** Individual reflection notes. Each student writes 4–6 sentences answering the reflection prompts in the resources folder. Save as *YourName_ReflectionNote* in the shared folder.

**Teacher move:** Students often write peer feedback that is either vague ("it was really good") or unkind without being useful. Model what a specific, rubric-anchored comment looks like before they start: *"The hook quote worked well because it made me want to know what happened next. The transition at 4:30 was abrupt — a one-sentence narration bridge would fix it."*

---

## Day 10 – Showcase and Reflection

**Purpose:** Celebrate the finished work, give students an audience for what they made, and close the unit with substantive reflection.

- **0–20 min:** Showcase. Each team plays their podcast. While listening, classmates write one moment that surprised them and one question the podcast raised.
- **20–35 min:** Whole-class discussion. Teacher asks: *What surprised you across all the podcasts? What question came up that none of them answered?* Keep this grounded in specific moments.
- **35–60 min:** Individual written reflection using the Day 10 prompts in the reflection-prompts resource. Students work in silence.
- **60–75 min:** Team retrospective. Teams write a response to the question in the Day 10 activity sheet.
- **75–80 min:** Closure. Each team shares one sentence from their retrospective.

**Note on assessment:** Teachers should assess final podcasts outside of class time using the Final Podcast Rubric, not during the showcase. The showcase is for the students, not for scoring.`
      },
      {
        id: 'assessment-overview',
        title: 'Assessment Overview',
        content: `# Assessment Overview

This unit is scaffolded around the Changemakers proficiency scales (L2–L4). Early checkpoints are formative completion checks. Mid-unit checkpoints are quality checks against L3. The final podcast is the summative product.

| Checkpoint | Day | Assignment | Rubric | Competency | Level | Group / Individual |
|---|---|---|---|---|---|---|
| Goal setting | 1 | Written personal learning goal and action plan | Reflection Rubric – Day 1 | Collaboration | L2 | Individual |
| Interview guide | 2 | Draft interview guide | Interview Guide Rubric | Communication | L2 | Group |
| Listening practice | 3 | Role-play and written reflection | Listening Practice Rubric | Communication | L2 | Individual |
| Fieldwork prep | 4 | Field checklist and interview schedule | Teacher observation | Collaboration | L2 | Group |
| Conducting interviews | 5–6 | Transcription of key moments | Transcription Rubric | Communication, Adaptive Thinking | L3 | Group |
| Script draft | 7 | Narrative script draft | Script Draft Rubric | Communication, Creativity | L3 | Group |
| First edit | 8 | Rough cut audio file | Editing Rubric | Communication, Collaboration | L3 | Group |
| Final edit and peer review | 9 | Revised podcast file and individual reflection note | Teacher observation | Collaboration | L3 | Individual (reflection) / Group (edit) |
| Final podcast | 10 | Final 8-minute podcast | Final Podcast Rubric | Communication, Collaboration, Action & Advocacy | L3–L4 | Group |

The progression follows the competency growth model: foundational skills (L2) in early checkpoints, independent mastery (L3) in the middle of the unit, and synthesis or sophistication (L4) possible in the final product. Each rubric focuses on observable evidence of the targeted level, anchored to the Changemakers proficiency scales.

L3 is the standard for the final podcast. L4 requires a qualitative shift — not more tasks, but synthesis, sustained stakeholder engagement, and communication that intentionally adapts or exceeds the conventions of the format.`
      },

      // ── Daily Activities ─────────────────────────────────────────────
      {
        id: 'activities',
        title: 'Daily Activities',
        type: 'folder',
        children: [
          {
            id: 'day01',
            title: 'Day 1 — Intro & Goal Setting',
            content: `# Day 1 – Introduction and Goal Setting

**Competency focus:** Collaboration

## What you're doing today

Get oriented to the project, meet your team, and commit to a specific personal learning goal for the unit.

## Step 1 – Watch and notice (10 min)

Your teachers will play a short NPR-style podcast clip. As you listen, write down two things you notice — about tone, structure, or what made you want to keep listening. Be specific. Not "it was interesting" but *what* was interesting and *why*.

## Step 2 – Read the project brief (15 min)

Read the project brief together as a team. Identify:
- What you're making
- Who you're trying to reach
- What L3 looks like for the final product

Ask your teachers to clarify anything that's unclear before you move on.

## Step 3 – Write your team's learning goal (20 min)

As a team, write one goal you want to achieve during this unit. The goal must be specific enough that you'll know at the end whether you achieved it.

Vague: *We want to communicate well.*
Specific: *We want to ask at least two follow-up questions in every interview that we didn't plan in advance.*

Write your goal on a shared doc. You'll come back to it.

## Step 4 – Share and hear from other teams (15 min)

Each team reads their goal aloud. Listen for patterns across the class. Are there skills that many teams want to build? Your teachers will note common themes on the board.

## Step 5 – Write your individual reflection (10 min)

Each person writes their personal learning goal using the Personal Learning Goal Rubric. Answer these three things in writing:

1. What specific skill do I want to improve in this unit?
2. What concrete action will I take before tomorrow's class?
3. What is one strength I already have that I'll build on, and one area I want to improve?

Save your reflection in the shared folder before you leave.`
          },
          {
            id: 'day02',
            title: 'Day 2 — Interview Planning',
            content: `# Day 2 – Interview Planning

**Competency focus:** Communication

## What you're doing today

Plan and draft an interview guide that asks real questions — ones that could produce answers you don't expect.

## Step 1 – Warm-up: What makes a good question? (10 min)

In pairs, one person asks the other: *What has been the most surprising thing about being at this school?*

Then one person asks: *Do you like working here?*

Compare what you got. What's the difference between those two questions?

## Step 2 – Choose your interviewee and brainstorm (20 min)

As a team, decide which staff member you'll interview. Write down three questions you'd ask them. Then ask yourself: *Would any of these questions surprise us if they got an interesting answer?*

If all your questions feel safe or predictable, push further. Think about:
- A moment that probably changed how they see their job
- Something about their work most students don't know or think about
- A decision they've had to make that wasn't easy

## Step 3 – Draft the interview guide (20 min)

Open the interview-guide template from the resources folder. Fill it out with:
- Your interviewee's name, role, and a one-sentence purpose statement
- 4–6 core questions
- At least two follow-up prompts per main question
- A closing question

Keep each question short. If you need more than two lines to write a question, it's probably two questions.

## Step 4 – Peer review (15 min)

Swap guides with another team. Using the Interview Guide Rubric, give them:
- One specific strength in the guide
- One specific suggestion to make a question more open-ended or more likely to get a surprising answer

Write your feedback directly on the doc.

## Step 5 – Revise and schedule (15 min)

Update your guide based on the feedback. Then confirm:
- The name of the staff member you'll interview
- A proposed date and time to conduct the interview
- Who on the team has which role during the interview (questioner, note-taker, audio monitor)

Save the final guide in the shared folder as *TeamName_InterviewGuide_v1*.`
          },
          {
            id: 'day03',
            title: 'Day 3 — Practicing Listening',
            content: `# Day 3 – Practicing Listening

**Competency focus:** Communication

## What you're doing today

Practice the listening habits that separate a useful interview from a polite one. By the end of class, you should have specific, written feedback on your own listening — not from a teacher, but from someone who was in the room with you.

## Step 1 – Warm-up (10 min)

Share with a partner: What is one thing from the NPR clip on Day 1 that you want to be able to do when you conduct your real interview?

Not a general skill. Name a specific moment from the clip.

## Step 2 – Role-play interview (25 min)

Work in groups of three:
- Person A: interviewer, using questions from their guide
- Person B: answers as if they're the staff member your team is planning to interview
- Person C: observer, taking notes on specific listening behaviors

**Observer checklist:**
- Does the interviewer make eye contact, or do they mostly look at their guide?
- When Person B says something unexpected, does Person A follow it or move to the next question?
- Does the interviewer ever paraphrase what they heard?
- What happens when there's a silence?

Halfway through, Person B should say something that's not in the guide — something off-script. See what happens.

Rotate so everyone gets to be the interviewer.

## Step 3 – Report out (15 min)

Each group of three reports one listening habit that helped the interview and one that got in the way. Your teachers will collect these on the board.

## Step 4 – Written reflection (20 min)

Using the Listening Practice Rubric and the reflection prompts in the resources folder, write your individual reflection. Answer:

1. Describe one specific moment in the role-play when you actually followed what your partner said instead of moving to the next question. What did you hear?
2. What is one listening habit you'll commit to practicing before your real interview?

Save your reflection in the shared folder as *YourName_ListeningReflection*.`
          },
          {
            id: 'day04',
            title: 'Day 4 — Fieldwork Preparation',
            content: `# Day 4 – Fieldwork Preparation

**Competency focus:** Collaboration

## What you're doing today

Make sure your team is logistically and mentally ready to conduct a real interview. A bad field plan produces bad audio. Get the details sorted before you're standing in a hallway with a nervous staff member.

## Step 1 – Confirm your plan (15 min)

As a team, confirm:
- Who you're interviewing, their role, and where they'll be
- The day and time for each interview
- Who on the team has which role (questioner, audio monitor, note-taker)
- A backup plan if the interviewee needs to reschedule

Write these in your shared doc. If anything is still unconfirmed, flag it now — not on Day 5.

## Step 2 – Test your recording setup (20 min)

Find a quiet space in or near the classroom. Record a 30-second sample. Play it back and check:
- Can you hear the speaker clearly?
- Is there background noise that competes with the voice?
- Did anything clip or distort?

If the audio has problems, move locations and try again. Good audio starts with a good room, not a good edit.

## Step 3 – Draft your field checklist (20 min)

Write a checklist your team will bring on the day of the interview. Include:
- Location and time
- Equipment needed and who's bringing it
- How you'll introduce yourselves and explain the project to the interviewee
- What you'll do if the recording stops working mid-interview
- How you'll end the interview and thank the person

Keep it short enough to actually use in the moment — one page maximum.

## Step 4 – Peer review (15 min)

Swap checklists with another team. Mark one thing that looks solid and one thing that seems risky or incomplete.

## Step 5 – Revise and save (10 min)

Update your checklist based on the feedback. Save it in the shared folder as *TeamName_FieldChecklist*. Bring it with you on Day 5.`
          },
          {
            id: 'day05',
            title: 'Day 5 — Conducting Interviews (Round 1)',
            content: `# Day 5 – Conducting Interviews (Round 1)

**Competency focus:** Communication, Adaptive Thinking

## What you're doing today

Conduct your first real interview. Listen more than you talk. Follow what you hear.

## Before the interview

Review your interview guide and field checklist. Arrive at the location a few minutes early to set up your recording device and test levels before your interviewee arrives.

When you introduce yourself, keep it brief: tell them your name, your team, and one sentence about what the podcast is about. Then ask if they're okay with being recorded. Don't start until you have a clear yes.

## During the interview

Stick to your guide loosely. If your interviewee says something unexpected, follow it — ask a follow-up you didn't plan. You can return to your guide afterward.

Keep a short note sheet next to you for:
- Quotes you want to use
- Moments that surprised you
- Questions that came up during the conversation that you didn't plan to ask

## After the interview

Immediately after the conversation:
1. Label your audio file: *TeamName_IntervieweeRole_Date*
2. Back it up in the shared folder before anything else
3. Write down the two or three moments that felt most significant while they're still fresh

## Back in class: Debrief and transcription (30 min)

Each group shares one thing they heard that surprised them. Your teachers will note common themes.

Then open your audio and begin transcribing the most compelling 2–3 minutes using the Transcription Rubric as a guide. Don't transcribe in order — listen through and find the part worth keeping. Focus on moments with emotion, tension, or a turning point.

Save your transcript as *TeamName_IntervieweeRole_Date_transcript* in the shared folder.

## Before you leave

Write two sentences in your team's shared doc: What surprised you today? What do you want to follow up on in your next interview or your next conversation with this person?`
          },
          {
            id: 'day06',
            title: 'Day 6 — Interviews (Round 2) & Transcription',
            content: `# Day 6 – Conducting Interviews (Round 2) and Transcription

**Competency focus:** Communication, Adaptive Thinking

## What you're doing today

Complete any remaining interviews, organize your recordings, and finish transcribing the moments that matter.

## Part 1 – Finish your interviews

If any interviews were missed or rescheduled from Day 5, complete them now.

Label each new audio file: *TeamName_IntervieweeRole_Date*. Back it up in the shared folder immediately after the interview.

## Part 2 – Transcription (30 min)

For every interview you've completed, transcribe the most compelling 2–3 minutes. Use the Transcription Rubric to guide your selections.

Don't transcribe chronologically unless the best moments happen to be at the start. Listen through the whole interview first, then go back and transcribe what you identified.

For each excerpt, include:
- Speaker label and time stamp
- The exact words spoken
- A brief note on tone or emphasis if it changes the meaning

Save each transcript as *TeamName_IntervieweeRole_Date_transcript* in the shared folder.

## Part 3 – Group discussion (15 min)

As a team, read through your transcripts together. Identify:

1. One theme that appears across more than one interview
2. One quote that captures an emotion or turning point you want to build the podcast around
3. One moment where you wish you had asked a follow-up question — what would you ask if you could?

Write your answers in your shared doc. You'll use these to build your story map on Day 7.

## Transcription rubric due today

Your completed transcripts are due at the end of this class. Your teachers will give quick feedback before Day 7 to help you identify the strongest material before you start scripting.`
          },
          {
            id: 'day07',
            title: 'Day 7 — Story Mapping & Script Draft',
            content: `# Day 7 – Story Mapping and Script Draft

**Competency focus:** Communication, Creativity

## What you're doing today

Map your interview material onto a story arc and write a first-draft script. By the end of class, your team should have a complete draft your teachers can give feedback on.

## Step 1 – Build your story map (15 min)

Open your transcripts. As a team, find one moment for each section below. Write it in a shared doc or on sticky notes.

- **Hook:** One striking quote or detail that would make a listener stop and pay attention.
- **Challenge:** The tension, problem, or turning point your interviewee described.
- **Resolution:** What changed, what they learned, or what they are still figuring out.

If you can't find a resolution in your transcripts, that is worth noting. A story without resolution is still a story — but you need to decide how to handle it.

## Step 2 – Draft the script (25 min)

Use the script template in the resources folder. Write the narration that connects your interview excerpts. Keep narration short — one or two sentences per transition. Let the interview audio carry most of the story.

Your draft must include:
- At least three direct quotes from your interviewees
- Notes on where soundbites, music, or ambient audio will go
- A closing line that tells the listener why this story matters

Before you start writing, answer this question as a team: *What do we want a listener to feel or understand at the end?* Write the answer at the top of your script doc. Check your draft against it when you're done.

## Step 3 – Peer review (15 min)

Swap scripts with another team. As you read, write answers to these three questions directly on the doc:

1. Where does the story feel clear and specific?
2. Where does it feel like a summary of what happened rather than a story about a person?
3. Is there a moment that made you want to keep reading? Name it.

Return the doc with your notes.

## Step 4 – Read and decide (10 min)

Read the feedback your team received. Together, identify one change you'll make before next class. Write it at the bottom of your script doc.

## Before you leave

Save your script draft in the shared folder as *TeamName_ScriptDraft_v1*.`
          },
          {
            id: 'day08',
            title: 'Day 8 — Recording & Editing',
            content: `# Day 8 – Recording and Editing

**Competency focus:** Communication, Collaboration

## What you're doing today

Record your narration and produce a rough cut that combines your voice with your interview audio. By the end of class, your team should have a full rough cut to assess.

## Step 1 – Before you record (10 min)

Confirm your script is final. Then divide roles for the recording session:
- One person reads the narration.
- One person monitors audio levels and signals if a take sounds off.
- One person follows the script and notes the time stamp for each take.

Find a quiet space. Record a 10-second test clip and play it back. If you can hear background noise clearly, move to a quieter location.

## Step 2 – Record your narration (25 min)

Record each narration section separately so you can re-record one section without redoing everything.

Label each file clearly: *TeamName_Narration_Section1*, *TeamName_Narration_Section2*, etc.

If a take doesn't feel right, record it again. Keep all takes until your edit is final.

## Step 3 – Build the rough cut (20 min)

Open your editing tool. Import your narration files and your interview audio. Arrange them in this sequence:

1. Hook clip
2. Narration intro
3. Interview excerpt
4. Narration bridge
5. Continue through to your closing

Cut long silences. Add a short fade at the very start and end. Don't add music yet — focus on the story first.

Use the editing guide in the resources folder if you get stuck on a specific technique.

## Step 4 – Listen and take notes (15 min)

Play the rough cut from start to finish without stopping or editing as you go. Each person writes:

- One moment that works
- One moment that needs fixing
- One question about whether a specific section is clear to someone who wasn't in the room for the interview

Share your notes. As a team, agree on three specific edits to make before Day 9. Write them in your shared doc.

## Before you leave

Save your rough cut as *TeamName_RoughCut_v1* in the shared folder. Write your three planned edits in your team's shared doc so you can find them next class.`
          },
          {
            id: 'day09',
            title: 'Day 9 — Final Edit & Peer Feedback',
            content: `# Day 9 – Final Edit and Peer Feedback

**Competency focus:** Communication, Collaboration

## What you're doing today

Apply your planned edits, give and receive feedback using the rubric, and submit your final podcast file.

## Step 1 – Apply your edits (20 min)

Open your rough cut from Day 8. Work through the three edits your team agreed on. Then run through this checklist before you move on:

- [ ] Volume levels are consistent across the full 8 minutes. Nothing spikes or drops dramatically.
- [ ] Music or ambient sound, if included, sits under the voice — not over it.
- [ ] There is a short fade in and fade out at the start and end.
- [ ] The podcast is between 7:30 and 8:30 minutes.

When you're satisfied, export as an MP3 and label it *TeamName_FinalPodcast_v1*.

## Step 2 – Listen to two other teams' podcasts (20 min)

Your teachers will tell you which two teams to listen to. As you listen to each one, use the Final Podcast Rubric. Write your notes on a shared doc or paper.

For each podcast:
- Name one specific moment that works at L3 or above, and say why.
- Name one specific change that would push the podcast toward L3 or L4.

Be direct. Vague praise ("it was really good") doesn't give a team anything to act on.

## Step 3 – Read your feedback and decide (15 min)

Read the notes your team received. Together, decide:

- Is there one edit worth making before final submission? If yes, make it now.
- If not, write one sentence explaining why your current version already meets the feedback.

Export a final version if you made changes: *TeamName_FinalPodcast_v2*.

## Step 4 – Individual reflection note (15 min)

Each person writes a short individual note — 4 to 6 sentences — answering these questions:

1. What is one editing or storytelling decision your team made, and why did you make it?
2. What feedback changed something in your podcast?
3. What would you do differently if you had one more day?

Save your note in the shared folder as *YourName_ReflectionNote*.

## Before you leave

Confirm that your final podcast file and your individual reflection note are both in the shared folder. Check that your teammates have done the same before you close your laptop.`
          },
          {
            id: 'day10',
            title: 'Day 10 — Showcase & Reflection',
            content: `# Day 10 – Showcase and Reflection

**Competency focus:** Communication, Action & Advocacy

## What you're doing today

Share your podcast with the class, listen to what other teams made, and reflect on what you learned across the whole unit.

## Part 1 – Showcase (20 min)

Each team plays their podcast. While you listen to other teams' work, write down:

- One moment that surprised you.
- One question the podcast made you want to ask the interviewee directly.

You'll have a chance to share some of these after all podcasts have played.

## Part 2 – Whole-class discussion (15 min)

Your teachers will ask a few questions about what you heard across all the podcasts. Come ready to point to a specific moment, not just a general impression. What surprised you? What question came up that none of the podcasts answered?

## Part 3 – Individual written reflection (20 min)

Answer all four questions in writing. Be specific — point to moments in your process, not general feelings.

1. Your interview guide changed between Day 2 and the real interview. What did you change, and what made you change it?
2. Describe one moment during the interview when you actually listened — when you heard something that shifted what you asked next. What did you hear?
3. What is one thing in the final podcast that is better because of feedback you received? Name the feedback and describe what changed.
4. What is one thing in the podcast you're still not satisfied with? What would it actually take to fix it?

## Part 4 – Team retrospective (15 min)

As a team, answer this question together:

*If you were going to interview someone outside the school — a person affected by a real community issue — what would you do differently based on what you learned this unit?*

Write your team's answer in your shared doc in at least four sentences. Your teachers will read these. Don't perform a reflection — write what you actually think.

## Submitting today

Your final podcast file and individual reflection note should already be in the shared folder from Day 9. If anything is missing, submit it before the end of class.`
          }
        ]
      },

      // ── Resources ────────────────────────────────────────────────────
      {
        id: 'resources',
        title: 'Resources',
        type: 'folder',
        children: [
          {
            id: 'editing-guide',
            title: 'Editing Guide',
            content: `# Editing Guide

Use this reference during Days 8 and 9 when editing your podcast.

## Before you open the editor

Make sure:
- All audio files are labeled and backed up in the shared folder.
- You have a complete script with notes on where each clip goes.
- You know the target length: 8 minutes total.

## Basic edits

**Cut:** Highlight a section of audio and delete it. Use this to remove long pauses, false starts, or any section that doesn't move the story forward. When in doubt, cut — a tighter podcast is almost always better.

**Fade in / Fade out:** Apply a short fade (1–2 seconds) at the very beginning and end of your podcast. This prevents a harsh start or stop.

**Crossfade:** Use between two clips that sit next to each other. A short crossfade (0.5–1 second) smooths the transition so the join is invisible to the listener.

**Volume adjustment:** Select a clip and adjust its level so it doesn't spike above -6dB or drop below -18dB. Use this on interview audio recorded in a louder or quieter environment than your narration.

## Reducing background noise

If your interview audio has consistent background hiss or hum:

1. Find a 2–3 second section of just the background noise, with no speech.
2. Apply a noise profile to that section.
3. Apply noise reduction to the full clip.

Use a moderate setting. Too much noise reduction sounds unnatural and can muffle the voice.

## Adding music

If you add music, keep it at least 20dB below your voice track. Music should support the emotional tone of a section — not compete with the words. Bring it in under the narration, not over it.

Fade music out before a speaker starts talking. Bring it back in under narration or transitions.

## Final check before you export

Go through this list before you export your final MP3:

- [ ] You have listened to the full podcast from start to finish at normal volume.
- [ ] No section is significantly louder or quieter than the rest.
- [ ] Transitions between clips are smooth — no pops, clicks, or abrupt cuts.
- [ ] Background noise is consistent or absent throughout.
- [ ] Music, if included, stays under the voice at all times.
- [ ] The podcast is between 7:30 and 8:30 minutes.
- [ ] Exported as MP3, 128kbps or higher.`
          },
          {
            id: 'interview-guide-template',
            title: 'Interview Guide Template',
            content: `# Interview Guide Template

**Purpose:** Use this guide to plan and conduct an empathetic interview with a staff member.

| Section | What to include |
|---|---|
| Title & Purpose | Who you're interviewing and why. |
| Background Questions | 2–3 open-ended questions that set the context. |
| Core Inquiry | 4–6 main questions that explore experiences, motivations, challenges. |
| Follow-ups | Prompt phrases to probe deeper (e.g., *Tell me more about…*). |
| Closing | 1–2 reflective questions and a thank-you note. |

**Tip:** Keep each question short (max two lines) and use "I" or "you" language that encourages storytelling.`
          },
          {
            id: 'reflection-prompts',
            title: 'Reflection Prompts',
            content: `# Reflection Prompts

These prompts are for individual written reflections at key points in the unit. Your teachers will tell you which prompts to use and when. Answer in complete sentences. Point to specific moments — not general feelings.

---

## After the first interview (Days 5–6)

Answer in 3–5 sentences.

1. Describe one moment in the interview when you heard something you didn't expect. What was it, and why did it surprise you?
2. Look at your interview guide. Which question got the most useful answer? Which question got the least? What's the difference between them?
3. What is one thing you would change about how you conducted the interview before you do the next one?

---

## After the script draft (Day 7)

Answer in 3–5 sentences.

1. Find one place in your script where you summarized your interviewee instead of letting them speak. Write the original summary, then write how you could replace it with a direct quote or a more specific description.
2. What is the central tension or challenge in your story? Write it in one sentence.
3. Who is this podcast for? What do you want that specific person to think or do after listening?

---

## End-of-unit reflection (Day 10)

Answer in 4–6 sentences per question.

1. Your interview guide changed between Day 2 and the real interview. What did you change, and what made you change it?
2. Describe one moment during the interview when you actually listened — when you heard something that shifted what you asked next. What did you hear?
3. What is one thing in the final podcast that is better because of feedback you received? Name the feedback and describe what changed.
4. What is one thing in the podcast you're still not satisfied with? What would it actually take to fix it?`
          },
          {
            id: 'script-template',
            title: 'Script Template',
            content: `# Script Template

**Purpose:** Draft a concise narration that weaves interview excerpts into a clear story arc.

| Section | What to include |
|---|---|
| Hook (0:00–0:30) | One striking quote or fact that draws listeners in. |
| Setup (0:30–1:30) | Brief context of the staff member's role and why their story matters. |
| Conflict / Challenge (1:30–3:00) | Highlight a problem or tension the person faces, using an interview excerpt. |
| Resolution / Insight (3:00–4:30) | Show how they addressed the challenge or what they learned, again citing dialogue. |
| Closing (4:30–5:00) | Reflect on broader implications and thank the interviewee. |

**Tip:** Keep each section under 1–2 sentences of spoken word; audio length should target ~8 minutes total.`
          }
        ]
      },

      // ── Rubrics ──────────────────────────────────────────────────────
      {
        id: 'rubrics',
        title: 'Rubrics',
        type: 'folder',
        children: [
          {
            id: 'rubric-personal-goal',
            title: 'Personal Learning Goal (Day 1)',
            content: `# Personal Learning Goal Rubric

**Assessment type:** Individual
**Primary competency:** Collaboration
**Assessed in:** The written personal goal and action plan at the end of Day 1

This is a formative L2 check. The purpose is to help you set a goal that's actually usable — specific enough to practice against during the unit.

| Dimension | 1.0 | 1.5 | 2.0 |
|---|---|---|---|
| Goal specificity | My goal is vague or not connected to this unit — for example, "do well" or "try hard." | My goal connects to the unit but is hard to measure — for example, "get better at listening." | My goal is specific and tied to a skill I can actually practice in this unit — for example, "I will ask at least one follow-up question in every practice interview." |
| Action plan | I haven't named a next step I'll take before the next class. | I name a next step, but it's not specific enough to act on. | I describe one concrete action I will take before tomorrow's class, and it connects directly to my goal. |
| Self-awareness | I don't identify a strength or area for growth, or my reflection stays at a general level. | I name a strength or area for growth, but I don't connect it to the work we're doing in this project. | I identify one strength I'll build on and one area I want to improve during this unit, and I explain why each one matters for doing good interview work. |`
          },
          {
            id: 'rubric-interview-guide',
            title: 'Interview Guide (Day 2)',
            content: `# Interview Guide Rubric

**Assessment type:** Group
**Primary competency:** Communication
**Assessed in:** The interview guide submitted at the end of Day 2

This is a formative L2 check. The goal is to confirm that your team has done the planning work before you go into a real interview.

| Dimension | 1.0 | 1.5 | 2.0 |
|---|---|---|---|
| Question design | Our questions are mostly closed-ended or don't connect to the interview purpose. A listener could answer most of them with yes or no. | Most of our questions are open-ended, but a few lead the interviewee toward a specific answer. | All of our questions are open-ended, tied to the interview purpose, and written to invite the interviewee to elaborate. |
| Follow-up prompts | Our guide has no follow-up prompts. | We have some follow-up prompts, but most repeat the main question rather than pushing the conversation deeper. | Each main question has at least two follow-up prompts that help the interviewee expand on their answer. |
| Clarity | Our questions are long, include jargon, or would be hard to read aloud without stumbling. | Most of our questions are clear, but a few are wordy or difficult to say naturally. | All of our questions are short, in plain language, and easy to read aloud in a real conversation. |
| Purpose and framing | Our guide doesn't explain who we are interviewing or why. | Our guide names the interviewee and their role but doesn't explain the purpose of the interview. | Our guide clearly states who we are interviewing and why, giving context to both the interviewer and the interviewee. |`
          },
          {
            id: 'rubric-listening-practice',
            title: 'Listening Practice (Day 3)',
            content: `# Listening Practice Rubric

**Assessment type:** Individual
**Primary competency:** Communication
**Assessed in:** The role-play and written reflection on Day 3

This is a formative L2 check. The goal is to give you specific feedback on your listening habits before you conduct a real interview.

| Dimension | 1.0 | 1.5 | 2.0 |
|---|---|---|---|
| Active listening | I don't show visible signs of attentiveness during the role-play. I mostly look at my question list rather than engaging with my partner. | I show some signs of attentiveness — eye contact, nodding — but I mainly stay focused on my prepared questions rather than responding to what my partner says. | I use body language and verbal cues — nodding, paraphrasing, making eye contact — to show my partner I'm following what they're saying, not just waiting for my next turn. |
| Follow-up quality | My follow-up questions repeat the original question or change the topic entirely. | I ask at least one follow-up, but it doesn't go deeper into what my partner just said. | When something interesting comes up, I ask at least one open-ended follow-up that helps my partner say more about that specific thing. |
| Reflection | I don't identify a specific listening strength or area for improvement, or my reflection stays at a general level. | I name a strength or area for improvement, but it's vague — for example, "I need to listen better" or "I was pretty good." | I identify one specific listening strength I'll build on and one concrete thing I want to do differently before my first real interview, and I explain why each one matters for doing good interview work. |`
          },
          {
            id: 'rubric-transcription',
            title: 'Transcription (Days 5–6)',
            content: `# Transcription Rubric

**Assessment type:** Group
**Assessed in:** The transcripts submitted at the end of Days 5–6

---

## Communication

| Competency | Description |
|---|---|
| Level 4 | Our transcripts capture not just the words but the rhythm and texture of the conversation. We have made deliberate choices about what to transcribe in full, what to paraphrase, and what to leave out, and we can explain those choices. A reader of our transcripts would understand not just what was said but how it was said and why it mattered. |
| Level 3 | Our transcripts communicate the interview content in an organized and accurate way. Text is formatted by speaker, includes time stamps, and is complete enough that a teammate who wasn't in the room could use it to write the script. Language captures the speaker's actual words, not a paraphrase. |
| Level 2 | Our transcripts show awareness of what a working document needs. We have captured the spoken words and organized them by speaker. Formatting is consistent even if not always precise. |
| Level 1 | Our transcripts are incomplete, unorganized, or paraphrase the interviewee rather than capturing what was actually said. |

---

## Adaptive Thinking

| Competency | Description |
|---|---|
| Level 4 | Our selection of which 2–3 minutes to transcribe reflects synthesis across the full interview. We can explain why these specific moments are the most relevant to our story, pointing to tensions, turning points, or moments where the interviewee revealed something unexpected. We note where tone or emphasis changes what the words alone would suggest. |
| Level 3 | Our transcripts show we selected moments based on more than surface interest. We identified moments that capture emotion, tension, or a turning point, and we have brief notes on why each section matters for the story we're building. We recognize when tone or emphasis changes the meaning of the words. |
| Level 2 | Our transcripts identify which parts of the interview seem most relevant. We can describe one perspective the interviewee expressed and summarize the key ideas in those sections. |
| Level 1 | Our transcripts capture audio in order or at random, without any judgment about what matters most to the story. |`
          },
          {
            id: 'rubric-script-draft',
            title: 'Script Draft (Day 7)',
            content: `# Script Draft Rubric

**Assessment type:** Group
**Assessed in:** The script draft submitted at the end of Day 7

---

## Communication

| Competency | Description |
|---|---|
| Level 4 | Our script uses precise, content-specific language that is fully tailored to an NPR-style listener. We have made deliberate choices about when to use the interviewee's words versus our narration, and those choices consistently strengthen the story. A reader of this script can identify a clear emotional arc and understand exactly where audio cues belong. |
| Level 3 | Our script communicates the interviewee's story in an organized and engaging way. Narration connects interview excerpts smoothly. Language is specific and descriptive rather than vague. The story follows a hook, challenge, and resolution that a listener could follow without difficulty. |
| Level 2 | Our script shows awareness of what an audio audience needs. We have organized the content in sections and followed the basic conventions of a script — narration, quotes, audio cues. The message is understandable, though the language is sometimes generic. |
| Level 1 | Our script is missing key sections, relies on summary rather than story, or is not organized in a way an audio listener could follow. |

---

## Creativity

| Competency | Description |
|---|---|
| Level 4 | Our script frames the interviewee's experience in a way that is both novel and exceptionally original. We can show evidence of considering and discarding other possible story angles before settling on this one. The problem or tension we chose to highlight reflects a deep understanding of the interviewee's world, not just what they said on the surface. |
| Level 3 | Our script creates a story that is both novel and useful for this project. We explored how to frame the interviewee's experience and chose an angle that goes beyond summarizing their job. The hook, challenge, and resolution reflect our understanding of what actually matters about this person's experience. |
| Level 2 | Our script presents a useful account of the interview. We chose a story angle from the template and can explain how it addresses the interview's purpose. The narrative structure is in place even if not fully original. |
| Level 1 | Our script summarizes the interview without shaping it into a story. The narrative angle is unclear or not present. |`
          },
          {
            id: 'rubric-editing',
            title: 'Editing Rubric (Day 8)',
            content: `# Editing Rubric

**Assessment type:** Group
**Assessed in:** The rough cut submitted at the end of Day 8

---

## Communication

| Competency | Description |
|---|---|
| Level 4 | Our edited podcast makes audio choices — music, pacing, transitions — that intentionally shape the listener's experience in ways that go beyond a standard edit. A listener wouldn't notice the editing; they would only feel the story. We can explain each major audio decision and why we made it. |
| Level 3 | Our podcast communicates the story in an organized and engaging way. Audio levels are balanced, transitions between sections are smooth, and background noise is minimal. The story follows the script's structure and the pacing allows a listener to keep up without effort. |
| Level 2 | Our podcast shows awareness of what an audio audience needs. Levels are mostly consistent and we have applied basic transitions. A listener can follow the story even if the audio quality is uneven in places. |
| Level 1 | Our podcast has significant audio issues — inconsistent levels, abrupt cuts, or sustained background noise — that make it hard for a listener to follow the story. |

---

## Collaboration

| Competency | Description |
|---|---|
| Level 4 | Our team designed the editing process around each member's strengths and documented how we made decisions. We can point to specific moments where team feedback changed the edit. Each person contributed to a distinct part of the final product and we can show evidence of that. |
| Level 3 | Our team communicated clearly during the editing process. Each member fulfilled their responsibilities. We gave, reflected on, and acted on constructive feedback from at least two rounds of review before submitting. |
| Level 2 | Our team participated in the editing process. We can identify who did what and describe how we made at least one decision based on peer feedback. |
| Level 1 | The editing was handled by one or two people. It's unclear how decisions were made or whether all members contributed. |`
          },
          {
            id: 'rubric-final-podcast',
            title: 'Final Podcast (Day 10)',
            content: `# Final Podcast Rubric

**Assessment type:** Group
**Assessed in:** The final 8-minute podcast submitted at the end of Day 10

---

## Communication

| Competency | Description |
|---|---|
| Level 4 | Our podcast adapts its storytelling strategies to an NPR-style audience in ways that go beyond standard conventions. Our narration, quote selection, pacing, and sound design work together deliberately — we made intentional choices about when to follow the expected format and when to break from it, and we can explain why. A listener can follow a clear emotional arc from start to finish. |
| Level 3 | Our podcast communicates the interviewee's story in an organized and engaging way. Narration connects interview excerpts clearly. Language is precise and content-specific rather than vague. The story has a hook, a challenge, and a resolution that a listener can follow without difficulty. |
| Level 2 | Our podcast shows awareness of what an audio audience needs. We have organized the story in sections and followed basic conventions of audio storytelling. The message is understandable, even if the language is sometimes generic or the pacing is uneven. |
| Level 1 | Our podcast is incomplete, unclear, or does not follow a recognizable structure. A listener would have difficulty following the story. |

---

## Collaboration

| Competency | Description |
|---|---|
| Level 4 | Our team designed and implemented collaborative strategies based on each member's strengths. We can point to specific evidence of each person's contributions, show how we resolved conflicts or adjusted roles during the project, and explain how our process improved from Day 1 to Day 10. |
| Level 3 | Our team communicated clearly, met our deadlines, and each member fulfilled their responsibilities. We can show evidence of giving and acting on feedback at multiple points in the project. Our final product reflects shared ownership, not just a division of tasks. |
| Level 2 | Our team participated in the project's key steps. We can identify each person's role and describe how we made at least one decision based on peer or teacher feedback. |
| Level 1 | Collaboration was uneven or undocumented. It is unclear how decisions were made or how much each member contributed to the final product. |

---

## Action & Advocacy

| Competency | Description |
|---|---|
| Level 4 | Our podcast connects the interviewee's experience to a specific issue that matters to the school community, with consistent engagement with that person's perspective throughout. Our closing gives listeners a specific action or shift in thinking they could make. We show evidence of multiple rounds of engagement with the interviewee's story — not just one conversation. |
| Level 3 | Our podcast reflects the interviewee's perspective accurately and shows we listened carefully. We connected their story to something larger than their individual experience. Our closing gives the listener something concrete to think about or do. |
| Level 2 | Our podcast includes the interviewee's perspective and captures what they said. We explain why we chose this person and what we hoped to learn. We have proposed a reason why this story matters to the school community. |
| Level 1 | The podcast treats the interview as a data source rather than a human story. The interviewee's perspective is missing, minimal, or reduced to a single quote without context. |`
          }
        ]
      }
    ]
  }
];
