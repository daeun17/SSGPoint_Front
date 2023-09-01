"use client"
import { PointType } from '@/types/PointType';
import React, { useEffect, useState } from 'react'
import style from "./MyPoint.module.css"
import PointHistoryDetail from './PointHistoryDetail';
import { usePathname } from 'next/navigation';

export default function PointHistory() {

        // api 호출을 위한 path 설정 
    // const pathname = usePathname();
    // const apipath = "/point/pointList"
    // const query = useSearchParams();
    // const session = useSession();

    // const [pointData, setPointData] = useState<PointType[]>();
    // useEffect(()=>{
    //     const getData = async() => {
    //         await fetch(
    //             `https://smilekarina.duckdns.org/api/v1${apipath}`+
    //             `?tabGb=${query.get("tabGb")}` +
    //             `&fromDt=${query.get("fromDt")}`+
    //             `&toDt=${query.get("toDt")}`.trim(),
    //             {
    //                 method : "GET",
    //                 headers : {
    //                     "Authorization" : session.data.user.token
    //                 }
    //             }
    //             )
    //     }
    //     getData();
    // },[])

    // 더미 데이터 테스트 
    const pathname = usePathname();
    const [pointData, setPointData] = useState<PointType[]>();
    const [atotalPoint, setATotalPoint] = useState<number>();
    const [uTotalPoint,setUTotalPoint] = useState<number>();
    // useEffect(()=>{
    //     const getData = async() => {
    //         await fetch('http://localhost:9999/pointlist')
    //         .then(res => res.json())
    //         .then(data =>{
    //             setPointData(data.result.pntList)
    //             setATotalPoint(data.result.aTotalPoint)
    //             setUTotalPoint(data.result.uTotalPoint)
    //             console.log(data)
    //         })
    //     }
    //     getData();
    // },[])

  return (
    <div className={style.point_wrap}>
        <div className={pathname==="/mypoint/pntHistory" ? style.point_total : style.gft_total}>
            <p className={style.p_accumulate}>
                <span>적립</span>
                <span className={style.ff_lato}>
                    {atotalPoint}P
                </span>
            </p>
            <p className={style.p_use}>
                <span>사용</span>
                <span className={style.ff_lato}>
                    {uTotalPoint}P
                </span>
            </p>
        </div>
        <ul className={style.point_history}>
            {pointData ? pointData.map((item: PointType) => 
                (<PointHistoryDetail data = {item}/>
            )) : null
            
            }
        </ul>
    </div>
  )
}
