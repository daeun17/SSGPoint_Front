
import EventList from '@/components/page/event/EventList';
import Link from 'next/link'
import React from 'react'

export default async function Ingevent() {

  const resp = await fetch("http://localhost:9999/event/1");
  const event = await resp.json();
  

  return (
    <EventList/>
  )
}

