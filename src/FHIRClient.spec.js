const FHIRClient = require('./FHIRClient');

describe('FHIRClient', () => {
  describe('#constructor', () => {
    describe('when no options are provided', () => {
      it('creates a default client', () => {
        expect(() => {
          const client = new FHIRClient();
        }).not.toThrowError();
      });
    });
  });
});