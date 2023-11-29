import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SingleArticle from "../AllArticles/SingleArticle/SingleArticle";

const PremiumArticles = () => {
    // hooks and states
    const axiosPublic = useAxiosPublic();
    const premiumArticle = true;

    // tanstackquery
    const { data, isLoading } = useQuery({
        queryKey: ["premiumArticles"],
        queryFn: async () => {
            const res = await axiosPublic.get("/premiumArticles")
            return res.data;
        }
    })


    // checking loading state of articles
    if (isLoading) {
        return <div className="flex justify-center mt-28 mb-28 lg:mt-80 lg:mb-60">
            <progress className="progress w-56"></progress>
        </div>
    }


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10 pb-10">
            {
                data?.map(data=> 
                <SingleArticle
                    key={data._id}
                    data={data}
                    premiumArticle={premiumArticle}
                >
                </SingleArticle>)
            }
        </div>
    );
};

export default PremiumArticles;