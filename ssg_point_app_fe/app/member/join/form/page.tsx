import React from 'react'
import Step from '@/components/page/signup/step/Step';
import FormArea from '@/components/page/signup/FormArea';

export default function Form() {
  return (
    <div>
        <Step step={3}/>
        <FormArea />
    </div>
  )
}
