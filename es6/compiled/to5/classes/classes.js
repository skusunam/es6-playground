"use strict";

var _extends = function (child, parent) {
  child.prototype = Object.create(parent.prototype, {
    constructor: {
      value: child,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  child.__proto__ = parent;
};

/**
 * Created by kusunams on 12/21/14.
 */

var BaseLog = (function () {
  var BaseLog = function BaseLog(logName) {
    this.logName = logName;
  };

  BaseLog.prototype.log = function (message) {
    console.log(this.logName + ":" + message);
  };

  return BaseLog;
})();

var Logger = (function (BaseLog) {
  var Logger = function Logger(logName) {
    BaseLog.call(this, logName);
  };

  _extends(Logger, BaseLog);

  Logger.prototype.writeLine = function (message) {
    BaseLog.prototype.log.call(this, message);
  };

  return Logger;
})(BaseLog);