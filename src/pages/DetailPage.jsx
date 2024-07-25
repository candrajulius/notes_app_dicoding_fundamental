import { useNavigate, useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import NoteArchiveButton from "../components/button/NoteArchiveButton";
import NoteDeleteButton from "../components/button/NoteDeleteButton";
import { useEffect, useState } from "react";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/network-data";
import { archive_page_path, home_page_path } from "../utils/constant";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState([]);

  useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
    });
  }, [id]);

  const handleArchive = async (id) => {
    await archiveNote(id);
    navigate(home_page_path);
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    note.archived ? navigate(archive_page_path) : navigate(home_page_path);
  };

  const handleUnArchiveNote = async (id) => {
    await unarchiveNote(id);
    navigate(home_page_path);
  };

  return (
    <>
      <NoteDetail {...note} />
      <div className='detail-page_action'>
        <NoteArchiveButton
          id={id}
          archived={note.archived}
          onArchive={handleArchive}
          onUnarchive={handleUnArchiveNote}
        />
        <NoteDeleteButton id={id} onDelete={handleDelete} />
      </div>
    </>
  );
};

export default DetailPage;
