import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import './App.css';
import logo from './logo.svg';
import Route1 from './routes/Route1';
import Route2 from './routes/Route2';
import Route3 from './routes/Route3';

//test comment
const AppRouter = () => (
    <Router>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>YoBlock!</h2>
                <div className="App-header-navigation">
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/about/">About</Link></div>
                    <div><Link to="/users/">Users</Link></div>
                </div>
            </header>
            <Route path="/" exact component={Route1} />;
        <Route path="/about/" component={Route2} />;
        <Route path="/users/" component={Route3} />;
        </div>
    </Router>
);


export default AppRouter;