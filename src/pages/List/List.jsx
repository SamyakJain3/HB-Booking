import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Headers from '../../components/Header/Header'
import './List.css'
import { useLocation } from 'react-router-dom';
import {format} from 'date-fns'
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/SearchItem/searchItem';

const List = () => {
const location = useLocation();
const [destination, setDestination] = useState(location.state?.destination || "");
const [date, setDate] = useState(location.state?.date || [{
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection'
}]);
const [options, setOptions] = useState(location.state?.options || {
  adult: 1,
  children: 0,
  room: 1
});
  const [openDate, setOpenDate] = useState(false)
  console.log(location)
  return (
    <div>
      <Navbar />
      <Headers type='list'/>
      <div className="listContainer">
        <div className="listWrapper">
           <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input type="text" placeholder={destination}/>
            </div>
            <div className="lsItem">
              <label htmlFor="">Check in Date</label>
             <span  onClick={()=>setOpenDate(!openDate)}>{format(date[0].startDate, 'MM/dd/yyyy')} To {format(date[0].endDate, 'MM/dd/yyyy')}</span> 
         {openDate && <DateRange onChange={(item)=>setDate([item.selection])} 
                      minDates={new Date()} 
                      range ={date}
            />
        }

<div className="lsItem">
<label htmlFor="">Options</label>
<div className="lsOptions">

<div className="lsOptionItem">
  <span className="lsOptionText">
    Min Price 
  <small>per night</small>
  </span>
  <input type="number" className='lsOptionInput'/>
</div>
<div className="lsOptionItem">
  <span className="lsOptionText">
    Max Price 
  <small>per night</small>
  </span>
  <input type="number" className='lsOptionInput'/>
</div>
<div className="lsOptionItem">
  <span className="lsOptionText">
  Adult
  </span>
  <input type="number" min={1} className='lsOptionInput' placeholder={options.adult}/>
</div>
<div className="lsOptionItem">
  <span className="lsOptionText">
  Children
  </span>
  <input type="number" min={0}className='lsOptionInput' placeholder={options.children}/>
</div>
<div className="lsOptionItem">
  <span className="lsOptionText">
Room
  </span>
  <input type="number" min={1} className='lsOptionInput' placeholder={options.room}/>
</div>
</div>
</div>

           </div>
           <button className='search'>Search</button>
           </div>
           <div className="listResult">
             <SearchItem />
             <SearchItem />
             <SearchItem />
             <SearchItem />
             <SearchItem />
             <SearchItem />
             <SearchItem />
             <SearchItem />
             <SearchItem />
           </div>
        </div>
      </div>

    </div>
  )
}

export default List
