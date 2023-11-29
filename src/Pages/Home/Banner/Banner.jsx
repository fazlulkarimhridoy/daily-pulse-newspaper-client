// import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const Banner = () => {
    // states and loaders
    const axiosPublic = useAxiosPublic();

    // tanstack query
    const { data, isLoading } = useQuery({
        queryKey: ["bannerData"],
        queryFn: async () => {
            const res = await axiosPublic.get("/articlesByView")
            return res.data;
        }
    })

    // checking loading state of banner data
    if (isLoading) {
        return <div className="flex justify-center mt-28 mb-28 lg:mt-80 lg:mb-60">
            <progress className="progress w-56"></progress>
        </div>
    }


    return (
        <section>
            <Carousel dynamicHeight="300px">
                {
                    data?.map(data => <div key={data._id}>
                        <img src={data.image} />
                        <p className="legend h-[50px]">{data.title}</p>
                    </div>).slice(0,6)
                }
            </Carousel>
        </section>
    );
};

export default Banner;