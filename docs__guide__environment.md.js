(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{il6J:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),o=t.n(a),r=t("dEAq"),l=t("H1Ra"),i=o.a.memo((e=>{e.demos;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("h1",{id:"\ufe0f-environment"},o.a.createElement(r["AnchorLink"],{to:"#\ufe0f-environment","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\ud83c\udfdd\ufe0f Environment"),o.a.createElement("h2",{id:"browser-support"},o.a.createElement(r["AnchorLink"],{to:"#browser-support","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"Browser support"),o.a.createElement("p",null,"The chart is built based on html5 canvas and needs to run on a browser that supports canvas. If it needs to run on the mobile terminal, please use webview to load it."),o.a.createElement("h2",{id:"polyfill"},o.a.createElement(r["AnchorLink"],{to:"#polyfill","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"Polyfill"),o.a.createElement("h3",{id:"corejs"},o.a.createElement(r["AnchorLink"],{to:"#corejs","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),o.a.createElement(r["Link"],{to:"https://github.com/zloirock/core-js"},"core.js")),o.a.createElement("p",null,"The internal collection of the chart uses ",o.a.createElement("code",null,"Map")," for compatibility with unsupported older browsers."),o.a.createElement(l["a"],{code:"import 'core.js';\nimport { init } from 'klincharts';",lang:"js"}),o.a.createElement("h3",{id:"intljs"},o.a.createElement(r["AnchorLink"],{to:"#intljs","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),o.a.createElement(r["Link"],{to:"https://github.com/andyearnshaw/Intl.js"},"Intl.js")),o.a.createElement("p",null,"Charts rely on ",o.a.createElement("code",null,"Intl"),", some browsers do not have this API."),o.a.createElement(l["a"],{code:"import 'intl';\nimport 'intl/local-data/jsonp/en';\nimport { init } from 'klincharts';",lang:"js"})))}));n["default"]=e=>{var n=o.a.useContext(r["context"]),t=n.demos;return o.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),o.a.createElement(i,{demos:t})}}}]);