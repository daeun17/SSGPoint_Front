"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useMemo, useState } from 'react'

export default function SelectSortType () {

  const router = useRouter();
  const pathname = usePathname();


  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    if(pathname === "/event/ingevent"){
      router.push(`/event/ingevent?_sort=${e.target.value}&_order=${e.target.value === "reg_date" ? "desc" : "asc"}`);
      // router.push(`/event/ingevent/${e.target.value}`);
      
    }else if(pathname === "/couponPage"){
      router.push(`/couponPage/${e.target.value}?page=0&size=10`);
    }
    
  }

  return (
    <>
    <div className='event_sort_box'>
        <form>
        <select className='select_box' onChange={handleSort}>
            <option defaultValue="reg_date" selected disabled hidden >선택하세요</option>
            <option value="reg_date">최신순</option>
            <option value="event_end">마감임박순</option>
        </select>
        </form>
    </div> 
    </>
  )
}