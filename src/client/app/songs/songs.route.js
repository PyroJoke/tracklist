(function() {
    'use strict';

    angular
        .module('app.songs')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routeHelper) {
        routeHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'songs',
                config: {
                    url: '/songs',
                    templateUrl: 'app/songs/songs.html',
                    controller: 'SongsController',
                    controllerAs: 'vm',
                    title: 'Songs',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-music"></i> Songs'
                    }
                }
            }
        ];
    }

})();
