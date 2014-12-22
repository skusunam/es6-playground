"use strict";
var $__0 = [3, 14, 1977],
    m = $__0[0],
    d = $__0[1],
    y = $__0[2];
console.log("m = " + m + "  d = " + d + "  y = " + y);
var x = 3,
    y = 4;
var $__1 = [y, x],
    x = $__1[0],
    y = $__1[1];
console.log([x, y]);
function now() {
  return [2, 6, 2013, 8, 0];
}
var $__2 = now(),
    m = $__2[0],
    d = $__2[1];
console.log([m, d]);
var year = now()[2];
console.log(year);
function today() {
  return {
    d: 6,
    m: 2,
    y: 2013
  };
}
var $__4 = today(),
    month = $__4.m,
    year = $__4.y;
console.log("month = " + month + "  year = " + year);
var books = [{
  title: 'Book1',
  publishYear: '2013',
  author: 'Douglas Crackford'
}, {
  title: 'Book2',
  publishYear: '2014',
  author: 'Brad Green'
}];
books.forEach(function($__5) {
  var $__6 = $__5,
      title = $__6.title,
      author = $__6.author;
  console.log(title, author);
});
