const btn = document.getElementById('btn');

const textElement = document.getElementById('text');


btn.addEventListener('click', function() {
   
    setTimeout(function() {
        textElement.textContent = 'ボタンをクリックしました';
    }, 2000); 
});
