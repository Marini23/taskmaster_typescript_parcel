// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bdDC4":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "753a53c2694a6d75";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8vyae":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _tableMobile1XJpg = require("../src/images/table_mobile_1x.jpg");
var _tableMobile1XJpgDefault = parcelHelpers.interopDefault(_tableMobile1XJpg);
var _tableMobile2XJpg = require("../src/images/table_mobile_2x.jpg");
var _tableMobile2XJpgDefault = parcelHelpers.interopDefault(_tableMobile2XJpg);
var _wallsMobile1XJpg = require("../src/images/walls_mobile_1x.jpg");
var _wallsMobile1XJpgDefault = parcelHelpers.interopDefault(_wallsMobile1XJpg);
var _wallsMobile2XJpg = require("../src/images/walls_mobile_2x.jpg");
var _wallsMobile2XJpgDefault = parcelHelpers.interopDefault(_wallsMobile2XJpg);
var _foldersMobile1XJpg = require("../src/images/folders_mobile_1x.jpg");
var _foldersMobile1XJpgDefault = parcelHelpers.interopDefault(_foldersMobile1XJpg);
var _foldersMobile2XJpg = require("../src/images/folders_mobile_2x.jpg");
var _foldersMobile2XJpgDefault = parcelHelpers.interopDefault(_foldersMobile2XJpg);
const markupArticle1 = `
              <img
            srcset ="${(0, _tableMobile1XJpgDefault.default)} 1x,
              ${(0, _tableMobile2XJpgDefault.default)} 2x
            "
            src="${(0, _tableMobile1XJpgDefault.default)}"
            alt="notes on the wall"
            class="image-for-article"
          />
          <article class="article-content">
            <h3 class="article-title">
              Six golden Rules for Better Time Management.
            </h3>
            <article class="article-text">
              <p>
                Time management isn\u{2019}t about controlling the clock\u{2014}it\u{2019}s about
                managing yourself. There\u{2019}s an old adage that says you can\u{2019}t
                manage time, but you can manage your actions. This sentiment
                holds the key to productivity: making small, intentional changes
                to your habits to focus on what truly matters.
              </p>
              <p class="test">
                <p class="article-load-more">
                The goal of effective time management is not to cram more tasks
                into your day but to prioritize the right tasks\u{2014}the ones that
                drive meaningful results. By doing so, you\u{2019}ll not only feel more
                fulfilled but also experience benefits like career growth,
                financial rewards, or simply a bit of extra free time. Think you
                don\u{2019}t have time to improve your time management skills? Think
                again! Here are six practical strategies to tweak your habits
                and see real results. 1. Embrace Change with an Open Mind The
                foundation of better time management lies in your willingness to
                change. If you\u{2019}re resistant to trying new approaches, you\u{2019}ll
                remain stuck in old patterns that don\u{2019}t serve you. Begin by
                acknowledging that your current habits might need adjustment,
                and commit to experimenting with strategies that can help you
                become more efficient and focused. 2. Treat Time Like Money Time
                is your most valuable resource\u{2014}it\u{2019}s finite and irreplaceable.
                Unlike money, you can\u{2019}t earn more of it. You have just 1,440
                minutes each day, so think about how you\u{2019}re spending them. Are
                you investing your time in activities that align with your goals
                and values? Whether it\u{2019}s at work or in your personal life, make
                deliberate choices that prioritize what truly matters to you. 3.
                Prioritize Like You\u{2019}re Going on Vacation Think about how you
                prepare for a vacation. You make a long list of tasks, then
                narrow it down ruthlessly, focusing only on the essentials as
                your departure date approaches. If you applied this mindset
                every day, you\u{2019}d accomplish far more of what\u{2019}s important. Start
                each morning by identifying your top three priorities and let go
                of tasks that don\u{2019}t contribute to significant results. 4. Weigh
                the Consequences Before Saying \u{201C}Yes\u{201D} We often agree to new tasks
                without fully considering their impact. The next time someone
                asks for your help, pause and think: What will happen if I don\u{2019}t
                take on this responsibility? Can I realistically deliver on this
                commitment without compromising my other priorities? By saying
                \u{201C}No\u{201D} thoughtfully, you\u{2019}ll not only protect your time but also
                build a reputation for reliability when you do agree to help. 5.
                Tackle What\u{2019}s Weighing on Your Mind When unresolved tasks linger
                in your mind, they drain your energy and focus. Whether it\u{2019}s a
                personal responsibility like fixing your car or a professional
                challenge like completing a complex report, make it your mission
                to address these tasks promptly. Clearing mental clutter allows
                you to redirect your energy toward other meaningful activities.
                6. Use the T.A.R. Principle: Trash, Action, Reference Emails,
                documents, and other information can pile up quickly, creating a
                constant source of distraction. Use the T.A.R. method to
                categorize everything you encounter: Trash: If something is
                irrelevant or unnecessary, discard it immediately. Action: If an
                item requires your attention, identify the next step and add it
                to your to-do list. Reference: If it\u{2019}s something you may need
                later, file it in an organized system for easy access. This
                system keeps you focused on actionable tasks while reducing time
                spent sifting through clutter. Time management isn\u{2019}t about
                filling every moment with tasks\u{2014}it\u{2019}s about aligning your actions
                with your values and goals. Small, consistent changes to how you
                approach your day can lead to significant improvements in both
                productivity and satisfaction. Remember, the goal isn\u{2019}t just to
                do more but to do what matters most. By adopting these six
                golden rules, you\u{2019}ll take control of your time and create a more
                balanced, fulfilling life.
              </p>
              </p>
            </article>
          </article>
    `;
