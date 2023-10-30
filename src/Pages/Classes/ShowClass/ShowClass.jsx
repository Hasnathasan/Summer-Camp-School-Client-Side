import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
const ShowClass = ({eachClass, userRole}) => {
  const [axiosSecure] = useAxiosSecure();

  
    const { _id, class_name, class_image, price, available_seats, instructor_name, total_students} =
    eachClass;
    const {user} = useAuth()
    const handleSelect = id => {
      const selectedClass = {classId: id, class_image, class_name, price, available_seats, instructor_name, total_students, addedBy: user.email}
      axiosSecure.post("/selectedclasses", selectedClass)
      .then(data => {
        console.log(data.data);
        if(data.data.insertedId){
          alert("added")
        }
      })
    }
    return (
        <Card drag className={`mt-6 w-full ${available_seats == 0 ? "bg-red-300 hover:bg-red-400 transition-all" : ""}`}>
      <CardHeader color="blue-gray" className="relative h-56">
        <img className="h-full w-full" src={class_image}  />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {class_name}{" "}
        </Typography>
        <div className="flex justify-between my-3 items-center">
            <Typography>Price: {price}</Typography>
            <Typography>Available seats: {available_seats}</Typography>
        </div>
        <Typography>Instructor: {instructor_name}</Typography>
      </CardBody>
      <CardFooter  className="pt-0">
      {!user?<Button variant="outlined">Login To Select</Button>:
        <Button onClick={ () => handleSelect(_id)} disabled={userRole === "admin" || userRole === "instructor" || available_seats === 0}>Select</Button>}
      </CardFooter>
    </Card>
    );
};

export default ShowClass;