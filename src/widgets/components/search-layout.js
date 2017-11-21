import React from 'react';
import './search-layout.css';

function Search(props) {
  return (
    <form
      className="SearchLayout"
      onSubmit={props.handleSubmit}
    >
      {props.children}
    </form>
  )
}

export default Search;
