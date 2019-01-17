const FHIRClient = require('./src/FHIRClient');

class Bonfhir {
  static createClient(options = {}) {
    const serviceRootURL = options.serviceRootURL;

    const client = new FHIRClient({
      serviceRootURL,
    });

    return client;
  }
}

module.exports = Bonfhir;
