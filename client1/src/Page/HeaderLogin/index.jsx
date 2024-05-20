import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react'
import { AcmeLogo } from './AcmeLogo.jsx'
import './index,css'
import { useLogout } from '../../hook/useLogout'
import { useAuthContext } from '../../hook/useAuthContext.jsx'
export default function App() {
  const { user } = useAuthContext()

  const { logout } = useLogout()
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <AcmeLogo />
        <p className='font-bold text-inherit'>Việc Làm IT 24h</p>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <a color='foreground' href='/Postadmin' className='navbar-link'></a>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href='/AddPost' aria-current='page' className='navbar-link'></Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify='end'>
        <NavbarContent justify='end'>
          <NavbarItem className='lg:flex'>
            <a href='/Login' className='navbar-link'>
              Login
            </a>
          </NavbarItem>

          <NavbarItem>
            <a href='/SignUp' className='navbar-link'>
              Sign Up
            </a>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
    </Navbar>
  )
}
