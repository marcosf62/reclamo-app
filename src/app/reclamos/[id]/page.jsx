import Link from 'next/link'
import React from 'react'

export default async function page({params}) {

    const { id } = await params

     
    const reclamo =
    {
        id: 1,
        descripcion: "Corte de luz",
        tipo: "Electricidad",
        estado: "Pendiente"
    }
    
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                    {reclamo.tipo}
                </h1>
                </div>

                <p className='text-justify'>
                Reclamo nuemro: {id}
                </p>

                {/* Ejemplo de como funcionan los arrays */}
                <section className='w-full h-64 my-8 p-4 rounded-lg flex flex-col bg-zinc-800 text-white justify-between'>
                <p className='text-lg font-semibold'>Ejemplo Arrays</p>
                <pre className='text-sm text-white bg-black rounded p-2'>
                    <code >
                    {`
        [
        {id: 1, title: "Nota 1", content: "Contenido de la nota 1"},
        {id: 2, title: "Nota 2", content: "Contenido de la nota 2"},
        {id: 3, title: "Nota 3", content: "Contenido de la nota 3"},
        ]
                    `}
                    </code>
                </pre>
                </section>

            </main>
        </div>

    )
}