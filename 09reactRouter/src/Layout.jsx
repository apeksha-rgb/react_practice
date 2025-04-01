import React from 'react'
import Header from './components/Header/header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header />
    {/* to pass the elements dynamically  */}
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout