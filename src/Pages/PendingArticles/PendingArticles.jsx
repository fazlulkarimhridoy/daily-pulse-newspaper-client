import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import ArticleRow from "./ArticleRow";
import { useQuery } from "@tanstack/react-query";

const PendingArticles = () => {
    // states & hooks
    const axiosPublic = useAxiosPublic();
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["pendingArticles"],
        queryFn: async () => {
            const res = await axiosPublic.get("/articles")
            return res.data;
        }
    })

    // handle pending, approve, cancel status
    const handleUpdate = (id, update) => {
        const status = update;
        axiosPublic.put(`/articles/${id}`, { status })
            .then(res => {
                const data = res.data
                console.log(data);
                refetch();
            })

    }

    // handle delete
    const handleDelete = (id) =>{
        axiosPublic.delete(`/articles/${id}`)
        .then(res=>{
            const data = res.data;
            console.log(data);
            refetch();
        })
    }

    // checking if loading
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
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {/* rows */}
                    {
                        data?.map(data => <ArticleRow
                            key={data._id}
                            data={data}
                            handleUpdate={handleUpdate}
                            handleDelete={handleDelete}
                        >
                        </ArticleRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default PendingArticles;