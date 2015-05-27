/* jshint -W117, -W030 */
describe('SongsController', function() {
    var controller;
    var songs = mockData.getMockSongs();

    beforeEach(function() {
        bard.appModule('app.songs');
        bard.inject('$controller', '$log', '$rootScope', '$rootScope', 'dataservice', '$q');
    });

    beforeEach(function () {
        sinon.stub(dataservice, 'getSongs').returns($q.when(songs));
        controller = $controller('SongsController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Songs controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after activate', function() {
            it('should have title of Songs', function() {
                expect(controller.title).to.equal('Songs');
            });

            it('should have logged "Activated"', function() {
                expect($log.info.logs).to.match(/Activated/);
            });

            it('should load list of songs', function() {
                expect(controller.songs).to.have.length.above(0);
            });

            it('should have mechanism to add a song');

            it('should have mechanism to change song data');
        });
    });
});
