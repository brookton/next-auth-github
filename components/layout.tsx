import React, { ReactNode } from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }: any) => (
  <div className="dark:bg-black bg-white flex flex-col h-screen justify-between">
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout
