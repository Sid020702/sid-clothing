import React from "react";
import { CollectionsOverviewComponent } from "./collections-overview.styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../preview-collection/preview-collection.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";



const CollectionsOverview = ({ collections }) => (
    <CollectionsOverviewComponent>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        )
        )
        }
    </CollectionsOverviewComponent>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);