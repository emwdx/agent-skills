# Changemakers Skills Library

A reusable context library for AI-assisted planning and materials development in the Changemakers course at Nido de Aguilas.

Modeled on the agent-skills framework (github.com/addyosmani/agent-skills). Each skill is a Markdown file that encodes process, context, or conventions — not just knowledge. Load the relevant skills at the start of any session to skip the re-explaining and get straight to the work.

---

## Skills

| Skill | Load when... |
|---|---|
| `course-context` | Generating any Changemakers material. Load this first. |
| `proficiency-scales` | Designing assessments, rubrics, or anything referencing student levels. |
| `rubric-style` | Writing rubrics or assessment documents specifically. |
| `materials-style` | Writing any course material that is not a slide deck. |

The slides style guide (daily slides conventions) lives separately and covers slide-specific formatting.

---

## How to use

At the start of a session, tell the AI which skills to load and what you are working on. Example:

> Load course-context, proficiency-scales, and rubric-style. I need an L3 individual assessment for the empathy phase of the changemaker project, Communication competency, assessed through a written stakeholder summary.

The skills do the background work. You describe the task.

---

## Skill load order

When loading multiple skills, load in this order:

1. `course-context` — always first
2. `proficiency-scales` — when assessment is involved
3. `rubric-style` — when writing rubrics specifically
4. `materials-style` — for any non-slide document

---

## Adding new skills

When a pattern comes up repeatedly in planning sessions — a recurring activity type, a facilitation structure, a decision framework your team keeps reinventing — write it as a skill. The format is always the same:

```
---
name: skill-name
description: One or two sentences. When to load this skill.
---

[Body: process, context, conventions, anti-patterns, checklist]
```

Good candidates for future skills: empathy-phase-design, scope-narrowing-facilitation, project-brief-template, unit-planning-session.

---

## What this is not

This is not a curriculum document or an official school resource. It is a working tool for planning and generation. If the course structure changes, update the skills to match.