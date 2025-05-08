import React from "react";
import ListCard from "../Components/ListCard";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import InputSearch from "../Components/InputSearch";
import { getActiveNotes } from "../utils/local-data";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

const HomePageWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("search");
  const search = (title) => {
    setSearchParams({ search: title });
  };
  //? validasi props untuk default keyword
  return <HomePage defaultKeyword={keyword} search={search} />;
};

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeNote: getActiveNotes(),
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
    const notes = this.state.activeNote.filter((note) =>
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
          <h2>Catatan Aktif</h2>
          {notes ? (
            <ListCard notes={notes} />
          ) : (
            <h2 className="empty-note">Catatan Kosong</h2>
          )}
          <Link to={"/addNote"} className="btn-note">
            <Plus color="#1E201E" />
          </Link>
        </div>
      </>
    );
  }
}
HomePage.propTypes = {
  search: PropTypes.func.isRequired,
  /*?
  defaultKeyword: 
  */
}
export default HomePageWrapper;
