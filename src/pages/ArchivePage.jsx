import React, { useContext, useEffect, useState } from "react";
import NoteList from "../components/NoteList";
import { getArchivedNotes } from "../utils/network-data";
import LocaleContext from "../contexts/LocaleContext";

const ArchivedPage = () => {
  const { locale } = useContext(LocaleContext);
  const [notes, setNote] = useState([]);

  useEffect(() => {
    const fetchNote = async () => {
      const { data } = await getArchivedNotes();
      setNote(data);
    };
    fetchNote();
  }, []);

  return (
    <div className='archives-page'>
      <h2>{locale === "id" ? "Catatan Arsip" : "Note Archived"}</h2>
      <NoteList notes={notes} />
    </div>
  );
};

export default ArchivedPage;
