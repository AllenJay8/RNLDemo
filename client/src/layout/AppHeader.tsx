import { Link } from "react-router-dom"
import { useHeader } from "../contexts/HeaderContext"
import { useSidebar } from "../contexts/SidebarContext"

const AppHeader = () => {
  const {isOpen, toggleUserMenu} = useHeader()
  const { toggleSidebar} = useSidebar()

  return (
    <> 
    {isOpen && (
      <div className="fixed inset-0 z-40" onClick={toggleUserMenu} />
    )}

        <nav className="fixed inset-x-0 top-0 z-50 flex h-16 shrink-0 border-b border-gray-700 bg-gray-800 dark:border-gray-600 dark:bg-gray-800">
  <div className="flex w-full min-w-0 items-center justify-between px-3 lg:px-5">
    <div className="flex min-w-0 flex-1 items-center justify-start gap-2 rtl:justify-end">
        <button 
        data-drawer-target="top-bar-sidebar" 
        data-drawer-toggle="top-bar-sidebar" 
        aria-controls="top-bar-sidebar" 
        type="button"
        onClick={toggleSidebar} 
        className="inline-flex shrink-0 rounded-lg p-2 text-gray-200 hover:bg-gray-700 focus:ring-4 focus:ring-gray-600 focus:outline-none sm:hidden"
        >
            <span className="sr-only">Open sidebar</span>
            <svg 
            className="h-6 w-6" 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" height="24" 
            fill="none" 
            viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10"/>
   </svg>
         </button>
        <a href="https://flowbite.com" className="flex min-w-0 items-center md:me-24">
          <img src="https://flowbite.com/docs/images/logo.svg" className="me-2 h-6 shrink-0 dark:brightness-0 dark:invert sm:me-3" alt="FlowBite Logo" />
          <span className="truncate text-lg font-semibold text-white">Flowbite</span>
        </a>
      </div>
      <div className="flex items-center">
          <div className="relative ms-3 flex items-center">
            <div>
              <button 
              type="button"
              onClick={toggleUserMenu} 
              className="flex rounded-full text-sm ring-2 ring-gray-600 focus:ring-4 focus:ring-gray-500 focus:outline-none" aria-expanded={isOpen} data-dropdown-toggle="dropdown-user">
                <span className="sr-only">Open user menu</span>
                <img className="h-8 w-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
              </button>
            </div>

            <div
              className={`absolute inset-e-0 top-full z-50 mt-2 min-w-44 rounded-lg border border-gray-600 bg-gray-700 shadow-lg ${isOpen ? "block" : "hidden"}`}
              id="dropdown-user"
            >
              <div className="border-b border-gray-600 px-4 py-3" role="none">
                <p className="text-sm font-medium text-white" role="none">
                  Neil Sims
                </p>
                <p className="truncate text-sm text-gray-300" role="none">
                  neil.sims@flowbite.com
                </p>
              </div>
              <ul className="p-2 text-sm font-medium text-gray-200" role="none">

                <li>
                  <Link to="#" className="inline-flex w-full items-center rounded p-2 hover:bg-gray-600 hover:text-white" role="menuitem">Sign out</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
</nav>

    
   
    </>
  )
}

export default AppHeader