import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import AppBar from 'material-ui/AppBar';
import { browserHistory } from 'react-router';



  // <nav>
  //   <IndexLink to="/" activeClassName="active">Home</IndexLink>
  //   { " | " }
  //   { " | " }
  //   <IndexLink to="/about" activeClassName="active">About</IndexLink>
  // </nav>

const Header = () => (
  <div className='row'>
  <AppBar
    title='RestaurantIQ'
    onTitleTouchTap={() => browserHistory.push('/')} 
  />
</div>
  );

export default Header;
