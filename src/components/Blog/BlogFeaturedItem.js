import React from 'react';

const BlogFeaturedItem = (props) => {
    return(
        <div className='blog-item-cnt' key={props.key}>
        <div className='blog-item-description-cnt'>
            <div className='blog-item-category'>{props.category}</div>
            <div className='blog-item-head'>
                {props.head}
                <div className='blog-item-date'>{props.date}</div>
            </div>
            <div className='blog-item-description'>{props.description}</div>
            <div className='blog-item-footer'>
                <a href=''>Read More</a>
            </div>
        </div>
        <div className='blog-item-img'>
            <img src='https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80' />
        </div>
        </div>
    )
}

export default BlogFeaturedItem;