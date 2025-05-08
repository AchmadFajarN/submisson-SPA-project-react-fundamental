import React from "react";
import PropTypes from "prop-types";

const InputSearch = ({ keyword, onKeywordChange }) => {
  return (
    <div className="main-homepage__input">
      <h3>Cari Catatan</h3>
      <input type="text" value={keyword} onChange={onKeywordChange} />
    </div>
  );
};

InputSearch.propTypes = {
  keyword: PropTypes.string.isRequired,
  onKeywordChange: PropTypes.func.isRequired,
};
export default InputSearch;
