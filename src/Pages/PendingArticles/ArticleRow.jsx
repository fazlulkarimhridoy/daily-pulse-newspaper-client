import { FaEye, FaRegTrashAlt, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const ArticleRow = ({ data, handleUpdate, handleDelete, update }) => {
    // hooks & states
    const { _id, title, image, tag, publisher, isPremium, status } = data;


    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline btn-sm">
                    <FaRegTrashAlt></FaRegTrashAlt>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                        <div className="text-sm opacity-50">{tag}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="text-gray-600 font-bold">{publisher}</div>
            </td>
            <td>
                {
                    isPremium ?
                        <div className="text-green-600 font-bold hidden lg:flex">Premium News</div>
                        : <div className="text-blue-600 font-bold hidden lg:flex">Regular News</div>

                }
            </td>
            <th>
                <div className="dropdown dropdown-first">
                    <label tabIndex={0}>
                        {
                            status === "pending" && <button className="text-yellow-600 font-bold">{status}</button>
                        }
                        {
                            status === "approved" && <p className="text-green-600 font-bold">{status}</p>
                        }

                        {
                            status === "cancelled" && <p className="text-red-600 font-bold">{status}</p>
                        }
                    </label>
                    {
                        status === "pending" && <ul tabIndex={0} className="dropdown-content z-[1] w-36 p-3 rounded-lg bg-gray-200">
                            <button onClick={() => handleUpdate(_id, update = "approved")} className="w-full btn btn-ghost text-green-600 font-bold">Approve</button>
                            <button onClick={() => handleUpdate(_id, update = "cancelled")} className="w-full btn btn-ghost text-red-600 font-bold">Cancel</button>
                        </ul>
                    }

                </div>
            </th>
            <th>
                <Link to={`/articleDetails/${_id}`}>
                    <button className="btn btn-circle btn-outline btn-sm">
                        <FaEye></FaEye>
                    </button>
                </Link>
            </th>
        </tr>
    );
};

export default ArticleRow;