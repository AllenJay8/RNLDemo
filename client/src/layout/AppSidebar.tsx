

import { Link } from "react-router-dom"
import  { useSidebar } from "../contexts/SidebarContext";


const AppSidebar = () => {
    const {isOpen, toggleSidebar} = useSidebar()

    const sidebarItems = [
        {
            path: "#",
            text: "Gender List",
        },
        {
            path: "#",
            text: "User List",
        },
    ]

    return (
        <>
            {isOpen && (
                <button
                    type="button"
                    aria-label="Close sidebar"
                    className="fixed inset-x-0 top-16 bottom-0 z-30 bg-gray-900/50 sm:hidden"
                    onClick={toggleSidebar}
                />
            )}
            <aside
                id="logo-sidebar"
                className={`fixed top-16 bottom-0 left-0 z-40 w-64 border-r border-gray-700 bg-gray-800 transition-transform duration-200 ease-in-out dark:border-gray-600 dark:bg-gray-800 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } sm:translate-x-0`}
                aria-label="Sidebar"
            >
                <div className="h-full overflow-y-auto px-3 py-4">
                    <ul className="space-y-2 font-medium">
                        {sidebarItems.map((sidebarItem) => (
                            <li key={sidebarItem.text}>
                                <Link
                                    to={sidebarItem.path}
                                    className="group flex items-center rounded-lg px-2 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                                >
                                    <span className="ms-3">{sidebarItem.text}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default AppSidebar