import React, { useState } from 'react'
import './details.css'
import img from '../../css/assets/images/b5.jpg'
import { BsPencilSquare } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { blog } from '../../css/assets/data/data'
import DOMPurify from 'dompurify'
import anhdocker from './docker.png'
export default function DetailsBlog() {
  const { id } = useParams()
  const [blogs, setBlogs] = useState(null)
  useEffect(() => {
    // Replace 'http://localhost:5000/blog/by/658d7c5423ad0a5f79f7e387' with your actual API endpoint
    //`http://wandertour.ddns.net:5000/blog/by/${id}`)
    const url = 'https://ngodinhphuoc.pythonanywhere.com/'
    fetch(`${url}/blog/by/${id}`)
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error('Error fetching blog data:', error))
  }, [])
  if (blogs) {
    console.log(blogs)
  }
  return (
    <>
      {blogs ? (
        <section className='singlePage'>
          <div className='container'>
            <div className='text-center mb-10 '>
              <h1>{blogs.title}</h1>
            </div>
            <div className='left'>
              <img
                // http://wandertour.ddns.net:5000/Images_Blog
                src={`https://ngodinhphuoc.pythonanywhere.com/Images_Blog/` + blogs.cover}
                alt=''
                style={{ width: '500px', margin: '0 auto', display: 'block' }}
              />
            </div>
            <div className='right'>
              <div className='buttons'>
                <button className='button'>
                  <BsPencilSquare />
                </button>
                <button className='button'>
                  <AiOutlineDelete />
                </button>
              </div>
              <div
                className='text-sm mb-4 leading-loose mt-2 ml-4 prose'
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(blogs.desc)
                }}
              ></div>
              <div className='ml-4'>
                <p className='font-bold'>Author: Ngô Đình Phước</p>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
//  fetch(`http://localhost:5000/blog/by/${id}`)
