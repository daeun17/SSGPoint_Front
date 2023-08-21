'use client'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'
import './style.css'

export default function EventLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const pathname = usePathname();
    return (
        <section className="content">
            <div className='tab_menu_box event'>
                    <ul role="tablist" >
                    <li role="presentation">
                        <Link href='/ingevent' role="tab" className= {pathname === '/ingevent' ? `tab on` : `tab`}>진행 이벤트</Link>
                    </li>
                    <li role="presentation">
                        <Link href='/endevent' role="tab" className={pathname === '/endevent' ? "tab on" : "tab"}>종료 이벤트</Link>
                    </li>
                    <li role="presentation">
                        <Link href='/winevent' role="tab" className={pathname === '/winevent' ? "tab on" : "tab"}>당첨 확인</Link>
                    </li>
                    </ul>
            </div>
            {pathname == '/ingevent' ? 
                    <div className='event_sort_box'>
                    <div className='select_box'>
                        <select title='이벤트 정렬 순서'>
                            <option value="latest">최신순</option>
                            <option value="deadline"> 마감임박</option>
                        </select>
                    </div>
                    </div> : null
            }
          {children}
        </section>
    )
  }
