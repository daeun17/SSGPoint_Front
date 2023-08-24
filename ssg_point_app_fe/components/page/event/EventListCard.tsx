'use client'
import Link from 'next/link'
import React from 'react'
import EndDate from './EndDate'
import { usePathname } from 'next/navigation'
import EndEventImg from './EndEventImg'
import WinEventImg from './WinEventImg'
import { headerMenuDatas } from '@/datas/headerMenuDatas'
import modulestyle from './Event.module.css'


function EventListCard({id, img, title, startdate, enddate } : {id :number, img :string, title : string,
     startdate:string, enddate: string}) {

        const enddt = new Date(enddate)
        const pathname = usePathname();
        
  return (
    <li>
        <Link href={{pathname:'/event', query : {eventNo : id}}}>
          {pathname == "/event/ingevent" ? <EndDate enddate={enddt}/> : 
            pathname == "/event/endevent" ? <EndEventImg/> : 
            pathname == "/event/winevent" ? <WinEventImg/> : null}
          <img src={img} alt={title} />

            
        </Link>
        <div className={modulestyle.event_end_date}>
              <p className={modulestyle.event_title}> {title} </p>
              <p className={modulestyle.event_date}>{startdate + " ~ " + enddate}</p>
        </div>
        
    </li>
    
  )
}

export default EventListCard
