// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Curry       = require("bs-platform/lib/js/curry.js");
var Js_mapperRt = require("bs-platform/lib/js/js_mapperRt.js");

var jsMapperConstantArray = /* array */[
  /* tuple */[
    -922086728,
    "none"
  ],
  /* tuple */[
    -476456824,
    "pacman"
  ],
  /* tuple */[
    4895187,
    "bar"
  ],
  /* tuple */[
    561678025,
    "number"
  ]
];

function progressToJs(param) {
  return Js_mapperRt.binSearch(4, param, jsMapperConstantArray);
}

function progressFromJs(param) {
  return Js_mapperRt.revSearch(4, jsMapperConstantArray, param);
}

function transitionToJs(transition) {
  if (typeof transition === "number") {
    switch (transition) {
      case 0 : 
          return "slide";
      case 1 : 
          return "zoom";
      case 2 : 
          return "fade";
      case 3 : 
          return "spin";
      
    }
  } else {
    var f = transition[0];
    return (function (transitioning, forward) {
        return Curry._3(f, +transitioning, +forward, /* () */0);
      });
  }
}

exports.progressToJs   = progressToJs;
exports.progressFromJs = progressFromJs;
exports.transitionToJs = transitionToJs;
/* No side effect */
