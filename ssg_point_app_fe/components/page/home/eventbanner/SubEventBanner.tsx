'use client'

import { EventBannerType } from '@/types/eventBannerDataType'
import React, { useEffect, useState } from 'react'

import SwiperComponent from './Swiper';

export default function SubEventBanner() {

    const [eventList, setEventList] = useState<EventBannerType[]>([])

    useEffect(() => {
        const getEvent = async () => await fetch('http://localhost:9999/eventsubbanner', { next: { revalidate: 3600 } })
            .then(response => response.json())
            .then(data => {
                
                // event.id를 기준으로 오름차순 정렬
                const sortedData = data.sort((a: EventBannerType, b: EventBannerType) => a.id - b.id);
                setEventList(sortedData)
            }
            )
        getEvent()
    }, [])

    return (
        <div >
            <SwiperComponent height={660} start={0} end={4} eventList={eventList} />
            <SwiperComponent height={660} start={4} end={5} eventList={eventList} />
            <SwiperComponent height={660} start={5} end={8} eventList={eventList} />
            <SwiperComponent height={660} start={8} end={9} eventList={eventList} />
        </div>
    )
}
