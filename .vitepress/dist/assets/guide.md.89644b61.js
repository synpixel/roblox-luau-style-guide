import{_ as s,o as a,c as l,U as n}from"./chunks/framework.76b79cb5.js";const F=JSON.parse('{"title":"Roblox Luau Style Guide","description":"","frontmatter":{},"headers":[],"relativePath":"guide.md","filePath":"guide.md"}'),e={name:"guide.md"},o=n(`<h1 id="roblox-luau-style-guide" tabindex="-1">Roblox Luau Style Guide <a class="header-anchor" href="#roblox-luau-style-guide" aria-label="Permalink to &quot;Roblox Luau Style Guide&quot;">​</a></h1><p>This style guide aims to provide best practices for writing Luau code in Roblox.</p><h2 id="file-structure" tabindex="-1">File Structure <a class="header-anchor" href="#file-structure" aria-label="Permalink to &quot;File Structure&quot;">​</a></h2><p>Files should consist of these things (if present) in order:</p><h3 id="nocheck" tabindex="-1">nocheck <a class="header-anchor" href="#nocheck" aria-label="Permalink to &quot;nocheck&quot;">​</a></h3><p>We first need to enable nocheck, this will greatly enhance the performance of the code &amp; editor</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">--!nocheck</span></span></code></pre></div><h3 id="services" tabindex="-1">Services <a class="header-anchor" href="#services" aria-label="Permalink to &quot;Services&quot;">​</a></h3><p>Then, we create a table to hold our services</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">tSERVICES</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">{REP_STO</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">game.</span><span style="color:#FFCB6B;">ReplicatedStorage</span><span style="color:#A6ACCD;">,PLA</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">game.</span><span style="color:#FFCB6B;">Players</span><span style="color:#A6ACCD;">,WOR</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">game.</span><span style="color:#FFCB6B;">Workspace</span><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>The service names should contain the first 3 letters of every word, with each word being separated with <code>_</code>.</p><h3 id="constants" tabindex="-1">Constants <a class="header-anchor" href="#constants" aria-label="Permalink to &quot;Constants&quot;">​</a></h3><p>Next, we need to create a table containing all the constants.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">tCONSTANTS</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">{FAV_NUM</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">7</span><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>We apply the same naming scheme as services.</p><h3 id="module-table" tabindex="-1"><code>module</code> table <a class="header-anchor" href="#module-table" aria-label="Permalink to &quot;\`module\` table&quot;">​</a></h3><p>Next, we create the <code>module</code> table, <strong>only if we are creating a module</strong>, MODULES SHOULD BE AVOIDED AS THEY ARE BAD.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">tmodule</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">{}</span></span></code></pre></div><h3 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h3><p>Next, we must define the functions inside of the module.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">tmodule</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">_CRT_BAZ</span><span style="color:#89DDFF;">()</span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">[[</span><span style="color:#C3E88D;">Baz!!</span><span style="color:#89DDFF;">]]</span><span style="color:#89DDFF;font-style:italic;">end</span></span></code></pre></div><h3 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h3><p>Next, we define our <strong>global</strong> variables (local variables are longer to type out, stop wasting your time and write more code).</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">tmodule</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello world</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><h3 id="a-return-statement" tabindex="-1">A return statement <a class="header-anchor" href="#a-return-statement" aria-label="Permalink to &quot;A return statement&quot;">​</a></h3><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> tmodule</span></span></code></pre></div><h2 id="naming" tabindex="-1">Naming <a class="header-anchor" href="#naming" aria-label="Permalink to &quot;Naming&quot;">​</a></h2><ul><li>Favor using <a href="https://en.wikipedia.org/wiki/Hungarian_notation" target="_blank" rel="noreferrer">hungarion notation</a> for identifiers. To do so, prepend the first letter of your value&#39;s datatype to its identifier.</li><li>Use abbreviations everywhere! They make code faster to write.</li><li>Use LOUD_SNAKE_CASE for constants or enum-like objects.</li><li>Use _SYN_CASE for functions.</li><li>Use snake_case for modules of any type (restrict the use of modules, still).</li><li>Use PascalCase for everything else</li></ul><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p>Using comments makes your code more readable, because you can explain what your code does, not that reading your code matters much.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">--table module for car</span></span>
<span class="line"><span style="color:#A6ACCD;">tmodule</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">{};</span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">tmodule</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">_CRT_CAR</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">pos</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;">{name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">[[</span><span style="color:#C3E88D;">car</span><span style="color:#89DDFF;">]]</span><span style="color:#A6ACCD;">,pos</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">pos}</span><span style="color:#89DDFF;font-style:italic;">end</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">--function that create car</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">--return table module</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> tmodule</span></span></code></pre></div><h2 id="typechecking" tabindex="-1">Typechecking <a class="header-anchor" href="#typechecking" aria-label="Permalink to &quot;Typechecking&quot;">​</a></h2><p>Typechecking is another &quot;industry standard&quot; that just makes the process of writing your code longer. Why do you need typechecking? Just be competent enough not to make silly mistakes.</p><p>Fortunately, using global variables prevents you from using typechecking, so that should not be an issue.</p><h2 id="nesting" tabindex="-1">Nesting <a class="header-anchor" href="#nesting" aria-label="Permalink to &quot;Nesting&quot;">​</a></h2><p>While keywords such as <code>and</code> and <code>or</code> let you write code faster, it also reduces the amount of code. The length of your file is what defines its quality, so nest as much as possible.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">--check bCondition</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> bCondition </span><span style="color:#89DDFF;font-style:italic;">then</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">--check bOrCondition</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> bOrCondition </span><span style="color:#89DDFF;font-style:italic;">then</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">[[</span><span style="color:#C3E88D;">bOrCondition was truthy!</span><span style="color:#89DDFF;">]]</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">end</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">--print &quot;bOrCondition was truthy!&quot; if bOrCondition is truthy</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">--check bCondition2</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> bCondition2 </span><span style="color:#89DDFF;font-style:italic;">then</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">--check bCondition3</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> bCondition3 </span><span style="color:#89DDFF;font-style:italic;">then</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">--check bCondition4</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> bCondition4 </span><span style="color:#89DDFF;font-style:italic;">then</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">[[</span><span style="color:#C3E88D;">All conditions are truthy!</span><span style="color:#89DDFF;">]]</span><span style="color:#89DDFF;font-style:italic;">end</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">--print &quot;All conditions are truthy!&quot; if all conditions are truthy</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span></span></code></pre></div><h2 id="general-whitespace" tabindex="-1">General Whitespace <a class="header-anchor" href="#general-whitespace" aria-label="Permalink to &quot;General Whitespace&quot;">​</a></h2><ul><li>Never add spaces where you are able not to add one, it makes your code faster to write.</li></ul><p><strong>Good:</strong></p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">na</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">132</span></span>
<span class="line"><span style="color:#A6ACCD;">nb</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">17</span></span></code></pre></div><p><strong>Bad:</strong></p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">na </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">132</span></span>
<span class="line"><span style="color:#A6ACCD;">nb </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">17</span></span></code></pre></div><ul><li><p><strong>Never indent. It makes your code longer.</strong></p></li><li><p>Whitespace at the end of lines does not matter.</p><ul><li>Disable your editor&#39;s auto-trimming function if you can!</li></ul></li><li><p>Never add a newline at the end of the file.</p></li><li><p>No vertical alignment!</p><ul><li>You can&#39;t use vertical alignment if you use the least amount of spaces possible.</li></ul></li><li><p>Use the most amount of statements per line.</p></li></ul><p><strong>Good:</strong></p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_FROB</span><span style="color:#89DDFF;">()</span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">[[</span><span style="color:#C3E88D;">Hello world</span><span style="color:#89DDFF;">]]</span><span style="color:#89DDFF;font-style:italic;">end</span><span style="color:#A6ACCD;">;</span><span style="color:#82AAFF;">_FROB</span><span style="color:#A6ACCD;">();</span><span style="color:#82AAFF;">_FROB</span><span style="color:#A6ACCD;">()</span></span></code></pre></div><p><strong>Bad:</strong></p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_FROB</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">[[</span><span style="color:#C3E88D;">Hello world</span><span style="color:#89DDFF;">]]</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span></span>
<span class="line"><span style="color:#82AAFF;">_FROB</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#82AAFF;">_FROB</span><span style="color:#A6ACCD;">()</span></span></code></pre></div><ul><li>Never use empty lines to break down your code, again: easier to write.</li></ul><p><strong>Good:</strong></p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_GRGL</span><span style="color:#89DDFF;">()</span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">[[</span><span style="color:#C3E88D;">Hello world</span><span style="color:#89DDFF;">]]</span><span style="color:#89DDFF;font-style:italic;">end</span><span style="color:#A6ACCD;">;</span><span style="color:#82AAFF;">_GRGL</span><span style="color:#A6ACCD;">();</span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_GBL</span><span style="color:#89DDFF;">()</span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">[[</span><span style="color:#C3E88D;">Bye world</span><span style="color:#89DDFF;">]]</span><span style="color:#89DDFF;font-style:italic;">end</span><span style="color:#A6ACCD;">;</span><span style="color:#82AAFF;">_GBL</span><span style="color:#A6ACCD;">();</span><span style="color:#82AAFF;">_GBL</span><span style="color:#A6ACCD;">()</span></span></code></pre></div><p><strong>Bad:</strong></p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_GRGL</span><span style="color:#89DDFF;">()</span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">[[</span><span style="color:#C3E88D;">Hello world</span><span style="color:#89DDFF;">]]</span><span style="color:#89DDFF;font-style:italic;">end</span><span style="color:#A6ACCD;">;</span><span style="color:#82AAFF;">_GRGL</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_GBL</span><span style="color:#89DDFF;">()</span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">[[</span><span style="color:#C3E88D;">Bye world</span><span style="color:#89DDFF;">]]</span><span style="color:#89DDFF;font-style:italic;">end</span><span style="color:#A6ACCD;">;</span><span style="color:#82AAFF;">_GBL</span><span style="color:#A6ACCD;">();</span><span style="color:#82AAFF;">_GRGL</span><span style="color:#A6ACCD;">()</span></span></code></pre></div><h2 id="blocks" tabindex="-1">Blocks <a class="header-anchor" href="#blocks" aria-label="Permalink to &quot;Blocks&quot;">​</a></h2><ul><li>Use parentheses around the conditions in if, while, or repeat blocks. They aren&#39;t necessary in Luau, but it makes your code more idiomatic.</li></ul><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> bCondition </span><span style="color:#89DDFF;font-style:italic;">then</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">end</span><span style="color:#A6ACCD;">;</span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> bCondition </span><span style="color:#89DDFF;font-style:italic;">do</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">end</span><span style="color:#A6ACCD;">;</span><span style="color:#89DDFF;font-style:italic;">repeat</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">until</span><span style="color:#A6ACCD;"> bCondition</span></span></code></pre></div><ul><li>Don&#39;t use <code>do</code> blocks to limit the scope of a variable, just append a random sequence of characters after your identifier so you can&#39;t shadow it!</li></ul><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">na </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span></span>
<span class="line"><span style="color:#A6ACCD;">naiubu34N </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span></span></code></pre></div><h2 id="literals" tabindex="-1">Literals <a class="header-anchor" href="#literals" aria-label="Permalink to &quot;Literals&quot;">​</a></h2><ul><li>Use brackets when declaring string literals. <ul><li>It makes using double quotes in your string easier.</li><li>Empty strings are easier to identify with brackets.</li></ul></li></ul><p><strong>Good:</strong></p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">[[</span><span style="color:#C3E88D;">Hello world</span><span style="color:#89DDFF;">]]</span></span></code></pre></div><p><strong>Bad:</strong></p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello world</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello world</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><h2 id="tables" tabindex="-1">Tables <a class="header-anchor" href="#tables" aria-label="Permalink to &quot;Tables&quot;">​</a></h2><ul><li>Tables with both list-like and dictionary-like keys are ok. <ul><li>Iterating over these <em>mixed</em> tables was made easy with <a href="https://luau-lang.org/syntax#generalized-iteration" target="_blank" rel="noreferrer">generalized iteration</a>.</li></ul></li></ul><h2 id="functions-1" tabindex="-1">Functions <a class="header-anchor" href="#functions-1" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><ul><li>Add as much arguments to a given function as needed to support every use case</li></ul><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_PRNT_HLLO_WRLD</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">ShldExpldBsplt</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">DoStf</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">BusNt</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">DoMrStuff</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">Rcrsv</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">PrntHllo</span><span style="color:#89DDFF;">)</span><span style="color:#676E95;font-style:italic;">--[[...]]</span><span style="color:#89DDFF;font-style:italic;">end</span></span></code></pre></div><ul><li>Never use parentheses for function calls</li></ul><p><strong>Good:</strong></p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">[[</span><span style="color:#C3E88D;">Hello world</span><span style="color:#89DDFF;">]]</span></span></code></pre></div><p><strong>Bad:</strong></p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">[[</span><span style="color:#C3E88D;">Hello world</span><span style="color:#89DDFF;">]]</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="comments-1" tabindex="-1">Comments <a class="header-anchor" href="#comments-1" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><ul><li>Favor using section comments, they make sections easier to spot:</li></ul><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">--functions</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_HLLO_WORLD</span><span style="color:#89DDFF;">()</span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">[[</span><span style="color:#C3E88D;">Hello world</span><span style="color:#89DDFF;">]]</span><span style="color:#89DDFF;font-style:italic;">end</span><span style="color:#A6ACCD;">;</span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_PRNT_NUM</span><span style="color:#89DDFF;">()</span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">((</span><span style="color:#89DDFF;">[[</span><span style="color:#C3E88D;">%s</span><span style="color:#89DDFF;">]]</span><span style="color:#A6ACCD;">):</span><span style="color:#82AAFF;">format</span><span style="color:#A6ACCD;">(na))</span><span style="color:#89DDFF;font-style:italic;">end</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">--variables</span></span>
<span class="line"><span style="color:#A6ACCD;">na</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">4</span></span></code></pre></div>`,77),t=[o];function p(c,i,r,y,D,d){return a(),l("div",null,t)}const C=s(e,[["render",p]]);export{F as __pageData,C as default};
