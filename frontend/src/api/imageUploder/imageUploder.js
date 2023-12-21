import axios from "axios"
const imgbbUploderLink = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_key}`
export const imageUploder = async(image) =>{
    const {data} = await axios.post(imgbbUploderLink,image,{
        headers: {
            'content-type': 'multipart/form-data'
        }})
    return data
} 