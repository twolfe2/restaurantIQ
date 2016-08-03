import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';


const ListPage = (props) => (
  <div>
    {props.restaurants.isLoading ?
      <p>Loading restaurants......</p> :
      <ul>
      { props.restaurants.restaurantList.map((restaurant, i) =>
        <ListItem {...restaurant} key={i} />
      )}
      </ul>
    }
  </div>
 );

ListPage.propTypes = {
  restaurants: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  // debugger;
  return {
    restaurants: state.restaurants,
  };
}

export default connect(mapStateToProps)(ListPage);
