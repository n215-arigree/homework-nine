// var homeContent = ``;
// var aboutContent = ``;
// var productsContent = ``;
// var contactContent = ``;

function initListeners() {
  $("nav a").on("click", (e) => {
    let btnID = e.currentTarget.id;
    console.log(btnID);
    loadContent(btnID);
    $("#app").html(btnID);
    // $("#app").html(eval(pageContent));
  });
}

function loadContent(pageName){
  let pageContent = pageName + "Content";
  $.get(`../pages/${pageName}.html`, (data) => {
       $("#app").html(data);
});
$("#app").html(eval(pageContent));
}

// function loadContent(pageName) {
//   $.get(`../pages/${pageName}.html`, (data) => {
//     $("#app").html(data);
//   }).fail((error) => {
//     alert("Page is " + error.statusText);
//   });
// }


$(document).ready(function () {
  loadContent("home");
  initListeners();
});
