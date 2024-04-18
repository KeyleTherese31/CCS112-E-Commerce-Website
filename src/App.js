import React from 'react'
import Nav from './nav'
import {BrowserRouter} from 'react-router-dom'
import { Route } from 'router'

function App() {
  return (
    <BrowserRouter>
   <Nav/>
    </BrowserRouter>
  )
}

export default App
