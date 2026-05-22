import { renderStoryString as V1, persona_description_positions as cv } from "../../../../power-user.js";
import { parseMesExamples as $1, baseChatReplace as Y1, chat_metadata as zs, getMaxContextSize as X1, name1 as Ea, name2 as Fr, this_chid as sn, extension_prompt_types as Ca, depth_prompt_role_default as F1, depth_prompt_depth_default as Q1, amount_gen as K1, max_context as J1 } from "../../../../../script.js";
import { createWorldInfoEntry as W1, world_info_include_names as e2, wi_anchor_position as t2, selected_world_info as n2, METADATA_KEY as r2, world_info as a2, world_names as i2 } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as s2, formatInstructModeSystemPrompt as o2 } from "../../../../instruct-mode.js";
import { appendFileContent as u2 } from "../../../../chats.js";
import { setOpenAIMessages as l2, setOpenAIMessageExamples as c2, formatWorldInfo as d2, getPromptPosition as f2, getPromptRole as h2, prepareOpenAIMessages as p2, model_list as m2 } from "../../../../openai.js";
import { metadata_keys as Ps } from "../../../../authors-note.js";
import { getGroupDepthPrompts as g2, selected_group as Ft, groups as dv } from "../../../../group-chats.js";
import { runRegexScript as v2, getRegexedString as y2, regex_placement as fv } from "../../../regex/engine.js";
import { getCharaFilename as _2, removeFromArray as hv, runAfterAnimation as b2 } from "../../../../utils.js";
import { commonEnumProviders as S2 } from "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as Ai, fixToastrForDialogs as Jd } from "../../../../popup.js";
import pv from "../../../../../lib/dialog-polyfill.esm.js";
import { openRouterModels as w2 } from "../../../../textgen-models.js";
function eh(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Wd = { exports: {} }, Ls = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mv;
function E2() {
  if (mv) return Ls;
  mv = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function s(a, u, c) {
    var f = null;
    if (c !== void 0 && (f = "" + c), u.key !== void 0 && (f = "" + u.key), "key" in u) {
      c = {};
      for (var m in u)
        m !== "key" && (c[m] = u[m]);
    } else c = u;
    return u = c.ref, {
      $$typeof: t,
      type: a,
      key: f,
      ref: u !== void 0 ? u : null,
      props: c
    };
  }
  return Ls.Fragment = r, Ls.jsx = s, Ls.jsxs = s, Ls;
}
var gv;
function C2() {
  return gv || (gv = 1, Wd.exports = E2()), Wd.exports;
}
var A = C2(), ef = { exports: {} }, De = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vv;
function k2() {
  if (vv) return De;
  vv = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), f = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), v = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), E = Symbol.iterator;
  function y(I) {
    return I === null || typeof I != "object" ? null : (I = E && I[E] || I["@@iterator"], typeof I == "function" ? I : null);
  }
  var S = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, h = Object.assign, C = {};
  function x(I, X, ce) {
    this.props = I, this.context = X, this.refs = C, this.updater = ce || S;
  }
  x.prototype.isReactComponent = {}, x.prototype.setState = function(I, X) {
    if (typeof I != "object" && typeof I != "function" && I != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, I, X, "setState");
  }, x.prototype.forceUpdate = function(I) {
    this.updater.enqueueForceUpdate(this, I, "forceUpdate");
  };
  function O() {
  }
  O.prototype = x.prototype;
  function T(I, X, ce) {
    this.props = I, this.context = X, this.refs = C, this.updater = ce || S;
  }
  var P = T.prototype = new O();
  P.constructor = T, h(P, x.prototype), P.isPureReactComponent = !0;
  var l = Array.isArray, _ = { H: null, A: null, T: null, S: null, V: null }, w = Object.prototype.hasOwnProperty;
  function k(I, X, ce, Y, U, te) {
    return ce = te.ref, {
      $$typeof: t,
      type: I,
      key: X,
      ref: ce !== void 0 ? ce : null,
      props: te
    };
  }
  function R(I, X) {
    return k(
      I.type,
      X,
      void 0,
      void 0,
      void 0,
      I.props
    );
  }
  function L(I) {
    return typeof I == "object" && I !== null && I.$$typeof === t;
  }
  function j(I) {
    var X = { "=": "=0", ":": "=2" };
    return "$" + I.replace(/[=:]/g, function(ce) {
      return X[ce];
    });
  }
  var D = /\/+/g;
  function q(I, X) {
    return typeof I == "object" && I !== null && I.key != null ? j("" + I.key) : X.toString(36);
  }
  function G() {
  }
  function V(I) {
    switch (I.status) {
      case "fulfilled":
        return I.value;
      case "rejected":
        throw I.reason;
      default:
        switch (typeof I.status == "string" ? I.then(G, G) : (I.status = "pending", I.then(
          function(X) {
            I.status === "pending" && (I.status = "fulfilled", I.value = X);
          },
          function(X) {
            I.status === "pending" && (I.status = "rejected", I.reason = X);
          }
        )), I.status) {
          case "fulfilled":
            return I.value;
          case "rejected":
            throw I.reason;
        }
    }
    throw I;
  }
  function K(I, X, ce, Y, U) {
    var te = typeof I;
    (te === "undefined" || te === "boolean") && (I = null);
    var ne = !1;
    if (I === null) ne = !0;
    else
      switch (te) {
        case "bigint":
        case "string":
        case "number":
          ne = !0;
          break;
        case "object":
          switch (I.$$typeof) {
            case t:
            case r:
              ne = !0;
              break;
            case g:
              return ne = I._init, K(
                ne(I._payload),
                X,
                ce,
                Y,
                U
              );
          }
      }
    if (ne)
      return U = U(I), ne = Y === "" ? "." + q(I, 0) : Y, l(U) ? (ce = "", ne != null && (ce = ne.replace(D, "$&/") + "/"), K(U, X, ce, "", function(pe) {
        return pe;
      })) : U != null && (L(U) && (U = R(
        U,
        ce + (U.key == null || I && I.key === U.key ? "" : ("" + U.key).replace(
          D,
          "$&/"
        ) + "/") + ne
      )), X.push(U)), 1;
    ne = 0;
    var ue = Y === "" ? "." : Y + ":";
    if (l(I))
      for (var re = 0; re < I.length; re++)
        Y = I[re], te = ue + q(Y, re), ne += K(
          Y,
          X,
          ce,
          te,
          U
        );
    else if (re = y(I), typeof re == "function")
      for (I = re.call(I), re = 0; !(Y = I.next()).done; )
        Y = Y.value, te = ue + q(Y, re++), ne += K(
          Y,
          X,
          ce,
          te,
          U
        );
    else if (te === "object") {
      if (typeof I.then == "function")
        return K(
          V(I),
          X,
          ce,
          Y,
          U
        );
      throw X = String(I), Error(
        "Objects are not valid as a React child (found: " + (X === "[object Object]" ? "object with keys {" + Object.keys(I).join(", ") + "}" : X) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ne;
  }
  function M(I, X, ce) {
    if (I == null) return I;
    var Y = [], U = 0;
    return K(I, Y, "", "", function(te) {
      return X.call(ce, te, U++);
    }), Y;
  }
  function B(I) {
    if (I._status === -1) {
      var X = I._result;
      X = X(), X.then(
        function(ce) {
          (I._status === 0 || I._status === -1) && (I._status = 1, I._result = ce);
        },
        function(ce) {
          (I._status === 0 || I._status === -1) && (I._status = 2, I._result = ce);
        }
      ), I._status === -1 && (I._status = 0, I._result = X);
    }
    if (I._status === 1) return I._result.default;
    throw I._result;
  }
  var J = typeof reportError == "function" ? reportError : function(I) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var X = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof I == "object" && I !== null && typeof I.message == "string" ? String(I.message) : String(I),
        error: I
      });
      if (!window.dispatchEvent(X)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", I);
      return;
    }
    console.error(I);
  };
  function ae() {
  }
  return De.Children = {
    map: M,
    forEach: function(I, X, ce) {
      M(
        I,
        function() {
          X.apply(this, arguments);
        },
        ce
      );
    },
    count: function(I) {
      var X = 0;
      return M(I, function() {
        X++;
      }), X;
    },
    toArray: function(I) {
      return M(I, function(X) {
        return X;
      }) || [];
    },
    only: function(I) {
      if (!L(I))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return I;
    }
  }, De.Component = x, De.Fragment = s, De.Profiler = u, De.PureComponent = T, De.StrictMode = a, De.Suspense = p, De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _, De.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(I) {
      return _.H.useMemoCache(I);
    }
  }, De.cache = function(I) {
    return function() {
      return I.apply(null, arguments);
    };
  }, De.cloneElement = function(I, X, ce) {
    if (I == null)
      throw Error(
        "The argument must be a React element, but you passed " + I + "."
      );
    var Y = h({}, I.props), U = I.key, te = void 0;
    if (X != null)
      for (ne in X.ref !== void 0 && (te = void 0), X.key !== void 0 && (U = "" + X.key), X)
        !w.call(X, ne) || ne === "key" || ne === "__self" || ne === "__source" || ne === "ref" && X.ref === void 0 || (Y[ne] = X[ne]);
    var ne = arguments.length - 2;
    if (ne === 1) Y.children = ce;
    else if (1 < ne) {
      for (var ue = Array(ne), re = 0; re < ne; re++)
        ue[re] = arguments[re + 2];
      Y.children = ue;
    }
    return k(I.type, U, void 0, void 0, te, Y);
  }, De.createContext = function(I) {
    return I = {
      $$typeof: f,
      _currentValue: I,
      _currentValue2: I,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, I.Provider = I, I.Consumer = {
      $$typeof: c,
      _context: I
    }, I;
  }, De.createElement = function(I, X, ce) {
    var Y, U = {}, te = null;
    if (X != null)
      for (Y in X.key !== void 0 && (te = "" + X.key), X)
        w.call(X, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && (U[Y] = X[Y]);
    var ne = arguments.length - 2;
    if (ne === 1) U.children = ce;
    else if (1 < ne) {
      for (var ue = Array(ne), re = 0; re < ne; re++)
        ue[re] = arguments[re + 2];
      U.children = ue;
    }
    if (I && I.defaultProps)
      for (Y in ne = I.defaultProps, ne)
        U[Y] === void 0 && (U[Y] = ne[Y]);
    return k(I, te, void 0, void 0, null, U);
  }, De.createRef = function() {
    return { current: null };
  }, De.forwardRef = function(I) {
    return { $$typeof: m, render: I };
  }, De.isValidElement = L, De.lazy = function(I) {
    return {
      $$typeof: g,
      _payload: { _status: -1, _result: I },
      _init: B
    };
  }, De.memo = function(I, X) {
    return {
      $$typeof: v,
      type: I,
      compare: X === void 0 ? null : X
    };
  }, De.startTransition = function(I) {
    var X = _.T, ce = {};
    _.T = ce;
    try {
      var Y = I(), U = _.S;
      U !== null && U(ce, Y), typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(ae, J);
    } catch (te) {
      J(te);
    } finally {
      _.T = X;
    }
  }, De.unstable_useCacheRefresh = function() {
    return _.H.useCacheRefresh();
  }, De.use = function(I) {
    return _.H.use(I);
  }, De.useActionState = function(I, X, ce) {
    return _.H.useActionState(I, X, ce);
  }, De.useCallback = function(I, X) {
    return _.H.useCallback(I, X);
  }, De.useContext = function(I) {
    return _.H.useContext(I);
  }, De.useDebugValue = function() {
  }, De.useDeferredValue = function(I, X) {
    return _.H.useDeferredValue(I, X);
  }, De.useEffect = function(I, X, ce) {
    var Y = _.H;
    if (typeof ce == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return Y.useEffect(I, X);
  }, De.useId = function() {
    return _.H.useId();
  }, De.useImperativeHandle = function(I, X, ce) {
    return _.H.useImperativeHandle(I, X, ce);
  }, De.useInsertionEffect = function(I, X) {
    return _.H.useInsertionEffect(I, X);
  }, De.useLayoutEffect = function(I, X) {
    return _.H.useLayoutEffect(I, X);
  }, De.useMemo = function(I, X) {
    return _.H.useMemo(I, X);
  }, De.useOptimistic = function(I, X) {
    return _.H.useOptimistic(I, X);
  }, De.useReducer = function(I, X, ce) {
    return _.H.useReducer(I, X, ce);
  }, De.useRef = function(I) {
    return _.H.useRef(I);
  }, De.useState = function(I) {
    return _.H.useState(I);
  }, De.useSyncExternalStore = function(I, X, ce) {
    return _.H.useSyncExternalStore(
      I,
      X,
      ce
    );
  }, De.useTransition = function() {
    return _.H.useTransition();
  }, De.version = "19.1.1", De;
}
var yv;
function th() {
  return yv || (yv = 1, ef.exports = k2()), ef.exports;
}
var ie = th();
const wl = /* @__PURE__ */ eh(ie);
var tf = { exports: {} }, Is = {}, nf = { exports: {} }, rf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _v;
function A2() {
  return _v || (_v = 1, (function(t) {
    function r(M, B) {
      var J = M.length;
      M.push(B);
      e: for (; 0 < J; ) {
        var ae = J - 1 >>> 1, I = M[ae];
        if (0 < u(I, B))
          M[ae] = B, M[J] = I, J = ae;
        else break e;
      }
    }
    function s(M) {
      return M.length === 0 ? null : M[0];
    }
    function a(M) {
      if (M.length === 0) return null;
      var B = M[0], J = M.pop();
      if (J !== B) {
        M[0] = J;
        e: for (var ae = 0, I = M.length, X = I >>> 1; ae < X; ) {
          var ce = 2 * (ae + 1) - 1, Y = M[ce], U = ce + 1, te = M[U];
          if (0 > u(Y, J))
            U < I && 0 > u(te, Y) ? (M[ae] = te, M[U] = J, ae = U) : (M[ae] = Y, M[ce] = J, ae = ce);
          else if (U < I && 0 > u(te, J))
            M[ae] = te, M[U] = J, ae = U;
          else break e;
        }
      }
      return B;
    }
    function u(M, B) {
      var J = M.sortIndex - B.sortIndex;
      return J !== 0 ? J : M.id - B.id;
    }
    if (t.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      t.unstable_now = function() {
        return c.now();
      };
    } else {
      var f = Date, m = f.now();
      t.unstable_now = function() {
        return f.now() - m;
      };
    }
    var p = [], v = [], g = 1, E = null, y = 3, S = !1, h = !1, C = !1, x = !1, O = typeof setTimeout == "function" ? setTimeout : null, T = typeof clearTimeout == "function" ? clearTimeout : null, P = typeof setImmediate < "u" ? setImmediate : null;
    function l(M) {
      for (var B = s(v); B !== null; ) {
        if (B.callback === null) a(v);
        else if (B.startTime <= M)
          a(v), B.sortIndex = B.expirationTime, r(p, B);
        else break;
        B = s(v);
      }
    }
    function _(M) {
      if (C = !1, l(M), !h)
        if (s(p) !== null)
          h = !0, w || (w = !0, q());
        else {
          var B = s(v);
          B !== null && K(_, B.startTime - M);
        }
    }
    var w = !1, k = -1, R = 5, L = -1;
    function j() {
      return x ? !0 : !(t.unstable_now() - L < R);
    }
    function D() {
      if (x = !1, w) {
        var M = t.unstable_now();
        L = M;
        var B = !0;
        try {
          e: {
            h = !1, C && (C = !1, T(k), k = -1), S = !0;
            var J = y;
            try {
              t: {
                for (l(M), E = s(p); E !== null && !(E.expirationTime > M && j()); ) {
                  var ae = E.callback;
                  if (typeof ae == "function") {
                    E.callback = null, y = E.priorityLevel;
                    var I = ae(
                      E.expirationTime <= M
                    );
                    if (M = t.unstable_now(), typeof I == "function") {
                      E.callback = I, l(M), B = !0;
                      break t;
                    }
                    E === s(p) && a(p), l(M);
                  } else a(p);
                  E = s(p);
                }
                if (E !== null) B = !0;
                else {
                  var X = s(v);
                  X !== null && K(
                    _,
                    X.startTime - M
                  ), B = !1;
                }
              }
              break e;
            } finally {
              E = null, y = J, S = !1;
            }
            B = void 0;
          }
        } finally {
          B ? q() : w = !1;
        }
      }
    }
    var q;
    if (typeof P == "function")
      q = function() {
        P(D);
      };
    else if (typeof MessageChannel < "u") {
      var G = new MessageChannel(), V = G.port2;
      G.port1.onmessage = D, q = function() {
        V.postMessage(null);
      };
    } else
      q = function() {
        O(D, 0);
      };
    function K(M, B) {
      k = O(function() {
        M(t.unstable_now());
      }, B);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, t.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : R = 0 < M ? Math.floor(1e3 / M) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return y;
    }, t.unstable_next = function(M) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = y;
      }
      var J = y;
      y = B;
      try {
        return M();
      } finally {
        y = J;
      }
    }, t.unstable_requestPaint = function() {
      x = !0;
    }, t.unstable_runWithPriority = function(M, B) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var J = y;
      y = M;
      try {
        return B();
      } finally {
        y = J;
      }
    }, t.unstable_scheduleCallback = function(M, B, J) {
      var ae = t.unstable_now();
      switch (typeof J == "object" && J !== null ? (J = J.delay, J = typeof J == "number" && 0 < J ? ae + J : ae) : J = ae, M) {
        case 1:
          var I = -1;
          break;
        case 2:
          I = 250;
          break;
        case 5:
          I = 1073741823;
          break;
        case 4:
          I = 1e4;
          break;
        default:
          I = 5e3;
      }
      return I = J + I, M = {
        id: g++,
        callback: B,
        priorityLevel: M,
        startTime: J,
        expirationTime: I,
        sortIndex: -1
      }, J > ae ? (M.sortIndex = J, r(v, M), s(p) === null && M === s(v) && (C ? (T(k), k = -1) : C = !0, K(_, J - ae))) : (M.sortIndex = I, r(p, M), h || S || (h = !0, w || (w = !0, q()))), M;
    }, t.unstable_shouldYield = j, t.unstable_wrapCallback = function(M) {
      var B = y;
      return function() {
        var J = y;
        y = B;
        try {
          return M.apply(this, arguments);
        } finally {
          y = J;
        }
      };
    };
  })(rf)), rf;
}
var bv;
function x2() {
  return bv || (bv = 1, nf.exports = A2()), nf.exports;
}
var af = { exports: {} }, Ht = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sv;
function T2() {
  if (Sv) return Ht;
  Sv = 1;
  var t = th();
  function r(p) {
    var v = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        v += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return "Minified React error #" + p + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s() {
  }
  var a = {
    d: {
      f: s,
      r: function() {
        throw Error(r(522));
      },
      D: s,
      C: s,
      L: s,
      m: s,
      X: s,
      S: s,
      M: s
    },
    p: 0,
    findDOMNode: null
  }, u = Symbol.for("react.portal");
  function c(p, v, g) {
    var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: E == null ? null : "" + E,
      children: p,
      containerInfo: v,
      implementation: g
    };
  }
  var f = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(p, v) {
    if (p === "font") return "";
    if (typeof v == "string")
      return v === "use-credentials" ? v : "";
  }
  return Ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a, Ht.createPortal = function(p, v) {
    var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(r(299));
    return c(p, v, null, g);
  }, Ht.flushSync = function(p) {
    var v = f.T, g = a.p;
    try {
      if (f.T = null, a.p = 2, p) return p();
    } finally {
      f.T = v, a.p = g, a.d.f();
    }
  }, Ht.preconnect = function(p, v) {
    typeof p == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, a.d.C(p, v));
  }, Ht.prefetchDNS = function(p) {
    typeof p == "string" && a.d.D(p);
  }, Ht.preinit = function(p, v) {
    if (typeof p == "string" && v && typeof v.as == "string") {
      var g = v.as, E = m(g, v.crossOrigin), y = typeof v.integrity == "string" ? v.integrity : void 0, S = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      g === "style" ? a.d.S(
        p,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: E,
          integrity: y,
          fetchPriority: S
        }
      ) : g === "script" && a.d.X(p, {
        crossOrigin: E,
        integrity: y,
        fetchPriority: S,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, Ht.preinitModule = function(p, v) {
    if (typeof p == "string")
      if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var g = m(
            v.as,
            v.crossOrigin
          );
          a.d.M(p, {
            crossOrigin: g,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0
          });
        }
      } else v == null && a.d.M(p);
  }, Ht.preload = function(p, v) {
    if (typeof p == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var g = v.as, E = m(g, v.crossOrigin);
      a.d.L(p, g, {
        crossOrigin: E,
        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0,
        type: typeof v.type == "string" ? v.type : void 0,
        fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
        referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
        imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
        imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
        media: typeof v.media == "string" ? v.media : void 0
      });
    }
  }, Ht.preloadModule = function(p, v) {
    if (typeof p == "string")
      if (v) {
        var g = m(v.as, v.crossOrigin);
        a.d.m(p, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: g,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0
        });
      } else a.d.m(p);
  }, Ht.requestFormReset = function(p) {
    a.d.r(p);
  }, Ht.unstable_batchedUpdates = function(p, v) {
    return p(v);
  }, Ht.useFormState = function(p, v, g) {
    return f.H.useFormState(p, v, g);
  }, Ht.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, Ht.version = "19.1.1", Ht;
}
var wv;
function d_() {
  if (wv) return af.exports;
  wv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), af.exports = T2(), af.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ev;
function N2() {
  if (Ev) return Is;
  Ev = 1;
  var t = x2(), r = th(), s = d_();
  function a(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var i = 2; i < arguments.length; i++)
        n += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function c(e) {
    var n = e, i = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do
        n = e, (n.flags & 4098) !== 0 && (i = n.return), e = n.return;
      while (e);
    }
    return n.tag === 3 ? i : null;
  }
  function f(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (c(e) !== e)
      throw Error(a(188));
  }
  function p(e) {
    var n = e.alternate;
    if (!n) {
      if (n = c(e), n === null) throw Error(a(188));
      return n !== e ? null : e;
    }
    for (var i = e, o = n; ; ) {
      var d = i.return;
      if (d === null) break;
      var b = d.alternate;
      if (b === null) {
        if (o = d.return, o !== null) {
          i = o;
          continue;
        }
        break;
      }
      if (d.child === b.child) {
        for (b = d.child; b; ) {
          if (b === i) return m(d), e;
          if (b === o) return m(d), n;
          b = b.sibling;
        }
        throw Error(a(188));
      }
      if (i.return !== o.return) i = d, o = b;
      else {
        for (var N = !1, z = d.child; z; ) {
          if (z === i) {
            N = !0, i = d, o = b;
            break;
          }
          if (z === o) {
            N = !0, o = d, i = b;
            break;
          }
          z = z.sibling;
        }
        if (!N) {
          for (z = b.child; z; ) {
            if (z === i) {
              N = !0, i = b, o = d;
              break;
            }
            if (z === o) {
              N = !0, o = b, i = d;
              break;
            }
            z = z.sibling;
          }
          if (!N) throw Error(a(189));
        }
      }
      if (i.alternate !== o) throw Error(a(190));
    }
    if (i.tag !== 3) throw Error(a(188));
    return i.stateNode.current === i ? e : n;
  }
  function v(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (n = v(e), n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var g = Object.assign, E = Symbol.for("react.element"), y = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), T = Symbol.for("react.consumer"), P = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), L = Symbol.for("react.activity"), j = Symbol.for("react.memo_cache_sentinel"), D = Symbol.iterator;
  function q(e) {
    return e === null || typeof e != "object" ? null : (e = D && e[D] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var G = Symbol.for("react.client.reference");
  function V(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === G ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case h:
        return "Fragment";
      case x:
        return "Profiler";
      case C:
        return "StrictMode";
      case _:
        return "Suspense";
      case w:
        return "SuspenseList";
      case L:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case S:
          return "Portal";
        case P:
          return (e.displayName || "Context") + ".Provider";
        case T:
          return (e._context.displayName || "Context") + ".Consumer";
        case l:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case k:
          return n = e.displayName || null, n !== null ? n : V(e.type) || "Memo";
        case R:
          n = e._payload, e = e._init;
          try {
            return V(e(n));
          } catch {
          }
      }
    return null;
  }
  var K = Array.isArray, M = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ae = [], I = -1;
  function X(e) {
    return { current: e };
  }
  function ce(e) {
    0 > I || (e.current = ae[I], ae[I] = null, I--);
  }
  function Y(e, n) {
    I++, ae[I] = e.current, e.current = n;
  }
  var U = X(null), te = X(null), ne = X(null), ue = X(null);
  function re(e, n) {
    switch (Y(ne, n), Y(te, e), Y(U, null), n.nodeType) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? Ig(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI)
          n = Ig(n), e = Bg(n, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    ce(U), Y(U, e);
  }
  function pe() {
    ce(U), ce(te), ce(ne);
  }
  function Re(e) {
    e.memoizedState !== null && Y(ue, e);
    var n = U.current, i = Bg(n, e.type);
    n !== i && (Y(te, e), Y(U, i));
  }
  function Se(e) {
    te.current === e && (ce(U), ce(te)), ue.current === e && (ce(ue), Os._currentValue = J);
  }
  var me = Object.prototype.hasOwnProperty, fe = t.unstable_scheduleCallback, we = t.unstable_cancelCallback, Le = t.unstable_shouldYield, We = t.unstable_requestPaint, Fe = t.unstable_now, Dn = t.unstable_getCurrentPriorityLevel, dt = t.unstable_ImmediatePriority, ye = t.unstable_UserBlockingPriority, _e = t.unstable_NormalPriority, qe = t.unstable_LowPriority, Ze = t.unstable_IdlePriority, et = t.log, Vn = t.unstable_setDisableYieldValue, zn = null, mt = null;
  function $n(e) {
    if (typeof et == "function" && Vn(e), mt && typeof mt.setStrictMode == "function")
      try {
        mt.setStrictMode(zn, e);
      } catch {
      }
  }
  var Gt = Math.clz32 ? Math.clz32 : ia, Sn = Math.log, aa = Math.LN2;
  function ia(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Sn(e) / aa | 0) | 0;
  }
  var ar = 256, Yn = 4194304;
  function wn(e) {
    var n = e & 42;
    if (n !== 0) return n;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Vt(e, n, i) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var d = 0, b = e.suspendedLanes, N = e.pingedLanes;
    e = e.warmLanes;
    var z = o & 134217727;
    return z !== 0 ? (o = z & ~b, o !== 0 ? d = wn(o) : (N &= z, N !== 0 ? d = wn(N) : i || (i = z & ~e, i !== 0 && (d = wn(i))))) : (z = o & ~b, z !== 0 ? d = wn(z) : N !== 0 ? d = wn(N) : i || (i = o & ~e, i !== 0 && (d = wn(i)))), d === 0 ? 0 : n !== 0 && n !== d && (n & b) === 0 && (b = d & -d, i = n & -n, b >= i || b === 32 && (i & 4194048) !== 0) ? n : d;
  }
  function Qt(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function vo(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ua() {
    var e = ar;
    return ar <<= 1, (ar & 4194048) === 0 && (ar = 256), e;
  }
  function wh() {
    var e = Yn;
    return Yn <<= 1, (Yn & 62914560) === 0 && (Yn = 4194304), e;
  }
  function Hl(e) {
    for (var n = [], i = 0; 31 > i; i++) n.push(e);
    return n;
  }
  function Ui(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function j0(e, n, i, o, d, b) {
    var N = e.pendingLanes;
    e.pendingLanes = i, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= i, e.entangledLanes &= i, e.errorRecoveryDisabledLanes &= i, e.shellSuspendCounter = 0;
    var z = e.entanglements, H = e.expirationTimes, Q = e.hiddenUpdates;
    for (i = N & ~i; 0 < i; ) {
      var se = 31 - Gt(i), le = 1 << se;
      z[se] = 0, H[se] = -1;
      var W = Q[se];
      if (W !== null)
        for (Q[se] = null, se = 0; se < W.length; se++) {
          var ee = W[se];
          ee !== null && (ee.lane &= -536870913);
        }
      i &= ~le;
    }
    o !== 0 && Eh(e, o, 0), b !== 0 && d === 0 && e.tag !== 0 && (e.suspendedLanes |= b & ~(N & ~n));
  }
  function Eh(e, n, i) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var o = 31 - Gt(n);
    e.entangledLanes |= n, e.entanglements[o] = e.entanglements[o] | 1073741824 | i & 4194090;
  }
  function Ch(e, n) {
    var i = e.entangledLanes |= n;
    for (e = e.entanglements; i; ) {
      var o = 31 - Gt(i), d = 1 << o;
      d & n | e[o] & n && (e[o] |= n), i &= ~d;
    }
  }
  function ql(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Zl(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function kh() {
    var e = B.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : av(e.type));
  }
  function D0(e, n) {
    var i = B.p;
    try {
      return B.p = e, n();
    } finally {
      B.p = i;
    }
  }
  var Ar = Math.random().toString(36).slice(2), Bt = "__reactFiber$" + Ar, Kt = "__reactProps$" + Ar, Ha = "__reactContainer$" + Ar, Gl = "__reactEvents$" + Ar, z0 = "__reactListeners$" + Ar, P0 = "__reactHandles$" + Ar, Ah = "__reactResources$" + Ar, Hi = "__reactMarker$" + Ar;
  function Vl(e) {
    delete e[Bt], delete e[Kt], delete e[Gl], delete e[z0], delete e[P0];
  }
  function qa(e) {
    var n = e[Bt];
    if (n) return n;
    for (var i = e.parentNode; i; ) {
      if (n = i[Ha] || i[Bt]) {
        if (i = n.alternate, n.child !== null || i !== null && i.child !== null)
          for (e = Zg(e); e !== null; ) {
            if (i = e[Bt]) return i;
            e = Zg(e);
          }
        return n;
      }
      e = i, i = e.parentNode;
    }
    return null;
  }
  function Za(e) {
    if (e = e[Bt] || e[Ha]) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function qi(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(a(33));
  }
  function Ga(e) {
    var n = e[Ah];
    return n || (n = e[Ah] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function xt(e) {
    e[Hi] = !0;
  }
  var xh = /* @__PURE__ */ new Set(), Th = {};
  function sa(e, n) {
    Va(e, n), Va(e + "Capture", n);
  }
  function Va(e, n) {
    for (Th[e] = n, e = 0; e < n.length; e++)
      xh.add(n[e]);
  }
  var L0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Nh = {}, Oh = {};
  function I0(e) {
    return me.call(Oh, e) ? !0 : me.call(Nh, e) ? !1 : L0.test(e) ? Oh[e] = !0 : (Nh[e] = !0, !1);
  }
  function yo(e, n, i) {
    if (I0(n))
      if (i === null) e.removeAttribute(n);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(n);
            return;
          case "boolean":
            var o = n.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, "" + i);
      }
  }
  function _o(e, n, i) {
    if (i === null) e.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, "" + i);
    }
  }
  function ir(e, n, i, o) {
    if (o === null) e.removeAttribute(i);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(i);
          return;
      }
      e.setAttributeNS(n, i, "" + o);
    }
  }
  var $l, Mh;
  function $a(e) {
    if ($l === void 0)
      try {
        throw Error();
      } catch (i) {
        var n = i.stack.trim().match(/\n( *(at )?)/);
        $l = n && n[1] || "", Mh = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + $l + e + Mh;
  }
  var Yl = !1;
  function Xl(e, n) {
    if (!e || Yl) return "";
    Yl = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var le = function() {
                throw Error();
              };
              if (Object.defineProperty(le.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(le, []);
                } catch (ee) {
                  var W = ee;
                }
                Reflect.construct(e, [], le);
              } else {
                try {
                  le.call();
                } catch (ee) {
                  W = ee;
                }
                e.call(le.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (ee) {
                W = ee;
              }
              (le = e()) && typeof le.catch == "function" && le.catch(function() {
              });
            }
          } catch (ee) {
            if (ee && W && typeof ee.stack == "string")
              return [ee.stack, W.stack];
          }
          return [null, null];
        }
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var d = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name"
      );
      d && d.configurable && Object.defineProperty(
        o.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var b = o.DetermineComponentFrameRoot(), N = b[0], z = b[1];
      if (N && z) {
        var H = N.split(`
`), Q = z.split(`
`);
        for (d = o = 0; o < H.length && !H[o].includes("DetermineComponentFrameRoot"); )
          o++;
        for (; d < Q.length && !Q[d].includes(
          "DetermineComponentFrameRoot"
        ); )
          d++;
        if (o === H.length || d === Q.length)
          for (o = H.length - 1, d = Q.length - 1; 1 <= o && 0 <= d && H[o] !== Q[d]; )
            d--;
        for (; 1 <= o && 0 <= d; o--, d--)
          if (H[o] !== Q[d]) {
            if (o !== 1 || d !== 1)
              do
                if (o--, d--, 0 > d || H[o] !== Q[d]) {
                  var se = `
` + H[o].replace(" at new ", " at ");
                  return e.displayName && se.includes("<anonymous>") && (se = se.replace("<anonymous>", e.displayName)), se;
                }
              while (1 <= o && 0 <= d);
            break;
          }
      }
    } finally {
      Yl = !1, Error.prepareStackTrace = i;
    }
    return (i = e ? e.displayName || e.name : "") ? $a(i) : "";
  }
  function B0(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return $a(e.type);
      case 16:
        return $a("Lazy");
      case 13:
        return $a("Suspense");
      case 19:
        return $a("SuspenseList");
      case 0:
      case 15:
        return Xl(e.type, !1);
      case 11:
        return Xl(e.type.render, !1);
      case 1:
        return Xl(e.type, !0);
      case 31:
        return $a("Activity");
      default:
        return "";
    }
  }
  function Rh(e) {
    try {
      var n = "";
      do
        n += B0(e), e = e.return;
      while (e);
      return n;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  function En(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function jh(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function U0(e) {
    var n = jh(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      n
    ), o = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var d = i.get, b = i.set;
      return Object.defineProperty(e, n, {
        configurable: !0,
        get: function() {
          return d.call(this);
        },
        set: function(N) {
          o = "" + N, b.call(this, N);
        }
      }), Object.defineProperty(e, n, {
        enumerable: i.enumerable
      }), {
        getValue: function() {
          return o;
        },
        setValue: function(N) {
          o = "" + N;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[n];
        }
      };
    }
  }
  function bo(e) {
    e._valueTracker || (e._valueTracker = U0(e));
  }
  function Dh(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var i = n.getValue(), o = "";
    return e && (o = jh(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== i ? (n.setValue(e), !0) : !1;
  }
  function So(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var H0 = /[\n"\\]/g;
  function Cn(e) {
    return e.replace(
      H0,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Fl(e, n, i, o, d, b, N, z) {
    e.name = "", N != null && typeof N != "function" && typeof N != "symbol" && typeof N != "boolean" ? e.type = N : e.removeAttribute("type"), n != null ? N === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + En(n)) : e.value !== "" + En(n) && (e.value = "" + En(n)) : N !== "submit" && N !== "reset" || e.removeAttribute("value"), n != null ? Ql(e, N, En(n)) : i != null ? Ql(e, N, En(i)) : o != null && e.removeAttribute("value"), d == null && b != null && (e.defaultChecked = !!b), d != null && (e.checked = d && typeof d != "function" && typeof d != "symbol"), z != null && typeof z != "function" && typeof z != "symbol" && typeof z != "boolean" ? e.name = "" + En(z) : e.removeAttribute("name");
  }
  function zh(e, n, i, o, d, b, N, z) {
    if (b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" && (e.type = b), n != null || i != null) {
      if (!(b !== "submit" && b !== "reset" || n != null))
        return;
      i = i != null ? "" + En(i) : "", n = n != null ? "" + En(n) : i, z || n === e.value || (e.value = n), e.defaultValue = n;
    }
    o = o ?? d, o = typeof o != "function" && typeof o != "symbol" && !!o, e.checked = z ? e.checked : !!o, e.defaultChecked = !!o, N != null && typeof N != "function" && typeof N != "symbol" && typeof N != "boolean" && (e.name = N);
  }
  function Ql(e, n, i) {
    n === "number" && So(e.ownerDocument) === e || e.defaultValue === "" + i || (e.defaultValue = "" + i);
  }
  function Ya(e, n, i, o) {
    if (e = e.options, n) {
      n = {};
      for (var d = 0; d < i.length; d++)
        n["$" + i[d]] = !0;
      for (i = 0; i < e.length; i++)
        d = n.hasOwnProperty("$" + e[i].value), e[i].selected !== d && (e[i].selected = d), d && o && (e[i].defaultSelected = !0);
    } else {
      for (i = "" + En(i), n = null, d = 0; d < e.length; d++) {
        if (e[d].value === i) {
          e[d].selected = !0, o && (e[d].defaultSelected = !0);
          return;
        }
        n !== null || e[d].disabled || (n = e[d]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Ph(e, n, i) {
    if (n != null && (n = "" + En(n), n !== e.value && (e.value = n), i == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = i != null ? "" + En(i) : "";
  }
  function Lh(e, n, i, o) {
    if (n == null) {
      if (o != null) {
        if (i != null) throw Error(a(92));
        if (K(o)) {
          if (1 < o.length) throw Error(a(93));
          o = o[0];
        }
        i = o;
      }
      i == null && (i = ""), n = i;
    }
    i = En(n), e.defaultValue = i, o = e.textContent, o === i && o !== "" && o !== null && (e.value = o);
  }
  function Xa(e, n) {
    if (n) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var q0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ih(e, n, i) {
    var o = n.indexOf("--") === 0;
    i == null || typeof i == "boolean" || i === "" ? o ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : o ? e.setProperty(n, i) : typeof i != "number" || i === 0 || q0.has(n) ? n === "float" ? e.cssFloat = i : e[n] = ("" + i).trim() : e[n] = i + "px";
  }
  function Bh(e, n, i) {
    if (n != null && typeof n != "object")
      throw Error(a(62));
    if (e = e.style, i != null) {
      for (var o in i)
        !i.hasOwnProperty(o) || n != null && n.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e.setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "");
      for (var d in n)
        o = n[d], n.hasOwnProperty(d) && i[d] !== o && Ih(e, d, o);
    } else
      for (var b in n)
        n.hasOwnProperty(b) && Ih(e, b, n[b]);
  }
  function Kl(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Z0 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), G0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function wo(e) {
    return G0.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Jl = null;
  function Wl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Fa = null, Qa = null;
  function Uh(e) {
    var n = Za(e);
    if (n && (e = n.stateNode)) {
      var i = e[Kt] || null;
      e: switch (e = n.stateNode, n.type) {
        case "input":
          if (Fl(
            e,
            i.value,
            i.defaultValue,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name
          ), n = i.name, i.type === "radio" && n != null) {
            for (i = e; i.parentNode; ) i = i.parentNode;
            for (i = i.querySelectorAll(
              'input[name="' + Cn(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < i.length; n++) {
              var o = i[n];
              if (o !== e && o.form === e.form) {
                var d = o[Kt] || null;
                if (!d) throw Error(a(90));
                Fl(
                  o,
                  d.value,
                  d.defaultValue,
                  d.defaultValue,
                  d.checked,
                  d.defaultChecked,
                  d.type,
                  d.name
                );
              }
            }
            for (n = 0; n < i.length; n++)
              o = i[n], o.form === e.form && Dh(o);
          }
          break e;
        case "textarea":
          Ph(e, i.value, i.defaultValue);
          break e;
        case "select":
          n = i.value, n != null && Ya(e, !!i.multiple, n, !1);
      }
    }
  }
  var ec = !1;
  function Hh(e, n, i) {
    if (ec) return e(n, i);
    ec = !0;
    try {
      var o = e(n);
      return o;
    } finally {
      if (ec = !1, (Fa !== null || Qa !== null) && (ou(), Fa && (n = Fa, e = Qa, Qa = Fa = null, Uh(n), e)))
        for (n = 0; n < e.length; n++) Uh(e[n]);
    }
  }
  function Zi(e, n) {
    var i = e.stateNode;
    if (i === null) return null;
    var o = i[Kt] || null;
    if (o === null) return null;
    i = o[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (e = e.type, o = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !o;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != "function")
      throw Error(
        a(231, n, typeof i)
      );
    return i;
  }
  var sr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), tc = !1;
  if (sr)
    try {
      var Gi = {};
      Object.defineProperty(Gi, "passive", {
        get: function() {
          tc = !0;
        }
      }), window.addEventListener("test", Gi, Gi), window.removeEventListener("test", Gi, Gi);
    } catch {
      tc = !1;
    }
  var xr = null, nc = null, Eo = null;
  function qh() {
    if (Eo) return Eo;
    var e, n = nc, i = n.length, o, d = "value" in xr ? xr.value : xr.textContent, b = d.length;
    for (e = 0; e < i && n[e] === d[e]; e++) ;
    var N = i - e;
    for (o = 1; o <= N && n[i - o] === d[b - o]; o++) ;
    return Eo = d.slice(e, 1 < o ? 1 - o : void 0);
  }
  function Co(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function ko() {
    return !0;
  }
  function Zh() {
    return !1;
  }
  function Jt(e) {
    function n(i, o, d, b, N) {
      this._reactName = i, this._targetInst = d, this.type = o, this.nativeEvent = b, this.target = N, this.currentTarget = null;
      for (var z in e)
        e.hasOwnProperty(z) && (i = e[z], this[z] = i ? i(b) : b[z]);
      return this.isDefaultPrevented = (b.defaultPrevented != null ? b.defaultPrevented : b.returnValue === !1) ? ko : Zh, this.isPropagationStopped = Zh, this;
    }
    return g(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var i = this.nativeEvent;
        i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = ko);
      },
      stopPropagation: function() {
        var i = this.nativeEvent;
        i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = ko);
      },
      persist: function() {
      },
      isPersistent: ko
    }), n;
  }
  var oa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ao = Jt(oa), Vi = g({}, oa, { view: 0, detail: 0 }), V0 = Jt(Vi), rc, ac, $i, xo = g({}, Vi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: sc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== $i && ($i && e.type === "mousemove" ? (rc = e.screenX - $i.screenX, ac = e.screenY - $i.screenY) : ac = rc = 0, $i = e), rc);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : ac;
    }
  }), Gh = Jt(xo), $0 = g({}, xo, { dataTransfer: 0 }), Y0 = Jt($0), X0 = g({}, Vi, { relatedTarget: 0 }), ic = Jt(X0), F0 = g({}, oa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Q0 = Jt(F0), K0 = g({}, oa, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), J0 = Jt(K0), W0 = g({}, oa, { data: 0 }), Vh = Jt(W0), eb = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, tb = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, nb = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function rb(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = nb[e]) ? !!n[e] : !1;
  }
  function sc() {
    return rb;
  }
  var ab = g({}, Vi, {
    key: function(e) {
      if (e.key) {
        var n = eb[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? (e = Co(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? tb[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: sc,
    charCode: function(e) {
      return e.type === "keypress" ? Co(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Co(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), ib = Jt(ab), sb = g({}, xo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), $h = Jt(sb), ob = g({}, Vi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: sc
  }), ub = Jt(ob), lb = g({}, oa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), cb = Jt(lb), db = g({}, xo, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), fb = Jt(db), hb = g({}, oa, {
    newState: 0,
    oldState: 0
  }), pb = Jt(hb), mb = [9, 13, 27, 32], oc = sr && "CompositionEvent" in window, Yi = null;
  sr && "documentMode" in document && (Yi = document.documentMode);
  var gb = sr && "TextEvent" in window && !Yi, Yh = sr && (!oc || Yi && 8 < Yi && 11 >= Yi), Xh = " ", Fh = !1;
  function Qh(e, n) {
    switch (e) {
      case "keyup":
        return mb.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Kh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ka = !1;
  function vb(e, n) {
    switch (e) {
      case "compositionend":
        return Kh(n);
      case "keypress":
        return n.which !== 32 ? null : (Fh = !0, Xh);
      case "textInput":
        return e = n.data, e === Xh && Fh ? null : e;
      default:
        return null;
    }
  }
  function yb(e, n) {
    if (Ka)
      return e === "compositionend" || !oc && Qh(e, n) ? (e = qh(), Eo = nc = xr = null, Ka = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Yh && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var _b = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Jh(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!_b[e.type] : n === "textarea";
  }
  function Wh(e, n, i, o) {
    Fa ? Qa ? Qa.push(o) : Qa = [o] : Fa = o, n = hu(n, "onChange"), 0 < n.length && (i = new Ao(
      "onChange",
      "change",
      null,
      i,
      o
    ), e.push({ event: i, listeners: n }));
  }
  var Xi = null, Fi = null;
  function bb(e) {
    jg(e, 0);
  }
  function To(e) {
    var n = qi(e);
    if (Dh(n)) return e;
  }
  function ep(e, n) {
    if (e === "change") return n;
  }
  var tp = !1;
  if (sr) {
    var uc;
    if (sr) {
      var lc = "oninput" in document;
      if (!lc) {
        var np = document.createElement("div");
        np.setAttribute("oninput", "return;"), lc = typeof np.oninput == "function";
      }
      uc = lc;
    } else uc = !1;
    tp = uc && (!document.documentMode || 9 < document.documentMode);
  }
  function rp() {
    Xi && (Xi.detachEvent("onpropertychange", ap), Fi = Xi = null);
  }
  function ap(e) {
    if (e.propertyName === "value" && To(Fi)) {
      var n = [];
      Wh(
        n,
        Fi,
        e,
        Wl(e)
      ), Hh(bb, n);
    }
  }
  function Sb(e, n, i) {
    e === "focusin" ? (rp(), Xi = n, Fi = i, Xi.attachEvent("onpropertychange", ap)) : e === "focusout" && rp();
  }
  function wb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return To(Fi);
  }
  function Eb(e, n) {
    if (e === "click") return To(n);
  }
  function Cb(e, n) {
    if (e === "input" || e === "change")
      return To(n);
  }
  function kb(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var ln = typeof Object.is == "function" ? Object.is : kb;
  function Qi(e, n) {
    if (ln(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var i = Object.keys(e), o = Object.keys(n);
    if (i.length !== o.length) return !1;
    for (o = 0; o < i.length; o++) {
      var d = i[o];
      if (!me.call(n, d) || !ln(e[d], n[d]))
        return !1;
    }
    return !0;
  }
  function ip(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function sp(e, n) {
    var i = ip(e);
    e = 0;
    for (var o; i; ) {
      if (i.nodeType === 3) {
        if (o = e + i.textContent.length, e <= n && o >= n)
          return { node: i, offset: n - e };
        e = o;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = ip(i);
    }
  }
  function op(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? op(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function up(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var n = So(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof n.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = n.contentWindow;
      else break;
      n = So(e.document);
    }
    return n;
  }
  function cc(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var Ab = sr && "documentMode" in document && 11 >= document.documentMode, Ja = null, dc = null, Ki = null, fc = !1;
  function lp(e, n, i) {
    var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    fc || Ja == null || Ja !== So(o) || (o = Ja, "selectionStart" in o && cc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), Ki && Qi(Ki, o) || (Ki = o, o = hu(dc, "onSelect"), 0 < o.length && (n = new Ao(
      "onSelect",
      "select",
      null,
      n,
      i
    ), e.push({ event: n, listeners: o }), n.target = Ja)));
  }
  function ua(e, n) {
    var i = {};
    return i[e.toLowerCase()] = n.toLowerCase(), i["Webkit" + e] = "webkit" + n, i["Moz" + e] = "moz" + n, i;
  }
  var Wa = {
    animationend: ua("Animation", "AnimationEnd"),
    animationiteration: ua("Animation", "AnimationIteration"),
    animationstart: ua("Animation", "AnimationStart"),
    transitionrun: ua("Transition", "TransitionRun"),
    transitionstart: ua("Transition", "TransitionStart"),
    transitioncancel: ua("Transition", "TransitionCancel"),
    transitionend: ua("Transition", "TransitionEnd")
  }, hc = {}, cp = {};
  sr && (cp = document.createElement("div").style, "AnimationEvent" in window || (delete Wa.animationend.animation, delete Wa.animationiteration.animation, delete Wa.animationstart.animation), "TransitionEvent" in window || delete Wa.transitionend.transition);
  function la(e) {
    if (hc[e]) return hc[e];
    if (!Wa[e]) return e;
    var n = Wa[e], i;
    for (i in n)
      if (n.hasOwnProperty(i) && i in cp)
        return hc[e] = n[i];
    return e;
  }
  var dp = la("animationend"), fp = la("animationiteration"), hp = la("animationstart"), xb = la("transitionrun"), Tb = la("transitionstart"), Nb = la("transitioncancel"), pp = la("transitionend"), mp = /* @__PURE__ */ new Map(), pc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  pc.push("scrollEnd");
  function Pn(e, n) {
    mp.set(e, n), sa(n, [e]);
  }
  var gp = /* @__PURE__ */ new WeakMap();
  function kn(e, n) {
    if (typeof e == "object" && e !== null) {
      var i = gp.get(e);
      return i !== void 0 ? i : (n = {
        value: e,
        source: n,
        stack: Rh(n)
      }, gp.set(e, n), n);
    }
    return {
      value: e,
      source: n,
      stack: Rh(n)
    };
  }
  var An = [], ei = 0, mc = 0;
  function No() {
    for (var e = ei, n = mc = ei = 0; n < e; ) {
      var i = An[n];
      An[n++] = null;
      var o = An[n];
      An[n++] = null;
      var d = An[n];
      An[n++] = null;
      var b = An[n];
      if (An[n++] = null, o !== null && d !== null) {
        var N = o.pending;
        N === null ? d.next = d : (d.next = N.next, N.next = d), o.pending = d;
      }
      b !== 0 && vp(i, d, b);
    }
  }
  function Oo(e, n, i, o) {
    An[ei++] = e, An[ei++] = n, An[ei++] = i, An[ei++] = o, mc |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
  }
  function gc(e, n, i, o) {
    return Oo(e, n, i, o), Mo(e);
  }
  function ti(e, n) {
    return Oo(e, null, null, n), Mo(e);
  }
  function vp(e, n, i) {
    e.lanes |= i;
    var o = e.alternate;
    o !== null && (o.lanes |= i);
    for (var d = !1, b = e.return; b !== null; )
      b.childLanes |= i, o = b.alternate, o !== null && (o.childLanes |= i), b.tag === 22 && (e = b.stateNode, e === null || e._visibility & 1 || (d = !0)), e = b, b = b.return;
    return e.tag === 3 ? (b = e.stateNode, d && n !== null && (d = 31 - Gt(i), e = b.hiddenUpdates, o = e[d], o === null ? e[d] = [n] : o.push(n), n.lane = i | 536870912), b) : null;
  }
  function Mo(e) {
    if (50 < ws)
      throw ws = 0, wd = null, Error(a(185));
    for (var n = e.return; n !== null; )
      e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ni = {};
  function Ob(e, n, i, o) {
    this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function cn(e, n, i, o) {
    return new Ob(e, n, i, o);
  }
  function vc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function or(e, n) {
    var i = e.alternate;
    return i === null ? (i = cn(
      e.tag,
      n,
      e.key,
      e.mode
    ), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = n, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 65011712, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, n = e.dependencies, i.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i.refCleanup = e.refCleanup, i;
  }
  function yp(e, n) {
    e.flags &= 65011714;
    var i = e.alternate;
    return i === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = i.childLanes, e.lanes = i.lanes, e.child = i.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = i.memoizedProps, e.memoizedState = i.memoizedState, e.updateQueue = i.updateQueue, e.type = i.type, n = i.dependencies, e.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), e;
  }
  function Ro(e, n, i, o, d, b) {
    var N = 0;
    if (o = e, typeof e == "function") vc(e) && (N = 1);
    else if (typeof e == "string")
      N = R1(
        e,
        i,
        U.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case L:
          return e = cn(31, i, n, d), e.elementType = L, e.lanes = b, e;
        case h:
          return ca(i.children, d, b, n);
        case C:
          N = 8, d |= 24;
          break;
        case x:
          return e = cn(12, i, n, d | 2), e.elementType = x, e.lanes = b, e;
        case _:
          return e = cn(13, i, n, d), e.elementType = _, e.lanes = b, e;
        case w:
          return e = cn(19, i, n, d), e.elementType = w, e.lanes = b, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case O:
              case P:
                N = 10;
                break e;
              case T:
                N = 9;
                break e;
              case l:
                N = 11;
                break e;
              case k:
                N = 14;
                break e;
              case R:
                N = 16, o = null;
                break e;
            }
          N = 29, i = Error(
            a(130, e === null ? "null" : typeof e, "")
          ), o = null;
      }
    return n = cn(N, i, n, d), n.elementType = e, n.type = o, n.lanes = b, n;
  }
  function ca(e, n, i, o) {
    return e = cn(7, e, o, n), e.lanes = i, e;
  }
  function yc(e, n, i) {
    return e = cn(6, e, null, n), e.lanes = i, e;
  }
  function _c(e, n, i) {
    return n = cn(
      4,
      e.children !== null ? e.children : [],
      e.key,
      n
    ), n.lanes = i, n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, n;
  }
  var ri = [], ai = 0, jo = null, Do = 0, xn = [], Tn = 0, da = null, ur = 1, lr = "";
  function fa(e, n) {
    ri[ai++] = Do, ri[ai++] = jo, jo = e, Do = n;
  }
  function _p(e, n, i) {
    xn[Tn++] = ur, xn[Tn++] = lr, xn[Tn++] = da, da = e;
    var o = ur;
    e = lr;
    var d = 32 - Gt(o) - 1;
    o &= ~(1 << d), i += 1;
    var b = 32 - Gt(n) + d;
    if (30 < b) {
      var N = d - d % 5;
      b = (o & (1 << N) - 1).toString(32), o >>= N, d -= N, ur = 1 << 32 - Gt(n) + d | i << d | o, lr = b + e;
    } else
      ur = 1 << b | i << d | o, lr = e;
  }
  function bc(e) {
    e.return !== null && (fa(e, 1), _p(e, 1, 0));
  }
  function Sc(e) {
    for (; e === jo; )
      jo = ri[--ai], ri[ai] = null, Do = ri[--ai], ri[ai] = null;
    for (; e === da; )
      da = xn[--Tn], xn[Tn] = null, lr = xn[--Tn], xn[Tn] = null, ur = xn[--Tn], xn[Tn] = null;
  }
  var $t = null, ft = null, $e = !1, ha = null, Xn = !1, wc = Error(a(519));
  function pa(e) {
    var n = Error(a(418, ""));
    throw es(kn(n, e)), wc;
  }
  function bp(e) {
    var n = e.stateNode, i = e.type, o = e.memoizedProps;
    switch (n[Bt] = e, n[Kt] = o, i) {
      case "dialog":
        Be("cancel", n), Be("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Be("load", n);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Cs.length; i++)
          Be(Cs[i], n);
        break;
      case "source":
        Be("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Be("error", n), Be("load", n);
        break;
      case "details":
        Be("toggle", n);
        break;
      case "input":
        Be("invalid", n), zh(
          n,
          o.value,
          o.defaultValue,
          o.checked,
          o.defaultChecked,
          o.type,
          o.name,
          !0
        ), bo(n);
        break;
      case "select":
        Be("invalid", n);
        break;
      case "textarea":
        Be("invalid", n), Lh(n, o.value, o.defaultValue, o.children), bo(n);
    }
    i = o.children, typeof i != "string" && typeof i != "number" && typeof i != "bigint" || n.textContent === "" + i || o.suppressHydrationWarning === !0 || Lg(n.textContent, i) ? (o.popover != null && (Be("beforetoggle", n), Be("toggle", n)), o.onScroll != null && Be("scroll", n), o.onScrollEnd != null && Be("scrollend", n), o.onClick != null && (n.onclick = pu), n = !0) : n = !1, n || pa(e);
  }
  function Sp(e) {
    for ($t = e.return; $t; )
      switch ($t.tag) {
        case 5:
        case 13:
          Xn = !1;
          return;
        case 27:
        case 3:
          Xn = !0;
          return;
        default:
          $t = $t.return;
      }
  }
  function Ji(e) {
    if (e !== $t) return !1;
    if (!$e) return Sp(e), $e = !0, !1;
    var n = e.tag, i;
    if ((i = n !== 3 && n !== 27) && ((i = n === 5) && (i = e.type, i = !(i !== "form" && i !== "button") || Id(e.type, e.memoizedProps)), i = !i), i && ft && pa(e), Sp(e), n === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8)
            if (i = e.data, i === "/$") {
              if (n === 0) {
                ft = In(e.nextSibling);
                break e;
              }
              n--;
            } else
              i !== "$" && i !== "$!" && i !== "$?" || n++;
          e = e.nextSibling;
        }
        ft = null;
      }
    } else
      n === 27 ? (n = ft, Zr(e.type) ? (e = qd, qd = null, ft = e) : ft = n) : ft = $t ? In(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Wi() {
    ft = $t = null, $e = !1;
  }
  function wp() {
    var e = ha;
    return e !== null && (tn === null ? tn = e : tn.push.apply(
      tn,
      e
    ), ha = null), e;
  }
  function es(e) {
    ha === null ? ha = [e] : ha.push(e);
  }
  var Ec = X(null), ma = null, cr = null;
  function Tr(e, n, i) {
    Y(Ec, n._currentValue), n._currentValue = i;
  }
  function dr(e) {
    e._currentValue = Ec.current, ce(Ec);
  }
  function Cc(e, n, i) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, o !== null && (o.childLanes |= n)) : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n), e === i) break;
      e = e.return;
    }
  }
  function kc(e, n, i, o) {
    var d = e.child;
    for (d !== null && (d.return = e); d !== null; ) {
      var b = d.dependencies;
      if (b !== null) {
        var N = d.child;
        b = b.firstContext;
        e: for (; b !== null; ) {
          var z = b;
          b = d;
          for (var H = 0; H < n.length; H++)
            if (z.context === n[H]) {
              b.lanes |= i, z = b.alternate, z !== null && (z.lanes |= i), Cc(
                b.return,
                i,
                e
              ), o || (N = null);
              break e;
            }
          b = z.next;
        }
      } else if (d.tag === 18) {
        if (N = d.return, N === null) throw Error(a(341));
        N.lanes |= i, b = N.alternate, b !== null && (b.lanes |= i), Cc(N, i, e), N = null;
      } else N = d.child;
      if (N !== null) N.return = d;
      else
        for (N = d; N !== null; ) {
          if (N === e) {
            N = null;
            break;
          }
          if (d = N.sibling, d !== null) {
            d.return = N.return, N = d;
            break;
          }
          N = N.return;
        }
      d = N;
    }
  }
  function ts(e, n, i, o) {
    e = null;
    for (var d = n, b = !1; d !== null; ) {
      if (!b) {
        if ((d.flags & 524288) !== 0) b = !0;
        else if ((d.flags & 262144) !== 0) break;
      }
      if (d.tag === 10) {
        var N = d.alternate;
        if (N === null) throw Error(a(387));
        if (N = N.memoizedProps, N !== null) {
          var z = d.type;
          ln(d.pendingProps.value, N.value) || (e !== null ? e.push(z) : e = [z]);
        }
      } else if (d === ue.current) {
        if (N = d.alternate, N === null) throw Error(a(387));
        N.memoizedState.memoizedState !== d.memoizedState.memoizedState && (e !== null ? e.push(Os) : e = [Os]);
      }
      d = d.return;
    }
    e !== null && kc(
      n,
      e,
      i,
      o
    ), n.flags |= 262144;
  }
  function zo(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!ln(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function ga(e) {
    ma = e, cr = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Ut(e) {
    return Ep(ma, e);
  }
  function Po(e, n) {
    return ma === null && ga(e), Ep(e, n);
  }
  function Ep(e, n) {
    var i = n._currentValue;
    if (n = { context: n, memoizedValue: i, next: null }, cr === null) {
      if (e === null) throw Error(a(308));
      cr = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else cr = cr.next = n;
    return i;
  }
  var Mb = typeof AbortController < "u" ? AbortController : function() {
    var e = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(i, o) {
        e.push(o);
      }
    };
    this.abort = function() {
      n.aborted = !0, e.forEach(function(i) {
        return i();
      });
    };
  }, Rb = t.unstable_scheduleCallback, jb = t.unstable_NormalPriority, Et = {
    $$typeof: P,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ac() {
    return {
      controller: new Mb(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ns(e) {
    e.refCount--, e.refCount === 0 && Rb(jb, function() {
      e.controller.abort();
    });
  }
  var rs = null, xc = 0, ii = 0, si = null;
  function Db(e, n) {
    if (rs === null) {
      var i = rs = [];
      xc = 0, ii = Nd(), si = {
        status: "pending",
        value: void 0,
        then: function(o) {
          i.push(o);
        }
      };
    }
    return xc++, n.then(Cp, Cp), n;
  }
  function Cp() {
    if (--xc === 0 && rs !== null) {
      si !== null && (si.status = "fulfilled");
      var e = rs;
      rs = null, ii = 0, si = null;
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function zb(e, n) {
    var i = [], o = {
      status: "pending",
      value: null,
      reason: null,
      then: function(d) {
        i.push(d);
      }
    };
    return e.then(
      function() {
        o.status = "fulfilled", o.value = n;
        for (var d = 0; d < i.length; d++) (0, i[d])(n);
      },
      function(d) {
        for (o.status = "rejected", o.reason = d, d = 0; d < i.length; d++)
          (0, i[d])(void 0);
      }
    ), o;
  }
  var kp = M.S;
  M.S = function(e, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && Db(e, n), kp !== null && kp(e, n);
  };
  var va = X(null);
  function Tc() {
    var e = va.current;
    return e !== null ? e : nt.pooledCache;
  }
  function Lo(e, n) {
    n === null ? Y(va, va.current) : Y(va, n.pool);
  }
  function Ap() {
    var e = Tc();
    return e === null ? null : { parent: Et._currentValue, pool: e };
  }
  var as = Error(a(460)), xp = Error(a(474)), Io = Error(a(542)), Nc = { then: function() {
  } };
  function Tp(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Bo() {
  }
  function Np(e, n, i) {
    switch (i = e[i], i === void 0 ? e.push(n) : i !== n && (n.then(Bo, Bo), n = i), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, Mp(e), e;
      default:
        if (typeof n.status == "string") n.then(Bo, Bo);
        else {
          if (e = nt, e !== null && 100 < e.shellSuspendCounter)
            throw Error(a(482));
          e = n, e.status = "pending", e.then(
            function(o) {
              if (n.status === "pending") {
                var d = n;
                d.status = "fulfilled", d.value = o;
              }
            },
            function(o) {
              if (n.status === "pending") {
                var d = n;
                d.status = "rejected", d.reason = o;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw e = n.reason, Mp(e), e;
        }
        throw is = n, as;
    }
  }
  var is = null;
  function Op() {
    if (is === null) throw Error(a(459));
    var e = is;
    return is = null, e;
  }
  function Mp(e) {
    if (e === as || e === Io)
      throw Error(a(483));
  }
  var Nr = !1;
  function Oc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Mc(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Or(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Mr(e, n, i) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (Ye & 2) !== 0) {
      var d = o.pending;
      return d === null ? n.next = n : (n.next = d.next, d.next = n), o.pending = n, n = Mo(e), vp(e, null, i), n;
    }
    return Oo(e, o, n, i), Mo(e);
  }
  function ss(e, n, i) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (i & 4194048) !== 0)) {
      var o = n.lanes;
      o &= e.pendingLanes, i |= o, n.lanes = i, Ch(e, i);
    }
  }
  function Rc(e, n) {
    var i = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, i === o)) {
      var d = null, b = null;
      if (i = i.firstBaseUpdate, i !== null) {
        do {
          var N = {
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          };
          b === null ? d = b = N : b = b.next = N, i = i.next;
        } while (i !== null);
        b === null ? d = b = n : b = b.next = n;
      } else d = b = n;
      i = {
        baseState: o.baseState,
        firstBaseUpdate: d,
        lastBaseUpdate: b,
        shared: o.shared,
        callbacks: o.callbacks
      }, e.updateQueue = i;
      return;
    }
    e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = n : e.next = n, i.lastBaseUpdate = n;
  }
  var jc = !1;
  function os() {
    if (jc) {
      var e = si;
      if (e !== null) throw e;
    }
  }
  function us(e, n, i, o) {
    jc = !1;
    var d = e.updateQueue;
    Nr = !1;
    var b = d.firstBaseUpdate, N = d.lastBaseUpdate, z = d.shared.pending;
    if (z !== null) {
      d.shared.pending = null;
      var H = z, Q = H.next;
      H.next = null, N === null ? b = Q : N.next = Q, N = H;
      var se = e.alternate;
      se !== null && (se = se.updateQueue, z = se.lastBaseUpdate, z !== N && (z === null ? se.firstBaseUpdate = Q : z.next = Q, se.lastBaseUpdate = H));
    }
    if (b !== null) {
      var le = d.baseState;
      N = 0, se = Q = H = null, z = b;
      do {
        var W = z.lane & -536870913, ee = W !== z.lane;
        if (ee ? (Ge & W) === W : (o & W) === W) {
          W !== 0 && W === ii && (jc = !0), se !== null && (se = se.next = {
            lane: 0,
            tag: z.tag,
            payload: z.payload,
            callback: null,
            next: null
          });
          e: {
            var Ae = e, Ce = z;
            W = n;
            var Je = i;
            switch (Ce.tag) {
              case 1:
                if (Ae = Ce.payload, typeof Ae == "function") {
                  le = Ae.call(Je, le, W);
                  break e;
                }
                le = Ae;
                break e;
              case 3:
                Ae.flags = Ae.flags & -65537 | 128;
              case 0:
                if (Ae = Ce.payload, W = typeof Ae == "function" ? Ae.call(Je, le, W) : Ae, W == null) break e;
                le = g({}, le, W);
                break e;
              case 2:
                Nr = !0;
            }
          }
          W = z.callback, W !== null && (e.flags |= 64, ee && (e.flags |= 8192), ee = d.callbacks, ee === null ? d.callbacks = [W] : ee.push(W));
        } else
          ee = {
            lane: W,
            tag: z.tag,
            payload: z.payload,
            callback: z.callback,
            next: null
          }, se === null ? (Q = se = ee, H = le) : se = se.next = ee, N |= W;
        if (z = z.next, z === null) {
          if (z = d.shared.pending, z === null)
            break;
          ee = z, z = ee.next, ee.next = null, d.lastBaseUpdate = ee, d.shared.pending = null;
        }
      } while (!0);
      se === null && (H = le), d.baseState = H, d.firstBaseUpdate = Q, d.lastBaseUpdate = se, b === null && (d.shared.lanes = 0), Br |= N, e.lanes = N, e.memoizedState = le;
    }
  }
  function Rp(e, n) {
    if (typeof e != "function")
      throw Error(a(191, e));
    e.call(n);
  }
  function jp(e, n) {
    var i = e.callbacks;
    if (i !== null)
      for (e.callbacks = null, e = 0; e < i.length; e++)
        Rp(i[e], n);
  }
  var oi = X(null), Uo = X(0);
  function Dp(e, n) {
    e = yr, Y(Uo, e), Y(oi, n), yr = e | n.baseLanes;
  }
  function Dc() {
    Y(Uo, yr), Y(oi, oi.current);
  }
  function zc() {
    yr = Uo.current, ce(oi), ce(Uo);
  }
  var Rr = 0, ze = null, Qe = null, _t = null, Ho = !1, ui = !1, ya = !1, qo = 0, ls = 0, li = null, Pb = 0;
  function gt() {
    throw Error(a(321));
  }
  function Pc(e, n) {
    if (n === null) return !1;
    for (var i = 0; i < n.length && i < e.length; i++)
      if (!ln(e[i], n[i])) return !1;
    return !0;
  }
  function Lc(e, n, i, o, d, b) {
    return Rr = b, ze = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, M.H = e === null || e.memoizedState === null ? vm : ym, ya = !1, b = i(o, d), ya = !1, ui && (b = Pp(
      n,
      i,
      o,
      d
    )), zp(e), b;
  }
  function zp(e) {
    M.H = Xo;
    var n = Qe !== null && Qe.next !== null;
    if (Rr = 0, _t = Qe = ze = null, Ho = !1, ls = 0, li = null, n) throw Error(a(300));
    e === null || Tt || (e = e.dependencies, e !== null && zo(e) && (Tt = !0));
  }
  function Pp(e, n, i, o) {
    ze = e;
    var d = 0;
    do {
      if (ui && (li = null), ls = 0, ui = !1, 25 <= d) throw Error(a(301));
      if (d += 1, _t = Qe = null, e.updateQueue != null) {
        var b = e.updateQueue;
        b.lastEffect = null, b.events = null, b.stores = null, b.memoCache != null && (b.memoCache.index = 0);
      }
      M.H = Zb, b = n(i, o);
    } while (ui);
    return b;
  }
  function Lb() {
    var e = M.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? cs(n) : n, e = e.useState()[0], (Qe !== null ? Qe.memoizedState : null) !== e && (ze.flags |= 1024), n;
  }
  function Ic() {
    var e = qo !== 0;
    return qo = 0, e;
  }
  function Bc(e, n, i) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~i;
  }
  function Uc(e) {
    if (Ho) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      Ho = !1;
    }
    Rr = 0, _t = Qe = ze = null, ui = !1, ls = qo = 0, li = null;
  }
  function Wt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return _t === null ? ze.memoizedState = _t = e : _t = _t.next = e, _t;
  }
  function bt() {
    if (Qe === null) {
      var e = ze.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Qe.next;
    var n = _t === null ? ze.memoizedState : _t.next;
    if (n !== null)
      _t = n, Qe = e;
    else {
      if (e === null)
        throw ze.alternate === null ? Error(a(467)) : Error(a(310));
      Qe = e, e = {
        memoizedState: Qe.memoizedState,
        baseState: Qe.baseState,
        baseQueue: Qe.baseQueue,
        queue: Qe.queue,
        next: null
      }, _t === null ? ze.memoizedState = _t = e : _t = _t.next = e;
    }
    return _t;
  }
  function Hc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function cs(e) {
    var n = ls;
    return ls += 1, li === null && (li = []), e = Np(li, e, n), n = ze, (_t === null ? n.memoizedState : _t.next) === null && (n = n.alternate, M.H = n === null || n.memoizedState === null ? vm : ym), e;
  }
  function Zo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return cs(e);
      if (e.$$typeof === P) return Ut(e);
    }
    throw Error(a(438, String(e)));
  }
  function qc(e) {
    var n = null, i = ze.updateQueue;
    if (i !== null && (n = i.memoCache), n == null) {
      var o = ze.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (n = {
        data: o.data.map(function(d) {
          return d.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), i === null && (i = Hc(), ze.updateQueue = i), i.memoCache = n, i = n.data[n.index], i === void 0)
      for (i = n.data[n.index] = Array(e), o = 0; o < e; o++)
        i[o] = j;
    return n.index++, i;
  }
  function fr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Go(e) {
    var n = bt();
    return Zc(n, Qe, e);
  }
  function Zc(e, n, i) {
    var o = e.queue;
    if (o === null) throw Error(a(311));
    o.lastRenderedReducer = i;
    var d = e.baseQueue, b = o.pending;
    if (b !== null) {
      if (d !== null) {
        var N = d.next;
        d.next = b.next, b.next = N;
      }
      n.baseQueue = d = b, o.pending = null;
    }
    if (b = e.baseState, d === null) e.memoizedState = b;
    else {
      n = d.next;
      var z = N = null, H = null, Q = n, se = !1;
      do {
        var le = Q.lane & -536870913;
        if (le !== Q.lane ? (Ge & le) === le : (Rr & le) === le) {
          var W = Q.revertLane;
          if (W === 0)
            H !== null && (H = H.next = {
              lane: 0,
              revertLane: 0,
              action: Q.action,
              hasEagerState: Q.hasEagerState,
              eagerState: Q.eagerState,
              next: null
            }), le === ii && (se = !0);
          else if ((Rr & W) === W) {
            Q = Q.next, W === ii && (se = !0);
            continue;
          } else
            le = {
              lane: 0,
              revertLane: Q.revertLane,
              action: Q.action,
              hasEagerState: Q.hasEagerState,
              eagerState: Q.eagerState,
              next: null
            }, H === null ? (z = H = le, N = b) : H = H.next = le, ze.lanes |= W, Br |= W;
          le = Q.action, ya && i(b, le), b = Q.hasEagerState ? Q.eagerState : i(b, le);
        } else
          W = {
            lane: le,
            revertLane: Q.revertLane,
            action: Q.action,
            hasEagerState: Q.hasEagerState,
            eagerState: Q.eagerState,
            next: null
          }, H === null ? (z = H = W, N = b) : H = H.next = W, ze.lanes |= le, Br |= le;
        Q = Q.next;
      } while (Q !== null && Q !== n);
      if (H === null ? N = b : H.next = z, !ln(b, e.memoizedState) && (Tt = !0, se && (i = si, i !== null)))
        throw i;
      e.memoizedState = b, e.baseState = N, e.baseQueue = H, o.lastRenderedState = b;
    }
    return d === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function Gc(e) {
    var n = bt(), i = n.queue;
    if (i === null) throw Error(a(311));
    i.lastRenderedReducer = e;
    var o = i.dispatch, d = i.pending, b = n.memoizedState;
    if (d !== null) {
      i.pending = null;
      var N = d = d.next;
      do
        b = e(b, N.action), N = N.next;
      while (N !== d);
      ln(b, n.memoizedState) || (Tt = !0), n.memoizedState = b, n.baseQueue === null && (n.baseState = b), i.lastRenderedState = b;
    }
    return [b, o];
  }
  function Lp(e, n, i) {
    var o = ze, d = bt(), b = $e;
    if (b) {
      if (i === void 0) throw Error(a(407));
      i = i();
    } else i = n();
    var N = !ln(
      (Qe || d).memoizedState,
      i
    );
    N && (d.memoizedState = i, Tt = !0), d = d.queue;
    var z = Up.bind(null, o, d, e);
    if (ds(2048, 8, z, [e]), d.getSnapshot !== n || N || _t !== null && _t.memoizedState.tag & 1) {
      if (o.flags |= 2048, ci(
        9,
        Vo(),
        Bp.bind(
          null,
          o,
          d,
          i,
          n
        ),
        null
      ), nt === null) throw Error(a(349));
      b || (Rr & 124) !== 0 || Ip(o, n, i);
    }
    return i;
  }
  function Ip(e, n, i) {
    e.flags |= 16384, e = { getSnapshot: n, value: i }, n = ze.updateQueue, n === null ? (n = Hc(), ze.updateQueue = n, n.stores = [e]) : (i = n.stores, i === null ? n.stores = [e] : i.push(e));
  }
  function Bp(e, n, i, o) {
    n.value = i, n.getSnapshot = o, Hp(n) && qp(e);
  }
  function Up(e, n, i) {
    return i(function() {
      Hp(n) && qp(e);
    });
  }
  function Hp(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var i = n();
      return !ln(e, i);
    } catch {
      return !0;
    }
  }
  function qp(e) {
    var n = ti(e, 2);
    n !== null && mn(n, e, 2);
  }
  function Vc(e) {
    var n = Wt();
    if (typeof e == "function") {
      var i = e;
      if (e = i(), ya) {
        $n(!0);
        try {
          i();
        } finally {
          $n(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = e, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: fr,
      lastRenderedState: e
    }, n;
  }
  function Zp(e, n, i, o) {
    return e.baseState = i, Zc(
      e,
      Qe,
      typeof o == "function" ? o : fr
    );
  }
  function Ib(e, n, i, o, d) {
    if (Yo(e)) throw Error(a(485));
    if (e = n.action, e !== null) {
      var b = {
        payload: d,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(N) {
          b.listeners.push(N);
        }
      };
      M.T !== null ? i(!0) : b.isTransition = !1, o(b), i = n.pending, i === null ? (b.next = n.pending = b, Gp(n, b)) : (b.next = i.next, n.pending = i.next = b);
    }
  }
  function Gp(e, n) {
    var i = n.action, o = n.payload, d = e.state;
    if (n.isTransition) {
      var b = M.T, N = {};
      M.T = N;
      try {
        var z = i(d, o), H = M.S;
        H !== null && H(N, z), Vp(e, n, z);
      } catch (Q) {
        $c(e, n, Q);
      } finally {
        M.T = b;
      }
    } else
      try {
        b = i(d, o), Vp(e, n, b);
      } catch (Q) {
        $c(e, n, Q);
      }
  }
  function Vp(e, n, i) {
    i !== null && typeof i == "object" && typeof i.then == "function" ? i.then(
      function(o) {
        $p(e, n, o);
      },
      function(o) {
        return $c(e, n, o);
      }
    ) : $p(e, n, i);
  }
  function $p(e, n, i) {
    n.status = "fulfilled", n.value = i, Yp(n), e.state = i, n = e.pending, n !== null && (i = n.next, i === n ? e.pending = null : (i = i.next, n.next = i, Gp(e, i)));
  }
  function $c(e, n, i) {
    var o = e.pending;
    if (e.pending = null, o !== null) {
      o = o.next;
      do
        n.status = "rejected", n.reason = i, Yp(n), n = n.next;
      while (n !== o);
    }
    e.action = null;
  }
  function Yp(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function Xp(e, n) {
    return n;
  }
  function Fp(e, n) {
    if ($e) {
      var i = nt.formState;
      if (i !== null) {
        e: {
          var o = ze;
          if ($e) {
            if (ft) {
              t: {
                for (var d = ft, b = Xn; d.nodeType !== 8; ) {
                  if (!b) {
                    d = null;
                    break t;
                  }
                  if (d = In(
                    d.nextSibling
                  ), d === null) {
                    d = null;
                    break t;
                  }
                }
                b = d.data, d = b === "F!" || b === "F" ? d : null;
              }
              if (d) {
                ft = In(
                  d.nextSibling
                ), o = d.data === "F!";
                break e;
              }
            }
            pa(o);
          }
          o = !1;
        }
        o && (n = i[0]);
      }
    }
    return i = Wt(), i.memoizedState = i.baseState = n, o = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Xp,
      lastRenderedState: n
    }, i.queue = o, i = pm.bind(
      null,
      ze,
      o
    ), o.dispatch = i, o = Vc(!1), b = Kc.bind(
      null,
      ze,
      !1,
      o.queue
    ), o = Wt(), d = {
      state: n,
      dispatch: null,
      action: e,
      pending: null
    }, o.queue = d, i = Ib.bind(
      null,
      ze,
      d,
      b,
      i
    ), d.dispatch = i, o.memoizedState = e, [n, i, !1];
  }
  function Qp(e) {
    var n = bt();
    return Kp(n, Qe, e);
  }
  function Kp(e, n, i) {
    if (n = Zc(
      e,
      n,
      Xp
    )[0], e = Go(fr)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var o = cs(n);
      } catch (N) {
        throw N === as ? Io : N;
      }
    else o = n;
    n = bt();
    var d = n.queue, b = d.dispatch;
    return i !== n.memoizedState && (ze.flags |= 2048, ci(
      9,
      Vo(),
      Bb.bind(null, d, i),
      null
    )), [o, b, e];
  }
  function Bb(e, n) {
    e.action = n;
  }
  function Jp(e) {
    var n = bt(), i = Qe;
    if (i !== null)
      return Kp(n, i, e);
    bt(), n = n.memoizedState, i = bt();
    var o = i.queue.dispatch;
    return i.memoizedState = e, [n, o, !1];
  }
  function ci(e, n, i, o) {
    return e = { tag: e, create: i, deps: o, inst: n, next: null }, n = ze.updateQueue, n === null && (n = Hc(), ze.updateQueue = n), i = n.lastEffect, i === null ? n.lastEffect = e.next = e : (o = i.next, i.next = e, e.next = o, n.lastEffect = e), e;
  }
  function Vo() {
    return { destroy: void 0, resource: void 0 };
  }
  function Wp() {
    return bt().memoizedState;
  }
  function $o(e, n, i, o) {
    var d = Wt();
    o = o === void 0 ? null : o, ze.flags |= e, d.memoizedState = ci(
      1 | n,
      Vo(),
      i,
      o
    );
  }
  function ds(e, n, i, o) {
    var d = bt();
    o = o === void 0 ? null : o;
    var b = d.memoizedState.inst;
    Qe !== null && o !== null && Pc(o, Qe.memoizedState.deps) ? d.memoizedState = ci(n, b, i, o) : (ze.flags |= e, d.memoizedState = ci(
      1 | n,
      b,
      i,
      o
    ));
  }
  function em(e, n) {
    $o(8390656, 8, e, n);
  }
  function tm(e, n) {
    ds(2048, 8, e, n);
  }
  function nm(e, n) {
    return ds(4, 2, e, n);
  }
  function rm(e, n) {
    return ds(4, 4, e, n);
  }
  function am(e, n) {
    if (typeof n == "function") {
      e = e();
      var i = n(e);
      return function() {
        typeof i == "function" ? i() : n(null);
      };
    }
    if (n != null)
      return e = e(), n.current = e, function() {
        n.current = null;
      };
  }
  function im(e, n, i) {
    i = i != null ? i.concat([e]) : null, ds(4, 4, am.bind(null, n, e), i);
  }
  function Yc() {
  }
  function sm(e, n) {
    var i = bt();
    n = n === void 0 ? null : n;
    var o = i.memoizedState;
    return n !== null && Pc(n, o[1]) ? o[0] : (i.memoizedState = [e, n], e);
  }
  function om(e, n) {
    var i = bt();
    n = n === void 0 ? null : n;
    var o = i.memoizedState;
    if (n !== null && Pc(n, o[1]))
      return o[0];
    if (o = e(), ya) {
      $n(!0);
      try {
        e();
      } finally {
        $n(!1);
      }
    }
    return i.memoizedState = [o, n], o;
  }
  function Xc(e, n, i) {
    return i === void 0 || (Rr & 1073741824) !== 0 ? e.memoizedState = n : (e.memoizedState = i, e = cg(), ze.lanes |= e, Br |= e, i);
  }
  function um(e, n, i, o) {
    return ln(i, n) ? i : oi.current !== null ? (e = Xc(e, i, o), ln(e, n) || (Tt = !0), e) : (Rr & 42) === 0 ? (Tt = !0, e.memoizedState = i) : (e = cg(), ze.lanes |= e, Br |= e, n);
  }
  function lm(e, n, i, o, d) {
    var b = B.p;
    B.p = b !== 0 && 8 > b ? b : 8;
    var N = M.T, z = {};
    M.T = z, Kc(e, !1, n, i);
    try {
      var H = d(), Q = M.S;
      if (Q !== null && Q(z, H), H !== null && typeof H == "object" && typeof H.then == "function") {
        var se = zb(
          H,
          o
        );
        fs(
          e,
          n,
          se,
          pn(e)
        );
      } else
        fs(
          e,
          n,
          o,
          pn(e)
        );
    } catch (le) {
      fs(
        e,
        n,
        { then: function() {
        }, status: "rejected", reason: le },
        pn()
      );
    } finally {
      B.p = b, M.T = N;
    }
  }
  function Ub() {
  }
  function Fc(e, n, i, o) {
    if (e.tag !== 5) throw Error(a(476));
    var d = cm(e).queue;
    lm(
      e,
      d,
      n,
      J,
      i === null ? Ub : function() {
        return dm(e), i(o);
      }
    );
  }
  function cm(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: J,
      baseState: J,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fr,
        lastRenderedState: J
      },
      next: null
    };
    var i = {};
    return n.next = {
      memoizedState: i,
      baseState: i,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fr,
        lastRenderedState: i
      },
      next: null
    }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n;
  }
  function dm(e) {
    var n = cm(e).next.queue;
    fs(e, n, {}, pn());
  }
  function Qc() {
    return Ut(Os);
  }
  function fm() {
    return bt().memoizedState;
  }
  function hm() {
    return bt().memoizedState;
  }
  function Hb(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var i = pn();
          e = Or(i);
          var o = Mr(n, e, i);
          o !== null && (mn(o, n, i), ss(o, n, i)), n = { cache: Ac() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function qb(e, n, i) {
    var o = pn();
    i = {
      lane: o,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Yo(e) ? mm(n, i) : (i = gc(e, n, i, o), i !== null && (mn(i, e, o), gm(i, n, o)));
  }
  function pm(e, n, i) {
    var o = pn();
    fs(e, n, i, o);
  }
  function fs(e, n, i, o) {
    var d = {
      lane: o,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Yo(e)) mm(n, d);
    else {
      var b = e.alternate;
      if (e.lanes === 0 && (b === null || b.lanes === 0) && (b = n.lastRenderedReducer, b !== null))
        try {
          var N = n.lastRenderedState, z = b(N, i);
          if (d.hasEagerState = !0, d.eagerState = z, ln(z, N))
            return Oo(e, n, d, 0), nt === null && No(), !1;
        } catch {
        } finally {
        }
      if (i = gc(e, n, d, o), i !== null)
        return mn(i, e, o), gm(i, n, o), !0;
    }
    return !1;
  }
  function Kc(e, n, i, o) {
    if (o = {
      lane: 2,
      revertLane: Nd(),
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Yo(e)) {
      if (n) throw Error(a(479));
    } else
      n = gc(
        e,
        i,
        o,
        2
      ), n !== null && mn(n, e, 2);
  }
  function Yo(e) {
    var n = e.alternate;
    return e === ze || n !== null && n === ze;
  }
  function mm(e, n) {
    ui = Ho = !0;
    var i = e.pending;
    i === null ? n.next = n : (n.next = i.next, i.next = n), e.pending = n;
  }
  function gm(e, n, i) {
    if ((i & 4194048) !== 0) {
      var o = n.lanes;
      o &= e.pendingLanes, i |= o, n.lanes = i, Ch(e, i);
    }
  }
  var Xo = {
    readContext: Ut,
    use: Zo,
    useCallback: gt,
    useContext: gt,
    useEffect: gt,
    useImperativeHandle: gt,
    useLayoutEffect: gt,
    useInsertionEffect: gt,
    useMemo: gt,
    useReducer: gt,
    useRef: gt,
    useState: gt,
    useDebugValue: gt,
    useDeferredValue: gt,
    useTransition: gt,
    useSyncExternalStore: gt,
    useId: gt,
    useHostTransitionStatus: gt,
    useFormState: gt,
    useActionState: gt,
    useOptimistic: gt,
    useMemoCache: gt,
    useCacheRefresh: gt
  }, vm = {
    readContext: Ut,
    use: Zo,
    useCallback: function(e, n) {
      return Wt().memoizedState = [
        e,
        n === void 0 ? null : n
      ], e;
    },
    useContext: Ut,
    useEffect: em,
    useImperativeHandle: function(e, n, i) {
      i = i != null ? i.concat([e]) : null, $o(
        4194308,
        4,
        am.bind(null, n, e),
        i
      );
    },
    useLayoutEffect: function(e, n) {
      return $o(4194308, 4, e, n);
    },
    useInsertionEffect: function(e, n) {
      $o(4, 2, e, n);
    },
    useMemo: function(e, n) {
      var i = Wt();
      n = n === void 0 ? null : n;
      var o = e();
      if (ya) {
        $n(!0);
        try {
          e();
        } finally {
          $n(!1);
        }
      }
      return i.memoizedState = [o, n], o;
    },
    useReducer: function(e, n, i) {
      var o = Wt();
      if (i !== void 0) {
        var d = i(n);
        if (ya) {
          $n(!0);
          try {
            i(n);
          } finally {
            $n(!1);
          }
        }
      } else d = n;
      return o.memoizedState = o.baseState = d, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: d
      }, o.queue = e, e = e.dispatch = qb.bind(
        null,
        ze,
        e
      ), [o.memoizedState, e];
    },
    useRef: function(e) {
      var n = Wt();
      return e = { current: e }, n.memoizedState = e;
    },
    useState: function(e) {
      e = Vc(e);
      var n = e.queue, i = pm.bind(null, ze, n);
      return n.dispatch = i, [e.memoizedState, i];
    },
    useDebugValue: Yc,
    useDeferredValue: function(e, n) {
      var i = Wt();
      return Xc(i, e, n);
    },
    useTransition: function() {
      var e = Vc(!1);
      return e = lm.bind(
        null,
        ze,
        e.queue,
        !0,
        !1
      ), Wt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, n, i) {
      var o = ze, d = Wt();
      if ($e) {
        if (i === void 0)
          throw Error(a(407));
        i = i();
      } else {
        if (i = n(), nt === null)
          throw Error(a(349));
        (Ge & 124) !== 0 || Ip(o, n, i);
      }
      d.memoizedState = i;
      var b = { value: i, getSnapshot: n };
      return d.queue = b, em(Up.bind(null, o, b, e), [
        e
      ]), o.flags |= 2048, ci(
        9,
        Vo(),
        Bp.bind(
          null,
          o,
          b,
          i,
          n
        ),
        null
      ), i;
    },
    useId: function() {
      var e = Wt(), n = nt.identifierPrefix;
      if ($e) {
        var i = lr, o = ur;
        i = (o & ~(1 << 32 - Gt(o) - 1)).toString(32) + i, n = "«" + n + "R" + i, i = qo++, 0 < i && (n += "H" + i.toString(32)), n += "»";
      } else
        i = Pb++, n = "«" + n + "r" + i.toString(32) + "»";
      return e.memoizedState = n;
    },
    useHostTransitionStatus: Qc,
    useFormState: Fp,
    useActionState: Fp,
    useOptimistic: function(e) {
      var n = Wt();
      n.memoizedState = n.baseState = e;
      var i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = i, n = Kc.bind(
        null,
        ze,
        !0,
        i
      ), i.dispatch = n, [e, n];
    },
    useMemoCache: qc,
    useCacheRefresh: function() {
      return Wt().memoizedState = Hb.bind(
        null,
        ze
      );
    }
  }, ym = {
    readContext: Ut,
    use: Zo,
    useCallback: sm,
    useContext: Ut,
    useEffect: tm,
    useImperativeHandle: im,
    useInsertionEffect: nm,
    useLayoutEffect: rm,
    useMemo: om,
    useReducer: Go,
    useRef: Wp,
    useState: function() {
      return Go(fr);
    },
    useDebugValue: Yc,
    useDeferredValue: function(e, n) {
      var i = bt();
      return um(
        i,
        Qe.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Go(fr)[0], n = bt().memoizedState;
      return [
        typeof e == "boolean" ? e : cs(e),
        n
      ];
    },
    useSyncExternalStore: Lp,
    useId: fm,
    useHostTransitionStatus: Qc,
    useFormState: Qp,
    useActionState: Qp,
    useOptimistic: function(e, n) {
      var i = bt();
      return Zp(i, Qe, e, n);
    },
    useMemoCache: qc,
    useCacheRefresh: hm
  }, Zb = {
    readContext: Ut,
    use: Zo,
    useCallback: sm,
    useContext: Ut,
    useEffect: tm,
    useImperativeHandle: im,
    useInsertionEffect: nm,
    useLayoutEffect: rm,
    useMemo: om,
    useReducer: Gc,
    useRef: Wp,
    useState: function() {
      return Gc(fr);
    },
    useDebugValue: Yc,
    useDeferredValue: function(e, n) {
      var i = bt();
      return Qe === null ? Xc(i, e, n) : um(
        i,
        Qe.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Gc(fr)[0], n = bt().memoizedState;
      return [
        typeof e == "boolean" ? e : cs(e),
        n
      ];
    },
    useSyncExternalStore: Lp,
    useId: fm,
    useHostTransitionStatus: Qc,
    useFormState: Jp,
    useActionState: Jp,
    useOptimistic: function(e, n) {
      var i = bt();
      return Qe !== null ? Zp(i, Qe, e, n) : (i.baseState = e, [e, i.queue.dispatch]);
    },
    useMemoCache: qc,
    useCacheRefresh: hm
  }, di = null, hs = 0;
  function Fo(e) {
    var n = hs;
    return hs += 1, di === null && (di = []), Np(di, e, n);
  }
  function ps(e, n) {
    n = n.props.ref, e.ref = n !== void 0 ? n : null;
  }
  function Qo(e, n) {
    throw n.$$typeof === E ? Error(a(525)) : (e = Object.prototype.toString.call(n), Error(
      a(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e
      )
    ));
  }
  function _m(e) {
    var n = e._init;
    return n(e._payload);
  }
  function bm(e) {
    function n($, Z) {
      if (e) {
        var F = $.deletions;
        F === null ? ($.deletions = [Z], $.flags |= 16) : F.push(Z);
      }
    }
    function i($, Z) {
      if (!e) return null;
      for (; Z !== null; )
        n($, Z), Z = Z.sibling;
      return null;
    }
    function o($) {
      for (var Z = /* @__PURE__ */ new Map(); $ !== null; )
        $.key !== null ? Z.set($.key, $) : Z.set($.index, $), $ = $.sibling;
      return Z;
    }
    function d($, Z) {
      return $ = or($, Z), $.index = 0, $.sibling = null, $;
    }
    function b($, Z, F) {
      return $.index = F, e ? (F = $.alternate, F !== null ? (F = F.index, F < Z ? ($.flags |= 67108866, Z) : F) : ($.flags |= 67108866, Z)) : ($.flags |= 1048576, Z);
    }
    function N($) {
      return e && $.alternate === null && ($.flags |= 67108866), $;
    }
    function z($, Z, F, oe) {
      return Z === null || Z.tag !== 6 ? (Z = yc(F, $.mode, oe), Z.return = $, Z) : (Z = d(Z, F), Z.return = $, Z);
    }
    function H($, Z, F, oe) {
      var ve = F.type;
      return ve === h ? se(
        $,
        Z,
        F.props.children,
        oe,
        F.key
      ) : Z !== null && (Z.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === R && _m(ve) === Z.type) ? (Z = d(Z, F.props), ps(Z, F), Z.return = $, Z) : (Z = Ro(
        F.type,
        F.key,
        F.props,
        null,
        $.mode,
        oe
      ), ps(Z, F), Z.return = $, Z);
    }
    function Q($, Z, F, oe) {
      return Z === null || Z.tag !== 4 || Z.stateNode.containerInfo !== F.containerInfo || Z.stateNode.implementation !== F.implementation ? (Z = _c(F, $.mode, oe), Z.return = $, Z) : (Z = d(Z, F.children || []), Z.return = $, Z);
    }
    function se($, Z, F, oe, ve) {
      return Z === null || Z.tag !== 7 ? (Z = ca(
        F,
        $.mode,
        oe,
        ve
      ), Z.return = $, Z) : (Z = d(Z, F), Z.return = $, Z);
    }
    function le($, Z, F) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
        return Z = yc(
          "" + Z,
          $.mode,
          F
        ), Z.return = $, Z;
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case y:
            return F = Ro(
              Z.type,
              Z.key,
              Z.props,
              null,
              $.mode,
              F
            ), ps(F, Z), F.return = $, F;
          case S:
            return Z = _c(
              Z,
              $.mode,
              F
            ), Z.return = $, Z;
          case R:
            var oe = Z._init;
            return Z = oe(Z._payload), le($, Z, F);
        }
        if (K(Z) || q(Z))
          return Z = ca(
            Z,
            $.mode,
            F,
            null
          ), Z.return = $, Z;
        if (typeof Z.then == "function")
          return le($, Fo(Z), F);
        if (Z.$$typeof === P)
          return le(
            $,
            Po($, Z),
            F
          );
        Qo($, Z);
      }
      return null;
    }
    function W($, Z, F, oe) {
      var ve = Z !== null ? Z.key : null;
      if (typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint")
        return ve !== null ? null : z($, Z, "" + F, oe);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case y:
            return F.key === ve ? H($, Z, F, oe) : null;
          case S:
            return F.key === ve ? Q($, Z, F, oe) : null;
          case R:
            return ve = F._init, F = ve(F._payload), W($, Z, F, oe);
        }
        if (K(F) || q(F))
          return ve !== null ? null : se($, Z, F, oe, null);
        if (typeof F.then == "function")
          return W(
            $,
            Z,
            Fo(F),
            oe
          );
        if (F.$$typeof === P)
          return W(
            $,
            Z,
            Po($, F),
            oe
          );
        Qo($, F);
      }
      return null;
    }
    function ee($, Z, F, oe, ve) {
      if (typeof oe == "string" && oe !== "" || typeof oe == "number" || typeof oe == "bigint")
        return $ = $.get(F) || null, z(Z, $, "" + oe, ve);
      if (typeof oe == "object" && oe !== null) {
        switch (oe.$$typeof) {
          case y:
            return $ = $.get(
              oe.key === null ? F : oe.key
            ) || null, H(Z, $, oe, ve);
          case S:
            return $ = $.get(
              oe.key === null ? F : oe.key
            ) || null, Q(Z, $, oe, ve);
          case R:
            var Pe = oe._init;
            return oe = Pe(oe._payload), ee(
              $,
              Z,
              F,
              oe,
              ve
            );
        }
        if (K(oe) || q(oe))
          return $ = $.get(F) || null, se(Z, $, oe, ve, null);
        if (typeof oe.then == "function")
          return ee(
            $,
            Z,
            F,
            Fo(oe),
            ve
          );
        if (oe.$$typeof === P)
          return ee(
            $,
            Z,
            F,
            Po(Z, oe),
            ve
          );
        Qo(Z, oe);
      }
      return null;
    }
    function Ae($, Z, F, oe) {
      for (var ve = null, Pe = null, be = Z, ke = Z = 0, Ot = null; be !== null && ke < F.length; ke++) {
        be.index > ke ? (Ot = be, be = null) : Ot = be.sibling;
        var Ve = W(
          $,
          be,
          F[ke],
          oe
        );
        if (Ve === null) {
          be === null && (be = Ot);
          break;
        }
        e && be && Ve.alternate === null && n($, be), Z = b(Ve, Z, ke), Pe === null ? ve = Ve : Pe.sibling = Ve, Pe = Ve, be = Ot;
      }
      if (ke === F.length)
        return i($, be), $e && fa($, ke), ve;
      if (be === null) {
        for (; ke < F.length; ke++)
          be = le($, F[ke], oe), be !== null && (Z = b(
            be,
            Z,
            ke
          ), Pe === null ? ve = be : Pe.sibling = be, Pe = be);
        return $e && fa($, ke), ve;
      }
      for (be = o(be); ke < F.length; ke++)
        Ot = ee(
          be,
          $,
          ke,
          F[ke],
          oe
        ), Ot !== null && (e && Ot.alternate !== null && be.delete(
          Ot.key === null ? ke : Ot.key
        ), Z = b(
          Ot,
          Z,
          ke
        ), Pe === null ? ve = Ot : Pe.sibling = Ot, Pe = Ot);
      return e && be.forEach(function(Xr) {
        return n($, Xr);
      }), $e && fa($, ke), ve;
    }
    function Ce($, Z, F, oe) {
      if (F == null) throw Error(a(151));
      for (var ve = null, Pe = null, be = Z, ke = Z = 0, Ot = null, Ve = F.next(); be !== null && !Ve.done; ke++, Ve = F.next()) {
        be.index > ke ? (Ot = be, be = null) : Ot = be.sibling;
        var Xr = W($, be, Ve.value, oe);
        if (Xr === null) {
          be === null && (be = Ot);
          break;
        }
        e && be && Xr.alternate === null && n($, be), Z = b(Xr, Z, ke), Pe === null ? ve = Xr : Pe.sibling = Xr, Pe = Xr, be = Ot;
      }
      if (Ve.done)
        return i($, be), $e && fa($, ke), ve;
      if (be === null) {
        for (; !Ve.done; ke++, Ve = F.next())
          Ve = le($, Ve.value, oe), Ve !== null && (Z = b(Ve, Z, ke), Pe === null ? ve = Ve : Pe.sibling = Ve, Pe = Ve);
        return $e && fa($, ke), ve;
      }
      for (be = o(be); !Ve.done; ke++, Ve = F.next())
        Ve = ee(be, $, ke, Ve.value, oe), Ve !== null && (e && Ve.alternate !== null && be.delete(Ve.key === null ? ke : Ve.key), Z = b(Ve, Z, ke), Pe === null ? ve = Ve : Pe.sibling = Ve, Pe = Ve);
      return e && be.forEach(function(G1) {
        return n($, G1);
      }), $e && fa($, ke), ve;
    }
    function Je($, Z, F, oe) {
      if (typeof F == "object" && F !== null && F.type === h && F.key === null && (F = F.props.children), typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case y:
            e: {
              for (var ve = F.key; Z !== null; ) {
                if (Z.key === ve) {
                  if (ve = F.type, ve === h) {
                    if (Z.tag === 7) {
                      i(
                        $,
                        Z.sibling
                      ), oe = d(
                        Z,
                        F.props.children
                      ), oe.return = $, $ = oe;
                      break e;
                    }
                  } else if (Z.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === R && _m(ve) === Z.type) {
                    i(
                      $,
                      Z.sibling
                    ), oe = d(Z, F.props), ps(oe, F), oe.return = $, $ = oe;
                    break e;
                  }
                  i($, Z);
                  break;
                } else n($, Z);
                Z = Z.sibling;
              }
              F.type === h ? (oe = ca(
                F.props.children,
                $.mode,
                oe,
                F.key
              ), oe.return = $, $ = oe) : (oe = Ro(
                F.type,
                F.key,
                F.props,
                null,
                $.mode,
                oe
              ), ps(oe, F), oe.return = $, $ = oe);
            }
            return N($);
          case S:
            e: {
              for (ve = F.key; Z !== null; ) {
                if (Z.key === ve)
                  if (Z.tag === 4 && Z.stateNode.containerInfo === F.containerInfo && Z.stateNode.implementation === F.implementation) {
                    i(
                      $,
                      Z.sibling
                    ), oe = d(Z, F.children || []), oe.return = $, $ = oe;
                    break e;
                  } else {
                    i($, Z);
                    break;
                  }
                else n($, Z);
                Z = Z.sibling;
              }
              oe = _c(F, $.mode, oe), oe.return = $, $ = oe;
            }
            return N($);
          case R:
            return ve = F._init, F = ve(F._payload), Je(
              $,
              Z,
              F,
              oe
            );
        }
        if (K(F))
          return Ae(
            $,
            Z,
            F,
            oe
          );
        if (q(F)) {
          if (ve = q(F), typeof ve != "function") throw Error(a(150));
          return F = ve.call(F), Ce(
            $,
            Z,
            F,
            oe
          );
        }
        if (typeof F.then == "function")
          return Je(
            $,
            Z,
            Fo(F),
            oe
          );
        if (F.$$typeof === P)
          return Je(
            $,
            Z,
            Po($, F),
            oe
          );
        Qo($, F);
      }
      return typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint" ? (F = "" + F, Z !== null && Z.tag === 6 ? (i($, Z.sibling), oe = d(Z, F), oe.return = $, $ = oe) : (i($, Z), oe = yc(F, $.mode, oe), oe.return = $, $ = oe), N($)) : i($, Z);
    }
    return function($, Z, F, oe) {
      try {
        hs = 0;
        var ve = Je(
          $,
          Z,
          F,
          oe
        );
        return di = null, ve;
      } catch (be) {
        if (be === as || be === Io) throw be;
        var Pe = cn(29, be, null, $.mode);
        return Pe.lanes = oe, Pe.return = $, Pe;
      } finally {
      }
    };
  }
  var fi = bm(!0), Sm = bm(!1), Nn = X(null), Fn = null;
  function jr(e) {
    var n = e.alternate;
    Y(Ct, Ct.current & 1), Y(Nn, e), Fn === null && (n === null || oi.current !== null || n.memoizedState !== null) && (Fn = e);
  }
  function wm(e) {
    if (e.tag === 22) {
      if (Y(Ct, Ct.current), Y(Nn, e), Fn === null) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (Fn = e);
      }
    } else Dr();
  }
  function Dr() {
    Y(Ct, Ct.current), Y(Nn, Nn.current);
  }
  function hr(e) {
    ce(Nn), Fn === e && (Fn = null), ce(Ct);
  }
  var Ct = X(0);
  function Ko(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var i = n.memoizedState;
        if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || Hd(i)))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  function Jc(e, n, i, o) {
    n = e.memoizedState, i = i(o, n), i = i == null ? n : g({}, n, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var Wc = {
    enqueueSetState: function(e, n, i) {
      e = e._reactInternals;
      var o = pn(), d = Or(o);
      d.payload = n, i != null && (d.callback = i), n = Mr(e, d, o), n !== null && (mn(n, e, o), ss(n, e, o));
    },
    enqueueReplaceState: function(e, n, i) {
      e = e._reactInternals;
      var o = pn(), d = Or(o);
      d.tag = 1, d.payload = n, i != null && (d.callback = i), n = Mr(e, d, o), n !== null && (mn(n, e, o), ss(n, e, o));
    },
    enqueueForceUpdate: function(e, n) {
      e = e._reactInternals;
      var i = pn(), o = Or(i);
      o.tag = 2, n != null && (o.callback = n), n = Mr(e, o, i), n !== null && (mn(n, e, i), ss(n, e, i));
    }
  };
  function Em(e, n, i, o, d, b, N) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, b, N) : n.prototype && n.prototype.isPureReactComponent ? !Qi(i, o) || !Qi(d, b) : !0;
  }
  function Cm(e, n, i, o) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(i, o), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(i, o), n.state !== e && Wc.enqueueReplaceState(n, n.state, null);
  }
  function _a(e, n) {
    var i = n;
    if ("ref" in n) {
      i = {};
      for (var o in n)
        o !== "ref" && (i[o] = n[o]);
    }
    if (e = e.defaultProps) {
      i === n && (i = g({}, i));
      for (var d in e)
        i[d] === void 0 && (i[d] = e[d]);
    }
    return i;
  }
  var Jo = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  };
  function km(e) {
    Jo(e);
  }
  function Am(e) {
    console.error(e);
  }
  function xm(e) {
    Jo(e);
  }
  function Wo(e, n) {
    try {
      var i = e.onUncaughtError;
      i(n.value, { componentStack: n.stack });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Tm(e, n, i) {
    try {
      var o = e.onCaughtError;
      o(i.value, {
        componentStack: i.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (d) {
      setTimeout(function() {
        throw d;
      });
    }
  }
  function ed(e, n, i) {
    return i = Or(i), i.tag = 3, i.payload = { element: null }, i.callback = function() {
      Wo(e, n);
    }, i;
  }
  function Nm(e) {
    return e = Or(e), e.tag = 3, e;
  }
  function Om(e, n, i, o) {
    var d = i.type.getDerivedStateFromError;
    if (typeof d == "function") {
      var b = o.value;
      e.payload = function() {
        return d(b);
      }, e.callback = function() {
        Tm(n, i, o);
      };
    }
    var N = i.stateNode;
    N !== null && typeof N.componentDidCatch == "function" && (e.callback = function() {
      Tm(n, i, o), typeof d != "function" && (Ur === null ? Ur = /* @__PURE__ */ new Set([this]) : Ur.add(this));
      var z = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: z !== null ? z : ""
      });
    });
  }
  function Gb(e, n, i, o, d) {
    if (i.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (n = i.alternate, n !== null && ts(
        n,
        i,
        d,
        !0
      ), i = Nn.current, i !== null) {
        switch (i.tag) {
          case 13:
            return Fn === null ? Cd() : i.alternate === null && ht === 0 && (ht = 3), i.flags &= -257, i.flags |= 65536, i.lanes = d, o === Nc ? i.flags |= 16384 : (n = i.updateQueue, n === null ? i.updateQueue = /* @__PURE__ */ new Set([o]) : n.add(o), Ad(e, o, d)), !1;
          case 22:
            return i.flags |= 65536, o === Nc ? i.flags |= 16384 : (n = i.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, i.updateQueue = n) : (i = n.retryQueue, i === null ? n.retryQueue = /* @__PURE__ */ new Set([o]) : i.add(o)), Ad(e, o, d)), !1;
        }
        throw Error(a(435, i.tag));
      }
      return Ad(e, o, d), Cd(), !1;
    }
    if ($e)
      return n = Nn.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = d, o !== wc && (e = Error(a(422), { cause: o }), es(kn(e, i)))) : (o !== wc && (n = Error(a(423), {
        cause: o
      }), es(
        kn(n, i)
      )), e = e.current.alternate, e.flags |= 65536, d &= -d, e.lanes |= d, o = kn(o, i), d = ed(
        e.stateNode,
        o,
        d
      ), Rc(e, d), ht !== 4 && (ht = 2)), !1;
    var b = Error(a(520), { cause: o });
    if (b = kn(b, i), Ss === null ? Ss = [b] : Ss.push(b), ht !== 4 && (ht = 2), n === null) return !0;
    o = kn(o, i), i = n;
    do {
      switch (i.tag) {
        case 3:
          return i.flags |= 65536, e = d & -d, i.lanes |= e, e = ed(i.stateNode, o, e), Rc(i, e), !1;
        case 1:
          if (n = i.type, b = i.stateNode, (i.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (Ur === null || !Ur.has(b))))
            return i.flags |= 65536, d &= -d, i.lanes |= d, d = Nm(d), Om(
              d,
              e,
              i,
              o
            ), Rc(i, d), !1;
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var Mm = Error(a(461)), Tt = !1;
  function jt(e, n, i, o) {
    n.child = e === null ? Sm(n, null, i, o) : fi(
      n,
      e.child,
      i,
      o
    );
  }
  function Rm(e, n, i, o, d) {
    i = i.render;
    var b = n.ref;
    if ("ref" in o) {
      var N = {};
      for (var z in o)
        z !== "ref" && (N[z] = o[z]);
    } else N = o;
    return ga(n), o = Lc(
      e,
      n,
      i,
      N,
      b,
      d
    ), z = Ic(), e !== null && !Tt ? (Bc(e, n, d), pr(e, n, d)) : ($e && z && bc(n), n.flags |= 1, jt(e, n, o, d), n.child);
  }
  function jm(e, n, i, o, d) {
    if (e === null) {
      var b = i.type;
      return typeof b == "function" && !vc(b) && b.defaultProps === void 0 && i.compare === null ? (n.tag = 15, n.type = b, Dm(
        e,
        n,
        b,
        o,
        d
      )) : (e = Ro(
        i.type,
        null,
        o,
        n,
        n.mode,
        d
      ), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (b = e.child, !ud(e, d)) {
      var N = b.memoizedProps;
      if (i = i.compare, i = i !== null ? i : Qi, i(N, o) && e.ref === n.ref)
        return pr(e, n, d);
    }
    return n.flags |= 1, e = or(b, o), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Dm(e, n, i, o, d) {
    if (e !== null) {
      var b = e.memoizedProps;
      if (Qi(b, o) && e.ref === n.ref)
        if (Tt = !1, n.pendingProps = o = b, ud(e, d))
          (e.flags & 131072) !== 0 && (Tt = !0);
        else
          return n.lanes = e.lanes, pr(e, n, d);
    }
    return td(
      e,
      n,
      i,
      o,
      d
    );
  }
  function zm(e, n, i) {
    var o = n.pendingProps, d = o.children, b = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (o = b !== null ? b.baseLanes | i : i, e !== null) {
          for (d = n.child = e.child, b = 0; d !== null; )
            b = b | d.lanes | d.childLanes, d = d.sibling;
          n.childLanes = b & ~o;
        } else n.childLanes = 0, n.child = null;
        return Pm(
          e,
          n,
          o,
          i
        );
      }
      if ((i & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Lo(
          n,
          b !== null ? b.cachePool : null
        ), b !== null ? Dp(n, b) : Dc(), wm(n);
      else
        return n.lanes = n.childLanes = 536870912, Pm(
          e,
          n,
          b !== null ? b.baseLanes | i : i,
          i
        );
    } else
      b !== null ? (Lo(n, b.cachePool), Dp(n, b), Dr(), n.memoizedState = null) : (e !== null && Lo(n, null), Dc(), Dr());
    return jt(e, n, d, i), n.child;
  }
  function Pm(e, n, i, o) {
    var d = Tc();
    return d = d === null ? null : { parent: Et._currentValue, pool: d }, n.memoizedState = {
      baseLanes: i,
      cachePool: d
    }, e !== null && Lo(n, null), Dc(), wm(n), e !== null && ts(e, n, o, !0), null;
  }
  function eu(e, n) {
    var i = n.ref;
    if (i === null)
      e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof i != "function" && typeof i != "object")
        throw Error(a(284));
      (e === null || e.ref !== i) && (n.flags |= 4194816);
    }
  }
  function td(e, n, i, o, d) {
    return ga(n), i = Lc(
      e,
      n,
      i,
      o,
      void 0,
      d
    ), o = Ic(), e !== null && !Tt ? (Bc(e, n, d), pr(e, n, d)) : ($e && o && bc(n), n.flags |= 1, jt(e, n, i, d), n.child);
  }
  function Lm(e, n, i, o, d, b) {
    return ga(n), n.updateQueue = null, i = Pp(
      n,
      o,
      i,
      d
    ), zp(e), o = Ic(), e !== null && !Tt ? (Bc(e, n, b), pr(e, n, b)) : ($e && o && bc(n), n.flags |= 1, jt(e, n, i, b), n.child);
  }
  function Im(e, n, i, o, d) {
    if (ga(n), n.stateNode === null) {
      var b = ni, N = i.contextType;
      typeof N == "object" && N !== null && (b = Ut(N)), b = new i(o, b), n.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null, b.updater = Wc, n.stateNode = b, b._reactInternals = n, b = n.stateNode, b.props = o, b.state = n.memoizedState, b.refs = {}, Oc(n), N = i.contextType, b.context = typeof N == "object" && N !== null ? Ut(N) : ni, b.state = n.memoizedState, N = i.getDerivedStateFromProps, typeof N == "function" && (Jc(
        n,
        i,
        N,
        o
      ), b.state = n.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof b.getSnapshotBeforeUpdate == "function" || typeof b.UNSAFE_componentWillMount != "function" && typeof b.componentWillMount != "function" || (N = b.state, typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount(), N !== b.state && Wc.enqueueReplaceState(b, b.state, null), us(n, o, b, d), os(), b.state = n.memoizedState), typeof b.componentDidMount == "function" && (n.flags |= 4194308), o = !0;
    } else if (e === null) {
      b = n.stateNode;
      var z = n.memoizedProps, H = _a(i, z);
      b.props = H;
      var Q = b.context, se = i.contextType;
      N = ni, typeof se == "object" && se !== null && (N = Ut(se));
      var le = i.getDerivedStateFromProps;
      se = typeof le == "function" || typeof b.getSnapshotBeforeUpdate == "function", z = n.pendingProps !== z, se || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (z || Q !== N) && Cm(
        n,
        b,
        o,
        N
      ), Nr = !1;
      var W = n.memoizedState;
      b.state = W, us(n, o, b, d), os(), Q = n.memoizedState, z || W !== Q || Nr ? (typeof le == "function" && (Jc(
        n,
        i,
        le,
        o
      ), Q = n.memoizedState), (H = Nr || Em(
        n,
        i,
        H,
        o,
        W,
        Q,
        N
      )) ? (se || typeof b.UNSAFE_componentWillMount != "function" && typeof b.componentWillMount != "function" || (typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount()), typeof b.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof b.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = o, n.memoizedState = Q), b.props = o, b.state = Q, b.context = N, o = H) : (typeof b.componentDidMount == "function" && (n.flags |= 4194308), o = !1);
    } else {
      b = n.stateNode, Mc(e, n), N = n.memoizedProps, se = _a(i, N), b.props = se, le = n.pendingProps, W = b.context, Q = i.contextType, H = ni, typeof Q == "object" && Q !== null && (H = Ut(Q)), z = i.getDerivedStateFromProps, (Q = typeof z == "function" || typeof b.getSnapshotBeforeUpdate == "function") || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (N !== le || W !== H) && Cm(
        n,
        b,
        o,
        H
      ), Nr = !1, W = n.memoizedState, b.state = W, us(n, o, b, d), os();
      var ee = n.memoizedState;
      N !== le || W !== ee || Nr || e !== null && e.dependencies !== null && zo(e.dependencies) ? (typeof z == "function" && (Jc(
        n,
        i,
        z,
        o
      ), ee = n.memoizedState), (se = Nr || Em(
        n,
        i,
        se,
        o,
        W,
        ee,
        H
      ) || e !== null && e.dependencies !== null && zo(e.dependencies)) ? (Q || typeof b.UNSAFE_componentWillUpdate != "function" && typeof b.componentWillUpdate != "function" || (typeof b.componentWillUpdate == "function" && b.componentWillUpdate(o, ee, H), typeof b.UNSAFE_componentWillUpdate == "function" && b.UNSAFE_componentWillUpdate(
        o,
        ee,
        H
      )), typeof b.componentDidUpdate == "function" && (n.flags |= 4), typeof b.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof b.componentDidUpdate != "function" || N === e.memoizedProps && W === e.memoizedState || (n.flags |= 4), typeof b.getSnapshotBeforeUpdate != "function" || N === e.memoizedProps && W === e.memoizedState || (n.flags |= 1024), n.memoizedProps = o, n.memoizedState = ee), b.props = o, b.state = ee, b.context = H, o = se) : (typeof b.componentDidUpdate != "function" || N === e.memoizedProps && W === e.memoizedState || (n.flags |= 4), typeof b.getSnapshotBeforeUpdate != "function" || N === e.memoizedProps && W === e.memoizedState || (n.flags |= 1024), o = !1);
    }
    return b = o, eu(e, n), o = (n.flags & 128) !== 0, b || o ? (b = n.stateNode, i = o && typeof i.getDerivedStateFromError != "function" ? null : b.render(), n.flags |= 1, e !== null && o ? (n.child = fi(
      n,
      e.child,
      null,
      d
    ), n.child = fi(
      n,
      null,
      i,
      d
    )) : jt(e, n, i, d), n.memoizedState = b.state, e = n.child) : e = pr(
      e,
      n,
      d
    ), e;
  }
  function Bm(e, n, i, o) {
    return Wi(), n.flags |= 256, jt(e, n, i, o), n.child;
  }
  var nd = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function rd(e) {
    return { baseLanes: e, cachePool: Ap() };
  }
  function ad(e, n, i) {
    return e = e !== null ? e.childLanes & ~i : 0, n && (e |= On), e;
  }
  function Um(e, n, i) {
    var o = n.pendingProps, d = !1, b = (n.flags & 128) !== 0, N;
    if ((N = b) || (N = e !== null && e.memoizedState === null ? !1 : (Ct.current & 2) !== 0), N && (d = !0, n.flags &= -129), N = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if ($e) {
        if (d ? jr(n) : Dr(), $e) {
          var z = ft, H;
          if (H = z) {
            e: {
              for (H = z, z = Xn; H.nodeType !== 8; ) {
                if (!z) {
                  z = null;
                  break e;
                }
                if (H = In(
                  H.nextSibling
                ), H === null) {
                  z = null;
                  break e;
                }
              }
              z = H;
            }
            z !== null ? (n.memoizedState = {
              dehydrated: z,
              treeContext: da !== null ? { id: ur, overflow: lr } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, H = cn(
              18,
              null,
              null,
              0
            ), H.stateNode = z, H.return = n, n.child = H, $t = n, ft = null, H = !0) : H = !1;
          }
          H || pa(n);
        }
        if (z = n.memoizedState, z !== null && (z = z.dehydrated, z !== null))
          return Hd(z) ? n.lanes = 32 : n.lanes = 536870912, null;
        hr(n);
      }
      return z = o.children, o = o.fallback, d ? (Dr(), d = n.mode, z = tu(
        { mode: "hidden", children: z },
        d
      ), o = ca(
        o,
        d,
        i,
        null
      ), z.return = n, o.return = n, z.sibling = o, n.child = z, d = n.child, d.memoizedState = rd(i), d.childLanes = ad(
        e,
        N,
        i
      ), n.memoizedState = nd, o) : (jr(n), id(n, z));
    }
    if (H = e.memoizedState, H !== null && (z = H.dehydrated, z !== null)) {
      if (b)
        n.flags & 256 ? (jr(n), n.flags &= -257, n = sd(
          e,
          n,
          i
        )) : n.memoizedState !== null ? (Dr(), n.child = e.child, n.flags |= 128, n = null) : (Dr(), d = o.fallback, z = n.mode, o = tu(
          { mode: "visible", children: o.children },
          z
        ), d = ca(
          d,
          z,
          i,
          null
        ), d.flags |= 2, o.return = n, d.return = n, o.sibling = d, n.child = o, fi(
          n,
          e.child,
          null,
          i
        ), o = n.child, o.memoizedState = rd(i), o.childLanes = ad(
          e,
          N,
          i
        ), n.memoizedState = nd, n = d);
      else if (jr(n), Hd(z)) {
        if (N = z.nextSibling && z.nextSibling.dataset, N) var Q = N.dgst;
        N = Q, o = Error(a(419)), o.stack = "", o.digest = N, es({ value: o, source: null, stack: null }), n = sd(
          e,
          n,
          i
        );
      } else if (Tt || ts(e, n, i, !1), N = (i & e.childLanes) !== 0, Tt || N) {
        if (N = nt, N !== null && (o = i & -i, o = (o & 42) !== 0 ? 1 : ql(o), o = (o & (N.suspendedLanes | i)) !== 0 ? 0 : o, o !== 0 && o !== H.retryLane))
          throw H.retryLane = o, ti(e, o), mn(N, e, o), Mm;
        z.data === "$?" || Cd(), n = sd(
          e,
          n,
          i
        );
      } else
        z.data === "$?" ? (n.flags |= 192, n.child = e.child, n = null) : (e = H.treeContext, ft = In(
          z.nextSibling
        ), $t = n, $e = !0, ha = null, Xn = !1, e !== null && (xn[Tn++] = ur, xn[Tn++] = lr, xn[Tn++] = da, ur = e.id, lr = e.overflow, da = n), n = id(
          n,
          o.children
        ), n.flags |= 4096);
      return n;
    }
    return d ? (Dr(), d = o.fallback, z = n.mode, H = e.child, Q = H.sibling, o = or(H, {
      mode: "hidden",
      children: o.children
    }), o.subtreeFlags = H.subtreeFlags & 65011712, Q !== null ? d = or(Q, d) : (d = ca(
      d,
      z,
      i,
      null
    ), d.flags |= 2), d.return = n, o.return = n, o.sibling = d, n.child = o, o = d, d = n.child, z = e.child.memoizedState, z === null ? z = rd(i) : (H = z.cachePool, H !== null ? (Q = Et._currentValue, H = H.parent !== Q ? { parent: Q, pool: Q } : H) : H = Ap(), z = {
      baseLanes: z.baseLanes | i,
      cachePool: H
    }), d.memoizedState = z, d.childLanes = ad(
      e,
      N,
      i
    ), n.memoizedState = nd, o) : (jr(n), i = e.child, e = i.sibling, i = or(i, {
      mode: "visible",
      children: o.children
    }), i.return = n, i.sibling = null, e !== null && (N = n.deletions, N === null ? (n.deletions = [e], n.flags |= 16) : N.push(e)), n.child = i, n.memoizedState = null, i);
  }
  function id(e, n) {
    return n = tu(
      { mode: "visible", children: n },
      e.mode
    ), n.return = e, e.child = n;
  }
  function tu(e, n) {
    return e = cn(22, e, null, n), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function sd(e, n, i) {
    return fi(n, e.child, null, i), e = id(
      n,
      n.pendingProps.children
    ), e.flags |= 2, n.memoizedState = null, e;
  }
  function Hm(e, n, i) {
    e.lanes |= n;
    var o = e.alternate;
    o !== null && (o.lanes |= n), Cc(e.return, n, i);
  }
  function od(e, n, i, o, d) {
    var b = e.memoizedState;
    b === null ? e.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: i,
      tailMode: d
    } : (b.isBackwards = n, b.rendering = null, b.renderingStartTime = 0, b.last = o, b.tail = i, b.tailMode = d);
  }
  function qm(e, n, i) {
    var o = n.pendingProps, d = o.revealOrder, b = o.tail;
    if (jt(e, n, o.children, i), o = Ct.current, (o & 2) !== 0)
      o = o & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Hm(e, i, n);
          else if (e.tag === 19)
            Hm(e, i, n);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === n) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      o &= 1;
    }
    switch (Y(Ct, o), d) {
      case "forwards":
        for (i = n.child, d = null; i !== null; )
          e = i.alternate, e !== null && Ko(e) === null && (d = i), i = i.sibling;
        i = d, i === null ? (d = n.child, n.child = null) : (d = i.sibling, i.sibling = null), od(
          n,
          !1,
          d,
          i,
          b
        );
        break;
      case "backwards":
        for (i = null, d = n.child, n.child = null; d !== null; ) {
          if (e = d.alternate, e !== null && Ko(e) === null) {
            n.child = d;
            break;
          }
          e = d.sibling, d.sibling = i, i = d, d = e;
        }
        od(
          n,
          !0,
          i,
          null,
          b
        );
        break;
      case "together":
        od(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function pr(e, n, i) {
    if (e !== null && (n.dependencies = e.dependencies), Br |= n.lanes, (i & n.childLanes) === 0)
      if (e !== null) {
        if (ts(
          e,
          n,
          i,
          !1
        ), (i & n.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && n.child !== e.child)
      throw Error(a(153));
    if (n.child !== null) {
      for (e = n.child, i = or(e, e.pendingProps), n.child = i, i.return = n; e.sibling !== null; )
        e = e.sibling, i = i.sibling = or(e, e.pendingProps), i.return = n;
      i.sibling = null;
    }
    return n.child;
  }
  function ud(e, n) {
    return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && zo(e)));
  }
  function Vb(e, n, i) {
    switch (n.tag) {
      case 3:
        re(n, n.stateNode.containerInfo), Tr(n, Et, e.memoizedState.cache), Wi();
        break;
      case 27:
      case 5:
        Re(n);
        break;
      case 4:
        re(n, n.stateNode.containerInfo);
        break;
      case 10:
        Tr(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var o = n.memoizedState;
        if (o !== null)
          return o.dehydrated !== null ? (jr(n), n.flags |= 128, null) : (i & n.child.childLanes) !== 0 ? Um(e, n, i) : (jr(n), e = pr(
            e,
            n,
            i
          ), e !== null ? e.sibling : null);
        jr(n);
        break;
      case 19:
        var d = (e.flags & 128) !== 0;
        if (o = (i & n.childLanes) !== 0, o || (ts(
          e,
          n,
          i,
          !1
        ), o = (i & n.childLanes) !== 0), d) {
          if (o)
            return qm(
              e,
              n,
              i
            );
          n.flags |= 128;
        }
        if (d = n.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), Y(Ct, Ct.current), o) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, zm(e, n, i);
      case 24:
        Tr(n, Et, e.memoizedState.cache);
    }
    return pr(e, n, i);
  }
  function Zm(e, n, i) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps)
        Tt = !0;
      else {
        if (!ud(e, i) && (n.flags & 128) === 0)
          return Tt = !1, Vb(
            e,
            n,
            i
          );
        Tt = (e.flags & 131072) !== 0;
      }
    else
      Tt = !1, $e && (n.flags & 1048576) !== 0 && _p(n, Do, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          e = n.pendingProps;
          var o = n.elementType, d = o._init;
          if (o = d(o._payload), n.type = o, typeof o == "function")
            vc(o) ? (e = _a(o, e), n.tag = 1, n = Im(
              null,
              n,
              o,
              e,
              i
            )) : (n.tag = 0, n = td(
              null,
              n,
              o,
              e,
              i
            ));
          else {
            if (o != null) {
              if (d = o.$$typeof, d === l) {
                n.tag = 11, n = Rm(
                  null,
                  n,
                  o,
                  e,
                  i
                );
                break e;
              } else if (d === k) {
                n.tag = 14, n = jm(
                  null,
                  n,
                  o,
                  e,
                  i
                );
                break e;
              }
            }
            throw n = V(o) || o, Error(a(306, n, ""));
          }
        }
        return n;
      case 0:
        return td(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 1:
        return o = n.type, d = _a(
          o,
          n.pendingProps
        ), Im(
          e,
          n,
          o,
          d,
          i
        );
      case 3:
        e: {
          if (re(
            n,
            n.stateNode.containerInfo
          ), e === null) throw Error(a(387));
          o = n.pendingProps;
          var b = n.memoizedState;
          d = b.element, Mc(e, n), us(n, o, null, i);
          var N = n.memoizedState;
          if (o = N.cache, Tr(n, Et, o), o !== b.cache && kc(
            n,
            [Et],
            i,
            !0
          ), os(), o = N.element, b.isDehydrated)
            if (b = {
              element: o,
              isDehydrated: !1,
              cache: N.cache
            }, n.updateQueue.baseState = b, n.memoizedState = b, n.flags & 256) {
              n = Bm(
                e,
                n,
                o,
                i
              );
              break e;
            } else if (o !== d) {
              d = kn(
                Error(a(424)),
                n
              ), es(d), n = Bm(
                e,
                n,
                o,
                i
              );
              break e;
            } else {
              switch (e = n.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (ft = In(e.firstChild), $t = n, $e = !0, ha = null, Xn = !0, i = Sm(
                n,
                null,
                o,
                i
              ), n.child = i; i; )
                i.flags = i.flags & -3 | 4096, i = i.sibling;
            }
          else {
            if (Wi(), o === d) {
              n = pr(
                e,
                n,
                i
              );
              break e;
            }
            jt(
              e,
              n,
              o,
              i
            );
          }
          n = n.child;
        }
        return n;
      case 26:
        return eu(e, n), e === null ? (i = Yg(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = i : $e || (i = n.type, e = n.pendingProps, o = mu(
          ne.current
        ).createElement(i), o[Bt] = n, o[Kt] = e, zt(o, i, e), xt(o), n.stateNode = o) : n.memoizedState = Yg(
          n.type,
          e.memoizedProps,
          n.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Re(n), e === null && $e && (o = n.stateNode = Gg(
          n.type,
          n.pendingProps,
          ne.current
        ), $t = n, Xn = !0, d = ft, Zr(n.type) ? (qd = d, ft = In(
          o.firstChild
        )) : ft = d), jt(
          e,
          n,
          n.pendingProps.children,
          i
        ), eu(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && $e && ((d = o = ft) && (o = _1(
          o,
          n.type,
          n.pendingProps,
          Xn
        ), o !== null ? (n.stateNode = o, $t = n, ft = In(
          o.firstChild
        ), Xn = !1, d = !0) : d = !1), d || pa(n)), Re(n), d = n.type, b = n.pendingProps, N = e !== null ? e.memoizedProps : null, o = b.children, Id(d, b) ? o = null : N !== null && Id(d, N) && (n.flags |= 32), n.memoizedState !== null && (d = Lc(
          e,
          n,
          Lb,
          null,
          null,
          i
        ), Os._currentValue = d), eu(e, n), jt(e, n, o, i), n.child;
      case 6:
        return e === null && $e && ((e = i = ft) && (i = b1(
          i,
          n.pendingProps,
          Xn
        ), i !== null ? (n.stateNode = i, $t = n, ft = null, e = !0) : e = !1), e || pa(n)), null;
      case 13:
        return Um(e, n, i);
      case 4:
        return re(
          n,
          n.stateNode.containerInfo
        ), o = n.pendingProps, e === null ? n.child = fi(
          n,
          null,
          o,
          i
        ) : jt(
          e,
          n,
          o,
          i
        ), n.child;
      case 11:
        return Rm(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 7:
        return jt(
          e,
          n,
          n.pendingProps,
          i
        ), n.child;
      case 8:
        return jt(
          e,
          n,
          n.pendingProps.children,
          i
        ), n.child;
      case 12:
        return jt(
          e,
          n,
          n.pendingProps.children,
          i
        ), n.child;
      case 10:
        return o = n.pendingProps, Tr(n, n.type, o.value), jt(
          e,
          n,
          o.children,
          i
        ), n.child;
      case 9:
        return d = n.type._context, o = n.pendingProps.children, ga(n), d = Ut(d), o = o(d), n.flags |= 1, jt(e, n, o, i), n.child;
      case 14:
        return jm(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 15:
        return Dm(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 19:
        return qm(e, n, i);
      case 31:
        return o = n.pendingProps, i = n.mode, o = {
          mode: o.mode,
          children: o.children
        }, e === null ? (i = tu(
          o,
          i
        ), i.ref = n.ref, n.child = i, i.return = n, n = i) : (i = or(e.child, o), i.ref = n.ref, n.child = i, i.return = n, n = i), n;
      case 22:
        return zm(e, n, i);
      case 24:
        return ga(n), o = Ut(Et), e === null ? (d = Tc(), d === null && (d = nt, b = Ac(), d.pooledCache = b, b.refCount++, b !== null && (d.pooledCacheLanes |= i), d = b), n.memoizedState = {
          parent: o,
          cache: d
        }, Oc(n), Tr(n, Et, d)) : ((e.lanes & i) !== 0 && (Mc(e, n), us(n, null, null, i), os()), d = e.memoizedState, b = n.memoizedState, d.parent !== o ? (d = { parent: o, cache: o }, n.memoizedState = d, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = d), Tr(n, Et, o)) : (o = b.cache, Tr(n, Et, o), o !== d.cache && kc(
          n,
          [Et],
          i,
          !0
        ))), jt(
          e,
          n,
          n.pendingProps.children,
          i
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(a(156, n.tag));
  }
  function mr(e) {
    e.flags |= 4;
  }
  function Gm(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Jg(n)) {
      if (n = Nn.current, n !== null && ((Ge & 4194048) === Ge ? Fn !== null : (Ge & 62914560) !== Ge && (Ge & 536870912) === 0 || n !== Fn))
        throw is = Nc, xp;
      e.flags |= 8192;
    }
  }
  function nu(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? wh() : 536870912, e.lanes |= n, gi |= n);
  }
  function ms(e, n) {
    if (!$e)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var i = null; n !== null; )
            n.alternate !== null && (i = n), n = n.sibling;
          i === null ? e.tail = null : i.sibling = null;
          break;
        case "collapsed":
          i = e.tail;
          for (var o = null; i !== null; )
            i.alternate !== null && (o = i), i = i.sibling;
          o === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null;
      }
  }
  function ut(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, i = 0, o = 0;
    if (n)
      for (var d = e.child; d !== null; )
        i |= d.lanes | d.childLanes, o |= d.subtreeFlags & 65011712, o |= d.flags & 65011712, d.return = e, d = d.sibling;
    else
      for (d = e.child; d !== null; )
        i |= d.lanes | d.childLanes, o |= d.subtreeFlags, o |= d.flags, d.return = e, d = d.sibling;
    return e.subtreeFlags |= o, e.childLanes = i, n;
  }
  function $b(e, n, i) {
    var o = n.pendingProps;
    switch (Sc(n), n.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ut(n), null;
      case 1:
        return ut(n), null;
      case 3:
        return i = n.stateNode, o = null, e !== null && (o = e.memoizedState.cache), n.memoizedState.cache !== o && (n.flags |= 2048), dr(Et), pe(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (Ji(n) ? mr(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, wp())), ut(n), null;
      case 26:
        return i = n.memoizedState, e === null ? (mr(n), i !== null ? (ut(n), Gm(n, i)) : (ut(n), n.flags &= -16777217)) : i ? i !== e.memoizedState ? (mr(n), ut(n), Gm(n, i)) : (ut(n), n.flags &= -16777217) : (e.memoizedProps !== o && mr(n), ut(n), n.flags &= -16777217), null;
      case 27:
        Se(n), i = ne.current;
        var d = n.type;
        if (e !== null && n.stateNode != null)
          e.memoizedProps !== o && mr(n);
        else {
          if (!o) {
            if (n.stateNode === null)
              throw Error(a(166));
            return ut(n), null;
          }
          e = U.current, Ji(n) ? bp(n) : (e = Gg(d, o, i), n.stateNode = e, mr(n));
        }
        return ut(n), null;
      case 5:
        if (Se(n), i = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== o && mr(n);
        else {
          if (!o) {
            if (n.stateNode === null)
              throw Error(a(166));
            return ut(n), null;
          }
          if (e = U.current, Ji(n))
            bp(n);
          else {
            switch (d = mu(
              ne.current
            ), e) {
              case 1:
                e = d.createElementNS(
                  "http://www.w3.org/2000/svg",
                  i
                );
                break;
              case 2:
                e = d.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  i
                );
                break;
              default:
                switch (i) {
                  case "svg":
                    e = d.createElementNS(
                      "http://www.w3.org/2000/svg",
                      i
                    );
                    break;
                  case "math":
                    e = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      i
                    );
                    break;
                  case "script":
                    e = d.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof o.is == "string" ? d.createElement("select", { is: o.is }) : d.createElement("select"), o.multiple ? e.multiple = !0 : o.size && (e.size = o.size);
                    break;
                  default:
                    e = typeof o.is == "string" ? d.createElement(i, { is: o.is }) : d.createElement(i);
                }
            }
            e[Bt] = n, e[Kt] = o;
            e: for (d = n.child; d !== null; ) {
              if (d.tag === 5 || d.tag === 6)
                e.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                d.child.return = d, d = d.child;
                continue;
              }
              if (d === n) break e;
              for (; d.sibling === null; ) {
                if (d.return === null || d.return === n)
                  break e;
                d = d.return;
              }
              d.sibling.return = d.return, d = d.sibling;
            }
            n.stateNode = e;
            e: switch (zt(e, i, o), i) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!o.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && mr(n);
          }
        }
        return ut(n), n.flags &= -16777217, null;
      case 6:
        if (e && n.stateNode != null)
          e.memoizedProps !== o && mr(n);
        else {
          if (typeof o != "string" && n.stateNode === null)
            throw Error(a(166));
          if (e = ne.current, Ji(n)) {
            if (e = n.stateNode, i = n.memoizedProps, o = null, d = $t, d !== null)
              switch (d.tag) {
                case 27:
                case 5:
                  o = d.memoizedProps;
              }
            e[Bt] = n, e = !!(e.nodeValue === i || o !== null && o.suppressHydrationWarning === !0 || Lg(e.nodeValue, i)), e || pa(n);
          } else
            e = mu(e).createTextNode(
              o
            ), e[Bt] = n, n.stateNode = e;
        }
        return ut(n), null;
      case 13:
        if (o = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (d = Ji(n), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!d) throw Error(a(318));
              if (d = n.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(a(317));
              d[Bt] = n;
            } else
              Wi(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            ut(n), d = !1;
          } else
            d = wp(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = d), d = !0;
          if (!d)
            return n.flags & 256 ? (hr(n), n) : (hr(n), null);
        }
        if (hr(n), (n.flags & 128) !== 0)
          return n.lanes = i, n;
        if (i = o !== null, e = e !== null && e.memoizedState !== null, i) {
          o = n.child, d = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (d = o.alternate.memoizedState.cachePool.pool);
          var b = null;
          o.memoizedState !== null && o.memoizedState.cachePool !== null && (b = o.memoizedState.cachePool.pool), b !== d && (o.flags |= 2048);
        }
        return i !== e && i && (n.child.flags |= 8192), nu(n, n.updateQueue), ut(n), null;
      case 4:
        return pe(), e === null && jd(n.stateNode.containerInfo), ut(n), null;
      case 10:
        return dr(n.type), ut(n), null;
      case 19:
        if (ce(Ct), d = n.memoizedState, d === null) return ut(n), null;
        if (o = (n.flags & 128) !== 0, b = d.rendering, b === null)
          if (o) ms(d, !1);
          else {
            if (ht !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null; ) {
                if (b = Ko(e), b !== null) {
                  for (n.flags |= 128, ms(d, !1), e = b.updateQueue, n.updateQueue = e, nu(n, e), n.subtreeFlags = 0, e = i, i = n.child; i !== null; )
                    yp(i, e), i = i.sibling;
                  return Y(
                    Ct,
                    Ct.current & 1 | 2
                  ), n.child;
                }
                e = e.sibling;
              }
            d.tail !== null && Fe() > iu && (n.flags |= 128, o = !0, ms(d, !1), n.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = Ko(b), e !== null) {
              if (n.flags |= 128, o = !0, e = e.updateQueue, n.updateQueue = e, nu(n, e), ms(d, !0), d.tail === null && d.tailMode === "hidden" && !b.alternate && !$e)
                return ut(n), null;
            } else
              2 * Fe() - d.renderingStartTime > iu && i !== 536870912 && (n.flags |= 128, o = !0, ms(d, !1), n.lanes = 4194304);
          d.isBackwards ? (b.sibling = n.child, n.child = b) : (e = d.last, e !== null ? e.sibling = b : n.child = b, d.last = b);
        }
        return d.tail !== null ? (n = d.tail, d.rendering = n, d.tail = n.sibling, d.renderingStartTime = Fe(), n.sibling = null, e = Ct.current, Y(Ct, o ? e & 1 | 2 : e & 1), n) : (ut(n), null);
      case 22:
      case 23:
        return hr(n), zc(), o = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (n.flags |= 8192) : o && (n.flags |= 8192), o ? (i & 536870912) !== 0 && (n.flags & 128) === 0 && (ut(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ut(n), i = n.updateQueue, i !== null && nu(n, i.retryQueue), i = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), o = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (o = n.memoizedState.cachePool.pool), o !== i && (n.flags |= 2048), e !== null && ce(va), null;
      case 24:
        return i = null, e !== null && (i = e.memoizedState.cache), n.memoizedState.cache !== i && (n.flags |= 2048), dr(Et), ut(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(a(156, n.tag));
  }
  function Yb(e, n) {
    switch (Sc(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return dr(Et), pe(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return Se(n), null;
      case 13:
        if (hr(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(a(340));
          Wi();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return ce(Ct), null;
      case 4:
        return pe(), null;
      case 10:
        return dr(n.type), null;
      case 22:
      case 23:
        return hr(n), zc(), e !== null && ce(va), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return dr(Et), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Vm(e, n) {
    switch (Sc(n), n.tag) {
      case 3:
        dr(Et), pe();
        break;
      case 26:
      case 27:
      case 5:
        Se(n);
        break;
      case 4:
        pe();
        break;
      case 13:
        hr(n);
        break;
      case 19:
        ce(Ct);
        break;
      case 10:
        dr(n.type);
        break;
      case 22:
      case 23:
        hr(n), zc(), e !== null && ce(va);
        break;
      case 24:
        dr(Et);
    }
  }
  function gs(e, n) {
    try {
      var i = n.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var d = o.next;
        i = d;
        do {
          if ((i.tag & e) === e) {
            o = void 0;
            var b = i.create, N = i.inst;
            o = b(), N.destroy = o;
          }
          i = i.next;
        } while (i !== d);
      }
    } catch (z) {
      tt(n, n.return, z);
    }
  }
  function zr(e, n, i) {
    try {
      var o = n.updateQueue, d = o !== null ? o.lastEffect : null;
      if (d !== null) {
        var b = d.next;
        o = b;
        do {
          if ((o.tag & e) === e) {
            var N = o.inst, z = N.destroy;
            if (z !== void 0) {
              N.destroy = void 0, d = n;
              var H = i, Q = z;
              try {
                Q();
              } catch (se) {
                tt(
                  d,
                  H,
                  se
                );
              }
            }
          }
          o = o.next;
        } while (o !== b);
      }
    } catch (se) {
      tt(n, n.return, se);
    }
  }
  function $m(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var i = e.stateNode;
      try {
        jp(n, i);
      } catch (o) {
        tt(e, e.return, o);
      }
    }
  }
  function Ym(e, n, i) {
    i.props = _a(
      e.type,
      e.memoizedProps
    ), i.state = e.memoizedState;
    try {
      i.componentWillUnmount();
    } catch (o) {
      tt(e, n, o);
    }
  }
  function vs(e, n) {
    try {
      var i = e.ref;
      if (i !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var o = e.stateNode;
            break;
          case 30:
            o = e.stateNode;
            break;
          default:
            o = e.stateNode;
        }
        typeof i == "function" ? e.refCleanup = i(o) : i.current = o;
      }
    } catch (d) {
      tt(e, n, d);
    }
  }
  function Qn(e, n) {
    var i = e.ref, o = e.refCleanup;
    if (i !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (d) {
          tt(e, n, d);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof i == "function")
        try {
          i(null);
        } catch (d) {
          tt(e, n, d);
        }
      else i.current = null;
  }
  function Xm(e) {
    var n = e.type, i = e.memoizedProps, o = e.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          i.autoFocus && o.focus();
          break e;
        case "img":
          i.src ? o.src = i.src : i.srcSet && (o.srcset = i.srcSet);
      }
    } catch (d) {
      tt(e, e.return, d);
    }
  }
  function ld(e, n, i) {
    try {
      var o = e.stateNode;
      p1(o, e.type, i, n), o[Kt] = n;
    } catch (d) {
      tt(e, e.return, d);
    }
  }
  function Fm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Zr(e.type) || e.tag === 4;
  }
  function cd(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Fm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Zr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function dd(e, n, i) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? (i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i).insertBefore(e, n) : (n = i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i, n.appendChild(e), i = i._reactRootContainer, i != null || n.onclick !== null || (n.onclick = pu));
    else if (o !== 4 && (o === 27 && Zr(e.type) && (i = e.stateNode, n = null), e = e.child, e !== null))
      for (dd(e, n, i), e = e.sibling; e !== null; )
        dd(e, n, i), e = e.sibling;
  }
  function ru(e, n, i) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? i.insertBefore(e, n) : i.appendChild(e);
    else if (o !== 4 && (o === 27 && Zr(e.type) && (i = e.stateNode), e = e.child, e !== null))
      for (ru(e, n, i), e = e.sibling; e !== null; )
        ru(e, n, i), e = e.sibling;
  }
  function Qm(e) {
    var n = e.stateNode, i = e.memoizedProps;
    try {
      for (var o = e.type, d = n.attributes; d.length; )
        n.removeAttributeNode(d[0]);
      zt(n, o, i), n[Bt] = e, n[Kt] = i;
    } catch (b) {
      tt(e, e.return, b);
    }
  }
  var gr = !1, vt = !1, fd = !1, Km = typeof WeakSet == "function" ? WeakSet : Set, Nt = null;
  function Xb(e, n) {
    if (e = e.containerInfo, Pd = Su, e = up(e), cc(e)) {
      if ("selectionStart" in e)
        var i = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          i = (i = e.ownerDocument) && i.defaultView || window;
          var o = i.getSelection && i.getSelection();
          if (o && o.rangeCount !== 0) {
            i = o.anchorNode;
            var d = o.anchorOffset, b = o.focusNode;
            o = o.focusOffset;
            try {
              i.nodeType, b.nodeType;
            } catch {
              i = null;
              break e;
            }
            var N = 0, z = -1, H = -1, Q = 0, se = 0, le = e, W = null;
            t: for (; ; ) {
              for (var ee; le !== i || d !== 0 && le.nodeType !== 3 || (z = N + d), le !== b || o !== 0 && le.nodeType !== 3 || (H = N + o), le.nodeType === 3 && (N += le.nodeValue.length), (ee = le.firstChild) !== null; )
                W = le, le = ee;
              for (; ; ) {
                if (le === e) break t;
                if (W === i && ++Q === d && (z = N), W === b && ++se === o && (H = N), (ee = le.nextSibling) !== null) break;
                le = W, W = le.parentNode;
              }
              le = ee;
            }
            i = z === -1 || H === -1 ? null : { start: z, end: H };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (Ld = { focusedElem: e, selectionRange: i }, Su = !1, Nt = n; Nt !== null; )
      if (n = Nt, e = n.child, (n.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = n, Nt = e;
      else
        for (; Nt !== null; ) {
          switch (n = Nt, b = n.alternate, e = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && b !== null) {
                e = void 0, i = n, d = b.memoizedProps, b = b.memoizedState, o = i.stateNode;
                try {
                  var Ae = _a(
                    i.type,
                    d,
                    i.elementType === i.type
                  );
                  e = o.getSnapshotBeforeUpdate(
                    Ae,
                    b
                  ), o.__reactInternalSnapshotBeforeUpdate = e;
                } catch (Ce) {
                  tt(
                    i,
                    i.return,
                    Ce
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = n.stateNode.containerInfo, i = e.nodeType, i === 9)
                  Ud(e);
                else if (i === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ud(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(a(163));
          }
          if (e = n.sibling, e !== null) {
            e.return = n.return, Nt = e;
            break;
          }
          Nt = n.return;
        }
  }
  function Jm(e, n, i) {
    var o = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        Pr(e, i), o & 4 && gs(5, i);
        break;
      case 1:
        if (Pr(e, i), o & 4)
          if (e = i.stateNode, n === null)
            try {
              e.componentDidMount();
            } catch (N) {
              tt(i, i.return, N);
            }
          else {
            var d = _a(
              i.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              e.componentDidUpdate(
                d,
                n,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (N) {
              tt(
                i,
                i.return,
                N
              );
            }
          }
        o & 64 && $m(i), o & 512 && vs(i, i.return);
        break;
      case 3:
        if (Pr(e, i), o & 64 && (e = i.updateQueue, e !== null)) {
          if (n = null, i.child !== null)
            switch (i.child.tag) {
              case 27:
              case 5:
                n = i.child.stateNode;
                break;
              case 1:
                n = i.child.stateNode;
            }
          try {
            jp(e, n);
          } catch (N) {
            tt(i, i.return, N);
          }
        }
        break;
      case 27:
        n === null && o & 4 && Qm(i);
      case 26:
      case 5:
        Pr(e, i), n === null && o & 4 && Xm(i), o & 512 && vs(i, i.return);
        break;
      case 12:
        Pr(e, i);
        break;
      case 13:
        Pr(e, i), o & 4 && tg(e, i), o & 64 && (e = i.memoizedState, e !== null && (e = e.dehydrated, e !== null && (i = r1.bind(
          null,
          i
        ), S1(e, i))));
        break;
      case 22:
        if (o = i.memoizedState !== null || gr, !o) {
          n = n !== null && n.memoizedState !== null || vt, d = gr;
          var b = vt;
          gr = o, (vt = n) && !b ? Lr(
            e,
            i,
            (i.subtreeFlags & 8772) !== 0
          ) : Pr(e, i), gr = d, vt = b;
        }
        break;
      case 30:
        break;
      default:
        Pr(e, i);
    }
  }
  function Wm(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Wm(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && Vl(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var at = null, en = !1;
  function vr(e, n, i) {
    for (i = i.child; i !== null; )
      eg(e, n, i), i = i.sibling;
  }
  function eg(e, n, i) {
    if (mt && typeof mt.onCommitFiberUnmount == "function")
      try {
        mt.onCommitFiberUnmount(zn, i);
      } catch {
      }
    switch (i.tag) {
      case 26:
        vt || Qn(i, n), vr(
          e,
          n,
          i
        ), i.memoizedState ? i.memoizedState.count-- : i.stateNode && (i = i.stateNode, i.parentNode.removeChild(i));
        break;
      case 27:
        vt || Qn(i, n);
        var o = at, d = en;
        Zr(i.type) && (at = i.stateNode, en = !1), vr(
          e,
          n,
          i
        ), As(i.stateNode), at = o, en = d;
        break;
      case 5:
        vt || Qn(i, n);
      case 6:
        if (o = at, d = en, at = null, vr(
          e,
          n,
          i
        ), at = o, en = d, at !== null)
          if (en)
            try {
              (at.nodeType === 9 ? at.body : at.nodeName === "HTML" ? at.ownerDocument.body : at).removeChild(i.stateNode);
            } catch (b) {
              tt(
                i,
                n,
                b
              );
            }
          else
            try {
              at.removeChild(i.stateNode);
            } catch (b) {
              tt(
                i,
                n,
                b
              );
            }
        break;
      case 18:
        at !== null && (en ? (e = at, qg(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          i.stateNode
        ), Ds(e)) : qg(at, i.stateNode));
        break;
      case 4:
        o = at, d = en, at = i.stateNode.containerInfo, en = !0, vr(
          e,
          n,
          i
        ), at = o, en = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        vt || zr(2, i, n), vt || zr(4, i, n), vr(
          e,
          n,
          i
        );
        break;
      case 1:
        vt || (Qn(i, n), o = i.stateNode, typeof o.componentWillUnmount == "function" && Ym(
          i,
          n,
          o
        )), vr(
          e,
          n,
          i
        );
        break;
      case 21:
        vr(
          e,
          n,
          i
        );
        break;
      case 22:
        vt = (o = vt) || i.memoizedState !== null, vr(
          e,
          n,
          i
        ), vt = o;
        break;
      default:
        vr(
          e,
          n,
          i
        );
    }
  }
  function tg(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Ds(e);
      } catch (i) {
        tt(n, n.return, i);
      }
  }
  function Fb(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Km()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new Km()), n;
      default:
        throw Error(a(435, e.tag));
    }
  }
  function hd(e, n) {
    var i = Fb(e);
    n.forEach(function(o) {
      var d = a1.bind(null, e, o);
      i.has(o) || (i.add(o), o.then(d, d));
    });
  }
  function dn(e, n) {
    var i = n.deletions;
    if (i !== null)
      for (var o = 0; o < i.length; o++) {
        var d = i[o], b = e, N = n, z = N;
        e: for (; z !== null; ) {
          switch (z.tag) {
            case 27:
              if (Zr(z.type)) {
                at = z.stateNode, en = !1;
                break e;
              }
              break;
            case 5:
              at = z.stateNode, en = !1;
              break e;
            case 3:
            case 4:
              at = z.stateNode.containerInfo, en = !0;
              break e;
          }
          z = z.return;
        }
        if (at === null) throw Error(a(160));
        eg(b, N, d), at = null, en = !1, b = d.alternate, b !== null && (b.return = null), d.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        ng(n, e), n = n.sibling;
  }
  var Ln = null;
  function ng(e, n) {
    var i = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        dn(n, e), fn(e), o & 4 && (zr(3, e, e.return), gs(3, e), zr(5, e, e.return));
        break;
      case 1:
        dn(n, e), fn(e), o & 512 && (vt || i === null || Qn(i, i.return)), o & 64 && gr && (e = e.updateQueue, e !== null && (o = e.callbacks, o !== null && (i = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = i === null ? o : i.concat(o))));
        break;
      case 26:
        var d = Ln;
        if (dn(n, e), fn(e), o & 512 && (vt || i === null || Qn(i, i.return)), o & 4) {
          var b = i !== null ? i.memoizedState : null;
          if (o = e.memoizedState, i === null)
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  o = e.type, i = e.memoizedProps, d = d.ownerDocument || d;
                  t: switch (o) {
                    case "title":
                      b = d.getElementsByTagName("title")[0], (!b || b[Hi] || b[Bt] || b.namespaceURI === "http://www.w3.org/2000/svg" || b.hasAttribute("itemprop")) && (b = d.createElement(o), d.head.insertBefore(
                        b,
                        d.querySelector("head > title")
                      )), zt(b, o, i), b[Bt] = e, xt(b), o = b;
                      break e;
                    case "link":
                      var N = Qg(
                        "link",
                        "href",
                        d
                      ).get(o + (i.href || ""));
                      if (N) {
                        for (var z = 0; z < N.length; z++)
                          if (b = N[z], b.getAttribute("href") === (i.href == null || i.href === "" ? null : i.href) && b.getAttribute("rel") === (i.rel == null ? null : i.rel) && b.getAttribute("title") === (i.title == null ? null : i.title) && b.getAttribute("crossorigin") === (i.crossOrigin == null ? null : i.crossOrigin)) {
                            N.splice(z, 1);
                            break t;
                          }
                      }
                      b = d.createElement(o), zt(b, o, i), d.head.appendChild(b);
                      break;
                    case "meta":
                      if (N = Qg(
                        "meta",
                        "content",
                        d
                      ).get(o + (i.content || ""))) {
                        for (z = 0; z < N.length; z++)
                          if (b = N[z], b.getAttribute("content") === (i.content == null ? null : "" + i.content) && b.getAttribute("name") === (i.name == null ? null : i.name) && b.getAttribute("property") === (i.property == null ? null : i.property) && b.getAttribute("http-equiv") === (i.httpEquiv == null ? null : i.httpEquiv) && b.getAttribute("charset") === (i.charSet == null ? null : i.charSet)) {
                            N.splice(z, 1);
                            break t;
                          }
                      }
                      b = d.createElement(o), zt(b, o, i), d.head.appendChild(b);
                      break;
                    default:
                      throw Error(a(468, o));
                  }
                  b[Bt] = e, xt(b), o = b;
                }
                e.stateNode = o;
              } else
                Kg(
                  d,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Fg(
                d,
                o,
                e.memoizedProps
              );
          else
            b !== o ? (b === null ? i.stateNode !== null && (i = i.stateNode, i.parentNode.removeChild(i)) : b.count--, o === null ? Kg(
              d,
              e.type,
              e.stateNode
            ) : Fg(
              d,
              o,
              e.memoizedProps
            )) : o === null && e.stateNode !== null && ld(
              e,
              e.memoizedProps,
              i.memoizedProps
            );
        }
        break;
      case 27:
        dn(n, e), fn(e), o & 512 && (vt || i === null || Qn(i, i.return)), i !== null && o & 4 && ld(
          e,
          e.memoizedProps,
          i.memoizedProps
        );
        break;
      case 5:
        if (dn(n, e), fn(e), o & 512 && (vt || i === null || Qn(i, i.return)), e.flags & 32) {
          d = e.stateNode;
          try {
            Xa(d, "");
          } catch (ee) {
            tt(e, e.return, ee);
          }
        }
        o & 4 && e.stateNode != null && (d = e.memoizedProps, ld(
          e,
          d,
          i !== null ? i.memoizedProps : d
        )), o & 1024 && (fd = !0);
        break;
      case 6:
        if (dn(n, e), fn(e), o & 4) {
          if (e.stateNode === null)
            throw Error(a(162));
          o = e.memoizedProps, i = e.stateNode;
          try {
            i.nodeValue = o;
          } catch (ee) {
            tt(e, e.return, ee);
          }
        }
        break;
      case 3:
        if (yu = null, d = Ln, Ln = gu(n.containerInfo), dn(n, e), Ln = d, fn(e), o & 4 && i !== null && i.memoizedState.isDehydrated)
          try {
            Ds(n.containerInfo);
          } catch (ee) {
            tt(e, e.return, ee);
          }
        fd && (fd = !1, rg(e));
        break;
      case 4:
        o = Ln, Ln = gu(
          e.stateNode.containerInfo
        ), dn(n, e), fn(e), Ln = o;
        break;
      case 12:
        dn(n, e), fn(e);
        break;
      case 13:
        dn(n, e), fn(e), e.child.flags & 8192 && e.memoizedState !== null != (i !== null && i.memoizedState !== null) && (_d = Fe()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, hd(e, o)));
        break;
      case 22:
        d = e.memoizedState !== null;
        var H = i !== null && i.memoizedState !== null, Q = gr, se = vt;
        if (gr = Q || d, vt = se || H, dn(n, e), vt = se, gr = Q, fn(e), o & 8192)
          e: for (n = e.stateNode, n._visibility = d ? n._visibility & -2 : n._visibility | 1, d && (i === null || H || gr || vt || ba(e)), i = null, n = e; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (i === null) {
                H = i = n;
                try {
                  if (b = H.stateNode, d)
                    N = b.style, typeof N.setProperty == "function" ? N.setProperty("display", "none", "important") : N.display = "none";
                  else {
                    z = H.stateNode;
                    var le = H.memoizedProps.style, W = le != null && le.hasOwnProperty("display") ? le.display : null;
                    z.style.display = W == null || typeof W == "boolean" ? "" : ("" + W).trim();
                  }
                } catch (ee) {
                  tt(H, H.return, ee);
                }
              }
            } else if (n.tag === 6) {
              if (i === null) {
                H = n;
                try {
                  H.stateNode.nodeValue = d ? "" : H.memoizedProps;
                } catch (ee) {
                  tt(H, H.return, ee);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === e) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === e) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === e) break e;
              i === n && (i = null), n = n.return;
            }
            i === n && (i = null), n.sibling.return = n.return, n = n.sibling;
          }
        o & 4 && (o = e.updateQueue, o !== null && (i = o.retryQueue, i !== null && (o.retryQueue = null, hd(e, i))));
        break;
      case 19:
        dn(n, e), fn(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, hd(e, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        dn(n, e), fn(e);
    }
  }
  function fn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var i, o = e.return; o !== null; ) {
          if (Fm(o)) {
            i = o;
            break;
          }
          o = o.return;
        }
        if (i == null) throw Error(a(160));
        switch (i.tag) {
          case 27:
            var d = i.stateNode, b = cd(e);
            ru(e, b, d);
            break;
          case 5:
            var N = i.stateNode;
            i.flags & 32 && (Xa(N, ""), i.flags &= -33);
            var z = cd(e);
            ru(e, z, N);
            break;
          case 3:
          case 4:
            var H = i.stateNode.containerInfo, Q = cd(e);
            dd(
              e,
              Q,
              H
            );
            break;
          default:
            throw Error(a(161));
        }
      } catch (se) {
        tt(e, e.return, se);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function rg(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        rg(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), e = e.sibling;
      }
  }
  function Pr(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Jm(e, n.alternate, n), n = n.sibling;
  }
  function ba(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          zr(4, n, n.return), ba(n);
          break;
        case 1:
          Qn(n, n.return);
          var i = n.stateNode;
          typeof i.componentWillUnmount == "function" && Ym(
            n,
            n.return,
            i
          ), ba(n);
          break;
        case 27:
          As(n.stateNode);
        case 26:
        case 5:
          Qn(n, n.return), ba(n);
          break;
        case 22:
          n.memoizedState === null && ba(n);
          break;
        case 30:
          ba(n);
          break;
        default:
          ba(n);
      }
      e = e.sibling;
    }
  }
  function Lr(e, n, i) {
    for (i = i && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var o = n.alternate, d = e, b = n, N = b.flags;
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          Lr(
            d,
            b,
            i
          ), gs(4, b);
          break;
        case 1:
          if (Lr(
            d,
            b,
            i
          ), o = b, d = o.stateNode, typeof d.componentDidMount == "function")
            try {
              d.componentDidMount();
            } catch (Q) {
              tt(o, o.return, Q);
            }
          if (o = b, d = o.updateQueue, d !== null) {
            var z = o.stateNode;
            try {
              var H = d.shared.hiddenCallbacks;
              if (H !== null)
                for (d.shared.hiddenCallbacks = null, d = 0; d < H.length; d++)
                  Rp(H[d], z);
            } catch (Q) {
              tt(o, o.return, Q);
            }
          }
          i && N & 64 && $m(b), vs(b, b.return);
          break;
        case 27:
          Qm(b);
        case 26:
        case 5:
          Lr(
            d,
            b,
            i
          ), i && o === null && N & 4 && Xm(b), vs(b, b.return);
          break;
        case 12:
          Lr(
            d,
            b,
            i
          );
          break;
        case 13:
          Lr(
            d,
            b,
            i
          ), i && N & 4 && tg(d, b);
          break;
        case 22:
          b.memoizedState === null && Lr(
            d,
            b,
            i
          ), vs(b, b.return);
          break;
        case 30:
          break;
        default:
          Lr(
            d,
            b,
            i
          );
      }
      n = n.sibling;
    }
  }
  function pd(e, n) {
    var i = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== i && (e != null && e.refCount++, i != null && ns(i));
  }
  function md(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && ns(e));
  }
  function Kn(e, n, i, o) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        ag(
          e,
          n,
          i,
          o
        ), n = n.sibling;
  }
  function ag(e, n, i, o) {
    var d = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Kn(
          e,
          n,
          i,
          o
        ), d & 2048 && gs(9, n);
        break;
      case 1:
        Kn(
          e,
          n,
          i,
          o
        );
        break;
      case 3:
        Kn(
          e,
          n,
          i,
          o
        ), d & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && ns(e)));
        break;
      case 12:
        if (d & 2048) {
          Kn(
            e,
            n,
            i,
            o
          ), e = n.stateNode;
          try {
            var b = n.memoizedProps, N = b.id, z = b.onPostCommit;
            typeof z == "function" && z(
              N,
              n.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (H) {
            tt(n, n.return, H);
          }
        } else
          Kn(
            e,
            n,
            i,
            o
          );
        break;
      case 13:
        Kn(
          e,
          n,
          i,
          o
        );
        break;
      case 23:
        break;
      case 22:
        b = n.stateNode, N = n.alternate, n.memoizedState !== null ? b._visibility & 2 ? Kn(
          e,
          n,
          i,
          o
        ) : ys(e, n) : b._visibility & 2 ? Kn(
          e,
          n,
          i,
          o
        ) : (b._visibility |= 2, hi(
          e,
          n,
          i,
          o,
          (n.subtreeFlags & 10256) !== 0
        )), d & 2048 && pd(N, n);
        break;
      case 24:
        Kn(
          e,
          n,
          i,
          o
        ), d & 2048 && md(n.alternate, n);
        break;
      default:
        Kn(
          e,
          n,
          i,
          o
        );
    }
  }
  function hi(e, n, i, o, d) {
    for (d = d && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var b = e, N = n, z = i, H = o, Q = N.flags;
      switch (N.tag) {
        case 0:
        case 11:
        case 15:
          hi(
            b,
            N,
            z,
            H,
            d
          ), gs(8, N);
          break;
        case 23:
          break;
        case 22:
          var se = N.stateNode;
          N.memoizedState !== null ? se._visibility & 2 ? hi(
            b,
            N,
            z,
            H,
            d
          ) : ys(
            b,
            N
          ) : (se._visibility |= 2, hi(
            b,
            N,
            z,
            H,
            d
          )), d && Q & 2048 && pd(
            N.alternate,
            N
          );
          break;
        case 24:
          hi(
            b,
            N,
            z,
            H,
            d
          ), d && Q & 2048 && md(N.alternate, N);
          break;
        default:
          hi(
            b,
            N,
            z,
            H,
            d
          );
      }
      n = n.sibling;
    }
  }
  function ys(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var i = e, o = n, d = o.flags;
        switch (o.tag) {
          case 22:
            ys(i, o), d & 2048 && pd(
              o.alternate,
              o
            );
            break;
          case 24:
            ys(i, o), d & 2048 && md(o.alternate, o);
            break;
          default:
            ys(i, o);
        }
        n = n.sibling;
      }
  }
  var _s = 8192;
  function pi(e) {
    if (e.subtreeFlags & _s)
      for (e = e.child; e !== null; )
        ig(e), e = e.sibling;
  }
  function ig(e) {
    switch (e.tag) {
      case 26:
        pi(e), e.flags & _s && e.memoizedState !== null && D1(
          Ln,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        pi(e);
        break;
      case 3:
      case 4:
        var n = Ln;
        Ln = gu(e.stateNode.containerInfo), pi(e), Ln = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = _s, _s = 16777216, pi(e), _s = n) : pi(e));
        break;
      default:
        pi(e);
    }
  }
  function sg(e) {
    var n = e.alternate;
    if (n !== null && (e = n.child, e !== null)) {
      n.child = null;
      do
        n = e.sibling, e.sibling = null, e = n;
      while (e !== null);
    }
  }
  function bs(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var o = n[i];
          Nt = o, ug(
            o,
            e
          );
        }
      sg(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        og(e), e = e.sibling;
  }
  function og(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        bs(e), e.flags & 2048 && zr(9, e, e.return);
        break;
      case 3:
        bs(e);
        break;
      case 12:
        bs(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, au(e)) : bs(e);
        break;
      default:
        bs(e);
    }
  }
  function au(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var o = n[i];
          Nt = o, ug(
            o,
            e
          );
        }
      sg(e);
    }
    for (e = e.child; e !== null; ) {
      switch (n = e, n.tag) {
        case 0:
        case 11:
        case 15:
          zr(8, n, n.return), au(n);
          break;
        case 22:
          i = n.stateNode, i._visibility & 2 && (i._visibility &= -3, au(n));
          break;
        default:
          au(n);
      }
      e = e.sibling;
    }
  }
  function ug(e, n) {
    for (; Nt !== null; ) {
      var i = Nt;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          zr(8, i, n);
          break;
        case 23:
        case 22:
          if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
            var o = i.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          ns(i.memoizedState.cache);
      }
      if (o = i.child, o !== null) o.return = i, Nt = o;
      else
        e: for (i = e; Nt !== null; ) {
          o = Nt;
          var d = o.sibling, b = o.return;
          if (Wm(o), o === i) {
            Nt = null;
            break e;
          }
          if (d !== null) {
            d.return = b, Nt = d;
            break e;
          }
          Nt = b;
        }
    }
  }
  var Qb = {
    getCacheForType: function(e) {
      var n = Ut(Et), i = n.data.get(e);
      return i === void 0 && (i = e(), n.data.set(e, i)), i;
    }
  }, Kb = typeof WeakMap == "function" ? WeakMap : Map, Ye = 0, nt = null, Ie = null, Ge = 0, Xe = 0, hn = null, Ir = !1, mi = !1, gd = !1, yr = 0, ht = 0, Br = 0, Sa = 0, vd = 0, On = 0, gi = 0, Ss = null, tn = null, yd = !1, _d = 0, iu = 1 / 0, su = null, Ur = null, Dt = 0, Hr = null, vi = null, yi = 0, bd = 0, Sd = null, lg = null, ws = 0, wd = null;
  function pn() {
    if ((Ye & 2) !== 0 && Ge !== 0)
      return Ge & -Ge;
    if (M.T !== null) {
      var e = ii;
      return e !== 0 ? e : Nd();
    }
    return kh();
  }
  function cg() {
    On === 0 && (On = (Ge & 536870912) === 0 || $e ? Ua() : 536870912);
    var e = Nn.current;
    return e !== null && (e.flags |= 32), On;
  }
  function mn(e, n, i) {
    (e === nt && (Xe === 2 || Xe === 9) || e.cancelPendingCommit !== null) && (_i(e, 0), qr(
      e,
      Ge,
      On,
      !1
    )), Ui(e, i), ((Ye & 2) === 0 || e !== nt) && (e === nt && ((Ye & 2) === 0 && (Sa |= i), ht === 4 && qr(
      e,
      Ge,
      On,
      !1
    )), Jn(e));
  }
  function dg(e, n, i) {
    if ((Ye & 6) !== 0) throw Error(a(327));
    var o = !i && (n & 124) === 0 && (n & e.expiredLanes) === 0 || Qt(e, n), d = o ? e1(e, n) : kd(e, n, !0), b = o;
    do {
      if (d === 0) {
        mi && !o && qr(e, n, 0, !1);
        break;
      } else {
        if (i = e.current.alternate, b && !Jb(i)) {
          d = kd(e, n, !1), b = !1;
          continue;
        }
        if (d === 2) {
          if (b = n, e.errorRecoveryDisabledLanes & b)
            var N = 0;
          else
            N = e.pendingLanes & -536870913, N = N !== 0 ? N : N & 536870912 ? 536870912 : 0;
          if (N !== 0) {
            n = N;
            e: {
              var z = e;
              d = Ss;
              var H = z.current.memoizedState.isDehydrated;
              if (H && (_i(z, N).flags |= 256), N = kd(
                z,
                N,
                !1
              ), N !== 2) {
                if (gd && !H) {
                  z.errorRecoveryDisabledLanes |= b, Sa |= b, d = 4;
                  break e;
                }
                b = tn, tn = d, b !== null && (tn === null ? tn = b : tn.push.apply(
                  tn,
                  b
                ));
              }
              d = N;
            }
            if (b = !1, d !== 2) continue;
          }
        }
        if (d === 1) {
          _i(e, 0), qr(e, n, 0, !0);
          break;
        }
        e: {
          switch (o = e, b = d, b) {
            case 0:
            case 1:
              throw Error(a(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              qr(
                o,
                n,
                On,
                !Ir
              );
              break e;
            case 2:
              tn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(a(329));
          }
          if ((n & 62914560) === n && (d = _d + 300 - Fe(), 10 < d)) {
            if (qr(
              o,
              n,
              On,
              !Ir
            ), Vt(o, 0, !0) !== 0) break e;
            o.timeoutHandle = Ug(
              fg.bind(
                null,
                o,
                i,
                tn,
                su,
                yd,
                n,
                On,
                Sa,
                gi,
                Ir,
                b,
                2,
                -0,
                0
              ),
              d
            );
            break e;
          }
          fg(
            o,
            i,
            tn,
            su,
            yd,
            n,
            On,
            Sa,
            gi,
            Ir,
            b,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Jn(e);
  }
  function fg(e, n, i, o, d, b, N, z, H, Q, se, le, W, ee) {
    if (e.timeoutHandle = -1, le = n.subtreeFlags, (le & 8192 || (le & 16785408) === 16785408) && (Ns = { stylesheets: null, count: 0, unsuspend: j1 }, ig(n), le = z1(), le !== null)) {
      e.cancelPendingCommit = le(
        _g.bind(
          null,
          e,
          n,
          b,
          i,
          o,
          d,
          N,
          z,
          H,
          se,
          1,
          W,
          ee
        )
      ), qr(e, b, N, !Q);
      return;
    }
    _g(
      e,
      n,
      b,
      i,
      o,
      d,
      N,
      z,
      H
    );
  }
  function Jb(e) {
    for (var n = e; ; ) {
      var i = n.tag;
      if ((i === 0 || i === 11 || i === 15) && n.flags & 16384 && (i = n.updateQueue, i !== null && (i = i.stores, i !== null)))
        for (var o = 0; o < i.length; o++) {
          var d = i[o], b = d.getSnapshot;
          d = d.value;
          try {
            if (!ln(b(), d)) return !1;
          } catch {
            return !1;
          }
        }
      if (i = n.child, n.subtreeFlags & 16384 && i !== null)
        i.return = n, n = i;
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function qr(e, n, i, o) {
    n &= ~vd, n &= ~Sa, e.suspendedLanes |= n, e.pingedLanes &= ~n, o && (e.warmLanes |= n), o = e.expirationTimes;
    for (var d = n; 0 < d; ) {
      var b = 31 - Gt(d), N = 1 << b;
      o[b] = -1, d &= ~N;
    }
    i !== 0 && Eh(e, i, n);
  }
  function ou() {
    return (Ye & 6) === 0 ? (Es(0), !1) : !0;
  }
  function Ed() {
    if (Ie !== null) {
      if (Xe === 0)
        var e = Ie.return;
      else
        e = Ie, cr = ma = null, Uc(e), di = null, hs = 0, e = Ie;
      for (; e !== null; )
        Vm(e.alternate, e), e = e.return;
      Ie = null;
    }
  }
  function _i(e, n) {
    var i = e.timeoutHandle;
    i !== -1 && (e.timeoutHandle = -1, g1(i)), i = e.cancelPendingCommit, i !== null && (e.cancelPendingCommit = null, i()), Ed(), nt = e, Ie = i = or(e.current, null), Ge = n, Xe = 0, hn = null, Ir = !1, mi = Qt(e, n), gd = !1, gi = On = vd = Sa = Br = ht = 0, tn = Ss = null, yd = !1, (n & 8) !== 0 && (n |= n & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= n; 0 < o; ) {
        var d = 31 - Gt(o), b = 1 << d;
        n |= e[d], o &= ~b;
      }
    return yr = n, No(), i;
  }
  function hg(e, n) {
    ze = null, M.H = Xo, n === as || n === Io ? (n = Op(), Xe = 3) : n === xp ? (n = Op(), Xe = 4) : Xe = n === Mm ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, hn = n, Ie === null && (ht = 1, Wo(
      e,
      kn(n, e.current)
    ));
  }
  function pg() {
    var e = M.H;
    return M.H = Xo, e === null ? Xo : e;
  }
  function mg() {
    var e = M.A;
    return M.A = Qb, e;
  }
  function Cd() {
    ht = 4, Ir || (Ge & 4194048) !== Ge && Nn.current !== null || (mi = !0), (Br & 134217727) === 0 && (Sa & 134217727) === 0 || nt === null || qr(
      nt,
      Ge,
      On,
      !1
    );
  }
  function kd(e, n, i) {
    var o = Ye;
    Ye |= 2;
    var d = pg(), b = mg();
    (nt !== e || Ge !== n) && (su = null, _i(e, n)), n = !1;
    var N = ht;
    e: do
      try {
        if (Xe !== 0 && Ie !== null) {
          var z = Ie, H = hn;
          switch (Xe) {
            case 8:
              Ed(), N = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Nn.current === null && (n = !0);
              var Q = Xe;
              if (Xe = 0, hn = null, bi(e, z, H, Q), i && mi) {
                N = 0;
                break e;
              }
              break;
            default:
              Q = Xe, Xe = 0, hn = null, bi(e, z, H, Q);
          }
        }
        Wb(), N = ht;
        break;
      } catch (se) {
        hg(e, se);
      }
    while (!0);
    return n && e.shellSuspendCounter++, cr = ma = null, Ye = o, M.H = d, M.A = b, Ie === null && (nt = null, Ge = 0, No()), N;
  }
  function Wb() {
    for (; Ie !== null; ) gg(Ie);
  }
  function e1(e, n) {
    var i = Ye;
    Ye |= 2;
    var o = pg(), d = mg();
    nt !== e || Ge !== n ? (su = null, iu = Fe() + 500, _i(e, n)) : mi = Qt(
      e,
      n
    );
    e: do
      try {
        if (Xe !== 0 && Ie !== null) {
          n = Ie;
          var b = hn;
          t: switch (Xe) {
            case 1:
              Xe = 0, hn = null, bi(e, n, b, 1);
              break;
            case 2:
            case 9:
              if (Tp(b)) {
                Xe = 0, hn = null, vg(n);
                break;
              }
              n = function() {
                Xe !== 2 && Xe !== 9 || nt !== e || (Xe = 7), Jn(e);
              }, b.then(n, n);
              break e;
            case 3:
              Xe = 7;
              break e;
            case 4:
              Xe = 5;
              break e;
            case 7:
              Tp(b) ? (Xe = 0, hn = null, vg(n)) : (Xe = 0, hn = null, bi(e, n, b, 7));
              break;
            case 5:
              var N = null;
              switch (Ie.tag) {
                case 26:
                  N = Ie.memoizedState;
                case 5:
                case 27:
                  var z = Ie;
                  if (!N || Jg(N)) {
                    Xe = 0, hn = null;
                    var H = z.sibling;
                    if (H !== null) Ie = H;
                    else {
                      var Q = z.return;
                      Q !== null ? (Ie = Q, uu(Q)) : Ie = null;
                    }
                    break t;
                  }
              }
              Xe = 0, hn = null, bi(e, n, b, 5);
              break;
            case 6:
              Xe = 0, hn = null, bi(e, n, b, 6);
              break;
            case 8:
              Ed(), ht = 6;
              break e;
            default:
              throw Error(a(462));
          }
        }
        t1();
        break;
      } catch (se) {
        hg(e, se);
      }
    while (!0);
    return cr = ma = null, M.H = o, M.A = d, Ye = i, Ie !== null ? 0 : (nt = null, Ge = 0, No(), ht);
  }
  function t1() {
    for (; Ie !== null && !Le(); )
      gg(Ie);
  }
  function gg(e) {
    var n = Zm(e.alternate, e, yr);
    e.memoizedProps = e.pendingProps, n === null ? uu(e) : Ie = n;
  }
  function vg(e) {
    var n = e, i = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Lm(
          i,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Ge
        );
        break;
      case 11:
        n = Lm(
          i,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Ge
        );
        break;
      case 5:
        Uc(n);
      default:
        Vm(i, n), n = Ie = yp(n, yr), n = Zm(i, n, yr);
    }
    e.memoizedProps = e.pendingProps, n === null ? uu(e) : Ie = n;
  }
  function bi(e, n, i, o) {
    cr = ma = null, Uc(n), di = null, hs = 0;
    var d = n.return;
    try {
      if (Gb(
        e,
        d,
        n,
        i,
        Ge
      )) {
        ht = 1, Wo(
          e,
          kn(i, e.current)
        ), Ie = null;
        return;
      }
    } catch (b) {
      if (d !== null) throw Ie = d, b;
      ht = 1, Wo(
        e,
        kn(i, e.current)
      ), Ie = null;
      return;
    }
    n.flags & 32768 ? ($e || o === 1 ? e = !0 : mi || (Ge & 536870912) !== 0 ? e = !1 : (Ir = e = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = Nn.current, o !== null && o.tag === 13 && (o.flags |= 16384))), yg(n, e)) : uu(n);
  }
  function uu(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        yg(
          n,
          Ir
        );
        return;
      }
      e = n.return;
      var i = $b(
        n.alternate,
        n,
        yr
      );
      if (i !== null) {
        Ie = i;
        return;
      }
      if (n = n.sibling, n !== null) {
        Ie = n;
        return;
      }
      Ie = n = e;
    } while (n !== null);
    ht === 0 && (ht = 5);
  }
  function yg(e, n) {
    do {
      var i = Yb(e.alternate, e);
      if (i !== null) {
        i.flags &= 32767, Ie = i;
        return;
      }
      if (i = e.return, i !== null && (i.flags |= 32768, i.subtreeFlags = 0, i.deletions = null), !n && (e = e.sibling, e !== null)) {
        Ie = e;
        return;
      }
      Ie = e = i;
    } while (e !== null);
    ht = 6, Ie = null;
  }
  function _g(e, n, i, o, d, b, N, z, H) {
    e.cancelPendingCommit = null;
    do
      lu();
    while (Dt !== 0);
    if ((Ye & 6) !== 0) throw Error(a(327));
    if (n !== null) {
      if (n === e.current) throw Error(a(177));
      if (b = n.lanes | n.childLanes, b |= mc, j0(
        e,
        i,
        b,
        N,
        z,
        H
      ), e === nt && (Ie = nt = null, Ge = 0), vi = n, Hr = e, yi = i, bd = b, Sd = d, lg = o, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, i1(_e, function() {
        return Cg(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), o = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || o) {
        o = M.T, M.T = null, d = B.p, B.p = 2, N = Ye, Ye |= 4;
        try {
          Xb(e, n, i);
        } finally {
          Ye = N, B.p = d, M.T = o;
        }
      }
      Dt = 1, bg(), Sg(), wg();
    }
  }
  function bg() {
    if (Dt === 1) {
      Dt = 0;
      var e = Hr, n = vi, i = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || i) {
        i = M.T, M.T = null;
        var o = B.p;
        B.p = 2;
        var d = Ye;
        Ye |= 4;
        try {
          ng(n, e);
          var b = Ld, N = up(e.containerInfo), z = b.focusedElem, H = b.selectionRange;
          if (N !== z && z && z.ownerDocument && op(
            z.ownerDocument.documentElement,
            z
          )) {
            if (H !== null && cc(z)) {
              var Q = H.start, se = H.end;
              if (se === void 0 && (se = Q), "selectionStart" in z)
                z.selectionStart = Q, z.selectionEnd = Math.min(
                  se,
                  z.value.length
                );
              else {
                var le = z.ownerDocument || document, W = le && le.defaultView || window;
                if (W.getSelection) {
                  var ee = W.getSelection(), Ae = z.textContent.length, Ce = Math.min(H.start, Ae), Je = H.end === void 0 ? Ce : Math.min(H.end, Ae);
                  !ee.extend && Ce > Je && (N = Je, Je = Ce, Ce = N);
                  var $ = sp(
                    z,
                    Ce
                  ), Z = sp(
                    z,
                    Je
                  );
                  if ($ && Z && (ee.rangeCount !== 1 || ee.anchorNode !== $.node || ee.anchorOffset !== $.offset || ee.focusNode !== Z.node || ee.focusOffset !== Z.offset)) {
                    var F = le.createRange();
                    F.setStart($.node, $.offset), ee.removeAllRanges(), Ce > Je ? (ee.addRange(F), ee.extend(Z.node, Z.offset)) : (F.setEnd(Z.node, Z.offset), ee.addRange(F));
                  }
                }
              }
            }
            for (le = [], ee = z; ee = ee.parentNode; )
              ee.nodeType === 1 && le.push({
                element: ee,
                left: ee.scrollLeft,
                top: ee.scrollTop
              });
            for (typeof z.focus == "function" && z.focus(), z = 0; z < le.length; z++) {
              var oe = le[z];
              oe.element.scrollLeft = oe.left, oe.element.scrollTop = oe.top;
            }
          }
          Su = !!Pd, Ld = Pd = null;
        } finally {
          Ye = d, B.p = o, M.T = i;
        }
      }
      e.current = n, Dt = 2;
    }
  }
  function Sg() {
    if (Dt === 2) {
      Dt = 0;
      var e = Hr, n = vi, i = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || i) {
        i = M.T, M.T = null;
        var o = B.p;
        B.p = 2;
        var d = Ye;
        Ye |= 4;
        try {
          Jm(e, n.alternate, n);
        } finally {
          Ye = d, B.p = o, M.T = i;
        }
      }
      Dt = 3;
    }
  }
  function wg() {
    if (Dt === 4 || Dt === 3) {
      Dt = 0, We();
      var e = Hr, n = vi, i = yi, o = lg;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? Dt = 5 : (Dt = 0, vi = Hr = null, Eg(e, e.pendingLanes));
      var d = e.pendingLanes;
      if (d === 0 && (Ur = null), Zl(i), n = n.stateNode, mt && typeof mt.onCommitFiberRoot == "function")
        try {
          mt.onCommitFiberRoot(
            zn,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (o !== null) {
        n = M.T, d = B.p, B.p = 2, M.T = null;
        try {
          for (var b = e.onRecoverableError, N = 0; N < o.length; N++) {
            var z = o[N];
            b(z.value, {
              componentStack: z.stack
            });
          }
        } finally {
          M.T = n, B.p = d;
        }
      }
      (yi & 3) !== 0 && lu(), Jn(e), d = e.pendingLanes, (i & 4194090) !== 0 && (d & 42) !== 0 ? e === wd ? ws++ : (ws = 0, wd = e) : ws = 0, Es(0);
    }
  }
  function Eg(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, ns(n)));
  }
  function lu(e) {
    return bg(), Sg(), wg(), Cg();
  }
  function Cg() {
    if (Dt !== 5) return !1;
    var e = Hr, n = bd;
    bd = 0;
    var i = Zl(yi), o = M.T, d = B.p;
    try {
      B.p = 32 > i ? 32 : i, M.T = null, i = Sd, Sd = null;
      var b = Hr, N = yi;
      if (Dt = 0, vi = Hr = null, yi = 0, (Ye & 6) !== 0) throw Error(a(331));
      var z = Ye;
      if (Ye |= 4, og(b.current), ag(
        b,
        b.current,
        N,
        i
      ), Ye = z, Es(0, !1), mt && typeof mt.onPostCommitFiberRoot == "function")
        try {
          mt.onPostCommitFiberRoot(zn, b);
        } catch {
        }
      return !0;
    } finally {
      B.p = d, M.T = o, Eg(e, n);
    }
  }
  function kg(e, n, i) {
    n = kn(i, n), n = ed(e.stateNode, n, 2), e = Mr(e, n, 2), e !== null && (Ui(e, 2), Jn(e));
  }
  function tt(e, n, i) {
    if (e.tag === 3)
      kg(e, e, i);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          kg(
            n,
            e,
            i
          );
          break;
        } else if (n.tag === 1) {
          var o = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ur === null || !Ur.has(o))) {
            e = kn(i, e), i = Nm(2), o = Mr(n, i, 2), o !== null && (Om(
              i,
              o,
              n,
              e
            ), Ui(o, 2), Jn(o));
            break;
          }
        }
        n = n.return;
      }
  }
  function Ad(e, n, i) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new Kb();
      var d = /* @__PURE__ */ new Set();
      o.set(n, d);
    } else
      d = o.get(n), d === void 0 && (d = /* @__PURE__ */ new Set(), o.set(n, d));
    d.has(i) || (gd = !0, d.add(i), e = n1.bind(null, e, n, i), n.then(e, e));
  }
  function n1(e, n, i) {
    var o = e.pingCache;
    o !== null && o.delete(n), e.pingedLanes |= e.suspendedLanes & i, e.warmLanes &= ~i, nt === e && (Ge & i) === i && (ht === 4 || ht === 3 && (Ge & 62914560) === Ge && 300 > Fe() - _d ? (Ye & 2) === 0 && _i(e, 0) : vd |= i, gi === Ge && (gi = 0)), Jn(e);
  }
  function Ag(e, n) {
    n === 0 && (n = wh()), e = ti(e, n), e !== null && (Ui(e, n), Jn(e));
  }
  function r1(e) {
    var n = e.memoizedState, i = 0;
    n !== null && (i = n.retryLane), Ag(e, i);
  }
  function a1(e, n) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode, d = e.memoizedState;
        d !== null && (i = d.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      case 22:
        o = e.stateNode._retryCache;
        break;
      default:
        throw Error(a(314));
    }
    o !== null && o.delete(n), Ag(e, i);
  }
  function i1(e, n) {
    return fe(e, n);
  }
  var cu = null, Si = null, xd = !1, du = !1, Td = !1, wa = 0;
  function Jn(e) {
    e !== Si && e.next === null && (Si === null ? cu = Si = e : Si = Si.next = e), du = !0, xd || (xd = !0, o1());
  }
  function Es(e, n) {
    if (!Td && du) {
      Td = !0;
      do
        for (var i = !1, o = cu; o !== null; ) {
          if (e !== 0) {
            var d = o.pendingLanes;
            if (d === 0) var b = 0;
            else {
              var N = o.suspendedLanes, z = o.pingedLanes;
              b = (1 << 31 - Gt(42 | e) + 1) - 1, b &= d & ~(N & ~z), b = b & 201326741 ? b & 201326741 | 1 : b ? b | 2 : 0;
            }
            b !== 0 && (i = !0, Og(o, b));
          } else
            b = Ge, b = Vt(
              o,
              o === nt ? b : 0,
              o.cancelPendingCommit !== null || o.timeoutHandle !== -1
            ), (b & 3) === 0 || Qt(o, b) || (i = !0, Og(o, b));
          o = o.next;
        }
      while (i);
      Td = !1;
    }
  }
  function s1() {
    xg();
  }
  function xg() {
    du = xd = !1;
    var e = 0;
    wa !== 0 && (m1() && (e = wa), wa = 0);
    for (var n = Fe(), i = null, o = cu; o !== null; ) {
      var d = o.next, b = Tg(o, n);
      b === 0 ? (o.next = null, i === null ? cu = d : i.next = d, d === null && (Si = i)) : (i = o, (e !== 0 || (b & 3) !== 0) && (du = !0)), o = d;
    }
    Es(e);
  }
  function Tg(e, n) {
    for (var i = e.suspendedLanes, o = e.pingedLanes, d = e.expirationTimes, b = e.pendingLanes & -62914561; 0 < b; ) {
      var N = 31 - Gt(b), z = 1 << N, H = d[N];
      H === -1 ? ((z & i) === 0 || (z & o) !== 0) && (d[N] = vo(z, n)) : H <= n && (e.expiredLanes |= z), b &= ~z;
    }
    if (n = nt, i = Ge, i = Vt(
      e,
      e === n ? i : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o = e.callbackNode, i === 0 || e === n && (Xe === 2 || Xe === 9) || e.cancelPendingCommit !== null)
      return o !== null && o !== null && we(o), e.callbackNode = null, e.callbackPriority = 0;
    if ((i & 3) === 0 || Qt(e, i)) {
      if (n = i & -i, n === e.callbackPriority) return n;
      switch (o !== null && we(o), Zl(i)) {
        case 2:
        case 8:
          i = ye;
          break;
        case 32:
          i = _e;
          break;
        case 268435456:
          i = Ze;
          break;
        default:
          i = _e;
      }
      return o = Ng.bind(null, e), i = fe(i, o), e.callbackPriority = n, e.callbackNode = i, n;
    }
    return o !== null && o !== null && we(o), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Ng(e, n) {
    if (Dt !== 0 && Dt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var i = e.callbackNode;
    if (lu() && e.callbackNode !== i)
      return null;
    var o = Ge;
    return o = Vt(
      e,
      e === nt ? o : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o === 0 ? null : (dg(e, o, n), Tg(e, Fe()), e.callbackNode != null && e.callbackNode === i ? Ng.bind(null, e) : null);
  }
  function Og(e, n) {
    if (lu()) return null;
    dg(e, n, !0);
  }
  function o1() {
    v1(function() {
      (Ye & 6) !== 0 ? fe(
        dt,
        s1
      ) : xg();
    });
  }
  function Nd() {
    return wa === 0 && (wa = Ua()), wa;
  }
  function Mg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : wo("" + e);
  }
  function Rg(e, n) {
    var i = n.ownerDocument.createElement("input");
    return i.name = n.name, i.value = n.value, e.id && i.setAttribute("form", e.id), n.parentNode.insertBefore(i, n), e = new FormData(e), i.parentNode.removeChild(i), e;
  }
  function u1(e, n, i, o, d) {
    if (n === "submit" && i && i.stateNode === d) {
      var b = Mg(
        (d[Kt] || null).action
      ), N = o.submitter;
      N && (n = (n = N[Kt] || null) ? Mg(n.formAction) : N.getAttribute("formAction"), n !== null && (b = n, N = null));
      var z = new Ao(
        "action",
        "action",
        null,
        o,
        d
      );
      e.push({
        event: z,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (o.defaultPrevented) {
                if (wa !== 0) {
                  var H = N ? Rg(d, N) : new FormData(d);
                  Fc(
                    i,
                    {
                      pending: !0,
                      data: H,
                      method: d.method,
                      action: b
                    },
                    null,
                    H
                  );
                }
              } else
                typeof b == "function" && (z.preventDefault(), H = N ? Rg(d, N) : new FormData(d), Fc(
                  i,
                  {
                    pending: !0,
                    data: H,
                    method: d.method,
                    action: b
                  },
                  b,
                  H
                ));
            },
            currentTarget: d
          }
        ]
      });
    }
  }
  for (var Od = 0; Od < pc.length; Od++) {
    var Md = pc[Od], l1 = Md.toLowerCase(), c1 = Md[0].toUpperCase() + Md.slice(1);
    Pn(
      l1,
      "on" + c1
    );
  }
  Pn(dp, "onAnimationEnd"), Pn(fp, "onAnimationIteration"), Pn(hp, "onAnimationStart"), Pn("dblclick", "onDoubleClick"), Pn("focusin", "onFocus"), Pn("focusout", "onBlur"), Pn(xb, "onTransitionRun"), Pn(Tb, "onTransitionStart"), Pn(Nb, "onTransitionCancel"), Pn(pp, "onTransitionEnd"), Va("onMouseEnter", ["mouseout", "mouseover"]), Va("onMouseLeave", ["mouseout", "mouseover"]), Va("onPointerEnter", ["pointerout", "pointerover"]), Va("onPointerLeave", ["pointerout", "pointerover"]), sa(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), sa(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), sa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), sa(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), sa(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), sa(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Cs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), d1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cs)
  );
  function jg(e, n) {
    n = (n & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var o = e[i], d = o.event;
      o = o.listeners;
      e: {
        var b = void 0;
        if (n)
          for (var N = o.length - 1; 0 <= N; N--) {
            var z = o[N], H = z.instance, Q = z.currentTarget;
            if (z = z.listener, H !== b && d.isPropagationStopped())
              break e;
            b = z, d.currentTarget = Q;
            try {
              b(d);
            } catch (se) {
              Jo(se);
            }
            d.currentTarget = null, b = H;
          }
        else
          for (N = 0; N < o.length; N++) {
            if (z = o[N], H = z.instance, Q = z.currentTarget, z = z.listener, H !== b && d.isPropagationStopped())
              break e;
            b = z, d.currentTarget = Q;
            try {
              b(d);
            } catch (se) {
              Jo(se);
            }
            d.currentTarget = null, b = H;
          }
      }
    }
  }
  function Be(e, n) {
    var i = n[Gl];
    i === void 0 && (i = n[Gl] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    i.has(o) || (Dg(n, e, 2, !1), i.add(o));
  }
  function Rd(e, n, i) {
    var o = 0;
    n && (o |= 4), Dg(
      i,
      e,
      o,
      n
    );
  }
  var fu = "_reactListening" + Math.random().toString(36).slice(2);
  function jd(e) {
    if (!e[fu]) {
      e[fu] = !0, xh.forEach(function(i) {
        i !== "selectionchange" && (d1.has(i) || Rd(i, !1, e), Rd(i, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[fu] || (n[fu] = !0, Rd("selectionchange", !1, n));
    }
  }
  function Dg(e, n, i, o) {
    switch (av(n)) {
      case 2:
        var d = I1;
        break;
      case 8:
        d = B1;
        break;
      default:
        d = Yd;
    }
    i = d.bind(
      null,
      n,
      i,
      e
    ), d = void 0, !tc || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (d = !0), o ? d !== void 0 ? e.addEventListener(n, i, {
      capture: !0,
      passive: d
    }) : e.addEventListener(n, i, !0) : d !== void 0 ? e.addEventListener(n, i, {
      passive: d
    }) : e.addEventListener(n, i, !1);
  }
  function Dd(e, n, i, o, d) {
    var b = o;
    if ((n & 1) === 0 && (n & 2) === 0 && o !== null)
      e: for (; ; ) {
        if (o === null) return;
        var N = o.tag;
        if (N === 3 || N === 4) {
          var z = o.stateNode.containerInfo;
          if (z === d) break;
          if (N === 4)
            for (N = o.return; N !== null; ) {
              var H = N.tag;
              if ((H === 3 || H === 4) && N.stateNode.containerInfo === d)
                return;
              N = N.return;
            }
          for (; z !== null; ) {
            if (N = qa(z), N === null) return;
            if (H = N.tag, H === 5 || H === 6 || H === 26 || H === 27) {
              o = b = N;
              continue e;
            }
            z = z.parentNode;
          }
        }
        o = o.return;
      }
    Hh(function() {
      var Q = b, se = Wl(i), le = [];
      e: {
        var W = mp.get(e);
        if (W !== void 0) {
          var ee = Ao, Ae = e;
          switch (e) {
            case "keypress":
              if (Co(i) === 0) break e;
            case "keydown":
            case "keyup":
              ee = ib;
              break;
            case "focusin":
              Ae = "focus", ee = ic;
              break;
            case "focusout":
              Ae = "blur", ee = ic;
              break;
            case "beforeblur":
            case "afterblur":
              ee = ic;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ee = Gh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ee = Y0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ee = ub;
              break;
            case dp:
            case fp:
            case hp:
              ee = Q0;
              break;
            case pp:
              ee = cb;
              break;
            case "scroll":
            case "scrollend":
              ee = V0;
              break;
            case "wheel":
              ee = fb;
              break;
            case "copy":
            case "cut":
            case "paste":
              ee = J0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ee = $h;
              break;
            case "toggle":
            case "beforetoggle":
              ee = pb;
          }
          var Ce = (n & 4) !== 0, Je = !Ce && (e === "scroll" || e === "scrollend"), $ = Ce ? W !== null ? W + "Capture" : null : W;
          Ce = [];
          for (var Z = Q, F; Z !== null; ) {
            var oe = Z;
            if (F = oe.stateNode, oe = oe.tag, oe !== 5 && oe !== 26 && oe !== 27 || F === null || $ === null || (oe = Zi(Z, $), oe != null && Ce.push(
              ks(Z, oe, F)
            )), Je) break;
            Z = Z.return;
          }
          0 < Ce.length && (W = new ee(
            W,
            Ae,
            null,
            i,
            se
          ), le.push({ event: W, listeners: Ce }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (W = e === "mouseover" || e === "pointerover", ee = e === "mouseout" || e === "pointerout", W && i !== Jl && (Ae = i.relatedTarget || i.fromElement) && (qa(Ae) || Ae[Ha]))
            break e;
          if ((ee || W) && (W = se.window === se ? se : (W = se.ownerDocument) ? W.defaultView || W.parentWindow : window, ee ? (Ae = i.relatedTarget || i.toElement, ee = Q, Ae = Ae ? qa(Ae) : null, Ae !== null && (Je = c(Ae), Ce = Ae.tag, Ae !== Je || Ce !== 5 && Ce !== 27 && Ce !== 6) && (Ae = null)) : (ee = null, Ae = Q), ee !== Ae)) {
            if (Ce = Gh, oe = "onMouseLeave", $ = "onMouseEnter", Z = "mouse", (e === "pointerout" || e === "pointerover") && (Ce = $h, oe = "onPointerLeave", $ = "onPointerEnter", Z = "pointer"), Je = ee == null ? W : qi(ee), F = Ae == null ? W : qi(Ae), W = new Ce(
              oe,
              Z + "leave",
              ee,
              i,
              se
            ), W.target = Je, W.relatedTarget = F, oe = null, qa(se) === Q && (Ce = new Ce(
              $,
              Z + "enter",
              Ae,
              i,
              se
            ), Ce.target = F, Ce.relatedTarget = Je, oe = Ce), Je = oe, ee && Ae)
              t: {
                for (Ce = ee, $ = Ae, Z = 0, F = Ce; F; F = wi(F))
                  Z++;
                for (F = 0, oe = $; oe; oe = wi(oe))
                  F++;
                for (; 0 < Z - F; )
                  Ce = wi(Ce), Z--;
                for (; 0 < F - Z; )
                  $ = wi($), F--;
                for (; Z--; ) {
                  if (Ce === $ || $ !== null && Ce === $.alternate)
                    break t;
                  Ce = wi(Ce), $ = wi($);
                }
                Ce = null;
              }
            else Ce = null;
            ee !== null && zg(
              le,
              W,
              ee,
              Ce,
              !1
            ), Ae !== null && Je !== null && zg(
              le,
              Je,
              Ae,
              Ce,
              !0
            );
          }
        }
        e: {
          if (W = Q ? qi(Q) : window, ee = W.nodeName && W.nodeName.toLowerCase(), ee === "select" || ee === "input" && W.type === "file")
            var ve = ep;
          else if (Jh(W))
            if (tp)
              ve = Cb;
            else {
              ve = wb;
              var Pe = Sb;
            }
          else
            ee = W.nodeName, !ee || ee.toLowerCase() !== "input" || W.type !== "checkbox" && W.type !== "radio" ? Q && Kl(Q.elementType) && (ve = ep) : ve = Eb;
          if (ve && (ve = ve(e, Q))) {
            Wh(
              le,
              ve,
              i,
              se
            );
            break e;
          }
          Pe && Pe(e, W, Q), e === "focusout" && Q && W.type === "number" && Q.memoizedProps.value != null && Ql(W, "number", W.value);
        }
        switch (Pe = Q ? qi(Q) : window, e) {
          case "focusin":
            (Jh(Pe) || Pe.contentEditable === "true") && (Ja = Pe, dc = Q, Ki = null);
            break;
          case "focusout":
            Ki = dc = Ja = null;
            break;
          case "mousedown":
            fc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            fc = !1, lp(le, i, se);
            break;
          case "selectionchange":
            if (Ab) break;
          case "keydown":
          case "keyup":
            lp(le, i, se);
        }
        var be;
        if (oc)
          e: {
            switch (e) {
              case "compositionstart":
                var ke = "onCompositionStart";
                break e;
              case "compositionend":
                ke = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ke = "onCompositionUpdate";
                break e;
            }
            ke = void 0;
          }
        else
          Ka ? Qh(e, i) && (ke = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (ke = "onCompositionStart");
        ke && (Yh && i.locale !== "ko" && (Ka || ke !== "onCompositionStart" ? ke === "onCompositionEnd" && Ka && (be = qh()) : (xr = se, nc = "value" in xr ? xr.value : xr.textContent, Ka = !0)), Pe = hu(Q, ke), 0 < Pe.length && (ke = new Vh(
          ke,
          e,
          null,
          i,
          se
        ), le.push({ event: ke, listeners: Pe }), be ? ke.data = be : (be = Kh(i), be !== null && (ke.data = be)))), (be = gb ? vb(e, i) : yb(e, i)) && (ke = hu(Q, "onBeforeInput"), 0 < ke.length && (Pe = new Vh(
          "onBeforeInput",
          "beforeinput",
          null,
          i,
          se
        ), le.push({
          event: Pe,
          listeners: ke
        }), Pe.data = be)), u1(
          le,
          e,
          Q,
          i,
          se
        );
      }
      jg(le, n);
    });
  }
  function ks(e, n, i) {
    return {
      instance: e,
      listener: n,
      currentTarget: i
    };
  }
  function hu(e, n) {
    for (var i = n + "Capture", o = []; e !== null; ) {
      var d = e, b = d.stateNode;
      if (d = d.tag, d !== 5 && d !== 26 && d !== 27 || b === null || (d = Zi(e, i), d != null && o.unshift(
        ks(e, d, b)
      ), d = Zi(e, n), d != null && o.push(
        ks(e, d, b)
      )), e.tag === 3) return o;
      e = e.return;
    }
    return [];
  }
  function wi(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function zg(e, n, i, o, d) {
    for (var b = n._reactName, N = []; i !== null && i !== o; ) {
      var z = i, H = z.alternate, Q = z.stateNode;
      if (z = z.tag, H !== null && H === o) break;
      z !== 5 && z !== 26 && z !== 27 || Q === null || (H = Q, d ? (Q = Zi(i, b), Q != null && N.unshift(
        ks(i, Q, H)
      )) : d || (Q = Zi(i, b), Q != null && N.push(
        ks(i, Q, H)
      ))), i = i.return;
    }
    N.length !== 0 && e.push({ event: n, listeners: N });
  }
  var f1 = /\r\n?/g, h1 = /\u0000|\uFFFD/g;
  function Pg(e) {
    return (typeof e == "string" ? e : "" + e).replace(f1, `
`).replace(h1, "");
  }
  function Lg(e, n) {
    return n = Pg(n), Pg(e) === n;
  }
  function pu() {
  }
  function Ke(e, n, i, o, d, b) {
    switch (i) {
      case "children":
        typeof o == "string" ? n === "body" || n === "textarea" && o === "" || Xa(e, o) : (typeof o == "number" || typeof o == "bigint") && n !== "body" && Xa(e, "" + o);
        break;
      case "className":
        _o(e, "class", o);
        break;
      case "tabIndex":
        _o(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        _o(e, i, o);
        break;
      case "style":
        Bh(e, o, b);
        break;
      case "data":
        if (n !== "object") {
          _o(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (n !== "a" || i !== "href")) {
          e.removeAttribute(i);
          break;
        }
        if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(i);
          break;
        }
        o = wo("" + o), e.setAttribute(i, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          e.setAttribute(
            i,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof b == "function" && (i === "formAction" ? (n !== "input" && Ke(e, n, "name", d.name, d, null), Ke(
            e,
            n,
            "formEncType",
            d.formEncType,
            d,
            null
          ), Ke(
            e,
            n,
            "formMethod",
            d.formMethod,
            d,
            null
          ), Ke(
            e,
            n,
            "formTarget",
            d.formTarget,
            d,
            null
          )) : (Ke(e, n, "encType", d.encType, d, null), Ke(e, n, "method", d.method, d, null), Ke(e, n, "target", d.target, d, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(i);
          break;
        }
        o = wo("" + o), e.setAttribute(i, o);
        break;
      case "onClick":
        o != null && (e.onclick = pu);
        break;
      case "onScroll":
        o != null && Be("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Be("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(a(61));
          if (i = o.__html, i != null) {
            if (d.children != null) throw Error(a(60));
            e.innerHTML = i;
          }
        }
        break;
      case "multiple":
        e.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        e.muted = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (o == null || typeof o == "function" || typeof o == "boolean" || typeof o == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        i = wo("" + o), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          i
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(i, "" + o) : e.removeAttribute(i);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        o && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(i, "") : e.removeAttribute(i);
        break;
      case "capture":
      case "download":
        o === !0 ? e.setAttribute(i, "") : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(i, o) : e.removeAttribute(i);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? e.setAttribute(i, o) : e.removeAttribute(i);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? e.removeAttribute(i) : e.setAttribute(i, o);
        break;
      case "popover":
        Be("beforetoggle", e), Be("toggle", e), yo(e, "popover", o);
        break;
      case "xlinkActuate":
        ir(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          o
        );
        break;
      case "xlinkArcrole":
        ir(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          o
        );
        break;
      case "xlinkRole":
        ir(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          o
        );
        break;
      case "xlinkShow":
        ir(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          o
        );
        break;
      case "xlinkTitle":
        ir(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          o
        );
        break;
      case "xlinkType":
        ir(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          o
        );
        break;
      case "xmlBase":
        ir(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          o
        );
        break;
      case "xmlLang":
        ir(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          o
        );
        break;
      case "xmlSpace":
        ir(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          o
        );
        break;
      case "is":
        yo(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (i = Z0.get(i) || i, yo(e, i, o));
    }
  }
  function zd(e, n, i, o, d, b) {
    switch (i) {
      case "style":
        Bh(e, o, b);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(a(61));
          if (i = o.__html, i != null) {
            if (d.children != null) throw Error(a(60));
            e.innerHTML = i;
          }
        }
        break;
      case "children":
        typeof o == "string" ? Xa(e, o) : (typeof o == "number" || typeof o == "bigint") && Xa(e, "" + o);
        break;
      case "onScroll":
        o != null && Be("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Be("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = pu);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Th.hasOwnProperty(i))
          e: {
            if (i[0] === "o" && i[1] === "n" && (d = i.endsWith("Capture"), n = i.slice(2, d ? i.length - 7 : void 0), b = e[Kt] || null, b = b != null ? b[i] : null, typeof b == "function" && e.removeEventListener(n, b, d), typeof o == "function")) {
              typeof b != "function" && b !== null && (i in e ? e[i] = null : e.hasAttribute(i) && e.removeAttribute(i)), e.addEventListener(n, o, d);
              break e;
            }
            i in e ? e[i] = o : o === !0 ? e.setAttribute(i, "") : yo(e, i, o);
          }
    }
  }
  function zt(e, n, i) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Be("error", e), Be("load", e);
        var o = !1, d = !1, b;
        for (b in i)
          if (i.hasOwnProperty(b)) {
            var N = i[b];
            if (N != null)
              switch (b) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  d = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(a(137, n));
                default:
                  Ke(e, n, b, N, i, null);
              }
          }
        d && Ke(e, n, "srcSet", i.srcSet, i, null), o && Ke(e, n, "src", i.src, i, null);
        return;
      case "input":
        Be("invalid", e);
        var z = b = N = d = null, H = null, Q = null;
        for (o in i)
          if (i.hasOwnProperty(o)) {
            var se = i[o];
            if (se != null)
              switch (o) {
                case "name":
                  d = se;
                  break;
                case "type":
                  N = se;
                  break;
                case "checked":
                  H = se;
                  break;
                case "defaultChecked":
                  Q = se;
                  break;
                case "value":
                  b = se;
                  break;
                case "defaultValue":
                  z = se;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (se != null)
                    throw Error(a(137, n));
                  break;
                default:
                  Ke(e, n, o, se, i, null);
              }
          }
        zh(
          e,
          b,
          z,
          H,
          Q,
          N,
          d,
          !1
        ), bo(e);
        return;
      case "select":
        Be("invalid", e), o = N = b = null;
        for (d in i)
          if (i.hasOwnProperty(d) && (z = i[d], z != null))
            switch (d) {
              case "value":
                b = z;
                break;
              case "defaultValue":
                N = z;
                break;
              case "multiple":
                o = z;
              default:
                Ke(e, n, d, z, i, null);
            }
        n = b, i = N, e.multiple = !!o, n != null ? Ya(e, !!o, n, !1) : i != null && Ya(e, !!o, i, !0);
        return;
      case "textarea":
        Be("invalid", e), b = d = o = null;
        for (N in i)
          if (i.hasOwnProperty(N) && (z = i[N], z != null))
            switch (N) {
              case "value":
                o = z;
                break;
              case "defaultValue":
                d = z;
                break;
              case "children":
                b = z;
                break;
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(a(91));
                break;
              default:
                Ke(e, n, N, z, i, null);
            }
        Lh(e, o, d, b), bo(e);
        return;
      case "option":
        for (H in i)
          if (i.hasOwnProperty(H) && (o = i[H], o != null))
            switch (H) {
              case "selected":
                e.selected = o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                Ke(e, n, H, o, i, null);
            }
        return;
      case "dialog":
        Be("beforetoggle", e), Be("toggle", e), Be("cancel", e), Be("close", e);
        break;
      case "iframe":
      case "object":
        Be("load", e);
        break;
      case "video":
      case "audio":
        for (o = 0; o < Cs.length; o++)
          Be(Cs[o], e);
        break;
      case "image":
        Be("error", e), Be("load", e);
        break;
      case "details":
        Be("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Be("error", e), Be("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (Q in i)
          if (i.hasOwnProperty(Q) && (o = i[Q], o != null))
            switch (Q) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(a(137, n));
              default:
                Ke(e, n, Q, o, i, null);
            }
        return;
      default:
        if (Kl(n)) {
          for (se in i)
            i.hasOwnProperty(se) && (o = i[se], o !== void 0 && zd(
              e,
              n,
              se,
              o,
              i,
              void 0
            ));
          return;
        }
    }
    for (z in i)
      i.hasOwnProperty(z) && (o = i[z], o != null && Ke(e, n, z, o, i, null));
  }
  function p1(e, n, i, o) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var d = null, b = null, N = null, z = null, H = null, Q = null, se = null;
        for (ee in i) {
          var le = i[ee];
          if (i.hasOwnProperty(ee) && le != null)
            switch (ee) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                H = le;
              default:
                o.hasOwnProperty(ee) || Ke(e, n, ee, null, o, le);
            }
        }
        for (var W in o) {
          var ee = o[W];
          if (le = i[W], o.hasOwnProperty(W) && (ee != null || le != null))
            switch (W) {
              case "type":
                b = ee;
                break;
              case "name":
                d = ee;
                break;
              case "checked":
                Q = ee;
                break;
              case "defaultChecked":
                se = ee;
                break;
              case "value":
                N = ee;
                break;
              case "defaultValue":
                z = ee;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (ee != null)
                  throw Error(a(137, n));
                break;
              default:
                ee !== le && Ke(
                  e,
                  n,
                  W,
                  ee,
                  o,
                  le
                );
            }
        }
        Fl(
          e,
          N,
          z,
          H,
          Q,
          se,
          b,
          d
        );
        return;
      case "select":
        ee = N = z = W = null;
        for (b in i)
          if (H = i[b], i.hasOwnProperty(b) && H != null)
            switch (b) {
              case "value":
                break;
              case "multiple":
                ee = H;
              default:
                o.hasOwnProperty(b) || Ke(
                  e,
                  n,
                  b,
                  null,
                  o,
                  H
                );
            }
        for (d in o)
          if (b = o[d], H = i[d], o.hasOwnProperty(d) && (b != null || H != null))
            switch (d) {
              case "value":
                W = b;
                break;
              case "defaultValue":
                z = b;
                break;
              case "multiple":
                N = b;
              default:
                b !== H && Ke(
                  e,
                  n,
                  d,
                  b,
                  o,
                  H
                );
            }
        n = z, i = N, o = ee, W != null ? Ya(e, !!i, W, !1) : !!o != !!i && (n != null ? Ya(e, !!i, n, !0) : Ya(e, !!i, i ? [] : "", !1));
        return;
      case "textarea":
        ee = W = null;
        for (z in i)
          if (d = i[z], i.hasOwnProperty(z) && d != null && !o.hasOwnProperty(z))
            switch (z) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ke(e, n, z, null, o, d);
            }
        for (N in o)
          if (d = o[N], b = i[N], o.hasOwnProperty(N) && (d != null || b != null))
            switch (N) {
              case "value":
                W = d;
                break;
              case "defaultValue":
                ee = d;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(a(91));
                break;
              default:
                d !== b && Ke(e, n, N, d, o, b);
            }
        Ph(e, W, ee);
        return;
      case "option":
        for (var Ae in i)
          if (W = i[Ae], i.hasOwnProperty(Ae) && W != null && !o.hasOwnProperty(Ae))
            switch (Ae) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ke(
                  e,
                  n,
                  Ae,
                  null,
                  o,
                  W
                );
            }
        for (H in o)
          if (W = o[H], ee = i[H], o.hasOwnProperty(H) && W !== ee && (W != null || ee != null))
            switch (H) {
              case "selected":
                e.selected = W && typeof W != "function" && typeof W != "symbol";
                break;
              default:
                Ke(
                  e,
                  n,
                  H,
                  W,
                  o,
                  ee
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Ce in i)
          W = i[Ce], i.hasOwnProperty(Ce) && W != null && !o.hasOwnProperty(Ce) && Ke(e, n, Ce, null, o, W);
        for (Q in o)
          if (W = o[Q], ee = i[Q], o.hasOwnProperty(Q) && W !== ee && (W != null || ee != null))
            switch (Q) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (W != null)
                  throw Error(a(137, n));
                break;
              default:
                Ke(
                  e,
                  n,
                  Q,
                  W,
                  o,
                  ee
                );
            }
        return;
      default:
        if (Kl(n)) {
          for (var Je in i)
            W = i[Je], i.hasOwnProperty(Je) && W !== void 0 && !o.hasOwnProperty(Je) && zd(
              e,
              n,
              Je,
              void 0,
              o,
              W
            );
          for (se in o)
            W = o[se], ee = i[se], !o.hasOwnProperty(se) || W === ee || W === void 0 && ee === void 0 || zd(
              e,
              n,
              se,
              W,
              o,
              ee
            );
          return;
        }
    }
    for (var $ in i)
      W = i[$], i.hasOwnProperty($) && W != null && !o.hasOwnProperty($) && Ke(e, n, $, null, o, W);
    for (le in o)
      W = o[le], ee = i[le], !o.hasOwnProperty(le) || W === ee || W == null && ee == null || Ke(e, n, le, W, o, ee);
  }
  var Pd = null, Ld = null;
  function mu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Ig(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Bg(e, n) {
    if (e === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && n === "foreignObject" ? 0 : e;
  }
  function Id(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Bd = null;
  function m1() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Bd ? !1 : (Bd = e, !0) : (Bd = null, !1);
  }
  var Ug = typeof setTimeout == "function" ? setTimeout : void 0, g1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Hg = typeof Promise == "function" ? Promise : void 0, v1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Hg < "u" ? function(e) {
    return Hg.resolve(null).then(e).catch(y1);
  } : Ug;
  function y1(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Zr(e) {
    return e === "head";
  }
  function qg(e, n) {
    var i = n, o = 0, d = 0;
    do {
      var b = i.nextSibling;
      if (e.removeChild(i), b && b.nodeType === 8)
        if (i = b.data, i === "/$") {
          if (0 < o && 8 > o) {
            i = o;
            var N = e.ownerDocument;
            if (i & 1 && As(N.documentElement), i & 2 && As(N.body), i & 4)
              for (i = N.head, As(i), N = i.firstChild; N; ) {
                var z = N.nextSibling, H = N.nodeName;
                N[Hi] || H === "SCRIPT" || H === "STYLE" || H === "LINK" && N.rel.toLowerCase() === "stylesheet" || i.removeChild(N), N = z;
              }
          }
          if (d === 0) {
            e.removeChild(b), Ds(n);
            return;
          }
          d--;
        } else
          i === "$" || i === "$?" || i === "$!" ? d++ : o = i.charCodeAt(0) - 48;
      else o = 0;
      i = b;
    } while (i);
    Ds(n);
  }
  function Ud(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var i = n;
      switch (n = n.nextSibling, i.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ud(i), Vl(i);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (i.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(i);
    }
  }
  function _1(e, n, i, o) {
    for (; e.nodeType === 1; ) {
      var d = i;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (o) {
        if (!e[Hi])
          switch (n) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (b = e.getAttribute("rel"), b === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (b !== d.rel || e.getAttribute("href") !== (d.href == null || d.href === "" ? null : d.href) || e.getAttribute("crossorigin") !== (d.crossOrigin == null ? null : d.crossOrigin) || e.getAttribute("title") !== (d.title == null ? null : d.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (b = e.getAttribute("src"), (b !== (d.src == null ? null : d.src) || e.getAttribute("type") !== (d.type == null ? null : d.type) || e.getAttribute("crossorigin") !== (d.crossOrigin == null ? null : d.crossOrigin)) && b && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (n === "input" && e.type === "hidden") {
        var b = d.name == null ? null : "" + d.name;
        if (d.type === "hidden" && e.getAttribute("name") === b)
          return e;
      } else return e;
      if (e = In(e.nextSibling), e === null) break;
    }
    return null;
  }
  function b1(e, n, i) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !i || (e = In(e.nextSibling), e === null)) return null;
    return e;
  }
  function Hd(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function S1(e, n) {
    var i = e.ownerDocument;
    if (e.data !== "$?" || i.readyState === "complete")
      n();
    else {
      var o = function() {
        n(), i.removeEventListener("DOMContentLoaded", o);
      };
      i.addEventListener("DOMContentLoaded", o), e._reactRetry = o;
    }
  }
  function In(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
          break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  var qd = null;
  function Zg(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (n === 0) return e;
          n--;
        } else i === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Gg(e, n, i) {
    switch (n = mu(i), e) {
      case "html":
        if (e = n.documentElement, !e) throw Error(a(452));
        return e;
      case "head":
        if (e = n.head, !e) throw Error(a(453));
        return e;
      case "body":
        if (e = n.body, !e) throw Error(a(454));
        return e;
      default:
        throw Error(a(451));
    }
  }
  function As(e) {
    for (var n = e.attributes; n.length; )
      e.removeAttributeNode(n[0]);
    Vl(e);
  }
  var Mn = /* @__PURE__ */ new Map(), Vg = /* @__PURE__ */ new Set();
  function gu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var _r = B.d;
  B.d = {
    f: w1,
    r: E1,
    D: C1,
    C: k1,
    L: A1,
    m: x1,
    X: N1,
    S: T1,
    M: O1
  };
  function w1() {
    var e = _r.f(), n = ou();
    return e || n;
  }
  function E1(e) {
    var n = Za(e);
    n !== null && n.tag === 5 && n.type === "form" ? dm(n) : _r.r(e);
  }
  var Ei = typeof document > "u" ? null : document;
  function $g(e, n, i) {
    var o = Ei;
    if (o && typeof n == "string" && n) {
      var d = Cn(n);
      d = 'link[rel="' + e + '"][href="' + d + '"]', typeof i == "string" && (d += '[crossorigin="' + i + '"]'), Vg.has(d) || (Vg.add(d), e = { rel: e, crossOrigin: i, href: n }, o.querySelector(d) === null && (n = o.createElement("link"), zt(n, "link", e), xt(n), o.head.appendChild(n)));
    }
  }
  function C1(e) {
    _r.D(e), $g("dns-prefetch", e, null);
  }
  function k1(e, n) {
    _r.C(e, n), $g("preconnect", e, n);
  }
  function A1(e, n, i) {
    _r.L(e, n, i);
    var o = Ei;
    if (o && e && n) {
      var d = 'link[rel="preload"][as="' + Cn(n) + '"]';
      n === "image" && i && i.imageSrcSet ? (d += '[imagesrcset="' + Cn(
        i.imageSrcSet
      ) + '"]', typeof i.imageSizes == "string" && (d += '[imagesizes="' + Cn(
        i.imageSizes
      ) + '"]')) : d += '[href="' + Cn(e) + '"]';
      var b = d;
      switch (n) {
        case "style":
          b = Ci(e);
          break;
        case "script":
          b = ki(e);
      }
      Mn.has(b) || (e = g(
        {
          rel: "preload",
          href: n === "image" && i && i.imageSrcSet ? void 0 : e,
          as: n
        },
        i
      ), Mn.set(b, e), o.querySelector(d) !== null || n === "style" && o.querySelector(xs(b)) || n === "script" && o.querySelector(Ts(b)) || (n = o.createElement("link"), zt(n, "link", e), xt(n), o.head.appendChild(n)));
    }
  }
  function x1(e, n) {
    _r.m(e, n);
    var i = Ei;
    if (i && e) {
      var o = n && typeof n.as == "string" ? n.as : "script", d = 'link[rel="modulepreload"][as="' + Cn(o) + '"][href="' + Cn(e) + '"]', b = d;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          b = ki(e);
      }
      if (!Mn.has(b) && (e = g({ rel: "modulepreload", href: e }, n), Mn.set(b, e), i.querySelector(d) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (i.querySelector(Ts(b)))
              return;
        }
        o = i.createElement("link"), zt(o, "link", e), xt(o), i.head.appendChild(o);
      }
    }
  }
  function T1(e, n, i) {
    _r.S(e, n, i);
    var o = Ei;
    if (o && e) {
      var d = Ga(o).hoistableStyles, b = Ci(e);
      n = n || "default";
      var N = d.get(b);
      if (!N) {
        var z = { loading: 0, preload: null };
        if (N = o.querySelector(
          xs(b)
        ))
          z.loading = 5;
        else {
          e = g(
            { rel: "stylesheet", href: e, "data-precedence": n },
            i
          ), (i = Mn.get(b)) && Zd(e, i);
          var H = N = o.createElement("link");
          xt(H), zt(H, "link", e), H._p = new Promise(function(Q, se) {
            H.onload = Q, H.onerror = se;
          }), H.addEventListener("load", function() {
            z.loading |= 1;
          }), H.addEventListener("error", function() {
            z.loading |= 2;
          }), z.loading |= 4, vu(N, n, o);
        }
        N = {
          type: "stylesheet",
          instance: N,
          count: 1,
          state: z
        }, d.set(b, N);
      }
    }
  }
  function N1(e, n) {
    _r.X(e, n);
    var i = Ei;
    if (i && e) {
      var o = Ga(i).hoistableScripts, d = ki(e), b = o.get(d);
      b || (b = i.querySelector(Ts(d)), b || (e = g({ src: e, async: !0 }, n), (n = Mn.get(d)) && Gd(e, n), b = i.createElement("script"), xt(b), zt(b, "link", e), i.head.appendChild(b)), b = {
        type: "script",
        instance: b,
        count: 1,
        state: null
      }, o.set(d, b));
    }
  }
  function O1(e, n) {
    _r.M(e, n);
    var i = Ei;
    if (i && e) {
      var o = Ga(i).hoistableScripts, d = ki(e), b = o.get(d);
      b || (b = i.querySelector(Ts(d)), b || (e = g({ src: e, async: !0, type: "module" }, n), (n = Mn.get(d)) && Gd(e, n), b = i.createElement("script"), xt(b), zt(b, "link", e), i.head.appendChild(b)), b = {
        type: "script",
        instance: b,
        count: 1,
        state: null
      }, o.set(d, b));
    }
  }
  function Yg(e, n, i, o) {
    var d = (d = ne.current) ? gu(d) : null;
    if (!d) throw Error(a(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof i.precedence == "string" && typeof i.href == "string" ? (n = Ci(i.href), i = Ga(
          d
        ).hoistableStyles, o = i.get(n), o || (o = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, i.set(n, o)), o) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (i.rel === "stylesheet" && typeof i.href == "string" && typeof i.precedence == "string") {
          e = Ci(i.href);
          var b = Ga(
            d
          ).hoistableStyles, N = b.get(e);
          if (N || (d = d.ownerDocument || d, N = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, b.set(e, N), (b = d.querySelector(
            xs(e)
          )) && !b._p && (N.instance = b, N.state.loading = 5), Mn.has(e) || (i = {
            rel: "preload",
            as: "style",
            href: i.href,
            crossOrigin: i.crossOrigin,
            integrity: i.integrity,
            media: i.media,
            hrefLang: i.hrefLang,
            referrerPolicy: i.referrerPolicy
          }, Mn.set(e, i), b || M1(
            d,
            e,
            i,
            N.state
          ))), n && o === null)
            throw Error(a(528, ""));
          return N;
        }
        if (n && o !== null)
          throw Error(a(529, ""));
        return null;
      case "script":
        return n = i.async, i = i.src, typeof i == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = ki(i), i = Ga(
          d
        ).hoistableScripts, o = i.get(n), o || (o = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, i.set(n, o)), o) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(a(444, e));
    }
  }
  function Ci(e) {
    return 'href="' + Cn(e) + '"';
  }
  function xs(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Xg(e) {
    return g({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function M1(e, n, i, o) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]") ? o.loading = 1 : (n = e.createElement("link"), o.preload = n, n.addEventListener("load", function() {
      return o.loading |= 1;
    }), n.addEventListener("error", function() {
      return o.loading |= 2;
    }), zt(n, "link", i), xt(n), e.head.appendChild(n));
  }
  function ki(e) {
    return '[src="' + Cn(e) + '"]';
  }
  function Ts(e) {
    return "script[async]" + e;
  }
  function Fg(e, n, i) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var o = e.querySelector(
            'style[data-href~="' + Cn(i.href) + '"]'
          );
          if (o)
            return n.instance = o, xt(o), o;
          var d = g({}, i, {
            "data-href": i.href,
            "data-precedence": i.precedence,
            href: null,
            precedence: null
          });
          return o = (e.ownerDocument || e).createElement(
            "style"
          ), xt(o), zt(o, "style", d), vu(o, i.precedence, e), n.instance = o;
        case "stylesheet":
          d = Ci(i.href);
          var b = e.querySelector(
            xs(d)
          );
          if (b)
            return n.state.loading |= 4, n.instance = b, xt(b), b;
          o = Xg(i), (d = Mn.get(d)) && Zd(o, d), b = (e.ownerDocument || e).createElement("link"), xt(b);
          var N = b;
          return N._p = new Promise(function(z, H) {
            N.onload = z, N.onerror = H;
          }), zt(b, "link", o), n.state.loading |= 4, vu(b, i.precedence, e), n.instance = b;
        case "script":
          return b = ki(i.src), (d = e.querySelector(
            Ts(b)
          )) ? (n.instance = d, xt(d), d) : (o = i, (d = Mn.get(b)) && (o = g({}, i), Gd(o, d)), e = e.ownerDocument || e, d = e.createElement("script"), xt(d), zt(d, "link", o), e.head.appendChild(d), n.instance = d);
        case "void":
          return null;
        default:
          throw Error(a(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (o = n.instance, n.state.loading |= 4, vu(o, i.precedence, e));
    return n.instance;
  }
  function vu(e, n, i) {
    for (var o = i.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), d = o.length ? o[o.length - 1] : null, b = d, N = 0; N < o.length; N++) {
      var z = o[N];
      if (z.dataset.precedence === n) b = z;
      else if (b !== d) break;
    }
    b ? b.parentNode.insertBefore(e, b.nextSibling) : (n = i.nodeType === 9 ? i.head : i, n.insertBefore(e, n.firstChild));
  }
  function Zd(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function Gd(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var yu = null;
  function Qg(e, n, i) {
    if (yu === null) {
      var o = /* @__PURE__ */ new Map(), d = yu = /* @__PURE__ */ new Map();
      d.set(i, o);
    } else
      d = yu, o = d.get(i), o || (o = /* @__PURE__ */ new Map(), d.set(i, o));
    if (o.has(e)) return o;
    for (o.set(e, null), i = i.getElementsByTagName(e), d = 0; d < i.length; d++) {
      var b = i[d];
      if (!(b[Hi] || b[Bt] || e === "link" && b.getAttribute("rel") === "stylesheet") && b.namespaceURI !== "http://www.w3.org/2000/svg") {
        var N = b.getAttribute(n) || "";
        N = e + N;
        var z = o.get(N);
        z ? z.push(b) : o.set(N, [b]);
      }
    }
    return o;
  }
  function Kg(e, n, i) {
    e = e.ownerDocument || e, e.head.insertBefore(
      i,
      n === "title" ? e.querySelector("head > title") : null
    );
  }
  function R1(e, n, i) {
    if (i === 1 || n.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return e = n.disabled, typeof n.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function Jg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Ns = null;
  function j1() {
  }
  function D1(e, n, i) {
    if (Ns === null) throw Error(a(475));
    var o = Ns;
    if (n.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var d = Ci(i.href), b = e.querySelector(
          xs(d)
        );
        if (b) {
          e = b._p, e !== null && typeof e == "object" && typeof e.then == "function" && (o.count++, o = _u.bind(o), e.then(o, o)), n.state.loading |= 4, n.instance = b, xt(b);
          return;
        }
        b = e.ownerDocument || e, i = Xg(i), (d = Mn.get(d)) && Zd(i, d), b = b.createElement("link"), xt(b);
        var N = b;
        N._p = new Promise(function(z, H) {
          N.onload = z, N.onerror = H;
        }), zt(b, "link", i), n.instance = b;
      }
      o.stylesheets === null && (o.stylesheets = /* @__PURE__ */ new Map()), o.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (o.count++, n = _u.bind(o), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  function z1() {
    if (Ns === null) throw Error(a(475));
    var e = Ns;
    return e.stylesheets && e.count === 0 && Vd(e, e.stylesheets), 0 < e.count ? function(n) {
      var i = setTimeout(function() {
        if (e.stylesheets && Vd(e, e.stylesheets), e.unsuspend) {
          var o = e.unsuspend;
          e.unsuspend = null, o();
        }
      }, 6e4);
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(i);
      };
    } : null;
  }
  function _u() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Vd(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var bu = null;
  function Vd(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, bu = /* @__PURE__ */ new Map(), n.forEach(P1, e), bu = null, _u.call(e));
  }
  function P1(e, n) {
    if (!(n.state.loading & 4)) {
      var i = bu.get(e);
      if (i) var o = i.get(null);
      else {
        i = /* @__PURE__ */ new Map(), bu.set(e, i);
        for (var d = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), b = 0; b < d.length; b++) {
          var N = d[b];
          (N.nodeName === "LINK" || N.getAttribute("media") !== "not all") && (i.set(N.dataset.precedence, N), o = N);
        }
        o && i.set(null, o);
      }
      d = n.instance, N = d.getAttribute("data-precedence"), b = i.get(N) || o, b === o && i.set(null, d), i.set(N, d), this.count++, o = _u.bind(this), d.addEventListener("load", o), d.addEventListener("error", o), b ? b.parentNode.insertBefore(d, b.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(d, e.firstChild)), n.state.loading |= 4;
    }
  }
  var Os = {
    $$typeof: P,
    Provider: null,
    Consumer: null,
    _currentValue: J,
    _currentValue2: J,
    _threadCount: 0
  };
  function L1(e, n, i, o, d, b, N, z) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Hl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Hl(0), this.hiddenUpdates = Hl(null), this.identifierPrefix = o, this.onUncaughtError = d, this.onCaughtError = b, this.onRecoverableError = N, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = z, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Wg(e, n, i, o, d, b, N, z, H, Q, se, le) {
    return e = new L1(
      e,
      n,
      i,
      N,
      z,
      H,
      Q,
      le
    ), n = 1, b === !0 && (n |= 24), b = cn(3, null, null, n), e.current = b, b.stateNode = e, n = Ac(), n.refCount++, e.pooledCache = n, n.refCount++, b.memoizedState = {
      element: o,
      isDehydrated: i,
      cache: n
    }, Oc(b), e;
  }
  function ev(e) {
    return e ? (e = ni, e) : ni;
  }
  function tv(e, n, i, o, d, b) {
    d = ev(d), o.context === null ? o.context = d : o.pendingContext = d, o = Or(n), o.payload = { element: i }, b = b === void 0 ? null : b, b !== null && (o.callback = b), i = Mr(e, o, n), i !== null && (mn(i, e, n), ss(i, e, n));
  }
  function nv(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < n ? i : n;
    }
  }
  function $d(e, n) {
    nv(e, n), (e = e.alternate) && nv(e, n);
  }
  function rv(e) {
    if (e.tag === 13) {
      var n = ti(e, 67108864);
      n !== null && mn(n, e, 67108864), $d(e, 67108864);
    }
  }
  var Su = !0;
  function I1(e, n, i, o) {
    var d = M.T;
    M.T = null;
    var b = B.p;
    try {
      B.p = 2, Yd(e, n, i, o);
    } finally {
      B.p = b, M.T = d;
    }
  }
  function B1(e, n, i, o) {
    var d = M.T;
    M.T = null;
    var b = B.p;
    try {
      B.p = 8, Yd(e, n, i, o);
    } finally {
      B.p = b, M.T = d;
    }
  }
  function Yd(e, n, i, o) {
    if (Su) {
      var d = Xd(o);
      if (d === null)
        Dd(
          e,
          n,
          o,
          wu,
          i
        ), iv(e, o);
      else if (H1(
        d,
        e,
        n,
        i,
        o
      ))
        o.stopPropagation();
      else if (iv(e, o), n & 4 && -1 < U1.indexOf(e)) {
        for (; d !== null; ) {
          var b = Za(d);
          if (b !== null)
            switch (b.tag) {
              case 3:
                if (b = b.stateNode, b.current.memoizedState.isDehydrated) {
                  var N = wn(b.pendingLanes);
                  if (N !== 0) {
                    var z = b;
                    for (z.pendingLanes |= 2, z.entangledLanes |= 2; N; ) {
                      var H = 1 << 31 - Gt(N);
                      z.entanglements[1] |= H, N &= ~H;
                    }
                    Jn(b), (Ye & 6) === 0 && (iu = Fe() + 500, Es(0));
                  }
                }
                break;
              case 13:
                z = ti(b, 2), z !== null && mn(z, b, 2), ou(), $d(b, 2);
            }
          if (b = Xd(o), b === null && Dd(
            e,
            n,
            o,
            wu,
            i
          ), b === d) break;
          d = b;
        }
        d !== null && o.stopPropagation();
      } else
        Dd(
          e,
          n,
          o,
          null,
          i
        );
    }
  }
  function Xd(e) {
    return e = Wl(e), Fd(e);
  }
  var wu = null;
  function Fd(e) {
    if (wu = null, e = qa(e), e !== null) {
      var n = c(e);
      if (n === null) e = null;
      else {
        var i = n.tag;
        if (i === 13) {
          if (e = f(n), e !== null) return e;
          e = null;
        } else if (i === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return wu = e, null;
  }
  function av(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Dn()) {
          case dt:
            return 2;
          case ye:
            return 8;
          case _e:
          case qe:
            return 32;
          case Ze:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Qd = !1, Gr = null, Vr = null, $r = null, Ms = /* @__PURE__ */ new Map(), Rs = /* @__PURE__ */ new Map(), Yr = [], U1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function iv(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Gr = null;
        break;
      case "dragenter":
      case "dragleave":
        Vr = null;
        break;
      case "mouseover":
      case "mouseout":
        $r = null;
        break;
      case "pointerover":
      case "pointerout":
        Ms.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rs.delete(n.pointerId);
    }
  }
  function js(e, n, i, o, d, b) {
    return e === null || e.nativeEvent !== b ? (e = {
      blockedOn: n,
      domEventName: i,
      eventSystemFlags: o,
      nativeEvent: b,
      targetContainers: [d]
    }, n !== null && (n = Za(n), n !== null && rv(n)), e) : (e.eventSystemFlags |= o, n = e.targetContainers, d !== null && n.indexOf(d) === -1 && n.push(d), e);
  }
  function H1(e, n, i, o, d) {
    switch (n) {
      case "focusin":
        return Gr = js(
          Gr,
          e,
          n,
          i,
          o,
          d
        ), !0;
      case "dragenter":
        return Vr = js(
          Vr,
          e,
          n,
          i,
          o,
          d
        ), !0;
      case "mouseover":
        return $r = js(
          $r,
          e,
          n,
          i,
          o,
          d
        ), !0;
      case "pointerover":
        var b = d.pointerId;
        return Ms.set(
          b,
          js(
            Ms.get(b) || null,
            e,
            n,
            i,
            o,
            d
          )
        ), !0;
      case "gotpointercapture":
        return b = d.pointerId, Rs.set(
          b,
          js(
            Rs.get(b) || null,
            e,
            n,
            i,
            o,
            d
          )
        ), !0;
    }
    return !1;
  }
  function sv(e) {
    var n = qa(e.target);
    if (n !== null) {
      var i = c(n);
      if (i !== null) {
        if (n = i.tag, n === 13) {
          if (n = f(i), n !== null) {
            e.blockedOn = n, D0(e.priority, function() {
              if (i.tag === 13) {
                var o = pn();
                o = ql(o);
                var d = ti(i, o);
                d !== null && mn(d, i, o), $d(i, o);
              }
            });
            return;
          }
        } else if (n === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Eu(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var i = Xd(e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var o = new i.constructor(
          i.type,
          i
        );
        Jl = o, i.target.dispatchEvent(o), Jl = null;
      } else
        return n = Za(i), n !== null && rv(n), e.blockedOn = i, !1;
      n.shift();
    }
    return !0;
  }
  function ov(e, n, i) {
    Eu(e) && i.delete(n);
  }
  function q1() {
    Qd = !1, Gr !== null && Eu(Gr) && (Gr = null), Vr !== null && Eu(Vr) && (Vr = null), $r !== null && Eu($r) && ($r = null), Ms.forEach(ov), Rs.forEach(ov);
  }
  function Cu(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Qd || (Qd = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      q1
    )));
  }
  var ku = null;
  function uv(e) {
    ku !== e && (ku = e, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        ku === e && (ku = null);
        for (var n = 0; n < e.length; n += 3) {
          var i = e[n], o = e[n + 1], d = e[n + 2];
          if (typeof o != "function") {
            if (Fd(o || i) === null)
              continue;
            break;
          }
          var b = Za(i);
          b !== null && (e.splice(n, 3), n -= 3, Fc(
            b,
            {
              pending: !0,
              data: d,
              method: i.method,
              action: o
            },
            o,
            d
          ));
        }
      }
    ));
  }
  function Ds(e) {
    function n(H) {
      return Cu(H, e);
    }
    Gr !== null && Cu(Gr, e), Vr !== null && Cu(Vr, e), $r !== null && Cu($r, e), Ms.forEach(n), Rs.forEach(n);
    for (var i = 0; i < Yr.length; i++) {
      var o = Yr[i];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < Yr.length && (i = Yr[0], i.blockedOn === null); )
      sv(i), i.blockedOn === null && Yr.shift();
    if (i = (e.ownerDocument || e).$$reactFormReplay, i != null)
      for (o = 0; o < i.length; o += 3) {
        var d = i[o], b = i[o + 1], N = d[Kt] || null;
        if (typeof b == "function")
          N || uv(i);
        else if (N) {
          var z = null;
          if (b && b.hasAttribute("formAction")) {
            if (d = b, N = b[Kt] || null)
              z = N.formAction;
            else if (Fd(d) !== null) continue;
          } else z = N.action;
          typeof z == "function" ? i[o + 1] = z : (i.splice(o, 3), o -= 3), uv(i);
        }
      }
  }
  function Kd(e) {
    this._internalRoot = e;
  }
  Au.prototype.render = Kd.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(a(409));
    var i = n.current, o = pn();
    tv(i, o, e, n, null, null);
  }, Au.prototype.unmount = Kd.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      tv(e.current, 2, null, e, null, null), ou(), n[Ha] = null;
    }
  };
  function Au(e) {
    this._internalRoot = e;
  }
  Au.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = kh();
      e = { blockedOn: null, target: e, priority: n };
      for (var i = 0; i < Yr.length && n !== 0 && n < Yr[i].priority; i++) ;
      Yr.splice(i, 0, e), i === 0 && sv(e);
    }
  };
  var lv = r.version;
  if (lv !== "19.1.1")
    throw Error(
      a(
        527,
        lv,
        "19.1.1"
      )
    );
  B.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(a(188)) : (e = Object.keys(e).join(","), Error(a(268, e)));
    return e = p(n), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Z1 = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xu.isDisabled && xu.supportsFiber)
      try {
        zn = xu.inject(
          Z1
        ), mt = xu;
      } catch {
      }
  }
  return Is.createRoot = function(e, n) {
    if (!u(e)) throw Error(a(299));
    var i = !1, o = "", d = km, b = Am, N = xm, z = null;
    return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (d = n.onUncaughtError), n.onCaughtError !== void 0 && (b = n.onCaughtError), n.onRecoverableError !== void 0 && (N = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (z = n.unstable_transitionCallbacks)), n = Wg(
      e,
      1,
      !1,
      null,
      null,
      i,
      o,
      d,
      b,
      N,
      z,
      null
    ), e[Ha] = n.current, jd(e), new Kd(n);
  }, Is.hydrateRoot = function(e, n, i) {
    if (!u(e)) throw Error(a(299));
    var o = !1, d = "", b = km, N = Am, z = xm, H = null, Q = null;
    return i != null && (i.unstable_strictMode === !0 && (o = !0), i.identifierPrefix !== void 0 && (d = i.identifierPrefix), i.onUncaughtError !== void 0 && (b = i.onUncaughtError), i.onCaughtError !== void 0 && (N = i.onCaughtError), i.onRecoverableError !== void 0 && (z = i.onRecoverableError), i.unstable_transitionCallbacks !== void 0 && (H = i.unstable_transitionCallbacks), i.formState !== void 0 && (Q = i.formState)), n = Wg(
      e,
      1,
      !0,
      n,
      i ?? null,
      o,
      d,
      b,
      N,
      z,
      H,
      Q
    ), n.context = ev(null), i = n.current, o = pn(), o = ql(o), d = Or(o), d.callback = null, Mr(i, d, o), i = o, n.current.lanes = i, Ui(n, i), Jn(n), e[Ha] = n.current, jd(e), new Au(n);
  }, Is.version = "19.1.1", Is;
}
var Cv;
function O2() {
  if (Cv) return tf.exports;
  Cv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), tf.exports = N2(), tf.exports;
}
var M2 = O2();
const kv = /* @__PURE__ */ eh(M2);
var R2 = Object.defineProperty, j2 = (t, r, s) => r in t ? R2(t, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[r] = s, Av = (t, r, s) => j2(t, typeof r != "symbol" ? r + "" : r, s);
class f_ {
  constructor(r, s) {
    Av(this, "settingsKey"), Av(this, "defaultSettings"), this.settingsKey = r, this.defaultSettings = s;
  }
  /**
   * If defaultSettings has "version" and "formatVersion" properties, they will be used to track version and format version changes.
   *
   * For example, if you want to show a notification when a new version is released, you can check "result.version.changed".
   *
   * @param [options={}]
   * @param [options.strategy='recursive'] - 'recursive' will migrate old settings with the default settings.
   *
   * For complex settings, you can specify a custom migration strategy. For example, if you change the field name from "old" to "new", you can use:
   * @example
   * [
   *   {
   *     from: 'FORMAT-0.1.0',
   *     to: 'FORMAT-0.1.1',
   *     action: (previous) => {
   *       const data = {
   *         ...previous,
   *         new: previous.old,
   *       };
   *       delete data.old;
   *       return data;
   *     },
   *   },
   * ]
   */
  async initializeSettings(r = {}) {
    const { strategy: s = "recursive" } = r, a = this.defaultSettings.version, u = this.defaultSettings.formatVersion, c = SillyTavern.getContext().extensionSettings[this.settingsKey], f = {
      version: {
        changed: !1,
        new: a ?? ""
      },
      formatVersion: {
        changed: !1,
        new: u ?? ""
      },
      oldSettings: null,
      newSettings: this.defaultSettings
    };
    if (!c)
      return SillyTavern.getContext().extensionSettings[this.settingsKey] = this.defaultSettings, this.saveSettings(), f;
    const m = {
      ...f,
      oldSettings: structuredClone(c),
      version: {
        changed: !1,
        old: c.version,
        new: c.version
      },
      formatVersion: {
        changed: !1,
        old: c.formatVersion,
        new: c.formatVersion
      }
    };
    if (s === "recursive") {
      let p = function(v, g) {
        let E = !1;
        for (const y of Object.keys(g))
          v[y] === void 0 ? (v[y] = g[y], E = !0) : typeof g[y] == "object" && g[y] !== null && (v[y] = v[y] || {}, p(v[y], g[y]) && (E = !0));
        return E;
      };
      a && c.version !== a && (m.version.changed = !0, m.version.new = a, c.version = a), u && u !== "*" && c.formatVersion !== u && (m.formatVersion.changed = !0, m.formatVersion.new = u, c.formatVersion = u), (p(c, this.defaultSettings) || m.version.changed || m.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(s)) {
      a && !c.version && (c.version = a, m.version.changed = !0, m.version.new = a), u && !c.formatVersion && (c.formatVersion = u, m.formatVersion.changed = !0, m.formatVersion.new = u);
      let p = structuredClone(c), v = c.formatVersion;
      try {
        let g;
        do {
          g = !1;
          let E = s.find((y) => y.from === v);
          if (E && E.to > v)
            p = await E.action(p), v = E.to, p.formatVersion = E.to, g = !0;
          else
            for (const y of s)
              if (y.from === "*" && y.to > v && v !== y.to) {
                p = await y.action(p), v = y.to, p.formatVersion = y.to, g = !0;
                break;
              }
        } while (g);
        if (v !== c.formatVersion) {
          m.formatVersion.changed = !0, m.formatVersion.new = v;
          const E = this.defaultSettings.version;
          E && (p.version = E);
        }
        if (m.formatVersion.changed) {
          for (const E of Object.keys(c))
            delete c[E];
          Object.assign(c, p), this.saveSettings();
        }
      } catch (g) {
        throw console.error("Failed to apply version changes:", g), new Error(`Version migration failed: ${g instanceof Error ? g.message : g}`, {
          cause: g
        });
      }
    }
    return m.newSettings = c, m;
  }
  getSettings() {
    return SillyTavern.getContext().extensionSettings[this.settingsKey];
  }
  updateSetting(r, s) {
    SillyTavern.getContext().extensionSettings[this.settingsKey][r] = s, this.saveSettings();
  }
  saveSettings() {
    SillyTavern.getContext().saveSettingsDebounced();
  }
  resetSettings() {
    SillyTavern.getContext().extensionSettings[this.settingsKey] = this.defaultSettings, this.saveSettings();
  }
}
function Er(t) {
  return Array.isArray ? Array.isArray(t) : m_(t) === "[object Array]";
}
function D2(t) {
  if (typeof t == "string")
    return t;
  let r = t + "";
  return r == "0" && 1 / t == -1 / 0 ? "-0" : r;
}
function z2(t) {
  return t == null ? "" : D2(t);
}
function Wn(t) {
  return typeof t == "string";
}
function h_(t) {
  return typeof t == "number";
}
function P2(t) {
  return t === !0 || t === !1 || L2(t) && m_(t) == "[object Boolean]";
}
function p_(t) {
  return typeof t == "object";
}
function L2(t) {
  return p_(t) && t !== null;
}
function _n(t) {
  return t != null;
}
function sf(t) {
  return !t.trim().length;
}
function m_(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const I2 = "Incorrect 'index' type", B2 = (t) => `Invalid value for key ${t}`, U2 = (t) => `Pattern length exceeds max of ${t}.`, H2 = (t) => `Missing ${t} property in key`, q2 = (t) => `Property 'weight' in key '${t}' must be a positive integer`, xv = Object.prototype.hasOwnProperty;
class Z2 {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let s = 0;
    r.forEach((a) => {
      let u = g_(a);
      this._keys.push(u), this._keyMap[u.id] = u, s += u.weight;
    }), this._keys.forEach((a) => {
      a.weight /= s;
    });
  }
  get(r) {
    return this._keyMap[r];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function g_(t) {
  let r = null, s = null, a = null, u = 1, c = null;
  if (Wn(t) || Er(t))
    a = t, r = Tv(t), s = Nf(t);
  else {
    if (!xv.call(t, "name"))
      throw new Error(H2("name"));
    const f = t.name;
    if (a = f, xv.call(t, "weight") && (u = t.weight, u <= 0))
      throw new Error(q2(f));
    r = Tv(f), s = Nf(f), c = t.getFn;
  }
  return { path: r, id: s, weight: u, src: a, getFn: c };
}
function Tv(t) {
  return Er(t) ? t : t.split(".");
}
function Nf(t) {
  return Er(t) ? t.join(".") : t;
}
function G2(t, r) {
  let s = [], a = !1;
  const u = (c, f, m) => {
    if (_n(c))
      if (!f[m])
        s.push(c);
      else {
        let p = f[m];
        const v = c[p];
        if (!_n(v))
          return;
        if (m === f.length - 1 && (Wn(v) || h_(v) || P2(v)))
          s.push(z2(v));
        else if (Er(v)) {
          a = !0;
          for (let g = 0, E = v.length; g < E; g += 1)
            u(v[g], f, m + 1);
        } else f.length && u(v, f, m + 1);
      }
  };
  return u(t, Wn(r) ? r.split(".") : r, 0), a ? s : s[0];
}
const V2 = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, $2 = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: !1,
  // When `true`, the algorithm will ignore diacritics (accents) in comparisons
  ignoreDiacritics: !1,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: !1,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: !0,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (t, r) => t.score === r.score ? t.idx < r.idx ? -1 : 1 : t.score < r.score ? -1 : 1
}, Y2 = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
}, X2 = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: G2,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: !1,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: !1,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};
var Ne = {
  ...$2,
  ...V2,
  ...Y2,
  ...X2
};
const F2 = /[^ ]+/g;
function Q2(t = 1, r = 3) {
  const s = /* @__PURE__ */ new Map(), a = Math.pow(10, r);
  return {
    get(u) {
      const c = u.match(F2).length;
      if (s.has(c))
        return s.get(c);
      const f = 1 / Math.pow(c, 0.5 * t), m = parseFloat(Math.round(f * a) / a);
      return s.set(c, m), m;
    },
    clear() {
      s.clear();
    }
  };
}
class nh {
  constructor({
    getFn: r = Ne.getFn,
    fieldNormWeight: s = Ne.fieldNormWeight
  } = {}) {
    this.norm = Q2(s, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
  }
  setSources(r = []) {
    this.docs = r;
  }
  setIndexRecords(r = []) {
    this.records = r;
  }
  setKeys(r = []) {
    this.keys = r, this._keysMap = {}, r.forEach((s, a) => {
      this._keysMap[s.id] = a;
    });
  }
  create() {
    this.isCreated || !this.docs.length || (this.isCreated = !0, Wn(this.docs[0]) ? this.docs.forEach((r, s) => {
      this._addString(r, s);
    }) : this.docs.forEach((r, s) => {
      this._addObject(r, s);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(r) {
    const s = this.size();
    Wn(r) ? this._addString(r, s) : this._addObject(r, s);
  }
  // Removes the doc at the specified index of the index
  removeAt(r) {
    this.records.splice(r, 1);
    for (let s = r, a = this.size(); s < a; s += 1)
      this.records[s].i -= 1;
  }
  getValueForItemAtKeyId(r, s) {
    return r[this._keysMap[s]];
  }
  size() {
    return this.records.length;
  }
  _addString(r, s) {
    if (!_n(r) || sf(r))
      return;
    let a = {
      v: r,
      i: s,
      n: this.norm.get(r)
    };
    this.records.push(a);
  }
  _addObject(r, s) {
    let a = { i: s, $: {} };
    this.keys.forEach((u, c) => {
      let f = u.getFn ? u.getFn(r) : this.getFn(r, u.path);
      if (_n(f)) {
        if (Er(f)) {
          let m = [];
          const p = [{ nestedArrIndex: -1, value: f }];
          for (; p.length; ) {
            const { nestedArrIndex: v, value: g } = p.pop();
            if (_n(g))
              if (Wn(g) && !sf(g)) {
                let E = {
                  v: g,
                  i: v,
                  n: this.norm.get(g)
                };
                m.push(E);
              } else Er(g) && g.forEach((E, y) => {
                p.push({
                  nestedArrIndex: y,
                  value: E
                });
              });
          }
          a.$[c] = m;
        } else if (Wn(f) && !sf(f)) {
          let m = {
            v: f,
            n: this.norm.get(f)
          };
          a.$[c] = m;
        }
      }
    }), this.records.push(a);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
}
function v_(t, r, { getFn: s = Ne.getFn, fieldNormWeight: a = Ne.fieldNormWeight } = {}) {
  const u = new nh({ getFn: s, fieldNormWeight: a });
  return u.setKeys(t.map(g_)), u.setSources(r), u.create(), u;
}
function K2(t, { getFn: r = Ne.getFn, fieldNormWeight: s = Ne.fieldNormWeight } = {}) {
  const { keys: a, records: u } = t, c = new nh({ getFn: r, fieldNormWeight: s });
  return c.setKeys(a), c.setIndexRecords(u), c;
}
function Tu(t, {
  errors: r = 0,
  currentLocation: s = 0,
  expectedLocation: a = 0,
  distance: u = Ne.distance,
  ignoreLocation: c = Ne.ignoreLocation
} = {}) {
  const f = r / t.length;
  if (c)
    return f;
  const m = Math.abs(a - s);
  return u ? f + m / u : m ? 1 : f;
}
function J2(t = [], r = Ne.minMatchCharLength) {
  let s = [], a = -1, u = -1, c = 0;
  for (let f = t.length; c < f; c += 1) {
    let m = t[c];
    m && a === -1 ? a = c : !m && a !== -1 && (u = c - 1, u - a + 1 >= r && s.push([a, u]), a = -1);
  }
  return t[c - 1] && c - a >= r && s.push([a, c - 1]), s;
}
const Ra = 32;
function W2(t, r, s, {
  location: a = Ne.location,
  distance: u = Ne.distance,
  threshold: c = Ne.threshold,
  findAllMatches: f = Ne.findAllMatches,
  minMatchCharLength: m = Ne.minMatchCharLength,
  includeMatches: p = Ne.includeMatches,
  ignoreLocation: v = Ne.ignoreLocation
} = {}) {
  if (r.length > Ra)
    throw new Error(U2(Ra));
  const g = r.length, E = t.length, y = Math.max(0, Math.min(a, E));
  let S = c, h = y;
  const C = m > 1 || p, x = C ? Array(E) : [];
  let O;
  for (; (O = t.indexOf(r, h)) > -1; ) {
    let k = Tu(r, {
      currentLocation: O,
      expectedLocation: y,
      distance: u,
      ignoreLocation: v
    });
    if (S = Math.min(k, S), h = O + g, C) {
      let R = 0;
      for (; R < g; )
        x[O + R] = 1, R += 1;
    }
  }
  h = -1;
  let T = [], P = 1, l = g + E;
  const _ = 1 << g - 1;
  for (let k = 0; k < g; k += 1) {
    let R = 0, L = l;
    for (; R < L; )
      Tu(r, {
        errors: k,
        currentLocation: y + L,
        expectedLocation: y,
        distance: u,
        ignoreLocation: v
      }) <= S ? R = L : l = L, L = Math.floor((l - R) / 2 + R);
    l = L;
    let j = Math.max(1, y - L + 1), D = f ? E : Math.min(y + L, E) + g, q = Array(D + 2);
    q[D + 1] = (1 << k) - 1;
    for (let V = D; V >= j; V -= 1) {
      let K = V - 1, M = s[t.charAt(K)];
      if (C && (x[K] = +!!M), q[V] = (q[V + 1] << 1 | 1) & M, k && (q[V] |= (T[V + 1] | T[V]) << 1 | 1 | T[V + 1]), q[V] & _ && (P = Tu(r, {
        errors: k,
        currentLocation: K,
        expectedLocation: y,
        distance: u,
        ignoreLocation: v
      }), P <= S)) {
        if (S = P, h = K, h <= y)
          break;
        j = Math.max(1, 2 * y - h);
      }
    }
    if (Tu(r, {
      errors: k + 1,
      currentLocation: y,
      expectedLocation: y,
      distance: u,
      ignoreLocation: v
    }) > S)
      break;
    T = q;
  }
  const w = {
    isMatch: h >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, P)
  };
  if (C) {
    const k = J2(x, m);
    k.length ? p && (w.indices = k) : w.isMatch = !1;
  }
  return w;
}
function e3(t) {
  let r = {};
  for (let s = 0, a = t.length; s < a; s += 1) {
    const u = t.charAt(s);
    r[u] = (r[u] || 0) | 1 << a - s - 1;
  }
  return r;
}
const El = String.prototype.normalize ? ((t) => t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((t) => t);
class y_ {
  constructor(r, {
    location: s = Ne.location,
    threshold: a = Ne.threshold,
    distance: u = Ne.distance,
    includeMatches: c = Ne.includeMatches,
    findAllMatches: f = Ne.findAllMatches,
    minMatchCharLength: m = Ne.minMatchCharLength,
    isCaseSensitive: p = Ne.isCaseSensitive,
    ignoreDiacritics: v = Ne.ignoreDiacritics,
    ignoreLocation: g = Ne.ignoreLocation
  } = {}) {
    if (this.options = {
      location: s,
      threshold: a,
      distance: u,
      includeMatches: c,
      findAllMatches: f,
      minMatchCharLength: m,
      isCaseSensitive: p,
      ignoreDiacritics: v,
      ignoreLocation: g
    }, r = p ? r : r.toLowerCase(), r = v ? El(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const E = (S, h) => {
      this.chunks.push({
        pattern: S,
        alphabet: e3(S),
        startIndex: h
      });
    }, y = this.pattern.length;
    if (y > Ra) {
      let S = 0;
      const h = y % Ra, C = y - h;
      for (; S < C; )
        E(this.pattern.substr(S, Ra), S), S += Ra;
      if (h) {
        const x = y - Ra;
        E(this.pattern.substr(x), x);
      }
    } else
      E(this.pattern, 0);
  }
  searchIn(r) {
    const { isCaseSensitive: s, ignoreDiacritics: a, includeMatches: u } = this.options;
    if (r = s ? r : r.toLowerCase(), r = a ? El(r) : r, this.pattern === r) {
      let C = {
        isMatch: !0,
        score: 0
      };
      return u && (C.indices = [[0, r.length - 1]]), C;
    }
    const {
      location: c,
      distance: f,
      threshold: m,
      findAllMatches: p,
      minMatchCharLength: v,
      ignoreLocation: g
    } = this.options;
    let E = [], y = 0, S = !1;
    this.chunks.forEach(({ pattern: C, alphabet: x, startIndex: O }) => {
      const { isMatch: T, score: P, indices: l } = W2(r, C, x, {
        location: c + O,
        distance: f,
        threshold: m,
        findAllMatches: p,
        minMatchCharLength: v,
        includeMatches: u,
        ignoreLocation: g
      });
      T && (S = !0), y += P, T && l && (E = [...E, ...l]);
    });
    let h = {
      isMatch: S,
      score: S ? y / this.chunks.length : 1
    };
    return S && u && (h.indices = E), h;
  }
}
class ta {
  constructor(r) {
    this.pattern = r;
  }
  static isMultiMatch(r) {
    return Nv(r, this.multiRegex);
  }
  static isSingleMatch(r) {
    return Nv(r, this.singleRegex);
  }
  search() {
  }
}
function Nv(t, r) {
  const s = t.match(r);
  return s ? s[1] : null;
}
class t3 extends ta {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(r) {
    const s = r === this.pattern;
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class n3 extends ta {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(r) {
    const a = r.indexOf(this.pattern) === -1;
    return {
      isMatch: a,
      score: a ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class r3 extends ta {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(r) {
    const s = r.startsWith(this.pattern);
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class a3 extends ta {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(r) {
    const s = !r.startsWith(this.pattern);
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class i3 extends ta {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(r) {
    const s = r.endsWith(this.pattern);
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [r.length - this.pattern.length, r.length - 1]
    };
  }
}
class s3 extends ta {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(r) {
    const s = !r.endsWith(this.pattern);
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class __ extends ta {
  constructor(r, {
    location: s = Ne.location,
    threshold: a = Ne.threshold,
    distance: u = Ne.distance,
    includeMatches: c = Ne.includeMatches,
    findAllMatches: f = Ne.findAllMatches,
    minMatchCharLength: m = Ne.minMatchCharLength,
    isCaseSensitive: p = Ne.isCaseSensitive,
    ignoreDiacritics: v = Ne.ignoreDiacritics,
    ignoreLocation: g = Ne.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new y_(r, {
      location: s,
      threshold: a,
      distance: u,
      includeMatches: c,
      findAllMatches: f,
      minMatchCharLength: m,
      isCaseSensitive: p,
      ignoreDiacritics: v,
      ignoreLocation: g
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(r) {
    return this._bitapSearch.searchIn(r);
  }
}
class b_ extends ta {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(r) {
    let s = 0, a;
    const u = [], c = this.pattern.length;
    for (; (a = r.indexOf(this.pattern, s)) > -1; )
      s = a + c, u.push([a, s - 1]);
    const f = !!u.length;
    return {
      isMatch: f,
      score: f ? 0 : 1,
      indices: u
    };
  }
}
const Of = [
  t3,
  b_,
  r3,
  a3,
  s3,
  i3,
  n3,
  __
], Ov = Of.length, o3 = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, u3 = "|";
function l3(t, r = {}) {
  return t.split(u3).map((s) => {
    let a = s.trim().split(o3).filter((c) => c && !!c.trim()), u = [];
    for (let c = 0, f = a.length; c < f; c += 1) {
      const m = a[c];
      let p = !1, v = -1;
      for (; !p && ++v < Ov; ) {
        const g = Of[v];
        let E = g.isMultiMatch(m);
        E && (u.push(new g(E, r)), p = !0);
      }
      if (!p)
        for (v = -1; ++v < Ov; ) {
          const g = Of[v];
          let E = g.isSingleMatch(m);
          if (E) {
            u.push(new g(E, r));
            break;
          }
        }
    }
    return u;
  });
}
const c3 = /* @__PURE__ */ new Set([__.type, b_.type]);
class d3 {
  constructor(r, {
    isCaseSensitive: s = Ne.isCaseSensitive,
    ignoreDiacritics: a = Ne.ignoreDiacritics,
    includeMatches: u = Ne.includeMatches,
    minMatchCharLength: c = Ne.minMatchCharLength,
    ignoreLocation: f = Ne.ignoreLocation,
    findAllMatches: m = Ne.findAllMatches,
    location: p = Ne.location,
    threshold: v = Ne.threshold,
    distance: g = Ne.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: s,
      ignoreDiacritics: a,
      includeMatches: u,
      minMatchCharLength: c,
      findAllMatches: m,
      ignoreLocation: f,
      location: p,
      threshold: v,
      distance: g
    }, r = s ? r : r.toLowerCase(), r = a ? El(r) : r, this.pattern = r, this.query = l3(this.pattern, this.options);
  }
  static condition(r, s) {
    return s.useExtendedSearch;
  }
  searchIn(r) {
    const s = this.query;
    if (!s)
      return {
        isMatch: !1,
        score: 1
      };
    const { includeMatches: a, isCaseSensitive: u, ignoreDiacritics: c } = this.options;
    r = u ? r : r.toLowerCase(), r = c ? El(r) : r;
    let f = 0, m = [], p = 0;
    for (let v = 0, g = s.length; v < g; v += 1) {
      const E = s[v];
      m.length = 0, f = 0;
      for (let y = 0, S = E.length; y < S; y += 1) {
        const h = E[y], { isMatch: C, indices: x, score: O } = h.search(r);
        if (C) {
          if (f += 1, p += O, a) {
            const T = h.constructor.type;
            c3.has(T) ? m = [...m, ...x] : m.push(x);
          }
        } else {
          p = 0, f = 0, m.length = 0;
          break;
        }
      }
      if (f) {
        let y = {
          isMatch: !0,
          score: p / f
        };
        return a && (y.indices = m), y;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const Mf = [];
function f3(...t) {
  Mf.push(...t);
}
function Rf(t, r) {
  for (let s = 0, a = Mf.length; s < a; s += 1) {
    let u = Mf[s];
    if (u.condition(t, r))
      return new u(t, r);
  }
  return new y_(t, r);
}
const Cl = {
  AND: "$and",
  OR: "$or"
}, jf = {
  PATH: "$path",
  PATTERN: "$val"
}, Df = (t) => !!(t[Cl.AND] || t[Cl.OR]), h3 = (t) => !!t[jf.PATH], p3 = (t) => !Er(t) && p_(t) && !Df(t), Mv = (t) => ({
  [Cl.AND]: Object.keys(t).map((r) => ({
    [r]: t[r]
  }))
});
function S_(t, r, { auto: s = !0 } = {}) {
  const a = (u) => {
    let c = Object.keys(u);
    const f = h3(u);
    if (!f && c.length > 1 && !Df(u))
      return a(Mv(u));
    if (p3(u)) {
      const p = f ? u[jf.PATH] : c[0], v = f ? u[jf.PATTERN] : u[p];
      if (!Wn(v))
        throw new Error(B2(p));
      const g = {
        keyId: Nf(p),
        pattern: v
      };
      return s && (g.searcher = Rf(v, r)), g;
    }
    let m = {
      children: [],
      operator: c[0]
    };
    return c.forEach((p) => {
      const v = u[p];
      Er(v) && v.forEach((g) => {
        m.children.push(a(g));
      });
    }), m;
  };
  return Df(t) || (t = Mv(t)), a(t);
}
function m3(t, { ignoreFieldNorm: r = Ne.ignoreFieldNorm }) {
  t.forEach((s) => {
    let a = 1;
    s.matches.forEach(({ key: u, norm: c, score: f }) => {
      const m = u ? u.weight : null;
      a *= Math.pow(
        f === 0 && m ? Number.EPSILON : f,
        (m || 1) * (r ? 1 : c)
      );
    }), s.score = a;
  });
}
function g3(t, r) {
  const s = t.matches;
  r.matches = [], _n(s) && s.forEach((a) => {
    if (!_n(a.indices) || !a.indices.length)
      return;
    const { indices: u, value: c } = a;
    let f = {
      indices: u,
      value: c
    };
    a.key && (f.key = a.key.src), a.idx > -1 && (f.refIndex = a.idx), r.matches.push(f);
  });
}
function v3(t, r) {
  r.score = t.score;
}
function y3(t, r, {
  includeMatches: s = Ne.includeMatches,
  includeScore: a = Ne.includeScore
} = {}) {
  const u = [];
  return s && u.push(g3), a && u.push(v3), t.map((c) => {
    const { idx: f } = c, m = {
      item: r[f],
      refIndex: f
    };
    return u.length && u.forEach((p) => {
      p(c, m);
    }), m;
  });
}
class Bi {
  constructor(r, s = {}, a) {
    this.options = { ...Ne, ...s }, this.options.useExtendedSearch, this._keyStore = new Z2(this.options.keys), this.setCollection(r, a);
  }
  setCollection(r, s) {
    if (this._docs = r, s && !(s instanceof nh))
      throw new Error(I2);
    this._myIndex = s || v_(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(r) {
    _n(r) && (this._docs.push(r), this._myIndex.add(r));
  }
  remove(r = () => !1) {
    const s = [];
    for (let a = 0, u = this._docs.length; a < u; a += 1) {
      const c = this._docs[a];
      r(c, a) && (this.removeAt(a), a -= 1, u -= 1, s.push(c));
    }
    return s;
  }
  removeAt(r) {
    this._docs.splice(r, 1), this._myIndex.removeAt(r);
  }
  getIndex() {
    return this._myIndex;
  }
  search(r, { limit: s = -1 } = {}) {
    const {
      includeMatches: a,
      includeScore: u,
      shouldSort: c,
      sortFn: f,
      ignoreFieldNorm: m
    } = this.options;
    let p = Wn(r) ? Wn(this._docs[0]) ? this._searchStringList(r) : this._searchObjectList(r) : this._searchLogical(r);
    return m3(p, { ignoreFieldNorm: m }), c && p.sort(f), h_(s) && s > -1 && (p = p.slice(0, s)), y3(p, this._docs, {
      includeMatches: a,
      includeScore: u
    });
  }
  _searchStringList(r) {
    const s = Rf(r, this.options), { records: a } = this._myIndex, u = [];
    return a.forEach(({ v: c, i: f, n: m }) => {
      if (!_n(c))
        return;
      const { isMatch: p, score: v, indices: g } = s.searchIn(c);
      p && u.push({
        item: c,
        idx: f,
        matches: [{ score: v, value: c, norm: m, indices: g }]
      });
    }), u;
  }
  _searchLogical(r) {
    const s = S_(r, this.options), a = (m, p, v) => {
      if (!m.children) {
        const { keyId: E, searcher: y } = m, S = this._findMatches({
          key: this._keyStore.get(E),
          value: this._myIndex.getValueForItemAtKeyId(p, E),
          searcher: y
        });
        return S && S.length ? [
          {
            idx: v,
            item: p,
            matches: S
          }
        ] : [];
      }
      const g = [];
      for (let E = 0, y = m.children.length; E < y; E += 1) {
        const S = m.children[E], h = a(S, p, v);
        if (h.length)
          g.push(...h);
        else if (m.operator === Cl.AND)
          return [];
      }
      return g;
    }, u = this._myIndex.records, c = {}, f = [];
    return u.forEach(({ $: m, i: p }) => {
      if (_n(m)) {
        let v = a(s, m, p);
        v.length && (c[p] || (c[p] = { idx: p, item: m, matches: [] }, f.push(c[p])), v.forEach(({ matches: g }) => {
          c[p].matches.push(...g);
        }));
      }
    }), f;
  }
  _searchObjectList(r) {
    const s = Rf(r, this.options), { keys: a, records: u } = this._myIndex, c = [];
    return u.forEach(({ $: f, i: m }) => {
      if (!_n(f))
        return;
      let p = [];
      a.forEach((v, g) => {
        p.push(
          ...this._findMatches({
            key: v,
            value: f[g],
            searcher: s
          })
        );
      }), p.length && c.push({
        idx: m,
        item: f,
        matches: p
      });
    }), c;
  }
  _findMatches({ key: r, value: s, searcher: a }) {
    if (!_n(s))
      return [];
    let u = [];
    if (Er(s))
      s.forEach(({ v: c, i: f, n: m }) => {
        if (!_n(c))
          return;
        const { isMatch: p, score: v, indices: g } = a.searchIn(c);
        p && u.push({
          score: v,
          key: r,
          value: c,
          idx: f,
          norm: m,
          indices: g
        });
      });
    else {
      const { v: c, n: f } = s, { isMatch: m, score: p, indices: v } = a.searchIn(c);
      m && u.push({ score: p, key: r, value: c, norm: f, indices: v });
    }
    return u;
  }
}
Bi.version = "7.1.0";
Bi.createIndex = v_;
Bi.parseIndex = K2;
Bi.config = Ne;
Bi.parseQuery = S_;
f3(d3);
var _3 = Object.defineProperty, b3 = (t, r, s) => r in t ? _3(t, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[r] = s, S3 = (t, r, s) => b3(t, r + "", s);
let w3 = class {
  constructor() {
    S3(this, "requestMap"), this.requestMap = /* @__PURE__ */ new Map();
  }
  async abortRequest(r) {
    var s;
    const a = this.requestMap.get(r);
    if (a) {
      if (a.abortController)
        try {
          a.abortController.abort();
        } catch {
        }
      (s = a.options) != null && s.onFinish && await a.options.onFinish(r), this.requestMap.delete(r);
    }
  }
  /**
   * @returns return value is not important because request would be finished anyway. So use "options".
   */
  async generateRequest(r, s) {
    var a;
    const u = SillyTavern.getContext(), c = u.uuidv4(), f = ((a = r?.custom) == null ? void 0 : a.stream) ?? !1;
    if (this.requestMap.set(c, {
      abortController: s?.abortController,
      isStream: f,
      options: s
    }), f)
      try {
        const m = await u.ConnectionManagerRequestService.sendRequest(
          r.profileId,
          r.prompt,
          r.maxTokens,
          r.custom,
          r.overridePayload
        );
        s != null && s.onStart && await s.onStart(c);
        let p;
        for await (const v of m())
          p = v, s != null && s.onEntry && await s.onEntry(c, v);
        s != null && s.onFinish && await s.onFinish(c, p);
      } catch (m) {
        s != null && s.onFinish && await s.onFinish(c, void 0, m);
      } finally {
        this.requestMap.delete(c);
      }
    else
      try {
        s != null && s.onStart && await s.onStart(c);
        const m = await u.ConnectionManagerRequestService.sendRequest(
          r.profileId,
          r.prompt,
          r.maxTokens,
          r.custom,
          r.overridePayload
        );
        this.requestMap.get(c) && (s != null && s.onEntry && await s.onEntry(c, m), s != null && s.onFinish && await s.onFinish(c, m));
      } catch (m) {
        s != null && s.onFinish && await s.onFinish(c, void 0, m);
      } finally {
        this.requestMap.delete(c);
      }
    return c;
  }
  getActiveRequest(r) {
    var s;
    return (s = this.requestMap.get(r)) == null ? void 0 : s.abortController;
  }
  getAllActiveRequests() {
    const r = /* @__PURE__ */ new Map();
    for (const [s, a] of this.requestMap)
      r.set(s, a.abortController);
    return r;
  }
};
async function E3(t, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[t].callback(...r);
}
async function ge(t, r, { escapeHtml: s = !0 } = {}) {
  await E3("echo", { severity: t, escapeHtml: (!!s).toString() }, r);
}
function of(t) {
  return X1(t);
}
function Rv(t, r) {
  return $1(t, r);
}
function Nu(t, r, s) {
  return Y1(t, r, s);
}
function C3(t, r, s) {
  return s2(t, r, s);
}
function k3(t, r) {
  return o2(t, r);
}
function A3(t, {
  customStoryString: r,
  customInstructSettings: s
} = {}) {
  return V1(t, { customStoryString: r, customInstructSettings: s });
}
function ka(t) {
  return h2(t);
}
function x3() {
  return {
    prompt: zs[Ps.prompt],
    interval: zs[Ps.interval],
    position: zs[Ps.position],
    depth: zs[Ps.depth],
    role: zs[Ps.role]
  };
}
function T3(t, r) {
  return g2(t, r);
}
function N3({
  name2: t,
  charDescription: r,
  charPersonality: s,
  Scenario: a,
  worldInfoBefore: u,
  worldInfoAfter: c,
  bias: f,
  type: m,
  quietPrompt: p,
  quietImage: v,
  extensionPrompts: g,
  cyclePrompt: E,
  systemPromptOverride: y,
  jailbreakPromptOverride: S,
  personaDescription: h,
  messages: C,
  messageExamples: x
}, O) {
  return p2(
    {
      name2: t,
      charDescription: r,
      charPersonality: s,
      Scenario: a,
      worldInfoBefore: u,
      worldInfoAfter: c,
      bias: f,
      type: m,
      quietPrompt: p,
      quietImage: v,
      cyclePrompt: E,
      systemPromptOverride: y,
      jailbreakPromptOverride: S,
      personaDescription: h,
      extensionPrompts: g,
      messages: C,
      messageExamples: x
    },
    O
  );
}
function O3(t) {
  return l2(t);
}
function M3(t) {
  return c2(t);
}
function R3(t, r, {
  characterOverride: s,
  isMarkdown: a,
  isPrompt: u,
  isEdit: c,
  depth: f
}) {
  return y2(t, r, { characterOverride: s, isMarkdown: a, isPrompt: u, isEdit: c, depth: f });
}
function j3(t, r, { characterOverride: s = null } = {}) {
  return v2(t, r, { characterOverride: s });
}
async function D3(t, r) {
  return await u2(t, r);
}
function jv(t, {
  wiFormat: r
} = {}) {
  return d2(t, { wiFormat: r });
}
function Bs(t) {
  return f2(t);
}
function w_(t, {
  manualAvatarKey: r
} = {}) {
  return _2(t, { manualAvatarKey: r });
}
function rh(t, r) {
  return W1(t, r);
}
class z3 {
  /**
   * Encodes a string into a sequence of tokens using a simple heuristic.
   * This is a placeholder for a real tokenizer.
   */
  encode(r) {
    const s = Math.ceil(r.length / 4);
    return new Array(s).fill(" ");
  }
  /**
   * Decodes a sequence of tokens back into a string.
   * This is a placeholder and doesn't actually decode.
   */
  decode(r) {
    return r.join("");
  }
}
var P3 = Object.defineProperty, L3 = (t, r, s) => r in t ? P3(t, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[r] = s, Ou = (t, r, s) => L3(t, typeof r != "symbol" ? r + "" : r, s);
class I3 {
  constructor(r) {
    Ou(this, "messages", []), Ou(this, "tokenizer"), Ou(this, "maxContext"), Ou(this, "currentTokenCount", 0), this.tokenizer = new z3(), this.maxContext = r;
  }
  getTokenCount(r) {
    var s, a;
    return r.content ? ((a = (s = r.source) == null ? void 0 : s.extra) == null ? void 0 : a.token_count) ?? this.tokenizer.encode(r.content).length : 0;
  }
  canFit(r) {
    return this.currentTokenCount + this.getTokenCount(r) <= this.maxContext;
  }
  add(r) {
    if (!r.content) return !0;
    const s = this.getTokenCount(r);
    return this.currentTokenCount + s > this.maxContext ? !1 : (this.messages.push(r), this.currentTokenCount += s, !0);
  }
  addFront(r) {
    if (!r.content) return !0;
    const s = this.getTokenCount(r);
    return this.currentTokenCount + s > this.maxContext ? !1 : (this.messages.unshift(r), this.currentTokenCount += s, !0);
  }
  addMany(r) {
    const s = r.filter((m) => m.content), a = s.map((m) => this.getTokenCount(m)), u = a.reduce((m, p) => m + p, 0);
    if (this.currentTokenCount + u <= this.maxContext)
      return this.messages.push(...s), this.currentTokenCount += u, !0;
    let c = 0;
    const f = [];
    for (let m = s.length - 1; m >= 0; m--) {
      const p = s[m], v = a[m];
      if (this.currentTokenCount + c + v <= this.maxContext)
        f.unshift(p), c += v;
      else
        break;
    }
    return f.length > 0 && (this.messages.push(...f), this.currentTokenCount += c), f.length === s.length;
  }
  insert(r, s) {
    if (!s.content) return !0;
    const a = this.getTokenCount(s);
    return this.currentTokenCount + a > this.maxContext ? !1 : (this.messages.splice(r, 0, s), this.currentTokenCount += a, !0);
  }
  getMessages() {
    return this.messages;
  }
}
async function E_(t, {
  targetCharacterId: r,
  presetName: s,
  instructName: a,
  contextName: u,
  syspromptName: c,
  maxContext: f,
  includeNames: m,
  ignoreCharacterFields: p,
  ignoreAuthorNote: v,
  ignoreWorldInfo: g,
  messageIndexesBetween: E
} = {}) {
  var y, S, h, C, x, O, T, P, l, _, w, k, R, L;
  if (!["textgenerationwebui", "openai"].includes(t))
    throw new Error("Unsupported API");
  const j = SillyTavern.getContext();
  let { description: D, personality: q, persona: G, scenario: V, mesExamples: K, system: M, jailbreak: B } = p ? {
    description: "",
    personality: "",
    persona: "",
    scenario: "",
    mesExamples: "",
    system: "",
    jailbreak: ""
  } : j.getCharacterCardFields({
    chid: r
  });
  const J = t === "textgenerationwebui" ? (y = j.getPresetManager("instruct")) == null ? void 0 : y.getCompletionPresetByName(a) : void 0, ae = !!(J != null && J.enabled);
  let I = Rv(K, ae);
  function X() {
    var ye, _e;
    if (typeof f == "number")
      return f;
    if (!f || f === "active" || !s)
      return of();
    if (typeof f == "number")
      return f;
    let qe;
    if (t === "textgenerationwebui") {
      const Ze = (ye = j.getPresetManager("textgenerationwebui")) == null ? void 0 : ye.getCompletionPresetByName(s);
      qe = Ze?.max_length;
    } else {
      const Ze = (_e = j.getPresetManager("openai")) == null ? void 0 : _e.getCompletionPresetByName(s);
      qe = Ze?.openai_max_context;
    }
    return typeof qe == "number" ? qe : of();
  }
  let ce = [];
  const Y = X();
  if (Y <= 0)
    return { result: [], warnings: ce };
  const U = new I3(Y), te = j.ToolManager.isToolCallingSupported(), ne = E?.start ?? 0, ue = E != null && E.end ? E.end + 1 : void 0;
  let re = ne === -1 && ue === 0 ? [] : j.chat.slice(ne, ue).filter((ye) => {
    var _e;
    return !ye.is_system || te && Array.isArray((_e = ye.extra) == null ? void 0 : _e.tool_invocations);
  });
  re = await Promise.all(
    re.map(async (ye, _e) => {
      var qe, Ze;
      let et = ye.mes, Vn = ye.is_user ? fv.USER_INPUT : fv.AI_OUTPUT, zn = { isPrompt: !0, depth: re.length - _e - 1 }, mt = R3(et, Vn, zn);
      return mt = await D3(ye, mt), (qe = ye?.extra) != null && qe.append_title && (Ze = ye?.extra) != null && Ze.title && (mt = `${mt}

${ye.extra.title}`), {
        ...ye,
        mes: mt,
        index: _e
      };
    })
  );
  const pe = re.map((ye) => e2 ? `${ye.name}: ${ye.mes}` : ye.mes).reverse(), { worldInfoString: Re, worldInfoBefore: Se, worldInfoAfter: me, worldInfoExamples: fe, worldInfoDepth: we, anBefore: Le, anAfter: We } = g ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await j.getWorldInfoPrompt(pe, Y, !1);
  for (const ye of fe) {
    const _e = ye.content;
    if (_e.length === 0)
      continue;
    const qe = Nu(_e, Ea, Fr), Ze = Rv(qe, ae);
    ye.position === t2.before ? I.unshift(...Ze) : I.push(...Ze);
  }
  function Fe() {
    const ye = [];
    for (let _e = re.length - 1; _e >= 0; _e--) {
      const qe = re[_e], Ze = qe.name === "System" && !qe.is_user ? "system" : qe.is_user ? "user" : "assistant";
      ye.unshift({
        role: Ze,
        content: m && Ze != "system" ? `${qe.name}: ${qe.mes}` : qe.mes,
        source: qe
      });
    }
    U.addMany(ye);
  }
  if (t === "textgenerationwebui") {
    const ye = [...I];
    I && (I = C3(I, Ea, Fr));
    const _e = (S = j.getPresetManager("sysprompt")) == null ? void 0 : S.getCompletionPresetByName(c);
    _e && (M = j.powerUserSettings.prefer_character_prompt && M ? M : Nu(_e.content, Ea, Fr), M = ae ? k3(
      j.substituteParams(M, Ea, Fr, _e.content),
      J
    ) : M);
    const qe = {
      description: D,
      personality: q,
      persona: j.powerUserSettings.persona_description_position == cv.IN_PROMPT ? G : "",
      scenario: V,
      system: M,
      char: Fr,
      user: Ea,
      wiBefore: Se,
      wiAfter: me,
      loreBefore: Se,
      loreAfter: me,
      mesExamples: I.join(""),
      mesExamplesRaw: ye.join("")
    }, Ze = (h = j.getPresetManager("context")) == null ? void 0 : h.getCompletionPresetByName(u);
    let et = A3(qe, {
      customInstructSettings: J,
      customStoryString: Ze?.story_string
    });
    et && U.add({ role: "system", content: et, ignoreInstruct: !0 }), Fe();
  } else {
    let ye = function(Vt) {
      const Qt = Sn.find((Ua) => Ua.identifier === Vt);
      if (Qt)
        return Qt;
      const vo = et.prompts.find((Ua) => Ua.identifier === Vt);
      if (vo)
        return vo;
    }, _e = O3(re), qe = M3(I);
    async function Ze() {
      let [Vt, Qt] = await N3(
        {
          name2: Fr,
          charDescription: D,
          charPersonality: q,
          Scenario: V,
          worldInfoBefore: Se,
          worldInfoAfter: me,
          extensionPrompts: j.extensionPrompts,
          bias: "",
          type: "normal",
          quietPrompt: void 0,
          quietImage: void 0,
          cyclePrompt: "",
          systemPromptOverride: M,
          jailbreakPromptOverride: B,
          personaDescription: G,
          messages: _e,
          messageExamples: qe
        },
        !1
      );
      U.addMany(Vt);
    }
    if (!s)
      return ce.push("No preset name provided. Using default preset."), await Ze(), { result: U.getMessages(), warnings: ce };
    const et = (C = j.getPresetManager("openai")) == null ? void 0 : C.getCompletionPresetByName(s);
    if (!et)
      return console.warn(`Preset not found: ${s}. Using current preset.`), ce.push(`Preset not found: ${s}. Using current preset.`), Ze(), { result: U.getMessages(), warnings: ce };
    let Vn = (x = et.prompt_order) == null ? void 0 : x.find((Vt) => Vt.character_id === sn);
    if (!Vn && et.prompt_order && et.prompt_order.length > 0 && (Vn = et.prompt_order[et.prompt_order.length - 1]), !Vn)
      return console.warn(`No prompt order found for preset: ${s}. Using current preset.`), ce.push(`No prompt order found for preset: ${s}. Using current preset.`), Ze(), { result: U.getMessages(), warnings: ce };
    const zn = V && et.scenario_format ? j.substituteParams(et.scenario_format) : "", mt = q && et.personality_format ? j.substituteParams(et.personality_format) : "", $n = j.substituteParams(et.group_nudge_prompt), Gt = et.impersonation_prompt ? j.substituteParams(et.impersonation_prompt) : "", Sn = [];
    g || Sn.push(
      {
        role: "system",
        content: jv(Se, { wiFormat: et.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: jv(me, { wiFormat: et.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), p || Sn.push(
      { role: "system", content: D, identifier: "charDescription" },
      { role: "system", content: mt, identifier: "charPersonality" },
      { role: "system", content: zn, identifier: "scenario" }
    ), Sn.push(
      { role: "system", content: Gt, identifier: "impersonate" },
      { role: "system", content: $n, identifier: "groupNudge" }
    );
    const aa = j.extensionPrompts["1_memory"];
    aa && aa.value && Sn.push({
      role: ka(aa.role),
      content: aa.value,
      identifier: "summary",
      position: Bs(aa.position)
    });
    const ia = j.extensionPrompts["2_floating_prompt"];
    !v && ia && ia.value && Sn.push({
      role: ka(ia.role),
      content: ia.value,
      identifier: "authorsNote",
      position: Bs(ia.position)
    });
    const ar = j.extensionPrompts["3_vectors"];
    ar && ar.value && Sn.push({
      role: "system",
      content: ar.value,
      identifier: "vectorsMemory",
      position: Bs(ar.position)
    });
    const Yn = j.extensionPrompts["4_vectors_data_bank"];
    Yn && Yn.value && Sn.push({
      role: ka(Yn.role),
      content: Yn.value,
      identifier: "vectorsDataBank",
      position: Bs(Yn.position)
    });
    const wn = j.extensionPrompts.chromadb;
    wn && wn.value && Sn.push({
      role: "system",
      content: wn.value,
      identifier: "smartContext",
      position: Bs(wn.position)
    }), !p && j.powerUserSettings.persona_description && j.powerUserSettings.persona_description_position === cv.IN_PROMPT && Sn.push({
      role: "system",
      content: j.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), Vn.order.forEach((Vt) => {
      if (!Vt.enabled)
        return;
      const Qt = ye(Vt.identifier);
      if (Qt && Qt.content) {
        U.add({
          role: Qt.role ?? "system",
          content: j.substituteParams(Qt.content)
        });
        return;
      }
      Vt.identifier === "chatHistory" && Fe();
    });
  }
  const Dn = [
    "1_memory",
    "2_floating_prompt",
    "3_vectors",
    "4_vectors_data_bank",
    "chromadb",
    "PERSONA_DESCRIPTION",
    "QUIET_PROMPT",
    "DEPTH_PROMPT"
  ];
  for (const ye in j.extensionPrompts)
    if (Object.hasOwn(j.extensionPrompts, ye)) {
      const _e = j.extensionPrompts[ye];
      if (Dn.includes(ye) || !j.extensionPrompts[ye].value || ![Ca.BEFORE_PROMPT, Ca.IN_PROMPT].includes(_e.position) || typeof _e.filter == "function" && !await _e.filter()) continue;
      const qe = {
        role: ka(_e.role) ?? "system",
        content: _e.value
      };
      if (_e.position === Ca.BEFORE_PROMPT)
        U.insert(_e.depth, qe);
      else if (_e.position === Ca.IN_PROMPT) {
        const Ze = U.getMessages();
        U.insert(Ze.length - _e.depth, qe);
      }
    }
  for (const ye of we) {
    const _e = U.getMessages();
    U.insert(_e.length - ye.depth, {
      role: ka(ye.role),
      content: ye.entries.join(`
`)
    });
  }
  if (!p) {
    const ye = T3(Ft, Number(sn));
    if (Ft && Array.isArray(ye) && ye.length > 0)
      ye.filter((_e) => _e.text).forEach((_e, qe) => {
        const Ze = U.getMessages();
        U.insert(Ze.length - _e.depth, { role: _e.role, content: _e.text });
      });
    else {
      const _e = Nu(
        (_ = (l = (P = (T = (O = j.characters[sn]) == null ? void 0 : O.data) == null ? void 0 : T.extensions) == null ? void 0 : P.depth_prompt) == null ? void 0 : l.prompt) == null ? void 0 : _.trim(),
        Ea,
        Fr
      ) || "";
      if (_e) {
        const qe = Q1, Ze = ((L = (R = (k = (w = j.characters[sn]) == null ? void 0 : w.data) == null ? void 0 : k.extensions) == null ? void 0 : R.depth_prompt) == null ? void 0 : L.role) ?? F1, et = U.getMessages();
        U.insert(et.length - qe, {
          role: ka(Ze),
          content: _e
        });
      }
    }
  }
  let dt = -1;
  if (!v) {
    const ye = x3();
    if (ye.prompt) {
      ye.prompt = Nu(ye.prompt, Ea, Fr);
      const _e = { role: ka(ye.role), content: ye.prompt };
      switch (ye.position) {
        case Ca.IN_PROMPT:
          U.insert(1, _e), dt = 1;
          break;
        case Ca.IN_CHAT:
          dt = U.getMessages().length - ye.depth, U.insert(dt, _e);
          break;
        case Ca.BEFORE_PROMPT:
          U.addFront(_e), dt = 0;
          break;
      }
    }
  }
  return dt >= 0 && (Le.length > 0 && (U.insert(dt, { role: "system", content: Le.join(`
`) }), dt++), We.length > 0 && U.insert(dt + 1, { role: "system", content: We.join(`
`) })), { result: U.getMessages(), warnings: ce };
}
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Dv(t, r) {
  var s = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    r && (a = a.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), s.push.apply(s, a);
  }
  return s;
}
function nr(t) {
  for (var r = 1; r < arguments.length; r++) {
    var s = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Dv(Object(s), !0).forEach(function(a) {
      B3(t, a, s[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s)) : Dv(Object(s)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(s, a));
    });
  }
  return t;
}
function ml(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ml = function(r) {
    return typeof r;
  } : ml = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, ml(t);
}
function B3(t, r, s) {
  return r in t ? Object.defineProperty(t, r, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[r] = s, t;
}
function Cr() {
  return Cr = Object.assign || function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var s = arguments[r];
      for (var a in s)
        Object.prototype.hasOwnProperty.call(s, a) && (t[a] = s[a]);
    }
    return t;
  }, Cr.apply(this, arguments);
}
function U3(t, r) {
  if (t == null) return {};
  var s = {}, a = Object.keys(t), u, c;
  for (c = 0; c < a.length; c++)
    u = a[c], !(r.indexOf(u) >= 0) && (s[u] = t[u]);
  return s;
}
function H3(t, r) {
  if (t == null) return {};
  var s = U3(t, r), a, u;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    for (u = 0; u < c.length; u++)
      a = c[u], !(r.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(t, a) && (s[a] = t[a]);
  }
  return s;
}
var q3 = "1.15.6";
function wr(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var kr = wr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), co = wr(/Edge/i), zv = wr(/firefox/i), eo = wr(/safari/i) && !wr(/chrome/i) && !wr(/android/i), ah = wr(/iP(ad|od|hone)/i), C_ = wr(/chrome/i) && wr(/android/i), k_ = {
  capture: !1,
  passive: !1
};
function He(t, r, s) {
  t.addEventListener(r, s, !kr && k_);
}
function Ue(t, r, s) {
  t.removeEventListener(r, s, !kr && k_);
}
function kl(t, r) {
  if (r) {
    if (r[0] === ">" && (r = r.substring(1)), t)
      try {
        if (t.matches)
          return t.matches(r);
        if (t.msMatchesSelector)
          return t.msMatchesSelector(r);
        if (t.webkitMatchesSelector)
          return t.webkitMatchesSelector(r);
      } catch {
        return !1;
      }
    return !1;
  }
}
function A_(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function qn(t, r, s, a) {
  if (t) {
    s = s || document;
    do {
      if (r != null && (r[0] === ">" ? t.parentNode === s && kl(t, r) : kl(t, r)) || a && t === s)
        return t;
      if (t === s) break;
    } while (t = A_(t));
  }
  return null;
}
var Pv = /\s+/g;
function vn(t, r, s) {
  if (t && r)
    if (t.classList)
      t.classList[s ? "add" : "remove"](r);
    else {
      var a = (" " + t.className + " ").replace(Pv, " ").replace(" " + r + " ", " ");
      t.className = (a + (s ? " " + r : "")).replace(Pv, " ");
    }
}
function xe(t, r, s) {
  var a = t && t.style;
  if (a) {
    if (s === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? s = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (s = t.currentStyle), r === void 0 ? s : s[r];
    !(r in a) && r.indexOf("webkit") === -1 && (r = "-webkit-" + r), a[r] = s + (typeof s == "string" ? "" : "px");
  }
}
function Pi(t, r) {
  var s = "";
  if (typeof t == "string")
    s = t;
  else
    do {
      var a = xe(t, "transform");
      a && a !== "none" && (s = a + " " + s);
    } while (!r && (t = t.parentNode));
  var u = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return u && new u(s);
}
function x_(t, r, s) {
  if (t) {
    var a = t.getElementsByTagName(r), u = 0, c = a.length;
    if (s)
      for (; u < c; u++)
        s(a[u], u);
    return a;
  }
  return [];
}
function er() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function wt(t, r, s, a, u) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var c, f, m, p, v, g, E;
    if (t !== window && t.parentNode && t !== er() ? (c = t.getBoundingClientRect(), f = c.top, m = c.left, p = c.bottom, v = c.right, g = c.height, E = c.width) : (f = 0, m = 0, p = window.innerHeight, v = window.innerWidth, g = window.innerHeight, E = window.innerWidth), (r || s) && t !== window && (u = u || t.parentNode, !kr))
      do
        if (u && u.getBoundingClientRect && (xe(u, "transform") !== "none" || s && xe(u, "position") !== "static")) {
          var y = u.getBoundingClientRect();
          f -= y.top + parseInt(xe(u, "border-top-width")), m -= y.left + parseInt(xe(u, "border-left-width")), p = f + c.height, v = m + c.width;
          break;
        }
      while (u = u.parentNode);
    if (a && t !== window) {
      var S = Pi(u || t), h = S && S.a, C = S && S.d;
      S && (f /= C, m /= h, E /= h, g /= C, p = f + g, v = m + E);
    }
    return {
      top: f,
      left: m,
      bottom: p,
      right: v,
      width: E,
      height: g
    };
  }
}
function Lv(t, r, s) {
  for (var a = ea(t, !0), u = wt(t)[r]; a; ) {
    var c = wt(a)[s], f = void 0;
    if (f = u >= c, !f) return a;
    if (a === er()) break;
    a = ea(a, !1);
  }
  return !1;
}
function Ii(t, r, s, a) {
  for (var u = 0, c = 0, f = t.children; c < f.length; ) {
    if (f[c].style.display !== "none" && f[c] !== Te.ghost && (a || f[c] !== Te.dragged) && qn(f[c], s.draggable, t, !1)) {
      if (u === r)
        return f[c];
      u++;
    }
    c++;
  }
  return null;
}
function ih(t, r) {
  for (var s = t.lastElementChild; s && (s === Te.ghost || xe(s, "display") === "none" || r && !kl(s, r)); )
    s = s.previousElementSibling;
  return s || null;
}
function Rn(t, r) {
  var s = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== Te.clone && (!r || kl(t, r)) && s++;
  return s;
}
function Iv(t) {
  var r = 0, s = 0, a = er();
  if (t)
    do {
      var u = Pi(t), c = u.a, f = u.d;
      r += t.scrollLeft * c, s += t.scrollTop * f;
    } while (t !== a && (t = t.parentNode));
  return [r, s];
}
function Z3(t, r) {
  for (var s in t)
    if (t.hasOwnProperty(s)) {
      for (var a in r)
        if (r.hasOwnProperty(a) && r[a] === t[s][a]) return Number(s);
    }
  return -1;
}
function ea(t, r) {
  if (!t || !t.getBoundingClientRect) return er();
  var s = t, a = !1;
  do
    if (s.clientWidth < s.scrollWidth || s.clientHeight < s.scrollHeight) {
      var u = xe(s);
      if (s.clientWidth < s.scrollWidth && (u.overflowX == "auto" || u.overflowX == "scroll") || s.clientHeight < s.scrollHeight && (u.overflowY == "auto" || u.overflowY == "scroll")) {
        if (!s.getBoundingClientRect || s === document.body) return er();
        if (a || r) return s;
        a = !0;
      }
    }
  while (s = s.parentNode);
  return er();
}
function G3(t, r) {
  if (t && r)
    for (var s in r)
      r.hasOwnProperty(s) && (t[s] = r[s]);
  return t;
}
function uf(t, r) {
  return Math.round(t.top) === Math.round(r.top) && Math.round(t.left) === Math.round(r.left) && Math.round(t.height) === Math.round(r.height) && Math.round(t.width) === Math.round(r.width);
}
var to;
function T_(t, r) {
  return function() {
    if (!to) {
      var s = arguments, a = this;
      s.length === 1 ? t.call(a, s[0]) : t.apply(a, s), to = setTimeout(function() {
        to = void 0;
      }, r);
    }
  };
}
function V3() {
  clearTimeout(to), to = void 0;
}
function N_(t, r, s) {
  t.scrollLeft += r, t.scrollTop += s;
}
function O_(t) {
  var r = window.Polymer, s = window.jQuery || window.Zepto;
  return r && r.dom ? r.dom(t).cloneNode(!0) : s ? s(t).clone(!0)[0] : t.cloneNode(!0);
}
function M_(t, r, s) {
  var a = {};
  return Array.from(t.children).forEach(function(u) {
    var c, f, m, p;
    if (!(!qn(u, r.draggable, t, !1) || u.animated || u === s)) {
      var v = wt(u);
      a.left = Math.min((c = a.left) !== null && c !== void 0 ? c : 1 / 0, v.left), a.top = Math.min((f = a.top) !== null && f !== void 0 ? f : 1 / 0, v.top), a.right = Math.max((m = a.right) !== null && m !== void 0 ? m : -1 / 0, v.right), a.bottom = Math.max((p = a.bottom) !== null && p !== void 0 ? p : -1 / 0, v.bottom);
    }
  }), a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
var an = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function $3() {
  var t = [], r;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var a = [].slice.call(this.el.children);
        a.forEach(function(u) {
          if (!(xe(u, "display") === "none" || u === Te.ghost)) {
            t.push({
              target: u,
              rect: wt(u)
            });
            var c = nr({}, t[t.length - 1].rect);
            if (u.thisAnimationDuration) {
              var f = Pi(u, !0);
              f && (c.top -= f.f, c.left -= f.e);
            }
            u.fromRect = c;
          }
        });
      }
    },
    addAnimationState: function(a) {
      t.push(a);
    },
    removeAnimationState: function(a) {
      t.splice(Z3(t, {
        target: a
      }), 1);
    },
    animateAll: function(a) {
      var u = this;
      if (!this.options.animation) {
        clearTimeout(r), typeof a == "function" && a();
        return;
      }
      var c = !1, f = 0;
      t.forEach(function(m) {
        var p = 0, v = m.target, g = v.fromRect, E = wt(v), y = v.prevFromRect, S = v.prevToRect, h = m.rect, C = Pi(v, !0);
        C && (E.top -= C.f, E.left -= C.e), v.toRect = E, v.thisAnimationDuration && uf(y, E) && !uf(g, E) && // Make sure animatingRect is on line between toRect & fromRect
        (h.top - E.top) / (h.left - E.left) === (g.top - E.top) / (g.left - E.left) && (p = X3(h, y, S, u.options)), uf(E, g) || (v.prevFromRect = g, v.prevToRect = E, p || (p = u.options.animation), u.animate(v, h, E, p)), p && (c = !0, f = Math.max(f, p), clearTimeout(v.animationResetTimer), v.animationResetTimer = setTimeout(function() {
          v.animationTime = 0, v.prevFromRect = null, v.fromRect = null, v.prevToRect = null, v.thisAnimationDuration = null;
        }, p), v.thisAnimationDuration = p);
      }), clearTimeout(r), c ? r = setTimeout(function() {
        typeof a == "function" && a();
      }, f) : typeof a == "function" && a(), t = [];
    },
    animate: function(a, u, c, f) {
      if (f) {
        xe(a, "transition", ""), xe(a, "transform", "");
        var m = Pi(this.el), p = m && m.a, v = m && m.d, g = (u.left - c.left) / (p || 1), E = (u.top - c.top) / (v || 1);
        a.animatingX = !!g, a.animatingY = !!E, xe(a, "transform", "translate3d(" + g + "px," + E + "px,0)"), this.forRepaintDummy = Y3(a), xe(a, "transition", "transform " + f + "ms" + (this.options.easing ? " " + this.options.easing : "")), xe(a, "transform", "translate3d(0,0,0)"), typeof a.animated == "number" && clearTimeout(a.animated), a.animated = setTimeout(function() {
          xe(a, "transition", ""), xe(a, "transform", ""), a.animated = !1, a.animatingX = !1, a.animatingY = !1;
        }, f);
      }
    }
  };
}
function Y3(t) {
  return t.offsetWidth;
}
function X3(t, r, s, a) {
  return Math.sqrt(Math.pow(r.top - t.top, 2) + Math.pow(r.left - t.left, 2)) / Math.sqrt(Math.pow(r.top - s.top, 2) + Math.pow(r.left - s.left, 2)) * a.animation;
}
var xi = [], lf = {
  initializeByDefault: !0
}, fo = {
  mount: function(r) {
    for (var s in lf)
      lf.hasOwnProperty(s) && !(s in r) && (r[s] = lf[s]);
    xi.forEach(function(a) {
      if (a.pluginName === r.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(r.pluginName, " more than once");
    }), xi.push(r);
  },
  pluginEvent: function(r, s, a) {
    var u = this;
    this.eventCanceled = !1, a.cancel = function() {
      u.eventCanceled = !0;
    };
    var c = r + "Global";
    xi.forEach(function(f) {
      s[f.pluginName] && (s[f.pluginName][c] && s[f.pluginName][c](nr({
        sortable: s
      }, a)), s.options[f.pluginName] && s[f.pluginName][r] && s[f.pluginName][r](nr({
        sortable: s
      }, a)));
    });
  },
  initializePlugins: function(r, s, a, u) {
    xi.forEach(function(m) {
      var p = m.pluginName;
      if (!(!r.options[p] && !m.initializeByDefault)) {
        var v = new m(r, s, r.options);
        v.sortable = r, v.options = r.options, r[p] = v, Cr(a, v.defaults);
      }
    });
    for (var c in r.options)
      if (r.options.hasOwnProperty(c)) {
        var f = this.modifyOption(r, c, r.options[c]);
        typeof f < "u" && (r.options[c] = f);
      }
  },
  getEventProperties: function(r, s) {
    var a = {};
    return xi.forEach(function(u) {
      typeof u.eventProperties == "function" && Cr(a, u.eventProperties.call(s[u.pluginName], r));
    }), a;
  },
  modifyOption: function(r, s, a) {
    var u;
    return xi.forEach(function(c) {
      r[c.pluginName] && c.optionListeners && typeof c.optionListeners[s] == "function" && (u = c.optionListeners[s].call(r[c.pluginName], a));
    }), u;
  }
};
function F3(t) {
  var r = t.sortable, s = t.rootEl, a = t.name, u = t.targetEl, c = t.cloneEl, f = t.toEl, m = t.fromEl, p = t.oldIndex, v = t.newIndex, g = t.oldDraggableIndex, E = t.newDraggableIndex, y = t.originalEvent, S = t.putSortable, h = t.extraEventProperties;
  if (r = r || s && s[an], !!r) {
    var C, x = r.options, O = "on" + a.charAt(0).toUpperCase() + a.substr(1);
    window.CustomEvent && !kr && !co ? C = new CustomEvent(a, {
      bubbles: !0,
      cancelable: !0
    }) : (C = document.createEvent("Event"), C.initEvent(a, !0, !0)), C.to = f || s, C.from = m || s, C.item = u || s, C.clone = c, C.oldIndex = p, C.newIndex = v, C.oldDraggableIndex = g, C.newDraggableIndex = E, C.originalEvent = y, C.pullMode = S ? S.lastPutMode : void 0;
    var T = nr(nr({}, h), fo.getEventProperties(a, r));
    for (var P in T)
      C[P] = T[P];
    s && s.dispatchEvent(C), x[O] && x[O].call(r, C);
  }
}
var Q3 = ["evt"], nn = function(r, s) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u = a.evt, c = H3(a, Q3);
  fo.pluginEvent.bind(Te)(r, s, nr({
    dragEl: he,
    parentEl: pt,
    ghostEl: Me,
    rootEl: it,
    nextEl: Oa,
    lastDownEl: gl,
    cloneEl: lt,
    cloneHidden: Wr,
    dragStarted: Xs,
    putSortable: Pt,
    activeSortable: Te.active,
    originalEvent: u,
    oldIndex: Di,
    oldDraggableIndex: no,
    newIndex: yn,
    newDraggableIndex: Jr,
    hideGhostForTarget: z_,
    unhideGhostForTarget: P_,
    cloneNowHidden: function() {
      Wr = !0;
    },
    cloneNowShown: function() {
      Wr = !1;
    },
    dispatchSortableEvent: function(m) {
      Yt({
        sortable: s,
        name: m,
        originalEvent: u
      });
    }
  }, c));
};
function Yt(t) {
  F3(nr({
    putSortable: Pt,
    cloneEl: lt,
    targetEl: he,
    rootEl: it,
    oldIndex: Di,
    oldDraggableIndex: no,
    newIndex: yn,
    newDraggableIndex: Jr
  }, t));
}
var he, pt, Me, it, Oa, gl, lt, Wr, Di, yn, no, Jr, Mu, Pt, ji = !1, Al = !1, xl = [], Aa, Bn, cf, df, Bv, Uv, Xs, Ti, ro, ao = !1, Ru = !1, vl, qt, ff = [], zf = !1, Tl = [], Pl = typeof document < "u", ju = ah, Hv = co || kr ? "cssFloat" : "float", K3 = Pl && !C_ && !ah && "draggable" in document.createElement("div"), R_ = (function() {
  if (Pl) {
    if (kr)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
})(), j_ = function(r, s) {
  var a = xe(r), u = parseInt(a.width) - parseInt(a.paddingLeft) - parseInt(a.paddingRight) - parseInt(a.borderLeftWidth) - parseInt(a.borderRightWidth), c = Ii(r, 0, s), f = Ii(r, 1, s), m = c && xe(c), p = f && xe(f), v = m && parseInt(m.marginLeft) + parseInt(m.marginRight) + wt(c).width, g = p && parseInt(p.marginLeft) + parseInt(p.marginRight) + wt(f).width;
  if (a.display === "flex")
    return a.flexDirection === "column" || a.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (a.display === "grid")
    return a.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (c && m.float && m.float !== "none") {
    var E = m.float === "left" ? "left" : "right";
    return f && (p.clear === "both" || p.clear === E) ? "vertical" : "horizontal";
  }
  return c && (m.display === "block" || m.display === "flex" || m.display === "table" || m.display === "grid" || v >= u && a[Hv] === "none" || f && a[Hv] === "none" && v + g > u) ? "vertical" : "horizontal";
}, J3 = function(r, s, a) {
  var u = a ? r.left : r.top, c = a ? r.right : r.bottom, f = a ? r.width : r.height, m = a ? s.left : s.top, p = a ? s.right : s.bottom, v = a ? s.width : s.height;
  return u === m || c === p || u + f / 2 === m + v / 2;
}, W3 = function(r, s) {
  var a;
  return xl.some(function(u) {
    var c = u[an].options.emptyInsertThreshold;
    if (!(!c || ih(u))) {
      var f = wt(u), m = r >= f.left - c && r <= f.right + c, p = s >= f.top - c && s <= f.bottom + c;
      if (m && p)
        return a = u;
    }
  }), a;
}, D_ = function(r) {
  function s(c, f) {
    return function(m, p, v, g) {
      var E = m.options.group.name && p.options.group.name && m.options.group.name === p.options.group.name;
      if (c == null && (f || E))
        return !0;
      if (c == null || c === !1)
        return !1;
      if (f && c === "clone")
        return c;
      if (typeof c == "function")
        return s(c(m, p, v, g), f)(m, p, v, g);
      var y = (f ? m : p).options.group.name;
      return c === !0 || typeof c == "string" && c === y || c.join && c.indexOf(y) > -1;
    };
  }
  var a = {}, u = r.group;
  (!u || ml(u) != "object") && (u = {
    name: u
  }), a.name = u.name, a.checkPull = s(u.pull, !0), a.checkPut = s(u.put), a.revertClone = u.revertClone, r.group = a;
}, z_ = function() {
  !R_ && Me && xe(Me, "display", "none");
}, P_ = function() {
  !R_ && Me && xe(Me, "display", "");
};
Pl && !C_ && document.addEventListener("click", function(t) {
  if (Al)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), Al = !1, !1;
}, !0);
var xa = function(r) {
  if (he) {
    r = r.touches ? r.touches[0] : r;
    var s = W3(r.clientX, r.clientY);
    if (s) {
      var a = {};
      for (var u in r)
        r.hasOwnProperty(u) && (a[u] = r[u]);
      a.target = a.rootEl = s, a.preventDefault = void 0, a.stopPropagation = void 0, s[an]._onDragOver(a);
    }
  }
}, e8 = function(r) {
  he && he.parentNode[an]._isOutsideThisEl(r.target);
};
function Te(t, r) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = r = Cr({}, r), t[an] = this;
  var s = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return j_(t, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(f, m) {
      f.setData("Text", m.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    // Disabled on Safari: #1571; Enabled on Safari IOS: #2244
    supportPointer: Te.supportPointer !== !1 && "PointerEvent" in window && (!eo || ah),
    emptyInsertThreshold: 5
  };
  fo.initializePlugins(this, t, s);
  for (var a in s)
    !(a in r) && (r[a] = s[a]);
  D_(r);
  for (var u in this)
    u.charAt(0) === "_" && typeof this[u] == "function" && (this[u] = this[u].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : K3, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? He(t, "pointerdown", this._onTapStart) : (He(t, "mousedown", this._onTapStart), He(t, "touchstart", this._onTapStart)), this.nativeDraggable && (He(t, "dragover", this), He(t, "dragenter", this)), xl.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), Cr(this, $3());
}
Te.prototype = /** @lends Sortable.prototype */
{
  constructor: Te,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (Ti = null);
  },
  _getDirection: function(r, s) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, s, he) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var s = this, a = this.el, u = this.options, c = u.preventOnFilter, f = r.type, m = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, p = (m || r).target, v = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || p, g = u.filter;
      if (u8(a), !he && !(/mousedown|pointerdown/.test(f) && r.button !== 0 || u.disabled) && !v.isContentEditable && !(!this.nativeDraggable && eo && p && p.tagName.toUpperCase() === "SELECT") && (p = qn(p, u.draggable, a, !1), !(p && p.animated) && gl !== p)) {
        if (Di = Rn(p), no = Rn(p, u.draggable), typeof g == "function") {
          if (g.call(this, r, p, this)) {
            Yt({
              sortable: s,
              rootEl: v,
              name: "filter",
              targetEl: p,
              toEl: a,
              fromEl: a
            }), nn("filter", s, {
              evt: r
            }), c && r.preventDefault();
            return;
          }
        } else if (g && (g = g.split(",").some(function(E) {
          if (E = qn(v, E.trim(), a, !1), E)
            return Yt({
              sortable: s,
              rootEl: E,
              name: "filter",
              targetEl: p,
              fromEl: a,
              toEl: a
            }), nn("filter", s, {
              evt: r
            }), !0;
        }), g)) {
          c && r.preventDefault();
          return;
        }
        u.handle && !qn(v, u.handle, a, !1) || this._prepareDragStart(r, m, p);
      }
    }
  },
  _prepareDragStart: function(r, s, a) {
    var u = this, c = u.el, f = u.options, m = c.ownerDocument, p;
    if (a && !he && a.parentNode === c) {
      var v = wt(a);
      if (it = c, he = a, pt = he.parentNode, Oa = he.nextSibling, gl = a, Mu = f.group, Te.dragged = he, Aa = {
        target: he,
        clientX: (s || r).clientX,
        clientY: (s || r).clientY
      }, Bv = Aa.clientX - v.left, Uv = Aa.clientY - v.top, this._lastX = (s || r).clientX, this._lastY = (s || r).clientY, he.style["will-change"] = "all", p = function() {
        if (nn("delayEnded", u, {
          evt: r
        }), Te.eventCanceled) {
          u._onDrop();
          return;
        }
        u._disableDelayedDragEvents(), !zv && u.nativeDraggable && (he.draggable = !0), u._triggerDragStart(r, s), Yt({
          sortable: u,
          name: "choose",
          originalEvent: r
        }), vn(he, f.chosenClass, !0);
      }, f.ignore.split(",").forEach(function(g) {
        x_(he, g.trim(), hf);
      }), He(m, "dragover", xa), He(m, "mousemove", xa), He(m, "touchmove", xa), f.supportPointer ? (He(m, "pointerup", u._onDrop), !this.nativeDraggable && He(m, "pointercancel", u._onDrop)) : (He(m, "mouseup", u._onDrop), He(m, "touchend", u._onDrop), He(m, "touchcancel", u._onDrop)), zv && this.nativeDraggable && (this.options.touchStartThreshold = 4, he.draggable = !0), nn("delayStart", this, {
        evt: r
      }), f.delay && (!f.delayOnTouchOnly || s) && (!this.nativeDraggable || !(co || kr))) {
        if (Te.eventCanceled) {
          this._onDrop();
          return;
        }
        f.supportPointer ? (He(m, "pointerup", u._disableDelayedDrag), He(m, "pointercancel", u._disableDelayedDrag)) : (He(m, "mouseup", u._disableDelayedDrag), He(m, "touchend", u._disableDelayedDrag), He(m, "touchcancel", u._disableDelayedDrag)), He(m, "mousemove", u._delayedDragTouchMoveHandler), He(m, "touchmove", u._delayedDragTouchMoveHandler), f.supportPointer && He(m, "pointermove", u._delayedDragTouchMoveHandler), u._dragStartTimer = setTimeout(p, f.delay);
      } else
        p();
    }
  },
  _delayedDragTouchMoveHandler: function(r) {
    var s = r.touches ? r.touches[0] : r;
    Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    he && hf(he), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    Ue(r, "mouseup", this._disableDelayedDrag), Ue(r, "touchend", this._disableDelayedDrag), Ue(r, "touchcancel", this._disableDelayedDrag), Ue(r, "pointerup", this._disableDelayedDrag), Ue(r, "pointercancel", this._disableDelayedDrag), Ue(r, "mousemove", this._delayedDragTouchMoveHandler), Ue(r, "touchmove", this._delayedDragTouchMoveHandler), Ue(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, s) {
    s = s || r.pointerType == "touch" && r, !this.nativeDraggable || s ? this.options.supportPointer ? He(document, "pointermove", this._onTouchMove) : s ? He(document, "touchmove", this._onTouchMove) : He(document, "mousemove", this._onTouchMove) : (He(he, "dragend", this), He(it, "dragstart", this._onDragStart));
    try {
      document.selection ? yl(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, s) {
    if (ji = !1, it && he) {
      nn("dragStarted", this, {
        evt: s
      }), this.nativeDraggable && He(document, "dragover", e8);
      var a = this.options;
      !r && vn(he, a.dragClass, !1), vn(he, a.ghostClass, !0), Te.active = this, r && this._appendGhost(), Yt({
        sortable: this,
        name: "start",
        originalEvent: s
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Bn) {
      this._lastX = Bn.clientX, this._lastY = Bn.clientY, z_();
      for (var r = document.elementFromPoint(Bn.clientX, Bn.clientY), s = r; r && r.shadowRoot && (r = r.shadowRoot.elementFromPoint(Bn.clientX, Bn.clientY), r !== s); )
        s = r;
      if (he.parentNode[an]._isOutsideThisEl(r), s)
        do {
          if (s[an]) {
            var a = void 0;
            if (a = s[an]._onDragOver({
              clientX: Bn.clientX,
              clientY: Bn.clientY,
              target: r,
              rootEl: s
            }), a && !this.options.dragoverBubble)
              break;
          }
          r = s;
        } while (s = A_(s));
      P_();
    }
  },
  _onTouchMove: function(r) {
    if (Aa) {
      var s = this.options, a = s.fallbackTolerance, u = s.fallbackOffset, c = r.touches ? r.touches[0] : r, f = Me && Pi(Me, !0), m = Me && f && f.a, p = Me && f && f.d, v = ju && qt && Iv(qt), g = (c.clientX - Aa.clientX + u.x) / (m || 1) + (v ? v[0] - ff[0] : 0) / (m || 1), E = (c.clientY - Aa.clientY + u.y) / (p || 1) + (v ? v[1] - ff[1] : 0) / (p || 1);
      if (!Te.active && !ji) {
        if (a && Math.max(Math.abs(c.clientX - this._lastX), Math.abs(c.clientY - this._lastY)) < a)
          return;
        this._onDragStart(r, !0);
      }
      if (Me) {
        f ? (f.e += g - (cf || 0), f.f += E - (df || 0)) : f = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: g,
          f: E
        };
        var y = "matrix(".concat(f.a, ",").concat(f.b, ",").concat(f.c, ",").concat(f.d, ",").concat(f.e, ",").concat(f.f, ")");
        xe(Me, "webkitTransform", y), xe(Me, "mozTransform", y), xe(Me, "msTransform", y), xe(Me, "transform", y), cf = g, df = E, Bn = c;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Me) {
      var r = this.options.fallbackOnBody ? document.body : it, s = wt(he, !0, ju, !0, r), a = this.options;
      if (ju) {
        for (qt = r; xe(qt, "position") === "static" && xe(qt, "transform") === "none" && qt !== document; )
          qt = qt.parentNode;
        qt !== document.body && qt !== document.documentElement ? (qt === document && (qt = er()), s.top += qt.scrollTop, s.left += qt.scrollLeft) : qt = er(), ff = Iv(qt);
      }
      Me = he.cloneNode(!0), vn(Me, a.ghostClass, !1), vn(Me, a.fallbackClass, !0), vn(Me, a.dragClass, !0), xe(Me, "transition", ""), xe(Me, "transform", ""), xe(Me, "box-sizing", "border-box"), xe(Me, "margin", 0), xe(Me, "top", s.top), xe(Me, "left", s.left), xe(Me, "width", s.width), xe(Me, "height", s.height), xe(Me, "opacity", "0.8"), xe(Me, "position", ju ? "absolute" : "fixed"), xe(Me, "zIndex", "100000"), xe(Me, "pointerEvents", "none"), Te.ghost = Me, r.appendChild(Me), xe(Me, "transform-origin", Bv / parseInt(Me.style.width) * 100 + "% " + Uv / parseInt(Me.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(r, s) {
    var a = this, u = r.dataTransfer, c = a.options;
    if (nn("dragStart", this, {
      evt: r
    }), Te.eventCanceled) {
      this._onDrop();
      return;
    }
    nn("setupClone", this), Te.eventCanceled || (lt = O_(he), lt.removeAttribute("id"), lt.draggable = !1, lt.style["will-change"] = "", this._hideClone(), vn(lt, this.options.chosenClass, !1), Te.clone = lt), a.cloneId = yl(function() {
      nn("clone", a), !Te.eventCanceled && (a.options.removeCloneOnHide || it.insertBefore(lt, he), a._hideClone(), Yt({
        sortable: a,
        name: "clone"
      }));
    }), !s && vn(he, c.dragClass, !0), s ? (Al = !0, a._loopId = setInterval(a._emulateDragOver, 50)) : (Ue(document, "mouseup", a._onDrop), Ue(document, "touchend", a._onDrop), Ue(document, "touchcancel", a._onDrop), u && (u.effectAllowed = "move", c.setData && c.setData.call(a, u, he)), He(document, "drop", a), xe(he, "transform", "translateZ(0)")), ji = !0, a._dragStartId = yl(a._dragStarted.bind(a, s, r)), He(document, "selectstart", a), Xs = !0, window.getSelection().removeAllRanges(), eo && xe(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var s = this.el, a = r.target, u, c, f, m = this.options, p = m.group, v = Te.active, g = Mu === p, E = m.sort, y = Pt || v, S, h = this, C = !1;
    if (zf) return;
    function x(J, ae) {
      nn(J, h, nr({
        evt: r,
        isOwner: g,
        axis: S ? "vertical" : "horizontal",
        revert: f,
        dragRect: u,
        targetRect: c,
        canSort: E,
        fromSortable: y,
        target: a,
        completed: T,
        onMove: function(X, ce) {
          return Du(it, s, he, u, X, wt(X), r, ce);
        },
        changed: P
      }, ae));
    }
    function O() {
      x("dragOverAnimationCapture"), h.captureAnimationState(), h !== y && y.captureAnimationState();
    }
    function T(J) {
      return x("dragOverCompleted", {
        insertion: J
      }), J && (g ? v._hideClone() : v._showClone(h), h !== y && (vn(he, Pt ? Pt.options.ghostClass : v.options.ghostClass, !1), vn(he, m.ghostClass, !0)), Pt !== h && h !== Te.active ? Pt = h : h === Te.active && Pt && (Pt = null), y === h && (h._ignoreWhileAnimating = a), h.animateAll(function() {
        x("dragOverAnimationComplete"), h._ignoreWhileAnimating = null;
      }), h !== y && (y.animateAll(), y._ignoreWhileAnimating = null)), (a === he && !he.animated || a === s && !a.animated) && (Ti = null), !m.dragoverBubble && !r.rootEl && a !== document && (he.parentNode[an]._isOutsideThisEl(r.target), !J && xa(r)), !m.dragoverBubble && r.stopPropagation && r.stopPropagation(), C = !0;
    }
    function P() {
      yn = Rn(he), Jr = Rn(he, m.draggable), Yt({
        sortable: h,
        name: "change",
        toEl: s,
        newIndex: yn,
        newDraggableIndex: Jr,
        originalEvent: r
      });
    }
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), a = qn(a, m.draggable, s, !0), x("dragOver"), Te.eventCanceled) return C;
    if (he.contains(r.target) || a.animated && a.animatingX && a.animatingY || h._ignoreWhileAnimating === a)
      return T(!1);
    if (Al = !1, v && !m.disabled && (g ? E || (f = pt !== it) : Pt === this || (this.lastPutMode = Mu.checkPull(this, v, he, r)) && p.checkPut(this, v, he, r))) {
      if (S = this._getDirection(r, a) === "vertical", u = wt(he), x("dragOverValid"), Te.eventCanceled) return C;
      if (f)
        return pt = it, O(), this._hideClone(), x("revert"), Te.eventCanceled || (Oa ? it.insertBefore(he, Oa) : it.appendChild(he)), T(!0);
      var l = ih(s, m.draggable);
      if (!l || a8(r, S, this) && !l.animated) {
        if (l === he)
          return T(!1);
        if (l && s === r.target && (a = l), a && (c = wt(a)), Du(it, s, he, u, a, c, r, !!a) !== !1)
          return O(), l && l.nextSibling ? s.insertBefore(he, l.nextSibling) : s.appendChild(he), pt = s, P(), T(!0);
      } else if (l && r8(r, S, this)) {
        var _ = Ii(s, 0, m, !0);
        if (_ === he)
          return T(!1);
        if (a = _, c = wt(a), Du(it, s, he, u, a, c, r, !1) !== !1)
          return O(), s.insertBefore(he, _), pt = s, P(), T(!0);
      } else if (a.parentNode === s) {
        c = wt(a);
        var w = 0, k, R = he.parentNode !== s, L = !J3(he.animated && he.toRect || u, a.animated && a.toRect || c, S), j = S ? "top" : "left", D = Lv(a, "top", "top") || Lv(he, "top", "top"), q = D ? D.scrollTop : void 0;
        Ti !== a && (k = c[j], ao = !1, Ru = !L && m.invertSwap || R), w = i8(r, a, c, S, L ? 1 : m.swapThreshold, m.invertedSwapThreshold == null ? m.swapThreshold : m.invertedSwapThreshold, Ru, Ti === a);
        var G;
        if (w !== 0) {
          var V = Rn(he);
          do
            V -= w, G = pt.children[V];
          while (G && (xe(G, "display") === "none" || G === Me));
        }
        if (w === 0 || G === a)
          return T(!1);
        Ti = a, ro = w;
        var K = a.nextElementSibling, M = !1;
        M = w === 1;
        var B = Du(it, s, he, u, a, c, r, M);
        if (B !== !1)
          return (B === 1 || B === -1) && (M = B === 1), zf = !0, setTimeout(n8, 30), O(), M && !K ? s.appendChild(he) : a.parentNode.insertBefore(he, M ? K : a), D && N_(D, 0, q - D.scrollTop), pt = he.parentNode, k !== void 0 && !Ru && (vl = Math.abs(k - wt(a)[j])), P(), T(!0);
      }
      if (s.contains(he))
        return T(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Ue(document, "mousemove", this._onTouchMove), Ue(document, "touchmove", this._onTouchMove), Ue(document, "pointermove", this._onTouchMove), Ue(document, "dragover", xa), Ue(document, "mousemove", xa), Ue(document, "touchmove", xa);
  },
  _offUpEvents: function() {
    var r = this.el.ownerDocument;
    Ue(r, "mouseup", this._onDrop), Ue(r, "touchend", this._onDrop), Ue(r, "pointerup", this._onDrop), Ue(r, "pointercancel", this._onDrop), Ue(r, "touchcancel", this._onDrop), Ue(document, "selectstart", this);
  },
  _onDrop: function(r) {
    var s = this.el, a = this.options;
    if (yn = Rn(he), Jr = Rn(he, a.draggable), nn("drop", this, {
      evt: r
    }), pt = he && he.parentNode, yn = Rn(he), Jr = Rn(he, a.draggable), Te.eventCanceled) {
      this._nulling();
      return;
    }
    ji = !1, Ru = !1, ao = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Pf(this.cloneId), Pf(this._dragStartId), this.nativeDraggable && (Ue(document, "drop", this), Ue(s, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), eo && xe(document.body, "user-select", ""), xe(he, "transform", ""), r && (Xs && (r.cancelable && r.preventDefault(), !a.dropBubble && r.stopPropagation()), Me && Me.parentNode && Me.parentNode.removeChild(Me), (it === pt || Pt && Pt.lastPutMode !== "clone") && lt && lt.parentNode && lt.parentNode.removeChild(lt), he && (this.nativeDraggable && Ue(he, "dragend", this), hf(he), he.style["will-change"] = "", Xs && !ji && vn(he, Pt ? Pt.options.ghostClass : this.options.ghostClass, !1), vn(he, this.options.chosenClass, !1), Yt({
      sortable: this,
      name: "unchoose",
      toEl: pt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: r
    }), it !== pt ? (yn >= 0 && (Yt({
      rootEl: pt,
      name: "add",
      toEl: pt,
      fromEl: it,
      originalEvent: r
    }), Yt({
      sortable: this,
      name: "remove",
      toEl: pt,
      originalEvent: r
    }), Yt({
      rootEl: pt,
      name: "sort",
      toEl: pt,
      fromEl: it,
      originalEvent: r
    }), Yt({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: r
    })), Pt && Pt.save()) : yn !== Di && yn >= 0 && (Yt({
      sortable: this,
      name: "update",
      toEl: pt,
      originalEvent: r
    }), Yt({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: r
    })), Te.active && ((yn == null || yn === -1) && (yn = Di, Jr = no), Yt({
      sortable: this,
      name: "end",
      toEl: pt,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    nn("nulling", this), it = he = pt = Me = Oa = lt = gl = Wr = Aa = Bn = Xs = yn = Jr = Di = no = Ti = ro = Pt = Mu = Te.dragged = Te.ghost = Te.clone = Te.active = null, Tl.forEach(function(r) {
      r.checked = !0;
    }), Tl.length = cf = df = 0;
  },
  handleEvent: function(r) {
    switch (r.type) {
      case "drop":
      case "dragend":
        this._onDrop(r);
        break;
      case "dragenter":
      case "dragover":
        he && (this._onDragOver(r), t8(r));
        break;
      case "selectstart":
        r.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var r = [], s, a = this.el.children, u = 0, c = a.length, f = this.options; u < c; u++)
      s = a[u], qn(s, f.draggable, this.el, !1) && r.push(s.getAttribute(f.dataIdAttr) || o8(s));
    return r;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(r, s) {
    var a = {}, u = this.el;
    this.toArray().forEach(function(c, f) {
      var m = u.children[f];
      qn(m, this.options.draggable, u, !1) && (a[c] = m);
    }, this), s && this.captureAnimationState(), r.forEach(function(c) {
      a[c] && (u.removeChild(a[c]), u.appendChild(a[c]));
    }), s && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var r = this.options.store;
    r && r.set && r.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(r, s) {
    return qn(r, s || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(r, s) {
    var a = this.options;
    if (s === void 0)
      return a[r];
    var u = fo.modifyOption(this, r, s);
    typeof u < "u" ? a[r] = u : a[r] = s, r === "group" && D_(a);
  },
  /**
   * Destroy
   */
  destroy: function() {
    nn("destroy", this);
    var r = this.el;
    r[an] = null, Ue(r, "mousedown", this._onTapStart), Ue(r, "touchstart", this._onTapStart), Ue(r, "pointerdown", this._onTapStart), this.nativeDraggable && (Ue(r, "dragover", this), Ue(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(s) {
      s.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), xl.splice(xl.indexOf(this.el), 1), this.el = r = null;
  },
  _hideClone: function() {
    if (!Wr) {
      if (nn("hideClone", this), Te.eventCanceled) return;
      xe(lt, "display", "none"), this.options.removeCloneOnHide && lt.parentNode && lt.parentNode.removeChild(lt), Wr = !0;
    }
  },
  _showClone: function(r) {
    if (r.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Wr) {
      if (nn("showClone", this), Te.eventCanceled) return;
      he.parentNode == it && !this.options.group.revertClone ? it.insertBefore(lt, he) : Oa ? it.insertBefore(lt, Oa) : it.appendChild(lt), this.options.group.revertClone && this.animate(he, lt), xe(lt, "display", ""), Wr = !1;
    }
  }
};
function t8(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function Du(t, r, s, a, u, c, f, m) {
  var p, v = t[an], g = v.options.onMove, E;
  return window.CustomEvent && !kr && !co ? p = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (p = document.createEvent("Event"), p.initEvent("move", !0, !0)), p.to = r, p.from = t, p.dragged = s, p.draggedRect = a, p.related = u || r, p.relatedRect = c || wt(r), p.willInsertAfter = m, p.originalEvent = f, t.dispatchEvent(p), g && (E = g.call(v, p, f)), E;
}
function hf(t) {
  t.draggable = !1;
}
function n8() {
  zf = !1;
}
function r8(t, r, s) {
  var a = wt(Ii(s.el, 0, s.options, !0)), u = M_(s.el, s.options, Me), c = 10;
  return r ? t.clientX < u.left - c || t.clientY < a.top && t.clientX < a.right : t.clientY < u.top - c || t.clientY < a.bottom && t.clientX < a.left;
}
function a8(t, r, s) {
  var a = wt(ih(s.el, s.options.draggable)), u = M_(s.el, s.options, Me), c = 10;
  return r ? t.clientX > u.right + c || t.clientY > a.bottom && t.clientX > a.left : t.clientY > u.bottom + c || t.clientX > a.right && t.clientY > a.top;
}
function i8(t, r, s, a, u, c, f, m) {
  var p = a ? t.clientY : t.clientX, v = a ? s.height : s.width, g = a ? s.top : s.left, E = a ? s.bottom : s.right, y = !1;
  if (!f) {
    if (m && vl < v * u) {
      if (!ao && (ro === 1 ? p > g + v * c / 2 : p < E - v * c / 2) && (ao = !0), ao)
        y = !0;
      else if (ro === 1 ? p < g + vl : p > E - vl)
        return -ro;
    } else if (p > g + v * (1 - u) / 2 && p < E - v * (1 - u) / 2)
      return s8(r);
  }
  return y = y || f, y && (p < g + v * c / 2 || p > E - v * c / 2) ? p > g + v / 2 ? 1 : -1 : 0;
}
function s8(t) {
  return Rn(he) < Rn(t) ? 1 : -1;
}
function o8(t) {
  for (var r = t.tagName + t.className + t.src + t.href + t.textContent, s = r.length, a = 0; s--; )
    a += r.charCodeAt(s);
  return a.toString(36);
}
function u8(t) {
  Tl.length = 0;
  for (var r = t.getElementsByTagName("input"), s = r.length; s--; ) {
    var a = r[s];
    a.checked && Tl.push(a);
  }
}
function yl(t) {
  return setTimeout(t, 0);
}
function Pf(t) {
  return clearTimeout(t);
}
Pl && He(document, "touchmove", function(t) {
  (Te.active || ji) && t.cancelable && t.preventDefault();
});
Te.utils = {
  on: He,
  off: Ue,
  css: xe,
  find: x_,
  is: function(r, s) {
    return !!qn(r, s, r, !1);
  },
  extend: G3,
  throttle: T_,
  closest: qn,
  toggleClass: vn,
  clone: O_,
  index: Rn,
  nextTick: yl,
  cancelNextTick: Pf,
  detectDirection: j_,
  getChild: Ii,
  expando: an
};
Te.get = function(t) {
  return t[an];
};
Te.mount = function() {
  for (var t = arguments.length, r = new Array(t), s = 0; s < t; s++)
    r[s] = arguments[s];
  r[0].constructor === Array && (r = r[0]), r.forEach(function(a) {
    if (!a.prototype || !a.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(a));
    a.utils && (Te.utils = nr(nr({}, Te.utils), a.utils)), fo.mount(a);
  });
};
Te.create = function(t, r) {
  return new Te(t, r);
};
Te.version = q3;
var St = [], Fs, Lf, If = !1, pf, mf, Nl, Qs;
function l8() {
  function t() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var r in this)
      r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
  }
  return t.prototype = {
    dragStarted: function(s) {
      var a = s.originalEvent;
      this.sortable.nativeDraggable ? He(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? He(document, "pointermove", this._handleFallbackAutoScroll) : a.touches ? He(document, "touchmove", this._handleFallbackAutoScroll) : He(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(s) {
      var a = s.originalEvent;
      !this.options.dragOverBubble && !a.rootEl && this._handleAutoScroll(a);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Ue(document, "dragover", this._handleAutoScroll) : (Ue(document, "pointermove", this._handleFallbackAutoScroll), Ue(document, "touchmove", this._handleFallbackAutoScroll), Ue(document, "mousemove", this._handleFallbackAutoScroll)), qv(), _l(), V3();
    },
    nulling: function() {
      Nl = Lf = Fs = If = Qs = pf = mf = null, St.length = 0;
    },
    _handleFallbackAutoScroll: function(s) {
      this._handleAutoScroll(s, !0);
    },
    _handleAutoScroll: function(s, a) {
      var u = this, c = (s.touches ? s.touches[0] : s).clientX, f = (s.touches ? s.touches[0] : s).clientY, m = document.elementFromPoint(c, f);
      if (Nl = s, a || this.options.forceAutoScrollFallback || co || kr || eo) {
        gf(s, this.options, m, a);
        var p = ea(m, !0);
        If && (!Qs || c !== pf || f !== mf) && (Qs && qv(), Qs = setInterval(function() {
          var v = ea(document.elementFromPoint(c, f), !0);
          v !== p && (p = v, _l()), gf(s, u.options, v, a);
        }, 10), pf = c, mf = f);
      } else {
        if (!this.options.bubbleScroll || ea(m, !0) === er()) {
          _l();
          return;
        }
        gf(s, this.options, ea(m, !1), !1);
      }
    }
  }, Cr(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function _l() {
  St.forEach(function(t) {
    clearInterval(t.pid);
  }), St = [];
}
function qv() {
  clearInterval(Qs);
}
var gf = T_(function(t, r, s, a) {
  if (r.scroll) {
    var u = (t.touches ? t.touches[0] : t).clientX, c = (t.touches ? t.touches[0] : t).clientY, f = r.scrollSensitivity, m = r.scrollSpeed, p = er(), v = !1, g;
    Lf !== s && (Lf = s, _l(), Fs = r.scroll, g = r.scrollFn, Fs === !0 && (Fs = ea(s, !0)));
    var E = 0, y = Fs;
    do {
      var S = y, h = wt(S), C = h.top, x = h.bottom, O = h.left, T = h.right, P = h.width, l = h.height, _ = void 0, w = void 0, k = S.scrollWidth, R = S.scrollHeight, L = xe(S), j = S.scrollLeft, D = S.scrollTop;
      S === p ? (_ = P < k && (L.overflowX === "auto" || L.overflowX === "scroll" || L.overflowX === "visible"), w = l < R && (L.overflowY === "auto" || L.overflowY === "scroll" || L.overflowY === "visible")) : (_ = P < k && (L.overflowX === "auto" || L.overflowX === "scroll"), w = l < R && (L.overflowY === "auto" || L.overflowY === "scroll"));
      var q = _ && (Math.abs(T - u) <= f && j + P < k) - (Math.abs(O - u) <= f && !!j), G = w && (Math.abs(x - c) <= f && D + l < R) - (Math.abs(C - c) <= f && !!D);
      if (!St[E])
        for (var V = 0; V <= E; V++)
          St[V] || (St[V] = {});
      (St[E].vx != q || St[E].vy != G || St[E].el !== S) && (St[E].el = S, St[E].vx = q, St[E].vy = G, clearInterval(St[E].pid), (q != 0 || G != 0) && (v = !0, St[E].pid = setInterval((function() {
        a && this.layer === 0 && Te.active._onTouchMove(Nl);
        var K = St[this.layer].vy ? St[this.layer].vy * m : 0, M = St[this.layer].vx ? St[this.layer].vx * m : 0;
        typeof g == "function" && g.call(Te.dragged.parentNode[an], M, K, t, Nl, St[this.layer].el) !== "continue" || N_(St[this.layer].el, M, K);
      }).bind({
        layer: E
      }), 24))), E++;
    } while (r.bubbleScroll && y !== p && (y = ea(y, !1)));
    If = v;
  }
}, 30), L_ = function(r) {
  var s = r.originalEvent, a = r.putSortable, u = r.dragEl, c = r.activeSortable, f = r.dispatchSortableEvent, m = r.hideGhostForTarget, p = r.unhideGhostForTarget;
  if (s) {
    var v = a || c;
    m();
    var g = s.changedTouches && s.changedTouches.length ? s.changedTouches[0] : s, E = document.elementFromPoint(g.clientX, g.clientY);
    p(), v && !v.el.contains(E) && (f("spill"), this.onSpill({
      dragEl: u,
      putSortable: a
    }));
  }
};
function sh() {
}
sh.prototype = {
  startIndex: null,
  dragStart: function(r) {
    var s = r.oldDraggableIndex;
    this.startIndex = s;
  },
  onSpill: function(r) {
    var s = r.dragEl, a = r.putSortable;
    this.sortable.captureAnimationState(), a && a.captureAnimationState();
    var u = Ii(this.sortable.el, this.startIndex, this.options);
    u ? this.sortable.el.insertBefore(s, u) : this.sortable.el.appendChild(s), this.sortable.animateAll(), a && a.animateAll();
  },
  drop: L_
};
Cr(sh, {
  pluginName: "revertOnSpill"
});
function oh() {
}
oh.prototype = {
  onSpill: function(r) {
    var s = r.dragEl, a = r.putSortable, u = a || this.sortable;
    u.captureAnimationState(), s.parentNode && s.parentNode.removeChild(s), u.animateAll();
  },
  drop: L_
};
Cr(oh, {
  pluginName: "removeOnSpill"
});
Te.mount(new l8());
Te.mount(oh, sh);
async function bl(t, r, s) {
  var a, u, c;
  function f(g) {
    return t.includes("all") || t.includes(g);
  }
  const m = SillyTavern.getContext();
  let p = {};
  const v = n2;
  if (f("global") && v != null && v.length)
    for (const g of v) {
      const E = await c8(g);
      E && (p[g] || (p[g] = []), Object.values(E).forEach((y) => {
        p[g].push(y);
      }));
    }
  if (f("chat")) {
    const g = m.chatMetadata[r2];
    if (g && !p[g]) {
      p[g] = [];
      const E = await m.loadWorldInfo(g);
      E && Object.values(E.entries).forEach((y) => {
        p[g].push(y);
      });
    }
  }
  if (f("character") && s) {
    const g = m.characters[s];
    let E = /* @__PURE__ */ new Set();
    const y = (u = (a = g?.data) == null ? void 0 : a.extensions) == null ? void 0 : u.world;
    y && E.add(y);
    const S = w_(s), h = (c = a2.charLore) == null ? void 0 : c.find((C) => C.name === S);
    h && (E = /* @__PURE__ */ new Set([...E, ...h.extraBooks]));
    for (const C of E) {
      const x = await m.loadWorldInfo(C);
      !x || p[C] || (p[C] = [], Object.values(x.entries).forEach((O) => {
        p[C].push(O);
      }));
    }
  }
  if (f("persona")) {
    const g = m.powerUserSettings.persona_description_lorebook;
    if (g && !p[g]) {
      p[g] = [];
      const E = await m.loadWorldInfo(g);
      E && Object.values(E.entries).forEach((y) => {
        p[g].push(y);
      });
    }
  }
  return p;
}
async function c8(t) {
  const r = await SillyTavern.getContext().loadWorldInfo(t);
  return r ? Object.values(r.entries) : null;
}
const d8 = `=== SILLYTAVERN===

**SillyTavern** is a popular open-source front-end interface designed for interacting with AI language models. It's primarily used for role-playing, creative writing, and conversational experiences, offering a user-friendly platform to customize interactions with AI. Here's an overview:

### Key Features:
1. **AI Backend Compatibility**: Works with APIs like OpenAI (GPT), KoboldAI, Claude, or local models (via services like Text-generation-webui or Ollama).
2. **Customization**:
   - Create and import character cards (with personas, scenarios, and dialogue examples).
   - Adjust model parameters (temperature, repetition penalties) for tailored responses.
3. **Plugins & Extensions**: Adds features like text-to-speech, image generation, emotion recognition, and world-building tools.
4. **Privacy**: Self-hosted locally, giving users control over data (unlike cloud-based services).

### Use Cases:
- Role-playing with AI characters.
- Collaborative storytelling or creative writing.
- Experimental AI interactions (users often share character templates and scripts in communities).

### Requirements:
- Technical setup involves installing Node.js, cloning the GitHub repo, and configuring API connections.
- Requires access to an AI model backend (e.g., OpenAI API key or a locally hosted model).

### Community & Ethics:
- Active communities on platforms like GitHub and Reddit share guides, characters, and plugins.
- Encourages responsible use, as the tool can generate unrestricted content depending on the AI backend.

SillyTavern is not an AI itself but a flexible interface to enhance interactions with LLMs.

=== WORLDINFO (LOREBOOKS) ===

**World Info** (often called **Lorebooks**) is a feature used in AI-driven storytelling and role-playing platforms (like SillyTavern, NovelAI, KoboldAI, or Text-generation-webui) to help AI models maintain consistency in fictional worlds. It acts as a dynamic knowledge base that the AI references during interactions to avoid contradictions and keep track of key details.

---

### **What is World Info/Lorebooks?**
- **A structured database**: Stores details about characters, locations, rules, events, or concepts in your fictional world.
- **Contextual triggers**: Entries activate automatically when specific keywords or phrases appear in the conversation/story.
- **Prevents "amnesia"**: Ensures the AI remembers critical lore without relying solely on its limited context window.

---

### **How It Works**
1. **Create Entries**: Define elements (e.g., a character’s backstory, a magic system’s rules).
2. **Set Triggers**: Link entries to keywords (e.g., mention "Dragonstone" → inject lore about that location).
3. **Dynamic Injection**: When a trigger word appears in the chat/story, the relevant entry is temporarily added to the AI’s context.

---

### **Key Features**
- **Hierarchy**: Organize entries into categories (e.g., factions, items, timelines).
- **Priority**: Set which entries take precedence if multiple triggers occur.
- **Cross-references**: Link entries to each other (e.g., a character entry references their home city).
- **Formatting**: Use markdown, JSON, or plain text depending on the platform.

---

### **Example Lorebook Entry**
\`\`\`plaintext
Name: Dragonstone Citadel
Triggers: Dragonstone, Citadel, Obsidian Fortress
Content:
  A volcanic fortress built from black obsidian. Home to the ancient Order of Flames,
  who guard the Eternal Fire—a magical flame that grants visions of the future.
  The citadel is rumored to be cursed, as its rulers never live past 40 years.
\`\`\`

---

### **Use Cases**
1. **Complex Worldbuilding**: Track political factions, religions, or history.
2. **Character Consistency**: Ensure the AI remembers a character’s motives, secrets, or relationships.
3. **Magic/Science Systems**: Define rules (e.g., "Magic drains lifeforce" or "Robots cannot harm humans").
4. **Plot Hooks**: Store hidden clues or foreshadowing for the AI to weave into the narrative.

---

### **Tools Supporting Lorebooks**
- **SillyTavern**: Integrates with lorebooks via extensions or prompts.
- **NovelAI**: Has a built-in "Lorebook" feature with advanced triggers.
- **KoboldAI/Text-generation-webui**: Use "world info" files or scripts.
- **AIDungeon** (historically): Early adopter of world info, though less popular now.

---

### **Best Practices**
- **Keep entries concise**: AI models process information best in short, clear snippets.
- **Balance detail**: Too many entries can overwhelm the context window.
- **Test triggers**: Ensure keywords are unique enough to avoid false activations.
- **Update dynamically**: Add/remove entries as the story evolves.

Lorebooks are essential for long-term storytelling with AI.`, f8 = `{{#is_not_empty currentLorebooks}}
## CURRENT LOREBOOKS
{{#each currentLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, h8 = `{{#is_not_empty blackListedEntries}}
## BLACKLISTED ENTRIES
{{#each blackListedEntries}}
- {{this}}
{{/each}}
{{/is_not_empty}}`, p8 = `{{#is_not_empty suggestedLorebooks}}
## SUGGESTED LOREBOOKS
{{#each suggestedLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, m8 = `## RESPONSE FORMAT (CRITICAL)

Your entire response MUST be a single \`<lorebooks>\` XML block and nothing else. Any deviation breaks the downstream parser.

**Hard rules:**
1. Output ONLY the \`<lorebooks>...</lorebooks>\` block. No prose, no headings, no markdown, no commentary before or after.
2. Do NOT wrap the XML in code fences (no \`\`\`xml). Emit the raw tags directly.
3. Every \`<entry>\` MUST contain \`<worldName>\`, \`<name>\`, \`<triggers>\`, and \`<content>\` in that order. Include \`<id>\` ONLY when updating an existing entry.
4. \`<triggers>\` is a comma-separated list of keywords.
5. If you have nothing to add, return \`<lorebooks></lorebooks>\` — still no prose.

**Creating a new entry:**
<lorebooks>
    <entry>
        <worldName>World 1</worldName>
        <name>Book 1</name>
        <triggers>word1,word2</triggers>
        <content>Content of book 1</content>
    </entry>
</lorebooks>

**Updating an existing entry** (include \`<id>\` matching the entry you are revising):
<lorebooks>
    <entry>
        <worldName>World 1</worldName>
        <id>15</id>
        <name>Book 1</name>
        <triggers>word1,word2</triggers>
        <content>Content of book 1</content>
    </entry>
</lorebooks>

You may include multiple \`<entry>\` blocks inside a single \`<lorebooks>\` element. Begin your response with \`<lorebooks>\` immediately.`, g8 = `## Rules
- Don't suggest already existing or suggested entries.
{{#if userInstructions}}

## Your Task
{{userInstructions}}{{/if}}`, v8 = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", y8 = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid XML structure that strictly adheres to the provided example.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire XML object in a markdown code block (```xml\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The XML object inside the code block MUST be valid.\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```xml\n{{example_response}}\n```", _8 = `You are an expert lorebook writer assisting a user. Your task is to respond with the modified lorebook data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isEntrySession}}the entry "{{targetEntryName}}".{{else}}the entire set of lorebook entries provided in the context.{{/if}}

The initial lorebook state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, b8 = `{{#is_not_empty changedLorebooks}}
## LOREBOOK UPDATES (Added/Modified)
{{#each changedLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, S8 = `{{#is_not_empty removedEntries}}
## LOREBOOK UPDATES (Removed)
The following entries were removed and will no longer be part of the context:
{{#each removedEntries}}
- **{{this.comment}}** (from {{this.worldName}})
{{/each}}
{{/is_not_empty}}`, w8 = `The following changes were applied to the lorebooks based on the last turn. Unlisted entries are unchanged.
{{{addedModifiedContent}}}
{{{removedContent}}}`, I_ = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", E8 = I_ + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", C8 = "[" + I_ + "][" + E8 + "]*", k8 = new RegExp("^" + C8 + "$");
function B_(t, r) {
  const s = [];
  let a = r.exec(t);
  for (; a; ) {
    const u = [];
    u.startIndex = r.lastIndex - a[0].length;
    const c = a.length;
    for (let f = 0; f < c; f++)
      u.push(a[f]);
    s.push(u), a = r.exec(t);
  }
  return s;
}
const uh = function(t) {
  const r = k8.exec(t);
  return !(r === null || typeof r > "u");
};
function A8(t) {
  return typeof t < "u";
}
const x8 = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function U_(t, r) {
  r = Object.assign({}, x8, r);
  const s = [];
  let a = !1, u = !1;
  t[0] === "\uFEFF" && (t = t.substr(1));
  for (let c = 0; c < t.length; c++)
    if (t[c] === "<" && t[c + 1] === "?") {
      if (c += 2, c = Gv(t, c), c.err) return c;
    } else if (t[c] === "<") {
      let f = c;
      if (c++, t[c] === "!") {
        c = Vv(t, c);
        continue;
      } else {
        let m = !1;
        t[c] === "/" && (m = !0, c++);
        let p = "";
        for (; c < t.length && t[c] !== ">" && t[c] !== " " && t[c] !== "	" && t[c] !== `
` && t[c] !== "\r"; c++)
          p += t[c];
        if (p = p.trim(), p[p.length - 1] === "/" && (p = p.substring(0, p.length - 1), c--), !z8(p)) {
          let E;
          return p.trim().length === 0 ? E = "Invalid space after '<'." : E = "Tag '" + p + "' is an invalid name.", yt("InvalidTag", E, Xt(t, c));
        }
        const v = O8(t, c);
        if (v === !1)
          return yt("InvalidAttr", "Attributes for '" + p + "' have open quote.", Xt(t, c));
        let g = v.value;
        if (c = v.index, g[g.length - 1] === "/") {
          const E = c - g.length;
          g = g.substring(0, g.length - 1);
          const y = $v(g, r);
          if (y === !0)
            a = !0;
          else
            return yt(y.err.code, y.err.msg, Xt(t, E + y.err.line));
        } else if (m)
          if (v.tagClosed) {
            if (g.trim().length > 0)
              return yt("InvalidTag", "Closing tag '" + p + "' can't have attributes or invalid starting.", Xt(t, f));
            if (s.length === 0)
              return yt("InvalidTag", "Closing tag '" + p + "' has not been opened.", Xt(t, f));
            {
              const E = s.pop();
              if (p !== E.tagName) {
                let y = Xt(t, E.tagStartPos);
                return yt(
                  "InvalidTag",
                  "Expected closing tag '" + E.tagName + "' (opened in line " + y.line + ", col " + y.col + ") instead of closing tag '" + p + "'.",
                  Xt(t, f)
                );
              }
              s.length == 0 && (u = !0);
            }
          } else return yt("InvalidTag", "Closing tag '" + p + "' doesn't have proper closing.", Xt(t, c));
        else {
          const E = $v(g, r);
          if (E !== !0)
            return yt(E.err.code, E.err.msg, Xt(t, c - g.length + E.err.line));
          if (u === !0)
            return yt("InvalidXml", "Multiple possible root nodes found.", Xt(t, c));
          r.unpairedTags.indexOf(p) !== -1 || s.push({ tagName: p, tagStartPos: f }), a = !0;
        }
        for (c++; c < t.length; c++)
          if (t[c] === "<")
            if (t[c + 1] === "!") {
              c++, c = Vv(t, c);
              continue;
            } else if (t[c + 1] === "?") {
              if (c = Gv(t, ++c), c.err) return c;
            } else
              break;
          else if (t[c] === "&") {
            const E = j8(t, c);
            if (E == -1)
              return yt("InvalidChar", "char '&' is not expected.", Xt(t, c));
            c = E;
          } else if (u === !0 && !Zv(t[c]))
            return yt("InvalidXml", "Extra text at the end", Xt(t, c));
        t[c] === "<" && c--;
      }
    } else {
      if (Zv(t[c]))
        continue;
      return yt("InvalidChar", "char '" + t[c] + "' is not expected.", Xt(t, c));
    }
  if (a) {
    if (s.length == 1)
      return yt("InvalidTag", "Unclosed tag '" + s[0].tagName + "'.", Xt(t, s[0].tagStartPos));
    if (s.length > 0)
      return yt("InvalidXml", "Invalid '" + JSON.stringify(s.map((c) => c.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return yt("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function Zv(t) {
  return t === " " || t === "	" || t === `
` || t === "\r";
}
function Gv(t, r) {
  const s = r;
  for (; r < t.length; r++)
    if (t[r] == "?" || t[r] == " ") {
      const a = t.substr(s, r - s);
      if (r > 5 && a === "xml")
        return yt("InvalidXml", "XML declaration allowed only at the start of the document.", Xt(t, r));
      if (t[r] == "?" && t[r + 1] == ">") {
        r++;
        break;
      } else
        continue;
    }
  return r;
}
function Vv(t, r) {
  if (t.length > r + 5 && t[r + 1] === "-" && t[r + 2] === "-") {
    for (r += 3; r < t.length; r++)
      if (t[r] === "-" && t[r + 1] === "-" && t[r + 2] === ">") {
        r += 2;
        break;
      }
  } else if (t.length > r + 8 && t[r + 1] === "D" && t[r + 2] === "O" && t[r + 3] === "C" && t[r + 4] === "T" && t[r + 5] === "Y" && t[r + 6] === "P" && t[r + 7] === "E") {
    let s = 1;
    for (r += 8; r < t.length; r++)
      if (t[r] === "<")
        s++;
      else if (t[r] === ">" && (s--, s === 0))
        break;
  } else if (t.length > r + 9 && t[r + 1] === "[" && t[r + 2] === "C" && t[r + 3] === "D" && t[r + 4] === "A" && t[r + 5] === "T" && t[r + 6] === "A" && t[r + 7] === "[") {
    for (r += 8; r < t.length; r++)
      if (t[r] === "]" && t[r + 1] === "]" && t[r + 2] === ">") {
        r += 2;
        break;
      }
  }
  return r;
}
const T8 = '"', N8 = "'";
function O8(t, r) {
  let s = "", a = "", u = !1;
  for (; r < t.length; r++) {
    if (t[r] === T8 || t[r] === N8)
      a === "" ? a = t[r] : a !== t[r] || (a = "");
    else if (t[r] === ">" && a === "") {
      u = !0;
      break;
    }
    s += t[r];
  }
  return a !== "" ? !1 : {
    value: s,
    index: r,
    tagClosed: u
  };
}
const M8 = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function $v(t, r) {
  const s = B_(t, M8), a = {};
  for (let u = 0; u < s.length; u++) {
    if (s[u][1].length === 0)
      return yt("InvalidAttr", "Attribute '" + s[u][2] + "' has no space in starting.", Us(s[u]));
    if (s[u][3] !== void 0 && s[u][4] === void 0)
      return yt("InvalidAttr", "Attribute '" + s[u][2] + "' is without value.", Us(s[u]));
    if (s[u][3] === void 0 && !r.allowBooleanAttributes)
      return yt("InvalidAttr", "boolean attribute '" + s[u][2] + "' is not allowed.", Us(s[u]));
    const c = s[u][2];
    if (!D8(c))
      return yt("InvalidAttr", "Attribute '" + c + "' is an invalid name.", Us(s[u]));
    if (!a.hasOwnProperty(c))
      a[c] = 1;
    else
      return yt("InvalidAttr", "Attribute '" + c + "' is repeated.", Us(s[u]));
  }
  return !0;
}
function R8(t, r) {
  let s = /\d/;
  for (t[r] === "x" && (r++, s = /[\da-fA-F]/); r < t.length; r++) {
    if (t[r] === ";")
      return r;
    if (!t[r].match(s))
      break;
  }
  return -1;
}
function j8(t, r) {
  if (r++, t[r] === ";")
    return -1;
  if (t[r] === "#")
    return r++, R8(t, r);
  let s = 0;
  for (; r < t.length; r++, s++)
    if (!(t[r].match(/\w/) && s < 20)) {
      if (t[r] === ";")
        break;
      return -1;
    }
  return r;
}
function yt(t, r, s) {
  return {
    err: {
      code: t,
      msg: r,
      line: s.line || s,
      col: s.col
    }
  };
}
function D8(t) {
  return uh(t);
}
function z8(t) {
  return uh(t);
}
function Xt(t, r) {
  const s = t.substring(0, r).split(/\r?\n/);
  return {
    line: s.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: s[s.length - 1].length + 1
  };
}
function Us(t) {
  return t.startIndex + t[1].length;
}
const P8 = {
  preserveOrder: !1,
  attributeNamePrefix: "@_",
  attributesGroupName: !1,
  textNodeName: "#text",
  ignoreAttributes: !0,
  removeNSPrefix: !1,
  // remove NS from tag name or attribute name if true
  allowBooleanAttributes: !1,
  //a tag can have attributes without any value
  //ignoreRootElement : false,
  parseTagValue: !0,
  parseAttributeValue: !1,
  trimValues: !0,
  //Trim string values of tag and attributes
  cdataPropName: !1,
  numberParseOptions: {
    hex: !0,
    leadingZeros: !0,
    eNotation: !0
  },
  tagValueProcessor: function(t, r) {
    return r;
  },
  attributeValueProcessor: function(t, r) {
    return r;
  },
  stopNodes: [],
  //nested tags will not be parsed even for errors
  alwaysCreateTextNode: !1,
  isArray: () => !1,
  commentPropName: !1,
  unpairedTags: [],
  processEntities: !0,
  htmlEntities: !1,
  ignoreDeclaration: !1,
  ignorePiTags: !1,
  transformTagName: !1,
  transformAttributeName: !1,
  updateTag: function(t, r, s) {
    return t;
  }
  // skipEmptyListItem: false
}, L8 = function(t) {
  return Object.assign({}, P8, t);
};
class Hs {
  constructor(r) {
    this.tagname = r, this.child = [], this[":@"] = {};
  }
  add(r, s) {
    r === "__proto__" && (r = "#__proto__"), this.child.push({ [r]: s });
  }
  addChild(r) {
    r.tagname === "__proto__" && (r.tagname = "#__proto__"), r[":@"] && Object.keys(r[":@"]).length > 0 ? this.child.push({ [r.tagname]: r.child, ":@": r[":@"] }) : this.child.push({ [r.tagname]: r.child });
  }
}
function I8(t, r) {
  const s = {};
  if (t[r + 3] === "O" && t[r + 4] === "C" && t[r + 5] === "T" && t[r + 6] === "Y" && t[r + 7] === "P" && t[r + 8] === "E") {
    r = r + 9;
    let a = 1, u = !1, c = !1, f = "";
    for (; r < t.length; r++)
      if (t[r] === "<" && !c) {
        if (u && H8(t, r)) {
          r += 7;
          let m, p;
          [m, p, r] = B8(t, r + 1), p.indexOf("&") === -1 && (s[V8(m)] = {
            regx: RegExp(`&${m};`, "g"),
            val: p
          });
        } else if (u && q8(t, r)) r += 8;
        else if (u && Z8(t, r)) r += 8;
        else if (u && G8(t, r)) r += 9;
        else if (U8) c = !0;
        else throw new Error("Invalid DOCTYPE");
        a++, f = "";
      } else if (t[r] === ">") {
        if (c ? t[r - 1] === "-" && t[r - 2] === "-" && (c = !1, a--) : a--, a === 0)
          break;
      } else t[r] === "[" ? u = !0 : f += t[r];
    if (a !== 0)
      throw new Error("Unclosed DOCTYPE");
  } else
    throw new Error("Invalid Tag instead of DOCTYPE");
  return { entities: s, i: r };
}
function B8(t, r) {
  let s = "";
  for (; r < t.length && t[r] !== "'" && t[r] !== '"'; r++)
    s += t[r];
  if (s = s.trim(), s.indexOf(" ") !== -1) throw new Error("External entites are not supported");
  const a = t[r++];
  let u = "";
  for (; r < t.length && t[r] !== a; r++)
    u += t[r];
  return [s, u, r];
}
function U8(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "-" && t[r + 3] === "-";
}
function H8(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "N" && t[r + 4] === "T" && t[r + 5] === "I" && t[r + 6] === "T" && t[r + 7] === "Y";
}
function q8(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "L" && t[r + 4] === "E" && t[r + 5] === "M" && t[r + 6] === "E" && t[r + 7] === "N" && t[r + 8] === "T";
}
function Z8(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "A" && t[r + 3] === "T" && t[r + 4] === "T" && t[r + 5] === "L" && t[r + 6] === "I" && t[r + 7] === "S" && t[r + 8] === "T";
}
function G8(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "N" && t[r + 3] === "O" && t[r + 4] === "T" && t[r + 5] === "A" && t[r + 6] === "T" && t[r + 7] === "I" && t[r + 8] === "O" && t[r + 9] === "N";
}
function V8(t) {
  if (uh(t))
    return t;
  throw new Error(`Invalid entity name ${t}`);
}
const $8 = /^[-+]?0x[a-fA-F0-9]+$/, Y8 = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, X8 = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function F8(t, r = {}) {
  if (r = Object.assign({}, X8, r), !t || typeof t != "string") return t;
  let s = t.trim();
  if (r.skipLike !== void 0 && r.skipLike.test(s)) return t;
  if (t === "0") return 0;
  if (r.hex && $8.test(s))
    return K8(s, 16);
  if (s.search(/[eE]/) !== -1) {
    const a = s.match(/^([-\+])?(0*)([0-9]*(\.[0-9]*)?[eE][-\+]?[0-9]+)$/);
    if (a) {
      if (r.leadingZeros)
        s = (a[1] || "") + a[3];
      else if (!(a[2] === "0" && a[3][0] === ".")) return t;
      return r.eNotation ? Number(s) : t;
    } else
      return t;
  } else {
    const a = Y8.exec(s);
    if (a) {
      const u = a[1], c = a[2];
      let f = Q8(a[3]);
      if (!r.leadingZeros && c.length > 0 && u && s[2] !== ".") return t;
      if (!r.leadingZeros && c.length > 0 && !u && s[1] !== ".") return t;
      if (r.leadingZeros && c === t) return 0;
      {
        const m = Number(s), p = "" + m;
        return p.search(/[eE]/) !== -1 ? r.eNotation ? m : t : s.indexOf(".") !== -1 ? p === "0" && f === "" || p === f || u && p === "-" + f ? m : t : c ? f === p || u + f === p ? m : t : s === p || s === u + p ? m : t;
      }
    } else
      return t;
  }
}
function Q8(t) {
  return t && t.indexOf(".") !== -1 && (t = t.replace(/0+$/, ""), t === "." ? t = "0" : t[0] === "." ? t = "0" + t : t[t.length - 1] === "." && (t = t.substr(0, t.length - 1))), t;
}
function K8(t, r) {
  if (parseInt) return parseInt(t, r);
  if (Number.parseInt) return Number.parseInt(t, r);
  if (window && window.parseInt) return window.parseInt(t, r);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function J8(t) {
  return typeof t == "function" ? t : Array.isArray(t) ? (r) => {
    for (const s of t)
      if (typeof s == "string" && r === s || s instanceof RegExp && s.test(r))
        return !0;
  } : () => !1;
}
class W8 {
  constructor(r) {
    this.options = r, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
      apos: { regex: /&(apos|#39|#x27);/g, val: "'" },
      gt: { regex: /&(gt|#62|#x3E);/g, val: ">" },
      lt: { regex: /&(lt|#60|#x3C);/g, val: "<" },
      quot: { regex: /&(quot|#34|#x22);/g, val: '"' }
    }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = {
      space: { regex: /&(nbsp|#160);/g, val: " " },
      // "lt" : { regex: /&(lt|#60);/g, val: "<" },
      // "gt" : { regex: /&(gt|#62);/g, val: ">" },
      // "amp" : { regex: /&(amp|#38);/g, val: "&" },
      // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
      // "apos" : { regex: /&(apos|#39);/g, val: "'" },
      cent: { regex: /&(cent|#162);/g, val: "¢" },
      pound: { regex: /&(pound|#163);/g, val: "£" },
      yen: { regex: /&(yen|#165);/g, val: "¥" },
      euro: { regex: /&(euro|#8364);/g, val: "€" },
      copyright: { regex: /&(copy|#169);/g, val: "©" },
      reg: { regex: /&(reg|#174);/g, val: "®" },
      inr: { regex: /&(inr|#8377);/g, val: "₹" },
      num_dec: { regex: /&#([0-9]{1,7});/g, val: (s, a) => String.fromCodePoint(Number.parseInt(a, 10)) },
      num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (s, a) => String.fromCodePoint(Number.parseInt(a, 16)) }
    }, this.addExternalEntities = eS, this.parseXml = iS, this.parseTextData = tS, this.resolveNameSpace = nS, this.buildAttributesMap = aS, this.isItStopNode = lS, this.replaceEntitiesValue = oS, this.readStopNodeData = dS, this.saveTextToParentTag = uS, this.addChild = sS, this.ignoreAttributesFn = J8(this.options.ignoreAttributes);
  }
}
function eS(t) {
  const r = Object.keys(t);
  for (let s = 0; s < r.length; s++) {
    const a = r[s];
    this.lastEntities[a] = {
      regex: new RegExp("&" + a + ";", "g"),
      val: t[a]
    };
  }
}
function tS(t, r, s, a, u, c, f) {
  if (t !== void 0 && (this.options.trimValues && !a && (t = t.trim()), t.length > 0)) {
    f || (t = this.replaceEntitiesValue(t));
    const m = this.options.tagValueProcessor(r, t, s, u, c);
    return m == null ? t : typeof m != typeof t || m !== t ? m : this.options.trimValues ? Uf(t, this.options.parseTagValue, this.options.numberParseOptions) : t.trim() === t ? Uf(t, this.options.parseTagValue, this.options.numberParseOptions) : t;
  }
}
function nS(t) {
  if (this.options.removeNSPrefix) {
    const r = t.split(":"), s = t.charAt(0) === "/" ? "/" : "";
    if (r[0] === "xmlns")
      return "";
    r.length === 2 && (t = s + r[1]);
  }
  return t;
}
const rS = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function aS(t, r, s) {
  if (this.options.ignoreAttributes !== !0 && typeof t == "string") {
    const a = B_(t, rS), u = a.length, c = {};
    for (let f = 0; f < u; f++) {
      const m = this.resolveNameSpace(a[f][1]);
      if (this.ignoreAttributesFn(m, r))
        continue;
      let p = a[f][4], v = this.options.attributeNamePrefix + m;
      if (m.length)
        if (this.options.transformAttributeName && (v = this.options.transformAttributeName(v)), v === "__proto__" && (v = "#__proto__"), p !== void 0) {
          this.options.trimValues && (p = p.trim()), p = this.replaceEntitiesValue(p);
          const g = this.options.attributeValueProcessor(m, p, r);
          g == null ? c[v] = p : typeof g != typeof p || g !== p ? c[v] = g : c[v] = Uf(
            p,
            this.options.parseAttributeValue,
            this.options.numberParseOptions
          );
        } else this.options.allowBooleanAttributes && (c[v] = !0);
    }
    if (!Object.keys(c).length)
      return;
    if (this.options.attributesGroupName) {
      const f = {};
      return f[this.options.attributesGroupName] = c, f;
    }
    return c;
  }
}
const iS = function(t) {
  t = t.replace(/\r\n?/g, `
`);
  const r = new Hs("!xml");
  let s = r, a = "", u = "";
  for (let c = 0; c < t.length; c++)
    if (t[c] === "<")
      if (t[c + 1] === "/") {
        const m = ja(t, ">", c, "Closing Tag is not closed.");
        let p = t.substring(c + 2, m).trim();
        if (this.options.removeNSPrefix) {
          const E = p.indexOf(":");
          E !== -1 && (p = p.substr(E + 1));
        }
        this.options.transformTagName && (p = this.options.transformTagName(p)), s && (a = this.saveTextToParentTag(a, s, u));
        const v = u.substring(u.lastIndexOf(".") + 1);
        if (p && this.options.unpairedTags.indexOf(p) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${p}>`);
        let g = 0;
        v && this.options.unpairedTags.indexOf(v) !== -1 ? (g = u.lastIndexOf(".", u.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : g = u.lastIndexOf("."), u = u.substring(0, g), s = this.tagsNodeStack.pop(), a = "", c = m;
      } else if (t[c + 1] === "?") {
        let m = Bf(t, c, !1, "?>");
        if (!m) throw new Error("Pi Tag is not closed.");
        if (a = this.saveTextToParentTag(a, s, u), !(this.options.ignoreDeclaration && m.tagName === "?xml" || this.options.ignorePiTags)) {
          const p = new Hs(m.tagName);
          p.add(this.options.textNodeName, ""), m.tagName !== m.tagExp && m.attrExpPresent && (p[":@"] = this.buildAttributesMap(m.tagExp, u, m.tagName)), this.addChild(s, p, u);
        }
        c = m.closeIndex + 1;
      } else if (t.substr(c + 1, 3) === "!--") {
        const m = ja(t, "-->", c + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const p = t.substring(c + 4, m - 2);
          a = this.saveTextToParentTag(a, s, u), s.add(this.options.commentPropName, [{ [this.options.textNodeName]: p }]);
        }
        c = m;
      } else if (t.substr(c + 1, 2) === "!D") {
        const m = I8(t, c);
        this.docTypeEntities = m.entities, c = m.i;
      } else if (t.substr(c + 1, 2) === "![") {
        const m = ja(t, "]]>", c, "CDATA is not closed.") - 2, p = t.substring(c + 9, m);
        a = this.saveTextToParentTag(a, s, u);
        let v = this.parseTextData(p, s.tagname, u, !0, !1, !0, !0);
        v == null && (v = ""), this.options.cdataPropName ? s.add(this.options.cdataPropName, [{ [this.options.textNodeName]: p }]) : s.add(this.options.textNodeName, v), c = m + 2;
      } else {
        let m = Bf(t, c, this.options.removeNSPrefix), p = m.tagName;
        const v = m.rawTagName;
        let g = m.tagExp, E = m.attrExpPresent, y = m.closeIndex;
        this.options.transformTagName && (p = this.options.transformTagName(p)), s && a && s.tagname !== "!xml" && (a = this.saveTextToParentTag(a, s, u, !1));
        const S = s;
        if (S && this.options.unpairedTags.indexOf(S.tagname) !== -1 && (s = this.tagsNodeStack.pop(), u = u.substring(0, u.lastIndexOf("."))), p !== r.tagname && (u += u ? "." + p : p), this.isItStopNode(this.options.stopNodes, u, p)) {
          let h = "";
          if (g.length > 0 && g.lastIndexOf("/") === g.length - 1)
            p[p.length - 1] === "/" ? (p = p.substr(0, p.length - 1), u = u.substr(0, u.length - 1), g = p) : g = g.substr(0, g.length - 1), c = m.closeIndex;
          else if (this.options.unpairedTags.indexOf(p) !== -1)
            c = m.closeIndex;
          else {
            const x = this.readStopNodeData(t, v, y + 1);
            if (!x) throw new Error(`Unexpected end of ${v}`);
            c = x.i, h = x.tagContent;
          }
          const C = new Hs(p);
          p !== g && E && (C[":@"] = this.buildAttributesMap(g, u, p)), h && (h = this.parseTextData(h, p, u, !0, E, !0, !0)), u = u.substr(0, u.lastIndexOf(".")), C.add(this.options.textNodeName, h), this.addChild(s, C, u);
        } else {
          if (g.length > 0 && g.lastIndexOf("/") === g.length - 1) {
            p[p.length - 1] === "/" ? (p = p.substr(0, p.length - 1), u = u.substr(0, u.length - 1), g = p) : g = g.substr(0, g.length - 1), this.options.transformTagName && (p = this.options.transformTagName(p));
            const h = new Hs(p);
            p !== g && E && (h[":@"] = this.buildAttributesMap(g, u, p)), this.addChild(s, h, u), u = u.substr(0, u.lastIndexOf("."));
          } else {
            const h = new Hs(p);
            this.tagsNodeStack.push(s), p !== g && E && (h[":@"] = this.buildAttributesMap(g, u, p)), this.addChild(s, h, u), s = h;
          }
          a = "", c = y;
        }
      }
    else
      a += t[c];
  return r.child;
};
function sS(t, r, s) {
  const a = this.options.updateTag(r.tagname, s, r[":@"]);
  a === !1 || (typeof a == "string" && (r.tagname = a), t.addChild(r));
}
const oS = function(t) {
  if (this.options.processEntities) {
    for (let r in this.docTypeEntities) {
      const s = this.docTypeEntities[r];
      t = t.replace(s.regx, s.val);
    }
    for (let r in this.lastEntities) {
      const s = this.lastEntities[r];
      t = t.replace(s.regex, s.val);
    }
    if (this.options.htmlEntities)
      for (let r in this.htmlEntities) {
        const s = this.htmlEntities[r];
        t = t.replace(s.regex, s.val);
      }
    t = t.replace(this.ampEntity.regex, this.ampEntity.val);
  }
  return t;
};
function uS(t, r, s, a) {
  return t && (a === void 0 && (a = r.child.length === 0), t = this.parseTextData(
    t,
    r.tagname,
    s,
    !1,
    r[":@"] ? Object.keys(r[":@"]).length !== 0 : !1,
    a
  ), t !== void 0 && t !== "" && r.add(this.options.textNodeName, t), t = ""), t;
}
function lS(t, r, s) {
  const a = "*." + s;
  for (const u in t) {
    const c = t[u];
    if (a === c || r === c) return !0;
  }
  return !1;
}
function cS(t, r, s = ">") {
  let a, u = "";
  for (let c = r; c < t.length; c++) {
    let f = t[c];
    if (a)
      f === a && (a = "");
    else if (f === '"' || f === "'")
      a = f;
    else if (f === s[0])
      if (s[1]) {
        if (t[c + 1] === s[1])
          return {
            data: u,
            index: c
          };
      } else
        return {
          data: u,
          index: c
        };
    else f === "	" && (f = " ");
    u += f;
  }
}
function ja(t, r, s, a) {
  const u = t.indexOf(r, s);
  if (u === -1)
    throw new Error(a);
  return u + r.length - 1;
}
function Bf(t, r, s, a = ">") {
  const u = cS(t, r + 1, a);
  if (!u) return;
  let c = u.data;
  const f = u.index, m = c.search(/\s/);
  let p = c, v = !0;
  m !== -1 && (p = c.substring(0, m), c = c.substring(m + 1).trimStart());
  const g = p;
  if (s) {
    const E = p.indexOf(":");
    E !== -1 && (p = p.substr(E + 1), v = p !== u.data.substr(E + 1));
  }
  return {
    tagName: p,
    tagExp: c,
    closeIndex: f,
    attrExpPresent: v,
    rawTagName: g
  };
}
function dS(t, r, s) {
  const a = s;
  let u = 1;
  for (; s < t.length; s++)
    if (t[s] === "<")
      if (t[s + 1] === "/") {
        const c = ja(t, ">", s, `${r} is not closed`);
        if (t.substring(s + 2, c).trim() === r && (u--, u === 0))
          return {
            tagContent: t.substring(a, s),
            i: c
          };
        s = c;
      } else if (t[s + 1] === "?")
        s = ja(t, "?>", s + 1, "StopNode is not closed.");
      else if (t.substr(s + 1, 3) === "!--")
        s = ja(t, "-->", s + 3, "StopNode is not closed.");
      else if (t.substr(s + 1, 2) === "![")
        s = ja(t, "]]>", s, "StopNode is not closed.") - 2;
      else {
        const c = Bf(t, s, ">");
        c && ((c && c.tagName) === r && c.tagExp[c.tagExp.length - 1] !== "/" && u++, s = c.closeIndex);
      }
}
function Uf(t, r, s) {
  if (r && typeof t == "string") {
    const a = t.trim();
    return a === "true" ? !0 : a === "false" ? !1 : F8(t, s);
  } else
    return A8(t) ? t : "";
}
function fS(t, r) {
  return H_(t, r);
}
function H_(t, r, s) {
  let a;
  const u = {};
  for (let c = 0; c < t.length; c++) {
    const f = t[c], m = hS(f);
    let p = "";
    if (s === void 0 ? p = m : p = s + "." + m, m === r.textNodeName)
      a === void 0 ? a = f[m] : a += "" + f[m];
    else {
      if (m === void 0)
        continue;
      if (f[m]) {
        let v = H_(f[m], r, p);
        const g = mS(v, r);
        f[":@"] ? pS(v, f[":@"], p, r) : Object.keys(v).length === 1 && v[r.textNodeName] !== void 0 && !r.alwaysCreateTextNode ? v = v[r.textNodeName] : Object.keys(v).length === 0 && (r.alwaysCreateTextNode ? v[r.textNodeName] = "" : v = ""), u[m] !== void 0 && u.hasOwnProperty(m) ? (Array.isArray(u[m]) || (u[m] = [u[m]]), u[m].push(v)) : r.isArray(m, p, g) ? u[m] = [v] : u[m] = v;
      }
    }
  }
  return typeof a == "string" ? a.length > 0 && (u[r.textNodeName] = a) : a !== void 0 && (u[r.textNodeName] = a), u;
}
function hS(t) {
  const r = Object.keys(t);
  for (let s = 0; s < r.length; s++) {
    const a = r[s];
    if (a !== ":@") return a;
  }
}
function pS(t, r, s, a) {
  if (r) {
    const u = Object.keys(r), c = u.length;
    for (let f = 0; f < c; f++) {
      const m = u[f];
      a.isArray(m, s + "." + m, !0, !0) ? t[m] = [r[m]] : t[m] = r[m];
    }
  }
}
function mS(t, r) {
  const { textNodeName: s } = r, a = Object.keys(t).length;
  return !!(a === 0 || a === 1 && (t[s] || typeof t[s] == "boolean" || t[s] === 0));
}
class q_ {
  constructor(r) {
    this.externalEntities = {}, this.options = L8(r);
  }
  /**
   * Parse XML dats to JS object 
   * @param {string|Buffer} xmlData 
   * @param {boolean|Object} validationOption 
   */
  parse(r, s) {
    if (typeof r != "string") if (r.toString)
      r = r.toString();
    else
      throw new Error("XML data is accepted in String or Bytes[] form.");
    if (s) {
      s === !0 && (s = {});
      const c = U_(r, s);
      if (c !== !0)
        throw Error(`${c.err.msg}:${c.err.line}:${c.err.col}`);
    }
    const a = new W8(this.options);
    a.addExternalEntities(this.externalEntities);
    const u = a.parseXml(r);
    return this.options.preserveOrder || u === void 0 ? u : fS(u, this.options);
  }
  /**
   * Add Entity which is not by default supported by this library
   * @param {string} key 
   * @param {string} value 
   */
  addEntity(r, s) {
    if (s.indexOf("&") !== -1)
      throw new Error("Entity value can't have '&'");
    if (r.indexOf("&") !== -1 || r.indexOf(";") !== -1)
      throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
    if (s === "&")
      throw new Error("An entity with value '&' is not permitted");
    this.externalEntities[r] = s;
  }
}
const gS = {
  validate: U_
}, vS = new q_();
function yS(t) {
  const r = Math.pow(10, t - 1), s = Math.pow(10, t) - 1;
  return Math.floor(Math.random() * (s - r + 1)) + r;
}
function _S(t, r = {}) {
  let s = t;
  const { previousContent: a } = r;
  s = s.replace(/```xml/g, "").replace(/```/g, ""), s = s.replace(/<think(?:ing)?[^>]*>[\s\S]*?<\/think(?:ing)?>/gi, ""), s = s.replace(/<reasoning[^>]*>[\s\S]*?<\/reasoning>/gi, ""), a && (s = a + s.trimEnd());
  const u = s.match(/<lorebooks>[\s\S]*<\/lorebooks>/i) ?? s.match(/<lorebook>[\s\S]*<\/lorebook>/i);
  if (u && (s = u[0]), s.includes("<entry>") && !s.includes("</entry>"))
    throw new Error("Incomplete XML: Missing </entry> tag");
  if (s.includes("<content>") && !s.includes("</content>"))
    throw new Error("Incomplete XML: Missing </content> tag");
  const c = {};
  try {
    const f = vS.parse(s), m = f.lorebooks ?? f.lorebook;
    if (!m || !m.entry)
      return c;
    const p = Array.isArray(m.entry) ? m.entry : [m.entry];
    for (const v of p) {
      const g = v.worldName;
      g && (c[g] || (c[g] = []), c[g].push({
        uid: v.id ?? yS(6),
        key: v.triggers?.split(",").map((E) => E.trim()) ?? [],
        content: v.content ?? "",
        comment: v.name ?? "",
        disable: !1,
        keysecondary: []
      }));
    }
    return c;
  } catch (f) {
    throw console.error(f), new Error("Model response is not valid XML");
  }
}
function bS(t, r) {
  return `
<lorebooks>
  <entry>
    <worldName>${t}</worldName>
    <id>${r.uid}</id>
    <name>${r.comment}</name>
    <triggers>${r.key.join(",")}</triggers>
    <content>${r.content}`;
}
function SS(t, r) {
  return `
<lorebooks>
  <entry>
    <worldName>${t}</worldName>
    <id>${r.uid}</id>
    <name>${r.comment}</name>
    <triggers>${r.key.join(",")}</triggers>
    <content>${r.content}</content>
  </entry>
</lorebooks>`;
}
const Mt = SillyTavern.getContext(), io = Mt, on = (t) => structuredClone(t ?? {}), so = /* @__PURE__ */ new Map(), vf = (t, r) => {
  for (const s of Object.keys(t))
    delete t[s];
  Object.assign(t, on(r));
}, ho = () => Mt.extensionSettings.connectionManager?.profiles ?? [];
function wS() {
  return ho();
}
function Z_(t) {
  if (t)
    return ho().find((r) => r.id === t);
}
function lh(t) {
  if (!t) return;
  const r = Z_(t), s = so.get(t);
  return !r || !s ? r : { ...on(s), id: t };
}
function Yv(t, r = t.id) {
  r && so.set(r, { ...on(t), id: r });
}
function oo(t) {
  if (t) {
    so.delete(t);
    return;
  }
  so.clear();
}
async function G_(t, r) {
  const s = lh(t);
  if (!s)
    throw new Error(`Connection profile with ID "${t}" not found.`);
  if (!so.has(t))
    return r(t, s);
  const a = ho(), u = {
    ...on(s),
    id: `world-info-recommender-${Mt.uuidv4()}`,
    name: s.name ? `${s.name} (World Info Recommender draft)` : "World Info Recommender draft"
  };
  a.push(u);
  try {
    return await r(u.id, u);
  } finally {
    const c = a.findIndex((f) => f.id === u.id);
    c !== -1 && a.splice(c, 1);
  }
}
function Ks(t) {
  return (t.api ? Mt.CONNECT_API_MAP[t.api] : void 0)?.selected === "openai" ? "openai" : "textgenerationwebui";
}
function Hf(t) {
  return t.api ? Mt.CONNECT_API_MAP[t.api]?.selected ?? "" : "";
}
function ch(t) {
  return Mt.getPresetManager(t);
}
function yf(t) {
  const r = lh(t);
  if (!r) return;
  const s = Ks(r), a = ch(s), u = r.preset ? a?.getCompletionPresetByName(r.preset) : void 0;
  return {
    profile: on(r),
    preset: on(u ?? {}),
    presetApiId: s,
    selectedApiGroup: Hf(r)
  };
}
async function ES(t) {
  if (!t.id)
    throw new Error("Profile must have an id.");
  if (!t.name?.trim())
    throw new Error("Profile name cannot be empty.");
  const r = ho(), s = r.findIndex((u) => u.id === t.id);
  if (s === -1)
    throw new Error(`Profile not found: ${t.id}`);
  const a = on(r[s]);
  return r[s] = on(t), Mt.saveSettingsDebounced(), await Mt.eventSource.emit(io.eventTypes.CONNECTION_PROFILE_UPDATED, a, r[s]), oo(t.id), r[s];
}
async function CS(t, r, s, a) {
  const u = a.trim();
  if (!u)
    throw new Error("Profile name cannot be empty.");
  const c = ho();
  if (c.some((p) => p.name === u))
    throw new Error(`A profile named "${u}" already exists.`);
  const f = ch(s);
  if (!f?.savePreset)
    throw new Error(`Could not find the ${s} preset manager.`);
  await f.savePreset(u, on(r));
  const m = {
    ...on(t),
    id: Mt.uuidv4(),
    name: u,
    preset: u
  };
  return c.push(m), Mt.saveSettingsDebounced(), await Mt.eventSource.emit(io.eventTypes.CONNECTION_PROFILE_CREATED, m), m;
}
async function kS(t, r, s) {
  if (!t.preset?.trim())
    throw new Error("Profile must have a preset name before saving preset settings.");
  const a = ch(s);
  if (!a?.savePreset)
    throw new Error(`Could not find the ${s} preset manager.`);
  await a.savePreset(t.preset, on(r));
}
function AS() {
  return {
    selectedProfile: io.extensionSettings.connectionManager?.selectedProfile ?? null,
    chatCompletionSettings: on(Mt.chatCompletionSettings),
    textCompletionSettings: on(Mt.textCompletionSettings),
    powerUserSettings: on(Mt.powerUserSettings)
  };
}
async function xS(t) {
  if (t)
    try {
      const r = t.selectedProfile, s = r ? !!Z_(r) : !1, a = r && s ? r : null;
      vf(Mt.chatCompletionSettings, t.chatCompletionSettings), vf(Mt.textCompletionSettings, t.textCompletionSettings), vf(Mt.powerUserSettings, t.powerUserSettings), io.extensionSettings.connectionManager && (io.extensionSettings.connectionManager.selectedProfile = a);
      const u = document.getElementById("connection_profiles");
      u instanceof HTMLSelectElement && (u.value = a ?? ""), oo(), Mt.saveSettingsDebounced();
    } catch (r) {
      console.error("[WorldInfoRecommender] Failed to restore SillyTavern API settings:", r), await ge("warning", "Failed to restore SillyTavern API settings after closing World Info Recommender.");
    }
}
var zu = { exports: {} }, Pu = { exports: {} }, Un = {}, rn = {}, Xv;
function un() {
  if (Xv) return rn;
  Xv = 1, rn.__esModule = !0, rn.extend = u, rn.indexOf = p, rn.escapeExpression = v, rn.isEmpty = g, rn.createFrame = E, rn.blockParams = y, rn.appendContextPath = S;
  var t = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
    "=": "&#x3D;"
  }, r = /[&<>"'`=]/g, s = /[&<>"'`=]/;
  function a(h) {
    return t[h];
  }
  function u(h) {
    for (var C = 1; C < arguments.length; C++)
      for (var x in arguments[C])
        Object.prototype.hasOwnProperty.call(arguments[C], x) && (h[x] = arguments[C][x]);
    return h;
  }
  var c = Object.prototype.toString;
  rn.toString = c;
  var f = function(C) {
    return typeof C == "function";
  };
  f(/x/) && (rn.isFunction = f = function(h) {
    return typeof h == "function" && c.call(h) === "[object Function]";
  }), rn.isFunction = f;
  var m = Array.isArray || function(h) {
    return h && typeof h == "object" ? c.call(h) === "[object Array]" : !1;
  };
  rn.isArray = m;
  function p(h, C) {
    for (var x = 0, O = h.length; x < O; x++)
      if (h[x] === C)
        return x;
    return -1;
  }
  function v(h) {
    if (typeof h != "string") {
      if (h && h.toHTML)
        return h.toHTML();
      if (h == null)
        return "";
      if (!h)
        return h + "";
      h = "" + h;
    }
    return s.test(h) ? h.replace(r, a) : h;
  }
  function g(h) {
    return !h && h !== 0 ? !0 : !!(m(h) && h.length === 0);
  }
  function E(h) {
    var C = u({}, h);
    return C._parent = h, C;
  }
  function y(h, C) {
    return h.path = C, h;
  }
  function S(h, C) {
    return (h ? h + "." : "") + C;
  }
  return rn;
}
var Lu = { exports: {} }, Fv;
function Gn() {
  return Fv || (Fv = 1, (function(t, r) {
    r.__esModule = !0;
    var s = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function a(u, c) {
      var f = c && c.loc, m = void 0, p = void 0, v = void 0, g = void 0;
      f && (m = f.start.line, p = f.end.line, v = f.start.column, g = f.end.column, u += " - " + m + ":" + v);
      for (var E = Error.prototype.constructor.call(this, u), y = 0; y < s.length; y++)
        this[s[y]] = E[s[y]];
      Error.captureStackTrace && Error.captureStackTrace(this, a);
      try {
        f && (this.lineNumber = m, this.endLineNumber = p, Object.defineProperty ? (Object.defineProperty(this, "column", {
          value: v,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: g,
          enumerable: !0
        })) : (this.column = v, this.endColumn = g));
      } catch {
      }
    }
    a.prototype = new Error(), r.default = a, t.exports = r.default;
  })(Lu, Lu.exports)), Lu.exports;
}
var qs = {}, Iu = { exports: {} }, Qv;
function TS() {
  return Qv || (Qv = 1, (function(t, r) {
    r.__esModule = !0;
    var s = un();
    r.default = function(a) {
      a.registerHelper("blockHelperMissing", function(u, c) {
        var f = c.inverse, m = c.fn;
        if (u === !0)
          return m(this);
        if (u === !1 || u == null)
          return f(this);
        if (s.isArray(u))
          return u.length > 0 ? (c.ids && (c.ids = [c.name]), a.helpers.each(u, c)) : f(this);
        if (c.data && c.ids) {
          var p = s.createFrame(c.data);
          p.contextPath = s.appendContextPath(c.data.contextPath, c.name), c = { data: p };
        }
        return m(u, c);
      });
    }, t.exports = r.default;
  })(Iu, Iu.exports)), Iu.exports;
}
var Bu = { exports: {} }, Kv;
function NS() {
  return Kv || (Kv = 1, (function(t, r) {
    r.__esModule = !0;
    function s(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var a = un(), u = Gn(), c = s(u);
    r.default = function(f) {
      f.registerHelper("each", function(m, p) {
        if (!p)
          throw new c.default("Must pass iterator to #each");
        var v = p.fn, g = p.inverse, E = 0, y = "", S = void 0, h = void 0;
        p.data && p.ids && (h = a.appendContextPath(p.data.contextPath, p.ids[0]) + "."), a.isFunction(m) && (m = m.call(this)), p.data && (S = a.createFrame(p.data));
        function C(l, _, w) {
          S && (S.key = l, S.index = _, S.first = _ === 0, S.last = !!w, h && (S.contextPath = h + l)), y = y + v(m[l], {
            data: S,
            blockParams: a.blockParams([m[l], l], [h + l, null])
          });
        }
        if (m && typeof m == "object")
          if (a.isArray(m))
            for (var x = m.length; E < x; E++)
              E in m && C(E, E, E === m.length - 1);
          else if (typeof Symbol == "function" && m[Symbol.iterator]) {
            for (var O = [], T = m[Symbol.iterator](), P = T.next(); !P.done; P = T.next())
              O.push(P.value);
            m = O;
            for (var x = m.length; E < x; E++)
              C(E, E, E === m.length - 1);
          } else
            (function() {
              var l = void 0;
              Object.keys(m).forEach(function(_) {
                l !== void 0 && C(l, E - 1), l = _, E++;
              }), l !== void 0 && C(l, E - 1, !0);
            })();
        return E === 0 && (y = g(this)), y;
      });
    }, t.exports = r.default;
  })(Bu, Bu.exports)), Bu.exports;
}
var Uu = { exports: {} }, Jv;
function OS() {
  return Jv || (Jv = 1, (function(t, r) {
    r.__esModule = !0;
    function s(c) {
      return c && c.__esModule ? c : { default: c };
    }
    var a = Gn(), u = s(a);
    r.default = function(c) {
      c.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new u.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, t.exports = r.default;
  })(Uu, Uu.exports)), Uu.exports;
}
var Hu = { exports: {} }, Wv;
function MS() {
  return Wv || (Wv = 1, (function(t, r) {
    r.__esModule = !0;
    function s(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var a = un(), u = Gn(), c = s(u);
    r.default = function(f) {
      f.registerHelper("if", function(m, p) {
        if (arguments.length != 2)
          throw new c.default("#if requires exactly one argument");
        return a.isFunction(m) && (m = m.call(this)), !p.hash.includeZero && !m || a.isEmpty(m) ? p.inverse(this) : p.fn(this);
      }), f.registerHelper("unless", function(m, p) {
        if (arguments.length != 2)
          throw new c.default("#unless requires exactly one argument");
        return f.helpers.if.call(this, m, {
          fn: p.inverse,
          inverse: p.fn,
          hash: p.hash
        });
      });
    }, t.exports = r.default;
  })(Hu, Hu.exports)), Hu.exports;
}
var qu = { exports: {} }, ey;
function RS() {
  return ey || (ey = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(s) {
      s.registerHelper("log", function() {
        for (var a = [void 0], u = arguments[arguments.length - 1], c = 0; c < arguments.length - 1; c++)
          a.push(arguments[c]);
        var f = 1;
        u.hash.level != null ? f = u.hash.level : u.data && u.data.level != null && (f = u.data.level), a[0] = f, s.log.apply(s, a);
      });
    }, t.exports = r.default;
  })(qu, qu.exports)), qu.exports;
}
var Zu = { exports: {} }, ty;
function jS() {
  return ty || (ty = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(s) {
      s.registerHelper("lookup", function(a, u, c) {
        return a && c.lookupProperty(a, u);
      });
    }, t.exports = r.default;
  })(Zu, Zu.exports)), Zu.exports;
}
var Gu = { exports: {} }, ny;
function DS() {
  return ny || (ny = 1, (function(t, r) {
    r.__esModule = !0;
    function s(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var a = un(), u = Gn(), c = s(u);
    r.default = function(f) {
      f.registerHelper("with", function(m, p) {
        if (arguments.length != 2)
          throw new c.default("#with requires exactly one argument");
        a.isFunction(m) && (m = m.call(this));
        var v = p.fn;
        if (a.isEmpty(m))
          return p.inverse(this);
        var g = p.data;
        return p.data && p.ids && (g = a.createFrame(p.data), g.contextPath = a.appendContextPath(p.data.contextPath, p.ids[0])), v(m, {
          data: g,
          blockParams: a.blockParams([m], [g && g.contextPath])
        });
      });
    }, t.exports = r.default;
  })(Gu, Gu.exports)), Gu.exports;
}
var ry;
function V_() {
  if (ry) return qs;
  ry = 1, qs.__esModule = !0, qs.registerDefaultHelpers = C, qs.moveHelperToHooks = x;
  function t(O) {
    return O && O.__esModule ? O : { default: O };
  }
  var r = TS(), s = t(r), a = NS(), u = t(a), c = OS(), f = t(c), m = MS(), p = t(m), v = RS(), g = t(v), E = jS(), y = t(E), S = DS(), h = t(S);
  function C(O) {
    s.default(O), u.default(O), f.default(O), p.default(O), g.default(O), y.default(O), h.default(O);
  }
  function x(O, T, P) {
    O.helpers[T] && (O.hooks[T] = O.helpers[T], P || delete O.helpers[T]);
  }
  return qs;
}
var Vu = {}, $u = { exports: {} }, ay;
function zS() {
  return ay || (ay = 1, (function(t, r) {
    r.__esModule = !0;
    var s = un();
    r.default = function(a) {
      a.registerDecorator("inline", function(u, c, f, m) {
        var p = u;
        return c.partials || (c.partials = {}, p = function(v, g) {
          var E = f.partials;
          f.partials = s.extend({}, E, c.partials);
          var y = u(v, g);
          return f.partials = E, y;
        }), c.partials[m.args[0]] = m.fn, p;
      });
    }, t.exports = r.default;
  })($u, $u.exports)), $u.exports;
}
var iy;
function PS() {
  if (iy) return Vu;
  iy = 1, Vu.__esModule = !0, Vu.registerDefaultDecorators = a;
  function t(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var r = zS(), s = t(r);
  function a(u) {
    s.default(u);
  }
  return Vu;
}
var Yu = { exports: {} }, sy;
function $_() {
  return sy || (sy = 1, (function(t, r) {
    r.__esModule = !0;
    var s = un(), a = {
      methodMap: ["debug", "info", "warn", "error"],
      level: "info",
      // Maps a given level value to the `methodMap` indexes above.
      lookupLevel: function(c) {
        if (typeof c == "string") {
          var f = s.indexOf(a.methodMap, c.toLowerCase());
          f >= 0 ? c = f : c = parseInt(c, 10);
        }
        return c;
      },
      // Can be overridden in the host environment
      log: function(c) {
        if (c = a.lookupLevel(c), typeof console < "u" && a.lookupLevel(a.level) <= c) {
          var f = a.methodMap[c];
          console[f] || (f = "log");
          for (var m = arguments.length, p = Array(m > 1 ? m - 1 : 0), v = 1; v < m; v++)
            p[v - 1] = arguments[v];
          console[f].apply(console, p);
        }
      }
    };
    r.default = a, t.exports = r.default;
  })(Yu, Yu.exports)), Yu.exports;
}
var Ni = {}, Xu = {}, oy;
function LS() {
  if (oy) return Xu;
  oy = 1, Xu.__esModule = !0, Xu.createNewLookupObject = r;
  var t = un();
  function r() {
    for (var s = arguments.length, a = Array(s), u = 0; u < s; u++)
      a[u] = arguments[u];
    return t.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(a));
  }
  return Xu;
}
var uy;
function Y_() {
  if (uy) return Ni;
  uy = 1, Ni.__esModule = !0, Ni.createProtoAccessControl = c, Ni.resultIsAllowed = f, Ni.resetLoggedProperties = v;
  function t(g) {
    return g && g.__esModule ? g : { default: g };
  }
  var r = LS(), s = $_(), a = t(s), u = /* @__PURE__ */ Object.create(null);
  function c(g) {
    var E = /* @__PURE__ */ Object.create(null);
    E.constructor = !1, E.__defineGetter__ = !1, E.__defineSetter__ = !1, E.__lookupGetter__ = !1;
    var y = /* @__PURE__ */ Object.create(null);
    return y.__proto__ = !1, {
      properties: {
        whitelist: r.createNewLookupObject(y, g.allowedProtoProperties),
        defaultValue: g.allowProtoPropertiesByDefault
      },
      methods: {
        whitelist: r.createNewLookupObject(E, g.allowedProtoMethods),
        defaultValue: g.allowProtoMethodsByDefault
      }
    };
  }
  function f(g, E, y) {
    return m(typeof g == "function" ? E.methods : E.properties, y);
  }
  function m(g, E) {
    return g.whitelist[E] !== void 0 ? g.whitelist[E] === !0 : g.defaultValue !== void 0 ? g.defaultValue : (p(E), !1);
  }
  function p(g) {
    u[g] !== !0 && (u[g] = !0, a.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + g + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function v() {
    Object.keys(u).forEach(function(g) {
      delete u[g];
    });
  }
  return Ni;
}
var ly;
function dh() {
  if (ly) return Un;
  ly = 1, Un.__esModule = !0, Un.HandlebarsEnvironment = h;
  function t(x) {
    return x && x.__esModule ? x : { default: x };
  }
  var r = un(), s = Gn(), a = t(s), u = V_(), c = PS(), f = $_(), m = t(f), p = Y_(), v = "4.7.8";
  Un.VERSION = v;
  var g = 8;
  Un.COMPILER_REVISION = g;
  var E = 7;
  Un.LAST_COMPATIBLE_COMPILER_REVISION = E;
  var y = {
    1: "<= 1.0.rc.2",
    // 1.0.rc.2 is actually rev2 but doesn't report it
    2: "== 1.0.0-rc.3",
    3: "== 1.0.0-rc.4",
    4: "== 1.x.x",
    5: "== 2.0.0-alpha.x",
    6: ">= 2.0.0-beta.1",
    7: ">= 4.0.0 <4.3.0",
    8: ">= 4.3.0"
  };
  Un.REVISION_CHANGES = y;
  var S = "[object Object]";
  function h(x, O, T) {
    this.helpers = x || {}, this.partials = O || {}, this.decorators = T || {}, u.registerDefaultHelpers(this), c.registerDefaultDecorators(this);
  }
  h.prototype = {
    constructor: h,
    logger: m.default,
    log: m.default.log,
    registerHelper: function(O, T) {
      if (r.toString.call(O) === S) {
        if (T)
          throw new a.default("Arg not supported with multiple helpers");
        r.extend(this.helpers, O);
      } else
        this.helpers[O] = T;
    },
    unregisterHelper: function(O) {
      delete this.helpers[O];
    },
    registerPartial: function(O, T) {
      if (r.toString.call(O) === S)
        r.extend(this.partials, O);
      else {
        if (typeof T > "u")
          throw new a.default('Attempting to register a partial called "' + O + '" as undefined');
        this.partials[O] = T;
      }
    },
    unregisterPartial: function(O) {
      delete this.partials[O];
    },
    registerDecorator: function(O, T) {
      if (r.toString.call(O) === S) {
        if (T)
          throw new a.default("Arg not supported with multiple decorators");
        r.extend(this.decorators, O);
      } else
        this.decorators[O] = T;
    },
    unregisterDecorator: function(O) {
      delete this.decorators[O];
    },
    /**
     * Reset the memory of illegal property accesses that have already been logged.
     * @deprecated should only be used in handlebars test-cases
     */
    resetLoggedPropertyAccesses: function() {
      p.resetLoggedProperties();
    }
  };
  var C = m.default.log;
  return Un.log = C, Un.createFrame = r.createFrame, Un.logger = m.default, Un;
}
var Fu = { exports: {} }, cy;
function IS() {
  return cy || (cy = 1, (function(t, r) {
    r.__esModule = !0;
    function s(a) {
      this.string = a;
    }
    s.prototype.toString = s.prototype.toHTML = function() {
      return "" + this.string;
    }, r.default = s, t.exports = r.default;
  })(Fu, Fu.exports)), Fu.exports;
}
var br = {}, Qu = {}, dy;
function BS() {
  if (dy) return Qu;
  dy = 1, Qu.__esModule = !0, Qu.wrapHelper = t;
  function t(r, s) {
    if (typeof r != "function")
      return r;
    var a = function() {
      var c = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = s(c), r.apply(this, arguments);
    };
    return a;
  }
  return Qu;
}
var fy;
function US() {
  if (fy) return br;
  fy = 1, br.__esModule = !0, br.checkRevision = g, br.template = E, br.wrapProgram = y, br.resolvePartial = S, br.invokePartial = h, br.noop = C;
  function t(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function r(l) {
    if (l && l.__esModule)
      return l;
    var _ = {};
    if (l != null)
      for (var w in l)
        Object.prototype.hasOwnProperty.call(l, w) && (_[w] = l[w]);
    return _.default = l, _;
  }
  var s = un(), a = r(s), u = Gn(), c = t(u), f = dh(), m = V_(), p = BS(), v = Y_();
  function g(l) {
    var _ = l && l[0] || 1, w = f.COMPILER_REVISION;
    if (!(_ >= f.LAST_COMPATIBLE_COMPILER_REVISION && _ <= f.COMPILER_REVISION))
      if (_ < f.LAST_COMPATIBLE_COMPILER_REVISION) {
        var k = f.REVISION_CHANGES[w], R = f.REVISION_CHANGES[_];
        throw new c.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + k + ") or downgrade your runtime to an older version (" + R + ").");
      } else
        throw new c.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + l[1] + ").");
  }
  function E(l, _) {
    if (!_)
      throw new c.default("No environment passed to template");
    if (!l || !l.main)
      throw new c.default("Unknown template object: " + typeof l);
    l.main.decorator = l.main_d, _.VM.checkRevision(l.compiler);
    var w = l.compiler && l.compiler[0] === 7;
    function k(j, D, q) {
      q.hash && (D = a.extend({}, D, q.hash), q.ids && (q.ids[0] = !0)), j = _.VM.resolvePartial.call(this, j, D, q);
      var G = a.extend({}, q, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), V = _.VM.invokePartial.call(this, j, D, G);
      if (V == null && _.compile && (q.partials[q.name] = _.compile(j, l.compilerOptions, _), V = q.partials[q.name](D, G)), V != null) {
        if (q.indent) {
          for (var K = V.split(`
`), M = 0, B = K.length; M < B && !(!K[M] && M + 1 === B); M++)
            K[M] = q.indent + K[M];
          V = K.join(`
`);
        }
        return V;
      } else
        throw new c.default("The partial " + q.name + " could not be compiled when running in runtime-only mode");
    }
    var R = {
      strict: function(D, q, G) {
        if (!D || !(q in D))
          throw new c.default('"' + q + '" not defined in ' + D, {
            loc: G
          });
        return R.lookupProperty(D, q);
      },
      lookupProperty: function(D, q) {
        var G = D[q];
        if (G == null || Object.prototype.hasOwnProperty.call(D, q) || v.resultIsAllowed(G, R.protoAccessControl, q))
          return G;
      },
      lookup: function(D, q) {
        for (var G = D.length, V = 0; V < G; V++) {
          var K = D[V] && R.lookupProperty(D[V], q);
          if (K != null)
            return D[V][q];
        }
      },
      lambda: function(D, q) {
        return typeof D == "function" ? D.call(q) : D;
      },
      escapeExpression: a.escapeExpression,
      invokePartial: k,
      fn: function(D) {
        var q = l[D];
        return q.decorator = l[D + "_d"], q;
      },
      programs: [],
      program: function(D, q, G, V, K) {
        var M = this.programs[D], B = this.fn(D);
        return q || K || V || G ? M = y(this, D, B, q, G, V, K) : M || (M = this.programs[D] = y(this, D, B)), M;
      },
      data: function(D, q) {
        for (; D && q--; )
          D = D._parent;
        return D;
      },
      mergeIfNeeded: function(D, q) {
        var G = D || q;
        return D && q && D !== q && (G = a.extend({}, q, D)), G;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: _.VM.noop,
      compilerInfo: l.compiler
    };
    function L(j) {
      var D = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], q = D.data;
      L._setup(D), !D.partial && l.useData && (q = x(j, q));
      var G = void 0, V = l.useBlockParams ? [] : void 0;
      l.useDepths && (D.depths ? G = j != D.depths[0] ? [j].concat(D.depths) : D.depths : G = [j]);
      function K(M) {
        return "" + l.main(R, M, R.helpers, R.partials, q, V, G);
      }
      return K = O(l.main, K, R, D.depths || [], q, V), K(j, D);
    }
    return L.isTop = !0, L._setup = function(j) {
      if (j.partial)
        R.protoAccessControl = j.protoAccessControl, R.helpers = j.helpers, R.partials = j.partials, R.decorators = j.decorators, R.hooks = j.hooks;
      else {
        var D = a.extend({}, _.helpers, j.helpers);
        T(D, R), R.helpers = D, l.usePartial && (R.partials = R.mergeIfNeeded(j.partials, _.partials)), (l.usePartial || l.useDecorators) && (R.decorators = a.extend({}, _.decorators, j.decorators)), R.hooks = {}, R.protoAccessControl = v.createProtoAccessControl(j);
        var q = j.allowCallsToHelperMissing || w;
        m.moveHelperToHooks(R, "helperMissing", q), m.moveHelperToHooks(R, "blockHelperMissing", q);
      }
    }, L._child = function(j, D, q, G) {
      if (l.useBlockParams && !q)
        throw new c.default("must pass block params");
      if (l.useDepths && !G)
        throw new c.default("must pass parent depths");
      return y(R, j, l[j], D, 0, q, G);
    }, L;
  }
  function y(l, _, w, k, R, L, j) {
    function D(q) {
      var G = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], V = j;
      return j && q != j[0] && !(q === l.nullContext && j[0] === null) && (V = [q].concat(j)), w(l, q, l.helpers, l.partials, G.data || k, L && [G.blockParams].concat(L), V);
    }
    return D = O(w, D, l, j, k, L), D.program = _, D.depth = j ? j.length : 0, D.blockParams = R || 0, D;
  }
  function S(l, _, w) {
    return l ? !l.call && !w.name && (w.name = l, l = w.partials[l]) : w.name === "@partial-block" ? l = w.data["partial-block"] : l = w.partials[w.name], l;
  }
  function h(l, _, w) {
    var k = w.data && w.data["partial-block"];
    w.partial = !0, w.ids && (w.data.contextPath = w.ids[0] || w.data.contextPath);
    var R = void 0;
    if (w.fn && w.fn !== C && (function() {
      w.data = f.createFrame(w.data);
      var L = w.fn;
      R = w.data["partial-block"] = function(D) {
        var q = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return q.data = f.createFrame(q.data), q.data["partial-block"] = k, L(D, q);
      }, L.partials && (w.partials = a.extend({}, w.partials, L.partials));
    })(), l === void 0 && R && (l = R), l === void 0)
      throw new c.default("The partial " + w.name + " could not be found");
    if (l instanceof Function)
      return l(_, w);
  }
  function C() {
    return "";
  }
  function x(l, _) {
    return (!_ || !("root" in _)) && (_ = _ ? f.createFrame(_) : {}, _.root = l), _;
  }
  function O(l, _, w, k, R, L) {
    if (l.decorator) {
      var j = {};
      _ = l.decorator(_, j, w, k && k[0], R, L, k), a.extend(_, j);
    }
    return _;
  }
  function T(l, _) {
    Object.keys(l).forEach(function(w) {
      var k = l[w];
      l[w] = P(k, _);
    });
  }
  function P(l, _) {
    var w = _.lookupProperty;
    return p.wrapHelper(l, function(k) {
      return a.extend({ lookupProperty: w }, k);
    });
  }
  return br;
}
var Ku = { exports: {} }, hy;
function X_() {
  return hy || (hy = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(s) {
      (function() {
        typeof globalThis != "object" && (Object.prototype.__defineGetter__("__magic__", function() {
          return this;
        }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__);
      })();
      var a = globalThis.Handlebars;
      s.noConflict = function() {
        return globalThis.Handlebars === s && (globalThis.Handlebars = a), s;
      };
    }, t.exports = r.default;
  })(Ku, Ku.exports)), Ku.exports;
}
var py;
function HS() {
  return py || (py = 1, (function(t, r) {
    r.__esModule = !0;
    function s(T) {
      return T && T.__esModule ? T : { default: T };
    }
    function a(T) {
      if (T && T.__esModule)
        return T;
      var P = {};
      if (T != null)
        for (var l in T)
          Object.prototype.hasOwnProperty.call(T, l) && (P[l] = T[l]);
      return P.default = T, P;
    }
    var u = dh(), c = a(u), f = IS(), m = s(f), p = Gn(), v = s(p), g = un(), E = a(g), y = US(), S = a(y), h = X_(), C = s(h);
    function x() {
      var T = new c.HandlebarsEnvironment();
      return E.extend(T, c), T.SafeString = m.default, T.Exception = v.default, T.Utils = E, T.escapeExpression = E.escapeExpression, T.VM = S, T.template = function(P) {
        return S.template(P, T);
      }, T;
    }
    var O = x();
    O.create = x, C.default(O), O.default = O, r.default = O, t.exports = r.default;
  })(Pu, Pu.exports)), Pu.exports;
}
var Ju = { exports: {} }, my;
function F_() {
  return my || (my = 1, (function(t, r) {
    r.__esModule = !0;
    var s = {
      // Public API used to evaluate derived attributes regarding AST nodes
      helpers: {
        // a mustache is definitely a helper if:
        // * it is an eligible helper, and
        // * it has at least one parameter or hash segment
        helperExpression: function(u) {
          return u.type === "SubExpression" || (u.type === "MustacheStatement" || u.type === "BlockStatement") && !!(u.params && u.params.length || u.hash);
        },
        scopedId: function(u) {
          return /^\.|this\b/.test(u.original);
        },
        // an ID is simple if it only has one part, and that part is not
        // `..` or `this`.
        simpleId: function(u) {
          return u.parts.length === 1 && !s.helpers.scopedId(u) && !u.depth;
        }
      }
    };
    r.default = s, t.exports = r.default;
  })(Ju, Ju.exports)), Ju.exports;
}
var Oi = {}, Wu = { exports: {} }, gy;
function qS() {
  return gy || (gy = 1, (function(t, r) {
    r.__esModule = !0;
    var s = (function() {
      var a = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function(m, p, v, g, E, y, S) {
          var h = y.length - 1;
          switch (E) {
            case 1:
              return y[h - 1];
            case 2:
              this.$ = g.prepareProgram(y[h]);
              break;
            case 3:
              this.$ = y[h];
              break;
            case 4:
              this.$ = y[h];
              break;
            case 5:
              this.$ = y[h];
              break;
            case 6:
              this.$ = y[h];
              break;
            case 7:
              this.$ = y[h];
              break;
            case 8:
              this.$ = y[h];
              break;
            case 9:
              this.$ = {
                type: "CommentStatement",
                value: g.stripComment(y[h]),
                strip: g.stripFlags(y[h], y[h]),
                loc: g.locInfo(this._$)
              };
              break;
            case 10:
              this.$ = {
                type: "ContentStatement",
                original: y[h],
                value: y[h],
                loc: g.locInfo(this._$)
              };
              break;
            case 11:
              this.$ = g.prepareRawBlock(y[h - 2], y[h - 1], y[h], this._$);
              break;
            case 12:
              this.$ = { path: y[h - 3], params: y[h - 2], hash: y[h - 1] };
              break;
            case 13:
              this.$ = g.prepareBlock(y[h - 3], y[h - 2], y[h - 1], y[h], !1, this._$);
              break;
            case 14:
              this.$ = g.prepareBlock(y[h - 3], y[h - 2], y[h - 1], y[h], !0, this._$);
              break;
            case 15:
              this.$ = { open: y[h - 5], path: y[h - 4], params: y[h - 3], hash: y[h - 2], blockParams: y[h - 1], strip: g.stripFlags(y[h - 5], y[h]) };
              break;
            case 16:
              this.$ = { path: y[h - 4], params: y[h - 3], hash: y[h - 2], blockParams: y[h - 1], strip: g.stripFlags(y[h - 5], y[h]) };
              break;
            case 17:
              this.$ = { path: y[h - 4], params: y[h - 3], hash: y[h - 2], blockParams: y[h - 1], strip: g.stripFlags(y[h - 5], y[h]) };
              break;
            case 18:
              this.$ = { strip: g.stripFlags(y[h - 1], y[h - 1]), program: y[h] };
              break;
            case 19:
              var C = g.prepareBlock(y[h - 2], y[h - 1], y[h], y[h], !1, this._$), x = g.prepareProgram([C], y[h - 1].loc);
              x.chained = !0, this.$ = { strip: y[h - 2].strip, program: x, chain: !0 };
              break;
            case 20:
              this.$ = y[h];
              break;
            case 21:
              this.$ = { path: y[h - 1], strip: g.stripFlags(y[h - 2], y[h]) };
              break;
            case 22:
              this.$ = g.prepareMustache(y[h - 3], y[h - 2], y[h - 1], y[h - 4], g.stripFlags(y[h - 4], y[h]), this._$);
              break;
            case 23:
              this.$ = g.prepareMustache(y[h - 3], y[h - 2], y[h - 1], y[h - 4], g.stripFlags(y[h - 4], y[h]), this._$);
              break;
            case 24:
              this.$ = {
                type: "PartialStatement",
                name: y[h - 3],
                params: y[h - 2],
                hash: y[h - 1],
                indent: "",
                strip: g.stripFlags(y[h - 4], y[h]),
                loc: g.locInfo(this._$)
              };
              break;
            case 25:
              this.$ = g.preparePartialBlock(y[h - 2], y[h - 1], y[h], this._$);
              break;
            case 26:
              this.$ = { path: y[h - 3], params: y[h - 2], hash: y[h - 1], strip: g.stripFlags(y[h - 4], y[h]) };
              break;
            case 27:
              this.$ = y[h];
              break;
            case 28:
              this.$ = y[h];
              break;
            case 29:
              this.$ = {
                type: "SubExpression",
                path: y[h - 3],
                params: y[h - 2],
                hash: y[h - 1],
                loc: g.locInfo(this._$)
              };
              break;
            case 30:
              this.$ = { type: "Hash", pairs: y[h], loc: g.locInfo(this._$) };
              break;
            case 31:
              this.$ = { type: "HashPair", key: g.id(y[h - 2]), value: y[h], loc: g.locInfo(this._$) };
              break;
            case 32:
              this.$ = g.id(y[h - 1]);
              break;
            case 33:
              this.$ = y[h];
              break;
            case 34:
              this.$ = y[h];
              break;
            case 35:
              this.$ = { type: "StringLiteral", value: y[h], original: y[h], loc: g.locInfo(this._$) };
              break;
            case 36:
              this.$ = { type: "NumberLiteral", value: Number(y[h]), original: Number(y[h]), loc: g.locInfo(this._$) };
              break;
            case 37:
              this.$ = { type: "BooleanLiteral", value: y[h] === "true", original: y[h] === "true", loc: g.locInfo(this._$) };
              break;
            case 38:
              this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: g.locInfo(this._$) };
              break;
            case 39:
              this.$ = { type: "NullLiteral", original: null, value: null, loc: g.locInfo(this._$) };
              break;
            case 40:
              this.$ = y[h];
              break;
            case 41:
              this.$ = y[h];
              break;
            case 42:
              this.$ = g.preparePath(!0, y[h], this._$);
              break;
            case 43:
              this.$ = g.preparePath(!1, y[h], this._$);
              break;
            case 44:
              y[h - 2].push({ part: g.id(y[h]), original: y[h], separator: y[h - 1] }), this.$ = y[h - 2];
              break;
            case 45:
              this.$ = [{ part: g.id(y[h]), original: y[h] }];
              break;
            case 46:
              this.$ = [];
              break;
            case 47:
              y[h - 1].push(y[h]);
              break;
            case 48:
              this.$ = [];
              break;
            case 49:
              y[h - 1].push(y[h]);
              break;
            case 50:
              this.$ = [];
              break;
            case 51:
              y[h - 1].push(y[h]);
              break;
            case 58:
              this.$ = [];
              break;
            case 59:
              y[h - 1].push(y[h]);
              break;
            case 64:
              this.$ = [];
              break;
            case 65:
              y[h - 1].push(y[h]);
              break;
            case 70:
              this.$ = [];
              break;
            case 71:
              y[h - 1].push(y[h]);
              break;
            case 78:
              this.$ = [];
              break;
            case 79:
              y[h - 1].push(y[h]);
              break;
            case 82:
              this.$ = [];
              break;
            case 83:
              y[h - 1].push(y[h]);
              break;
            case 86:
              this.$ = [];
              break;
            case 87:
              y[h - 1].push(y[h]);
              break;
            case 90:
              this.$ = [];
              break;
            case 91:
              y[h - 1].push(y[h]);
              break;
            case 94:
              this.$ = [];
              break;
            case 95:
              y[h - 1].push(y[h]);
              break;
            case 98:
              this.$ = [y[h]];
              break;
            case 99:
              y[h - 1].push(y[h]);
              break;
            case 100:
              this.$ = [y[h]];
              break;
            case 101:
              y[h - 1].push(y[h]);
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
        parseError: function(m, p) {
          throw new Error(m);
        },
        parse: function(m) {
          var p = this, v = [0], g = [null], E = [], y = this.table, S = "", h = 0, C = 0;
          this.lexer.setInput(m), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var x = this.lexer.yylloc;
          E.push(x);
          var O = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function T() {
            var G;
            return G = p.lexer.lex() || 1, typeof G != "number" && (G = p.symbols_[G] || G), G;
          }
          for (var P, l, _, w, k = {}, R, L, j, D; ; ) {
            if (l = v[v.length - 1], this.defaultActions[l] ? _ = this.defaultActions[l] : ((P === null || typeof P > "u") && (P = T()), _ = y[l] && y[l][P]), typeof _ > "u" || !_.length || !_[0]) {
              var q = "";
              {
                D = [];
                for (R in y[l]) this.terminals_[R] && R > 2 && D.push("'" + this.terminals_[R] + "'");
                this.lexer.showPosition ? q = "Parse error on line " + (h + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + D.join(", ") + ", got '" + (this.terminals_[P] || P) + "'" : q = "Parse error on line " + (h + 1) + ": Unexpected " + (P == 1 ? "end of input" : "'" + (this.terminals_[P] || P) + "'"), this.parseError(q, { text: this.lexer.match, token: this.terminals_[P] || P, line: this.lexer.yylineno, loc: x, expected: D });
              }
            }
            if (_[0] instanceof Array && _.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + l + ", token: " + P);
            switch (_[0]) {
              case 1:
                v.push(P), g.push(this.lexer.yytext), E.push(this.lexer.yylloc), v.push(_[1]), P = null, C = this.lexer.yyleng, S = this.lexer.yytext, h = this.lexer.yylineno, x = this.lexer.yylloc;
                break;
              case 2:
                if (L = this.productions_[_[1]][1], k.$ = g[g.length - L], k._$ = { first_line: E[E.length - (L || 1)].first_line, last_line: E[E.length - 1].last_line, first_column: E[E.length - (L || 1)].first_column, last_column: E[E.length - 1].last_column }, O && (k._$.range = [E[E.length - (L || 1)].range[0], E[E.length - 1].range[1]]), w = this.performAction.call(k, S, C, h, this.yy, _[1], g, E), typeof w < "u")
                  return w;
                L && (v = v.slice(0, -1 * L * 2), g = g.slice(0, -1 * L), E = E.slice(0, -1 * L)), v.push(this.productions_[_[1]][0]), g.push(k.$), E.push(k._$), j = y[v[v.length - 2]][v[v.length - 1]], v.push(j);
                break;
              case 3:
                return !0;
            }
          }
          return !0;
        }
      }, u = (function() {
        var f = {
          EOF: 1,
          parseError: function(p, v) {
            if (this.yy.parser)
              this.yy.parser.parseError(p, v);
            else
              throw new Error(p);
          },
          setInput: function(p) {
            return this._input = p, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          input: function() {
            var p = this._input[0];
            this.yytext += p, this.yyleng++, this.offset++, this.match += p, this.matched += p;
            var v = p.match(/(?:\r\n?|\n).*/g);
            return v ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), p;
          },
          unput: function(p) {
            var v = p.length, g = p.split(/(?:\r\n?|\n)/g);
            this._input = p + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - v - 1), this.offset -= v;
            var E = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), g.length - 1 && (this.yylineno -= g.length - 1);
            var y = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: g ? (g.length === E.length ? this.yylloc.first_column : 0) + E[E.length - g.length].length - g[0].length : this.yylloc.first_column - v
            }, this.options.ranges && (this.yylloc.range = [y[0], y[0] + this.yyleng - v]), this;
          },
          more: function() {
            return this._more = !0, this;
          },
          less: function(p) {
            this.unput(this.match.slice(p));
          },
          pastInput: function() {
            var p = this.matched.substr(0, this.matched.length - this.match.length);
            return (p.length > 20 ? "..." : "") + p.substr(-20).replace(/\n/g, "");
          },
          upcomingInput: function() {
            var p = this.match;
            return p.length < 20 && (p += this._input.substr(0, 20 - p.length)), (p.substr(0, 20) + (p.length > 20 ? "..." : "")).replace(/\n/g, "");
          },
          showPosition: function() {
            var p = this.pastInput(), v = new Array(p.length + 1).join("-");
            return p + this.upcomingInput() + `
` + v + "^";
          },
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var p, v, g, E, y;
            this._more || (this.yytext = "", this.match = "");
            for (var S = this._currentRules(), h = 0; h < S.length && (g = this._input.match(this.rules[S[h]]), !(g && (!v || g[0].length > v[0].length) && (v = g, E = h, !this.options.flex))); h++)
              ;
            return v ? (y = v[0].match(/(?:\r\n?|\n).*/g), y && (this.yylineno += y.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: y ? y[y.length - 1].length - y[y.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + v[0].length
            }, this.yytext += v[0], this.match += v[0], this.matches = v, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(v[0].length), this.matched += v[0], p = this.performAction.call(this, this.yy, this, S[E], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), p || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: "", token: null, line: this.yylineno });
          },
          lex: function() {
            var p = this.next();
            return typeof p < "u" ? p : this.lex();
          },
          begin: function(p) {
            this.conditionStack.push(p);
          },
          popState: function() {
            return this.conditionStack.pop();
          },
          _currentRules: function() {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
          },
          topState: function() {
            return this.conditionStack[this.conditionStack.length - 2];
          },
          pushState: function(p) {
            this.begin(p);
          }
        };
        return f.options = {}, f.performAction = function(p, v, g, E) {
          function y(S, h) {
            return v.yytext = v.yytext.substring(S, v.yyleng - h + S);
          }
          switch (g) {
            case 0:
              if (v.yytext.slice(-2) === "\\\\" ? (y(0, 1), this.begin("mu")) : v.yytext.slice(-1) === "\\" ? (y(0, 1), this.begin("emu")) : this.begin("mu"), v.yytext) return 15;
              break;
            case 1:
              return 15;
            case 2:
              return this.popState(), 15;
            case 3:
              return this.begin("raw"), 15;
            case 4:
              return this.popState(), this.conditionStack[this.conditionStack.length - 1] === "raw" ? 15 : (y(5, 9), "END_RAW_BLOCK");
            case 5:
              return 15;
            case 6:
              return this.popState(), 14;
            case 7:
              return 65;
            case 8:
              return 68;
            case 9:
              return 19;
            case 10:
              return this.popState(), this.begin("raw"), 23;
            case 11:
              return 55;
            case 12:
              return 60;
            case 13:
              return 29;
            case 14:
              return 47;
            case 15:
              return this.popState(), 44;
            case 16:
              return this.popState(), 44;
            case 17:
              return 34;
            case 18:
              return 39;
            case 19:
              return 51;
            case 20:
              return 48;
            case 21:
              this.unput(v.yytext), this.popState(), this.begin("com");
              break;
            case 22:
              return this.popState(), 14;
            case 23:
              return 48;
            case 24:
              return 73;
            case 25:
              return 72;
            case 26:
              return 72;
            case 27:
              return 87;
            case 28:
              break;
            case 29:
              return this.popState(), 54;
            case 30:
              return this.popState(), 33;
            case 31:
              return v.yytext = y(1, 2).replace(/\\"/g, '"'), 80;
            case 32:
              return v.yytext = y(1, 2).replace(/\\'/g, "'"), 80;
            case 33:
              return 85;
            case 34:
              return 82;
            case 35:
              return 82;
            case 36:
              return 83;
            case 37:
              return 84;
            case 38:
              return 81;
            case 39:
              return 75;
            case 40:
              return 77;
            case 41:
              return 72;
            case 42:
              return v.yytext = v.yytext.replace(/\\([\\\]])/g, "$1"), 72;
            case 43:
              return "INVALID";
            case 44:
              return 5;
          }
        }, f.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/], f.conditions = { mu: { rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], inclusive: !1 }, emu: { rules: [2], inclusive: !1 }, com: { rules: [6], inclusive: !1 }, raw: { rules: [3, 4, 5], inclusive: !1 }, INITIAL: { rules: [0, 1, 44], inclusive: !0 } }, f;
      })();
      a.lexer = u;
      function c() {
        this.yy = {};
      }
      return c.prototype = a, a.Parser = c, new c();
    })();
    r.default = s, t.exports = r.default;
  })(Wu, Wu.exports)), Wu.exports;
}
var el = { exports: {} }, tl = { exports: {} }, vy;
function Q_() {
  return vy || (vy = 1, (function(t, r) {
    r.__esModule = !0;
    function s(v) {
      return v && v.__esModule ? v : { default: v };
    }
    var a = Gn(), u = s(a);
    function c() {
      this.parents = [];
    }
    c.prototype = {
      constructor: c,
      mutating: !1,
      // Visits a given value. If mutating, will replace the value if necessary.
      acceptKey: function(g, E) {
        var y = this.accept(g[E]);
        if (this.mutating) {
          if (y && !c.prototype[y.type])
            throw new u.default('Unexpected node type "' + y.type + '" found when accepting ' + E + " on " + g.type);
          g[E] = y;
        }
      },
      // Performs an accept operation with added sanity check to ensure
      // required keys are not removed.
      acceptRequired: function(g, E) {
        if (this.acceptKey(g, E), !g[E])
          throw new u.default(g.type + " requires " + E);
      },
      // Traverses a given array. If mutating, empty respnses will be removed
      // for child elements.
      acceptArray: function(g) {
        for (var E = 0, y = g.length; E < y; E++)
          this.acceptKey(g, E), g[E] || (g.splice(E, 1), E--, y--);
      },
      accept: function(g) {
        if (g) {
          if (!this[g.type])
            throw new u.default("Unknown type: " + g.type, g);
          this.current && this.parents.unshift(this.current), this.current = g;
          var E = this[g.type](g);
          if (this.current = this.parents.shift(), !this.mutating || E)
            return E;
          if (E !== !1)
            return g;
        }
      },
      Program: function(g) {
        this.acceptArray(g.body);
      },
      MustacheStatement: f,
      Decorator: f,
      BlockStatement: m,
      DecoratorBlock: m,
      PartialStatement: p,
      PartialBlockStatement: function(g) {
        p.call(this, g), this.acceptKey(g, "program");
      },
      ContentStatement: function() {
      },
      CommentStatement: function() {
      },
      SubExpression: f,
      PathExpression: function() {
      },
      StringLiteral: function() {
      },
      NumberLiteral: function() {
      },
      BooleanLiteral: function() {
      },
      UndefinedLiteral: function() {
      },
      NullLiteral: function() {
      },
      Hash: function(g) {
        this.acceptArray(g.pairs);
      },
      HashPair: function(g) {
        this.acceptRequired(g, "value");
      }
    };
    function f(v) {
      this.acceptRequired(v, "path"), this.acceptArray(v.params), this.acceptKey(v, "hash");
    }
    function m(v) {
      f.call(this, v), this.acceptKey(v, "program"), this.acceptKey(v, "inverse");
    }
    function p(v) {
      this.acceptRequired(v, "name"), this.acceptArray(v.params), this.acceptKey(v, "hash");
    }
    r.default = c, t.exports = r.default;
  })(tl, tl.exports)), tl.exports;
}
var yy;
function ZS() {
  return yy || (yy = 1, (function(t, r) {
    r.__esModule = !0;
    function s(g) {
      return g && g.__esModule ? g : { default: g };
    }
    var a = Q_(), u = s(a);
    function c() {
      var g = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = g;
    }
    c.prototype = new u.default(), c.prototype.Program = function(g) {
      var E = !this.options.ignoreStandalone, y = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var S = g.body, h = 0, C = S.length; h < C; h++) {
        var x = S[h], O = this.accept(x);
        if (O) {
          var T = f(S, h, y), P = m(S, h, y), l = O.openStandalone && T, _ = O.closeStandalone && P, w = O.inlineStandalone && T && P;
          O.close && p(S, h, !0), O.open && v(S, h, !0), E && w && (p(S, h), v(S, h) && x.type === "PartialStatement" && (x.indent = /([ \t]+$)/.exec(S[h - 1].original)[1])), E && l && (p((x.program || x.inverse).body), v(S, h)), E && _ && (p(S, h), v((x.inverse || x.program).body));
        }
      }
      return g;
    }, c.prototype.BlockStatement = c.prototype.DecoratorBlock = c.prototype.PartialBlockStatement = function(g) {
      this.accept(g.program), this.accept(g.inverse);
      var E = g.program || g.inverse, y = g.program && g.inverse, S = y, h = y;
      if (y && y.chained)
        for (S = y.body[0].program; h.chained; )
          h = h.body[h.body.length - 1].program;
      var C = {
        open: g.openStrip.open,
        close: g.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: m(E.body),
        closeStandalone: f((S || E).body)
      };
      if (g.openStrip.close && p(E.body, null, !0), y) {
        var x = g.inverseStrip;
        x.open && v(E.body, null, !0), x.close && p(S.body, null, !0), g.closeStrip.open && v(h.body, null, !0), !this.options.ignoreStandalone && f(E.body) && m(S.body) && (v(E.body), p(S.body));
      } else g.closeStrip.open && v(E.body, null, !0);
      return C;
    }, c.prototype.Decorator = c.prototype.MustacheStatement = function(g) {
      return g.strip;
    }, c.prototype.PartialStatement = c.prototype.CommentStatement = function(g) {
      var E = g.strip || {};
      return {
        inlineStandalone: !0,
        open: E.open,
        close: E.close
      };
    };
    function f(g, E, y) {
      E === void 0 && (E = g.length);
      var S = g[E - 1], h = g[E - 2];
      if (!S)
        return y;
      if (S.type === "ContentStatement")
        return (h || !y ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(S.original);
    }
    function m(g, E, y) {
      E === void 0 && (E = -1);
      var S = g[E + 1], h = g[E + 2];
      if (!S)
        return y;
      if (S.type === "ContentStatement")
        return (h || !y ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(S.original);
    }
    function p(g, E, y) {
      var S = g[E == null ? 0 : E + 1];
      if (!(!S || S.type !== "ContentStatement" || !y && S.rightStripped)) {
        var h = S.value;
        S.value = S.value.replace(y ? /^\s+/ : /^[ \t]*\r?\n?/, ""), S.rightStripped = S.value !== h;
      }
    }
    function v(g, E, y) {
      var S = g[E == null ? g.length - 1 : E - 1];
      if (!(!S || S.type !== "ContentStatement" || !y && S.leftStripped)) {
        var h = S.value;
        return S.value = S.value.replace(y ? /\s+$/ : /[ \t]+$/, ""), S.leftStripped = S.value !== h, S.leftStripped;
      }
    }
    r.default = c, t.exports = r.default;
  })(el, el.exports)), el.exports;
}
var gn = {}, _y;
function GS() {
  if (_y) return gn;
  _y = 1, gn.__esModule = !0, gn.SourceLocation = u, gn.id = c, gn.stripFlags = f, gn.stripComment = m, gn.preparePath = p, gn.prepareMustache = v, gn.prepareRawBlock = g, gn.prepareBlock = E, gn.prepareProgram = y, gn.preparePartialBlock = S;
  function t(h) {
    return h && h.__esModule ? h : { default: h };
  }
  var r = Gn(), s = t(r);
  function a(h, C) {
    if (C = C.path ? C.path.original : C, h.path.original !== C) {
      var x = { loc: h.path.loc };
      throw new s.default(h.path.original + " doesn't match " + C, x);
    }
  }
  function u(h, C) {
    this.source = h, this.start = {
      line: C.first_line,
      column: C.first_column
    }, this.end = {
      line: C.last_line,
      column: C.last_column
    };
  }
  function c(h) {
    return /^\[.*\]$/.test(h) ? h.substring(1, h.length - 1) : h;
  }
  function f(h, C) {
    return {
      open: h.charAt(2) === "~",
      close: C.charAt(C.length - 3) === "~"
    };
  }
  function m(h) {
    return h.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
  }
  function p(h, C, x) {
    x = this.locInfo(x);
    for (var O = h ? "@" : "", T = [], P = 0, l = 0, _ = C.length; l < _; l++) {
      var w = C[l].part, k = C[l].original !== w;
      if (O += (C[l].separator || "") + w, !k && (w === ".." || w === "." || w === "this")) {
        if (T.length > 0)
          throw new s.default("Invalid path: " + O, { loc: x });
        w === ".." && P++;
      } else
        T.push(w);
    }
    return {
      type: "PathExpression",
      data: h,
      depth: P,
      parts: T,
      original: O,
      loc: x
    };
  }
  function v(h, C, x, O, T, P) {
    var l = O.charAt(3) || O.charAt(2), _ = l !== "{" && l !== "&", w = /\*/.test(O);
    return {
      type: w ? "Decorator" : "MustacheStatement",
      path: h,
      params: C,
      hash: x,
      escaped: _,
      strip: T,
      loc: this.locInfo(P)
    };
  }
  function g(h, C, x, O) {
    a(h, x), O = this.locInfo(O);
    var T = {
      type: "Program",
      body: C,
      strip: {},
      loc: O
    };
    return {
      type: "BlockStatement",
      path: h.path,
      params: h.params,
      hash: h.hash,
      program: T,
      openStrip: {},
      inverseStrip: {},
      closeStrip: {},
      loc: O
    };
  }
  function E(h, C, x, O, T, P) {
    O && O.path && a(h, O);
    var l = /\*/.test(h.open);
    C.blockParams = h.blockParams;
    var _ = void 0, w = void 0;
    if (x) {
      if (l)
        throw new s.default("Unexpected inverse block on decorator", x);
      x.chain && (x.program.body[0].closeStrip = O.strip), w = x.strip, _ = x.program;
    }
    return T && (T = _, _ = C, C = T), {
      type: l ? "DecoratorBlock" : "BlockStatement",
      path: h.path,
      params: h.params,
      hash: h.hash,
      program: C,
      inverse: _,
      openStrip: h.strip,
      inverseStrip: w,
      closeStrip: O && O.strip,
      loc: this.locInfo(P)
    };
  }
  function y(h, C) {
    if (!C && h.length) {
      var x = h[0].loc, O = h[h.length - 1].loc;
      x && O && (C = {
        source: x.source,
        start: {
          line: x.start.line,
          column: x.start.column
        },
        end: {
          line: O.end.line,
          column: O.end.column
        }
      });
    }
    return {
      type: "Program",
      body: h,
      strip: {},
      loc: C
    };
  }
  function S(h, C, x, O) {
    return a(h, x), {
      type: "PartialBlockStatement",
      name: h.path,
      params: h.params,
      hash: h.hash,
      program: C,
      openStrip: h.strip,
      closeStrip: x && x.strip,
      loc: this.locInfo(O)
    };
  }
  return gn;
}
var by;
function VS() {
  if (by) return Oi;
  by = 1, Oi.__esModule = !0, Oi.parseWithoutProcessing = g, Oi.parse = E;
  function t(y) {
    if (y && y.__esModule)
      return y;
    var S = {};
    if (y != null)
      for (var h in y)
        Object.prototype.hasOwnProperty.call(y, h) && (S[h] = y[h]);
    return S.default = y, S;
  }
  function r(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var s = qS(), a = r(s), u = ZS(), c = r(u), f = GS(), m = t(f), p = un();
  Oi.parser = a.default;
  var v = {};
  p.extend(v, m);
  function g(y, S) {
    if (y.type === "Program")
      return y;
    a.default.yy = v, v.locInfo = function(C) {
      return new v.SourceLocation(S && S.srcName, C);
    };
    var h = a.default.parse(y);
    return h;
  }
  function E(y, S) {
    var h = g(y, S), C = new c.default(S);
    return C.accept(h);
  }
  return Oi;
}
var Mi = {}, Sy;
function $S() {
  if (Sy) return Mi;
  Sy = 1, Mi.__esModule = !0, Mi.Compiler = m, Mi.precompile = p, Mi.compile = v;
  function t(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var r = Gn(), s = t(r), a = un(), u = F_(), c = t(u), f = [].slice;
  function m() {
  }
  m.prototype = {
    compiler: m,
    equals: function(S) {
      var h = this.opcodes.length;
      if (S.opcodes.length !== h)
        return !1;
      for (var C = 0; C < h; C++) {
        var x = this.opcodes[C], O = S.opcodes[C];
        if (x.opcode !== O.opcode || !g(x.args, O.args))
          return !1;
      }
      h = this.children.length;
      for (var C = 0; C < h; C++)
        if (!this.children[C].equals(S.children[C]))
          return !1;
      return !0;
    },
    guid: 0,
    compile: function(S, h) {
      return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = h, this.stringParams = h.stringParams, this.trackIds = h.trackIds, h.blockParams = h.blockParams || [], h.knownHelpers = a.extend(/* @__PURE__ */ Object.create(null), {
        helperMissing: !0,
        blockHelperMissing: !0,
        each: !0,
        if: !0,
        unless: !0,
        with: !0,
        log: !0,
        lookup: !0
      }, h.knownHelpers), this.accept(S);
    },
    compileProgram: function(S) {
      var h = new this.compiler(), C = h.compile(S, this.options), x = this.guid++;
      return this.usePartial = this.usePartial || C.usePartial, this.children[x] = C, this.useDepths = this.useDepths || C.useDepths, x;
    },
    accept: function(S) {
      if (!this[S.type])
        throw new s.default("Unknown type: " + S.type, S);
      this.sourceNode.unshift(S);
      var h = this[S.type](S);
      return this.sourceNode.shift(), h;
    },
    Program: function(S) {
      this.options.blockParams.unshift(S.blockParams);
      for (var h = S.body, C = h.length, x = 0; x < C; x++)
        this.accept(h[x]);
      return this.options.blockParams.shift(), this.isSimple = C === 1, this.blockParams = S.blockParams ? S.blockParams.length : 0, this;
    },
    BlockStatement: function(S) {
      E(S);
      var h = S.program, C = S.inverse;
      h = h && this.compileProgram(h), C = C && this.compileProgram(C);
      var x = this.classifySexpr(S);
      x === "helper" ? this.helperSexpr(S, h, C) : x === "simple" ? (this.simpleSexpr(S), this.opcode("pushProgram", h), this.opcode("pushProgram", C), this.opcode("emptyHash"), this.opcode("blockValue", S.path.original)) : (this.ambiguousSexpr(S, h, C), this.opcode("pushProgram", h), this.opcode("pushProgram", C), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(S) {
      var h = S.program && this.compileProgram(S.program), C = this.setupFullMustacheParams(S, h, void 0), x = S.path;
      this.useDecorators = !0, this.opcode("registerDecorator", C.length, x.original);
    },
    PartialStatement: function(S) {
      this.usePartial = !0;
      var h = S.program;
      h && (h = this.compileProgram(S.program));
      var C = S.params;
      if (C.length > 1)
        throw new s.default("Unsupported number of partial arguments: " + C.length, S);
      C.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : C.push({ type: "PathExpression", parts: [], depth: 0 }));
      var x = S.name.original, O = S.name.type === "SubExpression";
      O && this.accept(S.name), this.setupFullMustacheParams(S, h, void 0, !0);
      var T = S.indent || "";
      this.options.preventIndent && T && (this.opcode("appendContent", T), T = ""), this.opcode("invokePartial", O, x, T), this.opcode("append");
    },
    PartialBlockStatement: function(S) {
      this.PartialStatement(S);
    },
    MustacheStatement: function(S) {
      this.SubExpression(S), S.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
    },
    Decorator: function(S) {
      this.DecoratorBlock(S);
    },
    ContentStatement: function(S) {
      S.value && this.opcode("appendContent", S.value);
    },
    CommentStatement: function() {
    },
    SubExpression: function(S) {
      E(S);
      var h = this.classifySexpr(S);
      h === "simple" ? this.simpleSexpr(S) : h === "helper" ? this.helperSexpr(S) : this.ambiguousSexpr(S);
    },
    ambiguousSexpr: function(S, h, C) {
      var x = S.path, O = x.parts[0], T = h != null || C != null;
      this.opcode("getContext", x.depth), this.opcode("pushProgram", h), this.opcode("pushProgram", C), x.strict = !0, this.accept(x), this.opcode("invokeAmbiguous", O, T);
    },
    simpleSexpr: function(S) {
      var h = S.path;
      h.strict = !0, this.accept(h), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(S, h, C) {
      var x = this.setupFullMustacheParams(S, h, C), O = S.path, T = O.parts[0];
      if (this.options.knownHelpers[T])
        this.opcode("invokeKnownHelper", x.length, T);
      else {
        if (this.options.knownHelpersOnly)
          throw new s.default("You specified knownHelpersOnly, but used the unknown helper " + T, S);
        O.strict = !0, O.falsy = !0, this.accept(O), this.opcode("invokeHelper", x.length, O.original, c.default.helpers.simpleId(O));
      }
    },
    PathExpression: function(S) {
      this.addDepth(S.depth), this.opcode("getContext", S.depth);
      var h = S.parts[0], C = c.default.helpers.scopedId(S), x = !S.depth && !C && this.blockParamIndex(h);
      x ? this.opcode("lookupBlockParam", x, S.parts) : h ? S.data ? (this.options.data = !0, this.opcode("lookupData", S.depth, S.parts, S.strict)) : this.opcode("lookupOnContext", S.parts, S.falsy, S.strict, C) : this.opcode("pushContext");
    },
    StringLiteral: function(S) {
      this.opcode("pushString", S.value);
    },
    NumberLiteral: function(S) {
      this.opcode("pushLiteral", S.value);
    },
    BooleanLiteral: function(S) {
      this.opcode("pushLiteral", S.value);
    },
    UndefinedLiteral: function() {
      this.opcode("pushLiteral", "undefined");
    },
    NullLiteral: function() {
      this.opcode("pushLiteral", "null");
    },
    Hash: function(S) {
      var h = S.pairs, C = 0, x = h.length;
      for (this.opcode("pushHash"); C < x; C++)
        this.pushParam(h[C].value);
      for (; C--; )
        this.opcode("assignToHash", h[C].key);
      this.opcode("popHash");
    },
    // HELPERS
    opcode: function(S) {
      this.opcodes.push({
        opcode: S,
        args: f.call(arguments, 1),
        loc: this.sourceNode[0].loc
      });
    },
    addDepth: function(S) {
      S && (this.useDepths = !0);
    },
    classifySexpr: function(S) {
      var h = c.default.helpers.simpleId(S.path), C = h && !!this.blockParamIndex(S.path.parts[0]), x = !C && c.default.helpers.helperExpression(S), O = !C && (x || h);
      if (O && !x) {
        var T = S.path.parts[0], P = this.options;
        P.knownHelpers[T] ? x = !0 : P.knownHelpersOnly && (O = !1);
      }
      return x ? "helper" : O ? "ambiguous" : "simple";
    },
    pushParams: function(S) {
      for (var h = 0, C = S.length; h < C; h++)
        this.pushParam(S[h]);
    },
    pushParam: function(S) {
      var h = S.value != null ? S.value : S.original || "";
      if (this.stringParams)
        h.replace && (h = h.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), S.depth && this.addDepth(S.depth), this.opcode("getContext", S.depth || 0), this.opcode("pushStringParam", h, S.type), S.type === "SubExpression" && this.accept(S);
      else {
        if (this.trackIds) {
          var C = void 0;
          if (S.parts && !c.default.helpers.scopedId(S) && !S.depth && (C = this.blockParamIndex(S.parts[0])), C) {
            var x = S.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", C, x);
          } else
            h = S.original || h, h.replace && (h = h.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", S.type, h);
        }
        this.accept(S);
      }
    },
    setupFullMustacheParams: function(S, h, C, x) {
      var O = S.params;
      return this.pushParams(O), this.opcode("pushProgram", h), this.opcode("pushProgram", C), S.hash ? this.accept(S.hash) : this.opcode("emptyHash", x), O;
    },
    blockParamIndex: function(S) {
      for (var h = 0, C = this.options.blockParams.length; h < C; h++) {
        var x = this.options.blockParams[h], O = x && a.indexOf(x, S);
        if (x && O >= 0)
          return [h, O];
      }
    }
  };
  function p(y, S, h) {
    if (y == null || typeof y != "string" && y.type !== "Program")
      throw new s.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + y);
    S = S || {}, "data" in S || (S.data = !0), S.compat && (S.useDepths = !0);
    var C = h.parse(y, S), x = new h.Compiler().compile(C, S);
    return new h.JavaScriptCompiler().compile(x, S);
  }
  function v(y, S, h) {
    if (S === void 0 && (S = {}), y == null || typeof y != "string" && y.type !== "Program")
      throw new s.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + y);
    S = a.extend({}, S), "data" in S || (S.data = !0), S.compat && (S.useDepths = !0);
    var C = void 0;
    function x() {
      var T = h.parse(y, S), P = new h.Compiler().compile(T, S), l = new h.JavaScriptCompiler().compile(P, S, void 0, !0);
      return h.template(l);
    }
    function O(T, P) {
      return C || (C = x()), C.call(this, T, P);
    }
    return O._setup = function(T) {
      return C || (C = x()), C._setup(T);
    }, O._child = function(T, P, l, _) {
      return C || (C = x()), C._child(T, P, l, _);
    }, O;
  }
  function g(y, S) {
    if (y === S)
      return !0;
    if (a.isArray(y) && a.isArray(S) && y.length === S.length) {
      for (var h = 0; h < y.length; h++)
        if (!g(y[h], S[h]))
          return !1;
      return !0;
    }
  }
  function E(y) {
    if (!y.path.parts) {
      var S = y.path;
      y.path = {
        type: "PathExpression",
        data: !1,
        depth: 0,
        parts: [S.original + ""],
        original: S.original + "",
        loc: S.loc
      };
    }
  }
  return Mi;
}
var nl = { exports: {} }, rl = { exports: {} }, Zs = {}, _f = {}, al = {}, il = {}, wy;
function YS() {
  if (wy) return il;
  wy = 1;
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return il.encode = function(r) {
    if (0 <= r && r < t.length)
      return t[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, il.decode = function(r) {
    var s = 65, a = 90, u = 97, c = 122, f = 48, m = 57, p = 43, v = 47, g = 26, E = 52;
    return s <= r && r <= a ? r - s : u <= r && r <= c ? r - u + g : f <= r && r <= m ? r - f + E : r == p ? 62 : r == v ? 63 : -1;
  }, il;
}
var Ey;
function K_() {
  if (Ey) return al;
  Ey = 1;
  var t = YS(), r = 5, s = 1 << r, a = s - 1, u = s;
  function c(m) {
    return m < 0 ? (-m << 1) + 1 : (m << 1) + 0;
  }
  function f(m) {
    var p = (m & 1) === 1, v = m >> 1;
    return p ? -v : v;
  }
  return al.encode = function(p) {
    var v = "", g, E = c(p);
    do
      g = E & a, E >>>= r, E > 0 && (g |= u), v += t.encode(g);
    while (E > 0);
    return v;
  }, al.decode = function(p, v, g) {
    var E = p.length, y = 0, S = 0, h, C;
    do {
      if (v >= E)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (C = t.decode(p.charCodeAt(v++)), C === -1)
        throw new Error("Invalid base64 digit: " + p.charAt(v - 1));
      h = !!(C & u), C &= a, y = y + (C << S), S += r;
    } while (h);
    g.value = f(y), g.rest = v;
  }, al;
}
var bf = {}, Cy;
function po() {
  return Cy || (Cy = 1, (function(t) {
    function r(l, _, w) {
      if (_ in l)
        return l[_];
      if (arguments.length === 3)
        return w;
      throw new Error('"' + _ + '" is a required argument.');
    }
    t.getArg = r;
    var s = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, a = /^data:.+\,.+$/;
    function u(l) {
      var _ = l.match(s);
      return _ ? {
        scheme: _[1],
        auth: _[2],
        host: _[3],
        port: _[4],
        path: _[5]
      } : null;
    }
    t.urlParse = u;
    function c(l) {
      var _ = "";
      return l.scheme && (_ += l.scheme + ":"), _ += "//", l.auth && (_ += l.auth + "@"), l.host && (_ += l.host), l.port && (_ += ":" + l.port), l.path && (_ += l.path), _;
    }
    t.urlGenerate = c;
    function f(l) {
      var _ = l, w = u(l);
      if (w) {
        if (!w.path)
          return l;
        _ = w.path;
      }
      for (var k = t.isAbsolute(_), R = _.split(/\/+/), L, j = 0, D = R.length - 1; D >= 0; D--)
        L = R[D], L === "." ? R.splice(D, 1) : L === ".." ? j++ : j > 0 && (L === "" ? (R.splice(D + 1, j), j = 0) : (R.splice(D, 2), j--));
      return _ = R.join("/"), _ === "" && (_ = k ? "/" : "."), w ? (w.path = _, c(w)) : _;
    }
    t.normalize = f;
    function m(l, _) {
      l === "" && (l = "."), _ === "" && (_ = ".");
      var w = u(_), k = u(l);
      if (k && (l = k.path || "/"), w && !w.scheme)
        return k && (w.scheme = k.scheme), c(w);
      if (w || _.match(a))
        return _;
      if (k && !k.host && !k.path)
        return k.host = _, c(k);
      var R = _.charAt(0) === "/" ? _ : f(l.replace(/\/+$/, "") + "/" + _);
      return k ? (k.path = R, c(k)) : R;
    }
    t.join = m, t.isAbsolute = function(l) {
      return l.charAt(0) === "/" || s.test(l);
    };
    function p(l, _) {
      l === "" && (l = "."), l = l.replace(/\/$/, "");
      for (var w = 0; _.indexOf(l + "/") !== 0; ) {
        var k = l.lastIndexOf("/");
        if (k < 0 || (l = l.slice(0, k), l.match(/^([^\/]+:\/)?\/*$/)))
          return _;
        ++w;
      }
      return Array(w + 1).join("../") + _.substr(l.length + 1);
    }
    t.relative = p;
    var v = (function() {
      var l = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in l);
    })();
    function g(l) {
      return l;
    }
    function E(l) {
      return S(l) ? "$" + l : l;
    }
    t.toSetString = v ? g : E;
    function y(l) {
      return S(l) ? l.slice(1) : l;
    }
    t.fromSetString = v ? g : y;
    function S(l) {
      if (!l)
        return !1;
      var _ = l.length;
      if (_ < 9 || l.charCodeAt(_ - 1) !== 95 || l.charCodeAt(_ - 2) !== 95 || l.charCodeAt(_ - 3) !== 111 || l.charCodeAt(_ - 4) !== 116 || l.charCodeAt(_ - 5) !== 111 || l.charCodeAt(_ - 6) !== 114 || l.charCodeAt(_ - 7) !== 112 || l.charCodeAt(_ - 8) !== 95 || l.charCodeAt(_ - 9) !== 95)
        return !1;
      for (var w = _ - 10; w >= 0; w--)
        if (l.charCodeAt(w) !== 36)
          return !1;
      return !0;
    }
    function h(l, _, w) {
      var k = x(l.source, _.source);
      return k !== 0 || (k = l.originalLine - _.originalLine, k !== 0) || (k = l.originalColumn - _.originalColumn, k !== 0 || w) || (k = l.generatedColumn - _.generatedColumn, k !== 0) || (k = l.generatedLine - _.generatedLine, k !== 0) ? k : x(l.name, _.name);
    }
    t.compareByOriginalPositions = h;
    function C(l, _, w) {
      var k = l.generatedLine - _.generatedLine;
      return k !== 0 || (k = l.generatedColumn - _.generatedColumn, k !== 0 || w) || (k = x(l.source, _.source), k !== 0) || (k = l.originalLine - _.originalLine, k !== 0) || (k = l.originalColumn - _.originalColumn, k !== 0) ? k : x(l.name, _.name);
    }
    t.compareByGeneratedPositionsDeflated = C;
    function x(l, _) {
      return l === _ ? 0 : l === null ? 1 : _ === null ? -1 : l > _ ? 1 : -1;
    }
    function O(l, _) {
      var w = l.generatedLine - _.generatedLine;
      return w !== 0 || (w = l.generatedColumn - _.generatedColumn, w !== 0) || (w = x(l.source, _.source), w !== 0) || (w = l.originalLine - _.originalLine, w !== 0) || (w = l.originalColumn - _.originalColumn, w !== 0) ? w : x(l.name, _.name);
    }
    t.compareByGeneratedPositionsInflated = O;
    function T(l) {
      return JSON.parse(l.replace(/^\)]}'[^\n]*\n/, ""));
    }
    t.parseSourceMapInput = T;
    function P(l, _, w) {
      if (_ = _ || "", l && (l[l.length - 1] !== "/" && _[0] !== "/" && (l += "/"), _ = l + _), w) {
        var k = u(w);
        if (!k)
          throw new Error("sourceMapURL could not be parsed");
        if (k.path) {
          var R = k.path.lastIndexOf("/");
          R >= 0 && (k.path = k.path.substring(0, R + 1));
        }
        _ = m(c(k), _);
      }
      return f(_);
    }
    t.computeSourceURL = P;
  })(bf)), bf;
}
var Sf = {}, ky;
function J_() {
  if (ky) return Sf;
  ky = 1;
  var t = po(), r = Object.prototype.hasOwnProperty, s = typeof Map < "u";
  function a() {
    this._array = [], this._set = s ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return a.fromArray = function(c, f) {
    for (var m = new a(), p = 0, v = c.length; p < v; p++)
      m.add(c[p], f);
    return m;
  }, a.prototype.size = function() {
    return s ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, a.prototype.add = function(c, f) {
    var m = s ? c : t.toSetString(c), p = s ? this.has(c) : r.call(this._set, m), v = this._array.length;
    (!p || f) && this._array.push(c), p || (s ? this._set.set(c, v) : this._set[m] = v);
  }, a.prototype.has = function(c) {
    if (s)
      return this._set.has(c);
    var f = t.toSetString(c);
    return r.call(this._set, f);
  }, a.prototype.indexOf = function(c) {
    if (s) {
      var f = this._set.get(c);
      if (f >= 0)
        return f;
    } else {
      var m = t.toSetString(c);
      if (r.call(this._set, m))
        return this._set[m];
    }
    throw new Error('"' + c + '" is not in the set.');
  }, a.prototype.at = function(c) {
    if (c >= 0 && c < this._array.length)
      return this._array[c];
    throw new Error("No element indexed by " + c);
  }, a.prototype.toArray = function() {
    return this._array.slice();
  }, Sf.ArraySet = a, Sf;
}
var wf = {}, Ay;
function XS() {
  if (Ay) return wf;
  Ay = 1;
  var t = po();
  function r(a, u) {
    var c = a.generatedLine, f = u.generatedLine, m = a.generatedColumn, p = u.generatedColumn;
    return f > c || f == c && p >= m || t.compareByGeneratedPositionsInflated(a, u) <= 0;
  }
  function s() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return s.prototype.unsortedForEach = function(u, c) {
    this._array.forEach(u, c);
  }, s.prototype.add = function(u) {
    r(this._last, u) ? (this._last = u, this._array.push(u)) : (this._sorted = !1, this._array.push(u));
  }, s.prototype.toArray = function() {
    return this._sorted || (this._array.sort(t.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, wf.MappingList = s, wf;
}
var xy;
function W_() {
  if (xy) return _f;
  xy = 1;
  var t = K_(), r = po(), s = J_().ArraySet, a = XS().MappingList;
  function u(c) {
    c || (c = {}), this._file = r.getArg(c, "file", null), this._sourceRoot = r.getArg(c, "sourceRoot", null), this._skipValidation = r.getArg(c, "skipValidation", !1), this._sources = new s(), this._names = new s(), this._mappings = new a(), this._sourcesContents = null;
  }
  return u.prototype._version = 3, u.fromSourceMap = function(f) {
    var m = f.sourceRoot, p = new u({
      file: f.file,
      sourceRoot: m
    });
    return f.eachMapping(function(v) {
      var g = {
        generated: {
          line: v.generatedLine,
          column: v.generatedColumn
        }
      };
      v.source != null && (g.source = v.source, m != null && (g.source = r.relative(m, g.source)), g.original = {
        line: v.originalLine,
        column: v.originalColumn
      }, v.name != null && (g.name = v.name)), p.addMapping(g);
    }), f.sources.forEach(function(v) {
      var g = v;
      m !== null && (g = r.relative(m, v)), p._sources.has(g) || p._sources.add(g);
      var E = f.sourceContentFor(v);
      E != null && p.setSourceContent(v, E);
    }), p;
  }, u.prototype.addMapping = function(f) {
    var m = r.getArg(f, "generated"), p = r.getArg(f, "original", null), v = r.getArg(f, "source", null), g = r.getArg(f, "name", null);
    this._skipValidation || this._validateMapping(m, p, v, g), v != null && (v = String(v), this._sources.has(v) || this._sources.add(v)), g != null && (g = String(g), this._names.has(g) || this._names.add(g)), this._mappings.add({
      generatedLine: m.line,
      generatedColumn: m.column,
      originalLine: p != null && p.line,
      originalColumn: p != null && p.column,
      source: v,
      name: g
    });
  }, u.prototype.setSourceContent = function(f, m) {
    var p = f;
    this._sourceRoot != null && (p = r.relative(this._sourceRoot, p)), m != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[r.toSetString(p)] = m) : this._sourcesContents && (delete this._sourcesContents[r.toSetString(p)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, u.prototype.applySourceMap = function(f, m, p) {
    var v = m;
    if (m == null) {
      if (f.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      v = f.file;
    }
    var g = this._sourceRoot;
    g != null && (v = r.relative(g, v));
    var E = new s(), y = new s();
    this._mappings.unsortedForEach(function(S) {
      if (S.source === v && S.originalLine != null) {
        var h = f.originalPositionFor({
          line: S.originalLine,
          column: S.originalColumn
        });
        h.source != null && (S.source = h.source, p != null && (S.source = r.join(p, S.source)), g != null && (S.source = r.relative(g, S.source)), S.originalLine = h.line, S.originalColumn = h.column, h.name != null && (S.name = h.name));
      }
      var C = S.source;
      C != null && !E.has(C) && E.add(C);
      var x = S.name;
      x != null && !y.has(x) && y.add(x);
    }, this), this._sources = E, this._names = y, f.sources.forEach(function(S) {
      var h = f.sourceContentFor(S);
      h != null && (p != null && (S = r.join(p, S)), g != null && (S = r.relative(g, S)), this.setSourceContent(S, h));
    }, this);
  }, u.prototype._validateMapping = function(f, m, p, v) {
    if (m && typeof m.line != "number" && typeof m.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(f && "line" in f && "column" in f && f.line > 0 && f.column >= 0 && !m && !p && !v)) {
      if (f && "line" in f && "column" in f && m && "line" in m && "column" in m && f.line > 0 && f.column >= 0 && m.line > 0 && m.column >= 0 && p)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: f,
        source: p,
        original: m,
        name: v
      }));
    }
  }, u.prototype._serializeMappings = function() {
    for (var f = 0, m = 1, p = 0, v = 0, g = 0, E = 0, y = "", S, h, C, x, O = this._mappings.toArray(), T = 0, P = O.length; T < P; T++) {
      if (h = O[T], S = "", h.generatedLine !== m)
        for (f = 0; h.generatedLine !== m; )
          S += ";", m++;
      else if (T > 0) {
        if (!r.compareByGeneratedPositionsInflated(h, O[T - 1]))
          continue;
        S += ",";
      }
      S += t.encode(h.generatedColumn - f), f = h.generatedColumn, h.source != null && (x = this._sources.indexOf(h.source), S += t.encode(x - E), E = x, S += t.encode(h.originalLine - 1 - v), v = h.originalLine - 1, S += t.encode(h.originalColumn - p), p = h.originalColumn, h.name != null && (C = this._names.indexOf(h.name), S += t.encode(C - g), g = C)), y += S;
    }
    return y;
  }, u.prototype._generateSourcesContent = function(f, m) {
    return f.map(function(p) {
      if (!this._sourcesContents)
        return null;
      m != null && (p = r.relative(m, p));
      var v = r.toSetString(p);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, v) ? this._sourcesContents[v] : null;
    }, this);
  }, u.prototype.toJSON = function() {
    var f = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (f.file = this._file), this._sourceRoot != null && (f.sourceRoot = this._sourceRoot), this._sourcesContents && (f.sourcesContent = this._generateSourcesContent(f.sources, f.sourceRoot)), f;
  }, u.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, _f.SourceMapGenerator = u, _f;
}
var Gs = {}, Ef = {}, Ty;
function FS() {
  return Ty || (Ty = 1, (function(t) {
    t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2;
    function r(s, a, u, c, f, m) {
      var p = Math.floor((a - s) / 2) + s, v = f(u, c[p], !0);
      return v === 0 ? p : v > 0 ? a - p > 1 ? r(p, a, u, c, f, m) : m == t.LEAST_UPPER_BOUND ? a < c.length ? a : -1 : p : p - s > 1 ? r(s, p, u, c, f, m) : m == t.LEAST_UPPER_BOUND ? p : s < 0 ? -1 : s;
    }
    t.search = function(a, u, c, f) {
      if (u.length === 0)
        return -1;
      var m = r(
        -1,
        u.length,
        a,
        u,
        c,
        f || t.GREATEST_LOWER_BOUND
      );
      if (m < 0)
        return -1;
      for (; m - 1 >= 0 && c(u[m], u[m - 1], !0) === 0; )
        --m;
      return m;
    };
  })(Ef)), Ef;
}
var Cf = {}, Ny;
function QS() {
  if (Ny) return Cf;
  Ny = 1;
  function t(a, u, c) {
    var f = a[u];
    a[u] = a[c], a[c] = f;
  }
  function r(a, u) {
    return Math.round(a + Math.random() * (u - a));
  }
  function s(a, u, c, f) {
    if (c < f) {
      var m = r(c, f), p = c - 1;
      t(a, m, f);
      for (var v = a[f], g = c; g < f; g++)
        u(a[g], v) <= 0 && (p += 1, t(a, p, g));
      t(a, p + 1, g);
      var E = p + 1;
      s(a, u, c, E - 1), s(a, u, E + 1, f);
    }
  }
  return Cf.quickSort = function(a, u) {
    s(a, u, 0, a.length - 1);
  }, Cf;
}
var Oy;
function KS() {
  if (Oy) return Gs;
  Oy = 1;
  var t = po(), r = FS(), s = J_().ArraySet, a = K_(), u = QS().quickSort;
  function c(v, g) {
    var E = v;
    return typeof v == "string" && (E = t.parseSourceMapInput(v)), E.sections != null ? new p(E, g) : new f(E, g);
  }
  c.fromSourceMap = function(v, g) {
    return f.fromSourceMap(v, g);
  }, c.prototype._version = 3, c.prototype.__generatedMappings = null, Object.defineProperty(c.prototype, "_generatedMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
    }
  }), c.prototype.__originalMappings = null, Object.defineProperty(c.prototype, "_originalMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
    }
  }), c.prototype._charIsMappingSeparator = function(g, E) {
    var y = g.charAt(E);
    return y === ";" || y === ",";
  }, c.prototype._parseMappings = function(g, E) {
    throw new Error("Subclasses must implement _parseMappings");
  }, c.GENERATED_ORDER = 1, c.ORIGINAL_ORDER = 2, c.GREATEST_LOWER_BOUND = 1, c.LEAST_UPPER_BOUND = 2, c.prototype.eachMapping = function(g, E, y) {
    var S = E || null, h = y || c.GENERATED_ORDER, C;
    switch (h) {
      case c.GENERATED_ORDER:
        C = this._generatedMappings;
        break;
      case c.ORIGINAL_ORDER:
        C = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var x = this.sourceRoot;
    C.map(function(O) {
      var T = O.source === null ? null : this._sources.at(O.source);
      return T = t.computeSourceURL(x, T, this._sourceMapURL), {
        source: T,
        generatedLine: O.generatedLine,
        generatedColumn: O.generatedColumn,
        originalLine: O.originalLine,
        originalColumn: O.originalColumn,
        name: O.name === null ? null : this._names.at(O.name)
      };
    }, this).forEach(g, S);
  }, c.prototype.allGeneratedPositionsFor = function(g) {
    var E = t.getArg(g, "line"), y = {
      source: t.getArg(g, "source"),
      originalLine: E,
      originalColumn: t.getArg(g, "column", 0)
    };
    if (y.source = this._findSourceIndex(y.source), y.source < 0)
      return [];
    var S = [], h = this._findMapping(
      y,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      r.LEAST_UPPER_BOUND
    );
    if (h >= 0) {
      var C = this._originalMappings[h];
      if (g.column === void 0)
        for (var x = C.originalLine; C && C.originalLine === x; )
          S.push({
            line: t.getArg(C, "generatedLine", null),
            column: t.getArg(C, "generatedColumn", null),
            lastColumn: t.getArg(C, "lastGeneratedColumn", null)
          }), C = this._originalMappings[++h];
      else
        for (var O = C.originalColumn; C && C.originalLine === E && C.originalColumn == O; )
          S.push({
            line: t.getArg(C, "generatedLine", null),
            column: t.getArg(C, "generatedColumn", null),
            lastColumn: t.getArg(C, "lastGeneratedColumn", null)
          }), C = this._originalMappings[++h];
    }
    return S;
  }, Gs.SourceMapConsumer = c;
  function f(v, g) {
    var E = v;
    typeof v == "string" && (E = t.parseSourceMapInput(v));
    var y = t.getArg(E, "version"), S = t.getArg(E, "sources"), h = t.getArg(E, "names", []), C = t.getArg(E, "sourceRoot", null), x = t.getArg(E, "sourcesContent", null), O = t.getArg(E, "mappings"), T = t.getArg(E, "file", null);
    if (y != this._version)
      throw new Error("Unsupported version: " + y);
    C && (C = t.normalize(C)), S = S.map(String).map(t.normalize).map(function(P) {
      return C && t.isAbsolute(C) && t.isAbsolute(P) ? t.relative(C, P) : P;
    }), this._names = s.fromArray(h.map(String), !0), this._sources = s.fromArray(S, !0), this._absoluteSources = this._sources.toArray().map(function(P) {
      return t.computeSourceURL(C, P, g);
    }), this.sourceRoot = C, this.sourcesContent = x, this._mappings = O, this._sourceMapURL = g, this.file = T;
  }
  f.prototype = Object.create(c.prototype), f.prototype.consumer = c, f.prototype._findSourceIndex = function(v) {
    var g = v;
    if (this.sourceRoot != null && (g = t.relative(this.sourceRoot, g)), this._sources.has(g))
      return this._sources.indexOf(g);
    var E;
    for (E = 0; E < this._absoluteSources.length; ++E)
      if (this._absoluteSources[E] == v)
        return E;
    return -1;
  }, f.fromSourceMap = function(g, E) {
    var y = Object.create(f.prototype), S = y._names = s.fromArray(g._names.toArray(), !0), h = y._sources = s.fromArray(g._sources.toArray(), !0);
    y.sourceRoot = g._sourceRoot, y.sourcesContent = g._generateSourcesContent(
      y._sources.toArray(),
      y.sourceRoot
    ), y.file = g._file, y._sourceMapURL = E, y._absoluteSources = y._sources.toArray().map(function(w) {
      return t.computeSourceURL(y.sourceRoot, w, E);
    });
    for (var C = g._mappings.toArray().slice(), x = y.__generatedMappings = [], O = y.__originalMappings = [], T = 0, P = C.length; T < P; T++) {
      var l = C[T], _ = new m();
      _.generatedLine = l.generatedLine, _.generatedColumn = l.generatedColumn, l.source && (_.source = h.indexOf(l.source), _.originalLine = l.originalLine, _.originalColumn = l.originalColumn, l.name && (_.name = S.indexOf(l.name)), O.push(_)), x.push(_);
    }
    return u(y.__originalMappings, t.compareByOriginalPositions), y;
  }, f.prototype._version = 3, Object.defineProperty(f.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function m() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  f.prototype._parseMappings = function(g, E) {
    for (var y = 1, S = 0, h = 0, C = 0, x = 0, O = 0, T = g.length, P = 0, l = {}, _ = {}, w = [], k = [], R, L, j, D, q; P < T; )
      if (g.charAt(P) === ";")
        y++, P++, S = 0;
      else if (g.charAt(P) === ",")
        P++;
      else {
        for (R = new m(), R.generatedLine = y, D = P; D < T && !this._charIsMappingSeparator(g, D); D++)
          ;
        if (L = g.slice(P, D), j = l[L], j)
          P += L.length;
        else {
          for (j = []; P < D; )
            a.decode(g, P, _), q = _.value, P = _.rest, j.push(q);
          if (j.length === 2)
            throw new Error("Found a source, but no line and column");
          if (j.length === 3)
            throw new Error("Found a source and line, but no column");
          l[L] = j;
        }
        R.generatedColumn = S + j[0], S = R.generatedColumn, j.length > 1 && (R.source = x + j[1], x += j[1], R.originalLine = h + j[2], h = R.originalLine, R.originalLine += 1, R.originalColumn = C + j[3], C = R.originalColumn, j.length > 4 && (R.name = O + j[4], O += j[4])), k.push(R), typeof R.originalLine == "number" && w.push(R);
      }
    u(k, t.compareByGeneratedPositionsDeflated), this.__generatedMappings = k, u(w, t.compareByOriginalPositions), this.__originalMappings = w;
  }, f.prototype._findMapping = function(g, E, y, S, h, C) {
    if (g[y] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + g[y]);
    if (g[S] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + g[S]);
    return r.search(g, E, h, C);
  }, f.prototype.computeColumnSpans = function() {
    for (var g = 0; g < this._generatedMappings.length; ++g) {
      var E = this._generatedMappings[g];
      if (g + 1 < this._generatedMappings.length) {
        var y = this._generatedMappings[g + 1];
        if (E.generatedLine === y.generatedLine) {
          E.lastGeneratedColumn = y.generatedColumn - 1;
          continue;
        }
      }
      E.lastGeneratedColumn = 1 / 0;
    }
  }, f.prototype.originalPositionFor = function(g) {
    var E = {
      generatedLine: t.getArg(g, "line"),
      generatedColumn: t.getArg(g, "column")
    }, y = this._findMapping(
      E,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      t.compareByGeneratedPositionsDeflated,
      t.getArg(g, "bias", c.GREATEST_LOWER_BOUND)
    );
    if (y >= 0) {
      var S = this._generatedMappings[y];
      if (S.generatedLine === E.generatedLine) {
        var h = t.getArg(S, "source", null);
        h !== null && (h = this._sources.at(h), h = t.computeSourceURL(this.sourceRoot, h, this._sourceMapURL));
        var C = t.getArg(S, "name", null);
        return C !== null && (C = this._names.at(C)), {
          source: h,
          line: t.getArg(S, "originalLine", null),
          column: t.getArg(S, "originalColumn", null),
          name: C
        };
      }
    }
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, f.prototype.hasContentsOfAllSources = function() {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(g) {
      return g == null;
    }) : !1;
  }, f.prototype.sourceContentFor = function(g, E) {
    if (!this.sourcesContent)
      return null;
    var y = this._findSourceIndex(g);
    if (y >= 0)
      return this.sourcesContent[y];
    var S = g;
    this.sourceRoot != null && (S = t.relative(this.sourceRoot, S));
    var h;
    if (this.sourceRoot != null && (h = t.urlParse(this.sourceRoot))) {
      var C = S.replace(/^file:\/\//, "");
      if (h.scheme == "file" && this._sources.has(C))
        return this.sourcesContent[this._sources.indexOf(C)];
      if ((!h.path || h.path == "/") && this._sources.has("/" + S))
        return this.sourcesContent[this._sources.indexOf("/" + S)];
    }
    if (E)
      return null;
    throw new Error('"' + S + '" is not in the SourceMap.');
  }, f.prototype.generatedPositionFor = function(g) {
    var E = t.getArg(g, "source");
    if (E = this._findSourceIndex(E), E < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var y = {
      source: E,
      originalLine: t.getArg(g, "line"),
      originalColumn: t.getArg(g, "column")
    }, S = this._findMapping(
      y,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      t.getArg(g, "bias", c.GREATEST_LOWER_BOUND)
    );
    if (S >= 0) {
      var h = this._originalMappings[S];
      if (h.source === y.source)
        return {
          line: t.getArg(h, "generatedLine", null),
          column: t.getArg(h, "generatedColumn", null),
          lastColumn: t.getArg(h, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, Gs.BasicSourceMapConsumer = f;
  function p(v, g) {
    var E = v;
    typeof v == "string" && (E = t.parseSourceMapInput(v));
    var y = t.getArg(E, "version"), S = t.getArg(E, "sections");
    if (y != this._version)
      throw new Error("Unsupported version: " + y);
    this._sources = new s(), this._names = new s();
    var h = {
      line: -1,
      column: 0
    };
    this._sections = S.map(function(C) {
      if (C.url)
        throw new Error("Support for url field in sections not implemented.");
      var x = t.getArg(C, "offset"), O = t.getArg(x, "line"), T = t.getArg(x, "column");
      if (O < h.line || O === h.line && T < h.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return h = x, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: O + 1,
          generatedColumn: T + 1
        },
        consumer: new c(t.getArg(C, "map"), g)
      };
    });
  }
  return p.prototype = Object.create(c.prototype), p.prototype.constructor = c, p.prototype._version = 3, Object.defineProperty(p.prototype, "sources", {
    get: function() {
      for (var v = [], g = 0; g < this._sections.length; g++)
        for (var E = 0; E < this._sections[g].consumer.sources.length; E++)
          v.push(this._sections[g].consumer.sources[E]);
      return v;
    }
  }), p.prototype.originalPositionFor = function(g) {
    var E = {
      generatedLine: t.getArg(g, "line"),
      generatedColumn: t.getArg(g, "column")
    }, y = r.search(
      E,
      this._sections,
      function(h, C) {
        var x = h.generatedLine - C.generatedOffset.generatedLine;
        return x || h.generatedColumn - C.generatedOffset.generatedColumn;
      }
    ), S = this._sections[y];
    return S ? S.consumer.originalPositionFor({
      line: E.generatedLine - (S.generatedOffset.generatedLine - 1),
      column: E.generatedColumn - (S.generatedOffset.generatedLine === E.generatedLine ? S.generatedOffset.generatedColumn - 1 : 0),
      bias: g.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, p.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(g) {
      return g.consumer.hasContentsOfAllSources();
    });
  }, p.prototype.sourceContentFor = function(g, E) {
    for (var y = 0; y < this._sections.length; y++) {
      var S = this._sections[y], h = S.consumer.sourceContentFor(g, !0);
      if (h)
        return h;
    }
    if (E)
      return null;
    throw new Error('"' + g + '" is not in the SourceMap.');
  }, p.prototype.generatedPositionFor = function(g) {
    for (var E = 0; E < this._sections.length; E++) {
      var y = this._sections[E];
      if (y.consumer._findSourceIndex(t.getArg(g, "source")) !== -1) {
        var S = y.consumer.generatedPositionFor(g);
        if (S) {
          var h = {
            line: S.line + (y.generatedOffset.generatedLine - 1),
            column: S.column + (y.generatedOffset.generatedLine === S.line ? y.generatedOffset.generatedColumn - 1 : 0)
          };
          return h;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, p.prototype._parseMappings = function(g, E) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var y = 0; y < this._sections.length; y++)
      for (var S = this._sections[y], h = S.consumer._generatedMappings, C = 0; C < h.length; C++) {
        var x = h[C], O = S.consumer._sources.at(x.source);
        O = t.computeSourceURL(S.consumer.sourceRoot, O, this._sourceMapURL), this._sources.add(O), O = this._sources.indexOf(O);
        var T = null;
        x.name && (T = S.consumer._names.at(x.name), this._names.add(T), T = this._names.indexOf(T));
        var P = {
          source: O,
          generatedLine: x.generatedLine + (S.generatedOffset.generatedLine - 1),
          generatedColumn: x.generatedColumn + (S.generatedOffset.generatedLine === x.generatedLine ? S.generatedOffset.generatedColumn - 1 : 0),
          originalLine: x.originalLine,
          originalColumn: x.originalColumn,
          name: T
        };
        this.__generatedMappings.push(P), typeof P.originalLine == "number" && this.__originalMappings.push(P);
      }
    u(this.__generatedMappings, t.compareByGeneratedPositionsDeflated), u(this.__originalMappings, t.compareByOriginalPositions);
  }, Gs.IndexedSourceMapConsumer = p, Gs;
}
var kf = {}, My;
function JS() {
  if (My) return kf;
  My = 1;
  var t = W_().SourceMapGenerator, r = po(), s = /(\r?\n)/, a = 10, u = "$$$isSourceNode$$$";
  function c(f, m, p, v, g) {
    this.children = [], this.sourceContents = {}, this.line = f ?? null, this.column = m ?? null, this.source = p ?? null, this.name = g ?? null, this[u] = !0, v != null && this.add(v);
  }
  return c.fromStringWithSourceMap = function(m, p, v) {
    var g = new c(), E = m.split(s), y = 0, S = function() {
      var T = l(), P = l() || "";
      return T + P;
      function l() {
        return y < E.length ? E[y++] : void 0;
      }
    }, h = 1, C = 0, x = null;
    return p.eachMapping(function(T) {
      if (x !== null)
        if (h < T.generatedLine)
          O(x, S()), h++, C = 0;
        else {
          var P = E[y] || "", l = P.substr(0, T.generatedColumn - C);
          E[y] = P.substr(T.generatedColumn - C), C = T.generatedColumn, O(x, l), x = T;
          return;
        }
      for (; h < T.generatedLine; )
        g.add(S()), h++;
      if (C < T.generatedColumn) {
        var P = E[y] || "";
        g.add(P.substr(0, T.generatedColumn)), E[y] = P.substr(T.generatedColumn), C = T.generatedColumn;
      }
      x = T;
    }, this), y < E.length && (x && O(x, S()), g.add(E.splice(y).join(""))), p.sources.forEach(function(T) {
      var P = p.sourceContentFor(T);
      P != null && (v != null && (T = r.join(v, T)), g.setSourceContent(T, P));
    }), g;
    function O(T, P) {
      if (T === null || T.source === void 0)
        g.add(P);
      else {
        var l = v ? r.join(v, T.source) : T.source;
        g.add(new c(
          T.originalLine,
          T.originalColumn,
          l,
          P,
          T.name
        ));
      }
    }
  }, c.prototype.add = function(m) {
    if (Array.isArray(m))
      m.forEach(function(p) {
        this.add(p);
      }, this);
    else if (m[u] || typeof m == "string")
      m && this.children.push(m);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + m
      );
    return this;
  }, c.prototype.prepend = function(m) {
    if (Array.isArray(m))
      for (var p = m.length - 1; p >= 0; p--)
        this.prepend(m[p]);
    else if (m[u] || typeof m == "string")
      this.children.unshift(m);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + m
      );
    return this;
  }, c.prototype.walk = function(m) {
    for (var p, v = 0, g = this.children.length; v < g; v++)
      p = this.children[v], p[u] ? p.walk(m) : p !== "" && m(p, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, c.prototype.join = function(m) {
    var p, v, g = this.children.length;
    if (g > 0) {
      for (p = [], v = 0; v < g - 1; v++)
        p.push(this.children[v]), p.push(m);
      p.push(this.children[v]), this.children = p;
    }
    return this;
  }, c.prototype.replaceRight = function(m, p) {
    var v = this.children[this.children.length - 1];
    return v[u] ? v.replaceRight(m, p) : typeof v == "string" ? this.children[this.children.length - 1] = v.replace(m, p) : this.children.push("".replace(m, p)), this;
  }, c.prototype.setSourceContent = function(m, p) {
    this.sourceContents[r.toSetString(m)] = p;
  }, c.prototype.walkSourceContents = function(m) {
    for (var p = 0, v = this.children.length; p < v; p++)
      this.children[p][u] && this.children[p].walkSourceContents(m);
    for (var g = Object.keys(this.sourceContents), p = 0, v = g.length; p < v; p++)
      m(r.fromSetString(g[p]), this.sourceContents[g[p]]);
  }, c.prototype.toString = function() {
    var m = "";
    return this.walk(function(p) {
      m += p;
    }), m;
  }, c.prototype.toStringWithSourceMap = function(m) {
    var p = {
      code: "",
      line: 1,
      column: 0
    }, v = new t(m), g = !1, E = null, y = null, S = null, h = null;
    return this.walk(function(C, x) {
      p.code += C, x.source !== null && x.line !== null && x.column !== null ? ((E !== x.source || y !== x.line || S !== x.column || h !== x.name) && v.addMapping({
        source: x.source,
        original: {
          line: x.line,
          column: x.column
        },
        generated: {
          line: p.line,
          column: p.column
        },
        name: x.name
      }), E = x.source, y = x.line, S = x.column, h = x.name, g = !0) : g && (v.addMapping({
        generated: {
          line: p.line,
          column: p.column
        }
      }), E = null, g = !1);
      for (var O = 0, T = C.length; O < T; O++)
        C.charCodeAt(O) === a ? (p.line++, p.column = 0, O + 1 === T ? (E = null, g = !1) : g && v.addMapping({
          source: x.source,
          original: {
            line: x.line,
            column: x.column
          },
          generated: {
            line: p.line,
            column: p.column
          },
          name: x.name
        })) : p.column++;
    }), this.walkSourceContents(function(C, x) {
      v.setSourceContent(C, x);
    }), { code: p.code, map: v };
  }, kf.SourceNode = c, kf;
}
var Ry;
function WS() {
  return Ry || (Ry = 1, Zs.SourceMapGenerator = W_().SourceMapGenerator, Zs.SourceMapConsumer = KS().SourceMapConsumer, Zs.SourceNode = JS().SourceNode), Zs;
}
var jy;
function ew() {
  return jy || (jy = 1, (function(t, r) {
    r.__esModule = !0;
    var s = un(), a = void 0;
    try {
      var u = WS();
      a = u.SourceNode;
    } catch {
    }
    a || (a = function(m, p, v, g) {
      this.src = "", g && this.add(g);
    }, a.prototype = {
      add: function(p) {
        s.isArray(p) && (p = p.join("")), this.src += p;
      },
      prepend: function(p) {
        s.isArray(p) && (p = p.join("")), this.src = p + this.src;
      },
      toStringWithSourceMap: function() {
        return { code: this.toString() };
      },
      toString: function() {
        return this.src;
      }
    });
    function c(m, p, v) {
      if (s.isArray(m)) {
        for (var g = [], E = 0, y = m.length; E < y; E++)
          g.push(p.wrap(m[E], v));
        return g;
      } else if (typeof m == "boolean" || typeof m == "number")
        return m + "";
      return m;
    }
    function f(m) {
      this.srcFile = m, this.source = [];
    }
    f.prototype = {
      isEmpty: function() {
        return !this.source.length;
      },
      prepend: function(p, v) {
        this.source.unshift(this.wrap(p, v));
      },
      push: function(p, v) {
        this.source.push(this.wrap(p, v));
      },
      merge: function() {
        var p = this.empty();
        return this.each(function(v) {
          p.add(["  ", v, `
`]);
        }), p;
      },
      each: function(p) {
        for (var v = 0, g = this.source.length; v < g; v++)
          p(this.source[v]);
      },
      empty: function() {
        var p = this.currentLocation || { start: {} };
        return new a(p.start.line, p.start.column, this.srcFile);
      },
      wrap: function(p) {
        var v = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return p instanceof a ? p : (p = c(p, this, v), new a(v.start.line, v.start.column, this.srcFile, p));
      },
      functionCall: function(p, v, g) {
        return g = this.generateList(g), this.wrap([p, v ? "." + v + "(" : "(", g, ")"]);
      },
      quotedString: function(p) {
        return '"' + (p + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(p) {
        var v = this, g = [];
        Object.keys(p).forEach(function(y) {
          var S = c(p[y], v);
          S !== "undefined" && g.push([v.quotedString(y), ":", S]);
        });
        var E = this.generateList(g);
        return E.prepend("{"), E.add("}"), E;
      },
      generateList: function(p) {
        for (var v = this.empty(), g = 0, E = p.length; g < E; g++)
          g && v.add(","), v.add(c(p[g], this));
        return v;
      },
      generateArray: function(p) {
        var v = this.generateList(p);
        return v.prepend("["), v.add("]"), v;
      }
    }, r.default = f, t.exports = r.default;
  })(rl, rl.exports)), rl.exports;
}
var Dy;
function tw() {
  return Dy || (Dy = 1, (function(t, r) {
    r.__esModule = !0;
    function s(y) {
      return y && y.__esModule ? y : { default: y };
    }
    var a = dh(), u = Gn(), c = s(u), f = un(), m = ew(), p = s(m);
    function v(y) {
      this.value = y;
    }
    function g() {
    }
    g.prototype = {
      // PUBLIC API: You can override these methods in a subclass to provide
      // alternative compiled forms for name lookup and buffering semantics
      nameLookup: function(S, h) {
        return this.internalNameLookup(S, h);
      },
      depthedLookup: function(S) {
        return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(S), ")"];
      },
      compilerInfo: function() {
        var S = a.COMPILER_REVISION, h = a.REVISION_CHANGES[S];
        return [S, h];
      },
      appendToBuffer: function(S, h, C) {
        return f.isArray(S) || (S = [S]), S = this.source.wrap(S, h), this.environment.isSimple ? ["return ", S, ";"] : C ? ["buffer += ", S, ";"] : (S.appendToBuffer = !0, S);
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function(S, h) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", S, ",", JSON.stringify(h), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function(S, h, C, x) {
        this.environment = S, this.options = h, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !x, this.name = this.environment.name, this.isChild = !!C, this.context = C || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(S, h), this.useDepths = this.useDepths || S.useDepths || S.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || S.useBlockParams;
        var O = S.opcodes, T = void 0, P = void 0, l = void 0, _ = void 0;
        for (l = 0, _ = O.length; l < _; l++)
          T = O[l], this.source.currentLocation = T.loc, P = P || T.loc, this[T.opcode].apply(this, T.args);
        if (this.source.currentLocation = P, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
          throw new c.default("Compile completed with content left on stack");
        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), x ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
        var w = this.createFunctionContext(x);
        if (this.isChild)
          return w;
        var k = {
          compiler: this.compilerInfo(),
          main: w
        };
        this.decorators && (k.main_d = this.decorators, k.useDecorators = !0);
        var R = this.context, L = R.programs, j = R.decorators;
        for (l = 0, _ = L.length; l < _; l++)
          L[l] && (k[l] = L[l], j[l] && (k[l + "_d"] = j[l], k.useDecorators = !0));
        return this.environment.usePartial && (k.usePartial = !0), this.options.data && (k.useData = !0), this.useDepths && (k.useDepths = !0), this.useBlockParams && (k.useBlockParams = !0), this.options.compat && (k.compat = !0), x ? k.compilerOptions = this.options : (k.compiler = JSON.stringify(k.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, k = this.objectLiteral(k), h.srcName ? (k = k.toStringWithSourceMap({ file: h.destName }), k.map = k.map && k.map.toString()) : k = k.toString()), k;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new p.default(this.options.srcName), this.decorators = new p.default(this.options.srcName);
      },
      createFunctionContext: function(S) {
        var h = this, C = "", x = this.stackVars.concat(this.registers.list);
        x.length > 0 && (C += ", " + x.join(", "));
        var O = 0;
        Object.keys(this.aliases).forEach(function(l) {
          var _ = h.aliases[l];
          _.children && _.referenceCount > 1 && (C += ", alias" + ++O + "=" + l, _.children[0] = "alias" + O);
        }), this.lookupPropertyFunctionIsUsed && (C += ", " + this.lookupPropertyFunctionVarDeclaration());
        var T = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && T.push("blockParams"), this.useDepths && T.push("depths");
        var P = this.mergeSource(C);
        return S ? (T.push(P), Function.apply(this, T)) : this.source.wrap(["function(", T.join(","), `) {
  `, P, "}"]);
      },
      mergeSource: function(S) {
        var h = this.environment.isSimple, C = !this.forceBuffer, x = void 0, O = void 0, T = void 0, P = void 0;
        return this.source.each(function(l) {
          l.appendToBuffer ? (T ? l.prepend("  + ") : T = l, P = l) : (T && (O ? T.prepend("buffer += ") : x = !0, P.add(";"), T = P = void 0), O = !0, h || (C = !1));
        }), C ? T ? (T.prepend("return "), P.add(";")) : O || this.source.push('return "";') : (S += ", buffer = " + (x ? "" : this.initializeBuffer()), T ? (T.prepend("return buffer + "), P.add(";")) : this.source.push("return buffer;")), S && this.source.prepend("var " + S.substring(2) + (x ? "" : `;
`)), this.source.merge();
      },
      lookupPropertyFunctionVarDeclaration: function() {
        return `
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim();
      },
      // [blockValue]
      //
      // On stack, before: hash, inverse, program, value
      // On stack, after: return value of blockHelperMissing
      //
      // The purpose of this opcode is to take a block of the form
      // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
      // replace it on the stack with the result of properly
      // invoking blockHelperMissing.
      blockValue: function(S) {
        var h = this.aliasable("container.hooks.blockHelperMissing"), C = [this.contextName(0)];
        this.setupHelperArgs(S, 0, C);
        var x = this.popStack();
        C.splice(1, 0, x), this.push(this.source.functionCall(h, "call", C));
      },
      // [ambiguousBlockValue]
      //
      // On stack, before: hash, inverse, program, value
      // Compiler value, before: lastHelper=value of last found helper, if any
      // On stack, after, if no lastHelper: same as [blockValue]
      // On stack, after, if lastHelper: value
      ambiguousBlockValue: function() {
        var S = this.aliasable("container.hooks.blockHelperMissing"), h = [this.contextName(0)];
        this.setupHelperArgs("", 0, h, !0), this.flushInline();
        var C = this.topStack();
        h.splice(1, 0, C), this.pushSource(["if (!", this.lastHelper, ") { ", C, " = ", this.source.functionCall(S, "call", h), "}"]);
      },
      // [appendContent]
      //
      // On stack, before: ...
      // On stack, after: ...
      //
      // Appends the string value of `content` to the current buffer
      appendContent: function(S) {
        this.pendingContent ? S = this.pendingContent + S : this.pendingLocation = this.source.currentLocation, this.pendingContent = S;
      },
      // [append]
      //
      // On stack, before: value, ...
      // On stack, after: ...
      //
      // Coerces `value` to a String and appends it to the current buffer.
      //
      // If `value` is truthy, or 0, it is coerced into a string and appended
      // Otherwise, the empty string is appended
      append: function() {
        if (this.isInline())
          this.replaceStack(function(h) {
            return [" != null ? ", h, ' : ""'];
          }), this.pushSource(this.appendToBuffer(this.popStack()));
        else {
          var S = this.popStack();
          this.pushSource(["if (", S, " != null) { ", this.appendToBuffer(S, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"]);
        }
      },
      // [appendEscaped]
      //
      // On stack, before: value, ...
      // On stack, after: ...
      //
      // Escape `value` and append it to the buffer
      appendEscaped: function() {
        this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"]));
      },
      // [getContext]
      //
      // On stack, before: ...
      // On stack, after: ...
      // Compiler value, after: lastContext=depth
      //
      // Set the value of the `lastContext` compiler value to the depth
      getContext: function(S) {
        this.lastContext = S;
      },
      // [pushContext]
      //
      // On stack, before: ...
      // On stack, after: currentContext, ...
      //
      // Pushes the value of the current context onto the stack.
      pushContext: function() {
        this.pushStackLiteral(this.contextName(this.lastContext));
      },
      // [lookupOnContext]
      //
      // On stack, before: ...
      // On stack, after: currentContext[name], ...
      //
      // Looks up the value of `name` on the current context and pushes
      // it onto the stack.
      lookupOnContext: function(S, h, C, x) {
        var O = 0;
        !x && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(S[O++])) : this.pushContext(), this.resolvePath("context", S, O, h, C);
      },
      // [lookupBlockParam]
      //
      // On stack, before: ...
      // On stack, after: blockParam[name], ...
      //
      // Looks up the value of `parts` on the given block param and pushes
      // it onto the stack.
      lookupBlockParam: function(S, h) {
        this.useBlockParams = !0, this.push(["blockParams[", S[0], "][", S[1], "]"]), this.resolvePath("context", h, 1);
      },
      // [lookupData]
      //
      // On stack, before: ...
      // On stack, after: data, ...
      //
      // Push the data lookup operator
      lookupData: function(S, h, C) {
        S ? this.pushStackLiteral("container.data(data, " + S + ")") : this.pushStackLiteral("data"), this.resolvePath("data", h, 0, !0, C);
      },
      resolvePath: function(S, h, C, x, O) {
        var T = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(E(this.options.strict && O, this, h, C, S));
          return;
        }
        for (var P = h.length; C < P; C++)
          this.replaceStack(function(l) {
            var _ = T.nameLookup(l, h[C], S);
            return x ? [" && ", _] : [" != null ? ", _, " : ", l];
          });
      },
      // [resolvePossibleLambda]
      //
      // On stack, before: value, ...
      // On stack, after: resolved value, ...
      //
      // If the `value` is a lambda, replace it on the stack by
      // the return value of the lambda
      resolvePossibleLambda: function() {
        this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"]);
      },
      // [pushStringParam]
      //
      // On stack, before: ...
      // On stack, after: string, currentContext, ...
      //
      // This opcode is designed for use in string mode, which
      // provides the string value of a parameter along with its
      // depth rather than resolving it immediately.
      pushStringParam: function(S, h) {
        this.pushContext(), this.pushString(h), h !== "SubExpression" && (typeof S == "string" ? this.pushString(S) : this.pushStackLiteral(S));
      },
      emptyHash: function(S) {
        this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(S ? "undefined" : "{}");
      },
      pushHash: function() {
        this.hash && this.hashes.push(this.hash), this.hash = { values: {}, types: [], contexts: [], ids: [] };
      },
      popHash: function() {
        var S = this.hash;
        this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(S.ids)), this.stringParams && (this.push(this.objectLiteral(S.contexts)), this.push(this.objectLiteral(S.types))), this.push(this.objectLiteral(S.values));
      },
      // [pushString]
      //
      // On stack, before: ...
      // On stack, after: quotedString(string), ...
      //
      // Push a quoted version of `string` onto the stack
      pushString: function(S) {
        this.pushStackLiteral(this.quotedString(S));
      },
      // [pushLiteral]
      //
      // On stack, before: ...
      // On stack, after: value, ...
      //
      // Pushes a value onto the stack. This operation prevents
      // the compiler from creating a temporary variable to hold
      // it.
      pushLiteral: function(S) {
        this.pushStackLiteral(S);
      },
      // [pushProgram]
      //
      // On stack, before: ...
      // On stack, after: program(guid), ...
      //
      // Push a program expression onto the stack. This takes
      // a compile-time guid and converts it into a runtime-accessible
      // expression.
      pushProgram: function(S) {
        S != null ? this.pushStackLiteral(this.programExpression(S)) : this.pushStackLiteral(null);
      },
      // [registerDecorator]
      //
      // On stack, before: hash, program, params..., ...
      // On stack, after: ...
      //
      // Pops off the decorator's parameters, invokes the decorator,
      // and inserts the decorator into the decorators list.
      registerDecorator: function(S, h) {
        var C = this.nameLookup("decorators", h, "decorator"), x = this.setupHelperArgs(h, S);
        this.decorators.push(["fn = ", this.decorators.functionCall(C, "", ["fn", "props", "container", x]), " || fn;"]);
      },
      // [invokeHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // Pops off the helper's parameters, invokes the helper,
      // and pushes the helper's return value onto the stack.
      //
      // If the helper is not found, `helperMissing` is called.
      invokeHelper: function(S, h, C) {
        var x = this.popStack(), O = this.setupHelper(S, h), T = [];
        C && T.push(O.name), T.push(x), this.options.strict || T.push(this.aliasable("container.hooks.helperMissing"));
        var P = ["(", this.itemsSeparatedBy(T, "||"), ")"], l = this.source.functionCall(P, "call", O.callParams);
        this.push(l);
      },
      itemsSeparatedBy: function(S, h) {
        var C = [];
        C.push(S[0]);
        for (var x = 1; x < S.length; x++)
          C.push(h, S[x]);
        return C;
      },
      // [invokeKnownHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // This operation is used when the helper is known to exist,
      // so a `helperMissing` fallback is not required.
      invokeKnownHelper: function(S, h) {
        var C = this.setupHelper(S, h);
        this.push(this.source.functionCall(C.name, "call", C.callParams));
      },
      // [invokeAmbiguous]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of disambiguation
      //
      // This operation is used when an expression like `{{foo}}`
      // is provided, but we don't know at compile-time whether it
      // is a helper or a path.
      //
      // This operation emits more code than the other options,
      // and can be avoided by passing the `knownHelpers` and
      // `knownHelpersOnly` flags at compile-time.
      invokeAmbiguous: function(S, h) {
        this.useRegister("helper");
        var C = this.popStack();
        this.emptyHash();
        var x = this.setupHelper(0, S, h), O = this.lastHelper = this.nameLookup("helpers", S, "helper"), T = ["(", "(helper = ", O, " || ", C, ")"];
        this.options.strict || (T[0] = "(helper = ", T.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", T, x.paramsInit ? ["),(", x.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", x.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(S, h, C) {
        var x = [], O = this.setupParams(h, 1, x);
        S && (h = this.popStack(), delete O.name), C && (O.indent = JSON.stringify(C)), O.helpers = "helpers", O.partials = "partials", O.decorators = "container.decorators", S ? x.unshift(h) : x.unshift(this.nameLookup("partials", h, "partial")), this.options.compat && (O.depths = "depths"), O = this.objectLiteral(O), x.push(O), this.push(this.source.functionCall("container.invokePartial", "", x));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(S) {
        var h = this.popStack(), C = void 0, x = void 0, O = void 0;
        this.trackIds && (O = this.popStack()), this.stringParams && (x = this.popStack(), C = this.popStack());
        var T = this.hash;
        C && (T.contexts[S] = C), x && (T.types[S] = x), O && (T.ids[S] = O), T.values[S] = h;
      },
      pushId: function(S, h, C) {
        S === "BlockParam" ? this.pushStackLiteral("blockParams[" + h[0] + "].path[" + h[1] + "]" + (C ? " + " + JSON.stringify("." + C) : "")) : S === "PathExpression" ? this.pushString(h) : S === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: g,
      compileChildren: function(S, h) {
        for (var C = S.children, x = void 0, O = void 0, T = 0, P = C.length; T < P; T++) {
          x = C[T], O = new this.compiler();
          var l = this.matchExistingProgram(x);
          if (l == null) {
            this.context.programs.push("");
            var _ = this.context.programs.length;
            x.index = _, x.name = "program" + _, this.context.programs[_] = O.compile(x, h, this.context, !this.precompile), this.context.decorators[_] = O.decorators, this.context.environments[_] = x, this.useDepths = this.useDepths || O.useDepths, this.useBlockParams = this.useBlockParams || O.useBlockParams, x.useDepths = this.useDepths, x.useBlockParams = this.useBlockParams;
          } else
            x.index = l.index, x.name = "program" + l.index, this.useDepths = this.useDepths || l.useDepths, this.useBlockParams = this.useBlockParams || l.useBlockParams;
        }
      },
      matchExistingProgram: function(S) {
        for (var h = 0, C = this.context.environments.length; h < C; h++) {
          var x = this.context.environments[h];
          if (x && x.equals(S))
            return x;
        }
      },
      programExpression: function(S) {
        var h = this.environment.children[S], C = [h.index, "data", h.blockParams];
        return (this.useBlockParams || this.useDepths) && C.push("blockParams"), this.useDepths && C.push("depths"), "container.program(" + C.join(", ") + ")";
      },
      useRegister: function(S) {
        this.registers[S] || (this.registers[S] = !0, this.registers.list.push(S));
      },
      push: function(S) {
        return S instanceof v || (S = this.source.wrap(S)), this.inlineStack.push(S), S;
      },
      pushStackLiteral: function(S) {
        this.push(new v(S));
      },
      pushSource: function(S) {
        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), S && this.source.push(S);
      },
      replaceStack: function(S) {
        var h = ["("], C = void 0, x = void 0, O = void 0;
        if (!this.isInline())
          throw new c.default("replaceStack on non-inline");
        var T = this.popStack(!0);
        if (T instanceof v)
          C = [T.value], h = ["(", C], O = !0;
        else {
          x = !0;
          var P = this.incrStack();
          h = ["((", this.push(P), " = ", T, ")"], C = this.topStack();
        }
        var l = S.call(this, C);
        O || this.popStack(), x && this.stackSlot--, this.push(h.concat(l, ")"));
      },
      incrStack: function() {
        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName();
      },
      topStackName: function() {
        return "stack" + this.stackSlot;
      },
      flushInline: function() {
        var S = this.inlineStack;
        this.inlineStack = [];
        for (var h = 0, C = S.length; h < C; h++) {
          var x = S[h];
          if (x instanceof v)
            this.compileStack.push(x);
          else {
            var O = this.incrStack();
            this.pushSource([O, " = ", x, ";"]), this.compileStack.push(O);
          }
        }
      },
      isInline: function() {
        return this.inlineStack.length;
      },
      popStack: function(S) {
        var h = this.isInline(), C = (h ? this.inlineStack : this.compileStack).pop();
        if (!S && C instanceof v)
          return C.value;
        if (!h) {
          if (!this.stackSlot)
            throw new c.default("Invalid stack pop");
          this.stackSlot--;
        }
        return C;
      },
      topStack: function() {
        var S = this.isInline() ? this.inlineStack : this.compileStack, h = S[S.length - 1];
        return h instanceof v ? h.value : h;
      },
      contextName: function(S) {
        return this.useDepths && S ? "depths[" + S + "]" : "depth" + S;
      },
      quotedString: function(S) {
        return this.source.quotedString(S);
      },
      objectLiteral: function(S) {
        return this.source.objectLiteral(S);
      },
      aliasable: function(S) {
        var h = this.aliases[S];
        return h ? (h.referenceCount++, h) : (h = this.aliases[S] = this.source.wrap(S), h.aliasable = !0, h.referenceCount = 1, h);
      },
      setupHelper: function(S, h, C) {
        var x = [], O = this.setupHelperArgs(h, S, x, C), T = this.nameLookup("helpers", h, "helper"), P = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: x,
          paramsInit: O,
          name: T,
          callParams: [P].concat(x)
        };
      },
      setupParams: function(S, h, C) {
        var x = {}, O = [], T = [], P = [], l = !C, _ = void 0;
        l && (C = []), x.name = this.quotedString(S), x.hash = this.popStack(), this.trackIds && (x.hashIds = this.popStack()), this.stringParams && (x.hashTypes = this.popStack(), x.hashContexts = this.popStack());
        var w = this.popStack(), k = this.popStack();
        (k || w) && (x.fn = k || "container.noop", x.inverse = w || "container.noop");
        for (var R = h; R--; )
          _ = this.popStack(), C[R] = _, this.trackIds && (P[R] = this.popStack()), this.stringParams && (T[R] = this.popStack(), O[R] = this.popStack());
        return l && (x.args = this.source.generateArray(C)), this.trackIds && (x.ids = this.source.generateArray(P)), this.stringParams && (x.types = this.source.generateArray(T), x.contexts = this.source.generateArray(O)), this.options.data && (x.data = "data"), this.useBlockParams && (x.blockParams = "blockParams"), x;
      },
      setupHelperArgs: function(S, h, C, x) {
        var O = this.setupParams(S, h, C);
        return O.loc = JSON.stringify(this.source.currentLocation), O = this.objectLiteral(O), x ? (this.useRegister("options"), C.push("options"), ["options=", O]) : C ? (C.push(O), "") : O;
      }
    }, (function() {
      for (var y = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), S = g.RESERVED_WORDS = {}, h = 0, C = y.length; h < C; h++)
        S[y[h]] = !0;
    })(), g.isValidJavaScriptVariableName = function(y) {
      return !g.RESERVED_WORDS[y] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(y);
    };
    function E(y, S, h, C, x) {
      var O = S.popStack(), T = h.length;
      for (y && T--; C < T; C++)
        O = S.nameLookup(O, h[C], x);
      return y ? [S.aliasable("container.strict"), "(", O, ", ", S.quotedString(h[C]), ", ", JSON.stringify(S.source.currentLocation), " )"] : O;
    }
    r.default = g, t.exports = r.default;
  })(nl, nl.exports)), nl.exports;
}
var zy;
function nw() {
  return zy || (zy = 1, (function(t, r) {
    r.__esModule = !0;
    function s(T) {
      return T && T.__esModule ? T : { default: T };
    }
    var a = HS(), u = s(a), c = F_(), f = s(c), m = VS(), p = $S(), v = tw(), g = s(v), E = Q_(), y = s(E), S = X_(), h = s(S), C = u.default.create;
    function x() {
      var T = C();
      return T.compile = function(P, l) {
        return p.compile(P, l, T);
      }, T.precompile = function(P, l) {
        return p.precompile(P, l, T);
      }, T.AST = f.default, T.Compiler = p.Compiler, T.JavaScriptCompiler = g.default, T.Parser = m.parser, T.parse = m.parse, T.parseWithoutProcessing = m.parseWithoutProcessing, T;
    }
    var O = x();
    O.create = x, h.default(O), O.Visitor = y.default, O.default = O, r.default = O, t.exports = r.default;
  })(zu, zu.exports)), zu.exports;
}
var bn = nw();
const je = SillyTavern.getContext();
new f_("dumb", {}).getSettings();
async function e0({
  profileId: t,
  userPrompt: r,
  buildPromptOptions: s,
  session: a,
  entriesGroupByWorldName: u,
  promptSettings: c,
  mainContextList: f,
  maxResponseToken: m,
  continueFrom: p
}) {
  if (!t)
    throw new Error("No connection profile selected.");
  const v = lh(t);
  if (!v)
    throw new Error(`Connection profile with ID "${t}" not found.`);
  const g = v.api ? je.CONNECT_API_MAP[v.api].selected : void 0;
  if (!g)
    throw new Error(`Could not determine API for profile "${v.name}".`);
  const E = {
    ...s,
    presetName: v.preset,
    contextName: v.context,
    instructName: v.instruct,
    syspromptName: v.sysprompt
  }, y = {};
  y.user = "{{user}}", y.char = "{{char}}", y.persona = "{{persona}}", y.blackListedEntries = a.blackListedEntries;
  const S = r.trim();
  p && p.mode === "revise" ? y.userInstructions = "" : y.userInstructions = bn.compile(S, { noEscape: !0 })(y);
  {
    const T = {};
    Object.entries(u).filter(
      ([P, l]) => l.length > 0 && a.selectedWorldNames.includes(P) && l.some((_) => !_?.disable)
    ).forEach(([P, l]) => {
      let _ = l.filter((k) => !k?.disable);
      const w = a.selectedEntryUids?.[P];
      if (w && w.length > 0) {
        const k = new Set(w);
        _ = _.filter((R) => k.has(R.uid));
      }
      _.length > 0 && (T[P] = _);
    }), y.currentLorebooks = T;
  }
  {
    const T = {};
    Object.entries(a.suggestedEntries).filter(([P, l]) => l.length > 0).forEach(([P, l]) => {
      T[P] = l.filter(
        (_) => !(P === p?.worldName && _.uid === p.entry.uid && _.comment === p.entry.comment)
      );
    }), y.suggestedLorebooks = T;
  }
  const h = [];
  {
    for (const T of f) {
      if (T.promptName === "chatHistory") {
        h.push(...(await E_(g, E)).result);
        continue;
      }
      const P = c[T.promptName];
      if (!P)
        continue;
      const l = {
        role: T.role,
        content: bn.compile(P.content, { noEscape: !0 })(y)
      };
      l.content = je.substituteParams(l.content), l.content && h.push(l);
    }
    p && (p.mode === "continue" ? h.push({
      role: "assistant",
      content: bS(p.worldName, p.entry)
    }) : p.mode === "revise" && (h.push({
      role: "assistant",
      content: SS(p.worldName, p.entry)
    }), S && h.push({
      role: "user",
      content: S
    })));
  }
  const C = await G_(
    t,
    async (T) => je.ConnectionManagerRequestService.sendRequest(T, h, m)
  ), x = h.find((T) => T.role === "assistant");
  if (!C.content)
    throw new Error("AI returned an empty response. Check your connection profile, model, and console for details.");
  let O = _S(C.content, {
    // Only merge with previous content if we are in 'continue' mode.
    previousContent: p && p.mode === "continue" ? x?.content : void 0
  });
  if (Object.keys(O).length === 0) {
    console.error("AI response received but no entries were parsed. Raw content:", String(C.content));
    const T = String(C.content).trim().slice(0, 200);
    throw new Error(
      `AI responded but no <lorebooks> XML was found — the model likely ignored the format instructions. Try a stronger model or strengthen the Response Rules prompt. Raw response preview: "${T}${C.content.length > 200 ? "…" : ""}" (see console for full output).`
    );
  }
  return Object.entries(O).forEach(([T, P]) => {
    u[T] && P.forEach((l) => {
      const _ = u[T]?.find((w) => w.uid === l.uid);
      _ && (l.key.length === 0 && (l.key = _.key), l.comment || (l.comment = _.comment)), (l.comment === null || l.comment === void 0) && (l.comment = "");
    });
  }), O = p ? { [p.worldName]: [O[p.worldName][0]] } : O, O;
}
function rw(t, r, s) {
  s[r] || (s[r] = []);
  const a = s[r], u = a.findIndex((m) => m.uid === t.uid);
  let c;
  const f = u !== -1;
  if (f)
    c = a[u];
  else {
    const m = { entries: {} };
    a.forEach((g) => m.entries[g.uid] = g);
    const p = rh(r, m);
    if (!p)
      throw new Error(`Failed to create a new entry structure in world "${r}"`);
    const v = a.length > 0 ? a[a.length - 1] : void 0;
    if (v) {
      const g = p.uid;
      Object.assign(p, v), p.uid = g;
    }
    c = p, a.push(c);
  }
  return c.key = t.key, c.content = t.content, c.comment = t.comment, { modifiedEntry: c, status: f ? "updated" : "added" };
}
function aw() {
  const t = je.extensionSettings?.connectionManager?.profiles ?? [];
  return t.map((r) => ({
    value: r.name ?? r.id,
    valueProvider: (s) => t.find((a) => a.name?.includes(s))?.name
  }));
}
const Js = "SillyTavern-WorldInfo-Recommender", iw = "0.2.0", sw = "F_1.4", ow = {
  EXTENSION: "worldInfoRecommender"
}, sl = [
  "stDescription",
  "currentLorebooks",
  "blackListedEntries",
  "suggestedLorebooks",
  "responseRules",
  "taskDescription",
  "reviseJsonPrompt",
  "reviseXmlPrompt",
  "reviseTaskDescription",
  "reviseGlobalStateUpdate",
  "reviseGlobalStateUpdateAddedModified",
  "reviseGlobalStateUpdateRemoved"
], st = {
  stDescription: d8,
  currentLorebooks: f8,
  blackListedEntries: h8,
  suggestedLorebooks: p8,
  responseRules: m8,
  taskDescription: g8,
  reviseJsonPrompt: v8,
  reviseXmlPrompt: y8,
  reviseTaskDescription: _8,
  reviseGlobalStateUpdate: w8,
  reviseGlobalStateUpdateAddedModified: b8,
  reviseGlobalStateUpdateRemoved: S8
}, fh = {
  version: iw,
  formatVersion: sw,
  profileId: "",
  maxContextType: "profile",
  maxContextValue: 16384,
  maxResponseToken: 1024,
  contextToSend: {
    stDescription: !0,
    messages: {
      type: "all",
      first: 10,
      last: 10,
      range: {
        start: 0,
        end: 10
      }
    },
    charCard: !0,
    authorNote: !0,
    worldInfo: !0,
    suggestedEntries: !0
  },
  defaultPromptEngineeringMode: "native",
  prompts: {
    stDescription: {
      label: "SillyTavern Description",
      content: st.stDescription,
      isDefault: !0
    },
    currentLorebooks: {
      label: "Current Lorebooks",
      content: st.currentLorebooks,
      isDefault: !0
    },
    blackListedEntries: {
      label: "Blacklisted Entries",
      content: st.blackListedEntries,
      isDefault: !0
    },
    suggestedLorebooks: {
      label: "Suggested Lorebooks",
      content: st.suggestedLorebooks,
      isDefault: !0
    },
    responseRules: {
      label: "Response Rules",
      content: st.responseRules,
      isDefault: !0
    },
    taskDescription: {
      label: "Task Description",
      content: st.taskDescription,
      isDefault: !0
    },
    reviseJsonPrompt: {
      content: st.reviseJsonPrompt,
      isDefault: !0,
      label: "Revise Session (JSON Mode)"
    },
    reviseXmlPrompt: {
      content: st.reviseXmlPrompt,
      isDefault: !0,
      label: "Revise Session (XML Mode)"
    },
    reviseTaskDescription: {
      content: st.reviseTaskDescription,
      isDefault: !0,
      label: "Revise Session Task Description"
    },
    reviseGlobalStateUpdate: {
      content: st.reviseGlobalStateUpdate,
      isDefault: !0,
      label: "Revise Global State Update (Wrapper)"
    },
    reviseGlobalStateUpdateAddedModified: {
      content: st.reviseGlobalStateUpdateAddedModified,
      isDefault: !0,
      label: "Revise Global State (Added/Modified)"
    },
    reviseGlobalStateUpdateRemoved: {
      content: st.reviseGlobalStateUpdateRemoved,
      isDefault: !0,
      label: "Revise Global State (Removed)"
    }
  },
  promptPreset: "default",
  promptPresets: {
    default: {
      content: ""
    }
  },
  mainContextTemplatePreset: "default",
  mainContextTemplatePresets: {
    default: {
      prompts: [
        {
          promptName: "chatHistory",
          // this is exception, since chat history is not exactly a prompt
          enabled: !0,
          role: "system"
        },
        {
          promptName: "stDescription",
          enabled: !0,
          role: "system"
        },
        {
          promptName: "currentLorebooks",
          enabled: !0,
          role: "system"
        },
        {
          promptName: "blackListedEntries",
          enabled: !0,
          role: "system"
        },
        {
          promptName: "suggestedLorebooks",
          enabled: !0,
          role: "system"
        },
        {
          promptName: "responseRules",
          enabled: !0,
          role: "system"
        },
        {
          promptName: "taskDescription",
          enabled: !0,
          role: "user"
        }
      ]
    }
  }
};
function Py(t) {
  const s = t.replace(/[^\w\s]/g, "").split(/\s+/).filter(Boolean);
  let a = !1;
  return s.map((u, c) => {
    const f = u.replace(/^\d+/, "");
    if (f) {
      const m = a ? `${f[0].toUpperCase()}${f.slice(1).toLowerCase()}` : f.toLowerCase();
      return a || (a = !0), m;
    }
    return "";
  }).join("");
}
const It = new f_(ow.EXTENSION, fh);
async function uw() {
  return new Promise((t, r) => {
    It.initializeSettings({
      strategy: [
        {
          from: "F_1.0",
          to: "F_1.1",
          action(s) {
            const a = {
              ...fh,
              ...s
            };
            return delete a.stWorldInfoPrompt, delete a.usingDefaultStWorldInfoPrompt, delete a.lorebookDefinitionPrompt, delete a.usingDefaultLorebookDefinitionPrompt, delete a.lorebookRulesPrompt, delete a.usingDefaultLorebookRulesPrompt, delete a.responseRulesPrompt, delete a.usingDefaultResponseRulesPrompt, a;
          }
        },
        {
          from: "F_1.1",
          to: "F_1.2",
          action(s) {
            const a = { ...s };
            return a.formatVersion = "F_1.2", a.prompts.taskDescription.content === `## Rules
- Don't suggest already existing or suggested entries.

## Your Task
{{userInstructions}}` ? (a.prompts.taskDescription.content = st.taskDescription, a.prompts.taskDescription.isDefault = !0) : a.prompts.taskDescription.isDefault = !1, a;
          }
        },
        {
          from: "F_1.2",
          to: "F_1.3",
          action(s) {
            const a = { ...s };
            return a.formatVersion = "F_1.3", a.defaultPromptEngineeringMode = "native", a.prompts || (a.prompts = {}), a.prompts.reviseJsonPrompt = {
              content: st.reviseJsonPrompt,
              isDefault: !0,
              label: "Revise Session (JSON Mode)"
            }, a.prompts.reviseXmlPrompt = {
              content: st.reviseXmlPrompt,
              isDefault: !0,
              label: "Revise Session (XML Mode)"
            }, a.prompts.reviseTaskDescription = {
              content: st.reviseTaskDescription,
              isDefault: !0,
              label: "Revise Session Task Description"
            }, s.prompts.currentLorebooks.isDefault && (a.prompts.currentLorebooks.content = st.currentLorebooks, a.prompts.currentLorebooks.isDefault = !0), s.prompts.blackListedEntries.isDefault && (a.prompts.blackListedEntries.content = st.blackListedEntries, a.prompts.blackListedEntries.isDefault = !0), s.prompts.suggestedLorebooks.isDefault && (a.prompts.suggestedLorebooks.content = st.suggestedLorebooks, a.prompts.suggestedLorebooks.isDefault = !0), a;
          }
        },
        {
          from: "F_1.3",
          to: "F_1.4",
          action(s) {
            const a = { ...s };
            return a.formatVersion = "F_1.4", a.prompts || (a.prompts = {}), a.prompts.reviseGlobalStateUpdate = {
              content: st.reviseGlobalStateUpdate,
              isDefault: !0,
              label: "Revise Global State Update (Wrapper)"
            }, a.prompts.reviseGlobalStateUpdateAddedModified = {
              content: st.reviseGlobalStateUpdateAddedModified,
              isDefault: !0,
              label: "Revise Global State (Added/Modified)"
            }, a.prompts.reviseGlobalStateUpdateRemoved = {
              content: st.reviseGlobalStateUpdateRemoved,
              isDefault: !0,
              label: "Revise Global State (Removed)"
            }, a;
          }
        }
      ]
    }).then((s) => {
      t();
    }).catch((s) => {
      console.error(`[${Js}] Error initializing settings:`, s), ge("error", `[${Js}] Failed to initialize settings: ${s.message}`), je.Popup.show.confirm(
        `[${Js}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((a) => {
        a && (It.resetSettings(), ge("success", `[${Js}] Settings reset. Reloading may be required.`), t());
      });
    });
  });
}
const Ee = ({ children: t, className: r, overrideDefaults: s = !1, ...a }) => {
  const u = ie.useMemo(() => {
    const c = [];
    return s || c.push("menu_button", "interactable"), c.push(r), c.filter(Boolean).join(" ");
  }, [s, r]);
  return /* @__PURE__ */ A.jsx("button", { className: u, ...a, children: t });
}, t0 = ({ label: t, className: r, overrideDefaults: s = !1, type: a = "text", ...u }) => {
  const c = ie.useMemo(() => {
    const f = [];
    return s || (a === "text" || a === "number" || a === "password" || a === "email" || a === "search") && f.push("text_pole"), f.push(r), f.filter(Boolean).join(" ");
  }, [s, r, a]);
  if (a === "checkbox") {
    const f = s ? r : `checkbox_label ${r ?? ""}`.trim();
    return /* @__PURE__ */ A.jsxs("label", { className: f, children: [
      /* @__PURE__ */ A.jsx("input", { type: "checkbox", ...u }),
      t && /* @__PURE__ */ A.jsx("span", { children: t })
    ] });
  }
  return /* @__PURE__ */ A.jsx("input", { type: a, className: c, ...u });
}, Ol = ({ children: t, className: r, overrideDefaults: s = !1, ...a }) => {
  const u = ie.useMemo(() => {
    const c = [];
    return s || c.push("text_pole"), c.push(r), c.filter(Boolean).join(" ");
  }, [s, r]);
  return /* @__PURE__ */ A.jsx("select", { className: u, ...a, children: t });
}, Zn = ({ children: t, className: r, overrideDefaults: s = !1, ...a }) => {
  const u = ie.useMemo(() => {
    const c = [];
    return s || c.push("text_pole", "textarea_compact"), c.push(r), c.filter(Boolean).join(" ");
  }, [s, r]);
  return /* @__PURE__ */ A.jsx("textarea", { className: u, ...a, children: t });
};
var lw = d_(), Lt = /* @__PURE__ */ ((t) => (t[t.TEXT = 1] = "TEXT", t[t.CONFIRM = 2] = "CONFIRM", t[t.INPUT = 3] = "INPUT", t[t.DISPLAY = 4] = "DISPLAY", t))(Lt || {}), Kr = /* @__PURE__ */ ((t) => (t[t.AFFIRMATIVE = 1] = "AFFIRMATIVE", t[t.NEGATIVE = 0] = "NEGATIVE", t[t.CANCELLED = null] = "CANCELLED", t))(Kr || {});
const cw = SillyTavern.getContext(), tr = ({
  content: t,
  type: r,
  inputValue: s = "",
  options: a = {},
  preventEscape: u = !1,
  onComplete: c
}) => {
  var f;
  const m = ie.useRef(null), p = ie.useRef(null), [v, g] = ie.useState(!1), [E, y] = ie.useState(null), S = ie.useRef(cw.uuidv4()), h = ie.useRef({
    id: S.current,
    type: r,
    dlg: null,
    mainInput: null,
    lastFocus: null,
    value: void 0,
    result: void 0,
    inputResults: void 0
  });
  ie.useEffect(() => {
    const T = m.current;
    if (!T) return;
    const P = (l) => {
      l.preventDefault(), u || C(Kr.CANCELLED);
    };
    return T.addEventListener("cancel", P), h.current.dlg = T, h.current.mainInput = p.current, Ai.util.popups.push(h.current), T.showModal || (T.classList.add("poly_dialog"), pv.registerDialog(T), new ResizeObserver((l) => {
      for (const _ of l)
        pv.reposition(_.target);
    }).observe(T)), T.showModal(), Jd(), () => {
      hv(Ai.util.popups, h.current), Jd(), T.removeEventListener("cancel", P);
    };
  }, []);
  const C = async (T) => {
    var P, l;
    let _ = T;
    if (r === Lt.INPUT && (T >= Kr.AFFIRMATIVE ? _ = (P = p.current) == null ? void 0 : P.value : T === Kr.NEGATIVE ? _ = !1 : T === Kr.CANCELLED ? _ = null : _ = !1), (l = a.customInputs) != null && l.length) {
      const k = new Map(
        a.customInputs.map((R) => {
          var L;
          const j = (L = m.current) == null ? void 0 : L.querySelector(`#${R.id}`);
          return [j.id, j.checked];
        })
      );
      h.current.inputResults = k;
    }
    if (h.current.result = T, h.current.value = _, a.onClosing && !await a.onClosing(h.current)) {
      g(!0), h.current.value = void 0, h.current.result = void 0, h.current.inputResults = void 0;
      return;
    }
    g(!1), Ai.util.lastResult = {
      value: _,
      result: T,
      inputResults: h.current.inputResults
    };
    const w = m.current;
    w && (w.setAttribute("closing", ""), Jd(), b2(w, async () => {
      var k;
      if (w.close(), a.onClose && await a.onClose(h.current), hv(Ai.util.popups, h.current), Ai.util.popups.length > 0) {
        const R = (k = document.activeElement) == null ? void 0 : k.closest(".popup"), L = R?.getAttribute("data-id"), j = Ai.util.popups.find((D) => D.id === L);
        j && j.lastFocus && j.lastFocus.focus();
      }
      c(_);
    }));
  }, x = (T) => {
    T.target instanceof HTMLElement && T.target !== m.current && (y(T.target), h.current.lastFocus = T.target);
  }, O = async (T) => {
  };
  return lw.createPortal(
    /* @__PURE__ */ A.jsx(
      "dialog",
      {
        ref: m,
        className: (() => {
          const T = ["popup"];
          return a.wide && T.push("wide_dialogue_popup"), a.wider && T.push("wider_dialogue_popup"), a.large && T.push("large_dialogue_popup"), a.transparent && T.push("transparent_dialogue_popup"), a.allowHorizontalScrolling && T.push("horizontal_scrolling_dialogue_popup"), a.allowVerticalScrolling && T.push("vertical_scrolling_dialogue_popup"), a.animation && T.push(`popup--animation-${a.animation}`), T.join(" ");
        })(),
        "data-id": S.current,
        onKeyDown: O,
        onFocus: x,
        children: /* @__PURE__ */ A.jsxs("div", { className: "popup-body", children: [
          /* @__PURE__ */ A.jsx("div", { className: "popup-content", children: t }),
          r === Lt.INPUT && /* @__PURE__ */ A.jsx(
            "textarea",
            {
              ref: p,
              className: "popup-input text_pole result-control auto-select",
              rows: a.rows ?? 1,
              defaultValue: s,
              "data-result": "1",
              "data-result-event": "submit"
            }
          ),
          a.customInputs && /* @__PURE__ */ A.jsx("div", { className: "popup-inputs", children: a.customInputs.map((T) => /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label justifyCenter", htmlFor: T.id, children: [
            /* @__PURE__ */ A.jsx("input", { type: "checkbox", id: T.id, defaultChecked: T.defaultState }),
            /* @__PURE__ */ A.jsx("span", { "data-i18n": T.label, children: T.label }),
            T.tooltip && /* @__PURE__ */ A.jsx(
              "div",
              {
                className: "fa-solid fa-circle-info opacity50p",
                title: T.tooltip,
                "data-i18n": `[title]${T.tooltip}`
              }
            )
          ] }, T.id)) }),
          r !== Lt.DISPLAY && /* @__PURE__ */ A.jsxs("div", { className: "popup-controls", children: [
            (f = a.customButtons) == null ? void 0 : f.map((T, P) => {
              const l = typeof T == "string" ? { text: T, result: P + 2 } : T;
              return /* @__PURE__ */ A.jsx(
                "div",
                {
                  className: `menu_button popup-button-custom result-control ${l.classes ?? ""}`,
                  "data-result": l.result,
                  onClick: () => {
                    var _;
                    (_ = l.action) == null || _.call(l), C(l.result ?? P + 2);
                  },
                  "data-i18n": l.text,
                  children: l.text
                },
                P
              );
            }),
            r !== Lt.DISPLAY && a.okButton !== !1 && /* @__PURE__ */ A.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => C(Kr.AFFIRMATIVE),
                "data-result": "1",
                children: typeof a.okButton == "string" ? a.okButton : "OK"
              }
            ),
            r !== Lt.DISPLAY && a.cancelButton !== !1 && /* @__PURE__ */ A.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => C(Kr.NEGATIVE),
                "data-result": "0",
                children: typeof a.cancelButton == "string" ? a.cancelButton : "Cancel"
              }
            )
          ] }),
          r === Lt.DISPLAY && /* @__PURE__ */ A.jsx(
            "div",
            {
              className: "popup-button-close right_menu_button fa-solid fa-circle-xmark",
              onClick: () => C(Kr.CANCELLED),
              "data-result": "0",
              title: "Close popup",
              "data-i18n": "[title]Close popup"
            }
          )
        ] })
      }
    ),
    document.body
  );
}, Vs = (t, r, s) => {
  if (!t || !t.api)
    return !1;
  const a = s[t.api];
  if (!a || !Object.hasOwn(r, a.selected))
    return !1;
  switch (a.selected) {
    case "openai":
      return !!a.source;
    case "textgenerationwebui":
      return !!a.type;
  }
  return !1;
}, Sr = SillyTavern.getContext(), n0 = ({
  initialSelectedProfileId: t,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: s = "Select a Connection Profile",
  onChange: a,
  onCreate: u,
  onUpdate: c,
  onDelete: f
}) => {
  const [m, p] = ie.useState(t ?? ""), [v, g] = ie.useState(Date.now()), { isEnabled: E, profiles: y, connectApiMap: S } = ie.useMemo(() => {
    var x, O;
    return (x = Sr.extensionSettings.disabledExtensions) != null && x.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((O = Sr.extensionSettings.connectionManager) == null ? void 0 : O.profiles) ?? [],
      connectApiMap: Sr.CONNECT_API_MAP
    };
  }, [v]);
  ie.useEffect(() => {
    if (!E) return;
    const x = (P) => {
      Vs(P, r, S) && (g(Date.now()), u?.(P));
    }, O = (P, l) => {
      const _ = Vs(P, r, S), w = Vs(l, r, S);
      (_ || w) && g(Date.now()), c?.(P, l), m === P.id && !w && (p(""), a?.(void 0));
    }, T = (P) => {
      Vs(P, r, S) && (g(Date.now()), f?.(P), m === P.id && (p(""), a?.(void 0)));
    };
    return Sr.eventSource.on("CONNECTION_PROFILE_CREATED", x), Sr.eventSource.on("CONNECTION_PROFILE_UPDATED", O), Sr.eventSource.on("CONNECTION_PROFILE_DELETED", T), () => {
      Sr.eventSource.removeListener("CONNECTION_PROFILE_CREATED", x), Sr.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", O), Sr.eventSource.removeListener("CONNECTION_PROFILE_DELETED", T);
    };
  }, [E, m, r, S, a, u, c, f]);
  const h = ie.useMemo(() => {
    if (!E) return [];
    const x = y.filter((T) => Vs(T, r, S)), O = {};
    for (const [T, P] of Object.entries(r))
      O[T] = { label: P, profiles: [] };
    for (const T of x) {
      const P = S[T.api];
      O[P.selected] && O[P.selected].profiles.push(T);
    }
    for (const T of Object.values(O))
      T.profiles.sort((P, l) => (P.name ?? "").localeCompare(l.name ?? ""));
    return Object.values(O).filter((T) => T.profiles.length > 0);
  }, [E, y, r, S]), C = ie.useCallback(
    (x) => {
      const O = x.target.value;
      p(O);
      const T = y.find((P) => P.id === O);
      a?.(T);
    },
    [y, a]
  );
  return E ? /* @__PURE__ */ A.jsxs(Ol, { value: m, onChange: C, children: [
    /* @__PURE__ */ A.jsx("option", { value: "", children: s }),
    h.map((x) => /* @__PURE__ */ A.jsx("optgroup", { label: x.label, children: x.profiles.map((O) => /* @__PURE__ */ A.jsx("option", { value: O.id, children: O.name }, O.id)) }, x.label))
  ] }) : /* @__PURE__ */ A.jsx(Ol, { disabled: !0, value: "", children: /* @__PURE__ */ A.jsx("option", { children: "Connection Manager disabled" }) });
}, dw = wl.memo(
  ({ item: t, showToggleButton: r, showDeleteButton: s, showSelectInput: a, onToggle: u, onDelete: c, onSelectChange: f }) => {
    const {
      id: m,
      label: p,
      enabled: v,
      canDelete: g = !0,
      canToggle: E = !0,
      showSelect: y = !0,
      canSelect: S = !0,
      selectOptions: h = [],
      selectValue: C
    } = t, x = {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      border: "1px solid var(--SmartThemeBorderColor, #ccc)",
      color: "var(--SmartThemeBodyColor, #333)",
      marginBottom: "2px",
      opacity: r && !v ? 0.6 : 1
    }, O = { cursor: "pointer", flexShrink: 0 }, T = { display: "inline-block", flexShrink: 0, marginRight: "10px" };
    return /* @__PURE__ */ A.jsxs("li", { className: "sortable-list-item", style: x, "data-id": m, children: [
      /* @__PURE__ */ A.jsx(
        "span",
        {
          className: "drag-handle fas fa-bars",
          style: { cursor: "grab", marginRight: "10px", color: "var(--SmartThemeBodyColor, #555)", flexShrink: 0 }
        }
      ),
      /* @__PURE__ */ A.jsx(
        "span",
        {
          className: "item-label",
          style: {
            flexGrow: 1,
            marginRight: "10px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          },
          children: p
        }
      ),
      a && y && S && /* @__PURE__ */ A.jsx(
        Ol,
        {
          value: C,
          onChange: (P) => f(m, P.target.value),
          disabled: !v,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: h.length === 0 ? /* @__PURE__ */ A.jsx("option", { disabled: !0, children: "--" }) : h.map((P) => /* @__PURE__ */ A.jsx("option", { value: P.value, children: P.label }, P.value))
        }
      ),
      a && (!y || !S) && /* @__PURE__ */ A.jsx("span", { style: T }),
      r && E && /* @__PURE__ */ A.jsx(
        Ee,
        {
          overrideDefaults: !0,
          className: `toggle-button fas ${v ? "fa-toggle-on" : "fa-toggle-off"}`,
          style: {
            ...O,
            marginRight: "10px",
            fontSize: "1.2em",
            color: v ? "var(--success-color, #4CAF50)" : "var(--SmartThemeBodyColor, #555)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => u(m)
        }
      ),
      r && !E && /* @__PURE__ */ A.jsx("span", { style: T }),
      s && g && /* @__PURE__ */ A.jsx(
        Ee,
        {
          overrideDefaults: !0,
          className: "delete-button fas fa-trash-can",
          style: {
            ...O,
            color: "var(--error-color, #f44336)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => c(m)
        }
      ),
      s && !g && /* @__PURE__ */ A.jsx("span", { style: { ...T, marginRight: 0 } })
    ] });
  }
), r0 = ({
  items: t,
  onItemsChange: r,
  showToggleButton: s = !1,
  showDeleteButton: a = !1,
  showSelectInput: u = !1,
  sortableJsOptions: c = {}
}) => {
  const f = ie.useRef(null), m = ie.useRef(null);
  ie.useEffect(() => (f.current && (m.current = Te.create(f.current, {
    handle: ".drag-handle",
    animation: 150,
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    filter: "select, button, .toggle-button, .delete-button",
    // Prevent drag on controls
    preventOnFilter: !1,
    ...c,
    onEnd: (E) => {
      const { oldIndex: y, newIndex: S } = E;
      if (y === void 0 || S === void 0 || y === S)
        return;
      const h = Array.from(t), [C] = h.splice(y, 1);
      h.splice(S, 0, C), r(h);
    }
  })), () => {
    var E;
    (E = m.current) == null || E.destroy(), m.current = null;
  }), [t, r, c]);
  const p = (E) => {
    r(t.map((y) => y.id === E ? { ...y, enabled: !y.enabled } : y));
  }, v = (E) => {
    r(t.filter((y) => y.id !== E));
  }, g = (E, y) => {
    r(t.map((S) => S.id === E ? { ...S, selectValue: y } : S));
  };
  return /* @__PURE__ */ A.jsx("ul", { ref: f, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: t.map((E) => /* @__PURE__ */ A.jsx(
    dw,
    {
      item: E,
      showToggleButton: s,
      showDeleteButton: a,
      showSelectInput: u,
      onToggle: p,
      onDelete: v,
      onSelectChange: g
    },
    E.id
  )) });
}, a0 = ({
  items: t,
  value: r,
  onChange: s,
  placeholder: a = "Select items...",
  closeOnSelect: u = !1,
  multiple: c = !0,
  disabled: f = !1,
  onBeforeSelection: m,
  enableSearch: p = !1,
  searchPlaceholder: v = "Search...",
  searchNoResultsText: g = "No results found",
  searchFuseOptions: E,
  inputClasses: y,
  containerClasses: S
}) => {
  const [h, C] = ie.useState(!1), [x, O] = ie.useState(""), T = ie.useRef(null);
  ie.useEffect(() => {
    const k = (R) => {
      T.current && !T.current.contains(R.target) && C(!1);
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, []), ie.useEffect(() => {
    h || O("");
  }, [h]);
  const P = ie.useMemo(() => {
    if (!p) return null;
    const k = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ...E
    };
    return new Bi(t, k);
  }, [t, p, E]), l = ie.useMemo(() => !p || !x.trim() || !P ? t : P.search(x.trim()).map((k) => k.item), [t, x, p, P]), _ = async (k) => {
    let R;
    c ? R = r.includes(k) ? r.filter((L) => L !== k) : [...r, k] : R = r.includes(k) ? [] : [k], !(m && !await Promise.resolve(m(r, R))) && (s(R), u && C(!1));
  }, w = ie.useMemo(() => {
    var k;
    return r.length === 0 ? a : r.length === 1 ? ((k = t.find((R) => R.value === r[0])) == null ? void 0 : k.label) ?? r[0] : `${r.length} items selected`;
  }, [r, t, a]);
  return /* @__PURE__ */ A.jsxs(
    "div",
    {
      ref: T,
      className: `fancy-dropdown-container ${S ?? ""}`,
      style: {
        position: "relative",
        userSelect: "none",
        opacity: f ? 0.6 : 1,
        pointerEvents: f ? "none" : "auto"
      },
      children: [
        /* @__PURE__ */ A.jsxs(
          "div",
          {
            className: "fancy-dropdown-trigger",
            onClick: () => !f && C(!h),
            style: {
              padding: "8px 12px",
              border: "1px solid var(--border-color)",
              backgroundColor: "var(--bg-color)",
              color: "var(--text-color)",
              borderRadius: "4px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [
              /* @__PURE__ */ A.jsx("span", { className: "fancy-dropdown-trigger-text", children: w }),
              /* @__PURE__ */ A.jsx("i", { className: `fas ${h ? "fa-chevron-up" : "fa-chevron-down"}`, style: { marginLeft: "8px" } })
            ]
          }
        ),
        h && /* @__PURE__ */ A.jsxs(
          "div",
          {
            className: "fancy-dropdown-list",
            style: {
              position: "absolute",
              top: "100%",
              left: "0",
              right: "0",
              maxHeight: "300px",
              zIndex: 1050,
              border: "1px solid var(--border-color)",
              borderTop: "none",
              backgroundColor: "var(--bg-color-popup, var(--bg-color-secondary, var(--greyCAIbg, var(--grey30))))",
              color: "var(--text-color)",
              borderRadius: "0 0 4px 4px",
              boxShadow: "0 4px 8px var(--black50a)",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column"
            },
            children: [
              p && /* @__PURE__ */ A.jsx(
                "div",
                {
                  style: {
                    padding: "8px",
                    borderBottom: "1px solid var(--border-color)",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "inherit"
                  },
                  children: /* @__PURE__ */ A.jsx(
                    t0,
                    {
                      type: "text",
                      placeholder: v,
                      value: x,
                      onChange: (k) => O(k.target.value),
                      autoFocus: !0,
                      className: y
                    }
                  )
                }
              ),
              /* @__PURE__ */ A.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: l.length > 0 ? l.map((k) => /* @__PURE__ */ A.jsx(
                fw,
                {
                  item: k,
                  isSelected: r.includes(k.value),
                  onClick: _
                },
                k.value
              )) : /* @__PURE__ */ A.jsx(
                "div",
                {
                  style: {
                    padding: "8px 12px",
                    textAlign: "center",
                    color: "var(--text-color-secondary, var(--grey50))"
                  },
                  children: g
                }
              ) })
            ]
          }
        )
      ]
    }
  );
}, fw = wl.memo(({ item: t, isSelected: r, onClick: s }) => {
  const [a, u] = ie.useState(!1);
  return /* @__PURE__ */ A.jsxs(
    "li",
    {
      onClick: () => s(t.value),
      onMouseEnter: () => u(!0),
      onMouseLeave: () => u(!1),
      style: {
        padding: "8px 12px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: r ? "var(--accent-color-bg, var(--link-color))" : a ? "var(--hover-color, var(--white20a))" : "transparent"
      },
      children: [
        /* @__PURE__ */ A.jsx("span", { children: t.label }),
        r && /* @__PURE__ */ A.jsx("i", { className: "checkmark fa-solid fa-check", style: { marginLeft: "8px" } })
      ]
    }
  );
}), Af = SillyTavern.getContext(), qf = ({
  value: t,
  items: r,
  readOnlyValues: s = [],
  label: a,
  onChange: u,
  onItemsChange: c,
  enableCreate: f = !1,
  enableRename: m = !1,
  enableDelete: p = !1,
  onCreate: v,
  onRename: g,
  onDelete: E,
  buttons: y
}) => {
  const S = ie.useMemo(() => r.find((T) => T.value === t), [r, t]), h = ie.useCallback((T) => T ? s.includes(T) : !1, [s]), C = async () => {
    const T = await Af.Popup.show.input(
      `Create a new ${a}`,
      `Please enter a name for the new ${a}:`,
      ""
    );
    if (!T || T.trim() === "") return;
    const P = T.trim();
    if (r.some((_) => _.value === P)) {
      await ge("warning", `A ${a} with this name already exists.`);
      return;
    }
    let l = { value: P, label: P };
    if (v) {
      const _ = await Promise.resolve(v(P));
      if (!_.confirmed) return;
      _.value && (typeof _.value == "string" ? l = { value: _.value, label: _.value } : l = _.value);
    }
    c([...r, l]), u(l.value, t);
  }, x = async () => {
    if (!S) {
      await ge("warning", `Please select a ${a} to rename.`);
      return;
    }
    if (h(S.value)) {
      await ge("warning", `This ${a} cannot be renamed as it is read-only.`);
      return;
    }
    const T = await Af.Popup.show.input(
      `Rename ${a}`,
      `Please enter a new name for "${S.label}":`,
      S.label
    );
    if (!T || T.trim() === "" || T.trim() === S.value) return;
    const P = T.trim();
    if (r.some((w) => w.value === P)) {
      await ge("warning", `A ${a} with this name already exists.`);
      return;
    }
    let l = { value: P, label: P };
    if (g) {
      const w = await Promise.resolve(g(S.value, P));
      if (!w.confirmed) return;
      w.value && (typeof w.value == "string" ? l = { value: w.value, label: w.value } : l = w.value);
    }
    const _ = r.map((w) => w.value === S.value ? l : w);
    c(_), u(l.value, t);
  }, O = async () => {
    var T;
    if (!S) {
      await ge("warning", `Please select a ${a} to delete.`);
      return;
    }
    if (h(S.value)) {
      await ge("warning", `This ${a} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await Af.Popup.show.confirm(
      `Delete ${a}`,
      `Are you sure you want to delete "${S.label}"?`
    ) || E && !await Promise.resolve(E(S.value)))
      return;
    const P = r.findIndex((w) => w.value === S.value), l = r.filter((w) => w.value !== S.value);
    c(l);
    let _;
    if (l.length > 0) {
      const w = Math.min(P, l.length - 1);
      _ = (T = l[w]) == null ? void 0 : T.value;
    }
    u(_, t);
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ A.jsx(Ol, { value: t ?? "", onChange: (T) => u(T.target.value, t), children: r.map((T) => /* @__PURE__ */ A.jsx("option", { value: T.value, children: T.label }, T.value)) }),
    f && /* @__PURE__ */ A.jsx(
      Ee,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${a}`,
        onClick: C,
        "data-i18n": `[title]Create a new ${a}`
      }
    ),
    m && /* @__PURE__ */ A.jsx(
      Ee,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${a}`,
        onClick: x,
        disabled: !S,
        "data-i18n": `[title]Rename selected ${a}`
      }
    ),
    p && /* @__PURE__ */ A.jsx(
      Ee,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${a}`,
        onClick: O,
        disabled: !S,
        "data-i18n": `[title]Delete selected ${a}`
      }
    ),
    y?.map((T) => /* @__PURE__ */ A.jsx(
      Ee,
      {
        className: T.icon,
        title: T.title,
        onClick: T.onClick,
        disabled: T.disabled,
        "data-i18n": T.i18n ? `[title]${T.i18n}` : void 0
      },
      T.key
    ))
  ] });
}, i0 = () => {
  const [, t] = ie.useState(0);
  return ie.useCallback(() => {
    t((s) => s + 1);
  }, []);
}, xf = SillyTavern.getContext(), hw = () => {
  const t = i0(), r = It.getSettings(), [s, a] = ie.useState(sl[0]), u = ie.useCallback(
    (l) => {
      const _ = It.getSettings();
      l(_), It.saveSettings(), t();
    },
    [t]
  ), c = ie.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((l) => ({
      value: l,
      label: l
    })),
    [r.mainContextTemplatePresets]
  ), f = ie.useMemo(
    () => Object.keys(r.prompts).map((l) => {
      const _ = r.prompts[l];
      return {
        value: l,
        label: _ ? `${_.label} (${l})` : l
      };
    }),
    [r.prompts]
  ), m = ie.useMemo(() => {
    const l = r.mainContextTemplatePresets[r.mainContextTemplatePreset];
    return l ? l.prompts.map((_) => {
      const w = r.prompts[_.promptName], k = w ? `${w.label} (${_.promptName})` : _.promptName;
      return {
        id: _.promptName,
        label: k,
        enabled: _.enabled,
        selectValue: _.role,
        selectOptions: [
          { value: "user", label: "User" },
          { value: "assistant", label: "Assistant" },
          { value: "system", label: "System" }
        ]
      };
    }) : [];
  }, [r.mainContextTemplatePreset, r.mainContextTemplatePresets, r.prompts]), p = (l) => {
    u((_) => {
      _.mainContextTemplatePreset = l ?? "default";
    });
  }, v = (l) => {
    u((_) => {
      const w = {}, k = _.mainContextTemplatePresets;
      l.forEach((R) => {
        w[R.value] = k[R.value] ?? structuredClone(k[_.mainContextTemplatePreset] ?? k.default);
      }), _.mainContextTemplatePresets = w;
    });
  }, g = (l) => {
    u((_) => {
      const w = l.map((R) => ({
        promptName: R.id,
        enabled: R.enabled,
        role: R.selectValue ?? "user"
      })), k = {
        ..._.mainContextTemplatePresets[_.mainContextTemplatePreset],
        prompts: w
      };
      _.mainContextTemplatePresets = {
        ..._.mainContextTemplatePresets,
        [_.mainContextTemplatePreset]: k
      };
    });
  }, E = async () => {
    await xf.Popup.show.confirm("Restore default", "Are you sure?") && u((_) => {
      _.mainContextTemplatePresets = {
        ..._.mainContextTemplatePresets,
        default: structuredClone(fh.mainContextTemplatePresets.default)
      }, _.mainContextTemplatePreset = "default";
    });
  }, y = (l) => {
    u((_) => {
      const w = {}, k = _.prompts, R = Object.keys(k), L = l.map((D) => D.value);
      L.forEach((D) => {
        w[D] = k[D] ?? { content: "", isDefault: !1, label: D };
      }), _.prompts = w;
      const j = R.filter((D) => !L.includes(D));
      if (j.length > 0) {
        const D = Object.fromEntries(
          Object.entries(_.mainContextTemplatePresets).map(([q, G]) => [
            q,
            {
              ...G,
              prompts: G.prompts.filter((V) => !j.includes(V.promptName))
            }
          ])
        );
        _.mainContextTemplatePresets = D;
      }
    });
  }, S = (l) => {
    const _ = Py(l);
    return _ ? r.prompts[_] ? (ge("error", `Prompt name already exists: ${_}`), { confirmed: !1 }) : (u((w) => {
      w.prompts = {
        ...w.prompts,
        [_]: {
          content: w.prompts[s]?.content ?? "",
          isDefault: !1,
          label: l
        }
      }, w.mainContextTemplatePresets = Object.fromEntries(
        Object.entries(w.mainContextTemplatePresets).map(([k, R]) => [
          k,
          {
            ...R,
            prompts: [...R.prompts, { enabled: !0, promptName: _, role: "user" }]
          }
        ])
      );
    }), a(_), { confirmed: !0, value: _ }) : (ge("error", `Invalid prompt name: ${l}`), { confirmed: !1 });
  }, h = (l, _) => {
    const w = Py(_);
    return w ? r.prompts[w] ? (ge("error", `Prompt name already exists: ${w}`), { confirmed: !1 }) : (u((k) => {
      const { [l]: R, ...L } = k.prompts;
      k.prompts = {
        ...L,
        [w]: { ...R, label: _ }
      }, k.mainContextTemplatePresets = Object.fromEntries(
        Object.entries(k.mainContextTemplatePresets).map(([j, D]) => [
          j,
          {
            ...D,
            prompts: D.prompts.map((q) => q.promptName === l ? { ...q, promptName: w } : q)
          }
        ])
      );
    }), a(w), { confirmed: !0, value: w }) : (ge("error", `Invalid prompt name: ${_}`), { confirmed: !1 });
  }, C = (l) => {
    const _ = l.target.value;
    u((w) => {
      const k = w.prompts[s];
      k && (w.prompts = {
        ...w.prompts,
        [s]: {
          ...k,
          content: _,
          isDefault: sl.includes(s) ? st[s] === _ : !1
        }
      });
    });
  }, x = async () => {
    const l = r.prompts[s];
    if (!l) return ge("warning", "No prompt selected.");
    await xf.Popup.show.confirm("Restore Default", `Restore default for "${l.label}"?`) && u((w) => {
      w.prompts = {
        ...w.prompts,
        [s]: {
          ...w.prompts[s],
          content: st[s]
        }
      };
    });
  }, O = async () => {
    await xf.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (It.resetSettings(), t(), ge("success", "Settings reset. The UI has been updated."));
  }, T = r.prompts[s]?.content ?? "", P = sl.includes(s);
  return /* @__PURE__ */ A.jsxs("div", { className: "world-info-recommender-settings", children: [
    /* @__PURE__ */ A.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ A.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ A.jsx("span", { children: "Main Context Template" }),
        /* @__PURE__ */ A.jsx(
          Ee,
          {
            className: "fa-solid fa-undo",
            title: "Restore main context template to default",
            onClick: E
          }
        )
      ] }),
      /* @__PURE__ */ A.jsx(
        qf,
        {
          label: "Template",
          items: c,
          value: r.mainContextTemplatePreset,
          readOnlyValues: ["default"],
          onChange: p,
          onItemsChange: v,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ A.jsx("div", { style: { marginTop: "5px" }, children: /* @__PURE__ */ A.jsx(
        r0,
        {
          items: m,
          onItemsChange: g,
          showSelectInput: !0,
          showToggleButton: !0
        }
      ) })
    ] }),
    /* @__PURE__ */ A.jsx("hr", { style: { margin: "10px 0" } }),
    /* @__PURE__ */ A.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ A.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ A.jsx("span", { children: "Prompt Templates" }),
        P && /* @__PURE__ */ A.jsx(
          Ee,
          {
            className: "fa-solid fa-undo",
            title: "Restore selected prompt to default",
            onClick: x
          }
        )
      ] }),
      /* @__PURE__ */ A.jsx(
        qf,
        {
          label: "Prompt",
          items: f,
          value: s,
          readOnlyValues: sl,
          onChange: (l) => a(l ?? ""),
          onItemsChange: y,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0,
          onCreate: S,
          onRename: h
        }
      ),
      /* @__PURE__ */ A.jsx(
        Zn,
        {
          value: T,
          onChange: C,
          placeholder: "Edit the selected system prompt template here...",
          rows: 6,
          style: { marginTop: "5px", width: "100%" }
        }
      )
    ] }),
    /* @__PURE__ */ A.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ A.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ A.jsxs(Ee, { className: "danger_button", style: { width: "auto" }, onClick: O, children: [
      /* @__PURE__ */ A.jsx("i", { style: { marginRight: "10px" }, className: "fa-solid fa-triangle-exclamation" }),
      "I messed up, reset everything"
    ] }) })
  ] });
};
var Sl = { exports: {} }, pw = Sl.exports, Ly;
function mw() {
  return Ly || (Ly = 1, (function(t) {
    (function() {
      function r(l) {
        var _ = {
          omitExtraWLInCodeBlocks: {
            defaultValue: !1,
            describe: "Omit the default extra whiteline added to code blocks",
            type: "boolean"
          },
          noHeaderId: {
            defaultValue: !1,
            describe: "Turn on/off generated header id",
            type: "boolean"
          },
          prefixHeaderId: {
            defaultValue: !1,
            describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
            type: "string"
          },
          rawPrefixHeaderId: {
            defaultValue: !1,
            describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
            type: "boolean"
          },
          ghCompatibleHeaderId: {
            defaultValue: !1,
            describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
            type: "boolean"
          },
          rawHeaderId: {
            defaultValue: !1,
            describe: `Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,
            type: "boolean"
          },
          headerLevelStart: {
            defaultValue: !1,
            describe: "The header blocks level start",
            type: "integer"
          },
          parseImgDimensions: {
            defaultValue: !1,
            describe: "Turn on/off image dimension parsing",
            type: "boolean"
          },
          simplifiedAutoLink: {
            defaultValue: !1,
            describe: "Turn on/off GFM autolink style",
            type: "boolean"
          },
          excludeTrailingPunctuationFromURLs: {
            defaultValue: !1,
            describe: "Excludes trailing punctuation from links generated with autoLinking",
            type: "boolean"
          },
          literalMidWordUnderscores: {
            defaultValue: !1,
            describe: "Parse midword underscores as literal underscores",
            type: "boolean"
          },
          literalMidWordAsterisks: {
            defaultValue: !1,
            describe: "Parse midword asterisks as literal asterisks",
            type: "boolean"
          },
          strikethrough: {
            defaultValue: !1,
            describe: "Turn on/off strikethrough support",
            type: "boolean"
          },
          tables: {
            defaultValue: !1,
            describe: "Turn on/off tables support",
            type: "boolean"
          },
          tablesHeaderId: {
            defaultValue: !1,
            describe: "Add an id to table headers",
            type: "boolean"
          },
          ghCodeBlocks: {
            defaultValue: !0,
            describe: "Turn on/off GFM fenced code blocks support",
            type: "boolean"
          },
          tasklists: {
            defaultValue: !1,
            describe: "Turn on/off GFM tasklist support",
            type: "boolean"
          },
          smoothLivePreview: {
            defaultValue: !1,
            describe: "Prevents weird effects in live previews due to incomplete input",
            type: "boolean"
          },
          smartIndentationFix: {
            defaultValue: !1,
            describe: "Tries to smartly fix indentation in es6 strings",
            type: "boolean"
          },
          disableForced4SpacesIndentedSublists: {
            defaultValue: !1,
            describe: "Disables the requirement of indenting nested sublists by 4 spaces",
            type: "boolean"
          },
          simpleLineBreaks: {
            defaultValue: !1,
            describe: "Parses simple line breaks as <br> (GFM Style)",
            type: "boolean"
          },
          requireSpaceBeforeHeadingText: {
            defaultValue: !1,
            describe: "Makes adding a space between `#` and the header text mandatory (GFM Style)",
            type: "boolean"
          },
          ghMentions: {
            defaultValue: !1,
            describe: "Enables github @mentions",
            type: "boolean"
          },
          ghMentionsLink: {
            defaultValue: "https://github.com/{u}",
            describe: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
            type: "string"
          },
          encodeEmails: {
            defaultValue: !0,
            describe: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
            type: "boolean"
          },
          openLinksInNewWindow: {
            defaultValue: !1,
            describe: "Open all links in new windows",
            type: "boolean"
          },
          backslashEscapesHTMLTags: {
            defaultValue: !1,
            describe: "Support for HTML Tag escaping. ex: <div>foo</div>",
            type: "boolean"
          },
          emoji: {
            defaultValue: !1,
            describe: "Enable emoji support. Ex: `this is a :smile: emoji`",
            type: "boolean"
          },
          underline: {
            defaultValue: !1,
            describe: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
            type: "boolean"
          },
          ellipsis: {
            defaultValue: !0,
            describe: "Replaces three dots with the ellipsis unicode character",
            type: "boolean"
          },
          completeHTMLDocument: {
            defaultValue: !1,
            describe: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
            type: "boolean"
          },
          metadata: {
            defaultValue: !1,
            describe: "Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",
            type: "boolean"
          },
          splitAdjacentBlockquotes: {
            defaultValue: !1,
            describe: "Split adjacent blockquote blocks",
            type: "boolean"
          }
        };
        if (l === !1)
          return JSON.parse(JSON.stringify(_));
        var w = {};
        for (var k in _)
          _.hasOwnProperty(k) && (w[k] = _[k].defaultValue);
        return w;
      }
      function s() {
        var l = r(!0), _ = {};
        for (var w in l)
          l.hasOwnProperty(w) && (_[w] = !0);
        return _;
      }
      var a = {}, u = {}, c = {}, f = r(!0), m = "vanilla", p = {
        github: {
          omitExtraWLInCodeBlocks: !0,
          simplifiedAutoLink: !0,
          excludeTrailingPunctuationFromURLs: !0,
          literalMidWordUnderscores: !0,
          strikethrough: !0,
          tables: !0,
          tablesHeaderId: !0,
          ghCodeBlocks: !0,
          tasklists: !0,
          disableForced4SpacesIndentedSublists: !0,
          simpleLineBreaks: !0,
          requireSpaceBeforeHeadingText: !0,
          ghCompatibleHeaderId: !0,
          ghMentions: !0,
          backslashEscapesHTMLTags: !0,
          emoji: !0,
          splitAdjacentBlockquotes: !0
        },
        original: {
          noHeaderId: !0,
          ghCodeBlocks: !1
        },
        ghost: {
          omitExtraWLInCodeBlocks: !0,
          parseImgDimensions: !0,
          simplifiedAutoLink: !0,
          excludeTrailingPunctuationFromURLs: !0,
          literalMidWordUnderscores: !0,
          strikethrough: !0,
          tables: !0,
          tablesHeaderId: !0,
          ghCodeBlocks: !0,
          tasklists: !0,
          smoothLivePreview: !0,
          simpleLineBreaks: !0,
          requireSpaceBeforeHeadingText: !0,
          ghMentions: !1,
          encodeEmails: !0
        },
        vanilla: r(!0),
        allOn: s()
      };
      a.helper = {}, a.extensions = {}, a.setOption = function(l, _) {
        return f[l] = _, this;
      }, a.getOption = function(l) {
        return f[l];
      }, a.getOptions = function() {
        return f;
      }, a.resetOptions = function() {
        f = r(!0);
      }, a.setFlavor = function(l) {
        if (!p.hasOwnProperty(l))
          throw Error(l + " flavor was not found");
        a.resetOptions();
        var _ = p[l];
        m = l;
        for (var w in _)
          _.hasOwnProperty(w) && (f[w] = _[w]);
      }, a.getFlavor = function() {
        return m;
      }, a.getFlavorOptions = function(l) {
        if (p.hasOwnProperty(l))
          return p[l];
      }, a.getDefaultOptions = function(l) {
        return r(l);
      }, a.subParser = function(l, _) {
        if (a.helper.isString(l))
          if (typeof _ < "u")
            u[l] = _;
          else {
            if (u.hasOwnProperty(l))
              return u[l];
            throw Error("SubParser named " + l + " not registered!");
          }
      }, a.extension = function(l, _) {
        if (!a.helper.isString(l))
          throw Error("Extension 'name' must be a string");
        if (l = a.helper.stdExtName(l), a.helper.isUndefined(_)) {
          if (!c.hasOwnProperty(l))
            throw Error("Extension named " + l + " is not registered!");
          return c[l];
        } else {
          typeof _ == "function" && (_ = _()), a.helper.isArray(_) || (_ = [_]);
          var w = v(_, l);
          if (w.valid)
            c[l] = _;
          else
            throw Error(w.error);
        }
      }, a.getAllExtensions = function() {
        return c;
      }, a.removeExtension = function(l) {
        delete c[l];
      }, a.resetExtensions = function() {
        c = {};
      };
      function v(l, _) {
        var w = _ ? "Error in " + _ + " extension->" : "Error in unnamed extension", k = {
          valid: !0,
          error: ""
        };
        a.helper.isArray(l) || (l = [l]);
        for (var R = 0; R < l.length; ++R) {
          var L = w + " sub-extension " + R + ": ", j = l[R];
          if (typeof j != "object")
            return k.valid = !1, k.error = L + "must be an object, but " + typeof j + " given", k;
          if (!a.helper.isString(j.type))
            return k.valid = !1, k.error = L + 'property "type" must be a string, but ' + typeof j.type + " given", k;
          var D = j.type = j.type.toLowerCase();
          if (D === "language" && (D = j.type = "lang"), D === "html" && (D = j.type = "output"), D !== "lang" && D !== "output" && D !== "listener")
            return k.valid = !1, k.error = L + "type " + D + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"', k;
          if (D === "listener") {
            if (a.helper.isUndefined(j.listeners))
              return k.valid = !1, k.error = L + '. Extensions of type "listener" must have a property called "listeners"', k;
          } else if (a.helper.isUndefined(j.filter) && a.helper.isUndefined(j.regex))
            return k.valid = !1, k.error = L + D + ' extensions must define either a "regex" property or a "filter" method', k;
          if (j.listeners) {
            if (typeof j.listeners != "object")
              return k.valid = !1, k.error = L + '"listeners" property must be an object but ' + typeof j.listeners + " given", k;
            for (var q in j.listeners)
              if (j.listeners.hasOwnProperty(q) && typeof j.listeners[q] != "function")
                return k.valid = !1, k.error = L + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + q + " must be a function but " + typeof j.listeners[q] + " given", k;
          }
          if (j.filter) {
            if (typeof j.filter != "function")
              return k.valid = !1, k.error = L + '"filter" must be a function, but ' + typeof j.filter + " given", k;
          } else if (j.regex) {
            if (a.helper.isString(j.regex) && (j.regex = new RegExp(j.regex, "g")), !(j.regex instanceof RegExp))
              return k.valid = !1, k.error = L + '"regex" property must either be a string or a RegExp object, but ' + typeof j.regex + " given", k;
            if (a.helper.isUndefined(j.replace))
              return k.valid = !1, k.error = L + '"regex" extensions must implement a replace string or function', k;
          }
        }
        return k;
      }
      a.validateExtension = function(l) {
        var _ = v(l, null);
        return _.valid ? !0 : (console.warn(_.error), !1);
      }, a.hasOwnProperty("helper") || (a.helper = {}), a.helper.isString = function(l) {
        return typeof l == "string" || l instanceof String;
      }, a.helper.isFunction = function(l) {
        var _ = {};
        return l && _.toString.call(l) === "[object Function]";
      }, a.helper.isArray = function(l) {
        return Array.isArray(l);
      }, a.helper.isUndefined = function(l) {
        return typeof l > "u";
      }, a.helper.forEach = function(l, _) {
        if (a.helper.isUndefined(l))
          throw new Error("obj param is required");
        if (a.helper.isUndefined(_))
          throw new Error("callback param is required");
        if (!a.helper.isFunction(_))
          throw new Error("callback param must be a function/closure");
        if (typeof l.forEach == "function")
          l.forEach(_);
        else if (a.helper.isArray(l))
          for (var w = 0; w < l.length; w++)
            _(l[w], w, l);
        else if (typeof l == "object")
          for (var k in l)
            l.hasOwnProperty(k) && _(l[k], k, l);
        else
          throw new Error("obj does not seem to be an array or an iterable object");
      }, a.helper.stdExtName = function(l) {
        return l.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase();
      };
      function g(l, _) {
        var w = _.charCodeAt(0);
        return "¨E" + w + "E";
      }
      a.helper.escapeCharactersCallback = g, a.helper.escapeCharacters = function(l, _, w) {
        var k = "([" + _.replace(/([\[\]\\])/g, "\\$1") + "])";
        w && (k = "\\\\" + k);
        var R = new RegExp(k, "g");
        return l = l.replace(R, g), l;
      }, a.helper.unescapeHTMLEntities = function(l) {
        return l.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
      };
      var E = function(l, _, w, k) {
        var R = k || "", L = R.indexOf("g") > -1, j = new RegExp(_ + "|" + w, "g" + R.replace(/g/g, "")), D = new RegExp(_, R.replace(/g/g, "")), q = [], G, V, K, M, B;
        do
          for (G = 0; K = j.exec(l); )
            if (D.test(K[0]))
              G++ || (V = j.lastIndex, M = V - K[0].length);
            else if (G && !--G) {
              B = K.index + K[0].length;
              var J = {
                left: { start: M, end: V },
                match: { start: V, end: K.index },
                right: { start: K.index, end: B },
                wholeMatch: { start: M, end: B }
              };
              if (q.push(J), !L)
                return q;
            }
        while (G && (j.lastIndex = V));
        return q;
      };
      a.helper.matchRecursiveRegExp = function(l, _, w, k) {
        for (var R = E(l, _, w, k), L = [], j = 0; j < R.length; ++j)
          L.push([
            l.slice(R[j].wholeMatch.start, R[j].wholeMatch.end),
            l.slice(R[j].match.start, R[j].match.end),
            l.slice(R[j].left.start, R[j].left.end),
            l.slice(R[j].right.start, R[j].right.end)
          ]);
        return L;
      }, a.helper.replaceRecursiveRegExp = function(l, _, w, k, R) {
        if (!a.helper.isFunction(_)) {
          var L = _;
          _ = function() {
            return L;
          };
        }
        var j = E(l, w, k, R), D = l, q = j.length;
        if (q > 0) {
          var G = [];
          j[0].wholeMatch.start !== 0 && G.push(l.slice(0, j[0].wholeMatch.start));
          for (var V = 0; V < q; ++V)
            G.push(
              _(
                l.slice(j[V].wholeMatch.start, j[V].wholeMatch.end),
                l.slice(j[V].match.start, j[V].match.end),
                l.slice(j[V].left.start, j[V].left.end),
                l.slice(j[V].right.start, j[V].right.end)
              )
            ), V < q - 1 && G.push(l.slice(j[V].wholeMatch.end, j[V + 1].wholeMatch.start));
          j[q - 1].wholeMatch.end < l.length && G.push(l.slice(j[q - 1].wholeMatch.end)), D = G.join("");
        }
        return D;
      }, a.helper.regexIndexOf = function(l, _, w) {
        if (!a.helper.isString(l))
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        if (!(_ instanceof RegExp))
          throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
        var k = l.substring(w || 0).search(_);
        return k >= 0 ? k + (w || 0) : k;
      }, a.helper.splitAtIndex = function(l, _) {
        if (!a.helper.isString(l))
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        return [l.substring(0, _), l.substring(_)];
      }, a.helper.encodeEmailAddress = function(l) {
        var _ = [
          function(w) {
            return "&#" + w.charCodeAt(0) + ";";
          },
          function(w) {
            return "&#x" + w.charCodeAt(0).toString(16) + ";";
          },
          function(w) {
            return w;
          }
        ];
        return l = l.replace(/./g, function(w) {
          if (w === "@")
            w = _[Math.floor(Math.random() * 2)](w);
          else {
            var k = Math.random();
            w = k > 0.9 ? _[2](w) : k > 0.45 ? _[1](w) : _[0](w);
          }
          return w;
        }), l;
      }, a.helper.padEnd = function(_, w, k) {
        return w = w >> 0, k = String(k || " "), _.length > w ? String(_) : (w = w - _.length, w > k.length && (k += k.repeat(w / k.length)), String(_) + k.slice(0, w));
      }, typeof console > "u" && (console = {
        warn: function(l) {
          alert(l);
        },
        log: function(l) {
          alert(l);
        },
        error: function(l) {
          throw l;
        }
      }), a.helper.regexes = {
        asteriskDashAndColon: /([*_:~])/g
      }, a.helper.emojis = {
        "+1": "👍",
        "-1": "👎",
        100: "💯",
        1234: "🔢",
        "1st_place_medal": "🥇",
        "2nd_place_medal": "🥈",
        "3rd_place_medal": "🥉",
        "8ball": "🎱",
        a: "🅰️",
        ab: "🆎",
        abc: "🔤",
        abcd: "🔡",
        accept: "🉑",
        aerial_tramway: "🚡",
        airplane: "✈️",
        alarm_clock: "⏰",
        alembic: "⚗️",
        alien: "👽",
        ambulance: "🚑",
        amphora: "🏺",
        anchor: "⚓️",
        angel: "👼",
        anger: "💢",
        angry: "😠",
        anguished: "😧",
        ant: "🐜",
        apple: "🍎",
        aquarius: "♒️",
        aries: "♈️",
        arrow_backward: "◀️",
        arrow_double_down: "⏬",
        arrow_double_up: "⏫",
        arrow_down: "⬇️",
        arrow_down_small: "🔽",
        arrow_forward: "▶️",
        arrow_heading_down: "⤵️",
        arrow_heading_up: "⤴️",
        arrow_left: "⬅️",
        arrow_lower_left: "↙️",
        arrow_lower_right: "↘️",
        arrow_right: "➡️",
        arrow_right_hook: "↪️",
        arrow_up: "⬆️",
        arrow_up_down: "↕️",
        arrow_up_small: "🔼",
        arrow_upper_left: "↖️",
        arrow_upper_right: "↗️",
        arrows_clockwise: "🔃",
        arrows_counterclockwise: "🔄",
        art: "🎨",
        articulated_lorry: "🚛",
        artificial_satellite: "🛰",
        astonished: "😲",
        athletic_shoe: "👟",
        atm: "🏧",
        atom_symbol: "⚛️",
        avocado: "🥑",
        b: "🅱️",
        baby: "👶",
        baby_bottle: "🍼",
        baby_chick: "🐤",
        baby_symbol: "🚼",
        back: "🔙",
        bacon: "🥓",
        badminton: "🏸",
        baggage_claim: "🛄",
        baguette_bread: "🥖",
        balance_scale: "⚖️",
        balloon: "🎈",
        ballot_box: "🗳",
        ballot_box_with_check: "☑️",
        bamboo: "🎍",
        banana: "🍌",
        bangbang: "‼️",
        bank: "🏦",
        bar_chart: "📊",
        barber: "💈",
        baseball: "⚾️",
        basketball: "🏀",
        basketball_man: "⛹️",
        basketball_woman: "⛹️&zwj;♀️",
        bat: "🦇",
        bath: "🛀",
        bathtub: "🛁",
        battery: "🔋",
        beach_umbrella: "🏖",
        bear: "🐻",
        bed: "🛏",
        bee: "🐝",
        beer: "🍺",
        beers: "🍻",
        beetle: "🐞",
        beginner: "🔰",
        bell: "🔔",
        bellhop_bell: "🛎",
        bento: "🍱",
        biking_man: "🚴",
        bike: "🚲",
        biking_woman: "🚴&zwj;♀️",
        bikini: "👙",
        biohazard: "☣️",
        bird: "🐦",
        birthday: "🎂",
        black_circle: "⚫️",
        black_flag: "🏴",
        black_heart: "🖤",
        black_joker: "🃏",
        black_large_square: "⬛️",
        black_medium_small_square: "◾️",
        black_medium_square: "◼️",
        black_nib: "✒️",
        black_small_square: "▪️",
        black_square_button: "🔲",
        blonde_man: "👱",
        blonde_woman: "👱&zwj;♀️",
        blossom: "🌼",
        blowfish: "🐡",
        blue_book: "📘",
        blue_car: "🚙",
        blue_heart: "💙",
        blush: "😊",
        boar: "🐗",
        boat: "⛵️",
        bomb: "💣",
        book: "📖",
        bookmark: "🔖",
        bookmark_tabs: "📑",
        books: "📚",
        boom: "💥",
        boot: "👢",
        bouquet: "💐",
        bowing_man: "🙇",
        bow_and_arrow: "🏹",
        bowing_woman: "🙇&zwj;♀️",
        bowling: "🎳",
        boxing_glove: "🥊",
        boy: "👦",
        bread: "🍞",
        bride_with_veil: "👰",
        bridge_at_night: "🌉",
        briefcase: "💼",
        broken_heart: "💔",
        bug: "🐛",
        building_construction: "🏗",
        bulb: "💡",
        bullettrain_front: "🚅",
        bullettrain_side: "🚄",
        burrito: "🌯",
        bus: "🚌",
        business_suit_levitating: "🕴",
        busstop: "🚏",
        bust_in_silhouette: "👤",
        busts_in_silhouette: "👥",
        butterfly: "🦋",
        cactus: "🌵",
        cake: "🍰",
        calendar: "📆",
        call_me_hand: "🤙",
        calling: "📲",
        camel: "🐫",
        camera: "📷",
        camera_flash: "📸",
        camping: "🏕",
        cancer: "♋️",
        candle: "🕯",
        candy: "🍬",
        canoe: "🛶",
        capital_abcd: "🔠",
        capricorn: "♑️",
        car: "🚗",
        card_file_box: "🗃",
        card_index: "📇",
        card_index_dividers: "🗂",
        carousel_horse: "🎠",
        carrot: "🥕",
        cat: "🐱",
        cat2: "🐈",
        cd: "💿",
        chains: "⛓",
        champagne: "🍾",
        chart: "💹",
        chart_with_downwards_trend: "📉",
        chart_with_upwards_trend: "📈",
        checkered_flag: "🏁",
        cheese: "🧀",
        cherries: "🍒",
        cherry_blossom: "🌸",
        chestnut: "🌰",
        chicken: "🐔",
        children_crossing: "🚸",
        chipmunk: "🐿",
        chocolate_bar: "🍫",
        christmas_tree: "🎄",
        church: "⛪️",
        cinema: "🎦",
        circus_tent: "🎪",
        city_sunrise: "🌇",
        city_sunset: "🌆",
        cityscape: "🏙",
        cl: "🆑",
        clamp: "🗜",
        clap: "👏",
        clapper: "🎬",
        classical_building: "🏛",
        clinking_glasses: "🥂",
        clipboard: "📋",
        clock1: "🕐",
        clock10: "🕙",
        clock1030: "🕥",
        clock11: "🕚",
        clock1130: "🕦",
        clock12: "🕛",
        clock1230: "🕧",
        clock130: "🕜",
        clock2: "🕑",
        clock230: "🕝",
        clock3: "🕒",
        clock330: "🕞",
        clock4: "🕓",
        clock430: "🕟",
        clock5: "🕔",
        clock530: "🕠",
        clock6: "🕕",
        clock630: "🕡",
        clock7: "🕖",
        clock730: "🕢",
        clock8: "🕗",
        clock830: "🕣",
        clock9: "🕘",
        clock930: "🕤",
        closed_book: "📕",
        closed_lock_with_key: "🔐",
        closed_umbrella: "🌂",
        cloud: "☁️",
        cloud_with_lightning: "🌩",
        cloud_with_lightning_and_rain: "⛈",
        cloud_with_rain: "🌧",
        cloud_with_snow: "🌨",
        clown_face: "🤡",
        clubs: "♣️",
        cocktail: "🍸",
        coffee: "☕️",
        coffin: "⚰️",
        cold_sweat: "😰",
        comet: "☄️",
        computer: "💻",
        computer_mouse: "🖱",
        confetti_ball: "🎊",
        confounded: "😖",
        confused: "😕",
        congratulations: "㊗️",
        construction: "🚧",
        construction_worker_man: "👷",
        construction_worker_woman: "👷&zwj;♀️",
        control_knobs: "🎛",
        convenience_store: "🏪",
        cookie: "🍪",
        cool: "🆒",
        policeman: "👮",
        copyright: "©️",
        corn: "🌽",
        couch_and_lamp: "🛋",
        couple: "👫",
        couple_with_heart_woman_man: "💑",
        couple_with_heart_man_man: "👨&zwj;❤️&zwj;👨",
        couple_with_heart_woman_woman: "👩&zwj;❤️&zwj;👩",
        couplekiss_man_man: "👨&zwj;❤️&zwj;💋&zwj;👨",
        couplekiss_man_woman: "💏",
        couplekiss_woman_woman: "👩&zwj;❤️&zwj;💋&zwj;👩",
        cow: "🐮",
        cow2: "🐄",
        cowboy_hat_face: "🤠",
        crab: "🦀",
        crayon: "🖍",
        credit_card: "💳",
        crescent_moon: "🌙",
        cricket: "🏏",
        crocodile: "🐊",
        croissant: "🥐",
        crossed_fingers: "🤞",
        crossed_flags: "🎌",
        crossed_swords: "⚔️",
        crown: "👑",
        cry: "😢",
        crying_cat_face: "😿",
        crystal_ball: "🔮",
        cucumber: "🥒",
        cupid: "💘",
        curly_loop: "➰",
        currency_exchange: "💱",
        curry: "🍛",
        custard: "🍮",
        customs: "🛃",
        cyclone: "🌀",
        dagger: "🗡",
        dancer: "💃",
        dancing_women: "👯",
        dancing_men: "👯&zwj;♂️",
        dango: "🍡",
        dark_sunglasses: "🕶",
        dart: "🎯",
        dash: "💨",
        date: "📅",
        deciduous_tree: "🌳",
        deer: "🦌",
        department_store: "🏬",
        derelict_house: "🏚",
        desert: "🏜",
        desert_island: "🏝",
        desktop_computer: "🖥",
        male_detective: "🕵️",
        diamond_shape_with_a_dot_inside: "💠",
        diamonds: "♦️",
        disappointed: "😞",
        disappointed_relieved: "😥",
        dizzy: "💫",
        dizzy_face: "😵",
        do_not_litter: "🚯",
        dog: "🐶",
        dog2: "🐕",
        dollar: "💵",
        dolls: "🎎",
        dolphin: "🐬",
        door: "🚪",
        doughnut: "🍩",
        dove: "🕊",
        dragon: "🐉",
        dragon_face: "🐲",
        dress: "👗",
        dromedary_camel: "🐪",
        drooling_face: "🤤",
        droplet: "💧",
        drum: "🥁",
        duck: "🦆",
        dvd: "📀",
        "e-mail": "📧",
        eagle: "🦅",
        ear: "👂",
        ear_of_rice: "🌾",
        earth_africa: "🌍",
        earth_americas: "🌎",
        earth_asia: "🌏",
        egg: "🥚",
        eggplant: "🍆",
        eight_pointed_black_star: "✴️",
        eight_spoked_asterisk: "✳️",
        electric_plug: "🔌",
        elephant: "🐘",
        email: "✉️",
        end: "🔚",
        envelope_with_arrow: "📩",
        euro: "💶",
        european_castle: "🏰",
        european_post_office: "🏤",
        evergreen_tree: "🌲",
        exclamation: "❗️",
        expressionless: "😑",
        eye: "👁",
        eye_speech_bubble: "👁&zwj;🗨",
        eyeglasses: "👓",
        eyes: "👀",
        face_with_head_bandage: "🤕",
        face_with_thermometer: "🤒",
        fist_oncoming: "👊",
        factory: "🏭",
        fallen_leaf: "🍂",
        family_man_woman_boy: "👪",
        family_man_boy: "👨&zwj;👦",
        family_man_boy_boy: "👨&zwj;👦&zwj;👦",
        family_man_girl: "👨&zwj;👧",
        family_man_girl_boy: "👨&zwj;👧&zwj;👦",
        family_man_girl_girl: "👨&zwj;👧&zwj;👧",
        family_man_man_boy: "👨&zwj;👨&zwj;👦",
        family_man_man_boy_boy: "👨&zwj;👨&zwj;👦&zwj;👦",
        family_man_man_girl: "👨&zwj;👨&zwj;👧",
        family_man_man_girl_boy: "👨&zwj;👨&zwj;👧&zwj;👦",
        family_man_man_girl_girl: "👨&zwj;👨&zwj;👧&zwj;👧",
        family_man_woman_boy_boy: "👨&zwj;👩&zwj;👦&zwj;👦",
        family_man_woman_girl: "👨&zwj;👩&zwj;👧",
        family_man_woman_girl_boy: "👨&zwj;👩&zwj;👧&zwj;👦",
        family_man_woman_girl_girl: "👨&zwj;👩&zwj;👧&zwj;👧",
        family_woman_boy: "👩&zwj;👦",
        family_woman_boy_boy: "👩&zwj;👦&zwj;👦",
        family_woman_girl: "👩&zwj;👧",
        family_woman_girl_boy: "👩&zwj;👧&zwj;👦",
        family_woman_girl_girl: "👩&zwj;👧&zwj;👧",
        family_woman_woman_boy: "👩&zwj;👩&zwj;👦",
        family_woman_woman_boy_boy: "👩&zwj;👩&zwj;👦&zwj;👦",
        family_woman_woman_girl: "👩&zwj;👩&zwj;👧",
        family_woman_woman_girl_boy: "👩&zwj;👩&zwj;👧&zwj;👦",
        family_woman_woman_girl_girl: "👩&zwj;👩&zwj;👧&zwj;👧",
        fast_forward: "⏩",
        fax: "📠",
        fearful: "😨",
        feet: "🐾",
        female_detective: "🕵️&zwj;♀️",
        ferris_wheel: "🎡",
        ferry: "⛴",
        field_hockey: "🏑",
        file_cabinet: "🗄",
        file_folder: "📁",
        film_projector: "📽",
        film_strip: "🎞",
        fire: "🔥",
        fire_engine: "🚒",
        fireworks: "🎆",
        first_quarter_moon: "🌓",
        first_quarter_moon_with_face: "🌛",
        fish: "🐟",
        fish_cake: "🍥",
        fishing_pole_and_fish: "🎣",
        fist_raised: "✊",
        fist_left: "🤛",
        fist_right: "🤜",
        flags: "🎏",
        flashlight: "🔦",
        fleur_de_lis: "⚜️",
        flight_arrival: "🛬",
        flight_departure: "🛫",
        floppy_disk: "💾",
        flower_playing_cards: "🎴",
        flushed: "😳",
        fog: "🌫",
        foggy: "🌁",
        football: "🏈",
        footprints: "👣",
        fork_and_knife: "🍴",
        fountain: "⛲️",
        fountain_pen: "🖋",
        four_leaf_clover: "🍀",
        fox_face: "🦊",
        framed_picture: "🖼",
        free: "🆓",
        fried_egg: "🍳",
        fried_shrimp: "🍤",
        fries: "🍟",
        frog: "🐸",
        frowning: "😦",
        frowning_face: "☹️",
        frowning_man: "🙍&zwj;♂️",
        frowning_woman: "🙍",
        middle_finger: "🖕",
        fuelpump: "⛽️",
        full_moon: "🌕",
        full_moon_with_face: "🌝",
        funeral_urn: "⚱️",
        game_die: "🎲",
        gear: "⚙️",
        gem: "💎",
        gemini: "♊️",
        ghost: "👻",
        gift: "🎁",
        gift_heart: "💝",
        girl: "👧",
        globe_with_meridians: "🌐",
        goal_net: "🥅",
        goat: "🐐",
        golf: "⛳️",
        golfing_man: "🏌️",
        golfing_woman: "🏌️&zwj;♀️",
        gorilla: "🦍",
        grapes: "🍇",
        green_apple: "🍏",
        green_book: "📗",
        green_heart: "💚",
        green_salad: "🥗",
        grey_exclamation: "❕",
        grey_question: "❔",
        grimacing: "😬",
        grin: "😁",
        grinning: "😀",
        guardsman: "💂",
        guardswoman: "💂&zwj;♀️",
        guitar: "🎸",
        gun: "🔫",
        haircut_woman: "💇",
        haircut_man: "💇&zwj;♂️",
        hamburger: "🍔",
        hammer: "🔨",
        hammer_and_pick: "⚒",
        hammer_and_wrench: "🛠",
        hamster: "🐹",
        hand: "✋",
        handbag: "👜",
        handshake: "🤝",
        hankey: "💩",
        hatched_chick: "🐥",
        hatching_chick: "🐣",
        headphones: "🎧",
        hear_no_evil: "🙉",
        heart: "❤️",
        heart_decoration: "💟",
        heart_eyes: "😍",
        heart_eyes_cat: "😻",
        heartbeat: "💓",
        heartpulse: "💗",
        hearts: "♥️",
        heavy_check_mark: "✔️",
        heavy_division_sign: "➗",
        heavy_dollar_sign: "💲",
        heavy_heart_exclamation: "❣️",
        heavy_minus_sign: "➖",
        heavy_multiplication_x: "✖️",
        heavy_plus_sign: "➕",
        helicopter: "🚁",
        herb: "🌿",
        hibiscus: "🌺",
        high_brightness: "🔆",
        high_heel: "👠",
        hocho: "🔪",
        hole: "🕳",
        honey_pot: "🍯",
        horse: "🐴",
        horse_racing: "🏇",
        hospital: "🏥",
        hot_pepper: "🌶",
        hotdog: "🌭",
        hotel: "🏨",
        hotsprings: "♨️",
        hourglass: "⌛️",
        hourglass_flowing_sand: "⏳",
        house: "🏠",
        house_with_garden: "🏡",
        houses: "🏘",
        hugs: "🤗",
        hushed: "😯",
        ice_cream: "🍨",
        ice_hockey: "🏒",
        ice_skate: "⛸",
        icecream: "🍦",
        id: "🆔",
        ideograph_advantage: "🉐",
        imp: "👿",
        inbox_tray: "📥",
        incoming_envelope: "📨",
        tipping_hand_woman: "💁",
        information_source: "ℹ️",
        innocent: "😇",
        interrobang: "⁉️",
        iphone: "📱",
        izakaya_lantern: "🏮",
        jack_o_lantern: "🎃",
        japan: "🗾",
        japanese_castle: "🏯",
        japanese_goblin: "👺",
        japanese_ogre: "👹",
        jeans: "👖",
        joy: "😂",
        joy_cat: "😹",
        joystick: "🕹",
        kaaba: "🕋",
        key: "🔑",
        keyboard: "⌨️",
        keycap_ten: "🔟",
        kick_scooter: "🛴",
        kimono: "👘",
        kiss: "💋",
        kissing: "😗",
        kissing_cat: "😽",
        kissing_closed_eyes: "😚",
        kissing_heart: "😘",
        kissing_smiling_eyes: "😙",
        kiwi_fruit: "🥝",
        koala: "🐨",
        koko: "🈁",
        label: "🏷",
        large_blue_circle: "🔵",
        large_blue_diamond: "🔷",
        large_orange_diamond: "🔶",
        last_quarter_moon: "🌗",
        last_quarter_moon_with_face: "🌜",
        latin_cross: "✝️",
        laughing: "😆",
        leaves: "🍃",
        ledger: "📒",
        left_luggage: "🛅",
        left_right_arrow: "↔️",
        leftwards_arrow_with_hook: "↩️",
        lemon: "🍋",
        leo: "♌️",
        leopard: "🐆",
        level_slider: "🎚",
        libra: "♎️",
        light_rail: "🚈",
        link: "🔗",
        lion: "🦁",
        lips: "👄",
        lipstick: "💄",
        lizard: "🦎",
        lock: "🔒",
        lock_with_ink_pen: "🔏",
        lollipop: "🍭",
        loop: "➿",
        loud_sound: "🔊",
        loudspeaker: "📢",
        love_hotel: "🏩",
        love_letter: "💌",
        low_brightness: "🔅",
        lying_face: "🤥",
        m: "Ⓜ️",
        mag: "🔍",
        mag_right: "🔎",
        mahjong: "🀄️",
        mailbox: "📫",
        mailbox_closed: "📪",
        mailbox_with_mail: "📬",
        mailbox_with_no_mail: "📭",
        man: "👨",
        man_artist: "👨&zwj;🎨",
        man_astronaut: "👨&zwj;🚀",
        man_cartwheeling: "🤸&zwj;♂️",
        man_cook: "👨&zwj;🍳",
        man_dancing: "🕺",
        man_facepalming: "🤦&zwj;♂️",
        man_factory_worker: "👨&zwj;🏭",
        man_farmer: "👨&zwj;🌾",
        man_firefighter: "👨&zwj;🚒",
        man_health_worker: "👨&zwj;⚕️",
        man_in_tuxedo: "🤵",
        man_judge: "👨&zwj;⚖️",
        man_juggling: "🤹&zwj;♂️",
        man_mechanic: "👨&zwj;🔧",
        man_office_worker: "👨&zwj;💼",
        man_pilot: "👨&zwj;✈️",
        man_playing_handball: "🤾&zwj;♂️",
        man_playing_water_polo: "🤽&zwj;♂️",
        man_scientist: "👨&zwj;🔬",
        man_shrugging: "🤷&zwj;♂️",
        man_singer: "👨&zwj;🎤",
        man_student: "👨&zwj;🎓",
        man_teacher: "👨&zwj;🏫",
        man_technologist: "👨&zwj;💻",
        man_with_gua_pi_mao: "👲",
        man_with_turban: "👳",
        tangerine: "🍊",
        mans_shoe: "👞",
        mantelpiece_clock: "🕰",
        maple_leaf: "🍁",
        martial_arts_uniform: "🥋",
        mask: "😷",
        massage_woman: "💆",
        massage_man: "💆&zwj;♂️",
        meat_on_bone: "🍖",
        medal_military: "🎖",
        medal_sports: "🏅",
        mega: "📣",
        melon: "🍈",
        memo: "📝",
        men_wrestling: "🤼&zwj;♂️",
        menorah: "🕎",
        mens: "🚹",
        metal: "🤘",
        metro: "🚇",
        microphone: "🎤",
        microscope: "🔬",
        milk_glass: "🥛",
        milky_way: "🌌",
        minibus: "🚐",
        minidisc: "💽",
        mobile_phone_off: "📴",
        money_mouth_face: "🤑",
        money_with_wings: "💸",
        moneybag: "💰",
        monkey: "🐒",
        monkey_face: "🐵",
        monorail: "🚝",
        moon: "🌔",
        mortar_board: "🎓",
        mosque: "🕌",
        motor_boat: "🛥",
        motor_scooter: "🛵",
        motorcycle: "🏍",
        motorway: "🛣",
        mount_fuji: "🗻",
        mountain: "⛰",
        mountain_biking_man: "🚵",
        mountain_biking_woman: "🚵&zwj;♀️",
        mountain_cableway: "🚠",
        mountain_railway: "🚞",
        mountain_snow: "🏔",
        mouse: "🐭",
        mouse2: "🐁",
        movie_camera: "🎥",
        moyai: "🗿",
        mrs_claus: "🤶",
        muscle: "💪",
        mushroom: "🍄",
        musical_keyboard: "🎹",
        musical_note: "🎵",
        musical_score: "🎼",
        mute: "🔇",
        nail_care: "💅",
        name_badge: "📛",
        national_park: "🏞",
        nauseated_face: "🤢",
        necktie: "👔",
        negative_squared_cross_mark: "❎",
        nerd_face: "🤓",
        neutral_face: "😐",
        new: "🆕",
        new_moon: "🌑",
        new_moon_with_face: "🌚",
        newspaper: "📰",
        newspaper_roll: "🗞",
        next_track_button: "⏭",
        ng: "🆖",
        no_good_man: "🙅&zwj;♂️",
        no_good_woman: "🙅",
        night_with_stars: "🌃",
        no_bell: "🔕",
        no_bicycles: "🚳",
        no_entry: "⛔️",
        no_entry_sign: "🚫",
        no_mobile_phones: "📵",
        no_mouth: "😶",
        no_pedestrians: "🚷",
        no_smoking: "🚭",
        "non-potable_water": "🚱",
        nose: "👃",
        notebook: "📓",
        notebook_with_decorative_cover: "📔",
        notes: "🎶",
        nut_and_bolt: "🔩",
        o: "⭕️",
        o2: "🅾️",
        ocean: "🌊",
        octopus: "🐙",
        oden: "🍢",
        office: "🏢",
        oil_drum: "🛢",
        ok: "🆗",
        ok_hand: "👌",
        ok_man: "🙆&zwj;♂️",
        ok_woman: "🙆",
        old_key: "🗝",
        older_man: "👴",
        older_woman: "👵",
        om: "🕉",
        on: "🔛",
        oncoming_automobile: "🚘",
        oncoming_bus: "🚍",
        oncoming_police_car: "🚔",
        oncoming_taxi: "🚖",
        open_file_folder: "📂",
        open_hands: "👐",
        open_mouth: "😮",
        open_umbrella: "☂️",
        ophiuchus: "⛎",
        orange_book: "📙",
        orthodox_cross: "☦️",
        outbox_tray: "📤",
        owl: "🦉",
        ox: "🐂",
        package: "📦",
        page_facing_up: "📄",
        page_with_curl: "📃",
        pager: "📟",
        paintbrush: "🖌",
        palm_tree: "🌴",
        pancakes: "🥞",
        panda_face: "🐼",
        paperclip: "📎",
        paperclips: "🖇",
        parasol_on_ground: "⛱",
        parking: "🅿️",
        part_alternation_mark: "〽️",
        partly_sunny: "⛅️",
        passenger_ship: "🛳",
        passport_control: "🛂",
        pause_button: "⏸",
        peace_symbol: "☮️",
        peach: "🍑",
        peanuts: "🥜",
        pear: "🍐",
        pen: "🖊",
        pencil2: "✏️",
        penguin: "🐧",
        pensive: "😔",
        performing_arts: "🎭",
        persevere: "😣",
        person_fencing: "🤺",
        pouting_woman: "🙎",
        phone: "☎️",
        pick: "⛏",
        pig: "🐷",
        pig2: "🐖",
        pig_nose: "🐽",
        pill: "💊",
        pineapple: "🍍",
        ping_pong: "🏓",
        pisces: "♓️",
        pizza: "🍕",
        place_of_worship: "🛐",
        plate_with_cutlery: "🍽",
        play_or_pause_button: "⏯",
        point_down: "👇",
        point_left: "👈",
        point_right: "👉",
        point_up: "☝️",
        point_up_2: "👆",
        police_car: "🚓",
        policewoman: "👮&zwj;♀️",
        poodle: "🐩",
        popcorn: "🍿",
        post_office: "🏣",
        postal_horn: "📯",
        postbox: "📮",
        potable_water: "🚰",
        potato: "🥔",
        pouch: "👝",
        poultry_leg: "🍗",
        pound: "💷",
        rage: "😡",
        pouting_cat: "😾",
        pouting_man: "🙎&zwj;♂️",
        pray: "🙏",
        prayer_beads: "📿",
        pregnant_woman: "🤰",
        previous_track_button: "⏮",
        prince: "🤴",
        princess: "👸",
        printer: "🖨",
        purple_heart: "💜",
        purse: "👛",
        pushpin: "📌",
        put_litter_in_its_place: "🚮",
        question: "❓",
        rabbit: "🐰",
        rabbit2: "🐇",
        racehorse: "🐎",
        racing_car: "🏎",
        radio: "📻",
        radio_button: "🔘",
        radioactive: "☢️",
        railway_car: "🚃",
        railway_track: "🛤",
        rainbow: "🌈",
        rainbow_flag: "🏳️&zwj;🌈",
        raised_back_of_hand: "🤚",
        raised_hand_with_fingers_splayed: "🖐",
        raised_hands: "🙌",
        raising_hand_woman: "🙋",
        raising_hand_man: "🙋&zwj;♂️",
        ram: "🐏",
        ramen: "🍜",
        rat: "🐀",
        record_button: "⏺",
        recycle: "♻️",
        red_circle: "🔴",
        registered: "®️",
        relaxed: "☺️",
        relieved: "😌",
        reminder_ribbon: "🎗",
        repeat: "🔁",
        repeat_one: "🔂",
        rescue_worker_helmet: "⛑",
        restroom: "🚻",
        revolving_hearts: "💞",
        rewind: "⏪",
        rhinoceros: "🦏",
        ribbon: "🎀",
        rice: "🍚",
        rice_ball: "🍙",
        rice_cracker: "🍘",
        rice_scene: "🎑",
        right_anger_bubble: "🗯",
        ring: "💍",
        robot: "🤖",
        rocket: "🚀",
        rofl: "🤣",
        roll_eyes: "🙄",
        roller_coaster: "🎢",
        rooster: "🐓",
        rose: "🌹",
        rosette: "🏵",
        rotating_light: "🚨",
        round_pushpin: "📍",
        rowing_man: "🚣",
        rowing_woman: "🚣&zwj;♀️",
        rugby_football: "🏉",
        running_man: "🏃",
        running_shirt_with_sash: "🎽",
        running_woman: "🏃&zwj;♀️",
        sa: "🈂️",
        sagittarius: "♐️",
        sake: "🍶",
        sandal: "👡",
        santa: "🎅",
        satellite: "📡",
        saxophone: "🎷",
        school: "🏫",
        school_satchel: "🎒",
        scissors: "✂️",
        scorpion: "🦂",
        scorpius: "♏️",
        scream: "😱",
        scream_cat: "🙀",
        scroll: "📜",
        seat: "💺",
        secret: "㊙️",
        see_no_evil: "🙈",
        seedling: "🌱",
        selfie: "🤳",
        shallow_pan_of_food: "🥘",
        shamrock: "☘️",
        shark: "🦈",
        shaved_ice: "🍧",
        sheep: "🐑",
        shell: "🐚",
        shield: "🛡",
        shinto_shrine: "⛩",
        ship: "🚢",
        shirt: "👕",
        shopping: "🛍",
        shopping_cart: "🛒",
        shower: "🚿",
        shrimp: "🦐",
        signal_strength: "📶",
        six_pointed_star: "🔯",
        ski: "🎿",
        skier: "⛷",
        skull: "💀",
        skull_and_crossbones: "☠️",
        sleeping: "😴",
        sleeping_bed: "🛌",
        sleepy: "😪",
        slightly_frowning_face: "🙁",
        slightly_smiling_face: "🙂",
        slot_machine: "🎰",
        small_airplane: "🛩",
        small_blue_diamond: "🔹",
        small_orange_diamond: "🔸",
        small_red_triangle: "🔺",
        small_red_triangle_down: "🔻",
        smile: "😄",
        smile_cat: "😸",
        smiley: "😃",
        smiley_cat: "😺",
        smiling_imp: "😈",
        smirk: "😏",
        smirk_cat: "😼",
        smoking: "🚬",
        snail: "🐌",
        snake: "🐍",
        sneezing_face: "🤧",
        snowboarder: "🏂",
        snowflake: "❄️",
        snowman: "⛄️",
        snowman_with_snow: "☃️",
        sob: "😭",
        soccer: "⚽️",
        soon: "🔜",
        sos: "🆘",
        sound: "🔉",
        space_invader: "👾",
        spades: "♠️",
        spaghetti: "🍝",
        sparkle: "❇️",
        sparkler: "🎇",
        sparkles: "✨",
        sparkling_heart: "💖",
        speak_no_evil: "🙊",
        speaker: "🔈",
        speaking_head: "🗣",
        speech_balloon: "💬",
        speedboat: "🚤",
        spider: "🕷",
        spider_web: "🕸",
        spiral_calendar: "🗓",
        spiral_notepad: "🗒",
        spoon: "🥄",
        squid: "🦑",
        stadium: "🏟",
        star: "⭐️",
        star2: "🌟",
        star_and_crescent: "☪️",
        star_of_david: "✡️",
        stars: "🌠",
        station: "🚉",
        statue_of_liberty: "🗽",
        steam_locomotive: "🚂",
        stew: "🍲",
        stop_button: "⏹",
        stop_sign: "🛑",
        stopwatch: "⏱",
        straight_ruler: "📏",
        strawberry: "🍓",
        stuck_out_tongue: "😛",
        stuck_out_tongue_closed_eyes: "😝",
        stuck_out_tongue_winking_eye: "😜",
        studio_microphone: "🎙",
        stuffed_flatbread: "🥙",
        sun_behind_large_cloud: "🌥",
        sun_behind_rain_cloud: "🌦",
        sun_behind_small_cloud: "🌤",
        sun_with_face: "🌞",
        sunflower: "🌻",
        sunglasses: "😎",
        sunny: "☀️",
        sunrise: "🌅",
        sunrise_over_mountains: "🌄",
        surfing_man: "🏄",
        surfing_woman: "🏄&zwj;♀️",
        sushi: "🍣",
        suspension_railway: "🚟",
        sweat: "😓",
        sweat_drops: "💦",
        sweat_smile: "😅",
        sweet_potato: "🍠",
        swimming_man: "🏊",
        swimming_woman: "🏊&zwj;♀️",
        symbols: "🔣",
        synagogue: "🕍",
        syringe: "💉",
        taco: "🌮",
        tada: "🎉",
        tanabata_tree: "🎋",
        taurus: "♉️",
        taxi: "🚕",
        tea: "🍵",
        telephone_receiver: "📞",
        telescope: "🔭",
        tennis: "🎾",
        tent: "⛺️",
        thermometer: "🌡",
        thinking: "🤔",
        thought_balloon: "💭",
        ticket: "🎫",
        tickets: "🎟",
        tiger: "🐯",
        tiger2: "🐅",
        timer_clock: "⏲",
        tipping_hand_man: "💁&zwj;♂️",
        tired_face: "😫",
        tm: "™️",
        toilet: "🚽",
        tokyo_tower: "🗼",
        tomato: "🍅",
        tongue: "👅",
        top: "🔝",
        tophat: "🎩",
        tornado: "🌪",
        trackball: "🖲",
        tractor: "🚜",
        traffic_light: "🚥",
        train: "🚋",
        train2: "🚆",
        tram: "🚊",
        triangular_flag_on_post: "🚩",
        triangular_ruler: "📐",
        trident: "🔱",
        triumph: "😤",
        trolleybus: "🚎",
        trophy: "🏆",
        tropical_drink: "🍹",
        tropical_fish: "🐠",
        truck: "🚚",
        trumpet: "🎺",
        tulip: "🌷",
        tumbler_glass: "🥃",
        turkey: "🦃",
        turtle: "🐢",
        tv: "📺",
        twisted_rightwards_arrows: "🔀",
        two_hearts: "💕",
        two_men_holding_hands: "👬",
        two_women_holding_hands: "👭",
        u5272: "🈹",
        u5408: "🈴",
        u55b6: "🈺",
        u6307: "🈯️",
        u6708: "🈷️",
        u6709: "🈶",
        u6e80: "🈵",
        u7121: "🈚️",
        u7533: "🈸",
        u7981: "🈲",
        u7a7a: "🈳",
        umbrella: "☔️",
        unamused: "😒",
        underage: "🔞",
        unicorn: "🦄",
        unlock: "🔓",
        up: "🆙",
        upside_down_face: "🙃",
        v: "✌️",
        vertical_traffic_light: "🚦",
        vhs: "📼",
        vibration_mode: "📳",
        video_camera: "📹",
        video_game: "🎮",
        violin: "🎻",
        virgo: "♍️",
        volcano: "🌋",
        volleyball: "🏐",
        vs: "🆚",
        vulcan_salute: "🖖",
        walking_man: "🚶",
        walking_woman: "🚶&zwj;♀️",
        waning_crescent_moon: "🌘",
        waning_gibbous_moon: "🌖",
        warning: "⚠️",
        wastebasket: "🗑",
        watch: "⌚️",
        water_buffalo: "🐃",
        watermelon: "🍉",
        wave: "👋",
        wavy_dash: "〰️",
        waxing_crescent_moon: "🌒",
        wc: "🚾",
        weary: "😩",
        wedding: "💒",
        weight_lifting_man: "🏋️",
        weight_lifting_woman: "🏋️&zwj;♀️",
        whale: "🐳",
        whale2: "🐋",
        wheel_of_dharma: "☸️",
        wheelchair: "♿️",
        white_check_mark: "✅",
        white_circle: "⚪️",
        white_flag: "🏳️",
        white_flower: "💮",
        white_large_square: "⬜️",
        white_medium_small_square: "◽️",
        white_medium_square: "◻️",
        white_small_square: "▫️",
        white_square_button: "🔳",
        wilted_flower: "🥀",
        wind_chime: "🎐",
        wind_face: "🌬",
        wine_glass: "🍷",
        wink: "😉",
        wolf: "🐺",
        woman: "👩",
        woman_artist: "👩&zwj;🎨",
        woman_astronaut: "👩&zwj;🚀",
        woman_cartwheeling: "🤸&zwj;♀️",
        woman_cook: "👩&zwj;🍳",
        woman_facepalming: "🤦&zwj;♀️",
        woman_factory_worker: "👩&zwj;🏭",
        woman_farmer: "👩&zwj;🌾",
        woman_firefighter: "👩&zwj;🚒",
        woman_health_worker: "👩&zwj;⚕️",
        woman_judge: "👩&zwj;⚖️",
        woman_juggling: "🤹&zwj;♀️",
        woman_mechanic: "👩&zwj;🔧",
        woman_office_worker: "👩&zwj;💼",
        woman_pilot: "👩&zwj;✈️",
        woman_playing_handball: "🤾&zwj;♀️",
        woman_playing_water_polo: "🤽&zwj;♀️",
        woman_scientist: "👩&zwj;🔬",
        woman_shrugging: "🤷&zwj;♀️",
        woman_singer: "👩&zwj;🎤",
        woman_student: "👩&zwj;🎓",
        woman_teacher: "👩&zwj;🏫",
        woman_technologist: "👩&zwj;💻",
        woman_with_turban: "👳&zwj;♀️",
        womans_clothes: "👚",
        womans_hat: "👒",
        women_wrestling: "🤼&zwj;♀️",
        womens: "🚺",
        world_map: "🗺",
        worried: "😟",
        wrench: "🔧",
        writing_hand: "✍️",
        x: "❌",
        yellow_heart: "💛",
        yen: "💴",
        yin_yang: "☯️",
        yum: "😋",
        zap: "⚡️",
        zipper_mouth_face: "🤐",
        zzz: "💤",
        /* special emojis :P */
        octocat: '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
        showdown: `<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`
      }, a.Converter = function(l) {
        var _ = {}, w = [], k = [], R = {}, L = m, j = {
          parsed: {},
          raw: "",
          format: ""
        };
        D();
        function D() {
          l = l || {};
          for (var M in f)
            f.hasOwnProperty(M) && (_[M] = f[M]);
          if (typeof l == "object")
            for (var B in l)
              l.hasOwnProperty(B) && (_[B] = l[B]);
          else
            throw Error("Converter expects the passed parameter to be an object, but " + typeof l + " was passed instead.");
          _.extensions && a.helper.forEach(_.extensions, q);
        }
        function q(M, B) {
          if (B = B || null, a.helper.isString(M))
            if (M = a.helper.stdExtName(M), B = M, a.extensions[M]) {
              console.warn("DEPRECATION WARNING: " + M + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"), G(a.extensions[M], M);
              return;
            } else if (!a.helper.isUndefined(c[M]))
              M = c[M];
            else
              throw Error('Extension "' + M + '" could not be loaded. It was either not found or is not a valid extension.');
          typeof M == "function" && (M = M()), a.helper.isArray(M) || (M = [M]);
          var J = v(M, B);
          if (!J.valid)
            throw Error(J.error);
          for (var ae = 0; ae < M.length; ++ae) {
            switch (M[ae].type) {
              case "lang":
                w.push(M[ae]);
                break;
              case "output":
                k.push(M[ae]);
                break;
            }
            if (M[ae].hasOwnProperty("listeners"))
              for (var I in M[ae].listeners)
                M[ae].listeners.hasOwnProperty(I) && V(I, M[ae].listeners[I]);
          }
        }
        function G(M, B) {
          typeof M == "function" && (M = M(new a.Converter())), a.helper.isArray(M) || (M = [M]);
          var J = v(M, B);
          if (!J.valid)
            throw Error(J.error);
          for (var ae = 0; ae < M.length; ++ae)
            switch (M[ae].type) {
              case "lang":
                w.push(M[ae]);
                break;
              case "output":
                k.push(M[ae]);
                break;
              default:
                throw Error("Extension loader error: Type unrecognized!!!");
            }
        }
        function V(M, B) {
          if (!a.helper.isString(M))
            throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof M + " given");
          if (typeof B != "function")
            throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof B + " given");
          R.hasOwnProperty(M) || (R[M] = []), R[M].push(B);
        }
        function K(M) {
          var B = M.match(/^\s*/)[0].length, J = new RegExp("^\\s{0," + B + "}", "gm");
          return M.replace(J, "");
        }
        this._dispatch = function(B, J, ae, I) {
          if (R.hasOwnProperty(B))
            for (var X = 0; X < R[B].length; ++X) {
              var ce = R[B][X](B, J, this, ae, I);
              ce && typeof ce < "u" && (J = ce);
            }
          return J;
        }, this.listen = function(M, B) {
          return V(M, B), this;
        }, this.makeHtml = function(M) {
          if (!M)
            return M;
          var B = {
            gHtmlBlocks: [],
            gHtmlMdBlocks: [],
            gHtmlSpans: [],
            gUrls: {},
            gTitles: {},
            gDimensions: {},
            gListLevel: 0,
            hashLinkCounts: {},
            langExtensions: w,
            outputModifiers: k,
            converter: this,
            ghCodeBlocks: [],
            metadata: {
              parsed: {},
              raw: "",
              format: ""
            }
          };
          return M = M.replace(/¨/g, "¨T"), M = M.replace(/\$/g, "¨D"), M = M.replace(/\r\n/g, `
`), M = M.replace(/\r/g, `
`), M = M.replace(/\u00A0/g, "&nbsp;"), _.smartIndentationFix && (M = K(M)), M = `

` + M + `

`, M = a.subParser("detab")(M, _, B), M = M.replace(/^[ \t]+$/mg, ""), a.helper.forEach(w, function(J) {
            M = a.subParser("runExtension")(J, M, _, B);
          }), M = a.subParser("metadata")(M, _, B), M = a.subParser("hashPreCodeTags")(M, _, B), M = a.subParser("githubCodeBlocks")(M, _, B), M = a.subParser("hashHTMLBlocks")(M, _, B), M = a.subParser("hashCodeTags")(M, _, B), M = a.subParser("stripLinkDefinitions")(M, _, B), M = a.subParser("blockGamut")(M, _, B), M = a.subParser("unhashHTMLSpans")(M, _, B), M = a.subParser("unescapeSpecialChars")(M, _, B), M = M.replace(/¨D/g, "$$"), M = M.replace(/¨T/g, "¨"), M = a.subParser("completeHTMLDocument")(M, _, B), a.helper.forEach(k, function(J) {
            M = a.subParser("runExtension")(J, M, _, B);
          }), j = B.metadata, M;
        }, this.makeMarkdown = this.makeMd = function(M, B) {
          if (M = M.replace(/\r\n/g, `
`), M = M.replace(/\r/g, `
`), M = M.replace(/>[ \t]+</, ">¨NBSP;<"), !B)
            if (window && window.document)
              B = window.document;
            else
              throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
          var J = B.createElement("div");
          J.innerHTML = M;
          var ae = {
            preList: U(J)
          };
          Y(J);
          for (var I = J.childNodes, X = "", ce = 0; ce < I.length; ce++)
            X += a.subParser("makeMarkdown.node")(I[ce], ae);
          function Y(te) {
            for (var ne = 0; ne < te.childNodes.length; ++ne) {
              var ue = te.childNodes[ne];
              ue.nodeType === 3 ? !/\S/.test(ue.nodeValue) && !/^[ ]+$/.test(ue.nodeValue) ? (te.removeChild(ue), --ne) : (ue.nodeValue = ue.nodeValue.split(`
`).join(" "), ue.nodeValue = ue.nodeValue.replace(/(\s)+/g, "$1")) : ue.nodeType === 1 && Y(ue);
            }
          }
          function U(te) {
            for (var ne = te.querySelectorAll("pre"), ue = [], re = 0; re < ne.length; ++re)
              if (ne[re].childElementCount === 1 && ne[re].firstChild.tagName.toLowerCase() === "code") {
                var pe = ne[re].firstChild.innerHTML.trim(), Re = ne[re].firstChild.getAttribute("data-language") || "";
                if (Re === "")
                  for (var Se = ne[re].firstChild.className.split(" "), me = 0; me < Se.length; ++me) {
                    var fe = Se[me].match(/^language-(.+)$/);
                    if (fe !== null) {
                      Re = fe[1];
                      break;
                    }
                  }
                pe = a.helper.unescapeHTMLEntities(pe), ue.push(pe), ne[re].outerHTML = '<precode language="' + Re + '" precodenum="' + re.toString() + '"></precode>';
              } else
                ue.push(ne[re].innerHTML), ne[re].innerHTML = "", ne[re].setAttribute("prenum", re.toString());
            return ue;
          }
          return X;
        }, this.setOption = function(M, B) {
          _[M] = B;
        }, this.getOption = function(M) {
          return _[M];
        }, this.getOptions = function() {
          return _;
        }, this.addExtension = function(M, B) {
          B = B || null, q(M, B);
        }, this.useExtension = function(M) {
          q(M);
        }, this.setFlavor = function(M) {
          if (!p.hasOwnProperty(M))
            throw Error(M + " flavor was not found");
          var B = p[M];
          L = M;
          for (var J in B)
            B.hasOwnProperty(J) && (_[J] = B[J]);
        }, this.getFlavor = function() {
          return L;
        }, this.removeExtension = function(M) {
          a.helper.isArray(M) || (M = [M]);
          for (var B = 0; B < M.length; ++B) {
            for (var J = M[B], ae = 0; ae < w.length; ++ae)
              w[ae] === J && w.splice(ae, 1);
            for (var I = 0; I < k.length; ++I)
              k[I] === J && k.splice(I, 1);
          }
        }, this.getAllExtensions = function() {
          return {
            language: w,
            output: k
          };
        }, this.getMetadata = function(M) {
          return M ? j.raw : j.parsed;
        }, this.getMetadataFormat = function() {
          return j.format;
        }, this._setMetadataPair = function(M, B) {
          j.parsed[M] = B;
        }, this._setMetadataFormat = function(M) {
          j.format = M;
        }, this._setMetadataRaw = function(M) {
          j.raw = M;
        };
      }, a.subParser("anchors", function(l, _, w) {
        l = w.converter._dispatch("anchors.before", l, _, w);
        var k = function(R, L, j, D, q, G, V) {
          if (a.helper.isUndefined(V) && (V = ""), j = j.toLowerCase(), R.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
            D = "";
          else if (!D)
            if (j || (j = L.toLowerCase().replace(/ ?\n/g, " ")), D = "#" + j, !a.helper.isUndefined(w.gUrls[j]))
              D = w.gUrls[j], a.helper.isUndefined(w.gTitles[j]) || (V = w.gTitles[j]);
            else
              return R;
          D = D.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback);
          var K = '<a href="' + D + '"';
          return V !== "" && V !== null && (V = V.replace(/"/g, "&quot;"), V = V.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback), K += ' title="' + V + '"'), _.openLinksInNewWindow && !/^#/.test(D) && (K += ' rel="noopener noreferrer" target="¨E95Eblank"'), K += ">" + L + "</a>", K;
        };
        return l = l.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, k), l = l.replace(
          /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
          k
        ), l = l.replace(
          /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
          k
        ), l = l.replace(/\[([^\[\]]+)]()()()()()/g, k), _.ghMentions && (l = l.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function(R, L, j, D, q) {
          if (j === "\\")
            return L + D;
          if (!a.helper.isString(_.ghMentionsLink))
            throw new Error("ghMentionsLink option must be a string");
          var G = _.ghMentionsLink.replace(/\{u}/g, q), V = "";
          return _.openLinksInNewWindow && (V = ' rel="noopener noreferrer" target="¨E95Eblank"'), L + '<a href="' + G + '"' + V + ">" + D + "</a>";
        })), l = w.converter._dispatch("anchors.after", l, _, w), l;
      });
      var y = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi, S = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi, h = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi, C = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi, x = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, O = function(l) {
        return function(_, w, k, R, L, j, D) {
          k = k.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback);
          var q = k, G = "", V = "", K = w || "", M = D || "";
          return /^www\./i.test(k) && (k = k.replace(/^www\./i, "http://www.")), l.excludeTrailingPunctuationFromURLs && j && (G = j), l.openLinksInNewWindow && (V = ' rel="noopener noreferrer" target="¨E95Eblank"'), K + '<a href="' + k + '"' + V + ">" + q + "</a>" + G + M;
        };
      }, T = function(l, _) {
        return function(w, k, R) {
          var L = "mailto:";
          return k = k || "", R = a.subParser("unescapeSpecialChars")(R, l, _), l.encodeEmails ? (L = a.helper.encodeEmailAddress(L + R), R = a.helper.encodeEmailAddress(R)) : L = L + R, k + '<a href="' + L + '">' + R + "</a>";
        };
      };
      a.subParser("autoLinks", function(l, _, w) {
        return l = w.converter._dispatch("autoLinks.before", l, _, w), l = l.replace(h, O(_)), l = l.replace(x, T(_, w)), l = w.converter._dispatch("autoLinks.after", l, _, w), l;
      }), a.subParser("simplifiedAutoLinks", function(l, _, w) {
        return _.simplifiedAutoLink && (l = w.converter._dispatch("simplifiedAutoLinks.before", l, _, w), _.excludeTrailingPunctuationFromURLs ? l = l.replace(S, O(_)) : l = l.replace(y, O(_)), l = l.replace(C, T(_, w)), l = w.converter._dispatch("simplifiedAutoLinks.after", l, _, w)), l;
      }), a.subParser("blockGamut", function(l, _, w) {
        return l = w.converter._dispatch("blockGamut.before", l, _, w), l = a.subParser("blockQuotes")(l, _, w), l = a.subParser("headers")(l, _, w), l = a.subParser("horizontalRule")(l, _, w), l = a.subParser("lists")(l, _, w), l = a.subParser("codeBlocks")(l, _, w), l = a.subParser("tables")(l, _, w), l = a.subParser("hashHTMLBlocks")(l, _, w), l = a.subParser("paragraphs")(l, _, w), l = w.converter._dispatch("blockGamut.after", l, _, w), l;
      }), a.subParser("blockQuotes", function(l, _, w) {
        l = w.converter._dispatch("blockQuotes.before", l, _, w), l = l + `

`;
        var k = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
        return _.splitAdjacentBlockquotes && (k = /^ {0,3}>[\s\S]*?(?:\n\n)/gm), l = l.replace(k, function(R) {
          return R = R.replace(/^[ \t]*>[ \t]?/gm, ""), R = R.replace(/¨0/g, ""), R = R.replace(/^[ \t]+$/gm, ""), R = a.subParser("githubCodeBlocks")(R, _, w), R = a.subParser("blockGamut")(R, _, w), R = R.replace(/(^|\n)/g, "$1  "), R = R.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(L, j) {
            var D = j;
            return D = D.replace(/^  /mg, "¨0"), D = D.replace(/¨0/g, ""), D;
          }), a.subParser("hashBlock")(`<blockquote>
` + R + `
</blockquote>`, _, w);
        }), l = w.converter._dispatch("blockQuotes.after", l, _, w), l;
      }), a.subParser("codeBlocks", function(l, _, w) {
        l = w.converter._dispatch("codeBlocks.before", l, _, w), l += "¨0";
        var k = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
        return l = l.replace(k, function(R, L, j) {
          var D = L, q = j, G = `
`;
          return D = a.subParser("outdent")(D, _, w), D = a.subParser("encodeCode")(D, _, w), D = a.subParser("detab")(D, _, w), D = D.replace(/^\n+/g, ""), D = D.replace(/\n+$/g, ""), _.omitExtraWLInCodeBlocks && (G = ""), D = "<pre><code>" + D + G + "</code></pre>", a.subParser("hashBlock")(D, _, w) + q;
        }), l = l.replace(/¨0/, ""), l = w.converter._dispatch("codeBlocks.after", l, _, w), l;
      }), a.subParser("codeSpans", function(l, _, w) {
        return l = w.converter._dispatch("codeSpans.before", l, _, w), typeof l > "u" && (l = ""), l = l.replace(
          /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
          function(k, R, L, j) {
            var D = j;
            return D = D.replace(/^([ \t]*)/g, ""), D = D.replace(/[ \t]*$/g, ""), D = a.subParser("encodeCode")(D, _, w), D = R + "<code>" + D + "</code>", D = a.subParser("hashHTMLSpans")(D, _, w), D;
          }
        ), l = w.converter._dispatch("codeSpans.after", l, _, w), l;
      }), a.subParser("completeHTMLDocument", function(l, _, w) {
        if (!_.completeHTMLDocument)
          return l;
        l = w.converter._dispatch("completeHTMLDocument.before", l, _, w);
        var k = "html", R = `<!DOCTYPE HTML>
`, L = "", j = `<meta charset="utf-8">
`, D = "", q = "";
        typeof w.metadata.parsed.doctype < "u" && (R = "<!DOCTYPE " + w.metadata.parsed.doctype + `>
`, k = w.metadata.parsed.doctype.toString().toLowerCase(), (k === "html" || k === "html5") && (j = '<meta charset="utf-8">'));
        for (var G in w.metadata.parsed)
          if (w.metadata.parsed.hasOwnProperty(G))
            switch (G.toLowerCase()) {
              case "doctype":
                break;
              case "title":
                L = "<title>" + w.metadata.parsed.title + `</title>
`;
                break;
              case "charset":
                k === "html" || k === "html5" ? j = '<meta charset="' + w.metadata.parsed.charset + `">
` : j = '<meta name="charset" content="' + w.metadata.parsed.charset + `">
`;
                break;
              case "language":
              case "lang":
                D = ' lang="' + w.metadata.parsed[G] + '"', q += '<meta name="' + G + '" content="' + w.metadata.parsed[G] + `">
`;
                break;
              default:
                q += '<meta name="' + G + '" content="' + w.metadata.parsed[G] + `">
`;
            }
        return l = R + "<html" + D + `>
<head>
` + L + j + q + `</head>
<body>
` + l.trim() + `
</body>
</html>`, l = w.converter._dispatch("completeHTMLDocument.after", l, _, w), l;
      }), a.subParser("detab", function(l, _, w) {
        return l = w.converter._dispatch("detab.before", l, _, w), l = l.replace(/\t(?=\t)/g, "    "), l = l.replace(/\t/g, "¨A¨B"), l = l.replace(/¨B(.+?)¨A/g, function(k, R) {
          for (var L = R, j = 4 - L.length % 4, D = 0; D < j; D++)
            L += " ";
          return L;
        }), l = l.replace(/¨A/g, "    "), l = l.replace(/¨B/g, ""), l = w.converter._dispatch("detab.after", l, _, w), l;
      }), a.subParser("ellipsis", function(l, _, w) {
        return _.ellipsis && (l = w.converter._dispatch("ellipsis.before", l, _, w), l = l.replace(/\.\.\./g, "…"), l = w.converter._dispatch("ellipsis.after", l, _, w)), l;
      }), a.subParser("emoji", function(l, _, w) {
        if (!_.emoji)
          return l;
        l = w.converter._dispatch("emoji.before", l, _, w);
        var k = /:([\S]+?):/g;
        return l = l.replace(k, function(R, L) {
          return a.helper.emojis.hasOwnProperty(L) ? a.helper.emojis[L] : R;
        }), l = w.converter._dispatch("emoji.after", l, _, w), l;
      }), a.subParser("encodeAmpsAndAngles", function(l, _, w) {
        return l = w.converter._dispatch("encodeAmpsAndAngles.before", l, _, w), l = l.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"), l = l.replace(/<(?![a-z\/?$!])/gi, "&lt;"), l = l.replace(/</g, "&lt;"), l = l.replace(/>/g, "&gt;"), l = w.converter._dispatch("encodeAmpsAndAngles.after", l, _, w), l;
      }), a.subParser("encodeBackslashEscapes", function(l, _, w) {
        return l = w.converter._dispatch("encodeBackslashEscapes.before", l, _, w), l = l.replace(/\\(\\)/g, a.helper.escapeCharactersCallback), l = l.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g, a.helper.escapeCharactersCallback), l = w.converter._dispatch("encodeBackslashEscapes.after", l, _, w), l;
      }), a.subParser("encodeCode", function(l, _, w) {
        return l = w.converter._dispatch("encodeCode.before", l, _, w), l = l.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, a.helper.escapeCharactersCallback), l = w.converter._dispatch("encodeCode.after", l, _, w), l;
      }), a.subParser("escapeSpecialCharsWithinTagAttributes", function(l, _, w) {
        l = w.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", l, _, w);
        var k = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, R = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
        return l = l.replace(k, function(L) {
          return L.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, a.helper.escapeCharactersCallback);
        }), l = l.replace(R, function(L) {
          return L.replace(/([\\`*_~=|])/g, a.helper.escapeCharactersCallback);
        }), l = w.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", l, _, w), l;
      }), a.subParser("githubCodeBlocks", function(l, _, w) {
        return _.ghCodeBlocks ? (l = w.converter._dispatch("githubCodeBlocks.before", l, _, w), l += "¨0", l = l.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(k, R, L, j) {
          var D = _.omitExtraWLInCodeBlocks ? "" : `
`;
          return j = a.subParser("encodeCode")(j, _, w), j = a.subParser("detab")(j, _, w), j = j.replace(/^\n+/g, ""), j = j.replace(/\n+$/g, ""), j = "<pre><code" + (L ? ' class="' + L + " language-" + L + '"' : "") + ">" + j + D + "</code></pre>", j = a.subParser("hashBlock")(j, _, w), `

¨G` + (w.ghCodeBlocks.push({ text: k, codeblock: j }) - 1) + `G

`;
        }), l = l.replace(/¨0/, ""), w.converter._dispatch("githubCodeBlocks.after", l, _, w)) : l;
      }), a.subParser("hashBlock", function(l, _, w) {
        return l = w.converter._dispatch("hashBlock.before", l, _, w), l = l.replace(/(^\n+|\n+$)/g, ""), l = `

¨K` + (w.gHtmlBlocks.push(l) - 1) + `K

`, l = w.converter._dispatch("hashBlock.after", l, _, w), l;
      }), a.subParser("hashCodeTags", function(l, _, w) {
        l = w.converter._dispatch("hashCodeTags.before", l, _, w);
        var k = function(R, L, j, D) {
          var q = j + a.subParser("encodeCode")(L, _, w) + D;
          return "¨C" + (w.gHtmlSpans.push(q) - 1) + "C";
        };
        return l = a.helper.replaceRecursiveRegExp(l, k, "<code\\b[^>]*>", "</code>", "gim"), l = w.converter._dispatch("hashCodeTags.after", l, _, w), l;
      }), a.subParser("hashElement", function(l, _, w) {
        return function(k, R) {
          var L = R;
          return L = L.replace(/\n\n/g, `
`), L = L.replace(/^\n/, ""), L = L.replace(/\n+$/g, ""), L = `

¨K` + (w.gHtmlBlocks.push(L) - 1) + `K

`, L;
        };
      }), a.subParser("hashHTMLBlocks", function(l, _, w) {
        l = w.converter._dispatch("hashHTMLBlocks.before", l, _, w);
        var k = [
          "pre",
          "div",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "blockquote",
          "table",
          "dl",
          "ol",
          "ul",
          "script",
          "noscript",
          "form",
          "fieldset",
          "iframe",
          "math",
          "style",
          "section",
          "header",
          "footer",
          "nav",
          "article",
          "aside",
          "address",
          "audio",
          "canvas",
          "figure",
          "hgroup",
          "output",
          "video",
          "p"
        ], R = function(M, B, J, ae) {
          var I = M;
          return J.search(/\bmarkdown\b/) !== -1 && (I = J + w.converter.makeHtml(B) + ae), `

¨K` + (w.gHtmlBlocks.push(I) - 1) + `K

`;
        };
        _.backslashEscapesHTMLTags && (l = l.replace(/\\<(\/?[^>]+?)>/g, function(M, B) {
          return "&lt;" + B + "&gt;";
        }));
        for (var L = 0; L < k.length; ++L)
          for (var j, D = new RegExp("^ {0,3}(<" + k[L] + "\\b[^>]*>)", "im"), q = "<" + k[L] + "\\b[^>]*>", G = "</" + k[L] + ">"; (j = a.helper.regexIndexOf(l, D)) !== -1; ) {
            var V = a.helper.splitAtIndex(l, j), K = a.helper.replaceRecursiveRegExp(V[1], R, q, G, "im");
            if (K === V[1])
              break;
            l = V[0].concat(K);
          }
        return l = l.replace(
          /(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
          a.subParser("hashElement")(l, _, w)
        ), l = a.helper.replaceRecursiveRegExp(l, function(M) {
          return `

¨K` + (w.gHtmlBlocks.push(M) - 1) + `K

`;
        }, "^ {0,3}<!--", "-->", "gm"), l = l.replace(
          /(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
          a.subParser("hashElement")(l, _, w)
        ), l = w.converter._dispatch("hashHTMLBlocks.after", l, _, w), l;
      }), a.subParser("hashHTMLSpans", function(l, _, w) {
        l = w.converter._dispatch("hashHTMLSpans.before", l, _, w);
        function k(R) {
          return "¨C" + (w.gHtmlSpans.push(R) - 1) + "C";
        }
        return l = l.replace(/<[^>]+?\/>/gi, function(R) {
          return k(R);
        }), l = l.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function(R) {
          return k(R);
        }), l = l.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function(R) {
          return k(R);
        }), l = l.replace(/<[^>]+?>/gi, function(R) {
          return k(R);
        }), l = w.converter._dispatch("hashHTMLSpans.after", l, _, w), l;
      }), a.subParser("unhashHTMLSpans", function(l, _, w) {
        l = w.converter._dispatch("unhashHTMLSpans.before", l, _, w);
        for (var k = 0; k < w.gHtmlSpans.length; ++k) {
          for (var R = w.gHtmlSpans[k], L = 0; /¨C(\d+)C/.test(R); ) {
            var j = RegExp.$1;
            if (R = R.replace("¨C" + j + "C", w.gHtmlSpans[j]), L === 10) {
              console.error("maximum nesting of 10 spans reached!!!");
              break;
            }
            ++L;
          }
          l = l.replace("¨C" + k + "C", R);
        }
        return l = w.converter._dispatch("unhashHTMLSpans.after", l, _, w), l;
      }), a.subParser("hashPreCodeTags", function(l, _, w) {
        l = w.converter._dispatch("hashPreCodeTags.before", l, _, w);
        var k = function(R, L, j, D) {
          var q = j + a.subParser("encodeCode")(L, _, w) + D;
          return `

¨G` + (w.ghCodeBlocks.push({ text: R, codeblock: q }) - 1) + `G

`;
        };
        return l = a.helper.replaceRecursiveRegExp(l, k, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim"), l = w.converter._dispatch("hashPreCodeTags.after", l, _, w), l;
      }), a.subParser("headers", function(l, _, w) {
        l = w.converter._dispatch("headers.before", l, _, w);
        var k = isNaN(parseInt(_.headerLevelStart)) ? 1 : parseInt(_.headerLevelStart), R = _.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, L = _.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
        l = l.replace(R, function(q, G) {
          var V = a.subParser("spanGamut")(G, _, w), K = _.noHeaderId ? "" : ' id="' + D(G) + '"', M = k, B = "<h" + M + K + ">" + V + "</h" + M + ">";
          return a.subParser("hashBlock")(B, _, w);
        }), l = l.replace(L, function(q, G) {
          var V = a.subParser("spanGamut")(G, _, w), K = _.noHeaderId ? "" : ' id="' + D(G) + '"', M = k + 1, B = "<h" + M + K + ">" + V + "</h" + M + ">";
          return a.subParser("hashBlock")(B, _, w);
        });
        var j = _.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
        l = l.replace(j, function(q, G, V) {
          var K = V;
          _.customizedHeaderId && (K = V.replace(/\s?\{([^{]+?)}\s*$/, ""));
          var M = a.subParser("spanGamut")(K, _, w), B = _.noHeaderId ? "" : ' id="' + D(V) + '"', J = k - 1 + G.length, ae = "<h" + J + B + ">" + M + "</h" + J + ">";
          return a.subParser("hashBlock")(ae, _, w);
        });
        function D(q) {
          var G, V;
          if (_.customizedHeaderId) {
            var K = q.match(/\{([^{]+?)}\s*$/);
            K && K[1] && (q = K[1]);
          }
          return G = q, a.helper.isString(_.prefixHeaderId) ? V = _.prefixHeaderId : _.prefixHeaderId === !0 ? V = "section-" : V = "", _.rawPrefixHeaderId || (G = V + G), _.ghCompatibleHeaderId ? G = G.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase() : _.rawHeaderId ? G = G.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "¨").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase() : G = G.replace(/[^\w]/g, "").toLowerCase(), _.rawPrefixHeaderId && (G = V + G), w.hashLinkCounts[G] ? G = G + "-" + w.hashLinkCounts[G]++ : w.hashLinkCounts[G] = 1, G;
        }
        return l = w.converter._dispatch("headers.after", l, _, w), l;
      }), a.subParser("horizontalRule", function(l, _, w) {
        l = w.converter._dispatch("horizontalRule.before", l, _, w);
        var k = a.subParser("hashBlock")("<hr />", _, w);
        return l = l.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, k), l = l.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, k), l = l.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, k), l = w.converter._dispatch("horizontalRule.after", l, _, w), l;
      }), a.subParser("images", function(l, _, w) {
        l = w.converter._dispatch("images.before", l, _, w);
        var k = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, R = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, L = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, j = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, D = /!\[([^\[\]]+)]()()()()()/g;
        function q(V, K, M, B, J, ae, I, X) {
          return B = B.replace(/\s/g, ""), G(V, K, M, B, J, ae, I, X);
        }
        function G(V, K, M, B, J, ae, I, X) {
          var ce = w.gUrls, Y = w.gTitles, U = w.gDimensions;
          if (M = M.toLowerCase(), X || (X = ""), V.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
            B = "";
          else if (B === "" || B === null)
            if ((M === "" || M === null) && (M = K.toLowerCase().replace(/ ?\n/g, " ")), B = "#" + M, !a.helper.isUndefined(ce[M]))
              B = ce[M], a.helper.isUndefined(Y[M]) || (X = Y[M]), a.helper.isUndefined(U[M]) || (J = U[M].width, ae = U[M].height);
            else
              return V;
          K = K.replace(/"/g, "&quot;").replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback), B = B.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback);
          var te = '<img src="' + B + '" alt="' + K + '"';
          return X && a.helper.isString(X) && (X = X.replace(/"/g, "&quot;").replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback), te += ' title="' + X + '"'), J && ae && (J = J === "*" ? "auto" : J, ae = ae === "*" ? "auto" : ae, te += ' width="' + J + '"', te += ' height="' + ae + '"'), te += " />", te;
        }
        return l = l.replace(j, G), l = l.replace(L, q), l = l.replace(R, G), l = l.replace(k, G), l = l.replace(D, G), l = w.converter._dispatch("images.after", l, _, w), l;
      }), a.subParser("italicsAndBold", function(l, _, w) {
        l = w.converter._dispatch("italicsAndBold.before", l, _, w);
        function k(R, L, j) {
          return L + R + j;
        }
        return _.literalMidWordUnderscores ? (l = l.replace(/\b___(\S[\s\S]*?)___\b/g, function(R, L) {
          return k(L, "<strong><em>", "</em></strong>");
        }), l = l.replace(/\b__(\S[\s\S]*?)__\b/g, function(R, L) {
          return k(L, "<strong>", "</strong>");
        }), l = l.replace(/\b_(\S[\s\S]*?)_\b/g, function(R, L) {
          return k(L, "<em>", "</em>");
        })) : (l = l.replace(/___(\S[\s\S]*?)___/g, function(R, L) {
          return /\S$/.test(L) ? k(L, "<strong><em>", "</em></strong>") : R;
        }), l = l.replace(/__(\S[\s\S]*?)__/g, function(R, L) {
          return /\S$/.test(L) ? k(L, "<strong>", "</strong>") : R;
        }), l = l.replace(/_([^\s_][\s\S]*?)_/g, function(R, L) {
          return /\S$/.test(L) ? k(L, "<em>", "</em>") : R;
        })), _.literalMidWordAsterisks ? (l = l.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(R, L, j) {
          return k(j, L + "<strong><em>", "</em></strong>");
        }), l = l.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function(R, L, j) {
          return k(j, L + "<strong>", "</strong>");
        }), l = l.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function(R, L, j) {
          return k(j, L + "<em>", "</em>");
        })) : (l = l.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(R, L) {
          return /\S$/.test(L) ? k(L, "<strong><em>", "</em></strong>") : R;
        }), l = l.replace(/\*\*(\S[\s\S]*?)\*\*/g, function(R, L) {
          return /\S$/.test(L) ? k(L, "<strong>", "</strong>") : R;
        }), l = l.replace(/\*([^\s*][\s\S]*?)\*/g, function(R, L) {
          return /\S$/.test(L) ? k(L, "<em>", "</em>") : R;
        })), l = w.converter._dispatch("italicsAndBold.after", l, _, w), l;
      }), a.subParser("lists", function(l, _, w) {
        function k(j, D) {
          w.gListLevel++, j = j.replace(/\n{2,}$/, `
`), j += "¨0";
          var q = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm, G = /\n[ \t]*\n(?!¨0)/.test(j);
          return _.disableForced4SpacesIndentedSublists && (q = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm), j = j.replace(q, function(V, K, M, B, J, ae, I) {
            I = I && I.trim() !== "";
            var X = a.subParser("outdent")(J, _, w), ce = "";
            return ae && _.tasklists && (ce = ' class="task-list-item" style="list-style-type: none;"', X = X.replace(/^[ \t]*\[(x|X| )?]/m, function() {
              var Y = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
              return I && (Y += " checked"), Y += ">", Y;
            })), X = X.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(Y) {
              return "¨A" + Y;
            }), K || X.search(/\n{2,}/) > -1 ? (X = a.subParser("githubCodeBlocks")(X, _, w), X = a.subParser("blockGamut")(X, _, w)) : (X = a.subParser("lists")(X, _, w), X = X.replace(/\n$/, ""), X = a.subParser("hashHTMLBlocks")(X, _, w), X = X.replace(/\n\n+/g, `

`), G ? X = a.subParser("paragraphs")(X, _, w) : X = a.subParser("spanGamut")(X, _, w)), X = X.replace("¨A", ""), X = "<li" + ce + ">" + X + `</li>
`, X;
          }), j = j.replace(/¨0/g, ""), w.gListLevel--, D && (j = j.replace(/\s+$/, "")), j;
        }
        function R(j, D) {
          if (D === "ol") {
            var q = j.match(/^ *(\d+)\./);
            if (q && q[1] !== "1")
              return ' start="' + q[1] + '"';
          }
          return "";
        }
        function L(j, D, q) {
          var G = _.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm, V = _.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm, K = D === "ul" ? G : V, M = "";
          if (j.search(K) !== -1)
            (function J(ae) {
              var I = ae.search(K), X = R(j, D);
              I !== -1 ? (M += `

<` + D + X + `>
` + k(ae.slice(0, I), !!q) + "</" + D + `>
`, D = D === "ul" ? "ol" : "ul", K = D === "ul" ? G : V, J(ae.slice(I))) : M += `

<` + D + X + `>
` + k(ae, !!q) + "</" + D + `>
`;
            })(j);
          else {
            var B = R(j, D);
            M = `

<` + D + B + `>
` + k(j, !!q) + "</" + D + `>
`;
          }
          return M;
        }
        return l = w.converter._dispatch("lists.before", l, _, w), l += "¨0", w.gListLevel ? l = l.replace(
          /^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
          function(j, D, q) {
            var G = q.search(/[*+-]/g) > -1 ? "ul" : "ol";
            return L(D, G, !0);
          }
        ) : l = l.replace(
          /(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
          function(j, D, q, G) {
            var V = G.search(/[*+-]/g) > -1 ? "ul" : "ol";
            return L(q, V, !1);
          }
        ), l = l.replace(/¨0/, ""), l = w.converter._dispatch("lists.after", l, _, w), l;
      }), a.subParser("metadata", function(l, _, w) {
        if (!_.metadata)
          return l;
        l = w.converter._dispatch("metadata.before", l, _, w);
        function k(R) {
          w.metadata.raw = R, R = R.replace(/&/g, "&amp;").replace(/"/g, "&quot;"), R = R.replace(/\n {4}/g, " "), R.replace(/^([\S ]+): +([\s\S]+?)$/gm, function(L, j, D) {
            return w.metadata.parsed[j] = D, "";
          });
        }
        return l = l.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(R, L, j) {
          return k(j), "¨M";
        }), l = l.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(R, L, j) {
          return L && (w.metadata.format = L), k(j), "¨M";
        }), l = l.replace(/¨M/g, ""), l = w.converter._dispatch("metadata.after", l, _, w), l;
      }), a.subParser("outdent", function(l, _, w) {
        return l = w.converter._dispatch("outdent.before", l, _, w), l = l.replace(/^(\t|[ ]{1,4})/gm, "¨0"), l = l.replace(/¨0/g, ""), l = w.converter._dispatch("outdent.after", l, _, w), l;
      }), a.subParser("paragraphs", function(l, _, w) {
        l = w.converter._dispatch("paragraphs.before", l, _, w), l = l.replace(/^\n+/g, ""), l = l.replace(/\n+$/g, "");
        for (var k = l.split(/\n{2,}/g), R = [], L = k.length, j = 0; j < L; j++) {
          var D = k[j];
          D.search(/¨(K|G)(\d+)\1/g) >= 0 ? R.push(D) : D.search(/\S/) >= 0 && (D = a.subParser("spanGamut")(D, _, w), D = D.replace(/^([ \t]*)/g, "<p>"), D += "</p>", R.push(D));
        }
        for (L = R.length, j = 0; j < L; j++) {
          for (var q = "", G = R[j], V = !1; /¨(K|G)(\d+)\1/.test(G); ) {
            var K = RegExp.$1, M = RegExp.$2;
            K === "K" ? q = w.gHtmlBlocks[M] : V ? q = a.subParser("encodeCode")(w.ghCodeBlocks[M].text, _, w) : q = w.ghCodeBlocks[M].codeblock, q = q.replace(/\$/g, "$$$$"), G = G.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, q), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(G) && (V = !0);
          }
          R[j] = G;
        }
        return l = R.join(`
`), l = l.replace(/^\n+/g, ""), l = l.replace(/\n+$/g, ""), w.converter._dispatch("paragraphs.after", l, _, w);
      }), a.subParser("runExtension", function(l, _, w, k) {
        if (l.filter)
          _ = l.filter(_, k.converter, w);
        else if (l.regex) {
          var R = l.regex;
          R instanceof RegExp || (R = new RegExp(R, "g")), _ = _.replace(R, l.replace);
        }
        return _;
      }), a.subParser("spanGamut", function(l, _, w) {
        return l = w.converter._dispatch("spanGamut.before", l, _, w), l = a.subParser("codeSpans")(l, _, w), l = a.subParser("escapeSpecialCharsWithinTagAttributes")(l, _, w), l = a.subParser("encodeBackslashEscapes")(l, _, w), l = a.subParser("images")(l, _, w), l = a.subParser("anchors")(l, _, w), l = a.subParser("autoLinks")(l, _, w), l = a.subParser("simplifiedAutoLinks")(l, _, w), l = a.subParser("emoji")(l, _, w), l = a.subParser("underline")(l, _, w), l = a.subParser("italicsAndBold")(l, _, w), l = a.subParser("strikethrough")(l, _, w), l = a.subParser("ellipsis")(l, _, w), l = a.subParser("hashHTMLSpans")(l, _, w), l = a.subParser("encodeAmpsAndAngles")(l, _, w), _.simpleLineBreaks ? /\n\n¨K/.test(l) || (l = l.replace(/\n+/g, `<br />
`)) : l = l.replace(/  +\n/g, `<br />
`), l = w.converter._dispatch("spanGamut.after", l, _, w), l;
      }), a.subParser("strikethrough", function(l, _, w) {
        function k(R) {
          return _.simplifiedAutoLink && (R = a.subParser("simplifiedAutoLinks")(R, _, w)), "<del>" + R + "</del>";
        }
        return _.strikethrough && (l = w.converter._dispatch("strikethrough.before", l, _, w), l = l.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(R, L) {
          return k(L);
        }), l = w.converter._dispatch("strikethrough.after", l, _, w)), l;
      }), a.subParser("stripLinkDefinitions", function(l, _, w) {
        var k = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, R = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
        l += "¨0";
        var L = function(j, D, q, G, V, K, M) {
          return D = D.toLowerCase(), l.toLowerCase().split(D).length - 1 < 2 ? j : (q.match(/^data:.+?\/.+?;base64,/) ? w.gUrls[D] = q.replace(/\s/g, "") : w.gUrls[D] = a.subParser("encodeAmpsAndAngles")(q, _, w), K ? K + M : (M && (w.gTitles[D] = M.replace(/"|'/g, "&quot;")), _.parseImgDimensions && G && V && (w.gDimensions[D] = {
            width: G,
            height: V
          }), ""));
        };
        return l = l.replace(R, L), l = l.replace(k, L), l = l.replace(/¨0/, ""), l;
      }), a.subParser("tables", function(l, _, w) {
        if (!_.tables)
          return l;
        var k = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, R = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
        function L(V) {
          return /^:[ \t]*--*$/.test(V) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(V) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(V) ? ' style="text-align:center;"' : "";
        }
        function j(V, K) {
          var M = "";
          return V = V.trim(), (_.tablesHeaderId || _.tableHeaderId) && (M = ' id="' + V.replace(/ /g, "_").toLowerCase() + '"'), V = a.subParser("spanGamut")(V, _, w), "<th" + M + K + ">" + V + `</th>
`;
        }
        function D(V, K) {
          var M = a.subParser("spanGamut")(V, _, w);
          return "<td" + K + ">" + M + `</td>
`;
        }
        function q(V, K) {
          for (var M = `<table>
<thead>
<tr>
`, B = V.length, J = 0; J < B; ++J)
            M += V[J];
          for (M += `</tr>
</thead>
<tbody>
`, J = 0; J < K.length; ++J) {
            M += `<tr>
`;
            for (var ae = 0; ae < B; ++ae)
              M += K[J][ae];
            M += `</tr>
`;
          }
          return M += `</tbody>
</table>
`, M;
        }
        function G(V) {
          var K, M = V.split(`
`);
          for (K = 0; K < M.length; ++K)
            /^ {0,3}\|/.test(M[K]) && (M[K] = M[K].replace(/^ {0,3}\|/, "")), /\|[ \t]*$/.test(M[K]) && (M[K] = M[K].replace(/\|[ \t]*$/, "")), M[K] = a.subParser("codeSpans")(M[K], _, w);
          var B = M[0].split("|").map(function(te) {
            return te.trim();
          }), J = M[1].split("|").map(function(te) {
            return te.trim();
          }), ae = [], I = [], X = [], ce = [];
          for (M.shift(), M.shift(), K = 0; K < M.length; ++K)
            M[K].trim() !== "" && ae.push(
              M[K].split("|").map(function(te) {
                return te.trim();
              })
            );
          if (B.length < J.length)
            return V;
          for (K = 0; K < J.length; ++K)
            X.push(L(J[K]));
          for (K = 0; K < B.length; ++K)
            a.helper.isUndefined(X[K]) && (X[K] = ""), I.push(j(B[K], X[K]));
          for (K = 0; K < ae.length; ++K) {
            for (var Y = [], U = 0; U < I.length; ++U)
              a.helper.isUndefined(ae[K][U]), Y.push(D(ae[K][U], X[U]));
            ce.push(Y);
          }
          return q(I, ce);
        }
        return l = w.converter._dispatch("tables.before", l, _, w), l = l.replace(/\\(\|)/g, a.helper.escapeCharactersCallback), l = l.replace(k, G), l = l.replace(R, G), l = w.converter._dispatch("tables.after", l, _, w), l;
      }), a.subParser("underline", function(l, _, w) {
        return _.underline && (l = w.converter._dispatch("underline.before", l, _, w), _.literalMidWordUnderscores ? (l = l.replace(/\b___(\S[\s\S]*?)___\b/g, function(k, R) {
          return "<u>" + R + "</u>";
        }), l = l.replace(/\b__(\S[\s\S]*?)__\b/g, function(k, R) {
          return "<u>" + R + "</u>";
        })) : (l = l.replace(/___(\S[\s\S]*?)___/g, function(k, R) {
          return /\S$/.test(R) ? "<u>" + R + "</u>" : k;
        }), l = l.replace(/__(\S[\s\S]*?)__/g, function(k, R) {
          return /\S$/.test(R) ? "<u>" + R + "</u>" : k;
        })), l = l.replace(/(_)/g, a.helper.escapeCharactersCallback), l = w.converter._dispatch("underline.after", l, _, w)), l;
      }), a.subParser("unescapeSpecialChars", function(l, _, w) {
        return l = w.converter._dispatch("unescapeSpecialChars.before", l, _, w), l = l.replace(/¨E(\d+)E/g, function(k, R) {
          var L = parseInt(R);
          return String.fromCharCode(L);
        }), l = w.converter._dispatch("unescapeSpecialChars.after", l, _, w), l;
      }), a.subParser("makeMarkdown.blockquote", function(l, _) {
        var w = "";
        if (l.hasChildNodes())
          for (var k = l.childNodes, R = k.length, L = 0; L < R; ++L) {
            var j = a.subParser("makeMarkdown.node")(k[L], _);
            j !== "" && (w += j);
          }
        return w = w.trim(), w = "> " + w.split(`
`).join(`
> `), w;
      }), a.subParser("makeMarkdown.codeBlock", function(l, _) {
        var w = l.getAttribute("language"), k = l.getAttribute("precodenum");
        return "```" + w + `
` + _.preList[k] + "\n```";
      }), a.subParser("makeMarkdown.codeSpan", function(l) {
        return "`" + l.innerHTML + "`";
      }), a.subParser("makeMarkdown.emphasis", function(l, _) {
        var w = "";
        if (l.hasChildNodes()) {
          w += "*";
          for (var k = l.childNodes, R = k.length, L = 0; L < R; ++L)
            w += a.subParser("makeMarkdown.node")(k[L], _);
          w += "*";
        }
        return w;
      }), a.subParser("makeMarkdown.header", function(l, _, w) {
        var k = new Array(w + 1).join("#"), R = "";
        if (l.hasChildNodes()) {
          R = k + " ";
          for (var L = l.childNodes, j = L.length, D = 0; D < j; ++D)
            R += a.subParser("makeMarkdown.node")(L[D], _);
        }
        return R;
      }), a.subParser("makeMarkdown.hr", function() {
        return "---";
      }), a.subParser("makeMarkdown.image", function(l) {
        var _ = "";
        return l.hasAttribute("src") && (_ += "![" + l.getAttribute("alt") + "](", _ += "<" + l.getAttribute("src") + ">", l.hasAttribute("width") && l.hasAttribute("height") && (_ += " =" + l.getAttribute("width") + "x" + l.getAttribute("height")), l.hasAttribute("title") && (_ += ' "' + l.getAttribute("title") + '"'), _ += ")"), _;
      }), a.subParser("makeMarkdown.links", function(l, _) {
        var w = "";
        if (l.hasChildNodes() && l.hasAttribute("href")) {
          var k = l.childNodes, R = k.length;
          w = "[";
          for (var L = 0; L < R; ++L)
            w += a.subParser("makeMarkdown.node")(k[L], _);
          w += "](", w += "<" + l.getAttribute("href") + ">", l.hasAttribute("title") && (w += ' "' + l.getAttribute("title") + '"'), w += ")";
        }
        return w;
      }), a.subParser("makeMarkdown.list", function(l, _, w) {
        var k = "";
        if (!l.hasChildNodes())
          return "";
        for (var R = l.childNodes, L = R.length, j = l.getAttribute("start") || 1, D = 0; D < L; ++D)
          if (!(typeof R[D].tagName > "u" || R[D].tagName.toLowerCase() !== "li")) {
            var q = "";
            w === "ol" ? q = j.toString() + ". " : q = "- ", k += q + a.subParser("makeMarkdown.listItem")(R[D], _), ++j;
          }
        return k += `
<!-- -->
`, k.trim();
      }), a.subParser("makeMarkdown.listItem", function(l, _) {
        for (var w = "", k = l.childNodes, R = k.length, L = 0; L < R; ++L)
          w += a.subParser("makeMarkdown.node")(k[L], _);
        return /\n$/.test(w) ? w = w.split(`
`).join(`
    `).replace(/^ {4}$/gm, "").replace(/\n\n+/g, `

`) : w += `
`, w;
      }), a.subParser("makeMarkdown.node", function(l, _, w) {
        w = w || !1;
        var k = "";
        if (l.nodeType === 3)
          return a.subParser("makeMarkdown.txt")(l, _);
        if (l.nodeType === 8)
          return "<!--" + l.data + `-->

`;
        if (l.nodeType !== 1)
          return "";
        var R = l.tagName.toLowerCase();
        switch (R) {
          //
          // BLOCKS
          //
          case "h1":
            w || (k = a.subParser("makeMarkdown.header")(l, _, 1) + `

`);
            break;
          case "h2":
            w || (k = a.subParser("makeMarkdown.header")(l, _, 2) + `

`);
            break;
          case "h3":
            w || (k = a.subParser("makeMarkdown.header")(l, _, 3) + `

`);
            break;
          case "h4":
            w || (k = a.subParser("makeMarkdown.header")(l, _, 4) + `

`);
            break;
          case "h5":
            w || (k = a.subParser("makeMarkdown.header")(l, _, 5) + `

`);
            break;
          case "h6":
            w || (k = a.subParser("makeMarkdown.header")(l, _, 6) + `

`);
            break;
          case "p":
            w || (k = a.subParser("makeMarkdown.paragraph")(l, _) + `

`);
            break;
          case "blockquote":
            w || (k = a.subParser("makeMarkdown.blockquote")(l, _) + `

`);
            break;
          case "hr":
            w || (k = a.subParser("makeMarkdown.hr")(l, _) + `

`);
            break;
          case "ol":
            w || (k = a.subParser("makeMarkdown.list")(l, _, "ol") + `

`);
            break;
          case "ul":
            w || (k = a.subParser("makeMarkdown.list")(l, _, "ul") + `

`);
            break;
          case "precode":
            w || (k = a.subParser("makeMarkdown.codeBlock")(l, _) + `

`);
            break;
          case "pre":
            w || (k = a.subParser("makeMarkdown.pre")(l, _) + `

`);
            break;
          case "table":
            w || (k = a.subParser("makeMarkdown.table")(l, _) + `

`);
            break;
          //
          // SPANS
          //
          case "code":
            k = a.subParser("makeMarkdown.codeSpan")(l, _);
            break;
          case "em":
          case "i":
            k = a.subParser("makeMarkdown.emphasis")(l, _);
            break;
          case "strong":
          case "b":
            k = a.subParser("makeMarkdown.strong")(l, _);
            break;
          case "del":
            k = a.subParser("makeMarkdown.strikethrough")(l, _);
            break;
          case "a":
            k = a.subParser("makeMarkdown.links")(l, _);
            break;
          case "img":
            k = a.subParser("makeMarkdown.image")(l, _);
            break;
          default:
            k = l.outerHTML + `

`;
        }
        return k;
      }), a.subParser("makeMarkdown.paragraph", function(l, _) {
        var w = "";
        if (l.hasChildNodes())
          for (var k = l.childNodes, R = k.length, L = 0; L < R; ++L)
            w += a.subParser("makeMarkdown.node")(k[L], _);
        return w = w.trim(), w;
      }), a.subParser("makeMarkdown.pre", function(l, _) {
        var w = l.getAttribute("prenum");
        return "<pre>" + _.preList[w] + "</pre>";
      }), a.subParser("makeMarkdown.strikethrough", function(l, _) {
        var w = "";
        if (l.hasChildNodes()) {
          w += "~~";
          for (var k = l.childNodes, R = k.length, L = 0; L < R; ++L)
            w += a.subParser("makeMarkdown.node")(k[L], _);
          w += "~~";
        }
        return w;
      }), a.subParser("makeMarkdown.strong", function(l, _) {
        var w = "";
        if (l.hasChildNodes()) {
          w += "**";
          for (var k = l.childNodes, R = k.length, L = 0; L < R; ++L)
            w += a.subParser("makeMarkdown.node")(k[L], _);
          w += "**";
        }
        return w;
      }), a.subParser("makeMarkdown.table", function(l, _) {
        var w = "", k = [[], []], R = l.querySelectorAll("thead>tr>th"), L = l.querySelectorAll("tbody>tr"), j, D;
        for (j = 0; j < R.length; ++j) {
          var q = a.subParser("makeMarkdown.tableCell")(R[j], _), G = "---";
          if (R[j].hasAttribute("style")) {
            var V = R[j].getAttribute("style").toLowerCase().replace(/\s/g, "");
            switch (V) {
              case "text-align:left;":
                G = ":---";
                break;
              case "text-align:right;":
                G = "---:";
                break;
              case "text-align:center;":
                G = ":---:";
                break;
            }
          }
          k[0][j] = q.trim(), k[1][j] = G;
        }
        for (j = 0; j < L.length; ++j) {
          var K = k.push([]) - 1, M = L[j].getElementsByTagName("td");
          for (D = 0; D < R.length; ++D) {
            var B = " ";
            typeof M[D] < "u" && (B = a.subParser("makeMarkdown.tableCell")(M[D], _)), k[K].push(B);
          }
        }
        var J = 3;
        for (j = 0; j < k.length; ++j)
          for (D = 0; D < k[j].length; ++D) {
            var ae = k[j][D].length;
            ae > J && (J = ae);
          }
        for (j = 0; j < k.length; ++j) {
          for (D = 0; D < k[j].length; ++D)
            j === 1 ? k[j][D].slice(-1) === ":" ? k[j][D] = a.helper.padEnd(k[j][D].slice(-1), J - 1, "-") + ":" : k[j][D] = a.helper.padEnd(k[j][D], J, "-") : k[j][D] = a.helper.padEnd(k[j][D], J);
          w += "| " + k[j].join(" | ") + ` |
`;
        }
        return w.trim();
      }), a.subParser("makeMarkdown.tableCell", function(l, _) {
        var w = "";
        if (!l.hasChildNodes())
          return "";
        for (var k = l.childNodes, R = k.length, L = 0; L < R; ++L)
          w += a.subParser("makeMarkdown.node")(k[L], _, !0);
        return w.trim();
      }), a.subParser("makeMarkdown.txt", function(l) {
        var _ = l.nodeValue;
        return _ = _.replace(/ +/g, " "), _ = _.replace(/¨NBSP;/g, " "), _ = a.helper.unescapeHTMLEntities(_), _ = _.replace(/([*_~|`])/g, "\\$1"), _ = _.replace(/^(\s*)>/g, "\\$1>"), _ = _.replace(/^#/gm, "\\#"), _ = _.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3"), _ = _.replace(/^( {0,3}\d+)\./gm, "$1\\."), _ = _.replace(/^( {0,3})([+-])/gm, "$1\\$2"), _ = _.replace(/]([\s]*)\(/g, "\\]$1\\("), _ = _.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:"), _;
      });
      var P = this;
      t.exports ? t.exports = a : P.showdown = a;
    }).call(pw);
  })(Sl)), Sl.exports;
}
var gw = mw();
const vw = /* @__PURE__ */ eh(gw);
var na = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.diff = function(r, s, a) {
      a === void 0 && (a = {});
      var u;
      typeof a == "function" ? (u = a, a = {}) : "callback" in a && (u = a.callback);
      var c = this.castInput(r, a), f = this.castInput(s, a), m = this.removeEmpty(this.tokenize(c, a)), p = this.removeEmpty(this.tokenize(f, a));
      return this.diffWithOptionsObj(m, p, a, u);
    }, t.prototype.diffWithOptionsObj = function(r, s, a, u) {
      var c = this, f, m = function(l) {
        if (l = c.postProcess(l, a), u) {
          setTimeout(function() {
            u(l);
          }, 0);
          return;
        } else
          return l;
      }, p = s.length, v = r.length, g = 1, E = p + v;
      a.maxEditLength != null && (E = Math.min(E, a.maxEditLength));
      var y = (f = a.timeout) !== null && f !== void 0 ? f : 1 / 0, S = Date.now() + y, h = [{ oldPos: -1, lastComponent: void 0 }], C = this.extractCommon(h[0], s, r, 0, a);
      if (h[0].oldPos + 1 >= v && C + 1 >= p)
        return m(this.buildValues(h[0].lastComponent, s, r));
      var x = -1 / 0, O = 1 / 0, T = function() {
        for (var l = Math.max(x, -g); l <= Math.min(O, g); l += 2) {
          var _ = void 0, w = h[l - 1], k = h[l + 1];
          w && (h[l - 1] = void 0);
          var R = !1;
          if (k) {
            var L = k.oldPos - l;
            R = k && 0 <= L && L < p;
          }
          var j = w && w.oldPos + 1 < v;
          if (!R && !j) {
            h[l] = void 0;
            continue;
          }
          if (!j || R && w.oldPos < k.oldPos ? _ = c.addToPath(k, !0, !1, 0, a) : _ = c.addToPath(w, !1, !0, 1, a), C = c.extractCommon(_, s, r, l, a), _.oldPos + 1 >= v && C + 1 >= p)
            return m(c.buildValues(_.lastComponent, s, r)) || !0;
          h[l] = _, _.oldPos + 1 >= v && (O = Math.min(O, l - 1)), C + 1 >= p && (x = Math.max(x, l + 1));
        }
        g++;
      };
      if (u)
        (function l() {
          setTimeout(function() {
            if (g > E || Date.now() > S)
              return u(void 0);
            T() || l();
          }, 0);
        })();
      else
        for (; g <= E && Date.now() <= S; ) {
          var P = T();
          if (P)
            return P;
        }
    }, t.prototype.addToPath = function(r, s, a, u, c) {
      var f = r.lastComponent;
      return f && !c.oneChangePerToken && f.added === s && f.removed === a ? {
        oldPos: r.oldPos + u,
        lastComponent: { count: f.count + 1, added: s, removed: a, previousComponent: f.previousComponent }
      } : {
        oldPos: r.oldPos + u,
        lastComponent: { count: 1, added: s, removed: a, previousComponent: f }
      };
    }, t.prototype.extractCommon = function(r, s, a, u, c) {
      for (var f = s.length, m = a.length, p = r.oldPos, v = p - u, g = 0; v + 1 < f && p + 1 < m && this.equals(a[p + 1], s[v + 1], c); )
        v++, p++, g++, c.oneChangePerToken && (r.lastComponent = { count: 1, previousComponent: r.lastComponent, added: !1, removed: !1 });
      return g && !c.oneChangePerToken && (r.lastComponent = { count: g, previousComponent: r.lastComponent, added: !1, removed: !1 }), r.oldPos = p, v;
    }, t.prototype.equals = function(r, s, a) {
      return a.comparator ? a.comparator(r, s) : r === s || !!a.ignoreCase && r.toLowerCase() === s.toLowerCase();
    }, t.prototype.removeEmpty = function(r) {
      for (var s = [], a = 0; a < r.length; a++)
        r[a] && s.push(r[a]);
      return s;
    }, t.prototype.castInput = function(r, s) {
      return r;
    }, t.prototype.tokenize = function(r, s) {
      return Array.from(r);
    }, t.prototype.join = function(r) {
      return r.join("");
    }, t.prototype.postProcess = function(r, s) {
      return r;
    }, Object.defineProperty(t.prototype, "useLongestToken", {
      get: function() {
        return !1;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.buildValues = function(r, s, a) {
      for (var u = [], c; r; )
        u.push(r), c = r.previousComponent, delete r.previousComponent, r = c;
      u.reverse();
      for (var f = u.length, m = 0, p = 0, v = 0; m < f; m++) {
        var g = u[m];
        if (g.removed)
          g.value = this.join(a.slice(v, v + g.count)), v += g.count;
        else {
          if (!g.added && this.useLongestToken) {
            var E = s.slice(p, p + g.count);
            E = E.map(function(y, S) {
              var h = a[v + S];
              return h.length > y.length ? h : y;
            }), g.value = this.join(E);
          } else
            g.value = this.join(s.slice(p, p + g.count));
          p += g.count, g.added || (v += g.count);
        }
      }
      return u;
    }, t;
  })()
), yw = /* @__PURE__ */ (function() {
  var t = function(r, s) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
      a.__proto__ = u;
    } || function(a, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (a[c] = u[c]);
    }, t(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    t(r, s);
    function a() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (a.prototype = s.prototype, new a());
  };
})(), _w = (
  /** @class */
  (function(t) {
    yw(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r;
  })(na)
);
new _w();
function Iy(t, r) {
  var s;
  for (s = 0; s < t.length && s < r.length; s++)
    if (t[s] != r[s])
      return t.slice(0, s);
  return t.slice(0, s);
}
function By(t, r) {
  var s;
  if (!t || !r || t[t.length - 1] != r[r.length - 1])
    return "";
  for (s = 0; s < t.length && s < r.length; s++)
    if (t[t.length - (s + 1)] != r[r.length - (s + 1)])
      return t.slice(-s);
  return t.slice(-s);
}
function Zf(t, r, s) {
  if (t.slice(0, r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't start with prefix ").concat(JSON.stringify(r), "; this is a bug"));
  return s + t.slice(r.length);
}
function Gf(t, r, s) {
  if (!r)
    return t + s;
  if (t.slice(-r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't end with suffix ").concat(JSON.stringify(r), "; this is a bug"));
  return t.slice(0, -r.length) + s;
}
function $s(t, r) {
  return Zf(t, r, "");
}
function ol(t, r) {
  return Gf(t, r, "");
}
function Uy(t, r) {
  return r.slice(0, bw(t, r));
}
function bw(t, r) {
  var s = 0;
  t.length > r.length && (s = t.length - r.length);
  var a = r.length;
  t.length < r.length && (a = t.length);
  var u = Array(a), c = 0;
  u[0] = 0;
  for (var f = 1; f < a; f++) {
    for (r[f] == r[c] ? u[f] = u[c] : u[f] = c; c > 0 && r[f] != r[c]; )
      c = u[c];
    r[f] == r[c] && c++;
  }
  c = 0;
  for (var m = s; m < t.length; m++) {
    for (; c > 0 && t[m] != r[c]; )
      c = u[c];
    t[m] == r[c] && c++;
  }
  return c;
}
function Ys(t) {
  var r;
  for (r = t.length - 1; r >= 0 && t[r].match(/\s/); r--)
    ;
  return t.substring(r + 1);
}
function Qr(t) {
  var r = t.match(/^\s*/);
  return r ? r[0] : "";
}
var s0 = /* @__PURE__ */ (function() {
  var t = function(r, s) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
      a.__proto__ = u;
    } || function(a, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (a[c] = u[c]);
    }, t(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    t(r, s);
    function a() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (a.prototype = s.prototype, new a());
  };
})(), Ml = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", Sw = new RegExp("[".concat(Ml, "]+|\\s+|[^").concat(Ml, "]"), "ug"), ww = (
  /** @class */
  (function(t) {
    s0(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.equals = function(s, a, u) {
      return u.ignoreCase && (s = s.toLowerCase(), a = a.toLowerCase()), s.trim() === a.trim();
    }, r.prototype.tokenize = function(s, a) {
      a === void 0 && (a = {});
      var u;
      if (a.intlSegmenter) {
        var c = a.intlSegmenter;
        if (c.resolvedOptions().granularity != "word")
          throw new Error('The segmenter passed must have a granularity of "word"');
        u = Array.from(c.segment(s), function(p) {
          return p.segment;
        });
      } else
        u = s.match(Sw) || [];
      var f = [], m = null;
      return u.forEach(function(p) {
        /\s/.test(p) ? m == null ? f.push(p) : f.push(f.pop() + p) : m != null && /\s/.test(m) ? f[f.length - 1] == m ? f.push(f.pop() + p) : f.push(m + p) : f.push(p), m = p;
      }), f;
    }, r.prototype.join = function(s) {
      return s.map(function(a, u) {
        return u == 0 ? a : a.replace(/^\s+/, "");
      }).join("");
    }, r.prototype.postProcess = function(s, a) {
      if (!s || a.oneChangePerToken)
        return s;
      var u = null, c = null, f = null;
      return s.forEach(function(m) {
        m.added ? c = m : m.removed ? f = m : ((c || f) && Hy(u, f, c, m), u = m, c = null, f = null);
      }), (c || f) && Hy(u, f, c, null), s;
    }, r;
  })(na)
), Ew = new ww();
function o0(t, r, s) {
  return Ew.diff(t, r, s);
}
function Hy(t, r, s, a) {
  if (r && s) {
    var u = Qr(r.value), c = Ys(r.value), f = Qr(s.value), m = Ys(s.value);
    if (t) {
      var p = Iy(u, f);
      t.value = Gf(t.value, f, p), r.value = $s(r.value, p), s.value = $s(s.value, p);
    }
    if (a) {
      var v = By(c, m);
      a.value = Zf(a.value, m, v), r.value = ol(r.value, v), s.value = ol(s.value, v);
    }
  } else if (s) {
    if (t) {
      var g = Qr(s.value);
      s.value = s.value.substring(g.length);
    }
    if (a) {
      var g = Qr(a.value);
      a.value = a.value.substring(g.length);
    }
  } else if (t && a) {
    var E = Qr(a.value), y = Qr(r.value), S = Ys(r.value), h = Iy(E, y);
    r.value = $s(r.value, h);
    var C = By($s(E, h), S);
    r.value = ol(r.value, C), a.value = Zf(a.value, E, C), t.value = Gf(t.value, E, E.slice(0, E.length - C.length));
  } else if (a) {
    var x = Qr(a.value), O = Ys(r.value), T = Uy(O, x);
    r.value = ol(r.value, T);
  } else if (t) {
    var P = Ys(t.value), l = Qr(r.value), T = Uy(P, l);
    r.value = $s(r.value, T);
  }
}
var Cw = (
  /** @class */
  (function(t) {
    s0(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      var a = new RegExp("(\\r?\\n)|[".concat(Ml, "]+|[^\\S\\n\\r]+|[^").concat(Ml, "]"), "ug");
      return s.match(a) || [];
    }, r;
  })(na)
);
new Cw();
var kw = /* @__PURE__ */ (function() {
  var t = function(r, s) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
      a.__proto__ = u;
    } || function(a, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (a[c] = u[c]);
    }, t(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    t(r, s);
    function a() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (a.prototype = s.prototype, new a());
  };
})(), Aw = (
  /** @class */
  (function(t) {
    kw(r, t);
    function r() {
      var s = t !== null && t.apply(this, arguments) || this;
      return s.tokenize = u0, s;
    }
    return r.prototype.equals = function(s, a, u) {
      return u.ignoreWhitespace ? ((!u.newlineIsToken || !s.includes(`
`)) && (s = s.trim()), (!u.newlineIsToken || !a.includes(`
`)) && (a = a.trim())) : u.ignoreNewlineAtEof && !u.newlineIsToken && (s.endsWith(`
`) && (s = s.slice(0, -1)), a.endsWith(`
`) && (a = a.slice(0, -1))), t.prototype.equals.call(this, s, a, u);
    }, r;
  })(na)
);
new Aw();
function u0(t, r) {
  r.stripTrailingCr && (t = t.replace(/\r\n/g, `
`));
  var s = [], a = t.split(/(\n|\r\n)/);
  a[a.length - 1] || a.pop();
  for (var u = 0; u < a.length; u++) {
    var c = a[u];
    u % 2 && !r.newlineIsToken ? s[s.length - 1] += c : s.push(c);
  }
  return s;
}
var xw = /* @__PURE__ */ (function() {
  var t = function(r, s) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
      a.__proto__ = u;
    } || function(a, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (a[c] = u[c]);
    }, t(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    t(r, s);
    function a() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (a.prototype = s.prototype, new a());
  };
})(), Tw = (
  /** @class */
  (function(t) {
    xw(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      return s.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(na)
);
new Tw();
var Nw = /* @__PURE__ */ (function() {
  var t = function(r, s) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
      a.__proto__ = u;
    } || function(a, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (a[c] = u[c]);
    }, t(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    t(r, s);
    function a() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (a.prototype = s.prototype, new a());
  };
})(), Ow = (
  /** @class */
  (function(t) {
    Nw(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      return s.split(/([{}:;,]|\s+)/);
    }, r;
  })(na)
);
new Ow();
var Mw = /* @__PURE__ */ (function() {
  var t = function(r, s) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
      a.__proto__ = u;
    } || function(a, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (a[c] = u[c]);
    }, t(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    t(r, s);
    function a() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (a.prototype = s.prototype, new a());
  };
})(), Rw = (
  /** @class */
  (function(t) {
    Mw(r, t);
    function r() {
      var s = t !== null && t.apply(this, arguments) || this;
      return s.tokenize = u0, s;
    }
    return Object.defineProperty(r.prototype, "useLongestToken", {
      get: function() {
        return !0;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.castInput = function(s, a) {
      var u = a.undefinedReplacement, c = a.stringifyReplacer, f = c === void 0 ? function(m, p) {
        return typeof p > "u" ? u : p;
      } : c;
      return typeof s == "string" ? s : JSON.stringify(Vf(s, null, null, f), null, "  ");
    }, r.prototype.equals = function(s, a, u) {
      return t.prototype.equals.call(this, s.replace(/,([\r\n])/g, "$1"), a.replace(/,([\r\n])/g, "$1"), u);
    }, r;
  })(na)
);
new Rw();
function Vf(t, r, s, a, u) {
  r = r || [], s = s || [], a && (t = a(u === void 0 ? "" : u, t));
  var c;
  for (c = 0; c < r.length; c += 1)
    if (r[c] === t)
      return s[c];
  var f;
  if (Object.prototype.toString.call(t) === "[object Array]") {
    for (r.push(t), f = new Array(t.length), s.push(f), c = 0; c < t.length; c += 1)
      f[c] = Vf(t[c], r, s, a, String(c));
    return r.pop(), s.pop(), f;
  }
  if (t && t.toJSON && (t = t.toJSON()), typeof t == "object" && t !== null) {
    r.push(t), f = {}, s.push(f);
    var m = [], p;
    for (p in t)
      Object.prototype.hasOwnProperty.call(t, p) && m.push(p);
    for (m.sort(), c = 0; c < m.length; c += 1)
      p = m[c], f[p] = Vf(t[p], r, s, a, p);
    r.pop(), s.pop();
  } else
    f = t;
  return f;
}
var jw = /* @__PURE__ */ (function() {
  var t = function(r, s) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
      a.__proto__ = u;
    } || function(a, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (a[c] = u[c]);
    }, t(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    t(r, s);
    function a() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (a.prototype = s.prototype, new a());
  };
})(), Dw = (
  /** @class */
  (function(t) {
    jw(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      return s.slice();
    }, r.prototype.join = function(s) {
      return s;
    }, r.prototype.removeEmpty = function(s) {
      return s;
    }, r;
  })(na)
);
new Dw();
const zw = ({ originalEntry: t, newEntry: r }) => {
  const s = ie.useMemo(() => {
    const a = o0(t.content, r.content);
    let u = "", c = "";
    return a.forEach((f) => {
      const p = `<span style="${f.added ? "color: green; background-color: #e6ffed;" : f.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${f.value}</span>`;
      f.added || (u += p), f.removed || (c += p);
    }), { originalHtml: u, newHtml: c };
  }, [t, r]);
  return /* @__PURE__ */ A.jsxs("div", { className: "compare-popup", style: { padding: "10px" }, children: [
    /* @__PURE__ */ A.jsx("h3", { children: "Compare Changes" }),
    /* @__PURE__ */ A.jsxs("div", { style: { display: "flex", gap: "1rem", marginTop: "1rem" }, children: [
      /* @__PURE__ */ A.jsxs("div", { style: { flex: "1" }, children: [
        /* @__PURE__ */ A.jsx("h4", { children: "Original Content" }),
        /* @__PURE__ */ A.jsx(
          "div",
          {
            style: {
              whiteSpace: "pre-wrap",
              fontFamily: "monospace",
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              maxHeight: "400px",
              overflowY: "auto"
            },
            dangerouslySetInnerHTML: { __html: s.originalHtml }
          }
        )
      ] }),
      /* @__PURE__ */ A.jsxs("div", { style: { flex: "1" }, children: [
        /* @__PURE__ */ A.jsx("h4", { children: "New Content (Suggestion)" }),
        /* @__PURE__ */ A.jsx(
          "div",
          {
            style: {
              whiteSpace: "pre-wrap",
              fontFamily: "monospace",
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              maxHeight: "400px",
              overflowY: "auto"
            },
            dangerouslySetInnerHTML: { __html: s.newHtml }
          }
        )
      ] })
    ] })
  ] });
}, Pw = SillyTavern.getContext(), Lw = ie.forwardRef(({ entry: t, initialRegexIds: r }, s) => {
  const [a, u] = ie.useState([]), [c, f] = ie.useState(t.comment), [m, p] = ie.useState(t.key.join(", ")), [v, g] = ie.useState(t.content), [E, y] = ie.useState([]);
  ie.useEffect(() => {
    const O = Pw.extensionSettings.regex ?? [];
    u(O);
    const T = Object.entries(r).map(([P, l]) => {
      const _ = O.find((w) => w.id === P);
      return _ ? { id: _.id, label: _.scriptName, enabled: !l?.disabled } : null;
    }).filter((P) => P !== null);
    y(T);
  }, [r]), ie.useImperativeHandle(s, () => ({
    getFormData: () => {
      const O = {
        ...t,
        comment: c.trim(),
        key: m.split(",").map((P) => P.trim()).filter(Boolean),
        content: v
      }, T = E.reduce(
        (P, l) => (P[l.id] = { disabled: !l.enabled }, P),
        {}
      );
      return { updatedEntry: O, updatedRegexIds: T };
    }
  }));
  const S = ie.useMemo(
    () => a.map((O) => ({ value: O.id, label: O.scriptName })),
    [a]
  ), h = ie.useMemo(() => E.map((O) => O.id), [E]), C = ie.useCallback(() => {
    let O = t.content;
    const T = E.filter((P) => P.enabled);
    for (const P of T) {
      const l = a.find((_) => _.id === P.id);
      l && (O = j3(l, O));
    }
    g(O);
  }, [E, a, t.content]), x = (O) => {
    const T = O.map((P) => {
      const l = E.find((w) => w.id === P);
      if (l) return l;
      const _ = a.find((w) => w.id === P);
      return _ ? { id: _.id, label: _.scriptName, enabled: !0 } : null;
    }).filter((P) => P !== null);
    y(T);
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "edit-popup", style: { padding: "10px", display: "flex", flexDirection: "column", gap: "15px" }, children: [
    /* @__PURE__ */ A.jsx("h3", { children: "Edit Suggestion" }),
    /* @__PURE__ */ A.jsxs("div", { children: [
      /* @__PURE__ */ A.jsx("label", { children: "Title" }),
      /* @__PURE__ */ A.jsx("input", { type: "text", className: "text_pole", value: c, onChange: (O) => f(O.target.value) })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { children: [
      /* @__PURE__ */ A.jsx("label", { children: "Keywords (comma-separated)" }),
      /* @__PURE__ */ A.jsx("input", { type: "text", className: "text_pole", value: m, onChange: (O) => p(O.target.value) })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { children: [
      /* @__PURE__ */ A.jsx("h4", { children: "Apply Regex Scripts" }),
      /* @__PURE__ */ A.jsx(
        a0,
        {
          items: S,
          value: h,
          onChange: x,
          multiple: !0,
          enableSearch: !0,
          placeholder: "Select regex scripts..."
        }
      ),
      E.length > 0 && /* @__PURE__ */ A.jsx(
        r0,
        {
          items: E,
          onItemsChange: y,
          showToggleButton: !0,
          showDeleteButton: !0,
          sortableJsOptions: { style: { marginTop: "10px" } }
        }
      )
    ] }),
    /* @__PURE__ */ A.jsx(Ee, { onClick: C, className: "menu_button", children: "Simulate Regex" }),
    /* @__PURE__ */ A.jsx(
      Zn,
      {
        value: v,
        onChange: (O) => g(O.target.value),
        rows: 8,
        placeholder: "Resulting content..."
      }
    )
  ] });
});
function de(t, r, s) {
  function a(m, p) {
    var v;
    Object.defineProperty(m, "_zod", {
      value: m._zod ?? {},
      enumerable: !1
    }), (v = m._zod).traits ?? (v.traits = /* @__PURE__ */ new Set()), m._zod.traits.add(t), r(m, p);
    for (const g in f.prototype)
      g in m || Object.defineProperty(m, g, { value: f.prototype[g].bind(m) });
    m._zod.constr = f, m._zod.def = p;
  }
  const u = s?.Parent ?? Object;
  class c extends u {
  }
  Object.defineProperty(c, "name", { value: t });
  function f(m) {
    var p;
    const v = s?.Parent ? new c() : this;
    a(v, m), (p = v._zod).deferred ?? (p.deferred = []);
    for (const g of v._zod.deferred)
      g();
    return v;
  }
  return Object.defineProperty(f, "init", { value: a }), Object.defineProperty(f, Symbol.hasInstance, {
    value: (m) => s?.Parent && m instanceof s.Parent ? !0 : m?._zod?.traits?.has(t)
  }), Object.defineProperty(f, "name", { value: t }), f;
}
class Li extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class l0 extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const c0 = {};
function Pa(t) {
  return c0;
}
function d0(t) {
  const r = Object.values(t).filter((a) => typeof a == "number");
  return Object.entries(t).filter(([a, u]) => r.indexOf(+a) === -1).map(([a, u]) => u);
}
function $f(t, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function hh(t) {
  return {
    get value() {
      {
        const r = t();
        return Object.defineProperty(this, "value", { value: r }), r;
      }
    }
  };
}
function ph(t) {
  return t == null;
}
function mh(t) {
  const r = t.startsWith("^") ? 1 : 0, s = t.endsWith("$") ? t.length - 1 : t.length;
  return t.slice(r, s);
}
const qy = Symbol("evaluating");
function rt(t, r, s) {
  let a;
  Object.defineProperty(t, r, {
    get() {
      if (a !== qy)
        return a === void 0 && (a = qy, a = s()), a;
    },
    set(u) {
      Object.defineProperty(t, r, {
        value: u
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function Ia(t, r, s) {
  Object.defineProperty(t, r, {
    value: s,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Ba(...t) {
  const r = {};
  for (const s of t) {
    const a = Object.getOwnPropertyDescriptors(s);
    Object.assign(r, a);
  }
  return Object.defineProperties({}, r);
}
function Zy(t) {
  return JSON.stringify(t);
}
const f0 = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
};
function Rl(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
const Iw = hh(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const t = Function;
    return new t(""), !0;
  } catch {
    return !1;
  }
});
function uo(t) {
  if (Rl(t) === !1)
    return !1;
  const r = t.constructor;
  if (r === void 0)
    return !0;
  const s = r.prototype;
  return !(Rl(s) === !1 || Object.prototype.hasOwnProperty.call(s, "isPrototypeOf") === !1);
}
function h0(t) {
  return uo(t) ? { ...t } : Array.isArray(t) ? [...t] : t;
}
const Bw = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Ll(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ra(t, r, s) {
  const a = new t._zod.constr(r ?? t._zod.def);
  return (!r || s?.parent) && (a._zod.parent = t), a;
}
function Oe(t) {
  const r = t;
  if (!r)
    return {};
  if (typeof r == "string")
    return { error: () => r };
  if (r?.message !== void 0) {
    if (r?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    r.error = r.message;
  }
  return delete r.message, typeof r.error == "string" ? { ...r, error: () => r.error } : r;
}
function Uw(t) {
  return Object.keys(t).filter((r) => t[r]._zod.optin === "optional" && t[r]._zod.optout === "optional");
}
function Hw(t, r) {
  const s = t._zod.def, a = Ba(t._zod.def, {
    get shape() {
      const u = {};
      for (const c in r) {
        if (!(c in s.shape))
          throw new Error(`Unrecognized key: "${c}"`);
        r[c] && (u[c] = s.shape[c]);
      }
      return Ia(this, "shape", u), u;
    },
    checks: []
  });
  return ra(t, a);
}
function qw(t, r) {
  const s = t._zod.def, a = Ba(t._zod.def, {
    get shape() {
      const u = { ...t._zod.def.shape };
      for (const c in r) {
        if (!(c in s.shape))
          throw new Error(`Unrecognized key: "${c}"`);
        r[c] && delete u[c];
      }
      return Ia(this, "shape", u), u;
    },
    checks: []
  });
  return ra(t, a);
}
function Zw(t, r) {
  if (!uo(r))
    throw new Error("Invalid input to extend: expected a plain object");
  const s = t._zod.def.checks;
  if (s && s.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const u = Ba(t._zod.def, {
    get shape() {
      const c = { ...t._zod.def.shape, ...r };
      return Ia(this, "shape", c), c;
    },
    checks: []
  });
  return ra(t, u);
}
function Gw(t, r) {
  if (!uo(r))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const s = {
    ...t._zod.def,
    get shape() {
      const a = { ...t._zod.def.shape, ...r };
      return Ia(this, "shape", a), a;
    },
    checks: t._zod.def.checks
  };
  return ra(t, s);
}
function Vw(t, r) {
  const s = Ba(t._zod.def, {
    get shape() {
      const a = { ...t._zod.def.shape, ...r._zod.def.shape };
      return Ia(this, "shape", a), a;
    },
    get catchall() {
      return r._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return ra(t, s);
}
function $w(t, r, s) {
  const a = Ba(r._zod.def, {
    get shape() {
      const u = r._zod.def.shape, c = { ...u };
      if (s)
        for (const f in s) {
          if (!(f in u))
            throw new Error(`Unrecognized key: "${f}"`);
          s[f] && (c[f] = t ? new t({
            type: "optional",
            innerType: u[f]
          }) : u[f]);
        }
      else
        for (const f in u)
          c[f] = t ? new t({
            type: "optional",
            innerType: u[f]
          }) : u[f];
      return Ia(this, "shape", c), c;
    },
    checks: []
  });
  return ra(r, a);
}
function Yw(t, r, s) {
  const a = Ba(r._zod.def, {
    get shape() {
      const u = r._zod.def.shape, c = { ...u };
      if (s)
        for (const f in s) {
          if (!(f in c))
            throw new Error(`Unrecognized key: "${f}"`);
          s[f] && (c[f] = new t({
            type: "nonoptional",
            innerType: u[f]
          }));
        }
      else
        for (const f in u)
          c[f] = new t({
            type: "nonoptional",
            innerType: u[f]
          });
      return Ia(this, "shape", c), c;
    },
    checks: []
  });
  return ra(r, a);
}
function zi(t, r = 0) {
  if (t.aborted === !0)
    return !0;
  for (let s = r; s < t.issues.length; s++)
    if (t.issues[s]?.continue !== !0)
      return !0;
  return !1;
}
function p0(t, r) {
  return r.map((s) => {
    var a;
    return (a = s).path ?? (a.path = []), s.path.unshift(t), s;
  });
}
function ul(t) {
  return typeof t == "string" ? t : t?.message;
}
function La(t, r, s) {
  const a = { ...t, path: t.path ?? [] };
  if (!t.message) {
    const u = ul(t.inst?._zod.def?.error?.(t)) ?? ul(r?.error?.(t)) ?? ul(s.customError?.(t)) ?? ul(s.localeError?.(t)) ?? "Invalid input";
    a.message = u;
  }
  return delete a.inst, delete a.continue, r?.reportInput || delete a.input, a;
}
function gh(t) {
  return Array.isArray(t) ? "array" : typeof t == "string" ? "string" : "unknown";
}
function lo(...t) {
  const [r, s, a] = t;
  return typeof r == "string" ? {
    message: r,
    code: "custom",
    input: s,
    inst: a
  } : { ...r };
}
const m0 = (t, r) => {
  t.name = "$ZodError", Object.defineProperty(t, "_zod", {
    value: t._zod,
    enumerable: !1
  }), Object.defineProperty(t, "issues", {
    value: r,
    enumerable: !1
  }), t.message = JSON.stringify(r, $f, 2), Object.defineProperty(t, "toString", {
    value: () => t.message,
    enumerable: !1
  });
}, g0 = de("$ZodError", m0), v0 = de("$ZodError", m0, { Parent: Error });
function Xw(t, r = (s) => s.message) {
  const s = {}, a = [];
  for (const u of t.issues)
    u.path.length > 0 ? (s[u.path[0]] = s[u.path[0]] || [], s[u.path[0]].push(r(u))) : a.push(r(u));
  return { formErrors: a, fieldErrors: s };
}
function Fw(t, r = (s) => s.message) {
  const s = { _errors: [] }, a = (u) => {
    for (const c of u.issues)
      if (c.code === "invalid_union" && c.errors.length)
        c.errors.map((f) => a({ issues: f }));
      else if (c.code === "invalid_key")
        a({ issues: c.issues });
      else if (c.code === "invalid_element")
        a({ issues: c.issues });
      else if (c.path.length === 0)
        s._errors.push(r(c));
      else {
        let f = s, m = 0;
        for (; m < c.path.length; ) {
          const p = c.path[m];
          m === c.path.length - 1 ? (f[p] = f[p] || { _errors: [] }, f[p]._errors.push(r(c))) : f[p] = f[p] || { _errors: [] }, f = f[p], m++;
        }
      }
  };
  return a(t), s;
}
const vh = (t) => (r, s, a, u) => {
  const c = a ? Object.assign(a, { async: !1 }) : { async: !1 }, f = r._zod.run({ value: s, issues: [] }, c);
  if (f instanceof Promise)
    throw new Li();
  if (f.issues.length) {
    const m = new (u?.Err ?? t)(f.issues.map((p) => La(p, c, Pa())));
    throw f0(m, u?.callee), m;
  }
  return f.value;
}, yh = (t) => async (r, s, a, u) => {
  const c = a ? Object.assign(a, { async: !0 }) : { async: !0 };
  let f = r._zod.run({ value: s, issues: [] }, c);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const m = new (u?.Err ?? t)(f.issues.map((p) => La(p, c, Pa())));
    throw f0(m, u?.callee), m;
  }
  return f.value;
}, Il = (t) => (r, s, a) => {
  const u = a ? { ...a, async: !1 } : { async: !1 }, c = r._zod.run({ value: s, issues: [] }, u);
  if (c instanceof Promise)
    throw new Li();
  return c.issues.length ? {
    success: !1,
    error: new (t ?? g0)(c.issues.map((f) => La(f, u, Pa())))
  } : { success: !0, data: c.value };
}, Qw = /* @__PURE__ */ Il(v0), Bl = (t) => async (r, s, a) => {
  const u = a ? Object.assign(a, { async: !0 }) : { async: !0 };
  let c = r._zod.run({ value: s, issues: [] }, u);
  return c instanceof Promise && (c = await c), c.issues.length ? {
    success: !1,
    error: new t(c.issues.map((f) => La(f, u, Pa())))
  } : { success: !0, data: c.value };
}, Kw = /* @__PURE__ */ Bl(v0), Jw = (t) => (r, s, a) => {
  const u = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return vh(t)(r, s, u);
}, Ww = (t) => (r, s, a) => vh(t)(r, s, a), eE = (t) => async (r, s, a) => {
  const u = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return yh(t)(r, s, u);
}, tE = (t) => async (r, s, a) => yh(t)(r, s, a), nE = (t) => (r, s, a) => {
  const u = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return Il(t)(r, s, u);
}, rE = (t) => (r, s, a) => Il(t)(r, s, a), aE = (t) => async (r, s, a) => {
  const u = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return Bl(t)(r, s, u);
}, iE = (t) => async (r, s, a) => Bl(t)(r, s, a), sE = /^[cC][^\s-]{8,}$/, oE = /^[0-9a-z]+$/, uE = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, lE = /^[0-9a-vA-V]{20}$/, cE = /^[A-Za-z0-9]{27}$/, dE = /^[a-zA-Z0-9_-]{21}$/, fE = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, hE = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Gy = (t) => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, pE = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, mE = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function gE() {
  return new RegExp(mE, "u");
}
const vE = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, yE = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, _E = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, bE = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, SE = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, y0 = /^[A-Za-z0-9_-]*$/, wE = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, EE = /^\+(?:[0-9]){6,14}[0-9]$/, _0 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", CE = /* @__PURE__ */ new RegExp(`^${_0}$`);
function b0(t) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof t.precision == "number" ? t.precision === -1 ? `${r}` : t.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${t.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function kE(t) {
  return new RegExp(`^${b0(t)}$`);
}
function AE(t) {
  const r = b0({ precision: t.precision }), s = ["Z"];
  t.local && s.push(""), t.offset && s.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const a = `${r}(?:${s.join("|")})`;
  return new RegExp(`^${_0}T(?:${a})$`);
}
const xE = (t) => {
  const r = t ? `[\\s\\S]{${t?.minimum ?? 0},${t?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, TE = /^[^A-Z]*$/, NE = /^[^a-z]*$/, rr = /* @__PURE__ */ de("$ZodCheck", (t, r) => {
  var s;
  t._zod ?? (t._zod = {}), t._zod.def = r, (s = t._zod).onattach ?? (s.onattach = []);
}), OE = /* @__PURE__ */ de("$ZodCheckMaxLength", (t, r) => {
  var s;
  rr.init(t, r), (s = t._zod.def).when ?? (s.when = (a) => {
    const u = a.value;
    return !ph(u) && u.length !== void 0;
  }), t._zod.onattach.push((a) => {
    const u = a._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < u && (a._zod.bag.maximum = r.maximum);
  }), t._zod.check = (a) => {
    const u = a.value;
    if (u.length <= r.maximum)
      return;
    const f = gh(u);
    a.issues.push({
      origin: f,
      code: "too_big",
      maximum: r.maximum,
      inclusive: !0,
      input: u,
      inst: t,
      continue: !r.abort
    });
  };
}), ME = /* @__PURE__ */ de("$ZodCheckMinLength", (t, r) => {
  var s;
  rr.init(t, r), (s = t._zod.def).when ?? (s.when = (a) => {
    const u = a.value;
    return !ph(u) && u.length !== void 0;
  }), t._zod.onattach.push((a) => {
    const u = a._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > u && (a._zod.bag.minimum = r.minimum);
  }), t._zod.check = (a) => {
    const u = a.value;
    if (u.length >= r.minimum)
      return;
    const f = gh(u);
    a.issues.push({
      origin: f,
      code: "too_small",
      minimum: r.minimum,
      inclusive: !0,
      input: u,
      inst: t,
      continue: !r.abort
    });
  };
}), RE = /* @__PURE__ */ de("$ZodCheckLengthEquals", (t, r) => {
  var s;
  rr.init(t, r), (s = t._zod.def).when ?? (s.when = (a) => {
    const u = a.value;
    return !ph(u) && u.length !== void 0;
  }), t._zod.onattach.push((a) => {
    const u = a._zod.bag;
    u.minimum = r.length, u.maximum = r.length, u.length = r.length;
  }), t._zod.check = (a) => {
    const u = a.value, c = u.length;
    if (c === r.length)
      return;
    const f = gh(u), m = c > r.length;
    a.issues.push({
      origin: f,
      ...m ? { code: "too_big", maximum: r.length } : { code: "too_small", minimum: r.length },
      inclusive: !0,
      exact: !0,
      input: a.value,
      inst: t,
      continue: !r.abort
    });
  };
}), Ul = /* @__PURE__ */ de("$ZodCheckStringFormat", (t, r) => {
  var s, a;
  rr.init(t, r), t._zod.onattach.push((u) => {
    const c = u._zod.bag;
    c.format = r.format, r.pattern && (c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(r.pattern));
  }), r.pattern ? (s = t._zod).check ?? (s.check = (u) => {
    r.pattern.lastIndex = 0, !r.pattern.test(u.value) && u.issues.push({
      origin: "string",
      code: "invalid_format",
      format: r.format,
      input: u.value,
      ...r.pattern ? { pattern: r.pattern.toString() } : {},
      inst: t,
      continue: !r.abort
    });
  }) : (a = t._zod).check ?? (a.check = () => {
  });
}), jE = /* @__PURE__ */ de("$ZodCheckRegex", (t, r) => {
  Ul.init(t, r), t._zod.check = (s) => {
    r.pattern.lastIndex = 0, !r.pattern.test(s.value) && s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: s.value,
      pattern: r.pattern.toString(),
      inst: t,
      continue: !r.abort
    });
  };
}), DE = /* @__PURE__ */ de("$ZodCheckLowerCase", (t, r) => {
  r.pattern ?? (r.pattern = TE), Ul.init(t, r);
}), zE = /* @__PURE__ */ de("$ZodCheckUpperCase", (t, r) => {
  r.pattern ?? (r.pattern = NE), Ul.init(t, r);
}), PE = /* @__PURE__ */ de("$ZodCheckIncludes", (t, r) => {
  rr.init(t, r);
  const s = Ll(r.includes), a = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${s}` : s);
  r.pattern = a, t._zod.onattach.push((u) => {
    const c = u._zod.bag;
    c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(a);
  }), t._zod.check = (u) => {
    u.value.includes(r.includes, r.position) || u.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: r.includes,
      input: u.value,
      inst: t,
      continue: !r.abort
    });
  };
}), LE = /* @__PURE__ */ de("$ZodCheckStartsWith", (t, r) => {
  rr.init(t, r);
  const s = new RegExp(`^${Ll(r.prefix)}.*`);
  r.pattern ?? (r.pattern = s), t._zod.onattach.push((a) => {
    const u = a._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(s);
  }), t._zod.check = (a) => {
    a.value.startsWith(r.prefix) || a.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: r.prefix,
      input: a.value,
      inst: t,
      continue: !r.abort
    });
  };
}), IE = /* @__PURE__ */ de("$ZodCheckEndsWith", (t, r) => {
  rr.init(t, r);
  const s = new RegExp(`.*${Ll(r.suffix)}$`);
  r.pattern ?? (r.pattern = s), t._zod.onattach.push((a) => {
    const u = a._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(s);
  }), t._zod.check = (a) => {
    a.value.endsWith(r.suffix) || a.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: r.suffix,
      input: a.value,
      inst: t,
      continue: !r.abort
    });
  };
}), BE = /* @__PURE__ */ de("$ZodCheckOverwrite", (t, r) => {
  rr.init(t, r), t._zod.check = (s) => {
    s.value = r.tx(s.value);
  };
});
class UE {
  constructor(r = []) {
    this.content = [], this.indent = 0, this && (this.args = r);
  }
  indented(r) {
    this.indent += 1, r(this), this.indent -= 1;
  }
  write(r) {
    if (typeof r == "function") {
      r(this, { execution: "sync" }), r(this, { execution: "async" });
      return;
    }
    const a = r.split(`
`).filter((f) => f), u = Math.min(...a.map((f) => f.length - f.trimStart().length)), c = a.map((f) => f.slice(u)).map((f) => " ".repeat(this.indent * 2) + f);
    for (const f of c)
      this.content.push(f);
  }
  compile() {
    const r = Function, s = this?.args, u = [...(this?.content ?? [""]).map((c) => `  ${c}`)];
    return new r(...s, u.join(`
`));
  }
}
const HE = {
  major: 4,
  minor: 1,
  patch: 12
}, At = /* @__PURE__ */ de("$ZodType", (t, r) => {
  var s;
  t ?? (t = {}), t._zod.def = r, t._zod.bag = t._zod.bag || {}, t._zod.version = HE;
  const a = [...t._zod.def.checks ?? []];
  t._zod.traits.has("$ZodCheck") && a.unshift(t);
  for (const u of a)
    for (const c of u._zod.onattach)
      c(t);
  if (a.length === 0)
    (s = t._zod).deferred ?? (s.deferred = []), t._zod.deferred?.push(() => {
      t._zod.run = t._zod.parse;
    });
  else {
    const u = (f, m, p) => {
      let v = zi(f), g;
      for (const E of m) {
        if (E._zod.def.when) {
          if (!E._zod.def.when(f))
            continue;
        } else if (v)
          continue;
        const y = f.issues.length, S = E._zod.check(f);
        if (S instanceof Promise && p?.async === !1)
          throw new Li();
        if (g || S instanceof Promise)
          g = (g ?? Promise.resolve()).then(async () => {
            await S, f.issues.length !== y && (v || (v = zi(f, y)));
          });
        else {
          if (f.issues.length === y)
            continue;
          v || (v = zi(f, y));
        }
      }
      return g ? g.then(() => f) : f;
    }, c = (f, m, p) => {
      if (zi(f))
        return f.aborted = !0, f;
      const v = u(m, a, p);
      if (v instanceof Promise) {
        if (p.async === !1)
          throw new Li();
        return v.then((g) => t._zod.parse(g, p));
      }
      return t._zod.parse(v, p);
    };
    t._zod.run = (f, m) => {
      if (m.skipChecks)
        return t._zod.parse(f, m);
      if (m.direction === "backward") {
        const v = t._zod.parse({ value: f.value, issues: [] }, { ...m, skipChecks: !0 });
        return v instanceof Promise ? v.then((g) => c(g, f, m)) : c(v, f, m);
      }
      const p = t._zod.parse(f, m);
      if (p instanceof Promise) {
        if (m.async === !1)
          throw new Li();
        return p.then((v) => u(v, a, m));
      }
      return u(p, a, m);
    };
  }
  t["~standard"] = {
    validate: (u) => {
      try {
        const c = Qw(t, u);
        return c.success ? { value: c.data } : { issues: c.error?.issues };
      } catch {
        return Kw(t, u).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), _h = /* @__PURE__ */ de("$ZodString", (t, r) => {
  At.init(t, r), t._zod.pattern = [...t?._zod.bag?.patterns ?? []].pop() ?? xE(t._zod.bag), t._zod.parse = (s, a) => {
    if (r.coerce)
      try {
        s.value = String(s.value);
      } catch {
      }
    return typeof s.value == "string" || s.issues.push({
      expected: "string",
      code: "invalid_type",
      input: s.value,
      inst: t
    }), s;
  };
}), ot = /* @__PURE__ */ de("$ZodStringFormat", (t, r) => {
  Ul.init(t, r), _h.init(t, r);
}), qE = /* @__PURE__ */ de("$ZodGUID", (t, r) => {
  r.pattern ?? (r.pattern = hE), ot.init(t, r);
}), ZE = /* @__PURE__ */ de("$ZodUUID", (t, r) => {
  if (r.version) {
    const a = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[r.version];
    if (a === void 0)
      throw new Error(`Invalid UUID version: "${r.version}"`);
    r.pattern ?? (r.pattern = Gy(a));
  } else
    r.pattern ?? (r.pattern = Gy());
  ot.init(t, r);
}), GE = /* @__PURE__ */ de("$ZodEmail", (t, r) => {
  r.pattern ?? (r.pattern = pE), ot.init(t, r);
}), VE = /* @__PURE__ */ de("$ZodURL", (t, r) => {
  ot.init(t, r), t._zod.check = (s) => {
    try {
      const a = s.value.trim(), u = new URL(a);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(u.hostname) || s.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: wE.source,
        input: s.value,
        inst: t,
        continue: !r.abort
      })), r.protocol && (r.protocol.lastIndex = 0, r.protocol.test(u.protocol.endsWith(":") ? u.protocol.slice(0, -1) : u.protocol) || s.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: r.protocol.source,
        input: s.value,
        inst: t,
        continue: !r.abort
      })), r.normalize ? s.value = u.href : s.value = a;
      return;
    } catch {
      s.issues.push({
        code: "invalid_format",
        format: "url",
        input: s.value,
        inst: t,
        continue: !r.abort
      });
    }
  };
}), $E = /* @__PURE__ */ de("$ZodEmoji", (t, r) => {
  r.pattern ?? (r.pattern = gE()), ot.init(t, r);
}), YE = /* @__PURE__ */ de("$ZodNanoID", (t, r) => {
  r.pattern ?? (r.pattern = dE), ot.init(t, r);
}), XE = /* @__PURE__ */ de("$ZodCUID", (t, r) => {
  r.pattern ?? (r.pattern = sE), ot.init(t, r);
}), FE = /* @__PURE__ */ de("$ZodCUID2", (t, r) => {
  r.pattern ?? (r.pattern = oE), ot.init(t, r);
}), QE = /* @__PURE__ */ de("$ZodULID", (t, r) => {
  r.pattern ?? (r.pattern = uE), ot.init(t, r);
}), KE = /* @__PURE__ */ de("$ZodXID", (t, r) => {
  r.pattern ?? (r.pattern = lE), ot.init(t, r);
}), JE = /* @__PURE__ */ de("$ZodKSUID", (t, r) => {
  r.pattern ?? (r.pattern = cE), ot.init(t, r);
}), WE = /* @__PURE__ */ de("$ZodISODateTime", (t, r) => {
  r.pattern ?? (r.pattern = AE(r)), ot.init(t, r);
}), eC = /* @__PURE__ */ de("$ZodISODate", (t, r) => {
  r.pattern ?? (r.pattern = CE), ot.init(t, r);
}), tC = /* @__PURE__ */ de("$ZodISOTime", (t, r) => {
  r.pattern ?? (r.pattern = kE(r)), ot.init(t, r);
}), nC = /* @__PURE__ */ de("$ZodISODuration", (t, r) => {
  r.pattern ?? (r.pattern = fE), ot.init(t, r);
}), rC = /* @__PURE__ */ de("$ZodIPv4", (t, r) => {
  r.pattern ?? (r.pattern = vE), ot.init(t, r), t._zod.onattach.push((s) => {
    const a = s._zod.bag;
    a.format = "ipv4";
  });
}), aC = /* @__PURE__ */ de("$ZodIPv6", (t, r) => {
  r.pattern ?? (r.pattern = yE), ot.init(t, r), t._zod.onattach.push((s) => {
    const a = s._zod.bag;
    a.format = "ipv6";
  }), t._zod.check = (s) => {
    try {
      new URL(`http://[${s.value}]`);
    } catch {
      s.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: s.value,
        inst: t,
        continue: !r.abort
      });
    }
  };
}), iC = /* @__PURE__ */ de("$ZodCIDRv4", (t, r) => {
  r.pattern ?? (r.pattern = _E), ot.init(t, r);
}), sC = /* @__PURE__ */ de("$ZodCIDRv6", (t, r) => {
  r.pattern ?? (r.pattern = bE), ot.init(t, r), t._zod.check = (s) => {
    const a = s.value.split("/");
    try {
      if (a.length !== 2)
        throw new Error();
      const [u, c] = a;
      if (!c)
        throw new Error();
      const f = Number(c);
      if (`${f}` !== c)
        throw new Error();
      if (f < 0 || f > 128)
        throw new Error();
      new URL(`http://[${u}]`);
    } catch {
      s.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: s.value,
        inst: t,
        continue: !r.abort
      });
    }
  };
});
function S0(t) {
  if (t === "")
    return !0;
  if (t.length % 4 !== 0)
    return !1;
  try {
    return atob(t), !0;
  } catch {
    return !1;
  }
}
const oC = /* @__PURE__ */ de("$ZodBase64", (t, r) => {
  r.pattern ?? (r.pattern = SE), ot.init(t, r), t._zod.onattach.push((s) => {
    s._zod.bag.contentEncoding = "base64";
  }), t._zod.check = (s) => {
    S0(s.value) || s.issues.push({
      code: "invalid_format",
      format: "base64",
      input: s.value,
      inst: t,
      continue: !r.abort
    });
  };
});
function uC(t) {
  if (!y0.test(t))
    return !1;
  const r = t.replace(/[-_]/g, (a) => a === "-" ? "+" : "/"), s = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return S0(s);
}
const lC = /* @__PURE__ */ de("$ZodBase64URL", (t, r) => {
  r.pattern ?? (r.pattern = y0), ot.init(t, r), t._zod.onattach.push((s) => {
    s._zod.bag.contentEncoding = "base64url";
  }), t._zod.check = (s) => {
    uC(s.value) || s.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: s.value,
      inst: t,
      continue: !r.abort
    });
  };
}), cC = /* @__PURE__ */ de("$ZodE164", (t, r) => {
  r.pattern ?? (r.pattern = EE), ot.init(t, r);
});
function dC(t, r = null) {
  try {
    const s = t.split(".");
    if (s.length !== 3)
      return !1;
    const [a] = s;
    if (!a)
      return !1;
    const u = JSON.parse(atob(a));
    return !("typ" in u && u?.typ !== "JWT" || !u.alg || r && (!("alg" in u) || u.alg !== r));
  } catch {
    return !1;
  }
}
const fC = /* @__PURE__ */ de("$ZodJWT", (t, r) => {
  ot.init(t, r), t._zod.check = (s) => {
    dC(s.value, r.alg) || s.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: s.value,
      inst: t,
      continue: !r.abort
    });
  };
}), hC = /* @__PURE__ */ de("$ZodUnknown", (t, r) => {
  At.init(t, r), t._zod.parse = (s) => s;
}), pC = /* @__PURE__ */ de("$ZodNever", (t, r) => {
  At.init(t, r), t._zod.parse = (s, a) => (s.issues.push({
    expected: "never",
    code: "invalid_type",
    input: s.value,
    inst: t
  }), s);
});
function Vy(t, r, s) {
  t.issues.length && r.issues.push(...p0(s, t.issues)), r.value[s] = t.value;
}
const mC = /* @__PURE__ */ de("$ZodArray", (t, r) => {
  At.init(t, r), t._zod.parse = (s, a) => {
    const u = s.value;
    if (!Array.isArray(u))
      return s.issues.push({
        expected: "array",
        code: "invalid_type",
        input: u,
        inst: t
      }), s;
    s.value = Array(u.length);
    const c = [];
    for (let f = 0; f < u.length; f++) {
      const m = u[f], p = r.element._zod.run({
        value: m,
        issues: []
      }, a);
      p instanceof Promise ? c.push(p.then((v) => Vy(v, s, f))) : Vy(p, s, f);
    }
    return c.length ? Promise.all(c).then(() => s) : s;
  };
});
function jl(t, r, s, a) {
  t.issues.length && r.issues.push(...p0(s, t.issues)), t.value === void 0 ? s in a && (r.value[s] = void 0) : r.value[s] = t.value;
}
function w0(t) {
  const r = Object.keys(t.shape);
  for (const a of r)
    if (!t.shape?.[a]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${a}": expected a Zod schema`);
  const s = Uw(t.shape);
  return {
    ...t,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(s)
  };
}
function E0(t, r, s, a, u, c) {
  const f = [], m = u.keySet, p = u.catchall._zod, v = p.def.type;
  for (const g of Object.keys(r)) {
    if (m.has(g))
      continue;
    if (v === "never") {
      f.push(g);
      continue;
    }
    const E = p.run({ value: r[g], issues: [] }, a);
    E instanceof Promise ? t.push(E.then((y) => jl(y, s, g, r))) : jl(E, s, g, r);
  }
  return f.length && s.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: r,
    inst: c
  }), t.length ? Promise.all(t).then(() => s) : s;
}
const gC = /* @__PURE__ */ de("$ZodObject", (t, r) => {
  if (At.init(t, r), !Object.getOwnPropertyDescriptor(r, "shape")?.get) {
    const m = r.shape;
    Object.defineProperty(r, "shape", {
      get: () => {
        const p = { ...m };
        return Object.defineProperty(r, "shape", {
          value: p
        }), p;
      }
    });
  }
  const a = hh(() => w0(r));
  rt(t._zod, "propValues", () => {
    const m = r.shape, p = {};
    for (const v in m) {
      const g = m[v]._zod;
      if (g.values) {
        p[v] ?? (p[v] = /* @__PURE__ */ new Set());
        for (const E of g.values)
          p[v].add(E);
      }
    }
    return p;
  });
  const u = Rl, c = r.catchall;
  let f;
  t._zod.parse = (m, p) => {
    f ?? (f = a.value);
    const v = m.value;
    if (!u(v))
      return m.issues.push({
        expected: "object",
        code: "invalid_type",
        input: v,
        inst: t
      }), m;
    m.value = {};
    const g = [], E = f.shape;
    for (const y of f.keys) {
      const h = E[y]._zod.run({ value: v[y], issues: [] }, p);
      h instanceof Promise ? g.push(h.then((C) => jl(C, m, y, v))) : jl(h, m, y, v);
    }
    return c ? E0(g, v, m, p, a.value, t) : g.length ? Promise.all(g).then(() => m) : m;
  };
}), vC = /* @__PURE__ */ de("$ZodObjectJIT", (t, r) => {
  gC.init(t, r);
  const s = t._zod.parse, a = hh(() => w0(r)), u = (y) => {
    const S = new UE(["shape", "payload", "ctx"]), h = a.value, C = (P) => {
      const l = Zy(P);
      return `shape[${l}]._zod.run({ value: input[${l}], issues: [] }, ctx)`;
    };
    S.write("const input = payload.value;");
    const x = /* @__PURE__ */ Object.create(null);
    let O = 0;
    for (const P of h.keys)
      x[P] = `key_${O++}`;
    S.write("const newResult = {};");
    for (const P of h.keys) {
      const l = x[P], _ = Zy(P);
      S.write(`const ${l} = ${C(P)};`), S.write(`
        if (${l}.issues.length) {
          payload.issues = payload.issues.concat(${l}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${_}, ...iss.path] : [${_}]
          })));
        }
        
        
        if (${l}.value === undefined) {
          if (${_} in input) {
            newResult[${_}] = undefined;
          }
        } else {
          newResult[${_}] = ${l}.value;
        }
        
      `);
    }
    S.write("payload.value = newResult;"), S.write("return payload;");
    const T = S.compile();
    return (P, l) => T(y, P, l);
  };
  let c;
  const f = Rl, m = !c0.jitless, v = m && Iw.value, g = r.catchall;
  let E;
  t._zod.parse = (y, S) => {
    E ?? (E = a.value);
    const h = y.value;
    return f(h) ? m && v && S?.async === !1 && S.jitless !== !0 ? (c || (c = u(r.shape)), y = c(y, S), g ? E0([], h, y, S, E, t) : y) : s(y, S) : (y.issues.push({
      expected: "object",
      code: "invalid_type",
      input: h,
      inst: t
    }), y);
  };
});
function $y(t, r, s, a) {
  for (const c of t)
    if (c.issues.length === 0)
      return r.value = c.value, r;
  const u = t.filter((c) => !zi(c));
  return u.length === 1 ? (r.value = u[0].value, u[0]) : (r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: s,
    errors: t.map((c) => c.issues.map((f) => La(f, a, Pa())))
  }), r);
}
const yC = /* @__PURE__ */ de("$ZodUnion", (t, r) => {
  At.init(t, r), rt(t._zod, "optin", () => r.options.some((u) => u._zod.optin === "optional") ? "optional" : void 0), rt(t._zod, "optout", () => r.options.some((u) => u._zod.optout === "optional") ? "optional" : void 0), rt(t._zod, "values", () => {
    if (r.options.every((u) => u._zod.values))
      return new Set(r.options.flatMap((u) => Array.from(u._zod.values)));
  }), rt(t._zod, "pattern", () => {
    if (r.options.every((u) => u._zod.pattern)) {
      const u = r.options.map((c) => c._zod.pattern);
      return new RegExp(`^(${u.map((c) => mh(c.source)).join("|")})$`);
    }
  });
  const s = r.options.length === 1, a = r.options[0]._zod.run;
  t._zod.parse = (u, c) => {
    if (s)
      return a(u, c);
    let f = !1;
    const m = [];
    for (const p of r.options) {
      const v = p._zod.run({
        value: u.value,
        issues: []
      }, c);
      if (v instanceof Promise)
        m.push(v), f = !0;
      else {
        if (v.issues.length === 0)
          return v;
        m.push(v);
      }
    }
    return f ? Promise.all(m).then((p) => $y(p, u, t, c)) : $y(m, u, t, c);
  };
}), _C = /* @__PURE__ */ de("$ZodIntersection", (t, r) => {
  At.init(t, r), t._zod.parse = (s, a) => {
    const u = s.value, c = r.left._zod.run({ value: u, issues: [] }, a), f = r.right._zod.run({ value: u, issues: [] }, a);
    return c instanceof Promise || f instanceof Promise ? Promise.all([c, f]).then(([p, v]) => Yy(s, p, v)) : Yy(s, c, f);
  };
});
function Yf(t, r) {
  if (t === r)
    return { valid: !0, data: t };
  if (t instanceof Date && r instanceof Date && +t == +r)
    return { valid: !0, data: t };
  if (uo(t) && uo(r)) {
    const s = Object.keys(r), a = Object.keys(t).filter((c) => s.indexOf(c) !== -1), u = { ...t, ...r };
    for (const c of a) {
      const f = Yf(t[c], r[c]);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [c, ...f.mergeErrorPath]
        };
      u[c] = f.data;
    }
    return { valid: !0, data: u };
  }
  if (Array.isArray(t) && Array.isArray(r)) {
    if (t.length !== r.length)
      return { valid: !1, mergeErrorPath: [] };
    const s = [];
    for (let a = 0; a < t.length; a++) {
      const u = t[a], c = r[a], f = Yf(u, c);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [a, ...f.mergeErrorPath]
        };
      s.push(f.data);
    }
    return { valid: !0, data: s };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Yy(t, r, s) {
  if (r.issues.length && t.issues.push(...r.issues), s.issues.length && t.issues.push(...s.issues), zi(t))
    return t;
  const a = Yf(r.value, s.value);
  if (!a.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`);
  return t.value = a.data, t;
}
const bC = /* @__PURE__ */ de("$ZodEnum", (t, r) => {
  At.init(t, r);
  const s = d0(r.entries), a = new Set(s);
  t._zod.values = a, t._zod.pattern = new RegExp(`^(${s.filter((u) => Bw.has(typeof u)).map((u) => typeof u == "string" ? Ll(u) : u.toString()).join("|")})$`), t._zod.parse = (u, c) => {
    const f = u.value;
    return a.has(f) || u.issues.push({
      code: "invalid_value",
      values: s,
      input: f,
      inst: t
    }), u;
  };
}), SC = /* @__PURE__ */ de("$ZodTransform", (t, r) => {
  At.init(t, r), t._zod.parse = (s, a) => {
    if (a.direction === "backward")
      throw new l0(t.constructor.name);
    const u = r.transform(s.value, s);
    if (a.async)
      return (u instanceof Promise ? u : Promise.resolve(u)).then((f) => (s.value = f, s));
    if (u instanceof Promise)
      throw new Li();
    return s.value = u, s;
  };
});
function Xy(t, r) {
  return t.issues.length && r === void 0 ? { issues: [], value: void 0 } : t;
}
const wC = /* @__PURE__ */ de("$ZodOptional", (t, r) => {
  At.init(t, r), t._zod.optin = "optional", t._zod.optout = "optional", rt(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), rt(t._zod, "pattern", () => {
    const s = r.innerType._zod.pattern;
    return s ? new RegExp(`^(${mh(s.source)})?$`) : void 0;
  }), t._zod.parse = (s, a) => {
    if (r.innerType._zod.optin === "optional") {
      const u = r.innerType._zod.run(s, a);
      return u instanceof Promise ? u.then((c) => Xy(c, s.value)) : Xy(u, s.value);
    }
    return s.value === void 0 ? s : r.innerType._zod.run(s, a);
  };
}), EC = /* @__PURE__ */ de("$ZodNullable", (t, r) => {
  At.init(t, r), rt(t._zod, "optin", () => r.innerType._zod.optin), rt(t._zod, "optout", () => r.innerType._zod.optout), rt(t._zod, "pattern", () => {
    const s = r.innerType._zod.pattern;
    return s ? new RegExp(`^(${mh(s.source)}|null)$`) : void 0;
  }), rt(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), t._zod.parse = (s, a) => s.value === null ? s : r.innerType._zod.run(s, a);
}), CC = /* @__PURE__ */ de("$ZodDefault", (t, r) => {
  At.init(t, r), t._zod.optin = "optional", rt(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (s, a) => {
    if (a.direction === "backward")
      return r.innerType._zod.run(s, a);
    if (s.value === void 0)
      return s.value = r.defaultValue, s;
    const u = r.innerType._zod.run(s, a);
    return u instanceof Promise ? u.then((c) => Fy(c, r)) : Fy(u, r);
  };
});
function Fy(t, r) {
  return t.value === void 0 && (t.value = r.defaultValue), t;
}
const kC = /* @__PURE__ */ de("$ZodPrefault", (t, r) => {
  At.init(t, r), t._zod.optin = "optional", rt(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (s, a) => (a.direction === "backward" || s.value === void 0 && (s.value = r.defaultValue), r.innerType._zod.run(s, a));
}), AC = /* @__PURE__ */ de("$ZodNonOptional", (t, r) => {
  At.init(t, r), rt(t._zod, "values", () => {
    const s = r.innerType._zod.values;
    return s ? new Set([...s].filter((a) => a !== void 0)) : void 0;
  }), t._zod.parse = (s, a) => {
    const u = r.innerType._zod.run(s, a);
    return u instanceof Promise ? u.then((c) => Qy(c, t)) : Qy(u, t);
  };
});
function Qy(t, r) {
  return !t.issues.length && t.value === void 0 && t.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: t.value,
    inst: r
  }), t;
}
const xC = /* @__PURE__ */ de("$ZodCatch", (t, r) => {
  At.init(t, r), rt(t._zod, "optin", () => r.innerType._zod.optin), rt(t._zod, "optout", () => r.innerType._zod.optout), rt(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (s, a) => {
    if (a.direction === "backward")
      return r.innerType._zod.run(s, a);
    const u = r.innerType._zod.run(s, a);
    return u instanceof Promise ? u.then((c) => (s.value = c.value, c.issues.length && (s.value = r.catchValue({
      ...s,
      error: {
        issues: c.issues.map((f) => La(f, a, Pa()))
      },
      input: s.value
    }), s.issues = []), s)) : (s.value = u.value, u.issues.length && (s.value = r.catchValue({
      ...s,
      error: {
        issues: u.issues.map((c) => La(c, a, Pa()))
      },
      input: s.value
    }), s.issues = []), s);
  };
}), TC = /* @__PURE__ */ de("$ZodPipe", (t, r) => {
  At.init(t, r), rt(t._zod, "values", () => r.in._zod.values), rt(t._zod, "optin", () => r.in._zod.optin), rt(t._zod, "optout", () => r.out._zod.optout), rt(t._zod, "propValues", () => r.in._zod.propValues), t._zod.parse = (s, a) => {
    if (a.direction === "backward") {
      const c = r.out._zod.run(s, a);
      return c instanceof Promise ? c.then((f) => ll(f, r.in, a)) : ll(c, r.in, a);
    }
    const u = r.in._zod.run(s, a);
    return u instanceof Promise ? u.then((c) => ll(c, r.out, a)) : ll(u, r.out, a);
  };
});
function ll(t, r, s) {
  return t.issues.length ? (t.aborted = !0, t) : r._zod.run({ value: t.value, issues: t.issues }, s);
}
const NC = /* @__PURE__ */ de("$ZodReadonly", (t, r) => {
  At.init(t, r), rt(t._zod, "propValues", () => r.innerType._zod.propValues), rt(t._zod, "values", () => r.innerType._zod.values), rt(t._zod, "optin", () => r.innerType._zod.optin), rt(t._zod, "optout", () => r.innerType._zod.optout), t._zod.parse = (s, a) => {
    if (a.direction === "backward")
      return r.innerType._zod.run(s, a);
    const u = r.innerType._zod.run(s, a);
    return u instanceof Promise ? u.then(Ky) : Ky(u);
  };
});
function Ky(t) {
  return t.value = Object.freeze(t.value), t;
}
const OC = /* @__PURE__ */ de("$ZodCustom", (t, r) => {
  rr.init(t, r), At.init(t, r), t._zod.parse = (s, a) => s, t._zod.check = (s) => {
    const a = s.value, u = r.fn(a);
    if (u instanceof Promise)
      return u.then((c) => Jy(c, s, a, t));
    Jy(u, s, a, t);
  };
});
function Jy(t, r, s, a) {
  if (!t) {
    const u = {
      code: "custom",
      input: s,
      inst: a,
      // incorporates params.error into issue reporting
      path: [...a._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !a._zod.def.abort
      // params: inst._zod.def.params,
    };
    a._zod.def.params && (u.params = a._zod.def.params), r.issues.push(lo(u));
  }
}
class C0 {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(r, ...s) {
    const a = s[0];
    if (this._map.set(r, a), a && typeof a == "object" && "id" in a) {
      if (this._idmap.has(a.id))
        throw new Error(`ID ${a.id} already exists in the registry`);
      this._idmap.set(a.id, r);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(r) {
    const s = this._map.get(r);
    return s && typeof s == "object" && "id" in s && this._idmap.delete(s.id), this._map.delete(r), this;
  }
  get(r) {
    const s = r._zod.parent;
    if (s) {
      const a = { ...this.get(s) ?? {} };
      delete a.id;
      const u = { ...a, ...this._map.get(r) };
      return Object.keys(u).length ? u : void 0;
    }
    return this._map.get(r);
  }
  has(r) {
    return this._map.has(r);
  }
}
function MC() {
  return new C0();
}
const Ws = /* @__PURE__ */ MC();
function RC(t, r) {
  return new t({
    type: "string",
    ...Oe(r)
  });
}
function jC(t, r) {
  return new t({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function Wy(t, r) {
  return new t({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function DC(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function zC(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...Oe(r)
  });
}
function PC(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...Oe(r)
  });
}
function LC(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...Oe(r)
  });
}
function IC(t, r) {
  return new t({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function BC(t, r) {
  return new t({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function UC(t, r) {
  return new t({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function HC(t, r) {
  return new t({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function qC(t, r) {
  return new t({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function ZC(t, r) {
  return new t({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function GC(t, r) {
  return new t({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function VC(t, r) {
  return new t({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function $C(t, r) {
  return new t({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function YC(t, r) {
  return new t({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function XC(t, r) {
  return new t({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function FC(t, r) {
  return new t({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function QC(t, r) {
  return new t({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function KC(t, r) {
  return new t({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function JC(t, r) {
  return new t({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function WC(t, r) {
  return new t({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function e4(t, r) {
  return new t({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...Oe(r)
  });
}
function t4(t, r) {
  return new t({
    type: "string",
    format: "date",
    check: "string_format",
    ...Oe(r)
  });
}
function n4(t, r) {
  return new t({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...Oe(r)
  });
}
function r4(t, r) {
  return new t({
    type: "string",
    format: "duration",
    check: "string_format",
    ...Oe(r)
  });
}
function a4(t) {
  return new t({
    type: "unknown"
  });
}
function i4(t, r) {
  return new t({
    type: "never",
    ...Oe(r)
  });
}
function k0(t, r) {
  return new OE({
    check: "max_length",
    ...Oe(r),
    maximum: t
  });
}
function Dl(t, r) {
  return new ME({
    check: "min_length",
    ...Oe(r),
    minimum: t
  });
}
function A0(t, r) {
  return new RE({
    check: "length_equals",
    ...Oe(r),
    length: t
  });
}
function s4(t, r) {
  return new jE({
    check: "string_format",
    format: "regex",
    ...Oe(r),
    pattern: t
  });
}
function o4(t) {
  return new DE({
    check: "string_format",
    format: "lowercase",
    ...Oe(t)
  });
}
function u4(t) {
  return new zE({
    check: "string_format",
    format: "uppercase",
    ...Oe(t)
  });
}
function l4(t, r) {
  return new PE({
    check: "string_format",
    format: "includes",
    ...Oe(r),
    includes: t
  });
}
function c4(t, r) {
  return new LE({
    check: "string_format",
    format: "starts_with",
    ...Oe(r),
    prefix: t
  });
}
function d4(t, r) {
  return new IE({
    check: "string_format",
    format: "ends_with",
    ...Oe(r),
    suffix: t
  });
}
function mo(t) {
  return new BE({
    check: "overwrite",
    tx: t
  });
}
function f4(t) {
  return mo((r) => r.normalize(t));
}
function h4() {
  return mo((t) => t.trim());
}
function p4() {
  return mo((t) => t.toLowerCase());
}
function m4() {
  return mo((t) => t.toUpperCase());
}
function g4(t, r, s) {
  return new t({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ...Oe(s)
  });
}
function v4(t, r, s) {
  return new t({
    type: "custom",
    check: "custom",
    fn: r,
    ...Oe(s)
  });
}
function y4(t) {
  const r = _4((s) => (s.addIssue = (a) => {
    if (typeof a == "string")
      s.issues.push(lo(a, s.value, r._zod.def));
    else {
      const u = a;
      u.fatal && (u.continue = !1), u.code ?? (u.code = "custom"), u.input ?? (u.input = s.value), u.inst ?? (u.inst = r), u.continue ?? (u.continue = !r._zod.def.abort), s.issues.push(lo(u));
    }
  }, t(s.value, s)));
  return r;
}
function _4(t, r) {
  const s = new rr({
    check: "custom",
    ...Oe(r)
  });
  return s._zod.check = t, s;
}
class e_ {
  constructor(r) {
    this.counter = 0, this.metadataRegistry = r?.metadata ?? Ws, this.target = r?.target ?? "draft-2020-12", this.unrepresentable = r?.unrepresentable ?? "throw", this.override = r?.override ?? (() => {
    }), this.io = r?.io ?? "output", this.seen = /* @__PURE__ */ new Map();
  }
  process(r, s = { path: [], schemaPath: [] }) {
    var a;
    const u = r._zod.def, c = {
      guid: "uuid",
      url: "uri",
      datetime: "date-time",
      json_string: "json-string",
      regex: ""
      // do not set
    }, f = this.seen.get(r);
    if (f)
      return f.count++, s.schemaPath.includes(r) && (f.cycle = s.path), f.schema;
    const m = { schema: {}, count: 1, cycle: void 0, path: s.path };
    this.seen.set(r, m);
    const p = r._zod.toJSONSchema?.();
    if (p)
      m.schema = p;
    else {
      const E = {
        ...s,
        schemaPath: [...s.schemaPath, r],
        path: s.path
      }, y = r._zod.parent;
      if (y)
        m.ref = y, this.process(y, E), this.seen.get(y).isParent = !0;
      else {
        const S = m.schema;
        switch (u.type) {
          case "string": {
            const h = S;
            h.type = "string";
            const { minimum: C, maximum: x, format: O, patterns: T, contentEncoding: P } = r._zod.bag;
            if (typeof C == "number" && (h.minLength = C), typeof x == "number" && (h.maxLength = x), O && (h.format = c[O] ?? O, h.format === "" && delete h.format), P && (h.contentEncoding = P), T && T.size > 0) {
              const l = [...T];
              l.length === 1 ? h.pattern = l[0].source : l.length > 1 && (m.schema.allOf = [
                ...l.map((_) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: _.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const h = S, { minimum: C, maximum: x, format: O, multipleOf: T, exclusiveMaximum: P, exclusiveMinimum: l } = r._zod.bag;
            typeof O == "string" && O.includes("int") ? h.type = "integer" : h.type = "number", typeof l == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.minimum = l, h.exclusiveMinimum = !0) : h.exclusiveMinimum = l), typeof C == "number" && (h.minimum = C, typeof l == "number" && this.target !== "draft-4" && (l >= C ? delete h.minimum : delete h.exclusiveMinimum)), typeof P == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.maximum = P, h.exclusiveMaximum = !0) : h.exclusiveMaximum = P), typeof x == "number" && (h.maximum = x, typeof P == "number" && this.target !== "draft-4" && (P <= x ? delete h.maximum : delete h.exclusiveMaximum)), typeof T == "number" && (h.multipleOf = T);
            break;
          }
          case "boolean": {
            const h = S;
            h.type = "boolean";
            break;
          }
          case "bigint": {
            if (this.unrepresentable === "throw")
              throw new Error("BigInt cannot be represented in JSON Schema");
            break;
          }
          case "symbol": {
            if (this.unrepresentable === "throw")
              throw new Error("Symbols cannot be represented in JSON Schema");
            break;
          }
          case "null": {
            this.target === "openapi-3.0" ? (S.type = "string", S.nullable = !0, S.enum = [null]) : S.type = "null";
            break;
          }
          case "any":
            break;
          case "unknown":
            break;
          case "undefined": {
            if (this.unrepresentable === "throw")
              throw new Error("Undefined cannot be represented in JSON Schema");
            break;
          }
          case "void": {
            if (this.unrepresentable === "throw")
              throw new Error("Void cannot be represented in JSON Schema");
            break;
          }
          case "never": {
            S.not = {};
            break;
          }
          case "date": {
            if (this.unrepresentable === "throw")
              throw new Error("Date cannot be represented in JSON Schema");
            break;
          }
          case "array": {
            const h = S, { minimum: C, maximum: x } = r._zod.bag;
            typeof C == "number" && (h.minItems = C), typeof x == "number" && (h.maxItems = x), h.type = "array", h.items = this.process(u.element, { ...E, path: [...E.path, "items"] });
            break;
          }
          case "object": {
            const h = S;
            h.type = "object", h.properties = {};
            const C = u.shape;
            for (const T in C)
              h.properties[T] = this.process(C[T], {
                ...E,
                path: [...E.path, "properties", T]
              });
            const x = new Set(Object.keys(C)), O = new Set([...x].filter((T) => {
              const P = u.shape[T]._zod;
              return this.io === "input" ? P.optin === void 0 : P.optout === void 0;
            }));
            O.size > 0 && (h.required = Array.from(O)), u.catchall?._zod.def.type === "never" ? h.additionalProperties = !1 : u.catchall ? u.catchall && (h.additionalProperties = this.process(u.catchall, {
              ...E,
              path: [...E.path, "additionalProperties"]
            })) : this.io === "output" && (h.additionalProperties = !1);
            break;
          }
          case "union": {
            const h = S, C = u.options.map((x, O) => this.process(x, {
              ...E,
              path: [...E.path, "anyOf", O]
            }));
            h.anyOf = C;
            break;
          }
          case "intersection": {
            const h = S, C = this.process(u.left, {
              ...E,
              path: [...E.path, "allOf", 0]
            }), x = this.process(u.right, {
              ...E,
              path: [...E.path, "allOf", 1]
            }), O = (P) => "allOf" in P && Object.keys(P).length === 1, T = [
              ...O(C) ? C.allOf : [C],
              ...O(x) ? x.allOf : [x]
            ];
            h.allOf = T;
            break;
          }
          case "tuple": {
            const h = S;
            h.type = "array";
            const C = this.target === "draft-2020-12" ? "prefixItems" : "items", x = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", O = u.items.map((_, w) => this.process(_, {
              ...E,
              path: [...E.path, C, w]
            })), T = u.rest ? this.process(u.rest, {
              ...E,
              path: [...E.path, x, ...this.target === "openapi-3.0" ? [u.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (h.prefixItems = O, T && (h.items = T)) : this.target === "openapi-3.0" ? (h.items = {
              anyOf: O
            }, T && h.items.anyOf.push(T), h.minItems = O.length, T || (h.maxItems = O.length)) : (h.items = O, T && (h.additionalItems = T));
            const { minimum: P, maximum: l } = r._zod.bag;
            typeof P == "number" && (h.minItems = P), typeof l == "number" && (h.maxItems = l);
            break;
          }
          case "record": {
            const h = S;
            h.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (h.propertyNames = this.process(u.keyType, {
              ...E,
              path: [...E.path, "propertyNames"]
            })), h.additionalProperties = this.process(u.valueType, {
              ...E,
              path: [...E.path, "additionalProperties"]
            });
            break;
          }
          case "map": {
            if (this.unrepresentable === "throw")
              throw new Error("Map cannot be represented in JSON Schema");
            break;
          }
          case "set": {
            if (this.unrepresentable === "throw")
              throw new Error("Set cannot be represented in JSON Schema");
            break;
          }
          case "enum": {
            const h = S, C = d0(u.entries);
            C.every((x) => typeof x == "number") && (h.type = "number"), C.every((x) => typeof x == "string") && (h.type = "string"), h.enum = C;
            break;
          }
          case "literal": {
            const h = S, C = [];
            for (const x of u.values)
              if (x === void 0) {
                if (this.unrepresentable === "throw")
                  throw new Error("Literal `undefined` cannot be represented in JSON Schema");
              } else if (typeof x == "bigint") {
                if (this.unrepresentable === "throw")
                  throw new Error("BigInt literals cannot be represented in JSON Schema");
                C.push(Number(x));
              } else
                C.push(x);
            if (C.length !== 0) if (C.length === 1) {
              const x = C[0];
              h.type = x === null ? "null" : typeof x, this.target === "draft-4" || this.target === "openapi-3.0" ? h.enum = [x] : h.const = x;
            } else
              C.every((x) => typeof x == "number") && (h.type = "number"), C.every((x) => typeof x == "string") && (h.type = "string"), C.every((x) => typeof x == "boolean") && (h.type = "string"), C.every((x) => x === null) && (h.type = "null"), h.enum = C;
            break;
          }
          case "file": {
            const h = S, C = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: x, maximum: O, mime: T } = r._zod.bag;
            x !== void 0 && (C.minLength = x), O !== void 0 && (C.maxLength = O), T ? T.length === 1 ? (C.contentMediaType = T[0], Object.assign(h, C)) : h.anyOf = T.map((P) => ({ ...C, contentMediaType: P })) : Object.assign(h, C);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const h = this.process(u.innerType, E);
            this.target === "openapi-3.0" ? (m.ref = u.innerType, S.nullable = !0) : S.anyOf = [h, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(u.innerType, E), m.ref = u.innerType;
            break;
          }
          case "success": {
            const h = S;
            h.type = "boolean";
            break;
          }
          case "default": {
            this.process(u.innerType, E), m.ref = u.innerType, S.default = JSON.parse(JSON.stringify(u.defaultValue));
            break;
          }
          case "prefault": {
            this.process(u.innerType, E), m.ref = u.innerType, this.io === "input" && (S._prefault = JSON.parse(JSON.stringify(u.defaultValue)));
            break;
          }
          case "catch": {
            this.process(u.innerType, E), m.ref = u.innerType;
            let h;
            try {
              h = u.catchValue(void 0);
            } catch {
              throw new Error("Dynamic catch values are not supported in JSON Schema");
            }
            S.default = h;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            const h = S, C = r._zod.pattern;
            if (!C)
              throw new Error("Pattern not found in template literal");
            h.type = "string", h.pattern = C.source;
            break;
          }
          case "pipe": {
            const h = this.io === "input" ? u.in._zod.def.type === "transform" ? u.out : u.in : u.out;
            this.process(h, E), m.ref = h;
            break;
          }
          case "readonly": {
            this.process(u.innerType, E), m.ref = u.innerType, S.readOnly = !0;
            break;
          }
          // passthrough types
          case "promise": {
            this.process(u.innerType, E), m.ref = u.innerType;
            break;
          }
          case "optional": {
            this.process(u.innerType, E), m.ref = u.innerType;
            break;
          }
          case "lazy": {
            const h = r._zod.innerType;
            this.process(h, E), m.ref = h;
            break;
          }
          case "custom": {
            if (this.unrepresentable === "throw")
              throw new Error("Custom types cannot be represented in JSON Schema");
            break;
          }
          case "function": {
            if (this.unrepresentable === "throw")
              throw new Error("Function types cannot be represented in JSON Schema");
            break;
          }
        }
      }
    }
    const v = this.metadataRegistry.get(r);
    return v && Object.assign(m.schema, v), this.io === "input" && kt(r) && (delete m.schema.examples, delete m.schema.default), this.io === "input" && m.schema._prefault && ((a = m.schema).default ?? (a.default = m.schema._prefault)), delete m.schema._prefault, this.seen.get(r).schema;
  }
  emit(r, s) {
    const a = {
      cycles: s?.cycles ?? "ref",
      reused: s?.reused ?? "inline",
      // unrepresentable: _params?.unrepresentable ?? "throw",
      // uri: _params?.uri ?? ((id) => `${id}`),
      external: s?.external ?? void 0
    }, u = this.seen.get(r);
    if (!u)
      throw new Error("Unprocessed schema. This is a bug in Zod.");
    const c = (g) => {
      const E = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (a.external) {
        const C = a.external.registry.get(g[0])?.id, x = a.external.uri ?? ((T) => T);
        if (C)
          return { ref: x(C) };
        const O = g[1].defId ?? g[1].schema.id ?? `schema${this.counter++}`;
        return g[1].defId = O, { defId: O, ref: `${x("__shared")}#/${E}/${O}` };
      }
      if (g[1] === u)
        return { ref: "#" };
      const S = `#/${E}/`, h = g[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: h, ref: S + h };
    }, f = (g) => {
      if (g[1].schema.$ref)
        return;
      const E = g[1], { ref: y, defId: S } = c(g);
      E.def = { ...E.schema }, S && (E.defId = S);
      const h = E.schema;
      for (const C in h)
        delete h[C];
      h.$ref = y;
    };
    if (a.cycles === "throw")
      for (const g of this.seen.entries()) {
        const E = g[1];
        if (E.cycle)
          throw new Error(`Cycle detected: #/${E.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    for (const g of this.seen.entries()) {
      const E = g[1];
      if (r === g[0]) {
        f(g);
        continue;
      }
      if (a.external) {
        const S = a.external.registry.get(g[0])?.id;
        if (r !== g[0] && S) {
          f(g);
          continue;
        }
      }
      if (this.metadataRegistry.get(g[0])?.id) {
        f(g);
        continue;
      }
      if (E.cycle) {
        f(g);
        continue;
      }
      if (E.count > 1 && a.reused === "ref") {
        f(g);
        continue;
      }
    }
    const m = (g, E) => {
      const y = this.seen.get(g), S = y.def ?? y.schema, h = { ...S };
      if (y.ref === null)
        return;
      const C = y.ref;
      if (y.ref = null, C) {
        m(C, E);
        const x = this.seen.get(C).schema;
        x.$ref && (E.target === "draft-7" || E.target === "draft-4" || E.target === "openapi-3.0") ? (S.allOf = S.allOf ?? [], S.allOf.push(x)) : (Object.assign(S, x), Object.assign(S, h));
      }
      y.isParent || this.override({
        zodSchema: g,
        jsonSchema: S,
        path: y.path ?? []
      });
    };
    for (const g of [...this.seen.entries()].reverse())
      m(g[0], { target: this.target });
    const p = {};
    if (this.target === "draft-2020-12" ? p.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? p.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? p.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), a.external?.uri) {
      const g = a.external.registry.get(r)?.id;
      if (!g)
        throw new Error("Schema is missing an `id` property");
      p.$id = a.external.uri(g);
    }
    Object.assign(p, u.def);
    const v = a.external?.defs ?? {};
    for (const g of this.seen.entries()) {
      const E = g[1];
      E.def && E.defId && (v[E.defId] = E.def);
    }
    a.external || Object.keys(v).length > 0 && (this.target === "draft-2020-12" ? p.$defs = v : p.definitions = v);
    try {
      return JSON.parse(JSON.stringify(p));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function b4(t, r) {
  if (t instanceof C0) {
    const a = new e_(r), u = {};
    for (const m of t._idmap.entries()) {
      const [p, v] = m;
      a.process(v);
    }
    const c = {}, f = {
      registry: t,
      uri: r?.uri,
      defs: u
    };
    for (const m of t._idmap.entries()) {
      const [p, v] = m;
      c[p] = a.emit(v, {
        ...r,
        external: f
      });
    }
    if (Object.keys(u).length > 0) {
      const m = a.target === "draft-2020-12" ? "$defs" : "definitions";
      c.__shared = {
        [m]: u
      };
    }
    return { schemas: c };
  }
  const s = new e_(r);
  return s.process(t), s.emit(t, r);
}
function kt(t, r) {
  const s = r ?? { seen: /* @__PURE__ */ new Set() };
  if (s.seen.has(t))
    return !1;
  s.seen.add(t);
  const u = t._zod.def;
  switch (u.type) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "date":
    case "symbol":
    case "undefined":
    case "null":
    case "any":
    case "unknown":
    case "never":
    case "void":
    case "literal":
    case "enum":
    case "nan":
    case "file":
    case "template_literal":
      return !1;
    case "array":
      return kt(u.element, s);
    case "object": {
      for (const c in u.shape)
        if (kt(u.shape[c], s))
          return !0;
      return !1;
    }
    case "union": {
      for (const c of u.options)
        if (kt(c, s))
          return !0;
      return !1;
    }
    case "intersection":
      return kt(u.left, s) || kt(u.right, s);
    case "tuple": {
      for (const c of u.items)
        if (kt(c, s))
          return !0;
      return !!(u.rest && kt(u.rest, s));
    }
    case "record":
      return kt(u.keyType, s) || kt(u.valueType, s);
    case "map":
      return kt(u.keyType, s) || kt(u.valueType, s);
    case "set":
      return kt(u.valueType, s);
    // inner types
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return kt(u.innerType, s);
    case "lazy":
      return kt(u.getter(), s);
    case "default":
      return kt(u.innerType, s);
    case "prefault":
      return kt(u.innerType, s);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return kt(u.in, s) || kt(u.out, s);
    case "success":
      return !1;
    case "catch":
      return !1;
    case "function":
      return !1;
  }
  throw new Error(`Unknown schema type: ${u.type}`);
}
const S4 = /* @__PURE__ */ de("ZodISODateTime", (t, r) => {
  WE.init(t, r), ct.init(t, r);
});
function w4(t) {
  return e4(S4, t);
}
const E4 = /* @__PURE__ */ de("ZodISODate", (t, r) => {
  eC.init(t, r), ct.init(t, r);
});
function C4(t) {
  return t4(E4, t);
}
const k4 = /* @__PURE__ */ de("ZodISOTime", (t, r) => {
  tC.init(t, r), ct.init(t, r);
});
function A4(t) {
  return n4(k4, t);
}
const x4 = /* @__PURE__ */ de("ZodISODuration", (t, r) => {
  nC.init(t, r), ct.init(t, r);
});
function T4(t) {
  return r4(x4, t);
}
const N4 = (t, r) => {
  g0.init(t, r), t.name = "ZodError", Object.defineProperties(t, {
    format: {
      value: (s) => Fw(t, s)
      // enumerable: false,
    },
    flatten: {
      value: (s) => Xw(t, s)
      // enumerable: false,
    },
    addIssue: {
      value: (s) => {
        t.issues.push(s), t.message = JSON.stringify(t.issues, $f, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (s) => {
        t.issues.push(...s), t.message = JSON.stringify(t.issues, $f, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return t.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, jn = de("ZodError", N4, {
  Parent: Error
}), O4 = /* @__PURE__ */ vh(jn), M4 = /* @__PURE__ */ yh(jn), R4 = /* @__PURE__ */ Il(jn), j4 = /* @__PURE__ */ Bl(jn), D4 = /* @__PURE__ */ Jw(jn), z4 = /* @__PURE__ */ Ww(jn), P4 = /* @__PURE__ */ eE(jn), L4 = /* @__PURE__ */ tE(jn), I4 = /* @__PURE__ */ nE(jn), B4 = /* @__PURE__ */ rE(jn), U4 = /* @__PURE__ */ aE(jn), H4 = /* @__PURE__ */ iE(jn), Rt = /* @__PURE__ */ de("ZodType", (t, r) => (At.init(t, r), t.def = r, t.type = r.type, Object.defineProperty(t, "_def", { value: r }), t.check = (...s) => t.clone(Ba(r, {
  checks: [
    ...r.checks ?? [],
    ...s.map((a) => typeof a == "function" ? { _zod: { check: a, def: { check: "custom" }, onattach: [] } } : a)
  ]
})), t.clone = (s, a) => ra(t, s, a), t.brand = () => t, t.register = ((s, a) => (s.add(t, a), t)), t.parse = (s, a) => O4(t, s, a, { callee: t.parse }), t.safeParse = (s, a) => R4(t, s, a), t.parseAsync = async (s, a) => M4(t, s, a, { callee: t.parseAsync }), t.safeParseAsync = async (s, a) => j4(t, s, a), t.spa = t.safeParseAsync, t.encode = (s, a) => D4(t, s, a), t.decode = (s, a) => z4(t, s, a), t.encodeAsync = async (s, a) => P4(t, s, a), t.decodeAsync = async (s, a) => L4(t, s, a), t.safeEncode = (s, a) => I4(t, s, a), t.safeDecode = (s, a) => B4(t, s, a), t.safeEncodeAsync = async (s, a) => U4(t, s, a), t.safeDecodeAsync = async (s, a) => H4(t, s, a), t.refine = (s, a) => t.check(Ok(s, a)), t.superRefine = (s) => t.check(Mk(s)), t.overwrite = (s) => t.check(mo(s)), t.optional = () => r_(t), t.nullable = () => a_(t), t.nullish = () => r_(a_(t)), t.nonoptional = (s) => Ek(t, s), t.array = () => Da(t), t.or = (s) => fk([t, s]), t.and = (s) => pk(t, s), t.transform = (s) => i_(t, vk(s)), t.default = (s) => bk(t, s), t.prefault = (s) => wk(t, s), t.catch = (s) => kk(t, s), t.pipe = (s) => i_(t, s), t.readonly = () => Tk(t), t.describe = (s) => {
  const a = t.clone();
  return Ws.add(a, { description: s }), a;
}, Object.defineProperty(t, "description", {
  get() {
    return Ws.get(t)?.description;
  },
  configurable: !0
}), t.meta = (...s) => {
  if (s.length === 0)
    return Ws.get(t);
  const a = t.clone();
  return Ws.add(a, s[0]), a;
}, t.isOptional = () => t.safeParse(void 0).success, t.isNullable = () => t.safeParse(null).success, t)), x0 = /* @__PURE__ */ de("_ZodString", (t, r) => {
  _h.init(t, r), Rt.init(t, r);
  const s = t._zod.bag;
  t.format = s.format ?? null, t.minLength = s.minimum ?? null, t.maxLength = s.maximum ?? null, t.regex = (...a) => t.check(s4(...a)), t.includes = (...a) => t.check(l4(...a)), t.startsWith = (...a) => t.check(c4(...a)), t.endsWith = (...a) => t.check(d4(...a)), t.min = (...a) => t.check(Dl(...a)), t.max = (...a) => t.check(k0(...a)), t.length = (...a) => t.check(A0(...a)), t.nonempty = (...a) => t.check(Dl(1, ...a)), t.lowercase = (a) => t.check(o4(a)), t.uppercase = (a) => t.check(u4(a)), t.trim = () => t.check(h4()), t.normalize = (...a) => t.check(f4(...a)), t.toLowerCase = () => t.check(p4()), t.toUpperCase = () => t.check(m4());
}), q4 = /* @__PURE__ */ de("ZodString", (t, r) => {
  _h.init(t, r), x0.init(t, r), t.email = (s) => t.check(jC(Z4, s)), t.url = (s) => t.check(IC(G4, s)), t.jwt = (s) => t.check(WC(ik, s)), t.emoji = (s) => t.check(BC(V4, s)), t.guid = (s) => t.check(Wy(t_, s)), t.uuid = (s) => t.check(DC(cl, s)), t.uuidv4 = (s) => t.check(zC(cl, s)), t.uuidv6 = (s) => t.check(PC(cl, s)), t.uuidv7 = (s) => t.check(LC(cl, s)), t.nanoid = (s) => t.check(UC($4, s)), t.guid = (s) => t.check(Wy(t_, s)), t.cuid = (s) => t.check(HC(Y4, s)), t.cuid2 = (s) => t.check(qC(X4, s)), t.ulid = (s) => t.check(ZC(F4, s)), t.base64 = (s) => t.check(QC(nk, s)), t.base64url = (s) => t.check(KC(rk, s)), t.xid = (s) => t.check(GC(Q4, s)), t.ksuid = (s) => t.check(VC(K4, s)), t.ipv4 = (s) => t.check($C(J4, s)), t.ipv6 = (s) => t.check(YC(W4, s)), t.cidrv4 = (s) => t.check(XC(ek, s)), t.cidrv6 = (s) => t.check(FC(tk, s)), t.e164 = (s) => t.check(JC(ak, s)), t.datetime = (s) => t.check(w4(s)), t.date = (s) => t.check(C4(s)), t.time = (s) => t.check(A4(s)), t.duration = (s) => t.check(T4(s));
});
function Zt(t) {
  return RC(q4, t);
}
const ct = /* @__PURE__ */ de("ZodStringFormat", (t, r) => {
  ot.init(t, r), x0.init(t, r);
}), Z4 = /* @__PURE__ */ de("ZodEmail", (t, r) => {
  GE.init(t, r), ct.init(t, r);
}), t_ = /* @__PURE__ */ de("ZodGUID", (t, r) => {
  qE.init(t, r), ct.init(t, r);
}), cl = /* @__PURE__ */ de("ZodUUID", (t, r) => {
  ZE.init(t, r), ct.init(t, r);
}), G4 = /* @__PURE__ */ de("ZodURL", (t, r) => {
  VE.init(t, r), ct.init(t, r);
}), V4 = /* @__PURE__ */ de("ZodEmoji", (t, r) => {
  $E.init(t, r), ct.init(t, r);
}), $4 = /* @__PURE__ */ de("ZodNanoID", (t, r) => {
  YE.init(t, r), ct.init(t, r);
}), Y4 = /* @__PURE__ */ de("ZodCUID", (t, r) => {
  XE.init(t, r), ct.init(t, r);
}), X4 = /* @__PURE__ */ de("ZodCUID2", (t, r) => {
  FE.init(t, r), ct.init(t, r);
}), F4 = /* @__PURE__ */ de("ZodULID", (t, r) => {
  QE.init(t, r), ct.init(t, r);
}), Q4 = /* @__PURE__ */ de("ZodXID", (t, r) => {
  KE.init(t, r), ct.init(t, r);
}), K4 = /* @__PURE__ */ de("ZodKSUID", (t, r) => {
  JE.init(t, r), ct.init(t, r);
}), J4 = /* @__PURE__ */ de("ZodIPv4", (t, r) => {
  rC.init(t, r), ct.init(t, r);
}), W4 = /* @__PURE__ */ de("ZodIPv6", (t, r) => {
  aC.init(t, r), ct.init(t, r);
}), ek = /* @__PURE__ */ de("ZodCIDRv4", (t, r) => {
  iC.init(t, r), ct.init(t, r);
}), tk = /* @__PURE__ */ de("ZodCIDRv6", (t, r) => {
  sC.init(t, r), ct.init(t, r);
}), nk = /* @__PURE__ */ de("ZodBase64", (t, r) => {
  oC.init(t, r), ct.init(t, r);
}), rk = /* @__PURE__ */ de("ZodBase64URL", (t, r) => {
  lC.init(t, r), ct.init(t, r);
}), ak = /* @__PURE__ */ de("ZodE164", (t, r) => {
  cC.init(t, r), ct.init(t, r);
}), ik = /* @__PURE__ */ de("ZodJWT", (t, r) => {
  fC.init(t, r), ct.init(t, r);
}), sk = /* @__PURE__ */ de("ZodUnknown", (t, r) => {
  hC.init(t, r), Rt.init(t, r);
});
function n_() {
  return a4(sk);
}
const ok = /* @__PURE__ */ de("ZodNever", (t, r) => {
  pC.init(t, r), Rt.init(t, r);
});
function uk(t) {
  return i4(ok, t);
}
const lk = /* @__PURE__ */ de("ZodArray", (t, r) => {
  mC.init(t, r), Rt.init(t, r), t.element = r.element, t.min = (s, a) => t.check(Dl(s, a)), t.nonempty = (s) => t.check(Dl(1, s)), t.max = (s, a) => t.check(k0(s, a)), t.length = (s, a) => t.check(A0(s, a)), t.unwrap = () => t.element;
});
function Da(t, r) {
  return g4(lk, t, r);
}
const ck = /* @__PURE__ */ de("ZodObject", (t, r) => {
  vC.init(t, r), Rt.init(t, r), rt(t, "shape", () => r.shape), t.keyof = () => mk(Object.keys(t._zod.def.shape)), t.catchall = (s) => t.clone({ ...t._zod.def, catchall: s }), t.passthrough = () => t.clone({ ...t._zod.def, catchall: n_() }), t.loose = () => t.clone({ ...t._zod.def, catchall: n_() }), t.strict = () => t.clone({ ...t._zod.def, catchall: uk() }), t.strip = () => t.clone({ ...t._zod.def, catchall: void 0 }), t.extend = (s) => Zw(t, s), t.safeExtend = (s) => Gw(t, s), t.merge = (s) => Vw(t, s), t.pick = (s) => Hw(t, s), t.omit = (s) => qw(t, s), t.partial = (...s) => $w(T0, t, s[0]), t.required = (...s) => Yw(N0, t, s[0]);
});
function go(t, r) {
  const s = {
    type: "object",
    shape: t ?? {},
    ...Oe(r)
  };
  return new ck(s);
}
const dk = /* @__PURE__ */ de("ZodUnion", (t, r) => {
  yC.init(t, r), Rt.init(t, r), t.options = r.options;
});
function fk(t, r) {
  return new dk({
    type: "union",
    options: t,
    ...Oe(r)
  });
}
const hk = /* @__PURE__ */ de("ZodIntersection", (t, r) => {
  _C.init(t, r), Rt.init(t, r);
});
function pk(t, r) {
  return new hk({
    type: "intersection",
    left: t,
    right: r
  });
}
const Xf = /* @__PURE__ */ de("ZodEnum", (t, r) => {
  bC.init(t, r), Rt.init(t, r), t.enum = r.entries, t.options = Object.values(r.entries);
  const s = new Set(Object.keys(r.entries));
  t.extract = (a, u) => {
    const c = {};
    for (const f of a)
      if (s.has(f))
        c[f] = r.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Xf({
      ...r,
      checks: [],
      ...Oe(u),
      entries: c
    });
  }, t.exclude = (a, u) => {
    const c = { ...r.entries };
    for (const f of a)
      if (s.has(f))
        delete c[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Xf({
      ...r,
      checks: [],
      ...Oe(u),
      entries: c
    });
  };
});
function mk(t, r) {
  const s = Array.isArray(t) ? Object.fromEntries(t.map((a) => [a, a])) : t;
  return new Xf({
    type: "enum",
    entries: s,
    ...Oe(r)
  });
}
const gk = /* @__PURE__ */ de("ZodTransform", (t, r) => {
  SC.init(t, r), Rt.init(t, r), t._zod.parse = (s, a) => {
    if (a.direction === "backward")
      throw new l0(t.constructor.name);
    s.addIssue = (c) => {
      if (typeof c == "string")
        s.issues.push(lo(c, s.value, r));
      else {
        const f = c;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = s.value), f.inst ?? (f.inst = t), s.issues.push(lo(f));
      }
    };
    const u = r.transform(s.value, s);
    return u instanceof Promise ? u.then((c) => (s.value = c, s)) : (s.value = u, s);
  };
});
function vk(t) {
  return new gk({
    type: "transform",
    transform: t
  });
}
const T0 = /* @__PURE__ */ de("ZodOptional", (t, r) => {
  wC.init(t, r), Rt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function r_(t) {
  return new T0({
    type: "optional",
    innerType: t
  });
}
const yk = /* @__PURE__ */ de("ZodNullable", (t, r) => {
  EC.init(t, r), Rt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function a_(t) {
  return new yk({
    type: "nullable",
    innerType: t
  });
}
const _k = /* @__PURE__ */ de("ZodDefault", (t, r) => {
  CC.init(t, r), Rt.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
});
function bk(t, r) {
  return new _k({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : h0(r);
    }
  });
}
const Sk = /* @__PURE__ */ de("ZodPrefault", (t, r) => {
  kC.init(t, r), Rt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function wk(t, r) {
  return new Sk({
    type: "prefault",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : h0(r);
    }
  });
}
const N0 = /* @__PURE__ */ de("ZodNonOptional", (t, r) => {
  AC.init(t, r), Rt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function Ek(t, r) {
  return new N0({
    type: "nonoptional",
    innerType: t,
    ...Oe(r)
  });
}
const Ck = /* @__PURE__ */ de("ZodCatch", (t, r) => {
  xC.init(t, r), Rt.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
});
function kk(t, r) {
  return new Ck({
    type: "catch",
    innerType: t,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const Ak = /* @__PURE__ */ de("ZodPipe", (t, r) => {
  TC.init(t, r), Rt.init(t, r), t.in = r.in, t.out = r.out;
});
function i_(t, r) {
  return new Ak({
    type: "pipe",
    in: t,
    out: r
    // ...util.normalizeParams(params),
  });
}
const xk = /* @__PURE__ */ de("ZodReadonly", (t, r) => {
  NC.init(t, r), Rt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function Tk(t) {
  return new xk({
    type: "readonly",
    innerType: t
  });
}
const Nk = /* @__PURE__ */ de("ZodCustom", (t, r) => {
  OC.init(t, r), Rt.init(t, r);
});
function Ok(t, r = {}) {
  return v4(Nk, t, r);
}
function Mk(t) {
  return y4(t);
}
const s_ = {
  ENTRY: "EntryRevision",
  GLOBAL: "GlobalRevision"
}, Ff = "placeholder-chatHistory", Rk = go({
  justification: Zt().describe("A brief, friendly explanation of the changes made."),
  name: Zt().describe("The entry's new name/comment."),
  triggers: Da(Zt()).describe("The entry's new keywords/triggers."),
  content: Zt().describe("The entry's new content.")
}), jk = go({
  worldName: Zt().describe("The name of the world where the new entry should be added."),
  name: Zt().describe("The new entry's name/comment."),
  triggers: Da(Zt()).describe("The new entry's triggers."),
  content: Zt().describe("The new entry's content.")
}), Dk = go({
  worldName: Zt().describe("The name of the world containing the entry to change."),
  originalName: Zt().describe("The original name/comment of the entry to change, used for identification."),
  newName: Zt().optional().describe("The entry's new name/comment. If omitted, the name is not changed."),
  triggers: Da(Zt()).optional().describe("The entry's new list of triggers."),
  content: Zt().optional().describe("The entry's new content.")
}), zk = go({
  worldName: Zt().describe("The name of the world containing the entry to remove."),
  name: Zt().describe("The name/comment of the entry to remove.")
}), Pk = go({
  justification: Zt().describe("A brief, friendly explanation of all the operations performed."),
  add: Da(jk).optional().describe("A list of new entries to add."),
  change: Da(Dk).optional().describe("A list of existing entries to change."),
  remove: Da(zk).optional().describe("A list of existing entries to remove.")
});
function Tf(t) {
  return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function Qf(t, r = 0) {
  const s = "  ".repeat(r);
  if (Array.isArray(t))
    return t.map((a) => a !== null && typeof a == "object" ? `${s}<item>
${Qf(a, r + 1)}${s}</item>
` : `${s}<item>${Tf(a)}</item>
`).join("");
  if (t !== null && typeof t == "object") {
    let a = "";
    for (const u of Object.keys(t)) {
      const c = t[u];
      c !== null && typeof c == "object" ? a += `${s}<${u}>
${Qf(c, r + 1)}${s}</${u}>
` : a += `${s}<${u}>${Tf(c)}</${u}>
`;
    }
    return a;
  }
  return `${s}<value>${Tf(t)}</value>
`;
}
function Lk(t, r) {
  const s = Ma(t);
  return r === "xml" ? `<root>
${Qf(s, 1)}</root>` : JSON.stringify(s, null, 2);
}
function Ik(...t) {
  for (const r of t) if (r !== void 0) return r;
}
function Bk(t) {
  return Array.isArray(t) ? t.find((r) => r !== "null") ?? t[0] : t;
}
function Ma(t) {
  if (!t || typeof t != "object") return null;
  const r = Array.isArray(t.examples) ? t.examples[0] : void 0, s = Ik(t.example, r, t.default);
  if (s !== void 0) return s;
  if (t.const !== void 0) return t.const;
  if (Array.isArray(t.enum) && t.enum.length) return t.enum[0];
  const a = Array.isArray(t.anyOf) ? t.anyOf[0] : Array.isArray(t.oneOf) ? t.oneOf[0] : void 0;
  if (a) return Ma(a);
  switch (Bk(t.type)) {
    case "object": {
      const c = {}, f = t.properties || {};
      for (const m of Object.keys(f))
        c[m] = Ma(f[m]);
      return t.additionalProperties && typeof t.additionalProperties == "object" && (c.additionalProperty = Ma(t.additionalProperties)), c;
    }
    case "array": {
      const c = t.items ?? {};
      return [Ma(c)];
    }
    case "string":
      return t.title || t.description || "string";
    case "integer":
    case "number":
      return 0;
    case "boolean":
      return !1;
    case "null":
      return null;
    default:
      return t.properties || t.additionalProperties ? Ma({ ...t, type: "object" }) : t.items ? Ma({ ...t, type: "array" }) : null;
  }
}
const Uk = new q_({
  ignoreAttributes: !0,
  textNodeName: "#text",
  trimValues: !0,
  allowBooleanAttributes: !0
});
function Kf(t, r) {
  if (!(!r || !t || !r.properties))
    for (const s in r.properties) {
      if (!t.hasOwnProperty(s)) continue;
      const a = r.properties[s];
      let u = t[s];
      if (a.type === "array" && !Array.isArray(u) && (u === "" || u === null ? u = [] : u = [u], t[s] = u), a.type === "array" && a.items?.type === "object" && Array.isArray(u)) {
        const c = a.items.required || [], f = a.items.properties ? Object.keys(a.items.properties) : [], m = c.length > 0 ? c : f;
        if (m.length > 0) {
          const p = [];
          let v = !1;
          for (const g of u) {
            const E = (y) => typeof y != "object" || y === null ? !1 : m.some((S) => Object.prototype.hasOwnProperty.call(y, S));
            if (E(g))
              p.push(g);
            else {
              let y = !1;
              if (typeof g == "object" && g !== null)
                for (const S in g) {
                  const h = g[S];
                  if (E(h)) {
                    p.push(h), y = !0, v = !0;
                    break;
                  }
                  if (Array.isArray(h) && h.length > 0 && E(h[0])) {
                    p.push(...h), y = !0, v = !0;
                    break;
                  }
                }
              y || p.push(g);
            }
          }
          v && (u = p, t[s] = u);
        }
      }
      a.type === "object" && typeof u == "object" && u !== null ? Kf(u, a) : a.type === "array" && a.items?.type === "object" && Array.isArray(u) && u.forEach((c) => Kf(c, a.items)), a.type === "string" && typeof u != "string" ? t[s] = String(u) : a.type === "array" && a.items?.type === "string" && Array.isArray(u) && (t[s] = u.map(String));
    }
}
function Hk(t, r, s = {}) {
  const a = /```(?:\w+\n|\n)?([\s\S]*?)```/, u = t.match(a);
  let c = u ? u[1].trim() : t.trim();
  const { previousContent: f } = s;
  f && (c = f + c.trimEnd());
  try {
    switch (r) {
      case "xml":
        const m = gS.validate(c);
        if (m !== !0)
          throw new Error(`Model response is not valid XML: ${m.err.msg}`);
        let p = Uk.parse(c);
        return p.root && (p = p.root), s.schema && Kf(p, s.schema), p;
      case "json":
        return JSON.parse(c);
      case "none":
        return c;
      default:
        throw new Error(`Unsupported format specified: ${r}`);
    }
  } catch (m) {
    throw console.error(`Error parsing response in format '${r}':`, m), console.error("Raw content received:", t), r === "xml" ? m.message.startsWith("Model response is not valid XML:") ? m : new Error(`Model response is not valid XML: ${m.message}`) : r === "json" ? new Error("Model response is not valid JSON.") : new Error(`Failed to parse response as ${r}: ${m.message}`);
  }
}
const qk = new w3();
async function Jf(t, r, s, a, u, c) {
  const f = !a.json_schema && !1;
  let m = "";
  return G_(t, async (p) => new Promise((v, g) => {
    const E = new AbortController(), y = c ?? E.signal;
    c && c.addEventListener("abort", () => E.abort(), { once: !0 }), qk.generateRequest(
      {
        profileId: p,
        prompt: r,
        maxTokens: s,
        custom: { stream: f, signal: y },
        overridePayload: a
      },
      {
        abortController: E,
        onEntry: f ? async (S, h) => {
          const C = h.text;
        } : void 0,
        onFinish: (S, h, C) => y.aborted ? g(new DOMException("Request aborted by user", "AbortError")) : C ? g(C) : h === void 0 && C === void 0 ? g(new DOMException("Request aborted by user", "AbortError")) : h ? C ? g(C) : v(u ? { content: m } : h) : g(new Error("No data received from LLM"))
      }
    );
  }));
}
async function Zk(t, r, s, a) {
  const u = await Jf(t, r, s, {}, void 0, a);
  if (!u?.content)
    throw new Error("Plain request failed to return content.");
  return u.content;
}
async function o_(t, r, s, a, u, c, f) {
  const m = It.getSettings();
  let p, v;
  const g = b4(s);
  if (u === "native") {
    if (p = await Jf(
      t,
      r,
      c,
      {
        json_schema: { name: a, strict: !0, value: g }
      },
      void 0,
      f
    ), !p?.content)
      throw new Error(`Structured request for ${a} failed to return content.`);
    v = typeof p.content == "string" ? JSON.parse(p.content) : p.content;
  } else {
    const y = u, S = Lk(g, y), h = JSON.stringify(g, null, 2), C = y === "json" ? "reviseJsonPrompt" : "reviseXmlPrompt", x = m.prompts[C]?.content;
    if (!x)
      throw new Error(`Prompt template for mode "${y}" not found.`);
    const O = {
      example_response: S,
      schema: h
    }, P = { role: "system", content: bn.compile(x, { noEscape: !0, strict: !0 })(O) };
    if (p = await Jf(
      t,
      [...r, P],
      c,
      {},
      void 0,
      f
    ), !p?.content)
      throw new Error(`Structured request for ${a} failed to return content.`);
    v = Hk(p.content, y, { schema: g });
  }
  const E = s.safeParse(v);
  if (!E.success) {
    const y = `Model response failed schema validation for ${a}. Check console for details.`;
    throw console.error("Zod validation failed:", E.error.issues), console.error("Raw content parsed:", v), await ge("error", y), new Error(y);
  }
  return E.data;
}
const Gk = ({ originalContent: t, newContent: r }) => {
  const s = ie.useMemo(() => {
    const a = o0(t, r);
    let u = "", c = "";
    return a.forEach((f) => {
      const m = f.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), v = `<span style="${f.added ? "color: green; background-color: #e6ffed;" : f.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${m}</span>`;
      f.added || (u += v), f.removed || (c += v);
    }), { originalHtml: u, newHtml: c };
  }, [t, r]);
  return /* @__PURE__ */ A.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ A.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: s.originalHtml } }),
    /* @__PURE__ */ A.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: s.newHtml } })
  ] });
}, O0 = ({ before: t, after: r }) => {
  const s = ie.useMemo(() => {
    const a = [];
    return !t || !r || ((t.comment || "") !== (r.comment || "") && a.push({ label: "Name", before: t.comment || "", after: r.comment || "" }), (t.key || []).join(", ") !== (r.key || []).join(", ") && a.push({ label: "Triggers", before: (t.key || []).join(", "), after: (r.key || []).join(", ") }), (t.content || "") !== (r.content || "") && a.push({ label: "Content", before: t.content || "", after: r.content || "" })), a;
  }, [t, r]);
  return /* @__PURE__ */ A.jsx(A.Fragment, { children: s.map(({ label: a, before: u, after: c }) => /* @__PURE__ */ A.jsxs("div", { className: "compare-state-item", children: [
    /* @__PURE__ */ A.jsx("h4", { children: a }),
    /* @__PURE__ */ A.jsxs("div", { className: "compare-state-header", children: [
      /* @__PURE__ */ A.jsx("span", { children: "Before" }),
      /* @__PURE__ */ A.jsx("span", { children: "After" })
    ] }),
    /* @__PURE__ */ A.jsx(Gk, { originalContent: u, newContent: c })
  ] }, a)) });
}, Vk = ({ before: t, after: r }) => {
  const { added: s, removed: a, changed: u } = ie.useMemo(() => {
    const f = t || {}, m = /* @__PURE__ */ new Map();
    Object.entries(f).forEach(([y, S]) => {
      S.forEach((h) => {
        const C = `${y}::${h.uid}`;
        m.set(C, { worldName: y, entry: h });
      });
    });
    const p = [], v = [], g = [], E = Object.entries(r || {}).flatMap(
      ([y, S]) => S.map((h) => ({ worldName: y, entry: h }))
    );
    for (const { worldName: y, entry: S } of E) {
      const h = `${y}::${S.uid}`;
      if (m.has(h)) {
        const x = m.get(h).entry;
        (x.comment !== S.comment || x.content !== S.content || (x.key || []).join(",") !== (S.key || []).join(",")) && g.push({ worldName: y, before: x, after: S }), m.delete(h);
      } else
        p.push({ worldName: y, entry: S });
    }
    return m.forEach(({ worldName: y, entry: S }) => {
      v.push({ worldName: y, entry: S });
    }), { added: p, removed: v, changed: g };
  }, [t, r]), c = s.length > 0 || a.length > 0 || u.length > 0;
  return /* @__PURE__ */ A.jsx("div", { className: "global-diff", children: c ? /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
    s.length > 0 && /* @__PURE__ */ A.jsxs("div", { className: "diff-section", children: [
      /* @__PURE__ */ A.jsxs("h4", { children: [
        "Added Entries (",
        s.length,
        ")"
      ] }),
      s.map(({ worldName: f, entry: m }) => /* @__PURE__ */ A.jsxs("div", { className: "diff-entry added", children: [
        /* @__PURE__ */ A.jsxs("div", { className: "diff-entry-header", children: [
          m.comment,
          " ",
          /* @__PURE__ */ A.jsxs("span", { children: [
            "(in ",
            f,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ A.jsx("div", { className: "diff-entry-content", children: m.content })
      ] }, `${f}::${m.uid}`))
    ] }),
    a.length > 0 && /* @__PURE__ */ A.jsxs("div", { className: "diff-section", children: [
      /* @__PURE__ */ A.jsxs("h4", { children: [
        "Removed Entries (",
        a.length,
        ")"
      ] }),
      a.map(({ worldName: f, entry: m }) => /* @__PURE__ */ A.jsxs("div", { className: "diff-entry removed", children: [
        /* @__PURE__ */ A.jsxs("div", { className: "diff-entry-header", children: [
          m.comment,
          " ",
          /* @__PURE__ */ A.jsxs("span", { children: [
            "(from ",
            f,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ A.jsx("div", { className: "diff-entry-content", children: m.content })
      ] }, `${f}::${m.uid}`))
    ] }),
    u.length > 0 && /* @__PURE__ */ A.jsxs("div", { className: "diff-section", children: [
      /* @__PURE__ */ A.jsxs("h4", { children: [
        "Changed Entries (",
        u.length,
        ")"
      ] }),
      u.map(({ worldName: f, before: m, after: p }) => /* @__PURE__ */ A.jsxs("div", { className: "diff-entry changed", children: [
        /* @__PURE__ */ A.jsxs("div", { className: "diff-entry-header", children: [
          p.comment,
          " ",
          /* @__PURE__ */ A.jsxs("span", { children: [
            "(in ",
            f,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ A.jsx(O0, { before: m, after: p })
      ] }, `${f}::${p.uid}`))
    ] })
  ] }) : /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes were detected in the entries for this step." }) });
}, bh = ({ sessionType: t, before: r, after: s }) => !r && !s ? /* @__PURE__ */ A.jsxs("div", { className: "compare-state-popup", children: [
  /* @__PURE__ */ A.jsx("h3", { children: "Changes in this step" }),
  /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No state information available for this step." })
] }) : /* @__PURE__ */ A.jsxs("div", { className: "compare-state-popup", children: [
  /* @__PURE__ */ A.jsx("h3", { children: "Changes in this step" }),
  /* @__PURE__ */ A.jsx("div", { className: "compare-state-list", children: t === "global" ? /* @__PURE__ */ A.jsx(Vk, { before: r, after: s }) : /* @__PURE__ */ A.jsx(O0, { before: r, after: s }) })
] }), $k = ({ currentState: t, initialState: r }) => {
  const [s, a] = ie.useState(!1), u = ie.useMemo(
    () => [
      { label: "Name", value: t.comment },
      { label: "Triggers", value: t.key.join(", ") },
      { label: "Content", value: t.content }
    ],
    [t]
  );
  return /* @__PURE__ */ A.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h3", { children: s ? "Comparing with Original State" : "Current Entry State" }),
      /* @__PURE__ */ A.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ A.jsx("input", { type: "checkbox", checked: s, onChange: (c) => a(c.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ A.jsx("div", { className: "current-state-content", children: s ? /* @__PURE__ */ A.jsx(bh, { sessionType: "entry", before: r, after: t }) : u.map(({ label: c, value: f }) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
      /* @__PURE__ */ A.jsx("label", { children: c }),
      /* @__PURE__ */ A.jsx("div", { className: "state-value", children: f || /* @__PURE__ */ A.jsx("span", { className: "subtle-text", children: "empty" }) })
    ] }, c)) })
  ] });
}, Yk = ({ currentState: t, initialState: r }) => {
  const [s, a] = ie.useState(!1);
  return /* @__PURE__ */ A.jsxs("div", { className: "current-state-popup global-state-popup", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h3", { children: s ? "Comparing with Original State" : "Current Suggested Entries" }),
      /* @__PURE__ */ A.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ A.jsx("input", { type: "checkbox", checked: s, onChange: (u) => a(u.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ A.jsx("div", { className: "current-state-content", children: s ? /* @__PURE__ */ A.jsx(bh, { sessionType: "global", before: r, after: t }) : Object.entries(t).map(([u, c]) => /* @__PURE__ */ A.jsxs("div", { className: "world-group", children: [
      /* @__PURE__ */ A.jsx("h4", { children: u }),
      c.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle-text", children: "No entries in this world." }) : c.map((f) => /* @__PURE__ */ A.jsxs("div", { className: "state-field-group", children: [
        /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ A.jsx("label", { children: "Name" }),
          /* @__PURE__ */ A.jsx("div", { className: "state-value", children: f.comment || /* @__PURE__ */ A.jsx("span", { className: "subtle-text", children: "empty" }) })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ A.jsx("label", { children: "Triggers" }),
          /* @__PURE__ */ A.jsx("div", { className: "state-value", children: (f.key || []).join(", ") || /* @__PURE__ */ A.jsx("span", { className: "subtle-text", children: "empty" }) })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ A.jsx("label", { children: "Content" }),
          /* @__PURE__ */ A.jsx("div", { className: "state-value", children: f.content || /* @__PURE__ */ A.jsx("span", { className: "subtle-text", children: "empty" }) })
        ] })
      ] }, f.uid))
    ] }, u)) })
  ] });
}, Ri = SillyTavern.getContext(), Xk = (t, r) => {
  const s = structuredClone(t);
  return s.comment = r.name, s.key = r.triggers, s.content = r.content, s;
}, Fk = (t, r) => {
  const s = structuredClone(t);
  if (r.remove)
    for (const a of r.remove) {
      const { worldName: u, name: c } = a;
      s[u] && (s[u] = s[u].filter((f) => f.comment !== c));
    }
  if (r.change)
    for (const a of r.change) {
      const { worldName: u, originalName: c } = a, f = s[u]?.find((m) => m.comment === c);
      f ? (a.newName !== void 0 && (f.comment = a.newName), a.triggers !== void 0 && (f.key = a.triggers), a.content !== void 0 && (f.content = a.content)) : (console.warn(`[WREC] Could not find entry to change: "${c}" in world "${u}"`), ge("warning", `Could not find entry to change: "${c}" in world "${u}"`));
    }
  if (r.add)
    for (const a of r.add) {
      const { worldName: u, name: c, triggers: f, content: m } = a;
      s[u] || (s[u] = []);
      const p = { entries: Object.fromEntries(s[u].map((g) => [g.uid, g])) }, v = rh(u, p);
      v && (v.comment = c, v.key = f, v.content = m, s[u].push(v));
    }
  return s;
}, Qk = ({ initialState: t, onSave: r, onClose: s }) => {
  const [a, u] = ie.useState(t.comment), [c, f] = ie.useState(t.key.join(", ")), [m, p] = ie.useState(t.content), v = () => {
    const g = {
      ...structuredClone(t),
      comment: a,
      key: c.split(",").map((E) => E.trim()).filter(Boolean),
      content: m
    };
    r(g);
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h3", { children: "Editing Entry State" }),
      /* @__PURE__ */ A.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ A.jsxs(Ee, { onClick: v, children: [
          /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
          " Save Changes"
        ] }),
        /* @__PURE__ */ A.jsxs(Ee, { onClick: s, className: "danger_button", children: [
          /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
          " Cancel"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "current-state-content", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ A.jsx("label", { children: "Name" }),
        /* @__PURE__ */ A.jsx(t0, { type: "text", value: a, onInput: (g) => u(g.currentTarget.value) })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ A.jsx("label", { children: "Triggers (comma-separated)" }),
        /* @__PURE__ */ A.jsx(Zn, { value: c, onChange: (g) => f(g.target.value), rows: 2 })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ A.jsx("label", { children: "Content" }),
        /* @__PURE__ */ A.jsx(Zn, { value: m, onChange: (g) => p(g.target.value), rows: 8 })
      ] })
    ] })
  ] });
}, Kk = ({
  session: t,
  onBack: r,
  onApply: s,
  onSessionUpdate: a,
  initialState: u,
  chatContextOptions: c
}) => {
  const [f, m] = ie.useState(t.messages), [p, v] = ie.useState(""), [g, E] = ie.useState(!1), [y, S] = ie.useState(null), [h, C] = ie.useState(!1), [x, O] = ie.useState(!1), [T, P] = ie.useState(null), [l, _] = ie.useState(""), w = ie.useRef(null), k = ie.useRef(null);
  ie.useEffect(() => {
    w.current?.scrollIntoView({ behavior: "smooth" });
  }, [f]);
  const R = ie.useCallback(
    (Y, U, te) => {
      if (JSON.stringify(te) === JSON.stringify(U))
        return Y;
      const ne = It.getSettings();
      let ue = "";
      if (t.type === "global") {
        const re = ne.prompts.reviseGlobalStateUpdate?.content, pe = ne.prompts.reviseGlobalStateUpdateAddedModified?.content, Re = ne.prompts.reviseGlobalStateUpdateRemoved?.content;
        if (!re || !pe || !Re) return Y;
        const Se = te || {}, me = U || {}, fe = /* @__PURE__ */ new Map();
        Object.entries(Se).forEach(([dt, ye]) => {
          ye.forEach((_e) => {
            fe.set(`${dt}::${_e.uid}`, _e);
          });
        });
        const we = /* @__PURE__ */ new Map();
        Object.entries(me).forEach(([dt, ye]) => {
          ye.forEach((_e) => {
            we.set(`${dt}::${_e.uid}`, _e);
          });
        });
        const Le = {}, We = [];
        if (we.forEach((dt, ye) => {
          const [_e] = ye.split("::"), qe = fe.get(ye);
          let Ze = !1;
          if (!qe)
            Ze = !0;
          else {
            const et = (dt.content || "") !== (qe.content || ""), Vn = (dt.comment || "") !== (qe.comment || ""), zn = (dt.key || []).sort().join(",") !== (qe.key || []).sort().join(",");
            (et || Vn || zn) && (Ze = !0);
          }
          Ze && (Le[_e] || (Le[_e] = []), Le[_e].push(dt));
        }), fe.forEach((dt, ye) => {
          if (!we.has(ye)) {
            const [_e] = ye.split("::");
            We.push({ worldName: _e, comment: dt.comment });
          }
        }), Object.keys(Le).length === 0 && We.length === 0)
          return Y;
        const Fe = bn.compile(pe, { noEscape: !0 })({
          changedLorebooks: Le
        }), Dn = bn.compile(Re, { noEscape: !0 })({ removedEntries: We });
        ue = bn.compile(re, { noEscape: !0 })({
          addedModifiedContent: Fe,
          removedContent: Dn
        });
      } else {
        const re = U;
        ue = `The following is the current state of the single lorebook entry you are editing. Base your response on this current state.

## WORLD NAME: ${t.worldName}
### (NAME: ${re.comment})
Triggers: ${(re.key || []).join(", ")}
Content: ${re.content}`;
      }
      if (ue = Ri.substituteParams(ue.trim()), ue) {
        const re = {
          id: `msg-${Date.now()}-state`,
          role: "system",
          content: ue,
          isStateUpdate: !0
        };
        return [...Y, re];
      }
      return Y;
    },
    [t.type, t.worldName]
  ), L = ie.useCallback(
    async (Y, U, te, ne) => {
      const ue = It.getSettings();
      if (!t.profileId) {
        ge("warning", "Please select a connection profile for this session.");
        return;
      }
      k.current = new AbortController(), te(), E(!0);
      try {
        const re = [], pe = Ri.extensionSettings.connectionManager?.profiles?.find(
          (fe) => fe.id === t.profileId
        ), Re = pe?.api ? Ri.CONNECT_API_MAP[pe.api].selected : void 0;
        if (!Re) {
          ge("warning", "No API selected for this session.");
          return;
        }
        for (const fe of Y)
          if (fe.id === Ff) {
            if (sn === void 0 && !Ft) continue;
            const we = await E_(Re, c);
            we.warnings?.length && we.warnings.forEach((Le) => ge("warning", Le)), re.push(...we.result);
          } else
            re.push(fe);
        const Se = Y.slice(0, Y.length - (U ? 0 : 1)).reverse().find((fe) => fe.stateSnapshot)?.stateSnapshot ?? u;
        let me = "";
        if (t.type === "global") {
          const fe = ue.prompts.currentLorebooks?.content;
          if (fe) {
            const we = { currentLorebooks: Se };
            me = bn.compile(fe, { noEscape: !0 })(we);
          }
        } else {
          const fe = Se;
          me = `The following is the current state of the single lorebook entry you are editing. Base your response on this current state.

## WORLD NAME: ${t.worldName}
### (NAME: ${fe.comment})
Triggers: ${(fe.key || []).join(", ")}
Content: ${fe.content}`;
        }
        if (me = Ri.substituteParams(me.trim()), me) {
          const fe = {
            id: `temp-state-${Date.now()}`,
            role: "system",
            content: me
          }, we = re.pop();
          re.push(fe), we && re.push(we);
        }
        if (t.isReadonly) {
          re.push({
            id: `msg-${Date.now()}-readonly`,
            role: "system",
            content: "Readonly mode enabled. You can only discuss with the user without making changes."
          });
          const fe = await Zk(
            t.profileId,
            re,
            ue.maxResponseToken,
            k.current.signal
          ), we = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: fe
          }, Le = [...Y, we];
          m(Le), a({ ...t, messages: Le });
        } else {
          let fe, we;
          if (t.type === "entry") {
            const Fe = await o_(
              t.profileId,
              re,
              Rk,
              s_.ENTRY,
              t.promptEngineeringMode,
              ue.maxResponseToken,
              k.current.signal
            );
            fe = Xk(Se, Fe), we = Fe.justification;
          } else {
            const Fe = await o_(
              t.profileId,
              re,
              Pk,
              s_.GLOBAL,
              t.promptEngineeringMode,
              ue.maxResponseToken,
              k.current.signal
            );
            fe = Fk(Se, Fe), we = Fe.justification;
          }
          const Le = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: we,
            stateSnapshot: fe
          };
          let We = [...Y, Le];
          We = R(We, fe, Se), m(We), a({ ...t, messages: We });
        }
      } catch (re) {
        re.name === "AbortError" ? ge("info", "Request was cancelled.") : (console.error("Revise request failed:", re), ge("error", `Request failed: ${re.message}`)), ne();
      } finally {
        E(!1), k.current = null;
      }
    },
    [t, a, u, c, R]
  ), j = ie.useCallback(async () => {
    if (!p.trim() || g) return;
    const Y = { id: `msg-${Date.now()}`, role: "user", content: p.trim() }, U = f;
    await L(
      [...f, Y],
      !1,
      () => {
        m([...f, Y]), v("");
      },
      () => m(U)
    );
  }, [p, g, f, L]), D = ie.useCallback(async () => {
    if (g || f.length === 0) return;
    const Y = f;
    let U = [...f];
    const te = f.findLastIndex((ne) => !ne.isStateUpdate);
    te > -1 && f[te].role === "assistant" && (U = f.slice(0, te)), await L(
      U,
      !0,
      () => m(U),
      () => m(Y)
    );
  }, [g, f, L]), q = () => {
    const Y = f.slice().reverse().find((U) => U.stateSnapshot)?.stateSnapshot ?? u;
    s(Y), r();
  }, G = (Y) => {
    const U = f.findIndex((ue) => ue.id === Y);
    if (U < 0 || !f[U].stateSnapshot) return;
    const te = f[U].stateSnapshot;
    let ne = u;
    for (let ue = U - 1; ue >= 0; ue--)
      if (f[ue].stateSnapshot) {
        ne = f[ue].stateSnapshot;
        break;
      }
    S({ before: ne, after: te });
  }, V = (Y) => {
    P(Y.id), _(Y.content);
  }, K = () => {
    P(null), _("");
  }, M = async () => {
    if (!T) return;
    const Y = f.findIndex((pe) => pe.id === T);
    if (Y === -1 || !await Ri.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const te = f, ne = f.slice(0, Y), ue = { ...f[Y], content: l }, re = [...ne, ue];
    K(), await L(
      re,
      !1,
      () => m(re),
      () => m(te)
    );
  }, B = async (Y) => {
    const U = f.findIndex((re) => re.id === Y);
    if (U === -1) return;
    const te = !!f[U].isInitial;
    if (!await Ri.Popup.show.confirm(
      "Delete Message",
      te ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    const ue = te ? f.filter((re) => re.isInitial && re.id !== Y) : f.slice(0, U);
    m(ue), a({ ...t, messages: ue }), ge("info", "Message history has been updated.");
  }, J = (Y) => {
    const U = f.slice().reverse().find((ue) => ue.stateSnapshot)?.stateSnapshot ?? u, te = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: "I made a change manually.",
      stateSnapshot: Y
    };
    let ne = [...f, te];
    ne = R(ne, Y, U), m(ne), a({ ...t, messages: ne }), O(!1);
  }, ae = f.slice().reverse().find((Y) => Y.stateSnapshot)?.stateSnapshot ?? u, I = f.filter((Y) => !Y.isStateUpdate), X = I.filter((Y) => Y.isInitial), ce = I.filter((Y) => !Y.isInitial);
  return /* @__PURE__ */ A.jsxs("div", { className: "revise-session-chat", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h2", { children: t.name }),
      /* @__PURE__ */ A.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
          /* @__PURE__ */ A.jsx(
            "input",
            {
              type: "checkbox",
              checked: t.isReadonly ?? !1,
              onChange: (Y) => a({ ...t, isReadonly: Y.target.checked })
            }
          ),
          "Readonly Mode"
        ] }),
        /* @__PURE__ */ A.jsx("div", { style: { maxWidth: "200px" }, children: /* @__PURE__ */ A.jsx(
          n0,
          {
            initialSelectedProfileId: t.profileId,
            onChange: (Y) => a({ ...t, profileId: Y?.id ?? "" })
          }
        ) }),
        /* @__PURE__ */ A.jsxs(
          "select",
          {
            className: "text_pole",
            value: t.promptEngineeringMode,
            onChange: (Y) => a({ ...t, promptEngineeringMode: Y.target.value }),
            title: "Prompt Engineering Mode",
            disabled: t.isReadonly,
            style: { minWidth: "fit-content", width: "unset" },
            children: [
              /* @__PURE__ */ A.jsx("option", { value: "native", children: "Native" }),
              /* @__PURE__ */ A.jsx("option", { value: "json", children: "JSON" }),
              /* @__PURE__ */ A.jsx("option", { value: "xml", children: "XML" })
            ]
          }
        ),
        /* @__PURE__ */ A.jsx(Ee, { onClick: () => C(!0), title: "View current state", children: "View State" }),
        t.type === "entry" && /* @__PURE__ */ A.jsx(Ee, { onClick: () => O(!0), title: "Manually edit the current state", children: "Edit State" }),
        /* @__PURE__ */ A.jsx(Ee, { onClick: r, title: "Back to sessions", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ A.jsxs(Ee, { onClick: q, title: "Apply Changes and Close", children: [
          /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
          " Apply"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "chat-messages", children: [
      X.length > 0 && /* @__PURE__ */ A.jsxs("details", { className: "initial-messages-container", children: [
        /* @__PURE__ */ A.jsx("summary", { children: "View Initial Context" }),
        /* @__PURE__ */ A.jsx("div", { className: "initial-messages-content", children: X.map(
          (Y) => T === Y.id ? /* @__PURE__ */ A.jsxs("div", { className: "message-editor", children: [
            /* @__PURE__ */ A.jsx(Zn, { value: l, onChange: (U) => _(U.target.value), rows: 5 }),
            /* @__PURE__ */ A.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ A.jsxs(Ee, { onClick: M, children: [
                /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ A.jsxs(Ee, { onClick: K, children: [
                /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, Y.id) : /* @__PURE__ */ A.jsxs("div", { className: `message-bubble-wrapper initial-context ${Y.role}`, children: [
            /* @__PURE__ */ A.jsx("div", { className: `message-bubble ${Y.role} initial`, children: /* @__PURE__ */ A.jsx("div", { className: "message-content", children: Y.content }) }),
            !g && Y.id !== Ff && /* @__PURE__ */ A.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ A.jsx(
                Ee,
                {
                  className: "message-action-button",
                  onClick: () => V(Y),
                  title: "Edit Context",
                  children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-pencil" })
                }
              ),
              /* @__PURE__ */ A.jsx(
                Ee,
                {
                  className: "message-action-button danger_button",
                  onClick: () => B(Y.id),
                  title: "Delete Context",
                  children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" })
                }
              )
            ] })
          ] }, Y.id)
        ) })
      ] }),
      ce.map(
        (Y) => T === Y.id ? /* @__PURE__ */ A.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ A.jsx(Zn, { value: l, onChange: (U) => _(U.target.value), rows: 3 }),
          /* @__PURE__ */ A.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ A.jsxs(Ee, { onClick: M, children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
              " Save & Fork"
            ] }),
            /* @__PURE__ */ A.jsxs(Ee, { onClick: K, children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, Y.id) : /* @__PURE__ */ A.jsxs("div", { className: `message-bubble-wrapper ${Y.role}`, children: [
          /* @__PURE__ */ A.jsxs("div", { className: "message-actions", children: [
            Y.role === "user" && !Y.stateSnapshot && !g && /* @__PURE__ */ A.jsx(
              Ee,
              {
                className: "message-action-button",
                onClick: () => V(Y),
                title: "Edit and Fork",
                children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-pencil" })
              }
            ),
            Y.stateSnapshot && !g && /* @__PURE__ */ A.jsx(
              Ee,
              {
                className: "message-action-button",
                onClick: () => G(Y.id),
                title: "Compare changes",
                children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-code-compare" })
              }
            ),
            !g && /* @__PURE__ */ A.jsx(
              Ee,
              {
                className: "message-action-button danger_button",
                onClick: () => B(Y.id),
                title: "Delete Message",
                children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" })
              }
            )
          ] }),
          /* @__PURE__ */ A.jsx("div", { className: `message-bubble ${Y.role}`, children: /* @__PURE__ */ A.jsx("div", { className: "message-content", children: Y.content }) })
        ] }, Y.id)
      ),
      ce.length > 0 && !g && /* @__PURE__ */ A.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ A.jsxs(Ee, { onClick: D, title: "Regenerate response", children: [
        /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Regenerate"
      ] }) }),
      g && /* @__PURE__ */ A.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ A.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ A.jsx(
          Ee,
          {
            onClick: () => k.current?.abort(),
            className: "danger_button",
            title: "Cancel Request",
            children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-stop" })
          }
        )
      ] }),
      /* @__PURE__ */ A.jsx("div", { ref: w })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ A.jsx(
        Zn,
        {
          value: p,
          onChange: (Y) => v(Y.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: g || !!T,
          onKeyDown: (Y) => {
            Y.key === "Enter" && !Y.shiftKey && (Y.preventDefault(), j());
          }
        }
      ),
      /* @__PURE__ */ A.jsx(Ee, { onClick: j, disabled: g || !p.trim() || !!T, children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-paper-plane" }) })
    ] }),
    y && /* @__PURE__ */ A.jsx(
      tr,
      {
        type: Lt.DISPLAY,
        content: /* @__PURE__ */ A.jsx(bh, { sessionType: t.type, before: y.before, after: y.after }),
        onComplete: () => S(null),
        options: { wide: !0, large: !0 }
      }
    ),
    h && /* @__PURE__ */ A.jsx(
      tr,
      {
        type: Lt.DISPLAY,
        content: t.type === "entry" ? /* @__PURE__ */ A.jsx($k, { currentState: ae, initialState: u }) : /* @__PURE__ */ A.jsx(
          Yk,
          {
            currentState: ae,
            initialState: u
          }
        ),
        onComplete: () => C(!1),
        options: { wide: !0, large: !0 }
      }
    ),
    x && t.type === "entry" && /* @__PURE__ */ A.jsx(
      tr,
      {
        type: Lt.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          Qk,
          {
            initialState: ae,
            onSave: (Y) => {
              J(Y), O(!1);
            },
            onClose: () => O(!1)
          }
        ),
        onComplete: () => O(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
};
async function Jk(t, r, s, a, u, c, f) {
  const m = It.getSettings(), p = m.mainContextTemplatePresets[a];
  if (!p)
    throw new Error(`Main context template preset "${a}" not found.`);
  const v = [], g = {
    user: je.name1 || "You",
    char: je.name2 || "Character",
    persona: je.powerUserSettings.persona_description,
    blackListedEntries: c.blackListedEntries
  };
  if (u.worldInfo)
    if (r === "global")
      g.currentLorebooks = t;
    else {
      const y = {};
      Object.entries(f).filter(([S]) => c.selectedWorldNames.includes(S)).forEach(([S, h]) => {
        const C = new Set(c.selectedEntryUids[S] ?? []), x = C.size > 0 ? h.filter((O) => C.has(O.uid)) : h.filter((O) => !O.disable);
        x.length > 0 && (y[S] = x);
      }), g.currentLorebooks = y;
    }
  if (r === "entry") {
    const y = t;
    g.entryToRevise = {
      worldName: s,
      name: y.comment,
      triggers: y.key.join(", "),
      content: y.content
    };
  }
  for (const y of p.prompts) {
    if (!y.enabled || ["taskDescription", "responseRules", "currentLorebooks"].includes(y.promptName) || y.promptName === "chatHistory" && u.messages.type === "none" || sn === void 0 && !Ft && y.promptName === "chatHistory") continue;
    if (y.promptName === "chatHistory") {
      v.push({
        id: Ff,
        role: "system",
        content: "[[Chat history placeholder]]",
        isInitial: !0
      });
      continue;
    }
    const S = m.prompts[y.promptName];
    if (S) {
      let h = bn.compile(S.content, { noEscape: !0 })(g);
      h = je.substituteParams(h), h.trim() && v.push({
        id: `im-${v.length}`,
        role: y.role,
        content: h.trim(),
        isInitial: !0
      });
    }
  }
  const E = m.prompts.reviseTaskDescription?.content;
  if (E) {
    const y = bn.compile(E, { noEscape: !0 })({
      isEntrySession: r === "entry",
      targetEntryName: r === "entry" ? t.comment : ""
    });
    v.push({
      id: `im-${v.length}`,
      role: "system",
      content: y,
      isInitial: !0
    });
  }
  return v;
}
const dl = SillyTavern.getContext(), u_ = "worldInfoRecommender_reviseSessions", M0 = ({
  target: t,
  initialState: r,
  onClose: s,
  onApply: a,
  sessionForContext: u,
  allEntries: c,
  contextToSend: f
}) => {
  const [m, p] = ie.useState([]), [v, g] = ie.useState(null), [E, y] = ie.useState(!0), S = ie.useMemo(() => t.type === "entry" ? `${t.worldName}::${t.entry.uid}::${t.entry.comment}` : "global", [t]);
  ie.useEffect(() => {
    const w = JSON.parse(localStorage.getItem(u_) || "[]");
    p(w), y(!1);
  }, []);
  const h = ie.useMemo(() => t.type === "entry" ? m.filter((w) => w.type === "entry" && w.targetEntryIdentifier === S).sort((w, k) => new Date(k.createdAt).getTime() - new Date(w.createdAt).getTime()) : m.filter((w) => w.type === "global").sort((w, k) => new Date(k.createdAt).getTime() - new Date(w.createdAt).getTime()), [m, t.type, S]), C = (w) => {
    localStorage.setItem(u_, JSON.stringify(w)), p(w);
  }, x = async () => {
    const w = await dl.Popup.show.input(
      "New Session Name",
      t.type === "entry" ? `Revise "${t.entry.comment}" - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}` : `Global Revise - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`
    );
    if (w)
      try {
        const k = It.getSettings();
        if (!k.profileId) {
          ge("warning", "Please select a connection profile in the main popup first.");
          return;
        }
        const R = await Jk(
          r,
          t.type,
          t.type === "entry" ? t.worldName : void 0,
          k.mainContextTemplatePreset,
          f,
          u,
          c
        ), L = {
          id: `rs-${Date.now()}`,
          name: w,
          type: t.type,
          targetEntryIdentifier: t.type === "entry" ? S : void 0,
          worldName: t.type === "entry" ? t.worldName : void 0,
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          messages: R,
          context: { mainContextTemplatePreset: k.mainContextTemplatePreset },
          profileId: k.profileId,
          promptEngineeringMode: k.defaultPromptEngineeringMode,
          isReadonly: !1
        };
        g(L);
      } catch (k) {
        const R = k instanceof Error ? k.message : String(k);
        console.error("Failed to create session:", k), ge("error", `Failed to create session: ${R}`);
      }
  }, O = (w) => {
    g(w);
  }, T = async (w) => {
    if (await dl.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const R = m.filter((L) => L.id !== w);
      C(R);
    }
  }, P = (w) => {
    const k = m.findIndex((L) => L.id === w.id), R = [...m];
    k !== -1 ? R[k] = w : R.push(w), C(R), g(w);
  }, l = (w) => {
    t.type === "entry" ? a({
      worldName: t.worldName,
      originalEntry: r,
      updatedEntry: w
    }) : a(w), s();
  };
  if (v) {
    const w = dl.extensionSettings.connectionManager?.profiles?.find(
      (L) => L.id === v.profileId
    ), k = f.messages, R = {
      targetCharacterId: sn,
      ignoreCharacterFields: !f.charCard,
      ignoreWorldInfo: !0,
      ignoreAuthorNote: !f.authorNote,
      includeNames: !!Ft,
      presetName: w?.preset,
      contextName: w?.context,
      instructName: w?.instruct
    };
    if (!sn && !Ft)
      R.messageIndexesBetween = { start: -1, end: -1 };
    else
      switch (k.type) {
        case "none":
          R.messageIndexesBetween = { start: -1, end: -1 };
          break;
        case "first":
          R.messageIndexesBetween = { start: 0, end: k.first ?? 10 };
          break;
        case "last": {
          const L = dl.chat?.length ?? 0, j = k.last ?? 10;
          R.messageIndexesBetween = {
            end: Math.max(0, L - 1),
            start: Math.max(0, L - j)
          };
          break;
        }
        case "range":
          k.range && (R.messageIndexesBetween = {
            start: k.range.start,
            end: k.range.end
          });
          break;
      }
    return /* @__PURE__ */ A.jsx(
      Kk,
      {
        session: v,
        onBack: () => g(null),
        onApply: l,
        onSessionUpdate: P,
        initialState: r,
        chatContextOptions: R
      }
    );
  }
  const _ = t.type === "entry" ? `Revise Sessions for "${t.entry.comment}"` : "Global Revise Sessions";
  return /* @__PURE__ */ A.jsxs("div", { className: "revise-session-manager", children: [
    /* @__PURE__ */ A.jsx("div", { className: "popup_header", children: /* @__PURE__ */ A.jsx("h2", { children: _ }) }),
    /* @__PURE__ */ A.jsx("div", { className: "session-list", children: E ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : h.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create one to get started." }) : h.map((w) => /* @__PURE__ */ A.jsxs("div", { className: "session-item", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "session-info", onClick: () => O(w), children: [
        /* @__PURE__ */ A.jsx("span", { className: "session-name", children: w.name }),
        /* @__PURE__ */ A.jsx("span", { className: "session-date", children: new Date(w.createdAt).toLocaleString() })
      ] }),
      /* @__PURE__ */ A.jsx(Ee, { className: "danger_button", onClick: () => T(w.id), children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] }, w.id)) }),
    /* @__PURE__ */ A.jsx("div", { className: "session-actions", children: /* @__PURE__ */ A.jsxs(Ee, { onClick: x, className: "menu_button", children: [
      /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) })
  ] });
}, Wk = new vw.Converter(), eA = ({
  initialWorldName: t,
  entry: r,
  allWorldNames: s,
  existingEntry: a,
  sessionRegexIds: u,
  onAdd: c,
  onRemove: f,
  onContinue: m,
  onUpdate: p,
  entriesGroupByWorldName: v,
  sessionForContext: g,
  contextToSend: E
}) => {
  const [y, S] = ie.useState(() => s.find((I) => I === t) ?? s[0] ?? ""), [h, C] = ie.useState(!1), [x, O] = ie.useState(!1), [T, P] = ie.useState(!1), [l, _] = ie.useState(!1), [w, k] = ie.useState(!1), [R, L] = ie.useState(!1), [j, D] = ie.useState(""), q = ie.useRef(null), G = ie.useMemo(
    () => !!v[y]?.find((ae) => ae.uid === r.uid && ae.comment === r.comment),
    [y, r.uid, r.comment, v]
  ), V = x || T, K = async () => {
    C(!0), await c(r, t, y);
  }, M = async () => {
    O(!0), await m({ worldName: t, entry: r, prompt: j, mode: "continue" }), O(!1);
  }, B = async () => {
    P(!0), await m({ worldName: t, entry: r, prompt: j, mode: "revise" }), P(!1);
  }, J = (ae) => {
    p(t, r, ae, u);
  };
  return /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
    /* @__PURE__ */ A.jsxs("div", { className: "entry", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "menu", children: [
        /* @__PURE__ */ A.jsx(
          "select",
          {
            className: "world-select text_pole",
            value: y,
            onChange: (ae) => S(ae.target.value),
            children: s.map((ae) => /* @__PURE__ */ A.jsx("option", { value: ae, children: ae }, ae))
          }
        ),
        /* @__PURE__ */ A.jsx(Ee, { onClick: K, disabled: h || V, className: "menu_button interactable add", children: G ? "Update" : "Add" }),
        /* @__PURE__ */ A.jsxs(
          Ee,
          {
            onClick: () => L(!0),
            disabled: V,
            className: "menu_button interactable",
            title: "Revise this entry with a chat-based AI session.",
            children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-comments" }),
              " Revise"
            ]
          }
        ),
        /* @__PURE__ */ A.jsx(
          Ee,
          {
            onClick: M,
            disabled: V,
            className: "menu_button interactable continue",
            title: "Continue writing this entry. You can provide instructions in the textbox below.",
            children: x ? "..." : "Continue"
          }
        ),
        /* @__PURE__ */ A.jsx(
          Ee,
          {
            onClick: B,
            disabled: V,
            className: "menu_button interactable revise",
            title: "Request changes to this entry. Provide instructions in the textbox below.",
            children: T ? "..." : "Revise"
          }
        ),
        /* @__PURE__ */ A.jsx(Ee, { onClick: () => _(!0), disabled: V, className: "menu_button interactable edit", children: "Edit" }),
        G && /* @__PURE__ */ A.jsx(
          Ee,
          {
            onClick: () => k(!0),
            disabled: V,
            className: "menu_button interactable compare",
            children: "Compare"
          }
        ),
        /* @__PURE__ */ A.jsx(
          Ee,
          {
            onClick: () => f(r, t, !0),
            disabled: V,
            className: "menu_button interactable blacklist",
            children: "Blacklist"
          }
        ),
        /* @__PURE__ */ A.jsx(
          Ee,
          {
            onClick: () => f(r, t, !1),
            disabled: V,
            className: "menu_button interactable remove",
            children: "Remove"
          }
        )
      ] }),
      /* @__PURE__ */ A.jsx("h4", { className: "comment", children: r.comment }),
      /* @__PURE__ */ A.jsx("div", { className: "key", children: r.key.join(", ") }),
      /* @__PURE__ */ A.jsx("p", { className: "content", dangerouslySetInnerHTML: { __html: Wk.makeHtml(r.content ?? "") } }),
      /* @__PURE__ */ A.jsx("div", { className: "continue-prompt-section", style: { marginTop: "10px" }, children: /* @__PURE__ */ A.jsx(
        Zn,
        {
          value: j,
          onChange: (ae) => D(ae.target.value),
          placeholder: "Optional instructions to continue or revise this entry. Then press 'Continue' or 'Revise'.",
          rows: 2,
          style: { width: "100%" }
        }
      ) })
    ] }),
    l && /* @__PURE__ */ A.jsx(
      tr,
      {
        type: Lt.CONFIRM,
        content: /* @__PURE__ */ A.jsx(Lw, { ref: q, entry: r, initialRegexIds: u }),
        onComplete: (ae) => {
          if (ae && q.current) {
            const { updatedEntry: I, updatedRegexIds: X } = q.current.getFormData();
            p(t, r, I, X);
          }
          _(!1);
        }
      }
    ),
    w && a && /* @__PURE__ */ A.jsx(
      tr,
      {
        type: Lt.DISPLAY,
        content: /* @__PURE__ */ A.jsx(zw, { originalEntry: a, newEntry: r }),
        onComplete: () => k(!1)
      }
    ),
    R && /* @__PURE__ */ A.jsx(
      tr,
      {
        type: Lt.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          M0,
          {
            target: { type: "entry", worldName: t, entry: r },
            initialState: r,
            onClose: () => L(!1),
            onApply: J,
            sessionForContext: g,
            allEntries: v,
            contextToSend: E
          }
        ),
        onComplete: () => L(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, l_ = ie.forwardRef(
  ({ entriesByWorldName: t, initialSelectedUids: r, title: s }, a) => {
    const [u, c] = ie.useState(""), [f, m] = ie.useState(() => {
      const y = /* @__PURE__ */ new Set();
      return Object.entries(r).forEach(([S, h]) => {
        h.forEach((C) => y.add(`${S}::${C}`));
      }), y;
    }), p = ie.useMemo(() => {
      if (!u)
        return t;
      const y = u.toLowerCase(), S = {};
      return Object.entries(t).forEach(([h, C]) => {
        const x = C.filter(
          (O) => O.comment.toLowerCase().includes(y) || h.toLowerCase().includes(y)
        );
        x.length > 0 && (S[h] = x);
      }), S;
    }, [u, t]);
    ie.useImperativeHandle(a, () => ({
      getSelection: () => {
        const y = {};
        return f.forEach((S) => {
          const [h, C] = S.split("::"), x = parseInt(C, 10);
          y[h] || (y[h] = []), y[h].push(x);
        }), y;
      }
    }));
    const v = (y, S) => {
      const h = `${y}::${S}`, C = new Set(f);
      C.has(h) ? C.delete(h) : C.add(h), m(C);
    }, g = () => {
      const y = /* @__PURE__ */ new Set();
      Object.entries(p).forEach(([S, h]) => {
        h.forEach((C) => y.add(`${S}::${C.uid}`));
      }), m(y);
    }, E = () => {
      m(/* @__PURE__ */ new Set());
    };
    return /* @__PURE__ */ A.jsxs("div", { className: "select-entries-popup", children: [
      /* @__PURE__ */ A.jsx("h3", { children: s }),
      /* @__PURE__ */ A.jsxs("div", { className: "controls", children: [
        /* @__PURE__ */ A.jsx(
          "input",
          {
            type: "text",
            className: "text_pole",
            placeholder: "Filter by name or lorebook...",
            value: u,
            onChange: (y) => c(y.target.value)
          }
        ),
        /* @__PURE__ */ A.jsx(Ee, { onClick: g, children: "Select All (Filtered)" }),
        /* @__PURE__ */ A.jsx(Ee, { onClick: E, children: "Deselect All" })
      ] }),
      /* @__PURE__ */ A.jsx("div", { className: "entry-list", children: Object.keys(p).length === 0 ? /* @__PURE__ */ A.jsx("p", { children: "No entries match your filter." }) : Object.entries(p).map(([y, S]) => /* @__PURE__ */ A.jsxs("div", { className: "world-group", children: [
        /* @__PURE__ */ A.jsx("h4", { children: y }),
        /* @__PURE__ */ A.jsx("ul", { children: S.map((h) => /* @__PURE__ */ A.jsx("li", { children: /* @__PURE__ */ A.jsxs("label", { children: [
          /* @__PURE__ */ A.jsx(
            "input",
            {
              type: "checkbox",
              checked: f.has(`${y}::${h.uid}`),
              onChange: () => v(y, h.uid)
            }
          ),
          h.comment || `Entry ${h.uid}`
        ] }) }, h.uid)) })
      ] }, y)) })
    ] });
  }
), za = SillyTavern.getContext(), Ta = (t) => JSON.stringify(t ?? {}, null, 2), Na = (t, r) => {
  try {
    return JSON.parse(t);
  } catch (s) {
    throw new Error(`${r} is not valid JSON: ${s.message}`);
  }
}, tA = () => Object.entries(za.CONNECT_API_MAP).filter(([, t]) => t?.selected === "openai" || t?.selected === "textgenerationwebui").sort(([t], [r]) => t.localeCompare(r)), zl = (t) => t.model ?? "", nA = {
  openai: "#model_openai_select",
  claude: "#model_claude_select",
  openrouter: "#model_openrouter_select",
  ai21: "#model_ai21_select",
  makersuite: "#model_google_select",
  vertexai: "#model_vertexai_select",
  mistralai: "#model_mistralai_select",
  cohere: "#model_cohere_select",
  perplexity: "#model_perplexity_select",
  groq: "#model_groq_select",
  siliconflow: "#model_siliconflow_select",
  minimax: "#model_minimax_select",
  electronhub: "#model_electronhub_select",
  chutes: "#model_chutes_select",
  nanogpt: "#model_nanogpt_select",
  deepseek: "#model_deepseek_select",
  aimlapi: "#model_aimlapi_select",
  xai: "#model_xai_select",
  pollinations: "#model_pollinations_select",
  moonshot: "#model_moonshot_select",
  fireworks: "#model_fireworks_select",
  cometapi: "#model_cometapi_select",
  zai: "#model_zai_select",
  workers_ai: "#model_workers_ai_select"
}, rA = {
  mancer: "#mancer_model",
  togetherai: "#model_togetherai_select",
  openrouter: "#openrouter_model",
  infermaticai: "#model_infermaticai_select",
  dreamgen: "#model_dreamgen_select",
  featherless: "#featherless_model",
  vllm: "#vllm_model",
  aphrodite: "#aphrodite_model",
  llamacpp: "#llamacpp_model",
  ollama: "#ollama_model",
  tabby: "#tabby_model"
}, Sh = (t) => t.api ? za.CONNECT_API_MAP[t.api] : void 0, R0 = (t) => {
  const r = Sh(t);
  return r?.source === "openrouter" || r?.type === "openrouter";
}, aA = (t) => {
  const r = Sh(t);
  return r?.source === "openrouter" ? m2 : r?.type === "openrouter" ? w2 : [];
}, Wf = (t, r) => aA(t).find((s) => s.id === r), iA = (t) => {
  const r = Number(t?.pricing?.prompt);
  if (!Number.isFinite(r)) return;
  if (r === 0) return "Free";
  const s = 1 / (1e3 * r);
  return `${(Math.round(s * 1e3) / 1e3).toFixed(0)}k t/$`;
}, c_ = (t, r) => {
  if (!t) return;
  const s = [t.name || t.id];
  t.context_length && s.push(`${t.context_length} ctx`);
  const a = iA(t);
  return a && s.push(a), s.length > 1 ? s.join(" | ") : r;
}, fl = (...t) => {
  for (const r of t) {
    const s = Number(r);
    if (Number.isFinite(s)) return s;
  }
}, sA = (t, r) => {
  const s = Wf(t, zl(t));
  if (!s?.pricing) return "Unknown";
  const a = Number(s.pricing.completion), u = Number(s.pricing.prompt);
  if (!Number.isFinite(a) || !Number.isFinite(u)) return "Unknown";
  const f = Sh(t)?.source === "openrouter", m = f ? fl(r.openai_max_tokens, za.chatCompletionSettings.openai_max_tokens) : fl(r.genamt, K1), p = f ? fl(r.openai_max_context, za.chatCompletionSettings.openai_max_context) : fl(r.max_length, J1);
  if (m === void 0 || p === void 0) return "Unknown";
  const v = p - m, g = a * m + u * v;
  if (!Number.isFinite(g)) return "Unknown";
  let E = `$${g.toFixed(3)}`;
  return f && (r.enable_web_search ?? za.chatCompletionSettings.enable_web_search) && (E += " + $0.02"), E;
}, oA = (t) => {
  if (!t) return [];
  const r = document.querySelector(t);
  if (!(r instanceof HTMLSelectElement)) return [];
  const s = [];
  for (const a of Array.from(r.options)) {
    const u = a.value, c = a.textContent?.trim() || u;
    if (!u || c.includes("-- Connect to the API --")) continue;
    const f = a.parentElement, m = f instanceof HTMLOptGroupElement ? f.label : void 0;
    s.push({ value: u, label: c, group: m });
  }
  return s;
}, uA = (t) => {
  const r = t.api ? za.CONNECT_API_MAP[t.api] : void 0;
  if (r) {
    if (r.selected === "openai") return nA[r.source];
    if (r.selected === "textgenerationwebui") return rA[r.type];
  }
}, lA = (t) => {
  const r = oA(uA(t)), s = zl(t), a = R0(t), u = a ? r.map((c) => ({
    ...c,
    label: c_(Wf(t, c.value), c.label) ?? c.label
  })) : r;
  if (s && !r.some((c) => c.value === s)) {
    const c = a && c_(Wf(t, s)) || `${s} (current)`;
    return [{ value: s, label: c }, ...u];
  }
  return u;
}, cA = (t) => {
  const r = t.filter((a) => !a.group), s = /* @__PURE__ */ new Map();
  for (const a of t) {
    if (!a.group) continue;
    const u = s.get(a.group) ?? [];
    u.push(a), s.set(a.group, u);
  }
  return { ungrouped: r, grouped: Array.from(s.entries()) };
}, dA = ({ profileId: t, onProfileSelected: r }) => {
  const [s, a] = ie.useState(() => yf(t)), [u, c] = ie.useState(() => Ta(s?.profile)), [f, m] = ie.useState(() => Ta(s?.preset)), [p, v] = ie.useState(!1), [g, E] = ie.useState(!1), [y, S] = ie.useState(0), h = ie.useMemo(() => tA(), []), C = ie.useMemo(
    () => s ? lA(s.profile) : [],
    [s?.profile.api, s?.profile.model, y]
  ), x = ie.useMemo(() => cA(C), [C]), O = ie.useCallback((D) => {
    const q = yf(D);
    a(q), c(Ta(q?.profile)), m(Ta(q?.preset));
  }, []);
  ie.useEffect(() => {
    O(t);
  }, [t, O]);
  const T = (D, q) => {
    a((G) => {
      if (!G) return G;
      const V = { ...G.profile, [D]: q }, K = {
        ...G,
        profile: V,
        presetApiId: Ks(V),
        selectedApiGroup: Hf(V)
      };
      return Yv(V, t), c(Ta(V)), K;
    });
  }, P = () => {
    if (s)
      try {
        const D = Na(u, "Profile JSON");
        Yv(D, t), a((q) => q && {
          ...q,
          profile: D,
          presetApiId: Ks(D),
          selectedApiGroup: Hf(D)
        }), ge("success", "Profile JSON loaded into the editor draft.");
      } catch (D) {
        ge("error", D.message);
      }
  }, l = () => {
    try {
      const D = Na(f, "Preset JSON");
      a((q) => q && { ...q, preset: D }), ge("success", "Preset JSON loaded into the editor draft.");
    } catch (D) {
      ge("error", D.message);
    }
  }, _ = async () => {
    if (s) {
      E(!0);
      try {
        const D = Na(u, "Profile JSON"), q = await ES(D);
        oo(t), oo(q.id);
        const G = yf(q.id);
        a(G), c(Ta(G?.profile)), m(Ta(G?.preset)), r(q.id), await ge("success", `Profile "${q.name}" saved.`);
      } catch (D) {
        await ge("error", D.message);
      } finally {
        E(!1);
      }
    }
  }, w = async () => {
    if (s) {
      E(!0);
      try {
        const D = Na(u, "Profile JSON"), q = Na(f, "Preset JSON");
        await kS(D, q, Ks(D)), a((G) => G && { ...G, preset: q }), await ge("success", `Preset "${D.preset}" saved.`);
      } catch (D) {
        await ge("error", D.message);
      } finally {
        E(!1);
      }
    }
  }, k = async () => {
    if (!s) return;
    const D = s.profile.name ? `${s.profile.name} copy` : "New WIR Profile", q = await za.Popup.show.input("Create Connection Profile", "Profile name:", D);
    if (!(!q || typeof q != "string")) {
      E(!0);
      try {
        const G = Na(u, "Profile JSON"), V = Na(f, "Preset JSON"), K = await CS(G, V, Ks(G), q);
        r(K.id), O(K.id), await ge("success", `Profile "${K.name}" created.`);
      } catch (G) {
        await ge("error", G.message);
      } finally {
        E(!1);
      }
    }
  };
  if (!t)
    return /* @__PURE__ */ A.jsxs("div", { className: "api-settings-panel empty-state", children: [
      /* @__PURE__ */ A.jsx("h3", { children: "API Settings" }),
      /* @__PURE__ */ A.jsx("p", { children: "Select a connection profile to inspect and edit its API settings." })
    ] });
  if (!s)
    return /* @__PURE__ */ A.jsxs("div", { className: "api-settings-panel empty-state", children: [
      /* @__PURE__ */ A.jsx("h3", { children: "API Settings" }),
      /* @__PURE__ */ A.jsx("p", { children: "The selected connection profile could not be found." })
    ] });
  const R = s.selectedApiGroup === "textgenerationwebui", L = s.selectedApiGroup === "openai", j = R0(s.profile) ? sA(s.profile, s.preset) : void 0;
  return /* @__PURE__ */ A.jsxs("div", { className: "api-settings-panel", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "api-settings-header", children: [
      /* @__PURE__ */ A.jsxs("div", { children: [
        /* @__PURE__ */ A.jsx("h3", { children: "API Settings" }),
        /* @__PURE__ */ A.jsx("span", { children: L ? "Chat Completion" : R ? "Text Completion" : "Connection Profile" })
      ] }),
      /* @__PURE__ */ A.jsx(
        Ee,
        {
          className: "menu_button fa-solid fa-file-circle-plus",
          title: "Create profile from editor",
          onClick: k,
          disabled: g
        }
      )
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "api-settings-grid", children: [
      /* @__PURE__ */ A.jsxs("label", { children: [
        "Profile Name",
        /* @__PURE__ */ A.jsx(
          "input",
          {
            className: "text_pole",
            value: s.profile.name ?? "",
            onChange: (D) => T("name", D.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ A.jsxs("label", { children: [
        "API",
        /* @__PURE__ */ A.jsxs(
          "select",
          {
            className: "text_pole",
            value: s.profile.api ?? "",
            onChange: (D) => {
              T("api", D.target.value), S((q) => q + 1);
            },
            children: [
              /* @__PURE__ */ A.jsx("option", { value: "", children: "Select API" }),
              h.map(([D]) => /* @__PURE__ */ A.jsx("option", { value: D, children: D }, D))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ A.jsxs("label", { children: [
        "Preset",
        /* @__PURE__ */ A.jsx(
          "input",
          {
            className: "text_pole",
            value: s.profile.preset ?? "",
            onChange: (D) => T("preset", D.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ A.jsxs("label", { children: [
        "Model",
        /* @__PURE__ */ A.jsxs("div", { className: "model-picker-row", children: [
          C.length > 0 ? /* @__PURE__ */ A.jsxs(
            "select",
            {
              className: "text_pole",
              value: zl(s.profile),
              onFocus: () => S((D) => D + 1),
              onChange: (D) => T("model", D.target.value),
              children: [
                x.ungrouped.map((D) => /* @__PURE__ */ A.jsx("option", { value: D.value, children: D.label }, `models:${D.value}`)),
                x.grouped.map(([D, q]) => /* @__PURE__ */ A.jsx("optgroup", { label: D, children: q.map((G) => /* @__PURE__ */ A.jsx("option", { value: G.value, children: G.label }, `${D}:${G.value}`)) }, D))
              ]
            }
          ) : /* @__PURE__ */ A.jsx(
            "input",
            {
              className: "text_pole",
              value: zl(s.profile),
              onFocus: () => S((D) => D + 1),
              onChange: (D) => T("model", D.target.value)
            }
          ),
          /* @__PURE__ */ A.jsx(
            Ee,
            {
              className: "menu_button fa-solid fa-rotate",
              title: "Refresh model list",
              onClick: () => S((D) => D + 1)
            }
          )
        ] }),
        j && /* @__PURE__ */ A.jsxs("small", { className: "openrouter-pricing-summary", children: [
          "Max prompt cost: ",
          j
        ] })
      ] }),
      /* @__PURE__ */ A.jsxs("label", { children: [
        "API URL",
        /* @__PURE__ */ A.jsx(
          "input",
          {
            className: "text_pole",
            value: s.profile["api-url"] ?? "",
            onChange: (D) => T("api-url", D.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ A.jsxs("label", { children: [
        "Secret ID",
        /* @__PURE__ */ A.jsx(
          "input",
          {
            className: "text_pole",
            value: s.profile["secret-id"] ?? "",
            onChange: (D) => T("secret-id", D.target.value)
          }
        )
      ] }),
      R && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsxs("label", { children: [
          "Instruct Template",
          /* @__PURE__ */ A.jsx(
            "input",
            {
              className: "text_pole",
              value: s.profile.instruct ?? "",
              onChange: (D) => T("instruct", D.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ A.jsxs("label", { children: [
          "Context Template",
          /* @__PURE__ */ A.jsx(
            "input",
            {
              className: "text_pole",
              value: s.profile.context ?? "",
              onChange: (D) => T("context", D.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ A.jsxs("label", { children: [
          "System Prompt",
          /* @__PURE__ */ A.jsx(
            "input",
            {
              className: "text_pole",
              value: s.profile.sysprompt ?? "",
              onChange: (D) => T("sysprompt", D.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ A.jsxs("label", { children: [
          "Tokenizer",
          /* @__PURE__ */ A.jsx(
            "input",
            {
              className: "text_pole",
              value: s.profile.tokenizer ?? "",
              onChange: (D) => T("tokenizer", D.target.value)
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "api-settings-actions", children: [
      /* @__PURE__ */ A.jsx(Ee, { className: "menu_button interactable", onClick: _, disabled: g, children: "Save Profile" }),
      /* @__PURE__ */ A.jsx(Ee, { className: "menu_button interactable", onClick: w, disabled: g, children: "Save Preset" }),
      /* @__PURE__ */ A.jsx(Ee, { className: "menu_button", onClick: () => v((D) => !D), children: p ? "Hide Raw JSON" : "Show Raw JSON" })
    ] }),
    p && /* @__PURE__ */ A.jsxs("div", { className: "api-settings-raw", children: [
      /* @__PURE__ */ A.jsxs("div", { children: [
        /* @__PURE__ */ A.jsxs("div", { className: "raw-heading", children: [
          /* @__PURE__ */ A.jsx("span", { children: "Profile JSON" }),
          /* @__PURE__ */ A.jsx(Ee, { className: "menu_button", onClick: P, children: "Load JSON" })
        ] }),
        /* @__PURE__ */ A.jsx(Zn, { value: u, onChange: (D) => c(D.target.value), rows: 10 })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { children: [
        /* @__PURE__ */ A.jsxs("div", { className: "raw-heading", children: [
          /* @__PURE__ */ A.jsx("span", { children: "Preset JSON" }),
          /* @__PURE__ */ A.jsx(Ee, { className: "menu_button", onClick: l, children: "Load JSON" })
        ] }),
        /* @__PURE__ */ A.jsx(Zn, { value: f, onChange: (D) => m(D.target.value), rows: 10 })
      ] })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "api-settings-footnote", children: [
      wS().length,
      " profiles available. API keys are intentionally not shown; only secret IDs are editable."
    ] })
  ] });
};
bn.helpers.join || bn.registerHelper("join", function(t, r) {
  return Array.isArray(t) ? t.join(typeof r == "string" ? r : ", ") : "";
});
bn.helpers.is_not_empty || bn.registerHelper("is_not_empty", function(t, r) {
  return t ? Array.isArray(t) ? t.length > 0 ? r.fn(this) : r.inverse(this) : typeof t == "object" && Object.keys(t).length > 0 ? r.fn(this) : typeof t != "object" && !Array.isArray(t) ? r.fn(this) : r.inverse(this) : r.inverse(this);
});
const Hn = SillyTavern.getContext(), hl = () => sn ? w_(sn) : Ft, fA = () => {
  const t = i0(), r = It.getSettings(), [s, a] = ie.useState({
    suggestedEntries: {},
    blackListedEntries: [],
    selectedWorldNames: [],
    selectedEntryUids: {},
    regexIds: {}
  }), [u, c] = ie.useState([]), [f, m] = ie.useState({}), [p, v] = ie.useState([]), [g, E] = ie.useState(!0), [y, S] = ie.useState(!1), [h, C] = ie.useState(!1), [x, O] = ie.useState(!1), [T, P] = ie.useState(!1), l = ie.useRef(null), _ = ie.useRef(null), w = ie.useMemo(() => hl() ?? "_global", [sn, Ft]);
  ie.useEffect(() => {
    (async () => {
      E(!0), m({}), c([]), v([]);
      const te = hl(), ne = `worldInfoRecommend_${w}`, ue = JSON.parse(localStorage.getItem(ne) ?? "{}"), re = {
        suggestedEntries: ue.suggestedEntries ?? {},
        blackListedEntries: ue.blackListedEntries ?? [],
        selectedWorldNames: ue.selectedWorldNames ?? [],
        selectedEntryUids: ue.selectedEntryUids ?? {},
        regexIds: ue.regexIds ?? {}
      };
      let pe = {};
      if (te)
        if (Ft) {
          const me = await bl(["chat", "persona", "global"]);
          me && (pe = me);
          const fe = dv.find((we) => we.id === Ft);
          if (fe)
            for (const we of fe.members) {
              const Le = Hn.characters.findIndex((We) => We.avatar === we);
              if (Le !== -1) {
                const We = await bl(["character"], !0, Le);
                We && (pe = { ...pe, ...We });
              }
            }
        } else
          pe = await bl(["all"], !0, sn);
      else
        for (const me of i2) {
          const fe = await Hn.loadWorldInfo(me);
          fe && (pe[me] = Object.values(fe.entries));
        }
      m(pe);
      const Re = Object.keys(pe);
      c(Re), re.selectedWorldNames.length === 0 && w !== "_global" ? re.selectedWorldNames = [...Re] : re.selectedWorldNames = re.selectedWorldNames.filter(
        (me) => Re.includes(me)
      );
      const Se = {};
      if (re.selectedEntryUids) {
        for (const [me, fe] of Object.entries(re.selectedEntryUids))
          if (pe[me]) {
            const we = new Set(pe[me].map((We) => We.uid)), Le = fe.filter((We) => we.has(We));
            Le.length > 0 && (Se[me] = Le);
          }
      }
      if (re.selectedEntryUids = Se, a(re), Ft) {
        const me = dv.find((fe) => fe.id === Ft);
        if (me?.generation_mode === 0) {
          const fe = me.members.map((we) => Hn.characters.find((Le) => Le.avatar === we)).filter((we) => !!we);
          v(fe);
        }
      }
      E(!1);
    })();
  }, [w]), ie.useEffect(() => {
    if (g) return;
    const U = `worldInfoRecommend_${w}`;
    localStorage.setItem(U, JSON.stringify(s));
  }, [s, w, g]);
  const k = (U, te) => {
    It.getSettings()[U] = te, It.saveSettings(), t();
  }, R = (U, te) => {
    It.getSettings().contextToSend[U] = te, It.saveSettings(), t();
  }, L = ie.useCallback(
    async (U, te, ne = !1) => {
      const ue = structuredClone(f);
      ue[te] || (ue[te] = []);
      const re = ue[te].find((Se) => Se.uid === U.uid), pe = !!re;
      let Re;
      if (pe) {
        const Se = (U.content || "") !== (re.content || ""), me = (U.comment || "") !== (re.comment || ""), fe = (U.key || []).slice().sort().join(",") !== (re.key || []).slice().sort().join(",");
        if (!Se && !me && !fe)
          return "unchanged";
        Re = re;
      } else {
        const Se = { entries: Object.fromEntries(ue[te].map((fe) => [fe.uid, fe])) }, me = rh(te, Se);
        if (!me) throw new Error("Failed to create new World Info entry.");
        Re = me, ue[te].push(Re);
      }
      if (Object.assign(Re, { key: U.key, content: U.content, comment: U.comment }), m(ue), !ne) {
        const Se = { entries: Object.fromEntries(ue[te].map((me) => [me.uid, me])) };
        await Hn.saveWorldInfo(te, Se), Hn.reloadWorldInfoEditor(te, !0);
      }
      return pe ? "updated" : "added";
    },
    [f]
  ), j = ie.useCallback(
    async (U) => {
      if (!r.profileId) return ge("warning", "Please select a connection profile.");
      const te = U?.prompt ?? r.promptPresets[r.promptPreset].content;
      if (!U && !te)
        return ge("warning", "Please enter a prompt.");
      S(!0);
      try {
        const ne = Hn.extensionSettings.connectionManager?.profiles?.find(
          (fe) => fe.id === r.profileId
        );
        if (!ne) throw new Error("Connection profile not found.");
        const ue = hl(), re = {
          presetName: ne.preset,
          contextName: ne.context,
          instructName: ne.instruct,
          syspromptName: ne.sysprompt,
          ignoreCharacterFields: !r.contextToSend.charCard,
          ignoreWorldInfo: !0,
          ignoreAuthorNote: !r.contextToSend.authorNote,
          maxContext: r.maxContextType === "custom" ? r.maxContextValue : r.maxContextType === "profile" ? "preset" : "active",
          includeNames: !!Ft
        };
        if (!ue)
          re.messageIndexesBetween = { start: -1, end: -1 };
        else
          switch (r.contextToSend.messages.type) {
            case "none":
              re.messageIndexesBetween = { start: -1, end: -1 };
              break;
            case "first":
              re.messageIndexesBetween = { start: 0, end: r.contextToSend.messages.first ?? 10 };
              break;
            case "last": {
              const fe = r.contextToSend.messages.last ?? 10, we = Hn.chat?.length ?? 0;
              re.messageIndexesBetween = {
                end: Math.max(0, we - 1),
                start: Math.max(0, we - fe)
              };
              break;
            }
            case "range":
              r.contextToSend.messages.range && (re.messageIndexesBetween = r.contextToSend.messages.range);
              break;
          }
        const pe = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete pe.stDescription, (!r.contextToSend.worldInfo || s.selectedWorldNames.length === 0) && delete pe.currentLorebooks;
        const Re = Object.values(s.suggestedEntries).some((fe) => fe.length > 0);
        (!r.contextToSend.suggestedEntries || !Re) && delete pe.suggestedLorebooks, s.blackListedEntries.length === 0 && delete pe.blackListedEntries;
        const Se = U ? { worldName: U.worldName, entry: U.entry, mode: U.mode } : void 0, me = await e0({
          profileId: r.profileId,
          userPrompt: te,
          buildPromptOptions: re,
          session: s,
          entriesGroupByWorldName: f,
          promptSettings: pe,
          mainContextList: r.mainContextTemplatePresets[r.mainContextTemplatePreset].prompts.filter((fe) => fe.enabled).map((fe) => ({ promptName: fe.promptName, role: fe.role })),
          maxResponseToken: r.maxResponseToken,
          continueFrom: Se
        });
        Object.keys(me).length > 0 ? a(U ? (fe) => {
          const we = structuredClone(fe.suggestedEntries), Le = U.worldName, We = me[Le]?.[0];
          if (we[Le] && We) {
            const Fe = we[Le].findIndex(
              (Dn) => Dn.uid === U.entry.uid && Dn.comment === U.entry.comment
            );
            Fe !== -1 && (we[Le][Fe] = We);
          }
          return { ...fe, suggestedEntries: we };
        } : (fe) => {
          const we = structuredClone(fe.suggestedEntries);
          for (const [Le, We] of Object.entries(me)) {
            we[Le] || (we[Le] = []);
            for (const Fe of We)
              we[Le].some((Dn) => Dn.uid === Fe.uid && Dn.comment === Fe.comment) || we[Le].push(Fe);
          }
          return { ...fe, suggestedEntries: we };
        }) : ge("warning", "No results from AI");
      } catch (ne) {
        console.error(ne), ge("error", ne instanceof Error ? ne.message : String(ne));
      } finally {
        S(!1);
      }
    },
    [r, s, f]
  ), D = ie.useCallback(
    async (U, te, ne) => {
      try {
        const ue = await L(U, ne);
        ue === "unchanged" ? ge("info", `No changes detected for "${U.comment}". Entry was not updated.`) : ge("success", ue === "added" ? "Entry added" : "Entry updated"), a((re) => {
          const pe = { ...re.suggestedEntries };
          return pe[te] && (pe[te] = pe[te].filter(
            (Re) => !(Re.uid === U.uid && Re.comment === U.comment)
          )), { ...re, suggestedEntries: pe };
        });
      } catch (ue) {
        console.error(ue), ge("error", `Failed to add entry: ${ue.message}`);
      }
    },
    [L]
  ), q = async () => {
    const U = Object.values(s.suggestedEntries).flat().length;
    if (U === 0) return ge("warning", "No entries to add.");
    if (!await Hn.Popup.show.confirm(
      "Add All",
      `Are you sure you want to add/update all ${U} suggested entries?`
    )) return;
    S(!0);
    let ne = 0, ue = 0, re = 0;
    const pe = /* @__PURE__ */ new Set(), Re = [];
    Object.entries(s.suggestedEntries).forEach(([Se, me]) => {
      me.forEach((fe) => {
        const we = u.includes(Se) ? Se : u[0] ?? "";
        we && Re.push({ worldName: we, entry: fe });
      });
    });
    for (const { worldName: Se, entry: me } of Re)
      try {
        const fe = await L(me, Se, !0);
        fe === "added" ? ne++ : fe === "updated" ? ue++ : re++, fe !== "unchanged" && pe.add(Se);
      } catch {
        ge("error", `Failed to process entry: ${me.comment}`);
      }
    for (const Se of pe)
      try {
        const me = { entries: Object.fromEntries(f[Se].map((fe) => [fe.uid, fe])) };
        await Hn.saveWorldInfo(Se, me), Hn.reloadWorldInfoEditor(Se, !0);
      } catch {
        ge("error", `Failed to save world: ${Se}`);
      }
    a((Se) => ({ ...Se, suggestedEntries: {} })), ge("success", `Processed: ${ne} new, ${ue} updated, ${re} unchanged.`), S(!1);
  }, G = async () => {
    await Hn.Popup.show.confirm(
      "Reset",
      "Clear all suggestions and reset lorebook selection?"
    ) && (a((te) => ({
      ...te,
      suggestedEntries: {},
      blackListedEntries: [],
      selectedWorldNames: hl() ? [...u] : [],
      selectedEntryUids: {}
    })), ge("success", "Reset successful"));
  }, V = (U, te, ne) => {
    a((ue) => {
      const re = { ...ue };
      ne && (re.blackListedEntries = [...re.blackListedEntries, `${te} (${U.comment})`]);
      const pe = { ...re.suggestedEntries };
      return pe[te] && (pe[te] = pe[te].filter(
        (Re) => !(Re.uid === U.uid && Re.comment === U.comment)
      )), re.suggestedEntries = pe, re;
    });
  }, K = (U, te, ne, ue) => {
    a((re) => {
      const pe = { ...re.suggestedEntries };
      if (pe[U]) {
        const Se = pe[U].findIndex(
          (me) => me.uid === te.uid && me.comment === te.comment
        );
        Se !== -1 && (pe[U][Se] = ne);
      }
      const Re = { ...re, suggestedEntries: pe };
      return ue && (Re.regexIds = ue), Re;
    });
  }, M = ie.useCallback(
    (U) => {
      a((te) => {
        const ne = structuredClone(te.suggestedEntries);
        let ue = 0;
        for (const [re, pe] of Object.entries(U))
          if (f[re]) {
            ne[re] || (ne[re] = []);
            for (const Re of pe) {
              if (ne[re].some((fe) => fe.uid === Re)) continue;
              const me = f[re].find((fe) => fe.uid === Re);
              me && (ne[re].push(structuredClone(me)), ue++);
            }
          }
        return ue > 0 && ge("success", `Imported ${ue} entries for revision.`), { ...te, suggestedEntries: ne };
      });
    },
    [f]
  ), B = ie.useMemo(() => {
    const U = {};
    return s.selectedWorldNames.forEach((te) => {
      f[te] && (U[te] = f[te]);
    }), U;
  }, [s.selectedWorldNames, f]), J = ie.useMemo(() => {
    const U = JSON.parse(JSON.stringify(B)), te = /* @__PURE__ */ new Map();
    return Object.entries(s.suggestedEntries).forEach(([ne, ue]) => {
      ue.forEach((re) => {
        re.uid && te.set(re.uid, { worldName: ne, entry: re });
      });
    }), Object.entries(U).forEach(([, ne]) => {
      ne.forEach((ue, re) => {
        ue.uid && te.has(ue.uid) && (ne[re] = te.get(ue.uid).entry, te.delete(ue.uid));
      });
    }), te.forEach(({ worldName: ne, entry: ue }) => {
      U[ne] || (U[ne] = []), U[ne].some((re) => re.uid === ue.uid) || U[ne].push(ue);
    }), U;
  }, [B, s.suggestedEntries]), ae = (U) => {
    const te = /* @__PURE__ */ new Map();
    Object.entries(f).forEach(([ue, re]) => {
      re.forEach((pe) => {
        te.set(`${ue}::${pe.uid}`, pe);
      });
    });
    const ne = {};
    Object.entries(U).forEach(([ue, re]) => {
      re.forEach((pe) => {
        const Re = `${ue}::${pe.uid}`, Se = te.get(Re);
        let me = !1;
        if (!Se)
          me = !0;
        else {
          const fe = (pe.content || "") !== (Se.content || ""), we = (pe.comment || "") !== (Se.comment || ""), Le = (pe.key || []).slice().sort().join(",") !== (Se.key || []).slice().sort().join(",");
          (fe || we || Le) && (me = !0);
        }
        me && (ne[ue] || (ne[ue] = []), ne[ue].push(pe));
      });
    }), a((ue) => ({ ...ue, suggestedEntries: ne })), ge("success", "Changes from global revise session applied.");
  }, I = ie.useMemo(
    () => Object.keys(r.promptPresets).map((U) => ({ value: U, label: U })),
    [r.promptPresets]
  ), X = ie.useMemo(
    () => u.map((U) => ({ value: U, label: U })),
    [u]
  ), ce = ie.useMemo(
    () => Object.values(s.selectedEntryUids).reduce((U, te) => U + te.length, 0),
    [s.selectedEntryUids]
  );
  if (g)
    return /* @__PURE__ */ A.jsx("div", { children: "Loading..." });
  const Y = Object.entries(s.suggestedEntries).flatMap(
    ([U, te]) => te.map((ne) => ({ worldName: U, entry: ne }))
  );
  return /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
    /* @__PURE__ */ A.jsxs("div", { id: "worldInfoRecommenderPopup", children: [
      /* @__PURE__ */ A.jsx("h2", { children: "World Info Recommender" }),
      /* @__PURE__ */ A.jsxs("div", { className: "container", children: [
        /* @__PURE__ */ A.jsxs("div", { className: "column", children: [
          /* @__PURE__ */ A.jsxs("div", { className: "card", children: [
            /* @__PURE__ */ A.jsx("h3", { children: "Connection Profile" }),
            /* @__PURE__ */ A.jsx(
              n0,
              {
                initialSelectedProfileId: r.profileId,
                onChange: (U) => k("profileId", U?.id)
              },
              r.profileId || "no-profile"
            )
          ] }),
          /* @__PURE__ */ A.jsx("div", { className: "card", children: /* @__PURE__ */ A.jsx(
            dA,
            {
              profileId: r.profileId,
              onProfileSelected: (U) => k("profileId", U)
            }
          ) }),
          /* @__PURE__ */ A.jsxs("div", { className: "card", children: [
            /* @__PURE__ */ A.jsx("h3", { children: "Context to Send" }),
            /* @__PURE__ */ A.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "5px" }, children: [
              /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
                /* @__PURE__ */ A.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.contextToSend.stDescription,
                    onChange: (U) => R("stDescription", U.target.checked)
                  }
                ),
                "Description of SillyTavern and Lorebook"
              ] }),
              w !== "_global" && /* @__PURE__ */ A.jsxs("div", { className: "message-options", children: [
                /* @__PURE__ */ A.jsx("h4", { children: "Messages to Include" }),
                /* @__PURE__ */ A.jsxs(
                  "select",
                  {
                    className: "text_pole",
                    value: r.contextToSend.messages.type,
                    onChange: (U) => R("messages", {
                      ...r.contextToSend.messages,
                      type: U.target.value
                    }),
                    children: [
                      /* @__PURE__ */ A.jsx("option", { value: "none", children: "None" }),
                      /* @__PURE__ */ A.jsx("option", { value: "all", children: "All Messages" }),
                      /* @__PURE__ */ A.jsx("option", { value: "first", children: "First X Messages" }),
                      /* @__PURE__ */ A.jsx("option", { value: "last", children: "Last X Messages" }),
                      /* @__PURE__ */ A.jsx("option", { value: "range", children: "Range" })
                    ]
                  }
                ),
                r.contextToSend.messages.type === "first" && /* @__PURE__ */ A.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ A.jsxs("label", { children: [
                  "First",
                  " ",
                  /* @__PURE__ */ A.jsx(
                    "input",
                    {
                      type: "number",
                      className: "text_pole small message-input",
                      min: "1",
                      value: r.contextToSend.messages.first ?? 10,
                      onChange: (U) => R("messages", {
                        ...r.contextToSend.messages,
                        first: parseInt(U.target.value) || 10
                      })
                    }
                  ),
                  " ",
                  "Messages"
                ] }) }),
                r.contextToSend.messages.type === "last" && /* @__PURE__ */ A.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ A.jsxs("label", { children: [
                  "Last",
                  " ",
                  /* @__PURE__ */ A.jsx(
                    "input",
                    {
                      type: "number",
                      className: "text_pole small message-input",
                      min: "1",
                      value: r.contextToSend.messages.last ?? 10,
                      onChange: (U) => R("messages", {
                        ...r.contextToSend.messages,
                        last: parseInt(U.target.value) || 10
                      })
                    }
                  ),
                  " ",
                  "Messages"
                ] }) }),
                r.contextToSend.messages.type === "range" && /* @__PURE__ */ A.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ A.jsxs("label", { children: [
                  "Range:",
                  " ",
                  /* @__PURE__ */ A.jsx(
                    "input",
                    {
                      type: "number",
                      className: "text_pole small message-input",
                      min: "0",
                      placeholder: "Start",
                      value: r.contextToSend.messages.range?.start ?? 0,
                      onChange: (U) => R("messages", {
                        ...r.contextToSend.messages,
                        range: {
                          ...r.contextToSend.messages.range,
                          start: parseInt(U.target.value) || 0
                        }
                      })
                    }
                  ),
                  " ",
                  "to",
                  " ",
                  /* @__PURE__ */ A.jsx(
                    "input",
                    {
                      type: "number",
                      className: "text_pole small message-input",
                      min: "1",
                      placeholder: "End",
                      value: r.contextToSend.messages.range?.end ?? 10,
                      onChange: (U) => R("messages", {
                        ...r.contextToSend.messages,
                        range: {
                          ...r.contextToSend.messages.range,
                          end: parseInt(U.target.value) || 10
                        }
                      })
                    }
                  )
                ] }) })
              ] }),
              /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
                /* @__PURE__ */ A.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.contextToSend.charCard,
                    onChange: (U) => R("charCard", U.target.checked)
                  }
                ),
                "Char Card"
              ] }),
              p.length > 0 && /* @__PURE__ */ A.jsxs("div", { children: [
                /* @__PURE__ */ A.jsx("h4", { children: "Select Character" }),
                /* @__PURE__ */ A.jsx("select", { className: "text_pole", title: "Select character for your group.", children: p.map((U) => /* @__PURE__ */ A.jsx("option", { value: U.avatar, children: U.name }, U.avatar)) })
              ] }),
              /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
                /* @__PURE__ */ A.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.contextToSend.authorNote,
                    onChange: (U) => R("authorNote", U.target.checked)
                  }
                ),
                " ",
                "Author Note"
              ] }),
              /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
                /* @__PURE__ */ A.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.contextToSend.worldInfo,
                    onChange: (U) => R("worldInfo", U.target.checked)
                  }
                ),
                " ",
                "World Info"
              ] }),
              /* @__PURE__ */ A.jsxs("div", { children: [
                /* @__PURE__ */ A.jsx("h4", { children: "Lorebooks to Include" }),
                /* @__PURE__ */ A.jsx(
                  a0,
                  {
                    items: X,
                    value: s.selectedWorldNames,
                    onChange: (U) => {
                      a((te) => {
                        const ne = { ...te.selectedEntryUids };
                        return te.selectedWorldNames.filter((re) => !U.includes(re)).forEach((re) => delete ne[re]), { ...te, selectedWorldNames: U, selectedEntryUids: ne };
                      });
                    },
                    multiple: !0,
                    enableSearch: !0
                  }
                )
              ] }),
              s.selectedWorldNames.length > 0 && /* @__PURE__ */ A.jsxs("div", { className: "entry-selection-control", children: [
                /* @__PURE__ */ A.jsxs(
                  Ee,
                  {
                    className: "menu_button",
                    onClick: () => C(!0),
                    title: "Select specific entries from the chosen lorebooks",
                    children: [
                      /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-list-check" }),
                      "Select Entries"
                    ]
                  }
                ),
                /* @__PURE__ */ A.jsx("span", { children: ce > 0 ? `${ce} selected` : "All entries included" })
              ] }),
              /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
                /* @__PURE__ */ A.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.contextToSend.suggestedEntries,
                    onChange: (U) => R("suggestedEntries", U.target.checked)
                  }
                ),
                " ",
                "Existing Suggestions"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ A.jsxs("div", { className: "card", children: [
            /* @__PURE__ */ A.jsxs("label", { children: [
              "Max Context",
              /* @__PURE__ */ A.jsxs(
                "select",
                {
                  className: "text_pole",
                  title: "Select Max Context Type",
                  value: r.maxContextType,
                  onChange: (U) => k("maxContextType", U.target.value),
                  children: [
                    /* @__PURE__ */ A.jsx("option", { value: "profile", children: "Use profile preset" }),
                    /* @__PURE__ */ A.jsx("option", { value: "sampler", children: "Use active preset in sampler settings" }),
                    /* @__PURE__ */ A.jsx("option", { value: "custom", children: "Custom" })
                  ]
                }
              )
            ] }),
            r.maxContextType === "custom" && /* @__PURE__ */ A.jsx("label", { style: { marginTop: "10px" }, children: /* @__PURE__ */ A.jsx(
              "input",
              {
                type: "number",
                className: "text_pole",
                min: "1",
                step: "1",
                placeholder: "Enter max tokens",
                value: r.maxContextValue,
                onChange: (U) => k("maxContextValue", parseInt(U.target.value) || 2048)
              }
            ) }),
            /* @__PURE__ */ A.jsxs("label", { style: { display: "block", marginTop: "10px" }, children: [
              "Max Response Tokens",
              /* @__PURE__ */ A.jsx(
                "input",
                {
                  type: "number",
                  className: "text_pole",
                  min: "1",
                  step: "1",
                  placeholder: "Enter max response tokens",
                  value: r.maxResponseToken,
                  onChange: (U) => k("maxResponseToken", parseInt(U.target.value) || 256)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ A.jsxs("div", { className: "card", children: [
            /* @__PURE__ */ A.jsx("h3", { children: "Your Prompt" }),
            /* @__PURE__ */ A.jsx(
              qf,
              {
                label: "Prompt Preset",
                items: I,
                value: r.promptPreset,
                readOnlyValues: ["default"],
                onChange: (U) => k("promptPreset", U ?? "default"),
                onItemsChange: (U) => {
                  const te = U.reduce(
                    (ne, ue) => (ne[ue.value] = r.promptPresets[ue.value] ?? { content: "" }, ne),
                    {}
                  );
                  k("promptPresets", te);
                },
                enableCreate: !0,
                enableRename: !0,
                enableDelete: !0
              }
            ),
            /* @__PURE__ */ A.jsx(
              Zn,
              {
                value: r.promptPresets[r.promptPreset]?.content ?? "",
                onChange: (U) => {
                  const te = { ...r.promptPresets };
                  te[r.promptPreset] && (te[r.promptPreset].content = U.target.value, k("promptPresets", te));
                },
                placeholder: "e.g., 'Suggest entries for places {{user}} visited.'",
                rows: 4,
                style: { marginTop: "5px", width: "100%" }
              }
            ),
            /* @__PURE__ */ A.jsx(
              Ee,
              {
                onClick: () => j(),
                disabled: y,
                className: "menu_button interactable",
                style: { marginTop: "5px" },
                children: y ? "Generating..." : "Send Prompt"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ A.jsx("div", { className: "wide-column", children: /* @__PURE__ */ A.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ A.jsx("h3", { children: "Suggested Entries" }),
          /* @__PURE__ */ A.jsxs("div", { className: "actions", children: [
            /* @__PURE__ */ A.jsx(
              Ee,
              {
                onClick: q,
                disabled: y || Y.length === 0,
                className: "menu_button interactable",
                children: "Add All"
              }
            ),
            /* @__PURE__ */ A.jsxs(
              Ee,
              {
                onClick: () => P(!0),
                disabled: y,
                className: "menu_button interactable",
                title: "Revise all selected existing entries and current suggestions in a single chat session",
                children: [
                  /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-comments" }),
                  " Global Revise"
                ]
              }
            ),
            /* @__PURE__ */ A.jsx(
              Ee,
              {
                onClick: () => O(!0),
                disabled: y,
                className: "menu_button interactable",
                title: "Import existing entries to continue/revise them",
                children: "Import Entry"
              }
            ),
            /* @__PURE__ */ A.jsx(Ee, { onClick: G, disabled: y, className: "menu_button interactable", children: "Reset" })
          ] }),
          /* @__PURE__ */ A.jsxs("div", { children: [
            Y.length === 0 && /* @__PURE__ */ A.jsx("p", { children: "No suggestions yet. Send a prompt to get started!" }),
            Y.map(({ worldName: U, entry: te }) => /* @__PURE__ */ A.jsx(
              eA,
              {
                initialWorldName: U,
                entry: te,
                allWorldNames: u,
                existingEntry: f[U]?.find((ne) => ne.uid === te.uid),
                sessionRegexIds: s.regexIds,
                onAdd: D,
                onRemove: V,
                onContinue: j,
                onUpdate: K,
                entriesGroupByWorldName: f,
                sessionForContext: s,
                contextToSend: r.contextToSend
              },
              `${U}-${te.uid}-${te.comment}`
            ))
          ] })
        ] }) })
      ] })
    ] }),
    h && /* @__PURE__ */ A.jsx(
      tr,
      {
        type: Lt.CONFIRM,
        content: /* @__PURE__ */ A.jsx(
          l_,
          {
            ref: l,
            entriesByWorldName: B,
            initialSelectedUids: s.selectedEntryUids,
            title: "Select Entries to Include in Context"
          }
        ),
        onComplete: (U) => {
          if (U && l.current) {
            const te = l.current.getSelection();
            a((ne) => ({ ...ne, selectedEntryUids: te }));
          }
          C(!1);
        },
        options: { wide: !0 }
      }
    ),
    x && /* @__PURE__ */ A.jsx(
      tr,
      {
        type: Lt.CONFIRM,
        content: /* @__PURE__ */ A.jsx(
          l_,
          {
            ref: _,
            entriesByWorldName: f,
            initialSelectedUids: {},
            title: "Select Entries to Import for Revision"
          }
        ),
        onComplete: (U) => {
          if (U && _.current) {
            const te = _.current.getSelection();
            M(te);
          }
          O(!1);
        },
        options: { wide: !0 }
      }
    ),
    T && /* @__PURE__ */ A.jsx(
      tr,
      {
        type: Lt.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          M0,
          {
            target: { type: "global" },
            initialState: J,
            onClose: () => P(!1),
            onApply: ae,
            sessionForContext: s,
            allEntries: f,
            contextToSend: r.contextToSend
          }
        ),
        onComplete: () => P(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, hA = () => {
  const [t, r] = ie.useState(!1), [s, a] = ie.useState(null), u = () => {
    a(AS()), r(!0);
  }, c = () => r(!1);
  return window.openWorldInfoRecommenderPopup = u, t ? /* @__PURE__ */ A.jsx(
    tr,
    {
      content: /* @__PURE__ */ A.jsx(fA, {}),
      type: Lt.DISPLAY,
      onComplete: c,
      options: {
        large: !0,
        wide: !0,
        onClose: async () => {
          try {
            await xS(s);
          } finally {
            oo(), a(null);
          }
        }
      }
    }
  ) : null;
};
function pA() {
  function t(r) {
    if (!r)
      return null;
    const s = [], a = Array.isArray(r) ? r : [r];
    for (const u of a) {
      let c = u.trim();
      c.startsWith("[") && c.endsWith("]") && (c = c.slice(1, -1));
      let f = "", m = !1, p = "";
      for (let v = 0; v < c.length; v++) {
        const g = c[v];
        g === '"' || g === "'" ? v > 0 && c[v - 1] === "\\" ? f = f.slice(0, -1) + g : m ? g === p ? (m = !1, f.trim() && s.push(f.trim()), f = "", p = "") : f += g : (m = !0, p = g) : g === "," && !m ? (f.trim() && s.push(f.trim()), f = "") : f += g;
      }
      f.trim() && s.push(f.trim());
    }
    return s;
  }
  je.SlashCommandParser.addCommandObject(
    je.SlashCommand.fromProps({
      name: "world-info-recommender-popup-open",
      helpString: "Open World Info Recommender popup",
      unnamedArgumentList: [],
      callback: async (r, s) => (window.openWorldInfoRecommenderPopup && window.openWorldInfoRecommenderPopup(), !1),
      returns: je.ARGUMENT_TYPE.BOOLEAN
    })
  ), je.SlashCommandParser.addCommandObject(
    je.SlashCommand.fromProps({
      name: "world-info-recommender-run",
      helpString: `
              <div class="inline-drawer">
                  <details>
                      <summary>Run the World Info Recommender AI automatically.</summary>
                      <div class="list-group">
                          Executes the recommendation process using the specified parameters.
                          <br>
                          - <b>profile</b>: (Required) Connection profile ID/name to use for the AI request.
                          <br>
                          - <b>prompt</b>: (Required) The core task/instruction for the AI. Passed as unnamed argument(s).
                          <br>
                          - <b>lorebooks</b>: List of lorebook names to include as context. Defaults to currently active worlds.
                          <br>
                          - <b>allowed-ops</b>: List of operations allowed ('add', 'update'). Defaults to 'add,update'.
                          <br>
                          - <b>editable-entries</b>: Comma-separated list of specific entries allowed for update, format: <code>WorldName.EntryComment</code> or <code>WorldName.UID</code>. If provided, only these entries can be updated. Adds are still allowed if 'add' is in allowed-ops. Defaults to allowing updates for all entries.
                          <br>
                          - <b>context</b>: Context parts ('stDescription', 'messages', 'charCard', 'authorNote', 'worldInfo'). Defaults to extension settings.
                          <br>
                          - <b>messages</b>: Message range ('all', 'none', 'first:N', 'last:N', 'range:S-E'). Defaults to extension settings.
                          <br>
                          - <b>max-context</b>: Override context token limit (number). Defaults to extension settings.
                          <br>
                          - <b>max-response</b>: Override response token limit (number). Defaults to extension settings.
                          <br>
                          - <b>main-context-template</b>: Override main context template preset (string). Defaults to extension settings.
                          <br>
                          - <b>silent</b>: Suppress success/error messages (boolean). Defaults to false.
                      </div>
                      <div>
                          <b>Example:</b>
                          <pre><code>/wir-run profile=your_profile_id lorebooks=[CommonEvents,Characters] allowed-ops=[add] "Create 3 new entries about recent events in the tavern based on the last 5 messages."</code></pre>
                          <pre><code>/wir-run profile=your_profile_name editable-entries=[Characters.12345,Locations.The Docks] messages=last:10 prompt="Update the description for character UID 12345 and The Docks based on the recent fight."</code></pre>
                      </div>
                  </details>
              </div>
          `,
      returns: je.ARGUMENT_TYPE.BOOLEAN,
      namedArgumentList: [
        je.SlashCommandNamedArgument.fromProps({
          name: "profile",
          description: "Connection Profile ID/name to use for the AI request.",
          typeList: [je.ARGUMENT_TYPE.STRING],
          isRequired: !0,
          enumProvider: aw
        }),
        je.SlashCommandNamedArgument.fromProps({
          name: "lorebooks",
          description: "List of lorebook names to include as context (defaults to active).",
          typeList: [je.ARGUMENT_TYPE.LIST],
          isRequired: !1,
          acceptsMultiple: !0,
          enumProvider: S2.worlds
        }),
        je.SlashCommandNamedArgument.fromProps({
          name: "allowed-ops",
          description: "Operations allowed: 'add', 'update'.",
          typeList: [je.ARGUMENT_TYPE.LIST],
          isRequired: !1,
          defaultValue: "[add,update]",
          enumList: ["add", "update"]
        }),
        je.SlashCommandNamedArgument.fromProps({
          name: "editable-entries",
          description: "Specific entries allowed for update: 'WorldName.Comment' or 'WorldName.UID' (comma-separated).",
          typeList: [je.ARGUMENT_TYPE.STRING],
          isRequired: !1
        }),
        je.SlashCommandNamedArgument.fromProps({
          name: "context",
          description: "Context parts: 'stDescription', 'messages', 'charCard', 'authorNote', 'worldInfo'.",
          typeList: [je.ARGUMENT_TYPE.LIST],
          isRequired: !1,
          acceptsMultiple: !0,
          // Default is handled by falling back to settings
          enumList: ["stDescription", "messages", "charCard", "authorNote", "worldInfo"]
        }),
        je.SlashCommandNamedArgument.fromProps({
          name: "messages",
          description: "Message range: 'all', 'none', 'first:N', 'last:N', 'range:S-E'.",
          typeList: [je.ARGUMENT_TYPE.STRING],
          isRequired: !1
          // Default is handled by falling back to settings
        }),
        je.SlashCommandNamedArgument.fromProps({
          name: "max-context",
          description: "Override context token limit.",
          typeList: [je.ARGUMENT_TYPE.NUMBER],
          isRequired: !1
        }),
        je.SlashCommandNamedArgument.fromProps({
          name: "max-response",
          description: "Override response token limit.",
          typeList: [je.ARGUMENT_TYPE.NUMBER],
          isRequired: !1
        }),
        je.SlashCommandNamedArgument.fromProps({
          name: "main-context-template",
          description: "Override main context template preset.",
          typeList: [je.ARGUMENT_TYPE.STRING],
          isRequired: !1
        }),
        je.SlashCommandNamedArgument.fromProps({
          name: "silent",
          description: "Suppress success/error messages.",
          typeList: [je.ARGUMENT_TYPE.BOOLEAN],
          isRequired: !1,
          defaultValue: !1
        })
      ],
      unnamedArgumentList: [
        je.SlashCommandArgument.fromProps({
          description: "The prompt/task for the AI.",
          typeList: [je.ARGUMENT_TYPE.STRING],
          isRequired: !0,
          acceptsMultiple: !0
          // Allows prompts with spaces
        })
      ],
      // The callback function to execute
      callback: async (r, s) => {
        const a = r.silent ?? !1;
        try {
          const u = It.getSettings(), c = Array.isArray(s) ? s.join(" ") : s, f = r.profile;
          let m;
          if (!c)
            throw new Error("Prompt argument is required.");
          if (!f)
            throw new Error("Profile argument is required.");
          const p = je.extensionSettings?.connectionManager?.profiles?.find(
            (B) => B.id === f || B.name === f
          );
          if (!p)
            throw new Error(`Profile with ID "${f}" not found.`);
          m = p.id;
          const v = t(r.lorebooks);
          let g;
          if (v !== null) {
            g = {};
            for (const B of v) {
              const J = await je.loadWorldInfo(B);
              J && (g[B] = Object.values(J.entries));
            }
          } else
            g = await bl(["all"], !0, sn);
          const E = Object.keys(g);
          let y;
          if (v !== null) {
            if (y = v.map((B) => B.trim()).filter((B) => E.includes(B) ? !0 : (a || ge("warning", `Specified lorebook "${B}" is not active or does not exist. Ignoring.`), !1)), y.length === 0)
              throw new Error("No valid lorebooks specified or active.");
          } else
            y = E;
          y.length === 0 && (a || ge("warning", "No active lorebooks found to use for context."));
          const S = t(r["allowed-ops"]), h = S !== null ? S : ["add", "update"], C = h.includes("add"), x = h.includes("update"), O = /* @__PURE__ */ new Set(), T = t(r["editable-entries"]);
          T !== null && T.forEach((B) => {
            O.add(B.trim());
          });
          const P = O.size > 0, l = t(r.context), _ = { ...u.contextToSend };
          if (l !== null) {
            const B = l.map((J) => J.trim());
            _.stDescription = B.includes("stdescription"), _.messages.type = B.includes("messages") ? _.messages.type : "none", _.charCard = B.includes("charcard"), _.authorNote = B.includes("authornote"), _.worldInfo = B.includes("worldinfo"), _.suggestedEntries = !1;
          }
          if (r.messages && _.messages.type !== "none") {
            const B = r.messages.toLowerCase().trim();
            if (B === "all") _.messages.type = "all";
            else if (B === "none") _.messages.type = "none";
            else if (B.startsWith("first:"))
              _.messages.type = "first", _.messages.first = parseInt(B.split(":")[1]) || 10;
            else if (B.startsWith("last:"))
              _.messages.type = "last", _.messages.last = parseInt(B.split(":")[1]) || 10;
            else if (B.startsWith("range:")) {
              const J = B.split(":")[1].split("-");
              _.messages.type = "range", _.messages.range = {
                start: parseInt(J[0]) || 0,
                end: parseInt(J[1]) || 10
              };
            } else
              a || ge("warning", `Invalid 'messages' argument format: "${r.messages}". Using default.`);
          }
          const w = {
            // Let runWorldInfoRecommendation determine these from profile
            presetName: void 0,
            contextName: void 0,
            instructName: void 0,
            syspromptName: void 0,
            // Use derived contextToSend settings
            ignoreCharacterFields: !_.charCard,
            ignoreWorldInfo: !0,
            // Handled manually inside runWorldInfoRecommendation
            ignoreAuthorNote: !_.authorNote,
            maxContext: r["max-context"] ?? (u.maxContextType === "custom" ? u.maxContextValue : u.maxContextType === "profile" ? "preset" : "active"),
            includeNames: !!Ft,
            targetCharacterId: Ft ? sn : void 0
            // Simplification: Use current char in group context
          };
          switch (_.messages.type) {
            case "none":
              w.messageIndexesBetween = { start: -1, end: -1 };
              break;
            case "first":
              w.messageIndexesBetween = { start: 0, end: _.messages.first ?? 10 };
              break;
            case "last":
              const B = _.messages.last ?? 10, J = je.chat?.length ?? 0;
              w.messageIndexesBetween = {
                end: Math.max(0, J - 1),
                start: Math.max(0, J - B)
              };
              break;
            case "range":
              _.messages.range && (w.messageIndexesBetween = {
                start: _.messages.range.start,
                end: _.messages.range.end
              });
              break;
            case "all":
            default:
              break;
          }
          const k = {
            selectedWorldNames: y,
            suggestedEntries: {},
            // Start with no pre-existing suggestions
            blackListedEntries: [],
            // Start with no blacklist
            regexIds: {},
            // Start with no regexes
            selectedEntryUids: {}
          }, R = r["max-response"] ? parseInt(r["max-response"]) : void 0, L = structuredClone(u.prompts);
          _.stDescription || delete L.stDescription, (!_.worldInfo || y.length === 0) && delete L.currentLorebooks, delete L.suggestedLorebooks;
          const j = {
            profileId: m,
            userPrompt: c,
            buildPromptOptions: w,
            session: k,
            entriesGroupByWorldName: g,
            // Pass the current state
            promptSettings: L,
            mainContextList: u.mainContextTemplatePresets[r["main-context-template"] ?? u.mainContextTemplatePreset].prompts.filter((B) => B.enabled).map((B) => ({
              promptName: B.promptName,
              role: B.role
            })),
            maxResponseToken: R ?? u.maxResponseToken
          };
          a || ge("info", "Running World Info Recommender...");
          const D = await e0(j);
          if (Object.keys(D).length === 0)
            return a || ge("info", "AI returned no suggestions."), !0;
          let q = 0, G = 0, V = 0;
          const K = /* @__PURE__ */ new Set(), M = structuredClone(g);
          for (const [B, J] of Object.entries(D)) {
            let ae = B;
            if (!y.includes(ae))
              if (E.includes(ae)) {
                a || ge(
                  "warning",
                  `AI suggested entry for "${ae}", but it wasn't in the specified 'lorebooks'. Skipping ${J.length} entries.`
                ), V += J.length;
                continue;
              } else if (y.length > 0)
                ae = y[0], a || ge(
                  "warning",
                  `AI suggested entry for non-existent/inactive world "${B}". Attempting to place in "${ae}".`
                );
              else {
                a || ge(
                  "error",
                  `AI suggested entry for "${B}", but no valid target lorebook available. Skipping ${J.length} entries.`
                ), V += J.length;
                continue;
              }
            for (const I of J) {
              if (M[ae]?.some(
                (ce) => ce.uid === I.uid && ce.comment === I.comment
              )) {
                if (!x) {
                  a || ge(
                    "info",
                    `Skipping update for "${ae}.${I.comment || I.uid}" (updates disallowed).`
                  ), V++;
                  continue;
                }
                if (P) {
                  const ce = `${ae}.${I.comment}`, Y = `${ae}.${I.uid}`;
                  if (!O.has(ce) && !O.has(Y)) {
                    a || ge(
                      "info",
                      `Skipping update for "${ae}.${I.comment || I.uid}" (not in editable-entries).`
                    ), V++;
                    continue;
                  }
                }
              } else if (!C) {
                a || ge(
                  "info",
                  `Skipping add for "${ae}.${I.comment || "New Entry"}" (adds disallowed).`
                ), V++;
                continue;
              }
              try {
                const { status: ce } = rw(I, ae, M);
                ce === "added" ? q++ : G++, K.add(ae);
              } catch (ce) {
                a || ge(
                  "error",
                  `Failed to prepare modification for "${ae}.${I.comment || I.uid}": ${ce.message}`
                ), V++;
              }
            }
          }
          if (K.size > 0) {
            a || ge("info", `Saving changes to ${K.size} lorebook(s)...`);
            for (const B of K) {
              const J = M[B], ae = { entries: {} };
              J.forEach((I) => ae.entries[I.uid] = I), await je.saveWorldInfo(B, ae), je.reloadWorldInfoEditor(B, !0);
            }
          }
          if (!a) {
            const B = [];
            (q > 0 || G > 0 || V > 0) && B.push(`
                <div class="results-summary">
                  <ul>
                  <li><strong>Added:</strong> ${q}</li>
                  <li><strong>Updated:</strong> ${G}</li>
                  <li><strong>Skipped:</strong> ${V}</li>
                  </ul>
                </div>
                `), K.size > 0 && B.push(`
                <div class="modified-worlds">
                  <strong>Modified Lorebooks:</strong>
                  <ul>
                  ${Array.from(K).map((ae) => `<li>${ae}</li>`).join("")}
                  </ul>
                </div>
                `);
            const J = B.length > 0 ? `
                <div class="wir-results">
                  <h4>World Info Recommender Results:</h4>
                  ${B.join("")}
                </div>
                ` : `
                <div class="wir-results">
                  <h4>World Info Recommender:</h4>
                  <p>No changes were made</p>
                </div>
                `;
            ge("success", J, { escapeHtml: !1 });
          }
          return !0;
        } catch (u) {
          return console.error("Error running world-info-recommender-run command:", u), a || ge("error", `World Info Recommender command failed: ${u.message}`), !1;
        }
      }
    })
  );
}
const mA = `<div class="worldInfoRecommender_settings">
    <div class="inline-drawer">
        <div class="inline-drawer-toggle inline-drawer-header">
            <b>World Info Recommender</b>
            <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
        </div>
        <div class="inline-drawer-content"></div>
    </div>
</div>
`, pl = SillyTavern.getContext();
async function gA() {
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", mA);
  const t = document.createElement("div"), r = document.querySelector(
    ".worldInfoRecommender_settings .inline-drawer-content"
  );
  r && (r.prepend(t), kv.createRoot(t).render(
    /* @__PURE__ */ A.jsx(wl.StrictMode, { children: /* @__PURE__ */ A.jsx(hw, {}) })
  ));
  const s = '<div class="menu_button fa-brands fa-wpexplorer interactable worldInfoRecommender-icon" title="World Info Recommender"></div>', a = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], u = document.createElement("div");
  document.body.appendChild(u), kv.createRoot(u).render(
    /* @__PURE__ */ A.jsx(wl.StrictMode, { children: /* @__PURE__ */ A.jsx(hA, {}) })
  ), a.forEach((f) => {
    if (!f) return;
    const m = document.createElement("div");
    m.innerHTML = s.trim();
    const p = m.firstChild;
    p && (f.prepend(p), p.addEventListener("click", () => {
      window.openWorldInfoRecommenderPopup && window.openWorldInfoRecommenderPopup();
    }));
  });
}
function vA() {
  return !(!pl.ConnectionManagerRequestService || !pl.getCharacterCardFields || !pl.getWorldInfoPrompt || !pl.reloadWorldInfoEditor);
}
vA() ? uw().then(() => {
  gA(), pA();
}) : ge("error", `[${Js}] Make sure ST is updated.`);
export {
  gA as init
};
