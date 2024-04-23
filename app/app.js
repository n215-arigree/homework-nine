// var homeContent = ``;
// var aboutContent = ``;
// var productsContent = ``;
// var reviewsContent = ``;

// function initListeners() {
//   $("nav a").on("click", (e) => {
//     let btnID = e.currentTarget.id;
//     console.log(btnID);
//     loadContent(btnID);
//     $("#app").html(btnID);
//     // $("#app").html(eval(pageContent));
//   });
// }

// function loadContent(pageName) {
//   let pageContent = pageName + "Content";
//   $.get(`../pages/${pageName}.html`, (data) => {
//     $("#app").html(data);
   
//   }).fail((error) => {
//     alert("Page is " + error.statusText);
//   });
// }

// function loadContent(pageName) {
//   $.get(`../pages/${pageName}.html`, (data) => {
//     $("#app").html(data);
//   }).fail((error) => {
//     alert("Page is " + error.statusText);
//   });
// }


// $(document).ready(function () {
//   loadContent("home");
//   initListeners();
// });

// import { loadPage, mixWords } from "../model/model.js";
// function changeRoute() {
//   let hashTag = window.location.hash;
//   let pageID = hashTag.replace("#", "");
//   console.log(hashTag + " " + pageID);
//   loadPage(pageID);

// }



// function initURLListener() {
//   $(window).on("hashchange", changeRoute);
//   changeRoute();
// }


// $(document).ready(function () {
//   loadPage("home"); 
//   initURLListener(); 
// });

import { loadPage } from "../model/model.js";

$(document).ready(function () {
    initURLListener();
});

function initURLListener() {
    $(window).on("hashchange", function () {
        const pageID = window.location.hash.substring(1);
        loadPage(pageID);
    });
    loadPage(window.location.hash.substring(1));
}