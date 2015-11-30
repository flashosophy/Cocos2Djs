/*
controls the logic and behavior of the portfolio.
things like creating content(backgrounds, buttons) as well as animating them
*/
Title.Controller = cc.Class.extend({
    Data:null,
    _viewLayer: null,
    _titleSprite: null,
    _titleSprite2: null,
    _titleTileContainer:null,
    _titleBGContainer:null,
    _aboutMeWindBtn:null,
    _inspireLeafBtn:null,
    _projectsFireBtn:null,
    _skillsLightningBtn:null,
    _experienceWaterBtn:null,
    _particleArr:null,
    _screenParticle:null,
    _footerText:null,
    _musicBtn:null,
    _isAudioOn:null,
    _tileArr:null,
    _currentParticle:null,
    _aboutViewLayer:null,
    _inspireViewLayer:null,
    _projectsViewLayer:null,
    _skillsViewLayer:null,
    _experienceViewLayer:null,
    _musicTouchCounter:null,
ctor: function (viewLayer) {
        this.Data = new Title.Data();
        this._viewLayer = viewLayer;
        this._viewLayer.init(this);
        this._musicTouchCounter =0;
        this._particleArr = new Array();
        this._tileArr= new Array();

        this.createBackground();
        this.animateBackground();
        this.createTileBG();
        this.animateTiles();
        this.addParticlesToScreen();
       // this.addParticlesToTiles();

        this.createMenuButtons();
        this.animateMenuButtons();
        this.createFooterText();
        this.initMusic();
        this.loadContentLayers();


    },
    loadContentLayers:function(){
        this._aboutViewLayer = new About(this);
        this._inspireViewLayer = new Inspire(this);
        this._projectsViewLayer = new Projects(this);
        this._skillsViewLayer= new Skills(this);
        this._experienceViewLayer= new Experience(this);

        this._viewLayer.addToView(this._aboutViewLayer, this.Data.contentStartPosition);
        this._viewLayer.addToView(this._inspireViewLayer, this.Data.contentStartPosition);
        this._viewLayer.addToView(this._projectsViewLayer, this.Data.contentStartPosition);
        this._viewLayer.addToView(this._skillsViewLayer, this.Data.contentStartPosition);
        this._viewLayer.addToView(this._experienceViewLayer, this.Data.contentStartPosition);



        this.resizeContentsToMakeFitGood();
    },
    initMusic:function(){
/*
        if(isMobile)
        {
            //this._musicBtn.setOpacity(100);
            this._isAudioOn = true;
        }
        else*/
        {
            cc.audioEngine.playMusic(res.titleBGM_mp3, true);
            this._isAudioOn = true;
        }
    },
    createFooterText:function(){
        this._footerText = new cc.Sprite(resDyn.portfolio_png);

        this._footerText.runAction(this.Data.seqFooter);
        this._viewLayer.addToView(this._footerText, this.Data.footerTextPosition);


    },
    addParticlesToScreen:function(){
        this._screenParticle =  new cc.ParticleSystem(res.titleFullLeaves_p);
        this._viewLayer.addToView(this._screenParticle,this.Data.screenParticlePosition);
    },
    createBackground:function(){
        this._titleBGContainer = new cc.Sprite();
        this._titleBGContainer.addChild(new cc.Sprite(res.titleSky_jpg));
        this._titleBGContainer.addChild(new cc.Sprite(res.titleBG0_png));
        this._titleBGContainer.addChild(new cc.Sprite(res.titleBG1_png));
        this._titleBGContainer.addChild(new cc.Sprite(res.titleMiddle_png));
        this._titleBGContainer.addChild(new cc.Sprite(res.titleFG_png));
        this._viewLayer.arrangeBackground(this._titleBGContainer);
        this._viewLayer.addToView(this._titleBGContainer, this.Data.titleBGContainerPosition);
    },
    createTileBG:function(){
        this._titleTileContainer = new cc.Sprite();
        
        this._aboutMeWindBtn = new ccui.Button();
        this._aboutMeWindBtn.loadTextures( res.tileWind_png);
        this._aboutMeWindBtn.addTouchEventListener(this.touchEvent,this);

        this._inspireLeafBtn= new ccui.Button();
        this._inspireLeafBtn.loadTextures( res.tileEarth_png);
        this._inspireLeafBtn.addTouchEventListener(this.touchEvent,this);

        this._skillsLightningBtn= new ccui.Button();
        this._skillsLightningBtn.loadTextures( res.tileLightning_png);
        this._skillsLightningBtn.addTouchEventListener(this.touchEvent,this);

        this._projectsFireBtn= new ccui.Button();
        this._projectsFireBtn.loadTextures( res.tileFire_png);
        this._projectsFireBtn.addTouchEventListener(this.touchEvent,this);

        this._experienceWaterBtn= new ccui.Button();
        this._experienceWaterBtn.loadTextures( res.tileWater_png);
        this._experienceWaterBtn.addTouchEventListener(this.touchEvent,this);

        this._titleTileContainer.addChild(this._inspireLeafBtn);
        this._titleTileContainer.addChild(this._projectsFireBtn);
        this._titleTileContainer.addChild(this._skillsLightningBtn);
        this._titleTileContainer.addChild(this._experienceWaterBtn);
        this._titleTileContainer.addChild(this._aboutMeWindBtn);
        this._viewLayer.arrangeTileElements(this._titleTileContainer);
        this._viewLayer.addToView(this._titleTileContainer, this.Data.titleTileContainerPosition);

    },
    animateBackground:function(){
        var containerArr = this._titleBGContainer.getChildren();
        containerArr[0].runAction(this.Data.seqBG0);  //don't repeat clouds cause has limit
        containerArr[1].runAction(this.Data.seqBG1.repeatForever());
        containerArr[2].runAction(this.Data.seqBG2.repeatForever());
        containerArr[3].runAction(this.Data.seqBG3.repeatForever());
        containerArr[4].runAction(this.Data.seqBG4.repeatForever());

    },
    animateTiles:function(){
        this._tileArr = this._titleTileContainer.getChildren();
        var actionRotate = new cc.RotateBy(this.Data.rotationSpeed, 360);

        this._tileArr[0].runAction(this.Data.seq0.repeatForever());
        this._tileArr[1].runAction(this.Data.seq1.repeatForever());
        this._tileArr[2].runAction(this.Data.seq2.repeatForever());
        this._tileArr[3].runAction(this.Data.seq3.repeatForever());

        this._tileArr[0].runAction( new  cc.RotateBy(this.Data.rotationSpeed, -360).repeatForever());
        this._tileArr[1].runAction( new  cc.RotateBy(this.Data.rotationSpeed, -360).repeatForever());
        this._tileArr[2].runAction( new  cc.RotateBy(this.Data.rotationSpeed, -360).repeatForever());
        this._tileArr[3].runAction( new  cc.RotateBy(this.Data.rotationSpeed, -360).repeatForever());


        this._titleTileContainer.runAction(actionRotate.repeatForever());


    },
    createMenuButtons:function(){
        this._aboutMeWindBtn = new ccui.Button();
        this._aboutMeWindBtn.loadTextures( resDyn.about_btn);
        this._aboutMeWindBtn.addTouchEventListener(this.touchEvent,this);

        this._inspireLeafBtn = new ccui.Button();
        this._inspireLeafBtn.loadTextures( resDyn.inspire_btn);
        this._inspireLeafBtn.addTouchEventListener(this.touchEvent,this);

        this._projectsFireBtn = new ccui.Button();
        this._projectsFireBtn.loadTextures( resDyn.projects_png);
        this._projectsFireBtn.addTouchEventListener(this.touchEvent,this);

        this._skillsLightningBtn = new ccui.Button();
        this._skillsLightningBtn.loadTextures( resDyn.skills_png);
        this._skillsLightningBtn.addTouchEventListener(this.touchEvent,this);

        this._experienceWaterBtn = new ccui.Button();
        this._experienceWaterBtn.loadTextures( resDyn.experience_btn);
        this._experienceWaterBtn.addTouchEventListener(this.touchEvent,this);

        this._musicBtn = new ccui.Button();
        this._musicBtn.loadTextures( resDyn.music_png);
        this._musicBtn.addTouchEventListener(this.touchEvent,this);

        this._viewLayer.addTitleMenuButton(this._aboutMeWindBtn, "_aboutMeWindBtn", this.Data.aboutBtnPosition);
        this._viewLayer.addTitleMenuButton(this._inspireLeafBtn, "_inspireLeafBtn", this.Data.inspireBtnPosition);
        this._viewLayer.addTitleMenuButton(this._projectsFireBtn, "_projectsFireBtn", this.Data.projectsBtnPosition);
        this._viewLayer.addTitleMenuButton(this._skillsLightningBtn, "_skillsLightningBtn", this.Data.skillsBtnPosition);
        this._viewLayer.addTitleMenuButton(this._experienceWaterBtn, "_experienceWaterBtn", this.Data.experienceBtnPosition);

        this._viewLayer.addTitleMenuButton(this._musicBtn, "_musicBtn", this.Data.musicBtnPosition);

    },
    animateMenuButtons:function(){

    },
    touchEvent: function (sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
               // alert()

                if( isMobile && this._isAudioOn && this._musicTouchCounter == 0)
                {
                    this._musicTouchCounter ++;
                    cc.audioEngine.playMusic(res.titleBGM_mp3, true);
                    this._isAudioOn = true;
                }

                if(sender == this._aboutMeWindBtn || sender ==  this._tileArr[4]) {
                  //  console.log("wind")
                    this._tileArr[4].stopAllActions();

                    if( this.Data.isAboutContentOn)
                    {
                        this._tileArr[4].setPosition(-200,-this.Data.selectedDropAmount);
                        this.removeAllParticlesOnTile();
                        this._aboutViewLayer.fadeOut();
                        this._tileArr[4].runAction(cc.moveBy(2, cc.p(0,this.Data.selectedDropAmount))).easing(cc.easeExponentialOut());
                    }
                    else//means not clicked
                    {

                        this.turnOffAllContentExcept(this._aboutViewLayer);
                        this.handleTileOrMenuBtnTouched(this._tileArr[4]);
                        this.Data.currentContentName= "about";
                        this._aboutViewLayer.show();

                        this._tileArr[4].runAction(cc.moveBy(2, cc.p(0, -this.Data.selectedDropAmount))).easing(cc.easeExponentialOut());
                    }
                    this.Data.isAboutContentOn = !this.Data.isAboutContentOn;
                }
                else
                if(sender == this._inspireLeafBtn || sender == this._tileArr[0])
                {
                   // console.log("leaf")
                    this._tileArr[0].stopAllActions();
                    if( this.Data.isInspireContentOn)
                    {
                        this._tileArr[0].setPosition(-100,-this.Data.selectedDropAmount);
                        this.removeAllParticlesOnTile();
                        this._inspireViewLayer.fadeOut();
                        this._tileArr[0].runAction(cc.moveBy(2, cc.p(0,this.Data.selectedDropAmount))).easing(cc.easeExponentialOut());
                    }
                    else//means not clicked
                    {
                        this.turnOffAllContentExcept(this._inspireViewLayer);
                        this.Data.currentContentName= "inspire";
                        this.handleTileOrMenuBtnTouched(this._tileArr[0]);
                        this._inspireViewLayer.show();
                        this._tileArr[0].runAction(cc.moveBy(2, cc.p(0, -this.Data.selectedDropAmount))).easing(cc.easeExponentialOut());
                    }
                    this.Data.isInspireContentOn = !this.Data.isInspireContentOn;


                }
                else
                if(sender == this._projectsFireBtn || sender == this._tileArr[1])
                {
                  //  console.log("fire")
                    this._tileArr[1].stopAllActions();
                    if( this.Data.isProjectsContentOn)
                    {
                        this._tileArr[1].setPosition(0,-this.Data.selectedDropAmount);
                        this.removeAllParticlesOnTile();
                        this._projectsViewLayer.fadeOut();
                        this._tileArr[1].runAction(cc.moveBy(2, cc.p(0,this.Data.selectedDropAmount))).easing(cc.easeExponentialOut());
                    }
                    else//means not clicked
                    {
                        this.turnOffAllContentExcept(this._projectsViewLayer);
                        this.Data.currentContentName= "projects";
                        this.handleTileOrMenuBtnTouched(this._tileArr[1]);
                        this._projectsViewLayer.show();
                        this._tileArr[1].runAction(cc.moveBy(2, cc.p(0, -this.Data.selectedDropAmount))).easing(cc.easeExponentialOut());
                    }
                    this.Data.isProjectsContentOn = !this.Data.isProjectsContentOn;

                }
                else
                if(sender == this._skillsLightningBtn|| sender == this._tileArr[2])
                {
                   // console.log("lightning")                 
                    this._tileArr[2].stopAllActions();
                    if( this.Data.isSkillsContentOn)
                    {
                        this._tileArr[2].setPosition(100,-this.Data.selectedDropAmount);
                        this.removeAllParticlesOnTile();
                        this._skillsViewLayer.fadeOut();
                        this._tileArr[2].runAction(cc.moveBy(2, cc.p(0,this.Data.selectedDropAmount))).easing(cc.easeExponentialOut());
                    }
                    else//means not clicked
                    {
                        this.turnOffAllContentExcept(this._skillsViewLayer);
                        this.Data.currentContentName= "skills";
                        this.handleTileOrMenuBtnTouched(this._tileArr[2]);
                        this._skillsViewLayer.show();
                        this._tileArr[2].runAction(cc.moveBy(2, cc.p(0, -this.Data.selectedDropAmount))).easing(cc.easeExponentialOut());
                    }
                    this.Data.isSkillsContentOn = !this.Data.isSkillsContentOn;
                }
                else
                if(sender == this._experienceWaterBtn || sender == this._tileArr[3])
                {
                  //  console.log("water")
                    this._tileArr[3].stopAllActions();
                    if( this.Data.isExperienceContentOn)
                    {
                        this._tileArr[3].setPosition(200,-this.Data.selectedDropAmount);
                        this.removeAllParticlesOnTile();
                        this._experienceViewLayer.fadeOut();
                        this._tileArr[3].runAction(cc.moveBy(2, cc.p(0,this.Data.selectedDropAmount))).easing(cc.easeExponentialOut());
                    }
                    else//means not clicked
                    {
                        this.turnOffAllContentExcept(this._experienceViewLayer);
                        this.Data.currentContentName= "experience";
                        this.handleTileOrMenuBtnTouched(this._tileArr[3]);
                        this._experienceViewLayer.show();
                        this._tileArr[3].runAction(cc.moveBy(2, cc.p(0, -this.Data.selectedDropAmount))).easing(cc.easeExponentialOut());
                    }
                    this.Data.isExperienceContentOn = !this.Data.isExperienceContentOn;
                }
                else
                if(sender == this._musicBtn)
                {
                    this._isAudioOn = !this._isAudioOn;

                    if(this._isAudioOn)
                    {
                        cc.audioEngine.resumeMusic();
                        this._musicBtn.setOpacity(255);
                    }
                    else
                    {
                        this._musicBtn.setOpacity(100);
                        cc.audioEngine.pauseMusic();
                    }
                }

                break;

            /*

            case ccui.Widget.TOUCH_MOVED:
                break;
            case ccui.Widget.TOUCH_ENDED:
                break;
            default:
                break;*/
        }
    },
    turnOffAllContentExcept:function(in_layer){
        var fadeArr = new Array(true, true, true, true, true)

        switch( in_layer)
        {
            case this._aboutViewLayer:
                fadeArr[0] = false;
                break;
            case this._inspireViewLayer:
                fadeArr[1] = false;
                break;
            case this._projectsViewLayer:
                fadeArr[2] = false;
                break;
            case this._skillsViewLayer:
                fadeArr[3] = false;
                break;
            case this._experienceViewLayer:
                fadeArr[4] = false;
                break;
        }

        if(fadeArr[0]){
            if(this.Data.isAboutContentOn ){
                this.Data.isAboutContentOn = false;
                this._aboutViewLayer.fadeOut();
            }
        }

        if(fadeArr[1]){
            if(this.Data.isInspireContentOn ){
                this.Data.isInspireContentOn = false;
                this._inspireViewLayer.fadeOut();
            }
        }

        if(fadeArr[2]){
            if(this.Data.isProjectsContentOn){
                this.Data.isProjectsContentOn = false;
                this._projectsViewLayer.fadeOut();
            }
        }
        
        if(fadeArr[3]){
            if(this.Data.isSkillsContentOn){
                this.Data.isSkillsContentOn = false;
                this._skillsViewLayer.fadeOut();
            }
        }

        if(fadeArr[4]){
            if(this.Data.isExperienceContentOn){
                this.Data.isExperienceContentOn = false;
                this._experienceViewLayer.fadeOut();
            }
        }
    },
    handleTileOrMenuBtnTouched:function(in_btn){
        var resetRotation = new cc.RotateTo.create(1, 0).easing(cc.easeExponentialOut());
        var tileContainerMove = new cc.MoveTo.create(1, cc.p(this.Data._winSize.width/2, this.Data._winSize.height - 80)).easing(cc.easeExponentialOut());

        this._titleTileContainer.stopAllActions();
        this._titleTileContainer.runAction(resetRotation);
        this._titleTileContainer.runAction(tileContainerMove);

        for(var i=0; i < this._tileArr.length; i++)
        {
            this._tileArr[i].stopAllActions();
            resetRotation = new cc.RotateTo.create(1, 0).easing(cc.easeExponentialOut());
            this._tileArr[i].runAction(resetRotation);
        }


        this._tileArr[0].runAction(new cc.MoveTo.create(1.2, cc.p(-100, 0))); //leaf
        this._tileArr[1].runAction(new cc.MoveTo.create(1, cc.p(0, 0)));  //fire
        this._tileArr[2].runAction(new cc.MoveTo.create(1.2, cc.p(100, 0)));
        this._tileArr[3].runAction(new cc.MoveTo.create(1.4, cc.p(200, 0)));
        this._tileArr[4].runAction(new cc.MoveTo.create(1.4, cc.p(-200, 0)));

        this.addParticlesToTile(in_btn);
    },
    removeAllParticlesOnTile:function(){
        //remove all particles
        if(this._currentParticle != null)
        {
            this._currentParticle.destroyParticleSystem();
            for(var i=0; i < this._tileArr.length; i++)
                this._tileArr[i].removeChildByTag("currentParticle");
        }

    },
    addParticlesToTile:function(in_btn) {
        this.removeAllParticlesOnTile();
        //add particles to the one selected
        switch(in_btn)
        {
            case this._tileArr[0]:
                this._currentParticle = new cc.ParticleSystem(res.titleLeaves_p);
                this._currentParticle.setTag("currentParticle");
                if(isMobile)
                    this._currentParticle.emissionRate = 3;
                this._viewLayer.addParticleToTile(this._currentParticle, this._tileArr[0], this.Data.tileSize/2,this.Data.tileSize/2,.5 );
                break;
            case this._tileArr[1]:
                this._currentParticle = new cc.ParticleSystem(res.titleFlame_p);
                this._currentParticle.setTag("currentParticle");
                if(isMobile)
                    this._currentParticle.emissionRate = 5;
                this._viewLayer.addParticleToTile(this._currentParticle, this._tileArr[1], this.Data.tileSize/2,this.Data.tileSize/3,.5 );
                break;
            case this._tileArr[2]:
                this._currentParticle = new cc.ParticleSystem(res.titleLightning_p);
                this._currentParticle.setTag("currentParticle");
                if(isMobile)
                    this._currentParticle.emissionRate = 5;
                this._viewLayer.addParticleToTile(this._currentParticle, this._tileArr[2], this.Data.tileSize/2,this.Data.tileSize/2,.5 );
                break;
            case this._tileArr[3]:
                this._currentParticle = new cc.ParticleSystem(res.titleWater_p);
                this._currentParticle.setTag("currentParticle");
                if(isMobile)
                    this._currentParticle.emissionRate = 5;
                this._viewLayer.addParticleToTile(this._currentParticle, this._tileArr[3], this.Data.tileSize/2,this.Data.tileSize/3,.5 );
                break;
            case this._tileArr[4]:
                this._currentParticle = new cc.ParticleSystem(res.titleAir_p);
                this._currentParticle.setTag("currentParticle");
                if(isMobile)
                    this._currentParticle.emissionRate = 5;
                this._viewLayer.addParticleToTile(this._currentParticle, this._tileArr[4], this.Data.tileSize/2,this.Data.tileSize/3,.5 );
                break;

        }

            /*
        this._particleArr.push(new cc.ParticleSystem(res.titleLeaves_p));
        this._particleArr.push(new cc.ParticleSystem(res.titleFlame_p));
        this._particleArr.push(new cc.ParticleSystem(res.titleLightning_p));
        this._particleArr.push(new cc.ParticleSystem(res.titleWater_p));
        this._particleArr.push(new cc.ParticleSystem(res.titleAir_p));

        if(isMobile) //decrease particle count for performance
        {
            this._particleArr[0].emissionRate = 3;
            this._particleArr[1].emissionRate = 5;
            this._particleArr[2].emissionRate = 5;
            this._particleArr[3].emissionRate = 5;
        }

        this._viewLayer.addParticleToTile(this._particleArr[0], this._tileArr[0], this.Data.tileSize/2,this.Data.tileSize/2,.5 );
        this._viewLayer.addParticleToTile(this._particleArr[1], this._tileArr[1], this.Data.tileSize/2,this.Data.tileSize/3, .5 );
        this._viewLayer.addParticleToTile(this._particleArr[2], this._tileArr[2], this.Data.tileSize/2,this.Data.tileSize/2, .5 );
        this._viewLayer.addParticleToTile(this._particleArr[3], this._tileArr[3], this.Data.tileSize/2,this.Data.tileSize/3, .5 );
        this._viewLayer.addParticleToTile(this._particleArr[4], this._tileArr[4], this.Data.tileSize/2,this.Data.tileSize/3, .5);
*/
    },
    cleanUp:function(){
        //clean particle emitters
        for(var i=0; i < this._particleArr.length; i++)
        {
            this._particleArr[i].destroyParticleSystem();
        }
        this._aboutMeWindBtn.removeAllListeners();
        this._inspireLeafBtn.removeAllListeners();
        this._projectsFireBtn.removeAllListeners();
        this._skillsLightningBtn.removeAllListeners();
        this._experienceWaterBtn.removeAllListeners();
        this._musicBtn.removeAllListeners();


    },
    resizeContentsToMakeFitGood:function(){

        var scaleAmount;
        var scaleAmountContent;
        this._winSize = cc.director.getWinSize();
      //  console.log(window.innerWidth + " "  +window.innerHeight);
        var contentStartPosition ;

        if(window.innerWidth <= 500 )//&& isMobile)
        {
            scaleAmount = .7;
            scaleAmountContent = .6;

        }

        if(window.innerWidth < 800 && window.innerWidth > 500) //ipad
        {
            scaleAmount = 1;
            scaleAmountContent = .9;
        }

        if(window.innerWidth > 800)
        {
            scaleAmount =1;
            scaleAmountContent = 1;
        }

        this._aboutMeWindBtn.setPosition( cc.p(this._winSize.width/2 - 200 *scaleAmount, this._winSize.height - 30 ) );
        this._inspireLeafBtn.setPosition( cc.p(this._winSize.width/2 - 100 *scaleAmount, this._winSize.height - 30 ) );
        this._projectsFireBtn.setPosition( cc.p(this._winSize.width/2 , this._winSize.height - 30 ) );
        this._skillsLightningBtn.setPosition( cc.p(this._winSize.width/2 + 100 *scaleAmount, this._winSize.height - 30 ) );
        this._experienceWaterBtn.setPosition( cc.p(this._winSize.width/2 + 200 *scaleAmount, this._winSize.height - 30 ) );
        this._aboutViewLayer.scaleX = this._aboutViewLayer.scaleY = scaleAmountContent;
        this._inspireViewLayer.scaleX = this._inspireViewLayer.scaleY = scaleAmountContent;
        this._projectsViewLayer.scaleX = this._projectsViewLayer.scaleY = scaleAmountContent;
        this._skillsViewLayer.scaleX = this._skillsViewLayer.scaleY = scaleAmountContent;
        this._experienceViewLayer.scaleX = this._experienceViewLayer.scaleY = scaleAmountContent;
        this._aboutViewLayer.scaleX = this._aboutViewLayer.scaleY = scaleAmountContent;
        contentStartPosition = cc.p(this._winSize.width/2*scaleAmountContent, this._winSize.height/2*scaleAmountContent ) ;
        this._aboutViewLayer.setPosition(contentStartPosition );
        this._inspireViewLayer.setPosition( contentStartPosition );
        this._projectsViewLayer.setPosition( contentStartPosition );
        this._skillsViewLayer.setPosition( contentStartPosition );
        this._experienceViewLayer.setPosition( contentStartPosition );
        this._aboutViewLayer.setPosition( contentStartPosition );
        this._titleTileContainer.scaleX = this._titleTileContainer.scaleY = scaleAmount;
        this._aboutMeWindBtn.scaleX = this._aboutMeWindBtn.scaleY = scaleAmount;
        this._inspireLeafBtn.scaleX = this._inspireLeafBtn.scaleY = scaleAmount;
        this._projectsFireBtn.scaleX = this._projectsFireBtn.scaleY = scaleAmount;
        this._skillsLightningBtn.scaleX = this._skillsLightningBtn.scaleY = scaleAmount;
        this._experienceWaterBtn.scaleX = this._experienceWaterBtn.scaleY = scaleAmount;
        this._musicBtn.scaleX = this._musicBtn.scaleY = scaleAmount;

    }


});





