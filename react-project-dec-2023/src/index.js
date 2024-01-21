import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// 1. `import React from "react";`
//    This line imports the React library, which is the core dependency used to create React components and use their features.

// 2. `import ReactDOM from "react-dom/client";`
//    This line imports the ReactDOM library, specifically the client part which provides browser-specific methods to interact with the DOM. This has changed slightly from earlier versions of React where you would simply import from `'react-dom'`.

// 3. `import "./index.css";`
//    This imports a CSS stylesheet named `index.css` that is presumably located in the same directory as this file. This stylesheet is used to apply global styles to your React application.

// 4. `import App from "./App";`
//    Imports the `App` component from the `App.js` file located in the same directory. The `App` component is usually the root component that wraps your entire application.

// 5. `import reportWebVitals from "./reportWebVitals";`
//    This line imports a function named `reportWebVitals` from a local file called `reportWebVitals.js`. This function is used for measuring and analyzing the performance of your web application.

// 6. `const root = ReactDOM.createRoot(document.getElementById("root"));`
//    This line specifies the entry point for your React application. It creates a root container using `ReactDOM.createRoot()`. This root container is where your React component tree will be rendered. The element with the ID of `"root"` is typically an empty `<div>` or some other container found in your `public/index.html` file.

// 7. `root.render( ... );`
//    This is where the React component tree, starting with the `App` component, is rendered into the DOM. The code contained within the `render` method is JSX (JavaScript XML), which allows you to write HTML elements in JavaScript code.

//    - `<React.StrictMode>`
//      This is a development tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants. Note, however, that it only affects the development build and has no impact on the production build.

//    - `<App />`
//      This is the root React component that typically wraps your entire application.

// 8. `reportWebVitals();`
//    After rendering the application, this line executes the `reportWebVitals` function to measure and log various performance metrics, such as the Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS). This is helpful for understanding and improving the performance characteristics of your app.
