import React from 'react'
import rectangle41 from "/public/home/rectangle41.png";
import Image from 'next/image';
import Line14 from '@/app/components/elements/Line14';


export default function Footer() {
    return (
        <div className="">
            <p className="absolute left-6 top-[1811px] text-sm font-medium text-center text-black">
                서비스 이용약관
            </p>
            <p className="absolute left-6 top-[1840px] text-xs font-light text-left text-black">
                신세계포인트 고객센터
            </p>
            <p className="absolute left-[169px] top-[1841px] text-xs font-light text-center text-black">
                운영시간 : 09시 - 18시
            </p>
            <p className="absolute left-[169px] top-[1856px] text-xs font-light text-center text-black">
                점심시간 : 12시 - 13시
            </p>
            <p className="absolute left-[169px] top-[1871px] text-xs font-light text-center text-black">
                (공휴일 제외)
            </p>
            <p className="absolute left-6 top-[1906px] text-[11px] font-light text-center text-[#727272]">
                (주)이마트 서울시 중구 세종대로 7길 37(순화동)
            </p>
            <p className="absolute left-6 top-[1926px] text-[11px] font-light text-center text-[#727272]">
                대표자 : 강희석
            </p>
            <p className="absolute left-[113px] top-[1926px] text-[11px] font-light text-center text-[#727272]">
                사업자등록번호 : 206-86-50913
            </p>
            <p className="absolute left-6 top-[1951px] text-[8px] font-light text-center text-[#727272]">
                COPYRIGHT (c) EMART INC. ALL RIGHTS RESERVED.
            </p>
            <p className="absolute left-6 top-[1858px] text-[22px] font-medium text-center text-black">
                1899-4349
            </p>
            <p className="absolute left-36 top-[1811px] text-sm font-medium text-center text-[#e82a2a]">
                개인정보 처리방침
            </p>

            <Image
                className="absolute top-[1921px] right-[10px] object-contain"
                src={rectangle41} // 확장자 추가 (예: .png, .jpg 등)
                width={50} // 너비 지정
                height={10} // 높이 지정
                alt="rectangle41" // 대체 텍스트 지정
            />
            <Line14 />
        </div>
    )
}
