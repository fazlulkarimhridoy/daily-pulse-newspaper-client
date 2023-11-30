import { FaRegTrashAlt } from "react-icons/fa";

const UserRow = ({ data, index, handleUpdate, handleDelete, update }) => {
    const { _id, name, image, email, role } = data;
    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline btn-sm">
                    <FaRegTrashAlt></FaRegTrashAlt>
                </button>
            </td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="text-gray-600 font-bold">{email}</div>
            </td>

            <td>
                {
                    role === "admin" ?
                        <p className="text-green-600 font-bold">{role}</p>
                        :
                        <button onClick={() => handleUpdate(_id, update = "admin", name)} className="text-yellow-600 font-bold">make admin</button>
                }
            </td>

        </tr>
    );
};

export default UserRow;