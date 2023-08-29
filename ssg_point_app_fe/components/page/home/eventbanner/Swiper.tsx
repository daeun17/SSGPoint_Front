'use client'

import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
// import required modules
import { Scrollbar } from 'swiper/modules';
import styles from './Swiper.module.css'
import { EventBannerType } from '@/types/eventBannerDataType';
import Link from 'next/link';
import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';



export default function SwiperComponent(props: { height: number, start: number, end: number, eventList: EventBannerType[] }) {

    const [isCurrentIndex, setIsCurrentIndex] = useState(1);
    

    const handleTransitionStart = (swiper: any) => {
        // console.log(swiper.realIndex);
    
        setIsCurrentIndex(swiper.realIndex + 1);
    }
    

    return (
        <div>
            <div>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    modules={[Scrollbar]}
                    scrollbar={{ draggable: true }}
                    onTransitionStart={handleTransitionStart}
                >
                    {
                        props.eventList.map((event, idx) => (
                            idx >= props.start && idx < props.end ? (
                                <SwiperSlide key={idx}>
                                    <Link href={event.event_url}>
                                        <Image src={event.event_thumbnail} width={750} height={props.height} alt="이벤트 배너" layout="responsive" />
                                    </Link>
                                </SwiperSlide>
                            ) : null
                        ))
                    }
                    {
                    props.eventList.length !== 1
                        ?
                        <div className='swiper-control'>
                            <div className='swiper-pagination'>
                                <span className='swiper-pagination-current'>
                                    {isCurrentIndex}
                                </span>
                                /
                                <span className='swiper-pagination-total'>
                                    {props.eventList.length}
                                </span>
                            </div>
                        </div>
                        :
                        ''
                }
                </Swiper>
            </div>
        </div>
    )
}



