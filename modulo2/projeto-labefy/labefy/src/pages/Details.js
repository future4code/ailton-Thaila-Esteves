import React from "react";
import axios from "axios";
import MusicaDetalhes from "./MusicaDetalhes"

class Details extends React.Component {
  state = {
    playlistDetail: [],
    songName: "",
    artistName: "",
    urlName: ""
  };

  componentDidMount() {
    this.verDetalhes();
  }
 
  verDetalhes = () => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`, {
        headers: {
            Authorization: "thaila-esteves-ailton"
        }
    }). then (response => {
      this.setState({playlistDetail: response.data.result.tracks})
  }).catch ((err) => {
      alert(err.response)
  })
}

  trocaNomeMusica = event => {
    const novoNomeMusica = event.target.value

    this.setState({songName: novoNomeMusica})
  }

  trocaNomeArtista = event => {
    const novoNomeArtista = event.target.value

    this.setState({artistName: novoNomeArtista})
  }

  trocaNomeUrl = event => {
    const novoNomeUrl = event.target.value

    this.setState({urlName: novoNomeUrl})
  }

  addSong = () => {
    const body = {
        name: this.state.songName,
        artist: this.state.artistName,
        url: this.state.urlName
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`, body, {
        headers: {
            Authorization: "thaila-esteves-ailton"
        }
    }).then (response => {
        alert(`Música adicionada`)
        this.verDetalhes()
    }).catch(err => {
        alert(`Música não foi adicionada`)
        console.log(err.response)
    })
    this.setState({songName: "", artistName: "", urlName: ""})
  }

  apagaMusica = (idMusica) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks/${idMusica}`, {
      headers: {
        Authorization: "thaila-esteves-ailton"
      }
    }).then(() => {
      this.verDetalhes()
    }).catch(err => {
      console.log(err.response)
  })
  }
  render() {
    const musicas = this.state.playlistDetail.map(musica => {
      return <MusicaDetalhes
        key={musica.id}
        songName={musica.name}
        artistName={musica.artist}
        urlName={musica.url}
        idMusica={musica.id}
        apagaMusica={this.apagaMusica}
      />
    })
    return (
      <div>
       <div>
        <h3>Adicionar música nova na sua playlist:</h3>
        <input 
            placeholder="Nome da música"
            name="songName"
            value={this.state.songName}
            onChange={this.trocaNomeMusica}
        />
        <input 
            placeholder="Nome do artista"
            name="artistName"
            value={this.state.artistName}
            onChange={this.trocaNomeArtista}
        />
        <input 
            placeholder="Coloque aqui a url da música"
            name="urlName"
            value={this.state.urlName}
            onChange={this.trocaNomeUrl}
        />
        <button onClick={this.addSong}>Adicionar música</button>
        </div>
        {musicas}
        <button onClick={() => this.props.mudarPagina("list", "")}>Voltar para todas as playlists</button>
      </div>
    );
  }
}

export default Details



