import GroupJoinArea from '@/components/page/signup/GroupJoinArea'
import UserInfoArea from '@/components/page/signup/UserInfoArea'
import Step from '@/components/page/signup/step/Step'
import React from 'react'


export default function Success() {
    return (
        <div>
            <Step step={4} title='가입완료'/>
            <UserInfoArea />   
            <GroupJoinArea /> 
        </div>
    )
}
