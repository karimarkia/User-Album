import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useSelector } from 'react-redux'

const AlbumDetails = ({ title }) => {
  const albumDetails = useSelector((state) => state.userReducer.albumDetails)
  let settings = {
    dots: false,
    slidesToShow: 1,
  }
  return (
    <div className="right">
      <h2>Album Details:</h2>
      <h2>{title}</h2>
      <div className="box">
        <Slider {...settings}>
          {albumDetails.map((img) => (
            <img key={img.id} src={img.thumbnailUrl} alt="No img" />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default AlbumDetails
