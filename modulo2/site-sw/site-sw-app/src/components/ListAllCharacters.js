import axios from "axios";
import React from "react";
import { BASE_URL } from '../constant/urls';


export default class ListAllCharacters extends React.Component{
    state = {
        list: []
    }

    componentDidMount() {
        this.getListAllCharacters()
    }
    getListAllCharacters = () => {
        axios.get(`${BASE_URL}/people`)
        .then((res) => this.setState({list: res.data.results}))
        .catch((err) => console.log(err.response))
    }

    render() {
        const characterRenderized = this.state.list.map((character) => {
            return <li key={character.url}>{character.name}</li>
        })
        return (
            <ul>{characterRenderized}</ul>
        )
    }
}

