class FHIRClient {
  constructor(options = {}) {
    this._searcher = options.searcher;
  }

  get searcher() { return this._searcher }

  async search(options = {}) {
    this.searcher.find(options);
  }
}

module.exports = FHIRClient;
