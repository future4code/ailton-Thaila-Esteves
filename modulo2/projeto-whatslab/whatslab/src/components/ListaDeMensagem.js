import React from "react"

class ListaDeMensagem extends React.Component{
    state = {
        valorRemetente: ""
    }

    escreverInput = (event) => {
        this.setState({valorRemetente: event.target.value})
    }
    render(){
        return (
            <div>
                <input value={this.state.valorRemetente} onChange={this.escreverInput} />
            </div>
        )
    }
} 

export default ListaDeMensagem

