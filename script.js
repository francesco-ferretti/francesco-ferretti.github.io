// Array di parole e descrizioni
const paroleDelGiorno = [
    { parola: "Serendipità", descrizione: "La capacità di fare scoperte fortunate per puro caso." },
    { parola: "Epifania", descrizione: "Una manifestazione improvvisa di una verità fondamentale." },
    { parola: "Inesauribile", descrizione: "Che non può essere esaurito." },
    // Aggiungi altre parole qui...
];

// Funzione per ottenere la parola del giorno
function getParolaDelGiorno() {
    // Calcola il giorno dell'anno (0-364)
    const oggi = new Date();
    const giornoDellAnno = oggi.getDay(); // Usa .getDate() se vuoi un numero da 1 a 31 per ogni mese

    // Seleziona una parola in base al giorno dell'anno
    const parola = paroleDelGiorno[giornoDellAnno % paroleDelGiorno.length];

    // Inserisce la parola e la descrizione nel DOM
    document.getElementById("parola").textContent = parola.parola;
    document.getElementById("descrizione").textContent = parola.descrizione;
}

// Esegui la funzione quando il documento è pronto
document.addEventListener("DOMContentLoaded", getParolaDelGiorno);
