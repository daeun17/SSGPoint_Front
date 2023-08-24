import React from 'react'
import styles from './MainMenu.module.css'

export default function MainMenu() {
    return (
        <div>
            <div className={styles.main_menu}>
                <h3 className="hidden">메인 메뉴</h3>
                <ul>
                    <li>
                        <a href="">
                            <img src="/images/logo1.png"
                                aria-hidden="true" alt="" />이벤트</a>
                    </li>
                    <li>
                        <a href="">
                            <img src="/images/logo2.png"
                                aria-hidden="true" alt="" />출석체크</a>
                    </li>
                    <li>
                        <a href="">
                            <img src="/images/logo3.png"
                                aria-hidden="true" alt="" />럭키룰렛</a>
                    </li>
                    <li>
                        <a href="">
                            <img src="/images/logo5.png" aria-hidden="true" alt="" />운세서비스</a>
                    </li>
                    <li>
                        <a href="">
                            <img src="/images/logo4.png"
                                aria-hidden="true" alt="" />영수증</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
