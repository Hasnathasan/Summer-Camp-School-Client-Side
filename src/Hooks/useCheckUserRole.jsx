import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCheckUserRole = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: userRole, isLoading: isUserRoleLoading } = useQuery({
    queryKey: ["userRole", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/userrole?email=${user?.email}`);
      return res.data;
    },
  });
  return [userRole, isUserRoleLoading];
};

export default useCheckUserRole;
