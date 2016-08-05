import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as restaurantActions from '../../actions/restaurantActions';
import inputActions from '../../actions/inputActions';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const labelStyle = {
  marginRight: '10px'
};

const HomeInput = (props) => (
  <div className='row'>
    <div className='col-md-12 col-lg-9 col-lg-offset-2'> 
      <div className='col-xs-12 col-lg-4 col-md-4'>
        <label style={labelStyle}>I want</label>
        <TextField
          floatingLabelText="Enter restaurant name or cuisine"
          onChange={(e) => props.updateQ(e.target.value)}
          value={props.searchObj.q}
        />
      </div>
      <div className='col-xs-12 col-lg-4 col-md-4'>
      <label style={labelStyle}>near</label>
      <TextField
        floatingLabelText="Enter a City"
        onChange={(e) => props.updateLocality(e.target.value)}
        value={props.searchObj.locality}
      />
      </div>
      <div className='col-xs-12 col-lg-1 col-md-3'>
        <TextField
          floatingLabelText="Enter a State"
          onChange={(e) => props.updateRegion(e.target.value)}
          value={props.searchObj.region}
       />
      </div>
      <div className='col-xs-12 col-md-12 col-lg-11'>
      <RaisedButton
        label="Search"
        primary={true}
        fullWidth={true}
        containerElement={<Link to="listPage" />}
        onClick={() => props.getRestaurantList(props.searchObj)}
      >
      </RaisedButton>
      </div>
    </div>
  </div>

);

HomeInput.propTypes = {
  getRestaurantList: PropTypes.func.isRequired,
  updateQ: PropTypes.func.isRequired,
  updateLocality: PropTypes.func.isRequired,
  updateRegion: PropTypes.func.isRequired,
  restaurants: PropTypes.object.isRequired,
  searchObj: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants,
    searchObj: state.input,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRestaurantList: searchObj => dispatch(restaurantActions.getRestaurantList(searchObj)),
    updateLocality: locality => dispatch(inputActions.updateLocality(locality)),
    updateRegion: region => dispatch(inputActions.updateRegion(region)),
    updateQ: q => dispatch(inputActions.updateQ(q)),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeInput);
