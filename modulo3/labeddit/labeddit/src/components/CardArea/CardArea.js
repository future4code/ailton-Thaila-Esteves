import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { CardContainer, CardPostContent, ButtonArea, User } from './styled'
import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutlineRounded } from '@mui/icons-material'
import { Button, CardActionArea, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { goToPost } from '../../routes/coordinator'

const CardArea = (props) => {
  const navigate = useNavigate()

  const onClickCard = (id) => {
    goToPost(navigate, id)
  }

  const votes = (id, direction) => {
    const headers = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }
  
    const body = {
      direction: direction
    }
  
    if (direction === 1) {
      axios.post(`${BASE_URL}/posts/${id}/votes`, body, headers)
      .then((response) => {
        props.getFeed()
        console.log(response, "criou votos")
      })
      .catch((error) => {
        console.log(error.message)
      })
    } else if (direction === -1) {
      axios.put(`${BASE_URL}/posts/${id}/votes`, body, headers)
      .then((response) => {
        props.getFeed()
        console.log(response, "mudou voto")
      })
      .catch((error) => {
        console.log(error.message)
      })
    } else {
      axios.delete(`${BASE_URL}/posts/${id}/votes`, headers)
      .then((response) => {
        props.getFeed()
        console.log(response, "deletou voto")
      })
      .catch((error) => {
        console.log(error.message)
      })
    }
  }
 
  const like = () => {
    if (props.post.userVote === 1) {
      votes(props.post.id)
    } else {
      votes(props.post.id, 1)
    }
  }

  const dislike = () => {
    if (props.post.userVote === -1) {
      votes(props.post.id)
    } else {
      votes(props.post.id, -1)
    }
  }

  return (
    <CardContainer onClick={props.onClick}>
      <CardActionArea>
        <User>Enviado por: {props.post.username}</User>
        <CardPostContent>
          <Typography align={'center'}>
              {props.post.body}
          </Typography>
        </CardPostContent>
        <ButtonArea>
          <Button variant="outlined">
              
                {props.post.userVote === 1 ? (
                  <ArrowUpwardOutlined
                  onClick={like}
                  color="success"
                  />
                ) : (
                  <ArrowUpwardOutlined
                  onClick={like}
                  />
                )}
                
                {props.post.voteSum}

                {props.post.userVote === -1 ? (
                  <ArrowDownwardOutlined
                  onClick={dislike}
                  color="secondary"
                  />
                ) : (
                  <ArrowDownwardOutlined
                  onClick={dislike}
                  />
                )}
              </Button>
            <Button variant="outlined" startIcon={<ChatBubbleOutlineRounded onClick={() => onClickCard(props.post.id)} />}>
              {props.post.commentCount}
            </Button>
            </ButtonArea>
      </CardActionArea>
    </CardContainer>
  )
}

export default CardArea
