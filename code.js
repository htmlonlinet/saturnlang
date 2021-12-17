const Cookies = {
  cookiesEnabled:function(){
    if(navigator.cookieEnabled)
    {
      alert("is enabled")
    }
  }
}
const cookies = Object.create(Cookies);
