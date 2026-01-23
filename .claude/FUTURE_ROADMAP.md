# MyBartenders Future Roadmap

This document tracks planned features and improvements for the website.

---

## Completed Features (January 2026)

### Mobile & UX
- [x] Fixed scroll arrow not working on mobile tap
- [x] Fixed checkmarks getting cut off on mobile
- [x] Added animated checkmarks with glow effects
- [x] Redesigned cookie consent to be more compact

### Article System
- [x] Draft/Published status toggle
- [x] Gallery content sections for multiple images
- [x] Improved article card thumbnails with aspect ratio
- [x] Admin dashboard shows draft/published counts

### Gallery
- [x] Admin gallery management page
- [x] Local file upload support
- [x] URL-based image addition
- [x] Category filtering

### Performance
- [x] Optimized First Contentful Paint
- [x] Added video poster fallback
- [x] Preload hints for critical resources
- [x] Package import optimization

---

## Planned Improvements

### High Priority

#### SEO & Marketing
- [ ] Add sitemap generation for articles
- [ ] Implement RSS feed for blog
- [ ] Add social sharing preview customization
- [ ] Schema markup for events/services

#### User Experience
- [ ] Add search functionality to articles
- [ ] Implement article tags/filtering
- [ ] Add "Related Articles" suggestions
- [ ] Image lightbox for gallery

#### Performance
- [ ] Implement image lazy loading with blur placeholders
- [ ] Add service worker for offline support
- [ ] Optimize video streaming/adaptive quality
- [ ] Consider CDN for static assets

### Medium Priority

#### Admin Panel
- [ ] Bulk operations for articles
- [ ] Image cropping/editing tool
- [ ] Analytics dashboard (views over time)
- [ ] Scheduled article publishing

#### Content
- [ ] Testimonials management
- [ ] FAQ management system
- [ ] Service pricing configurator
- [ ] Event calendar/availability

#### Integrations
- [ ] Email newsletter signup
- [ ] Social media feed integration
- [ ] Booking system integration
- [ ] Google Reviews widget

### Low Priority / Future Ideas

#### Advanced Features
- [ ] Multi-language support
- [ ] A/B testing framework
- [ ] User reviews/ratings
- [ ] Live chat widget

#### Technical Debt
- [ ] Migrate to TypeScript strict mode
- [ ] Add comprehensive test coverage
- [ ] Implement error boundary components
- [ ] Add logging/monitoring

---

## Technical Notes

### Database Collections
- `articles` - Blog articles with drafts
- `gallery` - Dynamic gallery images

### Key Files Modified
- `/pages/api/articles/index.ts` - Draft filtering
- `/pages/admin/gallery.tsx` - New gallery admin
- `/pages/api/gallery/index.ts` - Gallery API
- `/components/CookieConsent.tsx` - Compact design
- `/components/VideoSection/VideoSection.jsx` - Performance

---

## How to Use This Document

1. Check off completed items as features ship
2. Add new ideas to appropriate priority section
3. Move items between priorities as needs change
4. Reference Technical Notes when implementing

---

Last updated: January 2026
