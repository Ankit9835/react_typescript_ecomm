import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components'

const HomeLayout = () => {
  return (
    <>
    <Header />
    <nav>navbar</nav>
    <div className='align-element py-20'>
      <Outlet />
    </div>
  </>
  )
}

export default HomeLayout
