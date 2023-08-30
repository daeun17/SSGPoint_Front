import CardBox from '@/components/page/mypoint/CardBox'
import React from 'react'
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation";
import { options } from '@/app/api/auth/[...nextauth]/options';

export default async function page() {

  const session = await getServerSession(options)

  if (!session) {
     redirect('/api/auth/signin?callbackUrl=/mypoint/pntHistory')
  }

  return (
    <div className='p-24'>
      <CardBox/>
    </div>
  )
}
