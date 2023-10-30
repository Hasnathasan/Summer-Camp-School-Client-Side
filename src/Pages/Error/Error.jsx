import Lottie from 'lottie-react';
import errorAnimation from '../../../public/error.json'
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import { FaArrowLeft } from 'react-icons/fa';
const Error = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col items-center justify-center gap-3'>
            <Lottie className='w-[40%]' animationData={errorAnimation}></Lottie>
            <Button onClick={ () => navigate("/")} className="flex items-center gap-3">
        <FaArrowLeft></FaArrowLeft> Back to Home
      </Button>
        </div>
    );
};

export default Error;