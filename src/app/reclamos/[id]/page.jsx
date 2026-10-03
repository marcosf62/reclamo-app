import Link from 'next/link'
import React from 'react'
import ReclamoDetail from '@/app/components/ReclamoDetail'
import { getReclamoById } from '@/lib/reclamos'

export default async function page({ params }) {

  const { id } = await params
  const reclamo = getReclamoById(id)


  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ReclamoDetail reclamo={reclamo} />
    </div>

  )
}