import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as restaurantActions from '../../actions/restaurantActions';

class HomeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locality: '',
      region: '',
      q: '',
    };
    this.restaurantSearch = this.restaurantSearch.bind(this);
  }
  restaurantSearch() {
    // console.log(this.state.locality, this.state.q, this.state.region);
    const searchObj = {
      locality: this.state.locality,
      region: this.state.region,
      q: this.state.q,
    };
    console.log(searchObj);
    this.props.getRestaurantList(searchObj);
  }


  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.setState({q: e.target.value})}
          value={this.state.q}
        />
        <input
          type="text"
          onChange={(e) => this.setState({locality: e.target.value})}
          value={this.state.locality}
        />
        <input
          type="text"
          onChange={(e) => this.setState({region: e.target.value})}
          value={this.state.region}
        />
        <button onClick={this.restaurantSearch}>Submit</button>
      </div>

    );
  }
}

HomeInput.propTypes = {
  getRestaurantList: PropTypes.func.isRequired,
  restaurants: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRestaurantList: searchObj => dispatch(restaurantActions.getRestaurantList(searchObj)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeInput);
