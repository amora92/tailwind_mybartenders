// pages/500.tsx
export default function Custom500 () {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center text-center bg-gray-100'>
      <h1 className='text-5xl font-bold text-red-600'>500 - Server Error</h1>
      <p className='mt-4 text-gray-700'>
        Something went wrong. Please try again later.
      </p>
    </div>
  )
}
