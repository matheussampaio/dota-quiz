(function() {

  angular
    .module(`dotaQuiz`)
    .controller(`AppController`, AppController);

  function AppController(Log) {
    const vm = this;

    vm.urlReport = ``;
    vm.updateReport = updateReport;

    ////////////////

    function updateReport() {

      const template = `# Description


# Log
\`\`\`
<log-container>
\`\`\`
`
      const logs = Log.getLogs().join(`\n`);

      const report = encodeURIComponent(template.replace(`<log-container>`, logs));

      vm.urlReport = `?labels=bug&body=${report}`;
    }
  }

})();
