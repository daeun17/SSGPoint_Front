import MainEventBanner from "@/components/page/home/event/MainEventBanner";
import React from "react";



export const metadata = {
  title: '신세계포인트 - 메인',
  description: '신세계포인트 이용 정보는 물론 쇼핑과 라이프 스타일 혜택까지 볼거리가 풍성한 신세계포인트 앱으로 일상에 신세계를 더해보세요.',
}

export default function Home() {


  return (
    <div>
      <section id="main_event_banner">
        <div className="event_banner_wrap">
            <MainEventBanner />
            <div className="progress_nav_wrap">
                <div className="progress_bar"></div>
                <div className="progress_step">
                    <p><span>1</span>/5</p>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}