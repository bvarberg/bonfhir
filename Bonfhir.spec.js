const Bonfhir = require('./Bonfhir');

describe('Bonfhir', () => {
  it('can create a client for interacting with FHIR version 1.0.2', () => {
    const client = Bonfhir.createClient({
      version: '1.0.2',
    });

    expect(client).toHaveProperty('fhirVersion', '1.0.2');
  });

  it('throws an error when an unsupported FHIR version is specified', () => {
    expect(() => {
      const client = Bonfhir.createClient({
        version: 'not-a-version',
      });
    }).toThrowError('unable to provide a client supporting version "not-a-version"');
  });
});
