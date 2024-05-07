function addHiddenInput(value) {
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.value = value;
    form.appendChild(input);
  });
}

function isSMTP() {
  console.log("Using isSMTP()");
  addHiddenInput("smtp");
}

function isMail() {
  console.log("Using isMail()");
  addHiddenInput("mail");
}
