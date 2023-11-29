import { FaTimes, FaToolbox, FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";

const ArticlesTable = ({ data, handleDelete }) => {
    // hooks and states
    const { _id, title, image, tag, publisher, isPremium, status } = data;

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline btn-sm">
                    <FaTimes></FaTimes>
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
                        <div className="text-green-600 font-bold hidden lg:flex">Premium News</div> :
                        <div className="text-blue-600 font-bold hidden lg:flex">Regular News</div>
                }
            </td>
            <th>
                {
                    status === "pending" && <p className="text-yellow-600 font-bold">{status}</p>
                }
                {
                    status === "approved" && <p className="text-green-600 font-bold">{status}</p>
                }
                {
                    status === "cancelled" && <p className="text-red-600 font-bold">{status}</p>
                }
            </th>
            <td>
                <Link to={`/updateArticle/${_id}`}>
                    <button className="btn btn-circle btn-outline btn-sm">
                        <FaTools></FaTools>
                    </button>
                </Link>
            </td>
        </tr>
    );
};

export default ArticlesTable;