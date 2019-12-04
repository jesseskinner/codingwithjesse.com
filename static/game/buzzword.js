/******************************************
 Buzzword Hell (c) 2006 Jesse Skinner
 
 http://www.thefutureoftheweb.com/blog/2006/2/buzzword-hellfire
 
 Of course, I don't mind if you see how I wrote this,
 but if you make a shitty rip-off version, I ask that
 you at least link back to my site. And if you want to
 make improvements, that's cool too. Just let me know
 so I can improve it here.
 
 Have fun, and play safe.
******************************************/
function addDOMLoadEvent(func) {
	if (!window.__load_events) {
		var init = function() {
			if (arguments.callee.done) return;
			arguments.callee.done = true;
			if (window.__load_timer) {
				clearInterval(window.__load_timer);
				window.__load_timer = null; /*@cc_on @*/ /*@if (@_win32) document.getElementById("__ie_onload").onreadystatechange = "";/*@end @*/
			}
			for (var i = 0; i < window.__load_events.length; i++) {
				window.__load_events[i]();
			}
			window.__load_events = null;
		};
		if (document.addEventListener) {
			document.addEventListener('DOMContentLoaded', init, false);
		}
		/*@cc_on @*/ /*@if (@_win32) document.write("<scr"+"ipt id=__ie_onload defer src=javascript:void(0)><\/scr"+"ipt>");var script=document.getElementById("__ie_onload");script.onreadystatechange=function(){if(this.readyState=="complete"){init()}};/*@end @*/ if (
			/WebKit/i.test(navigator.userAgent)
		) {
			window.__load_timer = setInterval(function() {
				if (/loaded|complete/.test(document.readyState)) {
					init();
				}
			}, 10);
		}
		window.onload = init;
		window.__load_events = [];
	}
	window.__load_events.push(func);
}

var words = new Array(
	'Web 2.0',
	'Tagging',
	'Mashup',
	'Blogosphere',
	'Folksonomy',
	'Social Software',
	'Conversation',
	'The Long Tail',
	'Radical Trust',
	'Less is More',
	'Meme',
	'Content Remixing',
	'Semantic Web',
	'Building to Flip',
	'Web as Platform',
	'Public Beta',
	'Social Web',
	'Rich User Experience',
	'AJAX',
	'Web 2.0'
);
var anim;
var x = 0;
var y = 0;
var xft = 0.4;
var yft = 0.3;
var lasttime;
var miss = 0;
var hit = 0;
var width = 10;
var height = 10;
var MAX_W = 430;
var MAX_H = 300;
var wordCount = 0;

addDOMLoadEvent(function() {
	var game = document.getElementById('game');
	game.removeChild(document.getElementById('message'));
	document.getElementById('hits').value = 0;
	document.getElementById('misses').value = 0;
	addPiece(words[wordCount++]);
	document.getElementById('game').onmousedown = function() {
		document.getElementById('misses').value = ++miss;
	};
	document.body.onselectstart = function() {
		return false;
	};
});

function addPiece(word) {
	var game = document.getElementById('game');
	var ex = document.getElementById('explode');
	var p = document.createElement('span');
	p.innerHTML = word;
	p.className = 'piece';
	game.appendChild(p);

	width = p.offsetWidth;
	height = p.offsetHeight;
	x = Math.floor(Math.random() * (MAX_W - width));
	y = Math.floor(Math.random() * (MAX_H - height));
	xft *= Math.random() < 0.5 ? 1 : -1;
	yft *= Math.random() < 0.5 ? 1 : -1;
	lasttime = new Date();

	p.onmousedown = function() {
		clearInterval(anim);
		// blow up animation
		p.className = 'blown';
		p.style.left = x + 'px';
		p.style.top = y + 'px';
		ex.style.top = p.offsetTop + (height - 150) / 2 + 'px';
		ex.style.left = p.offsetLeft + (width - 200) / 2 + 'px';
		setTimeout(function() {
			if (wordCount == words.length) {
				if (confirm('You have saved the world! Play again?')) {
					wordCount = 0;
					miss = 0;
					hit = 0;
					document.getElementById('hits').value = 0;
					document.getElementById('misses').value = 0;
				} else {
					return;
				}
			}
			ex.style.left = '-1000px';
			game.removeChild(p);
			addPiece(words[wordCount++]);
		}, 200);
		document.getElementById('hits').value = ++hit;
		document.getElementById('misses').value = --miss;
	};
	anim = setInterval(function() {
		var now = new Date();
		var elapsed = now - lasttime;
		var xf = xft * elapsed;
		var yf = yft * elapsed;
		lasttime = now;
		if (x + width + xf > MAX_W || x + xf < 0) {
			xft *= -1;
			xf *= -1;
		} else {
			xft *= Math.random() < 0.01 ? -1 : 1;
		}
		if (y + height + yf > MAX_H || y + yf < 0) {
			yft *= -1;
			yf *= -1;
		} else {
			yft *= Math.random() < 0.05 ? -1 : 1;
		}

		x = Math.min(Math.max(0, x + xf), MAX_W - width);
		y = Math.min(Math.max(0, y + yf), MAX_H - height);
		p.style.left = x + 'px';
		p.style.top = y + 'px';
	}, 12);
}
