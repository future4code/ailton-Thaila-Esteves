import React from 'react';
import styled from 'styled-components'

const BigContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const Nomes = styled.h4 `
    margin-bottom: 15px;
`
const Colunas = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`
const Imagem = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

function CardGrande(props) {
    return (
        <BigContainer>
            <Imagem src={ props.imagem } />
            <Colunas>
                <Nomes>{ props.nome }</Nomes>
                <p>{ props.descricao }</p>
            </Colunas>
        </BigContainer>
    )
}

export default CardGrande;