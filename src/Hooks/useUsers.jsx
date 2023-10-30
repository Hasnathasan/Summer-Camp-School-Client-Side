import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], isLoading: isUsersLoading, refetch } = useQuery({
        queryKey: ['allusers'],
        queryFn: async() => {
            const res = await axiosSecure.get('/users');
            return res.data
        },
      })
      return [users, isUsersLoading, refetch]
};

export default useUsers;