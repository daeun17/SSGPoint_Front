import React from 'react'
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



    return (
        <div>
            <div>
                <Swiper
                    scrollbar={{
                        hide: false,

                    }}
                    pagination={{
                        type: 'fraction',
                    }}
                    modules={[Pagination, Scrollbar]}
                    className="main_event_banner"
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
                </Swiper>
            </div>
        </div>
    )
}
