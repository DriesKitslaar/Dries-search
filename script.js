document.addEventListener('DOMContentLoaded', function () {
    // Controleer of console beschikbaar is
    if (typeof console === 'undefined') {
        window.console = {
            log: function () { }
        };
    }

    // Maak een nieuwe instance van JSConfetti
    const jsConfetti = new JSConfetti();

    // Selecteer de afbeelding met de CSS-klasse 'random-effect-image'
    const image = document.querySelector('.random-effect-image');

    if (image) {
        console.log('Image found:', image);

        // Functie om het confetti-effect toe te passen
        function applyConfettiEffect() {
            console.log('Image clicked');
            jsConfetti.addConfetti({
                emojis: ['🐱']
            });
            // Voeg visuele feedback toe
            image.classList.add('clicked');

            // Verwijder de visuele feedback na een korte tijd
            setTimeout(() => {
                image.classList.remove('clicked');
            }, 300); // De tijd in milliseconden dat de visuele feedback zichtbaar blijft
        }

        // Voeg een klik-event listener toe aan de afbeelding
        image.addEventListener('click', applyConfettiEffect);
    } else {
        console.log('Image not found');
    }
});