import React from 'react'
import style from "./MyPoint.module.css"
import PointHistory from './PointHistory'
// 내역 리스트 
export default function PointWrap() {
  return (
    <div className={style.point_wrap}>
      <PointHistory/>
    </div>
  )
}
