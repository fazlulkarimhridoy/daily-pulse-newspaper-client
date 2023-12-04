import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";


const NavBar = () => {
    // states and hooks
    const axiosSecure = useAxiosSecure();
    const { user, logout, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();

    // email from firebase
    const userEmail = user?.email;

    // getting user form database
    const { data: userDB = {}, isLoading } = useQuery({
        queryKey: ["loggedUser"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${userEmail}`)
            return res.data;
        }
    })
    // destructuring user information
    const { name, email, image, premiumUser } = userDB;

    // logout
    const handleLogout = () => {
        logout()
            .then(res => {
                const user = res.user;
                console.log(user);
            })
    }

    // if loading true
    if (isLoading || isAdminLoading || loading) {
        return <div className="flex justify-center">
            <progress className="progress w-56"></progress>
        </div>
    }

    // common links
    const links =
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/allArticles">Articles</NavLink></li>
            {
                user && <>
                    <li><NavLink to="/addArticles">Add Articles</NavLink></li>
                    <li><NavLink to="/myArticles">My Articles</NavLink></li>
                    {/* <li><NavLink to="/premiumArticles">Premium Articles</NavLink></li> */}
                </>
            }
            <li><NavLink to="/subscriptions">Subscription</NavLink></li>
            {
                user && isAdmin &&
                <>
                    <li><NavLink to="/dashboard/adminHome">Dashboard</NavLink></li>
                </>
            }

        </>


    return (
        <div className="container navbar px-4 py-6 bg-emerald-600">
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
                        <div className="dropdown dropdown-bottom dropdown-end z-10">
                            <label tabIndex={0} className="m-1">
                                <div className="flex gap-1">
                                    {
                                        premiumUser === "true" &&
                                        <p className="text-gray-300 font-medium">
                                            Premium
                                        </p>
                                    }
                                    <button>

                                        <img className="w-[50px] h-[50px] mr-2 rounded-full border-2"
                                            src={image}
                                            alt="user_photo" />
                                    </button>
                                </div>
                            </label>
                            <ul tabIndex={0} className="dropdown-content z-[1] p-4 shadow bg-green-50 rounded-box w-60">


                                {/* <li className="p-3 text-center font-medium rounded-lg mb-3 bg-gray-300">{fullName}</li> */}
                                <li className="p-3 text-center font-medium rounded-lg mb-3 bg-gray-300">{name || "No Name"}</li>
                                {/* <li className="p-3 text-center font-medium rounded-lg mb-3 bg-gray-300">{email}</li> */}
                                <li><Link to="/profile" className="btn w-full mb-3 border bg-gray-300">Visit Profile</Link></li>
                                <li><button onClick={handleLogout} className="btn w-full bg-orange-700 text-white hover:bg-yellow-500">
                                    <FaSignOutAlt></FaSignOutAlt>
                                    Logout
                                </button>
                                </li>



                            </ul>
                        </div>
                        :
                        <>
                            <Link to="/login"><button className="px-6 mr-2 flex items-center gap-2 py-2 rounded-md bg-sky-700 text-white hover:bg-lime-500">
                                <FaSignInAlt></FaSignInAlt>
                                Login
                            </button>
                            </Link>
                            <Link to="/register"><button className="px-6 flex items-center gap-2 py-2 rounded-md bg-orange-700 text-white hover:bg-lime-500">
                                <FaSignInAlt></FaSignInAlt>
                                Register
                            </button>
                            </Link>
                        </>
                }

            </div>
        </div>
    );
};

export default NavBar;