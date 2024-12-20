import Navbar from "../components/Navbar.jsx";

const SecondaryLayout = ({ children }) => {
    return (
        <>
            <main>{ children }</main>
            <Navbar />
        </>
    )
}

export default SecondaryLayout