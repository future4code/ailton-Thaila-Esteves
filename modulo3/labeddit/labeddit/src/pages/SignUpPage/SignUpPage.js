import React from 'react'
import SignUpForm from './SignUpForm'
import useUnprotectedPage from "../../hooks/useUnprotectPage"
import Header from "../../components/Header/Header"

const SignUpPage = ({rightButtonText, setRightButtonText}) => {
  useUnprotectedPage()
  return (
    <div>
      <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
      <br />
      <SignUpForm setRightButtonText={setRightButtonText} />
      
    </div>
  )
}

export default SignUpPage