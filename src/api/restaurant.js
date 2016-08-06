import axios from 'axios';

const searchURL = 'https://restaurant-server.herokuapp.com/api/restaurants';
const detailsURL = 'https://restaurant-server.herokuapp.com/api/details';

export function getRestaurants(searchObj) {
  console.log('in rest api', searchObj);
  return axios.post(searchURL, searchObj);
}

export function getYelpInfo(id) {
  return axios.get(`${detailsURL}/getYelp/${id}`)
    .then(res => {
      const yelpId = res.data[0].url.split('/')[4];
      return axios.get(`${detailsURL}/yelp/${yelpId}`);
    }).catch(err => {
      console.log(err);
    });
}

export function getCrosswalk(id) {
  return axios.get(`${detailsURL}/crosswalk/${id}`);
}

export function getFourInfo(id) {
  return axios.get(`${detailsURL}/getFoursquare/${id}`)
    .then(res => {
      let fourId;
      res.data.forEach(elem => {
        if ('namespace_id' in elem ) {
          fourId = elem.namespace_id;
        }
      });
      console.log('api four', fourId);
      return axios.get(`${detailsURL}/foursquare/${fourId}`);
    }).catch(err => {
      console.log(err);
    });
}

export function getOneRestaurant(id) {
  return axios.get(`${searchURL}/${id}`);
}

// export default function restaurantApi {
//   getRestaurants: (searchObj) => axios.post(searchURL, searchObj),
// };
