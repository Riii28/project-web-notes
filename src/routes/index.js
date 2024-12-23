import Home from "../pages/Home.jsx"

import PrimaryLayout from "../layouts/Primary_Layout.jsx"
import Secondary_layout from '../layouts/Secondary_layout.jsx'
import Folders from "../pages/Folders.jsx"
import SetNotes from "../pages/SetNotes.jsx"
import Search from "../pages/Search.jsx"
import Profile from "../pages/Profile.jsx"
import FolderDetail from "../pages/FolderDetail.jsx"
import SecondaryLayout from "../layouts/Secondary_layout.jsx"

export const routes = [
    {
        path: '/',
        Component: Home,
        Layout: PrimaryLayout,
    },
    {
        path: '/folders',
        Component: Folders,
        Layout: PrimaryLayout,
    },
    {
        path: '/search',
        Component: Search,
    },
    {
        path: '/set-notes/:noteID?',
        Component: SetNotes,
    },
    {
        path: '/profile',
        Component: Profile,
    },
    {
        path: '/folders/:name',
        Component: FolderDetail,
    }
]