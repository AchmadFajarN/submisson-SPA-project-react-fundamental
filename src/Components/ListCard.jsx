import React from "react";
import CardNote from "./CardNote";
import PropTypes from "prop-types";

const ListCard = ({ notes }) => {
  const showFormattedDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("id-ID", options);
  };
  return (
    <div className="card-note__container">
      {notes.map((note) => {
        const date = showFormattedDate(note.createdAt)
        return (
          <CardNote
            key={note.id}
            title={note.title}
            date={date}
            body={note.body}
            id={note.id}
          />
        );
      })}
    </div>
  );
};

ListCard.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListCard;
