const promise = new Promise((resolve, reject) => {
  // An asynchronous operation.
  setTimeout(function () {
    const res = false;
    if (res) {
      resolve("Resolved!");
    } else {
      reject(Error("Error"));
    }
  }, 3000);
});

console.log(promise);
console.log(promise);
