import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const NavBar = () => {
    // states and hooks
    const { user, logout } = useContext(AuthContext);

    const firebaseEmail = user?.email;
    const userImage = user?.photoURL;


    // logout
    const handleLogout = () => {
        logout()
            .then(res => {
                const user = res.user;
                console.log(user);
            })
    }


    // common links
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allArticles">All Articles</NavLink></li>
        <li><NavLink to="/addArticles">Add Articles</NavLink></li>
        <li><NavLink to="/pendingArticles">Pending Articles</NavLink></li>
        <li><NavLink to="/myArticles">My Articles</NavLink></li>
        <li><NavLink to="/subscription">Subscription</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/premiumArticles">Premium Articles</NavLink></li>
        {
            !user ? <li><NavLink to="/register">Register</NavLink></li> : ""
        }
    </>


    return (
        <div className="fixed z-10 container navbar px-4 py-6 bg-emerald-600">
            <div className="navbar-start">
                {/* drop down menu in image for small devices */}
                <div className="dropdown">
                    <label tabIndex={0} className="lg:hidden">
                        <img className="w-1/3 ml-2"
                            src="https://i.ibb.co/W3HJ2xy/daily-pulse-high-resolution-logo-black-transparent.png"
                            alt="newspaper_portal" />
                    </label>
                    <ul id="link1" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                {/* logo for medium and larger devices */}
                <img src="https://i.ibb.co/W3HJ2xy/daily-pulse-high-resolution-logo-black-transparent.png"
                    alt="newspaper_portal"
                    className="hidden lg:flex ml-2 w-[70px] h-[70px]" />
            </div>
            {/* links for medium and larger devices */}
            <div className="navbar-center hidden lg:flex">
                <ul id="link2" className="menu menu-horizontal px-1 gap-2 text-white">
                    {links}
                </ul>
            </div>
            {/* login / user information using dropdown menu */}
            <div className="navbar-end">
                {
                    user ?
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <label tabIndex={0} className="m-1">
                                <button>
                                    <img className="w-[50px] h-[50px] mr-2 rounded-full border-2"
                                        src={userImage}
                                        alt="user_photo" />
                                </button>
                            </label>
                            <ul tabIndex={0} className="dropdown-content z-[1] p-4 shadow bg-green-50 rounded-box w-60">


                                {/* <li className="p-3 text-center font-medium rounded-lg mb-3 bg-gray-300">{fullName}</li> */}
                                <li className="p-3 text-center font-medium rounded-lg mb-3 bg-gray-300">{firebaseEmail}</li>
                                <li><Link className="btn w-full mb-3 border bg-gray-300">Visit Profile</Link></li>
                                <li><button onClick={handleLogout} className="btn w-full bg-orange-700 text-white hover:bg-yellow-500">Logout</button></li>



                            </ul>
                        </div>
                        :
                        <Link to="/login"><button className="px-6 py-2 rounded-md bg-sky-700 text-white hover:bg-lime-500"> Login</button></Link>
                }

            </div>
        </div>
    );
};

export default NavBar;