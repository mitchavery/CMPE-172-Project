import React, {Component} from 'react';
import axios from 'axios';

export default class Search2 extends Component {

    render() {
      return (
            <form onSubmit = {this.props.getInfo}>
                <input type = "text" name = "ID" placholder = "Name.."/>
                <button>Search</button>
            </form>
      ); 
    }
  
  }




