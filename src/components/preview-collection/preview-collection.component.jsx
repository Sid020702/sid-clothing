import React from 'react';
import { PreviewCollectionComponent, PreviewComponent } from './preview-collection.styles';
import CollectionItem from '../collection-item/collection-item.components';
import { TitleComponent } from '../menu-item/menu-item.styles';


const CollectionPreview = ({ title, items }) => (
    <PreviewCollectionComponent>
        <TitleComponent style={{
            fontSize: '28px',
            marginBottom: '25px'
        }}>{title.toUpperCase()}</TitleComponent>
        <PreviewComponent>
            {
                items.filter((item, idx) => idx < 4).map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </PreviewComponent>
    </PreviewCollectionComponent>
)


export default CollectionPreview;