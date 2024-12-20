import './styles/App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import { Toaster } from 'react-hot-toast'

import Home from './pages/Home.jsx'
import Folders from './pages/Folders.jsx'
import SetNotes from './pages/SetNotes.jsx'
import Profile from './pages/Profile.jsx'
import Search from './pages/Search.jsx'

import { AnimationProvider } from './contexts/animation-provider.jsx'
import { NavbarProvider } from './contexts/navbar-provider.jsx'
import { ThemeProvider } from './contexts/theme-provider.jsx'
import { HeaderProvider } from './contexts/header-provider.jsx'
import { ProfileProvider } from './contexts/profile-provider.jsx'

import PrimaryLayout from './layouts/Primary_Layout.jsx'
import SecondaryLayout from './layouts/Secondary_layout.jsx'


const App = () => {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <AnimationProvider>
                    <NavbarProvider>
                        <HeaderProvider>
                            <ProfileProvider>
                                <Toaster 
                                    position='top-center'
                                    reverseOrder={true}
                                />
                                <AnimatePresence>
                                    <Routes>
                                        <Route 
                                            path='/'
                                            element={
                                                <PrimaryLayout>
                                                    <Home />
                                                </PrimaryLayout>
                                            }
                                        />
                                        <Route 
                                            path='/folders'
                                            element={
                                                <PrimaryLayout>
                                                    <Folders />
                                                </PrimaryLayout>
                                            }
                                        />
                                        <Route 
                                            path='/profile'
                                            element={
                                                <Profile />
                                            }
                                        />
                                        <Route 
                                            path='/set-notes/:noteID?'
                                            element={
                                                <SecondaryLayout>
                                                    <SetNotes />
                                                </SecondaryLayout>
                                            }
                                        />
                                        <Route 
                                            path='/search'
                                            element={
                                                <Search />
                                            }
                                        />
                                    </Routes>
                                </AnimatePresence>
                            </ProfileProvider>
                        </HeaderProvider>
                    </NavbarProvider>
                </AnimationProvider>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App