import Modal from './Modal.jsx'
import { useNavbarContext } from '../contexts/navbar-provider.jsx'
import { useNotesContext } from '../contexts/notes-provider.jsx'
import toast from 'react-hot-toast'

const SetFolders = () => {
    const { state: navState, dispatch: navDispatch } = useNavbarContext()
    const { state: notesState, dispatch: notesDispatch } = useNotesContext()

    const handleCreateFolder = () => {
        if (!notesState.folder.trim()) {
            toast.error('Isi yang bener woi')
            return
        }

        notesDispatch({ type: 'CREATE_FOLDER', payload: notesState.folder.trim() })
        navDispatch({ type: 'SET_FOLDERS' })
        toast.success('Success')
    }

    return (
        <Modal state={navState.setFolders}>
            <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col rounded-md shadow-md p-4 w-72 gap-y-4 bg-color-light text-color-dark dark:bg-color-dark dark:text-color-light transition-colors duration-200'>
                <span className='block text-xl font-semibold'>New folder</span>
                <input
                    value={notesState.folder}
                    onChange={(e) => notesDispatch({ type: 'SET_FOLDER', payload: e.target.value })}
                    className="w-full rounded-md p-2 text-color-textDark outline-none"
                    type="text"
                    placeholder='Folder' 
                    maxLength={50}
                    required
                />
                <div className='flex justify-end gap-x-5'>
                    <button
                        onClick={() => {
                            navDispatch({ type: 'SET_FOLDERS' })
                            notesDispatch({ type: 'RESET_FIELD' })
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleCreateFolder}
                    >
                        Add
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default SetFolders