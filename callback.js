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
// CallBack Hell
function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log(`data = ${dataId}`);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}
getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4, () => {
        getData(5, () => {
          getData(6, () => {
            getData(7);
          });
        });
      });
    });
  });
});
