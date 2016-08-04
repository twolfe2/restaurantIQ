import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as restaurantActions from '../../actions/restaurantActions';


const ListItem = (props) => (
  <li>
    <Link
      onClick={() => props.getRestaurantDetails(props)}
      to="detailsPage"
      params={props.factual_id}
    >
      <h1>{props.name}</h1>
    </Link>
  </li>

  );


ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  factual_id: PropTypes.string.isRequired,
  getRestaurantDetails: PropTypes.func.isRequired,
};

function mapDistpatchToProps(dispatch) {
  return {
    getRestaurantDetails: restaurant => dispatch(
      restaurantActions.getRestaurantDetails(restaurant)
      ),
  };
}


export default connect(null, mapDistpatchToProps)(ListItem);
