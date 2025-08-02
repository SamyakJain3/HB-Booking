import React, { useState } from 'react'
import { FaBed, FaCar, FaPlane, FaTaxi } from 'react-icons/fa'
import './Header.css'
import { FaCalendarDays, FaPerson } from 'react-icons/fa6'
import {DateRange} from 'react-date-range'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import {format} from 'date-fns'
const Header = () => {
    const[openDate, setOpenDate] = useState(false);
const [date, setDate] = useState([
    {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }
]);
const [openOptions, setOpenOptions] = useState(false);
const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1
});
const handleOption = (name, operation) => {
    setOptions(prev => {
        return {
            ...prev,
            [name]: operation === 'i' 
                ? prev[name] + 1 
                : prev[name] > (name === 'children' ? 0 : 1) 
                    ? prev[name] - 1 
                    : prev[name]
        }
    });
};
  return (
    <div className="header">
        <div className="headerConatiner">

        <div className="headerList">
            <div className="headerListItems active">
                <FaBed />
                <span>Stays</span>
            </div>
            <div className="headerListItems">
                <FaPlane />
                <span>Flights</span>
            </div>
            <div className="headerListItems">
                <FaCar />
                <span>Cars rentals</span>
            </div>
            <div className="headerListItems">
                <FaBed />
                <span>Attraction</span>
            </div>
            <div className="headerListItems">
                <FaTaxi />
                <span>Airport Taxis</span>
            </div>
        </div>
        <h1 className='headerTitle'>A lifetime of discount ? It's Genius.</h1>
        <p className='headerDesc'>Get rewarded for your travels - unlock instant savings on your next trip.</p>
        <button className='headerBtn'>Sign in / Register</button>
        <div className="headerSearch">
            <div className="headerSearchItem">
                <FaBed className='headerIcon' />
                
                <input 
                type="text"
                placeholder='Where are you going?'
                className='headerSearchInput'
                />
            </div>
            <div onClick={() => setOpenDate(!openDate)} className="headerSearchItem">
                <FaCalendarDays className='headerIcon' />
                <span className='headerSearchText'>${format(date[0].startDate, 'MM/dd/yyyy')} To ${format(date[0].endDate, 'MM/dd/yyyy')}</span>
                {openDate && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className='date'
                    />}
            </div>
            <div className="headerSearchItem" >
                <FaPerson className='headerIcon' onClick={() => setOpenOptions(!openOptions)}/>
                <span className='headerSearchText' onClick={() => setOpenOptions(!openOptions)}>{`${options.adult} adult, ${options.children} children, ${options.room} room`}</span>
                {openOptions && <div className="options">
                    <div className="optionItem">
                      <div className="optionText">Adult</div>
                   <div className="optionCounter">
                    <button className="optionCounterButton" onClick={()=>handleOption('adult','d')} >-</button>
                    <span className="optionCounterNumber" >{options.adult}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption('adult','i')}>+</button>
                    </div>
                    </div>
                    <div className="optionItem">

                <div className="optionText">Children</div>
                    <div className="optionCounter">
                    <button className="optionCounterButton" onClick={()=>handleOption('children','d')} >-</button>
                    <span className="optionCounterNumber" >{options.children}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption('children','i')}>+</button>
                        </div>
                    </div>
                <div className="optionItem">

                <div className="optionText">Room</div>
                    <div className="optionCounter">
                   <button className="optionCounterButton" onClick={()=>handleOption('room','d')} >-</button>
                    <span className="optionCounterNumber" >{options.room}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption('room','i')}>+</button>
                        </div>
                </div>
             
                 </div>}
            <div className="headerSearchItem">
            <button className='headerBtn'>Search</button>
            </div>
        </div>
            </div>
        </div>
    </div>
  )
}

export default Header
