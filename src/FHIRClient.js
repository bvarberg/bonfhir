class FHIRClient {
  constructor(options = {}) {
    this._serviceRootURL = options.serviceRootURL || null;
    this._searcher = options.searcher;
  }

  get searcher() { return this._searcher; }
  get serviceRootURL() { return this._serviceRootURL; }

  async search(options = {}) {
    return this.searcher.find(options);
  }
}

module.exports = FHIRClient;
