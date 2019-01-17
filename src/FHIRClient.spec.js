const MockFHIRSearcher = require('./__mocks__/MockFHIRSearcher');
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

  describe('#search', () => {
    it('finds resources for a specific resource type', async () => {
      const searcher = new MockFHIRSearcher;
      const client = new FHIRClient({
        searcher,
      });

      await client.search({
        type: 'bananas',
      });

      expect(searcher.find).toHaveBeenCalledWith({
        type: 'bananas',
      });
    });
  });
});
