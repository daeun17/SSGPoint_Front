"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useMemo, useState } from 'react'

export default function () {

  const router = useRouter();
  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    router.push(`/event/ingevent?_sort=${e.target.value}&_order=${e.target.value === "reg_date" ? "desc" : "asc"}`);
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