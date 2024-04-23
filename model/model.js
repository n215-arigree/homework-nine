// var homeContent = ``;
// var aboutContent = ``;
// var productsContent = ``;
// var reviewsContent = ``;

// export function loadPage(pageID){
//     let pageVarName = pageID + "Page";
//     // alert(anyString);
//     $("#app").html(eval(pageVarName));
// }

// export function mixWords(firstWord, secondWord){
//     let newWord = secondWord + " " + firstWord;
//     console.log(newWord);
// }
export function loadPage(pageID) {
    let url;
    switch (pageID) {
        case "home":
            url = "pages/home.html";
            break;
        case "about":
            url = "pages/about.html";
            break;
        case "products":
            url = "pages/products.html";
            break;
        case "reviews":
            url = "pages/reviews.html";
            break;
        default:
            console.error("Invalid page ID");
            return;
    }

    $.ajax({
        url: url,
        type: "GET",
        success: function (data) {
            $("#app").html(data);
        },
        error: function (xhr, status, error) {
            console.error("Error loading page:", error);
        },
    });
}