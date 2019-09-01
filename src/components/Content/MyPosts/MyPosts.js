import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props) => {
    
    let postArraySecond = props.huj.map(p => <Post message={p.postMess} likeCount={p.postLike} />);
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
} 

   return (<div>
        <textarea ref={newPostElement} />
        <button onClick={addPost}>Post</button>
        <button>UnPost</button>
        {postArraySecond}
    </div>
    );
}

export default MyPosts