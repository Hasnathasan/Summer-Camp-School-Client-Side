import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const usePamentHistory = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: paymentHistory = [], isLoading: isPaymentHistoryLoading } =
    useQuery({
      queryKey: ["paymentHistory"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/payments/${user?.email}`);
        console.log(res.data);
        return res.data;
      },
    });
  return [paymentHistory, isPaymentHistoryLoading];
};

export default usePamentHistory;
