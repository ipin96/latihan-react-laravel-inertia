import TitleBar from "@/Components/TitleBar";
import AdminLayout from "@/Layouts/AdminLayout";
import { router, usePage } from "@inertiajs/react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Edit = () => {

    const error = usePage().props.errors;
    const [message, setMessage] = useState(false)

    const guru = usePage().props.guru;

    const [values, setValues] = useState({
        id: guru.id ?? "",
        nip: guru.nip ?? "",
        gelar_depan: guru.gelar_depan ?? "",
        nama_lengkap: guru.nama_lengkap ?? "",
        gelar_belakang: guru.gelar_belakang ?? "",
        jk: guru.jk ?? "",
        no_hp: guru.no_hp ?? "",
        alamat: guru.alamat ?? "",
    });

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    };

    function handleSubmit(e) {
        e.preventDefault();
        setMessage(true);
        axios.put(route('guru.update', { guru: guru.id }), values)
            .then(response => {
                toast.success('Berhasil memperbarui data guru.');
            })
            .catch(error => {
                const code = error.response.status
                if (code == 422) {
                    toast.error(error.response.statusText)
                } else {
                    toast.error(error.response.statusText)
                }
            });
    }

    function handleResetForm() {
        setValues({
            id: guru.id ?? "",
            nip: "",
            gelar_depan: "",
            nama_lengkap: "",
            gelar_belakang: "",
            jk: 1,
            no_hp: "",
            alamat: "",
        });
    }

    return (
        <AdminLayout>
            <TitleBar title="Edit Guru"></TitleBar>
            <div className="mx-8 w-[675px] md:w-[735px] lg:w-[985px] xl:w-[1040px] py-10">
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
                            {error.nip}
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
                                {error.gelar_depan}
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
                                {error.nama_lengkap}
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
                                {error.gelar_belakang}
                            </p>
                        </div>
                    </div>

                    <div className="col-span-full">
                        <div className="flex items-center gap-x-3">
                            <input
                                id="jk"
                                name="jk"
                                type="radio"
                                value="1"
                                checked={values.jk == "1"}
                                onChange={() => setValues({ ...values, jk: "1" })}
                                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                            />
                            <label htmlFor="jk" className="block text-sm font-medium leading-6 text-gray-900">Laki - laki</label>
                            <input
                                id="jk"
                                name="jk"
                                type="radio"
                                value="2"
                                checked={values.jk == "2"}
                                onChange={() => setValues({ ...values, jk: "2" })}
                                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                            />
                            <label htmlFor="jk" className="block text-sm font-medium leading-6 text-gray-900">Perempuan</label>
                        </div>
                        <p className="my-2 text-sm leading-4 text-red-600">
                            {error.jk}
                        </p>
                    </div>

                    <div className="col-span-full">
                        <label
                            htmlFor="no_hp"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            No. HP / Handphone
                        </label>
                        <div className="mt-2">
                            <input
                                value={values.no_hp}
                                onChange={handleChange}
                                id="no_hp"
                                name="no_hp"
                                placeholder="Contoh: +62 819-4554-3251"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <p className="my-2 text-sm leading-4 text-red-600">
                            {error.no_hp}
                        </p>
                    </div>

                    <div className="col-span-full">
                        <label
                            htmlFor="alamat"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Alamat
                        </label>
                        <div className="mt-2">
                            <textarea
                                value={values.alamat}
                                onChange={handleChange}
                                id="alamat"
                                name="alamat"
                                placeholder="Contoh: Jalan Raya No. 1, Jakarta"
                                rows="3"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"></textarea>
                        </div>
                        <p className="my-2 text-sm leading-4 text-red-600">
                            {error.alamat}
                        </p>
                    </div>

                    <div className="flex items-center justify-end gap-x-2">
                        <button
                            onClick={handleResetForm}
                            type="button"
                            className="rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                        >
                            Batal
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                            Ubah
                        </button>
                    </div>
                </form>
            </div>

            {message === true && (
                <ToastContainer />
            )}
        </AdminLayout>
    );
};

export default Edit;
