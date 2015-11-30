Inspire = cc.Layer.extend({
    _controller: null,
    _titleBtn:null,
    _wholeContainer:null,
    _BGImage:null,
    _contentBGImage:null,
    _contentText:null,
    _arrowLeft:null,
    _arrowRight:null,
    _currentGalleryImage:null,
    _currentGalleryIndex:null,
    _maxImageCount:null,
    ctor: function (in_controller) {
        this._super();
        this._controller= in_controller ;
        this._wholeContainer= new cc.Sprite();
        this._contentBGImage = new cc.Sprite(resDyn.contentBG_png);
        this._contentText = new cc.Sprite(resDyn.inspireText_png);
        this._arrowLeft = new ccui.Button();// cc.Sprite(resDyn.arrowLeft_png);
        this._arrowRight =  new ccui.Button(); //cc.Sprite(resDyn.arrowRight_png);
        this._maxImageCount = 25;

        this._arrowLeft.loadTextures( resDyn.arrowLeft_png);
        this._arrowRight.loadTextures( resDyn.arrowRight_png);

        this._currentGalleryIndex =-1;
        this._currentGalleryImage = new cc.Sprite();

        this._wholeContainer._cascadeOpacityEnabled = true;
        this._wholeContainer.addChild( this._contentBGImage);
        this._wholeContainer.addChild( this._contentText);
        this._wholeContainer.addChild( this._arrowLeft);
        this._wholeContainer.addChild( this._arrowRight);
        this._wholeContainer.addChild( this._currentGalleryImage);
    },
    show:function(){
        this.addChild(this._wholeContainer);
        this._wholeContainer.visible = true;
        this._wholeContainer.setOpacity(255);
        this._contentBGImage.setOpacity(0);
        this._contentText.setOpacity(0);
        this._currentGalleryImage.setOpacity(0);
        this._contentBGImage.runAction(new cc.fadeIn(.3));

        this._arrowLeft.setPosition(-this._contentBGImage.width/2- 5,0);
        this._arrowRight.setPosition(this._contentBGImage.width/2+ 5,0);
        this._arrowLeft.setOpacity(0);
        this._arrowRight.setOpacity(0);
        this._contentText.stopAllActions();
        this._arrowLeft.stopAllActions();
        this._arrowRight.stopAllActions();
        this._arrowLeft.visible = true;
        this._arrowRight.visible = true;

        this.scheduleOnce(function(){
            this._contentText.runAction(new cc.fadeIn(.5));
            this._arrowLeft.runAction(new cc.fadeIn(1));
            this._arrowRight.runAction(new cc.fadeIn(1));

        },.5);
        this._arrowLeft.addTouchEventListener(this.touchEvent,this);
        this._arrowRight.addTouchEventListener(this.touchEvent,this);
    },
    fadeOut:function(){
        this._arrowLeft.visible = false;
        this._arrowRight.visible = false;


        this._wholeContainer.visible = true;
        this._wholeContainer.stopAllActions();
        this._wholeContainer.setOpacity(255);
        this._wholeContainer.runAction(new cc.fadeOut(.5));
    },
    setInvis:function()
    {
        this._wholeContainer.visible = false;
    },
    touchEvent:function (sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                this._contentText.setOpacity(0);
                this._currentGalleryImage.setOpacity(0);
                this._currentGalleryImage.runAction(new cc.fadeIn(.2));
                if (sender == this._arrowRight ) {
                    this._currentGalleryIndex++;
                    if(this._currentGalleryIndex >= this._maxImageCount)
                    {
                        this._currentGalleryIndex=0;
                    }
                }
                else{ //go left
                    this._currentGalleryIndex--;
                    if(this._currentGalleryIndex < 0)
                    {
                        this._currentGalleryIndex=this._maxImageCount-1;
                    }

                }
                this._currentGalleryImage.setTexture("res/gallery/"+this._currentGalleryIndex+".jpg");

                break;
        }

    },
    addToView: function (in_sprite, in_pos) {

        in_sprite.setPosition(in_pos);
        this.addChild(in_sprite);
    }
});