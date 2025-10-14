import { useState } from 'react'
import './App.css'
import Props from './pages/Props'
import Home from './pages/Home'
import { BrowserRouter as Router , Routes, Route , Link } from "react-router-dom";
import PracticeProject from './pages/PracticeProject';
import AddStudent from './pages/AddStudent';

function App() {

  return (
    <>
      <Router basename='/'>
      
         <Routes>
           <Route path="/props" element={<Props />} />
           <Route path="/" element={<Home />} />
           <Route path="/practiceproject" element={<PracticeProject />} />
           <Route path="/addstudent" element={<AddStudent />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
