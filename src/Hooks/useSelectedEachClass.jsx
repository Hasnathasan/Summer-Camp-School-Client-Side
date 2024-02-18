import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedEachClass = (id) => {
  const [axiosSecure] = useAxiosSecure();
  const { data: selectedClass, isLoading: isSelectedClassLoading } = useQuery({
    queryKey: ["selectedEachClass"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/selectedClasses/${id}`);
      return res.data;
    },
  });
  return [selectedClass, isSelectedClassLoading];
};

export default useSelectedEachClass;
