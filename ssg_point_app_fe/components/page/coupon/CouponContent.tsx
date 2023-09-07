import React from 'react'
import style from './Coupon.module.css'
import CouponShowBarcode from './CouponShowBarcode'

export default function CouponContent() {

  return (
    <li>
        <div className={style.coupon_headline}>
            <div className={style.coupon_point_box}>
                <img src="https://mycloudmembership-prd.s3.ap-northeast-2.amazonaws.com/shinsegaepoint/public/cpon/2023/08/28/20230828/7fb56e1c-520c-45f3-9afe-50792262b978.png" alt="쿠폰 네모 이미지" />
            </div>
            <img src="https://m.shinsegaepoint.com/static/brand/images/logo/M0004.png" alt="쿠폰 제휴사 이미지" className={style.brand_img} />
        </div>
        <div className={style.coupon_content}>
            <p className={style.cnt_desc}>매장명</p>
            <p className={style.cnt_tit}>쿠폰명</p>
            <p className={style.cnt_term}>
                날짜
                <span className={style.cnt_remaining}>남은날짜</span>
            </p>
            <div className={style.franchisee_barcode}>
                <div className={style.coupon_btn_wrap}>
                    <div className={style.img_box}>
                        <img src="	https://m.shinsegaepoint.com/static/brand/images/coupon/B200003370.png" alt="쿠폰제휴사 원형이미지" className={style.franchisee_img}/>
                    </div>
                    <CouponShowBarcode/>
                </div>
            </div>
        </div>
    </li>
  )
}
