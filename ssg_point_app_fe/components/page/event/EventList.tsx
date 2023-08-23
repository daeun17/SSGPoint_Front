import React, { useMemo } from 'react'
import EventListCard from './EventListCard';
import { EventType } from '@/types/eventype';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import SortMenu from './SortMenu';
import { List } from 'postcss/lib/list';
import modulestyle from './Event.module.css'


// export default async function EventList(events : any) {
export default async function EventList() {

    const resp = await fetch("http://localhost:9999/event2" ,{next: {revalidate : 0}} );
    const event = await resp.json();
  return (
    <>
    <div className={modulestyle.event_list}>
    <ul>
        {
            event.map((item: EventType) => 
                (<EventListCard 
                    id = {item.id}
                    img = {item.event_thumbnail}
                    title = {item.event_head}
                    startdate = {item.event_start}
                    enddate = {item.event_end}
                />
            ))
        }
    </ul>
  </div>
  </>
  )
}


