import React from "react";
import Details from "./Details";
import ListaComPlaylists from "./ListaComPlaylists";

class SeeAllPlaylist extends React.Component {
    state = {
        id: "",
        pagina: "lista",
    }

    mudarPagina = (pagina, id) => {
        this.setState({
            pagina: pagina,
            id: id
        })
    }
  render () {   
    const mostraPagina = () => {
        if (this.state.pagina === "lista") {
            return <ListaComPlaylists mudarPagina={this.mudarPagina} />
        } else if (this.state.pagina === "details"){
            return <Details mudarPagina={this.mudarPagina} id={this.state.id} />
        }
    }       
    return (            
        <div>
            {mostraPagina()}
            <button onClick={this.props.goToAdd}>Adicionar mais playlist</button>
        </div>
    )
  }
}

export default SeeAllPlaylist

            
        
       
    


