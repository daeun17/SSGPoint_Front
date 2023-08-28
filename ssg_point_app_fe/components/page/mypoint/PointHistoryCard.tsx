'use client'
import React, { useEffect, useState } from 'react'
import style from "./MyPoint.module.css"
import { log } from 'console';

interface pointinfo{
  id : number,
  total_point : number,
  addpoint : number,
  extpoint : number,
  extNextpoint : number

}

// 날짜 형식 바꾸기 
export function dateFormat({formatdate}:{formatdate : Date}){
  let result = `${formatdate.getFullYear()}-${formatdate.getMonth() <9 ? "0"+(formatdate.getMonth()+1) : (formatdate.getMonth()+1)}-01`
  return result
}



export default async function PointHistoryCard() {
  const [pointInfo,setPointinfo] = useState<pointinfo>();
  const nowdate = new Date();
  const extdate = new Date(nowdate);
  extdate.setMonth(nowdate.getMonth()+1);
  const formextdate = dateFormat({formatdate : extdate});
  const extNextdate = new Date();
  extNextdate.setMonth(nowdate.getMonth()+2);
  const formnextextdate = dateFormat({formatdate : extNextdate});

  useEffect(()=>{
    const getData = async () => {
      await fetch("http://localhost:9999/mypoint",{next: {revalidate : 1800}} ) 
      .then(res => res.json())
      .then(data =>{
          setPointinfo(data)
          console.log(data)
        })
  }
  getData();
  },[])
  console.log(pointInfo)

  return (
    <div className={style.item_cnt}>
        <dl className={style.total_point}>
            <dt>사용가능</dt>
            <dd>{pointInfo ? pointInfo.total_point :"error"}</dd>
        </dl>
        <dl>
            <dt>적립예정</dt>
            <dd>{pointInfo ? pointInfo.total_point :"error"}p</dd>
        </dl>
        <dl>
            <dt>소멸예정</dt>
            <dd>
              <span>
                <em className={style.date}>{`${formextdate}`}</em>
                <em>{pointInfo ? pointInfo.extpoint :"error"}p</em>
              </span>
              <span>
                <em className={style.date}>{`${formnextextdate}`}</em>
                <em>{pointInfo ? pointInfo.extNextpoint :"error"}p</em>
              </span>
            </dd>
        
        </dl>
    </div>
  )
}
