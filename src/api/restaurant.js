import axios from 'axios';

const searchURL = 'https://restaurant-server.herokuapp.com/api/restaurants';
const detailsURL = 'https://restaurant-server.herokuapp.com/api/details';

export function getRestaurants(searchObj) {
  console.log('in rest api', searchObj);
  return axios.post(searchURL, searchObj);
}

export function getYelpInfo(id) {
  return axios.get(`${detailsURL}/crosswalk/${id}`)
    .then(res => {
      console.log('crosswalk res', res);
      const yelpId = res.data[0].url.split('/')[4];
      console.log('yelpId', yelpId);
      return axios.get(`${detailsURL}/yelp/${yelpId}`);
    }).catch(err => {
      console.log(err);
    });
}

export function getFourInfo(lat, long) {
  return axios.get(`${detailsURL}/foursquare/${lat}/${long}`);
}


// export default function restaurantApi {
//   getRestaurants: (searchObj) => axios.post(searchURL, searchObj),
// };
