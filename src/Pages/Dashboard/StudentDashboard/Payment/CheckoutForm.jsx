import { Button } from "@material-tailwind/react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import useEnrolledClasses from "../../../../Hooks/useEnrolledClasses";
import useClasses from "../../../../Hooks/useClasses";
import useSelectedClasses from "../../../../Hooks/useSelectedClasses";
import useClass from "../../../../Hooks/useClass";

const CheckoutForm = ({classPrice, classid, mainClassId}) => {
  console.log(classPrice, classid);
    const stripe = useStripe();
    const {user} = useAuth();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [, , refetchEnrolledClasses] = useEnrolledClasses();
    const [, , refetchClasses] = useClasses();
    const [, , refetchSelectedClasses] = useSelectedClasses()
    const [error, setError] = useState("");
    const [eachClass] = useClass(mainClassId);
    console.log(eachClass);
    
    
    const [clientSecret, setClientSecret] = useState("")
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState();
    
    console.log(classPrice);
    useEffect( () => {
      if(classPrice > 0){
        axiosSecure.post('/create-payment-intent', {classPrice})
        .then(res => {
          setClientSecret(res.data.clientSecret)
        })
      }
    },[axiosSecure, classPrice])
    
    

    const handleSubmit = async(event) => {
        event.preventDefault()
        
        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement)
        if(card === null){
            return
        }
        console.log("card", card);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })

        if(error){
          console.log(error);
          setError(error.message)
          return
        }
        else if(paymentMethod){
            setError("")
        }

        setProcessing(true)
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: card,
              billing_details: {
                email: user?.email || "unknown ",
                name: user?.displayName || "anonymous"
              },
            },
          },
        );
        if(confirmError){
          console.log(confirmError.message);
          setError(confirmError.message)
        }
        setProcessing(false)
        if(paymentIntent.status === "succeeded"){
          const transactionId = paymentIntent.id;
          console.log(transactionId);
          setTransactionId(transactionId)
          const {class_image, class_name, instructor_email, instructor_name, price,available_seats, status, total_students } = eachClass;
          const payment = {class_name, email: user?.email, transactionId: transactionId, date: new Date(), classPrice, classid }
          const enrolledClass = { class_name, class_image, price, instructor_email, instructor_name, available_seats: available_seats-1 , total_students: total_students+1, status, mainClassId: mainClassId, enrolledBy: user?.email};
          axiosSecure.post('/payments', payment)
            .then(data => {
                console.log(data.data);
                axiosSecure.post("/enrolledclasses", enrolledClass)
                  .then(result => {
                    console.log(result.data);
                    axiosSecure.patch(`/classes/update/${mainClassId}`)
                  .then(res => {
                    console.log(res.data);
                    refetchEnrolledClasses();
                    refetchClasses();
                    refetchSelectedClasses()
                  })
                  })
                
            })

        }
    }
    return (
       <>
       <div className="mb-20">
       {
        error? <p className="text-red-400">{error}</p>: ""
       }
    {
        transactionId? <p className="text-green-400">Payment successfully completed with transaction id <span className="text-green-500"> {transactionId}</span></p>: ""
       }
       </div>
         <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <Button type="submit" className="mt-5" color="blue" disabled={!stripe || !clientSecret || processing}>Pay</Button>
    </form>
       </>
       
    );
};

export default CheckoutForm;