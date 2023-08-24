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
            <div className='tab_menu_box_event'>
                    <ul>
                    <li>
                        <Link href='/ingevent' className= {pathname === '/ingevent' ? `tab on` : `tab`}>진행 이벤트</Link>
                    </li>
                    <li >
                        <Link href='/endevent' className={pathname === '/endevent' ? "tab on" : "tab"}>종료 이벤트</Link>
                    </li>
                    <li >
                        <Link href='/winevent' className={pathname === '/winevent' ? "tab on" : "tab"}>당첨 확인</Link>
                    </li>
                    </ul>
            </div>
          {children}
        </section>
    )
  }