const markupArticle2 = `
             <img
            srcset="
              ${(0, _wallsMobile1XJpgDefault.default)} 1x,
              ${(0, _wallsMobile2XJpgDefault.default)} 2x
            "
            src="${(0, _wallsMobile1XJpgDefault.default)}"
            alt="notes on the wall"
            class="image-for-article"
          />
          <article class="article-content">
            <h3 class="article-title">
              Best Time Management Techniques: Find What Works for You.
            </h3>
            <article class="article-text ">
              <p>
                The key to better time management lies in understanding your
                specific needs\u{2014}whether you\u{2019}re looking to organize work tasks,
                streamline study sessions, or focus on personal goals. Below are
                some of the most effective time management techniques you can
                adopt, depending on your unique challenges and aspirations.
              </p>
              <p class="article-load-more">
                Primarily focused on management tasks. Choose Your Technique The
                best time management method depends on your goals and work
                style. Start with one that resonates with your needs and adapt
                it as necessary. Whether you're focusing on personal growth,
                professional tasks, or team projects, adopting these techniques
                can help you achieve more with less stress. 1. Pomodoro
                Technique The Pomodoro Technique divides your work into
                25-minute focused sessions followed by 5-minute breaks. After
                completing four sessions, you take a longer 15\u{2013}20 minute break.
                How It Works: Choose a task. Set a timer for 25 minutes. Work on
                the task until the timer rings. Take a 5-minute break. After
                four cycles, enjoy a 20-minute break. Best For: Avoiding
                burnout. Managing distractions. Tackling procrastination. Pros:
                Encourages intense focus. Helps maintain energy levels. Cons:
                Fixed intervals may disrupt creative flow. 2. Kanban Method
                Kanban offers a visual system for tracking tasks through a board
                with columns like To Do, In Progress, and Done. How It Works:
                List all your tasks in the Backlog column. Move tasks to To Do,
                then to In Progress, and finally to Done. Focus on moving tasks
                steadily across the board. Best For: Visual learners. Managing
                multiple ongoing projects. Pros: Clear overview of task status.
                Customizable to suit personal workflows. Cons: Lacks
                time-specific scheduling. 3. Getting Things Done (GTD) This
                method involves capturing and organizing every task to create
                actionable to-do lists. How It Works: Write down all tasks.
                Clarify which tasks are actionable. Organize tasks by context or
                category. Regularly review your lists to update priorities. Act
                on the tasks with clear next steps. Best For: Clearing mental
                clutter. Prioritizing tasks. Pros: Provides structure to your
                workflow. Helps identify next steps for tasks. Cons: Requires
                discipline to review and update lists regularly. 4. Eat That
                Frog This method emphasizes tackling your hardest or most
                important task first. How It Works: Identify your \u{201C}frog\u{201D} (the
                task you\u{2019}re dreading or that has the most impact). Do it first
                thing in the morning. Move on to smaller tasks after completing
                the big one. Best For: Overcoming procrastination. Prioritizing
                high-impact work. Pros: Builds momentum for the rest of the day.
                Simplifies prioritization. Cons: May feel overwhelming to start
                with a challenging task. 5. Timeboxing Timeboxing involves
                assigning specific time slots to tasks. How It Works: List your
                tasks. Allocate a specific amount of time to each task. Stick to
                the schedule. Best For: Breaking large projects into manageable
                chunks. Keeping track of small tasks. Pros: Encourages focus and
                accountability. Helps manage multiple responsibilities. Cons:
                Interruptions can disrupt the schedule. 6. Time Blocking Time
                blocking allocates distinct blocks of time for specific tasks,
                often using a calendar. How It Works: Create a detailed schedule
                in your calendar. Assign blocks of time to tasks based on their
                priority. Include breaks in your schedule. Best For:
                Comprehensive day planning. Focusing on deep work. Pros:
                Encourages focused work. Promotes better control over your day.
                Cons: Requires adjustments for unexpected interruptions. 7.
                Inbox Zero This technique aims to manage your email inbox by
                reducing the number of unread or pending messages to zero. How
                It Works: Schedule specific times to check your inbox. Address
                emails immediately: reply, delete, archive, or delegate.
                Organize emails into folders for action or reference. Best For:
                Keeping email under control. Reducing distraction from constant
                notifications. Pros: Reduces email clutter. Allocates focused
                time for inbox management. Cons: Time-consuming to implement
                fully. 8. Who\u{2019}s Got the Monkey? This method focuses on
                delegating tasks effectively, making it especially useful for
                managers. How It Works: Identify tasks (\u{201C}monkeys\u{201D}) and who
                should handle them. Assign tasks with clear expectations. Follow
                up to ensure progress. Best For: Delegating responsibilities.
                Improving team productivity. Pros: Increases team
                accountability. Frees up time for strategic priorities.
              </p>
            </article>
          </article>
          `;
