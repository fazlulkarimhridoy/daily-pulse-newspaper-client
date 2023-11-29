import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleArticle = ({ data, premiumArticle }) => {
    // states and hooks
    const { _id, title, image, tag, description, publisher, publisherImage, views, isPremium, subscriptionPeriod } = data;


    return (
        <div className={`relative ${isPremium ? 'bg-cyan-100' : 'bg-gray-100'} flex flex-col text-gray-700 rounded-md border-2 hover:shadow-xl  hover:duration-500 lg:w-[450px] container mx-auto bg-clip-border`}>

            {/* article image */}
            <div className="h-60 mx-auto pt-4 rounded-md">
                <img
                    className="h-full w-[400px] rounded-md"
                    src={image}
                    alt="img-blur-shadow"
                    layout="fill"
                />
            </div>
            <div className="p-4 flex gap-3 items-center">

                {/* publisher photo */}
                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                    <div className="avatar">
                        <div className="w-7">
                            <img src={publisherImage} />
                        </div>
                    </div>
                </div>

                {/* publisher & tags */}
                <div className="flex gap-3 items-center w-[300px]">
                    <div>
                        <p className="font-sans text-base font-medium">{publisher}</p>
                    </div>
                    <div>
                        <p className="font-sans text-base font-medium">#{tag}</p>
                    </div>
                </div>

                {/* views */}
                <div className="flex items-center">
                    <FaEye></FaEye>
                    <p className="pl-1 font-sans text-base font-medium">{views}</p>
                </div>
            </div>

            {/* title, description & subscription time */}
            <div className="px-6 h-36">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {title}
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    {description}
                </p>
                <p className="block font-sans text-lg antialiased font-medium leading-relaxed text-inherit">
                    Subscription period : {
                        subscriptionPeriod > 0 ? <>{subscriptionPeriod} days</> : <>No subscription</>
                    }
                </p>
            </div>

            {/* button area */}
            <div className="p-6">
                <Link to={`/articleDetails/${_id}`}>
                    <button
                        className={`group w-full rounded-md relative inline-block overflow-hidden border ${isPremium ? "border-orange-600" : "border-green-600"}  px-8 py-3 focus:outline-none focus:ring`}>
                        <span className={`absolute inset-x-0 bottom-0 h-[2px] ${isPremium ? "bg-orange-600" : "bg-green-600"} transition-all group-hover:h-full group-green:bg-indigo-500`}></span>
                        <span className={`relative text-sm font-medium ${isPremium? "text-orange-600" : "text-green-600"} transition-colors group-hover:text-white`}>
                            Read More
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default SingleArticle;