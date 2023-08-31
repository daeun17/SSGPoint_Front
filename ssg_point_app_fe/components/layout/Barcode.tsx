'use client'

import React, { useEffect, useState } from 'react'
import styles from './Barcode.module.css'
import { useBarcode } from 'next-barcode';



interface BarcodeProps {
    onClose: () => void;
    isActive: boolean;
    token: string;
}


export default function Barcode({ onClose, isActive, token }: BarcodeProps) {

    const [barcode, setBarcode] = useState<string>('')


    const { inputRef } = useBarcode({
        value: 'next-barcode',
        options: {
            background: '#ffffff',
            width: 1.8,
            height: 52,
            font: "bold 24px Inter",
            textAlign: "right",
        }
    });

    //useEffect(() => {console.log(token)}, [])

    useEffect(() => {
        const getBarcode = async () => {
            if (!token) {
                console.error("Token is not provided.");
                return;  // 토큰이 없으면 요청 중지
            }
            const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3ZW9tMTMiLCJpYXQiOjE2OTM0NDk4MzMsImV4cCI6MTY5MzQ2NDIzM30.ipF03EOnkAxyCJAsi-iP9zzf79I3w7HWeIfl0W8Sgic' };

            try {
                const response = await fetch(`https://smilekarina.duckdns.org/api/v1/card/pointcard`, {
                    // method: 'GET',
                    // credentials: 'include',
                    // headers: {
                    //     'Content-Type': 'application/json',
                    //     // 'Authorization': `Bearer ${token}`
                    // }
                    // // headers
                });

                if (!response.ok) {
                    throw new Error(`Fetch failed with status: ${response.status}`);
                }

                const data = await response.json();
                setBarcode(data);
                console.log(data); // 바로 출력하면 최신 데이터를 볼 수 있습니다.
            } catch (error) {
                console.error('Error fetching barcode:', error);
            }
        };

        getBarcode();
        console.log(token); // 토큰 값도 출력
    }, []); // 의존성 배열에 token 추가


    return (
        <div>
            <div
                tabIndex={0}
                className={isActive ? `${styles.point_barcode} ${styles.slide} ${styles.on}` : `${styles.point_barcode}`}>
                <div className={`${styles.bacrode_banner}`}>
                    <div className={`${styles.swiper} ${styles.container} ${styles.barcode_swiper}`} >
                        <ul className={`${styles.swiper} ${styles.wrapper}`}>
                            <li className={`${styles.swiper} ${styles.slide}`}>
                                <div className={`${styles.contents_barcode}`}>
                                    <p className={`${styles.txt}`}>SHINSEGAE POINT</p>
                                    <p className={`${styles.point}`}>0</p>
                                    <div className={`${styles.image_barcode}`}>
                                        <div id="barcode0" className={`${styles.barcode0}`}>
                                            <div>
                                                <svg ref={inputRef} />
                                            </div>
                                            <div style={{ "display": "none" }}> 바코드 생성 실패 </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.txt_link_box}`}>
                                        <a href="" className={`${styles.txt_link_btn} ${styles.bk}`}>포인트 비밀번호 변경</a>
                                        <a href="" className={`${styles.txt_link_btn} ${styles.bk}`}>스마트 영수증</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <button className={styles.shows_barcode} onClick={onClose}>
                    <span className={`${styles.hidden}`}>접기</span>
                </button>
            </div>
        </div>
    )
}
