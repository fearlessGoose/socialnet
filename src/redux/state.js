import { rerenderEntireTree } from './../render';

let state = {
  
  profilePage: {
    posts: [
      { id: 1, postMess: 'Привет? ', postLike: '33' },
      { id: 2, postMess: 'Пока', postLike: '22' },
      { id: 3, postMess: 'иввиыв', postLike: '11' },
      { id: 4, postMess: 'Привет', postLike: '33' },
      { id: 5, postMess: 'Пока', postLike: '22' },
      { id: 6, postMess: 'Там вдали за рекой', postLike: '11' },
    ],

    postTextHuj: 'it'
  },
  messagePage: {
    dialogs:[
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Viktor' },
    ],
    messages: [
      { message: 'cxbxbdf' },
      { message: 'La la la la' },
      { message: 'fdbhbgsd' },
      { message: 'tjgcnvfn' },

    ],
    newMessageText: 'ГусИ га га га'
  }


}
window.state= state;
export let addPost = (postMessage) => {
  let newPost = {
    id: 7,
    postMess: postMessage,
    postLike: 55
  };
  state.profilePage.posts.unshift(newPost);
  rerenderEntireTree(state);
}

export let addMessage=()=>{
  let newMessage={
    message: state.messagePage.newMessageText,
  }
  state.messagePage.messages.unshift(newMessage)
  rerenderEntireTree(state);
  state.messagePage.newMessageText=''
}

export let appdateNewMessageText = (newText)=>{
  state.messagePage.newMessageText=newText;
  rerenderEntireTree(state);

}


// export let addLetter = (pressLetter) => {



//   state.profilePage.postTextHuj = pressLetter;
//   rerenderEntireTree(state);
// }



export default state