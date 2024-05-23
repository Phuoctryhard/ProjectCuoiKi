// Detail.js

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Detail.css' // Import file CSS cho component
import Card1 from './Card/Card'
import { MedicineBoxOutlined, DollarOutlined, FormOutlined } from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/css/all.css'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { useAuthContext } from '../../hook/useAuthContext'

import CommentSection from './CommentSection'
import {
  faPlane,
  faMoney,
  faUsd,
  faUserMd,
  faGraduationCap,
  faCreditCard,
  faBriefcase,
  faMoneyBill,
  faCalendarDay,
  faCalendarAlt,
  faMedal,
  faUsers,
  faHardHat,
  faSuitcase
} from '@fortawesome/free-solid-svg-icons'
export default function Detail() {
  const { id } = useParams()
  const [data, setData] = useState([])
  const [applicationStatus, setApplicationStatus] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [recruitment, setRecruitment] = useState([])
  const [Congti, setCongti] = useState([])
  const [Mota, setMota] = useState([])
  const [yeucau, setYeuCau] = useState([])
  const { user } = useAuthContext()
  // http://wandertour.ddns.net:5000/post/recruitment/by/${id}
  useEffect(() => {
    fetch(`https://ngodinhphuoc.pythonanywhere.com/post/recruitment/by/${id}`)
      .then((result) => result.json())
      .then((data) => {
        setCongti(data)
      })
  }, [id])

  useEffect(() => {
    if (Congti.mota) {
      const inputString = Congti.mota
      // console.log(inputString)

      const arrayFromString = inputString.split('\n').map((item) => item.trim())
      setMota(arrayFromString)
    }
  }, [Congti.mota])

  useEffect(() => {
    if (Congti.yeucau) {
      const inputString = Congti.yeucau
      console.log(inputString)

      const arrayFromString = inputString.split('\n').map((item) => item.trim())
      setYeuCau(arrayFromString)
    }
  }, [Congti.yeucau])

  const handleApplyNow = () => {
    setShowModal(true)
  }

  const handleModalClose = () => {
    setShowModal(false)
  }

  const handleApply = (formData) => {
    // Thực hiện các logic xử lý form (ví dụ: gửi yêu cầu đến máy chủ)
    // Ở đây bạn có thể thực hiện việc lưu dữ liệu ứng tuyển vào cơ sở dữ liệu hoặc thực hiện các bước khác
    // setApplicationStatus(true)
    //setShowModal(false) // Đóng modal sau khi ứng tuyển
  }
  return (
    <div>
      <div className='deatail-header'>
        <Card1 data={Congti} />
      </div>
      <div>
        <div className='detail-content'>
          {applicationStatus ? (
            <p className='application-status'>Bạn đã ứng tuyển thành công!</p>
          ) : (
            <button className='apply-now-btn' onClick={handleApplyNow}>
              Ứng tuyển ngay
            </button>
          )}
        </div>
        {showModal && (
          <ApplicationModal
            onClose={handleModalClose}
            onApply={handleApply}
            Congti={Congti}
            setApplicationStatus={setApplicationStatus}
          />
        )}
      </div>

      <div>
        <h1 class='jsx-d84db6a84feb175e text-24 font-semibold py-4 job-title'>Thông tin chung</h1>
        <YourComponent Congti={Congti} />
      </div>

      <div className='detail-row'>
        <h2 class='job-title'>Phúc lợi </h2>
        <ul class='welfare-list'>
          <li>
            <MedicineBoxOutlined style={{ position: 'relative', bottom: '5px', color: ' #3498db', fontSize: '22px' }} />{' '}
            <span style={{}}>Chế độ bảo hiểm</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faPlane} style={{ color: ' #3498db', fontSize: '22px' }} /> Du Lịch
          </li>
          <li>
            <FontAwesomeIcon icon={faMoneyBill} style={{ color: ' #3498db', fontSize: '22px' }} /> Phụ cấp
          </li>
          <li>
            <FontAwesomeIcon icon={faUsd} style={{ color: ' #3498db', fontSize: '22px' }} /> Chế độ thưởng
          </li>
          <li>
            <FontAwesomeIcon icon={faUserMd} style={{ color: ' #3498db', fontSize: '22px' }} /> Chăm sóc sức khỏe
          </li>
          <li>
            <FontAwesomeIcon icon={faGraduationCap} style={{ color: ' #3498db', fontSize: '22px' }} /> Đào tạo
          </li>
          <li>
            <DollarOutlined style={{ position: 'relative', bottom: '3px', color: ' #3498db', fontSize: '22px' }} />{' '}
            <span>Tăng lương</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCreditCard} style={{ color: ' #3498db', fontSize: '22px' }} /> Công tác phí
          </li>
          <li>
            <FontAwesomeIcon icon={faBriefcase} style={{ color: ' #3498db', fontSize: '22px' }} /> Nghỉ phép năm
          </li>
        </ul>
      </div>
      <Motacongviec Mota={Mota} />
      <JobRequirements Congti={Congti} yeucau={yeucau} />
      <AdditionalInfo Congti={Congti} />

      <div>
        <CommentSection Congti={Congti} setCongti={setCongti} />
      </div>
    </div>
  )
}
// ApplicationModal.js
function ApplicationModal({ onClose, onApply, Congti, setApplicationStatus }) {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phonenumber: '',
    cv: null,
    introduction: '',
    congti: Congti.congti
  })
  console.log(formData)
  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'cv') {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] || null }))
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }))
    }
  }
  const handleSubmit = () => {
    // Thực hiện các logic xử lý form (ví dụ: gửi yêu cầu đến máy chủ)
    console.log('Success:', formData)
    //onApply(formData)
    const formDataToSend = new FormData()

    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value)
    })

    //http://wandertour.ddns.net:5000/post/sendmail
    // Gửi yêu cầu POST đến máy chủ
    fetch('http://localhost:5000/sendmail', {
      method: 'POST',

      body: formDataToSend
    })
      .then((response) => response.json())
      .then((data) => {
        // Xử lý phản hồi từ máy chủ (nếu cần)
        console.log('Success:', data)
        setApplicationStatus(true)
      })
      .catch((error) => {
        // Xử lý lỗi
        console.error('Error:', error)
      })
    // Đóng modal sau khi gửi yêu cầu
    onClose()
  }

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <h2>
          Ứng tuyển ngay <span style={{ fontSize: '20px', color: 'red' }}>{Congti.congti}</span>
        </h2>
        <form onSubmit={handleSubmit}>
          {' '}
          {/* Sự kiện onSubmit được sử dụng trên form */}
          <label>
            Họ tên:
            <input type='text' name='fullname' value={formData.fullname} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type='email' name='email' value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Số điện thoại:
            <input type='tel' name='phonenumber' value={formData.phonenumber} onChange={handleChange} required />
          </label>
          <label>
            CV ứng tuyển:
            <input type='file' name='cv' accept='.pdf' onChange={handleChange} />
          </label>
          <label>
            Đoạn giới thiệu bản thân:
            <textarea name='introduction' value={formData.introduction} onChange={handleChange} required />
          </label>
          <button type='submit'>Ứng tuyển</button>
          <button type='button' onClick={onClose}>
            Đóng
          </button>
        </form>
      </div>
    </div>
  )
}

