import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import logo from './media/logo.svg';
import Home from './routes/Home/';
import Route2 from './routes/Route2';
import Route3 from './routes/Route3';
//import TiHomeOutline from 'react-icons/lib/ti/home-outline';

//test comment
const AppRouter = () => (
    <Router>
        <div className="app">
               <div className="app-header">
                        <img src={logo} className="app-logo" alt="logo" />
                        <h4>YoBlock!</h4>
                        <div>
                            <button><a href="/">Home</a></button>
                            <button><a href="/about/">About</a></button>
                            <button><a href="/users/">Users</a></button>
                        </div>
                        
                </div>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={Route2} />
        <Route path="/users/" component={Route3} />
        </div>
    </Router>
);


export default AppRouter;