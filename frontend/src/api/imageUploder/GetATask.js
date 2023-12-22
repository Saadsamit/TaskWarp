import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const GetATask = (id) => {
  const axios = useAxios();
  const DataFunc = async () => {
    const { data } = await axios.get(`/get-a-todo/${id}`);
    return data;
  };

  const { data,refetch, isPending } = useQuery({
    queryKey: ["get todo", id],
    queryFn: DataFunc,
  });
  return [data,refetch, isPending];
};

export default GetATask;
