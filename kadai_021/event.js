
document.getElementById('changeTextButton').addEventListener('click', function() {
    
    setTimeout(function() {
        
        document.getElementById('text').textContent = '2秒後の表示';
    }, 2000); 
