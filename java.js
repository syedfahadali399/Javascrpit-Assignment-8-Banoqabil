// assignment 1
function simulateAsyncOperation(shouldSucceed) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldSucceed) {
          resolve("Async operation succeeded!");
        } else {
          reject("Async operation failed!");
        }
      }, 1000);
    });
  }

  simulateAsyncOperation(true)
    .then((message) => {
      console.log("Success:", message);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  
  simulateAsyncOperation(false)
    .then((message) => {
      console.log("Success:", message);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

//Assignment 2
function fetchData() {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        const data = "Fetched data";
        console.log("Data fetched:", data);
        resolve(data);
      }, 1000);
    });
  }
  
  function processData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const processedData = data.toUpperCase();
        console.log("Data processed:", processedData);
        resolve(processedData);
      }, 1500);
    });
  }
  
  fetchData()
    .then(data => processData(data))
    .then(result => {
      console.log("Final result:", result);
    })
    .catch(error => {
      console.error("Error occurred:", error);
    }); 