import React from 'react'
import { connect } from 'react-redux';
import { CheckoutItemComponent, ImageContainerComponent, QuantityComponent, ArrowComponent, ValueComponent, RemoveButtonComponent } from './checkout-item.styles';
import { CollectionItemNameComponent, CollectionItemPriceComponent } from '../collection-item/collection.-item.styles';
import { addItem, clearItemFromCart, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItem, add, remove }) => {
    const { name, imageUrl, quantity, price } = cartItem;
    return (
        <CheckoutItemComponent>
            <ImageContainerComponent>
                <img src={imageUrl} alt="item" />
            </ImageContainerComponent>
            <CollectionItemNameComponent style={{ width: "23%" }}>{name}</CollectionItemNameComponent>
            <QuantityComponent>
                <ArrowComponent onClick={() => {
                    cartItem.quantity > 1 ? remove(cartItem)
                        :
                        clearItem(cartItem)
                }}>&#10094;</ArrowComponent>
                <ValueComponent>{quantity}</ValueComponent>
                <ArrowComponent onClick={() => add(cartItem)}>&#10095;</ArrowComponent>
            </QuantityComponent>
            <CollectionItemPriceComponent style={{ width: "23%" }}>{price}</CollectionItemPriceComponent>
            <RemoveButtonComponent onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonComponent>
        </CheckoutItemComponent>

    )
}


const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    add: item => dispatch(addItem(item)),
    remove: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);