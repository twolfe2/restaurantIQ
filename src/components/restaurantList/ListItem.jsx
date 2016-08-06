import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Rating from 'react-rating';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import { blue300, indigo900, grey100, green300, green500, indigoA200, blue200 } from 'material-ui/styles/colors';

import * as restaurantActions from '../../actions/restaurantActions';


//  to={pathname:'detailsPage' query:props.factual_id}
// this.props.location.query


const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  subtitle: {
    marginBottom: '-15px',
  },
};


const ListItem = (props) => (
  <div>
  <Card>
    <CardTitle
      title={props.name}
      subtitle={
        <div className="row">
          <div className="col-xs-6">
            <Rating
              start={0}
              stop={5}
              initialRate={props.rating}
              empty="fa fa-star-o fa-2x"
              full="fa fa-star fa-2x"
              readonly="true"

            />
          </div>
          <div className="col-xs-6 text-right">
            <Rating
              stop={4}
              initialRate={props.price || 1}
              empty="fa fa-usd grey dollarSize"
              full="fa fa-usd themeColor dollarSize" 
              readonly="true"
            />
          </div>
        </div>
    }
      actAsExpander
      showExpandableButton
      subtitleStyle={styles.subtitle}
    >

    </CardTitle>
    <CardText expandable>
    <div style={styles.wrapper}>
    
      <Chip backgroundColor={props.reservations ? green300 : grey100} style={styles.chip}>
        Reservations
      </Chip>   
   
      
      <Chip backgroundColor={props.options_glutenfree ? green300 : grey100} style={styles.chip}>
        Glutenfree Options
      </Chip>
    
      
      <Chip backgroundColor={props.meal_takeout ? green300 : grey100} style={styles.chip}>
        Takeout
      </Chip>
      
      
      <Chip backgroundColor={props.seating_outdoor ? green300 : grey100} style={styles.chip}>
        Outdoor Seating
      </Chip>
      
      
      <Chip backgroundColor={props.options_healthy ? green300 : grey100} style={styles.chip}>
        Healthy Options
      </Chip> 
      <a href={`tel:${props.tel.match(/\d/g)}`}>
        <Chip
          backgroundColor={props.tel ? green500 : grey100}
          style={styles.chip}
        >
          <Avatar
            backgroundColor={props.tel ? green300 : grey100}
            color="#444"
            icon={<i className="fa fa-phone" />}
          />
            Call
        </Chip>
      </a>
      <a href={props.website} target="_blank" rel="noopener noreferrer">
        <Chip
          backgroundColor={props.website ? blue300 : grey100}
          style={styles.chip}
        >
          <Avatar
            backgroundColor={props.website ? blue200 : grey100}
            color={grey100}
            icon={<i className="fa fa-laptop" />}
          />
            Website
        </Chip>
      </a>
      </div>
    </CardText>
    <CardActions>
      <div className="text-right">
        <RaisedButton
          label="See Details"
          containerElement={
            <Link to={{ pathname: 'detailsPage', query: { id: props.factual_id } }} />}
          onClick={() => props.setRestaurantDetails(props)}
          secondary
        />
      </div>
    </CardActions>
  </Card>
  </div>
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
