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

  const nowdate = new Date(); // 현재 날짜 조회 
  const defultdate = new Date(); 
  defultdate.setMonth(nowdate.getMonth()-1); // 기본 설정 날짜 
  
  // query parameter 들 상태 관리 및 기본값 설정 
  const [querySort, setQuerySort] = useState<sortKeysType>({
    pointType: queryParam.get('pointType'),
    rangeStartDate: queryParam.get('rangeStartDate'),
    rangeEndDate: queryParam.get('rangeEndDate'),
    usedType: queryParam.get('usedType'),
    pointHistoryType: queryParam.get('pointHistoryType')
  } as sortKeysType);

  useEffect(()=>{
    // 이거쓰면 query 다가져 옴 
    // 해당 부분을 넣으니까 초기에 들어 갈 때 데이터를 두번 로드하는 현상이 해결 됨 
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
      {/* 상태 관리하는 query parameter들을 하위 컴포넌트로 전달하기 */}
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
