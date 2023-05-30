import React from 'react';
import CategoryItem from '../category-items/CategoryItem';

const Directory = ({categories}) => {
  return (
    <div className='main-cnt'>
      {categories.map((category) => (
          <CategoryItem key={category.id} category={category}/>
      ))}
    </div>
  )
}

export default Directory
