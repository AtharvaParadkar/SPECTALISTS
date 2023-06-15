let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "come back soon";
});

window.addEventListener("focus", () => {
    document.title = docTitle;
})