import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as restaurantActions from '../../actions/restaurantActions';
import inputActions from '../../actions/inputActions';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';


const labelStyle = {
  marginRight: '10px',
};
const loader = {
  bottom: '7px',
}
const paperStyle = {
  maxHeight: 360,
  maxWidth: 400,
  margin: 10,
  paddingBottom: 15,
  textAlign: 'center',
  display: 'inline-block',
};
const locationStyle = {
    position: 'absolute',
    bottom: 10,
    right: 29,
}

const HomeInput = (props) => (
  <div className='row text-center'>
    <div className='col-md-12 col-lg-10 col-lg-offset-1'>
    <Paper style={paperStyle} zDepth={1}>
      <div className='col-xs-12'>
        <h3 style={labelStyle}>I want</h3>
      </div>
      <div className='col-xs-12'>
        <TextField
          floatingLabelText="Enter restaurant name or cuisine"
          onChange={(e) => props.updateQ(e.target.value)}
          value={props.searchObj.q}
        />
      </div>
      <div className='col-xs-12'>
        <h3 style={labelStyle}>near</h3>
        <div>
          {!props.currLocation ?
            <AutoComplete
              floatingLabelText="Enter a City and State"
              dataSource={props.locations}
              onUpdateInput={(location) => props.updateLocality(location)}
              onNewRequest={(location) => props.updateLocality(location)}
              value={props.searchObj.locality}
              style={{ color: 'red' }}
            /> :
            <AutoComplete
              floatingLabelText="My Current Location"
              dataSource={props.locations}
              onUpdateInput={(location) => props.updateLocality(location)}
              onNewRequest={(location) => props.updateLocality(location)}
              value={props.searchObj.locality}
            />
          }
        </div>
      </div>
      
      <div className='col-xs-12'>
      <br />
      {props.isLoading ?
        <RaisedButton
          onClick={() => props.getUserLocation()}
          icon={ <CircularProgress size={0.35} style={loader} />}
          style={{height:36}}
        />
        :
        <RaisedButton
          onClick={() => props.getUserLocation()} 
          icon={<i className="fa fa-location-arrow" aria-hidden="true" />} 
        />
      }
      <span style={{marginRight:10}}></span>
        <RaisedButton
          label="Search"
          secondary
          containerElement={<Link to="listPage" />}
          onClick={() => props.getRestaurantList(props.searchObj)}
        />
        

      </div>
    </Paper>
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
  locations: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants,
    searchObj: state.input,
    locations: state.restaurants.locations,
    currLocation: state.input.currLocation,
    isLoading: state.input.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRestaurantList: searchObj => dispatch(restaurantActions.getRestaurantList(searchObj)),
    updateLocality: locality => dispatch(inputActions.updateLocality(locality)),
    updateRegion: region => dispatch(inputActions.updateRegion(region)),
    updateQ: q => dispatch(inputActions.updateQ(q)),
    getUserLocation: () => dispatch(inputActions.getUserLocation()),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeInput);
