import React from 'react';
import { PreviewCollectionComponent, PreviewComponent } from './preview-collection.styles';
import CollectionItem from '../collection-item/collection-item.components';
import { TitleComponent } from '../menu-item/menu-item.styles';
import { withRouter } from 'react-router-dom'


const CollectionPreview = ({ title, items, history, match, routeName }) => (
    <PreviewCollectionComponent>
        <TitleComponent style={{
            fontSize: '28px',
            marginBottom: '25px'
        }} onClick={() => history.push(`${match.path}/${routeName}`)} >{title.toUpperCase()}</TitleComponent>
        <PreviewComponent>
            {
                items.filter((item, idx) => idx < 4).map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </PreviewComponent>
    </PreviewCollectionComponent>
)


export default withRouter(CollectionPreview);