import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Rating from 'react-rating';
import { browserHistory } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import { blue300, indigo900, grey100, green300, green500, red500, indigoA200, blue200 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import customTheme from '../theme';
import * as restaurantActions from '../../actions/restaurantActions';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
// props.getRestaurantDetails(props.params.restaurantId)
    // {props.getFourInfo(props.restaurant.latitude, props.restaurant.longitude)}
class DetailsPage extends Component {
  constructor(props) {
    super(props);
    if(Object.keys(this.props.restaurant).length  < 2) {
        browserHistory.push('/');

    }
    this.props.getCrosswalk(this.props.location.query.id);
    let flag = true;
    if (flag) {
      this.props.getYelpInfo(this.props.location.query.id);
      this.props.getFourInfo(this.props.location.query.id);
      flag = false;
    }
  }
  render() {
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
    const position = [this.props.restaurant.latitude, this.props.restaurant.longitude];
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(customTheme)}>
        <div>
        <br/>
         <FlatButton
          icon={<i className="fa fa-chevron-left fa-2x" />}
          style={{right: 25}}
          onClick={() => browserHistory.push('/listPage')}
          >

          </FlatButton>
          <br/>
        <br/>
          <Card>
            <CardTitle
              title={this.props.restaurant.name}
              subtitle={
                <div className="row">
                  <div className="col-xs-6">
                    <Rating
                      start={0}
                      stop={5}
                      initialRate={this.props.restaurant.rating}
                      empty="fa fa-star-o fa-2x"
                      full="fa fa-star fa-2x"
                      readonly="true"

                    />
                  </div>
                  <div className="col-xs-6 text-right">
                    <Rating
                      stop={4}
                      initialRate={this.props.restaurant.price || 1}
                      empty="fa fa-usd grey dollarSize"
                      full="fa fa-usd themeColor dollarSize"
                      readonly="true"
                    />
                  </div>
                </div>
            }
              subtitleStyle={styles.subtitle}
            />
                <CardMedia
                  overlay={<CardTitle title={this.props.restaurant.name} subtitle={this.props.restaurant.address} />}
                >
                <Map center={position} zoom={12}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={position}>
              <Popup>
                <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
              </Popup>
            </Marker>
          </Map>
                </CardMedia>
            <CardText>
            <div style={styles.wrapper}>
            
              <Chip backgroundColor={this.props.restaurant.reservations ? green300 : grey100} style={styles.chip}>
                Reservations
              </Chip>   
           
              
              <Chip backgroundColor={this.props.restaurant.options_glutenfree ? green300 : grey100} style={styles.chip}>
                Glutenfree Options
              </Chip>
            
              
              <Chip backgroundColor={this.props.restaurant.meal_takeout ? green300 : grey100} style={styles.chip}>
                Takeout
              </Chip>
              
              
              <Chip backgroundColor={this.props.restaurant.seating_outdoor ? green300 : grey100} style={styles.chip}>
                Outdoor Seating
              </Chip>
              
              
              <Chip backgroundColor={this.props.restaurant.options_healthy ? green300 : grey100} style={styles.chip}>
                Healthy Options
              </Chip> 
              <a href={`tel:${this.props.restaurant.tel.match(/\d/g)}`}>
                <Chip
                  backgroundColor={this.props.restaurant.tel ? green500 : grey100}
                  style={styles.chip}
                >
                  <Avatar
                    backgroundColor={this.props.restaurant.tel ? green300 : grey100}
                    color="#444"
                    icon={<i className="fa fa-phone" />}
                  />
                    Call
                </Chip>
              </a>
              <br/>
              <a href={this.props.restaurant.website} target="_blank" rel="noopener noreferrer">
                <Chip
                  backgroundColor={this.props.restaurant.website ? blue300 : grey100}
                  style={styles.chip}
                >
                  <Avatar
                    backgroundColor={this.props.restaurant.website ? blue200 : grey100}
                    color={grey100}
                    icon={<i className="fa fa-laptop" />}
                  />
                    Website
                </Chip>
              </a>   
              { this.props.crosswalk.length > 1 ? this.props.crosswalk.map(place => {
                return (
                  place.url ?
                    <a href={place.url} target="_blank" rel="noopener noreferrer">
                      <Chip backgroundColor={blue300} style={styles.chip}>
                        {place.namespace}
                      </Chip>
                    </a> :
                    null
                    
                );
              })
              : <p>Loading</p>
        }
            </div>
            </CardText>
        
          </Card>
          <br/>
          <Card>
            <CardHeader
              title={`Yelp info for ${this.props.restaurant.name}`}
              actAsExpander
              showExpandableButton
            />
            <CardText expandable>
              Snippet: {this.props.yelpInfo.snippet_text}
            </CardText>
          </Card>
          <br/>
          {Object.keys(this.props.fourInfo).length === 0 ?
            <Card>
              <CardHeader
                title={`No Foursquare information available for ${this.props.restaurant.name}`}
              />
            </Card>
            :
            <Card>
              <CardHeader
                title={`Foursquare info for ${this.props.restaurant.name}`}
                actAsExpander
                showExpandableButton
              />
              <CardMedia
                overlay={<CardTitle title={this.props.fourInfo.name} />}
                expandable
              >
                <img src={`${this.props.fourInfo.photos.groups[1].items[0].prefix}300x300${this.props.fourInfo.photos.groups[1].items[0].suffix}`} />
              </CardMedia>
              <CardText expandable>
                {this.props.fourInfo.stats.checkinsCount} Foursquare Checkins
              </CardText>
              <CardActions>
              </CardActions>
          </Card>
        }
      </div>
    </MuiThemeProvider>
    );
  }
}


DetailsPage.propTypes = {
  restaurant: PropTypes.object.isRequired,
  params: PropTypes.string.isRequired,
  crosswalk: PropTypes.object.isRequired,
  getCrosswalk: PropTypes.func.getCrosswalk,
  getYelpInfo: PropTypes.func.isRequired,
  getFourInfo: PropTypes.func.isRequired,
  // getYelpInfo: PropTypes.func.isRequired,
  // getFourInfo: PropTypes.func.isRequired,
  // yelpInfo: PropTypes.object.isRequired,
  // fourInfo: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    restaurant: state.restaurants.currRestaurant,
    crosswalk: state.restaurants.crosswalk,
    yelpInfo: state.restaurants.yelpInfo,
    fourInfo: state.restaurants.fourInfo,
    // fourInfo: state.restaurants.fourInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCrosswalk: id => dispatch(
      restaurantActions.getCrosswalk(id)
      ),
    getYelpInfo: id => dispatch(
      restaurantActions.getYelpInfo(id)
      ),
    // getYelpInfo: id => dispatch(
    //   restaurantActions.getYelpInfo(id)
    //   ),
    getFourInfo: (id) => dispatch(
      restaurantActions.getFourInfo(id)
      ),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
