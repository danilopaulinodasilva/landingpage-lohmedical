var exampleModal = document.getElementById("exampleModal");
exampleModal.addEventListener("show.bs.modal", function (event) {
  // Botão que acionou o modal
  var button = event.relatedTarget;
  // Extrair informações dos atributos data-bs-*
  var titleData = button.getAttribute("data-bs-title");
  // Atualizar o conteúdo do modal
  var modalTitle = exampleModal.querySelector(".modal-title");
  modalTitle.textContent = "Solicitando orçamento para " + titleData;
  // Atualizar o input hidden do modal
  var modalInput = exampleModal.querySelector("#modeloOrcamento");
  modalInput.value = titleData;
  // Atualizar o input hidden page
  var pageInput = exampleModal.querySelector("#page");
  var pageDate = button.getAttribute("data-bs-page");
  pageInput.value = pageDate;
});

var whatsappModal = document.getElementById("whatsappModal");
whatsappModal.addEventListener("show.bs.modal", function (event) {
  console.log(event);
  // Atualizar o input hidden modelo
  var button = event.relatedTarget;
  var modeloInput = whatsappModal.querySelector("#modelo");
  var modeloData = button.getAttribute("data-bs-title");
  modeloInput.value = modeloData;
});
