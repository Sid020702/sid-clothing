import styled from 'styled-components'



export const CartDropdownComponent = styled.div`
position: absolute;
width: 240px;
height: 340px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: white;
top: 90px;
right: 40px;
z-index: 5;
`;


export const EmptyMessageComponent = styled.span`
font-size: 18px;
margin:100px auto;
`

export const CartItemsComponent = styled.div`
height: 300px;
display: flex;
flex-direction: column;
overflow: scroll;
`