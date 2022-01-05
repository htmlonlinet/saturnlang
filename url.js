var link = "https://saturnlang.github.io/saturnlang/";
link.split('.html')[0];
window.history.replaceState( null, null, link );
if(window.undefined){
  window.location.assign("404");
}
