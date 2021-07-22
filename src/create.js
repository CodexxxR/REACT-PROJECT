
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body,author  };
        // console.log(JSON.stringify(blog));

        setIsPending(true);

    
      // // console.log(blog);
      // axios({
      //   method: 'post',
      //   url: 'http://localhost:3000/blogs',
      //   data: JSON.stringify(blog),
      //   headers: { 
      //     'Content-Type' : 'application/json' 
      // }
      // })
      // .then(() => {
      //   console.log('new blog added');
      //   setIsPending(false);
      //   history.push('/');
      // })
        console.log(JSON.stringify(blog))
    fetch('http://localhost:3000/blogs', {
      method: 'POST',
      body: JSON.stringify(blog),
      headers: {
        "Content-Type": 'application/json'
      }
    }).then(() => {
      console.log('new blog added');
      setIsPending(false);
      history.push('/');
    })
}

    return (
      <div className="create">
        <h2>Add a New Blog</h2>
        <form  onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <input 
          type="text" 
          required 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {/* <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select> */}
        { !isPending && <button>Add Blog</button> }
        { isPending && <button disabled>Adding...</button> }

      </form>

      </div>
    );
}
   
  export default Create;