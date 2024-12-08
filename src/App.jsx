import { HashRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Folders from './pages/Folders.jsx'
import Notes from './pages/Notes.jsx'
import './styles/App.css'

const transitions = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const App = () => {
  return (
    <HashRouter>
      <AnimatePresence>
        <Navbar/>
        <Routes key='route'>
          <Route path='/' key='home' element={
            <Home variants={transitions} />} 
          />
          <Route path='/folders' key='folders' element={
            <Folders variants={transitions} variants2={transitions}/>} 
          />
          <Route path='/add-notes/:noteID?' key='notes' element={
            <Notes variants={transitions} />} 
          />
        </Routes>
      </AnimatePresence>
    </HashRouter>
  )
}

export default App