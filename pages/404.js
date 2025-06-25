// pages/404.js
export default function Custom404 () {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for does not exist.</p>
    </div>
  )
}

// ⬇️ Add this function to enforce a 404 status
export async function getStaticProps () {
  return {
    props: {},
    notFound: true // Forces Next.js to send a 404 status
  }
}
