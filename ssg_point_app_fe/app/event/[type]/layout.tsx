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
                        <Link href='/event/ingevent' role="tab" className= {pathname === '/event/ingevent' ? `tab on` : `tab`}>진행 이벤트</Link>
                    </li>
                    <li role="presentation">
                        <Link href='/event/endevent' role="tab" className={pathname === '/event/endevent' ? "tab on" : "tab"}>종료 이벤트</Link>
                    </li>
                    <li role="presentation">
                        <Link href='/event/winevent' role="tab" className={pathname === '/event/winevent' ? "tab on" : "tab"}>당첨 확인</Link>
                    </li>
                    </ul>
            </div>
            {pathname == '/event/ingevent' ? 
                        <div className='event_list_box01'>
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
