

import React from 'react'
import LoginArea from '@/components/page/login/LoginArea'
import SnsLogin from '@/components/page/login/SnsLogin'





export const metadata = {
  title: '신세계포인트 - 로그인',
  description: '로그인 페이지',
}



export default function LoginPage() {

  return (

    <div className='content'>
      <div className='login_cnt'>
        <h2 className='sp_img_tit'>
          <span className="hidden">SHINSEGAE POINT</span>
        </h2>
        <LoginArea />
      </div>
      <SnsLogin />
    </div>
  )
}
