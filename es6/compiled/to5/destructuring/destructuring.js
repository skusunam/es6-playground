"use strict";

var _toArray = function (arr) {
  return Array.isArray(arr) ? arr : Array.from(arr);
};

var _ref = [3, 14, 1977];

var _ref2 = _toArray(_ref);

var m = _ref2[0];
var d = _ref2[1];
var y = _ref2[2];
console.log("m = " + m + "  d = " + d + "  y = " + y);

// Swapping two variables is rather trivial, this one works just as expected.
// Internally, it does the sequence as if there is a temporary variable temp and the usual value exchange.
var x = 3, y = 4;
var _ref3 = [y, x];
var _ref4 = _toArray(_ref3);

var x = _ref4[0];
var y = _ref4[1];
console.log([x, y]);

// Another typical use of array restructuring is for a function which has multiple return values.
// We don’t need to wrap it in an object anymore. Also, there is no need to accept all elements in the array.
function now() {
  return [2, 6, 2013, 8, 0];
}
var _ref5 = now();

var _ref6 = _toArray(_ref5);

var m = _ref6[0];
var d = _ref6[1];
// m = 2, d = 6
console.log([m, d]);
var _ref7 = now();

var _ref8 = _toArray(_ref7);

var year = _ref8[2];
// year = 2013
console.log(year);

// ---------------------- Object Pattern ---------------------------------------------
//we can easily pick the ones we are interested in while ignoring the rest
function today() {
  return { d: 6, m: 2, y: 2013 };
}
var _ref9 = today();

var month = _ref9.m;
var year = _ref9.y;
// month = 2, year = 2013
console.log("month = " + month + "  year = " + year);

// Looping through Object
var books = [{
  title: "Book1",
  publishYear: "2013",
  author: "Douglas Crackford"
}, {
  title: "Book2",
  publishYear: "2014",
  author: "Brad Green"
}];
books.forEach(function (_ref10) {
  var title = _ref10.title;
  var author = _ref10.author;
  console.log(title, author);
});