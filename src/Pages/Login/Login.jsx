import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin";
import Lottie from "lottie-react";
import loginAnimation from "../../../public/106680-login-and-sign-up.json";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { loginWithEmail } = useContext(AuthContext);
  const [passhide, setPasshide] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  let from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    setError("");
    setLoading(true);
    console.log(data);
    const { email, password } = data;
    loginWithEmail(email, password)
      .then((result) => {
        console.log(result.user);
        reset();
        Swal.fire(
          "Login Successfull",
          "User has logged in successfully",
          "success"
        );
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900 grid grid-cols-1 items-center lg:grid-cols-2 my-5 ">
      <div>
        <Lottie animationData={loginAnimation} loop={true} />
      </div>
      <div className="w-full flex px-5 justify-center items-center md:px-6 py-8 mx-auto md:h-max lg:py-0">
        <div className="w-full md:w-[85%] bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
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
                  htmlFor="email"
                  className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
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
                  {...register("email", { required: true })}
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                {errors.password?.type === "required" && (
                  <p className="text-red-500" role="alert">
                    Password is required
                  </p>
                )}
                <div className="flex justify-center items-center relative">
                  <input
                    type={passhide ? "password" : "text"}
                    {...register("password", { required: true })}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  <span className="absolute right-4">
                    {passhide ? (
                      <FaEyeSlash onClick={() => setPasshide(!passhide)} />
                    ) : (
                      <FaEye onClick={() => setPasshide(!passhide)} />
                    )}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-[#0b86d6] hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 text-white bg-[#0b86d6] hover:bg-[#0f7fca] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#0b86d6] dark:hover:bg-[#1d4ed8] dark:focus:ring-primary-800"
              >
                {loading ? (
                  <>
                    {" "}
                    <span className="loading loading-spinner"></span>
                    loading
                  </>
                ) : (
                  <span>Sign In</span>
                )}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Dont have an account yet?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-[#0b86d6] hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
              <div className="divider">OR</div>
            </form>
            <SocialLogin from={from} setError={setError}></SocialLogin>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
