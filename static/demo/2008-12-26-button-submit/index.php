<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<title>buttons with or without type="submit"</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<style type="text/css">
h1 { font-size: 150%; }
</style>
</head>
<body>

<? if (count($_POST)): ?>
<p style="border:1px solid #0f0;padding: 20px;">Form submitted with <?= stripslashes(htmlentities($_POST['which'])) ?></p>
<? endif; ?>

<h1>&lt;button type="submit"&gt;Submit&lt;/button&gt;</h1>

<form action="index.php" method="post"><p>
<input type="hidden" name="which" value='&lt;button type="submit"&gt;Submit&lt;/button&gt;'/>
<label><input type="radio" checked="checked"></label>
<button type="submit">Submit</button>
</p></form>

<h1>&lt;button&gt;Submit&lt;/button&gt;</h1>

<form action="index.php" method="post"><p>
<input type="hidden" name="which" value="&lt;button&gt;Submit&lt;/button&gt;"/>
<label><input type="radio" checked="checked"></label>
<button>Submit</button>
</p></form>

</body>
</html>