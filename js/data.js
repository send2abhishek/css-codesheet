let promise = new Promise((resolve, reject) => {
  let message = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (response) => response.json()
  );
  if (message) {
    console.log(
      "Inside if ",
      message.then((e) => console.log("ok", e))
    );
    resolve(message);
  } else {
    reject("Failure");
  }
});
// Why promise and async fetch returns different results ?
promise
  .then((msg) => {
    console.log("Promise ", msg);
  })
  .catch((error) => {
    console.log(error);
  });

async function sample() {
  let jsonMessage = await fetch(
    "http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1%27"
  );
  if (!jsonMessage.ok) {
    return jsonMessage.text();
  } else {
    throw new Error("Wrong URL");
  }
}
// Why do we need these outer blocks for anonymous function.
// (async () => {
//   try {
//     let x = await sample();
//     console.log("Async Message " + x); // Accidentaly came to know the diff b/w var and let :-)
//   } catch (e) {
//     console.log(e);
//   }
// })();
