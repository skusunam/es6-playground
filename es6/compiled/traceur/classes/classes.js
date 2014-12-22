"use strict";
var BaseLog = function BaseLog(logName) {
  this.logName = logName;
};
($traceurRuntime.createClass)(BaseLog, {log: function(message) {
    console.log(this.logName + ':' + message);
  }}, {});
var Logger = function Logger(logName) {
  $traceurRuntime.superConstructor($Logger).call(this, logName);
};
var $Logger = Logger;
($traceurRuntime.createClass)(Logger, {writeLine: function(message) {
    $traceurRuntime.superGet(this, $Logger.prototype, "log").call(this, message);
  }}, {}, BaseLog);
