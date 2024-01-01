function accessrandompage() {
var randompage = Math.floor(Math.random() * diary.length);
window.location.replace("index" + randompage + ".html");
}
