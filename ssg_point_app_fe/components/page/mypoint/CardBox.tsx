"use client"
import React from 'react'
import style from "./MyPoint.module.css"
import { usePathname } from 'next/navigation'
import PointHistoryCard from './PointHistoryCard';

export default function CardBox() {
    const pathname = usePathname();

  return (
    <div className={style.cardbox}>
        <div className={style.top_cnt}>
            <h3 className={style.tit_img}>SHINSEGAE POINT</h3>
            <button className={style.btn_info}></button> {/*todo 유형에 따라 버튼 다른거 띄우기 , 바코드, 안내*/}
        </div>
        <div className={style.item_cnt}> {/*todo 유형에 따라 버튼 다른거 띄우기 , 바코드, 안내*/}
            {/* {pathname === "/mypoint/pntHistory"?<PointHistoryCard/> :null} */}
        </div>
    </div>
  )
}
