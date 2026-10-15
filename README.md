# Website to Prompt (`website-to-prompt`)

> Convert any live website URL into a domain-agnostic Master Design Prompt (`design.md`) to recreate its aesthetic, typography, component patterns, and animations in ANY project.

---

## 🎯 What is it?

When building modern web apps, copying a site's visual language often leads to accidental leakage of its proprietary copy, brand names, or specific domain logic.

**`website-to-prompt`** is an AI agent skill that analyzes any target website and extracts only its **pure design DNA**:
- **Design Philosophy**: Core tenets, architectural vibe, and visual signatures.
- **Design Tokens (The DNA)**: Exact hex palettes, typography pairings (e.g. Grotesque + Literary Serif), border radiuses, and shadows.
- **CSS Textures & Patterns**: Subtle grid lines, radial dot matrices, diagonal lines, and ambient lighting glow overlays with exact opacities.
- **Component Contracts**: Buttons, cards, inputs, tabs, and pointer-tailed popover dropdowns.
- **The "Bold" Factor (Non-Genericness)**: High-opinion creative decisions that force AI coders to produce distinctive, non-boilerplate UI.
- **Animation & Micro-interactions**: Exact timing curves, hover states, and physics.
- **Responsive Strategies**: Precise layout breakpoints and adaptations.

The resulting `design.md` is formatted as an executable prompt wrapped in `<role>` and `<design-system>` tags that any AI platform can immediately understand and apply.

---

## 📁 Repository Structure

```text
website-to-prompt/
├── .agents/
│   └── skills/
│       └── website-to-prompt/
│           ├── SKILL.md                                  # Agent skill definition & execution instructions
│           ├── resources/
│           │   └── design_system_template.md             # Canonical master prompt structure
│           ├── references/
│           │   └── css-extraction-guide.md               # CSS token extraction reference
│           └── scripts/
│               └── extract-design-tokens.js              # Token extraction utility script
├── design.md                                             # Example master prompt (Modernist Editorial & Pastel Luminescence)
├── goal_design.md                                        # Reference format benchmark (Swiss International)
└── README.md
```

---

## 🚀 How to Use Across AI Platforms

### 1. In Antigravity IDE / Agentic Tools
To use this skill globally across any project in Antigravity:
```bash
# Copy the skill into your global Antigravity config
mkdir -p ~/.gemini/config/skills/
cp -r .agents/skills/website-to-prompt ~/.gemini/config/skills/
```
Or keep it repository-scoped by placing the `.agents/skills/website-to-prompt` folder in the root of any workspace.

Then simply prompt your agent:
> *"Analyze https://example.com and generate a design.md for it."*

### 2. In Claude Code / Cursor / Windsurf
* **Claude Code**: Copy the skill to `~/.claude/skills/website-to-prompt` or `.claude/skills/`.
* **Cursor / Windsurf**: Add `.agents/skills/website-to-prompt/SKILL.md` to your custom system prompts or project rules (`.cursorrules` / `.cursor/rules/`).

### 3. In Web AI Tools (ChatGPT, Claude Projects, v0, Bolt.new, Lovable)
1. Generate or open your extracted `design.md`.
2. Copy the entire file (including `<role>` and `<design-system>`).
3. Paste it directly into:
   - **Claude Project Instructions** or **Custom GPT Instructions** as the master design system prompt.
   - **v0.dev / Bolt.new / Lovable**: Prepend it to your prompt:
     > *"Build a modern SaaS landing page using this design specification: [paste design.md here]"*

---

## 📄 License
MIT
