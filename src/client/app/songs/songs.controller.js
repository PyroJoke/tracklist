(function() {
    'use strict';

    angular
        .module('app.songs')
        .controller('SongsController', SongsController);

    SongsController.$inject = ['logger', 'dataservice', '$q'];
    /* @ngInject */
    function SongsController(logger, dataservice, $q) {
        var vm = this;
        vm.title = 'Songs';
        vm.songs = [];

        activate();

        function activate() {
            var promises = [getSongs()];
            return $q.all(promises).then(function() {
                logger.info('Activated Songs View');
            });
        }

        function getSongs() {
            return dataservice.getSongs().then(function(data) {
                vm.songs = data;
                return vm.data;
            });
        }
    }

})();
