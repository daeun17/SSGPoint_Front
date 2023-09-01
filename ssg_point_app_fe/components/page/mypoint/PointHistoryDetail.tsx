import { PointType } from '@/types/PointType'
import React from 'react'
import style from './MyPoint.module.css'

// 날짜 변경 함수
export function dateFormat({formatdate}:{formatdate : Date}){
  let result = `${formatdate.getFullYear()}-${formatdate.getMonth() <9 ? "0"+(formatdate.getMonth()+1) : (formatdate.getMonth()+1)}-${formatdate.getDate() <9 ? "0"+(formatdate.getDate()) : (formatdate.getDate())}`
  return result
}
// 이름 마스킹 처리 함수
export function maskingName(name:string) {
  if (name.length <= 2) {
    return name.replace(name.substring(0, 1), "*");
  }

  return (
    name[0] +
    "*".repeat(name.substring(1, name.length - 1).length) +
    name[name.length - 1]
  );
}
// 아이디 마스킹 처리 함수 
export function maskingID (value : string) {
  if (value.length === 2) {
    return value.replace(/(?<=.{1})./gi, '*');
  } else if (value.length > 2) {
    return value.replace(/(?<=.{2})./gi, '*');
  } else {
    return value;
  }
};

export default function PointHistoryDetail({data}:{data : PointType}) {
  const date = new Date(data.createdDate);
  const formdate = dateFormat({formatdate: date});


  
  const maskingID = (value : string) => {
    if (value.length === 2) {
      return value.replace(/(?<=.{1})./gi, '*');
    } else if (value.length > 2) {
      return value.replace(/(?<=.{2})./gi, '*');
    } else {
      return value;
    }
  };

  const Name = data.giftName 
  const maskedName = maskingName(Name)

  const ID = data.giftSenderId
  const maskedId = maskingID(ID)

  return (
    <li>
      {/* 포인트 내역에 따른 빨간색 검은색 아이콘 표시를 하기 위함 */}
        <p className={data.used === "사용" ? style.p_use :
                       data.pointType === "선물사용취소" && data.giftType === "거절" ? 
                       style.p_cancel :
                       style.p_accumulate
                      }>
            {/* 선물 사용 취소의 경우 -포인트 표시를 위함 */}
            {data.pointType === "선물" && data.giftType === "거절" ? `-${data.point}` : data.point}p
            {/* 각각 포인트 내역 에 따른 내용 표시를 위함 : 포인트 적립, 이벤트 적립 등 */}
            <span>{data.pointType === "출석" || data.pointType === "룰렛" ? `이벤트${data.used}` 
                    : data.pointType === "선물사용취소" ? data.pointType 
                    : data.pointType === "스마트영수증" ? `결제${data.used}`
                    : data.pointType + data.used}
            </span>
        </p>
        {/* 포인트일 경우와 일반의 경우 분기를 위함 */}
        {data.pointType === "선물" || data.pointType === "선물사용취소" ?
          <p className={style.p_location}>          
            <span className={style.sub_txt1}>{data.giftType === "수락" && data.used === "적립" ? "받은선물" : "보낸선물"} : {data.giftType}</span>
            <span className={style.name}>{maskedName} {maskedId}</span>
          </p> 
          :
          <p className={style.p_location}>
            {data.franchiseeName} <br />
            {data.addDetailDesc !== "" ? <span className={style.sub_txt0}>{data.addDetailDesc}</span> : null}
          </p>
        }
        <div className={style.view_receipt}>
          {/* 날짜 출력 */}
          <p className={style.p_use_date}>{formdate}</p>
          {/* 메시지 보기 or 영수증 보기 버튼 출력 */}
          {data.messageOnOff === "ON" ? 
            <button className={style.view_btn}>메시지보기</button> :
             data.receiptNumber !== null ?
             <button className={style.view_btn}>영수증 보기</button> :
              null }
        </div>
    </li>
  )
}
