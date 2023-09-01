import React from 'react'
import styles from './SideContents.module.css'
import Logo from '@/components/ui/header/Logo'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Menu from './Menu'


export default function SideContents() {
  const session = useSession()
  const rogo = "/images/ssgpoint-logo.gif";
  return (
    <div>
      <nav className={`${styles.lnb}`}>
        <div className={`${styles.lnb_cnt}`}>
          <div className={`${styles.lnb_header}`}>
            <div className={`${styles.tit}`}>
              <Logo url={'/'} imgUrl={rogo} imgAlt={'신세계포인트 로고'} />
            </div>
          </div>
          {session.status === 'authenticated' ?
            <div>
              <div className={`${styles.lnb_top}`}>
                <div className={`${styles.top_cnt}`}>
                  <div className={`${styles.app_btn_box}`}>
                    <p className={`${styles.member_txt}`}>
                      <strong className={`${styles.txt_line0}`}>
                        {session.data.user.userName}
                      </strong>
                      님 반갑습니다.
                    </p>
                  </div>
                  <div className={`${styles.btn_box}`}>
                    <button className={`${styles.btn1}`} onClick={() => signOut({ callbackUrl: '/login' })} >
                      로그아웃
                    </button>
                    <a className={`${styles.btn0}`} href="/mypage">
                      마이페이지
                    </a>
                  </div>
                </div>
              </div>
            </div>
            :
            <div className={`${styles.lnb_top}`}>
              <div className={`${styles.top_cnt}`}>
                <div className={`${styles.app_btn_box}`}>
                  <p className={`${styles.login_txt}`}>
                    로그인해 주세요.
                  </p>
                </div>
                <div className={`${styles.btn_box}`}>
                  <a className={`${styles.btn_primary}`} href="/login">
                    로그인
                  </a>
                  <a className={`${styles.btn0}`} href="/member/join">
                    회원가입
                  </a>
                </div>
              </div>
            </div>
          }
          <div className={`${styles.lnb_favorit}`}>
            <h3 className={`${styles.blind} hidden`}>
              즐겨찾기 메뉴
            </h3>
            {/* 이 부분 나중에 컴포넌트로 빼기 */}
            <div className={`${styles.lnb_favorit_list}`}>
              <div className={`${styles.favorit_list_cnt}`}>
                <p className={`${styles.menu_box}`}>
                  <a className={`${styles.menu}`} href="/mypoint/pntHistory">
                    <Image src="/images/menu_big_00.png" alt="" width={40} height={40} />
                    포인트 내역
                  </a>
                </p>
                <p className={`${styles.menu_box}`}>
                  <a className={`${styles.menu}`} href="">
                  <Image src="/images/menu_big_05.png" alt="" width={40} height={40} />
                    포인트 비밀번호 변경
                  </a>
                </p>
                <p className={`${styles.menu_box}`}>
                  <a className={`${styles.menu}`} href="">
                  <Image src="/images/menu_big_22.png" alt="" width={40} height={40} />
                    스마트 영수증
                  </a>
                </p>
              </div>
              <div className={`${styles.favorit_list_empty}`}>
              </div>
            </div>
            <p className={`${styles.select_txt_box}`}>
              <button className={`${styles.ico_btn}`}>
                즐겨찾기 메뉴 선택
              </button>
              <span className={`${styles.txt}`}>
                <button className={`${styles.txt_line0}`}>
                  즐겨찾기 메뉴 선택
                </button>
                에서
                <br />
                나만의 즐겨찾기 메뉴를 설정할 수 있어요!
              </span>
            </p>
          </div>
          
          <Menu />
          
          <ul className={`${styles.lnb_terms}`}>
            <li>
              <a href="">
                서비스 이용약관
              </a>
            </li>
            <li>
              <a href="">
                개인정보 처리방침
              </a>
            </li>
          </ul>
          <button className={`${styles.btn_close}`}>
            닫기
          </button>
        </div>
      </nav>
    </div>
  )
}
