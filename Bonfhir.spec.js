const Bonfhir = require('./Bonfhir');

describe('Bonfhir', () => {
  it('can create a client for interacting with FHIR version 1.0.2', () => {
    const client = Bonfhir.createClient({
      version: '1.0.2',
    });

    expect(client).toHaveProperty('fhirVersion', '1.0.2');
  });
});
