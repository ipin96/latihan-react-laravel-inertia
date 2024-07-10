import TitleBar from "@/Components/TitleBar";
import AdminLayout from "@/Layouts/AdminLayout";
import { Button } from "@headlessui/react";
import { Link, router, usePage } from "@inertiajs/react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Index = () => {
    const page = usePage().props
    const data = usePage().props.gurus.data
    const [message, setMessage] = useState(false)

    const handleEdit = (id) => {
        router.get(route('guru.edit', id));
    }

    const handleDelete = (id) => {
        if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
            try {
                setMessage(true)
                toast.dismiss();
                router.delete(route('guru.destroy', id))
                toast.success('Data guru berhasil dihapus.');
            } catch (error) {
                toast.error('Gagal menghapus data guru.');
            }
        }
    }


    return (
        <AdminLayout>
            <TitleBar title="Data Guru">
                <Link href={route('guru.create')} className="border border-white bg-gray-500 hover:bg-blue-700 text-white hover:text-white focus:ring-4 focus:outline-none px-5 py-2 rounded-lg flex flex-col justify-center items-center">
                    <span className="text-sm">Tambah Data</span>
                </Link>
            </TitleBar>

            <div className="flex w-[675px] md:w-[735px] lg:w-[985px] xl:w-[1050px] ml-2 mr-2 sm:space-y-0 items-end justify-end py-4">
                <label htmlFor="table-search" className="sr-only">
                    Search
                </label>
                <div className="lg:relative relative">
                    <div className="absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="text"
                        id="table-search"
                        className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                        placeholder="Search for items"
                    />
                </div>
            </div>
            <table className="w-[675px] md:w-[725px] lg:w-[985px] xl:w-[1040px] mx-7 lg:mx-7 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-gray-500 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Nomor Induk Pegawai (NIP)
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nama Lengkap
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Jenis Kelamin
                        </th>
                        <th scope="col" className="px-6 py-3">
                            No. HP
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Alamat
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr
                            key={item.id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600"
                        >
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {item.nip}
                            </th>
                            <td className="px-6 py-4">
                                {item.gelar_depan} {item.nama_lengkap},{" "}
                                {item.gelar_belakang}
                            </td>
                            <td className="px-6 py-4">
                                {item.jk === 1 ? "Laki-laki" : "Perempuan"}
                            </td>
                            <td className="px-6 py-4">{item.no_hp}</td>
                            <td className="px-6 py-4">{item.alamat}</td>
                            <td className="px-6 py-4">
                                <Button
                                    type="button"
                                    onClick={() => handleEdit(item.id)}
                                    className="mr-2 text-yellow-500 border w-10 h-10 border-yellow-500 hover:bg-yellow-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-yellow-500 dark:text-yellow-500 dark:hover:text-white dark:focus:ring-yellow-800 dark:hover:bg-yellow-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        className="w-6 h-6 text-gray-800 dark:text-white"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14.304 4.844l2.852 2.852M7 7H4a1 1 0 00-1 1v10a1 1 0 001 1h11a1 1 0 001-1v-4.5m2.409-9.91a2.017 2.017 0 010 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 012.852 0z"
                                        ></path>
                                    </svg>
                                </Button>
                                <Button
                                    type="button"
                                    onClick={() => handleDelete(item.id)}
                                    className="text-red-500 border w-10 h-10 border-red-500 hover:bg-red-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 dark:hover:bg-red-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        className="w-6 h-6 text-gray-800 dark:text-white"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 011 1v3H9V4a1 1 0 011-1zM6 7h12v13a1 1 0 01-1 1H7a1 1 0 01-1-1V7z"
                                        ></path>
                                    </svg>
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 w-[675px] md:w-[725px] lg:w-[985px] xl:w-[1040px] mx-7 lg:mx-7">
                <div className="flex flex-1 justify-between sm:hidden">
                    <a
                        href="#"
                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Previous
                    </a>
                    <a
                        href="#"
                        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Next
                    </a>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700">
                            Showing
                            <span className="font-medium mx-1">{page.gurus.from}</span>
                            to
                            <span className="font-medium mx-1">{page.gurus.to}</span>
                            of
                            <span className="font-medium mx-1">{page.gurus.total}</span>
                            results
                        </p>
                    </div>
                    <div>
                        <nav
                            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                            aria-label="Pagination"
                        >
                            {page.gurus.links.map((value, i) => (
                                <Link
                                    key={i}
                                    href={value.url}
                                    aria-current="page"
                                    className={`relative z-10 inline-flex items-center bg-blue-500 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${i == page.gurus.current_page ? 'bg-blue-700' : ''}`}
                                    dangerouslySetInnerHTML={{ __html: value.label }}
                                >
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>

            {message === true  && (
                <ToastContainer />
            )}

        </AdminLayout>

    );
};

export default Index;
