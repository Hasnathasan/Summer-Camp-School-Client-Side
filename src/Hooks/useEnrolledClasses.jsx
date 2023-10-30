import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useEnrolledClasses = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const {
      data: enrolledClasses,
      isLoading: isEnrolledClassesLoading,
      refetch: refetchEnrolledClasses,
    } = useQuery({
      queryKey: ["enrolledClasses", user?.email],
      queryFn: async () => {
        const res = await axiosSecure.get(`/enrolledclasses/${user?.email}`)
        return res.data;
      },
    });
  
    return [enrolledClasses, isEnrolledClassesLoading, refetchEnrolledClasses];
};

export default useEnrolledClasses;