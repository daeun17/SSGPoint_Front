import React from 'react'

export default function CertPage() {
    return (
        <div>
            <div class="auth_tab">
                <ul role="tablist" class="auth_tab_menu">
                    <li role="presentation" class="on">
                        <a href="javascript:void(0)" role="tab" aria-selected="true" class="phone">휴대폰인증
                            <span class="hidden">선택됨</span>
                        </a>
                    </li>
                    <li role="presentation" class="">
                        <a href="javascript:void(0)" role="tab" aria-selected="false" class="card">카드인증 <!---->
                        </a>
                    </li>
                </ul>
                <div class="auth_tab_content">
                    <div class="tab_cnt">
                        <h3 class="hidden">휴대폰인증</h3>
                        <div>
                            <div class="tab_box0"><!---->
                                <div class="form_box">
                                    <p class="tit"> 이름을 입력해 주세요. </p>
                                    <div class="input_box">
                                        <input id="name00" type="text" title="회원가입을 위해 입력해주세요.">
                                            <label for="name00"><span class="in_box">이름 입력</span>
                                            </label>
                                    </div>
                                    <p class="error_txt">
                                    </p>
                                </div>
                                <div class="form_box"><p class="tit"> 성별을 선택해주세요.
                                </p>
                                    <div class="radio_group_box col2">
                                        <div class="radio_box">
                                            <input id="radio00" type="radio" name="radioName00" value="M">
                                                <label for="radio00">남자</label>
                                        </div>
                                        <div class="radio_box">
                                            <input id="radio01" type="radio" name="radioName00" value="F">
                                                <label for="radio01">여자</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form_box">
                                    <p class="tit"> 외국인 이신가요?
                                    </p>
                                    <div class="radio_group_box col2">
                                        <div class="radio_box">
                                            <input id="radio10" type="radio" name="radioName10" value="L">
                                                <label for="radio10">내국인</label>
                                        </div><div class="radio_box">
                                            <input id="radio11" type="radio" name="radioName10" value="F">
                                                <label for="radio11">외국인</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form_box"><p class="tit"> 생년월일을 입력해주세요.
                                    <em>(예: 19990101)</em>
                                </p>
                                    <div class="input_box">
                                        <input id="birthday00" type="tel">
                                            <label for="birthday00">
                                                <span class="in_box">법정생년월일 8자리</span>
                                            </label>
                                    </div>
                                    <p class="error_txt">
                                    </p>
                                </div>
                                <div class="form_box">
                                    <p class="tit"> 본인명의의 휴대전화번호를 입력해주세요. </p>
                                    <div class="phone_select_box">
                                        <div class="select_box">
                                            <select title="휴대전화 통신사 선택">
                                                <option value="01"> SKT </option>
                                                <option value="02"> KT </option>
                                                <option value="03"> LG U+ </option>
                                                <option value="04"> SKT 알뜰폰 </option>
                                                <option value="05"> KT 알뜰폰 </option>
                                                <option value="06"> LG U+ 알뜰폰 </option>
                                            </select>
                                        </div>
                                        <div class="input_box">
                                            <input id="phone00" maxlength="11" type="tel">
                                                <label for="phone00">
                                                    <span class="in_box">-없이 휴대폰 번호 입력</span>
                                                </label>
                                        </div>
                                    </div>
                                    <p class="error_txt">
                                    </p>
                                </div>
                            </div>
                            <div class="terms_agree_box">
                                <div class="agree_form_box">
                                    <h3 class="tit"> 휴대전화 인증 약관 </h3>
                                    <div class="agree_all_chk">
                                        <div class="chk_box">
                                            <input id="agreeAllChk" type="checkbox">
                                                <label for="agreeAllChk">모든 약관에 동의합니다.</label>
                                        </div>
                                    </div>
                                    <ul class="agree_list">
                                        <li class="agree_form">
                                            <div class="chk_box">
                                                <input id="agree00" type="checkbox" class="check_list_js">
                                                    <label for="agree00">
                                                        <span class="in_box">[필수] 휴대전화 인증 서비스 이용약관</span>
                                                    </label>
                                            </div>
                                            <button class="agree_show">
                                                <span>내용보기</span>
                                            </button>
                                        </li>
                                        <li class="agree_form">
                                            <div class="chk_box">
                                                <input id="agree01" type="checkbox" class="check_list_js">
                                                    <label for="agree01">
                                                        <span class="in_box">[필수] 고유식별정보 처리 동의</span>
                                                    </label>
                                            </div>
                                            <button class="agree_show">
                                                <span>내용보기</span>
                                            </button>
                                        </li>
                                        <li class="agree_form">
                                            <div class="chk_box">
                                                <input id="agree02" type="checkbox" class="check_list_js">
                                                    <label for="agree02">
                                                        <span class="in_box">[필수] 통신사 이용약관 동의</span>
                                                    </label>
                                            </div>
                                            <button class="agree_show">
                                                <span>내용보기</span>
                                            </button>
                                        </li>
                                        <li class="agree_form">
                                            <div class="chk_box">
                                                <input id="agree03" type="checkbox" class="check_list_js">
                                                    <label for="agree03">
                                                        <span class="in_box">[필수] 개인정보 수집/이용동의</span>
                                                    </label>
                                            </div>
                                            <button class="agree_show">
                                                <span>내용보기</span>
                                            </button>
                                        </li>
                                        <li class="agree_form" style="display: none;">
                                            <div class="chk_box">
                                                <input id="agree04" type="checkbox" class="add_check_list_js">
                                                    <label for="agree04">
                                                        <span class="in_box">[필수] 제 3자 정보제공동의</span>
                                                    </label>
                                            </div>
                                            <button class="agree_show">
                                                <span>내용보기</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="tab_box1">
                                <div class="btn_box">
                                    <button class="btn_primary"> 인증번호 요청 </button>
                                </div>
                                <div class="form_box" style="display: none;">
                                    <p class="tit"> 인증번호 </p>
                                    <div class="input_btn_box">
                                        <div class="input_box">
                                            <input id="certification00" type="number" maxlength="6">
                                                <label for="certification00">
                                                    <span class="in_box">인증번호 입력</span>
                                                </label>
                                        </div>
                                        <div class="btn_box">
                                            <button class="btn2"> 확인 </button>
                                        </div>
                                    </div><!---->
                                </div>
                            </div>
                            <div id="mobileCertAgreePopup" class="layer_popup">
                                <!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
                                <div>
                                </div>
                                <div class="dimed">
                                    </div>
                                    </div>
                                    <div id="alertPopupcommonAlert" class="alert_popup">
                                        <div class="layer">
                                            <div class="pop_contents">
                                                <!---->
                                                <p class="alert_txt">
                                                    </p>
                                                    </div>
                                                    <div class="btn_box"><!----><!---->
                                                    <button class="btn0">확인</button>
                                                    </div>
                                                    </div>
                                                    <div class="dimed">
                                                        </div>
                                                        </div>
                                                        <div id="alertPopupresetAlert" class="alert_popup">
                                                            <div class="layer">
                                                                <div class="pop_contents"><!---->
                                                                <p class="alert_txt">
                                                                    </p>
                                                                    </div>
                                                                    <div class="btn_box"><!----><!---->
                                                                    <button class="btn0">확인</button>
                                                                    </div>
                                                                    </div>
                                                                    <div class="dimed">
                                                                        </div>
                                                                        </div>
                                                                        </div>
                                                                        </div><!----></div>
                                                                        <div id="alertPopupcertAlert" class="alert_popup">
                                                                            <div class="layer">
                                                                                <div class="pop_contents"><!---->
                                                                                <p class="alert_txt"></p>
                                                                                </div>
                                                                                <div class="btn_box"><!----><!---->
                                                                                <button class="btn0">확인</button>
                                                                                </div>
                                                                                </div>
                                                                                <div class="dimed">
                                                                                    </div>
                                                                                    </div>
                                                                                    <div id="alertPopupmobileResetAlert" class="alert_popup">
                                                                                        <div class="layer">
                                                                                            <div class="pop_contents"><!----><p class="alert_txt"></p></div><div class="btn_box"><!----><!----><button class="btn0">확인</button></div></div><div class="dimed"></div></div><div id="alertPopupmobileRetryAlert" class="alert_popup"><div class="layer"><div class="pop_contents"><!----><p class="alert_txt"></p></div><div class="btn_box"><!----><!----><button class="btn0">확인</button></div></div><div class="dimed"></div></div></div>
        </div>
    )
}
