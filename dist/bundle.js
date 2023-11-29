(() => {
  "use strict";
  var n = {
      426: (n, e, t) => {
        t.d(e, { Z: () => c });
        var o = t(81),
          r = t.n(o),
          i = t(645),
          a = t.n(i)()(r());
        a.push([
          n.id,
          "@import url(https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap);",
        ]),
          a.push([
            n.id,
            ':root {\n  --app-fontfont-family: "Architects Daughter", cursive;\n  --panel-background-color: rgb(244, 244, 244);\n  --todo-background-color: rgb(255, 255, 255);\n  --accent-background-color: rgb(229, 229, 229);\n}\n\nbody {\n  font-family: var(--app-fontfont-family);\n}\n\n.top-nav {\n  width: 100vw;\n  background-color: var(--panel-background-color);\n  display: flex;\n  flex-direction: row;\n  border-bottom: 1px solid white;\n}\n\nh1 {\n  margin-left: 10px;\n}\n\n.menu-nav {\n  width: 50%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.search-bar {\n  font-family: var(--app-fontfont-family);\n  width: 10rem;\n  margin-left: 10px;\n  background-color: var(--accent-background-color);\n  border: none;\n  padding: 10px;\n  border-radius: 0.5rem;\n}\n\n.search-bar:hover {\n  background-color: white;\n}\n\n#search-icon {\n  position: relative;\n  right: 25px;\n}\n\n.nav-options {\n  width: 50%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.dark-mode {\n  font-family: var(--app-fontfont-family);\n  color: white;\n  background-color: rgb(33, 33, 84);\n  padding: 10px;\n  border-radius: 0.5rem;\n  border: none;\n  margin: 10px;\n}\n\n.dark-mode:hover {\n  color: rgb(33, 33, 84);\n  background-color: white;\n}\n\n#add-todo {\n  cursor: pointer;\n  margin-left: 10px;\n  margin-right: 30px;\n  padding: 10px;\n}\n\n.material-symbols-outlined:hover {\n  background-color: var(--accent-background-color);\n  border-radius: 0.5rem;\n}\n\n.ham-menu {\n  margin-right: 30px;\n}\n\n.container {\n  display: flex;\n  flex-direction: row;\n}\n\n.side-bar {\n  height: 100vh;\n  width: 25vw;\n  background-color: var(--panel-background-color);\n}\n\nh2 {\n  margin: 10px;\n  height: 1.5rem;\n}\n\n.project-title-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n#add-project {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 2rem;\n  height: 2rem;\n  margin: 10px;\n  cursor: pointer;\n}\n\n.projects {\n  height: 100%;\n}\n\n.project-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  height: 100%;\n}\n\n.project-item {\n  background-color: rgb(252, 252, 156);\n  width: 60%;\n  height: 1.5rem;\n  margin: 2px;\n  cursor: pointer;\n}\n\n.project-item:hover {\n  background-color: yellow;\n}\n\n.todo-panel {\n  width: 100%;\n  background-color: var(--todo-background-color);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.need-todo {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.to-do {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 60%;\n}\n\n.input-container {\n  display: flex;\n  flex-direction: row;\n}\n\n.todo-checkbox {\n  position: relative;\n  top: 13px;\n  margin-right: 10px;\n  /* appearance: none; */\n  width: 20px;\n  height: 20px;\n  border-radius: 25%;\n  border: 1px solid black;\n  outline: none;\n}\n\n.todo-box {\n  display: flex;\n  flex-direction: column;\n}\n\n.todo-item-title {\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: row;\n  margin-top: 10px;\n  margin-bottom: 0px;\n}\n\n.project-title {\n  margin-left: 10px;\n  font-size: 1.25rem;\n}\n\n.todo-description {\n  font-family: var(--app-fontfont-family);\n  font-size: 0.85rem;\n  margin: 0;\n}\n\n#delete-todo {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* position: relative; */\n  left: 20rem;\n  top: 0.5rem;\n  width: 10%;\n  cursor: pointer;\n}\n#delete-tod:hover {\n  background-color: red;\n}\n\n/*place for styling the modal*/\ndialog[open] {\n  position: absolute;\n  top: 50%;\n  left: 70%;\n  transform: translate(-90%, -50%);\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  border: none;\n  border-radius: 1rem;\n  background-color: rgb(255, 255, 255);\n  width: 28rem;\n  height: 12rem;\n  box-shadow: 0px 0px 25px 0.5px #d0d0d0;\n}\n\n.input-box {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 80%;\n}\n\n.task-title {\n  font-size: 1.5rem;\n  font-family: var(--app-fontfont-family);\n  border: none;\n}\n\n.task-description {\n  font-family: var(--app-fontfont-family);\n  border: none;\n}\n\n.modal-buttons {\n  border-top: 1px solid lightgray;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  height: 30%;\n}\n\n.add-task-button {\n  font-size: 1rem;\n  font-family: var(--app-fontfont-family);\n  background-color: green;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin: 10px;\n}\n\n.add-task-button:hover {\n  background-color: rgb(0, 181, 0);\n}\n\n.cancel-button {\n  font-size: 1rem;\n  font-family: var(--app-fontfont-family);\n  background-color: rgb(128, 0, 0);\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin: 5px;\n}\n\n.cancel-button:hover {\n  background-color: rgb(188, 0, 0);\n}\n\n/* Project Modal */\n.project-title {\n  font-family: var(--app-fontfont-family);\n}\n\n.cancel-project-button {\n  font-size: 1rem;\n  font-family: var(--app-fontfont-family);\n  background-color: rgb(128, 0, 0);\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin: 5px;\n}\n\n.cancel-project-button:hover {\n  background-color: rgb(188, 0, 0);\n}\n\n.add-project-button {\n  font-size: 1rem;\n  font-family: var(--app-fontfont-family);\n  background-color: green;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin: 10px;\n}\n\n.add-project-button:hover {\n  background-color: rgb(0, 181, 0);\n}\n',
            "",
          ]);
        const c = a;
      },
      645: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  o = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  o &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (t += n(e)),
                  o && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, o, r, i) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (o)
                for (var c = 0; c < this.length; c++) {
                  var d = this[c][0];
                  null != d && (a[d] = !0);
                }
              for (var l = 0; l < n.length; l++) {
                var u = [].concat(n[l]);
                (o && a[u[0]]) ||
                  (void 0 !== i &&
                    (void 0 === u[5] ||
                      (u[1] = "@layer"
                        .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                        .concat(u[1], "}")),
                    (u[5] = i)),
                  t &&
                    (u[2]
                      ? ((u[1] = "@media "
                          .concat(u[2], " {")
                          .concat(u[1], "}")),
                        (u[2] = t))
                      : (u[2] = t)),
                  r &&
                    (u[4]
                      ? ((u[1] = "@supports ("
                          .concat(u[4], ") {")
                          .concat(u[1], "}")),
                        (u[4] = r))
                      : (u[4] = "".concat(r))),
                  e.push(u));
              }
            }),
            e
          );
        };
      },
      81: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      379: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, o = 0; o < e.length; o++)
            if (e[o].identifier === n) {
              t = o;
              break;
            }
          return t;
        }
        function o(n, o) {
          for (var i = {}, a = [], c = 0; c < n.length; c++) {
            var d = n[c],
              l = o.base ? d[0] + o.base : d[0],
              u = i[l] || 0,
              s = "".concat(l, " ").concat(u);
            i[l] = u + 1;
            var p = t(s),
              f = {
                css: d[1],
                media: d[2],
                sourceMap: d[3],
                supports: d[4],
                layer: d[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(f);
            else {
              var m = r(f, o);
              (o.byIndex = c),
                e.splice(c, 0, { identifier: s, updater: m, references: 1 });
            }
            a.push(s);
          }
          return a;
        }
        function r(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, r) {
          var i = o((n = n || []), (r = r || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < i.length; a++) {
              var c = t(i[a]);
              e[c].references--;
            }
            for (var d = o(n, r), l = 0; l < i.length; l++) {
              var u = t(i[l]);
              0 === e[u].references && (e[u].updater(), e.splice(u, 1));
            }
            i = d;
          };
        };
      },
      569: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var o = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(t);
        };
      },
      216: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      565: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      795: (n) => {
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var o = "";
                t.supports && (o += "@supports (".concat(t.supports, ") {")),
                  t.media && (o += "@media ".concat(t.media, " {"));
                var r = void 0 !== t.layer;
                r &&
                  (o += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (o += t.css),
                  r && (o += "}"),
                  t.media && (o += "}"),
                  t.supports && (o += "}");
                var i = t.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  e.styleTagTransform(o, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      589: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    e = {};
  function t(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var i = (e[o] = { id: o, exports: {} });
    return n[o](i, i.exports, t), i.exports;
  }
  (t.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return t.d(e, { a: e }), e;
  }),
    (t.d = (n, e) => {
      for (var o in e)
        t.o(e, o) &&
          !t.o(n, o) &&
          Object.defineProperty(n, o, { enumerable: !0, get: e[o] });
    }),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (t.nc = void 0),
    (() => {
      var n = t(379),
        e = t.n(n),
        o = t(795),
        r = t.n(o),
        i = t(569),
        a = t.n(i),
        c = t(565),
        d = t.n(c),
        l = t(216),
        u = t.n(l),
        s = t(589),
        p = t.n(s),
        f = t(426),
        m = {};
      function h(n) {
        return (
          (h =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (n) {
                  return typeof n;
                }
              : function (n) {
                  return n &&
                    "function" == typeof Symbol &&
                    n.constructor === Symbol &&
                    n !== Symbol.prototype
                    ? "symbol"
                    : typeof n;
                }),
          h(n)
        );
      }
      function b(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, o = new Array(e); t < e; t++) o[t] = n[t];
        return o;
      }
      function y(n, e) {
        for (var t = 0; t < e.length; t++) {
          var o = e[t];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(
              n,
              (void 0,
              (r = (function (n, e) {
                if ("object" !== h(n) || null === n) return n;
                var t = n[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var o = t.call(n, "string");
                  if ("object" !== h(o)) return o;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(n);
              })(o.key)),
              "symbol" === h(r) ? r : String(r)),
              o
            );
        }
        var r;
      }
      function g(n, e, t) {
        return (
          e && y(n.prototype, e),
          t && y(n, t),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
      }
      function v(n, e) {
        if (!(n instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      (m.styleTagTransform = p()),
        (m.setAttributes = d()),
        (m.insert = a().bind(null, "head")),
        (m.domAPI = r()),
        (m.insertStyleElement = u()),
        e()(f.Z, m),
        f.Z && f.Z.locals && f.Z.locals;
      var x = [],
        k = null,
        w = g(function n(e, t, o, r) {
          v(this, n),
            (this.id = e),
            (this.taskName = t),
            (this.description = o),
            (this.complete = r);
        }),
        j = (function () {
          function n(e) {
            v(this, n), (this.ProjectName = e), (this.ToDo = []);
          }
          return (
            g(n, [
              {
                key: "addItemToProject",
                value: function (n) {
                  this.ToDo.push(n);
                },
              },
            ]),
            n
          );
        })();
      function S(n) {
        var e,
          t = n.parentNode.querySelector(".todo-item-title").innerText,
          o = (function (n, e) {
            var t =
              ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
              n["@@iterator"];
            if (!t) {
              if (
                Array.isArray(n) ||
                (t = (function (n, e) {
                  if (n) {
                    if ("string" == typeof n) return b(n, e);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    return (
                      "Object" === t &&
                        n.constructor &&
                        (t = n.constructor.name),
                      "Map" === t || "Set" === t
                        ? Array.from(n)
                        : "Arguments" === t ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                        ? b(n, e)
                        : void 0
                    );
                  }
                })(n)) ||
                (e && n && "number" == typeof n.length)
              ) {
                t && (n = t);
                var o = 0,
                  r = function () {};
                return {
                  s: r,
                  n: function () {
                    return o >= n.length
                      ? { done: !0 }
                      : { done: !1, value: n[o++] };
                  },
                  e: function (n) {
                    throw n;
                  },
                  f: r,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var i,
              a = !0,
              c = !1;
            return {
              s: function () {
                t = t.call(n);
              },
              n: function () {
                var n = t.next();
                return (a = n.done), n;
              },
              e: function (n) {
                (c = !0), (i = n);
              },
              f: function () {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (c) throw i;
                }
              },
            };
          })(x);
        try {
          for (o.s(); !(e = o.n()).done; ) {
            var r = e.value,
              i = r.ToDo.find(function (n) {
                return n.taskName === t;
              });
            if (i) {
              r.ToDo.splice(r.ToDo.indexOf(i), 1), r.ToDo.push(i);
              break;
            }
          }
        } catch (n) {
          o.e(n);
        } finally {
          o.f();
        }
      }
      function T() {
        var n = document.querySelector(".need-todo");
        (n.innerHTML = ""),
          k &&
            k.ToDo.forEach(function (e) {
              var t = document.createElement("div"),
                o = document.createElement("input"),
                r = document.createElement("div"),
                i = document.createElement("p"),
                a = document.createElement("p"),
                c = document.createElement("span"),
                d = document.createElement("div");
              t.appendChild(d),
                d.appendChild(o),
                d.appendChild(r),
                r.appendChild(i),
                r.appendChild(a),
                t.appendChild(c),
                (i.innerText = e.taskName),
                (a.innerText = e.description),
                (c.innerText = "delete"),
                d.classList.add("input-container"),
                t.classList.add("to-do"),
                i.classList.add("todo-item-title"),
                o.classList.add("todo-checkbox"),
                o.setAttribute("type", "checkbox"),
                o.setAttribute("name", "todo-item-check"),
                r.classList.add("todo-box"),
                a.classList.add("todo-description"),
                c.classList.add("material-symbols-outlined"),
                c.setAttribute("id", "delete-todo"),
                (o.checked = e.complete),
                n.appendChild(t);
            }),
          document
            .querySelector(".need-todo")
            .addEventListener("click", function (n) {
              if ("delete-todo" === n.target.id) {
                var e =
                    n.target.parentNode.querySelector(
                      ".todo-item-title"
                    ).innerText,
                  t = x.find(function (n) {
                    return n.ToDo.some(function (n) {
                      return n.taskName === e;
                    });
                  });
                if (t) {
                  var o = t.ToDo.find(function (n) {
                      return n.taskName === e;
                    }),
                    r = t.ToDo.indexOf(o);
                  t.ToDo.splice(r, 1), T();
                }
              }
            });
      }
      function E() {
        var n = document.querySelector(".project-list");
        (n.innerHTML = ""),
          x.forEach(function (e) {
            var t = document.createElement("p");
            t.classList.add("project-item"),
              (t.innerText = e.ProjectName),
              t.addEventListener("click", function () {
                !(function (n) {
                  k = n;
                })(e),
                  T();
              }),
              n.appendChild(t);
          });
      }
      document.addEventListener("DOMContentLoaded", function () {
        var n,
          e,
          t,
          o,
          r = new j("My Todo List");
        x.push(r),
          (n = document.querySelector("#add-project")),
          (e = document.querySelector(".project-modal")),
          (document.querySelector(".project-title").innerText = ""),
          n.addEventListener("click", function () {
            e.showModal();
          }),
          (function () {
            var n = document.querySelector(".cancel-project-button"),
              e = document.querySelector(".project-modal");
            n.addEventListener("click", function () {
              e.close();
            });
          })(),
          (function () {
            var n = document.querySelector(".add-project-button"),
              e = document.querySelector(".project-title"),
              t = document.querySelector(".project-modal");
            n.addEventListener("click", function (n) {
              n.preventDefault();
              var o = document.createElement("p");
              o.classList.add("project-item"),
                (o.innerText = e.value),
                (function (n) {
                  x.push(n);
                })(new j(e.value)),
                (e.value = ""),
                t.close(),
                E();
            });
          })(),
          E(),
          (function () {
            var n = document.querySelector("#add-todo"),
              e = document.querySelector("dialog");
            (document.querySelector(".task-title").innerText = ""),
              n.addEventListener("click", function () {
                e.showModal();
              });
          })(),
          (function () {
            var n = document.querySelector(".cancel-button"),
              e = document.querySelector("dialog");
            n.addEventListener("click", function () {
              e.close();
            });
          })(),
          (function (n) {
            var e = document.querySelector(".add-task-button"),
              t = document.querySelector("dialog"),
              o = document.querySelector(".task-title"),
              r = document.querySelector(".task-description"),
              i = document.querySelector(".need-todo");
            e.addEventListener("click", function (n) {
              if ((n.preventDefault(), k)) {
                var e = document.createElement("div"),
                  a = document.createElement("input"),
                  c = document.createElement("div"),
                  d = document.createElement("p"),
                  l = document.createElement("p"),
                  u = document.createElement("span"),
                  s = document.createElement("div");
                i.appendChild(e),
                  e.appendChild(s),
                  s.appendChild(a),
                  s.appendChild(c),
                  c.appendChild(d),
                  c.appendChild(l),
                  e.appendChild(u),
                  (d.innerText = o.value),
                  (l.innerText = r.value),
                  (u.innerText = "delete"),
                  s.classList.add("input-container"),
                  e.classList.add("to-do"),
                  d.classList.add("todo-item-title"),
                  a.classList.add("todo-checkbox"),
                  c.classList.add("todo-box"),
                  l.classList.add("todo-description"),
                  u.classList.add("material-symbol-outlined"),
                  u.setAttribute("id", "delete-todo"),
                  a.setAttribute("type", "checkbox"),
                  a.setAttribute("name", "todo-item-check");
                var p = new w(
                  Date.now() + Math.random().toString(36).substring(2, 9),
                  o.value,
                  r.value,
                  !1
                );
                k.addItemToProject(p),
                  S(a),
                  (o.value = ""),
                  (r.value = ""),
                  t.close(),
                  T();
              } else alert("Please select a project to add todos.");
            });
          })(),
          document
            .querySelector(".need-todo")
            .addEventListener("change", function (n) {
              n.target.classList.contains("todo-checkbox") &&
                (S(n.target), T());
            }),
          (t = document.querySelector(".dark-mode")),
          (o = document.querySelector("body")),
          t.addEventListener("click", function () {
            o.classList.toggle("dark-mode-theme");
          });
      });
    })();
})();
