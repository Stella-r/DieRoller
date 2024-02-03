const div = document.querySelector('#dice');
const img = document.querySelector('#dice img');

div.addEventListener('click', () => {
    const Loops = 10;
    let LoopCount = 0;

    const rollDice = () => {
        const rnumber = Math.ceil(Math.random() * 6);
        img.src = '/images/' + rnumber + '.png';

        LoopCount++;

        if (LoopCount === Loops) {
            clearInterval(rollingInterval);
        }
    };

    const rollingInterval = setInterval(rollDice, 120);
});
