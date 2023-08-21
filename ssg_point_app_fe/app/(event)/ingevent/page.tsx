
import EventList from '@/components/page/event/EventList';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default async function Ingevent() {
  return (
    <EventList />
  )
}

