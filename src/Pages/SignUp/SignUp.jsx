import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { useState } from "react";
import SocialLogin from "../../Components/SocialLogin";
import axios from "axios";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { signUpWithEmail, logOut } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const onSubmit = (data) => {
    setLoading(true);
    setError("");
    console.log("in");
    const { name, email, password, confirmPassword, photoUrl } = data;
    const newUser = { name, email };
    if (password !== confirmPassword) {
      return alert("Confirmation password unmatched");
    }
    signUpWithEmail(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            axios.post("https://summer-camp-server-black.vercel.app/users", newUser).then((data) => {
              if (data.data.insertedId) {
                logOut();
                reset();
                Swal.fire("Account created successfully", " ", "success");
                setLoading(false);
                setError("");
              }
            });
          })
          .catch((error) => {
            setError(error.message);
            setLoading(false);
          });
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900 grid grid-cols-1 md:grid-cols-2">
      <div>
        <h1>Hello</h1>
      </div>
      <div className="flex my-10 justify-center items-center">
        <div className=" w-5/6 bg-white rounded-lg shadow dark:border md:mt-0  xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className=" p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-white">
              Create your Free Account
            </h1>
            <SocialLogin from={"/"} setError={setError}></SocialLogin>
            <div className="divider">OR</div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <h3 className="text-red-500 font-semibold text-xl">
                {error.slice(9, -1)}
              </h3>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your name
                </label>
                {errors.name?.type === "required" && (
                  <p className="text-red-500" role="alert">
                    Name is required
                  </p>
                )}
                <input
                  type="name"
                  name="name"
                  {...register("name", { required: true })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                {errors.email?.type === "required" && (
                  <p className="text-red-500" role="alert">
                    Email is required
                  </p>
                )}
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500" role="alert">
                    Password must have a capital letter, a special character and
                    6 character{" "}
                  </p>
                )}
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    pattern: /^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,}$/,
                  })}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                {errors.confirmPassword?.type === "required" && (
                  <p className="text-red-500" role="alert">
                    Confrimation Password is required
                  </p>
                )}
                <input
                  type="confirm-password"
                  name="confirmPassword"
                  {...register("confirmPassword", { required: true })}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="photo"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Photo URL
                </label>
                {errors.photoUrl?.type === "required" && (
                  <p className="text-red-500" role="alert">
                    Photo Url is required
                  </p>
                )}
                <input
                  type="url"
                  {...register("photoUrl", { required: true })}
                  placeholder="photo url"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 text-white bg-[#0b86d6] hover:bg-[#0f7fca] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#0b86d6] dark:hover:bg-[#0f7fca] dark:focus:ring-primary-800"
              >
                {loading ? (
                  <>
                    {" "}
                    <span className="loading loading-spinner"></span>
                    loading
                  </>
                ) : (
                  <span>Create an account</span>
                )}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-[#0b86d6] hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
