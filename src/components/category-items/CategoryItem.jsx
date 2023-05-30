import React from 'react';
import './CategoryItem.styles.scss'

const CategoryItem = ({ category }) => {
    const { title, id } = category;

    return (
        <div className='main-cnt'>
            <div className='card-cnt'>
                <figure key={id}>
                    <img src="https://picsum.photos/id/287/250/300" alt="Mountains" />
                    <figcaption>{title}</figcaption>
                </figure>
            </div>
        </div>
    )
}

export default CategoryItem
