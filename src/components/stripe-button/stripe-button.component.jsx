import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; //As stripe API wants price in cents
  const publishableKey =
    "pk_test_51KbHnVSGSaiS6p8fvODVKVJQLH6Ku5dSue2We8YV54LeVDPx8XkUbGpF1nqaEqIPn9bmpgPY7SJlyEaBcWG7zYAJ00jVJpQJPx";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successfull !!!!");
  };

  //For testing can go to https://stripe.com/docs/testing for card numbers

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Pvt. Ltd."
      billingAddress
      shippingAddress
      image="https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F26%2F41%2F5d%2F26415d4171bfcacaee979cc18cf6756f.png&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F404620347777234314%2F&tbnid=AUh9s7hkPpb7CM&vet=12ahUKEwjAgPS1prj2AhX9Q2wGHWrOAbgQMygGegUIARDRAQ..i&docid=Oe1err75aJSwLM&w=744&h=1052&q=black%20crown%20svg&hl=en&ved=2ahUKEwjAgPS1prj2AhX9Q2wGHWrOAbgQMygGegUIARDRAQ"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
