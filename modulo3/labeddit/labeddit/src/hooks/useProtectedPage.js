import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { goToLogin } from '../routes/coordinator'

const useProtectedPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token){
      alert("Faça seu login para poder acesso à essa página.")
      goToLogin(navigate)
    }
  }, [navigate])
}

export default useProtectedPage
