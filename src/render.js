import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import {BrowserRouter} from 'react-router-dom';
import {addPost, addMessage, appdateNewMessageText} from './redux/state';

export let rerenderEntireTree=(state)=>{

ReactDOM.render(
<BrowserRouter>
<App appState={state} addPost={addPost} addMessage={addMessage} appdateNewMessageText={appdateNewMessageText}/>
</BrowserRouter>, document.getElementById('root'));
}

