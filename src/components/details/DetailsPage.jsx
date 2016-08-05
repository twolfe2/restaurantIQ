import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as restaurantActions from '../../actions/restaurantActions';
// props.getRestaurantDetails(props.params.restaurantId)
    // {props.getFourInfo(props.restaurant.latitude, props.restaurant.longitude)}
class DetailsPage extends Component {
  constructor(props) {
    super(props);
    let fourInfo = '';
  }
  componentDidMount() {
    console.log('query: ', this.props.location.query.id);
    if (!this.props.restaurant ||
        this.props.restaurant.factual_id !== this.props.location.query.id ) {
      this.props.getAllRestaurantDetails(this.props.location.query.id);
    } else  {
      this.props.getFourInfo(this.props.restaurant.latitude, this.props.restaurant.longitude);
      this.props.getYelpInfo(this.props.restaurant.factual_id);
    }
  }
  render() {
    
    if (Object.keys(this.props.fourInfo).length > 1 && this.props.fourInfo.confident) {
      this.fourInfo = <p>{this.props.fourInfo.venues[0].name}</p>;
    } else {
      this.fourInfo = <p>Unable to find FourSquare for this location</p>;
    }
    console.log('yelp info', this.props.yelpInfo.name);
    return (
      <div>
        {this.props.restaurant.factual_id === this.props.location.query.id ?
          <p>{this.props.restaurant.name}</p> :
          <h1>Restaurant loading ...</h1>
          }
        <div>
          {Object.keys(this.props.yelpInfo).length > 1 && this.props.yelpInfo.name === this.props.restaurant.name ? <p>{this.props.yelpInfo.rating}</p> :
            <p>Yelp Info still loading </p>}
        </div>
        <div>
          {this.fourInfo}
        </div>
      </div>
      );
  }
}

// const DetailsPage = (props) => (
//   <div>
    
//     {props.restaurant && props.restaurant.factual_id === props.params.restaurantId ?
//       <p>{props.restaurant.name}</p> :
//       <h1>Restaurant not loaded</h1>
//       }
//     <div>
//       {Object.keys(props.yelpInfo).length > 1 ? <p>{props.yelpInfo.rating}</p> :
//         <p>Yelp Info still loading {props.getYelpInfo(props.restaurant.factual_id)}</p>}
//     </div>
//     <div>
//       {Object.keys(props.fourInfo).length > 1 &&  ? <p>{props.fourInfo.response.venues[0].name}</p> :
//         <p>Four Info still loading {props.getFourInfo(props.restaurant.latitude, props.restaurant.longitude)}</p>}
//     </div>
//   </div>

//   );

DetailsPage.propTypes = {
  restaurant: PropTypes.object.isRequired,
  getAllRestaurantDetails: PropTypes.func.isRequired,
  params: PropTypes.string.isRequired,
  getYelpInfo: PropTypes.func.isRequired,
  getFourInfo: PropTypes.func.isRequired,
  yelpInfo: PropTypes.object.isRequired,
  fourInfo: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    restaurant: state.restaurants.currRestaurant,
    yelpInfo: state.restaurants.yelpInfo,
    fourInfo: state.restaurants.fourInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllRestaurantDetails: id => dispatch(
      restaurantActions.getAllRestaurantDetails(id)
      ),
    getYelpInfo: id => dispatch(
      restaurantActions.getYelpInfo(id)
      ),
    getFourInfo: (lat, long) => dispatch(
      restaurantActions.getFourInfo(lat, long)
      ),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
