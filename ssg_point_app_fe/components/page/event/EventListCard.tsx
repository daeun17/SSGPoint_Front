'use client'
import Link from 'next/link'
import React from 'react'
import EndDate from './EndDate'
import { usePathname } from 'next/navigation'
import EndEventImg from './EndEventImg'
import WinEventImg from './WinEventImg'

function EventListCard({id, img, title, startdate, enddate, link_url} : {id :number, img :string, title : string,
     startdate:string, enddate: string, link_url: string }) {

        const enddt = new Date(enddate)
        const pathname = usePathname();
  return (
    <li>
        <Link href={link_url}>
            <img src={img} alt={title} />
            {pathname == "/ingevent" ? <EndDate enddate={enddt}/> : 
            pathname == "/endevent" ? <EndEventImg/> : 
            pathname == "winevent" ? <WinEventImg/> :null}
            
        </Link>
        <div className='event_end_date'>
              <p className='event_title'> {title} </p>
              <p className='event_date'>{startdate + " ~ " + enddate}</p>
        </div>
        
    </li>
    
  )
}

export default EventListCard
