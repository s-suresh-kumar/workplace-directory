import axios from "axios";
const country = 'US';
const numResults = 200;
const QUERYURL = "https://randomuser.me/api/?results=";


export default {
  getRandomUsers: function () {
    return axios.get(QUERYURL + numResults + '&nat' + country);
  }
};