import Header from "../components/Header.jsx"
import { HeaderProvider } from "../contexts/header-provider.jsx"

const Home = () => {
    return (
        <HeaderProvider>
            <Header />
        </HeaderProvider>
    )
}

export default Home