import React from 'react'
import style from './SavePoint.module.css'

export default function SavePoint() {
  return (
    <>
    <div className={style.org_txt_box}>
        <h3 className={style.box_tit}>
            포인트 적립을 깜빡하셨나요? <br />
            <strong className={style.fc_pk}>영수증 정보만 입력해 주세요.</strong>
        </h3>
        <p className={style.box_txt}>
            이마트, 신세계백화점, 이마트 에브리데이에서<br />
            구매하신 영수증 정보로 포인트 적립이 가능합니다.
        </p>
    </div>
    <div className={style.mypoint_cnt}>
        <p className={style.sp_line_tit0}> 영수증 정보 등록</p>        

    </div>
    </>
  )
}
