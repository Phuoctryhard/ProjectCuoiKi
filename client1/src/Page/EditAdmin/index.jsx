import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuthContext } from '../../hook/useAuthContext'
import {
  successNotification,
  errorNotification,
  warningNotification,
  infoNotification,
  customNotification
} from '../../component/Toast'
export default function Edit() {
  const { user } = useAuthContext()
  const [error, setError] = useState(null)
  // lấy dữ liệu về
  const { _id } = useParams()
  const navigate = useNavigate()
  // const api = `http://wandertour.ddns.net:5000/post/edit/recruitment/${_id}`
  const api = `https://ngodinhphuoc.pythonanywhere.com/post/edit/recruitment/${_id}`
  const [formData, setFormData] = useState({
    congti: '',
    luong: '',
    vitri: '',
    khuvuc: '',
    level: 'entry',
    anh: '',
    timedang: ''
  })
  useEffect(() => {
    if (user) {
      fetch(api, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`
        }
      })
        .then((res) => {
          console.log(res)
          return res.json()
        })
        .then((res) => {
          console.log(res.data)
          setFormData(res)
        })
        .catch((error) => {
          console.log()
        })
    } else {
      setError('You must be logged in')
      return
    }
  }, [user])
  console.log(formData)
  console.log(_id)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (!user) {
      setError('You must be logged in')
      return
    }
    // Xử lý dữ liệu biểu mẫu, ví dụ: gửi dữ liệu đến máy chủ hoặc thực hiện các thao tác khác
    console.log('Submitted data:', formData)
    // http://wandertour.ddns.net:5000/post/create
    axios
      .post('https://ngodinhphuoc.pythonanywhere.com/post/create', formData, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          Authorization: `Bearer ${user.token}`
        }
      })
      .then((response) => {
        console.log('Response:', response.data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
    axios
      .put(`https://ngodinhphuoc.pythonanywhere.com/post/update/recruitment/${_id}`, formData, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          Authorization: `Bearer ${user.token}`
        }
      })
      .then((response) => {
        successNotification('Thành công cập nhật')
        navigate('/Postadmin')
      })
      .catch((err) => {
        console.log(err)
        errorNotification('Cập nhật thất bại')
      })
  }

  // update/recuitment/:_id
  return (
    <form className='vertical-form' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='companyName'>Tên Công Ty:</label>
        <input
          className='input-admin'
          type='text'
          id='companyName'
          name='congti'
          value={formData.congti}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label htmlFor='salary'>Lương:</label>
        <input
          className='input-admin'
          type='text'
          id='salary'
          name='luong'
          value={formData.luong}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label htmlFor='position'>Vị Trí Tuyển Dụng:</label>
        <input
          className='input-admin'
          type='text'
          id='position'
          name='vitri'
          value={formData.vitri}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label htmlFor='region'>Khu Vực:</label>
        <input
          className='input-admin'
          type='text'
          id='region'
          name='khuvuc'
          value={formData.khuvuc}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label htmlFor='level'>Level:</label>
        <select id='level' name='level' value={formData.level} onChange={handleChange} required>
          <option value='entry'>Entry Level</option>
          <option value='mid'>Mid Level</option>
          <option value='senior'>Senior Level</option>
        </select>
      </div>

      <div className='form-group'>
        <label htmlFor='skills'>Ảnh:</label>
        <input
          className='input-admin'
          type='text'
          id='skills'
          name='anh'
          value={formData.anh}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label htmlFor='postingTime'>Thời Gian Đăng:</label>
        <input
          className='input-admin'
          type='date' // Sử dụng type là "date" thay vì "datetime-local"
          id='postingTime'
          name='timedang'
          value={formData.timedang} // Convert Date object to string
          onChange={handleChange}
          required
        />
      </div>

      <button style={{ backgroundColor: 'green' }} type='submit'>
        Cập Nhật Tuyển Dụng
      </button>
    </form>
  )
}
