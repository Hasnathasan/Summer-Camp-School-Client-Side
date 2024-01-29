import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useClass = (id) => {
  const [axiosSecure] = useAxiosSecure();
  const { data: eachClass, isLoading: isEachClassLoading } = useQuery({
    queryKey: ["eachClass"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes/${id}`);
      return res.data;
    },
  });
  return [eachClass, isEachClassLoading];
};

export default useClass;
