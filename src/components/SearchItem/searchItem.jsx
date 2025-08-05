import React from 'react'
import './searchItem.css'
import Image from '../../assets/PropertyImg/1.avif'
import { useNavigate } from 'react-router-dom'
const searchItem = () => {
  const navigate  = useNavigate();
  return (
    <div className='searchItem' onClick={()=>navigate('/hotels/:id')}>
      <img src={Image} alt="img1" className="searchItemImg" />
      <div className="siDesc">
           <h1 className="siTitle">Tower Street ApartMent</h1>
           <span className='siDistance'>500m from center</span>
           <span className='siTaxiOp'>Free airpot Taxi</span>
           
           <span className='siSubtitle'>
              Studio Apartment with Air Conditioning
           </span>
           <span className='siFeatures'>
            Entire studio + 1 bathroom * 21m 1 full bed
           </span>
           <span className="siCancelOp">Free Cancelation</span>
           <span className="siCancelOpSubtitle">You can cancel later , so lock in this great price today!</span>
      </div>
      <div className="isDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailsTexts">
                <span className="Price">
                    $123
                </span>
                <span className="siTaxOp">
                    Include taxes and fees
                </span>
         <button className="siCheckButton">See availablilty</button>
            </div>
      </div>
    </div>
  )
}

export default searchItem
