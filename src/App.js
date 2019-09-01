import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from "react-router-dom";
import Friends from './components/Content/Friends/Friends';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='grid'>
          <Header />
          <Sidebar />
          <div className='content-wrapper'>
            <Route path='/Content' render={ ()=> <Content hujj={props.appState.profilePage} addPost={props.addPost} />} />
            <Route path='/dialogs' render={ ()=> <Dialogs mmm={props.appState.messagePage}  
            addMessage={props.addMessage}
            appdateNewMessageText={props.appdateNewMessageText}/>}/>
            <Route path='/Friends' component={Friends} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
