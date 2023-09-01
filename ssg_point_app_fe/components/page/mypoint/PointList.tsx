import React from 'react'
import style from "./MyPoint.module.css"
import FilterMenu from './SortRadio'
import PointFilter from './PointFilter'
import PointWrap from './PointWrap'
import SortRadio from './SortRadio'

export default function PointList() {

  return (
    <div className={style.point_list_box}>
      <SortRadio/>
      <PointFilter/>
      <PointWrap/>

    </div>
  )
}
