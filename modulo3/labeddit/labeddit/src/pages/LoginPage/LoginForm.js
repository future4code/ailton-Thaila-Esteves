import React, { useState } from "react"
import { InputsContainer, LoginFormContainer } from "./styled"
import { TextField, Button, CircularProgress } from "@mui/material"
import { useForm } from '../../hooks/useForm'
import { login } from "../../services/user"
import { useNavigate } from "react-router-dom"

const LoginForm = ({setRightButtonText}) => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
      event.preventDefault()
      login(form, clear, navigate, setRightButtonText, setIsLoading)
    }

    return (
      <LoginFormContainer>
        <form onSubmit={onSubmitForm}>
          <InputsContainer>
            <TextField
              name={"email"}
              value={form.email}
              onChange={onChange}
              label={"E-mail"}
              variant={"outlined"}
              fullWidth
              margin={"normal"}
              required
              type={"email"}
            />
            <TextField
              name={"password"}
              value={form.password}
              onChange={onChange}
              label={"Senha"}
              variant={"outlined"}
              fullWidth
              margin={"normal"}
              required
              type={"password"}
            />
          </InputsContainer>
          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
          >
            {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Login</>}
          </Button>
        </form>
      </LoginFormContainer>
    );
}

export default LoginForm