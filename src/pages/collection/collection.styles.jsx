import styled from 'styled-components'
import { CollectionItemComponent } from '../../components/collection-item/collection.-item.styles';

export const CollectionPageComponent = styled.div`
display: flex;
flex-direction: column;

`;

export const ItemsComponent = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 10px;

${CollectionItemComponent}{
  margin-bottom: 30px;
}
`;