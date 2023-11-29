import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import ArticlesTable from "./ArticlesTable";
import useAuth from "../../hooks/useAuth";

const MyArticles = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const email = user.email;


    // tanstackquery
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["article"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/articleByAuthor/${email}`)
            return res.data;
        }
    })


    // handle delete
    const handleDelete = (id) => {
        axiosPublic.delete(`/articles/${id}`)
            .then(res => {
                const data = res.data;
                console.log(data);
                refetch();
            })
    }


    // checking loading state of articles
    if (isLoading) {
        return <div className="flex justify-center mt-28 mb-28 lg:mt-80 lg:mb-60">
            <progress className="progress w-56"></progress>
        </div>
    }

    return (
        <div className="overflow-x-auto bg-green-50">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Delete</th>
                        <th>Title & image</th>
                        <th>Publisher</th>
                        <th>News type</th>
                        <th>Status</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {/* rows */}
                    {
                        data?.map(data => <ArticlesTable
                            key={data._id}
                            data={data}
                            handleDelete={handleDelete}
                        >
                        </ArticlesTable>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyArticles;