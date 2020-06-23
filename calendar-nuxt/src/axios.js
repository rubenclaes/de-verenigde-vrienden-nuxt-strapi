// axios
import axios from 'axios';

const baseURL = process.env.VUE_APP_API_URL;

// Sett withCredentials on $axios before creating instance
axios.defaults.withCredentials = true;

export default axios.create({
  baseURL,

  // You can add your headers here
});
