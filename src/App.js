import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from '../src/Pages/AboutMe'
import Projects from '../src/Pages/Projects'

function App() {
  return (
    <Router>/
            
            <Switch>

                <Route exact path="/" component={About}/>
                <Route exact path="/projects" component={Projects}/>
            
            </Switch>
            
        </Router>
  );
}

export default App;
