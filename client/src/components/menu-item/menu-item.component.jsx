import React from 'react';
import { MenuItemComponent, BackroundImageComponent, ContentComponent, TitleComponent, SubTitleComponent } from './menu-item.styles';
import { withRouter } from 'react-router';

const MenuItem = ({ title, imageUrl, history, linkUrl, match, ...otherProps }) => (
    <MenuItemComponent {...otherProps} onClick={() => history.push(`${match.url}${linkUrl}`)} >
        <BackroundImageComponent className='backround-image' imageUrl={imageUrl} />
        <ContentComponent className='content'>
            <TitleComponent>{title.toUpperCase()}</TitleComponent>
            <SubTitleComponent>SHOP NOW</SubTitleComponent>
        </ContentComponent>
    </MenuItemComponent>
)


export default withRouter(MenuItem);