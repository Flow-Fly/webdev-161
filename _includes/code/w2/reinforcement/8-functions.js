function sayMyName(name) {
  console.log(name);
}

sayMyName("Haroun");


// HOF
function HOFDoWithHello(callback) {
  callback("Hello");
}

HOFDoWithHello(console.log);


function fakeForEach(arr, callback) {
  for (let element of arr) {
    callback(element);
  }
}

fakeForEach(["hello", "bye", "bonjour"], console.log);