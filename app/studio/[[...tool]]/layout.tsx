export const metadata = {
  title: 'MyBartenders CMS | Sanity Studio',
  description: 'Content management for MyBartenders blog',
  robots: 'noindex, nofollow'
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
