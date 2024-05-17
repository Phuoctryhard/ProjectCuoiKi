import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useSignup } from '../../hook/useSignup'
import giaodienlogin from '../../css/img/backgroundep.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import React, { useState } from 'react'
export default function LoginPage() {
  // đăng kí 
const { signup, error, isLoading } = useSignup()

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()
  const [passwordvisible, setpasswordvisible] = useState('true')

  const togglePasswordVisibility = () => {
    setpasswordvisible(!passwordvisible)
  }
  const onSubmit = async (data) => {
    console.log(data.email)
    console.log(data.password)
    console.log(data)
    await signup(data.email, data.password)
    reset()
  }
  return (
    <div
      className='bg-gray-100 min-h-screen'
      style={{
        backgroundImage: `url(${giaodienlogin})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Thêm một div chứa toàn bộ nội dung */}
      <div className='container'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className='text-2xl font-medium'>Đăng Kí</div>
            
              <input
                {...register('email', { required: 'Email is required' })}
                type='email'
                className='mt-4 p-2 rounded border border-gray-300 w-full'
                placeholder='Email'
              />

              <div className='relative'>
                <input
                  {...register('password')}
                  type={passwordvisible ? 'password' : 'text'}
                  className='mt-4 p-2 rounded border border-gray-300 w-full pr-10'
                  placeholder='Password'
                  autoComplete='on'
                />
                <label
                  className='absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer top-1/2 transform -translate-y-1/2 '
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon icon={passwordvisible ? faEyeSlash : faEye} />
                </label>
              </div>

              <div className='mt-3'>
                <button
                  type='submit'
                  className='flex w-full items-center justify-center bg-red-500 py-4 px-2 text-sm uppercase text-white hover:bg-red-600 rounded'
                >
                  Đăng Kí
                </button>
                {error && <div className='error'> {error}</div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
  // <div className='grid grid-cols-2 mt-8 gap-x-2'>
              //   <input
              //     type='text'
              //     placeholder='Tên'
              //     className='rounded border border-gray-300 w-full  p-2 '
              //     {...register('name')}
              //   />
              //   <input
              //     type='text'
              //     placeholder='Họ'
              //     className='rounded border border-gray-300 w-full p-2'
              //     {...register('ho')}
              //   />
              // </div>