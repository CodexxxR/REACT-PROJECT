import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {
    // const blogs = props.blogs;
    // const title = props.title;
    // console.log(blogs);

    return (
      <div className="blog-list">
        <h2>{ title }</h2>
        {blogs.map(blog => (
          <div className="blog-preview" key={blog._id} >
                <Link to={`/blogs/${blog._id}`}>
                 <h2>{ blog.title }</h2>
                 <p>Written by { blog.author }</p>
                </Link>
          </div>
        ))}
      </div>
    );
  }
   
  export default BlogList;