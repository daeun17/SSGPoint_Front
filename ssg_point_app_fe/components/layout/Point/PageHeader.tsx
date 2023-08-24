"use client"
import { myPointMenuData } from '@/datas/myPointMenuData';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import modulestyle from "./PageHeader.module.css"
import { MenuType } from '@/types/MenuType';

// export default function PageHeader({props} : {props :{menudata : MenuType}}) {
export default function PageHeader() {
  const pathname = usePathname();

  return (
    <div className={modulestyle.tab_menu_box}>
      <ul>
            {myPointMenuData.map((menu)=> (
              <li>
                <Link href={menu.url} className= {pathname === menu.url ? `${modulestyle.tab} ${modulestyle.on}` : `${modulestyle.tab}`}>{menu.name}</Link>
              </li>
            ))}
      </ul>
    </div>
  )
}
