"use client"
import React, { useEffect, useState } from 'react'
import style from './MyPoint.module.css'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FilterMenuData } from '@/datas/FilterMenuData'

// 포인트 내역에 Menu  
export default function FilterMenu() {
  
  const [tabGb,settbGb] = useState<string>("1"); // tabGb변경을 위한 state 관리  
  
  const handlefilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    settbGb(e.target.value);// tabGb 값 변경해주기 
  }

  // tab 변경시 url에 쿼리 값 넣어서 데이터 받아오기 
  const query = useSearchParams();
  const router = useRouter();
  useEffect(()=>{
      router.push(`/mypoint/pntHistory?tabGb=${tabGb}&fromDt=${query.get("fromDt")}&toDt=${query.get('toDt')}`);
      //todo data fetch 해서 메뉴 뿌려주기   
  },[tabGb])


  const data = FilterMenuData;
  return (
    <div className={style.sort_radio_box}>
        {data.map((menu, idx)=>(
            <div key={idx} className={style.sort_box}>
              <input type="radio" value={menu.id} id={`sortRadio${menu.id}`} name="filterType" onChange={handlefilter}/>
              <label htmlFor={`sortRadio${menu.id}`}>{menu.name}</label>
            </div>
        ))}
    </div>
  )
}
