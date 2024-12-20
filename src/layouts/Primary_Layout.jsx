import Header from '../components/Header.jsx'
import Navbar from '../components/Navbar.jsx'

const PrimaryLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{ children }</main>
            <Navbar />
        </>
    )
}

export default PrimaryLayout