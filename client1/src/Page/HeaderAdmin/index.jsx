import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react'
import Dropdown from '../../component/Dropdown/index'
import { AcmeLogo } from './AcmeLogo.jsx'
import './index,css' // Fix the typo in the import statement
import { useLogout } from '../../hook/useLogout'
import { useAuthContext } from '../../hook/useAuthContext.jsx'
import Drop from '../../component/Dropdown_Custom'
import { useNavigate } from 'react-router-dom'


export default function App() {
  const chucnang = ['Danh Sách Công Ty', 'Thêm Công Ty']
  const navigation = useNavigate()
  const { user } = useAuthContext()
  const { logout } = useLogout()

  const handleLogout = () => {
    console.log('Đã log out')
    logout()
    navigation('/Login')
  }
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <AcmeLogo />
        <p className='font-bold text-inherit'>Việc Làm 24h</p>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-6' justify='center'>
        <NavbarItem>
          <a color='foreground' href='/Postadmin' className='navbar-link'>
            Bài Tuyển Dụng
          </a>
        </NavbarItem>

        <NavbarItem isActive>
          <a href='/AddPost' aria-current='page' className='navbar-link'>
            Thêm Bài
          </a>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify='end' style={{}}>
        {user && user.role === 'admin' && (
          <div>
            <Drop email={user.email} hanldleclick={handleLogout} />
          </div>
        )}

        {!user && (
          <NavbarItem className='hidden lg:flex'>
            <a href='/Login' className='navbar-link'>
              Login
            </a>
          </NavbarItem>
        )}

        {user && user.role !== 'admin' && (
          <>
            <NavbarItem className='hidden lg:flex'>
              <a href='/Login' className='navbar-link'>
                Login
              </a>
            </NavbarItem>
            <NavbarItem>
              <Button color='primary' variant='flat' onClick={handleLogout}>
                Logout
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
  )
}
