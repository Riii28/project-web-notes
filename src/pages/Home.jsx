import { motion } from "framer-motion";
import HomeHeader from "../components/Home-Header.jsx";
import NotesList from "../components/Notes-List.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ variants }) => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });

  const handleEditNote = (noteID) => {
    navigate(`/add-notes/${noteID}`);
  };

  const handleDeleteNote = (noteID) => {
    const updatedNotes = notes.filter((note) => note.id !== noteID);
    setNotes(updatedNotes); // Perbarui state
    localStorage.setItem("notes", JSON.stringify(updatedNotes)); // Simpan ke localStorage
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <motion.div
      className="mt-8 h-full mx-4"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
        <HomeHeader 
            variants={variants} 
        />
        <NotesList 
            variants={variants} 
            notes={notes} 
            onEdit={handleEditNote} 
            onDelete={handleDeleteNote}
        />
    </motion.div>
  );
};

export default Home;
