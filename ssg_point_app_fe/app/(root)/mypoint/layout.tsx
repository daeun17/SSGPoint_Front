import PageHeader from '@/components/layout/SubMenu'
import React from 'react'

export default function layout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <section>
      <PageHeader/>
      {children}
    </section>
  )
}
