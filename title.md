<p>how to change/create a title</p>

<p>in an html file</p>
<h6>&lt;script src="https://saturnlang.github.io/saturnlang/code.js"&gt;title = "your title";</h6> 
<h7>document.title = title;&lt;/script&gt;</h7>

<p>in a JavaScript file</p>
<p>var script = document.createElement("script");</p>
<p>script.src = "https://saturnlang.github.io/saturnlang/code.js";</p>
<p>document.body.appendChild(script);</p>
<p>title = "your title";</p>
<p>document.title = title;</p>
<hr/>
<p>next tutorial</p>
<a href="element.html">create elements</a>
<hr/>
