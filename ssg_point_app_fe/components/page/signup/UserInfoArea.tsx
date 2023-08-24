import React from 'react'
import styles from './UserInfoArea.module.css'


export default function UserInfoArea() {
    return (
        <div>
            <div className={styles.user_info_cnt}>
                <p className={styles.tit}> 회원정보 </p>
                <div className={styles.user_info}>
                    <dl>
                        <dt>휴대폰 번호</dt>
                        <dd>010-43**-04**</dd>
                    </dl>
                    <dl>
                        <dt>주소</dt>
                        <dd>부산 남구 용소로, *****</dd>
                    </dl>
                    <dl>
                        <dt>이메일</dt>
                        <dd>없음</dd>
                    </dl>
                </div>
                <p className={styles.tit}> 광고정보 수신동의
                    <em className='not-italic'>동의일자 2023.08.24</em>
                </p>
                <div className={`${styles.user_info} ${styles.item_col}`}>
                    <dl>
                        <dt>동의</dt>
                        <dd>이메일, 문자, DM, TM</dd>
                    </dl>
                    <dl>
                        <dt>비동의</dt>
                        <dd>&nbsp;</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}
