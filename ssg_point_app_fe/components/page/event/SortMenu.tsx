"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useMemo, useState } from 'react'
import EventList from './EventList';

// interface SortTypes {
//     sortOption: string | undefined;
//     setSortOption: React.Dispatch<React.SetStateAction<string | undefined>>;
// }

export default function () {
//     const [sortOption, setSortOption] = useState<string>();
//     const memoComponentEventList = useMemo(() => {
//         async function fetchSortOption() {
//             const resp = await fetch("http://localhost:9999/event2" ,{next: {revalidate : 0}} );
//             const event = await resp.json();
//             return event
//         }
//         const event = fetchSortOption();
//         return <EventList events = {event}/>
//     }, [sortOption])

//   return (
//     <>
//     <div className='event_sort_box'>
//         <form>
//         <select value={sortOption} onChange={(e) => {
//             setSortOption(e.target.value);
//             }}>
//             <option value="30">최신순</option>
//             <option value="40">마감임박순</option>
//         </select>
//         </form>
//     </div> 
//     </>
//   )
// }
  return (
    <>
    <div className='event_sort_box'>
        <form>
        <select className='select_box'>
            <option value="30">최신순</option>
            <option value="40">마감임박순</option>
        </select>
        </form>
    </div> 
    </>
  )
}