import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import './styles/App.css'
import Home from './pages/Home.jsx'
import Folders from './pages/Folders.jsx'
import { AnimationProvider } from './contexts/animation-provider.jsx'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar.jsx'
import { NavbarProvider } from './contexts/navbar-provider.jsx'


const App = () => {
  return (
    <BrowserRouter basename='/project-web-notes'>
      <AnimatePresence>
        <AnimationProvider>
          <NavbarProvider>
            <Toaster position='top-center' reverseOrder={true} toastOptions={{style: {
              background: '#333',
              color: '#fff'
            }}}/>
            <Routes key={'home'}>
              <Route path="/" element={<Home />} />
            </Routes>
            <Routes key={'folders'}>
              <Route path="/folders" element={<Folders />} />
            </Routes>
            <Navbar />      
          </NavbarProvider>
        </AnimationProvider>
      </AnimatePresence>
    </BrowserRouter>
  )
}

export default App