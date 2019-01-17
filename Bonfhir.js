const verror = require('verror');

class Bonfhir {
  static createClient(options) {
    const version = options.version || 'unspecified';

    switch (version) {
      case '1.0.2':
        return {
          fhirVersion: '1.0.2',
        };
        break;
      default:
        throw new verror.VError(`unable to provide a client supporting version "${version}"`);
    }
  }
}

module.exports = Bonfhir;
