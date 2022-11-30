# Antischool
# please Star this repo if you use any of the bookmarklets and find them helpful

# iframe popup
a cool thing to help end internet censorship using iframes, can stop the schoolspyware from focusing you onto taps (hapara)
```js
javascript:var frame = document.createElement('iframe'); frame.src="[LINK HERE]"; frame.style.position="fixed"; frame.style.top="0%"; frame.style.right="0%";frame.style.height="100%";frame.style.width="100%"; frame.style.zIndex="100000"; document.body.appendChild(frame);
```
Replace [link here] with your link, made by me
# Tab Cloaker
```js
javascript:(function()%7B(function() %7B%0A    document.title %3D "Dashboard"%3B%0A    var link %3D document.querySelector("link%5Brel*%3D%27icon%27%5D") %7C%7C document.createElement(%27link%27)%3B%0A    link.type %3D %27image%2Fx-icon%27%3B%0A    link.rel %3D %27shortcut icon%27%3B%0A    link.href %3D %27https%3A%2F%2Faasd.instructure.com%2Ffavicon.ico%27%3B%0A    document.getElementsByTagName(%27head%27)%5B0%5D.appendChild(link)%3B%0A    alert(%27tab hidden! %27)%0A%7D)()%3B%7D)()%3B
```
this one cloaks as Canvas but you can always change it
# About:blank cloaker
 ```js
 javascript:(function(){let url = prompt("about:blank spoofer | what website do you want to spoof");win = window.open();win.document.body.style.margin = '0';win.document.body.style.height = '100vh';var iframe = win.document.createElement('iframe');iframe.style.border = 'none';iframe.style.width = '100%';iframe.style.height = '100%';iframe.style.margin = '0';iframe.src = url;win.document.body.appendChild(iframe);})();
 ```
 this script is very helpful and can bypass goguardian and hapara
# Golden Cookie Notify
```js
javascript:(function() {Game.LoadMod('https://kiraacorsac.github.io/GoldenCookieObserver/GoldenCookieObserver.js'); }());
```
this script is helpful and makes a little beep when a golden cookie pops up in cookie clicker!
# Inspect element/ xray
```js
javascript:function loadScript(scriptURL) %7B var scriptElem = document.createElement('SCRIPT'); scriptElem.setAttribute('language', 'JavaScript'); scriptElem.setAttribute('src', scriptURL); document.body.appendChild(scriptElem);%7DloadScript('http://westciv.com/xray/thexray.js');
```
this script is just inspect element (no console)
# Eval.js
```js
javascript:var s=document.createElement('script');s.type='text/javascript';s.src='https://sheeptester.github.io/javascripts/eval.js';document.body.appendChild(s);void(0);
```
its a javascript console, very useful
# Auto CLicker
```js
javascript:var DELAY = 1;var autoClickerStyleElement = document.createElement("style");autoClickerStyleElement.innerHTML="*{cursor: crosshair !important;}";document.body.appendChild(autoClickerStyleElement);function addClicker(e) {if(!e.isTrusted) {return;}if(e.target.classList.contains("auto-clicker-target")) {e.target.classList.remove("auto-clicker-target");} else {e.target.classList.add("auto-clicker-target");}document.body.removeChild(autoClickerStyleElement);document.body.removeEventListener("click", addClicker);e.preventDefault();autoClick(e.target);}function autoClick(element) {if(element.classList.contains("auto-clicker-target")) {element.click();setTimeout(function(){ autoClick(element); }, DELAY);}}document.bod
```
the name can explain itself
# Tab renamer
```js 
javascript:(function(){var title=prompt("New title?");document.title=title})();
```
allows you to rename tabs
# Script Remover
```js
 javascript:if(frames.length){alert('Sorry, doesn\'t work in frames.');}else{while((es=document.getElementsByTagName('script')).length){es[0].parentNode.removeChild(es[0]);}es=document.all;for(i=0;i<es.length;++i){e=es[i];for(p in e){if(!p.indexOf('on')&&e[p]){e[p]=null;}}}document.write(document.documentElement.outerHTML);document.close();onerror=function(){return true}}//4umi.com
 ```
 all it does is remove all active scripts you have
 # link highlighter
 ```js
 javascript:for(nIx5Bs=0;nIx5Bs<document.all.length;nIx5Bs++){if(document.all[nIx5Bs].tagName=='A'){with(document.all[nIx5Bs].style){if(backgroundColor=='yellow'){void(backgroundColor=document.bgColor)}else{void(backgroundColor='yellow')}}}}
 ```
 useful for dodging links
# LTBEEF 3kh0 Extension remover
```js
javascript:(function () {var a = document.createElement('script');a.src = 'https://cdn.jsdelivr.net/gh/FogNetwork/Ingot/ingot.min.js';document.body.appendChild(a);}())
```
this one is very very useful!
# Ingot AntiExt
```js
javascript:(function () {var a = document.createElement('script');a.src = 'https://cdn.jsdelivr.net/gh/FogNetwork/Ingot@latest/ingot.min.js';document.body.appendChild(a);}())
```
this is 3kh0s extension remover except with a better UI
# securly
```js
javascript:(function()%7Bconst loadScript %3D async(url) %3D> %7B%0A const response %3D await fetch(url)%0A const script %3D await response.text()%0A eval(script)%0A%7D%0A%0Aconst scriptUrl %3D "https%3A%2F%2Fraw.githubusercontent.com%2Fsecurlyunblocker%2FSU1%2Fmain%2Fmain.js"%0AloadScript(scriptUrl)%7D)()%3B
```
this is called securly unbl0cker and it has proxies and other very useful tools
# Avo
```js
javascript:(function () {var a = document.createElement('script');a.src = 'https://cdn.jsdelivr.net/gh/FogNetwork/Avo/avo.min.js';document.body.appendChild(a);}())
```
this is a lightweight bookmaarklet made by FogNetwork
