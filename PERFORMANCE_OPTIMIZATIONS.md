# Performance Optimizations

## Files Safe to Delete (Unused)

These files are not referenced anywhere in the codebase and can be safely removed:

### Large Unused Images (Total: ~45MB)
| File | Size | Reason |
|------|------|--------|
| `public/Branding_Video_1.compressed.mp4` | 13MB | Unused video file |
| `public/gold_leaf.png` | 9.4MB | Not referenced in code |
| `public/leaf2.png` | 7.0MB | Not referenced in code |
| `public/20160126_210840.jpg` | 4.3MB | Only in unused Image_Rotator.jsx |
| `public/20150428_230641.jpg` | 4.1MB | Only in unused Image_Rotator.jsx |
| `public/20220528_183404.jpg` | 3.9MB | Webp version used instead |
| `public/20210612_175631.jpg` | 3.8MB | Not referenced in code |
| `public/20160604_194711.jpg` | 3.8MB | Not referenced in code |
| `public/20220528_173621.jpg` | 3.5MB | Webp version exists |
| `public/20220510_184836.jpg` | 3.3MB | Not referenced in code |
| `public/20220528_173609.jpg` | 3.2MB | Webp version exists |
| `public/Branding_video_2.mp4` | 2.8MB | Compressed version used instead |
| `public/cocktail_foam.jpg` | 2.2MB | Webp version used instead |
| `public/img-1.png` | 1.4MB | Defined in tailwind but unused |
| `public/img-2.png` | 1.1MB | Defined in tailwind but unused |
| `public/boat.png` | 1.3MB | Not referenced in code |
| `public/leaf.jpg` | 1.2MB | Not referenced in code |
| `public/cocktail_red_fine.jpg` | 1.2MB | Webp version used instead |
| `public/20210525_215905.jpg` | 1.7MB | Not referenced in code |
| `public/20220526_194220.jpg` | 1.6MB | Not referenced in code |

### Unused Components
- `components/Image_Rotator.jsx` - Not imported anywhere
- `components/ImageRotator.tsx` - Not imported anywhere

## Images Needing Compression

These images are used but are too large:

| File | Current Size | Target Size | Used In |
|------|-------------|-------------|---------|
| `public/cocktail_foam.webp` | 1.8MB | ~200KB | GalleryPreview, siteConfig |
| `public/birthday.webp` | 1.1MB | ~150KB | siteConfig |
| `public/cocktail_red_fine.webp` | 508KB | ~100KB | siteConfig |
| `public/cocktail1_spritzer.webp` | 447KB | ~100KB | Carousel |
| `public/20220528_183404.webp` | 2.0MB | ~200KB | Image_Rotator (unused) |
| `public/20220528_173621.webp` | 2.0MB | ~200KB | Not used |
| `public/20220528_173609.webp` | 1.8MB | ~200KB | Not used |

## Optimizations Applied

1. **Hero Video Poster** - Added poster image for instant LCP
2. **Google Analytics Deferred** - Loads 3s after page load
3. **Lazy-loaded Components** - ServicesSection, AboutSection, HowItWorksSection, FreqQ now load on demand
4. **Preload Critical Image** - Hero poster preloaded in layout
5. **Removed YouTube DNS Prefetch** - Not needed for homepage

## Recommended Image Compression Commands

```bash
# Install sharp-cli for image optimization
npm install -g sharp-cli

# Compress large webp images (run from public folder)
sharp -i cocktail_foam.webp -o cocktail_foam.webp -q 80 --resize 1920
sharp -i birthday.webp -o birthday.webp -q 80 --resize 1920
sharp -i cocktail_red_fine.webp -o cocktail_red_fine.webp -q 80 --resize 1920
sharp -i cocktail1_spritzer.webp -o cocktail1_spritzer.webp -q 80 --resize 1920
```

## Delete Unused Files Command

```bash
# Run from project root to remove unused large files
rm public/Branding_Video_1.compressed.mp4
rm public/gold_leaf.png
rm public/leaf2.png
rm public/20160126_210840.jpg
rm public/20150428_230641.jpg
rm public/20220528_183404.jpg
rm public/20210612_175631.jpg
rm public/20160604_194711.jpg
rm public/20220528_173621.jpg
rm public/20220510_184836.jpg
rm public/20220528_173609.jpg
rm public/Branding_video_2.mp4
rm public/cocktail_foam.jpg
rm public/img-1.png
rm public/img-2.png
rm public/boat.png
rm public/leaf.jpg
rm public/cocktail_red_fine.jpg
rm public/20210525_215905.jpg
rm public/20220526_194220.jpg

# Remove unused components
rm components/Image_Rotator.jsx
rm components/ImageRotator.tsx
```
