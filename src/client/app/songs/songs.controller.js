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
        vm.newSong = {};

        vm.add = add;

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

        function add() {
            if (!isSongValid(vm.newSong)) { return; }

            vm.songs.push(vm.newSong);
        }
    }

    function isSongValid(song) {
        if (!song) { return false; }

        if (!song.title) { return false; }

        if (song.tempo && song.tempo < 0) { return false; }

        return true;
    }

})();
