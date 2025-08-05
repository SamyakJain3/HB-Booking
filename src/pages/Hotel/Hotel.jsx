import React, { useState } from 'react'
import './Hotel.css'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import { FaLocationDot} from 'react-icons/fa6';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { BiExit } from 'react-icons/bi';
import image from '../../assets/PropertyImg/1.avif'
import image2 from '../../assets/PropertyImg/2.jpg'
import image3 from '../../assets/PropertyImg/3.jpg'
import image4 from '../../assets/PropertyImg/4.jpg'
import image5 from '../../assets/PropertyImg/5.jpg'
import image6 from '../../assets/PropertyImg/6.jpg'
import MailList from '../../components/MailList/MailList'
import Footer from '../../components/Footer/Footer'

const Hotel = () => {
  const [slideNumber , setSlideNumber]= useState(0)
  const [open , setOpen]= useState(false)
  const photos = [
    { src: image },
    { src: image2 },
    { src: image3 },
    { src: image4 },
    { src: image5 },
    { src: image6 },
  ]

  function handleOpen(index){
    setSlideNumber(index)
    setOpen(true)
  }
  function handleMove(direction){
let newSlideNumber
if(direction === 'l'){
  newSlideNumber = slideNumber === 0 ? 5: slideNumber-1
}
else{
  
  newSlideNumber = slideNumber === 5 ? 0: slideNumber+1
}
setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className="hotelContainer">
        {open &&
          <div className="slider">
            <BiExit className='cancel' onClick={()=>setOpen(false)}/>
            <FaArrowLeft className='arrow' onClick={()=>handleMove('l')}/>
            <div className="sliderWrpper">
              <img src={photos[slideNumber].src} alt="" className='sliderImg'/>
            </div>
            <FaArrowRight className='arrow' onClick={()=>handleMove('r')}/>
          </div>
        }
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <span className="hotelTitle">Grand Hotel</span>
          <div className="hotelAddress">
            <FaLocationDot />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay $114 at this property and get the free airport taxi
          </span>
          <div className="hotelImage">
            {photos.map((photo, index) => (
              <div className="hotelImageWrapper" key={photo.src}>
                <img onClick={() => handleOpen(index)} src={photo.src} alt="" className='img' />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Experience luxury and comfort at Grand Hotel, located in the vibrant heart of the city. Enjoy elegantly furnished rooms, top-notch amenities, and exceptional service. Whether traveling for business or leisure, guests appreciate the convenient location, delicious dining options, and relaxing atmosphere, making every stay memorable and truly enjoyable.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h2>Perfect for a 9-night Stay</h2>
              <span>Located in the real heart of krakow, this property has an excellent location score of 9.8!</span>
              <h2>
                <b>$945</b>
                (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  )
}

export default Hotel