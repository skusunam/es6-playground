"use strict";
var myLogger = (function(msg) {
  return console.log(msg);
});
function Car() {
  var self = this;
  this._seats = 10;
  this.timeout = function() {
    setTimeout(function() {
      console.log(self._seats);
    }, 1000);
  };
}
var CarWithArrow = function CarWithArrow() {
  this._seats = 6;
};
($traceurRuntime.createClass)(CarWithArrow, {timeout: function() {
    var $__0 = this;
    setTimeout((function() {
      console.log($__0._seats);
    }), 1000);
  }}, {});
var c = new Car();
c.timeout();
var cArrow = new CarWithArrow();
cArrow.timeout();
