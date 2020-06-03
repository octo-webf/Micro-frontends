# Micro-frontends

(ISPI / PBE / LEFL)

---

Research on the use of different methods to integrate micro-frontends :

- [With iframes](#micro-frontends-using-iframes)
- [With Express & EJS](#micro-frontends-using-express--ejs) (server-side rendering)
- [With JavaScript](#micro-frontends-using-javascript)
- [With Custom elements](#micro-frontends-using-custom-elements) (Web Components)

## Micro-frontends using iframes

Go to `Micro-frontends/microfront-with-iframe/`

1. In `./ngapp`, use the command `npm run dev` to launch the Angular app locally at http://localhost:5001/
2. Idem in `./reactapp` & `./vueapp`, which will launch respectively at http://localhost:5002/ & http://localhost:5003/
3. Launch in `./wrapperapp` the global app using `npm start` to see the result at http://localhost:5000/

---

## Micro-frontends using Express & EJS

Go to `Micro-frontends/microfront-with-express/`

1. In the 3 `./react-X` folders, execute `npm run start:prod`

This will launch 3 micro-frontends at http://localhost:8001/, http://localhost:8002/ & http://localhost:8003/

2. In the root folder, launch the express server with `node server.js`
3. View the result at http://localhost:8000/

---

## Micro-frontends using JavaScript

_This method uses React as Micro-frontends & plain JavaScript to create Micro-frontends_

Go to `Micro-frontends/microfront-with-js/` and like with Express/EJS :

1. In the 3 `./react-X` folders, execute `npm run start:prod`

This will launch 3 micro-frontends at http://localhost:5001/, http://localhost:5002/ & http://localhost:5003/

2. In the root folder, launch the express server with `node server.js`
3. View the result at http://localhost:5000/

---

## Micro-frontends using JavaScript 2

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

_This method uses [Direflow](https://direflow.io/) to create React Web Components & [Angular Elements](https://angular.io/guide/elements) for Angular Web Components_

Go to `Micro-frontends/microfront-with-webcomponents/` :

1. In `./angular-app` & `react-app` execute `npm run dev` to build & launch the Web Components at http://localhost:4001/ & http://localhost:4002/
2. In `./common-content` run `npm start` to allow use of shared content serve at http://localhost:4100/
3. In `./wrapper-app` run `npm start` to see an example of use of Custom Elements
