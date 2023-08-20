import Link from 'next/link'
import React from 'react'
import EndDate from './enddate'

function EventListCard({id,img,title,startdate,enddate,link_url} : {id :number, img :string, title : string,
     startdate:string, enddate: string, link_url: string }) {

        const enddt = new Date(enddate)
  return (
    <li>
        <Link href={link_url}>
            <img src={img} alt={title} />
        </Link>
        <div className='event_end_date'>
              <p className='event_title'> print{title} </p>
              <p className='event_date'>{startdate + "~" + enddate}</p>
        </div>
        <EndDate enddate={enddt}/>
    </li>
    
  )
}

export default EventListCard
