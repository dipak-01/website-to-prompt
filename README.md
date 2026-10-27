# website-to-prompt

> **Turn any live website into a reusable AI design prompt.**  
> Analyze a URL → extract its pure visual DNA → get a `design.md` you can drop into any AI tool to recreate that aesthetic in a completely different project.

---

## What does it do?

Copying a site's look by hand leaks its brand names and domain logic. This skill strips all of that out and gives you only the **design DNA**:

| Extracted | Example |
|---|---|
| Color palette | Exact hex/HSL values for backgrounds, text, accents, borders |
| Typography | Font families, weights, sizes, tracking, line heights |
| Spacing & layout | Section paddings, container widths, grid/flexbox rules |
| Component contracts | Buttons, cards, inputs, nav, modals — all states |
| Textures & patterns | CSS grid lines, dot matrices, radial glows with exact opacities |
| Animations | Timing curves, hover physics, micro-interactions |
| Responsive strategy | Breakpoints and layout changes at mobile / tablet / desktop |

The output `design.md` is wrapped in `<role>` and `<design-system>` tags — ready to paste directly into any AI tool as a system prompt.

> **Zero-branding guarantee:** `design.md` never contains the source site's name, URL, or proprietary product names. It is purely about visual design.

---

## Repository structure

```
website-to-prompt/
└── .agents/
    └── skills/
        └── website-to-prompt/
            ├── SKILL.md                          # Agent skill definition & execution steps
            ├── resources/
            │   └── design_system_template.md     # Master template the agent fills in
            ├── references/
            │   └── css-extraction-guide.md       # CSS token extraction reference
            └── scripts/
                └── extract-design-tokens.js      # Browser helper script
```

---

## Quick start — pick your tool

> **Important:** The `cp` commands below require you to first clone this repo so the source path exists on your machine.

---

### Antigravity IDE

**Option A — global install** (skill loads in every project you open):

```bash
# 1. Clone this repo
git clone https://github.com/your-username/website-to-prompt.git ~/website-to-prompt

# 2. Copy the skill to your global Antigravity config
mkdir -p ~/.gemini/config/skills/
cp -r ~/website-to-prompt/.agents/skills/website-to-prompt ~/.gemini/config/skills/
```

**Option B — project-scoped** (skill only active inside the current workspace):

```bash
# Run from inside your project root
git clone https://github.com/your-username/website-to-prompt.git /tmp/wtp
mkdir -p .agents/skills/
cp -r /tmp/wtp/.agents/skills/website-to-prompt .agents/skills/
```

Then prompt the agent:
> *"Analyze https://example.com and generate a design.md"*

---

### Claude Code

```bash
# 1. Clone this repo
git clone https://github.com/your-username/website-to-prompt.git ~/website-to-prompt

# Option A — global (available in every Claude Code session)
mkdir -p ~/.claude/skills/
cp -r ~/website-to-prompt/.agents/skills/website-to-prompt ~/.claude/skills/

# Option B — project-scoped (run from your project root)
mkdir -p .claude/skills/
cp -r ~/website-to-prompt/.agents/skills/website-to-prompt .claude/skills/
```

Then prompt:
> *"Use the website-to-prompt skill to analyze https://example.com"*

---

### Cursor

```bash
# 1. Clone this repo
git clone https://github.com/your-username/website-to-prompt.git ~/website-to-prompt

# 2. Add as a project rule (run from your project root)
mkdir -p .cursor/rules/
cp ~/website-to-prompt/.agents/skills/website-to-prompt/SKILL.md \
   .cursor/rules/website-to-prompt.mdc
```

Or paste the contents of `SKILL.md` directly into **Cursor Settings → Rules for AI**.

---

### Windsurf

```bash
# 1. Clone this repo
git clone https://github.com/your-username/website-to-prompt.git ~/website-to-prompt

# 2. Add to your project rules (run from your project root)
cp ~/website-to-prompt/.agents/skills/website-to-prompt/SKILL.md .windsurfrules
```

Or paste the `SKILL.md` content into **Windsurf Settings → Custom Prompt**.

---

### Web AI tools (ChatGPT, Claude Projects, v0, Bolt.new, Lovable)

These tools don't run agent skills directly. The workflow is:

1. **Generate `design.md` first** using Antigravity, Claude Code, or Cursor (as above).
2. **Copy the full `design.md` content** (including the `<role>` and `<design-system>` tags).
3. **Paste it as a system/project prompt:**
   - **Claude Projects** → *Project Instructions*
   - **Custom GPT** → *System Prompt*
   - **v0 / Bolt.new / Lovable** → prepend to your build prompt:
     > *"Build a SaaS pricing page using this design spec: [paste design.md here]"*

---

## How it works

```
You: "Analyze https://stripe.com and generate design.md"
       │
       ▼
1. Agent fetches the homepage HTML
2. Agent opens the site in a browser across 5 viewports (mobile → desktop)
3. Agent extracts CSS variables, fonts, colors, spacing, shadows, animations
4. Agent navigates key pages (pricing, features, docs)
5. Agent fills in the master design_system_template.md
6. Writes design.md — zero brand names, pure design tokens
```

---

## Example prompt

```
Analyze https://linear.app and generate a design.md capturing its
design system. Save the file to ./linear-design.md
```

---

## License

MIT
