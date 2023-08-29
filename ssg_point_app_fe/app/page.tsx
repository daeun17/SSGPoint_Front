import MainEventBanner from "@/components/page/home/eventbanner/MainEventBanner";
import SubEventBanner from "@/components/page/home/eventbanner/SubEventBanner";
import MainMenu from "@/components/page/home/mainmenu/MainMenu";
import React from "react";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from 'next-auth'

export const metadata = {
  title: '신세계포인트 - 메인',
  description: '신세계포인트 이용 정보는 물론 쇼핑과 라이프 스타일 혜택까지 볼거리가 풍성한 신세계포인트 앱으로 일상에 신세계를 더해보세요.',
}



export default async function Home() {

  const session = await getServerSession(options)
  console.log(session)


  return (
    <div>
      <section id="main_event_banner">
        <div className="main_visual_banner">
            <MainEventBanner />
            
        </div>
        <MainMenu />
        <SubEventBanner />
      </section>
    </div>
  )
}