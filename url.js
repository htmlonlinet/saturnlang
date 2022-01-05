var url = window.location.href;
url.split('.html')[0];
window.history.replaceState( null, null, url );
