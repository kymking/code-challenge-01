const userInput = prompt("Unatuma Ngapi? (KES):");

const amountToSend = Number(userInput);

function estimateTransactionFee(amountToSend) {
  const feePercentage = 0.015;
  const minFee = 10;
  const maxFee = 70;

  let calculatedFee = amountToSend * feePercentage;
  if (calculatedFee < minFee) {
    calculatedFee = minFee;
  } else if (calculatedFee > maxFee) {
    calculatedFee = maxFee;
  }

  const totalDebited = amountToSend + calculatedFee;

  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${calculatedFee}`);
  console.log(`Total amount to be debited: KES ${totalDebited}`);
  console.log(`Money Sent Securely!`);
}

if (!isNaN(amountToSend) && amountToSend > 0) {
  estimateTransactionFee(amountToSend);
} else {
  console.log("Please Enter Valid Amount.");
}