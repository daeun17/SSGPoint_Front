
import Link from 'next/link'
import React from 'react'

export default async function Ingevent() {

  const resp = await fetch("http://localhost:9999/event/1");
  const event = await resp.json();
  

  return (
    <div className='event_list'>
      <ul>
        <li>
          <Link href={"http://localhost:3000/event_detail/" + event.event_id} >
            <img src={event.event_thumbnail} alt="이벤트 이미지" />
            <div className='end_date'>
              <p>
                <span>14</span> "일 남음"
              </p>
            </div>
          </Link>
          <div className='event_end_date'>
              <p className='event_title'>{event.evnet_head}</p>
              <p className='event_date'>{event.evnet_start + "~" + event.evnet_end}</p>
          </div>
        </li>
        <li>
          <Link href={"http://localhost:3000/event_detail/" + event.event_id} >
            <img src={event.event_thumbnail} alt="이벤트 이미지" />
            <div className='end_date'>
              <p>
                <span>14</span> "일 남음"
              </p>
            </div>
          </Link>
          <div className='event_end_date'>
              <p className='event_title'>{event.evnet_head}</p>
              <p className='event_date'>{event.evnet_start + "~" + event.evnet_end}</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

