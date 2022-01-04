<p>how to change/create a title</p>

<p>in an html file</p>
<h6>&lt;script src="https://saturnlang.github.io/saturnlang/code.js"&gt;title = "your title";</h6> 
<h7>document.title = title;&lt;/script&gt;</h7>

<p>in a JavaScript file</p>
<h1>var script = document.createElement("script");</h1>
<h2>script.src = "https://saturnlang.github.io/saturnlang/code.js";</h2>
<h3>document.body.appendChild(script);</h3>
<h4>title = "your title";</h4>
<h5>document.title = title;</h5>
