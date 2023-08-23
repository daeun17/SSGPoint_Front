import { HeaderMenuType } from "@/types/headerMenuType";


export const headerMenuDatas: HeaderMenuType[] = [
    {
        id: 1,
        name: "Home",
        url: "/"
    },
    {
        id: 2,
        name: "로그인",
        url: "/login"
    },
    {   
        id: 3,
        name: "쿠폰",
        url: "/couponPage"
    },
    {   
        id: 4,
        name: "회원가입",
        url: "/member/join"
    },
    {   
        id: 5,
        name: "회원가입 본인인증",
        url: "/member/join/cert"
    },
    {   
        id: 6,
        name: "회원가입 약관동의",
        url: "/member/join/agree"
    },
    {   
        id: 7,
        name: "회원가입 정보입력",
        url: "/member/join/form"
    },
];