import React, {useState, useEffect} from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import httpService from "../services/httpService";
import PaymentForm from "./paymentForm";

const stripePromise = loadStripe(
  "pk_test_51QGJDcI2jODKSNcMpdNJ4i8JGrxJpEy5RCoPJNE35nKIG9msq27OxeIsqvwb25y385yeNEeHuYCEG3unazgDEJI000ph5QP5BY"
);

export default function StripePaymentWrapper({id}) {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const { data } = await httpService.post("/api/stripe-payment/",{order:id});
        setClientSecret(data.clientSecret);
      } catch (ex) {
        console.log(ex);
      }
    };
    createPaymentIntent();
  }, []);

  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="payment">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <PaymentForm id={id}/>
        </Elements>
      )}
    </div>
  );
}
