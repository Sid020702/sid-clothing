import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect'
import { compose } from 'redux';
// import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';
import WithSpinner from '../with-spinner/with-spinner.components';
import CollectionsOverview from './collections-overview.component'

const mapStateToProps = state => ({
    isLoading: !selectIsCollectionsLoaded(state)
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer

