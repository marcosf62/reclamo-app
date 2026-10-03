import Link from 'next/link'

export default function ReclamosCard({ key, reclamo }) {
    return (
        <section className='w-full h-auto my-8 p-6 rounded-lg flex flex-col bg-zinc-800 text-white justify-between'>
            <div>
                <h1 className='font-semibold text-lg'>{reclamo.titulo}</h1>
                <p>{reclamo.descripcion}</p>
            </div>
            <Link href={`/reclamos/${reclamo.id}`} className='self- text-sm text-blue-500 hover:underline'>Ver Reclamo</Link>
        </section>
    )
};
