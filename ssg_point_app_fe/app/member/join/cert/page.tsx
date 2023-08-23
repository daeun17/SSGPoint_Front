import React from 'react'
import styles from './styles.module.css';
import Step from '@/components/page/signup/step/Step';
import CertPage from '@/components/page/cert/CertPage';

export default function Cert() {
    return (
        <div>
            <Step step={1}/>
            <CertPage />
        </div>
    )
}
