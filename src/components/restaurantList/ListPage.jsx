import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import ListItem from './ListItem';
import * as restaurantActions from '../../actions/restaurantActions';

class ListPage extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    if (!this.props.restaurants.restaurantList && !this.props.restaurants.isLoading) {
      browserHistory.push('/');
    }
  }
  render() {
    return (
      <div>
      {this.props.restaurants.isLoading || !this.props.restaurants.restaurantList ? <p>Loading restaurants......</p> :
        <ul>
        { this.props.restaurants.restaurantList.map((restaurant, i) =>
          <ListItem {...restaurant} key={i} />
        )}
        </ul>
      }
      </div>

      );
  }



}


// const ListPage = (props) => (
//   <div>
//     {props.restaurants.isLoading ? <p>Loading restaurants......</p> : ''}
//     {!props.restaurants.restaurantList && !this.props.restaurant.isLoading ? browserHistory.push('/') :
//       <ul>
//       { props.restaurants.restaurantList.map((restaurant, i) =>
//         <ListItem {...restaurant} key={i} />
//       )}
//       </ul>
//   }
//   </div>
//  );

ListPage.propTypes = {
  restaurants: PropTypes.object.isRequired,
  getRestaurantDetails: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  // debugger;
  return {
    restaurants: state.restaurants,
  };
}


function mapDistpatchToProps(dispatch) {
  return {
    getRestaurantDetails: restaurant => dispatch(
      restaurantActions.getRestaurantDetails(restaurant)
      ),
  };
}

export default connect(mapStateToProps, mapDistpatchToProps)(ListPage);
