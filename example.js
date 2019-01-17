const Bonfhir = require('./');

class Application {
  static async main() {
    const fhir = Bonfhir.createClient({
      serviceRootURL: 'https://r3.smarthealthit.org',
    });

    try {
      const searchResult = await fhir.search({
        type: 'Condition',
        parameters: {
          patient: 'Patient/7b1b9efd-50a4-4b8b-a772-a24aafe01f7f',
        },
      });

      console.log(searchResult);
    } catch (err) {
      console.log(err);
    }

  }
}

Application.main();
