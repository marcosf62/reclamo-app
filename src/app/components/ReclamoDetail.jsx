import { tiposServicios } from '@/lib/reclamos'


export default function ReclamoDetail({ reclamo }) {

  const tipoServicio = tiposServicios.find(
    (tipo) => tipo.id === reclamo.tipo_servicio_id
  );

  return (
    <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          {tipoServicio?.nombre || 'Tipo de servicio no encontrado'}
        </h1>
      </div>

      <p className='text-justify'>
        {reclamo.titulo}
      </p>

      {/* Ejemplo de como funcionan los arrays */}
      <section className='w-full h-auto my-8 p-4 rounded-lg flex flex-col bg-zinc-800 text-white justify-between'>
        <pre className='text-sm text-white bg-black rounded p-2'>
          <code >
            {reclamo.descripcion}
          </code>
        </pre>
      </section>

    </main>
  )

};
