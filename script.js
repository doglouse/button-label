(function () {
  var DEFAULT_LABEL = "Start Live Webinar";
  var toggle = document.getElementById("custom-label-toggle");
  var input = document.getElementById("button-label");
  var hint = document.getElementById("button-label-hint");
  var boxIcon = document.querySelector(".checkbox__box i");
  var cta = document.getElementById("email-cta");

  function renderCta() {
    var v = input.value.trim();
    cta.textContent = toggle.checked && v ? v : DEFAULT_LABEL;
  }

  toggle.addEventListener("change", function () {
    var on = toggle.checked;
    input.disabled = !on;
    boxIcon.className = "mdi " + (on ? "mdi-checkbox-marked" : "mdi-checkbox-blank-outline");
    hint.textContent = on
      ? "Replaces the template’s default button text."
      : "Check “Custom button label” to edit. The button uses the template’s default label.";
    if (on) input.focus();
    renderCta();
  });

  input.addEventListener("input", renderCta);

  // Static toolbar icons for the two rich-text editors
  var icons = ["undo", "redo", "format-quote-close", "link-variant", "format-underline", "format-strikethrough", "format-italic", "format-bold", "format-align-left", "format-list-bulleted", "format-list-numbered", "minus", "format-indent-increase"];
  document.querySelectorAll(".editor__toolbar").forEach(function (bar) {
    bar.innerHTML = icons.map(function (i) { return '<span><i class="mdi mdi-' + i + '"></i></span>'; }).join("");
  });

  renderCta();
})();
