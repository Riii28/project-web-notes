import { useAnimation } from "../contexts/animation-provider.jsx"
import NotesList from "../components/NotesList.jsx"
import { useTheme } from "../contexts/theme-provider.jsx"

const Home = () => {
  const { handleTheme } = useTheme()

  return (

    <div className="h-screen pt-36 bg-color-light text-color-dark dark:bg-color-dark dark:text-color-light transition-all duration-200">
      <NotesList />
      <button onClick={handleTheme}>Theme</button>
    </div>
    )
}

export default Home