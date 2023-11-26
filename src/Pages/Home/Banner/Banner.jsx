import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AuthContext } from "../../../Providers/AuthProvider";


const Banner = () => {
    // states and loaders
    const { loading } = useContext(AuthContext);
    const [bannerData, setBannerData] = useState([]);



    // useEffect for fetching banner data
    useEffect(() => {
        axios.get("http://localhost:5000/articles")
            .then(res => {
                const data = res.data;
                console.log("Banner Data", data);
                setBannerData(data);
            })
    }, [])

    if (loading) {
        return <div className="flex justify-center mt-20">
            <div className="flex flex-col gap-4 w-96">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-56"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        </div>
    }

    return (
        <section>
            <Carousel dynamicHeight="300px">
                {
                    bannerData.map(data => <div key={data._id}>
                        <img src={data.image} />
                        <p className="legend h-[50px]">{data.title}</p>
                    </div>)
                }
            </Carousel>
        </section>
    );
};

export default Banner;