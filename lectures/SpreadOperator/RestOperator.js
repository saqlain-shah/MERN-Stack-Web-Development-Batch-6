function average(...args) {
  console.log("Args", args);
  var sum = 0;

  for (var i = 0; i < args.length; i++) {
    sum = sum + args[i];
  }

  var avg = sum / args.length;
  console.log("Average of the args: ", avg);
}

average(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
