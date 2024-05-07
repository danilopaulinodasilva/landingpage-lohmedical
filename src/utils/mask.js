function applyPhoneMask() {
  const phoneInputs = document.querySelectorAll(".telefone-input");
  phoneInputs.forEach((input) => {
    input.addEventListener("input", function (e) {
      var rawDigits = e.target.value.replace(/\D/g, "");
      var formattedNumber;

      if (rawDigits.length <= 10) {
        // Formato (99) 9999-9999
        formattedNumber = rawDigits.match(/(\d{0,2})(\d{0,4})(\d{0,4})/);
      } else {
        // Formato (99) 99999-9999
        formattedNumber = rawDigits.match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
      }

      if (formattedNumber) {
        e.target.value = formattedNumber[1] ? "(" + formattedNumber[1] : "";
        if (formattedNumber[2]) {
          e.target.value += ") " + formattedNumber[2];
        }
        if (formattedNumber[3]) {
          e.target.value += "-" + formattedNumber[3];
        }
      }
    });
  });
}

// Chamar a função no carregamento da página para garantir que todos os inputs sejam cobertos
document.addEventListener("DOMContentLoaded", applyPhoneMask);
