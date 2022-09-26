(() => {
  var e,
    t = {
      393: (e, t, n) => {
        "use strict";
        var o,
          r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            },
          i = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var o = t[n];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o);
              }
            }
            return function (t, n, o) {
              return n && e(t.prototype, n), o && e(t, o), t;
            };
          })(),
          a = n(537);
        var s = (function (e) {
          function t(e) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            var n = (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            n.name = "HtmlLangPlugin";
            return (n.options = r({}, {}, e)), (n.parser = new DOMParser()), n;
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            i(t, [
              {
                key: "mount",
                value: function () {
                  var e = this;
                  this.swup.on("contentReplaced", function () {
                    var t = e.swup.cache.getCurrentPage().originalContent,
                      n = e.parser
                        .parseFromString(t, "text/html")
                        .documentElement.getAttribute("lang");
                    document.documentElement.getAttribute("lang") !== n &&
                      document.documentElement.setAttribute("lang", n);
                  });
                },
              },
              { key: "unmount", value: function () {} },
            ]),
            t
          );
        })(((o = a) && o.__esModule ? o : { default: o }).default);
        t.Z = s;
      },
      537: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })();
        var o = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.isSwupPlugin = !0);
          }
          return (
            n(e, [
              { key: "mount", value: function () {} },
              { key: "unmount", value: function () {} },
              { key: "_beforeMount", value: function () {} },
              { key: "_afterUnmount", value: function () {} },
            ]),
            e
          );
        })();
        t.default = o;
      },
      353: (e, t, n) => {
        "use strict";
        var o = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var o = t[n];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o);
              }
            }
            return function (t, n, o) {
              return n && e(t.prototype, n), o && e(t, o), t;
            };
          })(),
          r = l(n(537)),
          i = l(n(974)),
          a = n(474),
          s = n(4);
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function c(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function u(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }
        var d = (function (e) {
          function t() {
            var e, n, o;
            c(this, t);
            for (var r = arguments.length, i = Array(r), l = 0; l < r; l++)
              i[l] = arguments[l];
            return (
              (n = o =
                u(
                  this,
                  (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                    e,
                    [this].concat(i)
                  )
                )),
              (o.name = "PreloadPlugin"),
              (o.onContentReplaced = function () {
                o.swup.preloadPages();
              }),
              (o.onMouseover = function (e) {
                var t = o.swup;
                t.triggerEvent("hoverLink", e);
                var n = new s.Link(e.delegateTarget);
                n.getAddress() === (0, s.getCurrentUrl)() ||
                  t.cache.exists(n.getAddress()) ||
                  null != t.preloadPromise ||
                  ((t.preloadPromise = t.preloadPage(n.getAddress())),
                  (t.preloadPromise.route = n.getAddress()),
                  t.preloadPromise.finally(function () {
                    t.preloadPromise = null;
                  }));
              }),
              (o.preloadPage = function (e) {
                var t = o.swup,
                  n = new s.Link(e);
                return new Promise(function (e, o) {
                  n.getAddress() == (0, s.getCurrentUrl)() ||
                  t.cache.exists(n.getAddress())
                    ? e(t.cache.getPage(n.getAddress()))
                    : (0, s.fetch)(
                        {
                          url: n.getAddress(),
                          headers: t.options.requestHeaders,
                        },
                        function (r) {
                          if (500 === r.status)
                            t.triggerEvent("serverError"), o();
                          else {
                            var i = t.getPageData(r);
                            if (null == i) return void o(n.getAddress());
                            (i.url = n.getAddress()),
                              t.cache.cacheUrl(i, t.options.debugMode),
                              t.triggerEvent("pagePreloaded"),
                              e(t.cache.getPage(n.getAddress()));
                          }
                        }
                      );
                });
              }),
              (o.preloadPages = function () {
                (0, a.queryAll)("[data-swup-preload]").forEach(function (e) {
                  o.swup.preloadPage(e.href);
                });
              }),
              u(o, n)
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            o(t, [
              {
                key: "mount",
                value: function () {
                  var e = this.swup;
                  (e._handlers.pagePreloaded = []),
                    (e._handlers.hoverLink = []),
                    (e.preloadPage = this.preloadPage),
                    (e.preloadPages = this.preloadPages),
                    (e.delegatedListeners.mouseover = (0, i.default)(
                      document.body,
                      e.options.linkSelector,
                      "mouseover",
                      this.onMouseover.bind(this)
                    )),
                    e.preloadPages(),
                    e.on("contentReplaced", this.onContentReplaced);
                },
              },
              {
                key: "unmount",
                value: function () {
                  var e = this.swup;
                  (e._handlers.pagePreloaded = null),
                    (e._handlers.hoverLink = null),
                    (e.preloadPage = null),
                    (e.preloadPages = null),
                    e.delegatedListeners.mouseover.destroy(),
                    e.off("contentReplaced", this.onContentReplaced);
                },
              },
            ]),
            t
          );
        })(r.default);
        t.Z = d;
      },
      408: (e) => {
        if ("undefined" != typeof Element && !Element.prototype.matches) {
          var t = Element.prototype;
          t.matches =
            t.matchesSelector ||
            t.mozMatchesSelector ||
            t.msMatchesSelector ||
            t.oMatchesSelector ||
            t.webkitMatchesSelector;
        }
        e.exports = function (e, t) {
          for (; e && 9 !== e.nodeType; ) {
            if ("function" == typeof e.matches && e.matches(t)) return e;
            e = e.parentNode;
          }
        };
      },
      974: (e, t, n) => {
        var o = n(408);
        function r(e, t, n, o, r) {
          var a = i.apply(this, arguments);
          return (
            e.addEventListener(n, a, r),
            {
              destroy: function () {
                e.removeEventListener(n, a, r);
              },
            }
          );
        }
        function i(e, t, n, r) {
          return function (n) {
            (n.delegateTarget = o(n.target, t)),
              n.delegateTarget && r.call(e, n);
          };
        }
        e.exports = function (e, t, n, o, i) {
          return "function" == typeof e.addEventListener
            ? r.apply(null, arguments)
            : "function" == typeof n
            ? r.bind(null, document).apply(null, arguments)
            : ("string" == typeof e && (e = document.querySelectorAll(e)),
              Array.prototype.map.call(e, function (e) {
                return r(e, t, n, o, i);
              }));
        };
      },
      864: (e, t, n) => {
        "use strict";
        var o =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            },
          r =
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
                },
          i = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var o = t[n];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o);
              }
            }
            return function (t, n, o) {
              return n && e(t.prototype, n), o && e(t, o), t;
            };
          })(),
          a = l(n(537)),
          s = l(n(357));
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var c = (function (e) {
          function t(e) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            var n = (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            (n.name = "ScrollPlugin"),
              (n.getOffset = function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : null;
                switch (r(n.options.offset)) {
                  case "number":
                    return n.options.offset;
                  case "function":
                    return parseInt(n.options.offset(e), 10);
                  default:
                    return parseInt(n.options.offset, 10);
                }
              }),
              (n.onSamePage = function () {
                n.swup.scrollTo(0);
              }),
              (n.onSamePageWithHash = function (e) {
                var t = e.delegateTarget,
                  o = document.querySelector(t.hash),
                  r =
                    o.getBoundingClientRect().top +
                    window.pageYOffset -
                    n.getOffset(o);
                n.swup.scrollTo(r);
              }),
              (n.onTransitionStart = function (e) {
                n.options.doScrollingRightAway &&
                  !n.swup.scrollToElement &&
                  n.doScrolling(e);
              }),
              (n.onContentReplaced = function (e) {
                (n.options.doScrollingRightAway && !n.swup.scrollToElement) ||
                  n.doScrolling(e);
              }),
              (n.doScrolling = function (e) {
                var t = n.swup;
                if (!e || t.options.animateHistoryBrowsing)
                  if (null != t.scrollToElement) {
                    var o = document.querySelector(t.scrollToElement);
                    if (null != o) {
                      var r =
                        o.getBoundingClientRect().top +
                        window.pageYOffset -
                        n.getOffset(o);
                      t.scrollTo(r);
                    } else
                      console.warn(
                        "Element " + t.scrollToElement + " not found"
                      );
                    t.scrollToElement = null;
                  } else t.scrollTo(0);
              });
            return (
              (n.options = o(
                {},
                {
                  doScrollingRightAway: !1,
                  animateScroll: !0,
                  scrollFriction: 0.3,
                  scrollAcceleration: 0.04,
                  offset: 0,
                },
                e
              )),
              n
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            i(t, [
              {
                key: "mount",
                value: function () {
                  var e = this,
                    t = this.swup;
                  (t._handlers.scrollDone = []),
                    (t._handlers.scrollStart = []),
                    (this.scrl = new s.default({
                      onStart: function () {
                        return t.triggerEvent("scrollStart");
                      },
                      onEnd: function () {
                        return t.triggerEvent("scrollDone");
                      },
                      onCancel: function () {
                        return t.triggerEvent("scrollDone");
                      },
                      friction: this.options.scrollFriction,
                      acceleration: this.options.scrollAcceleration,
                    })),
                    (t.scrollTo = function (n) {
                      e.options.animateScroll
                        ? e.scrl.scrollTo(n)
                        : (t.triggerEvent("scrollStart"),
                          window.scrollTo(0, n),
                          t.triggerEvent("scrollDone"));
                    }),
                    t.options.animateHistoryBrowsing &&
                      (window.history.scrollRestoration = "manual"),
                    t.on("samePage", this.onSamePage),
                    t.on("samePageWithHash", this.onSamePageWithHash),
                    t.on("transitionStart", this.onTransitionStart),
                    t.on("contentReplaced", this.onContentReplaced);
                },
              },
              {
                key: "unmount",
                value: function () {
                  (this.swup.scrollTo = null),
                    delete this.scrl,
                    (this.scrl = null),
                    this.swup.off("samePage", this.onSamePage),
                    this.swup.off("samePageWithHash", this.onSamePageWithHash),
                    this.swup.off("transitionStart", this.onTransitionStart),
                    this.swup.off("contentReplaced", this.onContentReplaced),
                    (this.swup._handlers.scrollDone = null),
                    (this.swup._handlers.scrollStart = null),
                    (window.history.scrollRestoration = "auto");
                },
              },
            ]),
            t
          );
        })(a.default);
        t.Z = c;
      },
      10: (e, t, n) => {
        "use strict";
        var o = "hauswien".split("");
        function r(e, t) {
          var n = document.createElement("img");
          return (
            (n.src = (function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
              return (
                location.origin +
                "/assets/letters/".concat(e, "/").concat(t, ".svg")
              );
            })(e, t)),
            (n.dataset.index = t),
            n.addEventListener("click", function () {
              return (function (e, t) {
                var n = e.parentElement,
                  o = e,
                  i = (e.dataset.index % 4) + 1,
                  a = r(t, i);
                a.classList.add("fading-in"),
                  o.classList.add("fading-out"),
                  n.classList.add("is-animating"),
                  n.appendChild(a),
                  window.setTimeout(function () {
                    o.parentElement.removeChild(e),
                      a.classList.remove("fading-in"),
                      n.classList.remove("is-animating");
                  }, 1e3);
              })(n, e);
            }),
            n
          );
        }
        var i = n(593),
          a = n(353),
          s = n(393),
          l = n(864),
          c = {
            tocSelector: ".js-toc",
            contentSelector: ".t-text-body",
            headingSelector: "h1, h2, h3",
            hasInnerContainers: !0,
            headingsOffset: 100,
            scrollSmoothOffset: -100,
          },
          u = n(866);
        document.querySelector("#lettergrid") &&
          (function e() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              i = [],
              a = 0;
            if (
              (((t = document.querySelector(t)).innerHTML = ""),
              o.forEach(function (e) {
                var o = document.createElement("div"),
                  a = r(e, Math.floor(4 * Math.random()) + 1);
                o.appendChild(a), n ? i.push(o) : t.appendChild(o);
              }),
              0 != n)
            )
              var s = setInterval(function () {
                  l();
                }, n),
                l = function () {
                  a >= i.length
                    ? (clearInterval(s), e("#lettergrid", n), (a = 0))
                    : (t.appendChild(i[a]), a++);
                };
          })("#lettergrid");
        var d = ["/", "/de/", "/de"],
          f = function () {
            console.log(location.pathname),
              d.indexOf(window.location.pathname) >= 0
                ? document
                    .querySelector("#lettergrid")
                    .classList.remove("faded")
                : document.querySelector("#lettergrid").classList.add("faded"),
              document.querySelector(".js-toc") && u.init(c),
              document
                .querySelector("#nlsub")
                .addEventListener("submit", function (e) {
                  !(function (e) {
                    if (
                      (e.preventDefault(),
                      "" !== e.target.querySelector("#js-validate-robot").value)
                    )
                      return !1;
                    for (
                      var t = e.target.action.replace("/post?", "/post-json?"),
                        n = "",
                        o = e.target.querySelectorAll("#js-form-inputs input"),
                        r = 0;
                      r < o.length;
                      r++
                    )
                      n +=
                        "&" + o[r].name + "=" + encodeURIComponent(o[r].value);
                    var i = document.createElement("script");
                    (i.src = t + n),
                      document.body.appendChild(i),
                      (window.callback = function (e) {
                        delete window.callback,
                          document.body.removeChild(i),
                          (document.getElementById(
                            "js-subscribe-response"
                          ).innerHTML = e.msg);
                      });
                  })(e);
                }),
              "home" == document.querySelector("main").dataset.layout
                ? document.body.classList.add("is-home")
                : document.body.classList.remove("is-home"),
              document.querySelector(".c-headline-image-container") &&
                (document
                  .querySelector(".c-headline-image-container")
                  .classList.add("is-animating"),
                window.setTimeout(function () {
                  document
                    .querySelector(".c-headline-image-container")
                    .classList.remove("is-animating");
                }, 500));
          },
          h = new i.Z({
            plugins: [new a.Z(), new s.Z(), new l.Z({ animateScroll: !1 })],
            containers: ["#swup", ".c-nav:not(.c-menu-button-container)"],
          });
        f(),
          h.on("willReplaceContent", function () {
            u.destroy();
          }),
          h.on("contentReplaced", f),
          h.on("clickLink", function (e) {
            e.target.classList.contains("is-menu-link") &&
              (document.querySelectorAll(".c-nav li").forEach(function (t) {
                t.closest(".c-nav") == e.target.closest(".c-nav") &&
                  (t == e.target
                    ? t.classList.add("is-active")
                    : t.classList.remove("is-active"));
              }),
              document.body.classList.contains("is-menu-open") &&
                document.body.classList.remove("is-menu-open"));
          }),
          document
            .querySelector(".c-menu-button")
            .addEventListener("click", function () {
              document.body.classList.toggle("is-menu-open");
            });
      },
      828: (e) => {
        if ("undefined" != typeof Element && !Element.prototype.matches) {
          var t = Element.prototype;
          t.matches =
            t.matchesSelector ||
            t.mozMatchesSelector ||
            t.msMatchesSelector ||
            t.oMatchesSelector ||
            t.webkitMatchesSelector;
        }
        e.exports = function (e, t) {
          for (; e && 9 !== e.nodeType; ) {
            if ("function" == typeof e.matches && e.matches(t)) return e;
            e = e.parentNode;
          }
        };
      },
      438: (e, t, n) => {
        var o = n(828);
        function r(e, t, n, r) {
          return function (n) {
            (n.delegateTarget = o(n.target, t)),
              n.delegateTarget && r.call(e, n);
          };
        }
        e.exports = function (e, t, n, o, i) {
          var a = r.apply(this, arguments);
          return (
            e.addEventListener(n, a, i),
            {
              destroy: function () {
                e.removeEventListener(n, a, i);
              },
            }
          );
        };
      },
      634: () => {},
      357: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          };
        t.default = function e(t) {
          var o = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this._raf = null),
            (this._positionY = 0),
            (this._velocityY = 0),
            (this._targetPositionY = 0),
            (this._targetPositionYWithOffset = 0),
            (this._direction = 0),
            (this.scrollTo = function (e) {
              if (e && e.nodeType)
                o._targetPositionY = Math.round(
                  e.getBoundingClientRect().top + window.pageYOffset
                );
              else {
                if (parseInt(o._targetPositionY) !== o._targetPositionY)
                  return void console.error(
                    "Argument must be a number or an element."
                  );
                o._targetPositionY = Math.round(e);
              }
              o._targetPositionY >
                document.documentElement.scrollHeight - window.innerHeight &&
                (o._targetPositionY =
                  document.documentElement.scrollHeight - window.innerHeight),
                (o._positionY =
                  document.body.scrollTop ||
                  document.documentElement.scrollTop),
                (o._direction = o._positionY > o._targetPositionY ? -1 : 1),
                (o._targetPositionYWithOffset =
                  o._targetPositionY + o._direction),
                (o._velocityY = 0),
                o._positionY !== o._targetPositionY
                  ? (o.options.onStart(), o._animate())
                  : o.options.onAlreadyAtPositions();
            }),
            (this._animate = function () {
              o._update();
              o._render(),
                (1 === o._direction && o._targetPositionY > o._positionY) ||
                (-1 === o._direction && o._targetPositionY < o._positionY)
                  ? ((o._raf = requestAnimationFrame(o._animate)),
                    o.options.onTick())
                  : ((o._positionY = o._targetPositionY),
                    o._render(),
                    (o._raf = null),
                    o.options.onTick(),
                    o.options.onEnd());
            }),
            (this._update = function () {
              var e = o._targetPositionYWithOffset - o._positionY,
                t = e * o.options.acceleration;
              return (
                (o._velocityY += t),
                (o._velocityY *= o.options.friction),
                (o._positionY += o._velocityY),
                Math.abs(e)
              );
            }),
            (this._render = function () {
              window.scrollTo(0, o._positionY);
            });
          (this.options = n(
            {},
            {
              onAlreadyAtPositions: function () {},
              onCancel: function () {},
              onEnd: function () {},
              onStart: function () {},
              onTick: function () {},
              friction: 0.7,
              acceleration: 0.04,
            },
            t
          )),
            t && t.friction && (this.options.friction = 1 - t.friction),
            window.addEventListener(
              "mousewheel",
              function (e) {
                o._raf &&
                  (o.options.onCancel(),
                  cancelAnimationFrame(o._raf),
                  (o._raf = null));
              },
              { passive: !0 }
            );
        };
      },
      341: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })();
        var o = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              t instanceof Element || t instanceof SVGElement
                ? (this.link = t)
                : ((this.link = document.createElement("a")),
                  (this.link.href = t));
          }
          return (
            n(e, [
              {
                key: "getPath",
                value: function () {
                  var e = this.link.pathname;
                  return "/" !== e[0] && (e = "/" + e), e;
                },
              },
              {
                key: "getAddress",
                value: function () {
                  var e = this.link.pathname + this.link.search;
                  return (
                    this.link.getAttribute("xlink:href") &&
                      (e = this.link.getAttribute("xlink:href")),
                    "/" !== e[0] && (e = "/" + e),
                    e
                  );
                },
              },
              {
                key: "getHash",
                value: function () {
                  return this.link.hash;
                },
              },
            ]),
            e
          );
        })();
        t.default = o;
      },
      628: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        t.default = function (e) {
          var t = e
            .toString()
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/\//g, "-")
            .replace(/[^\w\-]+/g, "")
            .replace(/\-\-+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, "");
          return (
            "/" === t[0] && (t = t.splice(1)), "" === t && (t = "homepage"), t
          );
        };
      },
      477: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        t.default = function (e) {
          window.history.pushState(
            {
              url: e || window.location.href.split(window.location.hostname)[1],
              random: Math.random(),
              source: "swup",
            },
            document.getElementsByTagName("title")[0].innerText,
            e || window.location.href.split(window.location.hostname)[1]
          );
        };
      },
      47: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          };
        t.default = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            o = {
              url: window.location.pathname + window.location.search,
              method: "GET",
              data: null,
              headers: {},
            },
            r = n({}, o, e),
            i = new XMLHttpRequest();
          return (
            (i.onreadystatechange = function () {
              4 === i.readyState && (i.status, t(i));
            }),
            i.open(r.method, r.url, !0),
            Object.keys(r.headers).forEach(function (e) {
              i.setRequestHeader(e, r.headers[e]);
            }),
            i.send(r.data),
            i
          );
        };
      },
      213: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        t.default = function () {
          return window.location.pathname + window.location.search;
        };
      },
      502: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o =
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
                },
          r = n(474);
        t.default = function (e, t) {
          var n = document.createElement("html");
          n.innerHTML = e;
          for (
            var i = [],
              a = function (e) {
                if (null == n.querySelector(t[e])) return { v: null };
                (0, r.queryAll)(t[e]).forEach(function (o, a) {
                  (0, r.queryAll)(t[e], n)[a].setAttribute(
                    "data-swup",
                    i.length
                  ),
                    i.push((0, r.queryAll)(t[e], n)[a].outerHTML);
                });
              },
              s = 0;
            s < t.length;
            s++
          ) {
            var l = a(s);
            if ("object" === (void 0 === l ? "undefined" : o(l))) return l.v;
          }
          var c = {
            title: n.querySelector("title").innerText,
            pageClass: n.querySelector("body").className,
            originalContent: e,
            blocks: i,
          };
          return (n.innerHTML = ""), (n = null), c;
        };
      },
      4: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Link =
            t.markSwupElements =
            t.getCurrentUrl =
            t.transitionEnd =
            t.fetch =
            t.getDataFromHtml =
            t.createHistoryRecord =
            t.classify =
              void 0);
        var o = d(n(628)),
          r = d(n(477)),
          i = d(n(502)),
          a = d(n(47)),
          s = d(n(880)),
          l = d(n(213)),
          c = d(n(587)),
          u = d(n(341));
        function d(e) {
          return e && e.__esModule ? e : { default: e };
        }
        (t.classify = o.default),
          (t.createHistoryRecord = r.default),
          (t.getDataFromHtml = i.default),
          (t.fetch = a.default),
          (t.transitionEnd = s.default),
          (t.getCurrentUrl = l.default),
          (t.markSwupElements = c.default),
          (t.Link = u.default);
      },
      587: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = n(474);
        t.default = function (e, t) {
          for (
            var n = 0,
              r = function (r) {
                null == e.querySelector(t[r])
                  ? console.warn("Element " + t[r] + " is not in current page.")
                  : (0, o.queryAll)(t[r]).forEach(function (i, a) {
                      (0, o.queryAll)(t[r], e)[a].setAttribute("data-swup", n),
                        n++;
                    });
              },
              i = 0;
            i < t.length;
            i++
          )
            r(i);
        };
      },
      880: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        t.default = function () {
          var e = document.createElement("div"),
            t = {
              WebkitTransition: "webkitTransitionEnd",
              MozTransition: "transitionend",
              OTransition: "oTransitionEnd otransitionend",
              transition: "transitionend",
            };
          for (var n in t) if (void 0 !== e.style[n]) return t[n];
          return !1;
        };
      },
      593: (e, t, n) => {
        "use strict";
        var o =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            },
          r = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var o = t[n];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o);
              }
            }
            return function (t, n, o) {
              return n && e(t.prototype, n), o && e(t, o), t;
            };
          })(),
          i = y(n(438)),
          a = y(n(331)),
          s = y(n(275)),
          l = y(n(710)),
          c = y(n(198)),
          u = y(n(601)),
          d = y(n(889)),
          f = y(n(728)),
          h = y(n(578)),
          p = y(n(315)),
          m = n(582),
          g = n(474),
          v = n(4);
        function y(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var w = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
            var n = {
                animateHistoryBrowsing: !1,
                animationSelector: '[class*="transition-"]',
                linkSelector:
                  'a[href^="' +
                  window.location.origin +
                  '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
                cache: !0,
                containers: ["#swup"],
                requestHeaders: {
                  "X-Requested-With": "swup",
                  Accept: "text/html, application/xhtml+xml",
                },
                plugins: [],
                skipPopStateHandling: function (e) {
                  return !(e.state && "swup" === e.state.source);
                },
              },
              r = o({}, n, t);
            (this._handlers = {
              animationInDone: [],
              animationInStart: [],
              animationOutDone: [],
              animationOutStart: [],
              animationSkipped: [],
              clickLink: [],
              contentReplaced: [],
              disabled: [],
              enabled: [],
              openPageInNewTab: [],
              pageLoaded: [],
              pageRetrievedFromCache: [],
              pageView: [],
              popState: [],
              samePage: [],
              samePageWithHash: [],
              serverError: [],
              transitionStart: [],
              transitionEnd: [],
              willReplaceContent: [],
            }),
              (this.scrollToElement = null),
              (this.preloadPromise = null),
              (this.options = r),
              (this.plugins = []),
              (this.transition = {}),
              (this.delegatedListeners = {}),
              (this.boundPopStateHandler = this.popStateHandler.bind(this)),
              (this.cache = new a.default()),
              (this.cache.swup = this),
              (this.loadPage = s.default),
              (this.renderPage = l.default),
              (this.triggerEvent = c.default),
              (this.on = u.default),
              (this.off = d.default),
              (this.updateTransition = f.default),
              (this.getAnimationPromises = h.default),
              (this.getPageData = p.default),
              (this.log = function () {}),
              (this.use = m.use),
              (this.unuse = m.unuse),
              (this.findPlugin = m.findPlugin),
              this.enable();
          }
          return (
            r(e, [
              {
                key: "enable",
                value: function () {
                  var e = this;
                  if ("undefined" != typeof Promise) {
          s