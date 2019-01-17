const nock = require('nock');
const HTTPSearcher = require('./HTTPSearcher');

describe('HTTPSearcher', () => {
  beforeEach(() => {
    nock.disableNetConnect();
  });

  afterEach(() => {
    nock.cleanAll()
    nock.enableNetConnect()
  });

  describe('#find', () => {
    it('requests a bundle of matching resources from the service provider', async () => {
      const serviceRootURL = 'https://fhir.example.com/'
      const searcher = new HTTPSearcher({
        serviceRootURL,
      });
      const mockService = nock(serviceRootURL)
        .get('/FakeType')
        .query({
          realistic: 'almost',
        })
        .reply(200, {
          total: 0,
        });

      const bundle = await searcher.find({
        type: 'FakeType',
        parameters: {
          realistic: 'almost',
        },
      });

      expect(mockService.isDone()).toBeTruthy();
      expect(bundle).toEqual({
        total: 0
      });
    });
  });
});
