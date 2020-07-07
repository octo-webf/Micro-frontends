/*! For license information please see direflowBundle.js.LICENSE.txt */
!(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          n.d(
            r,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = "/"),
    n((n.s = 20));
})([
  function (t, e) {
    t.exports = React;
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return l;
    }),
      n.d(e, "b", function () {
        return b;
      }),
      n.d(e, "c", function () {
        return j;
      });
    var r = n(0),
      o = n.n(r),
      i = (n(26), o.a.createContext(null));
    var a = function (t) {
        t();
      },
      c = { notify: function () {} };
    function u() {
      var t = a,
        e = null,
        n = null;
      return {
        clear: function () {
          (e = null), (n = null);
        },
        notify: function () {
          t(function () {
            for (var t = e; t; ) t.callback(), (t = t.next);
          });
        },
        get: function () {
          for (var t = [], n = e; n; ) t.push(n), (n = n.next);
          return t;
        },
        subscribe: function (t) {
          var r = !0,
            o = (n = { callback: t, next: null, prev: n });
          return (
            o.prev ? (o.prev.next = o) : (e = o),
            function () {
              r &&
                null !== e &&
                ((r = !1),
                o.next ? (o.next.prev = o.prev) : (n = o.prev),
                o.prev ? (o.prev.next = o.next) : (e = o.next));
            }
          );
        },
      };
    }
    var s = (function () {
      function t(t, e) {
        (this.store = t),
          (this.parentSub = e),
          (this.unsubscribe = null),
          (this.listeners = c),
          (this.handleChangeWrapper = this.handleChangeWrapper.bind(this));
      }
      var e = t.prototype;
      return (
        (e.addNestedSub = function (t) {
          return this.trySubscribe(), this.listeners.subscribe(t);
        }),
        (e.notifyNestedSubs = function () {
          this.listeners.notify();
        }),
        (e.handleChangeWrapper = function () {
          this.onStateChange && this.onStateChange();
        }),
        (e.isSubscribed = function () {
          return Boolean(this.unsubscribe);
        }),
        (e.trySubscribe = function () {
          this.unsubscribe ||
            ((this.unsubscribe = this.parentSub
              ? this.parentSub.addNestedSub(this.handleChangeWrapper)
              : this.store.subscribe(this.handleChangeWrapper)),
            (this.listeners = u()));
        }),
        (e.tryUnsubscribe = function () {
          this.unsubscribe &&
            (this.unsubscribe(),
            (this.unsubscribe = null),
            this.listeners.clear(),
            (this.listeners = c));
        }),
        t
      );
    })();
    var l = function (t) {
      var e = t.store,
        n = t.context,
        a = t.children,
        c = Object(r.useMemo)(
          function () {
            var t = new s(e);
            return (
              (t.onStateChange = t.notifyNestedSubs),
              { store: e, subscription: t }
            );
          },
          [e]
        ),
        u = Object(r.useMemo)(
          function () {
            return e.getState();
          },
          [e]
        );
      Object(r.useEffect)(
        function () {
          var t = c.subscription;
          return (
            t.trySubscribe(),
            u !== e.getState() && t.notifyNestedSubs(),
            function () {
              t.tryUnsubscribe(), (t.onStateChange = null);
            }
          );
        },
        [c, u]
      );
      var l = n || i;
      return o.a.createElement(l.Provider, { value: c }, a);
    };
    n(11), n(7);
    var f =
      "undefined" !== typeof window &&
      "undefined" !== typeof window.document &&
      "undefined" !== typeof window.document.createElement
        ? r.useLayoutEffect
        : r.useEffect;
    n(12);
    var p = function () {
      return Math.random().toString(36).substring(7).split("").join(".");
    };
    p(), p();
    function h() {
      return Object(r.useContext)(i);
    }
    function d(t) {
      void 0 === t && (t = i);
      var e =
        t === i
          ? h
          : function () {
              return Object(r.useContext)(t);
            };
      return function () {
        return e().store;
      };
    }
    var v = d();
    function y(t) {
      void 0 === t && (t = i);
      var e = t === i ? v : d(t);
      return function () {
        return e().dispatch;
      };
    }
    var b = y(),
      m = function (t, e) {
        return t === e;
      };
    function g(t) {
      void 0 === t && (t = i);
      var e =
        t === i
          ? h
          : function () {
              return Object(r.useContext)(t);
            };
      return function (t, n) {
        void 0 === n && (n = m);
        var o = e();
        return (function (t, e, n, o) {
          var i,
            a = Object(r.useReducer)(function (t) {
              return t + 1;
            }, 0)[1],
            c = Object(r.useMemo)(
              function () {
                return new s(n, o);
              },
              [n, o]
            ),
            u = Object(r.useRef)(),
            l = Object(r.useRef)(),
            p = Object(r.useRef)();
          try {
            i = t !== l.current || u.current ? t(n.getState()) : p.current;
          } catch (h) {
            throw (
              (u.current &&
                (h.message +=
                  "\nThe error may be correlated with this previous error:\n" +
                  u.current.stack +
                  "\n\n"),
              h)
            );
          }
          return (
            f(function () {
              (l.current = t), (p.current = i), (u.current = void 0);
            }),
            f(
              function () {
                function t() {
                  try {
                    var t = l.current(n.getState());
                    if (e(t, p.current)) return;
                    p.current = t;
                  } catch (h) {
                    u.current = h;
                  }
                  a({});
                }
                return (
                  (c.onStateChange = t),
                  c.trySubscribe(),
                  t(),
                  function () {
                    return c.tryUnsubscribe();
                  }
                );
              },
              [n, c]
            ),
            i
          );
        })(t, n, o.store, o.subscription);
      };
    }
    var w,
      j = g(),
      _ = n(2);
    (w = _.unstable_batchedUpdates), (a = w);
  },
  function (t, e) {
    t.exports = ReactDOM;
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "b", function () {
      return et;
    }),
      n.d(e, "a", function () {
        return X;
      });
    var r = n(5),
      o = n.n(r);
    function i(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function a(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function c(t, e, n) {
      return e && a(t.prototype, e), n && a(t, n), t;
    }
    function u(t, e) {
      return (u =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function s(t, e) {
      if ("function" !== typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, writable: !0, configurable: !0 },
      })),
        e && u(t, e);
    }
    function l(t) {
      return (l = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function f() {
      if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" === typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    }
    function p(t) {
      return (p =
        "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" === typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function h(t, e) {
      return !e || ("object" !== p(e) && "function" !== typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function d(t) {
      return function () {
        var e,
          n = l(t);
        if (f()) {
          var r = l(this).constructor;
          e = Reflect.construct(n, arguments, r);
        } else e = n.apply(this, arguments);
        return h(this, e);
      };
    }
    function v(t, e, n) {
      return (v = f()
        ? Reflect.construct
        : function (t, e, n) {
            var r = [null];
            r.push.apply(r, e);
            var o = new (Function.bind.apply(t, r))();
            return n && u(o, n.prototype), o;
          }).apply(null, arguments);
    }
    function y(t) {
      var e = "function" === typeof Map ? new Map() : void 0;
      return (y = function (t) {
        if (
          null === t ||
          ((n = t), -1 === Function.toString.call(n).indexOf("[native code]"))
        )
          return t;
        var n;
        if ("function" !== typeof t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if ("undefined" !== typeof e) {
          if (e.has(t)) return e.get(t);
          e.set(t, r);
        }
        function r() {
          return v(t, arguments, l(this).constructor);
        }
        return (
          (r.prototype = Object.create(t.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          u(r, t)
        );
      })(t);
    }
    var b = n(4),
      m = n(0),
      g = n.n(m),
      w = n(2),
      j = n.n(w),
      _ = n(15),
      x = n.n(_),
      S = function (t) {
        var e = t.targetElement;
        return Object(w.createPortal)(t.children, e);
      },
      O = new WeakMap(),
      E = function (t, e) {
        return new Proxy(
          { open: null, closed: null },
          {
            get: function (n, r) {
              if (O.get(t)) return O.get(t);
              var o,
                i =
                  ((o = { webComponent: t, mode: r, shadowChildren: e }),
                  function (t) {
                    var e =
                      o.webComponent.shadowRoot ||
                      o.webComponent.attachShadow({ mode: o.mode });
                    return (
                      o.shadowChildren.forEach(function (t) {
                        e.appendChild(t);
                      }),
                      g.a.createElement(S, { targetElement: e }, t.children)
                    );
                  });
              return O.set(t, i), i;
            },
          }
        );
      },
      k = Object(m.createContext)(function () {}),
      P = k.Provider,
      C =
        (k.Consumer,
        function (t) {
          return function (e, n, r) {
            return t(e, n, r);
          };
        }),
      A = function (t, e, r) {
        if (
          null === e || void 0 === e
            ? void 0
            : e.find(function (t) {
                return "styled-components" === t.name;
              })
        )
          try {
            var o = n(
                !(function () {
                  var t = new Error("Cannot find module 'styled-components'");
                  throw ((t.code = "MODULE_NOT_FOUND"), t);
                })()
              ).StyleSheetManager,
              i = document.createElement("span");
            return (
              (i.id = "direflow_styled-components-styles"),
              [g.a.createElement(o, { target: i }, r), i]
            );
          } catch (a) {
            console.error(
              "Could not load styled-components. Did you remember to install styled-components?"
            );
          }
      },
      T = function (t) {
        L(t, document.head) || document.head.append(t);
      },
      L = function (t, e) {
        var n = e.children;
        return Array.from(n).some(function (e) {
          return t.isEqualNode(e);
        });
      },
      N = function (t, e, n) {
        var r,
          o =
            null === e || void 0 === e
              ? void 0
              : e.find(function (t) {
                  return "external-loader" === t.name;
                }),
          i =
            null === (r = null === o || void 0 === o ? void 0 : o.options) ||
            void 0 === r
              ? void 0
              : r.paths;
        if (i && i.length && n) {
          var a = [],
            c = [];
          i.forEach(function (t) {
            var e = "string" === typeof t ? t : t.src,
              n = "string" !== typeof t && t.async,
              r = "string" === typeof t ? void 0 : t.useHead;
            if (e.endsWith(".js")) {
              var o = document.createElement("script");
              (o.src = e),
                (o.async = !!n),
                void 0 === r || r
                  ? o.setAttribute("use-head", "true")
                  : o.setAttribute("use-head", "false"),
                a.push(o);
            }
            if (e.endsWith(".css")) {
              var i = document.createElement("link");
              (i.rel = "stylesheet"),
                (i.href = e),
                r
                  ? i.setAttribute("use-head", "true")
                  : i.setAttribute("use-head", "false"),
                c.push(i);
            }
          });
          var u = document.createElement("span");
          return (
            (u.id = "direflow_external-sources"),
            window.externalSourcesLoaded || (window.externalSourcesLoaded = {}),
            a.forEach(function (t) {
              "true" === t.getAttribute("use-head") ? T(t) : u.appendChild(t),
                (window.externalSourcesLoaded[t.src] = { state: "loading" }),
                t.addEventListener("load", function () {
                  var e, n;
                  (window.externalSourcesLoaded[t.src].state = "completed"),
                    null ===
                      (n = (e = window.externalSourcesLoaded[t.src])
                        .callback) ||
                      void 0 === n ||
                      n.call(e);
                });
            }),
            c.forEach(function (t) {
              "true" === t.getAttribute("use-head") ? T(t) : u.appendChild(t),
                (window.externalSourcesLoaded[t.href] = { state: "loading" }),
                t.addEventListener("load", function () {
                  var e, n;
                  (window.externalSourcesLoaded[t.href].state = "completed"),
                    null ===
                      (n = (e = window.externalSourcesLoaded[t.href])
                        .callback) ||
                      void 0 === n ||
                      n.call(e);
                });
            }),
            [n, u]
          );
        }
      },
      R = n(16),
      M = n.n(R),
      D = !1,
      $ = function (t, e) {
        if (!D) {
          var n =
            null === e || void 0 === e
              ? void 0
              : e.find(function (t) {
                  return "font-loader" === t.name;
                });
          (null === n || void 0 === n ? void 0 : n.options) &&
            (M.a.load(n.options), (D = !0));
        }
      },
      F = function (t, e, n) {
        var r,
          o =
            null === e || void 0 === e
              ? void 0
              : e.find(function (t) {
                  return "icon-loader" === t.name;
                });
        if (
          n &&
          (null === (r = null === o || void 0 === o ? void 0 : o.options) ||
          void 0 === r
            ? void 0
            : r.packs.includes("material-icons"))
        ) {
          var i = document.createElement("link");
          (i.rel = "stylesheet"),
            (i.href =
              "https://fonts.googleapis.com/icon?family=Material+Icons");
          var a = document.createElement("span");
          return (a.id = "direflow_material-icons"), a.appendChild(i), [n, a];
        }
      },
      I = new WeakMap(),
      U = function (t, e, r) {
        if (
          null === e || void 0 === e
            ? void 0
            : e.find(function (t) {
                return "material-ui" === t.name;
              })
        )
          try {
            var o,
              i = n(
                !(function () {
                  var t = new Error("Cannot find module 'jss'");
                  throw ((t.code = "MODULE_NOT_FOUND"), t);
                })()
              ).create,
              a = n(
                !(function () {
                  var t = new Error(
                    "Cannot find module '@material-ui/core/styles'"
                  );
                  throw ((t.code = "MODULE_NOT_FOUND"), t);
                })()
              ),
              c = a.jssPreset,
              u = a.StylesProvider,
              s = document.createElement("span");
            return (
              (s.id = "direflow_material-ui-styles"),
              I.has(t)
                ? (o = I.get(t))
                : ((o = i(
                    Object.assign(Object.assign({}, c()), { insertionPoint: s })
                  )),
                  I.set(t, o)),
              [g.a.createElement(u, { jss: o, sheetsManager: new Map() }, r), s]
            );
          } catch (l) {
            console.error(
              "Could not load Material-UI. Did you remember to install @material-ui/core?"
            );
          }
      },
      B = [C($), C(F), C(N), C(A), C(U)],
      W = (function () {
        function t(e, n, r, o, a) {
          i(this, t),
            (this.componentProperties = e),
            (this.rootComponent = n),
            (this.shadow = r),
            (this.plugins = o),
            (this.connectCallback = a),
            (this.componentAttributes = {}),
            this.reflectPropertiesToAttributes();
        }
        return (
          c(t, [
            {
              key: "reflectPropertiesToAttributes",
              value: function () {
                var t = this;
                Object.entries(this.componentProperties).forEach(function (e) {
                  var n = Object(b.a)(e, 2),
                    r = n[0],
                    o = n[1];
                  ("number" !== typeof o &&
                    "string" !== typeof o &&
                    "boolean" !== typeof o) ||
                    (t.componentAttributes[r] = o);
                });
              },
            },
            {
              key: "create",
              value: function () {
                var t = this;
                return (function (e) {
                  s(r, e);
                  var n = d(r);
                  function r() {
                    var e;
                    return (
                      i(this, r),
                      ((e = n.call(this)).initialProperties = x()(
                        t.componentProperties
                      )),
                      (e.properties = {}),
                      (e.hasConnected = !1),
                      (e.eventDispatcher = function (t) {
                        e.dispatchEvent(t);
                      }),
                      e.transferInitialProperties(),
                      e.subscribeToProperties(),
                      e
                    );
                  }
                  return (
                    c(
                      r,
                      [
                        {
                          key: "connectedCallback",
                          value: function () {
                            var e;
                            this.mountReactApp({ initial: !0 }),
                              (this.hasConnected = !0),
                              null === (e = t.connectCallback) ||
                                void 0 === e ||
                                e.call(t, this);
                          },
                        },
                        {
                          key: "attributeChangedCallback",
                          value: function (t, e, n) {
                            this.hasConnected &&
                              e !== n &&
                              ((this.properties[t] = n), this.mountReactApp());
                          },
                        },
                        {
                          key: "propertyChangedCallback",
                          value: function (t, e, n) {
                            this.hasConnected &&
                              e !== n &&
                              ((this.properties[t] = n), this.mountReactApp());
                          },
                        },
                        {
                          key: "disconnectedCallback",
                          value: function () {
                            j.a.unmountComponentAtNode(this);
                          },
                        },
                        {
                          key: "subscribeToProperties",
                          value: function () {
                            var t = this,
                              e = {};
                            Object.keys(this.initialProperties).forEach(
                              function (n) {
                                e[n] = {
                                  configurable: !0,
                                  enumerable: !0,
                                  get: function () {
                                    return t.properties.hasOwnProperty(n)
                                      ? t.properties[n]
                                      : t.initialProperties[n];
                                  },
                                  set: function (e) {
                                    var r = t.properties.hasOwnProperty(n)
                                      ? t.properties[n]
                                      : t.initialProperties[n];
                                    t.propertyChangedCallback(n, r, e);
                                  },
                                };
                              }
                            ),
                              Object.defineProperties(this, e);
                          },
                        },
                        {
                          key: "syncronizePropertiesAndAttributes",
                          value: function () {
                            var t = this;
                            Object.keys(this.initialProperties).forEach(
                              function (e) {
                                t.properties.hasOwnProperty(e) ||
                                  (t.getAttribute(e)
                                    ? (t.properties[e] = t.getAttribute(e))
                                    : (t.properties[e] =
                                        t.initialProperties[e]));
                              }
                            );
                          },
                        },
                        {
                          key: "transferInitialProperties",
                          value: function () {
                            var t = this;
                            Object.keys(this.initialProperties).forEach(
                              function (e) {
                                t.hasOwnProperty(e) && (t.properties[e] = t[e]);
                              }
                            );
                          },
                        },
                        {
                          key: "applyPlugins",
                          value: function (e) {
                            var n = this,
                              r = [];
                            return [
                              B.reduce(function (e, o) {
                                var i = o(n, t.plugins, e);
                                if (!i) return e;
                                var a = Object(b.a)(i, 2),
                                  c = a[0],
                                  u = a[1];
                                return u && r.push(u), c;
                              }, e),
                              r,
                            ];
                          },
                        },
                        {
                          key: "reactProps",
                          value: function () {
                            return (
                              this.syncronizePropertiesAndAttributes(),
                              this.properties
                            );
                          },
                        },
                        {
                          key: "mountReactApp",
                          value: function (e) {
                            var n = this,
                              r = g.a.createElement(
                                P,
                                { value: this.eventDispatcher },
                                g.a.createElement(
                                  t.rootComponent,
                                  this.reactProps()
                                )
                              ),
                              o = this.applyPlugins(r),
                              i = Object(b.a)(o, 2),
                              a = i[0],
                              c = i[1];
                            if (t.shadow) {
                              var u;
                              (null === e || void 0 === e
                                ? void 0
                                : e.initial) &&
                                (u = Array.from(this.children).map(function (
                                  t
                                ) {
                                  return t.cloneNode(!0);
                                }));
                              var s = E(this, c);
                              j.a.render(
                                g.a.createElement(s.open, null, a),
                                this
                              ),
                                u &&
                                  u.forEach(function (t) {
                                    return n.append(t);
                                  });
                            } else j.a.render(a, this);
                          },
                        },
                      ],
                      [
                        {
                          key: "observedAttributes",
                          get: function () {
                            return Object.keys(t.componentAttributes).map(
                              function (t) {
                                return t.toLowerCase();
                              }
                            );
                          },
                        },
                      ]
                    ),
                    r
                  );
                })(y(HTMLElement));
              },
            },
          ]),
          t
        );
      })(),
      G = function (t, e) {
        return new Promise(function (n, r) {
          var o = document.createElement("script");
          (o.async = !0), (o.src = t), window[e] || (window[e] = []);
          var i = window[e].find(function (t) {
            return t.script.isEqualNode(o);
          });
          if (i)
            return (
              i.hasLoaded && n(),
              void i.script.addEventListener("load", function () {
                return n();
              })
            );
          var a = { script: o, hasLoaded: !1 };
          window[e].push(a),
            o.addEventListener("load", function () {
              (a.hasLoaded = !0), n();
            }),
            o.addEventListener("error", function () {
              return r(new Error("Polyfill failed to load"));
            }),
            document.head.appendChild(o);
        });
      },
      V = function (t, e, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(t) {
            try {
              u(r.next(t));
            } catch (e) {
              i(e);
            }
          }
          function c(t) {
            try {
              u(r.throw(t));
            } catch (e) {
              i(e);
            }
          }
          function u(t) {
            var e;
            t.done
              ? o(t.value)
              : ((e = t.value),
                e instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    })).then(a, c);
          }
          u((r = r.apply(t, e || [])).next());
        });
      },
      z = !1,
      q =
        "https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs@2.4.1/bundles/webcomponents-sd.js",
      H =
        "https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs@2.4.1/bundles/webcomponents-ce.js",
      Y =
        "https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.4.1/custom-elements-es5-adapter.js",
      J = function (t, e) {
        return V(
          void 0,
          void 0,
          void 0,
          o.a.mark(function n() {
            var r, i, a, c, u, s, l, f, p, h, d, v, y, b, m, g, w, j, _;
            return o.a.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      if (!z) {
                        n.next = 2;
                        break;
                      }
                      return n.abrupt("return");
                    case 2:
                      return (
                        (v = []),
                        (y = ""),
                        (b = ""),
                        (m = ""),
                        (g =
                          null === e || void 0 === e
                            ? void 0
                            : e.find(function (t) {
                                return "polyfill-loader" === t.name;
                              })),
                        (w =
                          !1 ===
                          (null ===
                            (r =
                              null === g || void 0 === g
                                ? void 0
                                : g.options) || void 0 === r
                            ? void 0
                            : r.use.sd)),
                        (j =
                          !1 ===
                          (null ===
                            (i =
                              null === g || void 0 === g
                                ? void 0
                                : g.options) || void 0 === i
                            ? void 0
                            : i.use.ce)),
                        (_ =
                          !1 ===
                          (null ===
                            (a =
                              null === g || void 0 === g
                                ? void 0
                                : g.options) || void 0 === a
                            ? void 0
                            : a.use.adapter)),
                        (null ===
                          (c =
                            null === g || void 0 === g ? void 0 : g.options) ||
                        void 0 === c
                          ? void 0
                          : c.use.sd) &&
                          (y =
                            "string" ===
                            typeof (null === (u = g.options) || void 0 === u
                              ? void 0
                              : u.use.sd)
                              ? null === (s = g.options) || void 0 === s
                                ? void 0
                                : s.use.sd
                              : q),
                        (null ===
                          (l =
                            null === g || void 0 === g ? void 0 : g.options) ||
                        void 0 === l
                          ? void 0
                          : l.use.ce) &&
                          (b =
                            "string" ===
                            typeof (null === (f = g.options) || void 0 === f
                              ? void 0
                              : f.use.ce)
                              ? null === (p = g.options) || void 0 === p
                                ? void 0
                                : p.use.ce
                              : H),
                        (null ===
                          (h =
                            null === g || void 0 === g ? void 0 : g.options) ||
                        void 0 === h
                          ? void 0
                          : h.use.adapter) &&
                          (m =
                            "string" ===
                            typeof (null === (d = g.options) || void 0 === d
                              ? void 0
                              : d.use.adapter)
                              ? g.options.use.adapter
                              : Y),
                        t.usesShadow &&
                          !w &&
                          v.push(G(y || q, "wcPolyfillsLoaded")),
                        j || v.push(G(b || H, "wcPolyfillsLoaded")),
                        _ || v.push(G(m || Y, "wcPolyfillsLoaded")),
                        (n.prev = 16),
                        (n.next = 19),
                        Promise.all(v)
                      );
                    case 19:
                      (z = !0), (n.next = 25);
                      break;
                    case 22:
                      (n.prev = 22), (n.t0 = n.catch(16)), console.error(n.t0);
                    case 25:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              null,
              [[16, 22]]
            );
          })
        );
      },
      K = function (t, e, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(t) {
            try {
              u(r.next(t));
            } catch (e) {
              i(e);
            }
          }
          function c(t) {
            try {
              u(r.throw(t));
            } catch (e) {
              i(e);
            }
          }
          function u(t) {
            var e;
            t.done
              ? o(t.value)
              : ((e = t.value),
                e instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    })).then(a, c);
          }
          u((r = r.apply(t, e || [])).next());
        });
      },
      X = (function () {
        function t() {
          i(this, t);
        }
        return (
          c(t, null, [
            {
              key: "createAll",
              value: function (e) {
                return e.map(t.create);
              },
            },
            {
              key: "create",
              value: function (t) {
                var e = this,
                  n = t.component,
                  r = n.plugins || t.plugins,
                  i = n.configuration || t.configuration;
                if (!n) throw Error("Root component has not been set");
                if (!i) throw Error("No configuration found");
                var a = Object.assign(
                    Object.assign(
                      Object.assign(
                        {},
                        null === t || void 0 === t ? void 0 : t.properties
                      ),
                      n.properties
                    ),
                    n.defaultProps
                  ),
                  c = i.tagname || "direflow-component",
                  u = void 0 === i.useShadow || i.useShadow;
                return new Promise(function (t) {
                  return K(
                    e,
                    void 0,
                    void 0,
                    o.a.mark(function e() {
                      var i, s;
                      return o.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (i = function (e) {
                                  t(e);
                                }),
                                (e.next = 3),
                                Promise.all([J({ usesShadow: !!u }, r)])
                              );
                            case 3:
                              (s = new W(a, n, u, r, i).create()),
                                customElements.define(c || "", s);
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                });
              },
            },
          ]),
          t
        );
      })();
    var Q = n(17),
      Z = n.n(Q),
      tt = (function (t) {
        s(n, t);
        var e = d(n);
        function n() {
          var t;
          return (
            i(this, n),
            ((t = e.apply(this, arguments)).scopeClassNameCache = {}),
            (t.scopedCSSTextCache = {}),
            (t.scoped = void 0 === t.props.scoped || t.props.scoped),
            (t.pepper = ""),
            (t.getStyleString = function () {
              if (t.props.children instanceof Array) {
                var e = t.props.children.filter(function (t) {
                  return !Object(m.isValidElement)(t) && "string" === typeof t;
                });
                if (e.length > 1)
                  throw new Error(
                    "Multiple style objects as direct descedents of a\n        Style component are not supported ("
                      .concat(e.length, " style objects detected):\n\n        ")
                      .concat(e[0], "\n        ")
                  );
                return e[0];
              }
              return "string" !== typeof t.props.children ||
                Object(m.isValidElement)(t.props.children)
                ? null
                : t.props.children;
            }),
            (t.getRootElement = function () {
              if (t.props.children instanceof Array) {
                var e = t.props.children.filter(function (t) {
                  return Object(m.isValidElement)(t);
                });
                return e[0];
              }
              return Object(m.isValidElement)(t.props.children)
                ? t.props.children
                : null;
            }),
            (t.getRootSelectors = function (t) {
              var e = [];
              return (
                t.props.id && e.push("#".concat(t.props.id)),
                t.props.className &&
                  t.props.className
                    .trim()
                    .split(/\s+/g)
                    .forEach(function (t) {
                      return e.push(t);
                    }),
                e.length || "function" === typeof t.type || e.push(t.type),
                e
              );
            }),
            (t.processCSSText = function (e, n, r) {
              return e
                .replace(/\s*\/\/(?![^(]*\)).*|\s*\/\*.*\*\//g, "")
                .replace(/\s\s+/g, " ")
                .split("}")
                .map(function (e) {
                  var o = /.*:.*;/g,
                    i = /.*:.*(;|$|\s+)/g,
                    a = /\s*@/g,
                    c = /\s*(([0-9][0-9]?|100)\s*%)|\s*(to|from)\s*$/g;
                  return e
                    .split("{")
                    .map(function (e, u, s) {
                      if (!e.trim().length) return "";
                      var l = s.length - 1 === u && e.match(i);
                      if (e.match(o) || l)
                        return t.escapeTextContentForBrowser(e);
                      var f = e;
                      return n && !/:target/gi.test(f)
                        ? f.match(a) || f.match(c)
                          ? f
                          : t.scopeSelector(n, f, r)
                        : f;
                    })
                    .join("{\n");
                })
                .join("}\n");
            }),
            (t.escaper = function (t) {
              return { ">": "&gt;", "<": "&lt;" }[t];
            }),
            (t.escapeTextContentForBrowser = function (e) {
              return "".concat(e).replace(/[><]/g, t.escaper);
            }),
            (t.scopeSelector = function (e, n, r) {
              var o = [];
              return (
                n.split(/,(?![^(|[]*\)|\])/g).forEach(function (n) {
                  var i, a;
                  if (
                    (null === r || void 0 === r ? void 0 : r.length) &&
                    r.some(function (t) {
                      return n.match(t);
                    })
                  ) {
                    a = n;
                    var c =
                      null === r || void 0 === r
                        ? void 0
                        : r.map(function (t) {
                            return t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
                          });
                    (a = a.replace(
                      new RegExp(
                        "(".concat(
                          null === c || void 0 === c ? void 0 : c.join("|"),
                          ")"
                        )
                      ),
                      "$1".concat(e)
                    )),
                      (i = t.scoped ? "".concat(e, " ").concat(n) : n),
                      o.push(a, i);
                  } else (i = t.scoped ? "".concat(e, " ").concat(n) : n), o.push(i);
                }),
                !t.scoped && o.length > 1 ? o[1] : o.join(", ")
              );
            }),
            (t.getScopeClassName = function (e, n) {
              var r = e;
              return (
                n &&
                  ((t.pepper = ""),
                  t.traverseObjectToGeneratePepper(n),
                  (r += t.pepper)),
                "s" + Z()(r)
              );
            }),
            (t.traverseObjectToGeneratePepper = function (e) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
              n > 32 ||
                t.pepper.length > 1e4 ||
                Object.keys(e).forEach(function (r) {
                  var o = /^[_$]|type|ref|^value$/.test(r);
                  e[r] && "object" === typeof e[r] && !o
                    ? t.traverseObjectToGeneratePepper(e[r], n + 1)
                    : e[r] &&
                      !o &&
                      "function" !== typeof e[r] &&
                      (t.pepper += e[r]);
                });
            }),
            (t.isVoidElement = function (t) {
              return [
                "area",
                "base",
                "br",
                "col",
                "command",
                "embed",
                "hr",
                "img",
                "input",
                "keygen",
                "link",
                "meta",
                "param",
                "source",
                "track",
                "wbr",
              ].some(function (e) {
                return t === e;
              });
            }),
            (t.createStyleElement = function (t, e) {
              return g.a.createElement("style", {
                id: "direflow_styles",
                type: "text/css",
                key: e,
                dangerouslySetInnerHTML: { __html: t || "" },
              });
            }),
            (t.getNewChildrenForCloneElement = function (e, n, r) {
              return [t.createStyleElement(e, r)].concat(n.props.children);
            }),
            t
          );
        }
        return (
          c(n, [
            {
              key: "render",
              value: function () {
                var t = this.getStyleString(),
                  e = this.getRootElement();
                if (!t && e) return e.props.children;
                if (t && !e)
                  return this.createStyleElement(
                    this.processCSSText(t),
                    this.getScopeClassName(t, e)
                  );
                var n,
                  r,
                  o = e.props.id ? e.props.id : "",
                  i = e.props.className
                    ? "".concat(e.props.className, " ")
                    : "",
                  a = i + o + t;
                this.scopeClassNameCache[a]
                  ? ((n = this.scopeClassNameCache[a]),
                    (r = this.scopedCSSTextCache[n]))
                  : ((n = this.getScopeClassName(t, e)),
                    (r = this.processCSSText(
                      t,
                      ".".concat(n),
                      this.getRootSelectors(e)
                    )),
                    (this.scopeClassNameCache[a] = n),
                    (this.scopedCSSTextCache[n] = r));
                var c = this.scoped ? "".concat(i).concat(n) : i;
                return Object(m.cloneElement)(
                  e,
                  Object.assign(Object.assign({}, e.props), {
                    className: c.trim(),
                  }),
                  this.getNewChildrenForCloneElement(r, e, n)
                );
              },
            },
          ]),
          n
        );
      })(m.Component),
      et = function (t) {
        var e;
        return (
          (e =
            "string" === typeof t.styles
              ? t.styles.toString()
              : t.styles.reduce(function (t, e) {
                  return "".concat(t, " ").concat(e);
                })),
          g.a.createElement(tt, { scoped: t.scoped }, e, t.children)
        );
      };
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    function o(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) {
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var a, c = t[Symbol.iterator]();
                !(r = (a = c.next()).done) &&
                (n.push(a.value), !e || n.length !== e);
                r = !0
              );
            } catch (u) {
              (o = !0), (i = u);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          }
        })(t, e) ||
        (function (t, e) {
          if (t) {
            if ("string" === typeof t) return r(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === n && t.constructor && (n = t.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(n)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? r(t, e)
                : void 0
            );
          }
        })(t, e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    n.d(e, "a", function () {
      return o;
    });
  },
  function (t, e, n) {
    t.exports = n(23);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    e.default = function (t, e) {
      return new Promise(function (n, r) {
        var o = document.createElement("script");
        (o.async = !0), (o.src = t), window[e] || (window[e] = []);
        var i = window[e].find(function (t) {
          return t.script.isEqualNode(o);
        });
        if (i)
          return (
            i.hasLoaded && n(),
            void i.script.addEventListener("load", function () {
              return n();
            })
          );
        var a = { script: o, hasLoaded: !1 };
        window[e].push(a),
          o.addEventListener("load", function () {
            (a.hasLoaded = !0), n();
          }),
          o.addEventListener("error", function () {
            return r(new Error("Polyfill failed to load"));
          }),
          document.head.appendChild(o);
      });
    };
  },
  function (t, e, n) {
    "use strict";
    t.exports = n(29);
  },
  function (t, e, n) {
    var r = n(31);
    t.exports = "string" === typeof r ? r : r.toString();
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(3),
      o = n(0),
      i = n.n(o),
      a = n(18),
      c = n.n(a),
      u = n(1);
    function s() {
      var t = Object(u.c)(window.selectors.getVisibleBasket);
      Object(u.b)();
      return i.a.createElement(
        r.b,
        { styles: c.a },
        i.a.createElement(
          "section",
          null,
          i.a.createElement("h2", null, "Panier"),
          0 === t.length
            ? i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement("h5", null, "Votre panier est vide...")
              )
            : t.map(function (t) {
                return i.a.createElement(
                  "div",
                  { key: t.id, className: "flex" },
                  i.a.createElement(
                    "div",
                    null,
                    i.a.createElement("h4", null, t.product.name),
                    i.a.createElement("h6", null, t.product.tags)
                  ),
                  i.a.createElement(
                    "h3",
                    null,
                    t.product.price,
                    " x",
                    t.quantity
                  )
                );
              }),
          i.a.createElement(
            "div",
            {
              className: "btn-back",
              onClick: function () {
                var e = new CustomEvent("redirectHome");
                window.dispatchEvent(e), console.log(t);
              },
            },
            "Retour aux achats"
          )
        )
      );
    }
    e.default = r.a.create({
      component: function () {
        return i.a.createElement(
          u.a,
          { store: window.store },
          i.a.createElement(s, null)
        );
      },
      configuration: { tagname: "react-app" },
      plugins: [],
    });
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(3),
      o = n(4),
      i = n(0),
      a = n.n(i),
      c = n(8),
      u = n.n(c),
      s = n(1);
    var l = function (t) {
        var e = Object(i.useState)(t.product),
          n = Object(o.a)(e, 2),
          c = n[0],
          l = (n[1], Object(s.b)());
        return a.a.createElement(
          r.b,
          { styles: u.a },
          a.a.createElement(
            "section",
            {
              onClick: function () {
                console.log(c), l(window.actions.addToBasket(c));
              },
            },
            a.a.createElement("h3", null, "Ajouter ", c.name, " au panier")
          )
        );
      },
      f = function (t) {
        var e = JSON.parse(t.product);
        return a.a.createElement(
          s.a,
          { store: window.store },
          a.a.createElement(l, { product: e })
        );
      };
    f.defaultProps = { product: { name: "N/A", id: -1 } };
    e.default = r.a.create({
      component: f,
      configuration: { tagname: "react-button" },
      plugins: [],
    });
  },
  function (t, e, n) {
    "use strict";
    var r = n(7),
      o = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0,
      },
      i = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0,
      },
      a = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0,
      },
      c = {};
    function u(t) {
      return r.isMemo(t) ? a : c[t.$$typeof] || o;
    }
    (c[r.ForwardRef] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
      (c[r.Memo] = a);
    var s = Object.defineProperty,
      l = Object.getOwnPropertyNames,
      f = Object.getOwnPropertySymbols,
      p = Object.getOwnPropertyDescriptor,
      h = Object.getPrototypeOf,
      d = Object.prototype;
    t.exports = function t(e, n, r) {
      if ("string" !== typeof n) {
        if (d) {
          var o = h(n);
          o && o !== d && t(e, o, r);
        }
        var a = l(n);
        f && (a = a.concat(f(n)));
        for (var c = u(e), v = u(n), y = 0; y < a.length; ++y) {
          var b = a[y];
          if (!i[b] && (!r || !r[b]) && (!v || !v[b]) && (!c || !c[b])) {
            var m = p(n, b);
            try {
              s(e, b, m);
            } catch (g) {}
          }
        }
      }
      return e;
    };
  },
  function (t, e, n) {
    "use strict";
    (function (t, r) {
      var o,
        i = n(19);
      o =
        "undefined" !== typeof self
          ? self
          : "undefined" !== typeof window
          ? window
          : "undefined" !== typeof t
          ? t
          : r;
      var a = Object(i.a)(o);
      e.a = a;
    }.call(this, n(13), n(30)(t)));
  },
  function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (r) {
      "object" === typeof window && (n = window);
    }
    t.exports = n;
  },
  function (t, e, n) {
    "use strict";
    t.exports = function (t) {
      var e = [];
      return (
        (e.toString = function () {
          return this.map(function (e) {
            var n = (function (t, e) {
              var n = t[1] || "",
                r = t[3];
              if (!r) return n;
              if (e && "function" === typeof btoa) {
                var o = (function (t) {
                    var e = btoa(
                        unescape(encodeURIComponent(JSON.stringify(t)))
                      ),
                      n = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                        e
                      );
                    return "/*# ".concat(n, " */");
                  })(r),
                  i = r.sources.map(function (t) {
                    return "/*# sourceURL="
                      .concat(r.sourceRoot || "")
                      .concat(t, " */");
                  });
                return [n].concat(i).concat([o]).join("\n");
              }
              return [n].join("\n");
            })(e, t);
            return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n;
          }).join("");
        }),
        (e.i = function (t, n, r) {
          "string" === typeof t && (t = [[null, t, ""]]);
          var o = {};
          if (r)
            for (var i = 0; i < this.length; i++) {
              var a = this[i][0];
              null != a && (o[a] = !0);
            }
          for (var c = 0; c < t.length; c++) {
            var u = [].concat(t[c]);
            (r && o[u[0]]) ||
              (n &&
                (u[2]
                  ? (u[2] = "".concat(n, " and ").concat(u[2]))
                  : (u[2] = n)),
              e.push(u));
          }
        }),
        e
      );
    };
  },
  function (t, e, n) {
    (function (t, n) {
      var r = "[object Arguments]",
        o = "[object Function]",
        i = "[object GeneratorFunction]",
        a = "[object Map]",
        c = "[object Set]",
        u = /\w*$/,
        s = /^\[object .+?Constructor\]$/,
        l = /^(?:0|[1-9]\d*)$/,
        f = {};
      (f[r] = f["[object Array]"] = f["[object ArrayBuffer]"] = f[
        "[object DataView]"
      ] = f["[object Boolean]"] = f["[object Date]"] = f[
        "[object Float32Array]"
      ] = f["[object Float64Array]"] = f["[object Int8Array]"] = f[
        "[object Int16Array]"
      ] = f["[object Int32Array]"] = f[a] = f["[object Number]"] = f[
        "[object Object]"
      ] = f["[object RegExp]"] = f[c] = f["[object String]"] = f[
        "[object Symbol]"
      ] = f["[object Uint8Array]"] = f["[object Uint8ClampedArray]"] = f[
        "[object Uint16Array]"
      ] = f["[object Uint32Array]"] = !0),
        (f["[object Error]"] = f[o] = f["[object WeakMap]"] = !1);
      var p = "object" == typeof t && t && t.Object === Object && t,
        h = "object" == typeof self && self && self.Object === Object && self,
        d = p || h || Function("return this")(),
        v = e && !e.nodeType && e,
        y = v && "object" == typeof n && n && !n.nodeType && n,
        b = y && y.exports === v;
      function m(t, e) {
        return t.set(e[0], e[1]), t;
      }
      function g(t, e) {
        return t.add(e), t;
      }
      function w(t, e, n, r) {
        var o = -1,
          i = t ? t.length : 0;
        for (r && i && (n = t[++o]); ++o < i; ) n = e(n, t[o], o, t);
        return n;
      }
      function j(t) {
        var e = !1;
        if (null != t && "function" != typeof t.toString)
          try {
            e = !!(t + "");
          } catch (n) {}
        return e;
      }
      function _(t) {
        var e = -1,
          n = Array(t.size);
        return (
          t.forEach(function (t, r) {
            n[++e] = [r, t];
          }),
          n
        );
      }
      function x(t, e) {
        return function (n) {
          return t(e(n));
        };
      }
      function S(t) {
        var e = -1,
          n = Array(t.size);
        return (
          t.forEach(function (t) {
            n[++e] = t;
          }),
          n
        );
      }
      var O = Array.prototype,
        E = Function.prototype,
        k = Object.prototype,
        P = d["__core-js_shared__"],
        C = (function () {
          var t = /[^.]+$/.exec((P && P.keys && P.keys.IE_PROTO) || "");
          return t ? "Symbol(src)_1." + t : "";
        })(),
        A = E.toString,
        T = k.hasOwnProperty,
        L = k.toString,
        N = RegExp(
          "^" +
            A.call(T)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        ),
        R = b ? d.Buffer : void 0,
        M = d.Symbol,
        D = d.Uint8Array,
        $ = x(Object.getPrototypeOf, Object),
        F = Object.create,
        I = k.propertyIsEnumerable,
        U = O.splice,
        B = Object.getOwnPropertySymbols,
        W = R ? R.isBuffer : void 0,
        G = x(Object.keys, Object),
        V = vt(d, "DataView"),
        z = vt(d, "Map"),
        q = vt(d, "Promise"),
        H = vt(d, "Set"),
        Y = vt(d, "WeakMap"),
        J = vt(Object, "create"),
        K = wt(V),
        X = wt(z),
        Q = wt(q),
        Z = wt(H),
        tt = wt(Y),
        et = M ? M.prototype : void 0,
        nt = et ? et.valueOf : void 0;
      function rt(t) {
        var e = -1,
          n = t ? t.length : 0;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      function ot(t) {
        var e = -1,
          n = t ? t.length : 0;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      function it(t) {
        var e = -1,
          n = t ? t.length : 0;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      function at(t) {
        this.__data__ = new ot(t);
      }
      function ct(t, e) {
        var n =
            _t(t) ||
            (function (t) {
              return (
                (function (t) {
                  return (
                    (function (t) {
                      return !!t && "object" == typeof t;
                    })(t) && xt(t)
                  );
                })(t) &&
                T.call(t, "callee") &&
                (!I.call(t, "callee") || L.call(t) == r)
              );
            })(t)
              ? (function (t, e) {
                  for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
                  return r;
                })(t.length, String)
              : [],
          o = n.length,
          i = !!o;
        for (var a in t)
          (!e && !T.call(t, a)) ||
            (i && ("length" == a || mt(a, o))) ||
            n.push(a);
        return n;
      }
      function ut(t, e, n) {
        var r = t[e];
        (T.call(t, e) && jt(r, n) && (void 0 !== n || e in t)) || (t[e] = n);
      }
      function st(t, e) {
        for (var n = t.length; n--; ) if (jt(t[n][0], e)) return n;
        return -1;
      }
      function lt(t, e, n, s, l, p, h) {
        var d;
        if ((s && (d = p ? s(t, l, p, h) : s(t)), void 0 !== d)) return d;
        if (!Et(t)) return t;
        var v = _t(t);
        if (v) {
          if (
            ((d = (function (t) {
              var e = t.length,
                n = t.constructor(e);
              e &&
                "string" == typeof t[0] &&
                T.call(t, "index") &&
                ((n.index = t.index), (n.input = t.input));
              return n;
            })(t)),
            !e)
          )
            return (function (t, e) {
              var n = -1,
                r = t.length;
              e || (e = Array(r));
              for (; ++n < r; ) e[n] = t[n];
              return e;
            })(t, d);
        } else {
          var y = bt(t),
            b = y == o || y == i;
          if (St(t))
            return (function (t, e) {
              if (e) return t.slice();
              var n = new t.constructor(t.length);
              return t.copy(n), n;
            })(t, e);
          if ("[object Object]" == y || y == r || (b && !p)) {
            if (j(t)) return p ? t : {};
            if (
              ((d = (function (t) {
                return "function" != typeof t.constructor || gt(t)
                  ? {}
                  : ((e = $(t)), Et(e) ? F(e) : {});
                var e;
              })(b ? {} : t)),
              !e)
            )
              return (function (t, e) {
                return ht(t, yt(t), e);
              })(
                t,
                (function (t, e) {
                  return t && ht(e, kt(e), t);
                })(d, t)
              );
          } else {
            if (!f[y]) return p ? t : {};
            d = (function (t, e, n, r) {
              var o = t.constructor;
              switch (e) {
                case "[object ArrayBuffer]":
                  return pt(t);
                case "[object Boolean]":
                case "[object Date]":
                  return new o(+t);
                case "[object DataView]":
                  return (function (t, e) {
                    var n = e ? pt(t.buffer) : t.buffer;
                    return new t.constructor(n, t.byteOffset, t.byteLength);
                  })(t, r);
                case "[object Float32Array]":
                case "[object Float64Array]":
                case "[object Int8Array]":
                case "[object Int16Array]":
                case "[object Int32Array]":
                case "[object Uint8Array]":
                case "[object Uint8ClampedArray]":
                case "[object Uint16Array]":
                case "[object Uint32Array]":
                  return (function (t, e) {
                    var n = e ? pt(t.buffer) : t.buffer;
                    return new t.constructor(n, t.byteOffset, t.length);
                  })(t, r);
                case a:
                  return (function (t, e, n) {
                    return w(e ? n(_(t), !0) : _(t), m, new t.constructor());
                  })(t, r, n);
                case "[object Number]":
                case "[object String]":
                  return new o(t);
                case "[object RegExp]":
                  return (function (t) {
                    var e = new t.constructor(t.source, u.exec(t));
                    return (e.lastIndex = t.lastIndex), e;
                  })(t);
                case c:
                  return (function (t, e, n) {
                    return w(e ? n(S(t), !0) : S(t), g, new t.constructor());
                  })(t, r, n);
                case "[object Symbol]":
                  return (i = t), nt ? Object(nt.call(i)) : {};
              }
              var i;
            })(t, y, lt, e);
          }
        }
        h || (h = new at());
        var x = h.get(t);
        if (x) return x;
        if ((h.set(t, d), !v))
          var O = n
            ? (function (t) {
                return (function (t, e, n) {
                  var r = e(t);
                  return _t(t)
                    ? r
                    : (function (t, e) {
                        for (var n = -1, r = e.length, o = t.length; ++n < r; )
                          t[o + n] = e[n];
                        return t;
                      })(r, n(t));
                })(t, kt, yt);
              })(t)
            : kt(t);
        return (
          (function (t, e) {
            for (
              var n = -1, r = t ? t.length : 0;
              ++n < r && !1 !== e(t[n], n, t);

            );
          })(O || t, function (r, o) {
            O && (r = t[(o = r)]), ut(d, o, lt(r, e, n, s, o, t, h));
          }),
          d
        );
      }
      function ft(t) {
        return (
          !(!Et(t) || ((e = t), C && C in e)) &&
          (Ot(t) || j(t) ? N : s).test(wt(t))
        );
        var e;
      }
      function pt(t) {
        var e = new t.constructor(t.byteLength);
        return new D(e).set(new D(t)), e;
      }
      function ht(t, e, n, r) {
        n || (n = {});
        for (var o = -1, i = e.length; ++o < i; ) {
          var a = e[o],
            c = r ? r(n[a], t[a], a, n, t) : void 0;
          ut(n, a, void 0 === c ? t[a] : c);
        }
        return n;
      }
      function dt(t, e) {
        var n = t.__data__;
        return (function (t) {
          var e = typeof t;
          return "string" == e ||
            "number" == e ||
            "symbol" == e ||
            "boolean" == e
            ? "__proto__" !== t
            : null === t;
        })(e)
          ? n["string" == typeof e ? "string" : "hash"]
          : n.map;
      }
      function vt(t, e) {
        var n = (function (t, e) {
          return null == t ? void 0 : t[e];
        })(t, e);
        return ft(n) ? n : void 0;
      }
      (rt.prototype.clear = function () {
        this.__data__ = J ? J(null) : {};
      }),
        (rt.prototype.delete = function (t) {
          return this.has(t) && delete this.__data__[t];
        }),
        (rt.prototype.get = function (t) {
          var e = this.__data__;
          if (J) {
            var n = e[t];
            return "__lodash_hash_undefined__" === n ? void 0 : n;
          }
          return T.call(e, t) ? e[t] : void 0;
        }),
        (rt.prototype.has = function (t) {
          var e = this.__data__;
          return J ? void 0 !== e[t] : T.call(e, t);
        }),
        (rt.prototype.set = function (t, e) {
          return (
            (this.__data__[t] =
              J && void 0 === e ? "__lodash_hash_undefined__" : e),
            this
          );
        }),
        (ot.prototype.clear = function () {
          this.__data__ = [];
        }),
        (ot.prototype.delete = function (t) {
          var e = this.__data__,
            n = st(e, t);
          return (
            !(n < 0) && (n == e.length - 1 ? e.pop() : U.call(e, n, 1), !0)
          );
        }),
        (ot.prototype.get = function (t) {
          var e = this.__data__,
            n = st(e, t);
          return n < 0 ? void 0 : e[n][1];
        }),
        (ot.prototype.has = function (t) {
          return st(this.__data__, t) > -1;
        }),
        (ot.prototype.set = function (t, e) {
          var n = this.__data__,
            r = st(n, t);
          return r < 0 ? n.push([t, e]) : (n[r][1] = e), this;
        }),
        (it.prototype.clear = function () {
          this.__data__ = {
            hash: new rt(),
            map: new (z || ot)(),
            string: new rt(),
          };
        }),
        (it.prototype.delete = function (t) {
          return dt(this, t).delete(t);
        }),
        (it.prototype.get = function (t) {
          return dt(this, t).get(t);
        }),
        (it.prototype.has = function (t) {
          return dt(this, t).has(t);
        }),
        (it.prototype.set = function (t, e) {
          return dt(this, t).set(t, e), this;
        }),
        (at.prototype.clear = function () {
          this.__data__ = new ot();
        }),
        (at.prototype.delete = function (t) {
          return this.__data__.delete(t);
        }),
        (at.prototype.get = function (t) {
          return this.__data__.get(t);
        }),
        (at.prototype.has = function (t) {
          return this.__data__.has(t);
        }),
        (at.prototype.set = function (t, e) {
          var n = this.__data__;
          if (n instanceof ot) {
            var r = n.__data__;
            if (!z || r.length < 199) return r.push([t, e]), this;
            n = this.__data__ = new it(r);
          }
          return n.set(t, e), this;
        });
      var yt = B
          ? x(B, Object)
          : function () {
              return [];
            },
        bt = function (t) {
          return L.call(t);
        };
      function mt(t, e) {
        return (
          !!(e = null == e ? 9007199254740991 : e) &&
          ("number" == typeof t || l.test(t)) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
        );
      }
      function gt(t) {
        var e = t && t.constructor;
        return t === (("function" == typeof e && e.prototype) || k);
      }
      function wt(t) {
        if (null != t) {
          try {
            return A.call(t);
          } catch (e) {}
          try {
            return t + "";
          } catch (e) {}
        }
        return "";
      }
      function jt(t, e) {
        return t === e || (t !== t && e !== e);
      }
      ((V && "[object DataView]" != bt(new V(new ArrayBuffer(1)))) ||
        (z && bt(new z()) != a) ||
        (q && "[object Promise]" != bt(q.resolve())) ||
        (H && bt(new H()) != c) ||
        (Y && "[object WeakMap]" != bt(new Y()))) &&
        (bt = function (t) {
          var e = L.call(t),
            n = "[object Object]" == e ? t.constructor : void 0,
            r = n ? wt(n) : void 0;
          if (r)
            switch (r) {
              case K:
                return "[object DataView]";
              case X:
                return a;
              case Q:
                return "[object Promise]";
              case Z:
                return c;
              case tt:
                return "[object WeakMap]";
            }
          return e;
        });
      var _t = Array.isArray;
      function xt(t) {
        return (
          null != t &&
          (function (t) {
            return (
              "number" == typeof t &&
              t > -1 &&
              t % 1 == 0 &&
              t <= 9007199254740991
            );
          })(t.length) &&
          !Ot(t)
        );
      }
      var St =
        W ||
        function () {
          return !1;
        };
      function Ot(t) {
        var e = Et(t) ? L.call(t) : "";
        return e == o || e == i;
      }
      function Et(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e);
      }
      function kt(t) {
        return xt(t)
          ? ct(t)
          : (function (t) {
              if (!gt(t)) return G(t);
              var e = [];
              for (var n in Object(t))
                T.call(t, n) && "constructor" != n && e.push(n);
              return e;
            })(t);
      }
      n.exports = function (t) {
        return lt(t, !0, !0);
      };
    }.call(this, n(13), n(24)(t)));
  },
  function (t, e, n) {
    var r;
    !(function () {
      function o(t, e, n) {
        return t.call.apply(t.bind, arguments);
      }
      function i(t, e, n) {
        if (!t) throw Error();
        if (2 < arguments.length) {
          var r = Array.prototype.slice.call(arguments, 2);
          return function () {
            var n = Array.prototype.slice.call(arguments);
            return Array.prototype.unshift.apply(n, r), t.apply(e, n);
          };
        }
        return function () {
          return t.apply(e, arguments);
        };
      }
      function a(t, e, n) {
        return (a =
          Function.prototype.bind &&
          -1 != Function.prototype.bind.toString().indexOf("native code")
            ? o
            : i).apply(null, arguments);
      }
      var c =
        Date.now ||
        function () {
          return +new Date();
        };
      function u(t, e) {
        (this.a = t), (this.o = e || t), (this.c = this.o.document);
      }
      var s = !!window.FontFace;
      function l(t, e, n, r) {
        if (((e = t.c.createElement(e)), n))
          for (var o in n)
            n.hasOwnProperty(o) &&
              ("style" == o
                ? (e.style.cssText = n[o])
                : e.setAttribute(o, n[o]));
        return r && e.appendChild(t.c.createTextNode(r)), e;
      }
      function f(t, e, n) {
        (t = t.c.getElementsByTagName(e)[0]) || (t = document.documentElement),
          t.insertBefore(n, t.lastChild);
      }
      function p(t) {
        t.parentNode && t.parentNode.removeChild(t);
      }
      function h(t, e, n) {
        (e = e || []), (n = n || []);
        for (var r = t.className.split(/\s+/), o = 0; o < e.length; o += 1) {
          for (var i = !1, a = 0; a < r.length; a += 1)
            if (e[o] === r[a]) {
              i = !0;
              break;
            }
          i || r.push(e[o]);
        }
        for (e = [], o = 0; o < r.length; o += 1) {
          for (i = !1, a = 0; a < n.length; a += 1)
            if (r[o] === n[a]) {
              i = !0;
              break;
            }
          i || e.push(r[o]);
        }
        t.className = e
          .join(" ")
          .replace(/\s+/g, " ")
          .replace(/^\s+|\s+$/, "");
      }
      function d(t, e) {
        for (var n = t.className.split(/\s+/), r = 0, o = n.length; r < o; r++)
          if (n[r] == e) return !0;
        return !1;
      }
      function v(t, e, n) {
        function r() {
          c && o && i && (c(a), (c = null));
        }
        e = l(t, "link", { rel: "stylesheet", href: e, media: "all" });
        var o = !1,
          i = !0,
          a = null,
          c = n || null;
        s
          ? ((e.onload = function () {
              (o = !0), r();
            }),
            (e.onerror = function () {
              (o = !0), (a = Error("Stylesheet failed to load")), r();
            }))
          : setTimeout(function () {
              (o = !0), r();
            }, 0),
          f(t, "head", e);
      }
      function y(t, e, n, r) {
        var o = t.c.getElementsByTagName("head")[0];
        if (o) {
          var i = l(t, "script", { src: e }),
            a = !1;
          return (
            (i.onload = i.onreadystatechange = function () {
              a ||
                (this.readyState &&
                  "loaded" != this.readyState &&
                  "complete" != this.readyState) ||
                ((a = !0),
                n && n(null),
                (i.onload = i.onreadystatechange = null),
                "HEAD" == i.parentNode.tagName && o.removeChild(i));
            }),
            o.appendChild(i),
            setTimeout(function () {
              a || ((a = !0), n && n(Error("Script load timeout")));
            }, r || 5e3),
            i
          );
        }
        return null;
      }
      function b() {
        (this.a = 0), (this.c = null);
      }
      function m(t) {
        return (
          t.a++,
          function () {
            t.a--, w(t);
          }
        );
      }
      function g(t, e) {
        (t.c = e), w(t);
      }
      function w(t) {
        0 == t.a && t.c && (t.c(), (t.c = null));
      }
      function j(t) {
        this.a = t || "-";
      }
      function _(t, e) {
        (this.c = t), (this.f = 4), (this.a = "n");
        var n = (e || "n4").match(/^([nio])([1-9])$/i);
        n && ((this.a = n[1]), (this.f = parseInt(n[2], 10)));
      }
      function x(t) {
        var e = [];
        t = t.split(/,\s*/);
        for (var n = 0; n < t.length; n++) {
          var r = t[n].replace(/['"]/g, "");
          -1 != r.indexOf(" ") || /^\d/.test(r)
            ? e.push("'" + r + "'")
            : e.push(r);
        }
        return e.join(",");
      }
      function S(t) {
        return t.a + t.f;
      }
      function O(t) {
        var e = "normal";
        return "o" === t.a ? (e = "oblique") : "i" === t.a && (e = "italic"), e;
      }
      function E(t) {
        var e = 4,
          n = "n",
          r = null;
        return (
          t &&
            ((r = t.match(/(normal|oblique|italic)/i)) &&
              r[1] &&
              (n = r[1].substr(0, 1).toLowerCase()),
            (r = t.match(/([1-9]00|normal|bold)/i)) &&
              r[1] &&
              (/bold/i.test(r[1])
                ? (e = 7)
                : /[1-9]00/.test(r[1]) &&
                  (e = parseInt(r[1].substr(0, 1), 10)))),
          n + e
        );
      }
      function k(t, e) {
        (this.c = t),
          (this.f = t.o.document.documentElement),
          (this.h = e),
          (this.a = new j("-")),
          (this.j = !1 !== e.events),
          (this.g = !1 !== e.classes);
      }
      function P(t) {
        if (t.g) {
          var e = d(t.f, t.a.c("wf", "active")),
            n = [],
            r = [t.a.c("wf", "loading")];
          e || n.push(t.a.c("wf", "inactive")), h(t.f, n, r);
        }
        C(t, "inactive");
      }
      function C(t, e, n) {
        t.j && t.h[e] && (n ? t.h[e](n.c, S(n)) : t.h[e]());
      }
      function A() {
        this.c = {};
      }
      function T(t, e) {
        (this.c = t),
          (this.f = e),
          (this.a = l(this.c, "span", { "aria-hidden": "true" }, this.f));
      }
      function L(t) {
        f(t.c, "body", t.a);
      }
      function N(t) {
        return (
          "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" +
          x(t.c) +
          ";font-style:" +
          O(t) +
          ";font-weight:" +
          t.f +
          "00;"
        );
      }
      function R(t, e, n, r, o, i) {
        (this.g = t),
          (this.j = e),
          (this.a = r),
          (this.c = n),
          (this.f = o || 3e3),
          (this.h = i || void 0);
      }
      function M(t, e, n, r, o, i, a) {
        (this.v = t),
          (this.B = e),
          (this.c = n),
          (this.a = r),
          (this.s = a || "BESbswy"),
          (this.f = {}),
          (this.w = o || 3e3),
          (this.u = i || null),
          (this.m = this.j = this.h = this.g = null),
          (this.g = new T(this.c, this.s)),
          (this.h = new T(this.c, this.s)),
          (this.j = new T(this.c, this.s)),
          (this.m = new T(this.c, this.s)),
          (t = N((t = new _(this.a.c + ",serif", S(this.a))))),
          (this.g.a.style.cssText = t),
          (t = N((t = new _(this.a.c + ",sans-serif", S(this.a))))),
          (this.h.a.style.cssText = t),
          (t = N((t = new _("serif", S(this.a))))),
          (this.j.a.style.cssText = t),
          (t = N((t = new _("sans-serif", S(this.a))))),
          (this.m.a.style.cssText = t),
          L(this.g),
          L(this.h),
          L(this.j),
          L(this.m);
      }
      (j.prototype.c = function (t) {
        for (var e = [], n = 0; n < arguments.length; n++)
          e.push(arguments[n].replace(/[\W_]+/g, "").toLowerCase());
        return e.join(this.a);
      }),
        (R.prototype.start = function () {
          var t = this.c.o.document,
            e = this,
            n = c(),
            r = new Promise(function (r, o) {
              !(function i() {
                c() - n >= e.f
                  ? o()
                  : t.fonts
                      .load(
                        (function (t) {
                          return O(t) + " " + t.f + "00 300px " + x(t.c);
                        })(e.a),
                        e.h
                      )
                      .then(
                        function (t) {
                          1 <= t.length ? r() : setTimeout(i, 25);
                        },
                        function () {
                          o();
                        }
                      );
              })();
            }),
            o = null,
            i = new Promise(function (t, n) {
              o = setTimeout(n, e.f);
            });
          Promise.race([i, r]).then(
            function () {
              o && (clearTimeout(o), (o = null)), e.g(e.a);
            },
            function () {
              e.j(e.a);
            }
          );
        });
      var D = { D: "serif", C: "sans-serif" },
        $ = null;
      function F() {
        if (null === $) {
          var t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
            window.navigator.userAgent
          );
          $ =
            !!t &&
            (536 > parseInt(t[1], 10) ||
              (536 === parseInt(t[1], 10) && 11 >= parseInt(t[2], 10)));
        }
        return $;
      }
      function I(t, e, n) {
        for (var r in D)
          if (D.hasOwnProperty(r) && e === t.f[D[r]] && n === t.f[D[r]])
            return !0;
        return !1;
      }
      function U(t) {
        var e,
          n = t.g.a.offsetWidth,
          r = t.h.a.offsetWidth;
        (e = n === t.f.serif && r === t.f["sans-serif"]) ||
          (e = F() && I(t, n, r)),
          e
            ? c() - t.A >= t.w
              ? F() && I(t, n, r) && (null === t.u || t.u.hasOwnProperty(t.a.c))
                ? B(t, t.v)
                : B(t, t.B)
              : (function (t) {
                  setTimeout(
                    a(function () {
                      U(this);
                    }, t),
                    50
                  );
                })(t)
            : B(t, t.v);
      }
      function B(t, e) {
        setTimeout(
          a(function () {
            p(this.g.a), p(this.h.a), p(this.j.a), p(this.m.a), e(this.a);
          }, t),
          0
        );
      }
      function W(t, e, n) {
        (this.c = t),
          (this.a = e),
          (this.f = 0),
          (this.m = this.j = !1),
          (this.s = n);
      }
      M.prototype.start = function () {
        (this.f.serif = this.j.a.offsetWidth),
          (this.f["sans-serif"] = this.m.a.offsetWidth),
          (this.A = c()),
          U(this);
      };
      var G = null;
      function V(t) {
        0 == --t.f &&
          t.j &&
          (t.m
            ? ((t = t.a).g &&
                h(
                  t.f,
                  [t.a.c("wf", "active")],
                  [t.a.c("wf", "loading"), t.a.c("wf", "inactive")]
                ),
              C(t, "active"))
            : P(t.a));
      }
      function z(t) {
        (this.j = t), (this.a = new A()), (this.h = 0), (this.f = this.g = !0);
      }
      function q(t, e, n, r, o) {
        var i = 0 == --t.h;
        (t.f || t.g) &&
          setTimeout(function () {
            var t = o || null,
              c = r || {};
            if (0 === n.length && i) P(e.a);
            else {
              (e.f += n.length), i && (e.j = i);
              var u,
                s = [];
              for (u = 0; u < n.length; u++) {
                var l = n[u],
                  f = c[l.c],
                  p = e.a,
                  d = l;
                if (
                  (p.g &&
                    h(p.f, [p.a.c("wf", d.c, S(d).toString(), "loading")]),
                  C(p, "fontloading", d),
                  (p = null),
                  null === G)
                )
                  if (window.FontFace) {
                    d = /Gecko.*Firefox\/(\d+)/.exec(
                      window.navigator.userAgent
                    );
                    var v =
                      /OS X.*Version\/10\..*Safari/.exec(
                        window.navigator.userAgent
                      ) && /Apple/.exec(window.navigator.vendor);
                    G = d ? 42 < parseInt(d[1], 10) : !v;
                  } else G = !1;
                (p = G
                  ? new R(a(e.g, e), a(e.h, e), e.c, l, e.s, f)
                  : new M(a(e.g, e), a(e.h, e), e.c, l, e.s, t, f)),
                  s.push(p);
              }
              for (u = 0; u < s.length; u++) s[u].start();
            }
          }, 0);
      }
      function H(t, e) {
        (this.c = t), (this.a = e);
      }
      function Y(t, e) {
        (this.c = t), (this.a = e);
      }
      function J(t, e) {
        (this.c = t || K), (this.a = []), (this.f = []), (this.g = e || "");
      }
      (W.prototype.g = function (t) {
        var e = this.a;
        e.g &&
          h(
            e.f,
            [e.a.c("wf", t.c, S(t).toString(), "active")],
            [
              e.a.c("wf", t.c, S(t).toString(), "loading"),
              e.a.c("wf", t.c, S(t).toString(), "inactive"),
            ]
          ),
          C(e, "fontactive", t),
          (this.m = !0),
          V(this);
      }),
        (W.prototype.h = function (t) {
          var e = this.a;
          if (e.g) {
            var n = d(e.f, e.a.c("wf", t.c, S(t).toString(), "active")),
              r = [],
              o = [e.a.c("wf", t.c, S(t).toString(), "loading")];
            n || r.push(e.a.c("wf", t.c, S(t).toString(), "inactive")),
              h(e.f, r, o);
          }
          C(e, "fontinactive", t), V(this);
        }),
        (z.prototype.load = function (t) {
          (this.c = new u(this.j, t.context || this.j)),
            (this.g = !1 !== t.events),
            (this.f = !1 !== t.classes),
            (function (t, e, n) {
              var r = [],
                o = n.timeout;
              !(function (t) {
                t.g && h(t.f, [t.a.c("wf", "loading")]), C(t, "loading");
              })(e);
              r = (function (t, e, n) {
                var r,
                  o = [];
                for (r in e)
                  if (e.hasOwnProperty(r)) {
                    var i = t.c[r];
                    i && o.push(i(e[r], n));
                  }
                return o;
              })(t.a, n, t.c);
              var i = new W(t.c, e, o);
              for (t.h = r.length, e = 0, n = r.length; e < n; e++)
                r[e].load(function (e, n, r) {
                  q(t, i, e, n, r);
                });
            })(this, new k(this.c, t), t);
        }),
        (H.prototype.load = function (t) {
          var e = this,
            n = e.a.projectId,
            r = e.a.version;
          if (n) {
            var o = e.c.o;
            y(
              this.c,
              (e.a.api || "https://fast.fonts.net/jsapi") +
                "/" +
                n +
                ".js" +
                (r ? "?v=" + r : ""),
              function (r) {
                r
                  ? t([])
                  : ((o["__MonotypeConfiguration__" + n] = function () {
                      return e.a;
                    }),
                    (function e() {
                      if (o["__mti_fntLst" + n]) {
                        var r,
                          i = o["__mti_fntLst" + n](),
                          a = [];
                        if (i)
                          for (var c = 0; c < i.length; c++) {
                            var u = i[c].fontfamily;
                            void 0 != i[c].fontStyle &&
                            void 0 != i[c].fontWeight
                              ? ((r = i[c].fontStyle + i[c].fontWeight),
                                a.push(new _(u, r)))
                              : a.push(new _(u));
                          }
                        t(a);
                      } else
                        setTimeout(function () {
                          e();
                        }, 50);
                    })());
              }
            ).id = "__MonotypeAPIScript__" + n;
          } else t([]);
        }),
        (Y.prototype.load = function (t) {
          var e,
            n,
            r = this.a.urls || [],
            o = this.a.families || [],
            i = this.a.testStrings || {},
            a = new b();
          for (e = 0, n = r.length; e < n; e++) v(this.c, r[e], m(a));
          var c = [];
          for (e = 0, n = o.length; e < n; e++)
            if ((r = o[e].split(":"))[1])
              for (var u = r[1].split(","), s = 0; s < u.length; s += 1)
                c.push(new _(r[0], u[s]));
            else c.push(new _(r[0]));
          g(a, function () {
            t(c, i);
          });
        });
      var K = "https://fonts.googleapis.com/css";
      function X(t) {
        (this.f = t), (this.a = []), (this.c = {});
      }
      var Q = {
          latin: "BESbswy",
          "latin-ext": "\xe7\xf6\xfc\u011f\u015f",
          cyrillic: "\u0439\u044f\u0416",
          greek: "\u03b1\u03b2\u03a3",
          khmer: "\u1780\u1781\u1782",
          Hanuman: "\u1780\u1781\u1782",
        },
        Z = {
          thin: "1",
          extralight: "2",
          "extra-light": "2",
          ultralight: "2",
          "ultra-light": "2",
          light: "3",
          regular: "4",
          book: "4",
          medium: "5",
          "semi-bold": "6",
          semibold: "6",
          "demi-bold": "6",
          demibold: "6",
          bold: "7",
          "extra-bold": "8",
          extrabold: "8",
          "ultra-bold": "8",
          ultrabold: "8",
          black: "9",
          heavy: "9",
          l: "3",
          r: "4",
          b: "7",
        },
        tt = { i: "i", italic: "i", n: "n", normal: "n" },
        et = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
      function nt(t, e) {
        (this.c = t), (this.a = e);
      }
      var rt = { Arimo: !0, Cousine: !0, Tinos: !0 };
      function ot(t, e) {
        (this.c = t), (this.a = e);
      }
      function it(t, e) {
        (this.c = t), (this.f = e), (this.a = []);
      }
      (nt.prototype.load = function (t) {
        var e = new b(),
          n = this.c,
          r = new J(this.a.api, this.a.text),
          o = this.a.families;
        !(function (t, e) {
          for (var n = e.length, r = 0; r < n; r++) {
            var o = e[r].split(":");
            3 == o.length && t.f.push(o.pop());
            var i = "";
            2 == o.length && "" != o[1] && (i = ":"), t.a.push(o.join(i));
          }
        })(r, o);
        var i = new X(o);
        !(function (t) {
          for (var e = t.f.length, n = 0; n < e; n++) {
            var r = t.f[n].split(":"),
              o = r[0].replace(/\+/g, " "),
              i = ["n4"];
            if (2 <= r.length) {
              var a;
              if (((a = []), (c = r[1])))
                for (var c, u = (c = c.split(",")).length, s = 0; s < u; s++) {
                  var l;
                  if ((l = c[s]).match(/^[\w-]+$/))
                    if (null == (p = et.exec(l.toLowerCase()))) l = "";
                    else {
                      if (
                        ((l = null == (l = p[2]) || "" == l ? "n" : tt[l]),
                        null == (p = p[1]) || "" == p)
                      )
                        p = "4";
                      else
                        var f = Z[p],
                          p = f || (isNaN(p) ? "4" : p.substr(0, 1));
                      l = [l, p].join("");
                    }
                  else l = "";
                  l && a.push(l);
                }
              0 < a.length && (i = a),
                3 == r.length &&
                  ((a = []),
                  0 < (r = (r = r[2]) ? r.split(",") : a).length &&
                    (r = Q[r[0]]) &&
                    (t.c[o] = r));
            }
            for (
              t.c[o] || ((r = Q[o]) && (t.c[o] = r)), r = 0;
              r < i.length;
              r += 1
            )
              t.a.push(new _(o, i[r]));
          }
        })(i),
          v(
            n,
            (function (t) {
              if (0 == t.a.length) throw Error("No fonts to load!");
              if (-1 != t.c.indexOf("kit=")) return t.c;
              for (var e = t.a.length, n = [], r = 0; r < e; r++)
                n.push(t.a[r].replace(/ /g, "+"));
              return (
                (e = t.c + "?family=" + n.join("%7C")),
                0 < t.f.length && (e += "&subset=" + t.f.join(",")),
                0 < t.g.length && (e += "&text=" + encodeURIComponent(t.g)),
                e
              );
            })(r),
            m(e)
          ),
          g(e, function () {
            t(i.a, i.c, rt);
          });
      }),
        (ot.prototype.load = function (t) {
          var e = this.a.id,
            n = this.c.o;
          e
            ? y(
                this.c,
                (this.a.api || "https://use.typekit.net") + "/" + e + ".js",
                function (e) {
                  if (e) t([]);
                  else if (
                    n.Typekit &&
                    n.Typekit.config &&
                    n.Typekit.config.fn
                  ) {
                    e = n.Typekit.config.fn;
                    for (var r = [], o = 0; o < e.length; o += 2)
                      for (var i = e[o], a = e[o + 1], c = 0; c < a.length; c++)
                        r.push(new _(i, a[c]));
                    try {
                      n.Typekit.load({ events: !1, classes: !1, async: !0 });
                    } catch (u) {}
                    t(r);
                  }
                },
                2e3
              )
            : t([]);
        }),
        (it.prototype.load = function (t) {
          var e = this.f.id,
            n = this.c.o,
            r = this;
          e
            ? (n.__webfontfontdeckmodule__ ||
                (n.__webfontfontdeckmodule__ = {}),
              (n.__webfontfontdeckmodule__[e] = function (e, n) {
                for (var o = 0, i = n.fonts.length; o < i; ++o) {
                  var a = n.fonts[o];
                  r.a.push(
                    new _(
                      a.name,
                      E("font-weight:" + a.weight + ";font-style:" + a.style)
                    )
                  );
                }
                t(r.a);
              }),
              y(
                this.c,
                (this.f.api || "https://f.fontdeck.com/s/css/js/") +
                  (function (t) {
                    return t.o.location.hostname || t.a.location.hostname;
                  })(this.c) +
                  "/" +
                  e +
                  ".js",
                function (e) {
                  e && t([]);
                }
              ))
            : t([]);
        });
      var at = new z(window);
      (at.a.c.custom = function (t, e) {
        return new Y(e, t);
      }),
        (at.a.c.fontdeck = function (t, e) {
          return new it(e, t);
        }),
        (at.a.c.monotype = function (t, e) {
          return new H(e, t);
        }),
        (at.a.c.typekit = function (t, e) {
          return new ot(e, t);
        }),
        (at.a.c.google = function (t, e) {
          return new nt(e, t);
        });
      var ct = { load: a(at.load, at) };
      void 0 ===
        (r = function () {
          return ct;
        }.call(e, n, e, t)) || (t.exports = r);
    })();
  },
  function (t, e, n) {
    "use strict";
    t.exports = function (t) {
      for (var e = 1, n = 0, r = 0, o = t.length, i = -4 & o; r < i; ) {
        for (var a = Math.min(r + 4096, i); r < a; r += 4)
          n +=
            (e += t.charCodeAt(r)) +
            (e += t.charCodeAt(r + 1)) +
            (e += t.charCodeAt(r + 2)) +
            (e += t.charCodeAt(r + 3));
        (e %= 65521), (n %= 65521);
      }
      for (; r < o; r++) n += e += t.charCodeAt(r);
      return (e %= 65521) | ((n %= 65521) << 16);
    };
  },
  function (t, e, n) {
    var r = n(25);
    t.exports = "string" === typeof r ? r : r.toString();
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      var e,
        n = t.Symbol;
      return (
        "function" === typeof n
          ? n.observable
            ? (e = n.observable)
            : ((e = n("observable")), (n.observable = e))
          : (e = "@@observable"),
        e
      );
    }
    n.d(e, "a", function () {
      return r;
    });
  },
  function (t, e, n) {
    n(21), n(32), (t.exports = n(33));
  },
  function (t, e, n) {
    "use strict";
    var r =
        (this && this.__awaiter) ||
        function (t, e, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(t) {
              try {
                u(r.next(t));
              } catch (e) {
                i(e);
              }
            }
            function c(t) {
              try {
                u(r.throw(t));
              } catch (e) {
                i(e);
              }
            }
            function u(t) {
              var e;
              t.done
                ? o(t.value)
                : ((e = t.value),
                  e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      })).then(a, c);
            }
            u((r = r.apply(t, e || [])).next());
          });
        },
      o =
        (this && this.__generator) ||
        function (t, e) {
          var n,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: c(0), throw: c(1), return: c(2) }),
            "function" === typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function c(i) {
            return function (c) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = e.call(t, a);
                  } catch (c) {
                    (i = [6, c]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, c]);
            };
          }
        },
      i = n(6).default,
      a = "https://unpkg.com/react@16/umd/react.production.min.js",
      c = "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js",
      u = function () {
        try {
          n(22);
        } catch (t) {
          console.warn(
            "File is not found: /Users/pierre.isabel/Desktop/Dev/microfront-with-wc-redux/react-app/src/index.js"
          );
        }
      };
    setTimeout(function () {
      return r(void 0, void 0, void 0, function () {
        var t;
        return o(this, function (e) {
          switch (e.label) {
            case 0:
              return window.React && window.ReactDOM
                ? (u(), [2])
                : [
                    4,
                    r(void 0, void 0, void 0, function () {
                      var t;
                      return o(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return (
                              e.trys.push([0, 5, , 6]),
                              [4, i(a, "reactBundleLoaded")]
                            );
                          case 1:
                            e.sent(), (e.label = 2);
                          case 2:
                            return [4, i(c, "reactBundleLoaded")];
                          case 3:
                            e.sent(), (e.label = 4);
                          case 4:
                            return [3, 6];
                          case 5:
                            return (t = e.sent()), console.error(t), [3, 6];
                          case 6:
                            return [2];
                        }
                      });
                    }),
                  ];
            case 1:
              e.sent(), (e.label = 2);
            case 2:
              return (
                e.trys.push([2, 4, , 5]),
                [
                  4,
                  new Promise(function (t, e) {
                    var n = 0,
                      r = setInterval(function () {
                        n >= 2500 &&
                          e(
                            new Error(
                              "Direflow Error: React & ReactDOM was unable to load"
                            )
                          ),
                          window.React &&
                            window.ReactDOM &&
                            (clearInterval(r), t()),
                          (n += 1);
                      });
                  }),
                ]
              );
            case 3:
              return e.sent(), u(), [3, 5];
            case 4:
              return (t = e.sent()), console.error(t.message), [3, 5];
            case 5:
              return [2];
          }
        });
      });
    });
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(9),
      o = n(10);
    r.default.then(function (t) {
      console.log("react-app is mounted on the DOM", t);
    }),
      o.default.then(function (t) {
        console.log("react-button is mounted on the DOM", t);
      });
  },
  function (t, e, n) {
    var r = (function (t) {
      "use strict";
      var e = Object.prototype,
        n = e.hasOwnProperty,
        r = "function" === typeof Symbol ? Symbol : {},
        o = r.iterator || "@@iterator",
        i = r.asyncIterator || "@@asyncIterator",
        a = r.toStringTag || "@@toStringTag";
      function c(t, e, n, r) {
        var o = e && e.prototype instanceof l ? e : l,
          i = Object.create(o.prototype),
          a = new _(r || []);
        return (
          (i._invoke = (function (t, e, n) {
            var r = "suspendedStart";
            return function (o, i) {
              if ("executing" === r)
                throw new Error("Generator is already running");
              if ("completed" === r) {
                if ("throw" === o) throw i;
                return S();
              }
              for (n.method = o, n.arg = i; ; ) {
                var a = n.delegate;
                if (a) {
                  var c = g(a, n);
                  if (c) {
                    if (c === s) continue;
                    return c;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = "executing";
                var l = u(t, e, n);
                if ("normal" === l.type) {
                  if (
                    ((r = n.done ? "completed" : "suspendedYield"), l.arg === s)
                  )
                    continue;
                  return { value: l.arg, done: n.done };
                }
                "throw" === l.type &&
                  ((r = "completed"), (n.method = "throw"), (n.arg = l.arg));
              }
            };
          })(t, n, a)),
          i
        );
      }
      function u(t, e, n) {
        try {
          return { type: "normal", arg: t.call(e, n) };
        } catch (r) {
          return { type: "throw", arg: r };
        }
      }
      t.wrap = c;
      var s = {};
      function l() {}
      function f() {}
      function p() {}
      var h = {};
      h[o] = function () {
        return this;
      };
      var d = Object.getPrototypeOf,
        v = d && d(d(x([])));
      v && v !== e && n.call(v, o) && (h = v);
      var y = (p.prototype = l.prototype = Object.create(h));
      function b(t) {
        ["next", "throw", "return"].forEach(function (e) {
          t[e] = function (t) {
            return this._invoke(e, t);
          };
        });
      }
      function m(t, e) {
        var r;
        this._invoke = function (o, i) {
          function a() {
            return new e(function (r, a) {
              !(function r(o, i, a, c) {
                var s = u(t[o], t, i);
                if ("throw" !== s.type) {
                  var l = s.arg,
                    f = l.value;
                  return f && "object" === typeof f && n.call(f, "__await")
                    ? e.resolve(f.__await).then(
                        function (t) {
                          r("next", t, a, c);
                        },
                        function (t) {
                          r("throw", t, a, c);
                        }
                      )
                    : e.resolve(f).then(
                        function (t) {
                          (l.value = t), a(l);
                        },
                        function (t) {
                          return r("throw", t, a, c);
                        }
                      );
                }
                c(s.arg);
              })(o, i, r, a);
            });
          }
          return (r = r ? r.then(a, a) : a());
        };
      }
      function g(t, e) {
        var n = t.iterator[e.method];
        if (void 0 === n) {
          if (((e.delegate = null), "throw" === e.method)) {
            if (
              t.iterator.return &&
              ((e.method = "return"),
              (e.arg = void 0),
              g(t, e),
              "throw" === e.method)
            )
              return s;
            (e.method = "throw"),
              (e.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return s;
        }
        var r = u(n, t.iterator, e.arg);
        if ("throw" === r.type)
          return (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), s;
        var o = r.arg;
        return o
          ? o.done
            ? ((e[t.resultName] = o.value),
              (e.next = t.nextLoc),
              "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
              (e.delegate = null),
              s)
            : o
          : ((e.method = "throw"),
            (e.arg = new TypeError("iterator result is not an object")),
            (e.delegate = null),
            s);
      }
      function w(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function j(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function _(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(w, this),
          this.reset(!0);
      }
      function x(t) {
        if (t) {
          var e = t[o];
          if (e) return e.call(t);
          if ("function" === typeof t.next) return t;
          if (!isNaN(t.length)) {
            var r = -1,
              i = function e() {
                for (; ++r < t.length; )
                  if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                return (e.value = void 0), (e.done = !0), e;
              };
            return (i.next = i);
          }
        }
        return { next: S };
      }
      function S() {
        return { value: void 0, done: !0 };
      }
      return (
        (f.prototype = y.constructor = p),
        (p.constructor = f),
        (p[a] = f.displayName = "GeneratorFunction"),
        (t.isGeneratorFunction = function (t) {
          var e = "function" === typeof t && t.constructor;
          return (
            !!e &&
            (e === f || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, p)
              : ((t.__proto__ = p), a in t || (t[a] = "GeneratorFunction")),
            (t.prototype = Object.create(y)),
            t
          );
        }),
        (t.awrap = function (t) {
          return { __await: t };
        }),
        b(m.prototype),
        (m.prototype[i] = function () {
          return this;
        }),
        (t.AsyncIterator = m),
        (t.async = function (e, n, r, o, i) {
          void 0 === i && (i = Promise);
          var a = new m(c(e, n, r, o), i);
          return t.isGeneratorFunction(n)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        b(y),
        (y[a] = "Generator"),
        (y[o] = function () {
          return this;
        }),
        (y.toString = function () {
          return "[object Generator]";
        }),
        (t.keys = function (t) {
          var e = [];
          for (var n in t) e.push(n);
          return (
            e.reverse(),
            function n() {
              for (; e.length; ) {
                var r = e.pop();
                if (r in t) return (n.value = r), (n.done = !1), n;
              }
              return (n.done = !0), n;
            }
          );
        }),
        (t.values = x),
        (_.prototype = {
          constructor: _,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(j),
              !t)
            )
              for (var e in this)
                "t" === e.charAt(0) &&
                  n.call(this, e) &&
                  !isNaN(+e.slice(1)) &&
                  (this[e] = void 0);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var e = this;
            function r(n, r) {
              return (
                (a.type = "throw"),
                (a.arg = t),
                (e.next = n),
                r && ((e.method = "next"), (e.arg = void 0)),
                !!r
              );
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ("root" === i.tryLoc) return r("end");
              if (i.tryLoc <= this.prev) {
                var c = n.call(i, "catchLoc"),
                  u = n.call(i, "finallyLoc");
                if (c && u) {
                  if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                } else if (c) {
                  if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                } else {
                  if (!u)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var o = this.tryEntries[r];
              if (
                o.tryLoc <= this.prev &&
                n.call(o, "finallyLoc") &&
                this.prev < o.finallyLoc
              ) {
                var i = o;
                break;
              }
            }
            i &&
              ("break" === t || "continue" === t) &&
              i.tryLoc <= e &&
              e <= i.finallyLoc &&
              (i = null);
            var a = i ? i.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              i
                ? ((this.method = "next"), (this.next = i.finallyLoc), s)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
              s
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.finallyLoc === t)
                return this.complete(n.completion, n.afterLoc), j(n), s;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.tryLoc === t) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var o = r.arg;
                  j(n);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, e, n) {
            return (
              (this.delegate = { iterator: x(t), resultName: e, nextLoc: n }),
              "next" === this.method && (this.arg = void 0),
              s
            );
          },
        }),
        t
      );
    })(t.exports);
    try {
      regeneratorRuntime = r;
    } catch (o) {
      Function("r", "regeneratorRuntime = r")(r);
    }
  },
  function (t, e) {
    t.exports = function (t) {
      return (
        t.webpackPolyfill ||
          ((t.deprecate = function () {}),
          (t.paths = []),
          t.children || (t.children = []),
          Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
              return t.l;
            },
          }),
          Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
              return t.i;
            },
          }),
          (t.webpackPolyfill = 1)),
        t
      );
    };
  },
  function (t, e, n) {
    (e = n(14)(!1)).push([
      t.i,
      "section {\n  background-color: white;\n  border: 1px solid lightgray;\n  box-shadow: 0 0 10px lightgray;\n  min-width: 200px;\n  margin: auto;\n  padding: 50px;\n}\n\nh2, h3, h4, h6 {\n  margin: 0;\n}\nh5 {\n  font-size: medium;\n  font-weight: bold;\n  font-style: italic;\n  color: gray;\n}\n\n.btn-back {\n  background-color: rgb(236, 236, 236);\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  box-shadow: 0 0 5px lightgray;\n  width: calc(150px + 2vw);\n  height: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  cursor: pointer;\n  text-align: center;\n}\n",
      "",
    ]),
      (t.exports = e);
  },
  function (t, e, n) {
    t.exports = n(27)();
  },
  function (t, e, n) {
    "use strict";
    var r = n(28);
    function o() {}
    function i() {}
    (i.resetWarningCache = o),
      (t.exports = function () {
        function t(t, e, n, o, i, a) {
          if (a !== r) {
            var c = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ((c.name = "Invariant Violation"), c);
          }
        }
        function e() {
          return t;
        }
        t.isRequired = t;
        var n = {
          array: t,
          bool: t,
          func: t,
          number: t,
          object: t,
          string: t,
          symbol: t,
          any: t,
          arrayOf: e,
          element: t,
          elementType: t,
          instanceOf: e,
          node: t,
          objectOf: e,
          oneOf: e,
          oneOfType: e,
          shape: e,
          exact: e,
          checkPropTypes: i,
          resetWarningCache: o,
        };
        return (n.PropTypes = n), n;
      });
  },
  function (t, e, n) {
    "use strict";
    t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  },
  function (t, e, n) {
    "use strict";
    var r = "function" === typeof Symbol && Symbol.for,
      o = r ? Symbol.for("react.element") : 60103,
      i = r ? Symbol.for("react.portal") : 60106,
      a = r ? Symbol.for("react.fragment") : 60107,
      c = r ? Symbol.for("react.strict_mode") : 60108,
      u = r ? Symbol.for("react.profiler") : 60114,
      s = r ? Symbol.for("react.provider") : 60109,
      l = r ? Symbol.for("react.context") : 60110,
      f = r ? Symbol.for("react.async_mode") : 60111,
      p = r ? Symbol.for("react.concurrent_mode") : 60111,
      h = r ? Symbol.for("react.forward_ref") : 60112,
      d = r ? Symbol.for("react.suspense") : 60113,
      v = r ? Symbol.for("react.suspense_list") : 60120,
      y = r ? Symbol.for("react.memo") : 60115,
      b = r ? Symbol.for("react.lazy") : 60116,
      m = r ? Symbol.for("react.block") : 60121,
      g = r ? Symbol.for("react.fundamental") : 60117,
      w = r ? Symbol.for("react.responder") : 60118,
      j = r ? Symbol.for("react.scope") : 60119;
    function _(t) {
      if ("object" === typeof t && null !== t) {
        var e = t.$$typeof;
        switch (e) {
          case o:
            switch ((t = t.type)) {
              case f:
              case p:
              case a:
              case u:
              case c:
              case d:
                return t;
              default:
                switch ((t = t && t.$$typeof)) {
                  case l:
                  case h:
                  case b:
                  case y:
                  case s:
                    return t;
                  default:
                    return e;
                }
            }
          case i:
            return e;
        }
      }
    }
    function x(t) {
      return _(t) === p;
    }
    (e.AsyncMode = f),
      (e.ConcurrentMode = p),
      (e.ContextConsumer = l),
      (e.ContextProvider = s),
      (e.Element = o),
      (e.ForwardRef = h),
      (e.Fragment = a),
      (e.Lazy = b),
      (e.Memo = y),
      (e.Portal = i),
      (e.Profiler = u),
      (e.StrictMode = c),
      (e.Suspense = d),
      (e.isAsyncMode = function (t) {
        return x(t) || _(t) === f;
      }),
      (e.isConcurrentMode = x),
      (e.isContextConsumer = function (t) {
        return _(t) === l;
      }),
      (e.isContextProvider = function (t) {
        return _(t) === s;
      }),
      (e.isElement = function (t) {
        return "object" === typeof t && null !== t && t.$$typeof === o;
      }),
      (e.isForwardRef = function (t) {
        return _(t) === h;
      }),
      (e.isFragment = function (t) {
        return _(t) === a;
      }),
      (e.isLazy = function (t) {
        return _(t) === b;
      }),
      (e.isMemo = function (t) {
        return _(t) === y;
      }),
      (e.isPortal = function (t) {
        return _(t) === i;
      }),
      (e.isProfiler = function (t) {
        return _(t) === u;
      }),
      (e.isStrictMode = function (t) {
        return _(t) === c;
      }),
      (e.isSuspense = function (t) {
        return _(t) === d;
      }),
      (e.isValidElementType = function (t) {
        return (
          "string" === typeof t ||
          "function" === typeof t ||
          t === a ||
          t === p ||
          t === u ||
          t === c ||
          t === d ||
          t === v ||
          ("object" === typeof t &&
            null !== t &&
            (t.$$typeof === b ||
              t.$$typeof === y ||
              t.$$typeof === s ||
              t.$$typeof === l ||
              t.$$typeof === h ||
              t.$$typeof === g ||
              t.$$typeof === w ||
              t.$$typeof === j ||
              t.$$typeof === m))
        );
      }),
      (e.typeOf = _);
  },
  function (t, e) {
    t.exports = function (t) {
      if (!t.webpackPolyfill) {
        var e = Object.create(t);
        e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          Object.defineProperty(e, "exports", { enumerable: !0 }),
          (e.webpackPolyfill = 1);
      }
      return e;
    };
  },
  function (t, e, n) {
    (e = n(14)(!1)).push([
      t.i,
      "section {\n  width: calc(200px + 5vw);\n  background-color: green;\n  border-radius: 10px;\n  border: 1px solid lightgray;\n  color: white;\n  text-align: center;\n  height: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  cursor: pointer;\n}\nsection:active {\n  position: relative;\n  top: 2px;\n}\nh3 {\n  margin: 0;\n}\n",
      "",
    ]),
      (t.exports = e);
  },
  function (t, e, n) {
    "use strict";
    var r =
        (this && this.__awaiter) ||
        function (t, e, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(t) {
              try {
                u(r.next(t));
              } catch (e) {
                i(e);
              }
            }
            function c(t) {
              try {
                u(r.throw(t));
              } catch (e) {
                i(e);
              }
            }
            function u(t) {
              var e;
              t.done
                ? o(t.value)
                : ((e = t.value),
                  e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      })).then(a, c);
            }
            u((r = r.apply(t, e || [])).next());
          });
        },
      o =
        (this && this.__generator) ||
        function (t, e) {
          var n,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: c(0), throw: c(1), return: c(2) }),
            "function" === typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function c(i) {
            return function (c) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = e.call(t, a);
                  } catch (c) {
                    (i = [6, c]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, c]);
            };
          }
        },
      i = n(6).default,
      a = "https://unpkg.com/react@16/umd/react.production.min.js",
      c = "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js",
      u = function () {
        try {
          n(9);
        } catch (t) {
          console.warn(
            "File is not found: /Users/pierre.isabel/Desktop/Dev/microfront-with-wc-redux/react-app/src/direflow-components/react-app/index.js"
          );
        }
      };
    setTimeout(function () {
      return r(void 0, void 0, void 0, function () {
        var t;
        return o(this, function (e) {
          switch (e.label) {
            case 0:
              return window.React && window.ReactDOM
                ? (u(), [2])
                : [
                    4,
                    r(void 0, void 0, void 0, function () {
                      var t;
                      return o(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return (
                              e.trys.push([0, 5, , 6]),
                              [4, i(a, "reactBundleLoaded")]
                            );
                          case 1:
                            e.sent(), (e.label = 2);
                          case 2:
                            return [4, i(c, "reactBundleLoaded")];
                          case 3:
                            e.sent(), (e.label = 4);
                          case 4:
                            return [3, 6];
                          case 5:
                            return (t = e.sent()), console.error(t), [3, 6];
                          case 6:
                            return [2];
                        }
                      });
                    }),
                  ];
            case 1:
              e.sent(), (e.label = 2);
            case 2:
              return (
                e.trys.push([2, 4, , 5]),
                [
                  4,
                  new Promise(function (t, e) {
                    var n = 0,
                      r = setInterval(function () {
                        n >= 2500 &&
                          e(
                            new Error(
                              "Direflow Error: React & ReactDOM was unable to load"
                            )
                          ),
                          window.React &&
                            window.ReactDOM &&
                            (clearInterval(r), t()),
                          (n += 1);
                      });
                  }),
                ]
              );
            case 3:
              return e.sent(), u(), [3, 5];
            case 4:
              return (t = e.sent()), console.error(t.message), [3, 5];
            case 5:
              return [2];
          }
        });
      });
    });
  },
  function (t, e, n) {
    "use strict";
    var r =
        (this && this.__awaiter) ||
        function (t, e, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(t) {
              try {
                u(r.next(t));
              } catch (e) {
                i(e);
              }
            }
            function c(t) {
              try {
                u(r.throw(t));
              } catch (e) {
                i(e);
              }
            }
            function u(t) {
              var e;
              t.done
                ? o(t.value)
                : ((e = t.value),
                  e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      })).then(a, c);
            }
            u((r = r.apply(t, e || [])).next());
          });
        },
      o =
        (this && this.__generator) ||
        function (t, e) {
          var n,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: c(0), throw: c(1), return: c(2) }),
            "function" === typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function c(i) {
            return function (c) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = e.call(t, a);
                  } catch (c) {
                    (i = [6, c]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, c]);
            };
          }
        },
      i = n(6).default,
      a = "https://unpkg.com/react@16/umd/react.production.min.js",
      c = "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js",
      u = function () {
        try {
          n(10);
        } catch (t) {
          console.warn(
            "File is not found: /Users/pierre.isabel/Desktop/Dev/microfront-with-wc-redux/react-app/src/direflow-components/react-button/index.js"
          );
        }
      };
    setTimeout(function () {
      return r(void 0, void 0, void 0, function () {
        var t;
        return o(this, function (e) {
          switch (e.label) {
            case 0:
              return window.React && window.ReactDOM
                ? (u(), [2])
                : [
                    4,
                    r(void 0, void 0, void 0, function () {
                      var t;
                      return o(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return (
                              e.trys.push([0, 5, , 6]),
                              [4, i(a, "reactBundleLoaded")]
                            );
                          case 1:
                            e.sent(), (e.label = 2);
                          case 2:
                            return [4, i(c, "reactBundleLoaded")];
                          case 3:
                            e.sent(), (e.label = 4);
                          case 4:
                            return [3, 6];
                          case 5:
                            return (t = e.sent()), console.error(t), [3, 6];
                          case 6:
                            return [2];
                        }
                      });
                    }),
                  ];
            case 1:
              e.sent(), (e.label = 2);
            case 2:
              return (
                e.trys.push([2, 4, , 5]),
                [
                  4,
                  new Promise(function (t, e) {
                    var n = 0,
                      r = setInterval(function () {
                        n >= 2500 &&
                          e(
                            new Error(
                              "Direflow Error: React & ReactDOM was unable to load"
                            )
                          ),
                          window.React &&
                            window.ReactDOM &&
                            (clearInterval(r), t()),
                          (n += 1);
                      });
                  }),
                ]
              );
            case 3:
              return e.sent(), u(), [3, 5];
            case 4:
              return (t = e.sent()), console.error(t.message), [3, 5];
            case 5:
              return [2];
          }
        });
      });
    });
  },
]);
//# sourceMappingURL=direflowBundle.js.map
