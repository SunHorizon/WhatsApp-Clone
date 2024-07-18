import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className='app_body'>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route exact path="/" />
            <Route exact path="/rooms/:roomId" element={<Chat />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
