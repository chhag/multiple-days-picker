This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation Instructions

Run the following commands:

### `npm install`

Installs the packages from package-lock.json file.<br>

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `Pega instructions`

**Import `Pega/PegaReactComponents.zip` product created in Pega 8.2.1 version**

The css and js files from the `build/static/css` and `build/static/js` directories other than runtime js file are saved as correponding TextFile rules in Pega. The `build/index.html` file is saved as `Rule-HTML-Fragment` file in Pega. Import the `Pega/PegaReactComponents.zip` product and you can embed either of the two section rules `ReactImplementation` or `ReactReduxImplementation` on the end user portal to test out the functionality. 


### `npm checkout react-redux`

Redux can also be used for managing both the Pega and React component state in a global store. Checkout the react-redux branch for the implementation. 