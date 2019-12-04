<script>
  function openNewsletterWindow() {
    window.open(
      "https://tinyletter.com/JesseSkinner",
      "popupwindow",
      "scrollbars=yes,width=800,height=600"
    );
  }
</script>

<style>
  form {
    text-align: center;
  }
  form input {
    font-size: 120%;
  }
</style>

<form
  action="https://tinyletter.com/JesseSkinner"
  method="post"
  target="popupwindow"
  on:submit={openNewsletterWindow}>
  <p>Interested in web development? Subscribe to my newsletter!</p>
  <input type="hidden" value="1" name="embed" />
  <input
    name="email"
    placeholder="jesse@example.com"
    aria-label="Email address" />
  <input type="submit" value="Subscribe" />
</form>
