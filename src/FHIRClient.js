const HTTPSearcher = require('./search/HTTPSearcher');

class FHIRClient {
  constructor(options = {}) {
    this._serviceRootURL = options.serviceRootURL || null;

    this._searcher = options.searcher || new HTTPSearcher({
      serviceRootURL: this.serviceRootURL,
    });
  }

  get searcher() { return this._searcher; }
  get serviceRootURL() { return this._serviceRootURL; }

  async search(options = {}) {
    return this.searcher.find(options);
  }
}

module.exports = FHIRClient;
