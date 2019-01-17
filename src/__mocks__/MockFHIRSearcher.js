const MockFHIRSearcher = jest.fn()
  .mockName('MockFHIRSearcher')
  .mockImplementation(() => ({
    find: jest.fn().mockName('mockFind'),
  }));

module.exports = MockFHIRSearcher;
