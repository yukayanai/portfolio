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

    // window.addEventListener('DOMContentLoaded', (event) => {
    //   console.log('DOM fully loaded and parsed');
    //  });

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
    window.dispatchEvent(new Event('resize'));
  }

  showElementsByApi(el, f){
    $.ajax({
      url: "https://api.ipdata.co?api-key=201b111f88723766555519cc6d26d7be7c253fa8931e14040947f7d8",
      type: 'GET',
      success: function(json){
        if (location.port == "3000") {
          console.log("Request country: " + json.country_name);
        }
        if (json.country_name !== "Australia") {
          f(el);
        }
      },
      error: function(err){
        console.log("Request failed, error= ", err);
      }
    });
  }
}
