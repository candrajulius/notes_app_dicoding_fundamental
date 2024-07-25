import React, { useEffect, useState } from "react";
import NoteList from "../components/NoteList";
import { getActiveNotes } from "../utils/network-data";
const HomePage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  return (
    <>
      <div className='homepage'>
        <NoteList notes={notes} />
      </div>
    </>
  );
};

export default HomePage;
