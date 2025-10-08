import React from 'react'
import { Link, Outlet } from 'react-router'

const Layout = () => {
  return (
    <div>
        <Link to='home'>Home</Link>  |
        <Link to='insert'>Insert</Link>  |
        <Link to='display'>Display</Link>
        <Outlet/>
        
    </div>
  )
}

export default Layout