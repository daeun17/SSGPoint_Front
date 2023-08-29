import React from 'react'
import style from "./MyPoint.module.css"
import FilterMenu from './SortRadio'
import PointFilter from './PointFilter'

export default function PointList() {

  return (
    <div className={style.point_list_box}>
      <FilterMenu/>
      <PointFilter/>

    </div>
  )
}
