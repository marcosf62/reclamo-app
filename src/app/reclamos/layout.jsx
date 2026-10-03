import Link from "next/link";
import Aside from "@/app/components/Aside";
import { getTiposServicios } from "@/lib/reclamos";

export default function ReclamosLayout({ children }) {

  const tipos = getTiposServicios();

  return (
    <div className="flex flex-1 bg-zinc-900">
      <Aside tipos={tipos} />
      {children}
    </div>
  )
}
