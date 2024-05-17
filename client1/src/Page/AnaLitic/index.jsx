import React, { useEffect, useState } from 'react'
import { ShoppingCartOutlined, ShoppingOutlined, UserOutlined, DollarCircleOutlined } from '@ant-design/icons'
import { Card, Space, Statistic } from 'antd'
import { getTotalPage, getReacts } from '../../Api'
import ReactPaginate from 'react-paginate'

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
import { users } from './data'
function Analisic() {
  //const apiUrl1 = 'http://wandertour.ddns.net:5000/data/view/'
  const apiUrl = 'http://localhost:5000/data/view/'
  const [total, setTotal] = useState([])
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setTotal(data[0])
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])
  console.log(total)
  return (
    <div>
      <App />
    </div>
  )
}
export default Analisic

function App() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const rowsPerPage = 4

  // Đặt URL của API của bạn ở đây
  // const apiUrl = 'http://wandertour.ddns.net:5000/data/react'
  const apiUrl = 'http://localhost:5000/data/react'

  useEffect(() => {
    // Hàm fetch dữ liệu từ API
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl)
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const pages = Math.ceil(data.length / rowsPerPage)

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage

    return data.slice(start, end)
  }, [page, data])

  return (
    <div>
      <AnalisicPost />
    </div>
  )
}

function AnalisicPost() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const rowsPerPage = 2
  //const api = ' http://wandertour.ddns.net:5000/Post/'
  const api = ' http://localhost:5000/Post/'

  // const [DaTa, setDaTa] = useState([])

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  const pages = Math.ceil(data.length / rowsPerPage)

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage

    return data.slice(start, end)
  }, [page, data])

  return (
    <div>
      <Table
        aria-label='Example table with client-side pagination'
        bottomContent={
          <div className='flex w-full justify-center'>
            <Pagination
              isCompact
              showControls
              showShadow
              color='secondary'
              page={page}
              total={data.length - 1}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
        classNames={{
          wrapper: 'min-h-[222px]'
        }}
        style={{
          tableLayout: 'fixed',
          width: '100%' // Ensure the table takes the full width of its container
        }}
      >
        <TableHeader>
          <TableColumn key='_id' style={{ width: '12.5%' }}>
            Idpost
          </TableColumn>

          <TableColumn key='text' style={{ width: '25.0%' }}>
            Text
          </TableColumn>

          <TableColumn key='time' style={{ width: '12.5%' }}>
            Time
          </TableColumn>
        </TableHeader>

        <TableBody items={items}>
          {(item) => <TableRow key={item._id}>{(columnKey) => <TableCell>{item[columnKey]}</TableCell>}</TableRow>}
        </TableBody>
      </Table>
    </div>
  )
}
