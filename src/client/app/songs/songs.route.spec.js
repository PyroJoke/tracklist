/* jshint -W117, -W030 */
describe('songs routes', function () {
    describe('state', function () {
        var controller;
        var view = 'app/songs/songs.html';

        beforeEach(function() {
            module('app.songs', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        it('should map state songs to url /songs ', function() {
            expect($state.href('songs', {})).to.equal('/songs');
        });

        it('should map /songs route to songs View template', function () {
            expect($state.get('songs').templateUrl).to.equal(view);
        });

        it('of songs should work with $state.go', function () {
            $state.go('songs');
            $rootScope.$apply();
            expect($state.is('songs'));
        });
    });
});
