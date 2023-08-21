import React from 'react'

export default function CertPage() {
    return (
        <div>
            <div className="auth_tab">
                <ul role="tablist" className="auth_tab_menu">
                    <li role="presentation" className="on">
                        <a href="javascript:void(0)" role="tab" aria-selected="true" className="phone">휴대폰인증
                            <span className="hidden">선택됨</span>
                        </a>
                    </li>
                    <li role="presentation" className="">
                        <a href="javascript:void(0)" role="tab" aria-selected="false" className="card">카드인증 
                        </a>
                    </li>
                </ul>
                <div className="auth_tab_content">
                    <div className="tab_cnt">
                        <h3 className="hidden">휴대폰인증</h3>
                        <div>
                            <div className="tab_box0">
                                <div className="form_box">
                                    <p className="tit"> 이름을 입력해 주세요. </p>
                                    <div className="input_box">
                                        <input id="name00" type="text" title="회원가입을 위해 입력해주세요." />
                                            <label for="name00"><span className="in_box">이름 입력</span>
                                            </label>
                                    </div>
                                    <p className="error_txt">
                                    </p>
                                </div>
                                <div className="form_box"><p className="tit"> 성별을 선택해주세요.
                                </p>
                                    <div className="radio_group_box col2">
                                        <div className="radio_box">
                                            <input id="radio00" type="radio" name="radioName00" value="M" />
                                                <label for="radio00">남자</label>
                                        </div>
                                        <div className="radio_box">
                                            <input id="radio01" type="radio" name="radioName00" value="F" />
                                                <label for="radio01">여자</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form_box">
                                    <p className="tit"> 외국인 이신가요?
                                    </p>
                                    <div className="radio_group_box col2">
                                        <div className="radio_box">
                                            <input id="radio10" type="radio" name="radioName10" value="L" />
                                                <label for="radio10">내국인</label>
                                        </div><div className="radio_box">
                                            <input id="radio11" type="radio" name="radioName10" value="F" />
                                                <label for="radio11">외국인</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form_box"><p className="tit"> 생년월일을 입력해주세요.
                                    <em>(예: 19990101)</em>
                                </p>
                                    <div className="input_box">
                                        <input id="birthday00" type="tel" />
                                            <label for="birthday00">
                                                <span className="in_box">법정생년월일 8자리</span>
                                            </label>
                                    </div>
                                    <p className="error_txt">
                                    </p>
                                </div>
                                <div className="form_box">
                                    <p className="tit"> 본인명의의 휴대전화번호를 입력해주세요. </p>
                                    <div className="phone_select_box">
                                        <div className="select_box">
                                            <select title="휴대전화 통신사 선택">
                                                <option value="01"> SKT </option>
                                                <option value="02"> KT </option>
                                                <option value="03"> LG U+ </option>
                                                <option value="04"> SKT 알뜰폰 </option>
                                                <option value="05"> KT 알뜰폰 </option>
                                                <option value="06"> LG U+ 알뜰폰 </option>
                                            </select>
                                        </div>
                                        <div className="input_box">
                                            <input id="phone00" maxlength="11" type="tel" />
                                                <label for="phone00">
                                                    <span className="in_box">-없이 휴대폰 번호 입력</span>
                                                </label>
                                        </div>
                                    </div>
                                    <p className="error_txt">
                                    </p>
                                </div>
                            </div>
                            <div className="terms_agree_box">
                                <div className="agree_form_box">
                                    <h3 className="tit"> 휴대전화 인증 약관 </h3>
                                    <div className="agree_all_chk">
                                        <div className="chk_box">
                                            <input id="agreeAllChk" type="checkbox" />
                                                <label for="agreeAllChk">모든 약관에 동의합니다.</label>
                                        </div>
                                    </div>
                                    <ul className="agree_list">
                                        <li className="agree_form">
                                            <div className="chk_box">
                                                <input id="agree00" type="checkbox" className="check_list_js" />
                                                    <label for="agree00">
                                                        <span className="in_box">[필수] 휴대전화 인증 서비스 이용약관</span>
                                                    </label>
                                            </div>
                                            <button className="agree_show">
                                                <span>내용보기</span>
                                            </button>
                                        </li>
                                        <li className="agree_form">
                                            <div className="chk_box">
                                                <input id="agree01" type="checkbox" className="check_list_js" />
                                                    <label for="agree01">
                                                        <span className="in_box">[필수] 고유식별정보 처리 동의</span>
                                                    </label>
                                            </div>
                                            <button className="agree_show">
                                                <span>내용보기</span>
                                            </button>
                                        </li>
                                        <li className="agree_form">
                                            <div className="chk_box">
                                                <input id="agree02" type="checkbox" className="check_list_js" />
                                                    <label for="agree02">
                                                        <span className="in_box">[필수] 통신사 이용약관 동의</span>
                                                    </label>
                                            </div>
                                            <button className="agree_show">
                                                <span>내용보기</span>
                                            </button>
                                        </li>
                                        <li className="agree_form">
                                            <div className="chk_box">
                                                <input id="agree03" type="checkbox" className="check_list_js" />
                                                    <label for="agree03">
                                                        <span className="in_box">[필수] 개인정보 수집/이용동의</span>
                                                    </label>
                                            </div>
                                            <button className="agree_show">
                                                <span>내용보기</span>
                                            </button>
                                        </li>
                                        <li className="agree_form" style="display: none;">
                                            <div className="chk_box">
                                                <input id="agree04" type="checkbox" className="add_check_list_js" />
                                                    <label for="agree04">
                                                        <span className="in_box">[필수] 제 3자 정보제공동의</span>
                                                    </label>
                                            </div>
                                            <button className="agree_show">
                                                <span>내용보기</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tab_box1">
                                <div className="btn_box">
                                    <button className="btn_primary"> 인증번호 요청 </button>
                                </div>
                                <div className="form_box" style="display: none;">
                                    <p className="tit"> 인증번호 </p>
                                    <div className="input_btn_box">
                                        <div className="input_box">
                                            <input id="certification00" type="number" maxlength="6">
                                                <label for="certification00">
                                                    <span className="in_box">인증번호 입력</span>
                                                </label>
                                        </div>
                                        <div className="btn_box">
                                            <button className="btn2"> 확인 </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="mobileCertAgreePopup" className="layer_popup">
                                
                                <div>
                                </div>
                                <div className="dimed">
                                </div>
                            </div>
                            <div id="alertPopupcommonAlert" className="alert_popup">
                                <div className="layer">
                                    <div className="pop_contents">
                                        
                                        <p className="alert_txt">
                                        </p>
                                    </div>
                                    <div className="btn_box">
                                        <button className="btn0">확인</button>
                                    </div>
                                </div>
                                <div className="dimed">
                                </div>
                            </div>
                            <div id="alertPopupresetAlert" className="alert_popup">
                                <div className="layer">
                                    <div className="pop_contents">
                                        <p className="alert_txt">
                                        </p>
                                    </div>
                                    <div className="btn_box">
                                        <button className="btn0">확인</button>
                                    </div>
                                </div>
                                <div className="dimed">
                                </div>
                            </div>
                        </div>
                    </div></div>
                <div id="alertPopupcertAlert" className="alert_popup">
                    <div className="layer">
                        <div className="pop_contents">
                            <p className="alert_txt"></p>
                        </div>
                        <div className="btn_box">
                            <button className="btn0">확인</button>
                        </div>
                    </div>
                    <div className="dimed">
                    </div>
                </div>
                <div id="alertPopupmobileResetAlert" className="alert_popup">
                    <div className="layer">
                        <div className="pop_contents">
                            <p className="alert_txt"></p>
                        </div>
                        <div className="btn_box">
                            <button className="btn0">확인</button>
                        </div>
                    </div>
                    <div className="dimed">
                    </div>
                </div>
                <div id="alertPopupmobileRetryAlert" className="alert_popup">
                    <div className="layer">
                        <div className="pop_contents">
                            <p className="alert_txt"></p>
                        </div>
                        <div className="btn_box">
                            
                            <button className="btn0">확인</button>
                        </div>
                    </div>
                    <div className="dimed">
                    </div>
                </div>
            </div>
        </div>
    )
}
