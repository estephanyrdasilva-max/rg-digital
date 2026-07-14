(() => {
  const $ = (id) => document.getElementById(id);

  const idCard = $("idCardExample");
  const flipBtn = $("flipBtn");
  const downloadBtn = $("downloadBtn");

  function toggleFlip() {
    idCard.classList.toggle("is-flipped");
  }
  flipBtn.addEventListener("click", toggleFlip);
  idCard.addEventListener("click", toggleFlip);

  downloadBtn.addEventListener("click", () => {
    const wasFlipped = idCard.classList.contains("is-flipped");
    const img = idCard.querySelector(
      wasFlipped ? ".id-card__back img" : ".id-card__front img"
    );

    const link = document.createElement("a");
    link.download = wasFlipped ? "rg-digital-verso.png" : "rg-digital-frente.png";
    link.href = img.src;
    link.click();
  });
})();
