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
function elem(bod){
  const element = 0;
  if(this.element === undefined){
    return "Error this.element is undefined";
  }else if(this.element === null){
    return "Error this.element is set to null";
  }
  return this.element;
}
function assig(b){
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
function tit(t){
  const title = 0;
  if(this.title === undefined){
    return "title is undefined";
  }else if(this.title === null){
    return "title is set to null";
}
return this.title;
}
function popupmes(pmes){
  const popmes = alert;
  if(this.popmes === undefined){
    return "popmes is undefined";
  }else if(this.popmes === null){
    return "popmes is set to null";
  }
  return this.popmes;
}
const navig = new navigator;
function scriptTag(stag){
  const script = document.getElementsByTagName("script");
  if(this.script === undefined){
    return "script is undefined";
  }else if(this.script === null){
    return "script is set to null";
  }
return this.script;
}
function Variable(vari){
  const variable = 5;
  if(this.variable === null){
    return "variable is set to null";
  }else if(this.variable === undefined){
    return "variable is undefined";
  }
  return this.variable;
}
