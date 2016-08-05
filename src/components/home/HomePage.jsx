import React, { Component } from 'react';
import HomeInput from './HomeInput';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class HomePage extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div className='col-md-4 col-md-offset-4 col-lg-3 col-lg-offset-5 text-center'>
            <h1>RestaurantIQ</h1>
            <h4>One search, endless restaurant intel</h4>
          </div>
          <HomeInput />
          </div>
        </MuiThemeProvider>
    );
  }
}

export default HomePage;
