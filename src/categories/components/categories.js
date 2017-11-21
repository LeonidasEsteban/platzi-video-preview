import React from 'react';
import Category from './category.js';
import './categories.css';
import Search from '../../widgets/containers/search';

function Categories(props) {
  return (
    <div className="Categories">
      <Search />
      {
        props.categories.map((category) => (
          <Category
            {...category}
            key={category.id}
            openModal={props.openModal}
          />
        ))
      }
    </div>
  )
}

export default Categories;
