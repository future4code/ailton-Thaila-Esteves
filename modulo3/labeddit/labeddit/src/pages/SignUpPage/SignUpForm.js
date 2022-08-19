import React, { useState } from "react";
import { CircularProgress, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { InputsContainer, SignUpFormContainer, CheckInput } from "./styled";
import { useForm } from "../../hooks/useForm"
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/user"

const SignUpForm = ({setRightButtonText}) => {
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({username: "", email: "", password: ""})
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, navigate, setRightButtonText, setIsLoading)
    } 

    return (
        <form onSubmit={onSubmitForm}>
            <SignUpFormContainer>
                <InputsContainer>
                <TextField
                    value={form.username}
                    name={'username'}
                    onChange={onChange}
                    label={'Nome de usuário'}
                    variant={'outlined'}
                    fullWidth
                    required
                    autoFocus
                    margin={'normal'}
                />
                <TextField
                    value={form.email}
                    name={'email'}
                    onChange={onChange}
                    label={'E-mail'}
                    variant={'outlined'}
                    type={'email'}
                    fullWidth
                    required
                    margin={'normal'}
                />
                <TextField
                    value={form.password}
                    name={'password'}
                    onChange={onChange}
                    pattern={"[0-9a-zA-Z]{8,30}"}
                    title={"A sua senha deve ter no mínimo 8 caracteres"}
                    label={'Senha'}
                    variant={'outlined'}
                    type={'password'}
                    fullWidth
                    required
                    margin={'normal'}
                />
                </InputsContainer>
                <CheckInput>
                <p>Ao continuar, você concorda com o nosso <strong>Contrato de usuário</strong> e nossa <strong>Política de Privacidade</strong>
                </p>
                <div>
                    <input type={"checkbox"} />
                    <label>
                        Eu concordo em receber emails sobre coisas legais no Labeddit
                    </label>
                </div>
                <br />
            </CheckInput>
                <Button
                    color={'primary'}
                    variant={'contained'}
                    type={'submit'}
                    size={'small'}
                >
                    {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Faça seu cadastro</>}
                </Button>
            </SignUpFormContainer>
        </form>
    )
}

export default SignUpForm