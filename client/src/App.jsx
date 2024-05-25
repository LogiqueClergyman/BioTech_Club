import React from 'react'
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Event from './component/Event';
import Team from './component/Team';
import PostEvent from './component/PostEvent';
import ErrorPage from './component/ErrorPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Gallery from './component/Gallery';
import PostImage from './component/PostImage';
import About from './component/About';
import Fotter from './component/Fotter';


const USER_TYPE = {
  PUBLIC: 'Public User',
  USER: 'User',
  ADMIN: 'Admin',
}

// const CURRENT_USER_TYPE = USER_TYPE.USER
const CURRENT_USER_TYPE = JSON.parse(localStorage.getItem("role"));

function App() {
  return (
    <div className='bg-emerald-100'>
      <Navbar />
      <AppRoutes />
      <Fotter/>
    </div>
  )
}

function AppRoutes() {
  return (<>
    <Routes>
      {/* <Route path="/signup" element={<PublicElement><Signup /></PublicElement>} />
      <Route path="/signin" element={<PublicElement><Signin /></PublicElement>} />
      <Route path="/event" element={<PublicElement><Events /></PublicElement>} />
      <Route path="/team" element={<PublicElement><Team /></PublicElement>} />
      <Route path="/UserProfile" element={<UserElement><Profile /></UserElement>} /> */}
      <Route path="/" element={<PublicElement><Home /></PublicElement>} />
      <Route path="/about" element={<PublicElement><About /></PublicElement>} />
      <Route path="/event" element={<PublicElement><Event /></PublicElement>} />
      <Route path="/team" element={<PublicElement><Team /></PublicElement>} />
      <Route path="/postEvent" element={<PublicElement><PostEvent /></PublicElement>} />
      <Route path="/postImage" element={<PublicElement><PostImage /></PublicElement>} />
      <Route path="/gallery" element={<PublicElement><Gallery /></PublicElement>} />
      <Route path="*" element={<PublicElement><ErrorPage /></PublicElement>} /> 
    </Routes>

    <ToastContainer />
  </>
  )
}



function PublicElement({ children }) {
  return <>{children}</>
}

function UserElement({ children }) {
  if (CURRENT_USER_TYPE === USER_TYPE.USER || CURRENT_USER_TYPE === USER_TYPE.ADMIN)
    return <>{children}</>
  else
    // return <Navigate to={'/pagenotfound'}/>
    return <>Please Login Again....</>
}

function OnlyUserElement({ children }) {
  if (CURRENT_USER_TYPE === USER_TYPE.USER)
    return <>{children}</>
  else
    // return <Navigate to={'/pagenotfound'}/>
    return <>Please Login Again</>
}

function AdminElement({ children }) {
  if (CURRENT_USER_TYPE === USER_TYPE.ADMIN || CURRENT_USER_TYPE === USER_TYPE.SUPER_ADMIN)
    return <>{children}</>
  else
    // return <Navigate to={'/pagenotfound'}/>
    return <>Please Login Again</>
}

function OnlySuperAdminElement({ children }) {
  if (CURRENT_USER_TYPE === USER_TYPE.SUPER_ADMIN)
    return <>{children}</>
  else
    // return <Navigate to={'/pagenotfound'}/>
    return <>do not access to Admin domain</>
}



export default App