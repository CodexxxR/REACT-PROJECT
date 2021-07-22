import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
const { id } = useParams();
const { data: blog, error, isPending } = useFetch('https://blogreactserver.herokuapp.com/blogs/'+ id);
const history = useHistory();


const handleClick = () => {

    fetch('https://blogreactserver.herokuapp.com/blogs/' + blog._id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }


  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;