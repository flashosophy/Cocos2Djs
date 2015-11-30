/*
The about me screen
*/
About = cc.Layer.extend({
    _controller: null,
    _titleBtn:null,
    _wholeContainer:null,
    _BGImage:null,
    _contentBGImage:null,
    _contentText:null,
    ctor: function (in_controller) {
        this._super();
        this._controller= in_controller ;
        this._wholeContainer= new cc.Sprite();
        this._BGImage = new cc.Sprite(resDyn.aboutBG_jpg);
        this._contentBGImage = new cc.Sprite(resDyn.contentBG_png);
        this._contentText = new cc.Sprite(resDyn.aboutText_png);

        this._wholeContainer._cascadeOpacityEnabled = true;
        this._wholeContainer.addChild( this._BGImage);
        this._wholeContainer.addChild( this._contentBGImage);
        this._wholeContainer.addChild( this._contentText);
    },
    show:function(){
        this.addChild(this._wholeContainer);
        this._wholeContainer.visible = true;
        this._wholeContainer.setOpacity(255);
        this._BGImage.setOpacity(0);
        this._contentBGImage.setOpacity(0);
        this._contentText.setOpacity(0);


        this._BGImage.stopAllActions();
        this._contentText.stopAllActions();
        this._contentBGImage.stopAllActions();

        this._BGImage.runAction(new cc.fadeIn(1));
      /* cc.director.getScheduler().scheduleCallbackForTarget(this, function(){
            this._contentBGImage.runAction(new cc.fadeIn(1));
        },1.5);
*/

        this.scheduleOnce(function(){
            this._contentBGImage.runAction(new cc.fadeIn(.5));
        },2);

        this.scheduleOnce(function(){
            this._contentText.runAction(new cc.fadeIn(.5));
        },2.5);

        this.scheduleOnce(function(){
            this._BGImage.runAction(new cc.fadeOut(1));
        },2.5);

    },
    fadeOut:function(){
        this._wholeContainer.visible = true;
        this._wholeContainer.stopAllActions();
        this._wholeContainer.setOpacity(255);
        this._wholeContainer.runAction(new cc.fadeOut(.5));
    },
    setInvis:function()
    {
        this._wholeContainer.visible = false;
    },
    addToView: function (in_sprite, in_pos) {

        in_sprite.setPosition(in_pos);
        this.addChild(in_sprite);
    }
});