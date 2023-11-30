import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://newspaper-server-phi.vercel.app",
})
const useAxiosPublic = () => {
    
   return axiosPublic;
};

export default useAxiosPublic;