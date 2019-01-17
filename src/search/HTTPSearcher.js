const axios = require('axios');

class HTTPSearcher {
  constructor(options = {}) {
    this._serviceRootURL = options.serviceRootURL || null;

    this.http = axios.create({
      baseURL: options.serviceRootURL,
    });
  }

  get serviceRootURL() { return this._serviceRootURL; }

  async find(options = {}) {
    const type = options.type;
    const parameters = options.parameters;

    const response = await this.http.request({
      method: 'GET',
      url: `/${type}`,
      params: parameters,
      responseType: 'json',
    });

    return response.data;
  }
}

module.exports = HTTPSearcher;
