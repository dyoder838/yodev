import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import About from '../src/Pages/AboutMe'
import Projects from '../src/Pages/Projects'
import Footer from '../src/Components/Footer'
import '../src/App.css'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  footercontainer: {
    position: 'fixed', 
    bottom: 0,
    
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    marginTop: 50, 
  },
  pagecontainer:{
    marginBottom: 55,
  }

});

function App() {

  const classes = useStyles();

  return (
    <Router>
            
      <Switch>
        <Grid className={classes.pagecontainer} container>
          <Grid item xs={12}>
            <Route exact path="/" component={About}/>
            <Route exact path="/projects" component={Projects}/>
          </Grid>
        </Grid> 
      </Switch>
        <Grid className={classes.footercontainer} container
        direction="row"
        justify="center"
        alignItems="flex-end"
        >
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
    </Router>

 
  );
}

export default App;
