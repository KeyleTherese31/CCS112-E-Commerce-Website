import React from 'react'
import Nav from './comp/nav'
import {BrowserRouter} from 'react-router-dom'
import { Route } from 'router'
import Rout from './comp/rout'

function App() {
  return (
    <BrowserRouter>
   <Nav/>
   <Rout />
    </BrowserRouter>
  )
}

export default App
