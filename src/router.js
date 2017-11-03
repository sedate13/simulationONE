import React from "react";
import { Switch, Route } from "react-router-dom";
import App from './App';

import Bin from './components/Bin'
import ShelfContainer from './components/ShelfContainer';
import BinA from './components/BinA';
import BinB from './components/BinB';
import BinC from './components/BinC';
import BinD from './components/BinD';
import ButtonTest from './components/ButtonTest';

export default (
  <Switch>
    <Route component={ ShelfContainer } exact path="/" />
    <Route component={ BinA} path="/BinA" />
    <Route component={ BinB } path="/BinB" />
    <Route component={ BinC } path="/BinC" />
    <Route component={ BinD } path="/BinD" />
    <Route component ={ButtonTest} path ="/ButtonTest"/>
   
  </Switch>
)