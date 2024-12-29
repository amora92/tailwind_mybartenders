interface VideoBlockProps {
  url: string
  title: string
}

export const VideoBlock = ({ url, title }: VideoBlockProps) => (
  <div className='video-container'>
    <iframe
      src={url}
      title={title}
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    />
  </div>
)
