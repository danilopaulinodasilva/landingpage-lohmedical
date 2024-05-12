var exampleModal = document.getElementById("exampleModal");
exampleModal.addEventListener("show.bs.modal", function (event) {
  // Botão que acionou o modal
  var button = event.relatedTarget;
  // Extrair informações dos atributos data-bs-*
  var titleData = button.getAttribute("data-bs-title");
  // Atualizar o conteúdo do modal
  var modalTitle = exampleModal.querySelector(".modal-title");
  modalTitle.textContent = "Solicitando orçamento para " + titleData;
  // Atualizasr o input hidden do modal
  var modalInput = exampleModal.querySelector("#modeloOrcamento");
  modalInput.value = titleData;
});

// var btnStartWhatsappModal = document.getElementById("startWhatsappModal");
// var nomeWhatsappModal = document.getElementById("nomeWhatsappModal").value;

// btnStartWhatsappModal.addEventListener("click", function (event) {
//   event.preventDefault();

//   var mensagem = `Olá, me chamo ${nomeWhatsappModal} gostaria de mais informações`;
//   var url =
//     "https://api.whatsapp.com/send?phone=5511999999999&text=" +
//     encodeURIComponent(mensagem);
//   window.open(url, "_blank");
// });

// // Adicione um evento de clique ao botão de fechar do segundo modal
// document
//   .querySelector("#whatsappModal .close")
//   .addEventListener("click", function () {
//     var outroModal = document.getElementById("whatsappModal");
//     outroModal.classList.remove("show");
//     document.body.classList.remove("modal-open");
//     outroModal.removeAttribute("aria-modal");
//     outroModal.previousElementSibling.focus();
//   });
