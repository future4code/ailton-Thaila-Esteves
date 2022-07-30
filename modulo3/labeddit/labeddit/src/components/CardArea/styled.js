import { Card, CardContent } from "@mui/material";
import styled from "styled-components";

export const CardContainer = styled(Card)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    padding-left: 10px;
`

export const User = styled.p`
    color: #8d8d91;
`

export const ButtonArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 8px;
    padding: 8px;
`

export const CardPostContent = styled(CardContent)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
`