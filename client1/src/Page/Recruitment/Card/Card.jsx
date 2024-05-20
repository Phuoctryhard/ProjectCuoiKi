import React, { useEffect, useState } from 'react'
import { Card, CardBody, Image, Button, Slider } from '@nextui-org/react'
import { HeartIcon } from './HeartIcon'
import { PauseCircleIcon } from './PauseCircleIcon'
import { NextIcon } from './NextIcon'
import { PreviousIcon } from './PreviousIcon'
import { RepeatOneIcon } from './RepeatOneIcon'
import { ShuffleIcon } from './ShuffleIcon'
import axios from 'axios'
import PAgination from '../../../Pagination.js'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue
} from '@nextui-org/react'
import anhh from '../../../css/img/logo.png'
import { Link } from 'react-router-dom'
// `http://wandertour.ddns.net:5000/Images/`
const MusicCard = ({ liked, onToggleLike, data }) => (
  <Card
    isBlurred
    className='border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] mb-4 mr-8 transition-all hover:bg-pink-300' // Added transition and hover effect
    shadow='sm'
  >
    <CardBody>
      <div className='grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center'>
        <div className='relative col-span-6 md:col-span-4 mb-4'>
          <Image
            alt='Album cover'
            className='object-cover'
            height={300}
            shadow='md'
            src={`https://ngodinhphuoc.pythonanywhere.com/Images/` + data.anh}
            width='100%'
          />
        </div>
        <div className='flex flex-col col-span-6 md:col-span-8'>
          <div className='flex justify-between items-start'>
            <div className='flex flex-col gap-0'>
              <h3 className='font-semibold text-foreground/90'>
                {' '}
                <a href={`/post/by/${data._id}`} style={{ fontSize: '20px' }}>
                  {data.vitri}
                </a>
              </h3>
              <p className='text-small text-foreground/80'>{data.congti}</p>
              {data.luong === 'thuong luong' ? (
                // Render a different content when data.luong is 'thuong luong'
                <h1 className='text-large font-medium mt-2'>Thương lượng</h1>
              ) : (
                // Render the <h1> element with the numerical value if data.luong is a number
                <h1 className='text-large font-medium mt-2'>{data.luong} </h1>
              )}
              <h1 className='text-large font-medium mt-2'>{data.khuvuc} </h1>
              <span style={{ marginRight: '10px' }}>{data.level}</span>
              <ul>
                <li>{data.benefit}</li>
                {/* Add other list items if needed */}
              </ul>
            </div>
            <div></div>
            <Button
              isIconOnly
              className='text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2'
              radius='full'
              variant='light'
              onPress={() => onToggleLike()}
            >
              <HeartIcon fill={liked ? 'red' : 'none'} className={liked ? 'red' : ''} />
            </Button>
          </div>

          <div className='flex flex-col mt-3 gap-1'>
            {/* The rest of your content remains the same */}

            <div className='flex justify-between'>
              <p className='text-small' style={{ fontWeight: '600' }}>
                {data.language}
              </p>
              <p className='text-small text-foreground/50'>{data.timedang}</p>
            </div>
          </div>
          <div className='flex w-full items-center justify-center'>{/* Add your buttons or other content */}</div>
        </div>
      </div>
    </CardBody>
  </Card>
)
const App = ({ data, setData }) => {
  const [image0, setImage] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [PostsPerPage, setPostsPerPage] = useState(6)

  const [liked, setLiked] = useState([])
  const handleToggleLike = (index) => {
    setLiked((prevLiked) => {
      const newLiked = [...prevLiked]
      newLiked[index] = !newLiked[index]
      toast.success(`Yêu thích ${index}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1500 // Thời gian hiển thị thông báo trong mili giây
      })
      return newLiked
    })
  }
  //const url1 ='http://wandertour.ddns.net:5000/post/create'
  useEffect(() => {
    fetch('https://ngodinhphuoc.pythonanywhere.com/post/create')
      .then((response) => response.json())
      .then((res) => {
        setData(res)
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const lastPostIndex = currentPage * PostsPerPage
  const firstPostIndex = lastPostIndex - PostsPerPage // 20 - 10
  const currentPost = data.slice(firstPostIndex, lastPostIndex)

  // console.log(currentPost);
  return (
    <div>
      <div className='flex flex-wrap justify-center'>
        {currentPost.map((element, index) => (
          <MusicCard
            key={index}
            liked={liked[index]}
            onToggleLike={() => handleToggleLike(element.congti)}
            data={element}
          />
        ))}
      </div>
      <PAgination
        totalPost={data.length}
        PostsPerPage={PostsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  )
}
export default App
