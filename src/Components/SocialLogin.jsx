import { FaGithub } from "react-icons/fa";
import gLogo from "../assets/google-logo.png";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SocialLogin = ({setError, from}) => {
    const {googleSignIn} = useAuth()
    const navigate = useNavigate()
    const handleGoogleLogin = () => {
        setError("")
        googleSignIn()
            .then(result => {
              axios.post("https://summer-camp-server-black.vercel.app/users", {name: result.user?.displayName, email: result.user?.email })
                .then(data => {
                  if(data.data.insertedId){
                    Swal.fire(
                    'Login Successfull',
                    'User has logged in successfully',
                    'success'
                    )
                  }
                })
                navigate(from, { replace: true });
                console.log(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div className="flex justify-evenly items-center flex-col md:flex-row gap-3">
              <button onClick={handleGoogleLogin} className="btn border border-slate-200 rounded-lg bg-white">
                <p className="flex gap-1 items-center">
                  <img className="w-5" src={gLogo} alt="" /> Sign up with Google
                </p>
              </button>
              <button>
                <p className="btn border flex gap-1 border-slate-200 rounded-lg bg-white">
                  <FaGithub></FaGithub> Sign up with Github
                </p>
              </button>
            </div>
    );
};

export default SocialLogin;