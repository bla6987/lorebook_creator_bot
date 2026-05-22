import { renderStoryString as U1, persona_description_positions as uv } from "../../../../power-user.js";
import { parseMesExamples as H1, baseChatReplace as q1, chat_metadata as Ps, getMaxContextSize as Z1, name1 as Ea, name2 as Fr, this_chid as sn, extension_prompt_types as Ca, depth_prompt_role_default as G1, depth_prompt_depth_default as V1, amount_gen as $1, max_context as Y1 } from "../../../../../script.js";
import { createWorldInfoEntry as X1, world_info_include_names as F1, wi_anchor_position as Q1, selected_world_info as K1, METADATA_KEY as J1, world_info as W1, world_names as e2 } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as t2, formatInstructModeSystemPrompt as n2 } from "../../../../instruct-mode.js";
import { appendFileContent as r2 } from "../../../../chats.js";
import { setOpenAIMessages as a2, setOpenAIMessageExamples as i2, formatWorldInfo as s2, getPromptPosition as o2, getPromptRole as u2, prepareOpenAIMessages as l2, model_list as c2 } from "../../../../openai.js";
import { metadata_keys as Ls } from "../../../../authors-note.js";
import { getGroupDepthPrompts as d2, selected_group as Ft, groups as lv } from "../../../../group-chats.js";
import { runRegexScript as f2, getRegexedString as h2, regex_placement as cv } from "../../../regex/engine.js";
import { getCharaFilename as p2, removeFromArray as dv, runAfterAnimation as m2 } from "../../../../utils.js";
import { commonEnumProviders as g2 } from "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as xi, fixToastrForDialogs as Qd } from "../../../../popup.js";
import fv from "../../../../../lib/dialog-polyfill.esm.js";
import { openRouterModels as v2 } from "../../../../textgen-models.js";
function Wf(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Kd = { exports: {} }, Is = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hv;
function y2() {
  if (hv) return Is;
  hv = 1;
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
  return Is.Fragment = r, Is.jsx = s, Is.jsxs = s, Is;
}
var pv;
function _2() {
  return pv || (pv = 1, Kd.exports = y2()), Kd.exports;
}
var A = _2(), Jd = { exports: {} }, De = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mv;
function b2() {
  if (mv) return De;
  mv = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), f = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), _ = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), E = Symbol.iterator;
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
  function O() {
  }
  O.prototype = x.prototype;
  function T(I, X, ce) {
    this.props = I, this.context = X, this.refs = C, this.updater = ce || S;
  }
  var P = T.prototype = new O();
  P.constructor = T, h(P, x.prototype), P.isPureReactComponent = !0;
  var l = Array.isArray, y = { H: null, A: null, T: null, S: null, V: null }, w = Object.prototype.hasOwnProperty;
  function k(I, X, ce, Y, U, te) {
    return ce = te.ref, {
      $$typeof: t,
      type: I,
      key: X,
      ref: ce !== void 0 ? ce : null,
      props: te
    };
  }
  function j(I, X) {
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
  function R(I) {
    var X = { "=": "=0", ":": "=2" };
    return "$" + I.replace(/[=:]/g, function(ce) {
      return X[ce];
    });
  }
  var D = /\/+/g;
  function q(I, X) {
    return typeof I == "object" && I !== null && I.key != null ? R("" + I.key) : X.toString(36);
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
      })) : U != null && (L(U) && (U = j(
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
    else if (re = v(I), typeof re == "function")
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
      $$typeof: _,
      type: I,
      compare: X === void 0 ? null : X
    };
  }, De.startTransition = function(I) {
    var X = y.T, ce = {};
    y.T = ce;
    try {
      var Y = I(), U = y.S;
      U !== null && U(ce, Y), typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(ae, J);
    } catch (te) {
      J(te);
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
    var Y = y.H;
    if (typeof ce == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return Y.useEffect(I, X);
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
var gv;
function eh() {
  return gv || (gv = 1, Jd.exports = b2()), Jd.exports;
}
var ie = eh();
const _l = /* @__PURE__ */ Wf(ie);
var Wd = { exports: {} }, Bs = {}, ef = { exports: {} }, tf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vv;
function S2() {
  return vv || (vv = 1, (function(t) {
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
    var p = [], _ = [], g = 1, E = null, v = 3, S = !1, h = !1, C = !1, x = !1, O = typeof setTimeout == "function" ? setTimeout : null, T = typeof clearTimeout == "function" ? clearTimeout : null, P = typeof setImmediate < "u" ? setImmediate : null;
    function l(M) {
      for (var B = s(_); B !== null; ) {
        if (B.callback === null) a(_);
        else if (B.startTime <= M)
          a(_), B.sortIndex = B.expirationTime, r(p, B);
        else break;
        B = s(_);
      }
    }
    function y(M) {
      if (C = !1, l(M), !h)
        if (s(p) !== null)
          h = !0, w || (w = !0, q());
        else {
          var B = s(_);
          B !== null && K(y, B.startTime - M);
        }
    }
    var w = !1, k = -1, j = 5, L = -1;
    function R() {
      return x ? !0 : !(t.unstable_now() - L < j);
    }
    function D() {
      if (x = !1, w) {
        var M = t.unstable_now();
        L = M;
        var B = !0;
        try {
          e: {
            h = !1, C && (C = !1, T(k), k = -1), S = !0;
            var J = v;
            try {
              t: {
                for (l(M), E = s(p); E !== null && !(E.expirationTime > M && R()); ) {
                  var ae = E.callback;
                  if (typeof ae == "function") {
                    E.callback = null, v = E.priorityLevel;
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
                  var X = s(_);
                  X !== null && K(
                    y,
                    X.startTime - M
                  ), B = !1;
                }
              }
              break e;
            } finally {
              E = null, v = J, S = !1;
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
      ) : j = 0 < M ? Math.floor(1e3 / M) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return v;
    }, t.unstable_next = function(M) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = v;
      }
      var J = v;
      v = B;
      try {
        return M();
      } finally {
        v = J;
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
      var J = v;
      v = M;
      try {
        return B();
      } finally {
        v = J;
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
      }, J > ae ? (M.sortIndex = J, r(_, M), s(p) === null && M === s(_) && (C ? (T(k), k = -1) : C = !0, K(y, J - ae))) : (M.sortIndex = I, r(p, M), h || S || (h = !0, w || (w = !0, q()))), M;
    }, t.unstable_shouldYield = R, t.unstable_wrapCallback = function(M) {
      var B = v;
      return function() {
        var J = v;
        v = B;
        try {
          return M.apply(this, arguments);
        } finally {
          v = J;
        }
      };
    };
  })(tf)), tf;
}
var yv;
function w2() {
  return yv || (yv = 1, ef.exports = S2()), ef.exports;
}
var nf = { exports: {} }, Ht = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _v;
function E2() {
  if (_v) return Ht;
  _v = 1;
  var t = eh();
  function r(p) {
    var _ = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      _ += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        _ += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return "Minified React error #" + p + "; visit " + _ + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function c(p, _, g) {
    var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: E == null ? null : "" + E,
      children: p,
      containerInfo: _,
      implementation: g
    };
  }
  var f = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(p, _) {
    if (p === "font") return "";
    if (typeof _ == "string")
      return _ === "use-credentials" ? _ : "";
  }
  return Ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a, Ht.createPortal = function(p, _) {
    var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!_ || _.nodeType !== 1 && _.nodeType !== 9 && _.nodeType !== 11)
      throw Error(r(299));
    return c(p, _, null, g);
  }, Ht.flushSync = function(p) {
    var _ = f.T, g = a.p;
    try {
      if (f.T = null, a.p = 2, p) return p();
    } finally {
      f.T = _, a.p = g, a.d.f();
    }
  }, Ht.preconnect = function(p, _) {
    typeof p == "string" && (_ ? (_ = _.crossOrigin, _ = typeof _ == "string" ? _ === "use-credentials" ? _ : "" : void 0) : _ = null, a.d.C(p, _));
  }, Ht.prefetchDNS = function(p) {
    typeof p == "string" && a.d.D(p);
  }, Ht.preinit = function(p, _) {
    if (typeof p == "string" && _ && typeof _.as == "string") {
      var g = _.as, E = m(g, _.crossOrigin), v = typeof _.integrity == "string" ? _.integrity : void 0, S = typeof _.fetchPriority == "string" ? _.fetchPriority : void 0;
      g === "style" ? a.d.S(
        p,
        typeof _.precedence == "string" ? _.precedence : void 0,
        {
          crossOrigin: E,
          integrity: v,
          fetchPriority: S
        }
      ) : g === "script" && a.d.X(p, {
        crossOrigin: E,
        integrity: v,
        fetchPriority: S,
        nonce: typeof _.nonce == "string" ? _.nonce : void 0
      });
    }
  }, Ht.preinitModule = function(p, _) {
    if (typeof p == "string")
      if (typeof _ == "object" && _ !== null) {
        if (_.as == null || _.as === "script") {
          var g = m(
            _.as,
            _.crossOrigin
          );
          a.d.M(p, {
            crossOrigin: g,
            integrity: typeof _.integrity == "string" ? _.integrity : void 0,
            nonce: typeof _.nonce == "string" ? _.nonce : void 0
          });
        }
      } else _ == null && a.d.M(p);
  }, Ht.preload = function(p, _) {
    if (typeof p == "string" && typeof _ == "object" && _ !== null && typeof _.as == "string") {
      var g = _.as, E = m(g, _.crossOrigin);
      a.d.L(p, g, {
        crossOrigin: E,
        integrity: typeof _.integrity == "string" ? _.integrity : void 0,
        nonce: typeof _.nonce == "string" ? _.nonce : void 0,
        type: typeof _.type == "string" ? _.type : void 0,
        fetchPriority: typeof _.fetchPriority == "string" ? _.fetchPriority : void 0,
        referrerPolicy: typeof _.referrerPolicy == "string" ? _.referrerPolicy : void 0,
        imageSrcSet: typeof _.imageSrcSet == "string" ? _.imageSrcSet : void 0,
        imageSizes: typeof _.imageSizes == "string" ? _.imageSizes : void 0,
        media: typeof _.media == "string" ? _.media : void 0
      });
    }
  }, Ht.preloadModule = function(p, _) {
    if (typeof p == "string")
      if (_) {
        var g = m(_.as, _.crossOrigin);
        a.d.m(p, {
          as: typeof _.as == "string" && _.as !== "script" ? _.as : void 0,
          crossOrigin: g,
          integrity: typeof _.integrity == "string" ? _.integrity : void 0
        });
      } else a.d.m(p);
  }, Ht.requestFormReset = function(p) {
    a.d.r(p);
  }, Ht.unstable_batchedUpdates = function(p, _) {
    return p(_);
  }, Ht.useFormState = function(p, _, g) {
    return f.H.useFormState(p, _, g);
  }, Ht.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, Ht.version = "19.1.1", Ht;
}
var bv;
function u0() {
  if (bv) return nf.exports;
  bv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), nf.exports = E2(), nf.exports;
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
var Sv;
function C2() {
  if (Sv) return Bs;
  Sv = 1;
  var t = w2(), r = eh(), s = u0();
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
  function _(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (n = _(e), n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var g = Object.assign, E = Symbol.for("react.element"), v = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), T = Symbol.for("react.consumer"), P = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), L = Symbol.for("react.activity"), R = Symbol.for("react.memo_cache_sentinel"), D = Symbol.iterator;
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
      case y:
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
        case j:
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
        e = (e = n.documentElement) && (e = e.namespaceURI) ? Pg(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI)
          n = Pg(n), e = Lg(n, e);
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
  function je(e) {
    e.memoizedState !== null && Y(ue, e);
    var n = U.current, i = Lg(n, e.type);
    n !== i && (Y(te, e), Y(U, i));
  }
  function Se(e) {
    te.current === e && (ce(U), ce(te)), ue.current === e && (ce(ue), Ms._currentValue = J);
  }
  var me = Object.prototype.hasOwnProperty, fe = t.unstable_scheduleCallback, we = t.unstable_cancelCallback, Le = t.unstable_shouldYield, We = t.unstable_requestPaint, Fe = t.unstable_now, Rn = t.unstable_getCurrentPriorityLevel, dt = t.unstable_ImmediatePriority, ye = t.unstable_UserBlockingPriority, _e = t.unstable_NormalPriority, qe = t.unstable_LowPriority, Ze = t.unstable_IdlePriority, et = t.log, Vn = t.unstable_setDisableYieldValue, Dn = null, mt = null;
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
    return z !== 0 ? (o = z & ~b, o !== 0 ? d = Sn(o) : (N &= z, N !== 0 ? d = Sn(N) : i || (i = z & ~e, i !== 0 && (d = Sn(i))))) : (z = o & ~b, z !== 0 ? d = Sn(z) : N !== 0 ? d = Sn(N) : i || (i = o & ~e, i !== 0 && (d = Sn(i)))), d === 0 ? 0 : n !== 0 && n !== d && (n & b) === 0 && (b = d & -d, i = n & -n, b >= i || b === 32 && (i & 4194048) !== 0) ? n : d;
  }
  function Qt(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function po(e, n) {
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
  function Ha() {
    var e = ar;
    return ar <<= 1, (ar & 4194048) === 0 && (ar = 256), e;
  }
  function bh() {
    var e = Yn;
    return Yn <<= 1, (Yn & 62914560) === 0 && (Yn = 4194304), e;
  }
  function Bl(e) {
    for (var n = [], i = 0; 31 > i; i++) n.push(e);
    return n;
  }
  function Hi(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function T_(e, n, i, o, d, b) {
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
    o !== 0 && Sh(e, o, 0), b !== 0 && d === 0 && e.tag !== 0 && (e.suspendedLanes |= b & ~(N & ~n));
  }
  function Sh(e, n, i) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var o = 31 - Gt(n);
    e.entangledLanes |= n, e.entanglements[o] = e.entanglements[o] | 1073741824 | i & 4194090;
  }
  function wh(e, n) {
    var i = e.entangledLanes |= n;
    for (e = e.entanglements; i; ) {
      var o = 31 - Gt(i), d = 1 << o;
      d & n | e[o] & n && (e[o] |= n), i &= ~d;
    }
  }
  function Ul(e) {
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
  function Hl(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Eh() {
    var e = B.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : nv(e.type));
  }
  function N_(e, n) {
    var i = B.p;
    try {
      return B.p = e, n();
    } finally {
      B.p = i;
    }
  }
  var Ar = Math.random().toString(36).slice(2), Bt = "__reactFiber$" + Ar, Kt = "__reactProps$" + Ar, qa = "__reactContainer$" + Ar, ql = "__reactEvents$" + Ar, O_ = "__reactListeners$" + Ar, M_ = "__reactHandles$" + Ar, Ch = "__reactResources$" + Ar, qi = "__reactMarker$" + Ar;
  function Zl(e) {
    delete e[Bt], delete e[Kt], delete e[ql], delete e[O_], delete e[M_];
  }
  function Za(e) {
    var n = e[Bt];
    if (n) return n;
    for (var i = e.parentNode; i; ) {
      if (n = i[qa] || i[Bt]) {
        if (i = n.alternate, n.child !== null || i !== null && i.child !== null)
          for (e = Hg(e); e !== null; ) {
            if (i = e[Bt]) return i;
            e = Hg(e);
          }
        return n;
      }
      e = i, i = e.parentNode;
    }
    return null;
  }
  function Ga(e) {
    if (e = e[Bt] || e[qa]) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function Zi(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(a(33));
  }
  function Va(e) {
    var n = e[Ch];
    return n || (n = e[Ch] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function xt(e) {
    e[qi] = !0;
  }
  var kh = /* @__PURE__ */ new Set(), Ah = {};
  function sa(e, n) {
    $a(e, n), $a(e + "Capture", n);
  }
  function $a(e, n) {
    for (Ah[e] = n, e = 0; e < n.length; e++)
      kh.add(n[e]);
  }
  var j_ = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), xh = {}, Th = {};
  function R_(e) {
    return me.call(Th, e) ? !0 : me.call(xh, e) ? !1 : j_.test(e) ? Th[e] = !0 : (xh[e] = !0, !1);
  }
  function mo(e, n, i) {
    if (R_(n))
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
  function go(e, n, i) {
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
  var Gl, Nh;
  function Ya(e) {
    if (Gl === void 0)
      try {
        throw Error();
      } catch (i) {
        var n = i.stack.trim().match(/\n( *(at )?)/);
        Gl = n && n[1] || "", Nh = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Gl + e + Nh;
  }
  var Vl = !1;
  function $l(e, n) {
    if (!e || Vl) return "";
    Vl = !0;
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
      Vl = !1, Error.prepareStackTrace = i;
    }
    return (i = e ? e.displayName || e.name : "") ? Ya(i) : "";
  }
  function D_(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ya(e.type);
      case 16:
        return Ya("Lazy");
      case 13:
        return Ya("Suspense");
      case 19:
        return Ya("SuspenseList");
      case 0:
      case 15:
        return $l(e.type, !1);
      case 11:
        return $l(e.type.render, !1);
      case 1:
        return $l(e.type, !0);
      case 31:
        return Ya("Activity");
      default:
        return "";
    }
  }
  function Oh(e) {
    try {
      var n = "";
      do
        n += D_(e), e = e.return;
      while (e);
      return n;
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
  function Mh(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function z_(e) {
    var n = Mh(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(
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
  function vo(e) {
    e._valueTracker || (e._valueTracker = z_(e));
  }
  function jh(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var i = n.getValue(), o = "";
    return e && (o = Mh(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== i ? (n.setValue(e), !0) : !1;
  }
  function yo(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var P_ = /[\n"\\]/g;
  function En(e) {
    return e.replace(
      P_,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Yl(e, n, i, o, d, b, N, z) {
    e.name = "", N != null && typeof N != "function" && typeof N != "symbol" && typeof N != "boolean" ? e.type = N : e.removeAttribute("type"), n != null ? N === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + wn(n)) : e.value !== "" + wn(n) && (e.value = "" + wn(n)) : N !== "submit" && N !== "reset" || e.removeAttribute("value"), n != null ? Xl(e, N, wn(n)) : i != null ? Xl(e, N, wn(i)) : o != null && e.removeAttribute("value"), d == null && b != null && (e.defaultChecked = !!b), d != null && (e.checked = d && typeof d != "function" && typeof d != "symbol"), z != null && typeof z != "function" && typeof z != "symbol" && typeof z != "boolean" ? e.name = "" + wn(z) : e.removeAttribute("name");
  }
  function Rh(e, n, i, o, d, b, N, z) {
    if (b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" && (e.type = b), n != null || i != null) {
      if (!(b !== "submit" && b !== "reset" || n != null))
        return;
      i = i != null ? "" + wn(i) : "", n = n != null ? "" + wn(n) : i, z || n === e.value || (e.value = n), e.defaultValue = n;
    }
    o = o ?? d, o = typeof o != "function" && typeof o != "symbol" && !!o, e.checked = z ? e.checked : !!o, e.defaultChecked = !!o, N != null && typeof N != "function" && typeof N != "symbol" && typeof N != "boolean" && (e.name = N);
  }
  function Xl(e, n, i) {
    n === "number" && yo(e.ownerDocument) === e || e.defaultValue === "" + i || (e.defaultValue = "" + i);
  }
  function Xa(e, n, i, o) {
    if (e = e.options, n) {
      n = {};
      for (var d = 0; d < i.length; d++)
        n["$" + i[d]] = !0;
      for (i = 0; i < e.length; i++)
        d = n.hasOwnProperty("$" + e[i].value), e[i].selected !== d && (e[i].selected = d), d && o && (e[i].defaultSelected = !0);
    } else {
      for (i = "" + wn(i), n = null, d = 0; d < e.length; d++) {
        if (e[d].value === i) {
          e[d].selected = !0, o && (e[d].defaultSelected = !0);
          return;
        }
        n !== null || e[d].disabled || (n = e[d]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Dh(e, n, i) {
    if (n != null && (n = "" + wn(n), n !== e.value && (e.value = n), i == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = i != null ? "" + wn(i) : "";
  }
  function zh(e, n, i, o) {
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
    i = wn(n), e.defaultValue = i, o = e.textContent, o === i && o !== "" && o !== null && (e.value = o);
  }
  function Fa(e, n) {
    if (n) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var L_ = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ph(e, n, i) {
    var o = n.indexOf("--") === 0;
    i == null || typeof i == "boolean" || i === "" ? o ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : o ? e.setProperty(n, i) : typeof i != "number" || i === 0 || L_.has(n) ? n === "float" ? e.cssFloat = i : e[n] = ("" + i).trim() : e[n] = i + "px";
  }
  function Lh(e, n, i) {
    if (n != null && typeof n != "object")
      throw Error(a(62));
    if (e = e.style, i != null) {
      for (var o in i)
        !i.hasOwnProperty(o) || n != null && n.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e.setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "");
      for (var d in n)
        o = n[d], n.hasOwnProperty(d) && i[d] !== o && Ph(e, d, o);
    } else
      for (var b in n)
        n.hasOwnProperty(b) && Ph(e, b, n[b]);
  }
  function Fl(e) {
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
  var I_ = /* @__PURE__ */ new Map([
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
  ]), B_ = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function _o(e) {
    return B_.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Ql = null;
  function Kl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Qa = null, Ka = null;
  function Ih(e) {
    var n = Ga(e);
    if (n && (e = n.stateNode)) {
      var i = e[Kt] || null;
      e: switch (e = n.stateNode, n.type) {
        case "input":
          if (Yl(
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
              'input[name="' + En(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < i.length; n++) {
              var o = i[n];
              if (o !== e && o.form === e.form) {
                var d = o[Kt] || null;
                if (!d) throw Error(a(90));
                Yl(
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
              o = i[n], o.form === e.form && jh(o);
          }
          break e;
        case "textarea":
          Dh(e, i.value, i.defaultValue);
          break e;
        case "select":
          n = i.value, n != null && Xa(e, !!i.multiple, n, !1);
      }
    }
  }
  var Jl = !1;
  function Bh(e, n, i) {
    if (Jl) return e(n, i);
    Jl = !0;
    try {
      var o = e(n);
      return o;
    } finally {
      if (Jl = !1, (Qa !== null || Ka !== null) && (au(), Qa && (n = Qa, e = Ka, Ka = Qa = null, Ih(n), e)))
        for (n = 0; n < e.length; n++) Ih(e[n]);
    }
  }
  function Gi(e, n) {
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
  var sr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Wl = !1;
  if (sr)
    try {
      var Vi = {};
      Object.defineProperty(Vi, "passive", {
        get: function() {
          Wl = !0;
        }
      }), window.addEventListener("test", Vi, Vi), window.removeEventListener("test", Vi, Vi);
    } catch {
      Wl = !1;
    }
  var xr = null, ec = null, bo = null;
  function Uh() {
    if (bo) return bo;
    var e, n = ec, i = n.length, o, d = "value" in xr ? xr.value : xr.textContent, b = d.length;
    for (e = 0; e < i && n[e] === d[e]; e++) ;
    var N = i - e;
    for (o = 1; o <= N && n[i - o] === d[b - o]; o++) ;
    return bo = d.slice(e, 1 < o ? 1 - o : void 0);
  }
  function So(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function wo() {
    return !0;
  }
  function Hh() {
    return !1;
  }
  function Jt(e) {
    function n(i, o, d, b, N) {
      this._reactName = i, this._targetInst = d, this.type = o, this.nativeEvent = b, this.target = N, this.currentTarget = null;
      for (var z in e)
        e.hasOwnProperty(z) && (i = e[z], this[z] = i ? i(b) : b[z]);
      return this.isDefaultPrevented = (b.defaultPrevented != null ? b.defaultPrevented : b.returnValue === !1) ? wo : Hh, this.isPropagationStopped = Hh, this;
    }
    return g(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var i = this.nativeEvent;
        i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = wo);
      },
      stopPropagation: function() {
        var i = this.nativeEvent;
        i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = wo);
      },
      persist: function() {
      },
      isPersistent: wo
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
  }, Eo = Jt(oa), $i = g({}, oa, { view: 0, detail: 0 }), U_ = Jt($i), tc, nc, Yi, Co = g({}, $i, {
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
    getModifierState: ac,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Yi && (Yi && e.type === "mousemove" ? (tc = e.screenX - Yi.screenX, nc = e.screenY - Yi.screenY) : nc = tc = 0, Yi = e), tc);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : nc;
    }
  }), qh = Jt(Co), H_ = g({}, Co, { dataTransfer: 0 }), q_ = Jt(H_), Z_ = g({}, $i, { relatedTarget: 0 }), rc = Jt(Z_), G_ = g({}, oa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), V_ = Jt(G_), $_ = g({}, oa, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Y_ = Jt($_), X_ = g({}, oa, { data: 0 }), Zh = Jt(X_), F_ = {
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
  }, Q_ = {
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
  }, K_ = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function J_(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = K_[e]) ? !!n[e] : !1;
  }
  function ac() {
    return J_;
  }
  var W_ = g({}, $i, {
    key: function(e) {
      if (e.key) {
        var n = F_[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? (e = So(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Q_[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ac,
    charCode: function(e) {
      return e.type === "keypress" ? So(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? So(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), eb = Jt(W_), tb = g({}, Co, {
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
  }), Gh = Jt(tb), nb = g({}, $i, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ac
  }), rb = Jt(nb), ab = g({}, oa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ib = Jt(ab), sb = g({}, Co, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ob = Jt(sb), ub = g({}, oa, {
    newState: 0,
    oldState: 0
  }), lb = Jt(ub), cb = [9, 13, 27, 32], ic = sr && "CompositionEvent" in window, Xi = null;
  sr && "documentMode" in document && (Xi = document.documentMode);
  var db = sr && "TextEvent" in window && !Xi, Vh = sr && (!ic || Xi && 8 < Xi && 11 >= Xi), $h = " ", Yh = !1;
  function Xh(e, n) {
    switch (e) {
      case "keyup":
        return cb.indexOf(n.keyCode) !== -1;
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
  function Fh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ja = !1;
  function fb(e, n) {
    switch (e) {
      case "compositionend":
        return Fh(n);
      case "keypress":
        return n.which !== 32 ? null : (Yh = !0, $h);
      case "textInput":
        return e = n.data, e === $h && Yh ? null : e;
      default:
        return null;
    }
  }
  function hb(e, n) {
    if (Ja)
      return e === "compositionend" || !ic && Xh(e, n) ? (e = Uh(), bo = ec = xr = null, Ja = !1, e) : null;
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
        return Vh && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var pb = {
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
  function Qh(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!pb[e.type] : n === "textarea";
  }
  function Kh(e, n, i, o) {
    Qa ? Ka ? Ka.push(o) : Ka = [o] : Qa = o, n = cu(n, "onChange"), 0 < n.length && (i = new Eo(
      "onChange",
      "change",
      null,
      i,
      o
    ), e.push({ event: i, listeners: n }));
  }
  var Fi = null, Qi = null;
  function mb(e) {
    Mg(e, 0);
  }
  function ko(e) {
    var n = Zi(e);
    if (jh(n)) return e;
  }
  function Jh(e, n) {
    if (e === "change") return n;
  }
  var Wh = !1;
  if (sr) {
    var sc;
    if (sr) {
      var oc = "oninput" in document;
      if (!oc) {
        var ep = document.createElement("div");
        ep.setAttribute("oninput", "return;"), oc = typeof ep.oninput == "function";
      }
      sc = oc;
    } else sc = !1;
    Wh = sc && (!document.documentMode || 9 < document.documentMode);
  }
  function tp() {
    Fi && (Fi.detachEvent("onpropertychange", np), Qi = Fi = null);
  }
  function np(e) {
    if (e.propertyName === "value" && ko(Qi)) {
      var n = [];
      Kh(
        n,
        Qi,
        e,
        Kl(e)
      ), Bh(mb, n);
    }
  }
  function gb(e, n, i) {
    e === "focusin" ? (tp(), Fi = n, Qi = i, Fi.attachEvent("onpropertychange", np)) : e === "focusout" && tp();
  }
  function vb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ko(Qi);
  }
  function yb(e, n) {
    if (e === "click") return ko(n);
  }
  function _b(e, n) {
    if (e === "input" || e === "change")
      return ko(n);
  }
  function bb(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var un = typeof Object.is == "function" ? Object.is : bb;
  function Ki(e, n) {
    if (un(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var i = Object.keys(e), o = Object.keys(n);
    if (i.length !== o.length) return !1;
    for (o = 0; o < i.length; o++) {
      var d = i[o];
      if (!me.call(n, d) || !un(e[d], n[d]))
        return !1;
    }
    return !0;
  }
  function rp(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ap(e, n) {
    var i = rp(e);
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
      i = rp(i);
    }
  }
  function ip(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? ip(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function sp(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var n = yo(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof n.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = n.contentWindow;
      else break;
      n = yo(e.document);
    }
    return n;
  }
  function uc(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var Sb = sr && "documentMode" in document && 11 >= document.documentMode, Wa = null, lc = null, Ji = null, cc = !1;
  function op(e, n, i) {
    var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    cc || Wa == null || Wa !== yo(o) || (o = Wa, "selectionStart" in o && uc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), Ji && Ki(Ji, o) || (Ji = o, o = cu(lc, "onSelect"), 0 < o.length && (n = new Eo(
      "onSelect",
      "select",
      null,
      n,
      i
    ), e.push({ event: n, listeners: o }), n.target = Wa)));
  }
  function ua(e, n) {
    var i = {};
    return i[e.toLowerCase()] = n.toLowerCase(), i["Webkit" + e] = "webkit" + n, i["Moz" + e] = "moz" + n, i;
  }
  var ei = {
    animationend: ua("Animation", "AnimationEnd"),
    animationiteration: ua("Animation", "AnimationIteration"),
    animationstart: ua("Animation", "AnimationStart"),
    transitionrun: ua("Transition", "TransitionRun"),
    transitionstart: ua("Transition", "TransitionStart"),
    transitioncancel: ua("Transition", "TransitionCancel"),
    transitionend: ua("Transition", "TransitionEnd")
  }, dc = {}, up = {};
  sr && (up = document.createElement("div").style, "AnimationEvent" in window || (delete ei.animationend.animation, delete ei.animationiteration.animation, delete ei.animationstart.animation), "TransitionEvent" in window || delete ei.transitionend.transition);
  function la(e) {
    if (dc[e]) return dc[e];
    if (!ei[e]) return e;
    var n = ei[e], i;
    for (i in n)
      if (n.hasOwnProperty(i) && i in up)
        return dc[e] = n[i];
    return e;
  }
  var lp = la("animationend"), cp = la("animationiteration"), dp = la("animationstart"), wb = la("transitionrun"), Eb = la("transitionstart"), Cb = la("transitioncancel"), fp = la("transitionend"), hp = /* @__PURE__ */ new Map(), fc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  fc.push("scrollEnd");
  function zn(e, n) {
    hp.set(e, n), sa(n, [e]);
  }
  var pp = /* @__PURE__ */ new WeakMap();
  function Cn(e, n) {
    if (typeof e == "object" && e !== null) {
      var i = pp.get(e);
      return i !== void 0 ? i : (n = {
        value: e,
        source: n,
        stack: Oh(n)
      }, pp.set(e, n), n);
    }
    return {
      value: e,
      source: n,
      stack: Oh(n)
    };
  }
  var kn = [], ti = 0, hc = 0;
  function Ao() {
    for (var e = ti, n = hc = ti = 0; n < e; ) {
      var i = kn[n];
      kn[n++] = null;
      var o = kn[n];
      kn[n++] = null;
      var d = kn[n];
      kn[n++] = null;
      var b = kn[n];
      if (kn[n++] = null, o !== null && d !== null) {
        var N = o.pending;
        N === null ? d.next = d : (d.next = N.next, N.next = d), o.pending = d;
      }
      b !== 0 && mp(i, d, b);
    }
  }
  function xo(e, n, i, o) {
    kn[ti++] = e, kn[ti++] = n, kn[ti++] = i, kn[ti++] = o, hc |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
  }
  function pc(e, n, i, o) {
    return xo(e, n, i, o), To(e);
  }
  function ni(e, n) {
    return xo(e, null, null, n), To(e);
  }
  function mp(e, n, i) {
    e.lanes |= i;
    var o = e.alternate;
    o !== null && (o.lanes |= i);
    for (var d = !1, b = e.return; b !== null; )
      b.childLanes |= i, o = b.alternate, o !== null && (o.childLanes |= i), b.tag === 22 && (e = b.stateNode, e === null || e._visibility & 1 || (d = !0)), e = b, b = b.return;
    return e.tag === 3 ? (b = e.stateNode, d && n !== null && (d = 31 - Gt(i), e = b.hiddenUpdates, o = e[d], o === null ? e[d] = [n] : o.push(n), n.lane = i | 536870912), b) : null;
  }
  function To(e) {
    if (50 < Es)
      throw Es = 0, bd = null, Error(a(185));
    for (var n = e.return; n !== null; )
      e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ri = {};
  function kb(e, n, i, o) {
    this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ln(e, n, i, o) {
    return new kb(e, n, i, o);
  }
  function mc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function or(e, n) {
    var i = e.alternate;
    return i === null ? (i = ln(
      e.tag,
      n,
      e.key,
      e.mode
    ), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = n, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 65011712, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, n = e.dependencies, i.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i.refCleanup = e.refCleanup, i;
  }
  function gp(e, n) {
    e.flags &= 65011714;
    var i = e.alternate;
    return i === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = i.childLanes, e.lanes = i.lanes, e.child = i.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = i.memoizedProps, e.memoizedState = i.memoizedState, e.updateQueue = i.updateQueue, e.type = i.type, n = i.dependencies, e.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), e;
  }
  function No(e, n, i, o, d, b) {
    var N = 0;
    if (o = e, typeof e == "function") mc(e) && (N = 1);
    else if (typeof e == "string")
      N = x1(
        e,
        i,
        U.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case L:
          return e = ln(31, i, n, d), e.elementType = L, e.lanes = b, e;
        case h:
          return ca(i.children, d, b, n);
        case C:
          N = 8, d |= 24;
          break;
        case x:
          return e = ln(12, i, n, d | 2), e.elementType = x, e.lanes = b, e;
        case y:
          return e = ln(13, i, n, d), e.elementType = y, e.lanes = b, e;
        case w:
          return e = ln(19, i, n, d), e.elementType = w, e.lanes = b, e;
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
              case j:
                N = 16, o = null;
                break e;
            }
          N = 29, i = Error(
            a(130, e === null ? "null" : typeof e, "")
          ), o = null;
      }
    return n = ln(N, i, n, d), n.elementType = e, n.type = o, n.lanes = b, n;
  }
  function ca(e, n, i, o) {
    return e = ln(7, e, o, n), e.lanes = i, e;
  }
  function gc(e, n, i) {
    return e = ln(6, e, null, n), e.lanes = i, e;
  }
  function vc(e, n, i) {
    return n = ln(
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
  var ai = [], ii = 0, Oo = null, Mo = 0, An = [], xn = 0, da = null, ur = 1, lr = "";
  function fa(e, n) {
    ai[ii++] = Mo, ai[ii++] = Oo, Oo = e, Mo = n;
  }
  function vp(e, n, i) {
    An[xn++] = ur, An[xn++] = lr, An[xn++] = da, da = e;
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
  function yc(e) {
    e.return !== null && (fa(e, 1), vp(e, 1, 0));
  }
  function _c(e) {
    for (; e === Oo; )
      Oo = ai[--ii], ai[ii] = null, Mo = ai[--ii], ai[ii] = null;
    for (; e === da; )
      da = An[--xn], An[xn] = null, lr = An[--xn], An[xn] = null, ur = An[--xn], An[xn] = null;
  }
  var $t = null, ft = null, $e = !1, ha = null, Xn = !1, bc = Error(a(519));
  function pa(e) {
    var n = Error(a(418, ""));
    throw ts(Cn(n, e)), bc;
  }
  function yp(e) {
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
        for (i = 0; i < ks.length; i++)
          Be(ks[i], n);
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
        Be("invalid", n), Rh(
          n,
          o.value,
          o.defaultValue,
          o.checked,
          o.defaultChecked,
          o.type,
          o.name,
          !0
        ), vo(n);
        break;
      case "select":
        Be("invalid", n);
        break;
      case "textarea":
        Be("invalid", n), zh(n, o.value, o.defaultValue, o.children), vo(n);
    }
    i = o.children, typeof i != "string" && typeof i != "number" && typeof i != "bigint" || n.textContent === "" + i || o.suppressHydrationWarning === !0 || zg(n.textContent, i) ? (o.popover != null && (Be("beforetoggle", n), Be("toggle", n)), o.onScroll != null && Be("scroll", n), o.onScrollEnd != null && Be("scrollend", n), o.onClick != null && (n.onclick = du), n = !0) : n = !1, n || pa(e);
  }
  function _p(e) {
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
  function Wi(e) {
    if (e !== $t) return !1;
    if (!$e) return _p(e), $e = !0, !1;
    var n = e.tag, i;
    if ((i = n !== 3 && n !== 27) && ((i = n === 5) && (i = e.type, i = !(i !== "form" && i !== "button") || Pd(e.type, e.memoizedProps)), i = !i), i && ft && pa(e), _p(e), n === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8)
            if (i = e.data, i === "/$") {
              if (n === 0) {
                ft = Ln(e.nextSibling);
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
      n === 27 ? (n = ft, Zr(e.type) ? (e = Ud, Ud = null, ft = e) : ft = n) : ft = $t ? Ln(e.stateNode.nextSibling) : null;
    return !0;
  }
  function es() {
    ft = $t = null, $e = !1;
  }
  function bp() {
    var e = ha;
    return e !== null && (tn === null ? tn = e : tn.push.apply(
      tn,
      e
    ), ha = null), e;
  }
  function ts(e) {
    ha === null ? ha = [e] : ha.push(e);
  }
  var Sc = X(null), ma = null, cr = null;
  function Tr(e, n, i) {
    Y(Sc, n._currentValue), n._currentValue = i;
  }
  function dr(e) {
    e._currentValue = Sc.current, ce(Sc);
  }
  function wc(e, n, i) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, o !== null && (o.childLanes |= n)) : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n), e === i) break;
      e = e.return;
    }
  }
  function Ec(e, n, i, o) {
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
              b.lanes |= i, z = b.alternate, z !== null && (z.lanes |= i), wc(
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
        N.lanes |= i, b = N.alternate, b !== null && (b.lanes |= i), wc(N, i, e), N = null;
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
  function ns(e, n, i, o) {
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
          un(d.pendingProps.value, N.value) || (e !== null ? e.push(z) : e = [z]);
        }
      } else if (d === ue.current) {
        if (N = d.alternate, N === null) throw Error(a(387));
        N.memoizedState.memoizedState !== d.memoizedState.memoizedState && (e !== null ? e.push(Ms) : e = [Ms]);
      }
      d = d.return;
    }
    e !== null && Ec(
      n,
      e,
      i,
      o
    ), n.flags |= 262144;
  }
  function jo(e) {
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
    return Sp(ma, e);
  }
  function Ro(e, n) {
    return ma === null && ga(e), Sp(e, n);
  }
  function Sp(e, n) {
    var i = n._currentValue;
    if (n = { context: n, memoizedValue: i, next: null }, cr === null) {
      if (e === null) throw Error(a(308));
      cr = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else cr = cr.next = n;
    return i;
  }
  var Ab = typeof AbortController < "u" ? AbortController : function() {
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
  }, xb = t.unstable_scheduleCallback, Tb = t.unstable_NormalPriority, Et = {
    $$typeof: P,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Cc() {
    return {
      controller: new Ab(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function rs(e) {
    e.refCount--, e.refCount === 0 && xb(Tb, function() {
      e.controller.abort();
    });
  }
  var as = null, kc = 0, si = 0, oi = null;
  function Nb(e, n) {
    if (as === null) {
      var i = as = [];
      kc = 0, si = xd(), oi = {
        status: "pending",
        value: void 0,
        then: function(o) {
          i.push(o);
        }
      };
    }
    return kc++, n.then(wp, wp), n;
  }
  function wp() {
    if (--kc === 0 && as !== null) {
      oi !== null && (oi.status = "fulfilled");
      var e = as;
      as = null, si = 0, oi = null;
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function Ob(e, n) {
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
  var Ep = M.S;
  M.S = function(e, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && Nb(e, n), Ep !== null && Ep(e, n);
  };
  var va = X(null);
  function Ac() {
    var e = va.current;
    return e !== null ? e : nt.pooledCache;
  }
  function Do(e, n) {
    n === null ? Y(va, va.current) : Y(va, n.pool);
  }
  function Cp() {
    var e = Ac();
    return e === null ? null : { parent: Et._currentValue, pool: e };
  }
  var is = Error(a(460)), kp = Error(a(474)), zo = Error(a(542)), xc = { then: function() {
  } };
  function Ap(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Po() {
  }
  function xp(e, n, i) {
    switch (i = e[i], i === void 0 ? e.push(n) : i !== n && (n.then(Po, Po), n = i), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, Np(e), e;
      default:
        if (typeof n.status == "string") n.then(Po, Po);
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
            throw e = n.reason, Np(e), e;
        }
        throw ss = n, is;
    }
  }
  var ss = null;
  function Tp() {
    if (ss === null) throw Error(a(459));
    var e = ss;
    return ss = null, e;
  }
  function Np(e) {
    if (e === is || e === zo)
      throw Error(a(483));
  }
  var Nr = !1;
  function Tc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Nc(e, n) {
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
      return d === null ? n.next = n : (n.next = d.next, d.next = n), o.pending = n, n = To(e), mp(e, null, i), n;
    }
    return xo(e, o, n, i), To(e);
  }
  function os(e, n, i) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (i & 4194048) !== 0)) {
      var o = n.lanes;
      o &= e.pendingLanes, i |= o, n.lanes = i, wh(e, i);
    }
  }
  function Oc(e, n) {
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
  var Mc = !1;
  function us() {
    if (Mc) {
      var e = oi;
      if (e !== null) throw e;
    }
  }
  function ls(e, n, i, o) {
    Mc = !1;
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
          W !== 0 && W === si && (Mc = !0), se !== null && (se = se.next = {
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
  function Op(e, n) {
    if (typeof e != "function")
      throw Error(a(191, e));
    e.call(n);
  }
  function Mp(e, n) {
    var i = e.callbacks;
    if (i !== null)
      for (e.callbacks = null, e = 0; e < i.length; e++)
        Op(i[e], n);
  }
  var ui = X(null), Lo = X(0);
  function jp(e, n) {
    e = yr, Y(Lo, e), Y(ui, n), yr = e | n.baseLanes;
  }
  function jc() {
    Y(Lo, yr), Y(ui, ui.current);
  }
  function Rc() {
    yr = Lo.current, ce(ui), ce(Lo);
  }
  var jr = 0, ze = null, Qe = null, _t = null, Io = !1, li = !1, ya = !1, Bo = 0, cs = 0, ci = null, Mb = 0;
  function gt() {
    throw Error(a(321));
  }
  function Dc(e, n) {
    if (n === null) return !1;
    for (var i = 0; i < n.length && i < e.length; i++)
      if (!un(e[i], n[i])) return !1;
    return !0;
  }
  function zc(e, n, i, o, d, b) {
    return jr = b, ze = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, M.H = e === null || e.memoizedState === null ? mm : gm, ya = !1, b = i(o, d), ya = !1, li && (b = Dp(
      n,
      i,
      o,
      d
    )), Rp(e), b;
  }
  function Rp(e) {
    M.H = Vo;
    var n = Qe !== null && Qe.next !== null;
    if (jr = 0, _t = Qe = ze = null, Io = !1, cs = 0, ci = null, n) throw Error(a(300));
    e === null || Tt || (e = e.dependencies, e !== null && jo(e) && (Tt = !0));
  }
  function Dp(e, n, i, o) {
    ze = e;
    var d = 0;
    do {
      if (li && (ci = null), cs = 0, li = !1, 25 <= d) throw Error(a(301));
      if (d += 1, _t = Qe = null, e.updateQueue != null) {
        var b = e.updateQueue;
        b.lastEffect = null, b.events = null, b.stores = null, b.memoCache != null && (b.memoCache.index = 0);
      }
      M.H = Ib, b = n(i, o);
    } while (li);
    return b;
  }
  function jb() {
    var e = M.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? ds(n) : n, e = e.useState()[0], (Qe !== null ? Qe.memoizedState : null) !== e && (ze.flags |= 1024), n;
  }
  function Pc() {
    var e = Bo !== 0;
    return Bo = 0, e;
  }
  function Lc(e, n, i) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~i;
  }
  function Ic(e) {
    if (Io) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      Io = !1;
    }
    jr = 0, _t = Qe = ze = null, li = !1, cs = Bo = 0, ci = null;
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
  function Bc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ds(e) {
    var n = cs;
    return cs += 1, ci === null && (ci = []), e = xp(ci, e, n), n = ze, (_t === null ? n.memoizedState : _t.next) === null && (n = n.alternate, M.H = n === null || n.memoizedState === null ? mm : gm), e;
  }
  function Uo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ds(e);
      if (e.$$typeof === P) return Ut(e);
    }
    throw Error(a(438, String(e)));
  }
  function Uc(e) {
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
    if (n == null && (n = { data: [], index: 0 }), i === null && (i = Bc(), ze.updateQueue = i), i.memoCache = n, i = n.data[n.index], i === void 0)
      for (i = n.data[n.index] = Array(e), o = 0; o < e; o++)
        i[o] = R;
    return n.index++, i;
  }
  function fr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Ho(e) {
    var n = bt();
    return Hc(n, Qe, e);
  }
  function Hc(e, n, i) {
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
        if (le !== Q.lane ? (Ge & le) === le : (jr & le) === le) {
          var W = Q.revertLane;
          if (W === 0)
            H !== null && (H = H.next = {
              lane: 0,
              revertLane: 0,
              action: Q.action,
              hasEagerState: Q.hasEagerState,
              eagerState: Q.eagerState,
              next: null
            }), le === si && (se = !0);
          else if ((jr & W) === W) {
            Q = Q.next, W === si && (se = !0);
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
      if (H === null ? N = b : H.next = z, !un(b, e.memoizedState) && (Tt = !0, se && (i = oi, i !== null)))
        throw i;
      e.memoizedState = b, e.baseState = N, e.baseQueue = H, o.lastRenderedState = b;
    }
    return d === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function qc(e) {
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
      un(b, n.memoizedState) || (Tt = !0), n.memoizedState = b, n.baseQueue === null && (n.baseState = b), i.lastRenderedState = b;
    }
    return [b, o];
  }
  function zp(e, n, i) {
    var o = ze, d = bt(), b = $e;
    if (b) {
      if (i === void 0) throw Error(a(407));
      i = i();
    } else i = n();
    var N = !un(
      (Qe || d).memoizedState,
      i
    );
    N && (d.memoizedState = i, Tt = !0), d = d.queue;
    var z = Ip.bind(null, o, d, e);
    if (fs(2048, 8, z, [e]), d.getSnapshot !== n || N || _t !== null && _t.memoizedState.tag & 1) {
      if (o.flags |= 2048, di(
        9,
        qo(),
        Lp.bind(
          null,
          o,
          d,
          i,
          n
        ),
        null
      ), nt === null) throw Error(a(349));
      b || (jr & 124) !== 0 || Pp(o, n, i);
    }
    return i;
  }
  function Pp(e, n, i) {
    e.flags |= 16384, e = { getSnapshot: n, value: i }, n = ze.updateQueue, n === null ? (n = Bc(), ze.updateQueue = n, n.stores = [e]) : (i = n.stores, i === null ? n.stores = [e] : i.push(e));
  }
  function Lp(e, n, i, o) {
    n.value = i, n.getSnapshot = o, Bp(n) && Up(e);
  }
  function Ip(e, n, i) {
    return i(function() {
      Bp(n) && Up(e);
    });
  }
  function Bp(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var i = n();
      return !un(e, i);
    } catch {
      return !0;
    }
  }
  function Up(e) {
    var n = ni(e, 2);
    n !== null && pn(n, e, 2);
  }
  function Zc(e) {
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
  function Hp(e, n, i, o) {
    return e.baseState = i, Hc(
      e,
      Qe,
      typeof o == "function" ? o : fr
    );
  }
  function Rb(e, n, i, o, d) {
    if (Go(e)) throw Error(a(485));
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
      M.T !== null ? i(!0) : b.isTransition = !1, o(b), i = n.pending, i === null ? (b.next = n.pending = b, qp(n, b)) : (b.next = i.next, n.pending = i.next = b);
    }
  }
  function qp(e, n) {
    var i = n.action, o = n.payload, d = e.state;
    if (n.isTransition) {
      var b = M.T, N = {};
      M.T = N;
      try {
        var z = i(d, o), H = M.S;
        H !== null && H(N, z), Zp(e, n, z);
      } catch (Q) {
        Gc(e, n, Q);
      } finally {
        M.T = b;
      }
    } else
      try {
        b = i(d, o), Zp(e, n, b);
      } catch (Q) {
        Gc(e, n, Q);
      }
  }
  function Zp(e, n, i) {
    i !== null && typeof i == "object" && typeof i.then == "function" ? i.then(
      function(o) {
        Gp(e, n, o);
      },
      function(o) {
        return Gc(e, n, o);
      }
    ) : Gp(e, n, i);
  }
  function Gp(e, n, i) {
    n.status = "fulfilled", n.value = i, Vp(n), e.state = i, n = e.pending, n !== null && (i = n.next, i === n ? e.pending = null : (i = i.next, n.next = i, qp(e, i)));
  }
  function Gc(e, n, i) {
    var o = e.pending;
    if (e.pending = null, o !== null) {
      o = o.next;
      do
        n.status = "rejected", n.reason = i, Vp(n), n = n.next;
      while (n !== o);
    }
    e.action = null;
  }
  function Vp(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function $p(e, n) {
    return n;
  }
  function Yp(e, n) {
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
                  if (d = Ln(
                    d.nextSibling
                  ), d === null) {
                    d = null;
                    break t;
                  }
                }
                b = d.data, d = b === "F!" || b === "F" ? d : null;
              }
              if (d) {
                ft = Ln(
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
      lastRenderedReducer: $p,
      lastRenderedState: n
    }, i.queue = o, i = fm.bind(
      null,
      ze,
      o
    ), o.dispatch = i, o = Zc(!1), b = Fc.bind(
      null,
      ze,
      !1,
      o.queue
    ), o = Wt(), d = {
      state: n,
      dispatch: null,
      action: e,
      pending: null
    }, o.queue = d, i = Rb.bind(
      null,
      ze,
      d,
      b,
      i
    ), d.dispatch = i, o.memoizedState = e, [n, i, !1];
  }
  function Xp(e) {
    var n = bt();
    return Fp(n, Qe, e);
  }
  function Fp(e, n, i) {
    if (n = Hc(
      e,
      n,
      $p
    )[0], e = Ho(fr)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var o = ds(n);
      } catch (N) {
        throw N === is ? zo : N;
      }
    else o = n;
    n = bt();
    var d = n.queue, b = d.dispatch;
    return i !== n.memoizedState && (ze.flags |= 2048, di(
      9,
      qo(),
      Db.bind(null, d, i),
      null
    )), [o, b, e];
  }
  function Db(e, n) {
    e.action = n;
  }
  function Qp(e) {
    var n = bt(), i = Qe;
    if (i !== null)
      return Fp(n, i, e);
    bt(), n = n.memoizedState, i = bt();
    var o = i.queue.dispatch;
    return i.memoizedState = e, [n, o, !1];
  }
  function di(e, n, i, o) {
    return e = { tag: e, create: i, deps: o, inst: n, next: null }, n = ze.updateQueue, n === null && (n = Bc(), ze.updateQueue = n), i = n.lastEffect, i === null ? n.lastEffect = e.next = e : (o = i.next, i.next = e, e.next = o, n.lastEffect = e), e;
  }
  function qo() {
    return { destroy: void 0, resource: void 0 };
  }
  function Kp() {
    return bt().memoizedState;
  }
  function Zo(e, n, i, o) {
    var d = Wt();
    o = o === void 0 ? null : o, ze.flags |= e, d.memoizedState = di(
      1 | n,
      qo(),
      i,
      o
    );
  }
  function fs(e, n, i, o) {
    var d = bt();
    o = o === void 0 ? null : o;
    var b = d.memoizedState.inst;
    Qe !== null && o !== null && Dc(o, Qe.memoizedState.deps) ? d.memoizedState = di(n, b, i, o) : (ze.flags |= e, d.memoizedState = di(
      1 | n,
      b,
      i,
      o
    ));
  }
  function Jp(e, n) {
    Zo(8390656, 8, e, n);
  }
  function Wp(e, n) {
    fs(2048, 8, e, n);
  }
  function em(e, n) {
    return fs(4, 2, e, n);
  }
  function tm(e, n) {
    return fs(4, 4, e, n);
  }
  function nm(e, n) {
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
  function rm(e, n, i) {
    i = i != null ? i.concat([e]) : null, fs(4, 4, nm.bind(null, n, e), i);
  }
  function Vc() {
  }
  function am(e, n) {
    var i = bt();
    n = n === void 0 ? null : n;
    var o = i.memoizedState;
    return n !== null && Dc(n, o[1]) ? o[0] : (i.memoizedState = [e, n], e);
  }
  function im(e, n) {
    var i = bt();
    n = n === void 0 ? null : n;
    var o = i.memoizedState;
    if (n !== null && Dc(n, o[1]))
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
  function $c(e, n, i) {
    return i === void 0 || (jr & 1073741824) !== 0 ? e.memoizedState = n : (e.memoizedState = i, e = ug(), ze.lanes |= e, Br |= e, i);
  }
  function sm(e, n, i, o) {
    return un(i, n) ? i : ui.current !== null ? (e = $c(e, i, o), un(e, n) || (Tt = !0), e) : (jr & 42) === 0 ? (Tt = !0, e.memoizedState = i) : (e = ug(), ze.lanes |= e, Br |= e, n);
  }
  function om(e, n, i, o, d) {
    var b = B.p;
    B.p = b !== 0 && 8 > b ? b : 8;
    var N = M.T, z = {};
    M.T = z, Fc(e, !1, n, i);
    try {
      var H = d(), Q = M.S;
      if (Q !== null && Q(z, H), H !== null && typeof H == "object" && typeof H.then == "function") {
        var se = Ob(
          H,
          o
        );
        hs(
          e,
          n,
          se,
          hn(e)
        );
      } else
        hs(
          e,
          n,
          o,
          hn(e)
        );
    } catch (le) {
      hs(
        e,
        n,
        { then: function() {
        }, status: "rejected", reason: le },
        hn()
      );
    } finally {
      B.p = b, M.T = N;
    }
  }
  function zb() {
  }
  function Yc(e, n, i, o) {
    if (e.tag !== 5) throw Error(a(476));
    var d = um(e).queue;
    om(
      e,
      d,
      n,
      J,
      i === null ? zb : function() {
        return lm(e), i(o);
      }
    );
  }
  function um(e) {
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
  function lm(e) {
    var n = um(e).next.queue;
    hs(e, n, {}, hn());
  }
  function Xc() {
    return Ut(Ms);
  }
  function cm() {
    return bt().memoizedState;
  }
  function dm() {
    return bt().memoizedState;
  }
  function Pb(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var i = hn();
          e = Or(i);
          var o = Mr(n, e, i);
          o !== null && (pn(o, n, i), os(o, n, i)), n = { cache: Cc() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Lb(e, n, i) {
    var o = hn();
    i = {
      lane: o,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Go(e) ? hm(n, i) : (i = pc(e, n, i, o), i !== null && (pn(i, e, o), pm(i, n, o)));
  }
  function fm(e, n, i) {
    var o = hn();
    hs(e, n, i, o);
  }
  function hs(e, n, i, o) {
    var d = {
      lane: o,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Go(e)) hm(n, d);
    else {
      var b = e.alternate;
      if (e.lanes === 0 && (b === null || b.lanes === 0) && (b = n.lastRenderedReducer, b !== null))
        try {
          var N = n.lastRenderedState, z = b(N, i);
          if (d.hasEagerState = !0, d.eagerState = z, un(z, N))
            return xo(e, n, d, 0), nt === null && Ao(), !1;
        } catch {
        } finally {
        }
      if (i = pc(e, n, d, o), i !== null)
        return pn(i, e, o), pm(i, n, o), !0;
    }
    return !1;
  }
  function Fc(e, n, i, o) {
    if (o = {
      lane: 2,
      revertLane: xd(),
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Go(e)) {
      if (n) throw Error(a(479));
    } else
      n = pc(
        e,
        i,
        o,
        2
      ), n !== null && pn(n, e, 2);
  }
  function Go(e) {
    var n = e.alternate;
    return e === ze || n !== null && n === ze;
  }
  function hm(e, n) {
    li = Io = !0;
    var i = e.pending;
    i === null ? n.next = n : (n.next = i.next, i.next = n), e.pending = n;
  }
  function pm(e, n, i) {
    if ((i & 4194048) !== 0) {
      var o = n.lanes;
      o &= e.pendingLanes, i |= o, n.lanes = i, wh(e, i);
    }
  }
  var Vo = {
    readContext: Ut,
    use: Uo,
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
  }, mm = {
    readContext: Ut,
    use: Uo,
    useCallback: function(e, n) {
      return Wt().memoizedState = [
        e,
        n === void 0 ? null : n
      ], e;
    },
    useContext: Ut,
    useEffect: Jp,
    useImperativeHandle: function(e, n, i) {
      i = i != null ? i.concat([e]) : null, Zo(
        4194308,
        4,
        nm.bind(null, n, e),
        i
      );
    },
    useLayoutEffect: function(e, n) {
      return Zo(4194308, 4, e, n);
    },
    useInsertionEffect: function(e, n) {
      Zo(4, 2, e, n);
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
      }, o.queue = e, e = e.dispatch = Lb.bind(
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
      e = Zc(e);
      var n = e.queue, i = fm.bind(null, ze, n);
      return n.dispatch = i, [e.memoizedState, i];
    },
    useDebugValue: Vc,
    useDeferredValue: function(e, n) {
      var i = Wt();
      return $c(i, e, n);
    },
    useTransition: function() {
      var e = Zc(!1);
      return e = om.bind(
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
        (Ge & 124) !== 0 || Pp(o, n, i);
      }
      d.memoizedState = i;
      var b = { value: i, getSnapshot: n };
      return d.queue = b, Jp(Ip.bind(null, o, b, e), [
        e
      ]), o.flags |= 2048, di(
        9,
        qo(),
        Lp.bind(
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
        i = (o & ~(1 << 32 - Gt(o) - 1)).toString(32) + i, n = "«" + n + "R" + i, i = Bo++, 0 < i && (n += "H" + i.toString(32)), n += "»";
      } else
        i = Mb++, n = "«" + n + "r" + i.toString(32) + "»";
      return e.memoizedState = n;
    },
    useHostTransitionStatus: Xc,
    useFormState: Yp,
    useActionState: Yp,
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
      return n.queue = i, n = Fc.bind(
        null,
        ze,
        !0,
        i
      ), i.dispatch = n, [e, n];
    },
    useMemoCache: Uc,
    useCacheRefresh: function() {
      return Wt().memoizedState = Pb.bind(
        null,
        ze
      );
    }
  }, gm = {
    readContext: Ut,
    use: Uo,
    useCallback: am,
    useContext: Ut,
    useEffect: Wp,
    useImperativeHandle: rm,
    useInsertionEffect: em,
    useLayoutEffect: tm,
    useMemo: im,
    useReducer: Ho,
    useRef: Kp,
    useState: function() {
      return Ho(fr);
    },
    useDebugValue: Vc,
    useDeferredValue: function(e, n) {
      var i = bt();
      return sm(
        i,
        Qe.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Ho(fr)[0], n = bt().memoizedState;
      return [
        typeof e == "boolean" ? e : ds(e),
        n
      ];
    },
    useSyncExternalStore: zp,
    useId: cm,
    useHostTransitionStatus: Xc,
    useFormState: Xp,
    useActionState: Xp,
    useOptimistic: function(e, n) {
      var i = bt();
      return Hp(i, Qe, e, n);
    },
    useMemoCache: Uc,
    useCacheRefresh: dm
  }, Ib = {
    readContext: Ut,
    use: Uo,
    useCallback: am,
    useContext: Ut,
    useEffect: Wp,
    useImperativeHandle: rm,
    useInsertionEffect: em,
    useLayoutEffect: tm,
    useMemo: im,
    useReducer: qc,
    useRef: Kp,
    useState: function() {
      return qc(fr);
    },
    useDebugValue: Vc,
    useDeferredValue: function(e, n) {
      var i = bt();
      return Qe === null ? $c(i, e, n) : sm(
        i,
        Qe.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = qc(fr)[0], n = bt().memoizedState;
      return [
        typeof e == "boolean" ? e : ds(e),
        n
      ];
    },
    useSyncExternalStore: zp,
    useId: cm,
    useHostTransitionStatus: Xc,
    useFormState: Qp,
    useActionState: Qp,
    useOptimistic: function(e, n) {
      var i = bt();
      return Qe !== null ? Hp(i, Qe, e, n) : (i.baseState = e, [e, i.queue.dispatch]);
    },
    useMemoCache: Uc,
    useCacheRefresh: dm
  }, fi = null, ps = 0;
  function $o(e) {
    var n = ps;
    return ps += 1, fi === null && (fi = []), xp(fi, e, n);
  }
  function ms(e, n) {
    n = n.props.ref, e.ref = n !== void 0 ? n : null;
  }
  function Yo(e, n) {
    throw n.$$typeof === E ? Error(a(525)) : (e = Object.prototype.toString.call(n), Error(
      a(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e
      )
    ));
  }
  function vm(e) {
    var n = e._init;
    return n(e._payload);
  }
  function ym(e) {
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
      return Z === null || Z.tag !== 6 ? (Z = gc(F, $.mode, oe), Z.return = $, Z) : (Z = d(Z, F), Z.return = $, Z);
    }
    function H($, Z, F, oe) {
      var ve = F.type;
      return ve === h ? se(
        $,
        Z,
        F.props.children,
        oe,
        F.key
      ) : Z !== null && (Z.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === j && vm(ve) === Z.type) ? (Z = d(Z, F.props), ms(Z, F), Z.return = $, Z) : (Z = No(
        F.type,
        F.key,
        F.props,
        null,
        $.mode,
        oe
      ), ms(Z, F), Z.return = $, Z);
    }
    function Q($, Z, F, oe) {
      return Z === null || Z.tag !== 4 || Z.stateNode.containerInfo !== F.containerInfo || Z.stateNode.implementation !== F.implementation ? (Z = vc(F, $.mode, oe), Z.return = $, Z) : (Z = d(Z, F.children || []), Z.return = $, Z);
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
        return Z = gc(
          "" + Z,
          $.mode,
          F
        ), Z.return = $, Z;
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case v:
            return F = No(
              Z.type,
              Z.key,
              Z.props,
              null,
              $.mode,
              F
            ), ms(F, Z), F.return = $, F;
          case S:
            return Z = vc(
              Z,
              $.mode,
              F
            ), Z.return = $, Z;
          case j:
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
          return le($, $o(Z), F);
        if (Z.$$typeof === P)
          return le(
            $,
            Ro($, Z),
            F
          );
        Yo($, Z);
      }
      return null;
    }
    function W($, Z, F, oe) {
      var ve = Z !== null ? Z.key : null;
      if (typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint")
        return ve !== null ? null : z($, Z, "" + F, oe);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case v:
            return F.key === ve ? H($, Z, F, oe) : null;
          case S:
            return F.key === ve ? Q($, Z, F, oe) : null;
          case j:
            return ve = F._init, F = ve(F._payload), W($, Z, F, oe);
        }
        if (K(F) || q(F))
          return ve !== null ? null : se($, Z, F, oe, null);
        if (typeof F.then == "function")
          return W(
            $,
            Z,
            $o(F),
            oe
          );
        if (F.$$typeof === P)
          return W(
            $,
            Z,
            Ro($, F),
            oe
          );
        Yo($, F);
      }
      return null;
    }
    function ee($, Z, F, oe, ve) {
      if (typeof oe == "string" && oe !== "" || typeof oe == "number" || typeof oe == "bigint")
        return $ = $.get(F) || null, z(Z, $, "" + oe, ve);
      if (typeof oe == "object" && oe !== null) {
        switch (oe.$$typeof) {
          case v:
            return $ = $.get(
              oe.key === null ? F : oe.key
            ) || null, H(Z, $, oe, ve);
          case S:
            return $ = $.get(
              oe.key === null ? F : oe.key
            ) || null, Q(Z, $, oe, ve);
          case j:
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
            $o(oe),
            ve
          );
        if (oe.$$typeof === P)
          return ee(
            $,
            Z,
            F,
            Ro(Z, oe),
            ve
          );
        Yo(Z, oe);
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
      return e && be.forEach(function(B1) {
        return n($, B1);
      }), $e && fa($, ke), ve;
    }
    function Je($, Z, F, oe) {
      if (typeof F == "object" && F !== null && F.type === h && F.key === null && (F = F.props.children), typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case v:
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
                  } else if (Z.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === j && vm(ve) === Z.type) {
                    i(
                      $,
                      Z.sibling
                    ), oe = d(Z, F.props), ms(oe, F), oe.return = $, $ = oe;
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
              ), oe.return = $, $ = oe) : (oe = No(
                F.type,
                F.key,
                F.props,
                null,
                $.mode,
                oe
              ), ms(oe, F), oe.return = $, $ = oe);
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
              oe = vc(F, $.mode, oe), oe.return = $, $ = oe;
            }
            return N($);
          case j:
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
            $o(F),
            oe
          );
        if (F.$$typeof === P)
          return Je(
            $,
            Z,
            Ro($, F),
            oe
          );
        Yo($, F);
      }
      return typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint" ? (F = "" + F, Z !== null && Z.tag === 6 ? (i($, Z.sibling), oe = d(Z, F), oe.return = $, $ = oe) : (i($, Z), oe = gc(F, $.mode, oe), oe.return = $, $ = oe), N($)) : i($, Z);
    }
    return function($, Z, F, oe) {
      try {
        ps = 0;
        var ve = Je(
          $,
          Z,
          F,
          oe
        );
        return fi = null, ve;
      } catch (be) {
        if (be === is || be === zo) throw be;
        var Pe = ln(29, be, null, $.mode);
        return Pe.lanes = oe, Pe.return = $, Pe;
      } finally {
      }
    };
  }
  var hi = ym(!0), _m = ym(!1), Tn = X(null), Fn = null;
  function Rr(e) {
    var n = e.alternate;
    Y(Ct, Ct.current & 1), Y(Tn, e), Fn === null && (n === null || ui.current !== null || n.memoizedState !== null) && (Fn = e);
  }
  function bm(e) {
    if (e.tag === 22) {
      if (Y(Ct, Ct.current), Y(Tn, e), Fn === null) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (Fn = e);
      }
    } else Dr();
  }
  function Dr() {
    Y(Ct, Ct.current), Y(Tn, Tn.current);
  }
  function hr(e) {
    ce(Tn), Fn === e && (Fn = null), ce(Ct);
  }
  var Ct = X(0);
  function Xo(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var i = n.memoizedState;
        if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || Bd(i)))
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
  function Qc(e, n, i, o) {
    n = e.memoizedState, i = i(o, n), i = i == null ? n : g({}, n, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var Kc = {
    enqueueSetState: function(e, n, i) {
      e = e._reactInternals;
      var o = hn(), d = Or(o);
      d.payload = n, i != null && (d.callback = i), n = Mr(e, d, o), n !== null && (pn(n, e, o), os(n, e, o));
    },
    enqueueReplaceState: function(e, n, i) {
      e = e._reactInternals;
      var o = hn(), d = Or(o);
      d.tag = 1, d.payload = n, i != null && (d.callback = i), n = Mr(e, d, o), n !== null && (pn(n, e, o), os(n, e, o));
    },
    enqueueForceUpdate: function(e, n) {
      e = e._reactInternals;
      var i = hn(), o = Or(i);
      o.tag = 2, n != null && (o.callback = n), n = Mr(e, o, i), n !== null && (pn(n, e, i), os(n, e, i));
    }
  };
  function Sm(e, n, i, o, d, b, N) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, b, N) : n.prototype && n.prototype.isPureReactComponent ? !Ki(i, o) || !Ki(d, b) : !0;
  }
  function wm(e, n, i, o) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(i, o), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(i, o), n.state !== e && Kc.enqueueReplaceState(n, n.state, null);
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
  var Fo = typeof reportError == "function" ? reportError : function(e) {
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
  function Em(e) {
    Fo(e);
  }
  function Cm(e) {
    console.error(e);
  }
  function km(e) {
    Fo(e);
  }
  function Qo(e, n) {
    try {
      var i = e.onUncaughtError;
      i(n.value, { componentStack: n.stack });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Am(e, n, i) {
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
  function Jc(e, n, i) {
    return i = Or(i), i.tag = 3, i.payload = { element: null }, i.callback = function() {
      Qo(e, n);
    }, i;
  }
  function xm(e) {
    return e = Or(e), e.tag = 3, e;
  }
  function Tm(e, n, i, o) {
    var d = i.type.getDerivedStateFromError;
    if (typeof d == "function") {
      var b = o.value;
      e.payload = function() {
        return d(b);
      }, e.callback = function() {
        Am(n, i, o);
      };
    }
    var N = i.stateNode;
    N !== null && typeof N.componentDidCatch == "function" && (e.callback = function() {
      Am(n, i, o), typeof d != "function" && (Ur === null ? Ur = /* @__PURE__ */ new Set([this]) : Ur.add(this));
      var z = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: z !== null ? z : ""
      });
    });
  }
  function Bb(e, n, i, o, d) {
    if (i.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (n = i.alternate, n !== null && ns(
        n,
        i,
        d,
        !0
      ), i = Tn.current, i !== null) {
        switch (i.tag) {
          case 13:
            return Fn === null ? wd() : i.alternate === null && ht === 0 && (ht = 3), i.flags &= -257, i.flags |= 65536, i.lanes = d, o === xc ? i.flags |= 16384 : (n = i.updateQueue, n === null ? i.updateQueue = /* @__PURE__ */ new Set([o]) : n.add(o), Cd(e, o, d)), !1;
          case 22:
            return i.flags |= 65536, o === xc ? i.flags |= 16384 : (n = i.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, i.updateQueue = n) : (i = n.retryQueue, i === null ? n.retryQueue = /* @__PURE__ */ new Set([o]) : i.add(o)), Cd(e, o, d)), !1;
        }
        throw Error(a(435, i.tag));
      }
      return Cd(e, o, d), wd(), !1;
    }
    if ($e)
      return n = Tn.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = d, o !== bc && (e = Error(a(422), { cause: o }), ts(Cn(e, i)))) : (o !== bc && (n = Error(a(423), {
        cause: o
      }), ts(
        Cn(n, i)
      )), e = e.current.alternate, e.flags |= 65536, d &= -d, e.lanes |= d, o = Cn(o, i), d = Jc(
        e.stateNode,
        o,
        d
      ), Oc(e, d), ht !== 4 && (ht = 2)), !1;
    var b = Error(a(520), { cause: o });
    if (b = Cn(b, i), ws === null ? ws = [b] : ws.push(b), ht !== 4 && (ht = 2), n === null) return !0;
    o = Cn(o, i), i = n;
    do {
      switch (i.tag) {
        case 3:
          return i.flags |= 65536, e = d & -d, i.lanes |= e, e = Jc(i.stateNode, o, e), Oc(i, e), !1;
        case 1:
          if (n = i.type, b = i.stateNode, (i.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (Ur === null || !Ur.has(b))))
            return i.flags |= 65536, d &= -d, i.lanes |= d, d = xm(d), Tm(
              d,
              e,
              i,
              o
            ), Oc(i, d), !1;
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var Nm = Error(a(461)), Tt = !1;
  function Rt(e, n, i, o) {
    n.child = e === null ? _m(n, null, i, o) : hi(
      n,
      e.child,
      i,
      o
    );
  }
  function Om(e, n, i, o, d) {
    i = i.render;
    var b = n.ref;
    if ("ref" in o) {
      var N = {};
      for (var z in o)
        z !== "ref" && (N[z] = o[z]);
    } else N = o;
    return ga(n), o = zc(
      e,
      n,
      i,
      N,
      b,
      d
    ), z = Pc(), e !== null && !Tt ? (Lc(e, n, d), pr(e, n, d)) : ($e && z && yc(n), n.flags |= 1, Rt(e, n, o, d), n.child);
  }
  function Mm(e, n, i, o, d) {
    if (e === null) {
      var b = i.type;
      return typeof b == "function" && !mc(b) && b.defaultProps === void 0 && i.compare === null ? (n.tag = 15, n.type = b, jm(
        e,
        n,
        b,
        o,
        d
      )) : (e = No(
        i.type,
        null,
        o,
        n,
        n.mode,
        d
      ), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (b = e.child, !sd(e, d)) {
      var N = b.memoizedProps;
      if (i = i.compare, i = i !== null ? i : Ki, i(N, o) && e.ref === n.ref)
        return pr(e, n, d);
    }
    return n.flags |= 1, e = or(b, o), e.ref = n.ref, e.return = n, n.child = e;
  }
  function jm(e, n, i, o, d) {
    if (e !== null) {
      var b = e.memoizedProps;
      if (Ki(b, o) && e.ref === n.ref)
        if (Tt = !1, n.pendingProps = o = b, sd(e, d))
          (e.flags & 131072) !== 0 && (Tt = !0);
        else
          return n.lanes = e.lanes, pr(e, n, d);
    }
    return Wc(
      e,
      n,
      i,
      o,
      d
    );
  }
  function Rm(e, n, i) {
    var o = n.pendingProps, d = o.children, b = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (o = b !== null ? b.baseLanes | i : i, e !== null) {
          for (d = n.child = e.child, b = 0; d !== null; )
            b = b | d.lanes | d.childLanes, d = d.sibling;
          n.childLanes = b & ~o;
        } else n.childLanes = 0, n.child = null;
        return Dm(
          e,
          n,
          o,
          i
        );
      }
      if ((i & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Do(
          n,
          b !== null ? b.cachePool : null
        ), b !== null ? jp(n, b) : jc(), bm(n);
      else
        return n.lanes = n.childLanes = 536870912, Dm(
          e,
          n,
          b !== null ? b.baseLanes | i : i,
          i
        );
    } else
      b !== null ? (Do(n, b.cachePool), jp(n, b), Dr(), n.memoizedState = null) : (e !== null && Do(n, null), jc(), Dr());
    return Rt(e, n, d, i), n.child;
  }
  function Dm(e, n, i, o) {
    var d = Ac();
    return d = d === null ? null : { parent: Et._currentValue, pool: d }, n.memoizedState = {
      baseLanes: i,
      cachePool: d
    }, e !== null && Do(n, null), jc(), bm(n), e !== null && ns(e, n, o, !0), null;
  }
  function Ko(e, n) {
    var i = n.ref;
    if (i === null)
      e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof i != "function" && typeof i != "object")
        throw Error(a(284));
      (e === null || e.ref !== i) && (n.flags |= 4194816);
    }
  }
  function Wc(e, n, i, o, d) {
    return ga(n), i = zc(
      e,
      n,
      i,
      o,
      void 0,
      d
    ), o = Pc(), e !== null && !Tt ? (Lc(e, n, d), pr(e, n, d)) : ($e && o && yc(n), n.flags |= 1, Rt(e, n, i, d), n.child);
  }
  function zm(e, n, i, o, d, b) {
    return ga(n), n.updateQueue = null, i = Dp(
      n,
      o,
      i,
      d
    ), Rp(e), o = Pc(), e !== null && !Tt ? (Lc(e, n, b), pr(e, n, b)) : ($e && o && yc(n), n.flags |= 1, Rt(e, n, i, b), n.child);
  }
  function Pm(e, n, i, o, d) {
    if (ga(n), n.stateNode === null) {
      var b = ri, N = i.contextType;
      typeof N == "object" && N !== null && (b = Ut(N)), b = new i(o, b), n.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null, b.updater = Kc, n.stateNode = b, b._reactInternals = n, b = n.stateNode, b.props = o, b.state = n.memoizedState, b.refs = {}, Tc(n), N = i.contextType, b.context = typeof N == "object" && N !== null ? Ut(N) : ri, b.state = n.memoizedState, N = i.getDerivedStateFromProps, typeof N == "function" && (Qc(
        n,
        i,
        N,
        o
      ), b.state = n.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof b.getSnapshotBeforeUpdate == "function" || typeof b.UNSAFE_componentWillMount != "function" && typeof b.componentWillMount != "function" || (N = b.state, typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount(), N !== b.state && Kc.enqueueReplaceState(b, b.state, null), ls(n, o, b, d), us(), b.state = n.memoizedState), typeof b.componentDidMount == "function" && (n.flags |= 4194308), o = !0;
    } else if (e === null) {
      b = n.stateNode;
      var z = n.memoizedProps, H = _a(i, z);
      b.props = H;
      var Q = b.context, se = i.contextType;
      N = ri, typeof se == "object" && se !== null && (N = Ut(se));
      var le = i.getDerivedStateFromProps;
      se = typeof le == "function" || typeof b.getSnapshotBeforeUpdate == "function", z = n.pendingProps !== z, se || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (z || Q !== N) && wm(
        n,
        b,
        o,
        N
      ), Nr = !1;
      var W = n.memoizedState;
      b.state = W, ls(n, o, b, d), us(), Q = n.memoizedState, z || W !== Q || Nr ? (typeof le == "function" && (Qc(
        n,
        i,
        le,
        o
      ), Q = n.memoizedState), (H = Nr || Sm(
        n,
        i,
        H,
        o,
        W,
        Q,
        N
      )) ? (se || typeof b.UNSAFE_componentWillMount != "function" && typeof b.componentWillMount != "function" || (typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount()), typeof b.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof b.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = o, n.memoizedState = Q), b.props = o, b.state = Q, b.context = N, o = H) : (typeof b.componentDidMount == "function" && (n.flags |= 4194308), o = !1);
    } else {
      b = n.stateNode, Nc(e, n), N = n.memoizedProps, se = _a(i, N), b.props = se, le = n.pendingProps, W = b.context, Q = i.contextType, H = ri, typeof Q == "object" && Q !== null && (H = Ut(Q)), z = i.getDerivedStateFromProps, (Q = typeof z == "function" || typeof b.getSnapshotBeforeUpdate == "function") || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (N !== le || W !== H) && wm(
        n,
        b,
        o,
        H
      ), Nr = !1, W = n.memoizedState, b.state = W, ls(n, o, b, d), us();
      var ee = n.memoizedState;
      N !== le || W !== ee || Nr || e !== null && e.dependencies !== null && jo(e.dependencies) ? (typeof z == "function" && (Qc(
        n,
        i,
        z,
        o
      ), ee = n.memoizedState), (se = Nr || Sm(
        n,
        i,
        se,
        o,
        W,
        ee,
        H
      ) || e !== null && e.dependencies !== null && jo(e.dependencies)) ? (Q || typeof b.UNSAFE_componentWillUpdate != "function" && typeof b.componentWillUpdate != "function" || (typeof b.componentWillUpdate == "function" && b.componentWillUpdate(o, ee, H), typeof b.UNSAFE_componentWillUpdate == "function" && b.UNSAFE_componentWillUpdate(
        o,
        ee,
        H
      )), typeof b.componentDidUpdate == "function" && (n.flags |= 4), typeof b.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof b.componentDidUpdate != "function" || N === e.memoizedProps && W === e.memoizedState || (n.flags |= 4), typeof b.getSnapshotBeforeUpdate != "function" || N === e.memoizedProps && W === e.memoizedState || (n.flags |= 1024), n.memoizedProps = o, n.memoizedState = ee), b.props = o, b.state = ee, b.context = H, o = se) : (typeof b.componentDidUpdate != "function" || N === e.memoizedProps && W === e.memoizedState || (n.flags |= 4), typeof b.getSnapshotBeforeUpdate != "function" || N === e.memoizedProps && W === e.memoizedState || (n.flags |= 1024), o = !1);
    }
    return b = o, Ko(e, n), o = (n.flags & 128) !== 0, b || o ? (b = n.stateNode, i = o && typeof i.getDerivedStateFromError != "function" ? null : b.render(), n.flags |= 1, e !== null && o ? (n.child = hi(
      n,
      e.child,
      null,
      d
    ), n.child = hi(
      n,
      null,
      i,
      d
    )) : Rt(e, n, i, d), n.memoizedState = b.state, e = n.child) : e = pr(
      e,
      n,
      d
    ), e;
  }
  function Lm(e, n, i, o) {
    return es(), n.flags |= 256, Rt(e, n, i, o), n.child;
  }
  var ed = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function td(e) {
    return { baseLanes: e, cachePool: Cp() };
  }
  function nd(e, n, i) {
    return e = e !== null ? e.childLanes & ~i : 0, n && (e |= Nn), e;
  }
  function Im(e, n, i) {
    var o = n.pendingProps, d = !1, b = (n.flags & 128) !== 0, N;
    if ((N = b) || (N = e !== null && e.memoizedState === null ? !1 : (Ct.current & 2) !== 0), N && (d = !0, n.flags &= -129), N = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if ($e) {
        if (d ? Rr(n) : Dr(), $e) {
          var z = ft, H;
          if (H = z) {
            e: {
              for (H = z, z = Xn; H.nodeType !== 8; ) {
                if (!z) {
                  z = null;
                  break e;
                }
                if (H = Ln(
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
            }, H = ln(
              18,
              null,
              null,
              0
            ), H.stateNode = z, H.return = n, n.child = H, $t = n, ft = null, H = !0) : H = !1;
          }
          H || pa(n);
        }
        if (z = n.memoizedState, z !== null && (z = z.dehydrated, z !== null))
          return Bd(z) ? n.lanes = 32 : n.lanes = 536870912, null;
        hr(n);
      }
      return z = o.children, o = o.fallback, d ? (Dr(), d = n.mode, z = Jo(
        { mode: "hidden", children: z },
        d
      ), o = ca(
        o,
        d,
        i,
        null
      ), z.return = n, o.return = n, z.sibling = o, n.child = z, d = n.child, d.memoizedState = td(i), d.childLanes = nd(
        e,
        N,
        i
      ), n.memoizedState = ed, o) : (Rr(n), rd(n, z));
    }
    if (H = e.memoizedState, H !== null && (z = H.dehydrated, z !== null)) {
      if (b)
        n.flags & 256 ? (Rr(n), n.flags &= -257, n = ad(
          e,
          n,
          i
        )) : n.memoizedState !== null ? (Dr(), n.child = e.child, n.flags |= 128, n = null) : (Dr(), d = o.fallback, z = n.mode, o = Jo(
          { mode: "visible", children: o.children },
          z
        ), d = ca(
          d,
          z,
          i,
          null
        ), d.flags |= 2, o.return = n, d.return = n, o.sibling = d, n.child = o, hi(
          n,
          e.child,
          null,
          i
        ), o = n.child, o.memoizedState = td(i), o.childLanes = nd(
          e,
          N,
          i
        ), n.memoizedState = ed, n = d);
      else if (Rr(n), Bd(z)) {
        if (N = z.nextSibling && z.nextSibling.dataset, N) var Q = N.dgst;
        N = Q, o = Error(a(419)), o.stack = "", o.digest = N, ts({ value: o, source: null, stack: null }), n = ad(
          e,
          n,
          i
        );
      } else if (Tt || ns(e, n, i, !1), N = (i & e.childLanes) !== 0, Tt || N) {
        if (N = nt, N !== null && (o = i & -i, o = (o & 42) !== 0 ? 1 : Ul(o), o = (o & (N.suspendedLanes | i)) !== 0 ? 0 : o, o !== 0 && o !== H.retryLane))
          throw H.retryLane = o, ni(e, o), pn(N, e, o), Nm;
        z.data === "$?" || wd(), n = ad(
          e,
          n,
          i
        );
      } else
        z.data === "$?" ? (n.flags |= 192, n.child = e.child, n = null) : (e = H.treeContext, ft = Ln(
          z.nextSibling
        ), $t = n, $e = !0, ha = null, Xn = !1, e !== null && (An[xn++] = ur, An[xn++] = lr, An[xn++] = da, ur = e.id, lr = e.overflow, da = n), n = rd(
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
    ), d.flags |= 2), d.return = n, o.return = n, o.sibling = d, n.child = o, o = d, d = n.child, z = e.child.memoizedState, z === null ? z = td(i) : (H = z.cachePool, H !== null ? (Q = Et._currentValue, H = H.parent !== Q ? { parent: Q, pool: Q } : H) : H = Cp(), z = {
      baseLanes: z.baseLanes | i,
      cachePool: H
    }), d.memoizedState = z, d.childLanes = nd(
      e,
      N,
      i
    ), n.memoizedState = ed, o) : (Rr(n), i = e.child, e = i.sibling, i = or(i, {
      mode: "visible",
      children: o.children
    }), i.return = n, i.sibling = null, e !== null && (N = n.deletions, N === null ? (n.deletions = [e], n.flags |= 16) : N.push(e)), n.child = i, n.memoizedState = null, i);
  }
  function rd(e, n) {
    return n = Jo(
      { mode: "visible", children: n },
      e.mode
    ), n.return = e, e.child = n;
  }
  function Jo(e, n) {
    return e = ln(22, e, null, n), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function ad(e, n, i) {
    return hi(n, e.child, null, i), e = rd(
      n,
      n.pendingProps.children
    ), e.flags |= 2, n.memoizedState = null, e;
  }
  function Bm(e, n, i) {
    e.lanes |= n;
    var o = e.alternate;
    o !== null && (o.lanes |= n), wc(e.return, n, i);
  }
  function id(e, n, i, o, d) {
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
  function Um(e, n, i) {
    var o = n.pendingProps, d = o.revealOrder, b = o.tail;
    if (Rt(e, n, o.children, i), o = Ct.current, (o & 2) !== 0)
      o = o & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Bm(e, i, n);
          else if (e.tag === 19)
            Bm(e, i, n);
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
          e = i.alternate, e !== null && Xo(e) === null && (d = i), i = i.sibling;
        i = d, i === null ? (d = n.child, n.child = null) : (d = i.sibling, i.sibling = null), id(
          n,
          !1,
          d,
          i,
          b
        );
        break;
      case "backwards":
        for (i = null, d = n.child, n.child = null; d !== null; ) {
          if (e = d.alternate, e !== null && Xo(e) === null) {
            n.child = d;
            break;
          }
          e = d.sibling, d.sibling = i, i = d, d = e;
        }
        id(
          n,
          !0,
          i,
          null,
          b
        );
        break;
      case "together":
        id(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function pr(e, n, i) {
    if (e !== null && (n.dependencies = e.dependencies), Br |= n.lanes, (i & n.childLanes) === 0)
      if (e !== null) {
        if (ns(
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
  function sd(e, n) {
    return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && jo(e)));
  }
  function Ub(e, n, i) {
    switch (n.tag) {
      case 3:
        re(n, n.stateNode.containerInfo), Tr(n, Et, e.memoizedState.cache), es();
        break;
      case 27:
      case 5:
        je(n);
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
          return o.dehydrated !== null ? (Rr(n), n.flags |= 128, null) : (i & n.child.childLanes) !== 0 ? Im(e, n, i) : (Rr(n), e = pr(
            e,
            n,
            i
          ), e !== null ? e.sibling : null);
        Rr(n);
        break;
      case 19:
        var d = (e.flags & 128) !== 0;
        if (o = (i & n.childLanes) !== 0, o || (ns(
          e,
          n,
          i,
          !1
        ), o = (i & n.childLanes) !== 0), d) {
          if (o)
            return Um(
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
        return n.lanes = 0, Rm(e, n, i);
      case 24:
        Tr(n, Et, e.memoizedState.cache);
    }
    return pr(e, n, i);
  }
  function Hm(e, n, i) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps)
        Tt = !0;
      else {
        if (!sd(e, i) && (n.flags & 128) === 0)
          return Tt = !1, Ub(
            e,
            n,
            i
          );
        Tt = (e.flags & 131072) !== 0;
      }
    else
      Tt = !1, $e && (n.flags & 1048576) !== 0 && vp(n, Mo, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          e = n.pendingProps;
          var o = n.elementType, d = o._init;
          if (o = d(o._payload), n.type = o, typeof o == "function")
            mc(o) ? (e = _a(o, e), n.tag = 1, n = Pm(
              null,
              n,
              o,
              e,
              i
            )) : (n.tag = 0, n = Wc(
              null,
              n,
              o,
              e,
              i
            ));
          else {
            if (o != null) {
              if (d = o.$$typeof, d === l) {
                n.tag = 11, n = Om(
                  null,
                  n,
                  o,
                  e,
                  i
                );
                break e;
              } else if (d === k) {
                n.tag = 14, n = Mm(
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
        return Wc(
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
        ), Pm(
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
          d = b.element, Nc(e, n), ls(n, o, null, i);
          var N = n.memoizedState;
          if (o = N.cache, Tr(n, Et, o), o !== b.cache && Ec(
            n,
            [Et],
            i,
            !0
          ), us(), o = N.element, b.isDehydrated)
            if (b = {
              element: o,
              isDehydrated: !1,
              cache: N.cache
            }, n.updateQueue.baseState = b, n.memoizedState = b, n.flags & 256) {
              n = Lm(
                e,
                n,
                o,
                i
              );
              break e;
            } else if (o !== d) {
              d = Cn(
                Error(a(424)),
                n
              ), ts(d), n = Lm(
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
              for (ft = Ln(e.firstChild), $t = n, $e = !0, ha = null, Xn = !0, i = _m(
                n,
                null,
                o,
                i
              ), n.child = i; i; )
                i.flags = i.flags & -3 | 4096, i = i.sibling;
            }
          else {
            if (es(), o === d) {
              n = pr(
                e,
                n,
                i
              );
              break e;
            }
            Rt(
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
        return Ko(e, n), e === null ? (i = Vg(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = i : $e || (i = n.type, e = n.pendingProps, o = fu(
          ne.current
        ).createElement(i), o[Bt] = n, o[Kt] = e, zt(o, i, e), xt(o), n.stateNode = o) : n.memoizedState = Vg(
          n.type,
          e.memoizedProps,
          n.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return je(n), e === null && $e && (o = n.stateNode = qg(
          n.type,
          n.pendingProps,
          ne.current
        ), $t = n, Xn = !0, d = ft, Zr(n.type) ? (Ud = d, ft = Ln(
          o.firstChild
        )) : ft = d), Rt(
          e,
          n,
          n.pendingProps.children,
          i
        ), Ko(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && $e && ((d = o = ft) && (o = p1(
          o,
          n.type,
          n.pendingProps,
          Xn
        ), o !== null ? (n.stateNode = o, $t = n, ft = Ln(
          o.firstChild
        ), Xn = !1, d = !0) : d = !1), d || pa(n)), je(n), d = n.type, b = n.pendingProps, N = e !== null ? e.memoizedProps : null, o = b.children, Pd(d, b) ? o = null : N !== null && Pd(d, N) && (n.flags |= 32), n.memoizedState !== null && (d = zc(
          e,
          n,
          jb,
          null,
          null,
          i
        ), Ms._currentValue = d), Ko(e, n), Rt(e, n, o, i), n.child;
      case 6:
        return e === null && $e && ((e = i = ft) && (i = m1(
          i,
          n.pendingProps,
          Xn
        ), i !== null ? (n.stateNode = i, $t = n, ft = null, e = !0) : e = !1), e || pa(n)), null;
      case 13:
        return Im(e, n, i);
      case 4:
        return re(
          n,
          n.stateNode.containerInfo
        ), o = n.pendingProps, e === null ? n.child = hi(
          n,
          null,
          o,
          i
        ) : Rt(
          e,
          n,
          o,
          i
        ), n.child;
      case 11:
        return Om(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 7:
        return Rt(
          e,
          n,
          n.pendingProps,
          i
        ), n.child;
      case 8:
        return Rt(
          e,
          n,
          n.pendingProps.children,
          i
        ), n.child;
      case 12:
        return Rt(
          e,
          n,
          n.pendingProps.children,
          i
        ), n.child;
      case 10:
        return o = n.pendingProps, Tr(n, n.type, o.value), Rt(
          e,
          n,
          o.children,
          i
        ), n.child;
      case 9:
        return d = n.type._context, o = n.pendingProps.children, ga(n), d = Ut(d), o = o(d), n.flags |= 1, Rt(e, n, o, i), n.child;
      case 14:
        return Mm(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 15:
        return jm(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 19:
        return Um(e, n, i);
      case 31:
        return o = n.pendingProps, i = n.mode, o = {
          mode: o.mode,
          children: o.children
        }, e === null ? (i = Jo(
          o,
          i
        ), i.ref = n.ref, n.child = i, i.return = n, n = i) : (i = or(e.child, o), i.ref = n.ref, n.child = i, i.return = n, n = i), n;
      case 22:
        return Rm(e, n, i);
      case 24:
        return ga(n), o = Ut(Et), e === null ? (d = Ac(), d === null && (d = nt, b = Cc(), d.pooledCache = b, b.refCount++, b !== null && (d.pooledCacheLanes |= i), d = b), n.memoizedState = {
          parent: o,
          cache: d
        }, Tc(n), Tr(n, Et, d)) : ((e.lanes & i) !== 0 && (Nc(e, n), ls(n, null, null, i), us()), d = e.memoizedState, b = n.memoizedState, d.parent !== o ? (d = { parent: o, cache: o }, n.memoizedState = d, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = d), Tr(n, Et, o)) : (o = b.cache, Tr(n, Et, o), o !== d.cache && Ec(
          n,
          [Et],
          i,
          !0
        ))), Rt(
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
  function qm(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Qg(n)) {
      if (n = Tn.current, n !== null && ((Ge & 4194048) === Ge ? Fn !== null : (Ge & 62914560) !== Ge && (Ge & 536870912) === 0 || n !== Fn))
        throw ss = xc, kp;
      e.flags |= 8192;
    }
  }
  function Wo(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? bh() : 536870912, e.lanes |= n, vi |= n);
  }
  function gs(e, n) {
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
  function Hb(e, n, i) {
    var o = n.pendingProps;
    switch (_c(n), n.tag) {
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
        return i = n.stateNode, o = null, e !== null && (o = e.memoizedState.cache), n.memoizedState.cache !== o && (n.flags |= 2048), dr(Et), pe(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (Wi(n) ? mr(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, bp())), ut(n), null;
      case 26:
        return i = n.memoizedState, e === null ? (mr(n), i !== null ? (ut(n), qm(n, i)) : (ut(n), n.flags &= -16777217)) : i ? i !== e.memoizedState ? (mr(n), ut(n), qm(n, i)) : (ut(n), n.flags &= -16777217) : (e.memoizedProps !== o && mr(n), ut(n), n.flags &= -16777217), null;
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
          e = U.current, Wi(n) ? yp(n) : (e = qg(d, o, i), n.stateNode = e, mr(n));
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
          if (e = U.current, Wi(n))
            yp(n);
          else {
            switch (d = fu(
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
          if (e = ne.current, Wi(n)) {
            if (e = n.stateNode, i = n.memoizedProps, o = null, d = $t, d !== null)
              switch (d.tag) {
                case 27:
                case 5:
                  o = d.memoizedProps;
              }
            e[Bt] = n, e = !!(e.nodeValue === i || o !== null && o.suppressHydrationWarning === !0 || zg(e.nodeValue, i)), e || pa(n);
          } else
            e = fu(e).createTextNode(
              o
            ), e[Bt] = n, n.stateNode = e;
        }
        return ut(n), null;
      case 13:
        if (o = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (d = Wi(n), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!d) throw Error(a(318));
              if (d = n.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(a(317));
              d[Bt] = n;
            } else
              es(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            ut(n), d = !1;
          } else
            d = bp(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = d), d = !0;
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
        return i !== e && i && (n.child.flags |= 8192), Wo(n, n.updateQueue), ut(n), null;
      case 4:
        return pe(), e === null && Md(n.stateNode.containerInfo), ut(n), null;
      case 10:
        return dr(n.type), ut(n), null;
      case 19:
        if (ce(Ct), d = n.memoizedState, d === null) return ut(n), null;
        if (o = (n.flags & 128) !== 0, b = d.rendering, b === null)
          if (o) gs(d, !1);
          else {
            if (ht !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null; ) {
                if (b = Xo(e), b !== null) {
                  for (n.flags |= 128, gs(d, !1), e = b.updateQueue, n.updateQueue = e, Wo(n, e), n.subtreeFlags = 0, e = i, i = n.child; i !== null; )
                    gp(i, e), i = i.sibling;
                  return Y(
                    Ct,
                    Ct.current & 1 | 2
                  ), n.child;
                }
                e = e.sibling;
              }
            d.tail !== null && Fe() > nu && (n.flags |= 128, o = !0, gs(d, !1), n.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = Xo(b), e !== null) {
              if (n.flags |= 128, o = !0, e = e.updateQueue, n.updateQueue = e, Wo(n, e), gs(d, !0), d.tail === null && d.tailMode === "hidden" && !b.alternate && !$e)
                return ut(n), null;
            } else
              2 * Fe() - d.renderingStartTime > nu && i !== 536870912 && (n.flags |= 128, o = !0, gs(d, !1), n.lanes = 4194304);
          d.isBackwards ? (b.sibling = n.child, n.child = b) : (e = d.last, e !== null ? e.sibling = b : n.child = b, d.last = b);
        }
        return d.tail !== null ? (n = d.tail, d.rendering = n, d.tail = n.sibling, d.renderingStartTime = Fe(), n.sibling = null, e = Ct.current, Y(Ct, o ? e & 1 | 2 : e & 1), n) : (ut(n), null);
      case 22:
      case 23:
        return hr(n), Rc(), o = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (n.flags |= 8192) : o && (n.flags |= 8192), o ? (i & 536870912) !== 0 && (n.flags & 128) === 0 && (ut(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ut(n), i = n.updateQueue, i !== null && Wo(n, i.retryQueue), i = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), o = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (o = n.memoizedState.cachePool.pool), o !== i && (n.flags |= 2048), e !== null && ce(va), null;
      case 24:
        return i = null, e !== null && (i = e.memoizedState.cache), n.memoizedState.cache !== i && (n.flags |= 2048), dr(Et), ut(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(a(156, n.tag));
  }
  function qb(e, n) {
    switch (_c(n), n.tag) {
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
          es();
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
        return hr(n), Rc(), e !== null && ce(va), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return dr(Et), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Zm(e, n) {
    switch (_c(n), n.tag) {
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
        hr(n), Rc(), e !== null && ce(va);
        break;
      case 24:
        dr(Et);
    }
  }
  function vs(e, n) {
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
  function Gm(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var i = e.stateNode;
      try {
        Mp(n, i);
      } catch (o) {
        tt(e, e.return, o);
      }
    }
  }
  function Vm(e, n, i) {
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
  function ys(e, n) {
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
  function $m(e) {
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
  function od(e, n, i) {
    try {
      var o = e.stateNode;
      l1(o, e.type, i, n), o[Kt] = n;
    } catch (d) {
      tt(e, e.return, d);
    }
  }
  function Ym(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Zr(e.type) || e.tag === 4;
  }
  function ud(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ym(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Zr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ld(e, n, i) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? (i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i).insertBefore(e, n) : (n = i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i, n.appendChild(e), i = i._reactRootContainer, i != null || n.onclick !== null || (n.onclick = du));
    else if (o !== 4 && (o === 27 && Zr(e.type) && (i = e.stateNode, n = null), e = e.child, e !== null))
      for (ld(e, n, i), e = e.sibling; e !== null; )
        ld(e, n, i), e = e.sibling;
  }
  function eu(e, n, i) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? i.insertBefore(e, n) : i.appendChild(e);
    else if (o !== 4 && (o === 27 && Zr(e.type) && (i = e.stateNode), e = e.child, e !== null))
      for (eu(e, n, i), e = e.sibling; e !== null; )
        eu(e, n, i), e = e.sibling;
  }
  function Xm(e) {
    var n = e.stateNode, i = e.memoizedProps;
    try {
      for (var o = e.type, d = n.attributes; d.length; )
        n.removeAttributeNode(d[0]);
      zt(n, o, i), n[Bt] = e, n[Kt] = i;
    } catch (b) {
      tt(e, e.return, b);
    }
  }
  var gr = !1, vt = !1, cd = !1, Fm = typeof WeakSet == "function" ? WeakSet : Set, Nt = null;
  function Zb(e, n) {
    if (e = e.containerInfo, Dd = yu, e = sp(e), uc(e)) {
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
    for (zd = { focusedElem: e, selectionRange: i }, yu = !1, Nt = n; Nt !== null; )
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
                  Id(e);
                else if (i === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Id(e);
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
  function Qm(e, n, i) {
    var o = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        Pr(e, i), o & 4 && vs(5, i);
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
        o & 64 && Gm(i), o & 512 && ys(i, i.return);
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
            Mp(e, n);
          } catch (N) {
            tt(i, i.return, N);
          }
        }
        break;
      case 27:
        n === null && o & 4 && Xm(i);
      case 26:
      case 5:
        Pr(e, i), n === null && o & 4 && $m(i), o & 512 && ys(i, i.return);
        break;
      case 12:
        Pr(e, i);
        break;
      case 13:
        Pr(e, i), o & 4 && Wm(e, i), o & 64 && (e = i.memoizedState, e !== null && (e = e.dehydrated, e !== null && (i = Jb.bind(
          null,
          i
        ), g1(e, i))));
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
  function Km(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Km(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && Zl(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var at = null, en = !1;
  function vr(e, n, i) {
    for (i = i.child; i !== null; )
      Jm(e, n, i), i = i.sibling;
  }
  function Jm(e, n, i) {
    if (mt && typeof mt.onCommitFiberUnmount == "function")
      try {
        mt.onCommitFiberUnmount(Dn, i);
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
        ), xs(i.stateNode), at = o, en = d;
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
        at !== null && (en ? (e = at, Ug(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          i.stateNode
        ), zs(e)) : Ug(at, i.stateNode));
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
        vt || (Qn(i, n), o = i.stateNode, typeof o.componentWillUnmount == "function" && Vm(
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
  function Wm(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        zs(e);
      } catch (i) {
        tt(n, n.return, i);
      }
  }
  function Gb(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Fm()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new Fm()), n;
      default:
        throw Error(a(435, e.tag));
    }
  }
  function dd(e, n) {
    var i = Gb(e);
    n.forEach(function(o) {
      var d = Wb.bind(null, e, o);
      i.has(o) || (i.add(o), o.then(d, d));
    });
  }
  function cn(e, n) {
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
        Jm(b, N, d), at = null, en = !1, b = d.alternate, b !== null && (b.return = null), d.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        eg(n, e), n = n.sibling;
  }
  var Pn = null;
  function eg(e, n) {
    var i = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        cn(n, e), dn(e), o & 4 && (zr(3, e, e.return), vs(3, e), zr(5, e, e.return));
        break;
      case 1:
        cn(n, e), dn(e), o & 512 && (vt || i === null || Qn(i, i.return)), o & 64 && gr && (e = e.updateQueue, e !== null && (o = e.callbacks, o !== null && (i = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = i === null ? o : i.concat(o))));
        break;
      case 26:
        var d = Pn;
        if (cn(n, e), dn(e), o & 512 && (vt || i === null || Qn(i, i.return)), o & 4) {
          var b = i !== null ? i.memoizedState : null;
          if (o = e.memoizedState, i === null)
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  o = e.type, i = e.memoizedProps, d = d.ownerDocument || d;
                  t: switch (o) {
                    case "title":
                      b = d.getElementsByTagName("title")[0], (!b || b[qi] || b[Bt] || b.namespaceURI === "http://www.w3.org/2000/svg" || b.hasAttribute("itemprop")) && (b = d.createElement(o), d.head.insertBefore(
                        b,
                        d.querySelector("head > title")
                      )), zt(b, o, i), b[Bt] = e, xt(b), o = b;
                      break e;
                    case "link":
                      var N = Xg(
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
                      if (N = Xg(
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
                Fg(
                  d,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Yg(
                d,
                o,
                e.memoizedProps
              );
          else
            b !== o ? (b === null ? i.stateNode !== null && (i = i.stateNode, i.parentNode.removeChild(i)) : b.count--, o === null ? Fg(
              d,
              e.type,
              e.stateNode
            ) : Yg(
              d,
              o,
              e.memoizedProps
            )) : o === null && e.stateNode !== null && od(
              e,
              e.memoizedProps,
              i.memoizedProps
            );
        }
        break;
      case 27:
        cn(n, e), dn(e), o & 512 && (vt || i === null || Qn(i, i.return)), i !== null && o & 4 && od(
          e,
          e.memoizedProps,
          i.memoizedProps
        );
        break;
      case 5:
        if (cn(n, e), dn(e), o & 512 && (vt || i === null || Qn(i, i.return)), e.flags & 32) {
          d = e.stateNode;
          try {
            Fa(d, "");
          } catch (ee) {
            tt(e, e.return, ee);
          }
        }
        o & 4 && e.stateNode != null && (d = e.memoizedProps, od(
          e,
          d,
          i !== null ? i.memoizedProps : d
        )), o & 1024 && (cd = !0);
        break;
      case 6:
        if (cn(n, e), dn(e), o & 4) {
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
        if (mu = null, d = Pn, Pn = hu(n.containerInfo), cn(n, e), Pn = d, dn(e), o & 4 && i !== null && i.memoizedState.isDehydrated)
          try {
            zs(n.containerInfo);
          } catch (ee) {
            tt(e, e.return, ee);
          }
        cd && (cd = !1, tg(e));
        break;
      case 4:
        o = Pn, Pn = hu(
          e.stateNode.containerInfo
        ), cn(n, e), dn(e), Pn = o;
        break;
      case 12:
        cn(n, e), dn(e);
        break;
      case 13:
        cn(n, e), dn(e), e.child.flags & 8192 && e.memoizedState !== null != (i !== null && i.memoizedState !== null) && (vd = Fe()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, dd(e, o)));
        break;
      case 22:
        d = e.memoizedState !== null;
        var H = i !== null && i.memoizedState !== null, Q = gr, se = vt;
        if (gr = Q || d, vt = se || H, cn(n, e), vt = se, gr = Q, dn(e), o & 8192)
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
        o & 4 && (o = e.updateQueue, o !== null && (i = o.retryQueue, i !== null && (o.retryQueue = null, dd(e, i))));
        break;
      case 19:
        cn(n, e), dn(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, dd(e, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        cn(n, e), dn(e);
    }
  }
  function dn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var i, o = e.return; o !== null; ) {
          if (Ym(o)) {
            i = o;
            break;
          }
          o = o.return;
        }
        if (i == null) throw Error(a(160));
        switch (i.tag) {
          case 27:
            var d = i.stateNode, b = ud(e);
            eu(e, b, d);
            break;
          case 5:
            var N = i.stateNode;
            i.flags & 32 && (Fa(N, ""), i.flags &= -33);
            var z = ud(e);
            eu(e, z, N);
            break;
          case 3:
          case 4:
            var H = i.stateNode.containerInfo, Q = ud(e);
            ld(
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
  function tg(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        tg(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), e = e.sibling;
      }
  }
  function Pr(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Qm(e, n.alternate, n), n = n.sibling;
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
          typeof i.componentWillUnmount == "function" && Vm(
            n,
            n.return,
            i
          ), ba(n);
          break;
        case 27:
          xs(n.stateNode);
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
          ), vs(4, b);
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
                  Op(H[d], z);
            } catch (Q) {
              tt(o, o.return, Q);
            }
          }
          i && N & 64 && Gm(b), ys(b, b.return);
          break;
        case 27:
          Xm(b);
        case 26:
        case 5:
          Lr(
            d,
            b,
            i
          ), i && o === null && N & 4 && $m(b), ys(b, b.return);
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
          ), i && N & 4 && Wm(d, b);
          break;
        case 22:
          b.memoizedState === null && Lr(
            d,
            b,
            i
          ), ys(b, b.return);
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
  function fd(e, n) {
    var i = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== i && (e != null && e.refCount++, i != null && rs(i));
  }
  function hd(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && rs(e));
  }
  function Kn(e, n, i, o) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        ng(
          e,
          n,
          i,
          o
        ), n = n.sibling;
  }
  function ng(e, n, i, o) {
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
        ), d & 2048 && vs(9, n);
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
        ), d & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && rs(e)));
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
        ) : _s(e, n) : b._visibility & 2 ? Kn(
          e,
          n,
          i,
          o
        ) : (b._visibility |= 2, pi(
          e,
          n,
          i,
          o,
          (n.subtreeFlags & 10256) !== 0
        )), d & 2048 && fd(N, n);
        break;
      case 24:
        Kn(
          e,
          n,
          i,
          o
        ), d & 2048 && hd(n.alternate, n);
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
  function pi(e, n, i, o, d) {
    for (d = d && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var b = e, N = n, z = i, H = o, Q = N.flags;
      switch (N.tag) {
        case 0:
        case 11:
        case 15:
          pi(
            b,
            N,
            z,
            H,
            d
          ), vs(8, N);
          break;
        case 23:
          break;
        case 22:
          var se = N.stateNode;
          N.memoizedState !== null ? se._visibility & 2 ? pi(
            b,
            N,
            z,
            H,
            d
          ) : _s(
            b,
            N
          ) : (se._visibility |= 2, pi(
            b,
            N,
            z,
            H,
            d
          )), d && Q & 2048 && fd(
            N.alternate,
            N
          );
          break;
        case 24:
          pi(
            b,
            N,
            z,
            H,
            d
          ), d && Q & 2048 && hd(N.alternate, N);
          break;
        default:
          pi(
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
  function _s(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var i = e, o = n, d = o.flags;
        switch (o.tag) {
          case 22:
            _s(i, o), d & 2048 && fd(
              o.alternate,
              o
            );
            break;
          case 24:
            _s(i, o), d & 2048 && hd(o.alternate, o);
            break;
          default:
            _s(i, o);
        }
        n = n.sibling;
      }
  }
  var bs = 8192;
  function mi(e) {
    if (e.subtreeFlags & bs)
      for (e = e.child; e !== null; )
        rg(e), e = e.sibling;
  }
  function rg(e) {
    switch (e.tag) {
      case 26:
        mi(e), e.flags & bs && e.memoizedState !== null && N1(
          Pn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        mi(e);
        break;
      case 3:
      case 4:
        var n = Pn;
        Pn = hu(e.stateNode.containerInfo), mi(e), Pn = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = bs, bs = 16777216, mi(e), bs = n) : mi(e));
        break;
      default:
        mi(e);
    }
  }
  function ag(e) {
    var n = e.alternate;
    if (n !== null && (e = n.child, e !== null)) {
      n.child = null;
      do
        n = e.sibling, e.sibling = null, e = n;
      while (e !== null);
    }
  }
  function Ss(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var o = n[i];
          Nt = o, sg(
            o,
            e
          );
        }
      ag(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        ig(e), e = e.sibling;
  }
  function ig(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ss(e), e.flags & 2048 && zr(9, e, e.return);
        break;
      case 3:
        Ss(e);
        break;
      case 12:
        Ss(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, tu(e)) : Ss(e);
        break;
      default:
        Ss(e);
    }
  }
  function tu(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var o = n[i];
          Nt = o, sg(
            o,
            e
          );
        }
      ag(e);
    }
    for (e = e.child; e !== null; ) {
      switch (n = e, n.tag) {
        case 0:
        case 11:
        case 15:
          zr(8, n, n.return), tu(n);
          break;
        case 22:
          i = n.stateNode, i._visibility & 2 && (i._visibility &= -3, tu(n));
          break;
        default:
          tu(n);
      }
      e = e.sibling;
    }
  }
  function sg(e, n) {
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
          rs(i.memoizedState.cache);
      }
      if (o = i.child, o !== null) o.return = i, Nt = o;
      else
        e: for (i = e; Nt !== null; ) {
          o = Nt;
          var d = o.sibling, b = o.return;
          if (Km(o), o === i) {
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
  var Vb = {
    getCacheForType: function(e) {
      var n = Ut(Et), i = n.data.get(e);
      return i === void 0 && (i = e(), n.data.set(e, i)), i;
    }
  }, $b = typeof WeakMap == "function" ? WeakMap : Map, Ye = 0, nt = null, Ie = null, Ge = 0, Xe = 0, fn = null, Ir = !1, gi = !1, pd = !1, yr = 0, ht = 0, Br = 0, Sa = 0, md = 0, Nn = 0, vi = 0, ws = null, tn = null, gd = !1, vd = 0, nu = 1 / 0, ru = null, Ur = null, Dt = 0, Hr = null, yi = null, _i = 0, yd = 0, _d = null, og = null, Es = 0, bd = null;
  function hn() {
    if ((Ye & 2) !== 0 && Ge !== 0)
      return Ge & -Ge;
    if (M.T !== null) {
      var e = si;
      return e !== 0 ? e : xd();
    }
    return Eh();
  }
  function ug() {
    Nn === 0 && (Nn = (Ge & 536870912) === 0 || $e ? Ha() : 536870912);
    var e = Tn.current;
    return e !== null && (e.flags |= 32), Nn;
  }
  function pn(e, n, i) {
    (e === nt && (Xe === 2 || Xe === 9) || e.cancelPendingCommit !== null) && (bi(e, 0), qr(
      e,
      Ge,
      Nn,
      !1
    )), Hi(e, i), ((Ye & 2) === 0 || e !== nt) && (e === nt && ((Ye & 2) === 0 && (Sa |= i), ht === 4 && qr(
      e,
      Ge,
      Nn,
      !1
    )), Jn(e));
  }
  function lg(e, n, i) {
    if ((Ye & 6) !== 0) throw Error(a(327));
    var o = !i && (n & 124) === 0 && (n & e.expiredLanes) === 0 || Qt(e, n), d = o ? Fb(e, n) : Ed(e, n, !0), b = o;
    do {
      if (d === 0) {
        gi && !o && qr(e, n, 0, !1);
        break;
      } else {
        if (i = e.current.alternate, b && !Yb(i)) {
          d = Ed(e, n, !1), b = !1;
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
              d = ws;
              var H = z.current.memoizedState.isDehydrated;
              if (H && (bi(z, N).flags |= 256), N = Ed(
                z,
                N,
                !1
              ), N !== 2) {
                if (pd && !H) {
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
          bi(e, 0), qr(e, n, 0, !0);
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
          if ((n & 62914560) === n && (d = vd + 300 - Fe(), 10 < d)) {
            if (qr(
              o,
              n,
              Nn,
              !Ir
            ), Vt(o, 0, !0) !== 0) break e;
            o.timeoutHandle = Ig(
              cg.bind(
                null,
                o,
                i,
                tn,
                ru,
                gd,
                n,
                Nn,
                Sa,
                vi,
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
          cg(
            o,
            i,
            tn,
            ru,
            gd,
            n,
            Nn,
            Sa,
            vi,
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
  function cg(e, n, i, o, d, b, N, z, H, Q, se, le, W, ee) {
    if (e.timeoutHandle = -1, le = n.subtreeFlags, (le & 8192 || (le & 16785408) === 16785408) && (Os = { stylesheets: null, count: 0, unsuspend: T1 }, rg(n), le = O1(), le !== null)) {
      e.cancelPendingCommit = le(
        vg.bind(
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
    vg(
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
  function Yb(e) {
    for (var n = e; ; ) {
      var i = n.tag;
      if ((i === 0 || i === 11 || i === 15) && n.flags & 16384 && (i = n.updateQueue, i !== null && (i = i.stores, i !== null)))
        for (var o = 0; o < i.length; o++) {
          var d = i[o], b = d.getSnapshot;
          d = d.value;
          try {
            if (!un(b(), d)) return !1;
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
    n &= ~md, n &= ~Sa, e.suspendedLanes |= n, e.pingedLanes &= ~n, o && (e.warmLanes |= n), o = e.expirationTimes;
    for (var d = n; 0 < d; ) {
      var b = 31 - Gt(d), N = 1 << b;
      o[b] = -1, d &= ~N;
    }
    i !== 0 && Sh(e, i, n);
  }
  function au() {
    return (Ye & 6) === 0 ? (Cs(0), !1) : !0;
  }
  function Sd() {
    if (Ie !== null) {
      if (Xe === 0)
        var e = Ie.return;
      else
        e = Ie, cr = ma = null, Ic(e), fi = null, ps = 0, e = Ie;
      for (; e !== null; )
        Zm(e.alternate, e), e = e.return;
      Ie = null;
    }
  }
  function bi(e, n) {
    var i = e.timeoutHandle;
    i !== -1 && (e.timeoutHandle = -1, d1(i)), i = e.cancelPendingCommit, i !== null && (e.cancelPendingCommit = null, i()), Sd(), nt = e, Ie = i = or(e.current, null), Ge = n, Xe = 0, fn = null, Ir = !1, gi = Qt(e, n), pd = !1, vi = Nn = md = Sa = Br = ht = 0, tn = ws = null, gd = !1, (n & 8) !== 0 && (n |= n & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= n; 0 < o; ) {
        var d = 31 - Gt(o), b = 1 << d;
        n |= e[d], o &= ~b;
      }
    return yr = n, Ao(), i;
  }
  function dg(e, n) {
    ze = null, M.H = Vo, n === is || n === zo ? (n = Tp(), Xe = 3) : n === kp ? (n = Tp(), Xe = 4) : Xe = n === Nm ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, fn = n, Ie === null && (ht = 1, Qo(
      e,
      Cn(n, e.current)
    ));
  }
  function fg() {
    var e = M.H;
    return M.H = Vo, e === null ? Vo : e;
  }
  function hg() {
    var e = M.A;
    return M.A = Vb, e;
  }
  function wd() {
    ht = 4, Ir || (Ge & 4194048) !== Ge && Tn.current !== null || (gi = !0), (Br & 134217727) === 0 && (Sa & 134217727) === 0 || nt === null || qr(
      nt,
      Ge,
      Nn,
      !1
    );
  }
  function Ed(e, n, i) {
    var o = Ye;
    Ye |= 2;
    var d = fg(), b = hg();
    (nt !== e || Ge !== n) && (ru = null, bi(e, n)), n = !1;
    var N = ht;
    e: do
      try {
        if (Xe !== 0 && Ie !== null) {
          var z = Ie, H = fn;
          switch (Xe) {
            case 8:
              Sd(), N = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Tn.current === null && (n = !0);
              var Q = Xe;
              if (Xe = 0, fn = null, Si(e, z, H, Q), i && gi) {
                N = 0;
                break e;
              }
              break;
            default:
              Q = Xe, Xe = 0, fn = null, Si(e, z, H, Q);
          }
        }
        Xb(), N = ht;
        break;
      } catch (se) {
        dg(e, se);
      }
    while (!0);
    return n && e.shellSuspendCounter++, cr = ma = null, Ye = o, M.H = d, M.A = b, Ie === null && (nt = null, Ge = 0, Ao()), N;
  }
  function Xb() {
    for (; Ie !== null; ) pg(Ie);
  }
  function Fb(e, n) {
    var i = Ye;
    Ye |= 2;
    var o = fg(), d = hg();
    nt !== e || Ge !== n ? (ru = null, nu = Fe() + 500, bi(e, n)) : gi = Qt(
      e,
      n
    );
    e: do
      try {
        if (Xe !== 0 && Ie !== null) {
          n = Ie;
          var b = fn;
          t: switch (Xe) {
            case 1:
              Xe = 0, fn = null, Si(e, n, b, 1);
              break;
            case 2:
            case 9:
              if (Ap(b)) {
                Xe = 0, fn = null, mg(n);
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
              Ap(b) ? (Xe = 0, fn = null, mg(n)) : (Xe = 0, fn = null, Si(e, n, b, 7));
              break;
            case 5:
              var N = null;
              switch (Ie.tag) {
                case 26:
                  N = Ie.memoizedState;
                case 5:
                case 27:
                  var z = Ie;
                  if (!N || Qg(N)) {
                    Xe = 0, fn = null;
                    var H = z.sibling;
                    if (H !== null) Ie = H;
                    else {
                      var Q = z.return;
                      Q !== null ? (Ie = Q, iu(Q)) : Ie = null;
                    }
                    break t;
                  }
              }
              Xe = 0, fn = null, Si(e, n, b, 5);
              break;
            case 6:
              Xe = 0, fn = null, Si(e, n, b, 6);
              break;
            case 8:
              Sd(), ht = 6;
              break e;
            default:
              throw Error(a(462));
          }
        }
        Qb();
        break;
      } catch (se) {
        dg(e, se);
      }
    while (!0);
    return cr = ma = null, M.H = o, M.A = d, Ye = i, Ie !== null ? 0 : (nt = null, Ge = 0, Ao(), ht);
  }
  function Qb() {
    for (; Ie !== null && !Le(); )
      pg(Ie);
  }
  function pg(e) {
    var n = Hm(e.alternate, e, yr);
    e.memoizedProps = e.pendingProps, n === null ? iu(e) : Ie = n;
  }
  function mg(e) {
    var n = e, i = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = zm(
          i,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Ge
        );
        break;
      case 11:
        n = zm(
          i,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Ge
        );
        break;
      case 5:
        Ic(n);
      default:
        Zm(i, n), n = Ie = gp(n, yr), n = Hm(i, n, yr);
    }
    e.memoizedProps = e.pendingProps, n === null ? iu(e) : Ie = n;
  }
  function Si(e, n, i, o) {
    cr = ma = null, Ic(n), fi = null, ps = 0;
    var d = n.return;
    try {
      if (Bb(
        e,
        d,
        n,
        i,
        Ge
      )) {
        ht = 1, Qo(
          e,
          Cn(i, e.current)
        ), Ie = null;
        return;
      }
    } catch (b) {
      if (d !== null) throw Ie = d, b;
      ht = 1, Qo(
        e,
        Cn(i, e.current)
      ), Ie = null;
      return;
    }
    n.flags & 32768 ? ($e || o === 1 ? e = !0 : gi || (Ge & 536870912) !== 0 ? e = !1 : (Ir = e = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = Tn.current, o !== null && o.tag === 13 && (o.flags |= 16384))), gg(n, e)) : iu(n);
  }
  function iu(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        gg(
          n,
          Ir
        );
        return;
      }
      e = n.return;
      var i = Hb(
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
  function gg(e, n) {
    do {
      var i = qb(e.alternate, e);
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
  function vg(e, n, i, o, d, b, N, z, H) {
    e.cancelPendingCommit = null;
    do
      su();
    while (Dt !== 0);
    if ((Ye & 6) !== 0) throw Error(a(327));
    if (n !== null) {
      if (n === e.current) throw Error(a(177));
      if (b = n.lanes | n.childLanes, b |= hc, T_(
        e,
        i,
        b,
        N,
        z,
        H
      ), e === nt && (Ie = nt = null, Ge = 0), yi = n, Hr = e, _i = i, yd = b, _d = d, og = o, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, e1(_e, function() {
        return wg(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), o = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || o) {
        o = M.T, M.T = null, d = B.p, B.p = 2, N = Ye, Ye |= 4;
        try {
          Zb(e, n, i);
        } finally {
          Ye = N, B.p = d, M.T = o;
        }
      }
      Dt = 1, yg(), _g(), bg();
    }
  }
  function yg() {
    if (Dt === 1) {
      Dt = 0;
      var e = Hr, n = yi, i = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || i) {
        i = M.T, M.T = null;
        var o = B.p;
        B.p = 2;
        var d = Ye;
        Ye |= 4;
        try {
          eg(n, e);
          var b = zd, N = sp(e.containerInfo), z = b.focusedElem, H = b.selectionRange;
          if (N !== z && z && z.ownerDocument && ip(
            z.ownerDocument.documentElement,
            z
          )) {
            if (H !== null && uc(z)) {
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
                  var $ = ap(
                    z,
                    Ce
                  ), Z = ap(
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
          yu = !!Dd, zd = Dd = null;
        } finally {
          Ye = d, B.p = o, M.T = i;
        }
      }
      e.current = n, Dt = 2;
    }
  }
  function _g() {
    if (Dt === 2) {
      Dt = 0;
      var e = Hr, n = yi, i = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || i) {
        i = M.T, M.T = null;
        var o = B.p;
        B.p = 2;
        var d = Ye;
        Ye |= 4;
        try {
          Qm(e, n.alternate, n);
        } finally {
          Ye = d, B.p = o, M.T = i;
        }
      }
      Dt = 3;
    }
  }
  function bg() {
    if (Dt === 4 || Dt === 3) {
      Dt = 0, We();
      var e = Hr, n = yi, i = _i, o = og;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? Dt = 5 : (Dt = 0, yi = Hr = null, Sg(e, e.pendingLanes));
      var d = e.pendingLanes;
      if (d === 0 && (Ur = null), Hl(i), n = n.stateNode, mt && typeof mt.onCommitFiberRoot == "function")
        try {
          mt.onCommitFiberRoot(
            Dn,
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
      (_i & 3) !== 0 && su(), Jn(e), d = e.pendingLanes, (i & 4194090) !== 0 && (d & 42) !== 0 ? e === bd ? Es++ : (Es = 0, bd = e) : Es = 0, Cs(0);
    }
  }
  function Sg(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, rs(n)));
  }
  function su(e) {
    return yg(), _g(), bg(), wg();
  }
  function wg() {
    if (Dt !== 5) return !1;
    var e = Hr, n = yd;
    yd = 0;
    var i = Hl(_i), o = M.T, d = B.p;
    try {
      B.p = 32 > i ? 32 : i, M.T = null, i = _d, _d = null;
      var b = Hr, N = _i;
      if (Dt = 0, yi = Hr = null, _i = 0, (Ye & 6) !== 0) throw Error(a(331));
      var z = Ye;
      if (Ye |= 4, ig(b.current), ng(
        b,
        b.current,
        N,
        i
      ), Ye = z, Cs(0, !1), mt && typeof mt.onPostCommitFiberRoot == "function")
        try {
          mt.onPostCommitFiberRoot(Dn, b);
        } catch {
        }
      return !0;
    } finally {
      B.p = d, M.T = o, Sg(e, n);
    }
  }
  function Eg(e, n, i) {
    n = Cn(i, n), n = Jc(e.stateNode, n, 2), e = Mr(e, n, 2), e !== null && (Hi(e, 2), Jn(e));
  }
  function tt(e, n, i) {
    if (e.tag === 3)
      Eg(e, e, i);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Eg(
            n,
            e,
            i
          );
          break;
        } else if (n.tag === 1) {
          var o = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ur === null || !Ur.has(o))) {
            e = Cn(i, e), i = xm(2), o = Mr(n, i, 2), o !== null && (Tm(
              i,
              o,
              n,
              e
            ), Hi(o, 2), Jn(o));
            break;
          }
        }
        n = n.return;
      }
  }
  function Cd(e, n, i) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new $b();
      var d = /* @__PURE__ */ new Set();
      o.set(n, d);
    } else
      d = o.get(n), d === void 0 && (d = /* @__PURE__ */ new Set(), o.set(n, d));
    d.has(i) || (pd = !0, d.add(i), e = Kb.bind(null, e, n, i), n.then(e, e));
  }
  function Kb(e, n, i) {
    var o = e.pingCache;
    o !== null && o.delete(n), e.pingedLanes |= e.suspendedLanes & i, e.warmLanes &= ~i, nt === e && (Ge & i) === i && (ht === 4 || ht === 3 && (Ge & 62914560) === Ge && 300 > Fe() - vd ? (Ye & 2) === 0 && bi(e, 0) : md |= i, vi === Ge && (vi = 0)), Jn(e);
  }
  function Cg(e, n) {
    n === 0 && (n = bh()), e = ni(e, n), e !== null && (Hi(e, n), Jn(e));
  }
  function Jb(e) {
    var n = e.memoizedState, i = 0;
    n !== null && (i = n.retryLane), Cg(e, i);
  }
  function Wb(e, n) {
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
    o !== null && o.delete(n), Cg(e, i);
  }
  function e1(e, n) {
    return fe(e, n);
  }
  var ou = null, wi = null, kd = !1, uu = !1, Ad = !1, wa = 0;
  function Jn(e) {
    e !== wi && e.next === null && (wi === null ? ou = wi = e : wi = wi.next = e), uu = !0, kd || (kd = !0, n1());
  }
  function Cs(e, n) {
    if (!Ad && uu) {
      Ad = !0;
      do
        for (var i = !1, o = ou; o !== null; ) {
          if (e !== 0) {
            var d = o.pendingLanes;
            if (d === 0) var b = 0;
            else {
              var N = o.suspendedLanes, z = o.pingedLanes;
              b = (1 << 31 - Gt(42 | e) + 1) - 1, b &= d & ~(N & ~z), b = b & 201326741 ? b & 201326741 | 1 : b ? b | 2 : 0;
            }
            b !== 0 && (i = !0, Tg(o, b));
          } else
            b = Ge, b = Vt(
              o,
              o === nt ? b : 0,
              o.cancelPendingCommit !== null || o.timeoutHandle !== -1
            ), (b & 3) === 0 || Qt(o, b) || (i = !0, Tg(o, b));
          o = o.next;
        }
      while (i);
      Ad = !1;
    }
  }
  function t1() {
    kg();
  }
  function kg() {
    uu = kd = !1;
    var e = 0;
    wa !== 0 && (c1() && (e = wa), wa = 0);
    for (var n = Fe(), i = null, o = ou; o !== null; ) {
      var d = o.next, b = Ag(o, n);
      b === 0 ? (o.next = null, i === null ? ou = d : i.next = d, d === null && (wi = i)) : (i = o, (e !== 0 || (b & 3) !== 0) && (uu = !0)), o = d;
    }
    Cs(e);
  }
  function Ag(e, n) {
    for (var i = e.suspendedLanes, o = e.pingedLanes, d = e.expirationTimes, b = e.pendingLanes & -62914561; 0 < b; ) {
      var N = 31 - Gt(b), z = 1 << N, H = d[N];
      H === -1 ? ((z & i) === 0 || (z & o) !== 0) && (d[N] = po(z, n)) : H <= n && (e.expiredLanes |= z), b &= ~z;
    }
    if (n = nt, i = Ge, i = Vt(
      e,
      e === n ? i : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o = e.callbackNode, i === 0 || e === n && (Xe === 2 || Xe === 9) || e.cancelPendingCommit !== null)
      return o !== null && o !== null && we(o), e.callbackNode = null, e.callbackPriority = 0;
    if ((i & 3) === 0 || Qt(e, i)) {
      if (n = i & -i, n === e.callbackPriority) return n;
      switch (o !== null && we(o), Hl(i)) {
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
      return o = xg.bind(null, e), i = fe(i, o), e.callbackPriority = n, e.callbackNode = i, n;
    }
    return o !== null && o !== null && we(o), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function xg(e, n) {
    if (Dt !== 0 && Dt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var i = e.callbackNode;
    if (su() && e.callbackNode !== i)
      return null;
    var o = Ge;
    return o = Vt(
      e,
      e === nt ? o : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o === 0 ? null : (lg(e, o, n), Ag(e, Fe()), e.callbackNode != null && e.callbackNode === i ? xg.bind(null, e) : null);
  }
  function Tg(e, n) {
    if (su()) return null;
    lg(e, n, !0);
  }
  function n1() {
    f1(function() {
      (Ye & 6) !== 0 ? fe(
        dt,
        t1
      ) : kg();
    });
  }
  function xd() {
    return wa === 0 && (wa = Ha()), wa;
  }
  function Ng(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : _o("" + e);
  }
  function Og(e, n) {
    var i = n.ownerDocument.createElement("input");
    return i.name = n.name, i.value = n.value, e.id && i.setAttribute("form", e.id), n.parentNode.insertBefore(i, n), e = new FormData(e), i.parentNode.removeChild(i), e;
  }
  function r1(e, n, i, o, d) {
    if (n === "submit" && i && i.stateNode === d) {
      var b = Ng(
        (d[Kt] || null).action
      ), N = o.submitter;
      N && (n = (n = N[Kt] || null) ? Ng(n.formAction) : N.getAttribute("formAction"), n !== null && (b = n, N = null));
      var z = new Eo(
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
                  var H = N ? Og(d, N) : new FormData(d);
                  Yc(
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
                typeof b == "function" && (z.preventDefault(), H = N ? Og(d, N) : new FormData(d), Yc(
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
  for (var Td = 0; Td < fc.length; Td++) {
    var Nd = fc[Td], a1 = Nd.toLowerCase(), i1 = Nd[0].toUpperCase() + Nd.slice(1);
    zn(
      a1,
      "on" + i1
    );
  }
  zn(lp, "onAnimationEnd"), zn(cp, "onAnimationIteration"), zn(dp, "onAnimationStart"), zn("dblclick", "onDoubleClick"), zn("focusin", "onFocus"), zn("focusout", "onBlur"), zn(wb, "onTransitionRun"), zn(Eb, "onTransitionStart"), zn(Cb, "onTransitionCancel"), zn(fp, "onTransitionEnd"), $a("onMouseEnter", ["mouseout", "mouseover"]), $a("onMouseLeave", ["mouseout", "mouseover"]), $a("onPointerEnter", ["pointerout", "pointerover"]), $a("onPointerLeave", ["pointerout", "pointerover"]), sa(
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
  var ks = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), s1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ks)
  );
  function Mg(e, n) {
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
              Fo(se);
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
              Fo(se);
            }
            d.currentTarget = null, b = H;
          }
      }
    }
  }
  function Be(e, n) {
    var i = n[ql];
    i === void 0 && (i = n[ql] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    i.has(o) || (jg(n, e, 2, !1), i.add(o));
  }
  function Od(e, n, i) {
    var o = 0;
    n && (o |= 4), jg(
      i,
      e,
      o,
      n
    );
  }
  var lu = "_reactListening" + Math.random().toString(36).slice(2);
  function Md(e) {
    if (!e[lu]) {
      e[lu] = !0, kh.forEach(function(i) {
        i !== "selectionchange" && (s1.has(i) || Od(i, !1, e), Od(i, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[lu] || (n[lu] = !0, Od("selectionchange", !1, n));
    }
  }
  function jg(e, n, i, o) {
    switch (nv(n)) {
      case 2:
        var d = R1;
        break;
      case 8:
        d = D1;
        break;
      default:
        d = Vd;
    }
    i = d.bind(
      null,
      n,
      i,
      e
    ), d = void 0, !Wl || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (d = !0), o ? d !== void 0 ? e.addEventListener(n, i, {
      capture: !0,
      passive: d
    }) : e.addEventListener(n, i, !0) : d !== void 0 ? e.addEventListener(n, i, {
      passive: d
    }) : e.addEventListener(n, i, !1);
  }
  function jd(e, n, i, o, d) {
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
            if (N = Za(z), N === null) return;
            if (H = N.tag, H === 5 || H === 6 || H === 26 || H === 27) {
              o = b = N;
              continue e;
            }
            z = z.parentNode;
          }
        }
        o = o.return;
      }
    Bh(function() {
      var Q = b, se = Kl(i), le = [];
      e: {
        var W = hp.get(e);
        if (W !== void 0) {
          var ee = Eo, Ae = e;
          switch (e) {
            case "keypress":
              if (So(i) === 0) break e;
            case "keydown":
            case "keyup":
              ee = eb;
              break;
            case "focusin":
              Ae = "focus", ee = rc;
              break;
            case "focusout":
              Ae = "blur", ee = rc;
              break;
            case "beforeblur":
            case "afterblur":
              ee = rc;
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
              ee = qh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ee = q_;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ee = rb;
              break;
            case lp:
            case cp:
            case dp:
              ee = V_;
              break;
            case fp:
              ee = ib;
              break;
            case "scroll":
            case "scrollend":
              ee = U_;
              break;
            case "wheel":
              ee = ob;
              break;
            case "copy":
            case "cut":
            case "paste":
              ee = Y_;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ee = Gh;
              break;
            case "toggle":
            case "beforetoggle":
              ee = lb;
          }
          var Ce = (n & 4) !== 0, Je = !Ce && (e === "scroll" || e === "scrollend"), $ = Ce ? W !== null ? W + "Capture" : null : W;
          Ce = [];
          for (var Z = Q, F; Z !== null; ) {
            var oe = Z;
            if (F = oe.stateNode, oe = oe.tag, oe !== 5 && oe !== 26 && oe !== 27 || F === null || $ === null || (oe = Gi(Z, $), oe != null && Ce.push(
              As(Z, oe, F)
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
          if (W = e === "mouseover" || e === "pointerover", ee = e === "mouseout" || e === "pointerout", W && i !== Ql && (Ae = i.relatedTarget || i.fromElement) && (Za(Ae) || Ae[qa]))
            break e;
          if ((ee || W) && (W = se.window === se ? se : (W = se.ownerDocument) ? W.defaultView || W.parentWindow : window, ee ? (Ae = i.relatedTarget || i.toElement, ee = Q, Ae = Ae ? Za(Ae) : null, Ae !== null && (Je = c(Ae), Ce = Ae.tag, Ae !== Je || Ce !== 5 && Ce !== 27 && Ce !== 6) && (Ae = null)) : (ee = null, Ae = Q), ee !== Ae)) {
            if (Ce = qh, oe = "onMouseLeave", $ = "onMouseEnter", Z = "mouse", (e === "pointerout" || e === "pointerover") && (Ce = Gh, oe = "onPointerLeave", $ = "onPointerEnter", Z = "pointer"), Je = ee == null ? W : Zi(ee), F = Ae == null ? W : Zi(Ae), W = new Ce(
              oe,
              Z + "leave",
              ee,
              i,
              se
            ), W.target = Je, W.relatedTarget = F, oe = null, Za(se) === Q && (Ce = new Ce(
              $,
              Z + "enter",
              Ae,
              i,
              se
            ), Ce.target = F, Ce.relatedTarget = Je, oe = Ce), Je = oe, ee && Ae)
              t: {
                for (Ce = ee, $ = Ae, Z = 0, F = Ce; F; F = Ei(F))
                  Z++;
                for (F = 0, oe = $; oe; oe = Ei(oe))
                  F++;
                for (; 0 < Z - F; )
                  Ce = Ei(Ce), Z--;
                for (; 0 < F - Z; )
                  $ = Ei($), F--;
                for (; Z--; ) {
                  if (Ce === $ || $ !== null && Ce === $.alternate)
                    break t;
                  Ce = Ei(Ce), $ = Ei($);
                }
                Ce = null;
              }
            else Ce = null;
            ee !== null && Rg(
              le,
              W,
              ee,
              Ce,
              !1
            ), Ae !== null && Je !== null && Rg(
              le,
              Je,
              Ae,
              Ce,
              !0
            );
          }
        }
        e: {
          if (W = Q ? Zi(Q) : window, ee = W.nodeName && W.nodeName.toLowerCase(), ee === "select" || ee === "input" && W.type === "file")
            var ve = Jh;
          else if (Qh(W))
            if (Wh)
              ve = _b;
            else {
              ve = vb;
              var Pe = gb;
            }
          else
            ee = W.nodeName, !ee || ee.toLowerCase() !== "input" || W.type !== "checkbox" && W.type !== "radio" ? Q && Fl(Q.elementType) && (ve = Jh) : ve = yb;
          if (ve && (ve = ve(e, Q))) {
            Kh(
              le,
              ve,
              i,
              se
            );
            break e;
          }
          Pe && Pe(e, W, Q), e === "focusout" && Q && W.type === "number" && Q.memoizedProps.value != null && Xl(W, "number", W.value);
        }
        switch (Pe = Q ? Zi(Q) : window, e) {
          case "focusin":
            (Qh(Pe) || Pe.contentEditable === "true") && (Wa = Pe, lc = Q, Ji = null);
            break;
          case "focusout":
            Ji = lc = Wa = null;
            break;
          case "mousedown":
            cc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            cc = !1, op(le, i, se);
            break;
          case "selectionchange":
            if (Sb) break;
          case "keydown":
          case "keyup":
            op(le, i, se);
        }
        var be;
        if (ic)
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
          Ja ? Xh(e, i) && (ke = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (ke = "onCompositionStart");
        ke && (Vh && i.locale !== "ko" && (Ja || ke !== "onCompositionStart" ? ke === "onCompositionEnd" && Ja && (be = Uh()) : (xr = se, ec = "value" in xr ? xr.value : xr.textContent, Ja = !0)), Pe = cu(Q, ke), 0 < Pe.length && (ke = new Zh(
          ke,
          e,
          null,
          i,
          se
        ), le.push({ event: ke, listeners: Pe }), be ? ke.data = be : (be = Fh(i), be !== null && (ke.data = be)))), (be = db ? fb(e, i) : hb(e, i)) && (ke = cu(Q, "onBeforeInput"), 0 < ke.length && (Pe = new Zh(
          "onBeforeInput",
          "beforeinput",
          null,
          i,
          se
        ), le.push({
          event: Pe,
          listeners: ke
        }), Pe.data = be)), r1(
          le,
          e,
          Q,
          i,
          se
        );
      }
      Mg(le, n);
    });
  }
  function As(e, n, i) {
    return {
      instance: e,
      listener: n,
      currentTarget: i
    };
  }
  function cu(e, n) {
    for (var i = n + "Capture", o = []; e !== null; ) {
      var d = e, b = d.stateNode;
      if (d = d.tag, d !== 5 && d !== 26 && d !== 27 || b === null || (d = Gi(e, i), d != null && o.unshift(
        As(e, d, b)
      ), d = Gi(e, n), d != null && o.push(
        As(e, d, b)
      )), e.tag === 3) return o;
      e = e.return;
    }
    return [];
  }
  function Ei(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Rg(e, n, i, o, d) {
    for (var b = n._reactName, N = []; i !== null && i !== o; ) {
      var z = i, H = z.alternate, Q = z.stateNode;
      if (z = z.tag, H !== null && H === o) break;
      z !== 5 && z !== 26 && z !== 27 || Q === null || (H = Q, d ? (Q = Gi(i, b), Q != null && N.unshift(
        As(i, Q, H)
      )) : d || (Q = Gi(i, b), Q != null && N.push(
        As(i, Q, H)
      ))), i = i.return;
    }
    N.length !== 0 && e.push({ event: n, listeners: N });
  }
  var o1 = /\r\n?/g, u1 = /\u0000|\uFFFD/g;
  function Dg(e) {
    return (typeof e == "string" ? e : "" + e).replace(o1, `
`).replace(u1, "");
  }
  function zg(e, n) {
    return n = Dg(n), Dg(e) === n;
  }
  function du() {
  }
  function Ke(e, n, i, o, d, b) {
    switch (i) {
      case "children":
        typeof o == "string" ? n === "body" || n === "textarea" && o === "" || Fa(e, o) : (typeof o == "number" || typeof o == "bigint") && n !== "body" && Fa(e, "" + o);
        break;
      case "className":
        go(e, "class", o);
        break;
      case "tabIndex":
        go(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        go(e, i, o);
        break;
      case "style":
        Lh(e, o, b);
        break;
      case "data":
        if (n !== "object") {
          go(e, "data", o);
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
        o = _o("" + o), e.setAttribute(i, o);
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
        o = _o("" + o), e.setAttribute(i, o);
        break;
      case "onClick":
        o != null && (e.onclick = du);
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
        i = _o("" + o), e.setAttributeNS(
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
        Be("beforetoggle", e), Be("toggle", e), mo(e, "popover", o);
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
        mo(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (i = I_.get(i) || i, mo(e, i, o));
    }
  }
  function Rd(e, n, i, o, d, b) {
    switch (i) {
      case "style":
        Lh(e, o, b);
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
        typeof o == "string" ? Fa(e, o) : (typeof o == "number" || typeof o == "bigint") && Fa(e, "" + o);
        break;
      case "onScroll":
        o != null && Be("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Be("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = du);
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
        if (!Ah.hasOwnProperty(i))
          e: {
            if (i[0] === "o" && i[1] === "n" && (d = i.endsWith("Capture"), n = i.slice(2, d ? i.length - 7 : void 0), b = e[Kt] || null, b = b != null ? b[i] : null, typeof b == "function" && e.removeEventListener(n, b, d), typeof o == "function")) {
              typeof b != "function" && b !== null && (i in e ? e[i] = null : e.hasAttribute(i) && e.removeAttribute(i)), e.addEventListener(n, o, d);
              break e;
            }
            i in e ? e[i] = o : o === !0 ? e.setAttribute(i, "") : mo(e, i, o);
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
        Rh(
          e,
          b,
          z,
          H,
          Q,
          N,
          d,
          !1
        ), vo(e);
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
        n = b, i = N, e.multiple = !!o, n != null ? Xa(e, !!o, n, !1) : i != null && Xa(e, !!o, i, !0);
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
        zh(e, o, d, b), vo(e);
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
        for (o = 0; o < ks.length; o++)
          Be(ks[o], e);
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
        if (Fl(n)) {
          for (se in i)
            i.hasOwnProperty(se) && (o = i[se], o !== void 0 && Rd(
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
  function l1(e, n, i, o) {
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
        Yl(
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
        n = z, i = N, o = ee, W != null ? Xa(e, !!i, W, !1) : !!o != !!i && (n != null ? Xa(e, !!i, n, !0) : Xa(e, !!i, i ? [] : "", !1));
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
        Dh(e, W, ee);
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
        if (Fl(n)) {
          for (var Je in i)
            W = i[Je], i.hasOwnProperty(Je) && W !== void 0 && !o.hasOwnProperty(Je) && Rd(
              e,
              n,
              Je,
              void 0,
              o,
              W
            );
          for (se in o)
            W = o[se], ee = i[se], !o.hasOwnProperty(se) || W === ee || W === void 0 && ee === void 0 || Rd(
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
  var Dd = null, zd = null;
  function fu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Pg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Lg(e, n) {
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
  function Pd(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Ld = null;
  function c1() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Ld ? !1 : (Ld = e, !0) : (Ld = null, !1);
  }
  var Ig = typeof setTimeout == "function" ? setTimeout : void 0, d1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Bg = typeof Promise == "function" ? Promise : void 0, f1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Bg < "u" ? function(e) {
    return Bg.resolve(null).then(e).catch(h1);
  } : Ig;
  function h1(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Zr(e) {
    return e === "head";
  }
  function Ug(e, n) {
    var i = n, o = 0, d = 0;
    do {
      var b = i.nextSibling;
      if (e.removeChild(i), b && b.nodeType === 8)
        if (i = b.data, i === "/$") {
          if (0 < o && 8 > o) {
            i = o;
            var N = e.ownerDocument;
            if (i & 1 && xs(N.documentElement), i & 2 && xs(N.body), i & 4)
              for (i = N.head, xs(i), N = i.firstChild; N; ) {
                var z = N.nextSibling, H = N.nodeName;
                N[qi] || H === "SCRIPT" || H === "STYLE" || H === "LINK" && N.rel.toLowerCase() === "stylesheet" || i.removeChild(N), N = z;
              }
          }
          if (d === 0) {
            e.removeChild(b), zs(n);
            return;
          }
          d--;
        } else
          i === "$" || i === "$?" || i === "$!" ? d++ : o = i.charCodeAt(0) - 48;
      else o = 0;
      i = b;
    } while (i);
    zs(n);
  }
  function Id(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var i = n;
      switch (n = n.nextSibling, i.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Id(i), Zl(i);
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
  function p1(e, n, i, o) {
    for (; e.nodeType === 1; ) {
      var d = i;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (o) {
        if (!e[qi])
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
      if (e = Ln(e.nextSibling), e === null) break;
    }
    return null;
  }
  function m1(e, n, i) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !i || (e = Ln(e.nextSibling), e === null)) return null;
    return e;
  }
  function Bd(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function g1(e, n) {
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
  function Ln(e) {
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
  var Ud = null;
  function Hg(e) {
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
  function qg(e, n, i) {
    switch (n = fu(i), e) {
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
  function xs(e) {
    for (var n = e.attributes; n.length; )
      e.removeAttributeNode(n[0]);
    Zl(e);
  }
  var On = /* @__PURE__ */ new Map(), Zg = /* @__PURE__ */ new Set();
  function hu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var _r = B.d;
  B.d = {
    f: v1,
    r: y1,
    D: _1,
    C: b1,
    L: S1,
    m: w1,
    X: C1,
    S: E1,
    M: k1
  };
  function v1() {
    var e = _r.f(), n = au();
    return e || n;
  }
  function y1(e) {
    var n = Ga(e);
    n !== null && n.tag === 5 && n.type === "form" ? lm(n) : _r.r(e);
  }
  var Ci = typeof document > "u" ? null : document;
  function Gg(e, n, i) {
    var o = Ci;
    if (o && typeof n == "string" && n) {
      var d = En(n);
      d = 'link[rel="' + e + '"][href="' + d + '"]', typeof i == "string" && (d += '[crossorigin="' + i + '"]'), Zg.has(d) || (Zg.add(d), e = { rel: e, crossOrigin: i, href: n }, o.querySelector(d) === null && (n = o.createElement("link"), zt(n, "link", e), xt(n), o.head.appendChild(n)));
    }
  }
  function _1(e) {
    _r.D(e), Gg("dns-prefetch", e, null);
  }
  function b1(e, n) {
    _r.C(e, n), Gg("preconnect", e, n);
  }
  function S1(e, n, i) {
    _r.L(e, n, i);
    var o = Ci;
    if (o && e && n) {
      var d = 'link[rel="preload"][as="' + En(n) + '"]';
      n === "image" && i && i.imageSrcSet ? (d += '[imagesrcset="' + En(
        i.imageSrcSet
      ) + '"]', typeof i.imageSizes == "string" && (d += '[imagesizes="' + En(
        i.imageSizes
      ) + '"]')) : d += '[href="' + En(e) + '"]';
      var b = d;
      switch (n) {
        case "style":
          b = ki(e);
          break;
        case "script":
          b = Ai(e);
      }
      On.has(b) || (e = g(
        {
          rel: "preload",
          href: n === "image" && i && i.imageSrcSet ? void 0 : e,
          as: n
        },
        i
      ), On.set(b, e), o.querySelector(d) !== null || n === "style" && o.querySelector(Ts(b)) || n === "script" && o.querySelector(Ns(b)) || (n = o.createElement("link"), zt(n, "link", e), xt(n), o.head.appendChild(n)));
    }
  }
  function w1(e, n) {
    _r.m(e, n);
    var i = Ci;
    if (i && e) {
      var o = n && typeof n.as == "string" ? n.as : "script", d = 'link[rel="modulepreload"][as="' + En(o) + '"][href="' + En(e) + '"]', b = d;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          b = Ai(e);
      }
      if (!On.has(b) && (e = g({ rel: "modulepreload", href: e }, n), On.set(b, e), i.querySelector(d) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (i.querySelector(Ns(b)))
              return;
        }
        o = i.createElement("link"), zt(o, "link", e), xt(o), i.head.appendChild(o);
      }
    }
  }
  function E1(e, n, i) {
    _r.S(e, n, i);
    var o = Ci;
    if (o && e) {
      var d = Va(o).hoistableStyles, b = ki(e);
      n = n || "default";
      var N = d.get(b);
      if (!N) {
        var z = { loading: 0, preload: null };
        if (N = o.querySelector(
          Ts(b)
        ))
          z.loading = 5;
        else {
          e = g(
            { rel: "stylesheet", href: e, "data-precedence": n },
            i
          ), (i = On.get(b)) && Hd(e, i);
          var H = N = o.createElement("link");
          xt(H), zt(H, "link", e), H._p = new Promise(function(Q, se) {
            H.onload = Q, H.onerror = se;
          }), H.addEventListener("load", function() {
            z.loading |= 1;
          }), H.addEventListener("error", function() {
            z.loading |= 2;
          }), z.loading |= 4, pu(N, n, o);
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
  function C1(e, n) {
    _r.X(e, n);
    var i = Ci;
    if (i && e) {
      var o = Va(i).hoistableScripts, d = Ai(e), b = o.get(d);
      b || (b = i.querySelector(Ns(d)), b || (e = g({ src: e, async: !0 }, n), (n = On.get(d)) && qd(e, n), b = i.createElement("script"), xt(b), zt(b, "link", e), i.head.appendChild(b)), b = {
        type: "script",
        instance: b,
        count: 1,
        state: null
      }, o.set(d, b));
    }
  }
  function k1(e, n) {
    _r.M(e, n);
    var i = Ci;
    if (i && e) {
      var o = Va(i).hoistableScripts, d = Ai(e), b = o.get(d);
      b || (b = i.querySelector(Ns(d)), b || (e = g({ src: e, async: !0, type: "module" }, n), (n = On.get(d)) && qd(e, n), b = i.createElement("script"), xt(b), zt(b, "link", e), i.head.appendChild(b)), b = {
        type: "script",
        instance: b,
        count: 1,
        state: null
      }, o.set(d, b));
    }
  }
  function Vg(e, n, i, o) {
    var d = (d = ne.current) ? hu(d) : null;
    if (!d) throw Error(a(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof i.precedence == "string" && typeof i.href == "string" ? (n = ki(i.href), i = Va(
          d
        ).hoistableStyles, o = i.get(n), o || (o = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, i.set(n, o)), o) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (i.rel === "stylesheet" && typeof i.href == "string" && typeof i.precedence == "string") {
          e = ki(i.href);
          var b = Va(
            d
          ).hoistableStyles, N = b.get(e);
          if (N || (d = d.ownerDocument || d, N = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, b.set(e, N), (b = d.querySelector(
            Ts(e)
          )) && !b._p && (N.instance = b, N.state.loading = 5), On.has(e) || (i = {
            rel: "preload",
            as: "style",
            href: i.href,
            crossOrigin: i.crossOrigin,
            integrity: i.integrity,
            media: i.media,
            hrefLang: i.hrefLang,
            referrerPolicy: i.referrerPolicy
          }, On.set(e, i), b || A1(
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
        return n = i.async, i = i.src, typeof i == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Ai(i), i = Va(
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
  function ki(e) {
    return 'href="' + En(e) + '"';
  }
  function Ts(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function $g(e) {
    return g({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function A1(e, n, i, o) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]") ? o.loading = 1 : (n = e.createElement("link"), o.preload = n, n.addEventListener("load", function() {
      return o.loading |= 1;
    }), n.addEventListener("error", function() {
      return o.loading |= 2;
    }), zt(n, "link", i), xt(n), e.head.appendChild(n));
  }
  function Ai(e) {
    return '[src="' + En(e) + '"]';
  }
  function Ns(e) {
    return "script[async]" + e;
  }
  function Yg(e, n, i) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var o = e.querySelector(
            'style[data-href~="' + En(i.href) + '"]'
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
          ), xt(o), zt(o, "style", d), pu(o, i.precedence, e), n.instance = o;
        case "stylesheet":
          d = ki(i.href);
          var b = e.querySelector(
            Ts(d)
          );
          if (b)
            return n.state.loading |= 4, n.instance = b, xt(b), b;
          o = $g(i), (d = On.get(d)) && Hd(o, d), b = (e.ownerDocument || e).createElement("link"), xt(b);
          var N = b;
          return N._p = new Promise(function(z, H) {
            N.onload = z, N.onerror = H;
          }), zt(b, "link", o), n.state.loading |= 4, pu(b, i.precedence, e), n.instance = b;
        case "script":
          return b = Ai(i.src), (d = e.querySelector(
            Ns(b)
          )) ? (n.instance = d, xt(d), d) : (o = i, (d = On.get(b)) && (o = g({}, i), qd(o, d)), e = e.ownerDocument || e, d = e.createElement("script"), xt(d), zt(d, "link", o), e.head.appendChild(d), n.instance = d);
        case "void":
          return null;
        default:
          throw Error(a(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (o = n.instance, n.state.loading |= 4, pu(o, i.precedence, e));
    return n.instance;
  }
  function pu(e, n, i) {
    for (var o = i.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), d = o.length ? o[o.length - 1] : null, b = d, N = 0; N < o.length; N++) {
      var z = o[N];
      if (z.dataset.precedence === n) b = z;
      else if (b !== d) break;
    }
    b ? b.parentNode.insertBefore(e, b.nextSibling) : (n = i.nodeType === 9 ? i.head : i, n.insertBefore(e, n.firstChild));
  }
  function Hd(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function qd(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var mu = null;
  function Xg(e, n, i) {
    if (mu === null) {
      var o = /* @__PURE__ */ new Map(), d = mu = /* @__PURE__ */ new Map();
      d.set(i, o);
    } else
      d = mu, o = d.get(i), o || (o = /* @__PURE__ */ new Map(), d.set(i, o));
    if (o.has(e)) return o;
    for (o.set(e, null), i = i.getElementsByTagName(e), d = 0; d < i.length; d++) {
      var b = i[d];
      if (!(b[qi] || b[Bt] || e === "link" && b.getAttribute("rel") === "stylesheet") && b.namespaceURI !== "http://www.w3.org/2000/svg") {
        var N = b.getAttribute(n) || "";
        N = e + N;
        var z = o.get(N);
        z ? z.push(b) : o.set(N, [b]);
      }
    }
    return o;
  }
  function Fg(e, n, i) {
    e = e.ownerDocument || e, e.head.insertBefore(
      i,
      n === "title" ? e.querySelector("head > title") : null
    );
  }
  function x1(e, n, i) {
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
  function Qg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Os = null;
  function T1() {
  }
  function N1(e, n, i) {
    if (Os === null) throw Error(a(475));
    var o = Os;
    if (n.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var d = ki(i.href), b = e.querySelector(
          Ts(d)
        );
        if (b) {
          e = b._p, e !== null && typeof e == "object" && typeof e.then == "function" && (o.count++, o = gu.bind(o), e.then(o, o)), n.state.loading |= 4, n.instance = b, xt(b);
          return;
        }
        b = e.ownerDocument || e, i = $g(i), (d = On.get(d)) && Hd(i, d), b = b.createElement("link"), xt(b);
        var N = b;
        N._p = new Promise(function(z, H) {
          N.onload = z, N.onerror = H;
        }), zt(b, "link", i), n.instance = b;
      }
      o.stylesheets === null && (o.stylesheets = /* @__PURE__ */ new Map()), o.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (o.count++, n = gu.bind(o), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  function O1() {
    if (Os === null) throw Error(a(475));
    var e = Os;
    return e.stylesheets && e.count === 0 && Zd(e, e.stylesheets), 0 < e.count ? function(n) {
      var i = setTimeout(function() {
        if (e.stylesheets && Zd(e, e.stylesheets), e.unsuspend) {
          var o = e.unsuspend;
          e.unsuspend = null, o();
        }
      }, 6e4);
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(i);
      };
    } : null;
  }
  function gu() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Zd(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var vu = null;
  function Zd(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, vu = /* @__PURE__ */ new Map(), n.forEach(M1, e), vu = null, gu.call(e));
  }
  function M1(e, n) {
    if (!(n.state.loading & 4)) {
      var i = vu.get(e);
      if (i) var o = i.get(null);
      else {
        i = /* @__PURE__ */ new Map(), vu.set(e, i);
        for (var d = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), b = 0; b < d.length; b++) {
          var N = d[b];
          (N.nodeName === "LINK" || N.getAttribute("media") !== "not all") && (i.set(N.dataset.precedence, N), o = N);
        }
        o && i.set(null, o);
      }
      d = n.instance, N = d.getAttribute("data-precedence"), b = i.get(N) || o, b === o && i.set(null, d), i.set(N, d), this.count++, o = gu.bind(this), d.addEventListener("load", o), d.addEventListener("error", o), b ? b.parentNode.insertBefore(d, b.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(d, e.firstChild)), n.state.loading |= 4;
    }
  }
  var Ms = {
    $$typeof: P,
    Provider: null,
    Consumer: null,
    _currentValue: J,
    _currentValue2: J,
    _threadCount: 0
  };
  function j1(e, n, i, o, d, b, N, z) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Bl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Bl(0), this.hiddenUpdates = Bl(null), this.identifierPrefix = o, this.onUncaughtError = d, this.onCaughtError = b, this.onRecoverableError = N, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = z, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Kg(e, n, i, o, d, b, N, z, H, Q, se, le) {
    return e = new j1(
      e,
      n,
      i,
      N,
      z,
      H,
      Q,
      le
    ), n = 1, b === !0 && (n |= 24), b = ln(3, null, null, n), e.current = b, b.stateNode = e, n = Cc(), n.refCount++, e.pooledCache = n, n.refCount++, b.memoizedState = {
      element: o,
      isDehydrated: i,
      cache: n
    }, Tc(b), e;
  }
  function Jg(e) {
    return e ? (e = ri, e) : ri;
  }
  function Wg(e, n, i, o, d, b) {
    d = Jg(d), o.context === null ? o.context = d : o.pendingContext = d, o = Or(n), o.payload = { element: i }, b = b === void 0 ? null : b, b !== null && (o.callback = b), i = Mr(e, o, n), i !== null && (pn(i, e, n), os(i, e, n));
  }
  function ev(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < n ? i : n;
    }
  }
  function Gd(e, n) {
    ev(e, n), (e = e.alternate) && ev(e, n);
  }
  function tv(e) {
    if (e.tag === 13) {
      var n = ni(e, 67108864);
      n !== null && pn(n, e, 67108864), Gd(e, 67108864);
    }
  }
  var yu = !0;
  function R1(e, n, i, o) {
    var d = M.T;
    M.T = null;
    var b = B.p;
    try {
      B.p = 2, Vd(e, n, i, o);
    } finally {
      B.p = b, M.T = d;
    }
  }
  function D1(e, n, i, o) {
    var d = M.T;
    M.T = null;
    var b = B.p;
    try {
      B.p = 8, Vd(e, n, i, o);
    } finally {
      B.p = b, M.T = d;
    }
  }
  function Vd(e, n, i, o) {
    if (yu) {
      var d = $d(o);
      if (d === null)
        jd(
          e,
          n,
          o,
          _u,
          i
        ), rv(e, o);
      else if (P1(
        d,
        e,
        n,
        i,
        o
      ))
        o.stopPropagation();
      else if (rv(e, o), n & 4 && -1 < z1.indexOf(e)) {
        for (; d !== null; ) {
          var b = Ga(d);
          if (b !== null)
            switch (b.tag) {
              case 3:
                if (b = b.stateNode, b.current.memoizedState.isDehydrated) {
                  var N = Sn(b.pendingLanes);
                  if (N !== 0) {
                    var z = b;
                    for (z.pendingLanes |= 2, z.entangledLanes |= 2; N; ) {
                      var H = 1 << 31 - Gt(N);
                      z.entanglements[1] |= H, N &= ~H;
                    }
                    Jn(b), (Ye & 6) === 0 && (nu = Fe() + 500, Cs(0));
                  }
                }
                break;
              case 13:
                z = ni(b, 2), z !== null && pn(z, b, 2), au(), Gd(b, 2);
            }
          if (b = $d(o), b === null && jd(
            e,
            n,
            o,
            _u,
            i
          ), b === d) break;
          d = b;
        }
        d !== null && o.stopPropagation();
      } else
        jd(
          e,
          n,
          o,
          null,
          i
        );
    }
  }
  function $d(e) {
    return e = Kl(e), Yd(e);
  }
  var _u = null;
  function Yd(e) {
    if (_u = null, e = Za(e), e !== null) {
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
    return _u = e, null;
  }
  function nv(e) {
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
  var Xd = !1, Gr = null, Vr = null, $r = null, js = /* @__PURE__ */ new Map(), Rs = /* @__PURE__ */ new Map(), Yr = [], z1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function rv(e, n) {
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
        js.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rs.delete(n.pointerId);
    }
  }
  function Ds(e, n, i, o, d, b) {
    return e === null || e.nativeEvent !== b ? (e = {
      blockedOn: n,
      domEventName: i,
      eventSystemFlags: o,
      nativeEvent: b,
      targetContainers: [d]
    }, n !== null && (n = Ga(n), n !== null && tv(n)), e) : (e.eventSystemFlags |= o, n = e.targetContainers, d !== null && n.indexOf(d) === -1 && n.push(d), e);
  }
  function P1(e, n, i, o, d) {
    switch (n) {
      case "focusin":
        return Gr = Ds(
          Gr,
          e,
          n,
          i,
          o,
          d
        ), !0;
      case "dragenter":
        return Vr = Ds(
          Vr,
          e,
          n,
          i,
          o,
          d
        ), !0;
      case "mouseover":
        return $r = Ds(
          $r,
          e,
          n,
          i,
          o,
          d
        ), !0;
      case "pointerover":
        var b = d.pointerId;
        return js.set(
          b,
          Ds(
            js.get(b) || null,
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
          Ds(
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
  function av(e) {
    var n = Za(e.target);
    if (n !== null) {
      var i = c(n);
      if (i !== null) {
        if (n = i.tag, n === 13) {
          if (n = f(i), n !== null) {
            e.blockedOn = n, N_(e.priority, function() {
              if (i.tag === 13) {
                var o = hn();
                o = Ul(o);
                var d = ni(i, o);
                d !== null && pn(d, i, o), Gd(i, o);
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
  function bu(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var i = $d(e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var o = new i.constructor(
          i.type,
          i
        );
        Ql = o, i.target.dispatchEvent(o), Ql = null;
      } else
        return n = Ga(i), n !== null && tv(n), e.blockedOn = i, !1;
      n.shift();
    }
    return !0;
  }
  function iv(e, n, i) {
    bu(e) && i.delete(n);
  }
  function L1() {
    Xd = !1, Gr !== null && bu(Gr) && (Gr = null), Vr !== null && bu(Vr) && (Vr = null), $r !== null && bu($r) && ($r = null), js.forEach(iv), Rs.forEach(iv);
  }
  function Su(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Xd || (Xd = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      L1
    )));
  }
  var wu = null;
  function sv(e) {
    wu !== e && (wu = e, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        wu === e && (wu = null);
        for (var n = 0; n < e.length; n += 3) {
          var i = e[n], o = e[n + 1], d = e[n + 2];
          if (typeof o != "function") {
            if (Yd(o || i) === null)
              continue;
            break;
          }
          var b = Ga(i);
          b !== null && (e.splice(n, 3), n -= 3, Yc(
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
  function zs(e) {
    function n(H) {
      return Su(H, e);
    }
    Gr !== null && Su(Gr, e), Vr !== null && Su(Vr, e), $r !== null && Su($r, e), js.forEach(n), Rs.forEach(n);
    for (var i = 0; i < Yr.length; i++) {
      var o = Yr[i];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < Yr.length && (i = Yr[0], i.blockedOn === null); )
      av(i), i.blockedOn === null && Yr.shift();
    if (i = (e.ownerDocument || e).$$reactFormReplay, i != null)
      for (o = 0; o < i.length; o += 3) {
        var d = i[o], b = i[o + 1], N = d[Kt] || null;
        if (typeof b == "function")
          N || sv(i);
        else if (N) {
          var z = null;
          if (b && b.hasAttribute("formAction")) {
            if (d = b, N = b[Kt] || null)
              z = N.formAction;
            else if (Yd(d) !== null) continue;
          } else z = N.action;
          typeof z == "function" ? i[o + 1] = z : (i.splice(o, 3), o -= 3), sv(i);
        }
      }
  }
  function Fd(e) {
    this._internalRoot = e;
  }
  Eu.prototype.render = Fd.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(a(409));
    var i = n.current, o = hn();
    Wg(i, o, e, n, null, null);
  }, Eu.prototype.unmount = Fd.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      Wg(e.current, 2, null, e, null, null), au(), n[qa] = null;
    }
  };
  function Eu(e) {
    this._internalRoot = e;
  }
  Eu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = Eh();
      e = { blockedOn: null, target: e, priority: n };
      for (var i = 0; i < Yr.length && n !== 0 && n < Yr[i].priority; i++) ;
      Yr.splice(i, 0, e), i === 0 && av(e);
    }
  };
  var ov = r.version;
  if (ov !== "19.1.1")
    throw Error(
      a(
        527,
        ov,
        "19.1.1"
      )
    );
  B.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(a(188)) : (e = Object.keys(e).join(","), Error(a(268, e)));
    return e = p(n), e = e !== null ? _(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var I1 = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Cu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Cu.isDisabled && Cu.supportsFiber)
      try {
        Dn = Cu.inject(
          I1
        ), mt = Cu;
      } catch {
      }
  }
  return Bs.createRoot = function(e, n) {
    if (!u(e)) throw Error(a(299));
    var i = !1, o = "", d = Em, b = Cm, N = km, z = null;
    return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (d = n.onUncaughtError), n.onCaughtError !== void 0 && (b = n.onCaughtError), n.onRecoverableError !== void 0 && (N = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (z = n.unstable_transitionCallbacks)), n = Kg(
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
    ), e[qa] = n.current, Md(e), new Fd(n);
  }, Bs.hydrateRoot = function(e, n, i) {
    if (!u(e)) throw Error(a(299));
    var o = !1, d = "", b = Em, N = Cm, z = km, H = null, Q = null;
    return i != null && (i.unstable_strictMode === !0 && (o = !0), i.identifierPrefix !== void 0 && (d = i.identifierPrefix), i.onUncaughtError !== void 0 && (b = i.onUncaughtError), i.onCaughtError !== void 0 && (N = i.onCaughtError), i.onRecoverableError !== void 0 && (z = i.onRecoverableError), i.unstable_transitionCallbacks !== void 0 && (H = i.unstable_transitionCallbacks), i.formState !== void 0 && (Q = i.formState)), n = Kg(
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
    ), n.context = Jg(null), i = n.current, o = hn(), o = Ul(o), d = Or(o), d.callback = null, Mr(i, d, o), i = o, n.current.lanes = i, Hi(n, i), Jn(n), e[qa] = n.current, Md(e), new Eu(n);
  }, Bs.version = "19.1.1", Bs;
}
var wv;
function k2() {
  if (wv) return Wd.exports;
  wv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), Wd.exports = C2(), Wd.exports;
}
var A2 = k2();
const Ev = /* @__PURE__ */ Wf(A2);
var x2 = Object.defineProperty, T2 = (t, r, s) => r in t ? x2(t, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[r] = s, Cv = (t, r, s) => T2(t, typeof r != "symbol" ? r + "" : r, s);
class l0 {
  constructor(r, s) {
    Cv(this, "settingsKey"), Cv(this, "defaultSettings"), this.settingsKey = r, this.defaultSettings = s;
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
      let p = function(_, g) {
        let E = !1;
        for (const v of Object.keys(g))
          _[v] === void 0 ? (_[v] = g[v], E = !0) : typeof g[v] == "object" && g[v] !== null && (_[v] = _[v] || {}, p(_[v], g[v]) && (E = !0));
        return E;
      };
      a && c.version !== a && (m.version.changed = !0, m.version.new = a, c.version = a), u && u !== "*" && c.formatVersion !== u && (m.formatVersion.changed = !0, m.formatVersion.new = u, c.formatVersion = u), (p(c, this.defaultSettings) || m.version.changed || m.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(s)) {
      a && !c.version && (c.version = a, m.version.changed = !0, m.version.new = a), u && !c.formatVersion && (c.formatVersion = u, m.formatVersion.changed = !0, m.formatVersion.new = u);
      let p = structuredClone(c), _ = c.formatVersion;
      try {
        let g;
        do {
          g = !1;
          let E = s.find((v) => v.from === _);
          if (E && E.to > _)
            p = await E.action(p), _ = E.to, p.formatVersion = E.to, g = !0;
          else
            for (const v of s)
              if (v.from === "*" && v.to > _ && _ !== v.to) {
                p = await v.action(p), _ = v.to, p.formatVersion = v.to, g = !0;
                break;
              }
        } while (g);
        if (_ !== c.formatVersion) {
          m.formatVersion.changed = !0, m.formatVersion.new = _;
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
  return Array.isArray ? Array.isArray(t) : f0(t) === "[object Array]";
}
function N2(t) {
  if (typeof t == "string")
    return t;
  let r = t + "";
  return r == "0" && 1 / t == -1 / 0 ? "-0" : r;
}
function O2(t) {
  return t == null ? "" : N2(t);
}
function Wn(t) {
  return typeof t == "string";
}
function c0(t) {
  return typeof t == "number";
}
function M2(t) {
  return t === !0 || t === !1 || j2(t) && f0(t) == "[object Boolean]";
}
function d0(t) {
  return typeof t == "object";
}
function j2(t) {
  return d0(t) && t !== null;
}
function yn(t) {
  return t != null;
}
function rf(t) {
  return !t.trim().length;
}
function f0(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const R2 = "Incorrect 'index' type", D2 = (t) => `Invalid value for key ${t}`, z2 = (t) => `Pattern length exceeds max of ${t}.`, P2 = (t) => `Missing ${t} property in key`, L2 = (t) => `Property 'weight' in key '${t}' must be a positive integer`, kv = Object.prototype.hasOwnProperty;
class I2 {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let s = 0;
    r.forEach((a) => {
      let u = h0(a);
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
function h0(t) {
  let r = null, s = null, a = null, u = 1, c = null;
  if (Wn(t) || Er(t))
    a = t, r = Av(t), s = xf(t);
  else {
    if (!kv.call(t, "name"))
      throw new Error(P2("name"));
    const f = t.name;
    if (a = f, kv.call(t, "weight") && (u = t.weight, u <= 0))
      throw new Error(L2(f));
    r = Av(f), s = xf(f), c = t.getFn;
  }
  return { path: r, id: s, weight: u, src: a, getFn: c };
}
function Av(t) {
  return Er(t) ? t : t.split(".");
}
function xf(t) {
  return Er(t) ? t.join(".") : t;
}
function B2(t, r) {
  let s = [], a = !1;
  const u = (c, f, m) => {
    if (yn(c))
      if (!f[m])
        s.push(c);
      else {
        let p = f[m];
        const _ = c[p];
        if (!yn(_))
          return;
        if (m === f.length - 1 && (Wn(_) || c0(_) || M2(_)))
          s.push(O2(_));
        else if (Er(_)) {
          a = !0;
          for (let g = 0, E = _.length; g < E; g += 1)
            u(_[g], f, m + 1);
        } else f.length && u(_, f, m + 1);
      }
  };
  return u(t, Wn(r) ? r.split(".") : r, 0), a ? s : s[0];
}
const U2 = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, H2 = {
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
}, q2 = {
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
}, Z2 = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: B2,
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
  ...H2,
  ...U2,
  ...q2,
  ...Z2
};
const G2 = /[^ ]+/g;
function V2(t = 1, r = 3) {
  const s = /* @__PURE__ */ new Map(), a = Math.pow(10, r);
  return {
    get(u) {
      const c = u.match(G2).length;
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
class th {
  constructor({
    getFn: r = Ne.getFn,
    fieldNormWeight: s = Ne.fieldNormWeight
  } = {}) {
    this.norm = V2(s, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
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
    if (!yn(r) || rf(r))
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
            const { nestedArrIndex: _, value: g } = p.pop();
            if (yn(g))
              if (Wn(g) && !rf(g)) {
                let E = {
                  v: g,
                  i: _,
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
        } else if (Wn(f) && !rf(f)) {
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
function p0(t, r, { getFn: s = Ne.getFn, fieldNormWeight: a = Ne.fieldNormWeight } = {}) {
  const u = new th({ getFn: s, fieldNormWeight: a });
  return u.setKeys(t.map(h0)), u.setSources(r), u.create(), u;
}
function $2(t, { getFn: r = Ne.getFn, fieldNormWeight: s = Ne.fieldNormWeight } = {}) {
  const { keys: a, records: u } = t, c = new th({ getFn: r, fieldNormWeight: s });
  return c.setKeys(a), c.setIndexRecords(u), c;
}
function ku(t, {
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
function Y2(t = [], r = Ne.minMatchCharLength) {
  let s = [], a = -1, u = -1, c = 0;
  for (let f = t.length; c < f; c += 1) {
    let m = t[c];
    m && a === -1 ? a = c : !m && a !== -1 && (u = c - 1, u - a + 1 >= r && s.push([a, u]), a = -1);
  }
  return t[c - 1] && c - a >= r && s.push([a, c - 1]), s;
}
const ja = 32;
function X2(t, r, s, {
  location: a = Ne.location,
  distance: u = Ne.distance,
  threshold: c = Ne.threshold,
  findAllMatches: f = Ne.findAllMatches,
  minMatchCharLength: m = Ne.minMatchCharLength,
  includeMatches: p = Ne.includeMatches,
  ignoreLocation: _ = Ne.ignoreLocation
} = {}) {
  if (r.length > ja)
    throw new Error(z2(ja));
  const g = r.length, E = t.length, v = Math.max(0, Math.min(a, E));
  let S = c, h = v;
  const C = m > 1 || p, x = C ? Array(E) : [];
  let O;
  for (; (O = t.indexOf(r, h)) > -1; ) {
    let k = ku(r, {
      currentLocation: O,
      expectedLocation: v,
      distance: u,
      ignoreLocation: _
    });
    if (S = Math.min(k, S), h = O + g, C) {
      let j = 0;
      for (; j < g; )
        x[O + j] = 1, j += 1;
    }
  }
  h = -1;
  let T = [], P = 1, l = g + E;
  const y = 1 << g - 1;
  for (let k = 0; k < g; k += 1) {
    let j = 0, L = l;
    for (; j < L; )
      ku(r, {
        errors: k,
        currentLocation: v + L,
        expectedLocation: v,
        distance: u,
        ignoreLocation: _
      }) <= S ? j = L : l = L, L = Math.floor((l - j) / 2 + j);
    l = L;
    let R = Math.max(1, v - L + 1), D = f ? E : Math.min(v + L, E) + g, q = Array(D + 2);
    q[D + 1] = (1 << k) - 1;
    for (let V = D; V >= R; V -= 1) {
      let K = V - 1, M = s[t.charAt(K)];
      if (C && (x[K] = +!!M), q[V] = (q[V + 1] << 1 | 1) & M, k && (q[V] |= (T[V + 1] | T[V]) << 1 | 1 | T[V + 1]), q[V] & y && (P = ku(r, {
        errors: k,
        currentLocation: K,
        expectedLocation: v,
        distance: u,
        ignoreLocation: _
      }), P <= S)) {
        if (S = P, h = K, h <= v)
          break;
        R = Math.max(1, 2 * v - h);
      }
    }
    if (ku(r, {
      errors: k + 1,
      currentLocation: v,
      expectedLocation: v,
      distance: u,
      ignoreLocation: _
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
    const k = Y2(x, m);
    k.length ? p && (w.indices = k) : w.isMatch = !1;
  }
  return w;
}
function F2(t) {
  let r = {};
  for (let s = 0, a = t.length; s < a; s += 1) {
    const u = t.charAt(s);
    r[u] = (r[u] || 0) | 1 << a - s - 1;
  }
  return r;
}
const bl = String.prototype.normalize ? ((t) => t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((t) => t);
class m0 {
  constructor(r, {
    location: s = Ne.location,
    threshold: a = Ne.threshold,
    distance: u = Ne.distance,
    includeMatches: c = Ne.includeMatches,
    findAllMatches: f = Ne.findAllMatches,
    minMatchCharLength: m = Ne.minMatchCharLength,
    isCaseSensitive: p = Ne.isCaseSensitive,
    ignoreDiacritics: _ = Ne.ignoreDiacritics,
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
      ignoreDiacritics: _,
      ignoreLocation: g
    }, r = p ? r : r.toLowerCase(), r = _ ? bl(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const E = (S, h) => {
      this.chunks.push({
        pattern: S,
        alphabet: F2(S),
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
    if (r = s ? r : r.toLowerCase(), r = a ? bl(r) : r, this.pattern === r) {
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
      minMatchCharLength: _,
      ignoreLocation: g
    } = this.options;
    let E = [], v = 0, S = !1;
    this.chunks.forEach(({ pattern: C, alphabet: x, startIndex: O }) => {
      const { isMatch: T, score: P, indices: l } = X2(r, C, x, {
        location: c + O,
        distance: f,
        threshold: m,
        findAllMatches: p,
        minMatchCharLength: _,
        includeMatches: u,
        ignoreLocation: g
      });
      T && (S = !0), v += P, T && l && (E = [...E, ...l]);
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
    return xv(r, this.multiRegex);
  }
  static isSingleMatch(r) {
    return xv(r, this.singleRegex);
  }
  search() {
  }
}
function xv(t, r) {
  const s = t.match(r);
  return s ? s[1] : null;
}
class Q2 extends ta {
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
class K2 extends ta {
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
class J2 extends ta {
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
class W2 extends ta {
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
class e3 extends ta {
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
class t3 extends ta {
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
class g0 extends ta {
  constructor(r, {
    location: s = Ne.location,
    threshold: a = Ne.threshold,
    distance: u = Ne.distance,
    includeMatches: c = Ne.includeMatches,
    findAllMatches: f = Ne.findAllMatches,
    minMatchCharLength: m = Ne.minMatchCharLength,
    isCaseSensitive: p = Ne.isCaseSensitive,
    ignoreDiacritics: _ = Ne.ignoreDiacritics,
    ignoreLocation: g = Ne.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new m0(r, {
      location: s,
      threshold: a,
      distance: u,
      includeMatches: c,
      findAllMatches: f,
      minMatchCharLength: m,
      isCaseSensitive: p,
      ignoreDiacritics: _,
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
class v0 extends ta {
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
const Tf = [
  Q2,
  v0,
  J2,
  W2,
  t3,
  e3,
  K2,
  g0
], Tv = Tf.length, n3 = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, r3 = "|";
function a3(t, r = {}) {
  return t.split(r3).map((s) => {
    let a = s.trim().split(n3).filter((c) => c && !!c.trim()), u = [];
    for (let c = 0, f = a.length; c < f; c += 1) {
      const m = a[c];
      let p = !1, _ = -1;
      for (; !p && ++_ < Tv; ) {
        const g = Tf[_];
        let E = g.isMultiMatch(m);
        E && (u.push(new g(E, r)), p = !0);
      }
      if (!p)
        for (_ = -1; ++_ < Tv; ) {
          const g = Tf[_];
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
const i3 = /* @__PURE__ */ new Set([g0.type, v0.type]);
class s3 {
  constructor(r, {
    isCaseSensitive: s = Ne.isCaseSensitive,
    ignoreDiacritics: a = Ne.ignoreDiacritics,
    includeMatches: u = Ne.includeMatches,
    minMatchCharLength: c = Ne.minMatchCharLength,
    ignoreLocation: f = Ne.ignoreLocation,
    findAllMatches: m = Ne.findAllMatches,
    location: p = Ne.location,
    threshold: _ = Ne.threshold,
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
      threshold: _,
      distance: g
    }, r = s ? r : r.toLowerCase(), r = a ? bl(r) : r, this.pattern = r, this.query = a3(this.pattern, this.options);
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
    r = u ? r : r.toLowerCase(), r = c ? bl(r) : r;
    let f = 0, m = [], p = 0;
    for (let _ = 0, g = s.length; _ < g; _ += 1) {
      const E = s[_];
      m.length = 0, f = 0;
      for (let v = 0, S = E.length; v < S; v += 1) {
        const h = E[v], { isMatch: C, indices: x, score: O } = h.search(r);
        if (C) {
          if (f += 1, p += O, a) {
            const T = h.constructor.type;
            i3.has(T) ? m = [...m, ...x] : m.push(x);
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
const Nf = [];
function o3(...t) {
  Nf.push(...t);
}
function Of(t, r) {
  for (let s = 0, a = Nf.length; s < a; s += 1) {
    let u = Nf[s];
    if (u.condition(t, r))
      return new u(t, r);
  }
  return new m0(t, r);
}
const Sl = {
  AND: "$and",
  OR: "$or"
}, Mf = {
  PATH: "$path",
  PATTERN: "$val"
}, jf = (t) => !!(t[Sl.AND] || t[Sl.OR]), u3 = (t) => !!t[Mf.PATH], l3 = (t) => !Er(t) && d0(t) && !jf(t), Nv = (t) => ({
  [Sl.AND]: Object.keys(t).map((r) => ({
    [r]: t[r]
  }))
});
function y0(t, r, { auto: s = !0 } = {}) {
  const a = (u) => {
    let c = Object.keys(u);
    const f = u3(u);
    if (!f && c.length > 1 && !jf(u))
      return a(Nv(u));
    if (l3(u)) {
      const p = f ? u[Mf.PATH] : c[0], _ = f ? u[Mf.PATTERN] : u[p];
      if (!Wn(_))
        throw new Error(D2(p));
      const g = {
        keyId: xf(p),
        pattern: _
      };
      return s && (g.searcher = Of(_, r)), g;
    }
    let m = {
      children: [],
      operator: c[0]
    };
    return c.forEach((p) => {
      const _ = u[p];
      Er(_) && _.forEach((g) => {
        m.children.push(a(g));
      });
    }), m;
  };
  return jf(t) || (t = Nv(t)), a(t);
}
function c3(t, { ignoreFieldNorm: r = Ne.ignoreFieldNorm }) {
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
function d3(t, r) {
  const s = t.matches;
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
function f3(t, r) {
  r.score = t.score;
}
function h3(t, r, {
  includeMatches: s = Ne.includeMatches,
  includeScore: a = Ne.includeScore
} = {}) {
  const u = [];
  return s && u.push(d3), a && u.push(f3), t.map((c) => {
    const { idx: f } = c, m = {
      item: r[f],
      refIndex: f
    };
    return u.length && u.forEach((p) => {
      p(c, m);
    }), m;
  });
}
class Ui {
  constructor(r, s = {}, a) {
    this.options = { ...Ne, ...s }, this.options.useExtendedSearch, this._keyStore = new I2(this.options.keys), this.setCollection(r, a);
  }
  setCollection(r, s) {
    if (this._docs = r, s && !(s instanceof th))
      throw new Error(R2);
    this._myIndex = s || p0(this.options.keys, this._docs, {
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
    return c3(p, { ignoreFieldNorm: m }), c && p.sort(f), c0(s) && s > -1 && (p = p.slice(0, s)), h3(p, this._docs, {
      includeMatches: a,
      includeScore: u
    });
  }
  _searchStringList(r) {
    const s = Of(r, this.options), { records: a } = this._myIndex, u = [];
    return a.forEach(({ v: c, i: f, n: m }) => {
      if (!yn(c))
        return;
      const { isMatch: p, score: _, indices: g } = s.searchIn(c);
      p && u.push({
        item: c,
        idx: f,
        matches: [{ score: _, value: c, norm: m, indices: g }]
      });
    }), u;
  }
  _searchLogical(r) {
    const s = y0(r, this.options), a = (m, p, _) => {
      if (!m.children) {
        const { keyId: E, searcher: v } = m, S = this._findMatches({
          key: this._keyStore.get(E),
          value: this._myIndex.getValueForItemAtKeyId(p, E),
          searcher: v
        });
        return S && S.length ? [
          {
            idx: _,
            item: p,
            matches: S
          }
        ] : [];
      }
      const g = [];
      for (let E = 0, v = m.children.length; E < v; E += 1) {
        const S = m.children[E], h = a(S, p, _);
        if (h.length)
          g.push(...h);
        else if (m.operator === Sl.AND)
          return [];
      }
      return g;
    }, u = this._myIndex.records, c = {}, f = [];
    return u.forEach(({ $: m, i: p }) => {
      if (yn(m)) {
        let _ = a(s, m, p);
        _.length && (c[p] || (c[p] = { idx: p, item: m, matches: [] }, f.push(c[p])), _.forEach(({ matches: g }) => {
          c[p].matches.push(...g);
        }));
      }
    }), f;
  }
  _searchObjectList(r) {
    const s = Of(r, this.options), { keys: a, records: u } = this._myIndex, c = [];
    return u.forEach(({ $: f, i: m }) => {
      if (!yn(f))
        return;
      let p = [];
      a.forEach((_, g) => {
        p.push(
          ...this._findMatches({
            key: _,
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
        const { isMatch: p, score: _, indices: g } = a.searchIn(c);
        p && u.push({
          score: _,
          key: r,
          value: c,
          idx: f,
          norm: m,
          indices: g
        });
      });
    else {
      const { v: c, n: f } = s, { isMatch: m, score: p, indices: _ } = a.searchIn(c);
      m && u.push({ score: p, key: r, value: c, norm: f, indices: _ });
    }
    return u;
  }
}
Ui.version = "7.1.0";
Ui.createIndex = p0;
Ui.parseIndex = $2;
Ui.config = Ne;
Ui.parseQuery = y0;
o3(s3);
var p3 = Object.defineProperty, m3 = (t, r, s) => r in t ? p3(t, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[r] = s, g3 = (t, r, s) => m3(t, r + "", s);
let v3 = class {
  constructor() {
    g3(this, "requestMap"), this.requestMap = /* @__PURE__ */ new Map();
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
        for await (const _ of m())
          p = _, s != null && s.onEntry && await s.onEntry(c, _);
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
async function y3(t, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[t].callback(...r);
}
async function ge(t, r, { escapeHtml: s = !0 } = {}) {
  await y3("echo", { severity: t, escapeHtml: (!!s).toString() }, r);
}
function af(t) {
  return Z1(t);
}
function Ov(t, r) {
  return H1(t, r);
}
function Au(t, r, s) {
  return q1(t, r, s);
}
function _3(t, r, s) {
  return t2(t, r, s);
}
function b3(t, r) {
  return n2(t, r);
}
function S3(t, {
  customStoryString: r,
  customInstructSettings: s
} = {}) {
  return U1(t, { customStoryString: r, customInstructSettings: s });
}
function ka(t) {
  return u2(t);
}
function w3() {
  return {
    prompt: Ps[Ls.prompt],
    interval: Ps[Ls.interval],
    position: Ps[Ls.position],
    depth: Ps[Ls.depth],
    role: Ps[Ls.role]
  };
}
function E3(t, r) {
  return d2(t, r);
}
function C3({
  name2: t,
  charDescription: r,
  charPersonality: s,
  Scenario: a,
  worldInfoBefore: u,
  worldInfoAfter: c,
  bias: f,
  type: m,
  quietPrompt: p,
  quietImage: _,
  extensionPrompts: g,
  cyclePrompt: E,
  systemPromptOverride: v,
  jailbreakPromptOverride: S,
  personaDescription: h,
  messages: C,
  messageExamples: x
}, O) {
  return l2(
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
      quietImage: _,
      cyclePrompt: E,
      systemPromptOverride: v,
      jailbreakPromptOverride: S,
      personaDescription: h,
      extensionPrompts: g,
      messages: C,
      messageExamples: x
    },
    O
  );
}
function k3(t) {
  return a2(t);
}
function A3(t) {
  return i2(t);
}
function x3(t, r, {
  characterOverride: s,
  isMarkdown: a,
  isPrompt: u,
  isEdit: c,
  depth: f
}) {
  return h2(t, r, { characterOverride: s, isMarkdown: a, isPrompt: u, isEdit: c, depth: f });
}
function T3(t, r, { characterOverride: s = null } = {}) {
  return f2(t, r, { characterOverride: s });
}
async function N3(t, r) {
  return await r2(t, r);
}
function Mv(t, {
  wiFormat: r
} = {}) {
  return s2(t, { wiFormat: r });
}
function Us(t) {
  return o2(t);
}
function _0(t, {
  manualAvatarKey: r
} = {}) {
  return p2(t, { manualAvatarKey: r });
}
function nh(t, r) {
  return X1(t, r);
}
class O3 {
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
var M3 = Object.defineProperty, j3 = (t, r, s) => r in t ? M3(t, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[r] = s, xu = (t, r, s) => j3(t, typeof r != "symbol" ? r + "" : r, s);
class R3 {
  constructor(r) {
    xu(this, "messages", []), xu(this, "tokenizer"), xu(this, "maxContext"), xu(this, "currentTokenCount", 0), this.tokenizer = new O3(), this.maxContext = r;
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
      const p = s[m], _ = a[m];
      if (this.currentTokenCount + c + _ <= this.maxContext)
        f.unshift(p), c += _;
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
async function b0(t, {
  targetCharacterId: r,
  presetName: s,
  instructName: a,
  contextName: u,
  syspromptName: c,
  maxContext: f,
  includeNames: m,
  ignoreCharacterFields: p,
  ignoreAuthorNote: _,
  ignoreWorldInfo: g,
  messageIndexesBetween: E
} = {}) {
  var v, S, h, C, x, O, T, P, l, y, w, k, j, L;
  if (!["textgenerationwebui", "openai"].includes(t))
    throw new Error("Unsupported API");
  const R = SillyTavern.getContext();
  let { description: D, personality: q, persona: G, scenario: V, mesExamples: K, system: M, jailbreak: B } = p ? {
    description: "",
    personality: "",
    persona: "",
    scenario: "",
    mesExamples: "",
    system: "",
    jailbreak: ""
  } : R.getCharacterCardFields({
    chid: r
  });
  const J = t === "textgenerationwebui" ? (v = R.getPresetManager("instruct")) == null ? void 0 : v.getCompletionPresetByName(a) : void 0, ae = !!(J != null && J.enabled);
  let I = Ov(K, ae);
  function X() {
    var ye, _e;
    if (typeof f == "number")
      return f;
    if (!f || f === "active" || !s)
      return af();
    if (typeof f == "number")
      return f;
    let qe;
    if (t === "textgenerationwebui") {
      const Ze = (ye = R.getPresetManager("textgenerationwebui")) == null ? void 0 : ye.getCompletionPresetByName(s);
      qe = Ze?.max_length;
    } else {
      const Ze = (_e = R.getPresetManager("openai")) == null ? void 0 : _e.getCompletionPresetByName(s);
      qe = Ze?.openai_max_context;
    }
    return typeof qe == "number" ? qe : af();
  }
  let ce = [];
  const Y = X();
  if (Y <= 0)
    return { result: [], warnings: ce };
  const U = new R3(Y), te = R.ToolManager.isToolCallingSupported(), ne = E?.start ?? 0, ue = E != null && E.end ? E.end + 1 : void 0;
  let re = ne === -1 && ue === 0 ? [] : R.chat.slice(ne, ue).filter((ye) => {
    var _e;
    return !ye.is_system || te && Array.isArray((_e = ye.extra) == null ? void 0 : _e.tool_invocations);
  });
  re = await Promise.all(
    re.map(async (ye, _e) => {
      var qe, Ze;
      let et = ye.mes, Vn = ye.is_user ? cv.USER_INPUT : cv.AI_OUTPUT, Dn = { isPrompt: !0, depth: re.length - _e - 1 }, mt = x3(et, Vn, Dn);
      return mt = await N3(ye, mt), (qe = ye?.extra) != null && qe.append_title && (Ze = ye?.extra) != null && Ze.title && (mt = `${mt}

${ye.extra.title}`), {
        ...ye,
        mes: mt,
        index: _e
      };
    })
  );
  const pe = re.map((ye) => F1 ? `${ye.name}: ${ye.mes}` : ye.mes).reverse(), { worldInfoString: je, worldInfoBefore: Se, worldInfoAfter: me, worldInfoExamples: fe, worldInfoDepth: we, anBefore: Le, anAfter: We } = g ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await R.getWorldInfoPrompt(pe, Y, !1);
  for (const ye of fe) {
    const _e = ye.content;
    if (_e.length === 0)
      continue;
    const qe = Au(_e, Ea, Fr), Ze = Ov(qe, ae);
    ye.position === Q1.before ? I.unshift(...Ze) : I.push(...Ze);
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
    I && (I = _3(I, Ea, Fr));
    const _e = (S = R.getPresetManager("sysprompt")) == null ? void 0 : S.getCompletionPresetByName(c);
    _e && (M = R.powerUserSettings.prefer_character_prompt && M ? M : Au(_e.content, Ea, Fr), M = ae ? b3(
      R.substituteParams(M, Ea, Fr, _e.content),
      J
    ) : M);
    const qe = {
      description: D,
      personality: q,
      persona: R.powerUserSettings.persona_description_position == uv.IN_PROMPT ? G : "",
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
    }, Ze = (h = R.getPresetManager("context")) == null ? void 0 : h.getCompletionPresetByName(u);
    let et = S3(qe, {
      customInstructSettings: J,
      customStoryString: Ze?.story_string
    });
    et && U.add({ role: "system", content: et, ignoreInstruct: !0 }), Fe();
  } else {
    let ye = function(Vt) {
      const Qt = bn.find((Ha) => Ha.identifier === Vt);
      if (Qt)
        return Qt;
      const po = et.prompts.find((Ha) => Ha.identifier === Vt);
      if (po)
        return po;
    }, _e = k3(re), qe = A3(I);
    async function Ze() {
      let [Vt, Qt] = await C3(
        {
          name2: Fr,
          charDescription: D,
          charPersonality: q,
          Scenario: V,
          worldInfoBefore: Se,
          worldInfoAfter: me,
          extensionPrompts: R.extensionPrompts,
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
    const et = (C = R.getPresetManager("openai")) == null ? void 0 : C.getCompletionPresetByName(s);
    if (!et)
      return console.warn(`Preset not found: ${s}. Using current preset.`), ce.push(`Preset not found: ${s}. Using current preset.`), Ze(), { result: U.getMessages(), warnings: ce };
    let Vn = (x = et.prompt_order) == null ? void 0 : x.find((Vt) => Vt.character_id === sn);
    if (!Vn && et.prompt_order && et.prompt_order.length > 0 && (Vn = et.prompt_order[et.prompt_order.length - 1]), !Vn)
      return console.warn(`No prompt order found for preset: ${s}. Using current preset.`), ce.push(`No prompt order found for preset: ${s}. Using current preset.`), Ze(), { result: U.getMessages(), warnings: ce };
    const Dn = V && et.scenario_format ? R.substituteParams(et.scenario_format) : "", mt = q && et.personality_format ? R.substituteParams(et.personality_format) : "", $n = R.substituteParams(et.group_nudge_prompt), Gt = et.impersonation_prompt ? R.substituteParams(et.impersonation_prompt) : "", bn = [];
    g || bn.push(
      {
        role: "system",
        content: Mv(Se, { wiFormat: et.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: Mv(me, { wiFormat: et.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), p || bn.push(
      { role: "system", content: D, identifier: "charDescription" },
      { role: "system", content: mt, identifier: "charPersonality" },
      { role: "system", content: Dn, identifier: "scenario" }
    ), bn.push(
      { role: "system", content: Gt, identifier: "impersonate" },
      { role: "system", content: $n, identifier: "groupNudge" }
    );
    const aa = R.extensionPrompts["1_memory"];
    aa && aa.value && bn.push({
      role: ka(aa.role),
      content: aa.value,
      identifier: "summary",
      position: Us(aa.position)
    });
    const ia = R.extensionPrompts["2_floating_prompt"];
    !_ && ia && ia.value && bn.push({
      role: ka(ia.role),
      content: ia.value,
      identifier: "authorsNote",
      position: Us(ia.position)
    });
    const ar = R.extensionPrompts["3_vectors"];
    ar && ar.value && bn.push({
      role: "system",
      content: ar.value,
      identifier: "vectorsMemory",
      position: Us(ar.position)
    });
    const Yn = R.extensionPrompts["4_vectors_data_bank"];
    Yn && Yn.value && bn.push({
      role: ka(Yn.role),
      content: Yn.value,
      identifier: "vectorsDataBank",
      position: Us(Yn.position)
    });
    const Sn = R.extensionPrompts.chromadb;
    Sn && Sn.value && bn.push({
      role: "system",
      content: Sn.value,
      identifier: "smartContext",
      position: Us(Sn.position)
    }), !p && R.powerUserSettings.persona_description && R.powerUserSettings.persona_description_position === uv.IN_PROMPT && bn.push({
      role: "system",
      content: R.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), Vn.order.forEach((Vt) => {
      if (!Vt.enabled)
        return;
      const Qt = ye(Vt.identifier);
      if (Qt && Qt.content) {
        U.add({
          role: Qt.role ?? "system",
          content: R.substituteParams(Qt.content)
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
  for (const ye in R.extensionPrompts)
    if (Object.hasOwn(R.extensionPrompts, ye)) {
      const _e = R.extensionPrompts[ye];
      if (Rn.includes(ye) || !R.extensionPrompts[ye].value || ![Ca.BEFORE_PROMPT, Ca.IN_PROMPT].includes(_e.position) || typeof _e.filter == "function" && !await _e.filter()) continue;
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
    const ye = E3(Ft, Number(sn));
    if (Ft && Array.isArray(ye) && ye.length > 0)
      ye.filter((_e) => _e.text).forEach((_e, qe) => {
        const Ze = U.getMessages();
        U.insert(Ze.length - _e.depth, { role: _e.role, content: _e.text });
      });
    else {
      const _e = Au(
        (y = (l = (P = (T = (O = R.characters[sn]) == null ? void 0 : O.data) == null ? void 0 : T.extensions) == null ? void 0 : P.depth_prompt) == null ? void 0 : l.prompt) == null ? void 0 : y.trim(),
        Ea,
        Fr
      ) || "";
      if (_e) {
        const qe = V1, Ze = ((L = (j = (k = (w = R.characters[sn]) == null ? void 0 : w.data) == null ? void 0 : k.extensions) == null ? void 0 : j.depth_prompt) == null ? void 0 : L.role) ?? G1, et = U.getMessages();
        U.insert(et.length - qe, {
          role: ka(Ze),
          content: _e
        });
      }
    }
  }
  let dt = -1;
  if (!_) {
    const ye = w3();
    if (ye.prompt) {
      ye.prompt = Au(ye.prompt, Ea, Fr);
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
function jv(t, r) {
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
    r % 2 ? jv(Object(s), !0).forEach(function(a) {
      D3(t, a, s[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s)) : jv(Object(s)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(s, a));
    });
  }
  return t;
}
function fl(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? fl = function(r) {
    return typeof r;
  } : fl = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, fl(t);
}
function D3(t, r, s) {
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
function z3(t, r) {
  if (t == null) return {};
  var s = {}, a = Object.keys(t), u, c;
  for (c = 0; c < a.length; c++)
    u = a[c], !(r.indexOf(u) >= 0) && (s[u] = t[u]);
  return s;
}
function P3(t, r) {
  if (t == null) return {};
  var s = z3(t, r), a, u;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    for (u = 0; u < c.length; u++)
      a = c[u], !(r.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(t, a) && (s[a] = t[a]);
  }
  return s;
}
var L3 = "1.15.6";
function wr(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var kr = wr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), uo = wr(/Edge/i), Rv = wr(/firefox/i), to = wr(/safari/i) && !wr(/chrome/i) && !wr(/android/i), rh = wr(/iP(ad|od|hone)/i), S0 = wr(/chrome/i) && wr(/android/i), w0 = {
  capture: !1,
  passive: !1
};
function He(t, r, s) {
  t.addEventListener(r, s, !kr && w0);
}
function Ue(t, r, s) {
  t.removeEventListener(r, s, !kr && w0);
}
function wl(t, r) {
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
function E0(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function Hn(t, r, s, a) {
  if (t) {
    s = s || document;
    do {
      if (r != null && (r[0] === ">" ? t.parentNode === s && wl(t, r) : wl(t, r)) || a && t === s)
        return t;
      if (t === s) break;
    } while (t = E0(t));
  }
  return null;
}
var Dv = /\s+/g;
function gn(t, r, s) {
  if (t && r)
    if (t.classList)
      t.classList[s ? "add" : "remove"](r);
    else {
      var a = (" " + t.className + " ").replace(Dv, " ").replace(" " + r + " ", " ");
      t.className = (a + (s ? " " + r : "")).replace(Dv, " ");
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
function Li(t, r) {
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
function C0(t, r, s) {
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
    var c, f, m, p, _, g, E;
    if (t !== window && t.parentNode && t !== er() ? (c = t.getBoundingClientRect(), f = c.top, m = c.left, p = c.bottom, _ = c.right, g = c.height, E = c.width) : (f = 0, m = 0, p = window.innerHeight, _ = window.innerWidth, g = window.innerHeight, E = window.innerWidth), (r || s) && t !== window && (u = u || t.parentNode, !kr))
      do
        if (u && u.getBoundingClientRect && (xe(u, "transform") !== "none" || s && xe(u, "position") !== "static")) {
          var v = u.getBoundingClientRect();
          f -= v.top + parseInt(xe(u, "border-top-width")), m -= v.left + parseInt(xe(u, "border-left-width")), p = f + c.height, _ = m + c.width;
          break;
        }
      while (u = u.parentNode);
    if (a && t !== window) {
      var S = Li(u || t), h = S && S.a, C = S && S.d;
      S && (f /= C, m /= h, E /= h, g /= C, p = f + g, _ = m + E);
    }
    return {
      top: f,
      left: m,
      bottom: p,
      right: _,
      width: E,
      height: g
    };
  }
}
function zv(t, r, s) {
  for (var a = ea(t, !0), u = wt(t)[r]; a; ) {
    var c = wt(a)[s], f = void 0;
    if (f = u >= c, !f) return a;
    if (a === er()) break;
    a = ea(a, !1);
  }
  return !1;
}
function Bi(t, r, s, a) {
  for (var u = 0, c = 0, f = t.children; c < f.length; ) {
    if (f[c].style.display !== "none" && f[c] !== Te.ghost && (a || f[c] !== Te.dragged) && Hn(f[c], s.draggable, t, !1)) {
      if (u === r)
        return f[c];
      u++;
    }
    c++;
  }
  return null;
}
function ah(t, r) {
  for (var s = t.lastElementChild; s && (s === Te.ghost || xe(s, "display") === "none" || r && !wl(s, r)); )
    s = s.previousElementSibling;
  return s || null;
}
function Mn(t, r) {
  var s = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== Te.clone && (!r || wl(t, r)) && s++;
  return s;
}
function Pv(t) {
  var r = 0, s = 0, a = er();
  if (t)
    do {
      var u = Li(t), c = u.a, f = u.d;
      r += t.scrollLeft * c, s += t.scrollTop * f;
    } while (t !== a && (t = t.parentNode));
  return [r, s];
}
function I3(t, r) {
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
function B3(t, r) {
  if (t && r)
    for (var s in r)
      r.hasOwnProperty(s) && (t[s] = r[s]);
  return t;
}
function sf(t, r) {
  return Math.round(t.top) === Math.round(r.top) && Math.round(t.left) === Math.round(r.left) && Math.round(t.height) === Math.round(r.height) && Math.round(t.width) === Math.round(r.width);
}
var no;
function k0(t, r) {
  return function() {
    if (!no) {
      var s = arguments, a = this;
      s.length === 1 ? t.call(a, s[0]) : t.apply(a, s), no = setTimeout(function() {
        no = void 0;
      }, r);
    }
  };
}
function U3() {
  clearTimeout(no), no = void 0;
}
function A0(t, r, s) {
  t.scrollLeft += r, t.scrollTop += s;
}
function x0(t) {
  var r = window.Polymer, s = window.jQuery || window.Zepto;
  return r && r.dom ? r.dom(t).cloneNode(!0) : s ? s(t).clone(!0)[0] : t.cloneNode(!0);
}
function T0(t, r, s) {
  var a = {};
  return Array.from(t.children).forEach(function(u) {
    var c, f, m, p;
    if (!(!Hn(u, r.draggable, t, !1) || u.animated || u === s)) {
      var _ = wt(u);
      a.left = Math.min((c = a.left) !== null && c !== void 0 ? c : 1 / 0, _.left), a.top = Math.min((f = a.top) !== null && f !== void 0 ? f : 1 / 0, _.top), a.right = Math.max((m = a.right) !== null && m !== void 0 ? m : -1 / 0, _.right), a.bottom = Math.max((p = a.bottom) !== null && p !== void 0 ? p : -1 / 0, _.bottom);
    }
  }), a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
var an = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function H3() {
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
              var f = Li(u, !0);
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
      t.splice(I3(t, {
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
        var p = 0, _ = m.target, g = _.fromRect, E = wt(_), v = _.prevFromRect, S = _.prevToRect, h = m.rect, C = Li(_, !0);
        C && (E.top -= C.f, E.left -= C.e), _.toRect = E, _.thisAnimationDuration && sf(v, E) && !sf(g, E) && // Make sure animatingRect is on line between toRect & fromRect
        (h.top - E.top) / (h.left - E.left) === (g.top - E.top) / (g.left - E.left) && (p = Z3(h, v, S, u.options)), sf(E, g) || (_.prevFromRect = g, _.prevToRect = E, p || (p = u.options.animation), u.animate(_, h, E, p)), p && (c = !0, f = Math.max(f, p), clearTimeout(_.animationResetTimer), _.animationResetTimer = setTimeout(function() {
          _.animationTime = 0, _.prevFromRect = null, _.fromRect = null, _.prevToRect = null, _.thisAnimationDuration = null;
        }, p), _.thisAnimationDuration = p);
      }), clearTimeout(r), c ? r = setTimeout(function() {
        typeof a == "function" && a();
      }, f) : typeof a == "function" && a(), t = [];
    },
    animate: function(a, u, c, f) {
      if (f) {
        xe(a, "transition", ""), xe(a, "transform", "");
        var m = Li(this.el), p = m && m.a, _ = m && m.d, g = (u.left - c.left) / (p || 1), E = (u.top - c.top) / (_ || 1);
        a.animatingX = !!g, a.animatingY = !!E, xe(a, "transform", "translate3d(" + g + "px," + E + "px,0)"), this.forRepaintDummy = q3(a), xe(a, "transition", "transform " + f + "ms" + (this.options.easing ? " " + this.options.easing : "")), xe(a, "transform", "translate3d(0,0,0)"), typeof a.animated == "number" && clearTimeout(a.animated), a.animated = setTimeout(function() {
          xe(a, "transition", ""), xe(a, "transform", ""), a.animated = !1, a.animatingX = !1, a.animatingY = !1;
        }, f);
      }
    }
  };
}
function q3(t) {
  return t.offsetWidth;
}
function Z3(t, r, s, a) {
  return Math.sqrt(Math.pow(r.top - t.top, 2) + Math.pow(r.left - t.left, 2)) / Math.sqrt(Math.pow(r.top - s.top, 2) + Math.pow(r.left - s.left, 2)) * a.animation;
}
var Ti = [], of = {
  initializeByDefault: !0
}, lo = {
  mount: function(r) {
    for (var s in of)
      of.hasOwnProperty(s) && !(s in r) && (r[s] = of[s]);
    Ti.forEach(function(a) {
      if (a.pluginName === r.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(r.pluginName, " more than once");
    }), Ti.push(r);
  },
  pluginEvent: function(r, s, a) {
    var u = this;
    this.eventCanceled = !1, a.cancel = function() {
      u.eventCanceled = !0;
    };
    var c = r + "Global";
    Ti.forEach(function(f) {
      s[f.pluginName] && (s[f.pluginName][c] && s[f.pluginName][c](nr({
        sortable: s
      }, a)), s.options[f.pluginName] && s[f.pluginName][r] && s[f.pluginName][r](nr({
        sortable: s
      }, a)));
    });
  },
  initializePlugins: function(r, s, a, u) {
    Ti.forEach(function(m) {
      var p = m.pluginName;
      if (!(!r.options[p] && !m.initializeByDefault)) {
        var _ = new m(r, s, r.options);
        _.sortable = r, _.options = r.options, r[p] = _, Cr(a, _.defaults);
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
    return Ti.forEach(function(u) {
      typeof u.eventProperties == "function" && Cr(a, u.eventProperties.call(s[u.pluginName], r));
    }), a;
  },
  modifyOption: function(r, s, a) {
    var u;
    return Ti.forEach(function(c) {
      r[c.pluginName] && c.optionListeners && typeof c.optionListeners[s] == "function" && (u = c.optionListeners[s].call(r[c.pluginName], a));
    }), u;
  }
};
function G3(t) {
  var r = t.sortable, s = t.rootEl, a = t.name, u = t.targetEl, c = t.cloneEl, f = t.toEl, m = t.fromEl, p = t.oldIndex, _ = t.newIndex, g = t.oldDraggableIndex, E = t.newDraggableIndex, v = t.originalEvent, S = t.putSortable, h = t.extraEventProperties;
  if (r = r || s && s[an], !!r) {
    var C, x = r.options, O = "on" + a.charAt(0).toUpperCase() + a.substr(1);
    window.CustomEvent && !kr && !uo ? C = new CustomEvent(a, {
      bubbles: !0,
      cancelable: !0
    }) : (C = document.createEvent("Event"), C.initEvent(a, !0, !0)), C.to = f || s, C.from = m || s, C.item = u || s, C.clone = c, C.oldIndex = p, C.newIndex = _, C.oldDraggableIndex = g, C.newDraggableIndex = E, C.originalEvent = v, C.pullMode = S ? S.lastPutMode : void 0;
    var T = nr(nr({}, h), lo.getEventProperties(a, r));
    for (var P in T)
      C[P] = T[P];
    s && s.dispatchEvent(C), x[O] && x[O].call(r, C);
  }
}
var V3 = ["evt"], nn = function(r, s) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u = a.evt, c = P3(a, V3);
  lo.pluginEvent.bind(Te)(r, s, nr({
    dragEl: he,
    parentEl: pt,
    ghostEl: Me,
    rootEl: it,
    nextEl: Oa,
    lastDownEl: hl,
    cloneEl: lt,
    cloneHidden: Wr,
    dragStarted: Fs,
    putSortable: Pt,
    activeSortable: Te.active,
    originalEvent: u,
    oldIndex: zi,
    oldDraggableIndex: ro,
    newIndex: vn,
    newDraggableIndex: Jr,
    hideGhostForTarget: j0,
    unhideGhostForTarget: R0,
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
  G3(nr({
    putSortable: Pt,
    cloneEl: lt,
    targetEl: he,
    rootEl: it,
    oldIndex: zi,
    oldDraggableIndex: ro,
    newIndex: vn,
    newDraggableIndex: Jr
  }, t));
}
var he, pt, Me, it, Oa, hl, lt, Wr, zi, vn, ro, Jr, Tu, Pt, Di = !1, El = !1, Cl = [], Aa, In, uf, lf, Lv, Iv, Fs, Ni, ao, io = !1, Nu = !1, pl, qt, cf = [], Rf = !1, kl = [], Rl = typeof document < "u", Ou = rh, Bv = uo || kr ? "cssFloat" : "float", $3 = Rl && !S0 && !rh && "draggable" in document.createElement("div"), N0 = (function() {
  if (Rl) {
    if (kr)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
})(), O0 = function(r, s) {
  var a = xe(r), u = parseInt(a.width) - parseInt(a.paddingLeft) - parseInt(a.paddingRight) - parseInt(a.borderLeftWidth) - parseInt(a.borderRightWidth), c = Bi(r, 0, s), f = Bi(r, 1, s), m = c && xe(c), p = f && xe(f), _ = m && parseInt(m.marginLeft) + parseInt(m.marginRight) + wt(c).width, g = p && parseInt(p.marginLeft) + parseInt(p.marginRight) + wt(f).width;
  if (a.display === "flex")
    return a.flexDirection === "column" || a.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (a.display === "grid")
    return a.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (c && m.float && m.float !== "none") {
    var E = m.float === "left" ? "left" : "right";
    return f && (p.clear === "both" || p.clear === E) ? "vertical" : "horizontal";
  }
  return c && (m.display === "block" || m.display === "flex" || m.display === "table" || m.display === "grid" || _ >= u && a[Bv] === "none" || f && a[Bv] === "none" && _ + g > u) ? "vertical" : "horizontal";
}, Y3 = function(r, s, a) {
  var u = a ? r.left : r.top, c = a ? r.right : r.bottom, f = a ? r.width : r.height, m = a ? s.left : s.top, p = a ? s.right : s.bottom, _ = a ? s.width : s.height;
  return u === m || c === p || u + f / 2 === m + _ / 2;
}, X3 = function(r, s) {
  var a;
  return Cl.some(function(u) {
    var c = u[an].options.emptyInsertThreshold;
    if (!(!c || ah(u))) {
      var f = wt(u), m = r >= f.left - c && r <= f.right + c, p = s >= f.top - c && s <= f.bottom + c;
      if (m && p)
        return a = u;
    }
  }), a;
}, M0 = function(r) {
  function s(c, f) {
    return function(m, p, _, g) {
      var E = m.options.group.name && p.options.group.name && m.options.group.name === p.options.group.name;
      if (c == null && (f || E))
        return !0;
      if (c == null || c === !1)
        return !1;
      if (f && c === "clone")
        return c;
      if (typeof c == "function")
        return s(c(m, p, _, g), f)(m, p, _, g);
      var v = (f ? m : p).options.group.name;
      return c === !0 || typeof c == "string" && c === v || c.join && c.indexOf(v) > -1;
    };
  }
  var a = {}, u = r.group;
  (!u || fl(u) != "object") && (u = {
    name: u
  }), a.name = u.name, a.checkPull = s(u.pull, !0), a.checkPut = s(u.put), a.revertClone = u.revertClone, r.group = a;
}, j0 = function() {
  !N0 && Me && xe(Me, "display", "none");
}, R0 = function() {
  !N0 && Me && xe(Me, "display", "");
};
Rl && !S0 && document.addEventListener("click", function(t) {
  if (El)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), El = !1, !1;
}, !0);
var xa = function(r) {
  if (he) {
    r = r.touches ? r.touches[0] : r;
    var s = X3(r.clientX, r.clientY);
    if (s) {
      var a = {};
      for (var u in r)
        r.hasOwnProperty(u) && (a[u] = r[u]);
      a.target = a.rootEl = s, a.preventDefault = void 0, a.stopPropagation = void 0, s[an]._onDragOver(a);
    }
  }
}, F3 = function(r) {
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
      return O0(t, this.options);
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
    supportPointer: Te.supportPointer !== !1 && "PointerEvent" in window && (!to || rh),
    emptyInsertThreshold: 5
  };
  lo.initializePlugins(this, t, s);
  for (var a in s)
    !(a in r) && (r[a] = s[a]);
  M0(r);
  for (var u in this)
    u.charAt(0) === "_" && typeof this[u] == "function" && (this[u] = this[u].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : $3, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? He(t, "pointerdown", this._onTapStart) : (He(t, "mousedown", this._onTapStart), He(t, "touchstart", this._onTapStart)), this.nativeDraggable && (He(t, "dragover", this), He(t, "dragenter", this)), Cl.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), Cr(this, H3());
}
Te.prototype = /** @lends Sortable.prototype */
{
  constructor: Te,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (Ni = null);
  },
  _getDirection: function(r, s) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, s, he) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var s = this, a = this.el, u = this.options, c = u.preventOnFilter, f = r.type, m = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, p = (m || r).target, _ = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || p, g = u.filter;
      if (r8(a), !he && !(/mousedown|pointerdown/.test(f) && r.button !== 0 || u.disabled) && !_.isContentEditable && !(!this.nativeDraggable && to && p && p.tagName.toUpperCase() === "SELECT") && (p = Hn(p, u.draggable, a, !1), !(p && p.animated) && hl !== p)) {
        if (zi = Mn(p), ro = Mn(p, u.draggable), typeof g == "function") {
          if (g.call(this, r, p, this)) {
            Yt({
              sortable: s,
              rootEl: _,
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
          if (E = Hn(_, E.trim(), a, !1), E)
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
        u.handle && !Hn(_, u.handle, a, !1) || this._prepareDragStart(r, m, p);
      }
    }
  },
  _prepareDragStart: function(r, s, a) {
    var u = this, c = u.el, f = u.options, m = c.ownerDocument, p;
    if (a && !he && a.parentNode === c) {
      var _ = wt(a);
      if (it = c, he = a, pt = he.parentNode, Oa = he.nextSibling, hl = a, Tu = f.group, Te.dragged = he, Aa = {
        target: he,
        clientX: (s || r).clientX,
        clientY: (s || r).clientY
      }, Lv = Aa.clientX - _.left, Iv = Aa.clientY - _.top, this._lastX = (s || r).clientX, this._lastY = (s || r).clientY, he.style["will-change"] = "all", p = function() {
        if (nn("delayEnded", u, {
          evt: r
        }), Te.eventCanceled) {
          u._onDrop();
          return;
        }
        u._disableDelayedDragEvents(), !Rv && u.nativeDraggable && (he.draggable = !0), u._triggerDragStart(r, s), Yt({
          sortable: u,
          name: "choose",
          originalEvent: r
        }), gn(he, f.chosenClass, !0);
      }, f.ignore.split(",").forEach(function(g) {
        C0(he, g.trim(), df);
      }), He(m, "dragover", xa), He(m, "mousemove", xa), He(m, "touchmove", xa), f.supportPointer ? (He(m, "pointerup", u._onDrop), !this.nativeDraggable && He(m, "pointercancel", u._onDrop)) : (He(m, "mouseup", u._onDrop), He(m, "touchend", u._onDrop), He(m, "touchcancel", u._onDrop)), Rv && this.nativeDraggable && (this.options.touchStartThreshold = 4, he.draggable = !0), nn("delayStart", this, {
        evt: r
      }), f.delay && (!f.delayOnTouchOnly || s) && (!this.nativeDraggable || !(uo || kr))) {
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
    he && df(he), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    Ue(r, "mouseup", this._disableDelayedDrag), Ue(r, "touchend", this._disableDelayedDrag), Ue(r, "touchcancel", this._disableDelayedDrag), Ue(r, "pointerup", this._disableDelayedDrag), Ue(r, "pointercancel", this._disableDelayedDrag), Ue(r, "mousemove", this._delayedDragTouchMoveHandler), Ue(r, "touchmove", this._delayedDragTouchMoveHandler), Ue(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, s) {
    s = s || r.pointerType == "touch" && r, !this.nativeDraggable || s ? this.options.supportPointer ? He(document, "pointermove", this._onTouchMove) : s ? He(document, "touchmove", this._onTouchMove) : He(document, "mousemove", this._onTouchMove) : (He(he, "dragend", this), He(it, "dragstart", this._onDragStart));
    try {
      document.selection ? ml(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, s) {
    if (Di = !1, it && he) {
      nn("dragStarted", this, {
        evt: s
      }), this.nativeDraggable && He(document, "dragover", F3);
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
      this._lastX = In.clientX, this._lastY = In.clientY, j0();
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
        } while (s = E0(s));
      R0();
    }
  },
  _onTouchMove: function(r) {
    if (Aa) {
      var s = this.options, a = s.fallbackTolerance, u = s.fallbackOffset, c = r.touches ? r.touches[0] : r, f = Me && Li(Me, !0), m = Me && f && f.a, p = Me && f && f.d, _ = Ou && qt && Pv(qt), g = (c.clientX - Aa.clientX + u.x) / (m || 1) + (_ ? _[0] - cf[0] : 0) / (m || 1), E = (c.clientY - Aa.clientY + u.y) / (p || 1) + (_ ? _[1] - cf[1] : 0) / (p || 1);
      if (!Te.active && !Di) {
        if (a && Math.max(Math.abs(c.clientX - this._lastX), Math.abs(c.clientY - this._lastY)) < a)
          return;
        this._onDragStart(r, !0);
      }
      if (Me) {
        f ? (f.e += g - (uf || 0), f.f += E - (lf || 0)) : f = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: g,
          f: E
        };
        var v = "matrix(".concat(f.a, ",").concat(f.b, ",").concat(f.c, ",").concat(f.d, ",").concat(f.e, ",").concat(f.f, ")");
        xe(Me, "webkitTransform", v), xe(Me, "mozTransform", v), xe(Me, "msTransform", v), xe(Me, "transform", v), uf = g, lf = E, In = c;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Me) {
      var r = this.options.fallbackOnBody ? document.body : it, s = wt(he, !0, Ou, !0, r), a = this.options;
      if (Ou) {
        for (qt = r; xe(qt, "position") === "static" && xe(qt, "transform") === "none" && qt !== document; )
          qt = qt.parentNode;
        qt !== document.body && qt !== document.documentElement ? (qt === document && (qt = er()), s.top += qt.scrollTop, s.left += qt.scrollLeft) : qt = er(), cf = Pv(qt);
      }
      Me = he.cloneNode(!0), gn(Me, a.ghostClass, !1), gn(Me, a.fallbackClass, !0), gn(Me, a.dragClass, !0), xe(Me, "transition", ""), xe(Me, "transform", ""), xe(Me, "box-sizing", "border-box"), xe(Me, "margin", 0), xe(Me, "top", s.top), xe(Me, "left", s.left), xe(Me, "width", s.width), xe(Me, "height", s.height), xe(Me, "opacity", "0.8"), xe(Me, "position", Ou ? "absolute" : "fixed"), xe(Me, "zIndex", "100000"), xe(Me, "pointerEvents", "none"), Te.ghost = Me, r.appendChild(Me), xe(Me, "transform-origin", Lv / parseInt(Me.style.width) * 100 + "% " + Iv / parseInt(Me.style.height) * 100 + "%");
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
    nn("setupClone", this), Te.eventCanceled || (lt = x0(he), lt.removeAttribute("id"), lt.draggable = !1, lt.style["will-change"] = "", this._hideClone(), gn(lt, this.options.chosenClass, !1), Te.clone = lt), a.cloneId = ml(function() {
      nn("clone", a), !Te.eventCanceled && (a.options.removeCloneOnHide || it.insertBefore(lt, he), a._hideClone(), Yt({
        sortable: a,
        name: "clone"
      }));
    }), !s && gn(he, c.dragClass, !0), s ? (El = !0, a._loopId = setInterval(a._emulateDragOver, 50)) : (Ue(document, "mouseup", a._onDrop), Ue(document, "touchend", a._onDrop), Ue(document, "touchcancel", a._onDrop), u && (u.effectAllowed = "move", c.setData && c.setData.call(a, u, he)), He(document, "drop", a), xe(he, "transform", "translateZ(0)")), Di = !0, a._dragStartId = ml(a._dragStarted.bind(a, s, r)), He(document, "selectstart", a), Fs = !0, window.getSelection().removeAllRanges(), to && xe(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var s = this.el, a = r.target, u, c, f, m = this.options, p = m.group, _ = Te.active, g = Tu === p, E = m.sort, v = Pt || _, S, h = this, C = !1;
    if (Rf) return;
    function x(J, ae) {
      nn(J, h, nr({
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
          return Mu(it, s, he, u, X, wt(X), r, ce);
        },
        changed: P
      }, ae));
    }
    function O() {
      x("dragOverAnimationCapture"), h.captureAnimationState(), h !== v && v.captureAnimationState();
    }
    function T(J) {
      return x("dragOverCompleted", {
        insertion: J
      }), J && (g ? _._hideClone() : _._showClone(h), h !== v && (gn(he, Pt ? Pt.options.ghostClass : _.options.ghostClass, !1), gn(he, m.ghostClass, !0)), Pt !== h && h !== Te.active ? Pt = h : h === Te.active && Pt && (Pt = null), v === h && (h._ignoreWhileAnimating = a), h.animateAll(function() {
        x("dragOverAnimationComplete"), h._ignoreWhileAnimating = null;
      }), h !== v && (v.animateAll(), v._ignoreWhileAnimating = null)), (a === he && !he.animated || a === s && !a.animated) && (Ni = null), !m.dragoverBubble && !r.rootEl && a !== document && (he.parentNode[an]._isOutsideThisEl(r.target), !J && xa(r)), !m.dragoverBubble && r.stopPropagation && r.stopPropagation(), C = !0;
    }
    function P() {
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
    if (El = !1, _ && !m.disabled && (g ? E || (f = pt !== it) : Pt === this || (this.lastPutMode = Tu.checkPull(this, _, he, r)) && p.checkPut(this, _, he, r))) {
      if (S = this._getDirection(r, a) === "vertical", u = wt(he), x("dragOverValid"), Te.eventCanceled) return C;
      if (f)
        return pt = it, O(), this._hideClone(), x("revert"), Te.eventCanceled || (Oa ? it.insertBefore(he, Oa) : it.appendChild(he)), T(!0);
      var l = ah(s, m.draggable);
      if (!l || W3(r, S, this) && !l.animated) {
        if (l === he)
          return T(!1);
        if (l && s === r.target && (a = l), a && (c = wt(a)), Mu(it, s, he, u, a, c, r, !!a) !== !1)
          return O(), l && l.nextSibling ? s.insertBefore(he, l.nextSibling) : s.appendChild(he), pt = s, P(), T(!0);
      } else if (l && J3(r, S, this)) {
        var y = Bi(s, 0, m, !0);
        if (y === he)
          return T(!1);
        if (a = y, c = wt(a), Mu(it, s, he, u, a, c, r, !1) !== !1)
          return O(), s.insertBefore(he, y), pt = s, P(), T(!0);
      } else if (a.parentNode === s) {
        c = wt(a);
        var w = 0, k, j = he.parentNode !== s, L = !Y3(he.animated && he.toRect || u, a.animated && a.toRect || c, S), R = S ? "top" : "left", D = zv(a, "top", "top") || zv(he, "top", "top"), q = D ? D.scrollTop : void 0;
        Ni !== a && (k = c[R], io = !1, Nu = !L && m.invertSwap || j), w = e8(r, a, c, S, L ? 1 : m.swapThreshold, m.invertedSwapThreshold == null ? m.swapThreshold : m.invertedSwapThreshold, Nu, Ni === a);
        var G;
        if (w !== 0) {
          var V = Mn(he);
          do
            V -= w, G = pt.children[V];
          while (G && (xe(G, "display") === "none" || G === Me));
        }
        if (w === 0 || G === a)
          return T(!1);
        Ni = a, ao = w;
        var K = a.nextElementSibling, M = !1;
        M = w === 1;
        var B = Mu(it, s, he, u, a, c, r, M);
        if (B !== !1)
          return (B === 1 || B === -1) && (M = B === 1), Rf = !0, setTimeout(K3, 30), O(), M && !K ? s.appendChild(he) : a.parentNode.insertBefore(he, M ? K : a), D && A0(D, 0, q - D.scrollTop), pt = he.parentNode, k !== void 0 && !Nu && (pl = Math.abs(k - wt(a)[R])), P(), T(!0);
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
    Di = !1, Nu = !1, io = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Df(this.cloneId), Df(this._dragStartId), this.nativeDraggable && (Ue(document, "drop", this), Ue(s, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), to && xe(document.body, "user-select", ""), xe(he, "transform", ""), r && (Fs && (r.cancelable && r.preventDefault(), !a.dropBubble && r.stopPropagation()), Me && Me.parentNode && Me.parentNode.removeChild(Me), (it === pt || Pt && Pt.lastPutMode !== "clone") && lt && lt.parentNode && lt.parentNode.removeChild(lt), he && (this.nativeDraggable && Ue(he, "dragend", this), df(he), he.style["will-change"] = "", Fs && !Di && gn(he, Pt ? Pt.options.ghostClass : this.options.ghostClass, !1), gn(he, this.options.chosenClass, !1), Yt({
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
    })), Pt && Pt.save()) : vn !== zi && vn >= 0 && (Yt({
      sortable: this,
      name: "update",
      toEl: pt,
      originalEvent: r
    }), Yt({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: r
    })), Te.active && ((vn == null || vn === -1) && (vn = zi, Jr = ro), Yt({
      sortable: this,
      name: "end",
      toEl: pt,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    nn("nulling", this), it = he = pt = Me = Oa = lt = hl = Wr = Aa = In = Fs = vn = Jr = zi = ro = Ni = ao = Pt = Tu = Te.dragged = Te.ghost = Te.clone = Te.active = null, kl.forEach(function(r) {
      r.checked = !0;
    }), kl.length = uf = lf = 0;
  },
  handleEvent: function(r) {
    switch (r.type) {
      case "drop":
      case "dragend":
        this._onDrop(r);
        break;
      case "dragenter":
      case "dragover":
        he && (this._onDragOver(r), Q3(r));
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
      s = a[u], Hn(s, f.draggable, this.el, !1) && r.push(s.getAttribute(f.dataIdAttr) || n8(s));
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
    var u = lo.modifyOption(this, r, s);
    typeof u < "u" ? a[r] = u : a[r] = s, r === "group" && M0(a);
  },
  /**
   * Destroy
   */
  destroy: function() {
    nn("destroy", this);
    var r = this.el;
    r[an] = null, Ue(r, "mousedown", this._onTapStart), Ue(r, "touchstart", this._onTapStart), Ue(r, "pointerdown", this._onTapStart), this.nativeDraggable && (Ue(r, "dragover", this), Ue(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(s) {
      s.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Cl.splice(Cl.indexOf(this.el), 1), this.el = r = null;
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
function Q3(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function Mu(t, r, s, a, u, c, f, m) {
  var p, _ = t[an], g = _.options.onMove, E;
  return window.CustomEvent && !kr && !uo ? p = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (p = document.createEvent("Event"), p.initEvent("move", !0, !0)), p.to = r, p.from = t, p.dragged = s, p.draggedRect = a, p.related = u || r, p.relatedRect = c || wt(r), p.willInsertAfter = m, p.originalEvent = f, t.dispatchEvent(p), g && (E = g.call(_, p, f)), E;
}
function df(t) {
  t.draggable = !1;
}
function K3() {
  Rf = !1;
}
function J3(t, r, s) {
  var a = wt(Bi(s.el, 0, s.options, !0)), u = T0(s.el, s.options, Me), c = 10;
  return r ? t.clientX < u.left - c || t.clientY < a.top && t.clientX < a.right : t.clientY < u.top - c || t.clientY < a.bottom && t.clientX < a.left;
}
function W3(t, r, s) {
  var a = wt(ah(s.el, s.options.draggable)), u = T0(s.el, s.options, Me), c = 10;
  return r ? t.clientX > u.right + c || t.clientY > a.bottom && t.clientX > a.left : t.clientY > u.bottom + c || t.clientX > a.right && t.clientY > a.top;
}
function e8(t, r, s, a, u, c, f, m) {
  var p = a ? t.clientY : t.clientX, _ = a ? s.height : s.width, g = a ? s.top : s.left, E = a ? s.bottom : s.right, v = !1;
  if (!f) {
    if (m && pl < _ * u) {
      if (!io && (ao === 1 ? p > g + _ * c / 2 : p < E - _ * c / 2) && (io = !0), io)
        v = !0;
      else if (ao === 1 ? p < g + pl : p > E - pl)
        return -ao;
    } else if (p > g + _ * (1 - u) / 2 && p < E - _ * (1 - u) / 2)
      return t8(r);
  }
  return v = v || f, v && (p < g + _ * c / 2 || p > E - _ * c / 2) ? p > g + _ / 2 ? 1 : -1 : 0;
}
function t8(t) {
  return Mn(he) < Mn(t) ? 1 : -1;
}
function n8(t) {
  for (var r = t.tagName + t.className + t.src + t.href + t.textContent, s = r.length, a = 0; s--; )
    a += r.charCodeAt(s);
  return a.toString(36);
}
function r8(t) {
  kl.length = 0;
  for (var r = t.getElementsByTagName("input"), s = r.length; s--; ) {
    var a = r[s];
    a.checked && kl.push(a);
  }
}
function ml(t) {
  return setTimeout(t, 0);
}
function Df(t) {
  return clearTimeout(t);
}
Rl && He(document, "touchmove", function(t) {
  (Te.active || Di) && t.cancelable && t.preventDefault();
});
Te.utils = {
  on: He,
  off: Ue,
  css: xe,
  find: C0,
  is: function(r, s) {
    return !!Hn(r, s, r, !1);
  },
  extend: B3,
  throttle: k0,
  closest: Hn,
  toggleClass: gn,
  clone: x0,
  index: Mn,
  nextTick: ml,
  cancelNextTick: Df,
  detectDirection: O0,
  getChild: Bi,
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
    a.utils && (Te.utils = nr(nr({}, Te.utils), a.utils)), lo.mount(a);
  });
};
Te.create = function(t, r) {
  return new Te(t, r);
};
Te.version = L3;
var St = [], Qs, zf, Pf = !1, ff, hf, Al, Ks;
function a8() {
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
      this.sortable.nativeDraggable ? Ue(document, "dragover", this._handleAutoScroll) : (Ue(document, "pointermove", this._handleFallbackAutoScroll), Ue(document, "touchmove", this._handleFallbackAutoScroll), Ue(document, "mousemove", this._handleFallbackAutoScroll)), Uv(), gl(), U3();
    },
    nulling: function() {
      Al = zf = Qs = Pf = Ks = ff = hf = null, St.length = 0;
    },
    _handleFallbackAutoScroll: function(s) {
      this._handleAutoScroll(s, !0);
    },
    _handleAutoScroll: function(s, a) {
      var u = this, c = (s.touches ? s.touches[0] : s).clientX, f = (s.touches ? s.touches[0] : s).clientY, m = document.elementFromPoint(c, f);
      if (Al = s, a || this.options.forceAutoScrollFallback || uo || kr || to) {
        pf(s, this.options, m, a);
        var p = ea(m, !0);
        Pf && (!Ks || c !== ff || f !== hf) && (Ks && Uv(), Ks = setInterval(function() {
          var _ = ea(document.elementFromPoint(c, f), !0);
          _ !== p && (p = _, gl()), pf(s, u.options, _, a);
        }, 10), ff = c, hf = f);
      } else {
        if (!this.options.bubbleScroll || ea(m, !0) === er()) {
          gl();
          return;
        }
        pf(s, this.options, ea(m, !1), !1);
      }
    }
  }, Cr(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function gl() {
  St.forEach(function(t) {
    clearInterval(t.pid);
  }), St = [];
}
function Uv() {
  clearInterval(Ks);
}
var pf = k0(function(t, r, s, a) {
  if (r.scroll) {
    var u = (t.touches ? t.touches[0] : t).clientX, c = (t.touches ? t.touches[0] : t).clientY, f = r.scrollSensitivity, m = r.scrollSpeed, p = er(), _ = !1, g;
    zf !== s && (zf = s, gl(), Qs = r.scroll, g = r.scrollFn, Qs === !0 && (Qs = ea(s, !0)));
    var E = 0, v = Qs;
    do {
      var S = v, h = wt(S), C = h.top, x = h.bottom, O = h.left, T = h.right, P = h.width, l = h.height, y = void 0, w = void 0, k = S.scrollWidth, j = S.scrollHeight, L = xe(S), R = S.scrollLeft, D = S.scrollTop;
      S === p ? (y = P < k && (L.overflowX === "auto" || L.overflowX === "scroll" || L.overflowX === "visible"), w = l < j && (L.overflowY === "auto" || L.overflowY === "scroll" || L.overflowY === "visible")) : (y = P < k && (L.overflowX === "auto" || L.overflowX === "scroll"), w = l < j && (L.overflowY === "auto" || L.overflowY === "scroll"));
      var q = y && (Math.abs(T - u) <= f && R + P < k) - (Math.abs(O - u) <= f && !!R), G = w && (Math.abs(x - c) <= f && D + l < j) - (Math.abs(C - c) <= f && !!D);
      if (!St[E])
        for (var V = 0; V <= E; V++)
          St[V] || (St[V] = {});
      (St[E].vx != q || St[E].vy != G || St[E].el !== S) && (St[E].el = S, St[E].vx = q, St[E].vy = G, clearInterval(St[E].pid), (q != 0 || G != 0) && (_ = !0, St[E].pid = setInterval((function() {
        a && this.layer === 0 && Te.active._onTouchMove(Al);
        var K = St[this.layer].vy ? St[this.layer].vy * m : 0, M = St[this.layer].vx ? St[this.layer].vx * m : 0;
        typeof g == "function" && g.call(Te.dragged.parentNode[an], M, K, t, Al, St[this.layer].el) !== "continue" || A0(St[this.layer].el, M, K);
      }).bind({
        layer: E
      }), 24))), E++;
    } while (r.bubbleScroll && v !== p && (v = ea(v, !1)));
    Pf = _;
  }
}, 30), D0 = function(r) {
  var s = r.originalEvent, a = r.putSortable, u = r.dragEl, c = r.activeSortable, f = r.dispatchSortableEvent, m = r.hideGhostForTarget, p = r.unhideGhostForTarget;
  if (s) {
    var _ = a || c;
    m();
    var g = s.changedTouches && s.changedTouches.length ? s.changedTouches[0] : s, E = document.elementFromPoint(g.clientX, g.clientY);
    p(), _ && !_.el.contains(E) && (f("spill"), this.onSpill({
      dragEl: u,
      putSortable: a
    }));
  }
};
function ih() {
}
ih.prototype = {
  startIndex: null,
  dragStart: function(r) {
    var s = r.oldDraggableIndex;
    this.startIndex = s;
  },
  onSpill: function(r) {
    var s = r.dragEl, a = r.putSortable;
    this.sortable.captureAnimationState(), a && a.captureAnimationState();
    var u = Bi(this.sortable.el, this.startIndex, this.options);
    u ? this.sortable.el.insertBefore(s, u) : this.sortable.el.appendChild(s), this.sortable.animateAll(), a && a.animateAll();
  },
  drop: D0
};
Cr(ih, {
  pluginName: "revertOnSpill"
});
function sh() {
}
sh.prototype = {
  onSpill: function(r) {
    var s = r.dragEl, a = r.putSortable, u = a || this.sortable;
    u.captureAnimationState(), s.parentNode && s.parentNode.removeChild(s), u.animateAll();
  },
  drop: D0
};
Cr(sh, {
  pluginName: "removeOnSpill"
});
Te.mount(new a8());
Te.mount(sh, ih);
async function vl(t, r, s) {
  var a, u, c;
  function f(g) {
    return t.includes("all") || t.includes(g);
  }
  const m = SillyTavern.getContext();
  let p = {};
  const _ = K1;
  if (f("global") && _ != null && _.length)
    for (const g of _) {
      const E = await i8(g);
      E && (p[g] || (p[g] = []), Object.values(E).forEach((v) => {
        p[g].push(v);
      }));
    }
  if (f("chat")) {
    const g = m.chatMetadata[J1];
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
    const S = _0(s), h = (c = W1.charLore) == null ? void 0 : c.find((C) => C.name === S);
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
      E && Object.values(E.entries).forEach((v) => {
        p[g].push(v);
      });
    }
  }
  return p;
}
async function i8(t) {
  const r = await SillyTavern.getContext().loadWorldInfo(t);
  return r ? Object.values(r.entries) : null;
}
const s8 = `=== SILLYTAVERN===

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

Lorebooks are essential for long-term storytelling with AI.`, o8 = `{{#is_not_empty currentLorebooks}}
## CURRENT LOREBOOKS
{{#each currentLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, u8 = `{{#is_not_empty blackListedEntries}}
## BLACKLISTED ENTRIES
{{#each blackListedEntries}}
- {{this}}
{{/each}}
{{/is_not_empty}}`, l8 = `{{#is_not_empty suggestedLorebooks}}
## SUGGESTED LOREBOOKS
{{#each suggestedLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, c8 = `## RESPONSE FORMAT (CRITICAL)

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

You may include multiple \`<entry>\` blocks inside a single \`<lorebooks>\` element. Begin your response with \`<lorebooks>\` immediately.`, d8 = `## Rules
- Don't suggest already existing or suggested entries.
{{#if userInstructions}}

## Your Task
{{userInstructions}}{{/if}}`, f8 = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", h8 = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid XML structure that strictly adheres to the provided example.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire XML object in a markdown code block (```xml\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The XML object inside the code block MUST be valid.\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```xml\n{{example_response}}\n```", p8 = `You are an expert lorebook writer assisting a user. Your task is to respond with the modified lorebook data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isEntrySession}}the entry "{{targetEntryName}}".{{else}}the entire set of lorebook entries provided in the context.{{/if}}

The initial lorebook state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, m8 = `{{#is_not_empty changedLorebooks}}
## LOREBOOK UPDATES (Added/Modified)
{{#each changedLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, g8 = `{{#is_not_empty removedEntries}}
## LOREBOOK UPDATES (Removed)
The following entries were removed and will no longer be part of the context:
{{#each removedEntries}}
- **{{this.comment}}** (from {{this.worldName}})
{{/each}}
{{/is_not_empty}}`, v8 = `The following changes were applied to the lorebooks based on the last turn. Unlisted entries are unchanged.
{{{addedModifiedContent}}}
{{{removedContent}}}`, z0 = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", y8 = z0 + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", _8 = "[" + z0 + "][" + y8 + "]*", b8 = new RegExp("^" + _8 + "$");
function P0(t, r) {
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
const oh = function(t) {
  const r = b8.exec(t);
  return !(r === null || typeof r > "u");
};
function S8(t) {
  return typeof t < "u";
}
const w8 = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function L0(t, r) {
  r = Object.assign({}, w8, r);
  const s = [];
  let a = !1, u = !1;
  t[0] === "\uFEFF" && (t = t.substr(1));
  for (let c = 0; c < t.length; c++)
    if (t[c] === "<" && t[c + 1] === "?") {
      if (c += 2, c = qv(t, c), c.err) return c;
    } else if (t[c] === "<") {
      let f = c;
      if (c++, t[c] === "!") {
        c = Zv(t, c);
        continue;
      } else {
        let m = !1;
        t[c] === "/" && (m = !0, c++);
        let p = "";
        for (; c < t.length && t[c] !== ">" && t[c] !== " " && t[c] !== "	" && t[c] !== `
` && t[c] !== "\r"; c++)
          p += t[c];
        if (p = p.trim(), p[p.length - 1] === "/" && (p = p.substring(0, p.length - 1), c--), !O8(p)) {
          let E;
          return p.trim().length === 0 ? E = "Invalid space after '<'." : E = "Tag '" + p + "' is an invalid name.", yt("InvalidTag", E, Xt(t, c));
        }
        const _ = k8(t, c);
        if (_ === !1)
          return yt("InvalidAttr", "Attributes for '" + p + "' have open quote.", Xt(t, c));
        let g = _.value;
        if (c = _.index, g[g.length - 1] === "/") {
          const E = c - g.length;
          g = g.substring(0, g.length - 1);
          const v = Gv(g, r);
          if (v === !0)
            a = !0;
          else
            return yt(v.err.code, v.err.msg, Xt(t, E + v.err.line));
        } else if (m)
          if (_.tagClosed) {
            if (g.trim().length > 0)
              return yt("InvalidTag", "Closing tag '" + p + "' can't have attributes or invalid starting.", Xt(t, f));
            if (s.length === 0)
              return yt("InvalidTag", "Closing tag '" + p + "' has not been opened.", Xt(t, f));
            {
              const E = s.pop();
              if (p !== E.tagName) {
                let v = Xt(t, E.tagStartPos);
                return yt(
                  "InvalidTag",
                  "Expected closing tag '" + E.tagName + "' (opened in line " + v.line + ", col " + v.col + ") instead of closing tag '" + p + "'.",
                  Xt(t, f)
                );
              }
              s.length == 0 && (u = !0);
            }
          } else return yt("InvalidTag", "Closing tag '" + p + "' doesn't have proper closing.", Xt(t, c));
        else {
          const E = Gv(g, r);
          if (E !== !0)
            return yt(E.err.code, E.err.msg, Xt(t, c - g.length + E.err.line));
          if (u === !0)
            return yt("InvalidXml", "Multiple possible root nodes found.", Xt(t, c));
          r.unpairedTags.indexOf(p) !== -1 || s.push({ tagName: p, tagStartPos: f }), a = !0;
        }
        for (c++; c < t.length; c++)
          if (t[c] === "<")
            if (t[c + 1] === "!") {
              c++, c = Zv(t, c);
              continue;
            } else if (t[c + 1] === "?") {
              if (c = qv(t, ++c), c.err) return c;
            } else
              break;
          else if (t[c] === "&") {
            const E = T8(t, c);
            if (E == -1)
              return yt("InvalidChar", "char '&' is not expected.", Xt(t, c));
            c = E;
          } else if (u === !0 && !Hv(t[c]))
            return yt("InvalidXml", "Extra text at the end", Xt(t, c));
        t[c] === "<" && c--;
      }
    } else {
      if (Hv(t[c]))
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
function Hv(t) {
  return t === " " || t === "	" || t === `
` || t === "\r";
}
function qv(t, r) {
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
function Zv(t, r) {
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
const E8 = '"', C8 = "'";
function k8(t, r) {
  let s = "", a = "", u = !1;
  for (; r < t.length; r++) {
    if (t[r] === E8 || t[r] === C8)
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
const A8 = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function Gv(t, r) {
  const s = P0(t, A8), a = {};
  for (let u = 0; u < s.length; u++) {
    if (s[u][1].length === 0)
      return yt("InvalidAttr", "Attribute '" + s[u][2] + "' has no space in starting.", Hs(s[u]));
    if (s[u][3] !== void 0 && s[u][4] === void 0)
      return yt("InvalidAttr", "Attribute '" + s[u][2] + "' is without value.", Hs(s[u]));
    if (s[u][3] === void 0 && !r.allowBooleanAttributes)
      return yt("InvalidAttr", "boolean attribute '" + s[u][2] + "' is not allowed.", Hs(s[u]));
    const c = s[u][2];
    if (!N8(c))
      return yt("InvalidAttr", "Attribute '" + c + "' is an invalid name.", Hs(s[u]));
    if (!a.hasOwnProperty(c))
      a[c] = 1;
    else
      return yt("InvalidAttr", "Attribute '" + c + "' is repeated.", Hs(s[u]));
  }
  return !0;
}
function x8(t, r) {
  let s = /\d/;
  for (t[r] === "x" && (r++, s = /[\da-fA-F]/); r < t.length; r++) {
    if (t[r] === ";")
      return r;
    if (!t[r].match(s))
      break;
  }
  return -1;
}
function T8(t, r) {
  if (r++, t[r] === ";")
    return -1;
  if (t[r] === "#")
    return r++, x8(t, r);
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
function N8(t) {
  return oh(t);
}
function O8(t) {
  return oh(t);
}
function Xt(t, r) {
  const s = t.substring(0, r).split(/\r?\n/);
  return {
    line: s.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: s[s.length - 1].length + 1
  };
}
function Hs(t) {
  return t.startIndex + t[1].length;
}
const M8 = {
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
}, j8 = function(t) {
  return Object.assign({}, M8, t);
};
class qs {
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
function R8(t, r) {
  const s = {};
  if (t[r + 3] === "O" && t[r + 4] === "C" && t[r + 5] === "T" && t[r + 6] === "Y" && t[r + 7] === "P" && t[r + 8] === "E") {
    r = r + 9;
    let a = 1, u = !1, c = !1, f = "";
    for (; r < t.length; r++)
      if (t[r] === "<" && !c) {
        if (u && P8(t, r)) {
          r += 7;
          let m, p;
          [m, p, r] = D8(t, r + 1), p.indexOf("&") === -1 && (s[U8(m)] = {
            regx: RegExp(`&${m};`, "g"),
            val: p
          });
        } else if (u && L8(t, r)) r += 8;
        else if (u && I8(t, r)) r += 8;
        else if (u && B8(t, r)) r += 9;
        else if (z8) c = !0;
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
function D8(t, r) {
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
function z8(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "-" && t[r + 3] === "-";
}
function P8(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "N" && t[r + 4] === "T" && t[r + 5] === "I" && t[r + 6] === "T" && t[r + 7] === "Y";
}
function L8(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "L" && t[r + 4] === "E" && t[r + 5] === "M" && t[r + 6] === "E" && t[r + 7] === "N" && t[r + 8] === "T";
}
function I8(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "A" && t[r + 3] === "T" && t[r + 4] === "T" && t[r + 5] === "L" && t[r + 6] === "I" && t[r + 7] === "S" && t[r + 8] === "T";
}
function B8(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "N" && t[r + 3] === "O" && t[r + 4] === "T" && t[r + 5] === "A" && t[r + 6] === "T" && t[r + 7] === "I" && t[r + 8] === "O" && t[r + 9] === "N";
}
function U8(t) {
  if (oh(t))
    return t;
  throw new Error(`Invalid entity name ${t}`);
}
const H8 = /^[-+]?0x[a-fA-F0-9]+$/, q8 = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, Z8 = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function G8(t, r = {}) {
  if (r = Object.assign({}, Z8, r), !t || typeof t != "string") return t;
  let s = t.trim();
  if (r.skipLike !== void 0 && r.skipLike.test(s)) return t;
  if (t === "0") return 0;
  if (r.hex && H8.test(s))
    return $8(s, 16);
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
    const a = q8.exec(s);
    if (a) {
      const u = a[1], c = a[2];
      let f = V8(a[3]);
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
function V8(t) {
  return t && t.indexOf(".") !== -1 && (t = t.replace(/0+$/, ""), t === "." ? t = "0" : t[0] === "." ? t = "0" + t : t[t.length - 1] === "." && (t = t.substr(0, t.length - 1))), t;
}
function $8(t, r) {
  if (parseInt) return parseInt(t, r);
  if (Number.parseInt) return Number.parseInt(t, r);
  if (window && window.parseInt) return window.parseInt(t, r);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function Y8(t) {
  return typeof t == "function" ? t : Array.isArray(t) ? (r) => {
    for (const s of t)
      if (typeof s == "string" && r === s || s instanceof RegExp && s.test(r))
        return !0;
  } : () => !1;
}
class X8 {
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
    }, this.addExternalEntities = F8, this.parseXml = eS, this.parseTextData = Q8, this.resolveNameSpace = K8, this.buildAttributesMap = W8, this.isItStopNode = aS, this.replaceEntitiesValue = nS, this.readStopNodeData = sS, this.saveTextToParentTag = rS, this.addChild = tS, this.ignoreAttributesFn = Y8(this.options.ignoreAttributes);
  }
}
function F8(t) {
  const r = Object.keys(t);
  for (let s = 0; s < r.length; s++) {
    const a = r[s];
    this.lastEntities[a] = {
      regex: new RegExp("&" + a + ";", "g"),
      val: t[a]
    };
  }
}
function Q8(t, r, s, a, u, c, f) {
  if (t !== void 0 && (this.options.trimValues && !a && (t = t.trim()), t.length > 0)) {
    f || (t = this.replaceEntitiesValue(t));
    const m = this.options.tagValueProcessor(r, t, s, u, c);
    return m == null ? t : typeof m != typeof t || m !== t ? m : this.options.trimValues ? If(t, this.options.parseTagValue, this.options.numberParseOptions) : t.trim() === t ? If(t, this.options.parseTagValue, this.options.numberParseOptions) : t;
  }
}
function K8(t) {
  if (this.options.removeNSPrefix) {
    const r = t.split(":"), s = t.charAt(0) === "/" ? "/" : "";
    if (r[0] === "xmlns")
      return "";
    r.length === 2 && (t = s + r[1]);
  }
  return t;
}
const J8 = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function W8(t, r, s) {
  if (this.options.ignoreAttributes !== !0 && typeof t == "string") {
    const a = P0(t, J8), u = a.length, c = {};
    for (let f = 0; f < u; f++) {
      const m = this.resolveNameSpace(a[f][1]);
      if (this.ignoreAttributesFn(m, r))
        continue;
      let p = a[f][4], _ = this.options.attributeNamePrefix + m;
      if (m.length)
        if (this.options.transformAttributeName && (_ = this.options.transformAttributeName(_)), _ === "__proto__" && (_ = "#__proto__"), p !== void 0) {
          this.options.trimValues && (p = p.trim()), p = this.replaceEntitiesValue(p);
          const g = this.options.attributeValueProcessor(m, p, r);
          g == null ? c[_] = p : typeof g != typeof p || g !== p ? c[_] = g : c[_] = If(
            p,
            this.options.parseAttributeValue,
            this.options.numberParseOptions
          );
        } else this.options.allowBooleanAttributes && (c[_] = !0);
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
const eS = function(t) {
  t = t.replace(/\r\n?/g, `
`);
  const r = new qs("!xml");
  let s = r, a = "", u = "";
  for (let c = 0; c < t.length; c++)
    if (t[c] === "<")
      if (t[c + 1] === "/") {
        const m = Ra(t, ">", c, "Closing Tag is not closed.");
        let p = t.substring(c + 2, m).trim();
        if (this.options.removeNSPrefix) {
          const E = p.indexOf(":");
          E !== -1 && (p = p.substr(E + 1));
        }
        this.options.transformTagName && (p = this.options.transformTagName(p)), s && (a = this.saveTextToParentTag(a, s, u));
        const _ = u.substring(u.lastIndexOf(".") + 1);
        if (p && this.options.unpairedTags.indexOf(p) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${p}>`);
        let g = 0;
        _ && this.options.unpairedTags.indexOf(_) !== -1 ? (g = u.lastIndexOf(".", u.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : g = u.lastIndexOf("."), u = u.substring(0, g), s = this.tagsNodeStack.pop(), a = "", c = m;
      } else if (t[c + 1] === "?") {
        let m = Lf(t, c, !1, "?>");
        if (!m) throw new Error("Pi Tag is not closed.");
        if (a = this.saveTextToParentTag(a, s, u), !(this.options.ignoreDeclaration && m.tagName === "?xml" || this.options.ignorePiTags)) {
          const p = new qs(m.tagName);
          p.add(this.options.textNodeName, ""), m.tagName !== m.tagExp && m.attrExpPresent && (p[":@"] = this.buildAttributesMap(m.tagExp, u, m.tagName)), this.addChild(s, p, u);
        }
        c = m.closeIndex + 1;
      } else if (t.substr(c + 1, 3) === "!--") {
        const m = Ra(t, "-->", c + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const p = t.substring(c + 4, m - 2);
          a = this.saveTextToParentTag(a, s, u), s.add(this.options.commentPropName, [{ [this.options.textNodeName]: p }]);
        }
        c = m;
      } else if (t.substr(c + 1, 2) === "!D") {
        const m = R8(t, c);
        this.docTypeEntities = m.entities, c = m.i;
      } else if (t.substr(c + 1, 2) === "![") {
        const m = Ra(t, "]]>", c, "CDATA is not closed.") - 2, p = t.substring(c + 9, m);
        a = this.saveTextToParentTag(a, s, u);
        let _ = this.parseTextData(p, s.tagname, u, !0, !1, !0, !0);
        _ == null && (_ = ""), this.options.cdataPropName ? s.add(this.options.cdataPropName, [{ [this.options.textNodeName]: p }]) : s.add(this.options.textNodeName, _), c = m + 2;
      } else {
        let m = Lf(t, c, this.options.removeNSPrefix), p = m.tagName;
        const _ = m.rawTagName;
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
            const x = this.readStopNodeData(t, _, v + 1);
            if (!x) throw new Error(`Unexpected end of ${_}`);
            c = x.i, h = x.tagContent;
          }
          const C = new qs(p);
          p !== g && E && (C[":@"] = this.buildAttributesMap(g, u, p)), h && (h = this.parseTextData(h, p, u, !0, E, !0, !0)), u = u.substr(0, u.lastIndexOf(".")), C.add(this.options.textNodeName, h), this.addChild(s, C, u);
        } else {
          if (g.length > 0 && g.lastIndexOf("/") === g.length - 1) {
            p[p.length - 1] === "/" ? (p = p.substr(0, p.length - 1), u = u.substr(0, u.length - 1), g = p) : g = g.substr(0, g.length - 1), this.options.transformTagName && (p = this.options.transformTagName(p));
            const h = new qs(p);
            p !== g && E && (h[":@"] = this.buildAttributesMap(g, u, p)), this.addChild(s, h, u), u = u.substr(0, u.lastIndexOf("."));
          } else {
            const h = new qs(p);
            this.tagsNodeStack.push(s), p !== g && E && (h[":@"] = this.buildAttributesMap(g, u, p)), this.addChild(s, h, u), s = h;
          }
          a = "", c = v;
        }
      }
    else
      a += t[c];
  return r.child;
};
function tS(t, r, s) {
  const a = this.options.updateTag(r.tagname, s, r[":@"]);
  a === !1 || (typeof a == "string" && (r.tagname = a), t.addChild(r));
}
const nS = function(t) {
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
function rS(t, r, s, a) {
  return t && (a === void 0 && (a = r.child.length === 0), t = this.parseTextData(
    t,
    r.tagname,
    s,
    !1,
    r[":@"] ? Object.keys(r[":@"]).length !== 0 : !1,
    a
  ), t !== void 0 && t !== "" && r.add(this.options.textNodeName, t), t = ""), t;
}
function aS(t, r, s) {
  const a = "*." + s;
  for (const u in t) {
    const c = t[u];
    if (a === c || r === c) return !0;
  }
  return !1;
}
function iS(t, r, s = ">") {
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
function Ra(t, r, s, a) {
  const u = t.indexOf(r, s);
  if (u === -1)
    throw new Error(a);
  return u + r.length - 1;
}
function Lf(t, r, s, a = ">") {
  const u = iS(t, r + 1, a);
  if (!u) return;
  let c = u.data;
  const f = u.index, m = c.search(/\s/);
  let p = c, _ = !0;
  m !== -1 && (p = c.substring(0, m), c = c.substring(m + 1).trimStart());
  const g = p;
  if (s) {
    const E = p.indexOf(":");
    E !== -1 && (p = p.substr(E + 1), _ = p !== u.data.substr(E + 1));
  }
  return {
    tagName: p,
    tagExp: c,
    closeIndex: f,
    attrExpPresent: _,
    rawTagName: g
  };
}
function sS(t, r, s) {
  const a = s;
  let u = 1;
  for (; s < t.length; s++)
    if (t[s] === "<")
      if (t[s + 1] === "/") {
        const c = Ra(t, ">", s, `${r} is not closed`);
        if (t.substring(s + 2, c).trim() === r && (u--, u === 0))
          return {
            tagContent: t.substring(a, s),
            i: c
          };
        s = c;
      } else if (t[s + 1] === "?")
        s = Ra(t, "?>", s + 1, "StopNode is not closed.");
      else if (t.substr(s + 1, 3) === "!--")
        s = Ra(t, "-->", s + 3, "StopNode is not closed.");
      else if (t.substr(s + 1, 2) === "![")
        s = Ra(t, "]]>", s, "StopNode is not closed.") - 2;
      else {
        const c = Lf(t, s, ">");
        c && ((c && c.tagName) === r && c.tagExp[c.tagExp.length - 1] !== "/" && u++, s = c.closeIndex);
      }
}
function If(t, r, s) {
  if (r && typeof t == "string") {
    const a = t.trim();
    return a === "true" ? !0 : a === "false" ? !1 : G8(t, s);
  } else
    return S8(t) ? t : "";
}
function oS(t, r) {
  return I0(t, r);
}
function I0(t, r, s) {
  let a;
  const u = {};
  for (let c = 0; c < t.length; c++) {
    const f = t[c], m = uS(f);
    let p = "";
    if (s === void 0 ? p = m : p = s + "." + m, m === r.textNodeName)
      a === void 0 ? a = f[m] : a += "" + f[m];
    else {
      if (m === void 0)
        continue;
      if (f[m]) {
        let _ = I0(f[m], r, p);
        const g = cS(_, r);
        f[":@"] ? lS(_, f[":@"], p, r) : Object.keys(_).length === 1 && _[r.textNodeName] !== void 0 && !r.alwaysCreateTextNode ? _ = _[r.textNodeName] : Object.keys(_).length === 0 && (r.alwaysCreateTextNode ? _[r.textNodeName] = "" : _ = ""), u[m] !== void 0 && u.hasOwnProperty(m) ? (Array.isArray(u[m]) || (u[m] = [u[m]]), u[m].push(_)) : r.isArray(m, p, g) ? u[m] = [_] : u[m] = _;
      }
    }
  }
  return typeof a == "string" ? a.length > 0 && (u[r.textNodeName] = a) : a !== void 0 && (u[r.textNodeName] = a), u;
}
function uS(t) {
  const r = Object.keys(t);
  for (let s = 0; s < r.length; s++) {
    const a = r[s];
    if (a !== ":@") return a;
  }
}
function lS(t, r, s, a) {
  if (r) {
    const u = Object.keys(r), c = u.length;
    for (let f = 0; f < c; f++) {
      const m = u[f];
      a.isArray(m, s + "." + m, !0, !0) ? t[m] = [r[m]] : t[m] = r[m];
    }
  }
}
function cS(t, r) {
  const { textNodeName: s } = r, a = Object.keys(t).length;
  return !!(a === 0 || a === 1 && (t[s] || typeof t[s] == "boolean" || t[s] === 0));
}
class B0 {
  constructor(r) {
    this.externalEntities = {}, this.options = j8(r);
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
      const c = L0(r, s);
      if (c !== !0)
        throw Error(`${c.err.msg}:${c.err.line}:${c.err.col}`);
    }
    const a = new X8(this.options);
    a.addExternalEntities(this.externalEntities);
    const u = a.parseXml(r);
    return this.options.preserveOrder || u === void 0 ? u : oS(u, this.options);
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
const dS = {
  validate: L0
}, fS = new B0();
function hS(t) {
  const r = Math.pow(10, t - 1), s = Math.pow(10, t) - 1;
  return Math.floor(Math.random() * (s - r + 1)) + r;
}
function pS(t, r = {}) {
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
    const f = fS.parse(s), m = f.lorebooks ?? f.lorebook;
    if (!m || !m.entry)
      return c;
    const p = Array.isArray(m.entry) ? m.entry : [m.entry];
    for (const _ of p) {
      const g = _.worldName;
      g && (c[g] || (c[g] = []), c[g].push({
        uid: _.id ?? hS(6),
        key: _.triggers?.split(",").map((E) => E.trim()) ?? [],
        content: _.content ?? "",
        comment: _.name ?? "",
        disable: !1,
        keysecondary: []
      }));
    }
    return c;
  } catch (f) {
    throw console.error(f), new Error("Model response is not valid XML");
  }
}
function mS(t, r) {
  return `
<lorebooks>
  <entry>
    <worldName>${t}</worldName>
    <id>${r.uid}</id>
    <name>${r.comment}</name>
    <triggers>${r.key.join(",")}</triggers>
    <content>${r.content}`;
}
function gS(t, r) {
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
var ju = { exports: {} }, Ru = { exports: {} }, Bn = {}, rn = {}, Vv;
function on() {
  if (Vv) return rn;
  Vv = 1, rn.__esModule = !0, rn.extend = u, rn.indexOf = p, rn.escapeExpression = _, rn.isEmpty = g, rn.createFrame = E, rn.blockParams = v, rn.appendContextPath = S;
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
  function _(h) {
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
var Du = { exports: {} }, $v;
function Gn() {
  return $v || ($v = 1, (function(t, r) {
    r.__esModule = !0;
    var s = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function a(u, c) {
      var f = c && c.loc, m = void 0, p = void 0, _ = void 0, g = void 0;
      f && (m = f.start.line, p = f.end.line, _ = f.start.column, g = f.end.column, u += " - " + m + ":" + _);
      for (var E = Error.prototype.constructor.call(this, u), v = 0; v < s.length; v++)
        this[s[v]] = E[s[v]];
      Error.captureStackTrace && Error.captureStackTrace(this, a);
      try {
        f && (this.lineNumber = m, this.endLineNumber = p, Object.defineProperty ? (Object.defineProperty(this, "column", {
          value: _,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: g,
          enumerable: !0
        })) : (this.column = _, this.endColumn = g));
      } catch {
      }
    }
    a.prototype = new Error(), r.default = a, t.exports = r.default;
  })(Du, Du.exports)), Du.exports;
}
var Zs = {}, zu = { exports: {} }, Yv;
function vS() {
  return Yv || (Yv = 1, (function(t, r) {
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
    }, t.exports = r.default;
  })(zu, zu.exports)), zu.exports;
}
var Pu = { exports: {} }, Xv;
function yS() {
  return Xv || (Xv = 1, (function(t, r) {
    r.__esModule = !0;
    function s(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var a = on(), u = Gn(), c = s(u);
    r.default = function(f) {
      f.registerHelper("each", function(m, p) {
        if (!p)
          throw new c.default("Must pass iterator to #each");
        var _ = p.fn, g = p.inverse, E = 0, v = "", S = void 0, h = void 0;
        p.data && p.ids && (h = a.appendContextPath(p.data.contextPath, p.ids[0]) + "."), a.isFunction(m) && (m = m.call(this)), p.data && (S = a.createFrame(p.data));
        function C(l, y, w) {
          S && (S.key = l, S.index = y, S.first = y === 0, S.last = !!w, h && (S.contextPath = h + l)), v = v + _(m[l], {
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
              Object.keys(m).forEach(function(y) {
                l !== void 0 && C(l, E - 1), l = y, E++;
              }), l !== void 0 && C(l, E - 1, !0);
            })();
        return E === 0 && (v = g(this)), v;
      });
    }, t.exports = r.default;
  })(Pu, Pu.exports)), Pu.exports;
}
var Lu = { exports: {} }, Fv;
function _S() {
  return Fv || (Fv = 1, (function(t, r) {
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
  })(Lu, Lu.exports)), Lu.exports;
}
var Iu = { exports: {} }, Qv;
function bS() {
  return Qv || (Qv = 1, (function(t, r) {
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
    }, t.exports = r.default;
  })(Iu, Iu.exports)), Iu.exports;
}
var Bu = { exports: {} }, Kv;
function SS() {
  return Kv || (Kv = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(s) {
      s.registerHelper("log", function() {
        for (var a = [void 0], u = arguments[arguments.length - 1], c = 0; c < arguments.length - 1; c++)
          a.push(arguments[c]);
        var f = 1;
        u.hash.level != null ? f = u.hash.level : u.data && u.data.level != null && (f = u.data.level), a[0] = f, s.log.apply(s, a);
      });
    }, t.exports = r.default;
  })(Bu, Bu.exports)), Bu.exports;
}
var Uu = { exports: {} }, Jv;
function wS() {
  return Jv || (Jv = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(s) {
      s.registerHelper("lookup", function(a, u, c) {
        return a && c.lookupProperty(a, u);
      });
    }, t.exports = r.default;
  })(Uu, Uu.exports)), Uu.exports;
}
var Hu = { exports: {} }, Wv;
function ES() {
  return Wv || (Wv = 1, (function(t, r) {
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
        var _ = p.fn;
        if (a.isEmpty(m))
          return p.inverse(this);
        var g = p.data;
        return p.data && p.ids && (g = a.createFrame(p.data), g.contextPath = a.appendContextPath(p.data.contextPath, p.ids[0])), _(m, {
          data: g,
          blockParams: a.blockParams([m], [g && g.contextPath])
        });
      });
    }, t.exports = r.default;
  })(Hu, Hu.exports)), Hu.exports;
}
var ey;
function U0() {
  if (ey) return Zs;
  ey = 1, Zs.__esModule = !0, Zs.registerDefaultHelpers = C, Zs.moveHelperToHooks = x;
  function t(O) {
    return O && O.__esModule ? O : { default: O };
  }
  var r = vS(), s = t(r), a = yS(), u = t(a), c = _S(), f = t(c), m = bS(), p = t(m), _ = SS(), g = t(_), E = wS(), v = t(E), S = ES(), h = t(S);
  function C(O) {
    s.default(O), u.default(O), f.default(O), p.default(O), g.default(O), v.default(O), h.default(O);
  }
  function x(O, T, P) {
    O.helpers[T] && (O.hooks[T] = O.helpers[T], P || delete O.helpers[T]);
  }
  return Zs;
}
var qu = {}, Zu = { exports: {} }, ty;
function CS() {
  return ty || (ty = 1, (function(t, r) {
    r.__esModule = !0;
    var s = on();
    r.default = function(a) {
      a.registerDecorator("inline", function(u, c, f, m) {
        var p = u;
        return c.partials || (c.partials = {}, p = function(_, g) {
          var E = f.partials;
          f.partials = s.extend({}, E, c.partials);
          var v = u(_, g);
          return f.partials = E, v;
        }), c.partials[m.args[0]] = m.fn, p;
      });
    }, t.exports = r.default;
  })(Zu, Zu.exports)), Zu.exports;
}
var ny;
function kS() {
  if (ny) return qu;
  ny = 1, qu.__esModule = !0, qu.registerDefaultDecorators = a;
  function t(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var r = CS(), s = t(r);
  function a(u) {
    s.default(u);
  }
  return qu;
}
var Gu = { exports: {} }, ry;
function H0() {
  return ry || (ry = 1, (function(t, r) {
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
          for (var m = arguments.length, p = Array(m > 1 ? m - 1 : 0), _ = 1; _ < m; _++)
            p[_ - 1] = arguments[_];
          console[f].apply(console, p);
        }
      }
    };
    r.default = a, t.exports = r.default;
  })(Gu, Gu.exports)), Gu.exports;
}
var Oi = {}, Vu = {}, ay;
function AS() {
  if (ay) return Vu;
  ay = 1, Vu.__esModule = !0, Vu.createNewLookupObject = r;
  var t = on();
  function r() {
    for (var s = arguments.length, a = Array(s), u = 0; u < s; u++)
      a[u] = arguments[u];
    return t.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(a));
  }
  return Vu;
}
var iy;
function q0() {
  if (iy) return Oi;
  iy = 1, Oi.__esModule = !0, Oi.createProtoAccessControl = c, Oi.resultIsAllowed = f, Oi.resetLoggedProperties = _;
  function t(g) {
    return g && g.__esModule ? g : { default: g };
  }
  var r = AS(), s = H0(), a = t(s), u = /* @__PURE__ */ Object.create(null);
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
  function _() {
    Object.keys(u).forEach(function(g) {
      delete u[g];
    });
  }
  return Oi;
}
var sy;
function uh() {
  if (sy) return Bn;
  sy = 1, Bn.__esModule = !0, Bn.HandlebarsEnvironment = h;
  function t(x) {
    return x && x.__esModule ? x : { default: x };
  }
  var r = on(), s = Gn(), a = t(s), u = U0(), c = kS(), f = H0(), m = t(f), p = q0(), _ = "4.7.8";
  Bn.VERSION = _;
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
  return Bn.log = C, Bn.createFrame = r.createFrame, Bn.logger = m.default, Bn;
}
var $u = { exports: {} }, oy;
function xS() {
  return oy || (oy = 1, (function(t, r) {
    r.__esModule = !0;
    function s(a) {
      this.string = a;
    }
    s.prototype.toString = s.prototype.toHTML = function() {
      return "" + this.string;
    }, r.default = s, t.exports = r.default;
  })($u, $u.exports)), $u.exports;
}
var br = {}, Yu = {}, uy;
function TS() {
  if (uy) return Yu;
  uy = 1, Yu.__esModule = !0, Yu.wrapHelper = t;
  function t(r, s) {
    if (typeof r != "function")
      return r;
    var a = function() {
      var c = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = s(c), r.apply(this, arguments);
    };
    return a;
  }
  return Yu;
}
var ly;
function NS() {
  if (ly) return br;
  ly = 1, br.__esModule = !0, br.checkRevision = g, br.template = E, br.wrapProgram = v, br.resolvePartial = S, br.invokePartial = h, br.noop = C;
  function t(l) {
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
  var s = on(), a = r(s), u = Gn(), c = t(u), f = uh(), m = U0(), p = TS(), _ = q0();
  function g(l) {
    var y = l && l[0] || 1, w = f.COMPILER_REVISION;
    if (!(y >= f.LAST_COMPATIBLE_COMPILER_REVISION && y <= f.COMPILER_REVISION))
      if (y < f.LAST_COMPATIBLE_COMPILER_REVISION) {
        var k = f.REVISION_CHANGES[w], j = f.REVISION_CHANGES[y];
        throw new c.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + k + ") or downgrade your runtime to an older version (" + j + ").");
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
    function k(R, D, q) {
      q.hash && (D = a.extend({}, D, q.hash), q.ids && (q.ids[0] = !0)), R = y.VM.resolvePartial.call(this, R, D, q);
      var G = a.extend({}, q, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), V = y.VM.invokePartial.call(this, R, D, G);
      if (V == null && y.compile && (q.partials[q.name] = y.compile(R, l.compilerOptions, y), V = q.partials[q.name](D, G)), V != null) {
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
    var j = {
      strict: function(D, q, G) {
        if (!D || !(q in D))
          throw new c.default('"' + q + '" not defined in ' + D, {
            loc: G
          });
        return j.lookupProperty(D, q);
      },
      lookupProperty: function(D, q) {
        var G = D[q];
        if (G == null || Object.prototype.hasOwnProperty.call(D, q) || _.resultIsAllowed(G, j.protoAccessControl, q))
          return G;
      },
      lookup: function(D, q) {
        for (var G = D.length, V = 0; V < G; V++) {
          var K = D[V] && j.lookupProperty(D[V], q);
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
        return q || K || V || G ? M = v(this, D, B, q, G, V, K) : M || (M = this.programs[D] = v(this, D, B)), M;
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
      noop: y.VM.noop,
      compilerInfo: l.compiler
    };
    function L(R) {
      var D = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], q = D.data;
      L._setup(D), !D.partial && l.useData && (q = x(R, q));
      var G = void 0, V = l.useBlockParams ? [] : void 0;
      l.useDepths && (D.depths ? G = R != D.depths[0] ? [R].concat(D.depths) : D.depths : G = [R]);
      function K(M) {
        return "" + l.main(j, M, j.helpers, j.partials, q, V, G);
      }
      return K = O(l.main, K, j, D.depths || [], q, V), K(R, D);
    }
    return L.isTop = !0, L._setup = function(R) {
      if (R.partial)
        j.protoAccessControl = R.protoAccessControl, j.helpers = R.helpers, j.partials = R.partials, j.decorators = R.decorators, j.hooks = R.hooks;
      else {
        var D = a.extend({}, y.helpers, R.helpers);
        T(D, j), j.helpers = D, l.usePartial && (j.partials = j.mergeIfNeeded(R.partials, y.partials)), (l.usePartial || l.useDecorators) && (j.decorators = a.extend({}, y.decorators, R.decorators)), j.hooks = {}, j.protoAccessControl = _.createProtoAccessControl(R);
        var q = R.allowCallsToHelperMissing || w;
        m.moveHelperToHooks(j, "helperMissing", q), m.moveHelperToHooks(j, "blockHelperMissing", q);
      }
    }, L._child = function(R, D, q, G) {
      if (l.useBlockParams && !q)
        throw new c.default("must pass block params");
      if (l.useDepths && !G)
        throw new c.default("must pass parent depths");
      return v(j, R, l[R], D, 0, q, G);
    }, L;
  }
  function v(l, y, w, k, j, L, R) {
    function D(q) {
      var G = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], V = R;
      return R && q != R[0] && !(q === l.nullContext && R[0] === null) && (V = [q].concat(R)), w(l, q, l.helpers, l.partials, G.data || k, L && [G.blockParams].concat(L), V);
    }
    return D = O(w, D, l, R, k, L), D.program = y, D.depth = R ? R.length : 0, D.blockParams = j || 0, D;
  }
  function S(l, y, w) {
    return l ? !l.call && !w.name && (w.name = l, l = w.partials[l]) : w.name === "@partial-block" ? l = w.data["partial-block"] : l = w.partials[w.name], l;
  }
  function h(l, y, w) {
    var k = w.data && w.data["partial-block"];
    w.partial = !0, w.ids && (w.data.contextPath = w.ids[0] || w.data.contextPath);
    var j = void 0;
    if (w.fn && w.fn !== C && (function() {
      w.data = f.createFrame(w.data);
      var L = w.fn;
      j = w.data["partial-block"] = function(D) {
        var q = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return q.data = f.createFrame(q.data), q.data["partial-block"] = k, L(D, q);
      }, L.partials && (w.partials = a.extend({}, w.partials, L.partials));
    })(), l === void 0 && j && (l = j), l === void 0)
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
  function O(l, y, w, k, j, L) {
    if (l.decorator) {
      var R = {};
      y = l.decorator(y, R, w, k && k[0], j, L, k), a.extend(y, R);
    }
    return y;
  }
  function T(l, y) {
    Object.keys(l).forEach(function(w) {
      var k = l[w];
      l[w] = P(k, y);
    });
  }
  function P(l, y) {
    var w = y.lookupProperty;
    return p.wrapHelper(l, function(k) {
      return a.extend({ lookupProperty: w }, k);
    });
  }
  return br;
}
var Xu = { exports: {} }, cy;
function Z0() {
  return cy || (cy = 1, (function(t, r) {
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
  })(Xu, Xu.exports)), Xu.exports;
}
var dy;
function OS() {
  return dy || (dy = 1, (function(t, r) {
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
    var u = uh(), c = a(u), f = xS(), m = s(f), p = Gn(), _ = s(p), g = on(), E = a(g), v = NS(), S = a(v), h = Z0(), C = s(h);
    function x() {
      var T = new c.HandlebarsEnvironment();
      return E.extend(T, c), T.SafeString = m.default, T.Exception = _.default, T.Utils = E, T.escapeExpression = E.escapeExpression, T.VM = S, T.template = function(P) {
        return S.template(P, T);
      }, T;
    }
    var O = x();
    O.create = x, C.default(O), O.default = O, r.default = O, t.exports = r.default;
  })(Ru, Ru.exports)), Ru.exports;
}
var Fu = { exports: {} }, fy;
function G0() {
  return fy || (fy = 1, (function(t, r) {
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
  })(Fu, Fu.exports)), Fu.exports;
}
var Mi = {}, Qu = { exports: {} }, hy;
function MS() {
  return hy || (hy = 1, (function(t, r) {
    r.__esModule = !0;
    var s = (function() {
      var a = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function(m, p, _, g, E, v, S) {
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
          var p = this, _ = [0], g = [null], E = [], v = this.table, S = "", h = 0, C = 0;
          this.lexer.setInput(m), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var x = this.lexer.yylloc;
          E.push(x);
          var O = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function T() {
            var G;
            return G = p.lexer.lex() || 1, typeof G != "number" && (G = p.symbols_[G] || G), G;
          }
          for (var P, l, y, w, k = {}, j, L, R, D; ; ) {
            if (l = _[_.length - 1], this.defaultActions[l] ? y = this.defaultActions[l] : ((P === null || typeof P > "u") && (P = T()), y = v[l] && v[l][P]), typeof y > "u" || !y.length || !y[0]) {
              var q = "";
              {
                D = [];
                for (j in v[l]) this.terminals_[j] && j > 2 && D.push("'" + this.terminals_[j] + "'");
                this.lexer.showPosition ? q = "Parse error on line " + (h + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + D.join(", ") + ", got '" + (this.terminals_[P] || P) + "'" : q = "Parse error on line " + (h + 1) + ": Unexpected " + (P == 1 ? "end of input" : "'" + (this.terminals_[P] || P) + "'"), this.parseError(q, { text: this.lexer.match, token: this.terminals_[P] || P, line: this.lexer.yylineno, loc: x, expected: D });
              }
            }
            if (y[0] instanceof Array && y.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + l + ", token: " + P);
            switch (y[0]) {
              case 1:
                _.push(P), g.push(this.lexer.yytext), E.push(this.lexer.yylloc), _.push(y[1]), P = null, C = this.lexer.yyleng, S = this.lexer.yytext, h = this.lexer.yylineno, x = this.lexer.yylloc;
                break;
              case 2:
                if (L = this.productions_[y[1]][1], k.$ = g[g.length - L], k._$ = { first_line: E[E.length - (L || 1)].first_line, last_line: E[E.length - 1].last_line, first_column: E[E.length - (L || 1)].first_column, last_column: E[E.length - 1].last_column }, O && (k._$.range = [E[E.length - (L || 1)].range[0], E[E.length - 1].range[1]]), w = this.performAction.call(k, S, C, h, this.yy, y[1], g, E), typeof w < "u")
                  return w;
                L && (_ = _.slice(0, -1 * L * 2), g = g.slice(0, -1 * L), E = E.slice(0, -1 * L)), _.push(this.productions_[y[1]][0]), g.push(k.$), E.push(k._$), R = v[_[_.length - 2]][_[_.length - 1]], _.push(R);
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
          parseError: function(p, _) {
            if (this.yy.parser)
              this.yy.parser.parseError(p, _);
            else
              throw new Error(p);
          },
          setInput: function(p) {
            return this._input = p, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          input: function() {
            var p = this._input[0];
            this.yytext += p, this.yyleng++, this.offset++, this.match += p, this.matched += p;
            var _ = p.match(/(?:\r\n?|\n).*/g);
            return _ ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), p;
          },
          unput: function(p) {
            var _ = p.length, g = p.split(/(?:\r\n?|\n)/g);
            this._input = p + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - _ - 1), this.offset -= _;
            var E = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), g.length - 1 && (this.yylineno -= g.length - 1);
            var v = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: g ? (g.length === E.length ? this.yylloc.first_column : 0) + E[E.length - g.length].length - g[0].length : this.yylloc.first_column - _
            }, this.options.ranges && (this.yylloc.range = [v[0], v[0] + this.yyleng - _]), this;
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
            var p = this.pastInput(), _ = new Array(p.length + 1).join("-");
            return p + this.upcomingInput() + `
` + _ + "^";
          },
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var p, _, g, E, v;
            this._more || (this.yytext = "", this.match = "");
            for (var S = this._currentRules(), h = 0; h < S.length && (g = this._input.match(this.rules[S[h]]), !(g && (!_ || g[0].length > _[0].length) && (_ = g, E = h, !this.options.flex))); h++)
              ;
            return _ ? (v = _[0].match(/(?:\r\n?|\n).*/g), v && (this.yylineno += v.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: v ? v[v.length - 1].length - v[v.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + _[0].length
            }, this.yytext += _[0], this.match += _[0], this.matches = _, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(_[0].length), this.matched += _[0], p = this.performAction.call(this, this.yy, this, S[E], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), p || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
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
        return f.options = {}, f.performAction = function(p, _, g, E) {
          function v(S, h) {
            return _.yytext = _.yytext.substring(S, _.yyleng - h + S);
          }
          switch (g) {
            case 0:
              if (_.yytext.slice(-2) === "\\\\" ? (v(0, 1), this.begin("mu")) : _.yytext.slice(-1) === "\\" ? (v(0, 1), this.begin("emu")) : this.begin("mu"), _.yytext) return 15;
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
              this.unput(_.yytext), this.popState(), this.begin("com");
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
              return _.yytext = v(1, 2).replace(/\\"/g, '"'), 80;
            case 32:
              return _.yytext = v(1, 2).replace(/\\'/g, "'"), 80;
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
              return _.yytext = _.yytext.replace(/\\([\\\]])/g, "$1"), 72;
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
  })(Qu, Qu.exports)), Qu.exports;
}
var Ku = { exports: {} }, Ju = { exports: {} }, py;
function V0() {
  return py || (py = 1, (function(t, r) {
    r.__esModule = !0;
    function s(_) {
      return _ && _.__esModule ? _ : { default: _ };
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
    function f(_) {
      this.acceptRequired(_, "path"), this.acceptArray(_.params), this.acceptKey(_, "hash");
    }
    function m(_) {
      f.call(this, _), this.acceptKey(_, "program"), this.acceptKey(_, "inverse");
    }
    function p(_) {
      this.acceptRequired(_, "name"), this.acceptArray(_.params), this.acceptKey(_, "hash");
    }
    r.default = c, t.exports = r.default;
  })(Ju, Ju.exports)), Ju.exports;
}
var my;
function jS() {
  return my || (my = 1, (function(t, r) {
    r.__esModule = !0;
    function s(g) {
      return g && g.__esModule ? g : { default: g };
    }
    var a = V0(), u = s(a);
    function c() {
      var g = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = g;
    }
    c.prototype = new u.default(), c.prototype.Program = function(g) {
      var E = !this.options.ignoreStandalone, v = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var S = g.body, h = 0, C = S.length; h < C; h++) {
        var x = S[h], O = this.accept(x);
        if (O) {
          var T = f(S, h, v), P = m(S, h, v), l = O.openStandalone && T, y = O.closeStandalone && P, w = O.inlineStandalone && T && P;
          O.close && p(S, h, !0), O.open && _(S, h, !0), E && w && (p(S, h), _(S, h) && x.type === "PartialStatement" && (x.indent = /([ \t]+$)/.exec(S[h - 1].original)[1])), E && l && (p((x.program || x.inverse).body), _(S, h)), E && y && (p(S, h), _((x.inverse || x.program).body));
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
        x.open && _(E.body, null, !0), x.close && p(S.body, null, !0), g.closeStrip.open && _(h.body, null, !0), !this.options.ignoreStandalone && f(E.body) && m(S.body) && (_(E.body), p(S.body));
      } else g.closeStrip.open && _(E.body, null, !0);
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
    function _(g, E, v) {
      var S = g[E == null ? g.length - 1 : E - 1];
      if (!(!S || S.type !== "ContentStatement" || !v && S.leftStripped)) {
        var h = S.value;
        return S.value = S.value.replace(v ? /\s+$/ : /[ \t]+$/, ""), S.leftStripped = S.value !== h, S.leftStripped;
      }
    }
    r.default = c, t.exports = r.default;
  })(Ku, Ku.exports)), Ku.exports;
}
var mn = {}, gy;
function RS() {
  if (gy) return mn;
  gy = 1, mn.__esModule = !0, mn.SourceLocation = u, mn.id = c, mn.stripFlags = f, mn.stripComment = m, mn.preparePath = p, mn.prepareMustache = _, mn.prepareRawBlock = g, mn.prepareBlock = E, mn.prepareProgram = v, mn.preparePartialBlock = S;
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
    for (var O = h ? "@" : "", T = [], P = 0, l = 0, y = C.length; l < y; l++) {
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
  function _(h, C, x, O, T, P) {
    var l = O.charAt(3) || O.charAt(2), y = l !== "{" && l !== "&", w = /\*/.test(O);
    return {
      type: w ? "Decorator" : "MustacheStatement",
      path: h,
      params: C,
      hash: x,
      escaped: y,
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
    var y = void 0, w = void 0;
    if (x) {
      if (l)
        throw new s.default("Unexpected inverse block on decorator", x);
      x.chain && (x.program.body[0].closeStrip = O.strip), w = x.strip, y = x.program;
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
      closeStrip: O && O.strip,
      loc: this.locInfo(P)
    };
  }
  function v(h, C) {
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
  return mn;
}
var vy;
function DS() {
  if (vy) return Mi;
  vy = 1, Mi.__esModule = !0, Mi.parseWithoutProcessing = g, Mi.parse = E;
  function t(v) {
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
  var s = MS(), a = r(s), u = jS(), c = r(u), f = RS(), m = t(f), p = on();
  Mi.parser = a.default;
  var _ = {};
  p.extend(_, m);
  function g(v, S) {
    if (v.type === "Program")
      return v;
    a.default.yy = _, _.locInfo = function(C) {
      return new _.SourceLocation(S && S.srcName, C);
    };
    var h = a.default.parse(v);
    return h;
  }
  function E(v, S) {
    var h = g(v, S), C = new c.default(S);
    return C.accept(h);
  }
  return Mi;
}
var ji = {}, yy;
function zS() {
  if (yy) return ji;
  yy = 1, ji.__esModule = !0, ji.Compiler = m, ji.precompile = p, ji.compile = _;
  function t(v) {
    return v && v.__esModule ? v : { default: v };
  }
  var r = Gn(), s = t(r), a = on(), u = G0(), c = t(u), f = [].slice;
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
  function p(v, S, h) {
    if (v == null || typeof v != "string" && v.type !== "Program")
      throw new s.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + v);
    S = S || {}, "data" in S || (S.data = !0), S.compat && (S.useDepths = !0);
    var C = h.parse(v, S), x = new h.Compiler().compile(C, S);
    return new h.JavaScriptCompiler().compile(x, S);
  }
  function _(v, S, h) {
    if (S === void 0 && (S = {}), v == null || typeof v != "string" && v.type !== "Program")
      throw new s.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + v);
    S = a.extend({}, S), "data" in S || (S.data = !0), S.compat && (S.useDepths = !0);
    var C = void 0;
    function x() {
      var T = h.parse(v, S), P = new h.Compiler().compile(T, S), l = new h.JavaScriptCompiler().compile(P, S, void 0, !0);
      return h.template(l);
    }
    function O(T, P) {
      return C || (C = x()), C.call(this, T, P);
    }
    return O._setup = function(T) {
      return C || (C = x()), C._setup(T);
    }, O._child = function(T, P, l, y) {
      return C || (C = x()), C._child(T, P, l, y);
    }, O;
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
  return ji;
}
var Wu = { exports: {} }, el = { exports: {} }, Gs = {}, mf = {}, tl = {}, nl = {}, _y;
function PS() {
  if (_y) return nl;
  _y = 1;
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return nl.encode = function(r) {
    if (0 <= r && r < t.length)
      return t[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, nl.decode = function(r) {
    var s = 65, a = 90, u = 97, c = 122, f = 48, m = 57, p = 43, _ = 47, g = 26, E = 52;
    return s <= r && r <= a ? r - s : u <= r && r <= c ? r - u + g : f <= r && r <= m ? r - f + E : r == p ? 62 : r == _ ? 63 : -1;
  }, nl;
}
var by;
function $0() {
  if (by) return tl;
  by = 1;
  var t = PS(), r = 5, s = 1 << r, a = s - 1, u = s;
  function c(m) {
    return m < 0 ? (-m << 1) + 1 : (m << 1) + 0;
  }
  function f(m) {
    var p = (m & 1) === 1, _ = m >> 1;
    return p ? -_ : _;
  }
  return tl.encode = function(p) {
    var _ = "", g, E = c(p);
    do
      g = E & a, E >>>= r, E > 0 && (g |= u), _ += t.encode(g);
    while (E > 0);
    return _;
  }, tl.decode = function(p, _, g) {
    var E = p.length, v = 0, S = 0, h, C;
    do {
      if (_ >= E)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (C = t.decode(p.charCodeAt(_++)), C === -1)
        throw new Error("Invalid base64 digit: " + p.charAt(_ - 1));
      h = !!(C & u), C &= a, v = v + (C << S), S += r;
    } while (h);
    g.value = f(v), g.rest = _;
  }, tl;
}
var gf = {}, Sy;
function co() {
  return Sy || (Sy = 1, (function(t) {
    function r(l, y, w) {
      if (y in l)
        return l[y];
      if (arguments.length === 3)
        return w;
      throw new Error('"' + y + '" is a required argument.');
    }
    t.getArg = r;
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
    t.urlParse = u;
    function c(l) {
      var y = "";
      return l.scheme && (y += l.scheme + ":"), y += "//", l.auth && (y += l.auth + "@"), l.host && (y += l.host), l.port && (y += ":" + l.port), l.path && (y += l.path), y;
    }
    t.urlGenerate = c;
    function f(l) {
      var y = l, w = u(l);
      if (w) {
        if (!w.path)
          return l;
        y = w.path;
      }
      for (var k = t.isAbsolute(y), j = y.split(/\/+/), L, R = 0, D = j.length - 1; D >= 0; D--)
        L = j[D], L === "." ? j.splice(D, 1) : L === ".." ? R++ : R > 0 && (L === "" ? (j.splice(D + 1, R), R = 0) : (j.splice(D, 2), R--));
      return y = j.join("/"), y === "" && (y = k ? "/" : "."), w ? (w.path = y, c(w)) : y;
    }
    t.normalize = f;
    function m(l, y) {
      l === "" && (l = "."), y === "" && (y = ".");
      var w = u(y), k = u(l);
      if (k && (l = k.path || "/"), w && !w.scheme)
        return k && (w.scheme = k.scheme), c(w);
      if (w || y.match(a))
        return y;
      if (k && !k.host && !k.path)
        return k.host = y, c(k);
      var j = y.charAt(0) === "/" ? y : f(l.replace(/\/+$/, "") + "/" + y);
      return k ? (k.path = j, c(k)) : j;
    }
    t.join = m, t.isAbsolute = function(l) {
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
    t.relative = p;
    var _ = (function() {
      var l = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in l);
    })();
    function g(l) {
      return l;
    }
    function E(l) {
      return S(l) ? "$" + l : l;
    }
    t.toSetString = _ ? g : E;
    function v(l) {
      return S(l) ? l.slice(1) : l;
    }
    t.fromSetString = _ ? g : v;
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
    t.compareByOriginalPositions = h;
    function C(l, y, w) {
      var k = l.generatedLine - y.generatedLine;
      return k !== 0 || (k = l.generatedColumn - y.generatedColumn, k !== 0 || w) || (k = x(l.source, y.source), k !== 0) || (k = l.originalLine - y.originalLine, k !== 0) || (k = l.originalColumn - y.originalColumn, k !== 0) ? k : x(l.name, y.name);
    }
    t.compareByGeneratedPositionsDeflated = C;
    function x(l, y) {
      return l === y ? 0 : l === null ? 1 : y === null ? -1 : l > y ? 1 : -1;
    }
    function O(l, y) {
      var w = l.generatedLine - y.generatedLine;
      return w !== 0 || (w = l.generatedColumn - y.generatedColumn, w !== 0) || (w = x(l.source, y.source), w !== 0) || (w = l.originalLine - y.originalLine, w !== 0) || (w = l.originalColumn - y.originalColumn, w !== 0) ? w : x(l.name, y.name);
    }
    t.compareByGeneratedPositionsInflated = O;
    function T(l) {
      return JSON.parse(l.replace(/^\)]}'[^\n]*\n/, ""));
    }
    t.parseSourceMapInput = T;
    function P(l, y, w) {
      if (y = y || "", l && (l[l.length - 1] !== "/" && y[0] !== "/" && (l += "/"), y = l + y), w) {
        var k = u(w);
        if (!k)
          throw new Error("sourceMapURL could not be parsed");
        if (k.path) {
          var j = k.path.lastIndexOf("/");
          j >= 0 && (k.path = k.path.substring(0, j + 1));
        }
        y = m(c(k), y);
      }
      return f(y);
    }
    t.computeSourceURL = P;
  })(gf)), gf;
}
var vf = {}, wy;
function Y0() {
  if (wy) return vf;
  wy = 1;
  var t = co(), r = Object.prototype.hasOwnProperty, s = typeof Map < "u";
  function a() {
    this._array = [], this._set = s ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return a.fromArray = function(c, f) {
    for (var m = new a(), p = 0, _ = c.length; p < _; p++)
      m.add(c[p], f);
    return m;
  }, a.prototype.size = function() {
    return s ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, a.prototype.add = function(c, f) {
    var m = s ? c : t.toSetString(c), p = s ? this.has(c) : r.call(this._set, m), _ = this._array.length;
    (!p || f) && this._array.push(c), p || (s ? this._set.set(c, _) : this._set[m] = _);
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
  }, vf.ArraySet = a, vf;
}
var yf = {}, Ey;
function LS() {
  if (Ey) return yf;
  Ey = 1;
  var t = co();
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
  }, yf.MappingList = s, yf;
}
var Cy;
function X0() {
  if (Cy) return mf;
  Cy = 1;
  var t = $0(), r = co(), s = Y0().ArraySet, a = LS().MappingList;
  function u(c) {
    c || (c = {}), this._file = r.getArg(c, "file", null), this._sourceRoot = r.getArg(c, "sourceRoot", null), this._skipValidation = r.getArg(c, "skipValidation", !1), this._sources = new s(), this._names = new s(), this._mappings = new a(), this._sourcesContents = null;
  }
  return u.prototype._version = 3, u.fromSourceMap = function(f) {
    var m = f.sourceRoot, p = new u({
      file: f.file,
      sourceRoot: m
    });
    return f.eachMapping(function(_) {
      var g = {
        generated: {
          line: _.generatedLine,
          column: _.generatedColumn
        }
      };
      _.source != null && (g.source = _.source, m != null && (g.source = r.relative(m, g.source)), g.original = {
        line: _.originalLine,
        column: _.originalColumn
      }, _.name != null && (g.name = _.name)), p.addMapping(g);
    }), f.sources.forEach(function(_) {
      var g = _;
      m !== null && (g = r.relative(m, _)), p._sources.has(g) || p._sources.add(g);
      var E = f.sourceContentFor(_);
      E != null && p.setSourceContent(_, E);
    }), p;
  }, u.prototype.addMapping = function(f) {
    var m = r.getArg(f, "generated"), p = r.getArg(f, "original", null), _ = r.getArg(f, "source", null), g = r.getArg(f, "name", null);
    this._skipValidation || this._validateMapping(m, p, _, g), _ != null && (_ = String(_), this._sources.has(_) || this._sources.add(_)), g != null && (g = String(g), this._names.has(g) || this._names.add(g)), this._mappings.add({
      generatedLine: m.line,
      generatedColumn: m.column,
      originalLine: p != null && p.line,
      originalColumn: p != null && p.column,
      source: _,
      name: g
    });
  }, u.prototype.setSourceContent = function(f, m) {
    var p = f;
    this._sourceRoot != null && (p = r.relative(this._sourceRoot, p)), m != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[r.toSetString(p)] = m) : this._sourcesContents && (delete this._sourcesContents[r.toSetString(p)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, u.prototype.applySourceMap = function(f, m, p) {
    var _ = m;
    if (m == null) {
      if (f.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      _ = f.file;
    }
    var g = this._sourceRoot;
    g != null && (_ = r.relative(g, _));
    var E = new s(), v = new s();
    this._mappings.unsortedForEach(function(S) {
      if (S.source === _ && S.originalLine != null) {
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
  }, u.prototype._validateMapping = function(f, m, p, _) {
    if (m && typeof m.line != "number" && typeof m.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(f && "line" in f && "column" in f && f.line > 0 && f.column >= 0 && !m && !p && !_)) {
      if (f && "line" in f && "column" in f && m && "line" in m && "column" in m && f.line > 0 && f.column >= 0 && m.line > 0 && m.column >= 0 && p)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: f,
        source: p,
        original: m,
        name: _
      }));
    }
  }, u.prototype._serializeMappings = function() {
    for (var f = 0, m = 1, p = 0, _ = 0, g = 0, E = 0, v = "", S, h, C, x, O = this._mappings.toArray(), T = 0, P = O.length; T < P; T++) {
      if (h = O[T], S = "", h.generatedLine !== m)
        for (f = 0; h.generatedLine !== m; )
          S += ";", m++;
      else if (T > 0) {
        if (!r.compareByGeneratedPositionsInflated(h, O[T - 1]))
          continue;
        S += ",";
      }
      S += t.encode(h.generatedColumn - f), f = h.generatedColumn, h.source != null && (x = this._sources.indexOf(h.source), S += t.encode(x - E), E = x, S += t.encode(h.originalLine - 1 - _), _ = h.originalLine - 1, S += t.encode(h.originalColumn - p), p = h.originalColumn, h.name != null && (C = this._names.indexOf(h.name), S += t.encode(C - g), g = C)), v += S;
    }
    return v;
  }, u.prototype._generateSourcesContent = function(f, m) {
    return f.map(function(p) {
      if (!this._sourcesContents)
        return null;
      m != null && (p = r.relative(m, p));
      var _ = r.toSetString(p);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, _) ? this._sourcesContents[_] : null;
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
  }, mf.SourceMapGenerator = u, mf;
}
var Vs = {}, _f = {}, ky;
function IS() {
  return ky || (ky = 1, (function(t) {
    t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2;
    function r(s, a, u, c, f, m) {
      var p = Math.floor((a - s) / 2) + s, _ = f(u, c[p], !0);
      return _ === 0 ? p : _ > 0 ? a - p > 1 ? r(p, a, u, c, f, m) : m == t.LEAST_UPPER_BOUND ? a < c.length ? a : -1 : p : p - s > 1 ? r(s, p, u, c, f, m) : m == t.LEAST_UPPER_BOUND ? p : s < 0 ? -1 : s;
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
  })(_f)), _f;
}
var bf = {}, Ay;
function BS() {
  if (Ay) return bf;
  Ay = 1;
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
      for (var _ = a[f], g = c; g < f; g++)
        u(a[g], _) <= 0 && (p += 1, t(a, p, g));
      t(a, p + 1, g);
      var E = p + 1;
      s(a, u, c, E - 1), s(a, u, E + 1, f);
    }
  }
  return bf.quickSort = function(a, u) {
    s(a, u, 0, a.length - 1);
  }, bf;
}
var xy;
function US() {
  if (xy) return Vs;
  xy = 1;
  var t = co(), r = IS(), s = Y0().ArraySet, a = $0(), u = BS().quickSort;
  function c(_, g) {
    var E = _;
    return typeof _ == "string" && (E = t.parseSourceMapInput(_)), E.sections != null ? new p(E, g) : new f(E, g);
  }
  c.fromSourceMap = function(_, g) {
    return f.fromSourceMap(_, g);
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
    var E = t.getArg(g, "line"), v = {
      source: t.getArg(g, "source"),
      originalLine: E,
      originalColumn: t.getArg(g, "column", 0)
    };
    if (v.source = this._findSourceIndex(v.source), v.source < 0)
      return [];
    var S = [], h = this._findMapping(
      v,
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
  }, Vs.SourceMapConsumer = c;
  function f(_, g) {
    var E = _;
    typeof _ == "string" && (E = t.parseSourceMapInput(_));
    var v = t.getArg(E, "version"), S = t.getArg(E, "sources"), h = t.getArg(E, "names", []), C = t.getArg(E, "sourceRoot", null), x = t.getArg(E, "sourcesContent", null), O = t.getArg(E, "mappings"), T = t.getArg(E, "file", null);
    if (v != this._version)
      throw new Error("Unsupported version: " + v);
    C && (C = t.normalize(C)), S = S.map(String).map(t.normalize).map(function(P) {
      return C && t.isAbsolute(C) && t.isAbsolute(P) ? t.relative(C, P) : P;
    }), this._names = s.fromArray(h.map(String), !0), this._sources = s.fromArray(S, !0), this._absoluteSources = this._sources.toArray().map(function(P) {
      return t.computeSourceURL(C, P, g);
    }), this.sourceRoot = C, this.sourcesContent = x, this._mappings = O, this._sourceMapURL = g, this.file = T;
  }
  f.prototype = Object.create(c.prototype), f.prototype.consumer = c, f.prototype._findSourceIndex = function(_) {
    var g = _;
    if (this.sourceRoot != null && (g = t.relative(this.sourceRoot, g)), this._sources.has(g))
      return this._sources.indexOf(g);
    var E;
    for (E = 0; E < this._absoluteSources.length; ++E)
      if (this._absoluteSources[E] == _)
        return E;
    return -1;
  }, f.fromSourceMap = function(g, E) {
    var v = Object.create(f.prototype), S = v._names = s.fromArray(g._names.toArray(), !0), h = v._sources = s.fromArray(g._sources.toArray(), !0);
    v.sourceRoot = g._sourceRoot, v.sourcesContent = g._generateSourcesContent(
      v._sources.toArray(),
      v.sourceRoot
    ), v.file = g._file, v._sourceMapURL = E, v._absoluteSources = v._sources.toArray().map(function(w) {
      return t.computeSourceURL(v.sourceRoot, w, E);
    });
    for (var C = g._mappings.toArray().slice(), x = v.__generatedMappings = [], O = v.__originalMappings = [], T = 0, P = C.length; T < P; T++) {
      var l = C[T], y = new m();
      y.generatedLine = l.generatedLine, y.generatedColumn = l.generatedColumn, l.source && (y.source = h.indexOf(l.source), y.originalLine = l.originalLine, y.originalColumn = l.originalColumn, l.name && (y.name = S.indexOf(l.name)), O.push(y)), x.push(y);
    }
    return u(v.__originalMappings, t.compareByOriginalPositions), v;
  }, f.prototype._version = 3, Object.defineProperty(f.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function m() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  f.prototype._parseMappings = function(g, E) {
    for (var v = 1, S = 0, h = 0, C = 0, x = 0, O = 0, T = g.length, P = 0, l = {}, y = {}, w = [], k = [], j, L, R, D, q; P < T; )
      if (g.charAt(P) === ";")
        v++, P++, S = 0;
      else if (g.charAt(P) === ",")
        P++;
      else {
        for (j = new m(), j.generatedLine = v, D = P; D < T && !this._charIsMappingSeparator(g, D); D++)
          ;
        if (L = g.slice(P, D), R = l[L], R)
          P += L.length;
        else {
          for (R = []; P < D; )
            a.decode(g, P, y), q = y.value, P = y.rest, R.push(q);
          if (R.length === 2)
            throw new Error("Found a source, but no line and column");
          if (R.length === 3)
            throw new Error("Found a source and line, but no column");
          l[L] = R;
        }
        j.generatedColumn = S + R[0], S = j.generatedColumn, R.length > 1 && (j.source = x + R[1], x += R[1], j.originalLine = h + R[2], h = j.originalLine, j.originalLine += 1, j.originalColumn = C + R[3], C = j.originalColumn, R.length > 4 && (j.name = O + R[4], O += R[4])), k.push(j), typeof j.originalLine == "number" && w.push(j);
      }
    u(k, t.compareByGeneratedPositionsDeflated), this.__generatedMappings = k, u(w, t.compareByOriginalPositions), this.__originalMappings = w;
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
      generatedLine: t.getArg(g, "line"),
      generatedColumn: t.getArg(g, "column")
    }, v = this._findMapping(
      E,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      t.compareByGeneratedPositionsDeflated,
      t.getArg(g, "bias", c.GREATEST_LOWER_BOUND)
    );
    if (v >= 0) {
      var S = this._generatedMappings[v];
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
    var v = this._findSourceIndex(g);
    if (v >= 0)
      return this.sourcesContent[v];
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
    var v = {
      source: E,
      originalLine: t.getArg(g, "line"),
      originalColumn: t.getArg(g, "column")
    }, S = this._findMapping(
      v,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      t.getArg(g, "bias", c.GREATEST_LOWER_BOUND)
    );
    if (S >= 0) {
      var h = this._originalMappings[S];
      if (h.source === v.source)
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
  }, Vs.BasicSourceMapConsumer = f;
  function p(_, g) {
    var E = _;
    typeof _ == "string" && (E = t.parseSourceMapInput(_));
    var v = t.getArg(E, "version"), S = t.getArg(E, "sections");
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
      for (var _ = [], g = 0; g < this._sections.length; g++)
        for (var E = 0; E < this._sections[g].consumer.sources.length; E++)
          _.push(this._sections[g].consumer.sources[E]);
      return _;
    }
  }), p.prototype.originalPositionFor = function(g) {
    var E = {
      generatedLine: t.getArg(g, "line"),
      generatedColumn: t.getArg(g, "column")
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
      if (v.consumer._findSourceIndex(t.getArg(g, "source")) !== -1) {
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
  }, Vs.IndexedSourceMapConsumer = p, Vs;
}
var Sf = {}, Ty;
function HS() {
  if (Ty) return Sf;
  Ty = 1;
  var t = X0().SourceMapGenerator, r = co(), s = /(\r?\n)/, a = 10, u = "$$$isSourceNode$$$";
  function c(f, m, p, _, g) {
    this.children = [], this.sourceContents = {}, this.line = f ?? null, this.column = m ?? null, this.source = p ?? null, this.name = g ?? null, this[u] = !0, _ != null && this.add(_);
  }
  return c.fromStringWithSourceMap = function(m, p, _) {
    var g = new c(), E = m.split(s), v = 0, S = function() {
      var T = l(), P = l() || "";
      return T + P;
      function l() {
        return v < E.length ? E[v++] : void 0;
      }
    }, h = 1, C = 0, x = null;
    return p.eachMapping(function(T) {
      if (x !== null)
        if (h < T.generatedLine)
          O(x, S()), h++, C = 0;
        else {
          var P = E[v] || "", l = P.substr(0, T.generatedColumn - C);
          E[v] = P.substr(T.generatedColumn - C), C = T.generatedColumn, O(x, l), x = T;
          return;
        }
      for (; h < T.generatedLine; )
        g.add(S()), h++;
      if (C < T.generatedColumn) {
        var P = E[v] || "";
        g.add(P.substr(0, T.generatedColumn)), E[v] = P.substr(T.generatedColumn), C = T.generatedColumn;
      }
      x = T;
    }, this), v < E.length && (x && O(x, S()), g.add(E.splice(v).join(""))), p.sources.forEach(function(T) {
      var P = p.sourceContentFor(T);
      P != null && (_ != null && (T = r.join(_, T)), g.setSourceContent(T, P));
    }), g;
    function O(T, P) {
      if (T === null || T.source === void 0)
        g.add(P);
      else {
        var l = _ ? r.join(_, T.source) : T.source;
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
    for (var p, _ = 0, g = this.children.length; _ < g; _++)
      p = this.children[_], p[u] ? p.walk(m) : p !== "" && m(p, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, c.prototype.join = function(m) {
    var p, _, g = this.children.length;
    if (g > 0) {
      for (p = [], _ = 0; _ < g - 1; _++)
        p.push(this.children[_]), p.push(m);
      p.push(this.children[_]), this.children = p;
    }
    return this;
  }, c.prototype.replaceRight = function(m, p) {
    var _ = this.children[this.children.length - 1];
    return _[u] ? _.replaceRight(m, p) : typeof _ == "string" ? this.children[this.children.length - 1] = _.replace(m, p) : this.children.push("".replace(m, p)), this;
  }, c.prototype.setSourceContent = function(m, p) {
    this.sourceContents[r.toSetString(m)] = p;
  }, c.prototype.walkSourceContents = function(m) {
    for (var p = 0, _ = this.children.length; p < _; p++)
      this.children[p][u] && this.children[p].walkSourceContents(m);
    for (var g = Object.keys(this.sourceContents), p = 0, _ = g.length; p < _; p++)
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
    }, _ = new t(m), g = !1, E = null, v = null, S = null, h = null;
    return this.walk(function(C, x) {
      p.code += C, x.source !== null && x.line !== null && x.column !== null ? ((E !== x.source || v !== x.line || S !== x.column || h !== x.name) && _.addMapping({
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
      }), E = x.source, v = x.line, S = x.column, h = x.name, g = !0) : g && (_.addMapping({
        generated: {
          line: p.line,
          column: p.column
        }
      }), E = null, g = !1);
      for (var O = 0, T = C.length; O < T; O++)
        C.charCodeAt(O) === a ? (p.line++, p.column = 0, O + 1 === T ? (E = null, g = !1) : g && _.addMapping({
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
      _.setSourceContent(C, x);
    }), { code: p.code, map: _ };
  }, Sf.SourceNode = c, Sf;
}
var Ny;
function qS() {
  return Ny || (Ny = 1, Gs.SourceMapGenerator = X0().SourceMapGenerator, Gs.SourceMapConsumer = US().SourceMapConsumer, Gs.SourceNode = HS().SourceNode), Gs;
}
var Oy;
function ZS() {
  return Oy || (Oy = 1, (function(t, r) {
    r.__esModule = !0;
    var s = on(), a = void 0;
    try {
      var u = qS();
      a = u.SourceNode;
    } catch {
    }
    a || (a = function(m, p, _, g) {
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
    function c(m, p, _) {
      if (s.isArray(m)) {
        for (var g = [], E = 0, v = m.length; E < v; E++)
          g.push(p.wrap(m[E], _));
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
      prepend: function(p, _) {
        this.source.unshift(this.wrap(p, _));
      },
      push: function(p, _) {
        this.source.push(this.wrap(p, _));
      },
      merge: function() {
        var p = this.empty();
        return this.each(function(_) {
          p.add(["  ", _, `
`]);
        }), p;
      },
      each: function(p) {
        for (var _ = 0, g = this.source.length; _ < g; _++)
          p(this.source[_]);
      },
      empty: function() {
        var p = this.currentLocation || { start: {} };
        return new a(p.start.line, p.start.column, this.srcFile);
      },
      wrap: function(p) {
        var _ = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return p instanceof a ? p : (p = c(p, this, _), new a(_.start.line, _.start.column, this.srcFile, p));
      },
      functionCall: function(p, _, g) {
        return g = this.generateList(g), this.wrap([p, _ ? "." + _ + "(" : "(", g, ")"]);
      },
      quotedString: function(p) {
        return '"' + (p + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(p) {
        var _ = this, g = [];
        Object.keys(p).forEach(function(v) {
          var S = c(p[v], _);
          S !== "undefined" && g.push([_.quotedString(v), ":", S]);
        });
        var E = this.generateList(g);
        return E.prepend("{"), E.add("}"), E;
      },
      generateList: function(p) {
        for (var _ = this.empty(), g = 0, E = p.length; g < E; g++)
          g && _.add(","), _.add(c(p[g], this));
        return _;
      },
      generateArray: function(p) {
        var _ = this.generateList(p);
        return _.prepend("["), _.add("]"), _;
      }
    }, r.default = f, t.exports = r.default;
  })(el, el.exports)), el.exports;
}
var My;
function GS() {
  return My || (My = 1, (function(t, r) {
    r.__esModule = !0;
    function s(v) {
      return v && v.__esModule ? v : { default: v };
    }
    var a = uh(), u = Gn(), c = s(u), f = on(), m = ZS(), p = s(m);
    function _(v) {
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
        var O = S.opcodes, T = void 0, P = void 0, l = void 0, y = void 0;
        for (l = 0, y = O.length; l < y; l++)
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
        var j = this.context, L = j.programs, R = j.decorators;
        for (l = 0, y = L.length; l < y; l++)
          L[l] && (k[l] = L[l], R[l] && (k[l + "_d"] = R[l], k.useDecorators = !0));
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
          var y = h.aliases[l];
          y.children && y.referenceCount > 1 && (C += ", alias" + ++O + "=" + l, y.children[0] = "alias" + O);
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
            var y = this.context.programs.length;
            x.index = y, x.name = "program" + y, this.context.programs[y] = O.compile(x, h, this.context, !this.precompile), this.context.decorators[y] = O.decorators, this.context.environments[y] = x, this.useDepths = this.useDepths || O.useDepths, this.useBlockParams = this.useBlockParams || O.useBlockParams, x.useDepths = this.useDepths, x.useBlockParams = this.useBlockParams;
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
        return S instanceof _ || (S = this.source.wrap(S)), this.inlineStack.push(S), S;
      },
      pushStackLiteral: function(S) {
        this.push(new _(S));
      },
      pushSource: function(S) {
        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), S && this.source.push(S);
      },
      replaceStack: function(S) {
        var h = ["("], C = void 0, x = void 0, O = void 0;
        if (!this.isInline())
          throw new c.default("replaceStack on non-inline");
        var T = this.popStack(!0);
        if (T instanceof _)
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
          if (x instanceof _)
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
        if (!S && C instanceof _)
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
        return h instanceof _ ? h.value : h;
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
        var x = {}, O = [], T = [], P = [], l = !C, y = void 0;
        l && (C = []), x.name = this.quotedString(S), x.hash = this.popStack(), this.trackIds && (x.hashIds = this.popStack()), this.stringParams && (x.hashTypes = this.popStack(), x.hashContexts = this.popStack());
        var w = this.popStack(), k = this.popStack();
        (k || w) && (x.fn = k || "container.noop", x.inverse = w || "container.noop");
        for (var j = h; j--; )
          y = this.popStack(), C[j] = y, this.trackIds && (P[j] = this.popStack()), this.stringParams && (T[j] = this.popStack(), O[j] = this.popStack());
        return l && (x.args = this.source.generateArray(C)), this.trackIds && (x.ids = this.source.generateArray(P)), this.stringParams && (x.types = this.source.generateArray(T), x.contexts = this.source.generateArray(O)), this.options.data && (x.data = "data"), this.useBlockParams && (x.blockParams = "blockParams"), x;
      },
      setupHelperArgs: function(S, h, C, x) {
        var O = this.setupParams(S, h, C);
        return O.loc = JSON.stringify(this.source.currentLocation), O = this.objectLiteral(O), x ? (this.useRegister("options"), C.push("options"), ["options=", O]) : C ? (C.push(O), "") : O;
      }
    }, (function() {
      for (var v = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), S = g.RESERVED_WORDS = {}, h = 0, C = v.length; h < C; h++)
        S[v[h]] = !0;
    })(), g.isValidJavaScriptVariableName = function(v) {
      return !g.RESERVED_WORDS[v] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(v);
    };
    function E(v, S, h, C, x) {
      var O = S.popStack(), T = h.length;
      for (v && T--; C < T; C++)
        O = S.nameLookup(O, h[C], x);
      return v ? [S.aliasable("container.strict"), "(", O, ", ", S.quotedString(h[C]), ", ", JSON.stringify(S.source.currentLocation), " )"] : O;
    }
    r.default = g, t.exports = r.default;
  })(Wu, Wu.exports)), Wu.exports;
}
var jy;
function VS() {
  return jy || (jy = 1, (function(t, r) {
    r.__esModule = !0;
    function s(T) {
      return T && T.__esModule ? T : { default: T };
    }
    var a = OS(), u = s(a), c = G0(), f = s(c), m = DS(), p = zS(), _ = GS(), g = s(_), E = V0(), v = s(E), S = Z0(), h = s(S), C = u.default.create;
    function x() {
      var T = C();
      return T.compile = function(P, l) {
        return p.compile(P, l, T);
      }, T.precompile = function(P, l) {
        return p.precompile(P, l, T);
      }, T.AST = f.default, T.Compiler = p.Compiler, T.JavaScriptCompiler = g.default, T.Parser = m.parser, T.parse = m.parse, T.parseWithoutProcessing = m.parseWithoutProcessing, T;
    }
    var O = x();
    O.create = x, h.default(O), O.Visitor = v.default, O.default = O, r.default = O, t.exports = r.default;
  })(ju, ju.exports)), ju.exports;
}
var _n = VS();
const Re = SillyTavern.getContext();
new l0("dumb", {}).getSettings();
async function F0({
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
  const g = SillyTavern.getContext().extensionSettings.connectionManager?.profiles?.find((T) => T.id === t);
  if (!g)
    throw new Error(`Connection profile with ID "${t}" not found.`);
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
      ([P, l]) => l.length > 0 && a.selectedWorldNames.includes(P) && l.some((y) => !y?.disable)
    ).forEach(([P, l]) => {
      let y = l.filter((k) => !k?.disable);
      const w = a.selectedEntryUids?.[P];
      if (w && w.length > 0) {
        const k = new Set(w);
        y = y.filter((j) => k.has(j.uid));
      }
      y.length > 0 && (T[P] = y);
    }), v.currentLorebooks = T;
  }
  {
    const T = {};
    Object.entries(a.suggestedEntries).filter(([P, l]) => l.length > 0).forEach(([P, l]) => {
      T[P] = l.filter(
        (y) => !(P === p?.worldName && y.uid === p.entry.uid && y.comment === p.entry.comment)
      );
    }), v.suggestedLorebooks = T;
  }
  const h = [];
  {
    for (const T of f) {
      if (T.promptName === "chatHistory") {
        h.push(...(await b0(E, s)).result);
        continue;
      }
      const P = c[T.promptName];
      if (!P)
        continue;
      const l = {
        role: T.role,
        content: _n.compile(P.content, { noEscape: !0 })(v)
      };
      l.content = Re.substituteParams(l.content), l.content && h.push(l);
    }
    p && (p.mode === "continue" ? h.push({
      role: "assistant",
      content: mS(p.worldName, p.entry)
    }) : p.mode === "revise" && (h.push({
      role: "assistant",
      content: gS(p.worldName, p.entry)
    }), S && h.push({
      role: "user",
      content: S
    })));
  }
  const C = await Re.ConnectionManagerRequestService.sendRequest(
    t,
    h,
    m
  ), x = h.find((T) => T.role === "assistant");
  if (!C.content)
    throw new Error("AI returned an empty response. Check your connection profile, model, and console for details.");
  let O = pS(C.content, {
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
      const y = u[T]?.find((w) => w.uid === l.uid);
      y && (l.key.length === 0 && (l.key = y.key), l.comment || (l.comment = y.comment)), (l.comment === null || l.comment === void 0) && (l.comment = "");
    });
  }), O = p ? { [p.worldName]: [O[p.worldName][0]] } : O, O;
}
function $S(t, r, s) {
  s[r] || (s[r] = []);
  const a = s[r], u = a.findIndex((m) => m.uid === t.uid);
  let c;
  const f = u !== -1;
  if (f)
    c = a[u];
  else {
    const m = { entries: {} };
    a.forEach((g) => m.entries[g.uid] = g);
    const p = nh(r, m);
    if (!p)
      throw new Error(`Failed to create a new entry structure in world "${r}"`);
    const _ = a.length > 0 ? a[a.length - 1] : void 0;
    if (_) {
      const g = p.uid;
      Object.assign(p, _), p.uid = g;
    }
    c = p, a.push(c);
  }
  return c.key = t.key, c.content = t.content, c.comment = t.comment, { modifiedEntry: c, status: f ? "updated" : "added" };
}
function YS() {
  const t = Re.extensionSettings?.connectionManager?.profiles ?? [];
  return t.map((r) => ({
    value: r.name ?? r.id,
    valueProvider: (s) => t.find((a) => a.name?.includes(s))?.name
  }));
}
const Js = "SillyTavern-WorldInfo-Recommender", XS = "0.2.0", FS = "F_1.4", QS = {
  EXTENSION: "worldInfoRecommender"
}, rl = [
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
  stDescription: s8,
  currentLorebooks: o8,
  blackListedEntries: u8,
  suggestedLorebooks: l8,
  responseRules: c8,
  taskDescription: d8,
  reviseJsonPrompt: f8,
  reviseXmlPrompt: h8,
  reviseTaskDescription: p8,
  reviseGlobalStateUpdate: v8,
  reviseGlobalStateUpdateAddedModified: m8,
  reviseGlobalStateUpdateRemoved: g8
}, lh = {
  version: XS,
  formatVersion: FS,
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
function Ry(t) {
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
const It = new l0(QS.EXTENSION, lh);
async function KS() {
  return new Promise((t, r) => {
    It.initializeSettings({
      strategy: [
        {
          from: "F_1.0",
          to: "F_1.1",
          action(s) {
            const a = {
              ...lh,
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
      console.error(`[${Js}] Error initializing settings:`, s), ge("error", `[${Js}] Failed to initialize settings: ${s.message}`), Re.Popup.show.confirm(
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
}, Q0 = ({ label: t, className: r, overrideDefaults: s = !1, type: a = "text", ...u }) => {
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
}, xl = ({ children: t, className: r, overrideDefaults: s = !1, ...a }) => {
  const u = ie.useMemo(() => {
    const c = [];
    return s || c.push("text_pole"), c.push(r), c.filter(Boolean).join(" ");
  }, [s, r]);
  return /* @__PURE__ */ A.jsx("select", { className: u, ...a, children: t });
}, qn = ({ children: t, className: r, overrideDefaults: s = !1, ...a }) => {
  const u = ie.useMemo(() => {
    const c = [];
    return s || c.push("text_pole", "textarea_compact"), c.push(r), c.filter(Boolean).join(" ");
  }, [s, r]);
  return /* @__PURE__ */ A.jsx("textarea", { className: u, ...a, children: t });
};
var JS = u0(), Lt = /* @__PURE__ */ ((t) => (t[t.TEXT = 1] = "TEXT", t[t.CONFIRM = 2] = "CONFIRM", t[t.INPUT = 3] = "INPUT", t[t.DISPLAY = 4] = "DISPLAY", t))(Lt || {}), Kr = /* @__PURE__ */ ((t) => (t[t.AFFIRMATIVE = 1] = "AFFIRMATIVE", t[t.NEGATIVE = 0] = "NEGATIVE", t[t.CANCELLED = null] = "CANCELLED", t))(Kr || {});
const WS = SillyTavern.getContext(), tr = ({
  content: t,
  type: r,
  inputValue: s = "",
  options: a = {},
  preventEscape: u = !1,
  onComplete: c
}) => {
  var f;
  const m = ie.useRef(null), p = ie.useRef(null), [_, g] = ie.useState(!1), [E, v] = ie.useState(null), S = ie.useRef(WS.uuidv4()), h = ie.useRef({
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
    return T.addEventListener("cancel", P), h.current.dlg = T, h.current.mainInput = p.current, xi.util.popups.push(h.current), T.showModal || (T.classList.add("poly_dialog"), fv.registerDialog(T), new ResizeObserver((l) => {
      for (const y of l)
        fv.reposition(y.target);
    }).observe(T)), T.showModal(), Qd(), () => {
      dv(xi.util.popups, h.current), Qd(), T.removeEventListener("cancel", P);
    };
  }, []);
  const C = async (T) => {
    var P, l;
    let y = T;
    if (r === Lt.INPUT && (T >= Kr.AFFIRMATIVE ? y = (P = p.current) == null ? void 0 : P.value : T === Kr.NEGATIVE ? y = !1 : T === Kr.CANCELLED ? y = null : y = !1), (l = a.customInputs) != null && l.length) {
      const k = new Map(
        a.customInputs.map((j) => {
          var L;
          const R = (L = m.current) == null ? void 0 : L.querySelector(`#${j.id}`);
          return [R.id, R.checked];
        })
      );
      h.current.inputResults = k;
    }
    if (h.current.result = T, h.current.value = y, a.onClosing && !await a.onClosing(h.current)) {
      g(!0), h.current.value = void 0, h.current.result = void 0, h.current.inputResults = void 0;
      return;
    }
    g(!1), xi.util.lastResult = {
      value: y,
      result: T,
      inputResults: h.current.inputResults
    };
    const w = m.current;
    w && (w.setAttribute("closing", ""), Qd(), m2(w, async () => {
      var k;
      if (w.close(), a.onClose && await a.onClose(h.current), dv(xi.util.popups, h.current), xi.util.popups.length > 0) {
        const j = (k = document.activeElement) == null ? void 0 : k.closest(".popup"), L = j?.getAttribute("data-id"), R = xi.util.popups.find((D) => D.id === L);
        R && R.lastFocus && R.lastFocus.focus();
      }
      c(y);
    }));
  }, x = (T) => {
    T.target instanceof HTMLElement && T.target !== m.current && (v(T.target), h.current.lastFocus = T.target);
  }, O = async (T) => {
  };
  return JS.createPortal(
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
                    var y;
                    (y = l.action) == null || y.call(l), C(l.result ?? P + 2);
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
}, $s = (t, r, s) => {
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
}, Sr = SillyTavern.getContext(), K0 = ({
  initialSelectedProfileId: t,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: s = "Select a Connection Profile",
  onChange: a,
  onCreate: u,
  onUpdate: c,
  onDelete: f
}) => {
  const [m, p] = ie.useState(t ?? ""), [_, g] = ie.useState(Date.now()), { isEnabled: E, profiles: v, connectApiMap: S } = ie.useMemo(() => {
    var x, O;
    return (x = Sr.extensionSettings.disabledExtensions) != null && x.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((O = Sr.extensionSettings.connectionManager) == null ? void 0 : O.profiles) ?? [],
      connectApiMap: Sr.CONNECT_API_MAP
    };
  }, [_]);
  ie.useEffect(() => {
    if (!E) return;
    const x = (P) => {
      $s(P, r, S) && (g(Date.now()), u?.(P));
    }, O = (P, l) => {
      const y = $s(P, r, S), w = $s(l, r, S);
      (y || w) && g(Date.now()), c?.(P, l), m === P.id && !w && (p(""), a?.(void 0));
    }, T = (P) => {
      $s(P, r, S) && (g(Date.now()), f?.(P), m === P.id && (p(""), a?.(void 0)));
    };
    return Sr.eventSource.on("CONNECTION_PROFILE_CREATED", x), Sr.eventSource.on("CONNECTION_PROFILE_UPDATED", O), Sr.eventSource.on("CONNECTION_PROFILE_DELETED", T), () => {
      Sr.eventSource.removeListener("CONNECTION_PROFILE_CREATED", x), Sr.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", O), Sr.eventSource.removeListener("CONNECTION_PROFILE_DELETED", T);
    };
  }, [E, m, r, S, a, u, c, f]);
  const h = ie.useMemo(() => {
    if (!E) return [];
    const x = v.filter((T) => $s(T, r, S)), O = {};
    for (const [T, P] of Object.entries(r))
      O[T] = { label: P, profiles: [] };
    for (const T of x) {
      const P = S[T.api];
      O[P.selected] && O[P.selected].profiles.push(T);
    }
    for (const T of Object.values(O))
      T.profiles.sort((P, l) => (P.name ?? "").localeCompare(l.name ?? ""));
    return Object.values(O).filter((T) => T.profiles.length > 0);
  }, [E, v, r, S]), C = ie.useCallback(
    (x) => {
      const O = x.target.value;
      p(O);
      const T = v.find((P) => P.id === O);
      a?.(T);
    },
    [v, a]
  );
  return E ? /* @__PURE__ */ A.jsxs(xl, { value: m, onChange: C, children: [
    /* @__PURE__ */ A.jsx("option", { value: "", children: s }),
    h.map((x) => /* @__PURE__ */ A.jsx("optgroup", { label: x.label, children: x.profiles.map((O) => /* @__PURE__ */ A.jsx("option", { value: O.id, children: O.name }, O.id)) }, x.label))
  ] }) : /* @__PURE__ */ A.jsx(xl, { disabled: !0, value: "", children: /* @__PURE__ */ A.jsx("option", { children: "Connection Manager disabled" }) });
}, ew = _l.memo(
  ({ item: t, showToggleButton: r, showDeleteButton: s, showSelectInput: a, onToggle: u, onDelete: c, onSelectChange: f }) => {
    const {
      id: m,
      label: p,
      enabled: _,
      canDelete: g = !0,
      canToggle: E = !0,
      showSelect: v = !0,
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
      opacity: r && !_ ? 0.6 : 1
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
      a && v && S && /* @__PURE__ */ A.jsx(
        xl,
        {
          value: C,
          onChange: (P) => f(m, P.target.value),
          disabled: !_,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: h.length === 0 ? /* @__PURE__ */ A.jsx("option", { disabled: !0, children: "--" }) : h.map((P) => /* @__PURE__ */ A.jsx("option", { value: P.value, children: P.label }, P.value))
        }
      ),
      a && (!v || !S) && /* @__PURE__ */ A.jsx("span", { style: T }),
      r && E && /* @__PURE__ */ A.jsx(
        Ee,
        {
          overrideDefaults: !0,
          className: `toggle-button fas ${_ ? "fa-toggle-on" : "fa-toggle-off"}`,
          style: {
            ...O,
            marginRight: "10px",
            fontSize: "1.2em",
            color: _ ? "var(--success-color, #4CAF50)" : "var(--SmartThemeBodyColor, #555)",
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
), J0 = ({
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
      const { oldIndex: v, newIndex: S } = E;
      if (v === void 0 || S === void 0 || v === S)
        return;
      const h = Array.from(t), [C] = h.splice(v, 1);
      h.splice(S, 0, C), r(h);
    }
  })), () => {
    var E;
    (E = m.current) == null || E.destroy(), m.current = null;
  }), [t, r, c]);
  const p = (E) => {
    r(t.map((v) => v.id === E ? { ...v, enabled: !v.enabled } : v));
  }, _ = (E) => {
    r(t.filter((v) => v.id !== E));
  }, g = (E, v) => {
    r(t.map((S) => S.id === E ? { ...S, selectValue: v } : S));
  };
  return /* @__PURE__ */ A.jsx("ul", { ref: f, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: t.map((E) => /* @__PURE__ */ A.jsx(
    ew,
    {
      item: E,
      showToggleButton: s,
      showDeleteButton: a,
      showSelectInput: u,
      onToggle: p,
      onDelete: _,
      onSelectChange: g
    },
    E.id
  )) });
}, W0 = ({
  items: t,
  value: r,
  onChange: s,
  placeholder: a = "Select items...",
  closeOnSelect: u = !1,
  multiple: c = !0,
  disabled: f = !1,
  onBeforeSelection: m,
  enableSearch: p = !1,
  searchPlaceholder: _ = "Search...",
  searchNoResultsText: g = "No results found",
  searchFuseOptions: E,
  inputClasses: v,
  containerClasses: S
}) => {
  const [h, C] = ie.useState(!1), [x, O] = ie.useState(""), T = ie.useRef(null);
  ie.useEffect(() => {
    const k = (j) => {
      T.current && !T.current.contains(j.target) && C(!1);
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
    return new Ui(t, k);
  }, [t, p, E]), l = ie.useMemo(() => !p || !x.trim() || !P ? t : P.search(x.trim()).map((k) => k.item), [t, x, p, P]), y = async (k) => {
    let j;
    c ? j = r.includes(k) ? r.filter((L) => L !== k) : [...r, k] : j = r.includes(k) ? [] : [k], !(m && !await Promise.resolve(m(r, j))) && (s(j), u && C(!1));
  }, w = ie.useMemo(() => {
    var k;
    return r.length === 0 ? a : r.length === 1 ? ((k = t.find((j) => j.value === r[0])) == null ? void 0 : k.label) ?? r[0] : `${r.length} items selected`;
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
                    Q0,
                    {
                      type: "text",
                      placeholder: _,
                      value: x,
                      onChange: (k) => O(k.target.value),
                      autoFocus: !0,
                      className: v
                    }
                  )
                }
              ),
              /* @__PURE__ */ A.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: l.length > 0 ? l.map((k) => /* @__PURE__ */ A.jsx(
                tw,
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
}, tw = _l.memo(({ item: t, isSelected: r, onClick: s }) => {
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
}), wf = SillyTavern.getContext(), Bf = ({
  value: t,
  items: r,
  readOnlyValues: s = [],
  label: a,
  onChange: u,
  onItemsChange: c,
  enableCreate: f = !1,
  enableRename: m = !1,
  enableDelete: p = !1,
  onCreate: _,
  onRename: g,
  onDelete: E,
  buttons: v
}) => {
  const S = ie.useMemo(() => r.find((T) => T.value === t), [r, t]), h = ie.useCallback((T) => T ? s.includes(T) : !1, [s]), C = async () => {
    const T = await wf.Popup.show.input(
      `Create a new ${a}`,
      `Please enter a name for the new ${a}:`,
      ""
    );
    if (!T || T.trim() === "") return;
    const P = T.trim();
    if (r.some((y) => y.value === P)) {
      await ge("warning", `A ${a} with this name already exists.`);
      return;
    }
    let l = { value: P, label: P };
    if (_) {
      const y = await Promise.resolve(_(P));
      if (!y.confirmed) return;
      y.value && (typeof y.value == "string" ? l = { value: y.value, label: y.value } : l = y.value);
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
    const T = await wf.Popup.show.input(
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
    const y = r.map((w) => w.value === S.value ? l : w);
    c(y), u(l.value, t);
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
    if (!await wf.Popup.show.confirm(
      `Delete ${a}`,
      `Are you sure you want to delete "${S.label}"?`
    ) || E && !await Promise.resolve(E(S.value)))
      return;
    const P = r.findIndex((w) => w.value === S.value), l = r.filter((w) => w.value !== S.value);
    c(l);
    let y;
    if (l.length > 0) {
      const w = Math.min(P, l.length - 1);
      y = (T = l[w]) == null ? void 0 : T.value;
    }
    u(y, t);
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ A.jsx(xl, { value: t ?? "", onChange: (T) => u(T.target.value, t), children: r.map((T) => /* @__PURE__ */ A.jsx("option", { value: T.value, children: T.label }, T.value)) }),
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
}, e_ = () => {
  const [, t] = ie.useState(0);
  return ie.useCallback(() => {
    t((s) => s + 1);
  }, []);
}, Ef = SillyTavern.getContext(), nw = () => {
  const t = e_(), r = It.getSettings(), [s, a] = ie.useState(rl[0]), u = ie.useCallback(
    (l) => {
      const y = It.getSettings();
      l(y), It.saveSettings(), t();
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
  }, _ = (l) => {
    u((y) => {
      const w = {}, k = y.mainContextTemplatePresets;
      l.forEach((j) => {
        w[j.value] = k[j.value] ?? structuredClone(k[y.mainContextTemplatePreset] ?? k.default);
      }), y.mainContextTemplatePresets = w;
    });
  }, g = (l) => {
    u((y) => {
      const w = l.map((j) => ({
        promptName: j.id,
        enabled: j.enabled,
        role: j.selectValue ?? "user"
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
    await Ef.Popup.show.confirm("Restore default", "Are you sure?") && u((y) => {
      y.mainContextTemplatePresets = {
        ...y.mainContextTemplatePresets,
        default: structuredClone(lh.mainContextTemplatePresets.default)
      }, y.mainContextTemplatePreset = "default";
    });
  }, v = (l) => {
    u((y) => {
      const w = {}, k = y.prompts, j = Object.keys(k), L = l.map((D) => D.value);
      L.forEach((D) => {
        w[D] = k[D] ?? { content: "", isDefault: !1, label: D };
      }), y.prompts = w;
      const R = j.filter((D) => !L.includes(D));
      if (R.length > 0) {
        const D = Object.fromEntries(
          Object.entries(y.mainContextTemplatePresets).map(([q, G]) => [
            q,
            {
              ...G,
              prompts: G.prompts.filter((V) => !R.includes(V.promptName))
            }
          ])
        );
        y.mainContextTemplatePresets = D;
      }
    });
  }, S = (l) => {
    const y = Ry(l);
    return y ? r.prompts[y] ? (ge("error", `Prompt name already exists: ${y}`), { confirmed: !1 }) : (u((w) => {
      w.prompts = {
        ...w.prompts,
        [y]: {
          content: w.prompts[s]?.content ?? "",
          isDefault: !1,
          label: l
        }
      }, w.mainContextTemplatePresets = Object.fromEntries(
        Object.entries(w.mainContextTemplatePresets).map(([k, j]) => [
          k,
          {
            ...j,
            prompts: [...j.prompts, { enabled: !0, promptName: y, role: "user" }]
          }
        ])
      );
    }), a(y), { confirmed: !0, value: y }) : (ge("error", `Invalid prompt name: ${l}`), { confirmed: !1 });
  }, h = (l, y) => {
    const w = Ry(y);
    return w ? r.prompts[w] ? (ge("error", `Prompt name already exists: ${w}`), { confirmed: !1 }) : (u((k) => {
      const { [l]: j, ...L } = k.prompts;
      k.prompts = {
        ...L,
        [w]: { ...j, label: y }
      }, k.mainContextTemplatePresets = Object.fromEntries(
        Object.entries(k.mainContextTemplatePresets).map(([R, D]) => [
          R,
          {
            ...D,
            prompts: D.prompts.map((q) => q.promptName === l ? { ...q, promptName: w } : q)
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
          isDefault: rl.includes(s) ? st[s] === y : !1
        }
      });
    });
  }, x = async () => {
    const l = r.prompts[s];
    if (!l) return ge("warning", "No prompt selected.");
    await Ef.Popup.show.confirm("Restore Default", `Restore default for "${l.label}"?`) && u((w) => {
      w.prompts = {
        ...w.prompts,
        [s]: {
          ...w.prompts[s],
          content: st[s]
        }
      };
    });
  }, O = async () => {
    await Ef.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (It.resetSettings(), t(), ge("success", "Settings reset. The UI has been updated."));
  }, T = r.prompts[s]?.content ?? "", P = rl.includes(s);
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
        Bf,
        {
          label: "Template",
          items: c,
          value: r.mainContextTemplatePreset,
          readOnlyValues: ["default"],
          onChange: p,
          onItemsChange: _,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ A.jsx("div", { style: { marginTop: "5px" }, children: /* @__PURE__ */ A.jsx(
        J0,
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
        Bf,
        {
          label: "Prompt",
          items: f,
          value: s,
          readOnlyValues: rl,
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
    /* @__PURE__ */ A.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ A.jsxs(Ee, { className: "danger_button", style: { width: "auto" }, onClick: O, children: [
      /* @__PURE__ */ A.jsx("i", { style: { marginRight: "10px" }, className: "fa-solid fa-triangle-exclamation" }),
      "I messed up, reset everything"
    ] }) })
  ] });
};
var yl = { exports: {} }, rw = yl.exports, Dy;
function aw() {
  return Dy || (Dy = 1, (function(t) {
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
          var w = _(y, l);
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
      function _(l, y) {
        var w = y ? "Error in " + y + " extension->" : "Error in unnamed extension", k = {
          valid: !0,
          error: ""
        };
        a.helper.isArray(l) || (l = [l]);
        for (var j = 0; j < l.length; ++j) {
          var L = w + " sub-extension " + j + ": ", R = l[j];
          if (typeof R != "object")
            return k.valid = !1, k.error = L + "must be an object, but " + typeof R + " given", k;
          if (!a.helper.isString(R.type))
            return k.valid = !1, k.error = L + 'property "type" must be a string, but ' + typeof R.type + " given", k;
          var D = R.type = R.type.toLowerCase();
          if (D === "language" && (D = R.type = "lang"), D === "html" && (D = R.type = "output"), D !== "lang" && D !== "output" && D !== "listener")
            return k.valid = !1, k.error = L + "type " + D + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"', k;
          if (D === "listener") {
            if (a.helper.isUndefined(R.listeners))
              return k.valid = !1, k.error = L + '. Extensions of type "listener" must have a property called "listeners"', k;
          } else if (a.helper.isUndefined(R.filter) && a.helper.isUndefined(R.regex))
            return k.valid = !1, k.error = L + D + ' extensions must define either a "regex" property or a "filter" method', k;
          if (R.listeners) {
            if (typeof R.listeners != "object")
              return k.valid = !1, k.error = L + '"listeners" property must be an object but ' + typeof R.listeners + " given", k;
            for (var q in R.listeners)
              if (R.listeners.hasOwnProperty(q) && typeof R.listeners[q] != "function")
                return k.valid = !1, k.error = L + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + q + " must be a function but " + typeof R.listeners[q] + " given", k;
          }
          if (R.filter) {
            if (typeof R.filter != "function")
              return k.valid = !1, k.error = L + '"filter" must be a function, but ' + typeof R.filter + " given", k;
          } else if (R.regex) {
            if (a.helper.isString(R.regex) && (R.regex = new RegExp(R.regex, "g")), !(R.regex instanceof RegExp))
              return k.valid = !1, k.error = L + '"regex" property must either be a string or a RegExp object, but ' + typeof R.regex + " given", k;
            if (a.helper.isUndefined(R.replace))
              return k.valid = !1, k.error = L + '"regex" extensions must implement a replace string or function', k;
          }
        }
        return k;
      }
      a.validateExtension = function(l) {
        var y = _(l, null);
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
        var j = new RegExp(k, "g");
        return l = l.replace(j, g), l;
      }, a.helper.unescapeHTMLEntities = function(l) {
        return l.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
      };
      var E = function(l, y, w, k) {
        var j = k || "", L = j.indexOf("g") > -1, R = new RegExp(y + "|" + w, "g" + j.replace(/g/g, "")), D = new RegExp(y, j.replace(/g/g, "")), q = [], G, V, K, M, B;
        do
          for (G = 0; K = R.exec(l); )
            if (D.test(K[0]))
              G++ || (V = R.lastIndex, M = V - K[0].length);
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
        while (G && (R.lastIndex = V));
        return q;
      };
      a.helper.matchRecursiveRegExp = function(l, y, w, k) {
        for (var j = E(l, y, w, k), L = [], R = 0; R < j.length; ++R)
          L.push([
            l.slice(j[R].wholeMatch.start, j[R].wholeMatch.end),
            l.slice(j[R].match.start, j[R].match.end),
            l.slice(j[R].left.start, j[R].left.end),
            l.slice(j[R].right.start, j[R].right.end)
          ]);
        return L;
      }, a.helper.replaceRecursiveRegExp = function(l, y, w, k, j) {
        if (!a.helper.isFunction(y)) {
          var L = y;
          y = function() {
            return L;
          };
        }
        var R = E(l, w, k, j), D = l, q = R.length;
        if (q > 0) {
          var G = [];
          R[0].wholeMatch.start !== 0 && G.push(l.slice(0, R[0].wholeMatch.start));
          for (var V = 0; V < q; ++V)
            G.push(
              y(
                l.slice(R[V].wholeMatch.start, R[V].wholeMatch.end),
                l.slice(R[V].match.start, R[V].match.end),
                l.slice(R[V].left.start, R[V].left.end),
                l.slice(R[V].right.start, R[V].right.end)
              )
            ), V < q - 1 && G.push(l.slice(R[V].wholeMatch.end, R[V + 1].wholeMatch.start));
          R[q - 1].wholeMatch.end < l.length && G.push(l.slice(R[q - 1].wholeMatch.end)), D = G.join("");
        }
        return D;
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
        var y = {}, w = [], k = [], j = {}, L = m, R = {
          parsed: {},
          raw: "",
          format: ""
        };
        D();
        function D() {
          l = l || {};
          for (var M in f)
            f.hasOwnProperty(M) && (y[M] = f[M]);
          if (typeof l == "object")
            for (var B in l)
              l.hasOwnProperty(B) && (y[B] = l[B]);
          else
            throw Error("Converter expects the passed parameter to be an object, but " + typeof l + " was passed instead.");
          y.extensions && a.helper.forEach(y.extensions, q);
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
          var J = _(M, B);
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
          var J = _(M, B);
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
          j.hasOwnProperty(M) || (j[M] = []), j[M].push(B);
        }
        function K(M) {
          var B = M.match(/^\s*/)[0].length, J = new RegExp("^\\s{0," + B + "}", "gm");
          return M.replace(J, "");
        }
        this._dispatch = function(B, J, ae, I) {
          if (j.hasOwnProperty(B))
            for (var X = 0; X < j[B].length; ++X) {
              var ce = j[B][X](B, J, this, ae, I);
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
`), M = M.replace(/\u00A0/g, "&nbsp;"), y.smartIndentationFix && (M = K(M)), M = `

` + M + `

`, M = a.subParser("detab")(M, y, B), M = M.replace(/^[ \t]+$/mg, ""), a.helper.forEach(w, function(J) {
            M = a.subParser("runExtension")(J, M, y, B);
          }), M = a.subParser("metadata")(M, y, B), M = a.subParser("hashPreCodeTags")(M, y, B), M = a.subParser("githubCodeBlocks")(M, y, B), M = a.subParser("hashHTMLBlocks")(M, y, B), M = a.subParser("hashCodeTags")(M, y, B), M = a.subParser("stripLinkDefinitions")(M, y, B), M = a.subParser("blockGamut")(M, y, B), M = a.subParser("unhashHTMLSpans")(M, y, B), M = a.subParser("unescapeSpecialChars")(M, y, B), M = M.replace(/¨D/g, "$$"), M = M.replace(/¨T/g, "¨"), M = a.subParser("completeHTMLDocument")(M, y, B), a.helper.forEach(k, function(J) {
            M = a.subParser("runExtension")(J, M, y, B);
          }), R = B.metadata, M;
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
        }, this.setOption = function(M, B) {
          y[M] = B;
        }, this.getOption = function(M) {
          return y[M];
        }, this.getOptions = function() {
          return y;
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
            B.hasOwnProperty(J) && (y[J] = B[J]);
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
          return M ? R.raw : R.parsed;
        }, this.getMetadataFormat = function() {
          return R.format;
        }, this._setMetadataPair = function(M, B) {
          R.parsed[M] = B;
        }, this._setMetadataFormat = function(M) {
          R.format = M;
        }, this._setMetadataRaw = function(M) {
          R.raw = M;
        };
      }, a.subParser("anchors", function(l, y, w) {
        l = w.converter._dispatch("anchors.before", l, y, w);
        var k = function(j, L, R, D, q, G, V) {
          if (a.helper.isUndefined(V) && (V = ""), R = R.toLowerCase(), j.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
            D = "";
          else if (!D)
            if (R || (R = L.toLowerCase().replace(/ ?\n/g, " ")), D = "#" + R, !a.helper.isUndefined(w.gUrls[R]))
              D = w.gUrls[R], a.helper.isUndefined(w.gTitles[R]) || (V = w.gTitles[R]);
            else
              return j;
          D = D.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback);
          var K = '<a href="' + D + '"';
          return V !== "" && V !== null && (V = V.replace(/"/g, "&quot;"), V = V.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback), K += ' title="' + V + '"'), y.openLinksInNewWindow && !/^#/.test(D) && (K += ' rel="noopener noreferrer" target="¨E95Eblank"'), K += ">" + L + "</a>", K;
        };
        return l = l.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, k), l = l.replace(
          /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
          k
        ), l = l.replace(
          /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
          k
        ), l = l.replace(/\[([^\[\]]+)]()()()()()/g, k), y.ghMentions && (l = l.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function(j, L, R, D, q) {
          if (R === "\\")
            return L + D;
          if (!a.helper.isString(y.ghMentionsLink))
            throw new Error("ghMentionsLink option must be a string");
          var G = y.ghMentionsLink.replace(/\{u}/g, q), V = "";
          return y.openLinksInNewWindow && (V = ' rel="noopener noreferrer" target="¨E95Eblank"'), L + '<a href="' + G + '"' + V + ">" + D + "</a>";
        })), l = w.converter._dispatch("anchors.after", l, y, w), l;
      });
      var v = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi, S = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi, h = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi, C = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi, x = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, O = function(l) {
        return function(y, w, k, j, L, R, D) {
          k = k.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback);
          var q = k, G = "", V = "", K = w || "", M = D || "";
          return /^www\./i.test(k) && (k = k.replace(/^www\./i, "http://www.")), l.excludeTrailingPunctuationFromURLs && R && (G = R), l.openLinksInNewWindow && (V = ' rel="noopener noreferrer" target="¨E95Eblank"'), K + '<a href="' + k + '"' + V + ">" + q + "</a>" + G + M;
        };
      }, T = function(l, y) {
        return function(w, k, j) {
          var L = "mailto:";
          return k = k || "", j = a.subParser("unescapeSpecialChars")(j, l, y), l.encodeEmails ? (L = a.helper.encodeEmailAddress(L + j), j = a.helper.encodeEmailAddress(j)) : L = L + j, k + '<a href="' + L + '">' + j + "</a>";
        };
      };
      a.subParser("autoLinks", function(l, y, w) {
        return l = w.converter._dispatch("autoLinks.before", l, y, w), l = l.replace(h, O(y)), l = l.replace(x, T(y, w)), l = w.converter._dispatch("autoLinks.after", l, y, w), l;
      }), a.subParser("simplifiedAutoLinks", function(l, y, w) {
        return y.simplifiedAutoLink && (l = w.converter._dispatch("simplifiedAutoLinks.before", l, y, w), y.excludeTrailingPunctuationFromURLs ? l = l.replace(S, O(y)) : l = l.replace(v, O(y)), l = l.replace(C, T(y, w)), l = w.converter._dispatch("simplifiedAutoLinks.after", l, y, w)), l;
      }), a.subParser("blockGamut", function(l, y, w) {
        return l = w.converter._dispatch("blockGamut.before", l, y, w), l = a.subParser("blockQuotes")(l, y, w), l = a.subParser("headers")(l, y, w), l = a.subParser("horizontalRule")(l, y, w), l = a.subParser("lists")(l, y, w), l = a.subParser("codeBlocks")(l, y, w), l = a.subParser("tables")(l, y, w), l = a.subParser("hashHTMLBlocks")(l, y, w), l = a.subParser("paragraphs")(l, y, w), l = w.converter._dispatch("blockGamut.after", l, y, w), l;
      }), a.subParser("blockQuotes", function(l, y, w) {
        l = w.converter._dispatch("blockQuotes.before", l, y, w), l = l + `

`;
        var k = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
        return y.splitAdjacentBlockquotes && (k = /^ {0,3}>[\s\S]*?(?:\n\n)/gm), l = l.replace(k, function(j) {
          return j = j.replace(/^[ \t]*>[ \t]?/gm, ""), j = j.replace(/¨0/g, ""), j = j.replace(/^[ \t]+$/gm, ""), j = a.subParser("githubCodeBlocks")(j, y, w), j = a.subParser("blockGamut")(j, y, w), j = j.replace(/(^|\n)/g, "$1  "), j = j.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(L, R) {
            var D = R;
            return D = D.replace(/^  /mg, "¨0"), D = D.replace(/¨0/g, ""), D;
          }), a.subParser("hashBlock")(`<blockquote>
` + j + `
</blockquote>`, y, w);
        }), l = w.converter._dispatch("blockQuotes.after", l, y, w), l;
      }), a.subParser("codeBlocks", function(l, y, w) {
        l = w.converter._dispatch("codeBlocks.before", l, y, w), l += "¨0";
        var k = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
        return l = l.replace(k, function(j, L, R) {
          var D = L, q = R, G = `
`;
          return D = a.subParser("outdent")(D, y, w), D = a.subParser("encodeCode")(D, y, w), D = a.subParser("detab")(D, y, w), D = D.replace(/^\n+/g, ""), D = D.replace(/\n+$/g, ""), y.omitExtraWLInCodeBlocks && (G = ""), D = "<pre><code>" + D + G + "</code></pre>", a.subParser("hashBlock")(D, y, w) + q;
        }), l = l.replace(/¨0/, ""), l = w.converter._dispatch("codeBlocks.after", l, y, w), l;
      }), a.subParser("codeSpans", function(l, y, w) {
        return l = w.converter._dispatch("codeSpans.before", l, y, w), typeof l > "u" && (l = ""), l = l.replace(
          /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
          function(k, j, L, R) {
            var D = R;
            return D = D.replace(/^([ \t]*)/g, ""), D = D.replace(/[ \t]*$/g, ""), D = a.subParser("encodeCode")(D, y, w), D = j + "<code>" + D + "</code>", D = a.subParser("hashHTMLSpans")(D, y, w), D;
          }
        ), l = w.converter._dispatch("codeSpans.after", l, y, w), l;
      }), a.subParser("completeHTMLDocument", function(l, y, w) {
        if (!y.completeHTMLDocument)
          return l;
        l = w.converter._dispatch("completeHTMLDocument.before", l, y, w);
        var k = "html", j = `<!DOCTYPE HTML>
`, L = "", R = `<meta charset="utf-8">
`, D = "", q = "";
        typeof w.metadata.parsed.doctype < "u" && (j = "<!DOCTYPE " + w.metadata.parsed.doctype + `>
`, k = w.metadata.parsed.doctype.toString().toLowerCase(), (k === "html" || k === "html5") && (R = '<meta charset="utf-8">'));
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
                k === "html" || k === "html5" ? R = '<meta charset="' + w.metadata.parsed.charset + `">
` : R = '<meta name="charset" content="' + w.metadata.parsed.charset + `">
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
        return l = j + "<html" + D + `>
<head>
` + L + R + q + `</head>
<body>
` + l.trim() + `
</body>
</html>`, l = w.converter._dispatch("completeHTMLDocument.after", l, y, w), l;
      }), a.subParser("detab", function(l, y, w) {
        return l = w.converter._dispatch("detab.before", l, y, w), l = l.replace(/\t(?=\t)/g, "    "), l = l.replace(/\t/g, "¨A¨B"), l = l.replace(/¨B(.+?)¨A/g, function(k, j) {
          for (var L = j, R = 4 - L.length % 4, D = 0; D < R; D++)
            L += " ";
          return L;
        }), l = l.replace(/¨A/g, "    "), l = l.replace(/¨B/g, ""), l = w.converter._dispatch("detab.after", l, y, w), l;
      }), a.subParser("ellipsis", function(l, y, w) {
        return y.ellipsis && (l = w.converter._dispatch("ellipsis.before", l, y, w), l = l.replace(/\.\.\./g, "…"), l = w.converter._dispatch("ellipsis.after", l, y, w)), l;
      }), a.subParser("emoji", function(l, y, w) {
        if (!y.emoji)
          return l;
        l = w.converter._dispatch("emoji.before", l, y, w);
        var k = /:([\S]+?):/g;
        return l = l.replace(k, function(j, L) {
          return a.helper.emojis.hasOwnProperty(L) ? a.helper.emojis[L] : j;
        }), l = w.converter._dispatch("emoji.after", l, y, w), l;
      }), a.subParser("encodeAmpsAndAngles", function(l, y, w) {
        return l = w.converter._dispatch("encodeAmpsAndAngles.before", l, y, w), l = l.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"), l = l.replace(/<(?![a-z\/?$!])/gi, "&lt;"), l = l.replace(/</g, "&lt;"), l = l.replace(/>/g, "&gt;"), l = w.converter._dispatch("encodeAmpsAndAngles.after", l, y, w), l;
      }), a.subParser("encodeBackslashEscapes", function(l, y, w) {
        return l = w.converter._dispatch("encodeBackslashEscapes.before", l, y, w), l = l.replace(/\\(\\)/g, a.helper.escapeCharactersCallback), l = l.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g, a.helper.escapeCharactersCallback), l = w.converter._dispatch("encodeBackslashEscapes.after", l, y, w), l;
      }), a.subParser("encodeCode", function(l, y, w) {
        return l = w.converter._dispatch("encodeCode.before", l, y, w), l = l.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, a.helper.escapeCharactersCallback), l = w.converter._dispatch("encodeCode.after", l, y, w), l;
      }), a.subParser("escapeSpecialCharsWithinTagAttributes", function(l, y, w) {
        l = w.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", l, y, w);
        var k = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, j = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
        return l = l.replace(k, function(L) {
          return L.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, a.helper.escapeCharactersCallback);
        }), l = l.replace(j, function(L) {
          return L.replace(/([\\`*_~=|])/g, a.helper.escapeCharactersCallback);
        }), l = w.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", l, y, w), l;
      }), a.subParser("githubCodeBlocks", function(l, y, w) {
        return y.ghCodeBlocks ? (l = w.converter._dispatch("githubCodeBlocks.before", l, y, w), l += "¨0", l = l.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(k, j, L, R) {
          var D = y.omitExtraWLInCodeBlocks ? "" : `
`;
          return R = a.subParser("encodeCode")(R, y, w), R = a.subParser("detab")(R, y, w), R = R.replace(/^\n+/g, ""), R = R.replace(/\n+$/g, ""), R = "<pre><code" + (L ? ' class="' + L + " language-" + L + '"' : "") + ">" + R + D + "</code></pre>", R = a.subParser("hashBlock")(R, y, w), `

¨G` + (w.ghCodeBlocks.push({ text: k, codeblock: R }) - 1) + `G

`;
        }), l = l.replace(/¨0/, ""), w.converter._dispatch("githubCodeBlocks.after", l, y, w)) : l;
      }), a.subParser("hashBlock", function(l, y, w) {
        return l = w.converter._dispatch("hashBlock.before", l, y, w), l = l.replace(/(^\n+|\n+$)/g, ""), l = `

¨K` + (w.gHtmlBlocks.push(l) - 1) + `K

`, l = w.converter._dispatch("hashBlock.after", l, y, w), l;
      }), a.subParser("hashCodeTags", function(l, y, w) {
        l = w.converter._dispatch("hashCodeTags.before", l, y, w);
        var k = function(j, L, R, D) {
          var q = R + a.subParser("encodeCode")(L, y, w) + D;
          return "¨C" + (w.gHtmlSpans.push(q) - 1) + "C";
        };
        return l = a.helper.replaceRecursiveRegExp(l, k, "<code\\b[^>]*>", "</code>", "gim"), l = w.converter._dispatch("hashCodeTags.after", l, y, w), l;
      }), a.subParser("hashElement", function(l, y, w) {
        return function(k, j) {
          var L = j;
          return L = L.replace(/\n\n/g, `
`), L = L.replace(/^\n/, ""), L = L.replace(/\n+$/g, ""), L = `

¨K` + (w.gHtmlBlocks.push(L) - 1) + `K

`, L;
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
        ], j = function(M, B, J, ae) {
          var I = M;
          return J.search(/\bmarkdown\b/) !== -1 && (I = J + w.converter.makeHtml(B) + ae), `

¨K` + (w.gHtmlBlocks.push(I) - 1) + `K

`;
        };
        y.backslashEscapesHTMLTags && (l = l.replace(/\\<(\/?[^>]+?)>/g, function(M, B) {
          return "&lt;" + B + "&gt;";
        }));
        for (var L = 0; L < k.length; ++L)
          for (var R, D = new RegExp("^ {0,3}(<" + k[L] + "\\b[^>]*>)", "im"), q = "<" + k[L] + "\\b[^>]*>", G = "</" + k[L] + ">"; (R = a.helper.regexIndexOf(l, D)) !== -1; ) {
            var V = a.helper.splitAtIndex(l, R), K = a.helper.replaceRecursiveRegExp(V[1], j, q, G, "im");
            if (K === V[1])
              break;
            l = V[0].concat(K);
          }
        return l = l.replace(
          /(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
          a.subParser("hashElement")(l, y, w)
        ), l = a.helper.replaceRecursiveRegExp(l, function(M) {
          return `

¨K` + (w.gHtmlBlocks.push(M) - 1) + `K

`;
        }, "^ {0,3}<!--", "-->", "gm"), l = l.replace(
          /(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
          a.subParser("hashElement")(l, y, w)
        ), l = w.converter._dispatch("hashHTMLBlocks.after", l, y, w), l;
      }), a.subParser("hashHTMLSpans", function(l, y, w) {
        l = w.converter._dispatch("hashHTMLSpans.before", l, y, w);
        function k(j) {
          return "¨C" + (w.gHtmlSpans.push(j) - 1) + "C";
        }
        return l = l.replace(/<[^>]+?\/>/gi, function(j) {
          return k(j);
        }), l = l.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function(j) {
          return k(j);
        }), l = l.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function(j) {
          return k(j);
        }), l = l.replace(/<[^>]+?>/gi, function(j) {
          return k(j);
        }), l = w.converter._dispatch("hashHTMLSpans.after", l, y, w), l;
      }), a.subParser("unhashHTMLSpans", function(l, y, w) {
        l = w.converter._dispatch("unhashHTMLSpans.before", l, y, w);
        for (var k = 0; k < w.gHtmlSpans.length; ++k) {
          for (var j = w.gHtmlSpans[k], L = 0; /¨C(\d+)C/.test(j); ) {
            var R = RegExp.$1;
            if (j = j.replace("¨C" + R + "C", w.gHtmlSpans[R]), L === 10) {
              console.error("maximum nesting of 10 spans reached!!!");
              break;
            }
            ++L;
          }
          l = l.replace("¨C" + k + "C", j);
        }
        return l = w.converter._dispatch("unhashHTMLSpans.after", l, y, w), l;
      }), a.subParser("hashPreCodeTags", function(l, y, w) {
        l = w.converter._dispatch("hashPreCodeTags.before", l, y, w);
        var k = function(j, L, R, D) {
          var q = R + a.subParser("encodeCode")(L, y, w) + D;
          return `

¨G` + (w.ghCodeBlocks.push({ text: j, codeblock: q }) - 1) + `G

`;
        };
        return l = a.helper.replaceRecursiveRegExp(l, k, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim"), l = w.converter._dispatch("hashPreCodeTags.after", l, y, w), l;
      }), a.subParser("headers", function(l, y, w) {
        l = w.converter._dispatch("headers.before", l, y, w);
        var k = isNaN(parseInt(y.headerLevelStart)) ? 1 : parseInt(y.headerLevelStart), j = y.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, L = y.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
        l = l.replace(j, function(q, G) {
          var V = a.subParser("spanGamut")(G, y, w), K = y.noHeaderId ? "" : ' id="' + D(G) + '"', M = k, B = "<h" + M + K + ">" + V + "</h" + M + ">";
          return a.subParser("hashBlock")(B, y, w);
        }), l = l.replace(L, function(q, G) {
          var V = a.subParser("spanGamut")(G, y, w), K = y.noHeaderId ? "" : ' id="' + D(G) + '"', M = k + 1, B = "<h" + M + K + ">" + V + "</h" + M + ">";
          return a.subParser("hashBlock")(B, y, w);
        });
        var R = y.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
        l = l.replace(R, function(q, G, V) {
          var K = V;
          y.customizedHeaderId && (K = V.replace(/\s?\{([^{]+?)}\s*$/, ""));
          var M = a.subParser("spanGamut")(K, y, w), B = y.noHeaderId ? "" : ' id="' + D(V) + '"', J = k - 1 + G.length, ae = "<h" + J + B + ">" + M + "</h" + J + ">";
          return a.subParser("hashBlock")(ae, y, w);
        });
        function D(q) {
          var G, V;
          if (y.customizedHeaderId) {
            var K = q.match(/\{([^{]+?)}\s*$/);
            K && K[1] && (q = K[1]);
          }
          return G = q, a.helper.isString(y.prefixHeaderId) ? V = y.prefixHeaderId : y.prefixHeaderId === !0 ? V = "section-" : V = "", y.rawPrefixHeaderId || (G = V + G), y.ghCompatibleHeaderId ? G = G.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase() : y.rawHeaderId ? G = G.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "¨").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase() : G = G.replace(/[^\w]/g, "").toLowerCase(), y.rawPrefixHeaderId && (G = V + G), w.hashLinkCounts[G] ? G = G + "-" + w.hashLinkCounts[G]++ : w.hashLinkCounts[G] = 1, G;
        }
        return l = w.converter._dispatch("headers.after", l, y, w), l;
      }), a.subParser("horizontalRule", function(l, y, w) {
        l = w.converter._dispatch("horizontalRule.before", l, y, w);
        var k = a.subParser("hashBlock")("<hr />", y, w);
        return l = l.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, k), l = l.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, k), l = l.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, k), l = w.converter._dispatch("horizontalRule.after", l, y, w), l;
      }), a.subParser("images", function(l, y, w) {
        l = w.converter._dispatch("images.before", l, y, w);
        var k = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, j = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, L = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, R = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, D = /!\[([^\[\]]+)]()()()()()/g;
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
        return l = l.replace(R, G), l = l.replace(L, q), l = l.replace(j, G), l = l.replace(k, G), l = l.replace(D, G), l = w.converter._dispatch("images.after", l, y, w), l;
      }), a.subParser("italicsAndBold", function(l, y, w) {
        l = w.converter._dispatch("italicsAndBold.before", l, y, w);
        function k(j, L, R) {
          return L + j + R;
        }
        return y.literalMidWordUnderscores ? (l = l.replace(/\b___(\S[\s\S]*?)___\b/g, function(j, L) {
          return k(L, "<strong><em>", "</em></strong>");
        }), l = l.replace(/\b__(\S[\s\S]*?)__\b/g, function(j, L) {
          return k(L, "<strong>", "</strong>");
        }), l = l.replace(/\b_(\S[\s\S]*?)_\b/g, function(j, L) {
          return k(L, "<em>", "</em>");
        })) : (l = l.replace(/___(\S[\s\S]*?)___/g, function(j, L) {
          return /\S$/.test(L) ? k(L, "<strong><em>", "</em></strong>") : j;
        }), l = l.replace(/__(\S[\s\S]*?)__/g, function(j, L) {
          return /\S$/.test(L) ? k(L, "<strong>", "</strong>") : j;
        }), l = l.replace(/_([^\s_][\s\S]*?)_/g, function(j, L) {
          return /\S$/.test(L) ? k(L, "<em>", "</em>") : j;
        })), y.literalMidWordAsterisks ? (l = l.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(j, L, R) {
          return k(R, L + "<strong><em>", "</em></strong>");
        }), l = l.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function(j, L, R) {
          return k(R, L + "<strong>", "</strong>");
        }), l = l.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function(j, L, R) {
          return k(R, L + "<em>", "</em>");
        })) : (l = l.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(j, L) {
          return /\S$/.test(L) ? k(L, "<strong><em>", "</em></strong>") : j;
        }), l = l.replace(/\*\*(\S[\s\S]*?)\*\*/g, function(j, L) {
          return /\S$/.test(L) ? k(L, "<strong>", "</strong>") : j;
        }), l = l.replace(/\*([^\s*][\s\S]*?)\*/g, function(j, L) {
          return /\S$/.test(L) ? k(L, "<em>", "</em>") : j;
        })), l = w.converter._dispatch("italicsAndBold.after", l, y, w), l;
      }), a.subParser("lists", function(l, y, w) {
        function k(R, D) {
          w.gListLevel++, R = R.replace(/\n{2,}$/, `
`), R += "¨0";
          var q = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm, G = /\n[ \t]*\n(?!¨0)/.test(R);
          return y.disableForced4SpacesIndentedSublists && (q = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm), R = R.replace(q, function(V, K, M, B, J, ae, I) {
            I = I && I.trim() !== "";
            var X = a.subParser("outdent")(J, y, w), ce = "";
            return ae && y.tasklists && (ce = ' class="task-list-item" style="list-style-type: none;"', X = X.replace(/^[ \t]*\[(x|X| )?]/m, function() {
              var Y = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
              return I && (Y += " checked"), Y += ">", Y;
            })), X = X.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(Y) {
              return "¨A" + Y;
            }), K || X.search(/\n{2,}/) > -1 ? (X = a.subParser("githubCodeBlocks")(X, y, w), X = a.subParser("blockGamut")(X, y, w)) : (X = a.subParser("lists")(X, y, w), X = X.replace(/\n$/, ""), X = a.subParser("hashHTMLBlocks")(X, y, w), X = X.replace(/\n\n+/g, `

`), G ? X = a.subParser("paragraphs")(X, y, w) : X = a.subParser("spanGamut")(X, y, w)), X = X.replace("¨A", ""), X = "<li" + ce + ">" + X + `</li>
`, X;
          }), R = R.replace(/¨0/g, ""), w.gListLevel--, D && (R = R.replace(/\s+$/, "")), R;
        }
        function j(R, D) {
          if (D === "ol") {
            var q = R.match(/^ *(\d+)\./);
            if (q && q[1] !== "1")
              return ' start="' + q[1] + '"';
          }
          return "";
        }
        function L(R, D, q) {
          var G = y.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm, V = y.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm, K = D === "ul" ? G : V, M = "";
          if (R.search(K) !== -1)
            (function J(ae) {
              var I = ae.search(K), X = j(R, D);
              I !== -1 ? (M += `

<` + D + X + `>
` + k(ae.slice(0, I), !!q) + "</" + D + `>
`, D = D === "ul" ? "ol" : "ul", K = D === "ul" ? G : V, J(ae.slice(I))) : M += `

<` + D + X + `>
` + k(ae, !!q) + "</" + D + `>
`;
            })(R);
          else {
            var B = j(R, D);
            M = `

<` + D + B + `>
` + k(R, !!q) + "</" + D + `>
`;
          }
          return M;
        }
        return l = w.converter._dispatch("lists.before", l, y, w), l += "¨0", w.gListLevel ? l = l.replace(
          /^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
          function(R, D, q) {
            var G = q.search(/[*+-]/g) > -1 ? "ul" : "ol";
            return L(D, G, !0);
          }
        ) : l = l.replace(
          /(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
          function(R, D, q, G) {
            var V = G.search(/[*+-]/g) > -1 ? "ul" : "ol";
            return L(q, V, !1);
          }
        ), l = l.replace(/¨0/, ""), l = w.converter._dispatch("lists.after", l, y, w), l;
      }), a.subParser("metadata", function(l, y, w) {
        if (!y.metadata)
          return l;
        l = w.converter._dispatch("metadata.before", l, y, w);
        function k(j) {
          w.metadata.raw = j, j = j.replace(/&/g, "&amp;").replace(/"/g, "&quot;"), j = j.replace(/\n {4}/g, " "), j.replace(/^([\S ]+): +([\s\S]+?)$/gm, function(L, R, D) {
            return w.metadata.parsed[R] = D, "";
          });
        }
        return l = l.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(j, L, R) {
          return k(R), "¨M";
        }), l = l.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(j, L, R) {
          return L && (w.metadata.format = L), k(R), "¨M";
        }), l = l.replace(/¨M/g, ""), l = w.converter._dispatch("metadata.after", l, y, w), l;
      }), a.subParser("outdent", function(l, y, w) {
        return l = w.converter._dispatch("outdent.before", l, y, w), l = l.replace(/^(\t|[ ]{1,4})/gm, "¨0"), l = l.replace(/¨0/g, ""), l = w.converter._dispatch("outdent.after", l, y, w), l;
      }), a.subParser("paragraphs", function(l, y, w) {
        l = w.converter._dispatch("paragraphs.before", l, y, w), l = l.replace(/^\n+/g, ""), l = l.replace(/\n+$/g, "");
        for (var k = l.split(/\n{2,}/g), j = [], L = k.length, R = 0; R < L; R++) {
          var D = k[R];
          D.search(/¨(K|G)(\d+)\1/g) >= 0 ? j.push(D) : D.search(/\S/) >= 0 && (D = a.subParser("spanGamut")(D, y, w), D = D.replace(/^([ \t]*)/g, "<p>"), D += "</p>", j.push(D));
        }
        for (L = j.length, R = 0; R < L; R++) {
          for (var q = "", G = j[R], V = !1; /¨(K|G)(\d+)\1/.test(G); ) {
            var K = RegExp.$1, M = RegExp.$2;
            K === "K" ? q = w.gHtmlBlocks[M] : V ? q = a.subParser("encodeCode")(w.ghCodeBlocks[M].text, y, w) : q = w.ghCodeBlocks[M].codeblock, q = q.replace(/\$/g, "$$$$"), G = G.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, q), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(G) && (V = !0);
          }
          j[R] = G;
        }
        return l = j.join(`
`), l = l.replace(/^\n+/g, ""), l = l.replace(/\n+$/g, ""), w.converter._dispatch("paragraphs.after", l, y, w);
      }), a.subParser("runExtension", function(l, y, w, k) {
        if (l.filter)
          y = l.filter(y, k.converter, w);
        else if (l.regex) {
          var j = l.regex;
          j instanceof RegExp || (j = new RegExp(j, "g")), y = y.replace(j, l.replace);
        }
        return y;
      }), a.subParser("spanGamut", function(l, y, w) {
        return l = w.converter._dispatch("spanGamut.before", l, y, w), l = a.subParser("codeSpans")(l, y, w), l = a.subParser("escapeSpecialCharsWithinTagAttributes")(l, y, w), l = a.subParser("encodeBackslashEscapes")(l, y, w), l = a.subParser("images")(l, y, w), l = a.subParser("anchors")(l, y, w), l = a.subParser("autoLinks")(l, y, w), l = a.subParser("simplifiedAutoLinks")(l, y, w), l = a.subParser("emoji")(l, y, w), l = a.subParser("underline")(l, y, w), l = a.subParser("italicsAndBold")(l, y, w), l = a.subParser("strikethrough")(l, y, w), l = a.subParser("ellipsis")(l, y, w), l = a.subParser("hashHTMLSpans")(l, y, w), l = a.subParser("encodeAmpsAndAngles")(l, y, w), y.simpleLineBreaks ? /\n\n¨K/.test(l) || (l = l.replace(/\n+/g, `<br />
`)) : l = l.replace(/  +\n/g, `<br />
`), l = w.converter._dispatch("spanGamut.after", l, y, w), l;
      }), a.subParser("strikethrough", function(l, y, w) {
        function k(j) {
          return y.simplifiedAutoLink && (j = a.subParser("simplifiedAutoLinks")(j, y, w)), "<del>" + j + "</del>";
        }
        return y.strikethrough && (l = w.converter._dispatch("strikethrough.before", l, y, w), l = l.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(j, L) {
          return k(L);
        }), l = w.converter._dispatch("strikethrough.after", l, y, w)), l;
      }), a.subParser("stripLinkDefinitions", function(l, y, w) {
        var k = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, j = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
        l += "¨0";
        var L = function(R, D, q, G, V, K, M) {
          return D = D.toLowerCase(), l.toLowerCase().split(D).length - 1 < 2 ? R : (q.match(/^data:.+?\/.+?;base64,/) ? w.gUrls[D] = q.replace(/\s/g, "") : w.gUrls[D] = a.subParser("encodeAmpsAndAngles")(q, y, w), K ? K + M : (M && (w.gTitles[D] = M.replace(/"|'/g, "&quot;")), y.parseImgDimensions && G && V && (w.gDimensions[D] = {
            width: G,
            height: V
          }), ""));
        };
        return l = l.replace(j, L), l = l.replace(k, L), l = l.replace(/¨0/, ""), l;
      }), a.subParser("tables", function(l, y, w) {
        if (!y.tables)
          return l;
        var k = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, j = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
        function L(V) {
          return /^:[ \t]*--*$/.test(V) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(V) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(V) ? ' style="text-align:center;"' : "";
        }
        function R(V, K) {
          var M = "";
          return V = V.trim(), (y.tablesHeaderId || y.tableHeaderId) && (M = ' id="' + V.replace(/ /g, "_").toLowerCase() + '"'), V = a.subParser("spanGamut")(V, y, w), "<th" + M + K + ">" + V + `</th>
`;
        }
        function D(V, K) {
          var M = a.subParser("spanGamut")(V, y, w);
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
            /^ {0,3}\|/.test(M[K]) && (M[K] = M[K].replace(/^ {0,3}\|/, "")), /\|[ \t]*$/.test(M[K]) && (M[K] = M[K].replace(/\|[ \t]*$/, "")), M[K] = a.subParser("codeSpans")(M[K], y, w);
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
            a.helper.isUndefined(X[K]) && (X[K] = ""), I.push(R(B[K], X[K]));
          for (K = 0; K < ae.length; ++K) {
            for (var Y = [], U = 0; U < I.length; ++U)
              a.helper.isUndefined(ae[K][U]), Y.push(D(ae[K][U], X[U]));
            ce.push(Y);
          }
          return q(I, ce);
        }
        return l = w.converter._dispatch("tables.before", l, y, w), l = l.replace(/\\(\|)/g, a.helper.escapeCharactersCallback), l = l.replace(k, G), l = l.replace(j, G), l = w.converter._dispatch("tables.after", l, y, w), l;
      }), a.subParser("underline", function(l, y, w) {
        return y.underline && (l = w.converter._dispatch("underline.before", l, y, w), y.literalMidWordUnderscores ? (l = l.replace(/\b___(\S[\s\S]*?)___\b/g, function(k, j) {
          return "<u>" + j + "</u>";
        }), l = l.replace(/\b__(\S[\s\S]*?)__\b/g, function(k, j) {
          return "<u>" + j + "</u>";
        })) : (l = l.replace(/___(\S[\s\S]*?)___/g, function(k, j) {
          return /\S$/.test(j) ? "<u>" + j + "</u>" : k;
        }), l = l.replace(/__(\S[\s\S]*?)__/g, function(k, j) {
          return /\S$/.test(j) ? "<u>" + j + "</u>" : k;
        })), l = l.replace(/(_)/g, a.helper.escapeCharactersCallback), l = w.converter._dispatch("underline.after", l, y, w)), l;
      }), a.subParser("unescapeSpecialChars", function(l, y, w) {
        return l = w.converter._dispatch("unescapeSpecialChars.before", l, y, w), l = l.replace(/¨E(\d+)E/g, function(k, j) {
          var L = parseInt(j);
          return String.fromCharCode(L);
        }), l = w.converter._dispatch("unescapeSpecialChars.after", l, y, w), l;
      }), a.subParser("makeMarkdown.blockquote", function(l, y) {
        var w = "";
        if (l.hasChildNodes())
          for (var k = l.childNodes, j = k.length, L = 0; L < j; ++L) {
            var R = a.subParser("makeMarkdown.node")(k[L], y);
            R !== "" && (w += R);
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
          for (var k = l.childNodes, j = k.length, L = 0; L < j; ++L)
            w += a.subParser("makeMarkdown.node")(k[L], y);
          w += "*";
        }
        return w;
      }), a.subParser("makeMarkdown.header", function(l, y, w) {
        var k = new Array(w + 1).join("#"), j = "";
        if (l.hasChildNodes()) {
          j = k + " ";
          for (var L = l.childNodes, R = L.length, D = 0; D < R; ++D)
            j += a.subParser("makeMarkdown.node")(L[D], y);
        }
        return j;
      }), a.subParser("makeMarkdown.hr", function() {
        return "---";
      }), a.subParser("makeMarkdown.image", function(l) {
        var y = "";
        return l.hasAttribute("src") && (y += "![" + l.getAttribute("alt") + "](", y += "<" + l.getAttribute("src") + ">", l.hasAttribute("width") && l.hasAttribute("height") && (y += " =" + l.getAttribute("width") + "x" + l.getAttribute("height")), l.hasAttribute("title") && (y += ' "' + l.getAttribute("title") + '"'), y += ")"), y;
      }), a.subParser("makeMarkdown.links", function(l, y) {
        var w = "";
        if (l.hasChildNodes() && l.hasAttribute("href")) {
          var k = l.childNodes, j = k.length;
          w = "[";
          for (var L = 0; L < j; ++L)
            w += a.subParser("makeMarkdown.node")(k[L], y);
          w += "](", w += "<" + l.getAttribute("href") + ">", l.hasAttribute("title") && (w += ' "' + l.getAttribute("title") + '"'), w += ")";
        }
        return w;
      }), a.subParser("makeMarkdown.list", function(l, y, w) {
        var k = "";
        if (!l.hasChildNodes())
          return "";
        for (var j = l.childNodes, L = j.length, R = l.getAttribute("start") || 1, D = 0; D < L; ++D)
          if (!(typeof j[D].tagName > "u" || j[D].tagName.toLowerCase() !== "li")) {
            var q = "";
            w === "ol" ? q = R.toString() + ". " : q = "- ", k += q + a.subParser("makeMarkdown.listItem")(j[D], y), ++R;
          }
        return k += `
<!-- -->
`, k.trim();
      }), a.subParser("makeMarkdown.listItem", function(l, y) {
        for (var w = "", k = l.childNodes, j = k.length, L = 0; L < j; ++L)
          w += a.subParser("makeMarkdown.node")(k[L], y);
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
        var j = l.tagName.toLowerCase();
        switch (j) {
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
          for (var k = l.childNodes, j = k.length, L = 0; L < j; ++L)
            w += a.subParser("makeMarkdown.node")(k[L], y);
        return w = w.trim(), w;
      }), a.subParser("makeMarkdown.pre", function(l, y) {
        var w = l.getAttribute("prenum");
        return "<pre>" + y.preList[w] + "</pre>";
      }), a.subParser("makeMarkdown.strikethrough", function(l, y) {
        var w = "";
        if (l.hasChildNodes()) {
          w += "~~";
          for (var k = l.childNodes, j = k.length, L = 0; L < j; ++L)
            w += a.subParser("makeMarkdown.node")(k[L], y);
          w += "~~";
        }
        return w;
      }), a.subParser("makeMarkdown.strong", function(l, y) {
        var w = "";
        if (l.hasChildNodes()) {
          w += "**";
          for (var k = l.childNodes, j = k.length, L = 0; L < j; ++L)
            w += a.subParser("makeMarkdown.node")(k[L], y);
          w += "**";
        }
        return w;
      }), a.subParser("makeMarkdown.table", function(l, y) {
        var w = "", k = [[], []], j = l.querySelectorAll("thead>tr>th"), L = l.querySelectorAll("tbody>tr"), R, D;
        for (R = 0; R < j.length; ++R) {
          var q = a.subParser("makeMarkdown.tableCell")(j[R], y), G = "---";
          if (j[R].hasAttribute("style")) {
            var V = j[R].getAttribute("style").toLowerCase().replace(/\s/g, "");
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
          k[0][R] = q.trim(), k[1][R] = G;
        }
        for (R = 0; R < L.length; ++R) {
          var K = k.push([]) - 1, M = L[R].getElementsByTagName("td");
          for (D = 0; D < j.length; ++D) {
            var B = " ";
            typeof M[D] < "u" && (B = a.subParser("makeMarkdown.tableCell")(M[D], y)), k[K].push(B);
          }
        }
        var J = 3;
        for (R = 0; R < k.length; ++R)
          for (D = 0; D < k[R].length; ++D) {
            var ae = k[R][D].length;
            ae > J && (J = ae);
          }
        for (R = 0; R < k.length; ++R) {
          for (D = 0; D < k[R].length; ++D)
            R === 1 ? k[R][D].slice(-1) === ":" ? k[R][D] = a.helper.padEnd(k[R][D].slice(-1), J - 1, "-") + ":" : k[R][D] = a.helper.padEnd(k[R][D], J, "-") : k[R][D] = a.helper.padEnd(k[R][D], J);
          w += "| " + k[R].join(" | ") + ` |
`;
        }
        return w.trim();
      }), a.subParser("makeMarkdown.tableCell", function(l, y) {
        var w = "";
        if (!l.hasChildNodes())
          return "";
        for (var k = l.childNodes, j = k.length, L = 0; L < j; ++L)
          w += a.subParser("makeMarkdown.node")(k[L], y, !0);
        return w.trim();
      }), a.subParser("makeMarkdown.txt", function(l) {
        var y = l.nodeValue;
        return y = y.replace(/ +/g, " "), y = y.replace(/¨NBSP;/g, " "), y = a.helper.unescapeHTMLEntities(y), y = y.replace(/([*_~|`])/g, "\\$1"), y = y.replace(/^(\s*)>/g, "\\$1>"), y = y.replace(/^#/gm, "\\#"), y = y.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3"), y = y.replace(/^( {0,3}\d+)\./gm, "$1\\."), y = y.replace(/^( {0,3})([+-])/gm, "$1\\$2"), y = y.replace(/]([\s]*)\(/g, "\\]$1\\("), y = y.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:"), y;
      });
      var P = this;
      t.exports ? t.exports = a : P.showdown = a;
    }).call(rw);
  })(yl)), yl.exports;
}
var iw = aw();
const sw = /* @__PURE__ */ Wf(iw);
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
      }, p = s.length, _ = r.length, g = 1, E = p + _;
      a.maxEditLength != null && (E = Math.min(E, a.maxEditLength));
      var v = (f = a.timeout) !== null && f !== void 0 ? f : 1 / 0, S = Date.now() + v, h = [{ oldPos: -1, lastComponent: void 0 }], C = this.extractCommon(h[0], s, r, 0, a);
      if (h[0].oldPos + 1 >= _ && C + 1 >= p)
        return m(this.buildValues(h[0].lastComponent, s, r));
      var x = -1 / 0, O = 1 / 0, T = function() {
        for (var l = Math.max(x, -g); l <= Math.min(O, g); l += 2) {
          var y = void 0, w = h[l - 1], k = h[l + 1];
          w && (h[l - 1] = void 0);
          var j = !1;
          if (k) {
            var L = k.oldPos - l;
            j = k && 0 <= L && L < p;
          }
          var R = w && w.oldPos + 1 < _;
          if (!j && !R) {
            h[l] = void 0;
            continue;
          }
          if (!R || j && w.oldPos < k.oldPos ? y = c.addToPath(k, !0, !1, 0, a) : y = c.addToPath(w, !1, !0, 1, a), C = c.extractCommon(y, s, r, l, a), y.oldPos + 1 >= _ && C + 1 >= p)
            return m(c.buildValues(y.lastComponent, s, r)) || !0;
          h[l] = y, y.oldPos + 1 >= _ && (O = Math.min(O, l - 1)), C + 1 >= p && (x = Math.max(x, l + 1));
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
      for (var f = s.length, m = a.length, p = r.oldPos, _ = p - u, g = 0; _ + 1 < f && p + 1 < m && this.equals(a[p + 1], s[_ + 1], c); )
        _++, p++, g++, c.oneChangePerToken && (r.lastComponent = { count: 1, previousComponent: r.lastComponent, added: !1, removed: !1 });
      return g && !c.oneChangePerToken && (r.lastComponent = { count: g, previousComponent: r.lastComponent, added: !1, removed: !1 }), r.oldPos = p, _;
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
      for (var f = u.length, m = 0, p = 0, _ = 0; m < f; m++) {
        var g = u[m];
        if (g.removed)
          g.value = this.join(a.slice(_, _ + g.count)), _ += g.count;
        else {
          if (!g.added && this.useLongestToken) {
            var E = s.slice(p, p + g.count);
            E = E.map(function(v, S) {
              var h = a[_ + S];
              return h.length > v.length ? h : v;
            }), g.value = this.join(E);
          } else
            g.value = this.join(s.slice(p, p + g.count));
          p += g.count, g.added || (_ += g.count);
        }
      }
      return u;
    }, t;
  })()
), ow = /* @__PURE__ */ (function() {
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
})(), uw = (
  /** @class */
  (function(t) {
    ow(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r;
  })(na)
);
new uw();
function zy(t, r) {
  var s;
  for (s = 0; s < t.length && s < r.length; s++)
    if (t[s] != r[s])
      return t.slice(0, s);
  return t.slice(0, s);
}
function Py(t, r) {
  var s;
  if (!t || !r || t[t.length - 1] != r[r.length - 1])
    return "";
  for (s = 0; s < t.length && s < r.length; s++)
    if (t[t.length - (s + 1)] != r[r.length - (s + 1)])
      return t.slice(-s);
  return t.slice(-s);
}
function Uf(t, r, s) {
  if (t.slice(0, r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't start with prefix ").concat(JSON.stringify(r), "; this is a bug"));
  return s + t.slice(r.length);
}
function Hf(t, r, s) {
  if (!r)
    return t + s;
  if (t.slice(-r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't end with suffix ").concat(JSON.stringify(r), "; this is a bug"));
  return t.slice(0, -r.length) + s;
}
function Ys(t, r) {
  return Uf(t, r, "");
}
function al(t, r) {
  return Hf(t, r, "");
}
function Ly(t, r) {
  return r.slice(0, lw(t, r));
}
function lw(t, r) {
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
function Xs(t) {
  var r;
  for (r = t.length - 1; r >= 0 && t[r].match(/\s/); r--)
    ;
  return t.substring(r + 1);
}
function Qr(t) {
  var r = t.match(/^\s*/);
  return r ? r[0] : "";
}
var t_ = /* @__PURE__ */ (function() {
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
})(), Tl = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", cw = new RegExp("[".concat(Tl, "]+|\\s+|[^").concat(Tl, "]"), "ug"), dw = (
  /** @class */
  (function(t) {
    t_(r, t);
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
        u = s.match(cw) || [];
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
        m.added ? c = m : m.removed ? f = m : ((c || f) && Iy(u, f, c, m), u = m, c = null, f = null);
      }), (c || f) && Iy(u, f, c, null), s;
    }, r;
  })(na)
), fw = new dw();
function n_(t, r, s) {
  return fw.diff(t, r, s);
}
function Iy(t, r, s, a) {
  if (r && s) {
    var u = Qr(r.value), c = Xs(r.value), f = Qr(s.value), m = Xs(s.value);
    if (t) {
      var p = zy(u, f);
      t.value = Hf(t.value, f, p), r.value = Ys(r.value, p), s.value = Ys(s.value, p);
    }
    if (a) {
      var _ = Py(c, m);
      a.value = Uf(a.value, m, _), r.value = al(r.value, _), s.value = al(s.value, _);
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
    var E = Qr(a.value), v = Qr(r.value), S = Xs(r.value), h = zy(E, v);
    r.value = Ys(r.value, h);
    var C = Py(Ys(E, h), S);
    r.value = al(r.value, C), a.value = Uf(a.value, E, C), t.value = Hf(t.value, E, E.slice(0, E.length - C.length));
  } else if (a) {
    var x = Qr(a.value), O = Xs(r.value), T = Ly(O, x);
    r.value = al(r.value, T);
  } else if (t) {
    var P = Xs(t.value), l = Qr(r.value), T = Ly(P, l);
    r.value = Ys(r.value, T);
  }
}
var hw = (
  /** @class */
  (function(t) {
    t_(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      var a = new RegExp("(\\r?\\n)|[".concat(Tl, "]+|[^\\S\\n\\r]+|[^").concat(Tl, "]"), "ug");
      return s.match(a) || [];
    }, r;
  })(na)
);
new hw();
var pw = /* @__PURE__ */ (function() {
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
})(), mw = (
  /** @class */
  (function(t) {
    pw(r, t);
    function r() {
      var s = t !== null && t.apply(this, arguments) || this;
      return s.tokenize = r_, s;
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
new mw();
function r_(t, r) {
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
var gw = /* @__PURE__ */ (function() {
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
})(), vw = (
  /** @class */
  (function(t) {
    gw(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      return s.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(na)
);
new vw();
var yw = /* @__PURE__ */ (function() {
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
    return r.prototype.tokenize = function(s) {
      return s.split(/([{}:;,]|\s+)/);
    }, r;
  })(na)
);
new _w();
var bw = /* @__PURE__ */ (function() {
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
})(), Sw = (
  /** @class */
  (function(t) {
    bw(r, t);
    function r() {
      var s = t !== null && t.apply(this, arguments) || this;
      return s.tokenize = r_, s;
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
      return typeof s == "string" ? s : JSON.stringify(qf(s, null, null, f), null, "  ");
    }, r.prototype.equals = function(s, a, u) {
      return t.prototype.equals.call(this, s.replace(/,([\r\n])/g, "$1"), a.replace(/,([\r\n])/g, "$1"), u);
    }, r;
  })(na)
);
new Sw();
function qf(t, r, s, a, u) {
  r = r || [], s = s || [], a && (t = a(u === void 0 ? "" : u, t));
  var c;
  for (c = 0; c < r.length; c += 1)
    if (r[c] === t)
      return s[c];
  var f;
  if (Object.prototype.toString.call(t) === "[object Array]") {
    for (r.push(t), f = new Array(t.length), s.push(f), c = 0; c < t.length; c += 1)
      f[c] = qf(t[c], r, s, a, String(c));
    return r.pop(), s.pop(), f;
  }
  if (t && t.toJSON && (t = t.toJSON()), typeof t == "object" && t !== null) {
    r.push(t), f = {}, s.push(f);
    var m = [], p;
    for (p in t)
      Object.prototype.hasOwnProperty.call(t, p) && m.push(p);
    for (m.sort(), c = 0; c < m.length; c += 1)
      p = m[c], f[p] = qf(t[p], r, s, a, p);
    r.pop(), s.pop();
  } else
    f = t;
  return f;
}
var ww = /* @__PURE__ */ (function() {
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
})(), Ew = (
  /** @class */
  (function(t) {
    ww(r, t);
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
new Ew();
const Cw = ({ originalEntry: t, newEntry: r }) => {
  const s = ie.useMemo(() => {
    const a = n_(t.content, r.content);
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
}, kw = SillyTavern.getContext(), Aw = ie.forwardRef(({ entry: t, initialRegexIds: r }, s) => {
  const [a, u] = ie.useState([]), [c, f] = ie.useState(t.comment), [m, p] = ie.useState(t.key.join(", ")), [_, g] = ie.useState(t.content), [E, v] = ie.useState([]);
  ie.useEffect(() => {
    const O = kw.extensionSettings.regex ?? [];
    u(O);
    const T = Object.entries(r).map(([P, l]) => {
      const y = O.find((w) => w.id === P);
      return y ? { id: y.id, label: y.scriptName, enabled: !l?.disabled } : null;
    }).filter((P) => P !== null);
    v(T);
  }, [r]), ie.useImperativeHandle(s, () => ({
    getFormData: () => {
      const O = {
        ...t,
        comment: c.trim(),
        key: m.split(",").map((P) => P.trim()).filter(Boolean),
        content: _
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
      const l = a.find((y) => y.id === P.id);
      l && (O = T3(l, O));
    }
    g(O);
  }, [E, a, t.content]), x = (O) => {
    const T = O.map((P) => {
      const l = E.find((w) => w.id === P);
      if (l) return l;
      const y = a.find((w) => w.id === P);
      return y ? { id: y.id, label: y.scriptName, enabled: !0 } : null;
    }).filter((P) => P !== null);
    v(T);
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
        W0,
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
        J0,
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
        value: _,
        onChange: (O) => g(O.target.value),
        rows: 8,
        placeholder: "Resulting content..."
      }
    )
  ] });
});
function de(t, r, s) {
  function a(m, p) {
    var _;
    Object.defineProperty(m, "_zod", {
      value: m._zod ?? {},
      enumerable: !1
    }), (_ = m._zod).traits ?? (_.traits = /* @__PURE__ */ new Set()), m._zod.traits.add(t), r(m, p);
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
    const _ = s?.Parent ? new c() : this;
    a(_, m), (p = _._zod).deferred ?? (p.deferred = []);
    for (const g of _._zod.deferred)
      g();
    return _;
  }
  return Object.defineProperty(f, "init", { value: a }), Object.defineProperty(f, Symbol.hasInstance, {
    value: (m) => s?.Parent && m instanceof s.Parent ? !0 : m?._zod?.traits?.has(t)
  }), Object.defineProperty(f, "name", { value: t }), f;
}
class Ii extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class a_ extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const i_ = {};
function La(t) {
  return i_;
}
function s_(t) {
  const r = Object.values(t).filter((a) => typeof a == "number");
  return Object.entries(t).filter(([a, u]) => r.indexOf(+a) === -1).map(([a, u]) => u);
}
function Zf(t, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function ch(t) {
  return {
    get value() {
      {
        const r = t();
        return Object.defineProperty(this, "value", { value: r }), r;
      }
    }
  };
}
function dh(t) {
  return t == null;
}
function fh(t) {
  const r = t.startsWith("^") ? 1 : 0, s = t.endsWith("$") ? t.length - 1 : t.length;
  return t.slice(r, s);
}
const By = Symbol("evaluating");
function rt(t, r, s) {
  let a;
  Object.defineProperty(t, r, {
    get() {
      if (a !== By)
        return a === void 0 && (a = By, a = s()), a;
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
function Ba(t, r, s) {
  Object.defineProperty(t, r, {
    value: s,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Ua(...t) {
  const r = {};
  for (const s of t) {
    const a = Object.getOwnPropertyDescriptors(s);
    Object.assign(r, a);
  }
  return Object.defineProperties({}, r);
}
function Uy(t) {
  return JSON.stringify(t);
}
const o_ = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
};
function Nl(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
const xw = ch(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const t = Function;
    return new t(""), !0;
  } catch {
    return !1;
  }
});
function so(t) {
  if (Nl(t) === !1)
    return !1;
  const r = t.constructor;
  if (r === void 0)
    return !0;
  const s = r.prototype;
  return !(Nl(s) === !1 || Object.prototype.hasOwnProperty.call(s, "isPrototypeOf") === !1);
}
function u_(t) {
  return so(t) ? { ...t } : Array.isArray(t) ? [...t] : t;
}
const Tw = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Dl(t) {
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
function Nw(t) {
  return Object.keys(t).filter((r) => t[r]._zod.optin === "optional" && t[r]._zod.optout === "optional");
}
function Ow(t, r) {
  const s = t._zod.def, a = Ua(t._zod.def, {
    get shape() {
      const u = {};
      for (const c in r) {
        if (!(c in s.shape))
          throw new Error(`Unrecognized key: "${c}"`);
        r[c] && (u[c] = s.shape[c]);
      }
      return Ba(this, "shape", u), u;
    },
    checks: []
  });
  return ra(t, a);
}
function Mw(t, r) {
  const s = t._zod.def, a = Ua(t._zod.def, {
    get shape() {
      const u = { ...t._zod.def.shape };
      for (const c in r) {
        if (!(c in s.shape))
          throw new Error(`Unrecognized key: "${c}"`);
        r[c] && delete u[c];
      }
      return Ba(this, "shape", u), u;
    },
    checks: []
  });
  return ra(t, a);
}
function jw(t, r) {
  if (!so(r))
    throw new Error("Invalid input to extend: expected a plain object");
  const s = t._zod.def.checks;
  if (s && s.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const u = Ua(t._zod.def, {
    get shape() {
      const c = { ...t._zod.def.shape, ...r };
      return Ba(this, "shape", c), c;
    },
    checks: []
  });
  return ra(t, u);
}
function Rw(t, r) {
  if (!so(r))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const s = {
    ...t._zod.def,
    get shape() {
      const a = { ...t._zod.def.shape, ...r };
      return Ba(this, "shape", a), a;
    },
    checks: t._zod.def.checks
  };
  return ra(t, s);
}
function Dw(t, r) {
  const s = Ua(t._zod.def, {
    get shape() {
      const a = { ...t._zod.def.shape, ...r._zod.def.shape };
      return Ba(this, "shape", a), a;
    },
    get catchall() {
      return r._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return ra(t, s);
}
function zw(t, r, s) {
  const a = Ua(r._zod.def, {
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
      return Ba(this, "shape", c), c;
    },
    checks: []
  });
  return ra(r, a);
}
function Pw(t, r, s) {
  const a = Ua(r._zod.def, {
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
      return Ba(this, "shape", c), c;
    },
    checks: []
  });
  return ra(r, a);
}
function Pi(t, r = 0) {
  if (t.aborted === !0)
    return !0;
  for (let s = r; s < t.issues.length; s++)
    if (t.issues[s]?.continue !== !0)
      return !0;
  return !1;
}
function l_(t, r) {
  return r.map((s) => {
    var a;
    return (a = s).path ?? (a.path = []), s.path.unshift(t), s;
  });
}
function il(t) {
  return typeof t == "string" ? t : t?.message;
}
function Ia(t, r, s) {
  const a = { ...t, path: t.path ?? [] };
  if (!t.message) {
    const u = il(t.inst?._zod.def?.error?.(t)) ?? il(r?.error?.(t)) ?? il(s.customError?.(t)) ?? il(s.localeError?.(t)) ?? "Invalid input";
    a.message = u;
  }
  return delete a.inst, delete a.continue, r?.reportInput || delete a.input, a;
}
function hh(t) {
  return Array.isArray(t) ? "array" : typeof t == "string" ? "string" : "unknown";
}
function oo(...t) {
  const [r, s, a] = t;
  return typeof r == "string" ? {
    message: r,
    code: "custom",
    input: s,
    inst: a
  } : { ...r };
}
const c_ = (t, r) => {
  t.name = "$ZodError", Object.defineProperty(t, "_zod", {
    value: t._zod,
    enumerable: !1
  }), Object.defineProperty(t, "issues", {
    value: r,
    enumerable: !1
  }), t.message = JSON.stringify(r, Zf, 2), Object.defineProperty(t, "toString", {
    value: () => t.message,
    enumerable: !1
  });
}, d_ = de("$ZodError", c_), f_ = de("$ZodError", c_, { Parent: Error });
function Lw(t, r = (s) => s.message) {
  const s = {}, a = [];
  for (const u of t.issues)
    u.path.length > 0 ? (s[u.path[0]] = s[u.path[0]] || [], s[u.path[0]].push(r(u))) : a.push(r(u));
  return { formErrors: a, fieldErrors: s };
}
function Iw(t, r = (s) => s.message) {
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
const ph = (t) => (r, s, a, u) => {
  const c = a ? Object.assign(a, { async: !1 }) : { async: !1 }, f = r._zod.run({ value: s, issues: [] }, c);
  if (f instanceof Promise)
    throw new Ii();
  if (f.issues.length) {
    const m = new (u?.Err ?? t)(f.issues.map((p) => Ia(p, c, La())));
    throw o_(m, u?.callee), m;
  }
  return f.value;
}, mh = (t) => async (r, s, a, u) => {
  const c = a ? Object.assign(a, { async: !0 }) : { async: !0 };
  let f = r._zod.run({ value: s, issues: [] }, c);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const m = new (u?.Err ?? t)(f.issues.map((p) => Ia(p, c, La())));
    throw o_(m, u?.callee), m;
  }
  return f.value;
}, zl = (t) => (r, s, a) => {
  const u = a ? { ...a, async: !1 } : { async: !1 }, c = r._zod.run({ value: s, issues: [] }, u);
  if (c instanceof Promise)
    throw new Ii();
  return c.issues.length ? {
    success: !1,
    error: new (t ?? d_)(c.issues.map((f) => Ia(f, u, La())))
  } : { success: !0, data: c.value };
}, Bw = /* @__PURE__ */ zl(f_), Pl = (t) => async (r, s, a) => {
  const u = a ? Object.assign(a, { async: !0 }) : { async: !0 };
  let c = r._zod.run({ value: s, issues: [] }, u);
  return c instanceof Promise && (c = await c), c.issues.length ? {
    success: !1,
    error: new t(c.issues.map((f) => Ia(f, u, La())))
  } : { success: !0, data: c.value };
}, Uw = /* @__PURE__ */ Pl(f_), Hw = (t) => (r, s, a) => {
  const u = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return ph(t)(r, s, u);
}, qw = (t) => (r, s, a) => ph(t)(r, s, a), Zw = (t) => async (r, s, a) => {
  const u = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return mh(t)(r, s, u);
}, Gw = (t) => async (r, s, a) => mh(t)(r, s, a), Vw = (t) => (r, s, a) => {
  const u = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return zl(t)(r, s, u);
}, $w = (t) => (r, s, a) => zl(t)(r, s, a), Yw = (t) => async (r, s, a) => {
  const u = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return Pl(t)(r, s, u);
}, Xw = (t) => async (r, s, a) => Pl(t)(r, s, a), Fw = /^[cC][^\s-]{8,}$/, Qw = /^[0-9a-z]+$/, Kw = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Jw = /^[0-9a-vA-V]{20}$/, Ww = /^[A-Za-z0-9]{27}$/, eE = /^[a-zA-Z0-9_-]{21}$/, tE = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, nE = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Hy = (t) => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, rE = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, aE = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function iE() {
  return new RegExp(aE, "u");
}
const sE = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, oE = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, uE = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, lE = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, cE = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, h_ = /^[A-Za-z0-9_-]*$/, dE = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, fE = /^\+(?:[0-9]){6,14}[0-9]$/, p_ = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", hE = /* @__PURE__ */ new RegExp(`^${p_}$`);
function m_(t) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof t.precision == "number" ? t.precision === -1 ? `${r}` : t.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${t.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function pE(t) {
  return new RegExp(`^${m_(t)}$`);
}
function mE(t) {
  const r = m_({ precision: t.precision }), s = ["Z"];
  t.local && s.push(""), t.offset && s.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const a = `${r}(?:${s.join("|")})`;
  return new RegExp(`^${p_}T(?:${a})$`);
}
const gE = (t) => {
  const r = t ? `[\\s\\S]{${t?.minimum ?? 0},${t?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, vE = /^[^A-Z]*$/, yE = /^[^a-z]*$/, rr = /* @__PURE__ */ de("$ZodCheck", (t, r) => {
  var s;
  t._zod ?? (t._zod = {}), t._zod.def = r, (s = t._zod).onattach ?? (s.onattach = []);
}), _E = /* @__PURE__ */ de("$ZodCheckMaxLength", (t, r) => {
  var s;
  rr.init(t, r), (s = t._zod.def).when ?? (s.when = (a) => {
    const u = a.value;
    return !dh(u) && u.length !== void 0;
  }), t._zod.onattach.push((a) => {
    const u = a._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < u && (a._zod.bag.maximum = r.maximum);
  }), t._zod.check = (a) => {
    const u = a.value;
    if (u.length <= r.maximum)
      return;
    const f = hh(u);
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
}), bE = /* @__PURE__ */ de("$ZodCheckMinLength", (t, r) => {
  var s;
  rr.init(t, r), (s = t._zod.def).when ?? (s.when = (a) => {
    const u = a.value;
    return !dh(u) && u.length !== void 0;
  }), t._zod.onattach.push((a) => {
    const u = a._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > u && (a._zod.bag.minimum = r.minimum);
  }), t._zod.check = (a) => {
    const u = a.value;
    if (u.length >= r.minimum)
      return;
    const f = hh(u);
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
}), SE = /* @__PURE__ */ de("$ZodCheckLengthEquals", (t, r) => {
  var s;
  rr.init(t, r), (s = t._zod.def).when ?? (s.when = (a) => {
    const u = a.value;
    return !dh(u) && u.length !== void 0;
  }), t._zod.onattach.push((a) => {
    const u = a._zod.bag;
    u.minimum = r.length, u.maximum = r.length, u.length = r.length;
  }), t._zod.check = (a) => {
    const u = a.value, c = u.length;
    if (c === r.length)
      return;
    const f = hh(u), m = c > r.length;
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
}), Ll = /* @__PURE__ */ de("$ZodCheckStringFormat", (t, r) => {
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
}), wE = /* @__PURE__ */ de("$ZodCheckRegex", (t, r) => {
  Ll.init(t, r), t._zod.check = (s) => {
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
}), EE = /* @__PURE__ */ de("$ZodCheckLowerCase", (t, r) => {
  r.pattern ?? (r.pattern = vE), Ll.init(t, r);
}), CE = /* @__PURE__ */ de("$ZodCheckUpperCase", (t, r) => {
  r.pattern ?? (r.pattern = yE), Ll.init(t, r);
}), kE = /* @__PURE__ */ de("$ZodCheckIncludes", (t, r) => {
  rr.init(t, r);
  const s = Dl(r.includes), a = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${s}` : s);
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
}), AE = /* @__PURE__ */ de("$ZodCheckStartsWith", (t, r) => {
  rr.init(t, r);
  const s = new RegExp(`^${Dl(r.prefix)}.*`);
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
}), xE = /* @__PURE__ */ de("$ZodCheckEndsWith", (t, r) => {
  rr.init(t, r);
  const s = new RegExp(`.*${Dl(r.suffix)}$`);
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
}), TE = /* @__PURE__ */ de("$ZodCheckOverwrite", (t, r) => {
  rr.init(t, r), t._zod.check = (s) => {
    s.value = r.tx(s.value);
  };
});
class NE {
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
const OE = {
  major: 4,
  minor: 1,
  patch: 12
}, At = /* @__PURE__ */ de("$ZodType", (t, r) => {
  var s;
  t ?? (t = {}), t._zod.def = r, t._zod.bag = t._zod.bag || {}, t._zod.version = OE;
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
      let _ = Pi(f), g;
      for (const E of m) {
        if (E._zod.def.when) {
          if (!E._zod.def.when(f))
            continue;
        } else if (_)
          continue;
        const v = f.issues.length, S = E._zod.check(f);
        if (S instanceof Promise && p?.async === !1)
          throw new Ii();
        if (g || S instanceof Promise)
          g = (g ?? Promise.resolve()).then(async () => {
            await S, f.issues.length !== v && (_ || (_ = Pi(f, v)));
          });
        else {
          if (f.issues.length === v)
            continue;
          _ || (_ = Pi(f, v));
        }
      }
      return g ? g.then(() => f) : f;
    }, c = (f, m, p) => {
      if (Pi(f))
        return f.aborted = !0, f;
      const _ = u(m, a, p);
      if (_ instanceof Promise) {
        if (p.async === !1)
          throw new Ii();
        return _.then((g) => t._zod.parse(g, p));
      }
      return t._zod.parse(_, p);
    };
    t._zod.run = (f, m) => {
      if (m.skipChecks)
        return t._zod.parse(f, m);
      if (m.direction === "backward") {
        const _ = t._zod.parse({ value: f.value, issues: [] }, { ...m, skipChecks: !0 });
        return _ instanceof Promise ? _.then((g) => c(g, f, m)) : c(_, f, m);
      }
      const p = t._zod.parse(f, m);
      if (p instanceof Promise) {
        if (m.async === !1)
          throw new Ii();
        return p.then((_) => u(_, a, m));
      }
      return u(p, a, m);
    };
  }
  t["~standard"] = {
    validate: (u) => {
      try {
        const c = Bw(t, u);
        return c.success ? { value: c.data } : { issues: c.error?.issues };
      } catch {
        return Uw(t, u).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), gh = /* @__PURE__ */ de("$ZodString", (t, r) => {
  At.init(t, r), t._zod.pattern = [...t?._zod.bag?.patterns ?? []].pop() ?? gE(t._zod.bag), t._zod.parse = (s, a) => {
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
  Ll.init(t, r), gh.init(t, r);
}), ME = /* @__PURE__ */ de("$ZodGUID", (t, r) => {
  r.pattern ?? (r.pattern = nE), ot.init(t, r);
}), jE = /* @__PURE__ */ de("$ZodUUID", (t, r) => {
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
    r.pattern ?? (r.pattern = Hy(a));
  } else
    r.pattern ?? (r.pattern = Hy());
  ot.init(t, r);
}), RE = /* @__PURE__ */ de("$ZodEmail", (t, r) => {
  r.pattern ?? (r.pattern = rE), ot.init(t, r);
}), DE = /* @__PURE__ */ de("$ZodURL", (t, r) => {
  ot.init(t, r), t._zod.check = (s) => {
    try {
      const a = s.value.trim(), u = new URL(a);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(u.hostname) || s.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: dE.source,
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
}), zE = /* @__PURE__ */ de("$ZodEmoji", (t, r) => {
  r.pattern ?? (r.pattern = iE()), ot.init(t, r);
}), PE = /* @__PURE__ */ de("$ZodNanoID", (t, r) => {
  r.pattern ?? (r.pattern = eE), ot.init(t, r);
}), LE = /* @__PURE__ */ de("$ZodCUID", (t, r) => {
  r.pattern ?? (r.pattern = Fw), ot.init(t, r);
}), IE = /* @__PURE__ */ de("$ZodCUID2", (t, r) => {
  r.pattern ?? (r.pattern = Qw), ot.init(t, r);
}), BE = /* @__PURE__ */ de("$ZodULID", (t, r) => {
  r.pattern ?? (r.pattern = Kw), ot.init(t, r);
}), UE = /* @__PURE__ */ de("$ZodXID", (t, r) => {
  r.pattern ?? (r.pattern = Jw), ot.init(t, r);
}), HE = /* @__PURE__ */ de("$ZodKSUID", (t, r) => {
  r.pattern ?? (r.pattern = Ww), ot.init(t, r);
}), qE = /* @__PURE__ */ de("$ZodISODateTime", (t, r) => {
  r.pattern ?? (r.pattern = mE(r)), ot.init(t, r);
}), ZE = /* @__PURE__ */ de("$ZodISODate", (t, r) => {
  r.pattern ?? (r.pattern = hE), ot.init(t, r);
}), GE = /* @__PURE__ */ de("$ZodISOTime", (t, r) => {
  r.pattern ?? (r.pattern = pE(r)), ot.init(t, r);
}), VE = /* @__PURE__ */ de("$ZodISODuration", (t, r) => {
  r.pattern ?? (r.pattern = tE), ot.init(t, r);
}), $E = /* @__PURE__ */ de("$ZodIPv4", (t, r) => {
  r.pattern ?? (r.pattern = sE), ot.init(t, r), t._zod.onattach.push((s) => {
    const a = s._zod.bag;
    a.format = "ipv4";
  });
}), YE = /* @__PURE__ */ de("$ZodIPv6", (t, r) => {
  r.pattern ?? (r.pattern = oE), ot.init(t, r), t._zod.onattach.push((s) => {
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
}), XE = /* @__PURE__ */ de("$ZodCIDRv4", (t, r) => {
  r.pattern ?? (r.pattern = uE), ot.init(t, r);
}), FE = /* @__PURE__ */ de("$ZodCIDRv6", (t, r) => {
  r.pattern ?? (r.pattern = lE), ot.init(t, r), t._zod.check = (s) => {
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
function g_(t) {
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
const QE = /* @__PURE__ */ de("$ZodBase64", (t, r) => {
  r.pattern ?? (r.pattern = cE), ot.init(t, r), t._zod.onattach.push((s) => {
    s._zod.bag.contentEncoding = "base64";
  }), t._zod.check = (s) => {
    g_(s.value) || s.issues.push({
      code: "invalid_format",
      format: "base64",
      input: s.value,
      inst: t,
      continue: !r.abort
    });
  };
});
function KE(t) {
  if (!h_.test(t))
    return !1;
  const r = t.replace(/[-_]/g, (a) => a === "-" ? "+" : "/"), s = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return g_(s);
}
const JE = /* @__PURE__ */ de("$ZodBase64URL", (t, r) => {
  r.pattern ?? (r.pattern = h_), ot.init(t, r), t._zod.onattach.push((s) => {
    s._zod.bag.contentEncoding = "base64url";
  }), t._zod.check = (s) => {
    KE(s.value) || s.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: s.value,
      inst: t,
      continue: !r.abort
    });
  };
}), WE = /* @__PURE__ */ de("$ZodE164", (t, r) => {
  r.pattern ?? (r.pattern = fE), ot.init(t, r);
});
function eC(t, r = null) {
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
const tC = /* @__PURE__ */ de("$ZodJWT", (t, r) => {
  ot.init(t, r), t._zod.check = (s) => {
    eC(s.value, r.alg) || s.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: s.value,
      inst: t,
      continue: !r.abort
    });
  };
}), nC = /* @__PURE__ */ de("$ZodUnknown", (t, r) => {
  At.init(t, r), t._zod.parse = (s) => s;
}), rC = /* @__PURE__ */ de("$ZodNever", (t, r) => {
  At.init(t, r), t._zod.parse = (s, a) => (s.issues.push({
    expected: "never",
    code: "invalid_type",
    input: s.value,
    inst: t
  }), s);
});
function qy(t, r, s) {
  t.issues.length && r.issues.push(...l_(s, t.issues)), r.value[s] = t.value;
}
const aC = /* @__PURE__ */ de("$ZodArray", (t, r) => {
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
      p instanceof Promise ? c.push(p.then((_) => qy(_, s, f))) : qy(p, s, f);
    }
    return c.length ? Promise.all(c).then(() => s) : s;
  };
});
function Ol(t, r, s, a) {
  t.issues.length && r.issues.push(...l_(s, t.issues)), t.value === void 0 ? s in a && (r.value[s] = void 0) : r.value[s] = t.value;
}
function v_(t) {
  const r = Object.keys(t.shape);
  for (const a of r)
    if (!t.shape?.[a]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${a}": expected a Zod schema`);
  const s = Nw(t.shape);
  return {
    ...t,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(s)
  };
}
function y_(t, r, s, a, u, c) {
  const f = [], m = u.keySet, p = u.catchall._zod, _ = p.def.type;
  for (const g of Object.keys(r)) {
    if (m.has(g))
      continue;
    if (_ === "never") {
      f.push(g);
      continue;
    }
    const E = p.run({ value: r[g], issues: [] }, a);
    E instanceof Promise ? t.push(E.then((v) => Ol(v, s, g, r))) : Ol(E, s, g, r);
  }
  return f.length && s.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: r,
    inst: c
  }), t.length ? Promise.all(t).then(() => s) : s;
}
const iC = /* @__PURE__ */ de("$ZodObject", (t, r) => {
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
  const a = ch(() => v_(r));
  rt(t._zod, "propValues", () => {
    const m = r.shape, p = {};
    for (const _ in m) {
      const g = m[_]._zod;
      if (g.values) {
        p[_] ?? (p[_] = /* @__PURE__ */ new Set());
        for (const E of g.values)
          p[_].add(E);
      }
    }
    return p;
  });
  const u = Nl, c = r.catchall;
  let f;
  t._zod.parse = (m, p) => {
    f ?? (f = a.value);
    const _ = m.value;
    if (!u(_))
      return m.issues.push({
        expected: "object",
        code: "invalid_type",
        input: _,
        inst: t
      }), m;
    m.value = {};
    const g = [], E = f.shape;
    for (const v of f.keys) {
      const h = E[v]._zod.run({ value: _[v], issues: [] }, p);
      h instanceof Promise ? g.push(h.then((C) => Ol(C, m, v, _))) : Ol(h, m, v, _);
    }
    return c ? y_(g, _, m, p, a.value, t) : g.length ? Promise.all(g).then(() => m) : m;
  };
}), sC = /* @__PURE__ */ de("$ZodObjectJIT", (t, r) => {
  iC.init(t, r);
  const s = t._zod.parse, a = ch(() => v_(r)), u = (v) => {
    const S = new NE(["shape", "payload", "ctx"]), h = a.value, C = (P) => {
      const l = Uy(P);
      return `shape[${l}]._zod.run({ value: input[${l}], issues: [] }, ctx)`;
    };
    S.write("const input = payload.value;");
    const x = /* @__PURE__ */ Object.create(null);
    let O = 0;
    for (const P of h.keys)
      x[P] = `key_${O++}`;
    S.write("const newResult = {};");
    for (const P of h.keys) {
      const l = x[P], y = Uy(P);
      S.write(`const ${l} = ${C(P)};`), S.write(`
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
    return (P, l) => T(v, P, l);
  };
  let c;
  const f = Nl, m = !i_.jitless, _ = m && xw.value, g = r.catchall;
  let E;
  t._zod.parse = (v, S) => {
    E ?? (E = a.value);
    const h = v.value;
    return f(h) ? m && _ && S?.async === !1 && S.jitless !== !0 ? (c || (c = u(r.shape)), v = c(v, S), g ? y_([], h, v, S, E, t) : v) : s(v, S) : (v.issues.push({
      expected: "object",
      code: "invalid_type",
      input: h,
      inst: t
    }), v);
  };
});
function Zy(t, r, s, a) {
  for (const c of t)
    if (c.issues.length === 0)
      return r.value = c.value, r;
  const u = t.filter((c) => !Pi(c));
  return u.length === 1 ? (r.value = u[0].value, u[0]) : (r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: s,
    errors: t.map((c) => c.issues.map((f) => Ia(f, a, La())))
  }), r);
}
const oC = /* @__PURE__ */ de("$ZodUnion", (t, r) => {
  At.init(t, r), rt(t._zod, "optin", () => r.options.some((u) => u._zod.optin === "optional") ? "optional" : void 0), rt(t._zod, "optout", () => r.options.some((u) => u._zod.optout === "optional") ? "optional" : void 0), rt(t._zod, "values", () => {
    if (r.options.every((u) => u._zod.values))
      return new Set(r.options.flatMap((u) => Array.from(u._zod.values)));
  }), rt(t._zod, "pattern", () => {
    if (r.options.every((u) => u._zod.pattern)) {
      const u = r.options.map((c) => c._zod.pattern);
      return new RegExp(`^(${u.map((c) => fh(c.source)).join("|")})$`);
    }
  });
  const s = r.options.length === 1, a = r.options[0]._zod.run;
  t._zod.parse = (u, c) => {
    if (s)
      return a(u, c);
    let f = !1;
    const m = [];
    for (const p of r.options) {
      const _ = p._zod.run({
        value: u.value,
        issues: []
      }, c);
      if (_ instanceof Promise)
        m.push(_), f = !0;
      else {
        if (_.issues.length === 0)
          return _;
        m.push(_);
      }
    }
    return f ? Promise.all(m).then((p) => Zy(p, u, t, c)) : Zy(m, u, t, c);
  };
}), uC = /* @__PURE__ */ de("$ZodIntersection", (t, r) => {
  At.init(t, r), t._zod.parse = (s, a) => {
    const u = s.value, c = r.left._zod.run({ value: u, issues: [] }, a), f = r.right._zod.run({ value: u, issues: [] }, a);
    return c instanceof Promise || f instanceof Promise ? Promise.all([c, f]).then(([p, _]) => Gy(s, p, _)) : Gy(s, c, f);
  };
});
function Gf(t, r) {
  if (t === r)
    return { valid: !0, data: t };
  if (t instanceof Date && r instanceof Date && +t == +r)
    return { valid: !0, data: t };
  if (so(t) && so(r)) {
    const s = Object.keys(r), a = Object.keys(t).filter((c) => s.indexOf(c) !== -1), u = { ...t, ...r };
    for (const c of a) {
      const f = Gf(t[c], r[c]);
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
      const u = t[a], c = r[a], f = Gf(u, c);
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
function Gy(t, r, s) {
  if (r.issues.length && t.issues.push(...r.issues), s.issues.length && t.issues.push(...s.issues), Pi(t))
    return t;
  const a = Gf(r.value, s.value);
  if (!a.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`);
  return t.value = a.data, t;
}
const lC = /* @__PURE__ */ de("$ZodEnum", (t, r) => {
  At.init(t, r);
  const s = s_(r.entries), a = new Set(s);
  t._zod.values = a, t._zod.pattern = new RegExp(`^(${s.filter((u) => Tw.has(typeof u)).map((u) => typeof u == "string" ? Dl(u) : u.toString()).join("|")})$`), t._zod.parse = (u, c) => {
    const f = u.value;
    return a.has(f) || u.issues.push({
      code: "invalid_value",
      values: s,
      input: f,
      inst: t
    }), u;
  };
}), cC = /* @__PURE__ */ de("$ZodTransform", (t, r) => {
  At.init(t, r), t._zod.parse = (s, a) => {
    if (a.direction === "backward")
      throw new a_(t.constructor.name);
    const u = r.transform(s.value, s);
    if (a.async)
      return (u instanceof Promise ? u : Promise.resolve(u)).then((f) => (s.value = f, s));
    if (u instanceof Promise)
      throw new Ii();
    return s.value = u, s;
  };
});
function Vy(t, r) {
  return t.issues.length && r === void 0 ? { issues: [], value: void 0 } : t;
}
const dC = /* @__PURE__ */ de("$ZodOptional", (t, r) => {
  At.init(t, r), t._zod.optin = "optional", t._zod.optout = "optional", rt(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), rt(t._zod, "pattern", () => {
    const s = r.innerType._zod.pattern;
    return s ? new RegExp(`^(${fh(s.source)})?$`) : void 0;
  }), t._zod.parse = (s, a) => {
    if (r.innerType._zod.optin === "optional") {
      const u = r.innerType._zod.run(s, a);
      return u instanceof Promise ? u.then((c) => Vy(c, s.value)) : Vy(u, s.value);
    }
    return s.value === void 0 ? s : r.innerType._zod.run(s, a);
  };
}), fC = /* @__PURE__ */ de("$ZodNullable", (t, r) => {
  At.init(t, r), rt(t._zod, "optin", () => r.innerType._zod.optin), rt(t._zod, "optout", () => r.innerType._zod.optout), rt(t._zod, "pattern", () => {
    const s = r.innerType._zod.pattern;
    return s ? new RegExp(`^(${fh(s.source)}|null)$`) : void 0;
  }), rt(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), t._zod.parse = (s, a) => s.value === null ? s : r.innerType._zod.run(s, a);
}), hC = /* @__PURE__ */ de("$ZodDefault", (t, r) => {
  At.init(t, r), t._zod.optin = "optional", rt(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (s, a) => {
    if (a.direction === "backward")
      return r.innerType._zod.run(s, a);
    if (s.value === void 0)
      return s.value = r.defaultValue, s;
    const u = r.innerType._zod.run(s, a);
    return u instanceof Promise ? u.then((c) => $y(c, r)) : $y(u, r);
  };
});
function $y(t, r) {
  return t.value === void 0 && (t.value = r.defaultValue), t;
}
const pC = /* @__PURE__ */ de("$ZodPrefault", (t, r) => {
  At.init(t, r), t._zod.optin = "optional", rt(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (s, a) => (a.direction === "backward" || s.value === void 0 && (s.value = r.defaultValue), r.innerType._zod.run(s, a));
}), mC = /* @__PURE__ */ de("$ZodNonOptional", (t, r) => {
  At.init(t, r), rt(t._zod, "values", () => {
    const s = r.innerType._zod.values;
    return s ? new Set([...s].filter((a) => a !== void 0)) : void 0;
  }), t._zod.parse = (s, a) => {
    const u = r.innerType._zod.run(s, a);
    return u instanceof Promise ? u.then((c) => Yy(c, t)) : Yy(u, t);
  };
});
function Yy(t, r) {
  return !t.issues.length && t.value === void 0 && t.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: t.value,
    inst: r
  }), t;
}
const gC = /* @__PURE__ */ de("$ZodCatch", (t, r) => {
  At.init(t, r), rt(t._zod, "optin", () => r.innerType._zod.optin), rt(t._zod, "optout", () => r.innerType._zod.optout), rt(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (s, a) => {
    if (a.direction === "backward")
      return r.innerType._zod.run(s, a);
    const u = r.innerType._zod.run(s, a);
    return u instanceof Promise ? u.then((c) => (s.value = c.value, c.issues.length && (s.value = r.catchValue({
      ...s,
      error: {
        issues: c.issues.map((f) => Ia(f, a, La()))
      },
      input: s.value
    }), s.issues = []), s)) : (s.value = u.value, u.issues.length && (s.value = r.catchValue({
      ...s,
      error: {
        issues: u.issues.map((c) => Ia(c, a, La()))
      },
      input: s.value
    }), s.issues = []), s);
  };
}), vC = /* @__PURE__ */ de("$ZodPipe", (t, r) => {
  At.init(t, r), rt(t._zod, "values", () => r.in._zod.values), rt(t._zod, "optin", () => r.in._zod.optin), rt(t._zod, "optout", () => r.out._zod.optout), rt(t._zod, "propValues", () => r.in._zod.propValues), t._zod.parse = (s, a) => {
    if (a.direction === "backward") {
      const c = r.out._zod.run(s, a);
      return c instanceof Promise ? c.then((f) => sl(f, r.in, a)) : sl(c, r.in, a);
    }
    const u = r.in._zod.run(s, a);
    return u instanceof Promise ? u.then((c) => sl(c, r.out, a)) : sl(u, r.out, a);
  };
});
function sl(t, r, s) {
  return t.issues.length ? (t.aborted = !0, t) : r._zod.run({ value: t.value, issues: t.issues }, s);
}
const yC = /* @__PURE__ */ de("$ZodReadonly", (t, r) => {
  At.init(t, r), rt(t._zod, "propValues", () => r.innerType._zod.propValues), rt(t._zod, "values", () => r.innerType._zod.values), rt(t._zod, "optin", () => r.innerType._zod.optin), rt(t._zod, "optout", () => r.innerType._zod.optout), t._zod.parse = (s, a) => {
    if (a.direction === "backward")
      return r.innerType._zod.run(s, a);
    const u = r.innerType._zod.run(s, a);
    return u instanceof Promise ? u.then(Xy) : Xy(u);
  };
});
function Xy(t) {
  return t.value = Object.freeze(t.value), t;
}
const _C = /* @__PURE__ */ de("$ZodCustom", (t, r) => {
  rr.init(t, r), At.init(t, r), t._zod.parse = (s, a) => s, t._zod.check = (s) => {
    const a = s.value, u = r.fn(a);
    if (u instanceof Promise)
      return u.then((c) => Fy(c, s, a, t));
    Fy(u, s, a, t);
  };
});
function Fy(t, r, s, a) {
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
    a._zod.def.params && (u.params = a._zod.def.params), r.issues.push(oo(u));
  }
}
class __ {
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
function bC() {
  return new __();
}
const Ws = /* @__PURE__ */ bC();
function SC(t, r) {
  return new t({
    type: "string",
    ...Oe(r)
  });
}
function wC(t, r) {
  return new t({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function Qy(t, r) {
  return new t({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function EC(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function CC(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...Oe(r)
  });
}
function kC(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...Oe(r)
  });
}
function AC(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...Oe(r)
  });
}
function xC(t, r) {
  return new t({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function TC(t, r) {
  return new t({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function NC(t, r) {
  return new t({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function OC(t, r) {
  return new t({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function MC(t, r) {
  return new t({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function jC(t, r) {
  return new t({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function RC(t, r) {
  return new t({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function DC(t, r) {
  return new t({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function zC(t, r) {
  return new t({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function PC(t, r) {
  return new t({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function LC(t, r) {
  return new t({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function IC(t, r) {
  return new t({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function BC(t, r) {
  return new t({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function UC(t, r) {
  return new t({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function HC(t, r) {
  return new t({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function qC(t, r) {
  return new t({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function ZC(t, r) {
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
function GC(t, r) {
  return new t({
    type: "string",
    format: "date",
    check: "string_format",
    ...Oe(r)
  });
}
function VC(t, r) {
  return new t({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...Oe(r)
  });
}
function $C(t, r) {
  return new t({
    type: "string",
    format: "duration",
    check: "string_format",
    ...Oe(r)
  });
}
function YC(t) {
  return new t({
    type: "unknown"
  });
}
function XC(t, r) {
  return new t({
    type: "never",
    ...Oe(r)
  });
}
function b_(t, r) {
  return new _E({
    check: "max_length",
    ...Oe(r),
    maximum: t
  });
}
function Ml(t, r) {
  return new bE({
    check: "min_length",
    ...Oe(r),
    minimum: t
  });
}
function S_(t, r) {
  return new SE({
    check: "length_equals",
    ...Oe(r),
    length: t
  });
}
function FC(t, r) {
  return new wE({
    check: "string_format",
    format: "regex",
    ...Oe(r),
    pattern: t
  });
}
function QC(t) {
  return new EE({
    check: "string_format",
    format: "lowercase",
    ...Oe(t)
  });
}
function KC(t) {
  return new CE({
    check: "string_format",
    format: "uppercase",
    ...Oe(t)
  });
}
function JC(t, r) {
  return new kE({
    check: "string_format",
    format: "includes",
    ...Oe(r),
    includes: t
  });
}
function WC(t, r) {
  return new AE({
    check: "string_format",
    format: "starts_with",
    ...Oe(r),
    prefix: t
  });
}
function e4(t, r) {
  return new xE({
    check: "string_format",
    format: "ends_with",
    ...Oe(r),
    suffix: t
  });
}
function fo(t) {
  return new TE({
    check: "overwrite",
    tx: t
  });
}
function t4(t) {
  return fo((r) => r.normalize(t));
}
function n4() {
  return fo((t) => t.trim());
}
function r4() {
  return fo((t) => t.toLowerCase());
}
function a4() {
  return fo((t) => t.toUpperCase());
}
function i4(t, r, s) {
  return new t({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ...Oe(s)
  });
}
function s4(t, r, s) {
  return new t({
    type: "custom",
    check: "custom",
    fn: r,
    ...Oe(s)
  });
}
function o4(t) {
  const r = u4((s) => (s.addIssue = (a) => {
    if (typeof a == "string")
      s.issues.push(oo(a, s.value, r._zod.def));
    else {
      const u = a;
      u.fatal && (u.continue = !1), u.code ?? (u.code = "custom"), u.input ?? (u.input = s.value), u.inst ?? (u.inst = r), u.continue ?? (u.continue = !r._zod.def.abort), s.issues.push(oo(u));
    }
  }, t(s.value, s)));
  return r;
}
function u4(t, r) {
  const s = new rr({
    check: "custom",
    ...Oe(r)
  });
  return s._zod.check = t, s;
}
class Ky {
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
      }, v = r._zod.parent;
      if (v)
        m.ref = v, this.process(v, E), this.seen.get(v).isParent = !0;
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
                ...l.map((y) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: y.source
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
            const C = this.target === "draft-2020-12" ? "prefixItems" : "items", x = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", O = u.items.map((y, w) => this.process(y, {
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
            const h = S, C = s_(u.entries);
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
    const _ = this.metadataRegistry.get(r);
    return _ && Object.assign(m.schema, _), this.io === "input" && kt(r) && (delete m.schema.examples, delete m.schema.default), this.io === "input" && m.schema._prefault && ((a = m.schema).default ?? (a.default = m.schema._prefault)), delete m.schema._prefault, this.seen.get(r).schema;
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
    const _ = a.external?.defs ?? {};
    for (const g of this.seen.entries()) {
      const E = g[1];
      E.def && E.defId && (_[E.defId] = E.def);
    }
    a.external || Object.keys(_).length > 0 && (this.target === "draft-2020-12" ? p.$defs = _ : p.definitions = _);
    try {
      return JSON.parse(JSON.stringify(p));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function l4(t, r) {
  if (t instanceof __) {
    const a = new Ky(r), u = {};
    for (const m of t._idmap.entries()) {
      const [p, _] = m;
      a.process(_);
    }
    const c = {}, f = {
      registry: t,
      uri: r?.uri,
      defs: u
    };
    for (const m of t._idmap.entries()) {
      const [p, _] = m;
      c[p] = a.emit(_, {
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
  const s = new Ky(r);
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
const c4 = /* @__PURE__ */ de("ZodISODateTime", (t, r) => {
  qE.init(t, r), ct.init(t, r);
});
function d4(t) {
  return ZC(c4, t);
}
const f4 = /* @__PURE__ */ de("ZodISODate", (t, r) => {
  ZE.init(t, r), ct.init(t, r);
});
function h4(t) {
  return GC(f4, t);
}
const p4 = /* @__PURE__ */ de("ZodISOTime", (t, r) => {
  GE.init(t, r), ct.init(t, r);
});
function m4(t) {
  return VC(p4, t);
}
const g4 = /* @__PURE__ */ de("ZodISODuration", (t, r) => {
  VE.init(t, r), ct.init(t, r);
});
function v4(t) {
  return $C(g4, t);
}
const y4 = (t, r) => {
  d_.init(t, r), t.name = "ZodError", Object.defineProperties(t, {
    format: {
      value: (s) => Iw(t, s)
      // enumerable: false,
    },
    flatten: {
      value: (s) => Lw(t, s)
      // enumerable: false,
    },
    addIssue: {
      value: (s) => {
        t.issues.push(s), t.message = JSON.stringify(t.issues, Zf, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (s) => {
        t.issues.push(...s), t.message = JSON.stringify(t.issues, Zf, 2);
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
}, jn = de("ZodError", y4, {
  Parent: Error
}), _4 = /* @__PURE__ */ ph(jn), b4 = /* @__PURE__ */ mh(jn), S4 = /* @__PURE__ */ zl(jn), w4 = /* @__PURE__ */ Pl(jn), E4 = /* @__PURE__ */ Hw(jn), C4 = /* @__PURE__ */ qw(jn), k4 = /* @__PURE__ */ Zw(jn), A4 = /* @__PURE__ */ Gw(jn), x4 = /* @__PURE__ */ Vw(jn), T4 = /* @__PURE__ */ $w(jn), N4 = /* @__PURE__ */ Yw(jn), O4 = /* @__PURE__ */ Xw(jn), jt = /* @__PURE__ */ de("ZodType", (t, r) => (At.init(t, r), t.def = r, t.type = r.type, Object.defineProperty(t, "_def", { value: r }), t.check = (...s) => t.clone(Ua(r, {
  checks: [
    ...r.checks ?? [],
    ...s.map((a) => typeof a == "function" ? { _zod: { check: a, def: { check: "custom" }, onattach: [] } } : a)
  ]
})), t.clone = (s, a) => ra(t, s, a), t.brand = () => t, t.register = ((s, a) => (s.add(t, a), t)), t.parse = (s, a) => _4(t, s, a, { callee: t.parse }), t.safeParse = (s, a) => S4(t, s, a), t.parseAsync = async (s, a) => b4(t, s, a, { callee: t.parseAsync }), t.safeParseAsync = async (s, a) => w4(t, s, a), t.spa = t.safeParseAsync, t.encode = (s, a) => E4(t, s, a), t.decode = (s, a) => C4(t, s, a), t.encodeAsync = async (s, a) => k4(t, s, a), t.decodeAsync = async (s, a) => A4(t, s, a), t.safeEncode = (s, a) => x4(t, s, a), t.safeDecode = (s, a) => T4(t, s, a), t.safeEncodeAsync = async (s, a) => N4(t, s, a), t.safeDecodeAsync = async (s, a) => O4(t, s, a), t.refine = (s, a) => t.check(_k(s, a)), t.superRefine = (s) => t.check(bk(s)), t.overwrite = (s) => t.check(fo(s)), t.optional = () => e0(t), t.nullable = () => t0(t), t.nullish = () => e0(t0(t)), t.nonoptional = (s) => fk(t, s), t.array = () => za(t), t.or = (s) => tk([t, s]), t.and = (s) => rk(t, s), t.transform = (s) => n0(t, sk(s)), t.default = (s) => lk(t, s), t.prefault = (s) => dk(t, s), t.catch = (s) => pk(t, s), t.pipe = (s) => n0(t, s), t.readonly = () => vk(t), t.describe = (s) => {
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
}, t.isOptional = () => t.safeParse(void 0).success, t.isNullable = () => t.safeParse(null).success, t)), w_ = /* @__PURE__ */ de("_ZodString", (t, r) => {
  gh.init(t, r), jt.init(t, r);
  const s = t._zod.bag;
  t.format = s.format ?? null, t.minLength = s.minimum ?? null, t.maxLength = s.maximum ?? null, t.regex = (...a) => t.check(FC(...a)), t.includes = (...a) => t.check(JC(...a)), t.startsWith = (...a) => t.check(WC(...a)), t.endsWith = (...a) => t.check(e4(...a)), t.min = (...a) => t.check(Ml(...a)), t.max = (...a) => t.check(b_(...a)), t.length = (...a) => t.check(S_(...a)), t.nonempty = (...a) => t.check(Ml(1, ...a)), t.lowercase = (a) => t.check(QC(a)), t.uppercase = (a) => t.check(KC(a)), t.trim = () => t.check(n4()), t.normalize = (...a) => t.check(t4(...a)), t.toLowerCase = () => t.check(r4()), t.toUpperCase = () => t.check(a4());
}), M4 = /* @__PURE__ */ de("ZodString", (t, r) => {
  gh.init(t, r), w_.init(t, r), t.email = (s) => t.check(wC(j4, s)), t.url = (s) => t.check(xC(R4, s)), t.jwt = (s) => t.check(qC(X4, s)), t.emoji = (s) => t.check(TC(D4, s)), t.guid = (s) => t.check(Qy(Jy, s)), t.uuid = (s) => t.check(EC(ol, s)), t.uuidv4 = (s) => t.check(CC(ol, s)), t.uuidv6 = (s) => t.check(kC(ol, s)), t.uuidv7 = (s) => t.check(AC(ol, s)), t.nanoid = (s) => t.check(NC(z4, s)), t.guid = (s) => t.check(Qy(Jy, s)), t.cuid = (s) => t.check(OC(P4, s)), t.cuid2 = (s) => t.check(MC(L4, s)), t.ulid = (s) => t.check(jC(I4, s)), t.base64 = (s) => t.check(BC(V4, s)), t.base64url = (s) => t.check(UC($4, s)), t.xid = (s) => t.check(RC(B4, s)), t.ksuid = (s) => t.check(DC(U4, s)), t.ipv4 = (s) => t.check(zC(H4, s)), t.ipv6 = (s) => t.check(PC(q4, s)), t.cidrv4 = (s) => t.check(LC(Z4, s)), t.cidrv6 = (s) => t.check(IC(G4, s)), t.e164 = (s) => t.check(HC(Y4, s)), t.datetime = (s) => t.check(d4(s)), t.date = (s) => t.check(h4(s)), t.time = (s) => t.check(m4(s)), t.duration = (s) => t.check(v4(s));
});
function Zt(t) {
  return SC(M4, t);
}
const ct = /* @__PURE__ */ de("ZodStringFormat", (t, r) => {
  ot.init(t, r), w_.init(t, r);
}), j4 = /* @__PURE__ */ de("ZodEmail", (t, r) => {
  RE.init(t, r), ct.init(t, r);
}), Jy = /* @__PURE__ */ de("ZodGUID", (t, r) => {
  ME.init(t, r), ct.init(t, r);
}), ol = /* @__PURE__ */ de("ZodUUID", (t, r) => {
  jE.init(t, r), ct.init(t, r);
}), R4 = /* @__PURE__ */ de("ZodURL", (t, r) => {
  DE.init(t, r), ct.init(t, r);
}), D4 = /* @__PURE__ */ de("ZodEmoji", (t, r) => {
  zE.init(t, r), ct.init(t, r);
}), z4 = /* @__PURE__ */ de("ZodNanoID", (t, r) => {
  PE.init(t, r), ct.init(t, r);
}), P4 = /* @__PURE__ */ de("ZodCUID", (t, r) => {
  LE.init(t, r), ct.init(t, r);
}), L4 = /* @__PURE__ */ de("ZodCUID2", (t, r) => {
  IE.init(t, r), ct.init(t, r);
}), I4 = /* @__PURE__ */ de("ZodULID", (t, r) => {
  BE.init(t, r), ct.init(t, r);
}), B4 = /* @__PURE__ */ de("ZodXID", (t, r) => {
  UE.init(t, r), ct.init(t, r);
}), U4 = /* @__PURE__ */ de("ZodKSUID", (t, r) => {
  HE.init(t, r), ct.init(t, r);
}), H4 = /* @__PURE__ */ de("ZodIPv4", (t, r) => {
  $E.init(t, r), ct.init(t, r);
}), q4 = /* @__PURE__ */ de("ZodIPv6", (t, r) => {
  YE.init(t, r), ct.init(t, r);
}), Z4 = /* @__PURE__ */ de("ZodCIDRv4", (t, r) => {
  XE.init(t, r), ct.init(t, r);
}), G4 = /* @__PURE__ */ de("ZodCIDRv6", (t, r) => {
  FE.init(t, r), ct.init(t, r);
}), V4 = /* @__PURE__ */ de("ZodBase64", (t, r) => {
  QE.init(t, r), ct.init(t, r);
}), $4 = /* @__PURE__ */ de("ZodBase64URL", (t, r) => {
  JE.init(t, r), ct.init(t, r);
}), Y4 = /* @__PURE__ */ de("ZodE164", (t, r) => {
  WE.init(t, r), ct.init(t, r);
}), X4 = /* @__PURE__ */ de("ZodJWT", (t, r) => {
  tC.init(t, r), ct.init(t, r);
}), F4 = /* @__PURE__ */ de("ZodUnknown", (t, r) => {
  nC.init(t, r), jt.init(t, r);
});
function Wy() {
  return YC(F4);
}
const Q4 = /* @__PURE__ */ de("ZodNever", (t, r) => {
  rC.init(t, r), jt.init(t, r);
});
function K4(t) {
  return XC(Q4, t);
}
const J4 = /* @__PURE__ */ de("ZodArray", (t, r) => {
  aC.init(t, r), jt.init(t, r), t.element = r.element, t.min = (s, a) => t.check(Ml(s, a)), t.nonempty = (s) => t.check(Ml(1, s)), t.max = (s, a) => t.check(b_(s, a)), t.length = (s, a) => t.check(S_(s, a)), t.unwrap = () => t.element;
});
function za(t, r) {
  return i4(J4, t, r);
}
const W4 = /* @__PURE__ */ de("ZodObject", (t, r) => {
  sC.init(t, r), jt.init(t, r), rt(t, "shape", () => r.shape), t.keyof = () => ak(Object.keys(t._zod.def.shape)), t.catchall = (s) => t.clone({ ...t._zod.def, catchall: s }), t.passthrough = () => t.clone({ ...t._zod.def, catchall: Wy() }), t.loose = () => t.clone({ ...t._zod.def, catchall: Wy() }), t.strict = () => t.clone({ ...t._zod.def, catchall: K4() }), t.strip = () => t.clone({ ...t._zod.def, catchall: void 0 }), t.extend = (s) => jw(t, s), t.safeExtend = (s) => Rw(t, s), t.merge = (s) => Dw(t, s), t.pick = (s) => Ow(t, s), t.omit = (s) => Mw(t, s), t.partial = (...s) => zw(E_, t, s[0]), t.required = (...s) => Pw(C_, t, s[0]);
});
function ho(t, r) {
  const s = {
    type: "object",
    shape: t ?? {},
    ...Oe(r)
  };
  return new W4(s);
}
const ek = /* @__PURE__ */ de("ZodUnion", (t, r) => {
  oC.init(t, r), jt.init(t, r), t.options = r.options;
});
function tk(t, r) {
  return new ek({
    type: "union",
    options: t,
    ...Oe(r)
  });
}
const nk = /* @__PURE__ */ de("ZodIntersection", (t, r) => {
  uC.init(t, r), jt.init(t, r);
});
function rk(t, r) {
  return new nk({
    type: "intersection",
    left: t,
    right: r
  });
}
const Vf = /* @__PURE__ */ de("ZodEnum", (t, r) => {
  lC.init(t, r), jt.init(t, r), t.enum = r.entries, t.options = Object.values(r.entries);
  const s = new Set(Object.keys(r.entries));
  t.extract = (a, u) => {
    const c = {};
    for (const f of a)
      if (s.has(f))
        c[f] = r.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Vf({
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
    return new Vf({
      ...r,
      checks: [],
      ...Oe(u),
      entries: c
    });
  };
});
function ak(t, r) {
  const s = Array.isArray(t) ? Object.fromEntries(t.map((a) => [a, a])) : t;
  return new Vf({
    type: "enum",
    entries: s,
    ...Oe(r)
  });
}
const ik = /* @__PURE__ */ de("ZodTransform", (t, r) => {
  cC.init(t, r), jt.init(t, r), t._zod.parse = (s, a) => {
    if (a.direction === "backward")
      throw new a_(t.constructor.name);
    s.addIssue = (c) => {
      if (typeof c == "string")
        s.issues.push(oo(c, s.value, r));
      else {
        const f = c;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = s.value), f.inst ?? (f.inst = t), s.issues.push(oo(f));
      }
    };
    const u = r.transform(s.value, s);
    return u instanceof Promise ? u.then((c) => (s.value = c, s)) : (s.value = u, s);
  };
});
function sk(t) {
  return new ik({
    type: "transform",
    transform: t
  });
}
const E_ = /* @__PURE__ */ de("ZodOptional", (t, r) => {
  dC.init(t, r), jt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function e0(t) {
  return new E_({
    type: "optional",
    innerType: t
  });
}
const ok = /* @__PURE__ */ de("ZodNullable", (t, r) => {
  fC.init(t, r), jt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function t0(t) {
  return new ok({
    type: "nullable",
    innerType: t
  });
}
const uk = /* @__PURE__ */ de("ZodDefault", (t, r) => {
  hC.init(t, r), jt.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
});
function lk(t, r) {
  return new uk({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : u_(r);
    }
  });
}
const ck = /* @__PURE__ */ de("ZodPrefault", (t, r) => {
  pC.init(t, r), jt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function dk(t, r) {
  return new ck({
    type: "prefault",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : u_(r);
    }
  });
}
const C_ = /* @__PURE__ */ de("ZodNonOptional", (t, r) => {
  mC.init(t, r), jt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function fk(t, r) {
  return new C_({
    type: "nonoptional",
    innerType: t,
    ...Oe(r)
  });
}
const hk = /* @__PURE__ */ de("ZodCatch", (t, r) => {
  gC.init(t, r), jt.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
});
function pk(t, r) {
  return new hk({
    type: "catch",
    innerType: t,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const mk = /* @__PURE__ */ de("ZodPipe", (t, r) => {
  vC.init(t, r), jt.init(t, r), t.in = r.in, t.out = r.out;
});
function n0(t, r) {
  return new mk({
    type: "pipe",
    in: t,
    out: r
    // ...util.normalizeParams(params),
  });
}
const gk = /* @__PURE__ */ de("ZodReadonly", (t, r) => {
  yC.init(t, r), jt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function vk(t) {
  return new gk({
    type: "readonly",
    innerType: t
  });
}
const yk = /* @__PURE__ */ de("ZodCustom", (t, r) => {
  _C.init(t, r), jt.init(t, r);
});
function _k(t, r = {}) {
  return s4(yk, t, r);
}
function bk(t) {
  return o4(t);
}
const r0 = {
  ENTRY: "EntryRevision",
  GLOBAL: "GlobalRevision"
}, $f = "placeholder-chatHistory", Sk = ho({
  justification: Zt().describe("A brief, friendly explanation of the changes made."),
  name: Zt().describe("The entry's new name/comment."),
  triggers: za(Zt()).describe("The entry's new keywords/triggers."),
  content: Zt().describe("The entry's new content.")
}), wk = ho({
  worldName: Zt().describe("The name of the world where the new entry should be added."),
  name: Zt().describe("The new entry's name/comment."),
  triggers: za(Zt()).describe("The new entry's triggers."),
  content: Zt().describe("The new entry's content.")
}), Ek = ho({
  worldName: Zt().describe("The name of the world containing the entry to change."),
  originalName: Zt().describe("The original name/comment of the entry to change, used for identification."),
  newName: Zt().optional().describe("The entry's new name/comment. If omitted, the name is not changed."),
  triggers: za(Zt()).optional().describe("The entry's new list of triggers."),
  content: Zt().optional().describe("The entry's new content.")
}), Ck = ho({
  worldName: Zt().describe("The name of the world containing the entry to remove."),
  name: Zt().describe("The name/comment of the entry to remove.")
}), kk = ho({
  justification: Zt().describe("A brief, friendly explanation of all the operations performed."),
  add: za(wk).optional().describe("A list of new entries to add."),
  change: za(Ek).optional().describe("A list of existing entries to change."),
  remove: za(Ck).optional().describe("A list of existing entries to remove.")
});
function Cf(t) {
  return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function Yf(t, r = 0) {
  const s = "  ".repeat(r);
  if (Array.isArray(t))
    return t.map((a) => a !== null && typeof a == "object" ? `${s}<item>
${Yf(a, r + 1)}${s}</item>
` : `${s}<item>${Cf(a)}</item>
`).join("");
  if (t !== null && typeof t == "object") {
    let a = "";
    for (const u of Object.keys(t)) {
      const c = t[u];
      c !== null && typeof c == "object" ? a += `${s}<${u}>
${Yf(c, r + 1)}${s}</${u}>
` : a += `${s}<${u}>${Cf(c)}</${u}>
`;
    }
    return a;
  }
  return `${s}<value>${Cf(t)}</value>
`;
}
function Ak(t, r) {
  const s = Ma(t);
  return r === "xml" ? `<root>
${Yf(s, 1)}</root>` : JSON.stringify(s, null, 2);
}
function xk(...t) {
  for (const r of t) if (r !== void 0) return r;
}
function Tk(t) {
  return Array.isArray(t) ? t.find((r) => r !== "null") ?? t[0] : t;
}
function Ma(t) {
  if (!t || typeof t != "object") return null;
  const r = Array.isArray(t.examples) ? t.examples[0] : void 0, s = xk(t.example, r, t.default);
  if (s !== void 0) return s;
  if (t.const !== void 0) return t.const;
  if (Array.isArray(t.enum) && t.enum.length) return t.enum[0];
  const a = Array.isArray(t.anyOf) ? t.anyOf[0] : Array.isArray(t.oneOf) ? t.oneOf[0] : void 0;
  if (a) return Ma(a);
  switch (Tk(t.type)) {
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
const Nk = new B0({
  ignoreAttributes: !0,
  textNodeName: "#text",
  trimValues: !0,
  allowBooleanAttributes: !0
});
function Xf(t, r) {
  if (!(!r || !t || !r.properties))
    for (const s in r.properties) {
      if (!t.hasOwnProperty(s)) continue;
      const a = r.properties[s];
      let u = t[s];
      if (a.type === "array" && !Array.isArray(u) && (u === "" || u === null ? u = [] : u = [u], t[s] = u), a.type === "array" && a.items?.type === "object" && Array.isArray(u)) {
        const c = a.items.required || [], f = a.items.properties ? Object.keys(a.items.properties) : [], m = c.length > 0 ? c : f;
        if (m.length > 0) {
          const p = [];
          let _ = !1;
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
                    p.push(h), v = !0, _ = !0;
                    break;
                  }
                  if (Array.isArray(h) && h.length > 0 && E(h[0])) {
                    p.push(...h), v = !0, _ = !0;
                    break;
                  }
                }
              v || p.push(g);
            }
          }
          _ && (u = p, t[s] = u);
        }
      }
      a.type === "object" && typeof u == "object" && u !== null ? Xf(u, a) : a.type === "array" && a.items?.type === "object" && Array.isArray(u) && u.forEach((c) => Xf(c, a.items)), a.type === "string" && typeof u != "string" ? t[s] = String(u) : a.type === "array" && a.items?.type === "string" && Array.isArray(u) && (t[s] = u.map(String));
    }
}
function Ok(t, r, s = {}) {
  const a = /```(?:\w+\n|\n)?([\s\S]*?)```/, u = t.match(a);
  let c = u ? u[1].trim() : t.trim();
  const { previousContent: f } = s;
  f && (c = f + c.trimEnd());
  try {
    switch (r) {
      case "xml":
        const m = dS.validate(c);
        if (m !== !0)
          throw new Error(`Model response is not valid XML: ${m.err.msg}`);
        let p = Nk.parse(c);
        return p.root && (p = p.root), s.schema && Xf(p, s.schema), p;
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
const Mk = new v3();
async function Ff(t, r, s, a, u, c) {
  const f = !a.json_schema && !1;
  return new Promise((m, p) => {
    const _ = new AbortController(), g = c ?? _.signal;
    c && c.addEventListener("abort", () => _.abort(), { once: !0 }), Mk.generateRequest(
      {
        profileId: t,
        prompt: r,
        maxTokens: s,
        custom: { stream: f, signal: g },
        overridePayload: a
      },
      {
        abortController: _,
        onEntry: void 0,
        onFinish: (E, v, S) => g.aborted ? p(new DOMException("Request aborted by user", "AbortError")) : S ? p(S) : v === void 0 && S === void 0 ? p(new DOMException("Request aborted by user", "AbortError")) : (v || p(new Error("No data received from LLM")), S ? p(S) : m(v))
      }
    );
  });
}
async function jk(t, r, s, a) {
  const u = await Ff(t, r, s, {}, void 0, a);
  if (!u?.content)
    throw new Error("Plain request failed to return content.");
  return u.content;
}
async function a0(t, r, s, a, u, c, f) {
  const m = It.getSettings();
  let p, _;
  const g = l4(s);
  if (u === "native") {
    if (p = await Ff(
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
    _ = typeof p.content == "string" ? JSON.parse(p.content) : p.content;
  } else {
    const v = u, S = Ak(g, v), h = JSON.stringify(g, null, 2), C = v === "json" ? "reviseJsonPrompt" : "reviseXmlPrompt", x = m.prompts[C]?.content;
    if (!x)
      throw new Error(`Prompt template for mode "${v}" not found.`);
    const O = {
      example_response: S,
      schema: h
    }, P = { role: "system", content: _n.compile(x, { noEscape: !0, strict: !0 })(O) };
    if (p = await Ff(
      t,
      [...r, P],
      c,
      {},
      void 0,
      f
    ), !p?.content)
      throw new Error(`Structured request for ${a} failed to return content.`);
    _ = Ok(p.content, v, { schema: g });
  }
  const E = s.safeParse(_);
  if (!E.success) {
    const v = `Model response failed schema validation for ${a}. Check console for details.`;
    throw console.error("Zod validation failed:", E.error.issues), console.error("Raw content parsed:", _), await ge("error", v), new Error(v);
  }
  return E.data;
}
const Rk = ({ originalContent: t, newContent: r }) => {
  const s = ie.useMemo(() => {
    const a = n_(t, r);
    let u = "", c = "";
    return a.forEach((f) => {
      const m = f.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), _ = `<span style="${f.added ? "color: green; background-color: #e6ffed;" : f.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${m}</span>`;
      f.added || (u += _), f.removed || (c += _);
    }), { originalHtml: u, newHtml: c };
  }, [t, r]);
  return /* @__PURE__ */ A.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ A.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: s.originalHtml } }),
    /* @__PURE__ */ A.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: s.newHtml } })
  ] });
}, k_ = ({ before: t, after: r }) => {
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
    /* @__PURE__ */ A.jsx(Rk, { originalContent: u, newContent: c })
  ] }, a)) });
}, Dk = ({ before: t, after: r }) => {
  const { added: s, removed: a, changed: u } = ie.useMemo(() => {
    const f = t || {}, m = /* @__PURE__ */ new Map();
    Object.entries(f).forEach(([v, S]) => {
      S.forEach((h) => {
        const C = `${v}::${h.uid}`;
        m.set(C, { worldName: v, entry: h });
      });
    });
    const p = [], _ = [], g = [], E = Object.entries(r || {}).flatMap(
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
      _.push({ worldName: v, entry: S });
    }), { added: p, removed: _, changed: g };
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
        /* @__PURE__ */ A.jsx(k_, { before: m, after: p })
      ] }, `${f}::${p.uid}`))
    ] })
  ] }) : /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes were detected in the entries for this step." }) });
}, vh = ({ sessionType: t, before: r, after: s }) => !r && !s ? /* @__PURE__ */ A.jsxs("div", { className: "compare-state-popup", children: [
  /* @__PURE__ */ A.jsx("h3", { children: "Changes in this step" }),
  /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No state information available for this step." })
] }) : /* @__PURE__ */ A.jsxs("div", { className: "compare-state-popup", children: [
  /* @__PURE__ */ A.jsx("h3", { children: "Changes in this step" }),
  /* @__PURE__ */ A.jsx("div", { className: "compare-state-list", children: t === "global" ? /* @__PURE__ */ A.jsx(Dk, { before: r, after: s }) : /* @__PURE__ */ A.jsx(k_, { before: r, after: s }) })
] }), zk = ({ currentState: t, initialState: r }) => {
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
    /* @__PURE__ */ A.jsx("div", { className: "current-state-content", children: s ? /* @__PURE__ */ A.jsx(vh, { sessionType: "entry", before: r, after: t }) : u.map(({ label: c, value: f }) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
      /* @__PURE__ */ A.jsx("label", { children: c }),
      /* @__PURE__ */ A.jsx("div", { className: "state-value", children: f || /* @__PURE__ */ A.jsx("span", { className: "subtle-text", children: "empty" }) })
    ] }, c)) })
  ] });
}, Pk = ({ currentState: t, initialState: r }) => {
  const [s, a] = ie.useState(!1);
  return /* @__PURE__ */ A.jsxs("div", { className: "current-state-popup global-state-popup", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h3", { children: s ? "Comparing with Original State" : "Current Suggested Entries" }),
      /* @__PURE__ */ A.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ A.jsx("input", { type: "checkbox", checked: s, onChange: (u) => a(u.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ A.jsx("div", { className: "current-state-content", children: s ? /* @__PURE__ */ A.jsx(vh, { sessionType: "global", before: r, after: t }) : Object.entries(t).map(([u, c]) => /* @__PURE__ */ A.jsxs("div", { className: "world-group", children: [
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
}, Ri = SillyTavern.getContext(), Lk = (t, r) => {
  const s = structuredClone(t);
  return s.comment = r.name, s.key = r.triggers, s.content = r.content, s;
}, Ik = (t, r) => {
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
      const p = { entries: Object.fromEntries(s[u].map((g) => [g.uid, g])) }, _ = nh(u, p);
      _ && (_.comment = c, _.key = f, _.content = m, s[u].push(_));
    }
  return s;
}, Bk = ({ initialState: t, onSave: r, onClose: s }) => {
  const [a, u] = ie.useState(t.comment), [c, f] = ie.useState(t.key.join(", ")), [m, p] = ie.useState(t.content), _ = () => {
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
        /* @__PURE__ */ A.jsxs(Ee, { onClick: _, children: [
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
        /* @__PURE__ */ A.jsx(Q0, { type: "text", value: a, onInput: (g) => u(g.currentTarget.value) })
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
}, Uk = ({
  session: t,
  onBack: r,
  onApply: s,
  onSessionUpdate: a,
  initialState: u,
  chatContextOptions: c
}) => {
  const [f, m] = ie.useState(t.messages), [p, _] = ie.useState(""), [g, E] = ie.useState(!1), [v, S] = ie.useState(null), [h, C] = ie.useState(!1), [x, O] = ie.useState(!1), [T, P] = ie.useState(null), [l, y] = ie.useState(""), w = ie.useRef(null), k = ie.useRef(null);
  ie.useEffect(() => {
    w.current?.scrollIntoView({ behavior: "smooth" });
  }, [f]);
  const j = ie.useCallback(
    (Y, U, te) => {
      if (JSON.stringify(te) === JSON.stringify(U))
        return Y;
      const ne = It.getSettings();
      let ue = "";
      if (t.type === "global") {
        const re = ne.prompts.reviseGlobalStateUpdate?.content, pe = ne.prompts.reviseGlobalStateUpdateAddedModified?.content, je = ne.prompts.reviseGlobalStateUpdateRemoved?.content;
        if (!re || !pe || !je) return Y;
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
            const et = (dt.content || "") !== (qe.content || ""), Vn = (dt.comment || "") !== (qe.comment || ""), Dn = (dt.key || []).sort().join(",") !== (qe.key || []).sort().join(",");
            (et || Vn || Dn) && (Ze = !0);
          }
          Ze && (Le[_e] || (Le[_e] = []), Le[_e].push(dt));
        }), fe.forEach((dt, ye) => {
          if (!we.has(ye)) {
            const [_e] = ye.split("::");
            We.push({ worldName: _e, comment: dt.comment });
          }
        }), Object.keys(Le).length === 0 && We.length === 0)
          return Y;
        const Fe = _n.compile(pe, { noEscape: !0 })({
          changedLorebooks: Le
        }), Rn = _n.compile(je, { noEscape: !0 })({ removedEntries: We });
        ue = _n.compile(re, { noEscape: !0 })({
          addedModifiedContent: Fe,
          removedContent: Rn
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
        ), je = pe?.api ? Ri.CONNECT_API_MAP[pe.api].selected : void 0;
        if (!je) {
          ge("warning", "No API selected for this session.");
          return;
        }
        for (const fe of Y)
          if (fe.id === $f) {
            if (sn === void 0 && !Ft) continue;
            const we = await b0(je, c);
            we.warnings?.length && we.warnings.forEach((Le) => ge("warning", Le)), re.push(...we.result);
          } else
            re.push(fe);
        const Se = Y.slice(0, Y.length - (U ? 0 : 1)).reverse().find((fe) => fe.stateSnapshot)?.stateSnapshot ?? u;
        let me = "";
        if (t.type === "global") {
          const fe = ue.prompts.currentLorebooks?.content;
          if (fe) {
            const we = { currentLorebooks: Se };
            me = _n.compile(fe, { noEscape: !0 })(we);
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
          const fe = await jk(
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
            const Fe = await a0(
              t.profileId,
              re,
              Sk,
              r0.ENTRY,
              t.promptEngineeringMode,
              ue.maxResponseToken,
              k.current.signal
            );
            fe = Lk(Se, Fe), we = Fe.justification;
          } else {
            const Fe = await a0(
              t.profileId,
              re,
              kk,
              r0.GLOBAL,
              t.promptEngineeringMode,
              ue.maxResponseToken,
              k.current.signal
            );
            fe = Ik(Se, Fe), we = Fe.justification;
          }
          const Le = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: we,
            stateSnapshot: fe
          };
          let We = [...Y, Le];
          We = j(We, fe, Se), m(We), a({ ...t, messages: We });
        }
      } catch (re) {
        re.name === "AbortError" ? ge("info", "Request was cancelled.") : (console.error("Revise request failed:", re), ge("error", `Request failed: ${re.message}`)), ne();
      } finally {
        E(!1), k.current = null;
      }
    },
    [t, a, u, c, j]
  ), R = ie.useCallback(async () => {
    if (!p.trim() || g) return;
    const Y = { id: `msg-${Date.now()}`, role: "user", content: p.trim() }, U = f;
    await L(
      [...f, Y],
      !1,
      () => {
        m([...f, Y]), _("");
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
    P(Y.id), y(Y.content);
  }, K = () => {
    P(null), y("");
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
    ne = j(ne, Y, U), m(ne), a({ ...t, messages: ne }), O(!1);
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
          K0,
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
            /* @__PURE__ */ A.jsx(qn, { value: l, onChange: (U) => y(U.target.value), rows: 5 }),
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
            !g && Y.id !== $f && /* @__PURE__ */ A.jsxs("div", { className: "message-actions", children: [
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
          /* @__PURE__ */ A.jsx(qn, { value: l, onChange: (U) => y(U.target.value), rows: 3 }),
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
        qn,
        {
          value: p,
          onChange: (Y) => _(Y.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: g || !!T,
          onKeyDown: (Y) => {
            Y.key === "Enter" && !Y.shiftKey && (Y.preventDefault(), R());
          }
        }
      ),
      /* @__PURE__ */ A.jsx(Ee, { onClick: R, disabled: g || !p.trim() || !!T, children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-paper-plane" }) })
    ] }),
    v && /* @__PURE__ */ A.jsx(
      tr,
      {
        type: Lt.DISPLAY,
        content: /* @__PURE__ */ A.jsx(vh, { sessionType: t.type, before: v.before, after: v.after }),
        onComplete: () => S(null),
        options: { wide: !0, large: !0 }
      }
    ),
    h && /* @__PURE__ */ A.jsx(
      tr,
      {
        type: Lt.DISPLAY,
        content: t.type === "entry" ? /* @__PURE__ */ A.jsx(zk, { currentState: ae, initialState: u }) : /* @__PURE__ */ A.jsx(
          Pk,
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
          Bk,
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
async function Hk(t, r, s, a, u, c, f) {
  const m = It.getSettings(), p = m.mainContextTemplatePresets[a];
  if (!p)
    throw new Error(`Main context template preset "${a}" not found.`);
  const _ = [], g = {
    user: Re.name1 || "You",
    char: Re.name2 || "Character",
    persona: Re.powerUserSettings.persona_description,
    blackListedEntries: c.blackListedEntries
  };
  if (u.worldInfo)
    if (r === "global")
      g.currentLorebooks = t;
    else {
      const v = {};
      Object.entries(f).filter(([S]) => c.selectedWorldNames.includes(S)).forEach(([S, h]) => {
        const C = new Set(c.selectedEntryUids[S] ?? []), x = C.size > 0 ? h.filter((O) => C.has(O.uid)) : h.filter((O) => !O.disable);
        x.length > 0 && (v[S] = x);
      }), g.currentLorebooks = v;
    }
  if (r === "entry") {
    const v = t;
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
      _.push({
        id: $f,
        role: "system",
        content: "[[Chat history placeholder]]",
        isInitial: !0
      });
      continue;
    }
    const S = m.prompts[v.promptName];
    if (S) {
      let h = _n.compile(S.content, { noEscape: !0 })(g);
      h = Re.substituteParams(h), h.trim() && _.push({
        id: `im-${_.length}`,
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
      targetEntryName: r === "entry" ? t.comment : ""
    });
    _.push({
      id: `im-${_.length}`,
      role: "system",
      content: v,
      isInitial: !0
    });
  }
  return _;
}
const ul = SillyTavern.getContext(), i0 = "worldInfoRecommender_reviseSessions", A_ = ({
  target: t,
  initialState: r,
  onClose: s,
  onApply: a,
  sessionForContext: u,
  allEntries: c,
  contextToSend: f
}) => {
  const [m, p] = ie.useState([]), [_, g] = ie.useState(null), [E, v] = ie.useState(!0), S = ie.useMemo(() => t.type === "entry" ? `${t.worldName}::${t.entry.uid}::${t.entry.comment}` : "global", [t]);
  ie.useEffect(() => {
    const w = JSON.parse(localStorage.getItem(i0) || "[]");
    p(w), v(!1);
  }, []);
  const h = ie.useMemo(() => t.type === "entry" ? m.filter((w) => w.type === "entry" && w.targetEntryIdentifier === S).sort((w, k) => new Date(k.createdAt).getTime() - new Date(w.createdAt).getTime()) : m.filter((w) => w.type === "global").sort((w, k) => new Date(k.createdAt).getTime() - new Date(w.createdAt).getTime()), [m, t.type, S]), C = (w) => {
    localStorage.setItem(i0, JSON.stringify(w)), p(w);
  }, x = async () => {
    const w = await ul.Popup.show.input(
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
        const j = await Hk(
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
          messages: j,
          context: { mainContextTemplatePreset: k.mainContextTemplatePreset },
          profileId: k.profileId,
          promptEngineeringMode: k.defaultPromptEngineeringMode,
          isReadonly: !1
        };
        g(L);
      } catch (k) {
        const j = k instanceof Error ? k.message : String(k);
        console.error("Failed to create session:", k), ge("error", `Failed to create session: ${j}`);
      }
  }, O = (w) => {
    g(w);
  }, T = async (w) => {
    if (await ul.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const j = m.filter((L) => L.id !== w);
      C(j);
    }
  }, P = (w) => {
    const k = m.findIndex((L) => L.id === w.id), j = [...m];
    k !== -1 ? j[k] = w : j.push(w), C(j), g(w);
  }, l = (w) => {
    t.type === "entry" ? a({
      worldName: t.worldName,
      originalEntry: r,
      updatedEntry: w
    }) : a(w), s();
  };
  if (_) {
    const w = ul.extensionSettings.connectionManager?.profiles?.find(
      (L) => L.id === _.profileId
    ), k = f.messages, j = {
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
      j.messageIndexesBetween = { start: -1, end: -1 };
    else
      switch (k.type) {
        case "none":
          j.messageIndexesBetween = { start: -1, end: -1 };
          break;
        case "first":
          j.messageIndexesBetween = { start: 0, end: k.first ?? 10 };
          break;
        case "last": {
          const L = ul.chat?.length ?? 0, R = k.last ?? 10;
          j.messageIndexesBetween = {
            end: Math.max(0, L - 1),
            start: Math.max(0, L - R)
          };
          break;
        }
        case "range":
          k.range && (j.messageIndexesBetween = {
            start: k.range.start,
            end: k.range.end
          });
          break;
      }
    return /* @__PURE__ */ A.jsx(
      Uk,
      {
        session: _,
        onBack: () => g(null),
        onApply: l,
        onSessionUpdate: P,
        initialState: r,
        chatContextOptions: j
      }
    );
  }
  const y = t.type === "entry" ? `Revise Sessions for "${t.entry.comment}"` : "Global Revise Sessions";
  return /* @__PURE__ */ A.jsxs("div", { className: "revise-session-manager", children: [
    /* @__PURE__ */ A.jsx("div", { className: "popup_header", children: /* @__PURE__ */ A.jsx("h2", { children: y }) }),
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
}, qk = new sw.Converter(), Zk = ({
  initialWorldName: t,
  entry: r,
  allWorldNames: s,
  existingEntry: a,
  sessionRegexIds: u,
  onAdd: c,
  onRemove: f,
  onContinue: m,
  onUpdate: p,
  entriesGroupByWorldName: _,
  sessionForContext: g,
  contextToSend: E
}) => {
  const [v, S] = ie.useState(() => s.find((I) => I === t) ?? s[0] ?? ""), [h, C] = ie.useState(!1), [x, O] = ie.useState(!1), [T, P] = ie.useState(!1), [l, y] = ie.useState(!1), [w, k] = ie.useState(!1), [j, L] = ie.useState(!1), [R, D] = ie.useState(""), q = ie.useRef(null), G = ie.useMemo(
    () => !!_[v]?.find((ae) => ae.uid === r.uid && ae.comment === r.comment),
    [v, r.uid, r.comment, _]
  ), V = x || T, K = async () => {
    C(!0), await c(r, t, v);
  }, M = async () => {
    O(!0), await m({ worldName: t, entry: r, prompt: R, mode: "continue" }), O(!1);
  }, B = async () => {
    P(!0), await m({ worldName: t, entry: r, prompt: R, mode: "revise" }), P(!1);
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
            value: v,
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
        /* @__PURE__ */ A.jsx(Ee, { onClick: () => y(!0), disabled: V, className: "menu_button interactable edit", children: "Edit" }),
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
      /* @__PURE__ */ A.jsx("p", { className: "content", dangerouslySetInnerHTML: { __html: qk.makeHtml(r.content ?? "") } }),
      /* @__PURE__ */ A.jsx("div", { className: "continue-prompt-section", style: { marginTop: "10px" }, children: /* @__PURE__ */ A.jsx(
        qn,
        {
          value: R,
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
        content: /* @__PURE__ */ A.jsx(Aw, { ref: q, entry: r, initialRegexIds: u }),
        onComplete: (ae) => {
          if (ae && q.current) {
            const { updatedEntry: I, updatedRegexIds: X } = q.current.getFormData();
            p(t, r, I, X);
          }
          y(!1);
        }
      }
    ),
    w && a && /* @__PURE__ */ A.jsx(
      tr,
      {
        type: Lt.DISPLAY,
        content: /* @__PURE__ */ A.jsx(Cw, { originalEntry: a, newEntry: r }),
        onComplete: () => k(!1)
      }
    ),
    j && /* @__PURE__ */ A.jsx(
      tr,
      {
        type: Lt.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          A_,
          {
            target: { type: "entry", worldName: t, entry: r },
            initialState: r,
            onClose: () => L(!1),
            onApply: J,
            sessionForContext: g,
            allEntries: _,
            contextToSend: E
          }
        ),
        onComplete: () => L(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, s0 = ie.forwardRef(
  ({ entriesByWorldName: t, initialSelectedUids: r, title: s }, a) => {
    const [u, c] = ie.useState(""), [f, m] = ie.useState(() => {
      const v = /* @__PURE__ */ new Set();
      return Object.entries(r).forEach(([S, h]) => {
        h.forEach((C) => v.add(`${S}::${C}`));
      }), v;
    }), p = ie.useMemo(() => {
      if (!u)
        return t;
      const v = u.toLowerCase(), S = {};
      return Object.entries(t).forEach(([h, C]) => {
        const x = C.filter(
          (O) => O.comment.toLowerCase().includes(v) || h.toLowerCase().includes(v)
        );
        x.length > 0 && (S[h] = x);
      }), S;
    }, [u, t]);
    ie.useImperativeHandle(a, () => ({
      getSelection: () => {
        const v = {};
        return f.forEach((S) => {
          const [h, C] = S.split("::"), x = parseInt(C, 10);
          v[h] || (v[h] = []), v[h].push(x);
        }), v;
      }
    }));
    const _ = (v, S) => {
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
              onChange: () => _(v, h.uid)
            }
          ),
          h.comment || `Entry ${h.uid}`
        ] }) }, h.uid)) })
      ] }, v)) })
    ] });
  }
), Mt = SillyTavern.getContext(), Da = Mt, Zn = (t) => structuredClone(t ?? {}), kf = (t, r) => {
  for (const s of Object.keys(t))
    delete t[s];
  Object.assign(t, Zn(r));
}, Il = () => Mt.extensionSettings.connectionManager?.profiles ?? [];
function Gk() {
  return Il();
}
function Qf(t) {
  if (t)
    return Il().find((r) => r.id === t);
}
function eo(t) {
  return (t.api ? Mt.CONNECT_API_MAP[t.api] : void 0)?.selected === "openai" ? "openai" : "textgenerationwebui";
}
function Kf(t) {
  return t.api ? Mt.CONNECT_API_MAP[t.api]?.selected ?? "" : "";
}
function yh(t) {
  return Mt.getPresetManager(t);
}
function Af(t) {
  const r = Qf(t);
  if (!r) return;
  const s = eo(r), a = yh(s), u = r.preset ? a?.getCompletionPresetByName(r.preset) : void 0;
  return {
    profile: Zn(r),
    preset: Zn(u ?? {}),
    presetApiId: s,
    selectedApiGroup: Kf(r)
  };
}
async function Vk(t) {
  if (!t.id)
    throw new Error("Profile must have an id.");
  if (!t.name?.trim())
    throw new Error("Profile name cannot be empty.");
  const r = Il(), s = r.findIndex((u) => u.id === t.id);
  if (s === -1)
    throw new Error(`Profile not found: ${t.id}`);
  const a = Zn(r[s]);
  return r[s] = Zn(t), Mt.saveSettingsDebounced(), await Mt.eventSource.emit(Da.eventTypes.CONNECTION_PROFILE_UPDATED, a, r[s]), r[s];
}
async function $k(t, r, s, a) {
  const u = a.trim();
  if (!u)
    throw new Error("Profile name cannot be empty.");
  const c = Il();
  if (c.some((p) => p.name === u))
    throw new Error(`A profile named "${u}" already exists.`);
  const f = yh(s);
  if (!f?.savePreset)
    throw new Error(`Could not find the ${s} preset manager.`);
  await f.savePreset(u, Zn(r));
  const m = {
    ...Zn(t),
    id: Mt.uuidv4(),
    name: u,
    preset: u
  };
  return c.push(m), Mt.saveSettingsDebounced(), await Mt.eventSource.emit(Da.eventTypes.CONNECTION_PROFILE_CREATED, m), m;
}
async function Yk(t, r, s) {
  if (!t.preset?.trim())
    throw new Error("Profile must have a preset name before saving preset settings.");
  const a = yh(s);
  if (!a?.savePreset)
    throw new Error(`Could not find the ${s} preset manager.`);
  await a.savePreset(t.preset, Zn(r));
}
function Xk() {
  return {
    selectedProfile: Da.extensionSettings.connectionManager?.selectedProfile ?? null,
    chatCompletionSettings: Zn(Mt.chatCompletionSettings),
    textCompletionSettings: Zn(Mt.textCompletionSettings),
    powerUserSettings: Zn(Mt.powerUserSettings)
  };
}
async function Fk(t) {
  if (t)
    try {
      const r = t.selectedProfile, s = r ? !!Qf(r) : !1, a = Mt.SlashCommandParser?.commands?.profile;
      if (a)
        if (s && r) {
          const u = Qf(r);
          await a.callback({ await: "true", timeout: "2000" }, u?.name ?? "");
        } else
          await a.callback({ await: "false" }, "<None>");
      else Da.extensionSettings.connectionManager && (Da.extensionSettings.connectionManager.selectedProfile = s ? r : "");
      kf(Mt.chatCompletionSettings, t.chatCompletionSettings), kf(Mt.textCompletionSettings, t.textCompletionSettings), kf(Mt.powerUserSettings, t.powerUserSettings), Da.extensionSettings.connectionManager && (Da.extensionSettings.connectionManager.selectedProfile = s ? r : ""), Mt.saveSettingsDebounced();
    } catch (r) {
      console.error("[WorldInfoRecommender] Failed to restore SillyTavern API settings:", r), await ge("warning", "Failed to restore SillyTavern API settings after closing World Info Recommender.");
    }
}
const Pa = SillyTavern.getContext(), Ta = (t) => JSON.stringify(t ?? {}, null, 2), Na = (t, r) => {
  try {
    return JSON.parse(t);
  } catch (s) {
    throw new Error(`${r} is not valid JSON: ${s.message}`);
  }
}, Qk = () => Object.entries(Pa.CONNECT_API_MAP).filter(([, t]) => t?.selected === "openai" || t?.selected === "textgenerationwebui").sort(([t], [r]) => t.localeCompare(r)), jl = (t) => t.model ?? "", Kk = {
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
}, Jk = {
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
}, _h = (t) => t.api ? Pa.CONNECT_API_MAP[t.api] : void 0, x_ = (t) => {
  const r = _h(t);
  return r?.source === "openrouter" || r?.type === "openrouter";
}, Wk = (t) => {
  const r = _h(t);
  return r?.source === "openrouter" ? c2 : r?.type === "openrouter" ? v2 : [];
}, Jf = (t, r) => Wk(t).find((s) => s.id === r), eA = (t) => {
  const r = Number(t?.pricing?.prompt);
  if (!Number.isFinite(r)) return;
  if (r === 0) return "Free";
  const s = 1 / (1e3 * r);
  return `${(Math.round(s * 1e3) / 1e3).toFixed(0)}k t/$`;
}, o0 = (t, r) => {
  if (!t) return;
  const s = [t.name || t.id];
  t.context_length && s.push(`${t.context_length} ctx`);
  const a = eA(t);
  return a && s.push(a), s.length > 1 ? s.join(" | ") : r;
}, ll = (...t) => {
  for (const r of t) {
    const s = Number(r);
    if (Number.isFinite(s)) return s;
  }
}, tA = (t, r) => {
  const s = Jf(t, jl(t));
  if (!s?.pricing) return "Unknown";
  const a = Number(s.pricing.completion), u = Number(s.pricing.prompt);
  if (!Number.isFinite(a) || !Number.isFinite(u)) return "Unknown";
  const f = _h(t)?.source === "openrouter", m = f ? ll(r.openai_max_tokens, Pa.chatCompletionSettings.openai_max_tokens) : ll(r.genamt, $1), p = f ? ll(r.openai_max_context, Pa.chatCompletionSettings.openai_max_context) : ll(r.max_length, Y1);
  if (m === void 0 || p === void 0) return "Unknown";
  const _ = p - m, g = a * m + u * _;
  if (!Number.isFinite(g)) return "Unknown";
  let E = `$${g.toFixed(3)}`;
  return f && (r.enable_web_search ?? Pa.chatCompletionSettings.enable_web_search) && (E += " + $0.02"), E;
}, nA = (t) => {
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
}, rA = (t) => {
  const r = t.api ? Pa.CONNECT_API_MAP[t.api] : void 0;
  if (r) {
    if (r.selected === "openai") return Kk[r.source];
    if (r.selected === "textgenerationwebui") return Jk[r.type];
  }
}, aA = (t) => {
  const r = nA(rA(t)), s = jl(t), a = x_(t), u = a ? r.map((c) => ({
    ...c,
    label: o0(Jf(t, c.value), c.label) ?? c.label
  })) : r;
  if (s && !r.some((c) => c.value === s)) {
    const c = a && o0(Jf(t, s)) || `${s} (current)`;
    return [{ value: s, label: c }, ...u];
  }
  return u;
}, iA = (t) => {
  const r = t.filter((a) => !a.group), s = /* @__PURE__ */ new Map();
  for (const a of t) {
    if (!a.group) continue;
    const u = s.get(a.group) ?? [];
    u.push(a), s.set(a.group, u);
  }
  return { ungrouped: r, grouped: Array.from(s.entries()) };
}, sA = ({ profileId: t, onProfileSelected: r }) => {
  const [s, a] = ie.useState(() => Af(t)), [u, c] = ie.useState(() => Ta(s?.profile)), [f, m] = ie.useState(() => Ta(s?.preset)), [p, _] = ie.useState(!1), [g, E] = ie.useState(!1), [v, S] = ie.useState(0), h = ie.useMemo(() => Qk(), []), C = ie.useMemo(
    () => s ? aA(s.profile) : [],
    [s?.profile.api, s?.profile.model, v]
  ), x = ie.useMemo(() => iA(C), [C]), O = ie.useCallback((D) => {
    const q = Af(D);
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
        presetApiId: eo(V),
        selectedApiGroup: Kf(V)
      };
      return c(Ta(V)), K;
    });
  }, P = () => {
    if (s)
      try {
        const D = Na(u, "Profile JSON");
        a((q) => q && {
          ...q,
          profile: D,
          presetApiId: eo(D),
          selectedApiGroup: Kf(D)
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
  }, y = async () => {
    if (s) {
      E(!0);
      try {
        const D = Na(u, "Profile JSON"), q = await Vk(D), G = Af(q.id);
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
        await Yk(D, q, eo(D)), a((G) => G && { ...G, preset: q }), await ge("success", `Preset "${D.preset}" saved.`);
      } catch (D) {
        await ge("error", D.message);
      } finally {
        E(!1);
      }
    }
  }, k = async () => {
    if (!s) return;
    const D = s.profile.name ? `${s.profile.name} copy` : "New WIR Profile", q = await Pa.Popup.show.input("Create Connection Profile", "Profile name:", D);
    if (!(!q || typeof q != "string")) {
      E(!0);
      try {
        const G = Na(u, "Profile JSON"), V = Na(f, "Preset JSON"), K = await $k(G, V, eo(G), q);
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
  const j = s.selectedApiGroup === "textgenerationwebui", L = s.selectedApiGroup === "openai", R = x_(s.profile) ? tA(s.profile, s.preset) : void 0;
  return /* @__PURE__ */ A.jsxs("div", { className: "api-settings-panel", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "api-settings-header", children: [
      /* @__PURE__ */ A.jsxs("div", { children: [
        /* @__PURE__ */ A.jsx("h3", { children: "API Settings" }),
        /* @__PURE__ */ A.jsx("span", { children: L ? "Chat Completion" : j ? "Text Completion" : "Connection Profile" })
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
              value: jl(s.profile),
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
              value: jl(s.profile),
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
        R && /* @__PURE__ */ A.jsxs("small", { className: "openrouter-pricing-summary", children: [
          "Max prompt cost: ",
          R
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
      j && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
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
      /* @__PURE__ */ A.jsx(Ee, { className: "menu_button interactable", onClick: y, disabled: g, children: "Save Profile" }),
      /* @__PURE__ */ A.jsx(Ee, { className: "menu_button interactable", onClick: w, disabled: g, children: "Save Preset" }),
      /* @__PURE__ */ A.jsx(Ee, { className: "menu_button", onClick: () => _((D) => !D), children: p ? "Hide Raw JSON" : "Show Raw JSON" })
    ] }),
    p && /* @__PURE__ */ A.jsxs("div", { className: "api-settings-raw", children: [
      /* @__PURE__ */ A.jsxs("div", { children: [
        /* @__PURE__ */ A.jsxs("div", { className: "raw-heading", children: [
          /* @__PURE__ */ A.jsx("span", { children: "Profile JSON" }),
          /* @__PURE__ */ A.jsx(Ee, { className: "menu_button", onClick: P, children: "Load JSON" })
        ] }),
        /* @__PURE__ */ A.jsx(qn, { value: u, onChange: (D) => c(D.target.value), rows: 10 })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { children: [
        /* @__PURE__ */ A.jsxs("div", { className: "raw-heading", children: [
          /* @__PURE__ */ A.jsx("span", { children: "Preset JSON" }),
          /* @__PURE__ */ A.jsx(Ee, { className: "menu_button", onClick: l, children: "Load JSON" })
        ] }),
        /* @__PURE__ */ A.jsx(qn, { value: f, onChange: (D) => m(D.target.value), rows: 10 })
      ] })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "api-settings-footnote", children: [
      Gk().length,
      " profiles available. API keys are intentionally not shown; only secret IDs are editable."
    ] })
  ] });
};
_n.helpers.join || _n.registerHelper("join", function(t, r) {
  return Array.isArray(t) ? t.join(typeof r == "string" ? r : ", ") : "";
});
_n.helpers.is_not_empty || _n.registerHelper("is_not_empty", function(t, r) {
  return t ? Array.isArray(t) ? t.length > 0 ? r.fn(this) : r.inverse(this) : typeof t == "object" && Object.keys(t).length > 0 ? r.fn(this) : typeof t != "object" && !Array.isArray(t) ? r.fn(this) : r.inverse(this) : r.inverse(this);
});
const Un = SillyTavern.getContext(), cl = () => sn ? _0(sn) : Ft, oA = () => {
  const t = e_(), r = It.getSettings(), [s, a] = ie.useState({
    suggestedEntries: {},
    blackListedEntries: [],
    selectedWorldNames: [],
    selectedEntryUids: {},
    regexIds: {}
  }), [u, c] = ie.useState([]), [f, m] = ie.useState({}), [p, _] = ie.useState([]), [g, E] = ie.useState(!0), [v, S] = ie.useState(!1), [h, C] = ie.useState(!1), [x, O] = ie.useState(!1), [T, P] = ie.useState(!1), l = ie.useRef(null), y = ie.useRef(null), w = ie.useMemo(() => cl() ?? "_global", [sn, Ft]);
  ie.useEffect(() => {
    (async () => {
      E(!0), m({}), c([]), _([]);
      const te = cl(), ne = `worldInfoRecommend_${w}`, ue = JSON.parse(localStorage.getItem(ne) ?? "{}"), re = {
        suggestedEntries: ue.suggestedEntries ?? {},
        blackListedEntries: ue.blackListedEntries ?? [],
        selectedWorldNames: ue.selectedWorldNames ?? [],
        selectedEntryUids: ue.selectedEntryUids ?? {},
        regexIds: ue.regexIds ?? {}
      };
      let pe = {};
      if (te)
        if (Ft) {
          const me = await vl(["chat", "persona", "global"]);
          me && (pe = me);
          const fe = lv.find((we) => we.id === Ft);
          if (fe)
            for (const we of fe.members) {
              const Le = Un.characters.findIndex((We) => We.avatar === we);
              if (Le !== -1) {
                const We = await vl(["character"], !0, Le);
                We && (pe = { ...pe, ...We });
              }
            }
        } else
          pe = await vl(["all"], !0, sn);
      else
        for (const me of e2) {
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
            const we = new Set(pe[me].map((We) => We.uid)), Le = fe.filter((We) => we.has(We));
            Le.length > 0 && (Se[me] = Le);
          }
      }
      if (re.selectedEntryUids = Se, a(re), Ft) {
        const me = lv.find((fe) => fe.id === Ft);
        if (me?.generation_mode === 0) {
          const fe = me.members.map((we) => Un.characters.find((Le) => Le.avatar === we)).filter((we) => !!we);
          _(fe);
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
  }, j = (U, te) => {
    It.getSettings().contextToSend[U] = te, It.saveSettings(), t();
  }, L = ie.useCallback(
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
        const Se = { entries: Object.fromEntries(ue[te].map((fe) => [fe.uid, fe])) }, me = nh(te, Se);
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
  ), R = ie.useCallback(
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
        const ue = cl(), re = {
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
        const Se = U ? { worldName: U.worldName, entry: U.entry, mode: U.mode } : void 0, me = await F0({
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
              (Rn) => Rn.uid === U.entry.uid && Rn.comment === U.entry.comment
            );
            Fe !== -1 && (we[Le][Fe] = We);
          }
          return { ...fe, suggestedEntries: we };
        } : (fe) => {
          const we = structuredClone(fe.suggestedEntries);
          for (const [Le, We] of Object.entries(me)) {
            we[Le] || (we[Le] = []);
            for (const Fe of We)
              we[Le].some((Rn) => Rn.uid === Fe.uid && Rn.comment === Fe.comment) || we[Le].push(Fe);
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
            (je) => !(je.uid === U.uid && je.comment === U.comment)
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
        const fe = await L(me, Se, !0);
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
  }, G = async () => {
    await Un.Popup.show.confirm(
      "Reset",
      "Clear all suggestions and reset lorebook selection?"
    ) && (a((te) => ({
      ...te,
      suggestedEntries: {},
      blackListedEntries: [],
      selectedWorldNames: cl() ? [...u] : [],
      selectedEntryUids: {}
    })), ge("success", "Reset successful"));
  }, V = (U, te, ne) => {
    a((ue) => {
      const re = { ...ue };
      ne && (re.blackListedEntries = [...re.blackListedEntries, `${te} (${U.comment})`]);
      const pe = { ...re.suggestedEntries };
      return pe[te] && (pe[te] = pe[te].filter(
        (je) => !(je.uid === U.uid && je.comment === U.comment)
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
      const je = { ...re, suggestedEntries: pe };
      return ue && (je.regexIds = ue), je;
    });
  }, M = ie.useCallback(
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
        const je = `${ue}::${pe.uid}`, Se = te.get(je);
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
              K0,
              {
                initialSelectedProfileId: r.profileId,
                onChange: (U) => k("profileId", U?.id)
              },
              r.profileId || "no-profile"
            )
          ] }),
          /* @__PURE__ */ A.jsx("div", { className: "card", children: /* @__PURE__ */ A.jsx(
            sA,
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
                    onChange: (U) => j("stDescription", U.target.checked)
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
                    onChange: (U) => j("messages", {
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
                      onChange: (U) => j("messages", {
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
                      onChange: (U) => j("messages", {
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
                      onChange: (U) => j("messages", {
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
                      onChange: (U) => j("messages", {
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
                    onChange: (U) => j("charCard", U.target.checked)
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
                    onChange: (U) => j("authorNote", U.target.checked)
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
                    onChange: (U) => j("worldInfo", U.target.checked)
                  }
                ),
                " ",
                "World Info"
              ] }),
              /* @__PURE__ */ A.jsxs("div", { children: [
                /* @__PURE__ */ A.jsx("h4", { children: "Lorebooks to Include" }),
                /* @__PURE__ */ A.jsx(
                  W0,
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
                    onChange: (U) => j("suggestedEntries", U.target.checked)
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
              Bf,
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
                onClick: () => R(),
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
                disabled: v || Y.length === 0,
                className: "menu_button interactable",
                children: "Add All"
              }
            ),
            /* @__PURE__ */ A.jsxs(
              Ee,
              {
                onClick: () => P(!0),
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
                onClick: () => O(!0),
                disabled: v,
                className: "menu_button interactable",
                title: "Import existing entries to continue/revise them",
                children: "Import Entry"
              }
            ),
            /* @__PURE__ */ A.jsx(Ee, { onClick: G, disabled: v, className: "menu_button interactable", children: "Reset" })
          ] }),
          /* @__PURE__ */ A.jsxs("div", { children: [
            Y.length === 0 && /* @__PURE__ */ A.jsx("p", { children: "No suggestions yet. Send a prompt to get started!" }),
            Y.map(({ worldName: U, entry: te }) => /* @__PURE__ */ A.jsx(
              Zk,
              {
                initialWorldName: U,
                entry: te,
                allWorldNames: u,
                existingEntry: f[U]?.find((ne) => ne.uid === te.uid),
                sessionRegexIds: s.regexIds,
                onAdd: D,
                onRemove: V,
                onContinue: R,
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
          s0,
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
          s0,
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
          A_,
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
}, uA = () => {
  const [t, r] = ie.useState(!1), [s, a] = ie.useState(null), u = () => {
    a(Xk()), r(!0);
  }, c = () => r(!1);
  return window.openWorldInfoRecommenderPopup = u, t ? /* @__PURE__ */ A.jsx(
    tr,
    {
      content: /* @__PURE__ */ A.jsx(oA, {}),
      type: Lt.DISPLAY,
      onComplete: c,
      options: {
        large: !0,
        wide: !0,
        onClose: async () => {
          await Fk(s), a(null);
        }
      }
    }
  ) : null;
};
function lA() {
  function t(r) {
    if (!r)
      return null;
    const s = [], a = Array.isArray(r) ? r : [r];
    for (const u of a) {
      let c = u.trim();
      c.startsWith("[") && c.endsWith("]") && (c = c.slice(1, -1));
      let f = "", m = !1, p = "";
      for (let _ = 0; _ < c.length; _++) {
        const g = c[_];
        g === '"' || g === "'" ? _ > 0 && c[_ - 1] === "\\" ? f = f.slice(0, -1) + g : m ? g === p ? (m = !1, f.trim() && s.push(f.trim()), f = "", p = "") : f += g : (m = !0, p = g) : g === "," && !m ? (f.trim() && s.push(f.trim()), f = "") : f += g;
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
          enumProvider: YS
        }),
        Re.SlashCommandNamedArgument.fromProps({
          name: "lorebooks",
          description: "List of lorebook names to include as context (defaults to active).",
          typeList: [Re.ARGUMENT_TYPE.LIST],
          isRequired: !1,
          acceptsMultiple: !0,
          enumProvider: g2.worlds
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
          const _ = t(r.lorebooks);
          let g;
          if (_ !== null) {
            g = {};
            for (const B of _) {
              const J = await Re.loadWorldInfo(B);
              J && (g[B] = Object.values(J.entries));
            }
          } else
            g = await vl(["all"], !0, sn);
          const E = Object.keys(g);
          let v;
          if (_ !== null) {
            if (v = _.map((B) => B.trim()).filter((B) => E.includes(B) ? !0 : (a || ge("warning", `Specified lorebook "${B}" is not active or does not exist. Ignoring.`), !1)), v.length === 0)
              throw new Error("No valid lorebooks specified or active.");
          } else
            v = E;
          v.length === 0 && (a || ge("warning", "No active lorebooks found to use for context."));
          const S = t(r["allowed-ops"]), h = S !== null ? S : ["add", "update"], C = h.includes("add"), x = h.includes("update"), O = /* @__PURE__ */ new Set(), T = t(r["editable-entries"]);
          T !== null && T.forEach((B) => {
            O.add(B.trim());
          });
          const P = O.size > 0, l = t(r.context), y = { ...u.contextToSend };
          if (l !== null) {
            const B = l.map((J) => J.trim());
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
              const J = B.split(":")[1].split("-");
              y.messages.type = "range", y.messages.range = {
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
              const B = y.messages.last ?? 10, J = Re.chat?.length ?? 0;
              w.messageIndexesBetween = {
                end: Math.max(0, J - 1),
                start: Math.max(0, J - B)
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
          }, j = r["max-response"] ? parseInt(r["max-response"]) : void 0, L = structuredClone(u.prompts);
          y.stDescription || delete L.stDescription, (!y.worldInfo || v.length === 0) && delete L.currentLorebooks, delete L.suggestedLorebooks;
          const R = {
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
            maxResponseToken: j ?? u.maxResponseToken
          };
          a || ge("info", "Running World Info Recommender...");
          const D = await F0(R);
          if (Object.keys(D).length === 0)
            return a || ge("info", "AI returned no suggestions."), !0;
          let q = 0, G = 0, V = 0;
          const K = /* @__PURE__ */ new Set(), M = structuredClone(g);
          for (const [B, J] of Object.entries(D)) {
            let ae = B;
            if (!v.includes(ae))
              if (E.includes(ae)) {
                a || ge(
                  "warning",
                  `AI suggested entry for "${ae}", but it wasn't in the specified 'lorebooks'. Skipping ${J.length} entries.`
                ), V += J.length;
                continue;
              } else if (v.length > 0)
                ae = v[0], a || ge(
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
                const { status: ce } = $S(I, ae, M);
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
              J.forEach((I) => ae.entries[I.uid] = I), await Re.saveWorldInfo(B, ae), Re.reloadWorldInfoEditor(B, !0);
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
const cA = `<div class="worldInfoRecommender_settings">
    <div class="inline-drawer">
        <div class="inline-drawer-toggle inline-drawer-header">
            <b>World Info Recommender</b>
            <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
        </div>
        <div class="inline-drawer-content"></div>
    </div>
</div>
`, dl = SillyTavern.getContext();
async function dA() {
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", cA);
  const t = document.createElement("div"), r = document.querySelector(
    ".worldInfoRecommender_settings .inline-drawer-content"
  );
  r && (r.prepend(t), Ev.createRoot(t).render(
    /* @__PURE__ */ A.jsx(_l.StrictMode, { children: /* @__PURE__ */ A.jsx(nw, {}) })
  ));
  const s = '<div class="menu_button fa-brands fa-wpexplorer interactable worldInfoRecommender-icon" title="World Info Recommender"></div>', a = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], u = document.createElement("div");
  document.body.appendChild(u), Ev.createRoot(u).render(
    /* @__PURE__ */ A.jsx(_l.StrictMode, { children: /* @__PURE__ */ A.jsx(uA, {}) })
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
function fA() {
  return !(!dl.ConnectionManagerRequestService || !dl.getCharacterCardFields || !dl.getWorldInfoPrompt || !dl.reloadWorldInfoEditor);
}
fA() ? KS().then(() => {
  dA(), lA();
}) : ge("error", `[${Js}] Make sure ST is updated.`);
export {
  dA as init
};
