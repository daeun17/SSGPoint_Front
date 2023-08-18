import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

export default function Join() {
  return (
    <div>
      <section id="content" className={styles.content} >
        <div className={styles.top_cnt1}>
          <p className={styles.sp_tit2}> 신세계포인트
            <br/>
              <strong>통합ID 회원가입</strong>
              으로
              <br/> 다양한 혜택을 누리세요!
                <br/>
                </p>
              </div>
              <div className={styles.cnt_box0}>
                <ol className={styles.step_list}>
                  <li  className={styles.step1}>
                    <span className={styles.txt0}>STEP. 1</span>
                    <span className={styles.txt1}>본인인증</span>
                  </li>
                  <li  className={styles.step2}>
                    <span className={styles.txt0}>STEP. 2</span>
                    <span className={styles.txt1}>약관동의</span>
                  </li>
                  <li  className={styles.step3}>
                    <span className={styles.txt0}>STEP. 3</span>
                    <span className={styles.txt1}>정보입력</span>
                  </li>
                  <li  className={styles.step4}>
                    <span className={styles.txt0}>STEP. 4</span>
                    <span className={styles.txt1}>가입완료</span>
                  </li>
                </ol>
                <div className={styles.btn_box}>
                  <Link href="/member/join/cert" className={styles.btn_primary}>회원가입</Link>
                  <p className={styles.sub_txt0}>만 14세 미만 아동은 회원가입할 수 없습니다.</p>
                </div>
              </div>
            </section>
        </div>
        )
}
