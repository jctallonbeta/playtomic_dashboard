# Dashboard System For Playtomic

Admin dashboard sytem with an authentication layer.

Try a [live demo](https://playtomic-jcmtallon-test.netlify.app/)!

## Getting Started

### Prerequisites

This app uses [firebase](https://firebase.google.com/) to handle the user authentication.

Create a new free app on firebase and connect it to this app by adding the provided identifiers when creating the firebase app to an `.env.local` file in the root directory.

You can find an example of how to fill the `.env.local` file in `.env.local(sample)`.

### Installation

1. Install NPM packages

```sh
npm install
```

2. Run the app in the development mode

```sh
npm start
```

## About The Project

### Sign In

User can sign into the system with an email and password. This dashboard does not have a sign up page, so please register a user directly onto your Firebase app to test this functionality.

User is automatically redirected to the dashboard home page when login is successful.

Sessions are persistent and you will remain signed in even if you refresh the page or close to tab.

![Sign In Page](images/signIn.jpg?raw=true "Sign In Page")

### Dashboard Home

To similute a basic CRUD application, the dashboard fetches data upon loading the page. As suggested in the test instructions, data is fetched from the public Github REST API.

If user is not authenticated, they get automatically redirected to the Sign In page.

![Home Page](images/home.jpg?raw=true "Home Page")

### Dashboard Settings

To similute a basic CRUD application, the dashboard fetches data upon loading the page. As suggested in the test instructions, data is fetched from the public Github REST API.

If user is not authenticated, they get automatically redirected to the Sign In page.

![Settings Page](images/settings.jpg?raw=true "Settings Page")
