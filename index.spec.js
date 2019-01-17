const Bonfhir = require('./index');
const FHIRClient = require('./src/FHIRClient');

describe('Bonfhir', () => {
  it('can create a client for interacting with FHIR', () => {
    const client = Bonfhir.createClient();

    expect(client).toBeInstanceOf(FHIRClient);
  });
});
