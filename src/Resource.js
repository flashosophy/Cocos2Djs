/*
keeps track of all resources in this one file
*/

//dynamic loaded resource
var resDyn ={

    music_png : "res/menu/music.png",
    portfolio_png : "res/menu/portfolio.png",
    about_btn : "res/menu/about.png",
    experience_btn : "res/menu/experience.png",
    inspire_btn : "res/menu/inspire.png",
    projects_png : "res/menu/projects.png",
    skills_png : "res/menu/skills.png",
    cornerTile_png : "res/common/cornerTile.png",

    aboutBG_jpg : "res/content/aboutBG.jpg",
    contentBG_png : "res/content/contentBG.png",
    aboutText_png : "res/content/aboutText.png",
    inspireText_png : "res/content/inspireText.png",

    projectsText_png : "res/content/projectsText.png",
    gamesBtn_png : "res/content/gamesBtn.png",
    pluginsBtn_png : "res/content/pluginsBtn.png",
    webBtn_png : "res/content/webBtn.png",

    openBtn : "res/content/openBtn.png",
    playBtn : "res/content/playBtn.png",
    webText : "res/content/webText.png",
    gamesText : "res/content/gamesText.png",
    pluginsText: "res/content/pluginsText.png",
    appStore : "res/content/appStore.png",
    googlePlay : "res/content/googlePlay.png",

    plugin0 : "res/content/plugin0.png",
    plugin1 : "res/content/plugin1.png",

    skillsText : "res/content/skillsText.png",
    experienceText : "res/content/experienceText.png",

    arrowLeft_png : "res/common/arrowLeft.png",
    arrowRight_png : "res/common/arrowRight.png"



};


//preloaded
var res = {
    titleBGM_mp3 :  "res/audio/title.mp3",
    tileEarth_png : "res/tiles/earth.png",
    tileFire_png : "res/tiles/fire.png",
    tileLightning_png : "res/tiles/lightning.png",
    tileWater_png : "res/tiles/water.png",
    tileWind_png : "res/tiles/wind.png",

    titleSky_jpg : "res/background/titleSky.jpg",
    titleFG_png : "res/background/titleFG.png",
    titleBG0_png : "res/background/titleBG0.png",
    titleBG1_png : "res/background/titleBG1.png",
    titleMiddle_png : "res/background/titleMiddle.png",

    titleLightning_p : "res/particles/titleLightning.plist",
    titleFlame_p : "res/particles/titleFlame.plist",
    titleLeaves_p : "res/particles/titleLeaves.plist",
    titleWater_p : "res/particles/titleWater.plist",
    titleAir_p : "res/particles/titleAir.plist",
    titleFullLeaves_p : "res/particles/fullLeaves.plist"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
