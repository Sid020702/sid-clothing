export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === cartItemToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)
    if (existingCartItem) {
        return cartItems.map((cartItem) => {
            const { quantity } = cartItem;
            if (cartItem.id === cartItemToRemove.id)
                return ({ ...cartItem, quantity: quantity - 1 })
            else
                return cartItem


        })


    }
}