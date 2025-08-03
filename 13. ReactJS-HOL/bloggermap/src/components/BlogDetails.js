import React from 'react';

function BlogDetails({ blogs }) {
  return (
    <div className="box">
      <h1>Blog Details</h1>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.author}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
