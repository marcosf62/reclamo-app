"use client"
import { useState, useEffect } from "react";
import { useReclamos } from "../reclamos/ReclamosContext";

import Link from "next/link";

function TipoServicioSection({ tipoServicio }) {

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex cursor-pointer items-center gap-2'
      >
        <h1 className='text-2xl font-semibold hover:text-zinc-500'>
          {tipoServicio.nombre}
        </h1>
        <svg width="16" height="16" fill="currentColor" className={`bi bi-caret-down-fill ${isOpen ? "rotate-180" : "rotate-0"}`} viewBox="0 0 16 16">
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      </button>


      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <ul className=' overflow-hidden'>
          {tipoServicio.reclamos.map((subItem, index) => (
            <li key={index} className="pl-4 cursor-pointer transition-all duration-200 hover:scale-105">
              <Link href={`/reclamos/${subItem.id}`}> {subItem.titulo} </Link>
            </li>
          ))}
          {
            tipoServicio.reclamos.length === 0 && (
              <li className='text-sm text-zinc-400 p-3'>
                No hay reclamos aun...
              </li>
            )
          }
        </ul>
      </div>
    </div>
  )
}


export default function Aside({ tipos }) {

  const { addTipoServicio } = useReclamos()
  const [newTipo, setNewTipo] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const handleAddTipoServicio = (e) => {
    e.preventDefault()
    if (!newTipo) return;
    addTipoServicio(newTipo)
  }

  const filteredData = tipos.map(tipoServicio => {
    const filteredReclamos = tipoServicio.reclamos.filter(reclamo =>
      reclamo.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reclamo.descripcion.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...tipoServicio, reclamos: filteredReclamos }
  }).filter(tipoServicio =>
    tipoServicio.reclamos.length > 0 ||
    tipoServicio.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside className="w-72 py-8 px-6 border-r border-zinc-700">
      <div>
        <h1 className="text-4xl font-bold">Reclamos</h1>
        <p>Todos nuestros reclamos</p>
      </div>

      <div className='relative w-full my-4'>

        <svg width="16" height="16" fill="currentColor" className="bi bi-search absolute left-3 top-3 text-zinc-400" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='Buscar reclamos...'
          className=' focus:outline-none p-2 focus:ring-2 ring-green-400 rounded pl-9 bg-zinc-600'
        />
      </div>

      <div className="space-y-6 mt-8">
        {filteredData.map((item, index) => (
          <div className="border-b pb-6 border-zinc-700" key={index}>
            <TipoServicioSection tipoServicio={item} />
          </div>
        ))}
      </div>


      <form
        className='mt-8 pt-8'
        onSubmit={handleAddTipoServicio}
      >

        <label className='text-sm text-zinc-400'>Agregar Categoría</label>
        <div className='flex gap-2'>
          <input
            type="text"
            value={newTipo}
            onChange={(e) => setNewTipo(e.target.value)}
            placeholder='Ej: Obras...'
            className='focus:outline-none p-2 focus:ring-2 ring-green-400 rounded bg-zinc-600'
          />
          <button className='p-2 bg-zinc-600 rounded'>
            +
          </button>
        </div>
      </form>


    </aside>
  )

};
