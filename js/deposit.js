document.getElementById('btn-deposit').addEventListener('click',function(){
      // step: 02
      const depositField= document.getElementById('deposit-field') 
      const newDepositAmountStr= depositField.value;
      const newDepositAmount = parseFloat(newDepositAmountStr)
      // step:03
      const depositTotalElement = document.getElementById('deposit-total')
      console.log(depositTotalElement);
      const previousDepositTotalStr = depositTotalElement.innerText;

      const previousDepositTotal = parseFloat(previousDepositTotalStr)
      // console.log(previousDepositTotal,'its result');
      // step:4 add number to set the total deposit 
      const currentDepositTotal = previousDepositTotal + newDepositAmount;
      depositTotalElement.innerText = currentDepositTotal
      // step:5 get balance current total 
      const balanceTotalElement = document.getElementById('balance-total');
      const previousBalanceTotalStr = balanceTotalElement.innerText;
      const previousBalanceTotal = parseFloat(previousBalanceTotalStr);
      // step:6 calculate current total balance 
      const currentBalanceTotal= previousBalanceTotal + newDepositAmount;
      balanceTotalElement.innerText=currentBalanceTotal
      depositField.value=''



})