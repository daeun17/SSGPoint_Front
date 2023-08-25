import React from 'react'
import Step from '@/components/page/signup/step/Step';
import FormArea from '@/components/page/signup/FormArea';

export default function Form() {
  return (
    <div>
        <Step 
          step={3}
          title={'정보입력'}  
          description='필수 정보를 정확하게 입력해주세요.'
        />
        <FormArea />
    </div>
  )
}
