import { githubclick, linkedinclick, porfolioclick } from "./teste.js";

console.log("index.js carregado");

document.addEventListener("DOMContentLoaded", () => {
  const redesSociaisSection = document.getElementById("redes-sociais");
  if (redesSociaisSection) {
    redesSociaisSection.addEventListener("click", (event) => {
      switch (event.target.id) {
        case "portfolio":
          porfolioclick();
          break;

        case "github":
          githubclick();
          break;

        case "linkedin":
          linkedinclick();
          break;

        default:
          break;
      }
    });
  }
});
