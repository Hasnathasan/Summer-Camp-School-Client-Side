import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import Loader from "../../../../Components/Loader";
import useSelectedEachClass from "../../../../Hooks/useSelectedEachClass";

const stritePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
    const {id} = useParams()
    const [selectedClass, isSelectedClassLoading] = useSelectedEachClass(id);
    
    if(isSelectedClassLoading ){
        return <Loader></Loader>
    }
    const {price} = selectedClass;
    console.log(parseFloat(price));
    return (
        <>
        {
           selectedClass && <div className="w-[95%] md:w-[60%]">
           <h2 className="text-2xl mb-4">Teka teka tmi uira uira aso</h2>
           <Elements stripe={stritePromise}>
               <CheckoutForm classid={selectedClass._id} mainClassId={selectedClass.classId} classPrice={parseFloat(price)}></CheckoutForm>
           </Elements>
       </div> 
        }
        </>
    );
};

export default Payment;