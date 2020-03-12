var ctaExit;
var centreName;
const centreNameDiv = document.getElementById("js-fontsize");

// If true, start function. If false, listen for INIT.
window.onload = () => {
  if (Enabler.isInitialized()) {
      enablerInitHandler();
  } else {
      Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
  }
}

const enablerInitHandler = () => {

  document.getElementById('overlay').addEventListener('click', bgExitHandler, false);

  if (Enabler.isPageLoaded()) {
    pageLoadedHandler();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
  }

}

//The following code out of the enablerInitHandler function
const pageLoadedHandler = () => {
  document.getElementById('loading').style.display = "none";

  Enabler.setProfileId(10509293);
    var devDynamicContent = {};

    devDynamicContent.Q1_2020_Business_Sheet1 = [{}];
    devDynamicContent.Q1_2020_Business_Sheet1[0]._id = 0;
    devDynamicContent.Q1_2020_Business_Sheet1[0].ID = 1;
    devDynamicContent.Q1_2020_Business_Sheet1[0].REPORTINGLABEL = "FLEET";
    devDynamicContent.Q1_2020_Business_Sheet1[0].CENTRE = "Your Local Business Centre";
    devDynamicContent.Q1_2020_Business_Sheet1[0].URLCOROLLA = {};
    devDynamicContent.Q1_2020_Business_Sheet1[0].URLCOROLLA.Url = "https://www.toyota.co.uk/current-offers/?select=contracthireoffer&utm_source=display&utm_medium=cpm&utm_campaign=eaon";
    devDynamicContent.Q1_2020_Business_Sheet1[0].URLRAV4 = {};
    devDynamicContent.Q1_2020_Business_Sheet1[0].URLRAV4.Url = "https://www.toyota.co.uk/current-offers/?select=contracthireoffer&utm_source=display&utm_medium=cpm&utm_campaign=eaon";
    devDynamicContent.Q1_2020_Business_Sheet1[0].URLCHR = {};
    devDynamicContent.Q1_2020_Business_Sheet1[0].URLCHR.Url = "https://www.toyota.co.uk/current-offers/?select=contracthireoffer&utm_source=display&utm_medium=cpm&utm_campaign=eaon";
    devDynamicContent.Q1_2020_Business_Sheet1[0].URLHILUX = {};
    devDynamicContent.Q1_2020_Business_Sheet1[0].URLHILUX.Url = "https://www.toyota.co.uk/current-offers/?select=contracthireoffer&utm_source=display&utm_medium=cpm&utm_campaign=eaon";
    devDynamicContent.Q1_2020_Business_Sheet1[0].URLPROACE = {};
    devDynamicContent.Q1_2020_Business_Sheet1[0].URLPROACE.Url = "https://www.toyota.co.uk/current-offers/?select=contracthireoffer&utm_source=display&utm_medium=cpm&utm_campaign=eaon";
    Enabler.setDevDynamicContent(devDynamicContent);

    ctaExit = dynamicContent.Q1_2020_Business_Sheet1[0].URLCHR.Url;

    centreName = dynamicContent.Q1_2020_Business_Sheet1[0].CENTRE;
    document.getElementById("js-centrename").innerHTML = centreName;

    if (centreName.length > 20) {
      centreNameDiv.style.fontSize = '15px';
      centreNameDiv.style.lineHeight = '1';
    } 

    startAnimation();  
}

const bgExitHandler = (e) => { 
  e.preventDefault();
  Enabler.exitOverride('Background', ctaExit);
}