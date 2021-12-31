import React from 'react'
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { CollectionItemFooterComponent, CollectionItemComponent, CollectionItemButtonComponent, CollectionItemImageComponent, CollectionItemNameComponent, CollectionItemPriceComponent } from './collection.-item.styles';


const CollectionItem = ({ item, addItem }) => {
    const { id, name, price, imageUrl } = item
    return (
        <CollectionItemComponent id={id}>
            <CollectionItemImageComponent style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <CollectionItemFooterComponent>
                <CollectionItemNameComponent>{name}</CollectionItemNameComponent>
                <CollectionItemPriceComponent>{price}</CollectionItemPriceComponent>
            </CollectionItemFooterComponent>
            <CollectionItemButtonComponent inverted onClick={() => addItem(item)} >ADD TO CART</CollectionItemButtonComponent>
        </CollectionItemComponent>
    )
};


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);