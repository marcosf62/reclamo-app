import Link from "next/link";


export default function NavBar() {
  return (
    <nav className="fixed top-0 z-9999 mx-auto w-full max-w-5xl border border-gray-100 bg-white/90 px-4 py-2 shadow backdrop-blur-lg backdrop-saturate-150 dark:border-gray-800 dark:bg-gray-900/90 lg:px-8 lg:py-3">
      <div className="container mx-auto flex flex-wrap items-center justify-between text-gray-800 dark:text-gray-200">
        <div>
          <ul className="flex gap-2 lg:items-center lg:gap-6">
            <li className="flex items-center p-1 text-sm">
              <Link
                href="/reclamos"
                className="flex items-center text-gray-700 transition hover:text-teal-600 dark:text-gray-200 dark:hover:text-teal-300"
              >
                Reclamos
              </Link>
            </li>

            <li className="flex items-center p-1 text-sm">
              <Link
                href="/ordenes"
                className="flex items-center text-gray-700 transition hover:text-teal-600 dark:text-gray-200 dark:hover:text-teal-300"
              >
                Órdenes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}