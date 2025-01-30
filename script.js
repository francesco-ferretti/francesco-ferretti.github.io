// Array di parole e descrizioni
const paroleDelGiorno = [
    { parola: "Serendipità", descrizione: "La capacità di fare scoperte fortunate per puro caso." },
    { parola: "Inesauribile", descrizione: "Che non può essere esaurito." },
    { parola: "Iperbole", descrizione: "Figura retorica che consiste nell’esagerare una qualità o un fatto." },
    { parola: "Sublime", descrizione: "Ciò che suscita ammirazione o meraviglia per la sua grande bellezza o perfezione." },
    { parola: "Pusillanime", descrizione: "Persona che manca di coraggio, timorosa o codarda." },
    { parola: "Melancolia", descrizione: "Stato d’animo di tristezza profonda e indefinita." },
    { parola: "Fulgido", descrizione: "Che brilla con luce intensa, splendente." },
    { parola: "Recondito", descrizione: "Nascosto, misterioso." },
    { parola: "Allegoria", descrizione: "Figura retorica che usa una narrazione simbolica per rappresentare un concetto astratto." },
    { parola: "Empireo", descrizione: "In filosofia antica, il cielo più alto e puro, dove risiedono gli dei." },
    { parola: "Ineluttabile", descrizione: "Che non può essere evitato, inevitabile." },
    { parola: "Venustà", descrizione: "Bellezza che risplende in modo raffinato." },
    { parola: "Evanescente", descrizione: "Che scompare progressivamente, che sfuma senza lasciare traccia." },
    { parola: "Alacrità", descrizione: "Prontezza nel rispondere o nell’agire." },
    { parola: "Perniciosa", descrizione: "Dannosa, pericolosa, in grado di causare danni gravi." },
    { parola: "Caduco", descrizione: "Che è destinato a perire, effimero." },
    { parola: "Dulcinea", descrizione: "Nome ideale, romantico, che richiama il concetto di amore perfetto." },
    { parola: "Cenotafio", descrizione: "Monumento funebre eretto in memoria di una persona defunta, ma senza il corpo." },
    { parola: "Ineffabile", descrizione: "Che non può essere descritto a parole, indescrivibile." },
    { parola: "Arcanum", descrizione: "Mistero profondo, segreto." },
    { parola: "Serafico", descrizione: "Relativo agli angeli serafini, puro e angelico." },
    { parola: "Luculento", descrizione: "Ricco, abbondante, opulento." },
    { parola: "Nefando", descrizione: "Che è talmente vile o riprovevole da essere indicibile." },
    { parola: "Dionisiaco", descrizione: "Relativo al dio Dionisio, che simboleggia l’ebrezza e l’entusiasmo." },
    { parola: "Eudemonia", descrizione: "Felicità o benessere, spesso inteso come stato di vita virtuosa." },
    { parola: "Fulgore", descrizione: "Luminosa intensità di luce, splendore." },
    { parola: "Ambrosia", descrizione: "Cibo o bevanda che, secondo la mitologia, dava immortalità agli dèi." },

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
// Funzione per ottenere il countdown fino al prossimo giorno
function startCountdown() {
    const oggi = new Date();
    const prossimoGiorno = new Date(oggi);
    prossimoGiorno.setDate(oggi.getDate() + 1); // Imposta la data al giorno successivo

    const intervallo = setInterval(function() {
        const oraAttuale = new Date();
        const differenza = prossimoGiorno - oraAttuale;

        if (differenza <= 0) {
            clearInterval(intervallo);
            document.getElementById("countdown").textContent = "La nuova parola è pronta!";
        } else {
            const ore = Math.floor(differenza / (1000 * 60 * 60));
            const minuti = Math.floor((differenza % (1000 * 60 * 60)) / (1000 * 60));
            const secondi = Math.floor((differenza % (1000 * 60)) / 1000);
            document.getElementById("countdown").textContent = `Prossima parola in: ${ore}h ${minuti}m ${secondi}s`;
        }
    }, 1000);
}

// Esegui la funzione al caricamento del documento
document.addEventListener("DOMContentLoaded", function() {
    getParolaDelGiorno();
    startCountdown();
});
