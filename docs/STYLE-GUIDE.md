# Personal Engineering Blog — Style Guide

## Design North Star

The New York Times, The Atlantic, and Stripe's blog share a quality: the design disappears. You notice the writing, not the container. This blog should feel like opening a well-typeset book or a Sunday long-read—not launching an IDE. The aesthetic is *editorial*, not *technical*. Code appears when relevant, but it's a guest in a literary space.

---

## Visual Language

### Typography is the Design

This is the single most important decision. Choose typefaces that signal "publication" not "documentation."

**Body text:** A refined serif like `Charter`, `Lora`, `Source Serif Pro`, or `Georgia`. These have the warmth and readability of print journalism. Set at 19-21px with line-height of 1.7 or higher. Text should feel spacious, never cramped.

**Headings:** Either the same serif in heavier weights, or a clean sans-serif (`Inter`, `Neue Haas Grotesk`, `system-ui`) for contrast. Headlines should be large and confident—36-48px on desktop. Let them breathe with ample margin above and below.

**Code (when it appears):** Treat it as an inset element, like a photograph in a magazine feature. Use a clean monospace (`IBM Plex Mono`, `SF Mono`) but keep syntax highlighting muted—grayscale or very subtle. The code block should feel like a quiet aside, not the main attraction.

### Color: Restrained and Intentional

Follow restraint:

- Background: true white (`#fff`) or a barely-warm off-white (`#fafafa`)
- Body text: soft black (`#111` or `#1a1a1a`)—never pure `#000`
- Secondary text (dates, bylines, metadata): muted gray (`#666` or `#717171`)
- Links: a single accent—classic blue, or a muted teal/burgundy if you want personality
- No borders, no boxes, no colored backgrounds for sections

Dark mode should feel like reading a Kindle at night: warm off-black background (`#121212` or `#1a1a1a`), cream-ish text (`#e8e6e3`), reduced contrast overall.

### Whitespace is Your Primary Design Element

The page should feel 60% empty. Content sits in a narrow column (max 680-720px) centered on screen with vast margins. This isn't wasted space—it's what makes the reading experience feel premium.

Paragraph spacing should be generous. No tight stacking. Let each paragraph exist as its own thought.

---

## Landing Page Structure

### Exactly Three Elements

```
┌─────────────────────────────────────┐
│  Logo/Name          Menu Links      │  ← Header (minimal, one line)
├─────────────────────────────────────┤
│                                     │
│  Post Title        · Jan 15, 2025   │
│                                     │
│  Post Title        · Jan 8, 2025    │
│                                     │
│  Post Title        · Dec 29, 2024   │
│                                     │
│  ...                                │
│                                     │
├─────────────────────────────────────┤
│  © 2025 · RSS · GitHub · Email      │  ← Footer (single line, muted)
└─────────────────────────────────────┘
```

### Header

Your name or logo (text, not an image) on the left. Navigation links on the right: *Writing*, *Projects*, *About*. Nothing else. No search bar, no social icons, no call-to-action. The header should be visually quiet—smaller text, lighter weight.

### Post List

Each entry contains:
- Title (linked, bold or medium weight)
- One-line description or excerpt (optional, muted color)
- Date (small, gray, understated)

No thumbnails. No tags displayed. No read-time estimates on the list view. No category labels. The list is just titles and dates—like a table of contents in a book.

Spacing between entries should be enough that each feels distinct (~32-48px). Consider subtle separators (a thin `1px` light gray line) or just whitespace.

No pagination controls unless you have 50+ posts. Infinite scroll is fine, but a simple "Older posts →" link is more editorial.

### Footer

One line. Copyright, RSS link, maybe GitHub and email. Gray text, small size. The footer should barely register.

---

## Post Page Layout

### The Reading Experience

Structure mirrors a magazine feature:

```
Title (large, commanding)

Byline / Date (small, muted, optional)

Opening paragraph...

Body content flows naturally. Paragraphs are
substantial—3-5 sentences each. Short paragraphs
for emphasis, like this one.

Subheadings break up longer pieces but aren't
mandatory. When used, they're understated—not
shouty, not numbered.

[Image, if any, spans the column width with
a quiet caption beneath in italic or small text]

Conclusion.
```

### Handling Code (Critical)

Code blocks should feel like inset figures in a magazine—not like you've opened a terminal. Guidelines:

- Background: very light gray (`#f5f5f5`) or slightly off-white—never dark
- No line numbers unless essential for reference
- Minimal syntax highlighting: keywords in one muted color, strings in another, comments in gray—avoid rainbow themes
- Rounded corners (subtle, 4-6px) give a softer, less technical feel
- Generous padding inside the block
- A small, muted label for language (`python`, `typescript`) in the corner if needed
- Copy button only on hover, styled subtly

Inline code should use a slightly different background and the monospace font, but shouldn't pop aggressively. Think of it as *emphasis*, not a badge.

### Images and Figures

Full column width or slightly wider (breaking out of the text column by 50-100px on each side for emphasis). Subtle shadow or no border. Captions in small italic text, muted color.

For project screenshots, resist the urge to show every screen. One or two key images that communicate the essence.

---

## Project Pages

Projects need slightly different handling than essays, but the visual treatment stays consistent.

### Structure

1. Title (what it's called)
2. One-sentence description (what it does)
3. Links: Live demo, GitHub repo—styled as subtle text links, not buttons
4. The story: why you built it, what you learned, key decisions
5. Technical details woven into the narrative, not listed separately
6. Closing image or screenshot if useful

Avoid "tech stack" lists at the top. If the technologies matter to the story, mention them in context. "I chose SQLite because..." is interesting. A badge wall of "React / Node / PostgreSQL / Docker" is not.

---

## What to Avoid

### The Code Editor Aesthetic
- Dark backgrounds as default
- Bright syntax highlighting
- Monospace fonts for body text
- Terminal-green accent colors
- "Matrix" vibes of any kind

### Documentation Site Patterns
- Sidebar navigation
- Breadcrumbs
- Version selectors
- Search prominently featured
- Tables of contents for every post

### Modern Web Clutter
- Hero images on the homepage
- Cards with thumbnails
- Tag clouds
- "Featured" or "Popular" sections
- Newsletter popups
- Social share buttons
- Reading progress bars
- Sticky headers that eat screen space

### Visual Noise
- Borders around content areas
- Background colors for sections
- Icons next to menu items
- Emoji in titles
- Gradients

---

## Technical Notes

### Performance

The minimal design should yield minimal weight. Target under 100KB total page size. A static site generator (Hugo) is ideal. No JavaScript required for reading—progressive enhancement only for dark mode toggle or copy buttons.

### Responsive Behavior

On mobile, the content column goes nearly edge-to-edge with comfortable padding (20-24px). Typography scales down slightly but remains generous. The header collapses to just your name and a simple menu icon if needed (though with only 3-4 links, you might keep them visible).

### Accessibility

- Proper heading hierarchy (one H1 per page)
- Link text that makes sense out of context
- Sufficient contrast (muted grays should still pass WCAG AA)
- Alt text for all images
- RSS feed for readers who prefer it

---

## Reference Implementations

Study these for the right *feeling*:
- [paulgraham.com](http://paulgraham.com) — extreme minimalism, pure content
- [macwright.com](https://macwright.com) — clean, editorial, code handled elegantly
- [danluu.com](https://danluu.com) — stripped to essentials
- [The NYT's feature articles](https://www.nytimes.com) — typography and whitespace mastery
- [Stripe's blog](https://stripe.com/blog) — polished editorial for technical content
