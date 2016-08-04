import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as restaurantActions from '../../actions/restaurantActions';
import inputActions from '../../actions/inputActions';

const HomeInput = (props) => (
  <div>
    <label> I want</label>
    <input
      type="text"
      onChange={(e) => props.updateQ(e.target.value)}
      value={props.searchObj.q}
    />
    <label>near</label>
    <input
      type="text"
      onChange={(e) => props.updateLocality(e.target.value)}
      value={props.searchObj.locality}
      placeholder="Enter a City"
    />
    <input
      type="text"
      onChange={(e) => props.updateRegion(e.target.value)}
      value={props.searchObj.region}
      placeholder="Enter a State"
    />
    <Link
      onClick={() => props.getRestaurantList(props.searchObj)}
      to="listPage"
      className="btn btn-primary btn-s"
    >
        Submit
    </Link>
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
