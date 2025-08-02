import React from 'react'
import './featured.css'
const Feature = () => {
  return (
      <div className='feature'>
      <div className='featureItem'>
     <img 
       src="https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg" 
       alt="Hotel Exterior"
       className='featureImage'
     />
        <div className='featureTitles'>
            <h1>Hotel Dubin</h1>
            <h2>233 hotels</h2>
            </div>
       </div>
      <div className='featureItem'>
     <img 
       src="https://images.pexels.com/photos/19615650/pexels-photo-19615650.jpeg" 
       alt="Hotel Pool"
       className='featureImage'
     />
        <div className='featureTitles'>
            <h1>Hotel Taj</h1>
            <h2>233 hotels</h2>
            </div>
       </div>
     
      <div className='featureItem'>
     <img 
       src="https://images.pexels.com/photos/8525031/pexels-photo-8525031.jpeg" 
       alt="Hotel Balcony"
       className='featureImage'
     />
        <div className='featureTitles'>
            <h1>Hotel Lalit</h1>
            <h2>233 hotels</h2>
            </div>
       </div>
    </div>
  )
}
export default Feature
