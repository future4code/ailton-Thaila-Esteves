import React from 'react';
import AppBar from '@mui/material/AppBar';
import { StyledToolbar, Logo } from "./styled"
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { goToFeed, goToLogin } from "../../routes/coordinator"

export default function Header({rightButtonText, setRightButtonText, leftButtonText, details}) {
  
  const navigate = useNavigate()
  const token = localStorage.getItem("token")

    const logout = () => {
      localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
      if (token) {
        logout()
        setRightButtonText("Login")
        goToLogin(navigate)
      } else {
        goToLogin(navigate)
      }
    }
    
  return (
      <AppBar details={details} position="static">
        <StyledToolbar>
            <Logo onClick={() => goToFeed(navigate)}>LabEddit</Logo>
            <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
        </StyledToolbar>
      </AppBar>
  )
}
