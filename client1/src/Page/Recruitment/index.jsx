import { useState, useEffect } from 'react'
import { SearchOutlined, DownOutlined } from '@ant-design/icons'
import './index.css'
import Select from '../Select/index'
import SelectSalary from '../Select/index copy'
import SelectMul from '../Select/muilti'
import Tabui from './Tabui'
import Footer from '../Footer'
//   <SearchOutlined />
export default function Recruitment() {
  const selectStyle = {
    marginRight: '50px'
    // Add other styles as needed
  }
  const [searchInput, setsearchInput] = useState('')
  const [selectPlace, setselectPlace] = useState('')
  const [selectLuong, setselectLuong] = useState('')
  const [data, setData] = useState([])
  const [vitri, setVitri] = useState([])
  const [currentLanguage, setCurrentLanguage] = useState('JavaScript')
  useEffect(() => {
    const languageList = ['C++', 'Python', '.NET', 'Java', 'JavaScript'] // Danh sách các ngôn ngữ để chuyển đổi
    let languageIndex = 0
    const changeLanguageAutomatically = () => {
      setCurrentLanguage(languageList[languageIndex])
      languageIndex = (languageIndex + 1) % languageList.length
    }
    const interval = setInterval(changeLanguageAutomatically, 3000) // Thay đổi ngôn ngữ sau mỗi 2 giây
    return () => clearInterval(interval) // Xóa interval khi unmount component
  }, [])

  useEffect(() => {
    // Thực hiện các hành động bạn muốn khi selectPlace thay đổi
    console.log('selectPlace changed:', selectPlace)
    console.log(searchInput)
    console.log(selectLuong)
    console.log(vitri)
    // Ví dụ: Gọi một hàm hoặc thực hiện một tác vụ nào đó
    // fetchData();
  }, [selectPlace])

  function handleOnchange(event) {
    setsearchInput(event.target.value)
  }
  function handleSubmit(event) {
    event.preventDefault()
    console.log('selectPlace changed:', selectPlace)
    console.log(searchInput)
    console.log(selectLuong)
    console.log(vitri)
    // const url =`http://wandertour.ddns.net:5000/company/search/all?q=${encodeURIComponent(searchInput)}&diadiem=${encodeURIComponent(
    //   selectPlace
    // )}&luong=${encodeURIComponent(selectLuong)}&vitri=${encodeURIComponent(vitri)}`
    fetch(
      `http://localhost:5000/company/search/all?q=${encodeURIComponent(searchInput)}&diadiem=${encodeURIComponent(
        selectPlace
      )}&luong=${encodeURIComponent(selectLuong)}&vitri=${encodeURIComponent(vitri)}`
    )
      .then((response) => response.json())
      .then((res) => {
        console.log('Check')
        setData(res)
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
    setsearchInput('')
    console.log(searchInput)
  }


    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  return (
    <div >
      <div className='heading'>
        <div className='heading_search'>
          <h2 className='heading_searchText'> </h2>
        </div>
        <form>
          <div className='heading_search'>
            <div className='search'>
              <input
                typy='text'
                className='search_skill'
                placeholder='Tìm kiếm ngôn ngữ,công ti... '
                onChange={(event) => handleOnchange(event)}
                value={searchInput}
              ></input>
              <button className='search-btn' onClick={(event) => handleSubmit(event)}>
                Search
              </button>
            </div>
          </div>
        </form>
        <div className='Select'>
          <Select selectPlace={setselectPlace} />
          <SelectSalary style={selectStyle} setselectLuong={setselectLuong} />
          <SelectMul style={selectStyle} setVitri={setVitri} vitri={vitri} />
        </div>
      </div>
      <div className='TabUi'>
        <Tabui
          selectPlace={selectPlace}
          selectLuong={selectLuong}
          searchInput={searchInput}
          vitri={vitri}
          data={data}
          setData={setData}
        />
      </div>
      <div style={{background:"#E9EAEC", height:'100%'}}>
      
      <Footer/>
      </div>
   
    </div>
  )
}

// // Tìm kiếm <span className='heading_language'>{currentLanguage}</span>