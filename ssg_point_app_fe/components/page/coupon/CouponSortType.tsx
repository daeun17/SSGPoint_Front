import React from 'react'
import SelectSortType from '../event/SelectSortType'
import style from './Coupon.module.css'

export default function CouponSortType() {
  return (
    <div className={style.select_box}>
      <SelectSortType/> 
    </div>
  )
}
