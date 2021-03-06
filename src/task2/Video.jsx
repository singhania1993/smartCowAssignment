const Video = () => {
  return (
    <div className="video">
      <iframe
        className="video-frame"
        width="360"
        height="215"
        src="https://www.youtube.com/embed/KaffwcdPeGg"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Video