const markupArticle3 = `
          <img
            srcset="
              ${(0, _foldersMobile1XJpgDefault.default)} 1x,
              ${(0, _foldersMobile2XJpgDefault.default)} 2x
            "${(0, _foldersMobile1XJpgDefault.default)}
            alt="table"
            class="image-for-article"
          />
          <article class="article-content">
            <h3 class="article-title">
              Explore different approaches to Time Management Styles.
            </h3>
            <article class="article-text">
              <p>
                Not all time management techniques work for everyone. The way we
                approach tasks, our habits, and how we deal with
                responsibilities define our time management style. Each style
                has its strengths but also comes with specific challenges.
                Here's an overview of six common time management styles and
                their issues.
              </p>
              <p class="article-load-more">
                1. Time Martyr Time martyrs prioritize others' needs over their
                own. They often fill their schedules with tasks for others,
                avoiding their own responsibilities, which feel overwhelming.
                This behavior might bring external validation but neglects
                personal growth and satisfaction. Common Issues: Multitasking
                Missed deadlines Ineffective scheduling Skipping breaks 2.
                Procrastinator Procrastinators delay tasks, often claiming they
                work better under pressure. While this approach may sometimes
                yield results, it frequently leads to stress, anxiety, and
                subpar outcomes. Common Issues: Missed deadlines Ineffective
                scheduling Multitasking 3. Distractor Distractors have good
                intentions but struggle with focus. They\u{2019}re easily sidetracked
                by interruptions, like impromptu chats, phone calls, or
                unplanned tasks, which prevents them from completing their work
                effectively. Common Issues: Multitasking Missed deadlines
                Ineffective scheduling 4. Underestimator Underestimators often
                misjudge how long tasks will take. They optimistically set
                deadlines that are difficult to meet, leading to rushed work and
                unmet expectations. Common Issues: Missed deadlines Ineffective
                scheduling 5. Firefighter Firefighters thrive on urgency and
                constantly put out "fires" \u{2014} tackling problems as they arise.
                While they appear busy and productive, this reactive approach
                can lead to burnout and a lack of focus on long-term goals.
                Common Issues: Missed deadlines Skipping breaks Ineffective
                scheduling 6. Perfectionist Perfectionists strive for flawless
                results, which often makes them overwork tasks. While their
                commitment to quality is admirable, their inability to stop
                tweaking can cause delays, missed deadlines, and even burnout.
                Common Issues: Missed deadlines Skipping breaks How to Overcome
                Challenges Each time management style has room for improvement.
                The key is identifying your challenges and adopting time
                management techniques that address them: Time Martyrs can learn
                to say \u{201C}no\u{201D} and prioritize their own tasks using techniques like
                Eat That Frog or Time Blocking. Procrastinators may benefit from
                structured approaches like the Pomodoro Technique to break tasks
                into manageable segments. Distractors can use Timeboxing or
                create focused environments by silencing notifications and
                minimizing interruptions. Under estimators should plan with
                SMART goals, breaking tasks into smaller, realistic steps.
                Firefighters can gain control with visual tools like Kanban
                boards, focusing on long-term priorities. Perfectionists should
                embrace Timeboxing, which sets clear boundaries on how long to
                spend on a task. By recognizing your time management style and
                addressing its pitfalls, you can develop more effective habits
                and achieve a healthier work-life balance.
              </p>
            </article>
          </article>
         `;
