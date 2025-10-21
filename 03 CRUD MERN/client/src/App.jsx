import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './Home';
import Insert from './Insert';
import Display from './Display';
import Search from './Search';
import Update from './Update';
import MyEdit from './MyEdit'


const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={< Layout/>} >
        <Route index element={< Home/>} />
        <Route path='insert' element={<Insert/>} />
        <Route path='display' element={<Display/>} />
        <Route path='search' element={<Search/>} />
        <Route path='update' element={<Update/>} />
        <Route path='myedit/:id' element={<MyEdit/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App