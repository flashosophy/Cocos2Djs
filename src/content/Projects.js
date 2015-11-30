Projects = cc.Layer.extend({
    _controller: null,
    _titleBtn:null,
    _wholeContainer:null,
    _BGImage:null,
    _contentBGImage:null,
    _contentText:null,
    _arrowLeft:null,
    _arrowRight:null,
    _currentContentIndex:null,
    _currentContentBGImage:null,
    _webBtn:null,
    _gameBtn:null,
    _pluginsBtn:null,
    _gameCount:null,
    _webCount:null,
    _pluginCount:null,
    _mainPageContentContainer:null,
    _currentContentCounter:null,
    _webContentContainer:null,
    _gameContentContainer:null,
    _pluginContentContainer:null,
    _openBtn:null,
    _playBtn:null,
    _contentTitleText:null,
    _backToMainBtn:null,
    _currentCatgeoryOpen:null,
    _appStoreBtn:null,
    _googlePlayBtn:null,
    _pluginAirBtn:null,
    _pluginU3dBtn:null,
    ctor: function (in_controller) {
        this._super();
        this._controller= in_controller ;
        this._wholeContainer= new cc.Sprite();
        this._mainPageContentContainer= new cc.Sprite();
        this._currentContentBGImage= new cc.Sprite();
        this._contentBGImage = new cc.Sprite(resDyn.contentBG_png);
        this._contentText = new cc.Sprite(resDyn.projectsText_png);
        this._contentTitleText =  new cc.Sprite();
        this._webContentContainer = new cc.Sprite();
        this._gameContentContainer = new cc.Sprite();
        this._pluginContentContainer = new cc.Sprite();

        this._webBtn =new ccui.Button(); //new cc.Sprite(resDyn.webBtn_png);
        this._gameBtn = new ccui.Button();//new cc.Sprite(resDyn.gamesBtn_png);
        this._pluginsBtn =new ccui.Button();//new cc.Sprite(resDyn.pluginsBtn_png);
        this._openBtn=new ccui.Button();
        this._arrowLeft = new ccui.Button();// cc.Sprite(resDyn.arrowLeft_png);
        this._arrowRight =  new ccui.Button(); //cc.Sprite(resDyn.arrowRight_png);
        this._backToMainBtn = new ccui.Button();
        this._playBtn  = new ccui.Button();
        this._appStoreBtn = new ccui.Button();
        this._googlePlayBtn  = new ccui.Button();
        this._pluginAirBtn = new ccui.Button();
        this._pluginU3dBtn = new ccui.Button();


        this._webBtn.loadTextures( resDyn.webBtn_png);
        this._gameBtn.loadTextures( resDyn.gamesBtn_png);
        this._pluginsBtn.loadTextures( resDyn.pluginsBtn_png);
        this._openBtn.loadTextures( resDyn.openBtn);
        this._playBtn.loadTextures( resDyn.playBtn);
        this._arrowLeft.loadTextures( resDyn.arrowLeft_png);
        this._arrowRight.loadTextures( resDyn.arrowRight_png);
        this._backToMainBtn.loadTextures( resDyn.arrowLeft_png);
        this._appStoreBtn.loadTextures( resDyn.appStore);
        this._googlePlayBtn.loadTextures( resDyn.googlePlay);
        this._pluginAirBtn.loadTextures( resDyn.plugin0);
        this._pluginU3dBtn.loadTextures( resDyn.plugin1);

        this._wholeContainer._cascadeOpacityEnabled = true;
        this._mainPageContentContainer._cascadeOpacityEnabled = true;
        this._webContentContainer._cascadeOpacityEnabled = true;
        this._gameContentContainer._cascadeOpacityEnabled = true;
        this._pluginContentContainer._cascadeOpacityEnabled = true;


        this._mainPageContentContainer.addChild( this._contentText);
        this._mainPageContentContainer.addChild( this._webBtn);
        this._mainPageContentContainer.addChild( this._gameBtn);
        this._mainPageContentContainer.addChild( this._pluginsBtn);

        this._pluginContentContainer.addChild( this._pluginAirBtn);
        this._pluginContentContainer.addChild( this._pluginU3dBtn);

        this._wholeContainer.addChild( this._contentBGImage);
        this._wholeContainer.addChild( this._mainPageContentContainer);
        this._wholeContainer.addChild( this._webContentContainer);
        this._wholeContainer.addChild( this._gameContentContainer);
        this._wholeContainer.addChild( this._pluginContentContainer);
        this._wholeContainer.addChild( this._arrowLeft);
        this._wholeContainer.addChild( this._arrowRight);
        this._wholeContainer.addChild( this._backToMainBtn);
        this._wholeContainer.addChild( this._openBtn);
        this._wholeContainer.addChild( this._playBtn);
        this._wholeContainer.addChild( this._appStoreBtn);
        this._wholeContainer.addChild( this._googlePlayBtn);


        this._webBtn.addTouchEventListener(this.touchEvent,this);
        this._gameBtn.addTouchEventListener(this.touchEvent,this);
        this._pluginsBtn.addTouchEventListener(this.touchEvent,this);
        this._openBtn.addTouchEventListener(this.touchEvent,this);
        this._arrowLeft.addTouchEventListener(this.touchEvent,this);
        this._arrowRight.addTouchEventListener(this.touchEvent,this);
        this._backToMainBtn.addTouchEventListener(this.touchEvent,this);
        this._playBtn.addTouchEventListener(this.touchEvent,this);
        this._appStoreBtn.addTouchEventListener(this.touchEvent,this);
        this._googlePlayBtn.addTouchEventListener(this.touchEvent,this);
        this._pluginAirBtn.addTouchEventListener(this.touchEvent,this);
        this._pluginU3dBtn.addTouchEventListener(this.touchEvent,this);

        this.init();

    },
    init:function(){
        this._webCount = 6;
        this._gameCount = 6;
        this._pluginCount = 2;
        this._currentContentIndex =0;
        this._arrowLeft.setPosition(-515/2- 5,0);
        this._arrowRight.setPosition(515/2+ 5,0);
        this._openBtn.setPosition(-135,-125);
        this._playBtn.setPosition(-135,-125);
        this._appStoreBtn.setPosition(20,-125);
        this._googlePlayBtn.setPosition(150,-125);
        this._pluginAirBtn.setPosition(-120,-80);
        this._pluginU3dBtn.setPosition(120,-80);
        // this._backToMainBtn.setPosition(224,162);
        this._backToMainBtn.setPosition(-243,161);
    },
    show:function(){
        this.addChild(this._wholeContainer);
        this._wholeContainer.visible = true;
        this._backToMainBtn.visible = false;
        this.hideAllContent();
        this._appStoreBtn.setOpacity(255);
        this._googlePlayBtn.setOpacity(255);
        this._wholeContainer.setOpacity(255);
        this._contentBGImage.setOpacity(0);
        this._contentBGImage.runAction(new cc.fadeIn(.3));
        this._webBtn.setPosition(-170, -50);
        this._gameBtn.setPosition(0, -50);
        this._pluginsBtn.setPosition(+170, -50);
        this._mainPageContentContainer.setOpacity(0);
        this._mainPageContentContainer.visible = true;

        this._webBtn.visible = true;
        this._gameBtn.visible = true;
        this._pluginsBtn.visible = true;
        this._openBtn.visible = false;
        this._playBtn.visible = false;
        this._appStoreBtn.visible = false;
        this._googlePlayBtn.visible = false;
        this._pluginAirBtn.visible = false;
        this._pluginU3dBtn.visible = false;


        this._contentText.stopAllActions();
        this._mainPageContentContainer.stopAllActions();
        this._webBtn.stopAllActions();
        this._gameBtn.stopAllActions();
        this._pluginsBtn.stopAllActions();

        this.scheduleOnce(function(){
            var slideAmount = -10;
            this._contentText.runAction(new cc.fadeIn(.5));
            this._mainPageContentContainer.runAction(new cc.fadeIn(1.5));
            this._webBtn.runAction(cc.moveBy(.5, cc.p(0, slideAmount)));
            this._gameBtn.runAction(cc.moveBy(1, cc.p(0, slideAmount)));
            this._pluginsBtn.runAction(cc.moveBy(1.5, cc.p(0, slideAmount)));

        },.5);


    },
    showArrowButtons:function(){
        this._arrowLeft.visible = true;
        this._arrowRight.visible = true;
        this._arrowLeft.stopAllActions();
        this._arrowRight.stopAllActions();
        this._arrowLeft.runAction(new cc.fadeIn(1));
        this._arrowRight.runAction(new cc.fadeIn(1));
        this.showBackButton();
    },
    showBackButton:function(){
        this._backToMainBtn.visible = true;
        this._backToMainBtn.stopAllActions();
        this._backToMainBtn.runAction(new cc.fadeIn(.5));
        // this._backToMainBtn.runAction(new cc.MoveTo.create(.5, cc.p(224, 162)));
        //  this._backToMainBtn.runAction( new cc.RotateTo(.5, 90));
        this._backToMainBtn.runAction( new cc.RotateTo(.5, 45)); //points top left
    },
    disableAllButtons:function(){
        this._webBtn.visible = false;
        this._gameBtn.visible = false;
        this._pluginsBtn.visible = false;
        this._openBtn.visible = false;
        this._playBtn.visible = false;
        this._appStoreBtn.visible = false;
        this._googlePlayBtn.visible = false;
        this._arrowLeft.visible = false;
        this._arrowRight.visible = false;
        this._backToMainBtn.visible = false;
        this._pluginAirBtn.visible = false;
        this._pluginU3dBtn.visible = false;
    },
    fadeOut:function(){
        this.disableAllButtons();
        this._wholeContainer.visible = true;
        this._mainPageContentContainer.stopAllActions();
        this._wholeContainer.stopAllActions();
        this._wholeContainer.setOpacity(255);
        this._wholeContainer.runAction(new cc.fadeOut(.5));

    },
    setInvis:function(){
        this._wholeContainer.visible = false;
    },
    hideAllContent:function() {

        this._contentText.setOpacity(0);
        this._arrowLeft.setOpacity(0);
        this._arrowRight.setOpacity(0);
        this._mainPageContentContainer.stopAllActions();
        this._mainPageContentContainer.setOpacity(0);
        this._mainPageContentContainer.visible = false;
        this._currentContentBGImage.setOpacity(0);
        this._openBtn.stopAllActions();
        this._openBtn.setOpacity(0);
        this._playBtn.stopAllActions();
        this._playBtn.setOpacity(0);

        this._webContentContainer.setOpacity(0);
        this._gameContentContainer.setOpacity(0);
        this._pluginContentContainer.setOpacity(0);

    },
    touchEvent:function (sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_ENDED:

                switch(sender){            
                    
                    case this._arrowRight:
                        this._currentContentIndex++;

                        if(this._currentContentIndex >= this._currentContentCounter){
                            this._currentContentIndex=0;
                        }
                        console.log(this._currentContentIndex + " " + this._currentContentCounter);
                        this.loadProjectContent( this._currentContentIndex );
                    break;                        
                    case this._arrowLeft:                    
                        this._currentContentIndex--;
                        if(this._currentContentIndex < 0){
                            this._currentContentIndex=this._currentContentCounter-1;
                        }
                        this.loadProjectContent( this._currentContentIndex );
                    break;
                    case this._backToMainBtn:
                        this.hideAllContent();
                        this.disableAllButtons();
                        this.show();
                        break;
                    case this._webBtn:
                        this._currentCatgeoryOpen ="web";
                        this.hideAllContent();
                        this._currentContentIndex = 0;
                        this._currentContentCounter =  this._webCount;
                        this.loadProjectContent( this._currentContentIndex);
                        this.showArrowButtons();
                        this._openBtn.stopAllActions();
                        this._openBtn.runAction(new cc.fadeIn(.5));
                        this._openBtn.visible = true;
                        this._contentTitleText.setTexture( resDyn.webText);
                        this._webContentContainer.setOpacity(255);
                        this._webContentContainer.visible = true;
                        this._webContentContainer.addChild(this._currentContentBGImage);
                        this._webContentContainer.addChild(this._contentTitleText);

                    break;
                    case this._gameBtn:
                        this._currentCatgeoryOpen ="game";
                        this.hideAllContent();
                        this._currentContentIndex = 0;
                        this._currentContentCounter =  this._gameCount;
                        this.loadProjectContent( this._currentContentIndex );
                        this.showArrowButtons();
                        this._playBtn.visible = true;
                        this._playBtn.setOpacity(0);
                        this._playBtn.runAction(new cc.fadeIn(.5));
                        this._appStoreBtn.visible = true;
                        this._googlePlayBtn.visible = true;
                        this._contentTitleText.setTexture( resDyn.gamesText);
                        this._gameContentContainer.setOpacity(255);
                        this._gameContentContainer.visible = true;
                        this._gameContentContainer.addChild(this._currentContentBGImage);
                        this._gameContentContainer.addChild(this._contentTitleText);

                        break;
                    case this._pluginsBtn:
                        this._currentCatgeoryOpen ="plugin";
                        this._currentContentCounter =  this._pluginCount;
                        this.hideAllContent();
                        this._currentContentIndex = 0;
                        this._pluginAirBtn.visible = true;
                        this._pluginU3dBtn.visible = true;
                        this.showBackButton();
                        this._contentTitleText.setTexture( resDyn.pluginsText);
                        this._pluginContentContainer.setOpacity(0);
                        this._pluginContentContainer.visible = true;
                        this._pluginContentContainer.addChild(this._currentContentBGImage);
                        this._pluginContentContainer.addChild(this._contentTitleText);
                        this._pluginContentContainer.runAction(new cc.fadeIn(.5));

                        break;
                    case this._openBtn: //opens to new URL
                        if( this._currentCatgeoryOpen ="web") {
                            if (this._currentContentIndex == 0)
                                window.open("http://www.blastbuzz.com", '_blank');
                            else if (this._currentContentIndex == 1)
                                window.open("http://www.blastbuzz.com/richhaircare", '_blank');
                            else if (this._currentContentIndex == 2)
                                window.open("http://www.airextensions.net", '_blank');
                            else if (this._currentContentIndex == 3)
                                window.open("http://www.u3dxt.com", '_blank');
                            else if (this._currentContentIndex == 4)
                                window.open("http://www.vitapoly.com", '_blank');
                            else if (this._currentContentIndex == 5)
                                window.open("http://www.cutecatgames.com", '_blank');
                        }


                        break;
                    case this._playBtn:
                        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                            //mobile detected
                            this._playBtn.visible = false;
                            this._appStoreBtn.runAction(new cc.MoveTo.create(.5, cc.p(-135, 125)));
                            this._googlePlayBtn.runAction(new cc.MoveTo.create(1, cc.p(0, 125)));
                        }
                        else
                        if (this._currentContentIndex == 0)
                            window.open("http://www.cutecatgames.com/games/kittendreams/", '_blank',"width=920, height=620");
                        else if (this._currentContentIndex == 1)
                            window.open("http://www.cutecatgames.com/games/hungrysushicat/", '_blank',"width=920, height=620");
                        else if (this._currentContentIndex == 2)
                            window.open("http://www.cutecatgames.com/games/crosswordninjacat/", '_blank',"width=920, height=620");
                        else if (this._currentContentIndex == 3)
                            window.open("http://www.cutecatgames.com/games/nomnomnumbers/", '_blank',"width=920, height=620");
                        else if (this._currentContentIndex == 4)
                            window.open("http://www.cutecatgames.com/games/spellingkitty/", '_blank',"width=920, height=620");
                        else if (this._currentContentIndex == 5)
                            window.open("http://www.cutecatgames.com/games/valentinekitty/", '_blank',"width=920, height=620");
                        break;
                    case this._appStoreBtn:
                        if (this._currentContentIndex == 0)
                            window.open("https://itunes.apple.com/us/app/kitten-dreams/id582086329?mt=8", '_blank');
                        else
                        if (this._currentContentIndex == 1)
                            window.open("https://itunes.apple.com/us/app/hungry-sushi-cat/id590464550?mt=8", '_blank');
                        else
                        if (this._currentContentIndex == 2)
                            window.open("https://itunes.apple.com/us/app/crossword-ninja-cat/id592893812?mt=8", '_blank');
                        else
                        if (this._currentContentIndex == 3)
                            window.open("https://itunes.apple.com/us/app/nomnom-numbers/id593962088?mt=8", '_blank');
                        else
                        if (this._currentContentIndex == 4)
                            window.open("https://itunes.apple.com/us/app/spelling-kitty/id593975088?mt=8", '_blank');
                        else
                        if (this._currentContentIndex == 4)
                            window.open("https://itunes.apple.com/us/app/valentine-kitty/id597639944?mt=8", '_blank');


                        break;
                    case this._googlePlayBtn:
                        if (this._currentContentIndex == 0)
                            window.open("https://play.google.com/store/apps/details?id=air.com.vitapoly.kittendreams&hl=en", '_blank');
                        else
                        if (this._currentContentIndex == 1)
                            window.open("https://play.google.com/store/apps/details?id=air.com.vitapoly.hungrysushicat&hl=en", '_blank');
                        else
                        if (this._currentContentIndex == 2)
                            window.open("https://play.google.com/store/apps/details?id=air.com.vitapoly.crosswordninjacat&hl=en", '_blank');
                        else
                        if (this._currentContentIndex == 3)  //no android version
                            window.open("https://play.google.com/store/apps/details?id=air.com.vitapoly.nomnomnumbers&hl=en", '_blank');
                        else
                        if (this._currentContentIndex == 4)  //no android version
                            window.open("https://play.google.com/store/apps/details?id=air.com.vitapoly.spellingkitty&hl=en", '_blank');
                        else
                        if (this._currentContentIndex == 5)  //no android version
                            window.open("", '_blank');


                        break;
                    case this._pluginAirBtn:
                        window.open("https://airextensions.net", '_blank');
                        break;
                    case this._pluginU3dBtn:
                        window.open("http://u3dxt.com", '_blank');
                        break;

                }
                break;
        }

    },
    loadProjectContent:function(in_index){
        this._currentContentBGImage.setOpacity(0);
        this._currentContentBGImage.stopAllActions();
        this._currentContentBGImage.runAction(new cc.fadeIn(.2));
        this._currentContentBGImage.setTexture("res/content/"+this._currentCatgeoryOpen+in_index+".png");

        if( this._currentCatgeoryOpen =="game")
        {
            this._googlePlayBtn.visible = true;
            if(this._currentContentIndex == 5) //for that one game that isn't on android
                this._googlePlayBtn.visible = false;
        }


    },
    addToView: function (in_sprite, in_pos) {

        in_sprite.setPosition(in_pos);
        this.addChild(in_sprite);
    }
});