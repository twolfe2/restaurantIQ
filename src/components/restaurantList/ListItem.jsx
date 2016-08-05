import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as restaurantActions from '../../actions/restaurantActions';

//  to={pathname:'detailsPage' query:props.factual_id}
// this.props.location.query
const ListItem = (props) => (
  <li>
    <Link
      onClick={() => props.setRestaurantDetails(props)}
      to={`/detailsPage/${props.factual_id}`}
    >
      <h1>{props.name}</h1>
    </Link>
  </li>

  );


ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  factual_id: PropTypes.string.isRequired,
  setRestaurantDetails: PropTypes.func.isRequired,
};

function mapStateToProps() {
  return {

  };
}
function mapDistpatchToProps(dispatch) {
  return {
    setRestaurantDetails: restaurant => dispatch(
      restaurantActions.setRestaurantDetails(restaurant)
      ),
  };
}


export default connect(mapStateToProps, mapDistpatchToProps)(ListItem);
