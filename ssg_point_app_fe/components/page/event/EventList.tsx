import React from 'react'
import EventListCard from './EventListCard';

export default async function EventList() {
    const resp = await fetch("http://localhost:9999/event");
    const event = await resp.json();
    
  return (
    <div className='event_list'>
    <ul>
        {
            event.map((item: {
                id: number; 
                event_thumbnail: string; 
                evnet_head: string; 
                evnet_start: string; 
                evnet_end: string; 
                event_url: string; }) => 
                (<EventListCard 
                    id = {item.id}
                    img = {item.event_thumbnail}
                    title = {item.evnet_head}
                    startdate = {item.evnet_start}
                    enddate = {item.evnet_end}
                    link_url = {item.event_url}
                />
            ))
        }
    </ul>
  </div>
  )
}
