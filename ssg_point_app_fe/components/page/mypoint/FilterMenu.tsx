import React from 'react'
import style from './MyPoint.module.css'
import Link from 'next/link'
import { filterMenuDataType } from '@/types/FilterMenuDataType'
import PointList from './PointList'

export default function FilterMenu({data}:{data :filterMenuDataType[]}) {


  return (
    <div className={style.point_list_box}>
        {data.map((menu,idx)=>(
            <input type="radio" value={idx}>{menu.name}</input>
        ))}
        <PointList/>
    </div>
  )
}
