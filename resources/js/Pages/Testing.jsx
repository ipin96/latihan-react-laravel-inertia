import { HiOutlineViewList } from "react-icons/hi";
const Testing = () => {
    return (
        <section id="navigation-mobile">
            <div className="bg-[#36C2CE] py-4 md:hidden flex">
                <div className="w-12 h-auto mx-5 flex flex-col justify-center items-center border border-x-2 border-y-2 border-gray-200 hover:bg-slate-500">
                    <HiOutlineViewList
                        size={18}
                        className="text-gray-200 font-bold"
                    />
                </div>
                <div className="w-full px-2 flex flex-col justify-center items-start border border-white">
                    <p className="font-semibold font-mono text-xl">
                        Sistem Gadai Online
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Testing;
