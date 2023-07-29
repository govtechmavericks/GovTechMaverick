import axios from 'axios'

const axios = require('axios');
const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    'Authorization': 'Bearer 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',
  },
})

export default api;