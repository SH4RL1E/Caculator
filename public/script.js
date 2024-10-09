function appendToDisplay(value) {
    const display = document.getElementById('result');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function calculate() {
    const display = document.getElementById('result');
    display.value = "I miss you!!";
    playAudio();
}

function playAudio() {
    const audio = document.getElementById('audio');
    audio.play();
}
