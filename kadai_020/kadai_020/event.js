
const textDisplay = document.getElementById('text');
const changeTextBtn = document.getElementById('Btn');

changeTextBtn.addEventListener('click', () => {

  textDisplay.textContent = ' ボタンをクリックしました';
});