function renderArticles() {
    const articleContainer1 = document.querySelector(".article-one");
    const articleContainer2 = document.querySelector(".article-two");
    const articleContainer3 = document.querySelector(".article-three");
    articleContainer1.insertAdjacentHTML("afterbegin", markupArticle1);
    articleContainer2.insertAdjacentHTML("afterbegin", markupArticle2);
    articleContainer3.insertAdjacentHTML("afterbegin", markupArticle3);
}
document.addEventListener("DOMContentLoaded", ()=>{
    renderArticles();
});

},{"../src/images/folders_mobile_1x.jpg":"cZf6n","../src/images/folders_mobile_2x.jpg":"3BWcu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../src/images/table_mobile_1x.jpg":"cy3xk","../src/images/table_mobile_2x.jpg":"98LNK","../src/images/walls_mobile_1x.jpg":"kFBRB","../src/images/walls_mobile_2x.jpg":"dkzPq"}],"cZf6n":[function(require,module,exports) {
module.exports = require("a39b401d404a5672").getBundleURL("a4040") + "folders_mobile_1x.f3c7c242.jpg" + "?" + Date.now();

},{"a39b401d404a5672":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"3BWcu":[function(require,module,exports) {
module.exports = require("aee7b39a487937c1").getBundleURL("a4040") + "folders_mobile_2x.05c141fd.jpg" + "?" + Date.now();

},{"aee7b39a487937c1":"lgJ39"}],"cy3xk":[function(require,module,exports) {
module.exports = require("9bc845200bffc11c").getBundleURL("a4040") + "table_mobile_1x.d54dd442.jpg" + "?" + Date.now();

},{"9bc845200bffc11c":"lgJ39"}],"98LNK":[function(require,module,exports) {
module.exports = require("213f6b95a670aec4").getBundleURL("a4040") + "table_mobile_2x.863f01b3.jpg" + "?" + Date.now();

},{"213f6b95a670aec4":"lgJ39"}],"kFBRB":[function(require,module,exports) {
module.exports = require("9e370f606fdc7c24").getBundleURL("a4040") + "walls_mobile_1x.21e4e91a.jpg" + "?" + Date.now();

},{"9e370f606fdc7c24":"lgJ39"}],"dkzPq":[function(require,module,exports) {
module.exports = require("7d03a72c02128539").getBundleURL("a4040") + "walls_mobile_2x.a76636c8.jpg" + "?" + Date.now();

},{"7d03a72c02128539":"lgJ39"}]},["bdDC4","8vyae"], "8vyae", "parcelRequire3bba")

//# sourceMappingURL=index.694a6d75.js.map
