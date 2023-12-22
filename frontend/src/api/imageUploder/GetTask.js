import { useContext } from "react";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { myAuthProvider } from "../../provider/AuthProvider";


const GetTask = () => {
    const axios = useAxios();
    const { user,loaging } = useContext(myAuthProvider);
  const DataFunc = async () => {
    const { data } = await axios.get(`/get-todo/${user?.email}`);
    return data;
  };
  
  const {data,refetch,isPending} = useQuery({
    queryKey: ['get todo',user?.email],
    queryFn: DataFunc,
    enabled: !loaging
  });
  return [data, isPending, refetch];
};

export default GetTask;