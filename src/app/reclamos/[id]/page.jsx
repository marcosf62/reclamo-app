"use client"
import { useReclamos } from '../ReclamosContext'
import { useParams, useRouter } from 'next/navigation'
import ReclamoDetail from '@/app/components/ReclamoDetail'
import React from 'react'

export default function Page() {

  const { id } = useParams()
  const { getReclamoById, deleteReclamo } = useReclamos()
  const reclamo = getReclamoById(id)

  const router = useRouter()

  const handleDelete = () => {
    if (confirm("¿Estás seguro de que deseas eliminar este reclamo?")) {
      router.push('/reclamos')
      setTimeout(() => deleteReclamo(id), 100);
    }
  }

  return (
    <div className="flex flex-1 items-start justify-center bg-zinc-50 font-sans dark:bg-black">
      <ReclamoDetail reclamo={reclamo} />

      <button onClick={handleDelete} className='absolute top-24 right-24 bg-red-500 text-white p-2 rounded-md cursor-pointer'>
        Delete Reclamo
      </button>
    </div>
  )
}