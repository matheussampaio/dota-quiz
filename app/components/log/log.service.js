(function() {

  angular
    .module('dotaQuiz')
    .service('Log', LogService);

  function LogService($log) {
    const logs = [];

    const service = {
      log: log,
      info: info,
      error: error,
      warn: warn,
      getLogs: getLogs
    }

    return service;

    ///////////////////

    function log(...message) {
      add(`log:`, ...message);
      $log.log(`log:`, ...message);
    }

    function info(...message) {
      add(`info:`, ...message);
      $log.info(`info:`, ...message);
    }

    function error(...message) {
      add(`error:`, ...message);
      $log.error(`error:`, ...message);
    }

    function warn(...message) {
      add(`warn:`, ...message);
      $log.warn(`warn:`, ...message);
    }

    function add(...log) {
      logs.push(log.map(e => angular.toJson(e, true)).join(' '));

      if (logs.length > 50) {
        logs.shift();
      }
    }

    function getLogs() {
      return logs;
    }
  }

})();
