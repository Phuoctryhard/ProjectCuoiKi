import React from 'react'

import Cards from './Card/Card'
import { useState, useEffect } from 'react'
import { Image, Button, Slider, Tabs, Tab, Card, CardBody  } from '@nextui-org/react'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { HeartIcon } from './Card/HeartIcon'

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

import { Link } from 'react-router-dom'

export default function App({ selectPlace, selectluong, data, setData }) {
  const [selected, setSelected] = React.useState('all')
  return (
    <div className='flex w-full flex-col' style={{ paddingLeft: '20px' }}>
      <Tabs
        aria-label='Options'
        selectedKey={selected}
        onSelectionChange={setSelected}
        style={{ fontSize: '1.5rem' }} // Set the desired font size here
      >
        <Tab key='all' title='Tất cả'>
          <Cards selectPlace={selectPlace} data={data} setData={setData} />
        </Tab>
        <Tab key='lương' title='Lương'>
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
            </CardBody>
          </Card>
        </Tab>
        <Tab key='congti' title='Công ty'>
          <Card>
            <App1 selectPlace={selectPlace} />
          </Card>
        </Tab>
      </Tabs>
    </div>
  )
}
const MusicCard = ({ liked, onToggleLike, data }) => (
  <Card
    isBlurred
    className='border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] mb-4 mr-8 transition-all hover:bg-foreground/10' // Added transition and hover effect
    shadow='sm'
  >
    <CardBody>
      <div className='grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center'>
        <div className='relative col-span-6 md:col-span-4 mb-4'>
          <Image alt='Album cover' className='object-cover' height={300} shadow='md' src={data.image} width='100%' />
        </div>

        <div className='flex flex-col col-span-6 md:col-span-8'>
          <div className='flex justify-between items-start'>
            <div className='flex flex-col gap-0'>
              <h3 className='font-semibold text-foreground/90'>
                {' '}
                <Link to={`/conpany/name/${data.name}`} style={{ fontSize: '20px' }}>
                  {data.name}
                </Link>
              </h3>
              <p className='text-small text-foreground/80'>{data.linhvuc}</p>
              {data.luong === 'thuong luong' ? (
                // Render a different content when data.luong is 'thuong luong'
                <h1 className='text-large font-medium mt-2'>Thương lượng</h1>
              ) : (
                // Render the <h1> element with the numerical value if data.luong is a number
                <h1 className='text-large font-medium mt-2'>{(data.luong)}</h1>
              )}
              

              <h1 className='text-large font-medium mt-2'>{data.vitri} </h1>
              <span style={{ marginRight: '10px' }}>{data.employer}</span>
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
            <div className='flex justify-between'>
              <p className='text-small'></p>
              <p className='text-small text-foreground/50'>{data.language}</p>
            </div>
          </div>

          <div className='flex w-full items-center justify-center'>{/* Add your buttons or other content */}</div>
        </div>
      </div>
    </CardBody>
  </Card>
)

const App1 = ({ selectPlace }) => {
  const [liked, setLiked] = useState([])

  const handleToggleLike = (index) => {
    setLiked((prevLiked) => {
      const newLiked = [...prevLiked]
      newLiked[index] = !newLiked[index]
      toast.success(`Yêu thích ${index}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1500 // Thời gian hiển thị thông báo trong mili giây
      });
      return newLiked
    })
  }
//  const url = http://wandertour.ddns.net:5000/company
  const [data, setData] = useState([])
  const searchTerm = 'Đà Nẵng'
  useEffect(() => {
    if (selectPlace == 'all' || selectPlace == '') {
      console.log('1')
      fetch('https://ngodinhphuoc.pythonanywhere.com/company')
        .then((response) => response.json())
        .then((res) => {
          setData(res)
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      console.log(selectPlace)
      fetch(`http://localhost:5000/company/search?q=${encodeURIComponent(selectPlace)}`)
        .then((response) => response.json())
        .then((res) => {
          setData(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [selectPlace])
  return (
    <div className='flex flex-wrap justify-center'>
      {data.map((element, index) => (
        <MusicCard key={index} liked={liked[index]} onToggleLike={() => handleToggleLike(element.congti)} data={element} />
      ))}
    </div>
  )
}
