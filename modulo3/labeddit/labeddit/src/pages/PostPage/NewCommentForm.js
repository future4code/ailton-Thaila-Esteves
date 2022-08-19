import React, {useState} from 'react'
import { Button, CircularProgress, TextField } from '@mui/material'
import { useForm } from '../../hooks/useForm'
import { createNewComment } from '../../services/infos'
import { AddPostFormContainer, InputsContainer } from './styled'

const NewCommentForm = (props) => {
  const [form, onChange, clear] = useForm({ body: "" })
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (event) => {
    event.preventDefault()
    createNewComment(props.id, form, clear, setIsLoading, props.getComments)
  }

  return (
    <form onSubmit={onSubmitForm}>
    <AddPostFormContainer>
      <InputsContainer>
        <TextField 
            name={"body"}
            value={form.body}
            onChange={onChange}
            label={'Escreva seu comentário'}
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
          onClick={props.getFeed()}
        >
          {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Adicionar comentário</>}
      </Button>
    </AddPostFormContainer>
    </form>
  )
}

export default NewCommentForm