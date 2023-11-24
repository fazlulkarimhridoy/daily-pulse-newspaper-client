import { Link, NavLink } from "react-router-dom";

const NavBar = () => {


    // common links
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allArticles">All Articles</NavLink></li>
        <li><NavLink to="/addArticles">Add Articles</NavLink></li>
        <li><NavLink to="/myArticles">My Articles</NavLink></li>
        <li><NavLink to="/subscription">Subscription</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/premiumArticles">Premium Articles</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="lg:hidden">
                        <img className="w-1/3"
                            src="https://i.ibb.co/W3HJ2xy/daily-pulse-high-resolution-logo-black-transparent.png"
                            alt="newspaper_portal" />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <img src="https://i.ibb.co/W3HJ2xy/daily-pulse-high-resolution-logo-black-transparent.png"
                    alt="newspaper_portal"
                    className="hidden lg:flex w-[70px] h-[70px]" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-bottom dropdown-end">
                    <label tabIndex={0} className="m-1">
                        <img className="w-[46px] h-[46px] rounded-full border-2"
                            src="https://i.ibb.co/RQQ6znT/IMG-20211002-0001.jpg"
                            alt="user_photo" />
                    </label>
                    <ul tabIndex={0} className="dropdown-content z-[1] p-4 shadow bg-base-100 rounded-box w-40">
                        <li><Link className="btn w-full mb-3">Visit Profile</Link></li>
                        <li><button className="btn w-full bg-orange-700 text-white hover:bg-yellow-500">Logout</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;