---
title: Installing webpack and babel for JavaScript ES6+ development
description: "Guide to setting up a development environment that allows the use of ES6+ features."
date: "2020-05-11"
---

By default, the JavaScript you write along side your HTML and CSS is the old version of JavaScript,
and its missing out on all the cool new features ES6+ has to offer, such as arrow functions, importing and exporting,
classes, async/await, etc. But when you use these ES6+ features, you normally will need to then compile
your JavaScript code down to the older version which older browsers can understand.
This is where babel and webpack comes in.

## Instructions to install babel and webpack

### 1. Node Package Manager

Initialize NPM in the project directory.

```
npm init
```

### 2. Webpack

Webpack is the thing that bundles all your JavaScript into a single file, and is what will allow us to add Babel later on.<br>
Make sure webpack has been installed globally, if not:

```
sudo npm install -g webpack
```

Then install it as a local dev dependency:

```
npm install --save-dev webpack
```

### 3. Configure Webpack

Create a webpack configuration file:

```
touch webpack.config.js
```

Define the input and output directories for webpack to compile:

```
// inside of webpack.config.js
module.exports = {
    entry: ['./src/main.js'],
    output: {
        path: __dirname
        filename: 'bundle.js'
    }
};
```

Pretty self explanatory, you can change them however you like.
<br>
Then add a script to the package.json for running webpack like so:

```
// inside of package.json
"scripts": {
    "build": "webpack",
  },
```

### 4. Webpack Development Server (Bonus)

Add this for hot reloading so you don't have to recompile everytime you make changes.<br>

Make sure webpack-dev-server has been installed globally, if not:

```
sudo npm install -g webpack-dev-server
```

Then install it as a local dev dependency:

```
npm install --save-dev webpack-dev-server
```

And also its CLI:

```
npm install --save-dev webpack-cli
```

Then add a script to the package.json for running the webpack development server, so it should now look like so:

```
// inside of package.json
"scripts": {
    "build": "webpack"
    "start": "webpack-dev-server",
  },
```

And add to the webpack configuration file so it looks like so:

```
// inside of webpack.config.js
module.exports = {
  entry: ["./src/main.js"],
  output: {
    path: __dirname,
    filename: "bundle.js",
  },
  mode: "development",        // You can change this to production later for your final build.
  devServer: {
    port: 3000,               // Set this to whatever port you want, this is the port its listening on.
    contentBase: "",          // Directory where you put the index.html file.
  },
```

### 5. Babel

And now the true pain in the butt begins...<br>

First install the Babel-core and the Babel env preset as dev dependencies:

```
npm install --save-dev @babel/core @babel/preset-env
```

And also Babel-loader:

```
npm install --save-dev babel-loader
```

### 6. Configure Babel

Add the babel configuration into the webpack configuration file, so it should now look like so:

```
// inside of webpack.config.js
module.exports = {
  entry: ["./src/main.js"],
  output: {
    path: __dirname,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,           // Regex that looks at all javascript files.
        exclude: /node_modules/,  // Ignore the node modules folder.
        loader: "babel-loader",   // Use the Babel loader.
        query: {
          presets: ["@babel/preset-env"],   // Define the Babel transpiler preset.
        },
      },
    ],
  },
  mode: "development",
  devServer: {
    port: 3000,
    contentBase: "",
  },
```

### 7. You're finally DONE

Your package.json dev dependencies should now look like this:

```
"devDependencies": {
    "@babel/core": "^7.9.6",
    "@babel/preset-env": "^7.9.6",
    "babel-loader": "^8.1.0",
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.11",
    "webpack-dev-server": "^3.11.0"
  },
```

And you can now start writing ES6+ code.

You should run the webpack development server during development with `npm start` so you can view the webpage on the port its listening on and any changes you make to the code will be hot reloaded automatically whenever you save.

For your final build, simply compile the Javascript files into a bundle with `npm run build` and you're good to go.<br>
Just put the bundle Javascript file, the HTML files, CSS files, etc into one folder and host!

### 8. Babel Polyfill (Bonus)

This is required for using ES8 Async/Await Promises.
<br>
You have to install Babel-polyfill as a dependency.

```
npm install --save @babel/polyfill
```

And add Babel-polyfill as an entry in the webpack configuration file:

```
module.exports = {
  entry: ["@babel/polyfill", "./src/main.js"],  // Add Babel-polyfill here.
  output: {
    path: __dirname,
    filename: "bundle.js",
  },
}
```