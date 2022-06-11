import React from "react";
import ListaDeMensagem from "./components/ListaDeMensagem";

function App() {
  return (
    <div>
      <ListaDeMensagem
      value={this.state.valorRemetente} 
      onChange={this.escreverInput}
      />
    </div>
  )
}

export default App;
