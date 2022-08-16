document.getElementById('btn-deposit').addEventListener('click',function(){
     const depositField = document.getElementById('deposit-input');
     const newDepositValueString = depositField.value;
     const newDepositValue = parseFloat(newDepositValueString);
     const depositTotalElement = document.getElementById('deposit-total');
     const previousDepositTotalString = depositTotalElement.innerText;
     const previousDepositTotal = parseFloat(previousDepositTotalString);
    

     const currentDepositTotal = previousDepositTotal + newDepositValue;
      depositTotalElement.innerText = currentDepositTotal;

      const balanceTotalElement = document.getElementById('balance-total');
      const previousBalanceTotalString = balanceTotalElement.innerHTML;
      const previousBalancetOtal = parseFloat(previousBalanceTotalString);
      const balanceTotal = previousBalancetOtal + newDepositValue;
      balanceTotalElement.innerText = balanceTotal;


     depositField.value = "";

})