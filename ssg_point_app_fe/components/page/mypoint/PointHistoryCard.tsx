"use client"
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


export default async function PointHistoryCard() {
  const [pointInfo,setPointinfo] = useState<pointinfo>();
  const nowdate = new Date();
  const extdate = new Date(nowdate);
  extdate.setMonth(nowdate.getMonth()+1);
  const extNextdate = new Date();
  extNextdate.setMonth(nowdate.getMonth()+2);

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
                <em className={style.date}>{`${extdate}`}</em>
                <em>{pointInfo ? pointInfo.extpoint :"error"}p</em>
              </span>
              <span>
                <em className={style.date}>{`${extNextdate}`}</em>
                <em>{pointInfo ? pointInfo.extNextpoint :"error"}p</em>
              </span>
            </dd>
        
        </dl>
    </div>
  )
}
