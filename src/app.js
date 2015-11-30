/*
app.js is what index.html is called from on load. 
it sets up the title logic and view
*/
var GameStartScene = cc.Scene.extend({
    _controller: null,

    onEnter:function () {
        this._super();

        var viewLayer = new Title.ViewLayer();
        this._controller = new Title.Controller(viewLayer);

        this.addChild(viewLayer);

        cc.view.setResizeCallback(function() {
            // Do things according to your need,
            viewLayer.resizeContents();
        });

    }
});

