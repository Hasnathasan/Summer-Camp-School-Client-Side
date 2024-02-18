import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructorClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: intructorClasses, isLoading: isIntructorClassesLoading } =
    useQuery({
      queryKey: ["classesByInstructor"],
      queryFn: async () => {
        const res = await axiosSecure.get(
          `/instructorClasses?email=${user?.email}`
        );
        return res.data;
      },
    });
  return [intructorClasses, isIntructorClassesLoading];
};

export default useInstructorClasses;
