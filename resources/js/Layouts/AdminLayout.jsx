import Breadcrumb from "@/Components/Breadcrumb";
import Navbar from "@/Components/Navbar";


const AdminLayout = ({ children }) => {
    return (
        <>
            <Navbar></Navbar>
            <div className="-mb-16 lg:-mx-5 mb">
                <Breadcrumb></Breadcrumb>
            </div>
            <div className="flex flex-col mt-[96px] ml-2 lg:mt-20 lg:mx-[262px]">
                {children}
            </div>
        </>
    );
};

export default AdminLayout;
