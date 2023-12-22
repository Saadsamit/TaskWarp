import axios from "axios";

const instance = axios.create({
    // http://localhost:5000
    //https://taskwrap.vercel.app
    baseURL: "https://taskwrap.vercel.app/api",
})
const useAxios = () => {
    return instance
};

export default useAxios;