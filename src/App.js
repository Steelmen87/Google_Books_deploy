import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import NoMatch from "./pages/NoMatch";
import "./App.css";
import SearchFunction from "./pages/SearchFunction";
import Book from "./components/Book/Book";

function App() {
    return (
        <Router>
            <div>
                <Header/>
                <Route exact path="/" component={SearchFunction}/>
                <Route exact path="/search" component={SearchFunction}/>
                <Route exact path="/noMatch" component={NoMatch}/>
                <Route exact path="/book" component={Book}/>
            </div>
        </Router>

    )
};

export default App;