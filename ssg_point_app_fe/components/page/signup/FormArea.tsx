import React from 'react'
import styles from './FormArea.module.css'
import Link from 'next/link'

export default function FormArea() {
    return (
        <div>
            <div className={styles.cnt_box0}>
                <div className={`${styles.form_box} ${styles.required}`}>
                    <p className={styles.tit}> 아이디<span className="hidden">필수항목</span></p>
                    <div className={styles.input_btn_box}>
                        <div className={styles.input_box}>
                            <input type="email" id="id00" title="회원 가입을 위한 아이디 입력"  />
                            <label htmlFor="id00">
                                <span className={styles.in_box}>영문, 숫자 6~20자리 입력해주세요.</span></label>
                        </div>
                        <div className={styles.btn_box}>
                            <button className={styles.btn2}> 중복확인 </button>
                        </div>
                    </div>
                    <p className={styles.error_txt}> 아이디 형식에 맞게 입력해주세요. </p>
                </div>
                <div className={`${styles.form_box} ${styles.required}`}>
                    <p className={styles.tit}> 비밀번호 <span className="hidden">필수항목</span></p>
                    <div className={styles.input_box}>
                        <input type="password" id="pw00" title="회원 가입을 위한 비밀번호 입력"  />
                        <label htmlFor="pw00"><span className={styles.in_box}>영문 대/소문자, 숫자, 특수문자 중 3가지 이상을 조합하여 8-20자리로 입력해 주세요.</span></label>
                    </div>
                    <p className={styles.error_txt}> 비밀번호 형식에 맞게 입력해주세요. </p>
                </div>
                <div className={`${styles.form_box} ${styles.required}`}>
                    <p className={styles.tit}> 비밀번호 확인 
                    <span className="hidden">필수항목</span></p>
                    <div className={styles.input_box}>
                        <input type="password" id="pw01"  />
                        <label htmlFor="pw01"><span className={styles.in_box}>입력하신 비밀번호를 다시 한번 입력해주세요.</span></label>
                    </div>
                    <p className={styles.error_txt}> 비밀번호가 일치하지 않습니다. </p>
                </div>
                <div className={`${styles.form_box} ${styles.required}`}>
                    <p className={styles.tit}> 이름 <span className="hidden">필수항목</span></p>
                    <div className={styles.input_box}>
                        <input type="text" id="name00" title="이름" readOnly className={styles.readonly_bg} />
                        <label htmlFor="name00"><span className={styles.in_box}>이름 입력</span></label>
                    </div>
                </div>
                <div className={`${styles.form_box} ${styles.required}`}>
                    <p className={styles.tit}> 휴대폰번호 <span className="hidden">필수항목</span></p>
                    <div className={styles.input_box}>
                        <input type="text" id="phone00" title="휴대폰번호" readOnly className={styles.readonly_bg} />
                        <label htmlFor="phone00"><span className={styles.in_box}>휴대폰 번호 입력</span></label>
                    </div>
                </div>
                <div className={`${styles.form_box} ${styles.required}`}>
                    <p className={styles.tit}> 자택주소 <span className="hidden">필수항목</span></p>
                    <div className={styles.input_address_box}>
                        <div className={`${styles.input_btn_box} ${styles.w_type2}`}>
                            <div className={styles.input_box}>
                                <input type="text" id="address00" readOnly />
                                <label htmlFor="address00" className="">                                    
                                <span className={styles.in_box}>우편번호</span>
                                </label>
                            </div>
                            <div className={styles.btn_box}>
                                <button className={styles.btn2}> 우편번호 찾기 </button>
                            </div>
                        </div>
                        <div className={`${styles.input_box} mb-2`}>
                            <input type="text" id="address01" readOnly />
                            <label htmlFor="address01" className={styles.hide}>
                                <span className={styles.in_box}>주소</span>
                            </label>
                        </div>
                        <div className={styles.input_box}>
                            <input type="text" id="address02" readOnly />
                            <label htmlFor="address02">
                                <span className={styles.in_box}>상세주소</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.terms_agree_box}>
                <div className={styles.agree_form_box}>
                    <ul className={`${styles.agree_list} ${styles.btn_type0} ${styles.txt_type0}`}>
                        <li className={`${styles.agree_form} ${styles.join_agree}`}>
                            <div className={styles.chk_box}>
                                <input type="checkbox" id="terms0" value="104001704" />
                                <label htmlFor="terms0">[선택] 혜택제공 및 분석을 위한 개인정보 수집 및 이용 동의</label>
                            </div>
                            <button className={styles.agree_show}><span>내용보기</span></button>
                        </li>
                        <li className={`${styles.agree_form} ${styles.join_agree}`}>
                            <div className={styles.chk_box}>
                                <input type="checkbox" id="terms1" value="104001705" />
                                <label htmlFor="terms1">[선택] 이마트/신세계 공동 개인정보 수집 및 이용 동의</label>
                            </div>
                            <button className={styles.agree_show}><span>내용보기</span></button>
                        </li>
                    </ul>
                    <div className={styles.agree_sub_box}>
                        <p className={styles.add_info_agree_tit}> 신세계포인트 광고정보 수신동의 </p>
                        <div className={`${styles.chk_box} ${styles.simple}`}>
                            <input id="receveAllspoint" type="checkbox" value="0" />
                            <label htmlFor="receveAllspoint">전체동의</label>
                        </div>
                        <div className={`${styles.chk_group_box} ${styles.col_f}`}>
                            <div className={`${styles.chk_box} ${styles.simple}`}>
                                <input id="recevespoint0" type="checkbox" value="email" />
                                <label htmlFor="recevespoint0">이메일</label>
                            </div>
                            <div className={`${styles.chk_box} ${styles.simple}`}>
                                <input id="recevespoint1" type="checkbox" value="sms" />
                                <label htmlFor="recevespoint1">문자</label>
                            </div>
                            <div className={`${styles.chk_box} ${styles.simple}`}>
                                <input id="recevespoint2" type="checkbox" value="dm" />
                                <label htmlFor="recevespoint2">DM</label>
                            </div>
                            <div className={`${styles.chk_box} ${styles.simple}`}>
                                <input id="recevespoint3" type="checkbox" value="tm" />
                                <label htmlFor="recevespoint3">TM</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.add_info_agree_txt}>
                <p>
                    당사, 관계사, 신세계포인트 제휴사가 제공하는 상품 및 서비스 홍보, 소식지 제공, 이벤트 정보 제공(할인 쿠폰, 포인트 추가 적립, 상품 할인 포함), 제휴행사를 안내해 드립니다. 수신동의 변경은 신세계포인트 고객센터 및 홈페이지(www.shinsegaepoint.com)에서 가능합니다.
                    <br />
                    ※ 서비스 주요 정책 및 공지사항 안내 등은 수신동의 여부와 관계없이 발송됩니다.
                </p>
            </div>

            <div className={styles.cnt_box2}>
                <div className={styles.btn_box}>
                    <Link href="" className={styles.btn_primary}>확인</Link>
                </div>
            </div>

            <div className={styles.notice_box}>
                <h3 className={styles.tit}>[유의사항]</h3>
                <ul className={styles.list_cnt}>
                    <li>아이디는 영문 소문자, 숫자를 조합하여 6-20자리로 입력해 주세요.</li>
                    <li>비밀번호는 영문 대/소문자, 숫자, 특수문자 중 3가지 이상을 조합하여 8-20자리로 입력해 주세요.</li>
                    <li>아이디와 동일한 비밀번호는 사용하실 수 없습니다.</li>
                    <li>생년월일, 전화번호와 동일하거나 일부를 포함한 비밀번호는 사용하실 수 없습니다.</li>
                    <li>3글자 이상의 동일한 숫자/문자 또는 연속된 숫자/문자, 키보드 상 연속된 배열의 문자는 입력하실 수 없습니다.</li>
                    <li>개명하신 회원님의 경우 통신사 등에 등록된 본인인증 정보가 개명하신 이름으로 바뀐 이후부터 자동으로 변경됩니다.</li>
                    <li>본인인증을 통해 확인된 정보는 수정하실 수 없습니다.</li>
                </ul>
            </div>

        </div>
    )
}
