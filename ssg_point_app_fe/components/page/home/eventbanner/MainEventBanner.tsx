'use client'


import React, { useEffect, useState } from 'react'

import { EventBannerType } from '@/types/eventBannerDataType'

import SwiperComponent from './Swiper';




export default function EventBanner() {

  const [eventList, setEventList] = useState<EventBannerType[]>([])

  useEffect(() => {
    const getEvent = async () => await fetch('http://localhost:9999/eventbanner', { next: { revalidate: 3600 } })
      .then(response => response.json())
      .then(data => {
        
        setEventList(data)

      }
      )
    getEvent()
  }, [])



  return (
    <div className='mb-4'>
      
      <SwiperComponent height={680} start={0} end={6} eventList={eventList} />
    
    </div>
  )
}
