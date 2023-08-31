"use client"
import { myPointMenuData } from '@/datas/myPointMenuData';
import { eventMenuData } from '@/datas/eventMenuData';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import modulestyle from "./SubMenu.module.css"
import { MenuType } from '@/types/MenuType';
import { memberMenuData } from '@/datas/myMemberData';
import { mypageMenuData } from '@/datas/myPageData';

const menuDataMapping: {
  [key: string]: MenuType[];
} = {
  mypoint: myPointMenuData,
  event: eventMenuData,
  myinfo: memberMenuData,
  mypage: mypageMenuData
  // 다른 pathname을 추가하려면 여기에 추가하세요.
  // 예: anotherPath: anotherMenuData
};

export default function PageHeader() {
  const path = usePathname();
  const pathname = path.split("/")[1];

  let currentMenuData: MenuType[] = menuDataMapping[pathname] || [];

 // If the path does not match any key in menuDataMapping, find if it matches any menu's url
if (currentMenuData.length === 0) {
  for (const key in menuDataMapping) {
      if (menuDataMapping[key].some(menu => {
          // Check if menu.url is an array and any of the urls in the array matches the path
          if (Array.isArray(menu.url)) {
              return menu.url.some(url => path.includes(url));
          }
          return path.includes(menu.url);
      })) {
          currentMenuData = menuDataMapping[key];
          break;
      }
  }
}


  return (
    <div className={modulestyle.tab_menu_box}>
      <PageMenuUi
        data={currentMenuData}
        path={path}
      />
    </div>
  )
}

const PageMenuUi = ({ data, path }: { data: MenuType[], path: string }) => {
  if (data.length === 0) return null;

  return (
    <ul>
      {data.map((menu, idx) => {
        // Check if the menu's URL matches the current path or if any URL in the menu's URL array matches the current path
        const isActive = Array.isArray(menu.url) ? menu.url.some(url => path.includes(url)) : path.includes(menu.url);

        return (
          <li key={idx}>
            <Link 
              href={Array.isArray(menu.url) ? menu.url[0] : menu.url}  // If url is an array, use the first url for the link
              className={`
                ${modulestyle.gnbDepth2Link} 
                ${isActive ? `${modulestyle.tab} ${modulestyle.on} ${modulestyle.gnbDepth2LinkActive}` : modulestyle.tab}
              `}
            >
              {menu.name}
            </Link>
          </li>
        );
      })}
    </ul>
  )
}
