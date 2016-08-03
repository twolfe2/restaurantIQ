import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';


const ListPage = (props) => (
  <div>
    <ul>
    { props.restaurants.map((restaurant, i) => <ListItem {...restaurant} key={i} />)}
    </ul>
  </div>
 );

ListPage.propTypes = {
  restaurants: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  debugger;
  return {
    restaurants: state.restaurants,
  };
}

export default connect(mapStateToProps)(ListPage);
