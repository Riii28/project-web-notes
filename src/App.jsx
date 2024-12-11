import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import './styles/App.css'
import Header from './components/Header'

const transitions = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Header />
      </AnimatePresence>
    </BrowserRouter>
  )
}

export default App