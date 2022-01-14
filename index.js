function go(){
 var iframe = document.createElement("iframe");
 iframe.src = document.getElementById("option").value;
 iframe.style = "width:10000px; height:1000px;";
 document.body.appendChild(iframe);
 document.getElementById("link").style.display = "none";
 document.getElementById("hr").style.display = "none";
 window.location.hash = "#option=" + document.getElementById("option").value;
}
if(window.location.hash == "#option=home.html"){iframe.src ="home.html";}
if(window.location.hash == "#option=page2.html"){iframe.src = "page2.html";}
if(window.location.hash == "#option=page3.html"){iframe.src = "page3.html";}
