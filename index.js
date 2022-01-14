function go(){
 var iframe = document.createElement("iframe");
 iframe.src = document.getElementById("option").value;
 iframe.style = "width:1000px; height:1000px;";
 document.body.appendChild(iframe);
 document.getElementById("link").style.display = "none";
 document.getElementById("hr").style.display = "none";
}