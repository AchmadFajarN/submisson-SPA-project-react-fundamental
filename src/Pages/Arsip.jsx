import React from "react";
import ListCard from "../Components/ListCard";
import { useSearchParams } from "react-router-dom";
import InputSearch from "../Components/InputSearch";
import { getArchivedNotes } from "../utils/local-data";
import PropTypes from "prop-types";

const ArsipWrap = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("search");
  const search = (title) => {
    setSearchParams({ search: title });
  };
  return <Arsip defaultKeyword={keyword} search={search} />;
};

class Arsip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ArchiveNotes: getArchivedNotes(),
      keyword: this.props.defaultKeyword || "",
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch = (ev) => {
    this.setState(() => {
      return {
        keyword: ev.target.value,
      };
    });
    this.props.search(ev.target.value);
  };
  render() {
    const notes = this.state.ArchiveNotes.filter((note) =>
      note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
    );
    return (
      <>
        <div>
          <InputSearch
            keyword={this.state.keyword}
            onKeywordChange={this.onSearch}
          />
        </div>
        <div className="main-container__content">
          <h2>Catatan Arsip</h2>
          {notes.length ? (
            <ListCard notes={notes} />
          ) : (
            <h2 className="empty-note">Catatan Kosong</h2>
          )}
        </div>
      </>
    );
  }
}
Arsip.propTypes = {
  search: PropTypes.func.isRequired
}
export default ArsipWrap;
