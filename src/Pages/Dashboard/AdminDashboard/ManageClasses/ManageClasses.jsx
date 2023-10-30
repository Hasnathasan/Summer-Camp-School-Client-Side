import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";
import useAuth from "../../../../Hooks/useAuth";
import Loader from "../../../../Components/Loader";
import useClasses from "../../../../Hooks/useClasses";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure()
  const { user } = useAuth();
  const [classes, isClassesLoading, refetchClasses] = useClasses();
  console.log( classes, isClassesLoading);
  if (!user || isClassesLoading) {
    return <Loader></Loader>;
  }

  const handleApprove = (id) => {
    axiosSecure
      .patch(`/classes/setapprove/${id}`)
      .then((data) => {
        console.log(data.data)
        if(data.data.modifiedCount > 0){
          refetchClasses()
        }
      });
  };

  const handleDeny = (id) => {
    axiosSecure
      .patch(`/classes/setdeny/${id}`)
      .then((data) => {
        console.log(data.data)
        if(data.data.modifiedCount > 0){
          refetchClasses()
        }
      });
  };

  const handleSendFeedback = id => {
    Swal.fire({
      title: 'Your Feedback about the Class',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Send Feedback',
      showLoaderOnConfirm: true,
      preConfirm: (feedback) => {
        console.log(feedback);
        axiosSecure.patch(`/classes/feedback/${id}`, {feedback})
            .then(data => {
              if(data.data.modifiedCount){
                Swal.fire(
                  'Feedback has been sent',
                  'Instructor can see your feedback',
                  'success'
                )
              }
            })
      },
      allowOutsideClick: () => !Swal.isLoading()
    })
  }

  return (
    <div className="w-[95%] grid grid-cols-1 md:grid-cols-2 gap-20 my-20">
      {classes.map(
        (
          {
            _id,
            class_image,
            class_name,
            instructor_name,
            instructor_email,
            price,
            status,
            available_seats,
          },
          index
        ) => (
          <Card key={index} className="mt-6 w-full">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                className="w-full h-full"
                src={class_image}
                alt="img-blur-shadow"
              />
            </CardHeader>
            <CardBody className="space-y-3">
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {class_name}
              </Typography>
              <div className="flex justify-between items-center">
                <Typography>Instructor: {instructor_name}</Typography>
                <Typography>Available Seats: {available_seats}</Typography>
              </div>
              <div className="flex justify-between items-center">
                <Typography>Email: {instructor_email}</Typography>
                <Typography>Price: {price}</Typography>
              </div>
              <Chip className="w-min" variant="ghost" value={status} />
            </CardBody>
            <CardFooter className="pt-0 flex justify-between gap-1">
              <Button
                onClick={() => handleApprove(_id)}
                color="blue"
                disabled={status === "approved" || status === "denied"}
              >
                Approve
              </Button>
              <Button
              onClick={() => handleDeny(_id)}
                color="red"
                disabled={status === "approved" || status === "denied"}
              >
                Deny
              </Button>
             <Button onClick={() => handleSendFeedback(_id)} color="green" disabled={status === "approved" || status === "pending"}>Feedback</Button>
            </CardFooter>
          </Card>
        )
      )}
    </div>
  );
};

export default ManageClasses;


