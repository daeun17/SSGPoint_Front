import React from 'react'
import style from './PntGiftMainsub.module.css'

export default function PntGiftsubSerchUser() {
  return (
    <>
        <input type="text" id="otherphoneNumber" className={style.input_box1} placeholder="-없이 휴대폰 번호를 입력해 주세요." />
        <input type="text" id="otherName" className={style.input_box1} placeholder="실명을 정확하게 입력해주세요." />
        <p className={style.serchUser}>조회하기</p>
    </>
  )
}
