// deposit section
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function() {
    // deposit input
    const depositInput = document.getElementById('deposit-input');
    // deposit amount
    const depositAmount = document.getElementById('deposit-balance');
    // adding deposit amount
    const convertedDepositInput = parseFloat(depositInput.value);
    const convertedDepositAmount = parseFloat(depositAmount.innerText);
    depositAmount.innerText = convertedDepositAmount + convertedDepositInput;
    depositInput.value = '';
});

// withdraw section
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function() {
    // withdraw input
    const withdrawInput = document.getElementById('withdraw-input');

    // withdraw amount
    const withdrawAmount = document.getElementById('withdraw-balance');
    // adding withdraw amount
    const convertedWithdrawInput = parseFloat(withdrawInput.value);
    const convertedWithdrawAmount = parseFloat(withdrawAmount.innerText);
    const mainBalance = document.getElementById('main-balance');
    const convertedMainBalance = parseFloat(mainBalance.innerText);
    if(convertedMainBalance >= convertedWithdrawInput) {
        withdrawAmount.innerText = convertedWithdrawInput + convertedWithdrawAmount;
    } else {
        alert("Balance is less than the amount");
    }
    withdrawInput.value = '';
});