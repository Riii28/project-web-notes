import { useLocation } from "react-router-dom"
import NotesList from "../components/NotesList.jsx"
import { useNavbarContext } from "../contexts/navbar-provider.jsx"

const Home = () => {

    return (
        <div className="pt-36 pb-24">
            <NotesList />
        </div>
    )
}

export default Home