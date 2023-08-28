'use client'

import React from 'react'
import LoginArea from '@/components/page/login/LoginArea'
import SnsLogin from '@/components/page/login/SnsLogin'
import { signIn } from 'next-auth/react'

export const metadata = {
  title: '신세계포인트 - 로그인',
  description: '로그인 페이지',
}

export default function LoginPage() {

  const handlelogin = () => {
    console.log('login')
    signIn('SSGPOINT', {
      username: 'park',
      password: 'awdfaf',
      redirect: true,
      callbackUrl: 'http://localhost:3000/',
    })
  }

  return (

    <div className='content'>
      <div className='login_cnt'>
        <h2 className='sp_img_tit'>
          <span className="hidden">SHINSEGAE POINT</span>
        </h2>
        <LoginArea />
      </div>
      <SnsLogin />
      <button onClick={handlelogin}>log in</button>
    </div>
  )
}
