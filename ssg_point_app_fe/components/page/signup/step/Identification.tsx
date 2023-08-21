import React from 'react'
import styles from './Identification.module.css';

export default function Identification() {
  return (
    <div><section id="content" className={styles.content} >
    <div className={styles.top_cnt1}>
        <div className={`${styles.join_step} ${styles.step1}`}>
            <ol>
                <li>
                    <span aria-hidden="true">1</span>
                    <i className="hidden">현재 1단계</i>
                </li>
                <li>
                    <span aria-hidden="true">2</span>
                    <i className="hidden">2단계</i>
                </li>
                <li>
                    <span aria-hidden="true">3</span>
                    <i className="hidden">3단계</i>
                </li>
                <li>
                    <span aria-hidden="true">4</span>
                    <i className="hidden">4단계</i>
                </li>
            </ol>
            <p className={styles.tit}>본인인증</p>
            <p className={styles.txt}>본인인증 수단을 선택해주세요.</p>
        </div>
    </div>
    </section></div>
  )
}
