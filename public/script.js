let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "come back soon";
});

window.addEventListener("focus", () => {
    document.title = docTitle;
})

const gatewayData = (data) => {
    const [name, price, amount] = data;
    console.log(name, price, amount);
    sessionStorage.setItem("gateway-data", JSON.stringify(data));
    window.location.href = "http://localhost:5000/payment-gateway.html";
}
