import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes,  Route, BrowserRouter } from "react-router-dom";

import Auth from './auth/auth';
import SignUp from './auth/SignUp';
import List from './page/List';
import Chat from './chat/Chat';
import Profile from './page/Profile';
import LogIn from './auth/LogIn';

function App() {
  return (
    <div className="App">
        <div className='Contents-wrapper'>
        <BrowserRouter>
          <Routes>
            <Route path='LogIn' element={<LogIn />} />
            <Route path='SignUp' element={<SignUp />} />
            <Route path='Auth' element={<Auth />} />
            <Route path='Profile' element={<Profile />} />
            <Route path='Chat' element={<Chat />} />
            <Route path='/' element={<List />} />
          </Routes>
        </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
