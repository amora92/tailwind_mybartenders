# MyBartenders Brand Guidelines

> Official brand standards for consistent visual identity across all platforms.

---

## Table of Contents

1. [Brand Overview](#brand-overview)
2. [Logo Usage](#logo-usage)
3. [Color Palette](#color-palette)
4. [Typography](#typography)
5. [Photography Style](#photography-style)
6. [Voice & Tone](#voice--tone)
7. [Social Media Templates](#social-media-templates)
8. [Article Templates](#article-templates)
9. [Email Templates](#email-templates)
10. [Print Materials](#print-materials)
11. [Do's and Don'ts](#dos-and-donts)

---

## Brand Overview

### Brand Essence
MyBartenders is the UK's premier mobile bar service, transforming events into unforgettable experiences through professional mixology and exceptional entertainment.

### Brand Personality
- **Professional** - Expert service, reliable delivery
- **Creative** - Innovative cocktails, unique experiences
- **Luxurious** - Premium quality, attention to detail
- **Fun** - Entertainment-focused, memorable moments
- **Approachable** - Friendly, welcoming service

### Brand Promise
> "Every event deserves an extraordinary bar experience."

### Core Values
1. **Excellence** - Premium service in every detail
2. **Creativity** - Unique cocktails and experiences
3. **Reliability** - Always professional, always on time
4. **Entertainment** - Creating memorable moments
5. **Flexibility** - Adapting to client needs

---

## Logo Usage

### Primary Logo
- **File**: `mybartenders.co.uk_logo_svg.svg`
- **Usage**: Website header, official documents, primary branding

### Alternate Versions
- **PNG Version**: `mybartenders.co.uk_logo_png.png` - For situations requiring raster format
- **Transparent**: `transparent_logo.svg` - For overlay on images/backgrounds

### Clear Space
Always maintain clear space around the logo equal to the height of the "M" in MyBartenders.

```
     ┌──────────────────────────────────┐
     │                                  │
     │     [M height]                   │
     │         ┌─────────────────┐      │
     │  [M]────│  MYBARTENDERS   │──[M] │
     │         └─────────────────┘      │
     │     [M height]                   │
     │                                  │
     └──────────────────────────────────┘
```

### Minimum Sizes
- **Digital**: 120px wide minimum
- **Print**: 25mm wide minimum

### Logo Backgrounds
| Background | Logo Version |
|------------|--------------|
| Light/White | Primary (dark logo) |
| Dark/Black | Transparent (light logo) |
| Image | Transparent with contrast |

### Favicon & App Icons
| Size | File | Usage |
|------|------|-------|
| 16x16 | `favicon-16x16.png` | Browser tab |
| 32x32 | `favicon-32x32.png` | Browser tab (high-DPI) |
| 180x180 | `apple-touch-icon.png` | iOS home screen |
| 192x192 | `icon-192.png` | Android/PWA |
| 512x512 | `icon-512.png` | Android/PWA (large) |

---

## Color Palette

### Primary Colors (Gradient)

```css
/* Pink - Primary */
--pink-500: #EC4899;
--pink-600: #DB2777;

/* Rose - Secondary */
--rose-500: #F43F5E;
--rose-600: #E11D48;

/* Amber - Accent */
--amber-500: #F59E0B;
--amber-600: #D97706;
```

### Primary Gradient
```css
background: linear-gradient(to right, #EC4899, #F43F5E, #F59E0B);
```

**Usage**: Buttons, CTAs, headings, highlights

### Dark Backgrounds

```css
/* Backgrounds */
--gray-950: #030712;  /* Darkest - Hero sections */
--gray-900: #111827;  /* Dark - Cards, sections */
--gray-800: #1F2937;  /* Medium - Borders, separators */
--black: #000000;     /* Pure black - Special use */
```

### Light Colors

```css
--white: #FFFFFF;
--gray-50: #F9FAFB;   /* Light backgrounds */
--gray-100: #F3F4F6;  /* Subtle backgrounds */
--gray-200: #E5E7EB;  /* Borders */
```

### Text Colors

```css
--text-primary: #FFFFFF;      /* On dark backgrounds */
--text-secondary: #9CA3AF;    /* Muted text (gray-400) */
--text-accent: #EC4899;       /* Highlighted text (pink) */
--text-dark: #111827;         /* On light backgrounds */
```

### Color Usage Guidelines

| Element | Color |
|---------|-------|
| Headlines | White or Gradient text |
| Body text | White (dark bg) or Gray-900 (light bg) |
| Secondary text | Gray-400 |
| Links | Pink-500 |
| Buttons (primary) | Gradient |
| Buttons (secondary) | Glass/transparent |
| Backgrounds (main) | Gray-950 |
| Backgrounds (sections) | Gray-900 |
| Borders | Gray-800 |
| Success | Green-500 |
| Error | Red-500 |

---

## Typography

### Font Family
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
             'Helvetica Neue', Arial, sans-serif;
```

### Type Scale

| Name | Desktop | Mobile | Weight | Usage |
|------|---------|--------|--------|-------|
| Hero | 72px (4.5rem) | 48px (3rem) | Bold | Page heroes |
| H1 | 60px (3.75rem) | 36px (2.25rem) | Bold | Page titles |
| H2 | 48px (3rem) | 30px (1.875rem) | Semibold | Section headers |
| H3 | 36px (2.25rem) | 24px (1.5rem) | Semibold | Subsections |
| H4 | 24px (1.5rem) | 20px (1.25rem) | Semibold | Card titles |
| Body Large | 20px (1.25rem) | 18px | Regular | Intro text |
| Body | 16px (1rem) | 16px | Regular | Main content |
| Small | 14px (0.875rem) | 14px | Regular | Captions |

### Line Heights
```css
--leading-tight: 1.25;    /* Headlines */
--leading-snug: 1.375;    /* Subheads */
--leading-normal: 1.5;    /* Body text */
--leading-relaxed: 1.625; /* Long-form content */
```

### Text Styling

**Gradient Text:**
```css
.gradient-text {
  background: linear-gradient(to right, #EC4899, #F59E0B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## Photography Style

### General Guidelines
- **High quality**: Minimum 1200px wide for web
- **Well-lit**: Warm, inviting lighting preferred
- **Professional**: Clean, uncluttered compositions
- **Authentic**: Real events, real moments

### Image Categories

**1. Cocktail Photography**
- Close-up shots showing detail and garnish
- Dramatic lighting, often with dark backgrounds
- Props that complement (bar tools, bottles)
- Focus on colour and texture

**2. Event Photography**
- Candid moments of guests enjoying drinks
- Wide shots showing bar setup and atmosphere
- Bartenders in action
- Group shots (with permission)

**3. Setup & Equipment**
- Clean, professional bar setups
- Before event shots
- Equipment close-ups
- Venue integration shots

### Image Specifications

| Use Case | Format | Size | Quality |
|----------|--------|------|---------|
| Hero/Banner | WebP/JPEG | 1920x1080 | 80-90% |
| Gallery | WebP | 1200x800 | 80% |
| Thumbnails | WebP | 400x300 | 70% |
| Social | JPEG/PNG | Per platform | 85% |
| Featured | WebP/JPEG | 1200x630 | 85% |

### Photo Treatment
- Slight warm tone enhancement
- Increased contrast for drama
- Sharp, not over-processed
- Consistent style across all images

---

## Voice & Tone

### Brand Voice Attributes

1. **Professional but Warm**
   - ✅ "We'd love to help make your event special"
   - ❌ "Yeah, we can do that I guess"

2. **Confident but Humble**
   - ✅ "With 15+ years of experience, we know what works"
   - ❌ "We're the best and everyone knows it"

3. **Luxurious but Accessible**
   - ✅ "Premium cocktails crafted for your celebration"
   - ❌ "Cheap drinks for cheap events"

4. **Fun but Reliable**
   - ✅ "Let's create something memorable together"
   - ❌ "Party time! YOLO!"

### Writing Guidelines

**Headlines:**
- Clear and compelling
- Benefit-focused
- 5-10 words ideal
- Action-oriented when appropriate

**Body Copy:**
- Short paragraphs (2-3 sentences)
- Simple, clear language
- Avoid jargon unless necessary
- Active voice preferred

**Calls to Action:**
- Clear and specific
- Action verbs
- Create urgency when appropriate
- Examples: "Get a Quote", "Book Your Consultation", "View Our Packages"

### Tone by Context

| Context | Tone | Example |
|---------|------|---------|
| Website | Professional, warm | "Discover our bespoke bar packages" |
| Social Media | Friendly, engaging | "Who else thinks Fridays call for cocktails? 🍸" |
| Email | Personal, helpful | "Thanks for getting in touch! Here's what you need to know..." |
| Quotes | Professional, detailed | "Please find attached our detailed proposal..." |

---

## Social Media Templates

### Instagram Post Sizes
- **Feed Post**: 1080x1080px (square) or 1080x1350px (portrait)
- **Story**: 1080x1920px
- **Reel Cover**: 1080x1920px
- **Profile Picture**: 320x320px

### Instagram Post Template

```
┌────────────────────────────────────┐
│                                    │
│            [PHOTO]                 │
│                                    │
│    ─────────────────────────       │
│    Logo watermark bottom right     │
│                                    │
└────────────────────────────────────┘

Caption Structure:
─────────────────
[Hook - first line grabs attention]

[2-3 sentences of content/story]

[Call to action]

.
.
.
[Hashtags - 20-30, mix of sizes]
```

### Instagram Story Template

```
┌────────────────────────────────────┐
│    [Safe zone - avoid text here]   │
│                                    │
│         [MAIN CONTENT]             │
│                                    │
│      ┌──────────────────┐          │
│      │   Text overlay   │          │
│      │   (if needed)    │          │
│      └──────────────────┘          │
│                                    │
│    [Logo - bottom corner]          │
│                                    │
│    [Swipe up / Link sticker]       │
└────────────────────────────────────┘
```

### Facebook Post Template

```
Caption (no hashtags in body):
───────────────────────────────
[Engaging opening line]

[Main content - 2-4 sentences]

[Call to action with link]

#MyBartenders #MobileBarHire [2-3 hashtags max]
```

### LinkedIn Post Template

```
[Professional headline]

[3-4 paragraphs of value-driven content]

[Call to action]

[2-3 relevant hashtags]
```

### Social Media Caption Templates

**Event Showcase:**
```
Another incredible [wedding/event] in the books! ✨

We had the pleasure of serving [X guests] at [Venue]
with our signature [cocktail name] and premium bar setup.

Looking to elevate your next event? Link in bio for a free quote.

.
.
[hashtags]
```

**Cocktail Feature:**
```
Cocktail of the Week: [Cocktail Name] 🍹

[1-2 sentence description of the cocktail]

[Optional: Simple recipe or fun fact]

Save this for your next [event type]!

.
.
[hashtags]
```

**Behind the Scenes:**
```
Behind the scenes at today's setup... 📸

[Brief description of what's happening]

This is what [X hours/preparation] looks like
before the first guest arrives.

[Call to action]

.
.
[hashtags]
```

---

## Article Templates

### Blog Article Structure

```markdown
# [Headline - 60 characters max]

[Featured Image - 1200x630px]

[Meta Description - 150-160 characters]

## Introduction
[2-3 paragraphs setting up the topic]
[Include a hook in the first sentence]
[End with what the reader will learn]

## [Main Section 1]
[Content with subheadings as needed]
[Include images where relevant]

## [Main Section 2]
[Continue pattern]

## [Main Section 3]
[Continue pattern]

## Conclusion / Key Takeaways
[Summary of main points]
[Call to action]

---

**About MyBartenders**
[Brief company description]
[Link to services/contact]
```

### Article Title Formulas

1. **How-To**: "How to [Achieve Result] in [Timeframe/Steps]"
   - "How to Choose the Perfect Wedding Cocktails in 5 Steps"

2. **List**: "[Number] [Things] for [Situation/Audience]"
   - "10 Signature Cocktails for Your Summer Garden Party"

3. **Guide**: "The Ultimate Guide to [Topic]"
   - "The Ultimate Guide to Hiring a Mobile Bar"

4. **Question**: "[Question Your Audience Asks]?"
   - "What Should You Budget for Your Wedding Bar?"

5. **Comparison**: "[Option A] vs [Option B]: [What You'll Learn]"
   - "Open Bar vs. Cash Bar: Which is Right for Your Event?"

### Content Block Templates

**Recipe Block:**
```
### [Cocktail Name]

**Ingredients:**
- 50ml [spirit]
- 25ml [mixer]
- [Additional ingredients]

**Method:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Glass:** [Glass type]
**Garnish:** [Garnish]

[Image of finished cocktail]
```

**Quote Block:**
```
> "[Customer testimonial or expert quote]"
>
> — [Name], [Role/Event Type]
```

**Call-to-Action Block:**
```
---

**Ready to elevate your next event?**

Get a free, no-obligation quote for your [wedding/corporate event/party].

[Get a Quote →]

---
```

---

## Email Templates

### Email Header
```
┌────────────────────────────────────────────┐
│                                            │
│           [LOGO - centered]                │
│                                            │
└────────────────────────────────────────────┘
```

### Email Footer
```
┌────────────────────────────────────────────┐
│                                            │
│  [Social Icons: FB | IG | Twitter]         │
│                                            │
│  MyBartenders                              │
│  contact@mybartenders.co.uk                │
│  +44 7482 612532                           │
│                                            │
│  [Unsubscribe] | [View in Browser]         │
│                                            │
└────────────────────────────────────────────┘
```

### Welcome Email Template
```
Subject: Welcome to MyBartenders! 🍸

Hi [First Name],

Thank you for joining the MyBartenders community!

You're now part of a group who appreciates exceptional
cocktails and memorable events.

Here's what you can expect from us:
• Exclusive cocktail recipes
• Event inspiration and ideas
• Special offers and early access
• Tips from our expert bartenders

Ready to start planning your event? Simply reply to
this email or visit our website to get a free quote.

Cheers,
The MyBartenders Team

[Button: Explore Our Services]
```

### Inquiry Response Template
```
Subject: Re: Your Event Inquiry

Hi [First Name],

Thank you for reaching out about your [event type]!

We'd love to help make [date] unforgettable.

Based on your inquiry, here's what we can offer:
[Personalized response based on their event]

Next steps:
1. [Action item 1]
2. [Action item 2]
3. [Action item 3]

Would you be available for a quick call to discuss
the details? I'm free [suggest times].

Looking forward to hearing from you!

Best regards,
[Your Name]
MyBartenders
```

---

## Print Materials

### Business Card
```
┌────────────────────────────────────┐
│                                    │
│  [LOGO]                            │
│                                    │
│  MyBartenders                      │
│  Premium Mobile Bar Hire           │
│                                    │
│  ──────────────────────────        │
│                                    │
│  [Name]                            │
│  [Title]                           │
│                                    │
│  📞 +44 7482 612532                │
│  ✉️  contact@mybartenders.co.uk    │
│  🌐 mybartenders.co.uk             │
│                                    │
└────────────────────────────────────┘

Size: 85mm x 55mm
Paper: 400gsm, matte or soft-touch
```

### Flyer/Leaflet
```
┌────────────────────────────────────────────┐
│                                            │
│              [HERO IMAGE]                  │
│                                            │
│  ────────────────────────────────────      │
│                                            │
│           [LOGO - Centered]                │
│                                            │
│        Premium Mobile Bar Hire             │
│                                            │
│  ────────────────────────────────────      │
│                                            │
│     ✓ Professional Bartenders              │
│     ✓ Custom Cocktail Menus                │
│     ✓ UK Nationwide                        │
│     ✓ 15+ Years Experience                 │
│                                            │
│  ────────────────────────────────────      │
│                                            │
│     [QR CODE]    Contact Us Today!         │
│                  mybartenders.co.uk        │
│                  +44 7482 612532           │
│                                            │
└────────────────────────────────────────────┘

Size: A5 or A6
Paper: 300gsm, gloss or silk
```

---

## Do's and Don'ts

### Logo

| Do ✅ | Don't ❌ |
|------|---------|
| Use official logo files | Recreate or redraw logo |
| Maintain clear space | Crowd logo with other elements |
| Use on appropriate backgrounds | Place on busy/clashing backgrounds |
| Keep proportions | Stretch or distort |
| Use high-resolution files | Use low-quality images |

### Colors

| Do ✅ | Don't ❌ |
|------|---------|
| Use exact brand colors | Approximate or guess colors |
| Maintain contrast ratios | Use low-contrast combinations |
| Use gradients consistently | Create new gradient combinations |
| Test on multiple screens | Assume all screens show same |

### Typography

| Do ✅ | Don't ❌ |
|------|---------|
| Use system fonts | Use decorative/novelty fonts |
| Maintain hierarchy | Use too many font sizes |
| Ensure readability | Use tiny text on images |
| Keep line lengths readable | Create walls of text |

### Photography

| Do ✅ | Don't ❌ |
|------|---------|
| Use high-quality images | Use blurry or pixelated photos |
| Maintain consistent style | Mix wildly different styles |
| Get proper permissions | Use without consent |
| Optimize for web | Use massive file sizes |

### Voice & Tone

| Do ✅ | Don't ❌ |
|------|---------|
| Be professional and friendly | Be too casual or too formal |
| Focus on customer benefits | Focus only on features |
| Use active voice | Use passive voice |
| Be clear and concise | Use jargon or waffle |

---

## Brand Assets Checklist

### Essential Files to Have Ready

**Logos:**
- [ ] Primary logo (SVG)
- [ ] Primary logo (PNG, transparent)
- [ ] White/light version
- [ ] Dark version
- [ ] Favicon set

**Templates:**
- [ ] Social media templates (Canva/Figma)
- [ ] Email header/footer
- [ ] Proposal template
- [ ] Invoice template
- [ ] Business card design

**Photography:**
- [ ] Hero/banner images
- [ ] Service category images
- [ ] Team photos
- [ ] Event gallery (various events)
- [ ] Cocktail close-ups

**Documents:**
- [ ] Brand guidelines (this document)
- [ ] Tone of voice examples
- [ ] Approved hashtag list
- [ ] Boilerplate descriptions

---

*These brand guidelines should be reviewed annually and updated as the brand evolves.*

*Last Updated: January 2026*
