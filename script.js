function humanLifeCalc() {
    const name = document.getElementById('name').value;
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();

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
    let fateNumber = dateParser(day) + dateParser(month) + dateParser(year);
    let fateNumber1= fateNumber;
    if (fateNumber1 >= 10) {
        fateNumber1 = dateParser(fateNumber);
    }
    const resultElement2 = document.getElementById('fatenum');
    resultElement2.innerHTML = `Fate number :: ${fateNumber} => ${fateNumber1}`;

    // Calculate Life Number
    const fnumsum=dateParser(fateNumber)
    const lifenum= lifeNUmPrediction(fnumsum, sumOfDay);
    const resultElement3 = document.getElementById('lifenum');
   // const value = findValueBasedOnCondition(myMap, (key, value) => key === lifenum);
    resultElement3.innerHTML = `Life number :: ${lifenum} `;
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
