function clearSelected() {
    var selectedCells = document.querySelectorAll('.selected');
  
    for (var i = 0; i < selectedCells.length; i++) {
      selectedCells[i].classList.remove('selected');
      selectedCells[i].style.backgroundColor = 'goldenrod';
      selectedCells[i].style.transform = 'none';
    }
  }
  
  function submitNumbers() {
    var resultContainer = document.querySelector('#result-container');
    if (!resultContainer) {
      resultContainer = document.createElement('div');
      resultContainer.id = 'result-container';
      document.body.appendChild(resultContainer);
    }
  
    var selectedCells = document.querySelectorAll('.selected');
    var selectedNumbers = [];
    for (var i = 0; i < selectedCells.length; i++) {
      selectedNumbers.push(parseInt(selectedCells[i].innerHTML));
    }
  
    resultContainer.innerHTML = '';
  
    // Generating a random number between 1 and 50
    var randomNumber = Math.floor(Math.random() * 50) + 1;
  
    // Adjusting the generated number with 40% probability to be similar to the selected number
    if (Math.random() < 0.4) {
      var selectedNumber = selectedNumbers[Math.floor(Math.random() * selectedNumbers.length)];
      var additionalProbability = Math.floor((Math.random() * 10) + 1); // Additional probability range
      var shiftDirection = Math.random() < 0.5 ? -1 : 1; // Randomly shift up or down
      randomNumber = selectedNumber + shiftDirection * additionalProbability;
      // Ensuring the generated number is within the range of 1 to 50
      if (randomNumber < 1) {
        randomNumber = 1;
      } else if (randomNumber > 50) {
        randomNumber = 50;
      }
    }
  
    // Displaying the random number on the top right corner of the webpage
    var randomNumberDisplay = document.createElement('div');
    randomNumberDisplay.id = 'random-number';
    randomNumberDisplay.textContent = 'Random Number: ' + randomNumber;
    randomNumberDisplay.style.position = 'fixed';
    randomNumberDisplay.style.top = '20px';
    randomNumberDisplay.style.right = '20px';
    document.body.appendChild(randomNumberDisplay);
  
    // Checking if any of the selected numbers match the randomly generated number
    if (selectedNumbers.includes(randomNumber)) {
      var message = document.createElement('p');
      message.textContent = 'Congratulations, You Won!';
      message.style.color = 'green';
      message.style.fontSize = '24px';
      message.style.fontWeight = 'bold';
      message.style.textAlign = 'center';
      document.body.appendChild(message);
    }
  }
  
  var selectedCellCounter = 0;
  
  var cells = document.querySelectorAll('td');
  
  for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function() {
      if (selectedCellCounter === 3 && !this.classList.contains('selected')) {
        return;
      }
  
      if (this.classList.contains('selected')) {
        this.classList.remove('selected');
        this.style.backgroundColor = 'white';
        selectedCellCounter--;
      } else {
        this.classList.add('selected');
        this.style.backgroundColor = '#2055DA';
        selectedCellCounter++;
      }
    });
  }
  
  var submitButton = document.querySelector('button[onclick="submitNumbers()"]');
  
  clearButton.addEventListener('click', function() {
    clearSelected();
    selectedCellCounter = 0;
  });
  
  var submitButton = document.querySelector('button[onclick="submitNumbers()"]');
  
  submitButton.addEventListener('click', function() {
    submitNumbers();
  });