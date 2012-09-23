describe("routers/main", function() {

    beforeEach(function() {

        // Create a mock version of our router by extending it and only overriding
        // the methods
        var mockRouter = App.Routers["Main"].extend({
            index: function() {},
            login: function() {},
            logoff: function() {}
        });

        // Set up a spy and invoke the router
        this.routeSpy = sinon.spy();
        this.router = new mockRouter;

        // Prevent history.start from throwing error
        try {
            Backbone.history.start({silent:true, pushState:true});
        } catch(e) {

        }

        // Reset URL
        this.router.navigate("tests/SpecRunner.html");
    });

    afterEach(function(){
        // Reset URL
        this.router.navigate("tests/SpecRunner.html");
    });

    it('Has the right amount of routes', function() {
        expect(_.size(this.router.routes)).toEqual(4);
    });

    it('/ -route exists and points to the right method', function () {
        expect(this.router.routes['']).toEqual('index');
    });

    it("Can navigate to /", function() {
        this.router.bind("route:index", this.routeSpy);
        this.router.navigate("", true);
        expect(this.routeSpy.calledOnce).toBeTruthy();
        expect(this.routeSpy.calledWith()).toBeTruthy();
    });

});
