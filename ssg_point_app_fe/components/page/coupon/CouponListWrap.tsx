import React from 'react'
import CouponContent from './CouponContent'
import CouponSortType from './CouponSortType'
import CouponDownAll from './CouponDownAll'
import CouponList from './CouponList'
import style from './Coupon.module.css'

export default function CouponListWrap() {

  return (
    <div className={style.coupon_lists_wrap}>
      <div className={style.coupon_serch}>
        <CouponSortType/>
        <CouponDownAll/>  
      </div>
      <CouponList/>
    </div>
  )
}
