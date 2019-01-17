const Bonfhir = require('./');

class Application {
  static async main() {
    const fhir = Bonfhir.createClient({
      version: '1.0.2',
      serviceRootURL: 'https://r3.smarthealthit.org',
    });

    const searchResult = await fhir.search({
      type: 'Condition',
      parameters: {
        patient: 'Patient/7b1b9efd-50a4-4b8b-a772-a24aafe01f7f',
      },
    });

    console.log(searchResult);
  }
}

Application.main().catch((err) => {
  console.error(err);
});
