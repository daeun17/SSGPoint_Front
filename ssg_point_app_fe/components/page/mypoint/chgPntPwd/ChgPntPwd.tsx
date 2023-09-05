"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import React from 'react'
import style from './ChgPntPwd.module.css'

export default function ChgPntPwd() {
    const [PointPw1, setPointPw1] = useState<string>("")
    const [PointPw2, setPointPw2] = useState<string>("")
    const [PointlastPw,setPointlastPw] = useState<string>("")

    const PointPw1handler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPointPw1(e.target.value)
    }
    const PointPw2handler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPointPw2(e.target.value)
    }

    const router = useRouter();
    const session = useSession();
    const PointPwChHandler = (e:React.DOMAttributes<HTMLButtonElement>) => {
        console.log(PointPw1,PointPw2)
        if(PointPw1 === PointPw2) {
            setPointlastPw(PointPw1)
        }else{
            console.log("error")
        }

    }
    // useEffect(()=>{
    //     const postData = async() => {
    //         await fetch("https://smilekarina.duckdns.org/api/v1/user/pointpwdChg",
    //             {
    //                 method : "PATCH",
    //                 mode: 'no-cors', 
    //                 headers : {
    //                     "Authorization" : session.data ? session.data.user.token : console.log("error1")
    //                 },
    //                 body : JSON.stringify({pointPassword: PointlastPw})
    //             })
    //             .then(res => res.json())
    //             .then(result => result.success ? console.log("성공") :console.log(result.code))

    //     }
    //     postData()
    //     router.push("/mypoint/cardManage")

    // },[PointlastPw])
    
    return (
        <>
        <div className='top_cnt1'>
            <p className='sp_tit2'>포인트 비밀번호 변경</p>
        </div>
        <div className={style.cnt_box0}>
            <div className={style.form_container}>
            <div className={style.form_box_required}>
                <p className={style.tit}> 포인트 비밀번호 입력</p>
                <div className={style.input_box}>
                <input type="password"  id='pointPw1' maxLength={4} datatype='number' onChange={(e)=>PointPw1handler}/>
                <label htmlFor="pointPw" id='pointPwlabel'className={style.hide}>
                    <span className={style.in_box}>숫자 4자리를 입력하세요</span>
                </label>
                </div>
            </div>
            <div className={style.form_box_required}>
                <p className={style.tit}> 포인트 비밀번호 확인</p>
                <div className={style.input_box}>
                <input type="password"  id='pointPw2' maxLength={4} datatype='number' onChange={(e)=>PointPw2handler}/>
                <label htmlFor="pointPw" id='pointPwlabel'className={style.hide}>
                    <span className={style.in_box}>숫자 4자리를 입력하세요</span>
                </label>
                </div>
            </div>
            <div className={style.btn_box}>
                <button className={style.btn_primary} onClick={(e) => {PointPwChHandler}}>변경하기</button>
                {/* 포인트 카드관리로 리다이렉트 */}
            </div>
            </div>
        </div>
        </>
    )
}
