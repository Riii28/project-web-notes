import NotesList from "../components/NotesList.jsx"
import FoldersSelector from "../components/FoldersSelector.jsx"

const Home = () => {

    return (
        <div className="pt-36 pb-24">
            <FoldersSelector />
            <NotesList />
        </div>
    )
}

export default Home