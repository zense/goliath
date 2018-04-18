import React from 'react';
import { BrowserRouter, Route,  Switch} from 'react-router-dom';
import Home from './Home';
export default ()=>(
  <BrowserRouter>
    <Switch>
    //@override the component
      <Route path='/' exact component={Home}/>// home is the path to the graphql query!
    </Switch>
  </BrowserRouter>
);
