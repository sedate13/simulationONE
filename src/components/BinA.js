import React, {Component} from 'react';
import './shelfs.css' ;
import {Link} from 'react-router-dom';
import router from '../router.js';
import Bin from './Bin.js';
import './BinButtons.css';

class BinA extends Component{
  render(){
    return(
      <div > 
         <Link to="ButtonTest"> <button className ='container'> Bin 1</button> </Link>
          <button className ='container'> Bin 2</button>
          <button className ='container'> Bin 3</button>
          <button className ='container'> Bin 4</button>
          <button className ='container'> Bin 5</button>
        

          
        </div>
    )
}
};
export default BinA