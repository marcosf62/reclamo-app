export const tiposServicios = [
  {
    id: 1,
    nombre: "Electricidad"
  },
  {
    id: 2,
    nombre: "Agua potable"
  },
  {
    id: 3,
    nombre: "Cloacas"
  },
]

export const reclamos = [
  {
    id: "1",
    titulo: "Corte de luz",
    tipo_servicio_id: 1,
    descripcion: "El vecino informa que no tiene suministro eléctrico.",
    fecha_creacion: "2026-09-25",
    estado: "Pendiente",
  },
  {
    id: "2",
    titulo: "Pérdida de agua",
    tipo_servicio_id: 2,
    descripcion: "Se detecta una pérdida de agua en la vía pública.",
    fecha_creacion: "2026-09-25",
    estado: "En proceso",
  },
  {
    id: "3",
    titulo: "Desborde de cloacas",
    tipo_servicio_id: 3,
    descripcion: "Un vecino informa un desborde de líquidos cloacales.",
    fecha_creacion: "2026-09-25",
    estado: "Pendiente",
  },
  {
    id: "4",
    titulo: "Baja tensión",
    tipo_servicio_id: 1,
    descripcion: "El vecino informa problemas de baja tensión.",
    fecha_creacion: "2026-09-25",
    estado: "Resuelto",
  },
]

export const getReclamos = () => reclamos
export const getReclamoById = (id) =>
  reclamos.find((reclamo) => reclamo.id === id)

export const getTiposServicios = () => {
  return tiposServicios.map((tipo) => ({
    ...tipo, //spread operator para copiar todas las propiedades del objeto tipo
    reclamos: reclamos.filter((reclamo) => reclamo.tipo_servicio_id === tipo.id),
  }))
}