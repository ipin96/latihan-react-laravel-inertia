import { useState } from "react";
import { HiOutlineViewList } from "react-icons/hi";
import { RiUserSettingsLine } from "react-icons/ri";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Testing = () => {
    const [sidebar, setSidebar] = useState(true)
    const [profile, setProfile] = useState(true)
    const [submenu, setSubmenu] = useState(true)

    return (
        <>
            <section id="navigation-mobile">
                <div className="bg-[#478CCF] md:hidden py-1 flex">
                    <button onClick={() => setSidebar(!sidebar)} type="button" className="w-8 h-auto mx-5 flex flex-col justify-center items-center hover:bg-[#204870] hover:rounded-sm">
                        <HiOutlineViewList
                            size={18}
                            className="text-gray-200 font-bold"
                        />
                    </button>
                    <div className="w-full px-2 flex flex-row justify-between items-center">
                        <div className="font-semibold font-mono text-[14px] text-slate-200">
                            Latihan Template React
                        </div>
                        <button onClick={() => setProfile(!profile)} type="button" className="w-4 h-4 rounded-full flex justify-center items-center bg-[#cfcaca]">
                            <RiUserSettingsLine size={12} className="text-black" />
                        </button>
                    </div>
                </div>
                <div className="md:hidden bg-white flex">
                    <div className={`bg-[#1d61a5] w-28 ${!sidebar == false ? 'hidden' : ''}`}>
                        <div className="flex flex-col text-[9px]">
                            <a href="#" className="text-white px-2 py-1 hover:bg-[#204870]">
                                Dashboard
                            </a>
                            <a href="#" className="text-white px-2 py-1" onClick={() => setSubmenu(!submenu)}>
                                <div className="flex justify-between items-end">
                                    <div>Transaksi</div>
                                    {submenu === true ? (
                                        <div>
                                            <MdKeyboardDoubleArrowRight />
                                        </div>
                                    ) : (
                                        <div>
                                            <MdKeyboardDoubleArrowDown />
                                        </div>
                                    )}
                                </div>

                                <div className={`w-full flex-col ${!submenu == false ? 'hidden' : ''}`}>
                                    <div className="nav-item mx-2 py-1 hover:bg-[#204870]">Menu 1</div>
                                    <div className="nav-item mx-2 py-1 hover:bg-[#204870]">Menu 2</div>
                                    <div className="nav-item mx-2 py-1 hover:bg-[#204870]">Menu 3</div>
                                </div>
                            </a>
                            <a href="#" className="text-white px-2 py-1 hover:bg-[#204870]">Pelanggan</a>
                            <a href="#" className="text-white px-2 py-1 hover:bg-[#204870]">Barang</a>
                            <a href="#" className="text-white px-2 py-1 hover:bg-[#204870]">Laporan</a>
                            <a href="#" className="text-white px-2 py-1 hover:bg-[#204870]">Pengaturan</a>
                        </div>
                    </div>
                    <div className="bg-white w-screen mx-2">
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas repellendus explicabo ut assumenda, deserunt porro voluptatem magnam dolore quidem est quibusdam corrupti eligendi ratione et exercitationem sint aut magni officiis.</p>
                    </div>
                    <div className={`bg-slate-200 w-16 absolute right-0 ${!profile == false ? 'hidden' : ''}`}>
                        <div className="flex flex-col text-[9px] justify-start">
                            <a href="#" className="text-dark py-1 px-1 border border-b-slate-400 hover:bg-[#204870] hover:text-gray-100 ">Profile</a>
                            <a href="#" className="text-dark py-1 px-1 border border-b-slate-400 hover:bg-[#204870] hover:text-gray-100">Pengaturan</a>
                            <a href="#" className="text-dark py-1 px-1 hover:bg-[#204870] hover:text-gray-100">Keluar</a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="footer">
                <div className="flex justify-between items-center bg-white md:hidden">
                    <div className="flex flex-1 py-2 px-2 bg-green-400">footer left</div>
                    <div className="flex flex-1 justify-end px-2 py-2 bg-gray-200">footer right</div>
                </div>
            </section>
        </>
    );
};

export default Testing;
