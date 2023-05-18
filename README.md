## Simple contact list web app

A referral form web application created using React. The web app will allow a user to submit the details of up to 5 people they wish to refer to the platform.

### Before start the project

You will need a google maps javascript api key to get a suggestion list for the input `Address` in referral form.

1. To generate the key follow the [google docs](https://developers.google.com/maps/documentation/javascript/get-api-key)
2. Create a `.env` file in the root of the project
3. Add a new variable `REACT_APP_GOOGLE_API_KEY` as a value set a generated google api key

### What else should be done:

1. Add unit tests
2. Add form validation
3. Add eslint to the project
4. Add POST request to save the data
5. Provide CI/CD
6. Prepare DB and simple server to store referrals
