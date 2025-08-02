import React from 'react'
import './propertyList.css'

import hotel1 from '../../assets/PropertyImg/1.avif'
import hotel2 from '../../assets/PropertyImg/2.jpg'
import hotel3 from '../../assets/PropertyImg/3.jpg'
import hotel4 from '../../assets/PropertyImg/4.jpg'
import hotel5 from '../../assets/PropertyImg/5.jpg'
import hotel6 from '../../assets/PropertyImg/6.jpg'
const PropertyList = () => {
  return (
    <div className='pList'>
      <div className="pListItem">
      <img 
         src={hotel1}
         alt="Hotel 1"
         className='pListImg'
       />
       <div className="pListTitles">
        <h1>Cabins</h1>
        <h2>233 Hotels</h2>
       </div>
      </div>
      <div className="pListItem">
      <img 
         src={hotel2}
         alt="Hotel 2"
         className='pListImg'
       />
       <div className="pListTitles">
        <h1>Hotels</h1>
        <h2>233 Hotels</h2>
       </div>
      </div>
      <div className="pListItem">
      <img 
         src={hotel6}
         alt="Hotel 3"
         className='pListImg'
       />
       <div className="pListTitles">
        <h1>Villas</h1>
        <h2>233 Hotels</h2>
       </div>
      </div>
      <div className="pListItem">
      <img 
         src={hotel4}
         alt="Hotel 4"
         className='pListImg'
       />
       <div className="pListTitles">
        <h1>Resorts</h1>
        <h2>233 Hotels</h2>
       </div>
      </div>
      <div className="pListItem">
      <img 
         src={hotel5}
         alt="Hotel 5"
         className='pListImg'
       />
       <div className="pListTitles">
        <h1>Apartment</h1>
        <h2>233 Hotels</h2>
       </div>
      </div>
    </div>
  )
}

export default PropertyList
