import { renderStoryString as z1, persona_description_positions as iv } from "../../../../power-user.js";
import { parseMesExamples as L1, baseChatReplace as P1, chat_metadata as zs, getMaxContextSize as I1, name1 as Ea, name2 as Fr, this_chid as sn, extension_prompt_types as Ca, depth_prompt_role_default as B1, depth_prompt_depth_default as U1 } from "../../../../../script.js";
import { createWorldInfoEntry as H1, world_info_include_names as q1, wi_anchor_position as Z1, selected_world_info as G1, METADATA_KEY as V1, world_info as $1, world_names as Y1 } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as X1, formatInstructModeSystemPrompt as F1 } from "../../../../instruct-mode.js";
import { appendFileContent as Q1 } from "../../../../chats.js";
import { setOpenAIMessages as K1, setOpenAIMessageExamples as J1, formatWorldInfo as W1, getPromptPosition as e2, getPromptRole as t2, prepareOpenAIMessages as n2 } from "../../../../openai.js";
import { metadata_keys as Ls } from "../../../../authors-note.js";
import { getGroupDepthPrompts as r2, selected_group as Ft, groups as sv } from "../../../../group-chats.js";
import { runRegexScript as a2, getRegexedString as i2, regex_placement as ov } from "../../../regex/engine.js";
import { getCharaFilename as s2, removeFromArray as uv, runAfterAnimation as o2 } from "../../../../utils.js";
import { commonEnumProviders as u2 } from "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as Ai, fixToastrForDialogs as Yd } from "../../../../popup.js";
import lv from "../../../../../lib/dialog-polyfill.esm.js";
function Qf(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Xd = { exports: {} }, Ps = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cv;
function l2() {
  if (cv) return Ps;
  cv = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function s(a, u, c) {
    var f = null;
    if (c !== void 0 && (f = "" + c), u.key !== void 0 && (f = "" + u.key), "key" in u) {
      c = {};
      for (var m in u)
        m !== "key" && (c[m] = u[m]);
    } else c = u;
    return u = c.ref, {
      $$typeof: n,
      type: a,
      key: f,
      ref: u !== void 0 ? u : null,
      props: c
    };
  }
  return Ps.Fragment = r, Ps.jsx = s, Ps.jsxs = s, Ps;
}
var dv;
function c2() {
  return dv || (dv = 1, Xd.exports = l2()), Xd.exports;
}
var A = c2(), Fd = { exports: {} }, De = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fv;
function d2() {
  if (fv) return De;
  fv = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), f = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), b = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), E = Symbol.iterator;
  function v(I) {
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
  function M() {
  }
  M.prototype = x.prototype;
  function T(I, X, ce) {
    this.props = I, this.context = X, this.refs = C, this.updater = ce || S;
  }
  var L = T.prototype = new M();
  L.constructor = T, h(L, x.prototype), L.isPureReactComponent = !0;
  var l = Array.isArray, y = { H: null, A: null, T: null, S: null, V: null }, w = Object.prototype.hasOwnProperty;
  function k(I, X, ce, $, U, te) {
    return ce = te.ref, {
      $$typeof: n,
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
  function P(I) {
    return typeof I == "object" && I !== null && I.$$typeof === n;
  }
  function O(I) {
    var X = { "=": "=0", ":": "=2" };
    return "$" + I.replace(/[=:]/g, function(ce) {
      return X[ce];
    });
  }
  var z = /\/+/g;
  function q(I, X) {
    return typeof I == "object" && I !== null && I.key != null ? O("" + I.key) : X.toString(36);
  }
  function Y() {
  }
  function G(I) {
    switch (I.status) {
      case "fulfilled":
        return I.value;
      case "rejected":
        throw I.reason;
      default:
        switch (typeof I.status == "string" ? I.then(Y, Y) : (I.status = "pending", I.then(
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
  function W(I, X, ce, $, U) {
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
            case n:
            case r:
              ne = !0;
              break;
            case g:
              return ne = I._init, W(
                ne(I._payload),
                X,
                ce,
                $,
                U
              );
          }
      }
    if (ne)
      return U = U(I), ne = $ === "" ? "." + q(I, 0) : $, l(U) ? (ce = "", ne != null && (ce = ne.replace(z, "$&/") + "/"), W(U, X, ce, "", function(pe) {
        return pe;
      })) : U != null && (P(U) && (U = R(
        U,
        ce + (U.key == null || I && I.key === U.key ? "" : ("" + U.key).replace(
          z,
          "$&/"
        ) + "/") + ne
      )), X.push(U)), 1;
    ne = 0;
    var ue = $ === "" ? "." : $ + ":";
    if (l(I))
      for (var re = 0; re < I.length; re++)
        $ = I[re], te = ue + q($, re), ne += W(
          $,
          X,
          ce,
          te,
          U
        );
    else if (re = v(I), typeof re == "function")
      for (I = re.call(I), re = 0; !($ = I.next()).done; )
        $ = $.value, te = ue + q($, re++), ne += W(
          $,
          X,
          ce,
          te,
          U
        );
    else if (te === "object") {
      if (typeof I.then == "function")
        return W(
          G(I),
          X,
          ce,
          $,
          U
        );
      throw X = String(I), Error(
        "Objects are not valid as a React child (found: " + (X === "[object Object]" ? "object with keys {" + Object.keys(I).join(", ") + "}" : X) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ne;
  }
  function j(I, X, ce) {
    if (I == null) return I;
    var $ = [], U = 0;
    return W(I, $, "", "", function(te) {
      return X.call(ce, te, U++);
    }), $;
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
  var K = typeof reportError == "function" ? reportError : function(I) {
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
    map: j,
    forEach: function(I, X, ce) {
      j(
        I,
        function() {
          X.apply(this, arguments);
        },
        ce
      );
    },
    count: function(I) {
      var X = 0;
      return j(I, function() {
        X++;
      }), X;
    },
    toArray: function(I) {
      return j(I, function(X) {
        return X;
      }) || [];
    },
    only: function(I) {
      if (!P(I))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return I;
    }
  }, De.Component = x, De.Fragment = s, De.Profiler = u, De.PureComponent = T, De.StrictMode = a, De.Suspense = p, De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = y, De.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(I) {
      return y.H.useMemoCache(I);
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
    var $ = h({}, I.props), U = I.key, te = void 0;
    if (X != null)
      for (ne in X.ref !== void 0 && (te = void 0), X.key !== void 0 && (U = "" + X.key), X)
        !w.call(X, ne) || ne === "key" || ne === "__self" || ne === "__source" || ne === "ref" && X.ref === void 0 || ($[ne] = X[ne]);
    var ne = arguments.length - 2;
    if (ne === 1) $.children = ce;
    else if (1 < ne) {
      for (var ue = Array(ne), re = 0; re < ne; re++)
        ue[re] = arguments[re + 2];
      $.children = ue;
    }
    return k(I.type, U, void 0, void 0, te, $);
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
    var $, U = {}, te = null;
    if (X != null)
      for ($ in X.key !== void 0 && (te = "" + X.key), X)
        w.call(X, $) && $ !== "key" && $ !== "__self" && $ !== "__source" && (U[$] = X[$]);
    var ne = arguments.length - 2;
    if (ne === 1) U.children = ce;
    else if (1 < ne) {
      for (var ue = Array(ne), re = 0; re < ne; re++)
        ue[re] = arguments[re + 2];
      U.children = ue;
    }
    if (I && I.defaultProps)
      for ($ in ne = I.defaultProps, ne)
        U[$] === void 0 && (U[$] = ne[$]);
    return k(I, te, void 0, void 0, null, U);
  }, De.createRef = function() {
    return { current: null };
  }, De.forwardRef = function(I) {
    return { $$typeof: m, render: I };
  }, De.isValidElement = P, De.lazy = function(I) {
    return {
      $$typeof: g,
      _payload: { _status: -1, _result: I },
      _init: B
    };
  }, De.memo = function(I, X) {
    return {
      $$typeof: b,
      type: I,
      compare: X === void 0 ? null : X
    };
  }, De.startTransition = function(I) {
    var X = y.T, ce = {};
    y.T = ce;
    try {
      var $ = I(), U = y.S;
      U !== null && U(ce, $), typeof $ == "object" && $ !== null && typeof $.then == "function" && $.then(ae, K);
    } catch (te) {
      K(te);
    } finally {
      y.T = X;
    }
  }, De.unstable_useCacheRefresh = function() {
    return y.H.useCacheRefresh();
  }, De.use = function(I) {
    return y.H.use(I);
  }, De.useActionState = function(I, X, ce) {
    return y.H.useActionState(I, X, ce);
  }, De.useCallback = function(I, X) {
    return y.H.useCallback(I, X);
  }, De.useContext = function(I) {
    return y.H.useContext(I);
  }, De.useDebugValue = function() {
  }, De.useDeferredValue = function(I, X) {
    return y.H.useDeferredValue(I, X);
  }, De.useEffect = function(I, X, ce) {
    var $ = y.H;
    if (typeof ce == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return $.useEffect(I, X);
  }, De.useId = function() {
    return y.H.useId();
  }, De.useImperativeHandle = function(I, X, ce) {
    return y.H.useImperativeHandle(I, X, ce);
  }, De.useInsertionEffect = function(I, X) {
    return y.H.useInsertionEffect(I, X);
  }, De.useLayoutEffect = function(I, X) {
    return y.H.useLayoutEffect(I, X);
  }, De.useMemo = function(I, X) {
    return y.H.useMemo(I, X);
  }, De.useOptimistic = function(I, X) {
    return y.H.useOptimistic(I, X);
  }, De.useReducer = function(I, X, ce) {
    return y.H.useReducer(I, X, ce);
  }, De.useRef = function(I) {
    return y.H.useRef(I);
  }, De.useState = function(I) {
    return y.H.useState(I);
  }, De.useSyncExternalStore = function(I, X, ce) {
    return y.H.useSyncExternalStore(
      I,
      X,
      ce
    );
  }, De.useTransition = function() {
    return y.H.useTransition();
  }, De.version = "19.1.1", De;
}
var hv;
function Kf() {
  return hv || (hv = 1, Fd.exports = d2()), Fd.exports;
}
var ie = Kf();
const vl = /* @__PURE__ */ Qf(ie);
var Qd = { exports: {} }, Is = {}, Kd = { exports: {} }, Jd = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pv;
function f2() {
  return pv || (pv = 1, (function(n) {
    function r(j, B) {
      var K = j.length;
      j.push(B);
      e: for (; 0 < K; ) {
        var ae = K - 1 >>> 1, I = j[ae];
        if (0 < u(I, B))
          j[ae] = B, j[K] = I, K = ae;
        else break e;
      }
    }
    function s(j) {
      return j.length === 0 ? null : j[0];
    }
    function a(j) {
      if (j.length === 0) return null;
      var B = j[0], K = j.pop();
      if (K !== B) {
        j[0] = K;
        e: for (var ae = 0, I = j.length, X = I >>> 1; ae < X; ) {
          var ce = 2 * (ae + 1) - 1, $ = j[ce], U = ce + 1, te = j[U];
          if (0 > u($, K))
            U < I && 0 > u(te, $) ? (j[ae] = te, j[U] = K, ae = U) : (j[ae] = $, j[ce] = K, ae = ce);
          else if (U < I && 0 > u(te, K))
            j[ae] = te, j[U] = K, ae = U;
          else break e;
        }
      }
      return B;
    }
    function u(j, B) {
      var K = j.sortIndex - B.sortIndex;
      return K !== 0 ? K : j.id - B.id;
    }
    if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      n.unstable_now = function() {
        return c.now();
      };
    } else {
      var f = Date, m = f.now();
      n.unstable_now = function() {
        return f.now() - m;
      };
    }
    var p = [], b = [], g = 1, E = null, v = 3, S = !1, h = !1, C = !1, x = !1, M = typeof setTimeout == "function" ? setTimeout : null, T = typeof clearTimeout == "function" ? clearTimeout : null, L = typeof setImmediate < "u" ? setImmediate : null;
    function l(j) {
      for (var B = s(b); B !== null; ) {
        if (B.callback === null) a(b);
        else if (B.startTime <= j)
          a(b), B.sortIndex = B.expirationTime, r(p, B);
        else break;
        B = s(b);
      }
    }
    function y(j) {
      if (C = !1, l(j), !h)
        if (s(p) !== null)
          h = !0, w || (w = !0, q());
        else {
          var B = s(b);
          B !== null && W(y, B.startTime - j);
        }
    }
    var w = !1, k = -1, R = 5, P = -1;
    function O() {
      return x ? !0 : !(n.unstable_now() - P < R);
    }
    function z() {
      if (x = !1, w) {
        var j = n.unstable_now();
        P = j;
        var B = !0;
        try {
          e: {
            h = !1, C && (C = !1, T(k), k = -1), S = !0;
            var K = v;
            try {
              t: {
                for (l(j), E = s(p); E !== null && !(E.expirationTime > j && O()); ) {
                  var ae = E.callback;
                  if (typeof ae == "function") {
                    E.callback = null, v = E.priorityLevel;
                    var I = ae(
                      E.expirationTime <= j
                    );
                    if (j = n.unstable_now(), typeof I == "function") {
                      E.callback = I, l(j), B = !0;
                      break t;
                    }
                    E === s(p) && a(p), l(j);
                  } else a(p);
                  E = s(p);
                }
                if (E !== null) B = !0;
                else {
                  var X = s(b);
                  X !== null && W(
                    y,
                    X.startTime - j
                  ), B = !1;
                }
              }
              break e;
            } finally {
              E = null, v = K, S = !1;
            }
            B = void 0;
          }
        } finally {
          B ? q() : w = !1;
        }
      }
    }
    var q;
    if (typeof L == "function")
      q = function() {
        L(z);
      };
    else if (typeof MessageChannel < "u") {
      var Y = new MessageChannel(), G = Y.port2;
      Y.port1.onmessage = z, q = function() {
        G.postMessage(null);
      };
    } else
      q = function() {
        M(z, 0);
      };
    function W(j, B) {
      k = M(function() {
        j(n.unstable_now());
      }, B);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(j) {
      j.callback = null;
    }, n.unstable_forceFrameRate = function(j) {
      0 > j || 125 < j ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : R = 0 < j ? Math.floor(1e3 / j) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return v;
    }, n.unstable_next = function(j) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = v;
      }
      var K = v;
      v = B;
      try {
        return j();
      } finally {
        v = K;
      }
    }, n.unstable_requestPaint = function() {
      x = !0;
    }, n.unstable_runWithPriority = function(j, B) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var K = v;
      v = j;
      try {
        return B();
      } finally {
        v = K;
      }
    }, n.unstable_scheduleCallback = function(j, B, K) {
      var ae = n.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? ae + K : ae) : K = ae, j) {
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
      return I = K + I, j = {
        id: g++,
        callback: B,
        priorityLevel: j,
        startTime: K,
        expirationTime: I,
        sortIndex: -1
      }, K > ae ? (j.sortIndex = K, r(b, j), s(p) === null && j === s(b) && (C ? (T(k), k = -1) : C = !0, W(y, K - ae))) : (j.sortIndex = I, r(p, j), h || S || (h = !0, w || (w = !0, q()))), j;
    }, n.unstable_shouldYield = O, n.unstable_wrapCallback = function(j) {
      var B = v;
      return function() {
        var K = v;
        v = B;
        try {
          return j.apply(this, arguments);
        } finally {
          v = K;
        }
      };
    };
  })(Jd)), Jd;
}
var mv;
function h2() {
  return mv || (mv = 1, Kd.exports = f2()), Kd.exports;
}
var Wd = { exports: {} }, Ht = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gv;
function p2() {
  if (gv) return Ht;
  gv = 1;
  var n = Kf();
  function r(p) {
    var b = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        b += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return "Minified React error #" + p + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function c(p, b, g) {
    var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: E == null ? null : "" + E,
      children: p,
      containerInfo: b,
      implementation: g
    };
  }
  var f = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(p, b) {
    if (p === "font") return "";
    if (typeof b == "string")
      return b === "use-credentials" ? b : "";
  }
  return Ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a, Ht.createPortal = function(p, b) {
    var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!b || b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11)
      throw Error(r(299));
    return c(p, b, null, g);
  }, Ht.flushSync = function(p) {
    var b = f.T, g = a.p;
    try {
      if (f.T = null, a.p = 2, p) return p();
    } finally {
      f.T = b, a.p = g, a.d.f();
    }
  }, Ht.preconnect = function(p, b) {
    typeof p == "string" && (b ? (b = b.crossOrigin, b = typeof b == "string" ? b === "use-credentials" ? b : "" : void 0) : b = null, a.d.C(p, b));
  }, Ht.prefetchDNS = function(p) {
    typeof p == "string" && a.d.D(p);
  }, Ht.preinit = function(p, b) {
    if (typeof p == "string" && b && typeof b.as == "string") {
      var g = b.as, E = m(g, b.crossOrigin), v = typeof b.integrity == "string" ? b.integrity : void 0, S = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
      g === "style" ? a.d.S(
        p,
        typeof b.precedence == "string" ? b.precedence : void 0,
        {
          crossOrigin: E,
          integrity: v,
          fetchPriority: S
        }
      ) : g === "script" && a.d.X(p, {
        crossOrigin: E,
        integrity: v,
        fetchPriority: S,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0
      });
    }
  }, Ht.preinitModule = function(p, b) {
    if (typeof p == "string")
      if (typeof b == "object" && b !== null) {
        if (b.as == null || b.as === "script") {
          var g = m(
            b.as,
            b.crossOrigin
          );
          a.d.M(p, {
            crossOrigin: g,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
            nonce: typeof b.nonce == "string" ? b.nonce : void 0
          });
        }
      } else b == null && a.d.M(p);
  }, Ht.preload = function(p, b) {
    if (typeof p == "string" && typeof b == "object" && b !== null && typeof b.as == "string") {
      var g = b.as, E = m(g, b.crossOrigin);
      a.d.L(p, g, {
        crossOrigin: E,
        integrity: typeof b.integrity == "string" ? b.integrity : void 0,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0,
        type: typeof b.type == "string" ? b.type : void 0,
        fetchPriority: typeof b.fetchPriority == "string" ? b.fetchPriority : void 0,
        referrerPolicy: typeof b.referrerPolicy == "string" ? b.referrerPolicy : void 0,
        imageSrcSet: typeof b.imageSrcSet == "string" ? b.imageSrcSet : void 0,
        imageSizes: typeof b.imageSizes == "string" ? b.imageSizes : void 0,
        media: typeof b.media == "string" ? b.media : void 0
      });
    }
  }, Ht.preloadModule = function(p, b) {
    if (typeof p == "string")
      if (b) {
        var g = m(b.as, b.crossOrigin);
        a.d.m(p, {
          as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
          crossOrigin: g,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0
        });
      } else a.d.m(p);
  }, Ht.requestFormReset = function(p) {
    a.d.r(p);
  }, Ht.unstable_batchedUpdates = function(p, b) {
    return p(b);
  }, Ht.useFormState = function(p, b, g) {
    return f.H.useFormState(p, b, g);
  }, Ht.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, Ht.version = "19.1.1", Ht;
}
var vv;
function a0() {
  if (vv) return Wd.exports;
  vv = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Wd.exports = p2(), Wd.exports;
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
var yv;
function m2() {
  if (yv) return Is;
  yv = 1;
  var n = h2(), r = Kf(), s = a0();
  function a(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var i = 2; i < arguments.length; i++)
        t += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function c(e) {
    var t = e, i = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (i = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? i : null;
  }
  function f(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (c(e) !== e)
      throw Error(a(188));
  }
  function p(e) {
    var t = e.alternate;
    if (!t) {
      if (t = c(e), t === null) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var i = e, o = t; ; ) {
      var d = i.return;
      if (d === null) break;
      var _ = d.alternate;
      if (_ === null) {
        if (o = d.return, o !== null) {
          i = o;
          continue;
        }
        break;
      }
      if (d.child === _.child) {
        for (_ = d.child; _; ) {
          if (_ === i) return m(d), e;
          if (_ === o) return m(d), t;
          _ = _.sibling;
        }
        throw Error(a(188));
      }
      if (i.return !== o.return) i = d, o = _;
      else {
        for (var N = !1, D = d.child; D; ) {
          if (D === i) {
            N = !0, i = d, o = _;
            break;
          }
          if (D === o) {
            N = !0, o = d, i = _;
            break;
          }
          D = D.sibling;
        }
        if (!N) {
          for (D = _.child; D; ) {
            if (D === i) {
              N = !0, i = _, o = d;
              break;
            }
            if (D === o) {
              N = !0, o = _, i = d;
              break;
            }
            D = D.sibling;
          }
          if (!N) throw Error(a(189));
        }
      }
      if (i.alternate !== o) throw Error(a(190));
    }
    if (i.tag !== 3) throw Error(a(188));
    return i.stateNode.current === i ? e : t;
  }
  function b(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = b(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var g = Object.assign, E = Symbol.for("react.element"), v = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), M = Symbol.for("react.provider"), T = Symbol.for("react.consumer"), L = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), O = Symbol.for("react.memo_cache_sentinel"), z = Symbol.iterator;
  function q(e) {
    return e === null || typeof e != "object" ? null : (e = z && e[z] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Y = Symbol.for("react.client.reference");
  function G(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Y ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case h:
        return "Fragment";
      case x:
        return "Profiler";
      case C:
        return "StrictMode";
      case y:
        return "Suspense";
      case w:
        return "SuspenseList";
      case P:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case S:
          return "Portal";
        case L:
          return (e.displayName || "Context") + ".Provider";
        case T:
          return (e._context.displayName || "Context") + ".Consumer";
        case l:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case k:
          return t = e.displayName || null, t !== null ? t : G(e.type) || "Memo";
        case R:
          t = e._payload, e = e._init;
          try {
            return G(e(t));
          } catch {
          }
      }
    return null;
  }
  var W = Array.isArray, j = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = {
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
  function $(e, t) {
    I++, ae[I] = e.current, e.current = t;
  }
  var U = X(null), te = X(null), ne = X(null), ue = X(null);
  function re(e, t) {
    switch ($(ne, t), $(te, e), $(U, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Rg(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Rg(t), e = Dg(t, e);
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
    ce(U), $(U, e);
  }
  function pe() {
    ce(U), ce(te), ce(ne);
  }
  function je(e) {
    e.memoizedState !== null && $(ue, e);
    var t = U.current, i = Dg(t, e.type);
    t !== i && ($(te, e), $(U, i));
  }
  function Se(e) {
    te.current === e && (ce(U), ce(te)), ue.current === e && (ce(ue), Os._currentValue = K);
  }
  var me = Object.prototype.hasOwnProperty, fe = n.unstable_scheduleCallback, we = n.unstable_cancelCallback, Pe = n.unstable_shouldYield, We = n.unstable_requestPaint, Fe = n.unstable_now, Rn = n.unstable_getCurrentPriorityLevel, dt = n.unstable_ImmediatePriority, ye = n.unstable_UserBlockingPriority, _e = n.unstable_NormalPriority, qe = n.unstable_LowPriority, Ze = n.unstable_IdlePriority, et = n.log, Vn = n.unstable_setDisableYieldValue, Dn = null, mt = null;
  function $n(e) {
    if (typeof et == "function" && Vn(e), mt && typeof mt.setStrictMode == "function")
      try {
        mt.setStrictMode(Dn, e);
      } catch {
      }
  }
  var Gt = Math.clz32 ? Math.clz32 : ia, bn = Math.log, aa = Math.LN2;
  function ia(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (bn(e) / aa | 0) | 0;
  }
  var ar = 256, Yn = 4194304;
  function Sn(e) {
    var t = e & 42;
    if (t !== 0) return t;
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
  function Vt(e, t, i) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var d = 0, _ = e.suspendedLanes, N = e.pingedLanes;
    e = e.warmLanes;
    var D = o & 134217727;
    return D !== 0 ? (o = D & ~_, o !== 0 ? d = Sn(o) : (N &= D, N !== 0 ? d = Sn(N) : i || (i = D & ~e, i !== 0 && (d = Sn(i))))) : (D = o & ~_, D !== 0 ? d = Sn(D) : N !== 0 ? d = Sn(N) : i || (i = o & ~e, i !== 0 && (d = Sn(i)))), d === 0 ? 0 : t !== 0 && t !== d && (t & _) === 0 && (_ = d & -d, i = t & -t, _ >= i || _ === 32 && (i & 4194048) !== 0) ? t : d;
  }
  function Qt(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function ho(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
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
        return t + 5e3;
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
  function vh() {
    var e = Yn;
    return Yn <<= 1, (Yn & 62914560) === 0 && (Yn = 4194304), e;
  }
  function Ll(e) {
    for (var t = [], i = 0; 31 > i; i++) t.push(e);
    return t;
  }
  function Ui(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function E_(e, t, i, o, d, _) {
    var N = e.pendingLanes;
    e.pendingLanes = i, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= i, e.entangledLanes &= i, e.errorRecoveryDisabledLanes &= i, e.shellSuspendCounter = 0;
    var D = e.entanglements, H = e.expirationTimes, Q = e.hiddenUpdates;
    for (i = N & ~i; 0 < i; ) {
      var se = 31 - Gt(i), le = 1 << se;
      D[se] = 0, H[se] = -1;
      var J = Q[se];
      if (J !== null)
        for (Q[se] = null, se = 0; se < J.length; se++) {
          var ee = J[se];
          ee !== null && (ee.lane &= -536870913);
        }
      i &= ~le;
    }
    o !== 0 && yh(e, o, 0), _ !== 0 && d === 0 && e.tag !== 0 && (e.suspendedLanes |= _ & ~(N & ~t));
  }
  function yh(e, t, i) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var o = 31 - Gt(t);
    e.entangledLanes |= t, e.entanglements[o] = e.entanglements[o] | 1073741824 | i & 4194090;
  }
  function _h(e, t) {
    var i = e.entangledLanes |= t;
    for (e = e.entanglements; i; ) {
      var o = 31 - Gt(i), d = 1 << o;
      d & t | e[o] & t && (e[o] |= t), i &= ~d;
    }
  }
  function Pl(e) {
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
  function Il(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function bh() {
    var e = B.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Wg(e.type));
  }
  function C_(e, t) {
    var i = B.p;
    try {
      return B.p = e, t();
    } finally {
      B.p = i;
    }
  }
  var Ar = Math.random().toString(36).slice(2), Bt = "__reactFiber$" + Ar, Kt = "__reactProps$" + Ar, Ha = "__reactContainer$" + Ar, Bl = "__reactEvents$" + Ar, k_ = "__reactListeners$" + Ar, A_ = "__reactHandles$" + Ar, Sh = "__reactResources$" + Ar, Hi = "__reactMarker$" + Ar;
  function Ul(e) {
    delete e[Bt], delete e[Kt], delete e[Bl], delete e[k_], delete e[A_];
  }
  function qa(e) {
    var t = e[Bt];
    if (t) return t;
    for (var i = e.parentNode; i; ) {
      if (t = i[Ha] || i[Bt]) {
        if (i = t.alternate, t.child !== null || i !== null && i.child !== null)
          for (e = Ig(e); e !== null; ) {
            if (i = e[Bt]) return i;
            e = Ig(e);
          }
        return t;
      }
      e = i, i = e.parentNode;
    }
    return null;
  }
  function Za(e) {
    if (e = e[Bt] || e[Ha]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function qi(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(a(33));
  }
  function Ga(e) {
    var t = e[Sh];
    return t || (t = e[Sh] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function xt(e) {
    e[Hi] = !0;
  }
  var wh = /* @__PURE__ */ new Set(), Eh = {};
  function sa(e, t) {
    Va(e, t), Va(e + "Capture", t);
  }
  function Va(e, t) {
    for (Eh[e] = t, e = 0; e < t.length; e++)
      wh.add(t[e]);
  }
  var x_ = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ch = {}, kh = {};
  function T_(e) {
    return me.call(kh, e) ? !0 : me.call(Ch, e) ? !1 : x_.test(e) ? kh[e] = !0 : (Ch[e] = !0, !1);
  }
  function po(e, t, i) {
    if (T_(t))
      if (i === null) e.removeAttribute(t);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var o = t.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + i);
      }
  }
  function mo(e, t, i) {
    if (i === null) e.removeAttribute(t);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + i);
    }
  }
  function ir(e, t, i, o) {
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
      e.setAttributeNS(t, i, "" + o);
    }
  }
  var Hl, Ah;
  function $a(e) {
    if (Hl === void 0)
      try {
        throw Error();
      } catch (i) {
        var t = i.stack.trim().match(/\n( *(at )?)/);
        Hl = t && t[1] || "", Ah = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Hl + e + Ah;
  }
  var ql = !1;
  function Zl(e, t) {
    if (!e || ql) return "";
    ql = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
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
                  var J = ee;
                }
                Reflect.construct(e, [], le);
              } else {
                try {
                  le.call();
                } catch (ee) {
                  J = ee;
                }
                e.call(le.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (ee) {
                J = ee;
              }
              (le = e()) && typeof le.catch == "function" && le.catch(function() {
              });
            }
          } catch (ee) {
            if (ee && J && typeof ee.stack == "string")
              return [ee.stack, J.stack];
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
      var _ = o.DetermineComponentFrameRoot(), N = _[0], D = _[1];
      if (N && D) {
        var H = N.split(`
`), Q = D.split(`
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
      ql = !1, Error.prepareStackTrace = i;
    }
    return (i = e ? e.displayName || e.name : "") ? $a(i) : "";
  }
  function N_(e) {
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
        return Zl(e.type, !1);
      case 11:
        return Zl(e.type.render, !1);
      case 1:
        return Zl(e.type, !0);
      case 31:
        return $a("Activity");
      default:
        return "";
    }
  }
  function xh(e) {
    try {
      var t = "";
      do
        t += N_(e), e = e.return;
      while (e);
      return t;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  function wn(e) {
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
  function Th(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function O_(e) {
    var t = Th(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    ), o = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var d = i.get, _ = i.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return d.call(this);
        },
        set: function(N) {
          o = "" + N, _.call(this, N);
        }
      }), Object.defineProperty(e, t, {
        enumerable: i.enumerable
      }), {
        getValue: function() {
          return o;
        },
        setValue: function(N) {
          o = "" + N;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function go(e) {
    e._valueTracker || (e._valueTracker = O_(e));
  }
  function Nh(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var i = t.getValue(), o = "";
    return e && (o = Th(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== i ? (t.setValue(e), !0) : !1;
  }
  function vo(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var M_ = /[\n"\\]/g;
  function En(e) {
    return e.replace(
      M_,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Gl(e, t, i, o, d, _, N, D) {
    e.name = "", N != null && typeof N != "function" && typeof N != "symbol" && typeof N != "boolean" ? e.type = N : e.removeAttribute("type"), t != null ? N === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + wn(t)) : e.value !== "" + wn(t) && (e.value = "" + wn(t)) : N !== "submit" && N !== "reset" || e.removeAttribute("value"), t != null ? Vl(e, N, wn(t)) : i != null ? Vl(e, N, wn(i)) : o != null && e.removeAttribute("value"), d == null && _ != null && (e.defaultChecked = !!_), d != null && (e.checked = d && typeof d != "function" && typeof d != "symbol"), D != null && typeof D != "function" && typeof D != "symbol" && typeof D != "boolean" ? e.name = "" + wn(D) : e.removeAttribute("name");
  }
  function Oh(e, t, i, o, d, _, N, D) {
    if (_ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" && (e.type = _), t != null || i != null) {
      if (!(_ !== "submit" && _ !== "reset" || t != null))
        return;
      i = i != null ? "" + wn(i) : "", t = t != null ? "" + wn(t) : i, D || t === e.value || (e.value = t), e.defaultValue = t;
    }
    o = o ?? d, o = typeof o != "function" && typeof o != "symbol" && !!o, e.checked = D ? e.checked : !!o, e.defaultChecked = !!o, N != null && typeof N != "function" && typeof N != "symbol" && typeof N != "boolean" && (e.name = N);
  }
  function Vl(e, t, i) {
    t === "number" && vo(e.ownerDocument) === e || e.defaultValue === "" + i || (e.defaultValue = "" + i);
  }
  function Ya(e, t, i, o) {
    if (e = e.options, t) {
      t = {};
      for (var d = 0; d < i.length; d++)
        t["$" + i[d]] = !0;
      for (i = 0; i < e.length; i++)
        d = t.hasOwnProperty("$" + e[i].value), e[i].selected !== d && (e[i].selected = d), d && o && (e[i].defaultSelected = !0);
    } else {
      for (i = "" + wn(i), t = null, d = 0; d < e.length; d++) {
        if (e[d].value === i) {
          e[d].selected = !0, o && (e[d].defaultSelected = !0);
          return;
        }
        t !== null || e[d].disabled || (t = e[d]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Mh(e, t, i) {
    if (t != null && (t = "" + wn(t), t !== e.value && (e.value = t), i == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = i != null ? "" + wn(i) : "";
  }
  function jh(e, t, i, o) {
    if (t == null) {
      if (o != null) {
        if (i != null) throw Error(a(92));
        if (W(o)) {
          if (1 < o.length) throw Error(a(93));
          o = o[0];
        }
        i = o;
      }
      i == null && (i = ""), t = i;
    }
    i = wn(t), e.defaultValue = i, o = e.textContent, o === i && o !== "" && o !== null && (e.value = o);
  }
  function Xa(e, t) {
    if (t) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var j_ = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Rh(e, t, i) {
    var o = t.indexOf("--") === 0;
    i == null || typeof i == "boolean" || i === "" ? o ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : o ? e.setProperty(t, i) : typeof i != "number" || i === 0 || j_.has(t) ? t === "float" ? e.cssFloat = i : e[t] = ("" + i).trim() : e[t] = i + "px";
  }
  function Dh(e, t, i) {
    if (t != null && typeof t != "object")
      throw Error(a(62));
    if (e = e.style, i != null) {
      for (var o in i)
        !i.hasOwnProperty(o) || t != null && t.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e.setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "");
      for (var d in t)
        o = t[d], t.hasOwnProperty(d) && i[d] !== o && Rh(e, d, o);
    } else
      for (var _ in t)
        t.hasOwnProperty(_) && Rh(e, _, t[_]);
  }
  function $l(e) {
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
  var R_ = /* @__PURE__ */ new Map([
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
  ]), D_ = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function yo(e) {
    return D_.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Yl = null;
  function Xl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Fa = null, Qa = null;
  function zh(e) {
    var t = Za(e);
    if (t && (e = t.stateNode)) {
      var i = e[Kt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Gl(
            e,
            i.value,
            i.defaultValue,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name
          ), t = i.name, i.type === "radio" && t != null) {
            for (i = e; i.parentNode; ) i = i.parentNode;
            for (i = i.querySelectorAll(
              'input[name="' + En(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < i.length; t++) {
              var o = i[t];
              if (o !== e && o.form === e.form) {
                var d = o[Kt] || null;
                if (!d) throw Error(a(90));
                Gl(
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
            for (t = 0; t < i.length; t++)
              o = i[t], o.form === e.form && Nh(o);
          }
          break e;
        case "textarea":
          Mh(e, i.value, i.defaultValue);
          break e;
        case "select":
          t = i.value, t != null && Ya(e, !!i.multiple, t, !1);
      }
    }
  }
  var Fl = !1;
  function Lh(e, t, i) {
    if (Fl) return e(t, i);
    Fl = !0;
    try {
      var o = e(t);
      return o;
    } finally {
      if (Fl = !1, (Fa !== null || Qa !== null) && (ru(), Fa && (t = Fa, e = Qa, Qa = Fa = null, zh(t), e)))
        for (t = 0; t < e.length; t++) zh(e[t]);
    }
  }
  function Zi(e, t) {
    var i = e.stateNode;
    if (i === null) return null;
    var o = i[Kt] || null;
    if (o === null) return null;
    i = o[t];
    e: switch (t) {
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
        a(231, t, typeof i)
      );
    return i;
  }
  var sr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ql = !1;
  if (sr)
    try {
      var Gi = {};
      Object.defineProperty(Gi, "passive", {
        get: function() {
          Ql = !0;
        }
      }), window.addEventListener("test", Gi, Gi), window.removeEventListener("test", Gi, Gi);
    } catch {
      Ql = !1;
    }
  var xr = null, Kl = null, _o = null;
  function Ph() {
    if (_o) return _o;
    var e, t = Kl, i = t.length, o, d = "value" in xr ? xr.value : xr.textContent, _ = d.length;
    for (e = 0; e < i && t[e] === d[e]; e++) ;
    var N = i - e;
    for (o = 1; o <= N && t[i - o] === d[_ - o]; o++) ;
    return _o = d.slice(e, 1 < o ? 1 - o : void 0);
  }
  function bo(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function So() {
    return !0;
  }
  function Ih() {
    return !1;
  }
  function Jt(e) {
    function t(i, o, d, _, N) {
      this._reactName = i, this._targetInst = d, this.type = o, this.nativeEvent = _, this.target = N, this.currentTarget = null;
      for (var D in e)
        e.hasOwnProperty(D) && (i = e[D], this[D] = i ? i(_) : _[D]);
      return this.isDefaultPrevented = (_.defaultPrevented != null ? _.defaultPrevented : _.returnValue === !1) ? So : Ih, this.isPropagationStopped = Ih, this;
    }
    return g(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var i = this.nativeEvent;
        i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = So);
      },
      stopPropagation: function() {
        var i = this.nativeEvent;
        i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = So);
      },
      persist: function() {
      },
      isPersistent: So
    }), t;
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
  }, wo = Jt(oa), Vi = g({}, oa, { view: 0, detail: 0 }), z_ = Jt(Vi), Jl, Wl, $i, Eo = g({}, Vi, {
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
    getModifierState: tc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== $i && ($i && e.type === "mousemove" ? (Jl = e.screenX - $i.screenX, Wl = e.screenY - $i.screenY) : Wl = Jl = 0, $i = e), Jl);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Wl;
    }
  }), Bh = Jt(Eo), L_ = g({}, Eo, { dataTransfer: 0 }), P_ = Jt(L_), I_ = g({}, Vi, { relatedTarget: 0 }), ec = Jt(I_), B_ = g({}, oa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), U_ = Jt(B_), H_ = g({}, oa, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), q_ = Jt(H_), Z_ = g({}, oa, { data: 0 }), Uh = Jt(Z_), G_ = {
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
  }, V_ = {
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
  }, $_ = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Y_(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = $_[e]) ? !!t[e] : !1;
  }
  function tc() {
    return Y_;
  }
  var X_ = g({}, Vi, {
    key: function(e) {
      if (e.key) {
        var t = G_[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = bo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? V_[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: tc,
    charCode: function(e) {
      return e.type === "keypress" ? bo(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? bo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), F_ = Jt(X_), Q_ = g({}, Eo, {
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
  }), Hh = Jt(Q_), K_ = g({}, Vi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: tc
  }), J_ = Jt(K_), W_ = g({}, oa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), eb = Jt(W_), tb = g({}, Eo, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), nb = Jt(tb), rb = g({}, oa, {
    newState: 0,
    oldState: 0
  }), ab = Jt(rb), ib = [9, 13, 27, 32], nc = sr && "CompositionEvent" in window, Yi = null;
  sr && "documentMode" in document && (Yi = document.documentMode);
  var sb = sr && "TextEvent" in window && !Yi, qh = sr && (!nc || Yi && 8 < Yi && 11 >= Yi), Zh = " ", Gh = !1;
  function Vh(e, t) {
    switch (e) {
      case "keyup":
        return ib.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function $h(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ka = !1;
  function ob(e, t) {
    switch (e) {
      case "compositionend":
        return $h(t);
      case "keypress":
        return t.which !== 32 ? null : (Gh = !0, Zh);
      case "textInput":
        return e = t.data, e === Zh && Gh ? null : e;
      default:
        return null;
    }
  }
  function ub(e, t) {
    if (Ka)
      return e === "compositionend" || !nc && Vh(e, t) ? (e = Ph(), _o = Kl = xr = null, Ka = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return qh && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var lb = {
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
  function Yh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!lb[e.type] : t === "textarea";
  }
  function Xh(e, t, i, o) {
    Fa ? Qa ? Qa.push(o) : Qa = [o] : Fa = o, t = lu(t, "onChange"), 0 < t.length && (i = new wo(
      "onChange",
      "change",
      null,
      i,
      o
    ), e.push({ event: i, listeners: t }));
  }
  var Xi = null, Fi = null;
  function cb(e) {
    Tg(e, 0);
  }
  function Co(e) {
    var t = qi(e);
    if (Nh(t)) return e;
  }
  function Fh(e, t) {
    if (e === "change") return t;
  }
  var Qh = !1;
  if (sr) {
    var rc;
    if (sr) {
      var ac = "oninput" in document;
      if (!ac) {
        var Kh = document.createElement("div");
        Kh.setAttribute("oninput", "return;"), ac = typeof Kh.oninput == "function";
      }
      rc = ac;
    } else rc = !1;
    Qh = rc && (!document.documentMode || 9 < document.documentMode);
  }
  function Jh() {
    Xi && (Xi.detachEvent("onpropertychange", Wh), Fi = Xi = null);
  }
  function Wh(e) {
    if (e.propertyName === "value" && Co(Fi)) {
      var t = [];
      Xh(
        t,
        Fi,
        e,
        Xl(e)
      ), Lh(cb, t);
    }
  }
  function db(e, t, i) {
    e === "focusin" ? (Jh(), Xi = t, Fi = i, Xi.attachEvent("onpropertychange", Wh)) : e === "focusout" && Jh();
  }
  function fb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Co(Fi);
  }
  function hb(e, t) {
    if (e === "click") return Co(t);
  }
  function pb(e, t) {
    if (e === "input" || e === "change")
      return Co(t);
  }
  function mb(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var un = typeof Object.is == "function" ? Object.is : mb;
  function Qi(e, t) {
    if (un(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var i = Object.keys(e), o = Object.keys(t);
    if (i.length !== o.length) return !1;
    for (o = 0; o < i.length; o++) {
      var d = i[o];
      if (!me.call(t, d) || !un(e[d], t[d]))
        return !1;
    }
    return !0;
  }
  function ep(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function tp(e, t) {
    var i = ep(e);
    e = 0;
    for (var o; i; ) {
      if (i.nodeType === 3) {
        if (o = e + i.textContent.length, e <= t && o >= t)
          return { node: i, offset: t - e };
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
      i = ep(i);
    }
  }
  function np(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? np(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function rp(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = vo(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof t.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = t.contentWindow;
      else break;
      t = vo(e.document);
    }
    return t;
  }
  function ic(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var gb = sr && "documentMode" in document && 11 >= document.documentMode, Ja = null, sc = null, Ki = null, oc = !1;
  function ap(e, t, i) {
    var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    oc || Ja == null || Ja !== vo(o) || (o = Ja, "selectionStart" in o && ic(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), Ki && Qi(Ki, o) || (Ki = o, o = lu(sc, "onSelect"), 0 < o.length && (t = new wo(
      "onSelect",
      "select",
      null,
      t,
      i
    ), e.push({ event: t, listeners: o }), t.target = Ja)));
  }
  function ua(e, t) {
    var i = {};
    return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i;
  }
  var Wa = {
    animationend: ua("Animation", "AnimationEnd"),
    animationiteration: ua("Animation", "AnimationIteration"),
    animationstart: ua("Animation", "AnimationStart"),
    transitionrun: ua("Transition", "TransitionRun"),
    transitionstart: ua("Transition", "TransitionStart"),
    transitioncancel: ua("Transition", "TransitionCancel"),
    transitionend: ua("Transition", "TransitionEnd")
  }, uc = {}, ip = {};
  sr && (ip = document.createElement("div").style, "AnimationEvent" in window || (delete Wa.animationend.animation, delete Wa.animationiteration.animation, delete Wa.animationstart.animation), "TransitionEvent" in window || delete Wa.transitionend.transition);
  function la(e) {
    if (uc[e]) return uc[e];
    if (!Wa[e]) return e;
    var t = Wa[e], i;
    for (i in t)
      if (t.hasOwnProperty(i) && i in ip)
        return uc[e] = t[i];
    return e;
  }
  var sp = la("animationend"), op = la("animationiteration"), up = la("animationstart"), vb = la("transitionrun"), yb = la("transitionstart"), _b = la("transitioncancel"), lp = la("transitionend"), cp = /* @__PURE__ */ new Map(), lc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  lc.push("scrollEnd");
  function zn(e, t) {
    cp.set(e, t), sa(t, [e]);
  }
  var dp = /* @__PURE__ */ new WeakMap();
  function Cn(e, t) {
    if (typeof e == "object" && e !== null) {
      var i = dp.get(e);
      return i !== void 0 ? i : (t = {
        value: e,
        source: t,
        stack: xh(t)
      }, dp.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: xh(t)
    };
  }
  var kn = [], ei = 0, cc = 0;
  function ko() {
    for (var e = ei, t = cc = ei = 0; t < e; ) {
      var i = kn[t];
      kn[t++] = null;
      var o = kn[t];
      kn[t++] = null;
      var d = kn[t];
      kn[t++] = null;
      var _ = kn[t];
      if (kn[t++] = null, o !== null && d !== null) {
        var N = o.pending;
        N === null ? d.next = d : (d.next = N.next, N.next = d), o.pending = d;
      }
      _ !== 0 && fp(i, d, _);
    }
  }
  function Ao(e, t, i, o) {
    kn[ei++] = e, kn[ei++] = t, kn[ei++] = i, kn[ei++] = o, cc |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
  }
  function dc(e, t, i, o) {
    return Ao(e, t, i, o), xo(e);
  }
  function ti(e, t) {
    return Ao(e, null, null, t), xo(e);
  }
  function fp(e, t, i) {
    e.lanes |= i;
    var o = e.alternate;
    o !== null && (o.lanes |= i);
    for (var d = !1, _ = e.return; _ !== null; )
      _.childLanes |= i, o = _.alternate, o !== null && (o.childLanes |= i), _.tag === 22 && (e = _.stateNode, e === null || e._visibility & 1 || (d = !0)), e = _, _ = _.return;
    return e.tag === 3 ? (_ = e.stateNode, d && t !== null && (d = 31 - Gt(i), e = _.hiddenUpdates, o = e[d], o === null ? e[d] = [t] : o.push(t), t.lane = i | 536870912), _) : null;
  }
  function xo(e) {
    if (50 < ws)
      throw ws = 0, vd = null, Error(a(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ni = {};
  function bb(e, t, i, o) {
    this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ln(e, t, i, o) {
    return new bb(e, t, i, o);
  }
  function fc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function or(e, t) {
    var i = e.alternate;
    return i === null ? (i = ln(
      e.tag,
      t,
      e.key,
      e.mode
    ), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 65011712, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, t = e.dependencies, i.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i.refCleanup = e.refCleanup, i;
  }
  function hp(e, t) {
    e.flags &= 65011714;
    var i = e.alternate;
    return i === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = i.childLanes, e.lanes = i.lanes, e.child = i.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = i.memoizedProps, e.memoizedState = i.memoizedState, e.updateQueue = i.updateQueue, e.type = i.type, t = i.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function To(e, t, i, o, d, _) {
    var N = 0;
    if (o = e, typeof e == "function") fc(e) && (N = 1);
    else if (typeof e == "string")
      N = w1(
        e,
        i,
        U.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case P:
          return e = ln(31, i, t, d), e.elementType = P, e.lanes = _, e;
        case h:
          return ca(i.children, d, _, t);
        case C:
          N = 8, d |= 24;
          break;
        case x:
          return e = ln(12, i, t, d | 2), e.elementType = x, e.lanes = _, e;
        case y:
          return e = ln(13, i, t, d), e.elementType = y, e.lanes = _, e;
        case w:
          return e = ln(19, i, t, d), e.elementType = w, e.lanes = _, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case M:
              case L:
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
    return t = ln(N, i, t, d), t.elementType = e, t.type = o, t.lanes = _, t;
  }
  function ca(e, t, i, o) {
    return e = ln(7, e, o, t), e.lanes = i, e;
  }
  function hc(e, t, i) {
    return e = ln(6, e, null, t), e.lanes = i, e;
  }
  function pc(e, t, i) {
    return t = ln(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = i, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var ri = [], ai = 0, No = null, Oo = 0, An = [], xn = 0, da = null, ur = 1, lr = "";
  function fa(e, t) {
    ri[ai++] = Oo, ri[ai++] = No, No = e, Oo = t;
  }
  function pp(e, t, i) {
    An[xn++] = ur, An[xn++] = lr, An[xn++] = da, da = e;
    var o = ur;
    e = lr;
    var d = 32 - Gt(o) - 1;
    o &= ~(1 << d), i += 1;
    var _ = 32 - Gt(t) + d;
    if (30 < _) {
      var N = d - d % 5;
      _ = (o & (1 << N) - 1).toString(32), o >>= N, d -= N, ur = 1 << 32 - Gt(t) + d | i << d | o, lr = _ + e;
    } else
      ur = 1 << _ | i << d | o, lr = e;
  }
  function mc(e) {
    e.return !== null && (fa(e, 1), pp(e, 1, 0));
  }
  function gc(e) {
    for (; e === No; )
      No = ri[--ai], ri[ai] = null, Oo = ri[--ai], ri[ai] = null;
    for (; e === da; )
      da = An[--xn], An[xn] = null, lr = An[--xn], An[xn] = null, ur = An[--xn], An[xn] = null;
  }
  var $t = null, ft = null, $e = !1, ha = null, Xn = !1, vc = Error(a(519));
  function pa(e) {
    var t = Error(a(418, ""));
    throw es(Cn(t, e)), vc;
  }
  function mp(e) {
    var t = e.stateNode, i = e.type, o = e.memoizedProps;
    switch (t[Bt] = e, t[Kt] = o, i) {
      case "dialog":
        Be("cancel", t), Be("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Be("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Cs.length; i++)
          Be(Cs[i], t);
        break;
      case "source":
        Be("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Be("error", t), Be("load", t);
        break;
      case "details":
        Be("toggle", t);
        break;
      case "input":
        Be("invalid", t), Oh(
          t,
          o.value,
          o.defaultValue,
          o.checked,
          o.defaultChecked,
          o.type,
          o.name,
          !0
        ), go(t);
        break;
      case "select":
        Be("invalid", t);
        break;
      case "textarea":
        Be("invalid", t), jh(t, o.value, o.defaultValue, o.children), go(t);
    }
    i = o.children, typeof i != "string" && typeof i != "number" && typeof i != "bigint" || t.textContent === "" + i || o.suppressHydrationWarning === !0 || jg(t.textContent, i) ? (o.popover != null && (Be("beforetoggle", t), Be("toggle", t)), o.onScroll != null && Be("scroll", t), o.onScrollEnd != null && Be("scrollend", t), o.onClick != null && (t.onclick = cu), t = !0) : t = !1, t || pa(e);
  }
  function gp(e) {
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
    if (!$e) return gp(e), $e = !0, !1;
    var t = e.tag, i;
    if ((i = t !== 3 && t !== 27) && ((i = t === 5) && (i = e.type, i = !(i !== "form" && i !== "button") || Rd(e.type, e.memoizedProps)), i = !i), i && ft && pa(e), gp(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (i = e.data, i === "/$") {
              if (t === 0) {
                ft = Pn(e.nextSibling);
                break e;
              }
              t--;
            } else
              i !== "$" && i !== "$!" && i !== "$?" || t++;
          e = e.nextSibling;
        }
        ft = null;
      }
    } else
      t === 27 ? (t = ft, Zr(e.type) ? (e = Pd, Pd = null, ft = e) : ft = t) : ft = $t ? Pn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Wi() {
    ft = $t = null, $e = !1;
  }
  function vp() {
    var e = ha;
    return e !== null && (tn === null ? tn = e : tn.push.apply(
      tn,
      e
    ), ha = null), e;
  }
  function es(e) {
    ha === null ? ha = [e] : ha.push(e);
  }
  var yc = X(null), ma = null, cr = null;
  function Tr(e, t, i) {
    $(yc, t._currentValue), t._currentValue = i;
  }
  function dr(e) {
    e._currentValue = yc.current, ce(yc);
  }
  function _c(e, t, i) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t), e === i) break;
      e = e.return;
    }
  }
  function bc(e, t, i, o) {
    var d = e.child;
    for (d !== null && (d.return = e); d !== null; ) {
      var _ = d.dependencies;
      if (_ !== null) {
        var N = d.child;
        _ = _.firstContext;
        e: for (; _ !== null; ) {
          var D = _;
          _ = d;
          for (var H = 0; H < t.length; H++)
            if (D.context === t[H]) {
              _.lanes |= i, D = _.alternate, D !== null && (D.lanes |= i), _c(
                _.return,
                i,
                e
              ), o || (N = null);
              break e;
            }
          _ = D.next;
        }
      } else if (d.tag === 18) {
        if (N = d.return, N === null) throw Error(a(341));
        N.lanes |= i, _ = N.alternate, _ !== null && (_.lanes |= i), _c(N, i, e), N = null;
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
  function ts(e, t, i, o) {
    e = null;
    for (var d = t, _ = !1; d !== null; ) {
      if (!_) {
        if ((d.flags & 524288) !== 0) _ = !0;
        else if ((d.flags & 262144) !== 0) break;
      }
      if (d.tag === 10) {
        var N = d.alternate;
        if (N === null) throw Error(a(387));
        if (N = N.memoizedProps, N !== null) {
          var D = d.type;
          un(d.pendingProps.value, N.value) || (e !== null ? e.push(D) : e = [D]);
        }
      } else if (d === ue.current) {
        if (N = d.alternate, N === null) throw Error(a(387));
        N.memoizedState.memoizedState !== d.memoizedState.memoizedState && (e !== null ? e.push(Os) : e = [Os]);
      }
      d = d.return;
    }
    e !== null && bc(
      t,
      e,
      i,
      o
    ), t.flags |= 262144;
  }
  function Mo(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!un(
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
    return yp(ma, e);
  }
  function jo(e, t) {
    return ma === null && ga(e), yp(e, t);
  }
  function yp(e, t) {
    var i = t._currentValue;
    if (t = { context: t, memoizedValue: i, next: null }, cr === null) {
      if (e === null) throw Error(a(308));
      cr = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else cr = cr.next = t;
    return i;
  }
  var Sb = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(i, o) {
        e.push(o);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(i) {
        return i();
      });
    };
  }, wb = n.unstable_scheduleCallback, Eb = n.unstable_NormalPriority, Et = {
    $$typeof: L,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Sc() {
    return {
      controller: new Sb(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ns(e) {
    e.refCount--, e.refCount === 0 && wb(Eb, function() {
      e.controller.abort();
    });
  }
  var rs = null, wc = 0, ii = 0, si = null;
  function Cb(e, t) {
    if (rs === null) {
      var i = rs = [];
      wc = 0, ii = Cd(), si = {
        status: "pending",
        value: void 0,
        then: function(o) {
          i.push(o);
        }
      };
    }
    return wc++, t.then(_p, _p), t;
  }
  function _p() {
    if (--wc === 0 && rs !== null) {
      si !== null && (si.status = "fulfilled");
      var e = rs;
      rs = null, ii = 0, si = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function kb(e, t) {
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
        o.status = "fulfilled", o.value = t;
        for (var d = 0; d < i.length; d++) (0, i[d])(t);
      },
      function(d) {
        for (o.status = "rejected", o.reason = d, d = 0; d < i.length; d++)
          (0, i[d])(void 0);
      }
    ), o;
  }
  var bp = j.S;
  j.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && Cb(e, t), bp !== null && bp(e, t);
  };
  var va = X(null);
  function Ec() {
    var e = va.current;
    return e !== null ? e : nt.pooledCache;
  }
  function Ro(e, t) {
    t === null ? $(va, va.current) : $(va, t.pool);
  }
  function Sp() {
    var e = Ec();
    return e === null ? null : { parent: Et._currentValue, pool: e };
  }
  var as = Error(a(460)), wp = Error(a(474)), Do = Error(a(542)), Cc = { then: function() {
  } };
  function Ep(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function zo() {
  }
  function Cp(e, t, i) {
    switch (i = e[i], i === void 0 ? e.push(t) : i !== t && (t.then(zo, zo), t = i), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Ap(e), e;
      default:
        if (typeof t.status == "string") t.then(zo, zo);
        else {
          if (e = nt, e !== null && 100 < e.shellSuspendCounter)
            throw Error(a(482));
          e = t, e.status = "pending", e.then(
            function(o) {
              if (t.status === "pending") {
                var d = t;
                d.status = "fulfilled", d.value = o;
              }
            },
            function(o) {
              if (t.status === "pending") {
                var d = t;
                d.status = "rejected", d.reason = o;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Ap(e), e;
        }
        throw is = t, as;
    }
  }
  var is = null;
  function kp() {
    if (is === null) throw Error(a(459));
    var e = is;
    return is = null, e;
  }
  function Ap(e) {
    if (e === as || e === Do)
      throw Error(a(483));
  }
  var Nr = !1;
  function kc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ac(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
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
  function Mr(e, t, i) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (Ye & 2) !== 0) {
      var d = o.pending;
      return d === null ? t.next = t : (t.next = d.next, d.next = t), o.pending = t, t = xo(e), fp(e, null, i), t;
    }
    return Ao(e, o, t, i), xo(e);
  }
  function ss(e, t, i) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (i & 4194048) !== 0)) {
      var o = t.lanes;
      o &= e.pendingLanes, i |= o, t.lanes = i, _h(e, i);
    }
  }
  function xc(e, t) {
    var i = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, i === o)) {
      var d = null, _ = null;
      if (i = i.firstBaseUpdate, i !== null) {
        do {
          var N = {
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          };
          _ === null ? d = _ = N : _ = _.next = N, i = i.next;
        } while (i !== null);
        _ === null ? d = _ = t : _ = _.next = t;
      } else d = _ = t;
      i = {
        baseState: o.baseState,
        firstBaseUpdate: d,
        lastBaseUpdate: _,
        shared: o.shared,
        callbacks: o.callbacks
      }, e.updateQueue = i;
      return;
    }
    e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = t : e.next = t, i.lastBaseUpdate = t;
  }
  var Tc = !1;
  function os() {
    if (Tc) {
      var e = si;
      if (e !== null) throw e;
    }
  }
  function us(e, t, i, o) {
    Tc = !1;
    var d = e.updateQueue;
    Nr = !1;
    var _ = d.firstBaseUpdate, N = d.lastBaseUpdate, D = d.shared.pending;
    if (D !== null) {
      d.shared.pending = null;
      var H = D, Q = H.next;
      H.next = null, N === null ? _ = Q : N.next = Q, N = H;
      var se = e.alternate;
      se !== null && (se = se.updateQueue, D = se.lastBaseUpdate, D !== N && (D === null ? se.firstBaseUpdate = Q : D.next = Q, se.lastBaseUpdate = H));
    }
    if (_ !== null) {
      var le = d.baseState;
      N = 0, se = Q = H = null, D = _;
      do {
        var J = D.lane & -536870913, ee = J !== D.lane;
        if (ee ? (Ge & J) === J : (o & J) === J) {
          J !== 0 && J === ii && (Tc = !0), se !== null && (se = se.next = {
            lane: 0,
            tag: D.tag,
            payload: D.payload,
            callback: null,
            next: null
          });
          e: {
            var Ae = e, Ce = D;
            J = t;
            var Je = i;
            switch (Ce.tag) {
              case 1:
                if (Ae = Ce.payload, typeof Ae == "function") {
                  le = Ae.call(Je, le, J);
                  break e;
                }
                le = Ae;
                break e;
              case 3:
                Ae.flags = Ae.flags & -65537 | 128;
              case 0:
                if (Ae = Ce.payload, J = typeof Ae == "function" ? Ae.call(Je, le, J) : Ae, J == null) break e;
                le = g({}, le, J);
                break e;
              case 2:
                Nr = !0;
            }
          }
          J = D.callback, J !== null && (e.flags |= 64, ee && (e.flags |= 8192), ee = d.callbacks, ee === null ? d.callbacks = [J] : ee.push(J));
        } else
          ee = {
            lane: J,
            tag: D.tag,
            payload: D.payload,
            callback: D.callback,
            next: null
          }, se === null ? (Q = se = ee, H = le) : se = se.next = ee, N |= J;
        if (D = D.next, D === null) {
          if (D = d.shared.pending, D === null)
            break;
          ee = D, D = ee.next, ee.next = null, d.lastBaseUpdate = ee, d.shared.pending = null;
        }
      } while (!0);
      se === null && (H = le), d.baseState = H, d.firstBaseUpdate = Q, d.lastBaseUpdate = se, _ === null && (d.shared.lanes = 0), Br |= N, e.lanes = N, e.memoizedState = le;
    }
  }
  function xp(e, t) {
    if (typeof e != "function")
      throw Error(a(191, e));
    e.call(t);
  }
  function Tp(e, t) {
    var i = e.callbacks;
    if (i !== null)
      for (e.callbacks = null, e = 0; e < i.length; e++)
        xp(i[e], t);
  }
  var oi = X(null), Lo = X(0);
  function Np(e, t) {
    e = yr, $(Lo, e), $(oi, t), yr = e | t.baseLanes;
  }
  function Nc() {
    $(Lo, yr), $(oi, oi.current);
  }
  function Oc() {
    yr = Lo.current, ce(oi), ce(Lo);
  }
  var jr = 0, ze = null, Qe = null, _t = null, Po = !1, ui = !1, ya = !1, Io = 0, ls = 0, li = null, Ab = 0;
  function gt() {
    throw Error(a(321));
  }
  function Mc(e, t) {
    if (t === null) return !1;
    for (var i = 0; i < t.length && i < e.length; i++)
      if (!un(e[i], t[i])) return !1;
    return !0;
  }
  function jc(e, t, i, o, d, _) {
    return jr = _, ze = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, j.H = e === null || e.memoizedState === null ? fm : hm, ya = !1, _ = i(o, d), ya = !1, ui && (_ = Mp(
      t,
      i,
      o,
      d
    )), Op(e), _;
  }
  function Op(e) {
    j.H = Go;
    var t = Qe !== null && Qe.next !== null;
    if (jr = 0, _t = Qe = ze = null, Po = !1, ls = 0, li = null, t) throw Error(a(300));
    e === null || Tt || (e = e.dependencies, e !== null && Mo(e) && (Tt = !0));
  }
  function Mp(e, t, i, o) {
    ze = e;
    var d = 0;
    do {
      if (ui && (li = null), ls = 0, ui = !1, 25 <= d) throw Error(a(301));
      if (d += 1, _t = Qe = null, e.updateQueue != null) {
        var _ = e.updateQueue;
        _.lastEffect = null, _.events = null, _.stores = null, _.memoCache != null && (_.memoCache.index = 0);
      }
      j.H = Rb, _ = t(i, o);
    } while (ui);
    return _;
  }
  function xb() {
    var e = j.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? cs(t) : t, e = e.useState()[0], (Qe !== null ? Qe.memoizedState : null) !== e && (ze.flags |= 1024), t;
  }
  function Rc() {
    var e = Io !== 0;
    return Io = 0, e;
  }
  function Dc(e, t, i) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i;
  }
  function zc(e) {
    if (Po) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Po = !1;
    }
    jr = 0, _t = Qe = ze = null, ui = !1, ls = Io = 0, li = null;
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
    var t = _t === null ? ze.memoizedState : _t.next;
    if (t !== null)
      _t = t, Qe = e;
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
  function Lc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function cs(e) {
    var t = ls;
    return ls += 1, li === null && (li = []), e = Cp(li, e, t), t = ze, (_t === null ? t.memoizedState : _t.next) === null && (t = t.alternate, j.H = t === null || t.memoizedState === null ? fm : hm), e;
  }
  function Bo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return cs(e);
      if (e.$$typeof === L) return Ut(e);
    }
    throw Error(a(438, String(e)));
  }
  function Pc(e) {
    var t = null, i = ze.updateQueue;
    if (i !== null && (t = i.memoCache), t == null) {
      var o = ze.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (t = {
        data: o.data.map(function(d) {
          return d.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), i === null && (i = Lc(), ze.updateQueue = i), i.memoCache = t, i = t.data[t.index], i === void 0)
      for (i = t.data[t.index] = Array(e), o = 0; o < e; o++)
        i[o] = O;
    return t.index++, i;
  }
  function fr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Uo(e) {
    var t = bt();
    return Ic(t, Qe, e);
  }
  function Ic(e, t, i) {
    var o = e.queue;
    if (o === null) throw Error(a(311));
    o.lastRenderedReducer = i;
    var d = e.baseQueue, _ = o.pending;
    if (_ !== null) {
      if (d !== null) {
        var N = d.next;
        d.next = _.next, _.next = N;
      }
      t.baseQueue = d = _, o.pending = null;
    }
    if (_ = e.baseState, d === null) e.memoizedState = _;
    else {
      t = d.next;
      var D = N = null, H = null, Q = t, se = !1;
      do {
        var le = Q.lane & -536870913;
        if (le !== Q.lane ? (Ge & le) === le : (jr & le) === le) {
          var J = Q.revertLane;
          if (J === 0)
            H !== null && (H = H.next = {
              lane: 0,
              revertLane: 0,
              action: Q.action,
              hasEagerState: Q.hasEagerState,
              eagerState: Q.eagerState,
              next: null
            }), le === ii && (se = !0);
          else if ((jr & J) === J) {
            Q = Q.next, J === ii && (se = !0);
            continue;
          } else
            le = {
              lane: 0,
              revertLane: Q.revertLane,
              action: Q.action,
              hasEagerState: Q.hasEagerState,
              eagerState: Q.eagerState,
              next: null
            }, H === null ? (D = H = le, N = _) : H = H.next = le, ze.lanes |= J, Br |= J;
          le = Q.action, ya && i(_, le), _ = Q.hasEagerState ? Q.eagerState : i(_, le);
        } else
          J = {
            lane: le,
            revertLane: Q.revertLane,
            action: Q.action,
            hasEagerState: Q.hasEagerState,
            eagerState: Q.eagerState,
            next: null
          }, H === null ? (D = H = J, N = _) : H = H.next = J, ze.lanes |= le, Br |= le;
        Q = Q.next;
      } while (Q !== null && Q !== t);
      if (H === null ? N = _ : H.next = D, !un(_, e.memoizedState) && (Tt = !0, se && (i = si, i !== null)))
        throw i;
      e.memoizedState = _, e.baseState = N, e.baseQueue = H, o.lastRenderedState = _;
    }
    return d === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function Bc(e) {
    var t = bt(), i = t.queue;
    if (i === null) throw Error(a(311));
    i.lastRenderedReducer = e;
    var o = i.dispatch, d = i.pending, _ = t.memoizedState;
    if (d !== null) {
      i.pending = null;
      var N = d = d.next;
      do
        _ = e(_, N.action), N = N.next;
      while (N !== d);
      un(_, t.memoizedState) || (Tt = !0), t.memoizedState = _, t.baseQueue === null && (t.baseState = _), i.lastRenderedState = _;
    }
    return [_, o];
  }
  function jp(e, t, i) {
    var o = ze, d = bt(), _ = $e;
    if (_) {
      if (i === void 0) throw Error(a(407));
      i = i();
    } else i = t();
    var N = !un(
      (Qe || d).memoizedState,
      i
    );
    N && (d.memoizedState = i, Tt = !0), d = d.queue;
    var D = zp.bind(null, o, d, e);
    if (ds(2048, 8, D, [e]), d.getSnapshot !== t || N || _t !== null && _t.memoizedState.tag & 1) {
      if (o.flags |= 2048, ci(
        9,
        Ho(),
        Dp.bind(
          null,
          o,
          d,
          i,
          t
        ),
        null
      ), nt === null) throw Error(a(349));
      _ || (jr & 124) !== 0 || Rp(o, t, i);
    }
    return i;
  }
  function Rp(e, t, i) {
    e.flags |= 16384, e = { getSnapshot: t, value: i }, t = ze.updateQueue, t === null ? (t = Lc(), ze.updateQueue = t, t.stores = [e]) : (i = t.stores, i === null ? t.stores = [e] : i.push(e));
  }
  function Dp(e, t, i, o) {
    t.value = i, t.getSnapshot = o, Lp(t) && Pp(e);
  }
  function zp(e, t, i) {
    return i(function() {
      Lp(t) && Pp(e);
    });
  }
  function Lp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var i = t();
      return !un(e, i);
    } catch {
      return !0;
    }
  }
  function Pp(e) {
    var t = ti(e, 2);
    t !== null && pn(t, e, 2);
  }
  function Uc(e) {
    var t = Wt();
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
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: fr,
      lastRenderedState: e
    }, t;
  }
  function Ip(e, t, i, o) {
    return e.baseState = i, Ic(
      e,
      Qe,
      typeof o == "function" ? o : fr
    );
  }
  function Tb(e, t, i, o, d) {
    if (Zo(e)) throw Error(a(485));
    if (e = t.action, e !== null) {
      var _ = {
        payload: d,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(N) {
          _.listeners.push(N);
        }
      };
      j.T !== null ? i(!0) : _.isTransition = !1, o(_), i = t.pending, i === null ? (_.next = t.pending = _, Bp(t, _)) : (_.next = i.next, t.pending = i.next = _);
    }
  }
  function Bp(e, t) {
    var i = t.action, o = t.payload, d = e.state;
    if (t.isTransition) {
      var _ = j.T, N = {};
      j.T = N;
      try {
        var D = i(d, o), H = j.S;
        H !== null && H(N, D), Up(e, t, D);
      } catch (Q) {
        Hc(e, t, Q);
      } finally {
        j.T = _;
      }
    } else
      try {
        _ = i(d, o), Up(e, t, _);
      } catch (Q) {
        Hc(e, t, Q);
      }
  }
  function Up(e, t, i) {
    i !== null && typeof i == "object" && typeof i.then == "function" ? i.then(
      function(o) {
        Hp(e, t, o);
      },
      function(o) {
        return Hc(e, t, o);
      }
    ) : Hp(e, t, i);
  }
  function Hp(e, t, i) {
    t.status = "fulfilled", t.value = i, qp(t), e.state = i, t = e.pending, t !== null && (i = t.next, i === t ? e.pending = null : (i = i.next, t.next = i, Bp(e, i)));
  }
  function Hc(e, t, i) {
    var o = e.pending;
    if (e.pending = null, o !== null) {
      o = o.next;
      do
        t.status = "rejected", t.reason = i, qp(t), t = t.next;
      while (t !== o);
    }
    e.action = null;
  }
  function qp(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Zp(e, t) {
    return t;
  }
  function Gp(e, t) {
    if ($e) {
      var i = nt.formState;
      if (i !== null) {
        e: {
          var o = ze;
          if ($e) {
            if (ft) {
              t: {
                for (var d = ft, _ = Xn; d.nodeType !== 8; ) {
                  if (!_) {
                    d = null;
                    break t;
                  }
                  if (d = Pn(
                    d.nextSibling
                  ), d === null) {
                    d = null;
                    break t;
                  }
                }
                _ = d.data, d = _ === "F!" || _ === "F" ? d : null;
              }
              if (d) {
                ft = Pn(
                  d.nextSibling
                ), o = d.data === "F!";
                break e;
              }
            }
            pa(o);
          }
          o = !1;
        }
        o && (t = i[0]);
      }
    }
    return i = Wt(), i.memoizedState = i.baseState = t, o = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zp,
      lastRenderedState: t
    }, i.queue = o, i = lm.bind(
      null,
      ze,
      o
    ), o.dispatch = i, o = Uc(!1), _ = $c.bind(
      null,
      ze,
      !1,
      o.queue
    ), o = Wt(), d = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, o.queue = d, i = Tb.bind(
      null,
      ze,
      d,
      _,
      i
    ), d.dispatch = i, o.memoizedState = e, [t, i, !1];
  }
  function Vp(e) {
    var t = bt();
    return $p(t, Qe, e);
  }
  function $p(e, t, i) {
    if (t = Ic(
      e,
      t,
      Zp
    )[0], e = Uo(fr)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var o = cs(t);
      } catch (N) {
        throw N === as ? Do : N;
      }
    else o = t;
    t = bt();
    var d = t.queue, _ = d.dispatch;
    return i !== t.memoizedState && (ze.flags |= 2048, ci(
      9,
      Ho(),
      Nb.bind(null, d, i),
      null
    )), [o, _, e];
  }
  function Nb(e, t) {
    e.action = t;
  }
  function Yp(e) {
    var t = bt(), i = Qe;
    if (i !== null)
      return $p(t, i, e);
    bt(), t = t.memoizedState, i = bt();
    var o = i.queue.dispatch;
    return i.memoizedState = e, [t, o, !1];
  }
  function ci(e, t, i, o) {
    return e = { tag: e, create: i, deps: o, inst: t, next: null }, t = ze.updateQueue, t === null && (t = Lc(), ze.updateQueue = t), i = t.lastEffect, i === null ? t.lastEffect = e.next = e : (o = i.next, i.next = e, e.next = o, t.lastEffect = e), e;
  }
  function Ho() {
    return { destroy: void 0, resource: void 0 };
  }
  function Xp() {
    return bt().memoizedState;
  }
  function qo(e, t, i, o) {
    var d = Wt();
    o = o === void 0 ? null : o, ze.flags |= e, d.memoizedState = ci(
      1 | t,
      Ho(),
      i,
      o
    );
  }
  function ds(e, t, i, o) {
    var d = bt();
    o = o === void 0 ? null : o;
    var _ = d.memoizedState.inst;
    Qe !== null && o !== null && Mc(o, Qe.memoizedState.deps) ? d.memoizedState = ci(t, _, i, o) : (ze.flags |= e, d.memoizedState = ci(
      1 | t,
      _,
      i,
      o
    ));
  }
  function Fp(e, t) {
    qo(8390656, 8, e, t);
  }
  function Qp(e, t) {
    ds(2048, 8, e, t);
  }
  function Kp(e, t) {
    return ds(4, 2, e, t);
  }
  function Jp(e, t) {
    return ds(4, 4, e, t);
  }
  function Wp(e, t) {
    if (typeof t == "function") {
      e = e();
      var i = t(e);
      return function() {
        typeof i == "function" ? i() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function em(e, t, i) {
    i = i != null ? i.concat([e]) : null, ds(4, 4, Wp.bind(null, t, e), i);
  }
  function qc() {
  }
  function tm(e, t) {
    var i = bt();
    t = t === void 0 ? null : t;
    var o = i.memoizedState;
    return t !== null && Mc(t, o[1]) ? o[0] : (i.memoizedState = [e, t], e);
  }
  function nm(e, t) {
    var i = bt();
    t = t === void 0 ? null : t;
    var o = i.memoizedState;
    if (t !== null && Mc(t, o[1]))
      return o[0];
    if (o = e(), ya) {
      $n(!0);
      try {
        e();
      } finally {
        $n(!1);
      }
    }
    return i.memoizedState = [o, t], o;
  }
  function Zc(e, t, i) {
    return i === void 0 || (jr & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = i, e = ig(), ze.lanes |= e, Br |= e, i);
  }
  function rm(e, t, i, o) {
    return un(i, t) ? i : oi.current !== null ? (e = Zc(e, i, o), un(e, t) || (Tt = !0), e) : (jr & 42) === 0 ? (Tt = !0, e.memoizedState = i) : (e = ig(), ze.lanes |= e, Br |= e, t);
  }
  function am(e, t, i, o, d) {
    var _ = B.p;
    B.p = _ !== 0 && 8 > _ ? _ : 8;
    var N = j.T, D = {};
    j.T = D, $c(e, !1, t, i);
    try {
      var H = d(), Q = j.S;
      if (Q !== null && Q(D, H), H !== null && typeof H == "object" && typeof H.then == "function") {
        var se = kb(
          H,
          o
        );
        fs(
          e,
          t,
          se,
          hn(e)
        );
      } else
        fs(
          e,
          t,
          o,
          hn(e)
        );
    } catch (le) {
      fs(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: le },
        hn()
      );
    } finally {
      B.p = _, j.T = N;
    }
  }
  function Ob() {
  }
  function Gc(e, t, i, o) {
    if (e.tag !== 5) throw Error(a(476));
    var d = im(e).queue;
    am(
      e,
      d,
      t,
      K,
      i === null ? Ob : function() {
        return sm(e), i(o);
      }
    );
  }
  function im(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: K,
      baseState: K,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fr,
        lastRenderedState: K
      },
      next: null
    };
    var i = {};
    return t.next = {
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
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function sm(e) {
    var t = im(e).next.queue;
    fs(e, t, {}, hn());
  }
  function Vc() {
    return Ut(Os);
  }
  function om() {
    return bt().memoizedState;
  }
  function um() {
    return bt().memoizedState;
  }
  function Mb(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var i = hn();
          e = Or(i);
          var o = Mr(t, e, i);
          o !== null && (pn(o, t, i), ss(o, t, i)), t = { cache: Sc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function jb(e, t, i) {
    var o = hn();
    i = {
      lane: o,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Zo(e) ? cm(t, i) : (i = dc(e, t, i, o), i !== null && (pn(i, e, o), dm(i, t, o)));
  }
  function lm(e, t, i) {
    var o = hn();
    fs(e, t, i, o);
  }
  function fs(e, t, i, o) {
    var d = {
      lane: o,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Zo(e)) cm(t, d);
    else {
      var _ = e.alternate;
      if (e.lanes === 0 && (_ === null || _.lanes === 0) && (_ = t.lastRenderedReducer, _ !== null))
        try {
          var N = t.lastRenderedState, D = _(N, i);
          if (d.hasEagerState = !0, d.eagerState = D, un(D, N))
            return Ao(e, t, d, 0), nt === null && ko(), !1;
        } catch {
        } finally {
        }
      if (i = dc(e, t, d, o), i !== null)
        return pn(i, e, o), dm(i, t, o), !0;
    }
    return !1;
  }
  function $c(e, t, i, o) {
    if (o = {
      lane: 2,
      revertLane: Cd(),
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Zo(e)) {
      if (t) throw Error(a(479));
    } else
      t = dc(
        e,
        i,
        o,
        2
      ), t !== null && pn(t, e, 2);
  }
  function Zo(e) {
    var t = e.alternate;
    return e === ze || t !== null && t === ze;
  }
  function cm(e, t) {
    ui = Po = !0;
    var i = e.pending;
    i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t;
  }
  function dm(e, t, i) {
    if ((i & 4194048) !== 0) {
      var o = t.lanes;
      o &= e.pendingLanes, i |= o, t.lanes = i, _h(e, i);
    }
  }
  var Go = {
    readContext: Ut,
    use: Bo,
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
  }, fm = {
    readContext: Ut,
    use: Bo,
    useCallback: function(e, t) {
      return Wt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Ut,
    useEffect: Fp,
    useImperativeHandle: function(e, t, i) {
      i = i != null ? i.concat([e]) : null, qo(
        4194308,
        4,
        Wp.bind(null, t, e),
        i
      );
    },
    useLayoutEffect: function(e, t) {
      return qo(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      qo(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var i = Wt();
      t = t === void 0 ? null : t;
      var o = e();
      if (ya) {
        $n(!0);
        try {
          e();
        } finally {
          $n(!1);
        }
      }
      return i.memoizedState = [o, t], o;
    },
    useReducer: function(e, t, i) {
      var o = Wt();
      if (i !== void 0) {
        var d = i(t);
        if (ya) {
          $n(!0);
          try {
            i(t);
          } finally {
            $n(!1);
          }
        }
      } else d = t;
      return o.memoizedState = o.baseState = d, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: d
      }, o.queue = e, e = e.dispatch = jb.bind(
        null,
        ze,
        e
      ), [o.memoizedState, e];
    },
    useRef: function(e) {
      var t = Wt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Uc(e);
      var t = e.queue, i = lm.bind(null, ze, t);
      return t.dispatch = i, [e.memoizedState, i];
    },
    useDebugValue: qc,
    useDeferredValue: function(e, t) {
      var i = Wt();
      return Zc(i, e, t);
    },
    useTransition: function() {
      var e = Uc(!1);
      return e = am.bind(
        null,
        ze,
        e.queue,
        !0,
        !1
      ), Wt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, i) {
      var o = ze, d = Wt();
      if ($e) {
        if (i === void 0)
          throw Error(a(407));
        i = i();
      } else {
        if (i = t(), nt === null)
          throw Error(a(349));
        (Ge & 124) !== 0 || Rp(o, t, i);
      }
      d.memoizedState = i;
      var _ = { value: i, getSnapshot: t };
      return d.queue = _, Fp(zp.bind(null, o, _, e), [
        e
      ]), o.flags |= 2048, ci(
        9,
        Ho(),
        Dp.bind(
          null,
          o,
          _,
          i,
          t
        ),
        null
      ), i;
    },
    useId: function() {
      var e = Wt(), t = nt.identifierPrefix;
      if ($e) {
        var i = lr, o = ur;
        i = (o & ~(1 << 32 - Gt(o) - 1)).toString(32) + i, t = "«" + t + "R" + i, i = Io++, 0 < i && (t += "H" + i.toString(32)), t += "»";
      } else
        i = Ab++, t = "«" + t + "r" + i.toString(32) + "»";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Vc,
    useFormState: Gp,
    useActionState: Gp,
    useOptimistic: function(e) {
      var t = Wt();
      t.memoizedState = t.baseState = e;
      var i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = i, t = $c.bind(
        null,
        ze,
        !0,
        i
      ), i.dispatch = t, [e, t];
    },
    useMemoCache: Pc,
    useCacheRefresh: function() {
      return Wt().memoizedState = Mb.bind(
        null,
        ze
      );
    }
  }, hm = {
    readContext: Ut,
    use: Bo,
    useCallback: tm,
    useContext: Ut,
    useEffect: Qp,
    useImperativeHandle: em,
    useInsertionEffect: Kp,
    useLayoutEffect: Jp,
    useMemo: nm,
    useReducer: Uo,
    useRef: Xp,
    useState: function() {
      return Uo(fr);
    },
    useDebugValue: qc,
    useDeferredValue: function(e, t) {
      var i = bt();
      return rm(
        i,
        Qe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Uo(fr)[0], t = bt().memoizedState;
      return [
        typeof e == "boolean" ? e : cs(e),
        t
      ];
    },
    useSyncExternalStore: jp,
    useId: om,
    useHostTransitionStatus: Vc,
    useFormState: Vp,
    useActionState: Vp,
    useOptimistic: function(e, t) {
      var i = bt();
      return Ip(i, Qe, e, t);
    },
    useMemoCache: Pc,
    useCacheRefresh: um
  }, Rb = {
    readContext: Ut,
    use: Bo,
    useCallback: tm,
    useContext: Ut,
    useEffect: Qp,
    useImperativeHandle: em,
    useInsertionEffect: Kp,
    useLayoutEffect: Jp,
    useMemo: nm,
    useReducer: Bc,
    useRef: Xp,
    useState: function() {
      return Bc(fr);
    },
    useDebugValue: qc,
    useDeferredValue: function(e, t) {
      var i = bt();
      return Qe === null ? Zc(i, e, t) : rm(
        i,
        Qe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Bc(fr)[0], t = bt().memoizedState;
      return [
        typeof e == "boolean" ? e : cs(e),
        t
      ];
    },
    useSyncExternalStore: jp,
    useId: om,
    useHostTransitionStatus: Vc,
    useFormState: Yp,
    useActionState: Yp,
    useOptimistic: function(e, t) {
      var i = bt();
      return Qe !== null ? Ip(i, Qe, e, t) : (i.baseState = e, [e, i.queue.dispatch]);
    },
    useMemoCache: Pc,
    useCacheRefresh: um
  }, di = null, hs = 0;
  function Vo(e) {
    var t = hs;
    return hs += 1, di === null && (di = []), Cp(di, e, t);
  }
  function ps(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function $o(e, t) {
    throw t.$$typeof === E ? Error(a(525)) : (e = Object.prototype.toString.call(t), Error(
      a(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function pm(e) {
    var t = e._init;
    return t(e._payload);
  }
  function mm(e) {
    function t(V, Z) {
      if (e) {
        var F = V.deletions;
        F === null ? (V.deletions = [Z], V.flags |= 16) : F.push(Z);
      }
    }
    function i(V, Z) {
      if (!e) return null;
      for (; Z !== null; )
        t(V, Z), Z = Z.sibling;
      return null;
    }
    function o(V) {
      for (var Z = /* @__PURE__ */ new Map(); V !== null; )
        V.key !== null ? Z.set(V.key, V) : Z.set(V.index, V), V = V.sibling;
      return Z;
    }
    function d(V, Z) {
      return V = or(V, Z), V.index = 0, V.sibling = null, V;
    }
    function _(V, Z, F) {
      return V.index = F, e ? (F = V.alternate, F !== null ? (F = F.index, F < Z ? (V.flags |= 67108866, Z) : F) : (V.flags |= 67108866, Z)) : (V.flags |= 1048576, Z);
    }
    function N(V) {
      return e && V.alternate === null && (V.flags |= 67108866), V;
    }
    function D(V, Z, F, oe) {
      return Z === null || Z.tag !== 6 ? (Z = hc(F, V.mode, oe), Z.return = V, Z) : (Z = d(Z, F), Z.return = V, Z);
    }
    function H(V, Z, F, oe) {
      var ve = F.type;
      return ve === h ? se(
        V,
        Z,
        F.props.children,
        oe,
        F.key
      ) : Z !== null && (Z.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === R && pm(ve) === Z.type) ? (Z = d(Z, F.props), ps(Z, F), Z.return = V, Z) : (Z = To(
        F.type,
        F.key,
        F.props,
        null,
        V.mode,
        oe
      ), ps(Z, F), Z.return = V, Z);
    }
    function Q(V, Z, F, oe) {
      return Z === null || Z.tag !== 4 || Z.stateNode.containerInfo !== F.containerInfo || Z.stateNode.implementation !== F.implementation ? (Z = pc(F, V.mode, oe), Z.return = V, Z) : (Z = d(Z, F.children || []), Z.return = V, Z);
    }
    function se(V, Z, F, oe, ve) {
      return Z === null || Z.tag !== 7 ? (Z = ca(
        F,
        V.mode,
        oe,
        ve
      ), Z.return = V, Z) : (Z = d(Z, F), Z.return = V, Z);
    }
    function le(V, Z, F) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
        return Z = hc(
          "" + Z,
          V.mode,
          F
        ), Z.return = V, Z;
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case v:
            return F = To(
              Z.type,
              Z.key,
              Z.props,
              null,
              V.mode,
              F
            ), ps(F, Z), F.return = V, F;
          case S:
            return Z = pc(
              Z,
              V.mode,
              F
            ), Z.return = V, Z;
          case R:
            var oe = Z._init;
            return Z = oe(Z._payload), le(V, Z, F);
        }
        if (W(Z) || q(Z))
          return Z = ca(
            Z,
            V.mode,
            F,
            null
          ), Z.return = V, Z;
        if (typeof Z.then == "function")
          return le(V, Vo(Z), F);
        if (Z.$$typeof === L)
          return le(
            V,
            jo(V, Z),
            F
          );
        $o(V, Z);
      }
      return null;
    }
    function J(V, Z, F, oe) {
      var ve = Z !== null ? Z.key : null;
      if (typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint")
        return ve !== null ? null : D(V, Z, "" + F, oe);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case v:
            return F.key === ve ? H(V, Z, F, oe) : null;
          case S:
            return F.key === ve ? Q(V, Z, F, oe) : null;
          case R:
            return ve = F._init, F = ve(F._payload), J(V, Z, F, oe);
        }
        if (W(F) || q(F))
          return ve !== null ? null : se(V, Z, F, oe, null);
        if (typeof F.then == "function")
          return J(
            V,
            Z,
            Vo(F),
            oe
          );
        if (F.$$typeof === L)
          return J(
            V,
            Z,
            jo(V, F),
            oe
          );
        $o(V, F);
      }
      return null;
    }
    function ee(V, Z, F, oe, ve) {
      if (typeof oe == "string" && oe !== "" || typeof oe == "number" || typeof oe == "bigint")
        return V = V.get(F) || null, D(Z, V, "" + oe, ve);
      if (typeof oe == "object" && oe !== null) {
        switch (oe.$$typeof) {
          case v:
            return V = V.get(
              oe.key === null ? F : oe.key
            ) || null, H(Z, V, oe, ve);
          case S:
            return V = V.get(
              oe.key === null ? F : oe.key
            ) || null, Q(Z, V, oe, ve);
          case R:
            var Le = oe._init;
            return oe = Le(oe._payload), ee(
              V,
              Z,
              F,
              oe,
              ve
            );
        }
        if (W(oe) || q(oe))
          return V = V.get(F) || null, se(Z, V, oe, ve, null);
        if (typeof oe.then == "function")
          return ee(
            V,
            Z,
            F,
            Vo(oe),
            ve
          );
        if (oe.$$typeof === L)
          return ee(
            V,
            Z,
            F,
            jo(Z, oe),
            ve
          );
        $o(Z, oe);
      }
      return null;
    }
    function Ae(V, Z, F, oe) {
      for (var ve = null, Le = null, be = Z, ke = Z = 0, Ot = null; be !== null && ke < F.length; ke++) {
        be.index > ke ? (Ot = be, be = null) : Ot = be.sibling;
        var Ve = J(
          V,
          be,
          F[ke],
          oe
        );
        if (Ve === null) {
          be === null && (be = Ot);
          break;
        }
        e && be && Ve.alternate === null && t(V, be), Z = _(Ve, Z, ke), Le === null ? ve = Ve : Le.sibling = Ve, Le = Ve, be = Ot;
      }
      if (ke === F.length)
        return i(V, be), $e && fa(V, ke), ve;
      if (be === null) {
        for (; ke < F.length; ke++)
          be = le(V, F[ke], oe), be !== null && (Z = _(
            be,
            Z,
            ke
          ), Le === null ? ve = be : Le.sibling = be, Le = be);
        return $e && fa(V, ke), ve;
      }
      for (be = o(be); ke < F.length; ke++)
        Ot = ee(
          be,
          V,
          ke,
          F[ke],
          oe
        ), Ot !== null && (e && Ot.alternate !== null && be.delete(
          Ot.key === null ? ke : Ot.key
        ), Z = _(
          Ot,
          Z,
          ke
        ), Le === null ? ve = Ot : Le.sibling = Ot, Le = Ot);
      return e && be.forEach(function(Xr) {
        return t(V, Xr);
      }), $e && fa(V, ke), ve;
    }
    function Ce(V, Z, F, oe) {
      if (F == null) throw Error(a(151));
      for (var ve = null, Le = null, be = Z, ke = Z = 0, Ot = null, Ve = F.next(); be !== null && !Ve.done; ke++, Ve = F.next()) {
        be.index > ke ? (Ot = be, be = null) : Ot = be.sibling;
        var Xr = J(V, be, Ve.value, oe);
        if (Xr === null) {
          be === null && (be = Ot);
          break;
        }
        e && be && Xr.alternate === null && t(V, be), Z = _(Xr, Z, ke), Le === null ? ve = Xr : Le.sibling = Xr, Le = Xr, be = Ot;
      }
      if (Ve.done)
        return i(V, be), $e && fa(V, ke), ve;
      if (be === null) {
        for (; !Ve.done; ke++, Ve = F.next())
          Ve = le(V, Ve.value, oe), Ve !== null && (Z = _(Ve, Z, ke), Le === null ? ve = Ve : Le.sibling = Ve, Le = Ve);
        return $e && fa(V, ke), ve;
      }
      for (be = o(be); !Ve.done; ke++, Ve = F.next())
        Ve = ee(be, V, ke, Ve.value, oe), Ve !== null && (e && Ve.alternate !== null && be.delete(Ve.key === null ? ke : Ve.key), Z = _(Ve, Z, ke), Le === null ? ve = Ve : Le.sibling = Ve, Le = Ve);
      return e && be.forEach(function(D1) {
        return t(V, D1);
      }), $e && fa(V, ke), ve;
    }
    function Je(V, Z, F, oe) {
      if (typeof F == "object" && F !== null && F.type === h && F.key === null && (F = F.props.children), typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case v:
            e: {
              for (var ve = F.key; Z !== null; ) {
                if (Z.key === ve) {
                  if (ve = F.type, ve === h) {
                    if (Z.tag === 7) {
                      i(
                        V,
                        Z.sibling
                      ), oe = d(
                        Z,
                        F.props.children
                      ), oe.return = V, V = oe;
                      break e;
                    }
                  } else if (Z.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === R && pm(ve) === Z.type) {
                    i(
                      V,
                      Z.sibling
                    ), oe = d(Z, F.props), ps(oe, F), oe.return = V, V = oe;
                    break e;
                  }
                  i(V, Z);
                  break;
                } else t(V, Z);
                Z = Z.sibling;
              }
              F.type === h ? (oe = ca(
                F.props.children,
                V.mode,
                oe,
                F.key
              ), oe.return = V, V = oe) : (oe = To(
                F.type,
                F.key,
                F.props,
                null,
                V.mode,
                oe
              ), ps(oe, F), oe.return = V, V = oe);
            }
            return N(V);
          case S:
            e: {
              for (ve = F.key; Z !== null; ) {
                if (Z.key === ve)
                  if (Z.tag === 4 && Z.stateNode.containerInfo === F.containerInfo && Z.stateNode.implementation === F.implementation) {
                    i(
                      V,
                      Z.sibling
                    ), oe = d(Z, F.children || []), oe.return = V, V = oe;
                    break e;
                  } else {
                    i(V, Z);
                    break;
                  }
                else t(V, Z);
                Z = Z.sibling;
              }
              oe = pc(F, V.mode, oe), oe.return = V, V = oe;
            }
            return N(V);
          case R:
            return ve = F._init, F = ve(F._payload), Je(
              V,
              Z,
              F,
              oe
            );
        }
        if (W(F))
          return Ae(
            V,
            Z,
            F,
            oe
          );
        if (q(F)) {
          if (ve = q(F), typeof ve != "function") throw Error(a(150));
          return F = ve.call(F), Ce(
            V,
            Z,
            F,
            oe
          );
        }
        if (typeof F.then == "function")
          return Je(
            V,
            Z,
            Vo(F),
            oe
          );
        if (F.$$typeof === L)
          return Je(
            V,
            Z,
            jo(V, F),
            oe
          );
        $o(V, F);
      }
      return typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint" ? (F = "" + F, Z !== null && Z.tag === 6 ? (i(V, Z.sibling), oe = d(Z, F), oe.return = V, V = oe) : (i(V, Z), oe = hc(F, V.mode, oe), oe.return = V, V = oe), N(V)) : i(V, Z);
    }
    return function(V, Z, F, oe) {
      try {
        hs = 0;
        var ve = Je(
          V,
          Z,
          F,
          oe
        );
        return di = null, ve;
      } catch (be) {
        if (be === as || be === Do) throw be;
        var Le = ln(29, be, null, V.mode);
        return Le.lanes = oe, Le.return = V, Le;
      } finally {
      }
    };
  }
  var fi = mm(!0), gm = mm(!1), Tn = X(null), Fn = null;
  function Rr(e) {
    var t = e.alternate;
    $(Ct, Ct.current & 1), $(Tn, e), Fn === null && (t === null || oi.current !== null || t.memoizedState !== null) && (Fn = e);
  }
  function vm(e) {
    if (e.tag === 22) {
      if ($(Ct, Ct.current), $(Tn, e), Fn === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (Fn = e);
      }
    } else Dr();
  }
  function Dr() {
    $(Ct, Ct.current), $(Tn, Tn.current);
  }
  function hr(e) {
    ce(Tn), Fn === e && (Fn = null), ce(Ct);
  }
  var Ct = X(0);
  function Yo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var i = t.memoizedState;
        if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || Ld(i)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  function Yc(e, t, i, o) {
    t = e.memoizedState, i = i(o, t), i = i == null ? t : g({}, t, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var Xc = {
    enqueueSetState: function(e, t, i) {
      e = e._reactInternals;
      var o = hn(), d = Or(o);
      d.payload = t, i != null && (d.callback = i), t = Mr(e, d, o), t !== null && (pn(t, e, o), ss(t, e, o));
    },
    enqueueReplaceState: function(e, t, i) {
      e = e._reactInternals;
      var o = hn(), d = Or(o);
      d.tag = 1, d.payload = t, i != null && (d.callback = i), t = Mr(e, d, o), t !== null && (pn(t, e, o), ss(t, e, o));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var i = hn(), o = Or(i);
      o.tag = 2, t != null && (o.callback = t), t = Mr(e, o, i), t !== null && (pn(t, e, i), ss(t, e, i));
    }
  };
  function ym(e, t, i, o, d, _, N) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, _, N) : t.prototype && t.prototype.isPureReactComponent ? !Qi(i, o) || !Qi(d, _) : !0;
  }
  function _m(e, t, i, o) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, o), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, o), t.state !== e && Xc.enqueueReplaceState(t, t.state, null);
  }
  function _a(e, t) {
    var i = t;
    if ("ref" in t) {
      i = {};
      for (var o in t)
        o !== "ref" && (i[o] = t[o]);
    }
    if (e = e.defaultProps) {
      i === t && (i = g({}, i));
      for (var d in e)
        i[d] === void 0 && (i[d] = e[d]);
    }
    return i;
  }
  var Xo = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  };
  function bm(e) {
    Xo(e);
  }
  function Sm(e) {
    console.error(e);
  }
  function wm(e) {
    Xo(e);
  }
  function Fo(e, t) {
    try {
      var i = e.onUncaughtError;
      i(t.value, { componentStack: t.stack });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Em(e, t, i) {
    try {
      var o = e.onCaughtError;
      o(i.value, {
        componentStack: i.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (d) {
      setTimeout(function() {
        throw d;
      });
    }
  }
  function Fc(e, t, i) {
    return i = Or(i), i.tag = 3, i.payload = { element: null }, i.callback = function() {
      Fo(e, t);
    }, i;
  }
  function Cm(e) {
    return e = Or(e), e.tag = 3, e;
  }
  function km(e, t, i, o) {
    var d = i.type.getDerivedStateFromError;
    if (typeof d == "function") {
      var _ = o.value;
      e.payload = function() {
        return d(_);
      }, e.callback = function() {
        Em(t, i, o);
      };
    }
    var N = i.stateNode;
    N !== null && typeof N.componentDidCatch == "function" && (e.callback = function() {
      Em(t, i, o), typeof d != "function" && (Ur === null ? Ur = /* @__PURE__ */ new Set([this]) : Ur.add(this));
      var D = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: D !== null ? D : ""
      });
    });
  }
  function Db(e, t, i, o, d) {
    if (i.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (t = i.alternate, t !== null && ts(
        t,
        i,
        d,
        !0
      ), i = Tn.current, i !== null) {
        switch (i.tag) {
          case 13:
            return Fn === null ? _d() : i.alternate === null && ht === 0 && (ht = 3), i.flags &= -257, i.flags |= 65536, i.lanes = d, o === Cc ? i.flags |= 16384 : (t = i.updateQueue, t === null ? i.updateQueue = /* @__PURE__ */ new Set([o]) : t.add(o), Sd(e, o, d)), !1;
          case 22:
            return i.flags |= 65536, o === Cc ? i.flags |= 16384 : (t = i.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, i.updateQueue = t) : (i = t.retryQueue, i === null ? t.retryQueue = /* @__PURE__ */ new Set([o]) : i.add(o)), Sd(e, o, d)), !1;
        }
        throw Error(a(435, i.tag));
      }
      return Sd(e, o, d), _d(), !1;
    }
    if ($e)
      return t = Tn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = d, o !== vc && (e = Error(a(422), { cause: o }), es(Cn(e, i)))) : (o !== vc && (t = Error(a(423), {
        cause: o
      }), es(
        Cn(t, i)
      )), e = e.current.alternate, e.flags |= 65536, d &= -d, e.lanes |= d, o = Cn(o, i), d = Fc(
        e.stateNode,
        o,
        d
      ), xc(e, d), ht !== 4 && (ht = 2)), !1;
    var _ = Error(a(520), { cause: o });
    if (_ = Cn(_, i), Ss === null ? Ss = [_] : Ss.push(_), ht !== 4 && (ht = 2), t === null) return !0;
    o = Cn(o, i), i = t;
    do {
      switch (i.tag) {
        case 3:
          return i.flags |= 65536, e = d & -d, i.lanes |= e, e = Fc(i.stateNode, o, e), xc(i, e), !1;
        case 1:
          if (t = i.type, _ = i.stateNode, (i.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || _ !== null && typeof _.componentDidCatch == "function" && (Ur === null || !Ur.has(_))))
            return i.flags |= 65536, d &= -d, i.lanes |= d, d = Cm(d), km(
              d,
              e,
              i,
              o
            ), xc(i, d), !1;
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var Am = Error(a(461)), Tt = !1;
  function Rt(e, t, i, o) {
    t.child = e === null ? gm(t, null, i, o) : fi(
      t,
      e.child,
      i,
      o
    );
  }
  function xm(e, t, i, o, d) {
    i = i.render;
    var _ = t.ref;
    if ("ref" in o) {
      var N = {};
      for (var D in o)
        D !== "ref" && (N[D] = o[D]);
    } else N = o;
    return ga(t), o = jc(
      e,
      t,
      i,
      N,
      _,
      d
    ), D = Rc(), e !== null && !Tt ? (Dc(e, t, d), pr(e, t, d)) : ($e && D && mc(t), t.flags |= 1, Rt(e, t, o, d), t.child);
  }
  function Tm(e, t, i, o, d) {
    if (e === null) {
      var _ = i.type;
      return typeof _ == "function" && !fc(_) && _.defaultProps === void 0 && i.compare === null ? (t.tag = 15, t.type = _, Nm(
        e,
        t,
        _,
        o,
        d
      )) : (e = To(
        i.type,
        null,
        o,
        t,
        t.mode,
        d
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (_ = e.child, !rd(e, d)) {
      var N = _.memoizedProps;
      if (i = i.compare, i = i !== null ? i : Qi, i(N, o) && e.ref === t.ref)
        return pr(e, t, d);
    }
    return t.flags |= 1, e = or(_, o), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Nm(e, t, i, o, d) {
    if (e !== null) {
      var _ = e.memoizedProps;
      if (Qi(_, o) && e.ref === t.ref)
        if (Tt = !1, t.pendingProps = o = _, rd(e, d))
          (e.flags & 131072) !== 0 && (Tt = !0);
        else
          return t.lanes = e.lanes, pr(e, t, d);
    }
    return Qc(
      e,
      t,
      i,
      o,
      d
    );
  }
  function Om(e, t, i) {
    var o = t.pendingProps, d = o.children, _ = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (o = _ !== null ? _.baseLanes | i : i, e !== null) {
          for (d = t.child = e.child, _ = 0; d !== null; )
            _ = _ | d.lanes | d.childLanes, d = d.sibling;
          t.childLanes = _ & ~o;
        } else t.childLanes = 0, t.child = null;
        return Mm(
          e,
          t,
          o,
          i
        );
      }
      if ((i & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ro(
          t,
          _ !== null ? _.cachePool : null
        ), _ !== null ? Np(t, _) : Nc(), vm(t);
      else
        return t.lanes = t.childLanes = 536870912, Mm(
          e,
          t,
          _ !== null ? _.baseLanes | i : i,
          i
        );
    } else
      _ !== null ? (Ro(t, _.cachePool), Np(t, _), Dr(), t.memoizedState = null) : (e !== null && Ro(t, null), Nc(), Dr());
    return Rt(e, t, d, i), t.child;
  }
  function Mm(e, t, i, o) {
    var d = Ec();
    return d = d === null ? null : { parent: Et._currentValue, pool: d }, t.memoizedState = {
      baseLanes: i,
      cachePool: d
    }, e !== null && Ro(t, null), Nc(), vm(t), e !== null && ts(e, t, o, !0), null;
  }
  function Qo(e, t) {
    var i = t.ref;
    if (i === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof i != "function" && typeof i != "object")
        throw Error(a(284));
      (e === null || e.ref !== i) && (t.flags |= 4194816);
    }
  }
  function Qc(e, t, i, o, d) {
    return ga(t), i = jc(
      e,
      t,
      i,
      o,
      void 0,
      d
    ), o = Rc(), e !== null && !Tt ? (Dc(e, t, d), pr(e, t, d)) : ($e && o && mc(t), t.flags |= 1, Rt(e, t, i, d), t.child);
  }
  function jm(e, t, i, o, d, _) {
    return ga(t), t.updateQueue = null, i = Mp(
      t,
      o,
      i,
      d
    ), Op(e), o = Rc(), e !== null && !Tt ? (Dc(e, t, _), pr(e, t, _)) : ($e && o && mc(t), t.flags |= 1, Rt(e, t, i, _), t.child);
  }
  function Rm(e, t, i, o, d) {
    if (ga(t), t.stateNode === null) {
      var _ = ni, N = i.contextType;
      typeof N == "object" && N !== null && (_ = Ut(N)), _ = new i(o, _), t.memoizedState = _.state !== null && _.state !== void 0 ? _.state : null, _.updater = Xc, t.stateNode = _, _._reactInternals = t, _ = t.stateNode, _.props = o, _.state = t.memoizedState, _.refs = {}, kc(t), N = i.contextType, _.context = typeof N == "object" && N !== null ? Ut(N) : ni, _.state = t.memoizedState, N = i.getDerivedStateFromProps, typeof N == "function" && (Yc(
        t,
        i,
        N,
        o
      ), _.state = t.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof _.getSnapshotBeforeUpdate == "function" || typeof _.UNSAFE_componentWillMount != "function" && typeof _.componentWillMount != "function" || (N = _.state, typeof _.componentWillMount == "function" && _.componentWillMount(), typeof _.UNSAFE_componentWillMount == "function" && _.UNSAFE_componentWillMount(), N !== _.state && Xc.enqueueReplaceState(_, _.state, null), us(t, o, _, d), os(), _.state = t.memoizedState), typeof _.componentDidMount == "function" && (t.flags |= 4194308), o = !0;
    } else if (e === null) {
      _ = t.stateNode;
      var D = t.memoizedProps, H = _a(i, D);
      _.props = H;
      var Q = _.context, se = i.contextType;
      N = ni, typeof se == "object" && se !== null && (N = Ut(se));
      var le = i.getDerivedStateFromProps;
      se = typeof le == "function" || typeof _.getSnapshotBeforeUpdate == "function", D = t.pendingProps !== D, se || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (D || Q !== N) && _m(
        t,
        _,
        o,
        N
      ), Nr = !1;
      var J = t.memoizedState;
      _.state = J, us(t, o, _, d), os(), Q = t.memoizedState, D || J !== Q || Nr ? (typeof le == "function" && (Yc(
        t,
        i,
        le,
        o
      ), Q = t.memoizedState), (H = Nr || ym(
        t,
        i,
        H,
        o,
        J,
        Q,
        N
      )) ? (se || typeof _.UNSAFE_componentWillMount != "function" && typeof _.componentWillMount != "function" || (typeof _.componentWillMount == "function" && _.componentWillMount(), typeof _.UNSAFE_componentWillMount == "function" && _.UNSAFE_componentWillMount()), typeof _.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof _.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = o, t.memoizedState = Q), _.props = o, _.state = Q, _.context = N, o = H) : (typeof _.componentDidMount == "function" && (t.flags |= 4194308), o = !1);
    } else {
      _ = t.stateNode, Ac(e, t), N = t.memoizedProps, se = _a(i, N), _.props = se, le = t.pendingProps, J = _.context, Q = i.contextType, H = ni, typeof Q == "object" && Q !== null && (H = Ut(Q)), D = i.getDerivedStateFromProps, (Q = typeof D == "function" || typeof _.getSnapshotBeforeUpdate == "function") || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (N !== le || J !== H) && _m(
        t,
        _,
        o,
        H
      ), Nr = !1, J = t.memoizedState, _.state = J, us(t, o, _, d), os();
      var ee = t.memoizedState;
      N !== le || J !== ee || Nr || e !== null && e.dependencies !== null && Mo(e.dependencies) ? (typeof D == "function" && (Yc(
        t,
        i,
        D,
        o
      ), ee = t.memoizedState), (se = Nr || ym(
        t,
        i,
        se,
        o,
        J,
        ee,
        H
      ) || e !== null && e.dependencies !== null && Mo(e.dependencies)) ? (Q || typeof _.UNSAFE_componentWillUpdate != "function" && typeof _.componentWillUpdate != "function" || (typeof _.componentWillUpdate == "function" && _.componentWillUpdate(o, ee, H), typeof _.UNSAFE_componentWillUpdate == "function" && _.UNSAFE_componentWillUpdate(
        o,
        ee,
        H
      )), typeof _.componentDidUpdate == "function" && (t.flags |= 4), typeof _.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof _.componentDidUpdate != "function" || N === e.memoizedProps && J === e.memoizedState || (t.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || N === e.memoizedProps && J === e.memoizedState || (t.flags |= 1024), t.memoizedProps = o, t.memoizedState = ee), _.props = o, _.state = ee, _.context = H, o = se) : (typeof _.componentDidUpdate != "function" || N === e.memoizedProps && J === e.memoizedState || (t.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || N === e.memoizedProps && J === e.memoizedState || (t.flags |= 1024), o = !1);
    }
    return _ = o, Qo(e, t), o = (t.flags & 128) !== 0, _ || o ? (_ = t.stateNode, i = o && typeof i.getDerivedStateFromError != "function" ? null : _.render(), t.flags |= 1, e !== null && o ? (t.child = fi(
      t,
      e.child,
      null,
      d
    ), t.child = fi(
      t,
      null,
      i,
      d
    )) : Rt(e, t, i, d), t.memoizedState = _.state, e = t.child) : e = pr(
      e,
      t,
      d
    ), e;
  }
  function Dm(e, t, i, o) {
    return Wi(), t.flags |= 256, Rt(e, t, i, o), t.child;
  }
  var Kc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Jc(e) {
    return { baseLanes: e, cachePool: Sp() };
  }
  function Wc(e, t, i) {
    return e = e !== null ? e.childLanes & ~i : 0, t && (e |= Nn), e;
  }
  function zm(e, t, i) {
    var o = t.pendingProps, d = !1, _ = (t.flags & 128) !== 0, N;
    if ((N = _) || (N = e !== null && e.memoizedState === null ? !1 : (Ct.current & 2) !== 0), N && (d = !0, t.flags &= -129), N = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if ($e) {
        if (d ? Rr(t) : Dr(), $e) {
          var D = ft, H;
          if (H = D) {
            e: {
              for (H = D, D = Xn; H.nodeType !== 8; ) {
                if (!D) {
                  D = null;
                  break e;
                }
                if (H = Pn(
                  H.nextSibling
                ), H === null) {
                  D = null;
                  break e;
                }
              }
              D = H;
            }
            D !== null ? (t.memoizedState = {
              dehydrated: D,
              treeContext: da !== null ? { id: ur, overflow: lr } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, H = ln(
              18,
              null,
              null,
              0
            ), H.stateNode = D, H.return = t, t.child = H, $t = t, ft = null, H = !0) : H = !1;
          }
          H || pa(t);
        }
        if (D = t.memoizedState, D !== null && (D = D.dehydrated, D !== null))
          return Ld(D) ? t.lanes = 32 : t.lanes = 536870912, null;
        hr(t);
      }
      return D = o.children, o = o.fallback, d ? (Dr(), d = t.mode, D = Ko(
        { mode: "hidden", children: D },
        d
      ), o = ca(
        o,
        d,
        i,
        null
      ), D.return = t, o.return = t, D.sibling = o, t.child = D, d = t.child, d.memoizedState = Jc(i), d.childLanes = Wc(
        e,
        N,
        i
      ), t.memoizedState = Kc, o) : (Rr(t), ed(t, D));
    }
    if (H = e.memoizedState, H !== null && (D = H.dehydrated, D !== null)) {
      if (_)
        t.flags & 256 ? (Rr(t), t.flags &= -257, t = td(
          e,
          t,
          i
        )) : t.memoizedState !== null ? (Dr(), t.child = e.child, t.flags |= 128, t = null) : (Dr(), d = o.fallback, D = t.mode, o = Ko(
          { mode: "visible", children: o.children },
          D
        ), d = ca(
          d,
          D,
          i,
          null
        ), d.flags |= 2, o.return = t, d.return = t, o.sibling = d, t.child = o, fi(
          t,
          e.child,
          null,
          i
        ), o = t.child, o.memoizedState = Jc(i), o.childLanes = Wc(
          e,
          N,
          i
        ), t.memoizedState = Kc, t = d);
      else if (Rr(t), Ld(D)) {
        if (N = D.nextSibling && D.nextSibling.dataset, N) var Q = N.dgst;
        N = Q, o = Error(a(419)), o.stack = "", o.digest = N, es({ value: o, source: null, stack: null }), t = td(
          e,
          t,
          i
        );
      } else if (Tt || ts(e, t, i, !1), N = (i & e.childLanes) !== 0, Tt || N) {
        if (N = nt, N !== null && (o = i & -i, o = (o & 42) !== 0 ? 1 : Pl(o), o = (o & (N.suspendedLanes | i)) !== 0 ? 0 : o, o !== 0 && o !== H.retryLane))
          throw H.retryLane = o, ti(e, o), pn(N, e, o), Am;
        D.data === "$?" || _d(), t = td(
          e,
          t,
          i
        );
      } else
        D.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = H.treeContext, ft = Pn(
          D.nextSibling
        ), $t = t, $e = !0, ha = null, Xn = !1, e !== null && (An[xn++] = ur, An[xn++] = lr, An[xn++] = da, ur = e.id, lr = e.overflow, da = t), t = ed(
          t,
          o.children
        ), t.flags |= 4096);
      return t;
    }
    return d ? (Dr(), d = o.fallback, D = t.mode, H = e.child, Q = H.sibling, o = or(H, {
      mode: "hidden",
      children: o.children
    }), o.subtreeFlags = H.subtreeFlags & 65011712, Q !== null ? d = or(Q, d) : (d = ca(
      d,
      D,
      i,
      null
    ), d.flags |= 2), d.return = t, o.return = t, o.sibling = d, t.child = o, o = d, d = t.child, D = e.child.memoizedState, D === null ? D = Jc(i) : (H = D.cachePool, H !== null ? (Q = Et._currentValue, H = H.parent !== Q ? { parent: Q, pool: Q } : H) : H = Sp(), D = {
      baseLanes: D.baseLanes | i,
      cachePool: H
    }), d.memoizedState = D, d.childLanes = Wc(
      e,
      N,
      i
    ), t.memoizedState = Kc, o) : (Rr(t), i = e.child, e = i.sibling, i = or(i, {
      mode: "visible",
      children: o.children
    }), i.return = t, i.sibling = null, e !== null && (N = t.deletions, N === null ? (t.deletions = [e], t.flags |= 16) : N.push(e)), t.child = i, t.memoizedState = null, i);
  }
  function ed(e, t) {
    return t = Ko(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Ko(e, t) {
    return e = ln(22, e, null, t), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function td(e, t, i) {
    return fi(t, e.child, null, i), e = ed(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Lm(e, t, i) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t), _c(e.return, t, i);
  }
  function nd(e, t, i, o, d) {
    var _ = e.memoizedState;
    _ === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: i,
      tailMode: d
    } : (_.isBackwards = t, _.rendering = null, _.renderingStartTime = 0, _.last = o, _.tail = i, _.tailMode = d);
  }
  function Pm(e, t, i) {
    var o = t.pendingProps, d = o.revealOrder, _ = o.tail;
    if (Rt(e, t, o.children, i), o = Ct.current, (o & 2) !== 0)
      o = o & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Lm(e, i, t);
          else if (e.tag === 19)
            Lm(e, i, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      o &= 1;
    }
    switch ($(Ct, o), d) {
      case "forwards":
        for (i = t.child, d = null; i !== null; )
          e = i.alternate, e !== null && Yo(e) === null && (d = i), i = i.sibling;
        i = d, i === null ? (d = t.child, t.child = null) : (d = i.sibling, i.sibling = null), nd(
          t,
          !1,
          d,
          i,
          _
        );
        break;
      case "backwards":
        for (i = null, d = t.child, t.child = null; d !== null; ) {
          if (e = d.alternate, e !== null && Yo(e) === null) {
            t.child = d;
            break;
          }
          e = d.sibling, d.sibling = i, i = d, d = e;
        }
        nd(
          t,
          !0,
          i,
          null,
          _
        );
        break;
      case "together":
        nd(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function pr(e, t, i) {
    if (e !== null && (t.dependencies = e.dependencies), Br |= t.lanes, (i & t.childLanes) === 0)
      if (e !== null) {
        if (ts(
          e,
          t,
          i,
          !1
        ), (i & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(a(153));
    if (t.child !== null) {
      for (e = t.child, i = or(e, e.pendingProps), t.child = i, i.return = t; e.sibling !== null; )
        e = e.sibling, i = i.sibling = or(e, e.pendingProps), i.return = t;
      i.sibling = null;
    }
    return t.child;
  }
  function rd(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Mo(e)));
  }
  function zb(e, t, i) {
    switch (t.tag) {
      case 3:
        re(t, t.stateNode.containerInfo), Tr(t, Et, e.memoizedState.cache), Wi();
        break;
      case 27:
      case 5:
        je(t);
        break;
      case 4:
        re(t, t.stateNode.containerInfo);
        break;
      case 10:
        Tr(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var o = t.memoizedState;
        if (o !== null)
          return o.dehydrated !== null ? (Rr(t), t.flags |= 128, null) : (i & t.child.childLanes) !== 0 ? zm(e, t, i) : (Rr(t), e = pr(
            e,
            t,
            i
          ), e !== null ? e.sibling : null);
        Rr(t);
        break;
      case 19:
        var d = (e.flags & 128) !== 0;
        if (o = (i & t.childLanes) !== 0, o || (ts(
          e,
          t,
          i,
          !1
        ), o = (i & t.childLanes) !== 0), d) {
          if (o)
            return Pm(
              e,
              t,
              i
            );
          t.flags |= 128;
        }
        if (d = t.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), $(Ct, Ct.current), o) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Om(e, t, i);
      case 24:
        Tr(t, Et, e.memoizedState.cache);
    }
    return pr(e, t, i);
  }
  function Im(e, t, i) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Tt = !0;
      else {
        if (!rd(e, i) && (t.flags & 128) === 0)
          return Tt = !1, zb(
            e,
            t,
            i
          );
        Tt = (e.flags & 131072) !== 0;
      }
    else
      Tt = !1, $e && (t.flags & 1048576) !== 0 && pp(t, Oo, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var o = t.elementType, d = o._init;
          if (o = d(o._payload), t.type = o, typeof o == "function")
            fc(o) ? (e = _a(o, e), t.tag = 1, t = Rm(
              null,
              t,
              o,
              e,
              i
            )) : (t.tag = 0, t = Qc(
              null,
              t,
              o,
              e,
              i
            ));
          else {
            if (o != null) {
              if (d = o.$$typeof, d === l) {
                t.tag = 11, t = xm(
                  null,
                  t,
                  o,
                  e,
                  i
                );
                break e;
              } else if (d === k) {
                t.tag = 14, t = Tm(
                  null,
                  t,
                  o,
                  e,
                  i
                );
                break e;
              }
            }
            throw t = G(o) || o, Error(a(306, t, ""));
          }
        }
        return t;
      case 0:
        return Qc(
          e,
          t,
          t.type,
          t.pendingProps,
          i
        );
      case 1:
        return o = t.type, d = _a(
          o,
          t.pendingProps
        ), Rm(
          e,
          t,
          o,
          d,
          i
        );
      case 3:
        e: {
          if (re(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(a(387));
          o = t.pendingProps;
          var _ = t.memoizedState;
          d = _.element, Ac(e, t), us(t, o, null, i);
          var N = t.memoizedState;
          if (o = N.cache, Tr(t, Et, o), o !== _.cache && bc(
            t,
            [Et],
            i,
            !0
          ), os(), o = N.element, _.isDehydrated)
            if (_ = {
              element: o,
              isDehydrated: !1,
              cache: N.cache
            }, t.updateQueue.baseState = _, t.memoizedState = _, t.flags & 256) {
              t = Dm(
                e,
                t,
                o,
                i
              );
              break e;
            } else if (o !== d) {
              d = Cn(
                Error(a(424)),
                t
              ), es(d), t = Dm(
                e,
                t,
                o,
                i
              );
              break e;
            } else {
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (ft = Pn(e.firstChild), $t = t, $e = !0, ha = null, Xn = !0, i = gm(
                t,
                null,
                o,
                i
              ), t.child = i; i; )
                i.flags = i.flags & -3 | 4096, i = i.sibling;
            }
          else {
            if (Wi(), o === d) {
              t = pr(
                e,
                t,
                i
              );
              break e;
            }
            Rt(
              e,
              t,
              o,
              i
            );
          }
          t = t.child;
        }
        return t;
      case 26:
        return Qo(e, t), e === null ? (i = qg(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = i : $e || (i = t.type, e = t.pendingProps, o = du(
          ne.current
        ).createElement(i), o[Bt] = t, o[Kt] = e, zt(o, i, e), xt(o), t.stateNode = o) : t.memoizedState = qg(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return je(t), e === null && $e && (o = t.stateNode = Bg(
          t.type,
          t.pendingProps,
          ne.current
        ), $t = t, Xn = !0, d = ft, Zr(t.type) ? (Pd = d, ft = Pn(
          o.firstChild
        )) : ft = d), Rt(
          e,
          t,
          t.pendingProps.children,
          i
        ), Qo(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && $e && ((d = o = ft) && (o = l1(
          o,
          t.type,
          t.pendingProps,
          Xn
        ), o !== null ? (t.stateNode = o, $t = t, ft = Pn(
          o.firstChild
        ), Xn = !1, d = !0) : d = !1), d || pa(t)), je(t), d = t.type, _ = t.pendingProps, N = e !== null ? e.memoizedProps : null, o = _.children, Rd(d, _) ? o = null : N !== null && Rd(d, N) && (t.flags |= 32), t.memoizedState !== null && (d = jc(
          e,
          t,
          xb,
          null,
          null,
          i
        ), Os._currentValue = d), Qo(e, t), Rt(e, t, o, i), t.child;
      case 6:
        return e === null && $e && ((e = i = ft) && (i = c1(
          i,
          t.pendingProps,
          Xn
        ), i !== null ? (t.stateNode = i, $t = t, ft = null, e = !0) : e = !1), e || pa(t)), null;
      case 13:
        return zm(e, t, i);
      case 4:
        return re(
          t,
          t.stateNode.containerInfo
        ), o = t.pendingProps, e === null ? t.child = fi(
          t,
          null,
          o,
          i
        ) : Rt(
          e,
          t,
          o,
          i
        ), t.child;
      case 11:
        return xm(
          e,
          t,
          t.type,
          t.pendingProps,
          i
        );
      case 7:
        return Rt(
          e,
          t,
          t.pendingProps,
          i
        ), t.child;
      case 8:
        return Rt(
          e,
          t,
          t.pendingProps.children,
          i
        ), t.child;
      case 12:
        return Rt(
          e,
          t,
          t.pendingProps.children,
          i
        ), t.child;
      case 10:
        return o = t.pendingProps, Tr(t, t.type, o.value), Rt(
          e,
          t,
          o.children,
          i
        ), t.child;
      case 9:
        return d = t.type._context, o = t.pendingProps.children, ga(t), d = Ut(d), o = o(d), t.flags |= 1, Rt(e, t, o, i), t.child;
      case 14:
        return Tm(
          e,
          t,
          t.type,
          t.pendingProps,
          i
        );
      case 15:
        return Nm(
          e,
          t,
          t.type,
          t.pendingProps,
          i
        );
      case 19:
        return Pm(e, t, i);
      case 31:
        return o = t.pendingProps, i = t.mode, o = {
          mode: o.mode,
          children: o.children
        }, e === null ? (i = Ko(
          o,
          i
        ), i.ref = t.ref, t.child = i, i.return = t, t = i) : (i = or(e.child, o), i.ref = t.ref, t.child = i, i.return = t, t = i), t;
      case 22:
        return Om(e, t, i);
      case 24:
        return ga(t), o = Ut(Et), e === null ? (d = Ec(), d === null && (d = nt, _ = Sc(), d.pooledCache = _, _.refCount++, _ !== null && (d.pooledCacheLanes |= i), d = _), t.memoizedState = {
          parent: o,
          cache: d
        }, kc(t), Tr(t, Et, d)) : ((e.lanes & i) !== 0 && (Ac(e, t), us(t, null, null, i), os()), d = e.memoizedState, _ = t.memoizedState, d.parent !== o ? (d = { parent: o, cache: o }, t.memoizedState = d, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = d), Tr(t, Et, o)) : (o = _.cache, Tr(t, Et, o), o !== d.cache && bc(
          t,
          [Et],
          i,
          !0
        ))), Rt(
          e,
          t,
          t.pendingProps.children,
          i
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(a(156, t.tag));
  }
  function mr(e) {
    e.flags |= 4;
  }
  function Bm(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Yg(t)) {
      if (t = Tn.current, t !== null && ((Ge & 4194048) === Ge ? Fn !== null : (Ge & 62914560) !== Ge && (Ge & 536870912) === 0 || t !== Fn))
        throw is = Cc, wp;
      e.flags |= 8192;
    }
  }
  function Jo(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? vh() : 536870912, e.lanes |= t, gi |= t);
  }
  function ms(e, t) {
    if (!$e)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var i = null; t !== null; )
            t.alternate !== null && (i = t), t = t.sibling;
          i === null ? e.tail = null : i.sibling = null;
          break;
        case "collapsed":
          i = e.tail;
          for (var o = null; i !== null; )
            i.alternate !== null && (o = i), i = i.sibling;
          o === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null;
      }
  }
  function ut(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, i = 0, o = 0;
    if (t)
      for (var d = e.child; d !== null; )
        i |= d.lanes | d.childLanes, o |= d.subtreeFlags & 65011712, o |= d.flags & 65011712, d.return = e, d = d.sibling;
    else
      for (d = e.child; d !== null; )
        i |= d.lanes | d.childLanes, o |= d.subtreeFlags, o |= d.flags, d.return = e, d = d.sibling;
    return e.subtreeFlags |= o, e.childLanes = i, t;
  }
  function Lb(e, t, i) {
    var o = t.pendingProps;
    switch (gc(t), t.tag) {
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
        return ut(t), null;
      case 1:
        return ut(t), null;
      case 3:
        return i = t.stateNode, o = null, e !== null && (o = e.memoizedState.cache), t.memoizedState.cache !== o && (t.flags |= 2048), dr(Et), pe(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (Ji(t) ? mr(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, vp())), ut(t), null;
      case 26:
        return i = t.memoizedState, e === null ? (mr(t), i !== null ? (ut(t), Bm(t, i)) : (ut(t), t.flags &= -16777217)) : i ? i !== e.memoizedState ? (mr(t), ut(t), Bm(t, i)) : (ut(t), t.flags &= -16777217) : (e.memoizedProps !== o && mr(t), ut(t), t.flags &= -16777217), null;
      case 27:
        Se(t), i = ne.current;
        var d = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== o && mr(t);
        else {
          if (!o) {
            if (t.stateNode === null)
              throw Error(a(166));
            return ut(t), null;
          }
          e = U.current, Ji(t) ? mp(t) : (e = Bg(d, o, i), t.stateNode = e, mr(t));
        }
        return ut(t), null;
      case 5:
        if (Se(t), i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== o && mr(t);
        else {
          if (!o) {
            if (t.stateNode === null)
              throw Error(a(166));
            return ut(t), null;
          }
          if (e = U.current, Ji(t))
            mp(t);
          else {
            switch (d = du(
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
            e[Bt] = t, e[Kt] = o;
            e: for (d = t.child; d !== null; ) {
              if (d.tag === 5 || d.tag === 6)
                e.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                d.child.return = d, d = d.child;
                continue;
              }
              if (d === t) break e;
              for (; d.sibling === null; ) {
                if (d.return === null || d.return === t)
                  break e;
                d = d.return;
              }
              d.sibling.return = d.return, d = d.sibling;
            }
            t.stateNode = e;
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
            e && mr(t);
          }
        }
        return ut(t), t.flags &= -16777217, null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== o && mr(t);
        else {
          if (typeof o != "string" && t.stateNode === null)
            throw Error(a(166));
          if (e = ne.current, Ji(t)) {
            if (e = t.stateNode, i = t.memoizedProps, o = null, d = $t, d !== null)
              switch (d.tag) {
                case 27:
                case 5:
                  o = d.memoizedProps;
              }
            e[Bt] = t, e = !!(e.nodeValue === i || o !== null && o.suppressHydrationWarning === !0 || jg(e.nodeValue, i)), e || pa(t);
          } else
            e = du(e).createTextNode(
              o
            ), e[Bt] = t, t.stateNode = e;
        }
        return ut(t), null;
      case 13:
        if (o = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (d = Ji(t), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!d) throw Error(a(318));
              if (d = t.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(a(317));
              d[Bt] = t;
            } else
              Wi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ut(t), d = !1;
          } else
            d = vp(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = d), d = !0;
          if (!d)
            return t.flags & 256 ? (hr(t), t) : (hr(t), null);
        }
        if (hr(t), (t.flags & 128) !== 0)
          return t.lanes = i, t;
        if (i = o !== null, e = e !== null && e.memoizedState !== null, i) {
          o = t.child, d = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (d = o.alternate.memoizedState.cachePool.pool);
          var _ = null;
          o.memoizedState !== null && o.memoizedState.cachePool !== null && (_ = o.memoizedState.cachePool.pool), _ !== d && (o.flags |= 2048);
        }
        return i !== e && i && (t.child.flags |= 8192), Jo(t, t.updateQueue), ut(t), null;
      case 4:
        return pe(), e === null && Td(t.stateNode.containerInfo), ut(t), null;
      case 10:
        return dr(t.type), ut(t), null;
      case 19:
        if (ce(Ct), d = t.memoizedState, d === null) return ut(t), null;
        if (o = (t.flags & 128) !== 0, _ = d.rendering, _ === null)
          if (o) ms(d, !1);
          else {
            if (ht !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (_ = Yo(e), _ !== null) {
                  for (t.flags |= 128, ms(d, !1), e = _.updateQueue, t.updateQueue = e, Jo(t, e), t.subtreeFlags = 0, e = i, i = t.child; i !== null; )
                    hp(i, e), i = i.sibling;
                  return $(
                    Ct,
                    Ct.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            d.tail !== null && Fe() > tu && (t.flags |= 128, o = !0, ms(d, !1), t.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = Yo(_), e !== null) {
              if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, Jo(t, e), ms(d, !0), d.tail === null && d.tailMode === "hidden" && !_.alternate && !$e)
                return ut(t), null;
            } else
              2 * Fe() - d.renderingStartTime > tu && i !== 536870912 && (t.flags |= 128, o = !0, ms(d, !1), t.lanes = 4194304);
          d.isBackwards ? (_.sibling = t.child, t.child = _) : (e = d.last, e !== null ? e.sibling = _ : t.child = _, d.last = _);
        }
        return d.tail !== null ? (t = d.tail, d.rendering = t, d.tail = t.sibling, d.renderingStartTime = Fe(), t.sibling = null, e = Ct.current, $(Ct, o ? e & 1 | 2 : e & 1), t) : (ut(t), null);
      case 22:
      case 23:
        return hr(t), Oc(), o = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (t.flags |= 8192) : o && (t.flags |= 8192), o ? (i & 536870912) !== 0 && (t.flags & 128) === 0 && (ut(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ut(t), i = t.updateQueue, i !== null && Jo(t, i.retryQueue), i = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), o = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (o = t.memoizedState.cachePool.pool), o !== i && (t.flags |= 2048), e !== null && ce(va), null;
      case 24:
        return i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), dr(Et), ut(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function Pb(e, t) {
    switch (gc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return dr(Et), pe(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Se(t), null;
      case 13:
        if (hr(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(a(340));
          Wi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ce(Ct), null;
      case 4:
        return pe(), null;
      case 10:
        return dr(t.type), null;
      case 22:
      case 23:
        return hr(t), Oc(), e !== null && ce(va), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return dr(Et), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Um(e, t) {
    switch (gc(t), t.tag) {
      case 3:
        dr(Et), pe();
        break;
      case 26:
      case 27:
      case 5:
        Se(t);
        break;
      case 4:
        pe();
        break;
      case 13:
        hr(t);
        break;
      case 19:
        ce(Ct);
        break;
      case 10:
        dr(t.type);
        break;
      case 22:
      case 23:
        hr(t), Oc(), e !== null && ce(va);
        break;
      case 24:
        dr(Et);
    }
  }
  function gs(e, t) {
    try {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var d = o.next;
        i = d;
        do {
          if ((i.tag & e) === e) {
            o = void 0;
            var _ = i.create, N = i.inst;
            o = _(), N.destroy = o;
          }
          i = i.next;
        } while (i !== d);
      }
    } catch (D) {
      tt(t, t.return, D);
    }
  }
  function zr(e, t, i) {
    try {
      var o = t.updateQueue, d = o !== null ? o.lastEffect : null;
      if (d !== null) {
        var _ = d.next;
        o = _;
        do {
          if ((o.tag & e) === e) {
            var N = o.inst, D = N.destroy;
            if (D !== void 0) {
              N.destroy = void 0, d = t;
              var H = i, Q = D;
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
        } while (o !== _);
      }
    } catch (se) {
      tt(t, t.return, se);
    }
  }
  function Hm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var i = e.stateNode;
      try {
        Tp(t, i);
      } catch (o) {
        tt(e, e.return, o);
      }
    }
  }
  function qm(e, t, i) {
    i.props = _a(
      e.type,
      e.memoizedProps
    ), i.state = e.memoizedState;
    try {
      i.componentWillUnmount();
    } catch (o) {
      tt(e, t, o);
    }
  }
  function vs(e, t) {
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
      tt(e, t, d);
    }
  }
  function Qn(e, t) {
    var i = e.ref, o = e.refCleanup;
    if (i !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (d) {
          tt(e, t, d);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof i == "function")
        try {
          i(null);
        } catch (d) {
          tt(e, t, d);
        }
      else i.current = null;
  }
  function Zm(e) {
    var t = e.type, i = e.memoizedProps, o = e.stateNode;
    try {
      e: switch (t) {
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
  function ad(e, t, i) {
    try {
      var o = e.stateNode;
      a1(o, e.type, i, t), o[Kt] = t;
    } catch (d) {
      tt(e, e.return, d);
    }
  }
  function Gm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Zr(e.type) || e.tag === 4;
  }
  function id(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Gm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Zr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function sd(e, t, i) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, t ? (i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i).insertBefore(e, t) : (t = i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i, t.appendChild(e), i = i._reactRootContainer, i != null || t.onclick !== null || (t.onclick = cu));
    else if (o !== 4 && (o === 27 && Zr(e.type) && (i = e.stateNode, t = null), e = e.child, e !== null))
      for (sd(e, t, i), e = e.sibling; e !== null; )
        sd(e, t, i), e = e.sibling;
  }
  function Wo(e, t, i) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, t ? i.insertBefore(e, t) : i.appendChild(e);
    else if (o !== 4 && (o === 27 && Zr(e.type) && (i = e.stateNode), e = e.child, e !== null))
      for (Wo(e, t, i), e = e.sibling; e !== null; )
        Wo(e, t, i), e = e.sibling;
  }
  function Vm(e) {
    var t = e.stateNode, i = e.memoizedProps;
    try {
      for (var o = e.type, d = t.attributes; d.length; )
        t.removeAttributeNode(d[0]);
      zt(t, o, i), t[Bt] = e, t[Kt] = i;
    } catch (_) {
      tt(e, e.return, _);
    }
  }
  var gr = !1, vt = !1, od = !1, $m = typeof WeakSet == "function" ? WeakSet : Set, Nt = null;
  function Ib(e, t) {
    if (e = e.containerInfo, Md = vu, e = rp(e), ic(e)) {
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
            var d = o.anchorOffset, _ = o.focusNode;
            o = o.focusOffset;
            try {
              i.nodeType, _.nodeType;
            } catch {
              i = null;
              break e;
            }
            var N = 0, D = -1, H = -1, Q = 0, se = 0, le = e, J = null;
            t: for (; ; ) {
              for (var ee; le !== i || d !== 0 && le.nodeType !== 3 || (D = N + d), le !== _ || o !== 0 && le.nodeType !== 3 || (H = N + o), le.nodeType === 3 && (N += le.nodeValue.length), (ee = le.firstChild) !== null; )
                J = le, le = ee;
              for (; ; ) {
                if (le === e) break t;
                if (J === i && ++Q === d && (D = N), J === _ && ++se === o && (H = N), (ee = le.nextSibling) !== null) break;
                le = J, J = le.parentNode;
              }
              le = ee;
            }
            i = D === -1 || H === -1 ? null : { start: D, end: H };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (jd = { focusedElem: e, selectionRange: i }, vu = !1, Nt = t; Nt !== null; )
      if (t = Nt, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = t, Nt = e;
      else
        for (; Nt !== null; ) {
          switch (t = Nt, _ = t.alternate, e = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && _ !== null) {
                e = void 0, i = t, d = _.memoizedProps, _ = _.memoizedState, o = i.stateNode;
                try {
                  var Ae = _a(
                    i.type,
                    d,
                    i.elementType === i.type
                  );
                  e = o.getSnapshotBeforeUpdate(
                    Ae,
                    _
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
                if (e = t.stateNode.containerInfo, i = e.nodeType, i === 9)
                  zd(e);
                else if (i === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      zd(e);
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
          if (e = t.sibling, e !== null) {
            e.return = t.return, Nt = e;
            break;
          }
          Nt = t.return;
        }
  }
  function Ym(e, t, i) {
    var o = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        Lr(e, i), o & 4 && gs(5, i);
        break;
      case 1:
        if (Lr(e, i), o & 4)
          if (e = i.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (N) {
              tt(i, i.return, N);
            }
          else {
            var d = _a(
              i.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                d,
                t,
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
        o & 64 && Hm(i), o & 512 && vs(i, i.return);
        break;
      case 3:
        if (Lr(e, i), o & 64 && (e = i.updateQueue, e !== null)) {
          if (t = null, i.child !== null)
            switch (i.child.tag) {
              case 27:
              case 5:
                t = i.child.stateNode;
                break;
              case 1:
                t = i.child.stateNode;
            }
          try {
            Tp(e, t);
          } catch (N) {
            tt(i, i.return, N);
          }
        }
        break;
      case 27:
        t === null && o & 4 && Vm(i);
      case 26:
      case 5:
        Lr(e, i), t === null && o & 4 && Zm(i), o & 512 && vs(i, i.return);
        break;
      case 12:
        Lr(e, i);
        break;
      case 13:
        Lr(e, i), o & 4 && Qm(e, i), o & 64 && (e = i.memoizedState, e !== null && (e = e.dehydrated, e !== null && (i = Yb.bind(
          null,
          i
        ), d1(e, i))));
        break;
      case 22:
        if (o = i.memoizedState !== null || gr, !o) {
          t = t !== null && t.memoizedState !== null || vt, d = gr;
          var _ = vt;
          gr = o, (vt = t) && !_ ? Pr(
            e,
            i,
            (i.subtreeFlags & 8772) !== 0
          ) : Lr(e, i), gr = d, vt = _;
        }
        break;
      case 30:
        break;
      default:
        Lr(e, i);
    }
  }
  function Xm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Xm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ul(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var at = null, en = !1;
  function vr(e, t, i) {
    for (i = i.child; i !== null; )
      Fm(e, t, i), i = i.sibling;
  }
  function Fm(e, t, i) {
    if (mt && typeof mt.onCommitFiberUnmount == "function")
      try {
        mt.onCommitFiberUnmount(Dn, i);
      } catch {
      }
    switch (i.tag) {
      case 26:
        vt || Qn(i, t), vr(
          e,
          t,
          i
        ), i.memoizedState ? i.memoizedState.count-- : i.stateNode && (i = i.stateNode, i.parentNode.removeChild(i));
        break;
      case 27:
        vt || Qn(i, t);
        var o = at, d = en;
        Zr(i.type) && (at = i.stateNode, en = !1), vr(
          e,
          t,
          i
        ), As(i.stateNode), at = o, en = d;
        break;
      case 5:
        vt || Qn(i, t);
      case 6:
        if (o = at, d = en, at = null, vr(
          e,
          t,
          i
        ), at = o, en = d, at !== null)
          if (en)
            try {
              (at.nodeType === 9 ? at.body : at.nodeName === "HTML" ? at.ownerDocument.body : at).removeChild(i.stateNode);
            } catch (_) {
              tt(
                i,
                t,
                _
              );
            }
          else
            try {
              at.removeChild(i.stateNode);
            } catch (_) {
              tt(
                i,
                t,
                _
              );
            }
        break;
      case 18:
        at !== null && (en ? (e = at, Pg(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          i.stateNode
        ), Ds(e)) : Pg(at, i.stateNode));
        break;
      case 4:
        o = at, d = en, at = i.stateNode.containerInfo, en = !0, vr(
          e,
          t,
          i
        ), at = o, en = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        vt || zr(2, i, t), vt || zr(4, i, t), vr(
          e,
          t,
          i
        );
        break;
      case 1:
        vt || (Qn(i, t), o = i.stateNode, typeof o.componentWillUnmount == "function" && qm(
          i,
          t,
          o
        )), vr(
          e,
          t,
          i
        );
        break;
      case 21:
        vr(
          e,
          t,
          i
        );
        break;
      case 22:
        vt = (o = vt) || i.memoizedState !== null, vr(
          e,
          t,
          i
        ), vt = o;
        break;
      default:
        vr(
          e,
          t,
          i
        );
    }
  }
  function Qm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Ds(e);
      } catch (i) {
        tt(t, t.return, i);
      }
  }
  function Bb(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new $m()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new $m()), t;
      default:
        throw Error(a(435, e.tag));
    }
  }
  function ud(e, t) {
    var i = Bb(e);
    t.forEach(function(o) {
      var d = Xb.bind(null, e, o);
      i.has(o) || (i.add(o), o.then(d, d));
    });
  }
  function cn(e, t) {
    var i = t.deletions;
    if (i !== null)
      for (var o = 0; o < i.length; o++) {
        var d = i[o], _ = e, N = t, D = N;
        e: for (; D !== null; ) {
          switch (D.tag) {
            case 27:
              if (Zr(D.type)) {
                at = D.stateNode, en = !1;
                break e;
              }
              break;
            case 5:
              at = D.stateNode, en = !1;
              break e;
            case 3:
            case 4:
              at = D.stateNode.containerInfo, en = !0;
              break e;
          }
          D = D.return;
        }
        if (at === null) throw Error(a(160));
        Fm(_, N, d), at = null, en = !1, _ = d.alternate, _ !== null && (_.return = null), d.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        Km(t, e), t = t.sibling;
  }
  var Ln = null;
  function Km(e, t) {
    var i = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        cn(t, e), dn(e), o & 4 && (zr(3, e, e.return), gs(3, e), zr(5, e, e.return));
        break;
      case 1:
        cn(t, e), dn(e), o & 512 && (vt || i === null || Qn(i, i.return)), o & 64 && gr && (e = e.updateQueue, e !== null && (o = e.callbacks, o !== null && (i = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = i === null ? o : i.concat(o))));
        break;
      case 26:
        var d = Ln;
        if (cn(t, e), dn(e), o & 512 && (vt || i === null || Qn(i, i.return)), o & 4) {
          var _ = i !== null ? i.memoizedState : null;
          if (o = e.memoizedState, i === null)
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  o = e.type, i = e.memoizedProps, d = d.ownerDocument || d;
                  t: switch (o) {
                    case "title":
                      _ = d.getElementsByTagName("title")[0], (!_ || _[Hi] || _[Bt] || _.namespaceURI === "http://www.w3.org/2000/svg" || _.hasAttribute("itemprop")) && (_ = d.createElement(o), d.head.insertBefore(
                        _,
                        d.querySelector("head > title")
                      )), zt(_, o, i), _[Bt] = e, xt(_), o = _;
                      break e;
                    case "link":
                      var N = Vg(
                        "link",
                        "href",
                        d
                      ).get(o + (i.href || ""));
                      if (N) {
                        for (var D = 0; D < N.length; D++)
                          if (_ = N[D], _.getAttribute("href") === (i.href == null || i.href === "" ? null : i.href) && _.getAttribute("rel") === (i.rel == null ? null : i.rel) && _.getAttribute("title") === (i.title == null ? null : i.title) && _.getAttribute("crossorigin") === (i.crossOrigin == null ? null : i.crossOrigin)) {
                            N.splice(D, 1);
                            break t;
                          }
                      }
                      _ = d.createElement(o), zt(_, o, i), d.head.appendChild(_);
                      break;
                    case "meta":
                      if (N = Vg(
                        "meta",
                        "content",
                        d
                      ).get(o + (i.content || ""))) {
                        for (D = 0; D < N.length; D++)
                          if (_ = N[D], _.getAttribute("content") === (i.content == null ? null : "" + i.content) && _.getAttribute("name") === (i.name == null ? null : i.name) && _.getAttribute("property") === (i.property == null ? null : i.property) && _.getAttribute("http-equiv") === (i.httpEquiv == null ? null : i.httpEquiv) && _.getAttribute("charset") === (i.charSet == null ? null : i.charSet)) {
                            N.splice(D, 1);
                            break t;
                          }
                      }
                      _ = d.createElement(o), zt(_, o, i), d.head.appendChild(_);
                      break;
                    default:
                      throw Error(a(468, o));
                  }
                  _[Bt] = e, xt(_), o = _;
                }
                e.stateNode = o;
              } else
                $g(
                  d,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Gg(
                d,
                o,
                e.memoizedProps
              );
          else
            _ !== o ? (_ === null ? i.stateNode !== null && (i = i.stateNode, i.parentNode.removeChild(i)) : _.count--, o === null ? $g(
              d,
              e.type,
              e.stateNode
            ) : Gg(
              d,
              o,
              e.memoizedProps
            )) : o === null && e.stateNode !== null && ad(
              e,
              e.memoizedProps,
              i.memoizedProps
            );
        }
        break;
      case 27:
        cn(t, e), dn(e), o & 512 && (vt || i === null || Qn(i, i.return)), i !== null && o & 4 && ad(
          e,
          e.memoizedProps,
          i.memoizedProps
        );
        break;
      case 5:
        if (cn(t, e), dn(e), o & 512 && (vt || i === null || Qn(i, i.return)), e.flags & 32) {
          d = e.stateNode;
          try {
            Xa(d, "");
          } catch (ee) {
            tt(e, e.return, ee);
          }
        }
        o & 4 && e.stateNode != null && (d = e.memoizedProps, ad(
          e,
          d,
          i !== null ? i.memoizedProps : d
        )), o & 1024 && (od = !0);
        break;
      case 6:
        if (cn(t, e), dn(e), o & 4) {
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
        if (pu = null, d = Ln, Ln = fu(t.containerInfo), cn(t, e), Ln = d, dn(e), o & 4 && i !== null && i.memoizedState.isDehydrated)
          try {
            Ds(t.containerInfo);
          } catch (ee) {
            tt(e, e.return, ee);
          }
        od && (od = !1, Jm(e));
        break;
      case 4:
        o = Ln, Ln = fu(
          e.stateNode.containerInfo
        ), cn(t, e), dn(e), Ln = o;
        break;
      case 12:
        cn(t, e), dn(e);
        break;
      case 13:
        cn(t, e), dn(e), e.child.flags & 8192 && e.memoizedState !== null != (i !== null && i.memoizedState !== null) && (pd = Fe()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, ud(e, o)));
        break;
      case 22:
        d = e.memoizedState !== null;
        var H = i !== null && i.memoizedState !== null, Q = gr, se = vt;
        if (gr = Q || d, vt = se || H, cn(t, e), vt = se, gr = Q, dn(e), o & 8192)
          e: for (t = e.stateNode, t._visibility = d ? t._visibility & -2 : t._visibility | 1, d && (i === null || H || gr || vt || ba(e)), i = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (i === null) {
                H = i = t;
                try {
                  if (_ = H.stateNode, d)
                    N = _.style, typeof N.setProperty == "function" ? N.setProperty("display", "none", "important") : N.display = "none";
                  else {
                    D = H.stateNode;
                    var le = H.memoizedProps.style, J = le != null && le.hasOwnProperty("display") ? le.display : null;
                    D.style.display = J == null || typeof J == "boolean" ? "" : ("" + J).trim();
                  }
                } catch (ee) {
                  tt(H, H.return, ee);
                }
              }
            } else if (t.tag === 6) {
              if (i === null) {
                H = t;
                try {
                  H.stateNode.nodeValue = d ? "" : H.memoizedProps;
                } catch (ee) {
                  tt(H, H.return, ee);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              i === t && (i = null), t = t.return;
            }
            i === t && (i = null), t.sibling.return = t.return, t = t.sibling;
          }
        o & 4 && (o = e.updateQueue, o !== null && (i = o.retryQueue, i !== null && (o.retryQueue = null, ud(e, i))));
        break;
      case 19:
        cn(t, e), dn(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, ud(e, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        cn(t, e), dn(e);
    }
  }
  function dn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var i, o = e.return; o !== null; ) {
          if (Gm(o)) {
            i = o;
            break;
          }
          o = o.return;
        }
        if (i == null) throw Error(a(160));
        switch (i.tag) {
          case 27:
            var d = i.stateNode, _ = id(e);
            Wo(e, _, d);
            break;
          case 5:
            var N = i.stateNode;
            i.flags & 32 && (Xa(N, ""), i.flags &= -33);
            var D = id(e);
            Wo(e, D, N);
            break;
          case 3:
          case 4:
            var H = i.stateNode.containerInfo, Q = id(e);
            sd(
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
    t & 4096 && (e.flags &= -4097);
  }
  function Jm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Jm(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Lr(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Ym(e, t.alternate, t), t = t.sibling;
  }
  function ba(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          zr(4, t, t.return), ba(t);
          break;
        case 1:
          Qn(t, t.return);
          var i = t.stateNode;
          typeof i.componentWillUnmount == "function" && qm(
            t,
            t.return,
            i
          ), ba(t);
          break;
        case 27:
          As(t.stateNode);
        case 26:
        case 5:
          Qn(t, t.return), ba(t);
          break;
        case 22:
          t.memoizedState === null && ba(t);
          break;
        case 30:
          ba(t);
          break;
        default:
          ba(t);
      }
      e = e.sibling;
    }
  }
  function Pr(e, t, i) {
    for (i = i && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var o = t.alternate, d = e, _ = t, N = _.flags;
      switch (_.tag) {
        case 0:
        case 11:
        case 15:
          Pr(
            d,
            _,
            i
          ), gs(4, _);
          break;
        case 1:
          if (Pr(
            d,
            _,
            i
          ), o = _, d = o.stateNode, typeof d.componentDidMount == "function")
            try {
              d.componentDidMount();
            } catch (Q) {
              tt(o, o.return, Q);
            }
          if (o = _, d = o.updateQueue, d !== null) {
            var D = o.stateNode;
            try {
              var H = d.shared.hiddenCallbacks;
              if (H !== null)
                for (d.shared.hiddenCallbacks = null, d = 0; d < H.length; d++)
                  xp(H[d], D);
            } catch (Q) {
              tt(o, o.return, Q);
            }
          }
          i && N & 64 && Hm(_), vs(_, _.return);
          break;
        case 27:
          Vm(_);
        case 26:
        case 5:
          Pr(
            d,
            _,
            i
          ), i && o === null && N & 4 && Zm(_), vs(_, _.return);
          break;
        case 12:
          Pr(
            d,
            _,
            i
          );
          break;
        case 13:
          Pr(
            d,
            _,
            i
          ), i && N & 4 && Qm(d, _);
          break;
        case 22:
          _.memoizedState === null && Pr(
            d,
            _,
            i
          ), vs(_, _.return);
          break;
        case 30:
          break;
        default:
          Pr(
            d,
            _,
            i
          );
      }
      t = t.sibling;
    }
  }
  function ld(e, t) {
    var i = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== i && (e != null && e.refCount++, i != null && ns(i));
  }
  function cd(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ns(e));
  }
  function Kn(e, t, i, o) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Wm(
          e,
          t,
          i,
          o
        ), t = t.sibling;
  }
  function Wm(e, t, i, o) {
    var d = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Kn(
          e,
          t,
          i,
          o
        ), d & 2048 && gs(9, t);
        break;
      case 1:
        Kn(
          e,
          t,
          i,
          o
        );
        break;
      case 3:
        Kn(
          e,
          t,
          i,
          o
        ), d & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ns(e)));
        break;
      case 12:
        if (d & 2048) {
          Kn(
            e,
            t,
            i,
            o
          ), e = t.stateNode;
          try {
            var _ = t.memoizedProps, N = _.id, D = _.onPostCommit;
            typeof D == "function" && D(
              N,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (H) {
            tt(t, t.return, H);
          }
        } else
          Kn(
            e,
            t,
            i,
            o
          );
        break;
      case 13:
        Kn(
          e,
          t,
          i,
          o
        );
        break;
      case 23:
        break;
      case 22:
        _ = t.stateNode, N = t.alternate, t.memoizedState !== null ? _._visibility & 2 ? Kn(
          e,
          t,
          i,
          o
        ) : ys(e, t) : _._visibility & 2 ? Kn(
          e,
          t,
          i,
          o
        ) : (_._visibility |= 2, hi(
          e,
          t,
          i,
          o,
          (t.subtreeFlags & 10256) !== 0
        )), d & 2048 && ld(N, t);
        break;
      case 24:
        Kn(
          e,
          t,
          i,
          o
        ), d & 2048 && cd(t.alternate, t);
        break;
      default:
        Kn(
          e,
          t,
          i,
          o
        );
    }
  }
  function hi(e, t, i, o, d) {
    for (d = d && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var _ = e, N = t, D = i, H = o, Q = N.flags;
      switch (N.tag) {
        case 0:
        case 11:
        case 15:
          hi(
            _,
            N,
            D,
            H,
            d
          ), gs(8, N);
          break;
        case 23:
          break;
        case 22:
          var se = N.stateNode;
          N.memoizedState !== null ? se._visibility & 2 ? hi(
            _,
            N,
            D,
            H,
            d
          ) : ys(
            _,
            N
          ) : (se._visibility |= 2, hi(
            _,
            N,
            D,
            H,
            d
          )), d && Q & 2048 && ld(
            N.alternate,
            N
          );
          break;
        case 24:
          hi(
            _,
            N,
            D,
            H,
            d
          ), d && Q & 2048 && cd(N.alternate, N);
          break;
        default:
          hi(
            _,
            N,
            D,
            H,
            d
          );
      }
      t = t.sibling;
    }
  }
  function ys(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var i = e, o = t, d = o.flags;
        switch (o.tag) {
          case 22:
            ys(i, o), d & 2048 && ld(
              o.alternate,
              o
            );
            break;
          case 24:
            ys(i, o), d & 2048 && cd(o.alternate, o);
            break;
          default:
            ys(i, o);
        }
        t = t.sibling;
      }
  }
  var _s = 8192;
  function pi(e) {
    if (e.subtreeFlags & _s)
      for (e = e.child; e !== null; )
        eg(e), e = e.sibling;
  }
  function eg(e) {
    switch (e.tag) {
      case 26:
        pi(e), e.flags & _s && e.memoizedState !== null && C1(
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
        var t = Ln;
        Ln = fu(e.stateNode.containerInfo), pi(e), Ln = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = _s, _s = 16777216, pi(e), _s = t) : pi(e));
        break;
      default:
        pi(e);
    }
  }
  function tg(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function bs(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var i = 0; i < t.length; i++) {
          var o = t[i];
          Nt = o, rg(
            o,
            e
          );
        }
      tg(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        ng(e), e = e.sibling;
  }
  function ng(e) {
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
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, eu(e)) : bs(e);
        break;
      default:
        bs(e);
    }
  }
  function eu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var i = 0; i < t.length; i++) {
          var o = t[i];
          Nt = o, rg(
            o,
            e
          );
        }
      tg(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          zr(8, t, t.return), eu(t);
          break;
        case 22:
          i = t.stateNode, i._visibility & 2 && (i._visibility &= -3, eu(t));
          break;
        default:
          eu(t);
      }
      e = e.sibling;
    }
  }
  function rg(e, t) {
    for (; Nt !== null; ) {
      var i = Nt;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          zr(8, i, t);
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
          var d = o.sibling, _ = o.return;
          if (Xm(o), o === i) {
            Nt = null;
            break e;
          }
          if (d !== null) {
            d.return = _, Nt = d;
            break e;
          }
          Nt = _;
        }
    }
  }
  var Ub = {
    getCacheForType: function(e) {
      var t = Ut(Et), i = t.data.get(e);
      return i === void 0 && (i = e(), t.data.set(e, i)), i;
    }
  }, Hb = typeof WeakMap == "function" ? WeakMap : Map, Ye = 0, nt = null, Ie = null, Ge = 0, Xe = 0, fn = null, Ir = !1, mi = !1, dd = !1, yr = 0, ht = 0, Br = 0, Sa = 0, fd = 0, Nn = 0, gi = 0, Ss = null, tn = null, hd = !1, pd = 0, tu = 1 / 0, nu = null, Ur = null, Dt = 0, Hr = null, vi = null, yi = 0, md = 0, gd = null, ag = null, ws = 0, vd = null;
  function hn() {
    if ((Ye & 2) !== 0 && Ge !== 0)
      return Ge & -Ge;
    if (j.T !== null) {
      var e = ii;
      return e !== 0 ? e : Cd();
    }
    return bh();
  }
  function ig() {
    Nn === 0 && (Nn = (Ge & 536870912) === 0 || $e ? Ua() : 536870912);
    var e = Tn.current;
    return e !== null && (e.flags |= 32), Nn;
  }
  function pn(e, t, i) {
    (e === nt && (Xe === 2 || Xe === 9) || e.cancelPendingCommit !== null) && (_i(e, 0), qr(
      e,
      Ge,
      Nn,
      !1
    )), Ui(e, i), ((Ye & 2) === 0 || e !== nt) && (e === nt && ((Ye & 2) === 0 && (Sa |= i), ht === 4 && qr(
      e,
      Ge,
      Nn,
      !1
    )), Jn(e));
  }
  function sg(e, t, i) {
    if ((Ye & 6) !== 0) throw Error(a(327));
    var o = !i && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Qt(e, t), d = o ? Gb(e, t) : bd(e, t, !0), _ = o;
    do {
      if (d === 0) {
        mi && !o && qr(e, t, 0, !1);
        break;
      } else {
        if (i = e.current.alternate, _ && !qb(i)) {
          d = bd(e, t, !1), _ = !1;
          continue;
        }
        if (d === 2) {
          if (_ = t, e.errorRecoveryDisabledLanes & _)
            var N = 0;
          else
            N = e.pendingLanes & -536870913, N = N !== 0 ? N : N & 536870912 ? 536870912 : 0;
          if (N !== 0) {
            t = N;
            e: {
              var D = e;
              d = Ss;
              var H = D.current.memoizedState.isDehydrated;
              if (H && (_i(D, N).flags |= 256), N = bd(
                D,
                N,
                !1
              ), N !== 2) {
                if (dd && !H) {
                  D.errorRecoveryDisabledLanes |= _, Sa |= _, d = 4;
                  break e;
                }
                _ = tn, tn = d, _ !== null && (tn === null ? tn = _ : tn.push.apply(
                  tn,
                  _
                ));
              }
              d = N;
            }
            if (_ = !1, d !== 2) continue;
          }
        }
        if (d === 1) {
          _i(e, 0), qr(e, t, 0, !0);
          break;
        }
        e: {
          switch (o = e, _ = d, _) {
            case 0:
            case 1:
              throw Error(a(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              qr(
                o,
                t,
                Nn,
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
          if ((t & 62914560) === t && (d = pd + 300 - Fe(), 10 < d)) {
            if (qr(
              o,
              t,
              Nn,
              !Ir
            ), Vt(o, 0, !0) !== 0) break e;
            o.timeoutHandle = zg(
              og.bind(
                null,
                o,
                i,
                tn,
                nu,
                hd,
                t,
                Nn,
                Sa,
                gi,
                Ir,
                _,
                2,
                -0,
                0
              ),
              d
            );
            break e;
          }
          og(
            o,
            i,
            tn,
            nu,
            hd,
            t,
            Nn,
            Sa,
            gi,
            Ir,
            _,
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
  function og(e, t, i, o, d, _, N, D, H, Q, se, le, J, ee) {
    if (e.timeoutHandle = -1, le = t.subtreeFlags, (le & 8192 || (le & 16785408) === 16785408) && (Ns = { stylesheets: null, count: 0, unsuspend: E1 }, eg(t), le = k1(), le !== null)) {
      e.cancelPendingCommit = le(
        pg.bind(
          null,
          e,
          t,
          _,
          i,
          o,
          d,
          N,
          D,
          H,
          se,
          1,
          J,
          ee
        )
      ), qr(e, _, N, !Q);
      return;
    }
    pg(
      e,
      t,
      _,
      i,
      o,
      d,
      N,
      D,
      H
    );
  }
  function qb(e) {
    for (var t = e; ; ) {
      var i = t.tag;
      if ((i === 0 || i === 11 || i === 15) && t.flags & 16384 && (i = t.updateQueue, i !== null && (i = i.stores, i !== null)))
        for (var o = 0; o < i.length; o++) {
          var d = i[o], _ = d.getSnapshot;
          d = d.value;
          try {
            if (!un(_(), d)) return !1;
          } catch {
            return !1;
          }
        }
      if (i = t.child, t.subtreeFlags & 16384 && i !== null)
        i.return = t, t = i;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function qr(e, t, i, o) {
    t &= ~fd, t &= ~Sa, e.suspendedLanes |= t, e.pingedLanes &= ~t, o && (e.warmLanes |= t), o = e.expirationTimes;
    for (var d = t; 0 < d; ) {
      var _ = 31 - Gt(d), N = 1 << _;
      o[_] = -1, d &= ~N;
    }
    i !== 0 && yh(e, i, t);
  }
  function ru() {
    return (Ye & 6) === 0 ? (Es(0), !1) : !0;
  }
  function yd() {
    if (Ie !== null) {
      if (Xe === 0)
        var e = Ie.return;
      else
        e = Ie, cr = ma = null, zc(e), di = null, hs = 0, e = Ie;
      for (; e !== null; )
        Um(e.alternate, e), e = e.return;
      Ie = null;
    }
  }
  function _i(e, t) {
    var i = e.timeoutHandle;
    i !== -1 && (e.timeoutHandle = -1, s1(i)), i = e.cancelPendingCommit, i !== null && (e.cancelPendingCommit = null, i()), yd(), nt = e, Ie = i = or(e.current, null), Ge = t, Xe = 0, fn = null, Ir = !1, mi = Qt(e, t), dd = !1, gi = Nn = fd = Sa = Br = ht = 0, tn = Ss = null, hd = !1, (t & 8) !== 0 && (t |= t & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= t; 0 < o; ) {
        var d = 31 - Gt(o), _ = 1 << d;
        t |= e[d], o &= ~_;
      }
    return yr = t, ko(), i;
  }
  function ug(e, t) {
    ze = null, j.H = Go, t === as || t === Do ? (t = kp(), Xe = 3) : t === wp ? (t = kp(), Xe = 4) : Xe = t === Am ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, fn = t, Ie === null && (ht = 1, Fo(
      e,
      Cn(t, e.current)
    ));
  }
  function lg() {
    var e = j.H;
    return j.H = Go, e === null ? Go : e;
  }
  function cg() {
    var e = j.A;
    return j.A = Ub, e;
  }
  function _d() {
    ht = 4, Ir || (Ge & 4194048) !== Ge && Tn.current !== null || (mi = !0), (Br & 134217727) === 0 && (Sa & 134217727) === 0 || nt === null || qr(
      nt,
      Ge,
      Nn,
      !1
    );
  }
  function bd(e, t, i) {
    var o = Ye;
    Ye |= 2;
    var d = lg(), _ = cg();
    (nt !== e || Ge !== t) && (nu = null, _i(e, t)), t = !1;
    var N = ht;
    e: do
      try {
        if (Xe !== 0 && Ie !== null) {
          var D = Ie, H = fn;
          switch (Xe) {
            case 8:
              yd(), N = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Tn.current === null && (t = !0);
              var Q = Xe;
              if (Xe = 0, fn = null, bi(e, D, H, Q), i && mi) {
                N = 0;
                break e;
              }
              break;
            default:
              Q = Xe, Xe = 0, fn = null, bi(e, D, H, Q);
          }
        }
        Zb(), N = ht;
        break;
      } catch (se) {
        ug(e, se);
      }
    while (!0);
    return t && e.shellSuspendCounter++, cr = ma = null, Ye = o, j.H = d, j.A = _, Ie === null && (nt = null, Ge = 0, ko()), N;
  }
  function Zb() {
    for (; Ie !== null; ) dg(Ie);
  }
  function Gb(e, t) {
    var i = Ye;
    Ye |= 2;
    var o = lg(), d = cg();
    nt !== e || Ge !== t ? (nu = null, tu = Fe() + 500, _i(e, t)) : mi = Qt(
      e,
      t
    );
    e: do
      try {
        if (Xe !== 0 && Ie !== null) {
          t = Ie;
          var _ = fn;
          t: switch (Xe) {
            case 1:
              Xe = 0, fn = null, bi(e, t, _, 1);
              break;
            case 2:
            case 9:
              if (Ep(_)) {
                Xe = 0, fn = null, fg(t);
                break;
              }
              t = function() {
                Xe !== 2 && Xe !== 9 || nt !== e || (Xe = 7), Jn(e);
              }, _.then(t, t);
              break e;
            case 3:
              Xe = 7;
              break e;
            case 4:
              Xe = 5;
              break e;
            case 7:
              Ep(_) ? (Xe = 0, fn = null, fg(t)) : (Xe = 0, fn = null, bi(e, t, _, 7));
              break;
            case 5:
              var N = null;
              switch (Ie.tag) {
                case 26:
                  N = Ie.memoizedState;
                case 5:
                case 27:
                  var D = Ie;
                  if (!N || Yg(N)) {
                    Xe = 0, fn = null;
                    var H = D.sibling;
                    if (H !== null) Ie = H;
                    else {
                      var Q = D.return;
                      Q !== null ? (Ie = Q, au(Q)) : Ie = null;
                    }
                    break t;
                  }
              }
              Xe = 0, fn = null, bi(e, t, _, 5);
              break;
            case 6:
              Xe = 0, fn = null, bi(e, t, _, 6);
              break;
            case 8:
              yd(), ht = 6;
              break e;
            default:
              throw Error(a(462));
          }
        }
        Vb();
        break;
      } catch (se) {
        ug(e, se);
      }
    while (!0);
    return cr = ma = null, j.H = o, j.A = d, Ye = i, Ie !== null ? 0 : (nt = null, Ge = 0, ko(), ht);
  }
  function Vb() {
    for (; Ie !== null && !Pe(); )
      dg(Ie);
  }
  function dg(e) {
    var t = Im(e.alternate, e, yr);
    e.memoizedProps = e.pendingProps, t === null ? au(e) : Ie = t;
  }
  function fg(e) {
    var t = e, i = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = jm(
          i,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Ge
        );
        break;
      case 11:
        t = jm(
          i,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Ge
        );
        break;
      case 5:
        zc(t);
      default:
        Um(i, t), t = Ie = hp(t, yr), t = Im(i, t, yr);
    }
    e.memoizedProps = e.pendingProps, t === null ? au(e) : Ie = t;
  }
  function bi(e, t, i, o) {
    cr = ma = null, zc(t), di = null, hs = 0;
    var d = t.return;
    try {
      if (Db(
        e,
        d,
        t,
        i,
        Ge
      )) {
        ht = 1, Fo(
          e,
          Cn(i, e.current)
        ), Ie = null;
        return;
      }
    } catch (_) {
      if (d !== null) throw Ie = d, _;
      ht = 1, Fo(
        e,
        Cn(i, e.current)
      ), Ie = null;
      return;
    }
    t.flags & 32768 ? ($e || o === 1 ? e = !0 : mi || (Ge & 536870912) !== 0 ? e = !1 : (Ir = e = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = Tn.current, o !== null && o.tag === 13 && (o.flags |= 16384))), hg(t, e)) : au(t);
  }
  function au(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        hg(
          t,
          Ir
        );
        return;
      }
      e = t.return;
      var i = Lb(
        t.alternate,
        t,
        yr
      );
      if (i !== null) {
        Ie = i;
        return;
      }
      if (t = t.sibling, t !== null) {
        Ie = t;
        return;
      }
      Ie = t = e;
    } while (t !== null);
    ht === 0 && (ht = 5);
  }
  function hg(e, t) {
    do {
      var i = Pb(e.alternate, e);
      if (i !== null) {
        i.flags &= 32767, Ie = i;
        return;
      }
      if (i = e.return, i !== null && (i.flags |= 32768, i.subtreeFlags = 0, i.deletions = null), !t && (e = e.sibling, e !== null)) {
        Ie = e;
        return;
      }
      Ie = e = i;
    } while (e !== null);
    ht = 6, Ie = null;
  }
  function pg(e, t, i, o, d, _, N, D, H) {
    e.cancelPendingCommit = null;
    do
      iu();
    while (Dt !== 0);
    if ((Ye & 6) !== 0) throw Error(a(327));
    if (t !== null) {
      if (t === e.current) throw Error(a(177));
      if (_ = t.lanes | t.childLanes, _ |= cc, E_(
        e,
        i,
        _,
        N,
        D,
        H
      ), e === nt && (Ie = nt = null, Ge = 0), vi = t, Hr = e, yi = i, md = _, gd = d, ag = o, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Fb(_e, function() {
        return _g(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), o = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || o) {
        o = j.T, j.T = null, d = B.p, B.p = 2, N = Ye, Ye |= 4;
        try {
          Ib(e, t, i);
        } finally {
          Ye = N, B.p = d, j.T = o;
        }
      }
      Dt = 1, mg(), gg(), vg();
    }
  }
  function mg() {
    if (Dt === 1) {
      Dt = 0;
      var e = Hr, t = vi, i = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || i) {
        i = j.T, j.T = null;
        var o = B.p;
        B.p = 2;
        var d = Ye;
        Ye |= 4;
        try {
          Km(t, e);
          var _ = jd, N = rp(e.containerInfo), D = _.focusedElem, H = _.selectionRange;
          if (N !== D && D && D.ownerDocument && np(
            D.ownerDocument.documentElement,
            D
          )) {
            if (H !== null && ic(D)) {
              var Q = H.start, se = H.end;
              if (se === void 0 && (se = Q), "selectionStart" in D)
                D.selectionStart = Q, D.selectionEnd = Math.min(
                  se,
                  D.value.length
                );
              else {
                var le = D.ownerDocument || document, J = le && le.defaultView || window;
                if (J.getSelection) {
                  var ee = J.getSelection(), Ae = D.textContent.length, Ce = Math.min(H.start, Ae), Je = H.end === void 0 ? Ce : Math.min(H.end, Ae);
                  !ee.extend && Ce > Je && (N = Je, Je = Ce, Ce = N);
                  var V = tp(
                    D,
                    Ce
                  ), Z = tp(
                    D,
                    Je
                  );
                  if (V && Z && (ee.rangeCount !== 1 || ee.anchorNode !== V.node || ee.anchorOffset !== V.offset || ee.focusNode !== Z.node || ee.focusOffset !== Z.offset)) {
                    var F = le.createRange();
                    F.setStart(V.node, V.offset), ee.removeAllRanges(), Ce > Je ? (ee.addRange(F), ee.extend(Z.node, Z.offset)) : (F.setEnd(Z.node, Z.offset), ee.addRange(F));
                  }
                }
              }
            }
            for (le = [], ee = D; ee = ee.parentNode; )
              ee.nodeType === 1 && le.push({
                element: ee,
                left: ee.scrollLeft,
                top: ee.scrollTop
              });
            for (typeof D.focus == "function" && D.focus(), D = 0; D < le.length; D++) {
              var oe = le[D];
              oe.element.scrollLeft = oe.left, oe.element.scrollTop = oe.top;
            }
          }
          vu = !!Md, jd = Md = null;
        } finally {
          Ye = d, B.p = o, j.T = i;
        }
      }
      e.current = t, Dt = 2;
    }
  }
  function gg() {
    if (Dt === 2) {
      Dt = 0;
      var e = Hr, t = vi, i = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || i) {
        i = j.T, j.T = null;
        var o = B.p;
        B.p = 2;
        var d = Ye;
        Ye |= 4;
        try {
          Ym(e, t.alternate, t);
        } finally {
          Ye = d, B.p = o, j.T = i;
        }
      }
      Dt = 3;
    }
  }
  function vg() {
    if (Dt === 4 || Dt === 3) {
      Dt = 0, We();
      var e = Hr, t = vi, i = yi, o = ag;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Dt = 5 : (Dt = 0, vi = Hr = null, yg(e, e.pendingLanes));
      var d = e.pendingLanes;
      if (d === 0 && (Ur = null), Il(i), t = t.stateNode, mt && typeof mt.onCommitFiberRoot == "function")
        try {
          mt.onCommitFiberRoot(
            Dn,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (o !== null) {
        t = j.T, d = B.p, B.p = 2, j.T = null;
        try {
          for (var _ = e.onRecoverableError, N = 0; N < o.length; N++) {
            var D = o[N];
            _(D.value, {
              componentStack: D.stack
            });
          }
        } finally {
          j.T = t, B.p = d;
        }
      }
      (yi & 3) !== 0 && iu(), Jn(e), d = e.pendingLanes, (i & 4194090) !== 0 && (d & 42) !== 0 ? e === vd ? ws++ : (ws = 0, vd = e) : ws = 0, Es(0);
    }
  }
  function yg(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ns(t)));
  }
  function iu(e) {
    return mg(), gg(), vg(), _g();
  }
  function _g() {
    if (Dt !== 5) return !1;
    var e = Hr, t = md;
    md = 0;
    var i = Il(yi), o = j.T, d = B.p;
    try {
      B.p = 32 > i ? 32 : i, j.T = null, i = gd, gd = null;
      var _ = Hr, N = yi;
      if (Dt = 0, vi = Hr = null, yi = 0, (Ye & 6) !== 0) throw Error(a(331));
      var D = Ye;
      if (Ye |= 4, ng(_.current), Wm(
        _,
        _.current,
        N,
        i
      ), Ye = D, Es(0, !1), mt && typeof mt.onPostCommitFiberRoot == "function")
        try {
          mt.onPostCommitFiberRoot(Dn, _);
        } catch {
        }
      return !0;
    } finally {
      B.p = d, j.T = o, yg(e, t);
    }
  }
  function bg(e, t, i) {
    t = Cn(i, t), t = Fc(e.stateNode, t, 2), e = Mr(e, t, 2), e !== null && (Ui(e, 2), Jn(e));
  }
  function tt(e, t, i) {
    if (e.tag === 3)
      bg(e, e, i);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          bg(
            t,
            e,
            i
          );
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ur === null || !Ur.has(o))) {
            e = Cn(i, e), i = Cm(2), o = Mr(t, i, 2), o !== null && (km(
              i,
              o,
              t,
              e
            ), Ui(o, 2), Jn(o));
            break;
          }
        }
        t = t.return;
      }
  }
  function Sd(e, t, i) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new Hb();
      var d = /* @__PURE__ */ new Set();
      o.set(t, d);
    } else
      d = o.get(t), d === void 0 && (d = /* @__PURE__ */ new Set(), o.set(t, d));
    d.has(i) || (dd = !0, d.add(i), e = $b.bind(null, e, t, i), t.then(e, e));
  }
  function $b(e, t, i) {
    var o = e.pingCache;
    o !== null && o.delete(t), e.pingedLanes |= e.suspendedLanes & i, e.warmLanes &= ~i, nt === e && (Ge & i) === i && (ht === 4 || ht === 3 && (Ge & 62914560) === Ge && 300 > Fe() - pd ? (Ye & 2) === 0 && _i(e, 0) : fd |= i, gi === Ge && (gi = 0)), Jn(e);
  }
  function Sg(e, t) {
    t === 0 && (t = vh()), e = ti(e, t), e !== null && (Ui(e, t), Jn(e));
  }
  function Yb(e) {
    var t = e.memoizedState, i = 0;
    t !== null && (i = t.retryLane), Sg(e, i);
  }
  function Xb(e, t) {
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
    o !== null && o.delete(t), Sg(e, i);
  }
  function Fb(e, t) {
    return fe(e, t);
  }
  var su = null, Si = null, wd = !1, ou = !1, Ed = !1, wa = 0;
  function Jn(e) {
    e !== Si && e.next === null && (Si === null ? su = Si = e : Si = Si.next = e), ou = !0, wd || (wd = !0, Kb());
  }
  function Es(e, t) {
    if (!Ed && ou) {
      Ed = !0;
      do
        for (var i = !1, o = su; o !== null; ) {
          if (e !== 0) {
            var d = o.pendingLanes;
            if (d === 0) var _ = 0;
            else {
              var N = o.suspendedLanes, D = o.pingedLanes;
              _ = (1 << 31 - Gt(42 | e) + 1) - 1, _ &= d & ~(N & ~D), _ = _ & 201326741 ? _ & 201326741 | 1 : _ ? _ | 2 : 0;
            }
            _ !== 0 && (i = !0, kg(o, _));
          } else
            _ = Ge, _ = Vt(
              o,
              o === nt ? _ : 0,
              o.cancelPendingCommit !== null || o.timeoutHandle !== -1
            ), (_ & 3) === 0 || Qt(o, _) || (i = !0, kg(o, _));
          o = o.next;
        }
      while (i);
      Ed = !1;
    }
  }
  function Qb() {
    wg();
  }
  function wg() {
    ou = wd = !1;
    var e = 0;
    wa !== 0 && (i1() && (e = wa), wa = 0);
    for (var t = Fe(), i = null, o = su; o !== null; ) {
      var d = o.next, _ = Eg(o, t);
      _ === 0 ? (o.next = null, i === null ? su = d : i.next = d, d === null && (Si = i)) : (i = o, (e !== 0 || (_ & 3) !== 0) && (ou = !0)), o = d;
    }
    Es(e);
  }
  function Eg(e, t) {
    for (var i = e.suspendedLanes, o = e.pingedLanes, d = e.expirationTimes, _ = e.pendingLanes & -62914561; 0 < _; ) {
      var N = 31 - Gt(_), D = 1 << N, H = d[N];
      H === -1 ? ((D & i) === 0 || (D & o) !== 0) && (d[N] = ho(D, t)) : H <= t && (e.expiredLanes |= D), _ &= ~D;
    }
    if (t = nt, i = Ge, i = Vt(
      e,
      e === t ? i : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o = e.callbackNode, i === 0 || e === t && (Xe === 2 || Xe === 9) || e.cancelPendingCommit !== null)
      return o !== null && o !== null && we(o), e.callbackNode = null, e.callbackPriority = 0;
    if ((i & 3) === 0 || Qt(e, i)) {
      if (t = i & -i, t === e.callbackPriority) return t;
      switch (o !== null && we(o), Il(i)) {
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
      return o = Cg.bind(null, e), i = fe(i, o), e.callbackPriority = t, e.callbackNode = i, t;
    }
    return o !== null && o !== null && we(o), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Cg(e, t) {
    if (Dt !== 0 && Dt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var i = e.callbackNode;
    if (iu() && e.callbackNode !== i)
      return null;
    var o = Ge;
    return o = Vt(
      e,
      e === nt ? o : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o === 0 ? null : (sg(e, o, t), Eg(e, Fe()), e.callbackNode != null && e.callbackNode === i ? Cg.bind(null, e) : null);
  }
  function kg(e, t) {
    if (iu()) return null;
    sg(e, t, !0);
  }
  function Kb() {
    o1(function() {
      (Ye & 6) !== 0 ? fe(
        dt,
        Qb
      ) : wg();
    });
  }
  function Cd() {
    return wa === 0 && (wa = Ua()), wa;
  }
  function Ag(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : yo("" + e);
  }
  function xg(e, t) {
    var i = t.ownerDocument.createElement("input");
    return i.name = t.name, i.value = t.value, e.id && i.setAttribute("form", e.id), t.parentNode.insertBefore(i, t), e = new FormData(e), i.parentNode.removeChild(i), e;
  }
  function Jb(e, t, i, o, d) {
    if (t === "submit" && i && i.stateNode === d) {
      var _ = Ag(
        (d[Kt] || null).action
      ), N = o.submitter;
      N && (t = (t = N[Kt] || null) ? Ag(t.formAction) : N.getAttribute("formAction"), t !== null && (_ = t, N = null));
      var D = new wo(
        "action",
        "action",
        null,
        o,
        d
      );
      e.push({
        event: D,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (o.defaultPrevented) {
                if (wa !== 0) {
                  var H = N ? xg(d, N) : new FormData(d);
                  Gc(
                    i,
                    {
                      pending: !0,
                      data: H,
                      method: d.method,
                      action: _
                    },
                    null,
                    H
                  );
                }
              } else
                typeof _ == "function" && (D.preventDefault(), H = N ? xg(d, N) : new FormData(d), Gc(
                  i,
                  {
                    pending: !0,
                    data: H,
                    method: d.method,
                    action: _
                  },
                  _,
                  H
                ));
            },
            currentTarget: d
          }
        ]
      });
    }
  }
  for (var kd = 0; kd < lc.length; kd++) {
    var Ad = lc[kd], Wb = Ad.toLowerCase(), e1 = Ad[0].toUpperCase() + Ad.slice(1);
    zn(
      Wb,
      "on" + e1
    );
  }
  zn(sp, "onAnimationEnd"), zn(op, "onAnimationIteration"), zn(up, "onAnimationStart"), zn("dblclick", "onDoubleClick"), zn("focusin", "onFocus"), zn("focusout", "onBlur"), zn(vb, "onTransitionRun"), zn(yb, "onTransitionStart"), zn(_b, "onTransitionCancel"), zn(lp, "onTransitionEnd"), Va("onMouseEnter", ["mouseout", "mouseover"]), Va("onMouseLeave", ["mouseout", "mouseover"]), Va("onPointerEnter", ["pointerout", "pointerover"]), Va("onPointerLeave", ["pointerout", "pointerover"]), sa(
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
  ), t1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cs)
  );
  function Tg(e, t) {
    t = (t & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var o = e[i], d = o.event;
      o = o.listeners;
      e: {
        var _ = void 0;
        if (t)
          for (var N = o.length - 1; 0 <= N; N--) {
            var D = o[N], H = D.instance, Q = D.currentTarget;
            if (D = D.listener, H !== _ && d.isPropagationStopped())
              break e;
            _ = D, d.currentTarget = Q;
            try {
              _(d);
            } catch (se) {
              Xo(se);
            }
            d.currentTarget = null, _ = H;
          }
        else
          for (N = 0; N < o.length; N++) {
            if (D = o[N], H = D.instance, Q = D.currentTarget, D = D.listener, H !== _ && d.isPropagationStopped())
              break e;
            _ = D, d.currentTarget = Q;
            try {
              _(d);
            } catch (se) {
              Xo(se);
            }
            d.currentTarget = null, _ = H;
          }
      }
    }
  }
  function Be(e, t) {
    var i = t[Bl];
    i === void 0 && (i = t[Bl] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    i.has(o) || (Ng(t, e, 2, !1), i.add(o));
  }
  function xd(e, t, i) {
    var o = 0;
    t && (o |= 4), Ng(
      i,
      e,
      o,
      t
    );
  }
  var uu = "_reactListening" + Math.random().toString(36).slice(2);
  function Td(e) {
    if (!e[uu]) {
      e[uu] = !0, wh.forEach(function(i) {
        i !== "selectionchange" && (t1.has(i) || xd(i, !1, e), xd(i, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[uu] || (t[uu] = !0, xd("selectionchange", !1, t));
    }
  }
  function Ng(e, t, i, o) {
    switch (Wg(t)) {
      case 2:
        var d = T1;
        break;
      case 8:
        d = N1;
        break;
      default:
        d = qd;
    }
    i = d.bind(
      null,
      t,
      i,
      e
    ), d = void 0, !Ql || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (d = !0), o ? d !== void 0 ? e.addEventListener(t, i, {
      capture: !0,
      passive: d
    }) : e.addEventListener(t, i, !0) : d !== void 0 ? e.addEventListener(t, i, {
      passive: d
    }) : e.addEventListener(t, i, !1);
  }
  function Nd(e, t, i, o, d) {
    var _ = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
      e: for (; ; ) {
        if (o === null) return;
        var N = o.tag;
        if (N === 3 || N === 4) {
          var D = o.stateNode.containerInfo;
          if (D === d) break;
          if (N === 4)
            for (N = o.return; N !== null; ) {
              var H = N.tag;
              if ((H === 3 || H === 4) && N.stateNode.containerInfo === d)
                return;
              N = N.return;
            }
          for (; D !== null; ) {
            if (N = qa(D), N === null) return;
            if (H = N.tag, H === 5 || H === 6 || H === 26 || H === 27) {
              o = _ = N;
              continue e;
            }
            D = D.parentNode;
          }
        }
        o = o.return;
      }
    Lh(function() {
      var Q = _, se = Xl(i), le = [];
      e: {
        var J = cp.get(e);
        if (J !== void 0) {
          var ee = wo, Ae = e;
          switch (e) {
            case "keypress":
              if (bo(i) === 0) break e;
            case "keydown":
            case "keyup":
              ee = F_;
              break;
            case "focusin":
              Ae = "focus", ee = ec;
              break;
            case "focusout":
              Ae = "blur", ee = ec;
              break;
            case "beforeblur":
            case "afterblur":
              ee = ec;
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
              ee = Bh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ee = P_;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ee = J_;
              break;
            case sp:
            case op:
            case up:
              ee = U_;
              break;
            case lp:
              ee = eb;
              break;
            case "scroll":
            case "scrollend":
              ee = z_;
              break;
            case "wheel":
              ee = nb;
              break;
            case "copy":
            case "cut":
            case "paste":
              ee = q_;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ee = Hh;
              break;
            case "toggle":
            case "beforetoggle":
              ee = ab;
          }
          var Ce = (t & 4) !== 0, Je = !Ce && (e === "scroll" || e === "scrollend"), V = Ce ? J !== null ? J + "Capture" : null : J;
          Ce = [];
          for (var Z = Q, F; Z !== null; ) {
            var oe = Z;
            if (F = oe.stateNode, oe = oe.tag, oe !== 5 && oe !== 26 && oe !== 27 || F === null || V === null || (oe = Zi(Z, V), oe != null && Ce.push(
              ks(Z, oe, F)
            )), Je) break;
            Z = Z.return;
          }
          0 < Ce.length && (J = new ee(
            J,
            Ae,
            null,
            i,
            se
          ), le.push({ event: J, listeners: Ce }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (J = e === "mouseover" || e === "pointerover", ee = e === "mouseout" || e === "pointerout", J && i !== Yl && (Ae = i.relatedTarget || i.fromElement) && (qa(Ae) || Ae[Ha]))
            break e;
          if ((ee || J) && (J = se.window === se ? se : (J = se.ownerDocument) ? J.defaultView || J.parentWindow : window, ee ? (Ae = i.relatedTarget || i.toElement, ee = Q, Ae = Ae ? qa(Ae) : null, Ae !== null && (Je = c(Ae), Ce = Ae.tag, Ae !== Je || Ce !== 5 && Ce !== 27 && Ce !== 6) && (Ae = null)) : (ee = null, Ae = Q), ee !== Ae)) {
            if (Ce = Bh, oe = "onMouseLeave", V = "onMouseEnter", Z = "mouse", (e === "pointerout" || e === "pointerover") && (Ce = Hh, oe = "onPointerLeave", V = "onPointerEnter", Z = "pointer"), Je = ee == null ? J : qi(ee), F = Ae == null ? J : qi(Ae), J = new Ce(
              oe,
              Z + "leave",
              ee,
              i,
              se
            ), J.target = Je, J.relatedTarget = F, oe = null, qa(se) === Q && (Ce = new Ce(
              V,
              Z + "enter",
              Ae,
              i,
              se
            ), Ce.target = F, Ce.relatedTarget = Je, oe = Ce), Je = oe, ee && Ae)
              t: {
                for (Ce = ee, V = Ae, Z = 0, F = Ce; F; F = wi(F))
                  Z++;
                for (F = 0, oe = V; oe; oe = wi(oe))
                  F++;
                for (; 0 < Z - F; )
                  Ce = wi(Ce), Z--;
                for (; 0 < F - Z; )
                  V = wi(V), F--;
                for (; Z--; ) {
                  if (Ce === V || V !== null && Ce === V.alternate)
                    break t;
                  Ce = wi(Ce), V = wi(V);
                }
                Ce = null;
              }
            else Ce = null;
            ee !== null && Og(
              le,
              J,
              ee,
              Ce,
              !1
            ), Ae !== null && Je !== null && Og(
              le,
              Je,
              Ae,
              Ce,
              !0
            );
          }
        }
        e: {
          if (J = Q ? qi(Q) : window, ee = J.nodeName && J.nodeName.toLowerCase(), ee === "select" || ee === "input" && J.type === "file")
            var ve = Fh;
          else if (Yh(J))
            if (Qh)
              ve = pb;
            else {
              ve = fb;
              var Le = db;
            }
          else
            ee = J.nodeName, !ee || ee.toLowerCase() !== "input" || J.type !== "checkbox" && J.type !== "radio" ? Q && $l(Q.elementType) && (ve = Fh) : ve = hb;
          if (ve && (ve = ve(e, Q))) {
            Xh(
              le,
              ve,
              i,
              se
            );
            break e;
          }
          Le && Le(e, J, Q), e === "focusout" && Q && J.type === "number" && Q.memoizedProps.value != null && Vl(J, "number", J.value);
        }
        switch (Le = Q ? qi(Q) : window, e) {
          case "focusin":
            (Yh(Le) || Le.contentEditable === "true") && (Ja = Le, sc = Q, Ki = null);
            break;
          case "focusout":
            Ki = sc = Ja = null;
            break;
          case "mousedown":
            oc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            oc = !1, ap(le, i, se);
            break;
          case "selectionchange":
            if (gb) break;
          case "keydown":
          case "keyup":
            ap(le, i, se);
        }
        var be;
        if (nc)
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
          Ka ? Vh(e, i) && (ke = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (ke = "onCompositionStart");
        ke && (qh && i.locale !== "ko" && (Ka || ke !== "onCompositionStart" ? ke === "onCompositionEnd" && Ka && (be = Ph()) : (xr = se, Kl = "value" in xr ? xr.value : xr.textContent, Ka = !0)), Le = lu(Q, ke), 0 < Le.length && (ke = new Uh(
          ke,
          e,
          null,
          i,
          se
        ), le.push({ event: ke, listeners: Le }), be ? ke.data = be : (be = $h(i), be !== null && (ke.data = be)))), (be = sb ? ob(e, i) : ub(e, i)) && (ke = lu(Q, "onBeforeInput"), 0 < ke.length && (Le = new Uh(
          "onBeforeInput",
          "beforeinput",
          null,
          i,
          se
        ), le.push({
          event: Le,
          listeners: ke
        }), Le.data = be)), Jb(
          le,
          e,
          Q,
          i,
          se
        );
      }
      Tg(le, t);
    });
  }
  function ks(e, t, i) {
    return {
      instance: e,
      listener: t,
      currentTarget: i
    };
  }
  function lu(e, t) {
    for (var i = t + "Capture", o = []; e !== null; ) {
      var d = e, _ = d.stateNode;
      if (d = d.tag, d !== 5 && d !== 26 && d !== 27 || _ === null || (d = Zi(e, i), d != null && o.unshift(
        ks(e, d, _)
      ), d = Zi(e, t), d != null && o.push(
        ks(e, d, _)
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
  function Og(e, t, i, o, d) {
    for (var _ = t._reactName, N = []; i !== null && i !== o; ) {
      var D = i, H = D.alternate, Q = D.stateNode;
      if (D = D.tag, H !== null && H === o) break;
      D !== 5 && D !== 26 && D !== 27 || Q === null || (H = Q, d ? (Q = Zi(i, _), Q != null && N.unshift(
        ks(i, Q, H)
      )) : d || (Q = Zi(i, _), Q != null && N.push(
        ks(i, Q, H)
      ))), i = i.return;
    }
    N.length !== 0 && e.push({ event: t, listeners: N });
  }
  var n1 = /\r\n?/g, r1 = /\u0000|\uFFFD/g;
  function Mg(e) {
    return (typeof e == "string" ? e : "" + e).replace(n1, `
`).replace(r1, "");
  }
  function jg(e, t) {
    return t = Mg(t), Mg(e) === t;
  }
  function cu() {
  }
  function Ke(e, t, i, o, d, _) {
    switch (i) {
      case "children":
        typeof o == "string" ? t === "body" || t === "textarea" && o === "" || Xa(e, o) : (typeof o == "number" || typeof o == "bigint") && t !== "body" && Xa(e, "" + o);
        break;
      case "className":
        mo(e, "class", o);
        break;
      case "tabIndex":
        mo(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        mo(e, i, o);
        break;
      case "style":
        Dh(e, o, _);
        break;
      case "data":
        if (t !== "object") {
          mo(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (t !== "a" || i !== "href")) {
          e.removeAttribute(i);
          break;
        }
        if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(i);
          break;
        }
        o = yo("" + o), e.setAttribute(i, o);
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
          typeof _ == "function" && (i === "formAction" ? (t !== "input" && Ke(e, t, "name", d.name, d, null), Ke(
            e,
            t,
            "formEncType",
            d.formEncType,
            d,
            null
          ), Ke(
            e,
            t,
            "formMethod",
            d.formMethod,
            d,
            null
          ), Ke(
            e,
            t,
            "formTarget",
            d.formTarget,
            d,
            null
          )) : (Ke(e, t, "encType", d.encType, d, null), Ke(e, t, "method", d.method, d, null), Ke(e, t, "target", d.target, d, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(i);
          break;
        }
        o = yo("" + o), e.setAttribute(i, o);
        break;
      case "onClick":
        o != null && (e.onclick = cu);
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
        i = yo("" + o), e.setAttributeNS(
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
        Be("beforetoggle", e), Be("toggle", e), po(e, "popover", o);
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
        po(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (i = R_.get(i) || i, po(e, i, o));
    }
  }
  function Od(e, t, i, o, d, _) {
    switch (i) {
      case "style":
        Dh(e, o, _);
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
        o != null && (e.onclick = cu);
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
        if (!Eh.hasOwnProperty(i))
          e: {
            if (i[0] === "o" && i[1] === "n" && (d = i.endsWith("Capture"), t = i.slice(2, d ? i.length - 7 : void 0), _ = e[Kt] || null, _ = _ != null ? _[i] : null, typeof _ == "function" && e.removeEventListener(t, _, d), typeof o == "function")) {
              typeof _ != "function" && _ !== null && (i in e ? e[i] = null : e.hasAttribute(i) && e.removeAttribute(i)), e.addEventListener(t, o, d);
              break e;
            }
            i in e ? e[i] = o : o === !0 ? e.setAttribute(i, "") : po(e, i, o);
          }
    }
  }
  function zt(e, t, i) {
    switch (t) {
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
        var o = !1, d = !1, _;
        for (_ in i)
          if (i.hasOwnProperty(_)) {
            var N = i[_];
            if (N != null)
              switch (_) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  d = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(a(137, t));
                default:
                  Ke(e, t, _, N, i, null);
              }
          }
        d && Ke(e, t, "srcSet", i.srcSet, i, null), o && Ke(e, t, "src", i.src, i, null);
        return;
      case "input":
        Be("invalid", e);
        var D = _ = N = d = null, H = null, Q = null;
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
                  _ = se;
                  break;
                case "defaultValue":
                  D = se;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (se != null)
                    throw Error(a(137, t));
                  break;
                default:
                  Ke(e, t, o, se, i, null);
              }
          }
        Oh(
          e,
          _,
          D,
          H,
          Q,
          N,
          d,
          !1
        ), go(e);
        return;
      case "select":
        Be("invalid", e), o = N = _ = null;
        for (d in i)
          if (i.hasOwnProperty(d) && (D = i[d], D != null))
            switch (d) {
              case "value":
                _ = D;
                break;
              case "defaultValue":
                N = D;
                break;
              case "multiple":
                o = D;
              default:
                Ke(e, t, d, D, i, null);
            }
        t = _, i = N, e.multiple = !!o, t != null ? Ya(e, !!o, t, !1) : i != null && Ya(e, !!o, i, !0);
        return;
      case "textarea":
        Be("invalid", e), _ = d = o = null;
        for (N in i)
          if (i.hasOwnProperty(N) && (D = i[N], D != null))
            switch (N) {
              case "value":
                o = D;
                break;
              case "defaultValue":
                d = D;
                break;
              case "children":
                _ = D;
                break;
              case "dangerouslySetInnerHTML":
                if (D != null) throw Error(a(91));
                break;
              default:
                Ke(e, t, N, D, i, null);
            }
        jh(e, o, d, _), go(e);
        return;
      case "option":
        for (H in i)
          if (i.hasOwnProperty(H) && (o = i[H], o != null))
            switch (H) {
              case "selected":
                e.selected = o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                Ke(e, t, H, o, i, null);
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
                throw Error(a(137, t));
              default:
                Ke(e, t, Q, o, i, null);
            }
        return;
      default:
        if ($l(t)) {
          for (se in i)
            i.hasOwnProperty(se) && (o = i[se], o !== void 0 && Od(
              e,
              t,
              se,
              o,
              i,
              void 0
            ));
          return;
        }
    }
    for (D in i)
      i.hasOwnProperty(D) && (o = i[D], o != null && Ke(e, t, D, o, i, null));
  }
  function a1(e, t, i, o) {
    switch (t) {
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
        var d = null, _ = null, N = null, D = null, H = null, Q = null, se = null;
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
                o.hasOwnProperty(ee) || Ke(e, t, ee, null, o, le);
            }
        }
        for (var J in o) {
          var ee = o[J];
          if (le = i[J], o.hasOwnProperty(J) && (ee != null || le != null))
            switch (J) {
              case "type":
                _ = ee;
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
                D = ee;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (ee != null)
                  throw Error(a(137, t));
                break;
              default:
                ee !== le && Ke(
                  e,
                  t,
                  J,
                  ee,
                  o,
                  le
                );
            }
        }
        Gl(
          e,
          N,
          D,
          H,
          Q,
          se,
          _,
          d
        );
        return;
      case "select":
        ee = N = D = J = null;
        for (_ in i)
          if (H = i[_], i.hasOwnProperty(_) && H != null)
            switch (_) {
              case "value":
                break;
              case "multiple":
                ee = H;
              default:
                o.hasOwnProperty(_) || Ke(
                  e,
                  t,
                  _,
                  null,
                  o,
                  H
                );
            }
        for (d in o)
          if (_ = o[d], H = i[d], o.hasOwnProperty(d) && (_ != null || H != null))
            switch (d) {
              case "value":
                J = _;
                break;
              case "defaultValue":
                D = _;
                break;
              case "multiple":
                N = _;
              default:
                _ !== H && Ke(
                  e,
                  t,
                  d,
                  _,
                  o,
                  H
                );
            }
        t = D, i = N, o = ee, J != null ? Ya(e, !!i, J, !1) : !!o != !!i && (t != null ? Ya(e, !!i, t, !0) : Ya(e, !!i, i ? [] : "", !1));
        return;
      case "textarea":
        ee = J = null;
        for (D in i)
          if (d = i[D], i.hasOwnProperty(D) && d != null && !o.hasOwnProperty(D))
            switch (D) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ke(e, t, D, null, o, d);
            }
        for (N in o)
          if (d = o[N], _ = i[N], o.hasOwnProperty(N) && (d != null || _ != null))
            switch (N) {
              case "value":
                J = d;
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
                d !== _ && Ke(e, t, N, d, o, _);
            }
        Mh(e, J, ee);
        return;
      case "option":
        for (var Ae in i)
          if (J = i[Ae], i.hasOwnProperty(Ae) && J != null && !o.hasOwnProperty(Ae))
            switch (Ae) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ke(
                  e,
                  t,
                  Ae,
                  null,
                  o,
                  J
                );
            }
        for (H in o)
          if (J = o[H], ee = i[H], o.hasOwnProperty(H) && J !== ee && (J != null || ee != null))
            switch (H) {
              case "selected":
                e.selected = J && typeof J != "function" && typeof J != "symbol";
                break;
              default:
                Ke(
                  e,
                  t,
                  H,
                  J,
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
          J = i[Ce], i.hasOwnProperty(Ce) && J != null && !o.hasOwnProperty(Ce) && Ke(e, t, Ce, null, o, J);
        for (Q in o)
          if (J = o[Q], ee = i[Q], o.hasOwnProperty(Q) && J !== ee && (J != null || ee != null))
            switch (Q) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (J != null)
                  throw Error(a(137, t));
                break;
              default:
                Ke(
                  e,
                  t,
                  Q,
                  J,
                  o,
                  ee
                );
            }
        return;
      default:
        if ($l(t)) {
          for (var Je in i)
            J = i[Je], i.hasOwnProperty(Je) && J !== void 0 && !o.hasOwnProperty(Je) && Od(
              e,
              t,
              Je,
              void 0,
              o,
              J
            );
          for (se in o)
            J = o[se], ee = i[se], !o.hasOwnProperty(se) || J === ee || J === void 0 && ee === void 0 || Od(
              e,
              t,
              se,
              J,
              o,
              ee
            );
          return;
        }
    }
    for (var V in i)
      J = i[V], i.hasOwnProperty(V) && J != null && !o.hasOwnProperty(V) && Ke(e, t, V, null, o, J);
    for (le in o)
      J = o[le], ee = i[le], !o.hasOwnProperty(le) || J === ee || J == null && ee == null || Ke(e, t, le, J, o, ee);
  }
  var Md = null, jd = null;
  function du(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Rg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Dg(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Rd(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Dd = null;
  function i1() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Dd ? !1 : (Dd = e, !0) : (Dd = null, !1);
  }
  var zg = typeof setTimeout == "function" ? setTimeout : void 0, s1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Lg = typeof Promise == "function" ? Promise : void 0, o1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Lg < "u" ? function(e) {
    return Lg.resolve(null).then(e).catch(u1);
  } : zg;
  function u1(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Zr(e) {
    return e === "head";
  }
  function Pg(e, t) {
    var i = t, o = 0, d = 0;
    do {
      var _ = i.nextSibling;
      if (e.removeChild(i), _ && _.nodeType === 8)
        if (i = _.data, i === "/$") {
          if (0 < o && 8 > o) {
            i = o;
            var N = e.ownerDocument;
            if (i & 1 && As(N.documentElement), i & 2 && As(N.body), i & 4)
              for (i = N.head, As(i), N = i.firstChild; N; ) {
                var D = N.nextSibling, H = N.nodeName;
                N[Hi] || H === "SCRIPT" || H === "STYLE" || H === "LINK" && N.rel.toLowerCase() === "stylesheet" || i.removeChild(N), N = D;
              }
          }
          if (d === 0) {
            e.removeChild(_), Ds(t);
            return;
          }
          d--;
        } else
          i === "$" || i === "$?" || i === "$!" ? d++ : o = i.charCodeAt(0) - 48;
      else o = 0;
      i = _;
    } while (i);
    Ds(t);
  }
  function zd(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var i = t;
      switch (t = t.nextSibling, i.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          zd(i), Ul(i);
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
  function l1(e, t, i, o) {
    for (; e.nodeType === 1; ) {
      var d = i;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (o) {
        if (!e[Hi])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (_ = e.getAttribute("rel"), _ === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (_ !== d.rel || e.getAttribute("href") !== (d.href == null || d.href === "" ? null : d.href) || e.getAttribute("crossorigin") !== (d.crossOrigin == null ? null : d.crossOrigin) || e.getAttribute("title") !== (d.title == null ? null : d.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (_ = e.getAttribute("src"), (_ !== (d.src == null ? null : d.src) || e.getAttribute("type") !== (d.type == null ? null : d.type) || e.getAttribute("crossorigin") !== (d.crossOrigin == null ? null : d.crossOrigin)) && _ && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var _ = d.name == null ? null : "" + d.name;
        if (d.type === "hidden" && e.getAttribute("name") === _)
          return e;
      } else return e;
      if (e = Pn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function c1(e, t, i) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !i || (e = Pn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Ld(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function d1(e, t) {
    var i = e.ownerDocument;
    if (e.data !== "$?" || i.readyState === "complete")
      t();
    else {
      var o = function() {
        t(), i.removeEventListener("DOMContentLoaded", o);
      };
      i.addEventListener("DOMContentLoaded", o), e._reactRetry = o;
    }
  }
  function Pn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var Pd = null;
  function Ig(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (t === 0) return e;
          t--;
        } else i === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Bg(e, t, i) {
    switch (t = du(i), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(a(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(a(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(a(454));
        return e;
      default:
        throw Error(a(451));
    }
  }
  function As(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Ul(e);
  }
  var On = /* @__PURE__ */ new Map(), Ug = /* @__PURE__ */ new Set();
  function fu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var _r = B.d;
  B.d = {
    f: f1,
    r: h1,
    D: p1,
    C: m1,
    L: g1,
    m: v1,
    X: _1,
    S: y1,
    M: b1
  };
  function f1() {
    var e = _r.f(), t = ru();
    return e || t;
  }
  function h1(e) {
    var t = Za(e);
    t !== null && t.tag === 5 && t.type === "form" ? sm(t) : _r.r(e);
  }
  var Ei = typeof document > "u" ? null : document;
  function Hg(e, t, i) {
    var o = Ei;
    if (o && typeof t == "string" && t) {
      var d = En(t);
      d = 'link[rel="' + e + '"][href="' + d + '"]', typeof i == "string" && (d += '[crossorigin="' + i + '"]'), Ug.has(d) || (Ug.add(d), e = { rel: e, crossOrigin: i, href: t }, o.querySelector(d) === null && (t = o.createElement("link"), zt(t, "link", e), xt(t), o.head.appendChild(t)));
    }
  }
  function p1(e) {
    _r.D(e), Hg("dns-prefetch", e, null);
  }
  function m1(e, t) {
    _r.C(e, t), Hg("preconnect", e, t);
  }
  function g1(e, t, i) {
    _r.L(e, t, i);
    var o = Ei;
    if (o && e && t) {
      var d = 'link[rel="preload"][as="' + En(t) + '"]';
      t === "image" && i && i.imageSrcSet ? (d += '[imagesrcset="' + En(
        i.imageSrcSet
      ) + '"]', typeof i.imageSizes == "string" && (d += '[imagesizes="' + En(
        i.imageSizes
      ) + '"]')) : d += '[href="' + En(e) + '"]';
      var _ = d;
      switch (t) {
        case "style":
          _ = Ci(e);
          break;
        case "script":
          _ = ki(e);
      }
      On.has(_) || (e = g(
        {
          rel: "preload",
          href: t === "image" && i && i.imageSrcSet ? void 0 : e,
          as: t
        },
        i
      ), On.set(_, e), o.querySelector(d) !== null || t === "style" && o.querySelector(xs(_)) || t === "script" && o.querySelector(Ts(_)) || (t = o.createElement("link"), zt(t, "link", e), xt(t), o.head.appendChild(t)));
    }
  }
  function v1(e, t) {
    _r.m(e, t);
    var i = Ei;
    if (i && e) {
      var o = t && typeof t.as == "string" ? t.as : "script", d = 'link[rel="modulepreload"][as="' + En(o) + '"][href="' + En(e) + '"]', _ = d;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          _ = ki(e);
      }
      if (!On.has(_) && (e = g({ rel: "modulepreload", href: e }, t), On.set(_, e), i.querySelector(d) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (i.querySelector(Ts(_)))
              return;
        }
        o = i.createElement("link"), zt(o, "link", e), xt(o), i.head.appendChild(o);
      }
    }
  }
  function y1(e, t, i) {
    _r.S(e, t, i);
    var o = Ei;
    if (o && e) {
      var d = Ga(o).hoistableStyles, _ = Ci(e);
      t = t || "default";
      var N = d.get(_);
      if (!N) {
        var D = { loading: 0, preload: null };
        if (N = o.querySelector(
          xs(_)
        ))
          D.loading = 5;
        else {
          e = g(
            { rel: "stylesheet", href: e, "data-precedence": t },
            i
          ), (i = On.get(_)) && Id(e, i);
          var H = N = o.createElement("link");
          xt(H), zt(H, "link", e), H._p = new Promise(function(Q, se) {
            H.onload = Q, H.onerror = se;
          }), H.addEventListener("load", function() {
            D.loading |= 1;
          }), H.addEventListener("error", function() {
            D.loading |= 2;
          }), D.loading |= 4, hu(N, t, o);
        }
        N = {
          type: "stylesheet",
          instance: N,
          count: 1,
          state: D
        }, d.set(_, N);
      }
    }
  }
  function _1(e, t) {
    _r.X(e, t);
    var i = Ei;
    if (i && e) {
      var o = Ga(i).hoistableScripts, d = ki(e), _ = o.get(d);
      _ || (_ = i.querySelector(Ts(d)), _ || (e = g({ src: e, async: !0 }, t), (t = On.get(d)) && Bd(e, t), _ = i.createElement("script"), xt(_), zt(_, "link", e), i.head.appendChild(_)), _ = {
        type: "script",
        instance: _,
        count: 1,
        state: null
      }, o.set(d, _));
    }
  }
  function b1(e, t) {
    _r.M(e, t);
    var i = Ei;
    if (i && e) {
      var o = Ga(i).hoistableScripts, d = ki(e), _ = o.get(d);
      _ || (_ = i.querySelector(Ts(d)), _ || (e = g({ src: e, async: !0, type: "module" }, t), (t = On.get(d)) && Bd(e, t), _ = i.createElement("script"), xt(_), zt(_, "link", e), i.head.appendChild(_)), _ = {
        type: "script",
        instance: _,
        count: 1,
        state: null
      }, o.set(d, _));
    }
  }
  function qg(e, t, i, o) {
    var d = (d = ne.current) ? fu(d) : null;
    if (!d) throw Error(a(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof i.precedence == "string" && typeof i.href == "string" ? (t = Ci(i.href), i = Ga(
          d
        ).hoistableStyles, o = i.get(t), o || (o = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, i.set(t, o)), o) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (i.rel === "stylesheet" && typeof i.href == "string" && typeof i.precedence == "string") {
          e = Ci(i.href);
          var _ = Ga(
            d
          ).hoistableStyles, N = _.get(e);
          if (N || (d = d.ownerDocument || d, N = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, _.set(e, N), (_ = d.querySelector(
            xs(e)
          )) && !_._p && (N.instance = _, N.state.loading = 5), On.has(e) || (i = {
            rel: "preload",
            as: "style",
            href: i.href,
            crossOrigin: i.crossOrigin,
            integrity: i.integrity,
            media: i.media,
            hrefLang: i.hrefLang,
            referrerPolicy: i.referrerPolicy
          }, On.set(e, i), _ || S1(
            d,
            e,
            i,
            N.state
          ))), t && o === null)
            throw Error(a(528, ""));
          return N;
        }
        if (t && o !== null)
          throw Error(a(529, ""));
        return null;
      case "script":
        return t = i.async, i = i.src, typeof i == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ki(i), i = Ga(
          d
        ).hoistableScripts, o = i.get(t), o || (o = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, i.set(t, o)), o) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(a(444, e));
    }
  }
  function Ci(e) {
    return 'href="' + En(e) + '"';
  }
  function xs(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Zg(e) {
    return g({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function S1(e, t, i, o) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? o.loading = 1 : (t = e.createElement("link"), o.preload = t, t.addEventListener("load", function() {
      return o.loading |= 1;
    }), t.addEventListener("error", function() {
      return o.loading |= 2;
    }), zt(t, "link", i), xt(t), e.head.appendChild(t));
  }
  function ki(e) {
    return '[src="' + En(e) + '"]';
  }
  function Ts(e) {
    return "script[async]" + e;
  }
  function Gg(e, t, i) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var o = e.querySelector(
            'style[data-href~="' + En(i.href) + '"]'
          );
          if (o)
            return t.instance = o, xt(o), o;
          var d = g({}, i, {
            "data-href": i.href,
            "data-precedence": i.precedence,
            href: null,
            precedence: null
          });
          return o = (e.ownerDocument || e).createElement(
            "style"
          ), xt(o), zt(o, "style", d), hu(o, i.precedence, e), t.instance = o;
        case "stylesheet":
          d = Ci(i.href);
          var _ = e.querySelector(
            xs(d)
          );
          if (_)
            return t.state.loading |= 4, t.instance = _, xt(_), _;
          o = Zg(i), (d = On.get(d)) && Id(o, d), _ = (e.ownerDocument || e).createElement("link"), xt(_);
          var N = _;
          return N._p = new Promise(function(D, H) {
            N.onload = D, N.onerror = H;
          }), zt(_, "link", o), t.state.loading |= 4, hu(_, i.precedence, e), t.instance = _;
        case "script":
          return _ = ki(i.src), (d = e.querySelector(
            Ts(_)
          )) ? (t.instance = d, xt(d), d) : (o = i, (d = On.get(_)) && (o = g({}, i), Bd(o, d)), e = e.ownerDocument || e, d = e.createElement("script"), xt(d), zt(d, "link", o), e.head.appendChild(d), t.instance = d);
        case "void":
          return null;
        default:
          throw Error(a(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (o = t.instance, t.state.loading |= 4, hu(o, i.precedence, e));
    return t.instance;
  }
  function hu(e, t, i) {
    for (var o = i.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), d = o.length ? o[o.length - 1] : null, _ = d, N = 0; N < o.length; N++) {
      var D = o[N];
      if (D.dataset.precedence === t) _ = D;
      else if (_ !== d) break;
    }
    _ ? _.parentNode.insertBefore(e, _.nextSibling) : (t = i.nodeType === 9 ? i.head : i, t.insertBefore(e, t.firstChild));
  }
  function Id(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Bd(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var pu = null;
  function Vg(e, t, i) {
    if (pu === null) {
      var o = /* @__PURE__ */ new Map(), d = pu = /* @__PURE__ */ new Map();
      d.set(i, o);
    } else
      d = pu, o = d.get(i), o || (o = /* @__PURE__ */ new Map(), d.set(i, o));
    if (o.has(e)) return o;
    for (o.set(e, null), i = i.getElementsByTagName(e), d = 0; d < i.length; d++) {
      var _ = i[d];
      if (!(_[Hi] || _[Bt] || e === "link" && _.getAttribute("rel") === "stylesheet") && _.namespaceURI !== "http://www.w3.org/2000/svg") {
        var N = _.getAttribute(t) || "";
        N = e + N;
        var D = o.get(N);
        D ? D.push(_) : o.set(N, [_]);
      }
    }
    return o;
  }
  function $g(e, t, i) {
    e = e.ownerDocument || e, e.head.insertBefore(
      i,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function w1(e, t, i) {
    if (i === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Yg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Ns = null;
  function E1() {
  }
  function C1(e, t, i) {
    if (Ns === null) throw Error(a(475));
    var o = Ns;
    if (t.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var d = Ci(i.href), _ = e.querySelector(
          xs(d)
        );
        if (_) {
          e = _._p, e !== null && typeof e == "object" && typeof e.then == "function" && (o.count++, o = mu.bind(o), e.then(o, o)), t.state.loading |= 4, t.instance = _, xt(_);
          return;
        }
        _ = e.ownerDocument || e, i = Zg(i), (d = On.get(d)) && Id(i, d), _ = _.createElement("link"), xt(_);
        var N = _;
        N._p = new Promise(function(D, H) {
          N.onload = D, N.onerror = H;
        }), zt(_, "link", i), t.instance = _;
      }
      o.stylesheets === null && (o.stylesheets = /* @__PURE__ */ new Map()), o.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (o.count++, t = mu.bind(o), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function k1() {
    if (Ns === null) throw Error(a(475));
    var e = Ns;
    return e.stylesheets && e.count === 0 && Ud(e, e.stylesheets), 0 < e.count ? function(t) {
      var i = setTimeout(function() {
        if (e.stylesheets && Ud(e, e.stylesheets), e.unsuspend) {
          var o = e.unsuspend;
          e.unsuspend = null, o();
        }
      }, 6e4);
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(i);
      };
    } : null;
  }
  function mu() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Ud(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var gu = null;
  function Ud(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, gu = /* @__PURE__ */ new Map(), t.forEach(A1, e), gu = null, mu.call(e));
  }
  function A1(e, t) {
    if (!(t.state.loading & 4)) {
      var i = gu.get(e);
      if (i) var o = i.get(null);
      else {
        i = /* @__PURE__ */ new Map(), gu.set(e, i);
        for (var d = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), _ = 0; _ < d.length; _++) {
          var N = d[_];
          (N.nodeName === "LINK" || N.getAttribute("media") !== "not all") && (i.set(N.dataset.precedence, N), o = N);
        }
        o && i.set(null, o);
      }
      d = t.instance, N = d.getAttribute("data-precedence"), _ = i.get(N) || o, _ === o && i.set(null, d), i.set(N, d), this.count++, o = mu.bind(this), d.addEventListener("load", o), d.addEventListener("error", o), _ ? _.parentNode.insertBefore(d, _.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(d, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Os = {
    $$typeof: L,
    Provider: null,
    Consumer: null,
    _currentValue: K,
    _currentValue2: K,
    _threadCount: 0
  };
  function x1(e, t, i, o, d, _, N, D) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ll(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ll(0), this.hiddenUpdates = Ll(null), this.identifierPrefix = o, this.onUncaughtError = d, this.onCaughtError = _, this.onRecoverableError = N, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = D, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Xg(e, t, i, o, d, _, N, D, H, Q, se, le) {
    return e = new x1(
      e,
      t,
      i,
      N,
      D,
      H,
      Q,
      le
    ), t = 1, _ === !0 && (t |= 24), _ = ln(3, null, null, t), e.current = _, _.stateNode = e, t = Sc(), t.refCount++, e.pooledCache = t, t.refCount++, _.memoizedState = {
      element: o,
      isDehydrated: i,
      cache: t
    }, kc(_), e;
  }
  function Fg(e) {
    return e ? (e = ni, e) : ni;
  }
  function Qg(e, t, i, o, d, _) {
    d = Fg(d), o.context === null ? o.context = d : o.pendingContext = d, o = Or(t), o.payload = { element: i }, _ = _ === void 0 ? null : _, _ !== null && (o.callback = _), i = Mr(e, o, t), i !== null && (pn(i, e, t), ss(i, e, t));
  }
  function Kg(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < t ? i : t;
    }
  }
  function Hd(e, t) {
    Kg(e, t), (e = e.alternate) && Kg(e, t);
  }
  function Jg(e) {
    if (e.tag === 13) {
      var t = ti(e, 67108864);
      t !== null && pn(t, e, 67108864), Hd(e, 67108864);
    }
  }
  var vu = !0;
  function T1(e, t, i, o) {
    var d = j.T;
    j.T = null;
    var _ = B.p;
    try {
      B.p = 2, qd(e, t, i, o);
    } finally {
      B.p = _, j.T = d;
    }
  }
  function N1(e, t, i, o) {
    var d = j.T;
    j.T = null;
    var _ = B.p;
    try {
      B.p = 8, qd(e, t, i, o);
    } finally {
      B.p = _, j.T = d;
    }
  }
  function qd(e, t, i, o) {
    if (vu) {
      var d = Zd(o);
      if (d === null)
        Nd(
          e,
          t,
          o,
          yu,
          i
        ), ev(e, o);
      else if (M1(
        d,
        e,
        t,
        i,
        o
      ))
        o.stopPropagation();
      else if (ev(e, o), t & 4 && -1 < O1.indexOf(e)) {
        for (; d !== null; ) {
          var _ = Za(d);
          if (_ !== null)
            switch (_.tag) {
              case 3:
                if (_ = _.stateNode, _.current.memoizedState.isDehydrated) {
                  var N = Sn(_.pendingLanes);
                  if (N !== 0) {
                    var D = _;
                    for (D.pendingLanes |= 2, D.entangledLanes |= 2; N; ) {
                      var H = 1 << 31 - Gt(N);
                      D.entanglements[1] |= H, N &= ~H;
                    }
                    Jn(_), (Ye & 6) === 0 && (tu = Fe() + 500, Es(0));
                  }
                }
                break;
              case 13:
                D = ti(_, 2), D !== null && pn(D, _, 2), ru(), Hd(_, 2);
            }
          if (_ = Zd(o), _ === null && Nd(
            e,
            t,
            o,
            yu,
            i
          ), _ === d) break;
          d = _;
        }
        d !== null && o.stopPropagation();
      } else
        Nd(
          e,
          t,
          o,
          null,
          i
        );
    }
  }
  function Zd(e) {
    return e = Xl(e), Gd(e);
  }
  var yu = null;
  function Gd(e) {
    if (yu = null, e = qa(e), e !== null) {
      var t = c(e);
      if (t === null) e = null;
      else {
        var i = t.tag;
        if (i === 13) {
          if (e = f(t), e !== null) return e;
          e = null;
        } else if (i === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return yu = e, null;
  }
  function Wg(e) {
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
        switch (Rn()) {
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
  var Vd = !1, Gr = null, Vr = null, $r = null, Ms = /* @__PURE__ */ new Map(), js = /* @__PURE__ */ new Map(), Yr = [], O1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function ev(e, t) {
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
        Ms.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        js.delete(t.pointerId);
    }
  }
  function Rs(e, t, i, o, d, _) {
    return e === null || e.nativeEvent !== _ ? (e = {
      blockedOn: t,
      domEventName: i,
      eventSystemFlags: o,
      nativeEvent: _,
      targetContainers: [d]
    }, t !== null && (t = Za(t), t !== null && Jg(t)), e) : (e.eventSystemFlags |= o, t = e.targetContainers, d !== null && t.indexOf(d) === -1 && t.push(d), e);
  }
  function M1(e, t, i, o, d) {
    switch (t) {
      case "focusin":
        return Gr = Rs(
          Gr,
          e,
          t,
          i,
          o,
          d
        ), !0;
      case "dragenter":
        return Vr = Rs(
          Vr,
          e,
          t,
          i,
          o,
          d
        ), !0;
      case "mouseover":
        return $r = Rs(
          $r,
          e,
          t,
          i,
          o,
          d
        ), !0;
      case "pointerover":
        var _ = d.pointerId;
        return Ms.set(
          _,
          Rs(
            Ms.get(_) || null,
            e,
            t,
            i,
            o,
            d
          )
        ), !0;
      case "gotpointercapture":
        return _ = d.pointerId, js.set(
          _,
          Rs(
            js.get(_) || null,
            e,
            t,
            i,
            o,
            d
          )
        ), !0;
    }
    return !1;
  }
  function tv(e) {
    var t = qa(e.target);
    if (t !== null) {
      var i = c(t);
      if (i !== null) {
        if (t = i.tag, t === 13) {
          if (t = f(i), t !== null) {
            e.blockedOn = t, C_(e.priority, function() {
              if (i.tag === 13) {
                var o = hn();
                o = Pl(o);
                var d = ti(i, o);
                d !== null && pn(d, i, o), Hd(i, o);
              }
            });
            return;
          }
        } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function _u(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var i = Zd(e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var o = new i.constructor(
          i.type,
          i
        );
        Yl = o, i.target.dispatchEvent(o), Yl = null;
      } else
        return t = Za(i), t !== null && Jg(t), e.blockedOn = i, !1;
      t.shift();
    }
    return !0;
  }
  function nv(e, t, i) {
    _u(e) && i.delete(t);
  }
  function j1() {
    Vd = !1, Gr !== null && _u(Gr) && (Gr = null), Vr !== null && _u(Vr) && (Vr = null), $r !== null && _u($r) && ($r = null), Ms.forEach(nv), js.forEach(nv);
  }
  function bu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Vd || (Vd = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      j1
    )));
  }
  var Su = null;
  function rv(e) {
    Su !== e && (Su = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        Su === e && (Su = null);
        for (var t = 0; t < e.length; t += 3) {
          var i = e[t], o = e[t + 1], d = e[t + 2];
          if (typeof o != "function") {
            if (Gd(o || i) === null)
              continue;
            break;
          }
          var _ = Za(i);
          _ !== null && (e.splice(t, 3), t -= 3, Gc(
            _,
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
    function t(H) {
      return bu(H, e);
    }
    Gr !== null && bu(Gr, e), Vr !== null && bu(Vr, e), $r !== null && bu($r, e), Ms.forEach(t), js.forEach(t);
    for (var i = 0; i < Yr.length; i++) {
      var o = Yr[i];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < Yr.length && (i = Yr[0], i.blockedOn === null); )
      tv(i), i.blockedOn === null && Yr.shift();
    if (i = (e.ownerDocument || e).$$reactFormReplay, i != null)
      for (o = 0; o < i.length; o += 3) {
        var d = i[o], _ = i[o + 1], N = d[Kt] || null;
        if (typeof _ == "function")
          N || rv(i);
        else if (N) {
          var D = null;
          if (_ && _.hasAttribute("formAction")) {
            if (d = _, N = _[Kt] || null)
              D = N.formAction;
            else if (Gd(d) !== null) continue;
          } else D = N.action;
          typeof D == "function" ? i[o + 1] = D : (i.splice(o, 3), o -= 3), rv(i);
        }
      }
  }
  function $d(e) {
    this._internalRoot = e;
  }
  wu.prototype.render = $d.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(a(409));
    var i = t.current, o = hn();
    Qg(i, o, e, t, null, null);
  }, wu.prototype.unmount = $d.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Qg(e.current, 2, null, e, null, null), ru(), t[Ha] = null;
    }
  };
  function wu(e) {
    this._internalRoot = e;
  }
  wu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = bh();
      e = { blockedOn: null, target: e, priority: t };
      for (var i = 0; i < Yr.length && t !== 0 && t < Yr[i].priority; i++) ;
      Yr.splice(i, 0, e), i === 0 && tv(e);
    }
  };
  var av = r.version;
  if (av !== "19.1.1")
    throw Error(
      a(
        527,
        av,
        "19.1.1"
      )
    );
  B.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(a(188)) : (e = Object.keys(e).join(","), Error(a(268, e)));
    return e = p(t), e = e !== null ? b(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var R1 = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: j,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Eu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Eu.isDisabled && Eu.supportsFiber)
      try {
        Dn = Eu.inject(
          R1
        ), mt = Eu;
      } catch {
      }
  }
  return Is.createRoot = function(e, t) {
    if (!u(e)) throw Error(a(299));
    var i = !1, o = "", d = bm, _ = Sm, N = wm, D = null;
    return t != null && (t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onUncaughtError !== void 0 && (d = t.onUncaughtError), t.onCaughtError !== void 0 && (_ = t.onCaughtError), t.onRecoverableError !== void 0 && (N = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (D = t.unstable_transitionCallbacks)), t = Xg(
      e,
      1,
      !1,
      null,
      null,
      i,
      o,
      d,
      _,
      N,
      D,
      null
    ), e[Ha] = t.current, Td(e), new $d(t);
  }, Is.hydrateRoot = function(e, t, i) {
    if (!u(e)) throw Error(a(299));
    var o = !1, d = "", _ = bm, N = Sm, D = wm, H = null, Q = null;
    return i != null && (i.unstable_strictMode === !0 && (o = !0), i.identifierPrefix !== void 0 && (d = i.identifierPrefix), i.onUncaughtError !== void 0 && (_ = i.onUncaughtError), i.onCaughtError !== void 0 && (N = i.onCaughtError), i.onRecoverableError !== void 0 && (D = i.onRecoverableError), i.unstable_transitionCallbacks !== void 0 && (H = i.unstable_transitionCallbacks), i.formState !== void 0 && (Q = i.formState)), t = Xg(
      e,
      1,
      !0,
      t,
      i ?? null,
      o,
      d,
      _,
      N,
      D,
      H,
      Q
    ), t.context = Fg(null), i = t.current, o = hn(), o = Pl(o), d = Or(o), d.callback = null, Mr(i, d, o), i = o, t.current.lanes = i, Ui(t, i), Jn(t), e[Ha] = t.current, Td(e), new wu(t);
  }, Is.version = "19.1.1", Is;
}
var _v;
function g2() {
  if (_v) return Qd.exports;
  _v = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Qd.exports = m2(), Qd.exports;
}
var v2 = g2();
const bv = /* @__PURE__ */ Qf(v2);
var y2 = Object.defineProperty, _2 = (n, r, s) => r in n ? y2(n, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[r] = s, Sv = (n, r, s) => _2(n, typeof r != "symbol" ? r + "" : r, s);
class i0 {
  constructor(r, s) {
    Sv(this, "settingsKey"), Sv(this, "defaultSettings"), this.settingsKey = r, this.defaultSettings = s;
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
      let p = function(b, g) {
        let E = !1;
        for (const v of Object.keys(g))
          b[v] === void 0 ? (b[v] = g[v], E = !0) : typeof g[v] == "object" && g[v] !== null && (b[v] = b[v] || {}, p(b[v], g[v]) && (E = !0));
        return E;
      };
      a && c.version !== a && (m.version.changed = !0, m.version.new = a, c.version = a), u && u !== "*" && c.formatVersion !== u && (m.formatVersion.changed = !0, m.formatVersion.new = u, c.formatVersion = u), (p(c, this.defaultSettings) || m.version.changed || m.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(s)) {
      a && !c.version && (c.version = a, m.version.changed = !0, m.version.new = a), u && !c.formatVersion && (c.formatVersion = u, m.formatVersion.changed = !0, m.formatVersion.new = u);
      let p = structuredClone(c), b = c.formatVersion;
      try {
        let g;
        do {
          g = !1;
          let E = s.find((v) => v.from === b);
          if (E && E.to > b)
            p = await E.action(p), b = E.to, p.formatVersion = E.to, g = !0;
          else
            for (const v of s)
              if (v.from === "*" && v.to > b && b !== v.to) {
                p = await v.action(p), b = v.to, p.formatVersion = v.to, g = !0;
                break;
              }
        } while (g);
        if (b !== c.formatVersion) {
          m.formatVersion.changed = !0, m.formatVersion.new = b;
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
function Er(n) {
  return Array.isArray ? Array.isArray(n) : u0(n) === "[object Array]";
}
function b2(n) {
  if (typeof n == "string")
    return n;
  let r = n + "";
  return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
}
function S2(n) {
  return n == null ? "" : b2(n);
}
function Wn(n) {
  return typeof n == "string";
}
function s0(n) {
  return typeof n == "number";
}
function w2(n) {
  return n === !0 || n === !1 || E2(n) && u0(n) == "[object Boolean]";
}
function o0(n) {
  return typeof n == "object";
}
function E2(n) {
  return o0(n) && n !== null;
}
function yn(n) {
  return n != null;
}
function ef(n) {
  return !n.trim().length;
}
function u0(n) {
  return n == null ? n === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(n);
}
const C2 = "Incorrect 'index' type", k2 = (n) => `Invalid value for key ${n}`, A2 = (n) => `Pattern length exceeds max of ${n}.`, x2 = (n) => `Missing ${n} property in key`, T2 = (n) => `Property 'weight' in key '${n}' must be a positive integer`, wv = Object.prototype.hasOwnProperty;
class N2 {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let s = 0;
    r.forEach((a) => {
      let u = l0(a);
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
function l0(n) {
  let r = null, s = null, a = null, u = 1, c = null;
  if (Wn(n) || Er(n))
    a = n, r = Ev(n), s = Cf(n);
  else {
    if (!wv.call(n, "name"))
      throw new Error(x2("name"));
    const f = n.name;
    if (a = f, wv.call(n, "weight") && (u = n.weight, u <= 0))
      throw new Error(T2(f));
    r = Ev(f), s = Cf(f), c = n.getFn;
  }
  return { path: r, id: s, weight: u, src: a, getFn: c };
}
function Ev(n) {
  return Er(n) ? n : n.split(".");
}
function Cf(n) {
  return Er(n) ? n.join(".") : n;
}
function O2(n, r) {
  let s = [], a = !1;
  const u = (c, f, m) => {
    if (yn(c))
      if (!f[m])
        s.push(c);
      else {
        let p = f[m];
        const b = c[p];
        if (!yn(b))
          return;
        if (m === f.length - 1 && (Wn(b) || s0(b) || w2(b)))
          s.push(S2(b));
        else if (Er(b)) {
          a = !0;
          for (let g = 0, E = b.length; g < E; g += 1)
            u(b[g], f, m + 1);
        } else f.length && u(b, f, m + 1);
      }
  };
  return u(n, Wn(r) ? r.split(".") : r, 0), a ? s : s[0];
}
const M2 = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, j2 = {
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
  sortFn: (n, r) => n.score === r.score ? n.idx < r.idx ? -1 : 1 : n.score < r.score ? -1 : 1
}, R2 = {
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
}, D2 = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: O2,
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
  ...j2,
  ...M2,
  ...R2,
  ...D2
};
const z2 = /[^ ]+/g;
function L2(n = 1, r = 3) {
  const s = /* @__PURE__ */ new Map(), a = Math.pow(10, r);
  return {
    get(u) {
      const c = u.match(z2).length;
      if (s.has(c))
        return s.get(c);
      const f = 1 / Math.pow(c, 0.5 * n), m = parseFloat(Math.round(f * a) / a);
      return s.set(c, m), m;
    },
    clear() {
      s.clear();
    }
  };
}
class Jf {
  constructor({
    getFn: r = Ne.getFn,
    fieldNormWeight: s = Ne.fieldNormWeight
  } = {}) {
    this.norm = L2(s, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
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
    if (!yn(r) || ef(r))
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
      if (yn(f)) {
        if (Er(f)) {
          let m = [];
          const p = [{ nestedArrIndex: -1, value: f }];
          for (; p.length; ) {
            const { nestedArrIndex: b, value: g } = p.pop();
            if (yn(g))
              if (Wn(g) && !ef(g)) {
                let E = {
                  v: g,
                  i: b,
                  n: this.norm.get(g)
                };
                m.push(E);
              } else Er(g) && g.forEach((E, v) => {
                p.push({
                  nestedArrIndex: v,
                  value: E
                });
              });
          }
          a.$[c] = m;
        } else if (Wn(f) && !ef(f)) {
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
function c0(n, r, { getFn: s = Ne.getFn, fieldNormWeight: a = Ne.fieldNormWeight } = {}) {
  const u = new Jf({ getFn: s, fieldNormWeight: a });
  return u.setKeys(n.map(l0)), u.setSources(r), u.create(), u;
}
function P2(n, { getFn: r = Ne.getFn, fieldNormWeight: s = Ne.fieldNormWeight } = {}) {
  const { keys: a, records: u } = n, c = new Jf({ getFn: r, fieldNormWeight: s });
  return c.setKeys(a), c.setIndexRecords(u), c;
}
function Cu(n, {
  errors: r = 0,
  currentLocation: s = 0,
  expectedLocation: a = 0,
  distance: u = Ne.distance,
  ignoreLocation: c = Ne.ignoreLocation
} = {}) {
  const f = r / n.length;
  if (c)
    return f;
  const m = Math.abs(a - s);
  return u ? f + m / u : m ? 1 : f;
}
function I2(n = [], r = Ne.minMatchCharLength) {
  let s = [], a = -1, u = -1, c = 0;
  for (let f = n.length; c < f; c += 1) {
    let m = n[c];
    m && a === -1 ? a = c : !m && a !== -1 && (u = c - 1, u - a + 1 >= r && s.push([a, u]), a = -1);
  }
  return n[c - 1] && c - a >= r && s.push([a, c - 1]), s;
}
const ja = 32;
function B2(n, r, s, {
  location: a = Ne.location,
  distance: u = Ne.distance,
  threshold: c = Ne.threshold,
  findAllMatches: f = Ne.findAllMatches,
  minMatchCharLength: m = Ne.minMatchCharLength,
  includeMatches: p = Ne.includeMatches,
  ignoreLocation: b = Ne.ignoreLocation
} = {}) {
  if (r.length > ja)
    throw new Error(A2(ja));
  const g = r.length, E = n.length, v = Math.max(0, Math.min(a, E));
  let S = c, h = v;
  const C = m > 1 || p, x = C ? Array(E) : [];
  let M;
  for (; (M = n.indexOf(r, h)) > -1; ) {
    let k = Cu(r, {
      currentLocation: M,
      expectedLocation: v,
      distance: u,
      ignoreLocation: b
    });
    if (S = Math.min(k, S), h = M + g, C) {
      let R = 0;
      for (; R < g; )
        x[M + R] = 1, R += 1;
    }
  }
  h = -1;
  let T = [], L = 1, l = g + E;
  const y = 1 << g - 1;
  for (let k = 0; k < g; k += 1) {
    let R = 0, P = l;
    for (; R < P; )
      Cu(r, {
        errors: k,
        currentLocation: v + P,
        expectedLocation: v,
        distance: u,
        ignoreLocation: b
      }) <= S ? R = P : l = P, P = Math.floor((l - R) / 2 + R);
    l = P;
    let O = Math.max(1, v - P + 1), z = f ? E : Math.min(v + P, E) + g, q = Array(z + 2);
    q[z + 1] = (1 << k) - 1;
    for (let G = z; G >= O; G -= 1) {
      let W = G - 1, j = s[n.charAt(W)];
      if (C && (x[W] = +!!j), q[G] = (q[G + 1] << 1 | 1) & j, k && (q[G] |= (T[G + 1] | T[G]) << 1 | 1 | T[G + 1]), q[G] & y && (L = Cu(r, {
        errors: k,
        currentLocation: W,
        expectedLocation: v,
        distance: u,
        ignoreLocation: b
      }), L <= S)) {
        if (S = L, h = W, h <= v)
          break;
        O = Math.max(1, 2 * v - h);
      }
    }
    if (Cu(r, {
      errors: k + 1,
      currentLocation: v,
      expectedLocation: v,
      distance: u,
      ignoreLocation: b
    }) > S)
      break;
    T = q;
  }
  const w = {
    isMatch: h >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, L)
  };
  if (C) {
    const k = I2(x, m);
    k.length ? p && (w.indices = k) : w.isMatch = !1;
  }
  return w;
}
function U2(n) {
  let r = {};
  for (let s = 0, a = n.length; s < a; s += 1) {
    const u = n.charAt(s);
    r[u] = (r[u] || 0) | 1 << a - s - 1;
  }
  return r;
}
const yl = String.prototype.normalize ? ((n) => n.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((n) => n);
class d0 {
  constructor(r, {
    location: s = Ne.location,
    threshold: a = Ne.threshold,
    distance: u = Ne.distance,
    includeMatches: c = Ne.includeMatches,
    findAllMatches: f = Ne.findAllMatches,
    minMatchCharLength: m = Ne.minMatchCharLength,
    isCaseSensitive: p = Ne.isCaseSensitive,
    ignoreDiacritics: b = Ne.ignoreDiacritics,
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
      ignoreDiacritics: b,
      ignoreLocation: g
    }, r = p ? r : r.toLowerCase(), r = b ? yl(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const E = (S, h) => {
      this.chunks.push({
        pattern: S,
        alphabet: U2(S),
        startIndex: h
      });
    }, v = this.pattern.length;
    if (v > ja) {
      let S = 0;
      const h = v % ja, C = v - h;
      for (; S < C; )
        E(this.pattern.substr(S, ja), S), S += ja;
      if (h) {
        const x = v - ja;
        E(this.pattern.substr(x), x);
      }
    } else
      E(this.pattern, 0);
  }
  searchIn(r) {
    const { isCaseSensitive: s, ignoreDiacritics: a, includeMatches: u } = this.options;
    if (r = s ? r : r.toLowerCase(), r = a ? yl(r) : r, this.pattern === r) {
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
      minMatchCharLength: b,
      ignoreLocation: g
    } = this.options;
    let E = [], v = 0, S = !1;
    this.chunks.forEach(({ pattern: C, alphabet: x, startIndex: M }) => {
      const { isMatch: T, score: L, indices: l } = B2(r, C, x, {
        location: c + M,
        distance: f,
        threshold: m,
        findAllMatches: p,
        minMatchCharLength: b,
        includeMatches: u,
        ignoreLocation: g
      });
      T && (S = !0), v += L, T && l && (E = [...E, ...l]);
    });
    let h = {
      isMatch: S,
      score: S ? v / this.chunks.length : 1
    };
    return S && u && (h.indices = E), h;
  }
}
class ta {
  constructor(r) {
    this.pattern = r;
  }
  static isMultiMatch(r) {
    return Cv(r, this.multiRegex);
  }
  static isSingleMatch(r) {
    return Cv(r, this.singleRegex);
  }
  search() {
  }
}
function Cv(n, r) {
  const s = n.match(r);
  return s ? s[1] : null;
}
class H2 extends ta {
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
class q2 extends ta {
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
class Z2 extends ta {
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
class G2 extends ta {
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
class V2 extends ta {
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
class $2 extends ta {
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
class f0 extends ta {
  constructor(r, {
    location: s = Ne.location,
    threshold: a = Ne.threshold,
    distance: u = Ne.distance,
    includeMatches: c = Ne.includeMatches,
    findAllMatches: f = Ne.findAllMatches,
    minMatchCharLength: m = Ne.minMatchCharLength,
    isCaseSensitive: p = Ne.isCaseSensitive,
    ignoreDiacritics: b = Ne.ignoreDiacritics,
    ignoreLocation: g = Ne.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new d0(r, {
      location: s,
      threshold: a,
      distance: u,
      includeMatches: c,
      findAllMatches: f,
      minMatchCharLength: m,
      isCaseSensitive: p,
      ignoreDiacritics: b,
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
class h0 extends ta {
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
const kf = [
  H2,
  h0,
  Z2,
  G2,
  $2,
  V2,
  q2,
  f0
], kv = kf.length, Y2 = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, X2 = "|";
function F2(n, r = {}) {
  return n.split(X2).map((s) => {
    let a = s.trim().split(Y2).filter((c) => c && !!c.trim()), u = [];
    for (let c = 0, f = a.length; c < f; c += 1) {
      const m = a[c];
      let p = !1, b = -1;
      for (; !p && ++b < kv; ) {
        const g = kf[b];
        let E = g.isMultiMatch(m);
        E && (u.push(new g(E, r)), p = !0);
      }
      if (!p)
        for (b = -1; ++b < kv; ) {
          const g = kf[b];
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
const Q2 = /* @__PURE__ */ new Set([f0.type, h0.type]);
class K2 {
  constructor(r, {
    isCaseSensitive: s = Ne.isCaseSensitive,
    ignoreDiacritics: a = Ne.ignoreDiacritics,
    includeMatches: u = Ne.includeMatches,
    minMatchCharLength: c = Ne.minMatchCharLength,
    ignoreLocation: f = Ne.ignoreLocation,
    findAllMatches: m = Ne.findAllMatches,
    location: p = Ne.location,
    threshold: b = Ne.threshold,
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
      threshold: b,
      distance: g
    }, r = s ? r : r.toLowerCase(), r = a ? yl(r) : r, this.pattern = r, this.query = F2(this.pattern, this.options);
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
    r = u ? r : r.toLowerCase(), r = c ? yl(r) : r;
    let f = 0, m = [], p = 0;
    for (let b = 0, g = s.length; b < g; b += 1) {
      const E = s[b];
      m.length = 0, f = 0;
      for (let v = 0, S = E.length; v < S; v += 1) {
        const h = E[v], { isMatch: C, indices: x, score: M } = h.search(r);
        if (C) {
          if (f += 1, p += M, a) {
            const T = h.constructor.type;
            Q2.has(T) ? m = [...m, ...x] : m.push(x);
          }
        } else {
          p = 0, f = 0, m.length = 0;
          break;
        }
      }
      if (f) {
        let v = {
          isMatch: !0,
          score: p / f
        };
        return a && (v.indices = m), v;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const Af = [];
function J2(...n) {
  Af.push(...n);
}
function xf(n, r) {
  for (let s = 0, a = Af.length; s < a; s += 1) {
    let u = Af[s];
    if (u.condition(n, r))
      return new u(n, r);
  }
  return new d0(n, r);
}
const _l = {
  AND: "$and",
  OR: "$or"
}, Tf = {
  PATH: "$path",
  PATTERN: "$val"
}, Nf = (n) => !!(n[_l.AND] || n[_l.OR]), W2 = (n) => !!n[Tf.PATH], e3 = (n) => !Er(n) && o0(n) && !Nf(n), Av = (n) => ({
  [_l.AND]: Object.keys(n).map((r) => ({
    [r]: n[r]
  }))
});
function p0(n, r, { auto: s = !0 } = {}) {
  const a = (u) => {
    let c = Object.keys(u);
    const f = W2(u);
    if (!f && c.length > 1 && !Nf(u))
      return a(Av(u));
    if (e3(u)) {
      const p = f ? u[Tf.PATH] : c[0], b = f ? u[Tf.PATTERN] : u[p];
      if (!Wn(b))
        throw new Error(k2(p));
      const g = {
        keyId: Cf(p),
        pattern: b
      };
      return s && (g.searcher = xf(b, r)), g;
    }
    let m = {
      children: [],
      operator: c[0]
    };
    return c.forEach((p) => {
      const b = u[p];
      Er(b) && b.forEach((g) => {
        m.children.push(a(g));
      });
    }), m;
  };
  return Nf(n) || (n = Av(n)), a(n);
}
function t3(n, { ignoreFieldNorm: r = Ne.ignoreFieldNorm }) {
  n.forEach((s) => {
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
function n3(n, r) {
  const s = n.matches;
  r.matches = [], yn(s) && s.forEach((a) => {
    if (!yn(a.indices) || !a.indices.length)
      return;
    const { indices: u, value: c } = a;
    let f = {
      indices: u,
      value: c
    };
    a.key && (f.key = a.key.src), a.idx > -1 && (f.refIndex = a.idx), r.matches.push(f);
  });
}
function r3(n, r) {
  r.score = n.score;
}
function a3(n, r, {
  includeMatches: s = Ne.includeMatches,
  includeScore: a = Ne.includeScore
} = {}) {
  const u = [];
  return s && u.push(n3), a && u.push(r3), n.map((c) => {
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
    this.options = { ...Ne, ...s }, this.options.useExtendedSearch, this._keyStore = new N2(this.options.keys), this.setCollection(r, a);
  }
  setCollection(r, s) {
    if (this._docs = r, s && !(s instanceof Jf))
      throw new Error(C2);
    this._myIndex = s || c0(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(r) {
    yn(r) && (this._docs.push(r), this._myIndex.add(r));
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
    return t3(p, { ignoreFieldNorm: m }), c && p.sort(f), s0(s) && s > -1 && (p = p.slice(0, s)), a3(p, this._docs, {
      includeMatches: a,
      includeScore: u
    });
  }
  _searchStringList(r) {
    const s = xf(r, this.options), { records: a } = this._myIndex, u = [];
    return a.forEach(({ v: c, i: f, n: m }) => {
      if (!yn(c))
        return;
      const { isMatch: p, score: b, indices: g } = s.searchIn(c);
      p && u.push({
        item: c,
        idx: f,
        matches: [{ score: b, value: c, norm: m, indices: g }]
      });
    }), u;
  }
  _searchLogical(r) {
    const s = p0(r, this.options), a = (m, p, b) => {
      if (!m.children) {
        const { keyId: E, searcher: v } = m, S = this._findMatches({
          key: this._keyStore.get(E),
          value: this._myIndex.getValueForItemAtKeyId(p, E),
          searcher: v
        });
        return S && S.length ? [
          {
            idx: b,
            item: p,
            matches: S
          }
        ] : [];
      }
      const g = [];
      for (let E = 0, v = m.children.length; E < v; E += 1) {
        const S = m.children[E], h = a(S, p, b);
        if (h.length)
          g.push(...h);
        else if (m.operator === _l.AND)
          return [];
      }
      return g;
    }, u = this._myIndex.records, c = {}, f = [];
    return u.forEach(({ $: m, i: p }) => {
      if (yn(m)) {
        let b = a(s, m, p);
        b.length && (c[p] || (c[p] = { idx: p, item: m, matches: [] }, f.push(c[p])), b.forEach(({ matches: g }) => {
          c[p].matches.push(...g);
        }));
      }
    }), f;
  }
  _searchObjectList(r) {
    const s = xf(r, this.options), { keys: a, records: u } = this._myIndex, c = [];
    return u.forEach(({ $: f, i: m }) => {
      if (!yn(f))
        return;
      let p = [];
      a.forEach((b, g) => {
        p.push(
          ...this._findMatches({
            key: b,
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
    if (!yn(s))
      return [];
    let u = [];
    if (Er(s))
      s.forEach(({ v: c, i: f, n: m }) => {
        if (!yn(c))
          return;
        const { isMatch: p, score: b, indices: g } = a.searchIn(c);
        p && u.push({
          score: b,
          key: r,
          value: c,
          idx: f,
          norm: m,
          indices: g
        });
      });
    else {
      const { v: c, n: f } = s, { isMatch: m, score: p, indices: b } = a.searchIn(c);
      m && u.push({ score: p, key: r, value: c, norm: f, indices: b });
    }
    return u;
  }
}
Bi.version = "7.1.0";
Bi.createIndex = c0;
Bi.parseIndex = P2;
Bi.config = Ne;
Bi.parseQuery = p0;
J2(K2);
var i3 = Object.defineProperty, s3 = (n, r, s) => r in n ? i3(n, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[r] = s, o3 = (n, r, s) => s3(n, r + "", s);
let u3 = class {
  constructor() {
    o3(this, "requestMap"), this.requestMap = /* @__PURE__ */ new Map();
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
        for await (const b of m())
          p = b, s != null && s.onEntry && await s.onEntry(c, b);
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
async function l3(n, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[n].callback(...r);
}
async function ge(n, r, { escapeHtml: s = !0 } = {}) {
  await l3("echo", { severity: n, escapeHtml: (!!s).toString() }, r);
}
function tf(n) {
  return I1(n);
}
function xv(n, r) {
  return L1(n, r);
}
function ku(n, r, s) {
  return P1(n, r, s);
}
function c3(n, r, s) {
  return X1(n, r, s);
}
function d3(n, r) {
  return F1(n, r);
}
function f3(n, {
  customStoryString: r,
  customInstructSettings: s
} = {}) {
  return z1(n, { customStoryString: r, customInstructSettings: s });
}
function ka(n) {
  return t2(n);
}
function h3() {
  return {
    prompt: zs[Ls.prompt],
    interval: zs[Ls.interval],
    position: zs[Ls.position],
    depth: zs[Ls.depth],
    role: zs[Ls.role]
  };
}
function p3(n, r) {
  return r2(n, r);
}
function m3({
  name2: n,
  charDescription: r,
  charPersonality: s,
  Scenario: a,
  worldInfoBefore: u,
  worldInfoAfter: c,
  bias: f,
  type: m,
  quietPrompt: p,
  quietImage: b,
  extensionPrompts: g,
  cyclePrompt: E,
  systemPromptOverride: v,
  jailbreakPromptOverride: S,
  personaDescription: h,
  messages: C,
  messageExamples: x
}, M) {
  return n2(
    {
      name2: n,
      charDescription: r,
      charPersonality: s,
      Scenario: a,
      worldInfoBefore: u,
      worldInfoAfter: c,
      bias: f,
      type: m,
      quietPrompt: p,
      quietImage: b,
      cyclePrompt: E,
      systemPromptOverride: v,
      jailbreakPromptOverride: S,
      personaDescription: h,
      extensionPrompts: g,
      messages: C,
      messageExamples: x
    },
    M
  );
}
function g3(n) {
  return K1(n);
}
function v3(n) {
  return J1(n);
}
function y3(n, r, {
  characterOverride: s,
  isMarkdown: a,
  isPrompt: u,
  isEdit: c,
  depth: f
}) {
  return i2(n, r, { characterOverride: s, isMarkdown: a, isPrompt: u, isEdit: c, depth: f });
}
function _3(n, r, { characterOverride: s = null } = {}) {
  return a2(n, r, { characterOverride: s });
}
async function b3(n, r) {
  return await Q1(n, r);
}
function Tv(n, {
  wiFormat: r
} = {}) {
  return W1(n, { wiFormat: r });
}
function Bs(n) {
  return e2(n);
}
function m0(n, {
  manualAvatarKey: r
} = {}) {
  return s2(n, { manualAvatarKey: r });
}
function Wf(n, r) {
  return H1(n, r);
}
class S3 {
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
var w3 = Object.defineProperty, E3 = (n, r, s) => r in n ? w3(n, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[r] = s, Au = (n, r, s) => E3(n, typeof r != "symbol" ? r + "" : r, s);
class C3 {
  constructor(r) {
    Au(this, "messages", []), Au(this, "tokenizer"), Au(this, "maxContext"), Au(this, "currentTokenCount", 0), this.tokenizer = new S3(), this.maxContext = r;
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
      const p = s[m], b = a[m];
      if (this.currentTokenCount + c + b <= this.maxContext)
        f.unshift(p), c += b;
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
async function g0(n, {
  targetCharacterId: r,
  presetName: s,
  instructName: a,
  contextName: u,
  syspromptName: c,
  maxContext: f,
  includeNames: m,
  ignoreCharacterFields: p,
  ignoreAuthorNote: b,
  ignoreWorldInfo: g,
  messageIndexesBetween: E
} = {}) {
  var v, S, h, C, x, M, T, L, l, y, w, k, R, P;
  if (!["textgenerationwebui", "openai"].includes(n))
    throw new Error("Unsupported API");
  const O = SillyTavern.getContext();
  let { description: z, personality: q, persona: Y, scenario: G, mesExamples: W, system: j, jailbreak: B } = p ? {
    description: "",
    personality: "",
    persona: "",
    scenario: "",
    mesExamples: "",
    system: "",
    jailbreak: ""
  } : O.getCharacterCardFields({
    chid: r
  });
  const K = n === "textgenerationwebui" ? (v = O.getPresetManager("instruct")) == null ? void 0 : v.getCompletionPresetByName(a) : void 0, ae = !!(K != null && K.enabled);
  let I = xv(W, ae);
  function X() {
    var ye, _e;
    if (typeof f == "number")
      return f;
    if (!f || f === "active" || !s)
      return tf();
    if (typeof f == "number")
      return f;
    let qe;
    if (n === "textgenerationwebui") {
      const Ze = (ye = O.getPresetManager("textgenerationwebui")) == null ? void 0 : ye.getCompletionPresetByName(s);
      qe = Ze?.max_length;
    } else {
      const Ze = (_e = O.getPresetManager("openai")) == null ? void 0 : _e.getCompletionPresetByName(s);
      qe = Ze?.openai_max_context;
    }
    return typeof qe == "number" ? qe : tf();
  }
  let ce = [];
  const $ = X();
  if ($ <= 0)
    return { result: [], warnings: ce };
  const U = new C3($), te = O.ToolManager.isToolCallingSupported(), ne = E?.start ?? 0, ue = E != null && E.end ? E.end + 1 : void 0;
  let re = ne === -1 && ue === 0 ? [] : O.chat.slice(ne, ue).filter((ye) => {
    var _e;
    return !ye.is_system || te && Array.isArray((_e = ye.extra) == null ? void 0 : _e.tool_invocations);
  });
  re = await Promise.all(
    re.map(async (ye, _e) => {
      var qe, Ze;
      let et = ye.mes, Vn = ye.is_user ? ov.USER_INPUT : ov.AI_OUTPUT, Dn = { isPrompt: !0, depth: re.length - _e - 1 }, mt = y3(et, Vn, Dn);
      return mt = await b3(ye, mt), (qe = ye?.extra) != null && qe.append_title && (Ze = ye?.extra) != null && Ze.title && (mt = `${mt}

${ye.extra.title}`), {
        ...ye,
        mes: mt,
        index: _e
      };
    })
  );
  const pe = re.map((ye) => q1 ? `${ye.name}: ${ye.mes}` : ye.mes).reverse(), { worldInfoString: je, worldInfoBefore: Se, worldInfoAfter: me, worldInfoExamples: fe, worldInfoDepth: we, anBefore: Pe, anAfter: We } = g ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await O.getWorldInfoPrompt(pe, $, !1);
  for (const ye of fe) {
    const _e = ye.content;
    if (_e.length === 0)
      continue;
    const qe = ku(_e, Ea, Fr), Ze = xv(qe, ae);
    ye.position === Z1.before ? I.unshift(...Ze) : I.push(...Ze);
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
  if (n === "textgenerationwebui") {
    const ye = [...I];
    I && (I = c3(I, Ea, Fr));
    const _e = (S = O.getPresetManager("sysprompt")) == null ? void 0 : S.getCompletionPresetByName(c);
    _e && (j = O.powerUserSettings.prefer_character_prompt && j ? j : ku(_e.content, Ea, Fr), j = ae ? d3(
      O.substituteParams(j, Ea, Fr, _e.content),
      K
    ) : j);
    const qe = {
      description: z,
      personality: q,
      persona: O.powerUserSettings.persona_description_position == iv.IN_PROMPT ? Y : "",
      scenario: G,
      system: j,
      char: Fr,
      user: Ea,
      wiBefore: Se,
      wiAfter: me,
      loreBefore: Se,
      loreAfter: me,
      mesExamples: I.join(""),
      mesExamplesRaw: ye.join("")
    }, Ze = (h = O.getPresetManager("context")) == null ? void 0 : h.getCompletionPresetByName(u);
    let et = f3(qe, {
      customInstructSettings: K,
      customStoryString: Ze?.story_string
    });
    et && U.add({ role: "system", content: et, ignoreInstruct: !0 }), Fe();
  } else {
    let ye = function(Vt) {
      const Qt = bn.find((Ua) => Ua.identifier === Vt);
      if (Qt)
        return Qt;
      const ho = et.prompts.find((Ua) => Ua.identifier === Vt);
      if (ho)
        return ho;
    }, _e = g3(re), qe = v3(I);
    async function Ze() {
      let [Vt, Qt] = await m3(
        {
          name2: Fr,
          charDescription: z,
          charPersonality: q,
          Scenario: G,
          worldInfoBefore: Se,
          worldInfoAfter: me,
          extensionPrompts: O.extensionPrompts,
          bias: "",
          type: "normal",
          quietPrompt: void 0,
          quietImage: void 0,
          cyclePrompt: "",
          systemPromptOverride: j,
          jailbreakPromptOverride: B,
          personaDescription: Y,
          messages: _e,
          messageExamples: qe
        },
        !1
      );
      U.addMany(Vt);
    }
    if (!s)
      return ce.push("No preset name provided. Using default preset."), await Ze(), { result: U.getMessages(), warnings: ce };
    const et = (C = O.getPresetManager("openai")) == null ? void 0 : C.getCompletionPresetByName(s);
    if (!et)
      return console.warn(`Preset not found: ${s}. Using current preset.`), ce.push(`Preset not found: ${s}. Using current preset.`), Ze(), { result: U.getMessages(), warnings: ce };
    let Vn = (x = et.prompt_order) == null ? void 0 : x.find((Vt) => Vt.character_id === sn);
    if (!Vn && et.prompt_order && et.prompt_order.length > 0 && (Vn = et.prompt_order[et.prompt_order.length - 1]), !Vn)
      return console.warn(`No prompt order found for preset: ${s}. Using current preset.`), ce.push(`No prompt order found for preset: ${s}. Using current preset.`), Ze(), { result: U.getMessages(), warnings: ce };
    const Dn = G && et.scenario_format ? O.substituteParams(et.scenario_format) : "", mt = q && et.personality_format ? O.substituteParams(et.personality_format) : "", $n = O.substituteParams(et.group_nudge_prompt), Gt = et.impersonation_prompt ? O.substituteParams(et.impersonation_prompt) : "", bn = [];
    g || bn.push(
      {
        role: "system",
        content: Tv(Se, { wiFormat: et.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: Tv(me, { wiFormat: et.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), p || bn.push(
      { role: "system", content: z, identifier: "charDescription" },
      { role: "system", content: mt, identifier: "charPersonality" },
      { role: "system", content: Dn, identifier: "scenario" }
    ), bn.push(
      { role: "system", content: Gt, identifier: "impersonate" },
      { role: "system", content: $n, identifier: "groupNudge" }
    );
    const aa = O.extensionPrompts["1_memory"];
    aa && aa.value && bn.push({
      role: ka(aa.role),
      content: aa.value,
      identifier: "summary",
      position: Bs(aa.position)
    });
    const ia = O.extensionPrompts["2_floating_prompt"];
    !b && ia && ia.value && bn.push({
      role: ka(ia.role),
      content: ia.value,
      identifier: "authorsNote",
      position: Bs(ia.position)
    });
    const ar = O.extensionPrompts["3_vectors"];
    ar && ar.value && bn.push({
      role: "system",
      content: ar.value,
      identifier: "vectorsMemory",
      position: Bs(ar.position)
    });
    const Yn = O.extensionPrompts["4_vectors_data_bank"];
    Yn && Yn.value && bn.push({
      role: ka(Yn.role),
      content: Yn.value,
      identifier: "vectorsDataBank",
      position: Bs(Yn.position)
    });
    const Sn = O.extensionPrompts.chromadb;
    Sn && Sn.value && bn.push({
      role: "system",
      content: Sn.value,
      identifier: "smartContext",
      position: Bs(Sn.position)
    }), !p && O.powerUserSettings.persona_description && O.powerUserSettings.persona_description_position === iv.IN_PROMPT && bn.push({
      role: "system",
      content: O.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), Vn.order.forEach((Vt) => {
      if (!Vt.enabled)
        return;
      const Qt = ye(Vt.identifier);
      if (Qt && Qt.content) {
        U.add({
          role: Qt.role ?? "system",
          content: O.substituteParams(Qt.content)
        });
        return;
      }
      Vt.identifier === "chatHistory" && Fe();
    });
  }
  const Rn = [
    "1_memory",
    "2_floating_prompt",
    "3_vectors",
    "4_vectors_data_bank",
    "chromadb",
    "PERSONA_DESCRIPTION",
    "QUIET_PROMPT",
    "DEPTH_PROMPT"
  ];
  for (const ye in O.extensionPrompts)
    if (Object.hasOwn(O.extensionPrompts, ye)) {
      const _e = O.extensionPrompts[ye];
      if (Rn.includes(ye) || !O.extensionPrompts[ye].value || ![Ca.BEFORE_PROMPT, Ca.IN_PROMPT].includes(_e.position) || typeof _e.filter == "function" && !await _e.filter()) continue;
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
    const ye = p3(Ft, Number(sn));
    if (Ft && Array.isArray(ye) && ye.length > 0)
      ye.filter((_e) => _e.text).forEach((_e, qe) => {
        const Ze = U.getMessages();
        U.insert(Ze.length - _e.depth, { role: _e.role, content: _e.text });
      });
    else {
      const _e = ku(
        (y = (l = (L = (T = (M = O.characters[sn]) == null ? void 0 : M.data) == null ? void 0 : T.extensions) == null ? void 0 : L.depth_prompt) == null ? void 0 : l.prompt) == null ? void 0 : y.trim(),
        Ea,
        Fr
      ) || "";
      if (_e) {
        const qe = U1, Ze = ((P = (R = (k = (w = O.characters[sn]) == null ? void 0 : w.data) == null ? void 0 : k.extensions) == null ? void 0 : R.depth_prompt) == null ? void 0 : P.role) ?? B1, et = U.getMessages();
        U.insert(et.length - qe, {
          role: ka(Ze),
          content: _e
        });
      }
    }
  }
  let dt = -1;
  if (!b) {
    const ye = h3();
    if (ye.prompt) {
      ye.prompt = ku(ye.prompt, Ea, Fr);
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
  return dt >= 0 && (Pe.length > 0 && (U.insert(dt, { role: "system", content: Pe.join(`
`) }), dt++), We.length > 0 && U.insert(dt + 1, { role: "system", content: We.join(`
`) })), { result: U.getMessages(), warnings: ce };
}
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Nv(n, r) {
  var s = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    r && (a = a.filter(function(u) {
      return Object.getOwnPropertyDescriptor(n, u).enumerable;
    })), s.push.apply(s, a);
  }
  return s;
}
function nr(n) {
  for (var r = 1; r < arguments.length; r++) {
    var s = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Nv(Object(s), !0).forEach(function(a) {
      k3(n, a, s[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : Nv(Object(s)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(s, a));
    });
  }
  return n;
}
function cl(n) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? cl = function(r) {
    return typeof r;
  } : cl = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, cl(n);
}
function k3(n, r, s) {
  return r in n ? Object.defineProperty(n, r, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[r] = s, n;
}
function Cr() {
  return Cr = Object.assign || function(n) {
    for (var r = 1; r < arguments.length; r++) {
      var s = arguments[r];
      for (var a in s)
        Object.prototype.hasOwnProperty.call(s, a) && (n[a] = s[a]);
    }
    return n;
  }, Cr.apply(this, arguments);
}
function A3(n, r) {
  if (n == null) return {};
  var s = {}, a = Object.keys(n), u, c;
  for (c = 0; c < a.length; c++)
    u = a[c], !(r.indexOf(u) >= 0) && (s[u] = n[u]);
  return s;
}
function x3(n, r) {
  if (n == null) return {};
  var s = A3(n, r), a, u;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    for (u = 0; u < c.length; u++)
      a = c[u], !(r.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(n, a) && (s[a] = n[a]);
  }
  return s;
}
var T3 = "1.15.6";
function wr(n) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(n);
}
var kr = wr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), oo = wr(/Edge/i), Ov = wr(/firefox/i), eo = wr(/safari/i) && !wr(/chrome/i) && !wr(/android/i), eh = wr(/iP(ad|od|hone)/i), v0 = wr(/chrome/i) && wr(/android/i), y0 = {
  capture: !1,
  passive: !1
};
function He(n, r, s) {
  n.addEventListener(r, s, !kr && y0);
}
function Ue(n, r, s) {
  n.removeEventListener(r, s, !kr && y0);
}
function bl(n, r) {
  if (r) {
    if (r[0] === ">" && (r = r.substring(1)), n)
      try {
        if (n.matches)
          return n.matches(r);
        if (n.msMatchesSelector)
          return n.msMatchesSelector(r);
        if (n.webkitMatchesSelector)
          return n.webkitMatchesSelector(r);
      } catch {
        return !1;
      }
    return !1;
  }
}
function _0(n) {
  return n.host && n !== document && n.host.nodeType ? n.host : n.parentNode;
}
function Hn(n, r, s, a) {
  if (n) {
    s = s || document;
    do {
      if (r != null && (r[0] === ">" ? n.parentNode === s && bl(n, r) : bl(n, r)) || a && n === s)
        return n;
      if (n === s) break;
    } while (n = _0(n));
  }
  return null;
}
var Mv = /\s+/g;
function gn(n, r, s) {
  if (n && r)
    if (n.classList)
      n.classList[s ? "add" : "remove"](r);
    else {
      var a = (" " + n.className + " ").replace(Mv, " ").replace(" " + r + " ", " ");
      n.className = (a + (s ? " " + r : "")).replace(Mv, " ");
    }
}
function xe(n, r, s) {
  var a = n && n.style;
  if (a) {
    if (s === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? s = document.defaultView.getComputedStyle(n, "") : n.currentStyle && (s = n.currentStyle), r === void 0 ? s : s[r];
    !(r in a) && r.indexOf("webkit") === -1 && (r = "-webkit-" + r), a[r] = s + (typeof s == "string" ? "" : "px");
  }
}
function Li(n, r) {
  var s = "";
  if (typeof n == "string")
    s = n;
  else
    do {
      var a = xe(n, "transform");
      a && a !== "none" && (s = a + " " + s);
    } while (!r && (n = n.parentNode));
  var u = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return u && new u(s);
}
function b0(n, r, s) {
  if (n) {
    var a = n.getElementsByTagName(r), u = 0, c = a.length;
    if (s)
      for (; u < c; u++)
        s(a[u], u);
    return a;
  }
  return [];
}
function er() {
  var n = document.scrollingElement;
  return n || document.documentElement;
}
function wt(n, r, s, a, u) {
  if (!(!n.getBoundingClientRect && n !== window)) {
    var c, f, m, p, b, g, E;
    if (n !== window && n.parentNode && n !== er() ? (c = n.getBoundingClientRect(), f = c.top, m = c.left, p = c.bottom, b = c.right, g = c.height, E = c.width) : (f = 0, m = 0, p = window.innerHeight, b = window.innerWidth, g = window.innerHeight, E = window.innerWidth), (r || s) && n !== window && (u = u || n.parentNode, !kr))
      do
        if (u && u.getBoundingClientRect && (xe(u, "transform") !== "none" || s && xe(u, "position") !== "static")) {
          var v = u.getBoundingClientRect();
          f -= v.top + parseInt(xe(u, "border-top-width")), m -= v.left + parseInt(xe(u, "border-left-width")), p = f + c.height, b = m + c.width;
          break;
        }
      while (u = u.parentNode);
    if (a && n !== window) {
      var S = Li(u || n), h = S && S.a, C = S && S.d;
      S && (f /= C, m /= h, E /= h, g /= C, p = f + g, b = m + E);
    }
    return {
      top: f,
      left: m,
      bottom: p,
      right: b,
      width: E,
      height: g
    };
  }
}
function jv(n, r, s) {
  for (var a = ea(n, !0), u = wt(n)[r]; a; ) {
    var c = wt(a)[s], f = void 0;
    if (f = u >= c, !f) return a;
    if (a === er()) break;
    a = ea(a, !1);
  }
  return !1;
}
function Ii(n, r, s, a) {
  for (var u = 0, c = 0, f = n.children; c < f.length; ) {
    if (f[c].style.display !== "none" && f[c] !== Te.ghost && (a || f[c] !== Te.dragged) && Hn(f[c], s.draggable, n, !1)) {
      if (u === r)
        return f[c];
      u++;
    }
    c++;
  }
  return null;
}
function th(n, r) {
  for (var s = n.lastElementChild; s && (s === Te.ghost || xe(s, "display") === "none" || r && !bl(s, r)); )
    s = s.previousElementSibling;
  return s || null;
}
function Mn(n, r) {
  var s = 0;
  if (!n || !n.parentNode)
    return -1;
  for (; n = n.previousElementSibling; )
    n.nodeName.toUpperCase() !== "TEMPLATE" && n !== Te.clone && (!r || bl(n, r)) && s++;
  return s;
}
function Rv(n) {
  var r = 0, s = 0, a = er();
  if (n)
    do {
      var u = Li(n), c = u.a, f = u.d;
      r += n.scrollLeft * c, s += n.scrollTop * f;
    } while (n !== a && (n = n.parentNode));
  return [r, s];
}
function N3(n, r) {
  for (var s in n)
    if (n.hasOwnProperty(s)) {
      for (var a in r)
        if (r.hasOwnProperty(a) && r[a] === n[s][a]) return Number(s);
    }
  return -1;
}
function ea(n, r) {
  if (!n || !n.getBoundingClientRect) return er();
  var s = n, a = !1;
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
function O3(n, r) {
  if (n && r)
    for (var s in r)
      r.hasOwnProperty(s) && (n[s] = r[s]);
  return n;
}
function nf(n, r) {
  return Math.round(n.top) === Math.round(r.top) && Math.round(n.left) === Math.round(r.left) && Math.round(n.height) === Math.round(r.height) && Math.round(n.width) === Math.round(r.width);
}
var to;
function S0(n, r) {
  return function() {
    if (!to) {
      var s = arguments, a = this;
      s.length === 1 ? n.call(a, s[0]) : n.apply(a, s), to = setTimeout(function() {
        to = void 0;
      }, r);
    }
  };
}
function M3() {
  clearTimeout(to), to = void 0;
}
function w0(n, r, s) {
  n.scrollLeft += r, n.scrollTop += s;
}
function E0(n) {
  var r = window.Polymer, s = window.jQuery || window.Zepto;
  return r && r.dom ? r.dom(n).cloneNode(!0) : s ? s(n).clone(!0)[0] : n.cloneNode(!0);
}
function C0(n, r, s) {
  var a = {};
  return Array.from(n.children).forEach(function(u) {
    var c, f, m, p;
    if (!(!Hn(u, r.draggable, n, !1) || u.animated || u === s)) {
      var b = wt(u);
      a.left = Math.min((c = a.left) !== null && c !== void 0 ? c : 1 / 0, b.left), a.top = Math.min((f = a.top) !== null && f !== void 0 ? f : 1 / 0, b.top), a.right = Math.max((m = a.right) !== null && m !== void 0 ? m : -1 / 0, b.right), a.bottom = Math.max((p = a.bottom) !== null && p !== void 0 ? p : -1 / 0, b.bottom);
    }
  }), a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
var an = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function j3() {
  var n = [], r;
  return {
    captureAnimationState: function() {
      if (n = [], !!this.options.animation) {
        var a = [].slice.call(this.el.children);
        a.forEach(function(u) {
          if (!(xe(u, "display") === "none" || u === Te.ghost)) {
            n.push({
              target: u,
              rect: wt(u)
            });
            var c = nr({}, n[n.length - 1].rect);
            if (u.thisAnimationDuration) {
              var f = Li(u, !0);
              f && (c.top -= f.f, c.left -= f.e);
            }
            u.fromRect = c;
          }
        });
      }
    },
    addAnimationState: function(a) {
      n.push(a);
    },
    removeAnimationState: function(a) {
      n.splice(N3(n, {
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
      n.forEach(function(m) {
        var p = 0, b = m.target, g = b.fromRect, E = wt(b), v = b.prevFromRect, S = b.prevToRect, h = m.rect, C = Li(b, !0);
        C && (E.top -= C.f, E.left -= C.e), b.toRect = E, b.thisAnimationDuration && nf(v, E) && !nf(g, E) && // Make sure animatingRect is on line between toRect & fromRect
        (h.top - E.top) / (h.left - E.left) === (g.top - E.top) / (g.left - E.left) && (p = D3(h, v, S, u.options)), nf(E, g) || (b.prevFromRect = g, b.prevToRect = E, p || (p = u.options.animation), u.animate(b, h, E, p)), p && (c = !0, f = Math.max(f, p), clearTimeout(b.animationResetTimer), b.animationResetTimer = setTimeout(function() {
          b.animationTime = 0, b.prevFromRect = null, b.fromRect = null, b.prevToRect = null, b.thisAnimationDuration = null;
        }, p), b.thisAnimationDuration = p);
      }), clearTimeout(r), c ? r = setTimeout(function() {
        typeof a == "function" && a();
      }, f) : typeof a == "function" && a(), n = [];
    },
    animate: function(a, u, c, f) {
      if (f) {
        xe(a, "transition", ""), xe(a, "transform", "");
        var m = Li(this.el), p = m && m.a, b = m && m.d, g = (u.left - c.left) / (p || 1), E = (u.top - c.top) / (b || 1);
        a.animatingX = !!g, a.animatingY = !!E, xe(a, "transform", "translate3d(" + g + "px," + E + "px,0)"), this.forRepaintDummy = R3(a), xe(a, "transition", "transform " + f + "ms" + (this.options.easing ? " " + this.options.easing : "")), xe(a, "transform", "translate3d(0,0,0)"), typeof a.animated == "number" && clearTimeout(a.animated), a.animated = setTimeout(function() {
          xe(a, "transition", ""), xe(a, "transform", ""), a.animated = !1, a.animatingX = !1, a.animatingY = !1;
        }, f);
      }
    }
  };
}
function R3(n) {
  return n.offsetWidth;
}
function D3(n, r, s, a) {
  return Math.sqrt(Math.pow(r.top - n.top, 2) + Math.pow(r.left - n.left, 2)) / Math.sqrt(Math.pow(r.top - s.top, 2) + Math.pow(r.left - s.left, 2)) * a.animation;
}
var xi = [], rf = {
  initializeByDefault: !0
}, uo = {
  mount: function(r) {
    for (var s in rf)
      rf.hasOwnProperty(s) && !(s in r) && (r[s] = rf[s]);
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
        var b = new m(r, s, r.options);
        b.sortable = r, b.options = r.options, r[p] = b, Cr(a, b.defaults);
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
function z3(n) {
  var r = n.sortable, s = n.rootEl, a = n.name, u = n.targetEl, c = n.cloneEl, f = n.toEl, m = n.fromEl, p = n.oldIndex, b = n.newIndex, g = n.oldDraggableIndex, E = n.newDraggableIndex, v = n.originalEvent, S = n.putSortable, h = n.extraEventProperties;
  if (r = r || s && s[an], !!r) {
    var C, x = r.options, M = "on" + a.charAt(0).toUpperCase() + a.substr(1);
    window.CustomEvent && !kr && !oo ? C = new CustomEvent(a, {
      bubbles: !0,
      cancelable: !0
    }) : (C = document.createEvent("Event"), C.initEvent(a, !0, !0)), C.to = f || s, C.from = m || s, C.item = u || s, C.clone = c, C.oldIndex = p, C.newIndex = b, C.oldDraggableIndex = g, C.newDraggableIndex = E, C.originalEvent = v, C.pullMode = S ? S.lastPutMode : void 0;
    var T = nr(nr({}, h), uo.getEventProperties(a, r));
    for (var L in T)
      C[L] = T[L];
    s && s.dispatchEvent(C), x[M] && x[M].call(r, C);
  }
}
var L3 = ["evt"], nn = function(r, s) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u = a.evt, c = x3(a, L3);
  uo.pluginEvent.bind(Te)(r, s, nr({
    dragEl: he,
    parentEl: pt,
    ghostEl: Me,
    rootEl: it,
    nextEl: Oa,
    lastDownEl: dl,
    cloneEl: lt,
    cloneHidden: Wr,
    dragStarted: Xs,
    putSortable: Lt,
    activeSortable: Te.active,
    originalEvent: u,
    oldIndex: Di,
    oldDraggableIndex: no,
    newIndex: vn,
    newDraggableIndex: Jr,
    hideGhostForTarget: T0,
    unhideGhostForTarget: N0,
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
function Yt(n) {
  z3(nr({
    putSortable: Lt,
    cloneEl: lt,
    targetEl: he,
    rootEl: it,
    oldIndex: Di,
    oldDraggableIndex: no,
    newIndex: vn,
    newDraggableIndex: Jr
  }, n));
}
var he, pt, Me, it, Oa, dl, lt, Wr, Di, vn, no, Jr, xu, Lt, Ri = !1, Sl = !1, wl = [], Aa, In, af, sf, Dv, zv, Xs, Ti, ro, ao = !1, Tu = !1, fl, qt, of = [], Of = !1, El = [], Ol = typeof document < "u", Nu = eh, Lv = oo || kr ? "cssFloat" : "float", P3 = Ol && !v0 && !eh && "draggable" in document.createElement("div"), k0 = (function() {
  if (Ol) {
    if (kr)
      return !1;
    var n = document.createElement("x");
    return n.style.cssText = "pointer-events:auto", n.style.pointerEvents === "auto";
  }
})(), A0 = function(r, s) {
  var a = xe(r), u = parseInt(a.width) - parseInt(a.paddingLeft) - parseInt(a.paddingRight) - parseInt(a.borderLeftWidth) - parseInt(a.borderRightWidth), c = Ii(r, 0, s), f = Ii(r, 1, s), m = c && xe(c), p = f && xe(f), b = m && parseInt(m.marginLeft) + parseInt(m.marginRight) + wt(c).width, g = p && parseInt(p.marginLeft) + parseInt(p.marginRight) + wt(f).width;
  if (a.display === "flex")
    return a.flexDirection === "column" || a.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (a.display === "grid")
    return a.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (c && m.float && m.float !== "none") {
    var E = m.float === "left" ? "left" : "right";
    return f && (p.clear === "both" || p.clear === E) ? "vertical" : "horizontal";
  }
  return c && (m.display === "block" || m.display === "flex" || m.display === "table" || m.display === "grid" || b >= u && a[Lv] === "none" || f && a[Lv] === "none" && b + g > u) ? "vertical" : "horizontal";
}, I3 = function(r, s, a) {
  var u = a ? r.left : r.top, c = a ? r.right : r.bottom, f = a ? r.width : r.height, m = a ? s.left : s.top, p = a ? s.right : s.bottom, b = a ? s.width : s.height;
  return u === m || c === p || u + f / 2 === m + b / 2;
}, B3 = function(r, s) {
  var a;
  return wl.some(function(u) {
    var c = u[an].options.emptyInsertThreshold;
    if (!(!c || th(u))) {
      var f = wt(u), m = r >= f.left - c && r <= f.right + c, p = s >= f.top - c && s <= f.bottom + c;
      if (m && p)
        return a = u;
    }
  }), a;
}, x0 = function(r) {
  function s(c, f) {
    return function(m, p, b, g) {
      var E = m.options.group.name && p.options.group.name && m.options.group.name === p.options.group.name;
      if (c == null && (f || E))
        return !0;
      if (c == null || c === !1)
        return !1;
      if (f && c === "clone")
        return c;
      if (typeof c == "function")
        return s(c(m, p, b, g), f)(m, p, b, g);
      var v = (f ? m : p).options.group.name;
      return c === !0 || typeof c == "string" && c === v || c.join && c.indexOf(v) > -1;
    };
  }
  var a = {}, u = r.group;
  (!u || cl(u) != "object") && (u = {
    name: u
  }), a.name = u.name, a.checkPull = s(u.pull, !0), a.checkPut = s(u.put), a.revertClone = u.revertClone, r.group = a;
}, T0 = function() {
  !k0 && Me && xe(Me, "display", "none");
}, N0 = function() {
  !k0 && Me && xe(Me, "display", "");
};
Ol && !v0 && document.addEventListener("click", function(n) {
  if (Sl)
    return n.preventDefault(), n.stopPropagation && n.stopPropagation(), n.stopImmediatePropagation && n.stopImmediatePropagation(), Sl = !1, !1;
}, !0);
var xa = function(r) {
  if (he) {
    r = r.touches ? r.touches[0] : r;
    var s = B3(r.clientX, r.clientY);
    if (s) {
      var a = {};
      for (var u in r)
        r.hasOwnProperty(u) && (a[u] = r[u]);
      a.target = a.rootEl = s, a.preventDefault = void 0, a.stopPropagation = void 0, s[an]._onDragOver(a);
    }
  }
}, U3 = function(r) {
  he && he.parentNode[an]._isOutsideThisEl(r.target);
};
function Te(n, r) {
  if (!(n && n.nodeType && n.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(n));
  this.el = n, this.options = r = Cr({}, r), n[an] = this;
  var s = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(n.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return A0(n, this.options);
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
    supportPointer: Te.supportPointer !== !1 && "PointerEvent" in window && (!eo || eh),
    emptyInsertThreshold: 5
  };
  uo.initializePlugins(this, n, s);
  for (var a in s)
    !(a in r) && (r[a] = s[a]);
  x0(r);
  for (var u in this)
    u.charAt(0) === "_" && typeof this[u] == "function" && (this[u] = this[u].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : P3, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? He(n, "pointerdown", this._onTapStart) : (He(n, "mousedown", this._onTapStart), He(n, "touchstart", this._onTapStart)), this.nativeDraggable && (He(n, "dragover", this), He(n, "dragenter", this)), wl.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), Cr(this, j3());
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
      var s = this, a = this.el, u = this.options, c = u.preventOnFilter, f = r.type, m = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, p = (m || r).target, b = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || p, g = u.filter;
      if (X3(a), !he && !(/mousedown|pointerdown/.test(f) && r.button !== 0 || u.disabled) && !b.isContentEditable && !(!this.nativeDraggable && eo && p && p.tagName.toUpperCase() === "SELECT") && (p = Hn(p, u.draggable, a, !1), !(p && p.animated) && dl !== p)) {
        if (Di = Mn(p), no = Mn(p, u.draggable), typeof g == "function") {
          if (g.call(this, r, p, this)) {
            Yt({
              sortable: s,
              rootEl: b,
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
          if (E = Hn(b, E.trim(), a, !1), E)
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
        u.handle && !Hn(b, u.handle, a, !1) || this._prepareDragStart(r, m, p);
      }
    }
  },
  _prepareDragStart: function(r, s, a) {
    var u = this, c = u.el, f = u.options, m = c.ownerDocument, p;
    if (a && !he && a.parentNode === c) {
      var b = wt(a);
      if (it = c, he = a, pt = he.parentNode, Oa = he.nextSibling, dl = a, xu = f.group, Te.dragged = he, Aa = {
        target: he,
        clientX: (s || r).clientX,
        clientY: (s || r).clientY
      }, Dv = Aa.clientX - b.left, zv = Aa.clientY - b.top, this._lastX = (s || r).clientX, this._lastY = (s || r).clientY, he.style["will-change"] = "all", p = function() {
        if (nn("delayEnded", u, {
          evt: r
        }), Te.eventCanceled) {
          u._onDrop();
          return;
        }
        u._disableDelayedDragEvents(), !Ov && u.nativeDraggable && (he.draggable = !0), u._triggerDragStart(r, s), Yt({
          sortable: u,
          name: "choose",
          originalEvent: r
        }), gn(he, f.chosenClass, !0);
      }, f.ignore.split(",").forEach(function(g) {
        b0(he, g.trim(), uf);
      }), He(m, "dragover", xa), He(m, "mousemove", xa), He(m, "touchmove", xa), f.supportPointer ? (He(m, "pointerup", u._onDrop), !this.nativeDraggable && He(m, "pointercancel", u._onDrop)) : (He(m, "mouseup", u._onDrop), He(m, "touchend", u._onDrop), He(m, "touchcancel", u._onDrop)), Ov && this.nativeDraggable && (this.options.touchStartThreshold = 4, he.draggable = !0), nn("delayStart", this, {
        evt: r
      }), f.delay && (!f.delayOnTouchOnly || s) && (!this.nativeDraggable || !(oo || kr))) {
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
    he && uf(he), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    Ue(r, "mouseup", this._disableDelayedDrag), Ue(r, "touchend", this._disableDelayedDrag), Ue(r, "touchcancel", this._disableDelayedDrag), Ue(r, "pointerup", this._disableDelayedDrag), Ue(r, "pointercancel", this._disableDelayedDrag), Ue(r, "mousemove", this._delayedDragTouchMoveHandler), Ue(r, "touchmove", this._delayedDragTouchMoveHandler), Ue(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, s) {
    s = s || r.pointerType == "touch" && r, !this.nativeDraggable || s ? this.options.supportPointer ? He(document, "pointermove", this._onTouchMove) : s ? He(document, "touchmove", this._onTouchMove) : He(document, "mousemove", this._onTouchMove) : (He(he, "dragend", this), He(it, "dragstart", this._onDragStart));
    try {
      document.selection ? hl(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, s) {
    if (Ri = !1, it && he) {
      nn("dragStarted", this, {
        evt: s
      }), this.nativeDraggable && He(document, "dragover", U3);
      var a = this.options;
      !r && gn(he, a.dragClass, !1), gn(he, a.ghostClass, !0), Te.active = this, r && this._appendGhost(), Yt({
        sortable: this,
        name: "start",
        originalEvent: s
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (In) {
      this._lastX = In.clientX, this._lastY = In.clientY, T0();
      for (var r = document.elementFromPoint(In.clientX, In.clientY), s = r; r && r.shadowRoot && (r = r.shadowRoot.elementFromPoint(In.clientX, In.clientY), r !== s); )
        s = r;
      if (he.parentNode[an]._isOutsideThisEl(r), s)
        do {
          if (s[an]) {
            var a = void 0;
            if (a = s[an]._onDragOver({
              clientX: In.clientX,
              clientY: In.clientY,
              target: r,
              rootEl: s
            }), a && !this.options.dragoverBubble)
              break;
          }
          r = s;
        } while (s = _0(s));
      N0();
    }
  },
  _onTouchMove: function(r) {
    if (Aa) {
      var s = this.options, a = s.fallbackTolerance, u = s.fallbackOffset, c = r.touches ? r.touches[0] : r, f = Me && Li(Me, !0), m = Me && f && f.a, p = Me && f && f.d, b = Nu && qt && Rv(qt), g = (c.clientX - Aa.clientX + u.x) / (m || 1) + (b ? b[0] - of[0] : 0) / (m || 1), E = (c.clientY - Aa.clientY + u.y) / (p || 1) + (b ? b[1] - of[1] : 0) / (p || 1);
      if (!Te.active && !Ri) {
        if (a && Math.max(Math.abs(c.clientX - this._lastX), Math.abs(c.clientY - this._lastY)) < a)
          return;
        this._onDragStart(r, !0);
      }
      if (Me) {
        f ? (f.e += g - (af || 0), f.f += E - (sf || 0)) : f = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: g,
          f: E
        };
        var v = "matrix(".concat(f.a, ",").concat(f.b, ",").concat(f.c, ",").concat(f.d, ",").concat(f.e, ",").concat(f.f, ")");
        xe(Me, "webkitTransform", v), xe(Me, "mozTransform", v), xe(Me, "msTransform", v), xe(Me, "transform", v), af = g, sf = E, In = c;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Me) {
      var r = this.options.fallbackOnBody ? document.body : it, s = wt(he, !0, Nu, !0, r), a = this.options;
      if (Nu) {
        for (qt = r; xe(qt, "position") === "static" && xe(qt, "transform") === "none" && qt !== document; )
          qt = qt.parentNode;
        qt !== document.body && qt !== document.documentElement ? (qt === document && (qt = er()), s.top += qt.scrollTop, s.left += qt.scrollLeft) : qt = er(), of = Rv(qt);
      }
      Me = he.cloneNode(!0), gn(Me, a.ghostClass, !1), gn(Me, a.fallbackClass, !0), gn(Me, a.dragClass, !0), xe(Me, "transition", ""), xe(Me, "transform", ""), xe(Me, "box-sizing", "border-box"), xe(Me, "margin", 0), xe(Me, "top", s.top), xe(Me, "left", s.left), xe(Me, "width", s.width), xe(Me, "height", s.height), xe(Me, "opacity", "0.8"), xe(Me, "position", Nu ? "absolute" : "fixed"), xe(Me, "zIndex", "100000"), xe(Me, "pointerEvents", "none"), Te.ghost = Me, r.appendChild(Me), xe(Me, "transform-origin", Dv / parseInt(Me.style.width) * 100 + "% " + zv / parseInt(Me.style.height) * 100 + "%");
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
    nn("setupClone", this), Te.eventCanceled || (lt = E0(he), lt.removeAttribute("id"), lt.draggable = !1, lt.style["will-change"] = "", this._hideClone(), gn(lt, this.options.chosenClass, !1), Te.clone = lt), a.cloneId = hl(function() {
      nn("clone", a), !Te.eventCanceled && (a.options.removeCloneOnHide || it.insertBefore(lt, he), a._hideClone(), Yt({
        sortable: a,
        name: "clone"
      }));
    }), !s && gn(he, c.dragClass, !0), s ? (Sl = !0, a._loopId = setInterval(a._emulateDragOver, 50)) : (Ue(document, "mouseup", a._onDrop), Ue(document, "touchend", a._onDrop), Ue(document, "touchcancel", a._onDrop), u && (u.effectAllowed = "move", c.setData && c.setData.call(a, u, he)), He(document, "drop", a), xe(he, "transform", "translateZ(0)")), Ri = !0, a._dragStartId = hl(a._dragStarted.bind(a, s, r)), He(document, "selectstart", a), Xs = !0, window.getSelection().removeAllRanges(), eo && xe(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var s = this.el, a = r.target, u, c, f, m = this.options, p = m.group, b = Te.active, g = xu === p, E = m.sort, v = Lt || b, S, h = this, C = !1;
    if (Of) return;
    function x(K, ae) {
      nn(K, h, nr({
        evt: r,
        isOwner: g,
        axis: S ? "vertical" : "horizontal",
        revert: f,
        dragRect: u,
        targetRect: c,
        canSort: E,
        fromSortable: v,
        target: a,
        completed: T,
        onMove: function(X, ce) {
          return Ou(it, s, he, u, X, wt(X), r, ce);
        },
        changed: L
      }, ae));
    }
    function M() {
      x("dragOverAnimationCapture"), h.captureAnimationState(), h !== v && v.captureAnimationState();
    }
    function T(K) {
      return x("dragOverCompleted", {
        insertion: K
      }), K && (g ? b._hideClone() : b._showClone(h), h !== v && (gn(he, Lt ? Lt.options.ghostClass : b.options.ghostClass, !1), gn(he, m.ghostClass, !0)), Lt !== h && h !== Te.active ? Lt = h : h === Te.active && Lt && (Lt = null), v === h && (h._ignoreWhileAnimating = a), h.animateAll(function() {
        x("dragOverAnimationComplete"), h._ignoreWhileAnimating = null;
      }), h !== v && (v.animateAll(), v._ignoreWhileAnimating = null)), (a === he && !he.animated || a === s && !a.animated) && (Ti = null), !m.dragoverBubble && !r.rootEl && a !== document && (he.parentNode[an]._isOutsideThisEl(r.target), !K && xa(r)), !m.dragoverBubble && r.stopPropagation && r.stopPropagation(), C = !0;
    }
    function L() {
      vn = Mn(he), Jr = Mn(he, m.draggable), Yt({
        sortable: h,
        name: "change",
        toEl: s,
        newIndex: vn,
        newDraggableIndex: Jr,
        originalEvent: r
      });
    }
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), a = Hn(a, m.draggable, s, !0), x("dragOver"), Te.eventCanceled) return C;
    if (he.contains(r.target) || a.animated && a.animatingX && a.animatingY || h._ignoreWhileAnimating === a)
      return T(!1);
    if (Sl = !1, b && !m.disabled && (g ? E || (f = pt !== it) : Lt === this || (this.lastPutMode = xu.checkPull(this, b, he, r)) && p.checkPut(this, b, he, r))) {
      if (S = this._getDirection(r, a) === "vertical", u = wt(he), x("dragOverValid"), Te.eventCanceled) return C;
      if (f)
        return pt = it, M(), this._hideClone(), x("revert"), Te.eventCanceled || (Oa ? it.insertBefore(he, Oa) : it.appendChild(he)), T(!0);
      var l = th(s, m.draggable);
      if (!l || G3(r, S, this) && !l.animated) {
        if (l === he)
          return T(!1);
        if (l && s === r.target && (a = l), a && (c = wt(a)), Ou(it, s, he, u, a, c, r, !!a) !== !1)
          return M(), l && l.nextSibling ? s.insertBefore(he, l.nextSibling) : s.appendChild(he), pt = s, L(), T(!0);
      } else if (l && Z3(r, S, this)) {
        var y = Ii(s, 0, m, !0);
        if (y === he)
          return T(!1);
        if (a = y, c = wt(a), Ou(it, s, he, u, a, c, r, !1) !== !1)
          return M(), s.insertBefore(he, y), pt = s, L(), T(!0);
      } else if (a.parentNode === s) {
        c = wt(a);
        var w = 0, k, R = he.parentNode !== s, P = !I3(he.animated && he.toRect || u, a.animated && a.toRect || c, S), O = S ? "top" : "left", z = jv(a, "top", "top") || jv(he, "top", "top"), q = z ? z.scrollTop : void 0;
        Ti !== a && (k = c[O], ao = !1, Tu = !P && m.invertSwap || R), w = V3(r, a, c, S, P ? 1 : m.swapThreshold, m.invertedSwapThreshold == null ? m.swapThreshold : m.invertedSwapThreshold, Tu, Ti === a);
        var Y;
        if (w !== 0) {
          var G = Mn(he);
          do
            G -= w, Y = pt.children[G];
          while (Y && (xe(Y, "display") === "none" || Y === Me));
        }
        if (w === 0 || Y === a)
          return T(!1);
        Ti = a, ro = w;
        var W = a.nextElementSibling, j = !1;
        j = w === 1;
        var B = Ou(it, s, he, u, a, c, r, j);
        if (B !== !1)
          return (B === 1 || B === -1) && (j = B === 1), Of = !0, setTimeout(q3, 30), M(), j && !W ? s.appendChild(he) : a.parentNode.insertBefore(he, j ? W : a), z && w0(z, 0, q - z.scrollTop), pt = he.parentNode, k !== void 0 && !Tu && (fl = Math.abs(k - wt(a)[O])), L(), T(!0);
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
    if (vn = Mn(he), Jr = Mn(he, a.draggable), nn("drop", this, {
      evt: r
    }), pt = he && he.parentNode, vn = Mn(he), Jr = Mn(he, a.draggable), Te.eventCanceled) {
      this._nulling();
      return;
    }
    Ri = !1, Tu = !1, ao = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Mf(this.cloneId), Mf(this._dragStartId), this.nativeDraggable && (Ue(document, "drop", this), Ue(s, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), eo && xe(document.body, "user-select", ""), xe(he, "transform", ""), r && (Xs && (r.cancelable && r.preventDefault(), !a.dropBubble && r.stopPropagation()), Me && Me.parentNode && Me.parentNode.removeChild(Me), (it === pt || Lt && Lt.lastPutMode !== "clone") && lt && lt.parentNode && lt.parentNode.removeChild(lt), he && (this.nativeDraggable && Ue(he, "dragend", this), uf(he), he.style["will-change"] = "", Xs && !Ri && gn(he, Lt ? Lt.options.ghostClass : this.options.ghostClass, !1), gn(he, this.options.chosenClass, !1), Yt({
      sortable: this,
      name: "unchoose",
      toEl: pt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: r
    }), it !== pt ? (vn >= 0 && (Yt({
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
    })), Lt && Lt.save()) : vn !== Di && vn >= 0 && (Yt({
      sortable: this,
      name: "update",
      toEl: pt,
      originalEvent: r
    }), Yt({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: r
    })), Te.active && ((vn == null || vn === -1) && (vn = Di, Jr = no), Yt({
      sortable: this,
      name: "end",
      toEl: pt,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    nn("nulling", this), it = he = pt = Me = Oa = lt = dl = Wr = Aa = In = Xs = vn = Jr = Di = no = Ti = ro = Lt = xu = Te.dragged = Te.ghost = Te.clone = Te.active = null, El.forEach(function(r) {
      r.checked = !0;
    }), El.length = af = sf = 0;
  },
  handleEvent: function(r) {
    switch (r.type) {
      case "drop":
      case "dragend":
        this._onDrop(r);
        break;
      case "dragenter":
      case "dragover":
        he && (this._onDragOver(r), H3(r));
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
      s = a[u], Hn(s, f.draggable, this.el, !1) && r.push(s.getAttribute(f.dataIdAttr) || Y3(s));
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
      Hn(m, this.options.draggable, u, !1) && (a[c] = m);
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
    return Hn(r, s || this.options.draggable, this.el, !1);
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
    var u = uo.modifyOption(this, r, s);
    typeof u < "u" ? a[r] = u : a[r] = s, r === "group" && x0(a);
  },
  /**
   * Destroy
   */
  destroy: function() {
    nn("destroy", this);
    var r = this.el;
    r[an] = null, Ue(r, "mousedown", this._onTapStart), Ue(r, "touchstart", this._onTapStart), Ue(r, "pointerdown", this._onTapStart), this.nativeDraggable && (Ue(r, "dragover", this), Ue(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(s) {
      s.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), wl.splice(wl.indexOf(this.el), 1), this.el = r = null;
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
function H3(n) {
  n.dataTransfer && (n.dataTransfer.dropEffect = "move"), n.cancelable && n.preventDefault();
}
function Ou(n, r, s, a, u, c, f, m) {
  var p, b = n[an], g = b.options.onMove, E;
  return window.CustomEvent && !kr && !oo ? p = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (p = document.createEvent("Event"), p.initEvent("move", !0, !0)), p.to = r, p.from = n, p.dragged = s, p.draggedRect = a, p.related = u || r, p.relatedRect = c || wt(r), p.willInsertAfter = m, p.originalEvent = f, n.dispatchEvent(p), g && (E = g.call(b, p, f)), E;
}
function uf(n) {
  n.draggable = !1;
}
function q3() {
  Of = !1;
}
function Z3(n, r, s) {
  var a = wt(Ii(s.el, 0, s.options, !0)), u = C0(s.el, s.options, Me), c = 10;
  return r ? n.clientX < u.left - c || n.clientY < a.top && n.clientX < a.right : n.clientY < u.top - c || n.clientY < a.bottom && n.clientX < a.left;
}
function G3(n, r, s) {
  var a = wt(th(s.el, s.options.draggable)), u = C0(s.el, s.options, Me), c = 10;
  return r ? n.clientX > u.right + c || n.clientY > a.bottom && n.clientX > a.left : n.clientY > u.bottom + c || n.clientX > a.right && n.clientY > a.top;
}
function V3(n, r, s, a, u, c, f, m) {
  var p = a ? n.clientY : n.clientX, b = a ? s.height : s.width, g = a ? s.top : s.left, E = a ? s.bottom : s.right, v = !1;
  if (!f) {
    if (m && fl < b * u) {
      if (!ao && (ro === 1 ? p > g + b * c / 2 : p < E - b * c / 2) && (ao = !0), ao)
        v = !0;
      else if (ro === 1 ? p < g + fl : p > E - fl)
        return -ro;
    } else if (p > g + b * (1 - u) / 2 && p < E - b * (1 - u) / 2)
      return $3(r);
  }
  return v = v || f, v && (p < g + b * c / 2 || p > E - b * c / 2) ? p > g + b / 2 ? 1 : -1 : 0;
}
function $3(n) {
  return Mn(he) < Mn(n) ? 1 : -1;
}
function Y3(n) {
  for (var r = n.tagName + n.className + n.src + n.href + n.textContent, s = r.length, a = 0; s--; )
    a += r.charCodeAt(s);
  return a.toString(36);
}
function X3(n) {
  El.length = 0;
  for (var r = n.getElementsByTagName("input"), s = r.length; s--; ) {
    var a = r[s];
    a.checked && El.push(a);
  }
}
function hl(n) {
  return setTimeout(n, 0);
}
function Mf(n) {
  return clearTimeout(n);
}
Ol && He(document, "touchmove", function(n) {
  (Te.active || Ri) && n.cancelable && n.preventDefault();
});
Te.utils = {
  on: He,
  off: Ue,
  css: xe,
  find: b0,
  is: function(r, s) {
    return !!Hn(r, s, r, !1);
  },
  extend: O3,
  throttle: S0,
  closest: Hn,
  toggleClass: gn,
  clone: E0,
  index: Mn,
  nextTick: hl,
  cancelNextTick: Mf,
  detectDirection: A0,
  getChild: Ii,
  expando: an
};
Te.get = function(n) {
  return n[an];
};
Te.mount = function() {
  for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
    r[s] = arguments[s];
  r[0].constructor === Array && (r = r[0]), r.forEach(function(a) {
    if (!a.prototype || !a.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(a));
    a.utils && (Te.utils = nr(nr({}, Te.utils), a.utils)), uo.mount(a);
  });
};
Te.create = function(n, r) {
  return new Te(n, r);
};
Te.version = T3;
var St = [], Fs, jf, Rf = !1, lf, cf, Cl, Qs;
function F3() {
  function n() {
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
  return n.prototype = {
    dragStarted: function(s) {
      var a = s.originalEvent;
      this.sortable.nativeDraggable ? He(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? He(document, "pointermove", this._handleFallbackAutoScroll) : a.touches ? He(document, "touchmove", this._handleFallbackAutoScroll) : He(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(s) {
      var a = s.originalEvent;
      !this.options.dragOverBubble && !a.rootEl && this._handleAutoScroll(a);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Ue(document, "dragover", this._handleAutoScroll) : (Ue(document, "pointermove", this._handleFallbackAutoScroll), Ue(document, "touchmove", this._handleFallbackAutoScroll), Ue(document, "mousemove", this._handleFallbackAutoScroll)), Pv(), pl(), M3();
    },
    nulling: function() {
      Cl = jf = Fs = Rf = Qs = lf = cf = null, St.length = 0;
    },
    _handleFallbackAutoScroll: function(s) {
      this._handleAutoScroll(s, !0);
    },
    _handleAutoScroll: function(s, a) {
      var u = this, c = (s.touches ? s.touches[0] : s).clientX, f = (s.touches ? s.touches[0] : s).clientY, m = document.elementFromPoint(c, f);
      if (Cl = s, a || this.options.forceAutoScrollFallback || oo || kr || eo) {
        df(s, this.options, m, a);
        var p = ea(m, !0);
        Rf && (!Qs || c !== lf || f !== cf) && (Qs && Pv(), Qs = setInterval(function() {
          var b = ea(document.elementFromPoint(c, f), !0);
          b !== p && (p = b, pl()), df(s, u.options, b, a);
        }, 10), lf = c, cf = f);
      } else {
        if (!this.options.bubbleScroll || ea(m, !0) === er()) {
          pl();
          return;
        }
        df(s, this.options, ea(m, !1), !1);
      }
    }
  }, Cr(n, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function pl() {
  St.forEach(function(n) {
    clearInterval(n.pid);
  }), St = [];
}
function Pv() {
  clearInterval(Qs);
}
var df = S0(function(n, r, s, a) {
  if (r.scroll) {
    var u = (n.touches ? n.touches[0] : n).clientX, c = (n.touches ? n.touches[0] : n).clientY, f = r.scrollSensitivity, m = r.scrollSpeed, p = er(), b = !1, g;
    jf !== s && (jf = s, pl(), Fs = r.scroll, g = r.scrollFn, Fs === !0 && (Fs = ea(s, !0)));
    var E = 0, v = Fs;
    do {
      var S = v, h = wt(S), C = h.top, x = h.bottom, M = h.left, T = h.right, L = h.width, l = h.height, y = void 0, w = void 0, k = S.scrollWidth, R = S.scrollHeight, P = xe(S), O = S.scrollLeft, z = S.scrollTop;
      S === p ? (y = L < k && (P.overflowX === "auto" || P.overflowX === "scroll" || P.overflowX === "visible"), w = l < R && (P.overflowY === "auto" || P.overflowY === "scroll" || P.overflowY === "visible")) : (y = L < k && (P.overflowX === "auto" || P.overflowX === "scroll"), w = l < R && (P.overflowY === "auto" || P.overflowY === "scroll"));
      var q = y && (Math.abs(T - u) <= f && O + L < k) - (Math.abs(M - u) <= f && !!O), Y = w && (Math.abs(x - c) <= f && z + l < R) - (Math.abs(C - c) <= f && !!z);
      if (!St[E])
        for (var G = 0; G <= E; G++)
          St[G] || (St[G] = {});
      (St[E].vx != q || St[E].vy != Y || St[E].el !== S) && (St[E].el = S, St[E].vx = q, St[E].vy = Y, clearInterval(St[E].pid), (q != 0 || Y != 0) && (b = !0, St[E].pid = setInterval((function() {
        a && this.layer === 0 && Te.active._onTouchMove(Cl);
        var W = St[this.layer].vy ? St[this.layer].vy * m : 0, j = St[this.layer].vx ? St[this.layer].vx * m : 0;
        typeof g == "function" && g.call(Te.dragged.parentNode[an], j, W, n, Cl, St[this.layer].el) !== "continue" || w0(St[this.layer].el, j, W);
      }).bind({
        layer: E
      }), 24))), E++;
    } while (r.bubbleScroll && v !== p && (v = ea(v, !1)));
    Rf = b;
  }
}, 30), O0 = function(r) {
  var s = r.originalEvent, a = r.putSortable, u = r.dragEl, c = r.activeSortable, f = r.dispatchSortableEvent, m = r.hideGhostForTarget, p = r.unhideGhostForTarget;
  if (s) {
    var b = a || c;
    m();
    var g = s.changedTouches && s.changedTouches.length ? s.changedTouches[0] : s, E = document.elementFromPoint(g.clientX, g.clientY);
    p(), b && !b.el.contains(E) && (f("spill"), this.onSpill({
      dragEl: u,
      putSortable: a
    }));
  }
};
function nh() {
}
nh.prototype = {
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
  drop: O0
};
Cr(nh, {
  pluginName: "revertOnSpill"
});
function rh() {
}
rh.prototype = {
  onSpill: function(r) {
    var s = r.dragEl, a = r.putSortable, u = a || this.sortable;
    u.captureAnimationState(), s.parentNode && s.parentNode.removeChild(s), u.animateAll();
  },
  drop: O0
};
Cr(rh, {
  pluginName: "removeOnSpill"
});
Te.mount(new F3());
Te.mount(rh, nh);
async function ml(n, r, s) {
  var a, u, c;
  function f(g) {
    return n.includes("all") || n.includes(g);
  }
  const m = SillyTavern.getContext();
  let p = {};
  const b = G1;
  if (f("global") && b != null && b.length)
    for (const g of b) {
      const E = await Q3(g);
      E && (p[g] || (p[g] = []), Object.values(E).forEach((v) => {
        p[g].push(v);
      }));
    }
  if (f("chat")) {
    const g = m.chatMetadata[V1];
    if (g && !p[g]) {
      p[g] = [];
      const E = await m.loadWorldInfo(g);
      E && Object.values(E.entries).forEach((v) => {
        p[g].push(v);
      });
    }
  }
  if (f("character") && s) {
    const g = m.characters[s];
    let E = /* @__PURE__ */ new Set();
    const v = (u = (a = g?.data) == null ? void 0 : a.extensions) == null ? void 0 : u.world;
    v && E.add(v);
    const S = m0(s), h = (c = $1.charLore) == null ? void 0 : c.find((C) => C.name === S);
    h && (E = /* @__PURE__ */ new Set([...E, ...h.extraBooks]));
    for (const C of E) {
      const x = await m.loadWorldInfo(C);
      !x || p[C] || (p[C] = [], Object.values(x.entries).forEach((M) => {
        p[C].push(M);
      }));
    }
  }
  if (f("persona")) {
    const g = m.powerUserSettings.persona_description_lorebook;
    if (g && !p[g]) {
      p[g] = [];
      const E = await m.loadWorldInfo(g);
      E && Object.values(E.entries).forEach((v) => {
        p[g].push(v);
      });
    }
  }
  return p;
}
async function Q3(n) {
  const r = await SillyTavern.getContext().loadWorldInfo(n);
  return r ? Object.values(r.entries) : null;
}
const K3 = `=== SILLYTAVERN===

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

Lorebooks are essential for long-term storytelling with AI.`, J3 = `{{#is_not_empty currentLorebooks}}
## CURRENT LOREBOOKS
{{#each currentLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, W3 = `{{#is_not_empty blackListedEntries}}
## BLACKLISTED ENTRIES
{{#each blackListedEntries}}
- {{this}}
{{/each}}
{{/is_not_empty}}`, e8 = `{{#is_not_empty suggestedLorebooks}}
## SUGGESTED LOREBOOKS
{{#each suggestedLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, t8 = `## RESPONSE FORMAT (CRITICAL)

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

You may include multiple \`<entry>\` blocks inside a single \`<lorebooks>\` element. Begin your response with \`<lorebooks>\` immediately.`, n8 = `## Rules
- Don't suggest already existing or suggested entries.
{{#if userInstructions}}

## Your Task
{{userInstructions}}{{/if}}`, r8 = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", a8 = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid XML structure that strictly adheres to the provided example.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire XML object in a markdown code block (```xml\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The XML object inside the code block MUST be valid.\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```xml\n{{example_response}}\n```", i8 = `You are an expert lorebook writer assisting a user. Your task is to respond with the modified lorebook data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isEntrySession}}the entry "{{targetEntryName}}".{{else}}the entire set of lorebook entries provided in the context.{{/if}}

The initial lorebook state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, s8 = `{{#is_not_empty changedLorebooks}}
## LOREBOOK UPDATES (Added/Modified)
{{#each changedLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, o8 = `{{#is_not_empty removedEntries}}
## LOREBOOK UPDATES (Removed)
The following entries were removed and will no longer be part of the context:
{{#each removedEntries}}
- **{{this.comment}}** (from {{this.worldName}})
{{/each}}
{{/is_not_empty}}`, u8 = `The following changes were applied to the lorebooks based on the last turn. Unlisted entries are unchanged.
{{{addedModifiedContent}}}
{{{removedContent}}}`, M0 = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", l8 = M0 + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", c8 = "[" + M0 + "][" + l8 + "]*", d8 = new RegExp("^" + c8 + "$");
function j0(n, r) {
  const s = [];
  let a = r.exec(n);
  for (; a; ) {
    const u = [];
    u.startIndex = r.lastIndex - a[0].length;
    const c = a.length;
    for (let f = 0; f < c; f++)
      u.push(a[f]);
    s.push(u), a = r.exec(n);
  }
  return s;
}
const ah = function(n) {
  const r = d8.exec(n);
  return !(r === null || typeof r > "u");
};
function f8(n) {
  return typeof n < "u";
}
const h8 = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function R0(n, r) {
  r = Object.assign({}, h8, r);
  const s = [];
  let a = !1, u = !1;
  n[0] === "\uFEFF" && (n = n.substr(1));
  for (let c = 0; c < n.length; c++)
    if (n[c] === "<" && n[c + 1] === "?") {
      if (c += 2, c = Bv(n, c), c.err) return c;
    } else if (n[c] === "<") {
      let f = c;
      if (c++, n[c] === "!") {
        c = Uv(n, c);
        continue;
      } else {
        let m = !1;
        n[c] === "/" && (m = !0, c++);
        let p = "";
        for (; c < n.length && n[c] !== ">" && n[c] !== " " && n[c] !== "	" && n[c] !== `
` && n[c] !== "\r"; c++)
          p += n[c];
        if (p = p.trim(), p[p.length - 1] === "/" && (p = p.substring(0, p.length - 1), c--), !S8(p)) {
          let E;
          return p.trim().length === 0 ? E = "Invalid space after '<'." : E = "Tag '" + p + "' is an invalid name.", yt("InvalidTag", E, Xt(n, c));
        }
        const b = g8(n, c);
        if (b === !1)
          return yt("InvalidAttr", "Attributes for '" + p + "' have open quote.", Xt(n, c));
        let g = b.value;
        if (c = b.index, g[g.length - 1] === "/") {
          const E = c - g.length;
          g = g.substring(0, g.length - 1);
          const v = Hv(g, r);
          if (v === !0)
            a = !0;
          else
            return yt(v.err.code, v.err.msg, Xt(n, E + v.err.line));
        } else if (m)
          if (b.tagClosed) {
            if (g.trim().length > 0)
              return yt("InvalidTag", "Closing tag '" + p + "' can't have attributes or invalid starting.", Xt(n, f));
            if (s.length === 0)
              return yt("InvalidTag", "Closing tag '" + p + "' has not been opened.", Xt(n, f));
            {
              const E = s.pop();
              if (p !== E.tagName) {
                let v = Xt(n, E.tagStartPos);
                return yt(
                  "InvalidTag",
                  "Expected closing tag '" + E.tagName + "' (opened in line " + v.line + ", col " + v.col + ") instead of closing tag '" + p + "'.",
                  Xt(n, f)
                );
              }
              s.length == 0 && (u = !0);
            }
          } else return yt("InvalidTag", "Closing tag '" + p + "' doesn't have proper closing.", Xt(n, c));
        else {
          const E = Hv(g, r);
          if (E !== !0)
            return yt(E.err.code, E.err.msg, Xt(n, c - g.length + E.err.line));
          if (u === !0)
            return yt("InvalidXml", "Multiple possible root nodes found.", Xt(n, c));
          r.unpairedTags.indexOf(p) !== -1 || s.push({ tagName: p, tagStartPos: f }), a = !0;
        }
        for (c++; c < n.length; c++)
          if (n[c] === "<")
            if (n[c + 1] === "!") {
              c++, c = Uv(n, c);
              continue;
            } else if (n[c + 1] === "?") {
              if (c = Bv(n, ++c), c.err) return c;
            } else
              break;
          else if (n[c] === "&") {
            const E = _8(n, c);
            if (E == -1)
              return yt("InvalidChar", "char '&' is not expected.", Xt(n, c));
            c = E;
          } else if (u === !0 && !Iv(n[c]))
            return yt("InvalidXml", "Extra text at the end", Xt(n, c));
        n[c] === "<" && c--;
      }
    } else {
      if (Iv(n[c]))
        continue;
      return yt("InvalidChar", "char '" + n[c] + "' is not expected.", Xt(n, c));
    }
  if (a) {
    if (s.length == 1)
      return yt("InvalidTag", "Unclosed tag '" + s[0].tagName + "'.", Xt(n, s[0].tagStartPos));
    if (s.length > 0)
      return yt("InvalidXml", "Invalid '" + JSON.stringify(s.map((c) => c.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return yt("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function Iv(n) {
  return n === " " || n === "	" || n === `
` || n === "\r";
}
function Bv(n, r) {
  const s = r;
  for (; r < n.length; r++)
    if (n[r] == "?" || n[r] == " ") {
      const a = n.substr(s, r - s);
      if (r > 5 && a === "xml")
        return yt("InvalidXml", "XML declaration allowed only at the start of the document.", Xt(n, r));
      if (n[r] == "?" && n[r + 1] == ">") {
        r++;
        break;
      } else
        continue;
    }
  return r;
}
function Uv(n, r) {
  if (n.length > r + 5 && n[r + 1] === "-" && n[r + 2] === "-") {
    for (r += 3; r < n.length; r++)
      if (n[r] === "-" && n[r + 1] === "-" && n[r + 2] === ">") {
        r += 2;
        break;
      }
  } else if (n.length > r + 8 && n[r + 1] === "D" && n[r + 2] === "O" && n[r + 3] === "C" && n[r + 4] === "T" && n[r + 5] === "Y" && n[r + 6] === "P" && n[r + 7] === "E") {
    let s = 1;
    for (r += 8; r < n.length; r++)
      if (n[r] === "<")
        s++;
      else if (n[r] === ">" && (s--, s === 0))
        break;
  } else if (n.length > r + 9 && n[r + 1] === "[" && n[r + 2] === "C" && n[r + 3] === "D" && n[r + 4] === "A" && n[r + 5] === "T" && n[r + 6] === "A" && n[r + 7] === "[") {
    for (r += 8; r < n.length; r++)
      if (n[r] === "]" && n[r + 1] === "]" && n[r + 2] === ">") {
        r += 2;
        break;
      }
  }
  return r;
}
const p8 = '"', m8 = "'";
function g8(n, r) {
  let s = "", a = "", u = !1;
  for (; r < n.length; r++) {
    if (n[r] === p8 || n[r] === m8)
      a === "" ? a = n[r] : a !== n[r] || (a = "");
    else if (n[r] === ">" && a === "") {
      u = !0;
      break;
    }
    s += n[r];
  }
  return a !== "" ? !1 : {
    value: s,
    index: r,
    tagClosed: u
  };
}
const v8 = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function Hv(n, r) {
  const s = j0(n, v8), a = {};
  for (let u = 0; u < s.length; u++) {
    if (s[u][1].length === 0)
      return yt("InvalidAttr", "Attribute '" + s[u][2] + "' has no space in starting.", Us(s[u]));
    if (s[u][3] !== void 0 && s[u][4] === void 0)
      return yt("InvalidAttr", "Attribute '" + s[u][2] + "' is without value.", Us(s[u]));
    if (s[u][3] === void 0 && !r.allowBooleanAttributes)
      return yt("InvalidAttr", "boolean attribute '" + s[u][2] + "' is not allowed.", Us(s[u]));
    const c = s[u][2];
    if (!b8(c))
      return yt("InvalidAttr", "Attribute '" + c + "' is an invalid name.", Us(s[u]));
    if (!a.hasOwnProperty(c))
      a[c] = 1;
    else
      return yt("InvalidAttr", "Attribute '" + c + "' is repeated.", Us(s[u]));
  }
  return !0;
}
function y8(n, r) {
  let s = /\d/;
  for (n[r] === "x" && (r++, s = /[\da-fA-F]/); r < n.length; r++) {
    if (n[r] === ";")
      return r;
    if (!n[r].match(s))
      break;
  }
  return -1;
}
function _8(n, r) {
  if (r++, n[r] === ";")
    return -1;
  if (n[r] === "#")
    return r++, y8(n, r);
  let s = 0;
  for (; r < n.length; r++, s++)
    if (!(n[r].match(/\w/) && s < 20)) {
      if (n[r] === ";")
        break;
      return -1;
    }
  return r;
}
function yt(n, r, s) {
  return {
    err: {
      code: n,
      msg: r,
      line: s.line || s,
      col: s.col
    }
  };
}
function b8(n) {
  return ah(n);
}
function S8(n) {
  return ah(n);
}
function Xt(n, r) {
  const s = n.substring(0, r).split(/\r?\n/);
  return {
    line: s.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: s[s.length - 1].length + 1
  };
}
function Us(n) {
  return n.startIndex + n[1].length;
}
const w8 = {
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
  tagValueProcessor: function(n, r) {
    return r;
  },
  attributeValueProcessor: function(n, r) {
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
  updateTag: function(n, r, s) {
    return n;
  }
  // skipEmptyListItem: false
}, E8 = function(n) {
  return Object.assign({}, w8, n);
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
function C8(n, r) {
  const s = {};
  if (n[r + 3] === "O" && n[r + 4] === "C" && n[r + 5] === "T" && n[r + 6] === "Y" && n[r + 7] === "P" && n[r + 8] === "E") {
    r = r + 9;
    let a = 1, u = !1, c = !1, f = "";
    for (; r < n.length; r++)
      if (n[r] === "<" && !c) {
        if (u && x8(n, r)) {
          r += 7;
          let m, p;
          [m, p, r] = k8(n, r + 1), p.indexOf("&") === -1 && (s[M8(m)] = {
            regx: RegExp(`&${m};`, "g"),
            val: p
          });
        } else if (u && T8(n, r)) r += 8;
        else if (u && N8(n, r)) r += 8;
        else if (u && O8(n, r)) r += 9;
        else if (A8) c = !0;
        else throw new Error("Invalid DOCTYPE");
        a++, f = "";
      } else if (n[r] === ">") {
        if (c ? n[r - 1] === "-" && n[r - 2] === "-" && (c = !1, a--) : a--, a === 0)
          break;
      } else n[r] === "[" ? u = !0 : f += n[r];
    if (a !== 0)
      throw new Error("Unclosed DOCTYPE");
  } else
    throw new Error("Invalid Tag instead of DOCTYPE");
  return { entities: s, i: r };
}
function k8(n, r) {
  let s = "";
  for (; r < n.length && n[r] !== "'" && n[r] !== '"'; r++)
    s += n[r];
  if (s = s.trim(), s.indexOf(" ") !== -1) throw new Error("External entites are not supported");
  const a = n[r++];
  let u = "";
  for (; r < n.length && n[r] !== a; r++)
    u += n[r];
  return [s, u, r];
}
function A8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "-" && n[r + 3] === "-";
}
function x8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "E" && n[r + 3] === "N" && n[r + 4] === "T" && n[r + 5] === "I" && n[r + 6] === "T" && n[r + 7] === "Y";
}
function T8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "E" && n[r + 3] === "L" && n[r + 4] === "E" && n[r + 5] === "M" && n[r + 6] === "E" && n[r + 7] === "N" && n[r + 8] === "T";
}
function N8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "A" && n[r + 3] === "T" && n[r + 4] === "T" && n[r + 5] === "L" && n[r + 6] === "I" && n[r + 7] === "S" && n[r + 8] === "T";
}
function O8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "N" && n[r + 3] === "O" && n[r + 4] === "T" && n[r + 5] === "A" && n[r + 6] === "T" && n[r + 7] === "I" && n[r + 8] === "O" && n[r + 9] === "N";
}
function M8(n) {
  if (ah(n))
    return n;
  throw new Error(`Invalid entity name ${n}`);
}
const j8 = /^[-+]?0x[a-fA-F0-9]+$/, R8 = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, D8 = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function z8(n, r = {}) {
  if (r = Object.assign({}, D8, r), !n || typeof n != "string") return n;
  let s = n.trim();
  if (r.skipLike !== void 0 && r.skipLike.test(s)) return n;
  if (n === "0") return 0;
  if (r.hex && j8.test(s))
    return P8(s, 16);
  if (s.search(/[eE]/) !== -1) {
    const a = s.match(/^([-\+])?(0*)([0-9]*(\.[0-9]*)?[eE][-\+]?[0-9]+)$/);
    if (a) {
      if (r.leadingZeros)
        s = (a[1] || "") + a[3];
      else if (!(a[2] === "0" && a[3][0] === ".")) return n;
      return r.eNotation ? Number(s) : n;
    } else
      return n;
  } else {
    const a = R8.exec(s);
    if (a) {
      const u = a[1], c = a[2];
      let f = L8(a[3]);
      if (!r.leadingZeros && c.length > 0 && u && s[2] !== ".") return n;
      if (!r.leadingZeros && c.length > 0 && !u && s[1] !== ".") return n;
      if (r.leadingZeros && c === n) return 0;
      {
        const m = Number(s), p = "" + m;
        return p.search(/[eE]/) !== -1 ? r.eNotation ? m : n : s.indexOf(".") !== -1 ? p === "0" && f === "" || p === f || u && p === "-" + f ? m : n : c ? f === p || u + f === p ? m : n : s === p || s === u + p ? m : n;
      }
    } else
      return n;
  }
}
function L8(n) {
  return n && n.indexOf(".") !== -1 && (n = n.replace(/0+$/, ""), n === "." ? n = "0" : n[0] === "." ? n = "0" + n : n[n.length - 1] === "." && (n = n.substr(0, n.length - 1))), n;
}
function P8(n, r) {
  if (parseInt) return parseInt(n, r);
  if (Number.parseInt) return Number.parseInt(n, r);
  if (window && window.parseInt) return window.parseInt(n, r);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function I8(n) {
  return typeof n == "function" ? n : Array.isArray(n) ? (r) => {
    for (const s of n)
      if (typeof s == "string" && r === s || s instanceof RegExp && s.test(r))
        return !0;
  } : () => !1;
}
class B8 {
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
    }, this.addExternalEntities = U8, this.parseXml = V8, this.parseTextData = H8, this.resolveNameSpace = q8, this.buildAttributesMap = G8, this.isItStopNode = F8, this.replaceEntitiesValue = Y8, this.readStopNodeData = K8, this.saveTextToParentTag = X8, this.addChild = $8, this.ignoreAttributesFn = I8(this.options.ignoreAttributes);
  }
}
function U8(n) {
  const r = Object.keys(n);
  for (let s = 0; s < r.length; s++) {
    const a = r[s];
    this.lastEntities[a] = {
      regex: new RegExp("&" + a + ";", "g"),
      val: n[a]
    };
  }
}
function H8(n, r, s, a, u, c, f) {
  if (n !== void 0 && (this.options.trimValues && !a && (n = n.trim()), n.length > 0)) {
    f || (n = this.replaceEntitiesValue(n));
    const m = this.options.tagValueProcessor(r, n, s, u, c);
    return m == null ? n : typeof m != typeof n || m !== n ? m : this.options.trimValues ? zf(n, this.options.parseTagValue, this.options.numberParseOptions) : n.trim() === n ? zf(n, this.options.parseTagValue, this.options.numberParseOptions) : n;
  }
}
function q8(n) {
  if (this.options.removeNSPrefix) {
    const r = n.split(":"), s = n.charAt(0) === "/" ? "/" : "";
    if (r[0] === "xmlns")
      return "";
    r.length === 2 && (n = s + r[1]);
  }
  return n;
}
const Z8 = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function G8(n, r, s) {
  if (this.options.ignoreAttributes !== !0 && typeof n == "string") {
    const a = j0(n, Z8), u = a.length, c = {};
    for (let f = 0; f < u; f++) {
      const m = this.resolveNameSpace(a[f][1]);
      if (this.ignoreAttributesFn(m, r))
        continue;
      let p = a[f][4], b = this.options.attributeNamePrefix + m;
      if (m.length)
        if (this.options.transformAttributeName && (b = this.options.transformAttributeName(b)), b === "__proto__" && (b = "#__proto__"), p !== void 0) {
          this.options.trimValues && (p = p.trim()), p = this.replaceEntitiesValue(p);
          const g = this.options.attributeValueProcessor(m, p, r);
          g == null ? c[b] = p : typeof g != typeof p || g !== p ? c[b] = g : c[b] = zf(
            p,
            this.options.parseAttributeValue,
            this.options.numberParseOptions
          );
        } else this.options.allowBooleanAttributes && (c[b] = !0);
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
const V8 = function(n) {
  n = n.replace(/\r\n?/g, `
`);
  const r = new Hs("!xml");
  let s = r, a = "", u = "";
  for (let c = 0; c < n.length; c++)
    if (n[c] === "<")
      if (n[c + 1] === "/") {
        const m = Ra(n, ">", c, "Closing Tag is not closed.");
        let p = n.substring(c + 2, m).trim();
        if (this.options.removeNSPrefix) {
          const E = p.indexOf(":");
          E !== -1 && (p = p.substr(E + 1));
        }
        this.options.transformTagName && (p = this.options.transformTagName(p)), s && (a = this.saveTextToParentTag(a, s, u));
        const b = u.substring(u.lastIndexOf(".") + 1);
        if (p && this.options.unpairedTags.indexOf(p) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${p}>`);
        let g = 0;
        b && this.options.unpairedTags.indexOf(b) !== -1 ? (g = u.lastIndexOf(".", u.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : g = u.lastIndexOf("."), u = u.substring(0, g), s = this.tagsNodeStack.pop(), a = "", c = m;
      } else if (n[c + 1] === "?") {
        let m = Df(n, c, !1, "?>");
        if (!m) throw new Error("Pi Tag is not closed.");
        if (a = this.saveTextToParentTag(a, s, u), !(this.options.ignoreDeclaration && m.tagName === "?xml" || this.options.ignorePiTags)) {
          const p = new Hs(m.tagName);
          p.add(this.options.textNodeName, ""), m.tagName !== m.tagExp && m.attrExpPresent && (p[":@"] = this.buildAttributesMap(m.tagExp, u, m.tagName)), this.addChild(s, p, u);
        }
        c = m.closeIndex + 1;
      } else if (n.substr(c + 1, 3) === "!--") {
        const m = Ra(n, "-->", c + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const p = n.substring(c + 4, m - 2);
          a = this.saveTextToParentTag(a, s, u), s.add(this.options.commentPropName, [{ [this.options.textNodeName]: p }]);
        }
        c = m;
      } else if (n.substr(c + 1, 2) === "!D") {
        const m = C8(n, c);
        this.docTypeEntities = m.entities, c = m.i;
      } else if (n.substr(c + 1, 2) === "![") {
        const m = Ra(n, "]]>", c, "CDATA is not closed.") - 2, p = n.substring(c + 9, m);
        a = this.saveTextToParentTag(a, s, u);
        let b = this.parseTextData(p, s.tagname, u, !0, !1, !0, !0);
        b == null && (b = ""), this.options.cdataPropName ? s.add(this.options.cdataPropName, [{ [this.options.textNodeName]: p }]) : s.add(this.options.textNodeName, b), c = m + 2;
      } else {
        let m = Df(n, c, this.options.removeNSPrefix), p = m.tagName;
        const b = m.rawTagName;
        let g = m.tagExp, E = m.attrExpPresent, v = m.closeIndex;
        this.options.transformTagName && (p = this.options.transformTagName(p)), s && a && s.tagname !== "!xml" && (a = this.saveTextToParentTag(a, s, u, !1));
        const S = s;
        if (S && this.options.unpairedTags.indexOf(S.tagname) !== -1 && (s = this.tagsNodeStack.pop(), u = u.substring(0, u.lastIndexOf("."))), p !== r.tagname && (u += u ? "." + p : p), this.isItStopNode(this.options.stopNodes, u, p)) {
          let h = "";
          if (g.length > 0 && g.lastIndexOf("/") === g.length - 1)
            p[p.length - 1] === "/" ? (p = p.substr(0, p.length - 1), u = u.substr(0, u.length - 1), g = p) : g = g.substr(0, g.length - 1), c = m.closeIndex;
          else if (this.options.unpairedTags.indexOf(p) !== -1)
            c = m.closeIndex;
          else {
            const x = this.readStopNodeData(n, b, v + 1);
            if (!x) throw new Error(`Unexpected end of ${b}`);
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
          a = "", c = v;
        }
      }
    else
      a += n[c];
  return r.child;
};
function $8(n, r, s) {
  const a = this.options.updateTag(r.tagname, s, r[":@"]);
  a === !1 || (typeof a == "string" && (r.tagname = a), n.addChild(r));
}
const Y8 = function(n) {
  if (this.options.processEntities) {
    for (let r in this.docTypeEntities) {
      const s = this.docTypeEntities[r];
      n = n.replace(s.regx, s.val);
    }
    for (let r in this.lastEntities) {
      const s = this.lastEntities[r];
      n = n.replace(s.regex, s.val);
    }
    if (this.options.htmlEntities)
      for (let r in this.htmlEntities) {
        const s = this.htmlEntities[r];
        n = n.replace(s.regex, s.val);
      }
    n = n.replace(this.ampEntity.regex, this.ampEntity.val);
  }
  return n;
};
function X8(n, r, s, a) {
  return n && (a === void 0 && (a = r.child.length === 0), n = this.parseTextData(
    n,
    r.tagname,
    s,
    !1,
    r[":@"] ? Object.keys(r[":@"]).length !== 0 : !1,
    a
  ), n !== void 0 && n !== "" && r.add(this.options.textNodeName, n), n = ""), n;
}
function F8(n, r, s) {
  const a = "*." + s;
  for (const u in n) {
    const c = n[u];
    if (a === c || r === c) return !0;
  }
  return !1;
}
function Q8(n, r, s = ">") {
  let a, u = "";
  for (let c = r; c < n.length; c++) {
    let f = n[c];
    if (a)
      f === a && (a = "");
    else if (f === '"' || f === "'")
      a = f;
    else if (f === s[0])
      if (s[1]) {
        if (n[c + 1] === s[1])
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
function Ra(n, r, s, a) {
  const u = n.indexOf(r, s);
  if (u === -1)
    throw new Error(a);
  return u + r.length - 1;
}
function Df(n, r, s, a = ">") {
  const u = Q8(n, r + 1, a);
  if (!u) return;
  let c = u.data;
  const f = u.index, m = c.search(/\s/);
  let p = c, b = !0;
  m !== -1 && (p = c.substring(0, m), c = c.substring(m + 1).trimStart());
  const g = p;
  if (s) {
    const E = p.indexOf(":");
    E !== -1 && (p = p.substr(E + 1), b = p !== u.data.substr(E + 1));
  }
  return {
    tagName: p,
    tagExp: c,
    closeIndex: f,
    attrExpPresent: b,
    rawTagName: g
  };
}
function K8(n, r, s) {
  const a = s;
  let u = 1;
  for (; s < n.length; s++)
    if (n[s] === "<")
      if (n[s + 1] === "/") {
        const c = Ra(n, ">", s, `${r} is not closed`);
        if (n.substring(s + 2, c).trim() === r && (u--, u === 0))
          return {
            tagContent: n.substring(a, s),
            i: c
          };
        s = c;
      } else if (n[s + 1] === "?")
        s = Ra(n, "?>", s + 1, "StopNode is not closed.");
      else if (n.substr(s + 1, 3) === "!--")
        s = Ra(n, "-->", s + 3, "StopNode is not closed.");
      else if (n.substr(s + 1, 2) === "![")
        s = Ra(n, "]]>", s, "StopNode is not closed.") - 2;
      else {
        const c = Df(n, s, ">");
        c && ((c && c.tagName) === r && c.tagExp[c.tagExp.length - 1] !== "/" && u++, s = c.closeIndex);
      }
}
function zf(n, r, s) {
  if (r && typeof n == "string") {
    const a = n.trim();
    return a === "true" ? !0 : a === "false" ? !1 : z8(n, s);
  } else
    return f8(n) ? n : "";
}
function J8(n, r) {
  return D0(n, r);
}
function D0(n, r, s) {
  let a;
  const u = {};
  for (let c = 0; c < n.length; c++) {
    const f = n[c], m = W8(f);
    let p = "";
    if (s === void 0 ? p = m : p = s + "." + m, m === r.textNodeName)
      a === void 0 ? a = f[m] : a += "" + f[m];
    else {
      if (m === void 0)
        continue;
      if (f[m]) {
        let b = D0(f[m], r, p);
        const g = tS(b, r);
        f[":@"] ? eS(b, f[":@"], p, r) : Object.keys(b).length === 1 && b[r.textNodeName] !== void 0 && !r.alwaysCreateTextNode ? b = b[r.textNodeName] : Object.keys(b).length === 0 && (r.alwaysCreateTextNode ? b[r.textNodeName] = "" : b = ""), u[m] !== void 0 && u.hasOwnProperty(m) ? (Array.isArray(u[m]) || (u[m] = [u[m]]), u[m].push(b)) : r.isArray(m, p, g) ? u[m] = [b] : u[m] = b;
      }
    }
  }
  return typeof a == "string" ? a.length > 0 && (u[r.textNodeName] = a) : a !== void 0 && (u[r.textNodeName] = a), u;
}
function W8(n) {
  const r = Object.keys(n);
  for (let s = 0; s < r.length; s++) {
    const a = r[s];
    if (a !== ":@") return a;
  }
}
function eS(n, r, s, a) {
  if (r) {
    const u = Object.keys(r), c = u.length;
    for (let f = 0; f < c; f++) {
      const m = u[f];
      a.isArray(m, s + "." + m, !0, !0) ? n[m] = [r[m]] : n[m] = r[m];
    }
  }
}
function tS(n, r) {
  const { textNodeName: s } = r, a = Object.keys(n).length;
  return !!(a === 0 || a === 1 && (n[s] || typeof n[s] == "boolean" || n[s] === 0));
}
class z0 {
  constructor(r) {
    this.externalEntities = {}, this.options = E8(r);
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
      const c = R0(r, s);
      if (c !== !0)
        throw Error(`${c.err.msg}:${c.err.line}:${c.err.col}`);
    }
    const a = new B8(this.options);
    a.addExternalEntities(this.externalEntities);
    const u = a.parseXml(r);
    return this.options.preserveOrder || u === void 0 ? u : J8(u, this.options);
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
const nS = {
  validate: R0
}, rS = new z0();
function aS(n) {
  const r = Math.pow(10, n - 1), s = Math.pow(10, n) - 1;
  return Math.floor(Math.random() * (s - r + 1)) + r;
}
function iS(n, r = {}) {
  let s = n;
  const { previousContent: a } = r;
  s = s.replace(/```xml/g, "").replace(/```/g, ""), s = s.replace(/<think(?:ing)?[^>]*>[\s\S]*?<\/think(?:ing)?>/gi, ""), s = s.replace(/<reasoning[^>]*>[\s\S]*?<\/reasoning>/gi, ""), a && (s = a + s.trimEnd());
  const u = s.match(/<lorebooks>[\s\S]*<\/lorebooks>/i) ?? s.match(/<lorebook>[\s\S]*<\/lorebook>/i);
  if (u && (s = u[0]), s.includes("<entry>") && !s.includes("</entry>"))
    throw new Error("Incomplete XML: Missing </entry> tag");
  if (s.includes("<content>") && !s.includes("</content>"))
    throw new Error("Incomplete XML: Missing </content> tag");
  const c = {};
  try {
    const f = rS.parse(s), m = f.lorebooks ?? f.lorebook;
    if (!m || !m.entry)
      return c;
    const p = Array.isArray(m.entry) ? m.entry : [m.entry];
    for (const b of p) {
      const g = b.worldName;
      g && (c[g] || (c[g] = []), c[g].push({
        uid: b.id ?? aS(6),
        key: b.triggers?.split(",").map((E) => E.trim()) ?? [],
        content: b.content ?? "",
        comment: b.name ?? "",
        disable: !1,
        keysecondary: []
      }));
    }
    return c;
  } catch (f) {
    throw console.error(f), new Error("Model response is not valid XML");
  }
}
function sS(n, r) {
  return `
<lorebooks>
  <entry>
    <worldName>${n}</worldName>
    <id>${r.uid}</id>
    <name>${r.comment}</name>
    <triggers>${r.key.join(",")}</triggers>
    <content>${r.content}`;
}
function oS(n, r) {
  return `
<lorebooks>
  <entry>
    <worldName>${n}</worldName>
    <id>${r.uid}</id>
    <name>${r.comment}</name>
    <triggers>${r.key.join(",")}</triggers>
    <content>${r.content}</content>
  </entry>
</lorebooks>`;
}
var Mu = { exports: {} }, ju = { exports: {} }, Bn = {}, rn = {}, qv;
function on() {
  if (qv) return rn;
  qv = 1, rn.__esModule = !0, rn.extend = u, rn.indexOf = p, rn.escapeExpression = b, rn.isEmpty = g, rn.createFrame = E, rn.blockParams = v, rn.appendContextPath = S;
  var n = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
    "=": "&#x3D;"
  }, r = /[&<>"'`=]/g, s = /[&<>"'`=]/;
  function a(h) {
    return n[h];
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
    for (var x = 0, M = h.length; x < M; x++)
      if (h[x] === C)
        return x;
    return -1;
  }
  function b(h) {
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
  function v(h, C) {
    return h.path = C, h;
  }
  function S(h, C) {
    return (h ? h + "." : "") + C;
  }
  return rn;
}
var Ru = { exports: {} }, Zv;
function Gn() {
  return Zv || (Zv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function a(u, c) {
      var f = c && c.loc, m = void 0, p = void 0, b = void 0, g = void 0;
      f && (m = f.start.line, p = f.end.line, b = f.start.column, g = f.end.column, u += " - " + m + ":" + b);
      for (var E = Error.prototype.constructor.call(this, u), v = 0; v < s.length; v++)
        this[s[v]] = E[s[v]];
      Error.captureStackTrace && Error.captureStackTrace(this, a);
      try {
        f && (this.lineNumber = m, this.endLineNumber = p, Object.defineProperty ? (Object.defineProperty(this, "column", {
          value: b,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: g,
          enumerable: !0
        })) : (this.column = b, this.endColumn = g));
      } catch {
      }
    }
    a.prototype = new Error(), r.default = a, n.exports = r.default;
  })(Ru, Ru.exports)), Ru.exports;
}
var qs = {}, Du = { exports: {} }, Gv;
function uS() {
  return Gv || (Gv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = on();
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
    }, n.exports = r.default;
  })(Du, Du.exports)), Du.exports;
}
var zu = { exports: {} }, Vv;
function lS() {
  return Vv || (Vv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var a = on(), u = Gn(), c = s(u);
    r.default = function(f) {
      f.registerHelper("each", function(m, p) {
        if (!p)
          throw new c.default("Must pass iterator to #each");
        var b = p.fn, g = p.inverse, E = 0, v = "", S = void 0, h = void 0;
        p.data && p.ids && (h = a.appendContextPath(p.data.contextPath, p.ids[0]) + "."), a.isFunction(m) && (m = m.call(this)), p.data && (S = a.createFrame(p.data));
        function C(l, y, w) {
          S && (S.key = l, S.index = y, S.first = y === 0, S.last = !!w, h && (S.contextPath = h + l)), v = v + b(m[l], {
            data: S,
            blockParams: a.blockParams([m[l], l], [h + l, null])
          });
        }
        if (m && typeof m == "object")
          if (a.isArray(m))
            for (var x = m.length; E < x; E++)
              E in m && C(E, E, E === m.length - 1);
          else if (typeof Symbol == "function" && m[Symbol.iterator]) {
            for (var M = [], T = m[Symbol.iterator](), L = T.next(); !L.done; L = T.next())
              M.push(L.value);
            m = M;
            for (var x = m.length; E < x; E++)
              C(E, E, E === m.length - 1);
          } else
            (function() {
              var l = void 0;
              Object.keys(m).forEach(function(y) {
                l !== void 0 && C(l, E - 1), l = y, E++;
              }), l !== void 0 && C(l, E - 1, !0);
            })();
        return E === 0 && (v = g(this)), v;
      });
    }, n.exports = r.default;
  })(zu, zu.exports)), zu.exports;
}
var Lu = { exports: {} }, $v;
function cS() {
  return $v || ($v = 1, (function(n, r) {
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
    }, n.exports = r.default;
  })(Lu, Lu.exports)), Lu.exports;
}
var Pu = { exports: {} }, Yv;
function dS() {
  return Yv || (Yv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var a = on(), u = Gn(), c = s(u);
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
    }, n.exports = r.default;
  })(Pu, Pu.exports)), Pu.exports;
}
var Iu = { exports: {} }, Xv;
function fS() {
  return Xv || (Xv = 1, (function(n, r) {
    r.__esModule = !0, r.default = function(s) {
      s.registerHelper("log", function() {
        for (var a = [void 0], u = arguments[arguments.length - 1], c = 0; c < arguments.length - 1; c++)
          a.push(arguments[c]);
        var f = 1;
        u.hash.level != null ? f = u.hash.level : u.data && u.data.level != null && (f = u.data.level), a[0] = f, s.log.apply(s, a);
      });
    }, n.exports = r.default;
  })(Iu, Iu.exports)), Iu.exports;
}
var Bu = { exports: {} }, Fv;
function hS() {
  return Fv || (Fv = 1, (function(n, r) {
    r.__esModule = !0, r.default = function(s) {
      s.registerHelper("lookup", function(a, u, c) {
        return a && c.lookupProperty(a, u);
      });
    }, n.exports = r.default;
  })(Bu, Bu.exports)), Bu.exports;
}
var Uu = { exports: {} }, Qv;
function pS() {
  return Qv || (Qv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var a = on(), u = Gn(), c = s(u);
    r.default = function(f) {
      f.registerHelper("with", function(m, p) {
        if (arguments.length != 2)
          throw new c.default("#with requires exactly one argument");
        a.isFunction(m) && (m = m.call(this));
        var b = p.fn;
        if (a.isEmpty(m))
          return p.inverse(this);
        var g = p.data;
        return p.data && p.ids && (g = a.createFrame(p.data), g.contextPath = a.appendContextPath(p.data.contextPath, p.ids[0])), b(m, {
          data: g,
          blockParams: a.blockParams([m], [g && g.contextPath])
        });
      });
    }, n.exports = r.default;
  })(Uu, Uu.exports)), Uu.exports;
}
var Kv;
function L0() {
  if (Kv) return qs;
  Kv = 1, qs.__esModule = !0, qs.registerDefaultHelpers = C, qs.moveHelperToHooks = x;
  function n(M) {
    return M && M.__esModule ? M : { default: M };
  }
  var r = uS(), s = n(r), a = lS(), u = n(a), c = cS(), f = n(c), m = dS(), p = n(m), b = fS(), g = n(b), E = hS(), v = n(E), S = pS(), h = n(S);
  function C(M) {
    s.default(M), u.default(M), f.default(M), p.default(M), g.default(M), v.default(M), h.default(M);
  }
  function x(M, T, L) {
    M.helpers[T] && (M.hooks[T] = M.helpers[T], L || delete M.helpers[T]);
  }
  return qs;
}
var Hu = {}, qu = { exports: {} }, Jv;
function mS() {
  return Jv || (Jv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = on();
    r.default = function(a) {
      a.registerDecorator("inline", function(u, c, f, m) {
        var p = u;
        return c.partials || (c.partials = {}, p = function(b, g) {
          var E = f.partials;
          f.partials = s.extend({}, E, c.partials);
          var v = u(b, g);
          return f.partials = E, v;
        }), c.partials[m.args[0]] = m.fn, p;
      });
    }, n.exports = r.default;
  })(qu, qu.exports)), qu.exports;
}
var Wv;
function gS() {
  if (Wv) return Hu;
  Wv = 1, Hu.__esModule = !0, Hu.registerDefaultDecorators = a;
  function n(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var r = mS(), s = n(r);
  function a(u) {
    s.default(u);
  }
  return Hu;
}
var Zu = { exports: {} }, ey;
function P0() {
  return ey || (ey = 1, (function(n, r) {
    r.__esModule = !0;
    var s = on(), a = {
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
          for (var m = arguments.length, p = Array(m > 1 ? m - 1 : 0), b = 1; b < m; b++)
            p[b - 1] = arguments[b];
          console[f].apply(console, p);
        }
      }
    };
    r.default = a, n.exports = r.default;
  })(Zu, Zu.exports)), Zu.exports;
}
var Ni = {}, Gu = {}, ty;
function vS() {
  if (ty) return Gu;
  ty = 1, Gu.__esModule = !0, Gu.createNewLookupObject = r;
  var n = on();
  function r() {
    for (var s = arguments.length, a = Array(s), u = 0; u < s; u++)
      a[u] = arguments[u];
    return n.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(a));
  }
  return Gu;
}
var ny;
function I0() {
  if (ny) return Ni;
  ny = 1, Ni.__esModule = !0, Ni.createProtoAccessControl = c, Ni.resultIsAllowed = f, Ni.resetLoggedProperties = b;
  function n(g) {
    return g && g.__esModule ? g : { default: g };
  }
  var r = vS(), s = P0(), a = n(s), u = /* @__PURE__ */ Object.create(null);
  function c(g) {
    var E = /* @__PURE__ */ Object.create(null);
    E.constructor = !1, E.__defineGetter__ = !1, E.__defineSetter__ = !1, E.__lookupGetter__ = !1;
    var v = /* @__PURE__ */ Object.create(null);
    return v.__proto__ = !1, {
      properties: {
        whitelist: r.createNewLookupObject(v, g.allowedProtoProperties),
        defaultValue: g.allowProtoPropertiesByDefault
      },
      methods: {
        whitelist: r.createNewLookupObject(E, g.allowedProtoMethods),
        defaultValue: g.allowProtoMethodsByDefault
      }
    };
  }
  function f(g, E, v) {
    return m(typeof g == "function" ? E.methods : E.properties, v);
  }
  function m(g, E) {
    return g.whitelist[E] !== void 0 ? g.whitelist[E] === !0 : g.defaultValue !== void 0 ? g.defaultValue : (p(E), !1);
  }
  function p(g) {
    u[g] !== !0 && (u[g] = !0, a.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + g + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function b() {
    Object.keys(u).forEach(function(g) {
      delete u[g];
    });
  }
  return Ni;
}
var ry;
function ih() {
  if (ry) return Bn;
  ry = 1, Bn.__esModule = !0, Bn.HandlebarsEnvironment = h;
  function n(x) {
    return x && x.__esModule ? x : { default: x };
  }
  var r = on(), s = Gn(), a = n(s), u = L0(), c = gS(), f = P0(), m = n(f), p = I0(), b = "4.7.8";
  Bn.VERSION = b;
  var g = 8;
  Bn.COMPILER_REVISION = g;
  var E = 7;
  Bn.LAST_COMPATIBLE_COMPILER_REVISION = E;
  var v = {
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
  Bn.REVISION_CHANGES = v;
  var S = "[object Object]";
  function h(x, M, T) {
    this.helpers = x || {}, this.partials = M || {}, this.decorators = T || {}, u.registerDefaultHelpers(this), c.registerDefaultDecorators(this);
  }
  h.prototype = {
    constructor: h,
    logger: m.default,
    log: m.default.log,
    registerHelper: function(M, T) {
      if (r.toString.call(M) === S) {
        if (T)
          throw new a.default("Arg not supported with multiple helpers");
        r.extend(this.helpers, M);
      } else
        this.helpers[M] = T;
    },
    unregisterHelper: function(M) {
      delete this.helpers[M];
    },
    registerPartial: function(M, T) {
      if (r.toString.call(M) === S)
        r.extend(this.partials, M);
      else {
        if (typeof T > "u")
          throw new a.default('Attempting to register a partial called "' + M + '" as undefined');
        this.partials[M] = T;
      }
    },
    unregisterPartial: function(M) {
      delete this.partials[M];
    },
    registerDecorator: function(M, T) {
      if (r.toString.call(M) === S) {
        if (T)
          throw new a.default("Arg not supported with multiple decorators");
        r.extend(this.decorators, M);
      } else
        this.decorators[M] = T;
    },
    unregisterDecorator: function(M) {
      delete this.decorators[M];
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
  return Bn.log = C, Bn.createFrame = r.createFrame, Bn.logger = m.default, Bn;
}
var Vu = { exports: {} }, ay;
function yS() {
  return ay || (ay = 1, (function(n, r) {
    r.__esModule = !0;
    function s(a) {
      this.string = a;
    }
    s.prototype.toString = s.prototype.toHTML = function() {
      return "" + this.string;
    }, r.default = s, n.exports = r.default;
  })(Vu, Vu.exports)), Vu.exports;
}
var br = {}, $u = {}, iy;
function _S() {
  if (iy) return $u;
  iy = 1, $u.__esModule = !0, $u.wrapHelper = n;
  function n(r, s) {
    if (typeof r != "function")
      return r;
    var a = function() {
      var c = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = s(c), r.apply(this, arguments);
    };
    return a;
  }
  return $u;
}
var sy;
function bS() {
  if (sy) return br;
  sy = 1, br.__esModule = !0, br.checkRevision = g, br.template = E, br.wrapProgram = v, br.resolvePartial = S, br.invokePartial = h, br.noop = C;
  function n(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function r(l) {
    if (l && l.__esModule)
      return l;
    var y = {};
    if (l != null)
      for (var w in l)
        Object.prototype.hasOwnProperty.call(l, w) && (y[w] = l[w]);
    return y.default = l, y;
  }
  var s = on(), a = r(s), u = Gn(), c = n(u), f = ih(), m = L0(), p = _S(), b = I0();
  function g(l) {
    var y = l && l[0] || 1, w = f.COMPILER_REVISION;
    if (!(y >= f.LAST_COMPATIBLE_COMPILER_REVISION && y <= f.COMPILER_REVISION))
      if (y < f.LAST_COMPATIBLE_COMPILER_REVISION) {
        var k = f.REVISION_CHANGES[w], R = f.REVISION_CHANGES[y];
        throw new c.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + k + ") or downgrade your runtime to an older version (" + R + ").");
      } else
        throw new c.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + l[1] + ").");
  }
  function E(l, y) {
    if (!y)
      throw new c.default("No environment passed to template");
    if (!l || !l.main)
      throw new c.default("Unknown template object: " + typeof l);
    l.main.decorator = l.main_d, y.VM.checkRevision(l.compiler);
    var w = l.compiler && l.compiler[0] === 7;
    function k(O, z, q) {
      q.hash && (z = a.extend({}, z, q.hash), q.ids && (q.ids[0] = !0)), O = y.VM.resolvePartial.call(this, O, z, q);
      var Y = a.extend({}, q, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), G = y.VM.invokePartial.call(this, O, z, Y);
      if (G == null && y.compile && (q.partials[q.name] = y.compile(O, l.compilerOptions, y), G = q.partials[q.name](z, Y)), G != null) {
        if (q.indent) {
          for (var W = G.split(`
`), j = 0, B = W.length; j < B && !(!W[j] && j + 1 === B); j++)
            W[j] = q.indent + W[j];
          G = W.join(`
`);
        }
        return G;
      } else
        throw new c.default("The partial " + q.name + " could not be compiled when running in runtime-only mode");
    }
    var R = {
      strict: function(z, q, Y) {
        if (!z || !(q in z))
          throw new c.default('"' + q + '" not defined in ' + z, {
            loc: Y
          });
        return R.lookupProperty(z, q);
      },
      lookupProperty: function(z, q) {
        var Y = z[q];
        if (Y == null || Object.prototype.hasOwnProperty.call(z, q) || b.resultIsAllowed(Y, R.protoAccessControl, q))
          return Y;
      },
      lookup: function(z, q) {
        for (var Y = z.length, G = 0; G < Y; G++) {
          var W = z[G] && R.lookupProperty(z[G], q);
          if (W != null)
            return z[G][q];
        }
      },
      lambda: function(z, q) {
        return typeof z == "function" ? z.call(q) : z;
      },
      escapeExpression: a.escapeExpression,
      invokePartial: k,
      fn: function(z) {
        var q = l[z];
        return q.decorator = l[z + "_d"], q;
      },
      programs: [],
      program: function(z, q, Y, G, W) {
        var j = this.programs[z], B = this.fn(z);
        return q || W || G || Y ? j = v(this, z, B, q, Y, G, W) : j || (j = this.programs[z] = v(this, z, B)), j;
      },
      data: function(z, q) {
        for (; z && q--; )
          z = z._parent;
        return z;
      },
      mergeIfNeeded: function(z, q) {
        var Y = z || q;
        return z && q && z !== q && (Y = a.extend({}, q, z)), Y;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: y.VM.noop,
      compilerInfo: l.compiler
    };
    function P(O) {
      var z = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], q = z.data;
      P._setup(z), !z.partial && l.useData && (q = x(O, q));
      var Y = void 0, G = l.useBlockParams ? [] : void 0;
      l.useDepths && (z.depths ? Y = O != z.depths[0] ? [O].concat(z.depths) : z.depths : Y = [O]);
      function W(j) {
        return "" + l.main(R, j, R.helpers, R.partials, q, G, Y);
      }
      return W = M(l.main, W, R, z.depths || [], q, G), W(O, z);
    }
    return P.isTop = !0, P._setup = function(O) {
      if (O.partial)
        R.protoAccessControl = O.protoAccessControl, R.helpers = O.helpers, R.partials = O.partials, R.decorators = O.decorators, R.hooks = O.hooks;
      else {
        var z = a.extend({}, y.helpers, O.helpers);
        T(z, R), R.helpers = z, l.usePartial && (R.partials = R.mergeIfNeeded(O.partials, y.partials)), (l.usePartial || l.useDecorators) && (R.decorators = a.extend({}, y.decorators, O.decorators)), R.hooks = {}, R.protoAccessControl = b.createProtoAccessControl(O);
        var q = O.allowCallsToHelperMissing || w;
        m.moveHelperToHooks(R, "helperMissing", q), m.moveHelperToHooks(R, "blockHelperMissing", q);
      }
    }, P._child = function(O, z, q, Y) {
      if (l.useBlockParams && !q)
        throw new c.default("must pass block params");
      if (l.useDepths && !Y)
        throw new c.default("must pass parent depths");
      return v(R, O, l[O], z, 0, q, Y);
    }, P;
  }
  function v(l, y, w, k, R, P, O) {
    function z(q) {
      var Y = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], G = O;
      return O && q != O[0] && !(q === l.nullContext && O[0] === null) && (G = [q].concat(O)), w(l, q, l.helpers, l.partials, Y.data || k, P && [Y.blockParams].concat(P), G);
    }
    return z = M(w, z, l, O, k, P), z.program = y, z.depth = O ? O.length : 0, z.blockParams = R || 0, z;
  }
  function S(l, y, w) {
    return l ? !l.call && !w.name && (w.name = l, l = w.partials[l]) : w.name === "@partial-block" ? l = w.data["partial-block"] : l = w.partials[w.name], l;
  }
  function h(l, y, w) {
    var k = w.data && w.data["partial-block"];
    w.partial = !0, w.ids && (w.data.contextPath = w.ids[0] || w.data.contextPath);
    var R = void 0;
    if (w.fn && w.fn !== C && (function() {
      w.data = f.createFrame(w.data);
      var P = w.fn;
      R = w.data["partial-block"] = function(z) {
        var q = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return q.data = f.createFrame(q.data), q.data["partial-block"] = k, P(z, q);
      }, P.partials && (w.partials = a.extend({}, w.partials, P.partials));
    })(), l === void 0 && R && (l = R), l === void 0)
      throw new c.default("The partial " + w.name + " could not be found");
    if (l instanceof Function)
      return l(y, w);
  }
  function C() {
    return "";
  }
  function x(l, y) {
    return (!y || !("root" in y)) && (y = y ? f.createFrame(y) : {}, y.root = l), y;
  }
  function M(l, y, w, k, R, P) {
    if (l.decorator) {
      var O = {};
      y = l.decorator(y, O, w, k && k[0], R, P, k), a.extend(y, O);
    }
    return y;
  }
  function T(l, y) {
    Object.keys(l).forEach(function(w) {
      var k = l[w];
      l[w] = L(k, y);
    });
  }
  function L(l, y) {
    var w = y.lookupProperty;
    return p.wrapHelper(l, function(k) {
      return a.extend({ lookupProperty: w }, k);
    });
  }
  return br;
}
var Yu = { exports: {} }, oy;
function B0() {
  return oy || (oy = 1, (function(n, r) {
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
    }, n.exports = r.default;
  })(Yu, Yu.exports)), Yu.exports;
}
var uy;
function SS() {
  return uy || (uy = 1, (function(n, r) {
    r.__esModule = !0;
    function s(T) {
      return T && T.__esModule ? T : { default: T };
    }
    function a(T) {
      if (T && T.__esModule)
        return T;
      var L = {};
      if (T != null)
        for (var l in T)
          Object.prototype.hasOwnProperty.call(T, l) && (L[l] = T[l]);
      return L.default = T, L;
    }
    var u = ih(), c = a(u), f = yS(), m = s(f), p = Gn(), b = s(p), g = on(), E = a(g), v = bS(), S = a(v), h = B0(), C = s(h);
    function x() {
      var T = new c.HandlebarsEnvironment();
      return E.extend(T, c), T.SafeString = m.default, T.Exception = b.default, T.Utils = E, T.escapeExpression = E.escapeExpression, T.VM = S, T.template = function(L) {
        return S.template(L, T);
      }, T;
    }
    var M = x();
    M.create = x, C.default(M), M.default = M, r.default = M, n.exports = r.default;
  })(ju, ju.exports)), ju.exports;
}
var Xu = { exports: {} }, ly;
function U0() {
  return ly || (ly = 1, (function(n, r) {
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
    r.default = s, n.exports = r.default;
  })(Xu, Xu.exports)), Xu.exports;
}
var Oi = {}, Fu = { exports: {} }, cy;
function wS() {
  return cy || (cy = 1, (function(n, r) {
    r.__esModule = !0;
    var s = (function() {
      var a = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function(m, p, b, g, E, v, S) {
          var h = v.length - 1;
          switch (E) {
            case 1:
              return v[h - 1];
            case 2:
              this.$ = g.prepareProgram(v[h]);
              break;
            case 3:
              this.$ = v[h];
              break;
            case 4:
              this.$ = v[h];
              break;
            case 5:
              this.$ = v[h];
              break;
            case 6:
              this.$ = v[h];
              break;
            case 7:
              this.$ = v[h];
              break;
            case 8:
              this.$ = v[h];
              break;
            case 9:
              this.$ = {
                type: "CommentStatement",
                value: g.stripComment(v[h]),
                strip: g.stripFlags(v[h], v[h]),
                loc: g.locInfo(this._$)
              };
              break;
            case 10:
              this.$ = {
                type: "ContentStatement",
                original: v[h],
                value: v[h],
                loc: g.locInfo(this._$)
              };
              break;
            case 11:
              this.$ = g.prepareRawBlock(v[h - 2], v[h - 1], v[h], this._$);
              break;
            case 12:
              this.$ = { path: v[h - 3], params: v[h - 2], hash: v[h - 1] };
              break;
            case 13:
              this.$ = g.prepareBlock(v[h - 3], v[h - 2], v[h - 1], v[h], !1, this._$);
              break;
            case 14:
              this.$ = g.prepareBlock(v[h - 3], v[h - 2], v[h - 1], v[h], !0, this._$);
              break;
            case 15:
              this.$ = { open: v[h - 5], path: v[h - 4], params: v[h - 3], hash: v[h - 2], blockParams: v[h - 1], strip: g.stripFlags(v[h - 5], v[h]) };
              break;
            case 16:
              this.$ = { path: v[h - 4], params: v[h - 3], hash: v[h - 2], blockParams: v[h - 1], strip: g.stripFlags(v[h - 5], v[h]) };
              break;
            case 17:
              this.$ = { path: v[h - 4], params: v[h - 3], hash: v[h - 2], blockParams: v[h - 1], strip: g.stripFlags(v[h - 5], v[h]) };
              break;
            case 18:
              this.$ = { strip: g.stripFlags(v[h - 1], v[h - 1]), program: v[h] };
              break;
            case 19:
              var C = g.prepareBlock(v[h - 2], v[h - 1], v[h], v[h], !1, this._$), x = g.prepareProgram([C], v[h - 1].loc);
              x.chained = !0, this.$ = { strip: v[h - 2].strip, program: x, chain: !0 };
              break;
            case 20:
              this.$ = v[h];
              break;
            case 21:
              this.$ = { path: v[h - 1], strip: g.stripFlags(v[h - 2], v[h]) };
              break;
            case 22:
              this.$ = g.prepareMustache(v[h - 3], v[h - 2], v[h - 1], v[h - 4], g.stripFlags(v[h - 4], v[h]), this._$);
              break;
            case 23:
              this.$ = g.prepareMustache(v[h - 3], v[h - 2], v[h - 1], v[h - 4], g.stripFlags(v[h - 4], v[h]), this._$);
              break;
            case 24:
              this.$ = {
                type: "PartialStatement",
                name: v[h - 3],
                params: v[h - 2],
                hash: v[h - 1],
                indent: "",
                strip: g.stripFlags(v[h - 4], v[h]),
                loc: g.locInfo(this._$)
              };
              break;
            case 25:
              this.$ = g.preparePartialBlock(v[h - 2], v[h - 1], v[h], this._$);
              break;
            case 26:
              this.$ = { path: v[h - 3], params: v[h - 2], hash: v[h - 1], strip: g.stripFlags(v[h - 4], v[h]) };
              break;
            case 27:
              this.$ = v[h];
              break;
            case 28:
              this.$ = v[h];
              break;
            case 29:
              this.$ = {
                type: "SubExpression",
                path: v[h - 3],
                params: v[h - 2],
                hash: v[h - 1],
                loc: g.locInfo(this._$)
              };
              break;
            case 30:
              this.$ = { type: "Hash", pairs: v[h], loc: g.locInfo(this._$) };
              break;
            case 31:
              this.$ = { type: "HashPair", key: g.id(v[h - 2]), value: v[h], loc: g.locInfo(this._$) };
              break;
            case 32:
              this.$ = g.id(v[h - 1]);
              break;
            case 33:
              this.$ = v[h];
              break;
            case 34:
              this.$ = v[h];
              break;
            case 35:
              this.$ = { type: "StringLiteral", value: v[h], original: v[h], loc: g.locInfo(this._$) };
              break;
            case 36:
              this.$ = { type: "NumberLiteral", value: Number(v[h]), original: Number(v[h]), loc: g.locInfo(this._$) };
              break;
            case 37:
              this.$ = { type: "BooleanLiteral", value: v[h] === "true", original: v[h] === "true", loc: g.locInfo(this._$) };
              break;
            case 38:
              this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: g.locInfo(this._$) };
              break;
            case 39:
              this.$ = { type: "NullLiteral", original: null, value: null, loc: g.locInfo(this._$) };
              break;
            case 40:
              this.$ = v[h];
              break;
            case 41:
              this.$ = v[h];
              break;
            case 42:
              this.$ = g.preparePath(!0, v[h], this._$);
              break;
            case 43:
              this.$ = g.preparePath(!1, v[h], this._$);
              break;
            case 44:
              v[h - 2].push({ part: g.id(v[h]), original: v[h], separator: v[h - 1] }), this.$ = v[h - 2];
              break;
            case 45:
              this.$ = [{ part: g.id(v[h]), original: v[h] }];
              break;
            case 46:
              this.$ = [];
              break;
            case 47:
              v[h - 1].push(v[h]);
              break;
            case 48:
              this.$ = [];
              break;
            case 49:
              v[h - 1].push(v[h]);
              break;
            case 50:
              this.$ = [];
              break;
            case 51:
              v[h - 1].push(v[h]);
              break;
            case 58:
              this.$ = [];
              break;
            case 59:
              v[h - 1].push(v[h]);
              break;
            case 64:
              this.$ = [];
              break;
            case 65:
              v[h - 1].push(v[h]);
              break;
            case 70:
              this.$ = [];
              break;
            case 71:
              v[h - 1].push(v[h]);
              break;
            case 78:
              this.$ = [];
              break;
            case 79:
              v[h - 1].push(v[h]);
              break;
            case 82:
              this.$ = [];
              break;
            case 83:
              v[h - 1].push(v[h]);
              break;
            case 86:
              this.$ = [];
              break;
            case 87:
              v[h - 1].push(v[h]);
              break;
            case 90:
              this.$ = [];
              break;
            case 91:
              v[h - 1].push(v[h]);
              break;
            case 94:
              this.$ = [];
              break;
            case 95:
              v[h - 1].push(v[h]);
              break;
            case 98:
              this.$ = [v[h]];
              break;
            case 99:
              v[h - 1].push(v[h]);
              break;
            case 100:
              this.$ = [v[h]];
              break;
            case 101:
              v[h - 1].push(v[h]);
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
        parseError: function(m, p) {
          throw new Error(m);
        },
        parse: function(m) {
          var p = this, b = [0], g = [null], E = [], v = this.table, S = "", h = 0, C = 0;
          this.lexer.setInput(m), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var x = this.lexer.yylloc;
          E.push(x);
          var M = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function T() {
            var Y;
            return Y = p.lexer.lex() || 1, typeof Y != "number" && (Y = p.symbols_[Y] || Y), Y;
          }
          for (var L, l, y, w, k = {}, R, P, O, z; ; ) {
            if (l = b[b.length - 1], this.defaultActions[l] ? y = this.defaultActions[l] : ((L === null || typeof L > "u") && (L = T()), y = v[l] && v[l][L]), typeof y > "u" || !y.length || !y[0]) {
              var q = "";
              {
                z = [];
                for (R in v[l]) this.terminals_[R] && R > 2 && z.push("'" + this.terminals_[R] + "'");
                this.lexer.showPosition ? q = "Parse error on line " + (h + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + z.join(", ") + ", got '" + (this.terminals_[L] || L) + "'" : q = "Parse error on line " + (h + 1) + ": Unexpected " + (L == 1 ? "end of input" : "'" + (this.terminals_[L] || L) + "'"), this.parseError(q, { text: this.lexer.match, token: this.terminals_[L] || L, line: this.lexer.yylineno, loc: x, expected: z });
              }
            }
            if (y[0] instanceof Array && y.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + l + ", token: " + L);
            switch (y[0]) {
              case 1:
                b.push(L), g.push(this.lexer.yytext), E.push(this.lexer.yylloc), b.push(y[1]), L = null, C = this.lexer.yyleng, S = this.lexer.yytext, h = this.lexer.yylineno, x = this.lexer.yylloc;
                break;
              case 2:
                if (P = this.productions_[y[1]][1], k.$ = g[g.length - P], k._$ = { first_line: E[E.length - (P || 1)].first_line, last_line: E[E.length - 1].last_line, first_column: E[E.length - (P || 1)].first_column, last_column: E[E.length - 1].last_column }, M && (k._$.range = [E[E.length - (P || 1)].range[0], E[E.length - 1].range[1]]), w = this.performAction.call(k, S, C, h, this.yy, y[1], g, E), typeof w < "u")
                  return w;
                P && (b = b.slice(0, -1 * P * 2), g = g.slice(0, -1 * P), E = E.slice(0, -1 * P)), b.push(this.productions_[y[1]][0]), g.push(k.$), E.push(k._$), O = v[b[b.length - 2]][b[b.length - 1]], b.push(O);
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
          parseError: function(p, b) {
            if (this.yy.parser)
              this.yy.parser.parseError(p, b);
            else
              throw new Error(p);
          },
          setInput: function(p) {
            return this._input = p, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          input: function() {
            var p = this._input[0];
            this.yytext += p, this.yyleng++, this.offset++, this.match += p, this.matched += p;
            var b = p.match(/(?:\r\n?|\n).*/g);
            return b ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), p;
          },
          unput: function(p) {
            var b = p.length, g = p.split(/(?:\r\n?|\n)/g);
            this._input = p + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - b - 1), this.offset -= b;
            var E = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), g.length - 1 && (this.yylineno -= g.length - 1);
            var v = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: g ? (g.length === E.length ? this.yylloc.first_column : 0) + E[E.length - g.length].length - g[0].length : this.yylloc.first_column - b
            }, this.options.ranges && (this.yylloc.range = [v[0], v[0] + this.yyleng - b]), this;
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
            var p = this.pastInput(), b = new Array(p.length + 1).join("-");
            return p + this.upcomingInput() + `
` + b + "^";
          },
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var p, b, g, E, v;
            this._more || (this.yytext = "", this.match = "");
            for (var S = this._currentRules(), h = 0; h < S.length && (g = this._input.match(this.rules[S[h]]), !(g && (!b || g[0].length > b[0].length) && (b = g, E = h, !this.options.flex))); h++)
              ;
            return b ? (v = b[0].match(/(?:\r\n?|\n).*/g), v && (this.yylineno += v.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: v ? v[v.length - 1].length - v[v.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + b[0].length
            }, this.yytext += b[0], this.match += b[0], this.matches = b, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(b[0].length), this.matched += b[0], p = this.performAction.call(this, this.yy, this, S[E], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), p || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
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
        return f.options = {}, f.performAction = function(p, b, g, E) {
          function v(S, h) {
            return b.yytext = b.yytext.substring(S, b.yyleng - h + S);
          }
          switch (g) {
            case 0:
              if (b.yytext.slice(-2) === "\\\\" ? (v(0, 1), this.begin("mu")) : b.yytext.slice(-1) === "\\" ? (v(0, 1), this.begin("emu")) : this.begin("mu"), b.yytext) return 15;
              break;
            case 1:
              return 15;
            case 2:
              return this.popState(), 15;
            case 3:
              return this.begin("raw"), 15;
            case 4:
              return this.popState(), this.conditionStack[this.conditionStack.length - 1] === "raw" ? 15 : (v(5, 9), "END_RAW_BLOCK");
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
              this.unput(b.yytext), this.popState(), this.begin("com");
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
              return b.yytext = v(1, 2).replace(/\\"/g, '"'), 80;
            case 32:
              return b.yytext = v(1, 2).replace(/\\'/g, "'"), 80;
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
              return b.yytext = b.yytext.replace(/\\([\\\]])/g, "$1"), 72;
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
    r.default = s, n.exports = r.default;
  })(Fu, Fu.exports)), Fu.exports;
}
var Qu = { exports: {} }, Ku = { exports: {} }, dy;
function H0() {
  return dy || (dy = 1, (function(n, r) {
    r.__esModule = !0;
    function s(b) {
      return b && b.__esModule ? b : { default: b };
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
        var v = this.accept(g[E]);
        if (this.mutating) {
          if (v && !c.prototype[v.type])
            throw new u.default('Unexpected node type "' + v.type + '" found when accepting ' + E + " on " + g.type);
          g[E] = v;
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
        for (var E = 0, v = g.length; E < v; E++)
          this.acceptKey(g, E), g[E] || (g.splice(E, 1), E--, v--);
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
    function f(b) {
      this.acceptRequired(b, "path"), this.acceptArray(b.params), this.acceptKey(b, "hash");
    }
    function m(b) {
      f.call(this, b), this.acceptKey(b, "program"), this.acceptKey(b, "inverse");
    }
    function p(b) {
      this.acceptRequired(b, "name"), this.acceptArray(b.params), this.acceptKey(b, "hash");
    }
    r.default = c, n.exports = r.default;
  })(Ku, Ku.exports)), Ku.exports;
}
var fy;
function ES() {
  return fy || (fy = 1, (function(n, r) {
    r.__esModule = !0;
    function s(g) {
      return g && g.__esModule ? g : { default: g };
    }
    var a = H0(), u = s(a);
    function c() {
      var g = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = g;
    }
    c.prototype = new u.default(), c.prototype.Program = function(g) {
      var E = !this.options.ignoreStandalone, v = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var S = g.body, h = 0, C = S.length; h < C; h++) {
        var x = S[h], M = this.accept(x);
        if (M) {
          var T = f(S, h, v), L = m(S, h, v), l = M.openStandalone && T, y = M.closeStandalone && L, w = M.inlineStandalone && T && L;
          M.close && p(S, h, !0), M.open && b(S, h, !0), E && w && (p(S, h), b(S, h) && x.type === "PartialStatement" && (x.indent = /([ \t]+$)/.exec(S[h - 1].original)[1])), E && l && (p((x.program || x.inverse).body), b(S, h)), E && y && (p(S, h), b((x.inverse || x.program).body));
        }
      }
      return g;
    }, c.prototype.BlockStatement = c.prototype.DecoratorBlock = c.prototype.PartialBlockStatement = function(g) {
      this.accept(g.program), this.accept(g.inverse);
      var E = g.program || g.inverse, v = g.program && g.inverse, S = v, h = v;
      if (v && v.chained)
        for (S = v.body[0].program; h.chained; )
          h = h.body[h.body.length - 1].program;
      var C = {
        open: g.openStrip.open,
        close: g.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: m(E.body),
        closeStandalone: f((S || E).body)
      };
      if (g.openStrip.close && p(E.body, null, !0), v) {
        var x = g.inverseStrip;
        x.open && b(E.body, null, !0), x.close && p(S.body, null, !0), g.closeStrip.open && b(h.body, null, !0), !this.options.ignoreStandalone && f(E.body) && m(S.body) && (b(E.body), p(S.body));
      } else g.closeStrip.open && b(E.body, null, !0);
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
    function f(g, E, v) {
      E === void 0 && (E = g.length);
      var S = g[E - 1], h = g[E - 2];
      if (!S)
        return v;
      if (S.type === "ContentStatement")
        return (h || !v ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(S.original);
    }
    function m(g, E, v) {
      E === void 0 && (E = -1);
      var S = g[E + 1], h = g[E + 2];
      if (!S)
        return v;
      if (S.type === "ContentStatement")
        return (h || !v ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(S.original);
    }
    function p(g, E, v) {
      var S = g[E == null ? 0 : E + 1];
      if (!(!S || S.type !== "ContentStatement" || !v && S.rightStripped)) {
        var h = S.value;
        S.value = S.value.replace(v ? /^\s+/ : /^[ \t]*\r?\n?/, ""), S.rightStripped = S.value !== h;
      }
    }
    function b(g, E, v) {
      var S = g[E == null ? g.length - 1 : E - 1];
      if (!(!S || S.type !== "ContentStatement" || !v && S.leftStripped)) {
        var h = S.value;
        return S.value = S.value.replace(v ? /\s+$/ : /[ \t]+$/, ""), S.leftStripped = S.value !== h, S.leftStripped;
      }
    }
    r.default = c, n.exports = r.default;
  })(Qu, Qu.exports)), Qu.exports;
}
var mn = {}, hy;
function CS() {
  if (hy) return mn;
  hy = 1, mn.__esModule = !0, mn.SourceLocation = u, mn.id = c, mn.stripFlags = f, mn.stripComment = m, mn.preparePath = p, mn.prepareMustache = b, mn.prepareRawBlock = g, mn.prepareBlock = E, mn.prepareProgram = v, mn.preparePartialBlock = S;
  function n(h) {
    return h && h.__esModule ? h : { default: h };
  }
  var r = Gn(), s = n(r);
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
    for (var M = h ? "@" : "", T = [], L = 0, l = 0, y = C.length; l < y; l++) {
      var w = C[l].part, k = C[l].original !== w;
      if (M += (C[l].separator || "") + w, !k && (w === ".." || w === "." || w === "this")) {
        if (T.length > 0)
          throw new s.default("Invalid path: " + M, { loc: x });
        w === ".." && L++;
      } else
        T.push(w);
    }
    return {
      type: "PathExpression",
      data: h,
      depth: L,
      parts: T,
      original: M,
      loc: x
    };
  }
  function b(h, C, x, M, T, L) {
    var l = M.charAt(3) || M.charAt(2), y = l !== "{" && l !== "&", w = /\*/.test(M);
    return {
      type: w ? "Decorator" : "MustacheStatement",
      path: h,
      params: C,
      hash: x,
      escaped: y,
      strip: T,
      loc: this.locInfo(L)
    };
  }
  function g(h, C, x, M) {
    a(h, x), M = this.locInfo(M);
    var T = {
      type: "Program",
      body: C,
      strip: {},
      loc: M
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
      loc: M
    };
  }
  function E(h, C, x, M, T, L) {
    M && M.path && a(h, M);
    var l = /\*/.test(h.open);
    C.blockParams = h.blockParams;
    var y = void 0, w = void 0;
    if (x) {
      if (l)
        throw new s.default("Unexpected inverse block on decorator", x);
      x.chain && (x.program.body[0].closeStrip = M.strip), w = x.strip, y = x.program;
    }
    return T && (T = y, y = C, C = T), {
      type: l ? "DecoratorBlock" : "BlockStatement",
      path: h.path,
      params: h.params,
      hash: h.hash,
      program: C,
      inverse: y,
      openStrip: h.strip,
      inverseStrip: w,
      closeStrip: M && M.strip,
      loc: this.locInfo(L)
    };
  }
  function v(h, C) {
    if (!C && h.length) {
      var x = h[0].loc, M = h[h.length - 1].loc;
      x && M && (C = {
        source: x.source,
        start: {
          line: x.start.line,
          column: x.start.column
        },
        end: {
          line: M.end.line,
          column: M.end.column
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
  function S(h, C, x, M) {
    return a(h, x), {
      type: "PartialBlockStatement",
      name: h.path,
      params: h.params,
      hash: h.hash,
      program: C,
      openStrip: h.strip,
      closeStrip: x && x.strip,
      loc: this.locInfo(M)
    };
  }
  return mn;
}
var py;
function kS() {
  if (py) return Oi;
  py = 1, Oi.__esModule = !0, Oi.parseWithoutProcessing = g, Oi.parse = E;
  function n(v) {
    if (v && v.__esModule)
      return v;
    var S = {};
    if (v != null)
      for (var h in v)
        Object.prototype.hasOwnProperty.call(v, h) && (S[h] = v[h]);
    return S.default = v, S;
  }
  function r(v) {
    return v && v.__esModule ? v : { default: v };
  }
  var s = wS(), a = r(s), u = ES(), c = r(u), f = CS(), m = n(f), p = on();
  Oi.parser = a.default;
  var b = {};
  p.extend(b, m);
  function g(v, S) {
    if (v.type === "Program")
      return v;
    a.default.yy = b, b.locInfo = function(C) {
      return new b.SourceLocation(S && S.srcName, C);
    };
    var h = a.default.parse(v);
    return h;
  }
  function E(v, S) {
    var h = g(v, S), C = new c.default(S);
    return C.accept(h);
  }
  return Oi;
}
var Mi = {}, my;
function AS() {
  if (my) return Mi;
  my = 1, Mi.__esModule = !0, Mi.Compiler = m, Mi.precompile = p, Mi.compile = b;
  function n(v) {
    return v && v.__esModule ? v : { default: v };
  }
  var r = Gn(), s = n(r), a = on(), u = U0(), c = n(u), f = [].slice;
  function m() {
  }
  m.prototype = {
    compiler: m,
    equals: function(S) {
      var h = this.opcodes.length;
      if (S.opcodes.length !== h)
        return !1;
      for (var C = 0; C < h; C++) {
        var x = this.opcodes[C], M = S.opcodes[C];
        if (x.opcode !== M.opcode || !g(x.args, M.args))
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
      var x = S.name.original, M = S.name.type === "SubExpression";
      M && this.accept(S.name), this.setupFullMustacheParams(S, h, void 0, !0);
      var T = S.indent || "";
      this.options.preventIndent && T && (this.opcode("appendContent", T), T = ""), this.opcode("invokePartial", M, x, T), this.opcode("append");
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
      var x = S.path, M = x.parts[0], T = h != null || C != null;
      this.opcode("getContext", x.depth), this.opcode("pushProgram", h), this.opcode("pushProgram", C), x.strict = !0, this.accept(x), this.opcode("invokeAmbiguous", M, T);
    },
    simpleSexpr: function(S) {
      var h = S.path;
      h.strict = !0, this.accept(h), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(S, h, C) {
      var x = this.setupFullMustacheParams(S, h, C), M = S.path, T = M.parts[0];
      if (this.options.knownHelpers[T])
        this.opcode("invokeKnownHelper", x.length, T);
      else {
        if (this.options.knownHelpersOnly)
          throw new s.default("You specified knownHelpersOnly, but used the unknown helper " + T, S);
        M.strict = !0, M.falsy = !0, this.accept(M), this.opcode("invokeHelper", x.length, M.original, c.default.helpers.simpleId(M));
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
      var h = c.default.helpers.simpleId(S.path), C = h && !!this.blockParamIndex(S.path.parts[0]), x = !C && c.default.helpers.helperExpression(S), M = !C && (x || h);
      if (M && !x) {
        var T = S.path.parts[0], L = this.options;
        L.knownHelpers[T] ? x = !0 : L.knownHelpersOnly && (M = !1);
      }
      return x ? "helper" : M ? "ambiguous" : "simple";
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
      var M = S.params;
      return this.pushParams(M), this.opcode("pushProgram", h), this.opcode("pushProgram", C), S.hash ? this.accept(S.hash) : this.opcode("emptyHash", x), M;
    },
    blockParamIndex: function(S) {
      for (var h = 0, C = this.options.blockParams.length; h < C; h++) {
        var x = this.options.blockParams[h], M = x && a.indexOf(x, S);
        if (x && M >= 0)
          return [h, M];
      }
    }
  };
  function p(v, S, h) {
    if (v == null || typeof v != "string" && v.type !== "Program")
      throw new s.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + v);
    S = S || {}, "data" in S || (S.data = !0), S.compat && (S.useDepths = !0);
    var C = h.parse(v, S), x = new h.Compiler().compile(C, S);
    return new h.JavaScriptCompiler().compile(x, S);
  }
  function b(v, S, h) {
    if (S === void 0 && (S = {}), v == null || typeof v != "string" && v.type !== "Program")
      throw new s.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + v);
    S = a.extend({}, S), "data" in S || (S.data = !0), S.compat && (S.useDepths = !0);
    var C = void 0;
    function x() {
      var T = h.parse(v, S), L = new h.Compiler().compile(T, S), l = new h.JavaScriptCompiler().compile(L, S, void 0, !0);
      return h.template(l);
    }
    function M(T, L) {
      return C || (C = x()), C.call(this, T, L);
    }
    return M._setup = function(T) {
      return C || (C = x()), C._setup(T);
    }, M._child = function(T, L, l, y) {
      return C || (C = x()), C._child(T, L, l, y);
    }, M;
  }
  function g(v, S) {
    if (v === S)
      return !0;
    if (a.isArray(v) && a.isArray(S) && v.length === S.length) {
      for (var h = 0; h < v.length; h++)
        if (!g(v[h], S[h]))
          return !1;
      return !0;
    }
  }
  function E(v) {
    if (!v.path.parts) {
      var S = v.path;
      v.path = {
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
var Ju = { exports: {} }, Wu = { exports: {} }, Zs = {}, ff = {}, el = {}, tl = {}, gy;
function xS() {
  if (gy) return tl;
  gy = 1;
  var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return tl.encode = function(r) {
    if (0 <= r && r < n.length)
      return n[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, tl.decode = function(r) {
    var s = 65, a = 90, u = 97, c = 122, f = 48, m = 57, p = 43, b = 47, g = 26, E = 52;
    return s <= r && r <= a ? r - s : u <= r && r <= c ? r - u + g : f <= r && r <= m ? r - f + E : r == p ? 62 : r == b ? 63 : -1;
  }, tl;
}
var vy;
function q0() {
  if (vy) return el;
  vy = 1;
  var n = xS(), r = 5, s = 1 << r, a = s - 1, u = s;
  function c(m) {
    return m < 0 ? (-m << 1) + 1 : (m << 1) + 0;
  }
  function f(m) {
    var p = (m & 1) === 1, b = m >> 1;
    return p ? -b : b;
  }
  return el.encode = function(p) {
    var b = "", g, E = c(p);
    do
      g = E & a, E >>>= r, E > 0 && (g |= u), b += n.encode(g);
    while (E > 0);
    return b;
  }, el.decode = function(p, b, g) {
    var E = p.length, v = 0, S = 0, h, C;
    do {
      if (b >= E)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (C = n.decode(p.charCodeAt(b++)), C === -1)
        throw new Error("Invalid base64 digit: " + p.charAt(b - 1));
      h = !!(C & u), C &= a, v = v + (C << S), S += r;
    } while (h);
    g.value = f(v), g.rest = b;
  }, el;
}
var hf = {}, yy;
function lo() {
  return yy || (yy = 1, (function(n) {
    function r(l, y, w) {
      if (y in l)
        return l[y];
      if (arguments.length === 3)
        return w;
      throw new Error('"' + y + '" is a required argument.');
    }
    n.getArg = r;
    var s = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, a = /^data:.+\,.+$/;
    function u(l) {
      var y = l.match(s);
      return y ? {
        scheme: y[1],
        auth: y[2],
        host: y[3],
        port: y[4],
        path: y[5]
      } : null;
    }
    n.urlParse = u;
    function c(l) {
      var y = "";
      return l.scheme && (y += l.scheme + ":"), y += "//", l.auth && (y += l.auth + "@"), l.host && (y += l.host), l.port && (y += ":" + l.port), l.path && (y += l.path), y;
    }
    n.urlGenerate = c;
    function f(l) {
      var y = l, w = u(l);
      if (w) {
        if (!w.path)
          return l;
        y = w.path;
      }
      for (var k = n.isAbsolute(y), R = y.split(/\/+/), P, O = 0, z = R.length - 1; z >= 0; z--)
        P = R[z], P === "." ? R.splice(z, 1) : P === ".." ? O++ : O > 0 && (P === "" ? (R.splice(z + 1, O), O = 0) : (R.splice(z, 2), O--));
      return y = R.join("/"), y === "" && (y = k ? "/" : "."), w ? (w.path = y, c(w)) : y;
    }
    n.normalize = f;
    function m(l, y) {
      l === "" && (l = "."), y === "" && (y = ".");
      var w = u(y), k = u(l);
      if (k && (l = k.path || "/"), w && !w.scheme)
        return k && (w.scheme = k.scheme), c(w);
      if (w || y.match(a))
        return y;
      if (k && !k.host && !k.path)
        return k.host = y, c(k);
      var R = y.charAt(0) === "/" ? y : f(l.replace(/\/+$/, "") + "/" + y);
      return k ? (k.path = R, c(k)) : R;
    }
    n.join = m, n.isAbsolute = function(l) {
      return l.charAt(0) === "/" || s.test(l);
    };
    function p(l, y) {
      l === "" && (l = "."), l = l.replace(/\/$/, "");
      for (var w = 0; y.indexOf(l + "/") !== 0; ) {
        var k = l.lastIndexOf("/");
        if (k < 0 || (l = l.slice(0, k), l.match(/^([^\/]+:\/)?\/*$/)))
          return y;
        ++w;
      }
      return Array(w + 1).join("../") + y.substr(l.length + 1);
    }
    n.relative = p;
    var b = (function() {
      var l = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in l);
    })();
    function g(l) {
      return l;
    }
    function E(l) {
      return S(l) ? "$" + l : l;
    }
    n.toSetString = b ? g : E;
    function v(l) {
      return S(l) ? l.slice(1) : l;
    }
    n.fromSetString = b ? g : v;
    function S(l) {
      if (!l)
        return !1;
      var y = l.length;
      if (y < 9 || l.charCodeAt(y - 1) !== 95 || l.charCodeAt(y - 2) !== 95 || l.charCodeAt(y - 3) !== 111 || l.charCodeAt(y - 4) !== 116 || l.charCodeAt(y - 5) !== 111 || l.charCodeAt(y - 6) !== 114 || l.charCodeAt(y - 7) !== 112 || l.charCodeAt(y - 8) !== 95 || l.charCodeAt(y - 9) !== 95)
        return !1;
      for (var w = y - 10; w >= 0; w--)
        if (l.charCodeAt(w) !== 36)
          return !1;
      return !0;
    }
    function h(l, y, w) {
      var k = x(l.source, y.source);
      return k !== 0 || (k = l.originalLine - y.originalLine, k !== 0) || (k = l.originalColumn - y.originalColumn, k !== 0 || w) || (k = l.generatedColumn - y.generatedColumn, k !== 0) || (k = l.generatedLine - y.generatedLine, k !== 0) ? k : x(l.name, y.name);
    }
    n.compareByOriginalPositions = h;
    function C(l, y, w) {
      var k = l.generatedLine - y.generatedLine;
      return k !== 0 || (k = l.generatedColumn - y.generatedColumn, k !== 0 || w) || (k = x(l.source, y.source), k !== 0) || (k = l.originalLine - y.originalLine, k !== 0) || (k = l.originalColumn - y.originalColumn, k !== 0) ? k : x(l.name, y.name);
    }
    n.compareByGeneratedPositionsDeflated = C;
    function x(l, y) {
      return l === y ? 0 : l === null ? 1 : y === null ? -1 : l > y ? 1 : -1;
    }
    function M(l, y) {
      var w = l.generatedLine - y.generatedLine;
      return w !== 0 || (w = l.generatedColumn - y.generatedColumn, w !== 0) || (w = x(l.source, y.source), w !== 0) || (w = l.originalLine - y.originalLine, w !== 0) || (w = l.originalColumn - y.originalColumn, w !== 0) ? w : x(l.name, y.name);
    }
    n.compareByGeneratedPositionsInflated = M;
    function T(l) {
      return JSON.parse(l.replace(/^\)]}'[^\n]*\n/, ""));
    }
    n.parseSourceMapInput = T;
    function L(l, y, w) {
      if (y = y || "", l && (l[l.length - 1] !== "/" && y[0] !== "/" && (l += "/"), y = l + y), w) {
        var k = u(w);
        if (!k)
          throw new Error("sourceMapURL could not be parsed");
        if (k.path) {
          var R = k.path.lastIndexOf("/");
          R >= 0 && (k.path = k.path.substring(0, R + 1));
        }
        y = m(c(k), y);
      }
      return f(y);
    }
    n.computeSourceURL = L;
  })(hf)), hf;
}
var pf = {}, _y;
function Z0() {
  if (_y) return pf;
  _y = 1;
  var n = lo(), r = Object.prototype.hasOwnProperty, s = typeof Map < "u";
  function a() {
    this._array = [], this._set = s ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return a.fromArray = function(c, f) {
    for (var m = new a(), p = 0, b = c.length; p < b; p++)
      m.add(c[p], f);
    return m;
  }, a.prototype.size = function() {
    return s ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, a.prototype.add = function(c, f) {
    var m = s ? c : n.toSetString(c), p = s ? this.has(c) : r.call(this._set, m), b = this._array.length;
    (!p || f) && this._array.push(c), p || (s ? this._set.set(c, b) : this._set[m] = b);
  }, a.prototype.has = function(c) {
    if (s)
      return this._set.has(c);
    var f = n.toSetString(c);
    return r.call(this._set, f);
  }, a.prototype.indexOf = function(c) {
    if (s) {
      var f = this._set.get(c);
      if (f >= 0)
        return f;
    } else {
      var m = n.toSetString(c);
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
  }, pf.ArraySet = a, pf;
}
var mf = {}, by;
function TS() {
  if (by) return mf;
  by = 1;
  var n = lo();
  function r(a, u) {
    var c = a.generatedLine, f = u.generatedLine, m = a.generatedColumn, p = u.generatedColumn;
    return f > c || f == c && p >= m || n.compareByGeneratedPositionsInflated(a, u) <= 0;
  }
  function s() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return s.prototype.unsortedForEach = function(u, c) {
    this._array.forEach(u, c);
  }, s.prototype.add = function(u) {
    r(this._last, u) ? (this._last = u, this._array.push(u)) : (this._sorted = !1, this._array.push(u));
  }, s.prototype.toArray = function() {
    return this._sorted || (this._array.sort(n.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, mf.MappingList = s, mf;
}
var Sy;
function G0() {
  if (Sy) return ff;
  Sy = 1;
  var n = q0(), r = lo(), s = Z0().ArraySet, a = TS().MappingList;
  function u(c) {
    c || (c = {}), this._file = r.getArg(c, "file", null), this._sourceRoot = r.getArg(c, "sourceRoot", null), this._skipValidation = r.getArg(c, "skipValidation", !1), this._sources = new s(), this._names = new s(), this._mappings = new a(), this._sourcesContents = null;
  }
  return u.prototype._version = 3, u.fromSourceMap = function(f) {
    var m = f.sourceRoot, p = new u({
      file: f.file,
      sourceRoot: m
    });
    return f.eachMapping(function(b) {
      var g = {
        generated: {
          line: b.generatedLine,
          column: b.generatedColumn
        }
      };
      b.source != null && (g.source = b.source, m != null && (g.source = r.relative(m, g.source)), g.original = {
        line: b.originalLine,
        column: b.originalColumn
      }, b.name != null && (g.name = b.name)), p.addMapping(g);
    }), f.sources.forEach(function(b) {
      var g = b;
      m !== null && (g = r.relative(m, b)), p._sources.has(g) || p._sources.add(g);
      var E = f.sourceContentFor(b);
      E != null && p.setSourceContent(b, E);
    }), p;
  }, u.prototype.addMapping = function(f) {
    var m = r.getArg(f, "generated"), p = r.getArg(f, "original", null), b = r.getArg(f, "source", null), g = r.getArg(f, "name", null);
    this._skipValidation || this._validateMapping(m, p, b, g), b != null && (b = String(b), this._sources.has(b) || this._sources.add(b)), g != null && (g = String(g), this._names.has(g) || this._names.add(g)), this._mappings.add({
      generatedLine: m.line,
      generatedColumn: m.column,
      originalLine: p != null && p.line,
      originalColumn: p != null && p.column,
      source: b,
      name: g
    });
  }, u.prototype.setSourceContent = function(f, m) {
    var p = f;
    this._sourceRoot != null && (p = r.relative(this._sourceRoot, p)), m != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[r.toSetString(p)] = m) : this._sourcesContents && (delete this._sourcesContents[r.toSetString(p)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, u.prototype.applySourceMap = function(f, m, p) {
    var b = m;
    if (m == null) {
      if (f.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      b = f.file;
    }
    var g = this._sourceRoot;
    g != null && (b = r.relative(g, b));
    var E = new s(), v = new s();
    this._mappings.unsortedForEach(function(S) {
      if (S.source === b && S.originalLine != null) {
        var h = f.originalPositionFor({
          line: S.originalLine,
          column: S.originalColumn
        });
        h.source != null && (S.source = h.source, p != null && (S.source = r.join(p, S.source)), g != null && (S.source = r.relative(g, S.source)), S.originalLine = h.line, S.originalColumn = h.column, h.name != null && (S.name = h.name));
      }
      var C = S.source;
      C != null && !E.has(C) && E.add(C);
      var x = S.name;
      x != null && !v.has(x) && v.add(x);
    }, this), this._sources = E, this._names = v, f.sources.forEach(function(S) {
      var h = f.sourceContentFor(S);
      h != null && (p != null && (S = r.join(p, S)), g != null && (S = r.relative(g, S)), this.setSourceContent(S, h));
    }, this);
  }, u.prototype._validateMapping = function(f, m, p, b) {
    if (m && typeof m.line != "number" && typeof m.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(f && "line" in f && "column" in f && f.line > 0 && f.column >= 0 && !m && !p && !b)) {
      if (f && "line" in f && "column" in f && m && "line" in m && "column" in m && f.line > 0 && f.column >= 0 && m.line > 0 && m.column >= 0 && p)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: f,
        source: p,
        original: m,
        name: b
      }));
    }
  }, u.prototype._serializeMappings = function() {
    for (var f = 0, m = 1, p = 0, b = 0, g = 0, E = 0, v = "", S, h, C, x, M = this._mappings.toArray(), T = 0, L = M.length; T < L; T++) {
      if (h = M[T], S = "", h.generatedLine !== m)
        for (f = 0; h.generatedLine !== m; )
          S += ";", m++;
      else if (T > 0) {
        if (!r.compareByGeneratedPositionsInflated(h, M[T - 1]))
          continue;
        S += ",";
      }
      S += n.encode(h.generatedColumn - f), f = h.generatedColumn, h.source != null && (x = this._sources.indexOf(h.source), S += n.encode(x - E), E = x, S += n.encode(h.originalLine - 1 - b), b = h.originalLine - 1, S += n.encode(h.originalColumn - p), p = h.originalColumn, h.name != null && (C = this._names.indexOf(h.name), S += n.encode(C - g), g = C)), v += S;
    }
    return v;
  }, u.prototype._generateSourcesContent = function(f, m) {
    return f.map(function(p) {
      if (!this._sourcesContents)
        return null;
      m != null && (p = r.relative(m, p));
      var b = r.toSetString(p);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, b) ? this._sourcesContents[b] : null;
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
  }, ff.SourceMapGenerator = u, ff;
}
var Gs = {}, gf = {}, wy;
function NS() {
  return wy || (wy = 1, (function(n) {
    n.GREATEST_LOWER_BOUND = 1, n.LEAST_UPPER_BOUND = 2;
    function r(s, a, u, c, f, m) {
      var p = Math.floor((a - s) / 2) + s, b = f(u, c[p], !0);
      return b === 0 ? p : b > 0 ? a - p > 1 ? r(p, a, u, c, f, m) : m == n.LEAST_UPPER_BOUND ? a < c.length ? a : -1 : p : p - s > 1 ? r(s, p, u, c, f, m) : m == n.LEAST_UPPER_BOUND ? p : s < 0 ? -1 : s;
    }
    n.search = function(a, u, c, f) {
      if (u.length === 0)
        return -1;
      var m = r(
        -1,
        u.length,
        a,
        u,
        c,
        f || n.GREATEST_LOWER_BOUND
      );
      if (m < 0)
        return -1;
      for (; m - 1 >= 0 && c(u[m], u[m - 1], !0) === 0; )
        --m;
      return m;
    };
  })(gf)), gf;
}
var vf = {}, Ey;
function OS() {
  if (Ey) return vf;
  Ey = 1;
  function n(a, u, c) {
    var f = a[u];
    a[u] = a[c], a[c] = f;
  }
  function r(a, u) {
    return Math.round(a + Math.random() * (u - a));
  }
  function s(a, u, c, f) {
    if (c < f) {
      var m = r(c, f), p = c - 1;
      n(a, m, f);
      for (var b = a[f], g = c; g < f; g++)
        u(a[g], b) <= 0 && (p += 1, n(a, p, g));
      n(a, p + 1, g);
      var E = p + 1;
      s(a, u, c, E - 1), s(a, u, E + 1, f);
    }
  }
  return vf.quickSort = function(a, u) {
    s(a, u, 0, a.length - 1);
  }, vf;
}
var Cy;
function MS() {
  if (Cy) return Gs;
  Cy = 1;
  var n = lo(), r = NS(), s = Z0().ArraySet, a = q0(), u = OS().quickSort;
  function c(b, g) {
    var E = b;
    return typeof b == "string" && (E = n.parseSourceMapInput(b)), E.sections != null ? new p(E, g) : new f(E, g);
  }
  c.fromSourceMap = function(b, g) {
    return f.fromSourceMap(b, g);
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
    var v = g.charAt(E);
    return v === ";" || v === ",";
  }, c.prototype._parseMappings = function(g, E) {
    throw new Error("Subclasses must implement _parseMappings");
  }, c.GENERATED_ORDER = 1, c.ORIGINAL_ORDER = 2, c.GREATEST_LOWER_BOUND = 1, c.LEAST_UPPER_BOUND = 2, c.prototype.eachMapping = function(g, E, v) {
    var S = E || null, h = v || c.GENERATED_ORDER, C;
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
    C.map(function(M) {
      var T = M.source === null ? null : this._sources.at(M.source);
      return T = n.computeSourceURL(x, T, this._sourceMapURL), {
        source: T,
        generatedLine: M.generatedLine,
        generatedColumn: M.generatedColumn,
        originalLine: M.originalLine,
        originalColumn: M.originalColumn,
        name: M.name === null ? null : this._names.at(M.name)
      };
    }, this).forEach(g, S);
  }, c.prototype.allGeneratedPositionsFor = function(g) {
    var E = n.getArg(g, "line"), v = {
      source: n.getArg(g, "source"),
      originalLine: E,
      originalColumn: n.getArg(g, "column", 0)
    };
    if (v.source = this._findSourceIndex(v.source), v.source < 0)
      return [];
    var S = [], h = this._findMapping(
      v,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      n.compareByOriginalPositions,
      r.LEAST_UPPER_BOUND
    );
    if (h >= 0) {
      var C = this._originalMappings[h];
      if (g.column === void 0)
        for (var x = C.originalLine; C && C.originalLine === x; )
          S.push({
            line: n.getArg(C, "generatedLine", null),
            column: n.getArg(C, "generatedColumn", null),
            lastColumn: n.getArg(C, "lastGeneratedColumn", null)
          }), C = this._originalMappings[++h];
      else
        for (var M = C.originalColumn; C && C.originalLine === E && C.originalColumn == M; )
          S.push({
            line: n.getArg(C, "generatedLine", null),
            column: n.getArg(C, "generatedColumn", null),
            lastColumn: n.getArg(C, "lastGeneratedColumn", null)
          }), C = this._originalMappings[++h];
    }
    return S;
  }, Gs.SourceMapConsumer = c;
  function f(b, g) {
    var E = b;
    typeof b == "string" && (E = n.parseSourceMapInput(b));
    var v = n.getArg(E, "version"), S = n.getArg(E, "sources"), h = n.getArg(E, "names", []), C = n.getArg(E, "sourceRoot", null), x = n.getArg(E, "sourcesContent", null), M = n.getArg(E, "mappings"), T = n.getArg(E, "file", null);
    if (v != this._version)
      throw new Error("Unsupported version: " + v);
    C && (C = n.normalize(C)), S = S.map(String).map(n.normalize).map(function(L) {
      return C && n.isAbsolute(C) && n.isAbsolute(L) ? n.relative(C, L) : L;
    }), this._names = s.fromArray(h.map(String), !0), this._sources = s.fromArray(S, !0), this._absoluteSources = this._sources.toArray().map(function(L) {
      return n.computeSourceURL(C, L, g);
    }), this.sourceRoot = C, this.sourcesContent = x, this._mappings = M, this._sourceMapURL = g, this.file = T;
  }
  f.prototype = Object.create(c.prototype), f.prototype.consumer = c, f.prototype._findSourceIndex = function(b) {
    var g = b;
    if (this.sourceRoot != null && (g = n.relative(this.sourceRoot, g)), this._sources.has(g))
      return this._sources.indexOf(g);
    var E;
    for (E = 0; E < this._absoluteSources.length; ++E)
      if (this._absoluteSources[E] == b)
        return E;
    return -1;
  }, f.fromSourceMap = function(g, E) {
    var v = Object.create(f.prototype), S = v._names = s.fromArray(g._names.toArray(), !0), h = v._sources = s.fromArray(g._sources.toArray(), !0);
    v.sourceRoot = g._sourceRoot, v.sourcesContent = g._generateSourcesContent(
      v._sources.toArray(),
      v.sourceRoot
    ), v.file = g._file, v._sourceMapURL = E, v._absoluteSources = v._sources.toArray().map(function(w) {
      return n.computeSourceURL(v.sourceRoot, w, E);
    });
    for (var C = g._mappings.toArray().slice(), x = v.__generatedMappings = [], M = v.__originalMappings = [], T = 0, L = C.length; T < L; T++) {
      var l = C[T], y = new m();
      y.generatedLine = l.generatedLine, y.generatedColumn = l.generatedColumn, l.source && (y.source = h.indexOf(l.source), y.originalLine = l.originalLine, y.originalColumn = l.originalColumn, l.name && (y.name = S.indexOf(l.name)), M.push(y)), x.push(y);
    }
    return u(v.__originalMappings, n.compareByOriginalPositions), v;
  }, f.prototype._version = 3, Object.defineProperty(f.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function m() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  f.prototype._parseMappings = function(g, E) {
    for (var v = 1, S = 0, h = 0, C = 0, x = 0, M = 0, T = g.length, L = 0, l = {}, y = {}, w = [], k = [], R, P, O, z, q; L < T; )
      if (g.charAt(L) === ";")
        v++, L++, S = 0;
      else if (g.charAt(L) === ",")
        L++;
      else {
        for (R = new m(), R.generatedLine = v, z = L; z < T && !this._charIsMappingSeparator(g, z); z++)
          ;
        if (P = g.slice(L, z), O = l[P], O)
          L += P.length;
        else {
          for (O = []; L < z; )
            a.decode(g, L, y), q = y.value, L = y.rest, O.push(q);
          if (O.length === 2)
            throw new Error("Found a source, but no line and column");
          if (O.length === 3)
            throw new Error("Found a source and line, but no column");
          l[P] = O;
        }
        R.generatedColumn = S + O[0], S = R.generatedColumn, O.length > 1 && (R.source = x + O[1], x += O[1], R.originalLine = h + O[2], h = R.originalLine, R.originalLine += 1, R.originalColumn = C + O[3], C = R.originalColumn, O.length > 4 && (R.name = M + O[4], M += O[4])), k.push(R), typeof R.originalLine == "number" && w.push(R);
      }
    u(k, n.compareByGeneratedPositionsDeflated), this.__generatedMappings = k, u(w, n.compareByOriginalPositions), this.__originalMappings = w;
  }, f.prototype._findMapping = function(g, E, v, S, h, C) {
    if (g[v] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + g[v]);
    if (g[S] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + g[S]);
    return r.search(g, E, h, C);
  }, f.prototype.computeColumnSpans = function() {
    for (var g = 0; g < this._generatedMappings.length; ++g) {
      var E = this._generatedMappings[g];
      if (g + 1 < this._generatedMappings.length) {
        var v = this._generatedMappings[g + 1];
        if (E.generatedLine === v.generatedLine) {
          E.lastGeneratedColumn = v.generatedColumn - 1;
          continue;
        }
      }
      E.lastGeneratedColumn = 1 / 0;
    }
  }, f.prototype.originalPositionFor = function(g) {
    var E = {
      generatedLine: n.getArg(g, "line"),
      generatedColumn: n.getArg(g, "column")
    }, v = this._findMapping(
      E,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      n.compareByGeneratedPositionsDeflated,
      n.getArg(g, "bias", c.GREATEST_LOWER_BOUND)
    );
    if (v >= 0) {
      var S = this._generatedMappings[v];
      if (S.generatedLine === E.generatedLine) {
        var h = n.getArg(S, "source", null);
        h !== null && (h = this._sources.at(h), h = n.computeSourceURL(this.sourceRoot, h, this._sourceMapURL));
        var C = n.getArg(S, "name", null);
        return C !== null && (C = this._names.at(C)), {
          source: h,
          line: n.getArg(S, "originalLine", null),
          column: n.getArg(S, "originalColumn", null),
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
    var v = this._findSourceIndex(g);
    if (v >= 0)
      return this.sourcesContent[v];
    var S = g;
    this.sourceRoot != null && (S = n.relative(this.sourceRoot, S));
    var h;
    if (this.sourceRoot != null && (h = n.urlParse(this.sourceRoot))) {
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
    var E = n.getArg(g, "source");
    if (E = this._findSourceIndex(E), E < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var v = {
      source: E,
      originalLine: n.getArg(g, "line"),
      originalColumn: n.getArg(g, "column")
    }, S = this._findMapping(
      v,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      n.compareByOriginalPositions,
      n.getArg(g, "bias", c.GREATEST_LOWER_BOUND)
    );
    if (S >= 0) {
      var h = this._originalMappings[S];
      if (h.source === v.source)
        return {
          line: n.getArg(h, "generatedLine", null),
          column: n.getArg(h, "generatedColumn", null),
          lastColumn: n.getArg(h, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, Gs.BasicSourceMapConsumer = f;
  function p(b, g) {
    var E = b;
    typeof b == "string" && (E = n.parseSourceMapInput(b));
    var v = n.getArg(E, "version"), S = n.getArg(E, "sections");
    if (v != this._version)
      throw new Error("Unsupported version: " + v);
    this._sources = new s(), this._names = new s();
    var h = {
      line: -1,
      column: 0
    };
    this._sections = S.map(function(C) {
      if (C.url)
        throw new Error("Support for url field in sections not implemented.");
      var x = n.getArg(C, "offset"), M = n.getArg(x, "line"), T = n.getArg(x, "column");
      if (M < h.line || M === h.line && T < h.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return h = x, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: M + 1,
          generatedColumn: T + 1
        },
        consumer: new c(n.getArg(C, "map"), g)
      };
    });
  }
  return p.prototype = Object.create(c.prototype), p.prototype.constructor = c, p.prototype._version = 3, Object.defineProperty(p.prototype, "sources", {
    get: function() {
      for (var b = [], g = 0; g < this._sections.length; g++)
        for (var E = 0; E < this._sections[g].consumer.sources.length; E++)
          b.push(this._sections[g].consumer.sources[E]);
      return b;
    }
  }), p.prototype.originalPositionFor = function(g) {
    var E = {
      generatedLine: n.getArg(g, "line"),
      generatedColumn: n.getArg(g, "column")
    }, v = r.search(
      E,
      this._sections,
      function(h, C) {
        var x = h.generatedLine - C.generatedOffset.generatedLine;
        return x || h.generatedColumn - C.generatedOffset.generatedColumn;
      }
    ), S = this._sections[v];
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
    for (var v = 0; v < this._sections.length; v++) {
      var S = this._sections[v], h = S.consumer.sourceContentFor(g, !0);
      if (h)
        return h;
    }
    if (E)
      return null;
    throw new Error('"' + g + '" is not in the SourceMap.');
  }, p.prototype.generatedPositionFor = function(g) {
    for (var E = 0; E < this._sections.length; E++) {
      var v = this._sections[E];
      if (v.consumer._findSourceIndex(n.getArg(g, "source")) !== -1) {
        var S = v.consumer.generatedPositionFor(g);
        if (S) {
          var h = {
            line: S.line + (v.generatedOffset.generatedLine - 1),
            column: S.column + (v.generatedOffset.generatedLine === S.line ? v.generatedOffset.generatedColumn - 1 : 0)
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
    for (var v = 0; v < this._sections.length; v++)
      for (var S = this._sections[v], h = S.consumer._generatedMappings, C = 0; C < h.length; C++) {
        var x = h[C], M = S.consumer._sources.at(x.source);
        M = n.computeSourceURL(S.consumer.sourceRoot, M, this._sourceMapURL), this._sources.add(M), M = this._sources.indexOf(M);
        var T = null;
        x.name && (T = S.consumer._names.at(x.name), this._names.add(T), T = this._names.indexOf(T));
        var L = {
          source: M,
          generatedLine: x.generatedLine + (S.generatedOffset.generatedLine - 1),
          generatedColumn: x.generatedColumn + (S.generatedOffset.generatedLine === x.generatedLine ? S.generatedOffset.generatedColumn - 1 : 0),
          originalLine: x.originalLine,
          originalColumn: x.originalColumn,
          name: T
        };
        this.__generatedMappings.push(L), typeof L.originalLine == "number" && this.__originalMappings.push(L);
      }
    u(this.__generatedMappings, n.compareByGeneratedPositionsDeflated), u(this.__originalMappings, n.compareByOriginalPositions);
  }, Gs.IndexedSourceMapConsumer = p, Gs;
}
var yf = {}, ky;
function jS() {
  if (ky) return yf;
  ky = 1;
  var n = G0().SourceMapGenerator, r = lo(), s = /(\r?\n)/, a = 10, u = "$$$isSourceNode$$$";
  function c(f, m, p, b, g) {
    this.children = [], this.sourceContents = {}, this.line = f ?? null, this.column = m ?? null, this.source = p ?? null, this.name = g ?? null, this[u] = !0, b != null && this.add(b);
  }
  return c.fromStringWithSourceMap = function(m, p, b) {
    var g = new c(), E = m.split(s), v = 0, S = function() {
      var T = l(), L = l() || "";
      return T + L;
      function l() {
        return v < E.length ? E[v++] : void 0;
      }
    }, h = 1, C = 0, x = null;
    return p.eachMapping(function(T) {
      if (x !== null)
        if (h < T.generatedLine)
          M(x, S()), h++, C = 0;
        else {
          var L = E[v] || "", l = L.substr(0, T.generatedColumn - C);
          E[v] = L.substr(T.generatedColumn - C), C = T.generatedColumn, M(x, l), x = T;
          return;
        }
      for (; h < T.generatedLine; )
        g.add(S()), h++;
      if (C < T.generatedColumn) {
        var L = E[v] || "";
        g.add(L.substr(0, T.generatedColumn)), E[v] = L.substr(T.generatedColumn), C = T.generatedColumn;
      }
      x = T;
    }, this), v < E.length && (x && M(x, S()), g.add(E.splice(v).join(""))), p.sources.forEach(function(T) {
      var L = p.sourceContentFor(T);
      L != null && (b != null && (T = r.join(b, T)), g.setSourceContent(T, L));
    }), g;
    function M(T, L) {
      if (T === null || T.source === void 0)
        g.add(L);
      else {
        var l = b ? r.join(b, T.source) : T.source;
        g.add(new c(
          T.originalLine,
          T.originalColumn,
          l,
          L,
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
    for (var p, b = 0, g = this.children.length; b < g; b++)
      p = this.children[b], p[u] ? p.walk(m) : p !== "" && m(p, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, c.prototype.join = function(m) {
    var p, b, g = this.children.length;
    if (g > 0) {
      for (p = [], b = 0; b < g - 1; b++)
        p.push(this.children[b]), p.push(m);
      p.push(this.children[b]), this.children = p;
    }
    return this;
  }, c.prototype.replaceRight = function(m, p) {
    var b = this.children[this.children.length - 1];
    return b[u] ? b.replaceRight(m, p) : typeof b == "string" ? this.children[this.children.length - 1] = b.replace(m, p) : this.children.push("".replace(m, p)), this;
  }, c.prototype.setSourceContent = function(m, p) {
    this.sourceContents[r.toSetString(m)] = p;
  }, c.prototype.walkSourceContents = function(m) {
    for (var p = 0, b = this.children.length; p < b; p++)
      this.children[p][u] && this.children[p].walkSourceContents(m);
    for (var g = Object.keys(this.sourceContents), p = 0, b = g.length; p < b; p++)
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
    }, b = new n(m), g = !1, E = null, v = null, S = null, h = null;
    return this.walk(function(C, x) {
      p.code += C, x.source !== null && x.line !== null && x.column !== null ? ((E !== x.source || v !== x.line || S !== x.column || h !== x.name) && b.addMapping({
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
      }), E = x.source, v = x.line, S = x.column, h = x.name, g = !0) : g && (b.addMapping({
        generated: {
          line: p.line,
          column: p.column
        }
      }), E = null, g = !1);
      for (var M = 0, T = C.length; M < T; M++)
        C.charCodeAt(M) === a ? (p.line++, p.column = 0, M + 1 === T ? (E = null, g = !1) : g && b.addMapping({
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
      b.setSourceContent(C, x);
    }), { code: p.code, map: b };
  }, yf.SourceNode = c, yf;
}
var Ay;
function RS() {
  return Ay || (Ay = 1, Zs.SourceMapGenerator = G0().SourceMapGenerator, Zs.SourceMapConsumer = MS().SourceMapConsumer, Zs.SourceNode = jS().SourceNode), Zs;
}
var xy;
function DS() {
  return xy || (xy = 1, (function(n, r) {
    r.__esModule = !0;
    var s = on(), a = void 0;
    try {
      var u = RS();
      a = u.SourceNode;
    } catch {
    }
    a || (a = function(m, p, b, g) {
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
    function c(m, p, b) {
      if (s.isArray(m)) {
        for (var g = [], E = 0, v = m.length; E < v; E++)
          g.push(p.wrap(m[E], b));
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
      prepend: function(p, b) {
        this.source.unshift(this.wrap(p, b));
      },
      push: function(p, b) {
        this.source.push(this.wrap(p, b));
      },
      merge: function() {
        var p = this.empty();
        return this.each(function(b) {
          p.add(["  ", b, `
`]);
        }), p;
      },
      each: function(p) {
        for (var b = 0, g = this.source.length; b < g; b++)
          p(this.source[b]);
      },
      empty: function() {
        var p = this.currentLocation || { start: {} };
        return new a(p.start.line, p.start.column, this.srcFile);
      },
      wrap: function(p) {
        var b = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return p instanceof a ? p : (p = c(p, this, b), new a(b.start.line, b.start.column, this.srcFile, p));
      },
      functionCall: function(p, b, g) {
        return g = this.generateList(g), this.wrap([p, b ? "." + b + "(" : "(", g, ")"]);
      },
      quotedString: function(p) {
        return '"' + (p + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(p) {
        var b = this, g = [];
        Object.keys(p).forEach(function(v) {
          var S = c(p[v], b);
          S !== "undefined" && g.push([b.quotedString(v), ":", S]);
        });
        var E = this.generateList(g);
        return E.prepend("{"), E.add("}"), E;
      },
      generateList: function(p) {
        for (var b = this.empty(), g = 0, E = p.length; g < E; g++)
          g && b.add(","), b.add(c(p[g], this));
        return b;
      },
      generateArray: function(p) {
        var b = this.generateList(p);
        return b.prepend("["), b.add("]"), b;
      }
    }, r.default = f, n.exports = r.default;
  })(Wu, Wu.exports)), Wu.exports;
}
var Ty;
function zS() {
  return Ty || (Ty = 1, (function(n, r) {
    r.__esModule = !0;
    function s(v) {
      return v && v.__esModule ? v : { default: v };
    }
    var a = ih(), u = Gn(), c = s(u), f = on(), m = DS(), p = s(m);
    function b(v) {
      this.value = v;
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
        var M = S.opcodes, T = void 0, L = void 0, l = void 0, y = void 0;
        for (l = 0, y = M.length; l < y; l++)
          T = M[l], this.source.currentLocation = T.loc, L = L || T.loc, this[T.opcode].apply(this, T.args);
        if (this.source.currentLocation = L, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
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
        var R = this.context, P = R.programs, O = R.decorators;
        for (l = 0, y = P.length; l < y; l++)
          P[l] && (k[l] = P[l], O[l] && (k[l + "_d"] = O[l], k.useDecorators = !0));
        return this.environment.usePartial && (k.usePartial = !0), this.options.data && (k.useData = !0), this.useDepths && (k.useDepths = !0), this.useBlockParams && (k.useBlockParams = !0), this.options.compat && (k.compat = !0), x ? k.compilerOptions = this.options : (k.compiler = JSON.stringify(k.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, k = this.objectLiteral(k), h.srcName ? (k = k.toStringWithSourceMap({ file: h.destName }), k.map = k.map && k.map.toString()) : k = k.toString()), k;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new p.default(this.options.srcName), this.decorators = new p.default(this.options.srcName);
      },
      createFunctionContext: function(S) {
        var h = this, C = "", x = this.stackVars.concat(this.registers.list);
        x.length > 0 && (C += ", " + x.join(", "));
        var M = 0;
        Object.keys(this.aliases).forEach(function(l) {
          var y = h.aliases[l];
          y.children && y.referenceCount > 1 && (C += ", alias" + ++M + "=" + l, y.children[0] = "alias" + M);
        }), this.lookupPropertyFunctionIsUsed && (C += ", " + this.lookupPropertyFunctionVarDeclaration());
        var T = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && T.push("blockParams"), this.useDepths && T.push("depths");
        var L = this.mergeSource(C);
        return S ? (T.push(L), Function.apply(this, T)) : this.source.wrap(["function(", T.join(","), `) {
  `, L, "}"]);
      },
      mergeSource: function(S) {
        var h = this.environment.isSimple, C = !this.forceBuffer, x = void 0, M = void 0, T = void 0, L = void 0;
        return this.source.each(function(l) {
          l.appendToBuffer ? (T ? l.prepend("  + ") : T = l, L = l) : (T && (M ? T.prepend("buffer += ") : x = !0, L.add(";"), T = L = void 0), M = !0, h || (C = !1));
        }), C ? T ? (T.prepend("return "), L.add(";")) : M || this.source.push('return "";') : (S += ", buffer = " + (x ? "" : this.initializeBuffer()), T ? (T.prepend("return buffer + "), L.add(";")) : this.source.push("return buffer;")), S && this.source.prepend("var " + S.substring(2) + (x ? "" : `;
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
        var M = 0;
        !x && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(S[M++])) : this.pushContext(), this.resolvePath("context", S, M, h, C);
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
      resolvePath: function(S, h, C, x, M) {
        var T = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(E(this.options.strict && M, this, h, C, S));
          return;
        }
        for (var L = h.length; C < L; C++)
          this.replaceStack(function(l) {
            var y = T.nameLookup(l, h[C], S);
            return x ? [" && ", y] : [" != null ? ", y, " : ", l];
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
        var x = this.popStack(), M = this.setupHelper(S, h), T = [];
        C && T.push(M.name), T.push(x), this.options.strict || T.push(this.aliasable("container.hooks.helperMissing"));
        var L = ["(", this.itemsSeparatedBy(T, "||"), ")"], l = this.source.functionCall(L, "call", M.callParams);
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
        var x = this.setupHelper(0, S, h), M = this.lastHelper = this.nameLookup("helpers", S, "helper"), T = ["(", "(helper = ", M, " || ", C, ")"];
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
        var x = [], M = this.setupParams(h, 1, x);
        S && (h = this.popStack(), delete M.name), C && (M.indent = JSON.stringify(C)), M.helpers = "helpers", M.partials = "partials", M.decorators = "container.decorators", S ? x.unshift(h) : x.unshift(this.nameLookup("partials", h, "partial")), this.options.compat && (M.depths = "depths"), M = this.objectLiteral(M), x.push(M), this.push(this.source.functionCall("container.invokePartial", "", x));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(S) {
        var h = this.popStack(), C = void 0, x = void 0, M = void 0;
        this.trackIds && (M = this.popStack()), this.stringParams && (x = this.popStack(), C = this.popStack());
        var T = this.hash;
        C && (T.contexts[S] = C), x && (T.types[S] = x), M && (T.ids[S] = M), T.values[S] = h;
      },
      pushId: function(S, h, C) {
        S === "BlockParam" ? this.pushStackLiteral("blockParams[" + h[0] + "].path[" + h[1] + "]" + (C ? " + " + JSON.stringify("." + C) : "")) : S === "PathExpression" ? this.pushString(h) : S === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: g,
      compileChildren: function(S, h) {
        for (var C = S.children, x = void 0, M = void 0, T = 0, L = C.length; T < L; T++) {
          x = C[T], M = new this.compiler();
          var l = this.matchExistingProgram(x);
          if (l == null) {
            this.context.programs.push("");
            var y = this.context.programs.length;
            x.index = y, x.name = "program" + y, this.context.programs[y] = M.compile(x, h, this.context, !this.precompile), this.context.decorators[y] = M.decorators, this.context.environments[y] = x, this.useDepths = this.useDepths || M.useDepths, this.useBlockParams = this.useBlockParams || M.useBlockParams, x.useDepths = this.useDepths, x.useBlockParams = this.useBlockParams;
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
        return S instanceof b || (S = this.source.wrap(S)), this.inlineStack.push(S), S;
      },
      pushStackLiteral: function(S) {
        this.push(new b(S));
      },
      pushSource: function(S) {
        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), S && this.source.push(S);
      },
      replaceStack: function(S) {
        var h = ["("], C = void 0, x = void 0, M = void 0;
        if (!this.isInline())
          throw new c.default("replaceStack on non-inline");
        var T = this.popStack(!0);
        if (T instanceof b)
          C = [T.value], h = ["(", C], M = !0;
        else {
          x = !0;
          var L = this.incrStack();
          h = ["((", this.push(L), " = ", T, ")"], C = this.topStack();
        }
        var l = S.call(this, C);
        M || this.popStack(), x && this.stackSlot--, this.push(h.concat(l, ")"));
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
          if (x instanceof b)
            this.compileStack.push(x);
          else {
            var M = this.incrStack();
            this.pushSource([M, " = ", x, ";"]), this.compileStack.push(M);
          }
        }
      },
      isInline: function() {
        return this.inlineStack.length;
      },
      popStack: function(S) {
        var h = this.isInline(), C = (h ? this.inlineStack : this.compileStack).pop();
        if (!S && C instanceof b)
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
        return h instanceof b ? h.value : h;
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
        var x = [], M = this.setupHelperArgs(h, S, x, C), T = this.nameLookup("helpers", h, "helper"), L = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: x,
          paramsInit: M,
          name: T,
          callParams: [L].concat(x)
        };
      },
      setupParams: function(S, h, C) {
        var x = {}, M = [], T = [], L = [], l = !C, y = void 0;
        l && (C = []), x.name = this.quotedString(S), x.hash = this.popStack(), this.trackIds && (x.hashIds = this.popStack()), this.stringParams && (x.hashTypes = this.popStack(), x.hashContexts = this.popStack());
        var w = this.popStack(), k = this.popStack();
        (k || w) && (x.fn = k || "container.noop", x.inverse = w || "container.noop");
        for (var R = h; R--; )
          y = this.popStack(), C[R] = y, this.trackIds && (L[R] = this.popStack()), this.stringParams && (T[R] = this.popStack(), M[R] = this.popStack());
        return l && (x.args = this.source.generateArray(C)), this.trackIds && (x.ids = this.source.generateArray(L)), this.stringParams && (x.types = this.source.generateArray(T), x.contexts = this.source.generateArray(M)), this.options.data && (x.data = "data"), this.useBlockParams && (x.blockParams = "blockParams"), x;
      },
      setupHelperArgs: function(S, h, C, x) {
        var M = this.setupParams(S, h, C);
        return M.loc = JSON.stringify(this.source.currentLocation), M = this.objectLiteral(M), x ? (this.useRegister("options"), C.push("options"), ["options=", M]) : C ? (C.push(M), "") : M;
      }
    }, (function() {
      for (var v = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), S = g.RESERVED_WORDS = {}, h = 0, C = v.length; h < C; h++)
        S[v[h]] = !0;
    })(), g.isValidJavaScriptVariableName = function(v) {
      return !g.RESERVED_WORDS[v] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(v);
    };
    function E(v, S, h, C, x) {
      var M = S.popStack(), T = h.length;
      for (v && T--; C < T; C++)
        M = S.nameLookup(M, h[C], x);
      return v ? [S.aliasable("container.strict"), "(", M, ", ", S.quotedString(h[C]), ", ", JSON.stringify(S.source.currentLocation), " )"] : M;
    }
    r.default = g, n.exports = r.default;
  })(Ju, Ju.exports)), Ju.exports;
}
var Ny;
function LS() {
  return Ny || (Ny = 1, (function(n, r) {
    r.__esModule = !0;
    function s(T) {
      return T && T.__esModule ? T : { default: T };
    }
    var a = SS(), u = s(a), c = U0(), f = s(c), m = kS(), p = AS(), b = zS(), g = s(b), E = H0(), v = s(E), S = B0(), h = s(S), C = u.default.create;
    function x() {
      var T = C();
      return T.compile = function(L, l) {
        return p.compile(L, l, T);
      }, T.precompile = function(L, l) {
        return p.precompile(L, l, T);
      }, T.AST = f.default, T.Compiler = p.Compiler, T.JavaScriptCompiler = g.default, T.Parser = m.parser, T.parse = m.parse, T.parseWithoutProcessing = m.parseWithoutProcessing, T;
    }
    var M = x();
    M.create = x, h.default(M), M.Visitor = v.default, M.default = M, r.default = M, n.exports = r.default;
  })(Mu, Mu.exports)), Mu.exports;
}
var _n = LS();
const Re = SillyTavern.getContext();
new i0("dumb", {}).getSettings();
async function V0({
  profileId: n,
  userPrompt: r,
  buildPromptOptions: s,
  session: a,
  entriesGroupByWorldName: u,
  promptSettings: c,
  mainContextList: f,
  maxResponseToken: m,
  continueFrom: p
}) {
  if (!n)
    throw new Error("No connection profile selected.");
  const g = SillyTavern.getContext().extensionSettings.connectionManager?.profiles?.find((T) => T.id === n);
  if (!g)
    throw new Error(`Connection profile with ID "${n}" not found.`);
  const E = g.api ? Re.CONNECT_API_MAP[g.api].selected : void 0;
  if (!E)
    throw new Error(`Could not determine API for profile "${g.name}".`);
  const v = {};
  v.user = "{{user}}", v.char = "{{char}}", v.persona = "{{persona}}", v.blackListedEntries = a.blackListedEntries;
  const S = r.trim();
  p && p.mode === "revise" ? v.userInstructions = "" : v.userInstructions = _n.compile(S, { noEscape: !0 })(v);
  {
    const T = {};
    Object.entries(u).filter(
      ([L, l]) => l.length > 0 && a.selectedWorldNames.includes(L) && l.some((y) => !y?.disable)
    ).forEach(([L, l]) => {
      let y = l.filter((k) => !k?.disable);
      const w = a.selectedEntryUids?.[L];
      if (w && w.length > 0) {
        const k = new Set(w);
        y = y.filter((R) => k.has(R.uid));
      }
      y.length > 0 && (T[L] = y);
    }), v.currentLorebooks = T;
  }
  {
    const T = {};
    Object.entries(a.suggestedEntries).filter(([L, l]) => l.length > 0).forEach(([L, l]) => {
      T[L] = l.filter(
        (y) => !(L === p?.worldName && y.uid === p.entry.uid && y.comment === p.entry.comment)
      );
    }), v.suggestedLorebooks = T;
  }
  const h = [];
  {
    for (const T of f) {
      if (T.promptName === "chatHistory") {
        h.push(...(await g0(E, s)).result);
        continue;
      }
      const L = c[T.promptName];
      if (!L)
        continue;
      const l = {
        role: T.role,
        content: _n.compile(L.content, { noEscape: !0 })(v)
      };
      l.content = Re.substituteParams(l.content), l.content && h.push(l);
    }
    p && (p.mode === "continue" ? h.push({
      role: "assistant",
      content: sS(p.worldName, p.entry)
    }) : p.mode === "revise" && (h.push({
      role: "assistant",
      content: oS(p.worldName, p.entry)
    }), S && h.push({
      role: "user",
      content: S
    })));
  }
  const C = await Re.ConnectionManagerRequestService.sendRequest(
    n,
    h,
    m
  ), x = h.find((T) => T.role === "assistant");
  if (!C.content)
    throw new Error("AI returned an empty response. Check your connection profile, model, and console for details.");
  let M = iS(C.content, {
    // Only merge with previous content if we are in 'continue' mode.
    previousContent: p && p.mode === "continue" ? x?.content : void 0
  });
  if (Object.keys(M).length === 0) {
    console.error("AI response received but no entries were parsed. Raw content:", String(C.content));
    const T = String(C.content).trim().slice(0, 200);
    throw new Error(
      `AI responded but no <lorebooks> XML was found — the model likely ignored the format instructions. Try a stronger model or strengthen the Response Rules prompt. Raw response preview: "${T}${C.content.length > 200 ? "…" : ""}" (see console for full output).`
    );
  }
  return Object.entries(M).forEach(([T, L]) => {
    u[T] && L.forEach((l) => {
      const y = u[T]?.find((w) => w.uid === l.uid);
      y && (l.key.length === 0 && (l.key = y.key), l.comment || (l.comment = y.comment)), (l.comment === null || l.comment === void 0) && (l.comment = "");
    });
  }), M = p ? { [p.worldName]: [M[p.worldName][0]] } : M, M;
}
function PS(n, r, s) {
  s[r] || (s[r] = []);
  const a = s[r], u = a.findIndex((m) => m.uid === n.uid);
  let c;
  const f = u !== -1;
  if (f)
    c = a[u];
  else {
    const m = { entries: {} };
    a.forEach((g) => m.entries[g.uid] = g);
    const p = Wf(r, m);
    if (!p)
      throw new Error(`Failed to create a new entry structure in world "${r}"`);
    const b = a.length > 0 ? a[a.length - 1] : void 0;
    if (b) {
      const g = p.uid;
      Object.assign(p, b), p.uid = g;
    }
    c = p, a.push(c);
  }
  return c.key = n.key, c.content = n.content, c.comment = n.comment, { modifiedEntry: c, status: f ? "updated" : "added" };
}
function IS() {
  const n = Re.extensionSettings?.connectionManager?.profiles ?? [];
  return n.map((r) => ({
    value: r.name ?? r.id,
    valueProvider: (s) => n.find((a) => a.name?.includes(s))?.name
  }));
}
const Ks = "SillyTavern-WorldInfo-Recommender", BS = "0.2.0", US = "F_1.4", HS = {
  EXTENSION: "worldInfoRecommender"
}, nl = [
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
  stDescription: K3,
  currentLorebooks: J3,
  blackListedEntries: W3,
  suggestedLorebooks: e8,
  responseRules: t8,
  taskDescription: n8,
  reviseJsonPrompt: r8,
  reviseXmlPrompt: a8,
  reviseTaskDescription: i8,
  reviseGlobalStateUpdate: u8,
  reviseGlobalStateUpdateAddedModified: s8,
  reviseGlobalStateUpdateRemoved: o8
}, sh = {
  version: BS,
  formatVersion: US,
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
function Oy(n) {
  const s = n.replace(/[^\w\s]/g, "").split(/\s+/).filter(Boolean);
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
const It = new i0(HS.EXTENSION, sh);
async function qS() {
  return new Promise((n, r) => {
    It.initializeSettings({
      strategy: [
        {
          from: "F_1.0",
          to: "F_1.1",
          action(s) {
            const a = {
              ...sh,
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
      n();
    }).catch((s) => {
      console.error(`[${Ks}] Error initializing settings:`, s), ge("error", `[${Ks}] Failed to initialize settings: ${s.message}`), Re.Popup.show.confirm(
        `[${Ks}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((a) => {
        a && (It.resetSettings(), ge("success", `[${Ks}] Settings reset. Reloading may be required.`), n());
      });
    });
  });
}
const Ee = ({ children: n, className: r, overrideDefaults: s = !1, ...a }) => {
  const u = ie.useMemo(() => {
    const c = [];
    return s || c.push("menu_button", "interactable"), c.push(r), c.filter(Boolean).join(" ");
  }, [s, r]);
  return /* @__PURE__ */ A.jsx("button", { className: u, ...a, children: n });
}, $0 = ({ label: n, className: r, overrideDefaults: s = !1, type: a = "text", ...u }) => {
  const c = ie.useMemo(() => {
    const f = [];
    return s || (a === "text" || a === "number" || a === "password" || a === "email" || a === "search") && f.push("text_pole"), f.push(r), f.filter(Boolean).join(" ");
  }, [s, r, a]);
  if (a === "checkbox") {
    const f = s ? r : `checkbox_label ${r ?? ""}`.trim();
    return /* @__PURE__ */ A.jsxs("label", { className: f, children: [
      /* @__PURE__ */ A.jsx("input", { type: "checkbox", ...u }),
      n && /* @__PURE__ */ A.jsx("span", { children: n })
    ] });
  }
  return /* @__PURE__ */ A.jsx("input", { type: a, className: c, ...u });
}, kl = ({ children: n, className: r, overrideDefaults: s = !1, ...a }) => {
  const u = ie.useMemo(() => {
    const c = [];
    return s || c.push("text_pole"), c.push(r), c.filter(Boolean).join(" ");
  }, [s, r]);
  return /* @__PURE__ */ A.jsx("select", { className: u, ...a, children: n });
}, qn = ({ children: n, className: r, overrideDefaults: s = !1, ...a }) => {
  const u = ie.useMemo(() => {
    const c = [];
    return s || c.push("text_pole", "textarea_compact"), c.push(r), c.filter(Boolean).join(" ");
  }, [s, r]);
  return /* @__PURE__ */ A.jsx("textarea", { className: u, ...a, children: n });
};
var ZS = a0(), Pt = /* @__PURE__ */ ((n) => (n[n.TEXT = 1] = "TEXT", n[n.CONFIRM = 2] = "CONFIRM", n[n.INPUT = 3] = "INPUT", n[n.DISPLAY = 4] = "DISPLAY", n))(Pt || {}), Kr = /* @__PURE__ */ ((n) => (n[n.AFFIRMATIVE = 1] = "AFFIRMATIVE", n[n.NEGATIVE = 0] = "NEGATIVE", n[n.CANCELLED = null] = "CANCELLED", n))(Kr || {});
const GS = SillyTavern.getContext(), tr = ({
  content: n,
  type: r,
  inputValue: s = "",
  options: a = {},
  preventEscape: u = !1,
  onComplete: c
}) => {
  var f;
  const m = ie.useRef(null), p = ie.useRef(null), [b, g] = ie.useState(!1), [E, v] = ie.useState(null), S = ie.useRef(GS.uuidv4()), h = ie.useRef({
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
    const L = (l) => {
      l.preventDefault(), u || C(Kr.CANCELLED);
    };
    return T.addEventListener("cancel", L), h.current.dlg = T, h.current.mainInput = p.current, Ai.util.popups.push(h.current), T.showModal || (T.classList.add("poly_dialog"), lv.registerDialog(T), new ResizeObserver((l) => {
      for (const y of l)
        lv.reposition(y.target);
    }).observe(T)), T.showModal(), Yd(), () => {
      uv(Ai.util.popups, h.current), Yd(), T.removeEventListener("cancel", L);
    };
  }, []);
  const C = async (T) => {
    var L, l;
    let y = T;
    if (r === Pt.INPUT && (T >= Kr.AFFIRMATIVE ? y = (L = p.current) == null ? void 0 : L.value : T === Kr.NEGATIVE ? y = !1 : T === Kr.CANCELLED ? y = null : y = !1), (l = a.customInputs) != null && l.length) {
      const k = new Map(
        a.customInputs.map((R) => {
          var P;
          const O = (P = m.current) == null ? void 0 : P.querySelector(`#${R.id}`);
          return [O.id, O.checked];
        })
      );
      h.current.inputResults = k;
    }
    if (h.current.result = T, h.current.value = y, a.onClosing && !await a.onClosing(h.current)) {
      g(!0), h.current.value = void 0, h.current.result = void 0, h.current.inputResults = void 0;
      return;
    }
    g(!1), Ai.util.lastResult = {
      value: y,
      result: T,
      inputResults: h.current.inputResults
    };
    const w = m.current;
    w && (w.setAttribute("closing", ""), Yd(), o2(w, async () => {
      var k;
      if (w.close(), a.onClose && await a.onClose(h.current), uv(Ai.util.popups, h.current), Ai.util.popups.length > 0) {
        const R = (k = document.activeElement) == null ? void 0 : k.closest(".popup"), P = R?.getAttribute("data-id"), O = Ai.util.popups.find((z) => z.id === P);
        O && O.lastFocus && O.lastFocus.focus();
      }
      c(y);
    }));
  }, x = (T) => {
    T.target instanceof HTMLElement && T.target !== m.current && (v(T.target), h.current.lastFocus = T.target);
  }, M = async (T) => {
  };
  return ZS.createPortal(
    /* @__PURE__ */ A.jsx(
      "dialog",
      {
        ref: m,
        className: (() => {
          const T = ["popup"];
          return a.wide && T.push("wide_dialogue_popup"), a.wider && T.push("wider_dialogue_popup"), a.large && T.push("large_dialogue_popup"), a.transparent && T.push("transparent_dialogue_popup"), a.allowHorizontalScrolling && T.push("horizontal_scrolling_dialogue_popup"), a.allowVerticalScrolling && T.push("vertical_scrolling_dialogue_popup"), a.animation && T.push(`popup--animation-${a.animation}`), T.join(" ");
        })(),
        "data-id": S.current,
        onKeyDown: M,
        onFocus: x,
        children: /* @__PURE__ */ A.jsxs("div", { className: "popup-body", children: [
          /* @__PURE__ */ A.jsx("div", { className: "popup-content", children: n }),
          r === Pt.INPUT && /* @__PURE__ */ A.jsx(
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
          r !== Pt.DISPLAY && /* @__PURE__ */ A.jsxs("div", { className: "popup-controls", children: [
            (f = a.customButtons) == null ? void 0 : f.map((T, L) => {
              const l = typeof T == "string" ? { text: T, result: L + 2 } : T;
              return /* @__PURE__ */ A.jsx(
                "div",
                {
                  className: `menu_button popup-button-custom result-control ${l.classes ?? ""}`,
                  "data-result": l.result,
                  onClick: () => {
                    var y;
                    (y = l.action) == null || y.call(l), C(l.result ?? L + 2);
                  },
                  "data-i18n": l.text,
                  children: l.text
                },
                L
              );
            }),
            r !== Pt.DISPLAY && a.okButton !== !1 && /* @__PURE__ */ A.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => C(Kr.AFFIRMATIVE),
                "data-result": "1",
                children: typeof a.okButton == "string" ? a.okButton : "OK"
              }
            ),
            r !== Pt.DISPLAY && a.cancelButton !== !1 && /* @__PURE__ */ A.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => C(Kr.NEGATIVE),
                "data-result": "0",
                children: typeof a.cancelButton == "string" ? a.cancelButton : "Cancel"
              }
            )
          ] }),
          r === Pt.DISPLAY && /* @__PURE__ */ A.jsx(
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
}, Vs = (n, r, s) => {
  if (!n || !n.api)
    return !1;
  const a = s[n.api];
  if (!a || !Object.hasOwn(r, a.selected))
    return !1;
  switch (a.selected) {
    case "openai":
      return !!a.source;
    case "textgenerationwebui":
      return !!a.type;
  }
  return !1;
}, Sr = SillyTavern.getContext(), Y0 = ({
  initialSelectedProfileId: n,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: s = "Select a Connection Profile",
  onChange: a,
  onCreate: u,
  onUpdate: c,
  onDelete: f
}) => {
  const [m, p] = ie.useState(n ?? ""), [b, g] = ie.useState(Date.now()), { isEnabled: E, profiles: v, connectApiMap: S } = ie.useMemo(() => {
    var x, M;
    return (x = Sr.extensionSettings.disabledExtensions) != null && x.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((M = Sr.extensionSettings.connectionManager) == null ? void 0 : M.profiles) ?? [],
      connectApiMap: Sr.CONNECT_API_MAP
    };
  }, [b]);
  ie.useEffect(() => {
    if (!E) return;
    const x = (L) => {
      Vs(L, r, S) && (g(Date.now()), u?.(L));
    }, M = (L, l) => {
      const y = Vs(L, r, S), w = Vs(l, r, S);
      (y || w) && g(Date.now()), c?.(L, l), m === L.id && !w && (p(""), a?.(void 0));
    }, T = (L) => {
      Vs(L, r, S) && (g(Date.now()), f?.(L), m === L.id && (p(""), a?.(void 0)));
    };
    return Sr.eventSource.on("CONNECTION_PROFILE_CREATED", x), Sr.eventSource.on("CONNECTION_PROFILE_UPDATED", M), Sr.eventSource.on("CONNECTION_PROFILE_DELETED", T), () => {
      Sr.eventSource.removeListener("CONNECTION_PROFILE_CREATED", x), Sr.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", M), Sr.eventSource.removeListener("CONNECTION_PROFILE_DELETED", T);
    };
  }, [E, m, r, S, a, u, c, f]);
  const h = ie.useMemo(() => {
    if (!E) return [];
    const x = v.filter((T) => Vs(T, r, S)), M = {};
    for (const [T, L] of Object.entries(r))
      M[T] = { label: L, profiles: [] };
    for (const T of x) {
      const L = S[T.api];
      M[L.selected] && M[L.selected].profiles.push(T);
    }
    for (const T of Object.values(M))
      T.profiles.sort((L, l) => (L.name ?? "").localeCompare(l.name ?? ""));
    return Object.values(M).filter((T) => T.profiles.length > 0);
  }, [E, v, r, S]), C = ie.useCallback(
    (x) => {
      const M = x.target.value;
      p(M);
      const T = v.find((L) => L.id === M);
      a?.(T);
    },
    [v, a]
  );
  return E ? /* @__PURE__ */ A.jsxs(kl, { value: m, onChange: C, children: [
    /* @__PURE__ */ A.jsx("option", { value: "", children: s }),
    h.map((x) => /* @__PURE__ */ A.jsx("optgroup", { label: x.label, children: x.profiles.map((M) => /* @__PURE__ */ A.jsx("option", { value: M.id, children: M.name }, M.id)) }, x.label))
  ] }) : /* @__PURE__ */ A.jsx(kl, { disabled: !0, value: "", children: /* @__PURE__ */ A.jsx("option", { children: "Connection Manager disabled" }) });
}, VS = vl.memo(
  ({ item: n, showToggleButton: r, showDeleteButton: s, showSelectInput: a, onToggle: u, onDelete: c, onSelectChange: f }) => {
    const {
      id: m,
      label: p,
      enabled: b,
      canDelete: g = !0,
      canToggle: E = !0,
      showSelect: v = !0,
      canSelect: S = !0,
      selectOptions: h = [],
      selectValue: C
    } = n, x = {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      border: "1px solid var(--SmartThemeBorderColor, #ccc)",
      color: "var(--SmartThemeBodyColor, #333)",
      marginBottom: "2px",
      opacity: r && !b ? 0.6 : 1
    }, M = { cursor: "pointer", flexShrink: 0 }, T = { display: "inline-block", flexShrink: 0, marginRight: "10px" };
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
      a && v && S && /* @__PURE__ */ A.jsx(
        kl,
        {
          value: C,
          onChange: (L) => f(m, L.target.value),
          disabled: !b,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: h.length === 0 ? /* @__PURE__ */ A.jsx("option", { disabled: !0, children: "--" }) : h.map((L) => /* @__PURE__ */ A.jsx("option", { value: L.value, children: L.label }, L.value))
        }
      ),
      a && (!v || !S) && /* @__PURE__ */ A.jsx("span", { style: T }),
      r && E && /* @__PURE__ */ A.jsx(
        Ee,
        {
          overrideDefaults: !0,
          className: `toggle-button fas ${b ? "fa-toggle-on" : "fa-toggle-off"}`,
          style: {
            ...M,
            marginRight: "10px",
            fontSize: "1.2em",
            color: b ? "var(--success-color, #4CAF50)" : "var(--SmartThemeBodyColor, #555)",
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
            ...M,
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
), X0 = ({
  items: n,
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
      const { oldIndex: v, newIndex: S } = E;
      if (v === void 0 || S === void 0 || v === S)
        return;
      const h = Array.from(n), [C] = h.splice(v, 1);
      h.splice(S, 0, C), r(h);
    }
  })), () => {
    var E;
    (E = m.current) == null || E.destroy(), m.current = null;
  }), [n, r, c]);
  const p = (E) => {
    r(n.map((v) => v.id === E ? { ...v, enabled: !v.enabled } : v));
  }, b = (E) => {
    r(n.filter((v) => v.id !== E));
  }, g = (E, v) => {
    r(n.map((S) => S.id === E ? { ...S, selectValue: v } : S));
  };
  return /* @__PURE__ */ A.jsx("ul", { ref: f, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: n.map((E) => /* @__PURE__ */ A.jsx(
    VS,
    {
      item: E,
      showToggleButton: s,
      showDeleteButton: a,
      showSelectInput: u,
      onToggle: p,
      onDelete: b,
      onSelectChange: g
    },
    E.id
  )) });
}, F0 = ({
  items: n,
  value: r,
  onChange: s,
  placeholder: a = "Select items...",
  closeOnSelect: u = !1,
  multiple: c = !0,
  disabled: f = !1,
  onBeforeSelection: m,
  enableSearch: p = !1,
  searchPlaceholder: b = "Search...",
  searchNoResultsText: g = "No results found",
  searchFuseOptions: E,
  inputClasses: v,
  containerClasses: S
}) => {
  const [h, C] = ie.useState(!1), [x, M] = ie.useState(""), T = ie.useRef(null);
  ie.useEffect(() => {
    const k = (R) => {
      T.current && !T.current.contains(R.target) && C(!1);
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, []), ie.useEffect(() => {
    h || M("");
  }, [h]);
  const L = ie.useMemo(() => {
    if (!p) return null;
    const k = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ...E
    };
    return new Bi(n, k);
  }, [n, p, E]), l = ie.useMemo(() => !p || !x.trim() || !L ? n : L.search(x.trim()).map((k) => k.item), [n, x, p, L]), y = async (k) => {
    let R;
    c ? R = r.includes(k) ? r.filter((P) => P !== k) : [...r, k] : R = r.includes(k) ? [] : [k], !(m && !await Promise.resolve(m(r, R))) && (s(R), u && C(!1));
  }, w = ie.useMemo(() => {
    var k;
    return r.length === 0 ? a : r.length === 1 ? ((k = n.find((R) => R.value === r[0])) == null ? void 0 : k.label) ?? r[0] : `${r.length} items selected`;
  }, [r, n, a]);
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
                    $0,
                    {
                      type: "text",
                      placeholder: b,
                      value: x,
                      onChange: (k) => M(k.target.value),
                      autoFocus: !0,
                      className: v
                    }
                  )
                }
              ),
              /* @__PURE__ */ A.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: l.length > 0 ? l.map((k) => /* @__PURE__ */ A.jsx(
                $S,
                {
                  item: k,
                  isSelected: r.includes(k.value),
                  onClick: y
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
}, $S = vl.memo(({ item: n, isSelected: r, onClick: s }) => {
  const [a, u] = ie.useState(!1);
  return /* @__PURE__ */ A.jsxs(
    "li",
    {
      onClick: () => s(n.value),
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
        /* @__PURE__ */ A.jsx("span", { children: n.label }),
        r && /* @__PURE__ */ A.jsx("i", { className: "checkmark fa-solid fa-check", style: { marginLeft: "8px" } })
      ]
    }
  );
}), _f = SillyTavern.getContext(), Lf = ({
  value: n,
  items: r,
  readOnlyValues: s = [],
  label: a,
  onChange: u,
  onItemsChange: c,
  enableCreate: f = !1,
  enableRename: m = !1,
  enableDelete: p = !1,
  onCreate: b,
  onRename: g,
  onDelete: E,
  buttons: v
}) => {
  const S = ie.useMemo(() => r.find((T) => T.value === n), [r, n]), h = ie.useCallback((T) => T ? s.includes(T) : !1, [s]), C = async () => {
    const T = await _f.Popup.show.input(
      `Create a new ${a}`,
      `Please enter a name for the new ${a}:`,
      ""
    );
    if (!T || T.trim() === "") return;
    const L = T.trim();
    if (r.some((y) => y.value === L)) {
      await ge("warning", `A ${a} with this name already exists.`);
      return;
    }
    let l = { value: L, label: L };
    if (b) {
      const y = await Promise.resolve(b(L));
      if (!y.confirmed) return;
      y.value && (typeof y.value == "string" ? l = { value: y.value, label: y.value } : l = y.value);
    }
    c([...r, l]), u(l.value, n);
  }, x = async () => {
    if (!S) {
      await ge("warning", `Please select a ${a} to rename.`);
      return;
    }
    if (h(S.value)) {
      await ge("warning", `This ${a} cannot be renamed as it is read-only.`);
      return;
    }
    const T = await _f.Popup.show.input(
      `Rename ${a}`,
      `Please enter a new name for "${S.label}":`,
      S.label
    );
    if (!T || T.trim() === "" || T.trim() === S.value) return;
    const L = T.trim();
    if (r.some((w) => w.value === L)) {
      await ge("warning", `A ${a} with this name already exists.`);
      return;
    }
    let l = { value: L, label: L };
    if (g) {
      const w = await Promise.resolve(g(S.value, L));
      if (!w.confirmed) return;
      w.value && (typeof w.value == "string" ? l = { value: w.value, label: w.value } : l = w.value);
    }
    const y = r.map((w) => w.value === S.value ? l : w);
    c(y), u(l.value, n);
  }, M = async () => {
    var T;
    if (!S) {
      await ge("warning", `Please select a ${a} to delete.`);
      return;
    }
    if (h(S.value)) {
      await ge("warning", `This ${a} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await _f.Popup.show.confirm(
      `Delete ${a}`,
      `Are you sure you want to delete "${S.label}"?`
    ) || E && !await Promise.resolve(E(S.value)))
      return;
    const L = r.findIndex((w) => w.value === S.value), l = r.filter((w) => w.value !== S.value);
    c(l);
    let y;
    if (l.length > 0) {
      const w = Math.min(L, l.length - 1);
      y = (T = l[w]) == null ? void 0 : T.value;
    }
    u(y, n);
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ A.jsx(kl, { value: n ?? "", onChange: (T) => u(T.target.value, n), children: r.map((T) => /* @__PURE__ */ A.jsx("option", { value: T.value, children: T.label }, T.value)) }),
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
        onClick: M,
        disabled: !S,
        "data-i18n": `[title]Delete selected ${a}`
      }
    ),
    v?.map((T) => /* @__PURE__ */ A.jsx(
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
}, Q0 = () => {
  const [, n] = ie.useState(0);
  return ie.useCallback(() => {
    n((s) => s + 1);
  }, []);
}, bf = SillyTavern.getContext(), YS = () => {
  const n = Q0(), r = It.getSettings(), [s, a] = ie.useState(nl[0]), u = ie.useCallback(
    (l) => {
      const y = It.getSettings();
      l(y), It.saveSettings(), n();
    },
    [n]
  ), c = ie.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((l) => ({
      value: l,
      label: l
    })),
    [r.mainContextTemplatePresets]
  ), f = ie.useMemo(
    () => Object.keys(r.prompts).map((l) => {
      const y = r.prompts[l];
      return {
        value: l,
        label: y ? `${y.label} (${l})` : l
      };
    }),
    [r.prompts]
  ), m = ie.useMemo(() => {
    const l = r.mainContextTemplatePresets[r.mainContextTemplatePreset];
    return l ? l.prompts.map((y) => {
      const w = r.prompts[y.promptName], k = w ? `${w.label} (${y.promptName})` : y.promptName;
      return {
        id: y.promptName,
        label: k,
        enabled: y.enabled,
        selectValue: y.role,
        selectOptions: [
          { value: "user", label: "User" },
          { value: "assistant", label: "Assistant" },
          { value: "system", label: "System" }
        ]
      };
    }) : [];
  }, [r.mainContextTemplatePreset, r.mainContextTemplatePresets, r.prompts]), p = (l) => {
    u((y) => {
      y.mainContextTemplatePreset = l ?? "default";
    });
  }, b = (l) => {
    u((y) => {
      const w = {}, k = y.mainContextTemplatePresets;
      l.forEach((R) => {
        w[R.value] = k[R.value] ?? structuredClone(k[y.mainContextTemplatePreset] ?? k.default);
      }), y.mainContextTemplatePresets = w;
    });
  }, g = (l) => {
    u((y) => {
      const w = l.map((R) => ({
        promptName: R.id,
        enabled: R.enabled,
        role: R.selectValue ?? "user"
      })), k = {
        ...y.mainContextTemplatePresets[y.mainContextTemplatePreset],
        prompts: w
      };
      y.mainContextTemplatePresets = {
        ...y.mainContextTemplatePresets,
        [y.mainContextTemplatePreset]: k
      };
    });
  }, E = async () => {
    await bf.Popup.show.confirm("Restore default", "Are you sure?") && u((y) => {
      y.mainContextTemplatePresets = {
        ...y.mainContextTemplatePresets,
        default: structuredClone(sh.mainContextTemplatePresets.default)
      }, y.mainContextTemplatePreset = "default";
    });
  }, v = (l) => {
    u((y) => {
      const w = {}, k = y.prompts, R = Object.keys(k), P = l.map((z) => z.value);
      P.forEach((z) => {
        w[z] = k[z] ?? { content: "", isDefault: !1, label: z };
      }), y.prompts = w;
      const O = R.filter((z) => !P.includes(z));
      if (O.length > 0) {
        const z = Object.fromEntries(
          Object.entries(y.mainContextTemplatePresets).map(([q, Y]) => [
            q,
            {
              ...Y,
              prompts: Y.prompts.filter((G) => !O.includes(G.promptName))
            }
          ])
        );
        y.mainContextTemplatePresets = z;
      }
    });
  }, S = (l) => {
    const y = Oy(l);
    return y ? r.prompts[y] ? (ge("error", `Prompt name already exists: ${y}`), { confirmed: !1 }) : (u((w) => {
      w.prompts = {
        ...w.prompts,
        [y]: {
          content: w.prompts[s]?.content ?? "",
          isDefault: !1,
          label: l
        }
      }, w.mainContextTemplatePresets = Object.fromEntries(
        Object.entries(w.mainContextTemplatePresets).map(([k, R]) => [
          k,
          {
            ...R,
            prompts: [...R.prompts, { enabled: !0, promptName: y, role: "user" }]
          }
        ])
      );
    }), a(y), { confirmed: !0, value: y }) : (ge("error", `Invalid prompt name: ${l}`), { confirmed: !1 });
  }, h = (l, y) => {
    const w = Oy(y);
    return w ? r.prompts[w] ? (ge("error", `Prompt name already exists: ${w}`), { confirmed: !1 }) : (u((k) => {
      const { [l]: R, ...P } = k.prompts;
      k.prompts = {
        ...P,
        [w]: { ...R, label: y }
      }, k.mainContextTemplatePresets = Object.fromEntries(
        Object.entries(k.mainContextTemplatePresets).map(([O, z]) => [
          O,
          {
            ...z,
            prompts: z.prompts.map((q) => q.promptName === l ? { ...q, promptName: w } : q)
          }
        ])
      );
    }), a(w), { confirmed: !0, value: w }) : (ge("error", `Invalid prompt name: ${y}`), { confirmed: !1 });
  }, C = (l) => {
    const y = l.target.value;
    u((w) => {
      const k = w.prompts[s];
      k && (w.prompts = {
        ...w.prompts,
        [s]: {
          ...k,
          content: y,
          isDefault: nl.includes(s) ? st[s] === y : !1
        }
      });
    });
  }, x = async () => {
    const l = r.prompts[s];
    if (!l) return ge("warning", "No prompt selected.");
    await bf.Popup.show.confirm("Restore Default", `Restore default for "${l.label}"?`) && u((w) => {
      w.prompts = {
        ...w.prompts,
        [s]: {
          ...w.prompts[s],
          content: st[s]
        }
      };
    });
  }, M = async () => {
    await bf.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (It.resetSettings(), n(), ge("success", "Settings reset. The UI has been updated."));
  }, T = r.prompts[s]?.content ?? "", L = nl.includes(s);
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
        Lf,
        {
          label: "Template",
          items: c,
          value: r.mainContextTemplatePreset,
          readOnlyValues: ["default"],
          onChange: p,
          onItemsChange: b,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ A.jsx("div", { style: { marginTop: "5px" }, children: /* @__PURE__ */ A.jsx(
        X0,
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
        L && /* @__PURE__ */ A.jsx(
          Ee,
          {
            className: "fa-solid fa-undo",
            title: "Restore selected prompt to default",
            onClick: x
          }
        )
      ] }),
      /* @__PURE__ */ A.jsx(
        Lf,
        {
          label: "Prompt",
          items: f,
          value: s,
          readOnlyValues: nl,
          onChange: (l) => a(l ?? ""),
          onItemsChange: v,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0,
          onCreate: S,
          onRename: h
        }
      ),
      /* @__PURE__ */ A.jsx(
        qn,
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
    /* @__PURE__ */ A.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ A.jsxs(Ee, { className: "danger_button", style: { width: "auto" }, onClick: M, children: [
      /* @__PURE__ */ A.jsx("i", { style: { marginRight: "10px" }, className: "fa-solid fa-triangle-exclamation" }),
      "I messed up, reset everything"
    ] }) })
  ] });
};
var gl = { exports: {} }, XS = gl.exports, My;
function FS() {
  return My || (My = 1, (function(n) {
    (function() {
      function r(l) {
        var y = {
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
          return JSON.parse(JSON.stringify(y));
        var w = {};
        for (var k in y)
          y.hasOwnProperty(k) && (w[k] = y[k].defaultValue);
        return w;
      }
      function s() {
        var l = r(!0), y = {};
        for (var w in l)
          l.hasOwnProperty(w) && (y[w] = !0);
        return y;
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
      a.helper = {}, a.extensions = {}, a.setOption = function(l, y) {
        return f[l] = y, this;
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
        var y = p[l];
        m = l;
        for (var w in y)
          y.hasOwnProperty(w) && (f[w] = y[w]);
      }, a.getFlavor = function() {
        return m;
      }, a.getFlavorOptions = function(l) {
        if (p.hasOwnProperty(l))
          return p[l];
      }, a.getDefaultOptions = function(l) {
        return r(l);
      }, a.subParser = function(l, y) {
        if (a.helper.isString(l))
          if (typeof y < "u")
            u[l] = y;
          else {
            if (u.hasOwnProperty(l))
              return u[l];
            throw Error("SubParser named " + l + " not registered!");
          }
      }, a.extension = function(l, y) {
        if (!a.helper.isString(l))
          throw Error("Extension 'name' must be a string");
        if (l = a.helper.stdExtName(l), a.helper.isUndefined(y)) {
          if (!c.hasOwnProperty(l))
            throw Error("Extension named " + l + " is not registered!");
          return c[l];
        } else {
          typeof y == "function" && (y = y()), a.helper.isArray(y) || (y = [y]);
          var w = b(y, l);
          if (w.valid)
            c[l] = y;
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
      function b(l, y) {
        var w = y ? "Error in " + y + " extension->" : "Error in unnamed extension", k = {
          valid: !0,
          error: ""
        };
        a.helper.isArray(l) || (l = [l]);
        for (var R = 0; R < l.length; ++R) {
          var P = w + " sub-extension " + R + ": ", O = l[R];
          if (typeof O != "object")
            return k.valid = !1, k.error = P + "must be an object, but " + typeof O + " given", k;
          if (!a.helper.isString(O.type))
            return k.valid = !1, k.error = P + 'property "type" must be a string, but ' + typeof O.type + " given", k;
          var z = O.type = O.type.toLowerCase();
          if (z === "language" && (z = O.type = "lang"), z === "html" && (z = O.type = "output"), z !== "lang" && z !== "output" && z !== "listener")
            return k.valid = !1, k.error = P + "type " + z + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"', k;
          if (z === "listener") {
            if (a.helper.isUndefined(O.listeners))
              return k.valid = !1, k.error = P + '. Extensions of type "listener" must have a property called "listeners"', k;
          } else if (a.helper.isUndefined(O.filter) && a.helper.isUndefined(O.regex))
            return k.valid = !1, k.error = P + z + ' extensions must define either a "regex" property or a "filter" method', k;
          if (O.listeners) {
            if (typeof O.listeners != "object")
              return k.valid = !1, k.error = P + '"listeners" property must be an object but ' + typeof O.listeners + " given", k;
            for (var q in O.listeners)
              if (O.listeners.hasOwnProperty(q) && typeof O.listeners[q] != "function")
                return k.valid = !1, k.error = P + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + q + " must be a function but " + typeof O.listeners[q] + " given", k;
          }
          if (O.filter) {
            if (typeof O.filter != "function")
              return k.valid = !1, k.error = P + '"filter" must be a function, but ' + typeof O.filter + " given", k;
          } else if (O.regex) {
            if (a.helper.isString(O.regex) && (O.regex = new RegExp(O.regex, "g")), !(O.regex instanceof RegExp))
              return k.valid = !1, k.error = P + '"regex" property must either be a string or a RegExp object, but ' + typeof O.regex + " given", k;
            if (a.helper.isUndefined(O.replace))
              return k.valid = !1, k.error = P + '"regex" extensions must implement a replace string or function', k;
          }
        }
        return k;
      }
      a.validateExtension = function(l) {
        var y = b(l, null);
        return y.valid ? !0 : (console.warn(y.error), !1);
      }, a.hasOwnProperty("helper") || (a.helper = {}), a.helper.isString = function(l) {
        return typeof l == "string" || l instanceof String;
      }, a.helper.isFunction = function(l) {
        var y = {};
        return l && y.toString.call(l) === "[object Function]";
      }, a.helper.isArray = function(l) {
        return Array.isArray(l);
      }, a.helper.isUndefined = function(l) {
        return typeof l > "u";
      }, a.helper.forEach = function(l, y) {
        if (a.helper.isUndefined(l))
          throw new Error("obj param is required");
        if (a.helper.isUndefined(y))
          throw new Error("callback param is required");
        if (!a.helper.isFunction(y))
          throw new Error("callback param must be a function/closure");
        if (typeof l.forEach == "function")
          l.forEach(y);
        else if (a.helper.isArray(l))
          for (var w = 0; w < l.length; w++)
            y(l[w], w, l);
        else if (typeof l == "object")
          for (var k in l)
            l.hasOwnProperty(k) && y(l[k], k, l);
        else
          throw new Error("obj does not seem to be an array or an iterable object");
      }, a.helper.stdExtName = function(l) {
        return l.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase();
      };
      function g(l, y) {
        var w = y.charCodeAt(0);
        return "¨E" + w + "E";
      }
      a.helper.escapeCharactersCallback = g, a.helper.escapeCharacters = function(l, y, w) {
        var k = "([" + y.replace(/([\[\]\\])/g, "\\$1") + "])";
        w && (k = "\\\\" + k);
        var R = new RegExp(k, "g");
        return l = l.replace(R, g), l;
      }, a.helper.unescapeHTMLEntities = function(l) {
        return l.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
      };
      var E = function(l, y, w, k) {
        var R = k || "", P = R.indexOf("g") > -1, O = new RegExp(y + "|" + w, "g" + R.replace(/g/g, "")), z = new RegExp(y, R.replace(/g/g, "")), q = [], Y, G, W, j, B;
        do
          for (Y = 0; W = O.exec(l); )
            if (z.test(W[0]))
              Y++ || (G = O.lastIndex, j = G - W[0].length);
            else if (Y && !--Y) {
              B = W.index + W[0].length;
              var K = {
                left: { start: j, end: G },
                match: { start: G, end: W.index },
                right: { start: W.index, end: B },
                wholeMatch: { start: j, end: B }
              };
              if (q.push(K), !P)
                return q;
            }
        while (Y && (O.lastIndex = G));
        return q;
      };
      a.helper.matchRecursiveRegExp = function(l, y, w, k) {
        for (var R = E(l, y, w, k), P = [], O = 0; O < R.length; ++O)
          P.push([
            l.slice(R[O].wholeMatch.start, R[O].wholeMatch.end),
            l.slice(R[O].match.start, R[O].match.end),
            l.slice(R[O].left.start, R[O].left.end),
            l.slice(R[O].right.start, R[O].right.end)
          ]);
        return P;
      }, a.helper.replaceRecursiveRegExp = function(l, y, w, k, R) {
        if (!a.helper.isFunction(y)) {
          var P = y;
          y = function() {
            return P;
          };
        }
        var O = E(l, w, k, R), z = l, q = O.length;
        if (q > 0) {
          var Y = [];
          O[0].wholeMatch.start !== 0 && Y.push(l.slice(0, O[0].wholeMatch.start));
          for (var G = 0; G < q; ++G)
            Y.push(
              y(
                l.slice(O[G].wholeMatch.start, O[G].wholeMatch.end),
                l.slice(O[G].match.start, O[G].match.end),
                l.slice(O[G].left.start, O[G].left.end),
                l.slice(O[G].right.start, O[G].right.end)
              )
            ), G < q - 1 && Y.push(l.slice(O[G].wholeMatch.end, O[G + 1].wholeMatch.start));
          O[q - 1].wholeMatch.end < l.length && Y.push(l.slice(O[q - 1].wholeMatch.end)), z = Y.join("");
        }
        return z;
      }, a.helper.regexIndexOf = function(l, y, w) {
        if (!a.helper.isString(l))
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        if (!(y instanceof RegExp))
          throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
        var k = l.substring(w || 0).search(y);
        return k >= 0 ? k + (w || 0) : k;
      }, a.helper.splitAtIndex = function(l, y) {
        if (!a.helper.isString(l))
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        return [l.substring(0, y), l.substring(y)];
      }, a.helper.encodeEmailAddress = function(l) {
        var y = [
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
            w = y[Math.floor(Math.random() * 2)](w);
          else {
            var k = Math.random();
            w = k > 0.9 ? y[2](w) : k > 0.45 ? y[1](w) : y[0](w);
          }
          return w;
        }), l;
      }, a.helper.padEnd = function(y, w, k) {
        return w = w >> 0, k = String(k || " "), y.length > w ? String(y) : (w = w - y.length, w > k.length && (k += k.repeat(w / k.length)), String(y) + k.slice(0, w));
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
        var y = {}, w = [], k = [], R = {}, P = m, O = {
          parsed: {},
          raw: "",
          format: ""
        };
        z();
        function z() {
          l = l || {};
          for (var j in f)
            f.hasOwnProperty(j) && (y[j] = f[j]);
          if (typeof l == "object")
            for (var B in l)
              l.hasOwnProperty(B) && (y[B] = l[B]);
          else
            throw Error("Converter expects the passed parameter to be an object, but " + typeof l + " was passed instead.");
          y.extensions && a.helper.forEach(y.extensions, q);
        }
        function q(j, B) {
          if (B = B || null, a.helper.isString(j))
            if (j = a.helper.stdExtName(j), B = j, a.extensions[j]) {
              console.warn("DEPRECATION WARNING: " + j + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"), Y(a.extensions[j], j);
              return;
            } else if (!a.helper.isUndefined(c[j]))
              j = c[j];
            else
              throw Error('Extension "' + j + '" could not be loaded. It was either not found or is not a valid extension.');
          typeof j == "function" && (j = j()), a.helper.isArray(j) || (j = [j]);
          var K = b(j, B);
          if (!K.valid)
            throw Error(K.error);
          for (var ae = 0; ae < j.length; ++ae) {
            switch (j[ae].type) {
              case "lang":
                w.push(j[ae]);
                break;
              case "output":
                k.push(j[ae]);
                break;
            }
            if (j[ae].hasOwnProperty("listeners"))
              for (var I in j[ae].listeners)
                j[ae].listeners.hasOwnProperty(I) && G(I, j[ae].listeners[I]);
          }
        }
        function Y(j, B) {
          typeof j == "function" && (j = j(new a.Converter())), a.helper.isArray(j) || (j = [j]);
          var K = b(j, B);
          if (!K.valid)
            throw Error(K.error);
          for (var ae = 0; ae < j.length; ++ae)
            switch (j[ae].type) {
              case "lang":
                w.push(j[ae]);
                break;
              case "output":
                k.push(j[ae]);
                break;
              default:
                throw Error("Extension loader error: Type unrecognized!!!");
            }
        }
        function G(j, B) {
          if (!a.helper.isString(j))
            throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof j + " given");
          if (typeof B != "function")
            throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof B + " given");
          R.hasOwnProperty(j) || (R[j] = []), R[j].push(B);
        }
        function W(j) {
          var B = j.match(/^\s*/)[0].length, K = new RegExp("^\\s{0," + B + "}", "gm");
          return j.replace(K, "");
        }
        this._dispatch = function(B, K, ae, I) {
          if (R.hasOwnProperty(B))
            for (var X = 0; X < R[B].length; ++X) {
              var ce = R[B][X](B, K, this, ae, I);
              ce && typeof ce < "u" && (K = ce);
            }
          return K;
        }, this.listen = function(j, B) {
          return G(j, B), this;
        }, this.makeHtml = function(j) {
          if (!j)
            return j;
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
          return j = j.replace(/¨/g, "¨T"), j = j.replace(/\$/g, "¨D"), j = j.replace(/\r\n/g, `
`), j = j.replace(/\r/g, `
`), j = j.replace(/\u00A0/g, "&nbsp;"), y.smartIndentationFix && (j = W(j)), j = `

` + j + `

`, j = a.subParser("detab")(j, y, B), j = j.replace(/^[ \t]+$/mg, ""), a.helper.forEach(w, function(K) {
            j = a.subParser("runExtension")(K, j, y, B);
          }), j = a.subParser("metadata")(j, y, B), j = a.subParser("hashPreCodeTags")(j, y, B), j = a.subParser("githubCodeBlocks")(j, y, B), j = a.subParser("hashHTMLBlocks")(j, y, B), j = a.subParser("hashCodeTags")(j, y, B), j = a.subParser("stripLinkDefinitions")(j, y, B), j = a.subParser("blockGamut")(j, y, B), j = a.subParser("unhashHTMLSpans")(j, y, B), j = a.subParser("unescapeSpecialChars")(j, y, B), j = j.replace(/¨D/g, "$$"), j = j.replace(/¨T/g, "¨"), j = a.subParser("completeHTMLDocument")(j, y, B), a.helper.forEach(k, function(K) {
            j = a.subParser("runExtension")(K, j, y, B);
          }), O = B.metadata, j;
        }, this.makeMarkdown = this.makeMd = function(j, B) {
          if (j = j.replace(/\r\n/g, `
`), j = j.replace(/\r/g, `
`), j = j.replace(/>[ \t]+</, ">¨NBSP;<"), !B)
            if (window && window.document)
              B = window.document;
            else
              throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
          var K = B.createElement("div");
          K.innerHTML = j;
          var ae = {
            preList: U(K)
          };
          $(K);
          for (var I = K.childNodes, X = "", ce = 0; ce < I.length; ce++)
            X += a.subParser("makeMarkdown.node")(I[ce], ae);
          function $(te) {
            for (var ne = 0; ne < te.childNodes.length; ++ne) {
              var ue = te.childNodes[ne];
              ue.nodeType === 3 ? !/\S/.test(ue.nodeValue) && !/^[ ]+$/.test(ue.nodeValue) ? (te.removeChild(ue), --ne) : (ue.nodeValue = ue.nodeValue.split(`
`).join(" "), ue.nodeValue = ue.nodeValue.replace(/(\s)+/g, "$1")) : ue.nodeType === 1 && $(ue);
            }
          }
          function U(te) {
            for (var ne = te.querySelectorAll("pre"), ue = [], re = 0; re < ne.length; ++re)
              if (ne[re].childElementCount === 1 && ne[re].firstChild.tagName.toLowerCase() === "code") {
                var pe = ne[re].firstChild.innerHTML.trim(), je = ne[re].firstChild.getAttribute("data-language") || "";
                if (je === "")
                  for (var Se = ne[re].firstChild.className.split(" "), me = 0; me < Se.length; ++me) {
                    var fe = Se[me].match(/^language-(.+)$/);
                    if (fe !== null) {
                      je = fe[1];
                      break;
                    }
                  }
                pe = a.helper.unescapeHTMLEntities(pe), ue.push(pe), ne[re].outerHTML = '<precode language="' + je + '" precodenum="' + re.toString() + '"></precode>';
              } else
                ue.push(ne[re].innerHTML), ne[re].innerHTML = "", ne[re].setAttribute("prenum", re.toString());
            return ue;
          }
          return X;
        }, this.setOption = function(j, B) {
          y[j] = B;
        }, this.getOption = function(j) {
          return y[j];
        }, this.getOptions = function() {
          return y;
        }, this.addExtension = function(j, B) {
          B = B || null, q(j, B);
        }, this.useExtension = function(j) {
          q(j);
        }, this.setFlavor = function(j) {
          if (!p.hasOwnProperty(j))
            throw Error(j + " flavor was not found");
          var B = p[j];
          P = j;
          for (var K in B)
            B.hasOwnProperty(K) && (y[K] = B[K]);
        }, this.getFlavor = function() {
          return P;
        }, this.removeExtension = function(j) {
          a.helper.isArray(j) || (j = [j]);
          for (var B = 0; B < j.length; ++B) {
            for (var K = j[B], ae = 0; ae < w.length; ++ae)
              w[ae] === K && w.splice(ae, 1);
            for (var I = 0; I < k.length; ++I)
              k[I] === K && k.splice(I, 1);
          }
        }, this.getAllExtensions = function() {
          return {
            language: w,
            output: k
          };
        }, this.getMetadata = function(j) {
          return j ? O.raw : O.parsed;
        }, this.getMetadataFormat = function() {
          return O.format;
        }, this._setMetadataPair = function(j, B) {
          O.parsed[j] = B;
        }, this._setMetadataFormat = function(j) {
          O.format = j;
        }, this._setMetadataRaw = function(j) {
          O.raw = j;
        };
      }, a.subParser("anchors", function(l, y, w) {
        l = w.converter._dispatch("anchors.before", l, y, w);
        var k = function(R, P, O, z, q, Y, G) {
          if (a.helper.isUndefined(G) && (G = ""), O = O.toLowerCase(), R.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
            z = "";
          else if (!z)
            if (O || (O = P.toLowerCase().replace(/ ?\n/g, " ")), z = "#" + O, !a.helper.isUndefined(w.gUrls[O]))
              z = w.gUrls[O], a.helper.isUndefined(w.gTitles[O]) || (G = w.gTitles[O]);
            else
              return R;
          z = z.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback);
          var W = '<a href="' + z + '"';
          return G !== "" && G !== null && (G = G.replace(/"/g, "&quot;"), G = G.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback), W += ' title="' + G + '"'), y.openLinksInNewWindow && !/^#/.test(z) && (W += ' rel="noopener noreferrer" target="¨E95Eblank"'), W += ">" + P + "</a>", W;
        };
        return l = l.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, k), l = l.replace(
          /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
          k
        ), l = l.replace(
          /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
          k
        ), l = l.replace(/\[([^\[\]]+)]()()()()()/g, k), y.ghMentions && (l = l.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function(R, P, O, z, q) {
          if (O === "\\")
            return P + z;
          if (!a.helper.isString(y.ghMentionsLink))
            throw new Error("ghMentionsLink option must be a string");
          var Y = y.ghMentionsLink.replace(/\{u}/g, q), G = "";
          return y.openLinksInNewWindow && (G = ' rel="noopener noreferrer" target="¨E95Eblank"'), P + '<a href="' + Y + '"' + G + ">" + z + "</a>";
        })), l = w.converter._dispatch("anchors.after", l, y, w), l;
      });
      var v = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi, S = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi, h = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi, C = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi, x = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, M = function(l) {
        return function(y, w, k, R, P, O, z) {
          k = k.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback);
          var q = k, Y = "", G = "", W = w || "", j = z || "";
          return /^www\./i.test(k) && (k = k.replace(/^www\./i, "http://www.")), l.excludeTrailingPunctuationFromURLs && O && (Y = O), l.openLinksInNewWindow && (G = ' rel="noopener noreferrer" target="¨E95Eblank"'), W + '<a href="' + k + '"' + G + ">" + q + "</a>" + Y + j;
        };
      }, T = function(l, y) {
        return function(w, k, R) {
          var P = "mailto:";
          return k = k || "", R = a.subParser("unescapeSpecialChars")(R, l, y), l.encodeEmails ? (P = a.helper.encodeEmailAddress(P + R), R = a.helper.encodeEmailAddress(R)) : P = P + R, k + '<a href="' + P + '">' + R + "</a>";
        };
      };
      a.subParser("autoLinks", function(l, y, w) {
        return l = w.converter._dispatch("autoLinks.before", l, y, w), l = l.replace(h, M(y)), l = l.replace(x, T(y, w)), l = w.converter._dispatch("autoLinks.after", l, y, w), l;
      }), a.subParser("simplifiedAutoLinks", function(l, y, w) {
        return y.simplifiedAutoLink && (l = w.converter._dispatch("simplifiedAutoLinks.before", l, y, w), y.excludeTrailingPunctuationFromURLs ? l = l.replace(S, M(y)) : l = l.replace(v, M(y)), l = l.replace(C, T(y, w)), l = w.converter._dispatch("simplifiedAutoLinks.after", l, y, w)), l;
      }), a.subParser("blockGamut", function(l, y, w) {
        return l = w.converter._dispatch("blockGamut.before", l, y, w), l = a.subParser("blockQuotes")(l, y, w), l = a.subParser("headers")(l, y, w), l = a.subParser("horizontalRule")(l, y, w), l = a.subParser("lists")(l, y, w), l = a.subParser("codeBlocks")(l, y, w), l = a.subParser("tables")(l, y, w), l = a.subParser("hashHTMLBlocks")(l, y, w), l = a.subParser("paragraphs")(l, y, w), l = w.converter._dispatch("blockGamut.after", l, y, w), l;
      }), a.subParser("blockQuotes", function(l, y, w) {
        l = w.converter._dispatch("blockQuotes.before", l, y, w), l = l + `

`;
        var k = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
        return y.splitAdjacentBlockquotes && (k = /^ {0,3}>[\s\S]*?(?:\n\n)/gm), l = l.replace(k, function(R) {
          return R = R.replace(/^[ \t]*>[ \t]?/gm, ""), R = R.replace(/¨0/g, ""), R = R.replace(/^[ \t]+$/gm, ""), R = a.subParser("githubCodeBlocks")(R, y, w), R = a.subParser("blockGamut")(R, y, w), R = R.replace(/(^|\n)/g, "$1  "), R = R.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(P, O) {
            var z = O;
            return z = z.replace(/^  /mg, "¨0"), z = z.replace(/¨0/g, ""), z;
          }), a.subParser("hashBlock")(`<blockquote>
` + R + `
</blockquote>`, y, w);
        }), l = w.converter._dispatch("blockQuotes.after", l, y, w), l;
      }), a.subParser("codeBlocks", function(l, y, w) {
        l = w.converter._dispatch("codeBlocks.before", l, y, w), l += "¨0";
        var k = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
        return l = l.replace(k, function(R, P, O) {
          var z = P, q = O, Y = `
`;
          return z = a.subParser("outdent")(z, y, w), z = a.subParser("encodeCode")(z, y, w), z = a.subParser("detab")(z, y, w), z = z.replace(/^\n+/g, ""), z = z.replace(/\n+$/g, ""), y.omitExtraWLInCodeBlocks && (Y = ""), z = "<pre><code>" + z + Y + "</code></pre>", a.subParser("hashBlock")(z, y, w) + q;
        }), l = l.replace(/¨0/, ""), l = w.converter._dispatch("codeBlocks.after", l, y, w), l;
      }), a.subParser("codeSpans", function(l, y, w) {
        return l = w.converter._dispatch("codeSpans.before", l, y, w), typeof l > "u" && (l = ""), l = l.replace(
          /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
          function(k, R, P, O) {
            var z = O;
            return z = z.replace(/^([ \t]*)/g, ""), z = z.replace(/[ \t]*$/g, ""), z = a.subParser("encodeCode")(z, y, w), z = R + "<code>" + z + "</code>", z = a.subParser("hashHTMLSpans")(z, y, w), z;
          }
        ), l = w.converter._dispatch("codeSpans.after", l, y, w), l;
      }), a.subParser("completeHTMLDocument", function(l, y, w) {
        if (!y.completeHTMLDocument)
          return l;
        l = w.converter._dispatch("completeHTMLDocument.before", l, y, w);
        var k = "html", R = `<!DOCTYPE HTML>
`, P = "", O = `<meta charset="utf-8">
`, z = "", q = "";
        typeof w.metadata.parsed.doctype < "u" && (R = "<!DOCTYPE " + w.metadata.parsed.doctype + `>
`, k = w.metadata.parsed.doctype.toString().toLowerCase(), (k === "html" || k === "html5") && (O = '<meta charset="utf-8">'));
        for (var Y in w.metadata.parsed)
          if (w.metadata.parsed.hasOwnProperty(Y))
            switch (Y.toLowerCase()) {
              case "doctype":
                break;
              case "title":
                P = "<title>" + w.metadata.parsed.title + `</title>
`;
                break;
              case "charset":
                k === "html" || k === "html5" ? O = '<meta charset="' + w.metadata.parsed.charset + `">
` : O = '<meta name="charset" content="' + w.metadata.parsed.charset + `">
`;
                break;
              case "language":
              case "lang":
                z = ' lang="' + w.metadata.parsed[Y] + '"', q += '<meta name="' + Y + '" content="' + w.metadata.parsed[Y] + `">
`;
                break;
              default:
                q += '<meta name="' + Y + '" content="' + w.metadata.parsed[Y] + `">
`;
            }
        return l = R + "<html" + z + `>
<head>
` + P + O + q + `</head>
<body>
` + l.trim() + `
</body>
</html>`, l = w.converter._dispatch("completeHTMLDocument.after", l, y, w), l;
      }), a.subParser("detab", function(l, y, w) {
        return l = w.converter._dispatch("detab.before", l, y, w), l = l.replace(/\t(?=\t)/g, "    "), l = l.replace(/\t/g, "¨A¨B"), l = l.replace(/¨B(.+?)¨A/g, function(k, R) {
          for (var P = R, O = 4 - P.length % 4, z = 0; z < O; z++)
            P += " ";
          return P;
        }), l = l.replace(/¨A/g, "    "), l = l.replace(/¨B/g, ""), l = w.converter._dispatch("detab.after", l, y, w), l;
      }), a.subParser("ellipsis", function(l, y, w) {
        return y.ellipsis && (l = w.converter._dispatch("ellipsis.before", l, y, w), l = l.replace(/\.\.\./g, "…"), l = w.converter._dispatch("ellipsis.after", l, y, w)), l;
      }), a.subParser("emoji", function(l, y, w) {
        if (!y.emoji)
          return l;
        l = w.converter._dispatch("emoji.before", l, y, w);
        var k = /:([\S]+?):/g;
        return l = l.replace(k, function(R, P) {
          return a.helper.emojis.hasOwnProperty(P) ? a.helper.emojis[P] : R;
        }), l = w.converter._dispatch("emoji.after", l, y, w), l;
      }), a.subParser("encodeAmpsAndAngles", function(l, y, w) {
        return l = w.converter._dispatch("encodeAmpsAndAngles.before", l, y, w), l = l.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"), l = l.replace(/<(?![a-z\/?$!])/gi, "&lt;"), l = l.replace(/</g, "&lt;"), l = l.replace(/>/g, "&gt;"), l = w.converter._dispatch("encodeAmpsAndAngles.after", l, y, w), l;
      }), a.subParser("encodeBackslashEscapes", function(l, y, w) {
        return l = w.converter._dispatch("encodeBackslashEscapes.before", l, y, w), l = l.replace(/\\(\\)/g, a.helper.escapeCharactersCallback), l = l.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g, a.helper.escapeCharactersCallback), l = w.converter._dispatch("encodeBackslashEscapes.after", l, y, w), l;
      }), a.subParser("encodeCode", function(l, y, w) {
        return l = w.converter._dispatch("encodeCode.before", l, y, w), l = l.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, a.helper.escapeCharactersCallback), l = w.converter._dispatch("encodeCode.after", l, y, w), l;
      }), a.subParser("escapeSpecialCharsWithinTagAttributes", function(l, y, w) {
        l = w.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", l, y, w);
        var k = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, R = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
        return l = l.replace(k, function(P) {
          return P.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, a.helper.escapeCharactersCallback);
        }), l = l.replace(R, function(P) {
          return P.replace(/([\\`*_~=|])/g, a.helper.escapeCharactersCallback);
        }), l = w.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", l, y, w), l;
      }), a.subParser("githubCodeBlocks", function(l, y, w) {
        return y.ghCodeBlocks ? (l = w.converter._dispatch("githubCodeBlocks.before", l, y, w), l += "¨0", l = l.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(k, R, P, O) {
          var z = y.omitExtraWLInCodeBlocks ? "" : `
`;
          return O = a.subParser("encodeCode")(O, y, w), O = a.subParser("detab")(O, y, w), O = O.replace(/^\n+/g, ""), O = O.replace(/\n+$/g, ""), O = "<pre><code" + (P ? ' class="' + P + " language-" + P + '"' : "") + ">" + O + z + "</code></pre>", O = a.subParser("hashBlock")(O, y, w), `

¨G` + (w.ghCodeBlocks.push({ text: k, codeblock: O }) - 1) + `G

`;
        }), l = l.replace(/¨0/, ""), w.converter._dispatch("githubCodeBlocks.after", l, y, w)) : l;
      }), a.subParser("hashBlock", function(l, y, w) {
        return l = w.converter._dispatch("hashBlock.before", l, y, w), l = l.replace(/(^\n+|\n+$)/g, ""), l = `

¨K` + (w.gHtmlBlocks.push(l) - 1) + `K

`, l = w.converter._dispatch("hashBlock.after", l, y, w), l;
      }), a.subParser("hashCodeTags", function(l, y, w) {
        l = w.converter._dispatch("hashCodeTags.before", l, y, w);
        var k = function(R, P, O, z) {
          var q = O + a.subParser("encodeCode")(P, y, w) + z;
          return "¨C" + (w.gHtmlSpans.push(q) - 1) + "C";
        };
        return l = a.helper.replaceRecursiveRegExp(l, k, "<code\\b[^>]*>", "</code>", "gim"), l = w.converter._dispatch("hashCodeTags.after", l, y, w), l;
      }), a.subParser("hashElement", function(l, y, w) {
        return function(k, R) {
          var P = R;
          return P = P.replace(/\n\n/g, `
`), P = P.replace(/^\n/, ""), P = P.replace(/\n+$/g, ""), P = `

¨K` + (w.gHtmlBlocks.push(P) - 1) + `K

`, P;
        };
      }), a.subParser("hashHTMLBlocks", function(l, y, w) {
        l = w.converter._dispatch("hashHTMLBlocks.before", l, y, w);
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
        ], R = function(j, B, K, ae) {
          var I = j;
          return K.search(/\bmarkdown\b/) !== -1 && (I = K + w.converter.makeHtml(B) + ae), `

¨K` + (w.gHtmlBlocks.push(I) - 1) + `K

`;
        };
        y.backslashEscapesHTMLTags && (l = l.replace(/\\<(\/?[^>]+?)>/g, function(j, B) {
          return "&lt;" + B + "&gt;";
        }));
        for (var P = 0; P < k.length; ++P)
          for (var O, z = new RegExp("^ {0,3}(<" + k[P] + "\\b[^>]*>)", "im"), q = "<" + k[P] + "\\b[^>]*>", Y = "</" + k[P] + ">"; (O = a.helper.regexIndexOf(l, z)) !== -1; ) {
            var G = a.helper.splitAtIndex(l, O), W = a.helper.replaceRecursiveRegExp(G[1], R, q, Y, "im");
            if (W === G[1])
              break;
            l = G[0].concat(W);
          }
        return l = l.replace(
          /(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
          a.subParser("hashElement")(l, y, w)
        ), l = a.helper.replaceRecursiveRegExp(l, function(j) {
          return `

¨K` + (w.gHtmlBlocks.push(j) - 1) + `K

`;
        }, "^ {0,3}<!--", "-->", "gm"), l = l.replace(
          /(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
          a.subParser("hashElement")(l, y, w)
        ), l = w.converter._dispatch("hashHTMLBlocks.after", l, y, w), l;
      }), a.subParser("hashHTMLSpans", function(l, y, w) {
        l = w.converter._dispatch("hashHTMLSpans.before", l, y, w);
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
        }), l = w.converter._dispatch("hashHTMLSpans.after", l, y, w), l;
      }), a.subParser("unhashHTMLSpans", function(l, y, w) {
        l = w.converter._dispatch("unhashHTMLSpans.before", l, y, w);
        for (var k = 0; k < w.gHtmlSpans.length; ++k) {
          for (var R = w.gHtmlSpans[k], P = 0; /¨C(\d+)C/.test(R); ) {
            var O = RegExp.$1;
            if (R = R.replace("¨C" + O + "C", w.gHtmlSpans[O]), P === 10) {
              console.error("maximum nesting of 10 spans reached!!!");
              break;
            }
            ++P;
          }
          l = l.replace("¨C" + k + "C", R);
        }
        return l = w.converter._dispatch("unhashHTMLSpans.after", l, y, w), l;
      }), a.subParser("hashPreCodeTags", function(l, y, w) {
        l = w.converter._dispatch("hashPreCodeTags.before", l, y, w);
        var k = function(R, P, O, z) {
          var q = O + a.subParser("encodeCode")(P, y, w) + z;
          return `

¨G` + (w.ghCodeBlocks.push({ text: R, codeblock: q }) - 1) + `G

`;
        };
        return l = a.helper.replaceRecursiveRegExp(l, k, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim"), l = w.converter._dispatch("hashPreCodeTags.after", l, y, w), l;
      }), a.subParser("headers", function(l, y, w) {
        l = w.converter._dispatch("headers.before", l, y, w);
        var k = isNaN(parseInt(y.headerLevelStart)) ? 1 : parseInt(y.headerLevelStart), R = y.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, P = y.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
        l = l.replace(R, function(q, Y) {
          var G = a.subParser("spanGamut")(Y, y, w), W = y.noHeaderId ? "" : ' id="' + z(Y) + '"', j = k, B = "<h" + j + W + ">" + G + "</h" + j + ">";
          return a.subParser("hashBlock")(B, y, w);
        }), l = l.replace(P, function(q, Y) {
          var G = a.subParser("spanGamut")(Y, y, w), W = y.noHeaderId ? "" : ' id="' + z(Y) + '"', j = k + 1, B = "<h" + j + W + ">" + G + "</h" + j + ">";
          return a.subParser("hashBlock")(B, y, w);
        });
        var O = y.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
        l = l.replace(O, function(q, Y, G) {
          var W = G;
          y.customizedHeaderId && (W = G.replace(/\s?\{([^{]+?)}\s*$/, ""));
          var j = a.subParser("spanGamut")(W, y, w), B = y.noHeaderId ? "" : ' id="' + z(G) + '"', K = k - 1 + Y.length, ae = "<h" + K + B + ">" + j + "</h" + K + ">";
          return a.subParser("hashBlock")(ae, y, w);
        });
        function z(q) {
          var Y, G;
          if (y.customizedHeaderId) {
            var W = q.match(/\{([^{]+?)}\s*$/);
            W && W[1] && (q = W[1]);
          }
          return Y = q, a.helper.isString(y.prefixHeaderId) ? G = y.prefixHeaderId : y.prefixHeaderId === !0 ? G = "section-" : G = "", y.rawPrefixHeaderId || (Y = G + Y), y.ghCompatibleHeaderId ? Y = Y.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase() : y.rawHeaderId ? Y = Y.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "¨").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase() : Y = Y.replace(/[^\w]/g, "").toLowerCase(), y.rawPrefixHeaderId && (Y = G + Y), w.hashLinkCounts[Y] ? Y = Y + "-" + w.hashLinkCounts[Y]++ : w.hashLinkCounts[Y] = 1, Y;
        }
        return l = w.converter._dispatch("headers.after", l, y, w), l;
      }), a.subParser("horizontalRule", function(l, y, w) {
        l = w.converter._dispatch("horizontalRule.before", l, y, w);
        var k = a.subParser("hashBlock")("<hr />", y, w);
        return l = l.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, k), l = l.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, k), l = l.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, k), l = w.converter._dispatch("horizontalRule.after", l, y, w), l;
      }), a.subParser("images", function(l, y, w) {
        l = w.converter._dispatch("images.before", l, y, w);
        var k = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, R = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, P = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, O = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, z = /!\[([^\[\]]+)]()()()()()/g;
        function q(G, W, j, B, K, ae, I, X) {
          return B = B.replace(/\s/g, ""), Y(G, W, j, B, K, ae, I, X);
        }
        function Y(G, W, j, B, K, ae, I, X) {
          var ce = w.gUrls, $ = w.gTitles, U = w.gDimensions;
          if (j = j.toLowerCase(), X || (X = ""), G.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
            B = "";
          else if (B === "" || B === null)
            if ((j === "" || j === null) && (j = W.toLowerCase().replace(/ ?\n/g, " ")), B = "#" + j, !a.helper.isUndefined(ce[j]))
              B = ce[j], a.helper.isUndefined($[j]) || (X = $[j]), a.helper.isUndefined(U[j]) || (K = U[j].width, ae = U[j].height);
            else
              return G;
          W = W.replace(/"/g, "&quot;").replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback), B = B.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback);
          var te = '<img src="' + B + '" alt="' + W + '"';
          return X && a.helper.isString(X) && (X = X.replace(/"/g, "&quot;").replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback), te += ' title="' + X + '"'), K && ae && (K = K === "*" ? "auto" : K, ae = ae === "*" ? "auto" : ae, te += ' width="' + K + '"', te += ' height="' + ae + '"'), te += " />", te;
        }
        return l = l.replace(O, Y), l = l.replace(P, q), l = l.replace(R, Y), l = l.replace(k, Y), l = l.replace(z, Y), l = w.converter._dispatch("images.after", l, y, w), l;
      }), a.subParser("italicsAndBold", function(l, y, w) {
        l = w.converter._dispatch("italicsAndBold.before", l, y, w);
        function k(R, P, O) {
          return P + R + O;
        }
        return y.literalMidWordUnderscores ? (l = l.replace(/\b___(\S[\s\S]*?)___\b/g, function(R, P) {
          return k(P, "<strong><em>", "</em></strong>");
        }), l = l.replace(/\b__(\S[\s\S]*?)__\b/g, function(R, P) {
          return k(P, "<strong>", "</strong>");
        }), l = l.replace(/\b_(\S[\s\S]*?)_\b/g, function(R, P) {
          return k(P, "<em>", "</em>");
        })) : (l = l.replace(/___(\S[\s\S]*?)___/g, function(R, P) {
          return /\S$/.test(P) ? k(P, "<strong><em>", "</em></strong>") : R;
        }), l = l.replace(/__(\S[\s\S]*?)__/g, function(R, P) {
          return /\S$/.test(P) ? k(P, "<strong>", "</strong>") : R;
        }), l = l.replace(/_([^\s_][\s\S]*?)_/g, function(R, P) {
          return /\S$/.test(P) ? k(P, "<em>", "</em>") : R;
        })), y.literalMidWordAsterisks ? (l = l.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(R, P, O) {
          return k(O, P + "<strong><em>", "</em></strong>");
        }), l = l.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function(R, P, O) {
          return k(O, P + "<strong>", "</strong>");
        }), l = l.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function(R, P, O) {
          return k(O, P + "<em>", "</em>");
        })) : (l = l.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(R, P) {
          return /\S$/.test(P) ? k(P, "<strong><em>", "</em></strong>") : R;
        }), l = l.replace(/\*\*(\S[\s\S]*?)\*\*/g, function(R, P) {
          return /\S$/.test(P) ? k(P, "<strong>", "</strong>") : R;
        }), l = l.replace(/\*([^\s*][\s\S]*?)\*/g, function(R, P) {
          return /\S$/.test(P) ? k(P, "<em>", "</em>") : R;
        })), l = w.converter._dispatch("italicsAndBold.after", l, y, w), l;
      }), a.subParser("lists", function(l, y, w) {
        function k(O, z) {
          w.gListLevel++, O = O.replace(/\n{2,}$/, `
`), O += "¨0";
          var q = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm, Y = /\n[ \t]*\n(?!¨0)/.test(O);
          return y.disableForced4SpacesIndentedSublists && (q = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm), O = O.replace(q, function(G, W, j, B, K, ae, I) {
            I = I && I.trim() !== "";
            var X = a.subParser("outdent")(K, y, w), ce = "";
            return ae && y.tasklists && (ce = ' class="task-list-item" style="list-style-type: none;"', X = X.replace(/^[ \t]*\[(x|X| )?]/m, function() {
              var $ = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
              return I && ($ += " checked"), $ += ">", $;
            })), X = X.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function($) {
              return "¨A" + $;
            }), W || X.search(/\n{2,}/) > -1 ? (X = a.subParser("githubCodeBlocks")(X, y, w), X = a.subParser("blockGamut")(X, y, w)) : (X = a.subParser("lists")(X, y, w), X = X.replace(/\n$/, ""), X = a.subParser("hashHTMLBlocks")(X, y, w), X = X.replace(/\n\n+/g, `

`), Y ? X = a.subParser("paragraphs")(X, y, w) : X = a.subParser("spanGamut")(X, y, w)), X = X.replace("¨A", ""), X = "<li" + ce + ">" + X + `</li>
`, X;
          }), O = O.replace(/¨0/g, ""), w.gListLevel--, z && (O = O.replace(/\s+$/, "")), O;
        }
        function R(O, z) {
          if (z === "ol") {
            var q = O.match(/^ *(\d+)\./);
            if (q && q[1] !== "1")
              return ' start="' + q[1] + '"';
          }
          return "";
        }
        function P(O, z, q) {
          var Y = y.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm, G = y.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm, W = z === "ul" ? Y : G, j = "";
          if (O.search(W) !== -1)
            (function K(ae) {
              var I = ae.search(W), X = R(O, z);
              I !== -1 ? (j += `

<` + z + X + `>
` + k(ae.slice(0, I), !!q) + "</" + z + `>
`, z = z === "ul" ? "ol" : "ul", W = z === "ul" ? Y : G, K(ae.slice(I))) : j += `

<` + z + X + `>
` + k(ae, !!q) + "</" + z + `>
`;
            })(O);
          else {
            var B = R(O, z);
            j = `

<` + z + B + `>
` + k(O, !!q) + "</" + z + `>
`;
          }
          return j;
        }
        return l = w.converter._dispatch("lists.before", l, y, w), l += "¨0", w.gListLevel ? l = l.replace(
          /^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
          function(O, z, q) {
            var Y = q.search(/[*+-]/g) > -1 ? "ul" : "ol";
            return P(z, Y, !0);
          }
        ) : l = l.replace(
          /(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
          function(O, z, q, Y) {
            var G = Y.search(/[*+-]/g) > -1 ? "ul" : "ol";
            return P(q, G, !1);
          }
        ), l = l.replace(/¨0/, ""), l = w.converter._dispatch("lists.after", l, y, w), l;
      }), a.subParser("metadata", function(l, y, w) {
        if (!y.metadata)
          return l;
        l = w.converter._dispatch("metadata.before", l, y, w);
        function k(R) {
          w.metadata.raw = R, R = R.replace(/&/g, "&amp;").replace(/"/g, "&quot;"), R = R.replace(/\n {4}/g, " "), R.replace(/^([\S ]+): +([\s\S]+?)$/gm, function(P, O, z) {
            return w.metadata.parsed[O] = z, "";
          });
        }
        return l = l.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(R, P, O) {
          return k(O), "¨M";
        }), l = l.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(R, P, O) {
          return P && (w.metadata.format = P), k(O), "¨M";
        }), l = l.replace(/¨M/g, ""), l = w.converter._dispatch("metadata.after", l, y, w), l;
      }), a.subParser("outdent", function(l, y, w) {
        return l = w.converter._dispatch("outdent.before", l, y, w), l = l.replace(/^(\t|[ ]{1,4})/gm, "¨0"), l = l.replace(/¨0/g, ""), l = w.converter._dispatch("outdent.after", l, y, w), l;
      }), a.subParser("paragraphs", function(l, y, w) {
        l = w.converter._dispatch("paragraphs.before", l, y, w), l = l.replace(/^\n+/g, ""), l = l.replace(/\n+$/g, "");
        for (var k = l.split(/\n{2,}/g), R = [], P = k.length, O = 0; O < P; O++) {
          var z = k[O];
          z.search(/¨(K|G)(\d+)\1/g) >= 0 ? R.push(z) : z.search(/\S/) >= 0 && (z = a.subParser("spanGamut")(z, y, w), z = z.replace(/^([ \t]*)/g, "<p>"), z += "</p>", R.push(z));
        }
        for (P = R.length, O = 0; O < P; O++) {
          for (var q = "", Y = R[O], G = !1; /¨(K|G)(\d+)\1/.test(Y); ) {
            var W = RegExp.$1, j = RegExp.$2;
            W === "K" ? q = w.gHtmlBlocks[j] : G ? q = a.subParser("encodeCode")(w.ghCodeBlocks[j].text, y, w) : q = w.ghCodeBlocks[j].codeblock, q = q.replace(/\$/g, "$$$$"), Y = Y.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, q), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(Y) && (G = !0);
          }
          R[O] = Y;
        }
        return l = R.join(`
`), l = l.replace(/^\n+/g, ""), l = l.replace(/\n+$/g, ""), w.converter._dispatch("paragraphs.after", l, y, w);
      }), a.subParser("runExtension", function(l, y, w, k) {
        if (l.filter)
          y = l.filter(y, k.converter, w);
        else if (l.regex) {
          var R = l.regex;
          R instanceof RegExp || (R = new RegExp(R, "g")), y = y.replace(R, l.replace);
        }
        return y;
      }), a.subParser("spanGamut", function(l, y, w) {
        return l = w.converter._dispatch("spanGamut.before", l, y, w), l = a.subParser("codeSpans")(l, y, w), l = a.subParser("escapeSpecialCharsWithinTagAttributes")(l, y, w), l = a.subParser("encodeBackslashEscapes")(l, y, w), l = a.subParser("images")(l, y, w), l = a.subParser("anchors")(l, y, w), l = a.subParser("autoLinks")(l, y, w), l = a.subParser("simplifiedAutoLinks")(l, y, w), l = a.subParser("emoji")(l, y, w), l = a.subParser("underline")(l, y, w), l = a.subParser("italicsAndBold")(l, y, w), l = a.subParser("strikethrough")(l, y, w), l = a.subParser("ellipsis")(l, y, w), l = a.subParser("hashHTMLSpans")(l, y, w), l = a.subParser("encodeAmpsAndAngles")(l, y, w), y.simpleLineBreaks ? /\n\n¨K/.test(l) || (l = l.replace(/\n+/g, `<br />
`)) : l = l.replace(/  +\n/g, `<br />
`), l = w.converter._dispatch("spanGamut.after", l, y, w), l;
      }), a.subParser("strikethrough", function(l, y, w) {
        function k(R) {
          return y.simplifiedAutoLink && (R = a.subParser("simplifiedAutoLinks")(R, y, w)), "<del>" + R + "</del>";
        }
        return y.strikethrough && (l = w.converter._dispatch("strikethrough.before", l, y, w), l = l.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(R, P) {
          return k(P);
        }), l = w.converter._dispatch("strikethrough.after", l, y, w)), l;
      }), a.subParser("stripLinkDefinitions", function(l, y, w) {
        var k = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, R = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
        l += "¨0";
        var P = function(O, z, q, Y, G, W, j) {
          return z = z.toLowerCase(), l.toLowerCase().split(z).length - 1 < 2 ? O : (q.match(/^data:.+?\/.+?;base64,/) ? w.gUrls[z] = q.replace(/\s/g, "") : w.gUrls[z] = a.subParser("encodeAmpsAndAngles")(q, y, w), W ? W + j : (j && (w.gTitles[z] = j.replace(/"|'/g, "&quot;")), y.parseImgDimensions && Y && G && (w.gDimensions[z] = {
            width: Y,
            height: G
          }), ""));
        };
        return l = l.replace(R, P), l = l.replace(k, P), l = l.replace(/¨0/, ""), l;
      }), a.subParser("tables", function(l, y, w) {
        if (!y.tables)
          return l;
        var k = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, R = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
        function P(G) {
          return /^:[ \t]*--*$/.test(G) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(G) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(G) ? ' style="text-align:center;"' : "";
        }
        function O(G, W) {
          var j = "";
          return G = G.trim(), (y.tablesHeaderId || y.tableHeaderId) && (j = ' id="' + G.replace(/ /g, "_").toLowerCase() + '"'), G = a.subParser("spanGamut")(G, y, w), "<th" + j + W + ">" + G + `</th>
`;
        }
        function z(G, W) {
          var j = a.subParser("spanGamut")(G, y, w);
          return "<td" + W + ">" + j + `</td>
`;
        }
        function q(G, W) {
          for (var j = `<table>
<thead>
<tr>
`, B = G.length, K = 0; K < B; ++K)
            j += G[K];
          for (j += `</tr>
</thead>
<tbody>
`, K = 0; K < W.length; ++K) {
            j += `<tr>
`;
            for (var ae = 0; ae < B; ++ae)
              j += W[K][ae];
            j += `</tr>
`;
          }
          return j += `</tbody>
</table>
`, j;
        }
        function Y(G) {
          var W, j = G.split(`
`);
          for (W = 0; W < j.length; ++W)
            /^ {0,3}\|/.test(j[W]) && (j[W] = j[W].replace(/^ {0,3}\|/, "")), /\|[ \t]*$/.test(j[W]) && (j[W] = j[W].replace(/\|[ \t]*$/, "")), j[W] = a.subParser("codeSpans")(j[W], y, w);
          var B = j[0].split("|").map(function(te) {
            return te.trim();
          }), K = j[1].split("|").map(function(te) {
            return te.trim();
          }), ae = [], I = [], X = [], ce = [];
          for (j.shift(), j.shift(), W = 0; W < j.length; ++W)
            j[W].trim() !== "" && ae.push(
              j[W].split("|").map(function(te) {
                return te.trim();
              })
            );
          if (B.length < K.length)
            return G;
          for (W = 0; W < K.length; ++W)
            X.push(P(K[W]));
          for (W = 0; W < B.length; ++W)
            a.helper.isUndefined(X[W]) && (X[W] = ""), I.push(O(B[W], X[W]));
          for (W = 0; W < ae.length; ++W) {
            for (var $ = [], U = 0; U < I.length; ++U)
              a.helper.isUndefined(ae[W][U]), $.push(z(ae[W][U], X[U]));
            ce.push($);
          }
          return q(I, ce);
        }
        return l = w.converter._dispatch("tables.before", l, y, w), l = l.replace(/\\(\|)/g, a.helper.escapeCharactersCallback), l = l.replace(k, Y), l = l.replace(R, Y), l = w.converter._dispatch("tables.after", l, y, w), l;
      }), a.subParser("underline", function(l, y, w) {
        return y.underline && (l = w.converter._dispatch("underline.before", l, y, w), y.literalMidWordUnderscores ? (l = l.replace(/\b___(\S[\s\S]*?)___\b/g, function(k, R) {
          return "<u>" + R + "</u>";
        }), l = l.replace(/\b__(\S[\s\S]*?)__\b/g, function(k, R) {
          return "<u>" + R + "</u>";
        })) : (l = l.replace(/___(\S[\s\S]*?)___/g, function(k, R) {
          return /\S$/.test(R) ? "<u>" + R + "</u>" : k;
        }), l = l.replace(/__(\S[\s\S]*?)__/g, function(k, R) {
          return /\S$/.test(R) ? "<u>" + R + "</u>" : k;
        })), l = l.replace(/(_)/g, a.helper.escapeCharactersCallback), l = w.converter._dispatch("underline.after", l, y, w)), l;
      }), a.subParser("unescapeSpecialChars", function(l, y, w) {
        return l = w.converter._dispatch("unescapeSpecialChars.before", l, y, w), l = l.replace(/¨E(\d+)E/g, function(k, R) {
          var P = parseInt(R);
          return String.fromCharCode(P);
        }), l = w.converter._dispatch("unescapeSpecialChars.after", l, y, w), l;
      }), a.subParser("makeMarkdown.blockquote", function(l, y) {
        var w = "";
        if (l.hasChildNodes())
          for (var k = l.childNodes, R = k.length, P = 0; P < R; ++P) {
            var O = a.subParser("makeMarkdown.node")(k[P], y);
            O !== "" && (w += O);
          }
        return w = w.trim(), w = "> " + w.split(`
`).join(`
> `), w;
      }), a.subParser("makeMarkdown.codeBlock", function(l, y) {
        var w = l.getAttribute("language"), k = l.getAttribute("precodenum");
        return "```" + w + `
` + y.preList[k] + "\n```";
      }), a.subParser("makeMarkdown.codeSpan", function(l) {
        return "`" + l.innerHTML + "`";
      }), a.subParser("makeMarkdown.emphasis", function(l, y) {
        var w = "";
        if (l.hasChildNodes()) {
          w += "*";
          for (var k = l.childNodes, R = k.length, P = 0; P < R; ++P)
            w += a.subParser("makeMarkdown.node")(k[P], y);
          w += "*";
        }
        return w;
      }), a.subParser("makeMarkdown.header", function(l, y, w) {
        var k = new Array(w + 1).join("#"), R = "";
        if (l.hasChildNodes()) {
          R = k + " ";
          for (var P = l.childNodes, O = P.length, z = 0; z < O; ++z)
            R += a.subParser("makeMarkdown.node")(P[z], y);
        }
        return R;
      }), a.subParser("makeMarkdown.hr", function() {
        return "---";
      }), a.subParser("makeMarkdown.image", function(l) {
        var y = "";
        return l.hasAttribute("src") && (y += "![" + l.getAttribute("alt") + "](", y += "<" + l.getAttribute("src") + ">", l.hasAttribute("width") && l.hasAttribute("height") && (y += " =" + l.getAttribute("width") + "x" + l.getAttribute("height")), l.hasAttribute("title") && (y += ' "' + l.getAttribute("title") + '"'), y += ")"), y;
      }), a.subParser("makeMarkdown.links", function(l, y) {
        var w = "";
        if (l.hasChildNodes() && l.hasAttribute("href")) {
          var k = l.childNodes, R = k.length;
          w = "[";
          for (var P = 0; P < R; ++P)
            w += a.subParser("makeMarkdown.node")(k[P], y);
          w += "](", w += "<" + l.getAttribute("href") + ">", l.hasAttribute("title") && (w += ' "' + l.getAttribute("title") + '"'), w += ")";
        }
        return w;
      }), a.subParser("makeMarkdown.list", function(l, y, w) {
        var k = "";
        if (!l.hasChildNodes())
          return "";
        for (var R = l.childNodes, P = R.length, O = l.getAttribute("start") || 1, z = 0; z < P; ++z)
          if (!(typeof R[z].tagName > "u" || R[z].tagName.toLowerCase() !== "li")) {
            var q = "";
            w === "ol" ? q = O.toString() + ". " : q = "- ", k += q + a.subParser("makeMarkdown.listItem")(R[z], y), ++O;
          }
        return k += `
<!-- -->
`, k.trim();
      }), a.subParser("makeMarkdown.listItem", function(l, y) {
        for (var w = "", k = l.childNodes, R = k.length, P = 0; P < R; ++P)
          w += a.subParser("makeMarkdown.node")(k[P], y);
        return /\n$/.test(w) ? w = w.split(`
`).join(`
    `).replace(/^ {4}$/gm, "").replace(/\n\n+/g, `

`) : w += `
`, w;
      }), a.subParser("makeMarkdown.node", function(l, y, w) {
        w = w || !1;
        var k = "";
        if (l.nodeType === 3)
          return a.subParser("makeMarkdown.txt")(l, y);
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
            w || (k = a.subParser("makeMarkdown.header")(l, y, 1) + `

`);
            break;
          case "h2":
            w || (k = a.subParser("makeMarkdown.header")(l, y, 2) + `

`);
            break;
          case "h3":
            w || (k = a.subParser("makeMarkdown.header")(l, y, 3) + `

`);
            break;
          case "h4":
            w || (k = a.subParser("makeMarkdown.header")(l, y, 4) + `

`);
            break;
          case "h5":
            w || (k = a.subParser("makeMarkdown.header")(l, y, 5) + `

`);
            break;
          case "h6":
            w || (k = a.subParser("makeMarkdown.header")(l, y, 6) + `

`);
            break;
          case "p":
            w || (k = a.subParser("makeMarkdown.paragraph")(l, y) + `

`);
            break;
          case "blockquote":
            w || (k = a.subParser("makeMarkdown.blockquote")(l, y) + `

`);
            break;
          case "hr":
            w || (k = a.subParser("makeMarkdown.hr")(l, y) + `

`);
            break;
          case "ol":
            w || (k = a.subParser("makeMarkdown.list")(l, y, "ol") + `

`);
            break;
          case "ul":
            w || (k = a.subParser("makeMarkdown.list")(l, y, "ul") + `

`);
            break;
          case "precode":
            w || (k = a.subParser("makeMarkdown.codeBlock")(l, y) + `

`);
            break;
          case "pre":
            w || (k = a.subParser("makeMarkdown.pre")(l, y) + `

`);
            break;
          case "table":
            w || (k = a.subParser("makeMarkdown.table")(l, y) + `

`);
            break;
          //
          // SPANS
          //
          case "code":
            k = a.subParser("makeMarkdown.codeSpan")(l, y);
            break;
          case "em":
          case "i":
            k = a.subParser("makeMarkdown.emphasis")(l, y);
            break;
          case "strong":
          case "b":
            k = a.subParser("makeMarkdown.strong")(l, y);
            break;
          case "del":
            k = a.subParser("makeMarkdown.strikethrough")(l, y);
            break;
          case "a":
            k = a.subParser("makeMarkdown.links")(l, y);
            break;
          case "img":
            k = a.subParser("makeMarkdown.image")(l, y);
            break;
          default:
            k = l.outerHTML + `

`;
        }
        return k;
      }), a.subParser("makeMarkdown.paragraph", function(l, y) {
        var w = "";
        if (l.hasChildNodes())
          for (var k = l.childNodes, R = k.length, P = 0; P < R; ++P)
            w += a.subParser("makeMarkdown.node")(k[P], y);
        return w = w.trim(), w;
      }), a.subParser("makeMarkdown.pre", function(l, y) {
        var w = l.getAttribute("prenum");
        return "<pre>" + y.preList[w] + "</pre>";
      }), a.subParser("makeMarkdown.strikethrough", function(l, y) {
        var w = "";
        if (l.hasChildNodes()) {
          w += "~~";
          for (var k = l.childNodes, R = k.length, P = 0; P < R; ++P)
            w += a.subParser("makeMarkdown.node")(k[P], y);
          w += "~~";
        }
        return w;
      }), a.subParser("makeMarkdown.strong", function(l, y) {
        var w = "";
        if (l.hasChildNodes()) {
          w += "**";
          for (var k = l.childNodes, R = k.length, P = 0; P < R; ++P)
            w += a.subParser("makeMarkdown.node")(k[P], y);
          w += "**";
        }
        return w;
      }), a.subParser("makeMarkdown.table", function(l, y) {
        var w = "", k = [[], []], R = l.querySelectorAll("thead>tr>th"), P = l.querySelectorAll("tbody>tr"), O, z;
        for (O = 0; O < R.length; ++O) {
          var q = a.subParser("makeMarkdown.tableCell")(R[O], y), Y = "---";
          if (R[O].hasAttribute("style")) {
            var G = R[O].getAttribute("style").toLowerCase().replace(/\s/g, "");
            switch (G) {
              case "text-align:left;":
                Y = ":---";
                break;
              case "text-align:right;":
                Y = "---:";
                break;
              case "text-align:center;":
                Y = ":---:";
                break;
            }
          }
          k[0][O] = q.trim(), k[1][O] = Y;
        }
        for (O = 0; O < P.length; ++O) {
          var W = k.push([]) - 1, j = P[O].getElementsByTagName("td");
          for (z = 0; z < R.length; ++z) {
            var B = " ";
            typeof j[z] < "u" && (B = a.subParser("makeMarkdown.tableCell")(j[z], y)), k[W].push(B);
          }
        }
        var K = 3;
        for (O = 0; O < k.length; ++O)
          for (z = 0; z < k[O].length; ++z) {
            var ae = k[O][z].length;
            ae > K && (K = ae);
          }
        for (O = 0; O < k.length; ++O) {
          for (z = 0; z < k[O].length; ++z)
            O === 1 ? k[O][z].slice(-1) === ":" ? k[O][z] = a.helper.padEnd(k[O][z].slice(-1), K - 1, "-") + ":" : k[O][z] = a.helper.padEnd(k[O][z], K, "-") : k[O][z] = a.helper.padEnd(k[O][z], K);
          w += "| " + k[O].join(" | ") + ` |
`;
        }
        return w.trim();
      }), a.subParser("makeMarkdown.tableCell", function(l, y) {
        var w = "";
        if (!l.hasChildNodes())
          return "";
        for (var k = l.childNodes, R = k.length, P = 0; P < R; ++P)
          w += a.subParser("makeMarkdown.node")(k[P], y, !0);
        return w.trim();
      }), a.subParser("makeMarkdown.txt", function(l) {
        var y = l.nodeValue;
        return y = y.replace(/ +/g, " "), y = y.replace(/¨NBSP;/g, " "), y = a.helper.unescapeHTMLEntities(y), y = y.replace(/([*_~|`])/g, "\\$1"), y = y.replace(/^(\s*)>/g, "\\$1>"), y = y.replace(/^#/gm, "\\#"), y = y.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3"), y = y.replace(/^( {0,3}\d+)\./gm, "$1\\."), y = y.replace(/^( {0,3})([+-])/gm, "$1\\$2"), y = y.replace(/]([\s]*)\(/g, "\\]$1\\("), y = y.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:"), y;
      });
      var L = this;
      n.exports ? n.exports = a : L.showdown = a;
    }).call(XS);
  })(gl)), gl.exports;
}
var QS = FS();
const KS = /* @__PURE__ */ Qf(QS);
var na = (
  /** @class */
  (function() {
    function n() {
    }
    return n.prototype.diff = function(r, s, a) {
      a === void 0 && (a = {});
      var u;
      typeof a == "function" ? (u = a, a = {}) : "callback" in a && (u = a.callback);
      var c = this.castInput(r, a), f = this.castInput(s, a), m = this.removeEmpty(this.tokenize(c, a)), p = this.removeEmpty(this.tokenize(f, a));
      return this.diffWithOptionsObj(m, p, a, u);
    }, n.prototype.diffWithOptionsObj = function(r, s, a, u) {
      var c = this, f, m = function(l) {
        if (l = c.postProcess(l, a), u) {
          setTimeout(function() {
            u(l);
          }, 0);
          return;
        } else
          return l;
      }, p = s.length, b = r.length, g = 1, E = p + b;
      a.maxEditLength != null && (E = Math.min(E, a.maxEditLength));
      var v = (f = a.timeout) !== null && f !== void 0 ? f : 1 / 0, S = Date.now() + v, h = [{ oldPos: -1, lastComponent: void 0 }], C = this.extractCommon(h[0], s, r, 0, a);
      if (h[0].oldPos + 1 >= b && C + 1 >= p)
        return m(this.buildValues(h[0].lastComponent, s, r));
      var x = -1 / 0, M = 1 / 0, T = function() {
        for (var l = Math.max(x, -g); l <= Math.min(M, g); l += 2) {
          var y = void 0, w = h[l - 1], k = h[l + 1];
          w && (h[l - 1] = void 0);
          var R = !1;
          if (k) {
            var P = k.oldPos - l;
            R = k && 0 <= P && P < p;
          }
          var O = w && w.oldPos + 1 < b;
          if (!R && !O) {
            h[l] = void 0;
            continue;
          }
          if (!O || R && w.oldPos < k.oldPos ? y = c.addToPath(k, !0, !1, 0, a) : y = c.addToPath(w, !1, !0, 1, a), C = c.extractCommon(y, s, r, l, a), y.oldPos + 1 >= b && C + 1 >= p)
            return m(c.buildValues(y.lastComponent, s, r)) || !0;
          h[l] = y, y.oldPos + 1 >= b && (M = Math.min(M, l - 1)), C + 1 >= p && (x = Math.max(x, l + 1));
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
          var L = T();
          if (L)
            return L;
        }
    }, n.prototype.addToPath = function(r, s, a, u, c) {
      var f = r.lastComponent;
      return f && !c.oneChangePerToken && f.added === s && f.removed === a ? {
        oldPos: r.oldPos + u,
        lastComponent: { count: f.count + 1, added: s, removed: a, previousComponent: f.previousComponent }
      } : {
        oldPos: r.oldPos + u,
        lastComponent: { count: 1, added: s, removed: a, previousComponent: f }
      };
    }, n.prototype.extractCommon = function(r, s, a, u, c) {
      for (var f = s.length, m = a.length, p = r.oldPos, b = p - u, g = 0; b + 1 < f && p + 1 < m && this.equals(a[p + 1], s[b + 1], c); )
        b++, p++, g++, c.oneChangePerToken && (r.lastComponent = { count: 1, previousComponent: r.lastComponent, added: !1, removed: !1 });
      return g && !c.oneChangePerToken && (r.lastComponent = { count: g, previousComponent: r.lastComponent, added: !1, removed: !1 }), r.oldPos = p, b;
    }, n.prototype.equals = function(r, s, a) {
      return a.comparator ? a.comparator(r, s) : r === s || !!a.ignoreCase && r.toLowerCase() === s.toLowerCase();
    }, n.prototype.removeEmpty = function(r) {
      for (var s = [], a = 0; a < r.length; a++)
        r[a] && s.push(r[a]);
      return s;
    }, n.prototype.castInput = function(r, s) {
      return r;
    }, n.prototype.tokenize = function(r, s) {
      return Array.from(r);
    }, n.prototype.join = function(r) {
      return r.join("");
    }, n.prototype.postProcess = function(r, s) {
      return r;
    }, Object.defineProperty(n.prototype, "useLongestToken", {
      get: function() {
        return !1;
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.buildValues = function(r, s, a) {
      for (var u = [], c; r; )
        u.push(r), c = r.previousComponent, delete r.previousComponent, r = c;
      u.reverse();
      for (var f = u.length, m = 0, p = 0, b = 0; m < f; m++) {
        var g = u[m];
        if (g.removed)
          g.value = this.join(a.slice(b, b + g.count)), b += g.count;
        else {
          if (!g.added && this.useLongestToken) {
            var E = s.slice(p, p + g.count);
            E = E.map(function(v, S) {
              var h = a[b + S];
              return h.length > v.length ? h : v;
            }), g.value = this.join(E);
          } else
            g.value = this.join(s.slice(p, p + g.count));
          p += g.count, g.added || (b += g.count);
        }
      }
      return u;
    }, n;
  })()
), JS = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
      a.__proto__ = u;
    } || function(a, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (a[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function a() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (a.prototype = s.prototype, new a());
  };
})(), WS = (
  /** @class */
  (function(n) {
    JS(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r;
  })(na)
);
new WS();
function jy(n, r) {
  var s;
  for (s = 0; s < n.length && s < r.length; s++)
    if (n[s] != r[s])
      return n.slice(0, s);
  return n.slice(0, s);
}
function Ry(n, r) {
  var s;
  if (!n || !r || n[n.length - 1] != r[r.length - 1])
    return "";
  for (s = 0; s < n.length && s < r.length; s++)
    if (n[n.length - (s + 1)] != r[r.length - (s + 1)])
      return n.slice(-s);
  return n.slice(-s);
}
function Pf(n, r, s) {
  if (n.slice(0, r.length) != r)
    throw Error("string ".concat(JSON.stringify(n), " doesn't start with prefix ").concat(JSON.stringify(r), "; this is a bug"));
  return s + n.slice(r.length);
}
function If(n, r, s) {
  if (!r)
    return n + s;
  if (n.slice(-r.length) != r)
    throw Error("string ".concat(JSON.stringify(n), " doesn't end with suffix ").concat(JSON.stringify(r), "; this is a bug"));
  return n.slice(0, -r.length) + s;
}
function $s(n, r) {
  return Pf(n, r, "");
}
function rl(n, r) {
  return If(n, r, "");
}
function Dy(n, r) {
  return r.slice(0, ew(n, r));
}
function ew(n, r) {
  var s = 0;
  n.length > r.length && (s = n.length - r.length);
  var a = r.length;
  n.length < r.length && (a = n.length);
  var u = Array(a), c = 0;
  u[0] = 0;
  for (var f = 1; f < a; f++) {
    for (r[f] == r[c] ? u[f] = u[c] : u[f] = c; c > 0 && r[f] != r[c]; )
      c = u[c];
    r[f] == r[c] && c++;
  }
  c = 0;
  for (var m = s; m < n.length; m++) {
    for (; c > 0 && n[m] != r[c]; )
      c = u[c];
    n[m] == r[c] && c++;
  }
  return c;
}
function Ys(n) {
  var r;
  for (r = n.length - 1; r >= 0 && n[r].match(/\s/); r--)
    ;
  return n.substring(r + 1);
}
function Qr(n) {
  var r = n.match(/^\s*/);
  return r ? r[0] : "";
}
var K0 = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
      a.__proto__ = u;
    } || function(a, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (a[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function a() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (a.prototype = s.prototype, new a());
  };
})(), Al = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", tw = new RegExp("[".concat(Al, "]+|\\s+|[^").concat(Al, "]"), "ug"), nw = (
  /** @class */
  (function(n) {
    K0(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
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
        u = s.match(tw) || [];
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
        m.added ? c = m : m.removed ? f = m : ((c || f) && zy(u, f, c, m), u = m, c = null, f = null);
      }), (c || f) && zy(u, f, c, null), s;
    }, r;
  })(na)
), rw = new nw();
function J0(n, r, s) {
  return rw.diff(n, r, s);
}
function zy(n, r, s, a) {
  if (r && s) {
    var u = Qr(r.value), c = Ys(r.value), f = Qr(s.value), m = Ys(s.value);
    if (n) {
      var p = jy(u, f);
      n.value = If(n.value, f, p), r.value = $s(r.value, p), s.value = $s(s.value, p);
    }
    if (a) {
      var b = Ry(c, m);
      a.value = Pf(a.value, m, b), r.value = rl(r.value, b), s.value = rl(s.value, b);
    }
  } else if (s) {
    if (n) {
      var g = Qr(s.value);
      s.value = s.value.substring(g.length);
    }
    if (a) {
      var g = Qr(a.value);
      a.value = a.value.substring(g.length);
    }
  } else if (n && a) {
    var E = Qr(a.value), v = Qr(r.value), S = Ys(r.value), h = jy(E, v);
    r.value = $s(r.value, h);
    var C = Ry($s(E, h), S);
    r.value = rl(r.value, C), a.value = Pf(a.value, E, C), n.value = If(n.value, E, E.slice(0, E.length - C.length));
  } else if (a) {
    var x = Qr(a.value), M = Ys(r.value), T = Dy(M, x);
    r.value = rl(r.value, T);
  } else if (n) {
    var L = Ys(n.value), l = Qr(r.value), T = Dy(L, l);
    r.value = $s(r.value, T);
  }
}
var aw = (
  /** @class */
  (function(n) {
    K0(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      var a = new RegExp("(\\r?\\n)|[".concat(Al, "]+|[^\\S\\n\\r]+|[^").concat(Al, "]"), "ug");
      return s.match(a) || [];
    }, r;
  })(na)
);
new aw();
var iw = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
      a.__proto__ = u;
    } || function(a, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (a[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function a() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (a.prototype = s.prototype, new a());
  };
})(), sw = (
  /** @class */
  (function(n) {
    iw(r, n);
    function r() {
      var s = n !== null && n.apply(this, arguments) || this;
      return s.tokenize = W0, s;
    }
    return r.prototype.equals = function(s, a, u) {
      return u.ignoreWhitespace ? ((!u.newlineIsToken || !s.includes(`
`)) && (s = s.trim()), (!u.newlineIsToken || !a.includes(`
`)) && (a = a.trim())) : u.ignoreNewlineAtEof && !u.newlineIsToken && (s.endsWith(`
`) && (s = s.slice(0, -1)), a.endsWith(`
`) && (a = a.slice(0, -1))), n.prototype.equals.call(this, s, a, u);
    }, r;
  })(na)
);
new sw();
function W0(n, r) {
  r.stripTrailingCr && (n = n.replace(/\r\n/g, `
`));
  var s = [], a = n.split(/(\n|\r\n)/);
  a[a.length - 1] || a.pop();
  for (var u = 0; u < a.length; u++) {
    var c = a[u];
    u % 2 && !r.newlineIsToken ? s[s.length - 1] += c : s.push(c);
  }
  return s;
}
var ow = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
      a.__proto__ = u;
    } || function(a, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (a[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function a() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (a.prototype = s.prototype, new a());
  };
})(), uw = (
  /** @class */
  (function(n) {
    ow(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      return s.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(na)
);
new uw();
var lw = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
      a.__proto__ = u;
    } || function(a, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (a[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function a() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (a.prototype = s.prototype, new a());
  };
})(), cw = (
  /** @class */
  (function(n) {
    lw(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      return s.split(/([{}:;,]|\s+)/);
    }, r;
  })(na)
);
new cw();
var dw = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
      a.__proto__ = u;
    } || function(a, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (a[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function a() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (a.prototype = s.prototype, new a());
  };
})(), fw = (
  /** @class */
  (function(n) {
    dw(r, n);
    function r() {
      var s = n !== null && n.apply(this, arguments) || this;
      return s.tokenize = W0, s;
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
      return typeof s == "string" ? s : JSON.stringify(Bf(s, null, null, f), null, "  ");
    }, r.prototype.equals = function(s, a, u) {
      return n.prototype.equals.call(this, s.replace(/,([\r\n])/g, "$1"), a.replace(/,([\r\n])/g, "$1"), u);
    }, r;
  })(na)
);
new fw();
function Bf(n, r, s, a, u) {
  r = r || [], s = s || [], a && (n = a(u === void 0 ? "" : u, n));
  var c;
  for (c = 0; c < r.length; c += 1)
    if (r[c] === n)
      return s[c];
  var f;
  if (Object.prototype.toString.call(n) === "[object Array]") {
    for (r.push(n), f = new Array(n.length), s.push(f), c = 0; c < n.length; c += 1)
      f[c] = Bf(n[c], r, s, a, String(c));
    return r.pop(), s.pop(), f;
  }
  if (n && n.toJSON && (n = n.toJSON()), typeof n == "object" && n !== null) {
    r.push(n), f = {}, s.push(f);
    var m = [], p;
    for (p in n)
      Object.prototype.hasOwnProperty.call(n, p) && m.push(p);
    for (m.sort(), c = 0; c < m.length; c += 1)
      p = m[c], f[p] = Bf(n[p], r, s, a, p);
    r.pop(), s.pop();
  } else
    f = n;
  return f;
}
var hw = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
      a.__proto__ = u;
    } || function(a, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (a[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function a() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (a.prototype = s.prototype, new a());
  };
})(), pw = (
  /** @class */
  (function(n) {
    hw(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
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
new pw();
const mw = ({ originalEntry: n, newEntry: r }) => {
  const s = ie.useMemo(() => {
    const a = J0(n.content, r.content);
    let u = "", c = "";
    return a.forEach((f) => {
      const p = `<span style="${f.added ? "color: green; background-color: #e6ffed;" : f.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${f.value}</span>`;
      f.added || (u += p), f.removed || (c += p);
    }), { originalHtml: u, newHtml: c };
  }, [n, r]);
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
}, gw = SillyTavern.getContext(), vw = ie.forwardRef(({ entry: n, initialRegexIds: r }, s) => {
  const [a, u] = ie.useState([]), [c, f] = ie.useState(n.comment), [m, p] = ie.useState(n.key.join(", ")), [b, g] = ie.useState(n.content), [E, v] = ie.useState([]);
  ie.useEffect(() => {
    const M = gw.extensionSettings.regex ?? [];
    u(M);
    const T = Object.entries(r).map(([L, l]) => {
      const y = M.find((w) => w.id === L);
      return y ? { id: y.id, label: y.scriptName, enabled: !l?.disabled } : null;
    }).filter((L) => L !== null);
    v(T);
  }, [r]), ie.useImperativeHandle(s, () => ({
    getFormData: () => {
      const M = {
        ...n,
        comment: c.trim(),
        key: m.split(",").map((L) => L.trim()).filter(Boolean),
        content: b
      }, T = E.reduce(
        (L, l) => (L[l.id] = { disabled: !l.enabled }, L),
        {}
      );
      return { updatedEntry: M, updatedRegexIds: T };
    }
  }));
  const S = ie.useMemo(
    () => a.map((M) => ({ value: M.id, label: M.scriptName })),
    [a]
  ), h = ie.useMemo(() => E.map((M) => M.id), [E]), C = ie.useCallback(() => {
    let M = n.content;
    const T = E.filter((L) => L.enabled);
    for (const L of T) {
      const l = a.find((y) => y.id === L.id);
      l && (M = _3(l, M));
    }
    g(M);
  }, [E, a, n.content]), x = (M) => {
    const T = M.map((L) => {
      const l = E.find((w) => w.id === L);
      if (l) return l;
      const y = a.find((w) => w.id === L);
      return y ? { id: y.id, label: y.scriptName, enabled: !0 } : null;
    }).filter((L) => L !== null);
    v(T);
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "edit-popup", style: { padding: "10px", display: "flex", flexDirection: "column", gap: "15px" }, children: [
    /* @__PURE__ */ A.jsx("h3", { children: "Edit Suggestion" }),
    /* @__PURE__ */ A.jsxs("div", { children: [
      /* @__PURE__ */ A.jsx("label", { children: "Title" }),
      /* @__PURE__ */ A.jsx("input", { type: "text", className: "text_pole", value: c, onChange: (M) => f(M.target.value) })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { children: [
      /* @__PURE__ */ A.jsx("label", { children: "Keywords (comma-separated)" }),
      /* @__PURE__ */ A.jsx("input", { type: "text", className: "text_pole", value: m, onChange: (M) => p(M.target.value) })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { children: [
      /* @__PURE__ */ A.jsx("h4", { children: "Apply Regex Scripts" }),
      /* @__PURE__ */ A.jsx(
        F0,
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
        X0,
        {
          items: E,
          onItemsChange: v,
          showToggleButton: !0,
          showDeleteButton: !0,
          sortableJsOptions: { style: { marginTop: "10px" } }
        }
      )
    ] }),
    /* @__PURE__ */ A.jsx(Ee, { onClick: C, className: "menu_button", children: "Simulate Regex" }),
    /* @__PURE__ */ A.jsx(
      qn,
      {
        value: b,
        onChange: (M) => g(M.target.value),
        rows: 8,
        placeholder: "Resulting content..."
      }
    )
  ] });
});
function de(n, r, s) {
  function a(m, p) {
    var b;
    Object.defineProperty(m, "_zod", {
      value: m._zod ?? {},
      enumerable: !1
    }), (b = m._zod).traits ?? (b.traits = /* @__PURE__ */ new Set()), m._zod.traits.add(n), r(m, p);
    for (const g in f.prototype)
      g in m || Object.defineProperty(m, g, { value: f.prototype[g].bind(m) });
    m._zod.constr = f, m._zod.def = p;
  }
  const u = s?.Parent ?? Object;
  class c extends u {
  }
  Object.defineProperty(c, "name", { value: n });
  function f(m) {
    var p;
    const b = s?.Parent ? new c() : this;
    a(b, m), (p = b._zod).deferred ?? (p.deferred = []);
    for (const g of b._zod.deferred)
      g();
    return b;
  }
  return Object.defineProperty(f, "init", { value: a }), Object.defineProperty(f, Symbol.hasInstance, {
    value: (m) => s?.Parent && m instanceof s.Parent ? !0 : m?._zod?.traits?.has(n)
  }), Object.defineProperty(f, "name", { value: n }), f;
}
class Pi extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class e_ extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const t_ = {};
function La(n) {
  return t_;
}
function n_(n) {
  const r = Object.values(n).filter((a) => typeof a == "number");
  return Object.entries(n).filter(([a, u]) => r.indexOf(+a) === -1).map(([a, u]) => u);
}
function Uf(n, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function oh(n) {
  return {
    get value() {
      {
        const r = n();
        return Object.defineProperty(this, "value", { value: r }), r;
      }
    }
  };
}
function uh(n) {
  return n == null;
}
function lh(n) {
  const r = n.startsWith("^") ? 1 : 0, s = n.endsWith("$") ? n.length - 1 : n.length;
  return n.slice(r, s);
}
const Ly = Symbol("evaluating");
function rt(n, r, s) {
  let a;
  Object.defineProperty(n, r, {
    get() {
      if (a !== Ly)
        return a === void 0 && (a = Ly, a = s()), a;
    },
    set(u) {
      Object.defineProperty(n, r, {
        value: u
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function Ia(n, r, s) {
  Object.defineProperty(n, r, {
    value: s,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Ba(...n) {
  const r = {};
  for (const s of n) {
    const a = Object.getOwnPropertyDescriptors(s);
    Object.assign(r, a);
  }
  return Object.defineProperties({}, r);
}
function Py(n) {
  return JSON.stringify(n);
}
const r_ = "captureStackTrace" in Error ? Error.captureStackTrace : (...n) => {
};
function xl(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
const yw = oh(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const n = Function;
    return new n(""), !0;
  } catch {
    return !1;
  }
});
function io(n) {
  if (xl(n) === !1)
    return !1;
  const r = n.constructor;
  if (r === void 0)
    return !0;
  const s = r.prototype;
  return !(xl(s) === !1 || Object.prototype.hasOwnProperty.call(s, "isPrototypeOf") === !1);
}
function a_(n) {
  return io(n) ? { ...n } : Array.isArray(n) ? [...n] : n;
}
const _w = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Ml(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ra(n, r, s) {
  const a = new n._zod.constr(r ?? n._zod.def);
  return (!r || s?.parent) && (a._zod.parent = n), a;
}
function Oe(n) {
  const r = n;
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
function bw(n) {
  return Object.keys(n).filter((r) => n[r]._zod.optin === "optional" && n[r]._zod.optout === "optional");
}
function Sw(n, r) {
  const s = n._zod.def, a = Ba(n._zod.def, {
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
  return ra(n, a);
}
function ww(n, r) {
  const s = n._zod.def, a = Ba(n._zod.def, {
    get shape() {
      const u = { ...n._zod.def.shape };
      for (const c in r) {
        if (!(c in s.shape))
          throw new Error(`Unrecognized key: "${c}"`);
        r[c] && delete u[c];
      }
      return Ia(this, "shape", u), u;
    },
    checks: []
  });
  return ra(n, a);
}
function Ew(n, r) {
  if (!io(r))
    throw new Error("Invalid input to extend: expected a plain object");
  const s = n._zod.def.checks;
  if (s && s.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const u = Ba(n._zod.def, {
    get shape() {
      const c = { ...n._zod.def.shape, ...r };
      return Ia(this, "shape", c), c;
    },
    checks: []
  });
  return ra(n, u);
}
function Cw(n, r) {
  if (!io(r))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const s = {
    ...n._zod.def,
    get shape() {
      const a = { ...n._zod.def.shape, ...r };
      return Ia(this, "shape", a), a;
    },
    checks: n._zod.def.checks
  };
  return ra(n, s);
}
function kw(n, r) {
  const s = Ba(n._zod.def, {
    get shape() {
      const a = { ...n._zod.def.shape, ...r._zod.def.shape };
      return Ia(this, "shape", a), a;
    },
    get catchall() {
      return r._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return ra(n, s);
}
function Aw(n, r, s) {
  const a = Ba(r._zod.def, {
    get shape() {
      const u = r._zod.def.shape, c = { ...u };
      if (s)
        for (const f in s) {
          if (!(f in u))
            throw new Error(`Unrecognized key: "${f}"`);
          s[f] && (c[f] = n ? new n({
            type: "optional",
            innerType: u[f]
          }) : u[f]);
        }
      else
        for (const f in u)
          c[f] = n ? new n({
            type: "optional",
            innerType: u[f]
          }) : u[f];
      return Ia(this, "shape", c), c;
    },
    checks: []
  });
  return ra(r, a);
}
function xw(n, r, s) {
  const a = Ba(r._zod.def, {
    get shape() {
      const u = r._zod.def.shape, c = { ...u };
      if (s)
        for (const f in s) {
          if (!(f in c))
            throw new Error(`Unrecognized key: "${f}"`);
          s[f] && (c[f] = new n({
            type: "nonoptional",
            innerType: u[f]
          }));
        }
      else
        for (const f in u)
          c[f] = new n({
            type: "nonoptional",
            innerType: u[f]
          });
      return Ia(this, "shape", c), c;
    },
    checks: []
  });
  return ra(r, a);
}
function zi(n, r = 0) {
  if (n.aborted === !0)
    return !0;
  for (let s = r; s < n.issues.length; s++)
    if (n.issues[s]?.continue !== !0)
      return !0;
  return !1;
}
function i_(n, r) {
  return r.map((s) => {
    var a;
    return (a = s).path ?? (a.path = []), s.path.unshift(n), s;
  });
}
function al(n) {
  return typeof n == "string" ? n : n?.message;
}
function Pa(n, r, s) {
  const a = { ...n, path: n.path ?? [] };
  if (!n.message) {
    const u = al(n.inst?._zod.def?.error?.(n)) ?? al(r?.error?.(n)) ?? al(s.customError?.(n)) ?? al(s.localeError?.(n)) ?? "Invalid input";
    a.message = u;
  }
  return delete a.inst, delete a.continue, r?.reportInput || delete a.input, a;
}
function ch(n) {
  return Array.isArray(n) ? "array" : typeof n == "string" ? "string" : "unknown";
}
function so(...n) {
  const [r, s, a] = n;
  return typeof r == "string" ? {
    message: r,
    code: "custom",
    input: s,
    inst: a
  } : { ...r };
}
const s_ = (n, r) => {
  n.name = "$ZodError", Object.defineProperty(n, "_zod", {
    value: n._zod,
    enumerable: !1
  }), Object.defineProperty(n, "issues", {
    value: r,
    enumerable: !1
  }), n.message = JSON.stringify(r, Uf, 2), Object.defineProperty(n, "toString", {
    value: () => n.message,
    enumerable: !1
  });
}, o_ = de("$ZodError", s_), u_ = de("$ZodError", s_, { Parent: Error });
function Tw(n, r = (s) => s.message) {
  const s = {}, a = [];
  for (const u of n.issues)
    u.path.length > 0 ? (s[u.path[0]] = s[u.path[0]] || [], s[u.path[0]].push(r(u))) : a.push(r(u));
  return { formErrors: a, fieldErrors: s };
}
function Nw(n, r = (s) => s.message) {
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
  return a(n), s;
}
const dh = (n) => (r, s, a, u) => {
  const c = a ? Object.assign(a, { async: !1 }) : { async: !1 }, f = r._zod.run({ value: s, issues: [] }, c);
  if (f instanceof Promise)
    throw new Pi();
  if (f.issues.length) {
    const m = new (u?.Err ?? n)(f.issues.map((p) => Pa(p, c, La())));
    throw r_(m, u?.callee), m;
  }
  return f.value;
}, fh = (n) => async (r, s, a, u) => {
  const c = a ? Object.assign(a, { async: !0 }) : { async: !0 };
  let f = r._zod.run({ value: s, issues: [] }, c);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const m = new (u?.Err ?? n)(f.issues.map((p) => Pa(p, c, La())));
    throw r_(m, u?.callee), m;
  }
  return f.value;
}, jl = (n) => (r, s, a) => {
  const u = a ? { ...a, async: !1 } : { async: !1 }, c = r._zod.run({ value: s, issues: [] }, u);
  if (c instanceof Promise)
    throw new Pi();
  return c.issues.length ? {
    success: !1,
    error: new (n ?? o_)(c.issues.map((f) => Pa(f, u, La())))
  } : { success: !0, data: c.value };
}, Ow = /* @__PURE__ */ jl(u_), Rl = (n) => async (r, s, a) => {
  const u = a ? Object.assign(a, { async: !0 }) : { async: !0 };
  let c = r._zod.run({ value: s, issues: [] }, u);
  return c instanceof Promise && (c = await c), c.issues.length ? {
    success: !1,
    error: new n(c.issues.map((f) => Pa(f, u, La())))
  } : { success: !0, data: c.value };
}, Mw = /* @__PURE__ */ Rl(u_), jw = (n) => (r, s, a) => {
  const u = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return dh(n)(r, s, u);
}, Rw = (n) => (r, s, a) => dh(n)(r, s, a), Dw = (n) => async (r, s, a) => {
  const u = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return fh(n)(r, s, u);
}, zw = (n) => async (r, s, a) => fh(n)(r, s, a), Lw = (n) => (r, s, a) => {
  const u = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return jl(n)(r, s, u);
}, Pw = (n) => (r, s, a) => jl(n)(r, s, a), Iw = (n) => async (r, s, a) => {
  const u = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return Rl(n)(r, s, u);
}, Bw = (n) => async (r, s, a) => Rl(n)(r, s, a), Uw = /^[cC][^\s-]{8,}$/, Hw = /^[0-9a-z]+$/, qw = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Zw = /^[0-9a-vA-V]{20}$/, Gw = /^[A-Za-z0-9]{27}$/, Vw = /^[a-zA-Z0-9_-]{21}$/, $w = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Yw = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Iy = (n) => n ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Xw = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Fw = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Qw() {
  return new RegExp(Fw, "u");
}
const Kw = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Jw = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Ww = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, eE = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, tE = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, l_ = /^[A-Za-z0-9_-]*$/, nE = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, rE = /^\+(?:[0-9]){6,14}[0-9]$/, c_ = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", aE = /* @__PURE__ */ new RegExp(`^${c_}$`);
function d_(n) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number" ? n.precision === -1 ? `${r}` : n.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${n.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function iE(n) {
  return new RegExp(`^${d_(n)}$`);
}
function sE(n) {
  const r = d_({ precision: n.precision }), s = ["Z"];
  n.local && s.push(""), n.offset && s.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const a = `${r}(?:${s.join("|")})`;
  return new RegExp(`^${c_}T(?:${a})$`);
}
const oE = (n) => {
  const r = n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, uE = /^[^A-Z]*$/, lE = /^[^a-z]*$/, rr = /* @__PURE__ */ de("$ZodCheck", (n, r) => {
  var s;
  n._zod ?? (n._zod = {}), n._zod.def = r, (s = n._zod).onattach ?? (s.onattach = []);
}), cE = /* @__PURE__ */ de("$ZodCheckMaxLength", (n, r) => {
  var s;
  rr.init(n, r), (s = n._zod.def).when ?? (s.when = (a) => {
    const u = a.value;
    return !uh(u) && u.length !== void 0;
  }), n._zod.onattach.push((a) => {
    const u = a._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < u && (a._zod.bag.maximum = r.maximum);
  }), n._zod.check = (a) => {
    const u = a.value;
    if (u.length <= r.maximum)
      return;
    const f = ch(u);
    a.issues.push({
      origin: f,
      code: "too_big",
      maximum: r.maximum,
      inclusive: !0,
      input: u,
      inst: n,
      continue: !r.abort
    });
  };
}), dE = /* @__PURE__ */ de("$ZodCheckMinLength", (n, r) => {
  var s;
  rr.init(n, r), (s = n._zod.def).when ?? (s.when = (a) => {
    const u = a.value;
    return !uh(u) && u.length !== void 0;
  }), n._zod.onattach.push((a) => {
    const u = a._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > u && (a._zod.bag.minimum = r.minimum);
  }), n._zod.check = (a) => {
    const u = a.value;
    if (u.length >= r.minimum)
      return;
    const f = ch(u);
    a.issues.push({
      origin: f,
      code: "too_small",
      minimum: r.minimum,
      inclusive: !0,
      input: u,
      inst: n,
      continue: !r.abort
    });
  };
}), fE = /* @__PURE__ */ de("$ZodCheckLengthEquals", (n, r) => {
  var s;
  rr.init(n, r), (s = n._zod.def).when ?? (s.when = (a) => {
    const u = a.value;
    return !uh(u) && u.length !== void 0;
  }), n._zod.onattach.push((a) => {
    const u = a._zod.bag;
    u.minimum = r.length, u.maximum = r.length, u.length = r.length;
  }), n._zod.check = (a) => {
    const u = a.value, c = u.length;
    if (c === r.length)
      return;
    const f = ch(u), m = c > r.length;
    a.issues.push({
      origin: f,
      ...m ? { code: "too_big", maximum: r.length } : { code: "too_small", minimum: r.length },
      inclusive: !0,
      exact: !0,
      input: a.value,
      inst: n,
      continue: !r.abort
    });
  };
}), Dl = /* @__PURE__ */ de("$ZodCheckStringFormat", (n, r) => {
  var s, a;
  rr.init(n, r), n._zod.onattach.push((u) => {
    const c = u._zod.bag;
    c.format = r.format, r.pattern && (c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(r.pattern));
  }), r.pattern ? (s = n._zod).check ?? (s.check = (u) => {
    r.pattern.lastIndex = 0, !r.pattern.test(u.value) && u.issues.push({
      origin: "string",
      code: "invalid_format",
      format: r.format,
      input: u.value,
      ...r.pattern ? { pattern: r.pattern.toString() } : {},
      inst: n,
      continue: !r.abort
    });
  }) : (a = n._zod).check ?? (a.check = () => {
  });
}), hE = /* @__PURE__ */ de("$ZodCheckRegex", (n, r) => {
  Dl.init(n, r), n._zod.check = (s) => {
    r.pattern.lastIndex = 0, !r.pattern.test(s.value) && s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: s.value,
      pattern: r.pattern.toString(),
      inst: n,
      continue: !r.abort
    });
  };
}), pE = /* @__PURE__ */ de("$ZodCheckLowerCase", (n, r) => {
  r.pattern ?? (r.pattern = uE), Dl.init(n, r);
}), mE = /* @__PURE__ */ de("$ZodCheckUpperCase", (n, r) => {
  r.pattern ?? (r.pattern = lE), Dl.init(n, r);
}), gE = /* @__PURE__ */ de("$ZodCheckIncludes", (n, r) => {
  rr.init(n, r);
  const s = Ml(r.includes), a = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${s}` : s);
  r.pattern = a, n._zod.onattach.push((u) => {
    const c = u._zod.bag;
    c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(a);
  }), n._zod.check = (u) => {
    u.value.includes(r.includes, r.position) || u.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: r.includes,
      input: u.value,
      inst: n,
      continue: !r.abort
    });
  };
}), vE = /* @__PURE__ */ de("$ZodCheckStartsWith", (n, r) => {
  rr.init(n, r);
  const s = new RegExp(`^${Ml(r.prefix)}.*`);
  r.pattern ?? (r.pattern = s), n._zod.onattach.push((a) => {
    const u = a._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(s);
  }), n._zod.check = (a) => {
    a.value.startsWith(r.prefix) || a.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: r.prefix,
      input: a.value,
      inst: n,
      continue: !r.abort
    });
  };
}), yE = /* @__PURE__ */ de("$ZodCheckEndsWith", (n, r) => {
  rr.init(n, r);
  const s = new RegExp(`.*${Ml(r.suffix)}$`);
  r.pattern ?? (r.pattern = s), n._zod.onattach.push((a) => {
    const u = a._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(s);
  }), n._zod.check = (a) => {
    a.value.endsWith(r.suffix) || a.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: r.suffix,
      input: a.value,
      inst: n,
      continue: !r.abort
    });
  };
}), _E = /* @__PURE__ */ de("$ZodCheckOverwrite", (n, r) => {
  rr.init(n, r), n._zod.check = (s) => {
    s.value = r.tx(s.value);
  };
});
class bE {
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
const SE = {
  major: 4,
  minor: 1,
  patch: 12
}, At = /* @__PURE__ */ de("$ZodType", (n, r) => {
  var s;
  n ?? (n = {}), n._zod.def = r, n._zod.bag = n._zod.bag || {}, n._zod.version = SE;
  const a = [...n._zod.def.checks ?? []];
  n._zod.traits.has("$ZodCheck") && a.unshift(n);
  for (const u of a)
    for (const c of u._zod.onattach)
      c(n);
  if (a.length === 0)
    (s = n._zod).deferred ?? (s.deferred = []), n._zod.deferred?.push(() => {
      n._zod.run = n._zod.parse;
    });
  else {
    const u = (f, m, p) => {
      let b = zi(f), g;
      for (const E of m) {
        if (E._zod.def.when) {
          if (!E._zod.def.when(f))
            continue;
        } else if (b)
          continue;
        const v = f.issues.length, S = E._zod.check(f);
        if (S instanceof Promise && p?.async === !1)
          throw new Pi();
        if (g || S instanceof Promise)
          g = (g ?? Promise.resolve()).then(async () => {
            await S, f.issues.length !== v && (b || (b = zi(f, v)));
          });
        else {
          if (f.issues.length === v)
            continue;
          b || (b = zi(f, v));
        }
      }
      return g ? g.then(() => f) : f;
    }, c = (f, m, p) => {
      if (zi(f))
        return f.aborted = !0, f;
      const b = u(m, a, p);
      if (b instanceof Promise) {
        if (p.async === !1)
          throw new Pi();
        return b.then((g) => n._zod.parse(g, p));
      }
      return n._zod.parse(b, p);
    };
    n._zod.run = (f, m) => {
      if (m.skipChecks)
        return n._zod.parse(f, m);
      if (m.direction === "backward") {
        const b = n._zod.parse({ value: f.value, issues: [] }, { ...m, skipChecks: !0 });
        return b instanceof Promise ? b.then((g) => c(g, f, m)) : c(b, f, m);
      }
      const p = n._zod.parse(f, m);
      if (p instanceof Promise) {
        if (m.async === !1)
          throw new Pi();
        return p.then((b) => u(b, a, m));
      }
      return u(p, a, m);
    };
  }
  n["~standard"] = {
    validate: (u) => {
      try {
        const c = Ow(n, u);
        return c.success ? { value: c.data } : { issues: c.error?.issues };
      } catch {
        return Mw(n, u).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), hh = /* @__PURE__ */ de("$ZodString", (n, r) => {
  At.init(n, r), n._zod.pattern = [...n?._zod.bag?.patterns ?? []].pop() ?? oE(n._zod.bag), n._zod.parse = (s, a) => {
    if (r.coerce)
      try {
        s.value = String(s.value);
      } catch {
      }
    return typeof s.value == "string" || s.issues.push({
      expected: "string",
      code: "invalid_type",
      input: s.value,
      inst: n
    }), s;
  };
}), ot = /* @__PURE__ */ de("$ZodStringFormat", (n, r) => {
  Dl.init(n, r), hh.init(n, r);
}), wE = /* @__PURE__ */ de("$ZodGUID", (n, r) => {
  r.pattern ?? (r.pattern = Yw), ot.init(n, r);
}), EE = /* @__PURE__ */ de("$ZodUUID", (n, r) => {
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
    r.pattern ?? (r.pattern = Iy(a));
  } else
    r.pattern ?? (r.pattern = Iy());
  ot.init(n, r);
}), CE = /* @__PURE__ */ de("$ZodEmail", (n, r) => {
  r.pattern ?? (r.pattern = Xw), ot.init(n, r);
}), kE = /* @__PURE__ */ de("$ZodURL", (n, r) => {
  ot.init(n, r), n._zod.check = (s) => {
    try {
      const a = s.value.trim(), u = new URL(a);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(u.hostname) || s.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: nE.source,
        input: s.value,
        inst: n,
        continue: !r.abort
      })), r.protocol && (r.protocol.lastIndex = 0, r.protocol.test(u.protocol.endsWith(":") ? u.protocol.slice(0, -1) : u.protocol) || s.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: r.protocol.source,
        input: s.value,
        inst: n,
        continue: !r.abort
      })), r.normalize ? s.value = u.href : s.value = a;
      return;
    } catch {
      s.issues.push({
        code: "invalid_format",
        format: "url",
        input: s.value,
        inst: n,
        continue: !r.abort
      });
    }
  };
}), AE = /* @__PURE__ */ de("$ZodEmoji", (n, r) => {
  r.pattern ?? (r.pattern = Qw()), ot.init(n, r);
}), xE = /* @__PURE__ */ de("$ZodNanoID", (n, r) => {
  r.pattern ?? (r.pattern = Vw), ot.init(n, r);
}), TE = /* @__PURE__ */ de("$ZodCUID", (n, r) => {
  r.pattern ?? (r.pattern = Uw), ot.init(n, r);
}), NE = /* @__PURE__ */ de("$ZodCUID2", (n, r) => {
  r.pattern ?? (r.pattern = Hw), ot.init(n, r);
}), OE = /* @__PURE__ */ de("$ZodULID", (n, r) => {
  r.pattern ?? (r.pattern = qw), ot.init(n, r);
}), ME = /* @__PURE__ */ de("$ZodXID", (n, r) => {
  r.pattern ?? (r.pattern = Zw), ot.init(n, r);
}), jE = /* @__PURE__ */ de("$ZodKSUID", (n, r) => {
  r.pattern ?? (r.pattern = Gw), ot.init(n, r);
}), RE = /* @__PURE__ */ de("$ZodISODateTime", (n, r) => {
  r.pattern ?? (r.pattern = sE(r)), ot.init(n, r);
}), DE = /* @__PURE__ */ de("$ZodISODate", (n, r) => {
  r.pattern ?? (r.pattern = aE), ot.init(n, r);
}), zE = /* @__PURE__ */ de("$ZodISOTime", (n, r) => {
  r.pattern ?? (r.pattern = iE(r)), ot.init(n, r);
}), LE = /* @__PURE__ */ de("$ZodISODuration", (n, r) => {
  r.pattern ?? (r.pattern = $w), ot.init(n, r);
}), PE = /* @__PURE__ */ de("$ZodIPv4", (n, r) => {
  r.pattern ?? (r.pattern = Kw), ot.init(n, r), n._zod.onattach.push((s) => {
    const a = s._zod.bag;
    a.format = "ipv4";
  });
}), IE = /* @__PURE__ */ de("$ZodIPv6", (n, r) => {
  r.pattern ?? (r.pattern = Jw), ot.init(n, r), n._zod.onattach.push((s) => {
    const a = s._zod.bag;
    a.format = "ipv6";
  }), n._zod.check = (s) => {
    try {
      new URL(`http://[${s.value}]`);
    } catch {
      s.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: s.value,
        inst: n,
        continue: !r.abort
      });
    }
  };
}), BE = /* @__PURE__ */ de("$ZodCIDRv4", (n, r) => {
  r.pattern ?? (r.pattern = Ww), ot.init(n, r);
}), UE = /* @__PURE__ */ de("$ZodCIDRv6", (n, r) => {
  r.pattern ?? (r.pattern = eE), ot.init(n, r), n._zod.check = (s) => {
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
        inst: n,
        continue: !r.abort
      });
    }
  };
});
function f_(n) {
  if (n === "")
    return !0;
  if (n.length % 4 !== 0)
    return !1;
  try {
    return atob(n), !0;
  } catch {
    return !1;
  }
}
const HE = /* @__PURE__ */ de("$ZodBase64", (n, r) => {
  r.pattern ?? (r.pattern = tE), ot.init(n, r), n._zod.onattach.push((s) => {
    s._zod.bag.contentEncoding = "base64";
  }), n._zod.check = (s) => {
    f_(s.value) || s.issues.push({
      code: "invalid_format",
      format: "base64",
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
});
function qE(n) {
  if (!l_.test(n))
    return !1;
  const r = n.replace(/[-_]/g, (a) => a === "-" ? "+" : "/"), s = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return f_(s);
}
const ZE = /* @__PURE__ */ de("$ZodBase64URL", (n, r) => {
  r.pattern ?? (r.pattern = l_), ot.init(n, r), n._zod.onattach.push((s) => {
    s._zod.bag.contentEncoding = "base64url";
  }), n._zod.check = (s) => {
    qE(s.value) || s.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
}), GE = /* @__PURE__ */ de("$ZodE164", (n, r) => {
  r.pattern ?? (r.pattern = rE), ot.init(n, r);
});
function VE(n, r = null) {
  try {
    const s = n.split(".");
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
const $E = /* @__PURE__ */ de("$ZodJWT", (n, r) => {
  ot.init(n, r), n._zod.check = (s) => {
    VE(s.value, r.alg) || s.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
}), YE = /* @__PURE__ */ de("$ZodUnknown", (n, r) => {
  At.init(n, r), n._zod.parse = (s) => s;
}), XE = /* @__PURE__ */ de("$ZodNever", (n, r) => {
  At.init(n, r), n._zod.parse = (s, a) => (s.issues.push({
    expected: "never",
    code: "invalid_type",
    input: s.value,
    inst: n
  }), s);
});
function By(n, r, s) {
  n.issues.length && r.issues.push(...i_(s, n.issues)), r.value[s] = n.value;
}
const FE = /* @__PURE__ */ de("$ZodArray", (n, r) => {
  At.init(n, r), n._zod.parse = (s, a) => {
    const u = s.value;
    if (!Array.isArray(u))
      return s.issues.push({
        expected: "array",
        code: "invalid_type",
        input: u,
        inst: n
      }), s;
    s.value = Array(u.length);
    const c = [];
    for (let f = 0; f < u.length; f++) {
      const m = u[f], p = r.element._zod.run({
        value: m,
        issues: []
      }, a);
      p instanceof Promise ? c.push(p.then((b) => By(b, s, f))) : By(p, s, f);
    }
    return c.length ? Promise.all(c).then(() => s) : s;
  };
});
function Tl(n, r, s, a) {
  n.issues.length && r.issues.push(...i_(s, n.issues)), n.value === void 0 ? s in a && (r.value[s] = void 0) : r.value[s] = n.value;
}
function h_(n) {
  const r = Object.keys(n.shape);
  for (const a of r)
    if (!n.shape?.[a]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${a}": expected a Zod schema`);
  const s = bw(n.shape);
  return {
    ...n,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(s)
  };
}
function p_(n, r, s, a, u, c) {
  const f = [], m = u.keySet, p = u.catchall._zod, b = p.def.type;
  for (const g of Object.keys(r)) {
    if (m.has(g))
      continue;
    if (b === "never") {
      f.push(g);
      continue;
    }
    const E = p.run({ value: r[g], issues: [] }, a);
    E instanceof Promise ? n.push(E.then((v) => Tl(v, s, g, r))) : Tl(E, s, g, r);
  }
  return f.length && s.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: r,
    inst: c
  }), n.length ? Promise.all(n).then(() => s) : s;
}
const QE = /* @__PURE__ */ de("$ZodObject", (n, r) => {
  if (At.init(n, r), !Object.getOwnPropertyDescriptor(r, "shape")?.get) {
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
  const a = oh(() => h_(r));
  rt(n._zod, "propValues", () => {
    const m = r.shape, p = {};
    for (const b in m) {
      const g = m[b]._zod;
      if (g.values) {
        p[b] ?? (p[b] = /* @__PURE__ */ new Set());
        for (const E of g.values)
          p[b].add(E);
      }
    }
    return p;
  });
  const u = xl, c = r.catchall;
  let f;
  n._zod.parse = (m, p) => {
    f ?? (f = a.value);
    const b = m.value;
    if (!u(b))
      return m.issues.push({
        expected: "object",
        code: "invalid_type",
        input: b,
        inst: n
      }), m;
    m.value = {};
    const g = [], E = f.shape;
    for (const v of f.keys) {
      const h = E[v]._zod.run({ value: b[v], issues: [] }, p);
      h instanceof Promise ? g.push(h.then((C) => Tl(C, m, v, b))) : Tl(h, m, v, b);
    }
    return c ? p_(g, b, m, p, a.value, n) : g.length ? Promise.all(g).then(() => m) : m;
  };
}), KE = /* @__PURE__ */ de("$ZodObjectJIT", (n, r) => {
  QE.init(n, r);
  const s = n._zod.parse, a = oh(() => h_(r)), u = (v) => {
    const S = new bE(["shape", "payload", "ctx"]), h = a.value, C = (L) => {
      const l = Py(L);
      return `shape[${l}]._zod.run({ value: input[${l}], issues: [] }, ctx)`;
    };
    S.write("const input = payload.value;");
    const x = /* @__PURE__ */ Object.create(null);
    let M = 0;
    for (const L of h.keys)
      x[L] = `key_${M++}`;
    S.write("const newResult = {};");
    for (const L of h.keys) {
      const l = x[L], y = Py(L);
      S.write(`const ${l} = ${C(L)};`), S.write(`
        if (${l}.issues.length) {
          payload.issues = payload.issues.concat(${l}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${y}, ...iss.path] : [${y}]
          })));
        }
        
        
        if (${l}.value === undefined) {
          if (${y} in input) {
            newResult[${y}] = undefined;
          }
        } else {
          newResult[${y}] = ${l}.value;
        }
        
      `);
    }
    S.write("payload.value = newResult;"), S.write("return payload;");
    const T = S.compile();
    return (L, l) => T(v, L, l);
  };
  let c;
  const f = xl, m = !t_.jitless, b = m && yw.value, g = r.catchall;
  let E;
  n._zod.parse = (v, S) => {
    E ?? (E = a.value);
    const h = v.value;
    return f(h) ? m && b && S?.async === !1 && S.jitless !== !0 ? (c || (c = u(r.shape)), v = c(v, S), g ? p_([], h, v, S, E, n) : v) : s(v, S) : (v.issues.push({
      expected: "object",
      code: "invalid_type",
      input: h,
      inst: n
    }), v);
  };
});
function Uy(n, r, s, a) {
  for (const c of n)
    if (c.issues.length === 0)
      return r.value = c.value, r;
  const u = n.filter((c) => !zi(c));
  return u.length === 1 ? (r.value = u[0].value, u[0]) : (r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: s,
    errors: n.map((c) => c.issues.map((f) => Pa(f, a, La())))
  }), r);
}
const JE = /* @__PURE__ */ de("$ZodUnion", (n, r) => {
  At.init(n, r), rt(n._zod, "optin", () => r.options.some((u) => u._zod.optin === "optional") ? "optional" : void 0), rt(n._zod, "optout", () => r.options.some((u) => u._zod.optout === "optional") ? "optional" : void 0), rt(n._zod, "values", () => {
    if (r.options.every((u) => u._zod.values))
      return new Set(r.options.flatMap((u) => Array.from(u._zod.values)));
  }), rt(n._zod, "pattern", () => {
    if (r.options.every((u) => u._zod.pattern)) {
      const u = r.options.map((c) => c._zod.pattern);
      return new RegExp(`^(${u.map((c) => lh(c.source)).join("|")})$`);
    }
  });
  const s = r.options.length === 1, a = r.options[0]._zod.run;
  n._zod.parse = (u, c) => {
    if (s)
      return a(u, c);
    let f = !1;
    const m = [];
    for (const p of r.options) {
      const b = p._zod.run({
        value: u.value,
        issues: []
      }, c);
      if (b instanceof Promise)
        m.push(b), f = !0;
      else {
        if (b.issues.length === 0)
          return b;
        m.push(b);
      }
    }
    return f ? Promise.all(m).then((p) => Uy(p, u, n, c)) : Uy(m, u, n, c);
  };
}), WE = /* @__PURE__ */ de("$ZodIntersection", (n, r) => {
  At.init(n, r), n._zod.parse = (s, a) => {
    const u = s.value, c = r.left._zod.run({ value: u, issues: [] }, a), f = r.right._zod.run({ value: u, issues: [] }, a);
    return c instanceof Promise || f instanceof Promise ? Promise.all([c, f]).then(([p, b]) => Hy(s, p, b)) : Hy(s, c, f);
  };
});
function Hf(n, r) {
  if (n === r)
    return { valid: !0, data: n };
  if (n instanceof Date && r instanceof Date && +n == +r)
    return { valid: !0, data: n };
  if (io(n) && io(r)) {
    const s = Object.keys(r), a = Object.keys(n).filter((c) => s.indexOf(c) !== -1), u = { ...n, ...r };
    for (const c of a) {
      const f = Hf(n[c], r[c]);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [c, ...f.mergeErrorPath]
        };
      u[c] = f.data;
    }
    return { valid: !0, data: u };
  }
  if (Array.isArray(n) && Array.isArray(r)) {
    if (n.length !== r.length)
      return { valid: !1, mergeErrorPath: [] };
    const s = [];
    for (let a = 0; a < n.length; a++) {
      const u = n[a], c = r[a], f = Hf(u, c);
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
function Hy(n, r, s) {
  if (r.issues.length && n.issues.push(...r.issues), s.issues.length && n.issues.push(...s.issues), zi(n))
    return n;
  const a = Hf(r.value, s.value);
  if (!a.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`);
  return n.value = a.data, n;
}
const eC = /* @__PURE__ */ de("$ZodEnum", (n, r) => {
  At.init(n, r);
  const s = n_(r.entries), a = new Set(s);
  n._zod.values = a, n._zod.pattern = new RegExp(`^(${s.filter((u) => _w.has(typeof u)).map((u) => typeof u == "string" ? Ml(u) : u.toString()).join("|")})$`), n._zod.parse = (u, c) => {
    const f = u.value;
    return a.has(f) || u.issues.push({
      code: "invalid_value",
      values: s,
      input: f,
      inst: n
    }), u;
  };
}), tC = /* @__PURE__ */ de("$ZodTransform", (n, r) => {
  At.init(n, r), n._zod.parse = (s, a) => {
    if (a.direction === "backward")
      throw new e_(n.constructor.name);
    const u = r.transform(s.value, s);
    if (a.async)
      return (u instanceof Promise ? u : Promise.resolve(u)).then((f) => (s.value = f, s));
    if (u instanceof Promise)
      throw new Pi();
    return s.value = u, s;
  };
});
function qy(n, r) {
  return n.issues.length && r === void 0 ? { issues: [], value: void 0 } : n;
}
const nC = /* @__PURE__ */ de("$ZodOptional", (n, r) => {
  At.init(n, r), n._zod.optin = "optional", n._zod.optout = "optional", rt(n._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), rt(n._zod, "pattern", () => {
    const s = r.innerType._zod.pattern;
    return s ? new RegExp(`^(${lh(s.source)})?$`) : void 0;
  }), n._zod.parse = (s, a) => {
    if (r.innerType._zod.optin === "optional") {
      const u = r.innerType._zod.run(s, a);
      return u instanceof Promise ? u.then((c) => qy(c, s.value)) : qy(u, s.value);
    }
    return s.value === void 0 ? s : r.innerType._zod.run(s, a);
  };
}), rC = /* @__PURE__ */ de("$ZodNullable", (n, r) => {
  At.init(n, r), rt(n._zod, "optin", () => r.innerType._zod.optin), rt(n._zod, "optout", () => r.innerType._zod.optout), rt(n._zod, "pattern", () => {
    const s = r.innerType._zod.pattern;
    return s ? new RegExp(`^(${lh(s.source)}|null)$`) : void 0;
  }), rt(n._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), n._zod.parse = (s, a) => s.value === null ? s : r.innerType._zod.run(s, a);
}), aC = /* @__PURE__ */ de("$ZodDefault", (n, r) => {
  At.init(n, r), n._zod.optin = "optional", rt(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (s, a) => {
    if (a.direction === "backward")
      return r.innerType._zod.run(s, a);
    if (s.value === void 0)
      return s.value = r.defaultValue, s;
    const u = r.innerType._zod.run(s, a);
    return u instanceof Promise ? u.then((c) => Zy(c, r)) : Zy(u, r);
  };
});
function Zy(n, r) {
  return n.value === void 0 && (n.value = r.defaultValue), n;
}
const iC = /* @__PURE__ */ de("$ZodPrefault", (n, r) => {
  At.init(n, r), n._zod.optin = "optional", rt(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (s, a) => (a.direction === "backward" || s.value === void 0 && (s.value = r.defaultValue), r.innerType._zod.run(s, a));
}), sC = /* @__PURE__ */ de("$ZodNonOptional", (n, r) => {
  At.init(n, r), rt(n._zod, "values", () => {
    const s = r.innerType._zod.values;
    return s ? new Set([...s].filter((a) => a !== void 0)) : void 0;
  }), n._zod.parse = (s, a) => {
    const u = r.innerType._zod.run(s, a);
    return u instanceof Promise ? u.then((c) => Gy(c, n)) : Gy(u, n);
  };
});
function Gy(n, r) {
  return !n.issues.length && n.value === void 0 && n.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: n.value,
    inst: r
  }), n;
}
const oC = /* @__PURE__ */ de("$ZodCatch", (n, r) => {
  At.init(n, r), rt(n._zod, "optin", () => r.innerType._zod.optin), rt(n._zod, "optout", () => r.innerType._zod.optout), rt(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (s, a) => {
    if (a.direction === "backward")
      return r.innerType._zod.run(s, a);
    const u = r.innerType._zod.run(s, a);
    return u instanceof Promise ? u.then((c) => (s.value = c.value, c.issues.length && (s.value = r.catchValue({
      ...s,
      error: {
        issues: c.issues.map((f) => Pa(f, a, La()))
      },
      input: s.value
    }), s.issues = []), s)) : (s.value = u.value, u.issues.length && (s.value = r.catchValue({
      ...s,
      error: {
        issues: u.issues.map((c) => Pa(c, a, La()))
      },
      input: s.value
    }), s.issues = []), s);
  };
}), uC = /* @__PURE__ */ de("$ZodPipe", (n, r) => {
  At.init(n, r), rt(n._zod, "values", () => r.in._zod.values), rt(n._zod, "optin", () => r.in._zod.optin), rt(n._zod, "optout", () => r.out._zod.optout), rt(n._zod, "propValues", () => r.in._zod.propValues), n._zod.parse = (s, a) => {
    if (a.direction === "backward") {
      const c = r.out._zod.run(s, a);
      return c instanceof Promise ? c.then((f) => il(f, r.in, a)) : il(c, r.in, a);
    }
    const u = r.in._zod.run(s, a);
    return u instanceof Promise ? u.then((c) => il(c, r.out, a)) : il(u, r.out, a);
  };
});
function il(n, r, s) {
  return n.issues.length ? (n.aborted = !0, n) : r._zod.run({ value: n.value, issues: n.issues }, s);
}
const lC = /* @__PURE__ */ de("$ZodReadonly", (n, r) => {
  At.init(n, r), rt(n._zod, "propValues", () => r.innerType._zod.propValues), rt(n._zod, "values", () => r.innerType._zod.values), rt(n._zod, "optin", () => r.innerType._zod.optin), rt(n._zod, "optout", () => r.innerType._zod.optout), n._zod.parse = (s, a) => {
    if (a.direction === "backward")
      return r.innerType._zod.run(s, a);
    const u = r.innerType._zod.run(s, a);
    return u instanceof Promise ? u.then(Vy) : Vy(u);
  };
});
function Vy(n) {
  return n.value = Object.freeze(n.value), n;
}
const cC = /* @__PURE__ */ de("$ZodCustom", (n, r) => {
  rr.init(n, r), At.init(n, r), n._zod.parse = (s, a) => s, n._zod.check = (s) => {
    const a = s.value, u = r.fn(a);
    if (u instanceof Promise)
      return u.then((c) => $y(c, s, a, n));
    $y(u, s, a, n);
  };
});
function $y(n, r, s, a) {
  if (!n) {
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
    a._zod.def.params && (u.params = a._zod.def.params), r.issues.push(so(u));
  }
}
class m_ {
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
function dC() {
  return new m_();
}
const Js = /* @__PURE__ */ dC();
function fC(n, r) {
  return new n({
    type: "string",
    ...Oe(r)
  });
}
function hC(n, r) {
  return new n({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function Yy(n, r) {
  return new n({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function pC(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function mC(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...Oe(r)
  });
}
function gC(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...Oe(r)
  });
}
function vC(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...Oe(r)
  });
}
function yC(n, r) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function _C(n, r) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function bC(n, r) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function SC(n, r) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function wC(n, r) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function EC(n, r) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function CC(n, r) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function kC(n, r) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function AC(n, r) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function xC(n, r) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function TC(n, r) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function NC(n, r) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function OC(n, r) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function MC(n, r) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function jC(n, r) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function RC(n, r) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function DC(n, r) {
  return new n({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...Oe(r)
  });
}
function zC(n, r) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...Oe(r)
  });
}
function LC(n, r) {
  return new n({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...Oe(r)
  });
}
function PC(n, r) {
  return new n({
    type: "string",
    format: "duration",
    check: "string_format",
    ...Oe(r)
  });
}
function IC(n) {
  return new n({
    type: "unknown"
  });
}
function BC(n, r) {
  return new n({
    type: "never",
    ...Oe(r)
  });
}
function g_(n, r) {
  return new cE({
    check: "max_length",
    ...Oe(r),
    maximum: n
  });
}
function Nl(n, r) {
  return new dE({
    check: "min_length",
    ...Oe(r),
    minimum: n
  });
}
function v_(n, r) {
  return new fE({
    check: "length_equals",
    ...Oe(r),
    length: n
  });
}
function UC(n, r) {
  return new hE({
    check: "string_format",
    format: "regex",
    ...Oe(r),
    pattern: n
  });
}
function HC(n) {
  return new pE({
    check: "string_format",
    format: "lowercase",
    ...Oe(n)
  });
}
function qC(n) {
  return new mE({
    check: "string_format",
    format: "uppercase",
    ...Oe(n)
  });
}
function ZC(n, r) {
  return new gE({
    check: "string_format",
    format: "includes",
    ...Oe(r),
    includes: n
  });
}
function GC(n, r) {
  return new vE({
    check: "string_format",
    format: "starts_with",
    ...Oe(r),
    prefix: n
  });
}
function VC(n, r) {
  return new yE({
    check: "string_format",
    format: "ends_with",
    ...Oe(r),
    suffix: n
  });
}
function co(n) {
  return new _E({
    check: "overwrite",
    tx: n
  });
}
function $C(n) {
  return co((r) => r.normalize(n));
}
function YC() {
  return co((n) => n.trim());
}
function XC() {
  return co((n) => n.toLowerCase());
}
function FC() {
  return co((n) => n.toUpperCase());
}
function QC(n, r, s) {
  return new n({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ...Oe(s)
  });
}
function KC(n, r, s) {
  return new n({
    type: "custom",
    check: "custom",
    fn: r,
    ...Oe(s)
  });
}
function JC(n) {
  const r = WC((s) => (s.addIssue = (a) => {
    if (typeof a == "string")
      s.issues.push(so(a, s.value, r._zod.def));
    else {
      const u = a;
      u.fatal && (u.continue = !1), u.code ?? (u.code = "custom"), u.input ?? (u.input = s.value), u.inst ?? (u.inst = r), u.continue ?? (u.continue = !r._zod.def.abort), s.issues.push(so(u));
    }
  }, n(s.value, s)));
  return r;
}
function WC(n, r) {
  const s = new rr({
    check: "custom",
    ...Oe(r)
  });
  return s._zod.check = n, s;
}
class Xy {
  constructor(r) {
    this.counter = 0, this.metadataRegistry = r?.metadata ?? Js, this.target = r?.target ?? "draft-2020-12", this.unrepresentable = r?.unrepresentable ?? "throw", this.override = r?.override ?? (() => {
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
      }, v = r._zod.parent;
      if (v)
        m.ref = v, this.process(v, E), this.seen.get(v).isParent = !0;
      else {
        const S = m.schema;
        switch (u.type) {
          case "string": {
            const h = S;
            h.type = "string";
            const { minimum: C, maximum: x, format: M, patterns: T, contentEncoding: L } = r._zod.bag;
            if (typeof C == "number" && (h.minLength = C), typeof x == "number" && (h.maxLength = x), M && (h.format = c[M] ?? M, h.format === "" && delete h.format), L && (h.contentEncoding = L), T && T.size > 0) {
              const l = [...T];
              l.length === 1 ? h.pattern = l[0].source : l.length > 1 && (m.schema.allOf = [
                ...l.map((y) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: y.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const h = S, { minimum: C, maximum: x, format: M, multipleOf: T, exclusiveMaximum: L, exclusiveMinimum: l } = r._zod.bag;
            typeof M == "string" && M.includes("int") ? h.type = "integer" : h.type = "number", typeof l == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.minimum = l, h.exclusiveMinimum = !0) : h.exclusiveMinimum = l), typeof C == "number" && (h.minimum = C, typeof l == "number" && this.target !== "draft-4" && (l >= C ? delete h.minimum : delete h.exclusiveMinimum)), typeof L == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.maximum = L, h.exclusiveMaximum = !0) : h.exclusiveMaximum = L), typeof x == "number" && (h.maximum = x, typeof L == "number" && this.target !== "draft-4" && (L <= x ? delete h.maximum : delete h.exclusiveMaximum)), typeof T == "number" && (h.multipleOf = T);
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
            const x = new Set(Object.keys(C)), M = new Set([...x].filter((T) => {
              const L = u.shape[T]._zod;
              return this.io === "input" ? L.optin === void 0 : L.optout === void 0;
            }));
            M.size > 0 && (h.required = Array.from(M)), u.catchall?._zod.def.type === "never" ? h.additionalProperties = !1 : u.catchall ? u.catchall && (h.additionalProperties = this.process(u.catchall, {
              ...E,
              path: [...E.path, "additionalProperties"]
            })) : this.io === "output" && (h.additionalProperties = !1);
            break;
          }
          case "union": {
            const h = S, C = u.options.map((x, M) => this.process(x, {
              ...E,
              path: [...E.path, "anyOf", M]
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
            }), M = (L) => "allOf" in L && Object.keys(L).length === 1, T = [
              ...M(C) ? C.allOf : [C],
              ...M(x) ? x.allOf : [x]
            ];
            h.allOf = T;
            break;
          }
          case "tuple": {
            const h = S;
            h.type = "array";
            const C = this.target === "draft-2020-12" ? "prefixItems" : "items", x = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", M = u.items.map((y, w) => this.process(y, {
              ...E,
              path: [...E.path, C, w]
            })), T = u.rest ? this.process(u.rest, {
              ...E,
              path: [...E.path, x, ...this.target === "openapi-3.0" ? [u.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (h.prefixItems = M, T && (h.items = T)) : this.target === "openapi-3.0" ? (h.items = {
              anyOf: M
            }, T && h.items.anyOf.push(T), h.minItems = M.length, T || (h.maxItems = M.length)) : (h.items = M, T && (h.additionalItems = T));
            const { minimum: L, maximum: l } = r._zod.bag;
            typeof L == "number" && (h.minItems = L), typeof l == "number" && (h.maxItems = l);
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
            const h = S, C = n_(u.entries);
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
            }, { minimum: x, maximum: M, mime: T } = r._zod.bag;
            x !== void 0 && (C.minLength = x), M !== void 0 && (C.maxLength = M), T ? T.length === 1 ? (C.contentMediaType = T[0], Object.assign(h, C)) : h.anyOf = T.map((L) => ({ ...C, contentMediaType: L })) : Object.assign(h, C);
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
    const b = this.metadataRegistry.get(r);
    return b && Object.assign(m.schema, b), this.io === "input" && kt(r) && (delete m.schema.examples, delete m.schema.default), this.io === "input" && m.schema._prefault && ((a = m.schema).default ?? (a.default = m.schema._prefault)), delete m.schema._prefault, this.seen.get(r).schema;
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
        const M = g[1].defId ?? g[1].schema.id ?? `schema${this.counter++}`;
        return g[1].defId = M, { defId: M, ref: `${x("__shared")}#/${E}/${M}` };
      }
      if (g[1] === u)
        return { ref: "#" };
      const S = `#/${E}/`, h = g[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: h, ref: S + h };
    }, f = (g) => {
      if (g[1].schema.$ref)
        return;
      const E = g[1], { ref: v, defId: S } = c(g);
      E.def = { ...E.schema }, S && (E.defId = S);
      const h = E.schema;
      for (const C in h)
        delete h[C];
      h.$ref = v;
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
      const v = this.seen.get(g), S = v.def ?? v.schema, h = { ...S };
      if (v.ref === null)
        return;
      const C = v.ref;
      if (v.ref = null, C) {
        m(C, E);
        const x = this.seen.get(C).schema;
        x.$ref && (E.target === "draft-7" || E.target === "draft-4" || E.target === "openapi-3.0") ? (S.allOf = S.allOf ?? [], S.allOf.push(x)) : (Object.assign(S, x), Object.assign(S, h));
      }
      v.isParent || this.override({
        zodSchema: g,
        jsonSchema: S,
        path: v.path ?? []
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
    const b = a.external?.defs ?? {};
    for (const g of this.seen.entries()) {
      const E = g[1];
      E.def && E.defId && (b[E.defId] = E.def);
    }
    a.external || Object.keys(b).length > 0 && (this.target === "draft-2020-12" ? p.$defs = b : p.definitions = b);
    try {
      return JSON.parse(JSON.stringify(p));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function e4(n, r) {
  if (n instanceof m_) {
    const a = new Xy(r), u = {};
    for (const m of n._idmap.entries()) {
      const [p, b] = m;
      a.process(b);
    }
    const c = {}, f = {
      registry: n,
      uri: r?.uri,
      defs: u
    };
    for (const m of n._idmap.entries()) {
      const [p, b] = m;
      c[p] = a.emit(b, {
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
  const s = new Xy(r);
  return s.process(n), s.emit(n, r);
}
function kt(n, r) {
  const s = r ?? { seen: /* @__PURE__ */ new Set() };
  if (s.seen.has(n))
    return !1;
  s.seen.add(n);
  const u = n._zod.def;
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
const t4 = /* @__PURE__ */ de("ZodISODateTime", (n, r) => {
  RE.init(n, r), ct.init(n, r);
});
function n4(n) {
  return DC(t4, n);
}
const r4 = /* @__PURE__ */ de("ZodISODate", (n, r) => {
  DE.init(n, r), ct.init(n, r);
});
function a4(n) {
  return zC(r4, n);
}
const i4 = /* @__PURE__ */ de("ZodISOTime", (n, r) => {
  zE.init(n, r), ct.init(n, r);
});
function s4(n) {
  return LC(i4, n);
}
const o4 = /* @__PURE__ */ de("ZodISODuration", (n, r) => {
  LE.init(n, r), ct.init(n, r);
});
function u4(n) {
  return PC(o4, n);
}
const l4 = (n, r) => {
  o_.init(n, r), n.name = "ZodError", Object.defineProperties(n, {
    format: {
      value: (s) => Nw(n, s)
      // enumerable: false,
    },
    flatten: {
      value: (s) => Tw(n, s)
      // enumerable: false,
    },
    addIssue: {
      value: (s) => {
        n.issues.push(s), n.message = JSON.stringify(n.issues, Uf, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (s) => {
        n.issues.push(...s), n.message = JSON.stringify(n.issues, Uf, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return n.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, jn = de("ZodError", l4, {
  Parent: Error
}), c4 = /* @__PURE__ */ dh(jn), d4 = /* @__PURE__ */ fh(jn), f4 = /* @__PURE__ */ jl(jn), h4 = /* @__PURE__ */ Rl(jn), p4 = /* @__PURE__ */ jw(jn), m4 = /* @__PURE__ */ Rw(jn), g4 = /* @__PURE__ */ Dw(jn), v4 = /* @__PURE__ */ zw(jn), y4 = /* @__PURE__ */ Lw(jn), _4 = /* @__PURE__ */ Pw(jn), b4 = /* @__PURE__ */ Iw(jn), S4 = /* @__PURE__ */ Bw(jn), jt = /* @__PURE__ */ de("ZodType", (n, r) => (At.init(n, r), n.def = r, n.type = r.type, Object.defineProperty(n, "_def", { value: r }), n.check = (...s) => n.clone(Ba(r, {
  checks: [
    ...r.checks ?? [],
    ...s.map((a) => typeof a == "function" ? { _zod: { check: a, def: { check: "custom" }, onattach: [] } } : a)
  ]
})), n.clone = (s, a) => ra(n, s, a), n.brand = () => n, n.register = ((s, a) => (s.add(n, a), n)), n.parse = (s, a) => c4(n, s, a, { callee: n.parse }), n.safeParse = (s, a) => f4(n, s, a), n.parseAsync = async (s, a) => d4(n, s, a, { callee: n.parseAsync }), n.safeParseAsync = async (s, a) => h4(n, s, a), n.spa = n.safeParseAsync, n.encode = (s, a) => p4(n, s, a), n.decode = (s, a) => m4(n, s, a), n.encodeAsync = async (s, a) => g4(n, s, a), n.decodeAsync = async (s, a) => v4(n, s, a), n.safeEncode = (s, a) => y4(n, s, a), n.safeDecode = (s, a) => _4(n, s, a), n.safeEncodeAsync = async (s, a) => b4(n, s, a), n.safeDecodeAsync = async (s, a) => S4(n, s, a), n.refine = (s, a) => n.check(ck(s, a)), n.superRefine = (s) => n.check(dk(s)), n.overwrite = (s) => n.check(co(s)), n.optional = () => Ky(n), n.nullable = () => Jy(n), n.nullish = () => Ky(Jy(n)), n.nonoptional = (s) => rk(n, s), n.array = () => za(n), n.or = (s) => $4([n, s]), n.and = (s) => X4(n, s), n.transform = (s) => Wy(n, K4(s)), n.default = (s) => ek(n, s), n.prefault = (s) => nk(n, s), n.catch = (s) => ik(n, s), n.pipe = (s) => Wy(n, s), n.readonly = () => uk(n), n.describe = (s) => {
  const a = n.clone();
  return Js.add(a, { description: s }), a;
}, Object.defineProperty(n, "description", {
  get() {
    return Js.get(n)?.description;
  },
  configurable: !0
}), n.meta = (...s) => {
  if (s.length === 0)
    return Js.get(n);
  const a = n.clone();
  return Js.add(a, s[0]), a;
}, n.isOptional = () => n.safeParse(void 0).success, n.isNullable = () => n.safeParse(null).success, n)), y_ = /* @__PURE__ */ de("_ZodString", (n, r) => {
  hh.init(n, r), jt.init(n, r);
  const s = n._zod.bag;
  n.format = s.format ?? null, n.minLength = s.minimum ?? null, n.maxLength = s.maximum ?? null, n.regex = (...a) => n.check(UC(...a)), n.includes = (...a) => n.check(ZC(...a)), n.startsWith = (...a) => n.check(GC(...a)), n.endsWith = (...a) => n.check(VC(...a)), n.min = (...a) => n.check(Nl(...a)), n.max = (...a) => n.check(g_(...a)), n.length = (...a) => n.check(v_(...a)), n.nonempty = (...a) => n.check(Nl(1, ...a)), n.lowercase = (a) => n.check(HC(a)), n.uppercase = (a) => n.check(qC(a)), n.trim = () => n.check(YC()), n.normalize = (...a) => n.check($C(...a)), n.toLowerCase = () => n.check(XC()), n.toUpperCase = () => n.check(FC());
}), w4 = /* @__PURE__ */ de("ZodString", (n, r) => {
  hh.init(n, r), y_.init(n, r), n.email = (s) => n.check(hC(E4, s)), n.url = (s) => n.check(yC(C4, s)), n.jwt = (s) => n.check(RC(B4, s)), n.emoji = (s) => n.check(_C(k4, s)), n.guid = (s) => n.check(Yy(Fy, s)), n.uuid = (s) => n.check(pC(sl, s)), n.uuidv4 = (s) => n.check(mC(sl, s)), n.uuidv6 = (s) => n.check(gC(sl, s)), n.uuidv7 = (s) => n.check(vC(sl, s)), n.nanoid = (s) => n.check(bC(A4, s)), n.guid = (s) => n.check(Yy(Fy, s)), n.cuid = (s) => n.check(SC(x4, s)), n.cuid2 = (s) => n.check(wC(T4, s)), n.ulid = (s) => n.check(EC(N4, s)), n.base64 = (s) => n.check(OC(L4, s)), n.base64url = (s) => n.check(MC(P4, s)), n.xid = (s) => n.check(CC(O4, s)), n.ksuid = (s) => n.check(kC(M4, s)), n.ipv4 = (s) => n.check(AC(j4, s)), n.ipv6 = (s) => n.check(xC(R4, s)), n.cidrv4 = (s) => n.check(TC(D4, s)), n.cidrv6 = (s) => n.check(NC(z4, s)), n.e164 = (s) => n.check(jC(I4, s)), n.datetime = (s) => n.check(n4(s)), n.date = (s) => n.check(a4(s)), n.time = (s) => n.check(s4(s)), n.duration = (s) => n.check(u4(s));
});
function Zt(n) {
  return fC(w4, n);
}
const ct = /* @__PURE__ */ de("ZodStringFormat", (n, r) => {
  ot.init(n, r), y_.init(n, r);
}), E4 = /* @__PURE__ */ de("ZodEmail", (n, r) => {
  CE.init(n, r), ct.init(n, r);
}), Fy = /* @__PURE__ */ de("ZodGUID", (n, r) => {
  wE.init(n, r), ct.init(n, r);
}), sl = /* @__PURE__ */ de("ZodUUID", (n, r) => {
  EE.init(n, r), ct.init(n, r);
}), C4 = /* @__PURE__ */ de("ZodURL", (n, r) => {
  kE.init(n, r), ct.init(n, r);
}), k4 = /* @__PURE__ */ de("ZodEmoji", (n, r) => {
  AE.init(n, r), ct.init(n, r);
}), A4 = /* @__PURE__ */ de("ZodNanoID", (n, r) => {
  xE.init(n, r), ct.init(n, r);
}), x4 = /* @__PURE__ */ de("ZodCUID", (n, r) => {
  TE.init(n, r), ct.init(n, r);
}), T4 = /* @__PURE__ */ de("ZodCUID2", (n, r) => {
  NE.init(n, r), ct.init(n, r);
}), N4 = /* @__PURE__ */ de("ZodULID", (n, r) => {
  OE.init(n, r), ct.init(n, r);
}), O4 = /* @__PURE__ */ de("ZodXID", (n, r) => {
  ME.init(n, r), ct.init(n, r);
}), M4 = /* @__PURE__ */ de("ZodKSUID", (n, r) => {
  jE.init(n, r), ct.init(n, r);
}), j4 = /* @__PURE__ */ de("ZodIPv4", (n, r) => {
  PE.init(n, r), ct.init(n, r);
}), R4 = /* @__PURE__ */ de("ZodIPv6", (n, r) => {
  IE.init(n, r), ct.init(n, r);
}), D4 = /* @__PURE__ */ de("ZodCIDRv4", (n, r) => {
  BE.init(n, r), ct.init(n, r);
}), z4 = /* @__PURE__ */ de("ZodCIDRv6", (n, r) => {
  UE.init(n, r), ct.init(n, r);
}), L4 = /* @__PURE__ */ de("ZodBase64", (n, r) => {
  HE.init(n, r), ct.init(n, r);
}), P4 = /* @__PURE__ */ de("ZodBase64URL", (n, r) => {
  ZE.init(n, r), ct.init(n, r);
}), I4 = /* @__PURE__ */ de("ZodE164", (n, r) => {
  GE.init(n, r), ct.init(n, r);
}), B4 = /* @__PURE__ */ de("ZodJWT", (n, r) => {
  $E.init(n, r), ct.init(n, r);
}), U4 = /* @__PURE__ */ de("ZodUnknown", (n, r) => {
  YE.init(n, r), jt.init(n, r);
});
function Qy() {
  return IC(U4);
}
const H4 = /* @__PURE__ */ de("ZodNever", (n, r) => {
  XE.init(n, r), jt.init(n, r);
});
function q4(n) {
  return BC(H4, n);
}
const Z4 = /* @__PURE__ */ de("ZodArray", (n, r) => {
  FE.init(n, r), jt.init(n, r), n.element = r.element, n.min = (s, a) => n.check(Nl(s, a)), n.nonempty = (s) => n.check(Nl(1, s)), n.max = (s, a) => n.check(g_(s, a)), n.length = (s, a) => n.check(v_(s, a)), n.unwrap = () => n.element;
});
function za(n, r) {
  return QC(Z4, n, r);
}
const G4 = /* @__PURE__ */ de("ZodObject", (n, r) => {
  KE.init(n, r), jt.init(n, r), rt(n, "shape", () => r.shape), n.keyof = () => F4(Object.keys(n._zod.def.shape)), n.catchall = (s) => n.clone({ ...n._zod.def, catchall: s }), n.passthrough = () => n.clone({ ...n._zod.def, catchall: Qy() }), n.loose = () => n.clone({ ...n._zod.def, catchall: Qy() }), n.strict = () => n.clone({ ...n._zod.def, catchall: q4() }), n.strip = () => n.clone({ ...n._zod.def, catchall: void 0 }), n.extend = (s) => Ew(n, s), n.safeExtend = (s) => Cw(n, s), n.merge = (s) => kw(n, s), n.pick = (s) => Sw(n, s), n.omit = (s) => ww(n, s), n.partial = (...s) => Aw(__, n, s[0]), n.required = (...s) => xw(b_, n, s[0]);
});
function fo(n, r) {
  const s = {
    type: "object",
    shape: n ?? {},
    ...Oe(r)
  };
  return new G4(s);
}
const V4 = /* @__PURE__ */ de("ZodUnion", (n, r) => {
  JE.init(n, r), jt.init(n, r), n.options = r.options;
});
function $4(n, r) {
  return new V4({
    type: "union",
    options: n,
    ...Oe(r)
  });
}
const Y4 = /* @__PURE__ */ de("ZodIntersection", (n, r) => {
  WE.init(n, r), jt.init(n, r);
});
function X4(n, r) {
  return new Y4({
    type: "intersection",
    left: n,
    right: r
  });
}
const qf = /* @__PURE__ */ de("ZodEnum", (n, r) => {
  eC.init(n, r), jt.init(n, r), n.enum = r.entries, n.options = Object.values(r.entries);
  const s = new Set(Object.keys(r.entries));
  n.extract = (a, u) => {
    const c = {};
    for (const f of a)
      if (s.has(f))
        c[f] = r.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new qf({
      ...r,
      checks: [],
      ...Oe(u),
      entries: c
    });
  }, n.exclude = (a, u) => {
    const c = { ...r.entries };
    for (const f of a)
      if (s.has(f))
        delete c[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new qf({
      ...r,
      checks: [],
      ...Oe(u),
      entries: c
    });
  };
});
function F4(n, r) {
  const s = Array.isArray(n) ? Object.fromEntries(n.map((a) => [a, a])) : n;
  return new qf({
    type: "enum",
    entries: s,
    ...Oe(r)
  });
}
const Q4 = /* @__PURE__ */ de("ZodTransform", (n, r) => {
  tC.init(n, r), jt.init(n, r), n._zod.parse = (s, a) => {
    if (a.direction === "backward")
      throw new e_(n.constructor.name);
    s.addIssue = (c) => {
      if (typeof c == "string")
        s.issues.push(so(c, s.value, r));
      else {
        const f = c;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = s.value), f.inst ?? (f.inst = n), s.issues.push(so(f));
      }
    };
    const u = r.transform(s.value, s);
    return u instanceof Promise ? u.then((c) => (s.value = c, s)) : (s.value = u, s);
  };
});
function K4(n) {
  return new Q4({
    type: "transform",
    transform: n
  });
}
const __ = /* @__PURE__ */ de("ZodOptional", (n, r) => {
  nC.init(n, r), jt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function Ky(n) {
  return new __({
    type: "optional",
    innerType: n
  });
}
const J4 = /* @__PURE__ */ de("ZodNullable", (n, r) => {
  rC.init(n, r), jt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function Jy(n) {
  return new J4({
    type: "nullable",
    innerType: n
  });
}
const W4 = /* @__PURE__ */ de("ZodDefault", (n, r) => {
  aC.init(n, r), jt.init(n, r), n.unwrap = () => n._zod.def.innerType, n.removeDefault = n.unwrap;
});
function ek(n, r) {
  return new W4({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : a_(r);
    }
  });
}
const tk = /* @__PURE__ */ de("ZodPrefault", (n, r) => {
  iC.init(n, r), jt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function nk(n, r) {
  return new tk({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : a_(r);
    }
  });
}
const b_ = /* @__PURE__ */ de("ZodNonOptional", (n, r) => {
  sC.init(n, r), jt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function rk(n, r) {
  return new b_({
    type: "nonoptional",
    innerType: n,
    ...Oe(r)
  });
}
const ak = /* @__PURE__ */ de("ZodCatch", (n, r) => {
  oC.init(n, r), jt.init(n, r), n.unwrap = () => n._zod.def.innerType, n.removeCatch = n.unwrap;
});
function ik(n, r) {
  return new ak({
    type: "catch",
    innerType: n,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const sk = /* @__PURE__ */ de("ZodPipe", (n, r) => {
  uC.init(n, r), jt.init(n, r), n.in = r.in, n.out = r.out;
});
function Wy(n, r) {
  return new sk({
    type: "pipe",
    in: n,
    out: r
    // ...util.normalizeParams(params),
  });
}
const ok = /* @__PURE__ */ de("ZodReadonly", (n, r) => {
  lC.init(n, r), jt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function uk(n) {
  return new ok({
    type: "readonly",
    innerType: n
  });
}
const lk = /* @__PURE__ */ de("ZodCustom", (n, r) => {
  cC.init(n, r), jt.init(n, r);
});
function ck(n, r = {}) {
  return KC(lk, n, r);
}
function dk(n) {
  return JC(n);
}
const e0 = {
  ENTRY: "EntryRevision",
  GLOBAL: "GlobalRevision"
}, Zf = "placeholder-chatHistory", fk = fo({
  justification: Zt().describe("A brief, friendly explanation of the changes made."),
  name: Zt().describe("The entry's new name/comment."),
  triggers: za(Zt()).describe("The entry's new keywords/triggers."),
  content: Zt().describe("The entry's new content.")
}), hk = fo({
  worldName: Zt().describe("The name of the world where the new entry should be added."),
  name: Zt().describe("The new entry's name/comment."),
  triggers: za(Zt()).describe("The new entry's triggers."),
  content: Zt().describe("The new entry's content.")
}), pk = fo({
  worldName: Zt().describe("The name of the world containing the entry to change."),
  originalName: Zt().describe("The original name/comment of the entry to change, used for identification."),
  newName: Zt().optional().describe("The entry's new name/comment. If omitted, the name is not changed."),
  triggers: za(Zt()).optional().describe("The entry's new list of triggers."),
  content: Zt().optional().describe("The entry's new content.")
}), mk = fo({
  worldName: Zt().describe("The name of the world containing the entry to remove."),
  name: Zt().describe("The name/comment of the entry to remove.")
}), gk = fo({
  justification: Zt().describe("A brief, friendly explanation of all the operations performed."),
  add: za(hk).optional().describe("A list of new entries to add."),
  change: za(pk).optional().describe("A list of existing entries to change."),
  remove: za(mk).optional().describe("A list of existing entries to remove.")
});
function Sf(n) {
  return String(n).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function Gf(n, r = 0) {
  const s = "  ".repeat(r);
  if (Array.isArray(n))
    return n.map((a) => a !== null && typeof a == "object" ? `${s}<item>
${Gf(a, r + 1)}${s}</item>
` : `${s}<item>${Sf(a)}</item>
`).join("");
  if (n !== null && typeof n == "object") {
    let a = "";
    for (const u of Object.keys(n)) {
      const c = n[u];
      c !== null && typeof c == "object" ? a += `${s}<${u}>
${Gf(c, r + 1)}${s}</${u}>
` : a += `${s}<${u}>${Sf(c)}</${u}>
`;
    }
    return a;
  }
  return `${s}<value>${Sf(n)}</value>
`;
}
function vk(n, r) {
  const s = Ma(n);
  return r === "xml" ? `<root>
${Gf(s, 1)}</root>` : JSON.stringify(s, null, 2);
}
function yk(...n) {
  for (const r of n) if (r !== void 0) return r;
}
function _k(n) {
  return Array.isArray(n) ? n.find((r) => r !== "null") ?? n[0] : n;
}
function Ma(n) {
  if (!n || typeof n != "object") return null;
  const r = Array.isArray(n.examples) ? n.examples[0] : void 0, s = yk(n.example, r, n.default);
  if (s !== void 0) return s;
  if (n.const !== void 0) return n.const;
  if (Array.isArray(n.enum) && n.enum.length) return n.enum[0];
  const a = Array.isArray(n.anyOf) ? n.anyOf[0] : Array.isArray(n.oneOf) ? n.oneOf[0] : void 0;
  if (a) return Ma(a);
  switch (_k(n.type)) {
    case "object": {
      const c = {}, f = n.properties || {};
      for (const m of Object.keys(f))
        c[m] = Ma(f[m]);
      return n.additionalProperties && typeof n.additionalProperties == "object" && (c.additionalProperty = Ma(n.additionalProperties)), c;
    }
    case "array": {
      const c = n.items ?? {};
      return [Ma(c)];
    }
    case "string":
      return n.title || n.description || "string";
    case "integer":
    case "number":
      return 0;
    case "boolean":
      return !1;
    case "null":
      return null;
    default:
      return n.properties || n.additionalProperties ? Ma({ ...n, type: "object" }) : n.items ? Ma({ ...n, type: "array" }) : null;
  }
}
const bk = new z0({
  ignoreAttributes: !0,
  textNodeName: "#text",
  trimValues: !0,
  allowBooleanAttributes: !0
});
function Vf(n, r) {
  if (!(!r || !n || !r.properties))
    for (const s in r.properties) {
      if (!n.hasOwnProperty(s)) continue;
      const a = r.properties[s];
      let u = n[s];
      if (a.type === "array" && !Array.isArray(u) && (u === "" || u === null ? u = [] : u = [u], n[s] = u), a.type === "array" && a.items?.type === "object" && Array.isArray(u)) {
        const c = a.items.required || [], f = a.items.properties ? Object.keys(a.items.properties) : [], m = c.length > 0 ? c : f;
        if (m.length > 0) {
          const p = [];
          let b = !1;
          for (const g of u) {
            const E = (v) => typeof v != "object" || v === null ? !1 : m.some((S) => Object.prototype.hasOwnProperty.call(v, S));
            if (E(g))
              p.push(g);
            else {
              let v = !1;
              if (typeof g == "object" && g !== null)
                for (const S in g) {
                  const h = g[S];
                  if (E(h)) {
                    p.push(h), v = !0, b = !0;
                    break;
                  }
                  if (Array.isArray(h) && h.length > 0 && E(h[0])) {
                    p.push(...h), v = !0, b = !0;
                    break;
                  }
                }
              v || p.push(g);
            }
          }
          b && (u = p, n[s] = u);
        }
      }
      a.type === "object" && typeof u == "object" && u !== null ? Vf(u, a) : a.type === "array" && a.items?.type === "object" && Array.isArray(u) && u.forEach((c) => Vf(c, a.items)), a.type === "string" && typeof u != "string" ? n[s] = String(u) : a.type === "array" && a.items?.type === "string" && Array.isArray(u) && (n[s] = u.map(String));
    }
}
function Sk(n, r, s = {}) {
  const a = /```(?:\w+\n|\n)?([\s\S]*?)```/, u = n.match(a);
  let c = u ? u[1].trim() : n.trim();
  const { previousContent: f } = s;
  f && (c = f + c.trimEnd());
  try {
    switch (r) {
      case "xml":
        const m = nS.validate(c);
        if (m !== !0)
          throw new Error(`Model response is not valid XML: ${m.err.msg}`);
        let p = bk.parse(c);
        return p.root && (p = p.root), s.schema && Vf(p, s.schema), p;
      case "json":
        return JSON.parse(c);
      case "none":
        return c;
      default:
        throw new Error(`Unsupported format specified: ${r}`);
    }
  } catch (m) {
    throw console.error(`Error parsing response in format '${r}':`, m), console.error("Raw content received:", n), r === "xml" ? m.message.startsWith("Model response is not valid XML:") ? m : new Error(`Model response is not valid XML: ${m.message}`) : r === "json" ? new Error("Model response is not valid JSON.") : new Error(`Failed to parse response as ${r}: ${m.message}`);
  }
}
const wk = new u3();
async function $f(n, r, s, a, u, c) {
  const f = !a.json_schema && !1;
  return new Promise((m, p) => {
    const b = new AbortController(), g = c ?? b.signal;
    c && c.addEventListener("abort", () => b.abort(), { once: !0 }), wk.generateRequest(
      {
        profileId: n,
        prompt: r,
        maxTokens: s,
        custom: { stream: f, signal: g },
        overridePayload: a
      },
      {
        abortController: b,
        onEntry: void 0,
        onFinish: (E, v, S) => g.aborted ? p(new DOMException("Request aborted by user", "AbortError")) : S ? p(S) : v === void 0 && S === void 0 ? p(new DOMException("Request aborted by user", "AbortError")) : (v || p(new Error("No data received from LLM")), S ? p(S) : m(v))
      }
    );
  });
}
async function Ek(n, r, s, a) {
  const u = await $f(n, r, s, {}, void 0, a);
  if (!u?.content)
    throw new Error("Plain request failed to return content.");
  return u.content;
}
async function t0(n, r, s, a, u, c, f) {
  const m = It.getSettings();
  let p, b;
  const g = e4(s);
  if (u === "native") {
    if (p = await $f(
      n,
      r,
      c,
      {
        json_schema: { name: a, strict: !0, value: g }
      },
      void 0,
      f
    ), !p?.content)
      throw new Error(`Structured request for ${a} failed to return content.`);
    b = typeof p.content == "string" ? JSON.parse(p.content) : p.content;
  } else {
    const v = u, S = vk(g, v), h = JSON.stringify(g, null, 2), C = v === "json" ? "reviseJsonPrompt" : "reviseXmlPrompt", x = m.prompts[C]?.content;
    if (!x)
      throw new Error(`Prompt template for mode "${v}" not found.`);
    const M = {
      example_response: S,
      schema: h
    }, L = { role: "system", content: _n.compile(x, { noEscape: !0, strict: !0 })(M) };
    if (p = await $f(
      n,
      [...r, L],
      c,
      {},
      void 0,
      f
    ), !p?.content)
      throw new Error(`Structured request for ${a} failed to return content.`);
    b = Sk(p.content, v, { schema: g });
  }
  const E = s.safeParse(b);
  if (!E.success) {
    const v = `Model response failed schema validation for ${a}. Check console for details.`;
    throw console.error("Zod validation failed:", E.error.issues), console.error("Raw content parsed:", b), await ge("error", v), new Error(v);
  }
  return E.data;
}
const Ck = ({ originalContent: n, newContent: r }) => {
  const s = ie.useMemo(() => {
    const a = J0(n, r);
    let u = "", c = "";
    return a.forEach((f) => {
      const m = f.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), b = `<span style="${f.added ? "color: green; background-color: #e6ffed;" : f.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${m}</span>`;
      f.added || (u += b), f.removed || (c += b);
    }), { originalHtml: u, newHtml: c };
  }, [n, r]);
  return /* @__PURE__ */ A.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ A.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: s.originalHtml } }),
    /* @__PURE__ */ A.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: s.newHtml } })
  ] });
}, S_ = ({ before: n, after: r }) => {
  const s = ie.useMemo(() => {
    const a = [];
    return !n || !r || ((n.comment || "") !== (r.comment || "") && a.push({ label: "Name", before: n.comment || "", after: r.comment || "" }), (n.key || []).join(", ") !== (r.key || []).join(", ") && a.push({ label: "Triggers", before: (n.key || []).join(", "), after: (r.key || []).join(", ") }), (n.content || "") !== (r.content || "") && a.push({ label: "Content", before: n.content || "", after: r.content || "" })), a;
  }, [n, r]);
  return /* @__PURE__ */ A.jsx(A.Fragment, { children: s.map(({ label: a, before: u, after: c }) => /* @__PURE__ */ A.jsxs("div", { className: "compare-state-item", children: [
    /* @__PURE__ */ A.jsx("h4", { children: a }),
    /* @__PURE__ */ A.jsxs("div", { className: "compare-state-header", children: [
      /* @__PURE__ */ A.jsx("span", { children: "Before" }),
      /* @__PURE__ */ A.jsx("span", { children: "After" })
    ] }),
    /* @__PURE__ */ A.jsx(Ck, { originalContent: u, newContent: c })
  ] }, a)) });
}, kk = ({ before: n, after: r }) => {
  const { added: s, removed: a, changed: u } = ie.useMemo(() => {
    const f = n || {}, m = /* @__PURE__ */ new Map();
    Object.entries(f).forEach(([v, S]) => {
      S.forEach((h) => {
        const C = `${v}::${h.uid}`;
        m.set(C, { worldName: v, entry: h });
      });
    });
    const p = [], b = [], g = [], E = Object.entries(r || {}).flatMap(
      ([v, S]) => S.map((h) => ({ worldName: v, entry: h }))
    );
    for (const { worldName: v, entry: S } of E) {
      const h = `${v}::${S.uid}`;
      if (m.has(h)) {
        const x = m.get(h).entry;
        (x.comment !== S.comment || x.content !== S.content || (x.key || []).join(",") !== (S.key || []).join(",")) && g.push({ worldName: v, before: x, after: S }), m.delete(h);
      } else
        p.push({ worldName: v, entry: S });
    }
    return m.forEach(({ worldName: v, entry: S }) => {
      b.push({ worldName: v, entry: S });
    }), { added: p, removed: b, changed: g };
  }, [n, r]), c = s.length > 0 || a.length > 0 || u.length > 0;
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
        /* @__PURE__ */ A.jsx(S_, { before: m, after: p })
      ] }, `${f}::${p.uid}`))
    ] })
  ] }) : /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes were detected in the entries for this step." }) });
}, ph = ({ sessionType: n, before: r, after: s }) => !r && !s ? /* @__PURE__ */ A.jsxs("div", { className: "compare-state-popup", children: [
  /* @__PURE__ */ A.jsx("h3", { children: "Changes in this step" }),
  /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No state information available for this step." })
] }) : /* @__PURE__ */ A.jsxs("div", { className: "compare-state-popup", children: [
  /* @__PURE__ */ A.jsx("h3", { children: "Changes in this step" }),
  /* @__PURE__ */ A.jsx("div", { className: "compare-state-list", children: n === "global" ? /* @__PURE__ */ A.jsx(kk, { before: r, after: s }) : /* @__PURE__ */ A.jsx(S_, { before: r, after: s }) })
] }), Ak = ({ currentState: n, initialState: r }) => {
  const [s, a] = ie.useState(!1), u = ie.useMemo(
    () => [
      { label: "Name", value: n.comment },
      { label: "Triggers", value: n.key.join(", ") },
      { label: "Content", value: n.content }
    ],
    [n]
  );
  return /* @__PURE__ */ A.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h3", { children: s ? "Comparing with Original State" : "Current Entry State" }),
      /* @__PURE__ */ A.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ A.jsx("input", { type: "checkbox", checked: s, onChange: (c) => a(c.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ A.jsx("div", { className: "current-state-content", children: s ? /* @__PURE__ */ A.jsx(ph, { sessionType: "entry", before: r, after: n }) : u.map(({ label: c, value: f }) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
      /* @__PURE__ */ A.jsx("label", { children: c }),
      /* @__PURE__ */ A.jsx("div", { className: "state-value", children: f || /* @__PURE__ */ A.jsx("span", { className: "subtle-text", children: "empty" }) })
    ] }, c)) })
  ] });
}, xk = ({ currentState: n, initialState: r }) => {
  const [s, a] = ie.useState(!1);
  return /* @__PURE__ */ A.jsxs("div", { className: "current-state-popup global-state-popup", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h3", { children: s ? "Comparing with Original State" : "Current Suggested Entries" }),
      /* @__PURE__ */ A.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ A.jsx("input", { type: "checkbox", checked: s, onChange: (u) => a(u.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ A.jsx("div", { className: "current-state-content", children: s ? /* @__PURE__ */ A.jsx(ph, { sessionType: "global", before: r, after: n }) : Object.entries(n).map(([u, c]) => /* @__PURE__ */ A.jsxs("div", { className: "world-group", children: [
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
}, ji = SillyTavern.getContext(), Tk = (n, r) => {
  const s = structuredClone(n);
  return s.comment = r.name, s.key = r.triggers, s.content = r.content, s;
}, Nk = (n, r) => {
  const s = structuredClone(n);
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
      const p = { entries: Object.fromEntries(s[u].map((g) => [g.uid, g])) }, b = Wf(u, p);
      b && (b.comment = c, b.key = f, b.content = m, s[u].push(b));
    }
  return s;
}, Ok = ({ initialState: n, onSave: r, onClose: s }) => {
  const [a, u] = ie.useState(n.comment), [c, f] = ie.useState(n.key.join(", ")), [m, p] = ie.useState(n.content), b = () => {
    const g = {
      ...structuredClone(n),
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
        /* @__PURE__ */ A.jsxs(Ee, { onClick: b, children: [
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
        /* @__PURE__ */ A.jsx($0, { type: "text", value: a, onInput: (g) => u(g.currentTarget.value) })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ A.jsx("label", { children: "Triggers (comma-separated)" }),
        /* @__PURE__ */ A.jsx(qn, { value: c, onChange: (g) => f(g.target.value), rows: 2 })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ A.jsx("label", { children: "Content" }),
        /* @__PURE__ */ A.jsx(qn, { value: m, onChange: (g) => p(g.target.value), rows: 8 })
      ] })
    ] })
  ] });
}, Mk = ({
  session: n,
  onBack: r,
  onApply: s,
  onSessionUpdate: a,
  initialState: u,
  chatContextOptions: c
}) => {
  const [f, m] = ie.useState(n.messages), [p, b] = ie.useState(""), [g, E] = ie.useState(!1), [v, S] = ie.useState(null), [h, C] = ie.useState(!1), [x, M] = ie.useState(!1), [T, L] = ie.useState(null), [l, y] = ie.useState(""), w = ie.useRef(null), k = ie.useRef(null);
  ie.useEffect(() => {
    w.current?.scrollIntoView({ behavior: "smooth" });
  }, [f]);
  const R = ie.useCallback(
    ($, U, te) => {
      if (JSON.stringify(te) === JSON.stringify(U))
        return $;
      const ne = It.getSettings();
      let ue = "";
      if (n.type === "global") {
        const re = ne.prompts.reviseGlobalStateUpdate?.content, pe = ne.prompts.reviseGlobalStateUpdateAddedModified?.content, je = ne.prompts.reviseGlobalStateUpdateRemoved?.content;
        if (!re || !pe || !je) return $;
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
        const Pe = {}, We = [];
        if (we.forEach((dt, ye) => {
          const [_e] = ye.split("::"), qe = fe.get(ye);
          let Ze = !1;
          if (!qe)
            Ze = !0;
          else {
            const et = (dt.content || "") !== (qe.content || ""), Vn = (dt.comment || "") !== (qe.comment || ""), Dn = (dt.key || []).sort().join(",") !== (qe.key || []).sort().join(",");
            (et || Vn || Dn) && (Ze = !0);
          }
          Ze && (Pe[_e] || (Pe[_e] = []), Pe[_e].push(dt));
        }), fe.forEach((dt, ye) => {
          if (!we.has(ye)) {
            const [_e] = ye.split("::");
            We.push({ worldName: _e, comment: dt.comment });
          }
        }), Object.keys(Pe).length === 0 && We.length === 0)
          return $;
        const Fe = _n.compile(pe, { noEscape: !0 })({
          changedLorebooks: Pe
        }), Rn = _n.compile(je, { noEscape: !0 })({ removedEntries: We });
        ue = _n.compile(re, { noEscape: !0 })({
          addedModifiedContent: Fe,
          removedContent: Rn
        });
      } else {
        const re = U;
        ue = `The following is the current state of the single lorebook entry you are editing. Base your response on this current state.

## WORLD NAME: ${n.worldName}
### (NAME: ${re.comment})
Triggers: ${(re.key || []).join(", ")}
Content: ${re.content}`;
      }
      if (ue = ji.substituteParams(ue.trim()), ue) {
        const re = {
          id: `msg-${Date.now()}-state`,
          role: "system",
          content: ue,
          isStateUpdate: !0
        };
        return [...$, re];
      }
      return $;
    },
    [n.type, n.worldName]
  ), P = ie.useCallback(
    async ($, U, te, ne) => {
      const ue = It.getSettings();
      if (!n.profileId) {
        ge("warning", "Please select a connection profile for this session.");
        return;
      }
      k.current = new AbortController(), te(), E(!0);
      try {
        const re = [], pe = ji.extensionSettings.connectionManager?.profiles?.find(
          (fe) => fe.id === n.profileId
        ), je = pe?.api ? ji.CONNECT_API_MAP[pe.api].selected : void 0;
        if (!je) {
          ge("warning", "No API selected for this session.");
          return;
        }
        for (const fe of $)
          if (fe.id === Zf) {
            if (sn === void 0 && !Ft) continue;
            const we = await g0(je, c);
            we.warnings?.length && we.warnings.forEach((Pe) => ge("warning", Pe)), re.push(...we.result);
          } else
            re.push(fe);
        const Se = $.slice(0, $.length - (U ? 0 : 1)).reverse().find((fe) => fe.stateSnapshot)?.stateSnapshot ?? u;
        let me = "";
        if (n.type === "global") {
          const fe = ue.prompts.currentLorebooks?.content;
          if (fe) {
            const we = { currentLorebooks: Se };
            me = _n.compile(fe, { noEscape: !0 })(we);
          }
        } else {
          const fe = Se;
          me = `The following is the current state of the single lorebook entry you are editing. Base your response on this current state.

## WORLD NAME: ${n.worldName}
### (NAME: ${fe.comment})
Triggers: ${(fe.key || []).join(", ")}
Content: ${fe.content}`;
        }
        if (me = ji.substituteParams(me.trim()), me) {
          const fe = {
            id: `temp-state-${Date.now()}`,
            role: "system",
            content: me
          }, we = re.pop();
          re.push(fe), we && re.push(we);
        }
        if (n.isReadonly) {
          re.push({
            id: `msg-${Date.now()}-readonly`,
            role: "system",
            content: "Readonly mode enabled. You can only discuss with the user without making changes."
          });
          const fe = await Ek(
            n.profileId,
            re,
            ue.maxResponseToken,
            k.current.signal
          ), we = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: fe
          }, Pe = [...$, we];
          m(Pe), a({ ...n, messages: Pe });
        } else {
          let fe, we;
          if (n.type === "entry") {
            const Fe = await t0(
              n.profileId,
              re,
              fk,
              e0.ENTRY,
              n.promptEngineeringMode,
              ue.maxResponseToken,
              k.current.signal
            );
            fe = Tk(Se, Fe), we = Fe.justification;
          } else {
            const Fe = await t0(
              n.profileId,
              re,
              gk,
              e0.GLOBAL,
              n.promptEngineeringMode,
              ue.maxResponseToken,
              k.current.signal
            );
            fe = Nk(Se, Fe), we = Fe.justification;
          }
          const Pe = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: we,
            stateSnapshot: fe
          };
          let We = [...$, Pe];
          We = R(We, fe, Se), m(We), a({ ...n, messages: We });
        }
      } catch (re) {
        re.name === "AbortError" ? ge("info", "Request was cancelled.") : (console.error("Revise request failed:", re), ge("error", `Request failed: ${re.message}`)), ne();
      } finally {
        E(!1), k.current = null;
      }
    },
    [n, a, u, c, R]
  ), O = ie.useCallback(async () => {
    if (!p.trim() || g) return;
    const $ = { id: `msg-${Date.now()}`, role: "user", content: p.trim() }, U = f;
    await P(
      [...f, $],
      !1,
      () => {
        m([...f, $]), b("");
      },
      () => m(U)
    );
  }, [p, g, f, P]), z = ie.useCallback(async () => {
    if (g || f.length === 0) return;
    const $ = f;
    let U = [...f];
    const te = f.findLastIndex((ne) => !ne.isStateUpdate);
    te > -1 && f[te].role === "assistant" && (U = f.slice(0, te)), await P(
      U,
      !0,
      () => m(U),
      () => m($)
    );
  }, [g, f, P]), q = () => {
    const $ = f.slice().reverse().find((U) => U.stateSnapshot)?.stateSnapshot ?? u;
    s($), r();
  }, Y = ($) => {
    const U = f.findIndex((ue) => ue.id === $);
    if (U < 0 || !f[U].stateSnapshot) return;
    const te = f[U].stateSnapshot;
    let ne = u;
    for (let ue = U - 1; ue >= 0; ue--)
      if (f[ue].stateSnapshot) {
        ne = f[ue].stateSnapshot;
        break;
      }
    S({ before: ne, after: te });
  }, G = ($) => {
    L($.id), y($.content);
  }, W = () => {
    L(null), y("");
  }, j = async () => {
    if (!T) return;
    const $ = f.findIndex((pe) => pe.id === T);
    if ($ === -1 || !await ji.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const te = f, ne = f.slice(0, $), ue = { ...f[$], content: l }, re = [...ne, ue];
    W(), await P(
      re,
      !1,
      () => m(re),
      () => m(te)
    );
  }, B = async ($) => {
    const U = f.findIndex((re) => re.id === $);
    if (U === -1) return;
    const te = !!f[U].isInitial;
    if (!await ji.Popup.show.confirm(
      "Delete Message",
      te ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    const ue = te ? f.filter((re) => re.isInitial && re.id !== $) : f.slice(0, U);
    m(ue), a({ ...n, messages: ue }), ge("info", "Message history has been updated.");
  }, K = ($) => {
    const U = f.slice().reverse().find((ue) => ue.stateSnapshot)?.stateSnapshot ?? u, te = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: "I made a change manually.",
      stateSnapshot: $
    };
    let ne = [...f, te];
    ne = R(ne, $, U), m(ne), a({ ...n, messages: ne }), M(!1);
  }, ae = f.slice().reverse().find(($) => $.stateSnapshot)?.stateSnapshot ?? u, I = f.filter(($) => !$.isStateUpdate), X = I.filter(($) => $.isInitial), ce = I.filter(($) => !$.isInitial);
  return /* @__PURE__ */ A.jsxs("div", { className: "revise-session-chat", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h2", { children: n.name }),
      /* @__PURE__ */ A.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
          /* @__PURE__ */ A.jsx(
            "input",
            {
              type: "checkbox",
              checked: n.isReadonly ?? !1,
              onChange: ($) => a({ ...n, isReadonly: $.target.checked })
            }
          ),
          "Readonly Mode"
        ] }),
        /* @__PURE__ */ A.jsx("div", { style: { maxWidth: "200px" }, children: /* @__PURE__ */ A.jsx(
          Y0,
          {
            initialSelectedProfileId: n.profileId,
            onChange: ($) => a({ ...n, profileId: $?.id ?? "" })
          }
        ) }),
        /* @__PURE__ */ A.jsxs(
          "select",
          {
            className: "text_pole",
            value: n.promptEngineeringMode,
            onChange: ($) => a({ ...n, promptEngineeringMode: $.target.value }),
            title: "Prompt Engineering Mode",
            disabled: n.isReadonly,
            style: { minWidth: "fit-content", width: "unset" },
            children: [
              /* @__PURE__ */ A.jsx("option", { value: "native", children: "Native" }),
              /* @__PURE__ */ A.jsx("option", { value: "json", children: "JSON" }),
              /* @__PURE__ */ A.jsx("option", { value: "xml", children: "XML" })
            ]
          }
        ),
        /* @__PURE__ */ A.jsx(Ee, { onClick: () => C(!0), title: "View current state", children: "View State" }),
        n.type === "entry" && /* @__PURE__ */ A.jsx(Ee, { onClick: () => M(!0), title: "Manually edit the current state", children: "Edit State" }),
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
          ($) => T === $.id ? /* @__PURE__ */ A.jsxs("div", { className: "message-editor", children: [
            /* @__PURE__ */ A.jsx(qn, { value: l, onChange: (U) => y(U.target.value), rows: 5 }),
            /* @__PURE__ */ A.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ A.jsxs(Ee, { onClick: j, children: [
                /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ A.jsxs(Ee, { onClick: W, children: [
                /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, $.id) : /* @__PURE__ */ A.jsxs("div", { className: `message-bubble-wrapper initial-context ${$.role}`, children: [
            /* @__PURE__ */ A.jsx("div", { className: `message-bubble ${$.role} initial`, children: /* @__PURE__ */ A.jsx("div", { className: "message-content", children: $.content }) }),
            !g && $.id !== Zf && /* @__PURE__ */ A.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ A.jsx(
                Ee,
                {
                  className: "message-action-button",
                  onClick: () => G($),
                  title: "Edit Context",
                  children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-pencil" })
                }
              ),
              /* @__PURE__ */ A.jsx(
                Ee,
                {
                  className: "message-action-button danger_button",
                  onClick: () => B($.id),
                  title: "Delete Context",
                  children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" })
                }
              )
            ] })
          ] }, $.id)
        ) })
      ] }),
      ce.map(
        ($) => T === $.id ? /* @__PURE__ */ A.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ A.jsx(qn, { value: l, onChange: (U) => y(U.target.value), rows: 3 }),
          /* @__PURE__ */ A.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ A.jsxs(Ee, { onClick: j, children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
              " Save & Fork"
            ] }),
            /* @__PURE__ */ A.jsxs(Ee, { onClick: W, children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, $.id) : /* @__PURE__ */ A.jsxs("div", { className: `message-bubble-wrapper ${$.role}`, children: [
          /* @__PURE__ */ A.jsxs("div", { className: "message-actions", children: [
            $.role === "user" && !$.stateSnapshot && !g && /* @__PURE__ */ A.jsx(
              Ee,
              {
                className: "message-action-button",
                onClick: () => G($),
                title: "Edit and Fork",
                children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-pencil" })
              }
            ),
            $.stateSnapshot && !g && /* @__PURE__ */ A.jsx(
              Ee,
              {
                className: "message-action-button",
                onClick: () => Y($.id),
                title: "Compare changes",
                children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-code-compare" })
              }
            ),
            !g && /* @__PURE__ */ A.jsx(
              Ee,
              {
                className: "message-action-button danger_button",
                onClick: () => B($.id),
                title: "Delete Message",
                children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" })
              }
            )
          ] }),
          /* @__PURE__ */ A.jsx("div", { className: `message-bubble ${$.role}`, children: /* @__PURE__ */ A.jsx("div", { className: "message-content", children: $.content }) })
        ] }, $.id)
      ),
      ce.length > 0 && !g && /* @__PURE__ */ A.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ A.jsxs(Ee, { onClick: z, title: "Regenerate response", children: [
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
        qn,
        {
          value: p,
          onChange: ($) => b($.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: g || !!T,
          onKeyDown: ($) => {
            $.key === "Enter" && !$.shiftKey && ($.preventDefault(), O());
          }
        }
      ),
      /* @__PURE__ */ A.jsx(Ee, { onClick: O, disabled: g || !p.trim() || !!T, children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-paper-plane" }) })
    ] }),
    v && /* @__PURE__ */ A.jsx(
      tr,
      {
        type: Pt.DISPLAY,
        content: /* @__PURE__ */ A.jsx(ph, { sessionType: n.type, before: v.before, after: v.after }),
        onComplete: () => S(null),
        options: { wide: !0, large: !0 }
      }
    ),
    h && /* @__PURE__ */ A.jsx(
      tr,
      {
        type: Pt.DISPLAY,
        content: n.type === "entry" ? /* @__PURE__ */ A.jsx(Ak, { currentState: ae, initialState: u }) : /* @__PURE__ */ A.jsx(
          xk,
          {
            currentState: ae,
            initialState: u
          }
        ),
        onComplete: () => C(!1),
        options: { wide: !0, large: !0 }
      }
    ),
    x && n.type === "entry" && /* @__PURE__ */ A.jsx(
      tr,
      {
        type: Pt.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          Ok,
          {
            initialState: ae,
            onSave: ($) => {
              K($), M(!1);
            },
            onClose: () => M(!1)
          }
        ),
        onComplete: () => M(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
};
async function jk(n, r, s, a, u, c, f) {
  const m = It.getSettings(), p = m.mainContextTemplatePresets[a];
  if (!p)
    throw new Error(`Main context template preset "${a}" not found.`);
  const b = [], g = {
    user: Re.name1 || "You",
    char: Re.name2 || "Character",
    persona: Re.powerUserSettings.persona_description,
    blackListedEntries: c.blackListedEntries
  };
  if (u.worldInfo)
    if (r === "global")
      g.currentLorebooks = n;
    else {
      const v = {};
      Object.entries(f).filter(([S]) => c.selectedWorldNames.includes(S)).forEach(([S, h]) => {
        const C = new Set(c.selectedEntryUids[S] ?? []), x = C.size > 0 ? h.filter((M) => C.has(M.uid)) : h.filter((M) => !M.disable);
        x.length > 0 && (v[S] = x);
      }), g.currentLorebooks = v;
    }
  if (r === "entry") {
    const v = n;
    g.entryToRevise = {
      worldName: s,
      name: v.comment,
      triggers: v.key.join(", "),
      content: v.content
    };
  }
  for (const v of p.prompts) {
    if (!v.enabled || ["taskDescription", "responseRules", "currentLorebooks"].includes(v.promptName) || v.promptName === "chatHistory" && u.messages.type === "none" || sn === void 0 && !Ft && v.promptName === "chatHistory") continue;
    if (v.promptName === "chatHistory") {
      b.push({
        id: Zf,
        role: "system",
        content: "[[Chat history placeholder]]",
        isInitial: !0
      });
      continue;
    }
    const S = m.prompts[v.promptName];
    if (S) {
      let h = _n.compile(S.content, { noEscape: !0 })(g);
      h = Re.substituteParams(h), h.trim() && b.push({
        id: `im-${b.length}`,
        role: v.role,
        content: h.trim(),
        isInitial: !0
      });
    }
  }
  const E = m.prompts.reviseTaskDescription?.content;
  if (E) {
    const v = _n.compile(E, { noEscape: !0 })({
      isEntrySession: r === "entry",
      targetEntryName: r === "entry" ? n.comment : ""
    });
    b.push({
      id: `im-${b.length}`,
      role: "system",
      content: v,
      isInitial: !0
    });
  }
  return b;
}
const ol = SillyTavern.getContext(), n0 = "worldInfoRecommender_reviseSessions", w_ = ({
  target: n,
  initialState: r,
  onClose: s,
  onApply: a,
  sessionForContext: u,
  allEntries: c,
  contextToSend: f
}) => {
  const [m, p] = ie.useState([]), [b, g] = ie.useState(null), [E, v] = ie.useState(!0), S = ie.useMemo(() => n.type === "entry" ? `${n.worldName}::${n.entry.uid}::${n.entry.comment}` : "global", [n]);
  ie.useEffect(() => {
    const w = JSON.parse(localStorage.getItem(n0) || "[]");
    p(w), v(!1);
  }, []);
  const h = ie.useMemo(() => n.type === "entry" ? m.filter((w) => w.type === "entry" && w.targetEntryIdentifier === S).sort((w, k) => new Date(k.createdAt).getTime() - new Date(w.createdAt).getTime()) : m.filter((w) => w.type === "global").sort((w, k) => new Date(k.createdAt).getTime() - new Date(w.createdAt).getTime()), [m, n.type, S]), C = (w) => {
    localStorage.setItem(n0, JSON.stringify(w)), p(w);
  }, x = async () => {
    const w = await ol.Popup.show.input(
      "New Session Name",
      n.type === "entry" ? `Revise "${n.entry.comment}" - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}` : `Global Revise - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`
    );
    if (w)
      try {
        const k = It.getSettings();
        if (!k.profileId) {
          ge("warning", "Please select a connection profile in the main popup first.");
          return;
        }
        const R = await jk(
          r,
          n.type,
          n.type === "entry" ? n.worldName : void 0,
          k.mainContextTemplatePreset,
          f,
          u,
          c
        ), P = {
          id: `rs-${Date.now()}`,
          name: w,
          type: n.type,
          targetEntryIdentifier: n.type === "entry" ? S : void 0,
          worldName: n.type === "entry" ? n.worldName : void 0,
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          messages: R,
          context: { mainContextTemplatePreset: k.mainContextTemplatePreset },
          profileId: k.profileId,
          promptEngineeringMode: k.defaultPromptEngineeringMode,
          isReadonly: !1
        };
        g(P);
      } catch (k) {
        const R = k instanceof Error ? k.message : String(k);
        console.error("Failed to create session:", k), ge("error", `Failed to create session: ${R}`);
      }
  }, M = (w) => {
    g(w);
  }, T = async (w) => {
    if (await ol.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const R = m.filter((P) => P.id !== w);
      C(R);
    }
  }, L = (w) => {
    const k = m.findIndex((P) => P.id === w.id), R = [...m];
    k !== -1 ? R[k] = w : R.push(w), C(R), g(w);
  }, l = (w) => {
    n.type === "entry" ? a({
      worldName: n.worldName,
      originalEntry: r,
      updatedEntry: w
    }) : a(w), s();
  };
  if (b) {
    const w = ol.extensionSettings.connectionManager?.profiles?.find(
      (P) => P.id === b.profileId
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
          const P = ol.chat?.length ?? 0, O = k.last ?? 10;
          R.messageIndexesBetween = {
            end: Math.max(0, P - 1),
            start: Math.max(0, P - O)
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
      Mk,
      {
        session: b,
        onBack: () => g(null),
        onApply: l,
        onSessionUpdate: L,
        initialState: r,
        chatContextOptions: R
      }
    );
  }
  const y = n.type === "entry" ? `Revise Sessions for "${n.entry.comment}"` : "Global Revise Sessions";
  return /* @__PURE__ */ A.jsxs("div", { className: "revise-session-manager", children: [
    /* @__PURE__ */ A.jsx("div", { className: "popup_header", children: /* @__PURE__ */ A.jsx("h2", { children: y }) }),
    /* @__PURE__ */ A.jsx("div", { className: "session-list", children: E ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : h.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create one to get started." }) : h.map((w) => /* @__PURE__ */ A.jsxs("div", { className: "session-item", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "session-info", onClick: () => M(w), children: [
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
}, Rk = new KS.Converter(), Dk = ({
  initialWorldName: n,
  entry: r,
  allWorldNames: s,
  existingEntry: a,
  sessionRegexIds: u,
  onAdd: c,
  onRemove: f,
  onContinue: m,
  onUpdate: p,
  entriesGroupByWorldName: b,
  sessionForContext: g,
  contextToSend: E
}) => {
  const [v, S] = ie.useState(() => s.find((I) => I === n) ?? s[0] ?? ""), [h, C] = ie.useState(!1), [x, M] = ie.useState(!1), [T, L] = ie.useState(!1), [l, y] = ie.useState(!1), [w, k] = ie.useState(!1), [R, P] = ie.useState(!1), [O, z] = ie.useState(""), q = ie.useRef(null), Y = ie.useMemo(
    () => !!b[v]?.find((ae) => ae.uid === r.uid && ae.comment === r.comment),
    [v, r.uid, r.comment, b]
  ), G = x || T, W = async () => {
    C(!0), await c(r, n, v);
  }, j = async () => {
    M(!0), await m({ worldName: n, entry: r, prompt: O, mode: "continue" }), M(!1);
  }, B = async () => {
    L(!0), await m({ worldName: n, entry: r, prompt: O, mode: "revise" }), L(!1);
  }, K = (ae) => {
    p(n, r, ae, u);
  };
  return /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
    /* @__PURE__ */ A.jsxs("div", { className: "entry", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "menu", children: [
        /* @__PURE__ */ A.jsx(
          "select",
          {
            className: "world-select text_pole",
            value: v,
            onChange: (ae) => S(ae.target.value),
            children: s.map((ae) => /* @__PURE__ */ A.jsx("option", { value: ae, children: ae }, ae))
          }
        ),
        /* @__PURE__ */ A.jsx(Ee, { onClick: W, disabled: h || G, className: "menu_button interactable add", children: Y ? "Update" : "Add" }),
        /* @__PURE__ */ A.jsxs(
          Ee,
          {
            onClick: () => P(!0),
            disabled: G,
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
            onClick: j,
            disabled: G,
            className: "menu_button interactable continue",
            title: "Continue writing this entry. You can provide instructions in the textbox below.",
            children: x ? "..." : "Continue"
          }
        ),
        /* @__PURE__ */ A.jsx(
          Ee,
          {
            onClick: B,
            disabled: G,
            className: "menu_button interactable revise",
            title: "Request changes to this entry. Provide instructions in the textbox below.",
            children: T ? "..." : "Revise"
          }
        ),
        /* @__PURE__ */ A.jsx(Ee, { onClick: () => y(!0), disabled: G, className: "menu_button interactable edit", children: "Edit" }),
        Y && /* @__PURE__ */ A.jsx(
          Ee,
          {
            onClick: () => k(!0),
            disabled: G,
            className: "menu_button interactable compare",
            children: "Compare"
          }
        ),
        /* @__PURE__ */ A.jsx(
          Ee,
          {
            onClick: () => f(r, n, !0),
            disabled: G,
            className: "menu_button interactable blacklist",
            children: "Blacklist"
          }
        ),
        /* @__PURE__ */ A.jsx(
          Ee,
          {
            onClick: () => f(r, n, !1),
            disabled: G,
            className: "menu_button interactable remove",
            children: "Remove"
          }
        )
      ] }),
      /* @__PURE__ */ A.jsx("h4", { className: "comment", children: r.comment }),
      /* @__PURE__ */ A.jsx("div", { className: "key", children: r.key.join(", ") }),
      /* @__PURE__ */ A.jsx("p", { className: "content", dangerouslySetInnerHTML: { __html: Rk.makeHtml(r.content ?? "") } }),
      /* @__PURE__ */ A.jsx("div", { className: "continue-prompt-section", style: { marginTop: "10px" }, children: /* @__PURE__ */ A.jsx(
        qn,
        {
          value: O,
          onChange: (ae) => z(ae.target.value),
          placeholder: "Optional instructions to continue or revise this entry. Then press 'Continue' or 'Revise'.",
          rows: 2,
          style: { width: "100%" }
        }
      ) })
    ] }),
    l && /* @__PURE__ */ A.jsx(
      tr,
      {
        type: Pt.CONFIRM,
        content: /* @__PURE__ */ A.jsx(vw, { ref: q, entry: r, initialRegexIds: u }),
        onComplete: (ae) => {
          if (ae && q.current) {
            const { updatedEntry: I, updatedRegexIds: X } = q.current.getFormData();
            p(n, r, I, X);
          }
          y(!1);
        }
      }
    ),
    w && a && /* @__PURE__ */ A.jsx(
      tr,
      {
        type: Pt.DISPLAY,
        content: /* @__PURE__ */ A.jsx(mw, { originalEntry: a, newEntry: r }),
        onComplete: () => k(!1)
      }
    ),
    R && /* @__PURE__ */ A.jsx(
      tr,
      {
        type: Pt.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          w_,
          {
            target: { type: "entry", worldName: n, entry: r },
            initialState: r,
            onClose: () => P(!1),
            onApply: K,
            sessionForContext: g,
            allEntries: b,
            contextToSend: E
          }
        ),
        onComplete: () => P(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, r0 = ie.forwardRef(
  ({ entriesByWorldName: n, initialSelectedUids: r, title: s }, a) => {
    const [u, c] = ie.useState(""), [f, m] = ie.useState(() => {
      const v = /* @__PURE__ */ new Set();
      return Object.entries(r).forEach(([S, h]) => {
        h.forEach((C) => v.add(`${S}::${C}`));
      }), v;
    }), p = ie.useMemo(() => {
      if (!u)
        return n;
      const v = u.toLowerCase(), S = {};
      return Object.entries(n).forEach(([h, C]) => {
        const x = C.filter(
          (M) => M.comment.toLowerCase().includes(v) || h.toLowerCase().includes(v)
        );
        x.length > 0 && (S[h] = x);
      }), S;
    }, [u, n]);
    ie.useImperativeHandle(a, () => ({
      getSelection: () => {
        const v = {};
        return f.forEach((S) => {
          const [h, C] = S.split("::"), x = parseInt(C, 10);
          v[h] || (v[h] = []), v[h].push(x);
        }), v;
      }
    }));
    const b = (v, S) => {
      const h = `${v}::${S}`, C = new Set(f);
      C.has(h) ? C.delete(h) : C.add(h), m(C);
    }, g = () => {
      const v = /* @__PURE__ */ new Set();
      Object.entries(p).forEach(([S, h]) => {
        h.forEach((C) => v.add(`${S}::${C.uid}`));
      }), m(v);
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
            onChange: (v) => c(v.target.value)
          }
        ),
        /* @__PURE__ */ A.jsx(Ee, { onClick: g, children: "Select All (Filtered)" }),
        /* @__PURE__ */ A.jsx(Ee, { onClick: E, children: "Deselect All" })
      ] }),
      /* @__PURE__ */ A.jsx("div", { className: "entry-list", children: Object.keys(p).length === 0 ? /* @__PURE__ */ A.jsx("p", { children: "No entries match your filter." }) : Object.entries(p).map(([v, S]) => /* @__PURE__ */ A.jsxs("div", { className: "world-group", children: [
        /* @__PURE__ */ A.jsx("h4", { children: v }),
        /* @__PURE__ */ A.jsx("ul", { children: S.map((h) => /* @__PURE__ */ A.jsx("li", { children: /* @__PURE__ */ A.jsxs("label", { children: [
          /* @__PURE__ */ A.jsx(
            "input",
            {
              type: "checkbox",
              checked: f.has(`${v}::${h.uid}`),
              onChange: () => b(v, h.uid)
            }
          ),
          h.comment || `Entry ${h.uid}`
        ] }) }, h.uid)) })
      ] }, v)) })
    ] });
  }
), Mt = SillyTavern.getContext(), Da = Mt, Zn = (n) => structuredClone(n ?? {}), wf = (n, r) => {
  for (const s of Object.keys(n))
    delete n[s];
  Object.assign(n, Zn(r));
}, zl = () => Mt.extensionSettings.connectionManager?.profiles ?? [];
function zk() {
  return zl();
}
function Yf(n) {
  if (n)
    return zl().find((r) => r.id === n);
}
function Ws(n) {
  return (n.api ? Mt.CONNECT_API_MAP[n.api] : void 0)?.selected === "openai" ? "openai" : "textgenerationwebui";
}
function Xf(n) {
  return n.api ? Mt.CONNECT_API_MAP[n.api]?.selected ?? "" : "";
}
function mh(n) {
  return Mt.getPresetManager(n);
}
function Ef(n) {
  const r = Yf(n);
  if (!r) return;
  const s = Ws(r), a = mh(s), u = r.preset ? a?.getCompletionPresetByName(r.preset) : void 0;
  return {
    profile: Zn(r),
    preset: Zn(u ?? {}),
    presetApiId: s,
    selectedApiGroup: Xf(r)
  };
}
async function Lk(n) {
  if (!n.id)
    throw new Error("Profile must have an id.");
  if (!n.name?.trim())
    throw new Error("Profile name cannot be empty.");
  const r = zl(), s = r.findIndex((u) => u.id === n.id);
  if (s === -1)
    throw new Error(`Profile not found: ${n.id}`);
  const a = Zn(r[s]);
  return r[s] = Zn(n), Mt.saveSettingsDebounced(), await Mt.eventSource.emit(Da.eventTypes.CONNECTION_PROFILE_UPDATED, a, r[s]), r[s];
}
async function Pk(n, r, s, a) {
  const u = a.trim();
  if (!u)
    throw new Error("Profile name cannot be empty.");
  const c = zl();
  if (c.some((p) => p.name === u))
    throw new Error(`A profile named "${u}" already exists.`);
  const f = mh(s);
  if (!f?.savePreset)
    throw new Error(`Could not find the ${s} preset manager.`);
  await f.savePreset(u, Zn(r));
  const m = {
    ...Zn(n),
    id: Mt.uuidv4(),
    name: u,
    preset: u
  };
  return c.push(m), Mt.saveSettingsDebounced(), await Mt.eventSource.emit(Da.eventTypes.CONNECTION_PROFILE_CREATED, m), m;
}
async function Ik(n, r, s) {
  if (!n.preset?.trim())
    throw new Error("Profile must have a preset name before saving preset settings.");
  const a = mh(s);
  if (!a?.savePreset)
    throw new Error(`Could not find the ${s} preset manager.`);
  await a.savePreset(n.preset, Zn(r));
}
function Bk() {
  return {
    selectedProfile: Da.extensionSettings.connectionManager?.selectedProfile ?? null,
    chatCompletionSettings: Zn(Mt.chatCompletionSettings),
    textCompletionSettings: Zn(Mt.textCompletionSettings),
    powerUserSettings: Zn(Mt.powerUserSettings)
  };
}
async function Uk(n) {
  if (n)
    try {
      const r = n.selectedProfile, s = r ? !!Yf(r) : !1, a = Mt.SlashCommandParser?.commands?.profile;
      if (a)
        if (s && r) {
          const u = Yf(r);
          await a.callback({ await: "true", timeout: "2000" }, u?.name ?? "");
        } else
          await a.callback({ await: "false" }, "<None>");
      else Da.extensionSettings.connectionManager && (Da.extensionSettings.connectionManager.selectedProfile = s ? r : "");
      wf(Mt.chatCompletionSettings, n.chatCompletionSettings), wf(Mt.textCompletionSettings, n.textCompletionSettings), wf(Mt.powerUserSettings, n.powerUserSettings), Da.extensionSettings.connectionManager && (Da.extensionSettings.connectionManager.selectedProfile = s ? r : ""), Mt.saveSettingsDebounced();
    } catch (r) {
      console.error("[WorldInfoRecommender] Failed to restore SillyTavern API settings:", r), await ge("warning", "Failed to restore SillyTavern API settings after closing World Info Recommender.");
    }
}
const gh = SillyTavern.getContext(), Ta = (n) => JSON.stringify(n ?? {}, null, 2), Na = (n, r) => {
  try {
    return JSON.parse(n);
  } catch (s) {
    throw new Error(`${r} is not valid JSON: ${s.message}`);
  }
}, Hk = () => Object.entries(gh.CONNECT_API_MAP).filter(([, n]) => n?.selected === "openai" || n?.selected === "textgenerationwebui").sort(([n], [r]) => n.localeCompare(r)), Ff = (n) => n.model ?? "", qk = {
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
}, Zk = {
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
}, Gk = (n) => {
  if (!n) return [];
  const r = document.querySelector(n);
  if (!(r instanceof HTMLSelectElement)) return [];
  const s = [];
  for (const a of Array.from(r.options)) {
    const u = a.value, c = a.textContent?.trim() || u;
    if (!u || c.includes("-- Connect to the API --")) continue;
    const f = a.parentElement, m = f instanceof HTMLOptGroupElement ? f.label : void 0;
    s.push({ value: u, label: c, group: m });
  }
  return s;
}, Vk = (n) => {
  const r = n.api ? gh.CONNECT_API_MAP[n.api] : void 0;
  if (r) {
    if (r.selected === "openai") return qk[r.source];
    if (r.selected === "textgenerationwebui") return Zk[r.type];
  }
}, $k = (n) => {
  const r = Gk(Vk(n)), s = Ff(n);
  return s && !r.some((a) => a.value === s) ? [{ value: s, label: `${s} (current)` }, ...r] : r;
}, Yk = (n) => {
  const r = n.filter((a) => !a.group), s = /* @__PURE__ */ new Map();
  for (const a of n) {
    if (!a.group) continue;
    const u = s.get(a.group) ?? [];
    u.push(a), s.set(a.group, u);
  }
  return { ungrouped: r, grouped: Array.from(s.entries()) };
}, Xk = ({ profileId: n, onProfileSelected: r }) => {
  const [s, a] = ie.useState(() => Ef(n)), [u, c] = ie.useState(() => Ta(s?.profile)), [f, m] = ie.useState(() => Ta(s?.preset)), [p, b] = ie.useState(!1), [g, E] = ie.useState(!1), [v, S] = ie.useState(0), h = ie.useMemo(() => Hk(), []), C = ie.useMemo(
    () => s ? $k(s.profile) : [],
    [s?.profile.api, s?.profile.model, v]
  ), x = ie.useMemo(() => Yk(C), [C]), M = ie.useCallback((O) => {
    const z = Ef(O);
    a(z), c(Ta(z?.profile)), m(Ta(z?.preset));
  }, []);
  ie.useEffect(() => {
    M(n);
  }, [n, M]);
  const T = (O, z) => {
    a((q) => {
      if (!q) return q;
      const Y = { ...q.profile, [O]: z }, G = {
        ...q,
        profile: Y,
        presetApiId: Ws(Y),
        selectedApiGroup: Xf(Y)
      };
      return c(Ta(Y)), G;
    });
  }, L = () => {
    if (s)
      try {
        const O = Na(u, "Profile JSON");
        a((z) => z && {
          ...z,
          profile: O,
          presetApiId: Ws(O),
          selectedApiGroup: Xf(O)
        }), ge("success", "Profile JSON loaded into the editor draft.");
      } catch (O) {
        ge("error", O.message);
      }
  }, l = () => {
    try {
      const O = Na(f, "Preset JSON");
      a((z) => z && { ...z, preset: O }), ge("success", "Preset JSON loaded into the editor draft.");
    } catch (O) {
      ge("error", O.message);
    }
  }, y = async () => {
    if (s) {
      E(!0);
      try {
        const O = Na(u, "Profile JSON"), z = await Lk(O), q = Ef(z.id);
        a(q), c(Ta(q?.profile)), m(Ta(q?.preset)), r(z.id), await ge("success", `Profile "${z.name}" saved.`);
      } catch (O) {
        await ge("error", O.message);
      } finally {
        E(!1);
      }
    }
  }, w = async () => {
    if (s) {
      E(!0);
      try {
        const O = Na(u, "Profile JSON"), z = Na(f, "Preset JSON");
        await Ik(O, z, Ws(O)), a((q) => q && { ...q, preset: z }), await ge("success", `Preset "${O.preset}" saved.`);
      } catch (O) {
        await ge("error", O.message);
      } finally {
        E(!1);
      }
    }
  }, k = async () => {
    if (!s) return;
    const O = s.profile.name ? `${s.profile.name} copy` : "New WIR Profile", z = await gh.Popup.show.input("Create Connection Profile", "Profile name:", O);
    if (!(!z || typeof z != "string")) {
      E(!0);
      try {
        const q = Na(u, "Profile JSON"), Y = Na(f, "Preset JSON"), G = await Pk(q, Y, Ws(q), z);
        r(G.id), M(G.id), await ge("success", `Profile "${G.name}" created.`);
      } catch (q) {
        await ge("error", q.message);
      } finally {
        E(!1);
      }
    }
  };
  if (!n)
    return /* @__PURE__ */ A.jsxs("div", { className: "api-settings-panel empty-state", children: [
      /* @__PURE__ */ A.jsx("h3", { children: "API Settings" }),
      /* @__PURE__ */ A.jsx("p", { children: "Select a connection profile to inspect and edit its API settings." })
    ] });
  if (!s)
    return /* @__PURE__ */ A.jsxs("div", { className: "api-settings-panel empty-state", children: [
      /* @__PURE__ */ A.jsx("h3", { children: "API Settings" }),
      /* @__PURE__ */ A.jsx("p", { children: "The selected connection profile could not be found." })
    ] });
  const R = s.selectedApiGroup === "textgenerationwebui", P = s.selectedApiGroup === "openai";
  return /* @__PURE__ */ A.jsxs("div", { className: "api-settings-panel", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "api-settings-header", children: [
      /* @__PURE__ */ A.jsxs("div", { children: [
        /* @__PURE__ */ A.jsx("h3", { children: "API Settings" }),
        /* @__PURE__ */ A.jsx("span", { children: P ? "Chat Completion" : R ? "Text Completion" : "Connection Profile" })
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
            onChange: (O) => T("name", O.target.value)
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
            onChange: (O) => {
              T("api", O.target.value), S((z) => z + 1);
            },
            children: [
              /* @__PURE__ */ A.jsx("option", { value: "", children: "Select API" }),
              h.map(([O]) => /* @__PURE__ */ A.jsx("option", { value: O, children: O }, O))
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
            onChange: (O) => T("preset", O.target.value)
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
              value: Ff(s.profile),
              onFocus: () => S((O) => O + 1),
              onChange: (O) => T("model", O.target.value),
              children: [
                x.ungrouped.map((O) => /* @__PURE__ */ A.jsx("option", { value: O.value, children: O.label }, `models:${O.value}`)),
                x.grouped.map(([O, z]) => /* @__PURE__ */ A.jsx("optgroup", { label: O, children: z.map((q) => /* @__PURE__ */ A.jsx("option", { value: q.value, children: q.label }, `${O}:${q.value}`)) }, O))
              ]
            }
          ) : /* @__PURE__ */ A.jsx(
            "input",
            {
              className: "text_pole",
              value: Ff(s.profile),
              onFocus: () => S((O) => O + 1),
              onChange: (O) => T("model", O.target.value)
            }
          ),
          /* @__PURE__ */ A.jsx(
            Ee,
            {
              className: "menu_button fa-solid fa-rotate",
              title: "Refresh model list",
              onClick: () => S((O) => O + 1)
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ A.jsxs("label", { children: [
        "API URL",
        /* @__PURE__ */ A.jsx(
          "input",
          {
            className: "text_pole",
            value: s.profile["api-url"] ?? "",
            onChange: (O) => T("api-url", O.target.value)
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
            onChange: (O) => T("secret-id", O.target.value)
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
              onChange: (O) => T("instruct", O.target.value)
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
              onChange: (O) => T("context", O.target.value)
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
              onChange: (O) => T("sysprompt", O.target.value)
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
              onChange: (O) => T("tokenizer", O.target.value)
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "api-settings-actions", children: [
      /* @__PURE__ */ A.jsx(Ee, { className: "menu_button interactable", onClick: y, disabled: g, children: "Save Profile" }),
      /* @__PURE__ */ A.jsx(Ee, { className: "menu_button interactable", onClick: w, disabled: g, children: "Save Preset" }),
      /* @__PURE__ */ A.jsx(Ee, { className: "menu_button", onClick: () => b((O) => !O), children: p ? "Hide Raw JSON" : "Show Raw JSON" })
    ] }),
    p && /* @__PURE__ */ A.jsxs("div", { className: "api-settings-raw", children: [
      /* @__PURE__ */ A.jsxs("div", { children: [
        /* @__PURE__ */ A.jsxs("div", { className: "raw-heading", children: [
          /* @__PURE__ */ A.jsx("span", { children: "Profile JSON" }),
          /* @__PURE__ */ A.jsx(Ee, { className: "menu_button", onClick: L, children: "Load JSON" })
        ] }),
        /* @__PURE__ */ A.jsx(qn, { value: u, onChange: (O) => c(O.target.value), rows: 10 })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { children: [
        /* @__PURE__ */ A.jsxs("div", { className: "raw-heading", children: [
          /* @__PURE__ */ A.jsx("span", { children: "Preset JSON" }),
          /* @__PURE__ */ A.jsx(Ee, { className: "menu_button", onClick: l, children: "Load JSON" })
        ] }),
        /* @__PURE__ */ A.jsx(qn, { value: f, onChange: (O) => m(O.target.value), rows: 10 })
      ] })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "api-settings-footnote", children: [
      zk().length,
      " profiles available. API keys are intentionally not shown; only secret IDs are editable."
    ] })
  ] });
};
_n.helpers.join || _n.registerHelper("join", function(n, r) {
  return Array.isArray(n) ? n.join(typeof r == "string" ? r : ", ") : "";
});
_n.helpers.is_not_empty || _n.registerHelper("is_not_empty", function(n, r) {
  return n ? Array.isArray(n) ? n.length > 0 ? r.fn(this) : r.inverse(this) : typeof n == "object" && Object.keys(n).length > 0 ? r.fn(this) : typeof n != "object" && !Array.isArray(n) ? r.fn(this) : r.inverse(this) : r.inverse(this);
});
const Un = SillyTavern.getContext(), ul = () => sn ? m0(sn) : Ft, Fk = () => {
  const n = Q0(), r = It.getSettings(), [s, a] = ie.useState({
    suggestedEntries: {},
    blackListedEntries: [],
    selectedWorldNames: [],
    selectedEntryUids: {},
    regexIds: {}
  }), [u, c] = ie.useState([]), [f, m] = ie.useState({}), [p, b] = ie.useState([]), [g, E] = ie.useState(!0), [v, S] = ie.useState(!1), [h, C] = ie.useState(!1), [x, M] = ie.useState(!1), [T, L] = ie.useState(!1), l = ie.useRef(null), y = ie.useRef(null), w = ie.useMemo(() => ul() ?? "_global", [sn, Ft]);
  ie.useEffect(() => {
    (async () => {
      E(!0), m({}), c([]), b([]);
      const te = ul(), ne = `worldInfoRecommend_${w}`, ue = JSON.parse(localStorage.getItem(ne) ?? "{}"), re = {
        suggestedEntries: ue.suggestedEntries ?? {},
        blackListedEntries: ue.blackListedEntries ?? [],
        selectedWorldNames: ue.selectedWorldNames ?? [],
        selectedEntryUids: ue.selectedEntryUids ?? {},
        regexIds: ue.regexIds ?? {}
      };
      let pe = {};
      if (te)
        if (Ft) {
          const me = await ml(["chat", "persona", "global"]);
          me && (pe = me);
          const fe = sv.find((we) => we.id === Ft);
          if (fe)
            for (const we of fe.members) {
              const Pe = Un.characters.findIndex((We) => We.avatar === we);
              if (Pe !== -1) {
                const We = await ml(["character"], !0, Pe);
                We && (pe = { ...pe, ...We });
              }
            }
        } else
          pe = await ml(["all"], !0, sn);
      else
        for (const me of Y1) {
          const fe = await Un.loadWorldInfo(me);
          fe && (pe[me] = Object.values(fe.entries));
        }
      m(pe);
      const je = Object.keys(pe);
      c(je), re.selectedWorldNames.length === 0 && w !== "_global" ? re.selectedWorldNames = [...je] : re.selectedWorldNames = re.selectedWorldNames.filter(
        (me) => je.includes(me)
      );
      const Se = {};
      if (re.selectedEntryUids) {
        for (const [me, fe] of Object.entries(re.selectedEntryUids))
          if (pe[me]) {
            const we = new Set(pe[me].map((We) => We.uid)), Pe = fe.filter((We) => we.has(We));
            Pe.length > 0 && (Se[me] = Pe);
          }
      }
      if (re.selectedEntryUids = Se, a(re), Ft) {
        const me = sv.find((fe) => fe.id === Ft);
        if (me?.generation_mode === 0) {
          const fe = me.members.map((we) => Un.characters.find((Pe) => Pe.avatar === we)).filter((we) => !!we);
          b(fe);
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
    It.getSettings()[U] = te, It.saveSettings(), n();
  }, R = (U, te) => {
    It.getSettings().contextToSend[U] = te, It.saveSettings(), n();
  }, P = ie.useCallback(
    async (U, te, ne = !1) => {
      const ue = structuredClone(f);
      ue[te] || (ue[te] = []);
      const re = ue[te].find((Se) => Se.uid === U.uid), pe = !!re;
      let je;
      if (pe) {
        const Se = (U.content || "") !== (re.content || ""), me = (U.comment || "") !== (re.comment || ""), fe = (U.key || []).slice().sort().join(",") !== (re.key || []).slice().sort().join(",");
        if (!Se && !me && !fe)
          return "unchanged";
        je = re;
      } else {
        const Se = { entries: Object.fromEntries(ue[te].map((fe) => [fe.uid, fe])) }, me = Wf(te, Se);
        if (!me) throw new Error("Failed to create new World Info entry.");
        je = me, ue[te].push(je);
      }
      if (Object.assign(je, { key: U.key, content: U.content, comment: U.comment }), m(ue), !ne) {
        const Se = { entries: Object.fromEntries(ue[te].map((me) => [me.uid, me])) };
        await Un.saveWorldInfo(te, Se), Un.reloadWorldInfoEditor(te, !0);
      }
      return pe ? "updated" : "added";
    },
    [f]
  ), O = ie.useCallback(
    async (U) => {
      if (!r.profileId) return ge("warning", "Please select a connection profile.");
      const te = U?.prompt ?? r.promptPresets[r.promptPreset].content;
      if (!U && !te)
        return ge("warning", "Please enter a prompt.");
      S(!0);
      try {
        const ne = Un.extensionSettings.connectionManager?.profiles?.find(
          (fe) => fe.id === r.profileId
        );
        if (!ne) throw new Error("Connection profile not found.");
        const ue = ul(), re = {
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
              const fe = r.contextToSend.messages.last ?? 10, we = Un.chat?.length ?? 0;
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
        const je = Object.values(s.suggestedEntries).some((fe) => fe.length > 0);
        (!r.contextToSend.suggestedEntries || !je) && delete pe.suggestedLorebooks, s.blackListedEntries.length === 0 && delete pe.blackListedEntries;
        const Se = U ? { worldName: U.worldName, entry: U.entry, mode: U.mode } : void 0, me = await V0({
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
          const we = structuredClone(fe.suggestedEntries), Pe = U.worldName, We = me[Pe]?.[0];
          if (we[Pe] && We) {
            const Fe = we[Pe].findIndex(
              (Rn) => Rn.uid === U.entry.uid && Rn.comment === U.entry.comment
            );
            Fe !== -1 && (we[Pe][Fe] = We);
          }
          return { ...fe, suggestedEntries: we };
        } : (fe) => {
          const we = structuredClone(fe.suggestedEntries);
          for (const [Pe, We] of Object.entries(me)) {
            we[Pe] || (we[Pe] = []);
            for (const Fe of We)
              we[Pe].some((Rn) => Rn.uid === Fe.uid && Rn.comment === Fe.comment) || we[Pe].push(Fe);
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
  ), z = ie.useCallback(
    async (U, te, ne) => {
      try {
        const ue = await P(U, ne);
        ue === "unchanged" ? ge("info", `No changes detected for "${U.comment}". Entry was not updated.`) : ge("success", ue === "added" ? "Entry added" : "Entry updated"), a((re) => {
          const pe = { ...re.suggestedEntries };
          return pe[te] && (pe[te] = pe[te].filter(
            (je) => !(je.uid === U.uid && je.comment === U.comment)
          )), { ...re, suggestedEntries: pe };
        });
      } catch (ue) {
        console.error(ue), ge("error", `Failed to add entry: ${ue.message}`);
      }
    },
    [P]
  ), q = async () => {
    const U = Object.values(s.suggestedEntries).flat().length;
    if (U === 0) return ge("warning", "No entries to add.");
    if (!await Un.Popup.show.confirm(
      "Add All",
      `Are you sure you want to add/update all ${U} suggested entries?`
    )) return;
    S(!0);
    let ne = 0, ue = 0, re = 0;
    const pe = /* @__PURE__ */ new Set(), je = [];
    Object.entries(s.suggestedEntries).forEach(([Se, me]) => {
      me.forEach((fe) => {
        const we = u.includes(Se) ? Se : u[0] ?? "";
        we && je.push({ worldName: we, entry: fe });
      });
    });
    for (const { worldName: Se, entry: me } of je)
      try {
        const fe = await P(me, Se, !0);
        fe === "added" ? ne++ : fe === "updated" ? ue++ : re++, fe !== "unchanged" && pe.add(Se);
      } catch {
        ge("error", `Failed to process entry: ${me.comment}`);
      }
    for (const Se of pe)
      try {
        const me = { entries: Object.fromEntries(f[Se].map((fe) => [fe.uid, fe])) };
        await Un.saveWorldInfo(Se, me), Un.reloadWorldInfoEditor(Se, !0);
      } catch {
        ge("error", `Failed to save world: ${Se}`);
      }
    a((Se) => ({ ...Se, suggestedEntries: {} })), ge("success", `Processed: ${ne} new, ${ue} updated, ${re} unchanged.`), S(!1);
  }, Y = async () => {
    await Un.Popup.show.confirm(
      "Reset",
      "Clear all suggestions and reset lorebook selection?"
    ) && (a((te) => ({
      ...te,
      suggestedEntries: {},
      blackListedEntries: [],
      selectedWorldNames: ul() ? [...u] : [],
      selectedEntryUids: {}
    })), ge("success", "Reset successful"));
  }, G = (U, te, ne) => {
    a((ue) => {
      const re = { ...ue };
      ne && (re.blackListedEntries = [...re.blackListedEntries, `${te} (${U.comment})`]);
      const pe = { ...re.suggestedEntries };
      return pe[te] && (pe[te] = pe[te].filter(
        (je) => !(je.uid === U.uid && je.comment === U.comment)
      )), re.suggestedEntries = pe, re;
    });
  }, W = (U, te, ne, ue) => {
    a((re) => {
      const pe = { ...re.suggestedEntries };
      if (pe[U]) {
        const Se = pe[U].findIndex(
          (me) => me.uid === te.uid && me.comment === te.comment
        );
        Se !== -1 && (pe[U][Se] = ne);
      }
      const je = { ...re, suggestedEntries: pe };
      return ue && (je.regexIds = ue), je;
    });
  }, j = ie.useCallback(
    (U) => {
      a((te) => {
        const ne = structuredClone(te.suggestedEntries);
        let ue = 0;
        for (const [re, pe] of Object.entries(U))
          if (f[re]) {
            ne[re] || (ne[re] = []);
            for (const je of pe) {
              if (ne[re].some((fe) => fe.uid === je)) continue;
              const me = f[re].find((fe) => fe.uid === je);
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
  }, [s.selectedWorldNames, f]), K = ie.useMemo(() => {
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
        const je = `${ue}::${pe.uid}`, Se = te.get(je);
        let me = !1;
        if (!Se)
          me = !0;
        else {
          const fe = (pe.content || "") !== (Se.content || ""), we = (pe.comment || "") !== (Se.comment || ""), Pe = (pe.key || []).slice().sort().join(",") !== (Se.key || []).slice().sort().join(",");
          (fe || we || Pe) && (me = !0);
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
  const $ = Object.entries(s.suggestedEntries).flatMap(
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
              Y0,
              {
                initialSelectedProfileId: r.profileId,
                onChange: (U) => k("profileId", U?.id)
              },
              r.profileId || "no-profile"
            )
          ] }),
          /* @__PURE__ */ A.jsx("div", { className: "card", children: /* @__PURE__ */ A.jsx(
            Xk,
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
                  F0,
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
              Lf,
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
              qn,
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
                onClick: () => O(),
                disabled: v,
                className: "menu_button interactable",
                style: { marginTop: "5px" },
                children: v ? "Generating..." : "Send Prompt"
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
                disabled: v || $.length === 0,
                className: "menu_button interactable",
                children: "Add All"
              }
            ),
            /* @__PURE__ */ A.jsxs(
              Ee,
              {
                onClick: () => L(!0),
                disabled: v,
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
                onClick: () => M(!0),
                disabled: v,
                className: "menu_button interactable",
                title: "Import existing entries to continue/revise them",
                children: "Import Entry"
              }
            ),
            /* @__PURE__ */ A.jsx(Ee, { onClick: Y, disabled: v, className: "menu_button interactable", children: "Reset" })
          ] }),
          /* @__PURE__ */ A.jsxs("div", { children: [
            $.length === 0 && /* @__PURE__ */ A.jsx("p", { children: "No suggestions yet. Send a prompt to get started!" }),
            $.map(({ worldName: U, entry: te }) => /* @__PURE__ */ A.jsx(
              Dk,
              {
                initialWorldName: U,
                entry: te,
                allWorldNames: u,
                existingEntry: f[U]?.find((ne) => ne.uid === te.uid),
                sessionRegexIds: s.regexIds,
                onAdd: z,
                onRemove: G,
                onContinue: O,
                onUpdate: W,
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
        type: Pt.CONFIRM,
        content: /* @__PURE__ */ A.jsx(
          r0,
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
        type: Pt.CONFIRM,
        content: /* @__PURE__ */ A.jsx(
          r0,
          {
            ref: y,
            entriesByWorldName: f,
            initialSelectedUids: {},
            title: "Select Entries to Import for Revision"
          }
        ),
        onComplete: (U) => {
          if (U && y.current) {
            const te = y.current.getSelection();
            j(te);
          }
          M(!1);
        },
        options: { wide: !0 }
      }
    ),
    T && /* @__PURE__ */ A.jsx(
      tr,
      {
        type: Pt.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          w_,
          {
            target: { type: "global" },
            initialState: K,
            onClose: () => L(!1),
            onApply: ae,
            sessionForContext: s,
            allEntries: f,
            contextToSend: r.contextToSend
          }
        ),
        onComplete: () => L(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, Qk = () => {
  const [n, r] = ie.useState(!1), [s, a] = ie.useState(null), u = () => {
    a(Bk()), r(!0);
  }, c = () => r(!1);
  return window.openWorldInfoRecommenderPopup = u, n ? /* @__PURE__ */ A.jsx(
    tr,
    {
      content: /* @__PURE__ */ A.jsx(Fk, {}),
      type: Pt.DISPLAY,
      onComplete: c,
      options: {
        large: !0,
        wide: !0,
        onClose: async () => {
          await Uk(s), a(null);
        }
      }
    }
  ) : null;
};
function Kk() {
  function n(r) {
    if (!r)
      return null;
    const s = [], a = Array.isArray(r) ? r : [r];
    for (const u of a) {
      let c = u.trim();
      c.startsWith("[") && c.endsWith("]") && (c = c.slice(1, -1));
      let f = "", m = !1, p = "";
      for (let b = 0; b < c.length; b++) {
        const g = c[b];
        g === '"' || g === "'" ? b > 0 && c[b - 1] === "\\" ? f = f.slice(0, -1) + g : m ? g === p ? (m = !1, f.trim() && s.push(f.trim()), f = "", p = "") : f += g : (m = !0, p = g) : g === "," && !m ? (f.trim() && s.push(f.trim()), f = "") : f += g;
      }
      f.trim() && s.push(f.trim());
    }
    return s;
  }
  Re.SlashCommandParser.addCommandObject(
    Re.SlashCommand.fromProps({
      name: "world-info-recommender-popup-open",
      helpString: "Open World Info Recommender popup",
      unnamedArgumentList: [],
      callback: async (r, s) => (window.openWorldInfoRecommenderPopup && window.openWorldInfoRecommenderPopup(), !1),
      returns: Re.ARGUMENT_TYPE.BOOLEAN
    })
  ), Re.SlashCommandParser.addCommandObject(
    Re.SlashCommand.fromProps({
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
      returns: Re.ARGUMENT_TYPE.BOOLEAN,
      namedArgumentList: [
        Re.SlashCommandNamedArgument.fromProps({
          name: "profile",
          description: "Connection Profile ID/name to use for the AI request.",
          typeList: [Re.ARGUMENT_TYPE.STRING],
          isRequired: !0,
          enumProvider: IS
        }),
        Re.SlashCommandNamedArgument.fromProps({
          name: "lorebooks",
          description: "List of lorebook names to include as context (defaults to active).",
          typeList: [Re.ARGUMENT_TYPE.LIST],
          isRequired: !1,
          acceptsMultiple: !0,
          enumProvider: u2.worlds
        }),
        Re.SlashCommandNamedArgument.fromProps({
          name: "allowed-ops",
          description: "Operations allowed: 'add', 'update'.",
          typeList: [Re.ARGUMENT_TYPE.LIST],
          isRequired: !1,
          defaultValue: "[add,update]",
          enumList: ["add", "update"]
        }),
        Re.SlashCommandNamedArgument.fromProps({
          name: "editable-entries",
          description: "Specific entries allowed for update: 'WorldName.Comment' or 'WorldName.UID' (comma-separated).",
          typeList: [Re.ARGUMENT_TYPE.STRING],
          isRequired: !1
        }),
        Re.SlashCommandNamedArgument.fromProps({
          name: "context",
          description: "Context parts: 'stDescription', 'messages', 'charCard', 'authorNote', 'worldInfo'.",
          typeList: [Re.ARGUMENT_TYPE.LIST],
          isRequired: !1,
          acceptsMultiple: !0,
          // Default is handled by falling back to settings
          enumList: ["stDescription", "messages", "charCard", "authorNote", "worldInfo"]
        }),
        Re.SlashCommandNamedArgument.fromProps({
          name: "messages",
          description: "Message range: 'all', 'none', 'first:N', 'last:N', 'range:S-E'.",
          typeList: [Re.ARGUMENT_TYPE.STRING],
          isRequired: !1
          // Default is handled by falling back to settings
        }),
        Re.SlashCommandNamedArgument.fromProps({
          name: "max-context",
          description: "Override context token limit.",
          typeList: [Re.ARGUMENT_TYPE.NUMBER],
          isRequired: !1
        }),
        Re.SlashCommandNamedArgument.fromProps({
          name: "max-response",
          description: "Override response token limit.",
          typeList: [Re.ARGUMENT_TYPE.NUMBER],
          isRequired: !1
        }),
        Re.SlashCommandNamedArgument.fromProps({
          name: "main-context-template",
          description: "Override main context template preset.",
          typeList: [Re.ARGUMENT_TYPE.STRING],
          isRequired: !1
        }),
        Re.SlashCommandNamedArgument.fromProps({
          name: "silent",
          description: "Suppress success/error messages.",
          typeList: [Re.ARGUMENT_TYPE.BOOLEAN],
          isRequired: !1,
          defaultValue: !1
        })
      ],
      unnamedArgumentList: [
        Re.SlashCommandArgument.fromProps({
          description: "The prompt/task for the AI.",
          typeList: [Re.ARGUMENT_TYPE.STRING],
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
          const p = Re.extensionSettings?.connectionManager?.profiles?.find(
            (B) => B.id === f || B.name === f
          );
          if (!p)
            throw new Error(`Profile with ID "${f}" not found.`);
          m = p.id;
          const b = n(r.lorebooks);
          let g;
          if (b !== null) {
            g = {};
            for (const B of b) {
              const K = await Re.loadWorldInfo(B);
              K && (g[B] = Object.values(K.entries));
            }
          } else
            g = await ml(["all"], !0, sn);
          const E = Object.keys(g);
          let v;
          if (b !== null) {
            if (v = b.map((B) => B.trim()).filter((B) => E.includes(B) ? !0 : (a || ge("warning", `Specified lorebook "${B}" is not active or does not exist. Ignoring.`), !1)), v.length === 0)
              throw new Error("No valid lorebooks specified or active.");
          } else
            v = E;
          v.length === 0 && (a || ge("warning", "No active lorebooks found to use for context."));
          const S = n(r["allowed-ops"]), h = S !== null ? S : ["add", "update"], C = h.includes("add"), x = h.includes("update"), M = /* @__PURE__ */ new Set(), T = n(r["editable-entries"]);
          T !== null && T.forEach((B) => {
            M.add(B.trim());
          });
          const L = M.size > 0, l = n(r.context), y = { ...u.contextToSend };
          if (l !== null) {
            const B = l.map((K) => K.trim());
            y.stDescription = B.includes("stdescription"), y.messages.type = B.includes("messages") ? y.messages.type : "none", y.charCard = B.includes("charcard"), y.authorNote = B.includes("authornote"), y.worldInfo = B.includes("worldinfo"), y.suggestedEntries = !1;
          }
          if (r.messages && y.messages.type !== "none") {
            const B = r.messages.toLowerCase().trim();
            if (B === "all") y.messages.type = "all";
            else if (B === "none") y.messages.type = "none";
            else if (B.startsWith("first:"))
              y.messages.type = "first", y.messages.first = parseInt(B.split(":")[1]) || 10;
            else if (B.startsWith("last:"))
              y.messages.type = "last", y.messages.last = parseInt(B.split(":")[1]) || 10;
            else if (B.startsWith("range:")) {
              const K = B.split(":")[1].split("-");
              y.messages.type = "range", y.messages.range = {
                start: parseInt(K[0]) || 0,
                end: parseInt(K[1]) || 10
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
            ignoreCharacterFields: !y.charCard,
            ignoreWorldInfo: !0,
            // Handled manually inside runWorldInfoRecommendation
            ignoreAuthorNote: !y.authorNote,
            maxContext: r["max-context"] ?? (u.maxContextType === "custom" ? u.maxContextValue : u.maxContextType === "profile" ? "preset" : "active"),
            includeNames: !!Ft,
            targetCharacterId: Ft ? sn : void 0
            // Simplification: Use current char in group context
          };
          switch (y.messages.type) {
            case "none":
              w.messageIndexesBetween = { start: -1, end: -1 };
              break;
            case "first":
              w.messageIndexesBetween = { start: 0, end: y.messages.first ?? 10 };
              break;
            case "last":
              const B = y.messages.last ?? 10, K = Re.chat?.length ?? 0;
              w.messageIndexesBetween = {
                end: Math.max(0, K - 1),
                start: Math.max(0, K - B)
              };
              break;
            case "range":
              y.messages.range && (w.messageIndexesBetween = {
                start: y.messages.range.start,
                end: y.messages.range.end
              });
              break;
            case "all":
            default:
              break;
          }
          const k = {
            selectedWorldNames: v,
            suggestedEntries: {},
            // Start with no pre-existing suggestions
            blackListedEntries: [],
            // Start with no blacklist
            regexIds: {},
            // Start with no regexes
            selectedEntryUids: {}
          }, R = r["max-response"] ? parseInt(r["max-response"]) : void 0, P = structuredClone(u.prompts);
          y.stDescription || delete P.stDescription, (!y.worldInfo || v.length === 0) && delete P.currentLorebooks, delete P.suggestedLorebooks;
          const O = {
            profileId: m,
            userPrompt: c,
            buildPromptOptions: w,
            session: k,
            entriesGroupByWorldName: g,
            // Pass the current state
            promptSettings: P,
            mainContextList: u.mainContextTemplatePresets[r["main-context-template"] ?? u.mainContextTemplatePreset].prompts.filter((B) => B.enabled).map((B) => ({
              promptName: B.promptName,
              role: B.role
            })),
            maxResponseToken: R ?? u.maxResponseToken
          };
          a || ge("info", "Running World Info Recommender...");
          const z = await V0(O);
          if (Object.keys(z).length === 0)
            return a || ge("info", "AI returned no suggestions."), !0;
          let q = 0, Y = 0, G = 0;
          const W = /* @__PURE__ */ new Set(), j = structuredClone(g);
          for (const [B, K] of Object.entries(z)) {
            let ae = B;
            if (!v.includes(ae))
              if (E.includes(ae)) {
                a || ge(
                  "warning",
                  `AI suggested entry for "${ae}", but it wasn't in the specified 'lorebooks'. Skipping ${K.length} entries.`
                ), G += K.length;
                continue;
              } else if (v.length > 0)
                ae = v[0], a || ge(
                  "warning",
                  `AI suggested entry for non-existent/inactive world "${B}". Attempting to place in "${ae}".`
                );
              else {
                a || ge(
                  "error",
                  `AI suggested entry for "${B}", but no valid target lorebook available. Skipping ${K.length} entries.`
                ), G += K.length;
                continue;
              }
            for (const I of K) {
              if (j[ae]?.some(
                (ce) => ce.uid === I.uid && ce.comment === I.comment
              )) {
                if (!x) {
                  a || ge(
                    "info",
                    `Skipping update for "${ae}.${I.comment || I.uid}" (updates disallowed).`
                  ), G++;
                  continue;
                }
                if (L) {
                  const ce = `${ae}.${I.comment}`, $ = `${ae}.${I.uid}`;
                  if (!M.has(ce) && !M.has($)) {
                    a || ge(
                      "info",
                      `Skipping update for "${ae}.${I.comment || I.uid}" (not in editable-entries).`
                    ), G++;
                    continue;
                  }
                }
              } else if (!C) {
                a || ge(
                  "info",
                  `Skipping add for "${ae}.${I.comment || "New Entry"}" (adds disallowed).`
                ), G++;
                continue;
              }
              try {
                const { status: ce } = PS(I, ae, j);
                ce === "added" ? q++ : Y++, W.add(ae);
              } catch (ce) {
                a || ge(
                  "error",
                  `Failed to prepare modification for "${ae}.${I.comment || I.uid}": ${ce.message}`
                ), G++;
              }
            }
          }
          if (W.size > 0) {
            a || ge("info", `Saving changes to ${W.size} lorebook(s)...`);
            for (const B of W) {
              const K = j[B], ae = { entries: {} };
              K.forEach((I) => ae.entries[I.uid] = I), await Re.saveWorldInfo(B, ae), Re.reloadWorldInfoEditor(B, !0);
            }
          }
          if (!a) {
            const B = [];
            (q > 0 || Y > 0 || G > 0) && B.push(`
                <div class="results-summary">
                  <ul>
                  <li><strong>Added:</strong> ${q}</li>
                  <li><strong>Updated:</strong> ${Y}</li>
                  <li><strong>Skipped:</strong> ${G}</li>
                  </ul>
                </div>
                `), W.size > 0 && B.push(`
                <div class="modified-worlds">
                  <strong>Modified Lorebooks:</strong>
                  <ul>
                  ${Array.from(W).map((ae) => `<li>${ae}</li>`).join("")}
                  </ul>
                </div>
                `);
            const K = B.length > 0 ? `
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
            ge("success", K, { escapeHtml: !1 });
          }
          return !0;
        } catch (u) {
          return console.error("Error running world-info-recommender-run command:", u), a || ge("error", `World Info Recommender command failed: ${u.message}`), !1;
        }
      }
    })
  );
}
const Jk = `<div class="worldInfoRecommender_settings">
    <div class="inline-drawer">
        <div class="inline-drawer-toggle inline-drawer-header">
            <b>World Info Recommender</b>
            <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
        </div>
        <div class="inline-drawer-content"></div>
    </div>
</div>
`, ll = SillyTavern.getContext();
async function Wk() {
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", Jk);
  const n = document.createElement("div"), r = document.querySelector(
    ".worldInfoRecommender_settings .inline-drawer-content"
  );
  r && (r.prepend(n), bv.createRoot(n).render(
    /* @__PURE__ */ A.jsx(vl.StrictMode, { children: /* @__PURE__ */ A.jsx(YS, {}) })
  ));
  const s = '<div class="menu_button fa-brands fa-wpexplorer interactable worldInfoRecommender-icon" title="World Info Recommender"></div>', a = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], u = document.createElement("div");
  document.body.appendChild(u), bv.createRoot(u).render(
    /* @__PURE__ */ A.jsx(vl.StrictMode, { children: /* @__PURE__ */ A.jsx(Qk, {}) })
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
function eA() {
  return !(!ll.ConnectionManagerRequestService || !ll.getCharacterCardFields || !ll.getWorldInfoPrompt || !ll.reloadWorldInfoEditor);
}
eA() ? qS().then(() => {
  Wk(), Kk();
}) : ge("error", `[${Ks}] Make sure ST is updated.`);
export {
  Wk as init
};
