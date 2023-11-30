(() => {
  "use strict";
  var e = {
      426: (e, t, n) => {
        n.d(t, { Z: () => d });
        var r = n(81),
          o = n.n(r),
          a = n(645),
          i = n.n(a)()(o());
        i.push([
          e.id,
          "@import url(https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap);",
        ]),
          i.push([
            e.id,
            ':root {\n  --app-fontfont-family: "Architects Daughter", cursive;\n  --panel-background-color: rgb(244, 244, 244);\n  --todo-background-color: rgb(255, 255, 255);\n  --accent-background-color: rgb(229, 229, 229);\n}\n\nbody {\n  font-family: var(--app-fontfont-family);\n}\n\n.top-nav {\n  width: 100vw;\n  background-color: var(--panel-background-color);\n  display: flex;\n  flex-direction: row;\n  border-bottom: 1px solid white;\n}\n\nh1 {\n  margin-left: 10px;\n}\n\n.menu-nav {\n  width: 50%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.search-bar {\n  font-family: var(--app-fontfont-family);\n  width: 10rem;\n  margin-left: 10px;\n  background-color: var(--accent-background-color);\n  border: none;\n  padding: 10px;\n  border-radius: 0.5rem;\n}\n\n.search-bar:hover {\n  background-color: white;\n}\n\n#search-icon {\n  position: relative;\n  right: 25px;\n}\n\n.nav-options {\n  width: 50%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.dark-mode {\n  font-family: var(--app-fontfont-family);\n  color: white;\n  background-color: rgb(33, 33, 84);\n  padding: 10px;\n  border-radius: 0.5rem;\n  border: none;\n  margin: 10px;\n}\n\n.dark-mode:hover {\n  color: rgb(33, 33, 84);\n  background-color: white;\n}\n\n#add-todo {\n  cursor: pointer;\n  margin-left: 10px;\n  margin-right: 30px;\n  padding: 10px;\n}\n\n.material-symbols-outlined:hover {\n  background-color: var(--accent-background-color);\n  border-radius: 0.5rem;\n}\n\n.ham-menu {\n  margin-right: 30px;\n}\n\n.container {\n  display: flex;\n  flex-direction: row;\n}\n\n.side-bar {\n  height: 100vh;\n  width: 25vw;\n  background-color: var(--panel-background-color);\n}\n\nh2 {\n  margin: 10px;\n  height: 1.5rem;\n}\n\n.project-title-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n#add-project {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 2rem;\n  height: 2rem;\n  margin: 10px;\n  cursor: pointer;\n}\n\n.projects {\n  height: 100%;\n}\n\n.project-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  height: 100%;\n}\n\n.project-item {\n  background-color: rgb(252, 252, 156);\n  width: 60%;\n  height: 1.5rem;\n  margin: 2px;\n  cursor: pointer;\n}\n\n.project-item:hover {\n  background-color: yellow;\n}\n\n.todo-panel {\n  width: 100%;\n  background-color: var(--todo-background-color);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.need-todo {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.to-do {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 60%;\n}\n\n.input-container {\n  display: flex;\n  flex-direction: row;\n}\n\n.todo-checkbox {\n  position: relative;\n  top: 13px;\n  margin-right: 10px;\n  /* appearance: none; */\n  width: 20px;\n  height: 20px;\n  border-radius: 25%;\n  border: 1px solid black;\n  outline: none;\n}\n\n.todo-box {\n  display: flex;\n  flex-direction: column;\n}\n\n.todo-item-title {\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: row;\n  margin-top: 10px;\n  margin-bottom: 0px;\n}\n\n.project-title {\n  margin-left: 10px;\n  font-size: 1.25rem;\n}\n\n.todo-description {\n  font-family: var(--app-fontfont-family);\n  font-size: 0.85rem;\n  margin: 0;\n}\n\n#delete-todo {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* position: relative; */\n  left: 20rem;\n  top: 0.5rem;\n  width: 10%;\n  cursor: pointer;\n}\n#delete-tod:hover {\n  background-color: red;\n}\n\n/*place for styling the modal*/\ndialog[open] {\n  position: absolute;\n  top: 50%;\n  left: 70%;\n  transform: translate(-90%, -50%);\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  border: none;\n  border-radius: 1rem;\n  background-color: rgb(255, 255, 255);\n  width: 28rem;\n  height: 12rem;\n  box-shadow: 0px 0px 25px 0.5px #d0d0d0;\n}\n\n.input-box {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 80%;\n}\n\n.task-title {\n  font-size: 1.5rem;\n  font-family: var(--app-fontfont-family);\n  border: none;\n}\n\n.task-description {\n  font-family: var(--app-fontfont-family);\n  border: none;\n}\n\n.duedate-container {\n  margin-top: 3rem;\n  width: 50%;\n}\n\n.due-date-label {\n  color: red;\n}\n\n.modal-buttons {\n  border-top: 1px solid lightgray;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  height: 30%;\n}\n\n.add-task-button {\n  font-size: 1rem;\n  font-family: var(--app-fontfont-family);\n  background-color: green;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin: 10px;\n}\n\n.add-task-button:hover {\n  background-color: rgb(0, 181, 0);\n}\n\n.cancel-button {\n  font-size: 1rem;\n  font-family: var(--app-fontfont-family);\n  background-color: rgb(128, 0, 0);\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin: 5px;\n}\n\n.cancel-button:hover {\n  background-color: rgb(188, 0, 0);\n}\n\n/* Project Modal */\n.project-title {\n  font-family: var(--app-fontfont-family);\n}\n\n.cancel-project-button {\n  font-size: 1rem;\n  font-family: var(--app-fontfont-family);\n  background-color: rgb(128, 0, 0);\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin: 5px;\n}\n\n.cancel-project-button:hover {\n  background-color: rgb(188, 0, 0);\n}\n\n.add-project-button {\n  font-size: 1rem;\n  font-family: var(--app-fontfont-family);\n  background-color: green;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin: 10px;\n}\n\n.add-project-button:hover {\n  background-color: rgb(0, 181, 0);\n}\n',
            "",
          ]);
        const d = i;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var d = 0; d < this.length; d++) {
                  var u = this[d][0];
                  null != u && (i[u] = !0);
                }
              for (var c = 0; c < e.length; c++) {
                var l = [].concat(e[c]);
                (r && i[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = a)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      81: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var a = {}, i = [], d = 0; d < e.length; d++) {
            var u = e[d],
              c = r.base ? u[0] + r.base : u[0],
              l = a[c] || 0,
              s = "".concat(c, " ").concat(l);
            a[c] = l + 1;
            var f = n(s),
              m = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== f) t[f].references++, t[f].updater(m);
            else {
              var h = o(m, r);
              (r.byIndex = d),
                t.splice(d, 0, { identifier: s, updater: h, references: 1 });
            }
            i.push(s);
          }
          return i;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var d = n(a[i]);
              t[d].references--;
            }
            for (var u = r(e, o), c = 0; c < a.length; c++) {
              var l = n(a[c]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            a = u;
          };
        };
      },
      569: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var a = n.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { id: r, exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.nc = void 0),
    (() => {
      var e = n(379),
        t = n.n(e),
        r = n(795),
        o = n.n(r),
        a = n(569),
        i = n.n(a),
        d = n(565),
        u = n.n(d),
        c = n(216),
        l = n.n(c),
        s = n(589),
        f = n.n(s),
        m = n(426),
        h = {};
      function p(e) {
        return (
          (p =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          p(e)
        );
      }
      function g(e, t) {
        if (t.length < e)
          throw new TypeError(
            e +
              " argument" +
              (e > 1 ? "s" : "") +
              " required, but only " +
              t.length +
              " present"
          );
      }
      function v(e) {
        g(1, arguments);
        var t = Object.prototype.toString.call(e);
        return e instanceof Date || ("object" === p(e) && "[object Date]" === t)
          ? new Date(e.getTime())
          : "number" == typeof e || "[object Number]" === t
          ? new Date(e)
          : (("string" != typeof e && "[object String]" !== t) ||
              "undefined" == typeof console ||
              (console.warn(
                "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
              ),
              console.warn(new Error().stack)),
            new Date(NaN));
      }
      function b(e) {
        if (null === e || !0 === e || !1 === e) return NaN;
        var t = Number(e);
        return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
      }
      function y(e) {
        g(1, arguments);
        var t = v(e),
          n = t.getUTCDay(),
          r = (n < 1 ? 7 : 0) + n - 1;
        return t.setUTCDate(t.getUTCDate() - r), t.setUTCHours(0, 0, 0, 0), t;
      }
      function w(e) {
        g(1, arguments);
        var t = v(e),
          n = t.getUTCFullYear(),
          r = new Date(0);
        r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
        var o = y(r),
          a = new Date(0);
        a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
        var i = y(a);
        return t.getTime() >= o.getTime()
          ? n + 1
          : t.getTime() >= i.getTime()
          ? n
          : n - 1;
      }
      (h.styleTagTransform = f()),
        (h.setAttributes = u()),
        (h.insert = i().bind(null, "head")),
        (h.domAPI = o()),
        (h.insertStyleElement = l()),
        t()(m.Z, h),
        m.Z && m.Z.locals && m.Z.locals;
      var x = {};
      function T() {
        return x;
      }
      function k(e, t) {
        var n, r, o, a, i, d, u, c;
        g(1, arguments);
        var l = T(),
          s = b(
            null !==
              (n =
                null !==
                  (r =
                    null !==
                      (o =
                        null !== (a = null == t ? void 0 : t.weekStartsOn) &&
                        void 0 !== a
                          ? a
                          : null == t ||
                            null === (i = t.locale) ||
                            void 0 === i ||
                            null === (d = i.options) ||
                            void 0 === d
                          ? void 0
                          : d.weekStartsOn) && void 0 !== o
                      ? o
                      : l.weekStartsOn) && void 0 !== r
                  ? r
                  : null === (u = l.locale) ||
                    void 0 === u ||
                    null === (c = u.options) ||
                    void 0 === c
                  ? void 0
                  : c.weekStartsOn) && void 0 !== n
              ? n
              : 0
          );
        if (!(s >= 0 && s <= 6))
          throw new RangeError(
            "weekStartsOn must be between 0 and 6 inclusively"
          );
        var f = v(e),
          m = f.getUTCDay(),
          h = (m < s ? 7 : 0) + m - s;
        return f.setUTCDate(f.getUTCDate() - h), f.setUTCHours(0, 0, 0, 0), f;
      }
      function C(e, t) {
        var n, r, o, a, i, d, u, c;
        g(1, arguments);
        var l = v(e),
          s = l.getUTCFullYear(),
          f = T(),
          m = b(
            null !==
              (n =
                null !==
                  (r =
                    null !==
                      (o =
                        null !==
                          (a = null == t ? void 0 : t.firstWeekContainsDate) &&
                        void 0 !== a
                          ? a
                          : null == t ||
                            null === (i = t.locale) ||
                            void 0 === i ||
                            null === (d = i.options) ||
                            void 0 === d
                          ? void 0
                          : d.firstWeekContainsDate) && void 0 !== o
                      ? o
                      : f.firstWeekContainsDate) && void 0 !== r
                  ? r
                  : null === (u = f.locale) ||
                    void 0 === u ||
                    null === (c = u.options) ||
                    void 0 === c
                  ? void 0
                  : c.firstWeekContainsDate) && void 0 !== n
              ? n
              : 1
          );
        if (!(m >= 1 && m <= 7))
          throw new RangeError(
            "firstWeekContainsDate must be between 1 and 7 inclusively"
          );
        var h = new Date(0);
        h.setUTCFullYear(s + 1, 0, m), h.setUTCHours(0, 0, 0, 0);
        var p = k(h, t),
          y = new Date(0);
        y.setUTCFullYear(s, 0, m), y.setUTCHours(0, 0, 0, 0);
        var w = k(y, t);
        return l.getTime() >= p.getTime()
          ? s + 1
          : l.getTime() >= w.getTime()
          ? s
          : s - 1;
      }
      function S(e, t) {
        for (
          var n = e < 0 ? "-" : "", r = Math.abs(e).toString();
          r.length < t;

        )
          r = "0" + r;
        return n + r;
      }
      const M = function (e, t) {
          var n = e.getUTCFullYear(),
            r = n > 0 ? n : 1 - n;
          return S("yy" === t ? r % 100 : r, t.length);
        },
        D = function (e, t) {
          var n = e.getUTCMonth();
          return "M" === t ? String(n + 1) : S(n + 1, 2);
        },
        E = function (e, t) {
          return S(e.getUTCDate(), t.length);
        },
        P = function (e, t) {
          return S(e.getUTCHours() % 12 || 12, t.length);
        },
        j = function (e, t) {
          return S(e.getUTCHours(), t.length);
        },
        U = function (e, t) {
          return S(e.getUTCMinutes(), t.length);
        },
        q = function (e, t) {
          return S(e.getUTCSeconds(), t.length);
        },
        L = function (e, t) {
          var n = t.length,
            r = e.getUTCMilliseconds();
          return S(Math.floor(r * Math.pow(10, n - 3)), t.length);
        };
      var W = {
        G: function (e, t, n) {
          var r = e.getUTCFullYear() > 0 ? 1 : 0;
          switch (t) {
            case "G":
            case "GG":
            case "GGG":
              return n.era(r, { width: "abbreviated" });
            case "GGGGG":
              return n.era(r, { width: "narrow" });
            default:
              return n.era(r, { width: "wide" });
          }
        },
        y: function (e, t, n) {
          if ("yo" === t) {
            var r = e.getUTCFullYear(),
              o = r > 0 ? r : 1 - r;
            return n.ordinalNumber(o, { unit: "year" });
          }
          return M(e, t);
        },
        Y: function (e, t, n, r) {
          var o = C(e, r),
            a = o > 0 ? o : 1 - o;
          return "YY" === t
            ? S(a % 100, 2)
            : "Yo" === t
            ? n.ordinalNumber(a, { unit: "year" })
            : S(a, t.length);
        },
        R: function (e, t) {
          return S(w(e), t.length);
        },
        u: function (e, t) {
          return S(e.getUTCFullYear(), t.length);
        },
        Q: function (e, t, n) {
          var r = Math.ceil((e.getUTCMonth() + 1) / 3);
          switch (t) {
            case "Q":
              return String(r);
            case "QQ":
              return S(r, 2);
            case "Qo":
              return n.ordinalNumber(r, { unit: "quarter" });
            case "QQQ":
              return n.quarter(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "QQQQQ":
              return n.quarter(r, { width: "narrow", context: "formatting" });
            default:
              return n.quarter(r, { width: "wide", context: "formatting" });
          }
        },
        q: function (e, t, n) {
          var r = Math.ceil((e.getUTCMonth() + 1) / 3);
          switch (t) {
            case "q":
              return String(r);
            case "qq":
              return S(r, 2);
            case "qo":
              return n.ordinalNumber(r, { unit: "quarter" });
            case "qqq":
              return n.quarter(r, {
                width: "abbreviated",
                context: "standalone",
              });
            case "qqqqq":
              return n.quarter(r, { width: "narrow", context: "standalone" });
            default:
              return n.quarter(r, { width: "wide", context: "standalone" });
          }
        },
        M: function (e, t, n) {
          var r = e.getUTCMonth();
          switch (t) {
            case "M":
            case "MM":
              return D(e, t);
            case "Mo":
              return n.ordinalNumber(r + 1, { unit: "month" });
            case "MMM":
              return n.month(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "MMMMM":
              return n.month(r, { width: "narrow", context: "formatting" });
            default:
              return n.month(r, { width: "wide", context: "formatting" });
          }
        },
        L: function (e, t, n) {
          var r = e.getUTCMonth();
          switch (t) {
            case "L":
              return String(r + 1);
            case "LL":
              return S(r + 1, 2);
            case "Lo":
              return n.ordinalNumber(r + 1, { unit: "month" });
            case "LLL":
              return n.month(r, {
                width: "abbreviated",
                context: "standalone",
              });
            case "LLLLL":
              return n.month(r, { width: "narrow", context: "standalone" });
            default:
              return n.month(r, { width: "wide", context: "standalone" });
          }
        },
        w: function (e, t, n, r) {
          var o = (function (e, t) {
            g(1, arguments);
            var n = v(e),
              r =
                k(n, t).getTime() -
                (function (e, t) {
                  var n, r, o, a, i, d, u, c;
                  g(1, arguments);
                  var l = T(),
                    s = b(
                      null !==
                        (n =
                          null !==
                            (r =
                              null !==
                                (o =
                                  null !==
                                    (a =
                                      null == t
                                        ? void 0
                                        : t.firstWeekContainsDate) &&
                                  void 0 !== a
                                    ? a
                                    : null == t ||
                                      null === (i = t.locale) ||
                                      void 0 === i ||
                                      null === (d = i.options) ||
                                      void 0 === d
                                    ? void 0
                                    : d.firstWeekContainsDate) && void 0 !== o
                                ? o
                                : l.firstWeekContainsDate) && void 0 !== r
                            ? r
                            : null === (u = l.locale) ||
                              void 0 === u ||
                              null === (c = u.options) ||
                              void 0 === c
                            ? void 0
                            : c.firstWeekContainsDate) && void 0 !== n
                        ? n
                        : 1
                    ),
                    f = C(e, t),
                    m = new Date(0);
                  return (
                    m.setUTCFullYear(f, 0, s),
                    m.setUTCHours(0, 0, 0, 0),
                    k(m, t)
                  );
                })(n, t).getTime();
            return Math.round(r / 6048e5) + 1;
          })(e, r);
          return "wo" === t
            ? n.ordinalNumber(o, { unit: "week" })
            : S(o, t.length);
        },
        I: function (e, t, n) {
          var r = (function (e) {
            g(1, arguments);
            var t = v(e),
              n =
                y(t).getTime() -
                (function (e) {
                  g(1, arguments);
                  var t = w(e),
                    n = new Date(0);
                  return (
                    n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0), y(n)
                  );
                })(t).getTime();
            return Math.round(n / 6048e5) + 1;
          })(e);
          return "Io" === t
            ? n.ordinalNumber(r, { unit: "week" })
            : S(r, t.length);
        },
        d: function (e, t, n) {
          return "do" === t
            ? n.ordinalNumber(e.getUTCDate(), { unit: "date" })
            : E(e, t);
        },
        D: function (e, t, n) {
          var r = (function (e) {
            g(1, arguments);
            var t = v(e),
              n = t.getTime();
            t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
            var r = n - t.getTime();
            return Math.floor(r / 864e5) + 1;
          })(e);
          return "Do" === t
            ? n.ordinalNumber(r, { unit: "dayOfYear" })
            : S(r, t.length);
        },
        E: function (e, t, n) {
          var r = e.getUTCDay();
          switch (t) {
            case "E":
            case "EE":
            case "EEE":
              return n.day(r, { width: "abbreviated", context: "formatting" });
            case "EEEEE":
              return n.day(r, { width: "narrow", context: "formatting" });
            case "EEEEEE":
              return n.day(r, { width: "short", context: "formatting" });
            default:
              return n.day(r, { width: "wide", context: "formatting" });
          }
        },
        e: function (e, t, n, r) {
          var o = e.getUTCDay(),
            a = (o - r.weekStartsOn + 8) % 7 || 7;
          switch (t) {
            case "e":
              return String(a);
            case "ee":
              return S(a, 2);
            case "eo":
              return n.ordinalNumber(a, { unit: "day" });
            case "eee":
              return n.day(o, { width: "abbreviated", context: "formatting" });
            case "eeeee":
              return n.day(o, { width: "narrow", context: "formatting" });
            case "eeeeee":
              return n.day(o, { width: "short", context: "formatting" });
            default:
              return n.day(o, { width: "wide", context: "formatting" });
          }
        },
        c: function (e, t, n, r) {
          var o = e.getUTCDay(),
            a = (o - r.weekStartsOn + 8) % 7 || 7;
          switch (t) {
            case "c":
              return String(a);
            case "cc":
              return S(a, t.length);
            case "co":
              return n.ordinalNumber(a, { unit: "day" });
            case "ccc":
              return n.day(o, { width: "abbreviated", context: "standalone" });
            case "ccccc":
              return n.day(o, { width: "narrow", context: "standalone" });
            case "cccccc":
              return n.day(o, { width: "short", context: "standalone" });
            default:
              return n.day(o, { width: "wide", context: "standalone" });
          }
        },
        i: function (e, t, n) {
          var r = e.getUTCDay(),
            o = 0 === r ? 7 : r;
          switch (t) {
            case "i":
              return String(o);
            case "ii":
              return S(o, t.length);
            case "io":
              return n.ordinalNumber(o, { unit: "day" });
            case "iii":
              return n.day(r, { width: "abbreviated", context: "formatting" });
            case "iiiii":
              return n.day(r, { width: "narrow", context: "formatting" });
            case "iiiiii":
              return n.day(r, { width: "short", context: "formatting" });
            default:
              return n.day(r, { width: "wide", context: "formatting" });
          }
        },
        a: function (e, t, n) {
          var r = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
          switch (t) {
            case "a":
            case "aa":
              return n.dayPeriod(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "aaa":
              return n
                .dayPeriod(r, { width: "abbreviated", context: "formatting" })
                .toLowerCase();
            case "aaaaa":
              return n.dayPeriod(r, { width: "narrow", context: "formatting" });
            default:
              return n.dayPeriod(r, { width: "wide", context: "formatting" });
          }
        },
        b: function (e, t, n) {
          var r,
            o = e.getUTCHours();
          switch (
            ((r =
              12 === o
                ? "noon"
                : 0 === o
                ? "midnight"
                : o / 12 >= 1
                ? "pm"
                : "am"),
            t)
          ) {
            case "b":
            case "bb":
              return n.dayPeriod(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "bbb":
              return n
                .dayPeriod(r, { width: "abbreviated", context: "formatting" })
                .toLowerCase();
            case "bbbbb":
              return n.dayPeriod(r, { width: "narrow", context: "formatting" });
            default:
              return n.dayPeriod(r, { width: "wide", context: "formatting" });
          }
        },
        B: function (e, t, n) {
          var r,
            o = e.getUTCHours();
          switch (
            ((r =
              o >= 17
                ? "evening"
                : o >= 12
                ? "afternoon"
                : o >= 4
                ? "morning"
                : "night"),
            t)
          ) {
            case "B":
            case "BB":
            case "BBB":
              return n.dayPeriod(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "BBBBB":
              return n.dayPeriod(r, { width: "narrow", context: "formatting" });
            default:
              return n.dayPeriod(r, { width: "wide", context: "formatting" });
          }
        },
        h: function (e, t, n) {
          if ("ho" === t) {
            var r = e.getUTCHours() % 12;
            return 0 === r && (r = 12), n.ordinalNumber(r, { unit: "hour" });
          }
          return P(e, t);
        },
        H: function (e, t, n) {
          return "Ho" === t
            ? n.ordinalNumber(e.getUTCHours(), { unit: "hour" })
            : j(e, t);
        },
        K: function (e, t, n) {
          var r = e.getUTCHours() % 12;
          return "Ko" === t
            ? n.ordinalNumber(r, { unit: "hour" })
            : S(r, t.length);
        },
        k: function (e, t, n) {
          var r = e.getUTCHours();
          return (
            0 === r && (r = 24),
            "ko" === t ? n.ordinalNumber(r, { unit: "hour" }) : S(r, t.length)
          );
        },
        m: function (e, t, n) {
          return "mo" === t
            ? n.ordinalNumber(e.getUTCMinutes(), { unit: "minute" })
            : U(e, t);
        },
        s: function (e, t, n) {
          return "so" === t
            ? n.ordinalNumber(e.getUTCSeconds(), { unit: "second" })
            : q(e, t);
        },
        S: function (e, t) {
          return L(e, t);
        },
        X: function (e, t, n, r) {
          var o = (r._originalDate || e).getTimezoneOffset();
          if (0 === o) return "Z";
          switch (t) {
            case "X":
              return O(o);
            case "XXXX":
            case "XX":
              return Y(o);
            default:
              return Y(o, ":");
          }
        },
        x: function (e, t, n, r) {
          var o = (r._originalDate || e).getTimezoneOffset();
          switch (t) {
            case "x":
              return O(o);
            case "xxxx":
            case "xx":
              return Y(o);
            default:
              return Y(o, ":");
          }
        },
        O: function (e, t, n, r) {
          var o = (r._originalDate || e).getTimezoneOffset();
          switch (t) {
            case "O":
            case "OO":
            case "OOO":
              return "GMT" + N(o, ":");
            default:
              return "GMT" + Y(o, ":");
          }
        },
        z: function (e, t, n, r) {
          var o = (r._originalDate || e).getTimezoneOffset();
          switch (t) {
            case "z":
            case "zz":
            case "zzz":
              return "GMT" + N(o, ":");
            default:
              return "GMT" + Y(o, ":");
          }
        },
        t: function (e, t, n, r) {
          var o = r._originalDate || e;
          return S(Math.floor(o.getTime() / 1e3), t.length);
        },
        T: function (e, t, n, r) {
          return S((r._originalDate || e).getTime(), t.length);
        },
      };
      function N(e, t) {
        var n = e > 0 ? "-" : "+",
          r = Math.abs(e),
          o = Math.floor(r / 60),
          a = r % 60;
        if (0 === a) return n + String(o);
        var i = t || "";
        return n + String(o) + i + S(a, 2);
      }
      function O(e, t) {
        return e % 60 == 0
          ? (e > 0 ? "-" : "+") + S(Math.abs(e) / 60, 2)
          : Y(e, t);
      }
      function Y(e, t) {
        var n = t || "",
          r = e > 0 ? "-" : "+",
          o = Math.abs(e);
        return r + S(Math.floor(o / 60), 2) + n + S(o % 60, 2);
      }
      const A = W;
      var z = function (e, t) {
          switch (e) {
            case "P":
              return t.date({ width: "short" });
            case "PP":
              return t.date({ width: "medium" });
            case "PPP":
              return t.date({ width: "long" });
            default:
              return t.date({ width: "full" });
          }
        },
        H = function (e, t) {
          switch (e) {
            case "p":
              return t.time({ width: "short" });
            case "pp":
              return t.time({ width: "medium" });
            case "ppp":
              return t.time({ width: "long" });
            default:
              return t.time({ width: "full" });
          }
        };
      const F = {
        p: H,
        P: function (e, t) {
          var n,
            r = e.match(/(P+)(p+)?/) || [],
            o = r[1],
            a = r[2];
          if (!a) return z(e, t);
          switch (o) {
            case "P":
              n = t.dateTime({ width: "short" });
              break;
            case "PP":
              n = t.dateTime({ width: "medium" });
              break;
            case "PPP":
              n = t.dateTime({ width: "long" });
              break;
            default:
              n = t.dateTime({ width: "full" });
          }
          return n.replace("{{date}}", z(o, t)).replace("{{time}}", H(a, t));
        },
      };
      var Q = ["D", "DD"],
        G = ["YY", "YYYY"];
      function I(e, t, n) {
        if ("YYYY" === e)
          throw new RangeError(
            "Use `yyyy` instead of `YYYY` (in `"
              .concat(t, "`) for formatting years to the input `")
              .concat(
                n,
                "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
              )
          );
        if ("YY" === e)
          throw new RangeError(
            "Use `yy` instead of `YY` (in `"
              .concat(t, "`) for formatting years to the input `")
              .concat(
                n,
                "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
              )
          );
        if ("D" === e)
          throw new RangeError(
            "Use `d` instead of `D` (in `"
              .concat(t, "`) for formatting days of the month to the input `")
              .concat(
                n,
                "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
              )
          );
        if ("DD" === e)
          throw new RangeError(
            "Use `dd` instead of `DD` (in `"
              .concat(t, "`) for formatting days of the month to the input `")
              .concat(
                n,
                "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
              )
          );
      }
      var R = {
        lessThanXSeconds: {
          one: "less than a second",
          other: "less than {{count}} seconds",
        },
        xSeconds: { one: "1 second", other: "{{count}} seconds" },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
          one: "less than a minute",
          other: "less than {{count}} minutes",
        },
        xMinutes: { one: "1 minute", other: "{{count}} minutes" },
        aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
        xHours: { one: "1 hour", other: "{{count}} hours" },
        xDays: { one: "1 day", other: "{{count}} days" },
        aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
        xWeeks: { one: "1 week", other: "{{count}} weeks" },
        aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
        xMonths: { one: "1 month", other: "{{count}} months" },
        aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
        xYears: { one: "1 year", other: "{{count}} years" },
        overXYears: { one: "over 1 year", other: "over {{count}} years" },
        almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
      };
      function X(e) {
        return function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = t.width ? String(t.width) : e.defaultWidth;
          return e.formats[n] || e.formats[e.defaultWidth];
        };
      }
      const B = {
        date: X({
          formats: {
            full: "EEEE, MMMM do, y",
            long: "MMMM do, y",
            medium: "MMM d, y",
            short: "MM/dd/yyyy",
          },
          defaultWidth: "full",
        }),
        time: X({
          formats: {
            full: "h:mm:ss a zzzz",
            long: "h:mm:ss a z",
            medium: "h:mm:ss a",
            short: "h:mm a",
          },
          defaultWidth: "full",
        }),
        dateTime: X({
          formats: {
            full: "{{date}} 'at' {{time}}",
            long: "{{date}} 'at' {{time}}",
            medium: "{{date}}, {{time}}",
            short: "{{date}}, {{time}}",
          },
          defaultWidth: "full",
        }),
      };
      var J = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P",
      };
      function _(e) {
        return function (t, n) {
          var r;
          if (
            "formatting" ===
              (null != n && n.context ? String(n.context) : "standalone") &&
            e.formattingValues
          ) {
            var o = e.defaultFormattingWidth || e.defaultWidth,
              a = null != n && n.width ? String(n.width) : o;
            r = e.formattingValues[a] || e.formattingValues[o];
          } else {
            var i = e.defaultWidth,
              d = null != n && n.width ? String(n.width) : e.defaultWidth;
            r = e.values[d] || e.values[i];
          }
          return r[e.argumentCallback ? e.argumentCallback(t) : t];
        };
      }
      const Z = {
        ordinalNumber: function (e, t) {
          var n = Number(e),
            r = n % 100;
          if (r > 20 || r < 10)
            switch (r % 10) {
              case 1:
                return n + "st";
              case 2:
                return n + "nd";
              case 3:
                return n + "rd";
            }
          return n + "th";
        },
        era: _({
          values: {
            narrow: ["B", "A"],
            abbreviated: ["BC", "AD"],
            wide: ["Before Christ", "Anno Domini"],
          },
          defaultWidth: "wide",
        }),
        quarter: _({
          values: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["Q1", "Q2", "Q3", "Q4"],
            wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
          },
          defaultWidth: "wide",
          argumentCallback: function (e) {
            return e - 1;
          },
        }),
        month: _({
          values: {
            narrow: [
              "J",
              "F",
              "M",
              "A",
              "M",
              "J",
              "J",
              "A",
              "S",
              "O",
              "N",
              "D",
            ],
            abbreviated: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            wide: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
          },
          defaultWidth: "wide",
        }),
        day: _({
          values: {
            narrow: ["S", "M", "T", "W", "T", "F", "S"],
            short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            wide: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
          },
          defaultWidth: "wide",
        }),
        dayPeriod: _({
          values: {
            narrow: {
              am: "a",
              pm: "p",
              midnight: "mi",
              noon: "n",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
            abbreviated: {
              am: "AM",
              pm: "PM",
              midnight: "midnight",
              noon: "noon",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
            wide: {
              am: "a.m.",
              pm: "p.m.",
              midnight: "midnight",
              noon: "noon",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
          },
          defaultWidth: "wide",
          formattingValues: {
            narrow: {
              am: "a",
              pm: "p",
              midnight: "mi",
              noon: "n",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
            abbreviated: {
              am: "AM",
              pm: "PM",
              midnight: "midnight",
              noon: "noon",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
            wide: {
              am: "a.m.",
              pm: "p.m.",
              midnight: "midnight",
              noon: "noon",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
          },
          defaultFormattingWidth: "wide",
        }),
      };
      function V(e) {
        return function (t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = n.width,
            o =
              (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
            a = t.match(o);
          if (!a) return null;
          var i,
            d = a[0],
            u =
              (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
            c = Array.isArray(u)
              ? (function (e, t) {
                  for (var n = 0; n < e.length; n++) if (e[n].test(d)) return n;
                })(u)
              : (function (e, t) {
                  for (var n in e)
                    if (e.hasOwnProperty(n) && e[n].test(d)) return n;
                })(u);
          return (
            (i = e.valueCallback ? e.valueCallback(c) : c),
            {
              value: (i = n.valueCallback ? n.valueCallback(i) : i),
              rest: t.slice(d.length),
            }
          );
        };
      }
      var $,
        K = {
          ordinalNumber:
            (($ = {
              matchPattern: /^(\d+)(th|st|nd|rd)?/i,
              parsePattern: /\d+/i,
              valueCallback: function (e) {
                return parseInt(e, 10);
              },
            }),
            function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = e.match($.matchPattern);
              if (!n) return null;
              var r = n[0],
                o = e.match($.parsePattern);
              if (!o) return null;
              var a = $.valueCallback ? $.valueCallback(o[0]) : o[0];
              return {
                value: (a = t.valueCallback ? t.valueCallback(a) : a),
                rest: e.slice(r.length),
              };
            }),
          era: V({
            matchPatterns: {
              narrow: /^(b|a)/i,
              abbreviated:
                /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
              wide: /^(before christ|before common era|anno domini|common era)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^b/i, /^(a|c)/i] },
            defaultParseWidth: "any",
          }),
          quarter: V({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^q[1234]/i,
              wide: /^[1234](th|st|nd|rd)? quarter/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (e) {
              return e + 1;
            },
          }),
          month: V({
            matchPatterns: {
              narrow: /^[jfmasond]/i,
              abbreviated:
                /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
              wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /^j/i,
                /^f/i,
                /^m/i,
                /^a/i,
                /^m/i,
                /^j/i,
                /^j/i,
                /^a/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
              any: [
                /^ja/i,
                /^f/i,
                /^mar/i,
                /^ap/i,
                /^may/i,
                /^jun/i,
                /^jul/i,
                /^au/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: V({
            matchPatterns: {
              narrow: /^[smtwf]/i,
              short: /^(su|mo|tu|we|th|fr|sa)/i,
              abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
              wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
              any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: V({
            matchPatterns: {
              narrow:
                /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
              any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /^mi/i,
                noon: /^no/i,
                morning: /morning/i,
                afternoon: /afternoon/i,
                evening: /evening/i,
                night: /night/i,
              },
            },
            defaultParseWidth: "any",
          }),
        };
      const ee = {
        code: "en-US",
        formatDistance: function (e, t, n) {
          var r,
            o = R[e];
          return (
            (r =
              "string" == typeof o
                ? o
                : 1 === t
                ? o.one
                : o.other.replace("{{count}}", t.toString())),
            null != n && n.addSuffix
              ? n.comparison && n.comparison > 0
                ? "in " + r
                : r + " ago"
              : r
          );
        },
        formatLong: B,
        formatRelative: function (e, t, n, r) {
          return J[e];
        },
        localize: Z,
        match: K,
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      };
      var te = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        ne = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        re = /^'([^]*?)'?$/,
        oe = /''/g,
        ae = /[a-zA-Z]/;
      function ie(e, t, n) {
        var r, o, a, i, d, u, c, l, s, f, m, h, y, w, x, k, C, S;
        g(2, arguments);
        var M = String(t),
          D = T(),
          E =
            null !==
              (r =
                null !== (o = null == n ? void 0 : n.locale) && void 0 !== o
                  ? o
                  : D.locale) && void 0 !== r
              ? r
              : ee,
          P = b(
            null !==
              (a =
                null !==
                  (i =
                    null !==
                      (d =
                        null !==
                          (u = null == n ? void 0 : n.firstWeekContainsDate) &&
                        void 0 !== u
                          ? u
                          : null == n ||
                            null === (c = n.locale) ||
                            void 0 === c ||
                            null === (l = c.options) ||
                            void 0 === l
                          ? void 0
                          : l.firstWeekContainsDate) && void 0 !== d
                      ? d
                      : D.firstWeekContainsDate) && void 0 !== i
                  ? i
                  : null === (s = D.locale) ||
                    void 0 === s ||
                    null === (f = s.options) ||
                    void 0 === f
                  ? void 0
                  : f.firstWeekContainsDate) && void 0 !== a
              ? a
              : 1
          );
        if (!(P >= 1 && P <= 7))
          throw new RangeError(
            "firstWeekContainsDate must be between 1 and 7 inclusively"
          );
        var j = b(
          null !==
            (m =
              null !==
                (h =
                  null !==
                    (y =
                      null !== (w = null == n ? void 0 : n.weekStartsOn) &&
                      void 0 !== w
                        ? w
                        : null == n ||
                          null === (x = n.locale) ||
                          void 0 === x ||
                          null === (k = x.options) ||
                          void 0 === k
                        ? void 0
                        : k.weekStartsOn) && void 0 !== y
                    ? y
                    : D.weekStartsOn) && void 0 !== h
                ? h
                : null === (C = D.locale) ||
                  void 0 === C ||
                  null === (S = C.options) ||
                  void 0 === S
                ? void 0
                : S.weekStartsOn) && void 0 !== m
            ? m
            : 0
        );
        if (!(j >= 0 && j <= 6))
          throw new RangeError(
            "weekStartsOn must be between 0 and 6 inclusively"
          );
        if (!E.localize)
          throw new RangeError("locale must contain localize property");
        if (!E.formatLong)
          throw new RangeError("locale must contain formatLong property");
        var U = v(e);
        if (
          !(function (e) {
            if (
              (g(1, arguments),
              !(function (e) {
                return (
                  g(1, arguments),
                  e instanceof Date ||
                    ("object" === p(e) &&
                      "[object Date]" === Object.prototype.toString.call(e))
                );
              })(e) && "number" != typeof e)
            )
              return !1;
            var t = v(e);
            return !isNaN(Number(t));
          })(U)
        )
          throw new RangeError("Invalid time value");
        var q = (function (e) {
            var t = new Date(
              Date.UTC(
                e.getFullYear(),
                e.getMonth(),
                e.getDate(),
                e.getHours(),
                e.getMinutes(),
                e.getSeconds(),
                e.getMilliseconds()
              )
            );
            return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
          })(U),
          L = (function (e, t) {
            return (
              g(2, arguments),
              (function (e, t) {
                g(2, arguments);
                var n = v(e).getTime(),
                  r = b(t);
                return new Date(n + r);
              })(e, -b(t))
            );
          })(U, q),
          W = {
            firstWeekContainsDate: P,
            weekStartsOn: j,
            locale: E,
            _originalDate: U,
          };
        return M.match(ne)
          .map(function (e) {
            var t = e[0];
            return "p" === t || "P" === t ? (0, F[t])(e, E.formatLong) : e;
          })
          .join("")
          .match(te)
          .map(function (r) {
            if ("''" === r) return "'";
            var o,
              a,
              i = r[0];
            if ("'" === i)
              return (a = (o = r).match(re)) ? a[1].replace(oe, "'") : o;
            var d,
              u = A[i];
            if (u)
              return (
                (null != n && n.useAdditionalWeekYearTokens) ||
                  ((d = r), -1 === G.indexOf(d)) ||
                  I(r, t, String(e)),
                (null != n && n.useAdditionalDayOfYearTokens) ||
                  !(function (e) {
                    return -1 !== Q.indexOf(e);
                  })(r) ||
                  I(r, t, String(e)),
                u(L, r, E.localize, W)
              );
            if (i.match(ae))
              throw new RangeError(
                "Format string contains an unescaped latin alphabet character `" +
                  i +
                  "`"
              );
            return r;
          })
          .join("");
      }
      function de(e) {
        return (
          (de =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          de(e)
        );
      }
      function ue(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function ce(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(
              e,
              (void 0,
              (o = (function (e, t) {
                if ("object" !== de(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, "string");
                  if ("object" !== de(r)) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(r.key)),
              "symbol" === de(o) ? o : String(o)),
              r
            );
        }
        var o;
      }
      function le(e, t, n) {
        return (
          t && ce(e.prototype, t),
          n && ce(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function se(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      var fe = [],
        me = null,
        he = le(function e(t, n, r, o, a) {
          se(this, e),
            (this.id = t),
            (this.taskName = n),
            (this.description = r),
            (this.complete = o),
            (this.date = a);
        }),
        pe = (function () {
          function e(t) {
            se(this, e), (this.ProjectName = t), (this.ToDo = []);
          }
          return (
            le(e, [
              {
                key: "addItemToProject",
                value: function (e) {
                  this.ToDo.push(e);
                },
              },
            ]),
            e
          );
        })();
      function ge(e) {
        var t,
          n = e.parentNode.querySelector(".todo-item-title").innerText,
          r = (function (e, t) {
            var n =
              ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
            if (!n) {
              if (
                Array.isArray(e) ||
                (n = (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return ue(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                      "Object" === n &&
                        e.constructor &&
                        (n = e.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(e)
                        : "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? ue(e, t)
                        : void 0
                    );
                  }
                })(e)) ||
                (t && e && "number" == typeof e.length)
              ) {
                n && (e = n);
                var r = 0,
                  o = function () {};
                return {
                  s: o,
                  n: function () {
                    return r >= e.length
                      ? { done: !0 }
                      : { done: !1, value: e[r++] };
                  },
                  e: function (e) {
                    throw e;
                  },
                  f: o,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var a,
              i = !0,
              d = !1;
            return {
              s: function () {
                n = n.call(e);
              },
              n: function () {
                var e = n.next();
                return (i = e.done), e;
              },
              e: function (e) {
                (d = !0), (a = e);
              },
              f: function () {
                try {
                  i || null == n.return || n.return();
                } finally {
                  if (d) throw a;
                }
              },
            };
          })(fe);
        try {
          for (r.s(); !(t = r.n()).done; ) {
            var o = t.value,
              a = o.ToDo.find(function (e) {
                return e.taskName === n;
              });
            if (a) {
              o.ToDo.splice(o.ToDo.indexOf(a), 1), o.ToDo.push(a);
              break;
            }
          }
        } catch (e) {
          r.e(e);
        } finally {
          r.f();
        }
      }
      function ve() {
        var e = document.querySelector(".need-todo");
        (e.innerHTML = ""),
          me &&
            me.ToDo.forEach(function (t) {
              var n = document.createElement("div"),
                r = document.createElement("input"),
                o = document.createElement("div"),
                a = document.createElement("p"),
                i = document.createElement("p"),
                d = document.createElement("span"),
                u = document.createElement("div"),
                c = document.createElement("p");
              n.appendChild(u),
                u.appendChild(r),
                u.appendChild(o),
                o.appendChild(a),
                o.appendChild(i),
                o.appendChild(c),
                n.appendChild(d),
                (a.innerText = t.taskName),
                (i.innerText = t.description),
                (d.innerText = "delete"),
                (c.innerText = t.date),
                u.classList.add("input-container"),
                n.classList.add("to-do"),
                a.classList.add("todo-item-title"),
                r.classList.add("todo-checkbox"),
                r.setAttribute("type", "checkbox"),
                r.setAttribute("name", "todo-item-check"),
                c.classList.add("task-due-date"),
                o.classList.add("todo-box"),
                i.classList.add("todo-description"),
                d.classList.add("material-symbols-outlined"),
                d.setAttribute("id", "delete-todo"),
                (r.checked = t.complete),
                e.appendChild(n);
            }),
          document
            .querySelector(".need-todo")
            .addEventListener("click", function (e) {
              if ("delete-todo" === e.target.id) {
                var t =
                    e.target.parentNode.querySelector(
                      ".todo-item-title"
                    ).innerText,
                  n = fe.find(function (e) {
                    return e.ToDo.some(function (e) {
                      return e.taskName === t;
                    });
                  });
                if (n) {
                  var r = n.ToDo.find(function (e) {
                      return e.taskName === t;
                    }),
                    o = n.ToDo.indexOf(r);
                  n.ToDo.splice(o, 1), ve();
                }
              }
            });
      }
      function be() {
        var e = document.querySelector(".project-list");
        (e.innerHTML = ""),
          fe.forEach(function (t) {
            var n = document.createElement("p");
            n.classList.add("project-item"),
              (n.innerText = t.ProjectName),
              n.addEventListener("click", function () {
                !(function (e) {
                  me = e;
                })(t),
                  ve();
              }),
              e.appendChild(n);
          });
      }
      document.addEventListener("DOMContentLoaded", function () {
        var e,
          t,
          n,
          r,
          o = new pe("My Todo List");
        fe.push(o),
          (e = document.querySelector("#add-project")),
          (t = document.querySelector(".project-modal")),
          (document.querySelector(".project-title").innerText = ""),
          e.addEventListener("click", function () {
            t.showModal();
          }),
          (function () {
            var e = document.querySelector(".cancel-project-button"),
              t = document.querySelector(".project-modal");
            e.addEventListener("click", function () {
              t.close();
            });
          })(),
          (function () {
            var e = document.querySelector(".add-project-button"),
              t = document.querySelector(".project-title"),
              n = document.querySelector(".project-modal");
            e.addEventListener("click", function (e) {
              e.preventDefault();
              var r = document.createElement("p");
              r.classList.add("project-item"),
                (r.innerText = t.value),
                (function (e) {
                  fe.push(e);
                })(new pe(t.value)),
                (t.value = ""),
                n.close(),
                be();
            });
          })(),
          be(),
          (function () {
            var e = document.querySelector("#add-todo"),
              t = document.querySelector("dialog");
            (document.querySelector(".task-title").innerText = ""),
              e.addEventListener("click", function () {
                t.showModal();
              });
          })(),
          (function () {
            var e = document.querySelector(".cancel-button"),
              t = document.querySelector("dialog");
            e.addEventListener("click", function () {
              t.close();
            });
          })(),
          (function (e) {
            var t = document.querySelector(".add-task-button"),
              n = document.querySelector("dialog"),
              r = document.querySelector(".task-title"),
              o = document.querySelector(".task-description"),
              a = document.querySelector(".need-todo"),
              i = document.querySelector(".due-date");
            t.addEventListener("click", function (e) {
              if ((e.preventDefault(), me)) {
                var t = document.createElement("div"),
                  d = document.createElement("input"),
                  u = document.createElement("div"),
                  c = document.createElement("p"),
                  l = document.createElement("p"),
                  s = document.createElement("span"),
                  f = document.createElement("div"),
                  m = document.createElement("p");
                a.appendChild(t),
                  t.appendChild(f),
                  f.appendChild(d),
                  f.appendChild(u),
                  u.appendChild(c),
                  u.appendChild(l),
                  u.appendChild(m),
                  t.appendChild(s),
                  (c.innerText = r.value),
                  (l.innerText = o.value),
                  (s.innerText = "delete"),
                  ie(new Date(2014, 1, 11), "MM/dd/yyyy");
                var h = new Date(i.value);
                (m.innerText = h),
                  f.classList.add("input-container"),
                  t.classList.add("to-do"),
                  c.classList.add("todo-item-title"),
                  d.classList.add("todo-checkbox"),
                  u.classList.add("todo-box"),
                  l.classList.add("todo-description"),
                  m.classList.add("task-due-date"),
                  s.classList.add("material-symbol-outlined"),
                  s.setAttribute("id", "delete-todo"),
                  d.setAttribute("type", "checkbox"),
                  d.setAttribute("name", "todo-item-check");
                var p = new he(
                  Date.now() + Math.random().toString(36).substring(2, 9),
                  r.value,
                  o.value,
                  !1,
                  h
                );
                me.addItemToProject(p),
                  ge(d),
                  (r.value = ""),
                  (o.value = ""),
                  n.close(),
                  ve();
              } else alert("Please select a project to add todos.");
            });
          })(),
          document
            .querySelector(".need-todo")
            .addEventListener("change", function (e) {
              e.target.classList.contains("todo-checkbox") &&
                (ge(e.target), ve());
            }),
          (n = document.querySelector(".dark-mode")),
          (r = document.querySelector("body")),
          n.addEventListener("click", function () {
            r.classList.toggle("dark-mode-theme");
          }),
          console.log(fe);
      });
    })();
})();
