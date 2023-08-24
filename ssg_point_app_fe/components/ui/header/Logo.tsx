import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Logo(props: { url: string, imgUrl: string, imgAlt: string }) {
    const { url, imgUrl, imgAlt } = props
    return (
        <div className='header_logo flex align-center'>
            <div className='ml-2 back_btn flex justify-center items-center'>
            <Link href={url} >
                <div className=' '>
                    <Image
                        src={imgUrl}
                        alt={imgAlt}
                        width={57}
                        height={36}
                        priority
                    />
                </div>
            </Link>
            </div>
        </div>
    )
}

export default Logo