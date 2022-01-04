<title>check if cookies are enabled</title>
<p>check if cookies are enabled</p>

<p>in an Html file</p>
&lt;script src="https://saturnlang.github.io/code.js"&gt;cookies.cookiesEnabled();&lt;/script&gt;
<p>in a JavaScript file</p>
<div>var script = document.createElement("script");</div>
<div>script.src = "https://saturnlang.github.io/code.js";</div>
<div>document.body.appendChild(script);</div>
<div>cookies.cookiesEnabled();</div>
