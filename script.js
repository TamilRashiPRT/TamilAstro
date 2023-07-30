function humanLifeCalc() {
    const name = document.getElementById('name').value;
    const dob = new Date(document.getElementById('dob').value);
    //const today = new Date();

    // Calculate age
   // const ageInMilliseconds = today - dob;
   // const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    const year = dob.getFullYear(); // 2023
    const month = dob.getMonth() + 1; // January is 0, so we add 1 to get the actual month (7)
    const day = dob.getDate(); // 26
    // const predictions = [
    //     { id: 1, name: 'Basic Finance' },
    //     { id: 2, name: 'Basic Sentiment' },
    //     { id: 3, name: 'Basic Intelligent' },
    //     { id: 4, name: 'Intermediate Finance' },
    //     { id: 5, name: 'Intermediate Sentiment' },
    //     { id: 6, name: 'Intermediate Intelligent' },
    //     { id: 7, name: 'Extreme Finance' },
    //     { id: 8, name: 'Extreme Sentiment' },
    //     { id: 9, name: 'Extreme Intelligent' },
    //     { id: 0, name: 'Superb Intelligent' }
    //   ];
    
    const predictions = [
        [1, 'Basic Finance'],
        [2, 'Basic Sentiment' ],
        [3, 'Basic Intelligent' ],
        [4, 'Intermediate Finance' ],
        [5, 'Intermediate Sentiment' ],
        [6, 'Intermediate Intelligent' ],
        [7, 'Extreme Finance' ],
        [8, 'Extreme Sentiment' ],
        [9, 'Extreme Intelligent' ],
        [0, 'Superb Intelligent' ]
      ];
    
    // Display the Current Age
    const age = calcAge(dob);
    const resultElement = document.getElementById('result');
    //resultElement.innerHTML = `${name}, you are approximately ${ageInYears.toFixed(2)} years old.`;
    resultElement.innerHTML = `${name}, you are approximately: ${age.years} years, ${age.months} months, and ${age.days} days`


    // Calculate Birth Number
    let sumOfDay = dateParser(day);
    if (sumOfDay >= 10) {
        sumOfDay = dateParser(sumOfDay);
    }
    const resultElement1 = document.getElementById('birthnum');
    resultElement1.innerHTML = `Birth Number ::${day} => ${sumOfDay}`;

    // Calculate Fate Number
    const fn = dateParser(day) + dateParser(month) + dateParser(year);
    let fateNumber = dateParser(day) + dateParser(month) + dateParser(year);
    if (fateNumber >= 10) {
        fateNumber = dateParser(fateNumber);
    }
    if (fateNumber >= 10) {
        fateNumber = dateParser(fateNumber);
    }
    const resultElement2 = document.getElementById('fatenum');
    resultElement2.innerHTML = `Fate number :: ${fn} => ${fateNumber}`;

    // Calculate Life Number
    const fnumsum=dateParser(fateNumber)
    const lifenum= lifeNUmPrediction(fnumsum, sumOfDay);
    const resultElement3 = document.getElementById('lifenum');
   // const value = findValueBasedOnCondition(myMap, (key, value) => key === lifenum);
    resultElement3.innerHTML = `Life number :: ${lifenum} `;
// } else {
//     console.log("Invalid date!");
//     resultElement.innerHTML = `Please provide/choose the valid date`
//   }
}

