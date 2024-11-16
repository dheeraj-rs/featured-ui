import React from 'react';
import Image from 'next/image';
import blogData from '../../app/data/blogData.json';

function Blog({ show }) {
  return (
    <article className={`blog  ${show ? 'active' : ''}`}>
      <header>
        <h2 className="h2 article-title">{blogData.articleTitle}</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {blogData.blogPosts.map((post) => (
            <li key={post.id} className="blog-post-item">
              <a href={post.link}>
                <figure className="blog-banner-box">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    loading="lazy"
                    width={500}
                    height={500}
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{post.category}</p>

                    <span className="dot"></span>

                    <time dateTime={post.dateTime}>{post.displayDate}</time>
                  </div>

                  <h3 className="h3 blog-item-title">{post.title}</h3>

                  <p className="blog-text">{post.text}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default Blog;
