import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedClasses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure()
  const {
    data: selectedClasses,
    isLoading: isSelectedClassesLoading,
    refetch: refetchSelectedClasses,
  } = useQuery({
    queryKey: ["selectedClasses", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/selectedclasses?email=${user?.email}`)
      return res.data;
    },
  });

  return [selectedClasses, isSelectedClassesLoading, refetchSelectedClasses];
};

export default useSelectedClasses;
