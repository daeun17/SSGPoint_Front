import React from 'react'
import rectangle41 from "/public/home/rectangle41.png";
import Image from 'next/image';
import FootLine from '@/app/(home)/components/elements/FootLine';

interface FooterProps {
    offsetTop?: number;
}

export default function Footer({ offsetTop = 0 }: FooterProps) {
    return (
        <div className="">
            <p style={{ top: `${1811 + offsetTop}px` }} className="absolute left-6 text-sm font-medium text-center text-black">
                서비스 이용약관
            </p>
            <p style={{ top: `${1840 + offsetTop}px` }} className="absolute left-6 text-xs font-light text-left text-black">
                신세계포인트 고객센터
            </p>
            <p style={{ top: `${1841 + offsetTop}px` }} className="absolute left-[169px] text-xs font-light text-center text-black">
                운영시간 : 09시 - 18시
            </p>
            <p style={{ top: `${1856 + offsetTop}px` }} className="absolute left-[169px] text-xs font-light text-center text-black">
                점심시간 : 12시 - 13시
            </p>
            <p style={{ top: `${1871 + offsetTop}px` }} className="absolute left-[169px] text-xs font-light text-center text-black">
                (공휴일 제외)
            </p>
            <p style={{ top: `${1906 + offsetTop}px` }} className="absolute left-6 text-[11px] font-light text-center text-[#727272]">
                (주)이마트 서울시 중구 세종대로 7길 37(순화동)
            </p>
            <p style={{ top: `${1926 + offsetTop}px` }} className="absolute left-6 text-[11px] font-light text-center text-[#727272]">
                대표자 : 강희석
            </p>
            <p style={{ top: `${1926 + offsetTop}px` }} className="absolute left-[113px] text-[11px] font-light text-center text-[#727272]">
                사업자등록번호 : 206-86-50913
            </p>
            <p style={{ top: `${1951 + offsetTop}px` }} className="absolute left-6 text-[8px] font-light text-center text-[#727272]">
                COPYRIGHT (c) EMART INC. ALL RIGHTS RESERVED.
            </p>
            <p style={{ top: `${1858 + offsetTop}px` }} className="absolute left-6 text-[22px] font-medium text-center text-black">
                1899-4349
            </p>
            <p style={{ top: `${1811 + offsetTop}px` }} className="absolute left-36 text-sm font-medium text-center text-[#e82a2a]">
                개인정보 처리방침
            </p>

            <Image
                style={{ top: `${1921 + offsetTop}px` }}
                className="absolute right-[10px] object-contain"
                src={rectangle41}
                width={50}
                height={10}
                alt="rectangle41"
            />
            <FootLine />
        </div>
    )
}
