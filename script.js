const users = [
    user1 = {name1:"Warood Junaid", balance:10000},
    user2 = {name2:"Hafsa Anwar", balance: 7000},
    user3 = {name3:"Maimoona Saleem", balance: 5000},
    user4 = {name4:"Areeba Akram", balance: 10000}
]


let currentBalance = 10000; 

function validatePin() {
  const pin = document.getElementById('pinInput').value;

  if (pin === '1234') { 
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
  } else {
    alert('Invalid PIN. Please try again.');
  }
}

function withdrawAmount() {
  const amount = parseInt(document.getElementById('amountSelect').value, 10);

  if (amount > currentBalance) {
    alert('Insufficient balance! Please select a smaller amount.');
  } else {
    currentBalance -= amount; 
    document.getElementById('step2').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('resultMessage').innerText = 'Transaction successful! You have withdrawn ₹${amount}.';
    document.getElementById('remainingBalance').innerText = currentBalance;
  }
}

function resetATM() {
  document.getElementById('pinInput').value = '';
  document.getElementById('step1').style.display = 'block';
  document.getElementById('step2').style.display = 'none';
  document.getElementById('result').style.display = 'none';
  document.getElementById('currentBalance').innerText = currentBalance;
}