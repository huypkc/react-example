import axios from 'axios';
import { GIPHY } from '../constants/GIPHY';
import Giphy from '../models/Giphy';
export default class GiphyService {
  static getTrendingGifs() {
    return axios.get(GIPHY.API, {
      params: {
        api_key: GIPHY.API_KEY,
        limit: 20,
        rating: 'G'
      }
    })
    .then((res) => {
      try {
        return res.data.data.map((gif: any) => Giphy.build(gif));
      } catch (e) {
        return [];
      }
    });
  }
}
