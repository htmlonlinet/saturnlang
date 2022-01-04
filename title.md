<p>how to change/create a title</p>

<p>in an html file</p>
&lt;script src="https://saturnlang.github.io/saturnlang/code.js"&gt;title = "your title"; 
document.title = title;&lt;/script&gt;

<p>in a JavaScript file</p>
var script = document.createElement("script");
script.src = "https://saturnlang.github.io/saturnlang/code.js";
document.body.appendChild(script);
title = "your title";
document.title = title;