function dateParser(number) {
    let sum = 0;
    while (number) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }
    return sum;
  }

  function lifeNUmPrediction(fnumsum, sumOfDay) {

    // Find the highest and lowest values
    const highest = Math.max(fnumsum, sumOfDay);
    const lowest = Math.min(fnumsum, sumOfDay);
  
    // Calculate the difference
    const difference = highest - lowest;
  
    return difference;
  }

  function calcAge(dateOfBirth) {
    const today = new Date();
  
    const birthYear = dateOfBirth.getFullYear();
    const birthMonth = dateOfBirth.getMonth();
    const birthDay = dateOfBirth.getDate();
  
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();
  
    let ageYear = currentYear - birthYear;
    let ageMonth = currentMonth - birthMonth;
    let ageDay = currentDay - birthDay;
  
    // Adjust for negative ageMonth and ageDay
    if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
      ageYear -= 1;
      ageMonth += 12;
    }
    if (ageDay < 0) {
      ageMonth -= 1;
      const daysInLastMonth = new Date(
        currentYear,
        currentMonth,
        0
      ).getDate();
      ageDay += daysInLastMonth;
    }
  
    return { years: ageYear, months: ageMonth, days: ageDay };
  }
 

  function findValueBasedOnCondition(map, conditionFunction) {
    for (const [key, value] of map.entries()) {
      if (conditionFunction(key, value)) {
        return value;
      }
    }
    return undefined; // Return undefined if no matching value is found
  }

  function isValidDate(dateString) {
    // Regular expression to match the date format (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  
    // Check if the date string matches the expected format
    if (!dateRegex.test(dateString)) {
      return false;
    }
  
    // Convert the date string to a Date object
    const dateObject = new Date(dateString);
  
    // Check if the Date object is valid
    // (This ensures the date is not in an invalid format, such as "2021-02-30")
    if (isNaN(dateObject.getTime())) {
      return false;
    }
  
    // Additional checks based on your specific requirements can be added here
  
    // Date is valid
    return true;
  }
  function sumDigitsOfTwoDigitNumber(number) {
    // Convert the number to a string to access individual digits
    const numberString = String(number);
  
    // Check if the number has two digits
    if (numberString.length !== 2) {
      throw new Error('Invalid input. Please provide a two-digit number.');
    }
  
    // Extract the individual digits from the string and convert them back to numbers
    const digit1 = parseInt(numberString.charAt(0), 10);
    const digit2 = parseInt(numberString.charAt(1), 10);
  
    // Calculate the sum of the digits
    const sum = digit1 + digit2;
  
    return sum;
  }

  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  function reverseNumber(number) {
    // Convert the number to a string to manipulate its digits
    const numberString = String(number);
  
    // Reverse the characters of the string using the split, reverse, and join methods
    const reversedString = numberString.split('').reverse().join('');
  
    // Convert the reversed string back to a number
    const reversedNumber = parseInt(reversedString, 10);
  
    return reversedNumber;
  }

  function splitNumberIntoDigits(number) {
    // Convert the number to a string to access individual digits
    const numberString = String(number);
  
    // Split the string into an array of characters
    const digitsArray = numberString.split('');
  
    // Convert each character back to a number and store in a two-dimensional array
    const twoDArray = digitsArray.map((digit) => [parseInt(digit, 10)]);
  
    return twoDArray;
  }

  function humanLifePredictionCalc() {
    const dob = new Date(document.getElementById('dob').value);

    const year = dob.getFullYear(); // 2023
    const month = dob.getMonth() + 1; // January is 0, so we add 1 to get the actual month (7)
    const day = dob.getDate(); // 26
   // let syear = String(year);
   // let ryear= reverseString(syear);
   // let rmonth= reverseNumber(month);
   // let rday= reverseNumber(day);
    
    //let rdob= String(ryear)+String(rmonth)+String(rday)+String(ryear)+String(rmonth)+String(rday);
    let rdob= String(year)+String(month)+String(day)+String(year)+String(month)+String(day);
    const twoDArrayDOB = splitNumberIntoDigits(rdob);
    const predictions = [
        [1, 'Basic Finance'],
        [2, 'Basic Sentiment' ],
        [3, 'Basic Intelligent' ],
        [4, 'Intermediate Finance' ],
        [5, 'Intermediate Sentiment' ],
        [6, 'Intermediate Intelligent' ],
        [7, 'Extreme Finance' ],
        [8, 'Extreme Sentiment' ],
        [9, 'Extreme Intelligent' ],
        [0, 'Superb Intelligent' ]
      ];
    
      const data = [
        ["0 to 10"],
        ["11 to 20"],
        ["21 to 30"],
        ["31 to 40"],
        ["41 to 50"],
        ["51 to 60"],
        ["61 to 70"],
        ["71 to 80"],
        ["81 to 90"],
        ["91 to 100"],
        ["101 to 110"],
        ["111 to 120"]
      ];
      
    //   const data = [
    //     { name: "", age:"0 to 10"},
    //     { name: "", age:"11 to 20"},
    //     { name: "", age:"21 to 30"},
    //     { name: "", age:"31 to 40"},
    //     { name: "", age:"41 to 50"},
    //     { name: "", age:"51 to 60"},
    //     { name: "", age:"61 to 70"},
    //     { name: "", age:"71 to 80"},
    //     { name: "", age:"81 to 90"},
    //     { name: "", age:"91 to 100"},
    //   ];
      
      // Function to populate the table dynamically
        const tableBody = document.querySelector("#myTable tbody");
      
        // Clear existing rows (if any)
        tableBody.innerHTML = "";
      
        // Iterate through the data and create table rows

        for (let i = 0; i < data.length; i++) {
            const row = document.createElement("tr");
        
            const cell1 = document.createElement("td");
            cell1.textContent = twoDArrayDOB[i];
            // Add a class to the cell based on the column index
            cell1.classList.add(`column-2`);
            row.appendChild(cell1);
        
            const cell2 = document.createElement("td");
            cell2.textContent = data[i];
            cell2.classList.add(`column-3`);
            row.appendChild(cell2);
        
            tableBody.appendChild(row);
          }

        // twoDArrayDOB.forEach((item) => {
        //   const row = document.createElement("tr");
        //   const nameCell = document.createElement("td");
        //   const ageCell = document.createElement("td");
      
        //   nameCell.textContent = item.name;
        //   ageCell.textContent = item.age;
      
        //   row.appendChild(nameCell);
        //   row.appendChild(ageCell);
        //   tableBody.appendChild(row);
        // });
 

}
