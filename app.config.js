const myValue = 'MyApp';

module.exports = {
  name: myValue,
  version: process.env.MY_CUSTOM_PROJECT_VERSION || '1.0.0',
  // All values in extra will be passed to your app.
  "extra": {
    "eas": {
      "projectId": "478ccdf0-6ae9-4c83-af1c-08ba785b18f4"
    }
  },
  android: {
    package: "giveaway.giftaway.myapp",
  }
};
