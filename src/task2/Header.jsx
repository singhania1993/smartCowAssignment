import { Carousel } from 'react-responsive-carousel'
import Carousel_Image from './Carousel_Image'
import { images } from './carousel_images'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Header = () => {
  return (
    <div>
      <Carousel autoPlay>
        {images.map(({ id, src, alt, name }) => (
          // eslint-disable-next-line react/jsx-pascal-case
          <Carousel_Image key={id} id={id} src={src} alt={alt} name={name} />
        ))}
      </Carousel>
    </div>
  )
}

export default Header
