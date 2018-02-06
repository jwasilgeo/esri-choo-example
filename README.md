# esri-choo-example
An example Choo application that shows how to use esri-loader to create a custom map view.


## Routes
Route              | File               | Description                     |
-------------------|--------------------|---------------------------------|
`/`                | `views/main.js`    | The main view
`/`                | `views/esri-map-view.js`    | The esri-map-view route
`/*`               | `views/404.js`     | Display unhandled routes

## Commands
Command                | Description                                      |
-----------------------|--------------------------------------------------|
`$ npm start`          | Start the development server
`$ npm test`           | Lint, validate deps & run tests
`$ npm run build`      | Compile all files into `dist/`
`$ npm run create`     | Generate a scaffold file
`$ npm run inspect`    | Inspect the bundle's dependencies
