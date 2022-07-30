import React from 'react'
import { ButtonArea, CardContainer, CardPostContent, User } from './styled'
import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@mui/icons-material'
import { Button, CardActionArea, Typography } from '@mui/material'

const CardComments = (props) => {

    const like = () => {
        if (props.comment.userVote === 1) {
        props.seeComments(props.comment.id)
        } else {
            props.seeComments(props.comment.id, 1) 
        }   
    }

    const dislike = () => {
        if (props.comment.userVote === -1) {
        props.seeComments(props.comment.id)
        } else {
            props.seeComments(props.comment.id, -1) 
        } 
    }

  return (
    <CardContainer onClick={props.onClick}>
      <CardActionArea>
        <User>Enviado por: {props.comment.username}</User>
        <CardPostContent>
          <Typography align={"center"}>{props.comment.body}</Typography>
        </CardPostContent>
        <ButtonArea>
        <Button variant="outlined">
          {props.comment.userVote === 1 ? (
            <ArrowUpwardOutlined onClick={like} color="success" />
          ) : (
            <ArrowUpwardOutlined onClick={like} />
          )}

          {props.comment.voteSum}

          {props.comment.userVote === -1 ? (
            <ArrowDownwardOutlined onClick={dislike} color="secondary" />
          ) : (
            <ArrowDownwardOutlined onClick={dislike} />
          )}
        </Button>
        </ButtonArea>
      </CardActionArea>
    </CardContainer>
  );
}

export default CardComments