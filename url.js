//remove .html file extension
var url = "https://saturnlang.github.io/saturnlang";
url.split('.html')[0];
window.history.replaceState( null, null, url );
