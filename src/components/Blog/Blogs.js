import React from 'react';
import BlogFeaturedItem from './BlogFeaturedItem';
import BlogFeaturedItems from './BlogFeaturedItems';

const Blogs = () => {
    const blogItem = [
        {
            id: 'h541GXAii19th',
            head: 'New Head',
            date: 'December 15, 2022',
            category: 'Docker',
            description: 'Master Docker with our hands-on learning series. From containerization fundamentals to advanced use cases, become a Docker pro in no time.'
        }
    ];
     // this would be fetched from firebase
    return (
        <div className='blog-main'>
            <div className='blog-head'>
                Blogs
            </div>
            <div className='blog-list'>
                {blogItem.map(content => {
                    return(
                        <BlogFeaturedItem key={content.id} description={content.description} date={content.date} category={content.category} head={content.head} image={content.image} />
                    )
                })}
                <div className='blog-featured-items'>
                    <BlogFeaturedItems />
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Blogs;