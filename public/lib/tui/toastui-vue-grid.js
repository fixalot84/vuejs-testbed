!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t(require("tui-grid")))
    : "function" == typeof define && define.amd
    ? define(["tui-grid"], t)
    : "object" == typeof exports
    ? (exports.toastui = t(require("tui-grid")))
    : (e.toastui = t(e.tui.Grid));
})(window, function (e) {
  return (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var i = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
          for (var i in e)
            n.d(
              r,
              i,
              function (t) {
                return e[t];
              }.bind(null, i)
            );
        return r;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 1))
    );
  })([
    function (t, n) {
      t.exports = e;
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "Grid", function () {
          return f;
        });
      var r = function () {
        var e = this.$createElement;
        return (this._self._c || e)("div", { ref: "tuiGrid" });
      };
      r._withStripped = !0;
      var i = n(0),
        o = n.n(i),
        a = ["default", "striped", "clean"],
        s = ["en", "ko"];
      var u = (function (e, t, n, r, i, o, a, s) {
        var u,
          f = "function" == typeof e ? e.options : e;
        if (
          (t && ((f.render = t), (f.staticRenderFns = n), (f._compiled = !0)),
          r && (f.functional = !0),
          o && (f._scopeId = "data-v-" + o),
          a
            ? ((u = function (e) {
                (e = e || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                  (e = __VUE_SSR_CONTEXT__),
                  i && i.call(this, e),
                  e && e._registeredComponents && e._registeredComponents.add(a);
              }),
              (f._ssrRegister = u))
            : i &&
              (u = s
                ? function () {
                    i.call(this, (f.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : i),
          u)
        )
          if (f.functional) {
            f._injectStyles = u;
            var c = f.render;
            f.render = function (e, t) {
              return u.call(t), c(e, t);
            };
          } else {
            var l = f.beforeCreate;
            f.beforeCreate = l ? [].concat(l, u) : [u];
          }
        return { exports: e, options: f };
      })(
        {
          name: "TuiGrid",
          props: {
            data: { type: [Array, Object], required: !0 },
            columns: { type: Array, required: !0 },
            options: {
              type: Object,
              default: function () {
                return {};
              },
            },
            theme: {
              type: [String, Object],
              validator: function (e) {
                return "string" == typeof e ? a.indexOf(e) > -1 : e.hasOwnProperty("name") && e.hasOwnProperty("value");
              },
            },
            language: {
              type: [String, Object],
              validator: function (e) {
                return "string" == typeof e ? s.indexOf(e) > -1 : e.hasOwnProperty("name") && e.hasOwnProperty("value");
              },
            },
          },
          mounted: function () {
            var e = Object.assign(this.options || {}, this.$attrs, { el: this.$refs.tuiGrid, data: this.data, columns: this.columns });
            (this.gridInstance = new o.a(e)), this.addEventListeners(), this.applyTheme(), this.setLanguage();
          },
          beforeDestroy: function () {
            var e = this;
            Object.keys(this.$listeners).forEach(function (t) {
              e.gridInstance.off(t);
            }),
              this.gridInstance.destroy(),
              (this.gridInstance = null);
          },
          methods: {
            addEventListeners: function () {
              for (
                var e = this,
                  t = function () {
                    var t = r[n];
                    e.gridInstance.on(t, function () {
                      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                      return e.$emit.apply(e, [t].concat(r));
                    });
                  },
                  n = 0,
                  r = Object.keys(this.$listeners);
                n < r.length;
                n++
              )
                t();
            },
            applyTheme: function () {
              this.theme && ("string" == typeof this.theme ? o.a.applyTheme(this.theme) : o.a.applyTheme(this.theme.name, this.theme.value));
            },
            setLanguage: function () {
              this.language && ("string" == typeof this.language ? o.a.setLanguage(this.language) : o.a.setLanguage(this.language.name, this.language.value));
            },
            getRootElement: function () {
              return this.$refs.tuiGrid;
            },
            invoke: function (e) {
              for (var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
              return "function" == typeof this.gridInstance[e] ? (t = this.gridInstance)[e].apply(t, r) : null;
            },
          },
        },
        r,
        [],
        !1,
        null,
        null,
        null
      );
      u.options.__file = "src/Grid.vue";
      var f = u.exports;
    },
  ]);
});
