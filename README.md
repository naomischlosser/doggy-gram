# DoggyGram

Instagram for your furry companion!

## Dependencies

Install the dependencies

```
npm install
```

## Server

1. Start the client and server
   ```
   npm start
   ```
2. Browse to [http://localhost:8000](http://localhost:8000) to visit the client
3. Browse to [http://localhost:3000](http://localhost:3000) to visit the server

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
