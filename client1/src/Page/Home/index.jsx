import Slider from 'react-slick'
import anh1 from '../../css/img/Screenshot 2023-12-14 130826.png'
import styles from './index.module.css'
import congti from '../../css/img/anhcongti.png'
import logo9 from '../../css/img/logo9.png'
import logo10 from '../../css/img/logo10.png'
import logo11 from '../../css/img/logo11.png'
import anhcongti from '../../css/img/telexpert.png'
import eo from '../../css/img/eon.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Footer from '../Footer'
import { Card } from '../../component/Blog/Card'
import react from 'react'
import { company } from '../../css/assets/data/data'
import '../../component/category/category.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { GrFormPrevious } from 'react-icons/gr'
import { MdNavigateNext } from 'react-icons/md'

// import MessengerCustomerChat from 'react-messenger-customer-chat';

function Home() {
  return (
    <div>
      <Banner />
      <Congtinoibat />
      <JobOutstanding />
      <CompanyTop />
      <BlogIt />
      <Reviewer />
      <Footer />
    </div>
  )
}
export default Home

const Banner = () => {
  return (
    <section className='banner'>
      <div>
        <img src={anh1} alt='Banner Image 1' />
      </div>
      <div className='banner-content'></div>
    </section>
  )
}
const CompanyTop = () => {
  return (
    <div className={styles.container_company}>
      <h1 className={styles.heading_company}>Các Công Ty Hàng Đầu</h1>
      <div className={styles.list_company}>
        <div className={styles.item_company}>
          <div className={styles.company_image}>
            <img style={{ width: '98px', height: '98px', padding: '16px 8px ' }} src={congti}></img>
          </div>
          <div className={congti.company_content}>
            <h2 className={congti.heading_challenge} style={{ fontWeight: 'bold' }}>
              CHAILEASE
            </h2>
          </div>
        </div>
        <div className={styles.item_company}>
          <div className={styles.company_image}>
            <img style={{ width: '98px', height: '98px', padding: '16px 8px ' }} src={anhcongti}></img>
          </div>
          <div className={congti.company_content}>
            <h2 className={congti.heading_challenge} style={{ fontWeight: 'bold' }}>
              Tek Expect
            </h2>
          </div>
        </div>
        <div className={styles.item_company}>
          <div className={styles.company_image}>
            <img style={{ width: '98px', height: '98px', padding: '16px 8px ' }} src={eo}></img>
          </div>
          <div className={congti.company_content}>
            <h2 className={congti.heading_challenge} style={{ fontWeight: 'bold' }}>
              EOmail
            </h2>
          </div>
        </div>
        <div className={styles.item_company}>
          <div className={styles.company_image}>
            <img style={{ width: '98px', height: '98px', padding: '16px 8px ' }} src={logo9}></img>
          </div>
          <div className={congti.company_content}>
            <h2 className={congti.heading_challenge} style={{ fontWeight: 'bold' }}>
              Technology
            </h2>
          </div>
        </div>
        <div className={styles.item_company}>
          <div className={styles.company_image}>
            <img style={{ width: '98px', height: '98px', padding: '16px 8px ' }} src={logo10}></img>
          </div>
          <div className={congti.company_content}>
            <h2 className={congti.heading_challenge} style={{ fontWeight: 'bold' }}>
              Tech Template
            </h2>
          </div>
        </div>
        <div className={styles.item_company}>
          <div className={styles.company_image}>
            <img style={{ width: '98px', height: '98px', padding: '16px 8px ' }} src={logo11}></img>
          </div>
          <div className={congti.company_content}>
            <h2 className={congti.heading_challenge} style={{ fontWeight: 'bold' }}>
              TECHNO
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}
// http://wandertour.ddns.net:5000/post/create'
const JobOutstanding = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://ngodinhphuoc.pythonanywhere.com/post/create')
      .then((response) => response.json())
      .then((res) => {
        setData(res.slice(0, 12))
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  // http://wandertour.ddns.net:5000/Images/
  return (
    <div className={styles.container_newjob}>
      <div className={styles.listnewjob}>
        <div className={styles.newjob_header}>
          <h1>Viêc làm mới nhất</h1>
          <a>Xem tất cả </a>
        </div>

        <div className={styles.newjob_maincontent}>
          {data.map((element, index) => {
            return (
              <div className={styles.item_newsjob}>
                <div className={styles.company_image}>
                  <img
                    style={{ width: '98px', height: '98px', padding: '16px 8px ' }}
                    src={`https://ngodinhphuoc.pythonanywhere.com/Images/` + element.anh}
                  ></img>
                </div>
                <div className={styles.newjob_content}>
                  <h1 className={styles.newjob_title}> {element.vitri}</h1>
                  <h3 className={styles.newjob_namecompany}>{element.congti}</h3>
                  <span className={styles.newjob_namelanguage}>{element.language}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const JobHandBook = () => {
  return <div></div>
}
const BlogIt = () => {
  return (
    <div>
      <div>
        <h1 className={styles.heading_company}>Blog IT</h1>
      </div>
      <Card />
    </div>
  )
}
const Reviewer = () => {
  return <div></div>
}
const Congtinoibat = () => {
  const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
      <div className='control-btn' onClick={onClick}>
        <button className='next'>
          <MdNavigateNext className='icon' />
        </button>
      </div>
    )
  }
  const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
      <div className='control-btn' onClick={onClick}>
        <button className='prev'>
          <GrFormPrevious className='icon' />
        </button>
      </div>
    )
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  }
  return (
    <>
      <h1 className={styles.heading_company}>Công ty nổi bật hiện nay</h1>
      <section className='category'>
        <div className='content'>
          <Slider {...settings}>
            {company.map((item) => (
              <div className='boxs'>
                <div className='box' key={item.id}>
                  <img src={item.cover} alt='cover' />
                  <div className='overlay'>
                    <h4>{item.category}</h4>
                    <p>{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  )
}
