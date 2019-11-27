// Eolas patent fix by Jesse Skinner (www.thefutureoftheweb.com)
if (document.getElementsByTagName && document.body.outerHTML) {
    var tags = ['object','embed','applet'];
    for (var i in tags) {
        var objs = document.getElementsByTagName(tags[i]);
        for (var j=0;j < objs.length;j++) {
            var obj = objs.item(j);
            var params = obj.getElementsByTagName('param');
            var inner = '';
            if (params.length && !/<param/i.test(obj.innerHTML))
                for (var x=0;x < params.length;x++)
                    inner += params.item(x).outerHTML;
            obj.outerHTML = obj.outerHTML.replace('>', '>' + inner);
        }
    }
}