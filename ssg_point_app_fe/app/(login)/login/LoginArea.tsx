'use client'

import React, { useState } from 'react'
import styles from './styles.module.css'
import Link from 'next/link';

export default function LoginArea() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    
    if (!email) {
      alert('아이디를 입력해주세요.');
      return;
    }

    if (!password) {
      alert('비밀번호를 입력해주세요.');
      return;
    }
    if (!email || !password) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }
    fetch('/api/test', {method: 'POST'})
  };



  return (
    <div className={styles.login_input_area}>
        <div className={styles.input_box}>
          <label htmlFor="id00" className="hidden">
            <span className={styles.in_box}></span>
          </label>
          <input id="id00" name="email" type="text" placeholder="아이디" value={email}
            onChange={(e) => setEmail(e.target.value)}
            title="로그인을 위해 아이디를 입력해주세요." />
        </div>
        <div className={styles.input_box}>
          <label htmlFor="pw00" className="hidden">
            <span className={styles.in_box}>비밀번호
              <em className={styles.wp}>(영문, 숫자, 특수문자 8~20자)</em>
            </span>
          </label>
          <input id="pw00" name='password' type="password" value={password}
            onChange={(e) => setPassword(e.target.value)}
            title="로그인을 위해 비밀번호를 입력해주세요." />
          <Link href="" id="pw00_btn" className={styles.ico_eye_slash}>비밀번호 보기</Link>
        </div>

        {/* <div className='hidden'>
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
          </div> */}
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
          <button onClick={handleLogin} className={styles.btn_primary}>로그인</button>
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
  )
}
