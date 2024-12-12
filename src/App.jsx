import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import './styles/App.css'
import Home from './pages/Home.jsx'
import Folders from './pages/Folders.jsx'

// const transitions = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1 },
//   exit: { opacity: 0 },
// }

const App = () => {
  return (
    <BrowserRouter basename='/project-web-notes'>
      <AnimatePresence>
        <Routes key={'home'}>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes key={'folders'}>
          <Route path="/folders" element={<Folders />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  )
}

export default App