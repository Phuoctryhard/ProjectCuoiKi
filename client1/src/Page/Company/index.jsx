import { useEffect, useState } from 'react'
import { Image, Button, Slider, Tabs, Tab, Card, CardBody } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import Cards from '../Recruitment/Card/Card'
import { HeartIcon } from '../Recruitment/Card/HeartIcon'

function Company() {
  const [liked, setLiked] = useState([])
  const handleToggleLike = (index) => {
    setLiked((prevLiked) => {
      const newLiked = [...prevLiked]
      newLiked[index] = !newLiked[index]
      return newLiked
    })
  }
  // http://wandertour.ddns.net:5000/company'
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/company')
      .then((response) => response.json())
      .then((res) => {
        setData(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div className='flex flex-wrap justify-center ' style={{ marginTop: '10px' }}>
      {data.map((element, index) => (
        <MusicCard key={index} data={element} onToggleLike={() => handleToggleLike(index)} />
      ))}
    </div>
  )
}

const MusicCard = ({ data, onToggleLike }) => (
  <Card
    isBlurred
    className='border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] mb-4 mr-8 transition-all hover:bg-pink-300' // Added transition and hover effect
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
                <h1 className='text-large font-medium mt-2'>{data.luong}</h1>
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
              <HeartIcon />
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
export default Company
