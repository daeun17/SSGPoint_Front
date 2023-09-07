"use client"
import React, { useEffect, useState } from 'react'
import CouponContent from './CouponContent'
import { useSearchParams } from 'next/navigation'
import { CouponType } from '@/types/CouponType';

export default function CouponList() {

    // const [couponData,setCouponData] = useState<CouponType[]>();
    // const [nextpage,setnextPage] = useState();

    // const query = useSearchParams();
    // useEffect(()=>{
    //     const getData = async() => {
    //         await fetch(`https://smilekarina.duckdns.org/api/v1/couponPage/${query.toString()}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setCouponData(data.result.content)
    //             setnextPage(data.result.number)
    //         })
    //     }
    //     getData();
    // },[])

  return (
    <ul>
        <CouponContent/>
    </ul>
  )
}
