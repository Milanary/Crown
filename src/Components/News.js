import React from 'react';
import '../Styles/ComponentStyles/News.css';

const blogPosts = [
  {
    id: 1,
    date: 'June 4, 2020',
   
    title: 'Hero dog protected human',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, amet tempor id',
    image: 'https://images.pexels.com/photos/2380263/pexels-photo-2380263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categoryColor: 'green',
  },
  {
    id: 2,
    date: 'June 6, 2020',
   
    title: '2020 quarantine style at home',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, amet tempor id',
    image: 'https://images.pexels.com/photos/5726706/pexels-photo-5726706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categoryColor: 'teal',
  },
  {
    id: 3,
    date: 'July 28, 2020',
   
    title: 'Here is what is happening in Belarus',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, amet tempor id',
    image: 'https://images.pexels.com/photos/6860408/pexels-photo-6860408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categoryColor: 'navy',
  },
];

const News = () => {
  return (
    <section className="blog-news">
      <h2>Blog and News</h2>
      <div className="blog-cards">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <div className="blog-header">
                <p className="blog-date">{post.date}</p>
                {/* <span className="blog-category" style={{ backgroundColor: post.categoryColor }}>
                  {post.category}
                </span> */}
              </div>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <div className="read-more">
                
                <a href="#learn-more" className="learn-more-button">Learn More →</a>
                <span>&rarr;</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;