const cakes = [
  "Screenshot 2026-11-11 211350.png",
  "Screenshot 2026-11-11 211426.png",
  "Screenshot 2026-11-11 211450.png",
  "Screenshot 2026-11-11 211506.png",
  "Screenshot 2026-11-11 211537.png",
  "Screenshot 2026-11-11 211600.png",
  "Screenshot 2026-11-11 211613.png",
  "Screenshot 2026-11-11 211629.png",
  "Screenshot 2026-11-11 211701.png",
  "Screenshot 2026-11-11 211718.png",
  "Screenshot 2026-11-11 211742.png",
];
let cakeIndex = 3;
const heroCake = document.querySelector("#heroCake");
document.querySelector("#spin").addEventListener("click", () => {
  cakeIndex = (cakeIndex + 1) % cakes.length;
  heroCake.animate(
    [
      { transform: "rotate(0) scale(1)" },
      { transform: "rotate(360deg) scale(0)" },
    ],
    { duration: 350 },
  );
  setTimeout(() => {
    heroCake.src = `../assets/${cakes[cakeIndex]}`;
    heroCake.animate(
      [
        { transform: "rotate(-360deg) scale(0)" },
        { transform: "rotate(0) scale(1)" },
      ],
      { duration: 350 },
    );
  }, 350);
});
document.body.insertAdjacentHTML(
  "beforeend",
  `<section class="flavour-bar"><p>LA COLECCIÓN COMPLETA — TOCA UN PASTEL PARA HACERLO LA ESTRELLA</p><div class="cake-gallery">${cakes.map((image, i) => `<button data-image="${image}"><img src="../assets/${image}" alt="Pastel de Dayi's Sweet ${i + 1}"></button>`).join("")}</div></section><dialog><button class="close">×</button><b>¿LISTA PARA CELEBRAR?</b><p>Nos encantará hacer tu ocasión aún más dulce en Miami.</p><a href="https://www.instagram.com/cakes_bydayi/" target="_blank">ORDENA POR INSTAGRAM ↗</a></dialog>`,
);
document.querySelectorAll(".cake-gallery button").forEach((button) =>
  button.addEventListener("click", () => {
    heroCake.src = `../assets/${button.dataset.image}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }),
);
document
  .querySelector("header b")
  .addEventListener("click", () =>
    document.querySelector("dialog").showModal(),
  );
document
  .querySelector(".close")
  .addEventListener("click", () => document.querySelector("dialog").close());
