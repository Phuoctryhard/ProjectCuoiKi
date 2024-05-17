import LoginPage from '../../Page/LoginPage'
import HeaderLogin from '../../Page/HeaderLogin/index'
export default function Login({ children }) {
  return (
    <div>
      <HeaderLogin />
      <div>{children}</div>
    </div>
  )
}
