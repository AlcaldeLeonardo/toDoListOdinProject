export function removeModalController(modal) {
  document.querySelector(".modalContainer").style.display = "none";
  modal.remove();
}
