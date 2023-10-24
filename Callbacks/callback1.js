function callback() {
  console.log("Task done!");
}

function main(callback) {
  console.log("Processing task");
  console.log("Finishing");
  callback();
}

main(callback);
