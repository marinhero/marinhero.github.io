# Adventures Section - Complete Setup

## What's Been Created

### 1. Layouts
- **List layout** (`themes/clarity/layouts/adventures/list.html`)
  - Shows all adventures in a card grid
  - Displays thumbnail, date, distance, location, and summary
  
- **Single layout** (`themes/clarity/layouts/adventures/single.html`)
  - Hero image at top
  - Stats bar (date, distance, elevation, location)
  - Strava link (if provided)
  - Full content with photo galleries
  - Previous/Next adventure navigation

### 2. Gallery Shortcode
- **Location**: `themes/clarity/layouts/shortcodes/gallery.html`
- **Usage in markdown**:
  ```
  {{< gallery images="/images/adventures/folder/photo1.jpg,/images/adventures/folder/photo2.jpg" >}}
  ```

### 3. CSS Styling
- Responsive grid layout
- Hover effects on images
- Mobile-optimized
- Matches your Clarity theme aesthetic

### 4. Navigation
- "Adventures" added to main menu (first item)

### 5. Example Adventure
- Created: `content/adventures/marin-headlands-example.md`
- Set as draft - remove `draft: true` to publish
- Shows all features: stats, story, gallery

## Directory Structure

```
content/adventures/
  _index.md                      # Adventures landing page
  marin-headlands-example.md     # Example adventure (draft)
  README.md                      # Instructions for adding adventures

static/images/adventures/
  marin-headlands/               # Example folder (needs real images)
    hero.jpg
    photo1.jpg
    photo2.jpg
    photo3.jpg
```

## How to Add Your First Real Adventure

1. **Add your photos**:
   ```bash
   mkdir static/images/adventures/your-adventure-name
   # Copy your photos there
   ```

2. **Create the adventure**:
   ```bash
   hugo new adventures/your-adventure-name.md
   ```

3. **Edit the frontmatter**:
   ```yaml
   ---
   title: "Your Amazing Ride"
   date: 2024-01-15
   distance: "85 miles"
   elevation: "5,000 ft"
   location: "Big Sur, CA"
   strava: "https://www.strava.com/activities/12345"
   featured_image: "/images/adventures/your-adventure-name/hero.jpg"
   draft: false
   ---
   ```

4. **Write your story** and add galleries

5. **Preview**: `hugo serve`

## Features

✅ Responsive photo grid (3 columns on desktop, 1 on mobile)
✅ Hero images with full-width display
✅ Stats display (distance, elevation, location)
✅ Strava integration
✅ Previous/Next navigation between adventures
✅ Hover effects and smooth transitions
✅ Dark mode support
✅ SEO-friendly URLs (/adventures/adventure-name)
✅ Fast loading with lazy-loaded images

## Example Adventure Structure

```markdown
---
title: "Big Sur Coastal Epic"
date: 2024-10-15
distance: "120 miles"
elevation: "8,500 ft"
location: "Big Sur, California"
strava: "https://www.strava.com/activities/example"
featured_image: "/images/adventures/big-sur/hero.jpg"
---

The fog rolled in as I descended into Big Sur...

## The Route
Starting at dawn from Carmel...

## The Challenge
The climbs were relentless...

{{< gallery images="/images/adventures/big-sur/view1.jpg,/images/adventures/big-sur/view2.jpg,/images/adventures/big-sur/sunset.jpg" >}}

## Stats
- Moving time: 7h 45m
- Average speed: 15.5 mph
- Max elevation: 2,800 ft
```

## Next Steps

1. Remove the example adventure or set it as a real one
2. Add your actual bike ride photos
3. Create your first adventure post
4. Test with `hugo serve`
5. Deploy!

---

Your Adventures section is ready to showcase your bike rides, hikes, and expeditions! 🚴
