// step:01
document.getElementById('btn-withdraw').addEventListener('click',function(){
      // step:02
      const withdrawField = document.getElementById('withdraw-field');
      const newWithdrawAmountStr= withdrawField.value;
      const newWithdrawAmount= parseFloat(newWithdrawAmountStr);
      if(isNaN(newWithdrawAmount)){
            alert('please giv me a valid number')
            return
      }
      // step:03
      const withdrawTotalElement= document.getElementById('withdraw-total');
      const previousWithdrawTotalStr = withdrawTotalElement.innerText;
      const previousWithdrawTotal = parseFloat(previousWithdrawTotalStr);
      
      // step:5
      const balanceTotalElement = document.getElementById('balance-total');
      const previousBalanceTotalStr =balanceTotalElement.innerText;
      const previousBalanceTotal=parseFloat(previousBalanceTotalStr)
      withdrawField.value = ''
      if(newWithdrawAmount > previousBalanceTotal){
            alert('Tor baper bank a ato taka nai')
            return
      }
      //step:4
      const currentWithdrawTotal = newWithdrawAmount +previousWithdrawTotal;
      withdrawTotalElement.innerText=currentWithdrawTotal
      
      // step:06
      const newBalanceTotal = previousBalanceTotal - currentWithdrawTotal;
      balanceTotalElement.innerText = newBalanceTotal;
      
      
})