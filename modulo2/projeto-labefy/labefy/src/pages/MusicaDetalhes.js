import React from "react";

const MusicaDetalhes = (props) => {
    return (
        <div>
            <div>
                <h2>{props.songName}</h2>
                <p>{props.artistName}</p>
                <div 
                    onClick={() => props.apagaMusica(props.musicaId)}
                >
                    X
                </div>
            </div>
            <audio controls="controls"> 
                <source src={props.urlName} type="audio/ogg" />
            </audio>
        </div>
    )
}

export default MusicaDetalhes