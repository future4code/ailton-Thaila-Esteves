import react from "react";

class ListaDeMensagem extends React.Component() {
state = {
    valorRemetente: ""
}

escreverInput = (event) => {
    this.setState({valorRemetente: event.target.value})
}
render(){
    return (
        <div>
            <input 
            placeholder={"Remente"}
            value={this.state.valorRemetente} 
            onChange={this.escreverInput} 
            />
            <button onClick={this.props.aoEnviar}></button>
        </div>
    )
}
} 

export default ListaDeMensagem 

