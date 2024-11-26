console.log("Welcome to jQuery");

let redParagraph = $("#red")
    .css("background", "red")
    .css("color", "white");
console.log("my red paragraph", redParagraph);

let blueParagraph = $("#blue")
    .css("background", 'blue')
    .css('color', 'white');

let myParagraphWithBorder = $(".with-boarder");

myParagraphWithBorder.css('border', '5px dashed yellow');

myParagraphWithBorder.click(function (){
    console.log("I was clicked");
    $(this).addClass("bg-gray");
});

let paragraphs = $('p');
paragraphs.css("cursor", "pointer");


function register() {
    console.log('Registering Function');

    let testEntry = $('#testInput').val();
    $("#results").append(`<li>${testEntry}</li>`);
    $("#testInput").val("");

}

$("#btnRegister").on("click", register)

function clickMe() {
    console.log("clickMe btn");

    $("p:first").hide();
    $("p:last").css("border", "5px solid skyblue");
}

$("newBtn").on("click", clickMe);


function showName() {
    $("#user-name").slideDown(0);
}

function hideName() {
    $("#user-name").slideUp(0);
}