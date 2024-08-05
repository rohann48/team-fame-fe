import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
// import hideHeader from "./hideHeader";
import { initSessionInterceptor } from "./Features/AuthenticateApi";
import { enableMapSet } from "immer";
// Mount function to start up the app
// const mount = (el: any, { onMount }: any = {}) => {
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// ReactDOM.createRoot(el);
//   onMount(root);
// };
// const hideHeaderPath = hideHeader();
// enableMapSet();
// const renderChild = (
//   root: any,
//   currLocPath: string = "",
//   { onNavigate, onSessionEnd }: any = {}
// ) => {
//   initSessionInterceptor(onSessionEnd);
// let baseDatatrackUrl =
//     process.env.NODE_ENV === "development"
//       ? "supplier-assessment-dev"
//       : "supplier-assessment";
root.render(
  <React.StrictMode>
    <Router basename={`/`}>
      <App
      //   onNavigate={onNavigate}
      //   currLocPath={currLocPath}
      //   onSessionEnd={onSessionEnd}
      />
    </Router>
  </React.StrictMode>
);
// };

// If we are in development and in isolation,
// call mount immediately
// if (process.env.NODE_ENV === "development") {
//   const devRoot = document.querySelector("#root");
//   if (devRoot) {
//     mount(devRoot, {
//       onMount: (root: any) => {
//         renderChild(root);
//       },
//     });
//   }
// }

// We are running through container
// and we should export the mount function
// export { renderChild };
