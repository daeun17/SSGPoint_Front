import React from 'react'
import styles from './LeavePW.module.css'

export default function LeavePW() {
    return (
        <div>
            <div className={`${styles.cnt_box0}`}>
                <div className={`${styles.form_box} ${styles.pd_b25}`}>
                    <p className={`${styles.tit}`}> 비밀번호 </p>
                    <div className={`${styles.input_box}`}>
                        <input id="pw00" type="password" placeholder='비밀번호를 입력해주세요.' />
                            <label htmlFor="pw00">
                                
                            </label>
                    </div>
                </div>
                <div className={`${styles.btn_box}`}>
                    <a href="" className={`${styles.btn_primary}`}>확인</a>
                </div>
            </div>
        </div>
    )
}
