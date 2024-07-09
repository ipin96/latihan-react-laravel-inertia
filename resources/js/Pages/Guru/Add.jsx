import TitleBar from "@/Components/TitleBar";
import AdminLayout from "@/Layouts/AdminLayout";
import { router} from "@inertiajs/react";
import { useState } from "react";

const Add = () => {

    const [values, setValues] = useState({
        nip: "",
        gelar_depan: "",
        nama_lengkap: "",
        gelar_belakang: "",
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.post("/guru", values);
    }

    function handleResetForm() {
        setValues({
            nip: "",
            gelar_depan: "",
            nama_lengkap: "",
            gelar_belakang: "",
        });
    }

    return (
        <AdminLayout>
            <TitleBar title="Tambah Guru"></TitleBar>
            <div className="mx-8 w-[675px] md:w-[735px] lg:w-[985px] xl:w-[1040px]">
                <form onSubmit={handleSubmit}>
                    <div className="col-span-full">
                        <label
                            htmlFor="nip"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Nomor Induk Pegawai (NIP)
                        </label>
                        <div className="mt-2">
                            <input
                                value={values.nip}
                                onChange={handleChange}
                                id="nip"
                                name="nip"
                                placeholder="Contoh: 3327120102930001"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <p className="my-2 text-sm leading-4 text-red-600">
                            Lorem, ipsum dolor.
                        </p>
                    </div>
                    <div className="grid grid-flow-col">
                        <div className="sm:col-span-2 sm:col-start-1 mr-2">
                            <label
                                htmlFor="gelar_depan"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Gelar Depan
                            </label>
                            <div className="mt-2">
                                <input
                                    value={values.gelar_depan}
                                    onChange={handleChange}
                                    type="text"
                                    name="gelar_depan"
                                    id="gelar_depan"
                                    placeholder="Contoh: Dr."
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <p className="my-2 text-sm leading-4 text-red-600">
                                Lorem, ipsum dolor.
                            </p>
                        </div>

                        <div className="sm:col-span-2 mr-2">
                            <label
                                htmlFor="nama_lengkap"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Nama Lengkap
                            </label>
                            <div className="mt-2">
                                <input
                                    value={values.nama_lengkap}
                                    onChange={handleChange}
                                    type="text"
                                    name="nama_lengkap"
                                    id="nama_lengkap"
                                    placeholder="Contoh: John Doe"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <p className="my-2 text-sm leading-4 text-red-600">
                                Lorem, ipsum dolor.
                            </p>
                        </div>

                        <div className="sm:col-span-2">
                            <label
                                htmlFor="gelar_belakang"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Gelar Belakang
                            </label>
                            <div className="mt-2">
                                <input
                                    value={values.gelar_belakang}
                                    onChange={handleChange}
                                    type="text"
                                    name="gelar_belakang"
                                    id="gelar_belakang"
                                    placeholder="Contoh: S.Kom, M.Kom"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <p className="my-2 text-sm leading-4 text-red-600">
                                Lorem, ipsum dolor.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-2">
                        <button
                            onClick={handleResetForm}
                            type="button"
                            className="rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                        >
                            Batal
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Simpan
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default Add;
