document.addEventListener('DOMContentLoaded', () => {
    const stopwatchDisplay = document.getElementById('stopwatch');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');

    let startTime;
    let elapsedTime = 0;
    let timerInterval;
    let running = false; // Flag para controlar se o cronômetro está rodando

    function formatTime(ms) {
        const totalMilliseconds = ms;
        const hours = Math.floor(totalMilliseconds / (1000 * 60 * 60));
        const minutes = Math.floor((totalMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((totalMilliseconds % (1000 * 60)) / 1000);
        const milliseconds = Math.floor((totalMilliseconds % 1000) / 10); // Duas casas para milissegundos

        return (
            String(hours).padStart(2, '0') + ':' +
            String(minutes).padStart(2, '0') + ':' +
            String(seconds).padStart(2, '0') + ':' +
            String(milliseconds).padStart(2, '0')
        );
    }

    function startStopwatch() {
        if (!running) {
            startTime = Date.now() - elapsedTime;
            timerInterval = setInterval(() => {
                elapsedTime = Date.now() - startTime;
                stopwatchDisplay.textContent = formatTime(elapsedTime);
            }, 10); // Atualiza a cada 10ms para os milissegundos

            running = true;
            startButton.setAttribute('disabled', 'true');
            stopButton.removeAttribute('disabled');
            resetButton.removeAttribute('disabled');
        }
    }

    function stopStopwatch() {
        if (running) {
            clearInterval(timerInterval);
            running = false;
            startButton.removeAttribute('disabled');
            stopButton.setAttribute('disabled', 'true');
        }
    }

    function resetStopwatch() {
        clearInterval(timerInterval);
        elapsedTime = 0;
        running = false;
        stopwatchDisplay.textContent = '00:00:00:00';
        startButton.removeAttribute('disabled');
        stopButton.setAttribute('disabled', 'true'); // Desabilita o Stop após o reset
        resetButton.setAttribute('disabled', 'true'); // Desabilita o Reset após o reset
    }

    // --- Adição de Event Listeners para Teclas ---
    document.addEventListener('keydown', (event) => {
        // console.log(event.code); // Útil para depuração para ver o código da tecla

        if (event.code === 'Space') { // Tecla Espaço
            event.preventDefault(); // Impede o comportamento padrão da tecla (ex: rolar a página)
            if (running) {
                stopStopwatch();
            } else {
                startStopwatch();
            }
        } else if (event.code === 'KeyZ') { // Tecla Z
            event.preventDefault(); // Impede o comportamento padrão da tecla
            resetStopwatch();
        }
    });

    // Adiciona os event listeners aos botões
    startButton.addEventListener('click', startStopwatch);
    stopButton.addEventListener('click', stopStopwatch);
    resetButton.addEventListener('click', resetStopwatch);

    // Inicializa o estado dos botões
    stopButton.setAttribute('disabled', 'true');
    resetButton.setAttribute('disabled', 'true');
});
