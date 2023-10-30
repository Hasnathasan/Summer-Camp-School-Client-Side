import { Button, Card,  Typography } from "@material-tailwind/react";
import useInstructorClasses from "../../../../Hooks/useInstructorClasses";
import useAuth from "../../../../Hooks/useAuth";
import Loader from "../../../../Components/Loader";
import Swal from "sweetalert2";
const MyClasses = () => {
    const {user} = useAuth()
    const [intructorClasses, isIntructorClassesLoading] = useInstructorClasses()
    return (
        <div className="w-[95%]">
      {user && !isIntructorClassesLoading ? (
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
                    Status
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 text-center bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Action
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {intructorClasses.map(
                (
                    {
                        class_name,
                        price,
                        status,
                        available_seats,
                        total_students,
                        feedback
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
                    
                    <td className="p-4 text-center">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {available_seats}
                      </Typography>
                    </td>
                    <td className="p-4 text-center">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {total_students}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                      >
                        {price}
                      </Typography>
                    </td>
                    <td className="p-4 space-x-2">
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {status}
                      </Typography>
                    </td>
                    <td className="p-4 space-x-2">
                    <Button onClick={ () => Swal.fire(feedback || "No feedback from the Admin")} color="green">Feedback</Button>
                    <Button color="blue">Update</Button>
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

export default MyClasses;