// mota cong viec

function Motacongviec({ Mota }) {
  return (
    <div class='job-description'>
      <h2 class='job-title'>Mô tả Công Việc</h2>
      <ul class='job-list'>
        {Mota.map((element, index) => {
          return (
            <li class='job-item' key={index}>
              <span class='job-icon'>&#xf2c2;</span>
              <div class='job-content'>
                <span class='job-detail'>{element}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
// Yêu cầu công việc
const JobRequirements = ({ Congti, yeucau }) => {
  console.log(typeof Congti.mota)
  console.log(yeucau)

  return (
    <div className='job-requirements-container'>
      <h1 className='job-title'>YÊU CẦU CÔNG VIỆC</h1>
      {Congti ? (
        <div className='job-content'>
          {yeucau.map((element, index) => (
            <p key={index} className='job-point'>
              <FormOutlined
                style={{
                  color: '#3498db',
                  position: 'relative',
                  bottom: '4px',
                  marginRight: '4px',
                  fontSize: '22px'
                }}
              />
              {element}
            </p>
          ))}
        </div>
      ) : (
        <p className='loading-message'>Đang tải dữ liệu...</p>
      )}
    </div>
  )
}

const AdditionalInfo = ({ Congti }) => {
  return (
    <div className='additional-info-container'>
      <h2 className='job-title'>ĐỊA ĐIỂM LÀM VIỆC</h2>
      <div className='location-container'>
        <FaMapMarkerAlt className='map-marker-icon' />
        <span>{Congti.khuvuc}</span>
      </div>
    </div>
  )
}

// componnent thong tin chung
const YourComponent = ({ Congti }) => {
  return (
    <div>
      <div className='jsx-d84db6a84feb175e bg-[#F5F3FF] px-4 pt-5 pb-1 mb-6'>
        <div className='jsx-d84db6a84feb175e md:flex md:border-b border-[#DDD6FE] mb-4'>
          <div className='flex items-center mb-4 md:w-[33%]'>
            <FontAwesomeIcon
              icon={faCalendarDay}
              className='w-[32px] h-[32px] min-w-[32px] flex items-center justify-center rounded-full bg-[#EDE9FE] text-[#8B5CF6] text-20'
            />
            <div className='ml-3'>
              <p className='mr-1 text-se-neutral-64 text-12'>Ngày đăng</p>
              <p className='text-14'>{Congti.timedang}</p>
            </div>
          </div>
          <div className='flex items-center mb-4 md:w-[33%]'>
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className='w-[32px] h-[32px] min-w-[32px] flex items-center justify-center rounded-full bg-[#EDE9FE] text-[#8B5CF6] text-20'
            />
            <div className='ml-3'>
              <p className='mr-1 text-se-neutral-64 text-12'>Thời gian thử việc</p>
              <p className='text-14'>2 tháng</p>
            </div>
          </div>
          <div className='flex items-center mb-4 md:w-[33%]'>
            <FontAwesomeIcon
              icon={faMedal}
              className='w-[32px] h-[32px] min-w-[32px] flex items-center justify-center rounded-full bg-[#EDE9FE] text-[#8B5CF6] text-20'
            />
            <div className='ml-3'>
              <p className='mr-1 text-se-neutral-64 text-12'>Cấp bậc</p>
              <p className='text-14'>{Congti.level}</p>
            </div>
          </div>
        </div>
        <div className='jsx-d84db6a84feb175e md:flex md:border-b border-[#DDD6FE] mb-4'>
          <div className='flex items-center mb-4 md:w-[33%]'>
            <FontAwesomeIcon
              icon={faUsers}
              className='w-[32px] h-[32px] min-w-[32px] flex items-center justify-center rounded-full bg-[#EDE9FE] text-[#8B5CF6] text-20'
            />
            <div className='ml-3'>
              <p className='mr-1 text-se-neutral-64 text-12'>Số lượng tuyển</p>
              <p className='text-14'>{Congti.soluong}</p>
            </div>
          </div>
          <div className='flex items-center mb-4 w-full md:w-[33%]'>
            <FontAwesomeIcon
              icon={faHardHat}
              className='w-[32px] h-[32px] min-w-[32px] flex items-center justify-center rounded-full bg-[#EDE9FE] text-[#8B5CF6] text-20'
            />
            <div className='ml-3'>
              <p className='mr-1 text-se-neutral-64 text-12'>Hình thức làm việc</p>
              <p className='text-14'>Toàn thời gian cố định</p>
            </div>
          </div>
        </div>
        <div className='jsx-d84db6a84feb175e md:flex md:border-b border-[#DDD6FE] mb-4'>
          <div className='flex items-center mb-4 w-full md:w-[33%]'>
            <FontAwesomeIcon
              icon={faGraduationCap}
              className='w-[32px] h-[32px] min-w-[32px] flex items-center justify-center rounded-full bg-[#EDE9FE] text-[#8B5CF6] text-20'
            />
            <div className='ml-3'>
              <p className='mr-1 text-se-neutral-64 text-12'>Yêu cầu bằng cấp</p>
              <p className='text-14'>{Congti.bangcap}</p>
            </div>
          </div>
          <div className='flex items-center mb-4 w-full md:w-[33%]'>
            <FontAwesomeIcon
              icon={faSuitcase}
              className='w-[32px] h-[32px] min-w-[32px] flex items-center justify-center rounded-full bg-[#EDE9FE] text-[#8B5CF6] text-20'
            />
            <div className='ml-3'>
              <p className='mr-1 text-se-neutral-64 text-12'>Yêu cầu kinh nghiệm</p>
              <p className='text-14'>{Congti.kinhnghiem}</p>
            </div>
          </div>
        </div>
        <div className='jsx-d84db6a84feb175e md:flex'>
          <div className='flex items-center mb-4 w-full'></div>
        </div>
      </div>
    </div>
  )
}

//  fetch(`http://wandertour.ddns.net:5000/post/recruitment/by/${id}`)
