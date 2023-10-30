import { FaRegCreditCard, FaTrash } from "react-icons/fa";
import Loader from "../../../../Components/Loader";
import useAuth from "../../../../Hooks/useAuth";
import useSelectedClasses from "../../../../Hooks/useSelectedClasses";
import { Button, Card, IconButton, Typography } from "@material-tailwind/react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
const SelectedClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const [selectedClasses, isSelectedClassesLoading, refetchSelectedClasses] =
    useSelectedClasses();
  console.log(selectedClasses);
  const handleDelete = (id) => {
    axiosSecure.delete(`/selectedclasses?id=${id}`).then((data) => {
      console.log(data.data);
      if (data.data.deletedCount > 0) {
        refetchSelectedClasses();
      }
    });
  };
  return (
    <div className="w-[90%]">
      {user && !isSelectedClassesLoading ? (
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
                    Instructor
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Available Seat
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Total Students
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
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Actions
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {selectedClasses.map(
                (
                  {
                    _id,
                    class_name,
                    price,
                    instructor_name,
                    available_seats,
                    addedBy,
                  },
                  index
                ) => (
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
                        {instructor_name}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {available_seats}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {addedBy}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {price}
                      </Typography>
                    </td>
                    <td className="p-4 flex items-center space-x-2">
                      <IconButton onClick={() => handleDelete(_id)} color="red">
                        <FaTrash></FaTrash>
                      </IconButton>
                      <Link to={`/dashboard/payment/${_id}`}>
                      <Button className="flex items-center gap-3">
                        <FaRegCreditCard></FaRegCreditCard>Pay
                      </Button></Link>
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

export default SelectedClasses;
