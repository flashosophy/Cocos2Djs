Experience = cc.Layer.extend({
    _controller: null,
    _titleBtn:null,
    _wholeContainer:null,
    _BGImage:null,
    _contentBGImage:null,
    _contentText:null,
    _arrowLeft:null,
    _arrowRight:null,
    _currentGalleryImage:null,
    _currentExperienceIndex:null,
    _maxPageCount:null,
    _openBtn:null,
    ctor: function (in_controller) {
        this._super();
        this._controller= in_controller ;
        this._wholeContainer= new cc.Sprite();
        this._contentBGImage = new cc.Sprite(resDyn.contentBG_png);
        this._contentText = new cc.Sprite(resDyn.experienceText);
        this._arrowLeft = new ccui.Button();// cc.Sprite(resDyn.arrowLeft_png);
        this._arrowRight =  new ccui.Button(); //cc.Sprite(resDyn.arrowRight_png);
        this._openBtn=new ccui.Button();

        this._arrowLeft.loadTextures( resDyn.arrowLeft_png);
        this._arrowRight.loadTextures( resDyn.arrowRight_png);
        this._openBtn.loadTextures( resDyn.openBtn);

        this._currentExperienceIndex =-1;
        this._currentGalleryImage = new cc.Sprite();

        this._wholeContainer._cascadeOpacityEnabled = true;
        this._wholeContainer.addChild( this._contentBGImage);
        this._wholeContainer.addChild( this._contentText);
        this._wholeContainer.addChild( this._arrowLeft);
        this._wholeContainer.addChild( this._arrowRight);
        this._wholeContainer.addChild( this._currentGalleryImage);
        this._wholeContainer.addChild( this._openBtn);

        this._arrowLeft.addTouchEventListener(this.touchEvent,this);
        this._arrowRight.addTouchEventListener(this.touchEvent,this);
        this._openBtn.addTouchEventListener(this.touchEvent,this);

        this.init();
    },
    init:function(){
        this._maxPageCount = 7;
        this._openBtn.setPosition(-150,-125);
    },
    show:function(){
        this.addChild(this._wholeContainer);
        this._wholeContainer.visible = true;
        this._wholeContainer.setOpacity(255);
        this._contentBGImage.setOpacity(0);
        this._contentText.setOpacity(0);
        this._currentGalleryImage.setOpacity(0);
        this._contentBGImage.runAction(new cc.fadeIn(.3));
        this._openBtn.visible = true;
        this._arrowLeft.setPosition(-this._contentBGImage.width/2- 5,0);
        this._arrowRight.setPosition(this._contentBGImage.width/2+ 5,0);
        this._arrowLeft.visible = true;
        this._arrowRight.visible = true;
        this._arrowLeft.setOpacity(0);
        this._arrowRight.setOpacity(0);
        this._openBtn.setOpacity(0);
        this._contentText.stopAllActions();
        this._arrowLeft.stopAllActions();
        this._arrowRight.stopAllActions();
        this.scheduleOnce(function(){
            this._contentText.runAction(new cc.fadeIn(.5));
            this._arrowLeft.runAction(new cc.fadeIn(1));
            this._arrowRight.runAction(new cc.fadeIn(1));
            this._openBtn.runAction(new cc.fadeIn(1));
        },.5);
        this._currentExperienceIndex =0;
        this._currentGalleryImage.setOpacity(0);
        this._currentGalleryImage.runAction(new cc.fadeIn(1));
        this._currentGalleryImage.setTexture("res/content/experience"+this._currentExperienceIndex+".png");
    },
    disableAllButtons:function(){
        this._openBtn.visible = false;
        this._arrowLeft.visible = false;
        this._arrowRight.visible = false;


    },

    fadeOut:function(){
        this.disableAllButtons();
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
              // this._contentText.setOpacity(0);
                this._currentGalleryImage.setOpacity(0);
                this._currentGalleryImage.runAction(new cc.fadeIn(.2));
                if (sender == this._arrowRight ) {
                    this._currentExperienceIndex++;
                    if(this._currentExperienceIndex >= this._maxPageCount)
                    {
                        this._currentExperienceIndex=0;
                    }
                    this._currentGalleryImage.setTexture("res/content/experience"+this._currentExperienceIndex+".png");
                }
                else if (sender == this._arrowLeft ) { //go left
                    this._currentExperienceIndex--;
                    if(this._currentExperienceIndex < 0)
                    {
                        this._currentExperienceIndex=this._maxPageCount-1;
                    }
                    this._currentGalleryImage.setTexture("res/content/experience"+this._currentExperienceIndex+".png");
                }
                else
                if (sender == this._openBtn )
                {
                    switch( this._currentExperienceIndex)
                    {
                        case 0:
                            window.open("http://calpoly.edu/", '_blank');
                            break;
                        case 1:
                            window.open("http://blastbuzz.com", '_blank');
                            break;
                        case 2:
                            window.open("http://vitapoly.com", '_blank');
                            break;
                        case 3:
                            window.open("http://adobe.com", '_blank');
                            break;
                        case 4:
                            window.open("http://www.iosdevcamp.org/iosdevcamp-2014-winners/", '_blank');
                            break;
                        case 5:
                            window.open("http://www.iosdevcamp.org/2013-winners/", '_blank');
                            break;
                        case 6:
                            window.open("https://www.youtube.com/watch?v=RIGixrZ1Nt0", '_blank');
                            break;

                    }

                    break;
                }


                break;
        }
    },
    addToView: function (in_sprite, in_pos) {

        in_sprite.setPosition(in_pos);
        this.addChild(in_sprite);
    }
});