import './styles/App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import { Toaster } from 'react-hot-toast'
import { AppProviders } from './contexts/app-provider.jsx'
import { routes } from './routes/index.js'
import { useTheme } from './contexts/theme-provider.jsx'

const App = () => {
    const { theme } = useTheme()

    return (
        <BrowserRouter>
            <Toaster 
                position='top-center'
                reverseOrder={true}
                toastOptions={{
                    style: {
                        backgroundColor: theme === 'dark' ? '#121212' : '#f5f5f5',
                        color: theme === 'dark' ? '#f5f5f5' : '#333333'
                    }
                }}
            />
            <AnimatePresence>
                <Routes>
                    {routes.map(({ path, Component, Layout}) => (
                        <Route
                            key={path}
                            path={path}
                            element={
                                Layout ? (
                                    <Layout>
                                        <Component />
                                    </Layout>
                                ) : (
                                    <Component />
                                )
                            }
                        />
                    ))}
                </Routes>
            </AnimatePresence>
        </BrowserRouter>
    )
}

export default App