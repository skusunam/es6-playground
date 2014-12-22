"use strict";

/**
 * Created by kusunams on 12/21/14.
 */

var myLogger = function (msg) {
  return console.log(msg);
};

//Working with "this" the "old" way
function Car() {
  var self = this;
  this._seats = 10;

  this.timeout = function () {
    setTimeout(function () {
      console.log(self._seats);
    }, 1000);
  };
}

//Working with this using arrow functions
var CarWithArrow = (function () {
  var CarWithArrow = function CarWithArrow() {
    this._seats = 6;
  };

  CarWithArrow.prototype.timeout = function () {
    var _this = this;
    // Note: If you do not use fatArrow here 'this' is local to timeout function
    setTimeout(function () {
      console.log(_this._seats);
    }, 1000);
  };

  return CarWithArrow;
})();

var c = new Car();
c.timeout();

var cArrow = new CarWithArrow();
cArrow.timeout();