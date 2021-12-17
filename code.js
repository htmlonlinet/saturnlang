const Cookies = {
  cookiesEnabled:function(){
    if(navigator.cookieEnabled)
    {
      alert("is enabled")
    }
  }
}
const cookies = Object.create(Cookies);
const doc = document;
const conf = confirm;
function num(str) {
  const number = 0;
  if (number === null) {
    return this.number;
  }else if(number == undefined){
    return "this.number is undefined";
  }
  return this.number;
}
function a(x){
  const math = 0;
  if(math == null){
    return null;
  }
  if(math == undefined){
    return "this.math is undefined";
  }
  return this.math;
}
function p(b){
  const loadpage = window.location.href;
  if(loadpage == null){
    return "this.loadpage is set to null";
  }else if(loadpage == undefined){
    return "Error loadpage is undefined";
  }
  return this.loadpage;
}
