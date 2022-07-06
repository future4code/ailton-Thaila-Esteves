import React, {Component} from "react";
import styled from "styled-components"

const DadosGerais = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

class Extra extends Component {

    render () {
    return (
        <DadosGerais>
            <h1>O FORMULÁRIO ACABOU</h1>
            <div>
                <p>Obrigado por participar desse formulário!</p>
            </div>
        </DadosGerais>
    )
}
}
export default Extra;