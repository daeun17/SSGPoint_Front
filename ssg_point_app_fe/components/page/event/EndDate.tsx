import React from 'react'

function EndDate({enddate} : {enddate:Date}) {
    const today = new Date;
    today.toISOString().substring(0,10);
    // console.log(enddate.getTime(),today.getTime());
    let diff = Math.abs(enddate.getTime() - today.getTime()); 
    diff = Math.ceil(diff / (1000 * 60 * 60 * 24));

  return (
    <div className='end_date'>
        <p>
            <span>{diff}</span> 일 남음
        </p>
    </div>  
  )
}

export default EndDate