'use client'
import React, { useEffect, useState } from 'react'
import style from "./MyPoint.module.css"
import FilterMenu from './SortRadio'
import PointFilter, { dateFormat } from './PointFilter'
import PointWrap from './PointWrap'
import SortRadio from './SortRadio'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'


export interface sortKeysType {
  pointType: string,
  rangeStartDate: string,
  rangeEndDate: string,
  usedType: string,
  pointHistoryType: string
}
export default function PointList() {

  const queryParam = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const nowdate = new Date(); 
  const defultdate = new Date();// 현재 날짜 조회 
  defultdate.setMonth(nowdate.getMonth()-1); // 기본 설정 날짜 
  
  const [querySort, setQuerySort] = useState<sortKeysType>({
    pointType: queryParam.get('pointType'),
    rangeStartDate: queryParam.get('rangeStartDate'),
    rangeEndDate: queryParam.get('rangeEndDate'),
    usedType: queryParam.get('usedType'),
    pointHistoryType: queryParam.get('pointHistoryType')
  } as sortKeysType);

  useEffect(()=>{
    // 이거쓰면 query 다가져 옴 
    if( queryParam.toString() === `pointType=${querySort.pointType}&rangeStartDate=${querySort.rangeStartDate}&rangeEndDate=${querySort.rangeEndDate}&usedType=${querySort.usedType}&pointHistoryType=${querySort.pointHistoryType}`) {
      return 
    }
    console.log('open')
    router.push(
      `${pathname}?pointType=${querySort.pointType}&rangeStartDate=${querySort.rangeStartDate}&rangeEndDate=${querySort.rangeEndDate}&usedType=${querySort.usedType}&pointHistoryType=${querySort.pointHistoryType}`
    )
  },[querySort])

  return (
    <div className={style.point_list_box}>
      <SortRadio 
        querySort = {querySort}
        setQuerySort = {setQuerySort}
      />
      <PointFilter
        querySort = {querySort}
        setQuerySort = {setQuerySort}
      />
      <PointWrap/>

    </div>
  )
}
