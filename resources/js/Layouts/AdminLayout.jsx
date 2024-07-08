import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";

const AdminLayout = ({ children }) => {
    return (
        <>
            <Navbar></Navbar>
            <Sidebar children={children}></Sidebar>
        </>
    );
};

export default AdminLayout;
