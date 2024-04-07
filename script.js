//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function() {
  const inputNumber = document.getElementById("ip").value;
  
  // Step 1: Create a promise that resolves after 2 seconds with the input number
  const step1Promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(inputNumber);
    }, 2000);
  });
  
  // Step 2: Chain the promise and display the result
  step1Promise.then((result) => {
    document.getElementById("output").innerText = `Result: ${result}`;
    return result;
  })
  // Step 3: Multiply the number by 2
  .then((result) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(result * 2);
      }, 1000);
    });
  })
  // Step 4: Subtract 3 from the number
  .then((result) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(result - 3);
      }, 1000);
    });
  })
  // Step 5: Divide the number by 2
  .then((result) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(result / 2);
      }, 1000);
    });
  })
  // Step 6: Add 10 to the number
  .then((result) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(result + 10);
      }, 1000);
    });
  })
  // Step 7: Display the final result
  .then((result) => {
    document.getElementById("output").innerText = `Final Result: ${result}`;
  })
  // Handle any errors
  .catch((error) => {
    console.error("An error occurred:", error);
  });
});
