import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const navigate = useNavigate();
  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)
    //http://wandertour.ddns.net:5000/user/login
    const response = await fetch('http://localhost:5000/user/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      toast.error("Login Thât bại !", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000 
      });
      setError(json.error)
      
    
    }
    if (response.ok) {
      toast.success("Login Thành công",{
        style: { marginTop: '50px'},
          autoClose: 2000,
      });
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})
      // update loading state
      setIsLoading(false)
      console.log(json.role);
    
      if (json.role == 'user') {
        navigate('/Home')
      } else  {
        navigate('/Admin'); 
       
      }
    }
  }
  return { login, isLoading, error }
}