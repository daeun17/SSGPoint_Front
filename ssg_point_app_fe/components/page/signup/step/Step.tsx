import React from 'react'
import styles from './Step.module.css';

export default function Step(props: {step : number}) {

    let stepStyle;

    switch(props.step) {
        case 1:
            stepStyle = styles.step1;
            break;
        case 2:
            stepStyle = styles.step2;
            break;
        case 3:
            stepStyle = styles.step3;
            break;
        case 4: 
            stepStyle = styles.step4;
    }


    return (
        <div><section id="content" className={styles.content} >
            <div className={styles.top_cnt1}>
                <div className={`${styles.join_step} ${stepStyle}`}>
                    <ol>
                        <li>
                            <span aria-hidden="true">1</span>
                            <i className="hidden">현재 1단계</i>
                        </li>
                        <li>
                            <span aria-hidden="true">2</span>
                            <i className="hidden">2단계</i>
                        </li>
                        <li>
                            <span aria-hidden="true">3</span>
                            <i className="hidden">3단계</i>
                        </li>
                        <li>
                            <span aria-hidden="true">4</span>
                            <i className="hidden">4단계</i>
                        </li>
                    </ol>
                    <p className={styles.tit}>본인인증</p>
                    <p className={styles.txt}>본인인증 수단을 선택해주세요.</p>
                </div>
            </div>
        </section></div>
    )
}
