import { Button } from "@material-tailwind/react";
import useAuth from "../../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const AddClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    console.log(data);
    const {
      class_name,
      class_image,
      instructor_name,
      instructor_email,
      available_seats,
      price,
    } = data;
    const newClass = {
      class_name,
      class_image,
      instructor_name,
      instructor_email,
      available_seats: parseFloat(available_seats),
      price: parseFloat(price),
      status: "pending",
      total_students: 0,
    };

    axiosSecure.post("/classes", newClass).then((data) => {
      if (data.data.insertedId) {
        reset();
        Swal.fire(
          "Class Added",
          "It will visible to students if Admin approved id",
          "success"
        );
      }
    });
  };
  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[90%] mx-auto card bg-white shadow-lg p-10"
      >
        <h2 className="text-3xl font-bold text-slate-500 mb-4 text">
          Add a new Class
        </h2>
        <div className="grid gap-4 items-center justify-center sm:grid-cols-2 sm:gap-6">
          <div className="">
            <label
              htmlFor="class_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Class Name
            </label>
            {errors.class_name?.type === "required" && (
              <p className="text-red-500" role="alert">
                Class Name is required
              </p>
            )}
            <input
              type="text"
              {...register("class_name", { required: true })}
              name="class_name"
              id="class_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type Class Name"
            />
          </div>
          <div className="">
            <label
              htmlFor="class_image"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Class Image
            </label>
            {errors.class_image?.type === "required" && (
              <p className="text-red-500" role="alert">
                Photo url is required
              </p>
            )}
            <input
              type="url"
              {...register("class_image", { required: true })}
              name="class_image"
              id="class_image"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Class image url"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="instructor_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Instructor Name
            </label>
            {errors.instructor_name?.type === "required" && (
              <p className="text-red-500" role="alert">
                Instructor Name is required
              </p>
            )}
            <input
              type="text"
              {...register("instructor_name", { required: true })}
              name="instructor_name"
              id="instructor_name"
              defaultValue={user?.displayName}
              readOnly
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="instructor_email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Instructor Email
            </label>
            {errors.instructor_email?.type === "required" && (
              <p className="text-red-500" role="alert">
                Instructor Email is required
              </p>
            )}
            <input
              type="email"
              {...register("instructor_email", { required: true })}
              name="instructor_email"
              id="instructor_email"
              defaultValue={user?.email}
              readOnly
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="available_seats"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Available Seats
            </label>
            {errors.available_seats?.type === "required" && (
              <p className="text-red-500" role="alert">
                Available Seats is required
              </p>
            )}
            <input
              type="number"
              {...register("available_seats", { required: true })}
              name="available_seats"
              id="available_seats"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price
            </label>
            {errors.price?.type === "required" && (
              <p className="text-red-500" role="alert">
                Price is required
              </p>
            )}
            <input
              type="number"
              {...register("price", { required: true })}
              name="price"
              id="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
          </div>
        </div>
        <Button className="mt-5" type="submit" color="blue">
          Add Class
        </Button>
      </form>
    </div>
  );
};

export default AddClass;
