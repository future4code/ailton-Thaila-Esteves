import React from 'react';
import styled from 'styled-components'

const SmallContainer = styled.div `
    align-items: center;
    padding: 20px 10px;
`

const Imagens = styled.img `
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

const ColunaFlex = styled.div `
    display: flex;
    justify-items: flex-start;
    border: 1px solid black;
    margin: 4px;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 50px;
`

function CardPequeno(props) {
    return (
        <SmallContainer>
            <ColunaFlex>
            <Imagens src={ props.mail } />
            <p>{ props.email }</p>
            </ColunaFlex>
            <ColunaFlex>
                <Imagens src={ props.adress } />
                <p>{ props.endereco }</p>
            </ColunaFlex>
        </SmallContainer>
    )
}

export default CardPequeno;