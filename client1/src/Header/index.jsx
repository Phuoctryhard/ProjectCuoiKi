import React, { useState } from 'react'
import { Link as RouterLink, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../Page/Home/index.jsx'
import Recruitment from '../Page/Recruitment/index.jsx'
import Analisic from '../Page/AnaLitic/index.jsx'
import Detail from '../Page/Detail_Recruitment/detail'

import Drop from '../component/Dropdown_Custom/index.jsx'
import './index.css'
import { useLogout } from '../hook/useLogout.jsx'
import { useAuthContext } from '../hook/useAuthContext.jsx'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/react'
import { AcmeLogo } from './AcmeLogo.jsx'
import Login from '../Login/index.jsx'
import { Admin } from '../Page/Admin/admin.jsx'
import { useNavigate } from 'react-router-dom'
export default function Header() {
  const [activeItem, setActiveItem] = useState('Features')

  // const user = {
  //   name: 'Jason Hughes',
  //   email: 'zoey@example.com',
  //   avatarSrc: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
  // }

  const handleItemClick = (itemName) => {
    setActiveItem(itemName)
  }

  const { user } = useAuthContext()
  // console.log(user.role);
  const { logout } = useLogout()
  const navigation = useNavigate()
  function hanldleclick() {
    console.log('Đã log out ')
    logout()
    navigation('/Login')
  }
  return (
    <Navbar style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <NavbarBrand>
        <AcmeLogo />
        <p className='font-bold text-inherit'>Việc Làm IT 24h</p>
      </NavbarBrand>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <RouterLink
            to='/Home'
            className={`text-${activeItem === 'Features' ? 'active' : 'foreground'}`}
            onClick={() => handleItemClick('Features')}
          >
            Trang Chủ
          </RouterLink>
        </NavbarItem>

        <NavbarItem>
          <RouterLink
            to='/Recruitment'
            className={`text-${activeItem === 'Integrations' ? 'active' : 'foreground'}`}
            onClick={() => handleItemClick('Integrations')}
          >
            Tuyển Dụng
          </RouterLink>
        </NavbarItem>

        <NavbarItem>
          <RouterLink
            to='/Congti'
            className={`text-${activeItem === 'Congti' ? 'active' : 'foreground'}`}
            onClick={() => handleItemClick('Congti')}
          >
            Công Ty
          </RouterLink>
        </NavbarItem>
        <NavbarItem>
          <RouterLink
            to='/BlogIt'
            className={`text-${activeItem === 'BlogIt' ? 'active' : 'foreground'}`}
            onClick={() => handleItemClick('BlogIt')}
          >
            Blog It
          </RouterLink>
        </NavbarItem>

        <NavbarItem>
          <RouterLink
            to='/CV'
            className={`text-${activeItem === 'CV' ? 'active' : 'foreground'}`}
            onClick={() => handleItemClick('CV')}
          >
            Tạo CV
          </RouterLink>
        </NavbarItem>

        <ul className='flex text-white'>
          <li className='group relative'>
            <a href='#' className='dropbtn cursor-pointer py-6' style={{ color: 'black' }}>
              Nhà tuyển dụng
            </a>
            <div
              className='hidden absolute text-white mt-2 group-hover:block bg-white shadow-md'
              style={{ width: '200px' }}
            >
              <a
                href='https://www.facebook.com/groups/681905030786388'
                className='block px-4 py-2 hover:bg-white hover:text-black'
                style={{ color: 'black' }}
              >
                Đăng tin
              </a>
              <a href='#' className='block px-4 py-2 hover:bg-white hover:text-black' style={{ color: 'black' }}>
                Blog
              </a>
            </div>
          </li>
        </ul>
      </NavbarContent>

      <NavbarContent justify='end'>
        {user && user.role == 'user' && (
          <div>
            <Drop email={user.email} hanldleclick={hanldleclick} />
          </div>
        )}
        {!user && (
          <NavbarContent justify='end'>
            <NavbarItem className='hidden lg:flex'>
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
        )}
        {user && user.role == 'admin' && (
          <NavbarContent justify='end'>
            <NavbarItem className='hidden lg:flex'>
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
        )}
      </NavbarContent>
    </Navbar>
  )
}
