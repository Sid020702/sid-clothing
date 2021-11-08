import React from 'react';
import { MenuItemComponent, BackroundImageComponent, ContentComponent, TitleComponent, SubTitleComponent } from './menu-item.styles';
import { withRouter } from 'react-router';

const MenuItem = ({ title, imageUrl, history, linkUrl, match, ...otherProps }) => (
    <MenuItemComponent {...otherProps} onClick={() => history.push(`${match.url}${linkUrl}`)} >
        <BackroundImageComponent style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        <ContentComponent>
            <TitleComponent>{title.toUpperCase()}</TitleComponent>
            <SubTitleComponent>SHOP NOW</SubTitleComponent>
        </ContentComponent>
    </MenuItemComponent>
)


export default withRouter(MenuItem);