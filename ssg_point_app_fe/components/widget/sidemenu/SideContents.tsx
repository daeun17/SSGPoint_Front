import React from 'react'
import styles from './SideContents.module.css'
import Logo from '@/components/ui/header/Logo'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

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
        <div className={`${styles.lnb_top}`}>
          <div className={`${styles.top_cnt}`}>
            <div className={`${styles.app_btn_box}`}>
              <p className={`${styles.login_txt}`}>
                로그인해 주세요.
              </p>

            </div>
            <div className={`${styles.btn_box}`}>
              <a className={`${styles.btn_primary}`} href="">
                로그인
              </a>
              <a className={`${styles.btn0}`} href="">
                회원가입
              </a>
              {/* {session.status === 'authenticated' ? 
              <p onClick={()=>signOut(
                {callbackUrl: 'http://localhost:3000/'}
              )}>로그아웃 : {session.data.user.name}</p> 
            : <Link href='/login'>로그인</Link> } */}
            </div>
          </div>
        </div>
        <div className={`${styles.lnb_favorit}`}>
          <h3 className={`${styles.blind} hidden`}>
            즐겨찾기 메뉴
          </h3>
          <div className={`${styles.lnb_favorit_list}`}>
            <div className={`${styles.favorit_list_cnt}`}>
              <p className={`${styles.menu_box}`}>
                <a className={`${styles.menu}`} href="">
                  <img alt="" aria-hidden="true" src="" />
                  포인트 내역
                </a>
              </p>
              <p className={`${styles.menu_box}`}>
                <a className={`${styles.menu}`} href="">
                  <img alt="" aria-hidden="true" src="" />
                  포인트 비밀번호 변경
                </a>
              </p>
              <p className={`${styles.menu_box}`}>
                <a className={`${styles.menu}`} href="">
                  <img alt="" aria-hidden="true" src="" />
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
        <div className={`${styles.lnb_menu}`}>
          <div className={`${styles.lnb_menu_box} ${styles.menu_box1}`}>
            <h3 className={`${styles.menu_tit}`}>
              신세계포인트
            </h3>
            <ul className={`${styles.menu_list} ${styles.w_type1}`}>
              <li>
                <a href="">
                  <img alt="" aria-hidden="true" src="" />
                  가맹점 소개
                </a>
              </li>
              <li>
                <a href="">
                  <img alt="" aria-hidden="true" src="" />
                  포인트 카드
                </a>
              </li>
              <li>
                <a href="">
                  <img alt="" aria-hidden="true" src="" />
                  포인트 서비스
                </a>
              </li>
              <li>
                <a href="">
                  <img alt="" aria-hidden="true" src="" />
                  임시 발급 카드 인증
                </a>
              </li>
              <li>
                <a href="">
                  <img alt="" aria-hidden="true" src="" />
                  신세계그룹 뉴스레터
                </a>
              </li>
            </ul>
            <h3 className={`${styles.menu_tit}`}>
              멤버십 서비스
            </h3>
            <ul className={`${styles.menu_list} ${styles.w_type2}`}>
              <li>
                <a href="">
                  <img alt="" aria-hidden="true" src="" />
                  신세계포인트 통합 ID 관리
                </a>
              </li>
              <li>
                <a href="">
                  <img alt="" aria-hidden="true" src="" />
                  클럽
                </a>
              </li>
              <li>
                <a href="">
                  <img alt="" aria-hidden="true" src="" />
                  신세계 유니버스 클럽
                </a>
              </li>
            </ul>
            <h3 className={`${styles.menu_tit}`}>
              고객센터
            </h3>
            <ul className={`${styles.menu_list}`}>
              <li>
                <a href="">
                  <img alt="" aria-hidden="true" src="" />
                  공지사항
                </a>
              </li>
              <li>
                <a href="">
                  <img alt="" aria-hidden="true" src="" />
                  FAQ
                </a>
              </li>
              <li>
                <a href="">
                  <img alt="" aria-hidden="true" src="" />
                  1:1 상담
                </a>
              </li>
            </ul>
          </div>
        </div>
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
