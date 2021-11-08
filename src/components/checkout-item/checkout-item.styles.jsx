import styled from "styled-components";

export const CheckoutItemComponent = styled.div`
width: 100%;
display: flex;
min-height: 100px;
border-bottom: 1px solid darkgrey;
padding: 15px 0;
font-size: 20px;
align-items: center;
`;


export const ImageContainerComponent = styled.div`
width: 23%;
padding-right: 15px;

img {
  width: 100%;
  height: 100%;
}
`;

export const QuantityComponent = styled.span`
display: flex;
width:23%;
`;

export const ArrowComponent = styled.div`
cursor:pointer
`;

export const ValueComponent = styled.span`
margin:0 10px
`;

export const RemoveButtonComponent = styled.div`
padding-left: 12px;
cursor: pointer;
`;