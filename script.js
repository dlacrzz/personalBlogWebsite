var blogButton = document.getElementById("butt");

blogButton.addEventListener("click", function() {
    window.location.href = "https://www.noldus.com/blog/topic/monkey";
});


var youtubeButton = document.getElementById("youtube");

youtubeButton.addEventListener("click", function() {
    window.location.href = "https://www.youtube.com/watch?v=rWH4XGO1KSU";
});


const toggleButton = document.getElementById("toggleButton");
const footer = document.querySelector(".footer");

toggleButton.addEventListener("click", function() {
    if (footer.style.display === "none" || footer.style.display === "") {
        footer.style.display = "block";
    } else {
        footer.style.display = "none";
    }
});
