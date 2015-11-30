/*
This is the View of the MVC architecture for the title screen.
This view consists of functions that manipulate front end content for the viewer
*/
Title.ViewLayer = cc.Layer.extend({
    _controller:null,
    ctor:function () {
        this._super();


    },
    init:function(in_controller){
        this._controller= in_controller ;
        //also a listener for resize
         window.addEventListener('orientationchange', this.resizeContents, false);

        this.scheduleUpdate();
    },
    addToView:function(in_sprite, in_pos){

        in_sprite.setPosition(in_pos);
        this.addChild(in_sprite);
    },
    arrangeBackground:function(in_container){
        var BGArr = in_container.getChildren();
        BGArr[0].setPosition(-300,+120 );   //sky align to left so can move to right.  1680/2 - 1080/2
        BGArr[1].setPosition(-100, -230 );   //background
        BGArr[2].setPosition(-100, -230 ); //bg2
        BGArr[3].setPosition(-100, -230 ); //leave center centered
        BGArr[4].setPosition(-100,-230 ); //foreground
    },
    arrangeTileElements:function(in_tileContainer){

        var tileArr = in_tileContainer.getChildren();
        var tileSize = tileArr[0].height;
        this._controller.Data.tileSize = tileSize;
        tileArr[0].setPosition(0, tileSize );
        tileArr[1].setPosition(tileSize, 0);
        tileArr[2].setPosition(0, -tileSize);
        tileArr[3].setPosition(-tileSize ,0);

        for(var i=0; i < tileArr.length; i++)
        {
            tileArr[i].setTag(i);
        }
    },
    addParticleToTile:function(in_particle, in_tile, in_x,in_y, in_scale ){
       // in_particle.setAutoRemoveOnFinish(true);
        in_particle.x = in_x;
        in_particle.y = in_y;
        in_particle.scaleX = in_particle.scaleY = in_scale;
        in_tile.addChild(in_particle);
    },
    addTitleMenuButton:function(in_btn, in_name, in_pos){
        in_btn.attr({
            x: in_pos.x,
            y: in_pos.y,
            name: in_name
        });
        this.addChild(in_btn);
    },
    resizeContents:function(){
        //360w 565h for android portrait  sometimes 640 for height
        //375x559 iphone 6 portrat,  667x375
        //598w 279h for android landscape
        //768x 909 ipad portrait
        //console.log( cc.director.sharedDirector.getWinSize() )
      // alert( window.innerWidth + "x" + window.innerHeight)
       // console.log(this._controller._aboutMeWindBtn.getPositionX())
      //  if( window.innerWidth <= 800)
        {
            this._controller.resizeContentsToMakeFitGood();
        }

    },
    update:function(dt){

       // this._controller.checkIsCollide();

    }

});
