import React from "react";
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Jj1j6SBWzodFEEtHNwg7diloBZVchEvcyo0lDZRpBLdklrleD0Wqzo4IzKlfW3aHQOA7HHjeynD9j7pr5VBpA0r00GYOWo95d'
    const onToken = token => {

        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment Successful')
        }).catch(error => {
            console.log('Payment error: ', error)
            alert(
                'There is an issue with your payment. Please be usre you use the provided credit card'
            )
        })
    }



    return (
        <StripeCheckout
            label='Pay Now'
            name='SIDZ Clothing Ltd.'
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={`Rs ${priceForStripe}/-`}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey} />
    )
}


export default StripeCheckoutButton;