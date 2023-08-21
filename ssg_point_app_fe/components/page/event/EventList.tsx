import React from 'react'
import EventListCard from './EventListCard';

export default async function EventList() {
    const resp = await fetch("http://localhost:9999/event" ,{next: {revalidate : 0}} ); //todd : 상위 com의 url에 따라 다른 API호출  
    const event = await resp.json();
    
    //인터페이스 만들기 

  return (
    <div className='event_list'>
    <ul>
        {
            event.map((item: {
                id: number; 
                event_thumbnail: string; 
                event_head: string; 
                event_start: string; 
                event_end: string; 
                event_url: string; }) => 
                (<EventListCard 
                    id = {item.id}
                    img = {item.event_thumbnail}
                    title = {item.event_head}
                    startdate = {item.event_start}
                    enddate = {item.event_end}
                    link_url = {item.event_url}
                />
            ))
        }
    </ul>
  </div>
  )
}
