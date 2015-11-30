/*
This is the Model from the MVC architecture.  It contains data only
*/
Title.Data = cc.Class.extend({
    _winSize: null,
    titleSpritePosition: null,
    titleSpriteArenaPosition:null,
    titleTileContainerPosition:null,
    titleBGContainerPosition:null,
    tileSS : null,
    tilePlist : null,
    delayTime:null,
    seqBG0:null,
    seqBG1:null,
    seqBG2:null,
    seqBG3:null,
    seqBG4:null,
    seq0:null,
    seq1:null,
    seq2:null,
    seq3:null,
    seq4:null,
    rotationSeq:null,
    shiftAmount:null,
    rotationSpeed:null,
    adventureBtnPosition:null,
    arenaBtnPosition:null,
    upgradeBtnPosition:null,
    bgShiftAmountX:null,
    bgShiftAmountY:null,
    bgTransitionDelay:null,
    screenParticlePosition:null,
    supportsOrientationChange:null,
    tileSize:null,
    seqFooter:null,
    footerTextPosition:null,
    aboutBtnPosition:null,
    inspireBtnPosition:null,
    projectsBtnPosition:null,
    skillsBtnPosition:null,
    experienceBtnPosition:null,
    musicBtnPosition:null,
    contentStartPosition:null,
    currentContentName:null,
    selectedDropAmount:null,
    isAboutContentOn:null,
    isInspireContentOn:null,
    isProjectsContentOn:null,
    isSkillsContentOn:null,
    isExperienceContentOn:null,
ctor: function () {
        this._winSize = cc.director.getWinSize();

        this.supportsOrientationChange = "onorientationchange" in window, orientationEvent = this.supportsOrientationChange ? "orientationchange" : "resize";
        this.isAboutContentOn = false;
        this.isInspireContentOn = false;
        this.isProjectsContentOn= false;
        this.isSkillsContentOn= false;
        this.isExperienceContentOn= false;
        this.delayTime = cc.delayTime(0.10);
        this.bgTransitionDelay = 40;
        this.shiftAmount = 20;
        this.bgShiftAmountX = 200;
        this.bgShiftAmountY = 150;
        this.rotationSpeed = 20;
        this.selectedDropAmount = 10;
        this.titleBGContainerPosition = cc.p(this._winSize.width / 2, this._winSize.height / 2);
        this.titleSpritePosition = cc.p(this._winSize.width / 2, this._winSize.height - 75);
        this.titleSpriteArenaPosition = cc.p(this._winSize.width / 1.5, this._winSize.height - 150);
        this.titleTileContainerPosition = cc.p(this._winSize.width / 2, this._winSize.height / 2);

        //background sequences
        this.seqBG0 = this.generateMovementLimitSequence( 150,  cc.p(600,0) );   //sky
        this.seqBG1 = this.generateEaseLeftRightSequence(  cc.delayTime(10),cc.delayTime(40), 60, 30,  cc.p(this.bgShiftAmountX, this.bgShiftAmountY) );    //bg
        this.seqBG2 = this.generateEaseLeftRightSequence(  cc.delayTime(20),cc.delayTime(30),50, 40, cc.p(this.bgShiftAmountX, this.bgShiftAmountY) );   //bg1
        this.seqBG3 = this.generateEaseLeftRightSequence(  cc.delayTime(30),cc.delayTime(20),40, 50, cc.p(this.bgShiftAmountX, this.bgShiftAmountY) );   //mid
        this.seqBG4 = this.generateEaseLeftRightSequence(  cc.delayTime(40),cc.delayTime(10),30, 60, cc.p(this.bgShiftAmountX, this.bgShiftAmountY) );   //fg

        //tile sequences
        this.seq0 = this.generateEaseBounceSequence( this.delayTime, 2.2,  cc.p(0, this.shiftAmount) );
        this.seq1 = this.generateEaseBounceSequence( this.delayTime, 2.3,  cc.p(this.shiftAmount, 0) );
        this.seq2 = this.generateEaseBounceSequence( this.delayTime, 2.4,  cc.p(0, -this.shiftAmount) );
        this.seq3 = this.generateEaseBounceSequence( this.delayTime, 2.5,  cc.p(-this.shiftAmount, 0) );

        this.seq4 = this.generateEaseSequence( this.delayTime, 2,    cc.p(this.shiftAmount*3, 0) ); //title sequence
        this.rotationSeq =cc.sequence(  cc.rotateBy(this.rotationSpeed,360) );

        this.adventureBtnPosition= cc.p(this._winSize.width/2, this._winSize.height/2-100) ;
        this.arenaBtnPosition= cc.p(this._winSize.width/2, this._winSize.height/2-200) ;
        this.upgradeBtnPosition= cc.p(this._winSize.width/2, this._winSize.height/2-300) ;
        this.screenParticlePosition= cc.p(this._winSize.width, this._winSize.height/3) ;


    //menu btns
        this.aboutBtnPosition   = cc.p(this._winSize.width/2 - 200, this._winSize.height - 30 ) ;
        this.inspireBtnPosition = cc.p(this._winSize.width/2 - 100, this._winSize.height - 30) ;
        this.projectsBtnPosition= cc.p(this._winSize.width/2, this._winSize.height -  30) ;
        this.skillsBtnPosition  = cc.p(this._winSize.width/2 + 100, this._winSize.height - 30) ;
        this.experienceBtnPosition= cc.p(this._winSize.width/2 + 200, this._winSize.height - 30) ;
        this.musicBtnPosition= cc.p(this._winSize.width/2 + 120,  30) ;

    //content
        this.contentStartPosition  = cc.p(this._winSize.width/2, this._winSize.height/2 -25) ;

        //footer
        this.seqFooter = this.generateEaseSequence(this.delayTime,  2,  cc.p(0,30) );
        this.footerTextPosition = cc.p(this._winSize.width/2, 0) ;
    },
    generateEaseSequence:function(in_delay, in_duration, in_position ){
        var moveNum = cc.moveBy(in_duration,in_position);
        var move_ease_out = moveNum.clone().easing(cc.easeExponentialOut());

        return (cc.sequence(move_ease_out , in_delay.clone()) );

    },
    generateEaseBounceSequence:function(in_delay, in_duration, in_position ){
        var moveNum = cc.moveBy(in_duration,in_position);
        var move_ease_out = moveNum.clone().easing(cc.easeExponentialOut());
        var move_ease_out_back = move_ease_out.reverse();

        return (cc.sequence(move_ease_out , in_delay.clone(),  move_ease_out_back, in_delay.clone()) );

    },
    generateMovementLimitSequence:function( in_duration, in_position ){
        var moveNum = cc.moveBy(in_duration,in_position);
        return (cc.sequence(moveNum) );
    },
    generateEaseLeftRightSequence:function(in_delay,in_delay2, in_duration,in_duration2, in_position ){
        var moveNum = cc.moveBy(in_duration,in_position);
        var moveNum2 = cc.moveBy(in_duration2,in_position);
        var moveback = moveNum2.reverse();

        return (cc.sequence(moveNum , in_delay.clone(),  moveback, in_delay2.clone()) );

    }
});





