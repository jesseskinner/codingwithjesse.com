<?php

$tabs = array("Home", "Work", "School", "Garden", "Pub");
$tab_content = array(
    "There's no place like Home.",
    "All work and no play makes me a dull boy.",
    "School's out for summer!",
    "InAGaddaDaVida!",
    "Cheers to the beers!"
);

$tab = $tabs[0];
$content = $tab_content[0];

if (isset($_GET['tab'])) {
    $tab = $_GET['tab'];
    $index = array_search($tab, $tabs);
    if ($index === false) {
        echo "404 - page not found";
        die;
    }
    $content = $tab_content[$index];
}

if (isset($_GET['ajax'])) {
    echo $content;
    die;
}

?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<title>Ajax Tabs Demo</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script type="text/javascript">//<!--
function addEvent( obj, type, fn )
{
	if (obj.addEventListener)
		obj.addEventListener( type, fn, false );
	else if (obj.attachEvent)
	{
		obj["e"+type+fn] = fn;
		obj[type+fn] = function() { obj["e"+type+fn]( window.event ); }
		obj.attachEvent( "on"+type, obj[type+fn] );
	}
}

function httpRequest(url, callback) {
    var httpObj = false;
    if (typeof XMLHttpRequest != 'undefined') {
        httpObj = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        try{
            httpObj = new ActiveXObject('Msxml2.XMLHTTP');
        } catch(e) {
            try{
                httpObj = new ActiveXObject('iMicrosoft.XMLHTTP');
            } catch(e) {}
        }
    }
    if (!httpObj) return;

    httpObj.onreadystatechange = function() {
        if (httpObj.readyState == 4) { // when request is complete
            callback(httpObj.responseText);
        }
    };
    httpObj.open('GET', url, true);
    httpObj.send(null);
}

function setText(text) {
    document.getElementsByTagName('p')[0].innerHTML = text;
}

function addLinkEvent(link){
    addEvent(link, 'click', function(e) {
        var tabs = document.getElementsByTagName('li');
        for (var i=0;i < tabs.length;i++) {
            tabs[i].className = '';
        }
        link.parentNode.className = 'active';

        setText('Loading...');
        httpRequest(link.href + '&ajax=1', setText);
        
        e = e || window.event;
        if (e.preventDefault) e.preventDefault();
        e.returnValue = false;
    });
}

addEvent(window, 'load', function() {
    var links = document.getElementsByTagName('a');
    for (var i=0;i < links.length;i++) {
        var link = links[i];
        addLinkEvent(link);
    }

});
//-->
</script>
<style type="text/css">
body {
    margin: 70px;
}
* {
    margin: 0;
    padding: 0;
}
li {
    list-style: none;
    float: left;
    padding: 5px 10px;
    border: 1px solid black;
    border-bottom: 0;
}
p {
    clear: both;
    width: 400px;
    height: 150px;
    border: 1px solid black;
    line-height: 100px;
    padding-left: 50px;
}
.active {
    background: yellow;
}
</style>
</head>
<body>

<ul>
<?php for ($i=0;$i < sizeof($tabs);$i++): ?>
   <li<?php
      if ($tabs[$i] == $tab) echo ' class="active"';
   ?>><a href="?tab=<?= $tabs[$i] ?>"><?= $tabs[$i] ?></a></li>
<?php endfor; ?>
</ul>
<p><?= $content ?></p>

</body>
</html>
