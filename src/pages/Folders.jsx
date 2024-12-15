import Header from "../components/Header.jsx"
import { HeaderProvider } from "../contexts/header-provider.jsx"

const Folders = () => {
    return (
        <HeaderProvider>
            <Header />
            <div className="h-full bg-light">
                <h2>d</h2>
            </div>
        </HeaderProvider>
    )
}

export default Folders