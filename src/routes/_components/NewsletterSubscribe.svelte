<script>
  function openNewsletterWindow() {
    window.open(
      "https://tinyletter.com/JesseSkinner",
      "popupwindow",
      "scrollbars=yes,width=800,height=600"
    );
  }
</script>

<form
  action="https://tinyletter.com/JesseSkinner"
  method="post"
  target="popupwindow"
  on:submit={openNewsletterWindow}>
  <input type="hidden" value="1" name="embed" />
  <input
    name="email"
    placeholder="you@example.com"
    aria-label="Email address" />
  <input type="submit" value="Subscribe" />
</form>
