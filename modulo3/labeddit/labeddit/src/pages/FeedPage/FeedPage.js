import React from 'react'
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"
import Loading from "../../components/Loading/Loading"
import Header from "../../components/Header/Header"
import { BASE_URL } from "../../constants/urls"
import CardArea from '../../components/CardArea/CardArea'
import { FormCenter } from './styled'
import FeedPostForm from './FeedPostForm'
import { Divider, LinearProgress, TableRow } from '@mui/material'
import { LineAxisRounded } from '@mui/icons-material'

const FeedPage = ({rightButtonText, setRightButtonText}) => {
  useProtectedPage()
 
  const [feed, getFeed] = useRequestData([], `${BASE_URL}/posts`)

  const posts = feed && feed.map((post) => {
    return (
      <CardArea
        key={post.id}
        post={post}
        getFeed={getFeed}
      />
    )
  })
  
  return (
    <div>
      <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
      <FormCenter>
        <FeedPostForm getFeed={getFeed} />
      </FormCenter>     
      <Divider variant='middle' />
      {posts.length > 0 ? posts : <Loading />}
    </div>
  )
}

export default FeedPage