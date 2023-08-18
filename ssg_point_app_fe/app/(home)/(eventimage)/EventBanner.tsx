import Image from 'next/image'
import React from 'react'

export default function EventBanner() {
  return (
    <div>
        <Image src={loadingimg} alt="loading" width={200} height={200} />
    </div>
  )
}
