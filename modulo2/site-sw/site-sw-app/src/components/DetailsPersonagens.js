import React from "react";
import styled from "styled-components";

const DetailsPage = styled.div`
    border: 1px solid orange;
    margin-top: 10px;
`

export default class DetailsPersonagens extends React.Component {
    render() {
        return (
            <DetailsPage>HELLO, WELCOME TO THE CHARACTER DETAILS PAGE</DetailsPage>
        )
    }
}