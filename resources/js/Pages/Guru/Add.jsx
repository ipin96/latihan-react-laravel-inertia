import TitleBar from "@/Components/TitleBar";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link, router } from "@inertiajs/react";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const Add = () => {
    const [nipMessage, setNipMessage] = useState("");
    const [namaLengkapMessage, setNamaLengkapMessage] = useState("");
    const [noHpMessage, setNoHpMessage] = useState("");
    const [alamatMessage, setAlamatMessage] = useState("");

    const [values, setValues] = useState({
        nip: "",
        gelar_depan: "",
        nama_lengkap: "",
        gelar_belakang: "",
        jk: 1,
        no_hp: "",
        alamat: "",
    });

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    };

    function handleSubmit(e) {
        e.preventDefault();
        axios
            .post(route("guru.store"), values)
            .then((response) => {
                const code = response.status;
                const message = response.data.message;

                if (code === 200 || code === 201) {
                    Swal.fire({
                        title: "Berhasil",
                        text: message,
                        icon: "success",
                        timer: 2000,
                    }).then(() => {
                        router.get(route("guru.index"));
                    });
                }
                handleResetForm();
            })
            .catch((error) => {
                setNipMessage("");
                setNamaLengkapMessage("");
                setNoHpMessage("");
                setAlamatMessage("");

                const code = error.response.status;
                const errors = error.response.data.errors;

                if (code == 422) {
                    Object.keys(errors).forEach((key) => {
                        if (key == "nip" && errors["nip"][0] != "") {
                            setNipMessage(errors["nip"][0]);
                        }
                        if (
                            key == "nama_lengkap" &&
                            errors["nama_lengkap"][0] != ""
                        ) {
                            setNamaLengkapMessage(errors["nama_lengkap"][0]);
                        }
                        if (key == "no_hp" && errors["no_hp"][0] != "") {
                            setNoHpMessage(errors["no_hp"][0]);
                        }
                        if (key == "alamat" && errors["alamat"][0] != "") {
                            setAlamatMessage(errors["alamat"][0]);
                        }
                    });
                } else if (code == 500) {
                    Swal.fire({
                        title: "Gagal",
                        text: "Terjadi masalah pada server internal",
                        icon: "success",
                        timer: 2000,
                    });
                } else {
                    const message = error.data.message;
                    Swal.fire({
                        title: "Info",
                        text: message,
                        icon: "warning",
                        timer: 2000,
                    });
                }
            });
    }

    function handleResetForm() {
        setNipMessage("");
        setNamaLengkapMessage("");
        setNoHpMessage("");
        setAlamatMessage("");
        setValues({
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
            <TitleBar title="Tambah Guru"></TitleBar>
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
                                name="nip"
                                placeholder="Contoh: 3327120102930001"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <p
                            id="nip"
                            className="my-2 text-sm leading-4 text-red-600"
                        >
                            {nipMessage}
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
                                    placeholder="Contoh: Dr."
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <p
                                id="gelar_depan"
                                className="my-2 text-sm leading-4 text-red-600"
                            ></p>
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
                                    placeholder="Contoh: John Doe"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <p
                                id="nama_lengkap"
                                className="my-2 text-sm leading-4 text-red-600"
                            >
                                {namaLengkapMessage}
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
                                    placeholder="Contoh: S.Kom, M.Kom"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <p
                                id="gelar_belakang"
                                className="my-2 text-sm leading-4 text-red-600"
                            ></p>
                        </div>
                    </div>

                    <div className="col-span-full">
                        <div className="flex items-center gap-x-3">
                            <input
                                name="jk"
                                type="radio"
                                value="1"
                                checked={values.jk == "1"}
                                onChange={() =>
                                    setValues({ ...values, jk: "1" })
                                }
                                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                            />
                            <label
                                htmlFor="jk"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Laki - laki
                            </label>
                            <input
                                name="jk"
                                type="radio"
                                value="2"
                                checked={values.jk == "2"}
                                onChange={() =>
                                    setValues({ ...values, jk: "2" })
                                }
                                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                            />
                            <label
                                htmlFor="jk"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Perempuan
                            </label>
                        </div>
                        <p
                            id="jk"
                            className="my-2 text-sm leading-4 text-red-600"
                        ></p>
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
                                name="no_hp"
                                placeholder="Contoh: +62 819-4554-3251"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <p
                            id="no_hp"
                            className="my-2 text-sm leading-4 text-red-600"
                        >
                            {noHpMessage}
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
                                name="alamat"
                                placeholder="Contoh: Jalan Raya No. 1, Jakarta"
                                rows="3"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            ></textarea>
                        </div>
                        <p
                            id="alamat"
                            className="my-2 text-sm leading-4 text-red-600"
                        >
                            {alamatMessage}
                        </p>
                    </div>

                    <div className="flex items-center justify-end gap-x-2">
                        <Link
                            as="button"
                            href={route("guru.index")}
                            className="rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                        >
                            Kembali
                        </Link>
                        <button
                            type="submit"
                            className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
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
