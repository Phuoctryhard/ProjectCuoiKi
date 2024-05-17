import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  //http://wandertour.ddns.net:
  const signup = async (email, password) => {
    setIsLoading(true)
    setError(null)
    const response = await fetch('http://localhost:5000/user/adduser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    // ko đồng bộ
    const json = await response.json()
    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
      toast.error('Sign up Thât bại !', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1500 // Thời gian hiển thị thông báo trong mili giây
      })
    }
    if (response.ok) {
      // save the user to local storage
      // localStorage.setItem('user', JSON.stringify(json))
      // // update the auth context
      // dispatch({type: 'LOGIN', payload: json})
      // setError("Đăng kí thành công");
      // update loading state
      toast.success('Sign up Thành công', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1500 //
      })
      setIsLoading(false)
    }
  }
  return { signup, isLoading, error }
}
