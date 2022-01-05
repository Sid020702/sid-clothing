import styled from 'styled-components'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'


export const CartIconComponent = styled.div`
width: 25px;
height: 25px;
position: relative;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
margin-left: 20px;
`;

export const ShoppingIconComponent = styled(ShoppingIcon)`
width: 24px;
height: 24px;
`;

export const ItemCountComponent = styled.span`
position: absolute;
font-size: 10px;
font-weight: bold;
bottom: 2px;
`;

