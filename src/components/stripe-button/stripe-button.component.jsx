import React from "react";
import StripeCheckout from 'react-stripe-checkout'


const StripeCheckoutButton = ({ price }) => {

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Jj1j6SBWzodFEEtHNwg7diloBZVchEvcyo0lDZRpBLdklrleD0Wqzo4IzKlfW3aHQOA7HHjeynD9j7pr5VBpA0r00GYOWo95d'

    return (
        <StripeCheckout
            label='Pay Now'
            name='SIDZ Clothing Ltd.'
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey} />
    )
}


export default StripeCheckoutButton;