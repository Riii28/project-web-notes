Berikut implementasi gabungan dari reducer dan halaman folder seperti yang diminta, sehingga Anda dapat mengatur notes berdasarkan folder yang dipilih, serta memastikan fitur notes seperti sebelumnya tetap berjalan.

---

### **Reducer Modifikasi**

Reducer diubah untuk mendukung folder dan fungsi terkait:

```javascript
import dayjs from "dayjs";

export const initialState = {
    title: '',
    content: '',
    character: 0,
    selected: [],
    folders: JSON.parse(localStorage.getItem('folders')) || {}, // Menyimpan notes per folder
    notes: JSON.parse(localStorage.getItem('notes')) || [],     // Menyimpan semua notes
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_TITLE':
            return { ...state, title: action.payload };

        case 'SET_CONTENT':
            return { 
                ...state, 
                content: action.payload, 
                character: action.payload.length
            };

        case 'RESET_FIELD':
            return {
                ...state,
                title: '',
                content: '',
                character: 0,
            };

        case 'SAVE_NOTE':
            const updateNote = {
                id: action.payload.noteID ? action.payload.noteID : +new Date(),
                title: state.title.trim(),
                content: state.content.trim(),
                date: dayjs().format('dddd, MMMM D [at] HH:mm'),
                character: state.character,
            };

            const updatedNotes = action.payload.noteID
                ? state.notes.map((note) => (
                    note.id === action.payload.noteID ? updateNote : note
                ))
                : [...state.notes, updateNote];

            localStorage.setItem('notes', JSON.stringify(updatedNotes));
            return {
                ...state,
                notes: updatedNotes,
                title: '',
                content: '',
                character: 0,
            };

        case 'ADD_TO_FOLDER':
            const { folderName, noteID } = action.payload;

            // Salin folder saat ini, tambahkan note ke folder baru
            const updatedFolders = {
                ...state.folders,
                [folderName]: state.folders[folderName]
                    ? [...state.folders[folderName], noteID]
                    : [noteID],
            };

            localStorage.setItem('folders', JSON.stringify(updatedFolders));
            return {
                ...state,
                folders: updatedFolders,
            };

        case 'DELETE_SELECTED':
            const remainingNotes = state.notes.filter((note) => {
                return !state.selected.includes(note.id);
            });

            // Hapus notes dari semua folder
            const cleanedFolders = Object.fromEntries(
                Object.entries(state.folders).map(([key, notes]) => [
                    key,
                    notes.filter((id) => !state.selected.includes(id)),
                ])
            );

            localStorage.setItem('notes', JSON.stringify(remainingNotes));
            localStorage.setItem('folders', JSON.stringify(cleanedFolders));

            return {
                ...state,
                notes: remainingNotes,
                folders: cleanedFolders,
                selected: [],
            };

        default:
            throw new Error('Unknown action type');
    }
};
```

---

### **FolderDetail Page**

Tambahkan logika untuk menampilkan isi folder berdasarkan `folderName`.

```javascript
import { useParams } from "react-router-dom";
import { useNotesContext } from "../contexts/notes-provider";

const FolderDetail = () => {
    const { folderName } = useParams();
    const { state } = useNotesContext();

    const folderNotesIDs = state.folders[folderName] || [];
    const folderNotes = state.notes.filter((note) =>
        folderNotesIDs.includes(note.id)
    );

    return (
        <div className="mt-24 p-2 text-color-100">
            <h1 className="text-2xl font-bold">Folder: {folderName}</h1>
            {folderNotes.length > 0 ? (
                folderNotes.map((note) => (
                    <div key={note.id} className="p-4 bg-gray-200 rounded-md mb-2">
                        <h2 className="font-semibold">{note.title}</h2>
                        <p>{note.content}</p>
                        <span>{note.date}</span>
                    </div>
                ))
            ) : (
                <p>Folder ini kosong.</p>
            )}
        </div>
    );
};

export default FolderDetail;
```

---

### **FolderList Page**

Daftar folder dengan tautan untuk navigasi.

```javascript
import { Link } from "react-router-dom";
import { useNotesContext } from "../contexts/notes-provider";

const FolderList = () => {
    const { state } = useNotesContext();

    return (
        <div className="mt-24 p-2 text-color-100">
            <h1 className="text-2xl font-bold">Folders</h1>
            {Object.keys(state.folders).map((folderName) => (
                <Link
                    key={folderName}
                    to={`/folders/${folderName}`}
                    className="block p-4 bg-blue-200 rounded-md mb-2"
                >
                    {folderName} ({state.folders[folderName].length} notes)
                </Link>
            ))}
        </div>
    );
};

export default FolderList;
```

---

### **Navigasi Routes**

Pastikan `App.js` memiliki rute berikut:

```javascript
import FolderDetail from "./components/FolderDetail";
import FolderList from "./components/FolderList";

<Route path="/folders" element={<FolderList />} />
<Route path="/folders/:folderName" element={<FolderDetail />} />
```

---

### **Penjelasan**

1. **`Object.keys`**: Mengembalikan array dari properti (key) object. 
   - **Contoh**: 
     ```javascript
     const folders = { Work: [1], Personal: [2] };
     console.log(Object.keys(folders)); // ["Work", "Personal"]
     ```

2. **`Object.entries`**: Mengembalikan array pasangan `[key, value]` untuk setiap properti.
   - **Contoh**:
     ```javascript
     const folders = { Work: [1], Personal: [2] };
     console.log(Object.entries(folders)); // [["Work", [1]], ["Personal", [2]]]
     ```

---

Dengan implementasi ini:
1. **Folder dapat menyimpan notes yang dipilih.**
2. **Halaman FolderDetail akan menampilkan notes berdasarkan folder.**
3. **Notes dan folders tetap sinkron dengan `localStorage`.**