import Link from "next/link";

export default function ReclamosLayout({ children }) {
  const tipos = [
    {
      id: 1,
      nombre: "Electricidad",
      reclamos: [
        { id: 101, descripcion: "Corte de luz" },
        { id: 102, descripcion: "Poste de luz apagado" },
      ],
    },
    {
      id: 2,
      nombre: "Agua potable",
      reclamos: [
        { id: 103, descripcion: "Baja presión de agua" },
        { id: 104, descripcion: "Pérdida de agua en la calle" },
      ],
    },
    {
      id: 3,
      nombre: "Cloacas",
      reclamos: [
        { id: 105, descripcion: "Cloaca desbordada" },
        { id: 106, descripcion: "Mal olor proveniente de cloaca" },
      ],
    },
    {
      id: 4,
      nombre: "Alumbrado público",
      reclamos: [
        { id: 107, descripcion: "Luminaria rota" },
        { id: 108, descripcion: "Alumbrado público sin funcionar" },
      ],
    },
  ]

  return (
    <div className="flex flex-1 bg-zinc-900">
      <aside className="w-72 border-r border-gray-100 bg-white px-6 py-8 pt-14 text-gray-800 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200">
        <div>
          <h1 className="text-4xl font-bold">Reclamos</h1>
          <p>Todos los reclamos</p>
        </div>

        <div className="space-y-6 mt-8">
          {tipos.map((tipo, index) => (
            <div className="border-b pb-6 border-zinc-700" key={index}>
              <h3 className="text-2xl font-semibold">
                {tipo.nombre}
              </h3>

              <ul>
                {tipo.reclamos.map((reclamo, index) => (
                  <li key={index} className="pl-4 cursor-pointer transition-all duration-200 hover:scale-105">
                    <Link href={`/reclamos/${reclamo.id}`}> {reclamo.descripcion} </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>

      {children}

    </div>
  )
}
