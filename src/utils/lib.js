function addUrlToInput() {
  var urlInputs = document.querySelectorAll('input[name="url"]');
  if (urlInputs) {
    urlInputs.forEach(function (input) {
      console.log("Adding ", window.location.href);
      input.value = window.location.href;
    });
  }
}

addUrlToInput();
