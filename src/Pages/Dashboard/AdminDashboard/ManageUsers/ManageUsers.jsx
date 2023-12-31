import Loader from "../../../../Components/Loader";
import useAuth from "../../../../Hooks/useAuth";
import { Button, Card, Chip, Typography } from "@material-tailwind/react";
import useUsers from "../../../../Hooks/useUsers";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
const ManageUsers = () => {
  const { user } = useAuth();
  const [users, isUsersLoading, refetch] = useUsers();
  console.log(users);
  const [axiosSecure] = useAxiosSecure();
  const handleRoleChange = (email, role) => {
    console.log(email, role);
    axiosSecure.patch(`/userrole/${email}`, {role})
        .then(data => {
            console.log(data.data)
            if(data.data.modifiedCount > 0){
                refetch()
            }
        })
  };

  return (
    <div className="w-[90%]">
      {user && !isUsersLoading ? (
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
                    User Name
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Email
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Role
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Change User Role
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map(({ name, email, role }, index) => (
                <tr key={index} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {email}
                    </Typography>
                  </td>
                  <td className="p-4 flex justify-center">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-center"
                    >
                      <Chip className="w-min" variant="ghost" value={role || "Student"} />
                      
                    </Typography>
                  </td>
                  <td className="p-4 space-x-2">
                    <Button
                      onClick={() => handleRoleChange(email, "admin")}
                      color="red"
                      disabled={role === "admin"}
                    >
                      Admin
                    </Button>
                    <Button onClick={() => handleRoleChange(email, "instructor")} color="green" disabled={role === "instructor"}>Instructor</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
};

export default ManageUsers;
