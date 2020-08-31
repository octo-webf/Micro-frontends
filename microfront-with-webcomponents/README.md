# Micro-frontends

(ISPI / PBE / LEFL)

---

Research on the use of different methods to integrate micro-frontends :

- [With iframes](#micro-frontends-using-iframes)
- [With Express & EJS](#micro-frontends-using-express--ejs) (server-side rendering)
- [With JavaScript](#micro-frontends-using-javascript)
- [With React only](#micro-frontends-using-react-javascript-2)
- With Custom Elements (Web Components)
  - [Simple example](#micro-frontends-using-custom-elements)
  - [With Redux store](#micro-frontends-using-custom-elements-with-redux)
  - [With Vuex store](#micro-frontends-using-custom-elements-with-vuex)
- [With Single-SPA](#micro-frontends-using-single-spa) Meta-framework (_More information on [Single-SPA's website](https://single-spa.js.org/)_)

## Micro-frontends using iframes

Go to `Micro-frontends/microfront-with-iframe/`

1. In `./ngapp`, use the command `npm run dev` to launch the Angular app locally at http://localhost:5001/
2. Idem in `./reactapp` & `./vueapp`, which will launch respectively at http://localhost:5002/ & http://localhost:5003/
3. Launch in `./wrapperapp` the global app using `npm start` to see the result at http://localhost:5000/

---

## Micro-frontends using Express & EJS

_This method uses React & Angular as Micro-frontends rendered server-side & EJS to compose Micro-frontends server-side_

Go to `Micro-frontends/microfront-with-express/`

1. In the 3 `./react-X` folders, execute `npm run start:prod`

This will launch 3 React micro-frontends at http://localhost:8001/, http://localhost:8002/ & http://localhost:8003/

2. In the `./angular` folders, also execute `npm run start:prod`

This will launch an Angular micro-frontends at http://localhost:8004/

3. In the root folder, launch the express server with `node server.js`

4. View the result at http://localhost:8000/

---

## Micro-frontends using JavaScript

_This method uses React & Angular as Micro-frontends rendered server-side & plain JavaScript to compose Micro-frontends client-side_

Go to `Micro-frontends/microfront-with-js/` and like with Express/EJS :

1. In the 3 `./react-X` folders, execute `npm run start:prod`

This will launch 3 React micro-frontends at http://localhost:7001/, http://localhost:7002/ & http://localhost:7003/

2. In the 2 `./angularX` folders, also execute `npm run start:prod`

This will launch 2 Angular micro-frontends at http://localhost:7004/ & http://localhost:7005/

3. In the root folder, launch the express server with `node server.js`

View the result at http://localhost:7000/

---

## Micro-frontends using React (JavaScript 2)

_This method uses React as Micro-frontends & to create Micro-frontends_

Go to `Micro-frontends/microfront-with-js-2/` :

1. In each folder execute `npm start`

This will launch 3 micro-frontends :  
The container application (wrapperapp) at http://localhost:3000/,  
Two micro-applications (microappX) at http://localhost:3001/ & http://localhost:3002/

The content server (common-content) at http://localhost:3100/ allows shared content across the micro-frontends such as libraries, CSS, JSON data...

2. View the result at http://localhost:3000/

---

## Micro-frontends using Custom Elements

_This method uses [Direflow](https://direflow.io/) to create React Web Components, [Angular Elements](https://angular.io/guide/elements) for Angular Web Components & [@vue/web-component-wrapper](https://github.com/vuejs/vue-web-component-wrapper) for Vue Web Components_

Go to `Micro-frontends/microfront-with-webcomponents/` :

1. In `./angular-app`, `react-app` & `vue-app` execute `npm run dev` to build & launch the Angular, React & Vue Web Components at http://localhost:4001/, http://localhost:4002/ & http://localhost:4003/
2. In `./common-content` run `npm start` to allow use of shared content serve at http://localhost:4100/
3. In `./wrapper-app` run `npm start` to see an example of use of Custom Elements at http://localhost:4000/

---

## Micro-frontends using Custom Elements with Redux

_Advanced Custom Elements example using a global state with Redux_

_This method uses [Direflow](https://direflow.io/) to create React Web Components & [@vue/web-component-wrapper](https://github.com/vuejs/vue-web-component-wrapper) for Vue Web Components_

_It also implements [react-redux](https://react-redux.js.org/) and [vuejs-redux](https://github.com/titouancreach/vuejs-redux) to handle communication with the store_

Go to `Micro-frontends/microfront-with-wc-redux/` :

1. In `react-app` & `vue-app` execute `npm run dev` to build & launch the React & Vue Web Components at http://localhost:4001/, http://localhost:4002/

2. In `./redux-app` run `npm start` to bundle all the redux logic in a single js file (thanks to [rollup.js](https://rollupjs.org/guide/en/)). The result is served at http://localhost:4100/
3. In `./wrapper-app` (a React application), run `npm start` to contain the micro-frontend and use a router allowing different lifecycles to our Web components. See the result at http://localhost:4000/

---

## Micro-frontends using Custom Elements with Vuex

_Advanced Custom Elements example using a global state with Vuex_

_This method uses [Direflow](https://direflow.io/) to create React Web Components & [@vue/web-component-wrapper](https://github.com/vuejs/vue-web-component-wrapper) for Vue Web Components_

_To handle communication between Vuex store & React, a script was created at `.../react-app/vuex-react` with useful hooks, using React context_

Go to `Micro-frontends/microfront-with-wc-redux/` :

1. In `react-app` & `vue-app` execute `npm run dev` to build & launch the React & Vue Web Components at http://localhost:4001/, http://localhost:4002/

2. In `./vuex-app` run `npm start` to serve the `main.js` file, which contains all the vuex logic in a json array file (with modifications for React). The result is served at http://localhost:4100/
3. In `./wrapper-app`, run `npm start` to see the result at http://localhost:4000/

---

## Micro-frontends using Single SPA

_This method uses Single SPA framework & its helper libraries to create Micro-frontends_

_⚠️ Developper mode only ⚠️_

_⚠️ Unmount problems with Angular framework not solved ⚠️_

Go to `Micro-frontends/microfront-with-single-spa/` :

1. In `angular-app`, `react-app`, `vue-app` & `react-navbar` execute `npm run dev` to build & launch the Angular, React and Vue 'Single SPAs' respectively at http://localhost:9001/, http://localhost:9002/, http://localhost:9003/ & http://localhost:9004/

2. In `./root-config`, run `npm start` to see the result at http://localhost:9000/
