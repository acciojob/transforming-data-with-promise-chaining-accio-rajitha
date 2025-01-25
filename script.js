//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function() {
  const inputNumber = parseFloat(document.getElementById("ip").value);

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
        const multipliedResult = result * 2;
        document.getElementById("output").innerText = `Result: ${multipliedResult}`;
        resolve(multipliedResult);
      }, 1000);
    });
  })
  // Step 4: Subtract 3 from the number
  .then((result) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const subtractedResult = result - 3;
        document.getElementById("output").innerText = `Result: ${subtractedResult}`;
        resolve(subtractedResult);
      }, 1000);
    });
  })
  // Step 5: Divide the number by 2
  .then((result) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const dividedResult = result / 2;
        document.getElementById("output").innerText = `Result: ${dividedResult}`;
        resolve(dividedResult);
      }, 1000);
    });
  })
  // Step 6: Add 10 to the number
  .then((result) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const finalResult = result + 10;
        document.getElementById("output").innerText = `Final Result: ${finalResult}`;
        resolve(finalResult);
      }, 1000);
    });
  })
  // Handle any errors
  .catch((error) => {
    console.error("An error occurred:", error);
  });
});
/*
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
        const multipliedResult = result * 2;
        document.getElementById("output").innerText = `Result: ${multipliedResult}`;
        resolve(multipliedResult);
      }, 1000);
    });
  })
  // Step 4: Subtract 3 from the number
  .then((result) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const subtractedResult = result - 3;
        document.getElementById("output").innerText = `Result: ${subtractedResult}`;
        resolve(subtractedResult);
      }, 1000);
    });
  })
  // Step 5: Divide the number by 2
  .then((result) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const dividedResult = result / 2;
        document.getElementById("output").innerText = `Result: ${dividedResult}`;
        resolve(dividedResult);
      }, 1000);
    });
  })
  // Step 6: Add 10 to the number
  .then((result) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const finalResult = result + 10;
        document.getElementById("output").innerText = `Final Result: ${finalResult}`;
        resolve(finalResult);
      }, 1000);
    });
  })
  // Handle any errors
  .catch((error) => {
    console.error("An error occurred:", error);
  });
});
*/