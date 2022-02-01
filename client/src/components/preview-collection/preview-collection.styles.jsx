import styled from 'styled-components'

export const PreviewCollectionComponent = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 30px;

@media screen and (max-width:800px){
    align-items: center;
}
`

export const PreviewComponent = styled.div`
display: flex;
justify-content: space-between;

@media screen and (max-width:800px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px
}
`