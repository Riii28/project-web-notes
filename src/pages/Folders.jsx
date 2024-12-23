import FoldersList from "../components/FoldersList.jsx"
import SetFolders from "../components/SetFolders.jsx"

const Folders = () => {

    return (
        <div className="pt-36 pb-24">
            <SetFolders />
            <FoldersList />
        </div>
    )
}

export default Folders