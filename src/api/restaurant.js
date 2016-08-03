import axios from 'axios';

const searchURL = 'https://restaurant-server.herokuapp.com/api/restaurants';


export function getRestaurants(searchObj) {
  console.log('in rest api', searchObj);
  return axios.post(searchURL, searchObj);
}


