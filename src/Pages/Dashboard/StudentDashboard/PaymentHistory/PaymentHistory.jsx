import { Card, Typography } from "@material-tailwind/react";
import useAuth from "../../../../Hooks/useAuth";
import usePamentHistory from "../../../../Hooks/usePamentHistory";
import Loader from "../../../../Components/Loader";

const PaymentHistory = () => {
  const { user } = useAuth();
  const [paymentHistory, isPaymentHistoryLoading] = usePamentHistory();
  return (
    <div className="w-[90%]">
      {user && !isPaymentHistoryLoading ? (
        <Card className="overflow-auto h-full w-full">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Class Name
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Transaction ID
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Price
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map(
                ({ class_name, transactionId, classPrice }, index) => (
                  <tr key={index} className="even:bg-blue-gray-50/50">
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {class_name}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {transactionId}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {classPrice}
                      </Typography>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </Card>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
};

export default PaymentHistory;
