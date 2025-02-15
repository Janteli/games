import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import FloatingMessenger from './FloatingMessenger'

const Layout = () => {
  return (
    <>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
        <FloatingMessenger/>
    </>
  )
}

export default Layout