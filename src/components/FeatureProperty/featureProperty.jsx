import React from 'react'
import hotel1 from '../../assets/PropertyImg/3.jpg'
import './featureProperty.css'

const FeatureProperty = () => {
  return (
    <div className='fp'>
        <div className='fpItem'>
            <img src={hotel1} alt="hotel1" className='fpImg'/>
            <span className="fpName">Aparhotel Stare Miasto</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className='fpItem'>
            <img src={hotel1} alt="hotel1" className='fpImg'/>
            <span className="fpName">Aparhotel Stare Miasto</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className='fpItem'>
            <img src={hotel1} alt="hotel1" className='fpImg'/>
            <span className="fpName">Aparhotel Stare Miasto</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className='fpItem'>
            <img src={hotel1} alt="hotel1" className='fpImg'/>
            <span className="fpName">Aparhotel Stare Miasto</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>

    </div>
  )
}

export default FeatureProperty
