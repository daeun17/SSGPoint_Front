'use client'

import React, { useEffect, useState } from 'react'
import styles from './LoginArea.module.css'
import Link from 'next/link';
import { LogInFormDataType } from '@/types/userDataType';
import { signIn, signOut } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';



export default function Loginarea() {
  const query = useSearchParams();
  const callBackUrl = query.get('callbackUrl');


  const isClient = typeof window !== 'undefined';

  const [loginData, setLoginData] = useState<LogInFormDataType>({
    loginId: '',
    password: '',
    isAutoId: false,
    isAutoLogin: false
  });
  const [pwType, setPwType] = useState<boolean>(true);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'isAutoId') {
      if (e.target.checked) {
        handleLocalStorage(loginData.loginId);
      } else {
        // 체크박스가 해제되면 로컬 스토리지의 값도 삭제
        localStorage.removeItem('autoLogin');
      }
    }
    if (name === 'isAutoId' || name === 'isAutoLogin') {

      setLoginData({
        ...loginData,
        [name]: e.target.checked
      })
    } else {

      setLoginData({
        ...loginData,
        [name]: value
      })
    }
  }

  const handleLocalStorage = (loginId: String) => {
    localStorage.setItem('autoLogin', loginId.toString())
  }

  const handlePwType = () => {
    setPwType(!pwType)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const autoLogin = isClient && localStorage.getItem('autoLogin') || '';
      
      if (autoLogin) {
        setLoginData({
          ...loginData,
          loginId: autoLogin,
          isAutoId: true
        })
      }
    }
  }, [])

  const handleLogin = async () => {
    if (!loginData.loginId && !loginData.password) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }
    if (!loginData.loginId) {
      alert('아이디를 입력해주세요.');
      return;
    }
    if (!loginData.password) {
      alert('비밀번호를 입력해주세요.');
      return;
    }
    // console.log(loginData)
    const result = await signIn('credentials', {
      loginId: loginData.loginId,
      password: loginData.password,
      redirect: true,
      callbackUrl: callBackUrl ? callBackUrl : '/'
    })
    

  };



  return (
    
    <div className={styles.login_input_area}>
      <div className={styles.input_box}>
        <input id="loginId"
          name="loginId"
          type="text"
          placeholder="아이디"
          onChange={handleOnChange}
          defaultValue={loginData.loginId}
          title="로그인을 위해 아이디를 입력해주세요." />
      </div>
      <div className={styles.input_box}>
        <input id="password"
          name='password'
          type={pwType ? 'password' : 'text'}
          placeholder="비밀번호 (영문, 숫자, 특수문자 8~20자)"
          onChange={handleOnChange}
          title="로그인을 위해 비밀번호를 입력해주세요." />
        <button type="button" onClick={handlePwType}>
          <Link href="" id="pw00_btn" className={styles.ico_eye_slash}>비밀번호 보기</Link>
        </button>
      </div>
      <div className={`${styles.chk_group_box} ${styles.col2}`}>
        <div className={styles.chk_box}>
          <input id="isAutoId"
            type="checkbox"
            name='isAutoId'
            checked={loginData.isAutoId && true}
            onChange={handleOnChange} />
          <label htmlFor="isAutoId">아이디 저장</label>
        </div>
        <div className={styles.chk_box}>
          <input id="isAutoLogin"
            type="checkbox"
            name='isAutoLogin'
            onChange={handleOnChange} />
          <label htmlFor="isAutoLogin">자동로그인</label>
        </div>
      </div>
      <div className={styles.btn_box}>
        <button onClick={handleLogin} className={styles.btn_primary}>로그인</button>
      </div>
      <ul className={styles.btn_list_box}>
        <li>
          <Link href="/member/findIdPw" className={styles.btn}>아이디 찾기</Link>
        </li>
        <li>
          <Link href="/member/findPw" className={styles.btn}>비밀번호 찾기</Link>
        </li>
        <li>
          <Link href="/member/join" className={styles.btn}>회원가입</Link>
        </li>
      </ul>
      

    </div>
    
  )
}
