import { createContext, useContext, useState, useEffect } from "react";
import { reclamos as defaultReclamos, tiposServicios as defaultTiposServicios} from "@/lib/reclamos";


const ReclamosContext = createContext();

export function ReclamosProvider({ children }) {

  const [reclamos, setReclamos] = useState([]);
  const [tiposServicios, setTiposServicios] = useState([]);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const savedReclamos = window.localStorage.getItem("mis_reclamos");
    const savedTiposServicios = window.localStorage.getItem("mis_tipos_servicios");

    if (savedReclamos) {
      setReclamos(JSON.parse(savedReclamos));
    } else {
      window.localStorage.setItem("mis_reclamos", JSON.stringify(defaultReclamos));
      setReclamos(defaultReclamos);
    }

    if (savedTiposServicios) {
      setTiposServicios(JSON.parse(savedTiposServicios));
    } else {
      window.localStorage.setItem("mis_tipos_servicios", JSON.stringify(defaultTiposServicios));
      setTiposServicios(defaultTiposServicios);
    }
  }, [])

  const saveReclamos = (newReclamos) => {
    setReclamos(newReclamos);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("mis_reclamos", JSON.stringify(newReclamos));
    }
  }

  const saveTiposServicios = (newTiposServicios) => {
    setTiposServicios(newTiposServicios);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("mis_tipos_servicios", JSON.stringify(newTiposServicios));
    }
  }

  const addReclamo = (reclamo) => {
    const newReclamo ={
      ...reclamo,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString().split("T")[0],
    }
    const newReclamos = [...reclamos, newReclamo];
    saveReclamos(newReclamos);
  }

  const updateReclamo = (id, updatedFields) => {
    const updatedReclamos = reclamos.map(reclamo =>
      String(reclamo.id) === String(id) ? { ...reclamo, ...updatedFields } : reclamo
    );
    saveReclamos(updatedReclamos);
  } 

  const deleteReclamo = (id) => {
    const filteredReclamos = reclamos.filter(reclamo => reclamo.id !== id);
    saveReclamos(filteredReclamos);
  } 

  const addTipoServicio = (tipoServicio) => {
    const newTipoServicio = {
      id: crypto.randomUUID(),
      nombre
    }
    saveTiposServicios([...tiposServicios, newTipoServicio]);
  }

  const getReclamoById = (id) => reclamos.find(reclamo => String(reclamo.id) === String(id))

  const getDynamicTiposServicios = () => {
    return tiposServicios.map(tipo => ({
      ...tipo,
      reclamos: reclamos.filter(reclamo => String(reclamo.tipo_servicio_id) === String(tipo.id))
    }))
  }

  if (!isMounted) return null;

  return (  
    <ReclamosContext.Provider value={{
      reclamos,
      tiposServicios, 
      addReclamo,
      updateReclamo,
      deleteReclamo,
      addTipoServicio,
      getReclamoById,
      getDynamicTiposServicios
    }}>
      {children}
    </ReclamosContext.Provider>
  )
}

export const useReclamos = () => useContext(ReclamosContext);
