/**
 * WinBox.js v0.2.5 (Bundle)
 * Copyright 2022 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/winbox
 */
 (function(){'use strict';var e,aa=document.createElement("style");aa.innerHTML="@keyframes wb-fade-in{0%{opacity:0}to{opacity:.85}}.winbox{position:fixed;left:0;top:0;background:#0050ff;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);transition:width .3s,height .3s,left .3s,top .3s;transition-timing-function:cubic-bezier(.3,1,.3,1);contain:layout size;text-align:left;touch-action:none}.wb-body,.wb-header{position:absolute;left:0}.wb-header{top:0;width:100%;height:35px;line-height:35px;color:#fff;overflow:hidden;z-index:1}.wb-body{top:35px;right:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;will-change:contents;background:#fff;margin-top:0!important;contain:strict;z-index:0}.wb-control *,.wb-icon{background-repeat:no-repeat}body>.wb-body{position:relative;display:inline-block;visibility:hidden;contain:none}.wb-drag{height:100%;padding-left:10px;cursor:move}.wb-title{font-family:Arial,sans-serif;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wb-icon{display:none;width:20px;height:100%;margin:-1px 8px 0-3px;float:left;background-size:100%;background-position:center}.wb-e,.wb-w{width:10px;top:0}.wb-n,.wb-s{left:0;height:10px;position:absolute}.wb-n{top:-5px;right:0;cursor:n-resize;z-index:2}.wb-e{position:absolute;right:-5px;bottom:0;cursor:w-resize;z-index:2}.wb-s{bottom:-5px;right:0;cursor:n-resize;z-index:2}.wb-nw,.wb-sw,.wb-w{left:-5px}.wb-w{position:absolute;bottom:0;cursor:w-resize;z-index:2}.wb-ne,.wb-nw,.wb-sw{width:15px;height:15px;z-index:2;position:absolute}.wb-nw{top:-5px;cursor:nw-resize}.wb-ne,.wb-sw{cursor:ne-resize}.wb-ne{top:-5px;right:-5px}.wb-se,.wb-sw{bottom:-5px}.wb-se{position:absolute;right:-5px;width:15px;height:15px;cursor:nw-resize;z-index:2}.wb-control{float:right;height:100%;max-width:100%;text-align:center}.wb-control *{display:inline-block;width:30px;height:100%;max-width:100%;background-position:center;cursor:pointer}.no-close .wb-close,.no-full .wb-full,.no-header .wb-header,.no-max .wb-max,.no-min .wb-min,.no-resize .wb-body~div,.wb-body .wb-hide,.wb-show,.winbox.hide,.winbox.min .wb-body>*,.winbox.min .wb-full,.winbox.min .wb-min,.winbox.modal .wb-full,.winbox.modal .wb-max,.winbox.modal .wb-min{display:none}.winbox.max .wb-drag,.winbox.min .wb-drag{cursor:default}.wb-min{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOCAwaDdhMSAxIDAgMCAxIDAgMkgxYTEgMSAwIDAgMSAwLTJoN3oiLz48L3N2Zz4=);background-size:14px auto;background-position:center calc(50% + 6px)}.wb-max{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHBhdGggZD0iTTIwIDcxLjMxMUMxNS4zNCA2OS42NyAxMiA2NS4yMyAxMiA2MFYyMGMwLTYuNjMgNS4zNy0xMiAxMi0xMmg0MGM1LjIzIDAgOS42NyAzLjM0IDExLjMxMSA4SDI0Yy0yLjIxIDAtNCAxLjc5LTQgNHY1MS4zMTF6Ii8+PHBhdGggZD0iTTkyIDc2VjM2YzAtNi42My01LjM3LTEyLTEyLTEySDQwYy02LjYzIDAtMTIgNS4zNy0xMiAxMnY0MGMwIDYuNjMgNS4zNyAxMiAxMiAxMmg0MGM2LjYzIDAgMTItNS4zNyAxMi0xMnptLTUyIDRjLTIuMjEgMC00LTEuNzktNC00VjM2YzAtMi4yMSAxLjc5LTQgNC00aDQwYzIuMjEgMCA0IDEuNzkgNCA0djQwYzAgMi4yMS0xLjc5IDQtNCA0SDQweiIvPjwvc3ZnPg==);background-size:17px auto}.wb-close{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDE4IDE4Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMS42MTMuMjEuMDk0LjA4M0w4IDYuNTg1IDE0LjI5My4yOTNsLjA5NC0uMDgzYTEgMSAwIDAgMSAxLjQwMyAxLjQwM2wtLjA4My4wOTRMOS40MTUgOGw2LjI5MiA2LjI5M2ExIDEgMCAwIDEtMS4zMiAxLjQ5N2wtLjA5NC0uMDgzTDggOS40MTVsLTYuMjkzIDYuMjkyLS4wOTQuMDgzQTEgMSAwIDAgMSAuMjEgMTQuMzg3bC4wODMtLjA5NEw2LjU4NSA4IC4yOTMgMS43MDdBMSAxIDAgMCAxIDEuNjEzLjIxeiIvPjwvc3ZnPg==);background-size:15px auto;background-position:5px center}.wb-full{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOCAzSDVhMiAyIDAgMCAwLTIgMnYzbTE4IDBWNWEyIDIgMCAwIDAtMi0yaC0zbTAgMThoM2EyIDIgMCAwIDAgMi0ydi0zTTMgMTZ2M2EyIDIgMCAwIDAgMiAyaDMiLz48L3N2Zz4=);background-size:16px auto}.winbox.max .wb-body~div,.winbox.min .wb-body~div,.winbox.modal .wb-body~div,.winbox.modal .wb-drag,body.wb-lock iframe{pointer-events:none}.winbox.max{box-shadow:none}.winbox.max .wb-body{margin:0!important}.winbox iframe{position:absolute;width:100%;height:100%;border:0}body.wb-lock .winbox{will-change:left,top,width,height;transition:none}.winbox.modal:before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:inherit;border-radius:inherit}.winbox.modal:after{content:'';position:absolute;top:-50vh;left:-50vw;right:-50vw;bottom:-50vh;background:#0d1117;animation:wb-fade-in .2s ease-out forwards;z-index:-1}.no-animation{transition:none}.no-shadow{box-shadow:none}.no-header .wb-body{top:0}.no-move:not(.min) .wb-title{pointer-events:none}.wb-body .wb-show{display:revert}";
 var k=document.getElementsByTagName("head")[0];k.firstChild?k.insertBefore(aa,k.firstChild):k.appendChild(aa);var ba=document.createElement("div");ba.innerHTML="<div class=wb-header><div class=wb-control><span class=wb-min></span><span class=wb-max></span><span class=wb-full></span><span class=wb-close></span></div><div class=wb-drag><div class=wb-icon></div><div class=wb-title></div></div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div>";function l(a,b,c){a&&a.addEventListener(b,c,!1)}function r(a,b){var c=window;c&&c.removeEventListener(a,b,!1)}function v(a){a.stopPropagation();a.cancelable&&a.preventDefault()}function w(a,b,c){c=""+c;a["_s_"+b]!==c&&(a.style.setProperty(b,c),a["_s_"+b]=c)};var x=[],y,ca=0,A=10,B,I,J,da,K,O;
 function T(a,b){if(!(this instanceof T))return new T(a);y||fa();var c,f,d,m;if(a){if(b){var g=a;a=b}if("string"===typeof a)g=a;else{var F=a.id;var u=a.index;var P=a.root;var h=a.template;g=g||a.title;var t=a.icon;var z=a.mount;var G=a.html;var W=a.url;var C=a.width;var D=a.height;var E=a.minwidth;var q=a.minheight;var n=a.maxwidth;var p=a.maxheight;var H=a.autosize;var ja=a.min;var ka=a.max;var la=a.hidden;(d=a.modal)&&(c=f="center");c=a.x||c;f=a.y||f;var L=a.top;var M=a.left;var Q=a.bottom;var R=
 a.right;var ea=a.background;var N=a.border;var S=a.header;var X=a["class"];var ma=a.onclose;var na=a.onfocus;var oa=a.onblur;var pa=a.onmove;var qa=a.onresize;var ra=a.onfullscreen;var sa=a.onmaximize;var ta=a.onminimize;var ua=a.onrestore;var va=a.onhide;var wa=a.onshow;var xa=a.onload}}this.g=(h||ba).cloneNode(!0);this.g.id=this.id=F||"winbox-"+ ++ca;this.g.className="winbox"+(X?" "+("string"===typeof X?X:X.join(" ")):"")+(d?" modal":"");this.g.winbox=this;this.window=this.g;this.body=this.g.getElementsByClassName("wb-body")[0];
 this.h=S||35;ea&&this.setBackground(ea);N?w(this.body,"margin",N+(isNaN(N)?"":"px")):N=0;S&&(b=this.g.getElementsByClassName("wb-header")[0],w(b,"height",S+"px"),w(b,"line-height",S+"px"),w(this.body,"top",S+"px"));g&&this.setTitle(g);t&&this.setIcon(t);z?this.mount(z):G?this.body.innerHTML=G:W&&this.setUrl(W,xa);L=L?U(L,O):0;Q=Q?U(Q,O):0;M=M?U(M,K):0;R=R?U(R,K):0;g=K-M-R;t=O-L-Q;n=n?U(n,g):g;p=p?U(p,t):t;E=E?U(E,n):150;q=q?U(q,p):this.h;H?((P||y).appendChild(this.body),C=Math.max(Math.min(this.body.clientWidth+
 2*N+1,n),E),D=Math.max(Math.min(this.body.clientHeight+this.h+N+1,p),q),this.g.appendChild(this.body)):(C=C?U(C,n):Math.max(n/2,E)|0,D=D?U(D,p):Math.max(p/2,q)|0);c=c?U(c,g,C):M;f=f?U(f,t,D):L;this.x=c;this.y=f;this.width=C;this.height=D;this.o=E;this.m=q;this.l=n;this.j=p;this.top=L;this.right=R;this.bottom=Q;this.left=M;this.index=u;this.focused=this.hidden=this.full=this.max=this.min=!1;this.onclose=ma;this.onfocus=na;this.onblur=oa;this.onmove=pa;this.onresize=qa;this.onfullscreen=ra;this.onmaximize=
 sa;this.onminimize=ta;this.onrestore=ua;this.onhide=va;this.onshow=wa;ka?this.maximize():ja?this.minimize():this.resize().move();if(la)this.hide();else if(this.focus(),u||0===u)this.index=u,w(this.g,"z-index",u),u>A&&(A=u);ha(this);(P||y).appendChild(this.g);(m=a.oncreate)&&m.call(this,a)}T["new"]=function(a){return new T(a)};
 function U(a,b,c){"string"===typeof a&&("center"===a?a=(b-c)/2|0:"right"===a||"bottom"===a?a=b-c:(c=parseFloat(a),a="%"===(""+c!==a&&a.substring((""+c).length))?b/100*c|0:c));return a}function fa(){y=document.body;y[J="requestFullscreen"]||y[J="msRequestFullscreen"]||y[J="webkitRequestFullscreen"]||y[J="mozRequestFullscreen"]||(J="");da=J&&J.replace("request","exit").replace("mozRequest","mozCancel").replace("Request","Exit");l(window,"resize",function(){ia();ya()});ia()}
 function ha(a){V(a,"drag");V(a,"n");V(a,"s");V(a,"w");V(a,"e");V(a,"nw");V(a,"ne");V(a,"se");V(a,"sw");l(a.g.getElementsByClassName("wb-min")[0],"click",function(b){v(b);a.min?a.focus().restore():a.blur().minimize()});l(a.g.getElementsByClassName("wb-max")[0],"click",function(){a.max?a.restore():a.maximize()});J?l(a.g.getElementsByClassName("wb-full")[0],"click",function(){a.fullscreen()}):a.addClass("no-full");l(a.g.getElementsByClassName("wb-close")[0],"click",function(b){v(b);a.close()||(a=null)});
 l(a.g,"click",function(){a.focus()})}function Y(a){x.splice(x.indexOf(a),1);ya();a.removeClass("min");a.min=!1;a.g.title=""}function ya(){for(var a=x.length,b={},c={},f=0,d;f<a;f++)d=x[f],d=(d.left||d.right)+":"+(d.top||d.bottom),c[d]?c[d]++:(b[d]=0,c[d]=1);f=0;for(var m,g;f<a;f++)d=x[f],m=(d.left||d.right)+":"+(d.top||d.bottom),g=Math.min((K-d.left-d.right)/c[m],250),d.resize(g+1|0,d.h,!0).move(d.left+b[m]*g|0,O-d.bottom-d.h,!0),b[m]++}
 function V(a,b){function c(h){v(h);a.focus();if("drag"===b){if(a.min){a.restore();return}var t=Date.now(),z=t-P;P=t;if(300>z){a.max?a.restore():a.maximize();return}}a.max||a.min||(y.classList.add("wb-lock"),(g=h.touches)&&(g=g[0])?(h=g,l(window,"touchmove",f),l(window,"touchend",d)):(l(window,"mousemove",f),l(window,"mouseup",d)),F=h.pageX,u=h.pageY)}function f(h){v(h);g&&(h=h.touches[0]);var t=h.pageX;h=h.pageY;var z=t-F,G=h-u,W=a.width,C=a.height,D=a.x,E=a.y,q;if("drag"===b){a.x+=z;a.y+=G;var n=
 q=1}else{if("e"===b||"se"===b||"ne"===b){a.width+=z;var p=1}else if("w"===b||"sw"===b||"nw"===b)a.x+=z,a.width-=z,n=p=1;if("s"===b||"se"===b||"sw"===b){a.height+=G;var H=1}else if("n"===b||"ne"===b||"nw"===b)a.y+=G,a.height-=G,q=H=1}p&&(a.width=Math.max(Math.min(a.width,a.l,K-a.x-a.right),a.o),p=a.width!==W);H&&(a.height=Math.max(Math.min(a.height,a.j,O-a.y-a.bottom),a.m),H=a.height!==C);(p||H)&&a.resize();n&&(a.x=Math.max(Math.min(a.x,K-a.width-a.right),a.left),n=a.x!==D);q&&(a.y=Math.max(Math.min(a.y,
 O-a.height-a.bottom),a.top),q=a.y!==E);(n||q)&&a.move();if(p||n)F=t;if(H||q)u=h}function d(h){v(h);y.classList.remove("wb-lock");g?(r("touchmove",f),r("touchend",d)):(r("mousemove",f),r("mouseup",d))}var m=a.g.getElementsByClassName("wb-"+b)[0];if(m){var g,F,u,P=0;l(m,"mousedown",c);l(m,"touchstart",c)}}function ia(){var a=document.documentElement;K=a.clientWidth;O=a.clientHeight}e=T.prototype;
 e.mount=function(a){this.unmount();a.i||(a.i=a.parentNode);this.body.textContent="";this.body.appendChild(a);return this};e.unmount=function(a){var b=this.body.firstChild;if(b){var c=a||b.i;c&&c.appendChild(b);b.i=a}return this};e.setTitle=function(a){var b=this.g.getElementsByClassName("wb-title")[0];a=this.title=a;var c=b.firstChild;c?c.nodeValue=a:b.textContent=a;return this};
 e.setIcon=function(a){var b=this.g.getElementsByClassName("wb-icon")[0];w(b,"background-image","url("+a+")");w(b,"display","inline-block");return this};e.setBackground=function(a){w(this.g,"background",a);return this};e.setUrl=function(a,b){var c=this.body.firstChild;c&&"iframe"===c.tagName.toLowerCase()?c.src=a:(this.body.innerHTML='<iframe src="'+a+'"></iframe>',b&&(this.body.firstChild.onload=b));return this};
 e.focus=function(a){if(!1===a)return this.blur();I!==this&&this.g&&(I&&I.blur(),w(this.g,"z-index",++A),this.index=A,this.addClass("focus"),I=this,this.focused=!0,this.onfocus&&this.onfocus());return this};e.blur=function(a){if(!1===a)return this.focus();I===this&&(this.removeClass("focus"),this.focused=!1,this.onblur&&this.onblur(),I=null);return this};e.hide=function(a){if(!1===a)return this.show();if(!this.hidden)return this.onhide&&this.onhide(),this.hidden=!0,this.addClass("hide")};
 e.show=function(a){if(!1===a)return this.hide();if(this.hidden)return this.onshow&&this.onshow(),this.hidden=!1,this.removeClass("hide")};e.minimize=function(a){if(!1===a)return this.restore();B&&Z();this.max&&(this.removeClass("max"),this.max=!1);this.min||(x.push(this),ya(),this.g.title=this.title,this.addClass("min"),this.min=!0,this.onminimize&&this.onminimize());return this};
 e.restore=function(){B&&Z();this.min&&(Y(this),this.resize().move(),this.onrestore&&this.onrestore());this.max&&(this.max=!1,this.removeClass("max").resize().move(),this.onrestore&&this.onrestore());return this};e.maximize=function(a){if(!1===a)return this.restore();B&&Z();this.min&&Y(this);this.max||(this.addClass("max").resize(K-this.left-this.right,O-this.top-this.bottom,!0).move(this.left,this.top,!0),this.max=!0,this.onmaximize&&this.onmaximize());return this};
 e.fullscreen=function(a){this.min&&(Y(this),this.resize().move());if(!B||!Z())this.body[J](),B=this,this.full=!0,this.onfullscreen&&this.onfullscreen();else if(!1===a)return this.restore();return this};function Z(){B.full=!1;if(document.fullscreen||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)return document[da](),!0}
 e.close=function(a){if(this.onclose&&this.onclose(a))return!0;this.min&&Y(this);this.unmount();this.g.remove();this.g.textContent="";this.g=this.body=this.g.winbox=null;I===this&&(I=null)};e.move=function(a,b,c){a||0===a?c||(this.x=a?a=U(a,K-this.left-this.right,this.width):0,this.y=b?b=U(b,O-this.top-this.bottom,this.height):0):(a=this.x,b=this.y);w(this.g,"left",a+"px");w(this.g,"top",b+"px");this.onmove&&this.onmove(a,b);return this};
 e.resize=function(a,b,c){a||0===a?c||(this.width=a?a=U(a,this.l):0,this.height=b?b=U(b,this.j):0,a=Math.max(a,this.o),b=Math.max(b,this.m)):(a=this.width,b=this.height);w(this.g,"width",a+"px");w(this.g,"height",b+"px");this.onresize&&this.onresize(a,b);return this};
 e.addControl=function(a){var b=a["class"],c=a.image,f=a.click;a=a.index;var d=document.createElement("span"),m=this.g.getElementsByClassName("wb-control")[0],g=this;b&&(d.className=b);c&&w(d,"background-image","url("+c+")");f&&(d.onclick=function(F){f.call(this,F,g)});m.insertBefore(d,m.childNodes[a||0]);return this};e.removeControl=function(a){(a=this.g.getElementsByClassName(a)[0])&&a.remove();return this};e.addClass=function(a){this.g.classList.add(a);return this};
 e.removeClass=function(a){this.g.classList.remove(a);return this};e.toggleClass=function(a){return this.g.classList.contains(a)?this.removeClass(a):this.addClass(a)};window.WinBox=T;}).call(this);