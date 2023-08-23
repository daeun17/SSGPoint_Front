import React from 'react'
import Step from '@/components/page/signup/step/Step';
import AgreeArea from '@/components/page/signup/AgreeArea';

export default function Agree() {
  return (
    <div>
        <Step step={2}/>
        <AgreeArea />
    </div>
  )
}
