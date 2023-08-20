import React from 'react'

function EndDate({enddate} : {enddate:Date}) {
    const today = new Date;
    today.toISOString().substring(0,10);
    console.log(today, enddate)
  return (
    <div className='end_date'>
        <p>
            <span>14</span> 일 남음
        </p>
    </div>  
  )
}

export default EndDate