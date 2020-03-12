
var startAnimation = function(){

  var imgBG1 = $("#img--bg-1"),
    imgBG2 = $("#img--bg-2"),
    logoMain = $("#logo--toyota"),
    logoHybrid = $("#logo--hybrid"),
    highlightOne = $("#highlight-1"),
    highlightTwo = $("#highlight-2"),
    frameOne = $("#frame--title"),
    frameTwo = $("#frame--slogan"),   
    frameThree = $("#frame--finance"),
    frameFour = $("#frame--cta"),
    tl = new TimelineLite();

  tl
    .to(imgBG1, 1, {opacity: 1, ease:Power1.easeIn}, 0)
    .to(logoMain,  1, {css:{top:"0"}}, 0)
    .to(frameOne, 1, {opacity: 1, ease:Power1.easeIn}, 1)
    .to(highlightOne, 0.25, {opacity: 1, ease:Power1.easeIn}, 2)
    .call(function() {$('#text-2').addClass("nudgeLeft");}, null, null, 2.1)
    .to(frameOne, 1, {opacity: 0, ease:Power1.easeOut}, 5)
    .to(highlightOne, 1, {opacity: 0, ease:Power1.easeIn}, 5)
    .to(frameTwo, 1, {opacity: 1, ease:Power1.easeIn}, 6)
    .to(highlightTwo, 0.25, {opacity: 1, ease:Power1.easeIn}, 6.5)
    .call(function() {$('#text-5').addClass("nudgeLeft");}, null, null, 6.6)
    .to(highlightTwo, 1, {opacity: 0, ease:Power1.easeIn}, 10)
    .to(frameTwo, 1, {opacity: 0, ease:Power1.easeOut}, 10)
    .to(imgBG2, 0.25, {opacity: 1, ease:Power1.easeIn}, 11)
    .to(frameThree, 1, {opacity: 1, ease:Power1.easeIn}, 11.25)
    .to(frameThree, 0.5, {opacity: 0, ease:Power1.easeIn}, 16.5)
    .to(imgBG2, 0.5, {opacity: 0, ease:Power1.easeIn}, 17)
    .to(frameFour, 1, {opacity: 1, ease:Power1.easeIn}, 17.5);
};