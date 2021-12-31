import React from 'react'
import CollectionItem from '../../components/collection-item/collection-item.components'
import { CollectionPageComponent, ItemsComponent } from './collection.styles'
import { TitleComponent } from '../../components/menu-item/menu-item.styles'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selector'
const CollectionPage = ({ collection }) => {
    // useEffect(() => {
    //     console.log('Subscribing')
    //     const unsubscribeFromCollections = firestore.collection('collections').onSnapshot(snapshot => console.log(snapshot));
    //     return () => {
    //         console.log('Unsubscribing')
    //         unsubscribeFromCollections();                        //Concept
    //     }
    // })
    const { title, items } = collection;
    return (
        <CollectionPageComponent>
            <TitleComponent as='h2' style={{ fontSize: '38px', margin: '0 auto 30px' }}>{title}</TitleComponent>
            <ItemsComponent>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </ItemsComponent>
        </CollectionPageComponent>
    )
}


const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);