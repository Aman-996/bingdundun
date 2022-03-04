// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6mmd4":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4e5dac8afe405db7";
module.bundle.HMR_BUNDLE_ID = "56dc8e3a1181e0b4";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}]},["6mmd4"], null, "parcelRequire94c2")
const string = `<style>\n/* 让我给你画一个可爱的冰墩墩儿吧 */\narticle * {margin: 0;padding: 0;box-sizing: border-box;vertical-align:top;}\n\n.logo img{width: 100px;height: auto;position: absolute;bottom: 55px;left: 185px;}\n\narticle{position: relative;width: 477px;height: 555px;margin: 300px auto;}\n\n/* 让我们先画出它圆圆的身体 */\n.body {width: 100%;height: 100%;border: 3px solid;border-radius: 46% 46% 49% 49%;background: #fff}\n\n/* 没错，这是它的耳朵 */\n.ear {position: absolute;top: 107px;border: 3px solid transparent;width: 350px;height: 96px;border-radius: 75px;background-color: #333;z-index: -1;}\n\n.ear_left {left: 0;transform: rotate(53deg);}\n\n.ear_right {right: 0;transform: rotate(-53deg);}\n\n/* 接下来是它的手臂 */\n.hand {position: absolute;width: 300px;height: 100px;background-color: #333;z-index: -1;}\n\n.hand_left {top: 300px;left: -117px;border-radius: 55% 37% 0% 35%;transform: rotate(-40deg);animation-name: move_handL;animation-duration: 2000ms;animation-direction: alternate-reverse;animation-delay: 1.1s;animation-timing-function: ease-in-out;animation-iteration-count: infinite;}\n\n.hand_right {top: 165px;right: -145px;border-radius: 76% 60% 85% 77%;transform: rotate(-50deg);animation-name: move_handR;animation-duration: 2000ms;animation-direction: alternate-reverse;animation-delay: 1.1s;animation-timing-function: ease-in-out;animation-iteration-count: infinite;}\n\n.hand > .heart {position: absolute;top: 30px;right: 60px;transform: rotate(-8deg);}\n  \n.heart_left {position: absolute;top: 0;left: 0;width: 45px;height: 35px;background-color: red;border-radius: 0% 50% 50% 0%;}\n  \n.heart_right {position: absolute;top: -8px;left: -8px;width: 45px;height: 35px;background-color: red;border-radius: 0% 50% 50% 0%;transform: rotate(-97deg);}\n\n/* 然后是它的jiojio */\n.footer {border: 1px solid;position: absolute;bottom: -72px;width: 100px;height: 150px;background-color: #333;border-radius: 15% 0 43% 44%;z-index: -1;}\n  \n.footer_left {left: 90px;}\n  \n.footer_right {right: 100px;}\n\n/* 这个部分可难了，接着看吧 */\n.face {position: absolute;top: 25px;left: 29px;width: 421px;height: 353px;}\n\n.line {width: 100%;height: 100%;border-radius: 93% 90% 75% 74%;padding: 15px;background: linear-gradient(to bottom right, #f0ff00, #58cffb);}\n\n.line1 {width: 100%;height: 100%;background-color: #fff;border-radius: 93% 90% 75% 74%;}\n\n/* 圆溜溜的眼睛 */\n.eye {position: absolute;top: 55px;width: 100px;height: 150px;background: #333;border-radius: 45%;}\n\n.eye_left {left: 60px;transform: rotate(45deg);}\n\n.eye_right {right: 60px;transform: rotate(-45deg);}\n  \n.socket1 {overflow: hidden;position: relative;width: 65px;height: 65px;border-radius: 50%;background-color: #fff;transform: translate(18px, 12px)}\n\n.animation {position: absolute;width: 100%;height: 100%;background-color: #333;border-radius: 50% 50% 0 0;z-index: 10;animation-duration: 1000ms;animation-direction: alternate-reverse;animation-timing-function: ease-in;animation-iteration-count: infinite}\n\n.mask3 {top: -50px;left: -50px;transform: rotate(-46deg);animation-name: eye-blink;animation-delay: 2.2s}\n  \n.mask5 {top: -50px;left: 50px;transform: rotate(45deg);animation-name: eye-blink3;animation-delay: -2.2s;} \n\n.socket2 {width: 55px;height: 55px;border-radius: 50%;background-color: #423e37;transform: translate(5px, 5px);}\n\n.socket3 {width: 20px;height: 20px;border-radius: 50%;background-color: #fff;transform: translate(8px, 0px)}\n\n.eye_right .socket3 {transform: translate(27px, 0px);}\n\n.nose {position: absolute;left: 193px;top: 140px;width: 40px;height: 30px;background: #0f0f10;border-radius: 50%;}\n\n.mask {margin-top: 4px;margin-left: 9px;width: 25px;height: 17px;background: linear-gradient(to bottom,rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0));border-radius: 50%;}\n  \n.mouth {position: absolute;left: 155px;top: 195px;width: 105px;height: 30px;border-bottom: 3px solid #333;border-radius: 100%;z-index: 100}\n  \n.lips {position: absolute;left: 155px;top: 220px;width: 100px;height: 55px;border-radius: 100%;border: 2px solid #8b3a3a;background-color: #cd5555}\n  \n.mask1 {width: 80px;height: 48px;background: linear-gradient(to bottom,rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0));transform: translate(-8px, 14px);border-radius: 100%}\n\n/* 让它动起来吧！！！ */\n@keyframes move_handL {0% {  transform: rotate(-40deg);}10% {  transform: rotate(-50deg);}20% {  transform: rotate(-40deg);  box-shadow: 0 10px 10px rgba(15, 15, 16, 0.3);}30% {  transform: rotate(-55deg);}40%,50%,60%,70%,80%,90%,100% {  transform: rotate(-40deg);}}\n\n@keyframes move_handR {0% {  transform: rotate(-50deg);}10% {  transform: rotate(-60deg);  box-shadow: 0 10px 10px rgba(15, 15, 16, 0.3);}20% {  transform: rotate(-50deg);  box-shadow: 0 10px 10px rgba(15, 15, 16, 0.3);}30% {  transform: rotate(-55deg);  box-shadow: 0 10px 10px rgba(15, 15, 16, 0.3);}40%,50%,60%,70%,80%,90%,100% {  transform: rotate(-50deg);}}\n\n@keyframes eye-blink {75% {  top: -50px;  left: -50px;}100% {  top: -20px;  left: -20px;}}\n\n@keyframes eye-blink3 {75% {  top: -50px;  left: 50px;}100% {  top: -20px;  left: 20px;}}\n\n/* 一个可爱的冰墩墩儿就画好了 */\n</style>`;
let n = 1;
demo1.innerHTML = string.substring(0, n);
demo2.innerText = string.substring(0, n);
let times = 100;
// 封装定时器
const time = ()=>{
    n += 1;
    if (n > string.length) {
        clearInterval(id);
        return;
    }
    demo1.innerHTML = string.substring(0, n);
    demo2.innerText = string.substring(0, n);
    demo2.scrollTop = demo2.scrollHeight;
};
let id = setInterval(()=>{
    // 调用定时器
    time();
}, times);
// 开始
btn_action.onclick = ()=>{
    id = setInterval(()=>{
        // 调用定时器
        time();
    }, times);
};
// 暂停
btn_stop.onclick = ()=>{
    clearInterval(id);
};
// 慢速
btn_slow.onclick = ()=>{
    clearInterval(id);
    times = 300;
    id = setInterval(()=>{
        // 调用定时器
        time();
    }, times);
};
// 中速
btn_speed.onclick = ()=>{
    clearInterval(id);
    times = 100;
    id = setInterval(()=>{
        // 调用定时器
        time();
    }, times);
};
// 快速
btn_quick.onclick = ()=>{
    clearInterval(id);
    times = 0;
    id = setInterval(()=>{
        // 调用定时器
        time();
    }, times);
};

//# sourceMappingURL=index2.1181e0b4.js.map
