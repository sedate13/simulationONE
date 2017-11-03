import React, { Component } from 'react';
import Bin from './components/Bin';
import './App.css';
import ShelfContainer from './components/ShelfContainer';
import router from './router';


export default function App ({children}) {
 
    return (
      
      <div>
       <div className ="app">

         <Bin />
        {router}
       
      </div>

      <div className="shelfContainer">
        {/* <ShelfContainer/> */}
        </div>
      </div>
    );
  }


