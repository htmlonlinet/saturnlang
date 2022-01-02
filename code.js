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
  }else if(number === undefined){
    return "this.number is undefined";
  }
  return this.number;
}
function a(x){
  const math = 0;
  if(math === null){
    return null;
  }
  if(math === undefined){
    return "this.math is undefined";
  }
  return this.math;
}
function b(bod){
  const element = 0;
  if(this.element === undefined){
    return "Error this.element is undefined";
  }else if(this.element === null){
    return "Error this.element is set to null";
  }
  return this.element;
}
function p(b){
  const assign = new window.location.assign;
  if(this.assign === null){
    return "this.loadpage is set to null";
  }else if(this.assign == undefined){
    return "Error this.loadpage is undefined";
  }
  return this.assign;
}
function writemes(w){
  const message = 5;
  if(this.message === undefined){
    return "Error this.message is undefined";
  }else if(this.message === null){
    return "Error this.message is set to null";
  }
  return this.message;
}
