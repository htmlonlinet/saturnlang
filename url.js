//remove .html file extension
var url = "https://saturnlang.github.io/saturnlang/index.html";
url.split('.html')[0];
window.history.replaceState( null, null, url );
