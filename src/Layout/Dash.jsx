import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaSignOutAlt } from "react-icons/fa";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";

const Dash = () => {
    const { user, logout } = useAuth();
    const links =
        <>
            <li><NavLink to="adminHome">Admin Dashboard</NavLink></li>
            <li><NavLink to="users">All Users</NavLink></li>
            <li><NavLink to="pendingArticles">All Articles</NavLink></li>
            <li><NavLink to="addPublisher">Add Publisher</NavLink></li>            
            <li><NavLink to="publishers">All Publishers</NavLink></li>            

        </>
    return (
        <div className="container mx-auto">
            <NavBar></NavBar>
            <div className="flex">
                {/* dashboard sidebar */}
                <div className="min-h-screen p-3 space-y-2 w-60 bg-emerald-200 text-gray-800">
                    <div className="flex items-center p-2 space-x-4">
                        <img src={user?.photoURL} alt="user_photo" className="w-12 h-12 rounded-full bg-gray-500" />
                        <div>
                            <h2 className="text-lg font-semibold">{user?.displayName}</h2>
                            <span className="flex items-center space-x-1">
                                <a className="text-xs hover:underline text-gray-600">View profile</a>
                            </span>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-300">
                        <ul id="link1" className="menu menu-vertical px-1 gap-2 text-gray-500">
                            {links}
                        </ul>
                        <ul className="pt-4 pb-2 space-y-1 text-sm">

                            <li>
                                <a rel="noopener noreferrer" className="flex items-center p-2 space-x-3 rounded-md">
                                    <FaSignOutAlt></FaSignOutAlt>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* dashboard content */}
                <div className="flex-1 bg-green-50">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dash;