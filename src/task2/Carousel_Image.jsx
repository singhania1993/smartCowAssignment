import { FastAverageColor, useState } from '.'

const Carousel_Image = ({ id, src, alt, name }) => {
  const [fontColor, setFontColor] = useState('')
  const getBackgroundColor = (e) => {
    const fac = new FastAverageColor()
    const color = fac.getColor(e.target)
    setFontColor(color?.isDark ? '#fff' : '#000')
  }

  return (
    <div key={id} className="image-height">
      <img
        src={src}
        alt={alt}
        className="carousel-img"
        onLoad={(e) => getBackgroundColor(e)}
      />
      <p
        className="text-on-img"
        style={{ color: fontColor, fontWeight: 'bold' }}
      >
        {name}
      </p>
    </div>
  )
}

export default Carousel_Image
