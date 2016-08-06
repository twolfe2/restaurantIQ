import React, { Component } from 'react';
import HomeInput from './HomeInput';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import customTheme from '../theme';

import Divider from 'material-ui/Divider';



class HomePage extends Component {
 
  render() {
     const paperStyle = {
      marginTop: '20px',
     
}
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(customTheme)}>
        <div>
       <Paper style={paperStyle}  zDepth={4} >
        <br/>
          <div className='col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4 text-center'>
            <h1>RestaurantIQ</h1>
            <h5>One search, endless restaurant intel</h5>
            <Divider />
          </div>
         
            <HomeInput />
          </Paper>
          </div>
        </MuiThemeProvider>
    );
  }
}

export default HomePage;
