import { registerApplication, start } from "single-spa";

/*
registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});
*/

registerApplication({
  name: "@/react-app",
  app: () => System.import("//localhost:9001/-.js"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@/angular-app",
  app: () => System.import("//localhost:4200/main.js"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: false,
});
