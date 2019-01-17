const FHIRClient = require('./src/FHIRClient');
const HTTPSearcher = require('./src/search/HTTPSearcher');

class Bonfhir {
  static createClient(options = {}) {
    const serviceRootURL = options.serviceRootURL;

    const searcher = new HTTPSearcher({
      serviceRootURL,
    });

    const client = new FHIRClient({
      serviceRootURL,
      searcher,
    });

    return client;
  }
}

module.exports = Bonfhir;
