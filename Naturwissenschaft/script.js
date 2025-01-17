document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener('click', () => {
            const paragraph = box.querySelector('p');
            if (paragraph.style.display === 'none' || paragraph.style.display === '') {
                paragraph.style.display = 'block';
                box.style.backgroundColor = 'red';
            } else {
                paragraph.style.display = 'none';
                box.style.backgroundColor = '#FFD700';

            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Array mit gültigen Wetterarten
    const weatherTypes = [
        "Sonne", "Regen", "Schnee", "Wind", "Nebel", "Hagel", "Sturm", 
        "Gewitter", "Blitz", "Donner", "Wolken", "Regenbogen", "Hitze", 
        "Kälte", "Eis", "Frost", "Schneesturm", "Sommerregen", "Platzregen", 
        "Sprühregen", "Dunst", "Schauer", "Wetterleuchten", "Wolkenbruch", 
        "Hochdruck", "Tiefdruck", "Heißluft", "Frühlingswind", "Sommerhitze", 
        "Herbststurm", "Winterkälte", "Morgennebel", "Abendrot", "Polarlicht", 
        "Schleierwolken", "Föhn", "Kaltfront", "Warmfront", "Hitzewelle", 
        "Kühlung", "Eiszapfen", "Wolkenhimmel", "Tropenregen", "Monsun", 
        "Wirbelsturm", "Orkan", "Sandsturm", "Tau", "Schmelzwasser", 
        "Eisregen"
    ];
    
    
    // Elemente aus dem DOM holen
    const input = document.getElementById('weatherInput');
    const button = document.getElementById('submitWeather');
    const result = document.getElementById('result');

    // Event-Listener für den Button
    button.addEventListener('click', () => {
        const userInput = input.value.trim(); // Benutzereingabe holen und trimmen
        if (weatherTypes.includes(userInput)) {
            result.textContent = `✅ "${userInput}" ist korrekt!`;
            result.style.color = 'green';
        } else {
            result.textContent = `❌ "${userInput}" ist nicht korrekt. Versuche es erneut!`;
            result.style.color = 'red';
        }
        input.value = ''; // Eingabefeld zurücksetzen
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Button und Erde-Umlaufbahn-Element auswählen
    const toggleButton = document.getElementById('toggle-earth-orbit');
    const earthOrbit = document.querySelector('.earth-orbit');
    earthOrbit.classList.add('show-earth-orbit'); // Direkt hinzufügen
console.log(earthOrbit.classList); // Prüfen, ob die Klasse nun existiert


    // Debug-Ausgaben, um sicherzustellen, dass die Elemente gefunden wurden
    if (!toggleButton) {
        console.error("Der Button mit der ID 'toggle-earth-orbit' wurde nicht gefunden.");
        return;
    }

    if (!earthOrbit) {
        console.error("Das Element mit der Klasse 'earth-orbit' wurde nicht gefunden.");
        return;
    }

    // Event-Listener für den Button hinzufügen
    toggleButton.addEventListener('click', () => {
        // Klasse 'show-earth-orbit' ein- oder ausblenden
        if (earthOrbit.classList.contains('show-earth-orbit')) {
            earthOrbit.classList.remove('show-earth-orbit'); // Umlaufbahn ausblenden
            toggleButton.textContent = 'Umlaufbahn anzeigen'; // Button-Text ändern
        } else {
            earthOrbit.classList.add('show-earth-orbit'); // Umlaufbahn anzeigen
            toggleButton.textContent = 'Umlaufbahn ausblenden'; // Button-Text ändern
        }

        // Debug-Ausgabe, um den aktuellen Status der Klassen zu prüfen
        console.log(`Aktuelle Klassen für earth-orbit: ${earthOrbit.classList}`);
    });
});


// Warten, bis der DOM geladen ist
document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitQuiz'); // Button holen
    const correctAnswers = {
        q1: 'q1b', // Richtig: Mars
        q2: 'q2a', // Richtig: Eine Drehung der Erde um die Sonne
        q3: 'q3a'  // Richtig: Der Mond ist zwischen Erde und Sonne
    };

    // Event-Listener für den Button
    submitButton.addEventListener('click', () => {
        let score = 0; // Punktestand
        let totalQuestions = Object.keys(correctAnswers).length; // Anzahl der Fragen

        // Jede Frage überprüfen
        for (let question in correctAnswers) {
            const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`); // Ausgewählte Antwort
            if (selectedAnswer && selectedAnswer.id === correctAnswers[question]) {
                score++; // Richtige Antwort
            }
        }

        // Ergebnis anzeigen
        alert(`Du hast ${score} von ${totalQuestions} Fragen richtig beantwortet!`);
    });
});

