<title>check if cookies are enabled</title>
<p>check if cookies are enabled</p>

<p>in an Html file</p>
&lt;script src="https://saturnlang.github.io/code.js"&gt;cookies.cookiesEnabled();&lt;/script&gt;
<p>in a JavaScript file</p>
var script = document.createElement("script");
script.src = "https://saturnlang.github.io/code.js";
document.body.appendChild(script);
cookies.cookiesEnabled();
