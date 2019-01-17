const FHIRClient = require('./src/FHIRClient');

class Bonfhir {
  static createClient() {
    const client = new FHIRClient();

    return client;
  }
}

module.exports = Bonfhir;
