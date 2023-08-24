"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useMemo, useState } from 'react'

export default function () {

  const router = useRouter();
  const query = useSearchParams();
  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    router.push(`/event/ingevent?_sort=${e.target.value}&_order=${e.target.value === "reg_date" ? "desc" : "asc"}`);
  }

  return (
    <>
    <div className='event_sort_box'>
        <form>
        <select className='select_box' onChange={handleSort}>
            <option defaultValue={
              query.get('_sort') === "reg_date" ? "reg_date" : query.get('_sort') === null ? "none" : "event_end"
              }>{query.get('_sort') === "reg_date" ? "최신순" : query.get('_sort') === null ? "선택하세요" : "마감임박순"}</option>
            <option value="reg_date">최신순</option>
            <option value="event_end">마감임박순</option>
        </select>
        </form>
    </div> 
    </>
  )
}