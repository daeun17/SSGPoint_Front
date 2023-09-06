import React from 'react'
import style from './PntGiftMainsub.module.css'

export default function PntGiftGetData() {
  return (
    <form>
      <div className={style.checkpoint}>
        <p className={style.p_txt2}>선물가능 포인트</p>
        <p className={style.point}>6 </p>
      </div>
      <div className={style.margin_box}>
        <p className={style.p_txt3}>선물할 포인트</p>
        <input type="text" id="point" className={style.input_box1} placeholder="포인트 액수를 입력하세요" />
      </div>
      <div className={style.margin_box}>
        <p className={style.p_txt3}> 포인트 비밀번호</p>
          <input
            className={style.input_box1}
            type="password"
            id='pointPw'
            maxLength={4}
            datatype='number'
          />
          <a href="/mypoint/chgPntPwdCert" className={style.p_txt1}>포인트 비밀번호가 기억나지 않으세요? </a>
      </div>
      <div className={style.margin_box}>
        <p className={style.p_txt2}>포인트 선물 메시지</p>
        <input type='radio' value="사용" id="use" name='checkused'/>
        <label htmlFor="use" className={style.input_radio} >선물</label>
        <input type='radio' value="사용 안함" id="notuse" name='checkused' />
        <label htmlFor="notuse" className={style.input_radio} >사용 안함</label>
      </div>


      <div className={style.btn_box}>
        <p className={style.btn1}>미리보기</p>
        <button type='submit' className={style.btn_primary}>
          선물하기
        </button>
      </div>
    </form>
  )
}
