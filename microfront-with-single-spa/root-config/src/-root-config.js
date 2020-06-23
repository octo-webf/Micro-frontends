import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
/*
registerApplication({
  name: "@/react-app",
  app: () => System.import("//localhost:9002/-.js"),
  activeWhen: ["/", "/react"],
});

registerApplication({
  name: "@/angular-app",
  app: () => System.import("//localhost:9001/main.js"),
  activeWhen: ["/angular"],
});

registerApplication({
  name: "@/vue-app",
  app: () => System.import("//localhost:9003/js/app.js"),
  activeWhen: ["/vue"],
});

start({
  urlRerouteOnly: false,
});
*/

const routes = constructRoutes(document.querySelector("#single-spa-layout"));
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });
applications.forEach(registerApplication);

//layoutEngine.activate();
start();
