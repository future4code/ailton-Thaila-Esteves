import React, {Component} from "react";
import styled from "styled-components"

class PerguntasAbertas extends Component {

    render () {
    return (
        <div>
            <p>{this.props.pergunta}</p>
        </div>
    )
}
}
export default PerguntasAbertas;