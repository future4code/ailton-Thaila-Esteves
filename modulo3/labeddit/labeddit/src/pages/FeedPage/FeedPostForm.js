import React, {useState} from 'react'
import { Button, CircularProgress, TextField } from '@mui/material'
import { useForm } from '../../hooks/useForm'
import { createNewPost } from '../../services/infos'
import { AddPostFormContainer, InputsContainer } from './styled'

const FeedPostForm = (props) => {
  const [form, onChange, clear] = useForm({ title: "", body: "" })
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (event) => {
    event.preventDefault()
    createNewPost(form, clear, setIsLoading, props.getFeed)
  }

  return (
    <form onSubmit={onSubmitForm}>
    <AddPostFormContainer>
      <InputsContainer>
        <TextField 
            name={"title"}
            value={form.title}
            onChange={onChange}
            label={'Título'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
        />
        <TextField 
            name={"body"}
            value={form.body}
            onChange={onChange}
            label={'Escreva seu post'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
        />
      </InputsContainer>
      <Button
          color={'primary'}
          variant={'contained'}
          type={'submit'}
        >
          {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Adicionar post</>}
      </Button>
    </AddPostFormContainer>
    </form>
  )
}

export default FeedPostForm