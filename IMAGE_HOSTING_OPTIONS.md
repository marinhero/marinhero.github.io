# Image Hosting Options for Adventures

## Recommended: GitHub Itself (FREE, Best Option)

**Why this is the best choice:**
- ✅ **100% Free** - No cost, ever
- ✅ **Full resolution** - No compression or resizing
- ✅ **Version controlled** - Images tracked with Git
- ✅ **Same repo** - Everything in one place
- ✅ **GitHub CDN** - Fast, reliable delivery via GitHub Pages CDN
- ✅ **Simple workflow** - Just commit and push

**Setup:**
```bash
# Store images in your repo
static/images/adventures/ride-name/photo.jpg

# Hugo will serve them from:
https://marinhero.com/images/adventures/ride-name/photo.jpg
```

**Limits:**
- Individual file size: 100MB max (way more than needed)
- Repository size: 1GB soft limit (can request increase)
- With image optimization, you can store 100s-1000s of photos

**Workflow:**
1. Optimize images before committing (see below)
2. Add to `static/images/adventures/`
3. Commit and push
4. GitHub Pages serves them automatically

---

## Alternative Options (If you exceed GitHub limits)

### 1. GitHub LFS (Large File Storage)
**Cost:** Free for 1GB storage + 1GB bandwidth/month, then $5/month for 50GB

**Pros:**
- Same repo workflow
- Handles large files better
- Integrates with Git

**Cons:**
- Costs money after free tier
- More complex setup

---

### 2. Cloudflare R2
**Cost:** Free for 10GB storage + unlimited egress (bandwidth)

**Pros:**
- Generous free tier
- No egress fees (unlike S3)
- Fast CDN
- Full resolution support

**Cons:**
- Separate service to manage
- Need to upload manually or script it

---

### 3. Backblaze B2 + Cloudflare CDN
**Cost:** Free for 10GB storage, $0.005/GB after

**Pros:**
- Extremely cheap
- Unlimited bandwidth via Cloudflare partnership
- Reliable

**Cons:**
- Two services to configure
- Manual upload process

---

### 4. Imgur (Not Recommended)
**Cost:** Free

**Cons:**
- ❌ Compresses images
- ❌ Can delete after inactivity
- ❌ Not reliable for long-term hosting

---

## Image Optimization (CRITICAL)

Before uploading ANY images, optimize them:

### Tools:
1. **ImageOptim (Mac)** - Free, drag-and-drop
2. **squoosh.app** - Free, web-based
3. **sharp-cli** - Command line

### Guidelines:
- **Hero images:** 1200-1600px wide, 80-85% quality JPEG
- **Gallery images:** 800-1200px wide, 80-85% quality JPEG
- **Original 4MB photo → Optimized 300-500KB**

### Example with ImageMagick:
```bash
# Install
brew install imagemagick

# Resize and optimize
mogrify -resize 1200x -quality 85 -format jpg *.jpg
```

### Recommended Workflow:
```bash
# 1. Put originals in a folder
photos/originals/

# 2. Create optimized versions
mkdir photos/optimized
mogrify -path photos/optimized -resize 1200x -quality 85 photos/originals/*.jpg

# 3. Move to static
cp photos/optimized/* static/images/adventures/ride-name/
```

---

## My Recommendation

**Start with GitHub (option 1)**

Here's why:
- You likely won't hit the 1GB limit with optimized images
- 500KB per optimized photo × 2000 photos = 1GB
- That's A LOT of adventures
- If you somehow exceed it, migrate to Cloudflare R2 later

**Storage calculation:**
- 20 adventures/year
- 10 photos per adventure
- 500KB per optimized photo
= 100MB/year
= 10 years before hitting 1GB

**Benefits:**
- Zero external dependencies
- One command to deploy everything
- Free forever
- Fast enough (GitHub CDN is solid)

---

## Quick Start (Using GitHub)

1. **Optimize your photos:**
   ```bash
   # Use ImageOptim or squoosh.app
   # Target: 800-1200px wide, 80-85% JPEG quality
   ```

2. **Add to your repo:**
   ```bash
   static/images/adventures/first-ride/
     hero.jpg        (500KB)
     photo1.jpg      (400KB)
     photo2.jpg      (450KB)
   ```

3. **Commit and push:**
   ```bash
   git add static/images/
   git commit -m "Add first adventure photos"
   git push
   ```

4. **Reference in markdown:**
   ```yaml
   featured_image: "/images/adventures/first-ride/hero.jpg"
   ```

That's it! No external services, no costs, just Git.

---

## If You Want Full Resolution (Uncompressed)

If you really want original full-res (not recommended for web):
- Use Cloudflare R2 (free 10GB)
- Store optimized versions in GitHub for the site
- Keep originals in R2 as backup/archive
- Link to R2 for "full resolution" downloads

But honestly, 85% JPEG quality at 1200px wide looks stunning on screens and is indistinguishable from the original for web viewing.
