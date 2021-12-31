import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors ";
import { selectCartTotal } from "../../redux/cart/cart.selectors ";
import CheckoutItem from "../../components/checkout-item/checkout-item.components";
import { CheckoutComponent, CheckoutHeaderComponent, TestWarningComponent, TotalComponent, HeaderBlockComponent } from "./checkout.styles";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
const CheckoutPage = ({ cartItems, total }) => (
    <CheckoutComponent>
        <CheckoutHeaderComponent>
            <HeaderBlockComponent>
                <span>Product</span>
            </HeaderBlockComponent>
            <HeaderBlockComponent>
                <span>Description</span>
            </HeaderBlockComponent>
            <HeaderBlockComponent>
                <span>Quantity</span>
            </HeaderBlockComponent>
            <HeaderBlockComponent>
                <span>Price</span>
            </HeaderBlockComponent>
            <HeaderBlockComponent>
                <span>Remove</span>
            </HeaderBlockComponent>



        </CheckoutHeaderComponent>
        {
            cartItems.map(cartItem =>
            (<CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }
        <TotalComponent>
            <span>TOTAL: Rs {total}/- </span>
        </TotalComponent>
        <TestWarningComponent>
            *Please use the following test credit card from payment*

            <br />
            4242 4242 4242 4242 - Exp: 01/22 - CVV:123
        </TestWarningComponent>
        <StripeCheckoutButton price={`Rs ${total}/-`} style={{ marginLeft: 'auto', marginTop: '50px' }} />
    </CheckoutComponent>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);