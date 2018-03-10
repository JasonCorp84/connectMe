import React, { Component } from 'react';
import axios from 'axios';

class ApiHandler extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            results: ''
        }
    }
   
    componentDidMount() {
        axios.get('http://localhost:3001/').then(res => console.log(res)).catch(err => console.log(err));
    } 
    
    render() {     
        return(
            <h1>works</h1>
        )
    }
}


export default ApiHandler;