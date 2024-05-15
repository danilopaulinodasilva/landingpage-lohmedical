function addUrlToInput() {
  var urlInputs = document.querySelectorAll('input[name="url"]');
  if (urlInputs) {
    urlInputs.forEach(function (input) {
      input.value = window.location.href;
    });
  }
}

addUrlToInput();
