const API = 'https://api.adviceslip.com/advice'

const adviceId = document.getElementById('adviceId');
const adviceText = document.getElementById('adviceText');
const adviceButton = document.getElementById('adviceButton');

function getAdvice() {

    fetch(API)
        .then(res => {
            if (!res.ok) {
                throw new Error('Error en la red');
            }
            return res.json();
        })
        .then(data => {
            const adviceData = data.slip;
            adviceId.textContent = `ADVICE #${adviceData.id}`;
            adviceText.textContent = `"${adviceData.advice}"`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

getAdvice();

adviceButton.addEventListener('click', getAdvice);