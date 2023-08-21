import React from 'react'
import styles from './styles.module.css';
import Identification from '@/components/page/signup/step/Identification';
import CertPage from '@/components/page/cert/CertPage';

export default function Cert() {
    return (
        <div>
            <Identification />
            <CertPage />
        </div>
    )
}
