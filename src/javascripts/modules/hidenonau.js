/**
 * Searches elements with "nonau" class under dom element where "data-module="hidenonau" configured 
 * and sets "display: block" if
 *  - server port is 3000
 *  - server port is NOT 3000 and request is NOT coming from australia
 * 
 * Hide nonau elements in dev environment by using ?hideau param: http://localhost:3000/index.html?hideau
 * 
 * To show/hide element based on location, add nonau class to div and set style="display: none;" on the element.
 * 
 * 
 */

export default class HideNonAu {

  constructor(el) {
    if (location.port !== "3000") {
      this.showElementsByApi(el, this.showNonAuElements);
    } else {
      if (!location.search.includes("hideau")) {
        this.showNonAuElements(el);
      }
    }
  }

  showNonAuElements(el) {
    const nonaAuElements = el.querySelectorAll('.nonau');
    for (let i = 0; i < nonaAuElements.length; i++) { 
      nonaAuElements[i].style.display = 'block';
    }
  }

  showElementsByApi(el, f){
    $.ajax({
      url: "http://ip-api.com/json",
      type: 'GET',
      success: function(json){
        if (location.port == "3000") {
          console.log("Request country: " + json.country);
        }
        if (json.country !== "Australia") {
          f(el);
        }
      },
      error: function(err){
        console.log("Request failed, error= " + err);
      }
    });
  }
}
