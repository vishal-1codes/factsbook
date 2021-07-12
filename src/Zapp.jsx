import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Capp from './Capp';
import Wapp from './Wapp';
import Error from './Error';
import Fapp from './Fapp';
import Admin from './Admin';

import Delete from './Delete';

import Update from './Update';
const Zapp=()=>{

    return(
        <>
       <Switch>
       <Route exact path="/factsbook"  component={Capp}/>
       <Route exact path="/"  component={Wapp}/>
       <Route exact path="/addfacts" component={Fapp}/>
       <Route exact path="/deletefacts" component={Delete}/>
       <Route exact path="/updatefacts" component={Update}/>
       <Route exact path="/factsbook-admin" component={Admin}/>
       <Route component={Error}/>
       </Switch>
      </>
    );
}

export default Zapp;