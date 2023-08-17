
import BottomNavBar from '@/components/layout/FootNav'
import Link from 'next/link'
import styles from './styles.module.css'
import React from 'react'


export default function LoginPage() {


  return (
    <div className={styles.content}>
      <div className={styles.login_cnt}>
        <h2 className={styles.sp_img_tit}>
          <span className="hidden">SHINSEGAE POINT</span>
        </h2>
        <div className={styles.login_input_area}>
          <div className={styles.input_box}>
            <label htmlFor="id00" className="hidden">
              <span className={styles.in_box}></span>
            </label>
            <input id="id00" className="focus:border-blue-500" type="email" placeholder="아이디" title="로그인을 위해 아이디를 입력해주세요." />
          </div>
          <div className={styles.input_box}>
            <label htmlFor="pw00" className="hidden">
              <span className={styles.in_box}>비밀번호
                <em className={styles.wp}>(영문, 숫자, 특수문자 8~20자)</em>
              </span>
            </label>
            <input id="pw00" type="password" title="로그인을 위해 비밀번호를 입력해주세요." />
            <Link href="" id="pw00_btn" className={styles.ico_eye_slash}>비밀번호 보기</Link>
          </div>
          <div className='hidden'>
            <div className={`${styles.captcha_box}`}>
              <img src="" alt="캡챠 이미지" />
              <div className={styles.btn_box}>
                <button className={styles.btn1_small}>새로고침</button>
                <button className={styles.btn1_small}> 음성듣기 </button>
              </div>
            </div>
            <div className={`${styles.input_box} `}>
              <label htmlFor="captcha00" >
                <span className={styles.in_box}>보안문자 입력</span>
              </label>
              <input id="captcha00" type="text" />
            </div>
          </div>
          <div className={`${styles.chk_group_box} ${styles.col2}`}>
            <div className={styles.chk_box}>
              <input id="checkbox01" type="checkbox" />
              <label htmlFor="checkbox01">아이디 저장</label>
            </div>
            <div className={styles.chk_box}>
              <input id="checkbox02" type="checkbox" true-value="Y" false-value="N" />
              <label htmlFor="checkbox02">자동로그인</label>
            </div>
          </div>
          <div className={styles.btn_box}>
            <Link href="" className={styles.btn_primary}>로그인</Link>
          </div>
          <ul className={styles.btn_list_box}>
            <li>
              <Link href="" className={styles.btn}>아이디 찾기</Link>
            </li>
            <li>
              <Link href="" className={styles.btn}>비밀번호 찾기</Link>
            </li>
            <li>
              <Link href="" className={styles.btn}>회원가입</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.sns_list_box}>
        <h3 className={styles.tit}>간편 로그인</h3>
        <ul className={styles.sns_list}>
          <li className={styles.naver}>
            <a href="javascript:void(0)" title="새창 열림" className={styles.btn}>
              <span className="hidden">naver</span>
            </a>
          </li>
          <li className={styles.kakao}>
            <a href="javascript:void(0)" title="새창 열림" className={styles.btn}>
              <span className="hidden">kakao</span>
            </a>
          </li>
          <li className={styles.apple}>
            <a href="javascript:void(0)" title="새창 열림" className={styles.btn}>
              <span className="hidden">apple</span>
            </a>
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
