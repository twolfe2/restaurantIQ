import React, { Component } from 'react';
import HomeInput from './HomeInput'
import { Link } from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>RestaurantIQ</h1>
        <HomeInput />
        <Link to="listPage" className="btn btn-primary">See List</Link>
        <Link to="about" className="btn btn-primary">See About</Link>
      </div>
    );
  }
}

export default HomePage;
