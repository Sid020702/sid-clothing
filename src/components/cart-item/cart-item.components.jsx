import React from 'react'
import { CollectionItemPriceComponent } from '../collection-item/collection.-item.styles'
import { CartItemComponent, CartItemImg, CartItemName, I, ItemDetailsComponent } from './cart-item.styles'
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemComponent>
        <CartItemImg src={imageUrl} alt="item" />
        <ItemDetailsComponent>
            <CartItemName>{name}</CartItemName>
            <CollectionItemPriceComponent>
                {quantity}x{price}</CollectionItemPriceComponent>
        </ItemDetailsComponent>
    </CartItemComponent>
)

export default CartItem