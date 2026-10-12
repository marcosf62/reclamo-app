"use client"
import Aside from "@/app/components/Aside";
import { useReclamos, ReclamosProvider } from "./ReclamosContext";  



function LayoutContent ({ children }) {
  const {getDynamicTiposServicios} = useReclamos();
  const tipos = getDynamicTiposServicios();

  return (
    <div className="flex flex-1 bg-zinc-900">
      <Aside tipos={tipos} />
      {children}
    </div>
  )
}

export default function ReaclamosLayout({ children }) {
  return (
    <ReclamosProvider>
      <LayoutContent>{children}</LayoutContent>
    </ReclamosProvider>
  )
}

