"use client"
import React from 'react'
import style from './Coupon.module.css'

export default function CouponDownAll() {


    const handleCouponDownAll= ()=>{
        // const data = fetch("")
        console.log("전체 다운 POST 요청하기")

    }


  return (
    <div className={style.all_btn_wrap}>
      <p className={style.coupon_all_btn} onClick={handleCouponDownAll}>
          전체다운
      </p>
    </div>
  )
}
