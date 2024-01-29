import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useApprovedClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: approvedClasses = [], isLoading: isApprovedClassesLoading } =
    useQuery({
      queryKey: ["approvedClasses"],
      queryFn: async () => {
        const res = await axiosSecure.get("/approvedclasses");
        console.log(res.data);
        return res.data;
      },
    });
  return [approvedClasses, isApprovedClassesLoading];
};

export default useApprovedClasses;
