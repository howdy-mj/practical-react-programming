import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Photo from './Photo';
import Rooms from './Rooms';

export default function App() {
  return (
    <BrowserRouter>
      <div style={{padding: 20, border: '5px bolid gray'}}>
        <Link to="/">홈</Link>
        <br />
        <Link to="/photo">사진</Link>
        <br />
        <Link to="/rooms">방 소개</Link>
        <br />
        <Route exact path="/" component={Home} />
        <Route path="/photo" component={Photo} />
        <Route path="/rooms" component={Rooms} />
      </div>
    </BrowserRouter>
  )
}