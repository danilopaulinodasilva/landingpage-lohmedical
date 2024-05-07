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
