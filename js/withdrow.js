document.getElementById('btn-withdrow').addEventListener('click',function(){
    const newWithdrowAmount = parseFloat(document.getElementById('withdrow-input').value);
       document.getElementById('withdrow-input').value ="";

    if(isNaN(newWithdrowAmount)){
        alert("Please valid input")
        return;
    }

    const previousWithdrow = parseFloat(document.getElementById('withdrow-total').innerText);
   
    const previousBalance = parseFloat(document.getElementById('balance-total').innerText);
  

        if(newWithdrowAmount > previousBalance){
        alert("bap ar bank ato taka nai");
        return;
    }

     
    const totalWithdrow = newWithdrowAmount + previousWithdrow;

    document.getElementById('withdrow-total').innerText = totalWithdrow;
    

    const currentBalance = previousBalance - newWithdrowAmount;

    document.getElementById('balance-total').innerText = currentBalance;

})