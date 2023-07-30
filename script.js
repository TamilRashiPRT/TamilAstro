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


    // Display the Current Age
    const age = calcAge(dob);
    const resultElement = document.getElementById('result');
    //resultElement.innerHTML = `${name}, you are approximately ${ageInYears.toFixed(2)} years old.`;
    resultElement.innerHTML = `${name}, you are approximately: ${age.years} years, ${age.months} months, and ${age.days} days`


    // Calculate Birth Number
    const sumOfDay = dateParser(day);
    const resultElement1 = document.getElementById('birthnum');
    resultElement1.innerHTML = `Birth Number :: ${sumOfDay}`;

    // Calculate Fate Number
    const fateNumber = dateParser(day) + dateParser(month) + dateParser(year);
    const resultElement2 = document.getElementById('fatenum');
    resultElement2.innerHTML = `Fate number :: ${fateNumber}`;

    // Calculate Life Number
    const fnumsum=dateParser(fateNumber)
    const lifenum= lifeNUmPrediction(fnumsum, sumOfDay);
    const resultElement3 = document.getElementById('lifenum');
    resultElement3.innerHTML = `Life number :: ${lifenum}`;
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
 

  