import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import './styles/App.css'
import Home from './pages/Home.jsx'
import Folders from './pages/Folders.jsx'
import NotFound from './pages/NotFound.jsx'
import { AnimationProvider } from './contexts/animation-provider.jsx'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar.jsx'
import { NavbarProvider } from './contexts/navbar-provider.jsx'
import { ThemeProvider } from './contexts/theme-provider.jsx'
import Header from './components/Header.jsx'
import { HeaderProvider } from './contexts/header-provider.jsx'

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AnimationProvider>
          <NavbarProvider>
            <HeaderProvider>
              <Toaster position='top-center' reverseOrder={true} toastOptions={{style: {
                background: '#333',
                color: '#fff'
              }}}/>
              <Header/>
                <AnimatePresence>
                  <Routes key="/home">
                    <Route path="/" element={<Home />} />
                  </Routes>
                  <Routes key="/folders">
                    <Route path="/folders" element={<Folders />} />
                  </Routes>
                  <Routes key='all'>
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </AnimatePresence>
              <Navbar />      
            </HeaderProvider>
          </NavbarProvider>
        </AnimationProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App