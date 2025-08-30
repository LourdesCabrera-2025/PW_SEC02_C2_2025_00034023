
/**
 *  Programando el boton de modificación de columnas
 */

const modifyRowsBtn = document.querySelector(".option-2");
const wrapCards = document.querySelector(".wrap-cards");
const modifyTitleBtn = document.querySelector(".option-3");
const modifyTextTitle = document.querySelector(".navbar-brand");
const modifyParagraphBtn = document.querySelector(".option-1")
const modifyText = document.querySelector(".card-text-1");
const modifyText1 = document.querySelector(".card-text-2");
const modifyText2 = document.querySelector(".card-text-3");
/**
 * activamos el evento del boton
 */

modifyRowsBtn.addEventListener("click", () => {
    wrapCards.classList.toggle("single-column");
});

modifyTitleBtn.addEventListener("click", () => {
    modifyTextTitle.textContent = "HTML & CSS: Curso práctico avanzado"
})
modifyParagraphBtn.addEventListener("click", () => {
    modifyText.textContent = "Londres, capital del Reino Unido, combina historia y modernidad. Monumentos como el Big Ben y el Palacio de Buckingham conviven con museos, teatros y parques, ofreciendo cultura, entretenimiento y paisajes únicos.";
    modifyText1.textContent = "París, “La Ciudad de la Luz”, destaca por su arte, arquitectura y romanticismo. La Torre Eiffel, el Louvre y sus cafés crean un ambiente sofisticado que mezcla tradición y modernidad.";
    modifyText2.textContent = "Tokio, capital de Japón, une tecnología y tradición. Rascacielos futuristas conviven con templos antiguos y jardines zen, ofreciendo cultura, gastronomía y una vida urbana vibrante.";
})


//console.log(modifyRowsBtn);
