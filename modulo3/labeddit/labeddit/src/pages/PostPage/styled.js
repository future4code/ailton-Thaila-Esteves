import styled from "styled-components";
import { Card, CardContent } from "@mui/material";

export const FeedPosts = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 30px;
    align-items: center;
    justify-content: center;
`

export const CardContainer = styled(Card)`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CardPostContent = styled(CardContent)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`

export const AddPostFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`

export const FormCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`