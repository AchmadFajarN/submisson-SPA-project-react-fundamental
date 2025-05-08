import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import parser from 'html-react-parser'

const CardNote = ({ title, date, body, id }) => {
  return (
    <div className="card-note">
      <h3><Link className="title-link" to={`/note/${id}`}>{ title }</Link></h3>
      <small>{date}</small>
      <p>{parser(body)}</p>
    </div>
  );
};

CardNote.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}

export default CardNote;
