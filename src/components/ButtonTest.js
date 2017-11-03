import React, {Component} from 'react';
import './shelfs.css' ;
import {Link} from 'react-router-dom';
import router from '../router.js';
import Bin from './Bin.js';
import './BinButtons.css';

import axios from 'axios';



export  default function ButtonTest ({id, bin, name, image}) {
    const stupidTest =[];
    return (
    axios.get(`http://localhost:3000/bin`)

    .then (response => {response.data})
    .catch(console.log("IF THIS WORKS IT WILL BE A MIRACLE")))
}



