
var startAnimation = function(){

  var imgBG1 = $("#img--bg01"),
    imgBG2 = $("#img--bg02"),
    logoMain = $("#logo--toyota"),
    logoHybrid = $("#logo--hybrid"),
    frameOne = $("#frame--title"),    // jQuery ID 
    frameTwo = $("#frame--slogan"),
    frameThree = $("#frame--finance"),
    frameFour = $("#frame--cta"),
    highlightOne = $("#highlight-1"),
    highlightTwo = $("#highlight-2"),
    tl = new TimelineLite();

  tl
    .to(imgBG1, 1, {opacity: 1, ease:Power1.easeIn}, 0)
    //.to(logoHybrid, 1, {opacity: 1, ease:Power1.easeIn}, 0)
    .to(logoMain,  1, {css:{top:"0"}}, 0)
    .to(frameOne, 1, {opacity: 1, ease:Power1.easeIn}, 1)
    .to(highlightOne, 0.25, {opacity: 1, ease:Power1.easeIn}, 2)
    .call(function() {$('#text-1').addClass("nudgeLeft");}, null, null, 2.1)
    .to(frameOne, 1, {opacity: 0, ease:Power1.easeOut}, 5)
    .to(highlightOne, 1, {opacity: 0, ease:Power1.easeIn}, 5)
    .to(frameTwo, 1, {opacity: 1, ease:Power1.easeIn}, 6)
    .to(highlightTwo, 0.25, {opacity: 1, ease:Power1.easeIn}, 6.5)
    .call(function() {$('#text-4').addClass("nudgeLeft");}, null, null, 6.6)
    .to(frameTwo, 1, {opacity: 0, ease:Power1.easeOut}, 10)
    .to(highlightTwo, 1, {opacity: 0, ease:Power1.easeIn}, 10)
    .to(imgBG2, 1, {opacity: 1, ease:Power1.easeOut}, 10.5)
    .to(frameThree, 1, {opacity: 1, ease:Power1.easeIn}, 11)
    .to(frameThree, 1, {opacity: 0, ease:Power1.easeIn}, 15)
    .to(imgBG2, 1, {opacity: 0, ease:Power1.easeOut}, 15.5)
    .to(frameFour, 1, {opacity: 1, ease:Power1.easeIn}, 16);
};