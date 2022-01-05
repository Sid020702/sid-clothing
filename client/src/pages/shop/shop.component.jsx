import React, { useEffect } from 'react';
import { Route } from 'react-router-dom'
import CollectionPageContainer from '../collection/collection.container.jsx';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions.js';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'



const ShopPage = ({ match, fetchCollectionsStart }) => {


    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart])



    // componentDidMount() {
    // fetch('https://firestore.googleapis.com/v1/projects/crown-db-a28ca/databases/(default)/documents/collections')
    //     .then(response => response.json())
    //     .then(collections => console.log(collections));

    //     const { fetchCollectionsStart } = this.props;
    //     fetchCollectionsStart();

    // }



    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>
    )
}





const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})


export default connect(null, mapDispatchToProps)(ShopPage);