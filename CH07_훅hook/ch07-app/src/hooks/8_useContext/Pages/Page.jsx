import React from 'react'
import Header from '../LayOut/Header'
import Content from '../LayOut/Content'
import Footer from '../LayOut/Footer'

import {BrowserRouter} from 'react-router-dom'

function Page() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Content />
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default Page