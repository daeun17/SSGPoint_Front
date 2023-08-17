
import Link from 'next/link'
import styles from './styles.module.css'
import React from 'react'
import LoginArea from './LoginArea';


export default function LoginPage() {

  return (
    <div className={styles.content}>
      <div className={styles.login_cnt}>
        <h2 className={styles.sp_img_tit}>
          <span className="hidden">SHINSEGAE POINT</span>
        </h2>
        <LoginArea />
      </div>
      <div className={styles.sns_list_box}>
        <h3 className={styles.tit}>간편 로그인</h3>
        <ul className={styles.sns_list}>
          <li className={styles.naver}>
            <Link href="" title="새창 열림" className={styles.btn}>
              <span className="hidden">naver</span>
            </Link>
          </li>
          <li className={styles.kakao}>
            <Link href="" title="새창 열림" className={styles.btn}>
              <span className="hidden">kakao</span>
            </Link>
          </li>
          <li className={styles.apple}>
            <Link href="" title="새창 열림" className={styles.btn}>
              <span className="hidden">apple</span>
            </Link>
          </li></ul>
        {/* <div id="alertPopupsnsLoginListLoginErrorAlertPopup" className={styles.alert_popup}>
          <div className={styles.layer}>
            <div className={styles.pop_contents}>
              <p className={styles.alert_txt}>간편 인증 오류가 발생했습니다.
                <br/> 다시 시도해 주세요.</p>
            </div>
            <div className={styles.btn_box}>
              <button className={styles.btn0}>확인</button>
            </div>
          </div>
          <div className={styles.dimed}>
          </div>
        </div> */}
      </div>
    </div>
  )
}
