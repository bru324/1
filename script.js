const numeroWhats = "5544998104219";

const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

function abrirWhats(mensagem) {
  const texto = encodeURIComponent(mensagem);
  const link = `https://wa.me/${numeroWhats}?text=${texto}`;
  window.open(link, "_blank");
}
554499601672
