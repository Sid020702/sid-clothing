import React from "react";
import CustomButton from "../custom-button/custom-button.components";
import CartItem from "../cart-item/cart-item.components";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors ";
// import { createStructuredSelector } from "reselect";
// import { withRouter } from "react-router";
import { useHistory } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { CartDropdownComponent, CartItemsComponent, EmptyMessageComponent } from "./cart-dropdown.styles";

const CartDropdown = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const history = useHistory();
    return (
        <CartDropdownComponent>
            <CartItemsComponent>
                {
                    cartItems.length ?
                        cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem} />
                        ))
                        :
                        (<EmptyMessageComponent>Your cart is empty.</EmptyMessageComponent>)
                }
                <CustomButton onClick={() => {
                    history.push('/checkout')
                    dispatch(toggleCartHidden())
                }}>GO TO CHECKOUT</CustomButton>
            </CartItemsComponent>
        </CartDropdownComponent>
    )
}


// const mapStateToProps = createStructuredSelector({
//     cartItems: selectCartItems
// })

export default CartDropdown;