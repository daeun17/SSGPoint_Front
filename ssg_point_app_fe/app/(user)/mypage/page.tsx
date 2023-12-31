import { options } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import React from 'react'

export default async function page() {

  const session = await getServerSession(options)

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/mypage')
  }
  return (
    <div>page</div>
  )
}
