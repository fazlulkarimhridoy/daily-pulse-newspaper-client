import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
    return (
        <div className="container mx-auto">
            <NavBar></NavBar>
            <div className="bg-emerald-50">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;