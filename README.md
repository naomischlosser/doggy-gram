# DoggyGram

Instagram for your furry companion!

## Dependencies

Install the dependencies

```
npm install
```

## Client

Bundle and watch by running

```
npm run build
```

## Server

1. Start the server
   ```
   npm start
   ```
2. Browse to [http://localhost:3000](http://localhost:3000)

#### Start test server

The server must be running locally with test configuration for the integration tests to pass.

```
npm run start:test
```

This starts the server on port `3030` and uses the `doggygram_test` MongoDB database,
so that integration tests do not interact with the development server.

## Formatting

Run prettier in root directory

```
npm run format
```
