import React from "react";
import { Save } from "lucide-react";
import { addNote, getAllNotes } from "../utils/local-data";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const AddNoteNoteWrapper = () => {
  const navigate = useNavigate();
  return <AddNote navigate={() => navigate("/")} />;
};

class AddNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "Masukan catatan",
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onInputHandler = this.onInputHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChange(ev) {
    this.setState(() => {
      return {
        title: ev.target.value,
      };
    });
  }

  onInputHandler(ev) {
    this.setState(() => {
      return {
        body: ev.target.innerHTML,
      };
    });
  }

  onSubmitHandler(ev) {
    ev.preventDefault();
    const title = this.state.title;
    const body = this.state.body;
    addNote({ title, body });
    this.props.navigate();
  }

  render() {
    return (
      <div className="add-note__container">
        <form onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            placeholder="Masukan Judul"
            onChange={this.onTitleChange}
            value={this.state.title}
          />
          <div
            className="add-note__body"
            data-placeholder={this.state.body}
            contentEditable
            onInput={this.onInputHandler}
          />
          <button type="submit" className="btn-note save">
            <Save color="#1E201E" />
          </button>
        </form>
      </div>
    );
  }
}

Addnote.proptypes = {
  navigate: PropTypes.func.isRequired
}

export default AddNoteNoteWrapper;
