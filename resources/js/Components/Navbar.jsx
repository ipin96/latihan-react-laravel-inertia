import { useState } from "react";
import Sidebar from "./Sidebar";
import { GiNotebook } from "react-icons/gi";
import { Link } from "@inertiajs/react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSideBarOpen, setIsSideBarOpen] = useState(true);

    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-blue-600 border-b border-gray-200">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button
                                onClick={() => setIsSideBarOpen(!isSideBarOpen)}
                                data-drawer-target="logo-sidebar"
                                data-drawer-toggle="logo-sidebar"
                                aria-controls="logo-sidebar"
                                type="button"
                                className="inline-flex items-center p-2 text-sm text-white rounded-lg lg:hidden"
                            >
                                <span className="sr-only">Open sidebar</span>
                                <svg
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                    />
                                </svg>
                            </button>
                            <Link href="dashboard" className="flex ms-2 md:me-24">
                                {/* Icons Logo */}
                                <GiNotebook size={30} className="mx-3 text-white" />
                                <span className="self-center text-2xl font-semibold sm:text-2xl whitespace-nowrap text-white">
                                    Sistem Nilai
                                </span>
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ms-3">
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    {/* Profile dropdown */}
                                    <div className="relative ml-3">
                                        <div>
                                            <button
                                                onClick={() => setIsOpen(!isOpen)}
                                                type="button"
                                                className="relative flex rounded-full bg-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-400"
                                                id="user-menu-button"
                                                aria-expanded="false"
                                                aria-haspopup="true"
                                            >
                                                <span className="absolute -inset-1.5" />
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                            </button>
                                        </div>
                                        <div
                                            hidden={!isOpen}
                                            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                            role="menu"
                                            aria-orientation="vertical"
                                            aria-labelledby="user-menu-button"
                                            tabIndex={-1}
                                        >
                                            {/* Active: "bg-gray-100", Not Active: "" */}
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700"
                                                role="menuitem"
                                                tabIndex={-1}
                                                id="user-menu-item-0"
                                            >
                                                Your Profile
                                            </a>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700"
                                                role="menuitem"
                                                tabIndex={-1}
                                                id="user-menu-item-1"
                                            >
                                                Settings
                                            </a>
                                            <Link
                                                as="button"
                                                method="post"
                                                href="logout"
                                                className="block px-4 py-2 text-sm text-gray-700"
                                                role="menuitem"
                                                tabIndex={-1}
                                                id="user-menu-item-2"
                                            >
                                                Sign out
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <Sidebar isSideBarOpen={isSideBarOpen}></Sidebar>

        </>

    );
};

export default Navbar;
