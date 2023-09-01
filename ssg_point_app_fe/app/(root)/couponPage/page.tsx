
import React from 'react'
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation";
import { options } from '@/app/api/auth/[...nextauth]/options';


export default async function page() {

  const session = await getServerSession(options)

  if (!session) {
     redirect('/api/auth/signin?callbackUrl=/couponPage')
  }
  return (
    <div>
      <h1>asds</h1>
      
    </div>
  )
}
