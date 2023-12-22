import axios from "axios";

const instance = axios.create({
    // http://localhost:5000
    baseURL: "http://localhost:5000/api"
})
const useAxios = () => {
    return instance
};

export default useAxios;