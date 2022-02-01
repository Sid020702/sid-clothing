import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.components";

export const CollectionItemButtonComponent = styled(CustomButton)`
width:80%;
opacity: 0.7;
position:absolute;
top:200px;
display: none;

@media screen and (max-width:800px){
  display:block;
  opacity:0.9;
  min-width:unset;
  padding: 0 10px;
}
`

export const CollectionItemImageComponent = styled.div`
width: 100%;
height: 95%;
background-size: cover;
background-position: center;
margin-bottom: 5px;
`;

export const CollectionItemComponent = styled.div`
width: 22vw;
display: flex;
flex-direction: column;
height: 350px;
align-items: center;
position: relative;
&:hover{
    ${CollectionItemImageComponent}{
      opacity: 0.8;
    }

    ${CollectionItemButtonComponent}{
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width:800px){
    width: 40vw;
    &:hover{
      ${CollectionItemImageComponent}{
        opacity: unset;
      }
  
      ${CollectionItemButtonComponent}{
        opacity: unset;
      }
    }
  }
`

export const CollectionItemNameComponent = styled.span`
width: 90%;
margin-bottom: 15px;
`
export const CollectionItemPriceComponent = styled.span`
width: 10%;
`

export const CollectionItemFooterComponent = styled.div`
width: 100%;
height: 5%;
display: flex;
justify-content: space-between;
font-size: 18px;
`

