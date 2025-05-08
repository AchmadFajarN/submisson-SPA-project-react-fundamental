import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getNote } from "../utils/local-data";
import parser from "html-react-parser";
import { Archive, Trash, ArchiveRestore } from "lucide-react";
import { deleteNote, archiveNote, unarchiveNote } from "../utils/local-data";

const NotePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = getNote(id);
  const showFormattedDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("id-ID", options);
  };
  const date = showFormattedDate(note.createdAt);

  const deleteHandler = () => {
    deleteNote(id);
    note.archived ? navigate("/arsip"): navigate('/');
    
  };

  const archiveHandler = () => {
    archiveNote(id);
    navigate("/arsip");
  };

  const archievedRestoreHandler = () => {
    unarchiveNote(id);
    navigate("/");
  };
  return (
    <div className="container-note">
      <h1>{note.title}</h1>
      <small>{date}</small>
      <p>{parser(note.body)}</p>
      {note.archived ? (
        <button className="btn-note archive" onClick={archievedRestoreHandler}>
          <ArchiveRestore />
        </button>
      ) : (
        <button className="btn-note archive" onClick={archiveHandler}>
          <Archive />
        </button>
      )}
      <button className="btn-note trash" onClick={deleteHandler}>
        <Trash />
      </button>
    </div>
  );
};

export default NotePage;
