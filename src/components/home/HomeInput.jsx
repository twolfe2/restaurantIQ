import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
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
      <label> I want</label>
        <input
          type="text"
          onChange={(e) => this.setState({q: e.target.value})}
          value={this.state.q}
        /> 
        <label>near</label>
        <input
          type="text"
          onChange={(e) => this.setState({locality: e.target.value})}
          value={this.state.locality}
          placeholder="Enter a City"
        />
        <input
          type="text"
          onChange={(e) => this.setState({region: e.target.value})}
          value={this.state.region}
          placeholder="Enter a State"
        />
        <Link onClick={this.restaurantSearch} to="listPage" className="btn btn-primary btn-s">Submit</Link>
      </div>

    );
  }
}

HomeInput.propTypes = {
  getRestaurantList: PropTypes.func.isRequired,
  restaurants: PropTypes.object.isRequired,
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
