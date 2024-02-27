// function greeting() {
//   setTimeout(() => {
//     console.log("Hello!");
//   }, 4000);
// }
// greeting();
//----------------------------------
// function sum(a, b) {
//   console.log(`sum = ${a + b}`);
// }

// function calc(a, b, sumCallBack) {
//   sumCallBack(a, b);
// }
// calc(2, 3, sum);
//----------------------------------

// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log(`data = ${dataId}`);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }
// // CallBack Hell
// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4, () => {
//         getData(5, () => {
//           getData(6, () => {
//             getData(7);
//           });
//         });
//       });
//     });
//   });
// });

// Promises
// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`succesfully fetched data = ${dataId}`);
//       resolve("succesfully fetched all data");
//     }, 2000);
//   });
// }
// // Promises chain

// console.log("Fetching data 1...");
// getData(1)
//   .then((res) => {
//     console.log("Fetching data 2...");
//     return getData(2);
//   })
//   .then((res) => {
//     console.log("Fetching data 3...");
//     return getData(3);
//   })
//   .then((res) => {
//     console.log("Fetching data 4...");
//     return getData(4);
//   })
//   .then((res) => {
//     console.log(res);
//   });

// Async Await

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`succesfully fetched data = ${dataId}`);
      if (resolve) {
        resolve("succesfully fetched all data");
      } else {
        reject("some error to fetch data");
      }
    }, 2000);
  });
}

(async function () {
  // IIFE
  console.log("Fetching data 1...");
  await getData(1);
  console.log("Fetching data 2...");
  await getData(2);
  console.log("Fetching data 3...");
  await getData(3);
  console.log("Fetching data 4...");
  await getData(4);
})();
