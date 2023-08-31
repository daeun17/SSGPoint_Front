'use client'

import React from 'react'
import styles from './ServiceAgree.module.css'

export default function ServiceAgree() {
  return (
    <div className={`${styles.service_agree}`}>
      <section>
      <div className={`${styles.setting_list}`}>
        <strong className={`${styles.sp_txt1}`}>신세계포인트 제휴사간 통합 서비스</strong>
        <div className={`${styles.set_content_wrap} ${styles.line}`}>
          <div className={`${styles.set_contents}`}>
            <p className={`${styles.set_tit}`}>[선택] 신세계포인트 ↔ SSG.COM 옴니서비스를 위한 개인정보 제공 동의</p>
            <p className={`${styles.set_txt}`}>
              <button className={`${styles.agree_show}`}>
                <span>내용보기</span>
              </button>
            </p>
          </div>
          <div className={`${styles.toggle_btn}`}>
            <input id="check01" type="checkbox" true-value="Y" false-value="N"/>
              <label htmlFor="check01"> (선택) 신세계포인트(이마트, 신세계백화점) ↔ SSG.COM 개인정보 제공 동의 off</label>
          </div>
        </div>
        <div className={`${styles.set_date}`}>변경일 : </div>
        <strong className={`${styles.sp_txt1}`}>사이트 이용 약관 동의</strong>
        <div>
          <div className={`${styles.set_content_wrap} ${styles.line}`}>
            <div className={`${styles.set_contents}`}>
              <p className={`${styles.set_tit}`}> 이마트 사이트 이용 약관
                <br />emart.com </p>
              <p className={`${styles.set_txt}`}>
                <button className={`${styles.agree_show}`}>
                  <span>내용보기</span>
                </button>
              </p>
            </div>
            <div className={`${styles.toggle_btn}`}>
              <input id="siteCheck0" type="checkbox" true-value="Y" false-value="N"/>
                <label htmlFor="siteCheck0">이마트 사이트 이용 약관 동의 off</label>
            </div>
          </div>
          <div className={`${styles.set_date}`}>변경일 : </div>
        </div>
        <div>
          <div className={`${styles.set_content_wrap}`}>
            <div className={`${styles.set_contents}`}>
              <p className={`${styles.set_tit}`}> 신세계백화점 사이트 이용 약관
                <br />shinsegae.com </p>
              <p className={`${styles.set_txt}`}>
                <button className={`${styles.agree_show}`}>
                  <span>내용보기</span>
                </button>
              </p>
            </div>
            <div className={`${styles.toggle_btn}`}>
              <input id="siteCheck1" type="checkbox" true-value="Y" false-value="N"/>
                <label htmlFor="siteCheck1">신세계백화점 사이트 이용 약관 동의 off</label>
            </div>
          </div>
          <div className={`${styles.set_date}`}>변경일 : </div>
        </div>
      </div>
      </section>
    </div>
  )
}
