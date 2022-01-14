function go(){
 var iframe = document.createElement("iframe");
 iframe.src = document.getElementById("option").value;
 iframe.style = "width:10000px; height:1000px;";
 document.body.appendChild(iframe);
 document.getElementById("link").style.display = "none";
 document.getElementById("hr").style.display = "none";
 window.location.href = "https:/saturnlang.github.io/saturnlang?option=" + document.getElementById("option").value;
}
if(window.location.href == "https://saturnlang.github.io/saturnlang?option=home.html"){iframe.slyle.display ="block"; 
                                                iframe.src ="home.html";}
if(window.location.href == "https://saturnlang.github.io/saturnlang?option=page2.html"){iframe.style.display ="block"; 
                                                 iframe.src = "page2.html";}
if(window.location.hash == "https://saturnlang.github.io/saturnlang?option=page3.html"){iframe.style.display ="block";
                                                 iframe.src = "page3.html";}
