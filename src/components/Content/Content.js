import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import s from './Content.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Content = (props) => {

  return (<div className={s.content}>
    <ProfileInfo/>
    <MyPosts huj={props.hujj.posts} addPost={props.addPost} newPostText={props.hujj.postTextHuj} />
    
  </div>);
}


export default Content;
