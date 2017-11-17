import React from 'react';
import Category from './category.js';
import './categories.css';

function Categories(props) {
  return (
    <div className="Categories">
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
