# Micro-frontends

(ISPI / PBE / LEFL)

---

Research on the use of different methods to integrate micro-frontends :

- With iframes
- With Express & EJS (server-side rendering)
- With JavaScript
- With Custom elements (Web Components)

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

Go to `Micro-frontends/microfront-with-js/` and like with Express/EJS :

1. In the 3 `./react-X` folders, execute `npm run start:prod`

This will launch 3 micro-frontends at http://localhost:5001/, http://localhost:5002/ & http://localhost:5003/

2. In the root folder, launch the express server with `node server.js`
3. View the result at http://localhost:5000/

---

## Micro-frontends using Custom Elements

Still in development
