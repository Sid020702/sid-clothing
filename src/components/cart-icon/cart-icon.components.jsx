import React from 'react'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors '
import { createStructuredSelector } from 'reselect'
import { CartIconComponent, ShoppingIconComponent, ItemCountComponent } from './cart-icon.styles'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconComponent onClick={toggleCartHidden}>
        <ShoppingIconComponent />
        <ItemCountComponent>{itemCount}</ItemCountComponent>
    </CartIconComponent>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);