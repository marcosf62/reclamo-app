import { getReclamos} from '@/lib/reclamos'
import Link from 'next/link'
import React from 'react'
import ReclamosCard from '../components/ReclamosCard';

export default function page() {

  const reclamos = getReclamos();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Reclamos
          </h1>
          <Link href={"/reclamos/create"} className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">
            Crear Reclamo
          </Link>
        </div>

        {reclamos.map((reclamo, key) => (
          <ReclamosCard key={key} reclamo={reclamo} />

        ))}
      </main>
    </div>
  )
}