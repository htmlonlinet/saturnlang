const Cookies = {
  enabled:false,
  isenabled:function(){
    if(navigator.cookieEnabled){document.write("Cookies are Enabled")}else{alert("Enable Cookies!")}
  }
};
const cookies = Object.create(Cookies);
const Win = {
  und:false,
  404:function(){
    if(window.undifiend){window.location.assign("404.html")};
  }
};
const win = Object.create(Win);
const BOdy = {
  bo:false,
  error:function(){
    if(document.body.onerror){document.write("Error found");}
  }
}
const Body = Object.create(BOdy);
const doc = document;
const date = new Date;
const math = new Math;
const conf = confirm;
const message = alert;
const navig = navigator;
const storage = localStorage;
const path = window.location.pathname;
const consl = console;
const obj = new Object;
const hist = window.history;
