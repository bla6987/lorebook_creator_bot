import { renderStoryString as D1, persona_description_positions as rv } from "../../../../power-user.js";
import { parseMesExamples as z1, baseChatReplace as P1, chat_metadata as Ps, getMaxContextSize as L1, name1 as Ea, name2 as Fr, this_chid as sn, extension_prompt_types as Ca, depth_prompt_role_default as I1, depth_prompt_depth_default as B1 } from "../../../../../script.js";
import { createWorldInfoEntry as U1, world_info_include_names as H1, wi_anchor_position as q1, selected_world_info as Z1, METADATA_KEY as G1, world_info as V1, world_names as $1 } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as Y1, formatInstructModeSystemPrompt as X1 } from "../../../../instruct-mode.js";
import { appendFileContent as F1 } from "../../../../chats.js";
import { setOpenAIMessages as Q1, setOpenAIMessageExamples as K1, formatWorldInfo as J1, getPromptPosition as W1, getPromptRole as e2, prepareOpenAIMessages as t2 } from "../../../../openai.js";
import { metadata_keys as Ls } from "../../../../authors-note.js";
import { getGroupDepthPrompts as n2, selected_group as Ft, groups as av } from "../../../../group-chats.js";
import { runRegexScript as r2, getRegexedString as a2, regex_placement as iv } from "../../../regex/engine.js";
import { getCharaFilename as i2, removeFromArray as sv, runAfterAnimation as s2 } from "../../../../utils.js";
import { commonEnumProviders as o2 } from "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as Ai, fixToastrForDialogs as Yd } from "../../../../popup.js";
import ov from "../../../../../lib/dialog-polyfill.esm.js";
function Ff(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Xd = { exports: {} }, Is = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uv;
function u2() {
  if (uv) return Is;
  uv = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function s(i, u, c) {
    var f = null;
    if (c !== void 0 && (f = "" + c), u.key !== void 0 && (f = "" + u.key), "key" in u) {
      c = {};
      for (var m in u)
        m !== "key" && (c[m] = u[m]);
    } else c = u;
    return u = c.ref, {
      $$typeof: n,
      type: i,
      key: f,
      ref: u !== void 0 ? u : null,
      props: c
    };
  }
  return Is.Fragment = r, Is.jsx = s, Is.jsxs = s, Is;
}
var lv;
function l2() {
  return lv || (lv = 1, Xd.exports = u2()), Xd.exports;
}
var A = l2(), Fd = { exports: {} }, De = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cv;
function c2() {
  if (cv) return De;
  cv = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), f = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), _ = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), E = Symbol.iterator;
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
  function x(I, Y, ce) {
    this.props = I, this.context = Y, this.refs = C, this.updater = ce || S;
  }
  x.prototype.isReactComponent = {}, x.prototype.setState = function(I, Y) {
    if (typeof I != "object" && typeof I != "function" && I != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, I, Y, "setState");
  }, x.prototype.forceUpdate = function(I) {
    this.updater.enqueueForceUpdate(this, I, "forceUpdate");
  };
  function O() {
  }
  O.prototype = x.prototype;
  function N(I, Y, ce) {
    this.props = I, this.context = Y, this.refs = C, this.updater = ce || S;
  }
  var P = N.prototype = new O();
  P.constructor = N, h(P, x.prototype), P.isPureReactComponent = !0;
  var l = Array.isArray, y = { H: null, A: null, T: null, S: null, V: null }, w = Object.prototype.hasOwnProperty;
  function k(I, Y, ce, V, U, te) {
    return ce = te.ref, {
      $$typeof: n,
      type: I,
      key: Y,
      ref: ce !== void 0 ? ce : null,
      props: te
    };
  }
  function M(I, Y) {
    return k(
      I.type,
      Y,
      void 0,
      void 0,
      void 0,
      I.props
    );
  }
  function z(I) {
    return typeof I == "object" && I !== null && I.$$typeof === n;
  }
  function R(I) {
    var Y = { "=": "=0", ":": "=2" };
    return "$" + I.replace(/[=:]/g, function(ce) {
      return Y[ce];
    });
  }
  var L = /\/+/g;
  function Z(I, Y) {
    return typeof I == "object" && I !== null && I.key != null ? R("" + I.key) : Y.toString(36);
  }
  function F() {
  }
  function $(I) {
    switch (I.status) {
      case "fulfilled":
        return I.value;
      case "rejected":
        throw I.reason;
      default:
        switch (typeof I.status == "string" ? I.then(F, F) : (I.status = "pending", I.then(
          function(Y) {
            I.status === "pending" && (I.status = "fulfilled", I.value = Y);
          },
          function(Y) {
            I.status === "pending" && (I.status = "rejected", I.reason = Y);
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
  function W(I, Y, ce, V, U) {
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
                Y,
                ce,
                V,
                U
              );
          }
      }
    if (ne)
      return U = U(I), ne = V === "" ? "." + Z(I, 0) : V, l(U) ? (ce = "", ne != null && (ce = ne.replace(L, "$&/") + "/"), W(U, Y, ce, "", function(pe) {
        return pe;
      })) : U != null && (z(U) && (U = M(
        U,
        ce + (U.key == null || I && I.key === U.key ? "" : ("" + U.key).replace(
          L,
          "$&/"
        ) + "/") + ne
      )), Y.push(U)), 1;
    ne = 0;
    var ue = V === "" ? "." : V + ":";
    if (l(I))
      for (var re = 0; re < I.length; re++)
        V = I[re], te = ue + Z(V, re), ne += W(
          V,
          Y,
          ce,
          te,
          U
        );
    else if (re = v(I), typeof re == "function")
      for (I = re.call(I), re = 0; !(V = I.next()).done; )
        V = V.value, te = ue + Z(V, re++), ne += W(
          V,
          Y,
          ce,
          te,
          U
        );
    else if (te === "object") {
      if (typeof I.then == "function")
        return W(
          $(I),
          Y,
          ce,
          V,
          U
        );
      throw Y = String(I), Error(
        "Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(I).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ne;
  }
  function j(I, Y, ce) {
    if (I == null) return I;
    var V = [], U = 0;
    return W(I, V, "", "", function(te) {
      return Y.call(ce, te, U++);
    }), V;
  }
  function B(I) {
    if (I._status === -1) {
      var Y = I._result;
      Y = Y(), Y.then(
        function(ce) {
          (I._status === 0 || I._status === -1) && (I._status = 1, I._result = ce);
        },
        function(ce) {
          (I._status === 0 || I._status === -1) && (I._status = 2, I._result = ce);
        }
      ), I._status === -1 && (I._status = 0, I._result = Y);
    }
    if (I._status === 1) return I._result.default;
    throw I._result;
  }
  var K = typeof reportError == "function" ? reportError : function(I) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var Y = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof I == "object" && I !== null && typeof I.message == "string" ? String(I.message) : String(I),
        error: I
      });
      if (!window.dispatchEvent(Y)) return;
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
    forEach: function(I, Y, ce) {
      j(
        I,
        function() {
          Y.apply(this, arguments);
        },
        ce
      );
    },
    count: function(I) {
      var Y = 0;
      return j(I, function() {
        Y++;
      }), Y;
    },
    toArray: function(I) {
      return j(I, function(Y) {
        return Y;
      }) || [];
    },
    only: function(I) {
      if (!z(I))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return I;
    }
  }, De.Component = x, De.Fragment = s, De.Profiler = u, De.PureComponent = N, De.StrictMode = i, De.Suspense = p, De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = y, De.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(I) {
      return y.H.useMemoCache(I);
    }
  }, De.cache = function(I) {
    return function() {
      return I.apply(null, arguments);
    };
  }, De.cloneElement = function(I, Y, ce) {
    if (I == null)
      throw Error(
        "The argument must be a React element, but you passed " + I + "."
      );
    var V = h({}, I.props), U = I.key, te = void 0;
    if (Y != null)
      for (ne in Y.ref !== void 0 && (te = void 0), Y.key !== void 0 && (U = "" + Y.key), Y)
        !w.call(Y, ne) || ne === "key" || ne === "__self" || ne === "__source" || ne === "ref" && Y.ref === void 0 || (V[ne] = Y[ne]);
    var ne = arguments.length - 2;
    if (ne === 1) V.children = ce;
    else if (1 < ne) {
      for (var ue = Array(ne), re = 0; re < ne; re++)
        ue[re] = arguments[re + 2];
      V.children = ue;
    }
    return k(I.type, U, void 0, void 0, te, V);
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
  }, De.createElement = function(I, Y, ce) {
    var V, U = {}, te = null;
    if (Y != null)
      for (V in Y.key !== void 0 && (te = "" + Y.key), Y)
        w.call(Y, V) && V !== "key" && V !== "__self" && V !== "__source" && (U[V] = Y[V]);
    var ne = arguments.length - 2;
    if (ne === 1) U.children = ce;
    else if (1 < ne) {
      for (var ue = Array(ne), re = 0; re < ne; re++)
        ue[re] = arguments[re + 2];
      U.children = ue;
    }
    if (I && I.defaultProps)
      for (V in ne = I.defaultProps, ne)
        U[V] === void 0 && (U[V] = ne[V]);
    return k(I, te, void 0, void 0, null, U);
  }, De.createRef = function() {
    return { current: null };
  }, De.forwardRef = function(I) {
    return { $$typeof: m, render: I };
  }, De.isValidElement = z, De.lazy = function(I) {
    return {
      $$typeof: g,
      _payload: { _status: -1, _result: I },
      _init: B
    };
  }, De.memo = function(I, Y) {
    return {
      $$typeof: _,
      type: I,
      compare: Y === void 0 ? null : Y
    };
  }, De.startTransition = function(I) {
    var Y = y.T, ce = {};
    y.T = ce;
    try {
      var V = I(), U = y.S;
      U !== null && U(ce, V), typeof V == "object" && V !== null && typeof V.then == "function" && V.then(ae, K);
    } catch (te) {
      K(te);
    } finally {
      y.T = Y;
    }
  }, De.unstable_useCacheRefresh = function() {
    return y.H.useCacheRefresh();
  }, De.use = function(I) {
    return y.H.use(I);
  }, De.useActionState = function(I, Y, ce) {
    return y.H.useActionState(I, Y, ce);
  }, De.useCallback = function(I, Y) {
    return y.H.useCallback(I, Y);
  }, De.useContext = function(I) {
    return y.H.useContext(I);
  }, De.useDebugValue = function() {
  }, De.useDeferredValue = function(I, Y) {
    return y.H.useDeferredValue(I, Y);
  }, De.useEffect = function(I, Y, ce) {
    var V = y.H;
    if (typeof ce == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return V.useEffect(I, Y);
  }, De.useId = function() {
    return y.H.useId();
  }, De.useImperativeHandle = function(I, Y, ce) {
    return y.H.useImperativeHandle(I, Y, ce);
  }, De.useInsertionEffect = function(I, Y) {
    return y.H.useInsertionEffect(I, Y);
  }, De.useLayoutEffect = function(I, Y) {
    return y.H.useLayoutEffect(I, Y);
  }, De.useMemo = function(I, Y) {
    return y.H.useMemo(I, Y);
  }, De.useOptimistic = function(I, Y) {
    return y.H.useOptimistic(I, Y);
  }, De.useReducer = function(I, Y, ce) {
    return y.H.useReducer(I, Y, ce);
  }, De.useRef = function(I) {
    return y.H.useRef(I);
  }, De.useState = function(I) {
    return y.H.useState(I);
  }, De.useSyncExternalStore = function(I, Y, ce) {
    return y.H.useSyncExternalStore(
      I,
      Y,
      ce
    );
  }, De.useTransition = function() {
    return y.H.useTransition();
  }, De.version = "19.1.1", De;
}
var dv;
function Qf() {
  return dv || (dv = 1, Fd.exports = c2()), Fd.exports;
}
var ie = Qf();
const vl = /* @__PURE__ */ Ff(ie);
var Qd = { exports: {} }, Bs = {}, Kd = { exports: {} }, Jd = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fv;
function d2() {
  return fv || (fv = 1, (function(n) {
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
    function i(j) {
      if (j.length === 0) return null;
      var B = j[0], K = j.pop();
      if (K !== B) {
        j[0] = K;
        e: for (var ae = 0, I = j.length, Y = I >>> 1; ae < Y; ) {
          var ce = 2 * (ae + 1) - 1, V = j[ce], U = ce + 1, te = j[U];
          if (0 > u(V, K))
            U < I && 0 > u(te, V) ? (j[ae] = te, j[U] = K, ae = U) : (j[ae] = V, j[ce] = K, ae = ce);
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
    var p = [], _ = [], g = 1, E = null, v = 3, S = !1, h = !1, C = !1, x = !1, O = typeof setTimeout == "function" ? setTimeout : null, N = typeof clearTimeout == "function" ? clearTimeout : null, P = typeof setImmediate < "u" ? setImmediate : null;
    function l(j) {
      for (var B = s(_); B !== null; ) {
        if (B.callback === null) i(_);
        else if (B.startTime <= j)
          i(_), B.sortIndex = B.expirationTime, r(p, B);
        else break;
        B = s(_);
      }
    }
    function y(j) {
      if (C = !1, l(j), !h)
        if (s(p) !== null)
          h = !0, w || (w = !0, Z());
        else {
          var B = s(_);
          B !== null && W(y, B.startTime - j);
        }
    }
    var w = !1, k = -1, M = 5, z = -1;
    function R() {
      return x ? !0 : !(n.unstable_now() - z < M);
    }
    function L() {
      if (x = !1, w) {
        var j = n.unstable_now();
        z = j;
        var B = !0;
        try {
          e: {
            h = !1, C && (C = !1, N(k), k = -1), S = !0;
            var K = v;
            try {
              t: {
                for (l(j), E = s(p); E !== null && !(E.expirationTime > j && R()); ) {
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
                    E === s(p) && i(p), l(j);
                  } else i(p);
                  E = s(p);
                }
                if (E !== null) B = !0;
                else {
                  var Y = s(_);
                  Y !== null && W(
                    y,
                    Y.startTime - j
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
          B ? Z() : w = !1;
        }
      }
    }
    var Z;
    if (typeof P == "function")
      Z = function() {
        P(L);
      };
    else if (typeof MessageChannel < "u") {
      var F = new MessageChannel(), $ = F.port2;
      F.port1.onmessage = L, Z = function() {
        $.postMessage(null);
      };
    } else
      Z = function() {
        O(L, 0);
      };
    function W(j, B) {
      k = O(function() {
        j(n.unstable_now());
      }, B);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(j) {
      j.callback = null;
    }, n.unstable_forceFrameRate = function(j) {
      0 > j || 125 < j ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : M = 0 < j ? Math.floor(1e3 / j) : 5;
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
      }, K > ae ? (j.sortIndex = K, r(_, j), s(p) === null && j === s(_) && (C ? (N(k), k = -1) : C = !0, W(y, K - ae))) : (j.sortIndex = I, r(p, j), h || S || (h = !0, w || (w = !0, Z()))), j;
    }, n.unstable_shouldYield = R, n.unstable_wrapCallback = function(j) {
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
var hv;
function f2() {
  return hv || (hv = 1, Kd.exports = d2()), Kd.exports;
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
var pv;
function h2() {
  if (pv) return Ht;
  pv = 1;
  var n = Qf();
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
  var i = {
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
  var f = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(p, _) {
    if (p === "font") return "";
    if (typeof _ == "string")
      return _ === "use-credentials" ? _ : "";
  }
  return Ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, Ht.createPortal = function(p, _) {
    var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!_ || _.nodeType !== 1 && _.nodeType !== 9 && _.nodeType !== 11)
      throw Error(r(299));
    return c(p, _, null, g);
  }, Ht.flushSync = function(p) {
    var _ = f.T, g = i.p;
    try {
      if (f.T = null, i.p = 2, p) return p();
    } finally {
      f.T = _, i.p = g, i.d.f();
    }
  }, Ht.preconnect = function(p, _) {
    typeof p == "string" && (_ ? (_ = _.crossOrigin, _ = typeof _ == "string" ? _ === "use-credentials" ? _ : "" : void 0) : _ = null, i.d.C(p, _));
  }, Ht.prefetchDNS = function(p) {
    typeof p == "string" && i.d.D(p);
  }, Ht.preinit = function(p, _) {
    if (typeof p == "string" && _ && typeof _.as == "string") {
      var g = _.as, E = m(g, _.crossOrigin), v = typeof _.integrity == "string" ? _.integrity : void 0, S = typeof _.fetchPriority == "string" ? _.fetchPriority : void 0;
      g === "style" ? i.d.S(
        p,
        typeof _.precedence == "string" ? _.precedence : void 0,
        {
          crossOrigin: E,
          integrity: v,
          fetchPriority: S
        }
      ) : g === "script" && i.d.X(p, {
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
          i.d.M(p, {
            crossOrigin: g,
            integrity: typeof _.integrity == "string" ? _.integrity : void 0,
            nonce: typeof _.nonce == "string" ? _.nonce : void 0
          });
        }
      } else _ == null && i.d.M(p);
  }, Ht.preload = function(p, _) {
    if (typeof p == "string" && typeof _ == "object" && _ !== null && typeof _.as == "string") {
      var g = _.as, E = m(g, _.crossOrigin);
      i.d.L(p, g, {
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
        i.d.m(p, {
          as: typeof _.as == "string" && _.as !== "script" ? _.as : void 0,
          crossOrigin: g,
          integrity: typeof _.integrity == "string" ? _.integrity : void 0
        });
      } else i.d.m(p);
  }, Ht.requestFormReset = function(p) {
    i.d.r(p);
  }, Ht.unstable_batchedUpdates = function(p, _) {
    return p(_);
  }, Ht.useFormState = function(p, _, g) {
    return f.H.useFormState(p, _, g);
  }, Ht.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, Ht.version = "19.1.1", Ht;
}
var mv;
function n0() {
  if (mv) return Wd.exports;
  mv = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Wd.exports = h2(), Wd.exports;
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
var gv;
function p2() {
  if (gv) return Bs;
  gv = 1;
  var n = f2(), r = Qf(), s = n0();
  function i(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function c(e) {
    var t = e, a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? a : null;
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
      throw Error(i(188));
  }
  function p(e) {
    var t = e.alternate;
    if (!t) {
      if (t = c(e), t === null) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var a = e, o = t; ; ) {
      var d = a.return;
      if (d === null) break;
      var b = d.alternate;
      if (b === null) {
        if (o = d.return, o !== null) {
          a = o;
          continue;
        }
        break;
      }
      if (d.child === b.child) {
        for (b = d.child; b; ) {
          if (b === a) return m(d), e;
          if (b === o) return m(d), t;
          b = b.sibling;
        }
        throw Error(i(188));
      }
      if (a.return !== o.return) a = d, o = b;
      else {
        for (var T = !1, D = d.child; D; ) {
          if (D === a) {
            T = !0, a = d, o = b;
            break;
          }
          if (D === o) {
            T = !0, o = d, a = b;
            break;
          }
          D = D.sibling;
        }
        if (!T) {
          for (D = b.child; D; ) {
            if (D === a) {
              T = !0, a = b, o = d;
              break;
            }
            if (D === o) {
              T = !0, o = b, a = d;
              break;
            }
            D = D.sibling;
          }
          if (!T) throw Error(i(189));
        }
      }
      if (a.alternate !== o) throw Error(i(190));
    }
    if (a.tag !== 3) throw Error(i(188));
    return a.stateNode.current === a ? e : t;
  }
  function _(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = _(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var g = Object.assign, E = Symbol.for("react.element"), v = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), N = Symbol.for("react.consumer"), P = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), z = Symbol.for("react.activity"), R = Symbol.for("react.memo_cache_sentinel"), L = Symbol.iterator;
  function Z(e) {
    return e === null || typeof e != "object" ? null : (e = L && e[L] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var F = Symbol.for("react.client.reference");
  function $(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === F ? null : e.displayName || e.name || null;
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
      case z:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case S:
          return "Portal";
        case P:
          return (e.displayName || "Context") + ".Provider";
        case N:
          return (e._context.displayName || "Context") + ".Consumer";
        case l:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case k:
          return t = e.displayName || null, t !== null ? t : $(e.type) || "Memo";
        case M:
          t = e._payload, e = e._init;
          try {
            return $(e(t));
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
  function Y(e) {
    return { current: e };
  }
  function ce(e) {
    0 > I || (e.current = ae[I], ae[I] = null, I--);
  }
  function V(e, t) {
    I++, ae[I] = e.current, e.current = t;
  }
  var U = Y(null), te = Y(null), ne = Y(null), ue = Y(null);
  function re(e, t) {
    switch (V(ne, t), V(te, e), V(U, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Mg(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Mg(t), e = jg(t, e);
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
    ce(U), V(U, e);
  }
  function pe() {
    ce(U), ce(te), ce(ne);
  }
  function je(e) {
    e.memoizedState !== null && V(ue, e);
    var t = U.current, a = jg(t, e.type);
    t !== a && (V(te, e), V(U, a));
  }
  function Se(e) {
    te.current === e && (ce(U), ce(te)), ue.current === e && (ce(ue), Ms._currentValue = K);
  }
  var me = Object.prototype.hasOwnProperty, fe = n.unstable_scheduleCallback, we = n.unstable_cancelCallback, Le = n.unstable_shouldYield, We = n.unstable_requestPaint, Fe = n.unstable_now, Rn = n.unstable_getCurrentPriorityLevel, dt = n.unstable_ImmediatePriority, ye = n.unstable_UserBlockingPriority, _e = n.unstable_NormalPriority, qe = n.unstable_LowPriority, Ze = n.unstable_IdlePriority, et = n.log, Vn = n.unstable_setDisableYieldValue, Dn = null, mt = null;
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
  function Vt(e, t, a) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var d = 0, b = e.suspendedLanes, T = e.pingedLanes;
    e = e.warmLanes;
    var D = o & 134217727;
    return D !== 0 ? (o = D & ~b, o !== 0 ? d = Sn(o) : (T &= D, T !== 0 ? d = Sn(T) : a || (a = D & ~e, a !== 0 && (d = Sn(a))))) : (D = o & ~b, D !== 0 ? d = Sn(D) : T !== 0 ? d = Sn(T) : a || (a = o & ~e, a !== 0 && (d = Sn(a)))), d === 0 ? 0 : t !== 0 && t !== d && (t & b) === 0 && (b = d & -d, a = t & -t, b >= a || b === 32 && (a & 4194048) !== 0) ? t : d;
  }
  function Qt(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function po(e, t) {
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
  function mh() {
    var e = Yn;
    return Yn <<= 1, (Yn & 62914560) === 0 && (Yn = 4194304), e;
  }
  function Pl(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function Hi(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function w_(e, t, a, o, d, b) {
    var T = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var D = e.entanglements, H = e.expirationTimes, Q = e.hiddenUpdates;
    for (a = T & ~a; 0 < a; ) {
      var se = 31 - Gt(a), le = 1 << se;
      D[se] = 0, H[se] = -1;
      var J = Q[se];
      if (J !== null)
        for (Q[se] = null, se = 0; se < J.length; se++) {
          var ee = J[se];
          ee !== null && (ee.lane &= -536870913);
        }
      a &= ~le;
    }
    o !== 0 && gh(e, o, 0), b !== 0 && d === 0 && e.tag !== 0 && (e.suspendedLanes |= b & ~(T & ~t));
  }
  function gh(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var o = 31 - Gt(t);
    e.entangledLanes |= t, e.entanglements[o] = e.entanglements[o] | 1073741824 | a & 4194090;
  }
  function vh(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var o = 31 - Gt(a), d = 1 << o;
      d & t | e[o] & t && (e[o] |= t), a &= ~d;
    }
  }
  function Ll(e) {
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
  function yh() {
    var e = B.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Kg(e.type));
  }
  function E_(e, t) {
    var a = B.p;
    try {
      return B.p = e, t();
    } finally {
      B.p = a;
    }
  }
  var Ar = Math.random().toString(36).slice(2), Bt = "__reactFiber$" + Ar, Kt = "__reactProps$" + Ar, Ha = "__reactContainer$" + Ar, Bl = "__reactEvents$" + Ar, C_ = "__reactListeners$" + Ar, k_ = "__reactHandles$" + Ar, _h = "__reactResources$" + Ar, qi = "__reactMarker$" + Ar;
  function Ul(e) {
    delete e[Bt], delete e[Kt], delete e[Bl], delete e[C_], delete e[k_];
  }
  function qa(e) {
    var t = e[Bt];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Ha] || a[Bt]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = Pg(e); e !== null; ) {
            if (a = e[Bt]) return a;
            e = Pg(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
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
  function Zi(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Ga(e) {
    var t = e[_h];
    return t || (t = e[_h] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function xt(e) {
    e[qi] = !0;
  }
  var bh = /* @__PURE__ */ new Set(), Sh = {};
  function sa(e, t) {
    Va(e, t), Va(e + "Capture", t);
  }
  function Va(e, t) {
    for (Sh[e] = t, e = 0; e < t.length; e++)
      bh.add(t[e]);
  }
  var A_ = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), wh = {}, Eh = {};
  function x_(e) {
    return me.call(Eh, e) ? !0 : me.call(wh, e) ? !1 : A_.test(e) ? Eh[e] = !0 : (wh[e] = !0, !1);
  }
  function mo(e, t, a) {
    if (x_(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
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
        e.setAttribute(t, "" + a);
      }
  }
  function go(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function ir(e, t, a, o) {
    if (o === null) e.removeAttribute(a);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + o);
    }
  }
  var Hl, Ch;
  function $a(e) {
    if (Hl === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Hl = t && t[1] || "", Ch = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Hl + e + Ch;
  }
  var ql = !1;
  function Zl(e, t) {
    if (!e || ql) return "";
    ql = !0;
    var a = Error.prepareStackTrace;
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
      var b = o.DetermineComponentFrameRoot(), T = b[0], D = b[1];
      if (T && D) {
        var H = T.split(`
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
      ql = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? $a(a) : "";
  }
  function T_(e) {
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
  function kh(e) {
    try {
      var t = "";
      do
        t += T_(e), e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
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
  function Ah(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function N_(e) {
    var t = Ah(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    ), o = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var d = a.get, b = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return d.call(this);
        },
        set: function(T) {
          o = "" + T, b.call(this, T);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return o;
        },
        setValue: function(T) {
          o = "" + T;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function vo(e) {
    e._valueTracker || (e._valueTracker = N_(e));
  }
  function xh(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), o = "";
    return e && (o = Ah(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== a ? (t.setValue(e), !0) : !1;
  }
  function yo(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var O_ = /[\n"\\]/g;
  function En(e) {
    return e.replace(
      O_,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Gl(e, t, a, o, d, b, T, D) {
    e.name = "", T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" ? e.type = T : e.removeAttribute("type"), t != null ? T === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + wn(t)) : e.value !== "" + wn(t) && (e.value = "" + wn(t)) : T !== "submit" && T !== "reset" || e.removeAttribute("value"), t != null ? Vl(e, T, wn(t)) : a != null ? Vl(e, T, wn(a)) : o != null && e.removeAttribute("value"), d == null && b != null && (e.defaultChecked = !!b), d != null && (e.checked = d && typeof d != "function" && typeof d != "symbol"), D != null && typeof D != "function" && typeof D != "symbol" && typeof D != "boolean" ? e.name = "" + wn(D) : e.removeAttribute("name");
  }
  function Th(e, t, a, o, d, b, T, D) {
    if (b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" && (e.type = b), t != null || a != null) {
      if (!(b !== "submit" && b !== "reset" || t != null))
        return;
      a = a != null ? "" + wn(a) : "", t = t != null ? "" + wn(t) : a, D || t === e.value || (e.value = t), e.defaultValue = t;
    }
    o = o ?? d, o = typeof o != "function" && typeof o != "symbol" && !!o, e.checked = D ? e.checked : !!o, e.defaultChecked = !!o, T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" && (e.name = T);
  }
  function Vl(e, t, a) {
    t === "number" && yo(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Ya(e, t, a, o) {
    if (e = e.options, t) {
      t = {};
      for (var d = 0; d < a.length; d++)
        t["$" + a[d]] = !0;
      for (a = 0; a < e.length; a++)
        d = t.hasOwnProperty("$" + e[a].value), e[a].selected !== d && (e[a].selected = d), d && o && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + wn(a), t = null, d = 0; d < e.length; d++) {
        if (e[d].value === a) {
          e[d].selected = !0, o && (e[d].defaultSelected = !0);
          return;
        }
        t !== null || e[d].disabled || (t = e[d]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Nh(e, t, a) {
    if (t != null && (t = "" + wn(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + wn(a) : "";
  }
  function Oh(e, t, a, o) {
    if (t == null) {
      if (o != null) {
        if (a != null) throw Error(i(92));
        if (W(o)) {
          if (1 < o.length) throw Error(i(93));
          o = o[0];
        }
        a = o;
      }
      a == null && (a = ""), t = a;
    }
    a = wn(t), e.defaultValue = a, o = e.textContent, o === a && o !== "" && o !== null && (e.value = o);
  }
  function Xa(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var M_ = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Mh(e, t, a) {
    var o = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? o ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : o ? e.setProperty(t, a) : typeof a != "number" || a === 0 || M_.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function jh(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(i(62));
    if (e = e.style, a != null) {
      for (var o in a)
        !a.hasOwnProperty(o) || t != null && t.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e.setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "");
      for (var d in t)
        o = t[d], t.hasOwnProperty(d) && a[d] !== o && Mh(e, d, o);
    } else
      for (var b in t)
        t.hasOwnProperty(b) && Mh(e, b, t[b]);
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
  var j_ = /* @__PURE__ */ new Map([
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
  ]), R_ = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function _o(e) {
    return R_.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Yl = null;
  function Xl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Fa = null, Qa = null;
  function Rh(e) {
    var t = Za(e);
    if (t && (e = t.stateNode)) {
      var a = e[Kt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Gl(
            e,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), t = a.name, a.type === "radio" && t != null) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + En(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var o = a[t];
              if (o !== e && o.form === e.form) {
                var d = o[Kt] || null;
                if (!d) throw Error(i(90));
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
            for (t = 0; t < a.length; t++)
              o = a[t], o.form === e.form && xh(o);
          }
          break e;
        case "textarea":
          Nh(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && Ya(e, !!a.multiple, t, !1);
      }
    }
  }
  var Fl = !1;
  function Dh(e, t, a) {
    if (Fl) return e(t, a);
    Fl = !0;
    try {
      var o = e(t);
      return o;
    } finally {
      if (Fl = !1, (Fa !== null || Qa !== null) && (au(), Fa && (t = Fa, e = Qa, Qa = Fa = null, Rh(t), e)))
        for (t = 0; t < e.length; t++) Rh(e[t]);
    }
  }
  function Gi(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var o = a[Kt] || null;
    if (o === null) return null;
    a = o[t];
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
    if (a && typeof a != "function")
      throw Error(
        i(231, t, typeof a)
      );
    return a;
  }
  var sr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ql = !1;
  if (sr)
    try {
      var Vi = {};
      Object.defineProperty(Vi, "passive", {
        get: function() {
          Ql = !0;
        }
      }), window.addEventListener("test", Vi, Vi), window.removeEventListener("test", Vi, Vi);
    } catch {
      Ql = !1;
    }
  var xr = null, Kl = null, bo = null;
  function zh() {
    if (bo) return bo;
    var e, t = Kl, a = t.length, o, d = "value" in xr ? xr.value : xr.textContent, b = d.length;
    for (e = 0; e < a && t[e] === d[e]; e++) ;
    var T = a - e;
    for (o = 1; o <= T && t[a - o] === d[b - o]; o++) ;
    return bo = d.slice(e, 1 < o ? 1 - o : void 0);
  }
  function So(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function wo() {
    return !0;
  }
  function Ph() {
    return !1;
  }
  function Jt(e) {
    function t(a, o, d, b, T) {
      this._reactName = a, this._targetInst = d, this.type = o, this.nativeEvent = b, this.target = T, this.currentTarget = null;
      for (var D in e)
        e.hasOwnProperty(D) && (a = e[D], this[D] = a ? a(b) : b[D]);
      return this.isDefaultPrevented = (b.defaultPrevented != null ? b.defaultPrevented : b.returnValue === !1) ? wo : Ph, this.isPropagationStopped = Ph, this;
    }
    return g(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = wo);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = wo);
      },
      persist: function() {
      },
      isPersistent: wo
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
  }, Eo = Jt(oa), $i = g({}, oa, { view: 0, detail: 0 }), D_ = Jt($i), Jl, Wl, Yi, Co = g({}, $i, {
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
      return "movementX" in e ? e.movementX : (e !== Yi && (Yi && e.type === "mousemove" ? (Jl = e.screenX - Yi.screenX, Wl = e.screenY - Yi.screenY) : Wl = Jl = 0, Yi = e), Jl);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Wl;
    }
  }), Lh = Jt(Co), z_ = g({}, Co, { dataTransfer: 0 }), P_ = Jt(z_), L_ = g({}, $i, { relatedTarget: 0 }), ec = Jt(L_), I_ = g({}, oa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), B_ = Jt(I_), U_ = g({}, oa, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), H_ = Jt(U_), q_ = g({}, oa, { data: 0 }), Ih = Jt(q_), Z_ = {
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
  }, G_ = {
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
  }, V_ = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function $_(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = V_[e]) ? !!t[e] : !1;
  }
  function tc() {
    return $_;
  }
  var Y_ = g({}, $i, {
    key: function(e) {
      if (e.key) {
        var t = Z_[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = So(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? G_[e.keyCode] || "Unidentified" : "";
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
      return e.type === "keypress" ? So(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? So(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), X_ = Jt(Y_), F_ = g({}, Co, {
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
  }), Bh = Jt(F_), Q_ = g({}, $i, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: tc
  }), K_ = Jt(Q_), J_ = g({}, oa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), W_ = Jt(J_), eb = g({}, Co, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), tb = Jt(eb), nb = g({}, oa, {
    newState: 0,
    oldState: 0
  }), rb = Jt(nb), ab = [9, 13, 27, 32], nc = sr && "CompositionEvent" in window, Xi = null;
  sr && "documentMode" in document && (Xi = document.documentMode);
  var ib = sr && "TextEvent" in window && !Xi, Uh = sr && (!nc || Xi && 8 < Xi && 11 >= Xi), Hh = " ", qh = !1;
  function Zh(e, t) {
    switch (e) {
      case "keyup":
        return ab.indexOf(t.keyCode) !== -1;
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
  function Gh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ka = !1;
  function sb(e, t) {
    switch (e) {
      case "compositionend":
        return Gh(t);
      case "keypress":
        return t.which !== 32 ? null : (qh = !0, Hh);
      case "textInput":
        return e = t.data, e === Hh && qh ? null : e;
      default:
        return null;
    }
  }
  function ob(e, t) {
    if (Ka)
      return e === "compositionend" || !nc && Zh(e, t) ? (e = zh(), bo = Kl = xr = null, Ka = !1, e) : null;
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
        return Uh && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ub = {
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
  function Vh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ub[e.type] : t === "textarea";
  }
  function $h(e, t, a, o) {
    Fa ? Qa ? Qa.push(o) : Qa = [o] : Fa = o, t = cu(t, "onChange"), 0 < t.length && (a = new Eo(
      "onChange",
      "change",
      null,
      a,
      o
    ), e.push({ event: a, listeners: t }));
  }
  var Fi = null, Qi = null;
  function lb(e) {
    Ag(e, 0);
  }
  function ko(e) {
    var t = Zi(e);
    if (xh(t)) return e;
  }
  function Yh(e, t) {
    if (e === "change") return t;
  }
  var Xh = !1;
  if (sr) {
    var rc;
    if (sr) {
      var ac = "oninput" in document;
      if (!ac) {
        var Fh = document.createElement("div");
        Fh.setAttribute("oninput", "return;"), ac = typeof Fh.oninput == "function";
      }
      rc = ac;
    } else rc = !1;
    Xh = rc && (!document.documentMode || 9 < document.documentMode);
  }
  function Qh() {
    Fi && (Fi.detachEvent("onpropertychange", Kh), Qi = Fi = null);
  }
  function Kh(e) {
    if (e.propertyName === "value" && ko(Qi)) {
      var t = [];
      $h(
        t,
        Qi,
        e,
        Xl(e)
      ), Dh(lb, t);
    }
  }
  function cb(e, t, a) {
    e === "focusin" ? (Qh(), Fi = t, Qi = a, Fi.attachEvent("onpropertychange", Kh)) : e === "focusout" && Qh();
  }
  function db(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ko(Qi);
  }
  function fb(e, t) {
    if (e === "click") return ko(t);
  }
  function hb(e, t) {
    if (e === "input" || e === "change")
      return ko(t);
  }
  function pb(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var un = typeof Object.is == "function" ? Object.is : pb;
  function Ki(e, t) {
    if (un(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), o = Object.keys(t);
    if (a.length !== o.length) return !1;
    for (o = 0; o < a.length; o++) {
      var d = a[o];
      if (!me.call(t, d) || !un(e[d], t[d]))
        return !1;
    }
    return !0;
  }
  function Jh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Wh(e, t) {
    var a = Jh(e);
    e = 0;
    for (var o; a; ) {
      if (a.nodeType === 3) {
        if (o = e + a.textContent.length, e <= t && o >= t)
          return { node: a, offset: t - e };
        e = o;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Jh(a);
    }
  }
  function ep(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ep(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function tp(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = yo(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = yo(e.document);
    }
    return t;
  }
  function ic(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var mb = sr && "documentMode" in document && 11 >= document.documentMode, Ja = null, sc = null, Ji = null, oc = !1;
  function np(e, t, a) {
    var o = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    oc || Ja == null || Ja !== yo(o) || (o = Ja, "selectionStart" in o && ic(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), Ji && Ki(Ji, o) || (Ji = o, o = cu(sc, "onSelect"), 0 < o.length && (t = new Eo(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: o }), t.target = Ja)));
  }
  function ua(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var Wa = {
    animationend: ua("Animation", "AnimationEnd"),
    animationiteration: ua("Animation", "AnimationIteration"),
    animationstart: ua("Animation", "AnimationStart"),
    transitionrun: ua("Transition", "TransitionRun"),
    transitionstart: ua("Transition", "TransitionStart"),
    transitioncancel: ua("Transition", "TransitionCancel"),
    transitionend: ua("Transition", "TransitionEnd")
  }, uc = {}, rp = {};
  sr && (rp = document.createElement("div").style, "AnimationEvent" in window || (delete Wa.animationend.animation, delete Wa.animationiteration.animation, delete Wa.animationstart.animation), "TransitionEvent" in window || delete Wa.transitionend.transition);
  function la(e) {
    if (uc[e]) return uc[e];
    if (!Wa[e]) return e;
    var t = Wa[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in rp)
        return uc[e] = t[a];
    return e;
  }
  var ap = la("animationend"), ip = la("animationiteration"), sp = la("animationstart"), gb = la("transitionrun"), vb = la("transitionstart"), yb = la("transitioncancel"), op = la("transitionend"), up = /* @__PURE__ */ new Map(), lc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  lc.push("scrollEnd");
  function zn(e, t) {
    up.set(e, t), sa(t, [e]);
  }
  var lp = /* @__PURE__ */ new WeakMap();
  function Cn(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = lp.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: kh(t)
      }, lp.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: kh(t)
    };
  }
  var kn = [], ei = 0, cc = 0;
  function Ao() {
    for (var e = ei, t = cc = ei = 0; t < e; ) {
      var a = kn[t];
      kn[t++] = null;
      var o = kn[t];
      kn[t++] = null;
      var d = kn[t];
      kn[t++] = null;
      var b = kn[t];
      if (kn[t++] = null, o !== null && d !== null) {
        var T = o.pending;
        T === null ? d.next = d : (d.next = T.next, T.next = d), o.pending = d;
      }
      b !== 0 && cp(a, d, b);
    }
  }
  function xo(e, t, a, o) {
    kn[ei++] = e, kn[ei++] = t, kn[ei++] = a, kn[ei++] = o, cc |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
  }
  function dc(e, t, a, o) {
    return xo(e, t, a, o), To(e);
  }
  function ti(e, t) {
    return xo(e, null, null, t), To(e);
  }
  function cp(e, t, a) {
    e.lanes |= a;
    var o = e.alternate;
    o !== null && (o.lanes |= a);
    for (var d = !1, b = e.return; b !== null; )
      b.childLanes |= a, o = b.alternate, o !== null && (o.childLanes |= a), b.tag === 22 && (e = b.stateNode, e === null || e._visibility & 1 || (d = !0)), e = b, b = b.return;
    return e.tag === 3 ? (b = e.stateNode, d && t !== null && (d = 31 - Gt(a), e = b.hiddenUpdates, o = e[d], o === null ? e[d] = [t] : o.push(t), t.lane = a | 536870912), b) : null;
  }
  function To(e) {
    if (50 < Es)
      throw Es = 0, vd = null, Error(i(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ni = {};
  function _b(e, t, a, o) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ln(e, t, a, o) {
    return new _b(e, t, a, o);
  }
  function fc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function or(e, t) {
    var a = e.alternate;
    return a === null ? (a = ln(
      e.tag,
      t,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function dp(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function No(e, t, a, o, d, b) {
    var T = 0;
    if (o = e, typeof e == "function") fc(e) && (T = 1);
    else if (typeof e == "string")
      T = S1(
        e,
        a,
        U.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case z:
          return e = ln(31, a, t, d), e.elementType = z, e.lanes = b, e;
        case h:
          return ca(a.children, d, b, t);
        case C:
          T = 8, d |= 24;
          break;
        case x:
          return e = ln(12, a, t, d | 2), e.elementType = x, e.lanes = b, e;
        case y:
          return e = ln(13, a, t, d), e.elementType = y, e.lanes = b, e;
        case w:
          return e = ln(19, a, t, d), e.elementType = w, e.lanes = b, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case O:
              case P:
                T = 10;
                break e;
              case N:
                T = 9;
                break e;
              case l:
                T = 11;
                break e;
              case k:
                T = 14;
                break e;
              case M:
                T = 16, o = null;
                break e;
            }
          T = 29, a = Error(
            i(130, e === null ? "null" : typeof e, "")
          ), o = null;
      }
    return t = ln(T, a, t, d), t.elementType = e, t.type = o, t.lanes = b, t;
  }
  function ca(e, t, a, o) {
    return e = ln(7, e, o, t), e.lanes = a, e;
  }
  function hc(e, t, a) {
    return e = ln(6, e, null, t), e.lanes = a, e;
  }
  function pc(e, t, a) {
    return t = ln(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = a, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var ri = [], ai = 0, Oo = null, Mo = 0, An = [], xn = 0, da = null, ur = 1, lr = "";
  function fa(e, t) {
    ri[ai++] = Mo, ri[ai++] = Oo, Oo = e, Mo = t;
  }
  function fp(e, t, a) {
    An[xn++] = ur, An[xn++] = lr, An[xn++] = da, da = e;
    var o = ur;
    e = lr;
    var d = 32 - Gt(o) - 1;
    o &= ~(1 << d), a += 1;
    var b = 32 - Gt(t) + d;
    if (30 < b) {
      var T = d - d % 5;
      b = (o & (1 << T) - 1).toString(32), o >>= T, d -= T, ur = 1 << 32 - Gt(t) + d | a << d | o, lr = b + e;
    } else
      ur = 1 << b | a << d | o, lr = e;
  }
  function mc(e) {
    e.return !== null && (fa(e, 1), fp(e, 1, 0));
  }
  function gc(e) {
    for (; e === Oo; )
      Oo = ri[--ai], ri[ai] = null, Mo = ri[--ai], ri[ai] = null;
    for (; e === da; )
      da = An[--xn], An[xn] = null, lr = An[--xn], An[xn] = null, ur = An[--xn], An[xn] = null;
  }
  var $t = null, ft = null, $e = !1, ha = null, Xn = !1, vc = Error(i(519));
  function pa(e) {
    var t = Error(i(418, ""));
    throw ts(Cn(t, e)), vc;
  }
  function hp(e) {
    var t = e.stateNode, a = e.type, o = e.memoizedProps;
    switch (t[Bt] = e, t[Kt] = o, a) {
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
        for (a = 0; a < ks.length; a++)
          Be(ks[a], t);
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
        Be("invalid", t), Th(
          t,
          o.value,
          o.defaultValue,
          o.checked,
          o.defaultChecked,
          o.type,
          o.name,
          !0
        ), vo(t);
        break;
      case "select":
        Be("invalid", t);
        break;
      case "textarea":
        Be("invalid", t), Oh(t, o.value, o.defaultValue, o.children), vo(t);
    }
    a = o.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || o.suppressHydrationWarning === !0 || Og(t.textContent, a) ? (o.popover != null && (Be("beforetoggle", t), Be("toggle", t)), o.onScroll != null && Be("scroll", t), o.onScrollEnd != null && Be("scrollend", t), o.onClick != null && (t.onclick = du), t = !0) : t = !1, t || pa(e);
  }
  function pp(e) {
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
    if (!$e) return pp(e), $e = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Rd(e.type, e.memoizedProps)), a = !a), a && ft && pa(e), pp(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (a = e.data, a === "/$") {
              if (t === 0) {
                ft = Ln(e.nextSibling);
                break e;
              }
              t--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || t++;
          e = e.nextSibling;
        }
        ft = null;
      }
    } else
      t === 27 ? (t = ft, Zr(e.type) ? (e = Ld, Ld = null, ft = e) : ft = t) : ft = $t ? Ln(e.stateNode.nextSibling) : null;
    return !0;
  }
  function es() {
    ft = $t = null, $e = !1;
  }
  function mp() {
    var e = ha;
    return e !== null && (tn === null ? tn = e : tn.push.apply(
      tn,
      e
    ), ha = null), e;
  }
  function ts(e) {
    ha === null ? ha = [e] : ha.push(e);
  }
  var yc = Y(null), ma = null, cr = null;
  function Tr(e, t, a) {
    V(yc, t._currentValue), t._currentValue = a;
  }
  function dr(e) {
    e._currentValue = yc.current, ce(yc);
  }
  function _c(e, t, a) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function bc(e, t, a, o) {
    var d = e.child;
    for (d !== null && (d.return = e); d !== null; ) {
      var b = d.dependencies;
      if (b !== null) {
        var T = d.child;
        b = b.firstContext;
        e: for (; b !== null; ) {
          var D = b;
          b = d;
          for (var H = 0; H < t.length; H++)
            if (D.context === t[H]) {
              b.lanes |= a, D = b.alternate, D !== null && (D.lanes |= a), _c(
                b.return,
                a,
                e
              ), o || (T = null);
              break e;
            }
          b = D.next;
        }
      } else if (d.tag === 18) {
        if (T = d.return, T === null) throw Error(i(341));
        T.lanes |= a, b = T.alternate, b !== null && (b.lanes |= a), _c(T, a, e), T = null;
      } else T = d.child;
      if (T !== null) T.return = d;
      else
        for (T = d; T !== null; ) {
          if (T === e) {
            T = null;
            break;
          }
          if (d = T.sibling, d !== null) {
            d.return = T.return, T = d;
            break;
          }
          T = T.return;
        }
      d = T;
    }
  }
  function ns(e, t, a, o) {
    e = null;
    for (var d = t, b = !1; d !== null; ) {
      if (!b) {
        if ((d.flags & 524288) !== 0) b = !0;
        else if ((d.flags & 262144) !== 0) break;
      }
      if (d.tag === 10) {
        var T = d.alternate;
        if (T === null) throw Error(i(387));
        if (T = T.memoizedProps, T !== null) {
          var D = d.type;
          un(d.pendingProps.value, T.value) || (e !== null ? e.push(D) : e = [D]);
        }
      } else if (d === ue.current) {
        if (T = d.alternate, T === null) throw Error(i(387));
        T.memoizedState.memoizedState !== d.memoizedState.memoizedState && (e !== null ? e.push(Ms) : e = [Ms]);
      }
      d = d.return;
    }
    e !== null && bc(
      t,
      e,
      a,
      o
    ), t.flags |= 262144;
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
    return gp(ma, e);
  }
  function Ro(e, t) {
    return ma === null && ga(e), gp(e, t);
  }
  function gp(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, cr === null) {
      if (e === null) throw Error(i(308));
      cr = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else cr = cr.next = t;
    return a;
  }
  var bb = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, o) {
        e.push(o);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, Sb = n.unstable_scheduleCallback, wb = n.unstable_NormalPriority, Et = {
    $$typeof: P,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Sc() {
    return {
      controller: new bb(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function rs(e) {
    e.refCount--, e.refCount === 0 && Sb(wb, function() {
      e.controller.abort();
    });
  }
  var as = null, wc = 0, ii = 0, si = null;
  function Eb(e, t) {
    if (as === null) {
      var a = as = [];
      wc = 0, ii = Cd(), si = {
        status: "pending",
        value: void 0,
        then: function(o) {
          a.push(o);
        }
      };
    }
    return wc++, t.then(vp, vp), t;
  }
  function vp() {
    if (--wc === 0 && as !== null) {
      si !== null && (si.status = "fulfilled");
      var e = as;
      as = null, ii = 0, si = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Cb(e, t) {
    var a = [], o = {
      status: "pending",
      value: null,
      reason: null,
      then: function(d) {
        a.push(d);
      }
    };
    return e.then(
      function() {
        o.status = "fulfilled", o.value = t;
        for (var d = 0; d < a.length; d++) (0, a[d])(t);
      },
      function(d) {
        for (o.status = "rejected", o.reason = d, d = 0; d < a.length; d++)
          (0, a[d])(void 0);
      }
    ), o;
  }
  var yp = j.S;
  j.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && Eb(e, t), yp !== null && yp(e, t);
  };
  var va = Y(null);
  function Ec() {
    var e = va.current;
    return e !== null ? e : nt.pooledCache;
  }
  function Do(e, t) {
    t === null ? V(va, va.current) : V(va, t.pool);
  }
  function _p() {
    var e = Ec();
    return e === null ? null : { parent: Et._currentValue, pool: e };
  }
  var is = Error(i(460)), bp = Error(i(474)), zo = Error(i(542)), Cc = { then: function() {
  } };
  function Sp(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Po() {
  }
  function wp(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(Po, Po), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Cp(e), e;
      default:
        if (typeof t.status == "string") t.then(Po, Po);
        else {
          if (e = nt, e !== null && 100 < e.shellSuspendCounter)
            throw Error(i(482));
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
            throw e = t.reason, Cp(e), e;
        }
        throw ss = t, is;
    }
  }
  var ss = null;
  function Ep() {
    if (ss === null) throw Error(i(459));
    var e = ss;
    return ss = null, e;
  }
  function Cp(e) {
    if (e === is || e === zo)
      throw Error(i(483));
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
  function Mr(e, t, a) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (Ye & 2) !== 0) {
      var d = o.pending;
      return d === null ? t.next = t : (t.next = d.next, d.next = t), o.pending = t, t = To(e), cp(e, null, a), t;
    }
    return xo(e, o, t, a), To(e);
  }
  function os(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var o = t.lanes;
      o &= e.pendingLanes, a |= o, t.lanes = a, vh(e, a);
    }
  }
  function xc(e, t) {
    var a = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, a === o)) {
      var d = null, b = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var T = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          b === null ? d = b = T : b = b.next = T, a = a.next;
        } while (a !== null);
        b === null ? d = b = t : b = b.next = t;
      } else d = b = t;
      a = {
        baseState: o.baseState,
        firstBaseUpdate: d,
        lastBaseUpdate: b,
        shared: o.shared,
        callbacks: o.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
  }
  var Tc = !1;
  function us() {
    if (Tc) {
      var e = si;
      if (e !== null) throw e;
    }
  }
  function ls(e, t, a, o) {
    Tc = !1;
    var d = e.updateQueue;
    Nr = !1;
    var b = d.firstBaseUpdate, T = d.lastBaseUpdate, D = d.shared.pending;
    if (D !== null) {
      d.shared.pending = null;
      var H = D, Q = H.next;
      H.next = null, T === null ? b = Q : T.next = Q, T = H;
      var se = e.alternate;
      se !== null && (se = se.updateQueue, D = se.lastBaseUpdate, D !== T && (D === null ? se.firstBaseUpdate = Q : D.next = Q, se.lastBaseUpdate = H));
    }
    if (b !== null) {
      var le = d.baseState;
      T = 0, se = Q = H = null, D = b;
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
            var Je = a;
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
          }, se === null ? (Q = se = ee, H = le) : se = se.next = ee, T |= J;
        if (D = D.next, D === null) {
          if (D = d.shared.pending, D === null)
            break;
          ee = D, D = ee.next, ee.next = null, d.lastBaseUpdate = ee, d.shared.pending = null;
        }
      } while (!0);
      se === null && (H = le), d.baseState = H, d.firstBaseUpdate = Q, d.lastBaseUpdate = se, b === null && (d.shared.lanes = 0), Br |= T, e.lanes = T, e.memoizedState = le;
    }
  }
  function kp(e, t) {
    if (typeof e != "function")
      throw Error(i(191, e));
    e.call(t);
  }
  function Ap(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        kp(a[e], t);
  }
  var oi = Y(null), Lo = Y(0);
  function xp(e, t) {
    e = yr, V(Lo, e), V(oi, t), yr = e | t.baseLanes;
  }
  function Nc() {
    V(Lo, yr), V(oi, oi.current);
  }
  function Oc() {
    yr = Lo.current, ce(oi), ce(Lo);
  }
  var jr = 0, ze = null, Qe = null, _t = null, Io = !1, ui = !1, ya = !1, Bo = 0, cs = 0, li = null, kb = 0;
  function gt() {
    throw Error(i(321));
  }
  function Mc(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!un(e[a], t[a])) return !1;
    return !0;
  }
  function jc(e, t, a, o, d, b) {
    return jr = b, ze = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, j.H = e === null || e.memoizedState === null ? cm : dm, ya = !1, b = a(o, d), ya = !1, ui && (b = Np(
      t,
      a,
      o,
      d
    )), Tp(e), b;
  }
  function Tp(e) {
    j.H = Vo;
    var t = Qe !== null && Qe.next !== null;
    if (jr = 0, _t = Qe = ze = null, Io = !1, cs = 0, li = null, t) throw Error(i(300));
    e === null || Tt || (e = e.dependencies, e !== null && jo(e) && (Tt = !0));
  }
  function Np(e, t, a, o) {
    ze = e;
    var d = 0;
    do {
      if (ui && (li = null), cs = 0, ui = !1, 25 <= d) throw Error(i(301));
      if (d += 1, _t = Qe = null, e.updateQueue != null) {
        var b = e.updateQueue;
        b.lastEffect = null, b.events = null, b.stores = null, b.memoCache != null && (b.memoCache.index = 0);
      }
      j.H = jb, b = t(a, o);
    } while (ui);
    return b;
  }
  function Ab() {
    var e = j.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? ds(t) : t, e = e.useState()[0], (Qe !== null ? Qe.memoizedState : null) !== e && (ze.flags |= 1024), t;
  }
  function Rc() {
    var e = Bo !== 0;
    return Bo = 0, e;
  }
  function Dc(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function zc(e) {
    if (Io) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Io = !1;
    }
    jr = 0, _t = Qe = ze = null, ui = !1, cs = Bo = 0, li = null;
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
        throw ze.alternate === null ? Error(i(467)) : Error(i(310));
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
  function Pc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ds(e) {
    var t = cs;
    return cs += 1, li === null && (li = []), e = wp(li, e, t), t = ze, (_t === null ? t.memoizedState : _t.next) === null && (t = t.alternate, j.H = t === null || t.memoizedState === null ? cm : dm), e;
  }
  function Uo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ds(e);
      if (e.$$typeof === P) return Ut(e);
    }
    throw Error(i(438, String(e)));
  }
  function Lc(e) {
    var t = null, a = ze.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var o = ze.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (t = {
        data: o.data.map(function(d) {
          return d.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = Pc(), ze.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), o = 0; o < e; o++)
        a[o] = R;
    return t.index++, a;
  }
  function fr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ho(e) {
    var t = bt();
    return Ic(t, Qe, e);
  }
  function Ic(e, t, a) {
    var o = e.queue;
    if (o === null) throw Error(i(311));
    o.lastRenderedReducer = a;
    var d = e.baseQueue, b = o.pending;
    if (b !== null) {
      if (d !== null) {
        var T = d.next;
        d.next = b.next, b.next = T;
      }
      t.baseQueue = d = b, o.pending = null;
    }
    if (b = e.baseState, d === null) e.memoizedState = b;
    else {
      t = d.next;
      var D = T = null, H = null, Q = t, se = !1;
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
            }, H === null ? (D = H = le, T = b) : H = H.next = le, ze.lanes |= J, Br |= J;
          le = Q.action, ya && a(b, le), b = Q.hasEagerState ? Q.eagerState : a(b, le);
        } else
          J = {
            lane: le,
            revertLane: Q.revertLane,
            action: Q.action,
            hasEagerState: Q.hasEagerState,
            eagerState: Q.eagerState,
            next: null
          }, H === null ? (D = H = J, T = b) : H = H.next = J, ze.lanes |= le, Br |= le;
        Q = Q.next;
      } while (Q !== null && Q !== t);
      if (H === null ? T = b : H.next = D, !un(b, e.memoizedState) && (Tt = !0, se && (a = si, a !== null)))
        throw a;
      e.memoizedState = b, e.baseState = T, e.baseQueue = H, o.lastRenderedState = b;
    }
    return d === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function Bc(e) {
    var t = bt(), a = t.queue;
    if (a === null) throw Error(i(311));
    a.lastRenderedReducer = e;
    var o = a.dispatch, d = a.pending, b = t.memoizedState;
    if (d !== null) {
      a.pending = null;
      var T = d = d.next;
      do
        b = e(b, T.action), T = T.next;
      while (T !== d);
      un(b, t.memoizedState) || (Tt = !0), t.memoizedState = b, t.baseQueue === null && (t.baseState = b), a.lastRenderedState = b;
    }
    return [b, o];
  }
  function Op(e, t, a) {
    var o = ze, d = bt(), b = $e;
    if (b) {
      if (a === void 0) throw Error(i(407));
      a = a();
    } else a = t();
    var T = !un(
      (Qe || d).memoizedState,
      a
    );
    T && (d.memoizedState = a, Tt = !0), d = d.queue;
    var D = Rp.bind(null, o, d, e);
    if (fs(2048, 8, D, [e]), d.getSnapshot !== t || T || _t !== null && _t.memoizedState.tag & 1) {
      if (o.flags |= 2048, ci(
        9,
        qo(),
        jp.bind(
          null,
          o,
          d,
          a,
          t
        ),
        null
      ), nt === null) throw Error(i(349));
      b || (jr & 124) !== 0 || Mp(o, t, a);
    }
    return a;
  }
  function Mp(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = ze.updateQueue, t === null ? (t = Pc(), ze.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function jp(e, t, a, o) {
    t.value = a, t.getSnapshot = o, Dp(t) && zp(e);
  }
  function Rp(e, t, a) {
    return a(function() {
      Dp(t) && zp(e);
    });
  }
  function Dp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !un(e, a);
    } catch {
      return !0;
    }
  }
  function zp(e) {
    var t = ti(e, 2);
    t !== null && pn(t, e, 2);
  }
  function Uc(e) {
    var t = Wt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), ya) {
        $n(!0);
        try {
          a();
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
  function Pp(e, t, a, o) {
    return e.baseState = a, Ic(
      e,
      Qe,
      typeof o == "function" ? o : fr
    );
  }
  function xb(e, t, a, o, d) {
    if (Go(e)) throw Error(i(485));
    if (e = t.action, e !== null) {
      var b = {
        payload: d,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(T) {
          b.listeners.push(T);
        }
      };
      j.T !== null ? a(!0) : b.isTransition = !1, o(b), a = t.pending, a === null ? (b.next = t.pending = b, Lp(t, b)) : (b.next = a.next, t.pending = a.next = b);
    }
  }
  function Lp(e, t) {
    var a = t.action, o = t.payload, d = e.state;
    if (t.isTransition) {
      var b = j.T, T = {};
      j.T = T;
      try {
        var D = a(d, o), H = j.S;
        H !== null && H(T, D), Ip(e, t, D);
      } catch (Q) {
        Hc(e, t, Q);
      } finally {
        j.T = b;
      }
    } else
      try {
        b = a(d, o), Ip(e, t, b);
      } catch (Q) {
        Hc(e, t, Q);
      }
  }
  function Ip(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(o) {
        Bp(e, t, o);
      },
      function(o) {
        return Hc(e, t, o);
      }
    ) : Bp(e, t, a);
  }
  function Bp(e, t, a) {
    t.status = "fulfilled", t.value = a, Up(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Lp(e, a)));
  }
  function Hc(e, t, a) {
    var o = e.pending;
    if (e.pending = null, o !== null) {
      o = o.next;
      do
        t.status = "rejected", t.reason = a, Up(t), t = t.next;
      while (t !== o);
    }
    e.action = null;
  }
  function Up(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Hp(e, t) {
    return t;
  }
  function qp(e, t) {
    if ($e) {
      var a = nt.formState;
      if (a !== null) {
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
        o && (t = a[0]);
      }
    }
    return a = Wt(), a.memoizedState = a.baseState = t, o = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Hp,
      lastRenderedState: t
    }, a.queue = o, a = om.bind(
      null,
      ze,
      o
    ), o.dispatch = a, o = Uc(!1), b = $c.bind(
      null,
      ze,
      !1,
      o.queue
    ), o = Wt(), d = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, o.queue = d, a = xb.bind(
      null,
      ze,
      d,
      b,
      a
    ), d.dispatch = a, o.memoizedState = e, [t, a, !1];
  }
  function Zp(e) {
    var t = bt();
    return Gp(t, Qe, e);
  }
  function Gp(e, t, a) {
    if (t = Ic(
      e,
      t,
      Hp
    )[0], e = Ho(fr)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var o = ds(t);
      } catch (T) {
        throw T === is ? zo : T;
      }
    else o = t;
    t = bt();
    var d = t.queue, b = d.dispatch;
    return a !== t.memoizedState && (ze.flags |= 2048, ci(
      9,
      qo(),
      Tb.bind(null, d, a),
      null
    )), [o, b, e];
  }
  function Tb(e, t) {
    e.action = t;
  }
  function Vp(e) {
    var t = bt(), a = Qe;
    if (a !== null)
      return Gp(t, a, e);
    bt(), t = t.memoizedState, a = bt();
    var o = a.queue.dispatch;
    return a.memoizedState = e, [t, o, !1];
  }
  function ci(e, t, a, o) {
    return e = { tag: e, create: a, deps: o, inst: t, next: null }, t = ze.updateQueue, t === null && (t = Pc(), ze.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (o = a.next, a.next = e, e.next = o, t.lastEffect = e), e;
  }
  function qo() {
    return { destroy: void 0, resource: void 0 };
  }
  function $p() {
    return bt().memoizedState;
  }
  function Zo(e, t, a, o) {
    var d = Wt();
    o = o === void 0 ? null : o, ze.flags |= e, d.memoizedState = ci(
      1 | t,
      qo(),
      a,
      o
    );
  }
  function fs(e, t, a, o) {
    var d = bt();
    o = o === void 0 ? null : o;
    var b = d.memoizedState.inst;
    Qe !== null && o !== null && Mc(o, Qe.memoizedState.deps) ? d.memoizedState = ci(t, b, a, o) : (ze.flags |= e, d.memoizedState = ci(
      1 | t,
      b,
      a,
      o
    ));
  }
  function Yp(e, t) {
    Zo(8390656, 8, e, t);
  }
  function Xp(e, t) {
    fs(2048, 8, e, t);
  }
  function Fp(e, t) {
    return fs(4, 2, e, t);
  }
  function Qp(e, t) {
    return fs(4, 4, e, t);
  }
  function Kp(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function Jp(e, t, a) {
    a = a != null ? a.concat([e]) : null, fs(4, 4, Kp.bind(null, t, e), a);
  }
  function qc() {
  }
  function Wp(e, t) {
    var a = bt();
    t = t === void 0 ? null : t;
    var o = a.memoizedState;
    return t !== null && Mc(t, o[1]) ? o[0] : (a.memoizedState = [e, t], e);
  }
  function em(e, t) {
    var a = bt();
    t = t === void 0 ? null : t;
    var o = a.memoizedState;
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
    return a.memoizedState = [o, t], o;
  }
  function Zc(e, t, a) {
    return a === void 0 || (jr & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = rg(), ze.lanes |= e, Br |= e, a);
  }
  function tm(e, t, a, o) {
    return un(a, t) ? a : oi.current !== null ? (e = Zc(e, a, o), un(e, t) || (Tt = !0), e) : (jr & 42) === 0 ? (Tt = !0, e.memoizedState = a) : (e = rg(), ze.lanes |= e, Br |= e, t);
  }
  function nm(e, t, a, o, d) {
    var b = B.p;
    B.p = b !== 0 && 8 > b ? b : 8;
    var T = j.T, D = {};
    j.T = D, $c(e, !1, t, a);
    try {
      var H = d(), Q = j.S;
      if (Q !== null && Q(D, H), H !== null && typeof H == "object" && typeof H.then == "function") {
        var se = Cb(
          H,
          o
        );
        hs(
          e,
          t,
          se,
          hn(e)
        );
      } else
        hs(
          e,
          t,
          o,
          hn(e)
        );
    } catch (le) {
      hs(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: le },
        hn()
      );
    } finally {
      B.p = b, j.T = T;
    }
  }
  function Nb() {
  }
  function Gc(e, t, a, o) {
    if (e.tag !== 5) throw Error(i(476));
    var d = rm(e).queue;
    nm(
      e,
      d,
      t,
      K,
      a === null ? Nb : function() {
        return am(e), a(o);
      }
    );
  }
  function rm(e) {
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
    var a = {};
    return t.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fr,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function am(e) {
    var t = rm(e).next.queue;
    hs(e, t, {}, hn());
  }
  function Vc() {
    return Ut(Ms);
  }
  function im() {
    return bt().memoizedState;
  }
  function sm() {
    return bt().memoizedState;
  }
  function Ob(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = hn();
          e = Or(a);
          var o = Mr(t, e, a);
          o !== null && (pn(o, t, a), os(o, t, a)), t = { cache: Sc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Mb(e, t, a) {
    var o = hn();
    a = {
      lane: o,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Go(e) ? um(t, a) : (a = dc(e, t, a, o), a !== null && (pn(a, e, o), lm(a, t, o)));
  }
  function om(e, t, a) {
    var o = hn();
    hs(e, t, a, o);
  }
  function hs(e, t, a, o) {
    var d = {
      lane: o,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Go(e)) um(t, d);
    else {
      var b = e.alternate;
      if (e.lanes === 0 && (b === null || b.lanes === 0) && (b = t.lastRenderedReducer, b !== null))
        try {
          var T = t.lastRenderedState, D = b(T, a);
          if (d.hasEagerState = !0, d.eagerState = D, un(D, T))
            return xo(e, t, d, 0), nt === null && Ao(), !1;
        } catch {
        } finally {
        }
      if (a = dc(e, t, d, o), a !== null)
        return pn(a, e, o), lm(a, t, o), !0;
    }
    return !1;
  }
  function $c(e, t, a, o) {
    if (o = {
      lane: 2,
      revertLane: Cd(),
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Go(e)) {
      if (t) throw Error(i(479));
    } else
      t = dc(
        e,
        a,
        o,
        2
      ), t !== null && pn(t, e, 2);
  }
  function Go(e) {
    var t = e.alternate;
    return e === ze || t !== null && t === ze;
  }
  function um(e, t) {
    ui = Io = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function lm(e, t, a) {
    if ((a & 4194048) !== 0) {
      var o = t.lanes;
      o &= e.pendingLanes, a |= o, t.lanes = a, vh(e, a);
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
  }, cm = {
    readContext: Ut,
    use: Uo,
    useCallback: function(e, t) {
      return Wt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Ut,
    useEffect: Yp,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, Zo(
        4194308,
        4,
        Kp.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return Zo(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Zo(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = Wt();
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
      return a.memoizedState = [o, t], o;
    },
    useReducer: function(e, t, a) {
      var o = Wt();
      if (a !== void 0) {
        var d = a(t);
        if (ya) {
          $n(!0);
          try {
            a(t);
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
      }, o.queue = e, e = e.dispatch = Mb.bind(
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
      var t = e.queue, a = om.bind(null, ze, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: qc,
    useDeferredValue: function(e, t) {
      var a = Wt();
      return Zc(a, e, t);
    },
    useTransition: function() {
      var e = Uc(!1);
      return e = nm.bind(
        null,
        ze,
        e.queue,
        !0,
        !1
      ), Wt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var o = ze, d = Wt();
      if ($e) {
        if (a === void 0)
          throw Error(i(407));
        a = a();
      } else {
        if (a = t(), nt === null)
          throw Error(i(349));
        (Ge & 124) !== 0 || Mp(o, t, a);
      }
      d.memoizedState = a;
      var b = { value: a, getSnapshot: t };
      return d.queue = b, Yp(Rp.bind(null, o, b, e), [
        e
      ]), o.flags |= 2048, ci(
        9,
        qo(),
        jp.bind(
          null,
          o,
          b,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var e = Wt(), t = nt.identifierPrefix;
      if ($e) {
        var a = lr, o = ur;
        a = (o & ~(1 << 32 - Gt(o) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = Bo++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = kb++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Vc,
    useFormState: qp,
    useActionState: qp,
    useOptimistic: function(e) {
      var t = Wt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = $c.bind(
        null,
        ze,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: Lc,
    useCacheRefresh: function() {
      return Wt().memoizedState = Ob.bind(
        null,
        ze
      );
    }
  }, dm = {
    readContext: Ut,
    use: Uo,
    useCallback: Wp,
    useContext: Ut,
    useEffect: Xp,
    useImperativeHandle: Jp,
    useInsertionEffect: Fp,
    useLayoutEffect: Qp,
    useMemo: em,
    useReducer: Ho,
    useRef: $p,
    useState: function() {
      return Ho(fr);
    },
    useDebugValue: qc,
    useDeferredValue: function(e, t) {
      var a = bt();
      return tm(
        a,
        Qe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Ho(fr)[0], t = bt().memoizedState;
      return [
        typeof e == "boolean" ? e : ds(e),
        t
      ];
    },
    useSyncExternalStore: Op,
    useId: im,
    useHostTransitionStatus: Vc,
    useFormState: Zp,
    useActionState: Zp,
    useOptimistic: function(e, t) {
      var a = bt();
      return Pp(a, Qe, e, t);
    },
    useMemoCache: Lc,
    useCacheRefresh: sm
  }, jb = {
    readContext: Ut,
    use: Uo,
    useCallback: Wp,
    useContext: Ut,
    useEffect: Xp,
    useImperativeHandle: Jp,
    useInsertionEffect: Fp,
    useLayoutEffect: Qp,
    useMemo: em,
    useReducer: Bc,
    useRef: $p,
    useState: function() {
      return Bc(fr);
    },
    useDebugValue: qc,
    useDeferredValue: function(e, t) {
      var a = bt();
      return Qe === null ? Zc(a, e, t) : tm(
        a,
        Qe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Bc(fr)[0], t = bt().memoizedState;
      return [
        typeof e == "boolean" ? e : ds(e),
        t
      ];
    },
    useSyncExternalStore: Op,
    useId: im,
    useHostTransitionStatus: Vc,
    useFormState: Vp,
    useActionState: Vp,
    useOptimistic: function(e, t) {
      var a = bt();
      return Qe !== null ? Pp(a, Qe, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Lc,
    useCacheRefresh: sm
  }, di = null, ps = 0;
  function $o(e) {
    var t = ps;
    return ps += 1, di === null && (di = []), wp(di, e, t);
  }
  function ms(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Yo(e, t) {
    throw t.$$typeof === E ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(
      i(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function fm(e) {
    var t = e._init;
    return t(e._payload);
  }
  function hm(e) {
    function t(G, q) {
      if (e) {
        var X = G.deletions;
        X === null ? (G.deletions = [q], G.flags |= 16) : X.push(q);
      }
    }
    function a(G, q) {
      if (!e) return null;
      for (; q !== null; )
        t(G, q), q = q.sibling;
      return null;
    }
    function o(G) {
      for (var q = /* @__PURE__ */ new Map(); G !== null; )
        G.key !== null ? q.set(G.key, G) : q.set(G.index, G), G = G.sibling;
      return q;
    }
    function d(G, q) {
      return G = or(G, q), G.index = 0, G.sibling = null, G;
    }
    function b(G, q, X) {
      return G.index = X, e ? (X = G.alternate, X !== null ? (X = X.index, X < q ? (G.flags |= 67108866, q) : X) : (G.flags |= 67108866, q)) : (G.flags |= 1048576, q);
    }
    function T(G) {
      return e && G.alternate === null && (G.flags |= 67108866), G;
    }
    function D(G, q, X, oe) {
      return q === null || q.tag !== 6 ? (q = hc(X, G.mode, oe), q.return = G, q) : (q = d(q, X), q.return = G, q);
    }
    function H(G, q, X, oe) {
      var ve = X.type;
      return ve === h ? se(
        G,
        q,
        X.props.children,
        oe,
        X.key
      ) : q !== null && (q.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === M && fm(ve) === q.type) ? (q = d(q, X.props), ms(q, X), q.return = G, q) : (q = No(
        X.type,
        X.key,
        X.props,
        null,
        G.mode,
        oe
      ), ms(q, X), q.return = G, q);
    }
    function Q(G, q, X, oe) {
      return q === null || q.tag !== 4 || q.stateNode.containerInfo !== X.containerInfo || q.stateNode.implementation !== X.implementation ? (q = pc(X, G.mode, oe), q.return = G, q) : (q = d(q, X.children || []), q.return = G, q);
    }
    function se(G, q, X, oe, ve) {
      return q === null || q.tag !== 7 ? (q = ca(
        X,
        G.mode,
        oe,
        ve
      ), q.return = G, q) : (q = d(q, X), q.return = G, q);
    }
    function le(G, q, X) {
      if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint")
        return q = hc(
          "" + q,
          G.mode,
          X
        ), q.return = G, q;
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case v:
            return X = No(
              q.type,
              q.key,
              q.props,
              null,
              G.mode,
              X
            ), ms(X, q), X.return = G, X;
          case S:
            return q = pc(
              q,
              G.mode,
              X
            ), q.return = G, q;
          case M:
            var oe = q._init;
            return q = oe(q._payload), le(G, q, X);
        }
        if (W(q) || Z(q))
          return q = ca(
            q,
            G.mode,
            X,
            null
          ), q.return = G, q;
        if (typeof q.then == "function")
          return le(G, $o(q), X);
        if (q.$$typeof === P)
          return le(
            G,
            Ro(G, q),
            X
          );
        Yo(G, q);
      }
      return null;
    }
    function J(G, q, X, oe) {
      var ve = q !== null ? q.key : null;
      if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint")
        return ve !== null ? null : D(G, q, "" + X, oe);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case v:
            return X.key === ve ? H(G, q, X, oe) : null;
          case S:
            return X.key === ve ? Q(G, q, X, oe) : null;
          case M:
            return ve = X._init, X = ve(X._payload), J(G, q, X, oe);
        }
        if (W(X) || Z(X))
          return ve !== null ? null : se(G, q, X, oe, null);
        if (typeof X.then == "function")
          return J(
            G,
            q,
            $o(X),
            oe
          );
        if (X.$$typeof === P)
          return J(
            G,
            q,
            Ro(G, X),
            oe
          );
        Yo(G, X);
      }
      return null;
    }
    function ee(G, q, X, oe, ve) {
      if (typeof oe == "string" && oe !== "" || typeof oe == "number" || typeof oe == "bigint")
        return G = G.get(X) || null, D(q, G, "" + oe, ve);
      if (typeof oe == "object" && oe !== null) {
        switch (oe.$$typeof) {
          case v:
            return G = G.get(
              oe.key === null ? X : oe.key
            ) || null, H(q, G, oe, ve);
          case S:
            return G = G.get(
              oe.key === null ? X : oe.key
            ) || null, Q(q, G, oe, ve);
          case M:
            var Pe = oe._init;
            return oe = Pe(oe._payload), ee(
              G,
              q,
              X,
              oe,
              ve
            );
        }
        if (W(oe) || Z(oe))
          return G = G.get(X) || null, se(q, G, oe, ve, null);
        if (typeof oe.then == "function")
          return ee(
            G,
            q,
            X,
            $o(oe),
            ve
          );
        if (oe.$$typeof === P)
          return ee(
            G,
            q,
            X,
            Ro(q, oe),
            ve
          );
        Yo(q, oe);
      }
      return null;
    }
    function Ae(G, q, X, oe) {
      for (var ve = null, Pe = null, be = q, ke = q = 0, Ot = null; be !== null && ke < X.length; ke++) {
        be.index > ke ? (Ot = be, be = null) : Ot = be.sibling;
        var Ve = J(
          G,
          be,
          X[ke],
          oe
        );
        if (Ve === null) {
          be === null && (be = Ot);
          break;
        }
        e && be && Ve.alternate === null && t(G, be), q = b(Ve, q, ke), Pe === null ? ve = Ve : Pe.sibling = Ve, Pe = Ve, be = Ot;
      }
      if (ke === X.length)
        return a(G, be), $e && fa(G, ke), ve;
      if (be === null) {
        for (; ke < X.length; ke++)
          be = le(G, X[ke], oe), be !== null && (q = b(
            be,
            q,
            ke
          ), Pe === null ? ve = be : Pe.sibling = be, Pe = be);
        return $e && fa(G, ke), ve;
      }
      for (be = o(be); ke < X.length; ke++)
        Ot = ee(
          be,
          G,
          ke,
          X[ke],
          oe
        ), Ot !== null && (e && Ot.alternate !== null && be.delete(
          Ot.key === null ? ke : Ot.key
        ), q = b(
          Ot,
          q,
          ke
        ), Pe === null ? ve = Ot : Pe.sibling = Ot, Pe = Ot);
      return e && be.forEach(function(Xr) {
        return t(G, Xr);
      }), $e && fa(G, ke), ve;
    }
    function Ce(G, q, X, oe) {
      if (X == null) throw Error(i(151));
      for (var ve = null, Pe = null, be = q, ke = q = 0, Ot = null, Ve = X.next(); be !== null && !Ve.done; ke++, Ve = X.next()) {
        be.index > ke ? (Ot = be, be = null) : Ot = be.sibling;
        var Xr = J(G, be, Ve.value, oe);
        if (Xr === null) {
          be === null && (be = Ot);
          break;
        }
        e && be && Xr.alternate === null && t(G, be), q = b(Xr, q, ke), Pe === null ? ve = Xr : Pe.sibling = Xr, Pe = Xr, be = Ot;
      }
      if (Ve.done)
        return a(G, be), $e && fa(G, ke), ve;
      if (be === null) {
        for (; !Ve.done; ke++, Ve = X.next())
          Ve = le(G, Ve.value, oe), Ve !== null && (q = b(Ve, q, ke), Pe === null ? ve = Ve : Pe.sibling = Ve, Pe = Ve);
        return $e && fa(G, ke), ve;
      }
      for (be = o(be); !Ve.done; ke++, Ve = X.next())
        Ve = ee(be, G, ke, Ve.value, oe), Ve !== null && (e && Ve.alternate !== null && be.delete(Ve.key === null ? ke : Ve.key), q = b(Ve, q, ke), Pe === null ? ve = Ve : Pe.sibling = Ve, Pe = Ve);
      return e && be.forEach(function(R1) {
        return t(G, R1);
      }), $e && fa(G, ke), ve;
    }
    function Je(G, q, X, oe) {
      if (typeof X == "object" && X !== null && X.type === h && X.key === null && (X = X.props.children), typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case v:
            e: {
              for (var ve = X.key; q !== null; ) {
                if (q.key === ve) {
                  if (ve = X.type, ve === h) {
                    if (q.tag === 7) {
                      a(
                        G,
                        q.sibling
                      ), oe = d(
                        q,
                        X.props.children
                      ), oe.return = G, G = oe;
                      break e;
                    }
                  } else if (q.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === M && fm(ve) === q.type) {
                    a(
                      G,
                      q.sibling
                    ), oe = d(q, X.props), ms(oe, X), oe.return = G, G = oe;
                    break e;
                  }
                  a(G, q);
                  break;
                } else t(G, q);
                q = q.sibling;
              }
              X.type === h ? (oe = ca(
                X.props.children,
                G.mode,
                oe,
                X.key
              ), oe.return = G, G = oe) : (oe = No(
                X.type,
                X.key,
                X.props,
                null,
                G.mode,
                oe
              ), ms(oe, X), oe.return = G, G = oe);
            }
            return T(G);
          case S:
            e: {
              for (ve = X.key; q !== null; ) {
                if (q.key === ve)
                  if (q.tag === 4 && q.stateNode.containerInfo === X.containerInfo && q.stateNode.implementation === X.implementation) {
                    a(
                      G,
                      q.sibling
                    ), oe = d(q, X.children || []), oe.return = G, G = oe;
                    break e;
                  } else {
                    a(G, q);
                    break;
                  }
                else t(G, q);
                q = q.sibling;
              }
              oe = pc(X, G.mode, oe), oe.return = G, G = oe;
            }
            return T(G);
          case M:
            return ve = X._init, X = ve(X._payload), Je(
              G,
              q,
              X,
              oe
            );
        }
        if (W(X))
          return Ae(
            G,
            q,
            X,
            oe
          );
        if (Z(X)) {
          if (ve = Z(X), typeof ve != "function") throw Error(i(150));
          return X = ve.call(X), Ce(
            G,
            q,
            X,
            oe
          );
        }
        if (typeof X.then == "function")
          return Je(
            G,
            q,
            $o(X),
            oe
          );
        if (X.$$typeof === P)
          return Je(
            G,
            q,
            Ro(G, X),
            oe
          );
        Yo(G, X);
      }
      return typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint" ? (X = "" + X, q !== null && q.tag === 6 ? (a(G, q.sibling), oe = d(q, X), oe.return = G, G = oe) : (a(G, q), oe = hc(X, G.mode, oe), oe.return = G, G = oe), T(G)) : a(G, q);
    }
    return function(G, q, X, oe) {
      try {
        ps = 0;
        var ve = Je(
          G,
          q,
          X,
          oe
        );
        return di = null, ve;
      } catch (be) {
        if (be === is || be === zo) throw be;
        var Pe = ln(29, be, null, G.mode);
        return Pe.lanes = oe, Pe.return = G, Pe;
      } finally {
      }
    };
  }
  var fi = hm(!0), pm = hm(!1), Tn = Y(null), Fn = null;
  function Rr(e) {
    var t = e.alternate;
    V(Ct, Ct.current & 1), V(Tn, e), Fn === null && (t === null || oi.current !== null || t.memoizedState !== null) && (Fn = e);
  }
  function mm(e) {
    if (e.tag === 22) {
      if (V(Ct, Ct.current), V(Tn, e), Fn === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (Fn = e);
      }
    } else Dr();
  }
  function Dr() {
    V(Ct, Ct.current), V(Tn, Tn.current);
  }
  function hr(e) {
    ce(Tn), Fn === e && (Fn = null), ce(Ct);
  }
  var Ct = Y(0);
  function Xo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || Pd(a)))
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
  function Yc(e, t, a, o) {
    t = e.memoizedState, a = a(o, t), a = a == null ? t : g({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Xc = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var o = hn(), d = Or(o);
      d.payload = t, a != null && (d.callback = a), t = Mr(e, d, o), t !== null && (pn(t, e, o), os(t, e, o));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var o = hn(), d = Or(o);
      d.tag = 1, d.payload = t, a != null && (d.callback = a), t = Mr(e, d, o), t !== null && (pn(t, e, o), os(t, e, o));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = hn(), o = Or(a);
      o.tag = 2, t != null && (o.callback = t), t = Mr(e, o, a), t !== null && (pn(t, e, a), os(t, e, a));
    }
  };
  function gm(e, t, a, o, d, b, T) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, b, T) : t.prototype && t.prototype.isPureReactComponent ? !Ki(a, o) || !Ki(d, b) : !0;
  }
  function vm(e, t, a, o) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, o), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, o), t.state !== e && Xc.enqueueReplaceState(t, t.state, null);
  }
  function _a(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var o in t)
        o !== "ref" && (a[o] = t[o]);
    }
    if (e = e.defaultProps) {
      a === t && (a = g({}, a));
      for (var d in e)
        a[d] === void 0 && (a[d] = e[d]);
    }
    return a;
  }
  var Fo = typeof reportError == "function" ? reportError : function(e) {
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
  function ym(e) {
    Fo(e);
  }
  function _m(e) {
    console.error(e);
  }
  function bm(e) {
    Fo(e);
  }
  function Qo(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Sm(e, t, a) {
    try {
      var o = e.onCaughtError;
      o(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (d) {
      setTimeout(function() {
        throw d;
      });
    }
  }
  function Fc(e, t, a) {
    return a = Or(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Qo(e, t);
    }, a;
  }
  function wm(e) {
    return e = Or(e), e.tag = 3, e;
  }
  function Em(e, t, a, o) {
    var d = a.type.getDerivedStateFromError;
    if (typeof d == "function") {
      var b = o.value;
      e.payload = function() {
        return d(b);
      }, e.callback = function() {
        Sm(t, a, o);
      };
    }
    var T = a.stateNode;
    T !== null && typeof T.componentDidCatch == "function" && (e.callback = function() {
      Sm(t, a, o), typeof d != "function" && (Ur === null ? Ur = /* @__PURE__ */ new Set([this]) : Ur.add(this));
      var D = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: D !== null ? D : ""
      });
    });
  }
  function Rb(e, t, a, o, d) {
    if (a.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (t = a.alternate, t !== null && ns(
        t,
        a,
        d,
        !0
      ), a = Tn.current, a !== null) {
        switch (a.tag) {
          case 13:
            return Fn === null ? _d() : a.alternate === null && ht === 0 && (ht = 3), a.flags &= -257, a.flags |= 65536, a.lanes = d, o === Cc ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([o]) : t.add(o), Sd(e, o, d)), !1;
          case 22:
            return a.flags |= 65536, o === Cc ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([o]) : a.add(o)), Sd(e, o, d)), !1;
        }
        throw Error(i(435, a.tag));
      }
      return Sd(e, o, d), _d(), !1;
    }
    if ($e)
      return t = Tn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = d, o !== vc && (e = Error(i(422), { cause: o }), ts(Cn(e, a)))) : (o !== vc && (t = Error(i(423), {
        cause: o
      }), ts(
        Cn(t, a)
      )), e = e.current.alternate, e.flags |= 65536, d &= -d, e.lanes |= d, o = Cn(o, a), d = Fc(
        e.stateNode,
        o,
        d
      ), xc(e, d), ht !== 4 && (ht = 2)), !1;
    var b = Error(i(520), { cause: o });
    if (b = Cn(b, a), ws === null ? ws = [b] : ws.push(b), ht !== 4 && (ht = 2), t === null) return !0;
    o = Cn(o, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = d & -d, a.lanes |= e, e = Fc(a.stateNode, o, e), xc(a, e), !1;
        case 1:
          if (t = a.type, b = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (Ur === null || !Ur.has(b))))
            return a.flags |= 65536, d &= -d, a.lanes |= d, d = wm(d), Em(
              d,
              e,
              a,
              o
            ), xc(a, d), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Cm = Error(i(461)), Tt = !1;
  function Rt(e, t, a, o) {
    t.child = e === null ? pm(t, null, a, o) : fi(
      t,
      e.child,
      a,
      o
    );
  }
  function km(e, t, a, o, d) {
    a = a.render;
    var b = t.ref;
    if ("ref" in o) {
      var T = {};
      for (var D in o)
        D !== "ref" && (T[D] = o[D]);
    } else T = o;
    return ga(t), o = jc(
      e,
      t,
      a,
      T,
      b,
      d
    ), D = Rc(), e !== null && !Tt ? (Dc(e, t, d), pr(e, t, d)) : ($e && D && mc(t), t.flags |= 1, Rt(e, t, o, d), t.child);
  }
  function Am(e, t, a, o, d) {
    if (e === null) {
      var b = a.type;
      return typeof b == "function" && !fc(b) && b.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = b, xm(
        e,
        t,
        b,
        o,
        d
      )) : (e = No(
        a.type,
        null,
        o,
        t,
        t.mode,
        d
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (b = e.child, !rd(e, d)) {
      var T = b.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Ki, a(T, o) && e.ref === t.ref)
        return pr(e, t, d);
    }
    return t.flags |= 1, e = or(b, o), e.ref = t.ref, e.return = t, t.child = e;
  }
  function xm(e, t, a, o, d) {
    if (e !== null) {
      var b = e.memoizedProps;
      if (Ki(b, o) && e.ref === t.ref)
        if (Tt = !1, t.pendingProps = o = b, rd(e, d))
          (e.flags & 131072) !== 0 && (Tt = !0);
        else
          return t.lanes = e.lanes, pr(e, t, d);
    }
    return Qc(
      e,
      t,
      a,
      o,
      d
    );
  }
  function Tm(e, t, a) {
    var o = t.pendingProps, d = o.children, b = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (o = b !== null ? b.baseLanes | a : a, e !== null) {
          for (d = t.child = e.child, b = 0; d !== null; )
            b = b | d.lanes | d.childLanes, d = d.sibling;
          t.childLanes = b & ~o;
        } else t.childLanes = 0, t.child = null;
        return Nm(
          e,
          t,
          o,
          a
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Do(
          t,
          b !== null ? b.cachePool : null
        ), b !== null ? xp(t, b) : Nc(), mm(t);
      else
        return t.lanes = t.childLanes = 536870912, Nm(
          e,
          t,
          b !== null ? b.baseLanes | a : a,
          a
        );
    } else
      b !== null ? (Do(t, b.cachePool), xp(t, b), Dr(), t.memoizedState = null) : (e !== null && Do(t, null), Nc(), Dr());
    return Rt(e, t, d, a), t.child;
  }
  function Nm(e, t, a, o) {
    var d = Ec();
    return d = d === null ? null : { parent: Et._currentValue, pool: d }, t.memoizedState = {
      baseLanes: a,
      cachePool: d
    }, e !== null && Do(t, null), Nc(), mm(t), e !== null && ns(e, t, o, !0), null;
  }
  function Ko(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(i(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Qc(e, t, a, o, d) {
    return ga(t), a = jc(
      e,
      t,
      a,
      o,
      void 0,
      d
    ), o = Rc(), e !== null && !Tt ? (Dc(e, t, d), pr(e, t, d)) : ($e && o && mc(t), t.flags |= 1, Rt(e, t, a, d), t.child);
  }
  function Om(e, t, a, o, d, b) {
    return ga(t), t.updateQueue = null, a = Np(
      t,
      o,
      a,
      d
    ), Tp(e), o = Rc(), e !== null && !Tt ? (Dc(e, t, b), pr(e, t, b)) : ($e && o && mc(t), t.flags |= 1, Rt(e, t, a, b), t.child);
  }
  function Mm(e, t, a, o, d) {
    if (ga(t), t.stateNode === null) {
      var b = ni, T = a.contextType;
      typeof T == "object" && T !== null && (b = Ut(T)), b = new a(o, b), t.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null, b.updater = Xc, t.stateNode = b, b._reactInternals = t, b = t.stateNode, b.props = o, b.state = t.memoizedState, b.refs = {}, kc(t), T = a.contextType, b.context = typeof T == "object" && T !== null ? Ut(T) : ni, b.state = t.memoizedState, T = a.getDerivedStateFromProps, typeof T == "function" && (Yc(
        t,
        a,
        T,
        o
      ), b.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof b.getSnapshotBeforeUpdate == "function" || typeof b.UNSAFE_componentWillMount != "function" && typeof b.componentWillMount != "function" || (T = b.state, typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount(), T !== b.state && Xc.enqueueReplaceState(b, b.state, null), ls(t, o, b, d), us(), b.state = t.memoizedState), typeof b.componentDidMount == "function" && (t.flags |= 4194308), o = !0;
    } else if (e === null) {
      b = t.stateNode;
      var D = t.memoizedProps, H = _a(a, D);
      b.props = H;
      var Q = b.context, se = a.contextType;
      T = ni, typeof se == "object" && se !== null && (T = Ut(se));
      var le = a.getDerivedStateFromProps;
      se = typeof le == "function" || typeof b.getSnapshotBeforeUpdate == "function", D = t.pendingProps !== D, se || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (D || Q !== T) && vm(
        t,
        b,
        o,
        T
      ), Nr = !1;
      var J = t.memoizedState;
      b.state = J, ls(t, o, b, d), us(), Q = t.memoizedState, D || J !== Q || Nr ? (typeof le == "function" && (Yc(
        t,
        a,
        le,
        o
      ), Q = t.memoizedState), (H = Nr || gm(
        t,
        a,
        H,
        o,
        J,
        Q,
        T
      )) ? (se || typeof b.UNSAFE_componentWillMount != "function" && typeof b.componentWillMount != "function" || (typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount()), typeof b.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof b.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = o, t.memoizedState = Q), b.props = o, b.state = Q, b.context = T, o = H) : (typeof b.componentDidMount == "function" && (t.flags |= 4194308), o = !1);
    } else {
      b = t.stateNode, Ac(e, t), T = t.memoizedProps, se = _a(a, T), b.props = se, le = t.pendingProps, J = b.context, Q = a.contextType, H = ni, typeof Q == "object" && Q !== null && (H = Ut(Q)), D = a.getDerivedStateFromProps, (Q = typeof D == "function" || typeof b.getSnapshotBeforeUpdate == "function") || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (T !== le || J !== H) && vm(
        t,
        b,
        o,
        H
      ), Nr = !1, J = t.memoizedState, b.state = J, ls(t, o, b, d), us();
      var ee = t.memoizedState;
      T !== le || J !== ee || Nr || e !== null && e.dependencies !== null && jo(e.dependencies) ? (typeof D == "function" && (Yc(
        t,
        a,
        D,
        o
      ), ee = t.memoizedState), (se = Nr || gm(
        t,
        a,
        se,
        o,
        J,
        ee,
        H
      ) || e !== null && e.dependencies !== null && jo(e.dependencies)) ? (Q || typeof b.UNSAFE_componentWillUpdate != "function" && typeof b.componentWillUpdate != "function" || (typeof b.componentWillUpdate == "function" && b.componentWillUpdate(o, ee, H), typeof b.UNSAFE_componentWillUpdate == "function" && b.UNSAFE_componentWillUpdate(
        o,
        ee,
        H
      )), typeof b.componentDidUpdate == "function" && (t.flags |= 4), typeof b.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof b.componentDidUpdate != "function" || T === e.memoizedProps && J === e.memoizedState || (t.flags |= 4), typeof b.getSnapshotBeforeUpdate != "function" || T === e.memoizedProps && J === e.memoizedState || (t.flags |= 1024), t.memoizedProps = o, t.memoizedState = ee), b.props = o, b.state = ee, b.context = H, o = se) : (typeof b.componentDidUpdate != "function" || T === e.memoizedProps && J === e.memoizedState || (t.flags |= 4), typeof b.getSnapshotBeforeUpdate != "function" || T === e.memoizedProps && J === e.memoizedState || (t.flags |= 1024), o = !1);
    }
    return b = o, Ko(e, t), o = (t.flags & 128) !== 0, b || o ? (b = t.stateNode, a = o && typeof a.getDerivedStateFromError != "function" ? null : b.render(), t.flags |= 1, e !== null && o ? (t.child = fi(
      t,
      e.child,
      null,
      d
    ), t.child = fi(
      t,
      null,
      a,
      d
    )) : Rt(e, t, a, d), t.memoizedState = b.state, e = t.child) : e = pr(
      e,
      t,
      d
    ), e;
  }
  function jm(e, t, a, o) {
    return es(), t.flags |= 256, Rt(e, t, a, o), t.child;
  }
  var Kc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Jc(e) {
    return { baseLanes: e, cachePool: _p() };
  }
  function Wc(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Nn), e;
  }
  function Rm(e, t, a) {
    var o = t.pendingProps, d = !1, b = (t.flags & 128) !== 0, T;
    if ((T = b) || (T = e !== null && e.memoizedState === null ? !1 : (Ct.current & 2) !== 0), T && (d = !0, t.flags &= -129), T = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
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
                if (H = Ln(
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
          return Pd(D) ? t.lanes = 32 : t.lanes = 536870912, null;
        hr(t);
      }
      return D = o.children, o = o.fallback, d ? (Dr(), d = t.mode, D = Jo(
        { mode: "hidden", children: D },
        d
      ), o = ca(
        o,
        d,
        a,
        null
      ), D.return = t, o.return = t, D.sibling = o, t.child = D, d = t.child, d.memoizedState = Jc(a), d.childLanes = Wc(
        e,
        T,
        a
      ), t.memoizedState = Kc, o) : (Rr(t), ed(t, D));
    }
    if (H = e.memoizedState, H !== null && (D = H.dehydrated, D !== null)) {
      if (b)
        t.flags & 256 ? (Rr(t), t.flags &= -257, t = td(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (Dr(), t.child = e.child, t.flags |= 128, t = null) : (Dr(), d = o.fallback, D = t.mode, o = Jo(
          { mode: "visible", children: o.children },
          D
        ), d = ca(
          d,
          D,
          a,
          null
        ), d.flags |= 2, o.return = t, d.return = t, o.sibling = d, t.child = o, fi(
          t,
          e.child,
          null,
          a
        ), o = t.child, o.memoizedState = Jc(a), o.childLanes = Wc(
          e,
          T,
          a
        ), t.memoizedState = Kc, t = d);
      else if (Rr(t), Pd(D)) {
        if (T = D.nextSibling && D.nextSibling.dataset, T) var Q = T.dgst;
        T = Q, o = Error(i(419)), o.stack = "", o.digest = T, ts({ value: o, source: null, stack: null }), t = td(
          e,
          t,
          a
        );
      } else if (Tt || ns(e, t, a, !1), T = (a & e.childLanes) !== 0, Tt || T) {
        if (T = nt, T !== null && (o = a & -a, o = (o & 42) !== 0 ? 1 : Ll(o), o = (o & (T.suspendedLanes | a)) !== 0 ? 0 : o, o !== 0 && o !== H.retryLane))
          throw H.retryLane = o, ti(e, o), pn(T, e, o), Cm;
        D.data === "$?" || _d(), t = td(
          e,
          t,
          a
        );
      } else
        D.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = H.treeContext, ft = Ln(
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
      a,
      null
    ), d.flags |= 2), d.return = t, o.return = t, o.sibling = d, t.child = o, o = d, d = t.child, D = e.child.memoizedState, D === null ? D = Jc(a) : (H = D.cachePool, H !== null ? (Q = Et._currentValue, H = H.parent !== Q ? { parent: Q, pool: Q } : H) : H = _p(), D = {
      baseLanes: D.baseLanes | a,
      cachePool: H
    }), d.memoizedState = D, d.childLanes = Wc(
      e,
      T,
      a
    ), t.memoizedState = Kc, o) : (Rr(t), a = e.child, e = a.sibling, a = or(a, {
      mode: "visible",
      children: o.children
    }), a.return = t, a.sibling = null, e !== null && (T = t.deletions, T === null ? (t.deletions = [e], t.flags |= 16) : T.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function ed(e, t) {
    return t = Jo(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Jo(e, t) {
    return e = ln(22, e, null, t), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function td(e, t, a) {
    return fi(t, e.child, null, a), e = ed(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Dm(e, t, a) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t), _c(e.return, t, a);
  }
  function nd(e, t, a, o, d) {
    var b = e.memoizedState;
    b === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: a,
      tailMode: d
    } : (b.isBackwards = t, b.rendering = null, b.renderingStartTime = 0, b.last = o, b.tail = a, b.tailMode = d);
  }
  function zm(e, t, a) {
    var o = t.pendingProps, d = o.revealOrder, b = o.tail;
    if (Rt(e, t, o.children, a), o = Ct.current, (o & 2) !== 0)
      o = o & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Dm(e, a, t);
          else if (e.tag === 19)
            Dm(e, a, t);
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
    switch (V(Ct, o), d) {
      case "forwards":
        for (a = t.child, d = null; a !== null; )
          e = a.alternate, e !== null && Xo(e) === null && (d = a), a = a.sibling;
        a = d, a === null ? (d = t.child, t.child = null) : (d = a.sibling, a.sibling = null), nd(
          t,
          !1,
          d,
          a,
          b
        );
        break;
      case "backwards":
        for (a = null, d = t.child, t.child = null; d !== null; ) {
          if (e = d.alternate, e !== null && Xo(e) === null) {
            t.child = d;
            break;
          }
          e = d.sibling, d.sibling = a, a = d, d = e;
        }
        nd(
          t,
          !0,
          a,
          null,
          b
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
  function pr(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), Br |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (ns(
          e,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, a = or(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = or(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function rd(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && jo(e)));
  }
  function Db(e, t, a) {
    switch (t.tag) {
      case 3:
        re(t, t.stateNode.containerInfo), Tr(t, Et, e.memoizedState.cache), es();
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
          return o.dehydrated !== null ? (Rr(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Rm(e, t, a) : (Rr(t), e = pr(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        Rr(t);
        break;
      case 19:
        var d = (e.flags & 128) !== 0;
        if (o = (a & t.childLanes) !== 0, o || (ns(
          e,
          t,
          a,
          !1
        ), o = (a & t.childLanes) !== 0), d) {
          if (o)
            return zm(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (d = t.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), V(Ct, Ct.current), o) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Tm(e, t, a);
      case 24:
        Tr(t, Et, e.memoizedState.cache);
    }
    return pr(e, t, a);
  }
  function Pm(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Tt = !0;
      else {
        if (!rd(e, a) && (t.flags & 128) === 0)
          return Tt = !1, Db(
            e,
            t,
            a
          );
        Tt = (e.flags & 131072) !== 0;
      }
    else
      Tt = !1, $e && (t.flags & 1048576) !== 0 && fp(t, Mo, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var o = t.elementType, d = o._init;
          if (o = d(o._payload), t.type = o, typeof o == "function")
            fc(o) ? (e = _a(o, e), t.tag = 1, t = Mm(
              null,
              t,
              o,
              e,
              a
            )) : (t.tag = 0, t = Qc(
              null,
              t,
              o,
              e,
              a
            ));
          else {
            if (o != null) {
              if (d = o.$$typeof, d === l) {
                t.tag = 11, t = km(
                  null,
                  t,
                  o,
                  e,
                  a
                );
                break e;
              } else if (d === k) {
                t.tag = 14, t = Am(
                  null,
                  t,
                  o,
                  e,
                  a
                );
                break e;
              }
            }
            throw t = $(o) || o, Error(i(306, t, ""));
          }
        }
        return t;
      case 0:
        return Qc(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return o = t.type, d = _a(
          o,
          t.pendingProps
        ), Mm(
          e,
          t,
          o,
          d,
          a
        );
      case 3:
        e: {
          if (re(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(i(387));
          o = t.pendingProps;
          var b = t.memoizedState;
          d = b.element, Ac(e, t), ls(t, o, null, a);
          var T = t.memoizedState;
          if (o = T.cache, Tr(t, Et, o), o !== b.cache && bc(
            t,
            [Et],
            a,
            !0
          ), us(), o = T.element, b.isDehydrated)
            if (b = {
              element: o,
              isDehydrated: !1,
              cache: T.cache
            }, t.updateQueue.baseState = b, t.memoizedState = b, t.flags & 256) {
              t = jm(
                e,
                t,
                o,
                a
              );
              break e;
            } else if (o !== d) {
              d = Cn(
                Error(i(424)),
                t
              ), ts(d), t = jm(
                e,
                t,
                o,
                a
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
              for (ft = Ln(e.firstChild), $t = t, $e = !0, ha = null, Xn = !0, a = pm(
                t,
                null,
                o,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (es(), o === d) {
              t = pr(
                e,
                t,
                a
              );
              break e;
            }
            Rt(
              e,
              t,
              o,
              a
            );
          }
          t = t.child;
        }
        return t;
      case 26:
        return Ko(e, t), e === null ? (a = Ug(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : $e || (a = t.type, e = t.pendingProps, o = fu(
          ne.current
        ).createElement(a), o[Bt] = t, o[Kt] = e, zt(o, a, e), xt(o), t.stateNode = o) : t.memoizedState = Ug(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return je(t), e === null && $e && (o = t.stateNode = Lg(
          t.type,
          t.pendingProps,
          ne.current
        ), $t = t, Xn = !0, d = ft, Zr(t.type) ? (Ld = d, ft = Ln(
          o.firstChild
        )) : ft = d), Rt(
          e,
          t,
          t.pendingProps.children,
          a
        ), Ko(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && $e && ((d = o = ft) && (o = u1(
          o,
          t.type,
          t.pendingProps,
          Xn
        ), o !== null ? (t.stateNode = o, $t = t, ft = Ln(
          o.firstChild
        ), Xn = !1, d = !0) : d = !1), d || pa(t)), je(t), d = t.type, b = t.pendingProps, T = e !== null ? e.memoizedProps : null, o = b.children, Rd(d, b) ? o = null : T !== null && Rd(d, T) && (t.flags |= 32), t.memoizedState !== null && (d = jc(
          e,
          t,
          Ab,
          null,
          null,
          a
        ), Ms._currentValue = d), Ko(e, t), Rt(e, t, o, a), t.child;
      case 6:
        return e === null && $e && ((e = a = ft) && (a = l1(
          a,
          t.pendingProps,
          Xn
        ), a !== null ? (t.stateNode = a, $t = t, ft = null, e = !0) : e = !1), e || pa(t)), null;
      case 13:
        return Rm(e, t, a);
      case 4:
        return re(
          t,
          t.stateNode.containerInfo
        ), o = t.pendingProps, e === null ? t.child = fi(
          t,
          null,
          o,
          a
        ) : Rt(
          e,
          t,
          o,
          a
        ), t.child;
      case 11:
        return km(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return Rt(
          e,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return Rt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return Rt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return o = t.pendingProps, Tr(t, t.type, o.value), Rt(
          e,
          t,
          o.children,
          a
        ), t.child;
      case 9:
        return d = t.type._context, o = t.pendingProps.children, ga(t), d = Ut(d), o = o(d), t.flags |= 1, Rt(e, t, o, a), t.child;
      case 14:
        return Am(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return xm(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return zm(e, t, a);
      case 31:
        return o = t.pendingProps, a = t.mode, o = {
          mode: o.mode,
          children: o.children
        }, e === null ? (a = Jo(
          o,
          a
        ), a.ref = t.ref, t.child = a, a.return = t, t = a) : (a = or(e.child, o), a.ref = t.ref, t.child = a, a.return = t, t = a), t;
      case 22:
        return Tm(e, t, a);
      case 24:
        return ga(t), o = Ut(Et), e === null ? (d = Ec(), d === null && (d = nt, b = Sc(), d.pooledCache = b, b.refCount++, b !== null && (d.pooledCacheLanes |= a), d = b), t.memoizedState = {
          parent: o,
          cache: d
        }, kc(t), Tr(t, Et, d)) : ((e.lanes & a) !== 0 && (Ac(e, t), ls(t, null, null, a), us()), d = e.memoizedState, b = t.memoizedState, d.parent !== o ? (d = { parent: o, cache: o }, t.memoizedState = d, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = d), Tr(t, Et, o)) : (o = b.cache, Tr(t, Et, o), o !== d.cache && bc(
          t,
          [Et],
          a,
          !0
        ))), Rt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(i(156, t.tag));
  }
  function mr(e) {
    e.flags |= 4;
  }
  function Lm(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Vg(t)) {
      if (t = Tn.current, t !== null && ((Ge & 4194048) === Ge ? Fn !== null : (Ge & 62914560) !== Ge && (Ge & 536870912) === 0 || t !== Fn))
        throw ss = Cc, bp;
      e.flags |= 8192;
    }
  }
  function Wo(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? mh() : 536870912, e.lanes |= t, gi |= t);
  }
  function gs(e, t) {
    if (!$e)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = e.tail;
          for (var o = null; a !== null; )
            a.alternate !== null && (o = a), a = a.sibling;
          o === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null;
      }
  }
  function ut(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, o = 0;
    if (t)
      for (var d = e.child; d !== null; )
        a |= d.lanes | d.childLanes, o |= d.subtreeFlags & 65011712, o |= d.flags & 65011712, d.return = e, d = d.sibling;
    else
      for (d = e.child; d !== null; )
        a |= d.lanes | d.childLanes, o |= d.subtreeFlags, o |= d.flags, d.return = e, d = d.sibling;
    return e.subtreeFlags |= o, e.childLanes = a, t;
  }
  function zb(e, t, a) {
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
        return a = t.stateNode, o = null, e !== null && (o = e.memoizedState.cache), t.memoizedState.cache !== o && (t.flags |= 2048), dr(Et), pe(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Wi(t) ? mr(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, mp())), ut(t), null;
      case 26:
        return a = t.memoizedState, e === null ? (mr(t), a !== null ? (ut(t), Lm(t, a)) : (ut(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (mr(t), ut(t), Lm(t, a)) : (ut(t), t.flags &= -16777217) : (e.memoizedProps !== o && mr(t), ut(t), t.flags &= -16777217), null;
      case 27:
        Se(t), a = ne.current;
        var d = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== o && mr(t);
        else {
          if (!o) {
            if (t.stateNode === null)
              throw Error(i(166));
            return ut(t), null;
          }
          e = U.current, Wi(t) ? hp(t) : (e = Lg(d, o, a), t.stateNode = e, mr(t));
        }
        return ut(t), null;
      case 5:
        if (Se(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== o && mr(t);
        else {
          if (!o) {
            if (t.stateNode === null)
              throw Error(i(166));
            return ut(t), null;
          }
          if (e = U.current, Wi(t))
            hp(t);
          else {
            switch (d = fu(
              ne.current
            ), e) {
              case 1:
                e = d.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                e = d.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    e = d.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    e = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    e = d.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof o.is == "string" ? d.createElement("select", { is: o.is }) : d.createElement("select"), o.multiple ? e.multiple = !0 : o.size && (e.size = o.size);
                    break;
                  default:
                    e = typeof o.is == "string" ? d.createElement(a, { is: o.is }) : d.createElement(a);
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
            e: switch (zt(e, a, o), a) {
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
            throw Error(i(166));
          if (e = ne.current, Wi(t)) {
            if (e = t.stateNode, a = t.memoizedProps, o = null, d = $t, d !== null)
              switch (d.tag) {
                case 27:
                case 5:
                  o = d.memoizedProps;
              }
            e[Bt] = t, e = !!(e.nodeValue === a || o !== null && o.suppressHydrationWarning === !0 || Og(e.nodeValue, a)), e || pa(t);
          } else
            e = fu(e).createTextNode(
              o
            ), e[Bt] = t, t.stateNode = e;
        }
        return ut(t), null;
      case 13:
        if (o = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (d = Wi(t), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!d) throw Error(i(318));
              if (d = t.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(i(317));
              d[Bt] = t;
            } else
              es(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ut(t), d = !1;
          } else
            d = mp(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = d), d = !0;
          if (!d)
            return t.flags & 256 ? (hr(t), t) : (hr(t), null);
        }
        if (hr(t), (t.flags & 128) !== 0)
          return t.lanes = a, t;
        if (a = o !== null, e = e !== null && e.memoizedState !== null, a) {
          o = t.child, d = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (d = o.alternate.memoizedState.cachePool.pool);
          var b = null;
          o.memoizedState !== null && o.memoizedState.cachePool !== null && (b = o.memoizedState.cachePool.pool), b !== d && (o.flags |= 2048);
        }
        return a !== e && a && (t.child.flags |= 8192), Wo(t, t.updateQueue), ut(t), null;
      case 4:
        return pe(), e === null && Td(t.stateNode.containerInfo), ut(t), null;
      case 10:
        return dr(t.type), ut(t), null;
      case 19:
        if (ce(Ct), d = t.memoizedState, d === null) return ut(t), null;
        if (o = (t.flags & 128) !== 0, b = d.rendering, b === null)
          if (o) gs(d, !1);
          else {
            if (ht !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (b = Xo(e), b !== null) {
                  for (t.flags |= 128, gs(d, !1), e = b.updateQueue, t.updateQueue = e, Wo(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    dp(a, e), a = a.sibling;
                  return V(
                    Ct,
                    Ct.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            d.tail !== null && Fe() > nu && (t.flags |= 128, o = !0, gs(d, !1), t.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = Xo(b), e !== null) {
              if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, Wo(t, e), gs(d, !0), d.tail === null && d.tailMode === "hidden" && !b.alternate && !$e)
                return ut(t), null;
            } else
              2 * Fe() - d.renderingStartTime > nu && a !== 536870912 && (t.flags |= 128, o = !0, gs(d, !1), t.lanes = 4194304);
          d.isBackwards ? (b.sibling = t.child, t.child = b) : (e = d.last, e !== null ? e.sibling = b : t.child = b, d.last = b);
        }
        return d.tail !== null ? (t = d.tail, d.rendering = t, d.tail = t.sibling, d.renderingStartTime = Fe(), t.sibling = null, e = Ct.current, V(Ct, o ? e & 1 | 2 : e & 1), t) : (ut(t), null);
      case 22:
      case 23:
        return hr(t), Oc(), o = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (t.flags |= 8192) : o && (t.flags |= 8192), o ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (ut(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ut(t), a = t.updateQueue, a !== null && Wo(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), o = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (o = t.memoizedState.cachePool.pool), o !== a && (t.flags |= 2048), e !== null && ce(va), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), dr(Et), ut(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, t.tag));
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
            throw Error(i(340));
          es();
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
  function Im(e, t) {
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
  function vs(e, t) {
    try {
      var a = t.updateQueue, o = a !== null ? a.lastEffect : null;
      if (o !== null) {
        var d = o.next;
        a = d;
        do {
          if ((a.tag & e) === e) {
            o = void 0;
            var b = a.create, T = a.inst;
            o = b(), T.destroy = o;
          }
          a = a.next;
        } while (a !== d);
      }
    } catch (D) {
      tt(t, t.return, D);
    }
  }
  function zr(e, t, a) {
    try {
      var o = t.updateQueue, d = o !== null ? o.lastEffect : null;
      if (d !== null) {
        var b = d.next;
        o = b;
        do {
          if ((o.tag & e) === e) {
            var T = o.inst, D = T.destroy;
            if (D !== void 0) {
              T.destroy = void 0, d = t;
              var H = a, Q = D;
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
      tt(t, t.return, se);
    }
  }
  function Bm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        Ap(t, a);
      } catch (o) {
        tt(e, e.return, o);
      }
    }
  }
  function Um(e, t, a) {
    a.props = _a(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (o) {
      tt(e, t, o);
    }
  }
  function ys(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
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
        typeof a == "function" ? e.refCleanup = a(o) : a.current = o;
      }
    } catch (d) {
      tt(e, t, d);
    }
  }
  function Qn(e, t) {
    var a = e.ref, o = e.refCleanup;
    if (a !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (d) {
          tt(e, t, d);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (d) {
          tt(e, t, d);
        }
      else a.current = null;
  }
  function Hm(e) {
    var t = e.type, a = e.memoizedProps, o = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && o.focus();
          break e;
        case "img":
          a.src ? o.src = a.src : a.srcSet && (o.srcset = a.srcSet);
      }
    } catch (d) {
      tt(e, e.return, d);
    }
  }
  function ad(e, t, a) {
    try {
      var o = e.stateNode;
      r1(o, e.type, a, t), o[Kt] = t;
    } catch (d) {
      tt(e, e.return, d);
    }
  }
  function qm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Zr(e.type) || e.tag === 4;
  }
  function id(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || qm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Zr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function sd(e, t, a) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = du));
    else if (o !== 4 && (o === 27 && Zr(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (sd(e, t, a), e = e.sibling; e !== null; )
        sd(e, t, a), e = e.sibling;
  }
  function eu(e, t, a) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (o !== 4 && (o === 27 && Zr(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (eu(e, t, a), e = e.sibling; e !== null; )
        eu(e, t, a), e = e.sibling;
  }
  function Zm(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var o = e.type, d = t.attributes; d.length; )
        t.removeAttributeNode(d[0]);
      zt(t, o, a), t[Bt] = e, t[Kt] = a;
    } catch (b) {
      tt(e, e.return, b);
    }
  }
  var gr = !1, vt = !1, od = !1, Gm = typeof WeakSet == "function" ? WeakSet : Set, Nt = null;
  function Lb(e, t) {
    if (e = e.containerInfo, Md = yu, e = tp(e), ic(e)) {
      if ("selectionStart" in e)
        var a = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          a = (a = e.ownerDocument) && a.defaultView || window;
          var o = a.getSelection && a.getSelection();
          if (o && o.rangeCount !== 0) {
            a = o.anchorNode;
            var d = o.anchorOffset, b = o.focusNode;
            o = o.focusOffset;
            try {
              a.nodeType, b.nodeType;
            } catch {
              a = null;
              break e;
            }
            var T = 0, D = -1, H = -1, Q = 0, se = 0, le = e, J = null;
            t: for (; ; ) {
              for (var ee; le !== a || d !== 0 && le.nodeType !== 3 || (D = T + d), le !== b || o !== 0 && le.nodeType !== 3 || (H = T + o), le.nodeType === 3 && (T += le.nodeValue.length), (ee = le.firstChild) !== null; )
                J = le, le = ee;
              for (; ; ) {
                if (le === e) break t;
                if (J === a && ++Q === d && (D = T), J === b && ++se === o && (H = T), (ee = le.nextSibling) !== null) break;
                le = J, J = le.parentNode;
              }
              le = ee;
            }
            a = D === -1 || H === -1 ? null : { start: D, end: H };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (jd = { focusedElem: e, selectionRange: a }, yu = !1, Nt = t; Nt !== null; )
      if (t = Nt, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = t, Nt = e;
      else
        for (; Nt !== null; ) {
          switch (t = Nt, b = t.alternate, e = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && b !== null) {
                e = void 0, a = t, d = b.memoizedProps, b = b.memoizedState, o = a.stateNode;
                try {
                  var Ae = _a(
                    a.type,
                    d,
                    a.elementType === a.type
                  );
                  e = o.getSnapshotBeforeUpdate(
                    Ae,
                    b
                  ), o.__reactInternalSnapshotBeforeUpdate = e;
                } catch (Ce) {
                  tt(
                    a,
                    a.return,
                    Ce
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9)
                  zd(e);
                else if (a === 1)
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
              if ((e & 1024) !== 0) throw Error(i(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, Nt = e;
            break;
          }
          Nt = t.return;
        }
  }
  function Vm(e, t, a) {
    var o = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Pr(e, a), o & 4 && vs(5, a);
        break;
      case 1:
        if (Pr(e, a), o & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (T) {
              tt(a, a.return, T);
            }
          else {
            var d = _a(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                d,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (T) {
              tt(
                a,
                a.return,
                T
              );
            }
          }
        o & 64 && Bm(a), o & 512 && ys(a, a.return);
        break;
      case 3:
        if (Pr(e, a), o & 64 && (e = a.updateQueue, e !== null)) {
          if (t = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Ap(e, t);
          } catch (T) {
            tt(a, a.return, T);
          }
        }
        break;
      case 27:
        t === null && o & 4 && Zm(a);
      case 26:
      case 5:
        Pr(e, a), t === null && o & 4 && Hm(a), o & 512 && ys(a, a.return);
        break;
      case 12:
        Pr(e, a);
        break;
      case 13:
        Pr(e, a), o & 4 && Xm(e, a), o & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = $b.bind(
          null,
          a
        ), c1(e, a))));
        break;
      case 22:
        if (o = a.memoizedState !== null || gr, !o) {
          t = t !== null && t.memoizedState !== null || vt, d = gr;
          var b = vt;
          gr = o, (vt = t) && !b ? Lr(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Pr(e, a), gr = d, vt = b;
        }
        break;
      case 30:
        break;
      default:
        Pr(e, a);
    }
  }
  function $m(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, $m(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ul(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var at = null, en = !1;
  function vr(e, t, a) {
    for (a = a.child; a !== null; )
      Ym(e, t, a), a = a.sibling;
  }
  function Ym(e, t, a) {
    if (mt && typeof mt.onCommitFiberUnmount == "function")
      try {
        mt.onCommitFiberUnmount(Dn, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        vt || Qn(a, t), vr(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        vt || Qn(a, t);
        var o = at, d = en;
        Zr(a.type) && (at = a.stateNode, en = !1), vr(
          e,
          t,
          a
        ), xs(a.stateNode), at = o, en = d;
        break;
      case 5:
        vt || Qn(a, t);
      case 6:
        if (o = at, d = en, at = null, vr(
          e,
          t,
          a
        ), at = o, en = d, at !== null)
          if (en)
            try {
              (at.nodeType === 9 ? at.body : at.nodeName === "HTML" ? at.ownerDocument.body : at).removeChild(a.stateNode);
            } catch (b) {
              tt(
                a,
                t,
                b
              );
            }
          else
            try {
              at.removeChild(a.stateNode);
            } catch (b) {
              tt(
                a,
                t,
                b
              );
            }
        break;
      case 18:
        at !== null && (en ? (e = at, zg(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), zs(e)) : zg(at, a.stateNode));
        break;
      case 4:
        o = at, d = en, at = a.stateNode.containerInfo, en = !0, vr(
          e,
          t,
          a
        ), at = o, en = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        vt || zr(2, a, t), vt || zr(4, a, t), vr(
          e,
          t,
          a
        );
        break;
      case 1:
        vt || (Qn(a, t), o = a.stateNode, typeof o.componentWillUnmount == "function" && Um(
          a,
          t,
          o
        )), vr(
          e,
          t,
          a
        );
        break;
      case 21:
        vr(
          e,
          t,
          a
        );
        break;
      case 22:
        vt = (o = vt) || a.memoizedState !== null, vr(
          e,
          t,
          a
        ), vt = o;
        break;
      default:
        vr(
          e,
          t,
          a
        );
    }
  }
  function Xm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        zs(e);
      } catch (a) {
        tt(t, t.return, a);
      }
  }
  function Ib(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Gm()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Gm()), t;
      default:
        throw Error(i(435, e.tag));
    }
  }
  function ud(e, t) {
    var a = Ib(e);
    t.forEach(function(o) {
      var d = Yb.bind(null, e, o);
      a.has(o) || (a.add(o), o.then(d, d));
    });
  }
  function cn(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var o = 0; o < a.length; o++) {
        var d = a[o], b = e, T = t, D = T;
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
        if (at === null) throw Error(i(160));
        Ym(b, T, d), at = null, en = !1, b = d.alternate, b !== null && (b.return = null), d.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        Fm(t, e), t = t.sibling;
  }
  var Pn = null;
  function Fm(e, t) {
    var a = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        cn(t, e), dn(e), o & 4 && (zr(3, e, e.return), vs(3, e), zr(5, e, e.return));
        break;
      case 1:
        cn(t, e), dn(e), o & 512 && (vt || a === null || Qn(a, a.return)), o & 64 && gr && (e = e.updateQueue, e !== null && (o = e.callbacks, o !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? o : a.concat(o))));
        break;
      case 26:
        var d = Pn;
        if (cn(t, e), dn(e), o & 512 && (vt || a === null || Qn(a, a.return)), o & 4) {
          var b = a !== null ? a.memoizedState : null;
          if (o = e.memoizedState, a === null)
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  o = e.type, a = e.memoizedProps, d = d.ownerDocument || d;
                  t: switch (o) {
                    case "title":
                      b = d.getElementsByTagName("title")[0], (!b || b[qi] || b[Bt] || b.namespaceURI === "http://www.w3.org/2000/svg" || b.hasAttribute("itemprop")) && (b = d.createElement(o), d.head.insertBefore(
                        b,
                        d.querySelector("head > title")
                      )), zt(b, o, a), b[Bt] = e, xt(b), o = b;
                      break e;
                    case "link":
                      var T = Zg(
                        "link",
                        "href",
                        d
                      ).get(o + (a.href || ""));
                      if (T) {
                        for (var D = 0; D < T.length; D++)
                          if (b = T[D], b.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && b.getAttribute("rel") === (a.rel == null ? null : a.rel) && b.getAttribute("title") === (a.title == null ? null : a.title) && b.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            T.splice(D, 1);
                            break t;
                          }
                      }
                      b = d.createElement(o), zt(b, o, a), d.head.appendChild(b);
                      break;
                    case "meta":
                      if (T = Zg(
                        "meta",
                        "content",
                        d
                      ).get(o + (a.content || ""))) {
                        for (D = 0; D < T.length; D++)
                          if (b = T[D], b.getAttribute("content") === (a.content == null ? null : "" + a.content) && b.getAttribute("name") === (a.name == null ? null : a.name) && b.getAttribute("property") === (a.property == null ? null : a.property) && b.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && b.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            T.splice(D, 1);
                            break t;
                          }
                      }
                      b = d.createElement(o), zt(b, o, a), d.head.appendChild(b);
                      break;
                    default:
                      throw Error(i(468, o));
                  }
                  b[Bt] = e, xt(b), o = b;
                }
                e.stateNode = o;
              } else
                Gg(
                  d,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = qg(
                d,
                o,
                e.memoizedProps
              );
          else
            b !== o ? (b === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : b.count--, o === null ? Gg(
              d,
              e.type,
              e.stateNode
            ) : qg(
              d,
              o,
              e.memoizedProps
            )) : o === null && e.stateNode !== null && ad(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        cn(t, e), dn(e), o & 512 && (vt || a === null || Qn(a, a.return)), a !== null && o & 4 && ad(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (cn(t, e), dn(e), o & 512 && (vt || a === null || Qn(a, a.return)), e.flags & 32) {
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
          a !== null ? a.memoizedProps : d
        )), o & 1024 && (od = !0);
        break;
      case 6:
        if (cn(t, e), dn(e), o & 4) {
          if (e.stateNode === null)
            throw Error(i(162));
          o = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = o;
          } catch (ee) {
            tt(e, e.return, ee);
          }
        }
        break;
      case 3:
        if (mu = null, d = Pn, Pn = hu(t.containerInfo), cn(t, e), Pn = d, dn(e), o & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            zs(t.containerInfo);
          } catch (ee) {
            tt(e, e.return, ee);
          }
        od && (od = !1, Qm(e));
        break;
      case 4:
        o = Pn, Pn = hu(
          e.stateNode.containerInfo
        ), cn(t, e), dn(e), Pn = o;
        break;
      case 12:
        cn(t, e), dn(e);
        break;
      case 13:
        cn(t, e), dn(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (pd = Fe()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, ud(e, o)));
        break;
      case 22:
        d = e.memoizedState !== null;
        var H = a !== null && a.memoizedState !== null, Q = gr, se = vt;
        if (gr = Q || d, vt = se || H, cn(t, e), vt = se, gr = Q, dn(e), o & 8192)
          e: for (t = e.stateNode, t._visibility = d ? t._visibility & -2 : t._visibility | 1, d && (a === null || H || gr || vt || ba(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                H = a = t;
                try {
                  if (b = H.stateNode, d)
                    T = b.style, typeof T.setProperty == "function" ? T.setProperty("display", "none", "important") : T.display = "none";
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
              if (a === null) {
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
              a === t && (a = null), t = t.return;
            }
            a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
          }
        o & 4 && (o = e.updateQueue, o !== null && (a = o.retryQueue, a !== null && (o.retryQueue = null, ud(e, a))));
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
        for (var a, o = e.return; o !== null; ) {
          if (qm(o)) {
            a = o;
            break;
          }
          o = o.return;
        }
        if (a == null) throw Error(i(160));
        switch (a.tag) {
          case 27:
            var d = a.stateNode, b = id(e);
            eu(e, b, d);
            break;
          case 5:
            var T = a.stateNode;
            a.flags & 32 && (Xa(T, ""), a.flags &= -33);
            var D = id(e);
            eu(e, D, T);
            break;
          case 3:
          case 4:
            var H = a.stateNode.containerInfo, Q = id(e);
            sd(
              e,
              Q,
              H
            );
            break;
          default:
            throw Error(i(161));
        }
      } catch (se) {
        tt(e, e.return, se);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Qm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Qm(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Pr(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Vm(e, t.alternate, t), t = t.sibling;
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
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Um(
            t,
            t.return,
            a
          ), ba(t);
          break;
        case 27:
          xs(t.stateNode);
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
  function Lr(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var o = t.alternate, d = e, b = t, T = b.flags;
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          Lr(
            d,
            b,
            a
          ), vs(4, b);
          break;
        case 1:
          if (Lr(
            d,
            b,
            a
          ), o = b, d = o.stateNode, typeof d.componentDidMount == "function")
            try {
              d.componentDidMount();
            } catch (Q) {
              tt(o, o.return, Q);
            }
          if (o = b, d = o.updateQueue, d !== null) {
            var D = o.stateNode;
            try {
              var H = d.shared.hiddenCallbacks;
              if (H !== null)
                for (d.shared.hiddenCallbacks = null, d = 0; d < H.length; d++)
                  kp(H[d], D);
            } catch (Q) {
              tt(o, o.return, Q);
            }
          }
          a && T & 64 && Bm(b), ys(b, b.return);
          break;
        case 27:
          Zm(b);
        case 26:
        case 5:
          Lr(
            d,
            b,
            a
          ), a && o === null && T & 4 && Hm(b), ys(b, b.return);
          break;
        case 12:
          Lr(
            d,
            b,
            a
          );
          break;
        case 13:
          Lr(
            d,
            b,
            a
          ), a && T & 4 && Xm(d, b);
          break;
        case 22:
          b.memoizedState === null && Lr(
            d,
            b,
            a
          ), ys(b, b.return);
          break;
        case 30:
          break;
        default:
          Lr(
            d,
            b,
            a
          );
      }
      t = t.sibling;
    }
  }
  function ld(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && rs(a));
  }
  function cd(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && rs(e));
  }
  function Kn(e, t, a, o) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Km(
          e,
          t,
          a,
          o
        ), t = t.sibling;
  }
  function Km(e, t, a, o) {
    var d = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Kn(
          e,
          t,
          a,
          o
        ), d & 2048 && vs(9, t);
        break;
      case 1:
        Kn(
          e,
          t,
          a,
          o
        );
        break;
      case 3:
        Kn(
          e,
          t,
          a,
          o
        ), d & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && rs(e)));
        break;
      case 12:
        if (d & 2048) {
          Kn(
            e,
            t,
            a,
            o
          ), e = t.stateNode;
          try {
            var b = t.memoizedProps, T = b.id, D = b.onPostCommit;
            typeof D == "function" && D(
              T,
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
            a,
            o
          );
        break;
      case 13:
        Kn(
          e,
          t,
          a,
          o
        );
        break;
      case 23:
        break;
      case 22:
        b = t.stateNode, T = t.alternate, t.memoizedState !== null ? b._visibility & 2 ? Kn(
          e,
          t,
          a,
          o
        ) : _s(e, t) : b._visibility & 2 ? Kn(
          e,
          t,
          a,
          o
        ) : (b._visibility |= 2, hi(
          e,
          t,
          a,
          o,
          (t.subtreeFlags & 10256) !== 0
        )), d & 2048 && ld(T, t);
        break;
      case 24:
        Kn(
          e,
          t,
          a,
          o
        ), d & 2048 && cd(t.alternate, t);
        break;
      default:
        Kn(
          e,
          t,
          a,
          o
        );
    }
  }
  function hi(e, t, a, o, d) {
    for (d = d && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var b = e, T = t, D = a, H = o, Q = T.flags;
      switch (T.tag) {
        case 0:
        case 11:
        case 15:
          hi(
            b,
            T,
            D,
            H,
            d
          ), vs(8, T);
          break;
        case 23:
          break;
        case 22:
          var se = T.stateNode;
          T.memoizedState !== null ? se._visibility & 2 ? hi(
            b,
            T,
            D,
            H,
            d
          ) : _s(
            b,
            T
          ) : (se._visibility |= 2, hi(
            b,
            T,
            D,
            H,
            d
          )), d && Q & 2048 && ld(
            T.alternate,
            T
          );
          break;
        case 24:
          hi(
            b,
            T,
            D,
            H,
            d
          ), d && Q & 2048 && cd(T.alternate, T);
          break;
        default:
          hi(
            b,
            T,
            D,
            H,
            d
          );
      }
      t = t.sibling;
    }
  }
  function _s(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, o = t, d = o.flags;
        switch (o.tag) {
          case 22:
            _s(a, o), d & 2048 && ld(
              o.alternate,
              o
            );
            break;
          case 24:
            _s(a, o), d & 2048 && cd(o.alternate, o);
            break;
          default:
            _s(a, o);
        }
        t = t.sibling;
      }
  }
  var bs = 8192;
  function pi(e) {
    if (e.subtreeFlags & bs)
      for (e = e.child; e !== null; )
        Jm(e), e = e.sibling;
  }
  function Jm(e) {
    switch (e.tag) {
      case 26:
        pi(e), e.flags & bs && e.memoizedState !== null && E1(
          Pn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        pi(e);
        break;
      case 3:
      case 4:
        var t = Pn;
        Pn = hu(e.stateNode.containerInfo), pi(e), Pn = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = bs, bs = 16777216, pi(e), bs = t) : pi(e));
        break;
      default:
        pi(e);
    }
  }
  function Wm(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Ss(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var o = t[a];
          Nt = o, tg(
            o,
            e
          );
        }
      Wm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        eg(e), e = e.sibling;
  }
  function eg(e) {
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
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, tu(e)) : Ss(e);
        break;
      default:
        Ss(e);
    }
  }
  function tu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var o = t[a];
          Nt = o, tg(
            o,
            e
          );
        }
      Wm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          zr(8, t, t.return), tu(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, tu(t));
          break;
        default:
          tu(t);
      }
      e = e.sibling;
    }
  }
  function tg(e, t) {
    for (; Nt !== null; ) {
      var a = Nt;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          zr(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var o = a.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          rs(a.memoizedState.cache);
      }
      if (o = a.child, o !== null) o.return = a, Nt = o;
      else
        e: for (a = e; Nt !== null; ) {
          o = Nt;
          var d = o.sibling, b = o.return;
          if ($m(o), o === a) {
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
  var Bb = {
    getCacheForType: function(e) {
      var t = Ut(Et), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    }
  }, Ub = typeof WeakMap == "function" ? WeakMap : Map, Ye = 0, nt = null, Ie = null, Ge = 0, Xe = 0, fn = null, Ir = !1, mi = !1, dd = !1, yr = 0, ht = 0, Br = 0, Sa = 0, fd = 0, Nn = 0, gi = 0, ws = null, tn = null, hd = !1, pd = 0, nu = 1 / 0, ru = null, Ur = null, Dt = 0, Hr = null, vi = null, yi = 0, md = 0, gd = null, ng = null, Es = 0, vd = null;
  function hn() {
    if ((Ye & 2) !== 0 && Ge !== 0)
      return Ge & -Ge;
    if (j.T !== null) {
      var e = ii;
      return e !== 0 ? e : Cd();
    }
    return yh();
  }
  function rg() {
    Nn === 0 && (Nn = (Ge & 536870912) === 0 || $e ? Ua() : 536870912);
    var e = Tn.current;
    return e !== null && (e.flags |= 32), Nn;
  }
  function pn(e, t, a) {
    (e === nt && (Xe === 2 || Xe === 9) || e.cancelPendingCommit !== null) && (_i(e, 0), qr(
      e,
      Ge,
      Nn,
      !1
    )), Hi(e, a), ((Ye & 2) === 0 || e !== nt) && (e === nt && ((Ye & 2) === 0 && (Sa |= a), ht === 4 && qr(
      e,
      Ge,
      Nn,
      !1
    )), Jn(e));
  }
  function ag(e, t, a) {
    if ((Ye & 6) !== 0) throw Error(i(327));
    var o = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Qt(e, t), d = o ? Zb(e, t) : bd(e, t, !0), b = o;
    do {
      if (d === 0) {
        mi && !o && qr(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, b && !Hb(a)) {
          d = bd(e, t, !1), b = !1;
          continue;
        }
        if (d === 2) {
          if (b = t, e.errorRecoveryDisabledLanes & b)
            var T = 0;
          else
            T = e.pendingLanes & -536870913, T = T !== 0 ? T : T & 536870912 ? 536870912 : 0;
          if (T !== 0) {
            t = T;
            e: {
              var D = e;
              d = ws;
              var H = D.current.memoizedState.isDehydrated;
              if (H && (_i(D, T).flags |= 256), T = bd(
                D,
                T,
                !1
              ), T !== 2) {
                if (dd && !H) {
                  D.errorRecoveryDisabledLanes |= b, Sa |= b, d = 4;
                  break e;
                }
                b = tn, tn = d, b !== null && (tn === null ? tn = b : tn.push.apply(
                  tn,
                  b
                ));
              }
              d = T;
            }
            if (b = !1, d !== 2) continue;
          }
        }
        if (d === 1) {
          _i(e, 0), qr(e, t, 0, !0);
          break;
        }
        e: {
          switch (o = e, b = d, b) {
            case 0:
            case 1:
              throw Error(i(345));
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
              throw Error(i(329));
          }
          if ((t & 62914560) === t && (d = pd + 300 - Fe(), 10 < d)) {
            if (qr(
              o,
              t,
              Nn,
              !Ir
            ), Vt(o, 0, !0) !== 0) break e;
            o.timeoutHandle = Rg(
              ig.bind(
                null,
                o,
                a,
                tn,
                ru,
                hd,
                t,
                Nn,
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
          ig(
            o,
            a,
            tn,
            ru,
            hd,
            t,
            Nn,
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
  function ig(e, t, a, o, d, b, T, D, H, Q, se, le, J, ee) {
    if (e.timeoutHandle = -1, le = t.subtreeFlags, (le & 8192 || (le & 16785408) === 16785408) && (Os = { stylesheets: null, count: 0, unsuspend: w1 }, Jm(t), le = C1(), le !== null)) {
      e.cancelPendingCommit = le(
        fg.bind(
          null,
          e,
          t,
          b,
          a,
          o,
          d,
          T,
          D,
          H,
          se,
          1,
          J,
          ee
        )
      ), qr(e, b, T, !Q);
      return;
    }
    fg(
      e,
      t,
      b,
      a,
      o,
      d,
      T,
      D,
      H
    );
  }
  function Hb(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var o = 0; o < a.length; o++) {
          var d = a[o], b = d.getSnapshot;
          d = d.value;
          try {
            if (!un(b(), d)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null)
        a.return = t, t = a;
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
  function qr(e, t, a, o) {
    t &= ~fd, t &= ~Sa, e.suspendedLanes |= t, e.pingedLanes &= ~t, o && (e.warmLanes |= t), o = e.expirationTimes;
    for (var d = t; 0 < d; ) {
      var b = 31 - Gt(d), T = 1 << b;
      o[b] = -1, d &= ~T;
    }
    a !== 0 && gh(e, a, t);
  }
  function au() {
    return (Ye & 6) === 0 ? (Cs(0), !1) : !0;
  }
  function yd() {
    if (Ie !== null) {
      if (Xe === 0)
        var e = Ie.return;
      else
        e = Ie, cr = ma = null, zc(e), di = null, ps = 0, e = Ie;
      for (; e !== null; )
        Im(e.alternate, e), e = e.return;
      Ie = null;
    }
  }
  function _i(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, i1(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), yd(), nt = e, Ie = a = or(e.current, null), Ge = t, Xe = 0, fn = null, Ir = !1, mi = Qt(e, t), dd = !1, gi = Nn = fd = Sa = Br = ht = 0, tn = ws = null, hd = !1, (t & 8) !== 0 && (t |= t & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= t; 0 < o; ) {
        var d = 31 - Gt(o), b = 1 << d;
        t |= e[d], o &= ~b;
      }
    return yr = t, Ao(), a;
  }
  function sg(e, t) {
    ze = null, j.H = Vo, t === is || t === zo ? (t = Ep(), Xe = 3) : t === bp ? (t = Ep(), Xe = 4) : Xe = t === Cm ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, fn = t, Ie === null && (ht = 1, Qo(
      e,
      Cn(t, e.current)
    ));
  }
  function og() {
    var e = j.H;
    return j.H = Vo, e === null ? Vo : e;
  }
  function ug() {
    var e = j.A;
    return j.A = Bb, e;
  }
  function _d() {
    ht = 4, Ir || (Ge & 4194048) !== Ge && Tn.current !== null || (mi = !0), (Br & 134217727) === 0 && (Sa & 134217727) === 0 || nt === null || qr(
      nt,
      Ge,
      Nn,
      !1
    );
  }
  function bd(e, t, a) {
    var o = Ye;
    Ye |= 2;
    var d = og(), b = ug();
    (nt !== e || Ge !== t) && (ru = null, _i(e, t)), t = !1;
    var T = ht;
    e: do
      try {
        if (Xe !== 0 && Ie !== null) {
          var D = Ie, H = fn;
          switch (Xe) {
            case 8:
              yd(), T = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Tn.current === null && (t = !0);
              var Q = Xe;
              if (Xe = 0, fn = null, bi(e, D, H, Q), a && mi) {
                T = 0;
                break e;
              }
              break;
            default:
              Q = Xe, Xe = 0, fn = null, bi(e, D, H, Q);
          }
        }
        qb(), T = ht;
        break;
      } catch (se) {
        sg(e, se);
      }
    while (!0);
    return t && e.shellSuspendCounter++, cr = ma = null, Ye = o, j.H = d, j.A = b, Ie === null && (nt = null, Ge = 0, Ao()), T;
  }
  function qb() {
    for (; Ie !== null; ) lg(Ie);
  }
  function Zb(e, t) {
    var a = Ye;
    Ye |= 2;
    var o = og(), d = ug();
    nt !== e || Ge !== t ? (ru = null, nu = Fe() + 500, _i(e, t)) : mi = Qt(
      e,
      t
    );
    e: do
      try {
        if (Xe !== 0 && Ie !== null) {
          t = Ie;
          var b = fn;
          t: switch (Xe) {
            case 1:
              Xe = 0, fn = null, bi(e, t, b, 1);
              break;
            case 2:
            case 9:
              if (Sp(b)) {
                Xe = 0, fn = null, cg(t);
                break;
              }
              t = function() {
                Xe !== 2 && Xe !== 9 || nt !== e || (Xe = 7), Jn(e);
              }, b.then(t, t);
              break e;
            case 3:
              Xe = 7;
              break e;
            case 4:
              Xe = 5;
              break e;
            case 7:
              Sp(b) ? (Xe = 0, fn = null, cg(t)) : (Xe = 0, fn = null, bi(e, t, b, 7));
              break;
            case 5:
              var T = null;
              switch (Ie.tag) {
                case 26:
                  T = Ie.memoizedState;
                case 5:
                case 27:
                  var D = Ie;
                  if (!T || Vg(T)) {
                    Xe = 0, fn = null;
                    var H = D.sibling;
                    if (H !== null) Ie = H;
                    else {
                      var Q = D.return;
                      Q !== null ? (Ie = Q, iu(Q)) : Ie = null;
                    }
                    break t;
                  }
              }
              Xe = 0, fn = null, bi(e, t, b, 5);
              break;
            case 6:
              Xe = 0, fn = null, bi(e, t, b, 6);
              break;
            case 8:
              yd(), ht = 6;
              break e;
            default:
              throw Error(i(462));
          }
        }
        Gb();
        break;
      } catch (se) {
        sg(e, se);
      }
    while (!0);
    return cr = ma = null, j.H = o, j.A = d, Ye = a, Ie !== null ? 0 : (nt = null, Ge = 0, Ao(), ht);
  }
  function Gb() {
    for (; Ie !== null && !Le(); )
      lg(Ie);
  }
  function lg(e) {
    var t = Pm(e.alternate, e, yr);
    e.memoizedProps = e.pendingProps, t === null ? iu(e) : Ie = t;
  }
  function cg(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Om(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Ge
        );
        break;
      case 11:
        t = Om(
          a,
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
        Im(a, t), t = Ie = dp(t, yr), t = Pm(a, t, yr);
    }
    e.memoizedProps = e.pendingProps, t === null ? iu(e) : Ie = t;
  }
  function bi(e, t, a, o) {
    cr = ma = null, zc(t), di = null, ps = 0;
    var d = t.return;
    try {
      if (Rb(
        e,
        d,
        t,
        a,
        Ge
      )) {
        ht = 1, Qo(
          e,
          Cn(a, e.current)
        ), Ie = null;
        return;
      }
    } catch (b) {
      if (d !== null) throw Ie = d, b;
      ht = 1, Qo(
        e,
        Cn(a, e.current)
      ), Ie = null;
      return;
    }
    t.flags & 32768 ? ($e || o === 1 ? e = !0 : mi || (Ge & 536870912) !== 0 ? e = !1 : (Ir = e = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = Tn.current, o !== null && o.tag === 13 && (o.flags |= 16384))), dg(t, e)) : iu(t);
  }
  function iu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        dg(
          t,
          Ir
        );
        return;
      }
      e = t.return;
      var a = zb(
        t.alternate,
        t,
        yr
      );
      if (a !== null) {
        Ie = a;
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
  function dg(e, t) {
    do {
      var a = Pb(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, Ie = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        Ie = e;
        return;
      }
      Ie = e = a;
    } while (e !== null);
    ht = 6, Ie = null;
  }
  function fg(e, t, a, o, d, b, T, D, H) {
    e.cancelPendingCommit = null;
    do
      su();
    while (Dt !== 0);
    if ((Ye & 6) !== 0) throw Error(i(327));
    if (t !== null) {
      if (t === e.current) throw Error(i(177));
      if (b = t.lanes | t.childLanes, b |= cc, w_(
        e,
        a,
        b,
        T,
        D,
        H
      ), e === nt && (Ie = nt = null, Ge = 0), vi = t, Hr = e, yi = a, md = b, gd = d, ng = o, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Xb(_e, function() {
        return vg(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), o = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || o) {
        o = j.T, j.T = null, d = B.p, B.p = 2, T = Ye, Ye |= 4;
        try {
          Lb(e, t, a);
        } finally {
          Ye = T, B.p = d, j.T = o;
        }
      }
      Dt = 1, hg(), pg(), mg();
    }
  }
  function hg() {
    if (Dt === 1) {
      Dt = 0;
      var e = Hr, t = vi, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = j.T, j.T = null;
        var o = B.p;
        B.p = 2;
        var d = Ye;
        Ye |= 4;
        try {
          Fm(t, e);
          var b = jd, T = tp(e.containerInfo), D = b.focusedElem, H = b.selectionRange;
          if (T !== D && D && D.ownerDocument && ep(
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
                  !ee.extend && Ce > Je && (T = Je, Je = Ce, Ce = T);
                  var G = Wh(
                    D,
                    Ce
                  ), q = Wh(
                    D,
                    Je
                  );
                  if (G && q && (ee.rangeCount !== 1 || ee.anchorNode !== G.node || ee.anchorOffset !== G.offset || ee.focusNode !== q.node || ee.focusOffset !== q.offset)) {
                    var X = le.createRange();
                    X.setStart(G.node, G.offset), ee.removeAllRanges(), Ce > Je ? (ee.addRange(X), ee.extend(q.node, q.offset)) : (X.setEnd(q.node, q.offset), ee.addRange(X));
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
          yu = !!Md, jd = Md = null;
        } finally {
          Ye = d, B.p = o, j.T = a;
        }
      }
      e.current = t, Dt = 2;
    }
  }
  function pg() {
    if (Dt === 2) {
      Dt = 0;
      var e = Hr, t = vi, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = j.T, j.T = null;
        var o = B.p;
        B.p = 2;
        var d = Ye;
        Ye |= 4;
        try {
          Vm(e, t.alternate, t);
        } finally {
          Ye = d, B.p = o, j.T = a;
        }
      }
      Dt = 3;
    }
  }
  function mg() {
    if (Dt === 4 || Dt === 3) {
      Dt = 0, We();
      var e = Hr, t = vi, a = yi, o = ng;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Dt = 5 : (Dt = 0, vi = Hr = null, gg(e, e.pendingLanes));
      var d = e.pendingLanes;
      if (d === 0 && (Ur = null), Il(a), t = t.stateNode, mt && typeof mt.onCommitFiberRoot == "function")
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
          for (var b = e.onRecoverableError, T = 0; T < o.length; T++) {
            var D = o[T];
            b(D.value, {
              componentStack: D.stack
            });
          }
        } finally {
          j.T = t, B.p = d;
        }
      }
      (yi & 3) !== 0 && su(), Jn(e), d = e.pendingLanes, (a & 4194090) !== 0 && (d & 42) !== 0 ? e === vd ? Es++ : (Es = 0, vd = e) : Es = 0, Cs(0);
    }
  }
  function gg(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, rs(t)));
  }
  function su(e) {
    return hg(), pg(), mg(), vg();
  }
  function vg() {
    if (Dt !== 5) return !1;
    var e = Hr, t = md;
    md = 0;
    var a = Il(yi), o = j.T, d = B.p;
    try {
      B.p = 32 > a ? 32 : a, j.T = null, a = gd, gd = null;
      var b = Hr, T = yi;
      if (Dt = 0, vi = Hr = null, yi = 0, (Ye & 6) !== 0) throw Error(i(331));
      var D = Ye;
      if (Ye |= 4, eg(b.current), Km(
        b,
        b.current,
        T,
        a
      ), Ye = D, Cs(0, !1), mt && typeof mt.onPostCommitFiberRoot == "function")
        try {
          mt.onPostCommitFiberRoot(Dn, b);
        } catch {
        }
      return !0;
    } finally {
      B.p = d, j.T = o, gg(e, t);
    }
  }
  function yg(e, t, a) {
    t = Cn(a, t), t = Fc(e.stateNode, t, 2), e = Mr(e, t, 2), e !== null && (Hi(e, 2), Jn(e));
  }
  function tt(e, t, a) {
    if (e.tag === 3)
      yg(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          yg(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ur === null || !Ur.has(o))) {
            e = Cn(a, e), a = wm(2), o = Mr(t, a, 2), o !== null && (Em(
              a,
              o,
              t,
              e
            ), Hi(o, 2), Jn(o));
            break;
          }
        }
        t = t.return;
      }
  }
  function Sd(e, t, a) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new Ub();
      var d = /* @__PURE__ */ new Set();
      o.set(t, d);
    } else
      d = o.get(t), d === void 0 && (d = /* @__PURE__ */ new Set(), o.set(t, d));
    d.has(a) || (dd = !0, d.add(a), e = Vb.bind(null, e, t, a), t.then(e, e));
  }
  function Vb(e, t, a) {
    var o = e.pingCache;
    o !== null && o.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, nt === e && (Ge & a) === a && (ht === 4 || ht === 3 && (Ge & 62914560) === Ge && 300 > Fe() - pd ? (Ye & 2) === 0 && _i(e, 0) : fd |= a, gi === Ge && (gi = 0)), Jn(e);
  }
  function _g(e, t) {
    t === 0 && (t = mh()), e = ti(e, t), e !== null && (Hi(e, t), Jn(e));
  }
  function $b(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), _g(e, a);
  }
  function Yb(e, t) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode, d = e.memoizedState;
        d !== null && (a = d.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      case 22:
        o = e.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    o !== null && o.delete(t), _g(e, a);
  }
  function Xb(e, t) {
    return fe(e, t);
  }
  var ou = null, Si = null, wd = !1, uu = !1, Ed = !1, wa = 0;
  function Jn(e) {
    e !== Si && e.next === null && (Si === null ? ou = Si = e : Si = Si.next = e), uu = !0, wd || (wd = !0, Qb());
  }
  function Cs(e, t) {
    if (!Ed && uu) {
      Ed = !0;
      do
        for (var a = !1, o = ou; o !== null; ) {
          if (e !== 0) {
            var d = o.pendingLanes;
            if (d === 0) var b = 0;
            else {
              var T = o.suspendedLanes, D = o.pingedLanes;
              b = (1 << 31 - Gt(42 | e) + 1) - 1, b &= d & ~(T & ~D), b = b & 201326741 ? b & 201326741 | 1 : b ? b | 2 : 0;
            }
            b !== 0 && (a = !0, Eg(o, b));
          } else
            b = Ge, b = Vt(
              o,
              o === nt ? b : 0,
              o.cancelPendingCommit !== null || o.timeoutHandle !== -1
            ), (b & 3) === 0 || Qt(o, b) || (a = !0, Eg(o, b));
          o = o.next;
        }
      while (a);
      Ed = !1;
    }
  }
  function Fb() {
    bg();
  }
  function bg() {
    uu = wd = !1;
    var e = 0;
    wa !== 0 && (a1() && (e = wa), wa = 0);
    for (var t = Fe(), a = null, o = ou; o !== null; ) {
      var d = o.next, b = Sg(o, t);
      b === 0 ? (o.next = null, a === null ? ou = d : a.next = d, d === null && (Si = a)) : (a = o, (e !== 0 || (b & 3) !== 0) && (uu = !0)), o = d;
    }
    Cs(e);
  }
  function Sg(e, t) {
    for (var a = e.suspendedLanes, o = e.pingedLanes, d = e.expirationTimes, b = e.pendingLanes & -62914561; 0 < b; ) {
      var T = 31 - Gt(b), D = 1 << T, H = d[T];
      H === -1 ? ((D & a) === 0 || (D & o) !== 0) && (d[T] = po(D, t)) : H <= t && (e.expiredLanes |= D), b &= ~D;
    }
    if (t = nt, a = Ge, a = Vt(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o = e.callbackNode, a === 0 || e === t && (Xe === 2 || Xe === 9) || e.cancelPendingCommit !== null)
      return o !== null && o !== null && we(o), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Qt(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (o !== null && we(o), Il(a)) {
        case 2:
        case 8:
          a = ye;
          break;
        case 32:
          a = _e;
          break;
        case 268435456:
          a = Ze;
          break;
        default:
          a = _e;
      }
      return o = wg.bind(null, e), a = fe(a, o), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return o !== null && o !== null && we(o), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function wg(e, t) {
    if (Dt !== 0 && Dt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (su() && e.callbackNode !== a)
      return null;
    var o = Ge;
    return o = Vt(
      e,
      e === nt ? o : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o === 0 ? null : (ag(e, o, t), Sg(e, Fe()), e.callbackNode != null && e.callbackNode === a ? wg.bind(null, e) : null);
  }
  function Eg(e, t) {
    if (su()) return null;
    ag(e, t, !0);
  }
  function Qb() {
    s1(function() {
      (Ye & 6) !== 0 ? fe(
        dt,
        Fb
      ) : bg();
    });
  }
  function Cd() {
    return wa === 0 && (wa = Ua()), wa;
  }
  function Cg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : _o("" + e);
  }
  function kg(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function Kb(e, t, a, o, d) {
    if (t === "submit" && a && a.stateNode === d) {
      var b = Cg(
        (d[Kt] || null).action
      ), T = o.submitter;
      T && (t = (t = T[Kt] || null) ? Cg(t.formAction) : T.getAttribute("formAction"), t !== null && (b = t, T = null));
      var D = new Eo(
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
                  var H = T ? kg(d, T) : new FormData(d);
                  Gc(
                    a,
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
                typeof b == "function" && (D.preventDefault(), H = T ? kg(d, T) : new FormData(d), Gc(
                  a,
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
  for (var kd = 0; kd < lc.length; kd++) {
    var Ad = lc[kd], Jb = Ad.toLowerCase(), Wb = Ad[0].toUpperCase() + Ad.slice(1);
    zn(
      Jb,
      "on" + Wb
    );
  }
  zn(ap, "onAnimationEnd"), zn(ip, "onAnimationIteration"), zn(sp, "onAnimationStart"), zn("dblclick", "onDoubleClick"), zn("focusin", "onFocus"), zn("focusout", "onBlur"), zn(gb, "onTransitionRun"), zn(vb, "onTransitionStart"), zn(yb, "onTransitionCancel"), zn(op, "onTransitionEnd"), Va("onMouseEnter", ["mouseout", "mouseover"]), Va("onMouseLeave", ["mouseout", "mouseover"]), Va("onPointerEnter", ["pointerout", "pointerover"]), Va("onPointerLeave", ["pointerout", "pointerover"]), sa(
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
  ), e1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ks)
  );
  function Ag(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var o = e[a], d = o.event;
      o = o.listeners;
      e: {
        var b = void 0;
        if (t)
          for (var T = o.length - 1; 0 <= T; T--) {
            var D = o[T], H = D.instance, Q = D.currentTarget;
            if (D = D.listener, H !== b && d.isPropagationStopped())
              break e;
            b = D, d.currentTarget = Q;
            try {
              b(d);
            } catch (se) {
              Fo(se);
            }
            d.currentTarget = null, b = H;
          }
        else
          for (T = 0; T < o.length; T++) {
            if (D = o[T], H = D.instance, Q = D.currentTarget, D = D.listener, H !== b && d.isPropagationStopped())
              break e;
            b = D, d.currentTarget = Q;
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
  function Be(e, t) {
    var a = t[Bl];
    a === void 0 && (a = t[Bl] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    a.has(o) || (xg(t, e, 2, !1), a.add(o));
  }
  function xd(e, t, a) {
    var o = 0;
    t && (o |= 4), xg(
      a,
      e,
      o,
      t
    );
  }
  var lu = "_reactListening" + Math.random().toString(36).slice(2);
  function Td(e) {
    if (!e[lu]) {
      e[lu] = !0, bh.forEach(function(a) {
        a !== "selectionchange" && (e1.has(a) || xd(a, !1, e), xd(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[lu] || (t[lu] = !0, xd("selectionchange", !1, t));
    }
  }
  function xg(e, t, a, o) {
    switch (Kg(t)) {
      case 2:
        var d = x1;
        break;
      case 8:
        d = T1;
        break;
      default:
        d = qd;
    }
    a = d.bind(
      null,
      t,
      a,
      e
    ), d = void 0, !Ql || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (d = !0), o ? d !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: d
    }) : e.addEventListener(t, a, !0) : d !== void 0 ? e.addEventListener(t, a, {
      passive: d
    }) : e.addEventListener(t, a, !1);
  }
  function Nd(e, t, a, o, d) {
    var b = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
      e: for (; ; ) {
        if (o === null) return;
        var T = o.tag;
        if (T === 3 || T === 4) {
          var D = o.stateNode.containerInfo;
          if (D === d) break;
          if (T === 4)
            for (T = o.return; T !== null; ) {
              var H = T.tag;
              if ((H === 3 || H === 4) && T.stateNode.containerInfo === d)
                return;
              T = T.return;
            }
          for (; D !== null; ) {
            if (T = qa(D), T === null) return;
            if (H = T.tag, H === 5 || H === 6 || H === 26 || H === 27) {
              o = b = T;
              continue e;
            }
            D = D.parentNode;
          }
        }
        o = o.return;
      }
    Dh(function() {
      var Q = b, se = Xl(a), le = [];
      e: {
        var J = up.get(e);
        if (J !== void 0) {
          var ee = Eo, Ae = e;
          switch (e) {
            case "keypress":
              if (So(a) === 0) break e;
            case "keydown":
            case "keyup":
              ee = X_;
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
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ee = Lh;
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
              ee = K_;
              break;
            case ap:
            case ip:
            case sp:
              ee = B_;
              break;
            case op:
              ee = W_;
              break;
            case "scroll":
            case "scrollend":
              ee = D_;
              break;
            case "wheel":
              ee = tb;
              break;
            case "copy":
            case "cut":
            case "paste":
              ee = H_;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ee = Bh;
              break;
            case "toggle":
            case "beforetoggle":
              ee = rb;
          }
          var Ce = (t & 4) !== 0, Je = !Ce && (e === "scroll" || e === "scrollend"), G = Ce ? J !== null ? J + "Capture" : null : J;
          Ce = [];
          for (var q = Q, X; q !== null; ) {
            var oe = q;
            if (X = oe.stateNode, oe = oe.tag, oe !== 5 && oe !== 26 && oe !== 27 || X === null || G === null || (oe = Gi(q, G), oe != null && Ce.push(
              As(q, oe, X)
            )), Je) break;
            q = q.return;
          }
          0 < Ce.length && (J = new ee(
            J,
            Ae,
            null,
            a,
            se
          ), le.push({ event: J, listeners: Ce }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (J = e === "mouseover" || e === "pointerover", ee = e === "mouseout" || e === "pointerout", J && a !== Yl && (Ae = a.relatedTarget || a.fromElement) && (qa(Ae) || Ae[Ha]))
            break e;
          if ((ee || J) && (J = se.window === se ? se : (J = se.ownerDocument) ? J.defaultView || J.parentWindow : window, ee ? (Ae = a.relatedTarget || a.toElement, ee = Q, Ae = Ae ? qa(Ae) : null, Ae !== null && (Je = c(Ae), Ce = Ae.tag, Ae !== Je || Ce !== 5 && Ce !== 27 && Ce !== 6) && (Ae = null)) : (ee = null, Ae = Q), ee !== Ae)) {
            if (Ce = Lh, oe = "onMouseLeave", G = "onMouseEnter", q = "mouse", (e === "pointerout" || e === "pointerover") && (Ce = Bh, oe = "onPointerLeave", G = "onPointerEnter", q = "pointer"), Je = ee == null ? J : Zi(ee), X = Ae == null ? J : Zi(Ae), J = new Ce(
              oe,
              q + "leave",
              ee,
              a,
              se
            ), J.target = Je, J.relatedTarget = X, oe = null, qa(se) === Q && (Ce = new Ce(
              G,
              q + "enter",
              Ae,
              a,
              se
            ), Ce.target = X, Ce.relatedTarget = Je, oe = Ce), Je = oe, ee && Ae)
              t: {
                for (Ce = ee, G = Ae, q = 0, X = Ce; X; X = wi(X))
                  q++;
                for (X = 0, oe = G; oe; oe = wi(oe))
                  X++;
                for (; 0 < q - X; )
                  Ce = wi(Ce), q--;
                for (; 0 < X - q; )
                  G = wi(G), X--;
                for (; q--; ) {
                  if (Ce === G || G !== null && Ce === G.alternate)
                    break t;
                  Ce = wi(Ce), G = wi(G);
                }
                Ce = null;
              }
            else Ce = null;
            ee !== null && Tg(
              le,
              J,
              ee,
              Ce,
              !1
            ), Ae !== null && Je !== null && Tg(
              le,
              Je,
              Ae,
              Ce,
              !0
            );
          }
        }
        e: {
          if (J = Q ? Zi(Q) : window, ee = J.nodeName && J.nodeName.toLowerCase(), ee === "select" || ee === "input" && J.type === "file")
            var ve = Yh;
          else if (Vh(J))
            if (Xh)
              ve = hb;
            else {
              ve = db;
              var Pe = cb;
            }
          else
            ee = J.nodeName, !ee || ee.toLowerCase() !== "input" || J.type !== "checkbox" && J.type !== "radio" ? Q && $l(Q.elementType) && (ve = Yh) : ve = fb;
          if (ve && (ve = ve(e, Q))) {
            $h(
              le,
              ve,
              a,
              se
            );
            break e;
          }
          Pe && Pe(e, J, Q), e === "focusout" && Q && J.type === "number" && Q.memoizedProps.value != null && Vl(J, "number", J.value);
        }
        switch (Pe = Q ? Zi(Q) : window, e) {
          case "focusin":
            (Vh(Pe) || Pe.contentEditable === "true") && (Ja = Pe, sc = Q, Ji = null);
            break;
          case "focusout":
            Ji = sc = Ja = null;
            break;
          case "mousedown":
            oc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            oc = !1, np(le, a, se);
            break;
          case "selectionchange":
            if (mb) break;
          case "keydown":
          case "keyup":
            np(le, a, se);
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
          Ka ? Zh(e, a) && (ke = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (ke = "onCompositionStart");
        ke && (Uh && a.locale !== "ko" && (Ka || ke !== "onCompositionStart" ? ke === "onCompositionEnd" && Ka && (be = zh()) : (xr = se, Kl = "value" in xr ? xr.value : xr.textContent, Ka = !0)), Pe = cu(Q, ke), 0 < Pe.length && (ke = new Ih(
          ke,
          e,
          null,
          a,
          se
        ), le.push({ event: ke, listeners: Pe }), be ? ke.data = be : (be = Gh(a), be !== null && (ke.data = be)))), (be = ib ? sb(e, a) : ob(e, a)) && (ke = cu(Q, "onBeforeInput"), 0 < ke.length && (Pe = new Ih(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          se
        ), le.push({
          event: Pe,
          listeners: ke
        }), Pe.data = be)), Kb(
          le,
          e,
          Q,
          a,
          se
        );
      }
      Ag(le, t);
    });
  }
  function As(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function cu(e, t) {
    for (var a = t + "Capture", o = []; e !== null; ) {
      var d = e, b = d.stateNode;
      if (d = d.tag, d !== 5 && d !== 26 && d !== 27 || b === null || (d = Gi(e, a), d != null && o.unshift(
        As(e, d, b)
      ), d = Gi(e, t), d != null && o.push(
        As(e, d, b)
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
  function Tg(e, t, a, o, d) {
    for (var b = t._reactName, T = []; a !== null && a !== o; ) {
      var D = a, H = D.alternate, Q = D.stateNode;
      if (D = D.tag, H !== null && H === o) break;
      D !== 5 && D !== 26 && D !== 27 || Q === null || (H = Q, d ? (Q = Gi(a, b), Q != null && T.unshift(
        As(a, Q, H)
      )) : d || (Q = Gi(a, b), Q != null && T.push(
        As(a, Q, H)
      ))), a = a.return;
    }
    T.length !== 0 && e.push({ event: t, listeners: T });
  }
  var t1 = /\r\n?/g, n1 = /\u0000|\uFFFD/g;
  function Ng(e) {
    return (typeof e == "string" ? e : "" + e).replace(t1, `
`).replace(n1, "");
  }
  function Og(e, t) {
    return t = Ng(t), Ng(e) === t;
  }
  function du() {
  }
  function Ke(e, t, a, o, d, b) {
    switch (a) {
      case "children":
        typeof o == "string" ? t === "body" || t === "textarea" && o === "" || Xa(e, o) : (typeof o == "number" || typeof o == "bigint") && t !== "body" && Xa(e, "" + o);
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
        go(e, a, o);
        break;
      case "style":
        jh(e, o, b);
        break;
      case "data":
        if (t !== "object") {
          go(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(a);
          break;
        }
        o = _o("" + o), e.setAttribute(a, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof b == "function" && (a === "formAction" ? (t !== "input" && Ke(e, t, "name", d.name, d, null), Ke(
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
          e.removeAttribute(a);
          break;
        }
        o = _o("" + o), e.setAttribute(a, o);
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
            throw Error(i(61));
          if (a = o.__html, a != null) {
            if (d.children != null) throw Error(i(60));
            e.innerHTML = a;
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
        a = _o("" + o), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
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
        o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(a, "" + o) : e.removeAttribute(a);
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
        o && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        o === !0 ? e.setAttribute(a, "") : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(a, o) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? e.setAttribute(a, o) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? e.removeAttribute(a) : e.setAttribute(a, o);
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
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = j_.get(a) || a, mo(e, a, o));
    }
  }
  function Od(e, t, a, o, d, b) {
    switch (a) {
      case "style":
        jh(e, o, b);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(i(61));
          if (a = o.__html, a != null) {
            if (d.children != null) throw Error(i(60));
            e.innerHTML = a;
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
        if (!Sh.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (d = a.endsWith("Capture"), t = a.slice(2, d ? a.length - 7 : void 0), b = e[Kt] || null, b = b != null ? b[a] : null, typeof b == "function" && e.removeEventListener(t, b, d), typeof o == "function")) {
              typeof b != "function" && b !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, o, d);
              break e;
            }
            a in e ? e[a] = o : o === !0 ? e.setAttribute(a, "") : mo(e, a, o);
          }
    }
  }
  function zt(e, t, a) {
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
        var o = !1, d = !1, b;
        for (b in a)
          if (a.hasOwnProperty(b)) {
            var T = a[b];
            if (T != null)
              switch (b) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  d = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, t));
                default:
                  Ke(e, t, b, T, a, null);
              }
          }
        d && Ke(e, t, "srcSet", a.srcSet, a, null), o && Ke(e, t, "src", a.src, a, null);
        return;
      case "input":
        Be("invalid", e);
        var D = b = T = d = null, H = null, Q = null;
        for (o in a)
          if (a.hasOwnProperty(o)) {
            var se = a[o];
            if (se != null)
              switch (o) {
                case "name":
                  d = se;
                  break;
                case "type":
                  T = se;
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
                  D = se;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (se != null)
                    throw Error(i(137, t));
                  break;
                default:
                  Ke(e, t, o, se, a, null);
              }
          }
        Th(
          e,
          b,
          D,
          H,
          Q,
          T,
          d,
          !1
        ), vo(e);
        return;
      case "select":
        Be("invalid", e), o = T = b = null;
        for (d in a)
          if (a.hasOwnProperty(d) && (D = a[d], D != null))
            switch (d) {
              case "value":
                b = D;
                break;
              case "defaultValue":
                T = D;
                break;
              case "multiple":
                o = D;
              default:
                Ke(e, t, d, D, a, null);
            }
        t = b, a = T, e.multiple = !!o, t != null ? Ya(e, !!o, t, !1) : a != null && Ya(e, !!o, a, !0);
        return;
      case "textarea":
        Be("invalid", e), b = d = o = null;
        for (T in a)
          if (a.hasOwnProperty(T) && (D = a[T], D != null))
            switch (T) {
              case "value":
                o = D;
                break;
              case "defaultValue":
                d = D;
                break;
              case "children":
                b = D;
                break;
              case "dangerouslySetInnerHTML":
                if (D != null) throw Error(i(91));
                break;
              default:
                Ke(e, t, T, D, a, null);
            }
        Oh(e, o, d, b), vo(e);
        return;
      case "option":
        for (H in a)
          if (a.hasOwnProperty(H) && (o = a[H], o != null))
            switch (H) {
              case "selected":
                e.selected = o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                Ke(e, t, H, o, a, null);
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
        for (Q in a)
          if (a.hasOwnProperty(Q) && (o = a[Q], o != null))
            switch (Q) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, t));
              default:
                Ke(e, t, Q, o, a, null);
            }
        return;
      default:
        if ($l(t)) {
          for (se in a)
            a.hasOwnProperty(se) && (o = a[se], o !== void 0 && Od(
              e,
              t,
              se,
              o,
              a,
              void 0
            ));
          return;
        }
    }
    for (D in a)
      a.hasOwnProperty(D) && (o = a[D], o != null && Ke(e, t, D, o, a, null));
  }
  function r1(e, t, a, o) {
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
        var d = null, b = null, T = null, D = null, H = null, Q = null, se = null;
        for (ee in a) {
          var le = a[ee];
          if (a.hasOwnProperty(ee) && le != null)
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
          if (le = a[J], o.hasOwnProperty(J) && (ee != null || le != null))
            switch (J) {
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
                T = ee;
                break;
              case "defaultValue":
                D = ee;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (ee != null)
                  throw Error(i(137, t));
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
          T,
          D,
          H,
          Q,
          se,
          b,
          d
        );
        return;
      case "select":
        ee = T = D = J = null;
        for (b in a)
          if (H = a[b], a.hasOwnProperty(b) && H != null)
            switch (b) {
              case "value":
                break;
              case "multiple":
                ee = H;
              default:
                o.hasOwnProperty(b) || Ke(
                  e,
                  t,
                  b,
                  null,
                  o,
                  H
                );
            }
        for (d in o)
          if (b = o[d], H = a[d], o.hasOwnProperty(d) && (b != null || H != null))
            switch (d) {
              case "value":
                J = b;
                break;
              case "defaultValue":
                D = b;
                break;
              case "multiple":
                T = b;
              default:
                b !== H && Ke(
                  e,
                  t,
                  d,
                  b,
                  o,
                  H
                );
            }
        t = D, a = T, o = ee, J != null ? Ya(e, !!a, J, !1) : !!o != !!a && (t != null ? Ya(e, !!a, t, !0) : Ya(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        ee = J = null;
        for (D in a)
          if (d = a[D], a.hasOwnProperty(D) && d != null && !o.hasOwnProperty(D))
            switch (D) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ke(e, t, D, null, o, d);
            }
        for (T in o)
          if (d = o[T], b = a[T], o.hasOwnProperty(T) && (d != null || b != null))
            switch (T) {
              case "value":
                J = d;
                break;
              case "defaultValue":
                ee = d;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(i(91));
                break;
              default:
                d !== b && Ke(e, t, T, d, o, b);
            }
        Nh(e, J, ee);
        return;
      case "option":
        for (var Ae in a)
          if (J = a[Ae], a.hasOwnProperty(Ae) && J != null && !o.hasOwnProperty(Ae))
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
          if (J = o[H], ee = a[H], o.hasOwnProperty(H) && J !== ee && (J != null || ee != null))
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
        for (var Ce in a)
          J = a[Ce], a.hasOwnProperty(Ce) && J != null && !o.hasOwnProperty(Ce) && Ke(e, t, Ce, null, o, J);
        for (Q in o)
          if (J = o[Q], ee = a[Q], o.hasOwnProperty(Q) && J !== ee && (J != null || ee != null))
            switch (Q) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (J != null)
                  throw Error(i(137, t));
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
          for (var Je in a)
            J = a[Je], a.hasOwnProperty(Je) && J !== void 0 && !o.hasOwnProperty(Je) && Od(
              e,
              t,
              Je,
              void 0,
              o,
              J
            );
          for (se in o)
            J = o[se], ee = a[se], !o.hasOwnProperty(se) || J === ee || J === void 0 && ee === void 0 || Od(
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
    for (var G in a)
      J = a[G], a.hasOwnProperty(G) && J != null && !o.hasOwnProperty(G) && Ke(e, t, G, null, o, J);
    for (le in o)
      J = o[le], ee = a[le], !o.hasOwnProperty(le) || J === ee || J == null && ee == null || Ke(e, t, le, J, o, ee);
  }
  var Md = null, jd = null;
  function fu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Mg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function jg(e, t) {
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
  function a1() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Dd ? !1 : (Dd = e, !0) : (Dd = null, !1);
  }
  var Rg = typeof setTimeout == "function" ? setTimeout : void 0, i1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Dg = typeof Promise == "function" ? Promise : void 0, s1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Dg < "u" ? function(e) {
    return Dg.resolve(null).then(e).catch(o1);
  } : Rg;
  function o1(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Zr(e) {
    return e === "head";
  }
  function zg(e, t) {
    var a = t, o = 0, d = 0;
    do {
      var b = a.nextSibling;
      if (e.removeChild(a), b && b.nodeType === 8)
        if (a = b.data, a === "/$") {
          if (0 < o && 8 > o) {
            a = o;
            var T = e.ownerDocument;
            if (a & 1 && xs(T.documentElement), a & 2 && xs(T.body), a & 4)
              for (a = T.head, xs(a), T = a.firstChild; T; ) {
                var D = T.nextSibling, H = T.nodeName;
                T[qi] || H === "SCRIPT" || H === "STYLE" || H === "LINK" && T.rel.toLowerCase() === "stylesheet" || a.removeChild(T), T = D;
              }
          }
          if (d === 0) {
            e.removeChild(b), zs(t);
            return;
          }
          d--;
        } else
          a === "$" || a === "$?" || a === "$!" ? d++ : o = a.charCodeAt(0) - 48;
      else o = 0;
      a = b;
    } while (a);
    zs(t);
  }
  function zd(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          zd(a), Ul(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function u1(e, t, a, o) {
    for (; e.nodeType === 1; ) {
      var d = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (o) {
        if (!e[qi])
          switch (t) {
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
      } else if (t === "input" && e.type === "hidden") {
        var b = d.name == null ? null : "" + d.name;
        if (d.type === "hidden" && e.getAttribute("name") === b)
          return e;
      } else return e;
      if (e = Ln(e.nextSibling), e === null) break;
    }
    return null;
  }
  function l1(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Ln(e.nextSibling), e === null)) return null;
    return e;
  }
  function Pd(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function c1(e, t) {
    var a = e.ownerDocument;
    if (e.data !== "$?" || a.readyState === "complete")
      t();
    else {
      var o = function() {
        t(), a.removeEventListener("DOMContentLoaded", o);
      };
      a.addEventListener("DOMContentLoaded", o), e._reactRetry = o;
    }
  }
  function Ln(e) {
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
  var Ld = null;
  function Pg(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (t === 0) return e;
          t--;
        } else a === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Lg(e, t, a) {
    switch (t = fu(a), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(i(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(i(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(i(454));
        return e;
      default:
        throw Error(i(451));
    }
  }
  function xs(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Ul(e);
  }
  var On = /* @__PURE__ */ new Map(), Ig = /* @__PURE__ */ new Set();
  function hu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var _r = B.d;
  B.d = {
    f: d1,
    r: f1,
    D: h1,
    C: p1,
    L: m1,
    m: g1,
    X: y1,
    S: v1,
    M: _1
  };
  function d1() {
    var e = _r.f(), t = au();
    return e || t;
  }
  function f1(e) {
    var t = Za(e);
    t !== null && t.tag === 5 && t.type === "form" ? am(t) : _r.r(e);
  }
  var Ei = typeof document > "u" ? null : document;
  function Bg(e, t, a) {
    var o = Ei;
    if (o && typeof t == "string" && t) {
      var d = En(t);
      d = 'link[rel="' + e + '"][href="' + d + '"]', typeof a == "string" && (d += '[crossorigin="' + a + '"]'), Ig.has(d) || (Ig.add(d), e = { rel: e, crossOrigin: a, href: t }, o.querySelector(d) === null && (t = o.createElement("link"), zt(t, "link", e), xt(t), o.head.appendChild(t)));
    }
  }
  function h1(e) {
    _r.D(e), Bg("dns-prefetch", e, null);
  }
  function p1(e, t) {
    _r.C(e, t), Bg("preconnect", e, t);
  }
  function m1(e, t, a) {
    _r.L(e, t, a);
    var o = Ei;
    if (o && e && t) {
      var d = 'link[rel="preload"][as="' + En(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (d += '[imagesrcset="' + En(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (d += '[imagesizes="' + En(
        a.imageSizes
      ) + '"]')) : d += '[href="' + En(e) + '"]';
      var b = d;
      switch (t) {
        case "style":
          b = Ci(e);
          break;
        case "script":
          b = ki(e);
      }
      On.has(b) || (e = g(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), On.set(b, e), o.querySelector(d) !== null || t === "style" && o.querySelector(Ts(b)) || t === "script" && o.querySelector(Ns(b)) || (t = o.createElement("link"), zt(t, "link", e), xt(t), o.head.appendChild(t)));
    }
  }
  function g1(e, t) {
    _r.m(e, t);
    var a = Ei;
    if (a && e) {
      var o = t && typeof t.as == "string" ? t.as : "script", d = 'link[rel="modulepreload"][as="' + En(o) + '"][href="' + En(e) + '"]', b = d;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          b = ki(e);
      }
      if (!On.has(b) && (e = g({ rel: "modulepreload", href: e }, t), On.set(b, e), a.querySelector(d) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Ns(b)))
              return;
        }
        o = a.createElement("link"), zt(o, "link", e), xt(o), a.head.appendChild(o);
      }
    }
  }
  function v1(e, t, a) {
    _r.S(e, t, a);
    var o = Ei;
    if (o && e) {
      var d = Ga(o).hoistableStyles, b = Ci(e);
      t = t || "default";
      var T = d.get(b);
      if (!T) {
        var D = { loading: 0, preload: null };
        if (T = o.querySelector(
          Ts(b)
        ))
          D.loading = 5;
        else {
          e = g(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = On.get(b)) && Id(e, a);
          var H = T = o.createElement("link");
          xt(H), zt(H, "link", e), H._p = new Promise(function(Q, se) {
            H.onload = Q, H.onerror = se;
          }), H.addEventListener("load", function() {
            D.loading |= 1;
          }), H.addEventListener("error", function() {
            D.loading |= 2;
          }), D.loading |= 4, pu(T, t, o);
        }
        T = {
          type: "stylesheet",
          instance: T,
          count: 1,
          state: D
        }, d.set(b, T);
      }
    }
  }
  function y1(e, t) {
    _r.X(e, t);
    var a = Ei;
    if (a && e) {
      var o = Ga(a).hoistableScripts, d = ki(e), b = o.get(d);
      b || (b = a.querySelector(Ns(d)), b || (e = g({ src: e, async: !0 }, t), (t = On.get(d)) && Bd(e, t), b = a.createElement("script"), xt(b), zt(b, "link", e), a.head.appendChild(b)), b = {
        type: "script",
        instance: b,
        count: 1,
        state: null
      }, o.set(d, b));
    }
  }
  function _1(e, t) {
    _r.M(e, t);
    var a = Ei;
    if (a && e) {
      var o = Ga(a).hoistableScripts, d = ki(e), b = o.get(d);
      b || (b = a.querySelector(Ns(d)), b || (e = g({ src: e, async: !0, type: "module" }, t), (t = On.get(d)) && Bd(e, t), b = a.createElement("script"), xt(b), zt(b, "link", e), a.head.appendChild(b)), b = {
        type: "script",
        instance: b,
        count: 1,
        state: null
      }, o.set(d, b));
    }
  }
  function Ug(e, t, a, o) {
    var d = (d = ne.current) ? hu(d) : null;
    if (!d) throw Error(i(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Ci(a.href), a = Ga(
          d
        ).hoistableStyles, o = a.get(t), o || (o = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, o)), o) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = Ci(a.href);
          var b = Ga(
            d
          ).hoistableStyles, T = b.get(e);
          if (T || (d = d.ownerDocument || d, T = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, b.set(e, T), (b = d.querySelector(
            Ts(e)
          )) && !b._p && (T.instance = b, T.state.loading = 5), On.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, On.set(e, a), b || b1(
            d,
            e,
            a,
            T.state
          ))), t && o === null)
            throw Error(i(528, ""));
          return T;
        }
        if (t && o !== null)
          throw Error(i(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ki(a), a = Ga(
          d
        ).hoistableScripts, o = a.get(t), o || (o = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, o)), o) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(i(444, e));
    }
  }
  function Ci(e) {
    return 'href="' + En(e) + '"';
  }
  function Ts(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Hg(e) {
    return g({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function b1(e, t, a, o) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? o.loading = 1 : (t = e.createElement("link"), o.preload = t, t.addEventListener("load", function() {
      return o.loading |= 1;
    }), t.addEventListener("error", function() {
      return o.loading |= 2;
    }), zt(t, "link", a), xt(t), e.head.appendChild(t));
  }
  function ki(e) {
    return '[src="' + En(e) + '"]';
  }
  function Ns(e) {
    return "script[async]" + e;
  }
  function qg(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var o = e.querySelector(
            'style[data-href~="' + En(a.href) + '"]'
          );
          if (o)
            return t.instance = o, xt(o), o;
          var d = g({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return o = (e.ownerDocument || e).createElement(
            "style"
          ), xt(o), zt(o, "style", d), pu(o, a.precedence, e), t.instance = o;
        case "stylesheet":
          d = Ci(a.href);
          var b = e.querySelector(
            Ts(d)
          );
          if (b)
            return t.state.loading |= 4, t.instance = b, xt(b), b;
          o = Hg(a), (d = On.get(d)) && Id(o, d), b = (e.ownerDocument || e).createElement("link"), xt(b);
          var T = b;
          return T._p = new Promise(function(D, H) {
            T.onload = D, T.onerror = H;
          }), zt(b, "link", o), t.state.loading |= 4, pu(b, a.precedence, e), t.instance = b;
        case "script":
          return b = ki(a.src), (d = e.querySelector(
            Ns(b)
          )) ? (t.instance = d, xt(d), d) : (o = a, (d = On.get(b)) && (o = g({}, a), Bd(o, d)), e = e.ownerDocument || e, d = e.createElement("script"), xt(d), zt(d, "link", o), e.head.appendChild(d), t.instance = d);
        case "void":
          return null;
        default:
          throw Error(i(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (o = t.instance, t.state.loading |= 4, pu(o, a.precedence, e));
    return t.instance;
  }
  function pu(e, t, a) {
    for (var o = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), d = o.length ? o[o.length - 1] : null, b = d, T = 0; T < o.length; T++) {
      var D = o[T];
      if (D.dataset.precedence === t) b = D;
      else if (b !== d) break;
    }
    b ? b.parentNode.insertBefore(e, b.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function Id(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Bd(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var mu = null;
  function Zg(e, t, a) {
    if (mu === null) {
      var o = /* @__PURE__ */ new Map(), d = mu = /* @__PURE__ */ new Map();
      d.set(a, o);
    } else
      d = mu, o = d.get(a), o || (o = /* @__PURE__ */ new Map(), d.set(a, o));
    if (o.has(e)) return o;
    for (o.set(e, null), a = a.getElementsByTagName(e), d = 0; d < a.length; d++) {
      var b = a[d];
      if (!(b[qi] || b[Bt] || e === "link" && b.getAttribute("rel") === "stylesheet") && b.namespaceURI !== "http://www.w3.org/2000/svg") {
        var T = b.getAttribute(t) || "";
        T = e + T;
        var D = o.get(T);
        D ? D.push(b) : o.set(T, [b]);
      }
    }
    return o;
  }
  function Gg(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function S1(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
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
  function Vg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Os = null;
  function w1() {
  }
  function E1(e, t, a) {
    if (Os === null) throw Error(i(475));
    var o = Os;
    if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var d = Ci(a.href), b = e.querySelector(
          Ts(d)
        );
        if (b) {
          e = b._p, e !== null && typeof e == "object" && typeof e.then == "function" && (o.count++, o = gu.bind(o), e.then(o, o)), t.state.loading |= 4, t.instance = b, xt(b);
          return;
        }
        b = e.ownerDocument || e, a = Hg(a), (d = On.get(d)) && Id(a, d), b = b.createElement("link"), xt(b);
        var T = b;
        T._p = new Promise(function(D, H) {
          T.onload = D, T.onerror = H;
        }), zt(b, "link", a), t.instance = b;
      }
      o.stylesheets === null && (o.stylesheets = /* @__PURE__ */ new Map()), o.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (o.count++, t = gu.bind(o), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function C1() {
    if (Os === null) throw Error(i(475));
    var e = Os;
    return e.stylesheets && e.count === 0 && Ud(e, e.stylesheets), 0 < e.count ? function(t) {
      var a = setTimeout(function() {
        if (e.stylesheets && Ud(e, e.stylesheets), e.unsuspend) {
          var o = e.unsuspend;
          e.unsuspend = null, o();
        }
      }, 6e4);
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function gu() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Ud(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var vu = null;
  function Ud(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, vu = /* @__PURE__ */ new Map(), t.forEach(k1, e), vu = null, gu.call(e));
  }
  function k1(e, t) {
    if (!(t.state.loading & 4)) {
      var a = vu.get(e);
      if (a) var o = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), vu.set(e, a);
        for (var d = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), b = 0; b < d.length; b++) {
          var T = d[b];
          (T.nodeName === "LINK" || T.getAttribute("media") !== "not all") && (a.set(T.dataset.precedence, T), o = T);
        }
        o && a.set(null, o);
      }
      d = t.instance, T = d.getAttribute("data-precedence"), b = a.get(T) || o, b === o && a.set(null, d), a.set(T, d), this.count++, o = gu.bind(this), d.addEventListener("load", o), d.addEventListener("error", o), b ? b.parentNode.insertBefore(d, b.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(d, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Ms = {
    $$typeof: P,
    Provider: null,
    Consumer: null,
    _currentValue: K,
    _currentValue2: K,
    _threadCount: 0
  };
  function A1(e, t, a, o, d, b, T, D) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Pl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pl(0), this.hiddenUpdates = Pl(null), this.identifierPrefix = o, this.onUncaughtError = d, this.onCaughtError = b, this.onRecoverableError = T, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = D, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function $g(e, t, a, o, d, b, T, D, H, Q, se, le) {
    return e = new A1(
      e,
      t,
      a,
      T,
      D,
      H,
      Q,
      le
    ), t = 1, b === !0 && (t |= 24), b = ln(3, null, null, t), e.current = b, b.stateNode = e, t = Sc(), t.refCount++, e.pooledCache = t, t.refCount++, b.memoizedState = {
      element: o,
      isDehydrated: a,
      cache: t
    }, kc(b), e;
  }
  function Yg(e) {
    return e ? (e = ni, e) : ni;
  }
  function Xg(e, t, a, o, d, b) {
    d = Yg(d), o.context === null ? o.context = d : o.pendingContext = d, o = Or(t), o.payload = { element: a }, b = b === void 0 ? null : b, b !== null && (o.callback = b), a = Mr(e, o, t), a !== null && (pn(a, e, t), os(a, e, t));
  }
  function Fg(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Hd(e, t) {
    Fg(e, t), (e = e.alternate) && Fg(e, t);
  }
  function Qg(e) {
    if (e.tag === 13) {
      var t = ti(e, 67108864);
      t !== null && pn(t, e, 67108864), Hd(e, 67108864);
    }
  }
  var yu = !0;
  function x1(e, t, a, o) {
    var d = j.T;
    j.T = null;
    var b = B.p;
    try {
      B.p = 2, qd(e, t, a, o);
    } finally {
      B.p = b, j.T = d;
    }
  }
  function T1(e, t, a, o) {
    var d = j.T;
    j.T = null;
    var b = B.p;
    try {
      B.p = 8, qd(e, t, a, o);
    } finally {
      B.p = b, j.T = d;
    }
  }
  function qd(e, t, a, o) {
    if (yu) {
      var d = Zd(o);
      if (d === null)
        Nd(
          e,
          t,
          o,
          _u,
          a
        ), Jg(e, o);
      else if (O1(
        d,
        e,
        t,
        a,
        o
      ))
        o.stopPropagation();
      else if (Jg(e, o), t & 4 && -1 < N1.indexOf(e)) {
        for (; d !== null; ) {
          var b = Za(d);
          if (b !== null)
            switch (b.tag) {
              case 3:
                if (b = b.stateNode, b.current.memoizedState.isDehydrated) {
                  var T = Sn(b.pendingLanes);
                  if (T !== 0) {
                    var D = b;
                    for (D.pendingLanes |= 2, D.entangledLanes |= 2; T; ) {
                      var H = 1 << 31 - Gt(T);
                      D.entanglements[1] |= H, T &= ~H;
                    }
                    Jn(b), (Ye & 6) === 0 && (nu = Fe() + 500, Cs(0));
                  }
                }
                break;
              case 13:
                D = ti(b, 2), D !== null && pn(D, b, 2), au(), Hd(b, 2);
            }
          if (b = Zd(o), b === null && Nd(
            e,
            t,
            o,
            _u,
            a
          ), b === d) break;
          d = b;
        }
        d !== null && o.stopPropagation();
      } else
        Nd(
          e,
          t,
          o,
          null,
          a
        );
    }
  }
  function Zd(e) {
    return e = Xl(e), Gd(e);
  }
  var _u = null;
  function Gd(e) {
    if (_u = null, e = qa(e), e !== null) {
      var t = c(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (e = f(t), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return _u = e, null;
  }
  function Kg(e) {
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
  var Vd = !1, Gr = null, Vr = null, $r = null, js = /* @__PURE__ */ new Map(), Rs = /* @__PURE__ */ new Map(), Yr = [], N1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Jg(e, t) {
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
        js.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rs.delete(t.pointerId);
    }
  }
  function Ds(e, t, a, o, d, b) {
    return e === null || e.nativeEvent !== b ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: o,
      nativeEvent: b,
      targetContainers: [d]
    }, t !== null && (t = Za(t), t !== null && Qg(t)), e) : (e.eventSystemFlags |= o, t = e.targetContainers, d !== null && t.indexOf(d) === -1 && t.push(d), e);
  }
  function O1(e, t, a, o, d) {
    switch (t) {
      case "focusin":
        return Gr = Ds(
          Gr,
          e,
          t,
          a,
          o,
          d
        ), !0;
      case "dragenter":
        return Vr = Ds(
          Vr,
          e,
          t,
          a,
          o,
          d
        ), !0;
      case "mouseover":
        return $r = Ds(
          $r,
          e,
          t,
          a,
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
            t,
            a,
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
            t,
            a,
            o,
            d
          )
        ), !0;
    }
    return !1;
  }
  function Wg(e) {
    var t = qa(e.target);
    if (t !== null) {
      var a = c(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = f(a), t !== null) {
            e.blockedOn = t, E_(e.priority, function() {
              if (a.tag === 13) {
                var o = hn();
                o = Ll(o);
                var d = ti(a, o);
                d !== null && pn(d, a, o), Hd(a, o);
              }
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function bu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Zd(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var o = new a.constructor(
          a.type,
          a
        );
        Yl = o, a.target.dispatchEvent(o), Yl = null;
      } else
        return t = Za(a), t !== null && Qg(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function ev(e, t, a) {
    bu(e) && a.delete(t);
  }
  function M1() {
    Vd = !1, Gr !== null && bu(Gr) && (Gr = null), Vr !== null && bu(Vr) && (Vr = null), $r !== null && bu($r) && ($r = null), js.forEach(ev), Rs.forEach(ev);
  }
  function Su(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Vd || (Vd = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      M1
    )));
  }
  var wu = null;
  function tv(e) {
    wu !== e && (wu = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        wu === e && (wu = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], o = e[t + 1], d = e[t + 2];
          if (typeof o != "function") {
            if (Gd(o || a) === null)
              continue;
            break;
          }
          var b = Za(a);
          b !== null && (e.splice(t, 3), t -= 3, Gc(
            b,
            {
              pending: !0,
              data: d,
              method: a.method,
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
    function t(H) {
      return Su(H, e);
    }
    Gr !== null && Su(Gr, e), Vr !== null && Su(Vr, e), $r !== null && Su($r, e), js.forEach(t), Rs.forEach(t);
    for (var a = 0; a < Yr.length; a++) {
      var o = Yr[a];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < Yr.length && (a = Yr[0], a.blockedOn === null); )
      Wg(a), a.blockedOn === null && Yr.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (o = 0; o < a.length; o += 3) {
        var d = a[o], b = a[o + 1], T = d[Kt] || null;
        if (typeof b == "function")
          T || tv(a);
        else if (T) {
          var D = null;
          if (b && b.hasAttribute("formAction")) {
            if (d = b, T = b[Kt] || null)
              D = T.formAction;
            else if (Gd(d) !== null) continue;
          } else D = T.action;
          typeof D == "function" ? a[o + 1] = D : (a.splice(o, 3), o -= 3), tv(a);
        }
      }
  }
  function $d(e) {
    this._internalRoot = e;
  }
  Eu.prototype.render = $d.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(i(409));
    var a = t.current, o = hn();
    Xg(a, o, e, t, null, null);
  }, Eu.prototype.unmount = $d.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Xg(e.current, 2, null, e, null, null), au(), t[Ha] = null;
    }
  };
  function Eu(e) {
    this._internalRoot = e;
  }
  Eu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = yh();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < Yr.length && t !== 0 && t < Yr[a].priority; a++) ;
      Yr.splice(a, 0, e), a === 0 && Wg(e);
    }
  };
  var nv = r.version;
  if (nv !== "19.1.1")
    throw Error(
      i(
        527,
        nv,
        "19.1.1"
      )
    );
  B.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = p(t), e = e !== null ? _(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var j1 = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: j,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Cu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Cu.isDisabled && Cu.supportsFiber)
      try {
        Dn = Cu.inject(
          j1
        ), mt = Cu;
      } catch {
      }
  }
  return Bs.createRoot = function(e, t) {
    if (!u(e)) throw Error(i(299));
    var a = !1, o = "", d = ym, b = _m, T = bm, D = null;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onUncaughtError !== void 0 && (d = t.onUncaughtError), t.onCaughtError !== void 0 && (b = t.onCaughtError), t.onRecoverableError !== void 0 && (T = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (D = t.unstable_transitionCallbacks)), t = $g(
      e,
      1,
      !1,
      null,
      null,
      a,
      o,
      d,
      b,
      T,
      D,
      null
    ), e[Ha] = t.current, Td(e), new $d(t);
  }, Bs.hydrateRoot = function(e, t, a) {
    if (!u(e)) throw Error(i(299));
    var o = !1, d = "", b = ym, T = _m, D = bm, H = null, Q = null;
    return a != null && (a.unstable_strictMode === !0 && (o = !0), a.identifierPrefix !== void 0 && (d = a.identifierPrefix), a.onUncaughtError !== void 0 && (b = a.onUncaughtError), a.onCaughtError !== void 0 && (T = a.onCaughtError), a.onRecoverableError !== void 0 && (D = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (H = a.unstable_transitionCallbacks), a.formState !== void 0 && (Q = a.formState)), t = $g(
      e,
      1,
      !0,
      t,
      a ?? null,
      o,
      d,
      b,
      T,
      D,
      H,
      Q
    ), t.context = Yg(null), a = t.current, o = hn(), o = Ll(o), d = Or(o), d.callback = null, Mr(a, d, o), a = o, t.current.lanes = a, Hi(t, a), Jn(t), e[Ha] = t.current, Td(e), new Eu(t);
  }, Bs.version = "19.1.1", Bs;
}
var vv;
function m2() {
  if (vv) return Qd.exports;
  vv = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Qd.exports = p2(), Qd.exports;
}
var g2 = m2();
const yv = /* @__PURE__ */ Ff(g2);
var v2 = Object.defineProperty, y2 = (n, r, s) => r in n ? v2(n, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[r] = s, _v = (n, r, s) => y2(n, typeof r != "symbol" ? r + "" : r, s);
class r0 {
  constructor(r, s) {
    _v(this, "settingsKey"), _v(this, "defaultSettings"), this.settingsKey = r, this.defaultSettings = s;
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
    const { strategy: s = "recursive" } = r, i = this.defaultSettings.version, u = this.defaultSettings.formatVersion, c = SillyTavern.getContext().extensionSettings[this.settingsKey], f = {
      version: {
        changed: !1,
        new: i ?? ""
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
      i && c.version !== i && (m.version.changed = !0, m.version.new = i, c.version = i), u && u !== "*" && c.formatVersion !== u && (m.formatVersion.changed = !0, m.formatVersion.new = u, c.formatVersion = u), (p(c, this.defaultSettings) || m.version.changed || m.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(s)) {
      i && !c.version && (c.version = i, m.version.changed = !0, m.version.new = i), u && !c.formatVersion && (c.formatVersion = u, m.formatVersion.changed = !0, m.formatVersion.new = u);
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
function Er(n) {
  return Array.isArray ? Array.isArray(n) : s0(n) === "[object Array]";
}
function _2(n) {
  if (typeof n == "string")
    return n;
  let r = n + "";
  return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
}
function b2(n) {
  return n == null ? "" : _2(n);
}
function Wn(n) {
  return typeof n == "string";
}
function a0(n) {
  return typeof n == "number";
}
function S2(n) {
  return n === !0 || n === !1 || w2(n) && s0(n) == "[object Boolean]";
}
function i0(n) {
  return typeof n == "object";
}
function w2(n) {
  return i0(n) && n !== null;
}
function yn(n) {
  return n != null;
}
function ef(n) {
  return !n.trim().length;
}
function s0(n) {
  return n == null ? n === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(n);
}
const E2 = "Incorrect 'index' type", C2 = (n) => `Invalid value for key ${n}`, k2 = (n) => `Pattern length exceeds max of ${n}.`, A2 = (n) => `Missing ${n} property in key`, x2 = (n) => `Property 'weight' in key '${n}' must be a positive integer`, bv = Object.prototype.hasOwnProperty;
class T2 {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let s = 0;
    r.forEach((i) => {
      let u = o0(i);
      this._keys.push(u), this._keyMap[u.id] = u, s += u.weight;
    }), this._keys.forEach((i) => {
      i.weight /= s;
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
function o0(n) {
  let r = null, s = null, i = null, u = 1, c = null;
  if (Wn(n) || Er(n))
    i = n, r = Sv(n), s = Cf(n);
  else {
    if (!bv.call(n, "name"))
      throw new Error(A2("name"));
    const f = n.name;
    if (i = f, bv.call(n, "weight") && (u = n.weight, u <= 0))
      throw new Error(x2(f));
    r = Sv(f), s = Cf(f), c = n.getFn;
  }
  return { path: r, id: s, weight: u, src: i, getFn: c };
}
function Sv(n) {
  return Er(n) ? n : n.split(".");
}
function Cf(n) {
  return Er(n) ? n.join(".") : n;
}
function N2(n, r) {
  let s = [], i = !1;
  const u = (c, f, m) => {
    if (yn(c))
      if (!f[m])
        s.push(c);
      else {
        let p = f[m];
        const _ = c[p];
        if (!yn(_))
          return;
        if (m === f.length - 1 && (Wn(_) || a0(_) || S2(_)))
          s.push(b2(_));
        else if (Er(_)) {
          i = !0;
          for (let g = 0, E = _.length; g < E; g += 1)
            u(_[g], f, m + 1);
        } else f.length && u(_, f, m + 1);
      }
  };
  return u(n, Wn(r) ? r.split(".") : r, 0), i ? s : s[0];
}
const O2 = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, M2 = {
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
}, j2 = {
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
}, R2 = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: N2,
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
  ...M2,
  ...O2,
  ...j2,
  ...R2
};
const D2 = /[^ ]+/g;
function z2(n = 1, r = 3) {
  const s = /* @__PURE__ */ new Map(), i = Math.pow(10, r);
  return {
    get(u) {
      const c = u.match(D2).length;
      if (s.has(c))
        return s.get(c);
      const f = 1 / Math.pow(c, 0.5 * n), m = parseFloat(Math.round(f * i) / i);
      return s.set(c, m), m;
    },
    clear() {
      s.clear();
    }
  };
}
class Kf {
  constructor({
    getFn: r = Ne.getFn,
    fieldNormWeight: s = Ne.fieldNormWeight
  } = {}) {
    this.norm = z2(s, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
  }
  setSources(r = []) {
    this.docs = r;
  }
  setIndexRecords(r = []) {
    this.records = r;
  }
  setKeys(r = []) {
    this.keys = r, this._keysMap = {}, r.forEach((s, i) => {
      this._keysMap[s.id] = i;
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
    for (let s = r, i = this.size(); s < i; s += 1)
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
    let i = {
      v: r,
      i: s,
      n: this.norm.get(r)
    };
    this.records.push(i);
  }
  _addObject(r, s) {
    let i = { i: s, $: {} };
    this.keys.forEach((u, c) => {
      let f = u.getFn ? u.getFn(r) : this.getFn(r, u.path);
      if (yn(f)) {
        if (Er(f)) {
          let m = [];
          const p = [{ nestedArrIndex: -1, value: f }];
          for (; p.length; ) {
            const { nestedArrIndex: _, value: g } = p.pop();
            if (yn(g))
              if (Wn(g) && !ef(g)) {
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
          i.$[c] = m;
        } else if (Wn(f) && !ef(f)) {
          let m = {
            v: f,
            n: this.norm.get(f)
          };
          i.$[c] = m;
        }
      }
    }), this.records.push(i);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
}
function u0(n, r, { getFn: s = Ne.getFn, fieldNormWeight: i = Ne.fieldNormWeight } = {}) {
  const u = new Kf({ getFn: s, fieldNormWeight: i });
  return u.setKeys(n.map(o0)), u.setSources(r), u.create(), u;
}
function P2(n, { getFn: r = Ne.getFn, fieldNormWeight: s = Ne.fieldNormWeight } = {}) {
  const { keys: i, records: u } = n, c = new Kf({ getFn: r, fieldNormWeight: s });
  return c.setKeys(i), c.setIndexRecords(u), c;
}
function ku(n, {
  errors: r = 0,
  currentLocation: s = 0,
  expectedLocation: i = 0,
  distance: u = Ne.distance,
  ignoreLocation: c = Ne.ignoreLocation
} = {}) {
  const f = r / n.length;
  if (c)
    return f;
  const m = Math.abs(i - s);
  return u ? f + m / u : m ? 1 : f;
}
function L2(n = [], r = Ne.minMatchCharLength) {
  let s = [], i = -1, u = -1, c = 0;
  for (let f = n.length; c < f; c += 1) {
    let m = n[c];
    m && i === -1 ? i = c : !m && i !== -1 && (u = c - 1, u - i + 1 >= r && s.push([i, u]), i = -1);
  }
  return n[c - 1] && c - i >= r && s.push([i, c - 1]), s;
}
const ja = 32;
function I2(n, r, s, {
  location: i = Ne.location,
  distance: u = Ne.distance,
  threshold: c = Ne.threshold,
  findAllMatches: f = Ne.findAllMatches,
  minMatchCharLength: m = Ne.minMatchCharLength,
  includeMatches: p = Ne.includeMatches,
  ignoreLocation: _ = Ne.ignoreLocation
} = {}) {
  if (r.length > ja)
    throw new Error(k2(ja));
  const g = r.length, E = n.length, v = Math.max(0, Math.min(i, E));
  let S = c, h = v;
  const C = m > 1 || p, x = C ? Array(E) : [];
  let O;
  for (; (O = n.indexOf(r, h)) > -1; ) {
    let k = ku(r, {
      currentLocation: O,
      expectedLocation: v,
      distance: u,
      ignoreLocation: _
    });
    if (S = Math.min(k, S), h = O + g, C) {
      let M = 0;
      for (; M < g; )
        x[O + M] = 1, M += 1;
    }
  }
  h = -1;
  let N = [], P = 1, l = g + E;
  const y = 1 << g - 1;
  for (let k = 0; k < g; k += 1) {
    let M = 0, z = l;
    for (; M < z; )
      ku(r, {
        errors: k,
        currentLocation: v + z,
        expectedLocation: v,
        distance: u,
        ignoreLocation: _
      }) <= S ? M = z : l = z, z = Math.floor((l - M) / 2 + M);
    l = z;
    let R = Math.max(1, v - z + 1), L = f ? E : Math.min(v + z, E) + g, Z = Array(L + 2);
    Z[L + 1] = (1 << k) - 1;
    for (let $ = L; $ >= R; $ -= 1) {
      let W = $ - 1, j = s[n.charAt(W)];
      if (C && (x[W] = +!!j), Z[$] = (Z[$ + 1] << 1 | 1) & j, k && (Z[$] |= (N[$ + 1] | N[$]) << 1 | 1 | N[$ + 1]), Z[$] & y && (P = ku(r, {
        errors: k,
        currentLocation: W,
        expectedLocation: v,
        distance: u,
        ignoreLocation: _
      }), P <= S)) {
        if (S = P, h = W, h <= v)
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
    N = Z;
  }
  const w = {
    isMatch: h >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, P)
  };
  if (C) {
    const k = L2(x, m);
    k.length ? p && (w.indices = k) : w.isMatch = !1;
  }
  return w;
}
function B2(n) {
  let r = {};
  for (let s = 0, i = n.length; s < i; s += 1) {
    const u = n.charAt(s);
    r[u] = (r[u] || 0) | 1 << i - s - 1;
  }
  return r;
}
const yl = String.prototype.normalize ? ((n) => n.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((n) => n);
class l0 {
  constructor(r, {
    location: s = Ne.location,
    threshold: i = Ne.threshold,
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
      threshold: i,
      distance: u,
      includeMatches: c,
      findAllMatches: f,
      minMatchCharLength: m,
      isCaseSensitive: p,
      ignoreDiacritics: _,
      ignoreLocation: g
    }, r = p ? r : r.toLowerCase(), r = _ ? yl(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const E = (S, h) => {
      this.chunks.push({
        pattern: S,
        alphabet: B2(S),
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
    const { isCaseSensitive: s, ignoreDiacritics: i, includeMatches: u } = this.options;
    if (r = s ? r : r.toLowerCase(), r = i ? yl(r) : r, this.pattern === r) {
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
      const { isMatch: N, score: P, indices: l } = I2(r, C, x, {
        location: c + O,
        distance: f,
        threshold: m,
        findAllMatches: p,
        minMatchCharLength: _,
        includeMatches: u,
        ignoreLocation: g
      });
      N && (S = !0), v += P, N && l && (E = [...E, ...l]);
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
    return wv(r, this.multiRegex);
  }
  static isSingleMatch(r) {
    return wv(r, this.singleRegex);
  }
  search() {
  }
}
function wv(n, r) {
  const s = n.match(r);
  return s ? s[1] : null;
}
class U2 extends ta {
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
class H2 extends ta {
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
    const i = r.indexOf(this.pattern) === -1;
    return {
      isMatch: i,
      score: i ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class q2 extends ta {
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
class Z2 extends ta {
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
class G2 extends ta {
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
class V2 extends ta {
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
class c0 extends ta {
  constructor(r, {
    location: s = Ne.location,
    threshold: i = Ne.threshold,
    distance: u = Ne.distance,
    includeMatches: c = Ne.includeMatches,
    findAllMatches: f = Ne.findAllMatches,
    minMatchCharLength: m = Ne.minMatchCharLength,
    isCaseSensitive: p = Ne.isCaseSensitive,
    ignoreDiacritics: _ = Ne.ignoreDiacritics,
    ignoreLocation: g = Ne.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new l0(r, {
      location: s,
      threshold: i,
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
class d0 extends ta {
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
    let s = 0, i;
    const u = [], c = this.pattern.length;
    for (; (i = r.indexOf(this.pattern, s)) > -1; )
      s = i + c, u.push([i, s - 1]);
    const f = !!u.length;
    return {
      isMatch: f,
      score: f ? 0 : 1,
      indices: u
    };
  }
}
const kf = [
  U2,
  d0,
  q2,
  Z2,
  V2,
  G2,
  H2,
  c0
], Ev = kf.length, $2 = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, Y2 = "|";
function X2(n, r = {}) {
  return n.split(Y2).map((s) => {
    let i = s.trim().split($2).filter((c) => c && !!c.trim()), u = [];
    for (let c = 0, f = i.length; c < f; c += 1) {
      const m = i[c];
      let p = !1, _ = -1;
      for (; !p && ++_ < Ev; ) {
        const g = kf[_];
        let E = g.isMultiMatch(m);
        E && (u.push(new g(E, r)), p = !0);
      }
      if (!p)
        for (_ = -1; ++_ < Ev; ) {
          const g = kf[_];
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
const F2 = /* @__PURE__ */ new Set([c0.type, d0.type]);
class Q2 {
  constructor(r, {
    isCaseSensitive: s = Ne.isCaseSensitive,
    ignoreDiacritics: i = Ne.ignoreDiacritics,
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
      ignoreDiacritics: i,
      includeMatches: u,
      minMatchCharLength: c,
      findAllMatches: m,
      ignoreLocation: f,
      location: p,
      threshold: _,
      distance: g
    }, r = s ? r : r.toLowerCase(), r = i ? yl(r) : r, this.pattern = r, this.query = X2(this.pattern, this.options);
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
    const { includeMatches: i, isCaseSensitive: u, ignoreDiacritics: c } = this.options;
    r = u ? r : r.toLowerCase(), r = c ? yl(r) : r;
    let f = 0, m = [], p = 0;
    for (let _ = 0, g = s.length; _ < g; _ += 1) {
      const E = s[_];
      m.length = 0, f = 0;
      for (let v = 0, S = E.length; v < S; v += 1) {
        const h = E[v], { isMatch: C, indices: x, score: O } = h.search(r);
        if (C) {
          if (f += 1, p += O, i) {
            const N = h.constructor.type;
            F2.has(N) ? m = [...m, ...x] : m.push(x);
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
        return i && (v.indices = m), v;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const Af = [];
function K2(...n) {
  Af.push(...n);
}
function xf(n, r) {
  for (let s = 0, i = Af.length; s < i; s += 1) {
    let u = Af[s];
    if (u.condition(n, r))
      return new u(n, r);
  }
  return new l0(n, r);
}
const _l = {
  AND: "$and",
  OR: "$or"
}, Tf = {
  PATH: "$path",
  PATTERN: "$val"
}, Nf = (n) => !!(n[_l.AND] || n[_l.OR]), J2 = (n) => !!n[Tf.PATH], W2 = (n) => !Er(n) && i0(n) && !Nf(n), Cv = (n) => ({
  [_l.AND]: Object.keys(n).map((r) => ({
    [r]: n[r]
  }))
});
function f0(n, r, { auto: s = !0 } = {}) {
  const i = (u) => {
    let c = Object.keys(u);
    const f = J2(u);
    if (!f && c.length > 1 && !Nf(u))
      return i(Cv(u));
    if (W2(u)) {
      const p = f ? u[Tf.PATH] : c[0], _ = f ? u[Tf.PATTERN] : u[p];
      if (!Wn(_))
        throw new Error(C2(p));
      const g = {
        keyId: Cf(p),
        pattern: _
      };
      return s && (g.searcher = xf(_, r)), g;
    }
    let m = {
      children: [],
      operator: c[0]
    };
    return c.forEach((p) => {
      const _ = u[p];
      Er(_) && _.forEach((g) => {
        m.children.push(i(g));
      });
    }), m;
  };
  return Nf(n) || (n = Cv(n)), i(n);
}
function e3(n, { ignoreFieldNorm: r = Ne.ignoreFieldNorm }) {
  n.forEach((s) => {
    let i = 1;
    s.matches.forEach(({ key: u, norm: c, score: f }) => {
      const m = u ? u.weight : null;
      i *= Math.pow(
        f === 0 && m ? Number.EPSILON : f,
        (m || 1) * (r ? 1 : c)
      );
    }), s.score = i;
  });
}
function t3(n, r) {
  const s = n.matches;
  r.matches = [], yn(s) && s.forEach((i) => {
    if (!yn(i.indices) || !i.indices.length)
      return;
    const { indices: u, value: c } = i;
    let f = {
      indices: u,
      value: c
    };
    i.key && (f.key = i.key.src), i.idx > -1 && (f.refIndex = i.idx), r.matches.push(f);
  });
}
function n3(n, r) {
  r.score = n.score;
}
function r3(n, r, {
  includeMatches: s = Ne.includeMatches,
  includeScore: i = Ne.includeScore
} = {}) {
  const u = [];
  return s && u.push(t3), i && u.push(n3), n.map((c) => {
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
  constructor(r, s = {}, i) {
    this.options = { ...Ne, ...s }, this.options.useExtendedSearch, this._keyStore = new T2(this.options.keys), this.setCollection(r, i);
  }
  setCollection(r, s) {
    if (this._docs = r, s && !(s instanceof Kf))
      throw new Error(E2);
    this._myIndex = s || u0(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(r) {
    yn(r) && (this._docs.push(r), this._myIndex.add(r));
  }
  remove(r = () => !1) {
    const s = [];
    for (let i = 0, u = this._docs.length; i < u; i += 1) {
      const c = this._docs[i];
      r(c, i) && (this.removeAt(i), i -= 1, u -= 1, s.push(c));
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
      includeMatches: i,
      includeScore: u,
      shouldSort: c,
      sortFn: f,
      ignoreFieldNorm: m
    } = this.options;
    let p = Wn(r) ? Wn(this._docs[0]) ? this._searchStringList(r) : this._searchObjectList(r) : this._searchLogical(r);
    return e3(p, { ignoreFieldNorm: m }), c && p.sort(f), a0(s) && s > -1 && (p = p.slice(0, s)), r3(p, this._docs, {
      includeMatches: i,
      includeScore: u
    });
  }
  _searchStringList(r) {
    const s = xf(r, this.options), { records: i } = this._myIndex, u = [];
    return i.forEach(({ v: c, i: f, n: m }) => {
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
    const s = f0(r, this.options), i = (m, p, _) => {
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
        const S = m.children[E], h = i(S, p, _);
        if (h.length)
          g.push(...h);
        else if (m.operator === _l.AND)
          return [];
      }
      return g;
    }, u = this._myIndex.records, c = {}, f = [];
    return u.forEach(({ $: m, i: p }) => {
      if (yn(m)) {
        let _ = i(s, m, p);
        _.length && (c[p] || (c[p] = { idx: p, item: m, matches: [] }, f.push(c[p])), _.forEach(({ matches: g }) => {
          c[p].matches.push(...g);
        }));
      }
    }), f;
  }
  _searchObjectList(r) {
    const s = xf(r, this.options), { keys: i, records: u } = this._myIndex, c = [];
    return u.forEach(({ $: f, i: m }) => {
      if (!yn(f))
        return;
      let p = [];
      i.forEach((_, g) => {
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
  _findMatches({ key: r, value: s, searcher: i }) {
    if (!yn(s))
      return [];
    let u = [];
    if (Er(s))
      s.forEach(({ v: c, i: f, n: m }) => {
        if (!yn(c))
          return;
        const { isMatch: p, score: _, indices: g } = i.searchIn(c);
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
      const { v: c, n: f } = s, { isMatch: m, score: p, indices: _ } = i.searchIn(c);
      m && u.push({ score: p, key: r, value: c, norm: f, indices: _ });
    }
    return u;
  }
}
Ui.version = "7.1.0";
Ui.createIndex = u0;
Ui.parseIndex = P2;
Ui.config = Ne;
Ui.parseQuery = f0;
K2(Q2);
var a3 = Object.defineProperty, i3 = (n, r, s) => r in n ? a3(n, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[r] = s, s3 = (n, r, s) => i3(n, r + "", s);
let o3 = class {
  constructor() {
    s3(this, "requestMap"), this.requestMap = /* @__PURE__ */ new Map();
  }
  async abortRequest(r) {
    var s;
    const i = this.requestMap.get(r);
    if (i) {
      if (i.abortController)
        try {
          i.abortController.abort();
        } catch {
        }
      (s = i.options) != null && s.onFinish && await i.options.onFinish(r), this.requestMap.delete(r);
    }
  }
  /**
   * @returns return value is not important because request would be finished anyway. So use "options".
   */
  async generateRequest(r, s) {
    var i;
    const u = SillyTavern.getContext(), c = u.uuidv4(), f = ((i = r?.custom) == null ? void 0 : i.stream) ?? !1;
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
    for (const [s, i] of this.requestMap)
      r.set(s, i.abortController);
    return r;
  }
};
async function u3(n, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[n].callback(...r);
}
async function ge(n, r, { escapeHtml: s = !0 } = {}) {
  await u3("echo", { severity: n, escapeHtml: (!!s).toString() }, r);
}
function tf(n) {
  return L1(n);
}
function kv(n, r) {
  return z1(n, r);
}
function Au(n, r, s) {
  return P1(n, r, s);
}
function l3(n, r, s) {
  return Y1(n, r, s);
}
function c3(n, r) {
  return X1(n, r);
}
function d3(n, {
  customStoryString: r,
  customInstructSettings: s
} = {}) {
  return D1(n, { customStoryString: r, customInstructSettings: s });
}
function ka(n) {
  return e2(n);
}
function f3() {
  return {
    prompt: Ps[Ls.prompt],
    interval: Ps[Ls.interval],
    position: Ps[Ls.position],
    depth: Ps[Ls.depth],
    role: Ps[Ls.role]
  };
}
function h3(n, r) {
  return n2(n, r);
}
function p3({
  name2: n,
  charDescription: r,
  charPersonality: s,
  Scenario: i,
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
  return t2(
    {
      name2: n,
      charDescription: r,
      charPersonality: s,
      Scenario: i,
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
function m3(n) {
  return Q1(n);
}
function g3(n) {
  return K1(n);
}
function v3(n, r, {
  characterOverride: s,
  isMarkdown: i,
  isPrompt: u,
  isEdit: c,
  depth: f
}) {
  return a2(n, r, { characterOverride: s, isMarkdown: i, isPrompt: u, isEdit: c, depth: f });
}
function y3(n, r, { characterOverride: s = null } = {}) {
  return r2(n, r, { characterOverride: s });
}
async function _3(n, r) {
  return await F1(n, r);
}
function Av(n, {
  wiFormat: r
} = {}) {
  return J1(n, { wiFormat: r });
}
function Us(n) {
  return W1(n);
}
function h0(n, {
  manualAvatarKey: r
} = {}) {
  return i2(n, { manualAvatarKey: r });
}
function Jf(n, r) {
  return U1(n, r);
}
class b3 {
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
var S3 = Object.defineProperty, w3 = (n, r, s) => r in n ? S3(n, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[r] = s, xu = (n, r, s) => w3(n, typeof r != "symbol" ? r + "" : r, s);
class E3 {
  constructor(r) {
    xu(this, "messages", []), xu(this, "tokenizer"), xu(this, "maxContext"), xu(this, "currentTokenCount", 0), this.tokenizer = new b3(), this.maxContext = r;
  }
  getTokenCount(r) {
    var s, i;
    return r.content ? ((i = (s = r.source) == null ? void 0 : s.extra) == null ? void 0 : i.token_count) ?? this.tokenizer.encode(r.content).length : 0;
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
    const s = r.filter((m) => m.content), i = s.map((m) => this.getTokenCount(m)), u = i.reduce((m, p) => m + p, 0);
    if (this.currentTokenCount + u <= this.maxContext)
      return this.messages.push(...s), this.currentTokenCount += u, !0;
    let c = 0;
    const f = [];
    for (let m = s.length - 1; m >= 0; m--) {
      const p = s[m], _ = i[m];
      if (this.currentTokenCount + c + _ <= this.maxContext)
        f.unshift(p), c += _;
      else
        break;
    }
    return f.length > 0 && (this.messages.push(...f), this.currentTokenCount += c), f.length === s.length;
  }
  insert(r, s) {
    if (!s.content) return !0;
    const i = this.getTokenCount(s);
    return this.currentTokenCount + i > this.maxContext ? !1 : (this.messages.splice(r, 0, s), this.currentTokenCount += i, !0);
  }
  getMessages() {
    return this.messages;
  }
}
async function p0(n, {
  targetCharacterId: r,
  presetName: s,
  instructName: i,
  contextName: u,
  syspromptName: c,
  maxContext: f,
  includeNames: m,
  ignoreCharacterFields: p,
  ignoreAuthorNote: _,
  ignoreWorldInfo: g,
  messageIndexesBetween: E
} = {}) {
  var v, S, h, C, x, O, N, P, l, y, w, k, M, z;
  if (!["textgenerationwebui", "openai"].includes(n))
    throw new Error("Unsupported API");
  const R = SillyTavern.getContext();
  let { description: L, personality: Z, persona: F, scenario: $, mesExamples: W, system: j, jailbreak: B } = p ? {
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
  const K = n === "textgenerationwebui" ? (v = R.getPresetManager("instruct")) == null ? void 0 : v.getCompletionPresetByName(i) : void 0, ae = !!(K != null && K.enabled);
  let I = kv(W, ae);
  function Y() {
    var ye, _e;
    if (typeof f == "number")
      return f;
    if (!f || f === "active" || !s)
      return tf();
    if (typeof f == "number")
      return f;
    let qe;
    if (n === "textgenerationwebui") {
      const Ze = (ye = R.getPresetManager("textgenerationwebui")) == null ? void 0 : ye.getCompletionPresetByName(s);
      qe = Ze?.max_length;
    } else {
      const Ze = (_e = R.getPresetManager("openai")) == null ? void 0 : _e.getCompletionPresetByName(s);
      qe = Ze?.openai_max_context;
    }
    return typeof qe == "number" ? qe : tf();
  }
  let ce = [];
  const V = Y();
  if (V <= 0)
    return { result: [], warnings: ce };
  const U = new E3(V), te = R.ToolManager.isToolCallingSupported(), ne = E?.start ?? 0, ue = E != null && E.end ? E.end + 1 : void 0;
  let re = ne === -1 && ue === 0 ? [] : R.chat.slice(ne, ue).filter((ye) => {
    var _e;
    return !ye.is_system || te && Array.isArray((_e = ye.extra) == null ? void 0 : _e.tool_invocations);
  });
  re = await Promise.all(
    re.map(async (ye, _e) => {
      var qe, Ze;
      let et = ye.mes, Vn = ye.is_user ? iv.USER_INPUT : iv.AI_OUTPUT, Dn = { isPrompt: !0, depth: re.length - _e - 1 }, mt = v3(et, Vn, Dn);
      return mt = await _3(ye, mt), (qe = ye?.extra) != null && qe.append_title && (Ze = ye?.extra) != null && Ze.title && (mt = `${mt}

${ye.extra.title}`), {
        ...ye,
        mes: mt,
        index: _e
      };
    })
  );
  const pe = re.map((ye) => H1 ? `${ye.name}: ${ye.mes}` : ye.mes).reverse(), { worldInfoString: je, worldInfoBefore: Se, worldInfoAfter: me, worldInfoExamples: fe, worldInfoDepth: we, anBefore: Le, anAfter: We } = g ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await R.getWorldInfoPrompt(pe, V, !1);
  for (const ye of fe) {
    const _e = ye.content;
    if (_e.length === 0)
      continue;
    const qe = Au(_e, Ea, Fr), Ze = kv(qe, ae);
    ye.position === q1.before ? I.unshift(...Ze) : I.push(...Ze);
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
    I && (I = l3(I, Ea, Fr));
    const _e = (S = R.getPresetManager("sysprompt")) == null ? void 0 : S.getCompletionPresetByName(c);
    _e && (j = R.powerUserSettings.prefer_character_prompt && j ? j : Au(_e.content, Ea, Fr), j = ae ? c3(
      R.substituteParams(j, Ea, Fr, _e.content),
      K
    ) : j);
    const qe = {
      description: L,
      personality: Z,
      persona: R.powerUserSettings.persona_description_position == rv.IN_PROMPT ? F : "",
      scenario: $,
      system: j,
      char: Fr,
      user: Ea,
      wiBefore: Se,
      wiAfter: me,
      loreBefore: Se,
      loreAfter: me,
      mesExamples: I.join(""),
      mesExamplesRaw: ye.join("")
    }, Ze = (h = R.getPresetManager("context")) == null ? void 0 : h.getCompletionPresetByName(u);
    let et = d3(qe, {
      customInstructSettings: K,
      customStoryString: Ze?.story_string
    });
    et && U.add({ role: "system", content: et, ignoreInstruct: !0 }), Fe();
  } else {
    let ye = function(Vt) {
      const Qt = bn.find((Ua) => Ua.identifier === Vt);
      if (Qt)
        return Qt;
      const po = et.prompts.find((Ua) => Ua.identifier === Vt);
      if (po)
        return po;
    }, _e = m3(re), qe = g3(I);
    async function Ze() {
      let [Vt, Qt] = await p3(
        {
          name2: Fr,
          charDescription: L,
          charPersonality: Z,
          Scenario: $,
          worldInfoBefore: Se,
          worldInfoAfter: me,
          extensionPrompts: R.extensionPrompts,
          bias: "",
          type: "normal",
          quietPrompt: void 0,
          quietImage: void 0,
          cyclePrompt: "",
          systemPromptOverride: j,
          jailbreakPromptOverride: B,
          personaDescription: F,
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
    const Dn = $ && et.scenario_format ? R.substituteParams(et.scenario_format) : "", mt = Z && et.personality_format ? R.substituteParams(et.personality_format) : "", $n = R.substituteParams(et.group_nudge_prompt), Gt = et.impersonation_prompt ? R.substituteParams(et.impersonation_prompt) : "", bn = [];
    g || bn.push(
      {
        role: "system",
        content: Av(Se, { wiFormat: et.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: Av(me, { wiFormat: et.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), p || bn.push(
      { role: "system", content: L, identifier: "charDescription" },
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
    }), !p && R.powerUserSettings.persona_description && R.powerUserSettings.persona_description_position === rv.IN_PROMPT && bn.push({
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
    const ye = h3(Ft, Number(sn));
    if (Ft && Array.isArray(ye) && ye.length > 0)
      ye.filter((_e) => _e.text).forEach((_e, qe) => {
        const Ze = U.getMessages();
        U.insert(Ze.length - _e.depth, { role: _e.role, content: _e.text });
      });
    else {
      const _e = Au(
        (y = (l = (P = (N = (O = R.characters[sn]) == null ? void 0 : O.data) == null ? void 0 : N.extensions) == null ? void 0 : P.depth_prompt) == null ? void 0 : l.prompt) == null ? void 0 : y.trim(),
        Ea,
        Fr
      ) || "";
      if (_e) {
        const qe = B1, Ze = ((z = (M = (k = (w = R.characters[sn]) == null ? void 0 : w.data) == null ? void 0 : k.extensions) == null ? void 0 : M.depth_prompt) == null ? void 0 : z.role) ?? I1, et = U.getMessages();
        U.insert(et.length - qe, {
          role: ka(Ze),
          content: _e
        });
      }
    }
  }
  let dt = -1;
  if (!_) {
    const ye = f3();
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
function xv(n, r) {
  var s = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    r && (i = i.filter(function(u) {
      return Object.getOwnPropertyDescriptor(n, u).enumerable;
    })), s.push.apply(s, i);
  }
  return s;
}
function nr(n) {
  for (var r = 1; r < arguments.length; r++) {
    var s = arguments[r] != null ? arguments[r] : {};
    r % 2 ? xv(Object(s), !0).forEach(function(i) {
      C3(n, i, s[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : xv(Object(s)).forEach(function(i) {
      Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(s, i));
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
function C3(n, r, s) {
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
      for (var i in s)
        Object.prototype.hasOwnProperty.call(s, i) && (n[i] = s[i]);
    }
    return n;
  }, Cr.apply(this, arguments);
}
function k3(n, r) {
  if (n == null) return {};
  var s = {}, i = Object.keys(n), u, c;
  for (c = 0; c < i.length; c++)
    u = i[c], !(r.indexOf(u) >= 0) && (s[u] = n[u]);
  return s;
}
function A3(n, r) {
  if (n == null) return {};
  var s = k3(n, r), i, u;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    for (u = 0; u < c.length; u++)
      i = c[u], !(r.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(n, i) && (s[i] = n[i]);
  }
  return s;
}
var x3 = "1.15.6";
function wr(n) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(n);
}
var kr = wr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), uo = wr(/Edge/i), Tv = wr(/firefox/i), to = wr(/safari/i) && !wr(/chrome/i) && !wr(/android/i), Wf = wr(/iP(ad|od|hone)/i), m0 = wr(/chrome/i) && wr(/android/i), g0 = {
  capture: !1,
  passive: !1
};
function He(n, r, s) {
  n.addEventListener(r, s, !kr && g0);
}
function Ue(n, r, s) {
  n.removeEventListener(r, s, !kr && g0);
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
function v0(n) {
  return n.host && n !== document && n.host.nodeType ? n.host : n.parentNode;
}
function Hn(n, r, s, i) {
  if (n) {
    s = s || document;
    do {
      if (r != null && (r[0] === ">" ? n.parentNode === s && bl(n, r) : bl(n, r)) || i && n === s)
        return n;
      if (n === s) break;
    } while (n = v0(n));
  }
  return null;
}
var Nv = /\s+/g;
function gn(n, r, s) {
  if (n && r)
    if (n.classList)
      n.classList[s ? "add" : "remove"](r);
    else {
      var i = (" " + n.className + " ").replace(Nv, " ").replace(" " + r + " ", " ");
      n.className = (i + (s ? " " + r : "")).replace(Nv, " ");
    }
}
function xe(n, r, s) {
  var i = n && n.style;
  if (i) {
    if (s === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? s = document.defaultView.getComputedStyle(n, "") : n.currentStyle && (s = n.currentStyle), r === void 0 ? s : s[r];
    !(r in i) && r.indexOf("webkit") === -1 && (r = "-webkit-" + r), i[r] = s + (typeof s == "string" ? "" : "px");
  }
}
function Li(n, r) {
  var s = "";
  if (typeof n == "string")
    s = n;
  else
    do {
      var i = xe(n, "transform");
      i && i !== "none" && (s = i + " " + s);
    } while (!r && (n = n.parentNode));
  var u = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return u && new u(s);
}
function y0(n, r, s) {
  if (n) {
    var i = n.getElementsByTagName(r), u = 0, c = i.length;
    if (s)
      for (; u < c; u++)
        s(i[u], u);
    return i;
  }
  return [];
}
function er() {
  var n = document.scrollingElement;
  return n || document.documentElement;
}
function wt(n, r, s, i, u) {
  if (!(!n.getBoundingClientRect && n !== window)) {
    var c, f, m, p, _, g, E;
    if (n !== window && n.parentNode && n !== er() ? (c = n.getBoundingClientRect(), f = c.top, m = c.left, p = c.bottom, _ = c.right, g = c.height, E = c.width) : (f = 0, m = 0, p = window.innerHeight, _ = window.innerWidth, g = window.innerHeight, E = window.innerWidth), (r || s) && n !== window && (u = u || n.parentNode, !kr))
      do
        if (u && u.getBoundingClientRect && (xe(u, "transform") !== "none" || s && xe(u, "position") !== "static")) {
          var v = u.getBoundingClientRect();
          f -= v.top + parseInt(xe(u, "border-top-width")), m -= v.left + parseInt(xe(u, "border-left-width")), p = f + c.height, _ = m + c.width;
          break;
        }
      while (u = u.parentNode);
    if (i && n !== window) {
      var S = Li(u || n), h = S && S.a, C = S && S.d;
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
function Ov(n, r, s) {
  for (var i = ea(n, !0), u = wt(n)[r]; i; ) {
    var c = wt(i)[s], f = void 0;
    if (f = u >= c, !f) return i;
    if (i === er()) break;
    i = ea(i, !1);
  }
  return !1;
}
function Bi(n, r, s, i) {
  for (var u = 0, c = 0, f = n.children; c < f.length; ) {
    if (f[c].style.display !== "none" && f[c] !== Te.ghost && (i || f[c] !== Te.dragged) && Hn(f[c], s.draggable, n, !1)) {
      if (u === r)
        return f[c];
      u++;
    }
    c++;
  }
  return null;
}
function eh(n, r) {
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
function Mv(n) {
  var r = 0, s = 0, i = er();
  if (n)
    do {
      var u = Li(n), c = u.a, f = u.d;
      r += n.scrollLeft * c, s += n.scrollTop * f;
    } while (n !== i && (n = n.parentNode));
  return [r, s];
}
function T3(n, r) {
  for (var s in n)
    if (n.hasOwnProperty(s)) {
      for (var i in r)
        if (r.hasOwnProperty(i) && r[i] === n[s][i]) return Number(s);
    }
  return -1;
}
function ea(n, r) {
  if (!n || !n.getBoundingClientRect) return er();
  var s = n, i = !1;
  do
    if (s.clientWidth < s.scrollWidth || s.clientHeight < s.scrollHeight) {
      var u = xe(s);
      if (s.clientWidth < s.scrollWidth && (u.overflowX == "auto" || u.overflowX == "scroll") || s.clientHeight < s.scrollHeight && (u.overflowY == "auto" || u.overflowY == "scroll")) {
        if (!s.getBoundingClientRect || s === document.body) return er();
        if (i || r) return s;
        i = !0;
      }
    }
  while (s = s.parentNode);
  return er();
}
function N3(n, r) {
  if (n && r)
    for (var s in r)
      r.hasOwnProperty(s) && (n[s] = r[s]);
  return n;
}
function nf(n, r) {
  return Math.round(n.top) === Math.round(r.top) && Math.round(n.left) === Math.round(r.left) && Math.round(n.height) === Math.round(r.height) && Math.round(n.width) === Math.round(r.width);
}
var no;
function _0(n, r) {
  return function() {
    if (!no) {
      var s = arguments, i = this;
      s.length === 1 ? n.call(i, s[0]) : n.apply(i, s), no = setTimeout(function() {
        no = void 0;
      }, r);
    }
  };
}
function O3() {
  clearTimeout(no), no = void 0;
}
function b0(n, r, s) {
  n.scrollLeft += r, n.scrollTop += s;
}
function S0(n) {
  var r = window.Polymer, s = window.jQuery || window.Zepto;
  return r && r.dom ? r.dom(n).cloneNode(!0) : s ? s(n).clone(!0)[0] : n.cloneNode(!0);
}
function w0(n, r, s) {
  var i = {};
  return Array.from(n.children).forEach(function(u) {
    var c, f, m, p;
    if (!(!Hn(u, r.draggable, n, !1) || u.animated || u === s)) {
      var _ = wt(u);
      i.left = Math.min((c = i.left) !== null && c !== void 0 ? c : 1 / 0, _.left), i.top = Math.min((f = i.top) !== null && f !== void 0 ? f : 1 / 0, _.top), i.right = Math.max((m = i.right) !== null && m !== void 0 ? m : -1 / 0, _.right), i.bottom = Math.max((p = i.bottom) !== null && p !== void 0 ? p : -1 / 0, _.bottom);
    }
  }), i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
var an = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function M3() {
  var n = [], r;
  return {
    captureAnimationState: function() {
      if (n = [], !!this.options.animation) {
        var i = [].slice.call(this.el.children);
        i.forEach(function(u) {
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
    addAnimationState: function(i) {
      n.push(i);
    },
    removeAnimationState: function(i) {
      n.splice(T3(n, {
        target: i
      }), 1);
    },
    animateAll: function(i) {
      var u = this;
      if (!this.options.animation) {
        clearTimeout(r), typeof i == "function" && i();
        return;
      }
      var c = !1, f = 0;
      n.forEach(function(m) {
        var p = 0, _ = m.target, g = _.fromRect, E = wt(_), v = _.prevFromRect, S = _.prevToRect, h = m.rect, C = Li(_, !0);
        C && (E.top -= C.f, E.left -= C.e), _.toRect = E, _.thisAnimationDuration && nf(v, E) && !nf(g, E) && // Make sure animatingRect is on line between toRect & fromRect
        (h.top - E.top) / (h.left - E.left) === (g.top - E.top) / (g.left - E.left) && (p = R3(h, v, S, u.options)), nf(E, g) || (_.prevFromRect = g, _.prevToRect = E, p || (p = u.options.animation), u.animate(_, h, E, p)), p && (c = !0, f = Math.max(f, p), clearTimeout(_.animationResetTimer), _.animationResetTimer = setTimeout(function() {
          _.animationTime = 0, _.prevFromRect = null, _.fromRect = null, _.prevToRect = null, _.thisAnimationDuration = null;
        }, p), _.thisAnimationDuration = p);
      }), clearTimeout(r), c ? r = setTimeout(function() {
        typeof i == "function" && i();
      }, f) : typeof i == "function" && i(), n = [];
    },
    animate: function(i, u, c, f) {
      if (f) {
        xe(i, "transition", ""), xe(i, "transform", "");
        var m = Li(this.el), p = m && m.a, _ = m && m.d, g = (u.left - c.left) / (p || 1), E = (u.top - c.top) / (_ || 1);
        i.animatingX = !!g, i.animatingY = !!E, xe(i, "transform", "translate3d(" + g + "px," + E + "px,0)"), this.forRepaintDummy = j3(i), xe(i, "transition", "transform " + f + "ms" + (this.options.easing ? " " + this.options.easing : "")), xe(i, "transform", "translate3d(0,0,0)"), typeof i.animated == "number" && clearTimeout(i.animated), i.animated = setTimeout(function() {
          xe(i, "transition", ""), xe(i, "transform", ""), i.animated = !1, i.animatingX = !1, i.animatingY = !1;
        }, f);
      }
    }
  };
}
function j3(n) {
  return n.offsetWidth;
}
function R3(n, r, s, i) {
  return Math.sqrt(Math.pow(r.top - n.top, 2) + Math.pow(r.left - n.left, 2)) / Math.sqrt(Math.pow(r.top - s.top, 2) + Math.pow(r.left - s.left, 2)) * i.animation;
}
var xi = [], rf = {
  initializeByDefault: !0
}, lo = {
  mount: function(r) {
    for (var s in rf)
      rf.hasOwnProperty(s) && !(s in r) && (r[s] = rf[s]);
    xi.forEach(function(i) {
      if (i.pluginName === r.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(r.pluginName, " more than once");
    }), xi.push(r);
  },
  pluginEvent: function(r, s, i) {
    var u = this;
    this.eventCanceled = !1, i.cancel = function() {
      u.eventCanceled = !0;
    };
    var c = r + "Global";
    xi.forEach(function(f) {
      s[f.pluginName] && (s[f.pluginName][c] && s[f.pluginName][c](nr({
        sortable: s
      }, i)), s.options[f.pluginName] && s[f.pluginName][r] && s[f.pluginName][r](nr({
        sortable: s
      }, i)));
    });
  },
  initializePlugins: function(r, s, i, u) {
    xi.forEach(function(m) {
      var p = m.pluginName;
      if (!(!r.options[p] && !m.initializeByDefault)) {
        var _ = new m(r, s, r.options);
        _.sortable = r, _.options = r.options, r[p] = _, Cr(i, _.defaults);
      }
    });
    for (var c in r.options)
      if (r.options.hasOwnProperty(c)) {
        var f = this.modifyOption(r, c, r.options[c]);
        typeof f < "u" && (r.options[c] = f);
      }
  },
  getEventProperties: function(r, s) {
    var i = {};
    return xi.forEach(function(u) {
      typeof u.eventProperties == "function" && Cr(i, u.eventProperties.call(s[u.pluginName], r));
    }), i;
  },
  modifyOption: function(r, s, i) {
    var u;
    return xi.forEach(function(c) {
      r[c.pluginName] && c.optionListeners && typeof c.optionListeners[s] == "function" && (u = c.optionListeners[s].call(r[c.pluginName], i));
    }), u;
  }
};
function D3(n) {
  var r = n.sortable, s = n.rootEl, i = n.name, u = n.targetEl, c = n.cloneEl, f = n.toEl, m = n.fromEl, p = n.oldIndex, _ = n.newIndex, g = n.oldDraggableIndex, E = n.newDraggableIndex, v = n.originalEvent, S = n.putSortable, h = n.extraEventProperties;
  if (r = r || s && s[an], !!r) {
    var C, x = r.options, O = "on" + i.charAt(0).toUpperCase() + i.substr(1);
    window.CustomEvent && !kr && !uo ? C = new CustomEvent(i, {
      bubbles: !0,
      cancelable: !0
    }) : (C = document.createEvent("Event"), C.initEvent(i, !0, !0)), C.to = f || s, C.from = m || s, C.item = u || s, C.clone = c, C.oldIndex = p, C.newIndex = _, C.oldDraggableIndex = g, C.newDraggableIndex = E, C.originalEvent = v, C.pullMode = S ? S.lastPutMode : void 0;
    var N = nr(nr({}, h), lo.getEventProperties(i, r));
    for (var P in N)
      C[P] = N[P];
    s && s.dispatchEvent(C), x[O] && x[O].call(r, C);
  }
}
var z3 = ["evt"], nn = function(r, s) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u = i.evt, c = A3(i, z3);
  lo.pluginEvent.bind(Te)(r, s, nr({
    dragEl: he,
    parentEl: pt,
    ghostEl: Me,
    rootEl: it,
    nextEl: Oa,
    lastDownEl: dl,
    cloneEl: lt,
    cloneHidden: Wr,
    dragStarted: Fs,
    putSortable: Pt,
    activeSortable: Te.active,
    originalEvent: u,
    oldIndex: Di,
    oldDraggableIndex: ro,
    newIndex: vn,
    newDraggableIndex: Jr,
    hideGhostForTarget: A0,
    unhideGhostForTarget: x0,
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
  D3(nr({
    putSortable: Pt,
    cloneEl: lt,
    targetEl: he,
    rootEl: it,
    oldIndex: Di,
    oldDraggableIndex: ro,
    newIndex: vn,
    newDraggableIndex: Jr
  }, n));
}
var he, pt, Me, it, Oa, dl, lt, Wr, Di, vn, ro, Jr, Tu, Pt, Ri = !1, Sl = !1, wl = [], Aa, In, af, sf, jv, Rv, Fs, Ti, ao, io = !1, Nu = !1, fl, qt, of = [], Of = !1, El = [], Ol = typeof document < "u", Ou = Wf, Dv = uo || kr ? "cssFloat" : "float", P3 = Ol && !m0 && !Wf && "draggable" in document.createElement("div"), E0 = (function() {
  if (Ol) {
    if (kr)
      return !1;
    var n = document.createElement("x");
    return n.style.cssText = "pointer-events:auto", n.style.pointerEvents === "auto";
  }
})(), C0 = function(r, s) {
  var i = xe(r), u = parseInt(i.width) - parseInt(i.paddingLeft) - parseInt(i.paddingRight) - parseInt(i.borderLeftWidth) - parseInt(i.borderRightWidth), c = Bi(r, 0, s), f = Bi(r, 1, s), m = c && xe(c), p = f && xe(f), _ = m && parseInt(m.marginLeft) + parseInt(m.marginRight) + wt(c).width, g = p && parseInt(p.marginLeft) + parseInt(p.marginRight) + wt(f).width;
  if (i.display === "flex")
    return i.flexDirection === "column" || i.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (i.display === "grid")
    return i.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (c && m.float && m.float !== "none") {
    var E = m.float === "left" ? "left" : "right";
    return f && (p.clear === "both" || p.clear === E) ? "vertical" : "horizontal";
  }
  return c && (m.display === "block" || m.display === "flex" || m.display === "table" || m.display === "grid" || _ >= u && i[Dv] === "none" || f && i[Dv] === "none" && _ + g > u) ? "vertical" : "horizontal";
}, L3 = function(r, s, i) {
  var u = i ? r.left : r.top, c = i ? r.right : r.bottom, f = i ? r.width : r.height, m = i ? s.left : s.top, p = i ? s.right : s.bottom, _ = i ? s.width : s.height;
  return u === m || c === p || u + f / 2 === m + _ / 2;
}, I3 = function(r, s) {
  var i;
  return wl.some(function(u) {
    var c = u[an].options.emptyInsertThreshold;
    if (!(!c || eh(u))) {
      var f = wt(u), m = r >= f.left - c && r <= f.right + c, p = s >= f.top - c && s <= f.bottom + c;
      if (m && p)
        return i = u;
    }
  }), i;
}, k0 = function(r) {
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
  var i = {}, u = r.group;
  (!u || cl(u) != "object") && (u = {
    name: u
  }), i.name = u.name, i.checkPull = s(u.pull, !0), i.checkPut = s(u.put), i.revertClone = u.revertClone, r.group = i;
}, A0 = function() {
  !E0 && Me && xe(Me, "display", "none");
}, x0 = function() {
  !E0 && Me && xe(Me, "display", "");
};
Ol && !m0 && document.addEventListener("click", function(n) {
  if (Sl)
    return n.preventDefault(), n.stopPropagation && n.stopPropagation(), n.stopImmediatePropagation && n.stopImmediatePropagation(), Sl = !1, !1;
}, !0);
var xa = function(r) {
  if (he) {
    r = r.touches ? r.touches[0] : r;
    var s = I3(r.clientX, r.clientY);
    if (s) {
      var i = {};
      for (var u in r)
        r.hasOwnProperty(u) && (i[u] = r[u]);
      i.target = i.rootEl = s, i.preventDefault = void 0, i.stopPropagation = void 0, s[an]._onDragOver(i);
    }
  }
}, B3 = function(r) {
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
      return C0(n, this.options);
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
    supportPointer: Te.supportPointer !== !1 && "PointerEvent" in window && (!to || Wf),
    emptyInsertThreshold: 5
  };
  lo.initializePlugins(this, n, s);
  for (var i in s)
    !(i in r) && (r[i] = s[i]);
  k0(r);
  for (var u in this)
    u.charAt(0) === "_" && typeof this[u] == "function" && (this[u] = this[u].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : P3, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? He(n, "pointerdown", this._onTapStart) : (He(n, "mousedown", this._onTapStart), He(n, "touchstart", this._onTapStart)), this.nativeDraggable && (He(n, "dragover", this), He(n, "dragenter", this)), wl.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), Cr(this, M3());
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
      var s = this, i = this.el, u = this.options, c = u.preventOnFilter, f = r.type, m = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, p = (m || r).target, _ = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || p, g = u.filter;
      if (Y3(i), !he && !(/mousedown|pointerdown/.test(f) && r.button !== 0 || u.disabled) && !_.isContentEditable && !(!this.nativeDraggable && to && p && p.tagName.toUpperCase() === "SELECT") && (p = Hn(p, u.draggable, i, !1), !(p && p.animated) && dl !== p)) {
        if (Di = Mn(p), ro = Mn(p, u.draggable), typeof g == "function") {
          if (g.call(this, r, p, this)) {
            Yt({
              sortable: s,
              rootEl: _,
              name: "filter",
              targetEl: p,
              toEl: i,
              fromEl: i
            }), nn("filter", s, {
              evt: r
            }), c && r.preventDefault();
            return;
          }
        } else if (g && (g = g.split(",").some(function(E) {
          if (E = Hn(_, E.trim(), i, !1), E)
            return Yt({
              sortable: s,
              rootEl: E,
              name: "filter",
              targetEl: p,
              fromEl: i,
              toEl: i
            }), nn("filter", s, {
              evt: r
            }), !0;
        }), g)) {
          c && r.preventDefault();
          return;
        }
        u.handle && !Hn(_, u.handle, i, !1) || this._prepareDragStart(r, m, p);
      }
    }
  },
  _prepareDragStart: function(r, s, i) {
    var u = this, c = u.el, f = u.options, m = c.ownerDocument, p;
    if (i && !he && i.parentNode === c) {
      var _ = wt(i);
      if (it = c, he = i, pt = he.parentNode, Oa = he.nextSibling, dl = i, Tu = f.group, Te.dragged = he, Aa = {
        target: he,
        clientX: (s || r).clientX,
        clientY: (s || r).clientY
      }, jv = Aa.clientX - _.left, Rv = Aa.clientY - _.top, this._lastX = (s || r).clientX, this._lastY = (s || r).clientY, he.style["will-change"] = "all", p = function() {
        if (nn("delayEnded", u, {
          evt: r
        }), Te.eventCanceled) {
          u._onDrop();
          return;
        }
        u._disableDelayedDragEvents(), !Tv && u.nativeDraggable && (he.draggable = !0), u._triggerDragStart(r, s), Yt({
          sortable: u,
          name: "choose",
          originalEvent: r
        }), gn(he, f.chosenClass, !0);
      }, f.ignore.split(",").forEach(function(g) {
        y0(he, g.trim(), uf);
      }), He(m, "dragover", xa), He(m, "mousemove", xa), He(m, "touchmove", xa), f.supportPointer ? (He(m, "pointerup", u._onDrop), !this.nativeDraggable && He(m, "pointercancel", u._onDrop)) : (He(m, "mouseup", u._onDrop), He(m, "touchend", u._onDrop), He(m, "touchcancel", u._onDrop)), Tv && this.nativeDraggable && (this.options.touchStartThreshold = 4, he.draggable = !0), nn("delayStart", this, {
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
      }), this.nativeDraggable && He(document, "dragover", B3);
      var i = this.options;
      !r && gn(he, i.dragClass, !1), gn(he, i.ghostClass, !0), Te.active = this, r && this._appendGhost(), Yt({
        sortable: this,
        name: "start",
        originalEvent: s
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (In) {
      this._lastX = In.clientX, this._lastY = In.clientY, A0();
      for (var r = document.elementFromPoint(In.clientX, In.clientY), s = r; r && r.shadowRoot && (r = r.shadowRoot.elementFromPoint(In.clientX, In.clientY), r !== s); )
        s = r;
      if (he.parentNode[an]._isOutsideThisEl(r), s)
        do {
          if (s[an]) {
            var i = void 0;
            if (i = s[an]._onDragOver({
              clientX: In.clientX,
              clientY: In.clientY,
              target: r,
              rootEl: s
            }), i && !this.options.dragoverBubble)
              break;
          }
          r = s;
        } while (s = v0(s));
      x0();
    }
  },
  _onTouchMove: function(r) {
    if (Aa) {
      var s = this.options, i = s.fallbackTolerance, u = s.fallbackOffset, c = r.touches ? r.touches[0] : r, f = Me && Li(Me, !0), m = Me && f && f.a, p = Me && f && f.d, _ = Ou && qt && Mv(qt), g = (c.clientX - Aa.clientX + u.x) / (m || 1) + (_ ? _[0] - of[0] : 0) / (m || 1), E = (c.clientY - Aa.clientY + u.y) / (p || 1) + (_ ? _[1] - of[1] : 0) / (p || 1);
      if (!Te.active && !Ri) {
        if (i && Math.max(Math.abs(c.clientX - this._lastX), Math.abs(c.clientY - this._lastY)) < i)
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
      var r = this.options.fallbackOnBody ? document.body : it, s = wt(he, !0, Ou, !0, r), i = this.options;
      if (Ou) {
        for (qt = r; xe(qt, "position") === "static" && xe(qt, "transform") === "none" && qt !== document; )
          qt = qt.parentNode;
        qt !== document.body && qt !== document.documentElement ? (qt === document && (qt = er()), s.top += qt.scrollTop, s.left += qt.scrollLeft) : qt = er(), of = Mv(qt);
      }
      Me = he.cloneNode(!0), gn(Me, i.ghostClass, !1), gn(Me, i.fallbackClass, !0), gn(Me, i.dragClass, !0), xe(Me, "transition", ""), xe(Me, "transform", ""), xe(Me, "box-sizing", "border-box"), xe(Me, "margin", 0), xe(Me, "top", s.top), xe(Me, "left", s.left), xe(Me, "width", s.width), xe(Me, "height", s.height), xe(Me, "opacity", "0.8"), xe(Me, "position", Ou ? "absolute" : "fixed"), xe(Me, "zIndex", "100000"), xe(Me, "pointerEvents", "none"), Te.ghost = Me, r.appendChild(Me), xe(Me, "transform-origin", jv / parseInt(Me.style.width) * 100 + "% " + Rv / parseInt(Me.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(r, s) {
    var i = this, u = r.dataTransfer, c = i.options;
    if (nn("dragStart", this, {
      evt: r
    }), Te.eventCanceled) {
      this._onDrop();
      return;
    }
    nn("setupClone", this), Te.eventCanceled || (lt = S0(he), lt.removeAttribute("id"), lt.draggable = !1, lt.style["will-change"] = "", this._hideClone(), gn(lt, this.options.chosenClass, !1), Te.clone = lt), i.cloneId = hl(function() {
      nn("clone", i), !Te.eventCanceled && (i.options.removeCloneOnHide || it.insertBefore(lt, he), i._hideClone(), Yt({
        sortable: i,
        name: "clone"
      }));
    }), !s && gn(he, c.dragClass, !0), s ? (Sl = !0, i._loopId = setInterval(i._emulateDragOver, 50)) : (Ue(document, "mouseup", i._onDrop), Ue(document, "touchend", i._onDrop), Ue(document, "touchcancel", i._onDrop), u && (u.effectAllowed = "move", c.setData && c.setData.call(i, u, he)), He(document, "drop", i), xe(he, "transform", "translateZ(0)")), Ri = !0, i._dragStartId = hl(i._dragStarted.bind(i, s, r)), He(document, "selectstart", i), Fs = !0, window.getSelection().removeAllRanges(), to && xe(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var s = this.el, i = r.target, u, c, f, m = this.options, p = m.group, _ = Te.active, g = Tu === p, E = m.sort, v = Pt || _, S, h = this, C = !1;
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
        target: i,
        completed: N,
        onMove: function(Y, ce) {
          return Mu(it, s, he, u, Y, wt(Y), r, ce);
        },
        changed: P
      }, ae));
    }
    function O() {
      x("dragOverAnimationCapture"), h.captureAnimationState(), h !== v && v.captureAnimationState();
    }
    function N(K) {
      return x("dragOverCompleted", {
        insertion: K
      }), K && (g ? _._hideClone() : _._showClone(h), h !== v && (gn(he, Pt ? Pt.options.ghostClass : _.options.ghostClass, !1), gn(he, m.ghostClass, !0)), Pt !== h && h !== Te.active ? Pt = h : h === Te.active && Pt && (Pt = null), v === h && (h._ignoreWhileAnimating = i), h.animateAll(function() {
        x("dragOverAnimationComplete"), h._ignoreWhileAnimating = null;
      }), h !== v && (v.animateAll(), v._ignoreWhileAnimating = null)), (i === he && !he.animated || i === s && !i.animated) && (Ti = null), !m.dragoverBubble && !r.rootEl && i !== document && (he.parentNode[an]._isOutsideThisEl(r.target), !K && xa(r)), !m.dragoverBubble && r.stopPropagation && r.stopPropagation(), C = !0;
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
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), i = Hn(i, m.draggable, s, !0), x("dragOver"), Te.eventCanceled) return C;
    if (he.contains(r.target) || i.animated && i.animatingX && i.animatingY || h._ignoreWhileAnimating === i)
      return N(!1);
    if (Sl = !1, _ && !m.disabled && (g ? E || (f = pt !== it) : Pt === this || (this.lastPutMode = Tu.checkPull(this, _, he, r)) && p.checkPut(this, _, he, r))) {
      if (S = this._getDirection(r, i) === "vertical", u = wt(he), x("dragOverValid"), Te.eventCanceled) return C;
      if (f)
        return pt = it, O(), this._hideClone(), x("revert"), Te.eventCanceled || (Oa ? it.insertBefore(he, Oa) : it.appendChild(he)), N(!0);
      var l = eh(s, m.draggable);
      if (!l || Z3(r, S, this) && !l.animated) {
        if (l === he)
          return N(!1);
        if (l && s === r.target && (i = l), i && (c = wt(i)), Mu(it, s, he, u, i, c, r, !!i) !== !1)
          return O(), l && l.nextSibling ? s.insertBefore(he, l.nextSibling) : s.appendChild(he), pt = s, P(), N(!0);
      } else if (l && q3(r, S, this)) {
        var y = Bi(s, 0, m, !0);
        if (y === he)
          return N(!1);
        if (i = y, c = wt(i), Mu(it, s, he, u, i, c, r, !1) !== !1)
          return O(), s.insertBefore(he, y), pt = s, P(), N(!0);
      } else if (i.parentNode === s) {
        c = wt(i);
        var w = 0, k, M = he.parentNode !== s, z = !L3(he.animated && he.toRect || u, i.animated && i.toRect || c, S), R = S ? "top" : "left", L = Ov(i, "top", "top") || Ov(he, "top", "top"), Z = L ? L.scrollTop : void 0;
        Ti !== i && (k = c[R], io = !1, Nu = !z && m.invertSwap || M), w = G3(r, i, c, S, z ? 1 : m.swapThreshold, m.invertedSwapThreshold == null ? m.swapThreshold : m.invertedSwapThreshold, Nu, Ti === i);
        var F;
        if (w !== 0) {
          var $ = Mn(he);
          do
            $ -= w, F = pt.children[$];
          while (F && (xe(F, "display") === "none" || F === Me));
        }
        if (w === 0 || F === i)
          return N(!1);
        Ti = i, ao = w;
        var W = i.nextElementSibling, j = !1;
        j = w === 1;
        var B = Mu(it, s, he, u, i, c, r, j);
        if (B !== !1)
          return (B === 1 || B === -1) && (j = B === 1), Of = !0, setTimeout(H3, 30), O(), j && !W ? s.appendChild(he) : i.parentNode.insertBefore(he, j ? W : i), L && b0(L, 0, Z - L.scrollTop), pt = he.parentNode, k !== void 0 && !Nu && (fl = Math.abs(k - wt(i)[R])), P(), N(!0);
      }
      if (s.contains(he))
        return N(!1);
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
    var s = this.el, i = this.options;
    if (vn = Mn(he), Jr = Mn(he, i.draggable), nn("drop", this, {
      evt: r
    }), pt = he && he.parentNode, vn = Mn(he), Jr = Mn(he, i.draggable), Te.eventCanceled) {
      this._nulling();
      return;
    }
    Ri = !1, Nu = !1, io = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Mf(this.cloneId), Mf(this._dragStartId), this.nativeDraggable && (Ue(document, "drop", this), Ue(s, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), to && xe(document.body, "user-select", ""), xe(he, "transform", ""), r && (Fs && (r.cancelable && r.preventDefault(), !i.dropBubble && r.stopPropagation()), Me && Me.parentNode && Me.parentNode.removeChild(Me), (it === pt || Pt && Pt.lastPutMode !== "clone") && lt && lt.parentNode && lt.parentNode.removeChild(lt), he && (this.nativeDraggable && Ue(he, "dragend", this), uf(he), he.style["will-change"] = "", Fs && !Ri && gn(he, Pt ? Pt.options.ghostClass : this.options.ghostClass, !1), gn(he, this.options.chosenClass, !1), Yt({
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
    })), Pt && Pt.save()) : vn !== Di && vn >= 0 && (Yt({
      sortable: this,
      name: "update",
      toEl: pt,
      originalEvent: r
    }), Yt({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: r
    })), Te.active && ((vn == null || vn === -1) && (vn = Di, Jr = ro), Yt({
      sortable: this,
      name: "end",
      toEl: pt,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    nn("nulling", this), it = he = pt = Me = Oa = lt = dl = Wr = Aa = In = Fs = vn = Jr = Di = ro = Ti = ao = Pt = Tu = Te.dragged = Te.ghost = Te.clone = Te.active = null, El.forEach(function(r) {
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
        he && (this._onDragOver(r), U3(r));
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
    for (var r = [], s, i = this.el.children, u = 0, c = i.length, f = this.options; u < c; u++)
      s = i[u], Hn(s, f.draggable, this.el, !1) && r.push(s.getAttribute(f.dataIdAttr) || $3(s));
    return r;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(r, s) {
    var i = {}, u = this.el;
    this.toArray().forEach(function(c, f) {
      var m = u.children[f];
      Hn(m, this.options.draggable, u, !1) && (i[c] = m);
    }, this), s && this.captureAnimationState(), r.forEach(function(c) {
      i[c] && (u.removeChild(i[c]), u.appendChild(i[c]));
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
    var i = this.options;
    if (s === void 0)
      return i[r];
    var u = lo.modifyOption(this, r, s);
    typeof u < "u" ? i[r] = u : i[r] = s, r === "group" && k0(i);
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
function U3(n) {
  n.dataTransfer && (n.dataTransfer.dropEffect = "move"), n.cancelable && n.preventDefault();
}
function Mu(n, r, s, i, u, c, f, m) {
  var p, _ = n[an], g = _.options.onMove, E;
  return window.CustomEvent && !kr && !uo ? p = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (p = document.createEvent("Event"), p.initEvent("move", !0, !0)), p.to = r, p.from = n, p.dragged = s, p.draggedRect = i, p.related = u || r, p.relatedRect = c || wt(r), p.willInsertAfter = m, p.originalEvent = f, n.dispatchEvent(p), g && (E = g.call(_, p, f)), E;
}
function uf(n) {
  n.draggable = !1;
}
function H3() {
  Of = !1;
}
function q3(n, r, s) {
  var i = wt(Bi(s.el, 0, s.options, !0)), u = w0(s.el, s.options, Me), c = 10;
  return r ? n.clientX < u.left - c || n.clientY < i.top && n.clientX < i.right : n.clientY < u.top - c || n.clientY < i.bottom && n.clientX < i.left;
}
function Z3(n, r, s) {
  var i = wt(eh(s.el, s.options.draggable)), u = w0(s.el, s.options, Me), c = 10;
  return r ? n.clientX > u.right + c || n.clientY > i.bottom && n.clientX > i.left : n.clientY > u.bottom + c || n.clientX > i.right && n.clientY > i.top;
}
function G3(n, r, s, i, u, c, f, m) {
  var p = i ? n.clientY : n.clientX, _ = i ? s.height : s.width, g = i ? s.top : s.left, E = i ? s.bottom : s.right, v = !1;
  if (!f) {
    if (m && fl < _ * u) {
      if (!io && (ao === 1 ? p > g + _ * c / 2 : p < E - _ * c / 2) && (io = !0), io)
        v = !0;
      else if (ao === 1 ? p < g + fl : p > E - fl)
        return -ao;
    } else if (p > g + _ * (1 - u) / 2 && p < E - _ * (1 - u) / 2)
      return V3(r);
  }
  return v = v || f, v && (p < g + _ * c / 2 || p > E - _ * c / 2) ? p > g + _ / 2 ? 1 : -1 : 0;
}
function V3(n) {
  return Mn(he) < Mn(n) ? 1 : -1;
}
function $3(n) {
  for (var r = n.tagName + n.className + n.src + n.href + n.textContent, s = r.length, i = 0; s--; )
    i += r.charCodeAt(s);
  return i.toString(36);
}
function Y3(n) {
  El.length = 0;
  for (var r = n.getElementsByTagName("input"), s = r.length; s--; ) {
    var i = r[s];
    i.checked && El.push(i);
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
  find: y0,
  is: function(r, s) {
    return !!Hn(r, s, r, !1);
  },
  extend: N3,
  throttle: _0,
  closest: Hn,
  toggleClass: gn,
  clone: S0,
  index: Mn,
  nextTick: hl,
  cancelNextTick: Mf,
  detectDirection: C0,
  getChild: Bi,
  expando: an
};
Te.get = function(n) {
  return n[an];
};
Te.mount = function() {
  for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
    r[s] = arguments[s];
  r[0].constructor === Array && (r = r[0]), r.forEach(function(i) {
    if (!i.prototype || !i.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));
    i.utils && (Te.utils = nr(nr({}, Te.utils), i.utils)), lo.mount(i);
  });
};
Te.create = function(n, r) {
  return new Te(n, r);
};
Te.version = x3;
var St = [], Qs, jf, Rf = !1, lf, cf, Cl, Ks;
function X3() {
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
      var i = s.originalEvent;
      this.sortable.nativeDraggable ? He(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? He(document, "pointermove", this._handleFallbackAutoScroll) : i.touches ? He(document, "touchmove", this._handleFallbackAutoScroll) : He(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(s) {
      var i = s.originalEvent;
      !this.options.dragOverBubble && !i.rootEl && this._handleAutoScroll(i);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Ue(document, "dragover", this._handleAutoScroll) : (Ue(document, "pointermove", this._handleFallbackAutoScroll), Ue(document, "touchmove", this._handleFallbackAutoScroll), Ue(document, "mousemove", this._handleFallbackAutoScroll)), zv(), pl(), O3();
    },
    nulling: function() {
      Cl = jf = Qs = Rf = Ks = lf = cf = null, St.length = 0;
    },
    _handleFallbackAutoScroll: function(s) {
      this._handleAutoScroll(s, !0);
    },
    _handleAutoScroll: function(s, i) {
      var u = this, c = (s.touches ? s.touches[0] : s).clientX, f = (s.touches ? s.touches[0] : s).clientY, m = document.elementFromPoint(c, f);
      if (Cl = s, i || this.options.forceAutoScrollFallback || uo || kr || to) {
        df(s, this.options, m, i);
        var p = ea(m, !0);
        Rf && (!Ks || c !== lf || f !== cf) && (Ks && zv(), Ks = setInterval(function() {
          var _ = ea(document.elementFromPoint(c, f), !0);
          _ !== p && (p = _, pl()), df(s, u.options, _, i);
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
function zv() {
  clearInterval(Ks);
}
var df = _0(function(n, r, s, i) {
  if (r.scroll) {
    var u = (n.touches ? n.touches[0] : n).clientX, c = (n.touches ? n.touches[0] : n).clientY, f = r.scrollSensitivity, m = r.scrollSpeed, p = er(), _ = !1, g;
    jf !== s && (jf = s, pl(), Qs = r.scroll, g = r.scrollFn, Qs === !0 && (Qs = ea(s, !0)));
    var E = 0, v = Qs;
    do {
      var S = v, h = wt(S), C = h.top, x = h.bottom, O = h.left, N = h.right, P = h.width, l = h.height, y = void 0, w = void 0, k = S.scrollWidth, M = S.scrollHeight, z = xe(S), R = S.scrollLeft, L = S.scrollTop;
      S === p ? (y = P < k && (z.overflowX === "auto" || z.overflowX === "scroll" || z.overflowX === "visible"), w = l < M && (z.overflowY === "auto" || z.overflowY === "scroll" || z.overflowY === "visible")) : (y = P < k && (z.overflowX === "auto" || z.overflowX === "scroll"), w = l < M && (z.overflowY === "auto" || z.overflowY === "scroll"));
      var Z = y && (Math.abs(N - u) <= f && R + P < k) - (Math.abs(O - u) <= f && !!R), F = w && (Math.abs(x - c) <= f && L + l < M) - (Math.abs(C - c) <= f && !!L);
      if (!St[E])
        for (var $ = 0; $ <= E; $++)
          St[$] || (St[$] = {});
      (St[E].vx != Z || St[E].vy != F || St[E].el !== S) && (St[E].el = S, St[E].vx = Z, St[E].vy = F, clearInterval(St[E].pid), (Z != 0 || F != 0) && (_ = !0, St[E].pid = setInterval((function() {
        i && this.layer === 0 && Te.active._onTouchMove(Cl);
        var W = St[this.layer].vy ? St[this.layer].vy * m : 0, j = St[this.layer].vx ? St[this.layer].vx * m : 0;
        typeof g == "function" && g.call(Te.dragged.parentNode[an], j, W, n, Cl, St[this.layer].el) !== "continue" || b0(St[this.layer].el, j, W);
      }).bind({
        layer: E
      }), 24))), E++;
    } while (r.bubbleScroll && v !== p && (v = ea(v, !1)));
    Rf = _;
  }
}, 30), T0 = function(r) {
  var s = r.originalEvent, i = r.putSortable, u = r.dragEl, c = r.activeSortable, f = r.dispatchSortableEvent, m = r.hideGhostForTarget, p = r.unhideGhostForTarget;
  if (s) {
    var _ = i || c;
    m();
    var g = s.changedTouches && s.changedTouches.length ? s.changedTouches[0] : s, E = document.elementFromPoint(g.clientX, g.clientY);
    p(), _ && !_.el.contains(E) && (f("spill"), this.onSpill({
      dragEl: u,
      putSortable: i
    }));
  }
};
function th() {
}
th.prototype = {
  startIndex: null,
  dragStart: function(r) {
    var s = r.oldDraggableIndex;
    this.startIndex = s;
  },
  onSpill: function(r) {
    var s = r.dragEl, i = r.putSortable;
    this.sortable.captureAnimationState(), i && i.captureAnimationState();
    var u = Bi(this.sortable.el, this.startIndex, this.options);
    u ? this.sortable.el.insertBefore(s, u) : this.sortable.el.appendChild(s), this.sortable.animateAll(), i && i.animateAll();
  },
  drop: T0
};
Cr(th, {
  pluginName: "revertOnSpill"
});
function nh() {
}
nh.prototype = {
  onSpill: function(r) {
    var s = r.dragEl, i = r.putSortable, u = i || this.sortable;
    u.captureAnimationState(), s.parentNode && s.parentNode.removeChild(s), u.animateAll();
  },
  drop: T0
};
Cr(nh, {
  pluginName: "removeOnSpill"
});
Te.mount(new X3());
Te.mount(nh, th);
async function ml(n, r, s) {
  var i, u, c;
  function f(g) {
    return n.includes("all") || n.includes(g);
  }
  const m = SillyTavern.getContext();
  let p = {};
  const _ = Z1;
  if (f("global") && _ != null && _.length)
    for (const g of _) {
      const E = await F3(g);
      E && (p[g] || (p[g] = []), Object.values(E).forEach((v) => {
        p[g].push(v);
      }));
    }
  if (f("chat")) {
    const g = m.chatMetadata[G1];
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
    const v = (u = (i = g?.data) == null ? void 0 : i.extensions) == null ? void 0 : u.world;
    v && E.add(v);
    const S = h0(s), h = (c = V1.charLore) == null ? void 0 : c.find((C) => C.name === S);
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
async function F3(n) {
  const r = await SillyTavern.getContext().loadWorldInfo(n);
  return r ? Object.values(r.entries) : null;
}
const Q3 = `=== SILLYTAVERN===

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

Lorebooks are essential for long-term storytelling with AI.`, K3 = `{{#is_not_empty currentLorebooks}}
## CURRENT LOREBOOKS
{{#each currentLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, J3 = `{{#is_not_empty blackListedEntries}}
## BLACKLISTED ENTRIES
{{#each blackListedEntries}}
- {{this}}
{{/each}}
{{/is_not_empty}}`, W3 = `{{#is_not_empty suggestedLorebooks}}
## SUGGESTED LOREBOOKS
{{#each suggestedLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, e8 = `## RESPONSE FORMAT (CRITICAL)

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

You may include multiple \`<entry>\` blocks inside a single \`<lorebooks>\` element. Begin your response with \`<lorebooks>\` immediately.`, t8 = `## Rules
- Don't suggest already existing or suggested entries.
{{#if userInstructions}}

## Your Task
{{userInstructions}}{{/if}}`, n8 = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", r8 = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid XML structure that strictly adheres to the provided example.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire XML object in a markdown code block (```xml\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The XML object inside the code block MUST be valid.\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```xml\n{{example_response}}\n```", a8 = `You are an expert lorebook writer assisting a user. Your task is to respond with the modified lorebook data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isEntrySession}}the entry "{{targetEntryName}}".{{else}}the entire set of lorebook entries provided in the context.{{/if}}

The initial lorebook state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, i8 = `{{#is_not_empty changedLorebooks}}
## LOREBOOK UPDATES (Added/Modified)
{{#each changedLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, s8 = `{{#is_not_empty removedEntries}}
## LOREBOOK UPDATES (Removed)
The following entries were removed and will no longer be part of the context:
{{#each removedEntries}}
- **{{this.comment}}** (from {{this.worldName}})
{{/each}}
{{/is_not_empty}}`, o8 = `The following changes were applied to the lorebooks based on the last turn. Unlisted entries are unchanged.
{{{addedModifiedContent}}}
{{{removedContent}}}`, N0 = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", u8 = N0 + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", l8 = "[" + N0 + "][" + u8 + "]*", c8 = new RegExp("^" + l8 + "$");
function O0(n, r) {
  const s = [];
  let i = r.exec(n);
  for (; i; ) {
    const u = [];
    u.startIndex = r.lastIndex - i[0].length;
    const c = i.length;
    for (let f = 0; f < c; f++)
      u.push(i[f]);
    s.push(u), i = r.exec(n);
  }
  return s;
}
const rh = function(n) {
  const r = c8.exec(n);
  return !(r === null || typeof r > "u");
};
function d8(n) {
  return typeof n < "u";
}
const f8 = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function M0(n, r) {
  r = Object.assign({}, f8, r);
  const s = [];
  let i = !1, u = !1;
  n[0] === "\uFEFF" && (n = n.substr(1));
  for (let c = 0; c < n.length; c++)
    if (n[c] === "<" && n[c + 1] === "?") {
      if (c += 2, c = Lv(n, c), c.err) return c;
    } else if (n[c] === "<") {
      let f = c;
      if (c++, n[c] === "!") {
        c = Iv(n, c);
        continue;
      } else {
        let m = !1;
        n[c] === "/" && (m = !0, c++);
        let p = "";
        for (; c < n.length && n[c] !== ">" && n[c] !== " " && n[c] !== "	" && n[c] !== `
` && n[c] !== "\r"; c++)
          p += n[c];
        if (p = p.trim(), p[p.length - 1] === "/" && (p = p.substring(0, p.length - 1), c--), !b8(p)) {
          let E;
          return p.trim().length === 0 ? E = "Invalid space after '<'." : E = "Tag '" + p + "' is an invalid name.", yt("InvalidTag", E, Xt(n, c));
        }
        const _ = m8(n, c);
        if (_ === !1)
          return yt("InvalidAttr", "Attributes for '" + p + "' have open quote.", Xt(n, c));
        let g = _.value;
        if (c = _.index, g[g.length - 1] === "/") {
          const E = c - g.length;
          g = g.substring(0, g.length - 1);
          const v = Bv(g, r);
          if (v === !0)
            i = !0;
          else
            return yt(v.err.code, v.err.msg, Xt(n, E + v.err.line));
        } else if (m)
          if (_.tagClosed) {
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
          const E = Bv(g, r);
          if (E !== !0)
            return yt(E.err.code, E.err.msg, Xt(n, c - g.length + E.err.line));
          if (u === !0)
            return yt("InvalidXml", "Multiple possible root nodes found.", Xt(n, c));
          r.unpairedTags.indexOf(p) !== -1 || s.push({ tagName: p, tagStartPos: f }), i = !0;
        }
        for (c++; c < n.length; c++)
          if (n[c] === "<")
            if (n[c + 1] === "!") {
              c++, c = Iv(n, c);
              continue;
            } else if (n[c + 1] === "?") {
              if (c = Lv(n, ++c), c.err) return c;
            } else
              break;
          else if (n[c] === "&") {
            const E = y8(n, c);
            if (E == -1)
              return yt("InvalidChar", "char '&' is not expected.", Xt(n, c));
            c = E;
          } else if (u === !0 && !Pv(n[c]))
            return yt("InvalidXml", "Extra text at the end", Xt(n, c));
        n[c] === "<" && c--;
      }
    } else {
      if (Pv(n[c]))
        continue;
      return yt("InvalidChar", "char '" + n[c] + "' is not expected.", Xt(n, c));
    }
  if (i) {
    if (s.length == 1)
      return yt("InvalidTag", "Unclosed tag '" + s[0].tagName + "'.", Xt(n, s[0].tagStartPos));
    if (s.length > 0)
      return yt("InvalidXml", "Invalid '" + JSON.stringify(s.map((c) => c.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return yt("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function Pv(n) {
  return n === " " || n === "	" || n === `
` || n === "\r";
}
function Lv(n, r) {
  const s = r;
  for (; r < n.length; r++)
    if (n[r] == "?" || n[r] == " ") {
      const i = n.substr(s, r - s);
      if (r > 5 && i === "xml")
        return yt("InvalidXml", "XML declaration allowed only at the start of the document.", Xt(n, r));
      if (n[r] == "?" && n[r + 1] == ">") {
        r++;
        break;
      } else
        continue;
    }
  return r;
}
function Iv(n, r) {
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
const h8 = '"', p8 = "'";
function m8(n, r) {
  let s = "", i = "", u = !1;
  for (; r < n.length; r++) {
    if (n[r] === h8 || n[r] === p8)
      i === "" ? i = n[r] : i !== n[r] || (i = "");
    else if (n[r] === ">" && i === "") {
      u = !0;
      break;
    }
    s += n[r];
  }
  return i !== "" ? !1 : {
    value: s,
    index: r,
    tagClosed: u
  };
}
const g8 = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function Bv(n, r) {
  const s = O0(n, g8), i = {};
  for (let u = 0; u < s.length; u++) {
    if (s[u][1].length === 0)
      return yt("InvalidAttr", "Attribute '" + s[u][2] + "' has no space in starting.", Hs(s[u]));
    if (s[u][3] !== void 0 && s[u][4] === void 0)
      return yt("InvalidAttr", "Attribute '" + s[u][2] + "' is without value.", Hs(s[u]));
    if (s[u][3] === void 0 && !r.allowBooleanAttributes)
      return yt("InvalidAttr", "boolean attribute '" + s[u][2] + "' is not allowed.", Hs(s[u]));
    const c = s[u][2];
    if (!_8(c))
      return yt("InvalidAttr", "Attribute '" + c + "' is an invalid name.", Hs(s[u]));
    if (!i.hasOwnProperty(c))
      i[c] = 1;
    else
      return yt("InvalidAttr", "Attribute '" + c + "' is repeated.", Hs(s[u]));
  }
  return !0;
}
function v8(n, r) {
  let s = /\d/;
  for (n[r] === "x" && (r++, s = /[\da-fA-F]/); r < n.length; r++) {
    if (n[r] === ";")
      return r;
    if (!n[r].match(s))
      break;
  }
  return -1;
}
function y8(n, r) {
  if (r++, n[r] === ";")
    return -1;
  if (n[r] === "#")
    return r++, v8(n, r);
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
function _8(n) {
  return rh(n);
}
function b8(n) {
  return rh(n);
}
function Xt(n, r) {
  const s = n.substring(0, r).split(/\r?\n/);
  return {
    line: s.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: s[s.length - 1].length + 1
  };
}
function Hs(n) {
  return n.startIndex + n[1].length;
}
const S8 = {
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
}, w8 = function(n) {
  return Object.assign({}, S8, n);
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
function E8(n, r) {
  const s = {};
  if (n[r + 3] === "O" && n[r + 4] === "C" && n[r + 5] === "T" && n[r + 6] === "Y" && n[r + 7] === "P" && n[r + 8] === "E") {
    r = r + 9;
    let i = 1, u = !1, c = !1, f = "";
    for (; r < n.length; r++)
      if (n[r] === "<" && !c) {
        if (u && A8(n, r)) {
          r += 7;
          let m, p;
          [m, p, r] = C8(n, r + 1), p.indexOf("&") === -1 && (s[O8(m)] = {
            regx: RegExp(`&${m};`, "g"),
            val: p
          });
        } else if (u && x8(n, r)) r += 8;
        else if (u && T8(n, r)) r += 8;
        else if (u && N8(n, r)) r += 9;
        else if (k8) c = !0;
        else throw new Error("Invalid DOCTYPE");
        i++, f = "";
      } else if (n[r] === ">") {
        if (c ? n[r - 1] === "-" && n[r - 2] === "-" && (c = !1, i--) : i--, i === 0)
          break;
      } else n[r] === "[" ? u = !0 : f += n[r];
    if (i !== 0)
      throw new Error("Unclosed DOCTYPE");
  } else
    throw new Error("Invalid Tag instead of DOCTYPE");
  return { entities: s, i: r };
}
function C8(n, r) {
  let s = "";
  for (; r < n.length && n[r] !== "'" && n[r] !== '"'; r++)
    s += n[r];
  if (s = s.trim(), s.indexOf(" ") !== -1) throw new Error("External entites are not supported");
  const i = n[r++];
  let u = "";
  for (; r < n.length && n[r] !== i; r++)
    u += n[r];
  return [s, u, r];
}
function k8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "-" && n[r + 3] === "-";
}
function A8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "E" && n[r + 3] === "N" && n[r + 4] === "T" && n[r + 5] === "I" && n[r + 6] === "T" && n[r + 7] === "Y";
}
function x8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "E" && n[r + 3] === "L" && n[r + 4] === "E" && n[r + 5] === "M" && n[r + 6] === "E" && n[r + 7] === "N" && n[r + 8] === "T";
}
function T8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "A" && n[r + 3] === "T" && n[r + 4] === "T" && n[r + 5] === "L" && n[r + 6] === "I" && n[r + 7] === "S" && n[r + 8] === "T";
}
function N8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "N" && n[r + 3] === "O" && n[r + 4] === "T" && n[r + 5] === "A" && n[r + 6] === "T" && n[r + 7] === "I" && n[r + 8] === "O" && n[r + 9] === "N";
}
function O8(n) {
  if (rh(n))
    return n;
  throw new Error(`Invalid entity name ${n}`);
}
const M8 = /^[-+]?0x[a-fA-F0-9]+$/, j8 = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, R8 = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function D8(n, r = {}) {
  if (r = Object.assign({}, R8, r), !n || typeof n != "string") return n;
  let s = n.trim();
  if (r.skipLike !== void 0 && r.skipLike.test(s)) return n;
  if (n === "0") return 0;
  if (r.hex && M8.test(s))
    return P8(s, 16);
  if (s.search(/[eE]/) !== -1) {
    const i = s.match(/^([-\+])?(0*)([0-9]*(\.[0-9]*)?[eE][-\+]?[0-9]+)$/);
    if (i) {
      if (r.leadingZeros)
        s = (i[1] || "") + i[3];
      else if (!(i[2] === "0" && i[3][0] === ".")) return n;
      return r.eNotation ? Number(s) : n;
    } else
      return n;
  } else {
    const i = j8.exec(s);
    if (i) {
      const u = i[1], c = i[2];
      let f = z8(i[3]);
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
function z8(n) {
  return n && n.indexOf(".") !== -1 && (n = n.replace(/0+$/, ""), n === "." ? n = "0" : n[0] === "." ? n = "0" + n : n[n.length - 1] === "." && (n = n.substr(0, n.length - 1))), n;
}
function P8(n, r) {
  if (parseInt) return parseInt(n, r);
  if (Number.parseInt) return Number.parseInt(n, r);
  if (window && window.parseInt) return window.parseInt(n, r);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function L8(n) {
  return typeof n == "function" ? n : Array.isArray(n) ? (r) => {
    for (const s of n)
      if (typeof s == "string" && r === s || s instanceof RegExp && s.test(r))
        return !0;
  } : () => !1;
}
class I8 {
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
      num_dec: { regex: /&#([0-9]{1,7});/g, val: (s, i) => String.fromCodePoint(Number.parseInt(i, 10)) },
      num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (s, i) => String.fromCodePoint(Number.parseInt(i, 16)) }
    }, this.addExternalEntities = B8, this.parseXml = G8, this.parseTextData = U8, this.resolveNameSpace = H8, this.buildAttributesMap = Z8, this.isItStopNode = X8, this.replaceEntitiesValue = $8, this.readStopNodeData = Q8, this.saveTextToParentTag = Y8, this.addChild = V8, this.ignoreAttributesFn = L8(this.options.ignoreAttributes);
  }
}
function B8(n) {
  const r = Object.keys(n);
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    this.lastEntities[i] = {
      regex: new RegExp("&" + i + ";", "g"),
      val: n[i]
    };
  }
}
function U8(n, r, s, i, u, c, f) {
  if (n !== void 0 && (this.options.trimValues && !i && (n = n.trim()), n.length > 0)) {
    f || (n = this.replaceEntitiesValue(n));
    const m = this.options.tagValueProcessor(r, n, s, u, c);
    return m == null ? n : typeof m != typeof n || m !== n ? m : this.options.trimValues ? zf(n, this.options.parseTagValue, this.options.numberParseOptions) : n.trim() === n ? zf(n, this.options.parseTagValue, this.options.numberParseOptions) : n;
  }
}
function H8(n) {
  if (this.options.removeNSPrefix) {
    const r = n.split(":"), s = n.charAt(0) === "/" ? "/" : "";
    if (r[0] === "xmlns")
      return "";
    r.length === 2 && (n = s + r[1]);
  }
  return n;
}
const q8 = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function Z8(n, r, s) {
  if (this.options.ignoreAttributes !== !0 && typeof n == "string") {
    const i = O0(n, q8), u = i.length, c = {};
    for (let f = 0; f < u; f++) {
      const m = this.resolveNameSpace(i[f][1]);
      if (this.ignoreAttributesFn(m, r))
        continue;
      let p = i[f][4], _ = this.options.attributeNamePrefix + m;
      if (m.length)
        if (this.options.transformAttributeName && (_ = this.options.transformAttributeName(_)), _ === "__proto__" && (_ = "#__proto__"), p !== void 0) {
          this.options.trimValues && (p = p.trim()), p = this.replaceEntitiesValue(p);
          const g = this.options.attributeValueProcessor(m, p, r);
          g == null ? c[_] = p : typeof g != typeof p || g !== p ? c[_] = g : c[_] = zf(
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
const G8 = function(n) {
  n = n.replace(/\r\n?/g, `
`);
  const r = new qs("!xml");
  let s = r, i = "", u = "";
  for (let c = 0; c < n.length; c++)
    if (n[c] === "<")
      if (n[c + 1] === "/") {
        const m = Ra(n, ">", c, "Closing Tag is not closed.");
        let p = n.substring(c + 2, m).trim();
        if (this.options.removeNSPrefix) {
          const E = p.indexOf(":");
          E !== -1 && (p = p.substr(E + 1));
        }
        this.options.transformTagName && (p = this.options.transformTagName(p)), s && (i = this.saveTextToParentTag(i, s, u));
        const _ = u.substring(u.lastIndexOf(".") + 1);
        if (p && this.options.unpairedTags.indexOf(p) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${p}>`);
        let g = 0;
        _ && this.options.unpairedTags.indexOf(_) !== -1 ? (g = u.lastIndexOf(".", u.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : g = u.lastIndexOf("."), u = u.substring(0, g), s = this.tagsNodeStack.pop(), i = "", c = m;
      } else if (n[c + 1] === "?") {
        let m = Df(n, c, !1, "?>");
        if (!m) throw new Error("Pi Tag is not closed.");
        if (i = this.saveTextToParentTag(i, s, u), !(this.options.ignoreDeclaration && m.tagName === "?xml" || this.options.ignorePiTags)) {
          const p = new qs(m.tagName);
          p.add(this.options.textNodeName, ""), m.tagName !== m.tagExp && m.attrExpPresent && (p[":@"] = this.buildAttributesMap(m.tagExp, u, m.tagName)), this.addChild(s, p, u);
        }
        c = m.closeIndex + 1;
      } else if (n.substr(c + 1, 3) === "!--") {
        const m = Ra(n, "-->", c + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const p = n.substring(c + 4, m - 2);
          i = this.saveTextToParentTag(i, s, u), s.add(this.options.commentPropName, [{ [this.options.textNodeName]: p }]);
        }
        c = m;
      } else if (n.substr(c + 1, 2) === "!D") {
        const m = E8(n, c);
        this.docTypeEntities = m.entities, c = m.i;
      } else if (n.substr(c + 1, 2) === "![") {
        const m = Ra(n, "]]>", c, "CDATA is not closed.") - 2, p = n.substring(c + 9, m);
        i = this.saveTextToParentTag(i, s, u);
        let _ = this.parseTextData(p, s.tagname, u, !0, !1, !0, !0);
        _ == null && (_ = ""), this.options.cdataPropName ? s.add(this.options.cdataPropName, [{ [this.options.textNodeName]: p }]) : s.add(this.options.textNodeName, _), c = m + 2;
      } else {
        let m = Df(n, c, this.options.removeNSPrefix), p = m.tagName;
        const _ = m.rawTagName;
        let g = m.tagExp, E = m.attrExpPresent, v = m.closeIndex;
        this.options.transformTagName && (p = this.options.transformTagName(p)), s && i && s.tagname !== "!xml" && (i = this.saveTextToParentTag(i, s, u, !1));
        const S = s;
        if (S && this.options.unpairedTags.indexOf(S.tagname) !== -1 && (s = this.tagsNodeStack.pop(), u = u.substring(0, u.lastIndexOf("."))), p !== r.tagname && (u += u ? "." + p : p), this.isItStopNode(this.options.stopNodes, u, p)) {
          let h = "";
          if (g.length > 0 && g.lastIndexOf("/") === g.length - 1)
            p[p.length - 1] === "/" ? (p = p.substr(0, p.length - 1), u = u.substr(0, u.length - 1), g = p) : g = g.substr(0, g.length - 1), c = m.closeIndex;
          else if (this.options.unpairedTags.indexOf(p) !== -1)
            c = m.closeIndex;
          else {
            const x = this.readStopNodeData(n, _, v + 1);
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
          i = "", c = v;
        }
      }
    else
      i += n[c];
  return r.child;
};
function V8(n, r, s) {
  const i = this.options.updateTag(r.tagname, s, r[":@"]);
  i === !1 || (typeof i == "string" && (r.tagname = i), n.addChild(r));
}
const $8 = function(n) {
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
function Y8(n, r, s, i) {
  return n && (i === void 0 && (i = r.child.length === 0), n = this.parseTextData(
    n,
    r.tagname,
    s,
    !1,
    r[":@"] ? Object.keys(r[":@"]).length !== 0 : !1,
    i
  ), n !== void 0 && n !== "" && r.add(this.options.textNodeName, n), n = ""), n;
}
function X8(n, r, s) {
  const i = "*." + s;
  for (const u in n) {
    const c = n[u];
    if (i === c || r === c) return !0;
  }
  return !1;
}
function F8(n, r, s = ">") {
  let i, u = "";
  for (let c = r; c < n.length; c++) {
    let f = n[c];
    if (i)
      f === i && (i = "");
    else if (f === '"' || f === "'")
      i = f;
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
function Ra(n, r, s, i) {
  const u = n.indexOf(r, s);
  if (u === -1)
    throw new Error(i);
  return u + r.length - 1;
}
function Df(n, r, s, i = ">") {
  const u = F8(n, r + 1, i);
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
function Q8(n, r, s) {
  const i = s;
  let u = 1;
  for (; s < n.length; s++)
    if (n[s] === "<")
      if (n[s + 1] === "/") {
        const c = Ra(n, ">", s, `${r} is not closed`);
        if (n.substring(s + 2, c).trim() === r && (u--, u === 0))
          return {
            tagContent: n.substring(i, s),
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
    const i = n.trim();
    return i === "true" ? !0 : i === "false" ? !1 : D8(n, s);
  } else
    return d8(n) ? n : "";
}
function K8(n, r) {
  return j0(n, r);
}
function j0(n, r, s) {
  let i;
  const u = {};
  for (let c = 0; c < n.length; c++) {
    const f = n[c], m = J8(f);
    let p = "";
    if (s === void 0 ? p = m : p = s + "." + m, m === r.textNodeName)
      i === void 0 ? i = f[m] : i += "" + f[m];
    else {
      if (m === void 0)
        continue;
      if (f[m]) {
        let _ = j0(f[m], r, p);
        const g = eS(_, r);
        f[":@"] ? W8(_, f[":@"], p, r) : Object.keys(_).length === 1 && _[r.textNodeName] !== void 0 && !r.alwaysCreateTextNode ? _ = _[r.textNodeName] : Object.keys(_).length === 0 && (r.alwaysCreateTextNode ? _[r.textNodeName] = "" : _ = ""), u[m] !== void 0 && u.hasOwnProperty(m) ? (Array.isArray(u[m]) || (u[m] = [u[m]]), u[m].push(_)) : r.isArray(m, p, g) ? u[m] = [_] : u[m] = _;
      }
    }
  }
  return typeof i == "string" ? i.length > 0 && (u[r.textNodeName] = i) : i !== void 0 && (u[r.textNodeName] = i), u;
}
function J8(n) {
  const r = Object.keys(n);
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (i !== ":@") return i;
  }
}
function W8(n, r, s, i) {
  if (r) {
    const u = Object.keys(r), c = u.length;
    for (let f = 0; f < c; f++) {
      const m = u[f];
      i.isArray(m, s + "." + m, !0, !0) ? n[m] = [r[m]] : n[m] = r[m];
    }
  }
}
function eS(n, r) {
  const { textNodeName: s } = r, i = Object.keys(n).length;
  return !!(i === 0 || i === 1 && (n[s] || typeof n[s] == "boolean" || n[s] === 0));
}
class R0 {
  constructor(r) {
    this.externalEntities = {}, this.options = w8(r);
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
      const c = M0(r, s);
      if (c !== !0)
        throw Error(`${c.err.msg}:${c.err.line}:${c.err.col}`);
    }
    const i = new I8(this.options);
    i.addExternalEntities(this.externalEntities);
    const u = i.parseXml(r);
    return this.options.preserveOrder || u === void 0 ? u : K8(u, this.options);
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
const tS = {
  validate: M0
}, nS = new R0();
function rS(n) {
  const r = Math.pow(10, n - 1), s = Math.pow(10, n) - 1;
  return Math.floor(Math.random() * (s - r + 1)) + r;
}
function aS(n, r = {}) {
  let s = n;
  const { previousContent: i } = r;
  s = s.replace(/```xml/g, "").replace(/```/g, ""), s = s.replace(/<think(?:ing)?[^>]*>[\s\S]*?<\/think(?:ing)?>/gi, ""), s = s.replace(/<reasoning[^>]*>[\s\S]*?<\/reasoning>/gi, ""), i && (s = i + s.trimEnd());
  const u = s.match(/<lorebooks>[\s\S]*<\/lorebooks>/i) ?? s.match(/<lorebook>[\s\S]*<\/lorebook>/i);
  if (u && (s = u[0]), s.includes("<entry>") && !s.includes("</entry>"))
    throw new Error("Incomplete XML: Missing </entry> tag");
  if (s.includes("<content>") && !s.includes("</content>"))
    throw new Error("Incomplete XML: Missing </content> tag");
  const c = {};
  try {
    const f = nS.parse(s), m = f.lorebooks ?? f.lorebook;
    if (!m || !m.entry)
      return c;
    const p = Array.isArray(m.entry) ? m.entry : [m.entry];
    for (const _ of p) {
      const g = _.worldName;
      g && (c[g] || (c[g] = []), c[g].push({
        uid: _.id ?? rS(6),
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
function iS(n, r) {
  return `
<lorebooks>
  <entry>
    <worldName>${n}</worldName>
    <id>${r.uid}</id>
    <name>${r.comment}</name>
    <triggers>${r.key.join(",")}</triggers>
    <content>${r.content}`;
}
function sS(n, r) {
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
var ju = { exports: {} }, Ru = { exports: {} }, Bn = {}, rn = {}, Uv;
function on() {
  if (Uv) return rn;
  Uv = 1, rn.__esModule = !0, rn.extend = u, rn.indexOf = p, rn.escapeExpression = _, rn.isEmpty = g, rn.createFrame = E, rn.blockParams = v, rn.appendContextPath = S;
  var n = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
    "=": "&#x3D;"
  }, r = /[&<>"'`=]/g, s = /[&<>"'`=]/;
  function i(h) {
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
    return s.test(h) ? h.replace(r, i) : h;
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
var Du = { exports: {} }, Hv;
function Gn() {
  return Hv || (Hv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function i(u, c) {
      var f = c && c.loc, m = void 0, p = void 0, _ = void 0, g = void 0;
      f && (m = f.start.line, p = f.end.line, _ = f.start.column, g = f.end.column, u += " - " + m + ":" + _);
      for (var E = Error.prototype.constructor.call(this, u), v = 0; v < s.length; v++)
        this[s[v]] = E[s[v]];
      Error.captureStackTrace && Error.captureStackTrace(this, i);
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
    i.prototype = new Error(), r.default = i, n.exports = r.default;
  })(Du, Du.exports)), Du.exports;
}
var Zs = {}, zu = { exports: {} }, qv;
function oS() {
  return qv || (qv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = on();
    r.default = function(i) {
      i.registerHelper("blockHelperMissing", function(u, c) {
        var f = c.inverse, m = c.fn;
        if (u === !0)
          return m(this);
        if (u === !1 || u == null)
          return f(this);
        if (s.isArray(u))
          return u.length > 0 ? (c.ids && (c.ids = [c.name]), i.helpers.each(u, c)) : f(this);
        if (c.data && c.ids) {
          var p = s.createFrame(c.data);
          p.contextPath = s.appendContextPath(c.data.contextPath, c.name), c = { data: p };
        }
        return m(u, c);
      });
    }, n.exports = r.default;
  })(zu, zu.exports)), zu.exports;
}
var Pu = { exports: {} }, Zv;
function uS() {
  return Zv || (Zv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var i = on(), u = Gn(), c = s(u);
    r.default = function(f) {
      f.registerHelper("each", function(m, p) {
        if (!p)
          throw new c.default("Must pass iterator to #each");
        var _ = p.fn, g = p.inverse, E = 0, v = "", S = void 0, h = void 0;
        p.data && p.ids && (h = i.appendContextPath(p.data.contextPath, p.ids[0]) + "."), i.isFunction(m) && (m = m.call(this)), p.data && (S = i.createFrame(p.data));
        function C(l, y, w) {
          S && (S.key = l, S.index = y, S.first = y === 0, S.last = !!w, h && (S.contextPath = h + l)), v = v + _(m[l], {
            data: S,
            blockParams: i.blockParams([m[l], l], [h + l, null])
          });
        }
        if (m && typeof m == "object")
          if (i.isArray(m))
            for (var x = m.length; E < x; E++)
              E in m && C(E, E, E === m.length - 1);
          else if (typeof Symbol == "function" && m[Symbol.iterator]) {
            for (var O = [], N = m[Symbol.iterator](), P = N.next(); !P.done; P = N.next())
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
    }, n.exports = r.default;
  })(Pu, Pu.exports)), Pu.exports;
}
var Lu = { exports: {} }, Gv;
function lS() {
  return Gv || (Gv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(c) {
      return c && c.__esModule ? c : { default: c };
    }
    var i = Gn(), u = s(i);
    r.default = function(c) {
      c.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new u.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, n.exports = r.default;
  })(Lu, Lu.exports)), Lu.exports;
}
var Iu = { exports: {} }, Vv;
function cS() {
  return Vv || (Vv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var i = on(), u = Gn(), c = s(u);
    r.default = function(f) {
      f.registerHelper("if", function(m, p) {
        if (arguments.length != 2)
          throw new c.default("#if requires exactly one argument");
        return i.isFunction(m) && (m = m.call(this)), !p.hash.includeZero && !m || i.isEmpty(m) ? p.inverse(this) : p.fn(this);
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
  })(Iu, Iu.exports)), Iu.exports;
}
var Bu = { exports: {} }, $v;
function dS() {
  return $v || ($v = 1, (function(n, r) {
    r.__esModule = !0, r.default = function(s) {
      s.registerHelper("log", function() {
        for (var i = [void 0], u = arguments[arguments.length - 1], c = 0; c < arguments.length - 1; c++)
          i.push(arguments[c]);
        var f = 1;
        u.hash.level != null ? f = u.hash.level : u.data && u.data.level != null && (f = u.data.level), i[0] = f, s.log.apply(s, i);
      });
    }, n.exports = r.default;
  })(Bu, Bu.exports)), Bu.exports;
}
var Uu = { exports: {} }, Yv;
function fS() {
  return Yv || (Yv = 1, (function(n, r) {
    r.__esModule = !0, r.default = function(s) {
      s.registerHelper("lookup", function(i, u, c) {
        return i && c.lookupProperty(i, u);
      });
    }, n.exports = r.default;
  })(Uu, Uu.exports)), Uu.exports;
}
var Hu = { exports: {} }, Xv;
function hS() {
  return Xv || (Xv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var i = on(), u = Gn(), c = s(u);
    r.default = function(f) {
      f.registerHelper("with", function(m, p) {
        if (arguments.length != 2)
          throw new c.default("#with requires exactly one argument");
        i.isFunction(m) && (m = m.call(this));
        var _ = p.fn;
        if (i.isEmpty(m))
          return p.inverse(this);
        var g = p.data;
        return p.data && p.ids && (g = i.createFrame(p.data), g.contextPath = i.appendContextPath(p.data.contextPath, p.ids[0])), _(m, {
          data: g,
          blockParams: i.blockParams([m], [g && g.contextPath])
        });
      });
    }, n.exports = r.default;
  })(Hu, Hu.exports)), Hu.exports;
}
var Fv;
function D0() {
  if (Fv) return Zs;
  Fv = 1, Zs.__esModule = !0, Zs.registerDefaultHelpers = C, Zs.moveHelperToHooks = x;
  function n(O) {
    return O && O.__esModule ? O : { default: O };
  }
  var r = oS(), s = n(r), i = uS(), u = n(i), c = lS(), f = n(c), m = cS(), p = n(m), _ = dS(), g = n(_), E = fS(), v = n(E), S = hS(), h = n(S);
  function C(O) {
    s.default(O), u.default(O), f.default(O), p.default(O), g.default(O), v.default(O), h.default(O);
  }
  function x(O, N, P) {
    O.helpers[N] && (O.hooks[N] = O.helpers[N], P || delete O.helpers[N]);
  }
  return Zs;
}
var qu = {}, Zu = { exports: {} }, Qv;
function pS() {
  return Qv || (Qv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = on();
    r.default = function(i) {
      i.registerDecorator("inline", function(u, c, f, m) {
        var p = u;
        return c.partials || (c.partials = {}, p = function(_, g) {
          var E = f.partials;
          f.partials = s.extend({}, E, c.partials);
          var v = u(_, g);
          return f.partials = E, v;
        }), c.partials[m.args[0]] = m.fn, p;
      });
    }, n.exports = r.default;
  })(Zu, Zu.exports)), Zu.exports;
}
var Kv;
function mS() {
  if (Kv) return qu;
  Kv = 1, qu.__esModule = !0, qu.registerDefaultDecorators = i;
  function n(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var r = pS(), s = n(r);
  function i(u) {
    s.default(u);
  }
  return qu;
}
var Gu = { exports: {} }, Jv;
function z0() {
  return Jv || (Jv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = on(), i = {
      methodMap: ["debug", "info", "warn", "error"],
      level: "info",
      // Maps a given level value to the `methodMap` indexes above.
      lookupLevel: function(c) {
        if (typeof c == "string") {
          var f = s.indexOf(i.methodMap, c.toLowerCase());
          f >= 0 ? c = f : c = parseInt(c, 10);
        }
        return c;
      },
      // Can be overridden in the host environment
      log: function(c) {
        if (c = i.lookupLevel(c), typeof console < "u" && i.lookupLevel(i.level) <= c) {
          var f = i.methodMap[c];
          console[f] || (f = "log");
          for (var m = arguments.length, p = Array(m > 1 ? m - 1 : 0), _ = 1; _ < m; _++)
            p[_ - 1] = arguments[_];
          console[f].apply(console, p);
        }
      }
    };
    r.default = i, n.exports = r.default;
  })(Gu, Gu.exports)), Gu.exports;
}
var Ni = {}, Vu = {}, Wv;
function gS() {
  if (Wv) return Vu;
  Wv = 1, Vu.__esModule = !0, Vu.createNewLookupObject = r;
  var n = on();
  function r() {
    for (var s = arguments.length, i = Array(s), u = 0; u < s; u++)
      i[u] = arguments[u];
    return n.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(i));
  }
  return Vu;
}
var ey;
function P0() {
  if (ey) return Ni;
  ey = 1, Ni.__esModule = !0, Ni.createProtoAccessControl = c, Ni.resultIsAllowed = f, Ni.resetLoggedProperties = _;
  function n(g) {
    return g && g.__esModule ? g : { default: g };
  }
  var r = gS(), s = z0(), i = n(s), u = /* @__PURE__ */ Object.create(null);
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
    u[g] !== !0 && (u[g] = !0, i.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + g + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function _() {
    Object.keys(u).forEach(function(g) {
      delete u[g];
    });
  }
  return Ni;
}
var ty;
function ah() {
  if (ty) return Bn;
  ty = 1, Bn.__esModule = !0, Bn.HandlebarsEnvironment = h;
  function n(x) {
    return x && x.__esModule ? x : { default: x };
  }
  var r = on(), s = Gn(), i = n(s), u = D0(), c = mS(), f = z0(), m = n(f), p = P0(), _ = "4.7.8";
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
  function h(x, O, N) {
    this.helpers = x || {}, this.partials = O || {}, this.decorators = N || {}, u.registerDefaultHelpers(this), c.registerDefaultDecorators(this);
  }
  h.prototype = {
    constructor: h,
    logger: m.default,
    log: m.default.log,
    registerHelper: function(O, N) {
      if (r.toString.call(O) === S) {
        if (N)
          throw new i.default("Arg not supported with multiple helpers");
        r.extend(this.helpers, O);
      } else
        this.helpers[O] = N;
    },
    unregisterHelper: function(O) {
      delete this.helpers[O];
    },
    registerPartial: function(O, N) {
      if (r.toString.call(O) === S)
        r.extend(this.partials, O);
      else {
        if (typeof N > "u")
          throw new i.default('Attempting to register a partial called "' + O + '" as undefined');
        this.partials[O] = N;
      }
    },
    unregisterPartial: function(O) {
      delete this.partials[O];
    },
    registerDecorator: function(O, N) {
      if (r.toString.call(O) === S) {
        if (N)
          throw new i.default("Arg not supported with multiple decorators");
        r.extend(this.decorators, O);
      } else
        this.decorators[O] = N;
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
var $u = { exports: {} }, ny;
function vS() {
  return ny || (ny = 1, (function(n, r) {
    r.__esModule = !0;
    function s(i) {
      this.string = i;
    }
    s.prototype.toString = s.prototype.toHTML = function() {
      return "" + this.string;
    }, r.default = s, n.exports = r.default;
  })($u, $u.exports)), $u.exports;
}
var br = {}, Yu = {}, ry;
function yS() {
  if (ry) return Yu;
  ry = 1, Yu.__esModule = !0, Yu.wrapHelper = n;
  function n(r, s) {
    if (typeof r != "function")
      return r;
    var i = function() {
      var c = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = s(c), r.apply(this, arguments);
    };
    return i;
  }
  return Yu;
}
var ay;
function _S() {
  if (ay) return br;
  ay = 1, br.__esModule = !0, br.checkRevision = g, br.template = E, br.wrapProgram = v, br.resolvePartial = S, br.invokePartial = h, br.noop = C;
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
  var s = on(), i = r(s), u = Gn(), c = n(u), f = ah(), m = D0(), p = yS(), _ = P0();
  function g(l) {
    var y = l && l[0] || 1, w = f.COMPILER_REVISION;
    if (!(y >= f.LAST_COMPATIBLE_COMPILER_REVISION && y <= f.COMPILER_REVISION))
      if (y < f.LAST_COMPATIBLE_COMPILER_REVISION) {
        var k = f.REVISION_CHANGES[w], M = f.REVISION_CHANGES[y];
        throw new c.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + k + ") or downgrade your runtime to an older version (" + M + ").");
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
    function k(R, L, Z) {
      Z.hash && (L = i.extend({}, L, Z.hash), Z.ids && (Z.ids[0] = !0)), R = y.VM.resolvePartial.call(this, R, L, Z);
      var F = i.extend({}, Z, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), $ = y.VM.invokePartial.call(this, R, L, F);
      if ($ == null && y.compile && (Z.partials[Z.name] = y.compile(R, l.compilerOptions, y), $ = Z.partials[Z.name](L, F)), $ != null) {
        if (Z.indent) {
          for (var W = $.split(`
`), j = 0, B = W.length; j < B && !(!W[j] && j + 1 === B); j++)
            W[j] = Z.indent + W[j];
          $ = W.join(`
`);
        }
        return $;
      } else
        throw new c.default("The partial " + Z.name + " could not be compiled when running in runtime-only mode");
    }
    var M = {
      strict: function(L, Z, F) {
        if (!L || !(Z in L))
          throw new c.default('"' + Z + '" not defined in ' + L, {
            loc: F
          });
        return M.lookupProperty(L, Z);
      },
      lookupProperty: function(L, Z) {
        var F = L[Z];
        if (F == null || Object.prototype.hasOwnProperty.call(L, Z) || _.resultIsAllowed(F, M.protoAccessControl, Z))
          return F;
      },
      lookup: function(L, Z) {
        for (var F = L.length, $ = 0; $ < F; $++) {
          var W = L[$] && M.lookupProperty(L[$], Z);
          if (W != null)
            return L[$][Z];
        }
      },
      lambda: function(L, Z) {
        return typeof L == "function" ? L.call(Z) : L;
      },
      escapeExpression: i.escapeExpression,
      invokePartial: k,
      fn: function(L) {
        var Z = l[L];
        return Z.decorator = l[L + "_d"], Z;
      },
      programs: [],
      program: function(L, Z, F, $, W) {
        var j = this.programs[L], B = this.fn(L);
        return Z || W || $ || F ? j = v(this, L, B, Z, F, $, W) : j || (j = this.programs[L] = v(this, L, B)), j;
      },
      data: function(L, Z) {
        for (; L && Z--; )
          L = L._parent;
        return L;
      },
      mergeIfNeeded: function(L, Z) {
        var F = L || Z;
        return L && Z && L !== Z && (F = i.extend({}, Z, L)), F;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: y.VM.noop,
      compilerInfo: l.compiler
    };
    function z(R) {
      var L = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], Z = L.data;
      z._setup(L), !L.partial && l.useData && (Z = x(R, Z));
      var F = void 0, $ = l.useBlockParams ? [] : void 0;
      l.useDepths && (L.depths ? F = R != L.depths[0] ? [R].concat(L.depths) : L.depths : F = [R]);
      function W(j) {
        return "" + l.main(M, j, M.helpers, M.partials, Z, $, F);
      }
      return W = O(l.main, W, M, L.depths || [], Z, $), W(R, L);
    }
    return z.isTop = !0, z._setup = function(R) {
      if (R.partial)
        M.protoAccessControl = R.protoAccessControl, M.helpers = R.helpers, M.partials = R.partials, M.decorators = R.decorators, M.hooks = R.hooks;
      else {
        var L = i.extend({}, y.helpers, R.helpers);
        N(L, M), M.helpers = L, l.usePartial && (M.partials = M.mergeIfNeeded(R.partials, y.partials)), (l.usePartial || l.useDecorators) && (M.decorators = i.extend({}, y.decorators, R.decorators)), M.hooks = {}, M.protoAccessControl = _.createProtoAccessControl(R);
        var Z = R.allowCallsToHelperMissing || w;
        m.moveHelperToHooks(M, "helperMissing", Z), m.moveHelperToHooks(M, "blockHelperMissing", Z);
      }
    }, z._child = function(R, L, Z, F) {
      if (l.useBlockParams && !Z)
        throw new c.default("must pass block params");
      if (l.useDepths && !F)
        throw new c.default("must pass parent depths");
      return v(M, R, l[R], L, 0, Z, F);
    }, z;
  }
  function v(l, y, w, k, M, z, R) {
    function L(Z) {
      var F = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], $ = R;
      return R && Z != R[0] && !(Z === l.nullContext && R[0] === null) && ($ = [Z].concat(R)), w(l, Z, l.helpers, l.partials, F.data || k, z && [F.blockParams].concat(z), $);
    }
    return L = O(w, L, l, R, k, z), L.program = y, L.depth = R ? R.length : 0, L.blockParams = M || 0, L;
  }
  function S(l, y, w) {
    return l ? !l.call && !w.name && (w.name = l, l = w.partials[l]) : w.name === "@partial-block" ? l = w.data["partial-block"] : l = w.partials[w.name], l;
  }
  function h(l, y, w) {
    var k = w.data && w.data["partial-block"];
    w.partial = !0, w.ids && (w.data.contextPath = w.ids[0] || w.data.contextPath);
    var M = void 0;
    if (w.fn && w.fn !== C && (function() {
      w.data = f.createFrame(w.data);
      var z = w.fn;
      M = w.data["partial-block"] = function(L) {
        var Z = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return Z.data = f.createFrame(Z.data), Z.data["partial-block"] = k, z(L, Z);
      }, z.partials && (w.partials = i.extend({}, w.partials, z.partials));
    })(), l === void 0 && M && (l = M), l === void 0)
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
  function O(l, y, w, k, M, z) {
    if (l.decorator) {
      var R = {};
      y = l.decorator(y, R, w, k && k[0], M, z, k), i.extend(y, R);
    }
    return y;
  }
  function N(l, y) {
    Object.keys(l).forEach(function(w) {
      var k = l[w];
      l[w] = P(k, y);
    });
  }
  function P(l, y) {
    var w = y.lookupProperty;
    return p.wrapHelper(l, function(k) {
      return i.extend({ lookupProperty: w }, k);
    });
  }
  return br;
}
var Xu = { exports: {} }, iy;
function L0() {
  return iy || (iy = 1, (function(n, r) {
    r.__esModule = !0, r.default = function(s) {
      (function() {
        typeof globalThis != "object" && (Object.prototype.__defineGetter__("__magic__", function() {
          return this;
        }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__);
      })();
      var i = globalThis.Handlebars;
      s.noConflict = function() {
        return globalThis.Handlebars === s && (globalThis.Handlebars = i), s;
      };
    }, n.exports = r.default;
  })(Xu, Xu.exports)), Xu.exports;
}
var sy;
function bS() {
  return sy || (sy = 1, (function(n, r) {
    r.__esModule = !0;
    function s(N) {
      return N && N.__esModule ? N : { default: N };
    }
    function i(N) {
      if (N && N.__esModule)
        return N;
      var P = {};
      if (N != null)
        for (var l in N)
          Object.prototype.hasOwnProperty.call(N, l) && (P[l] = N[l]);
      return P.default = N, P;
    }
    var u = ah(), c = i(u), f = vS(), m = s(f), p = Gn(), _ = s(p), g = on(), E = i(g), v = _S(), S = i(v), h = L0(), C = s(h);
    function x() {
      var N = new c.HandlebarsEnvironment();
      return E.extend(N, c), N.SafeString = m.default, N.Exception = _.default, N.Utils = E, N.escapeExpression = E.escapeExpression, N.VM = S, N.template = function(P) {
        return S.template(P, N);
      }, N;
    }
    var O = x();
    O.create = x, C.default(O), O.default = O, r.default = O, n.exports = r.default;
  })(Ru, Ru.exports)), Ru.exports;
}
var Fu = { exports: {} }, oy;
function I0() {
  return oy || (oy = 1, (function(n, r) {
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
  })(Fu, Fu.exports)), Fu.exports;
}
var Oi = {}, Qu = { exports: {} }, uy;
function SS() {
  return uy || (uy = 1, (function(n, r) {
    r.__esModule = !0;
    var s = (function() {
      var i = {
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
          function N() {
            var F;
            return F = p.lexer.lex() || 1, typeof F != "number" && (F = p.symbols_[F] || F), F;
          }
          for (var P, l, y, w, k = {}, M, z, R, L; ; ) {
            if (l = _[_.length - 1], this.defaultActions[l] ? y = this.defaultActions[l] : ((P === null || typeof P > "u") && (P = N()), y = v[l] && v[l][P]), typeof y > "u" || !y.length || !y[0]) {
              var Z = "";
              {
                L = [];
                for (M in v[l]) this.terminals_[M] && M > 2 && L.push("'" + this.terminals_[M] + "'");
                this.lexer.showPosition ? Z = "Parse error on line " + (h + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + L.join(", ") + ", got '" + (this.terminals_[P] || P) + "'" : Z = "Parse error on line " + (h + 1) + ": Unexpected " + (P == 1 ? "end of input" : "'" + (this.terminals_[P] || P) + "'"), this.parseError(Z, { text: this.lexer.match, token: this.terminals_[P] || P, line: this.lexer.yylineno, loc: x, expected: L });
              }
            }
            if (y[0] instanceof Array && y.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + l + ", token: " + P);
            switch (y[0]) {
              case 1:
                _.push(P), g.push(this.lexer.yytext), E.push(this.lexer.yylloc), _.push(y[1]), P = null, C = this.lexer.yyleng, S = this.lexer.yytext, h = this.lexer.yylineno, x = this.lexer.yylloc;
                break;
              case 2:
                if (z = this.productions_[y[1]][1], k.$ = g[g.length - z], k._$ = { first_line: E[E.length - (z || 1)].first_line, last_line: E[E.length - 1].last_line, first_column: E[E.length - (z || 1)].first_column, last_column: E[E.length - 1].last_column }, O && (k._$.range = [E[E.length - (z || 1)].range[0], E[E.length - 1].range[1]]), w = this.performAction.call(k, S, C, h, this.yy, y[1], g, E), typeof w < "u")
                  return w;
                z && (_ = _.slice(0, -1 * z * 2), g = g.slice(0, -1 * z), E = E.slice(0, -1 * z)), _.push(this.productions_[y[1]][0]), g.push(k.$), E.push(k._$), R = v[_[_.length - 2]][_[_.length - 1]], _.push(R);
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
      i.lexer = u;
      function c() {
        this.yy = {};
      }
      return c.prototype = i, i.Parser = c, new c();
    })();
    r.default = s, n.exports = r.default;
  })(Qu, Qu.exports)), Qu.exports;
}
var Ku = { exports: {} }, Ju = { exports: {} }, ly;
function B0() {
  return ly || (ly = 1, (function(n, r) {
    r.__esModule = !0;
    function s(_) {
      return _ && _.__esModule ? _ : { default: _ };
    }
    var i = Gn(), u = s(i);
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
    r.default = c, n.exports = r.default;
  })(Ju, Ju.exports)), Ju.exports;
}
var cy;
function wS() {
  return cy || (cy = 1, (function(n, r) {
    r.__esModule = !0;
    function s(g) {
      return g && g.__esModule ? g : { default: g };
    }
    var i = B0(), u = s(i);
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
          var N = f(S, h, v), P = m(S, h, v), l = O.openStandalone && N, y = O.closeStandalone && P, w = O.inlineStandalone && N && P;
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
    r.default = c, n.exports = r.default;
  })(Ku, Ku.exports)), Ku.exports;
}
var mn = {}, dy;
function ES() {
  if (dy) return mn;
  dy = 1, mn.__esModule = !0, mn.SourceLocation = u, mn.id = c, mn.stripFlags = f, mn.stripComment = m, mn.preparePath = p, mn.prepareMustache = _, mn.prepareRawBlock = g, mn.prepareBlock = E, mn.prepareProgram = v, mn.preparePartialBlock = S;
  function n(h) {
    return h && h.__esModule ? h : { default: h };
  }
  var r = Gn(), s = n(r);
  function i(h, C) {
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
    for (var O = h ? "@" : "", N = [], P = 0, l = 0, y = C.length; l < y; l++) {
      var w = C[l].part, k = C[l].original !== w;
      if (O += (C[l].separator || "") + w, !k && (w === ".." || w === "." || w === "this")) {
        if (N.length > 0)
          throw new s.default("Invalid path: " + O, { loc: x });
        w === ".." && P++;
      } else
        N.push(w);
    }
    return {
      type: "PathExpression",
      data: h,
      depth: P,
      parts: N,
      original: O,
      loc: x
    };
  }
  function _(h, C, x, O, N, P) {
    var l = O.charAt(3) || O.charAt(2), y = l !== "{" && l !== "&", w = /\*/.test(O);
    return {
      type: w ? "Decorator" : "MustacheStatement",
      path: h,
      params: C,
      hash: x,
      escaped: y,
      strip: N,
      loc: this.locInfo(P)
    };
  }
  function g(h, C, x, O) {
    i(h, x), O = this.locInfo(O);
    var N = {
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
      program: N,
      openStrip: {},
      inverseStrip: {},
      closeStrip: {},
      loc: O
    };
  }
  function E(h, C, x, O, N, P) {
    O && O.path && i(h, O);
    var l = /\*/.test(h.open);
    C.blockParams = h.blockParams;
    var y = void 0, w = void 0;
    if (x) {
      if (l)
        throw new s.default("Unexpected inverse block on decorator", x);
      x.chain && (x.program.body[0].closeStrip = O.strip), w = x.strip, y = x.program;
    }
    return N && (N = y, y = C, C = N), {
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
    return i(h, x), {
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
var fy;
function CS() {
  if (fy) return Oi;
  fy = 1, Oi.__esModule = !0, Oi.parseWithoutProcessing = g, Oi.parse = E;
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
  var s = SS(), i = r(s), u = wS(), c = r(u), f = ES(), m = n(f), p = on();
  Oi.parser = i.default;
  var _ = {};
  p.extend(_, m);
  function g(v, S) {
    if (v.type === "Program")
      return v;
    i.default.yy = _, _.locInfo = function(C) {
      return new _.SourceLocation(S && S.srcName, C);
    };
    var h = i.default.parse(v);
    return h;
  }
  function E(v, S) {
    var h = g(v, S), C = new c.default(S);
    return C.accept(h);
  }
  return Oi;
}
var Mi = {}, hy;
function kS() {
  if (hy) return Mi;
  hy = 1, Mi.__esModule = !0, Mi.Compiler = m, Mi.precompile = p, Mi.compile = _;
  function n(v) {
    return v && v.__esModule ? v : { default: v };
  }
  var r = Gn(), s = n(r), i = on(), u = I0(), c = n(u), f = [].slice;
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
      return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = h, this.stringParams = h.stringParams, this.trackIds = h.trackIds, h.blockParams = h.blockParams || [], h.knownHelpers = i.extend(/* @__PURE__ */ Object.create(null), {
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
      var N = S.indent || "";
      this.options.preventIndent && N && (this.opcode("appendContent", N), N = ""), this.opcode("invokePartial", O, x, N), this.opcode("append");
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
      var x = S.path, O = x.parts[0], N = h != null || C != null;
      this.opcode("getContext", x.depth), this.opcode("pushProgram", h), this.opcode("pushProgram", C), x.strict = !0, this.accept(x), this.opcode("invokeAmbiguous", O, N);
    },
    simpleSexpr: function(S) {
      var h = S.path;
      h.strict = !0, this.accept(h), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(S, h, C) {
      var x = this.setupFullMustacheParams(S, h, C), O = S.path, N = O.parts[0];
      if (this.options.knownHelpers[N])
        this.opcode("invokeKnownHelper", x.length, N);
      else {
        if (this.options.knownHelpersOnly)
          throw new s.default("You specified knownHelpersOnly, but used the unknown helper " + N, S);
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
        var N = S.path.parts[0], P = this.options;
        P.knownHelpers[N] ? x = !0 : P.knownHelpersOnly && (O = !1);
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
        var x = this.options.blockParams[h], O = x && i.indexOf(x, S);
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
    S = i.extend({}, S), "data" in S || (S.data = !0), S.compat && (S.useDepths = !0);
    var C = void 0;
    function x() {
      var N = h.parse(v, S), P = new h.Compiler().compile(N, S), l = new h.JavaScriptCompiler().compile(P, S, void 0, !0);
      return h.template(l);
    }
    function O(N, P) {
      return C || (C = x()), C.call(this, N, P);
    }
    return O._setup = function(N) {
      return C || (C = x()), C._setup(N);
    }, O._child = function(N, P, l, y) {
      return C || (C = x()), C._child(N, P, l, y);
    }, O;
  }
  function g(v, S) {
    if (v === S)
      return !0;
    if (i.isArray(v) && i.isArray(S) && v.length === S.length) {
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
var Wu = { exports: {} }, el = { exports: {} }, Gs = {}, ff = {}, tl = {}, nl = {}, py;
function AS() {
  if (py) return nl;
  py = 1;
  var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return nl.encode = function(r) {
    if (0 <= r && r < n.length)
      return n[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, nl.decode = function(r) {
    var s = 65, i = 90, u = 97, c = 122, f = 48, m = 57, p = 43, _ = 47, g = 26, E = 52;
    return s <= r && r <= i ? r - s : u <= r && r <= c ? r - u + g : f <= r && r <= m ? r - f + E : r == p ? 62 : r == _ ? 63 : -1;
  }, nl;
}
var my;
function U0() {
  if (my) return tl;
  my = 1;
  var n = AS(), r = 5, s = 1 << r, i = s - 1, u = s;
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
      g = E & i, E >>>= r, E > 0 && (g |= u), _ += n.encode(g);
    while (E > 0);
    return _;
  }, tl.decode = function(p, _, g) {
    var E = p.length, v = 0, S = 0, h, C;
    do {
      if (_ >= E)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (C = n.decode(p.charCodeAt(_++)), C === -1)
        throw new Error("Invalid base64 digit: " + p.charAt(_ - 1));
      h = !!(C & u), C &= i, v = v + (C << S), S += r;
    } while (h);
    g.value = f(v), g.rest = _;
  }, tl;
}
var hf = {}, gy;
function co() {
  return gy || (gy = 1, (function(n) {
    function r(l, y, w) {
      if (y in l)
        return l[y];
      if (arguments.length === 3)
        return w;
      throw new Error('"' + y + '" is a required argument.');
    }
    n.getArg = r;
    var s = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, i = /^data:.+\,.+$/;
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
      for (var k = n.isAbsolute(y), M = y.split(/\/+/), z, R = 0, L = M.length - 1; L >= 0; L--)
        z = M[L], z === "." ? M.splice(L, 1) : z === ".." ? R++ : R > 0 && (z === "" ? (M.splice(L + 1, R), R = 0) : (M.splice(L, 2), R--));
      return y = M.join("/"), y === "" && (y = k ? "/" : "."), w ? (w.path = y, c(w)) : y;
    }
    n.normalize = f;
    function m(l, y) {
      l === "" && (l = "."), y === "" && (y = ".");
      var w = u(y), k = u(l);
      if (k && (l = k.path || "/"), w && !w.scheme)
        return k && (w.scheme = k.scheme), c(w);
      if (w || y.match(i))
        return y;
      if (k && !k.host && !k.path)
        return k.host = y, c(k);
      var M = y.charAt(0) === "/" ? y : f(l.replace(/\/+$/, "") + "/" + y);
      return k ? (k.path = M, c(k)) : M;
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
    n.toSetString = _ ? g : E;
    function v(l) {
      return S(l) ? l.slice(1) : l;
    }
    n.fromSetString = _ ? g : v;
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
    function O(l, y) {
      var w = l.generatedLine - y.generatedLine;
      return w !== 0 || (w = l.generatedColumn - y.generatedColumn, w !== 0) || (w = x(l.source, y.source), w !== 0) || (w = l.originalLine - y.originalLine, w !== 0) || (w = l.originalColumn - y.originalColumn, w !== 0) ? w : x(l.name, y.name);
    }
    n.compareByGeneratedPositionsInflated = O;
    function N(l) {
      return JSON.parse(l.replace(/^\)]}'[^\n]*\n/, ""));
    }
    n.parseSourceMapInput = N;
    function P(l, y, w) {
      if (y = y || "", l && (l[l.length - 1] !== "/" && y[0] !== "/" && (l += "/"), y = l + y), w) {
        var k = u(w);
        if (!k)
          throw new Error("sourceMapURL could not be parsed");
        if (k.path) {
          var M = k.path.lastIndexOf("/");
          M >= 0 && (k.path = k.path.substring(0, M + 1));
        }
        y = m(c(k), y);
      }
      return f(y);
    }
    n.computeSourceURL = P;
  })(hf)), hf;
}
var pf = {}, vy;
function H0() {
  if (vy) return pf;
  vy = 1;
  var n = co(), r = Object.prototype.hasOwnProperty, s = typeof Map < "u";
  function i() {
    this._array = [], this._set = s ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return i.fromArray = function(c, f) {
    for (var m = new i(), p = 0, _ = c.length; p < _; p++)
      m.add(c[p], f);
    return m;
  }, i.prototype.size = function() {
    return s ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, i.prototype.add = function(c, f) {
    var m = s ? c : n.toSetString(c), p = s ? this.has(c) : r.call(this._set, m), _ = this._array.length;
    (!p || f) && this._array.push(c), p || (s ? this._set.set(c, _) : this._set[m] = _);
  }, i.prototype.has = function(c) {
    if (s)
      return this._set.has(c);
    var f = n.toSetString(c);
    return r.call(this._set, f);
  }, i.prototype.indexOf = function(c) {
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
  }, i.prototype.at = function(c) {
    if (c >= 0 && c < this._array.length)
      return this._array[c];
    throw new Error("No element indexed by " + c);
  }, i.prototype.toArray = function() {
    return this._array.slice();
  }, pf.ArraySet = i, pf;
}
var mf = {}, yy;
function xS() {
  if (yy) return mf;
  yy = 1;
  var n = co();
  function r(i, u) {
    var c = i.generatedLine, f = u.generatedLine, m = i.generatedColumn, p = u.generatedColumn;
    return f > c || f == c && p >= m || n.compareByGeneratedPositionsInflated(i, u) <= 0;
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
var _y;
function q0() {
  if (_y) return ff;
  _y = 1;
  var n = U0(), r = co(), s = H0().ArraySet, i = xS().MappingList;
  function u(c) {
    c || (c = {}), this._file = r.getArg(c, "file", null), this._sourceRoot = r.getArg(c, "sourceRoot", null), this._skipValidation = r.getArg(c, "skipValidation", !1), this._sources = new s(), this._names = new s(), this._mappings = new i(), this._sourcesContents = null;
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
    for (var f = 0, m = 1, p = 0, _ = 0, g = 0, E = 0, v = "", S, h, C, x, O = this._mappings.toArray(), N = 0, P = O.length; N < P; N++) {
      if (h = O[N], S = "", h.generatedLine !== m)
        for (f = 0; h.generatedLine !== m; )
          S += ";", m++;
      else if (N > 0) {
        if (!r.compareByGeneratedPositionsInflated(h, O[N - 1]))
          continue;
        S += ",";
      }
      S += n.encode(h.generatedColumn - f), f = h.generatedColumn, h.source != null && (x = this._sources.indexOf(h.source), S += n.encode(x - E), E = x, S += n.encode(h.originalLine - 1 - _), _ = h.originalLine - 1, S += n.encode(h.originalColumn - p), p = h.originalColumn, h.name != null && (C = this._names.indexOf(h.name), S += n.encode(C - g), g = C)), v += S;
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
  }, ff.SourceMapGenerator = u, ff;
}
var Vs = {}, gf = {}, by;
function TS() {
  return by || (by = 1, (function(n) {
    n.GREATEST_LOWER_BOUND = 1, n.LEAST_UPPER_BOUND = 2;
    function r(s, i, u, c, f, m) {
      var p = Math.floor((i - s) / 2) + s, _ = f(u, c[p], !0);
      return _ === 0 ? p : _ > 0 ? i - p > 1 ? r(p, i, u, c, f, m) : m == n.LEAST_UPPER_BOUND ? i < c.length ? i : -1 : p : p - s > 1 ? r(s, p, u, c, f, m) : m == n.LEAST_UPPER_BOUND ? p : s < 0 ? -1 : s;
    }
    n.search = function(i, u, c, f) {
      if (u.length === 0)
        return -1;
      var m = r(
        -1,
        u.length,
        i,
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
var vf = {}, Sy;
function NS() {
  if (Sy) return vf;
  Sy = 1;
  function n(i, u, c) {
    var f = i[u];
    i[u] = i[c], i[c] = f;
  }
  function r(i, u) {
    return Math.round(i + Math.random() * (u - i));
  }
  function s(i, u, c, f) {
    if (c < f) {
      var m = r(c, f), p = c - 1;
      n(i, m, f);
      for (var _ = i[f], g = c; g < f; g++)
        u(i[g], _) <= 0 && (p += 1, n(i, p, g));
      n(i, p + 1, g);
      var E = p + 1;
      s(i, u, c, E - 1), s(i, u, E + 1, f);
    }
  }
  return vf.quickSort = function(i, u) {
    s(i, u, 0, i.length - 1);
  }, vf;
}
var wy;
function OS() {
  if (wy) return Vs;
  wy = 1;
  var n = co(), r = TS(), s = H0().ArraySet, i = U0(), u = NS().quickSort;
  function c(_, g) {
    var E = _;
    return typeof _ == "string" && (E = n.parseSourceMapInput(_)), E.sections != null ? new p(E, g) : new f(E, g);
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
      var N = O.source === null ? null : this._sources.at(O.source);
      return N = n.computeSourceURL(x, N, this._sourceMapURL), {
        source: N,
        generatedLine: O.generatedLine,
        generatedColumn: O.generatedColumn,
        originalLine: O.originalLine,
        originalColumn: O.originalColumn,
        name: O.name === null ? null : this._names.at(O.name)
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
        for (var O = C.originalColumn; C && C.originalLine === E && C.originalColumn == O; )
          S.push({
            line: n.getArg(C, "generatedLine", null),
            column: n.getArg(C, "generatedColumn", null),
            lastColumn: n.getArg(C, "lastGeneratedColumn", null)
          }), C = this._originalMappings[++h];
    }
    return S;
  }, Vs.SourceMapConsumer = c;
  function f(_, g) {
    var E = _;
    typeof _ == "string" && (E = n.parseSourceMapInput(_));
    var v = n.getArg(E, "version"), S = n.getArg(E, "sources"), h = n.getArg(E, "names", []), C = n.getArg(E, "sourceRoot", null), x = n.getArg(E, "sourcesContent", null), O = n.getArg(E, "mappings"), N = n.getArg(E, "file", null);
    if (v != this._version)
      throw new Error("Unsupported version: " + v);
    C && (C = n.normalize(C)), S = S.map(String).map(n.normalize).map(function(P) {
      return C && n.isAbsolute(C) && n.isAbsolute(P) ? n.relative(C, P) : P;
    }), this._names = s.fromArray(h.map(String), !0), this._sources = s.fromArray(S, !0), this._absoluteSources = this._sources.toArray().map(function(P) {
      return n.computeSourceURL(C, P, g);
    }), this.sourceRoot = C, this.sourcesContent = x, this._mappings = O, this._sourceMapURL = g, this.file = N;
  }
  f.prototype = Object.create(c.prototype), f.prototype.consumer = c, f.prototype._findSourceIndex = function(_) {
    var g = _;
    if (this.sourceRoot != null && (g = n.relative(this.sourceRoot, g)), this._sources.has(g))
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
      return n.computeSourceURL(v.sourceRoot, w, E);
    });
    for (var C = g._mappings.toArray().slice(), x = v.__generatedMappings = [], O = v.__originalMappings = [], N = 0, P = C.length; N < P; N++) {
      var l = C[N], y = new m();
      y.generatedLine = l.generatedLine, y.generatedColumn = l.generatedColumn, l.source && (y.source = h.indexOf(l.source), y.originalLine = l.originalLine, y.originalColumn = l.originalColumn, l.name && (y.name = S.indexOf(l.name)), O.push(y)), x.push(y);
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
    for (var v = 1, S = 0, h = 0, C = 0, x = 0, O = 0, N = g.length, P = 0, l = {}, y = {}, w = [], k = [], M, z, R, L, Z; P < N; )
      if (g.charAt(P) === ";")
        v++, P++, S = 0;
      else if (g.charAt(P) === ",")
        P++;
      else {
        for (M = new m(), M.generatedLine = v, L = P; L < N && !this._charIsMappingSeparator(g, L); L++)
          ;
        if (z = g.slice(P, L), R = l[z], R)
          P += z.length;
        else {
          for (R = []; P < L; )
            i.decode(g, P, y), Z = y.value, P = y.rest, R.push(Z);
          if (R.length === 2)
            throw new Error("Found a source, but no line and column");
          if (R.length === 3)
            throw new Error("Found a source and line, but no column");
          l[z] = R;
        }
        M.generatedColumn = S + R[0], S = M.generatedColumn, R.length > 1 && (M.source = x + R[1], x += R[1], M.originalLine = h + R[2], h = M.originalLine, M.originalLine += 1, M.originalColumn = C + R[3], C = M.originalColumn, R.length > 4 && (M.name = O + R[4], O += R[4])), k.push(M), typeof M.originalLine == "number" && w.push(M);
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
  }, Vs.BasicSourceMapConsumer = f;
  function p(_, g) {
    var E = _;
    typeof _ == "string" && (E = n.parseSourceMapInput(_));
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
      var x = n.getArg(C, "offset"), O = n.getArg(x, "line"), N = n.getArg(x, "column");
      if (O < h.line || O === h.line && N < h.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return h = x, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: O + 1,
          generatedColumn: N + 1
        },
        consumer: new c(n.getArg(C, "map"), g)
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
        var x = h[C], O = S.consumer._sources.at(x.source);
        O = n.computeSourceURL(S.consumer.sourceRoot, O, this._sourceMapURL), this._sources.add(O), O = this._sources.indexOf(O);
        var N = null;
        x.name && (N = S.consumer._names.at(x.name), this._names.add(N), N = this._names.indexOf(N));
        var P = {
          source: O,
          generatedLine: x.generatedLine + (S.generatedOffset.generatedLine - 1),
          generatedColumn: x.generatedColumn + (S.generatedOffset.generatedLine === x.generatedLine ? S.generatedOffset.generatedColumn - 1 : 0),
          originalLine: x.originalLine,
          originalColumn: x.originalColumn,
          name: N
        };
        this.__generatedMappings.push(P), typeof P.originalLine == "number" && this.__originalMappings.push(P);
      }
    u(this.__generatedMappings, n.compareByGeneratedPositionsDeflated), u(this.__originalMappings, n.compareByOriginalPositions);
  }, Vs.IndexedSourceMapConsumer = p, Vs;
}
var yf = {}, Ey;
function MS() {
  if (Ey) return yf;
  Ey = 1;
  var n = q0().SourceMapGenerator, r = co(), s = /(\r?\n)/, i = 10, u = "$$$isSourceNode$$$";
  function c(f, m, p, _, g) {
    this.children = [], this.sourceContents = {}, this.line = f ?? null, this.column = m ?? null, this.source = p ?? null, this.name = g ?? null, this[u] = !0, _ != null && this.add(_);
  }
  return c.fromStringWithSourceMap = function(m, p, _) {
    var g = new c(), E = m.split(s), v = 0, S = function() {
      var N = l(), P = l() || "";
      return N + P;
      function l() {
        return v < E.length ? E[v++] : void 0;
      }
    }, h = 1, C = 0, x = null;
    return p.eachMapping(function(N) {
      if (x !== null)
        if (h < N.generatedLine)
          O(x, S()), h++, C = 0;
        else {
          var P = E[v] || "", l = P.substr(0, N.generatedColumn - C);
          E[v] = P.substr(N.generatedColumn - C), C = N.generatedColumn, O(x, l), x = N;
          return;
        }
      for (; h < N.generatedLine; )
        g.add(S()), h++;
      if (C < N.generatedColumn) {
        var P = E[v] || "";
        g.add(P.substr(0, N.generatedColumn)), E[v] = P.substr(N.generatedColumn), C = N.generatedColumn;
      }
      x = N;
    }, this), v < E.length && (x && O(x, S()), g.add(E.splice(v).join(""))), p.sources.forEach(function(N) {
      var P = p.sourceContentFor(N);
      P != null && (_ != null && (N = r.join(_, N)), g.setSourceContent(N, P));
    }), g;
    function O(N, P) {
      if (N === null || N.source === void 0)
        g.add(P);
      else {
        var l = _ ? r.join(_, N.source) : N.source;
        g.add(new c(
          N.originalLine,
          N.originalColumn,
          l,
          P,
          N.name
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
    }, _ = new n(m), g = !1, E = null, v = null, S = null, h = null;
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
      for (var O = 0, N = C.length; O < N; O++)
        C.charCodeAt(O) === i ? (p.line++, p.column = 0, O + 1 === N ? (E = null, g = !1) : g && _.addMapping({
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
  }, yf.SourceNode = c, yf;
}
var Cy;
function jS() {
  return Cy || (Cy = 1, Gs.SourceMapGenerator = q0().SourceMapGenerator, Gs.SourceMapConsumer = OS().SourceMapConsumer, Gs.SourceNode = MS().SourceNode), Gs;
}
var ky;
function RS() {
  return ky || (ky = 1, (function(n, r) {
    r.__esModule = !0;
    var s = on(), i = void 0;
    try {
      var u = jS();
      i = u.SourceNode;
    } catch {
    }
    i || (i = function(m, p, _, g) {
      this.src = "", g && this.add(g);
    }, i.prototype = {
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
        return new i(p.start.line, p.start.column, this.srcFile);
      },
      wrap: function(p) {
        var _ = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return p instanceof i ? p : (p = c(p, this, _), new i(_.start.line, _.start.column, this.srcFile, p));
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
    }, r.default = f, n.exports = r.default;
  })(el, el.exports)), el.exports;
}
var Ay;
function DS() {
  return Ay || (Ay = 1, (function(n, r) {
    r.__esModule = !0;
    function s(v) {
      return v && v.__esModule ? v : { default: v };
    }
    var i = ah(), u = Gn(), c = s(u), f = on(), m = RS(), p = s(m);
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
        var S = i.COMPILER_REVISION, h = i.REVISION_CHANGES[S];
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
        var O = S.opcodes, N = void 0, P = void 0, l = void 0, y = void 0;
        for (l = 0, y = O.length; l < y; l++)
          N = O[l], this.source.currentLocation = N.loc, P = P || N.loc, this[N.opcode].apply(this, N.args);
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
        var M = this.context, z = M.programs, R = M.decorators;
        for (l = 0, y = z.length; l < y; l++)
          z[l] && (k[l] = z[l], R[l] && (k[l + "_d"] = R[l], k.useDecorators = !0));
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
        var N = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && N.push("blockParams"), this.useDepths && N.push("depths");
        var P = this.mergeSource(C);
        return S ? (N.push(P), Function.apply(this, N)) : this.source.wrap(["function(", N.join(","), `) {
  `, P, "}"]);
      },
      mergeSource: function(S) {
        var h = this.environment.isSimple, C = !this.forceBuffer, x = void 0, O = void 0, N = void 0, P = void 0;
        return this.source.each(function(l) {
          l.appendToBuffer ? (N ? l.prepend("  + ") : N = l, P = l) : (N && (O ? N.prepend("buffer += ") : x = !0, P.add(";"), N = P = void 0), O = !0, h || (C = !1));
        }), C ? N ? (N.prepend("return "), P.add(";")) : O || this.source.push('return "";') : (S += ", buffer = " + (x ? "" : this.initializeBuffer()), N ? (N.prepend("return buffer + "), P.add(";")) : this.source.push("return buffer;")), S && this.source.prepend("var " + S.substring(2) + (x ? "" : `;
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
        var N = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(E(this.options.strict && O, this, h, C, S));
          return;
        }
        for (var P = h.length; C < P; C++)
          this.replaceStack(function(l) {
            var y = N.nameLookup(l, h[C], S);
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
        var x = this.popStack(), O = this.setupHelper(S, h), N = [];
        C && N.push(O.name), N.push(x), this.options.strict || N.push(this.aliasable("container.hooks.helperMissing"));
        var P = ["(", this.itemsSeparatedBy(N, "||"), ")"], l = this.source.functionCall(P, "call", O.callParams);
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
        var x = this.setupHelper(0, S, h), O = this.lastHelper = this.nameLookup("helpers", S, "helper"), N = ["(", "(helper = ", O, " || ", C, ")"];
        this.options.strict || (N[0] = "(helper = ", N.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", N, x.paramsInit ? ["),(", x.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", x.callParams), " : helper))"]);
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
        var N = this.hash;
        C && (N.contexts[S] = C), x && (N.types[S] = x), O && (N.ids[S] = O), N.values[S] = h;
      },
      pushId: function(S, h, C) {
        S === "BlockParam" ? this.pushStackLiteral("blockParams[" + h[0] + "].path[" + h[1] + "]" + (C ? " + " + JSON.stringify("." + C) : "")) : S === "PathExpression" ? this.pushString(h) : S === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: g,
      compileChildren: function(S, h) {
        for (var C = S.children, x = void 0, O = void 0, N = 0, P = C.length; N < P; N++) {
          x = C[N], O = new this.compiler();
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
        var N = this.popStack(!0);
        if (N instanceof _)
          C = [N.value], h = ["(", C], O = !0;
        else {
          x = !0;
          var P = this.incrStack();
          h = ["((", this.push(P), " = ", N, ")"], C = this.topStack();
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
        var x = [], O = this.setupHelperArgs(h, S, x, C), N = this.nameLookup("helpers", h, "helper"), P = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: x,
          paramsInit: O,
          name: N,
          callParams: [P].concat(x)
        };
      },
      setupParams: function(S, h, C) {
        var x = {}, O = [], N = [], P = [], l = !C, y = void 0;
        l && (C = []), x.name = this.quotedString(S), x.hash = this.popStack(), this.trackIds && (x.hashIds = this.popStack()), this.stringParams && (x.hashTypes = this.popStack(), x.hashContexts = this.popStack());
        var w = this.popStack(), k = this.popStack();
        (k || w) && (x.fn = k || "container.noop", x.inverse = w || "container.noop");
        for (var M = h; M--; )
          y = this.popStack(), C[M] = y, this.trackIds && (P[M] = this.popStack()), this.stringParams && (N[M] = this.popStack(), O[M] = this.popStack());
        return l && (x.args = this.source.generateArray(C)), this.trackIds && (x.ids = this.source.generateArray(P)), this.stringParams && (x.types = this.source.generateArray(N), x.contexts = this.source.generateArray(O)), this.options.data && (x.data = "data"), this.useBlockParams && (x.blockParams = "blockParams"), x;
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
      var O = S.popStack(), N = h.length;
      for (v && N--; C < N; C++)
        O = S.nameLookup(O, h[C], x);
      return v ? [S.aliasable("container.strict"), "(", O, ", ", S.quotedString(h[C]), ", ", JSON.stringify(S.source.currentLocation), " )"] : O;
    }
    r.default = g, n.exports = r.default;
  })(Wu, Wu.exports)), Wu.exports;
}
var xy;
function zS() {
  return xy || (xy = 1, (function(n, r) {
    r.__esModule = !0;
    function s(N) {
      return N && N.__esModule ? N : { default: N };
    }
    var i = bS(), u = s(i), c = I0(), f = s(c), m = CS(), p = kS(), _ = DS(), g = s(_), E = B0(), v = s(E), S = L0(), h = s(S), C = u.default.create;
    function x() {
      var N = C();
      return N.compile = function(P, l) {
        return p.compile(P, l, N);
      }, N.precompile = function(P, l) {
        return p.precompile(P, l, N);
      }, N.AST = f.default, N.Compiler = p.Compiler, N.JavaScriptCompiler = g.default, N.Parser = m.parser, N.parse = m.parse, N.parseWithoutProcessing = m.parseWithoutProcessing, N;
    }
    var O = x();
    O.create = x, h.default(O), O.Visitor = v.default, O.default = O, r.default = O, n.exports = r.default;
  })(ju, ju.exports)), ju.exports;
}
var _n = zS();
const Re = SillyTavern.getContext();
new r0("dumb", {}).getSettings();
async function Z0({
  profileId: n,
  userPrompt: r,
  buildPromptOptions: s,
  session: i,
  entriesGroupByWorldName: u,
  promptSettings: c,
  mainContextList: f,
  maxResponseToken: m,
  continueFrom: p
}) {
  if (!n)
    throw new Error("No connection profile selected.");
  const g = SillyTavern.getContext().extensionSettings.connectionManager?.profiles?.find((N) => N.id === n);
  if (!g)
    throw new Error(`Connection profile with ID "${n}" not found.`);
  const E = g.api ? Re.CONNECT_API_MAP[g.api].selected : void 0;
  if (!E)
    throw new Error(`Could not determine API for profile "${g.name}".`);
  const v = {};
  v.user = "{{user}}", v.char = "{{char}}", v.persona = "{{persona}}", v.blackListedEntries = i.blackListedEntries;
  const S = r.trim();
  p && p.mode === "revise" ? v.userInstructions = "" : v.userInstructions = _n.compile(S, { noEscape: !0 })(v);
  {
    const N = {};
    Object.entries(u).filter(
      ([P, l]) => l.length > 0 && i.selectedWorldNames.includes(P) && l.some((y) => !y?.disable)
    ).forEach(([P, l]) => {
      let y = l.filter((k) => !k?.disable);
      const w = i.selectedEntryUids?.[P];
      if (w && w.length > 0) {
        const k = new Set(w);
        y = y.filter((M) => k.has(M.uid));
      }
      y.length > 0 && (N[P] = y);
    }), v.currentLorebooks = N;
  }
  {
    const N = {};
    Object.entries(i.suggestedEntries).filter(([P, l]) => l.length > 0).forEach(([P, l]) => {
      N[P] = l.filter(
        (y) => !(P === p?.worldName && y.uid === p.entry.uid && y.comment === p.entry.comment)
      );
    }), v.suggestedLorebooks = N;
  }
  const h = [];
  {
    for (const N of f) {
      if (N.promptName === "chatHistory") {
        h.push(...(await p0(E, s)).result);
        continue;
      }
      const P = c[N.promptName];
      if (!P)
        continue;
      const l = {
        role: N.role,
        content: _n.compile(P.content, { noEscape: !0 })(v)
      };
      l.content = Re.substituteParams(l.content), l.content && h.push(l);
    }
    p && (p.mode === "continue" ? h.push({
      role: "assistant",
      content: iS(p.worldName, p.entry)
    }) : p.mode === "revise" && (h.push({
      role: "assistant",
      content: sS(p.worldName, p.entry)
    }), S && h.push({
      role: "user",
      content: S
    })));
  }
  const C = await Re.ConnectionManagerRequestService.sendRequest(
    n,
    h,
    m
  ), x = h.find((N) => N.role === "assistant");
  if (!C.content)
    throw new Error("AI returned an empty response. Check your connection profile, model, and console for details.");
  let O = aS(C.content, {
    // Only merge with previous content if we are in 'continue' mode.
    previousContent: p && p.mode === "continue" ? x?.content : void 0
  });
  if (Object.keys(O).length === 0) {
    console.error("AI response received but no entries were parsed. Raw content:", String(C.content));
    const N = String(C.content).trim().slice(0, 200);
    throw new Error(
      `AI responded but no <lorebooks> XML was found — the model likely ignored the format instructions. Try a stronger model or strengthen the Response Rules prompt. Raw response preview: "${N}${C.content.length > 200 ? "…" : ""}" (see console for full output).`
    );
  }
  return Object.entries(O).forEach(([N, P]) => {
    u[N] && P.forEach((l) => {
      const y = u[N]?.find((w) => w.uid === l.uid);
      y && (l.key.length === 0 && (l.key = y.key), l.comment || (l.comment = y.comment)), (l.comment === null || l.comment === void 0) && (l.comment = "");
    });
  }), O = p ? { [p.worldName]: [O[p.worldName][0]] } : O, O;
}
function PS(n, r, s) {
  s[r] || (s[r] = []);
  const i = s[r], u = i.findIndex((m) => m.uid === n.uid);
  let c;
  const f = u !== -1;
  if (f)
    c = i[u];
  else {
    const m = { entries: {} };
    i.forEach((g) => m.entries[g.uid] = g);
    const p = Jf(r, m);
    if (!p)
      throw new Error(`Failed to create a new entry structure in world "${r}"`);
    const _ = i.length > 0 ? i[i.length - 1] : void 0;
    if (_) {
      const g = p.uid;
      Object.assign(p, _), p.uid = g;
    }
    c = p, i.push(c);
  }
  return c.key = n.key, c.content = n.content, c.comment = n.comment, { modifiedEntry: c, status: f ? "updated" : "added" };
}
function LS() {
  const n = Re.extensionSettings?.connectionManager?.profiles ?? [];
  return n.map((r) => ({
    value: r.name ?? r.id,
    valueProvider: (s) => n.find((i) => i.name?.includes(s))?.name
  }));
}
const zi = "SillyTavern-WorldInfo-Recommender", IS = "0.2.0", BS = "F_1.4", US = {
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
  stDescription: Q3,
  currentLorebooks: K3,
  blackListedEntries: J3,
  suggestedLorebooks: W3,
  responseRules: e8,
  taskDescription: t8,
  reviseJsonPrompt: n8,
  reviseXmlPrompt: r8,
  reviseTaskDescription: a8,
  reviseGlobalStateUpdate: o8,
  reviseGlobalStateUpdateAddedModified: i8,
  reviseGlobalStateUpdateRemoved: s8
}, ih = {
  version: IS,
  formatVersion: BS,
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
function Ty(n) {
  const s = n.replace(/[^\w\s]/g, "").split(/\s+/).filter(Boolean);
  let i = !1;
  return s.map((u, c) => {
    const f = u.replace(/^\d+/, "");
    if (f) {
      const m = i ? `${f[0].toUpperCase()}${f.slice(1).toLowerCase()}` : f.toLowerCase();
      return i || (i = !0), m;
    }
    return "";
  }).join("");
}
const It = new r0(US.EXTENSION, ih);
async function HS() {
  return new Promise((n, r) => {
    It.initializeSettings({
      strategy: [
        {
          from: "F_1.0",
          to: "F_1.1",
          action(s) {
            const i = {
              ...ih,
              ...s
            };
            return delete i.stWorldInfoPrompt, delete i.usingDefaultStWorldInfoPrompt, delete i.lorebookDefinitionPrompt, delete i.usingDefaultLorebookDefinitionPrompt, delete i.lorebookRulesPrompt, delete i.usingDefaultLorebookRulesPrompt, delete i.responseRulesPrompt, delete i.usingDefaultResponseRulesPrompt, i;
          }
        },
        {
          from: "F_1.1",
          to: "F_1.2",
          action(s) {
            const i = { ...s };
            return i.formatVersion = "F_1.2", i.prompts.taskDescription.content === `## Rules
- Don't suggest already existing or suggested entries.

## Your Task
{{userInstructions}}` ? (i.prompts.taskDescription.content = st.taskDescription, i.prompts.taskDescription.isDefault = !0) : i.prompts.taskDescription.isDefault = !1, i;
          }
        },
        {
          from: "F_1.2",
          to: "F_1.3",
          action(s) {
            const i = { ...s };
            return i.formatVersion = "F_1.3", i.defaultPromptEngineeringMode = "native", i.prompts || (i.prompts = {}), i.prompts.reviseJsonPrompt = {
              content: st.reviseJsonPrompt,
              isDefault: !0,
              label: "Revise Session (JSON Mode)"
            }, i.prompts.reviseXmlPrompt = {
              content: st.reviseXmlPrompt,
              isDefault: !0,
              label: "Revise Session (XML Mode)"
            }, i.prompts.reviseTaskDescription = {
              content: st.reviseTaskDescription,
              isDefault: !0,
              label: "Revise Session Task Description"
            }, s.prompts.currentLorebooks.isDefault && (i.prompts.currentLorebooks.content = st.currentLorebooks, i.prompts.currentLorebooks.isDefault = !0), s.prompts.blackListedEntries.isDefault && (i.prompts.blackListedEntries.content = st.blackListedEntries, i.prompts.blackListedEntries.isDefault = !0), s.prompts.suggestedLorebooks.isDefault && (i.prompts.suggestedLorebooks.content = st.suggestedLorebooks, i.prompts.suggestedLorebooks.isDefault = !0), i;
          }
        },
        {
          from: "F_1.3",
          to: "F_1.4",
          action(s) {
            const i = { ...s };
            return i.formatVersion = "F_1.4", i.prompts || (i.prompts = {}), i.prompts.reviseGlobalStateUpdate = {
              content: st.reviseGlobalStateUpdate,
              isDefault: !0,
              label: "Revise Global State Update (Wrapper)"
            }, i.prompts.reviseGlobalStateUpdateAddedModified = {
              content: st.reviseGlobalStateUpdateAddedModified,
              isDefault: !0,
              label: "Revise Global State (Added/Modified)"
            }, i.prompts.reviseGlobalStateUpdateRemoved = {
              content: st.reviseGlobalStateUpdateRemoved,
              isDefault: !0,
              label: "Revise Global State (Removed)"
            }, i;
          }
        }
      ]
    }).then((s) => {
      n();
    }).catch((s) => {
      console.error(`[${zi}] Error initializing settings:`, s), ge("error", `[${zi}] Failed to initialize settings: ${s.message}`), Re.Popup.show.confirm(
        `[${zi}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((i) => {
        i && (It.resetSettings(), ge("success", `[${zi}] Settings reset. Reloading may be required.`), n());
      });
    });
  });
}
const Ee = ({ children: n, className: r, overrideDefaults: s = !1, ...i }) => {
  const u = ie.useMemo(() => {
    const c = [];
    return s || c.push("menu_button", "interactable"), c.push(r), c.filter(Boolean).join(" ");
  }, [s, r]);
  return /* @__PURE__ */ A.jsx("button", { className: u, ...i, children: n });
}, G0 = ({ label: n, className: r, overrideDefaults: s = !1, type: i = "text", ...u }) => {
  const c = ie.useMemo(() => {
    const f = [];
    return s || (i === "text" || i === "number" || i === "password" || i === "email" || i === "search") && f.push("text_pole"), f.push(r), f.filter(Boolean).join(" ");
  }, [s, r, i]);
  if (i === "checkbox") {
    const f = s ? r : `checkbox_label ${r ?? ""}`.trim();
    return /* @__PURE__ */ A.jsxs("label", { className: f, children: [
      /* @__PURE__ */ A.jsx("input", { type: "checkbox", ...u }),
      n && /* @__PURE__ */ A.jsx("span", { children: n })
    ] });
  }
  return /* @__PURE__ */ A.jsx("input", { type: i, className: c, ...u });
}, kl = ({ children: n, className: r, overrideDefaults: s = !1, ...i }) => {
  const u = ie.useMemo(() => {
    const c = [];
    return s || c.push("text_pole"), c.push(r), c.filter(Boolean).join(" ");
  }, [s, r]);
  return /* @__PURE__ */ A.jsx("select", { className: u, ...i, children: n });
}, qn = ({ children: n, className: r, overrideDefaults: s = !1, ...i }) => {
  const u = ie.useMemo(() => {
    const c = [];
    return s || c.push("text_pole", "textarea_compact"), c.push(r), c.filter(Boolean).join(" ");
  }, [s, r]);
  return /* @__PURE__ */ A.jsx("textarea", { className: u, ...i, children: n });
};
var qS = n0(), Lt = /* @__PURE__ */ ((n) => (n[n.TEXT = 1] = "TEXT", n[n.CONFIRM = 2] = "CONFIRM", n[n.INPUT = 3] = "INPUT", n[n.DISPLAY = 4] = "DISPLAY", n))(Lt || {}), Kr = /* @__PURE__ */ ((n) => (n[n.AFFIRMATIVE = 1] = "AFFIRMATIVE", n[n.NEGATIVE = 0] = "NEGATIVE", n[n.CANCELLED = null] = "CANCELLED", n))(Kr || {});
const ZS = SillyTavern.getContext(), tr = ({
  content: n,
  type: r,
  inputValue: s = "",
  options: i = {},
  preventEscape: u = !1,
  onComplete: c
}) => {
  var f;
  const m = ie.useRef(null), p = ie.useRef(null), [_, g] = ie.useState(!1), [E, v] = ie.useState(null), S = ie.useRef(ZS.uuidv4()), h = ie.useRef({
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
    const N = m.current;
    if (!N) return;
    const P = (l) => {
      l.preventDefault(), u || C(Kr.CANCELLED);
    };
    return N.addEventListener("cancel", P), h.current.dlg = N, h.current.mainInput = p.current, Ai.util.popups.push(h.current), N.showModal || (N.classList.add("poly_dialog"), ov.registerDialog(N), new ResizeObserver((l) => {
      for (const y of l)
        ov.reposition(y.target);
    }).observe(N)), N.showModal(), Yd(), () => {
      sv(Ai.util.popups, h.current), Yd(), N.removeEventListener("cancel", P);
    };
  }, []);
  const C = async (N) => {
    var P, l;
    let y = N;
    if (r === Lt.INPUT && (N >= Kr.AFFIRMATIVE ? y = (P = p.current) == null ? void 0 : P.value : N === Kr.NEGATIVE ? y = !1 : N === Kr.CANCELLED ? y = null : y = !1), (l = i.customInputs) != null && l.length) {
      const k = new Map(
        i.customInputs.map((M) => {
          var z;
          const R = (z = m.current) == null ? void 0 : z.querySelector(`#${M.id}`);
          return [R.id, R.checked];
        })
      );
      h.current.inputResults = k;
    }
    if (h.current.result = N, h.current.value = y, i.onClosing && !await i.onClosing(h.current)) {
      g(!0), h.current.value = void 0, h.current.result = void 0, h.current.inputResults = void 0;
      return;
    }
    g(!1), Ai.util.lastResult = {
      value: y,
      result: N,
      inputResults: h.current.inputResults
    };
    const w = m.current;
    w && (w.setAttribute("closing", ""), Yd(), s2(w, async () => {
      var k;
      if (w.close(), i.onClose && await i.onClose(h.current), sv(Ai.util.popups, h.current), Ai.util.popups.length > 0) {
        const M = (k = document.activeElement) == null ? void 0 : k.closest(".popup"), z = M?.getAttribute("data-id"), R = Ai.util.popups.find((L) => L.id === z);
        R && R.lastFocus && R.lastFocus.focus();
      }
      c(y);
    }));
  }, x = (N) => {
    N.target instanceof HTMLElement && N.target !== m.current && (v(N.target), h.current.lastFocus = N.target);
  }, O = async (N) => {
  };
  return qS.createPortal(
    /* @__PURE__ */ A.jsx(
      "dialog",
      {
        ref: m,
        className: (() => {
          const N = ["popup"];
          return i.wide && N.push("wide_dialogue_popup"), i.wider && N.push("wider_dialogue_popup"), i.large && N.push("large_dialogue_popup"), i.transparent && N.push("transparent_dialogue_popup"), i.allowHorizontalScrolling && N.push("horizontal_scrolling_dialogue_popup"), i.allowVerticalScrolling && N.push("vertical_scrolling_dialogue_popup"), i.animation && N.push(`popup--animation-${i.animation}`), N.join(" ");
        })(),
        "data-id": S.current,
        onKeyDown: O,
        onFocus: x,
        children: /* @__PURE__ */ A.jsxs("div", { className: "popup-body", children: [
          /* @__PURE__ */ A.jsx("div", { className: "popup-content", children: n }),
          r === Lt.INPUT && /* @__PURE__ */ A.jsx(
            "textarea",
            {
              ref: p,
              className: "popup-input text_pole result-control auto-select",
              rows: i.rows ?? 1,
              defaultValue: s,
              "data-result": "1",
              "data-result-event": "submit"
            }
          ),
          i.customInputs && /* @__PURE__ */ A.jsx("div", { className: "popup-inputs", children: i.customInputs.map((N) => /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label justifyCenter", htmlFor: N.id, children: [
            /* @__PURE__ */ A.jsx("input", { type: "checkbox", id: N.id, defaultChecked: N.defaultState }),
            /* @__PURE__ */ A.jsx("span", { "data-i18n": N.label, children: N.label }),
            N.tooltip && /* @__PURE__ */ A.jsx(
              "div",
              {
                className: "fa-solid fa-circle-info opacity50p",
                title: N.tooltip,
                "data-i18n": `[title]${N.tooltip}`
              }
            )
          ] }, N.id)) }),
          r !== Lt.DISPLAY && /* @__PURE__ */ A.jsxs("div", { className: "popup-controls", children: [
            (f = i.customButtons) == null ? void 0 : f.map((N, P) => {
              const l = typeof N == "string" ? { text: N, result: P + 2 } : N;
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
            r !== Lt.DISPLAY && i.okButton !== !1 && /* @__PURE__ */ A.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => C(Kr.AFFIRMATIVE),
                "data-result": "1",
                children: typeof i.okButton == "string" ? i.okButton : "OK"
              }
            ),
            r !== Lt.DISPLAY && i.cancelButton !== !1 && /* @__PURE__ */ A.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => C(Kr.NEGATIVE),
                "data-result": "0",
                children: typeof i.cancelButton == "string" ? i.cancelButton : "Cancel"
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
}, $s = (n, r, s) => {
  if (!n || !n.api)
    return !1;
  const i = s[n.api];
  if (!i || !Object.hasOwn(r, i.selected))
    return !1;
  switch (i.selected) {
    case "openai":
      return !!i.source;
    case "textgenerationwebui":
      return !!i.type;
  }
  return !1;
}, Sr = SillyTavern.getContext(), V0 = ({
  initialSelectedProfileId: n,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: s = "Select a Connection Profile",
  onChange: i,
  onCreate: u,
  onUpdate: c,
  onDelete: f
}) => {
  const [m, p] = ie.useState(n ?? ""), [_, g] = ie.useState(Date.now()), { isEnabled: E, profiles: v, connectApiMap: S } = ie.useMemo(() => {
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
      (y || w) && g(Date.now()), c?.(P, l), m === P.id && !w && (p(""), i?.(void 0));
    }, N = (P) => {
      $s(P, r, S) && (g(Date.now()), f?.(P), m === P.id && (p(""), i?.(void 0)));
    };
    return Sr.eventSource.on("CONNECTION_PROFILE_CREATED", x), Sr.eventSource.on("CONNECTION_PROFILE_UPDATED", O), Sr.eventSource.on("CONNECTION_PROFILE_DELETED", N), () => {
      Sr.eventSource.removeListener("CONNECTION_PROFILE_CREATED", x), Sr.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", O), Sr.eventSource.removeListener("CONNECTION_PROFILE_DELETED", N);
    };
  }, [E, m, r, S, i, u, c, f]);
  const h = ie.useMemo(() => {
    if (!E) return [];
    const x = v.filter((N) => $s(N, r, S)), O = {};
    for (const [N, P] of Object.entries(r))
      O[N] = { label: P, profiles: [] };
    for (const N of x) {
      const P = S[N.api];
      O[P.selected] && O[P.selected].profiles.push(N);
    }
    for (const N of Object.values(O))
      N.profiles.sort((P, l) => (P.name ?? "").localeCompare(l.name ?? ""));
    return Object.values(O).filter((N) => N.profiles.length > 0);
  }, [E, v, r, S]), C = ie.useCallback(
    (x) => {
      const O = x.target.value;
      p(O);
      const N = v.find((P) => P.id === O);
      i?.(N);
    },
    [v, i]
  );
  return E ? /* @__PURE__ */ A.jsxs(kl, { value: m, onChange: C, children: [
    /* @__PURE__ */ A.jsx("option", { value: "", children: s }),
    h.map((x) => /* @__PURE__ */ A.jsx("optgroup", { label: x.label, children: x.profiles.map((O) => /* @__PURE__ */ A.jsx("option", { value: O.id, children: O.name }, O.id)) }, x.label))
  ] }) : /* @__PURE__ */ A.jsx(kl, { disabled: !0, value: "", children: /* @__PURE__ */ A.jsx("option", { children: "Connection Manager disabled" }) });
}, GS = vl.memo(
  ({ item: n, showToggleButton: r, showDeleteButton: s, showSelectInput: i, onToggle: u, onDelete: c, onSelectChange: f }) => {
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
    } = n, x = {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      border: "1px solid var(--SmartThemeBorderColor, #ccc)",
      color: "var(--SmartThemeBodyColor, #333)",
      marginBottom: "2px",
      opacity: r && !_ ? 0.6 : 1
    }, O = { cursor: "pointer", flexShrink: 0 }, N = { display: "inline-block", flexShrink: 0, marginRight: "10px" };
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
      i && v && S && /* @__PURE__ */ A.jsx(
        kl,
        {
          value: C,
          onChange: (P) => f(m, P.target.value),
          disabled: !_,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: h.length === 0 ? /* @__PURE__ */ A.jsx("option", { disabled: !0, children: "--" }) : h.map((P) => /* @__PURE__ */ A.jsx("option", { value: P.value, children: P.label }, P.value))
        }
      ),
      i && (!v || !S) && /* @__PURE__ */ A.jsx("span", { style: N }),
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
      r && !E && /* @__PURE__ */ A.jsx("span", { style: N }),
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
      s && !g && /* @__PURE__ */ A.jsx("span", { style: { ...N, marginRight: 0 } })
    ] });
  }
), $0 = ({
  items: n,
  onItemsChange: r,
  showToggleButton: s = !1,
  showDeleteButton: i = !1,
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
  }, _ = (E) => {
    r(n.filter((v) => v.id !== E));
  }, g = (E, v) => {
    r(n.map((S) => S.id === E ? { ...S, selectValue: v } : S));
  };
  return /* @__PURE__ */ A.jsx("ul", { ref: f, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: n.map((E) => /* @__PURE__ */ A.jsx(
    GS,
    {
      item: E,
      showToggleButton: s,
      showDeleteButton: i,
      showSelectInput: u,
      onToggle: p,
      onDelete: _,
      onSelectChange: g
    },
    E.id
  )) });
}, Y0 = ({
  items: n,
  value: r,
  onChange: s,
  placeholder: i = "Select items...",
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
  const [h, C] = ie.useState(!1), [x, O] = ie.useState(""), N = ie.useRef(null);
  ie.useEffect(() => {
    const k = (M) => {
      N.current && !N.current.contains(M.target) && C(!1);
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
    return new Ui(n, k);
  }, [n, p, E]), l = ie.useMemo(() => !p || !x.trim() || !P ? n : P.search(x.trim()).map((k) => k.item), [n, x, p, P]), y = async (k) => {
    let M;
    c ? M = r.includes(k) ? r.filter((z) => z !== k) : [...r, k] : M = r.includes(k) ? [] : [k], !(m && !await Promise.resolve(m(r, M))) && (s(M), u && C(!1));
  }, w = ie.useMemo(() => {
    var k;
    return r.length === 0 ? i : r.length === 1 ? ((k = n.find((M) => M.value === r[0])) == null ? void 0 : k.label) ?? r[0] : `${r.length} items selected`;
  }, [r, n, i]);
  return /* @__PURE__ */ A.jsxs(
    "div",
    {
      ref: N,
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
                    G0,
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
                VS,
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
}, VS = vl.memo(({ item: n, isSelected: r, onClick: s }) => {
  const [i, u] = ie.useState(!1);
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
        backgroundColor: r ? "var(--accent-color-bg, var(--link-color))" : i ? "var(--hover-color, var(--white20a))" : "transparent"
      },
      children: [
        /* @__PURE__ */ A.jsx("span", { children: n.label }),
        r && /* @__PURE__ */ A.jsx("i", { className: "checkmark fa-solid fa-check", style: { marginLeft: "8px" } })
      ]
    }
  );
}), _f = SillyTavern.getContext(), Pf = ({
  value: n,
  items: r,
  readOnlyValues: s = [],
  label: i,
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
  const S = ie.useMemo(() => r.find((N) => N.value === n), [r, n]), h = ie.useCallback((N) => N ? s.includes(N) : !1, [s]), C = async () => {
    const N = await _f.Popup.show.input(
      `Create a new ${i}`,
      `Please enter a name for the new ${i}:`,
      ""
    );
    if (!N || N.trim() === "") return;
    const P = N.trim();
    if (r.some((y) => y.value === P)) {
      await ge("warning", `A ${i} with this name already exists.`);
      return;
    }
    let l = { value: P, label: P };
    if (_) {
      const y = await Promise.resolve(_(P));
      if (!y.confirmed) return;
      y.value && (typeof y.value == "string" ? l = { value: y.value, label: y.value } : l = y.value);
    }
    c([...r, l]), u(l.value, n);
  }, x = async () => {
    if (!S) {
      await ge("warning", `Please select a ${i} to rename.`);
      return;
    }
    if (h(S.value)) {
      await ge("warning", `This ${i} cannot be renamed as it is read-only.`);
      return;
    }
    const N = await _f.Popup.show.input(
      `Rename ${i}`,
      `Please enter a new name for "${S.label}":`,
      S.label
    );
    if (!N || N.trim() === "" || N.trim() === S.value) return;
    const P = N.trim();
    if (r.some((w) => w.value === P)) {
      await ge("warning", `A ${i} with this name already exists.`);
      return;
    }
    let l = { value: P, label: P };
    if (g) {
      const w = await Promise.resolve(g(S.value, P));
      if (!w.confirmed) return;
      w.value && (typeof w.value == "string" ? l = { value: w.value, label: w.value } : l = w.value);
    }
    const y = r.map((w) => w.value === S.value ? l : w);
    c(y), u(l.value, n);
  }, O = async () => {
    var N;
    if (!S) {
      await ge("warning", `Please select a ${i} to delete.`);
      return;
    }
    if (h(S.value)) {
      await ge("warning", `This ${i} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await _f.Popup.show.confirm(
      `Delete ${i}`,
      `Are you sure you want to delete "${S.label}"?`
    ) || E && !await Promise.resolve(E(S.value)))
      return;
    const P = r.findIndex((w) => w.value === S.value), l = r.filter((w) => w.value !== S.value);
    c(l);
    let y;
    if (l.length > 0) {
      const w = Math.min(P, l.length - 1);
      y = (N = l[w]) == null ? void 0 : N.value;
    }
    u(y, n);
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ A.jsx(kl, { value: n ?? "", onChange: (N) => u(N.target.value, n), children: r.map((N) => /* @__PURE__ */ A.jsx("option", { value: N.value, children: N.label }, N.value)) }),
    f && /* @__PURE__ */ A.jsx(
      Ee,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${i}`,
        onClick: C,
        "data-i18n": `[title]Create a new ${i}`
      }
    ),
    m && /* @__PURE__ */ A.jsx(
      Ee,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${i}`,
        onClick: x,
        disabled: !S,
        "data-i18n": `[title]Rename selected ${i}`
      }
    ),
    p && /* @__PURE__ */ A.jsx(
      Ee,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${i}`,
        onClick: O,
        disabled: !S,
        "data-i18n": `[title]Delete selected ${i}`
      }
    ),
    v?.map((N) => /* @__PURE__ */ A.jsx(
      Ee,
      {
        className: N.icon,
        title: N.title,
        onClick: N.onClick,
        disabled: N.disabled,
        "data-i18n": N.i18n ? `[title]${N.i18n}` : void 0
      },
      N.key
    ))
  ] });
}, X0 = () => {
  const [, n] = ie.useState(0);
  return ie.useCallback(() => {
    n((s) => s + 1);
  }, []);
}, bf = SillyTavern.getContext(), $S = () => {
  const n = X0(), r = It.getSettings(), [s, i] = ie.useState(rl[0]), u = ie.useCallback(
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
  }, _ = (l) => {
    u((y) => {
      const w = {}, k = y.mainContextTemplatePresets;
      l.forEach((M) => {
        w[M.value] = k[M.value] ?? structuredClone(k[y.mainContextTemplatePreset] ?? k.default);
      }), y.mainContextTemplatePresets = w;
    });
  }, g = (l) => {
    u((y) => {
      const w = l.map((M) => ({
        promptName: M.id,
        enabled: M.enabled,
        role: M.selectValue ?? "user"
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
        default: structuredClone(ih.mainContextTemplatePresets.default)
      }, y.mainContextTemplatePreset = "default";
    });
  }, v = (l) => {
    u((y) => {
      const w = {}, k = y.prompts, M = Object.keys(k), z = l.map((L) => L.value);
      z.forEach((L) => {
        w[L] = k[L] ?? { content: "", isDefault: !1, label: L };
      }), y.prompts = w;
      const R = M.filter((L) => !z.includes(L));
      if (R.length > 0) {
        const L = Object.fromEntries(
          Object.entries(y.mainContextTemplatePresets).map(([Z, F]) => [
            Z,
            {
              ...F,
              prompts: F.prompts.filter(($) => !R.includes($.promptName))
            }
          ])
        );
        y.mainContextTemplatePresets = L;
      }
    });
  }, S = (l) => {
    const y = Ty(l);
    return y ? r.prompts[y] ? (ge("error", `Prompt name already exists: ${y}`), { confirmed: !1 }) : (u((w) => {
      w.prompts = {
        ...w.prompts,
        [y]: {
          content: w.prompts[s]?.content ?? "",
          isDefault: !1,
          label: l
        }
      }, w.mainContextTemplatePresets = Object.fromEntries(
        Object.entries(w.mainContextTemplatePresets).map(([k, M]) => [
          k,
          {
            ...M,
            prompts: [...M.prompts, { enabled: !0, promptName: y, role: "user" }]
          }
        ])
      );
    }), i(y), { confirmed: !0, value: y }) : (ge("error", `Invalid prompt name: ${l}`), { confirmed: !1 });
  }, h = (l, y) => {
    const w = Ty(y);
    return w ? r.prompts[w] ? (ge("error", `Prompt name already exists: ${w}`), { confirmed: !1 }) : (u((k) => {
      const { [l]: M, ...z } = k.prompts;
      k.prompts = {
        ...z,
        [w]: { ...M, label: y }
      }, k.mainContextTemplatePresets = Object.fromEntries(
        Object.entries(k.mainContextTemplatePresets).map(([R, L]) => [
          R,
          {
            ...L,
            prompts: L.prompts.map((Z) => Z.promptName === l ? { ...Z, promptName: w } : Z)
          }
        ])
      );
    }), i(w), { confirmed: !0, value: w }) : (ge("error", `Invalid prompt name: ${y}`), { confirmed: !1 });
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
    await bf.Popup.show.confirm("Restore Default", `Restore default for "${l.label}"?`) && u((w) => {
      w.prompts = {
        ...w.prompts,
        [s]: {
          ...w.prompts[s],
          content: st[s]
        }
      };
    });
  }, O = async () => {
    await bf.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (It.resetSettings(), n(), ge("success", "Settings reset. The UI has been updated."));
  }, N = r.prompts[s]?.content ?? "", P = rl.includes(s);
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
        Pf,
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
        $0,
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
        Pf,
        {
          label: "Prompt",
          items: f,
          value: s,
          readOnlyValues: rl,
          onChange: (l) => i(l ?? ""),
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
          value: N,
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
var gl = { exports: {} }, YS = gl.exports, Ny;
function XS() {
  return Ny || (Ny = 1, (function(n) {
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
      var i = {}, u = {}, c = {}, f = r(!0), m = "vanilla", p = {
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
      i.helper = {}, i.extensions = {}, i.setOption = function(l, y) {
        return f[l] = y, this;
      }, i.getOption = function(l) {
        return f[l];
      }, i.getOptions = function() {
        return f;
      }, i.resetOptions = function() {
        f = r(!0);
      }, i.setFlavor = function(l) {
        if (!p.hasOwnProperty(l))
          throw Error(l + " flavor was not found");
        i.resetOptions();
        var y = p[l];
        m = l;
        for (var w in y)
          y.hasOwnProperty(w) && (f[w] = y[w]);
      }, i.getFlavor = function() {
        return m;
      }, i.getFlavorOptions = function(l) {
        if (p.hasOwnProperty(l))
          return p[l];
      }, i.getDefaultOptions = function(l) {
        return r(l);
      }, i.subParser = function(l, y) {
        if (i.helper.isString(l))
          if (typeof y < "u")
            u[l] = y;
          else {
            if (u.hasOwnProperty(l))
              return u[l];
            throw Error("SubParser named " + l + " not registered!");
          }
      }, i.extension = function(l, y) {
        if (!i.helper.isString(l))
          throw Error("Extension 'name' must be a string");
        if (l = i.helper.stdExtName(l), i.helper.isUndefined(y)) {
          if (!c.hasOwnProperty(l))
            throw Error("Extension named " + l + " is not registered!");
          return c[l];
        } else {
          typeof y == "function" && (y = y()), i.helper.isArray(y) || (y = [y]);
          var w = _(y, l);
          if (w.valid)
            c[l] = y;
          else
            throw Error(w.error);
        }
      }, i.getAllExtensions = function() {
        return c;
      }, i.removeExtension = function(l) {
        delete c[l];
      }, i.resetExtensions = function() {
        c = {};
      };
      function _(l, y) {
        var w = y ? "Error in " + y + " extension->" : "Error in unnamed extension", k = {
          valid: !0,
          error: ""
        };
        i.helper.isArray(l) || (l = [l]);
        for (var M = 0; M < l.length; ++M) {
          var z = w + " sub-extension " + M + ": ", R = l[M];
          if (typeof R != "object")
            return k.valid = !1, k.error = z + "must be an object, but " + typeof R + " given", k;
          if (!i.helper.isString(R.type))
            return k.valid = !1, k.error = z + 'property "type" must be a string, but ' + typeof R.type + " given", k;
          var L = R.type = R.type.toLowerCase();
          if (L === "language" && (L = R.type = "lang"), L === "html" && (L = R.type = "output"), L !== "lang" && L !== "output" && L !== "listener")
            return k.valid = !1, k.error = z + "type " + L + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"', k;
          if (L === "listener") {
            if (i.helper.isUndefined(R.listeners))
              return k.valid = !1, k.error = z + '. Extensions of type "listener" must have a property called "listeners"', k;
          } else if (i.helper.isUndefined(R.filter) && i.helper.isUndefined(R.regex))
            return k.valid = !1, k.error = z + L + ' extensions must define either a "regex" property or a "filter" method', k;
          if (R.listeners) {
            if (typeof R.listeners != "object")
              return k.valid = !1, k.error = z + '"listeners" property must be an object but ' + typeof R.listeners + " given", k;
            for (var Z in R.listeners)
              if (R.listeners.hasOwnProperty(Z) && typeof R.listeners[Z] != "function")
                return k.valid = !1, k.error = z + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + Z + " must be a function but " + typeof R.listeners[Z] + " given", k;
          }
          if (R.filter) {
            if (typeof R.filter != "function")
              return k.valid = !1, k.error = z + '"filter" must be a function, but ' + typeof R.filter + " given", k;
          } else if (R.regex) {
            if (i.helper.isString(R.regex) && (R.regex = new RegExp(R.regex, "g")), !(R.regex instanceof RegExp))
              return k.valid = !1, k.error = z + '"regex" property must either be a string or a RegExp object, but ' + typeof R.regex + " given", k;
            if (i.helper.isUndefined(R.replace))
              return k.valid = !1, k.error = z + '"regex" extensions must implement a replace string or function', k;
          }
        }
        return k;
      }
      i.validateExtension = function(l) {
        var y = _(l, null);
        return y.valid ? !0 : (console.warn(y.error), !1);
      }, i.hasOwnProperty("helper") || (i.helper = {}), i.helper.isString = function(l) {
        return typeof l == "string" || l instanceof String;
      }, i.helper.isFunction = function(l) {
        var y = {};
        return l && y.toString.call(l) === "[object Function]";
      }, i.helper.isArray = function(l) {
        return Array.isArray(l);
      }, i.helper.isUndefined = function(l) {
        return typeof l > "u";
      }, i.helper.forEach = function(l, y) {
        if (i.helper.isUndefined(l))
          throw new Error("obj param is required");
        if (i.helper.isUndefined(y))
          throw new Error("callback param is required");
        if (!i.helper.isFunction(y))
          throw new Error("callback param must be a function/closure");
        if (typeof l.forEach == "function")
          l.forEach(y);
        else if (i.helper.isArray(l))
          for (var w = 0; w < l.length; w++)
            y(l[w], w, l);
        else if (typeof l == "object")
          for (var k in l)
            l.hasOwnProperty(k) && y(l[k], k, l);
        else
          throw new Error("obj does not seem to be an array or an iterable object");
      }, i.helper.stdExtName = function(l) {
        return l.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase();
      };
      function g(l, y) {
        var w = y.charCodeAt(0);
        return "¨E" + w + "E";
      }
      i.helper.escapeCharactersCallback = g, i.helper.escapeCharacters = function(l, y, w) {
        var k = "([" + y.replace(/([\[\]\\])/g, "\\$1") + "])";
        w && (k = "\\\\" + k);
        var M = new RegExp(k, "g");
        return l = l.replace(M, g), l;
      }, i.helper.unescapeHTMLEntities = function(l) {
        return l.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
      };
      var E = function(l, y, w, k) {
        var M = k || "", z = M.indexOf("g") > -1, R = new RegExp(y + "|" + w, "g" + M.replace(/g/g, "")), L = new RegExp(y, M.replace(/g/g, "")), Z = [], F, $, W, j, B;
        do
          for (F = 0; W = R.exec(l); )
            if (L.test(W[0]))
              F++ || ($ = R.lastIndex, j = $ - W[0].length);
            else if (F && !--F) {
              B = W.index + W[0].length;
              var K = {
                left: { start: j, end: $ },
                match: { start: $, end: W.index },
                right: { start: W.index, end: B },
                wholeMatch: { start: j, end: B }
              };
              if (Z.push(K), !z)
                return Z;
            }
        while (F && (R.lastIndex = $));
        return Z;
      };
      i.helper.matchRecursiveRegExp = function(l, y, w, k) {
        for (var M = E(l, y, w, k), z = [], R = 0; R < M.length; ++R)
          z.push([
            l.slice(M[R].wholeMatch.start, M[R].wholeMatch.end),
            l.slice(M[R].match.start, M[R].match.end),
            l.slice(M[R].left.start, M[R].left.end),
            l.slice(M[R].right.start, M[R].right.end)
          ]);
        return z;
      }, i.helper.replaceRecursiveRegExp = function(l, y, w, k, M) {
        if (!i.helper.isFunction(y)) {
          var z = y;
          y = function() {
            return z;
          };
        }
        var R = E(l, w, k, M), L = l, Z = R.length;
        if (Z > 0) {
          var F = [];
          R[0].wholeMatch.start !== 0 && F.push(l.slice(0, R[0].wholeMatch.start));
          for (var $ = 0; $ < Z; ++$)
            F.push(
              y(
                l.slice(R[$].wholeMatch.start, R[$].wholeMatch.end),
                l.slice(R[$].match.start, R[$].match.end),
                l.slice(R[$].left.start, R[$].left.end),
                l.slice(R[$].right.start, R[$].right.end)
              )
            ), $ < Z - 1 && F.push(l.slice(R[$].wholeMatch.end, R[$ + 1].wholeMatch.start));
          R[Z - 1].wholeMatch.end < l.length && F.push(l.slice(R[Z - 1].wholeMatch.end)), L = F.join("");
        }
        return L;
      }, i.helper.regexIndexOf = function(l, y, w) {
        if (!i.helper.isString(l))
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        if (!(y instanceof RegExp))
          throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
        var k = l.substring(w || 0).search(y);
        return k >= 0 ? k + (w || 0) : k;
      }, i.helper.splitAtIndex = function(l, y) {
        if (!i.helper.isString(l))
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        return [l.substring(0, y), l.substring(y)];
      }, i.helper.encodeEmailAddress = function(l) {
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
      }, i.helper.padEnd = function(y, w, k) {
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
      }), i.helper.regexes = {
        asteriskDashAndColon: /([*_:~])/g
      }, i.helper.emojis = {
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
      }, i.Converter = function(l) {
        var y = {}, w = [], k = [], M = {}, z = m, R = {
          parsed: {},
          raw: "",
          format: ""
        };
        L();
        function L() {
          l = l || {};
          for (var j in f)
            f.hasOwnProperty(j) && (y[j] = f[j]);
          if (typeof l == "object")
            for (var B in l)
              l.hasOwnProperty(B) && (y[B] = l[B]);
          else
            throw Error("Converter expects the passed parameter to be an object, but " + typeof l + " was passed instead.");
          y.extensions && i.helper.forEach(y.extensions, Z);
        }
        function Z(j, B) {
          if (B = B || null, i.helper.isString(j))
            if (j = i.helper.stdExtName(j), B = j, i.extensions[j]) {
              console.warn("DEPRECATION WARNING: " + j + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"), F(i.extensions[j], j);
              return;
            } else if (!i.helper.isUndefined(c[j]))
              j = c[j];
            else
              throw Error('Extension "' + j + '" could not be loaded. It was either not found or is not a valid extension.');
          typeof j == "function" && (j = j()), i.helper.isArray(j) || (j = [j]);
          var K = _(j, B);
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
                j[ae].listeners.hasOwnProperty(I) && $(I, j[ae].listeners[I]);
          }
        }
        function F(j, B) {
          typeof j == "function" && (j = j(new i.Converter())), i.helper.isArray(j) || (j = [j]);
          var K = _(j, B);
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
        function $(j, B) {
          if (!i.helper.isString(j))
            throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof j + " given");
          if (typeof B != "function")
            throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof B + " given");
          M.hasOwnProperty(j) || (M[j] = []), M[j].push(B);
        }
        function W(j) {
          var B = j.match(/^\s*/)[0].length, K = new RegExp("^\\s{0," + B + "}", "gm");
          return j.replace(K, "");
        }
        this._dispatch = function(B, K, ae, I) {
          if (M.hasOwnProperty(B))
            for (var Y = 0; Y < M[B].length; ++Y) {
              var ce = M[B][Y](B, K, this, ae, I);
              ce && typeof ce < "u" && (K = ce);
            }
          return K;
        }, this.listen = function(j, B) {
          return $(j, B), this;
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

`, j = i.subParser("detab")(j, y, B), j = j.replace(/^[ \t]+$/mg, ""), i.helper.forEach(w, function(K) {
            j = i.subParser("runExtension")(K, j, y, B);
          }), j = i.subParser("metadata")(j, y, B), j = i.subParser("hashPreCodeTags")(j, y, B), j = i.subParser("githubCodeBlocks")(j, y, B), j = i.subParser("hashHTMLBlocks")(j, y, B), j = i.subParser("hashCodeTags")(j, y, B), j = i.subParser("stripLinkDefinitions")(j, y, B), j = i.subParser("blockGamut")(j, y, B), j = i.subParser("unhashHTMLSpans")(j, y, B), j = i.subParser("unescapeSpecialChars")(j, y, B), j = j.replace(/¨D/g, "$$"), j = j.replace(/¨T/g, "¨"), j = i.subParser("completeHTMLDocument")(j, y, B), i.helper.forEach(k, function(K) {
            j = i.subParser("runExtension")(K, j, y, B);
          }), R = B.metadata, j;
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
          V(K);
          for (var I = K.childNodes, Y = "", ce = 0; ce < I.length; ce++)
            Y += i.subParser("makeMarkdown.node")(I[ce], ae);
          function V(te) {
            for (var ne = 0; ne < te.childNodes.length; ++ne) {
              var ue = te.childNodes[ne];
              ue.nodeType === 3 ? !/\S/.test(ue.nodeValue) && !/^[ ]+$/.test(ue.nodeValue) ? (te.removeChild(ue), --ne) : (ue.nodeValue = ue.nodeValue.split(`
`).join(" "), ue.nodeValue = ue.nodeValue.replace(/(\s)+/g, "$1")) : ue.nodeType === 1 && V(ue);
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
                pe = i.helper.unescapeHTMLEntities(pe), ue.push(pe), ne[re].outerHTML = '<precode language="' + je + '" precodenum="' + re.toString() + '"></precode>';
              } else
                ue.push(ne[re].innerHTML), ne[re].innerHTML = "", ne[re].setAttribute("prenum", re.toString());
            return ue;
          }
          return Y;
        }, this.setOption = function(j, B) {
          y[j] = B;
        }, this.getOption = function(j) {
          return y[j];
        }, this.getOptions = function() {
          return y;
        }, this.addExtension = function(j, B) {
          B = B || null, Z(j, B);
        }, this.useExtension = function(j) {
          Z(j);
        }, this.setFlavor = function(j) {
          if (!p.hasOwnProperty(j))
            throw Error(j + " flavor was not found");
          var B = p[j];
          z = j;
          for (var K in B)
            B.hasOwnProperty(K) && (y[K] = B[K]);
        }, this.getFlavor = function() {
          return z;
        }, this.removeExtension = function(j) {
          i.helper.isArray(j) || (j = [j]);
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
          return j ? R.raw : R.parsed;
        }, this.getMetadataFormat = function() {
          return R.format;
        }, this._setMetadataPair = function(j, B) {
          R.parsed[j] = B;
        }, this._setMetadataFormat = function(j) {
          R.format = j;
        }, this._setMetadataRaw = function(j) {
          R.raw = j;
        };
      }, i.subParser("anchors", function(l, y, w) {
        l = w.converter._dispatch("anchors.before", l, y, w);
        var k = function(M, z, R, L, Z, F, $) {
          if (i.helper.isUndefined($) && ($ = ""), R = R.toLowerCase(), M.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
            L = "";
          else if (!L)
            if (R || (R = z.toLowerCase().replace(/ ?\n/g, " ")), L = "#" + R, !i.helper.isUndefined(w.gUrls[R]))
              L = w.gUrls[R], i.helper.isUndefined(w.gTitles[R]) || ($ = w.gTitles[R]);
            else
              return M;
          L = L.replace(i.helper.regexes.asteriskDashAndColon, i.helper.escapeCharactersCallback);
          var W = '<a href="' + L + '"';
          return $ !== "" && $ !== null && ($ = $.replace(/"/g, "&quot;"), $ = $.replace(i.helper.regexes.asteriskDashAndColon, i.helper.escapeCharactersCallback), W += ' title="' + $ + '"'), y.openLinksInNewWindow && !/^#/.test(L) && (W += ' rel="noopener noreferrer" target="¨E95Eblank"'), W += ">" + z + "</a>", W;
        };
        return l = l.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, k), l = l.replace(
          /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
          k
        ), l = l.replace(
          /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
          k
        ), l = l.replace(/\[([^\[\]]+)]()()()()()/g, k), y.ghMentions && (l = l.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function(M, z, R, L, Z) {
          if (R === "\\")
            return z + L;
          if (!i.helper.isString(y.ghMentionsLink))
            throw new Error("ghMentionsLink option must be a string");
          var F = y.ghMentionsLink.replace(/\{u}/g, Z), $ = "";
          return y.openLinksInNewWindow && ($ = ' rel="noopener noreferrer" target="¨E95Eblank"'), z + '<a href="' + F + '"' + $ + ">" + L + "</a>";
        })), l = w.converter._dispatch("anchors.after", l, y, w), l;
      });
      var v = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi, S = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi, h = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi, C = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi, x = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, O = function(l) {
        return function(y, w, k, M, z, R, L) {
          k = k.replace(i.helper.regexes.asteriskDashAndColon, i.helper.escapeCharactersCallback);
          var Z = k, F = "", $ = "", W = w || "", j = L || "";
          return /^www\./i.test(k) && (k = k.replace(/^www\./i, "http://www.")), l.excludeTrailingPunctuationFromURLs && R && (F = R), l.openLinksInNewWindow && ($ = ' rel="noopener noreferrer" target="¨E95Eblank"'), W + '<a href="' + k + '"' + $ + ">" + Z + "</a>" + F + j;
        };
      }, N = function(l, y) {
        return function(w, k, M) {
          var z = "mailto:";
          return k = k || "", M = i.subParser("unescapeSpecialChars")(M, l, y), l.encodeEmails ? (z = i.helper.encodeEmailAddress(z + M), M = i.helper.encodeEmailAddress(M)) : z = z + M, k + '<a href="' + z + '">' + M + "</a>";
        };
      };
      i.subParser("autoLinks", function(l, y, w) {
        return l = w.converter._dispatch("autoLinks.before", l, y, w), l = l.replace(h, O(y)), l = l.replace(x, N(y, w)), l = w.converter._dispatch("autoLinks.after", l, y, w), l;
      }), i.subParser("simplifiedAutoLinks", function(l, y, w) {
        return y.simplifiedAutoLink && (l = w.converter._dispatch("simplifiedAutoLinks.before", l, y, w), y.excludeTrailingPunctuationFromURLs ? l = l.replace(S, O(y)) : l = l.replace(v, O(y)), l = l.replace(C, N(y, w)), l = w.converter._dispatch("simplifiedAutoLinks.after", l, y, w)), l;
      }), i.subParser("blockGamut", function(l, y, w) {
        return l = w.converter._dispatch("blockGamut.before", l, y, w), l = i.subParser("blockQuotes")(l, y, w), l = i.subParser("headers")(l, y, w), l = i.subParser("horizontalRule")(l, y, w), l = i.subParser("lists")(l, y, w), l = i.subParser("codeBlocks")(l, y, w), l = i.subParser("tables")(l, y, w), l = i.subParser("hashHTMLBlocks")(l, y, w), l = i.subParser("paragraphs")(l, y, w), l = w.converter._dispatch("blockGamut.after", l, y, w), l;
      }), i.subParser("blockQuotes", function(l, y, w) {
        l = w.converter._dispatch("blockQuotes.before", l, y, w), l = l + `

`;
        var k = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
        return y.splitAdjacentBlockquotes && (k = /^ {0,3}>[\s\S]*?(?:\n\n)/gm), l = l.replace(k, function(M) {
          return M = M.replace(/^[ \t]*>[ \t]?/gm, ""), M = M.replace(/¨0/g, ""), M = M.replace(/^[ \t]+$/gm, ""), M = i.subParser("githubCodeBlocks")(M, y, w), M = i.subParser("blockGamut")(M, y, w), M = M.replace(/(^|\n)/g, "$1  "), M = M.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(z, R) {
            var L = R;
            return L = L.replace(/^  /mg, "¨0"), L = L.replace(/¨0/g, ""), L;
          }), i.subParser("hashBlock")(`<blockquote>
` + M + `
</blockquote>`, y, w);
        }), l = w.converter._dispatch("blockQuotes.after", l, y, w), l;
      }), i.subParser("codeBlocks", function(l, y, w) {
        l = w.converter._dispatch("codeBlocks.before", l, y, w), l += "¨0";
        var k = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
        return l = l.replace(k, function(M, z, R) {
          var L = z, Z = R, F = `
`;
          return L = i.subParser("outdent")(L, y, w), L = i.subParser("encodeCode")(L, y, w), L = i.subParser("detab")(L, y, w), L = L.replace(/^\n+/g, ""), L = L.replace(/\n+$/g, ""), y.omitExtraWLInCodeBlocks && (F = ""), L = "<pre><code>" + L + F + "</code></pre>", i.subParser("hashBlock")(L, y, w) + Z;
        }), l = l.replace(/¨0/, ""), l = w.converter._dispatch("codeBlocks.after", l, y, w), l;
      }), i.subParser("codeSpans", function(l, y, w) {
        return l = w.converter._dispatch("codeSpans.before", l, y, w), typeof l > "u" && (l = ""), l = l.replace(
          /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
          function(k, M, z, R) {
            var L = R;
            return L = L.replace(/^([ \t]*)/g, ""), L = L.replace(/[ \t]*$/g, ""), L = i.subParser("encodeCode")(L, y, w), L = M + "<code>" + L + "</code>", L = i.subParser("hashHTMLSpans")(L, y, w), L;
          }
        ), l = w.converter._dispatch("codeSpans.after", l, y, w), l;
      }), i.subParser("completeHTMLDocument", function(l, y, w) {
        if (!y.completeHTMLDocument)
          return l;
        l = w.converter._dispatch("completeHTMLDocument.before", l, y, w);
        var k = "html", M = `<!DOCTYPE HTML>
`, z = "", R = `<meta charset="utf-8">
`, L = "", Z = "";
        typeof w.metadata.parsed.doctype < "u" && (M = "<!DOCTYPE " + w.metadata.parsed.doctype + `>
`, k = w.metadata.parsed.doctype.toString().toLowerCase(), (k === "html" || k === "html5") && (R = '<meta charset="utf-8">'));
        for (var F in w.metadata.parsed)
          if (w.metadata.parsed.hasOwnProperty(F))
            switch (F.toLowerCase()) {
              case "doctype":
                break;
              case "title":
                z = "<title>" + w.metadata.parsed.title + `</title>
`;
                break;
              case "charset":
                k === "html" || k === "html5" ? R = '<meta charset="' + w.metadata.parsed.charset + `">
` : R = '<meta name="charset" content="' + w.metadata.parsed.charset + `">
`;
                break;
              case "language":
              case "lang":
                L = ' lang="' + w.metadata.parsed[F] + '"', Z += '<meta name="' + F + '" content="' + w.metadata.parsed[F] + `">
`;
                break;
              default:
                Z += '<meta name="' + F + '" content="' + w.metadata.parsed[F] + `">
`;
            }
        return l = M + "<html" + L + `>
<head>
` + z + R + Z + `</head>
<body>
` + l.trim() + `
</body>
</html>`, l = w.converter._dispatch("completeHTMLDocument.after", l, y, w), l;
      }), i.subParser("detab", function(l, y, w) {
        return l = w.converter._dispatch("detab.before", l, y, w), l = l.replace(/\t(?=\t)/g, "    "), l = l.replace(/\t/g, "¨A¨B"), l = l.replace(/¨B(.+?)¨A/g, function(k, M) {
          for (var z = M, R = 4 - z.length % 4, L = 0; L < R; L++)
            z += " ";
          return z;
        }), l = l.replace(/¨A/g, "    "), l = l.replace(/¨B/g, ""), l = w.converter._dispatch("detab.after", l, y, w), l;
      }), i.subParser("ellipsis", function(l, y, w) {
        return y.ellipsis && (l = w.converter._dispatch("ellipsis.before", l, y, w), l = l.replace(/\.\.\./g, "…"), l = w.converter._dispatch("ellipsis.after", l, y, w)), l;
      }), i.subParser("emoji", function(l, y, w) {
        if (!y.emoji)
          return l;
        l = w.converter._dispatch("emoji.before", l, y, w);
        var k = /:([\S]+?):/g;
        return l = l.replace(k, function(M, z) {
          return i.helper.emojis.hasOwnProperty(z) ? i.helper.emojis[z] : M;
        }), l = w.converter._dispatch("emoji.after", l, y, w), l;
      }), i.subParser("encodeAmpsAndAngles", function(l, y, w) {
        return l = w.converter._dispatch("encodeAmpsAndAngles.before", l, y, w), l = l.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"), l = l.replace(/<(?![a-z\/?$!])/gi, "&lt;"), l = l.replace(/</g, "&lt;"), l = l.replace(/>/g, "&gt;"), l = w.converter._dispatch("encodeAmpsAndAngles.after", l, y, w), l;
      }), i.subParser("encodeBackslashEscapes", function(l, y, w) {
        return l = w.converter._dispatch("encodeBackslashEscapes.before", l, y, w), l = l.replace(/\\(\\)/g, i.helper.escapeCharactersCallback), l = l.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g, i.helper.escapeCharactersCallback), l = w.converter._dispatch("encodeBackslashEscapes.after", l, y, w), l;
      }), i.subParser("encodeCode", function(l, y, w) {
        return l = w.converter._dispatch("encodeCode.before", l, y, w), l = l.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, i.helper.escapeCharactersCallback), l = w.converter._dispatch("encodeCode.after", l, y, w), l;
      }), i.subParser("escapeSpecialCharsWithinTagAttributes", function(l, y, w) {
        l = w.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", l, y, w);
        var k = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, M = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
        return l = l.replace(k, function(z) {
          return z.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, i.helper.escapeCharactersCallback);
        }), l = l.replace(M, function(z) {
          return z.replace(/([\\`*_~=|])/g, i.helper.escapeCharactersCallback);
        }), l = w.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", l, y, w), l;
      }), i.subParser("githubCodeBlocks", function(l, y, w) {
        return y.ghCodeBlocks ? (l = w.converter._dispatch("githubCodeBlocks.before", l, y, w), l += "¨0", l = l.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(k, M, z, R) {
          var L = y.omitExtraWLInCodeBlocks ? "" : `
`;
          return R = i.subParser("encodeCode")(R, y, w), R = i.subParser("detab")(R, y, w), R = R.replace(/^\n+/g, ""), R = R.replace(/\n+$/g, ""), R = "<pre><code" + (z ? ' class="' + z + " language-" + z + '"' : "") + ">" + R + L + "</code></pre>", R = i.subParser("hashBlock")(R, y, w), `

¨G` + (w.ghCodeBlocks.push({ text: k, codeblock: R }) - 1) + `G

`;
        }), l = l.replace(/¨0/, ""), w.converter._dispatch("githubCodeBlocks.after", l, y, w)) : l;
      }), i.subParser("hashBlock", function(l, y, w) {
        return l = w.converter._dispatch("hashBlock.before", l, y, w), l = l.replace(/(^\n+|\n+$)/g, ""), l = `

¨K` + (w.gHtmlBlocks.push(l) - 1) + `K

`, l = w.converter._dispatch("hashBlock.after", l, y, w), l;
      }), i.subParser("hashCodeTags", function(l, y, w) {
        l = w.converter._dispatch("hashCodeTags.before", l, y, w);
        var k = function(M, z, R, L) {
          var Z = R + i.subParser("encodeCode")(z, y, w) + L;
          return "¨C" + (w.gHtmlSpans.push(Z) - 1) + "C";
        };
        return l = i.helper.replaceRecursiveRegExp(l, k, "<code\\b[^>]*>", "</code>", "gim"), l = w.converter._dispatch("hashCodeTags.after", l, y, w), l;
      }), i.subParser("hashElement", function(l, y, w) {
        return function(k, M) {
          var z = M;
          return z = z.replace(/\n\n/g, `
`), z = z.replace(/^\n/, ""), z = z.replace(/\n+$/g, ""), z = `

¨K` + (w.gHtmlBlocks.push(z) - 1) + `K

`, z;
        };
      }), i.subParser("hashHTMLBlocks", function(l, y, w) {
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
        ], M = function(j, B, K, ae) {
          var I = j;
          return K.search(/\bmarkdown\b/) !== -1 && (I = K + w.converter.makeHtml(B) + ae), `

¨K` + (w.gHtmlBlocks.push(I) - 1) + `K

`;
        };
        y.backslashEscapesHTMLTags && (l = l.replace(/\\<(\/?[^>]+?)>/g, function(j, B) {
          return "&lt;" + B + "&gt;";
        }));
        for (var z = 0; z < k.length; ++z)
          for (var R, L = new RegExp("^ {0,3}(<" + k[z] + "\\b[^>]*>)", "im"), Z = "<" + k[z] + "\\b[^>]*>", F = "</" + k[z] + ">"; (R = i.helper.regexIndexOf(l, L)) !== -1; ) {
            var $ = i.helper.splitAtIndex(l, R), W = i.helper.replaceRecursiveRegExp($[1], M, Z, F, "im");
            if (W === $[1])
              break;
            l = $[0].concat(W);
          }
        return l = l.replace(
          /(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
          i.subParser("hashElement")(l, y, w)
        ), l = i.helper.replaceRecursiveRegExp(l, function(j) {
          return `

¨K` + (w.gHtmlBlocks.push(j) - 1) + `K

`;
        }, "^ {0,3}<!--", "-->", "gm"), l = l.replace(
          /(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
          i.subParser("hashElement")(l, y, w)
        ), l = w.converter._dispatch("hashHTMLBlocks.after", l, y, w), l;
      }), i.subParser("hashHTMLSpans", function(l, y, w) {
        l = w.converter._dispatch("hashHTMLSpans.before", l, y, w);
        function k(M) {
          return "¨C" + (w.gHtmlSpans.push(M) - 1) + "C";
        }
        return l = l.replace(/<[^>]+?\/>/gi, function(M) {
          return k(M);
        }), l = l.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function(M) {
          return k(M);
        }), l = l.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function(M) {
          return k(M);
        }), l = l.replace(/<[^>]+?>/gi, function(M) {
          return k(M);
        }), l = w.converter._dispatch("hashHTMLSpans.after", l, y, w), l;
      }), i.subParser("unhashHTMLSpans", function(l, y, w) {
        l = w.converter._dispatch("unhashHTMLSpans.before", l, y, w);
        for (var k = 0; k < w.gHtmlSpans.length; ++k) {
          for (var M = w.gHtmlSpans[k], z = 0; /¨C(\d+)C/.test(M); ) {
            var R = RegExp.$1;
            if (M = M.replace("¨C" + R + "C", w.gHtmlSpans[R]), z === 10) {
              console.error("maximum nesting of 10 spans reached!!!");
              break;
            }
            ++z;
          }
          l = l.replace("¨C" + k + "C", M);
        }
        return l = w.converter._dispatch("unhashHTMLSpans.after", l, y, w), l;
      }), i.subParser("hashPreCodeTags", function(l, y, w) {
        l = w.converter._dispatch("hashPreCodeTags.before", l, y, w);
        var k = function(M, z, R, L) {
          var Z = R + i.subParser("encodeCode")(z, y, w) + L;
          return `

¨G` + (w.ghCodeBlocks.push({ text: M, codeblock: Z }) - 1) + `G

`;
        };
        return l = i.helper.replaceRecursiveRegExp(l, k, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim"), l = w.converter._dispatch("hashPreCodeTags.after", l, y, w), l;
      }), i.subParser("headers", function(l, y, w) {
        l = w.converter._dispatch("headers.before", l, y, w);
        var k = isNaN(parseInt(y.headerLevelStart)) ? 1 : parseInt(y.headerLevelStart), M = y.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, z = y.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
        l = l.replace(M, function(Z, F) {
          var $ = i.subParser("spanGamut")(F, y, w), W = y.noHeaderId ? "" : ' id="' + L(F) + '"', j = k, B = "<h" + j + W + ">" + $ + "</h" + j + ">";
          return i.subParser("hashBlock")(B, y, w);
        }), l = l.replace(z, function(Z, F) {
          var $ = i.subParser("spanGamut")(F, y, w), W = y.noHeaderId ? "" : ' id="' + L(F) + '"', j = k + 1, B = "<h" + j + W + ">" + $ + "</h" + j + ">";
          return i.subParser("hashBlock")(B, y, w);
        });
        var R = y.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
        l = l.replace(R, function(Z, F, $) {
          var W = $;
          y.customizedHeaderId && (W = $.replace(/\s?\{([^{]+?)}\s*$/, ""));
          var j = i.subParser("spanGamut")(W, y, w), B = y.noHeaderId ? "" : ' id="' + L($) + '"', K = k - 1 + F.length, ae = "<h" + K + B + ">" + j + "</h" + K + ">";
          return i.subParser("hashBlock")(ae, y, w);
        });
        function L(Z) {
          var F, $;
          if (y.customizedHeaderId) {
            var W = Z.match(/\{([^{]+?)}\s*$/);
            W && W[1] && (Z = W[1]);
          }
          return F = Z, i.helper.isString(y.prefixHeaderId) ? $ = y.prefixHeaderId : y.prefixHeaderId === !0 ? $ = "section-" : $ = "", y.rawPrefixHeaderId || (F = $ + F), y.ghCompatibleHeaderId ? F = F.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase() : y.rawHeaderId ? F = F.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "¨").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase() : F = F.replace(/[^\w]/g, "").toLowerCase(), y.rawPrefixHeaderId && (F = $ + F), w.hashLinkCounts[F] ? F = F + "-" + w.hashLinkCounts[F]++ : w.hashLinkCounts[F] = 1, F;
        }
        return l = w.converter._dispatch("headers.after", l, y, w), l;
      }), i.subParser("horizontalRule", function(l, y, w) {
        l = w.converter._dispatch("horizontalRule.before", l, y, w);
        var k = i.subParser("hashBlock")("<hr />", y, w);
        return l = l.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, k), l = l.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, k), l = l.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, k), l = w.converter._dispatch("horizontalRule.after", l, y, w), l;
      }), i.subParser("images", function(l, y, w) {
        l = w.converter._dispatch("images.before", l, y, w);
        var k = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, M = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, z = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, R = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, L = /!\[([^\[\]]+)]()()()()()/g;
        function Z($, W, j, B, K, ae, I, Y) {
          return B = B.replace(/\s/g, ""), F($, W, j, B, K, ae, I, Y);
        }
        function F($, W, j, B, K, ae, I, Y) {
          var ce = w.gUrls, V = w.gTitles, U = w.gDimensions;
          if (j = j.toLowerCase(), Y || (Y = ""), $.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
            B = "";
          else if (B === "" || B === null)
            if ((j === "" || j === null) && (j = W.toLowerCase().replace(/ ?\n/g, " ")), B = "#" + j, !i.helper.isUndefined(ce[j]))
              B = ce[j], i.helper.isUndefined(V[j]) || (Y = V[j]), i.helper.isUndefined(U[j]) || (K = U[j].width, ae = U[j].height);
            else
              return $;
          W = W.replace(/"/g, "&quot;").replace(i.helper.regexes.asteriskDashAndColon, i.helper.escapeCharactersCallback), B = B.replace(i.helper.regexes.asteriskDashAndColon, i.helper.escapeCharactersCallback);
          var te = '<img src="' + B + '" alt="' + W + '"';
          return Y && i.helper.isString(Y) && (Y = Y.replace(/"/g, "&quot;").replace(i.helper.regexes.asteriskDashAndColon, i.helper.escapeCharactersCallback), te += ' title="' + Y + '"'), K && ae && (K = K === "*" ? "auto" : K, ae = ae === "*" ? "auto" : ae, te += ' width="' + K + '"', te += ' height="' + ae + '"'), te += " />", te;
        }
        return l = l.replace(R, F), l = l.replace(z, Z), l = l.replace(M, F), l = l.replace(k, F), l = l.replace(L, F), l = w.converter._dispatch("images.after", l, y, w), l;
      }), i.subParser("italicsAndBold", function(l, y, w) {
        l = w.converter._dispatch("italicsAndBold.before", l, y, w);
        function k(M, z, R) {
          return z + M + R;
        }
        return y.literalMidWordUnderscores ? (l = l.replace(/\b___(\S[\s\S]*?)___\b/g, function(M, z) {
          return k(z, "<strong><em>", "</em></strong>");
        }), l = l.replace(/\b__(\S[\s\S]*?)__\b/g, function(M, z) {
          return k(z, "<strong>", "</strong>");
        }), l = l.replace(/\b_(\S[\s\S]*?)_\b/g, function(M, z) {
          return k(z, "<em>", "</em>");
        })) : (l = l.replace(/___(\S[\s\S]*?)___/g, function(M, z) {
          return /\S$/.test(z) ? k(z, "<strong><em>", "</em></strong>") : M;
        }), l = l.replace(/__(\S[\s\S]*?)__/g, function(M, z) {
          return /\S$/.test(z) ? k(z, "<strong>", "</strong>") : M;
        }), l = l.replace(/_([^\s_][\s\S]*?)_/g, function(M, z) {
          return /\S$/.test(z) ? k(z, "<em>", "</em>") : M;
        })), y.literalMidWordAsterisks ? (l = l.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(M, z, R) {
          return k(R, z + "<strong><em>", "</em></strong>");
        }), l = l.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function(M, z, R) {
          return k(R, z + "<strong>", "</strong>");
        }), l = l.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function(M, z, R) {
          return k(R, z + "<em>", "</em>");
        })) : (l = l.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(M, z) {
          return /\S$/.test(z) ? k(z, "<strong><em>", "</em></strong>") : M;
        }), l = l.replace(/\*\*(\S[\s\S]*?)\*\*/g, function(M, z) {
          return /\S$/.test(z) ? k(z, "<strong>", "</strong>") : M;
        }), l = l.replace(/\*([^\s*][\s\S]*?)\*/g, function(M, z) {
          return /\S$/.test(z) ? k(z, "<em>", "</em>") : M;
        })), l = w.converter._dispatch("italicsAndBold.after", l, y, w), l;
      }), i.subParser("lists", function(l, y, w) {
        function k(R, L) {
          w.gListLevel++, R = R.replace(/\n{2,}$/, `
`), R += "¨0";
          var Z = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm, F = /\n[ \t]*\n(?!¨0)/.test(R);
          return y.disableForced4SpacesIndentedSublists && (Z = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm), R = R.replace(Z, function($, W, j, B, K, ae, I) {
            I = I && I.trim() !== "";
            var Y = i.subParser("outdent")(K, y, w), ce = "";
            return ae && y.tasklists && (ce = ' class="task-list-item" style="list-style-type: none;"', Y = Y.replace(/^[ \t]*\[(x|X| )?]/m, function() {
              var V = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
              return I && (V += " checked"), V += ">", V;
            })), Y = Y.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(V) {
              return "¨A" + V;
            }), W || Y.search(/\n{2,}/) > -1 ? (Y = i.subParser("githubCodeBlocks")(Y, y, w), Y = i.subParser("blockGamut")(Y, y, w)) : (Y = i.subParser("lists")(Y, y, w), Y = Y.replace(/\n$/, ""), Y = i.subParser("hashHTMLBlocks")(Y, y, w), Y = Y.replace(/\n\n+/g, `

`), F ? Y = i.subParser("paragraphs")(Y, y, w) : Y = i.subParser("spanGamut")(Y, y, w)), Y = Y.replace("¨A", ""), Y = "<li" + ce + ">" + Y + `</li>
`, Y;
          }), R = R.replace(/¨0/g, ""), w.gListLevel--, L && (R = R.replace(/\s+$/, "")), R;
        }
        function M(R, L) {
          if (L === "ol") {
            var Z = R.match(/^ *(\d+)\./);
            if (Z && Z[1] !== "1")
              return ' start="' + Z[1] + '"';
          }
          return "";
        }
        function z(R, L, Z) {
          var F = y.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm, $ = y.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm, W = L === "ul" ? F : $, j = "";
          if (R.search(W) !== -1)
            (function K(ae) {
              var I = ae.search(W), Y = M(R, L);
              I !== -1 ? (j += `

<` + L + Y + `>
` + k(ae.slice(0, I), !!Z) + "</" + L + `>
`, L = L === "ul" ? "ol" : "ul", W = L === "ul" ? F : $, K(ae.slice(I))) : j += `

<` + L + Y + `>
` + k(ae, !!Z) + "</" + L + `>
`;
            })(R);
          else {
            var B = M(R, L);
            j = `

<` + L + B + `>
` + k(R, !!Z) + "</" + L + `>
`;
          }
          return j;
        }
        return l = w.converter._dispatch("lists.before", l, y, w), l += "¨0", w.gListLevel ? l = l.replace(
          /^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
          function(R, L, Z) {
            var F = Z.search(/[*+-]/g) > -1 ? "ul" : "ol";
            return z(L, F, !0);
          }
        ) : l = l.replace(
          /(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
          function(R, L, Z, F) {
            var $ = F.search(/[*+-]/g) > -1 ? "ul" : "ol";
            return z(Z, $, !1);
          }
        ), l = l.replace(/¨0/, ""), l = w.converter._dispatch("lists.after", l, y, w), l;
      }), i.subParser("metadata", function(l, y, w) {
        if (!y.metadata)
          return l;
        l = w.converter._dispatch("metadata.before", l, y, w);
        function k(M) {
          w.metadata.raw = M, M = M.replace(/&/g, "&amp;").replace(/"/g, "&quot;"), M = M.replace(/\n {4}/g, " "), M.replace(/^([\S ]+): +([\s\S]+?)$/gm, function(z, R, L) {
            return w.metadata.parsed[R] = L, "";
          });
        }
        return l = l.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(M, z, R) {
          return k(R), "¨M";
        }), l = l.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(M, z, R) {
          return z && (w.metadata.format = z), k(R), "¨M";
        }), l = l.replace(/¨M/g, ""), l = w.converter._dispatch("metadata.after", l, y, w), l;
      }), i.subParser("outdent", function(l, y, w) {
        return l = w.converter._dispatch("outdent.before", l, y, w), l = l.replace(/^(\t|[ ]{1,4})/gm, "¨0"), l = l.replace(/¨0/g, ""), l = w.converter._dispatch("outdent.after", l, y, w), l;
      }), i.subParser("paragraphs", function(l, y, w) {
        l = w.converter._dispatch("paragraphs.before", l, y, w), l = l.replace(/^\n+/g, ""), l = l.replace(/\n+$/g, "");
        for (var k = l.split(/\n{2,}/g), M = [], z = k.length, R = 0; R < z; R++) {
          var L = k[R];
          L.search(/¨(K|G)(\d+)\1/g) >= 0 ? M.push(L) : L.search(/\S/) >= 0 && (L = i.subParser("spanGamut")(L, y, w), L = L.replace(/^([ \t]*)/g, "<p>"), L += "</p>", M.push(L));
        }
        for (z = M.length, R = 0; R < z; R++) {
          for (var Z = "", F = M[R], $ = !1; /¨(K|G)(\d+)\1/.test(F); ) {
            var W = RegExp.$1, j = RegExp.$2;
            W === "K" ? Z = w.gHtmlBlocks[j] : $ ? Z = i.subParser("encodeCode")(w.ghCodeBlocks[j].text, y, w) : Z = w.ghCodeBlocks[j].codeblock, Z = Z.replace(/\$/g, "$$$$"), F = F.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, Z), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(F) && ($ = !0);
          }
          M[R] = F;
        }
        return l = M.join(`
`), l = l.replace(/^\n+/g, ""), l = l.replace(/\n+$/g, ""), w.converter._dispatch("paragraphs.after", l, y, w);
      }), i.subParser("runExtension", function(l, y, w, k) {
        if (l.filter)
          y = l.filter(y, k.converter, w);
        else if (l.regex) {
          var M = l.regex;
          M instanceof RegExp || (M = new RegExp(M, "g")), y = y.replace(M, l.replace);
        }
        return y;
      }), i.subParser("spanGamut", function(l, y, w) {
        return l = w.converter._dispatch("spanGamut.before", l, y, w), l = i.subParser("codeSpans")(l, y, w), l = i.subParser("escapeSpecialCharsWithinTagAttributes")(l, y, w), l = i.subParser("encodeBackslashEscapes")(l, y, w), l = i.subParser("images")(l, y, w), l = i.subParser("anchors")(l, y, w), l = i.subParser("autoLinks")(l, y, w), l = i.subParser("simplifiedAutoLinks")(l, y, w), l = i.subParser("emoji")(l, y, w), l = i.subParser("underline")(l, y, w), l = i.subParser("italicsAndBold")(l, y, w), l = i.subParser("strikethrough")(l, y, w), l = i.subParser("ellipsis")(l, y, w), l = i.subParser("hashHTMLSpans")(l, y, w), l = i.subParser("encodeAmpsAndAngles")(l, y, w), y.simpleLineBreaks ? /\n\n¨K/.test(l) || (l = l.replace(/\n+/g, `<br />
`)) : l = l.replace(/  +\n/g, `<br />
`), l = w.converter._dispatch("spanGamut.after", l, y, w), l;
      }), i.subParser("strikethrough", function(l, y, w) {
        function k(M) {
          return y.simplifiedAutoLink && (M = i.subParser("simplifiedAutoLinks")(M, y, w)), "<del>" + M + "</del>";
        }
        return y.strikethrough && (l = w.converter._dispatch("strikethrough.before", l, y, w), l = l.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(M, z) {
          return k(z);
        }), l = w.converter._dispatch("strikethrough.after", l, y, w)), l;
      }), i.subParser("stripLinkDefinitions", function(l, y, w) {
        var k = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, M = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
        l += "¨0";
        var z = function(R, L, Z, F, $, W, j) {
          return L = L.toLowerCase(), l.toLowerCase().split(L).length - 1 < 2 ? R : (Z.match(/^data:.+?\/.+?;base64,/) ? w.gUrls[L] = Z.replace(/\s/g, "") : w.gUrls[L] = i.subParser("encodeAmpsAndAngles")(Z, y, w), W ? W + j : (j && (w.gTitles[L] = j.replace(/"|'/g, "&quot;")), y.parseImgDimensions && F && $ && (w.gDimensions[L] = {
            width: F,
            height: $
          }), ""));
        };
        return l = l.replace(M, z), l = l.replace(k, z), l = l.replace(/¨0/, ""), l;
      }), i.subParser("tables", function(l, y, w) {
        if (!y.tables)
          return l;
        var k = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, M = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
        function z($) {
          return /^:[ \t]*--*$/.test($) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test($) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test($) ? ' style="text-align:center;"' : "";
        }
        function R($, W) {
          var j = "";
          return $ = $.trim(), (y.tablesHeaderId || y.tableHeaderId) && (j = ' id="' + $.replace(/ /g, "_").toLowerCase() + '"'), $ = i.subParser("spanGamut")($, y, w), "<th" + j + W + ">" + $ + `</th>
`;
        }
        function L($, W) {
          var j = i.subParser("spanGamut")($, y, w);
          return "<td" + W + ">" + j + `</td>
`;
        }
        function Z($, W) {
          for (var j = `<table>
<thead>
<tr>
`, B = $.length, K = 0; K < B; ++K)
            j += $[K];
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
        function F($) {
          var W, j = $.split(`
`);
          for (W = 0; W < j.length; ++W)
            /^ {0,3}\|/.test(j[W]) && (j[W] = j[W].replace(/^ {0,3}\|/, "")), /\|[ \t]*$/.test(j[W]) && (j[W] = j[W].replace(/\|[ \t]*$/, "")), j[W] = i.subParser("codeSpans")(j[W], y, w);
          var B = j[0].split("|").map(function(te) {
            return te.trim();
          }), K = j[1].split("|").map(function(te) {
            return te.trim();
          }), ae = [], I = [], Y = [], ce = [];
          for (j.shift(), j.shift(), W = 0; W < j.length; ++W)
            j[W].trim() !== "" && ae.push(
              j[W].split("|").map(function(te) {
                return te.trim();
              })
            );
          if (B.length < K.length)
            return $;
          for (W = 0; W < K.length; ++W)
            Y.push(z(K[W]));
          for (W = 0; W < B.length; ++W)
            i.helper.isUndefined(Y[W]) && (Y[W] = ""), I.push(R(B[W], Y[W]));
          for (W = 0; W < ae.length; ++W) {
            for (var V = [], U = 0; U < I.length; ++U)
              i.helper.isUndefined(ae[W][U]), V.push(L(ae[W][U], Y[U]));
            ce.push(V);
          }
          return Z(I, ce);
        }
        return l = w.converter._dispatch("tables.before", l, y, w), l = l.replace(/\\(\|)/g, i.helper.escapeCharactersCallback), l = l.replace(k, F), l = l.replace(M, F), l = w.converter._dispatch("tables.after", l, y, w), l;
      }), i.subParser("underline", function(l, y, w) {
        return y.underline && (l = w.converter._dispatch("underline.before", l, y, w), y.literalMidWordUnderscores ? (l = l.replace(/\b___(\S[\s\S]*?)___\b/g, function(k, M) {
          return "<u>" + M + "</u>";
        }), l = l.replace(/\b__(\S[\s\S]*?)__\b/g, function(k, M) {
          return "<u>" + M + "</u>";
        })) : (l = l.replace(/___(\S[\s\S]*?)___/g, function(k, M) {
          return /\S$/.test(M) ? "<u>" + M + "</u>" : k;
        }), l = l.replace(/__(\S[\s\S]*?)__/g, function(k, M) {
          return /\S$/.test(M) ? "<u>" + M + "</u>" : k;
        })), l = l.replace(/(_)/g, i.helper.escapeCharactersCallback), l = w.converter._dispatch("underline.after", l, y, w)), l;
      }), i.subParser("unescapeSpecialChars", function(l, y, w) {
        return l = w.converter._dispatch("unescapeSpecialChars.before", l, y, w), l = l.replace(/¨E(\d+)E/g, function(k, M) {
          var z = parseInt(M);
          return String.fromCharCode(z);
        }), l = w.converter._dispatch("unescapeSpecialChars.after", l, y, w), l;
      }), i.subParser("makeMarkdown.blockquote", function(l, y) {
        var w = "";
        if (l.hasChildNodes())
          for (var k = l.childNodes, M = k.length, z = 0; z < M; ++z) {
            var R = i.subParser("makeMarkdown.node")(k[z], y);
            R !== "" && (w += R);
          }
        return w = w.trim(), w = "> " + w.split(`
`).join(`
> `), w;
      }), i.subParser("makeMarkdown.codeBlock", function(l, y) {
        var w = l.getAttribute("language"), k = l.getAttribute("precodenum");
        return "```" + w + `
` + y.preList[k] + "\n```";
      }), i.subParser("makeMarkdown.codeSpan", function(l) {
        return "`" + l.innerHTML + "`";
      }), i.subParser("makeMarkdown.emphasis", function(l, y) {
        var w = "";
        if (l.hasChildNodes()) {
          w += "*";
          for (var k = l.childNodes, M = k.length, z = 0; z < M; ++z)
            w += i.subParser("makeMarkdown.node")(k[z], y);
          w += "*";
        }
        return w;
      }), i.subParser("makeMarkdown.header", function(l, y, w) {
        var k = new Array(w + 1).join("#"), M = "";
        if (l.hasChildNodes()) {
          M = k + " ";
          for (var z = l.childNodes, R = z.length, L = 0; L < R; ++L)
            M += i.subParser("makeMarkdown.node")(z[L], y);
        }
        return M;
      }), i.subParser("makeMarkdown.hr", function() {
        return "---";
      }), i.subParser("makeMarkdown.image", function(l) {
        var y = "";
        return l.hasAttribute("src") && (y += "![" + l.getAttribute("alt") + "](", y += "<" + l.getAttribute("src") + ">", l.hasAttribute("width") && l.hasAttribute("height") && (y += " =" + l.getAttribute("width") + "x" + l.getAttribute("height")), l.hasAttribute("title") && (y += ' "' + l.getAttribute("title") + '"'), y += ")"), y;
      }), i.subParser("makeMarkdown.links", function(l, y) {
        var w = "";
        if (l.hasChildNodes() && l.hasAttribute("href")) {
          var k = l.childNodes, M = k.length;
          w = "[";
          for (var z = 0; z < M; ++z)
            w += i.subParser("makeMarkdown.node")(k[z], y);
          w += "](", w += "<" + l.getAttribute("href") + ">", l.hasAttribute("title") && (w += ' "' + l.getAttribute("title") + '"'), w += ")";
        }
        return w;
      }), i.subParser("makeMarkdown.list", function(l, y, w) {
        var k = "";
        if (!l.hasChildNodes())
          return "";
        for (var M = l.childNodes, z = M.length, R = l.getAttribute("start") || 1, L = 0; L < z; ++L)
          if (!(typeof M[L].tagName > "u" || M[L].tagName.toLowerCase() !== "li")) {
            var Z = "";
            w === "ol" ? Z = R.toString() + ". " : Z = "- ", k += Z + i.subParser("makeMarkdown.listItem")(M[L], y), ++R;
          }
        return k += `
<!-- -->
`, k.trim();
      }), i.subParser("makeMarkdown.listItem", function(l, y) {
        for (var w = "", k = l.childNodes, M = k.length, z = 0; z < M; ++z)
          w += i.subParser("makeMarkdown.node")(k[z], y);
        return /\n$/.test(w) ? w = w.split(`
`).join(`
    `).replace(/^ {4}$/gm, "").replace(/\n\n+/g, `

`) : w += `
`, w;
      }), i.subParser("makeMarkdown.node", function(l, y, w) {
        w = w || !1;
        var k = "";
        if (l.nodeType === 3)
          return i.subParser("makeMarkdown.txt")(l, y);
        if (l.nodeType === 8)
          return "<!--" + l.data + `-->

`;
        if (l.nodeType !== 1)
          return "";
        var M = l.tagName.toLowerCase();
        switch (M) {
          //
          // BLOCKS
          //
          case "h1":
            w || (k = i.subParser("makeMarkdown.header")(l, y, 1) + `

`);
            break;
          case "h2":
            w || (k = i.subParser("makeMarkdown.header")(l, y, 2) + `

`);
            break;
          case "h3":
            w || (k = i.subParser("makeMarkdown.header")(l, y, 3) + `

`);
            break;
          case "h4":
            w || (k = i.subParser("makeMarkdown.header")(l, y, 4) + `

`);
            break;
          case "h5":
            w || (k = i.subParser("makeMarkdown.header")(l, y, 5) + `

`);
            break;
          case "h6":
            w || (k = i.subParser("makeMarkdown.header")(l, y, 6) + `

`);
            break;
          case "p":
            w || (k = i.subParser("makeMarkdown.paragraph")(l, y) + `

`);
            break;
          case "blockquote":
            w || (k = i.subParser("makeMarkdown.blockquote")(l, y) + `

`);
            break;
          case "hr":
            w || (k = i.subParser("makeMarkdown.hr")(l, y) + `

`);
            break;
          case "ol":
            w || (k = i.subParser("makeMarkdown.list")(l, y, "ol") + `

`);
            break;
          case "ul":
            w || (k = i.subParser("makeMarkdown.list")(l, y, "ul") + `

`);
            break;
          case "precode":
            w || (k = i.subParser("makeMarkdown.codeBlock")(l, y) + `

`);
            break;
          case "pre":
            w || (k = i.subParser("makeMarkdown.pre")(l, y) + `

`);
            break;
          case "table":
            w || (k = i.subParser("makeMarkdown.table")(l, y) + `

`);
            break;
          //
          // SPANS
          //
          case "code":
            k = i.subParser("makeMarkdown.codeSpan")(l, y);
            break;
          case "em":
          case "i":
            k = i.subParser("makeMarkdown.emphasis")(l, y);
            break;
          case "strong":
          case "b":
            k = i.subParser("makeMarkdown.strong")(l, y);
            break;
          case "del":
            k = i.subParser("makeMarkdown.strikethrough")(l, y);
            break;
          case "a":
            k = i.subParser("makeMarkdown.links")(l, y);
            break;
          case "img":
            k = i.subParser("makeMarkdown.image")(l, y);
            break;
          default:
            k = l.outerHTML + `

`;
        }
        return k;
      }), i.subParser("makeMarkdown.paragraph", function(l, y) {
        var w = "";
        if (l.hasChildNodes())
          for (var k = l.childNodes, M = k.length, z = 0; z < M; ++z)
            w += i.subParser("makeMarkdown.node")(k[z], y);
        return w = w.trim(), w;
      }), i.subParser("makeMarkdown.pre", function(l, y) {
        var w = l.getAttribute("prenum");
        return "<pre>" + y.preList[w] + "</pre>";
      }), i.subParser("makeMarkdown.strikethrough", function(l, y) {
        var w = "";
        if (l.hasChildNodes()) {
          w += "~~";
          for (var k = l.childNodes, M = k.length, z = 0; z < M; ++z)
            w += i.subParser("makeMarkdown.node")(k[z], y);
          w += "~~";
        }
        return w;
      }), i.subParser("makeMarkdown.strong", function(l, y) {
        var w = "";
        if (l.hasChildNodes()) {
          w += "**";
          for (var k = l.childNodes, M = k.length, z = 0; z < M; ++z)
            w += i.subParser("makeMarkdown.node")(k[z], y);
          w += "**";
        }
        return w;
      }), i.subParser("makeMarkdown.table", function(l, y) {
        var w = "", k = [[], []], M = l.querySelectorAll("thead>tr>th"), z = l.querySelectorAll("tbody>tr"), R, L;
        for (R = 0; R < M.length; ++R) {
          var Z = i.subParser("makeMarkdown.tableCell")(M[R], y), F = "---";
          if (M[R].hasAttribute("style")) {
            var $ = M[R].getAttribute("style").toLowerCase().replace(/\s/g, "");
            switch ($) {
              case "text-align:left;":
                F = ":---";
                break;
              case "text-align:right;":
                F = "---:";
                break;
              case "text-align:center;":
                F = ":---:";
                break;
            }
          }
          k[0][R] = Z.trim(), k[1][R] = F;
        }
        for (R = 0; R < z.length; ++R) {
          var W = k.push([]) - 1, j = z[R].getElementsByTagName("td");
          for (L = 0; L < M.length; ++L) {
            var B = " ";
            typeof j[L] < "u" && (B = i.subParser("makeMarkdown.tableCell")(j[L], y)), k[W].push(B);
          }
        }
        var K = 3;
        for (R = 0; R < k.length; ++R)
          for (L = 0; L < k[R].length; ++L) {
            var ae = k[R][L].length;
            ae > K && (K = ae);
          }
        for (R = 0; R < k.length; ++R) {
          for (L = 0; L < k[R].length; ++L)
            R === 1 ? k[R][L].slice(-1) === ":" ? k[R][L] = i.helper.padEnd(k[R][L].slice(-1), K - 1, "-") + ":" : k[R][L] = i.helper.padEnd(k[R][L], K, "-") : k[R][L] = i.helper.padEnd(k[R][L], K);
          w += "| " + k[R].join(" | ") + ` |
`;
        }
        return w.trim();
      }), i.subParser("makeMarkdown.tableCell", function(l, y) {
        var w = "";
        if (!l.hasChildNodes())
          return "";
        for (var k = l.childNodes, M = k.length, z = 0; z < M; ++z)
          w += i.subParser("makeMarkdown.node")(k[z], y, !0);
        return w.trim();
      }), i.subParser("makeMarkdown.txt", function(l) {
        var y = l.nodeValue;
        return y = y.replace(/ +/g, " "), y = y.replace(/¨NBSP;/g, " "), y = i.helper.unescapeHTMLEntities(y), y = y.replace(/([*_~|`])/g, "\\$1"), y = y.replace(/^(\s*)>/g, "\\$1>"), y = y.replace(/^#/gm, "\\#"), y = y.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3"), y = y.replace(/^( {0,3}\d+)\./gm, "$1\\."), y = y.replace(/^( {0,3})([+-])/gm, "$1\\$2"), y = y.replace(/]([\s]*)\(/g, "\\]$1\\("), y = y.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:"), y;
      });
      var P = this;
      n.exports ? n.exports = i : P.showdown = i;
    }).call(YS);
  })(gl)), gl.exports;
}
var FS = XS();
const QS = /* @__PURE__ */ Ff(FS);
var na = (
  /** @class */
  (function() {
    function n() {
    }
    return n.prototype.diff = function(r, s, i) {
      i === void 0 && (i = {});
      var u;
      typeof i == "function" ? (u = i, i = {}) : "callback" in i && (u = i.callback);
      var c = this.castInput(r, i), f = this.castInput(s, i), m = this.removeEmpty(this.tokenize(c, i)), p = this.removeEmpty(this.tokenize(f, i));
      return this.diffWithOptionsObj(m, p, i, u);
    }, n.prototype.diffWithOptionsObj = function(r, s, i, u) {
      var c = this, f, m = function(l) {
        if (l = c.postProcess(l, i), u) {
          setTimeout(function() {
            u(l);
          }, 0);
          return;
        } else
          return l;
      }, p = s.length, _ = r.length, g = 1, E = p + _;
      i.maxEditLength != null && (E = Math.min(E, i.maxEditLength));
      var v = (f = i.timeout) !== null && f !== void 0 ? f : 1 / 0, S = Date.now() + v, h = [{ oldPos: -1, lastComponent: void 0 }], C = this.extractCommon(h[0], s, r, 0, i);
      if (h[0].oldPos + 1 >= _ && C + 1 >= p)
        return m(this.buildValues(h[0].lastComponent, s, r));
      var x = -1 / 0, O = 1 / 0, N = function() {
        for (var l = Math.max(x, -g); l <= Math.min(O, g); l += 2) {
          var y = void 0, w = h[l - 1], k = h[l + 1];
          w && (h[l - 1] = void 0);
          var M = !1;
          if (k) {
            var z = k.oldPos - l;
            M = k && 0 <= z && z < p;
          }
          var R = w && w.oldPos + 1 < _;
          if (!M && !R) {
            h[l] = void 0;
            continue;
          }
          if (!R || M && w.oldPos < k.oldPos ? y = c.addToPath(k, !0, !1, 0, i) : y = c.addToPath(w, !1, !0, 1, i), C = c.extractCommon(y, s, r, l, i), y.oldPos + 1 >= _ && C + 1 >= p)
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
            N() || l();
          }, 0);
        })();
      else
        for (; g <= E && Date.now() <= S; ) {
          var P = N();
          if (P)
            return P;
        }
    }, n.prototype.addToPath = function(r, s, i, u, c) {
      var f = r.lastComponent;
      return f && !c.oneChangePerToken && f.added === s && f.removed === i ? {
        oldPos: r.oldPos + u,
        lastComponent: { count: f.count + 1, added: s, removed: i, previousComponent: f.previousComponent }
      } : {
        oldPos: r.oldPos + u,
        lastComponent: { count: 1, added: s, removed: i, previousComponent: f }
      };
    }, n.prototype.extractCommon = function(r, s, i, u, c) {
      for (var f = s.length, m = i.length, p = r.oldPos, _ = p - u, g = 0; _ + 1 < f && p + 1 < m && this.equals(i[p + 1], s[_ + 1], c); )
        _++, p++, g++, c.oneChangePerToken && (r.lastComponent = { count: 1, previousComponent: r.lastComponent, added: !1, removed: !1 });
      return g && !c.oneChangePerToken && (r.lastComponent = { count: g, previousComponent: r.lastComponent, added: !1, removed: !1 }), r.oldPos = p, _;
    }, n.prototype.equals = function(r, s, i) {
      return i.comparator ? i.comparator(r, s) : r === s || !!i.ignoreCase && r.toLowerCase() === s.toLowerCase();
    }, n.prototype.removeEmpty = function(r) {
      for (var s = [], i = 0; i < r.length; i++)
        r[i] && s.push(r[i]);
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
    }), n.prototype.buildValues = function(r, s, i) {
      for (var u = [], c; r; )
        u.push(r), c = r.previousComponent, delete r.previousComponent, r = c;
      u.reverse();
      for (var f = u.length, m = 0, p = 0, _ = 0; m < f; m++) {
        var g = u[m];
        if (g.removed)
          g.value = this.join(i.slice(_, _ + g.count)), _ += g.count;
        else {
          if (!g.added && this.useLongestToken) {
            var E = s.slice(p, p + g.count);
            E = E.map(function(v, S) {
              var h = i[_ + S];
              return h.length > v.length ? h : v;
            }), g.value = this.join(E);
          } else
            g.value = this.join(s.slice(p, p + g.count));
          p += g.count, g.added || (_ += g.count);
        }
      }
      return u;
    }, n;
  })()
), KS = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, u) {
      i.__proto__ = u;
    } || function(i, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (i[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function i() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (i.prototype = s.prototype, new i());
  };
})(), JS = (
  /** @class */
  (function(n) {
    KS(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r;
  })(na)
);
new JS();
function Oy(n, r) {
  var s;
  for (s = 0; s < n.length && s < r.length; s++)
    if (n[s] != r[s])
      return n.slice(0, s);
  return n.slice(0, s);
}
function My(n, r) {
  var s;
  if (!n || !r || n[n.length - 1] != r[r.length - 1])
    return "";
  for (s = 0; s < n.length && s < r.length; s++)
    if (n[n.length - (s + 1)] != r[r.length - (s + 1)])
      return n.slice(-s);
  return n.slice(-s);
}
function Lf(n, r, s) {
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
function Ys(n, r) {
  return Lf(n, r, "");
}
function al(n, r) {
  return If(n, r, "");
}
function jy(n, r) {
  return r.slice(0, WS(n, r));
}
function WS(n, r) {
  var s = 0;
  n.length > r.length && (s = n.length - r.length);
  var i = r.length;
  n.length < r.length && (i = n.length);
  var u = Array(i), c = 0;
  u[0] = 0;
  for (var f = 1; f < i; f++) {
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
function Xs(n) {
  var r;
  for (r = n.length - 1; r >= 0 && n[r].match(/\s/); r--)
    ;
  return n.substring(r + 1);
}
function Qr(n) {
  var r = n.match(/^\s*/);
  return r ? r[0] : "";
}
var F0 = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, u) {
      i.__proto__ = u;
    } || function(i, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (i[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function i() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (i.prototype = s.prototype, new i());
  };
})(), Al = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", ew = new RegExp("[".concat(Al, "]+|\\s+|[^").concat(Al, "]"), "ug"), tw = (
  /** @class */
  (function(n) {
    F0(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.equals = function(s, i, u) {
      return u.ignoreCase && (s = s.toLowerCase(), i = i.toLowerCase()), s.trim() === i.trim();
    }, r.prototype.tokenize = function(s, i) {
      i === void 0 && (i = {});
      var u;
      if (i.intlSegmenter) {
        var c = i.intlSegmenter;
        if (c.resolvedOptions().granularity != "word")
          throw new Error('The segmenter passed must have a granularity of "word"');
        u = Array.from(c.segment(s), function(p) {
          return p.segment;
        });
      } else
        u = s.match(ew) || [];
      var f = [], m = null;
      return u.forEach(function(p) {
        /\s/.test(p) ? m == null ? f.push(p) : f.push(f.pop() + p) : m != null && /\s/.test(m) ? f[f.length - 1] == m ? f.push(f.pop() + p) : f.push(m + p) : f.push(p), m = p;
      }), f;
    }, r.prototype.join = function(s) {
      return s.map(function(i, u) {
        return u == 0 ? i : i.replace(/^\s+/, "");
      }).join("");
    }, r.prototype.postProcess = function(s, i) {
      if (!s || i.oneChangePerToken)
        return s;
      var u = null, c = null, f = null;
      return s.forEach(function(m) {
        m.added ? c = m : m.removed ? f = m : ((c || f) && Ry(u, f, c, m), u = m, c = null, f = null);
      }), (c || f) && Ry(u, f, c, null), s;
    }, r;
  })(na)
), nw = new tw();
function Q0(n, r, s) {
  return nw.diff(n, r, s);
}
function Ry(n, r, s, i) {
  if (r && s) {
    var u = Qr(r.value), c = Xs(r.value), f = Qr(s.value), m = Xs(s.value);
    if (n) {
      var p = Oy(u, f);
      n.value = If(n.value, f, p), r.value = Ys(r.value, p), s.value = Ys(s.value, p);
    }
    if (i) {
      var _ = My(c, m);
      i.value = Lf(i.value, m, _), r.value = al(r.value, _), s.value = al(s.value, _);
    }
  } else if (s) {
    if (n) {
      var g = Qr(s.value);
      s.value = s.value.substring(g.length);
    }
    if (i) {
      var g = Qr(i.value);
      i.value = i.value.substring(g.length);
    }
  } else if (n && i) {
    var E = Qr(i.value), v = Qr(r.value), S = Xs(r.value), h = Oy(E, v);
    r.value = Ys(r.value, h);
    var C = My(Ys(E, h), S);
    r.value = al(r.value, C), i.value = Lf(i.value, E, C), n.value = If(n.value, E, E.slice(0, E.length - C.length));
  } else if (i) {
    var x = Qr(i.value), O = Xs(r.value), N = jy(O, x);
    r.value = al(r.value, N);
  } else if (n) {
    var P = Xs(n.value), l = Qr(r.value), N = jy(P, l);
    r.value = Ys(r.value, N);
  }
}
var rw = (
  /** @class */
  (function(n) {
    F0(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      var i = new RegExp("(\\r?\\n)|[".concat(Al, "]+|[^\\S\\n\\r]+|[^").concat(Al, "]"), "ug");
      return s.match(i) || [];
    }, r;
  })(na)
);
new rw();
var aw = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, u) {
      i.__proto__ = u;
    } || function(i, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (i[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function i() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (i.prototype = s.prototype, new i());
  };
})(), iw = (
  /** @class */
  (function(n) {
    aw(r, n);
    function r() {
      var s = n !== null && n.apply(this, arguments) || this;
      return s.tokenize = K0, s;
    }
    return r.prototype.equals = function(s, i, u) {
      return u.ignoreWhitespace ? ((!u.newlineIsToken || !s.includes(`
`)) && (s = s.trim()), (!u.newlineIsToken || !i.includes(`
`)) && (i = i.trim())) : u.ignoreNewlineAtEof && !u.newlineIsToken && (s.endsWith(`
`) && (s = s.slice(0, -1)), i.endsWith(`
`) && (i = i.slice(0, -1))), n.prototype.equals.call(this, s, i, u);
    }, r;
  })(na)
);
new iw();
function K0(n, r) {
  r.stripTrailingCr && (n = n.replace(/\r\n/g, `
`));
  var s = [], i = n.split(/(\n|\r\n)/);
  i[i.length - 1] || i.pop();
  for (var u = 0; u < i.length; u++) {
    var c = i[u];
    u % 2 && !r.newlineIsToken ? s[s.length - 1] += c : s.push(c);
  }
  return s;
}
var sw = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, u) {
      i.__proto__ = u;
    } || function(i, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (i[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function i() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (i.prototype = s.prototype, new i());
  };
})(), ow = (
  /** @class */
  (function(n) {
    sw(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      return s.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(na)
);
new ow();
var uw = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, u) {
      i.__proto__ = u;
    } || function(i, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (i[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function i() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (i.prototype = s.prototype, new i());
  };
})(), lw = (
  /** @class */
  (function(n) {
    uw(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      return s.split(/([{}:;,]|\s+)/);
    }, r;
  })(na)
);
new lw();
var cw = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, u) {
      i.__proto__ = u;
    } || function(i, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (i[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function i() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (i.prototype = s.prototype, new i());
  };
})(), dw = (
  /** @class */
  (function(n) {
    cw(r, n);
    function r() {
      var s = n !== null && n.apply(this, arguments) || this;
      return s.tokenize = K0, s;
    }
    return Object.defineProperty(r.prototype, "useLongestToken", {
      get: function() {
        return !0;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.castInput = function(s, i) {
      var u = i.undefinedReplacement, c = i.stringifyReplacer, f = c === void 0 ? function(m, p) {
        return typeof p > "u" ? u : p;
      } : c;
      return typeof s == "string" ? s : JSON.stringify(Bf(s, null, null, f), null, "  ");
    }, r.prototype.equals = function(s, i, u) {
      return n.prototype.equals.call(this, s.replace(/,([\r\n])/g, "$1"), i.replace(/,([\r\n])/g, "$1"), u);
    }, r;
  })(na)
);
new dw();
function Bf(n, r, s, i, u) {
  r = r || [], s = s || [], i && (n = i(u === void 0 ? "" : u, n));
  var c;
  for (c = 0; c < r.length; c += 1)
    if (r[c] === n)
      return s[c];
  var f;
  if (Object.prototype.toString.call(n) === "[object Array]") {
    for (r.push(n), f = new Array(n.length), s.push(f), c = 0; c < n.length; c += 1)
      f[c] = Bf(n[c], r, s, i, String(c));
    return r.pop(), s.pop(), f;
  }
  if (n && n.toJSON && (n = n.toJSON()), typeof n == "object" && n !== null) {
    r.push(n), f = {}, s.push(f);
    var m = [], p;
    for (p in n)
      Object.prototype.hasOwnProperty.call(n, p) && m.push(p);
    for (m.sort(), c = 0; c < m.length; c += 1)
      p = m[c], f[p] = Bf(n[p], r, s, i, p);
    r.pop(), s.pop();
  } else
    f = n;
  return f;
}
var fw = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, u) {
      i.__proto__ = u;
    } || function(i, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (i[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function i() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (i.prototype = s.prototype, new i());
  };
})(), hw = (
  /** @class */
  (function(n) {
    fw(r, n);
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
new hw();
const pw = ({ originalEntry: n, newEntry: r }) => {
  const s = ie.useMemo(() => {
    const i = Q0(n.content, r.content);
    let u = "", c = "";
    return i.forEach((f) => {
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
}, mw = SillyTavern.getContext(), gw = ie.forwardRef(({ entry: n, initialRegexIds: r }, s) => {
  const [i, u] = ie.useState([]), [c, f] = ie.useState(n.comment), [m, p] = ie.useState(n.key.join(", ")), [_, g] = ie.useState(n.content), [E, v] = ie.useState([]);
  ie.useEffect(() => {
    const O = mw.extensionSettings.regex ?? [];
    u(O);
    const N = Object.entries(r).map(([P, l]) => {
      const y = O.find((w) => w.id === P);
      return y ? { id: y.id, label: y.scriptName, enabled: !l?.disabled } : null;
    }).filter((P) => P !== null);
    v(N);
  }, [r]), ie.useImperativeHandle(s, () => ({
    getFormData: () => {
      const O = {
        ...n,
        comment: c.trim(),
        key: m.split(",").map((P) => P.trim()).filter(Boolean),
        content: _
      }, N = E.reduce(
        (P, l) => (P[l.id] = { disabled: !l.enabled }, P),
        {}
      );
      return { updatedEntry: O, updatedRegexIds: N };
    }
  }));
  const S = ie.useMemo(
    () => i.map((O) => ({ value: O.id, label: O.scriptName })),
    [i]
  ), h = ie.useMemo(() => E.map((O) => O.id), [E]), C = ie.useCallback(() => {
    let O = n.content;
    const N = E.filter((P) => P.enabled);
    for (const P of N) {
      const l = i.find((y) => y.id === P.id);
      l && (O = y3(l, O));
    }
    g(O);
  }, [E, i, n.content]), x = (O) => {
    const N = O.map((P) => {
      const l = E.find((w) => w.id === P);
      if (l) return l;
      const y = i.find((w) => w.id === P);
      return y ? { id: y.id, label: y.scriptName, enabled: !0 } : null;
    }).filter((P) => P !== null);
    v(N);
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
        Y0,
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
        $0,
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
function de(n, r, s) {
  function i(m, p) {
    var _;
    Object.defineProperty(m, "_zod", {
      value: m._zod ?? {},
      enumerable: !1
    }), (_ = m._zod).traits ?? (_.traits = /* @__PURE__ */ new Set()), m._zod.traits.add(n), r(m, p);
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
    const _ = s?.Parent ? new c() : this;
    i(_, m), (p = _._zod).deferred ?? (p.deferred = []);
    for (const g of _._zod.deferred)
      g();
    return _;
  }
  return Object.defineProperty(f, "init", { value: i }), Object.defineProperty(f, Symbol.hasInstance, {
    value: (m) => s?.Parent && m instanceof s.Parent ? !0 : m?._zod?.traits?.has(n)
  }), Object.defineProperty(f, "name", { value: n }), f;
}
class Ii extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class J0 extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const W0 = {};
function Pa(n) {
  return W0;
}
function e_(n) {
  const r = Object.values(n).filter((i) => typeof i == "number");
  return Object.entries(n).filter(([i, u]) => r.indexOf(+i) === -1).map(([i, u]) => u);
}
function Uf(n, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function sh(n) {
  return {
    get value() {
      {
        const r = n();
        return Object.defineProperty(this, "value", { value: r }), r;
      }
    }
  };
}
function oh(n) {
  return n == null;
}
function uh(n) {
  const r = n.startsWith("^") ? 1 : 0, s = n.endsWith("$") ? n.length - 1 : n.length;
  return n.slice(r, s);
}
const Dy = Symbol("evaluating");
function rt(n, r, s) {
  let i;
  Object.defineProperty(n, r, {
    get() {
      if (i !== Dy)
        return i === void 0 && (i = Dy, i = s()), i;
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
    const i = Object.getOwnPropertyDescriptors(s);
    Object.assign(r, i);
  }
  return Object.defineProperties({}, r);
}
function zy(n) {
  return JSON.stringify(n);
}
const t_ = "captureStackTrace" in Error ? Error.captureStackTrace : (...n) => {
};
function xl(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
const vw = sh(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const n = Function;
    return new n(""), !0;
  } catch {
    return !1;
  }
});
function so(n) {
  if (xl(n) === !1)
    return !1;
  const r = n.constructor;
  if (r === void 0)
    return !0;
  const s = r.prototype;
  return !(xl(s) === !1 || Object.prototype.hasOwnProperty.call(s, "isPrototypeOf") === !1);
}
function n_(n) {
  return so(n) ? { ...n } : Array.isArray(n) ? [...n] : n;
}
const yw = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Ml(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ra(n, r, s) {
  const i = new n._zod.constr(r ?? n._zod.def);
  return (!r || s?.parent) && (i._zod.parent = n), i;
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
function _w(n) {
  return Object.keys(n).filter((r) => n[r]._zod.optin === "optional" && n[r]._zod.optout === "optional");
}
function bw(n, r) {
  const s = n._zod.def, i = Ba(n._zod.def, {
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
  return ra(n, i);
}
function Sw(n, r) {
  const s = n._zod.def, i = Ba(n._zod.def, {
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
  return ra(n, i);
}
function ww(n, r) {
  if (!so(r))
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
function Ew(n, r) {
  if (!so(r))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const s = {
    ...n._zod.def,
    get shape() {
      const i = { ...n._zod.def.shape, ...r };
      return Ia(this, "shape", i), i;
    },
    checks: n._zod.def.checks
  };
  return ra(n, s);
}
function Cw(n, r) {
  const s = Ba(n._zod.def, {
    get shape() {
      const i = { ...n._zod.def.shape, ...r._zod.def.shape };
      return Ia(this, "shape", i), i;
    },
    get catchall() {
      return r._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return ra(n, s);
}
function kw(n, r, s) {
  const i = Ba(r._zod.def, {
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
  return ra(r, i);
}
function Aw(n, r, s) {
  const i = Ba(r._zod.def, {
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
  return ra(r, i);
}
function Pi(n, r = 0) {
  if (n.aborted === !0)
    return !0;
  for (let s = r; s < n.issues.length; s++)
    if (n.issues[s]?.continue !== !0)
      return !0;
  return !1;
}
function r_(n, r) {
  return r.map((s) => {
    var i;
    return (i = s).path ?? (i.path = []), s.path.unshift(n), s;
  });
}
function il(n) {
  return typeof n == "string" ? n : n?.message;
}
function La(n, r, s) {
  const i = { ...n, path: n.path ?? [] };
  if (!n.message) {
    const u = il(n.inst?._zod.def?.error?.(n)) ?? il(r?.error?.(n)) ?? il(s.customError?.(n)) ?? il(s.localeError?.(n)) ?? "Invalid input";
    i.message = u;
  }
  return delete i.inst, delete i.continue, r?.reportInput || delete i.input, i;
}
function lh(n) {
  return Array.isArray(n) ? "array" : typeof n == "string" ? "string" : "unknown";
}
function oo(...n) {
  const [r, s, i] = n;
  return typeof r == "string" ? {
    message: r,
    code: "custom",
    input: s,
    inst: i
  } : { ...r };
}
const a_ = (n, r) => {
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
}, i_ = de("$ZodError", a_), s_ = de("$ZodError", a_, { Parent: Error });
function xw(n, r = (s) => s.message) {
  const s = {}, i = [];
  for (const u of n.issues)
    u.path.length > 0 ? (s[u.path[0]] = s[u.path[0]] || [], s[u.path[0]].push(r(u))) : i.push(r(u));
  return { formErrors: i, fieldErrors: s };
}
function Tw(n, r = (s) => s.message) {
  const s = { _errors: [] }, i = (u) => {
    for (const c of u.issues)
      if (c.code === "invalid_union" && c.errors.length)
        c.errors.map((f) => i({ issues: f }));
      else if (c.code === "invalid_key")
        i({ issues: c.issues });
      else if (c.code === "invalid_element")
        i({ issues: c.issues });
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
  return i(n), s;
}
const ch = (n) => (r, s, i, u) => {
  const c = i ? Object.assign(i, { async: !1 }) : { async: !1 }, f = r._zod.run({ value: s, issues: [] }, c);
  if (f instanceof Promise)
    throw new Ii();
  if (f.issues.length) {
    const m = new (u?.Err ?? n)(f.issues.map((p) => La(p, c, Pa())));
    throw t_(m, u?.callee), m;
  }
  return f.value;
}, dh = (n) => async (r, s, i, u) => {
  const c = i ? Object.assign(i, { async: !0 }) : { async: !0 };
  let f = r._zod.run({ value: s, issues: [] }, c);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const m = new (u?.Err ?? n)(f.issues.map((p) => La(p, c, Pa())));
    throw t_(m, u?.callee), m;
  }
  return f.value;
}, jl = (n) => (r, s, i) => {
  const u = i ? { ...i, async: !1 } : { async: !1 }, c = r._zod.run({ value: s, issues: [] }, u);
  if (c instanceof Promise)
    throw new Ii();
  return c.issues.length ? {
    success: !1,
    error: new (n ?? i_)(c.issues.map((f) => La(f, u, Pa())))
  } : { success: !0, data: c.value };
}, Nw = /* @__PURE__ */ jl(s_), Rl = (n) => async (r, s, i) => {
  const u = i ? Object.assign(i, { async: !0 }) : { async: !0 };
  let c = r._zod.run({ value: s, issues: [] }, u);
  return c instanceof Promise && (c = await c), c.issues.length ? {
    success: !1,
    error: new n(c.issues.map((f) => La(f, u, Pa())))
  } : { success: !0, data: c.value };
}, Ow = /* @__PURE__ */ Rl(s_), Mw = (n) => (r, s, i) => {
  const u = i ? Object.assign(i, { direction: "backward" }) : { direction: "backward" };
  return ch(n)(r, s, u);
}, jw = (n) => (r, s, i) => ch(n)(r, s, i), Rw = (n) => async (r, s, i) => {
  const u = i ? Object.assign(i, { direction: "backward" }) : { direction: "backward" };
  return dh(n)(r, s, u);
}, Dw = (n) => async (r, s, i) => dh(n)(r, s, i), zw = (n) => (r, s, i) => {
  const u = i ? Object.assign(i, { direction: "backward" }) : { direction: "backward" };
  return jl(n)(r, s, u);
}, Pw = (n) => (r, s, i) => jl(n)(r, s, i), Lw = (n) => async (r, s, i) => {
  const u = i ? Object.assign(i, { direction: "backward" }) : { direction: "backward" };
  return Rl(n)(r, s, u);
}, Iw = (n) => async (r, s, i) => Rl(n)(r, s, i), Bw = /^[cC][^\s-]{8,}$/, Uw = /^[0-9a-z]+$/, Hw = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, qw = /^[0-9a-vA-V]{20}$/, Zw = /^[A-Za-z0-9]{27}$/, Gw = /^[a-zA-Z0-9_-]{21}$/, Vw = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, $w = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Py = (n) => n ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Yw = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Xw = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Fw() {
  return new RegExp(Xw, "u");
}
const Qw = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Kw = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Jw = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Ww = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, eE = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, o_ = /^[A-Za-z0-9_-]*$/, tE = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, nE = /^\+(?:[0-9]){6,14}[0-9]$/, u_ = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", rE = /* @__PURE__ */ new RegExp(`^${u_}$`);
function l_(n) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number" ? n.precision === -1 ? `${r}` : n.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${n.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function aE(n) {
  return new RegExp(`^${l_(n)}$`);
}
function iE(n) {
  const r = l_({ precision: n.precision }), s = ["Z"];
  n.local && s.push(""), n.offset && s.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const i = `${r}(?:${s.join("|")})`;
  return new RegExp(`^${u_}T(?:${i})$`);
}
const sE = (n) => {
  const r = n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, oE = /^[^A-Z]*$/, uE = /^[^a-z]*$/, rr = /* @__PURE__ */ de("$ZodCheck", (n, r) => {
  var s;
  n._zod ?? (n._zod = {}), n._zod.def = r, (s = n._zod).onattach ?? (s.onattach = []);
}), lE = /* @__PURE__ */ de("$ZodCheckMaxLength", (n, r) => {
  var s;
  rr.init(n, r), (s = n._zod.def).when ?? (s.when = (i) => {
    const u = i.value;
    return !oh(u) && u.length !== void 0;
  }), n._zod.onattach.push((i) => {
    const u = i._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < u && (i._zod.bag.maximum = r.maximum);
  }), n._zod.check = (i) => {
    const u = i.value;
    if (u.length <= r.maximum)
      return;
    const f = lh(u);
    i.issues.push({
      origin: f,
      code: "too_big",
      maximum: r.maximum,
      inclusive: !0,
      input: u,
      inst: n,
      continue: !r.abort
    });
  };
}), cE = /* @__PURE__ */ de("$ZodCheckMinLength", (n, r) => {
  var s;
  rr.init(n, r), (s = n._zod.def).when ?? (s.when = (i) => {
    const u = i.value;
    return !oh(u) && u.length !== void 0;
  }), n._zod.onattach.push((i) => {
    const u = i._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > u && (i._zod.bag.minimum = r.minimum);
  }), n._zod.check = (i) => {
    const u = i.value;
    if (u.length >= r.minimum)
      return;
    const f = lh(u);
    i.issues.push({
      origin: f,
      code: "too_small",
      minimum: r.minimum,
      inclusive: !0,
      input: u,
      inst: n,
      continue: !r.abort
    });
  };
}), dE = /* @__PURE__ */ de("$ZodCheckLengthEquals", (n, r) => {
  var s;
  rr.init(n, r), (s = n._zod.def).when ?? (s.when = (i) => {
    const u = i.value;
    return !oh(u) && u.length !== void 0;
  }), n._zod.onattach.push((i) => {
    const u = i._zod.bag;
    u.minimum = r.length, u.maximum = r.length, u.length = r.length;
  }), n._zod.check = (i) => {
    const u = i.value, c = u.length;
    if (c === r.length)
      return;
    const f = lh(u), m = c > r.length;
    i.issues.push({
      origin: f,
      ...m ? { code: "too_big", maximum: r.length } : { code: "too_small", minimum: r.length },
      inclusive: !0,
      exact: !0,
      input: i.value,
      inst: n,
      continue: !r.abort
    });
  };
}), Dl = /* @__PURE__ */ de("$ZodCheckStringFormat", (n, r) => {
  var s, i;
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
  }) : (i = n._zod).check ?? (i.check = () => {
  });
}), fE = /* @__PURE__ */ de("$ZodCheckRegex", (n, r) => {
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
}), hE = /* @__PURE__ */ de("$ZodCheckLowerCase", (n, r) => {
  r.pattern ?? (r.pattern = oE), Dl.init(n, r);
}), pE = /* @__PURE__ */ de("$ZodCheckUpperCase", (n, r) => {
  r.pattern ?? (r.pattern = uE), Dl.init(n, r);
}), mE = /* @__PURE__ */ de("$ZodCheckIncludes", (n, r) => {
  rr.init(n, r);
  const s = Ml(r.includes), i = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${s}` : s);
  r.pattern = i, n._zod.onattach.push((u) => {
    const c = u._zod.bag;
    c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(i);
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
}), gE = /* @__PURE__ */ de("$ZodCheckStartsWith", (n, r) => {
  rr.init(n, r);
  const s = new RegExp(`^${Ml(r.prefix)}.*`);
  r.pattern ?? (r.pattern = s), n._zod.onattach.push((i) => {
    const u = i._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(s);
  }), n._zod.check = (i) => {
    i.value.startsWith(r.prefix) || i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: r.prefix,
      input: i.value,
      inst: n,
      continue: !r.abort
    });
  };
}), vE = /* @__PURE__ */ de("$ZodCheckEndsWith", (n, r) => {
  rr.init(n, r);
  const s = new RegExp(`.*${Ml(r.suffix)}$`);
  r.pattern ?? (r.pattern = s), n._zod.onattach.push((i) => {
    const u = i._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(s);
  }), n._zod.check = (i) => {
    i.value.endsWith(r.suffix) || i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: r.suffix,
      input: i.value,
      inst: n,
      continue: !r.abort
    });
  };
}), yE = /* @__PURE__ */ de("$ZodCheckOverwrite", (n, r) => {
  rr.init(n, r), n._zod.check = (s) => {
    s.value = r.tx(s.value);
  };
});
class _E {
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
    const i = r.split(`
`).filter((f) => f), u = Math.min(...i.map((f) => f.length - f.trimStart().length)), c = i.map((f) => f.slice(u)).map((f) => " ".repeat(this.indent * 2) + f);
    for (const f of c)
      this.content.push(f);
  }
  compile() {
    const r = Function, s = this?.args, u = [...(this?.content ?? [""]).map((c) => `  ${c}`)];
    return new r(...s, u.join(`
`));
  }
}
const bE = {
  major: 4,
  minor: 1,
  patch: 12
}, At = /* @__PURE__ */ de("$ZodType", (n, r) => {
  var s;
  n ?? (n = {}), n._zod.def = r, n._zod.bag = n._zod.bag || {}, n._zod.version = bE;
  const i = [...n._zod.def.checks ?? []];
  n._zod.traits.has("$ZodCheck") && i.unshift(n);
  for (const u of i)
    for (const c of u._zod.onattach)
      c(n);
  if (i.length === 0)
    (s = n._zod).deferred ?? (s.deferred = []), n._zod.deferred?.push(() => {
      n._zod.run = n._zod.parse;
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
      const _ = u(m, i, p);
      if (_ instanceof Promise) {
        if (p.async === !1)
          throw new Ii();
        return _.then((g) => n._zod.parse(g, p));
      }
      return n._zod.parse(_, p);
    };
    n._zod.run = (f, m) => {
      if (m.skipChecks)
        return n._zod.parse(f, m);
      if (m.direction === "backward") {
        const _ = n._zod.parse({ value: f.value, issues: [] }, { ...m, skipChecks: !0 });
        return _ instanceof Promise ? _.then((g) => c(g, f, m)) : c(_, f, m);
      }
      const p = n._zod.parse(f, m);
      if (p instanceof Promise) {
        if (m.async === !1)
          throw new Ii();
        return p.then((_) => u(_, i, m));
      }
      return u(p, i, m);
    };
  }
  n["~standard"] = {
    validate: (u) => {
      try {
        const c = Nw(n, u);
        return c.success ? { value: c.data } : { issues: c.error?.issues };
      } catch {
        return Ow(n, u).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), fh = /* @__PURE__ */ de("$ZodString", (n, r) => {
  At.init(n, r), n._zod.pattern = [...n?._zod.bag?.patterns ?? []].pop() ?? sE(n._zod.bag), n._zod.parse = (s, i) => {
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
  Dl.init(n, r), fh.init(n, r);
}), SE = /* @__PURE__ */ de("$ZodGUID", (n, r) => {
  r.pattern ?? (r.pattern = $w), ot.init(n, r);
}), wE = /* @__PURE__ */ de("$ZodUUID", (n, r) => {
  if (r.version) {
    const i = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[r.version];
    if (i === void 0)
      throw new Error(`Invalid UUID version: "${r.version}"`);
    r.pattern ?? (r.pattern = Py(i));
  } else
    r.pattern ?? (r.pattern = Py());
  ot.init(n, r);
}), EE = /* @__PURE__ */ de("$ZodEmail", (n, r) => {
  r.pattern ?? (r.pattern = Yw), ot.init(n, r);
}), CE = /* @__PURE__ */ de("$ZodURL", (n, r) => {
  ot.init(n, r), n._zod.check = (s) => {
    try {
      const i = s.value.trim(), u = new URL(i);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(u.hostname) || s.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: tE.source,
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
      })), r.normalize ? s.value = u.href : s.value = i;
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
}), kE = /* @__PURE__ */ de("$ZodEmoji", (n, r) => {
  r.pattern ?? (r.pattern = Fw()), ot.init(n, r);
}), AE = /* @__PURE__ */ de("$ZodNanoID", (n, r) => {
  r.pattern ?? (r.pattern = Gw), ot.init(n, r);
}), xE = /* @__PURE__ */ de("$ZodCUID", (n, r) => {
  r.pattern ?? (r.pattern = Bw), ot.init(n, r);
}), TE = /* @__PURE__ */ de("$ZodCUID2", (n, r) => {
  r.pattern ?? (r.pattern = Uw), ot.init(n, r);
}), NE = /* @__PURE__ */ de("$ZodULID", (n, r) => {
  r.pattern ?? (r.pattern = Hw), ot.init(n, r);
}), OE = /* @__PURE__ */ de("$ZodXID", (n, r) => {
  r.pattern ?? (r.pattern = qw), ot.init(n, r);
}), ME = /* @__PURE__ */ de("$ZodKSUID", (n, r) => {
  r.pattern ?? (r.pattern = Zw), ot.init(n, r);
}), jE = /* @__PURE__ */ de("$ZodISODateTime", (n, r) => {
  r.pattern ?? (r.pattern = iE(r)), ot.init(n, r);
}), RE = /* @__PURE__ */ de("$ZodISODate", (n, r) => {
  r.pattern ?? (r.pattern = rE), ot.init(n, r);
}), DE = /* @__PURE__ */ de("$ZodISOTime", (n, r) => {
  r.pattern ?? (r.pattern = aE(r)), ot.init(n, r);
}), zE = /* @__PURE__ */ de("$ZodISODuration", (n, r) => {
  r.pattern ?? (r.pattern = Vw), ot.init(n, r);
}), PE = /* @__PURE__ */ de("$ZodIPv4", (n, r) => {
  r.pattern ?? (r.pattern = Qw), ot.init(n, r), n._zod.onattach.push((s) => {
    const i = s._zod.bag;
    i.format = "ipv4";
  });
}), LE = /* @__PURE__ */ de("$ZodIPv6", (n, r) => {
  r.pattern ?? (r.pattern = Kw), ot.init(n, r), n._zod.onattach.push((s) => {
    const i = s._zod.bag;
    i.format = "ipv6";
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
}), IE = /* @__PURE__ */ de("$ZodCIDRv4", (n, r) => {
  r.pattern ?? (r.pattern = Jw), ot.init(n, r);
}), BE = /* @__PURE__ */ de("$ZodCIDRv6", (n, r) => {
  r.pattern ?? (r.pattern = Ww), ot.init(n, r), n._zod.check = (s) => {
    const i = s.value.split("/");
    try {
      if (i.length !== 2)
        throw new Error();
      const [u, c] = i;
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
function c_(n) {
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
const UE = /* @__PURE__ */ de("$ZodBase64", (n, r) => {
  r.pattern ?? (r.pattern = eE), ot.init(n, r), n._zod.onattach.push((s) => {
    s._zod.bag.contentEncoding = "base64";
  }), n._zod.check = (s) => {
    c_(s.value) || s.issues.push({
      code: "invalid_format",
      format: "base64",
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
});
function HE(n) {
  if (!o_.test(n))
    return !1;
  const r = n.replace(/[-_]/g, (i) => i === "-" ? "+" : "/"), s = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return c_(s);
}
const qE = /* @__PURE__ */ de("$ZodBase64URL", (n, r) => {
  r.pattern ?? (r.pattern = o_), ot.init(n, r), n._zod.onattach.push((s) => {
    s._zod.bag.contentEncoding = "base64url";
  }), n._zod.check = (s) => {
    HE(s.value) || s.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
}), ZE = /* @__PURE__ */ de("$ZodE164", (n, r) => {
  r.pattern ?? (r.pattern = nE), ot.init(n, r);
});
function GE(n, r = null) {
  try {
    const s = n.split(".");
    if (s.length !== 3)
      return !1;
    const [i] = s;
    if (!i)
      return !1;
    const u = JSON.parse(atob(i));
    return !("typ" in u && u?.typ !== "JWT" || !u.alg || r && (!("alg" in u) || u.alg !== r));
  } catch {
    return !1;
  }
}
const VE = /* @__PURE__ */ de("$ZodJWT", (n, r) => {
  ot.init(n, r), n._zod.check = (s) => {
    GE(s.value, r.alg) || s.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
}), $E = /* @__PURE__ */ de("$ZodUnknown", (n, r) => {
  At.init(n, r), n._zod.parse = (s) => s;
}), YE = /* @__PURE__ */ de("$ZodNever", (n, r) => {
  At.init(n, r), n._zod.parse = (s, i) => (s.issues.push({
    expected: "never",
    code: "invalid_type",
    input: s.value,
    inst: n
  }), s);
});
function Ly(n, r, s) {
  n.issues.length && r.issues.push(...r_(s, n.issues)), r.value[s] = n.value;
}
const XE = /* @__PURE__ */ de("$ZodArray", (n, r) => {
  At.init(n, r), n._zod.parse = (s, i) => {
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
      }, i);
      p instanceof Promise ? c.push(p.then((_) => Ly(_, s, f))) : Ly(p, s, f);
    }
    return c.length ? Promise.all(c).then(() => s) : s;
  };
});
function Tl(n, r, s, i) {
  n.issues.length && r.issues.push(...r_(s, n.issues)), n.value === void 0 ? s in i && (r.value[s] = void 0) : r.value[s] = n.value;
}
function d_(n) {
  const r = Object.keys(n.shape);
  for (const i of r)
    if (!n.shape?.[i]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${i}": expected a Zod schema`);
  const s = _w(n.shape);
  return {
    ...n,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(s)
  };
}
function f_(n, r, s, i, u, c) {
  const f = [], m = u.keySet, p = u.catchall._zod, _ = p.def.type;
  for (const g of Object.keys(r)) {
    if (m.has(g))
      continue;
    if (_ === "never") {
      f.push(g);
      continue;
    }
    const E = p.run({ value: r[g], issues: [] }, i);
    E instanceof Promise ? n.push(E.then((v) => Tl(v, s, g, r))) : Tl(E, s, g, r);
  }
  return f.length && s.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: r,
    inst: c
  }), n.length ? Promise.all(n).then(() => s) : s;
}
const FE = /* @__PURE__ */ de("$ZodObject", (n, r) => {
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
  const i = sh(() => d_(r));
  rt(n._zod, "propValues", () => {
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
  const u = xl, c = r.catchall;
  let f;
  n._zod.parse = (m, p) => {
    f ?? (f = i.value);
    const _ = m.value;
    if (!u(_))
      return m.issues.push({
        expected: "object",
        code: "invalid_type",
        input: _,
        inst: n
      }), m;
    m.value = {};
    const g = [], E = f.shape;
    for (const v of f.keys) {
      const h = E[v]._zod.run({ value: _[v], issues: [] }, p);
      h instanceof Promise ? g.push(h.then((C) => Tl(C, m, v, _))) : Tl(h, m, v, _);
    }
    return c ? f_(g, _, m, p, i.value, n) : g.length ? Promise.all(g).then(() => m) : m;
  };
}), QE = /* @__PURE__ */ de("$ZodObjectJIT", (n, r) => {
  FE.init(n, r);
  const s = n._zod.parse, i = sh(() => d_(r)), u = (v) => {
    const S = new _E(["shape", "payload", "ctx"]), h = i.value, C = (P) => {
      const l = zy(P);
      return `shape[${l}]._zod.run({ value: input[${l}], issues: [] }, ctx)`;
    };
    S.write("const input = payload.value;");
    const x = /* @__PURE__ */ Object.create(null);
    let O = 0;
    for (const P of h.keys)
      x[P] = `key_${O++}`;
    S.write("const newResult = {};");
    for (const P of h.keys) {
      const l = x[P], y = zy(P);
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
    const N = S.compile();
    return (P, l) => N(v, P, l);
  };
  let c;
  const f = xl, m = !W0.jitless, _ = m && vw.value, g = r.catchall;
  let E;
  n._zod.parse = (v, S) => {
    E ?? (E = i.value);
    const h = v.value;
    return f(h) ? m && _ && S?.async === !1 && S.jitless !== !0 ? (c || (c = u(r.shape)), v = c(v, S), g ? f_([], h, v, S, E, n) : v) : s(v, S) : (v.issues.push({
      expected: "object",
      code: "invalid_type",
      input: h,
      inst: n
    }), v);
  };
});
function Iy(n, r, s, i) {
  for (const c of n)
    if (c.issues.length === 0)
      return r.value = c.value, r;
  const u = n.filter((c) => !Pi(c));
  return u.length === 1 ? (r.value = u[0].value, u[0]) : (r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: s,
    errors: n.map((c) => c.issues.map((f) => La(f, i, Pa())))
  }), r);
}
const KE = /* @__PURE__ */ de("$ZodUnion", (n, r) => {
  At.init(n, r), rt(n._zod, "optin", () => r.options.some((u) => u._zod.optin === "optional") ? "optional" : void 0), rt(n._zod, "optout", () => r.options.some((u) => u._zod.optout === "optional") ? "optional" : void 0), rt(n._zod, "values", () => {
    if (r.options.every((u) => u._zod.values))
      return new Set(r.options.flatMap((u) => Array.from(u._zod.values)));
  }), rt(n._zod, "pattern", () => {
    if (r.options.every((u) => u._zod.pattern)) {
      const u = r.options.map((c) => c._zod.pattern);
      return new RegExp(`^(${u.map((c) => uh(c.source)).join("|")})$`);
    }
  });
  const s = r.options.length === 1, i = r.options[0]._zod.run;
  n._zod.parse = (u, c) => {
    if (s)
      return i(u, c);
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
    return f ? Promise.all(m).then((p) => Iy(p, u, n, c)) : Iy(m, u, n, c);
  };
}), JE = /* @__PURE__ */ de("$ZodIntersection", (n, r) => {
  At.init(n, r), n._zod.parse = (s, i) => {
    const u = s.value, c = r.left._zod.run({ value: u, issues: [] }, i), f = r.right._zod.run({ value: u, issues: [] }, i);
    return c instanceof Promise || f instanceof Promise ? Promise.all([c, f]).then(([p, _]) => By(s, p, _)) : By(s, c, f);
  };
});
function Hf(n, r) {
  if (n === r)
    return { valid: !0, data: n };
  if (n instanceof Date && r instanceof Date && +n == +r)
    return { valid: !0, data: n };
  if (so(n) && so(r)) {
    const s = Object.keys(r), i = Object.keys(n).filter((c) => s.indexOf(c) !== -1), u = { ...n, ...r };
    for (const c of i) {
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
    for (let i = 0; i < n.length; i++) {
      const u = n[i], c = r[i], f = Hf(u, c);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [i, ...f.mergeErrorPath]
        };
      s.push(f.data);
    }
    return { valid: !0, data: s };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function By(n, r, s) {
  if (r.issues.length && n.issues.push(...r.issues), s.issues.length && n.issues.push(...s.issues), Pi(n))
    return n;
  const i = Hf(r.value, s.value);
  if (!i.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(i.mergeErrorPath)}`);
  return n.value = i.data, n;
}
const WE = /* @__PURE__ */ de("$ZodEnum", (n, r) => {
  At.init(n, r);
  const s = e_(r.entries), i = new Set(s);
  n._zod.values = i, n._zod.pattern = new RegExp(`^(${s.filter((u) => yw.has(typeof u)).map((u) => typeof u == "string" ? Ml(u) : u.toString()).join("|")})$`), n._zod.parse = (u, c) => {
    const f = u.value;
    return i.has(f) || u.issues.push({
      code: "invalid_value",
      values: s,
      input: f,
      inst: n
    }), u;
  };
}), eC = /* @__PURE__ */ de("$ZodTransform", (n, r) => {
  At.init(n, r), n._zod.parse = (s, i) => {
    if (i.direction === "backward")
      throw new J0(n.constructor.name);
    const u = r.transform(s.value, s);
    if (i.async)
      return (u instanceof Promise ? u : Promise.resolve(u)).then((f) => (s.value = f, s));
    if (u instanceof Promise)
      throw new Ii();
    return s.value = u, s;
  };
});
function Uy(n, r) {
  return n.issues.length && r === void 0 ? { issues: [], value: void 0 } : n;
}
const tC = /* @__PURE__ */ de("$ZodOptional", (n, r) => {
  At.init(n, r), n._zod.optin = "optional", n._zod.optout = "optional", rt(n._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), rt(n._zod, "pattern", () => {
    const s = r.innerType._zod.pattern;
    return s ? new RegExp(`^(${uh(s.source)})?$`) : void 0;
  }), n._zod.parse = (s, i) => {
    if (r.innerType._zod.optin === "optional") {
      const u = r.innerType._zod.run(s, i);
      return u instanceof Promise ? u.then((c) => Uy(c, s.value)) : Uy(u, s.value);
    }
    return s.value === void 0 ? s : r.innerType._zod.run(s, i);
  };
}), nC = /* @__PURE__ */ de("$ZodNullable", (n, r) => {
  At.init(n, r), rt(n._zod, "optin", () => r.innerType._zod.optin), rt(n._zod, "optout", () => r.innerType._zod.optout), rt(n._zod, "pattern", () => {
    const s = r.innerType._zod.pattern;
    return s ? new RegExp(`^(${uh(s.source)}|null)$`) : void 0;
  }), rt(n._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), n._zod.parse = (s, i) => s.value === null ? s : r.innerType._zod.run(s, i);
}), rC = /* @__PURE__ */ de("$ZodDefault", (n, r) => {
  At.init(n, r), n._zod.optin = "optional", rt(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (s, i) => {
    if (i.direction === "backward")
      return r.innerType._zod.run(s, i);
    if (s.value === void 0)
      return s.value = r.defaultValue, s;
    const u = r.innerType._zod.run(s, i);
    return u instanceof Promise ? u.then((c) => Hy(c, r)) : Hy(u, r);
  };
});
function Hy(n, r) {
  return n.value === void 0 && (n.value = r.defaultValue), n;
}
const aC = /* @__PURE__ */ de("$ZodPrefault", (n, r) => {
  At.init(n, r), n._zod.optin = "optional", rt(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (s, i) => (i.direction === "backward" || s.value === void 0 && (s.value = r.defaultValue), r.innerType._zod.run(s, i));
}), iC = /* @__PURE__ */ de("$ZodNonOptional", (n, r) => {
  At.init(n, r), rt(n._zod, "values", () => {
    const s = r.innerType._zod.values;
    return s ? new Set([...s].filter((i) => i !== void 0)) : void 0;
  }), n._zod.parse = (s, i) => {
    const u = r.innerType._zod.run(s, i);
    return u instanceof Promise ? u.then((c) => qy(c, n)) : qy(u, n);
  };
});
function qy(n, r) {
  return !n.issues.length && n.value === void 0 && n.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: n.value,
    inst: r
  }), n;
}
const sC = /* @__PURE__ */ de("$ZodCatch", (n, r) => {
  At.init(n, r), rt(n._zod, "optin", () => r.innerType._zod.optin), rt(n._zod, "optout", () => r.innerType._zod.optout), rt(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (s, i) => {
    if (i.direction === "backward")
      return r.innerType._zod.run(s, i);
    const u = r.innerType._zod.run(s, i);
    return u instanceof Promise ? u.then((c) => (s.value = c.value, c.issues.length && (s.value = r.catchValue({
      ...s,
      error: {
        issues: c.issues.map((f) => La(f, i, Pa()))
      },
      input: s.value
    }), s.issues = []), s)) : (s.value = u.value, u.issues.length && (s.value = r.catchValue({
      ...s,
      error: {
        issues: u.issues.map((c) => La(c, i, Pa()))
      },
      input: s.value
    }), s.issues = []), s);
  };
}), oC = /* @__PURE__ */ de("$ZodPipe", (n, r) => {
  At.init(n, r), rt(n._zod, "values", () => r.in._zod.values), rt(n._zod, "optin", () => r.in._zod.optin), rt(n._zod, "optout", () => r.out._zod.optout), rt(n._zod, "propValues", () => r.in._zod.propValues), n._zod.parse = (s, i) => {
    if (i.direction === "backward") {
      const c = r.out._zod.run(s, i);
      return c instanceof Promise ? c.then((f) => sl(f, r.in, i)) : sl(c, r.in, i);
    }
    const u = r.in._zod.run(s, i);
    return u instanceof Promise ? u.then((c) => sl(c, r.out, i)) : sl(u, r.out, i);
  };
});
function sl(n, r, s) {
  return n.issues.length ? (n.aborted = !0, n) : r._zod.run({ value: n.value, issues: n.issues }, s);
}
const uC = /* @__PURE__ */ de("$ZodReadonly", (n, r) => {
  At.init(n, r), rt(n._zod, "propValues", () => r.innerType._zod.propValues), rt(n._zod, "values", () => r.innerType._zod.values), rt(n._zod, "optin", () => r.innerType._zod.optin), rt(n._zod, "optout", () => r.innerType._zod.optout), n._zod.parse = (s, i) => {
    if (i.direction === "backward")
      return r.innerType._zod.run(s, i);
    const u = r.innerType._zod.run(s, i);
    return u instanceof Promise ? u.then(Zy) : Zy(u);
  };
});
function Zy(n) {
  return n.value = Object.freeze(n.value), n;
}
const lC = /* @__PURE__ */ de("$ZodCustom", (n, r) => {
  rr.init(n, r), At.init(n, r), n._zod.parse = (s, i) => s, n._zod.check = (s) => {
    const i = s.value, u = r.fn(i);
    if (u instanceof Promise)
      return u.then((c) => Gy(c, s, i, n));
    Gy(u, s, i, n);
  };
});
function Gy(n, r, s, i) {
  if (!n) {
    const u = {
      code: "custom",
      input: s,
      inst: i,
      // incorporates params.error into issue reporting
      path: [...i._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !i._zod.def.abort
      // params: inst._zod.def.params,
    };
    i._zod.def.params && (u.params = i._zod.def.params), r.issues.push(oo(u));
  }
}
class h_ {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(r, ...s) {
    const i = s[0];
    if (this._map.set(r, i), i && typeof i == "object" && "id" in i) {
      if (this._idmap.has(i.id))
        throw new Error(`ID ${i.id} already exists in the registry`);
      this._idmap.set(i.id, r);
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
      const i = { ...this.get(s) ?? {} };
      delete i.id;
      const u = { ...i, ...this._map.get(r) };
      return Object.keys(u).length ? u : void 0;
    }
    return this._map.get(r);
  }
  has(r) {
    return this._map.has(r);
  }
}
function cC() {
  return new h_();
}
const Js = /* @__PURE__ */ cC();
function dC(n, r) {
  return new n({
    type: "string",
    ...Oe(r)
  });
}
function fC(n, r) {
  return new n({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function Vy(n, r) {
  return new n({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function hC(n, r) {
  return new n({
    type: "string",
    format: "uuid",
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
    version: "v4",
    ...Oe(r)
  });
}
function mC(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...Oe(r)
  });
}
function gC(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...Oe(r)
  });
}
function vC(n, r) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function yC(n, r) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function _C(n, r) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function bC(n, r) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function SC(n, r) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function wC(n, r) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function EC(n, r) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function CC(n, r) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function kC(n, r) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function AC(n, r) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function xC(n, r) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function TC(n, r) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function NC(n, r) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function OC(n, r) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function MC(n, r) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function jC(n, r) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...Oe(r)
  });
}
function RC(n, r) {
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
function DC(n, r) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...Oe(r)
  });
}
function zC(n, r) {
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
function LC(n) {
  return new n({
    type: "unknown"
  });
}
function IC(n, r) {
  return new n({
    type: "never",
    ...Oe(r)
  });
}
function p_(n, r) {
  return new lE({
    check: "max_length",
    ...Oe(r),
    maximum: n
  });
}
function Nl(n, r) {
  return new cE({
    check: "min_length",
    ...Oe(r),
    minimum: n
  });
}
function m_(n, r) {
  return new dE({
    check: "length_equals",
    ...Oe(r),
    length: n
  });
}
function BC(n, r) {
  return new fE({
    check: "string_format",
    format: "regex",
    ...Oe(r),
    pattern: n
  });
}
function UC(n) {
  return new hE({
    check: "string_format",
    format: "lowercase",
    ...Oe(n)
  });
}
function HC(n) {
  return new pE({
    check: "string_format",
    format: "uppercase",
    ...Oe(n)
  });
}
function qC(n, r) {
  return new mE({
    check: "string_format",
    format: "includes",
    ...Oe(r),
    includes: n
  });
}
function ZC(n, r) {
  return new gE({
    check: "string_format",
    format: "starts_with",
    ...Oe(r),
    prefix: n
  });
}
function GC(n, r) {
  return new vE({
    check: "string_format",
    format: "ends_with",
    ...Oe(r),
    suffix: n
  });
}
function fo(n) {
  return new yE({
    check: "overwrite",
    tx: n
  });
}
function VC(n) {
  return fo((r) => r.normalize(n));
}
function $C() {
  return fo((n) => n.trim());
}
function YC() {
  return fo((n) => n.toLowerCase());
}
function XC() {
  return fo((n) => n.toUpperCase());
}
function FC(n, r, s) {
  return new n({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ...Oe(s)
  });
}
function QC(n, r, s) {
  return new n({
    type: "custom",
    check: "custom",
    fn: r,
    ...Oe(s)
  });
}
function KC(n) {
  const r = JC((s) => (s.addIssue = (i) => {
    if (typeof i == "string")
      s.issues.push(oo(i, s.value, r._zod.def));
    else {
      const u = i;
      u.fatal && (u.continue = !1), u.code ?? (u.code = "custom"), u.input ?? (u.input = s.value), u.inst ?? (u.inst = r), u.continue ?? (u.continue = !r._zod.def.abort), s.issues.push(oo(u));
    }
  }, n(s.value, s)));
  return r;
}
function JC(n, r) {
  const s = new rr({
    check: "custom",
    ...Oe(r)
  });
  return s._zod.check = n, s;
}
class $y {
  constructor(r) {
    this.counter = 0, this.metadataRegistry = r?.metadata ?? Js, this.target = r?.target ?? "draft-2020-12", this.unrepresentable = r?.unrepresentable ?? "throw", this.override = r?.override ?? (() => {
    }), this.io = r?.io ?? "output", this.seen = /* @__PURE__ */ new Map();
  }
  process(r, s = { path: [], schemaPath: [] }) {
    var i;
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
            const { minimum: C, maximum: x, format: O, patterns: N, contentEncoding: P } = r._zod.bag;
            if (typeof C == "number" && (h.minLength = C), typeof x == "number" && (h.maxLength = x), O && (h.format = c[O] ?? O, h.format === "" && delete h.format), P && (h.contentEncoding = P), N && N.size > 0) {
              const l = [...N];
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
            const h = S, { minimum: C, maximum: x, format: O, multipleOf: N, exclusiveMaximum: P, exclusiveMinimum: l } = r._zod.bag;
            typeof O == "string" && O.includes("int") ? h.type = "integer" : h.type = "number", typeof l == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.minimum = l, h.exclusiveMinimum = !0) : h.exclusiveMinimum = l), typeof C == "number" && (h.minimum = C, typeof l == "number" && this.target !== "draft-4" && (l >= C ? delete h.minimum : delete h.exclusiveMinimum)), typeof P == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.maximum = P, h.exclusiveMaximum = !0) : h.exclusiveMaximum = P), typeof x == "number" && (h.maximum = x, typeof P == "number" && this.target !== "draft-4" && (P <= x ? delete h.maximum : delete h.exclusiveMaximum)), typeof N == "number" && (h.multipleOf = N);
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
            for (const N in C)
              h.properties[N] = this.process(C[N], {
                ...E,
                path: [...E.path, "properties", N]
              });
            const x = new Set(Object.keys(C)), O = new Set([...x].filter((N) => {
              const P = u.shape[N]._zod;
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
            }), O = (P) => "allOf" in P && Object.keys(P).length === 1, N = [
              ...O(C) ? C.allOf : [C],
              ...O(x) ? x.allOf : [x]
            ];
            h.allOf = N;
            break;
          }
          case "tuple": {
            const h = S;
            h.type = "array";
            const C = this.target === "draft-2020-12" ? "prefixItems" : "items", x = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", O = u.items.map((y, w) => this.process(y, {
              ...E,
              path: [...E.path, C, w]
            })), N = u.rest ? this.process(u.rest, {
              ...E,
              path: [...E.path, x, ...this.target === "openapi-3.0" ? [u.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (h.prefixItems = O, N && (h.items = N)) : this.target === "openapi-3.0" ? (h.items = {
              anyOf: O
            }, N && h.items.anyOf.push(N), h.minItems = O.length, N || (h.maxItems = O.length)) : (h.items = O, N && (h.additionalItems = N));
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
            const h = S, C = e_(u.entries);
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
            }, { minimum: x, maximum: O, mime: N } = r._zod.bag;
            x !== void 0 && (C.minLength = x), O !== void 0 && (C.maxLength = O), N ? N.length === 1 ? (C.contentMediaType = N[0], Object.assign(h, C)) : h.anyOf = N.map((P) => ({ ...C, contentMediaType: P })) : Object.assign(h, C);
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
    return _ && Object.assign(m.schema, _), this.io === "input" && kt(r) && (delete m.schema.examples, delete m.schema.default), this.io === "input" && m.schema._prefault && ((i = m.schema).default ?? (i.default = m.schema._prefault)), delete m.schema._prefault, this.seen.get(r).schema;
  }
  emit(r, s) {
    const i = {
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
      if (i.external) {
        const C = i.external.registry.get(g[0])?.id, x = i.external.uri ?? ((N) => N);
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
    if (i.cycles === "throw")
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
      if (i.external) {
        const S = i.external.registry.get(g[0])?.id;
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
      if (E.count > 1 && i.reused === "ref") {
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
    if (this.target === "draft-2020-12" ? p.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? p.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? p.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), i.external?.uri) {
      const g = i.external.registry.get(r)?.id;
      if (!g)
        throw new Error("Schema is missing an `id` property");
      p.$id = i.external.uri(g);
    }
    Object.assign(p, u.def);
    const _ = i.external?.defs ?? {};
    for (const g of this.seen.entries()) {
      const E = g[1];
      E.def && E.defId && (_[E.defId] = E.def);
    }
    i.external || Object.keys(_).length > 0 && (this.target === "draft-2020-12" ? p.$defs = _ : p.definitions = _);
    try {
      return JSON.parse(JSON.stringify(p));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function WC(n, r) {
  if (n instanceof h_) {
    const i = new $y(r), u = {};
    for (const m of n._idmap.entries()) {
      const [p, _] = m;
      i.process(_);
    }
    const c = {}, f = {
      registry: n,
      uri: r?.uri,
      defs: u
    };
    for (const m of n._idmap.entries()) {
      const [p, _] = m;
      c[p] = i.emit(_, {
        ...r,
        external: f
      });
    }
    if (Object.keys(u).length > 0) {
      const m = i.target === "draft-2020-12" ? "$defs" : "definitions";
      c.__shared = {
        [m]: u
      };
    }
    return { schemas: c };
  }
  const s = new $y(r);
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
const e4 = /* @__PURE__ */ de("ZodISODateTime", (n, r) => {
  jE.init(n, r), ct.init(n, r);
});
function t4(n) {
  return RC(e4, n);
}
const n4 = /* @__PURE__ */ de("ZodISODate", (n, r) => {
  RE.init(n, r), ct.init(n, r);
});
function r4(n) {
  return DC(n4, n);
}
const a4 = /* @__PURE__ */ de("ZodISOTime", (n, r) => {
  DE.init(n, r), ct.init(n, r);
});
function i4(n) {
  return zC(a4, n);
}
const s4 = /* @__PURE__ */ de("ZodISODuration", (n, r) => {
  zE.init(n, r), ct.init(n, r);
});
function o4(n) {
  return PC(s4, n);
}
const u4 = (n, r) => {
  i_.init(n, r), n.name = "ZodError", Object.defineProperties(n, {
    format: {
      value: (s) => Tw(n, s)
      // enumerable: false,
    },
    flatten: {
      value: (s) => xw(n, s)
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
}, jn = de("ZodError", u4, {
  Parent: Error
}), l4 = /* @__PURE__ */ ch(jn), c4 = /* @__PURE__ */ dh(jn), d4 = /* @__PURE__ */ jl(jn), f4 = /* @__PURE__ */ Rl(jn), h4 = /* @__PURE__ */ Mw(jn), p4 = /* @__PURE__ */ jw(jn), m4 = /* @__PURE__ */ Rw(jn), g4 = /* @__PURE__ */ Dw(jn), v4 = /* @__PURE__ */ zw(jn), y4 = /* @__PURE__ */ Pw(jn), _4 = /* @__PURE__ */ Lw(jn), b4 = /* @__PURE__ */ Iw(jn), jt = /* @__PURE__ */ de("ZodType", (n, r) => (At.init(n, r), n.def = r, n.type = r.type, Object.defineProperty(n, "_def", { value: r }), n.check = (...s) => n.clone(Ba(r, {
  checks: [
    ...r.checks ?? [],
    ...s.map((i) => typeof i == "function" ? { _zod: { check: i, def: { check: "custom" }, onattach: [] } } : i)
  ]
})), n.clone = (s, i) => ra(n, s, i), n.brand = () => n, n.register = ((s, i) => (s.add(n, i), n)), n.parse = (s, i) => l4(n, s, i, { callee: n.parse }), n.safeParse = (s, i) => d4(n, s, i), n.parseAsync = async (s, i) => c4(n, s, i, { callee: n.parseAsync }), n.safeParseAsync = async (s, i) => f4(n, s, i), n.spa = n.safeParseAsync, n.encode = (s, i) => h4(n, s, i), n.decode = (s, i) => p4(n, s, i), n.encodeAsync = async (s, i) => m4(n, s, i), n.decodeAsync = async (s, i) => g4(n, s, i), n.safeEncode = (s, i) => v4(n, s, i), n.safeDecode = (s, i) => y4(n, s, i), n.safeEncodeAsync = async (s, i) => _4(n, s, i), n.safeDecodeAsync = async (s, i) => b4(n, s, i), n.refine = (s, i) => n.check(lk(s, i)), n.superRefine = (s) => n.check(ck(s)), n.overwrite = (s) => n.check(fo(s)), n.optional = () => Fy(n), n.nullable = () => Qy(n), n.nullish = () => Fy(Qy(n)), n.nonoptional = (s) => nk(n, s), n.array = () => za(n), n.or = (s) => V4([n, s]), n.and = (s) => Y4(n, s), n.transform = (s) => Ky(n, Q4(s)), n.default = (s) => W4(n, s), n.prefault = (s) => tk(n, s), n.catch = (s) => ak(n, s), n.pipe = (s) => Ky(n, s), n.readonly = () => ok(n), n.describe = (s) => {
  const i = n.clone();
  return Js.add(i, { description: s }), i;
}, Object.defineProperty(n, "description", {
  get() {
    return Js.get(n)?.description;
  },
  configurable: !0
}), n.meta = (...s) => {
  if (s.length === 0)
    return Js.get(n);
  const i = n.clone();
  return Js.add(i, s[0]), i;
}, n.isOptional = () => n.safeParse(void 0).success, n.isNullable = () => n.safeParse(null).success, n)), g_ = /* @__PURE__ */ de("_ZodString", (n, r) => {
  fh.init(n, r), jt.init(n, r);
  const s = n._zod.bag;
  n.format = s.format ?? null, n.minLength = s.minimum ?? null, n.maxLength = s.maximum ?? null, n.regex = (...i) => n.check(BC(...i)), n.includes = (...i) => n.check(qC(...i)), n.startsWith = (...i) => n.check(ZC(...i)), n.endsWith = (...i) => n.check(GC(...i)), n.min = (...i) => n.check(Nl(...i)), n.max = (...i) => n.check(p_(...i)), n.length = (...i) => n.check(m_(...i)), n.nonempty = (...i) => n.check(Nl(1, ...i)), n.lowercase = (i) => n.check(UC(i)), n.uppercase = (i) => n.check(HC(i)), n.trim = () => n.check($C()), n.normalize = (...i) => n.check(VC(...i)), n.toLowerCase = () => n.check(YC()), n.toUpperCase = () => n.check(XC());
}), S4 = /* @__PURE__ */ de("ZodString", (n, r) => {
  fh.init(n, r), g_.init(n, r), n.email = (s) => n.check(fC(w4, s)), n.url = (s) => n.check(vC(E4, s)), n.jwt = (s) => n.check(jC(I4, s)), n.emoji = (s) => n.check(yC(C4, s)), n.guid = (s) => n.check(Vy(Yy, s)), n.uuid = (s) => n.check(hC(ol, s)), n.uuidv4 = (s) => n.check(pC(ol, s)), n.uuidv6 = (s) => n.check(mC(ol, s)), n.uuidv7 = (s) => n.check(gC(ol, s)), n.nanoid = (s) => n.check(_C(k4, s)), n.guid = (s) => n.check(Vy(Yy, s)), n.cuid = (s) => n.check(bC(A4, s)), n.cuid2 = (s) => n.check(SC(x4, s)), n.ulid = (s) => n.check(wC(T4, s)), n.base64 = (s) => n.check(NC(z4, s)), n.base64url = (s) => n.check(OC(P4, s)), n.xid = (s) => n.check(EC(N4, s)), n.ksuid = (s) => n.check(CC(O4, s)), n.ipv4 = (s) => n.check(kC(M4, s)), n.ipv6 = (s) => n.check(AC(j4, s)), n.cidrv4 = (s) => n.check(xC(R4, s)), n.cidrv6 = (s) => n.check(TC(D4, s)), n.e164 = (s) => n.check(MC(L4, s)), n.datetime = (s) => n.check(t4(s)), n.date = (s) => n.check(r4(s)), n.time = (s) => n.check(i4(s)), n.duration = (s) => n.check(o4(s));
});
function Zt(n) {
  return dC(S4, n);
}
const ct = /* @__PURE__ */ de("ZodStringFormat", (n, r) => {
  ot.init(n, r), g_.init(n, r);
}), w4 = /* @__PURE__ */ de("ZodEmail", (n, r) => {
  EE.init(n, r), ct.init(n, r);
}), Yy = /* @__PURE__ */ de("ZodGUID", (n, r) => {
  SE.init(n, r), ct.init(n, r);
}), ol = /* @__PURE__ */ de("ZodUUID", (n, r) => {
  wE.init(n, r), ct.init(n, r);
}), E4 = /* @__PURE__ */ de("ZodURL", (n, r) => {
  CE.init(n, r), ct.init(n, r);
}), C4 = /* @__PURE__ */ de("ZodEmoji", (n, r) => {
  kE.init(n, r), ct.init(n, r);
}), k4 = /* @__PURE__ */ de("ZodNanoID", (n, r) => {
  AE.init(n, r), ct.init(n, r);
}), A4 = /* @__PURE__ */ de("ZodCUID", (n, r) => {
  xE.init(n, r), ct.init(n, r);
}), x4 = /* @__PURE__ */ de("ZodCUID2", (n, r) => {
  TE.init(n, r), ct.init(n, r);
}), T4 = /* @__PURE__ */ de("ZodULID", (n, r) => {
  NE.init(n, r), ct.init(n, r);
}), N4 = /* @__PURE__ */ de("ZodXID", (n, r) => {
  OE.init(n, r), ct.init(n, r);
}), O4 = /* @__PURE__ */ de("ZodKSUID", (n, r) => {
  ME.init(n, r), ct.init(n, r);
}), M4 = /* @__PURE__ */ de("ZodIPv4", (n, r) => {
  PE.init(n, r), ct.init(n, r);
}), j4 = /* @__PURE__ */ de("ZodIPv6", (n, r) => {
  LE.init(n, r), ct.init(n, r);
}), R4 = /* @__PURE__ */ de("ZodCIDRv4", (n, r) => {
  IE.init(n, r), ct.init(n, r);
}), D4 = /* @__PURE__ */ de("ZodCIDRv6", (n, r) => {
  BE.init(n, r), ct.init(n, r);
}), z4 = /* @__PURE__ */ de("ZodBase64", (n, r) => {
  UE.init(n, r), ct.init(n, r);
}), P4 = /* @__PURE__ */ de("ZodBase64URL", (n, r) => {
  qE.init(n, r), ct.init(n, r);
}), L4 = /* @__PURE__ */ de("ZodE164", (n, r) => {
  ZE.init(n, r), ct.init(n, r);
}), I4 = /* @__PURE__ */ de("ZodJWT", (n, r) => {
  VE.init(n, r), ct.init(n, r);
}), B4 = /* @__PURE__ */ de("ZodUnknown", (n, r) => {
  $E.init(n, r), jt.init(n, r);
});
function Xy() {
  return LC(B4);
}
const U4 = /* @__PURE__ */ de("ZodNever", (n, r) => {
  YE.init(n, r), jt.init(n, r);
});
function H4(n) {
  return IC(U4, n);
}
const q4 = /* @__PURE__ */ de("ZodArray", (n, r) => {
  XE.init(n, r), jt.init(n, r), n.element = r.element, n.min = (s, i) => n.check(Nl(s, i)), n.nonempty = (s) => n.check(Nl(1, s)), n.max = (s, i) => n.check(p_(s, i)), n.length = (s, i) => n.check(m_(s, i)), n.unwrap = () => n.element;
});
function za(n, r) {
  return FC(q4, n, r);
}
const Z4 = /* @__PURE__ */ de("ZodObject", (n, r) => {
  QE.init(n, r), jt.init(n, r), rt(n, "shape", () => r.shape), n.keyof = () => X4(Object.keys(n._zod.def.shape)), n.catchall = (s) => n.clone({ ...n._zod.def, catchall: s }), n.passthrough = () => n.clone({ ...n._zod.def, catchall: Xy() }), n.loose = () => n.clone({ ...n._zod.def, catchall: Xy() }), n.strict = () => n.clone({ ...n._zod.def, catchall: H4() }), n.strip = () => n.clone({ ...n._zod.def, catchall: void 0 }), n.extend = (s) => ww(n, s), n.safeExtend = (s) => Ew(n, s), n.merge = (s) => Cw(n, s), n.pick = (s) => bw(n, s), n.omit = (s) => Sw(n, s), n.partial = (...s) => kw(v_, n, s[0]), n.required = (...s) => Aw(y_, n, s[0]);
});
function ho(n, r) {
  const s = {
    type: "object",
    shape: n ?? {},
    ...Oe(r)
  };
  return new Z4(s);
}
const G4 = /* @__PURE__ */ de("ZodUnion", (n, r) => {
  KE.init(n, r), jt.init(n, r), n.options = r.options;
});
function V4(n, r) {
  return new G4({
    type: "union",
    options: n,
    ...Oe(r)
  });
}
const $4 = /* @__PURE__ */ de("ZodIntersection", (n, r) => {
  JE.init(n, r), jt.init(n, r);
});
function Y4(n, r) {
  return new $4({
    type: "intersection",
    left: n,
    right: r
  });
}
const qf = /* @__PURE__ */ de("ZodEnum", (n, r) => {
  WE.init(n, r), jt.init(n, r), n.enum = r.entries, n.options = Object.values(r.entries);
  const s = new Set(Object.keys(r.entries));
  n.extract = (i, u) => {
    const c = {};
    for (const f of i)
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
  }, n.exclude = (i, u) => {
    const c = { ...r.entries };
    for (const f of i)
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
function X4(n, r) {
  const s = Array.isArray(n) ? Object.fromEntries(n.map((i) => [i, i])) : n;
  return new qf({
    type: "enum",
    entries: s,
    ...Oe(r)
  });
}
const F4 = /* @__PURE__ */ de("ZodTransform", (n, r) => {
  eC.init(n, r), jt.init(n, r), n._zod.parse = (s, i) => {
    if (i.direction === "backward")
      throw new J0(n.constructor.name);
    s.addIssue = (c) => {
      if (typeof c == "string")
        s.issues.push(oo(c, s.value, r));
      else {
        const f = c;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = s.value), f.inst ?? (f.inst = n), s.issues.push(oo(f));
      }
    };
    const u = r.transform(s.value, s);
    return u instanceof Promise ? u.then((c) => (s.value = c, s)) : (s.value = u, s);
  };
});
function Q4(n) {
  return new F4({
    type: "transform",
    transform: n
  });
}
const v_ = /* @__PURE__ */ de("ZodOptional", (n, r) => {
  tC.init(n, r), jt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function Fy(n) {
  return new v_({
    type: "optional",
    innerType: n
  });
}
const K4 = /* @__PURE__ */ de("ZodNullable", (n, r) => {
  nC.init(n, r), jt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function Qy(n) {
  return new K4({
    type: "nullable",
    innerType: n
  });
}
const J4 = /* @__PURE__ */ de("ZodDefault", (n, r) => {
  rC.init(n, r), jt.init(n, r), n.unwrap = () => n._zod.def.innerType, n.removeDefault = n.unwrap;
});
function W4(n, r) {
  return new J4({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : n_(r);
    }
  });
}
const ek = /* @__PURE__ */ de("ZodPrefault", (n, r) => {
  aC.init(n, r), jt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function tk(n, r) {
  return new ek({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : n_(r);
    }
  });
}
const y_ = /* @__PURE__ */ de("ZodNonOptional", (n, r) => {
  iC.init(n, r), jt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function nk(n, r) {
  return new y_({
    type: "nonoptional",
    innerType: n,
    ...Oe(r)
  });
}
const rk = /* @__PURE__ */ de("ZodCatch", (n, r) => {
  sC.init(n, r), jt.init(n, r), n.unwrap = () => n._zod.def.innerType, n.removeCatch = n.unwrap;
});
function ak(n, r) {
  return new rk({
    type: "catch",
    innerType: n,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const ik = /* @__PURE__ */ de("ZodPipe", (n, r) => {
  oC.init(n, r), jt.init(n, r), n.in = r.in, n.out = r.out;
});
function Ky(n, r) {
  return new ik({
    type: "pipe",
    in: n,
    out: r
    // ...util.normalizeParams(params),
  });
}
const sk = /* @__PURE__ */ de("ZodReadonly", (n, r) => {
  uC.init(n, r), jt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function ok(n) {
  return new sk({
    type: "readonly",
    innerType: n
  });
}
const uk = /* @__PURE__ */ de("ZodCustom", (n, r) => {
  lC.init(n, r), jt.init(n, r);
});
function lk(n, r = {}) {
  return QC(uk, n, r);
}
function ck(n) {
  return KC(n);
}
const Jy = {
  ENTRY: "EntryRevision",
  GLOBAL: "GlobalRevision"
}, Zf = "placeholder-chatHistory", dk = ho({
  justification: Zt().describe("A brief, friendly explanation of the changes made."),
  name: Zt().describe("The entry's new name/comment."),
  triggers: za(Zt()).describe("The entry's new keywords/triggers."),
  content: Zt().describe("The entry's new content.")
}), fk = ho({
  worldName: Zt().describe("The name of the world where the new entry should be added."),
  name: Zt().describe("The new entry's name/comment."),
  triggers: za(Zt()).describe("The new entry's triggers."),
  content: Zt().describe("The new entry's content.")
}), hk = ho({
  worldName: Zt().describe("The name of the world containing the entry to change."),
  originalName: Zt().describe("The original name/comment of the entry to change, used for identification."),
  newName: Zt().optional().describe("The entry's new name/comment. If omitted, the name is not changed."),
  triggers: za(Zt()).optional().describe("The entry's new list of triggers."),
  content: Zt().optional().describe("The entry's new content.")
}), pk = ho({
  worldName: Zt().describe("The name of the world containing the entry to remove."),
  name: Zt().describe("The name/comment of the entry to remove.")
}), mk = ho({
  justification: Zt().describe("A brief, friendly explanation of all the operations performed."),
  add: za(fk).optional().describe("A list of new entries to add."),
  change: za(hk).optional().describe("A list of existing entries to change."),
  remove: za(pk).optional().describe("A list of existing entries to remove.")
});
function Sf(n) {
  return String(n).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function Gf(n, r = 0) {
  const s = "  ".repeat(r);
  if (Array.isArray(n))
    return n.map((i) => i !== null && typeof i == "object" ? `${s}<item>
${Gf(i, r + 1)}${s}</item>
` : `${s}<item>${Sf(i)}</item>
`).join("");
  if (n !== null && typeof n == "object") {
    let i = "";
    for (const u of Object.keys(n)) {
      const c = n[u];
      c !== null && typeof c == "object" ? i += `${s}<${u}>
${Gf(c, r + 1)}${s}</${u}>
` : i += `${s}<${u}>${Sf(c)}</${u}>
`;
    }
    return i;
  }
  return `${s}<value>${Sf(n)}</value>
`;
}
function gk(n, r) {
  const s = Ma(n);
  return r === "xml" ? `<root>
${Gf(s, 1)}</root>` : JSON.stringify(s, null, 2);
}
function vk(...n) {
  for (const r of n) if (r !== void 0) return r;
}
function yk(n) {
  return Array.isArray(n) ? n.find((r) => r !== "null") ?? n[0] : n;
}
function Ma(n) {
  if (!n || typeof n != "object") return null;
  const r = Array.isArray(n.examples) ? n.examples[0] : void 0, s = vk(n.example, r, n.default);
  if (s !== void 0) return s;
  if (n.const !== void 0) return n.const;
  if (Array.isArray(n.enum) && n.enum.length) return n.enum[0];
  const i = Array.isArray(n.anyOf) ? n.anyOf[0] : Array.isArray(n.oneOf) ? n.oneOf[0] : void 0;
  if (i) return Ma(i);
  switch (yk(n.type)) {
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
const _k = new R0({
  ignoreAttributes: !0,
  textNodeName: "#text",
  trimValues: !0,
  allowBooleanAttributes: !0
});
function Vf(n, r) {
  if (!(!r || !n || !r.properties))
    for (const s in r.properties) {
      if (!n.hasOwnProperty(s)) continue;
      const i = r.properties[s];
      let u = n[s];
      if (i.type === "array" && !Array.isArray(u) && (u === "" || u === null ? u = [] : u = [u], n[s] = u), i.type === "array" && i.items?.type === "object" && Array.isArray(u)) {
        const c = i.items.required || [], f = i.items.properties ? Object.keys(i.items.properties) : [], m = c.length > 0 ? c : f;
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
          _ && (u = p, n[s] = u);
        }
      }
      i.type === "object" && typeof u == "object" && u !== null ? Vf(u, i) : i.type === "array" && i.items?.type === "object" && Array.isArray(u) && u.forEach((c) => Vf(c, i.items)), i.type === "string" && typeof u != "string" ? n[s] = String(u) : i.type === "array" && i.items?.type === "string" && Array.isArray(u) && (n[s] = u.map(String));
    }
}
function bk(n, r, s = {}) {
  const i = /```(?:\w+\n|\n)?([\s\S]*?)```/, u = n.match(i);
  let c = u ? u[1].trim() : n.trim();
  const { previousContent: f } = s;
  f && (c = f + c.trimEnd());
  try {
    switch (r) {
      case "xml":
        const m = tS.validate(c);
        if (m !== !0)
          throw new Error(`Model response is not valid XML: ${m.err.msg}`);
        let p = _k.parse(c);
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
const Sk = new o3();
async function $f(n, r, s, i, u, c) {
  const f = !i.json_schema && !1;
  return new Promise((m, p) => {
    const _ = new AbortController(), g = c ?? _.signal;
    c && c.addEventListener("abort", () => _.abort(), { once: !0 }), Sk.generateRequest(
      {
        profileId: n,
        prompt: r,
        maxTokens: s,
        custom: { stream: f, signal: g },
        overridePayload: i
      },
      {
        abortController: _,
        onEntry: void 0,
        onFinish: (E, v, S) => g.aborted ? p(new DOMException("Request aborted by user", "AbortError")) : S ? p(S) : v === void 0 && S === void 0 ? p(new DOMException("Request aborted by user", "AbortError")) : (v || p(new Error("No data received from LLM")), S ? p(S) : m(v))
      }
    );
  });
}
async function wk(n, r, s, i) {
  const u = await $f(n, r, s, {}, void 0, i);
  if (!u?.content)
    throw new Error("Plain request failed to return content.");
  return u.content;
}
async function Wy(n, r, s, i, u, c, f) {
  const m = It.getSettings();
  let p, _;
  const g = WC(s);
  if (u === "native") {
    if (p = await $f(
      n,
      r,
      c,
      {
        json_schema: { name: i, strict: !0, value: g }
      },
      void 0,
      f
    ), !p?.content)
      throw new Error(`Structured request for ${i} failed to return content.`);
    _ = typeof p.content == "string" ? JSON.parse(p.content) : p.content;
  } else {
    const v = u, S = gk(g, v), h = JSON.stringify(g, null, 2), C = v === "json" ? "reviseJsonPrompt" : "reviseXmlPrompt", x = m.prompts[C]?.content;
    if (!x)
      throw new Error(`Prompt template for mode "${v}" not found.`);
    const O = {
      example_response: S,
      schema: h
    }, P = { role: "system", content: _n.compile(x, { noEscape: !0, strict: !0 })(O) };
    if (p = await $f(
      n,
      [...r, P],
      c,
      {},
      void 0,
      f
    ), !p?.content)
      throw new Error(`Structured request for ${i} failed to return content.`);
    _ = bk(p.content, v, { schema: g });
  }
  const E = s.safeParse(_);
  if (!E.success) {
    const v = `Model response failed schema validation for ${i}. Check console for details.`;
    throw console.error("Zod validation failed:", E.error.issues), console.error("Raw content parsed:", _), await ge("error", v), new Error(v);
  }
  return E.data;
}
const Ek = ({ originalContent: n, newContent: r }) => {
  const s = ie.useMemo(() => {
    const i = Q0(n, r);
    let u = "", c = "";
    return i.forEach((f) => {
      const m = f.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), _ = `<span style="${f.added ? "color: green; background-color: #e6ffed;" : f.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${m}</span>`;
      f.added || (u += _), f.removed || (c += _);
    }), { originalHtml: u, newHtml: c };
  }, [n, r]);
  return /* @__PURE__ */ A.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ A.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: s.originalHtml } }),
    /* @__PURE__ */ A.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: s.newHtml } })
  ] });
}, __ = ({ before: n, after: r }) => {
  const s = ie.useMemo(() => {
    const i = [];
    return !n || !r || ((n.comment || "") !== (r.comment || "") && i.push({ label: "Name", before: n.comment || "", after: r.comment || "" }), (n.key || []).join(", ") !== (r.key || []).join(", ") && i.push({ label: "Triggers", before: (n.key || []).join(", "), after: (r.key || []).join(", ") }), (n.content || "") !== (r.content || "") && i.push({ label: "Content", before: n.content || "", after: r.content || "" })), i;
  }, [n, r]);
  return /* @__PURE__ */ A.jsx(A.Fragment, { children: s.map(({ label: i, before: u, after: c }) => /* @__PURE__ */ A.jsxs("div", { className: "compare-state-item", children: [
    /* @__PURE__ */ A.jsx("h4", { children: i }),
    /* @__PURE__ */ A.jsxs("div", { className: "compare-state-header", children: [
      /* @__PURE__ */ A.jsx("span", { children: "Before" }),
      /* @__PURE__ */ A.jsx("span", { children: "After" })
    ] }),
    /* @__PURE__ */ A.jsx(Ek, { originalContent: u, newContent: c })
  ] }, i)) });
}, Ck = ({ before: n, after: r }) => {
  const { added: s, removed: i, changed: u } = ie.useMemo(() => {
    const f = n || {}, m = /* @__PURE__ */ new Map();
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
  }, [n, r]), c = s.length > 0 || i.length > 0 || u.length > 0;
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
    i.length > 0 && /* @__PURE__ */ A.jsxs("div", { className: "diff-section", children: [
      /* @__PURE__ */ A.jsxs("h4", { children: [
        "Removed Entries (",
        i.length,
        ")"
      ] }),
      i.map(({ worldName: f, entry: m }) => /* @__PURE__ */ A.jsxs("div", { className: "diff-entry removed", children: [
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
        /* @__PURE__ */ A.jsx(__, { before: m, after: p })
      ] }, `${f}::${p.uid}`))
    ] })
  ] }) : /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes were detected in the entries for this step." }) });
}, hh = ({ sessionType: n, before: r, after: s }) => !r && !s ? /* @__PURE__ */ A.jsxs("div", { className: "compare-state-popup", children: [
  /* @__PURE__ */ A.jsx("h3", { children: "Changes in this step" }),
  /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No state information available for this step." })
] }) : /* @__PURE__ */ A.jsxs("div", { className: "compare-state-popup", children: [
  /* @__PURE__ */ A.jsx("h3", { children: "Changes in this step" }),
  /* @__PURE__ */ A.jsx("div", { className: "compare-state-list", children: n === "global" ? /* @__PURE__ */ A.jsx(Ck, { before: r, after: s }) : /* @__PURE__ */ A.jsx(__, { before: r, after: s }) })
] }), kk = ({ currentState: n, initialState: r }) => {
  const [s, i] = ie.useState(!1), u = ie.useMemo(
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
        /* @__PURE__ */ A.jsx("input", { type: "checkbox", checked: s, onChange: (c) => i(c.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ A.jsx("div", { className: "current-state-content", children: s ? /* @__PURE__ */ A.jsx(hh, { sessionType: "entry", before: r, after: n }) : u.map(({ label: c, value: f }) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
      /* @__PURE__ */ A.jsx("label", { children: c }),
      /* @__PURE__ */ A.jsx("div", { className: "state-value", children: f || /* @__PURE__ */ A.jsx("span", { className: "subtle-text", children: "empty" }) })
    ] }, c)) })
  ] });
}, Ak = ({ currentState: n, initialState: r }) => {
  const [s, i] = ie.useState(!1);
  return /* @__PURE__ */ A.jsxs("div", { className: "current-state-popup global-state-popup", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h3", { children: s ? "Comparing with Original State" : "Current Suggested Entries" }),
      /* @__PURE__ */ A.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ A.jsx("input", { type: "checkbox", checked: s, onChange: (u) => i(u.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ A.jsx("div", { className: "current-state-content", children: s ? /* @__PURE__ */ A.jsx(hh, { sessionType: "global", before: r, after: n }) : Object.entries(n).map(([u, c]) => /* @__PURE__ */ A.jsxs("div", { className: "world-group", children: [
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
}, ji = SillyTavern.getContext(), xk = (n, r) => {
  const s = structuredClone(n);
  return s.comment = r.name, s.key = r.triggers, s.content = r.content, s;
}, Tk = (n, r) => {
  const s = structuredClone(n);
  if (r.remove)
    for (const i of r.remove) {
      const { worldName: u, name: c } = i;
      s[u] && (s[u] = s[u].filter((f) => f.comment !== c));
    }
  if (r.change)
    for (const i of r.change) {
      const { worldName: u, originalName: c } = i, f = s[u]?.find((m) => m.comment === c);
      f ? (i.newName !== void 0 && (f.comment = i.newName), i.triggers !== void 0 && (f.key = i.triggers), i.content !== void 0 && (f.content = i.content)) : (console.warn(`[WREC] Could not find entry to change: "${c}" in world "${u}"`), ge("warning", `Could not find entry to change: "${c}" in world "${u}"`));
    }
  if (r.add)
    for (const i of r.add) {
      const { worldName: u, name: c, triggers: f, content: m } = i;
      s[u] || (s[u] = []);
      const p = { entries: Object.fromEntries(s[u].map((g) => [g.uid, g])) }, _ = Jf(u, p);
      _ && (_.comment = c, _.key = f, _.content = m, s[u].push(_));
    }
  return s;
}, Nk = ({ initialState: n, onSave: r, onClose: s }) => {
  const [i, u] = ie.useState(n.comment), [c, f] = ie.useState(n.key.join(", ")), [m, p] = ie.useState(n.content), _ = () => {
    const g = {
      ...structuredClone(n),
      comment: i,
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
        /* @__PURE__ */ A.jsx(G0, { type: "text", value: i, onInput: (g) => u(g.currentTarget.value) })
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
}, Ok = ({
  session: n,
  onBack: r,
  onApply: s,
  onSessionUpdate: i,
  initialState: u,
  chatContextOptions: c
}) => {
  const [f, m] = ie.useState(n.messages), [p, _] = ie.useState(""), [g, E] = ie.useState(!1), [v, S] = ie.useState(null), [h, C] = ie.useState(!1), [x, O] = ie.useState(!1), [N, P] = ie.useState(null), [l, y] = ie.useState(""), w = ie.useRef(null), k = ie.useRef(null);
  ie.useEffect(() => {
    w.current?.scrollIntoView({ behavior: "smooth" });
  }, [f]);
  const M = ie.useCallback(
    (V, U, te) => {
      if (JSON.stringify(te) === JSON.stringify(U))
        return V;
      const ne = It.getSettings();
      let ue = "";
      if (n.type === "global") {
        const re = ne.prompts.reviseGlobalStateUpdate?.content, pe = ne.prompts.reviseGlobalStateUpdateAddedModified?.content, je = ne.prompts.reviseGlobalStateUpdateRemoved?.content;
        if (!re || !pe || !je) return V;
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
          return V;
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
        return [...V, re];
      }
      return V;
    },
    [n.type, n.worldName]
  ), z = ie.useCallback(
    async (V, U, te, ne) => {
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
        for (const fe of V)
          if (fe.id === Zf) {
            if (sn === void 0 && !Ft) continue;
            const we = await p0(je, c);
            we.warnings?.length && we.warnings.forEach((Le) => ge("warning", Le)), re.push(...we.result);
          } else
            re.push(fe);
        const Se = V.slice(0, V.length - (U ? 0 : 1)).reverse().find((fe) => fe.stateSnapshot)?.stateSnapshot ?? u;
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
          const fe = await wk(
            n.profileId,
            re,
            ue.maxResponseToken,
            k.current.signal
          ), we = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: fe
          }, Le = [...V, we];
          m(Le), i({ ...n, messages: Le });
        } else {
          let fe, we;
          if (n.type === "entry") {
            const Fe = await Wy(
              n.profileId,
              re,
              dk,
              Jy.ENTRY,
              n.promptEngineeringMode,
              ue.maxResponseToken,
              k.current.signal
            );
            fe = xk(Se, Fe), we = Fe.justification;
          } else {
            const Fe = await Wy(
              n.profileId,
              re,
              mk,
              Jy.GLOBAL,
              n.promptEngineeringMode,
              ue.maxResponseToken,
              k.current.signal
            );
            fe = Tk(Se, Fe), we = Fe.justification;
          }
          const Le = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: we,
            stateSnapshot: fe
          };
          let We = [...V, Le];
          We = M(We, fe, Se), m(We), i({ ...n, messages: We });
        }
      } catch (re) {
        re.name === "AbortError" ? ge("info", "Request was cancelled.") : (console.error("Revise request failed:", re), ge("error", `Request failed: ${re.message}`)), ne();
      } finally {
        E(!1), k.current = null;
      }
    },
    [n, i, u, c, M]
  ), R = ie.useCallback(async () => {
    if (!p.trim() || g) return;
    const V = { id: `msg-${Date.now()}`, role: "user", content: p.trim() }, U = f;
    await z(
      [...f, V],
      !1,
      () => {
        m([...f, V]), _("");
      },
      () => m(U)
    );
  }, [p, g, f, z]), L = ie.useCallback(async () => {
    if (g || f.length === 0) return;
    const V = f;
    let U = [...f];
    const te = f.findLastIndex((ne) => !ne.isStateUpdate);
    te > -1 && f[te].role === "assistant" && (U = f.slice(0, te)), await z(
      U,
      !0,
      () => m(U),
      () => m(V)
    );
  }, [g, f, z]), Z = () => {
    const V = f.slice().reverse().find((U) => U.stateSnapshot)?.stateSnapshot ?? u;
    s(V), r();
  }, F = (V) => {
    const U = f.findIndex((ue) => ue.id === V);
    if (U < 0 || !f[U].stateSnapshot) return;
    const te = f[U].stateSnapshot;
    let ne = u;
    for (let ue = U - 1; ue >= 0; ue--)
      if (f[ue].stateSnapshot) {
        ne = f[ue].stateSnapshot;
        break;
      }
    S({ before: ne, after: te });
  }, $ = (V) => {
    P(V.id), y(V.content);
  }, W = () => {
    P(null), y("");
  }, j = async () => {
    if (!N) return;
    const V = f.findIndex((pe) => pe.id === N);
    if (V === -1 || !await ji.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const te = f, ne = f.slice(0, V), ue = { ...f[V], content: l }, re = [...ne, ue];
    W(), await z(
      re,
      !1,
      () => m(re),
      () => m(te)
    );
  }, B = async (V) => {
    const U = f.findIndex((re) => re.id === V);
    if (U === -1) return;
    const te = !!f[U].isInitial;
    if (!await ji.Popup.show.confirm(
      "Delete Message",
      te ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    const ue = te ? f.filter((re) => re.isInitial && re.id !== V) : f.slice(0, U);
    m(ue), i({ ...n, messages: ue }), ge("info", "Message history has been updated.");
  }, K = (V) => {
    const U = f.slice().reverse().find((ue) => ue.stateSnapshot)?.stateSnapshot ?? u, te = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: "I made a change manually.",
      stateSnapshot: V
    };
    let ne = [...f, te];
    ne = M(ne, V, U), m(ne), i({ ...n, messages: ne }), O(!1);
  }, ae = f.slice().reverse().find((V) => V.stateSnapshot)?.stateSnapshot ?? u, I = f.filter((V) => !V.isStateUpdate), Y = I.filter((V) => V.isInitial), ce = I.filter((V) => !V.isInitial);
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
              onChange: (V) => i({ ...n, isReadonly: V.target.checked })
            }
          ),
          "Readonly Mode"
        ] }),
        /* @__PURE__ */ A.jsx("div", { style: { maxWidth: "200px" }, children: /* @__PURE__ */ A.jsx(
          V0,
          {
            initialSelectedProfileId: n.profileId,
            onChange: (V) => i({ ...n, profileId: V?.id ?? "" })
          }
        ) }),
        /* @__PURE__ */ A.jsxs(
          "select",
          {
            className: "text_pole",
            value: n.promptEngineeringMode,
            onChange: (V) => i({ ...n, promptEngineeringMode: V.target.value }),
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
        n.type === "entry" && /* @__PURE__ */ A.jsx(Ee, { onClick: () => O(!0), title: "Manually edit the current state", children: "Edit State" }),
        /* @__PURE__ */ A.jsx(Ee, { onClick: r, title: "Back to sessions", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ A.jsxs(Ee, { onClick: Z, title: "Apply Changes and Close", children: [
          /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
          " Apply"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "chat-messages", children: [
      Y.length > 0 && /* @__PURE__ */ A.jsxs("details", { className: "initial-messages-container", children: [
        /* @__PURE__ */ A.jsx("summary", { children: "View Initial Context" }),
        /* @__PURE__ */ A.jsx("div", { className: "initial-messages-content", children: Y.map(
          (V) => N === V.id ? /* @__PURE__ */ A.jsxs("div", { className: "message-editor", children: [
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
          ] }, V.id) : /* @__PURE__ */ A.jsxs("div", { className: `message-bubble-wrapper initial-context ${V.role}`, children: [
            /* @__PURE__ */ A.jsx("div", { className: `message-bubble ${V.role} initial`, children: /* @__PURE__ */ A.jsx("div", { className: "message-content", children: V.content }) }),
            !g && V.id !== Zf && /* @__PURE__ */ A.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ A.jsx(
                Ee,
                {
                  className: "message-action-button",
                  onClick: () => $(V),
                  title: "Edit Context",
                  children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-pencil" })
                }
              ),
              /* @__PURE__ */ A.jsx(
                Ee,
                {
                  className: "message-action-button danger_button",
                  onClick: () => B(V.id),
                  title: "Delete Context",
                  children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" })
                }
              )
            ] })
          ] }, V.id)
        ) })
      ] }),
      ce.map(
        (V) => N === V.id ? /* @__PURE__ */ A.jsxs("div", { className: "message-editor", children: [
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
        ] }, V.id) : /* @__PURE__ */ A.jsxs("div", { className: `message-bubble-wrapper ${V.role}`, children: [
          /* @__PURE__ */ A.jsxs("div", { className: "message-actions", children: [
            V.role === "user" && !V.stateSnapshot && !g && /* @__PURE__ */ A.jsx(
              Ee,
              {
                className: "message-action-button",
                onClick: () => $(V),
                title: "Edit and Fork",
                children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-pencil" })
              }
            ),
            V.stateSnapshot && !g && /* @__PURE__ */ A.jsx(
              Ee,
              {
                className: "message-action-button",
                onClick: () => F(V.id),
                title: "Compare changes",
                children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-code-compare" })
              }
            ),
            !g && /* @__PURE__ */ A.jsx(
              Ee,
              {
                className: "message-action-button danger_button",
                onClick: () => B(V.id),
                title: "Delete Message",
                children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" })
              }
            )
          ] }),
          /* @__PURE__ */ A.jsx("div", { className: `message-bubble ${V.role}`, children: /* @__PURE__ */ A.jsx("div", { className: "message-content", children: V.content }) })
        ] }, V.id)
      ),
      ce.length > 0 && !g && /* @__PURE__ */ A.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ A.jsxs(Ee, { onClick: L, title: "Regenerate response", children: [
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
          onChange: (V) => _(V.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: g || !!N,
          onKeyDown: (V) => {
            V.key === "Enter" && !V.shiftKey && (V.preventDefault(), R());
          }
        }
      ),
      /* @__PURE__ */ A.jsx(Ee, { onClick: R, disabled: g || !p.trim() || !!N, children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-paper-plane" }) })
    ] }),
    v && /* @__PURE__ */ A.jsx(
      tr,
      {
        type: Lt.DISPLAY,
        content: /* @__PURE__ */ A.jsx(hh, { sessionType: n.type, before: v.before, after: v.after }),
        onComplete: () => S(null),
        options: { wide: !0, large: !0 }
      }
    ),
    h && /* @__PURE__ */ A.jsx(
      tr,
      {
        type: Lt.DISPLAY,
        content: n.type === "entry" ? /* @__PURE__ */ A.jsx(kk, { currentState: ae, initialState: u }) : /* @__PURE__ */ A.jsx(
          Ak,
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
        type: Lt.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          Nk,
          {
            initialState: ae,
            onSave: (V) => {
              K(V), O(!1);
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
async function Mk(n, r, s, i, u, c, f) {
  const m = It.getSettings(), p = m.mainContextTemplatePresets[i];
  if (!p)
    throw new Error(`Main context template preset "${i}" not found.`);
  const _ = [], g = {
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
        const C = new Set(c.selectedEntryUids[S] ?? []), x = C.size > 0 ? h.filter((O) => C.has(O.uid)) : h.filter((O) => !O.disable);
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
      _.push({
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
      targetEntryName: r === "entry" ? n.comment : ""
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
const ul = SillyTavern.getContext(), e0 = "worldInfoRecommender_reviseSessions", b_ = ({
  target: n,
  initialState: r,
  onClose: s,
  onApply: i,
  sessionForContext: u,
  allEntries: c,
  contextToSend: f
}) => {
  const [m, p] = ie.useState([]), [_, g] = ie.useState(null), [E, v] = ie.useState(!0), S = ie.useMemo(() => n.type === "entry" ? `${n.worldName}::${n.entry.uid}::${n.entry.comment}` : "global", [n]);
  ie.useEffect(() => {
    const w = JSON.parse(localStorage.getItem(e0) || "[]");
    p(w), v(!1);
  }, []);
  const h = ie.useMemo(() => n.type === "entry" ? m.filter((w) => w.type === "entry" && w.targetEntryIdentifier === S).sort((w, k) => new Date(k.createdAt).getTime() - new Date(w.createdAt).getTime()) : m.filter((w) => w.type === "global").sort((w, k) => new Date(k.createdAt).getTime() - new Date(w.createdAt).getTime()), [m, n.type, S]), C = (w) => {
    localStorage.setItem(e0, JSON.stringify(w)), p(w);
  }, x = async () => {
    const w = await ul.Popup.show.input(
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
        const M = await Mk(
          r,
          n.type,
          n.type === "entry" ? n.worldName : void 0,
          k.mainContextTemplatePreset,
          f,
          u,
          c
        ), z = {
          id: `rs-${Date.now()}`,
          name: w,
          type: n.type,
          targetEntryIdentifier: n.type === "entry" ? S : void 0,
          worldName: n.type === "entry" ? n.worldName : void 0,
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          messages: M,
          context: { mainContextTemplatePreset: k.mainContextTemplatePreset },
          profileId: k.profileId,
          promptEngineeringMode: k.defaultPromptEngineeringMode,
          isReadonly: !1
        };
        g(z);
      } catch (k) {
        const M = k instanceof Error ? k.message : String(k);
        console.error("Failed to create session:", k), ge("error", `Failed to create session: ${M}`);
      }
  }, O = (w) => {
    g(w);
  }, N = async (w) => {
    if (await ul.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const M = m.filter((z) => z.id !== w);
      C(M);
    }
  }, P = (w) => {
    const k = m.findIndex((z) => z.id === w.id), M = [...m];
    k !== -1 ? M[k] = w : M.push(w), C(M), g(w);
  }, l = (w) => {
    n.type === "entry" ? i({
      worldName: n.worldName,
      originalEntry: r,
      updatedEntry: w
    }) : i(w), s();
  };
  if (_) {
    const w = ul.extensionSettings.connectionManager?.profiles?.find(
      (z) => z.id === _.profileId
    ), k = f.messages, M = {
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
      M.messageIndexesBetween = { start: -1, end: -1 };
    else
      switch (k.type) {
        case "none":
          M.messageIndexesBetween = { start: -1, end: -1 };
          break;
        case "first":
          M.messageIndexesBetween = { start: 0, end: k.first ?? 10 };
          break;
        case "last": {
          const z = ul.chat?.length ?? 0, R = k.last ?? 10;
          M.messageIndexesBetween = {
            end: Math.max(0, z - 1),
            start: Math.max(0, z - R)
          };
          break;
        }
        case "range":
          k.range && (M.messageIndexesBetween = {
            start: k.range.start,
            end: k.range.end
          });
          break;
      }
    return /* @__PURE__ */ A.jsx(
      Ok,
      {
        session: _,
        onBack: () => g(null),
        onApply: l,
        onSessionUpdate: P,
        initialState: r,
        chatContextOptions: M
      }
    );
  }
  const y = n.type === "entry" ? `Revise Sessions for "${n.entry.comment}"` : "Global Revise Sessions";
  return /* @__PURE__ */ A.jsxs("div", { className: "revise-session-manager", children: [
    /* @__PURE__ */ A.jsx("div", { className: "popup_header", children: /* @__PURE__ */ A.jsx("h2", { children: y }) }),
    /* @__PURE__ */ A.jsx("div", { className: "session-list", children: E ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : h.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create one to get started." }) : h.map((w) => /* @__PURE__ */ A.jsxs("div", { className: "session-item", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "session-info", onClick: () => O(w), children: [
        /* @__PURE__ */ A.jsx("span", { className: "session-name", children: w.name }),
        /* @__PURE__ */ A.jsx("span", { className: "session-date", children: new Date(w.createdAt).toLocaleString() })
      ] }),
      /* @__PURE__ */ A.jsx(Ee, { className: "danger_button", onClick: () => N(w.id), children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] }, w.id)) }),
    /* @__PURE__ */ A.jsx("div", { className: "session-actions", children: /* @__PURE__ */ A.jsxs(Ee, { onClick: x, className: "menu_button", children: [
      /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) })
  ] });
}, jk = new QS.Converter(), Rk = ({
  initialWorldName: n,
  entry: r,
  allWorldNames: s,
  existingEntry: i,
  sessionRegexIds: u,
  onAdd: c,
  onRemove: f,
  onContinue: m,
  onUpdate: p,
  entriesGroupByWorldName: _,
  sessionForContext: g,
  contextToSend: E
}) => {
  const [v, S] = ie.useState(() => s.find((I) => I === n) ?? s[0] ?? ""), [h, C] = ie.useState(!1), [x, O] = ie.useState(!1), [N, P] = ie.useState(!1), [l, y] = ie.useState(!1), [w, k] = ie.useState(!1), [M, z] = ie.useState(!1), [R, L] = ie.useState(""), Z = ie.useRef(null), F = ie.useMemo(
    () => !!_[v]?.find((ae) => ae.uid === r.uid && ae.comment === r.comment),
    [v, r.uid, r.comment, _]
  ), $ = x || N, W = async () => {
    C(!0), await c(r, n, v);
  }, j = async () => {
    O(!0), await m({ worldName: n, entry: r, prompt: R, mode: "continue" }), O(!1);
  }, B = async () => {
    P(!0), await m({ worldName: n, entry: r, prompt: R, mode: "revise" }), P(!1);
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
        /* @__PURE__ */ A.jsx(Ee, { onClick: W, disabled: h || $, className: "menu_button interactable add", children: F ? "Update" : "Add" }),
        /* @__PURE__ */ A.jsxs(
          Ee,
          {
            onClick: () => z(!0),
            disabled: $,
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
            disabled: $,
            className: "menu_button interactable continue",
            title: "Continue writing this entry. You can provide instructions in the textbox below.",
            children: x ? "..." : "Continue"
          }
        ),
        /* @__PURE__ */ A.jsx(
          Ee,
          {
            onClick: B,
            disabled: $,
            className: "menu_button interactable revise",
            title: "Request changes to this entry. Provide instructions in the textbox below.",
            children: N ? "..." : "Revise"
          }
        ),
        /* @__PURE__ */ A.jsx(Ee, { onClick: () => y(!0), disabled: $, className: "menu_button interactable edit", children: "Edit" }),
        F && /* @__PURE__ */ A.jsx(
          Ee,
          {
            onClick: () => k(!0),
            disabled: $,
            className: "menu_button interactable compare",
            children: "Compare"
          }
        ),
        /* @__PURE__ */ A.jsx(
          Ee,
          {
            onClick: () => f(r, n, !0),
            disabled: $,
            className: "menu_button interactable blacklist",
            children: "Blacklist"
          }
        ),
        /* @__PURE__ */ A.jsx(
          Ee,
          {
            onClick: () => f(r, n, !1),
            disabled: $,
            className: "menu_button interactable remove",
            children: "Remove"
          }
        )
      ] }),
      /* @__PURE__ */ A.jsx("h4", { className: "comment", children: r.comment }),
      /* @__PURE__ */ A.jsx("div", { className: "key", children: r.key.join(", ") }),
      /* @__PURE__ */ A.jsx("p", { className: "content", dangerouslySetInnerHTML: { __html: jk.makeHtml(r.content ?? "") } }),
      /* @__PURE__ */ A.jsx("div", { className: "continue-prompt-section", style: { marginTop: "10px" }, children: /* @__PURE__ */ A.jsx(
        qn,
        {
          value: R,
          onChange: (ae) => L(ae.target.value),
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
        content: /* @__PURE__ */ A.jsx(gw, { ref: Z, entry: r, initialRegexIds: u }),
        onComplete: (ae) => {
          if (ae && Z.current) {
            const { updatedEntry: I, updatedRegexIds: Y } = Z.current.getFormData();
            p(n, r, I, Y);
          }
          y(!1);
        }
      }
    ),
    w && i && /* @__PURE__ */ A.jsx(
      tr,
      {
        type: Lt.DISPLAY,
        content: /* @__PURE__ */ A.jsx(pw, { originalEntry: i, newEntry: r }),
        onComplete: () => k(!1)
      }
    ),
    M && /* @__PURE__ */ A.jsx(
      tr,
      {
        type: Lt.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          b_,
          {
            target: { type: "entry", worldName: n, entry: r },
            initialState: r,
            onClose: () => z(!1),
            onApply: K,
            sessionForContext: g,
            allEntries: _,
            contextToSend: E
          }
        ),
        onComplete: () => z(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, t0 = ie.forwardRef(
  ({ entriesByWorldName: n, initialSelectedUids: r, title: s }, i) => {
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
          (O) => O.comment.toLowerCase().includes(v) || h.toLowerCase().includes(v)
        );
        x.length > 0 && (S[h] = x);
      }), S;
    }, [u, n]);
    ie.useImperativeHandle(i, () => ({
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
), Mt = SillyTavern.getContext(), Da = Mt, Zn = (n) => structuredClone(n ?? {}), wf = (n, r) => {
  for (const s of Object.keys(n))
    delete n[s];
  Object.assign(n, Zn(r));
}, zl = () => Mt.extensionSettings.connectionManager?.profiles ?? [];
function Dk() {
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
function ph(n) {
  return Mt.getPresetManager(n);
}
function Ef(n) {
  const r = Yf(n);
  if (!r) return;
  const s = Ws(r), i = ph(s), u = r.preset ? i?.getCompletionPresetByName(r.preset) : void 0;
  return {
    profile: Zn(r),
    preset: Zn(u ?? {}),
    presetApiId: s,
    selectedApiGroup: Xf(r)
  };
}
async function zk(n) {
  if (!n.id)
    throw new Error("Profile must have an id.");
  if (!n.name?.trim())
    throw new Error("Profile name cannot be empty.");
  const r = zl(), s = r.findIndex((u) => u.id === n.id);
  if (s === -1)
    throw new Error(`Profile not found: ${n.id}`);
  const i = Zn(r[s]);
  return r[s] = Zn(n), Mt.saveSettingsDebounced(), await Mt.eventSource.emit(Da.eventTypes.CONNECTION_PROFILE_UPDATED, i, r[s]), r[s];
}
async function Pk(n, r, s, i) {
  const u = i.trim();
  if (!u)
    throw new Error("Profile name cannot be empty.");
  const c = zl();
  if (c.some((p) => p.name === u))
    throw new Error(`A profile named "${u}" already exists.`);
  const f = ph(s);
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
async function Lk(n, r, s) {
  if (!n.preset?.trim())
    throw new Error("Profile must have a preset name before saving preset settings.");
  const i = ph(s);
  if (!i?.savePreset)
    throw new Error(`Could not find the ${s} preset manager.`);
  await i.savePreset(n.preset, Zn(r));
}
function Ik() {
  return {
    selectedProfile: Da.extensionSettings.connectionManager?.selectedProfile ?? null,
    chatCompletionSettings: Zn(Mt.chatCompletionSettings),
    textCompletionSettings: Zn(Mt.textCompletionSettings),
    powerUserSettings: Zn(Mt.powerUserSettings)
  };
}
async function Bk(n) {
  if (n)
    try {
      const r = n.selectedProfile, s = r ? !!Yf(r) : !1, i = Mt.SlashCommandParser?.commands?.profile;
      if (i)
        if (s && r) {
          const u = Yf(r);
          await i.callback({ await: "true", timeout: "2000" }, u?.name ?? "");
        } else
          await i.callback({ await: "false" }, "<None>");
      else Da.extensionSettings.connectionManager && (Da.extensionSettings.connectionManager.selectedProfile = s ? r : "");
      wf(Mt.chatCompletionSettings, n.chatCompletionSettings), wf(Mt.textCompletionSettings, n.textCompletionSettings), wf(Mt.powerUserSettings, n.powerUserSettings), Da.extensionSettings.connectionManager && (Da.extensionSettings.connectionManager.selectedProfile = s ? r : ""), Mt.saveSettingsDebounced();
    } catch (r) {
      console.error("[WorldInfoRecommender] Failed to restore SillyTavern API settings:", r), await ge("warning", "Failed to restore SillyTavern API settings after closing World Info Recommender.");
    }
}
const S_ = SillyTavern.getContext(), Ta = (n) => JSON.stringify(n ?? {}, null, 2), Na = (n, r) => {
  try {
    return JSON.parse(n);
  } catch (s) {
    throw new Error(`${r} is not valid JSON: ${s.message}`);
  }
}, Uk = () => Object.entries(S_.CONNECT_API_MAP).filter(([, n]) => n?.selected === "openai" || n?.selected === "textgenerationwebui").sort(([n], [r]) => n.localeCompare(r)), Hk = (n) => n.model ?? "", qk = ({ profileId: n, onProfileSelected: r }) => {
  const [s, i] = ie.useState(() => Ef(n)), [u, c] = ie.useState(() => Ta(s?.profile)), [f, m] = ie.useState(() => Ta(s?.preset)), [p, _] = ie.useState(!1), [g, E] = ie.useState(!1), v = ie.useMemo(() => Uk(), []), S = ie.useCallback((w) => {
    const k = Ef(w);
    i(k), c(Ta(k?.profile)), m(Ta(k?.preset));
  }, []);
  ie.useEffect(() => {
    S(n);
  }, [n, S]);
  const h = (w, k) => {
    i((M) => {
      if (!M) return M;
      const z = { ...M.profile, [w]: k }, R = {
        ...M,
        profile: z,
        presetApiId: Ws(z),
        selectedApiGroup: Xf(z)
      };
      return c(Ta(z)), R;
    });
  }, C = () => {
    if (s)
      try {
        const w = Na(u, "Profile JSON");
        i((k) => k && {
          ...k,
          profile: w,
          presetApiId: Ws(w),
          selectedApiGroup: Xf(w)
        }), ge("success", "Profile JSON loaded into the editor draft.");
      } catch (w) {
        ge("error", w.message);
      }
  }, x = () => {
    try {
      const w = Na(f, "Preset JSON");
      i((k) => k && { ...k, preset: w }), ge("success", "Preset JSON loaded into the editor draft.");
    } catch (w) {
      ge("error", w.message);
    }
  }, O = async () => {
    if (s) {
      E(!0);
      try {
        const w = Na(u, "Profile JSON"), k = await zk(w), M = Ef(k.id);
        i(M), c(Ta(M?.profile)), m(Ta(M?.preset)), r(k.id), await ge("success", `Profile "${k.name}" saved.`);
      } catch (w) {
        await ge("error", w.message);
      } finally {
        E(!1);
      }
    }
  }, N = async () => {
    if (s) {
      E(!0);
      try {
        const w = Na(u, "Profile JSON"), k = Na(f, "Preset JSON");
        await Lk(w, k, Ws(w)), i((M) => M && { ...M, preset: k }), await ge("success", `Preset "${w.preset}" saved.`);
      } catch (w) {
        await ge("error", w.message);
      } finally {
        E(!1);
      }
    }
  }, P = async () => {
    if (!s) return;
    const w = s.profile.name ? `${s.profile.name} copy` : "New WIR Profile", k = await S_.Popup.show.input("Create Connection Profile", "Profile name:", w);
    if (!(!k || typeof k != "string")) {
      E(!0);
      try {
        const M = Na(u, "Profile JSON"), z = Na(f, "Preset JSON"), R = await Pk(M, z, Ws(M), k);
        r(R.id), S(R.id), await ge("success", `Profile "${R.name}" created.`);
      } catch (M) {
        await ge("error", M.message);
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
  const l = s.selectedApiGroup === "textgenerationwebui", y = s.selectedApiGroup === "openai";
  return /* @__PURE__ */ A.jsxs("div", { className: "api-settings-panel", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "api-settings-header", children: [
      /* @__PURE__ */ A.jsxs("div", { children: [
        /* @__PURE__ */ A.jsx("h3", { children: "API Settings" }),
        /* @__PURE__ */ A.jsx("span", { children: y ? "Chat Completion" : l ? "Text Completion" : "Connection Profile" })
      ] }),
      /* @__PURE__ */ A.jsx(
        Ee,
        {
          className: "menu_button fa-solid fa-file-circle-plus",
          title: "Create profile from editor",
          onClick: P,
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
            onChange: (w) => h("name", w.target.value)
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
            onChange: (w) => h("api", w.target.value),
            children: [
              /* @__PURE__ */ A.jsx("option", { value: "", children: "Select API" }),
              v.map(([w]) => /* @__PURE__ */ A.jsx("option", { value: w, children: w }, w))
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
            onChange: (w) => h("preset", w.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ A.jsxs("label", { children: [
        "Model",
        /* @__PURE__ */ A.jsx(
          "input",
          {
            className: "text_pole",
            value: Hk(s.profile),
            onChange: (w) => h("model", w.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ A.jsxs("label", { children: [
        "API URL",
        /* @__PURE__ */ A.jsx(
          "input",
          {
            className: "text_pole",
            value: s.profile["api-url"] ?? "",
            onChange: (w) => h("api-url", w.target.value)
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
            onChange: (w) => h("secret-id", w.target.value)
          }
        )
      ] }),
      l && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsxs("label", { children: [
          "Instruct Template",
          /* @__PURE__ */ A.jsx(
            "input",
            {
              className: "text_pole",
              value: s.profile.instruct ?? "",
              onChange: (w) => h("instruct", w.target.value)
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
              onChange: (w) => h("context", w.target.value)
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
              onChange: (w) => h("sysprompt", w.target.value)
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
              onChange: (w) => h("tokenizer", w.target.value)
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "api-settings-actions", children: [
      /* @__PURE__ */ A.jsx(Ee, { className: "menu_button interactable", onClick: O, disabled: g, children: "Save Profile" }),
      /* @__PURE__ */ A.jsx(Ee, { className: "menu_button interactable", onClick: N, disabled: g, children: "Save Preset" }),
      /* @__PURE__ */ A.jsx(Ee, { className: "menu_button", onClick: () => _((w) => !w), children: p ? "Hide Raw JSON" : "Show Raw JSON" })
    ] }),
    p && /* @__PURE__ */ A.jsxs("div", { className: "api-settings-raw", children: [
      /* @__PURE__ */ A.jsxs("div", { children: [
        /* @__PURE__ */ A.jsxs("div", { className: "raw-heading", children: [
          /* @__PURE__ */ A.jsx("span", { children: "Profile JSON" }),
          /* @__PURE__ */ A.jsx(Ee, { className: "menu_button", onClick: C, children: "Load JSON" })
        ] }),
        /* @__PURE__ */ A.jsx(qn, { value: u, onChange: (w) => c(w.target.value), rows: 10 })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { children: [
        /* @__PURE__ */ A.jsxs("div", { className: "raw-heading", children: [
          /* @__PURE__ */ A.jsx("span", { children: "Preset JSON" }),
          /* @__PURE__ */ A.jsx(Ee, { className: "menu_button", onClick: x, children: "Load JSON" })
        ] }),
        /* @__PURE__ */ A.jsx(qn, { value: f, onChange: (w) => m(w.target.value), rows: 10 })
      ] })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "api-settings-footnote", children: [
      Dk().length,
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
const Un = SillyTavern.getContext(), ll = () => sn ? h0(sn) : Ft, Zk = () => {
  const n = X0(), r = It.getSettings(), [s, i] = ie.useState({
    suggestedEntries: {},
    blackListedEntries: [],
    selectedWorldNames: [],
    selectedEntryUids: {},
    regexIds: {}
  }), [u, c] = ie.useState([]), [f, m] = ie.useState({}), [p, _] = ie.useState([]), [g, E] = ie.useState(!0), [v, S] = ie.useState(!1), [h, C] = ie.useState(!1), [x, O] = ie.useState(!1), [N, P] = ie.useState(!1), l = ie.useRef(null), y = ie.useRef(null), w = ie.useMemo(() => ll() ?? "_global", [sn, Ft]);
  ie.useEffect(() => {
    (async () => {
      E(!0), m({}), c([]), _([]);
      const te = ll(), ne = `worldInfoRecommend_${w}`, ue = JSON.parse(localStorage.getItem(ne) ?? "{}"), re = {
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
          const fe = av.find((we) => we.id === Ft);
          if (fe)
            for (const we of fe.members) {
              const Le = Un.characters.findIndex((We) => We.avatar === we);
              if (Le !== -1) {
                const We = await ml(["character"], !0, Le);
                We && (pe = { ...pe, ...We });
              }
            }
        } else
          pe = await ml(["all"], !0, sn);
      else
        for (const me of $1) {
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
      if (re.selectedEntryUids = Se, i(re), Ft) {
        const me = av.find((fe) => fe.id === Ft);
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
    It.getSettings()[U] = te, It.saveSettings(), n();
  }, M = (U, te) => {
    It.getSettings().contextToSend[U] = te, It.saveSettings(), n();
  }, z = ie.useCallback(
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
        const Se = { entries: Object.fromEntries(ue[te].map((fe) => [fe.uid, fe])) }, me = Jf(te, Se);
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
        const ue = ll(), re = {
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
        const Se = U ? { worldName: U.worldName, entry: U.entry, mode: U.mode } : void 0, me = await Z0({
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
        Object.keys(me).length > 0 ? i(U ? (fe) => {
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
  ), L = ie.useCallback(
    async (U, te, ne) => {
      try {
        const ue = await z(U, ne);
        ue === "unchanged" ? ge("info", `No changes detected for "${U.comment}". Entry was not updated.`) : ge("success", ue === "added" ? "Entry added" : "Entry updated"), i((re) => {
          const pe = { ...re.suggestedEntries };
          return pe[te] && (pe[te] = pe[te].filter(
            (je) => !(je.uid === U.uid && je.comment === U.comment)
          )), { ...re, suggestedEntries: pe };
        });
      } catch (ue) {
        console.error(ue), ge("error", `Failed to add entry: ${ue.message}`);
      }
    },
    [z]
  ), Z = async () => {
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
        const fe = await z(me, Se, !0);
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
    i((Se) => ({ ...Se, suggestedEntries: {} })), ge("success", `Processed: ${ne} new, ${ue} updated, ${re} unchanged.`), S(!1);
  }, F = async () => {
    await Un.Popup.show.confirm(
      "Reset",
      "Clear all suggestions and reset lorebook selection?"
    ) && (i((te) => ({
      ...te,
      suggestedEntries: {},
      blackListedEntries: [],
      selectedWorldNames: ll() ? [...u] : [],
      selectedEntryUids: {}
    })), ge("success", "Reset successful"));
  }, $ = (U, te, ne) => {
    i((ue) => {
      const re = { ...ue };
      ne && (re.blackListedEntries = [...re.blackListedEntries, `${te} (${U.comment})`]);
      const pe = { ...re.suggestedEntries };
      return pe[te] && (pe[te] = pe[te].filter(
        (je) => !(je.uid === U.uid && je.comment === U.comment)
      )), re.suggestedEntries = pe, re;
    });
  }, W = (U, te, ne, ue) => {
    i((re) => {
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
      i((te) => {
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
          const fe = (pe.content || "") !== (Se.content || ""), we = (pe.comment || "") !== (Se.comment || ""), Le = (pe.key || []).slice().sort().join(",") !== (Se.key || []).slice().sort().join(",");
          (fe || we || Le) && (me = !0);
        }
        me && (ne[ue] || (ne[ue] = []), ne[ue].push(pe));
      });
    }), i((ue) => ({ ...ue, suggestedEntries: ne })), ge("success", "Changes from global revise session applied.");
  }, I = ie.useMemo(
    () => Object.keys(r.promptPresets).map((U) => ({ value: U, label: U })),
    [r.promptPresets]
  ), Y = ie.useMemo(
    () => u.map((U) => ({ value: U, label: U })),
    [u]
  ), ce = ie.useMemo(
    () => Object.values(s.selectedEntryUids).reduce((U, te) => U + te.length, 0),
    [s.selectedEntryUids]
  );
  if (g)
    return /* @__PURE__ */ A.jsx("div", { children: "Loading..." });
  const V = Object.entries(s.suggestedEntries).flatMap(
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
              V0,
              {
                initialSelectedProfileId: r.profileId,
                onChange: (U) => k("profileId", U?.id)
              },
              r.profileId || "no-profile"
            )
          ] }),
          /* @__PURE__ */ A.jsx("div", { className: "card", children: /* @__PURE__ */ A.jsx(
            qk,
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
                    onChange: (U) => M("stDescription", U.target.checked)
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
                    onChange: (U) => M("messages", {
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
                      onChange: (U) => M("messages", {
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
                      onChange: (U) => M("messages", {
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
                      onChange: (U) => M("messages", {
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
                      onChange: (U) => M("messages", {
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
                    onChange: (U) => M("charCard", U.target.checked)
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
                    onChange: (U) => M("authorNote", U.target.checked)
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
                    onChange: (U) => M("worldInfo", U.target.checked)
                  }
                ),
                " ",
                "World Info"
              ] }),
              /* @__PURE__ */ A.jsxs("div", { children: [
                /* @__PURE__ */ A.jsx("h4", { children: "Lorebooks to Include" }),
                /* @__PURE__ */ A.jsx(
                  Y0,
                  {
                    items: Y,
                    value: s.selectedWorldNames,
                    onChange: (U) => {
                      i((te) => {
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
                    onChange: (U) => M("suggestedEntries", U.target.checked)
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
              Pf,
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
                onClick: Z,
                disabled: v || V.length === 0,
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
            /* @__PURE__ */ A.jsx(Ee, { onClick: F, disabled: v, className: "menu_button interactable", children: "Reset" })
          ] }),
          /* @__PURE__ */ A.jsxs("div", { children: [
            V.length === 0 && /* @__PURE__ */ A.jsx("p", { children: "No suggestions yet. Send a prompt to get started!" }),
            V.map(({ worldName: U, entry: te }) => /* @__PURE__ */ A.jsx(
              Rk,
              {
                initialWorldName: U,
                entry: te,
                allWorldNames: u,
                existingEntry: f[U]?.find((ne) => ne.uid === te.uid),
                sessionRegexIds: s.regexIds,
                onAdd: L,
                onRemove: $,
                onContinue: R,
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
        type: Lt.CONFIRM,
        content: /* @__PURE__ */ A.jsx(
          t0,
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
            i((ne) => ({ ...ne, selectedEntryUids: te }));
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
          t0,
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
          O(!1);
        },
        options: { wide: !0 }
      }
    ),
    N && /* @__PURE__ */ A.jsx(
      tr,
      {
        type: Lt.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          b_,
          {
            target: { type: "global" },
            initialState: K,
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
}, Gk = () => {
  const [n, r] = ie.useState(!1), [s, i] = ie.useState(null), u = () => {
    i(Ik()), r(!0);
  }, c = () => r(!1);
  return window.openWorldInfoRecommenderPopup = u, n ? /* @__PURE__ */ A.jsx(
    tr,
    {
      content: /* @__PURE__ */ A.jsx(Zk, {}),
      type: Lt.DISPLAY,
      onComplete: c,
      options: {
        large: !0,
        wide: !0,
        onClose: async () => {
          await Bk(s), i(null);
        }
      }
    }
  ) : null;
};
function Vk() {
  function n(r) {
    if (!r)
      return null;
    const s = [], i = Array.isArray(r) ? r : [r];
    for (const u of i) {
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
          enumProvider: LS
        }),
        Re.SlashCommandNamedArgument.fromProps({
          name: "lorebooks",
          description: "List of lorebook names to include as context (defaults to active).",
          typeList: [Re.ARGUMENT_TYPE.LIST],
          isRequired: !1,
          acceptsMultiple: !0,
          enumProvider: o2.worlds
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
        const i = r.silent ?? !1;
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
          const _ = n(r.lorebooks);
          let g;
          if (_ !== null) {
            g = {};
            for (const B of _) {
              const K = await Re.loadWorldInfo(B);
              K && (g[B] = Object.values(K.entries));
            }
          } else
            g = await ml(["all"], !0, sn);
          const E = Object.keys(g);
          let v;
          if (_ !== null) {
            if (v = _.map((B) => B.trim()).filter((B) => E.includes(B) ? !0 : (i || ge("warning", `Specified lorebook "${B}" is not active or does not exist. Ignoring.`), !1)), v.length === 0)
              throw new Error("No valid lorebooks specified or active.");
          } else
            v = E;
          v.length === 0 && (i || ge("warning", "No active lorebooks found to use for context."));
          const S = n(r["allowed-ops"]), h = S !== null ? S : ["add", "update"], C = h.includes("add"), x = h.includes("update"), O = /* @__PURE__ */ new Set(), N = n(r["editable-entries"]);
          N !== null && N.forEach((B) => {
            O.add(B.trim());
          });
          const P = O.size > 0, l = n(r.context), y = { ...u.contextToSend };
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
              i || ge("warning", `Invalid 'messages' argument format: "${r.messages}". Using default.`);
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
          }, M = r["max-response"] ? parseInt(r["max-response"]) : void 0, z = structuredClone(u.prompts);
          y.stDescription || delete z.stDescription, (!y.worldInfo || v.length === 0) && delete z.currentLorebooks, delete z.suggestedLorebooks;
          const R = {
            profileId: m,
            userPrompt: c,
            buildPromptOptions: w,
            session: k,
            entriesGroupByWorldName: g,
            // Pass the current state
            promptSettings: z,
            mainContextList: u.mainContextTemplatePresets[r["main-context-template"] ?? u.mainContextTemplatePreset].prompts.filter((B) => B.enabled).map((B) => ({
              promptName: B.promptName,
              role: B.role
            })),
            maxResponseToken: M ?? u.maxResponseToken
          };
          i || ge("info", "Running World Info Recommender...");
          const L = await Z0(R);
          if (Object.keys(L).length === 0)
            return i || ge("info", "AI returned no suggestions."), !0;
          let Z = 0, F = 0, $ = 0;
          const W = /* @__PURE__ */ new Set(), j = structuredClone(g);
          for (const [B, K] of Object.entries(L)) {
            let ae = B;
            if (!v.includes(ae))
              if (E.includes(ae)) {
                i || ge(
                  "warning",
                  `AI suggested entry for "${ae}", but it wasn't in the specified 'lorebooks'. Skipping ${K.length} entries.`
                ), $ += K.length;
                continue;
              } else if (v.length > 0)
                ae = v[0], i || ge(
                  "warning",
                  `AI suggested entry for non-existent/inactive world "${B}". Attempting to place in "${ae}".`
                );
              else {
                i || ge(
                  "error",
                  `AI suggested entry for "${B}", but no valid target lorebook available. Skipping ${K.length} entries.`
                ), $ += K.length;
                continue;
              }
            for (const I of K) {
              if (j[ae]?.some(
                (ce) => ce.uid === I.uid && ce.comment === I.comment
              )) {
                if (!x) {
                  i || ge(
                    "info",
                    `Skipping update for "${ae}.${I.comment || I.uid}" (updates disallowed).`
                  ), $++;
                  continue;
                }
                if (P) {
                  const ce = `${ae}.${I.comment}`, V = `${ae}.${I.uid}`;
                  if (!O.has(ce) && !O.has(V)) {
                    i || ge(
                      "info",
                      `Skipping update for "${ae}.${I.comment || I.uid}" (not in editable-entries).`
                    ), $++;
                    continue;
                  }
                }
              } else if (!C) {
                i || ge(
                  "info",
                  `Skipping add for "${ae}.${I.comment || "New Entry"}" (adds disallowed).`
                ), $++;
                continue;
              }
              try {
                const { status: ce } = PS(I, ae, j);
                ce === "added" ? Z++ : F++, W.add(ae);
              } catch (ce) {
                i || ge(
                  "error",
                  `Failed to prepare modification for "${ae}.${I.comment || I.uid}": ${ce.message}`
                ), $++;
              }
            }
          }
          if (W.size > 0) {
            i || ge("info", `Saving changes to ${W.size} lorebook(s)...`);
            for (const B of W) {
              const K = j[B], ae = { entries: {} };
              K.forEach((I) => ae.entries[I.uid] = I), await Re.saveWorldInfo(B, ae), Re.reloadWorldInfoEditor(B, !0);
            }
          }
          if (!i) {
            const B = [];
            (Z > 0 || F > 0 || $ > 0) && B.push(`
                <div class="results-summary">
                  <ul>
                  <li><strong>Added:</strong> ${Z}</li>
                  <li><strong>Updated:</strong> ${F}</li>
                  <li><strong>Skipped:</strong> ${$}</li>
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
          return console.error("Error running world-info-recommender-run command:", u), i || ge("error", `World Info Recommender command failed: ${u.message}`), !1;
        }
      }
    })
  );
}
const eo = SillyTavern.getContext();
async function $k() {
  const n = await eo.renderExtensionTemplateAsync(
    `third-party/${zi}`,
    "templates/settings"
  );
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", n);
  const r = document.createElement("div"), s = document.querySelector(
    ".worldInfoRecommender_settings .inline-drawer-content"
  );
  s && (s.prepend(r), yv.createRoot(r).render(
    /* @__PURE__ */ A.jsx(vl.StrictMode, { children: /* @__PURE__ */ A.jsx($S, {}) })
  ));
  const i = '<div class="menu_button fa-brands fa-wpexplorer interactable worldInfoRecommender-icon" title="World Info Recommender"></div>', u = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], c = document.createElement("div");
  document.body.appendChild(c), yv.createRoot(c).render(
    /* @__PURE__ */ A.jsx(vl.StrictMode, { children: /* @__PURE__ */ A.jsx(Gk, {}) })
  ), u.forEach((m) => {
    if (!m) return;
    const p = document.createElement("div");
    p.innerHTML = i.trim();
    const _ = p.firstChild;
    _ && (m.prepend(_), _.addEventListener("click", () => {
      window.openWorldInfoRecommenderPopup && window.openWorldInfoRecommenderPopup();
    }));
  });
}
function Yk() {
  return !(!eo.ConnectionManagerRequestService || !eo.getCharacterCardFields || !eo.getWorldInfoPrompt || !eo.reloadWorldInfoEditor);
}
Yk() ? HS().then(() => {
  $k(), Vk();
}) : ge("error", `[${zi}] Make sure ST is updated.`);
export {
  $k as init
};
