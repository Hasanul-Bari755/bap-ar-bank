document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const emailValue = emailField.value;
    const passwordField = document.getElementById('user-password');
    const passwordValue = passwordField.value;

    if(emailValue === 'hasanulbari8@gmail.com' && passwordValue === '130085'){
        window.location.href = 'bank.html'
    }
    else{
        alert('Tui password vule gesos')
    }
})