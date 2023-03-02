import React from 'react'
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import './BookUs.css';
function BookUs() {
  const [date, setDate] = useState(new Date());
  let today = new Date()
  const calendarSpread = 60;
  let calculatedMaxDate = today.setDate(today.getDate() + calendarSpread)

  return (
    <div className='calendar-component'>
      <div className='calendar-container'>
        <p className='text-center'>Consultez notre calendrier pour nos disponibilites</p>
        <Calendar 
          onChange={setDate} 
          value={date} 
          maxDate={new Date(calculatedMaxDate)}
          minDate={new Date()}
          next2Label={null}
          prev2Label={null}    
        />
      </div>
      <div className='date-selectionee'>
        <span className='bold'>Date selectionee:</span>{' '}
        <p className='appointment'>{date.toDateString()}</p>
      </div>
    </div>
  )
}

export default BookUs;