
const textDisplay = document.getElementById('textDisplay');
const changeTextBtn = document.getElementById('changeTextBtn');

changeTextBtn.addEventListener('click', () => {

  textDisplay.textContent = ' ボタンをクリックしました';
});
