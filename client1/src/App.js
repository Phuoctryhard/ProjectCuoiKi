import { Routes, Route, BrowserRouter } from 'react-router-dom'
// import Home from './Page/Home/index.jsx'
// import Recruitment from './Page/Recruitment/index.jsx'
import Analisic from './Page/AnaLitic/index.jsx'
// import Detail from './Page/Detail_Recruitment/detail'
import Header from './Header'
// import  Admin  from './Page/Admin/admin'
import { publicRouter } from './routers/index.js'

import Default from './Layout/DefaultLayout/index.jsx'
import AdminLayout from './Layout/AdminLayout/index.jsx'
import { Fragment } from 'react'
import Login from './Layout/LoginLayout/index.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          {publicRouter.map((route, index) => {
            var Layout = Default
            if (route.Layout == 'Admin') {
              Layout = AdminLayout
            } else if (route.Layout == 'Login') {
              Layout = Login
            }
            const Page = route.commponent
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </div>
      <ToastContainer />
    </BrowserRouter>
  )
}
export default App
