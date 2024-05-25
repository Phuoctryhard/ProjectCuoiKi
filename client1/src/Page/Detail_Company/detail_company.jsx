import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Image, Card, CardBody } from '@nextui-org/react'

function CompanyDetails() {
  const { id } = useParams()
  const [company, setCompany] = useState(null)

  useEffect(() => {
    fetch(`https://ngodinhphuoc.pythonanywhere.com/company/${id}`)
      .then((response) => response.json())
      .then((res) => setCompany(res))
      .catch((err) => console.log(err))
  }, [id])

  if (!company) {
    return <div>Loading...</div>
  }

  return (
    <div className='flex flex-wrap justify-center' style={{ marginTop: '10px' }}>
      <Card
        className='border-none bg-background/60 dark:bg-default-100/50 max-w-[800px] mb-4 mr-8'
        style={{ width: '80%', marginTop: '30px' }}
      >
        <CardBody>
          <div className='flex justify-center mb-4'>
            <Image
              alt='Company logo'
              className='object-cover'
              height={150}
              shadow='md'
              src={company.image}
              width='150px'
            />
          </div>
          <table className='min-w-full bg-white' style={{ width: '80%', margin: '0px auto' }}>
            <tbody>
              <tr>
                <td className='border px-4 py-2 font-semibold'>ID</td>
                <td className='border px-4 py-2'>{company._id}</td>
              </tr>
              <tr>
                <td className='border px-4 py-2 font-semibold'>Name</td>
                <td className='border px-4 py-2'>{company.name}</td>
              </tr>
              <tr>
                <td className='border px-4 py-2 font-semibold'>Field</td>
                <td className='border px-4 py-2'>{company.linhvuc}</td>
              </tr>
              <tr>
                <td className='border px-4 py-2 font-semibold'>Position</td>
                <td className='border px-4 py-2'>{company.vitri}</td>
              </tr>
              <tr>
                <td className='border px-4 py-2 font-semibold'>Employer</td>
                <td className='border px-4 py-2'>{company.employer}</td>
              </tr>
              <tr>
                <td className='border px-4 py-2 font-semibold'>Language</td>
                <td className='border px-4 py-2'>{company.language}</td>
              </tr>
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  )
}

export default CompanyDetails
