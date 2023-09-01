'use client'
import React, { useEffect, useState } from 'react'
import styles from './CertPage.module.css'
import { usePathname, useRouter } from 'next/navigation'
import { CertFormDataType } from '@/types/userDataType'
import { handleOnChange, handleLocalStorage, checkId } from '@/handler/CertHandle';
import { useDisclosure } from '@nextui-org/react'
import PublicModal from '@/components/widget/modal/Modal'

export default function CertPage() {
    const router = useRouter();
    const pathname = usePathname();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modalContent, setModalContent] = useState<string>("");
    const [routePath, setRoutePath] = useState<string>("");
    const [certData, setCertData] = useState<CertFormDataType>({
        loginId: '',
        name: '',
        birthday: '',
        phone: '',
        gender: 'M',
        nationality: 'L',
    });

    useEffect(() => {
        setRoutePath(pathname);
    }, []);

    // 라우팅은 따로 분리하기 어렵
    const handleCertification = async () => {
        if (routePath === '/member/join/cert') {
            router.push('/member/join/agree');

        } else if (routePath === '/member/findIdPw') {
            const result = await checkId(certData.name, certData.phone)
            if (result) {
                localStorage.setItem('loginId', result.toString())
                router.push('/member/findIdResult')
            }
            else {
                setModalContent("회원정보가 없습니다.\n정확한 정보를 입력하신 후 다시 시도해 주세요.");
                setRoutePath('/member/join')
                onOpen();
            }
            
        } else if (routePath === '/member/findPw') {
            const result = await checkId(certData.name, certData.phone)
            if (result && result === certData.loginId) {
                localStorage.setItem('loginId', result.toString())

                router.push('/member/findPwResult')
            }
            else {
                setModalContent("입력한 아이디 정보와 본인인증 정보가 일치하지 않습니다.\n정확한 정보를 입력하신 후 다시 시도해 주세요.");
                setRoutePath('/member/findPw')
                onOpen();
            }
        }
    }


    return (
        <div>
            <div>
                <PublicModal isOpen={isOpen} onOpenChange={onOpenChange} content={modalContent} routePath={routePath} />
            </div>
            {/* <form> */}
            <div className={styles.auth_tab}>
                <ul role="tablist" className={styles.auth_tab_menu}>
                    <li role="presentation" className={styles.on}>
                        <a href="" role="tab" aria-selected="true" className={styles.phone}>휴대폰인증
                            <span className="hidden">선택됨</span>
                        </a>
                    </li>
                    <li role="presentation" >
                        <a href="" role="tab" aria-selected="false" className={styles.card}>카드인증
                        </a>
                    </li>
                </ul>
                <div className={styles.auth_tab_content}>
                    <div className={styles.tab_cnt}>
                        <h3 className="hidden">휴대폰인증</h3>
                        <div>
                            <div className={styles.tab_box0}>
                                {pathname === '/member/findPw' ? (
                                    <div className={styles.form_box}>
                                        <p className={styles.tit}> 아이디를 입력해 주세요. </p>
                                        <div className={styles.input_box}>
                                            <input name="loginId" id="loginId" type="text" placeholder='아이디 입력' title="회원가입을 위해 입력해주세요."
                                                onChange={(e) => handleOnChange(e, certData, setCertData)} />
                                        </div>
                                        <p className={styles.error_txt}>
                                        </p>
                                    </div>
                                ) : null}
                                <div className={styles.form_box}>
                                    <p className={styles.tit}> 이름을 입력해 주세요. </p>
                                    <div className={styles.input_box}>
                                        <input name="name" id="name" type="text" placeholder='이름 입력' title="회원가입을 위해 입력해주세요."
                                            onChange={(e) => handleOnChange(e, certData, setCertData)} />
                                    </div>
                                    <p className={styles.error_txt}>
                                    </p>
                                </div>
                                <div className={styles.form_box}>
                                    <p className={styles.tit}> 성별을 선택해주세요.
                                    </p>
                                    <div className={`${styles.radio_group_box} ${styles.col2}`}>
                                        <div className={styles.radio_box}>
                                            <input id="radio00" type="radio" name="gender" value="M" defaultChecked
                                                onChange={(e) => handleOnChange(e, certData, setCertData)} />
                                            <label htmlFor="radio00">남자</label>
                                        </div>
                                        <div className={styles.radio_box}>
                                            <input id="radio01" type="radio" name="gender" value="F"
                                                onChange={(e) => handleOnChange(e, certData, setCertData)} />
                                            <label htmlFor="radio01">여자</label>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.form_box}>
                                    <p className={styles.tit}> 외국인 이신가요? </p>
                                    <div className={`${styles.radio_group_box} ${styles.col2}`}>
                                        <div className={styles.radio_box}>
                                            <input
                                                id="radio10"
                                                type="radio"
                                                name="nationality"
                                                value="L"
                                                defaultChecked
                                                onChange={(e) => handleOnChange(e, certData, setCertData)}
                                            />
                                            <label htmlFor="radio10">내국인</label>
                                        </div>
                                        <div className={styles.radio_box}>
                                            <input
                                                id="radio11"
                                                type="radio"
                                                name="nationality"
                                                value="F"
                                                onChange={(e) => handleOnChange(e, certData, setCertData)}
                                            />
                                            <label htmlFor="radio11">외국인</label>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.form_box}><p className={styles.tit}> 생년월일을 입력해주세요.
                                    <em className="not-italic" >(예: 19990101)</em>
                                </p>
                                    <div className={styles.input_box}>
                                        <input id="birthday" name='birthday' placeholder='법정생년월일 8자리' type="tel"
                                            onChange={(e) => handleOnChange(e, certData, setCertData)} />

                                    </div>
                                    <p className={styles.error_txt}>
                                    </p>
                                </div>
                                <div className={styles.form_box}>
                                    <p className={styles.tit}> 본인명의의 휴대전화번호를 입력해주세요. </p>
                                    <div className={styles.phone_select_box}>
                                        <div className={styles.select_box}>
                                            <select title="휴대전화 통신사 선택">
                                                <option value="01"> SKT </option>
                                                <option value="02"> KT </option>
                                                <option value="03"> LG U+ </option>
                                                <option value="04"> SKT 알뜰폰 </option>
                                                <option value="05"> KT 알뜰폰 </option>
                                                <option value="06"> LG U+ 알뜰폰 </option>
                                            </select>
                                        </div>
                                        <div className={styles.input_box}>
                                            <input id="phone" name='phone' maxLength={11} type="tel"
                                                placeholder='-없이 휴대폰 번호 입력'
                                                onChange={(e) => handleOnChange(e, certData, setCertData)} />

                                        </div>
                                    </div>
                                    <p className={styles.error_txt}>
                                    </p>
                                </div>
                            </div>
                            <div className={styles.terms_agree_box}>
                                <div className={styles.agree_form_box}>
                                    <h3 className={styles.tit}> 휴대전화 인증 약관 </h3>
                                    <div className={styles.agree_all_chk}>
                                        <div className={styles.chk_box}>
                                            <input id="agreeAllChk" type="checkbox" />
                                            <label htmlFor="agreeAllChk">모든 약관에 동의합니다.</label>
                                        </div>
                                    </div>
                                    <ul className={styles.agree_list}>
                                        <li className={styles.agree_form}>
                                            <div className={styles.chk_box}>
                                                <input id="agree00" type="checkbox" className={styles.check_list_js} />
                                                <label htmlFor="agree00">
                                                    <span className={styles.in_box}>[필수] 휴대전화 인증 서비스 이용약관</span>
                                                </label>
                                            </div>
                                            <button className={styles.agree_show}>
                                                <span>내용보기</span>
                                            </button>
                                        </li>
                                        <li className={styles.agree_form}>
                                            <div className={styles.chk_box}>
                                                <input id="agree01" type="checkbox" className={styles.check_list_js} />
                                                <label htmlFor="agree01">
                                                    <span className={styles.in_box}>[필수] 고유식별정보 처리 동의</span>
                                                </label>
                                            </div>
                                            <button className={styles.agree_show}>
                                                <span>내용보기</span>
                                            </button>
                                        </li>
                                        <li className={styles.agree_form}>
                                            <div className={styles.chk_box}>
                                                <input id="agree02" type="checkbox" className={styles.check_list_js} />
                                                <label htmlFor="agree02">
                                                    <span className={styles.in_box}>[필수] 통신사 이용약관 동의</span>
                                                </label>
                                            </div>
                                            <button className={styles.agree_show}>
                                                <span>내용보기</span>
                                            </button>
                                        </li>
                                        <li className={styles.agree_form}>
                                            <div className={styles.chk_box}>
                                                <input id="agree03" type="checkbox" className={styles.check_list_js} />
                                                <label htmlFor="agree03">
                                                    <span className={styles.in_box}>[필수] 개인정보 수집/이용동의</span>
                                                </label>
                                            </div>
                                            <button className={styles.agree_show}>
                                                <span>내용보기</span>
                                            </button>
                                        </li>
                                        <li className={styles.agree_form} style={{ display: 'none' }}>
                                            <div className={styles.chk_box}>
                                                <input id="agree04" type="checkbox" className={styles.add_check_list_js} />
                                                <label htmlFor="agree04">
                                                    <span className={styles.in_box}>[필수] 제 3자 정보제공동의</span>
                                                </label>
                                            </div>
                                            <button className={styles.agree_show}>
                                                <span>내용보기</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.tab_box1}>
                                <div className={styles.btn_box}>
                                    <button className={styles.btn_primary}
                                        onClick={(e) => {
                                            handleLocalStorage(certData.name, certData.phone);
                                            handleCertification();
                                        }}> 인증번호 요청 </button>
                                    {/* <button className={styles.btn_primary}
                                        onClick={() => {
                                            test();
                                        }}> 인증번호 요청 </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.notice_box}>
                <h3 className={styles.tit}>[유의사항]</h3>
                <ul className={styles.list_cnt}>
                    <li>본인 명의의 인증 수단 정보를 정확히 입력해 주세요.</li>
                    <li>법인명의 휴대전화(법인폰)는 통신사에서 본인인증 서비스 신청 후 휴대폰 인증을 하실 수 있습니다.</li>
                    <li>개명하신 회원님의 경우 통신사 등에 등록된 본인인증 정보가 개명하신 이름으로 바뀐 이후부터 자동으로 변경됩니다.</li>
                    <li>인증 오류 시 코리아크레딧뷰로 고객센터 02-708-1000에 문의해 주세요.</li>
                </ul>
            </div>
            {/* </form> */}
        </div>


    )
}
