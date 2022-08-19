import React from 'react'
import axios from 'axios'
import { BASE_URL } from "../../constants/urls"
import { useParams } from 'react-router-dom'
import Header from "../../components/Header/Header"
import NewCommentForm from "./NewCommentForm"
import CardComments from "../../components/CardComments/CardComments"
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from "../../hooks/useRequestData"
import CardArea from "../../components/CardArea/CardArea"
import { FormCenter } from './styled'

const PostPage = ({rightButtonText, setRightButtonText}) => {
  useProtectedPage()
  const params = useParams()
   
  const [feed, getFeed] = useRequestData([], `${BASE_URL}/posts`)
  
  const [allComments, getComments, isLoading] = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)

  const seeComments = (commentId, direction) => {
    const headers = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }
  
    const body = {
      direction: direction
    }
  
    if (direction === 1) {
      axios.post(`${BASE_URL}/comments/${commentId}/votes`, body, headers)
      .then((response) => {
        getComments()
        console.log(response, "criou comentário")
      })
      .catch((error) => {
        console.log(error.message)
      })
    } else if (direction === -1) {
      axios.put(`${BASE_URL}/comments/${commentId}/votes`, body, headers)
      .then((response) => {
        getComments()
        console.log(response, "mudou comentário")
      })
      .catch((error) => {
        console.log(error.message)
      })
    } else {
      axios.delete(`${BASE_URL}/comments/${commentId}/votes`, headers)
      .then((response) => {
        getComments()
        console.log(response, "deletou comentário")
      })
      .catch((error) => {
        console.log(error.message)
      })
    }
  }
 
  const postDetails = feed && feed.map((post) => {
    if (post.id === params.id) {
      return ( <CardArea key={post.id} post={post} getFeed={getFeed} details />)
    } 
  })

  const showComments = allComments && allComments.map((comment) => {
    return <CardComments key={comment.id} comment={comment} seeComments={seeComments} getFeed={getFeed}/>
  })

  return (
    <div>
      <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} leftButtonText details />
      <div>{postDetails}</div>
      <FormCenter>
      <NewCommentForm id={params.id} getComments={getComments} getFeed={getFeed} />
      </FormCenter>
      <div>{showComments}</div>
    </div>
  )
}

export default PostPage