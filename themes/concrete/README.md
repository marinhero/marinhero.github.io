# Concrete

A minimal, monochrome Hugo theme inspired by concrete, steel, and brutalist design principles.

## Features

- **Zero Dependencies**: No npm, webpack, or build tools required
- **Monochrome Design**: Clean grayscale color palette
- **Fast & Lightweight**: Minimal CSS, no JavaScript
- **Accessible**: WCAG 2.1 compliant with proper semantic HTML
- **Responsive**: Mobile-first design
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards
- **Privacy Focused**: No tracking, no analytics by default

## Design Philosophy

Concrete embraces simplicity and brutalism:

- System fonts for maximum performance
- High contrast monochrome palette
- Clean typography with generous whitespace
- No decorative elements
- Focus on content and readability

## Installation

Add this theme to your Hugo site:

```bash
git clone https://github.com/marinhero/marinhero.github.io.git
```

Or use it as a Git submodule:

```bash
git submodule add https://github.com/marinhero/marinhero.github.io.git themes/concrete
```

## Configuration

Example `config.toml`:

```toml
baseURL = "https://example.com/"
languageCode = "en-us"
title = "Your Site Title"
theme = "concrete"

[params]
  mainSections = ["posts"]
  author = "Your Name"
  description = "Your site description"

  [params.logo]
    logoText = "Your Name"

  [params.twitter]
    creator = "username"
    site = "https://example.com"

[[menu.main]]
  identifier = "about"
  name = "About"
  url = "/about"
  weight = 1
```

## Color Palette

The theme uses a carefully chosen monochrome palette:

- `#1a1a1a` - Concrete Dark (primary text)
- `#2d2d2d` - Steel Dark (secondary text)
- `#4a4a4a` - Steel (muted text)
- `#6b6b6b` - Concrete (meta text)
- `#9e9e9e` - Concrete Light (borders)
- `#d4d4d4` - Steel Light (subtle borders)
- `#f5f5f5` - Concrete Background
- `#ffffff` - White (page background)

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use and modify as needed.

## Credits

Created by Marin Alcaraz
