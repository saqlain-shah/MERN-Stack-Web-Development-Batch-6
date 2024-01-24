function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
}
const msg = function () {
  //Async Function Expression
  const msg = helloWorld();
  console.log("Function : 1", msg);
};
const msg1 = () => {
  //Async Arrow Function
  const msg = await helloWorld();
  console.log("Function :2 ", msg);
};

msg();
msg1();
