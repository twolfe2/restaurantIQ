import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import CircularProgress from 'material-ui/CircularProgress';
import ListItem from './ListItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
    const center = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    };
    return (
      <MuiThemeProvider>
      <div>
      {this.props.restaurants.isLoading || !this.props.restaurants.restaurantList ?
        <div style={center}>
          <CircularProgress size={2} />
          <p>Loading restaurants...</p>
        </div> :
        <ul>
        { this.props.restaurants.restaurantList.map((restaurant, i) =>
          <ListItem {...restaurant} key={i} />
        )}
        </ul>
      }
      </div>
      </MuiThemeProvider>

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
