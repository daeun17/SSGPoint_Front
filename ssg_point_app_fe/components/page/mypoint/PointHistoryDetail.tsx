import { PointType } from '@/types/PointType'
import React from 'react'
import style from './MyPoint.module.css'

export default function PointHistoryDetail({data}:{data : PointType}) {


  return (
    <li>
        <p className={data.used === true ? style.p_use : 
                        data.pointType === "GF" && data.giftType === "C" ?
                        style.p_cancel :
                        style.p_accumulate}>
            {data.pointType === "GF" && data.giftType === "C" ? `-${data.point}` : data.point}p
            <span>{}</span>
        </p>
        <p></p>
        <div></div>
    </li>
  )
}
