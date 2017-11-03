import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import router from '../router';
import ShelfA from './ShelfA';
import ShelfB from './ShelfB';
import ShelfC from './ShelfC';
import ShelfD from './ShelfD';


class ShelfContainer extends Component{
  render(){
    return(
      <div>
        
        <Link to='BinA'>
        <ShelfA />
        </Link>

        <Link to='/BinB'>
          <ShelfB />
        </Link>
        <Link to='/BinC'>
          <ShelfC />
        </Link>
        <Link to='/BinD'>
          <ShelfD />
        </Link>

      </div>
    )
  }
}

export default ShelfContainer;