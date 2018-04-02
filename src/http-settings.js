

import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `http://api.shahbandegan.ir/v1/`,
  headers: {
    Authorization: 'Bearer {token}'
  }
})
