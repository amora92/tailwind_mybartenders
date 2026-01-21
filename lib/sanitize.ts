// Utility for sanitizing HTML content
// This handles both server-side and client-side rendering

export function sanitizeHtml(html: string): string {
  // On the server, return the HTML as-is (it will be sanitized on the client)
  // This is a security trade-off but necessary for SSR compatibility
  if (typeof window === 'undefined') {
    // Basic server-side sanitization - remove script tags
    return html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+=/gi, '')
  }

  // On the client, use DOMPurify for full sanitization
  const DOMPurify = require('dompurify')
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      'p', 'br', 'strong', 'em', 'b', 'i', 'u', 's', 'strike',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'ul', 'ol', 'li',
      'blockquote', 'pre', 'code',
      'a', 'img', 'figure', 'figcaption',
      'table', 'thead', 'tbody', 'tr', 'th', 'td',
      'div', 'span', 'hr'
    ],
    ALLOWED_ATTR: [
      'href', 'src', 'alt', 'title', 'class', 'id',
      'target', 'rel', 'width', 'height'
    ],
    ALLOW_DATA_ATTR: false
  })
}

export function sanitizeCss(css: string): string {
  // Remove potentially dangerous CSS
  return css
    .replace(/expression\s*\(/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/@import/gi, '')
    .replace(/behavior:/gi, '')
    .replace(/binding:/gi, '')
}
